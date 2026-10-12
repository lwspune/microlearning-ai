import { chapters } from "@/content/chapters";

/**
 * The review pages expose answer keys, so they are off in production unless
 * REVIEW_ENABLED=true is set explicitly. The pages are prerendered, so the
 * flag must be present at BUILD time; setting it only at `next start` has no effect.
 */
export function reviewEnabled(): boolean {
  return process.env.NODE_ENV !== "production" || process.env.REVIEW_ENABLED === "true";
}

export function findConcept(chapterSlug: string, conceptSlug: string) {
  const chapter = chapters.find((c) => c.slug === chapterSlug);
  const node = chapter?.graph.find((n) => n.slug === conceptSlug);
  const concept = chapter?.concepts.find((c) => c.id === node?.id);
  if (!chapter || !node || !concept) return null;
  return { chapter, node, concept };
}
