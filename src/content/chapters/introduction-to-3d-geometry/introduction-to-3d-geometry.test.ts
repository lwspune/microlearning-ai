import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { introductionTo3dGeometry } from "./index";

describe("Introduction to Three Dimensional Geometry chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(introductionTo3dGeometry)).toEqual([]);
  });

  it("keeps the graph: 5 concepts, 4 edges", () => {
    const edges = introductionTo3dGeometry.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(introductionTo3dGeometry.graph).toHaveLength(5);
    expect(edges).toBe(4);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of introductionTo3dGeometry.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(introductionTo3dGeometry.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(introductionTo3dGeometry.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
