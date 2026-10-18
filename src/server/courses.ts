import "server-only";
import { cookies } from "next/headers";
import { chapters } from "@/content/chapters";
import { type Course, coveredIds } from "@/content/courses";
import type { Standard, SubjectId } from "@/content/types";
import { getChapterMap } from "@/server/learning";

/** The student's group (K-12 or Graduates), remembered per browser until profiles exist. */
export const GROUP_COOKIE = "ml_group";

/** The student's standard (11 or 12), picked on a board's page; one choice for every board. */
export const STANDARD_COOKIE = "ml_standard";

export async function rememberedGroupValue(): Promise<string | undefined> {
  return (await cookies()).get(GROUP_COOKIE)?.value;
}

export async function rememberedStandardValue(): Promise<string | undefined> {
  return (await cookies()).get(STANDARD_COOKIE)?.value;
}

export type CourseChapterProgress = { slug: string; title: string; subject: SubjectId; standard?: Standard; total: number; mastered: number };

/** Each chapter of the course with the learner's progress on the concepts it covers (shared across the group). */
export async function courseProgress(course: Course, userId: string | null): Promise<CourseChapterProgress[]> {
  return Promise.all(
    course.chapters.map(async (entry) => {
      const chapter = chapters.find((c) => c.slug === entry.chapter)!;
      const map = await getChapterMap(chapter.slug, userId, coveredIds(course, chapter));
      const open = (map?.groups ?? []).flatMap((g) => g.concepts).filter((c) => c.state !== "unpublished");
      return {
        slug: chapter.slug,
        title: chapter.title,
        subject: chapter.subject,
        standard: chapter.standard,
        total: open.length,
        mastered: open.filter((c) => c.state === "mastered").length,
      };
    }),
  );
}

