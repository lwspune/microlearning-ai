/**
 * Google sign-in, the pure parts (tested). Ported from PYQ Vault's
 * lib/auth/oneTap.ts. The browser side is components/auth/GoogleSignIn.tsx;
 * the profile a new Google login gets is claim_student_profile() in the
 * database.
 */

const CLIENT_ID_RE = /^[0-9]+-[a-z0-9]+\.apps\.googleusercontent\.com$/;

/**
 * The build-time NEXT_PUBLIC_GOOGLE_CLIENT_ID, or null. Anything not shaped
 * like a Google web client id turns Google's own button and One Tap off, which
 * leaves the redirect button (PYQ Vault once had a dashboard URL pasted here).
 */
export function resolveGoogleClientId(raw: string | null | undefined): string | null {
  const id = (raw ?? "").trim();
  return CLIENT_ID_RE.test(id) ? id : null;
}

const hex = (bytes: Uint8Array) => Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");

/**
 * A fresh nonce pair. Google embeds `hashed` in the ID token; Supabase is
 * handed `raw`, hashes it and must find a match, so a token lifted from
 * elsewhere can't be replayed.
 */
export async function makeNonce(): Promise<{ raw: string; hashed: string }> {
  const raw = hex(crypto.getRandomValues(new Uint8Array(32)));
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
  return { raw, hashed: hex(new Uint8Array(digest)) };
}

/**
 * A guest tried to link a Google account that already has its own login: the
 * Google identity itself, or its email (e.g. an academy-made password login).
 * Signing in instead lands on that login.
 */
export function isIdentityTaken(error: { code?: string } | null): boolean {
  return error?.code === "identity_already_exists" || error?.code === "email_exists";
}

/** Where Supabase's redirect flow returns to: /auth/callback, keeping `next`. */
export function callbackUrl(origin: string, next: string | null): string {
  return `${origin}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ""}`;
}
