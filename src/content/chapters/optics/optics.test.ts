import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { optics } from "./index";

describe("Std XI Optics chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(optics)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([optics.subject, optics.standard]).toEqual(["physics", 11]);
  });

  it("keeps the graph: 11 concepts, 11 edges", () => {
    const edges = optics.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(optics.graph).toHaveLength(11);
    expect(edges).toBe(11);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of optics.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(optics.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(optics.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
