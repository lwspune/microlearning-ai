/**
 * Smoke-checks routes against a running build (made with REVIEW_ENABLED=true).
 *
 * "missing" routes must render the not-found UI with a noindex tag. Their status
 * may be 404, or 200 when Partial Prefetching streamed the App Shell before
 * notFound() ran (documented Next.js behaviour; see next.config.ts).
 *
 * Usage: node scripts/smoke-routes.ts [baseUrl]   (default http://localhost:3000)
 */
import { chapters } from "../src/content/chapters/index.ts";
import { courses } from "../src/content/courses.ts";

const base = process.argv[2] ?? "http://localhost:3000";

// Derived from the content, so publishing a concept can't make this list stale.
const contentRoutes = chapters.flatMap((ch) => {
  const published = new Set(ch.concepts.filter((c) => c.status === "approved").map((c) => c.id));
  const authored = new Set(ch.concepts.map((c) => c.id));
  const slugOf = (id: string) => ch.graph.find((n) => n.id === id)!.slug;
  const unwritten = ch.graph.find((n) => !authored.has(n.id));
  return [
    [`/learn/${ch.slug}`, "ok"],
    ...[...authored].map((id) => [`/review/${ch.slug}/${slugOf(id)}`, "ok"]),
    ...[...published].map((id) => [`/learn/${ch.slug}/${slugOf(id)}`, "ok"]), // guests see the start card
    ...(unwritten
      ? [
          [`/review/${ch.slug}/${unwritten.slug}`, "missing"],
          [`/learn/${ch.slug}/${unwritten.slug}`, "missing"], // not published: no guest card either
        ]
      : []),
  ] as [string, "ok" | "missing"][];
});

const courseRoutes = courses.flatMap((c) => [
  [`/courses/${c.slug}`, "ok"],
  ...c.chapters.map((e) => [`/courses/${c.slug}/${e.chapter}`, "ok"]),
]) as [string, "ok" | "missing"][];

const routes: [path: string, expect: "ok" | "missing"][] = [
  ["/", "ok"],
  ["/manifest.webmanifest", "ok"],
  ["/icon/192", "ok"],
  ["/icon/512", "ok"],
  ["/review", "ok"],
  ["/learn", "ok"],
  ["/review/complex-numbers/not-a-concept", "missing"],
  ["/review/not-a-chapter/division", "missing"],
  ["/learn/not-a-chapter", "missing"],
  ["/review/courses", "ok"],
  ["/login", "ok"],
  ["/courses/not-a-course", "missing"],
  ["/courses/cds/complex-numbers", "missing"], // a chapter outside the course
  ["/courses/jee-main/not-a-chapter", "missing"],
  ...courseRoutes,
  ...contentRoutes,
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
