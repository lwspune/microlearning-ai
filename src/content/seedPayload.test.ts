import { describe, expect, it } from "vitest";
import { complexNumbers } from "./chapters/complex-numbers/index.ts";
import { toSeedPayload } from "./seedPayload.ts";
import { translateConcept } from "./translate.ts";
import type { Concept, ConceptTranslation, Lang } from "./types.ts";

/** A stand-in translation: the English text tagged with the language (the payload doesn't check it). */
function tagged(c: Concept, lang: Lang, status: ConceptTranslation["status"]): ConceptTranslation {
  const tag = (s: string) => `${lang}: ${s}`;
  const ex = c.explanation;
  return {
    id: c.id,
    lang,
    status,
    source: "",
    hook: { prompt: tag(c.hook.prompt), reveal: tag(c.hook.reveal) },
    intuition: typeof ex.intuition === "string" ? tag(ex.intuition) : ex.intuition.map(tag),
    formal: typeof ex.formal === "string" ? tag(ex.formal) : ex.formal.map((s) => ("points" in s ? { title: tag(s.title), points: s.points.map(tag) } : { body: tag(s.body) })),
    worked: { prompt: tag(ex.worked.prompt), steps: ex.worked.steps.map(tag), answer: tag(ex.worked.answer) },
    remediation: Object.fromEntries(c.misconceptions.map((m) => [m.id, tag(m.remediation)])),
    solutions: Object.fromEntries(c.items.map((i) => [i.id, i.solution.steps.map(tag)])),
  };
}

describe("toSeedPayload", () => {
  const payload = toSeedPayload(complexNumbers, true);
  const byCode = (code: string) => payload.concepts.find((c) => c.code === code)!;

  it("includes every graph node, authored or not", () => {
    expect(payload.slug).toBe("complex-numbers");
    expect(payload.concepts).toHaveLength(30);
  });

  it("sends an unwritten node as a draft with no body or items", () => {
    // Remove one concept's content so the test holds however much of the chapter is written.
    const withoutC07 = { ...complexNumbers, concepts: complexNumbers.concepts.filter((c) => c.id !== "C07") };
    const c07 = toSeedPayload(withoutC07, true).concepts.find((c) => c.code === "C07");
    expect(c07).toMatchObject({ status: "draft", body: null, misconceptions: [], items: [], prereqs: ["C06"] });
  });

  it("sends an authored concept with its body, misconceptions and items", () => {
    const c06 = byCode("C06");
    expect(c06.body).toMatchObject({ hook: expect.any(Object), explanation: expect.any(Object) });
    expect(c06.misconceptions.map((m) => m.code)).toEqual(["C06-M1", "C06-M2", "C06-M3", "C06-M4", "C06-M5"]);
    expect(c06.misconceptions[0].fallback).toEqual({ kind: "concept", id: "C05" });
    expect(c06.items).toHaveLength(5);
    expect(c06.items[0].options[0]).toEqual({ key: "A", text: expect.any(String), is_correct: true, misconception: null, value: "(1+5*I)/2" });
    expect(c06.items[0].options[1]).toMatchObject({ is_correct: false, misconception: "C06-M1" });
  });

  it("keeps engine notes in the body", () => {
    expect(byCode("C14").body).toMatchObject({ engineNotes: expect.arrayContaining([expect.stringContaining("C14-M1")]) });
  });

  it("sends each item's solution", () => {
    const c10 = complexNumbers.concepts.find((c) => c.id === "C10")!;
    const items = byCode("C10").items;
    expect(items).toHaveLength(c10.items.length);
    items.forEach((it, i) => expect(it.solution).toEqual(c10.items[i].solution));
  });

  it("sends a question's figure, or null when it has none", () => {
    const fig = { alt: "a region", view: { x: [-1, 5] as [number, number], y: [-1, 5] as [number, number] }, elements: [] };
    const c10 = complexNumbers.concepts.find((c) => c.id === "C10")!;
    const withFigure = { ...c10, items: c10.items.map((it, i) => (i === 0 ? { ...it, figure: fig } : it)) };
    const chapter = { ...complexNumbers, concepts: complexNumbers.concepts.map((c) => (c.id === "C10" ? withFigure : c)) };
    const items = toSeedPayload(chapter, true).concepts.find((c) => c.code === "C10")!.items;
    expect(items[0].figure).toEqual(fig);
    expect(items[1].figure).toBeNull();
  });

  it("marks items verified only when told the verifier passed", () => {
    expect(byCode("C06").items.every((i) => i.verified)).toBe(true);
    expect(toSeedPayload(complexNumbers, false).concepts.flatMap((c) => c.items).some((i) => i.verified)).toBe(false);
  });

  describe("translations", () => {
    const c06 = complexNumbers.concepts.find((c) => c.id === "C06")!;
    const chapter = { ...complexNumbers, translations: [tagged(c06, "hi", "approved"), tagged(c06, "mr", "draft")] };
    const sent = toSeedPayload(chapter, true).concepts.find((c) => c.code === "C06")!.translations;

    it("sends approved translations only", () => {
      expect(sent.map((t) => t.lang)).toEqual(["hi"]);
    });

    it("sends the translated concept whole, with the English figures", () => {
      const hi = translateConcept(c06, tagged(c06, "hi", "approved"));
      expect(sent[0].body).toEqual({ hook: hi.hook, explanation: hi.explanation, engineNotes: hi.engineNotes });
      expect(sent[0].remediation).toEqual(Object.fromEntries(hi.misconceptions.map((m) => [m.id, m.remediation])));
      expect(sent[0].solutions).toEqual(Object.fromEntries(hi.items.map((i) => [i.id, i.solution])));
    });

    it("sends none for a concept nobody translated", () => {
      expect(toSeedPayload(chapter, true).concepts.find((c) => c.code === "C07")!.translations).toEqual([]);
    });
  });
});
