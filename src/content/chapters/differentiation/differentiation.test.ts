import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { differentiation } from "./index";

describe("Differentiation chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(differentiation)).toEqual([]);
  });

  it("keeps the graph: 6 concepts, 5 edges", () => {
    const edges = differentiation.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(differentiation.graph).toHaveLength(6);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of differentiation.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(differentiation.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(differentiation.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
