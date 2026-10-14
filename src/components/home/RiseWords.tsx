import { type CSSProperties, Fragment } from "react";

/**
 * Text whose words rise into place one after another (globals.css `.rise`).
 * A [bracketed phrase] gets a highlighter stroke that sweeps in after.
 * The words stay plain text, so screen readers and copy-paste read it whole.
 */
export function RiseWords({ text, start = 0 }: { text: string; start?: number }) {
  const words: { word: string; ink: boolean }[] = [];
  let ink = false;
  for (const raw of text.split(" ")) {
    if (raw.startsWith("[")) ink = true;
    words.push({ word: raw.replace(/[[\]]/g, ""), ink });
    if (raw.endsWith("]")) ink = false;
  }
  return words.map(({ word, ink }, i) => {
    const space = i < words.length - 1 ? " " : "";
    const risen = (
      <span className="rise" style={{ "--w": start + i } as CSSProperties}>
        <span>{word}</span>
      </span>
    );
    // Inside a highlighted phrase the space is highlighted too; after its last word it isn't.
    if (!ink) return <Fragment key={i}>{risen}{space}</Fragment>;
    const inner = words[i + 1]?.ink ? space : "";
    return (
      <Fragment key={i}>
        <span className="ink" style={{ "--w": start + i } as CSSProperties}>
          {risen}
          {inner}
        </span>
        {inner ? "" : space}
      </Fragment>
    );
  });
}
