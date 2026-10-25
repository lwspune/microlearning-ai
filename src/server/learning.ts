import "server-only";
import { LESSON_LANGUAGES, type LessonLanguage } from "@/content/languages";
import type { Concept, ConceptId, Figure, GraphNode, Solution, Tier } from "@/content/types";
import { conceptStates, type ConceptState, inScope, nextConceptAfter } from "@/engine/unlock";
import { type NextItem, nextItem } from "@/engine/nextItem";
import { displayOrder } from "@/engine/optionOrder";
import { isReviewDue } from "@/engine/review";
import { isRepeatedMisconception } from "@/engine/routing";
import { buildDeck } from "@/lessons/deck";
import { type RenderedSlide, renderDeck } from "@/lessons/renderDeck";
import { createAdminClient } from "@/lib/supabase/admin";
import type { RenderedBlock, RenderedInline } from "@/lib/renderedText";
import { renderInlineText, renderRichText } from "@/lib/richText";

/**
 * Server-side reads for the learning flow. Content comes only from the
 * published_* views (approved concepts, verified items). Questions sent to the
 * browser carry option keys and text only: never which option is correct or
 * which misconception an option reveals.
 */

export type MapConcept = {
  code: string;
  slug: string;
  title: string;
  oneLiner: RenderedInline[];
  tier: Tier;
  state: ConceptState;
  /** Mastered and due for spaced review now. */
  due: boolean;
};
export type ChapterMap = { slug: string; title: string; groups: { name: string; concepts: MapConcept[] }[] };

export type Question = {
  itemId: string;
  stem: RenderedBlock[];
  /** Shown whole with the stem ("the shaded region is ..."). */
  figure: Figure | null;
  /** A question the learner missed and is now retrying (it counts once answered right). */
  retry: boolean;
  /** In display order. `key` is the stored key, sent back for grading; `label` is the letter shown. */
  options: { key: string; label: string; text: RenderedInline[] }[];
};

export type Progress = {
  /** Different questions whose latest answer is right. */
  streak: number;
  /** Questions whose latest answer is wrong: they come back until answered right. */
  toRetry: number;
  needed: number;
  state: ConceptState;
  /** Spaced review: due now, correct answers so far in this review, answers needed to pass. */
  review: { due: boolean; correct: number; needed: number };
};

export type ConceptSession =
  | { kind: "locked" }
  | {
      kind: "open";
      code: string;
      title: string;
      slides: RenderedSlide[];
      /** The language the slides are in: the one asked for, or English when the concept has no translation into it. */
      language: LessonLanguage;
      /** English and every language this concept is translated into, in the switch's order. */
      languages: LessonLanguage[];
      question: Question;
      progress: Progress;
      /** Where "Next concept" goes once this one is mastered; null when nothing open is left. */
      nextConcept: { slug: string; title: string } | null;
    };

async function loadGraph(chapterSlug: string) {
  const db = createAdminClient();
  const { data: chapter, error } = await db.from("chapters").select("id, slug, title").eq("slug", chapterSlug).maybeSingle();
  if (error) throw error;
  if (!chapter) return null;

  const { data: concepts, error: ce } = await db
    .from("concepts")
    .select("id, code, slug, title, one_liner, grp, tier, status")
    .eq("chapter_id", chapter.id)
    // The graph's order, not the code's: Sequences and Series opens with C15–C18.
    .order("position")
    .order("code");
  if (ce) throw ce;
  const { data: edges, error: ee } = await db
    .from("concept_prereqs")
    .select("concept_id, prereq_id")
    .in("concept_id", concepts.map((c) => c.id));
  if (ee) throw ee;

  const codeById = new Map(concepts.map((c) => [c.id, c.code]));
  const graph: GraphNode[] = concepts.map((c) => ({
    id: c.code,
    slug: c.slug,
    title: c.title,
    oneLiner: c.one_liner,
    group: c.grp,
    tier: c.tier as Tier,
    prereqs: edges.filter((e) => e.concept_id === c.id && codeById.has(e.prereq_id)).map((e) => codeById.get(e.prereq_id)!),
    ext: [],
    sources: [],
  }));
  const published = new Set(concepts.filter((c) => c.status === "approved").map((c) => c.code));
  return { chapter, concepts, graph, published, codeById };
}

