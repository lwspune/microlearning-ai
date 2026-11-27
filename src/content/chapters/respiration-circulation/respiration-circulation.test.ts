import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { respirationCirculation } from "./index";

describe("Std XII Respiration and Circulation chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(respirationCirculation)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([respirationCirculation.subject, respirationCirculation.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 10 concepts, 8 edges", () => {
    const edges = respirationCirculation.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(respirationCirculation.graph).toHaveLength(10);
    expect(edges).toBe(8);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of respirationCirculation.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(respirationCirculation.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(respirationCirculation.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
