import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { validateChapter } from "../../validate";
import { energySources } from "./index";

describe("Energy Sources chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(energySources)).toEqual([]);
  });

  it("keeps the graph: 1 concept, 0 edges", () => {
    expect(energySources.graph).toHaveLength(1);
    expect(energySources.graph[0].prereqs).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(energySources.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
