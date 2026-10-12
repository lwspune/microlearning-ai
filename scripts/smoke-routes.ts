/**
 * Asserts HTTP statuses against a running server. Catches status regressions
 * that unit tests can't see: e.g. with partialPrefetching on, notFound() for an
 * unknown concept answered 200 because the static shell had already streamed.
 *
 * Usage: node scripts/smoke-routes.ts [baseUrl]   (default http://localhost:3000)
 * Run against a build made with REVIEW_ENABLED=true.
 */
export {}; // module scope, for top-level await

const base = process.argv[2] ?? "http://localhost:3000";

const expected: [path: string, status: number][] = [
  ["/", 200],
  ["/manifest.webmanifest", 200],
  ["/icon/192", 200],
  ["/icon/512", 200],
  ["/review", 200],
  ["/review/complex-numbers/division", 200],
  ["/review/complex-numbers/argument", 200],
  ["/review/complex-numbers/perpendicular-bisector", 200],
  ["/review/complex-numbers/not-a-concept", 404],
  ["/review/not-a-chapter/division", 404],
  ["/review/complex-numbers/conjugate", 404], // in the graph, not yet authored
];

let failed = 0;
for (const [path, status] of expected) {
  const res = await fetch(base + path, { redirect: "manual" });
  const ok = res.status === status;
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} ${res.status} (want ${status}) ${path}`);
}
console.log(failed ? `${failed} route(s) wrong` : "all routes ok");
process.exit(failed ? 1 : 0);
