import { describe, expect, it } from "vitest";
import { parseInline, parseRichText, renderMath } from "./richText";

describe("parseInline", () => {
  it("returns plain text as one segment", () => {
    expect(parseInline("hello")).toEqual([{ type: "text", text: "hello", bold: false, italic: false }]);
  });

  it("splits inline math", () => {
    expect(parseInline("a $x^2$ b")).toEqual([
      { type: "text", text: "a ", bold: false, italic: false },
      { type: "math", tex: "x^2", bold: false },
      { type: "text", text: " b", bold: false, italic: false },
    ]);
  });

  it("handles bold that wraps math", () => {
    expect(parseInline("**Which $1 - i$?**")).toEqual([
      { type: "text", text: "Which ", bold: true, italic: false },
      { type: "math", tex: "1 - i", bold: true },
      { type: "text", text: "?", bold: true, italic: false },
    ]);
  });

  it("handles single-star italics without confusing them with bold", () => {
    expect(parseInline("set the *other* part")).toEqual([
      { type: "text", text: "set the ", bold: false, italic: false },
      { type: "text", text: "other", bold: false, italic: true },
      { type: "text", text: " part", bold: false, italic: false },
    ]);
  });

  it("leaves an unclosed $ as literal text", () => {
    expect(parseInline("costs $5")).toEqual([{ type: "text", text: "costs $5", bold: false, italic: false }]);
  });

  it("does not treat * inside math as emphasis", () => {
    expect(parseInline("$a*b$")).toEqual([{ type: "math", tex: "a*b", bold: false }]);
  });
});

describe("parseRichText", () => {
  it("splits paragraphs on blank lines", () => {
    const blocks = parseRichText("one\n\ntwo");
    expect(blocks.map((b) => b.type)).toEqual(["paragraph", "paragraph"]);
  });

  it("extracts display math, even inside a paragraph", () => {
    const blocks = parseRichText("For $c$:\n$$\\frac{a}{b}$$\nSpecial case.");
    expect(blocks).toEqual([
      { type: "paragraph", inline: parseInline("For $c$:") },
      { type: "math", tex: "\\frac{a}{b}" },
      { type: "paragraph", inline: parseInline("Special case.") },
    ]);
  });

  it("groups '- ' lines into a list, separate from a lead-in line", () => {
    const blocks = parseRichText("With:\n- one\n- two $x$");
    expect(blocks).toEqual([
      { type: "paragraph", inline: parseInline("With:") },
      { type: "list", items: [parseInline("one"), parseInline("two $x$")] },
    ]);
  });
});

describe("renderMath", () => {
  it("renders TeX to KaTeX HTML", () => {
    expect(renderMath("x^2", false)).toContain("katex");
  });

  it("does not render untrusted commands like \\href into links", () => {
    // The source TeX survives only as escaped text in KaTeX's <annotation>; no link is built.
    const html = renderMath("\\href{javascript:alert(1)}{x}", false);
    expect(html).not.toMatch(/href\s*=/);
    expect(html).not.toContain("<a ");
  });

  it("does not throw on invalid TeX", () => {
    expect(() => renderMath("\\frac{", false)).not.toThrow();
  });
});
