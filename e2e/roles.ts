/**
 * Roles, end to end in a real browser (PLAN.md Phase 2, R1):
 * signed out → /teach and /admin ask to sign in · a guest is still signed out
 * for them · a teacher signs in (a ?next=/admin is refused, so they land on
 * /teach), sees Teach + Learn but no Admin, is sent back from /admin, signs
 * out · a login with no profile is refused.
 *
 * Usage: npm run e2e:roles -- [baseUrl]   (default http://localhost:3000; needs the app running)
 * Env:   BROWSER, SCHEME (light | dark), VIEWPORT (phone | tablet | desktop), SHOTS: as in golden-path.ts
 * Reads .env.local; creates a test academy and logins with the service role and deletes them at the end.
 */
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";
import { chromium } from "playwright-core";

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

async function sql(query: string): Promise<Record<string, unknown>[]> {
  const r = await fetch(`https://api.supabase.com/v1/projects/${process.env.SUPABASE_PROJECT_REF}/database/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.SUPABASE_ACCESS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const t = await r.text();
  if (!r.ok) throw new Error(t);
  return JSON.parse(t);
}

const problems: string[] = [];
const ok = (m: string) => console.log("ok  ", m);
const fail = (m: string) => {
  problems.push(m);
  console.log("FAIL", m);
};
const check = (cond: boolean, m: string) => (cond ? ok(m) : fail(m));

const run = randomUUID().slice(0, 8);
const ACADEMY_SLUG = `e2e-academy-${run}`;
const TEACHER = { email: `e2e-teacher-${run}@test.invalid`, password: `pw-${randomUUID()}` };
const NO_PROFILE = { email: `e2e-noprofile-${run}@test.invalid`, password: `pw-${randomUUID()}` };
const created: string[] = [];
let academyId: string | null = null;

async function makeLogin(email: string, password: string): Promise<string> {
  const { data, error } = await db.auth.admin.createUser({ email, password, email_confirm: true });
  if (error || !data.user) throw new Error(`createUser ${email}: ${error?.message}`);
  created.push(data.user.id);
  return data.user.id;
}

await (async () => {
  const browser = await chromium.launch({ executablePath: BROWSER });
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2, colorScheme: SCHEME });
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
          .map((a) => a.finished),
      ),
    );
    await page.screenshot({ path: join(SHOTS, `${name}.png`), fullPage: true });
  };
  const path = () => {
    const u = new URL(page.url());
    return u.pathname + u.search;
  };
  const noSideScroll = async (where: string) => {
    const { s, w } = await page.evaluate(() => ({ s: document.documentElement.scrollWidth, w: window.innerWidth }));
    check(s <= w, `${where}: no horizontal scroll (${s} <= ${w})`);
  };
  const header = page.getByRole("navigation", { name: "Account" });
  const signInAs = async (email: string, password: string) => {
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Sign in" }).click();
  };

  try {
    // Fixtures: an academy, a teacher in it, and a login nobody set up.
    const { data: academy, error: ae } = await db.from("academies").insert({ name: "E2E Academy", slug: ACADEMY_SLUG }).select("id").single();
    if (ae) throw ae;
    academyId = academy.id;
    const teacherId = await makeLogin(TEACHER.email, TEACHER.password);
    const { error: pe } = await db
      .from("profiles")
      .insert({ id: teacherId, role: "teacher", academy_id: academyId, full_name: "E2E Teacher", email: TEACHER.email });
    if (pe) throw pe;
    await makeLogin(NO_PROFILE.email, NO_PROFILE.password);

    // Signed out: the staff areas ask you to sign in and remember where you were going.
    for (const area of ["/teach", "/admin"]) {
      await page.goto(BASE + area);
      await page.getByRole("heading", { name: "Sign in" }).waitFor();
      check(path() === `/login?next=${encodeURIComponent(area)}`, `signed out: ${area} asks to sign in (${path()})`);
    }
    check(await header.getByRole("link", { name: "Sign in" }).isVisible(), "signed out: the header offers Sign in");
    await shot("r01-login");
    await noSideScroll("login");

    // A login nobody set up is refused, without saying more.
    await signInAs(NO_PROFILE.email, NO_PROFILE.password);
    await page.locator("form [role=alert]").getByText("This login isn't set up yet. Ask your academy.").waitFor();
    ok("a login without a profile is refused");
    check((await page.getByLabel("Email").inputValue()) === NO_PROFILE.email, "the email stays filled in after a failed sign-in");

    // A wrong password gets the same words as an unknown email.
    await page.getByLabel("Password").fill("not-the-password");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.locator("form [role=alert]").getByText("Email or password is wrong.").waitFor();
    ok("a wrong password: 'Email or password is wrong.'");

    // A teacher asked to go to /admin lands on /teach instead (safeNext refuses an area above the role).
    await page.goto(BASE + "/login?next=%2Fadmin");
    await signInAs(TEACHER.email, TEACHER.password);
    await page.waitForURL("**/teach");
    await page.getByRole("heading", { name: "Welcome, E2E Teacher" }).waitFor();
    ok("a teacher signs in and lands on /teach, not the /admin they were sent to");
    const areas = await header.getByRole("list").getByRole("link").allInnerTexts();
    check(JSON.stringify(areas) === JSON.stringify(["Teach", "Learn"]), `the teacher's switcher shows Teach and Learn (got ${areas.join(", ")})`);
    check((await header.getByRole("link", { name: "Teach" }).getAttribute("aria-current")) === "page", "Teach is marked as the current area");
    await shot("r02-teach");
    await noSideScroll("teach");

    await page.goto(BASE + "/admin");
    await page.waitForURL("**/teach");
    ok("a teacher opening /admin is sent back to /teach");

    await header.getByRole("link", { name: "Learn" }).click();
    await page.waitForURL("**/learn");
    await page.getByRole("heading", { name: "Choose your course" }).waitFor();
    ok("the switcher takes a teacher to the student area");
    await shot("r03-learn-as-teacher");

    await header.getByRole("button", { name: "Sign out" }).click();
    await page.waitForURL(BASE + "/");
    await header.getByRole("link", { name: "Sign in" }).waitFor();
    ok("sign out returns home, signed out");

    // A guest is a signed-in anonymous user, but still has no staff area.
    await page.goto(BASE + "/learn/complex-numbers/imaginary-unit");
    await page.getByRole("button", { name: "Start as guest" }).click();
    await page.getByRole("heading", { name: "Think about this" }).waitFor();
    const [guest] = await sql(
      `select id from auth.users where is_anonymous and created_at > now() - interval '2 minutes' order by created_at desc limit 1`,
    );
    if (guest) created.push(String(guest.id));
    await page.goto(BASE + "/teach");
    await page.getByRole("heading", { name: "Sign in" }).waitFor();
    check(path() === "/login?next=%2Fteach", "a guest opening /teach is asked to sign in");
    check(await header.getByText("Learning as a guest").isVisible().catch(() => false) || VIEWPORT.width < 640, "the header says you're learning as a guest (from sm up)");

    check(consoleErrors.length === 0, `no console errors${consoleErrors.length ? `: ${consoleErrors[0]}` : ""}`);
  } catch (e) {
    fail(`aborted: ${e instanceof Error ? e.message : String(e)}`);
    await shot("zz-roles-failure").catch(() => {});
  } finally {
    for (const id of created) {
      const { error } = await db.auth.admin.deleteUser(id);
      if (error) fail(`cleanup: delete user ${id}: ${error.message}`);
    }
    if (academyId) {
      const { error } = await db.from("academies").delete().eq("id", academyId);
      if (error) fail(`cleanup: delete academy: ${error.message}`);
    }
    if (!problems.some((p) => p.startsWith("cleanup"))) ok(`cleaned up ${created.length} test login(s) and the test academy`);
    await browser.close();
  }
})();

console.log(problems.length ? `\n${problems.length} PROBLEM(S)` : "\nROLES PASSED");
process.exit(problems.length ? 1 : 0);
