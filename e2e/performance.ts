/**
 * Student performance, end to end in a real browser (PLAN.md "Student performance"):
 * a student with real progress (C01 mastered and due for review, 2 right
 * answers and 1 wrong one that reveals a misconception) and one with none →
 * their teacher sees the right numbers, finds a student by search, opens the
 * student and sees the mistake → a teacher from another academy can't open
 * that student → the superadmin reaches the student from the academy's page.
 *
 * Usage: npm run e2e:performance -- [baseUrl]   (default http://localhost:3000; needs the app running)
 * Env:   BROWSER, SCHEME (light | dark), VIEWPORT (phone | tablet | desktop), SHOTS: as in golden-path.ts
 * Reads .env.local. Makes its logins, academies and progress with the service role / Management API and deletes them.
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
const pw = () => `pw-${randomUUID()}`;
const people = {
  teacherA: { email: `e2e-perf-ta-${run}@test.invalid`, password: pw() },
  teacherB: { email: `e2e-perf-tb-${run}@test.invalid`, password: pw() },
  superadmin: { email: `e2e-perf-su-${run}@test.invalid`, password: pw() },
};
const academies: string[] = [];
const users: string[] = [];

async function makeAcademy(slug: string): Promise<string> {
  const { data, error } = await db.from("academies").insert({ name: `E2E Perf ${slug}`, slug }).select("id").single();
  if (error) throw error;
  academies.push(data.id);
  return data.id;
}

async function makePerson(email: string, password: string, role: string, academyId: string | null, fullName: string): Promise<string> {
  const { data, error } = await db.auth.admin.createUser({ email, password, email_confirm: true });
  if (error || !data.user) throw new Error(`createUser ${email}: ${error?.message}`);
  users.push(data.user.id);
  const { error: pe } = await db.from("profiles").insert({ id: data.user.id, role, academy_id: academyId, full_name: fullName, email });
  if (pe) throw pe;
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
  const signIn = async (who: { email: string; password: string }) => {
    await page.goto(BASE + "/login");
    await page.getByLabel("Email or username").fill(who.email);
    await page.getByLabel("Password").fill(who.password);
    await page.getByRole("button", { name: "Sign in" }).click();
  };
  const signOut = async () => {
    await header.getByRole("button", { name: "Sign out" }).click();
    await header.getByRole("link", { name: "Sign in" }).waitFor();
  };

  try {
    const academyA = await makeAcademy(`e2e-perf-a-${run}`);
    const academyB = await makeAcademy(`e2e-perf-b-${run}`);
    await makePerson(people.teacherA.email, people.teacherA.password, "teacher", academyA, "Perf Teacher A");
    await makePerson(people.teacherB.email, people.teacherB.password, "teacher", academyB, "Perf Teacher B");
    await makePerson(people.superadmin.email, people.superadmin.password, "superadmin", null, "Perf Super");
    const busy = await makePerson(`e2e-perf-s1-${run}@test.invalid`, pw(), "student", academyA, "Asha Busy");
    await makePerson(`e2e-perf-s2-${run}@test.invalid`, pw(), "student", academyA, "Ravi Fresh");

    // Asha's progress, as record_attempt would leave it: C01 mastered and due for review; 2 right, 1 wrong.
    const [c01] = await sql(`select c.id from concepts c join chapters ch on ch.id = c.chapter_id where ch.slug = 'complex-numbers' and c.code = 'C01'`);
    const [item] = await sql(`select id from items where concept_id = '${c01.id}' and code = 'C01-Q1'`);
    const [right] = await sql(`select key from item_options where item_id = '${item.id}' and is_correct`);
    const [wrong] = await sql(
      `select o.key, o.misconception_id, m.mistake from item_options o join misconceptions m on m.id = o.misconception_id
        where o.item_id = '${item.id}' and not o.is_correct order by o.key limit 1`,
    );
    await sql(`
      insert into learner_concept_state (user_id, concept_id, state, mastery, streak, next_review_at, review_box)
        values ('${busy}', '${c01.id}', 'mastered', 1, 3, now() - interval '1 hour', 1);
      insert into attempts (user_id, item_id, option_key, correct, misconception_id, created_at) values
        ('${busy}', '${item.id}', '${right.key}', true, null, now() - interval '2 hours'),
        ('${busy}', '${item.id}', '${wrong.key}', false, '${wrong.misconception_id}', now() - interval '90 minutes'),
        ('${busy}', '${item.id}', '${right.key}', true, null, now() - interval '1 hour');`);

    // 1. Their teacher sees both students, with the right numbers.
    await signIn(people.teacherA);
    await page.waitForURL("**/teach");
    await page.getByRole("link", { name: /Students/ }).first().click();
    await page.waitForURL("**/teach/students");
    const ashaRow = page.getByRole("row").filter({ hasText: "Asha Busy" });
    await ashaRow.waitFor();
    const ashaCells = (await ashaRow.locator("td").allInnerTexts()).map((t) => t.trim());
    check(ashaCells[1] === "1", `Asha: 1 concept mastered (got ${ashaCells[1]})`);
    check(ashaCells.includes("67%"), `Asha: accuracy 67% (got ${ashaCells.join(" | ")})`);
    const raviCells = (await page.getByRole("row").filter({ hasText: "Ravi Fresh" }).locator("td").allInnerTexts()).map((t) => t.trim());
    check(raviCells.includes("—"), "Ravi, who hasn't answered yet, shows — for accuracy, not 0%");
    await shot("s01-students");
    await noSideScroll("students");

    await page.getByLabel("Search students").fill("ravi");
    await page.getByText("1 of 2 students").waitFor();
    check((await page.getByRole("row").filter({ hasText: "Asha Busy" }).count()) === 0, "search narrows the list");
    await page.getByLabel("Search students").fill("");

    // 2. Asha's page: summary, the mistake she made, and C01's status.
    await page.getByRole("link", { name: "Asha Busy" }).click();
    await page.waitForURL(`**/teach/students/${busy}`);
    await page.getByRole("heading", { name: "Asha Busy" }).waitFor();
    const mistakes = page.locator("section[aria-labelledby=mistakes]");
    await mistakes.getByText("1×").waitFor();
    check(await mistakes.getByText("In The imaginary unit").isVisible(), "her recent mistake is listed, on The imaginary unit");
    check((await page.locator("section[aria-labelledby=concepts]").getByText("Review due").count()) === 1, "C01 shows as review due");
    await shot("s02-student");
    await noSideScroll("student");
    await signOut();

    // 3. Another academy's teacher can't open her.
    await signIn(people.teacherB);
    await page.waitForURL("**/teach");
    await page.goto(BASE + `/teach/students/${busy}`);
    await page.getByText("This page could not be found").waitFor();
    ok("another academy's teacher gets not-found for her page");
    await page.goto(BASE + "/teach/students");
    await page.getByText("No students yet").waitFor();
    ok("and sees none of academy A's students");
    await signOut();

    // 4. The superadmin reaches her from the academy's page.
    await signIn(people.superadmin);
    await page.waitForURL("**/admin");
    await page.goto(BASE + `/admin/academies/e2e-perf-a-${run}`);
    await page.getByRole("link", { name: "Asha Busy" }).click();
    await page.waitForURL(`**/teach/students/${busy}`);
    await page.getByRole("heading", { name: "Asha Busy" }).waitFor();
    ok("the superadmin opens her page from the academy's people");
    await signOut();

    check(consoleErrors.length === 0, `no console errors${consoleErrors.length ? `: ${consoleErrors[0]}` : ""}`);
  } catch (e) {
    fail(`aborted: ${e instanceof Error ? e.message : String(e)}`);
    await shot("zz-performance-failure").catch(() => {});
  } finally {
    // Deleting a login deletes its profile, state and attempts; then the academies.
    for (const id of users) {
      const { error } = await db.auth.admin.deleteUser(id);
      if (error) fail(`cleanup: delete user ${id}: ${error.message}`);
    }
    for (const id of academies) {
      const { error } = await db.from("academies").delete().eq("id", id);
      if (error) fail(`cleanup: delete academy: ${error.message}`);
    }
    if (!problems.some((p) => p.startsWith("cleanup"))) ok(`cleaned up ${users.length} test login(s) and ${academies.length} academies`);
    await browser.close();
  }
})();

console.log(problems.length ? `\n${problems.length} PROBLEM(S)` : "\nPERFORMANCE PASSED");
process.exit(problems.length ? 1 : 0);
