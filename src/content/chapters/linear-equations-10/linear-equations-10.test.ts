import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { linearEquations10 } from "./index";

describe("Std X Linear Equations in Two Variables chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(linearEquations10)).toEqual([]);
  });

  it("keeps the graph: 9 concepts, 7 edges", () => {
    const edges = linearEquations10.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(linearEquations10.graph).toHaveLength(9);
    expect(edges).toBe(7);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of linearEquations10.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(linearEquations10.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(linearEquations10.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
