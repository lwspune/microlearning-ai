import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { pairOfStraightLines } from "./index";

describe("Pair of Straight Lines chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(pairOfStraightLines)).toEqual([]);
  });

  it("keeps the graph: 9 concepts, 9 edges", () => {
    const edges = pairOfStraightLines.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(pairOfStraightLines.graph).toHaveLength(9);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of pairOfStraightLines.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(pairOfStraightLines.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(pairOfStraightLines.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