async function learnerStates(userId: string | null, conceptIds: string[], codeById: Map<string, string>) {
  const states = new Map<string, "learning" | "mastered">();
  type Row = { concept_id: string; state: string; streak: number; to_retry: number; next_review_at: string | null; review_correct: number };
  if (!userId || conceptIds.length === 0) return { states, rows: [] as Row[] };
  const { data, error } = await createAdminClient()
    .from("learner_concept_state")
    .select("concept_id, state, streak, to_retry, next_review_at, review_correct")
    .eq("user_id", userId)
    .in("concept_id", conceptIds);
  if (error) throw error;
  for (const row of data) {
    if (row.state === "learning" || row.state === "mastered") states.set(codeById.get(row.concept_id)!, row.state);
  }
  return { states, rows: data };
}

/**
 * `scope`: a course's concepts. The map then shows only those, unlocked within the course.
 * `gate`: whether this viewer waits on prerequisites (`gateFor`; staff never do).
 */
export async function getChapterMap(
  chapterSlug: string,
  userId: string | null,
  scope?: Set<ConceptId>,
  gate?: boolean,
): Promise<ChapterMap | null> {
  const loaded = await loadGraph(chapterSlug);
  if (!loaded) return null;
  const { chapter, concepts, graph, published, codeById } = loaded;
  const { states, rows } = await learnerStates(userId, concepts.map((c) => c.id), codeById);
  const computed = conceptStates(graph, inScope(published, scope), states, gate);
  const idByCode = new Map(concepts.map((c) => [c.code, c.id]));
  const now = Date.now();
  const dueCodes = new Set(
    rows.filter((r) => isReviewDue(r.state, r.next_review_at, now)).map((r) => codeById.get(r.concept_id)!),
  );

  const shown = scope ? graph.filter((n) => scope.has(n.id)) : graph;
  const groups = [...new Set(shown.map((n) => n.group))].map((name) => ({
    name,
    concepts: shown
      .filter((n) => n.group === name)
      .map((n) => ({
        code: n.id,
        slug: n.slug,
        title: n.title,
        oneLiner: renderInlineText(n.oneLiner),
        tier: n.tier,
        state: computed.get(n.id)!,
        due: idByCode.has(n.id) && dueCodes.has(n.id),
      })),
  }));
  return { slug: chapter.slug, title: chapter.title, groups };
}

/** `tries`: earlier answers to this question; each retry shows the options in a new order. */
async function buildQuestion({ itemId, retry }: NextItem, userId: string, tries: number): Promise<Question> {
  const db = createAdminClient();
  const [{ data: item, error: ie }, { data: options, error: oe }] = await Promise.all([
    db.from("published_items").select("id, stem, figure").eq("id", itemId).single(),
    // Key and text only: correctness and misconception tags stay on the server.
    db.from("published_item_options").select("key, text").eq("item_id", itemId).order("key"),
  ]);
  if (ie) throw ie;
  if (oe) throw oe;
  return {
    itemId: item.id!,
    stem: renderRichText(item.stem!),
    figure: (item.figure as Figure | null) ?? null,
    retry,
    options: displayOrder(
      options.map((o) => ({ key: o.key!, text: renderInlineText(o.text!) })),
      tries === 0 ? `${userId}:${item.id}` : `${userId}:${item.id}:${tries}`,
    ),
  };
}

