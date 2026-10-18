import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { trigonometricFunctions12 } from "./index";

describe("Trigonometric Functions chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(trigonometricFunctions12)).toEqual([]);
  });

  it("keeps the graph: 15 concepts, 14 edges", () => {
    const edges = trigonometricFunctions12.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(trigonometricFunctions12.graph).toHaveLength(15);
    expect(edges).toBe(14);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of trigonometricFunctions12.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(trigonometricFunctions12.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(trigonometricFunctions12.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
