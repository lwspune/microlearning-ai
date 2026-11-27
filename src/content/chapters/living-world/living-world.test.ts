import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { livingWorld } from "./index";

describe("Std XI Living World chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(livingWorld)).toEqual([]);
  });

  it("is Std XI biology", () => {
    expect([livingWorld.subject, livingWorld.standard]).toEqual(["biology", 11]);
  });

  it("keeps the graph: 4 concepts, 3 edges", () => {
    const edges = livingWorld.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(livingWorld.graph).toHaveLength(4);
    expect(edges).toBe(3);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of livingWorld.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(livingWorld.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(livingWorld.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
