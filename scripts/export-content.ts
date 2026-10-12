/**
 * Writes each chapter as JSON for the sympy verifier.
 * Usage: node scripts/export-content.ts <outDir>   (prints one path per chapter)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chapters } from "../src/content/chapters/index.ts";

const outDir = process.argv[2] ?? ".content";
mkdirSync(outDir, { recursive: true });

for (const chapter of chapters) {
  const path = join(outDir, `${chapter.slug}.json`);
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
  writeFileSync(path, JSON.stringify({ chapter: chapter.slug, concepts }, null, 2));
  console.log(path);
}
