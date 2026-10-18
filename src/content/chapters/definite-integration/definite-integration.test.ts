import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { definiteIntegration } from "./index";

describe("Definite Integration chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(definiteIntegration)).toEqual([]);
  });

  it("keeps the graph: 7 concepts, 5 edges", () => {
    const edges = definiteIntegration.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(definiteIntegration.graph).toHaveLength(7);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of definiteIntegration.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(definiteIntegration.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(definiteIntegration.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
