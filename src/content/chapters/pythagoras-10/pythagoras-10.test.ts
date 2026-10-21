import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { pythagoras10 } from "./index";

describe("Std X Pythagoras Theorem chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(pythagoras10)).toEqual([]);
  });

  it("keeps the graph: 6 concepts, 5 edges", () => {
    const edges = pythagoras10.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(pythagoras10.graph).toHaveLength(6);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of pythagoras10.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(pythagoras10.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(pythagoras10.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
