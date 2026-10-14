import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { binomialTheorem } from "./index";

describe("Binomial Theorem chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(binomialTheorem)).toEqual([]);
  });

  it("keeps the graph: 9 concepts, 8 edges", () => {
    const edges = binomialTheorem.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(binomialTheorem.graph).toHaveLength(9);
    expect(edges).toBe(8);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of binomialTheorem.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(binomialTheorem.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(binomialTheorem.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
