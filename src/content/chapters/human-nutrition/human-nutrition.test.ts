import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { humanNutrition } from "./index";

describe("Std XI Human Nutrition chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(humanNutrition)).toEqual([]);
  });

  it("is Std XI biology", () => {
    expect([humanNutrition.subject, humanNutrition.standard]).toEqual(["biology", 11]);
  });

  it("keeps the graph: 6 concepts, 5 edges", () => {
    const edges = humanNutrition.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(humanNutrition.graph).toHaveLength(6);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of humanNutrition.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(humanNutrition.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(humanNutrition.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
