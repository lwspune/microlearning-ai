import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { probability } from "./index";

describe("Probability chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(probability)).toEqual([]);
  });

  it("keeps the graph: 10 concepts, 9 edges", () => {
    const edges = probability.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(probability.graph).toHaveLength(10);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of probability.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(probability.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(probability.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
