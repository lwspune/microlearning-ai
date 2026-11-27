import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { cellDivision } from "./index";

describe("Std XI Cell Division chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(cellDivision)).toEqual([]);
  });

  it("is Std XI biology", () => {
    expect([cellDivision.subject, cellDivision.standard]).toEqual(["biology", 11]);
  });

  it("keeps the graph: 4 concepts, 3 edges", () => {
    const edges = cellDivision.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(cellDivision.graph).toHaveLength(4);
    expect(edges).toBe(3);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of cellDivision.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(cellDivision.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(cellDivision.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