export async function getConceptSession(
  chapterSlug: string,
  conceptSlug: string,
  userId: string,
  options: { allowLocked?: boolean; scope?: Set<ConceptId>; gate?: boolean; lang?: LessonLanguage } = {},
): Promise<ConceptSession | null> {
  const loaded = await loadGraph(chapterSlug);
  if (!loaded) return null;
  const { concepts, graph, published, codeById } = loaded;
  const concept = concepts.find((c) => c.slug === conceptSlug && c.status === "approved");
  if (!concept) return null;

  const { states, rows } = await learnerStates(userId, concepts.map((c) => c.id), codeById);
  // A concept outside the course (reached by a refresher) unlocks as in the whole chapter.
  const scope = options.scope?.has(concept.code) ? options.scope : undefined;
  const open = inScope(published, scope);
  const state = conceptStates(graph, open, states, options.gate).get(concept.code)!;
  if (state === "locked" && !options.allowLocked) return { kind: "locked" };

  const db = createAdminClient();
  const [
    { data: body, error: be },
    { data: translations, error: te },
    { data: items, error: ie },
    { data: needed, error: ne },
    { data: reviewNeeded, error: re },
  ] = await Promise.all([
    db.from("published_concepts").select("body").eq("id", concept.id).single(),
    db.from("concept_translations").select("lang, body").eq("concept_id", concept.id),
    db.from("published_items").select("id").eq("concept_id", concept.id).order("code"),
    db.rpc("mastery_streak_needed"),
    db.rpc("review_answers_needed"),
  ]);
  if (be) throw be;
  if (te) throw te;
  if (ie) throw ie;
  if (ne) throw ne;
  if (re) throw re;

  const itemIds = items.map((i) => i.id!);
  const { data: attempts, error: ae } = await db
    .from("attempts")
    .select("item_id, correct")
    .eq("user_id", userId)
    .in("item_id", itemIds)
    .order("id");
  if (ae) throw ae;

  const translated = options.lang && options.lang !== "en" ? translations.find((t) => t.lang === options.lang) : undefined;
  // A translation is the English body with its text translated (seedPayload).
  const content = (translated ?? body).body as Pick<Concept, "hook" | "explanation">;
  const own = rows.find((r) => r.concept_id === concept.id);

  return {
    kind: "open",
    code: concept.code,
    title: concept.title,
    slides: renderDeck(buildDeck(content)),
    language: translated ? options.lang! : "en",
    languages: LESSON_LANGUAGES.map((l) => l.id).filter((id) => id === "en" || translations.some((t) => t.lang === id)),
    question: await questionAfter(itemIds, attempts, userId),
    nextConcept: (() => {
      const code = nextConceptAfter(graph, open, states, concept.code, options.gate);
      const next = code ? concepts.find((c) => c.code === code) : undefined;
      return next ? { slug: next.slug, title: next.title } : null;
    })(),
    progress: {
      streak: own?.streak ?? 0,
      toRetry: own?.to_retry ?? 0,
      needed,
      state,
      review: {
        due: own ? isReviewDue(own.state, own.next_review_at, Date.now()) : false,
        correct: own?.review_correct ?? 0,
        needed: reviewNeeded,
      },
    },
  };
}

/** Next question for the concept that `itemId` belongs to (after an answer). */
export async function nextQuestionFor(itemId: string, userId: string): Promise<Question> {
  const db = createAdminClient();
  const { data: item, error } = await db.from("published_items").select("concept_id").eq("id", itemId).single();
  if (error) throw error;
  const { data: items, error: ie } = await db.from("published_items").select("id").eq("concept_id", item.concept_id!).order("code");
  if (ie) throw ie;
  const itemIds = items.map((i) => i.id!);
  const { data: attempts, error: ae } = await db
    .from("attempts")
    .select("item_id, correct")
    .eq("user_id", userId)
    .in("item_id", itemIds)
    .order("id");
  if (ae) throw ae;
  return questionAfter(itemIds, attempts, userId);
}

/** The next question given this learner's attempts on the concept, oldest first. */
function questionAfter(itemIds: string[], attempts: { item_id: string; correct: boolean }[], userId: string): Promise<Question> {
  const next = nextItem(itemIds, attempts.map((a) => ({ itemId: a.item_id, correct: a.correct })));
  return buildQuestion(next, userId, attempts.filter((a) => a.item_id === next.itemId).length);
}

/** An item's step-by-step solution with its math rendered. */
export type RenderedSolution = { steps: RenderedInline[][]; figure: Figure | null; lang: LessonLanguage };

