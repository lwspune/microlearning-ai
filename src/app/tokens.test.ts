import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

/**
 * Colour tokens meet WCAG AA in both themes, computed from globals.css rather
 * than eyeballed (RUNBOOK lessons). Add a pair here whenever the UI puts a new
 * text colour on a new background.
 */

const css = readFileSync(new URL("./globals.css", import.meta.url), "utf8");

function tokens(block: string): Record<string, string> {
  return Object.fromEntries([...block.matchAll(/--([a-z-]+):\s*(#[0-9a-f]{6})\s*;/gi)].map((m) => [m[1], m[2].toLowerCase()]));
}

const light = tokens(css.match(/^:root\s*\{([^}]*)\}/m)![1]);
const dark = tokens(css.match(/@media \(prefers-color-scheme: dark\)\s*\{\s*:root\s*\{([^}]*)\}/)![1]);

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** [text, background] pairs the UI uses. */
const TEXT_PAIRS: [string, string][] = [
  ...["background", "surface", "card", "accent-soft", "success-surface", "danger-surface", "warning-surface"].map(
    (bg): [string, string] => ["foreground", bg],
  ),
  ["muted", "background"],
  ["muted", "surface"],
  ["muted", "card"],
  ["muted", "warning-surface"],
  ["muted", "accent-soft"], // featured "Up next" card
  ["accent", "warning-surface"], // "Review" link on a due card
  ["accent", "background"],
  ["accent", "surface"],
  ["accent", "card"],
  ["accent", "accent-soft"],
  ["background", "accent"], // primary button label
  ["success", "success-surface"],
  ["success", "card"],
  ["danger", "danger-surface"],
  ["danger", "card"],
];

/** Non-text UI that must stand out from its background (WCAG 1.4.11): focus rings, button shapes. */
const UI_PAIRS: [string, string][] = [
  ["accent", "background"],
  ["accent", "card"],
  ["border-strong", "card"],
];

describe.each([
  ["light", light],
  ["dark", dark],
])("%s theme", (_, t) => {
  it.each(TEXT_PAIRS)("%s text on %s meets 4.5:1", (fg, bg) => {
    expect(t[fg], `--${fg} is defined`).toBeDefined();
    expect(t[bg], `--${bg} is defined`).toBeDefined();
    expect(contrast(t[fg], t[bg])).toBeGreaterThanOrEqual(4.5);
  });

  it.each(UI_PAIRS)("%s against %s meets 3:1", (fg, bg) => {
    expect(contrast(t[fg], t[bg])).toBeGreaterThanOrEqual(3);
  });
});
