import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { triangles9 } from "./index";

describe("Std IX Triangles chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(triangles9)).toEqual([]);
  });

  it("keeps the graph: 8 concepts, 4 edges", () => {
    const edges = triangles9.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(triangles9.graph).toHaveLength(8);
    expect(edges).toBe(4);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of triangles9.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(triangles9.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(triangles9.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
