import "server-only";
import type { Role } from "@/lib/auth/routing";
import { createSessionClient } from "@/lib/supabase/server";

/**
 * After any Google sign-in (Google's button, One Tap, or the redirect
 * callback): makes sure the login has a profile and returns its role. A new
 * Google login becomes a solo student; an existing profile is left as it is
 * (both decided in the database, claim_student_profile). Null when there is
 * no named session or the claim failed (logged).
 */
export async function claimProfile(): Promise<Role | null> {
  const supabase = await createSessionClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (!claims?.sub || claims.is_anonymous) return null;

  const { error } = await supabase.rpc("claim_student_profile");
  if (error) {
    console.error("claimProfile: claim failed", error.message);
    return null;
  }
  const { data: row, error: readError } = await supabase.from("profiles").select("role").eq("id", claims.sub).maybeSingle();
  if (readError || !row) {
    console.error("claimProfile: profile read failed", readError?.message ?? "no row");
    return null;
  }
  return row.role;
}
