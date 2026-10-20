import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { GoogleSignIn } from "@/components/auth/GoogleSignIn";
import { card, eyebrow } from "@/components/ui";
import { homeFor } from "@/lib/auth/routing";
import { currentViewer } from "@/server/viewer";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Sign in", robots: { index: false } };

/** Set by /auth/callback when Google's redirect flow didn't end in a session. */
const GOOGLE_ERRORS: Record<string, string> = {
  google: "Google sign-in didn't complete. Please try again.",
  "google-taken": "That Google account already has its own login. Sign out, then continue with Google to use it.",
};

async function SignIn({ searchParams }: { searchParams: PageProps<"/login">["searchParams"] }) {
  const viewer = await currentViewer();
  if (viewer?.profile) redirect(homeFor(viewer.profile.role));
  const sp = await searchParams;
  // Passed on, and checked (safeNext) before it is used.
  const next = typeof sp.next === "string" && sp.next.length <= 300 ? sp.next : null;
  const googleError = typeof sp.error === "string" ? GOOGLE_ERRORS[sp.error] : undefined;
  return (
    <>
      {googleError && (
        <p role="alert" className="mb-5 rounded-xl bg-danger-surface px-3.5 py-2.5 text-sm font-medium text-danger">
          {googleError}
        </p>
      )}
      <GoogleSignIn next={next} />
      <p className="my-6 flex items-center gap-3 text-sm text-muted before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
        or with your academy login
      </p>
      <LoginForm next={next} />
    </>
  );
}

export default function LoginPage({ searchParams }: PageProps<"/login">) {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-12 sm:px-6">
      <p className={eyebrow}>Students, teachers and academies</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Sign in</h1>
      <p className="mt-2 text-muted">Students: continue with Google. Academy logins: email or username below.</p>
      <div className={`${card} mt-8 p-6`}>
        <Suspense fallback={<p className="text-muted">Loading…</p>}>
          <SignIn searchParams={searchParams} />
        </Suspense>
      </div>
      <p className="mt-6 text-sm text-muted">
        Just trying it out?{" "}
        <Link href="/learn" className="font-medium text-accent underline underline-offset-4">
          Start as a guest
        </Link>{" "}
        instead; no login needed.
      </p>
      <p className="mt-2 text-sm text-muted">
        <Link href="/privacy" className="font-medium text-accent underline underline-offset-4">
          Privacy
        </Link>
        : how we use your information.
      </p>
    </main>
  );
}
