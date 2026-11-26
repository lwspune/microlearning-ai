import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { dualNature } from "./index";

describe("Std XII Dual Nature of Radiation and Matter chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(dualNature)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([dualNature.subject, dualNature.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 8 concepts, 7 edges", () => {
    const edges = dualNature.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(dualNature.graph).toHaveLength(8);
    expect(edges).toBe(7);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of dualNature.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(dualNature.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(dualNature.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
