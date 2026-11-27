import { describe, expect, it } from "vitest";
import { conceptStates } from "@/engine/unlock";
import { chapters } from "./chapters";
import {
  type Course,
  coursesIn,
  courseSize,
  coveredIds,
  courses,
  entryFor,
  findCourse,
  mapLink,
  partScope,
  partsFor,
  partsOf,
  practiceLink,
  resolveEntry,
  slugOf,
  GROUPS,
  parseGroup,
  parseStandard,
  parseSubject,
  openingSubject,
  STANDARD_TITLE,
  SUBJECTS,
  uniqueConcepts,
  validateCatalog,
  withCourse,
  byStandard,
  openingStandard,
} from "./courses";
import type { Chapter, GraphNode, Standard } from "./types";

function node(id: string, prereqs: string[] = []): GraphNode {
  return { id, slug: id.toLowerCase(), title: id, oneLiner: "", group: "g", tier: "core", prereqs, ext: [], sources: [] };
}

function chapter(slug: string, group: Chapter["group"] = "school"): Chapter {
  const standard = group === "school" ? 11 : undefined;
  return { slug, title: slug, group, subject: "maths", standard, graph: [node("A"), node("B", ["A"]), node("C", ["B"])], concepts: [] };
}

function course(slug: string, overrides: Partial<Course> = {}): Course {
  return { slug, title: slug, short: slug, group: "school", tagline: "", chapters: [{ chapter: "ch" }], ...overrides };
}

const ch = chapter("ch");

describe("validateCatalog", () => {
  it("accepts a valid catalog", () => {
    expect(validateCatalog([course("a"), course("b")], [ch])).toEqual([]);
  });

  it("needs a K-12 chapter to name its standard; a Graduates chapter has none", () => {
    expect(validateCatalog([course("a")], [{ ...ch, standard: undefined }])).toContain("a: chapter ch needs a standard (9 to 12)");
    const grad = chapter("g", "graduate");
    expect(validateCatalog([course("b", { group: "graduate", chapters: [{ chapter: "g" }] })], [grad])).toEqual([]);
  });

  it("rejects duplicate and malformed course slugs", () => {
    const errors = validateCatalog([course("a"), course("a"), course("Bad Slug")], [ch]);
    expect(errors).toContain("duplicate course slug a");
    expect(errors).toContain("Bad Slug: slug must be lowercase words joined by hyphens");
  });

  it("rejects an unknown chapter and a chapter listed twice", () => {
    const errors = validateCatalog([course("a", { chapters: [{ chapter: "nope" }, { chapter: "ch" }, { chapter: "ch" }] })], [ch]);
    expect(errors).toContain("a: unknown chapter nope");
    expect(errors).toContain("a: chapter ch listed twice");
  });

  it("keeps each group's pool to itself: a course only uses chapters of its own group", () => {
    const grad = chapter("grad-ch", "graduate");
    expect(validateCatalog([course("a", { chapters: [{ chapter: "grad-ch" }] })], [ch, grad])).toEqual([
      "a: chapter grad-ch belongs to the graduate pool, not school",
    ]);
  });

  it("rejects coverage naming concepts the chapter doesn't have, twice, or doubts outside the list", () => {
    const errors = validateCatalog(
      [course("a", { chapters: [{ chapter: "ch", coverage: { ids: ["A", "A", "Z"], unsure: ["C"], status: "draft" } }] })],
      [ch],
    );
    expect(errors).toContain("a/ch: unknown concept Z");
    expect(errors).toContain("a/ch: concept A listed twice");
    expect(errors).toContain("a/ch: unsure concept C is not in the list");
  });

  it("checks the parts a course chapter takes from other pool chapters like its first one", () => {
    const two = chapter("two");
    const errors = validateCatalog(
      [
        course("a", {
          chapters: [
            { chapter: "ch", more: [{ chapter: "nope" }, { chapter: "two", coverage: { ids: ["Z"], status: "draft" } }] },
            { chapter: "x", more: [{ chapter: "ch" }] },
          ],
        }),
      ],
      [ch, two, chapter("x")],
    );
    expect(errors).toContain("a: unknown chapter nope");
    expect(errors).toContain("a/two: unknown concept Z");
    // A pool chapter belongs to one course chapter, so its concepts aren't counted twice.
    expect(errors).toContain("a: chapter ch listed twice");
  });

  it("lets course chapters share a pool chapter when their lists don't overlap, each under its own slug", () => {
    const split = (ids1: string[], ids2: string[]) =>
      course("a", {
        chapters: [
          { chapter: "ch", slug: "first", coverage: { ids: ids1, status: "draft" } },
          { chapter: "ch", slug: "second", coverage: { ids: ids2, status: "draft" } },
        ],
      });
    expect(validateCatalog([split(["A"], ["B", "C"])], [ch])).toEqual([]);
    expect(validateCatalog([split(["A", "B"], ["B"])], [ch])).toContain("a: concept B of chapter ch is in two course chapters");
  });

  it("lets a board teach a concept in two years, but not twice in one year", () => {
    const twoYears = (standards: [Standard, Standard]) =>
      course("a", {
        chapters: [
          { chapter: "ch", slug: "first", standard: standards[0], coverage: { ids: ["A", "B"], status: "approved" } },
          { chapter: "ch", slug: "second", standard: standards[1], coverage: { ids: ["B", "C"], status: "approved" } },
        ],
      });
    expect(validateCatalog([twoYears([10, 11])], [ch])).toEqual([]);
    expect(validateCatalog([twoYears([11, 11])], [ch])).toContain("a: concept B of chapter ch is in two course chapters");
  });

  it("needs a list on every share of a split pool chapter, and a slug of its own per course chapter", () => {
    const errors = validateCatalog(
      [course("a", { chapters: [{ chapter: "ch", coverage: { ids: ["A"], status: "draft" } }, { chapter: "ch" }] })],
      [ch],
    );
    expect(errors).toContain("a: chapter ch is split, so every part needs a list");
    expect(errors).toContain("a: course chapter slug ch used twice");
    expect(validateCatalog([course("a", { chapters: [{ chapter: "ch", slug: "Bad Slug" }] })], [ch])).toContain(
      "a: course chapter slug Bad Slug must be lowercase words joined by hyphens",
    );
  });

  it("rejects empty coverage (leave coverage out to mean the whole chapter)", () => {
    expect(validateCatalog([course("a", { chapters: [{ chapter: "ch", coverage: { ids: [], status: "draft" } }] })], [ch])).toEqual([
      "a/ch: coverage lists no concepts",
    ]);
  });
});

describe("coveredIds", () => {
  const draft = course("a", { chapters: [{ chapter: "ch", coverage: { ids: ["A", "B"], status: "draft" } }] });
  const approved = course("a", { chapters: [{ chapter: "ch", coverage: { ids: ["A", "B"], status: "approved" } }] });

  it("is the whole chapter when the course lists no coverage", () => {
    expect(coveredIds(course("a"), ch)).toEqual(new Set(["A", "B", "C"]));
  });

  it("is the whole chapter for students until the coverage is approved", () => {
    expect(coveredIds(draft, ch)).toEqual(new Set(["A", "B", "C"]));
    expect(coveredIds(approved, ch)).toEqual(new Set(["A", "B"]));
  });

  it("shows draft coverage to reviewers", () => {
    expect(coveredIds(draft, ch, { includeDraft: true })).toEqual(new Set(["A", "B"]));
  });

  it("is empty for a chapter the course doesn't include", () => {
    expect(coveredIds(course("a", { chapters: [] }), ch)).toEqual(new Set());
  });

  it("finds a pool chapter that a course chapter takes in as a later part", () => {
    const c = course("a", { chapters: [{ chapter: "other", more: [{ chapter: "ch", coverage: { ids: ["C"], status: "approved" } }] }] });
    expect(coveredIds(c, ch)).toEqual(new Set(["C"]));
  });
});

describe("course chapters made of several pool chapters", () => {
  const limits = { ...chapter("limits"), title: "Limits" };
  const continuity = { ...chapter("continuity"), title: "Continuity" };
  const matrices = { ...chapter("matrices"), title: "Matrices", standard: 12 as const };
  const c = course("cet", {
    chapters: [
      { chapter: "limits", more: [{ chapter: "continuity", coverage: { ids: ["A"], status: "approved" } }] },
      { chapter: "ch", title: "Determinants and Matrices", standard: 12, more: [{ chapter: "matrices" }] },
    ],
  });
  const pool = [limits, continuity, matrices, ch];

  it("lists its parts in order: the first pool chapter, then the others", () => {
    expect(partsOf(c.chapters[0]).map((p) => p.chapter)).toEqual(["limits", "continuity"]);
    expect(partsOf({ chapter: "ch" }).map((p) => p.chapter)).toEqual(["ch"]);
  });

  it("finds the course chapter a pool chapter belongs to, or null", () => {
    expect(entryFor(c, "continuity")?.chapter).toBe("limits");
    expect(entryFor(c, "limits")?.chapter).toBe("limits");
    expect(entryFor(c, "nope")).toBeNull();
  });

  it("takes its title and standard from the first pool chapter unless the course names them", () => {
    expect(resolveEntry(c.chapters[0], pool)).toMatchObject({ slug: "limits", title: "Limits", standard: 11, subject: "maths" });
    expect(resolveEntry(c.chapters[1], pool)).toMatchObject({ slug: "ch", title: "Determinants and Matrices", standard: 12 });
    expect(resolveEntry(c.chapters[1], pool).parts.map((p) => p.chapter.slug)).toEqual(["ch", "matrices"]);
  });

  it("leads a lesson back to the course chapter that takes in its pool chapter", () => {
    expect(mapLink(c, continuity, pool)).toEqual({ href: "/courses/cet/limits", title: "cet · Limits" });
    expect(mapLink(c, matrices, pool)).toEqual({ href: "/courses/cet/ch", title: "cet · Determinants and Matrices" });
    expect(mapLink(null, continuity, pool)).toEqual({ href: "/learn/continuity", title: "Continuity" });
  });

  describe("a pool chapter split across course chapters", () => {
    const trig = { ...chapter("trig"), title: "Trig", standard: 12 as const };
    const split = course("nda", {
      chapters: [
        { chapter: "trig", slug: "equations", title: "Equations", coverage: { ids: ["A"], status: "approved" } },
        { chapter: "trig", slug: "triangles", title: "Triangles", coverage: { ids: ["B", "C"], status: "approved" } },
      ],
    });

    it("covers the union of its shares", () => {
      expect(coveredIds(split, trig)).toEqual(new Set(["A", "B", "C"]));
    });

    it("shows each course chapter only its share, under its own slug and title", () => {
      const [eq, tri] = split.chapters.map((e) => resolveEntry(e, [trig]));
      expect([eq.slug, eq.title, tri.slug, tri.title]).toEqual(["equations", "Equations", "triangles", "Triangles"]);
      expect(partScope(split, tri.parts[0], trig)).toEqual(new Set(["B", "C"]));
    });

    it("shows each share's own list even while it is a draft: a split places concepts, it drops none", () => {
      const draft = course("nda", {
        chapters: split.chapters.map((e) => ({ ...e, coverage: { ...e.coverage!, status: "draft" as const } })),
      });
      const [eq, tri] = draft.chapters.map((e) => resolveEntry(e, [trig]));
      expect(partScope(draft, eq.parts[0], trig)).toEqual(new Set(["A"]));
      expect(partScope(draft, tri.parts[0], trig)).toEqual(new Set(["B", "C"]));
      // An unsplit draft still shows the whole chapter until the owner approves it.
      const whole = course("cet", { chapters: [{ chapter: "trig", coverage: { ids: ["A"], status: "draft" } }] });
      expect(partScope(whole, whole.chapters[0], trig)).toEqual(new Set(["A", "B", "C"]));
    });

    it("leads a lesson back to the course chapter holding that concept", () => {
      expect(mapLink(split, trig, [trig], "C")).toEqual({ href: "/courses/nda/triangles", title: "nda · Triangles" });
      expect(mapLink(split, trig, [trig], "A")).toEqual({ href: "/courses/nda/equations", title: "nda · Equations" });
    });

    it("leads a concept taught in two years back to the year the student picked, else the first", () => {
      const board = course("mh", {
        chapters: [
          { chapter: "trig", slug: "ratios", title: "Ratios", standard: 10, coverage: { ids: ["A", "B"], status: "approved" } },
          { chapter: "trig", slug: "trig", title: "Trig", coverage: { ids: ["A", "B", "C"], status: "approved" } },
        ],
      });
      expect(mapLink(board, trig, [trig], "A", 12).href).toBe("/courses/mh/trig");
      expect(mapLink(board, trig, [trig], "A", 10).href).toBe("/courses/mh/ratios");
      expect(mapLink(board, trig, [trig], "A").href).toBe("/courses/mh/ratios");
      expect(mapLink(board, trig, [trig], "A", 11).href).toBe("/courses/mh/ratios");
      expect(mapLink(board, trig, [trig], "C", 10).href).toBe("/courses/mh/trig");
    });

    it("counts each published concept once", () => {
      const published = { ...trig, concepts: trig.graph.map((n) => ({ id: n.id, status: "approved" }) as Chapter["concepts"][number]) };
      expect(courseSize(split, [published])).toEqual({ chapters: 2, concepts: 3 });
    });
  });

  it("counts one chapter per course chapter and the published concepts across its parts", () => {
    const published = (x: Chapter): Chapter => ({
      ...x,
      concepts: x.graph.map((n) => ({ id: n.id, status: "approved" }) as Chapter["concepts"][number]),
    });
    // limits: A, B, C; continuity: only A covered.
    expect(courseSize({ ...c, chapters: [c.chapters[0]] }, [published(limits), published(continuity)])).toEqual({ chapters: 1, concepts: 4 });
  });
});

