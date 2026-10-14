import { describe, expect, it } from "vitest";
import { complexNumbers } from "@/content/chapters/complex-numbers";
import type { GraphNode } from "@/content/types";
import { conceptStates, gateFor, inScope, MASTERY_GATE } from "./unlock";
import { nextItem } from "./nextItem";

function node(id: string, prereqs: string[] = []): GraphNode {
  return { id, slug: id, title: id, oneLiner: "", group: "g", tier: "core", prereqs, ext: [], sources: [] };
}

// A ← B ← C ← D  (D needs C needs B needs A)
const chain = [node("A"), node("B", ["A"]), node("C", ["B"]), node("D", ["C"])];

describe("gateFor", () => {
  it("never gates staff: teachers and above open every concept", () => {
    for (const role of ["teacher", "academy_admin", "superadmin"] as const) expect(gateFor(role)).toBe(false);
  });

  it("gates students and guests by MASTERY_GATE", () => {
    expect(gateFor("student")).toBe(MASTERY_GATE);
    expect(gateFor(null)).toBe(MASTERY_GATE);
  });
});

describe("inScope", () => {
  it("keeps only the published concepts a course covers", () => {
    expect(inScope(new Set(["A", "B", "C"]), new Set(["A", "C", "D"]))).toEqual(new Set(["A", "C"]));
  });

  it("is everything published when there is no course", () => {
    expect(inScope(new Set(["A", "B"]))).toEqual(new Set(["A", "B"]));
  });
});

describe("conceptStates", () => {
  it("is ungated for now, so teachers can open any concept (MASTERY_GATE)", () => {
    expect(MASTERY_GATE).toBe(false);
  });

  it("with the gate off, opens every published concept whatever the learner has mastered", () => {
    const s = conceptStates(chain, new Set(["A", "C", "D"]), new Map(), false);
    expect([s.get("A"), s.get("C"), s.get("D")]).toEqual(["available", "available", "available"]);
  });

  it("with the gate off, still keeps progress and still hides unpublished concepts", () => {
    const s = conceptStates(chain, new Set(["A", "B", "C"]), new Map([["A", "mastered"], ["B", "learning"]]), false);
    expect([s.get("A"), s.get("B"), s.get("C"), s.get("D")]).toEqual(["mastered", "learning", "available", "unpublished"]);
  });

  it("defaults to MASTERY_GATE", () => {
    const s = conceptStates(chain, new Set(["A", "C"]), new Map());
    expect(s.get("C")).toBe(MASTERY_GATE ? "locked" : "available");
  });

  it("marks concepts without published content as unpublished", () => {
    const s = conceptStates(chain, new Set(["A"]), new Map(), true);
    expect(s.get("B")).toBe("unpublished");
  });

  it("opens a published concept whose published ancestors are all mastered", () => {
    const published = new Set(["A", "C"]);
    expect(conceptStates(chain, published, new Map(), true).get("C")).toBe("locked");
    expect(conceptStates(chain, published, new Map([["A", "mastered"]]), true).get("C")).toBe("available");
  });

  it("looks through unpublished concepts to published ancestors", () => {
    // D's nearest published ancestor is A, two steps up through unpublished B and C.
    const published = new Set(["A", "D"]);
    expect(conceptStates(chain, published, new Map(), true).get("D")).toBe("locked");
    expect(conceptStates(chain, published, new Map([["A", "mastered"]]), true).get("D")).toBe("available");
  });

  it("treats an unpublished prerequisite as known", () => {
    expect(conceptStates(chain, new Set(["B"]), new Map(), true).get("B")).toBe("available");
  });

  it("keeps the learner's own progress", () => {
    const s = conceptStates(chain, new Set(["A", "B"]), new Map([["A", "mastered"], ["B", "learning"]]), true);
    expect(s.get("A")).toBe("mastered");
    expect(s.get("B")).toBe("learning");
  });

  it("opens all three pilot concepts for a new learner while only they are published", () => {
    const published = new Set(["C06", "C14", "C25"]);
    const s = conceptStates(complexNumbers.graph, published, new Map(), true);
    expect([s.get("C06"), s.get("C14"), s.get("C25")]).toEqual(["available", "available", "available"]);
  });

  it("once C04, C05, C10 and C11 are published, new learners start at C04 and C10", () => {
    const published = new Set(["C04", "C05", "C06", "C10", "C11", "C14", "C25"]);
    const s = conceptStates(complexNumbers.graph, published, new Map(), true);
    const open = [...published].filter((id) => s.get(id) === "available").sort();
    expect(open).toEqual(["C04", "C10"]);
    // Mastering C04 and C10 opens C05 (needs C04) and C11 (needs C10, C04) and C14 (needs C10).
    const after = conceptStates(complexNumbers.graph, published, new Map([["C04", "mastered"], ["C10", "mastered"]]), true);
    expect([...published].filter((id) => after.get(id) === "available").sort()).toEqual(["C05", "C11", "C14"]);
  });
});

describe("nextItem", () => {
  const items = ["Q1", "Q2", "Q3", "Q4", "Q5"];
  const a = (itemId: string, correct: boolean) => ({ itemId, correct });

  it("starts with the first item", () => {
    expect(nextItem(items, [])).toBe("Q1");
  });

  it("prefers an item never attempted", () => {
    expect(nextItem(items, [a("Q1", true)])).toBe("Q2");
    expect(nextItem(items, [a("Q1", false)])).toBe("Q2");
  });

  it("never offers an item already answered correctly in the current run", () => {
    // Run since the last wrong answer (Q1): Q2 and Q3 correct. Q4, Q5 unseen.
    const attempts = [a("Q1", false), a("Q2", true), a("Q3", true)];
    expect(nextItem(items, attempts)).toBe("Q4");
  });

  it("when every item has been seen, picks the least recently attempted outside the run", () => {
    const attempts = [a("Q1", true), a("Q2", true), a("Q3", true), a("Q4", false), a("Q5", false), a("Q1", false)];
    // Run is empty (last attempt wrong). Least recent last-attempts: Q2, Q3 (oldest) … Q2 first.
    expect(nextItem(items, attempts)).toBe("Q2");
  });

  it("avoids repeating the item just answered when there is another choice", () => {
    const attempts = [a("Q1", false), a("Q2", false), a("Q3", false), a("Q4", false), a("Q5", false)];
    expect(nextItem(items, attempts)).toBe("Q1");
    expect(nextItem(["Q1", "Q2"], [a("Q2", false), a("Q1", false)])).toBe("Q2");
  });

  it("still returns something when every item is correct in the run", () => {
    expect(nextItem(["Q1", "Q2"], [a("Q1", true), a("Q2", true)])).toBe("Q1");
  });
});
