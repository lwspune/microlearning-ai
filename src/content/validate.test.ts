import { describe, expect, it } from "vitest";
import type { Chapter, Concept, GraphNode, Item } from "./types";
import { validateChapter } from "./validate";

function node(id: string, prereqs: string[] = []): GraphNode {
  return { id, slug: id.toLowerCase(), title: id, oneLiner: "", group: "g", tier: "core", prereqs, ext: [], sources: [] };
}

function item(id: string, wrong: [string, string, string]): Item {
  return {
    id,
    source: { kind: "authored" },
    stem: "",
    verify: { kind: "value", inputs: {} },
    options: [
      { key: "A", text: "", correct: true, value: "1" },
      { key: "B", text: "", correct: false, misconceptionId: wrong[0], value: "2" },
      { key: "C", text: "", correct: false, misconceptionId: wrong[1], value: "3" },
      { key: "D", text: "", correct: false, misconceptionId: wrong[2], value: "4" },
    ],
  };
}

/** C1 → C2 → C3, with C3 fully authored and valid. */
function validChapter(): Chapter {
  const c3: Concept = {
    id: "C3",
    status: "draft",
    hook: { prompt: "", reveal: "" },
    explanation: { intuition: "", formal: "", worked: { prompt: "", steps: [], answer: "" }, visualSpec: "" },
    misconceptions: [
      { id: "C3-M1", mistake: "", remediation: "", fallback: { kind: "concept", id: "C2" } },
      { id: "C3-M2", mistake: "", remediation: "", fallback: { kind: "concept", id: "C1" } },
      { id: "C3-M3", mistake: "", remediation: "", fallback: { kind: "none" } },
    ],
    items: [1, 2, 3, 4, 5].map((n) => item(`C3-Q${n}`, ["C3-M1", "C3-M2", "C3-M3"])),
  };
  return { slug: "t", title: "T", graph: [node("C1"), node("C2", ["C1"]), node("C3", ["C2"])], concepts: [c3] };
}

function errorsAfter(mutate: (ch: Chapter) => void): string[] {
  const ch = validChapter();
  mutate(ch);
  return validateChapter(ch);
}

const c3 = (ch: Chapter) => ch.concepts[0];

describe("validateChapter", () => {
  it("accepts a valid chapter", () => {
    expect(validateChapter(validChapter())).toEqual([]);
  });

  describe("graph", () => {
    it("rejects duplicate concept ids", () => {
      expect(errorsAfter((ch) => ch.graph.push(node("C2")))).toContainEqual(expect.stringMatching(/duplicate concept id C2/));
    });

    it("rejects a prerequisite that is not in the graph", () => {
      expect(errorsAfter((ch) => ch.graph[1].prereqs.push("C9"))).toContainEqual(expect.stringMatching(/C2.*unknown prerequisite C9/));
    });

    it("rejects a cycle", () => {
      expect(errorsAfter((ch) => ch.graph[0].prereqs.push("C3"))).toContainEqual(expect.stringMatching(/cycle/));
    });

    it("rejects a self-loop", () => {
      expect(errorsAfter((ch) => ch.graph[0].prereqs.push("C1"))).toContainEqual(expect.stringMatching(/cycle/));
    });
  });

  describe("concepts", () => {
    it("rejects a concept that is not in the graph", () => {
      expect(errorsAfter((ch) => (c3(ch).id = "C7"))).toContainEqual(expect.stringMatching(/C7.*not in the graph/));
    });

    it("rejects a misconception id not prefixed by its concept", () => {
      expect(
        errorsAfter((ch) => {
          c3(ch).misconceptions[0].id = "C2-M1";
          c3(ch).items.forEach((it) => (it.options[1].misconceptionId = "C2-M1"));
        }),
      ).toContainEqual(expect.stringMatching(/C2-M1.*must start with C3-/));
    });

    it("rejects a duplicate misconception id", () => {
      expect(errorsAfter((ch) => (c3(ch).misconceptions[1].id = "C3-M1"))).toContainEqual(
        expect.stringMatching(/duplicate misconception id C3-M1/),
      );
    });

    it("rejects a fallback that is not an ancestor (it would route forward)", () => {
      expect(
        errorsAfter((ch) => {
          ch.graph.push(node("C4", ["C1"]));
          c3(ch).misconceptions[0].fallback = { kind: "concept", id: "C4" };
        }),
      ).toContainEqual(expect.stringMatching(/C3-M1.*fallback C4 is not a prerequisite ancestor of C3/));
    });

    it("rejects a misconception no item can detect", () => {
      expect(
        errorsAfter((ch) => c3(ch).misconceptions.push({ id: "C3-M4", mistake: "", remediation: "", fallback: { kind: "none" } })),
      ).toContainEqual(expect.stringMatching(/C3-M4.*no item/));
    });

    it("rejects fewer than 5 items", () => {
      expect(errorsAfter((ch) => c3(ch).items.pop())).toContainEqual(expect.stringMatching(/C3.*4 items.*at least 5/));
    });
  });

  describe("items", () => {
    it("rejects an item id not prefixed by its concept", () => {
      expect(errorsAfter((ch) => (c3(ch).items[0].id = "C2-Q1"))).toContainEqual(expect.stringMatching(/C2-Q1.*must start with C3-/));
    });

    it("rejects duplicate item ids", () => {
      expect(errorsAfter((ch) => (c3(ch).items[1].id = "C3-Q1"))).toContainEqual(expect.stringMatching(/duplicate item id C3-Q1/));
    });

    it("requires exactly one correct option", () => {
      expect(errorsAfter((ch) => (c3(ch).items[0].options[1].correct = true))).toContainEqual(
        expect.stringMatching(/C3-Q1.*exactly one correct option/),
      );
    });

    it("rejects an untagged wrong option", () => {
      expect(errorsAfter((ch) => delete c3(ch).items[0].options[1].misconceptionId)).toContainEqual(
        expect.stringMatching(/C3-Q1 option B.*no misconception/),
      );
    });

    it("rejects a wrong option tagged with another concept's misconception", () => {
      expect(errorsAfter((ch) => (c3(ch).items[0].options[1].misconceptionId = "C2-M1"))).toContainEqual(
        expect.stringMatching(/C3-Q1 option B.*C2-M1 is not a misconception of C3/),
      );
    });

    it("rejects a correct option that carries a misconception", () => {
      expect(errorsAfter((ch) => (c3(ch).items[0].options[0].misconceptionId = "C3-M1"))).toContainEqual(
        expect.stringMatching(/C3-Q1 option A.*correct option cannot carry a misconception/),
      );
    });

    it("rejects duplicate option keys", () => {
      expect(errorsAfter((ch) => (c3(ch).items[0].options[1].key = "A"))).toContainEqual(
        expect.stringMatching(/C3-Q1.*duplicate option key A/),
      );
    });
  });
});