describe("uniqueConcepts", () => {
  it("finds the concepts exactly one course covers", () => {
    const list = [
      course("x", { chapters: [{ chapter: "ch", coverage: { ids: ["A", "B"], status: "approved" } }] }),
      course("y", { chapters: [{ chapter: "ch", coverage: { ids: ["A"], status: "approved" } }] }),
      course("z", { chapters: [] }),
    ];
    // A: x and y (shared). B: only x. C: nobody.
    expect(uniqueConcepts(ch, list)).toEqual(new Map([["B", "x"]]));
  });

  it("counts a course without a coverage list as covering the whole chapter", () => {
    const list = [course("x"), course("y", { chapters: [{ chapter: "ch", coverage: { ids: ["A"], status: "approved" } }] })];
    expect(uniqueConcepts(ch, list)).toEqual(new Map([["B", "x"], ["C", "x"]]));
  });
});

describe("unlocking inside a course", () => {
  it("treats a prerequisite the course doesn't cover as known, like an unpublished one", () => {
    // The course skips B, so C's chain is A → (B assumed) → C.
    const c = course("a", { chapters: [{ chapter: "ch", coverage: { ids: ["A", "C"], status: "approved" } }] });
    const published = new Set(["A", "B", "C"]);
    const scope = coveredIds(c, ch);
    const inCourse = new Set([...published].filter((id) => scope.has(id)));
    const states = conceptStates(ch.graph, inCourse, new Map([["A", "mastered"]]), true);
    expect(states.get("C")).toBe("available");
  });
});

describe("lookups", () => {
  it("parses only known groups", () => {
    expect(parseGroup("graduate")).toBe("graduate");
    expect(parseGroup("school")).toBe("school");
    expect(parseGroup("admin")).toBeNull();
    expect(parseGroup(undefined)).toBeNull();
  });

  it("parses only known standards", () => {
    expect(parseStandard("9")).toBe(9);
    expect(parseStandard("10")).toBe(10);
    expect(parseStandard("11")).toBe(11);
    expect(parseStandard("12")).toBe(12);
    expect(parseStandard("8")).toBeNull();
    expect(parseStandard("13")).toBeNull();
    expect(parseStandard("09")).toBeNull();
    expect(parseStandard("11 ")).toBeNull();
    expect(parseStandard(undefined)).toBeNull();
  });

  it("titles the standards Std IX to Std XII", () => {
    expect(STANDARD_TITLE).toEqual({ 9: "Std IX", 10: "Std X", 11: "Std XI", 12: "Std XII" });
  });

  it("names the subjects Maths, Physics, Chemistry and Biology", () => {
    expect(SUBJECTS).toEqual({ maths: "Maths", physics: "Physics", chemistry: "Chemistry", biology: "Biology" });
  });

  it("parses only known subjects", () => {
    expect(parseSubject("maths")).toBe("maths");
    expect(parseSubject("physics")).toBe("physics");
    expect(parseSubject("chemistry")).toBe("chemistry");
    expect(parseSubject("biology")).toBe("biology");
    expect(parseSubject("zoology")).toBeNull();
    expect(parseSubject("Physics")).toBeNull();
    expect(parseSubject(undefined)).toBeNull();
  });

  it("opens a Std on the subject the student picked, if it has it, else its first", () => {
    expect(openingSubject(["maths", "physics"], "physics")).toBe("physics");
    expect(openingSubject(["maths", "physics"], null)).toBe("maths");
    expect(openingSubject(["maths"], "physics")).toBe("maths");
  });

  it("finds a course by slug, or null", () => {
    expect(findCourse("jee-main")?.title).toBe("JEE Main");
    expect(findCourse("nope")).toBeNull();
    expect(findCourse(null)).toBeNull();
  });
});

describe("courseSize", () => {
  const published: Chapter = {
    ...ch,
    concepts: (["A", "B"] as const).map((id) => ({ id, status: "approved" }) as Chapter["concepts"][number]),
  };

  it("counts the chapters and the published concepts a student can open", () => {
    const c = course("a", { chapters: [{ chapter: "ch", coverage: { ids: ["B", "C"], status: "approved" } }] });
    expect(courseSize(c, [published])).toEqual({ chapters: 1, concepts: 1 });
  });

  it("is zero for a course with no chapters yet", () => {
    expect(courseSize(course("a", { chapters: [] }), [published])).toEqual({ chapters: 0, concepts: 0 });
  });
});

describe("withCourse", () => {
  it("adds the course to a link, keeping any query it already has", () => {
    expect(withCourse("/learn/ch/a", "jee-main")).toBe("/learn/ch/a?course=jee-main");
    expect(withCourse("/learn/ch/a?from=b", "jee-main")).toBe("/learn/ch/a?from=b&course=jee-main");
  });

  it("leaves the link alone without a course", () => {
    expect(withCourse("/learn/ch/a", undefined)).toBe("/learn/ch/a");
  });
});

describe("practiceLink", () => {
  const withVault = (pyqvault?: string) =>
    course("a", { pyqvault: { exam: "mht-cet", subject: "maths" }, chapters: [{ chapter: "ch", pyqvault }] });

  it("points a course chapter at its PYQ Vault chapter, marked as coming from Concept Ladder", () => {
    const c = withVault("circle");
    expect(practiceLink(c, c.chapters[0])).toEqual({
      href: "https://www.pyqvault.com/questions/mht-cet/maths/circle?ref=conceptladder",
      label: "Practise a questions on PYQ Vault",
    });
  });

  it("is null for a chapter without a PYQ Vault chapter", () => {
    const c = withVault(undefined);
    expect(practiceLink(c, c.chapters[0])).toBeNull();
  });

  it("is checked: a chapter's PYQ Vault slug needs the course's exam, in slug form", () => {
    const noExam = course("a", { chapters: [{ chapter: "ch", pyqvault: "circle" }] });
    expect(validateCatalog([noExam], [ch])).toContain("a: chapter ch links to PYQ Vault, but the course names no PYQ Vault exam");
    expect(validateCatalog([withVault("Bad Slug")], [ch])).toContain("a: PYQ Vault slug Bad Slug must be lowercase words joined by hyphens");
    expect(validateCatalog([withVault("circle")], [ch])).toEqual([]);
  });

  it("links MHT-CET's Circle in the pilot, and nothing else yet (owner, 2026-10-19)", () => {
    const cet = findCourse("mht-cet")!;
    const linked = courses.flatMap((c) => c.chapters.filter((e) => practiceLink(c, e)).map((e) => `${c.slug}/${slugOf(e)}`));
    expect(linked).toEqual(["mht-cet/circle"]);
    expect(practiceLink(cet, entryFor(cet, "circle")!)?.href).toBe("https://www.pyqvault.com/questions/mht-cet/maths/circle?ref=conceptladder");
  });
});

