import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { continuity } from "./index";

describe("Continuity chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(continuity)).toEqual([]);
  });

  it("keeps the graph: 6 concepts, 5 edges", () => {
    const edges = continuity.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(continuity.graph).toHaveLength(6);
    expect(edges).toBe(5);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of continuity.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(continuity.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(continuity.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
