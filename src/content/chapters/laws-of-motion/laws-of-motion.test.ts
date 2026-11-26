import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { lawsOfMotion } from "./index";

describe("Std XI Laws of Motion chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(lawsOfMotion)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([lawsOfMotion.subject, lawsOfMotion.standard]).toEqual(["physics", 11]);
  });

  it("keeps the graph: 7 concepts, 7 edges", () => {
    const edges = lawsOfMotion.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(lawsOfMotion.graph).toHaveLength(7);
    expect(edges).toBe(7);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of lawsOfMotion.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(lawsOfMotion.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(lawsOfMotion.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
