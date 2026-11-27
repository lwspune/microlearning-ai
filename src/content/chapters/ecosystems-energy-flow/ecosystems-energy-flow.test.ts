import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { ecosystemsEnergyFlow } from "./index";

describe("Std XII Ecosystems and Energy Flow chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(ecosystemsEnergyFlow)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([ecosystemsEnergyFlow.subject, ecosystemsEnergyFlow.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 6 concepts, 4 edges", () => {
    const edges = ecosystemsEnergyFlow.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(ecosystemsEnergyFlow.graph).toHaveLength(6);
    expect(edges).toBe(4);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of ecosystemsEnergyFlow.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(ecosystemsEnergyFlow.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(ecosystemsEnergyFlow.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
