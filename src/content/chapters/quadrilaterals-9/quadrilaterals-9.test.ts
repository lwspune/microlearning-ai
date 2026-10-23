import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { quadrilaterals9 } from "./index";

describe("Std IX Quadrilaterals chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(quadrilaterals9)).toEqual([]);
  });

  it("keeps the graph: 5 concepts, 3 edges", () => {
    const edges = quadrilaterals9.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(quadrilaterals9.graph).toHaveLength(5);
    expect(edges).toBe(3);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of quadrilaterals9.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(quadrilaterals9.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(quadrilaterals9.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
