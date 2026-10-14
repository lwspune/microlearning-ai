/**
 * Sign-in routing (PLAN.md Phase 2), ported from CrackSSB's routing.ts. Pure,
 * so the proxy, the sign-in action and the tests share one definition of where
 * each role belongs and what a `?next=` may name.
 */

export type Role = "student" | "teacher" | "academy_admin" | "superadmin";
export type Area = "student" | "teach" | "admin";

/**
 * Layered access: each role reaches its own area and every area below it, own
 * area first. Reaching an area never widens whose rows a user can read; row
 * level security decides that.
 */
const AREAS: Readonly<Record<Role, readonly Area[]>> = {
  student: ["student"],
  teacher: ["teach", "student"],
  academy_admin: ["teach", "student"],
  superadmin: ["admin", "teach", "student"],
};

export const AREA_HOME: Readonly<Record<Area, string>> = { student: "/learn", teach: "/teach", admin: "/admin" };

export function areasFor(role: Role): readonly Area[] {
  return AREAS[role];
}

export function areaOfPath(pathname: string): Area {
  if (pathname === "/teach" || pathname.startsWith("/teach/")) return "teach";
  if (pathname === "/admin" || pathname.startsWith("/admin/")) return "admin";
  return "student";
}

/** Where a role lands at sign-in: its own area. */
export function homeFor(role: Role): string {
  return AREA_HOME[AREAS[role][0]];
}

/** May this role be at this path at all? (The student area is also open to guests and visitors.) */
export function pathAllowedFor(pathname: string, role: Role): boolean {
  return AREAS[role].includes(areaOfPath(pathname));
}

const BASE = "https://microlearning.invalid";

/**
 * A `?next=` target, or null. Only a same-site path the role may open: no
 * scheme, no `//host`, no backslashes (browsers read `/\host` as a host), no
 * encoded slashes, and never the sign-in page.
 */
export function safeNext(next: string | null, role: Role): string | null {
  if (!next || !next.startsWith("/") || next.startsWith("//") || next.includes("\\")) return null;
  if (/%2f|%5c/i.test(next)) return null;
  let url: URL;
  try {
    url = new URL(next, BASE);
  } catch {
    return null;
  }
  if (url.origin !== BASE) return null;
  if (url.pathname === "/login") return null;
  if (!pathAllowedFor(url.pathname, role)) return null;
  return url.pathname + url.search;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type Credentials = { ok: true; email: string; password: string } | { ok: false; error: string };

/** Fail fast: nothing malformed reaches the auth server. The password is passed through exactly as typed. */
export function parseCredentials(form: FormData): Credentials {
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!EMAIL.test(email) || email.length > 254) return { ok: false, error: "Enter the email your academy gave you." };
  if (password.length === 0 || password.length > 200) return { ok: false, error: "Enter your password." };
  return { ok: true, email, password };
}
