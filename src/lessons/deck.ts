import type { Concept } from "@/content/types";

/**
 * A concept as a slide deck. Slide ids are stable ("hook", "formal-2",
 * "worked-3", …) so narration scripts can be keyed to them.
 */
export type SlideSpec = { id: string; title: string } & (
  | { kind: "hook"; prompt: string }
  | { kind: "reveal"; prompt: string; reveal: string }
  | { kind: "text"; body: string }
  | { kind: "worked"; prompt: string; steps: string[]; answer: string | null }
  | { kind: "questions" }
);

/**
 * Splits authored text into slide-sized sections at blank lines. A blank line
 * inside display math ($$…$$) never splits; lists stay with their lead-in
 * because authors write them without a blank line before.
 */
function sections(text: string): string[] {
  const out: string[] = [];
  for (const part of text.split(/\n\s*\n/)) {
    const prev = out.at(-1);
    const insideDisplayMath = prev !== undefined && (prev.match(/\$\$/g) ?? []).length % 2 === 1;
    if (insideDisplayMath) out[out.length - 1] = `${prev}\n\n${part}`;
    else out.push(part.trim());
  }
  return out.filter((s) => s.length > 0);
}

export function buildDeck(concept: Pick<Concept, "hook" | "explanation">): SlideSpec[] {
  const { hook, explanation: ex } = concept;
  const formal = sections(ex.formal);
  const steps = ex.worked.steps;

  return [
    { id: "hook", title: "Think about this", kind: "hook", prompt: hook.prompt },
    { id: "reveal", title: "Think about this", kind: "reveal", prompt: hook.prompt, reveal: hook.reveal },
    { id: "idea", title: "The idea", kind: "text", body: ex.intuition },
    ...formal.map((body, i) => ({ id: `formal-${i + 1}`, title: "Precisely", kind: "text" as const, body })),
    ...steps.map((_, i) => ({
      id: `worked-${i + 1}`,
      title: "Worked example",
      kind: "worked" as const,
      prompt: ex.worked.prompt,
      steps: steps.slice(0, i + 1),
      answer: i === steps.length - 1 ? ex.worked.answer : null,
    })),
    { id: "questions", title: "Check yourself", kind: "questions" },
  ];
}
