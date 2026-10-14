import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { linearProgramming } from "./index";

describe("Linear Programming chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(linearProgramming)).toEqual([]);
  });

  it("keeps the approved graph: 13 concepts, 15 edges", () => {
    const edges = linearProgramming.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(linearProgramming.graph).toHaveLength(13);
    expect(edges).toBe(15);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of linearProgramming.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(linearProgramming.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(linearProgramming.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
