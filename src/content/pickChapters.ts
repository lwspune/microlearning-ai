import type { Chapter } from "./types.ts";

/** The chapters named by slug, in catalog order; every chapter when none is named. Throws on an unknown slug. */
export function pickChapters(all: Chapter[], slugs: string[]): Chapter[] {
  if (slugs.length === 0) return all;
  const unknown = slugs.filter((s) => !all.some((c) => c.slug === s));
  if (unknown.length) throw new Error(`Not a chapter: ${unknown.join(", ")}`);
  return all.filter((c) => slugs.includes(c.slug));
}
