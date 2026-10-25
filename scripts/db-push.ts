/**
 * `supabase db push` with the database password from .env.local (RUNBOOK 5), so the
 * push runs as `npm run db:push`: `-- --dry-run` first, then `-- --yes`.
 */
import { spawnSync } from "node:child_process";

try {
  process.loadEnvFile(".env.local");
} catch {
  // CI provides the variables directly.
}

const run = spawnSync("npx", ["supabase", "db", "push", ...process.argv.slice(2)], { stdio: "inherit", shell: true });
process.exit(run.status ?? 1);
