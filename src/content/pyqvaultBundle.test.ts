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
      ["nda-maths", "nda", "maths", 12],
    ]);
  });

  it("takes every Maths chapter of the target's standard (every standard when it names none), in the course's order", () => {
    for (const target of PYQVAULT_TARGETS) {
      const course = courses.find((c) => c.slug === target.course)!;
      const expected = course.chapters
        .map((entry) => resolveEntry(entry, chapters))
        .filter((r) => (target.standard === undefined || r.standard === target.standard) && r.subject === "maths")
        .map((r) => r.slug);
      const got = bundle.courses.find((c) => c.exam === target.exam)!.chapters.map((c) => c.slug);
      expect(got).toEqual(expected);
    }
    expect(bundle.courses[0].chapters).toHaveLength(15);
    expect(bundle.courses[1].chapters).toHaveLength(13);
    expect(bundle.courses[2].chapters).toHaveLength(31);
  });

  it("exports NDA across Std XI and XII: each chapter keeps its own standard, the course takes the highest", () => {
    const nda = bundle.courses.find((c) => c.exam === "nda")!;
    const course = courses.find((c) => c.slug === "nda")!;
    expect(nda.chapters.map((c) => c.standard)).toEqual(course.chapters.map((e) => resolveEntry(e, chapters).standard));
    expect(new Set(nda.chapters.map((c) => c.standard))).toEqual(new Set([11, 12]));
    expect(nda.standard).toBe(12);
  });

  it("gives each part the concepts the course shows from that pool chapter", () => {
    for (const target of PYQVAULT_TARGETS) {
      const course = courses.find((c) => c.slug === target.course)!;
      const out = bundle.courses.find((c) => c.exam === target.exam)!;
      for (const ch of out.chapters) {
        const entry = course.chapters.find((e) => resolveEntry(e, chapters).slug === ch.slug && resolveEntry(e, chapters).standard === ch.standard)!;
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

  it("refuses a chapter with no standard when the target takes every standard", () => {
    const noYear = chapters.map((c) => (c.slug === "binary-numbers" ? { ...c, standard: undefined } : c));
    expect(() => pyqvaultBundle([{ course: "nda", exam: "nda", subject: "maths" }], courses, noYear, true)).toThrow(/binary-numbers/);
  });

  it("refuses a target whose course does not exist", () => {
    expect(() => pyqvaultBundle([{ course: "nope", exam: "x", subject: "maths", standard: 12 }], courses, chapters, true)).toThrow(/nope/);
  });
});
