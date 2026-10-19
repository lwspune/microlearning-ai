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
  partsOf,
  resolveEntry,
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
        expect(new Set(book.ids)).toEqual(new Set(ch.graph.filter((n) => n.id !== id).map((n) => n.id)));
      }
    });

    it("takes from Sets and Relations only what Functions builds on, approved by the owner 2026-10-19", () => {
      const sets = partsOf(entryFor(cet, "sets-and-relations")!).find((p) => p.chapter === "sets-and-relations")!;
      expect(sets.coverage).toEqual({ ids: ["C01", "C02", "C09", "C10", "C11", "C12", "C13"], status: "approved" });
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
