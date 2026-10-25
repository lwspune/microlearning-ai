import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { oscillations } from "./index";

describe("Std XII Oscillations chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(oscillations)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([oscillations.subject, oscillations.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 12 concepts, 12 edges", () => {
    const edges = oscillations.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(oscillations.graph).toHaveLength(12);
    expect(edges).toBe(12);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of oscillations.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(oscillations.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(oscillations.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
