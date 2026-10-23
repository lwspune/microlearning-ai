import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { kineticTheory } from "./index";

describe("Std XII Kinetic Theory of Gases and Radiation chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(kineticTheory)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([kineticTheory.subject, kineticTheory.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 12 concepts, 9 edges", () => {
    const edges = kineticTheory.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(kineticTheory.graph).toHaveLength(12);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of kineticTheory.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(kineticTheory.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(kineticTheory.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
