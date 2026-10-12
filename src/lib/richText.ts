import katex from "katex";

/**
 * Minimal rich text for authored content: `$…$` inline math, `$$…$$` display
 * math, `**bold**`, `*italic*`, `- ` list lines, blank-line paragraphs.
 * Text stays text (React escapes it); only KaTeX output is HTML.
 */

export type Inline =
  | { type: "text"; text: string; bold: boolean; italic: boolean }
  | { type: "math"; tex: string; bold: boolean };

export type Block =
  | { type: "paragraph"; inline: Inline[] }
  | { type: "list"; items: Inline[][] }
  | { type: "math"; tex: string };

export function parseInline(src: string): Inline[] {
  const out: Inline[] = [];
  let bold = false;
  let italic = false;
  let buf = "";

  const flush = () => {
    if (buf) out.push({ type: "text", text: buf, bold, italic });
    buf = "";
  };

  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (ch === "$") {
      const end = src.indexOf("$", i + 1);
      if (end === -1) {
        buf += src.slice(i);
        break;
      }
      flush();
      out.push({ type: "math", tex: src.slice(i + 1, end), bold });
      i = end;
    } else if (ch === "*" && src[i + 1] === "*") {
      flush();
      bold = !bold;
      i++;
    } else if (ch === "*") {
      flush();
      italic = !italic;
    } else {
      buf += ch;
    }
  }
  flush();
  return out;
}

export function parseRichText(src: string): Block[] {
  const blocks: Block[] = [];
  const parts = src.split(/\$\$([\s\S]*?)\$\$/);
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      blocks.push({ type: "math", tex: part.trim() });
    } else {
      blocks.push(...parseTextBlocks(part));
    }
  });
  return blocks;
}

function parseTextBlocks(src: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: string[] = [];

  const flushPara = () => {
    if (para.length) blocks.push({ type: "paragraph", inline: parseInline(para.join(" ")) });
    para = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: "list", items: list.map(parseInline) });
    list = [];
  };

  for (const raw of src.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
    } else if (line.startsWith("- ")) {
      flushPara();
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return blocks;
}

/** KaTeX HTML. `trust: false` blocks \href, \url and other link/HTML commands. */
export function renderMath(tex: string, display: boolean): string {
  return katex.renderToString(tex, { displayMode: display, throwOnError: false, trust: false, strict: "ignore" });
}
