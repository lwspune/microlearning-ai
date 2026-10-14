/**
 * Academies and people, end to end in a real browser (PLAN.md Phase 2, R2):
 * a superadmin creates an academy and its admin → the admin signs in with the
 * password shown once, adds a teacher and students by username (a bad line is
 * explained; an existing login is left alone) → the teacher signs in with a
 * username and may add only students → a student signs in and lands on Learn.
 *
 * Usage: npm run e2e:people -- [baseUrl]   (default http://localhost:3000; needs the app running)
 * Env:   BROWSER, SCHEME (light | dark), VIEWPORT (phone | tablet | desktop), SHOTS: as in golden-path.ts
 * Reads .env.local. Creates a test superadmin with the service role; deletes every login and the academy it made.
 */
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";
import { chromium, type Page } from "playwright-core";

try {
  process.loadEnvFile(".env.local");
} catch {
  // CI provides the variables directly.
}

const BASE = process.argv[2] ?? "http://localhost:3000";
const BROWSER = process.env.BROWSER ?? "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const SCHEME = process.env.SCHEME === "dark" ? "dark" : "light";
const VIEWPORTS = {
  phone: { width: 390, height: 844 },
  tablet: { width: 1180, height: 820 },
  desktop: { width: 1280, height: 900 },
} as const;
const VIEWPORT = VIEWPORTS[(process.env.VIEWPORT ?? "phone") as keyof typeof VIEWPORTS] ?? VIEWPORTS.phone;
const SHOTS = process.env.SHOTS;
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const problems: string[] = [];
const ok = (m: string) => console.log("ok  ", m);
const fail = (m: string) => {
  problems.push(m);
  console.log("FAIL", m);
};
const check = (cond: boolean, m: string) => (cond ? ok(m) : fail(m));

const run = randomUUID().slice(0, 8);
const SUPER = { email: `e2e-super-${run}@test.invalid`, password: `pw-${randomUUID()}` };
const ACADEMY = { name: `E2E Academy ${run}`, slug: `e2e-academy-${run}` };
const ADMIN_EMAIL = `e2e-admin-${run}@test.invalid`;
const TEACHER_USER = `e2e-t-${run}`;
const STUDENT_USERS = [`e2e-s1-${run}`, `e2e-s2-${run}`];
let superId: string | null = null;

/** Reads the one-time password for `login` from the results table. */
async function passwordFor(page: Page, login: string): Promise<string> {
  const row = page.getByRole("status").getByRole("row").filter({ hasText: login });
  return (await row.locator("td").nth(2).innerText()).trim();
}

