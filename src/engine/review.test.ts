import { describe, expect, it } from "vitest";
import { daysUntil, isReviewDue } from "./review";

const NOW = Date.parse("2026-10-13T10:00:00Z");

describe("isReviewDue", () => {
  it("is due when mastered and the review time has passed", () => {
    expect(isReviewDue("mastered", "2026-10-13T09:59:00Z", NOW)).toBe(true);
    expect(isReviewDue("mastered", "2026-10-13T10:00:00Z", NOW)).toBe(true);
  });

  it("is not due before the review time", () => {
    expect(isReviewDue("mastered", "2026-10-14T10:00:00Z", NOW)).toBe(false);
  });

  it("is never due for a concept that isn't mastered or has no schedule", () => {
    expect(isReviewDue("learning", "2026-10-01T00:00:00Z", NOW)).toBe(false);
    expect(isReviewDue("mastered", null, NOW)).toBe(false);
  });
});

describe("daysUntil", () => {
  it("rounds to whole days, at least 1 for any future time", () => {
    expect(daysUntil("2026-10-16T10:00:00Z", NOW)).toBe(3);
    expect(daysUntil("2026-10-14T09:00:00Z", NOW)).toBe(1);
    expect(daysUntil("2026-10-13T10:30:00Z", NOW)).toBe(1);
  });

  it("is 0 for a time that has passed", () => {
    expect(daysUntil("2026-10-12T10:00:00Z", NOW)).toBe(0);
  });
});
