import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { sequencesAndSeries } from "./index";

describe("Sequences and Series chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(sequencesAndSeries)).toEqual([]);
  });

  it("keeps the graph: 18 concepts, 18 edges", () => {
    const edges = sequencesAndSeries.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(sequencesAndSeries.graph).toHaveLength(18);
    expect(edges).toBe(18);
  });

  it("opens with sequences and A.P., which the G.P. and H.P. concepts build on", () => {
    expect(sequencesAndSeries.graph.slice(0, 4).map((n) => n.id)).toEqual(["C15", "C16", "C17", "C18"]);
    const node = (id: string) => sequencesAndSeries.graph.find((n) => n.id === id)!;
    expect(node("C01").prereqs).toContain("C16");
    expect(node("C09").prereqs).toContain("C16");
    expect(node("C01").ext).not.toContain("arithmetic progressions");
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
