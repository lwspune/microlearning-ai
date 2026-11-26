import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { hydrocarbons } from "./index";

describe("Std XI Hydrocarbons chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(hydrocarbons)).toEqual([]);
  });

  it("is Std XI chemistry", () => {
    expect([hydrocarbons.subject, hydrocarbons.standard]).toEqual(["chemistry", 11]);
  });

  it("keeps the graph: 9 concepts, 6 edges", () => {
    const edges = hydrocarbons.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(hydrocarbons.graph).toHaveLength(9);
    expect(edges).toBe(6);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of hydrocarbons.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(hydrocarbons.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(hydrocarbons.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
