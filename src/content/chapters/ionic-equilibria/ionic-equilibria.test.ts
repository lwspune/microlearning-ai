import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { ionicEquilibria } from "./index";

describe("Std XII Ionic Equilibria chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(ionicEquilibria)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([ionicEquilibria.subject, ionicEquilibria.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 9 concepts, 10 edges", () => {
    const edges = ionicEquilibria.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(ionicEquilibria.graph).toHaveLength(9);
    expect(edges).toBe(10);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of ionicEquilibria.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(ionicEquilibria.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(ionicEquilibria.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
