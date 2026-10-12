/**
 * Runs SQL against the linked dev project through the Supabase Management API
 * (as `postgres`). Test-only: queries are trusted strings written in the tests.
 *
 * `rolledBack` wraps the statements in a transaction that is always rolled
 * back, after forcing deferred constraints to run, so tests leave no data.
 */
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

/** Runs `statements` in a transaction, checks deferred constraints, then rolls back. */
export function rolledBack<T = Record<string, unknown>>(statements: string): Promise<T[]> {
  return sql<T>(`begin;\n${statements}\nset constraints all immediate;\nrollback;`);
}

/** Like rolledBack, but returns the result of the last statement before the constraint check. */
export function rolledBackSelect<T = Record<string, unknown>>(setup: string, select: string): Promise<T[]> {
  return sql<T>(`begin;\n${setup}\nset constraints all immediate;\n${select}\nrollback;`);
}
