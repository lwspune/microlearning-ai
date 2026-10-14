import type { Metadata } from "next";
import { Suspense } from "react";
import { CoursePicker, CoursePickerFallback } from "@/components/courses/CoursePicker";
import { eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Learn" };

export default function LearnIndex() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <p className={eyebrow}>Learn</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">Choose your course</h1>
      <div className="mt-8">
        <Suspense fallback={<CoursePickerFallback />}>
          <CoursePicker />
        </Suspense>
      </div>
    </main>
  );
}
