/**
 * Helpers for the translation runbook (TRANSLATION_RUNBOOK.md): the chapter's translation register
 * and the counts a seeded chapter should show in the live database.
 */
import { toSeedPayload } from "./seedPayload.ts";
import { LANGS } from "./translate.ts";
import type { Chapter, Lang } from "./types.ts";

/** `translations/index.ts` for a chapter, from the file names in `translations/hi` and `translations/mr`. */
export function translationIndexSource(files: Record<Lang, string[]>): string {
  const lines = ['import type { ConceptTranslation } from "../../../types.ts";'];
  const names: string[] = [];
  for (const lang of LANGS) {
    for (const file of [...files[lang]].filter((f) => /^c\d+\.ts$/.test(f)).sort()) {
      const c = file.slice(0, -3);
      const name = `${lang}${c.toUpperCase()}`;
      lines.push(`import { ${c} as ${name} } from "./${lang}/${c}.ts";`);
      names.push(name);
    }
  }
  const body = names.join(", ");
  const list = body.length < 70 ? `[${body}]` : `[\n  ${body},\n]`;
  return `${lines.join("\n")}\n\n/** Hindi and Marathi lessons (AUTHORING.md, Translations). */\nexport const translations: ConceptTranslation[] = ${list};\n`;
}

export type TranslationCounts = { concepts: number; solutions: number; remediations: number };

/** Per language, what seeding this chapter sends: approved concepts, their solutions and remediations. */
export function expectedTranslationCounts(chapter: Chapter): Record<Lang, TranslationCounts> {
  const counts = Object.fromEntries(LANGS.map((l) => [l, { concepts: 0, solutions: 0, remediations: 0 }])) as Record<Lang, TranslationCounts>;
  for (const concept of toSeedPayload(chapter, false).concepts) {
    for (const t of concept.translations) {
      counts[t.lang].concepts += 1;
      counts[t.lang].solutions += Object.keys(t.solutions).length;
      counts[t.lang].remediations += Object.keys(t.remediation).length;
    }
  }
  return counts;
}

/** Every count that differs between the catalog and the live rows, as a readable line. */
export function translationCountGaps(expected: Record<Lang, TranslationCounts>, live: Partial<Record<Lang, TranslationCounts>>): string[] {
  const gaps: string[] = [];
  for (const lang of LANGS) {
    for (const key of ["concepts", "solutions", "remediations"] as const) {
      const want = expected[lang][key];
      const have = live[lang]?.[key] ?? 0;
      if (have !== want) gaps.push(`${lang} ${key}: ${have} live, ${want} in the catalog`);
    }
  }
  return gaps;
}
