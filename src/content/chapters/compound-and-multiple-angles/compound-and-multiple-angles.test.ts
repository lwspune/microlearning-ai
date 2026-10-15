import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { compoundAndMultipleAngles } from "./index";

describe("Trigonometry – II (compound and multiple angles) chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(compoundAndMultipleAngles)).toEqual([]);
  });

  it("keeps the graph: 10 concepts, 11 edges", () => {
    const edges = compoundAndMultipleAngles.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(compoundAndMultipleAngles.graph).toHaveLength(10);
    expect(edges).toBe(11);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of compoundAndMultipleAngles.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(compoundAndMultipleAngles.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(compoundAndMultipleAngles.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
