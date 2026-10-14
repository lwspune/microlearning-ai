/**
 * Creates a named login and its profile (PLAN.md Phase 2, R1). For the first
 * superadmin and for test accounts; staff get in-app creation in R2.
 *
 * Usage: npm run user:create -- --email a@b.co --name "Full Name" --role superadmin
 *        npm run user:create -- --email t@b.co --name "Teacher" --role teacher --academy lws-pune
 * The password comes from USER_PASSWORD or is typed when asked (hidden); it is
 * never an argument, so it stays out of shell history. An email that already
 * has an account is never touched.
 * Reads .env.local (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY).
 */
import { createInterface } from "node:readline";
import { createClient } from "@supabase/supabase-js";
import { parseUserArgs } from "./user-create-args.ts";

try {
  process.loadEnvFile(".env.local");
} catch {
  // CI provides the variables directly.
}

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

/** Asks for the password without echoing it. */
function askPassword(): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    process.stdout.write("Password (hidden): ");
    (rl as unknown as { _writeToOutput: (s: string) => void })._writeToOutput = () => {};
    rl.question("", (answer) => {
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
  });
}

const args = parseUserArgs(process.argv.slice(2));
if (!args.ok) fail(args.error);

const password = process.env.USER_PASSWORD ?? (await askPassword());
if (password.length < 8 || password.length > 200) fail("The password must be 8-200 characters.");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) fail("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set (.env.local).");
const db = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });

let academyId: string | null = null;
if (args.academy) {
  const { data, error } = await db.from("academies").select("id").eq("slug", args.academy).maybeSingle();
  if (error) fail(`Couldn't look up the academy: ${error.message}`);
  if (!data) fail(`No academy with slug ${args.academy}.`);
  academyId = data.id;
}

const { data: created, error: createError } = await db.auth.admin.createUser({ email: args.email, password, email_confirm: true });
if (createError || !created.user) {
  if (createError?.code === "email_exists") fail(`${args.email} already has an account: not changed.`);
  fail(`Couldn't create the login: ${createError?.message ?? "no user returned"}`);
}

const { error: profileError } = await db
  .from("profiles")
  .insert({ id: created.user.id, role: args.role, academy_id: academyId, full_name: args.name, email: args.email });
if (profileError) {
  // Undo the login so a half-made account can't sign in.
  await db.auth.admin.deleteUser(created.user.id);
  fail(`Couldn't create the profile (login removed again): ${profileError.message}`);
}

console.log(`Created ${args.role} ${args.email}${args.academy ? ` in ${args.academy}` : ""}.`);
