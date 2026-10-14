import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { straightLine } from "./index";

describe("Straight Line chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(straightLine)).toEqual([]);
  });

  it("keeps the graph: 12 concepts, 12 edges", () => {
    const edges = straightLine.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(straightLine.graph).toHaveLength(12);
    expect(edges).toBe(12);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of straightLine.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(straightLine.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(straightLine.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
