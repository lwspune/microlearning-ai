import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChapterMapSection, MapSkeleton } from "@/components/ChapterMap";
import { ArrowLeftIcon, ExternalIcon } from "@/components/icons";
import { eyebrow } from "@/components/ui";
import { chapters } from "@/content/chapters";
import { courses, findCourse, partScope, practiceLink, resolveEntry, slugOf } from "@/content/courses";

export function generateStaticParams() {
  return courses.flatMap((c) => c.chapters.map((e) => ({ course: c.slug, chapter: slugOf(e) })));
}

/** The course and its chapter at `chapterSlug`, or null. */
function find(courseSlug: string, chapterSlug: string) {
  const course = findCourse(courseSlug);
  const entry = course?.chapters.find((e) => slugOf(e) === chapterSlug);
  if (!course || !entry) return null;
  return { course, chapter: resolveEntry(entry, chapters), practice: practiceLink(course, entry) };
}

export async function generateMetadata({ params }: PageProps<"/courses/[course]/[chapter]">): Promise<Metadata> {
  const { course, chapter } = await params;
  const found = find(course, chapter);
  return { title: found ? `${found.chapter.title} · ${found.course.short}` : "Chapter" };
}

async function CourseChapterContent({ params }: { params: PageProps<"/courses/[course]/[chapter]">["params"] }) {
  const { course: courseSlug, chapter: chapterSlug } = await params;
  const found = find(courseSlug, chapterSlug);
  if (!found) notFound();
  const { course, chapter, practice } = found;
  return (
    <>
      <Link
        href={`/courses/${course.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
      >
        <ArrowLeftIcon className="h-4 w-4" /> {course.title}
      </Link>
      <p className={`${eyebrow} mt-6`}>{course.short} · Chapter</p>
      <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">{chapter.title}</h1>
      <p className="mt-2 text-muted">The concepts {course.short} needs, one connected idea at a time.</p>
      {practice && (
        <a
          href={practice.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-4"
        >
          {practice.label}
          <ExternalIcon className="h-4 w-4" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
      <ChapterMapSection
        parts={chapter.parts.map((p) => ({ slug: p.chapter.slug, scope: partScope(course, p, p.chapter) }))}
        course={course.slug}
      />
    </>
  );
}

export default function CourseChapterPage({ params }: PageProps<"/courses/[course]/[chapter]">) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Suspense fallback={<MapSkeleton />}>
        <CourseChapterContent params={params} />
      </Suspense>
    </main>
  );
}
