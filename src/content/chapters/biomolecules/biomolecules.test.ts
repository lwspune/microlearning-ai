import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { biomolecules } from "./index";

describe("Std XII Biomolecules chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(biomolecules)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([biomolecules.subject, biomolecules.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 7 concepts, 4 edges", () => {
    const edges = biomolecules.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(biomolecules.graph).toHaveLength(7);
    expect(edges).toBe(4);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of biomolecules.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(biomolecules.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(biomolecules.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
