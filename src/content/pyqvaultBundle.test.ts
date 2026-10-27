import { describe, expect, it } from "vitest";
import { chapters } from "./chapters";
import { courses, partScope, partsOf, resolveEntry } from "./courses";
import { PYQVAULT_TARGETS, pyqvaultBundle } from "./pyqvaultBundle";
import { toSeedPayload } from "./seedPayload";

describe("pyqvaultBundle", () => {
  const bundle = pyqvaultBundle(PYQVAULT_TARGETS, courses, chapters, true);

  it("has one course per target, named by its PYQ Vault exam and subject", () => {
    expect(bundle.courses.map((c) => [c.slug, c.exam, c.subject, c.standard])).toEqual([
      ["mh-hsc-12-maths", "mh-hsc-12", "maths", 12],
      ["cbse-12-maths", "cbse-12", "maths", 12],
    ]);
  });

  it("takes every Std XII Maths chapter of each course, in the course's order", () => {
    for (const target of PYQVAULT_TARGETS) {
      const course = courses.find((c) => c.slug === target.course)!;
      const expected = course.chapters
        .map((entry) => resolveEntry(entry, chapters))
        .filter((r) => r.standard === 12 && r.subject === "maths")
        .map((r) => r.slug);
      const got = bundle.courses.find((c) => c.exam === target.exam)!.chapters.map((c) => c.slug);
      expect(got).toEqual(expected);
    }
    expect(bundle.courses[0].chapters).toHaveLength(15);
    expect(bundle.courses[1].chapters).toHaveLength(13);
  });

  it("gives each part the concepts the course shows from that pool chapter", () => {
    for (const target of PYQVAULT_TARGETS) {
      const course = courses.find((c) => c.slug === target.course)!;
      const out = bundle.courses.find((c) => c.exam === target.exam)!;
      for (const ch of out.chapters) {
        const entry = course.chapters.find((e) => resolveEntry(e, chapters).slug === ch.slug && resolveEntry(e, chapters).standard === 12)!;
        const expected = partsOf(entry).map((p) => {
          const pool = chapters.find((c) => c.slug === p.chapter)!;
          const scope = partScope(course, p, pool);
          return { chapter: p.chapter, concepts: pool.graph.map((n) => n.id).filter((id) => scope.has(id)) };
        });
        expect(ch.parts).toEqual(expected);
      }
    }
  });

  it("carries exactly the pool chapters the courses use, as their seed payloads", () => {
    const used = new Set(bundle.courses.flatMap((c) => c.chapters.flatMap((ch) => ch.parts.map((p) => p.chapter))));
    expect(new Set(bundle.chapters.map((c) => c.slug))).toEqual(used);
    for (const payload of bundle.chapters) {
      const chapter = chapters.find((c) => c.slug === payload.slug)!;
      expect(payload).toEqual(toSeedPayload(chapter, true));
    }
  });

  it("names only concepts that exist in their pool chapter", () => {
    const codes = new Map(bundle.chapters.map((c) => [c.slug, new Set(c.concepts.map((k) => k.code))]));
    for (const course of bundle.courses)
      for (const ch of course.chapters)
        for (const part of ch.parts) for (const id of part.concepts) expect(codes.get(part.chapter)!.has(id)).toBe(true);
  });

  it("marks items unverified unless told the verifier passed", () => {
    const unverified = pyqvaultBundle(PYQVAULT_TARGETS, courses, chapters, false);
    const items = unverified.chapters.flatMap((c) => c.concepts.flatMap((k) => k.items));
    expect(items.length).toBeGreaterThan(0);
    expect(items.every((i) => !i.verified)).toBe(true);
  });

  it("refuses a target whose course does not exist", () => {
    expect(() => pyqvaultBundle([{ course: "nope", exam: "x", subject: "maths", standard: 12 }], courses, chapters, true)).toThrow(/nope/);
  });
});
