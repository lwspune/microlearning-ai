import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { card, eyebrow } from "@/components/ui";
import { createSessionClient } from "@/lib/supabase/server";
import { requireAreaAt } from "@/server/viewer";
import { CreateAcademyForm } from "./CreateAcademyForm";

export const metadata: Metadata = { title: "Admin" };

async function AdminHomeContent() {
  const { profile } = await requireAreaAt("/admin");
  // Read as the superadmin, so row level security applies.
  const supabase = await createSessionClient();
  const { data: academies, error } = await supabase.from("academies").select("id, name, slug").order("name");
  if (error) {
    console.error("admin: academies read failed", error.message);
    throw error;
  }
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <p className={eyebrow}>Admin</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Welcome, {profile.fullName}</h1>
      <p className="mt-2 max-w-2xl text-muted">The whole platform: academies, their teachers and students.</p>

      <section aria-labelledby="academies" className="mt-10">
        <h2 id="academies" className="font-display text-2xl font-semibold">
          Academies
        </h2>
        <div className={`${card} mt-4 p-6`}>
          <h3 className="font-semibold">New academy</h3>
          <div className="mt-3">
            <CreateAcademyForm />
          </div>
        </div>
        {academies.length === 0 ? (
          <p className="mt-4 text-muted">No academies yet.</p>
        ) : (
          <ul className={`${card} mt-4 divide-y divide-border`}>
            {academies.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/admin/academies/${a.slug}`}
                  className="group flex items-center justify-between gap-3 px-6 py-4 transition-colors hover:bg-surface"
                >
                  <span className="font-medium">{a.name}</span>
                  <span className="flex items-center gap-3 font-mono text-sm text-muted">
                    {a.slug}
                    <ArrowRightIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

/**
 * Who may be here is checked inside the boundary (requireAreaAt: sign in, or
 * off to your own area). Every page in this area does the same; a session read
 * never sits in a layout (Next.js: authentication with Cache Components).
 */
export default function AdminHome() {
  return (
    <Suspense fallback={<p className="mx-auto w-full max-w-5xl px-4 py-12 text-muted sm:px-6">Loading…</p>}>
      <AdminHomeContent />
    </Suspense>
  );
}
