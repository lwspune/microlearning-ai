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

/** A pool chapter a course takes concepts from. No coverage: the course covers the whole chapter. */
export type CoursePart = { chapter: string; coverage?: Coverage };

/**
 * A chapter in a course: one pool chapter, or several where the course teaches them as one
 * (MHT-CET's Limits is the pool's Limits and Continuity), or a share of one that the course
 * splits (NDA's Trigonometric Equations, Properties of Triangle and Inverse Trigonometry are
 * three shares of Std XII Trigonometric Functions, with lists that don't overlap).
 */
export type CourseChapter = CoursePart & {
  /** Its URL slug; default: the first pool chapter's. A share of a split pool chapter names its own. */
  slug?: string;
  /** The course's name for it; default: the first pool chapter's title. */
  title?: string;
  /** Default: the first pool chapter's standard. */
  standard?: Standard;
  /** The other pool chapters it takes in, in teaching order. */
  more?: CoursePart[];
  /** Its chapter's slug on PYQ Vault, where the course's past papers are practised. */
  pyqvault?: string;
};

/** A course chapter with its pool chapters looked up. */
export type ResolvedCourseChapter = {
  slug: string;
  title: string;
  subject: SubjectId;
  standard?: Standard;
  parts: { chapter: Chapter; coverage?: Coverage }[];
};

export type Course = {
  slug: string;
  title: string;
  /** For cards and chips: "JEE Main". */
  short: string;
  group: GroupId;
  tagline: string;
  /** A school board: its page shows one standard at a time, which the student picks. */
  board?: true;
  /** The course's exam and subject on PYQ Vault (its URL slugs), for chapters that link there. */
  pyqvault?: { exam: string; subject: string };
  chapters: CourseChapter[];
};

export type Group = { id: GroupId; title: string; blurb: string };

export const GROUPS: Group[] = [
  { id: "school", title: "K-12", blurb: "Boards and entrance exams, from Class 9 to 12." },
  { id: "graduate", title: "Graduates", blurb: "Defence and services exams after graduation." },
];

export const SUBJECTS: Record<SubjectId, string> = { maths: "Maths" };

export const STANDARD_TITLE: Record<Standard, string> = { 9: "Std IX", 10: "Std X", 11: "Std XI", 12: "Std XII" };

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
// The book's concepts, in chapters where another course adds one the book doesn't teach: MHT-CET's
// Cayley–Hamilton, two circles and angle between curves, and NDA's phase 2c concepts (owner, 2026-10-19).
// Keeps MH Board's and MHT-CET's maps as they were.
const book = (chapter: string, last: number): CourseChapter => ({ chapter, coverage: { ids: range(1, last), status: "approved" } });

// An NDA share of a pool chapter: the concepts NDA's syllabus asks, approved by the owner 2026-10-19.
const nda = (chapter: string, ids: ConceptId[]): CourseChapter => ({ chapter, coverage: { ids, status: "approved" } });

// A CBSE share of a pool chapter: what the rationalised NCERT book's exercises and CBSE's 2022–26 board
// papers ask, settled against both in PYQ Vault; approved on the owner's say-so 2026-10-20 ("you approve").
const cbse = (chapter: string, ids: ConceptId[]): CourseChapter => ({ chapter, coverage: { ids, status: "approved" } });

// Sequences and Series C19–C21 are Std X work for the Maharashtra Board's Std X Arithmetic Progression
// (PLAN.md "Std IX and X Maths"); every other use of the chapter keeps C01–C18.
const SERIES_XI = range(1, 18);

const lpp = (unsure: string[]): CourseChapter => ({
  chapter: "linear-programming",
  coverage: { ids: range(1, 13), unsure, status: "approved" },
});

