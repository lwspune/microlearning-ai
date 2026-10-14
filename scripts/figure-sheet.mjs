// Contact sheets of every figure on the review pages of the given concepts, light and dark.
// Usage: node scripts/figure-sheet.mjs <outDir> <chapter> <slug>...   (needs `npm run dev` on :3000)
// RUNBOOK 3 step 7: one sheet per concept and scheme; figures are too small to judge in a full-page shot.
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";

const [outDir, chapter, ...slugs] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" });

for (const scheme of ["light", "dark"]) {
  const ctx = await browser.newContext({ viewport: { width: 420, height: 900 }, deviceScaleFactor: 2, colorScheme: scheme });
  const page = await ctx.newPage();
  for (const slug of slugs) {
    await page.goto(`http://localhost:3000/review/${chapter}/${slug}`, { waitUntil: "networkidle" });
    const figs = page.locator("figure");
    const n = await figs.count();
    const shots = [];
    for (let i = 0; i < n; i++) {
      const f = figs.nth(i);
      await f.scrollIntoViewIfNeeded();
      const cap = (await f.locator("figcaption").innerText()).split("Alt text:")[0].trim();
      const heading = await f.evaluate((el) => {
        let s = el.closest("section");
        const h = s?.querySelector("h2")?.textContent ?? "";
        const item = el.closest("article,li,div[id]")?.querySelector("h3")?.textContent ?? "";
        return `${h} ${item}`.trim();
      });
      const png = await f.locator("svg").first().screenshot({ animations: "disabled" });
      shots.push({ png: png.toString("base64"), cap: `${heading} · ${cap}` });
    }
    const sheet = await ctx.newPage();
    await sheet.setViewportSize({ width: 1600, height: 900 });
    const bg = scheme === "dark" ? "#111" : "#fff";
    const fg = scheme === "dark" ? "#ddd" : "#222";
    await sheet.setContent(`<body style="margin:12px;background:${bg};color:${fg};font:13px system-ui">
      <h1 style="font-size:18px">${slug} · ${scheme} · ${n} figures</h1>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
      ${shots.map((s) => `<div><img style="width:100%;border:1px solid #888" src="data:image/png;base64,${s.png}"><div>${s.cap}</div></div>`).join("")}
      </div></body>`);
    await sheet.screenshot({ path: join(outDir, `${slug}-${scheme}.png`), fullPage: true });
    await sheet.close();
    console.log(slug, scheme, n);
  }
  await ctx.close();
}
await browser.close();
