"use server";

import { cookies } from "next/headers";
import { parseGroup } from "@/content/courses";
import { GROUP_COOKIE } from "@/server/courses";

/** Remembers the student's group on this browser. Unknown values are ignored. */
export async function rememberGroup(value: string): Promise<void> {
  const group = parseGroup(value);
  if (!group) return;
  (await cookies()).set(GROUP_COOKIE, group, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