export const courses: Course[] = [
  {
    slug: "mh-board",
    title: "Maharashtra Board",
    short: "MH Board",
    group: "school",
    tagline: "Maharashtra State Board, SSC and HSC Science",
    board: true,
    // Book order: Std X Part 1, Std XI Part 1, then Part 2, then Std XII. A chapter without coverage
    // is covered whole.
    chapters: [
      { chapter: "linear-equations-10" },
      { chapter: "quadratic-equations-10" },
      {
        chapter: "sequences-and-series",
        slug: "arithmetic-progression",
        title: "Arithmetic Progression",
        standard: 10,
        coverage: { ids: ["C15", "C19", "C16", "C20", "C17", "C18", "C21"], status: "approved" },
      },
      { chapter: "financial-planning-10" },
      { chapter: "probability-10" },
      { chapter: "statistics-10" },
      { chapter: "angle-measurement" },
      { chapter: "trigonometric-functions" },
      book("compound-and-multiple-angles", 10),
      book("determinants-and-matrices", 12),
      { chapter: "straight-line" },
      book("circle", 8),
      { chapter: "conic-sections" },
      { chapter: "measures-of-dispersion" },
      book("probability", 10),
      book("functions", 11),
      { chapter: "limits" },
      { chapter: "continuity" },
      { chapter: "differentiation" },
      { chapter: "complex-numbers", coverage: cnMaharashtra },
      book("sequences-and-series", 18),
      { chapter: "permutations-and-combinations" },
      book("binomial-theorem", 9),
      { chapter: "sets-and-relations" },
      { chapter: "mathematical-logic" },
      book("matrices", 11),
      book("trigonometric-functions-12", 15),
      { chapter: "pair-of-straight-lines" },
      { chapter: "vectors" },
      { chapter: "line-and-plane" },
      { chapter: "differentiation-12" },
      book("application-of-derivatives", 10),
      { chapter: "indefinite-integration" },
      book("definite-integration", 7),
      { chapter: "application-of-definite-integration" },
      { chapter: "differential-equations" },
      { chapter: "probability-distributions" },
      { chapter: "binomial-distribution" },
      lpp([]),
    ],
  },
  {
    slug: "cbse",
    title: "CBSE",
    short: "CBSE",
    group: "school",
    tagline: "CBSE Science, NCERT syllabus",
    board: true,
    // NCERT's chapters and names, as PYQ Vault has them (PLAN.md "CBSE Maths course"). The rationalised
    // books dropped mathematical induction, general and middle terms, A.P. as a topic of its own, polar
    // form, tangents and normals, Rolle and the mean value theorems, planes and the binomial distribution;
    // the 2026 papers ask no random variables. Linear Inequalities, Introduction to Three Dimensional
    // Geometry and absolute extrema were built for CBSE (phase 2).
    chapters: [
      { ...cbse("sets-and-relations", [...range(1, 5), "C09"]), slug: "sets", title: "Sets" },
      {
        ...cbse("sets-and-relations", range(12, 14)),
        slug: "relations-and-functions",
        title: "Relations and Functions",
        more: [cbse("functions", [...range(1, 3), "C05", "C06", "C08", "C09"])],
      },
      {
        ...cbse("angle-measurement", [...range(1, 3), "C05"]),
        slug: "trigonometric-functions",
        title: "Trigonometric Functions",
        more: [cbse("trigonometric-functions", [...range(1, 7), "C09"]), cbse("compound-and-multiple-angles", [...range(1, 6), "C08", "C09"])],
      },
      // Ex 4.1 and its miscellaneous exercise only: no polar form, square roots or quadratics.
      { ...cbse("complex-numbers", [...range(1, 8), ...range(10, 12)]), title: "Complex Numbers and Quadratic Equations" },
      { chapter: "linear-inequalities" },
      cbse("permutations-and-combinations", [...range(1, 6), ...range(8, 12)]),
      cbse("binomial-theorem", ["C01", "C06", "C07", "C10"]),
      // G.P. and the means; the miscellaneous exercise leans on A.P. from Class 10.
      cbse("sequences-and-series", [...range(15, 17), ...range(1, 5), "C10", "C11"]),
      { ...cbse("straight-line", ["C01", ...range(3, 12)]), title: "Straight Lines", slug: "straight-lines" },
      {
        ...cbse("circle", ["C01", "C03", "C04"]),
        slug: "conic-sections",
        title: "Conic Sections",
        more: [cbse("conic-sections", [...range(1, 3), ...range(6, 8), "C11", "C12"])],
      },
      { chapter: "introduction-to-3d-geometry" },
      {
        ...cbse("limits", [...range(1, 5), "C07"]),
        slug: "limits-and-derivatives",
        title: "Limits and Derivatives",
        more: [cbse("differentiation", ["C01", ...range(3, 6)])],
      },
      // Mean deviation (with correcting a mean), then the book's range, variance and S.D.
      { ...cbse("statistics", ["C04", "C10"]), more: [cbse("measures-of-dispersion", range(1, 5))] },
      cbse("probability", range(1, 6)),
      {
        ...cbse("sets-and-relations", ["C15", "C16"]),
        slug: "relations-and-functions-12",
        title: "Relations and Functions",
        standard: 12,
        more: [cbse("functions", ["C04", "C10", "C11"])],
      },
      { ...cbse("trigonometric-functions-12", range(12, 15)), slug: "inverse-trigonometric-functions", title: "Inverse Trigonometric Functions" },
      { ...cbse("determinants-and-matrices", range(7, 12)), slug: "matrices", title: "Matrices", standard: 12 },
      {
        ...cbse("determinants-and-matrices", ["C01", "C02", "C06"]),
        slug: "determinants",
        title: "Determinants",
        standard: 12,
        more: [cbse("matrices", [...range(4, 9), "C11"])],
      },
      {
        ...cbse("continuity", [...range(1, 3), "C05"]),
        slug: "continuity-and-differentiability",
        title: "Continuity and Differentiability",
        standard: 12,
        more: [cbse("differentiation", ["C02"]), { chapter: "differentiation-12" }],
      },
      cbse("application-of-derivatives", ["C03", "C04", ...range(8, 10), "C12"]),
      {
        ...cbse("indefinite-integration", [...range(1, 4), ...range(6, 11)]),
        slug: "integrals",
        title: "Integrals",
        more: [cbse("definite-integration", [...range(2, 7), "C10"])],
      },
      { chapter: "application-of-definite-integration", slug: "application-of-integrals", title: "Application of Integrals" },
      cbse("differential-equations", ["C01", "C03", "C04", ...range(6, 9)]),
      { ...cbse("vectors", [...range(1, 6), "C08", "C09"]), slug: "vector-algebra", title: "Vector Algebra" },
      {
        ...cbse("vectors", ["C07"]),
        slug: "three-dimensional-geometry",
        title: "Three Dimensional Geometry",
        more: [cbse("line-and-plane", range(1, 5))],
      },
      lpp(["C12", "C13"]),
      { ...cbse("probability", range(7, 10)), slug: "probability-12", standard: 12 },
    ],
  },
  {
    slug: "mht-cet",
    title: "MHT-CET",
    short: "MHT-CET",
    group: "school",
    tagline: "Maharashtra engineering entrance",
    // Two-way link with PYQ Vault, piloted on Circle (owner, 2026-10-19; PLAN.md "PYQ Vault link").
    pyqvault: { exam: "mht-cet", subject: "maths" },
    // PYQ Vault's chapters and names (owner, 2026-10-19; PLAN.md "MHT-CET Maths course"): the whole
    // Std XII book and the Std XI chapters CET asks. Measures of Dispersion is out: none of the 2025–26
    // papers ask it, and the syllabus reportedly swapped it for Conic Sections.
    chapters: [
      book("compound-and-multiple-angles", 10),
      { chapter: "straight-line" },
      { chapter: "circle", pyqvault: "circle" },
      { chapter: "conic-sections" },
      { chapter: "complex-numbers", coverage: cnMaharashtra },
      { chapter: "permutations-and-combinations" },
      {
        // 3 of the 69 PYQs are about sets; keep what Functions builds on (roster form, power set,
        // intervals, Cartesian product, relations). Approved by the owner 2026-10-19.
        chapter: "sets-and-relations",
        coverage: { ids: ["C01", "C02", "C09", "C10", "C11", "C12", "C13"], status: "approved" },
        title: "Sets, Relations and Functions",
        more: [book("functions", 11)],
      },
      { chapter: "limits", more: [{ chapter: "continuity" }] },
      { chapter: "mathematical-logic" },
      // Examined as Std XII matrices; the Std XI determinants come first.
      { ...book("determinants-and-matrices", 12), standard: 12, more: [{ chapter: "matrices" }] },
      book("trigonometric-functions-12", 15),
      { chapter: "pair-of-straight-lines" },
      { chapter: "vectors" },
      { chapter: "line-and-plane" },
      lpp([]),
      { chapter: "differentiation", standard: 12, more: [{ chapter: "differentiation-12" }] },
      // The book's ten and MHT-CET's angle between curves; CBSE's absolute extrema (C12) stays out.
      { ...book("application-of-derivatives", 11), title: "Applications of Derivative" },
      { chapter: "indefinite-integration" },
      book("definite-integration", 7),
      { chapter: "application-of-definite-integration", title: "Applications of Definite Integral" },
      { chapter: "differential-equations" },
      { ...book("probability", 10), title: "Probability Distribution", standard: 12, more: [{ chapter: "probability-distributions" }] },
      { chapter: "binomial-distribution" },
    ],
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
    // PYQ Vault's chapters that the pool covers (owner, 2026-10-19; PLAN.md "NDA Maths course"); the
    // phase 2b chapters (Logarithms, Height & Distance, Binary Numbers, the sphere) are built for NDA.
    // NDA's syllabus has no polar coordinates, Rolle or mean value theorems, approximations,
    // continuous distributions, linear programming beyond graphing inequations, or Std XII angle
    // between curves and two circles. The owner approved every list on 2026-10-19.
    chapters: [
      { chapter: "angle-measurement", title: "Trigonometric Identities", more: [nda("trigonometric-functions", range(1, 9)), { chapter: "compound-and-multiple-angles" }] },
      { chapter: "heights-and-distances", title: "Height & Distance" },
      { chapter: "straight-line", title: "Lines" },
      { ...nda("circle", range(1, 8)), title: "Circles" },
      { chapter: "conic-sections", title: "Conics" },
      // Averages, graphs, mean deviation, correlation and regression, then the book's variance and S.D.
      { chapter: "statistics", more: [{ chapter: "measures-of-dispersion" }] },
      { chapter: "probability" },
      { chapter: "quadratic-equations" },
      {
        chapter: "complex-numbers",
        coverage: {
          ids: [...CN_ALL, "C09", "C13", "C17", "C20", "C21", "C22", "C23", ...CN_LOCI],
          unsure: ["C09", "C13", "C22", ...CN_LOCI],
          status: "approved",
        },
      },
      { ...nda("sequences-and-series", SERIES_XI), title: "Sequence & Series" },
      { chapter: "permutations-and-combinations", title: "Permutation & Combination" },
      { chapter: "binomial-theorem" },
      { chapter: "sets-and-relations", title: "Sets & Relations" },
      { chapter: "binary-numbers" },
      // Functions' logarithm rules (C07) open NDA's Logarithms; Functions keeps the rest.
      { ...nda("functions", ["C07"]), slug: "logarithms", title: "Logarithms", more: [{ chapter: "logarithms" }] },
      nda("functions", [...range(1, 6), ...range(8, 12)]),
      { chapter: "limits", title: "Limits & Continuity", more: [nda("continuity", range(1, 5))] },
      // One-variable inequalities first (NDA asks double inequalities and signs; built for CBSE, owner
      // 2026-10-21), then "linear inequations of two variables by graphs": the graphing half of Linear Programming.
      { chapter: "linear-inequalities", more: [nda("linear-programming", range(1, 4))] },
      { chapter: "determinants-and-matrices", title: "Matrices & Determinants", standard: 12, more: [{ chapter: "matrices" }] },
      // Std XII Trigonometric Functions is three NDA chapters (C06, polar coordinates, isn't in NDA).
      { ...nda("trigonometric-functions-12", range(1, 5)), slug: "trigonometric-equations", title: "Trigonometric Equations" },
      { ...nda("trigonometric-functions-12", [...range(7, 11), "C16"]), slug: "properties-of-triangle", title: "Properties of Triangle" },
      { ...nda("trigonometric-functions-12", range(12, 15)), slug: "inverse-trigonometry", title: "Inverse Trigonometry" },
      // Direction cosines (Vectors C07) are 3D Geometry in NDA.
      nda("vectors", [...range(1, 6), ...range(8, 13)]),
      { chapter: "line-and-plane", title: "3D Geometry", more: [nda("vectors", ["C07"]), { chapter: "sphere" }] },
      { chapter: "differentiation", standard: 12, more: [{ chapter: "differentiation-12" }] },
      nda("application-of-derivatives", [...range(1, 4), ...range(8, 10)]),
      { chapter: "indefinite-integration" },
      { chapter: "definite-integration" },
      { chapter: "application-of-definite-integration", title: "Applications of Integration" },
      { chapter: "differential-equations" },
      // "Random variable as function on a sample space", then the binomial distribution.
      { ...nda("probability-distributions", range(1, 4)), title: "Binomial Distribution", slug: "binomial-distribution", more: [{ chapter: "binomial-distribution" }] },
    ],
  },
  { slug: "cds", title: "CDS", short: "CDS", group: "graduate", tagline: "UPSC CDS, Elementary Mathematics", chapters: [] },
  { slug: "afcat", title: "AFCAT", short: "AFCAT", group: "graduate", tagline: "Air Force entrance, Numerical Ability", chapters: [] },
  { slug: "capf", title: "CAPF", short: "CAPF", group: "graduate", tagline: "UPSC CAPF (AC), General Ability", chapters: [] },
];

