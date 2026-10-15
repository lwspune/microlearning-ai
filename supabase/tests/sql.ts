/**
 * Runs SQL against the linked dev project through the Supabase Management API
 * (as `postgres`). Test-only: queries are trusted strings written in the tests.
 *
 * `rolledBack` wraps the statements in a transaction that is always rolled
 * back, after forcing deferred constraints to run, so tests leave no data.
 *
 * Asserting errors: match a constraint name or the exact raised message, never
 * a plain word. Postgres echoes the failing SQL in its error, so /attempts/
 * "passed" against a missing-function error whose echoed SQL said "attempts".
 */
import { readFileSync } from "node:fs";

try {
  process.loadEnvFile(".env.local");
} catch {
  // CI provides the variables directly.
}

const ref = process.env.SUPABASE_PROJECT_REF;
const token = process.env.SUPABASE_ACCESS_TOKEN;

export async function sql<T = Record<string, unknown>>(query: string): Promise<T[]> {
  if (!ref || !token) throw new Error("SUPABASE_PROJECT_REF and SUPABASE_ACCESS_TOKEN must be set (see .env.local)");
  const res = await fetch(`https://api.supabase.com/v1/projects/${ref}/database/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const body = await res.text();
  if (!res.ok) throw new Error(body);
  return JSON.parse(body) as T[];
}

/**
 * A migration not yet pushed, run first inside every rolled-back transaction, so its tests can be
 * written and run before `db push` (RUNBOOK 5): DB_TEST_PENDING=supabase/migrations/<file>.sql.
 */
const pending = process.env.DB_TEST_PENDING ? `${readFileSync(process.env.DB_TEST_PENDING, "utf8")}\n` : "";

/** Runs `statements` in a transaction, checks deferred constraints, then rolls back. */
export function rolledBack<T = Record<string, unknown>>(statements: string): Promise<T[]> {
  return sql<T>(`begin;\n${pending}${statements}\nset constraints all immediate;\nrollback;`);
}

/** Like rolledBack, but returns the result of the last statement before the constraint check. */
export function rolledBackSelect<T = Record<string, unknown>>(setup: string, select: string): Promise<T[]> {
  return sql<T>(`begin;\n${pending}${setup}\nset constraints all immediate;\n${select}\nrollback;`);
}
