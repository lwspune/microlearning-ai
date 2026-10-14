/**
 * Adding people (PLAN.md Phase 2, R2): the pasted list, logins for usernames,
 * and generated passwords. Pure, so the server action and the tests share it.
 */

/** A username's login is `<username>@USERNAME_DOMAIN` (the database keeps them in step). */
export const USERNAME_DOMAIN = "students.microlearning.invalid";
export const MAX_PEOPLE = 100;

export type Login = { kind: "email"; email: string } | { kind: "username"; username: string };
export type PersonLine = { line: number; fullName: string; login: Login };
export type LineError = { line: number; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const USERNAME = /^[a-z0-9]+([._-][a-z0-9]+)*$/;

export function loginEmail(login: Login): string {
  return login.kind === "email" ? login.email : `${login.username}@${USERNAME_DOMAIN}`;
}

/** What a person types to sign in: their email, or their username. */
export function loginLabel(login: Login): string {
  return login.kind === "email" ? login.email : login.username;
}

/** An email (has "@") or a username, checked; or the reason it isn't one. */
export function parseLogin(raw: string): Login | { error: string } {
  const value = raw.trim().toLowerCase();
  if (value.includes("@")) {
    return EMAIL.test(value) && value.length <= 254 ? { kind: "email", email: value } : { error: `“${raw.trim()}” isn't an email address.` };
  }
  return USERNAME.test(value) && value.length >= 3 && value.length <= 40
    ? { kind: "username", username: value }
    : { error: "Usernames are 3–40 lowercase letters or digits, with . _ - between them." };
}

/**
 * One person per line: "Name, email-or-username", or the two columns pasted
 * from a spreadsheet (tab-separated). Blank lines are skipped; every problem is
 * reported with its line number, and nothing is created unless all lines pass.
 */
export function parsePeopleLines(text: string): { people: PersonLine[]; errors: LineError[] } {
  const lines = text.split(/\r?\n/).map((raw, i) => ({ raw, line: i + 1 })).filter((l) => l.raw.trim() !== "");
  if (lines.length === 0) return { people: [], errors: [{ line: 0, message: "Add at least one person." }] };
  if (lines.length > MAX_PEOPLE) return { people: [], errors: [{ line: 0, message: `At most ${MAX_PEOPLE} people at a time.` }] };

  const people: PersonLine[] = [];
  const errors: LineError[] = [];
  const seen = new Map<string, number>();
  for (const { raw, line } of lines) {
    const cut = raw.includes("\t") ? raw.lastIndexOf("\t") : raw.lastIndexOf(",");
    if (cut < 0) {
      errors.push({ line, message: "Put a comma between the name and the email or username." });
      continue;
    }
    const fullName = raw.slice(0, cut).trim().replace(/\s+/g, " ");
    if (fullName.length === 0) {
      errors.push({ line, message: "The name is missing." });
      continue;
    }
    if (fullName.length > 120) {
      errors.push({ line, message: "The name is longer than 120 characters." });
      continue;
    }
    const login = parseLogin(raw.slice(cut + 1));
    if ("error" in login) {
      errors.push({ line, message: login.error });
      continue;
    }
    const key = loginLabel(login);
    const first = seen.get(key);
    if (first !== undefined) {
      errors.push({ line, message: `${key} is already on line ${first}.` });
      continue;
    }
    seen.set(key, line);
    people.push({ line, fullName, login });
  }
  return { people: errors.length ? [] : people, errors };
}

/** No 0/o, 1/l/i: easy to read off a printed slip. */
const ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789";

/** A new login's password: 3 groups of 4 (about 59 bits), from the platform's secure random source. */
export function generatePassword(): string {
  const chars: string[] = [];
  const bytes = new Uint8Array(1);
  while (chars.length < 12) {
    crypto.getRandomValues(bytes);
    // Rejection sampling keeps every character equally likely.
    if (bytes[0] < 256 - (256 % ALPHABET.length)) chars.push(ALPHABET[bytes[0] % ALPHABET.length]);
  }
  return [chars.slice(0, 4), chars.slice(4, 8), chars.slice(8)].map((g) => g.join("")).join("-");
}

/** A short name from a name: lowercase words joined by hyphens, at most 80 characters (academies.slug). */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/, "");
}
