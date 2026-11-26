import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { chemicalThermodynamics } from "./index";

describe("Std XII Chemical Thermodynamics chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(chemicalThermodynamics)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([chemicalThermodynamics.subject, chemicalThermodynamics.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 12 concepts, 11 edges", () => {
    const edges = chemicalThermodynamics.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(chemicalThermodynamics.graph).toHaveLength(12);
    expect(edges).toBe(11);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of chemicalThermodynamics.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(chemicalThermodynamics.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(chemicalThermodynamics.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
