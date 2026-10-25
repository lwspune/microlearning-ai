import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { thermodynamics } from "./index";

describe("Std XII Thermodynamics chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(thermodynamics)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([thermodynamics.subject, thermodynamics.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 12 concepts, 13 edges", () => {
    const edges = thermodynamics.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(thermodynamics.graph).toHaveLength(12);
    expect(edges).toBe(13);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of thermodynamics.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(thermodynamics.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(thermodynamics.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
