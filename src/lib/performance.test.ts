import { describe, expect, it } from "vitest";
import { accuracyPercent, conceptStatus, lastActiveLabel, rankMistakes } from "./performance";

const NOW = Date.parse("2026-10-14T12:00:00Z");
const ago = (ms: number) => new Date(NOW - ms).toISOString();
const HOUR = 3600_000;
const DAY = 24 * HOUR;

describe("accuracyPercent", () => {
  it("is the share of answers that were right, as a whole percent", () => {
    expect(accuracyPercent(3, 2)).toBe(67);
    expect(accuracyPercent(4, 4)).toBe(100);
    expect(accuracyPercent(5, 0)).toBe(0);
  });

  it("is null before any answer, so it never shows 0% for a student who hasn't started", () => {
    expect(accuracyPercent(0, 0)).toBeNull();
  });
});

describe("lastActiveLabel", () => {
  it("speaks in days and weeks", () => {
    expect(lastActiveLabel(ago(2 * HOUR), NOW)).toBe("Today");
    expect(lastActiveLabel(ago(30 * HOUR), NOW)).toBe("Yesterday");
    expect(lastActiveLabel(ago(4 * DAY), NOW)).toBe("4 days ago");
    expect(lastActiveLabel(ago(15 * DAY), NOW)).toBe("2 weeks ago");
    expect(lastActiveLabel(ago(70 * DAY), NOW)).toBe("Over a month ago");
  });

  it("says Never for a student with no activity", () => {
    expect(lastActiveLabel(null, NOW)).toBe("Never");
  });
});

describe("conceptStatus (a student's state on one concept)", () => {
  it("is not started without a state row", () => {
    expect(conceptStatus(undefined, NOW)).toBe("not-started");
  });

  it("is learning, mastered, or review due once mastered and its review time has come", () => {
    expect(conceptStatus({ state: "learning", nextReviewAt: null }, NOW)).toBe("learning");
    expect(conceptStatus({ state: "mastered", nextReviewAt: ago(-DAY) }, NOW)).toBe("mastered");
    expect(conceptStatus({ state: "mastered", nextReviewAt: ago(HOUR) }, NOW)).toBe("review-due");
  });
});

describe("rankMistakes", () => {
  const row = (id: string, recent: number, total: number, lastAt: string) => ({ misconceptionId: id, recent, total, lastAt });

  it("keeps only mistakes made in the last 30 days, most frequent first, then most recent", () => {
    const ranked = rankMistakes([
      row("old", 0, 9, ago(40 * DAY)),
      row("twice", 2, 2, ago(3 * DAY)),
      row("once-late", 1, 1, ago(1 * DAY)),
      row("once-early", 1, 4, ago(5 * DAY)),
      row("thrice", 3, 3, ago(2 * DAY)),
    ]);
    expect(ranked.map((r) => r.misconceptionId)).toEqual(["thrice", "twice", "once-late", "once-early"]);
  });

  it("returns at most `limit` mistakes", () => {
    const many = Array.from({ length: 8 }, (_, i) => row(`m${i}`, 1, 1, ago(i * HOUR)));
    expect(rankMistakes(many, 5)).toHaveLength(5);
  });
});