/**
 * The solution to a published item. Call only after the learner's attempt is
 * recorded: it gives the answer away.
 */
export async function solutionFor(itemId: string, lang: LessonLanguage = "en"): Promise<RenderedSolution | null> {
  const db = createAdminClient();
  const [{ data, error }, { data: translated, error: te }] = await Promise.all([
    db.from("published_items").select("solution").eq("id", itemId).single(),
    lang === "en" ? { data: null, error: null } : db.from("item_translations").select("solution").eq("item_id", itemId).eq("lang", lang).maybeSingle(),
  ]);
  if (error) throw error;
  if (te) throw te;
  // Shape enforced by the items_solution_shape constraints and the content validator.
  const s = (translated ?? data).solution as unknown as Solution | null;
  return s ? { steps: s.steps.map(renderInlineText), figure: s.figure ?? null, lang: translated ? lang : "en" } : null;
}

/**
 * The remediation for the learner's latest answer to `itemId`, in `lang`; null when that answer
 * revealed no misconception or the misconception has no translation (the English one then stands).
 */
export async function translatedRemediation(itemId: string, userId: string, lang: LessonLanguage): Promise<string | null> {
  if (lang === "en") return null;
  const db = createAdminClient();
  const { data: latest, error } = await db
    .from("attempts")
    .select("misconception_id")
    .eq("user_id", userId)
    .eq("item_id", itemId)
    .order("id", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  if (!latest?.misconception_id) return null;
  const { data, error: te } = await db
    .from("misconception_translations")
    .select("remediation")
    .eq("misconception_id", latest.misconception_id)
    .eq("lang", lang)
    .maybeSingle();
  if (te) throw te;
  return data?.remediation ?? null;
}

/** Where a repeated mistake should send the learner. */
export type Route =
  | { kind: "refresher"; conceptSlug: string; title: string }
  | { kind: "revise"; label: string };

/**
 * After a wrong answer: if the learner has now made the same mistake twice
 * recently on this concept, return where its fallback points. A published
 * concept gets a refresher link; an unwritten concept or an outside topic gets
 * a "worth revising" note. Null when there's nothing to route.
 */
export async function routeAfterMiss(itemId: string, userId: string): Promise<Route | null> {
  const db = createAdminClient();
  const { data: item, error } = await db.from("published_items").select("concept_id").eq("id", itemId).single();
  if (error) throw error;
  const { data: items, error: ie } = await db.from("items").select("id").eq("concept_id", item.concept_id!);
  if (ie) throw ie;
  const { data: attempts, error: ae } = await db
    .from("attempts")
    .select("correct, misconception_id")
    .eq("user_id", userId)
    .in("item_id", items.map((i) => i.id))
    .order("id");
  if (ae) throw ae;

  const latest = attempts.at(-1);
  if (!latest || latest.correct || !latest.misconception_id) return null;
  const history = attempts.map((a) => ({ correct: a.correct, misconceptionId: a.misconception_id }));
  if (!isRepeatedMisconception(history, latest.misconception_id)) return null;

  const { data: m, error: me } = await db
    .from("misconceptions")
    .select("fallback_kind, fallback_concept_id, fallback_topic")
    .eq("id", latest.misconception_id)
    .single();
  if (me) throw me;
  if (m.fallback_kind === "ext") return { kind: "revise", label: m.fallback_topic! };
  if (m.fallback_kind !== "concept") return null;

  const { data: target, error: te } = await db
    .from("concepts")
    .select("slug, title, status")
    .eq("id", m.fallback_concept_id!)
    .single();
  if (te) throw te;
  if (target.status !== "approved") return { kind: "revise", label: `${target.title} (coming soon)` };

  // The gap shows the root concept needs revisiting: due for review now (no-op unless mastered).
  const { error: de } = await db.rpc("mark_review_due", { p_user: userId, p_concept: m.fallback_concept_id! });
  if (de) throw de;
  return { kind: "refresher", conceptSlug: target.slug, title: target.title };
}
