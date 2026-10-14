import { describe, expect, it } from "vitest";
import { generatePassword, loginEmail, MAX_PEOPLE, parsePeopleLines, USERNAME_DOMAIN } from "./people";

describe("loginEmail", () => {
  it("keeps an email (lower-cased) and turns a username into its login email", () => {
    expect(loginEmail({ kind: "email", email: "a@b.co" })).toBe("a@b.co");
    expect(loginEmail({ kind: "username", username: "aarav.k" })).toBe(`aarav.k@${USERNAME_DOMAIN}`);
    expect(USERNAME_DOMAIN).toBe("students.microlearning.invalid");
  });
});

describe("parsePeopleLines: one person per line, name then email or username", () => {
  it("reads commas or tabs (pasted from a spreadsheet), skips blank lines, lower-cases logins", () => {
    const { people, errors } = parsePeopleLines("Aarav Kulkarni, aarav.k\n\nPriya Shah\tPriya@Example.com\n  Rohan Joshi ,  rohan-j  ");
    expect(errors).toEqual([]);
    expect(people).toEqual([
      { line: 1, fullName: "Aarav Kulkarni", login: { kind: "username", username: "aarav.k" } },
      { line: 3, fullName: "Priya Shah", login: { kind: "email", email: "priya@example.com" } },
      { line: 4, fullName: "Rohan Joshi", login: { kind: "username", username: "rohan-j" } },
    ]);
  });

  it("explains each bad line by its line number", () => {
    const { people, errors } = parsePeopleLines("Only a name\n, nameless\nBad Email, a@b\nBad User, Aarav K\nToo, ab");
    expect(people).toEqual([]);
    expect(errors).toEqual([
      { line: 1, message: "Put a comma between the name and the email or username." },
      { line: 2, message: "The name is missing." },
      { line: 3, message: "“a@b” isn't an email address." },
      { line: 4, message: "Usernames are 3–40 lowercase letters or digits, with . _ - between them." },
      { line: 5, message: "Usernames are 3–40 lowercase letters or digits, with . _ - between them." },
    ]);
  });

  it("refuses the same login twice in one list", () => {
    const { errors } = parsePeopleLines("A, aarav.k\nB, Aarav.K");
    expect(errors).toEqual([{ line: 2, message: "aarav.k is already on line 1." }]);
  });

  it("refuses an empty list and an over-long one", () => {
    expect(parsePeopleLines("  \n ").errors).toEqual([{ line: 0, message: "Add at least one person." }]);
    const many = Array.from({ length: MAX_PEOPLE + 1 }, (_, i) => `P${i}, user${i}`).join("\n");
    expect(parsePeopleLines(many).errors).toEqual([{ line: 0, message: `At most ${MAX_PEOPLE} people at a time.` }]);
  });
});

describe("generatePassword", () => {
  it("makes 3 groups of 4 from an alphabet with no look-alike characters", () => {
    for (let i = 0; i < 200; i++) {
      const p = generatePassword();
      expect(p).toMatch(/^[a-km-np-z2-9]{4}-[a-km-np-z2-9]{4}-[a-km-np-z2-9]{4}$/);
    }
  });

  it("doesn't repeat", () => {
    const seen = new Set(Array.from({ length: 500 }, generatePassword));
    expect(seen.size).toBe(500);
  });
});