await (async () => {
  const browser = await chromium.launch({ executablePath: BROWSER });
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2, colorScheme: SCHEME });
  await ctx.grantPermissions(["clipboard-read", "clipboard-write"]);
  const page = await ctx.newPage();
  const consoleErrors: string[] = [];
  page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
  page.on("pageerror", (e) => consoleErrors.push(String(e)));
  const shot = async (name: string) => {
    if (!SHOTS) return;
    await page.evaluate(() =>
      Promise.all(
        document
          .getAnimations()
          .filter((a) => a.timeline instanceof DocumentTimeline && a.effect?.getComputedTiming().iterations !== Infinity)
          // A cancelled animation rejects `finished`; it's done either way.
          .map((a) => a.finished.catch(() => undefined)),
      ),
    );
    await page.screenshot({ path: join(SHOTS, `${name}.png`), fullPage: true });
  };
  const noSideScroll = async (where: string) => {
    const { s, w } = await page.evaluate(() => ({ s: document.documentElement.scrollWidth, w: window.innerWidth }));
    check(s <= w, `${where}: no horizontal scroll (${s} <= ${w})`);
  };
  const header = page.getByRole("navigation", { name: "Account" });
  const signIn = async (login: string, password: string) => {
    await page.goto(BASE + "/login");
    await page.getByLabel("Email or username").fill(login);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Sign in" }).click();
  };
  const signOut = async () => {
    await header.getByRole("button", { name: "Sign out" }).click();
    await header.getByRole("link", { name: "Sign in" }).waitFor();
  };
  const addPeople = async (lines: string, role?: string) => {
    if (role) await page.getByRole("radio", { name: role }).check();
    await page.getByLabel("One person per line: name, then email or username").fill(lines);
    await page.getByRole("button", { name: "Add people" }).click();
  };

  try {
    // A throwaway superadmin, made the way `npm run user:create` makes one.
    const { data: su, error: se } = await db.auth.admin.createUser({ email: SUPER.email, password: SUPER.password, email_confirm: true });
    if (se || !su.user) throw new Error(`createUser: ${se?.message}`);
    superId = su.user.id;
    const { error: pe } = await db.from("profiles").insert({ id: superId, role: "superadmin", full_name: "E2E Super", email: SUPER.email });
    if (pe) throw pe;

    // 1. The superadmin creates an academy and its admin.
    await signIn(SUPER.email, SUPER.password);
    await page.waitForURL("**/admin");
    await page.getByLabel("Academy name").fill(ACADEMY.name);
    check((await page.getByLabel("Short name").inputValue()) === ACADEMY.slug, "the short name is suggested from the name");
    await page.getByRole("button", { name: "Create academy" }).click();
    await page.getByRole("status").getByText(`Created ${ACADEMY.name}.`).waitFor();
    ok("the superadmin creates an academy");
    await shot("p01-admin");
    await noSideScroll("admin");

    await page.getByRole("button", { name: "Create academy" }).click();
    await page.getByRole("alert").filter({ hasText: "is taken" }).waitFor();
    ok("the same short name is refused the second time");

    // The list refreshed with the new academy.
    await page.getByRole("link", { name: new RegExp(ACADEMY.name) }).click();
    await page.waitForURL(`**/admin/academies/${ACADEMY.slug}`);
    await addPeople(`E2E Admin, ${ADMIN_EMAIL}`, "Academy admins");
    await page.getByRole("status").getByText("1 login created").waitFor();
    const adminPassword = await passwordFor(page, ADMIN_EMAIL);
    check(/^[a-z2-9]{4}-[a-z2-9]{4}-[a-z2-9]{4}$/.test(adminPassword), "a readable one-time password is shown");
    await shot("p02-academy-admin-created");
    await noSideScroll("academy page");
    await signOut();

    // 2. The admin signs in with it, and adds a teacher and students by username.
    await signIn(ADMIN_EMAIL, adminPassword);
    await page.waitForURL("**/teach");
    ok("the new academy admin signs in with the one-time password");
    await page.getByRole("link", { name: /People/ }).click();
    await page.waitForURL("**/teach/people");

    await addPeople(`E2E Teacher, ${TEACHER_USER}\nNo comma here`, "Teachers");
    await page.getByRole("alert").filter({ hasText: "Line 2: Put a comma between the name and the email or username." }).waitFor();
    ok("a bad line is explained by its number, and nothing is created");

    await addPeople(`E2E Teacher, ${TEACHER_USER}`, "Teachers");
    await page.getByRole("status").getByText("1 login created").waitFor();
    const teacherPassword = await passwordFor(page, TEACHER_USER);

    await addPeople(STUDENT_USERS.map((u, i) => `E2E Student ${i + 1}, ${u}`).join("\n"), "Students");
    await page.getByRole("status").getByText("2 logins created").waitFor();
    const studentPassword = await passwordFor(page, STUDENT_USERS[0]);
    await page.getByRole("button", { name: "Copy all" }).click();
    const clip = await page.evaluate(() => navigator.clipboard.readText());
    check(clip.startsWith("Name\tSigns in with\tPassword") && clip.includes(STUDENT_USERS[1]), "Copy all copies the logins as a table");
    await shot("p03-students-created");
    await noSideScroll("people");

    await addPeople(`Someone Else, ${STUDENT_USERS[0]}`, "Students");
    await page.getByRole("status").getByText(`Already have an account, not changed: ${STUDENT_USERS[0]}`).waitFor();
    ok("adding an existing login changes nothing and says so");
    const everyone = page.getByRole("region", { name: /Everyone in your academy/ }).or(page.locator("section[aria-labelledby=everyone]"));
    check((await everyone.getByRole("row").count()) === 1 + 4, "the list shows the admin, the teacher and both students");
    await signOut();

    // 3. The teacher signs in with a username and may add only students.
    await signIn(TEACHER_USER, teacherPassword);
    await page.waitForURL("**/teach");
    ok("a teacher signs in with a username");
    await page.goto(BASE + "/teach/people");
    await page.getByRole("button", { name: "Add people" }).waitFor();
    check((await page.getByRole("radio", { name: "Teachers" }).count()) === 0, "a teacher isn't offered to add teachers");
    check(await page.getByRole("radio", { name: "11th + 12th" }).isChecked(), "a teacher adds students, 11th + 12th by default");
    await signOut();

    // 4. A student signs in and lands on Learn, with no staff switcher.
    await signIn(STUDENT_USERS[0], studentPassword);
    await page.waitForURL("**/learn");
    check((await header.getByRole("link", { name: "Teach" }).count()) === 0, "a student signs in to Learn, with no Teach area");
    await page.goto(BASE + "/teach");
    await page.waitForURL("**/learn");
    ok("a student opening /teach is sent back to Learn");
    await signOut();

    check(consoleErrors.length === 0, `no console errors${consoleErrors.length ? `: ${consoleErrors[0]}` : ""}`);
  } catch (e) {
    fail(`aborted: ${e instanceof Error ? e.message : String(e)}`);
    await shot("zz-people-failure").catch(() => {});
  } finally {
    // Everyone the run made: the academy's people, then the academy, then the test superadmin.
    const { data: academy } = await db.from("academies").select("id").eq("slug", ACADEMY.slug).maybeSingle();
    const ids: string[] = [];
    if (academy) {
      const { data: people } = await db.from("profiles").select("id").eq("academy_id", academy.id);
      ids.push(...(people ?? []).map((p) => p.id));
    }
    if (superId) ids.push(superId);
    for (const id of ids) {
      const { error } = await db.auth.admin.deleteUser(id);
      if (error) fail(`cleanup: delete user ${id}: ${error.message}`);
    }
    if (academy) {
      const { error } = await db.from("academies").delete().eq("id", academy.id);
      if (error) fail(`cleanup: delete academy: ${error.message}`);
    }
    if (!problems.some((p) => p.startsWith("cleanup"))) ok(`cleaned up ${ids.length} test login(s) and the test academy`);
    await browser.close();
  }
})();

console.log(problems.length ? `\n${problems.length} PROBLEM(S)` : "\nPEOPLE PASSED");
process.exit(problems.length ? 1 : 0);
