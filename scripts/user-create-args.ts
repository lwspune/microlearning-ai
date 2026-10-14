/** Arguments for `npm run user:create` (scripts/user-create.ts), checked before anything touches the database. */

export type UserArgs = { ok: true; email: string; name: string; role: string; academy: string | null } | { ok: false; error: string };

const ROLES = ["student", "teacher", "academy_admin", "superadmin"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const OPTIONS = ["--email", "--name", "--role", "--academy"];

export function parseUserArgs(argv: string[]): UserArgs {
  const values: Record<string, string> = {};
  for (let i = 0; i < argv.length; i += 2) {
    const [key, value] = [argv[i], argv[i + 1]];
    if (!OPTIONS.includes(key)) {
      return { ok: false, error: `Unknown option ${key}. The password is read from USER_PASSWORD or typed when asked.` };
    }
    if (value === undefined) return { ok: false, error: `${key} needs a value.` };
    values[key] = value;
  }
  const email = (values["--email"] ?? "").trim().toLowerCase();
  const name = (values["--name"] ?? "").trim();
  const role = values["--role"] ?? "";
  const academy = values["--academy"] ?? null;
  if (!EMAIL.test(email) || email.length > 254) return { ok: false, error: "--email must be an email address." };
  if (name.length < 1 || name.length > 120) return { ok: false, error: "--name is required (1-120 characters)." };
  if (!ROLES.includes(role)) return { ok: false, error: `--role must be one of ${ROLES.join(", ")}.` };
  if (academy !== null && !SLUG.test(academy)) return { ok: false, error: "--academy must be an academy slug (lowercase-with-hyphens)." };
  if ((role === "teacher" || role === "academy_admin") && !academy) return { ok: false, error: "Staff need --academy." };
  if (role === "superadmin" && academy) return { ok: false, error: "A superadmin belongs to no academy." };
  return { ok: true, email, name, role, academy };
}
