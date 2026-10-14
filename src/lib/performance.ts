import { isReviewDue } from "@/engine/review";

/**
 * Student performance for staff (PLAN.md "Student performance"): the small
 * judgements the screens make, kept pure so they're tested once.
 */

export type ConceptStatus = "not-started" | "learning" | "mastered" | "review-due";
export type MistakeRow = { misconceptionId: string; recent: number; total: number; lastAt: string };

const DAY_MS = 24 * 60 * 60 * 1000;

/** Right answers as a whole percent; null before any answer (never "0%" for a student who hasn't started). */
export function accuracyPercent(answered: number, correct: number): number | null {
  return answered === 0 ? null : Math.round((correct / answered) * 100);
}

/** "Today", "Yesterday", "4 days ago", "2 weeks ago", "Over a month ago", or "Never". */
export function lastActiveLabel(iso: string | null, now: number): string {
  if (!iso) return "Never";
  const days = Math.floor((now - Date.parse(iso)) / DAY_MS);
  if (days < 1) return "Today";
  if (days < 2) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 31) {
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  return "Over a month ago";
}

/** A student's status on one concept, from their state row (if any); review due as the learner sees it. */
export function conceptStatus(row: { state: string; nextReviewAt: string | null } | undefined, now: number): ConceptStatus {
  if (!row) return "not-started";
  if (isReviewDue(row.state, row.nextReviewAt, now)) return "review-due";
  if (row.state === "mastered") return "mastered";
  if (row.state === "learning") return "learning";
  return "not-started";
}

/** Mistakes made in the last 30 days: most frequent first, then most recent; at most `limit`. */
export function rankMistakes(rows: MistakeRow[], limit = 5): MistakeRow[] {
  return rows
    .filter((r) => r.recent > 0)
    .sort((a, b) => b.recent - a.recent || Date.parse(b.lastAt) - Date.parse(a.lastAt))
    .slice(0, limit);
}
