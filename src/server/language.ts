import "server-only";
import { cookies } from "next/headers";
import { type LessonLanguage, parseLanguage } from "@/content/languages";

/** The lesson language (English, Hindi, Marathi), picked on a lesson; one choice for every lesson. */
export const LANGUAGE_COOKIE = "ml_lang";

export async function rememberedLanguage(): Promise<LessonLanguage> {
  return parseLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);
}
