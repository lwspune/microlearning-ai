import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { probability10 } from "./index";

describe("Std X Probability chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(probability10)).toEqual([]);
  });

  it("keeps the graph: 5 concepts, 4 edges", () => {
    const edges = probability10.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(probability10.graph).toHaveLength(5);
    expect(edges).toBe(4);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of probability10.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(probability10.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(probability10.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
