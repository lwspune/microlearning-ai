/**
 * Golden path, end to end in a real browser:
 * guest → chapter map (only C01 ready, or all 30 with the mastery gate off) → C01 opens → [C01 fast-forwarded] →
 * Standard form: a repeated mistake rooted outside the chapter → "worth revising" →
 * [C03 fast-forwarded] → Arithmetic slides → wrong answer (remediation) →
 * 3 different correct answers → mastered → map shows it → Conjugate: a repeated
 * mistake rooted in Arithmetic → refresher and back → spaced review.
 *
 * Usage: npm run e2e -- [baseUrl]   (default http://localhost:3000; needs the app running)
 * Env:   BROWSER  path to a Chromium-based browser (default: Microsoft Edge on Windows)
 *        SCHEME   light | dark (default light)   VIEWPORT  phone | tablet | desktop (default phone)
 *        SHOTS    directory for screenshots (optional)
 * Reads .env.local for the Supabase Management API (looks up keys, cleans up the guest).
 */
import { mkdirSync, readFileSync } from "node:fs";
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
// The mastery gate's setting, read from source (Node can't resolve the app's "@/" imports).
const gateSetting = readFileSync("src/engine/unlock.ts", "utf8").match(/export const MASTERY_GATE = (true|false);/);
if (!gateSetting) throw new Error("can't read MASTERY_GATE from src/engine/unlock.ts");
const GATE = gateSetting[1] === "true";
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
    if (!SHOTS) return;
    // Let slide transitions finish, or the capture shows a half-faded slide.
    await page.evaluate(() => Promise.all(document.getAnimations().map((a) => a.finished)));
    await page.screenshot({ path: join(SHOTS, `${name}.png`) });
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
    await page.getByText("The imaginary unit").first().waitFor();
    const ready = await page.locator("section[aria-labelledby=ready] li").allInnerTexts();
    const soon = await page.getByText("Coming soon", { exact: true }).count();
    const locked = await page.getByText("Locked", { exact: true }).count();
    // A new learner starts at the root of the graph: C01, the only concept with no prerequisites.
    if (GATE) {
      check(ready.length === 1 && ready[0].includes("The imaginary unit"), `map: "Ready for you" lists only The imaginary unit (got ${ready.length})`);
    } else {
      check(ready.length === 30, `map (gate off): "Ready for you" lists all 30 concepts (got ${ready.length})`);
    }
    check(soon === 0, `map: nothing is coming soon (got ${soon})`);
    check(locked === (GATE ? 29 : 0), `map: ${GATE ? "the other 29" : "no"} concepts are locked (got ${locked})`);
    await shot("01-map-guest");
    await noSideScroll("map");

    await page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /The imaginary unit/ }).click();
    await page.getByRole("button", { name: "Start as guest" }).waitFor();
    await shot("02-guest-start");
    await page.getByRole("button", { name: "Start as guest" }).click();
    await page.getByRole("heading", { name: "Think about this" }).waitFor();
    ok("a new guest can open the first concept");

    // Fast-forward past C01 so the rest of the path runs on later concepts.
    const [guest] = await sql(
      `select id from auth.users where is_anonymous and created_at > now() - interval '2 minutes' order by created_at desc limit 1`,
    );
    userId = String(guest.id); // captured early so cleanup runs even if a later step fails
    const masterConcept = (code: string) =>
      sql(
        `insert into learner_concept_state (user_id, concept_id, state, mastery, review_box, next_review_at)
         select '${userId}', c.id, 'mastered', 1, 1, now() + interval '30 days'
           from concepts c join chapters ch on ch.id = c.chapter_id
          where ch.slug = 'complex-numbers' and c.code = '${code}'
         on conflict (user_id, concept_id) do update
           set state = 'mastered', mastery = 1, review_box = 1, next_review_at = excluded.next_review_at`,
      );
    await masterConcept("C01");

    // Options on the current question, with each misconception's fallback.
    const optionsWithRoutes = async () => {
      const itemId = await page.locator("fieldset[data-item-id]:visible").getAttribute("data-item-id");
      return (await sql(
        `select o.key, o.is_correct, m.code, m.fallback_kind, fc.code as fallback_code, fc.status as fallback_status
           from item_options o
           left join misconceptions m on m.id = o.misconception_id
           left join concepts fc on fc.id = m.fallback_concept_id
          where o.item_id = '${itemId}' order by o.key`,
      )) as { key: string; is_correct: boolean; code: string | null; fallback_kind: string | null; fallback_code: string | null; fallback_status: string | null }[];
    };
    const pick = async (key: string) => {
      await page.locator(`fieldset[data-item-id]:visible input[type=radio][value=${key}]`).check();
      await page.getByRole("button", { name: "Check answer" }).click();
      // Visible only: the hidden, still-mounted previous lesson may show old feedback.
      await page.getByText(/Correct!|Not quite\.|Mastered ✓/).filter({ visible: true }).first().waitFor();
    };
    const nextQ = async () => {
      await page.getByRole("button", { name: /Next question|Keep trying here/ }).click();
      await page.getByRole("button", { name: "Check answer" }).waitFor();
    };
    const toQuestions = async () => {
      await page.getByRole("heading", { name: "Think about this" }).filter({ visible: true }).waitFor();
      while (await page.getByRole("button", { name: /Next →|Try a question →/ }).count()) {
        await page.getByRole("button", { name: /Next →|Try a question →/ }).click();
      }
      await page.getByRole("button", { name: "Check answer" }).waitFor();
    };

    // ---- M3a: a repeated mistake whose root is an outside topic → "worth revising" ----
    await page.goto(BASE + "/learn/complex-numbers");
    await page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /^Standard form/ }).click();
    await toQuestions();
    let outsideTarget: string | null = null;
    for (let i = 0; i < 6 && !(await page.getByText("Worth revising:").filter({ visible: true }).isVisible()); i++) {
      if (i > 0) await nextQ();
      const opts = await optionsWithRoutes();
      const choice = opts.find((o) => o.code && o.fallback_kind === "ext" && (!outsideTarget || o.code === outsideTarget));
      if (choice) outsideTarget ??= choice.code;
      await pick((choice ?? opts.find((o) => o.is_correct)!).key);
    }
    check(await page.getByText("Worth revising:").filter({ visible: true }).isVisible(), `repeating ${outsideTarget} suggests revising its outside topic`);
    check((await page.getByRole("link", { name: /Quick refresher/ }).count()) === 0, "no refresher link for an outside topic");
    await shot("12-route-revise");
    await masterConcept("C03");

    await page.goto(BASE + "/learn/complex-numbers");
    await page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /^Arithmetic/ }).click();
    await page.waitForURL("**/learn/complex-numbers/arithmetic");
    // :visible, because Next keeps previously visited lessons mounted but hidden.
    const stage = page.locator('section[aria-roledescription="carousel"]:visible');
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
    check(String(u.user_id) === userId, "the attempt is recorded for this guest");
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
    // Mastered concepts show on the chapter path; "Ready for you" holds what's left to do.
    const ready2 = page.locator("section[aria-labelledby=ready]");
    const arithmeticRow = page.locator("section[aria-labelledby=outline]").getByRole("link", { name: /^Arithmetic/ });
    await arithmeticRow.getByText("Mastered ✓", { exact: true }).waitFor();
    check(await arithmeticRow.getByText("Mastered ✓", { exact: true }).isVisible(), "map shows Arithmetic as Mastered ✓");
    check((await ready2.getByRole("link", { name: /^Arithmetic/ }).count()) === 0, "a mastered concept leaves Ready for you");
    check(await ready2.getByRole("link", { name: /^Conjugate/ }).isVisible(), GATE ? "mastering Arithmetic unlocked Conjugate" : "Conjugate is ready (gate off)");
    await shot("11-map-after");

    // Database agrees.
    const cookies = await ctx.cookies();
    const [db] = await sql(
      `select (select count(*) from attempts a join items i on i.id = a.item_id join concepts c on c.id = i.concept_id
                where a.user_id = '${userId}' and c.code = 'C04') as attempts,
              (select s.state from learner_concept_state s join concepts c on c.id = s.concept_id
                where s.user_id = '${userId}' and c.code = 'C04') as state,
              (select is_anonymous from auth.users where id = '${userId}') as anonymous`,
    );
    check(db.attempts === 4 && db.state === "mastered" && db.anonymous === true, `DB: 4 Arithmetic attempts, mastered, anonymous user (${JSON.stringify(db)})`);
    check(cookies.some((c) => c.name.includes("auth-token")), "session cookie set");

    // ---- M3a: a repeated mistake whose root concept is published → refresher ----
    await page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /^Conjugate/ }).click();
    await toQuestions();

    let target: string | null = null;
    for (let i = 0; i < 8 && !(await page.getByRole("link", { name: /Quick refresher/ }).isVisible()); i++) {
      if (i > 0) await nextQ();
      const opts = await optionsWithRoutes();
      const choice = opts.find((o) => o.code && o.fallback_code === "C04" && (!target || o.code === target));
      if (choice) target ??= choice.code;
      await pick((choice ?? opts.find((o) => o.is_correct)!).key);
    }
    const refresherLink = page.getByRole("link", { name: "Quick refresher: Arithmetic →" });
    check(await refresherLink.isVisible(), `repeating ${target} offers a refresher of Arithmetic`);
    await shot("13-route-refresher");

    await refresherLink.click();
    await page.waitForURL("**/learn/complex-numbers/arithmetic?from=conjugate");
    await page.getByText("Refresher", { exact: true }).waitFor();
    check(await page.getByRole("link", { name: "Back to Conjugate →" }).first().isVisible(), "refresher shows a way back to Conjugate");
    check((await counter()).startsWith("1 /"), "refresher starts at the first slide");
    await shot("14-refresher");
    while (await page.getByRole("button", { name: /Next →|Try a question →/ }).count()) {
      await page.getByRole("button", { name: /Next →|Try a question →/ }).click();
    }
    for (let i = 0; i < 2; i++) {
      if (i > 0) await nextQ();
      else await page.getByRole("button", { name: "Check answer" }).waitFor();
      await pick((await optionsWithRoutes()).find((o) => o.is_correct)!.key);
    }
    const backLink = page.locator("fieldset[data-item-id]:visible").locator("..").getByRole("link", { name: "Back to Conjugate →" });
    await backLink.waitFor({ timeout: 10_000 }).catch(() => {});
    check(await backLink.isVisible(), "after 2 refresher questions: Back to Conjugate");
    await shot("15-refresher-done");
    await backLink.click();
    await page.waitForURL("**/learn/complex-numbers/conjugate");
    await page.getByRole("heading", { name: "Check yourself" }).waitFor();
    ok("returned to Conjugate's questions");

    // ---- M3b: spaced review ----
    const arithmeticState = async () =>
      (await sql(
        `select s.review_box, s.next_review_at > now() + interval '2 days' as later
           from learner_concept_state s join concepts c on c.id = s.concept_id
          where s.user_id = '${userId}' and c.code = 'C04'`,
      ))[0] as { review_box: number; later: boolean };
    const afterRefresher = await arithmeticState();
    check(afterRefresher.review_box === 2 && afterRefresher.later, `refresher made Arithmetic due and its 2 answers passed the review (box ${afterRefresher.review_box})`);

    await sql(
      `update learner_concept_state s set next_review_at = now() - interval '1 minute'
         from concepts c where c.id = s.concept_id and s.user_id = '${userId}' and c.code = 'C04'`,
    );
    await page.goto(BASE + "/learn/complex-numbers");
    const reviewSection = page.locator("section[aria-labelledby=review]:visible");
    await reviewSection.waitFor();
    check(/Review today \(1\)/.test(await reviewSection.innerText()), "map shows Review today (1)");
    await shot("16-review-today");
    await reviewSection.getByRole("link", { name: /Arithmetic/ }).click();
    await page.getByText("Review · 0 of 2").filter({ visible: true }).waitFor();
    ok("review opens on the questions: Review · 0 of 2");
    for (let i = 0; i < 2; i++) {
      if (i > 0) await nextQ();
      await pick((await optionsWithRoutes()).find((o) => o.is_correct)!.key);
    }
    const passed = page.getByText(/Review passed ✓ Next review in 7 days\./).filter({ visible: true });
    await passed.waitFor({ timeout: 10_000 }).catch(() => {});
    check(await passed.isVisible(), "2 correct answers pass the review: next in 7 days (box 3)");
    await shot("17-review-passed");
    await page.getByRole("link", { name: "Back to the chapter" }).filter({ visible: true }).click();
    await page.waitForURL("**/learn/complex-numbers");
    await page.getByRole("heading", { name: "Ready for you" }).filter({ visible: true }).waitFor();
    check((await page.locator("section[aria-labelledby=review]:visible").count()) === 0, "nothing left to review on the map");

    if (GATE) {
      // A forged refresher link must not open a locked concept.
      await page.goto(BASE + "/learn/complex-numbers/division?from=argand-plane");
      await page.getByText(/builds on earlier ones you haven.t mastered yet/).waitFor();
      ok("forged ?from= cannot unlock Division");
    } else {
      await page.goto(BASE + "/learn/complex-numbers/division");
      await page.getByRole("heading", { name: "Think about this" }).filter({ visible: true }).waitFor();
      ok("gate off: Division opens directly, prerequisites not mastered");
    }

    // ---- Figures and step-by-step solutions (pilot concept: Argand plane, C10) ----
    await page.goto(BASE + "/learn/complex-numbers");
    await page.locator("section[aria-labelledby=ready]").getByRole("link", { name: /^Argand plane/ }).click();
    await page.getByRole("heading", { name: "Think about this" }).filter({ visible: true }).waitFor();
    while (!(await page.getByRole("heading", { name: "The idea" }).isVisible())) {
      await page.getByRole("button", { name: "Next →" }).click();
    }
    const figure = stage.locator("svg[role=img]");
    check(await figure.isVisible(), "idea slide shows a figure");
    check(((await figure.locator("title").textContent()) ?? "").trim().length > 10, "the figure has alt text");
    await shot("18-idea-figure");
    await noSideScroll("idea figure");
    while (!(await page.getByRole("heading", { name: "Worked example" }).isVisible())) {
      await page.getByRole("button", { name: "Next →" }).click();
    }
    check(await figure.isVisible(), "worked example shows a figure");
    while (await page.getByRole("button", { name: /Next →|Try a question →/ }).count()) {
      await page.getByRole("button", { name: /Next →|Try a question →/ }).click();
    }
    await page.getByRole("button", { name: "Check answer" }).waitFor();
    check((await page.getByRole("button", { name: "See the solution" }).count()) === 0, "no solution before answering");
    await pick((await optionsWithRoutes()).find((o) => o.is_correct)!.key);
    // The toggle's name flips to "Hide the solution" once open.
    const solutionToggle = page.getByRole("button", { name: /^(See|Hide) the solution$/ }).filter({ visible: true });
    check((await solutionToggle.getAttribute("aria-expanded")) === "false", "solution starts closed");
    await solutionToggle.click();
    check((await solutionToggle.getAttribute("aria-expanded")) === "true", "solution toggle reports it is open");
    const solution = page.locator("[data-solution]:visible");
    check((await solution.locator("ol > li").count()) >= 2, "solution shows at least 2 steps");
    await shot("19-solution");
    await noSideScroll("solution");

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
