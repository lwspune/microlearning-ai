"use client";

import Link from "next/link";
import { LessonStage } from "@/lessons/LessonStage";
import type { ConceptSession } from "@/server/learning";
import { QuestionPanel } from "./QuestionPanel";
import { withCourse } from "@/content/courses";

type Open = Extract<ConceptSession, { kind: "open" }>;

/** A concept as full-screen slides: swipe, arrow keys or Back/Next; questions are the last slide. */
export type RefresherInfo = { title: string; href: string };

export function SlideDeck({
  chapterHref,
  mapHref,
  course,
  conceptSlug,
  session,
  refresher,
}: {
  chapterHref: string;
  mapHref: string;
  course?: string;
  conceptSlug: string;
  session: Open;
  /** Set when the learner was sent here to fix a gap in a later concept. */
  refresher: RefresherInfo | null;
}) {
  const { slides } = session;
  const questionsIndex = slides.findIndex((s) => s.kind === "questions");
  const startedBefore = session.progress.state === "learning" || session.progress.state === "mastered";

  return (
    <LessonStage
      slides={slides}
      label={`${session.title} lesson`}
      // A refresher always starts at the beginning: rereading is the point.
      startIndex={startedBefore && !refresher ? questionsIndex : 0}
      banner={
        refresher && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-warning-surface px-5 py-2.5 text-sm">
            <span>
              <span className="font-semibold">Refresher</span> for {refresher.title}
            </span>
            <Link href={refresher.href} className="font-medium text-accent underline underline-offset-2">
              Back to {refresher.title} →
            </Link>
          </div>
        )
      }
      questions={({ active, reread }) => (
        // Kept mounted so the current question and its feedback survive a trip back through the slides.
        <div hidden={!active} className="mx-auto mt-2 max-w-3xl md:text-lg">
          <QuestionPanel
            title={session.title}
            chapterHref={chapterHref}
            mapHref={mapHref}
            course={course}
            conceptSlug={conceptSlug}
            refresher={refresher}
            initialQuestion={session.question}
            progress={session.progress}
            nextConcept={session.nextConcept && { href: withCourse(`${chapterHref}/${session.nextConcept.slug}`, course), title: session.nextConcept.title }}
            onReread={reread}
          />
        </div>
      )}
    />
  );
}
