/**
 * Hindi and Marathi lessons, end to end in a real browser (PLAN.md "Hindi and Marathi lessons"):
 * a guest opens Angle and its Measurement C01 in English with the English | Hindi | Marathi
 * switch → Hindi keeps the slide → Marathi → remembered after a reload → a concept with no
 * translation shows English and no switch → a wrong answer's remediation and the solution come in
 * Marathi → back to English.
 *
 * Usage: npm run e2e:languages -- [baseUrl]   (default http://localhost:3000; needs the app running
 *        and the chapter seeded with its translations)
 * Env:   BROWSER  path to a Chromium-based browser (default: Microsoft Edge on Windows)
 *        VIEWPORT phone | desktop (default phone)   SHOTS  directory for screenshots (optional)
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
const DEVANAGARI = /[\u0900-\u0963\u0966-\u097f]/;

await (async () => {
  const browser = await chromium.launch({ executablePath: BROWSER });
  const page = await (await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 })).newPage();
  const consoleErrors: string[] = [];
  page.on("pageerror", (e) => consoleErrors.push(String(e)));
  const shot = async (name: string) => {
    if (!SHOTS) return;
    await page.waitForTimeout(600);
    await page.screenshot({ path: join(SHOTS, `${name}.png`) });
  };
  const lesson = BASE + "/learn/angle-measurement/directed-angles?course=mh-board";
  const switcher = page.getByRole("group", { name: "Lesson language" });
  const language = (name: string) => switcher.getByRole("button", { name, exact: true });
  const pressed = async () => (await switcher.locator("button[aria-pressed=true]").textContent())?.trim();
  const counter = () => page.locator("section header p").filter({ visible: true }).first().textContent();
  /** Waits until the slide text marked with `lang` is in Devanagari: the page has re-rendered in it. */
  const shownIn = (lang: string) =>
    page.waitForFunction((l) => /[ऀ-ॣ०-ॿ]/.test(document.querySelector(`[lang=${l}]`)?.textContent ?? ""), lang);
  let userId: string | null = null;

  try {
    // ---- A guest opens the lesson in English, with the switch ----
    await page.goto(lesson);
    await page.getByRole("button", { name: "Start as guest" }).click();
    await page.getByRole("heading", { name: "Think about this" }).waitFor();
    const [guest] = await sql(
      `select id from auth.users where is_anonymous and created_at > now() - interval '2 minutes' order by created_at desc limit 1`,
    );
    userId = String(guest.id);
    check(await switcher.isVisible(), "the lesson shows the language switch");
    check((await switcher.getByRole("button").allTextContents()).join(" | ") === "English | Hindi | Marathi", "it reads English | Hindi | Marathi");
    check((await pressed()) === "English", "English is chosen at first");
    check(await page.getByText(/One spoke of a wheel/).isVisible(), "the hook is in English");
    await shot("01-english");

    // ---- Hindi keeps the slide the learner is on ----
    for (let i = 0; i < 2; i++) await page.getByRole("button", { name: /Start →|Next Page →/ }).click();
    const before = await counter();
    await language("Hindi").click();
    await shownIn("hi");
    check((await counter()) === before, `switching keeps the slide (${before})`);
    check((await pressed()) === "Hindi", "Hindi is now chosen");
    check((await page.locator("[lang=hi]").count()) > 0, 'the translated text is marked lang="hi"');
    await shot("02-hindi");

    // ---- Marathi, remembered after a reload ----
    await language("Marathi").click();
    await shownIn("mr");
    check((await counter()) === before, "switching again keeps the slide");
    await shot("03-marathi");
    await page.reload();
    await page.getByText(/एका चाकाची/).first().waitFor();
    check((await pressed()) === "Marathi", "Marathi is remembered after a reload");

    // ---- A concept with no translation: English, no switch ----
    await page.goto(BASE + "/learn/complex-numbers/imaginary-unit?course=mh-board");
    await page.getByRole("heading", { name: "Think about this" }).waitFor();
    check((await switcher.count()) === 0, "an untranslated concept shows no switch");
    check(!DEVANAGARI.test((await page.locator("main").textContent()) ?? ""), "and stays in English");

    // ---- A wrong answer: remediation and solution in Marathi ----
    await page.goto(lesson);
    await page.getByText(/एका चाकाची/).first().waitFor();
    while (await page.getByRole("button", { name: /Start →|Next Page →|Try a question →/ }).count()) {
      await page.getByRole("button", { name: /Start →|Next Page →|Try a question →/ }).click();
    }
    const fieldset = page.locator("fieldset[data-item-id]:visible");
    await fieldset.locator("button[data-key]").first().waitFor();
    const itemId = await fieldset.getAttribute("data-item-id");
    const [wrong] = await sql(`select key from item_options where item_id = '${itemId}' and not is_correct order by key limit 1`);
    await fieldset.locator(`button[data-key=${wrong.key}]`).click();
    await page.getByText("Not quite.").filter({ visible: true }).waitFor();
    const remediation = page.locator("[lang=mr]").filter({ visible: true }).filter({ hasNotText: /^$/ });
    check(DEVANAGARI.test((await remediation.first().textContent()) ?? ""), "the remediation is in Marathi");
    await page.getByRole("button", { name: "See the solution" }).filter({ visible: true }).click();
    const steps = page.locator("[data-solution] [lang=mr]").filter({ visible: true });
    await steps.waitFor();
    check(DEVANAGARI.test((await steps.textContent()) ?? ""), "the solution is in Marathi");
    check(!DEVANAGARI.test((await fieldset.locator("legend, p").first().textContent()) ?? ""), "the question itself stays in English");
    await shot("04-feedback-marathi");

    // ---- Back to English ----
    // The choice is saved by a server action (a POST); leave only once it has answered.
    await Promise.all([page.waitForResponse((r) => r.request().method() === "POST"), language("English").click()]);
    await page.goto(BASE + "/learn/trigonometric-functions/ratios-from-a-point?course=mh-board");
    await page.getByText(/lie on the same terminal arm/).first().waitFor();
    check((await pressed()) === "English", "English is remembered on the next lesson");
    check(consoleErrors.length === 0, `no page errors${consoleErrors.length ? `: ${consoleErrors.join("; ")}` : ""}`);
  } catch (e) {
    fail(`stopped early: ${e instanceof Error ? e.message : String(e)}`);
  } finally {
    if (userId) {
      await sql(`delete from auth.users where id = '${userId}'`);
      ok("cleaned up the test guest user");
    }
    await browser.close();
    console.log(problems.length ? `\n${problems.length} PROBLEM(S)` : "\nLANGUAGES PASSED");
    process.exit(problems.length ? 1 : 0);
  }
})();
