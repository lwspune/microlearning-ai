import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeftIcon } from "@/components/icons";
import { AddPeopleForm } from "@/components/people/AddPeopleForm";
import { PeopleList } from "@/components/people/PeopleList";
import { card, eyebrow } from "@/components/ui";
import type { Role } from "@/lib/auth/routing";
import { academyPeople } from "@/server/people";
import { requireAreaAt } from "@/server/viewer";
import { addPeople } from "./actions";

export const metadata: Metadata = { title: "People" };

/** Who each staff role may add (the database checks again: can_create_person). */
const ADDS: Partial<Record<Role, Role[]>> = { academy_admin: ["student", "teacher"], teacher: ["student"] };

async function PeopleContent() {
  const { profile } = await requireAreaAt("/teach/people");
  if (!profile.academyId) {
    // The superadmin belongs to no academy; they manage people from each academy's admin page.
    return (
      <div className={`${card} mt-8 p-6`}>
        <p className="font-medium">You aren&apos;t in an academy.</p>
        <p className="mt-1 text-muted">
          Add and see people from each academy&apos;s page in{" "}
          <Link href="/admin" className="font-medium text-accent underline underline-offset-4">
            Admin
          </Link>
          .
        </p>
      </div>
    );
  }
  const people = await academyPeople(profile.academyId);
  const roles = ADDS[profile.role] ?? [];
  return (
    <>
      <section aria-labelledby="add" className="mt-8">
        <h2 id="add" className="font-display text-2xl font-semibold">
          Add people
        </h2>
        <div className="mt-4">
          <AddPeopleForm action={addPeople.bind(null, { academyId: null })} roles={roles} />
        </div>
      </section>
      <section aria-labelledby="everyone" className="mt-12">
        <h2 id="everyone" className="font-display text-2xl font-semibold">
          Everyone in your academy ({people.length})
        </h2>
        <div className="mt-4">
          <PeopleList people={people} />
        </div>
      </section>
    </>
  );
}

export default function PeoplePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <Link href="/teach" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground">
        <ArrowLeftIcon className="h-4 w-4" /> Teach
      </Link>
      <p className={`${eyebrow} mt-6`}>Teach</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">People</h1>
      <Suspense fallback={<p className="mt-8 text-muted">Loading…</p>}>
        <PeopleContent />
      </Suspense>
    </main>
  );
}
