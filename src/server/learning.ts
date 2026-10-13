import "server-only";
import type { Concept, GraphNode, Tier } from "@/content/types";
import { conceptStates, type ConceptState } from "@/engine/unlock";
import { nextItem } from "@/engine/nextItem";
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

export type MapConcept = { code: string; slug: string; title: string; oneLiner: RenderedInline[]; tier: Tier; state: ConceptState };
export type ChapterMap = { slug: string; title: string; groups: { name: string; concepts: MapConcept[] }[] };

export type Question = {
  itemId: string;
  stem: RenderedBlock[];
  options: { key: string; text: RenderedInline[] }[];
};

export type Progress = { streak: number; needed: number; state: ConceptState };

export type ConceptSession =
  | { kind: "locked" }
  | {
      kind: "open";
      code: string;
      title: string;
      slides: RenderedSlide[];
      question: Question;
      progress: Progress;
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
  if (!userId || conceptIds.length === 0) return { states, rows: [] as { concept_id: string; state: string; streak: number }[] };
  const { data, error } = await createAdminClient()
    .from("learner_concept_state")
    .select("concept_id, state, streak")
    .eq("user_id", userId)
    .in("concept_id", conceptIds);
  if (error) throw error;
  for (const row of data) {
    if (row.state === "learning" || row.state === "mastered") states.set(codeById.get(row.concept_id)!, row.state);
  }
  return { states, rows: data };
}

export async function getChapterMap(chapterSlug: string, userId: string | null): Promise<ChapterMap | null> {
  const loaded = await loadGraph(chapterSlug);
  if (!loaded) return null;
  const { chapter, concepts, graph, published, codeById } = loaded;
  const { states } = await learnerStates(userId, concepts.map((c) => c.id), codeById);
  const computed = conceptStates(graph, published, states);

  const groups = [...new Set(graph.map((n) => n.group))].map((name) => ({
    name,
    concepts: graph
      .filter((n) => n.group === name)
      .map((n) => ({
        code: n.id,
        slug: n.slug,
        title: n.title,
        oneLiner: renderInlineText(n.oneLiner),
        tier: n.tier,
        state: computed.get(n.id)!,
      })),
  }));
  return { slug: chapter.slug, title: chapter.title, groups };
}

async function buildQuestion(itemId: string): Promise<Question> {
  const db = createAdminClient();
  const [{ data: item, error: ie }, { data: options, error: oe }] = await Promise.all([
    db.from("published_items").select("id, stem").eq("id", itemId).single(),
    // Key and text only: correctness and misconception tags stay on the server.
    db.from("published_item_options").select("key, text").eq("item_id", itemId).order("key"),
  ]);
  if (ie) throw ie;
  if (oe) throw oe;
  return {
    itemId: item.id!,
    stem: renderRichText(item.stem!),
    options: options.map((o) => ({ key: o.key!, text: renderInlineText(o.text!) })),
  };
}

export async function getConceptSession(chapterSlug: string, conceptSlug: string, userId: string): Promise<ConceptSession | null> {
  const loaded = await loadGraph(chapterSlug);
  if (!loaded) return null;
  const { concepts, graph, published, codeById } = loaded;
  const concept = concepts.find((c) => c.slug === conceptSlug && c.status === "approved");
  if (!concept) return null;

  const { states, rows } = await learnerStates(userId, concepts.map((c) => c.id), codeById);
  const state = conceptStates(graph, published, states).get(concept.code)!;
  if (state === "locked") return { kind: "locked" };

  const db = createAdminClient();
  const [{ data: body, error: be }, { data: items, error: ie }, { data: needed, error: ne }] = await Promise.all([
    db.from("published_concepts").select("body").eq("id", concept.id).single(),
    db.from("published_items").select("id").eq("concept_id", concept.id).order("code"),
    db.rpc("mastery_streak_needed"),
  ]);
  if (be) throw be;
  if (ie) throw ie;
  if (ne) throw ne;

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
    question: await buildQuestion(nextItem(itemIds, attempts.map((a) => ({ itemId: a.item_id, correct: a.correct })))),
    progress: { streak: own?.streak ?? 0, needed, state },
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
  return buildQuestion(nextItem(itemIds, attempts.map((a) => ({ itemId: a.item_id, correct: a.correct }))));
}
