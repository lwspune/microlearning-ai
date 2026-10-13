/**
 * Golden path, end to end in a real browser:
 * guest → chapter map → concept cards → wrong answer (remediation) →
 * 3 different correct answers → mastered → map shows it.
 *
 * Usage: npm run e2e -- [baseUrl]   (default http://localhost:3000; needs the app running)
 * Env:   BROWSER  path to a Chromium-based browser (default: Microsoft Edge on Windows)
 *        SCHEME   light | dark (default light)   VIEWPORT  phone | desktop (default phone)
 *        SHOTS    directory for screenshots (optional)
 * Reads .env.local for the Supabase Management API (looks up keys, cleans up the guest).
 */
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";

try {
  process.loadEnvFile(".env.local");
} catch {
  // CI provides the variables directly.
}

const BASE = process.argv[2] ?? "http://localhost:3000";
const BROWSER = process.env.BROWSER ?? "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const SCHEME = process.env.SCHEME === "dark" ? "dark" : "light";
const VIEWPORT = process.env.VIEWPORT === "desktop" ? { width: 1280, height: 900 } : { width: 390, height: 844 };
const SHOTS = process.env.SHOTS;
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

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

await (async () => {
  const browser = await chromium.launch({ executablePath: BROWSER });
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2, colorScheme: SCHEME });
  const page = await ctx.newPage();
  const consoleErrors: string[] = [];
  page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
  page.on("pageerror", (e) => consoleErrors.push(String(e)));
  const shot = async (name: string) => {
    if (SHOTS) await page.screenshot({ path: join(SHOTS, `${name}.png`) });
  };
  const noSideScroll = async (where: string) => {
    const { s, w } = await page.evaluate(() => ({ s: document.documentElement.scrollWidth, w: window.innerWidth }));
    check(s <= w, `${where}: no horizontal scroll (${s} <= ${w})`);
  };
  let userId: string | null = null;

  try {
    await page.goto(BASE + "/");
    await page.getByRole("link", { name: /Start learning/ }).click();
    await page.waitForURL("**/learn/complex-numbers");
    await page.getByText("Division").first().waitFor();
    const ready = await page.locator("section[aria-labelledby=ready] li").allInnerTexts();
    const soon = await page.getByText("Coming soon", { exact: true }).count();
    check(ready.length === 3 && ready.every((t) => t.includes("Start")), `map: "Ready for you" lists 3 open concepts (got ${ready.length})`);
    check(soon === 27, `map: outline shows 27 coming soon (got ${soon})`);
    await shot("01-map-guest");
    await noSideScroll("map");

    await page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /Division/ }).click();
    await page.getByRole("button", { name: "Start as guest" }).waitFor();
    await shot("02-guest-start");
    await page.getByRole("button", { name: "Start as guest" }).click();
    await page.getByRole("heading", { name: "Think about this" }).waitFor();
    ok("guest session started, concept opened at step 1");
    await shot("03-hook");

    // Cards, driven by keyboard where it matters.
    await page.getByRole("button", { name: "Reveal" }).focus();
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Continue" }).waitFor();
    ok("Reveal works from the keyboard");
    await shot("04-hook-revealed");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("heading", { name: "The idea" }).waitFor();
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("heading", { name: "Precisely" }).waitFor();
    await shot("05-formal");
    await noSideScroll("formal card");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("heading", { name: "Worked example" }).waitFor();
    while (await page.getByRole("button", { name: "Show next step" }).count()) {
      await page.getByRole("button", { name: "Show next step" }).click();
    }
    await shot("06-worked");
    await page.getByRole("button", { name: "Try a question" }).click();
    await page.getByRole("heading", { name: "Check yourself" }).waitFor();
    ok("stepped through hook → idea → formal → worked example");

    const keyFor = async () => {
      const itemId = await page.locator("fieldset[data-item-id]").getAttribute("data-item-id");
      const [row] = await sql(`select key from item_options where item_id = '${itemId}' and is_correct`);
      return { itemId: itemId!, correct: String(row.key) };
    };
    const answer = async (key: string) => {
      await page.locator(`input[type=radio][value=${key}]`).check();
      await page.getByRole("button", { name: "Check answer" }).click();
      // The answer that masters the concept goes straight to the Mastered screen.
      await page.getByText(/Correct!|Not quite\.|Mastered ✓/).first().waitFor();
    };

    // 1. A wrong answer, chosen with the keyboard.
    const q1 = await keyFor();
    const wrong = ["A", "B", "C", "D"].find((k) => k !== q1.correct);
    await page.locator(`input[type=radio][value=${wrong}]`).focus();
    await page.keyboard.press("Space");
    await shot("07-question");
    await page.getByRole("button", { name: "Check answer" }).focus();
    await page.keyboard.press("Enter");
    await page.getByText("Not quite.").waitFor();
    const [u] = await sql(`select user_id from attempts where item_id = '${q1.itemId}' order by id desc limit 1`);
    userId = String(u.user_id); // captured early so cleanup runs even if a later step fails
    check(await page.getByText("✗ Your answer").isVisible(), "wrong answer: marks the pick");
    check(await page.getByText("✓ Correct answer").isVisible(), "wrong answer: shows the correct option");
    const remediation = await page.locator(".bg-warning-surface").innerText();
    check(remediation.length > "Not quite.".length + 10, "wrong answer: shows the misconception's remediation");
    check((await page.getByText("0 of 3 in a row").count()) === 1, "streak shows 0 of 3");
    await shot("08-wrong-feedback");
    await noSideScroll("feedback");

    // 2–4. Three different questions answered correctly → mastered.
    const seen = new Set([q1.itemId]);
    for (let i = 1; i <= 3; i++) {
      await page.getByRole("button", { name: "Next question" }).click();
      await page.getByRole("button", { name: "Check answer" }).waitFor();
      const q = await keyFor();
      check(!seen.has(q.itemId) || i === 1, `question ${i + 1} is a different item`);
      seen.add(q.itemId);
      await answer(q.correct);
      if (i === 1) await shot("09-correct-feedback");
    }
    await page.getByRole("heading", { name: "Mastered ✓" }).waitFor();
    ok("mastered after 3 different correct answers in a row");
    await shot("10-mastered");

    await page.getByRole("link", { name: "Back to the chapter" }).click();
    await page.waitForURL("**/learn/complex-numbers");
    // Next keeps the previous page mounted but hidden (React Activity), so scope to the map row.
    const divisionRow = page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /^Division/ });
    await divisionRow.getByText("Mastered ✓", { exact: true }).waitFor();
    check(await divisionRow.getByText("Mastered ✓", { exact: true }).isVisible(), "map shows Division as Mastered ✓");
    await shot("11-map-after");

    // Database agrees.
    const cookies = await ctx.cookies();
    const [db] = await sql(
      `select (select count(*) from attempts where user_id = '${userId}') as attempts,
              (select state from learner_concept_state where user_id = '${userId}') as state,
              (select is_anonymous from auth.users where id = '${userId}') as anonymous`,
    );
    check(db.attempts === 4 && db.state === "mastered" && db.anonymous === true, `DB: 4 attempts, mastered, anonymous user (${JSON.stringify(db)})`);
    check(cookies.some((c) => c.name.includes("auth-token")), "session cookie set");

    check(consoleErrors.length === 0, "no console errors" + (consoleErrors.length ? ": " + consoleErrors.join(" | ") : ""));
  } catch (e) {
    fail("golden path aborted: " + String(e instanceof Error ? e.message : e).split("\n").slice(0, 6).join(" / "));
    await shot("zz-failure");
  } finally {
    if (userId) {
      await sql(`delete from auth.users where id = '${userId}'`);
      ok("cleaned up the test guest user");
    }
    await browser.close();
    console.log(problems.length ? `\n${problems.length} PROBLEM(S)` : "\nGOLDEN PATH PASSED");
    process.exit(problems.length ? 1 : 0);
  }
})();
