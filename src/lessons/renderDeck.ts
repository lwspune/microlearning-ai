import "server-only";
import type { RenderedBlock, RenderedInline } from "@/lib/renderedText";
import { renderInlineText, renderRichText } from "@/lib/richText";
import type { SlideSpec } from "./deck";

/** A slide with its math pre-rendered on the server (JSON-safe, no KaTeX on the client). */
export type RenderedSlide = { id: string; title: string } & (
  | { kind: "hook"; prompt: RenderedBlock[] }
  | { kind: "reveal"; prompt: RenderedBlock[]; reveal: RenderedBlock[] }
  | { kind: "text"; body: RenderedBlock[] }
  | { kind: "worked"; prompt: RenderedBlock[]; steps: RenderedInline[][]; answer: RenderedInline[] | null }
  | { kind: "questions" }
);

export function renderDeck(deck: SlideSpec[]): RenderedSlide[] {
  return deck.map((s): RenderedSlide => {
    switch (s.kind) {
      case "hook":
        return { ...s, prompt: renderRichText(s.prompt) };
      case "reveal":
        return { ...s, prompt: renderRichText(s.prompt), reveal: renderRichText(s.reveal) };
      case "text":
        return { ...s, body: renderRichText(s.body) };
      case "worked":
        return {
          ...s,
          prompt: renderRichText(s.prompt),
          steps: s.steps.map(renderInlineText),
          answer: s.answer === null ? null : renderInlineText(s.answer),
        };
      case "questions":
        return s;
    }
  });
}
