import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { RevealList } from "@/components/RevealList";
import { linkCardShape } from "@/components/ui";
import { chapters } from "@/content/chapters";
import { type Course, courseSize, coursesIn, GROUPS, parseGroup, SUBJECTS } from "@/content/courses";
import type { GroupId } from "@/content/types";
import { rememberedGroupValue } from "@/server/courses";
import { GroupTabs } from "./GroupTabs";

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

function CourseCard({ course, index }: { course: Course; index: number }) {
  const size = courseSize(course, chapters);
  const soon = size.concepts === 0;
  const subjects = [...new Set(course.chapters.map((e) => chapters.find((c) => c.slug === e.chapter)!.subject))];
  return (
    <li className="reveal-item" style={{ "--i": index } as CSSProperties}>
      <Link
        href={`/courses/${course.slug}`}
        className={`${linkCardShape} spot group relative flex h-full flex-col overflow-hidden border-border bg-card p-6 hover:border-border-strong`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-2 font-display text-8xl font-semibold tracking-tight text-accent-soft select-none"
        >
          {course.short.split(/[\s-]/)[0]}
        </span>
        <span className="relative font-display text-2xl font-semibold">{course.short}</span>
        <span className="relative mt-1 block max-w-[85%] text-muted">{course.tagline}</span>
        <span className="relative mt-auto flex items-center justify-between gap-3 pt-8 text-sm font-medium text-muted">
          {soon ? (
            <>
              <span>Chapters on the way</span>
              <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold">Coming soon</span>
            </>
          ) : (
            <>
              <span>{[...subjects.map((s) => SUBJECTS[s]), plural(size.chapters, "chapter"), plural(size.concepts, "concept")].join(" · ")}</span>
              <ArrowRightIcon className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </>
          )}
        </span>
      </Link>
    </li>
  );
}

function Picker({ initial }: { initial: GroupId }) {
  const panels = Object.fromEntries(
    GROUPS.map((g) => [
      g.id,
      <RevealList key={g.id} spotlight className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coursesIn(g.id).map((c, i) => (
          <CourseCard key={c.slug} course={c} index={i} />
        ))}
      </RevealList>,
    ]),
  ) as Record<GroupId, React.ReactNode>;
  return <GroupTabs groups={GROUPS} initial={initial} panels={panels} />;
}

/** The course picker, opened on the group this browser chose before (11th + 12th by default). */
export async function CoursePicker() {
  return <Picker initial={parseGroup(await rememberedGroupValue()) ?? "school"} />;
}

/** Shown while the remembered group is read. */
export function CoursePickerFallback() {
  return <Picker initial="school" />;
}
