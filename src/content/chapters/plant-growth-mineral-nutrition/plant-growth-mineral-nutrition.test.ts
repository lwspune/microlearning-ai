import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { plantGrowthMineralNutrition } from "./index";

describe("Std XII Plant Growth and Mineral Nutrition chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(plantGrowthMineralNutrition)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([plantGrowthMineralNutrition.subject, plantGrowthMineralNutrition.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 8 concepts, 6 edges", () => {
    const edges = plantGrowthMineralNutrition.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(plantGrowthMineralNutrition.graph).toHaveLength(8);
    expect(edges).toBe(6);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of plantGrowthMineralNutrition.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(plantGrowthMineralNutrition.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(plantGrowthMineralNutrition.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
