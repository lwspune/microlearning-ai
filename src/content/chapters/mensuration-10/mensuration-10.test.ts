import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { mensuration10 } from "./index";

describe("Std X Mensuration chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(mensuration10)).toEqual([]);
  });

  it("keeps the graph: 8 concepts, 6 edges", () => {
    const edges = mensuration10.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(mensuration10.graph).toHaveLength(8);
    expect(edges).toBe(6);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of mensuration10.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(mensuration10.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(mensuration10.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
