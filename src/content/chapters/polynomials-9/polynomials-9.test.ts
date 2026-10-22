import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { polynomials9 } from "./index";

describe("Std IX Polynomials chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(polynomials9)).toEqual([]);
  });

  it("keeps the graph: 11 concepts, 13 edges", () => {
    const edges = polynomials9.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(polynomials9.graph).toHaveLength(11);
    expect(edges).toBe(13);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of polynomials9.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(polynomials9.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(polynomials9.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
