import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { electromagneticInduction } from "./index";

describe("Std XII Electromagnetic Induction chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(electromagneticInduction)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([electromagneticInduction.subject, electromagneticInduction.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 13 concepts, 12 edges", () => {
    const edges = electromagneticInduction.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(electromagneticInduction.graph).toHaveLength(13);
    expect(edges).toBe(12);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of electromagneticInduction.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(electromagneticInduction.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(electromagneticInduction.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
