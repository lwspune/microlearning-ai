import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { statistics } from "./index";

describe("Statistics chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(statistics)).toEqual([]);
  });

  it("keeps the graph: 13 concepts, 14 edges", () => {
    const edges = statistics.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(statistics.graph).toHaveLength(13);
    expect(edges).toBe(14);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of statistics.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(statistics.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(statistics.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
