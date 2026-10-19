import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { matrices } from "./index";

describe("Matrices chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(matrices)).toEqual([]);
  });

  it("keeps the graph: 12 concepts, 10 edges (C12 Cayley–Hamilton for MHT-CET)", () => {
    const edges = matrices.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(matrices.graph).toHaveLength(12);
    expect(edges).toBe(10);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of matrices.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(matrices.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(matrices.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
