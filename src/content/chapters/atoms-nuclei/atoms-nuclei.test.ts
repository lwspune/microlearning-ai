import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { atomsNuclei } from "./index";

describe("Std XII Structure of Atoms and Nuclei chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(atomsNuclei)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([atomsNuclei.subject, atomsNuclei.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 11 concepts, 9 edges", () => {
    const edges = atomsNuclei.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(atomsNuclei.graph).toHaveLength(11);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of atomsNuclei.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(atomsNuclei.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(atomsNuclei.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
