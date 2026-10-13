import { describe, expect, it } from "vitest";
import { complexNumbers } from "./chapters/complex-numbers/index.ts";
import { toSeedPayload } from "./seedPayload.ts";

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
    expect(byCode("C14").body).toMatchObject({ engineNotes: [expect.stringContaining("C14-M1")] });
  });

  it("sends each item's solution, or null while it has none", () => {
    const solution = { steps: ["first", "second"], figure: { alt: "a", view: { x: [-1, 1] as [number, number], y: [-1, 1] as [number, number] }, elements: [] } };
    const withSolution = {
      ...complexNumbers,
      concepts: complexNumbers.concepts.map((c) =>
        c.id === "C06" ? { ...c, items: c.items.map((it, i) => (i === 0 ? { ...it, solution } : { ...it, solution: undefined })) } : c,
      ),
    };
    const items = toSeedPayload(withSolution, true).concepts.find((c) => c.code === "C06")!.items;
    expect(items[0].solution).toEqual(solution);
    expect(items[1].solution).toBeNull();
  });

  it("marks items verified only when told the verifier passed", () => {
    expect(byCode("C06").items.every((i) => i.verified)).toBe(true);
    expect(toSeedPayload(complexNumbers, false).concepts.flatMap((c) => c.items).some((i) => i.verified)).toBe(false);
  });
});
