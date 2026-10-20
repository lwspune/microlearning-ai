import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/db/types";

/**
 * Supabase client in the browser, for Google sign-in only (the session lands
 * in the same cookies the server reads). Everything else goes through server
 * actions.
 */
export function createBrowserSupabase() {
  return createBrowserClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
}
