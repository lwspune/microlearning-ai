import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { mechanicalPropertiesSolids } from "./index";

describe("Std XI Mechanical Properties of Solids chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(mechanicalPropertiesSolids)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([mechanicalPropertiesSolids.subject, mechanicalPropertiesSolids.standard]).toEqual(["physics", 11]);
  });

  it("keeps the graph: 7 concepts, 4 edges", () => {
    const edges = mechanicalPropertiesSolids.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(mechanicalPropertiesSolids.graph).toHaveLength(7);
    expect(edges).toBe(4);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of mechanicalPropertiesSolids.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(mechanicalPropertiesSolids.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(mechanicalPropertiesSolids.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
