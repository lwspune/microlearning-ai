/**
 * Golden path, end to end in a real browser:
 * guest → chapter map → concept cards → wrong answer (remediation) →
 * 3 different correct answers → mastered → map shows it.
 *
 * Usage: npm run e2e -- [baseUrl]   (default http://localhost:3000; needs the app running)
 * Env:   BROWSER  path to a Chromium-based browser (default: Microsoft Edge on Windows)
 *        SCHEME   light | dark (default light)   VIEWPORT  phone | tablet | desktop (default phone)
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
const VIEWPORTS = {
  phone: { width: 390, height: 844 },
  tablet: { width: 1180, height: 820 }, // landscape iPad, the primary target
  desktop: { width: 1280, height: 900 },
} as const;
const VIEWPORT = VIEWPORTS[(process.env.VIEWPORT ?? "phone") as keyof typeof VIEWPORTS] ?? VIEWPORTS.phone;
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
    await page.getByText("Arithmetic").first().waitFor();
    const ready = await page.locator("section[aria-labelledby=ready] li").allInnerTexts();
    const soon = await page.getByText("Coming soon", { exact: true }).count();
    // New learners start where nothing published is left to master first: C04 and C10.
    check(ready.length === 2 && ready[0].includes("Arithmetic") && ready[1].includes("Argand plane"), `map: "Ready for you" lists Arithmetic and Argand plane (got ${ready.length})`);
    check(soon === 23, `map: outline shows 23 coming soon (got ${soon})`);
    check((await page.getByText("Locked", { exact: true }).count()) === 5, "map: the other 5 published concepts are locked");
    await shot("01-map-guest");
    await noSideScroll("map");

    await page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /Arithmetic/ }).click();
    await page.getByRole("button", { name: "Start as guest" }).waitFor();
    await shot("02-guest-start");
    await page.getByRole("button", { name: "Start as guest" }).click();
    const stage = page.locator('section[aria-roledescription="carousel"]');
    const counter = async () => (await stage.locator("header p").innerText()).trim();
    await page.getByRole("heading", { name: "Think about this" }).waitFor();
    const total = Number((await counter()).split("/")[1]);
    check((await counter()) === `1 / ${total}`, `lesson opens on slide 1 of ${total}`);
    await shot("03-hook");

    // Keyboard: the right arrow advances.
    await page.keyboard.press("ArrowRight");
    await page.getByText(`2 / ${total}`).waitFor();
    ok("right arrow advances to the reveal slide");
    await shot("04-hook-revealed");
    await noSideScroll("reveal slide");

    // Touch: a left swipe advances.
    const box = (await stage.boundingBox())!;
    const y = box.y + box.height / 2;
    await stage.dispatchEvent("pointerdown", { pointerType: "touch", clientX: box.x + box.width * 0.8, clientY: y });
    await stage.dispatchEvent("pointerup", { pointerType: "touch", clientX: box.x + box.width * 0.2, clientY: y });
    await page.getByRole("heading", { name: "The idea" }).waitFor();
    ok("swipe left advances to the next slide");

    // Back returns, Next goes on.
    await page.getByRole("button", { name: "← Back" }).click();
    await page.getByText(`2 / ${total}`).waitFor();
    ok("Back returns to the previous slide");
    await page.getByRole("button", { name: "Next →" }).click();
    await page.getByRole("heading", { name: "Precisely" }).or(page.getByRole("heading", { name: "The idea" })).first().waitFor();

    let shotFormal = false;
    while (await page.getByRole("button", { name: "Next →" }).count()) {
      if (!shotFormal && (await page.getByRole("heading", { name: "Precisely" }).isVisible())) {
        await shot("05-formal");
        shotFormal = true;
      }
      await page.getByRole("button", { name: "Next →" }).click();
    }
    await page.getByRole("heading", { name: "Worked example" }).waitFor();
    await shot("06-worked");
    await page.getByRole("button", { name: "Try a question →" }).click();
    await page.getByRole("heading", { name: "Check yourself" }).waitFor();
    check((await counter()) === `${total} / ${total}`, "questions are the last slide");
    ok("stepped through every slide to the questions");

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
    const ready2 = page.locator("section[aria-labelledby=ready]");
    const arithmeticRow = ready2.getByRole("link", { name: /^Arithmetic/ });
    await arithmeticRow.getByText("Mastered ✓", { exact: true }).waitFor();
    check(await arithmeticRow.getByText("Mastered ✓", { exact: true }).isVisible(), "map shows Arithmetic as Mastered ✓");
    check(await ready2.getByRole("link", { name: /^Conjugate/ }).isVisible(), "mastering Arithmetic unlocked Conjugate");
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
