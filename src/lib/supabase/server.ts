import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { connection } from "next/server";
import type { Database } from "@/db/types";

/** Supabase client acting as the signed-in visitor (session from cookies). */
export async function createSessionClient() {
  // Request-time only: the auth client reads the clock (Date.now) while loading
  // the session, which Cache Components forbids during prerendering/prefetching.
  await connection();
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) cookieStore.set(name, value, options);
          } catch {
            // Called from a Server Component, where cookies are read-only.
            // The proxy refreshes sessions, so this is safe to ignore.
          }
        },
      },
    },
  );
}

/** The signed-in user's id, verified from the session's JWT, or null. */
export async function currentUserId(): Promise<string | null> {
  const supabase = await createSessionClient();
  const { data } = await supabase.auth.getClaims();
  return data?.claims?.sub ?? null;
}
