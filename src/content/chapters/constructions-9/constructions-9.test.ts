import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { constructions9 } from "./index";

describe("Std IX Constructions of Triangles chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(constructions9)).toEqual([]);
  });

  it("keeps the graph: 3 concepts, 1 edges", () => {
    const edges = constructions9.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(constructions9.graph).toHaveLength(3);
    expect(edges).toBe(1);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of constructions9.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(constructions9.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(constructions9.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
