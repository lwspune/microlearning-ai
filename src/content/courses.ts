import type { Chapter, ConceptId, GroupId, Standard, SubjectId } from "./types.ts";

/**
 * The course catalog: group → course → chapters (PLAN.md "Courses").
 *
 * Each group has one concept pool. A course covers some of its group's
 * concepts; mastery is per concept, so a concept mastered once counts in every
 * course that covers it. Which concepts a course covers is verified with the
 * owner: coverage stays `draft` (shown only on /review/courses) until they
 * approve it, and until then students see the whole chapter.
 */

export type Coverage = {
  ids: ConceptId[];
  /** Concepts kept in the list but doubtful; marked on the review grid. */
  unsure?: ConceptId[];
  status: "draft" | "approved";
};

/** A chapter in a course. No coverage: the course covers the whole chapter. */
export type CourseChapter = { chapter: string; coverage?: Coverage };

export type Course = {
  slug: string;
  title: string;
  /** For cards and chips: "JEE Main". */
  short: string;
  group: GroupId;
  tagline: string;
  chapters: CourseChapter[];
};

export type Group = { id: GroupId; title: string; blurb: string };

export const GROUPS: Group[] = [
  { id: "school", title: "11th + 12th", blurb: "Boards and entrance exams, alongside Class 11 and 12." },
  { id: "graduate", title: "Graduates", blurb: "Defence and services exams after graduation." },
];

export const SUBJECTS: Record<SubjectId, string> = { maths: "Maths" };

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `C${String(from + i).padStart(2, "0")}`);

// Complex Numbers coverage, drafted from the syllabi 2026-10-14; awaiting the owner's check.
const CN_ALL = [...range(1, 8), "C10", "C11", "C12", "C14", "C15", "C16", "C19"];
const CN_LOCI = range(24, 27);

// MH Board and MHT-CET: what the Std XI book teaches, settled against its text and every exercise
// (and MHT-CET's 2026 papers); approved by the owner 2026-10-18. The book has circle and
// perpendicular-bisector loci but no rotation, nth roots beyond cube roots, modulus bounds, or
// argument and algebraic loci (C13, C18, C22, C26, C27).
const cnMaharashtra: Coverage = {
  ids: [...CN_ALL, "C09", "C17", "C20", "C21", "C23", "C24", "C25"],
  status: "approved",
};

// Linear Programming coverage, approved by the owner 2026-10-15. Class 12 in both boards and
// MHT-CET; JEE Main dropped it in 2024 and NDA's syllabus doesn't list it. C10 (unbounded
// regions) is no longer doubtful for MH Board and MHT-CET: the HSC papers ask it (2026-10-18).
const lpp = (unsure: string[]): CourseChapter => ({
  chapter: "linear-programming",
  coverage: { ids: range(1, 13), unsure, status: "approved" },
});

export const courses: Course[] = [
  {
    slug: "mh-board",
    title: "Maharashtra Board 11th + 12th",
    short: "MH Board",
    group: "school",
    tagline: "Maharashtra State Board, HSC Science",
    // Book order: Std XI Part 1, then Part 2, then Std XII. A chapter without coverage is covered whole.
    chapters: [
      { chapter: "angle-measurement" },
      { chapter: "trigonometric-functions" },
      { chapter: "compound-and-multiple-angles" },
      { chapter: "determinants-and-matrices" },
      { chapter: "straight-line" },
      { chapter: "circle" },
      { chapter: "conic-sections" },
      { chapter: "measures-of-dispersion" },
      { chapter: "probability" },
      { chapter: "functions" },
      { chapter: "limits" },
      { chapter: "continuity" },
      { chapter: "differentiation" },
      { chapter: "complex-numbers", coverage: cnMaharashtra },
      { chapter: "sequences-and-series" },
      { chapter: "permutations-and-combinations" },
      { chapter: "binomial-theorem" },
      { chapter: "sets-and-relations" },
      { chapter: "mathematical-logic" },
      { chapter: "matrices" },
      { chapter: "trigonometric-functions-12" },
      lpp([]),
    ],
  },
  {
    slug: "cbse",
    title: "CBSE 11th + 12th",
    short: "CBSE",
    group: "school",
    tagline: "CBSE Science, NCERT syllabus",
    chapters: [{ chapter: "complex-numbers", coverage: { ids: [...CN_ALL, "C23"], unsure: ["C23"], status: "draft" } }, lpp(["C12", "C13"])],
  },
  {
    slug: "mht-cet",
    title: "MHT-CET",
    short: "MHT-CET",
    group: "school",
    tagline: "Maharashtra engineering entrance",
    chapters: [{ chapter: "complex-numbers", coverage: cnMaharashtra }, lpp([])],
  },
  {
    slug: "jee-main",
    title: "JEE Main",
    short: "JEE Main",
    group: "school",
    tagline: "National engineering entrance",
    chapters: [{ chapter: "complex-numbers", coverage: { ids: range(1, 30), unsure: ["C17", "C20", "C21", "C22"], status: "draft" } }],
  },
  {
    slug: "nda",
    title: "NDA",
    short: "NDA",
    group: "school",
    tagline: "UPSC NDA & NA, Mathematics",
    chapters: [
      {
        chapter: "complex-numbers",
        coverage: {
          ids: [...CN_ALL, "C09", "C13", "C17", "C20", "C21", "C22", "C23", ...CN_LOCI],
          unsure: ["C09", "C13", "C22", ...CN_LOCI],
          status: "draft",
        },
      },
    ],
  },
  { slug: "cds", title: "CDS", short: "CDS", group: "graduate", tagline: "UPSC CDS, Elementary Mathematics", chapters: [] },
  { slug: "afcat", title: "AFCAT", short: "AFCAT", group: "graduate", tagline: "Air Force entrance, Numerical Ability", chapters: [] },
  { slug: "capf", title: "CAPF", short: "CAPF", group: "graduate", tagline: "UPSC CAPF (AC), General Ability", chapters: [] },
];

