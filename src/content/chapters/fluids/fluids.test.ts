import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { fluids } from "./index";

describe("Std XII Mechanical Properties of Fluids chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(fluids)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([fluids.subject, fluids.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 12 concepts, 11 edges", () => {
    const edges = fluids.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(fluids.graph).toHaveLength(12);
    expect(edges).toBe(11);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of fluids.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(fluids.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(fluids.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
