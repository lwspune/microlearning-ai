import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { electrochemistry } from "./index";

describe("Std XII Electrochemistry chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(electrochemistry)).toEqual([]);
  });

  it("is Std XII chemistry", () => {
    expect([electrochemistry.subject, electrochemistry.standard]).toEqual(["chemistry", 12]);
  });

  it("keeps the graph: 11 concepts, 8 edges", () => {
    const edges = electrochemistry.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(electrochemistry.graph).toHaveLength(11);
    expect(edges).toBe(8);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of electrochemistry.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(electrochemistry.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(electrochemistry.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
