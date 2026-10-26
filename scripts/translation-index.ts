/**
 * Rewrites a chapter's `translations/index.ts` from the files in `translations/hi` and
 * `translations/mr` (TRANSLATION_RUNBOOK.md, step 3). Creates the folders and an empty register
 * when a chapter has none yet.
 *
 * Usage: npm run translations:index -- <chapter-slug>
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { translationIndexSource } from "../src/content/translationTools.ts";

const slug = process.argv[2];
const dir = `src/content/chapters/${slug}`;
if (!slug || !existsSync(dir)) {
  console.error(`Usage: npm run translations:index -- <chapter-slug>${slug ? ` (no folder ${dir})` : ""}`);
  process.exit(1);
}
for (const lang of ["hi", "mr"]) mkdirSync(`${dir}/translations/${lang}`, { recursive: true });
const source = translationIndexSource({ hi: readdirSync(`${dir}/translations/hi`), mr: readdirSync(`${dir}/translations/mr`) });
writeFileSync(`${dir}/translations/index.ts`, source);
console.log(`${dir}/translations/index.ts: ${(source.match(/^import \{/gm) ?? []).length} translation(s)`);
