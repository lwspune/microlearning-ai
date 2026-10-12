import { defineConfig } from "vitest/config";

/** Integration tests against the linked Supabase dev project (network). */
export default defineConfig({
  test: {
    include: ["supabase/tests/**/*.db.test.ts"],
    testTimeout: 30_000,
    fileParallelism: false,
  },
});
