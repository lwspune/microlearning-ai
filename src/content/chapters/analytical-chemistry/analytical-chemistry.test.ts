import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { analyticalChemistry } from "./index";

describe("Std XI Introduction to Analytical Chemistry chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(analyticalChemistry)).toEqual([]);
  });

  it("is Std XI chemistry", () => {
    expect([analyticalChemistry.subject, analyticalChemistry.standard]).toEqual(["chemistry", 11]);
  });

  it("keeps the graph: 8 concepts, 3 edges", () => {
    const edges = analyticalChemistry.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(analyticalChemistry.graph).toHaveLength(8);
    expect(edges).toBe(3);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of analyticalChemistry.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(analyticalChemistry.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(analyticalChemistry.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
