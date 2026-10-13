import { describe, expect, it } from "vitest";
import { ROUTING_WINDOW, isRepeatedMisconception } from "./routing";

const miss = (m: string) => ({ correct: false, misconceptionId: m });
const hit = { correct: true, misconceptionId: null };

describe("isRepeatedMisconception", () => {
  it("is false the first time a misconception shows up", () => {
    expect(isRepeatedMisconception([hit, miss("M1")], "M1")).toBe(false);
  });

  it("is true the second time within the window", () => {
    expect(isRepeatedMisconception([miss("M1"), hit, hit, miss("M1")], "M1")).toBe(true);
  });

  it("does not combine different misconceptions", () => {
    expect(isRepeatedMisconception([miss("M2"), miss("M1")], "M1")).toBe(false);
  });

  it("forgets a miss that has left the window", () => {
    const old = [miss("M1"), ...Array.from({ length: ROUTING_WINDOW - 1 }, () => hit), miss("M1")];
    expect(old).toHaveLength(ROUTING_WINDOW + 1);
    expect(isRepeatedMisconception(old, "M1")).toBe(false);
  });

  it("counts a miss exactly at the edge of the window", () => {
    const edge = [miss("M1"), ...Array.from({ length: ROUTING_WINDOW - 2 }, () => hit), miss("M1")];
    expect(edge).toHaveLength(ROUTING_WINDOW);
    expect(isRepeatedMisconception(edge, "M1")).toBe(true);
  });

  it("is false with no attempts", () => {
    expect(isRepeatedMisconception([], "M1")).toBe(false);
  });
});
