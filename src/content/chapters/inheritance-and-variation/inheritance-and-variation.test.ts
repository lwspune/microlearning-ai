import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { inheritanceAndVariation } from "./index";

describe("Std XII Inheritance and Variation chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(inheritanceAndVariation)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([inheritanceAndVariation.subject, inheritanceAndVariation.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 11 concepts, 11 edges", () => {
    const edges = inheritanceAndVariation.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(inheritanceAndVariation.graph).toHaveLength(11);
    expect(edges).toBe(11);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of inheritanceAndVariation.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(inheritanceAndVariation.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(inheritanceAndVariation.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
