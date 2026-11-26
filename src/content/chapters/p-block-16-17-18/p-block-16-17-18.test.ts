import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { pBlock161718 } from "./index";

describe("Std XII Elements of Groups 16, 17 and 18 chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(pBlock161718)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([pBlock161718.subject, pBlock161718.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 10 concepts, 9 edges", () => {
    const edges = pBlock161718.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(pBlock161718.graph).toHaveLength(10);
    expect(edges).toBe(9);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of pBlock161718.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(pBlock161718.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(pBlock161718.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
