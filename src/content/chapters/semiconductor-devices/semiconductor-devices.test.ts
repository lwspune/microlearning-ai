import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { semiconductorDevices } from "./index";

describe("Std XII Semiconductor Devices chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(semiconductorDevices)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([semiconductorDevices.subject, semiconductorDevices.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 10 concepts, 8 edges", () => {
    const edges = semiconductorDevices.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(semiconductorDevices.graph).toHaveLength(10);
    expect(edges).toBe(8);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of semiconductorDevices.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(semiconductorDevices.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(semiconductorDevices.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
