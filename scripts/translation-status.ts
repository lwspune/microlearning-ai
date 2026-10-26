/**
 * Compares a chapter's approved translations with the live database after a seed
 * (TRANSLATION_RUNBOOK.md, step 9): concepts, solutions and remediations per language.
 * Fails when any count differs.
 *
 * Usage: npm run translations:status -- <chapter-slug>
 * Reads .env.local for the Supabase Management API (SUPABASE_PROJECT_REF, SUPABASE_ACCESS_TOKEN).
 */
import { chapters } from "../src/content/chapters/index.ts";
import { expectedTranslationCounts, translationCountGaps, type TranslationCounts } from "../src/content/translationTools.ts";
import type { Lang } from "../src/content/types.ts";

try {
  process.loadEnvFile(".env.local");
} catch {
  // CI provides the variables directly.
}

const slug = process.argv[2];
const chapter = chapters.find((c) => c.slug === slug);
if (!chapter) {
  console.error(`Usage: npm run translations:status -- <chapter-slug>${slug ? ` (no chapter ${slug})` : ""}`);
  process.exit(2);
}
if (!/^[a-z0-9-]+$/.test(chapter.slug)) throw new Error(`unexpected chapter slug ${chapter.slug}`);

const query = `
  select t.lang,
    count(distinct t.concept_id)::int as concepts,
    (select count(*)::int from item_translations it join items i on i.id = it.item_id
       join concepts c2 on c2.id = i.concept_id join chapters h2 on h2.id = c2.chapter_id
       where h2.slug = '${chapter.slug}' and it.lang = t.lang) as solutions,
    (select count(*)::int from misconception_translations mt join misconceptions m on m.id = mt.misconception_id
       join concepts c3 on c3.id = m.concept_id join chapters h3 on h3.id = c3.chapter_id
       where h3.slug = '${chapter.slug}' and mt.lang = t.lang) as remediations
  from concept_translations t join concepts c on c.id = t.concept_id join chapters h on h.id = c.chapter_id
  where h.slug = '${chapter.slug}' group by t.lang`;

const res = await fetch(`https://api.supabase.com/v1/projects/${process.env.SUPABASE_PROJECT_REF}/database/query`, {
  method: "POST",
  headers: { Authorization: `Bearer ${process.env.SUPABASE_ACCESS_TOKEN}`, "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
});
if (!res.ok) {
  throw new Error(`Supabase query failed: ${res.status} ${await res.text()}`);
}
const rows = (await res.json()) as ({ lang: Lang } & TranslationCounts)[];
const live = Object.fromEntries(rows.map(({ lang, ...counts }) => [lang, counts])) as Partial<Record<Lang, TranslationCounts>>;
const expected = expectedTranslationCounts(chapter);

for (const lang of ["hi", "mr"] as const) {
  const e = expected[lang];
  console.log(`${lang}: ${e.concepts} concepts, ${e.solutions} solutions, ${e.remediations} remediations in the catalog`);
}
const gaps = translationCountGaps(expected, live);
for (const g of gaps) console.log(g);
console.log(gaps.length ? `${gaps.length} gap(s): seed the chapter (npm run content:seed -- ${chapter.slug})` : "live matches the catalog");
// exitCode, not exit(): exiting straight after fetch trips a libuv assertion on Windows.
if (gaps.length) process.exitCode = 1;
