import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { electrostatics12 } from "./index";

describe("Std XII Electrostatics chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(electrostatics12)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([electrostatics12.subject, electrostatics12.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 14 concepts, 15 edges", () => {
    const edges = electrostatics12.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(electrostatics12.graph).toHaveLength(14);
    expect(edges).toBe(15);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of electrostatics12.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(electrostatics12.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(electrostatics12.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
