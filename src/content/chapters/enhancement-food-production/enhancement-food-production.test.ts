import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { enhancementFoodProduction } from "./index";

describe("Std XII Enhancement of Food Production chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(enhancementFoodProduction)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([enhancementFoodProduction.subject, enhancementFoodProduction.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 9 concepts, 6 edges", () => {
    const edges = enhancementFoodProduction.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(enhancementFoodProduction.graph).toHaveLength(9);
    expect(edges).toBe(6);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of enhancementFoodProduction.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(enhancementFoodProduction.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(enhancementFoodProduction.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
