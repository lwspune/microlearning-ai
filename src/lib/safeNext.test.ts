import { describe, expect, it } from "vitest";
import { safeLearnPath } from "./safeNext";

describe("safeLearnPath", () => {
  it("keeps learn paths, with or without a course", () => {
    expect(safeLearnPath("/learn")).toBe("/learn");
    expect(safeLearnPath("/learn/complex-numbers/division")).toBe("/learn/complex-numbers/division");
    expect(safeLearnPath("/learn/complex-numbers/division?course=jee-main")).toBe("/learn/complex-numbers/division?course=jee-main");
  });

  it("falls back to /learn for anything else", () => {
    for (const bad of ["", "https://evil.example", "//evil.example", "/learn/../admin", "/learn/a?next=//evil", "/learn/a?course=JEE Main", "/review"]) {
      expect(safeLearnPath(bad), bad).toBe("/learn");
    }
  });
});
