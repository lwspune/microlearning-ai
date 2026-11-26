import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { solidState } from "./index";

describe("Std XII Solid State chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(solidState)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([solidState.subject, solidState.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 10 concepts, 9 edges", () => {
    const edges = solidState.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(solidState.graph).toHaveLength(10);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of solidState.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(solidState.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(solidState.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
