/**
 * Checks one chapter, its translations included, and fails on any problem (TRANSLATION_RUNBOOK.md,
 * step 4). Faster than the whole test suite while writing; run it before every commit.
 *
 * Usage: npm run translations:check -- <chapter-slug>
 */
import { chapters } from "../src/content/chapters/index.ts";
import { validateChapter } from "../src/content/validate.ts";

const slug = process.argv[2];
const chapter = chapters.find((c) => c.slug === slug);
if (!chapter) {
  console.error(`Usage: npm run translations:check -- <chapter-slug>${slug ? ` (no chapter ${slug})` : ""}`);
  process.exit(2);
}
const problems = validateChapter(chapter);
for (const p of problems) console.log(p);
console.log(`${problems.length} problem(s); ${chapter.translations?.length ?? 0} translation(s)`);
if (problems.length) process.exit(1);
