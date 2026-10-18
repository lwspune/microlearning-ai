import { describe, expect, it } from "vitest";
import { conceptStates } from "@/engine/unlock";
import { chapters } from "./chapters";
import {
  type Course,
  coursesIn,
  courseSize,
  coveredIds,
  courses,
  findCourse,
  GROUPS,
  parseGroup,
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

  it("needs an 11th + 12th chapter to name its standard; a Graduates chapter has none", () => {
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
    expect(GROUPS.map((g) => g.title)).toEqual(["11th + 12th", "Graduates"]);
  });

  it("puts every course in exactly one group", () => {
    const grouped = GROUPS.flatMap((g) => coursesIn(g.id).map((c) => c.slug));
    expect(grouped.sort()).toEqual(courses.map((c) => c.slug).sort());
  });

  it("lists the 11th + 12th and Graduate courses", () => {
    expect(coursesIn("school").map((c) => c.short)).toEqual(["MH Board", "CBSE", "MHT-CET", "JEE Main", "NDA"]);
    expect(coursesIn("graduate").map((c) => c.short)).toEqual(["CDS", "AFCAT", "CAPF"]);
  });

  it("has Complex Numbers in every 11th + 12th course (confirmed by the owner, 2026-10-14)", () => {
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
