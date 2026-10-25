import type { Lang } from "./types.ts";

/** The language a lesson is read in: English, or a translation (PLAN.md "Hindi and Marathi lessons"). */
export type LessonLanguage = "en" | Lang;

/** The lesson switch, in the owner's order and words (2026-10-25). */
export const LESSON_LANGUAGES: { id: LessonLanguage; title: string; htmlLang: string }[] = [
  { id: "en", title: "English", htmlLang: "en" },
  { id: "hi", title: "Hindi", htmlLang: "hi" },
  { id: "mr", title: "Marathi", htmlLang: "mr" },
];

/** A remembered choice, or English when there is none or it is unknown. */
export function parseLanguage(value: string | undefined | null): LessonLanguage {
  return LESSON_LANGUAGES.find((l) => l.id === value)?.id ?? "en";
}
