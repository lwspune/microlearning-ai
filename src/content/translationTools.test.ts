import { readdirSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { chapters } from "./chapters/index.ts";
import { expectedTranslationCounts, translationCountGaps, translationIndexSource } from "./translationTools.ts";

const dir = "src/content/chapters/sets-and-relations/translations";
const sets = chapters.find((c) => c.slug === "sets-and-relations")!;

describe("translationIndexSource", () => {
  it("rebuilds a chapter's committed register from the files present", () => {
    const files = { hi: readdirSync(`${dir}/hi`), mr: readdirSync(`${dir}/mr`) };
    expect(translationIndexSource(files)).toBe(readFileSync(`${dir}/index.ts`, "utf8"));
  });

  it("exports an empty list for a chapter with a glossary and no translations yet", () => {
    expect(translationIndexSource({ hi: [], mr: [] })).toContain("export const translations: ConceptTranslation[] = [];");
  });

  it("keeps a short list on one line and ignores files that are not concepts", () => {
    const src = translationIndexSource({ hi: ["c01.ts", "notes.md"], mr: ["c01.ts"] });
    expect(src).toContain('import { c01 as hiC01 } from "./hi/c01.ts";');
    expect(src).not.toContain("notes");
    expect(src).toContain("= [hiC01, mrC01];");
  });
});

describe("expectedTranslationCounts", () => {
  it("counts what the seed sends: approved concepts, their solutions and remediations", () => {
    // The numbers the live database showed after Sets and Relations was seeded (2026-10-25).
    expect(expectedTranslationCounts(sets)).toEqual({
      hi: { concepts: 16, solutions: 92, remediations: 66 },
      mr: { concepts: 16, solutions: 92, remediations: 66 },
    });
  });
});

describe("translationCountGaps", () => {
  const ok = { concepts: 2, solutions: 10, remediations: 8 };

  it("reports nothing when the live rows match the catalog", () => {
    expect(translationCountGaps({ hi: ok, mr: ok }, { hi: ok, mr: ok })).toEqual([]);
  });

  it("names each language and count that differs, including a language missing live", () => {
    const gaps = translationCountGaps({ hi: ok, mr: ok }, { hi: { ...ok, solutions: 9 } });
    expect(gaps).toEqual(["hi solutions: 9 live, 10 in the catalog", "mr concepts: 0 live, 2 in the catalog", "mr solutions: 0 live, 10 in the catalog", "mr remediations: 0 live, 8 in the catalog"]);
  });
});
