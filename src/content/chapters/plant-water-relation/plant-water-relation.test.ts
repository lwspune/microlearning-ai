import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { plantWaterRelation } from "./index";

describe("Std XII Plant Water Relation chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(plantWaterRelation)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([plantWaterRelation.subject, plantWaterRelation.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 8 concepts, 9 edges", () => {
    const edges = plantWaterRelation.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(plantWaterRelation.graph).toHaveLength(8);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of plantWaterRelation.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(plantWaterRelation.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(plantWaterRelation.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
