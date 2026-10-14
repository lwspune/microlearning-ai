/**
 * Checks one concept file on its own: the structural validator against its chapter's graph, then
 * the sympy verifier on its items. For agents writing concepts in parallel (RUNBOOK 3, step 5c),
 * before the concept is registered in the chapter's index.ts.
 * Usage: node scripts/check-concept.ts <chapter-slug> <concept-file.ts>
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chapters } from "../src/content/chapters/index.ts";
import type { Concept } from "../src/content/types.ts";
import { validateChapter } from "../src/content/validate.ts";
import { exportChapter } from "./export-content.ts";

const [slug, file] = process.argv.slice(2);
const chapter = chapters.find((c) => c.slug === slug);
if (!chapter || !file) {
  console.error(`usage: node scripts/check-concept.ts <chapter-slug> <concept-file.ts>${chapter ? "" : ` (no chapter ${slug})`}`);
  process.exit(2);
}
const mod = (await import(pathToFileURL(resolve(file)).href)) as Record<string, Concept>;
const concept = Object.values(mod).find((v) => v && typeof v === "object" && "items" in v);
if (!concept) {
  console.error(`${file} exports no concept`);
  process.exit(2);
}

// The chapter with just this concept: other concepts' rules (and their absence) don't apply.
const alone = { ...chapter, concepts: [concept] };
const structural = validateChapter(alone);
for (const e of structural) console.log("FAIL", e);
console.log(`${concept.id} structure: ${structural.length} problem(s)`);

const dir = mkdtempSync(join(tmpdir(), "check-concept-"));
const json = join(dir, `${slug}.json`);
writeFileSync(json, JSON.stringify(exportChapter(alone), null, 2));
let failed = structural.length > 0;
try {
  process.stdout.write(execFileSync("python", ["verify/verify_content.py", json], { encoding: "utf-8" }));
} catch (e) {
  process.stdout.write((e as { stdout?: string }).stdout ?? String(e));
  failed = true;
}
process.exit(failed ? 1 : 0);
