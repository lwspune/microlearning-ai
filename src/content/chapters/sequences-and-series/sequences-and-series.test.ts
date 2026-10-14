import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { sequencesAndSeries } from "./index";

describe("Sequences and Series chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(sequencesAndSeries)).toEqual([]);
  });

  it("keeps the graph: 14 concepts, 13 edges", () => {
    const edges = sequencesAndSeries.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(sequencesAndSeries.graph).toHaveLength(14);
    expect(edges).toBe(13);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of sequencesAndSeries.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(sequencesAndSeries.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(sequencesAndSeries.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
