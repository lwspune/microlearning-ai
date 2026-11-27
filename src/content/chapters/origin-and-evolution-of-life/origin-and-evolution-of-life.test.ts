import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { originAndEvolutionOfLife } from "./index";

describe("Std XII Origin and Evolution of Life chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(originAndEvolutionOfLife)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([originAndEvolutionOfLife.subject, originAndEvolutionOfLife.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 8 concepts, 5 edges", () => {
    const edges = originAndEvolutionOfLife.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(originAndEvolutionOfLife.graph).toHaveLength(8);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of originAndEvolutionOfLife.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(originAndEvolutionOfLife.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(originAndEvolutionOfLife.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
