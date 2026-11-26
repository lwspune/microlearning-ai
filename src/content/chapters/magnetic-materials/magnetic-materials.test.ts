import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { magneticMaterials } from "./index";

describe("Std XII Magnetic Materials chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(magneticMaterials)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([magneticMaterials.subject, magneticMaterials.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 8 concepts, 5 edges", () => {
    const edges = magneticMaterials.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(magneticMaterials.graph).toHaveLength(8);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of magneticMaterials.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(magneticMaterials.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(magneticMaterials.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
