import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters } from "@/content/chapters";
import { coveredIds, coursesIn, GROUPS, uniqueConcepts } from "@/content/courses";
import { reviewEnabled } from "@/lib/review";

export const metadata: Metadata = { title: "Course coverage" };

/**
 * Which concepts each course covers, for the owner to verify (PLAN.md
 * "Courses"). Draft coverage is shown here only; students see the whole
 * chapter until a course's list is approved in src/content/courses.ts.
 */
export default function CourseCoverageReview() {
  if (!reviewEnabled()) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
      <Link href="/review" className="text-sm font-medium text-muted hover:text-foreground">
        ← Content review
      </Link>
      <h1 className="mt-2 text-2xl font-semibold">Course coverage</h1>
      <p className="mt-2 max-w-3xl text-muted">
        ✓ covered · <span className="font-semibold">?</span> covered but doubtful · – not covered. A concept only one course
        covers is unique to it. Draft lists aren&apos;t shown to students yet: they see the whole chapter until a list is approved.
      </p>

      {GROUPS.map((group) => {
        const groupCourses = coursesIn(group.id);
        const pool = chapters.filter((c) => c.group === group.id);
        return (
          <section key={group.id} aria-labelledby={`g-${group.id}`} className="mt-10">
            <h2 id={`g-${group.id}`} className="text-xl font-semibold">
              {group.title}
            </h2>
            {pool.length === 0 && <p className="mt-2 text-muted">No chapters in this pool yet.</p>}
            {pool.map((chapter) => {
              const inChapter = groupCourses.filter((c) => c.chapters.some((e) => e.chapter === chapter.slug));
              const covered = new Map(inChapter.map((c) => [c.slug, coveredIds(c, chapter, { includeDraft: true })]));
              const unsure = new Map(
                inChapter.map((c) => [c.slug, new Set(c.chapters.find((e) => e.chapter === chapter.slug)?.coverage?.unsure ?? [])]),
              );
              const unique = uniqueConcepts(chapter, inChapter, { includeDraft: true });
              return (
                <div key={chapter.slug} className="mt-4 overflow-x-auto rounded-lg border border-border">
                  <table className="w-full min-w-[40rem] text-sm">
                    <caption className="px-4 py-3 text-left font-semibold">{chapter.title}</caption>
                    <thead className="bg-surface">
                      <tr>
                        <th scope="col" className="px-4 py-2 text-left">
                          Concept
                        </th>
                        {inChapter.map((c) => {
                          const status = c.chapters.find((e) => e.chapter === chapter.slug)?.coverage?.status ?? "whole chapter";
                          return (
                            <th key={c.slug} scope="col" className="px-3 py-2 text-center">
                              {c.short}
                              <span className={`block text-xs font-medium ${status === "approved" ? "text-success" : "text-muted"}`}>
                                {status} · {covered.get(c.slug)!.size}
                              </span>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {chapter.graph.map((n) => (
                        <tr key={n.id}>
                          <th scope="row" className="px-4 py-2 text-left font-normal">
                            <span className="font-mono text-muted">{n.id}</span> {n.title}
                            {unique.has(n.id) && (
                              <span className="ml-2 rounded bg-accent-soft px-1.5 text-xs font-medium text-accent">
                                only {inChapter.find((c) => c.slug === unique.get(n.id))!.short}
                              </span>
                            )}
                          </th>
                          {inChapter.map((c) => {
                            const has = covered.get(c.slug)!.has(n.id);
                            const doubt = unsure.get(c.slug)!.has(n.id);
                            return (
                              <td
                                key={c.slug}
                                className={`px-3 py-2 text-center ${doubt ? "bg-warning-surface font-semibold" : has ? "text-success" : "text-muted"}`}
                              >
                                {doubt ? "?" : has ? "✓" : "–"}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </section>
        );
      })}
    </main>
  );
}
