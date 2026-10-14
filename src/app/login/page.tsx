import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { card, eyebrow } from "@/components/ui";
import { homeFor } from "@/lib/auth/routing";
import { currentViewer } from "@/server/viewer";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Sign in", robots: { index: false } };

async function SignIn({ searchParams }: { searchParams: PageProps<"/login">["searchParams"] }) {
  const viewer = await currentViewer();
  if (viewer?.profile) redirect(homeFor(viewer.profile.role));
  // Passed to the action, which checks it (safeNext) before using it.
  const raw = (await searchParams).next;
  const next = typeof raw === "string" && raw.length <= 300 ? raw : null;
  return <LoginForm next={next} />;
}

export default function LoginPage({ searchParams }: PageProps<"/login">) {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-12 sm:px-6">
      <p className={eyebrow}>Teachers and academies</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Sign in</h1>
      <p className="mt-2 text-muted">Your academy creates your login.</p>
      <div className={`${card} mt-8 p-6`}>
        <Suspense fallback={<p className="text-muted">Loading…</p>}>
          <SignIn searchParams={searchParams} />
        </Suspense>
      </div>
      <p className="mt-6 text-sm text-muted">
        Learning on your own?{" "}
        <Link href="/learn" className="font-medium text-accent underline underline-offset-4">
          Start as a guest
        </Link>{" "}
        instead; no login needed.
      </p>
    </main>
  );
}
