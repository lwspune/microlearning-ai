import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { sphere } from "./index";

describe("The Sphere chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(sphere)).toEqual([]);
  });

  it("keeps the graph: 2 concepts, 1 edges", () => {
    const edges = sphere.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(sphere.graph).toHaveLength(2);
    expect(edges).toBe(1);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of sphere.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(sphere.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(sphere.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
