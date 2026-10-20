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
  STANDARD_TITLE,
  uniqueConcepts,
  validateCatalog,
  withCourse,
  byStandard,
} from "./courses";
import type { Chapter, GraphNode } from "./types";

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
    expect(validateCatalog([course("a")], [{ ...ch, standard: undefined }])).toContain("a: chapter ch needs a standard (11 or 12)");
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
    expect(parseStandard("11")).toBe(11);
    expect(parseStandard("12")).toBe(12);
    expect(parseStandard("10")).toBeNull();
    expect(parseStandard("11 ")).toBeNull();
    expect(parseStandard(undefined)).toBeNull();
  });

  it("titles the standards as Std XI and Std XII", () => {
    expect(STANDARD_TITLE).toEqual({ 11: "Std XI", 12: "Std XII" });
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
    expect(coursesIn("school").map((c) => c.short)).toEqual(["MH Board", "CBSE", "MHT-CET", "JEE Main", "NDA"]);
    expect(coursesIn("graduate").map((c) => c.short)).toEqual(["CDS", "AFCAT", "CAPF"]);
  });

  it("has Complex Numbers in every K-12 course (confirmed by the owner, 2026-10-14)", () => {
    for (const c of coursesIn("school")) expect(c.chapters.map((x) => x.chapter)).toContain("complex-numbers");
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
    const resolved = cet.chapters.map((e) => resolveEntry(e, chapters));

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
  });

  // PYQ Vault's NDA chapters that the pool covers today (owner, 2026-10-19; PLAN.md "NDA Maths course").
  describe("NDA", () => {
    const nda = findCourse("nda")!;
    const resolved = nda.chapters.map((e) => resolveEntry(e, chapters));
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
      expect(parts("Limits & Continuity")).toEqual(["limits", "continuity C01,C02,C03,C04,C05"]);
      expect(parts("Differentiation")).toEqual(["differentiation", "differentiation-12"]);
      expect(parts("3D Geometry")).toEqual(["line-and-plane", "vectors C07", "sphere"]);
      expect(parts("Logarithms")).toEqual(["functions C07", "logarithms"]);
      expect(parts("Functions")).toEqual(["functions C01,C02,C03,C04,C05,C06,C08,C09,C10,C11,C12"]);
      expect(parts("Height & Distance")).toEqual(["heights-and-distances"]);
      expect(parts("Binary Numbers")).toEqual(["binary-numbers"]);
      expect(parts("Vectors")).toEqual(["vectors C01,C02,C03,C04,C05,C06,C08,C09,C10,C11,C12,C13"]);
      expect(parts("Application of Derivatives")).toEqual(["application-of-derivatives C01,C02,C03,C04,C08,C09,C10"]);
      expect(parts("Circles")).toEqual(["circle C01,C02,C03,C04,C05,C06,C07,C08"]);
      expect(parts("Linear Inequalities")).toEqual(["linear-programming C01,C02,C03,C04"]);
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
          expect(coveredIds(course, ch).size, `${other} keeps the rest of ${slug}`).toBe(ch.graph.length - gaps.filter(([s]) => s === slug).length);
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

  // NCERT's chapters, as PYQ Vault names them, that the pool covers today (PLAN.md "CBSE Maths course").
  describe("CBSE", () => {
    const cbse = findCourse("cbse")!;
    const resolved = cbse.chapters.map((e) => resolveEntry(e, chapters));
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
      expect(cbse.chapters.map(slugOf)).toEqual([
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

  it("has no doubtful Linear Programming concepts for MH Board and MHT-CET (C10 is in the HSC papers)", () => {
    for (const slug of ["mh-board", "mht-cet"]) {
      const coverage = findCourse(slug)!.chapters.find((x) => x.chapter === "linear-programming")!.coverage!;
      expect(coverage.unsure ?? []).toEqual([]);
    }
  });
});

describe("byStandard", () => {
  const ch = (slug: string, standard?: 11 | 12) => ({ slug, standard });

  it("puts 11th chapters before 12th, keeping the course's order within each", () => {
    expect(byStandard([ch("lpp", 12), ch("cn", 11), ch("sets", 11)])).toEqual([
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
