/**
 * Prints a concept's English text in the shape of a translation file (AUTHORING.md,
 * Translations), with its `source` fingerprint: the starting point for `translations/<lang>/cNN.ts`.
 *
 * Usage: node scripts/translation-skeleton.ts <chapter-slug> <concept-id>...
 */
import { chapters } from "../src/content/chapters/index.ts";
import { textFingerprint } from "../src/content/translate.ts";

const [slug, ...ids] = process.argv.slice(2);
const chapter = chapters.find((c) => c.slug === slug);
if (!chapter || ids.length === 0) {
  console.error("Usage: node scripts/translation-skeleton.ts <chapter-slug> <concept-id>...");
  process.exit(1);
}

/** A string literal as the content files write it: t`...` unless that can't hold it. */
const q = (s: string) => (s.includes("`") || s.includes("${") ? JSON.stringify(s) : `t\`${s}\``);
const list = (xs: string[], pad: string) => `[\n${xs.map((x) => `${pad}  ${q(x)},`).join("\n")}\n${pad}]`;

for (const id of ids) {
  const c = chapter.concepts.find((x) => x.id === id);
  if (!c) {
    console.error(`${slug} has no authored concept ${id}`);
    process.exit(1);
  }
  const ex = c.explanation;
  const formal =
    typeof ex.formal === "string"
      ? q(ex.formal)
      : `[\n${ex.formal.map((s) => ("points" in s ? `    { title: ${q(s.title)}, points: ${list(s.points, "    ")} },` : `    { body: ${q(s.body)} },`)).join("\n")}\n  ]`;
  console.log(`  id: "${c.id}",
  source: "${textFingerprint(c)}",
  hook: { prompt: ${q(c.hook.prompt)}, reveal: ${q(c.hook.reveal)} },
  intuition: ${typeof ex.intuition === "string" ? q(ex.intuition) : list(ex.intuition, "  ")},
  formal: ${formal},
  worked: { prompt: ${q(ex.worked.prompt)}, steps: ${list(ex.worked.steps, "  ")}, answer: ${q(ex.worked.answer)} },
  remediation: {
${c.misconceptions.map((m) => `    "${m.id}": ${q(m.remediation)},`).join("\n")}
  },
  solutions: {
${c.items.map((i) => `    "${i.id}": ${list(i.solution.steps, "    ")},`).join("\n")}
  },
`);
}
