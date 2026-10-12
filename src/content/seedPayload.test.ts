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
    expect(byCode("C05")).toMatchObject({ status: "draft", body: null, misconceptions: [], items: [], prereqs: ["C04"] });
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

  it("marks items verified only when told the verifier passed", () => {
    expect(byCode("C06").items.every((i) => i.verified)).toBe(true);
    expect(toSeedPayload(complexNumbers, false).concepts.flatMap((c) => c.items).some((i) => i.verified)).toBe(false);
  });
});
