import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { analyticalTechniques } from "./index";

describe("Std XI Some Analytical Techniques chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(analyticalTechniques)).toEqual([]);
  });

  it("is Std XI chemistry", () => {
    expect([analyticalTechniques.subject, analyticalTechniques.standard]).toEqual(["chemistry", 11]);
  });

  it("keeps the graph: 5 concepts, 1 edges", () => {
    const edges = analyticalTechniques.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(analyticalTechniques.graph).toHaveLength(5);
    expect(edges).toBe(1);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of analyticalTechniques.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(analyticalTechniques.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(analyticalTechniques.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