describe("the catalog", () => {
  it("is valid", () => {
    expect(validateCatalog(courses, chapters)).toEqual([]);
  });

  // A draft concept is not published, so a chapter of drafts shows "Coming soon" to students (2026-11-27: 20
  // chemistry chapters were registered and seeded as drafts). Approve a chapter before a course lists it.
  it("lists only chapters whose concepts are approved", () => {
    const listed = new Set(courses.flatMap((c) => c.chapters.flatMap(partsOf)).map((p) => p.chapter));
    const drafts = chapters
      .filter((ch) => listed.has(ch.slug))
      .flatMap((ch) => ch.concepts.filter((c) => c.status !== "approved").map((c) => `${ch.slug}/${c.id}`));
    expect(drafts).toEqual([]);
  });

  it("has the two groups, in order", () => {
    expect(GROUPS.map((g) => g.title)).toEqual(["K-12", "Graduates"]);
  });

  it("splits only the boards by standard; entrance exams span both years in one list", () => {
    expect(courses.filter((c) => c.board).map((c) => c.slug)).toEqual(["mh-board", "cbse"]);
  });

  it("names a board without its years: the standard is picked on its page", () => {
    expect(courses.filter((c) => c.board).map((c) => c.title)).toEqual(["Maharashtra Board", "CBSE"]);
  });

  it("puts every course in exactly one group", () => {
    const grouped = GROUPS.flatMap((g) => coursesIn(g.id).map((c) => c.slug));
    expect(grouped.sort()).toEqual(courses.map((c) => c.slug).sort());
  });

  it("lists the K-12 and Graduate courses", () => {
    expect(coursesIn("school").map((c) => c.short)).toEqual(["MH Board", "CBSE", "MHT-CET", "JEE Main", "NEET", "NDA"]);
    expect(coursesIn("graduate").map((c) => c.short)).toEqual(["CDS", "AFCAT", "CAPF"]);
  });

  it("has Complex Numbers in every K-12 course that teaches maths (confirmed by the owner, 2026-10-14)", () => {
    const teachesMaths = (c: (typeof courses)[number]) => c.chapters.some((x) => resolveEntry(x, chapters).subject === "maths");
    expect(coursesIn("school").filter((c) => !teachesMaths(c)).map((c) => c.slug)).toEqual(["neet"]);
    for (const c of coursesIn("school").filter(teachesMaths)) expect(c.chapters.map((x) => x.chapter)).toContain("complex-numbers");
  });

  // Settled against the Std XI book and MHT-CET 2026 papers; approved by the owner 2026-10-18.
  it("covers exactly the book's 22 Complex Numbers concepts for MH Board and MHT-CET, approved", () => {
    const book = ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", "C10", "C11", "C12", "C14", "C15", "C16", "C17", "C19", "C20", "C21", "C23", "C24", "C25"];
    for (const slug of ["mh-board", "mht-cet"]) {
      const coverage = findCourse(slug)!.chapters.find((x) => x.chapter === "complex-numbers")!.coverage!;
      expect([...coverage.ids].sort()).toEqual(book);
      expect(coverage.unsure ?? []).toEqual([]);
      expect(coverage.status).toBe("approved");
    }
  });

  // PYQ Vault's MHT-CET chapters, approved by the owner 2026-10-19 (PLAN.md "MHT-CET Maths course").
  describe("MHT-CET", () => {
    const cet = findCourse("mht-cet")!;
    const all = cet.chapters.map((e) => resolveEntry(e, chapters));
    const resolved = all.filter((r) => r.subject === "maths");

    it("lists PYQ Vault's chapters by standard, in book order", () => {
      expect(byStandard(resolved).map((g) => [g.standard, g.chapters.map((c) => c.title)])).toEqual([
        [
          11,
          [
            "Trigonometry – II",
            "Straight Line",
            "Circle",
            "Conic Sections",
            "Complex Numbers",
            "Permutations and Combinations",
            "Sets, Relations and Functions",
            "Limits",
          ],
        ],
        [
          12,
          [
            "Mathematical Logic",
            "Determinants and Matrices",
            "Trigonometric Functions",
            "Pair of Straight Lines",
            "Vectors",
            "Line and Plane",
            "Linear Programming",
            "Differentiation",
            "Applications of Derivative",
            "Indefinite Integration",
            "Definite Integration",
            "Applications of Definite Integral",
            "Differential Equations",
            "Probability Distribution",
            "Binomial Distribution",
          ],
        ],
      ]);
    });

    it("joins the pool chapters PYQ Vault teaches as one", () => {
      const joined = Object.fromEntries(
        resolved.filter((r) => r.parts.length > 1).map((r) => [r.title, r.parts.map((p) => p.chapter.slug)]),
      );
      expect(joined).toEqual({
        "Sets, Relations and Functions": ["sets-and-relations", "functions"],
        Limits: ["limits", "continuity"],
        "Determinants and Matrices": ["determinants-and-matrices", "matrices"],
        Differentiation: ["differentiation", "differentiation-12"],
        "Probability Distribution": ["probability", "probability-distributions"],
      });
    });

    it("leaves out what the current syllabus and papers don't ask", () => {
      const used = resolved.flatMap((r) => r.parts.map((p) => p.chapter.slug));
      for (const slug of ["measures-of-dispersion", "sequences-and-series", "angle-measurement", "trigonometric-functions", "binomial-theorem"]) {
        expect(used).not.toContain(slug);
      }
    });

    // Concepts built for CBSE alone (PLAN.md "CBSE Maths course", phase 2).
    const CBSE_ONLY = ["absolute-extrema"];

    // Gaps the book doesn't teach, built for MHT-CET from its PYQs (PLAN.md "MHT-CET Maths course", phase 2).
    const gaps: [string, string][] = [
      ["matrices", "cayley-hamilton"],
      ["circle", "two-circles"],
      ["application-of-derivatives", "angle-between-curves"],
    ];

    it("covers the three concepts the book doesn't teach; MH Board keeps its book list", () => {
      const board = findCourse("mh-board")!;
      for (const [slug, concept] of gaps) {
        const ch = chapters.find((c) => c.slug === slug)!;
        const id = ch.graph.find((n) => n.slug === concept)?.id;
        expect(id, `${slug}/${concept} is in the graph`).toBeDefined();
        expect(coveredIds(cet, ch).has(id!)).toBe(true);
        const book = partsOf(entryFor(board, slug)!)[0].coverage!;
        expect(book.status).toBe("approved");
        const others = ch.graph.filter((n) => n.id !== id && !CBSE_ONLY.includes(n.slug));
        expect(new Set(book.ids)).toEqual(new Set(others.map((n) => n.id)));
      }
    });

    it("takes from Sets and Relations only what Functions builds on, approved by the owner 2026-10-19", () => {
      const sets = partsOf(entryFor(cet, "sets-and-relations")!).find((p) => p.chapter === "sets-and-relations")!;
      expect(sets.coverage).toEqual({ ids: ["C01", "C02", "C09", "C10", "C11", "C12", "C13"], status: "approved" });
    });

    // PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET and NDA" (owner, 2026-11-26).
    describe("physics", () => {
      const physics = all.filter((r) => r.subject === "physics");

      it("lists PYQ Vault's 24 physics chapters by standard, in book order, after maths", () => {
        expect(byStandard(physics).map((g) => [g.standard, g.chapters.map((c) => c.title)])).toEqual([
          [11, ["Units and Measurement", "Motion in a Plane", "Laws of Motion", "Gravitation", "Mechanical Properties of Solids", "Thermal Properties of Matter", "Sound", "Optics (Ray)"]],
          [
            12,
            [
              "Rotational Dynamics",
              "Mechanical Properties of Fluids",
              "Kinetic Theory of Gases",
              "Thermodynamics",
              "Oscillations",
              "Superposition of Waves",
              "Wave Optics",
              "Electrostatics",
              "Current Electricity",
              "Magnetic Fields Due to Electric Current",
              "Magnetic Materials",
              "Electromagnetic Induction",
              "AC Circuits",
              "Dual Nature of Radiation and Matter",
              "Structure of Atoms and Nuclei",
              "Semiconductor Devices",
            ],
          ],
        ]);
        expect(all.slice(0, resolved.length)).toEqual(resolved);
      });

      it("takes the books' chapters whole (pinned to the book where other courses add concepts), joining the Std XI and XII halves PYQ Vault examines as one", () => {
        const joined = Object.fromEntries(physics.filter((r) => r.parts.length > 1).map((r) => [r.slug, r.parts.map((p) => p.chapter.slug)]));
        expect(joined).toEqual({
          "motion-in-a-plane": ["mathematical-methods", "motion-in-a-plane"],
          electrostatics: ["electrostatics", "electrostatics-12"],
          "current-electricity": ["electric-current", "current-electricity"],
          "magnetic-materials": ["magnetism", "magnetic-materials"],
          "semiconductor-devices": ["semiconductors", "semiconductor-devices"],
        });
        for (const { chapter, coverage } of physics.flatMap((r) => r.parts)) {
          const book = chapter.graph.filter((n) => n.sources.some((s) => s.startsWith("mh-sb-"))).map((n) => n.id);
          if (coverage) expect(coverage.ids, chapter.slug).toEqual(book);
        }
      });

      it("uses every book chapter but Electromagnetic Waves and Communication System, which CET doesn't list", () => {
        const used = new Set(physics.flatMap((r) => r.parts.map((p) => p.chapter.slug)));
        const pool = chapters.filter((c) => c.subject === "physics").map((c) => c.slug);
        expect(pool.filter((slug) => !used.has(slug))).toEqual(["em-waves-communication", "energy-sources", "astronomy-and-space"]);
      });
    });
  });

  // PYQ Vault's NDA chapters that the pool covers today (owner, 2026-10-19; PLAN.md "NDA Maths course").
  describe("NDA", () => {
    const nda = findCourse("nda")!;
    const resolved = nda.chapters.map((e) => resolveEntry(e, chapters)).filter((r) => r.subject === "maths");
    const parts = (title: string) =>
      resolved.find((r) => r.title === title)!.parts.map((p) => `${p.chapter.slug}${p.coverage ? ` ${p.coverage.ids.join(",")}` : ""}`);

    it("lists PYQ Vault's chapters by standard, in book order", () => {
      expect(byStandard(resolved).map((g) => [g.standard, g.chapters.map((c) => c.title)])).toEqual([
        [
          11,
          [
            "Trigonometric Identities",
            "Height & Distance",
            "Lines",
            "Circles",
            "Conics",
            "Statistics",
            "Probability",
            "Quadratic Equations",
            "Complex Numbers",
            "Sequence & Series",
            "Permutation & Combination",
            "Binomial Theorem",
            "Sets & Relations",
            "Binary Numbers",
            "Logarithms",
            "Functions",
            "Limits & Continuity",
            "Linear Inequalities",
          ],
        ],
        [
          12,
          [
            "Matrices & Determinants",
            "Trigonometric Equations",
            "Properties of Triangle",
            "Inverse Trigonometry",
            "Vectors",
            "3D Geometry",
            "Differentiation",
            "Application of Derivatives",
            "Indefinite Integration",
            "Definite Integration",
            "Applications of Integration",
            "Differential Equations",
            "Binomial Distribution",
          ],
        ],
      ]);
    });

    it("splits Std XII Trigonometric Functions into PYQ Vault's three chapters, leaving out polar coordinates", () => {
      expect(parts("Trigonometric Equations")).toEqual(["trigonometric-functions-12 C01,C02,C03,C04,C05"]);
      expect(parts("Properties of Triangle")).toEqual(["trigonometric-functions-12 C07,C08,C09,C10,C11,C16"]);
      expect(parts("Inverse Trigonometry")).toEqual(["trigonometric-functions-12 C12,C13,C14,C15"]);
    });

    it("joins and trims pool chapters the way NDA's syllabus does", () => {
      expect(parts("Trigonometric Identities")).toEqual([
        "angle-measurement",
        "trigonometric-functions C01,C02,C03,C04,C05,C06,C07,C08,C09",
        "compound-and-multiple-angles",
      ]);
      expect(parts("Matrices & Determinants")).toEqual(["determinants-and-matrices", "matrices"]);
      expect(parts("Limits & Continuity")).toEqual(["limits C01,C02,C03,C04,C05,C06,C07,C08,C09", "continuity C01,C02,C03,C04,C05"]);
      expect(parts("Differentiation")).toEqual(["differentiation", "differentiation-12"]);
      expect(parts("3D Geometry")).toEqual(["line-and-plane", "vectors C07", "sphere"]);
      expect(parts("Logarithms")).toEqual(["functions C07", "logarithms"]);
      expect(parts("Functions")).toEqual(["functions C01,C02,C03,C04,C05,C06,C08,C09,C10,C11,C12"]);
      expect(parts("Height & Distance")).toEqual(["heights-and-distances"]);
      expect(parts("Binary Numbers")).toEqual(["binary-numbers"]);
      expect(parts("Vectors")).toEqual(["vectors C01,C02,C03,C04,C05,C06,C08,C09,C10,C11,C12,C13"]);
      expect(parts("Application of Derivatives")).toEqual(["application-of-derivatives C01,C02,C03,C04,C08,C09,C10"]);
      expect(parts("Circles")).toEqual(["circle C01,C02,C03,C04,C05,C06,C07,C08"]);
      // One variable first (built for CBSE, 2026-10-21; PLAN.md backfill 11), then graphing in two.
      expect(parts("Linear Inequalities")).toEqual(["linear-inequalities", "linear-programming C01,C02,C03,C04"]);
      expect(parts("Binomial Distribution")).toEqual(["probability-distributions C01,C02,C03,C04", "binomial-distribution"]);
      expect(parts("Statistics")).toEqual(["statistics", "measures-of-dispersion"]);
      expect(parts("Quadratic Equations")).toEqual(["quadratic-equations"]);
    });

    // Phase 2c: concepts NDA asks inside chapters the books already have (PLAN.md "NDA Maths course").
    const gaps: [string, string][] = [
      ["compound-and-multiple-angles", "a-sin-plus-b-cos"],
      ["determinants-and-matrices", "special-square-matrices"],
      ["definite-integration", "differentiating-an-integral"],
      ["definite-integration", "periodic-integrands"],
      ["definite-integration", "greatest-integer-and-modulus"],
      ["binomial-theorem", "remainders-and-integer-parts"],
      ["trigonometric-functions-12", "inradius-and-circumradius"],
      ["probability", "bounds-on-probability"],
      ["functions", "functional-equations"],
    ];

    it("covers the concepts NDA asks inside the books' chapters; MH Board and MHT-CET keep their lists", () => {
      for (const [slug, concept] of gaps) {
        const ch = chapters.find((c) => c.slug === slug)!;
        const id = ch.graph.find((n) => n.slug === concept)?.id;
        expect(id, `${slug}/${concept} is in the graph`).toBeDefined();
        expect(coveredIds(nda, ch).has(id!), `NDA covers ${slug}/${concept}`).toBe(true);
        for (const other of ["mh-board", "mht-cet"]) {
          const course = findCourse(other)!;
          if (!partsFor(course, slug).length) continue;
          expect(coveredIds(course, ch).has(id!), `${other} leaves out ${slug}/${concept}`).toBe(false);
          // The book's concepts (other courses' gaps, such as JEE Main's, are not the book's either).
          const book = ch.graph.filter((n) => n.sources.some((s) => s.startsWith("mh-sb-"))).length;
          expect(coveredIds(course, ch).size, `${other} keeps the rest of ${slug}`).toBe(book);
        }
      }
    });

    it("leaves out what NDA's syllabus doesn't ask", () => {
      const used = resolved.flatMap((r) => r.parts.map((p) => p.chapter.slug));
      for (const slug of ["mathematical-logic", "pair-of-straight-lines"]) expect(used).not.toContain(slug);
    });

    it("has every list approved by the owner (2026-10-19)", () => {
      const statuses = nda.chapters.flatMap(partsOf).flatMap((p) => (p.coverage ? [p.coverage.status] : []));
      expect(new Set(statuses)).toEqual(new Set(["approved"]));
    });
  });

  // PYQ Vault's NDA physics chapters that the pool covers (owner, 2026-11-26; PLAN.md "Physics for CBSE,
  // MHT-CET, JEE Main, NEET and NDA"): what NDA's syllabus or its 2017–26 papers ask.
  describe("NDA physics", () => {
    const nda = findCourse("nda")!;
    const all = nda.chapters.map((e) => resolveEntry(e, chapters));
    const physics = all.filter((r) => r.subject === "physics");
    const parts = (slug: string) => physics.find((r) => r.slug === slug)!.parts.map((p) => `${p.chapter.slug}${p.coverage ? ` ${p.coverage.ids.join(",")}` : ""}`);

    it("lists PYQ Vault's 14 chapters by standard, after maths; Energy Sources and Astronomy are built for NDA", () => {
      expect(byStandard(physics).map((g) => [g.standard, g.chapters.map((c) => c.title)])).toEqual([
        [
          11,
          [
            "Units, Measurement and Dimensions",
            "Kinematics and Motion",
            "Laws of Motion and Forces",
            "Work, Energy and Power",
            "Gravitation",
            "Heat and Thermodynamics",
            "Sound",
            "Light and Optics",
            "Energy Sources",
            "Astronomy and Space",
          ],
        ],
        [12, ["Fluid Mechanics and Properties of Matter", "Oscillations and Waves", "Electricity and Magnetism", "Modern Physics"]],
      ]);
      expect(all.filter((r) => r.subject !== "chemistry").slice(-physics.length)).toEqual(physics);
    });

    it("joins pool chapters the way PYQ Vault's NDA chapters do", () => {
      expect(parts("kinematics-and-motion")).toEqual(["mathematical-methods C01,C02,C03,C04,C05", "motion-in-a-plane", "rotational-dynamics C01,C02,C03,C04,C06"]);
      // Collisions need work and energy (NCERT teaches them there); torque and equilibrium are the pool's share of simple machines.
      expect(parts("work-energy-and-power")).toEqual(["laws-of-motion C03,C08,C05,C07,C09"]);
      expect(parts("light-and-optics")).toEqual(["optics C01,C02,C03,C04,C05,C06,C07,C08,C09,C10", "em-waves-communication C01,C02", "wave-optics C06"]);
      expect(physics.find((r) => r.slug === "electricity-and-magnetism")!.parts.map((p) => p.chapter.slug)).toEqual([
        "electrostatics",
        "electrostatics-12",
        "electric-current",
        "current-electricity",
        "magnetism",
        "magnetic-fields-current",
        "magnetic-materials",
        "electromagnetic-induction",
        "ac-circuits",
      ]);
      expect(physics.find((r) => r.slug === "modern-physics")!.parts.map((p) => p.chapter.slug)).toEqual([
        "dual-nature",
        "atoms-nuclei",
        "semiconductors",
        "semiconductor-devices",
      ]);
    });

    it("leaves out the heavier MH material NDA never asks", () => {
      const used = new Set(physics.flatMap((r) => r.parts.map((p) => p.chapter.slug)));
      expect(used.has("mechanical-properties-solids")).toBe(true); // friction only
      expect(parts("laws-of-motion-and-forces")).toContain("mechanical-properties-solids C07");
      for (const [slug, out] of [
        ["ac-circuits", ["C02", "C05", "C10"]],
        ["superposition-of-waves", ["C05", "C10", "C14"]],
        ["current-electricity", ["C04", "C06"]],
        ["semiconductor-devices", ["C06", "C09"]],
      ] as const) {
        const ch = chapters.find((c) => c.slug === slug)!;
        for (const id of out) expect(coveredIds(nda, ch).has(id), `NDA leaves out ${slug} ${id}`).toBe(false);
      }
    });

    it("has every list approved (owner: 'you approve', 2026-11-26)", () => {
      const statuses = nda.chapters
        .filter((e) => resolveEntry(e, chapters).subject === "physics")
        .flatMap(partsOf)
        .flatMap((p) => (p.coverage ? [p.coverage.status] : []));
      expect(new Set(statuses)).toEqual(new Set(["approved"]));
    });
  });

  // NCERT's chapters, as PYQ Vault names them, that the pool covers today (PLAN.md "CBSE Maths course").
  describe("CBSE", () => {
    const cbse = findCourse("cbse")!;
    const resolved = cbse.chapters.map((e) => resolveEntry(e, chapters)).filter((r) => r.subject === "maths");
    const parts = (title: string) =>
      resolved.find((r) => r.title === title)!.parts.map((p) => `${p.chapter.slug}${p.coverage ? ` ${p.coverage.ids.join(",")}` : ""}`);

    it("lists NCERT's chapters by class, in book order", () => {
      expect(byStandard(resolved).map((g) => [g.standard, g.chapters.map((c) => c.title)])).toEqual([
        [
          11,
          [
            "Sets",
            "Relations and Functions",
            "Trigonometric Functions",
            "Complex Numbers and Quadratic Equations",
            "Linear Inequalities",
            "Permutations and Combinations",
            "Binomial Theorem",
            "Sequences and Series",
            "Straight Lines",
            "Conic Sections",
            "Introduction to Three Dimensional Geometry",
            "Limits and Derivatives",
            "Statistics",
            "Probability",
          ],
        ],
        [
          12,
          [
            "Relations and Functions",
            "Inverse Trigonometric Functions",
            "Matrices",
            "Determinants",
            "Continuity and Differentiability",
            "Application of Derivatives",
            "Integrals",
            "Application of Integrals",
            "Differential Equations",
            "Vector Algebra",
            "Three Dimensional Geometry",
            "Linear Programming",
            "Probability",
          ],
        ],
      ]);
    });

    it("takes from each pool chapter what the rationalised NCERT books and CBSE's 2022–26 papers ask", () => {
      const byClass = (standard: 11 | 12, title: string) => {
        const r = resolved.find((x) => x.title === title && x.standard === standard)!;
        return r.parts.map((p) => `${p.chapter.slug}${p.coverage ? ` ${p.coverage.ids.join(",")}` : ""}`);
      };
      expect(parts("Sets")).toEqual(["sets-and-relations C01,C02,C03,C04,C05,C09"]);
      expect(byClass(11, "Relations and Functions")).toEqual([
        "sets-and-relations C12,C13,C14",
        "functions C01,C02,C03,C05,C06,C08,C09",
      ]);
      expect(parts("Trigonometric Functions")).toEqual([
        "angle-measurement C01,C02,C03,C05",
        "trigonometric-functions C01,C02,C03,C04,C05,C06,C07,C09",
        "compound-and-multiple-angles C01,C02,C03,C04,C05,C06,C08,C09",
      ]);
      expect(parts("Complex Numbers and Quadratic Equations")).toEqual(["complex-numbers C01,C02,C03,C04,C05,C06,C07,C08,C10,C11,C12"]);
      expect(parts("Permutations and Combinations")).toEqual(["permutations-and-combinations C01,C02,C03,C04,C05,C06,C08,C09,C10,C11,C12"]);
      expect(parts("Binomial Theorem")).toEqual(["binomial-theorem C01,C06,C07,C10"]);
      expect(parts("Sequences and Series")).toEqual(["sequences-and-series C15,C16,C17,C01,C02,C03,C04,C05,C10,C11"]);
      expect(parts("Straight Lines")).toEqual(["straight-line C01,C03,C04,C05,C06,C07,C08,C09,C10,C11,C12"]);
      expect(parts("Conic Sections")).toEqual(["circle C01,C03,C04", "conic-sections C01,C02,C03,C06,C07,C08,C11,C12"]);
      expect(parts("Limits and Derivatives")).toEqual(["limits C01,C02,C03,C04,C05,C07", "differentiation C01,C03,C04,C05,C06"]);
      expect(parts("Statistics")).toEqual(["statistics C04,C10", "measures-of-dispersion C01,C02,C03,C04,C05"]);
      expect(byClass(11, "Probability")).toEqual(["probability C01,C02,C03,C04,C05,C06"]);

      expect(byClass(12, "Relations and Functions")).toEqual(["sets-and-relations C15,C16", "functions C04,C10,C11"]);
      expect(parts("Inverse Trigonometric Functions")).toEqual(["trigonometric-functions-12 C12,C13,C14,C15"]);
      expect(parts("Matrices")).toEqual(["determinants-and-matrices C07,C08,C09,C10,C11,C12"]);
      expect(parts("Determinants")).toEqual(["determinants-and-matrices C01,C02,C06", "matrices C04,C05,C06,C07,C08,C09,C11"]);
      expect(parts("Continuity and Differentiability")).toEqual(["continuity C01,C02,C03,C05", "differentiation C02", "differentiation-12"]);
      expect(parts("Linear Inequalities")).toEqual(["linear-inequalities"]);
      expect(parts("Introduction to Three Dimensional Geometry")).toEqual(["introduction-to-3d-geometry"]);
      expect(parts("Application of Derivatives")).toEqual(["application-of-derivatives C03,C04,C08,C09,C10,C12"]);
      expect(parts("Integrals")).toEqual([
        "indefinite-integration C01,C02,C03,C04,C06,C07,C08,C09,C10,C11",
        "definite-integration C02,C03,C04,C05,C06,C07,C10",
      ]);
      expect(parts("Application of Integrals")).toEqual(["application-of-definite-integration"]);
      expect(parts("Differential Equations")).toEqual(["differential-equations C01,C03,C04,C06,C07,C08,C09"]);
      expect(parts("Vector Algebra")).toEqual(["vectors C01,C02,C03,C04,C05,C06,C08,C09"]);
      expect(parts("Three Dimensional Geometry")).toEqual(["vectors C07", "line-and-plane C01,C02,C03,C04,C05"]);
      expect(byClass(12, "Probability")).toEqual(["probability C07,C08,C09,C10"]);
    });

    it("gives each course chapter its own URL", () => {
      expect(resolved.map((r) => r.slug)).toEqual([
        "sets",
        "relations-and-functions",
        "trigonometric-functions",
        "complex-numbers",
        "linear-inequalities",
        "permutations-and-combinations",
        "binomial-theorem",
        "sequences-and-series",
        "straight-lines",
        "conic-sections",
        "introduction-to-3d-geometry",
        "limits-and-derivatives",
        "statistics",
        "probability",
        "relations-and-functions-12",
        "inverse-trigonometric-functions",
        "matrices",
        "determinants",
        "continuity-and-differentiability",
        "application-of-derivatives",
        "integrals",
        "application-of-integrals",
        "differential-equations",
        "vector-algebra",
        "three-dimensional-geometry",
        "linear-programming",
        "probability-12",
      ]);
    });

    it("leaves out what CBSE doesn't teach", () => {
      const used = resolved.flatMap((r) => r.parts.map((p) => p.chapter.slug));
      for (const slug of ["mathematical-logic", "pair-of-straight-lines", "binomial-distribution", "probability-distributions", "sphere", "quadratic-equations"]) {
        expect(used).not.toContain(slug);
      }
    });

    // Phase 2: what CBSE asks that the MH Board books don't teach (PLAN.md "CBSE Maths course").
    it("covers absolute extrema on a closed interval; the other courses keep their lists", () => {
      const ch = chapters.find((c) => c.slug === "application-of-derivatives")!;
      const id = ch.graph.find((n) => n.slug === "absolute-extrema")?.id;
      expect(id, "application-of-derivatives/absolute-extrema is in the graph").toBeDefined();
      expect(coveredIds(cbse, ch).has(id!)).toBe(true);
      for (const other of ["mh-board", "mht-cet", "nda"]) {
        expect(coveredIds(findCourse(other)!, ch).has(id!), `${other} leaves it out`).toBe(false);
      }
    });

    it("has every list approved (owner: 'you approve', 2026-10-20)", () => {
      const statuses = cbse.chapters.flatMap(partsOf).flatMap((p) => (p.coverage ? [p.coverage.status] : []));
      expect(new Set(statuses)).toEqual(new Set(["approved"]));
    });
  });

  // NCERT's chapters under each exam's PYQ Vault names, from the MH physics pool (owner, 2026-11-26;
  // PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET and NDA"). Lists drafted from the rationalised
  // NCERT books, the 2024 syllabi and 2021–26 PYQs, settled and approved in the main session.
  describe("physics from NCERT: CBSE, NEET and JEE Main", () => {
    const physicsOf = (slug: string) =>
      findCourse(slug)!
        .chapters.map((e) => resolveEntry(e, chapters))
        .filter((r) => r.subject === "physics");
    const byClass = (slug: string) => byStandard(physicsOf(slug)).map((g) => [g.standard, g.chapters.map((c) => c.title)]);
    const parts = (slug: string, chapterSlug: string) =>
      physicsOf(slug)
        .find((r) => r.slug === chapterSlug)!
        .parts.map((p) => `${p.chapter.slug}${p.coverage ? ` ${p.coverage.ids.join(",")}` : ""}`);
    /** Every concept of the MH books the course doesn't cover, as "chapter Cnn" (phase 2's concepts are tested below). */
    const leftOut = (slug: string) =>
      chapters
        .filter((c) => c.subject === "physics")
        .flatMap((ch) => {
          const covered = coveredIds(findCourse(slug)!, ch);
          const book = ch.graph.filter((n) => n.sources.some((s) => s.startsWith("mh-sb-")));
          return book.filter((n) => !covered.has(n.id)).map((n) => `${ch.slug} ${n.id}`);
        })
        .sort();
    const ids = (chapter: string, ...list: string[]) => list.map((id) => `${chapter} ${id}`);

    const XI = [
      "Motion in a Straight Line",
      "Motion in a Plane",
      "Laws of Motion",
      "Work, Energy and Power",
      "System of Particles and Rotational Motion",
      "Gravitation",
      "Mechanical Properties of Solids",
      "Mechanical Properties of Fluids",
      "Thermal Properties of Matter",
      "Thermodynamics",
      "Kinetic Theory",
      "Oscillations",
      "Waves",
    ];
    const XII_MIDDLE = [
      "Current Electricity",
      "Moving Charges and Magnetism",
      "Magnetism and Matter",
      "Electromagnetic Induction",
      "Alternating Current",
      "Electromagnetic Waves",
    ];
    const XII_END = ["Wave Optics", "Dual Nature of Radiation and Matter", "Atoms", "Nuclei"];

    it("lists NCERT's chapters by class, in book order, under each exam's names", () => {
      expect(byClass("cbse")).toEqual([
        [11, ["Units and Measurement", ...XI]],
        [
          12,
          [
            "Electric Charges and Fields",
            "Electrostatic Potential and Capacitance",
            ...XII_MIDDLE,
            "Ray Optics and Optical Instruments",
            ...XII_END,
            "Semiconductor Electronics: Materials, Devices and Simple Circuits",
          ],
        ],
      ]);
      expect(byClass("neet")).toEqual([
        [11, ["Units and Measurements", ...XI]],
        [
          12,
          [
            "Electric Charges and Fields",
            "Electrostatic Potential and Capacitance",
            ...XII_MIDDLE,
            "Ray Optics and Optical Instruments",
            ...XII_END,
            "Semiconductor Electronics",
          ],
        ],
      ]);
      // JEE examines electrostatics as one chapter; Communication Systems is dropped (no PYQs since 2023).
      expect(byClass("jee-main")).toEqual([
        [11, ["Units and Measurements", ...XI]],
        [12, ["Electrostatics", ...XII_MIDDLE, "Ray Optics", ...XII_END, "Semiconductor Electronics"]],
      ]);
    });

    it("has no maths for NEET, and comes after maths for CBSE and JEE Main", () => {
      expect(findCourse("neet")!.chapters.map((e) => resolveEntry(e, chapters).subject)).not.toContain("maths");
      for (const slug of ["cbse", "jee-main"]) {
        const subjects = findCourse(slug)!.chapters.map((e) => resolveEntry(e, chapters).subject);
        expect(subjects.indexOf("physics")).toBe(subjects.lastIndexOf("maths") + 1);
      }
    });

    it("places concepts where NCERT teaches them, not where the MH books do", () => {
      for (const slug of ["cbse", "neet", "jee-main"]) {
        // Calculus opens kinematics; vectors and angular kinematics come with Motion in a Plane.
        expect(parts(slug, "motion-in-a-straight-line")).toEqual(["mathematical-methods C06,C07", "motion-in-a-plane C01,C02"]);
        expect(parts(slug, "motion-in-a-plane")[0]).toBe("mathematical-methods C01,C02,C03,C04,C05");
        // Friction (taught in the MH Solids chapter) and circular dynamics belong to Laws of Motion.
        expect(parts(slug, "laws-of-motion")[1]).toBe("mechanical-properties-solids C07");
        expect(parts(slug, "work-energy-and-power")).toEqual(["laws-of-motion C03,C08,C05", "rotational-dynamics C06"]);
        // Radiation is Thermal Properties of Matter; the transformer is Alternating Current; meters go with the galvanometer.
        expect(parts(slug, "thermal-properties-of-matter")[1]).toBe("kinetic-theory C08,C09,C10,C11");
        expect(parts(slug, "alternating-current").at(-1)).toBe("electromagnetic-induction C13");
        expect(parts(slug, "moving-charges-and-magnetism").slice(1)).toEqual(["current-electricity C09,C10", "magnetic-materials C03"]);
        expect(parts(slug, "atoms")[0]).toMatch(/^atoms-nuclei C01,C02,C03,C04,C05/);
      }
      expect(parts("jee-main", "electrostatics")).toEqual(["electrostatics", "electrostatics-12"]);
      expect(parts("cbse", "electric-charges-and-fields")).toEqual(["electrostatics C01,C02,C03,C04,C05,C06", "electrostatics-12 C01,C02,C03,C04"]);
      expect(parts("cbse", "electrostatic-potential-and-capacitance")).toEqual(["electrostatics-12 C05,C06,C07,C08,C09,C10,C11,C12,C13,C14"]);
    });

    // Asked by none of the three: hardness, echo and the qualities of sound, angular SHM, a string's free end,
    // the second Newton's law of cooling, communication systems, the cyclotron, inductors in combination, the
    // coupling coefficient, parallel resonance, Doppler for light, the biprism, the p-n junction recap, filters,
    // and transistors (JEE dropped them in 2024; last asked 2023).
    const NONE = [
      ...ids("mechanical-properties-solids", "C06"),
      ...ids("sound", "C04", "C06"),
      ...ids("oscillations", "C10"),
      ...ids("superposition-of-waves", "C07"),
      ...ids("kinetic-theory", "C12"),
      ...ids("em-waves-communication", "C03", "C04", "C05"),
      ...ids("magnetic-fields-current", "C03"),
      ...ids("electromagnetic-induction", "C09", "C12"),
      ...ids("ac-circuits", "C08"),
      ...ids("wave-optics", "C05", "C12", "C15"),
      ...ids("semiconductor-devices", "C01", "C03", "C06", "C07", "C08"),
    ];

    it("leaves out what each exam neither teaches nor asks", () => {
      // CBSE: the rationalised books (no parallax, relative velocity, conical pendulum, axes theorems, rolling,
      // Doppler, refrigerators, damping, end correction, metre bridge, potentiometer, Earth's field, hysteresis,
      // eddy currents, LC oscillations, Brewster, Davisson–Germer, radioactivity, special diodes or gates).
      expect(leftOut("cbse")).toEqual(
        [
          ...NONE,
          ...ids("units-measurements", "C02"),
          ...ids("motion-in-a-plane", "C04"),
          ...ids("rotational-dynamics", "C05", "C09", "C12"),
          ...ids("sound", "C05"),
          ...ids("thermodynamics", "C12"),
          ...ids("oscillations", "C11", "C12"),
          ...ids("superposition-of-waves", "C12"),
          ...ids("current-electricity", "C05", "C06", "C07", "C08"),
          ...ids("magnetism", "C04"),
          ...ids("magnetic-materials", "C07", "C08"),
          ...ids("electromagnetic-induction", "C07"),
          ...ids("ac-circuits", "C10"),
          ...ids("wave-optics", "C07"),
          ...ids("dual-nature", "C08"),
          ...ids("atoms-nuclei", "C08", "C09", "C10"),
          ...ids("semiconductor-devices", "C04", "C05", "C09", "C10"),
        ].sort(),
      );
      // NEET: the NMC 2024 syllabus and 2021–26 papers.
      expect(leftOut("neet")).toEqual(
        [
          ...NONE,
          ...ids("units-measurements", "C02"),
          ...ids("rotational-dynamics", "C05"),
          ...ids("sound", "C05"),
          ...ids("thermodynamics", "C12"),
          ...ids("oscillations", "C11", "C12"),
          ...ids("superposition-of-waves", "C09", "C12"),
          ...ids("current-electricity", "C06", "C07", "C08"),
          ...ids("magnetism", "C04"),
          ...ids("magnetic-materials", "C07", "C08"),
          ...ids("optics", "C07"),
        ].sort(),
      );
      // JEE Main: beyond NCERT where its papers go.
      expect(leftOut("jee-main")).toEqual([...NONE, ...ids("optics", "C07")].sort());
    });

    it("gives each course chapter its own URL", () => {
      expect(physicsOf("cbse").map((r) => r.slug)).toEqual([
        "units-and-measurement",
        "motion-in-a-straight-line",
        "motion-in-a-plane",
        "laws-of-motion",
        "work-energy-and-power",
        "rotational-motion",
        "gravitation",
        "mechanical-properties-of-solids",
        "mechanical-properties-of-fluids",
        "thermal-properties-of-matter",
        "thermodynamics",
        "kinetic-theory",
        "oscillations",
        "waves",
        "electric-charges-and-fields",
        "electrostatic-potential-and-capacitance",
        "current-electricity",
        "moving-charges-and-magnetism",
        "magnetism-and-matter",
        "electromagnetic-induction",
        "alternating-current",
        "electromagnetic-waves",
        "ray-optics-and-optical-instruments",
        "wave-optics",
        "dual-nature-of-radiation-and-matter",
        "atoms",
        "nuclei",
        "semiconductor-electronics",
      ]);
    });

    it("has every list approved (owner: 'you approve', 2026-11-26)", () => {
      for (const slug of ["cbse", "neet", "jee-main"]) {
        const statuses = findCourse(slug)!
          .chapters.filter((e) => resolveEntry(e, chapters).subject === "physics")
          .flatMap(partsOf)
          .flatMap((p) => (p.coverage ? [p.coverage.status] : []));
        expect(new Set(statuses)).toEqual(new Set(["approved"]));
      }
    });
  });

  // JEE Main maths from the maths pool (owner, 2026-11-27: "Ok" to PLAN.md "JEE Main Maths course"): PYQ Vault's
  // chapters under its names, less what the 2024 syllabus dropped.
  describe("JEE Main maths", () => {
    const jee = findCourse("jee-main")!;
    const maths = jee.chapters.map((e) => resolveEntry(e, chapters)).filter((r) => r.subject === "maths");
    const parts = (slug: string) =>
      maths.find((r) => r.slug === slug)!.parts.map((p) => `${p.chapter.slug}${p.coverage ? ` ${p.coverage.ids.join(",")}` : ""}`);
    const ids = (chapter: string, ...list: string[]) => list.map((id) => `${chapter} ${id}`);
    const whole = (chapter: string) => chapters.find((c) => c.slug === chapter)!.graph.map((n) => `${chapter} ${n.id}`);
    // Std XI's Sequences and Series, C01–C18 (C19–C21 are the Std X book's A.P. work).
    const SERIES_XI_IDS = Array.from({ length: 18 }, (_, i) => `C${String(i + 1).padStart(2, "0")}`);

    it("lists PYQ Vault's chapters by class, in NCERT's order", () => {
      expect(byStandard(maths).map((g) => [g.standard, g.chapters.map((c) => c.title)])).toEqual([
        [
          11,
          [
            "Relations and Functions",
            "Trigonometric Identities",
            "Complex Numbers",
            "Quadratic Equations",
            "Permutations and Combinations",
            "Binomial Theorem",
            "Sequences and Series",
            "Straight Lines",
            "Conic Sections",
            "Limits and Continuity",
            "Statistics",
          ],
        ],
        [
          12,
          [
            "Inverse Trigonometric Functions",
            "Trigonometric Equations",
            "Matrices",
            "Determinants",
            "Differentiation",
            "Application of Derivatives",
            "Indefinite Integration",
            "Definite Integration",
            "Application of Integrals",
            "Differential Equations",
            "Vector Algebra",
            "Three Dimensional Geometry",
            "Probability",
          ],
        ],
      ]);
    });

    it("joins and splits pool chapters the way PYQ Vault's JEE chapters do", () => {
      expect(parts("relations-and-functions")).toEqual(["sets-and-relations", "functions"]);
      expect(parts("trigonometric-identities")).toEqual([
        "angle-measurement C01,C03",
        "trigonometric-functions C01,C02,C03,C04,C05,C06,C07,C08,C09",
        "compound-and-multiple-angles",
      ]);
      expect(parts("conic-sections")).toEqual(["circle", "conic-sections"]);
      expect(parts("limits-and-continuity")).toEqual(["limits", "continuity"]);
      expect(parts("statistics")).toEqual(["statistics C01,C03,C04,C05,C06,C07,C08,C10", "measures-of-dispersion"]);
      expect(parts("matrices")).toEqual(["determinants-and-matrices C07,C08,C09,C10,C11,C12,C13", "matrices C12"]);
      expect(parts("determinants")).toEqual([
        "determinants-and-matrices C01,C02,C03,C04,C05,C06",
        "matrices C03,C04,C05,C06,C07,C08,C09,C10,C11",
      ]);
      expect(parts("differentiation")).toEqual(["differentiation", "differentiation-12"]);
      expect(parts("vector-algebra")).toEqual(["vectors C01,C02,C03,C04,C05,C06,C08,C09,C10,C11,C12,C13"]);
      expect(parts("three-dimensional-geometry")).toEqual(["introduction-to-3d-geometry", "vectors C07", "line-and-plane C01,C02,C03,C04,C05"]);
      expect(parts("probability")).toEqual(["probability", "probability-distributions C01,C02,C03,C04", "binomial-distribution"]);
      expect(parts("trigonometric-equations")).toEqual(["trigonometric-functions-12 C01,C02,C03,C04,C05"]);
      expect(parts("inverse-trigonometric-functions")).toEqual(["trigonometric-functions-12 C12,C13,C14,C15"]);
      expect(parts("sequences-and-series")).toEqual([`sequences-and-series ${SERIES_XI_IDS.join(",")},C22`]);
      expect(parts("binomial-theorem")).toEqual(["binomial-theorem C01,C02,C03,C04,C05,C06,C07,C10,C11"]);
    });

    it("leaves out what the 2024 syllabus dropped: reasoning, heights, triangles, planes, LPP and more", () => {
      const leftOut = chapters
        .filter((c) => c.subject === "maths" && (c.standard ?? 0) >= 11)
        .flatMap((ch) => {
          const covered = coveredIds(jee, ch);
          return ch.graph.filter((n) => !covered.has(n.id)).map((n) => `${ch.slug} ${n.id}`);
        })
        .sort();
      expect(leftOut).toEqual(
        [
          ...whole("linear-programming"),
          ...whole("mathematical-logic"),
          ...whole("pair-of-straight-lines"),
          ...whole("heights-and-distances"),
          ...whole("binary-numbers"),
          ...whole("sphere"),
          ...whole("logarithms"),
          ...whole("linear-inequalities"),
          ...ids("angle-measurement", "C02", "C04", "C05", "C06", "C07"),
          ...ids("trigonometric-functions", "C10"),
          ...ids("binomial-theorem", "C08", "C09"),
          ...ids("matrices", "C01", "C02"),
          ...ids("trigonometric-functions-12", "C06", "C07", "C08", "C09", "C10", "C11", "C16"),
          ...ids("line-and-plane", "C06", "C07", "C08", "C09", "C10", "C11"),
          ...ids("probability-distributions", "C05", "C06", "C07"),
          ...ids("statistics", "C02", "C09", "C11", "C12", "C13"),
          ...ids("sequences-and-series", "C19", "C20", "C21"),
        ].sort(),
      );
    });

    // Phase 2: what JEE asks that no course's books teach, appended to the pool chapters for JEE alone.
    const gaps: [chapter: string, concept: string][] = [
      ["sequences-and-series", "method-of-differences"],
      ["permutations-and-combinations", "integer-solutions"],
      ["permutations-and-combinations", "divisors-and-factorials"],
      ["straight-line", "image-in-a-line"],
      ["straight-line", "centres-of-a-triangle"],
      ["conic-sections", "normals-to-conics"],
      ["limits", "series-expansions-in-limits"],
      ["limits", "one-to-the-infinity"],
      ["differential-equations", "bernoulli-equations"],
      ["binomial-theorem", "binomial-sums-by-calculus"],
    ];

    it("adds the JEE gaps to their pool chapters, after the concepts there, covered by JEE alone", () => {
      for (const [slug, concept] of gaps) {
        const ch = chapters.find((c) => c.slug === slug)!;
        const node = ch.graph.find((n) => n.slug === concept);
        expect(node, `${slug}/${concept} is in the graph`).toBeDefined();
        expect(node!.sources.every((s) => s.startsWith("jee-main/")), `${slug}/${concept} sources`).toBe(true);
        const have = coursesIn("school").filter((c) => coveredIds(c, ch).has(node!.id)).map((c) => c.slug);
        expect(have, `${slug}/${concept}`).toEqual(["jee-main"]);
      }
      for (const slug of new Set(gaps.map(([s]) => s))) {
        const ch = chapters.find((c) => c.slug === slug)!;
        const added = ch.graph.filter((n) => gaps.some(([s, concept]) => s === slug && concept === n.slug));
        expect(ch.graph.slice(ch.graph.length - added.length), slug).toEqual(added);
      }
    });

    it("comes first in the course, and has every list approved (owner: 'Ok', 2026-11-27)", () => {
      const subjects = jee.chapters.map((e) => resolveEntry(e, chapters).subject);
      expect(subjects.slice(0, maths.length).every((s) => s === "maths")).toBe(true);
      const statuses = jee.chapters
        .filter((e) => resolveEntry(e, chapters).subject === "maths")
        .flatMap(partsOf)
        .flatMap((p) => (p.coverage ? [p.coverage.status] : []));
      expect(new Set(statuses)).toEqual(new Set(["approved"]));
    });
  });

  // Chemistry for the other courses, from the MH chemistry pool (owner, 2026-11-27: "start other courses chem end to
  // end and autonomously"; PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  describe("chemistry for the other courses", () => {
    const chemistryOf = (slug: string) =>
      findCourse(slug)!
        .chapters.map((e) => resolveEntry(e, chapters))
        .filter((r) => r.subject === "chemistry");
    const byClass = (slug: string) => byStandard(chemistryOf(slug)).map((g) => [g.standard, g.chapters.map((c) => c.title)]);
    const parts = (slug: string, chapterSlug: string) =>
      chemistryOf(slug)
        .find((r) => r.slug === chapterSlug)!
        .parts.map((p) => `${p.chapter.slug}${p.coverage ? ` ${p.coverage.ids.join(",")}` : ""}`);
    /** Every concept of the MH books the course doesn't cover, as "chapter Cnn". */
    const leftOut = (slug: string) =>
      chapters
        .filter((c) => c.subject === "chemistry")
        .flatMap((ch) => {
          const covered = coveredIds(findCourse(slug)!, ch);
          const book = ch.graph.filter((n) => n.sources.some((s) => s.startsWith("mh-sb-")));
          return book.filter((n) => !covered.has(n.id)).map((n) => `${ch.slug} ${n.id}`);
        })
        .sort();
    const ids = (chapter: string, ...list: string[]) => list.map((id) => `${chapter} ${id}`);
    /** The book's concepts of a pool chapter (phase 2's concepts are tested below). */
    const whole = (chapter: string) =>
      chapters
        .find((c) => c.slug === chapter)!
        .graph.filter((n) => n.sources.some((s) => s.startsWith("mh-sb-")))
        .map((n) => `${chapter} ${n.id}`);
    const subjectsOf = (slug: string) => findCourse(slug)!.chapters.map((e) => resolveEntry(e, chapters).subject);

    it("comes last in each course, right after physics", () => {
      for (const slug of ["cbse", "mht-cet", "jee-main", "neet", "nda"]) {
        const subjects = subjectsOf(slug);
        expect(subjects.indexOf("chemistry"), slug).toBe(subjects.lastIndexOf("physics") + 1);
        expect(subjects.slice(subjects.indexOf("chemistry")).every((s) => s === "chemistry"), slug).toBe(true);
      }
    });

    describe("from NCERT: CBSE, NEET and JEE Main", () => {
      const XI_END = ["Equilibrium", "Redox Reactions", "Organic Chemistry – Some Basic Principles and Techniques", "Hydrocarbons"];
      const XII_START = ["Solutions", "Electrochemistry", "Chemical Kinetics"];
      const XII_END = [
        "The d- and f-Block Elements",
        "Coordination Compounds",
        "Haloalkanes and Haloarenes",
        "Alcohols, Phenols and Ethers",
        "Aldehydes, Ketones and Carboxylic Acids",
        "Amines",
        "Biomolecules",
      ];

      it("lists the rationalised NCERT chapters by class, under each exam's names", () => {
        const XI = ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements and Periodicity in Properties", "Chemical Bonding and Molecular Structure", "Thermodynamics", ...XI_END];
        expect(byClass("cbse")).toEqual([
          [11, XI],
          [12, [...XII_START, ...XII_END]],
        ]);
        // NEET's 2024 syllabus keeps the p-block.
        expect(byClass("neet")).toEqual([
          [11, XI],
          [12, [...XII_START, "The p-Block Elements", ...XII_END]],
        ]);
        // JEE Main examines redox and the gas laws inside Some Basic Concepts (PYQ Vault's split).
        expect(byClass("jee-main")).toEqual([
          [
            11,
            [
              "Some Basic Concepts of Chemistry",
              "Structure of Atom",
              "Classification of Elements and Periodicity",
              "Chemical Bonding and Molecular Structure",
              "Chemical Thermodynamics",
              ...XI_END.filter((t) => t !== "Redox Reactions"),
            ],
          ],
          [12, [...XII_START, "The p-Block Elements", ...XII_END]],
        ]);
      });

      it("places concepts where NCERT teaches them, not where the MH books do", () => {
        for (const slug of ["cbse", "neet", "jee-main"]) {
          // Hydrogen bonding (MH States of Matter) and Fajans' rules (MH s-block) are Chemical Bonding.
          expect(parts(slug, "chemical-bonding")).toEqual(["chemical-bonding", "states-of-matter C02", "s-block-elements C05"]);
          expect(parts(slug, "equilibrium")).toEqual(["chemical-equilibrium", "ionic-equilibria"]);
          // Purification and chromatography open NCERT's organic techniques.
          expect(parts(slug, "organic-chemistry")).toEqual(["organic-chemistry-basics", "analytical-techniques"]);
        }
        // NCERT's d-block has no metallurgy (its Isolation of Elements chapter was dropped); JEE adds salt analysis.
        const dBlock = "transition-elements C01,C02,C03,C04,C05,C07,C08,C09";
        expect(parts("cbse", "d-and-f-block-elements")).toEqual([dBlock]);
        expect(parts("neet", "d-and-f-block-elements")).toEqual([dBlock]);
        expect(parts("jee-main", "d-and-f-block-elements")).toEqual([`${dBlock},C10,C11`]);
        // The book's concepts; JEE adds equivalents and normality.
        const basics = ["basic-concepts-chemistry C01,C02,C03,C04,C05,C06,C07", "analytical-chemistry C01,C02,C03,C04,C05,C06,C07,C08"];
        expect(parts("cbse", "some-basic-concepts-of-chemistry")).toEqual(basics);
        expect(parts("neet", "some-basic-concepts-of-chemistry")).toEqual(basics);
        expect(parts("jee-main", "some-basic-concepts-of-chemistry")).toEqual([
          basics[0],
          "analytical-chemistry",
          "states-of-matter C01,C03,C04,C05,C06",
          "redox-reactions",
        ]);
        // JEE asks first-order kinetics through radioactive decay.
        expect(parts("jee-main", "chemical-kinetics")).toEqual(["chemical-kinetics", "nuclear-chemistry C05"]);
        expect(parts("cbse", "chemical-kinetics")).toEqual(["chemical-kinetics"]);
        for (const slug of ["neet", "jee-main"]) expect(parts(slug, "p-block-elements")).toEqual(["p-block-13-14-15", "p-block-16-17-18"]);
      });

      // Dropped by the 2024 JEE and NEET syllabi and the rationalised books: surface chemistry, solid state, the
      // s-block, polymers, everyday chemistry, metallurgy; nor do they teach liquids, nuclear chemistry or green chemistry.
      const NONE = [
        ...whole("adsorption-colloids"),
        ...whole("everyday-chemistry"),
        ...whole("solid-state"),
        ...whole("polymers"),
        ...whole("green-chemistry-nanochemistry"),
        ...ids("nuclear-chemistry", "C01", "C02", "C03", "C04", "C06", "C07"),
        ...ids("s-block-elements", "C01", "C02", "C03", "C04", "C06"),
        ...ids("states-of-matter", "C07"),
        ...ids("transition-elements", "C06"),
      ];

      it("leaves out what each exam neither teaches nor asks", () => {
        const gases = ids("states-of-matter", "C01", "C03", "C04", "C05", "C06");
        expect(leftOut("cbse")).toEqual([...NONE, ...gases, ...ids("nuclear-chemistry", "C05"), ...whole("p-block-13-14-15"), ...whole("p-block-16-17-18")].sort());
        expect(leftOut("neet")).toEqual([...NONE, ...gases, ...ids("nuclear-chemistry", "C05")].sort());
        expect(leftOut("jee-main")).toEqual([...NONE].sort());
      });

      it("gives each course chapter its own URL", () => {
        expect(chemistryOf("cbse").map((r) => r.slug)).toEqual([
          "some-basic-concepts-of-chemistry",
          "structure-of-atom",
          "classification-of-elements",
          "chemical-bonding",
          "chemical-thermodynamics",
          "equilibrium",
          "redox-reactions",
          "organic-chemistry",
          "hydrocarbons",
          "solutions",
          "electrochemistry",
          "chemical-kinetics",
          "d-and-f-block-elements",
          "coordination-compounds",
          "haloalkanes-and-haloarenes",
          "alcohols-phenols-and-ethers",
          "aldehydes-ketones-and-carboxylic-acids",
          "amines",
          "biomolecules",
        ]);
      });
    });

    describe("MHT-CET", () => {
      it("lists PYQ Vault's 30 chapters by standard, in book order", () => {
        expect(byClass("mht-cet")).toEqual([
          [
            11,
            [
              "Some Basic Concepts of Chemistry",
              "Structure of Atom",
              "Chemical Bonding and Molecular Structure",
              "Redox Reactions",
              "Modern Periodic Table",
              "Elements of Group 1 and 2",
              "Elements of Group 13, 14 and 15",
              "States of Matter",
              "Surface Chemistry",
              "Basic Principles of Organic Chemistry",
              "Alkanes",
              "Alkenes",
              "Alkynes",
              "Aromatic Compounds",
            ],
          ],
          [
            12,
            [
              "Solid State",
              "Solutions and Colligative Properties",
              "Ionic Equilibria",
              "Chemical Thermodynamics and Energetics",
              "Electrochemistry",
              "Chemical Kinetics",
              "Elements of Groups 16, 17 and 18",
              "Transition and Inner Transition Elements",
              "Coordination Compounds",
              "Halogen Derivatives",
              "Alcohols, Phenols and Ethers",
              "Aldehydes, Ketones and Carboxylic Acids",
              "Amines",
              "Biomolecules",
              "Introduction to Polymer Chemistry",
              "Green Chemistry and Nanochemistry",
            ],
          ],
        ]);
      });

      it("splits Hydrocarbons four ways and files the book's formulas and stoichiometry under Some Basic Concepts", () => {
        expect(parts("mht-cet", "alkanes")).toEqual(["hydrocarbons C01,C02"]);
        expect(parts("mht-cet", "alkenes")).toEqual(["hydrocarbons C03,C04,C05"]);
        expect(parts("mht-cet", "alkynes")).toEqual(["hydrocarbons C06"]);
        expect(parts("mht-cet", "aromatic-compounds")).toEqual(["hydrocarbons C07,C08"]);
        expect(parts("mht-cet", "basic-concepts-chemistry")).toEqual([
          "basic-concepts-chemistry C01,C02,C03,C04,C05,C06,C07",
          "analytical-chemistry C04,C05,C06,C07,C08",
        ]);
      });

      it("takes every other book chapter whole, but those CET doesn't list", () => {
        expect(leftOut("mht-cet")).toEqual(
          [
            ...ids("analytical-chemistry", "C01", "C02", "C03"),
            ...whole("analytical-techniques"),
            ...whole("chemical-equilibrium"),
            ...whole("nuclear-chemistry"),
            ...whole("everyday-chemistry"),
          ].sort(),
        );
      });
    });

    describe("NDA", () => {
      it("lists PYQ Vault's chapters but Practical Chemistry, all as Std XI general science", () => {
        expect(byClass("nda")).toEqual([
          [
            11,
            [
              "Matter and Its States",
              "Atomic Structure and Periodic Classification",
              "Chemical Bonding",
              "Mole Concept and Stoichiometry",
              "Chemical Reactions",
              "Acids, Bases and Salts",
              "Hydrogen and Water",
              "Carbon and Its Compounds",
              "Metals and Non-Metals",
              "Industrial and Applied Chemistry",
              "Chemistry in Everyday Life",
            ],
          ],
        ]);
        expect(findCourse("nda")!.tagline).toBe("UPSC NDA & NA, Mathematics, Physics and Chemistry");
      });

      it("takes the books' basics where PYQ Vault's rulings place NDA's topics", () => {
        expect(parts("nda", "matter-and-its-states")).toEqual(["basic-concepts-chemistry C01,C08", "states-of-matter C01,C07", "adsorption-colloids C05,C07", "analytical-techniques"]);
        expect(parts("nda", "atomic-structure-and-periodic-classification")).toEqual(["structure-of-atom C01,C02,C03,C04,C05,C06,C07", "periodic-table"]);
        expect(parts("nda", "chemical-bonding")).toEqual(["chemical-bonding C01,C02,C04,C05,C06,C07", "redox-reactions C02"]);
        expect(parts("nda", "mole-concept-and-stoichiometry")).toEqual(["basic-concepts-chemistry C03,C04,C05,C06,C07", "analytical-chemistry C04,C05,C06,C07"]);
        expect(parts("nda", "chemical-reactions")).toEqual([
          "basic-concepts-chemistry C09",
          "redox-reactions C01,C04",
          "chemical-thermodynamics C07",
          "electrochemistry C04",
          "ionic-equilibria C09",
        ]);
        expect(parts("nda", "acids-bases-and-salts")).toEqual(["ionic-equilibria C01,C03,C05", "s-block-elements C06", "everyday-chemistry C09"]);
        expect(parts("nda", "hydrogen-and-water")).toEqual(["s-block-elements C01,C02,C07", "states-of-matter C02"]);
        expect(parts("nda", "carbon-and-its-compounds")).toEqual(["p-block-13-14-15 C04,C05", "organic-chemistry-basics C01,C02,C04", "hydrocarbons C01,C04,C07", "everyday-chemistry C03,C04"]);
        expect(parts("nda", "metals-and-non-metals")).toEqual(["s-block-elements C04", "electrochemistry C07,C11", "transition-elements C05,C06"]);
        expect(parts("nda", "industrial-and-applied-chemistry")).toEqual([
          "chemical-equilibrium C07",
          "p-block-13-14-15 C07",
          "p-block-16-17-18 C04,C06",
          "everyday-chemistry C08",
        ]);
        expect(parts("nda", "chemistry-in-everyday-life")).toEqual(["everyday-chemistry C01,C02,C05,C06,C07"]);
      });
    });

    // Phase 2: what the other courses ask that the MH books don't teach, appended to the pool chapters.
    describe("concepts the MH books don't teach", () => {
      const NCERT = ["cbse", "neet", "jee-main"];
      const gaps: [chapter: string, concept: string, courses: string[]][] = [
        ["structure-of-atom", "photoelectric-effect", NCERT],
        ["structure-of-atom", "de-broglie-uncertainty", NCERT],
        ["organic-chemistry-basics", "detecting-elements", NCERT],
        ["organic-chemistry-basics", "estimating-elements", NCERT],
        ["hydrocarbons", "conformations", NCERT],
        ["biomolecules", "vitamins", NCERT],
        ["analytical-chemistry", "equivalents-normality", ["jee-main"]],
        ["coordination-compounds", "metal-carbonyls", ["neet", "jee-main"]],
        ["transition-elements", "tests-for-metal-ions", ["jee-main"]],
        ["electrochemistry", "corrosion", ["jee-main", "nda"]],
        ["basic-concepts-chemistry", "physical-chemical-changes", ["nda"]],
        ["basic-concepts-chemistry", "types-of-reactions", ["nda"]],
        ["s-block-elements", "hard-water", ["nda"]],
        ["everyday-chemistry", "industrial-materials", ["nda"]],
        // Phase 2b: the smaller gaps.
        ["p-block-13-14-15", "phosphorus-oxoacids", ["neet", "jee-main"]],
        ["p-block-13-14-15", "nitrogen-oxides-nitric-acid", ["neet", "jee-main"]],
        ["transition-elements", "transition-metal-oxides", ["jee-main"]],
        ["everyday-chemistry", "common-chemicals", ["nda"]],
      ];

      it("puts each in its pool chapter, covered by exactly the courses that ask it", () => {
        for (const [slug, concept, want] of gaps) {
          const ch = chapters.find((c) => c.slug === slug)!;
          const id = ch.graph.find((n) => n.slug === concept)?.id;
          expect(id, `${slug}/${concept} is in the graph`).toBeDefined();
          const have = coursesIn("school").filter((c) => coveredIds(c, ch).has(id!)).map((c) => c.slug);
          expect(have.sort(), `${slug}/${concept}`).toEqual([...want].sort());
        }
      });

      it("keeps the MH Board's and MHT-CET's chemistry maps to the books' concepts", () => {
        for (const slug of new Set(gaps.map(([s]) => s))) {
          const ch = chapters.find((c) => c.slug === slug)!;
          const book = ch.graph.filter((n) => !gaps.some(([s, concept]) => s === slug && concept === n.slug)).map((n) => n.id);
          expect([...coveredIds(findCourse("mh-board")!, ch)].sort(), `mh-board ${slug}`).toEqual(book.sort());
          const cet = coveredIds(findCourse("mht-cet")!, ch);
          for (const n of ch.graph.filter((g) => !book.includes(g.id))) expect(cet.has(n.id), `mht-cet leaves out ${slug} ${n.id}`).toBe(false);
        }
      });

      it("comes after the book's concepts in each pool chapter, with the next ids, sourced from the exams", () => {
        for (const slug of new Set(gaps.map(([s]) => s))) {
          const ch = chapters.find((c) => c.slug === slug)!;
          const added = ch.graph.filter((n) => gaps.some(([s, concept]) => s === slug && concept === n.slug));
          expect(ch.graph.slice(ch.graph.length - added.length), slug).toEqual(added);
          for (const n of added) expect(n.sources.some((s) => s.startsWith("mh-sb-")), `${slug} ${n.id}`).toBe(false);
        }
      });
    });

    it("has every list approved (owner: autonomy, 2026-11-27)", () => {
      for (const slug of ["cbse", "mht-cet", "jee-main", "neet", "nda"]) {
        const statuses = findCourse(slug)!
          .chapters.filter((e) => resolveEntry(e, chapters).subject === "chemistry")
          .flatMap(partsOf)
          .flatMap((p) => (p.coverage ? [p.coverage.status] : []));
        expect(new Set(statuses), slug).toEqual(new Set(["approved"]));
      }
    });
  });

  // Phase 2: what the other courses ask that the MH books don't teach (owner, 2026-11-26: "11 main topics, now";
  // PLAN.md "Physics for CBSE, MHT-CET, JEE Main, NEET and NDA").
  describe("physics concepts the MH books don't teach", () => {
    const gaps: [chapter: string, concept: string, courses: string[]][] = [
      ["units-measurements", "vernier-screw-gauge", ["neet", "jee-main"]],
      ["laws-of-motion", "potential-energy", ["cbse", "neet", "jee-main", "nda"]],
      ["gravitation", "two-body-orbits", ["jee-main"]],
      ["fluids", "buoyancy", ["jee-main", "nda"]],
      ["kinetic-theory", "gas-mixtures", ["jee-main"]],
      ["optics", "human-eye", ["nda"]],
      ["optics", "scattering-of-light", ["nda"]],
      ["electrostatics", "charge-in-uniform-field", ["jee-main"]],
      ["electric-current", "electricity-at-home", ["nda"]],
      ["em-waves-communication", "displacement-current", ["cbse", "neet", "jee-main"]],
      ["em-waves-communication", "em-wave-energy", ["cbse", "neet", "jee-main"]],
      // The smaller gaps and NDA's two chapters the books don't have (owner, 2026-11-26: "do all three").
      ["optics", "reflecting-telescope", ["cbse", "neet", "jee-main"]],
      ["electrostatics", "field-of-ring-and-rod", ["jee-main"]],
      ["kinetic-theory", "molecular-speeds", ["jee-main"]],
      ["thermal-properties", "thermal-stress", ["jee-main"]],
      ["laws-of-motion", "levers-and-pulleys", ["nda"]],
      ["dual-nature", "electron-emission", ["cbse", "neet"]],
      ["atoms-nuclei", "de-broglie-bohr", ["cbse", "neet"]],
      ["energy-sources", "sources-of-energy", ["nda"]],
      ["astronomy-and-space", "solar-system-and-universe", ["nda"]],
    ];

    it("puts each in its pool chapter, covered by exactly the courses that ask it", () => {
      for (const [slug, concept, want] of gaps) {
        const ch = chapters.find((c) => c.slug === slug)!;
        const id = ch.graph.find((n) => n.slug === concept)?.id;
        expect(id, `${slug}/${concept} is in the graph`).toBeDefined();
        const have = coursesIn("school").filter((c) => coveredIds(c, ch).has(id!)).map((c) => c.slug);
        expect(have.sort(), `${slug}/${concept}`).toEqual([...want].sort());
      }
    });

    it("keeps the MH Board's and MHT-CET's physics maps to the books' concepts", () => {
      for (const slug of new Set(gaps.map(([s]) => s))) {
        const ch = chapters.find((c) => c.slug === slug)!;
        const book = ch.graph.filter((n) => !gaps.some(([s, concept]) => s === slug && concept === n.slug)).map((n) => n.id);
        for (const course of ["mh-board", "mht-cet"]) {
          if (slug === "em-waves-communication" && course === "mht-cet") continue;
          expect([...coveredIds(findCourse(course)!, ch)].sort(), `${course} ${slug}`).toEqual(book.sort());
        }
      }
    });

    it("comes after the book's concepts in each pool chapter, with the next ids", () => {
      for (const slug of new Set(gaps.map(([s]) => s))) {
        const ch = chapters.find((c) => c.slug === slug)!;
        const added = ch.graph.filter((n) => gaps.some(([s, concept]) => s === slug && concept === n.slug));
        expect(ch.graph.slice(ch.graph.length - added.length), slug).toEqual(added);
      }
    });
  });

  // PLAN.md "Std IX and X Maths" (owner, 2026-10-21).
  describe("Maharashtra Board Std X", () => {
    const board = findCourse("mh-board")!;
    const resolved = board.chapters.map((e) => resolveEntry(e, chapters));
    const series = chapters.find((c) => c.slug === "sequences-and-series")!;
    const AP_X = ["C15", "C19", "C16", "C20", "C17", "C18", "C21"];

    it("lists the Std IX chapters in book order, Part 1 then Part 2", () => {
      expect(resolved.filter((r) => r.standard === 9).map((r) => r.title)).toEqual([
        "Sets",
        "Real Numbers",
        "Polynomials",
        "Ratio and Proportion",
        "Linear Equations in Two Variables",
        "Financial Planning",
        "Statistics",
        "Basic Concepts in Geometry",
        "Parallel Lines",
        "Triangles",
        "Constructions of Triangles",
        "Quadrilaterals",
        "Circle",
        "Co-ordinate Geometry",
        "Trigonometry",
        "Surface Area and Volume",
      ]);
    });

    it("lists the Std X chapters in book order, Part 1 then Part 2", () => {
      expect(resolved.filter((r) => r.standard === 10).map((r) => r.title)).toEqual([
        "Linear Equations in Two Variables",
        "Quadratic Equations",
        "Arithmetic Progression",
        "Financial Planning",
        "Probability",
        "Statistics",
        "Similarity",
        "Pythagoras Theorem",
        "Circle",
        "Geometric Constructions",
        "Co-ordinate Geometry",
        "Trigonometry",
        "Mensuration",
      ]);
    });

    it("teaches A.P. from Sequences and Series C15–C18 plus the Std X book's C19–C21", () => {
      const ap = resolved.find((r) => r.slug === "arithmetic-progression")!;
      expect(ap.parts.map((p) => [p.chapter.slug, p.coverage?.ids])).toEqual([["sequences-and-series", AP_X]]);
      expect(ap.parts[0].coverage?.status).toBe("approved");
    });

    it("leaves C19–C21 out of every other course's Sequences and Series", () => {
      const xi = resolved.find((r) => r.slug === "sequences-and-series")!;
      expect(xi.standard).toBe(11);
      for (const c of courses) {
        const parts = partsFor(c, "sequences-and-series").filter(({ entry }) => resolveEntry(entry, chapters).standard !== 10);
        for (const { part } of parts) {
          for (const id of ["C19", "C20", "C21"]) expect(partScope(c, part, series).has(id), `${c.slug} leaves ${id} out`).toBe(false);
        }
      }
    });
  });

  // PLAN.md "Std XI and XII Physics" (owner, 2026-10-23).
  describe("Maharashtra Board Std XII Physics", () => {
    const resolved = findCourse("mh-board")!.chapters.map((e) => resolveEntry(e, chapters));

    it("lists the Std XII physics chapters in book order", () => {
      const physics = resolved.filter((r) => r.subject === "physics" && r.standard === 12);
      expect(physics.map((r) => r.title)).toEqual(["Rotational Dynamics", "Mechanical Properties of Fluids", "Kinetic Theory of Gases and Radiation", "Thermodynamics", "Oscillations", "Superposition of Waves", "Wave Optics", "Electrostatics", "Current Electricity", "Magnetic Fields due to Electric Current", "Magnetic Materials", "Electromagnetic Induction", "AC Circuits", "Dual Nature of Radiation and Matter", "Structure of Atoms and Nuclei", "Semiconductor Devices"]);
      expect(new Set(physics.map((r) => r.standard))).toEqual(new Set([12]));
    });

    it("lists the Std XI physics chapters in book order, before Std XII", () => {
      const physics = resolved.filter((r) => r.subject === "physics");
      const xi = physics.filter((r) => r.standard === 11);
      expect(xi.map((r) => r.title)).toEqual(["Units and Measurements", "Mathematical Methods", "Motion in a Plane", "Laws of Motion", "Gravitation", "Mechanical Properties of Solids", "Thermal Properties of Matter", "Sound", "Optics", "Electrostatics", "Electric Current Through Conductors", "Magnetism", "Electromagnetic Waves and Communication System", "Semiconductors"]);
      expect(physics.slice(0, xi.length)).toEqual(xi);
    });
  });

  // PLAN.md "Std XI and XII Chemistry" (owner, 2026-11-26). The lists grow as chapters land.
  describe("Maharashtra Board Chemistry", () => {
    const resolved = findCourse("mh-board")!.chapters.map((e) => resolveEntry(e, chapters));
    const chemistry = resolved.filter((r) => r.subject === "chemistry");

    it("lists the Std XII chemistry chapters in book order", () => {
      expect(chemistry.filter((r) => r.standard === 12).map((r) => r.title)).toEqual(["Solid State", "Solutions", "Ionic Equilibria", "Chemical Thermodynamics", "Electrochemistry", "Chemical Kinetics", "Elements of Groups 16, 17 and 18", "Transition and Inner Transition Elements", "Coordination Compounds", "Halogen Derivatives", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules", "Introduction to Polymer Chemistry", "Green Chemistry and Nanochemistry"]);
    });

    it("lists the Std XI chemistry chapters in book order, before Std XII", () => {
      const xi = chemistry.filter((r) => r.standard === 11);
      expect(xi.map((r) => r.title)).toEqual(["Some Basic Concepts of Chemistry", "Introduction to Analytical Chemistry", "Some Analytical Techniques", "Structure of Atom", "Chemical Bonding", "Redox Reactions", "Modern Periodic Table", "Elements of Group 1 and 2", "Elements of Group 13, 14 and 15", "States of Matter", "Adsorption and Colloids", "Chemical Equilibrium", "Nuclear Chemistry and Radioactivity", "Basic Principles of Organic Chemistry", "Hydrocarbons", "Chemistry in Everyday Life"]);
      expect(chemistry.slice(0, xi.length)).toEqual(xi);
    });

    it("puts chemistry after physics and covers each chapter's book concepts", () => {
      const subjects = resolved.map((r) => r.subject);
      expect(subjects.lastIndexOf("physics")).toBeLessThan(subjects.indexOf("chemistry"));
      for (const e of findCourse("mh-board")!.chapters.filter((x) => chapters.find((c) => c.slug === x.chapter)?.subject === "chemistry")) {
        const ch = chapters.find((c) => c.slug === e.chapter)!;
        const book = ch.graph.filter((n) => n.sources.some((s) => s.startsWith("mh-sb-"))).map((n) => n.id);
        expect(e.coverage?.ids ?? ch.graph.map((n) => n.id), e.chapter).toEqual(book);
      }
    });
  });

  // PLAN.md "Std XI and XII Biology" (owner, 2026-11-27). The lists grow as chapters land.
  describe("Maharashtra Board Biology", () => {
    const resolved = findCourse("mh-board")!.chapters.map((e) => resolveEntry(e, chapters));
    const biology = resolved.filter((r) => r.subject === "biology");

    it("lists the Std XII biology chapters in book order", () => {
      expect(biology.filter((r) => r.standard === 12).map((r) => r.title)).toEqual(["Reproduction in Lower and Higher Plants", "Reproduction in Lower and Higher Animals", "Inheritance and Variation", "Molecular Basis of Inheritance", "Origin and Evolution of Life", "Plant Water Relation", "Plant Growth and Mineral Nutrition", "Respiration and Circulation", "Control and Coordination", "Human Health and Diseases", "Enhancement of Food Production", "Biotechnology", "Organisms and Populations", "Ecosystems and Energy Flow", "Biodiversity, Conservation and Environmental Issues"]);
    });

    it("lists the Std XI biology chapters in book order", () => {
      expect(biology.filter((r) => r.standard === 11).map((r) => r.title)).toEqual(["Living World", "Systematics of Living Organisms", "Kingdom Plantae", "Kingdom Animalia", "Cell Structure and Organization"]);
    });

    it("lists Std XI biology before Std XII biology", () => {
      const standards = biology.map((r) => r.standard);
      expect(standards.lastIndexOf(11)).toBeLessThan(standards.indexOf(12));
    });

    it("puts biology after chemistry and covers each chapter whole", () => {
      const subjects = resolved.map((r) => r.subject);
      expect(subjects.lastIndexOf("chemistry")).toBeLessThan(subjects.indexOf("biology"));
      expect(subjects.slice(subjects.indexOf("biology")).every((s) => s === "biology")).toBe(true);
      for (const e of findCourse("mh-board")!.chapters.filter((x) => chapters.find((c) => c.slug === x.chapter)?.subject === "biology")) {
        expect(e.coverage, e.chapter).toBeUndefined();
      }
    });
  });

  it("has no doubtful Linear Programming concepts for MH Board and MHT-CET (C10 is in the HSC papers)", () => {
    for (const slug of ["mh-board", "mht-cet"]) {
      const coverage = findCourse(slug)!.chapters.find((x) => x.chapter === "linear-programming")!.coverage!;
      expect(coverage.unsure ?? []).toEqual([]);
    }
  });
});

