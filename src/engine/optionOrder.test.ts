import { describe, expect, it } from "vitest";
import { complexNumbers } from "@/content/chapters/complex-numbers";
import { displayOrder } from "./optionOrder";

const opts = ["A", "B", "C", "D"].map((key) => ({ key }));
const USER = "00000000-0000-4000-8000-000000000001";

describe("displayOrder", () => {
  it("keeps every option exactly once", () => {
    const shown = displayOrder(opts, `${USER}:item-1`);
    expect(shown.map((o) => o.key).sort()).toEqual(["A", "B", "C", "D"]);
  });

  it("labels options A, B, C, D by display position", () => {
    expect(displayOrder(opts, `${USER}:item-1`).map((o) => o.label)).toEqual(["A", "B", "C", "D"]);
  });

  it("gives the same order for the same seed, so a reload doesn't reshuffle", () => {
    expect(displayOrder(opts, `${USER}:item-1`)).toEqual(displayOrder(opts, `${USER}:item-1`));
  });

  it("does not mutate its input", () => {
    const input = opts.map((o) => ({ ...o }));
    displayOrder(input, "seed");
    expect(input.map((o) => o.key)).toEqual(["A", "B", "C", "D"]);
  });

  it("spreads the correct answer over all positions across the chapter", () => {
    const items = complexNumbers.concepts.flatMap((c) => c.items);
    const counts = [0, 0, 0, 0];
    for (const item of items) {
      const shown = displayOrder(item.options, `${USER}:${item.id}`);
      counts[shown.findIndex((o) => o.correct)]++;
    }
    // No position gets the correct answer for more than half the questions.
    for (const n of counts) {
      expect(n).toBeGreaterThan(0);
      expect(n).toBeLessThan(items.length / 2);
    }
  });

  it("moves the correct answer off A in items authored with it first", () => {
    const allA = complexNumbers.concepts
      .flatMap((c) => c.items)
      .filter((item) => item.options.find((o) => o.correct)?.key === "A");
    expect(allA.length).toBeGreaterThan(10);
    const stillFirst = allA.filter((item) => displayOrder(item.options, `${USER}:${item.id}`)[0].correct).length;
    expect(stillFirst).toBeLessThan(allA.length / 2);
  });
});