/** A course's chapters grouped by school year: 11th, then 12th, then any without one; course order within each. */
export function byStandard<T extends { standard?: Standard }>(list: T[]): { standard?: Standard; chapters: T[] }[] {
  return ([11, 12, undefined] as const)
    .map((standard) => ({ standard, chapters: list.filter((c) => c.standard === standard) }))
    .filter((g) => g.chapters.length > 0);
}

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Structural checks on the catalog; [] = valid. */
export function validateCatalog(list: Course[], chapters: Chapter[]): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const groups = new Set(GROUPS.map((g) => g.id));
  for (const course of list) {
    if (seen.has(course.slug)) errors.push(`duplicate course slug ${course.slug}`);
    seen.add(course.slug);
    if (!SLUG.test(course.slug)) errors.push(`${course.slug}: slug must be lowercase words joined by hyphens`);
    if (!groups.has(course.group)) errors.push(`${course.slug}: unknown group ${course.group}`);

    const listed = new Set<string>();
    for (const entry of course.chapters) {
      if (listed.has(entry.chapter)) errors.push(`${course.slug}: chapter ${entry.chapter} listed twice`);
      listed.add(entry.chapter);
      const chapter = chapters.find((c) => c.slug === entry.chapter);
      if (!chapter) {
        errors.push(`${course.slug}: unknown chapter ${entry.chapter}`);
        continue;
      }
      if (chapter.group !== course.group) {
        errors.push(`${course.slug}: chapter ${chapter.slug} belongs to the ${chapter.group} pool, not ${course.group}`);
      }
      if (chapter.group === "school" && chapter.standard === undefined) {
        errors.push(`${course.slug}: chapter ${chapter.slug} needs a standard (11 or 12)`);
      }
      if (entry.coverage) errors.push(...validateCoverage(`${course.slug}/${chapter.slug}`, entry.coverage, chapter));
    }
  }
  return errors;
}

function validateCoverage(where: string, coverage: Coverage, chapter: Chapter): string[] {
  const errors: string[] = [];
  if (coverage.ids.length === 0) errors.push(`${where}: coverage lists no concepts`);
  const known = new Set(chapter.graph.map((n) => n.id));
  const listed = new Set<ConceptId>();
  for (const id of coverage.ids) {
    if (listed.has(id)) errors.push(`${where}: concept ${id} listed twice`);
    listed.add(id);
    if (!known.has(id)) errors.push(`${where}: unknown concept ${id}`);
  }
  for (const id of coverage.unsure ?? []) {
    if (!listed.has(id)) errors.push(`${where}: unsure concept ${id} is not in the list`);
  }
  return errors;
}

export function coursesIn(group: GroupId, list: Course[] = courses): Course[] {
  return list.filter((c) => c.group === group);
}

export function findCourse(slug: string | null | undefined, list: Course[] = courses): Course | null {
  return list.find((c) => c.slug === slug) ?? null;
}

/** A group id from untrusted input (a cookie), or null. */
export function parseGroup(value: string | null | undefined): GroupId | null {
  return GROUPS.find((g) => g.id === value)?.id ?? null;
}

/**
 * The concepts of `chapter` the course covers. Students get the whole chapter
 * until the coverage is approved; reviewers can ask for the draft.
 */
export function coveredIds(course: Course, chapter: Chapter, { includeDraft = false } = {}): Set<ConceptId> {
  const entry = course.chapters.find((c) => c.chapter === chapter.slug);
  if (!entry) return new Set();
  const coverage = entry.coverage;
  if (coverage && (coverage.status === "approved" || includeDraft)) return new Set(coverage.ids);
  return new Set(chapter.graph.map((n) => n.id));
}

/** Concepts of `chapter` that exactly one course covers, mapped to that course's slug. */
export function uniqueConcepts(chapter: Chapter, list: Course[] = courses, opts: { includeDraft?: boolean } = {}): Map<ConceptId, string> {
  const unique = new Map<ConceptId, string>();
  for (const node of chapter.graph) {
    const owners = list.filter((c) => coveredIds(c, chapter, opts).has(node.id));
    if (owners.length === 1) unique.set(node.id, owners[0].slug);
  }
  return unique;
}

/** `href` with `course=<slug>` added, so the student finds their way back to the course. */
export function withCourse(href: string, course: string | undefined): string {
  if (!course) return href;
  return `${href}${href.includes("?") ? "&" : "?"}course=${encodeURIComponent(course)}`;
}

/** What a student can open in the course today: its chapters, and the published concepts it covers. */
export function courseSize(course: Course, chapters: Chapter[]): { chapters: number; concepts: number } {
  let concepts = 0;
  for (const entry of course.chapters) {
    const chapter = chapters.find((c) => c.slug === entry.chapter);
    if (!chapter) continue;
    const covered = coveredIds(course, chapter);
    concepts += chapter.concepts.filter((c) => c.status === "approved" && covered.has(c.id)).length;
  }
  return { chapters: course.chapters.length, concepts };
}
