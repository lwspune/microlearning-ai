import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { pBlock131415 } from "./index";

describe("Std XI Elements of Group 13, 14 and 15 chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(pBlock131415)).toEqual([]);
  });

  it("is Std XI chemistry", () => {
    expect([pBlock131415.subject, pBlock131415.standard]).toEqual(["chemistry", 11]);
  });

  it("keeps the graph: 7 concepts, 6 edges", () => {
    const edges = pBlock131415.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(pBlock131415.graph).toHaveLength(7);
    expect(edges).toBe(6);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of pBlock131415.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(pBlock131415.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(pBlock131415.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
