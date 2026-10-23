import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { circle9 } from "./index";

describe("Std IX Circle chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(circle9)).toEqual([]);
  });

  it("keeps the graph: 4 concepts, 1 edges", () => {
    const edges = circle9.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(circle9.graph).toHaveLength(4);
    expect(edges).toBe(1);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of circle9.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(circle9.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(circle9.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
