import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeftIcon } from "@/components/icons";
import { card, eyebrow } from "@/components/ui";
import { academyStudentSummaries } from "@/server/performance";
import { requireAreaAt } from "@/server/viewer";
import { type StudentRow, StudentTable } from "./StudentTable";

export const metadata: Metadata = { title: "Students" };

async function StudentsContent() {
  const { profile } = await requireAreaAt("/teach/students");
  if (!profile.academyId) {
    // The superadmin belongs to no academy; they reach students from each academy's page.
    return (
      <div className={`${card} mt-8 p-6`}>
        <p className="font-medium">You aren&apos;t in an academy.</p>
        <p className="mt-1 text-muted">
          Open an academy in{" "}
          <Link href="/admin" className="font-medium text-accent underline underline-offset-4">
            Admin
          </Link>{" "}
          and choose a student from its people.
        </p>
      </div>
    );
  }
  const students: StudentRow[] = await academyStudentSummaries(profile.academyId);
  if (students.length === 0) {
    return (
      <p className={`${card} mt-8 p-6 text-muted`}>
        No students yet. Add them on{" "}
        <Link href="/teach/people" className="font-medium text-accent underline underline-offset-4">
          People
        </Link>
        .
      </p>
    );
  }
  return (
    <div className="mt-8">
      <StudentTable students={students} />
    </div>
  );
}

export default function StudentsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <Link href="/teach" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground">
        <ArrowLeftIcon className="h-4 w-4" /> Teach
      </Link>
      <p className={`${eyebrow} mt-6`}>Teach</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Students</h1>
      <p className="mt-2 max-w-2xl text-muted">How each student in your academy is doing. Open a name for concept-by-concept detail.</p>
      <Suspense fallback={<p className="mt-8 text-muted">Loading…</p>}>
        <StudentsContent />
      </Suspense>
    </main>
  );
}
