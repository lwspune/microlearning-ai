import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { conicSections } from "./index";

describe("Conic Sections chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(conicSections)).toEqual([]);
  });

  it("keeps the graph: 14 concepts, 13 edges", () => {
    const edges = conicSections.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(conicSections.graph).toHaveLength(14);
    expect(edges).toBe(13);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of conicSections.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(conicSections.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(conicSections.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
