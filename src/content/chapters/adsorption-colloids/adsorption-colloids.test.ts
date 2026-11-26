import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { adsorptionColloids } from "./index";

describe("Std XI Adsorption and Colloids chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(adsorptionColloids)).toEqual([]);
  });

  it("is Std XI chemistry", () => {
    expect([adsorptionColloids.subject, adsorptionColloids.standard]).toEqual(["chemistry", 11]);
  });

  it("keeps the graph: 7 concepts, 5 edges", () => {
    const edges = adsorptionColloids.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(adsorptionColloids.graph).toHaveLength(7);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of adsorptionColloids.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(adsorptionColloids.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(adsorptionColloids.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
