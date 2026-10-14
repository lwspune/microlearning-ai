import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChapterMapSection, MapSkeleton } from "@/components/ChapterMap";
import { ArrowLeftIcon } from "@/components/icons";
import { eyebrow } from "@/components/ui";
import { chapters } from "@/content/chapters";
import { courses, coveredIds, findCourse } from "@/content/courses";

export function generateStaticParams() {
  return courses.flatMap((c) => c.chapters.map((e) => ({ course: c.slug, chapter: e.chapter })));
}

function find(courseSlug: string, chapterSlug: string) {
  const course = findCourse(courseSlug);
  const chapter = chapters.find((c) => c.slug === chapterSlug);
  if (!course || !chapter || !course.chapters.some((e) => e.chapter === chapter.slug)) return null;
  return { course, chapter };
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
  const { course, chapter } = found;
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
      <ChapterMapSection slug={chapter.slug} course={{ slug: course.slug, scope: coveredIds(course, chapter) }} />
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
