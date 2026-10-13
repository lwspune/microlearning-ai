import { describe, expect, it } from "vitest";
import { complexNumbers } from "@/content/chapters/complex-numbers";
import type { Concept, Figure } from "@/content/types";
import { buildDeck } from "./deck";

const concept = (id: string) => complexNumbers.concepts.find((c) => c.id === id)!;

function fake(formal: string, steps: string[]): Pick<Concept, "hook" | "explanation"> {
  return {
    hook: { prompt: "P", reveal: "R" },
    explanation: { intuition: "I", formal, worked: { prompt: "W", steps, answer: "A" }, visualSpec: "" },
  };
}

const FIG: Figure = { alt: "a point", view: { x: [-1, 1], y: [-1, 1] }, elements: [{ kind: "point", at: [0, 0] }] };

describe("buildDeck", () => {
  it("puts the concept's figure on the idea slide", () => {
    const c = fake("F", ["s1"]);
    c.explanation.figure = FIG;
    const idea = buildDeck(c).find((s) => s.id === "idea");
    expect(idea).toMatchObject({ kind: "text", figure: FIG });
  });

  it("gives each worked slide the worked figure, up to that slide's step", () => {
    const c = fake("F", ["s1", "s2"]);
    c.explanation.worked.figure = FIG;
    const worked = buildDeck(c).filter((s) => s.kind === "worked");
    expect(worked.map((s) => s.kind === "worked" && [s.figure, s.step])).toEqual([
      [FIG, 1],
      [FIG, 2],
    ]);
  });

  it("leaves slides without a figure when the concept has none", () => {
    const deck = buildDeck(fake("F", ["s1"]));
    expect(deck.some((s) => "figure" in s && s.figure)).toBe(false);
  });

  it("orders slides: hook, reveal, idea, formal, worked steps, questions", () => {
    expect(buildDeck(fake("F", ["s1", "s2", "s3"])).map((s) => s.id)).toEqual([
      "hook", "reveal", "idea", "formal-1", "worked-1", "worked-2", "worked-3", "questions",
    ]);
  });

  it("starts a new formal slide at each blank line, keeping a list with its lead-in", () => {
    const deck = buildDeck(fake("Para one.\n\nLead-in:\n- a\n- b\n\nLast.", ["s"]));
    const formal = deck.filter((s) => s.kind === "text" && s.id.startsWith("formal-"));
    expect(formal.map((s) => s.kind === "text" && s.body)).toEqual(["Para one.", "Lead-in:\n- a\n- b", "Last."]);
  });

  it("keeps display math with the paragraph it belongs to", () => {
    const deck = buildDeck(fake("For $c$:\n$$x$$\nSpecial case.", ["s"]));
    expect(deck.filter((s) => s.id.startsWith("formal-"))).toHaveLength(1);
  });

  it("builds the worked example up one step per slide, answer on the last", () => {
    const worked = buildDeck(fake("F", ["s1", "s2", "s3"])).filter((s) => s.kind === "worked");
    expect(worked.map((s) => s.kind === "worked" && [s.steps, s.answer])).toEqual([
      [["s1"], null],
      [["s1", "s2"], null],
      [["s1", "s2", "s3"], "A"],
    ]);
  });

  it("shows the hook prompt again on the reveal slide", () => {
    const reveal = buildDeck(fake("F", ["s"])).find((s) => s.id === "reveal");
    expect(reveal).toMatchObject({ kind: "reveal", prompt: "P", reveal: "R" });
  });

  it("gives every slide a title", () => {
    for (const s of buildDeck(fake("F\n\nG", ["s1", "s2"]))) expect(s.title.length).toBeGreaterThan(0);
  });

  it("builds a deck with unique ids for every authored concept", () => {
    for (const c of complexNumbers.concepts) {
      const ids = buildDeck(c).map((s) => s.id);
      expect(new Set(ids).size, c.id).toBe(ids.length);
    }
  });

  it("splits C14's formal explanation into its three authored sections", () => {
    expect(buildDeck(concept("C14")).filter((s) => s.id.startsWith("formal-"))).toHaveLength(3);
  });
});
