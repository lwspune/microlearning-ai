import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { acCircuits } from "./index";

describe("Std XII AC Circuits chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(acCircuits)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([acCircuits.subject, acCircuits.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 10 concepts, 10 edges", () => {
    const edges = acCircuits.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(acCircuits.graph).toHaveLength(10);
    expect(edges).toBe(10);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of acCircuits.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(acCircuits.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(acCircuits.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
