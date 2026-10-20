"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { finishGoogleSignIn } from "@/app/login/actions";
import { secondaryButton } from "@/components/ui";
import { callbackUrl, isIdentityTaken, makeNonce, resolveGoogleClientId } from "@/lib/auth/google";
import { createBrowserSupabase } from "@/lib/supabase/browser";

/**
 * "Continue with Google", ported from PYQ Vault. Google draws its own button
 * and signs in on this page (signInWithIdToken), so Google's window names
 * Concept Ladder, not the Supabase project. With `oneTap`, Google's One Tap
 * box is offered too. A guest links Google to their guest login instead, so
 * their progress carries over; if that Google account already has a login,
 * it signs into that one.
 *
 * Falls back to a plain button (Supabase's redirect flow through
 * /auth/callback) when Google's script can't run: no client id, or blocked.
 *
 * Google Identity Services comes from accounts.google.com only, so it is a
 * script tag, not a package. Google keeps one configuration per page: render
 * one of these per page.
 */
const CLIENT_ID = resolveGoogleClientId(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

type GoogleAccountsId = {
  initialize(config: {
    client_id: string;
    callback: (response: { credential: string }) => void;
    nonce: string;
    context: "signin";
    use_fedcm_for_prompt: boolean;
    itp_support: boolean;
    cancel_on_tap_outside: boolean;
  }): void;
  prompt(): void;
  renderButton(
    el: HTMLElement,
    options: { type: "standard"; theme: "outline" | "filled_black"; size: "large"; text: "continue_with"; shape: "rectangular"; width: number },
  ): void;
};

declare global {
  interface Window {
    google?: { accounts?: { id?: GoogleAccountsId } };
  }
}

let scriptLoad: Promise<void> | null = null;
// One Tap asks once per page load, however often the component remounts.
let oneTapOffered = false;

function loadScript(): Promise<void> {
  scriptLoad ??= new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = "https://accounts.google.com/gsi/client";
    el.async = true;
    el.onload = () => resolve();
    el.onerror = () => {
      scriptLoad = null;
      reject(new Error("Google sign-in script failed to load"));
    };
    document.head.appendChild(el);
  });
  return scriptLoad;
}

/** Signs in with Google's ID token; a guest links it instead, keeping their progress. */
async function signInWithGoogleToken(credential: string, nonce: string): Promise<void> {
  const supabase = createBrowserSupabase();
  const { data } = await supabase.auth.getSession();
  const google = { provider: "google" as const, token: credential, nonce };
  if (data.session?.user.is_anonymous) {
    const { error } = await supabase.auth.linkIdentity(google);
    if (!error) return;
    if (!isIdentityTaken(error)) throw error;
  }
  const { error } = await supabase.auth.signInWithIdToken(google);
  if (error) throw error;
}

const FAILED = "Google sign-in didn't complete. Please try again.";

export function GoogleSignIn({ next, oneTap = false }: { next: string | null; oneTap?: boolean }) {
  const router = useRouter();
  const slot = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState<boolean | null>(CLIENT_ID ? null : false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!CLIENT_ID || !slot.current) return;
    const el = slot.current;
    let live = true;

    async function finish(credential: string, nonce: string) {
      setBusy(true);
      setError(null);
      try {
        await signInWithGoogleToken(credential, nonce);
        const res = await finishGoogleSignIn(next);
        if (!res.ok) throw new Error(res.error);
        // Staying on this page (a lesson): refresh it for the new login rather than navigate.
        if (res.destination !== window.location.pathname + window.location.search) router.replace(res.destination);
        router.refresh();
      } catch (e) {
        console.error("Google sign-in failed", e instanceof Error ? e.message : e);
        if (live) {
          setBusy(false);
          setError(FAILED);
        }
      }
    }

    void (async () => {
      try {
        await loadScript();
        const id = window.google?.accounts?.id;
        if (!id || !live) {
          if (live) setDrawn(false);
          return;
        }
        const { raw, hashed } = await makeNonce();
        id.initialize({
          client_id: CLIENT_ID,
          nonce: hashed,
          context: "signin",
          use_fedcm_for_prompt: true,
          itp_support: true,
          cancel_on_tap_outside: true,
          callback: ({ credential }) => void finish(credential, raw),
        });
        id.renderButton(el, {
          type: "standard",
          theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "filled_black" : "outline",
          size: "large",
          text: "continue_with",
          shape: "rectangular",
          width: Math.min(400, Math.max(200, Math.floor(el.clientWidth))),
        });
        setDrawn(true);
        if (oneTap && !oneTapOffered) {
          oneTapOffered = true;
          id.prompt();
        }
      } catch {
        // Script blocked or offline: the redirect button below still works.
        if (live) setDrawn(false);
      }
    })();
    return () => {
      live = false;
    };
  }, [next, oneTap, router]);

  /** The redirect flow: Google, then Supabase, then /auth/callback. */
  async function redirectToGoogle() {
    setBusy(true);
    setError(null);
    const supabase = createBrowserSupabase();
    const { data } = await supabase.auth.getSession();
    const options = { redirectTo: callbackUrl(window.location.origin, next) };
    const { error: oauthError } = data.session?.user.is_anonymous
      ? await supabase.auth.linkIdentity({ provider: "google", options })
      : await supabase.auth.signInWithOAuth({ provider: "google", options });
    // On success the browser is already leaving for Google.
    if (oauthError) {
      console.error("Google redirect failed", oauthError.message);
      setBusy(false);
      setError(FAILED);
    }
  }

  return (
    <div aria-live="polite">
      {busy ? (
        <p className="flex min-h-11 items-center justify-center text-sm font-medium text-muted">Signing you in…</p>
      ) : drawn === false ? (
        <button type="button" onClick={redirectToGoogle} className={`${secondaryButton} w-full`}>
          <GoogleLogo className="h-4 w-4" />
          Continue with Google
        </button>
      ) : (
        // min-h stops the card jumping while Google draws its button.
        <div ref={slot} className="flex min-h-11 w-full justify-center" />
      )}
      {error && (
        <p role="alert" className="mt-3 rounded-xl bg-danger-surface px-3.5 py-2.5 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
  );
}
