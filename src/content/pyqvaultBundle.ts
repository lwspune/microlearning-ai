import { type Course, partScope, partsOf, resolveEntry } from "./courses.ts";
import { type SeedPayload, toSeedPayload } from "./seedPayload.ts";
import type { Chapter, ConceptId, Standard, SubjectId } from "./types.ts";

/**
 * The content PYQ Vault imports for its Learn tab (PLAN.md "Learn tab on PYQ Vault"): some
 * courses' chapters for one standard and subject, each with the concepts it shows, plus the
 * seed payload of every pool chapter they use. PYQ Vault seeds these into its own tables; it
 * never reads this app's code or database, so everything it needs is worked out here.
 */

/**
 * A course to export, and the PYQ Vault exam (its URL slug) its students pick. `standard` keeps
 * one school year (a board course); without it every year goes (an entrance exam like NDA).
 */
export type BundleTarget = { course: string; exam: string; subject: SubjectId; standard?: Standard };

export type BundleCourseChapter = {
  slug: string;
  title: string;
  standard: Standard;
  /** Its chapter's slug on PYQ Vault, when the catalog names one. */
  pyqvault: string | null;
  /** Pool chapters in teaching order, each with the concepts (graph order) the course shows. */
  parts: { chapter: string; concepts: ConceptId[] }[];
};

export type BundleCourse = {
  /** `<exam>-<subject>`: PYQ Vault keys a course by the exam a student picks. */
  slug: string;
  title: string;
  exam: string;
  subject: SubjectId;
  /** The target's standard, or the highest of its chapters' when it takes every year. */
  standard: Standard;
  chapters: BundleCourseChapter[];
};

export type PyqVaultBundle = { courses: BundleCourse[]; chapters: SeedPayload[] };

/** The pilot: Std XII Maths for the Maharashtra Board and CBSE (owner, 2026-10-27); NDA Maths, both years (owner, 2026-11-22). */
export const PYQVAULT_TARGETS: BundleTarget[] = [
  { course: "mh-board", exam: "mh-hsc-12", subject: "maths", standard: 12 },
  { course: "cbse", exam: "cbse-12", subject: "maths", standard: 12 },
  { course: "nda", exam: "nda", subject: "maths" },
];

/** `verified` must only be true when the sympy verifier has passed for these chapters. */
export function pyqvaultBundle(targets: BundleTarget[], catalog: Course[], chapters: Chapter[], verified: boolean): PyqVaultBundle {
  const used = new Set<string>();
  const out = targets.map((target): BundleCourse => {
    const course = catalog.find((c) => c.slug === target.course);
    if (!course) throw new Error(`no course ${target.course}`);
    const courseChapters = course.chapters.flatMap((entry): BundleCourseChapter[] => {
      const resolved = resolveEntry(entry, chapters);
      if (resolved.subject !== target.subject) return [];
      if (target.standard !== undefined && resolved.standard !== target.standard) return [];
      const standard = resolved.standard;
      if (standard === undefined) throw new Error(`${course.slug}: chapter ${resolved.slug} has no standard`);
      const parts = partsOf(entry).map((part) => {
        const pool = chapters.find((c) => c.slug === part.chapter)!;
        const scope = partScope(course, part, pool);
        used.add(pool.slug);
        return { chapter: pool.slug, concepts: pool.graph.map((n) => n.id).filter((id) => scope.has(id)) };
      });
      return [{ slug: resolved.slug, title: resolved.title, standard, pyqvault: entry.pyqvault ?? null, parts }];
    });
    const highest = Math.max(...courseChapters.map((c) => c.standard)) as Standard;
    return {
      slug: `${target.exam}-${target.subject}`,
      title: course.title,
      exam: target.exam,
      subject: target.subject,
      standard: target.standard ?? highest,
      chapters: courseChapters,
    };
  });
  return {
    courses: out,
    chapters: chapters.filter((c) => used.has(c.slug)).map((c) => toSeedPayload(c, verified)),
  };
}
