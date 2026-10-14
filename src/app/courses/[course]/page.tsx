import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { ProgressRing } from "@/components/ProgressRing";
import { card, eyebrow, linkCard } from "@/components/ui";
import { byStandard, courses, findCourse, GROUPS, SUBJECTS } from "@/content/courses";
import type { Standard, SubjectId } from "@/content/types";
import { currentUserId } from "@/lib/supabase/server";
import { type CourseChapterProgress, courseProgress } from "@/server/courses";

const STANDARD_TITLE: Record<Standard, string> = { 11: "11th", 12: "12th" };

export function generateStaticParams() {
  return courses.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/courses/[course]">): Promise<Metadata> {
  const { course } = await params;
  return { title: findCourse(course)?.title ?? "Course" };
}

function ChapterCard({ course, ch }: { course: string; ch: CourseChapterProgress }) {
  if (ch.total === 0) {
    // Nothing published yet: no link, since its map has nothing to open.
    return (
      <div className={`${card} flex items-center justify-between gap-5 p-5`}>
        <span className="min-w-0">
          <span className="block font-display text-xl font-semibold">{ch.title}</span>
          <span className="mt-0.5 block text-sm text-muted">Concepts appear here as soon as each one is checked.</span>
        </span>
        <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold">Coming soon</span>
      </div>
    );
  }
  return (
    <Link href={`/courses/${course}/${ch.slug}`} className={`${linkCard} group flex items-center gap-5 p-5`}>
      <ProgressRing value={ch.mastered} max={ch.total} size={56} label={`${ch.mastered} of ${ch.total} concepts mastered`} />
      <span className="min-w-0 flex-1">
        <span className="block font-display text-xl font-semibold">{ch.title}</span>
        <span className="mt-0.5 block text-sm text-muted tabular-nums">
          {ch.mastered} of {ch.total} concepts mastered
        </span>
      </span>
      <ArrowRightIcon className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}

async function Chapters({ slug }: { slug: string }) {
  const course = findCourse(slug)!;
  const progress = await courseProgress(course, await currentUserId());
  const subjects = [...new Set(progress.map((p) => p.subject))] as SubjectId[];
  return subjects.map((s) => (
    <section key={s} aria-labelledby={`subject-${s}`} className="mt-10">
      <h2 id={`subject-${s}`} className="font-display text-2xl font-semibold">
        {SUBJECTS[s]}
      </h2>
      {byStandard(progress.filter((p) => p.subject === s)).map(({ standard, chapters }) => (
        <div key={standard ?? "none"} className="mt-4">
          {standard && <h3 className={`${eyebrow} mt-6`}>{STANDARD_TITLE[standard]}</h3>}
          <ul className="mt-3 grid gap-3">
            {chapters.map((ch) => (
              <li key={ch.slug}>
                <ChapterCard course={slug} ch={ch} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  ));
}

async function CourseContent({ params }: { params: PageProps<"/courses/[course]">["params"] }) {
  const { course: slug } = await params;
  const course = findCourse(slug);
  if (!course) notFound();
  const group = GROUPS.find((g) => g.id === course.group)!;

  return (
    <>
      <p className={`${eyebrow} mt-6`}>{group.title}</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">{course.title}</h1>
      <p className="mt-2 text-muted">{course.tagline}</p>
      {course.chapters.length === 0 ? (
        <div className={`${card} mt-8 p-6`}>
          <h2 className="font-display text-xl font-semibold">Coming soon</h2>
          <p className="mt-1 text-muted">We&apos;re writing this course now. Chapters appear here as soon as each one is checked.</p>
        </div>
      ) : (
        <>
          <p className="mt-4 text-sm text-muted">
            Concepts are shared across your {group.title} courses, so anything you master here counts in the others too.
          </p>
          <Suspense fallback={<p className="mt-10 text-muted">Loading your progress…</p>}>
            <Chapters slug={course.slug} />
          </Suspense>
        </>
      )}
    </>
  );
}

export default function CoursePage({ params }: PageProps<"/courses/[course]">) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground">
        <ArrowLeftIcon className="h-4 w-4" /> All courses
      </Link>
      <Suspense fallback={<p className="mt-6 text-muted">Loading…</p>}>
        <CourseContent params={params} />
      </Suspense>
    </main>
  );
}
