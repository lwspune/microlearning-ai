import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { setsAndRelations } from "./index";

describe("Sets and Relations chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(setsAndRelations)).toEqual([]);
  });

  it("keeps the graph: 16 concepts, 17 edges", () => {
    const edges = setsAndRelations.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(setsAndRelations.graph).toHaveLength(16);
    expect(edges).toBe(17);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of setsAndRelations.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(setsAndRelations.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(setsAndRelations.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
