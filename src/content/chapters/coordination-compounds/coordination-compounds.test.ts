import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { coordinationCompounds } from "./index";

describe("Std XII Coordination Compounds chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(coordinationCompounds)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([coordinationCompounds.subject, coordinationCompounds.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 11 concepts, 10 edges", () => {
    const edges = coordinationCompounds.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(coordinationCompounds.graph).toHaveLength(11);
    expect(edges).toBe(10);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of coordinationCompounds.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(coordinationCompounds.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(coordinationCompounds.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
