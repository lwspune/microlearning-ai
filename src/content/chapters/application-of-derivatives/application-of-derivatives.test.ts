import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { applicationOfDerivatives } from "./index";

describe("Application of Derivatives chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(applicationOfDerivatives)).toEqual([]);
  });

  it("keeps the graph: 12 concepts, 8 edges (C11 angle between curves for MHT-CET, C12 absolute extrema for CBSE)", () => {
    const edges = applicationOfDerivatives.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(applicationOfDerivatives.graph).toHaveLength(12);
    expect(edges).toBe(8);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of applicationOfDerivatives.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(applicationOfDerivatives.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(applicationOfDerivatives.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