/** A course's chapters grouped by school year, 9th to 12th, then any without one; course order within each. */
export function byStandard<T extends { standard?: Standard }>(list: T[]): { standard?: Standard; chapters: T[] }[] {
  return ([9, 10, 11, 12, undefined] as const)
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

    const slugs = new Set<string>();
    for (const entry of course.chapters) {
      const slug = slugOf(entry);
      if (slugs.has(slug)) errors.push(`${course.slug}: course chapter slug ${slug} used twice`);
      slugs.add(slug);
      if (!SLUG.test(slug)) errors.push(`${course.slug}: course chapter slug ${slug} must be lowercase words joined by hyphens`);
      if (entry.pyqvault !== undefined) {
        if (!course.pyqvault) errors.push(`${course.slug}: chapter ${slug} links to PYQ Vault, but the course names no PYQ Vault exam`);
        if (!SLUG.test(entry.pyqvault)) errors.push(`${course.slug}: PYQ Vault slug ${entry.pyqvault} must be lowercase words joined by hyphens`);
      }
    }
    errors.push(...validateShares(course, chapters));

    for (const entry of course.chapters.flatMap(partsOf)) {
      const chapter = chapters.find((c) => c.slug === entry.chapter);
      if (!chapter) {
        errors.push(`${course.slug}: unknown chapter ${entry.chapter}`);
        continue;
      }
      if (chapter.group !== course.group) {
        errors.push(`${course.slug}: chapter ${chapter.slug} belongs to the ${chapter.group} pool, not ${course.group}`);
      }
      if (chapter.group === "school" && chapter.standard === undefined) {
        errors.push(`${course.slug}: chapter ${chapter.slug} needs a standard (9 to 12)`);
      }
      if (entry.coverage) errors.push(...validateCoverage(`${course.slug}/${chapter.slug}`, entry.coverage, chapter));
    }
  }
  return errors;
}

