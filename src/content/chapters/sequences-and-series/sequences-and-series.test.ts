import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { sequencesAndSeries } from "./index";

describe("Sequences and Series chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(sequencesAndSeries)).toEqual([]);
  });

  it("keeps the graph: 21 concepts, 21 edges", () => {
    const edges = sequencesAndSeries.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(sequencesAndSeries.graph).toHaveLength(21);
    expect(edges).toBe(21);
  });

  it("opens with sequences and A.P., which the G.P. and H.P. concepts build on", () => {
    // C19–C21 are the Std X book's further A.P. work, in book order among C15–C18.
    expect(sequencesAndSeries.graph.slice(0, 7).map((n) => n.id)).toEqual(["C15", "C19", "C16", "C20", "C17", "C18", "C21"]);
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