describe("openingStandard", () => {
  const board = course("b", { board: true, defaultStandard: 11 });

  it("opens on the year the student picked, if the course has it", () => {
    expect(openingStandard(board, [10, 11, 12], 12)).toBe(12);
  });

  it("otherwise opens on the course's default year, then on the first", () => {
    expect(openingStandard(board, [10, 11, 12], null)).toBe(11);
    expect(openingStandard(board, [10, 11, 12], 9)).toBe(11);
    expect(openingStandard(board, [9, 10], null)).toBe(9);
    expect(openingStandard(course("c", { board: true }), [10, 11], null)).toBe(10);
  });

  it("opens the Maharashtra Board on Std XI for a first visit (owner, 2026-10-21)", () => {
    expect(findCourse("mh-board")!.defaultStandard).toBe(11);
  });
});

describe("byStandard", () => {
  const ch = (slug: string, standard?: Standard) => ({ slug, standard });

  it("puts the years in order, 9th to 12th, keeping the course's order within each", () => {
    expect(byStandard([ch("lpp", 12), ch("cn", 11), ch("ap", 10), ch("sets", 11), ch("sets-9", 9)])).toEqual([
      { standard: 9, chapters: [ch("sets-9", 9)] },
      { standard: 10, chapters: [ch("ap", 10)] },
      { standard: 11, chapters: [ch("cn", 11), ch("sets", 11)] },
      { standard: 12, chapters: [ch("lpp", 12)] },
    ]);
  });

  it("keeps chapters with no standard in one untitled group, last", () => {
    expect(byStandard([ch("x"), ch("cn", 11)])).toEqual([
      { standard: 11, chapters: [ch("cn", 11)] },
      { standard: undefined, chapters: [ch("x")] },
    ]);
  });

  it("returns nothing for no chapters", () => {
    expect(byStandard([])).toEqual([]);
  });
});
