import { describe, expect, it } from "vitest";
import { chapters } from "./chapters/index.ts";
import { pickChapters } from "./pickChapters.ts";

describe("pickChapters", () => {
  it("returns every chapter when none is named", () => {
    expect(pickChapters(chapters, [])).toEqual(chapters);
  });

  it("returns only the named chapters, in catalog order", () => {
    const picked = pickChapters(chapters, ["statistics-9", "sets-9"]);
    expect(picked.map((c) => c.slug)).toEqual(["sets-9", "statistics-9"]);
  });

  it("rejects a name that is not a chapter, before anything is written", () => {
    expect(() => pickChapters(chapters, ["sets-9", "no-such-chapter"])).toThrow(/no-such-chapter/);
  });
});
