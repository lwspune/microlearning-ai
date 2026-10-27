/**
 * Writes the bundle PYQ Vault imports for its Learn tab (PLAN.md "Learn tab on PYQ Vault"):
 * structural validation, then the sympy verifier, then bundle.json + manifest.json in <outDir>.
 * The same gates as `npm run content:seed`, so PYQ Vault gets only what this app would serve.
 * Stops before writing if a check fails or the working tree has uncommitted changes (the
 * manifest's commit must describe the content).
 *
 * Usage: node scripts/export-pyqvault.ts <outDir> [--allow-dirty]
 * PYQ Vault side: `npm run learn:import -- --from=<outDir>`.
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chapters as catalog } from "../src/content/chapters/index.ts";
import { courses } from "../src/content/courses.ts";
import { PYQVAULT_TARGETS, pyqvaultBundle } from "../src/content/pyqvaultBundle.ts";
import { validateChapter } from "../src/content/validate.ts";

const args = process.argv.slice(2);
const outDir = args.find((a) => !a.startsWith("--"));
if (!outDir) {
  console.error("usage: node scripts/export-pyqvault.ts <outDir> [--allow-dirty]");
  process.exit(1);
}

const git = (cmd: string) => spawnSync(`git ${cmd}`, { shell: true, encoding: "utf8" }).stdout.trim();
const dirty = git("status --porcelain") !== "";
if (dirty && !args.includes("--allow-dirty")) {
  console.error("The working tree has uncommitted changes; commit them first (or pass --allow-dirty).");
  process.exit(1);
}

// Which pool chapters the bundle uses (verified=false: nothing is claimed yet).
const used = new Set(pyqvaultBundle(PYQVAULT_TARGETS, courses, catalog, false).chapters.map((c) => c.slug));
const chapters = catalog.filter((c) => used.has(c.slug));

// 1. Structure.
const structural = chapters.flatMap((ch) => validateChapter(ch).map((e) => `${ch.slug}: ${e}`));
if (structural.length) {
  for (const e of structural) console.error("FAIL", e);
  console.error("Structural validation failed; nothing was written.");
  process.exit(1);
}
console.log(`structure: ${chapters.length} chapter(s) valid`);

// 2. Answers (re-derived with sympy).
const verify = spawnSync(
  `node scripts/export-content.ts .content && python verify/verify_content.py ${chapters.map((c) => `.content/${c.slug}.json`).join(" ")}`,
  { shell: true, stdio: "inherit" },
);
if (verify.status !== 0) {
  console.error("Answer verification failed; nothing was written.");
  process.exit(1);
}

// 3. Write.
const bundle = pyqvaultBundle(PYQVAULT_TARGETS, courses, catalog, true);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "bundle.json"), JSON.stringify(bundle));
const manifest = {
  source: "concept-ladder",
  commit: git("rev-parse HEAD"),
  dirty,
  exportedAt: new Date().toISOString(),
  verified: true,
  courses: bundle.courses.map((c) => ({ slug: c.slug, chapters: c.chapters.length })),
  chapters: bundle.chapters.map((c) => c.slug),
};
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`wrote ${join(outDir, "bundle.json")}: ${bundle.courses.length} courses, ${bundle.chapters.length} chapters`);
