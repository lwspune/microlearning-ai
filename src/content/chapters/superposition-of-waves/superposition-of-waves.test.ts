import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { superpositionOfWaves } from "./index";

describe("Std XII Superposition of Waves chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(superpositionOfWaves)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([superpositionOfWaves.subject, superpositionOfWaves.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 14 concepts, 17 edges", () => {
    const edges = superpositionOfWaves.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(superpositionOfWaves.graph).toHaveLength(14);
    expect(edges).toBe(17);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of superpositionOfWaves.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(superpositionOfWaves.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(superpositionOfWaves.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
