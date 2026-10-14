import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { renderInlineText } from "@/lib/richText";
import { RenderedInlineNodes } from "./RenderedRichText";

describe("RenderedInlineNodes", () => {
  it("keeps math and the punctuation touching it on one line", () => {
    const out = renderToStaticMarkup(<RenderedInlineNodes nodes={renderInlineText("so ($d = 6$). Next")} />);
    const glued = out.match(/<span class="whitespace-nowrap">\(<span><span><span class="katex">[\s\S]*?<\/span>\)\.<\/span>/);
    expect(glued).not.toBeNull();
    expect(out).toContain(" Next");
  });

  it("escapes glued punctuation as text", () => {
    const nodes = renderInlineText("$x$.");
    if (nodes[0].type !== "math") throw new Error("expected math");
    nodes[0].after = "<b>";
    expect(renderToStaticMarkup(<RenderedInlineNodes nodes={nodes} />)).toContain("&lt;b&gt;");
  });
});
