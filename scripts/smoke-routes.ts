/**
 * Smoke-checks routes against a running build (made with REVIEW_ENABLED=true).
 *
 * "missing" routes must render the not-found UI with a noindex tag. Their status
 * may be 404, or 200 when Partial Prefetching streamed the App Shell before
 * notFound() ran (documented Next.js behaviour; see next.config.ts).
 *
 * Usage: node scripts/smoke-routes.ts [baseUrl]   (default http://localhost:3000)
 */
export {}; // module scope, for top-level await

const base = process.argv[2] ?? "http://localhost:3000";

const routes: [path: string, expect: "ok" | "missing"][] = [
  ["/", "ok"],
  ["/manifest.webmanifest", "ok"],
  ["/icon/192", "ok"],
  ["/icon/512", "ok"],
  ["/review", "ok"],
  ["/review/complex-numbers/division", "ok"],
  ["/review/complex-numbers/argument", "ok"],
  ["/review/complex-numbers/perpendicular-bisector", "ok"],
  ["/review/complex-numbers/not-a-concept", "missing"],
  ["/review/not-a-chapter/division", "missing"],
  ["/review/complex-numbers/conjugate", "missing"], // in the graph, not yet authored
  ["/learn", "ok"],
  ["/learn/complex-numbers", "ok"],
  ["/learn/complex-numbers/division", "ok"], // guest sees the start card
  ["/learn/complex-numbers/conjugate", "missing"], // not published: no guest card either
  ["/learn/not-a-chapter", "missing"],
];

const NOT_FOUND_TEXT = "This page could not be found";
const NOINDEX = /<meta name="robots" content="noindex"/;

let failed = 0;
for (const [path, expect] of routes) {
  const res = await fetch(base + path, { redirect: "manual" });
  const body = await res.text();
  const isNotFoundPage = body.includes(NOT_FOUND_TEXT) && NOINDEX.test(body);
  const ok =
    expect === "ok"
      ? res.status === 200 && !isNotFoundPage
      : (res.status === 404 || res.status === 200) && isNotFoundPage;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} ${res.status} ${expect.padEnd(7)} ${path}${expect === "missing" && !isNotFoundPage ? " (no not-found page + noindex)" : ""}`);
}
console.log(failed ? `${failed} route(s) wrong` : "all routes ok");
process.exit(failed ? 1 : 0);
