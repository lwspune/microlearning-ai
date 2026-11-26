import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { everydayChemistry } from "./index";

describe("Std XI Chemistry in Everyday Life chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(everydayChemistry)).toEqual([]);
  });

  it("is Std XI chemistry", () => {
    expect([everydayChemistry.subject, everydayChemistry.standard]).toEqual(["chemistry", 11]);
  });

  it("keeps the graph: 8 concepts, 2 edges", () => {
    const edges = everydayChemistry.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(everydayChemistry.graph).toHaveLength(8);
    expect(edges).toBe(2);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of everydayChemistry.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(everydayChemistry.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(everydayChemistry.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
