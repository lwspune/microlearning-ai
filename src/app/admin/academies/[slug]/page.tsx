import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { addPeople } from "@/app/teach/people/actions";
import { ArrowLeftIcon } from "@/components/icons";
import { AddPeopleForm } from "@/components/people/AddPeopleForm";
import { PeopleList } from "@/components/people/PeopleList";
import { eyebrow } from "@/components/ui";
import { createSessionClient } from "@/lib/supabase/server";
import { academyPeople } from "@/server/people";
import { requireAreaAt } from "@/server/viewer";

export const metadata: Metadata = { title: "Academy" };

async function AcademyContent({ params }: { params: PageProps<"/admin/academies/[slug]">["params"] }) {
  await requireAreaAt("/admin");
  const { slug } = await params;
  // Read as the superadmin, so row level security applies.
  const supabase = await createSessionClient();
  const { data: academy, error } = await supabase.from("academies").select("id, name, slug").eq("slug", slug).maybeSingle();
  if (error) {
    console.error("admin academy: read failed", error.message);
    throw error;
  }
  if (!academy) notFound();
  const people = await academyPeople(academy.id);
  return (
    <>
      <p className={`${eyebrow} mt-6`}>Academy · {academy.slug}</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">{academy.name}</h1>
      <section aria-labelledby="add" className="mt-8">
        <h2 id="add" className="font-display text-2xl font-semibold">
          Add people
        </h2>
        <div className="mt-4">
          <AddPeopleForm action={addPeople.bind(null, { academyId: academy.id })} roles={["academy_admin", "teacher", "student"]} />
        </div>
      </section>
      <section aria-labelledby="everyone" className="mt-12">
        <h2 id="everyone" className="font-display text-2xl font-semibold">
          People ({people.length})
        </h2>
        <div className="mt-4">
          <PeopleList people={people} />
        </div>
      </section>
    </>
  );
}

export default function AcademyPage({ params }: PageProps<"/admin/academies/[slug]">) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <Link href="/admin" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground">
        <ArrowLeftIcon className="h-4 w-4" /> Admin
      </Link>
      <Suspense fallback={<p className="mt-6 text-muted">Loading…</p>}>
        <AcademyContent params={params} />
      </Suspense>
    </main>
  );
}
