/**
 * Writes each chapter as JSON for the sympy verifier.
 * Usage: node scripts/export-content.ts <outDir>   (prints one path per chapter)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chapters } from "../src/content/chapters/index.ts";
import type { Chapter } from "../src/content/types.ts";

/** The parts of a chapter the verifier reads. */
export function exportChapter(chapter: Chapter) {
  const concepts = chapter.concepts.map((c) => ({
    id: c.id,
    items: c.items.map((item) => ({
      id: item.id,
      verify: { kind: item.verify.kind, inputs: item.verify.inputs, params: item.verify.params ?? {}, ask: item.verify.ask ?? null },
      options: item.options.map((o) => ({
        key: o.key,
        value: o.value,
        correct: o.correct,
        misconceptionId: o.misconceptionId ?? null,
      })),
    })),
  }));
  return { chapter: chapter.slug, concepts };
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  const outDir = process.argv[2] ?? ".content";
  mkdirSync(outDir, { recursive: true });
  for (const chapter of chapters) {
    const path = join(outDir, `${chapter.slug}.json`);
    writeFileSync(path, JSON.stringify(exportChapter(chapter), null, 2));
    console.log(path);
  }
}
