import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { validateChapter } from "../../validate";
import { astronomyAndSpace } from "./index";

describe("Astronomy and Space chapter", () => {
  it("passes structural validation", () => {
    expect(validateChapter(astronomyAndSpace)).toEqual([]);
  });

  it("keeps the graph: 1 concept, 0 edges", () => {
    expect(astronomyAndSpace.graph).toHaveLength(1);
    expect(astronomyAndSpace.graph[0].prereqs).toEqual([]);
  });

  it("registers every concept file", () => {
    const files = readdirSync(join(__dirname, "concepts")).filter((f) => /^c\d\d-.+\.ts$/.test(f));
    const ids = files.map((f) => f.slice(0, 3).toUpperCase()).sort();
    expect(astronomyAndSpace.concepts.map((c) => c.id).sort()).toEqual(ids);
  });
});
