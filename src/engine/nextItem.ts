export type AttemptLite = { itemId: string; correct: boolean };

/**
 * Picks the next question for a concept. `attempts` are this learner's attempts
 * on the concept, oldest first.
 *
 * Items answered correctly since the last wrong answer (the current run) are
 * skipped: the database counts only DIFFERENT items toward the streak, so
 * repeating one would not move the learner forward. Among the rest, an item
 * never attempted comes first, then the least recently attempted.
 */
export function nextItem(itemIds: string[], attempts: AttemptLite[]): string {
  if (itemIds.length === 0) throw new Error("concept has no items");

  const lastWrong = attempts.findLastIndex((a) => !a.correct);
  const correctInRun = new Set(attempts.slice(lastWrong + 1).filter((a) => a.correct).map((a) => a.itemId));

  const lastSeen = new Map<string, number>();
  attempts.forEach((a, i) => lastSeen.set(a.itemId, i));

  const candidates = itemIds.filter((id) => !correctInRun.has(id));
  const pool = candidates.length > 0 ? candidates : itemIds;

  const unseen = pool.find((id) => !lastSeen.has(id));
  if (unseen) return unseen;
  return pool.reduce((best, id) => (lastSeen.get(id)! < lastSeen.get(best)! ? id : best));
}
