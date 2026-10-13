import type { Chapter } from "@/content/types";
import { ancestorsOf } from "@/content/validate";

/**
 * Validates a refresher link (/learn/<chapter>/<target>?from=<source>). A
 * refresher may open a concept the learner hasn't unlocked, so it's allowed
 * only when both concepts are published and the target is a prerequisite
 * (direct or indirect) of the source. Anything else returns null.
 */
export function refresherFrom(
  chapter: Chapter,
  targetSlug: string,
  fromSlug: string,
): { fromSlug: string; fromTitle: string } | null {
  const published = new Set(chapter.concepts.filter((c) => c.status === "approved").map((c) => c.id));
  const target = chapter.graph.find((n) => n.slug === targetSlug);
  const from = chapter.graph.find((n) => n.slug === fromSlug);
  if (!target || !from || !published.has(target.id) || !published.has(from.id)) return null;
  if (!ancestorsOf(chapter.graph, from.id).has(target.id)) return null;
  return { fromSlug: from.slug, fromTitle: from.title };
}
