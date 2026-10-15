import { describe, expect, it } from "vitest";
import { complexNumbers } from "@/content/chapters/complex-numbers";
import type { GraphNode } from "@/content/types";
import { conceptStates, gateFor, inScope, MASTERY_GATE, nextConceptAfter } from "./unlock";
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

describe("nextConceptAfter", () => {
  const all = new Set(["A", "B", "C", "D"]);

  it("is the concept that mastering this one opens", () => {
    expect(nextConceptAfter(chain, all, new Map(), "A", true)).toBe("B");
  });

  it("prefers a concept already in progress, then new ones in chapter order", () => {
    const fan = [node("A"), node("B", ["A"]), node("C", ["A"]), node("D")];
    expect(nextConceptAfter(fan, all, new Map([["C", "learning"]]), "A", true)).toBe("C");
    expect(nextConceptAfter(fan, all, new Map(), "A", true)).toBe("B");
  });

  it("never offers the concept just mastered, and is null when nothing open remains", () => {
    expect(nextConceptAfter(chain, all, new Map([["A", "mastered"], ["B", "mastered"], ["C", "mastered"]]), "D", true)).toBeNull();
    expect(nextConceptAfter([node("A")], new Set(["A"]), new Map(), "A", true)).toBeNull();
  });

  it("skips unpublished and still-locked concepts", () => {
    expect(nextConceptAfter(chain, new Set(["A", "C"]), new Map(), "A", true)).toBe("C");
    const twoRoots = [node("A"), node("B"), node("C", ["A", "B"])];
    expect(nextConceptAfter(twoRoots, new Set(["A", "B", "C"]), new Map(), "A", true)).toBe("B");
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
  it("gates students again now that teachers sign in and open everything themselves (MASTERY_GATE)", () => {
    expect(MASTERY_GATE).toBe(true);
  });

  it("students wait on prerequisites; teachers don't", () => {
    expect(gateFor("student")).toBe(true);
    expect(gateFor("teacher")).toBe(false);
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
  const fresh = (itemId: string) => ({ itemId, retry: false });
  const retry = (itemId: string) => ({ itemId, retry: true });

  it("starts with the first item", () => {
    expect(nextItem(items, [])).toEqual(fresh("Q1"));
  });

  it("offers a question not yet answered right, never one whose last answer was right", () => {
    expect(nextItem(items, [a("Q1", true)])).toEqual(fresh("Q2"));
    expect(nextItem(items, [a("Q1", true), a("Q2", true), a("Q3", true)])).toEqual(fresh("Q4"));
  });

  it("brings a missed question back after one other question", () => {
    expect(nextItem(items, [a("Q1", false)])).toEqual(fresh("Q2"));
    expect(nextItem(items, [a("Q1", false), a("Q2", true)])).toEqual(retry("Q1"));
  });

  it("keeps bringing it back until it is answered right", () => {
    expect(nextItem(items, [a("Q1", false), a("Q2", true), a("Q1", false), a("Q3", true)])).toEqual(retry("Q1"));
    expect(nextItem(items, [a("Q1", false), a("Q2", true), a("Q1", true)])).toEqual(fresh("Q3"));
  });

  it("brings the oldest miss back first", () => {
    expect(nextItem(items, [a("Q1", false), a("Q2", false), a("Q3", true)])).toEqual(retry("Q1"));
  });

  it("brings a miss straight back when there is no other question to ask", () => {
    expect(nextItem(["Q1", "Q2"], [a("Q2", true), a("Q1", false)])).toEqual(retry("Q1"));
  });

  it("once every question is right, practises the one answered longest ago", () => {
    expect(nextItem(["Q1", "Q2"], [a("Q1", true), a("Q2", true)])).toEqual(fresh("Q1"));
  });
});
