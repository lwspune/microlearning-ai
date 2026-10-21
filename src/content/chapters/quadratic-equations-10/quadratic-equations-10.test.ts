import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { quadraticEquations10 } from "./index";

describe("Std X Quadratic Equations chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(quadraticEquations10)).toEqual([]);
  });

  it("keeps the graph: 10 concepts, 9 edges", () => {
    const edges = quadraticEquations10.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(quadraticEquations10.graph).toHaveLength(10);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of quadraticEquations10.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(quadraticEquations10.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(quadraticEquations10.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
