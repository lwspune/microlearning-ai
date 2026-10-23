/**
 * Seeds chapters into the database: structural validation, then the
 * sympy verifier, then one seed_chapter() call (one transaction) per chapter.
 * Stops before any write if a check fails.
 *
 * Usage: node scripts/seed-content.ts [chapter-slug ...]   (reads .env.local)
 * With no slugs it seeds every chapter (the verifier then takes about two
 * hours); with slugs it checks and seeds only those chapters.
 */
import { spawnSync } from "node:child_process";
import { chapters as catalog } from "../src/content/chapters/index.ts";
import { pickChapters } from "../src/content/pickChapters.ts";
import { toSeedPayload } from "../src/content/seedPayload.ts";
import { validateChapter } from "../src/content/validate.ts";

const slugs = process.argv.slice(2);
const chapters = pickChapters(catalog, slugs);

try {
  process.loadEnvFile(".env.local");
} catch {
  // CI provides the variables directly.
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  process.exit(1);
}

// 1. Structure.
const structural = chapters.flatMap((ch) => validateChapter(ch).map((e) => `${ch.slug}: ${e}`));
if (structural.length) {
  for (const e of structural) console.error("FAIL", e);
  console.error("Structural validation failed; nothing was written.");
  process.exit(1);
}
console.log(`structure: ${chapters.length} chapter(s) valid`);

// 2. Answers (re-derived with sympy).
const verifyCommand = slugs.length
  ? `node scripts/export-content.ts .content && python verify/verify_content.py ${chapters.map((c) => `.content/${c.slug}.json`).join(" ")}`
  : "npm run content:verify";
const verify = spawnSync(verifyCommand, { shell: true, stdio: "inherit" });
if (verify.status !== 0) {
  console.error("Answer verification failed; nothing was written.");
  process.exit(1);
}

// 3. Seed, one transaction per chapter.
for (const chapter of chapters) {
  const res = await fetch(`${url}/rest/v1/rpc/seed_chapter`, {
    method: "POST",
    headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ p: toSeedPayload(chapter, true) }),
  });
  const body = await res.text();
  if (!res.ok) {
    console.error(`FAIL seeding ${chapter.slug} (HTTP ${res.status}): ${body}`);
    process.exit(1);
  }
  console.log(`seeded ${body}`);
}
