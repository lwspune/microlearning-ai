/**
 * Rich text with math already rendered to KaTeX HTML on the server. Plain,
 * JSON-safe data, so client components can display it without bundling KaTeX.
 * Produced by renderRichText (richText.ts); displayed by RenderedRichText.
 */
export type RenderedInline =
  | { type: "text"; text: string; bold: boolean; italic: boolean }
  | { type: "math"; html: string; bold: boolean };

export type RenderedBlock =
  | { type: "paragraph"; inline: RenderedInline[] }
  | { type: "list"; items: RenderedInline[][] }
  | { type: "math"; html: string };
