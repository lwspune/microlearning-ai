import { describe, expect, it } from "vitest";
import { callbackUrl, isIdentityTaken, makeNonce, resolveGoogleClientId } from "./google";

/** Google sign-in: the pure parts (client id check, nonce, link errors, callback URL). */

describe("resolveGoogleClientId", () => {
  it("accepts a Google web client id, trimmed", () => {
    expect(resolveGoogleClientId(" 1234567890-abc123def.apps.googleusercontent.com\n")).toBe(
      "1234567890-abc123def.apps.googleusercontent.com",
    );
  });

  it("turns Google's button off for anything else, so the redirect button is used instead", () => {
    for (const raw of [undefined, null, "", "https://xnfv.supabase.co", "abc.apps.googleusercontent.com", "123-abc.apps.googleusercontent.com.evil.test"]) {
      expect(resolveGoogleClientId(raw), String(raw)).toBeNull();
    }
  });
});

describe("makeNonce", () => {
  it("returns a fresh random value and its SHA-256, which Google embeds and Supabase checks", async () => {
    const a = await makeNonce();
    const b = await makeNonce();
    expect(a.raw).toMatch(/^[0-9a-f]{64}$/);
    expect(a.raw).not.toBe(b.raw);
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(a.raw));
    expect(a.hashed).toBe(Buffer.from(digest).toString("hex"));
  });
});

describe("isIdentityTaken", () => {
  it("is true only when the Google account, or its email, already belongs to another login", () => {
    expect(isIdentityTaken({ code: "identity_already_exists" })).toBe(true);
    expect(isIdentityTaken({ code: "email_exists" })).toBe(true);
    expect(isIdentityTaken({ code: "manual_linking_disabled" })).toBe(false);
    expect(isIdentityTaken(null)).toBe(false);
  });
});

describe("callbackUrl", () => {
  it("returns to /auth/callback on this site, carrying `next` when there is one", () => {
    expect(callbackUrl("https://www.conceptladder.in", "/learn/circle?course=mht-cet")).toBe(
      "https://www.conceptladder.in/auth/callback?next=%2Flearn%2Fcircle%3Fcourse%3Dmht-cet",
    );
    expect(callbackUrl("http://localhost:3000", null)).toBe("http://localhost:3000/auth/callback");
  });
});
