import { type Inline, parseInline, parseRichText, renderMath } from "@/lib/richText";

function InlineNodes({ nodes }: { nodes: Inline[] }) {
  return nodes.map((n, i) => {
    if (n.type === "math") {
      // KaTeX output only (trust: false); author text never reaches innerHTML.
      const math = <span dangerouslySetInnerHTML={{ __html: renderMath(n.tex, false) }} />;
      return n.bold ? <strong key={i}>{math}</strong> : <span key={i}>{math}</span>;
    }
    let el: React.ReactNode = n.text;
    if (n.italic) el = <em>{el}</em>;
    if (n.bold) el = <strong>{el}</strong>;
    return <span key={i}>{el}</span>;
  });
}

/** Block-level rich text: paragraphs, lists and display math. */
export function RichText({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`space-y-3 ${className ?? ""}`}>
      {parseRichText(text).map((b, i) => {
        if (b.type === "math") {
          return <div key={i} dangerouslySetInnerHTML={{ __html: renderMath(b.tex, true) }} />;
        }
        if (b.type === "list") {
          return (
            <ul key={i} className="list-disc space-y-1 pl-5">
              {b.items.map((item, j) => (
                <li key={j}>
                  <InlineNodes nodes={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i}>
            <InlineNodes nodes={b.inline} />
          </p>
        );
      })}
    </div>
  );
}

/** Single-line rich text (no paragraphs), for titles, options and table cells. */
export function RichInline({ text }: { text: string }) {
  return <InlineNodes nodes={parseInline(text)} />;
}
