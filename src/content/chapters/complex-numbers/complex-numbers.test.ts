import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { complexNumbers } from "./index";

describe("Complex Numbers chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(complexNumbers)).toEqual([]);
  });

  it("keeps the approved graph: 30 concepts, 39 edges", () => {
    const edges = complexNumbers.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(complexNumbers.graph).toHaveLength(30);
    expect(edges).toBe(39);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of complexNumbers.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(complexNumbers.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("has the three M0 pilot concepts authored", () => {
    expect(complexNumbers.concepts.map((c) => c.id).sort()).toEqual(["C06", "C14", "C25"]);
  });
});
