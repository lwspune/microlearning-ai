import { translateConcept } from "./translate.ts";
import type { Chapter, Concept, Fallback, Figure, ItemSource, ItemVerify, Lang, Solution, Tier } from "./types.ts";

/** The JSON shape `seed_chapter(p jsonb)` expects (supabase/migrations/*_seed_chapter.sql). */
export type SeedPayload = {
  slug: string;
  title: string;
  concepts: SeedConcept[];
};

type SeedConcept = {
  code: string;
  slug: string;
  title: string;
  one_liner: string;
  grp: string;
  tier: Tier;
  ext: string[];
  sources: string[];
  prereqs: string[];
  status: Concept["status"];
  body: Pick<Concept, "hook" | "explanation" | "engineNotes"> | null;
  misconceptions: { code: string; mistake: string; remediation: string; fallback: Fallback }[];
  items: {
    code: string;
    stem: string;
    source: ItemSource;
    verify: ItemVerify;
    verified: boolean;
    solution: Solution;
    figure: Figure | null;
    options: { key: string; text: string; is_correct: boolean; misconception: string | null; value: string }[];
  }[];
  /** Approved translations, merged with the English: remediation by misconception code, solutions by item code. */
  translations: { lang: Lang; body: Pick<Concept, "hook" | "explanation" | "engineNotes">; remediation: Record<string, string>; solutions: Record<string, Solution> }[];
};

/**
 * Builds the seed payload for a chapter. `verified` must only be true when
 * `npm run content:verify` has passed for this exact content.
 */
export function toSeedPayload(chapter: Chapter, verified: boolean): SeedPayload {
  const authored = new Map(chapter.concepts.map((c) => [c.id, c]));

  return {
    slug: chapter.slug,
    title: chapter.title,
    concepts: chapter.graph.map((node) => {
      const c = authored.get(node.id);
      return {
        code: node.id,
        slug: node.slug,
        title: node.title,
        one_liner: node.oneLiner,
        grp: node.group,
        tier: node.tier,
        ext: node.ext,
        sources: node.sources,
        prereqs: node.prereqs,
        status: c?.status ?? "draft",
        body: c ? { hook: c.hook, explanation: c.explanation, engineNotes: c.engineNotes } : null,
        misconceptions: (c?.misconceptions ?? []).map((m) => ({
          code: m.id,
          mistake: m.mistake,
          remediation: m.remediation,
          fallback: m.fallback,
        })),
        items: (c?.items ?? []).map((it) => ({
          code: it.id,
          stem: it.stem,
          source: it.source,
          verify: it.verify,
          verified,
          solution: it.solution,
          figure: it.figure ?? null,
          options: it.options.map((o) => ({
            key: o.key,
            text: o.text,
            is_correct: o.correct,
            misconception: o.misconceptionId ?? null,
            value: o.value,
          })),
        })),
        translations: c
          ? (chapter.translations ?? [])
              .filter((t) => t.id === c.id && t.status === "approved")
              .map((t) => {
                const tc = translateConcept(c, t);
                return {
                  lang: t.lang,
                  body: { hook: tc.hook, explanation: tc.explanation, engineNotes: tc.engineNotes },
                  remediation: Object.fromEntries(tc.misconceptions.map((m) => [m.id, m.remediation])),
                  solutions: Object.fromEntries(tc.items.map((i) => [i.id, i.solution])),
                };
              })
          : [],
      };
    }),
  };
}
