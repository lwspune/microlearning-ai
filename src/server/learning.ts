import "server-only";
import type { Concept, ConceptId, Figure, GraphNode, Solution, Tier } from "@/content/types";
import { conceptStates, type ConceptState, inScope, nextConceptAfter } from "@/engine/unlock";
import { nextItem } from "@/engine/nextItem";
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
  /** In display order. `key` is the stored key, sent back for grading; `label` is the letter shown. */
  options: { key: string; label: string; text: RenderedInline[] }[];
};

export type Progress = {
  streak: number;
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
  type Row = { concept_id: string; state: string; streak: number; next_review_at: string | null; review_correct: number };
  if (!userId || conceptIds.length === 0) return { states, rows: [] as Row[] };
  const { data, error } = await createAdminClient()
    .from("learner_concept_state")
    .select("concept_id, state, streak, next_review_at, review_correct")
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

async function buildQuestion(itemId: string, userId: string): Promise<Question> {
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
    options: displayOrder(
      options.map((o) => ({ key: o.key!, text: renderInlineText(o.text!) })),
      `${userId}:${item.id}`,
    ),
  };
}

export async function getConceptSession(
  chapterSlug: string,
  conceptSlug: string,
  userId: string,
  options: { allowLocked?: boolean; scope?: Set<ConceptId>; gate?: boolean } = {},
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
  const [{ data: body, error: be }, { data: items, error: ie }, { data: needed, error: ne }, { data: reviewNeeded, error: re }] =
    await Promise.all([
      db.from("published_concepts").select("body").eq("id", concept.id).single(),
      db.from("published_items").select("id").eq("concept_id", concept.id).order("code"),
      db.rpc("mastery_streak_needed"),
      db.rpc("review_answers_needed"),
    ]);
  if (be) throw be;
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

  const content = body.body as Pick<Concept, "hook" | "explanation">;
  const own = rows.find((r) => r.concept_id === concept.id);

  return {
    kind: "open",
    code: concept.code,
    title: concept.title,
    slides: renderDeck(buildDeck(content)),
    question: await buildQuestion(nextItem(itemIds, attempts.map((a) => ({ itemId: a.item_id, correct: a.correct }))), userId),
    nextConcept: (() => {
      const code = nextConceptAfter(graph, open, states, concept.code, options.gate);
      const next = code ? concepts.find((c) => c.code === code) : undefined;
      return next ? { slug: next.slug, title: next.title } : null;
    })(),
    progress: {
      streak: own?.streak ?? 0,
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
  return buildQuestion(nextItem(itemIds, attempts.map((a) => ({ itemId: a.item_id, correct: a.correct }))), userId);
}

/** An item's step-by-step solution with its math rendered. */
export type RenderedSolution = { steps: RenderedInline[][]; figure: Figure | null };

/**
 * The solution to a published item. Call only after the learner's attempt is
 * recorded: it gives the answer away.
 */
export async function solutionFor(itemId: string): Promise<RenderedSolution | null> {
  const { data, error } = await createAdminClient().from("published_items").select("solution").eq("id", itemId).single();
  if (error) throw error;
  // Shape enforced by the items_solution_shape constraint and the content validator.
  const s = data.solution as unknown as Solution | null;
  return s ? { steps: s.steps.map(renderInlineText), figure: s.figure ?? null } : null;
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
