"use server";

import { cookies } from "next/headers";
import { parseGroup, parseStandard, parseSubject } from "@/content/courses";
import { LESSON_LANGUAGES } from "@/content/languages";
import { GROUP_COOKIE, STANDARD_COOKIE, SUBJECT_COOKIE } from "@/server/courses";
import { LANGUAGE_COOKIE } from "@/server/language";

const YEAR = 60 * 60 * 24 * 365;

async function remember(name: string, value: string): Promise<void> {
  (await cookies()).set(name, value, {
    path: "/",
    maxAge: YEAR,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}

/** Remembers the student's group on this browser. Unknown values are ignored. */
export async function rememberGroup(value: string): Promise<void> {
  const group = parseGroup(value);
  if (group) await remember(GROUP_COOKIE, group);
}

/** Remembers the student's standard on this browser. Unknown values are ignored. */
export async function rememberStandard(value: string): Promise<void> {
  const standard = parseStandard(value);
  if (standard) await remember(STANDARD_COOKIE, String(standard));
}

/** Remembers the student's subject on this browser. Unknown values are ignored. */
export async function rememberSubject(value: string): Promise<void> {
  const subject = parseSubject(value);
  if (subject) await remember(SUBJECT_COOKIE, subject);
}

/** Remembers the student's lesson language on this browser. Unknown values are ignored. */
export async function rememberLanguage(value: string): Promise<void> {
  const language = LESSON_LANGUAGES.find((l) => l.id === value);
  if (language) await remember(LANGUAGE_COOKIE, language.id);
}
