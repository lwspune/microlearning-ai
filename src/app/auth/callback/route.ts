import { type NextRequest, NextResponse } from "next/server";
import { isIdentityTaken } from "@/lib/auth/google";
import { landingFor } from "@/lib/auth/routing";
import { createSessionClient } from "@/lib/supabase/server";
import { claimProfile } from "@/server/googleSignIn";

/**
 * Where Supabase's Google redirect flow returns (the fallback when Google's
 * own button can't be drawn): swaps the code for a session, gives a new
 * Google login its profile, and lands it on `next` or its own area.
 */
export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const code = url.searchParams.get("code");
  const rawNext = url.searchParams.get("next");
  const next = rawNext && rawNext.length <= 300 ? rawNext : null;

  if (code) {
    const supabase = await createSessionClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("auth callback: code exchange failed", { code: error.code, status: error.status });
    } else {
      const role = await claimProfile();
      if (role) return NextResponse.redirect(new URL(landingFor(role, next), url.origin));
    }
  }
  // A guest linking a Google account that already has its own login comes back with one of these codes.
  const taken = isIdentityTaken({ code: url.searchParams.get("error_code") ?? undefined });
  return NextResponse.redirect(new URL(`/login?error=${taken ? "google-taken" : "google"}`, url.origin));
}
