import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { financialPlanning9 } from "./index";

describe("Std IX Financial Planning chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(financialPlanning9)).toEqual([]);
  });

  it("keeps the graph: 4 concepts, 1 edges", () => {
    const edges = financialPlanning9.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(financialPlanning9.graph).toHaveLength(4);
    expect(edges).toBe(1);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of financialPlanning9.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(financialPlanning9.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(financialPlanning9.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
