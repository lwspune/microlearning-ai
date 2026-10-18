import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { lineAndPlane } from "./index";

describe("Line and Plane chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(lineAndPlane)).toEqual([]);
  });

  it("keeps the graph: 11 concepts, 10 edges", () => {
    const edges = lineAndPlane.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(lineAndPlane.graph).toHaveLength(11);
    expect(edges).toBe(10);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of lineAndPlane.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(lineAndPlane.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(lineAndPlane.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
