import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { trigonometry10 } from "./index";

describe("Std X Trigonometry chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(trigonometry10)).toEqual([]);
  });

  it("keeps the graph: 5 concepts, 3 edges", () => {
    const edges = trigonometry10.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(trigonometry10.graph).toHaveLength(5);
    expect(edges).toBe(3);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of trigonometry10.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(trigonometry10.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(trigonometry10.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
