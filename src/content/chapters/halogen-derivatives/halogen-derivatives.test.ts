import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { halogenDerivatives } from "./index";

describe("Std XII Halogen Derivatives chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(halogenDerivatives)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([halogenDerivatives.subject, halogenDerivatives.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 11 concepts, 9 edges", () => {
    const edges = halogenDerivatives.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(halogenDerivatives.graph).toHaveLength(11);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of halogenDerivatives.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(halogenDerivatives.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(halogenDerivatives.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
