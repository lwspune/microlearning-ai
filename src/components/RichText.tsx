import { renderInlineText, renderRichText } from "@/lib/richText";
import { RenderedInlineNodes, RenderedRichText } from "./RenderedRichText";

/** Server component: renders authored rich text (math via KaTeX on the server). */
export function RichText({ text, className }: { text: string; className?: string }) {
  return <RenderedRichText blocks={renderRichText(text)} className={className} />;
}

/** Single-line rich text (no paragraphs), for titles, options and table cells. */
export function RichInline({ text }: { text: string }) {
  return <RenderedInlineNodes nodes={renderInlineText(text)} />;
}
