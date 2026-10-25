// Lists maths that runs past its slide's right edge on a phone (390 px wide), with its TeX.
// Usage: node scripts/overflow-probe.mjs <chapter> [--lang=hi|mr] <slug>...   (needs `npm run dev` on :3000)
// RUNBOOK 3 step 5f: a long equation must be split into $…$ $…$ pieces so it can wrap; only the screen shows which.
// Exits 1 when anything overflows.
import { chromium } from "playwright-core";

const args = process.argv.slice(2);
const lang = args.find((a) => a.startsWith("--lang="))?.slice("--lang=".length);
const [chapter, ...slugs] = args.filter((a) => !a.startsWith("--lang="));
const browser = await chromium.launch({ executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
let total = 0;
for (const slug of slugs) {
  // "load", not "networkidle": while other edits hot-reload the dev server the network never goes quiet.
  await page.goto(`http://localhost:3000/review/${chapter}/${slug}/slides${lang ? `?lang=${lang}` : ""}`, { waitUntil: "load", timeout: 120000 });
  await page.evaluate(() => document.fonts.ready);
  // Measure only once the deck is laid out; before hydration every slide is 0 px wide.
  await page.waitForFunction(() => [...document.querySelectorAll("li[data-slide]")].every((s) => s.getBoundingClientRect().width > 0), null, { timeout: 120000 });
  const hits = await page.evaluate(() => {
    const out = [];
    for (const slide of document.querySelectorAll("li[data-slide]")) {
      const limit = Math.min(slide.getBoundingClientRect().right, window.innerWidth) - 4;
      for (const k of slide.querySelectorAll(".katex")) {
        if (k.closest("svg")) continue;
        const over = k.getBoundingClientRect().right - limit;
        if (over > 1) out.push(`${slide.dataset.slide}  +${Math.round(over)}px  ${k.querySelector("annotation")?.textContent ?? k.textContent}`);
      }
    }
    return out;
  });
  total += hits.length;
  for (const h of hits) console.log(`${slug}  ${h}`);
}
console.log(`${total} overflowing`);
await browser.close();
process.exit(total > 0 ? 1 : 0);
