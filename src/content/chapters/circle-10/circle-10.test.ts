import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { circle10 } from "./index";

describe("Std X Circle chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(circle10)).toEqual([]);
  });

  it("keeps the graph: 10 concepts, 7 edges", () => {
    const edges = circle10.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(circle10.graph).toHaveLength(10);
    expect(edges).toBe(7);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of circle10.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(circle10.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(circle10.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