/**
 * A pool chapter in several parts of a course is split: every part needs a list, and no concept
 * may be in two, except in course chapters of different years (a board teaches A.P. in Std X and
 * again in Std XI).
 */
function validateShares(course: Course, chapters: Chapter[]): string[] {
  const errors: string[] = [];
  const bySlug = new Map<string, { part: CoursePart; standard?: Standard }[]>();
  for (const entry of course.chapters) {
    const standard = entry.standard ?? chapters.find((c) => c.slug === partsOf(entry)[0].chapter)?.standard;
    for (const part of partsOf(entry)) bySlug.set(part.chapter, [...(bySlug.get(part.chapter) ?? []), { part, standard }]);
  }
  for (const [slug, held] of bySlug) {
    if (held.length < 2) continue;
    const shares = held.map((h) => h.part);
    if (shares.some((p) => !p.coverage)) {
      // Two parts of one course chapter, or a whole chapter listed again, rather than a split.
      const sameEntry = course.chapters.some((e) => partsOf(e).filter((p) => p.chapter === slug).length > 1);
      errors.push(sameEntry || shares.every((p) => !p.coverage) ? `${course.slug}: chapter ${slug} listed twice` : `${course.slug}: chapter ${slug} is split, so every part needs a list`);
      continue;
    }
    const seen = new Set<string>();
    for (const { part, standard } of held) {
      for (const id of part.coverage!.ids) {
        const key = `${standard} ${id}`;
        if (seen.has(key)) errors.push(`${course.slug}: concept ${id} of chapter ${slug} is in two course chapters`);
        seen.add(key);
      }
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

/** The pool chapters a course chapter takes concepts from: its first, then the others. */
export function partsOf(entry: CourseChapter): CoursePart[] {
  return [{ chapter: entry.chapter, coverage: entry.coverage }, ...(entry.more ?? [])];
}

/** A course chapter's URL slug. */
export function slugOf(entry: CourseChapter): string {
  return entry.slug ?? entry.chapter;
}

/**
 * The concepts of `chapter` a part of `course` shows: its list once approved (or for reviewers),
 * and the whole chapter until then. A share of a split chapter shows its list at once: a split
 * places concepts in course chapters and drops none, so there is nothing to wait for.
 */
export function partScope(course: Course, part: { coverage?: Coverage }, chapter: Chapter, { includeDraft = false } = {}): Set<ConceptId> {
  const coverage = part.coverage;
  const split = partsFor(course, chapter.slug).length > 1;
  if (coverage && (coverage.status === "approved" || includeDraft || split)) return new Set(coverage.ids);
  return new Set(chapter.graph.map((n) => n.id));
}

/** Every part of the course that takes in pool chapter `chapterSlug` (several when the course splits it). */
export function partsFor(course: Course, chapterSlug: string): { entry: CourseChapter; part: CoursePart }[] {
  return course.chapters.flatMap((entry) => partsOf(entry).filter((p) => p.chapter === chapterSlug).map((part) => ({ entry, part })));
}

/**
 * The course chapter that takes in pool chapter `chapterSlug`, or null. With `concept`, the
 * one whose share holds that concept, when the course splits the chapter; of several (a concept
 * taught in two years), the one in `standard` if given, else the first.
 */
export function entryFor(
  course: Course,
  chapterSlug: string,
  concept?: { id: ConceptId; chapter: Chapter },
  prefer?: { standard: Standard; chapters: Chapter[] },
): CourseChapter | null {
  const found = partsFor(course, chapterSlug);
  const holding = concept ? found.filter(({ part }) => partScope(course, part, concept.chapter).has(concept.id)) : [];
  const inYear = prefer && holding.find(({ entry }) => resolveEntry(entry, prefer.chapters).standard === prefer.standard);
  return (inYear ?? holding[0] ?? found[0])?.entry ?? null;
}

/** Looks up a course chapter's pool chapters (the catalog is validated, so they exist). */
export function resolveEntry(entry: CourseChapter, chapters: Chapter[]): ResolvedCourseChapter {
  const parts = partsOf(entry).map((p) => ({ chapter: chapters.find((c) => c.slug === p.chapter)!, coverage: p.coverage }));
  const first = parts[0].chapter;
  return { slug: slugOf(entry), title: entry.title ?? first.title, subject: first.subject, standard: entry.standard ?? first.standard, parts };
}

/**
 * Where a lesson in `chapter` leads back to: the course chapter that takes it in (for a split
 * chapter, the one holding concept `conceptId`, in the student's `standard` if it is in two
 * years), or the chapter's own map.
 */
export function mapLink(
  course: Course | null,
  chapter: Chapter,
  chapters: Chapter[],
  conceptId?: ConceptId,
  standard?: Standard | null,
): { href: string; title: string } {
  const prefer = standard ? { standard, chapters } : undefined;
  const entry = course && entryFor(course, chapter.slug, conceptId ? { id: conceptId, chapter } : undefined, prefer);
  if (!course || !entry) return { href: `/learn/${chapter.slug}`, title: chapter.title };
  const resolved = resolveEntry(entry, chapters);
  return { href: `/courses/${course.slug}/${resolved.slug}`, title: `${course.short} · ${resolved.title}` };
}

const PYQ_VAULT = "https://www.pyqvault.com";

/** Where a course chapter's past papers are practised on PYQ Vault, or null if it doesn't link there. */
export function practiceLink(course: Course, entry: CourseChapter): { href: string; label: string } | null {
  if (!course.pyqvault || !entry.pyqvault) return null;
  const { exam, subject } = course.pyqvault;
  return {
    href: `${PYQ_VAULT}/questions/${exam}/${subject}/${entry.pyqvault}?ref=conceptladder`,
    label: `Practise ${course.short} questions on PYQ Vault`,
  };
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

/** A standard from untrusted input (a cookie), or null. */
export function parseStandard(value: string | null | undefined): Standard | null {
  const standard = Number(value);
  return value && String(standard) === value && standard in STANDARD_TITLE ? (standard as Standard) : null;
}

/**
 * The concepts of `chapter` the course covers. Students get the whole chapter
 * until the coverage is approved; reviewers can ask for the draft.
 */
export function coveredIds(course: Course, chapter: Chapter, { includeDraft = false } = {}): Set<ConceptId> {
  return new Set(partsFor(course, chapter.slug).flatMap(({ part }) => [...partScope(course, part, chapter, { includeDraft })]));
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
  // Each pool chapter once, even when the course splits it.
  for (const slug of new Set(course.chapters.flatMap(partsOf).map((p) => p.chapter))) {
    const chapter = chapters.find((c) => c.slug === slug);
    if (!chapter) continue;
    const covered = coveredIds(course, chapter);
    concepts += chapter.concepts.filter((c) => c.status === "approved" && covered.has(c.id)).length;
  }
  return { chapters: course.chapters.length, concepts };
}
