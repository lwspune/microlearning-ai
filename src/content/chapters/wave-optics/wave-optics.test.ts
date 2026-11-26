import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { waveOptics } from "./index";

describe("Std XII Wave Optics chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(waveOptics)).toEqual([]);
  });

  it("is Std XII physics", () => {
    expect([waveOptics.subject, waveOptics.standard]).toEqual(["physics", 12]);
  });

  it("keeps the graph: 15 concepts, 15 edges", () => {
    const edges = waveOptics.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(waveOptics.graph).toHaveLength(15);
    expect(edges).toBe(15);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of waveOptics.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(waveOptics.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} ← ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(waveOptics.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
