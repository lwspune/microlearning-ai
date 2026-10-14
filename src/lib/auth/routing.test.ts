import { describe, expect, it } from "vitest";
import { type Area, areaOfPath, areasFor, homeFor, parseCredentials, pathAllowedFor, type Role, safeNext } from "./routing";

/** Sign-in routing (PLAN.md Phase 2): where each role lands, and what a `?next=` may point at. Ported from CrackSSB. */

describe("homeFor", () => {
  it("sends students to the learning app, staff to /teach, the superadmin to /admin", () => {
    expect(homeFor("student")).toBe("/learn");
    expect(homeFor("teacher")).toBe("/teach");
    expect(homeFor("academy_admin")).toBe("/teach");
    expect(homeFor("superadmin")).toBe("/admin");
  });
});

describe("areaOfPath", () => {
  it("maps /teach and /admin to their areas and everything else to the student area", () => {
    const table: [string, Area][] = [
      ["/", "student"],
      ["/learn/complex-numbers", "student"],
      ["/courses/jee-main", "student"],
      ["/teach", "teach"],
      ["/teach/classes", "teach"],
      ["/admin", "admin"],
      ["/admin/academies", "admin"],
      ["/teacher", "student"],
      ["/administration", "student"],
    ];
    for (const [path, area] of table) expect(areaOfPath(path), path).toBe(area);
  });
});

describe("layered access: each role reaches its own area and every area below it", () => {
  const table: [Role, string, boolean][] = [
    ["student", "/learn", true],
    ["student", "/teach", false],
    ["student", "/admin", false],
    ["teacher", "/learn/complex-numbers/division", true],
    ["teacher", "/teach/classes", true],
    ["teacher", "/admin", false],
    ["academy_admin", "/teach/manage", true],
    ["academy_admin", "/admin/academies", false],
    ["superadmin", "/", true],
    ["superadmin", "/teach", true],
    ["superadmin", "/admin/academies", true],
  ];
  for (const [role, path, allowed] of table) {
    it(`${role} ${allowed ? "may" : "may not"} open ${path}`, () => {
      expect(pathAllowedFor(path, role)).toBe(allowed);
    });
  }

  it("lists the areas a role may switch between, its own first", () => {
    expect(areasFor("student")).toEqual(["student"]);
    expect(areasFor("teacher")).toEqual(["teach", "student"]);
    expect(areasFor("academy_admin")).toEqual(["teach", "student"]);
    expect(areasFor("superadmin")).toEqual(["admin", "teach", "student"]);
  });
});

describe("safeNext: never an open redirect", () => {
  it("keeps a path the role may open", () => {
    expect(safeNext("/learn/complex-numbers?course=jee-main", "student")).toBe("/learn/complex-numbers?course=jee-main");
    expect(safeNext("/teach/classes", "teacher")).toBe("/teach/classes");
    expect(safeNext("/learn", "teacher")).toBe("/learn");
    expect(safeNext("/teach", "superadmin")).toBe("/teach");
  });

  const hostile = ["https://evil.example", "//evil.example", "/\\evil.example", "\\\\evil.example", "javascript:alert(1)", " /learn", "/%2F%2Fevil.example", "/%5cevil.example", ""];
  for (const next of hostile) {
    it(`refuses ${JSON.stringify(next)}`, () => {
      expect(safeNext(next, "student")).toBeNull();
    });
  }

  it("refuses null", () => {
    expect(safeNext(null, "student")).toBeNull();
  });

  it("refuses an area above the role", () => {
    expect(safeNext("/teach", "student")).toBeNull();
    expect(safeNext("/admin", "teacher")).toBeNull();
    expect(safeNext("/admin", "academy_admin")).toBeNull();
  });

  it("refuses the sign-in page itself, so a sign-in cannot loop", () => {
    expect(safeNext("/login", "student")).toBeNull();
    expect(safeNext("/login?next=/teach", "teacher")).toBeNull();
  });
});

describe("parseCredentials: checked before the auth server is asked", () => {
  const form = (entries: Record<string, string>) => {
    const f = new FormData();
    for (const [k, v] of Object.entries(entries)) f.set(k, v);
    return f;
  };

  it("accepts an email and password, trimming and lower-casing the email", () => {
    expect(parseCredentials(form({ email: " Teacher@Example.COM ", password: "secret-pass" }))).toEqual({
      ok: true,
      email: "teacher@example.com",
      password: "secret-pass",
    });
  });

  it("accepts a username, signing in with its login email", () => {
    expect(parseCredentials(form({ email: " Aarav.K ", password: "secret-pass" }))).toEqual({
      ok: true,
      email: "aarav.k@students.microlearning.invalid",
      password: "secret-pass",
    });
  });

  it("refuses a missing or malformed email or username", () => {
    expect(parseCredentials(form({ password: "x" }))).toEqual({ ok: false, error: "Enter your email or username." });
    expect(parseCredentials(form({ email: "a@b", password: "x" })).ok).toBe(false);
    expect(parseCredentials(form({ email: "two words", password: "x" })).ok).toBe(false);
  });

  it("refuses an empty or absurdly long password, and never trims it", () => {
    expect(parseCredentials(form({ email: "a@b.co", password: "" })).ok).toBe(false);
    expect(parseCredentials(form({ email: "a@b.co", password: "x".repeat(201) })).ok).toBe(false);
    expect(parseCredentials(form({ email: "a@b.co", password: "  spaced  " }))).toMatchObject({ password: "  spaced  " });
  });
});
