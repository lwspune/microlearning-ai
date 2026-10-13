/** How many recent attempts on a concept are considered (a tuning knob). */
export const ROUTING_WINDOW = 10;
/** How many times a misconception must appear in the window to suggest a refresher. */
export const ROUTING_REPEATS = 2;

export type AttemptMiss = { correct: boolean; misconceptionId: string | null };

/**
 * True when `misconceptionId` appears at least ROUTING_REPEATS times in the
 * learner's last ROUTING_WINDOW attempts on the concept (oldest first,
 * including the attempt just made). One slip is feedback; a repeat is a gap.
 */
export function isRepeatedMisconception(attempts: AttemptMiss[], misconceptionId: string): boolean {
  const recent = attempts.slice(-ROUTING_WINDOW);
  return recent.filter((a) => !a.correct && a.misconceptionId === misconceptionId).length >= ROUTING_REPEATS;
}
