import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ancestorsOf, validateChapter } from "../../validate";
import { biodiversityConservation } from "./index";

describe("Std XII Biodiversity, Conservation and Environmental Issues chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(biodiversityConservation)).toEqual([]);
  });

  it("is Std XII biology", () => {
    expect([biodiversityConservation.subject, biodiversityConservation.standard]).toEqual(["biology", 12]);
  });

  it("keeps the graph: 6 concepts, 4 edges", () => {
    const edges = biodiversityConservation.graph.reduce((n, node) => n + node.prereqs.length, 0);
    expect(biodiversityConservation.graph).toHaveLength(6);
    expect(edges).toBe(4);
  });

  it("keeps edges transitively reduced", () => {
    const redundant: string[] = [];
    for (const node of biodiversityConservation.graph) {
      for (const p of node.prereqs) {
        const viaOthers = node.prereqs.filter((q) => q !== p).some((q) => ancestorsOf(biodiversityConservation.graph, q).has(p));
        if (viaOthers) redundant.push(`${node.id} <- ${p}`);
      }
    }
    expect(redundant).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(biodiversityConservation.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
