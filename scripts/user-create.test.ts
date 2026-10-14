import { describe, expect, it } from "vitest";
import { parseUserArgs } from "./user-create-args.ts";

describe("parseUserArgs (npm run user:create)", () => {
  it("reads a superadmin: email, name, role, no academy", () => {
    expect(parseUserArgs(["--email", " Owner@Example.com ", "--name", "LWS Pune", "--role", "superadmin"])).toEqual({
      ok: true,
      email: "owner@example.com",
      name: "LWS Pune",
      role: "superadmin",
      academy: null,
    });
  });

  it("reads staff with their academy slug", () => {
    expect(parseUserArgs(["--email", "t@example.com", "--name", "T", "--role", "teacher", "--academy", "lws-pune"])).toMatchObject({
      ok: true,
      role: "teacher",
      academy: "lws-pune",
    });
  });

  it("refuses staff without an academy and a superadmin with one", () => {
    expect(parseUserArgs(["--email", "t@example.com", "--name", "T", "--role", "teacher"]).ok).toBe(false);
    expect(parseUserArgs(["--email", "s@example.com", "--name", "S", "--role", "superadmin", "--academy", "x"]).ok).toBe(false);
  });

  it("refuses a bad email, an unknown role, a missing name or a malformed academy slug", () => {
    expect(parseUserArgs(["--email", "nope", "--name", "N", "--role", "student"]).ok).toBe(false);
    expect(parseUserArgs(["--email", "a@b.co", "--name", "N", "--role", "owner"]).ok).toBe(false);
    expect(parseUserArgs(["--email", "a@b.co", "--role", "student"]).ok).toBe(false);
    expect(parseUserArgs(["--email", "a@b.co", "--name", "N", "--role", "teacher", "--academy", "Bad Slug"]).ok).toBe(false);
  });

  it("never takes the password as an argument (it would land in shell history)", () => {
    expect(parseUserArgs(["--email", "a@b.co", "--name", "N", "--role", "student", "--password", "x"])).toEqual({
      ok: false,
      error: "Unknown option --password. The password is read from USER_PASSWORD or typed when asked.",
    });
  });
});
