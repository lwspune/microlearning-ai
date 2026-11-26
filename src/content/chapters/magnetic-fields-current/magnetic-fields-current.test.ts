import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { magneticFieldsCurrent } from "./index";

describe("Std XII Magnetic Fields due to Electric Current chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(magneticFieldsCurrent)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([magneticFieldsCurrent.subject, magneticFieldsCurrent.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 11 concepts, 11 edges", () => {
    const edges = magneticFieldsCurrent.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(magneticFieldsCurrent.graph).toHaveLength(11);
    expect(edges).toBe(11);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of magneticFieldsCurrent.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(magneticFieldsCurrent.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(magneticFieldsCurrent.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
