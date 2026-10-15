/**
 * Prints a concept's student-facing text for a read-through: hook, explanation, worked example,
 * misconceptions, and each item with its options (key and misconception marked) and solution.
 * Figures are summarised by their alt text. RUNBOOK 3, step 7.
 * Usage: node scripts/review-text.ts <concept-file.ts>...
 */
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { Concept } from "../src/content/types.ts";

for (const file of process.argv.slice(2)) {
  const mod = (await import(pathToFileURL(resolve(file)).href)) as Record<string, Concept>;
  const c = Object.values(mod).find((v) => v && typeof v === "object" && "items" in v);
  if (!c) {
    console.log(`${file}: no concept`);
    continue;
  }
  const e = c.explanation;
  const out: string[] = [`=== ${c.id} (${file})`, `HOOK: ${c.hook.prompt}`, `REVEAL: ${c.hook.reveal}`, `IDEA: ${e.intuition}`];
  if (e.figure) out.push(`  [figure: ${e.figure.alt}]`);
  for (const sec of typeof e.formal === "string" ? [{ body: e.formal, figure: undefined }] : e.formal) {
    out.push(`FORMAL:\n${sec.body}`);
    if (sec.figure) out.push(`  [figure: ${sec.figure.alt}]`);
  }
  out.push(`WORKED: ${e.worked.prompt}`, ...e.worked.steps.map((s, i) => `  ${i + 1}. ${s}`), `  = ${e.worked.answer}`);
  if (e.worked.figure) out.push(`  [figure: ${e.worked.figure.alt}]`);
  for (const m of c.misconceptions) {
    const fb = m.fallback.kind === "concept" ? m.fallback.id : m.fallback.kind === "ext" ? `ext: ${m.fallback.topic}` : "none";
    out.push(`${m.id} [${fb}] ${m.mistake}\n   → ${m.remediation}`);
  }
  for (const item of c.items) {
    out.push(`${item.id} (${item.source.kind === "pyqvault-practice" ? item.source.ref : item.source.kind}): ${item.stem}`);
    if (item.figure) out.push(`  [figure: ${item.figure.alt}]`);
    for (const o of item.options) out.push(`  ${o.correct ? "*" : " "} ${o.key}. ${o.text}${o.misconceptionId ? `   (${o.misconceptionId})` : ""}`);
    out.push(...item.solution.steps.map((s, i) => `    s${i + 1}. ${s}`));
    if (item.solution.figure) out.push(`    [figure: ${item.solution.figure.alt}]`);
  }
  if (c.engineNotes?.length) out.push(`NOTES: ${c.engineNotes.join(" | ")}`);
  console.log(out.join("\n") + "\n");
}
