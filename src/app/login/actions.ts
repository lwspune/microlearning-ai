"use server";

import { redirect } from "next/navigation";
import { homeFor, parseCredentials, type Role, safeNext } from "@/lib/auth/routing";
import { createSessionClient } from "@/lib/supabase/server";

/** `email` comes back on failure so the form keeps it (React resets a form after its action). */
export type LoginState = { error: string | null; email?: string };

const WRONG = "Email or password is wrong.";

/** Signs a named account in and sends it to `next` (if its role may open it) or its own area. */
export async function signIn(_state: LoginState, form: FormData): Promise<LoginState> {
  const creds = parseCredentials(form);
  const typed = String(form.get("email") ?? "").slice(0, 254);
  if (!creds.ok) return { error: creds.error, email: typed };

  const supabase = await createSessionClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email: creds.email, password: creds.password });
  if (error || !data.user) {
    // A wrong password is expected; anything else is the auth service failing, and is logged.
    if (error && error.code !== "invalid_credentials") console.error("signIn: auth failed", { code: error.code, status: error.status });
    // The same words either way, so the form never reveals which emails have an account.
    return {
      error: !error || error.code === "invalid_credentials" ? WRONG : "Sign-in is unavailable right now. Try again in a minute.",
      email: typed,
    };
  }

  const { data: profile, error: profileError } = await supabase.from("profiles").select("role").eq("id", data.user.id).maybeSingle();
  if (profileError) console.error("signIn: profile read failed", profileError.message);
  if (!profile) {
    await supabase.auth.signOut();
    return { error: "This login isn't set up yet. Ask your academy.", email: typed };
  }

  const role = profile.role as Role;
  const next = form.get("next");
  redirect(safeNext(typeof next === "string" ? next : null, role) ?? homeFor(role));
}

export async function signOut(): Promise<void> {
  const supabase = await createSessionClient();
  const { error } = await supabase.auth.signOut();
  if (error) console.error("signOut failed", error.message);
  redirect("/");
}
