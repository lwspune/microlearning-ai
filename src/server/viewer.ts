import "server-only";
import { cache } from "react";
import type { Role } from "@/lib/auth/routing";
import { createSessionClient } from "@/lib/supabase/server";

export type Profile = { role: Role; fullName: string; academyId: string | null; stage: "school" | "graduate" | null };

/**
 * Who is looking: nobody, a guest (anonymous login, no profile), or a named
 * account with its profile. A named login without a profile is "not set up"
 * (profile null, guest false). The profile is read as the viewer, so row
 * level security applies. Cached for the request.
 */
export type Viewer = { userId: string; guest: boolean; profile: Profile | null } | null;

export const currentViewer = cache(async (): Promise<Viewer> => {
  const supabase = await createSessionClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (!claims?.sub) return null;
  if (claims.is_anonymous) return { userId: claims.sub, guest: true, profile: null };
  const { data: row, error } = await supabase
    .from("profiles")
    .select("role, full_name, academy_id, stage")
    .eq("id", claims.sub)
    .maybeSingle();
  if (error) {
    console.error("currentViewer: profile read failed", error.message);
    throw error;
  }
  return {
    userId: claims.sub,
    guest: false,
    profile: row && {
      role: row.role,
      fullName: row.full_name,
      academyId: row.academy_id,
      stage: row.stage as Profile["stage"],
    },
  };
});
