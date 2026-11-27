import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { biotechnology } from "./index";

describe("Std XII Biotechnology chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(biotechnology)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([biotechnology.subject, biotechnology.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 7 concepts, 6 edges", () => {
    const edges = biotechnology.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(biotechnology.graph).toHaveLength(7);
    expect(edges).toBe(6);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of biotechnology.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(biotechnology.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(biotechnology.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
