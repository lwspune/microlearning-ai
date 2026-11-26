import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { redoxReactions } from "./index";

describe("Std XI Redox Reactions chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(redoxReactions)).toEqual([]);
  });

  it("is Std XI chemistry", () => {
    expect([redoxReactions.subject, redoxReactions.standard]).toEqual(["chemistry", 11]);
  });

  it("keeps the graph: 7 concepts, 6 edges", () => {
    const edges = redoxReactions.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(redoxReactions.graph).toHaveLength(7);
    expect(edges).toBe(6);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of redoxReactions.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(redoxReactions.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(redoxReactions.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
