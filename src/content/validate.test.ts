import { describe, expect, it } from "vitest";
import type { Chapter, Concept, Figure, GraphNode, Item } from "./types";
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
    solution: { steps: ["first", "so the answer is 1"] },
  };
}

function figure(overrides: Partial<Figure> = {}): Figure {
  return {
    alt: "The point 1 + i",
    view: { x: [-2, 2], y: [-2, 2] },
    elements: [{ kind: "point", at: [1, 1], label: "1 + i" }],
    ...overrides,
  };
}

/** Makes C3 a visual concept that meets the figure rules. */
function makeVisual(ch: Chapter) {
  ch.graph[2].visual = true;
  const c = ch.concepts[0];
  c.explanation.figure = figure();
  c.explanation.worked.steps = ["one", "two"];
  c.explanation.worked.figure = figure({ elements: [{ kind: "point", at: [1, 1], step: 2 }] });
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
  return { slug: "t", title: "T", group: "school", subject: "maths", graph: [node("C1"), node("C2", ["C1"]), node("C3", ["C2"])], concepts: [c3] };
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

    it("requires exactly four options, A to D", () => {
      expect(errorsAfter((ch) => c3(ch).items[0].options.pop())).toContainEqual(expect.stringMatching(/C3-Q1: needs 4 options \(A to D\), has 3/));
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

  describe("solutions (AUTHORING.md 9)", () => {
    it("requires a solution on every item", () => {
      expect(errorsAfter((ch) => Reflect.deleteProperty(c3(ch).items[0], "solution"))).toContainEqual(expect.stringMatching(/C3-Q1.*needs a step-by-step solution/));
    });

    it("requires at least two non-empty steps", () => {
      expect(errorsAfter((ch) => (c3(ch).items[0].solution = { steps: ["all at once"] }))).toContainEqual(
        expect.stringMatching(/C3-Q1.*solution needs at least 2 steps/),
      );
      expect(errorsAfter((ch) => (c3(ch).items[0].solution = { steps: ["one", " "] }))).toContainEqual(
        expect.stringMatching(/C3-Q1.*solution step 2 is empty/),
      );
    });
  });

  describe("figures (AUTHORING.md 10–13)", () => {
    it("accepts a visual concept with its figures", () => {
      expect(errorsAfter(makeVisual)).toEqual([]);
    });

    it("requires a figure on the idea slide and the worked example of a visual concept", () => {
      const errors = errorsAfter((ch) => {
        makeVisual(ch);
        delete c3(ch).explanation.figure;
        delete c3(ch).explanation.worked.figure;
      });
      expect(errors).toContainEqual(expect.stringMatching(/C3.*visual concept needs a figure on the idea slide/));
      expect(errors).toContainEqual(expect.stringMatching(/C3.*visual concept needs a figure on the worked example/));
    });

    it("requires a figure in the solution of a point or locus item in a visual concept", () => {
      expect(
        errorsAfter((ch) => {
          makeVisual(ch);
          c3(ch).items[0].verify = { kind: "locus", inputs: {} };
        }),
      ).toContainEqual(expect.stringMatching(/C3-Q1.*locus item in a visual concept needs a figure in its solution/));
    });

    it("rejects a figure without alt text", () => {
      expect(errorsAfter((ch) => (c3(ch).explanation.figure = figure({ alt: " " })))).toContainEqual(
        expect.stringMatching(/C3 idea figure.*needs alt text/),
      );
    });

    it("rejects an empty or inverted view", () => {
      expect(errorsAfter((ch) => (c3(ch).explanation.figure = figure({ view: { x: [2, -2], y: [-2, 2] } })))).toContainEqual(
        expect.stringMatching(/C3 idea figure.*view/),
      );
    });

    it("rejects a step beyond the worked example's steps", () => {
      expect(
        errorsAfter((ch) => {
          makeVisual(ch);
          c3(ch).explanation.worked.figure!.elements[0].step = 3;
        }),
      ).toContainEqual(expect.stringMatching(/C3 worked figure element 1.*step 3.*1 to 2/));
    });

    it("rejects a step beyond the solution's steps", () => {
      expect(
        errorsAfter((ch) => (c3(ch).items[0].solution!.figure = figure({ elements: [{ kind: "point", at: [0, 0], step: 5 }] }))),
      ).toContainEqual(expect.stringMatching(/C3-Q1 solution figure element 1.*step 5.*1 to 2/));
    });

    it("checks a question's own figure, which is shown whole (no steps)", () => {
      expect(errorsAfter((ch) => (c3(ch).items[0].figure = figure()))).toEqual([]);
      expect(errorsAfter((ch) => (c3(ch).items[0].figure = figure({ alt: "" })))).toContainEqual(
        expect.stringMatching(/C3-Q1 figure.*needs alt text/),
      );
      expect(errorsAfter((ch) => (c3(ch).items[0].figure = figure({ elements: [{ kind: "point", at: [0, 0], step: 1 }] })))).toContainEqual(
        expect.stringMatching(/C3-Q1 figure element 1.*a question's figure is shown whole, so its elements have no step/),
      );
    });

    it("rejects a non-positive radius and non-finite coordinates", () => {
      const errors = errorsAfter(
        (ch) =>
          (c3(ch).explanation.figure = figure({
            elements: [
              { kind: "circle", centre: [0, 0], r: 0 },
              { kind: "point", at: [Number.NaN, 0] },
            ],
          })),
      );
      expect(errors).toContainEqual(expect.stringMatching(/C3 idea figure element 1.*radius/));
      expect(errors).toContainEqual(expect.stringMatching(/C3 idea figure element 2.*finite/));
    });

    it("rejects a non-positive ellipse or hyperbola size", () => {
      const errors = errorsAfter(
        (ch) =>
          (c3(ch).explanation.figure = figure({
            elements: [
              { kind: "ellipse", centre: [0, 0], rx: 3, ry: 0 },
              { kind: "hyperbola", centre: [0, 0], a: -1, b: 2, axis: "x", branch: 1 },
              { kind: "ellipse", centre: [0, 0], rx: 5, ry: 4 },
              { kind: "hyperbola", centre: [0, 0], a: 3, b: Number.POSITIVE_INFINITY, axis: "y", branch: -1 },
            ],
          })),
      );
      expect(errors).toContainEqual(expect.stringMatching(/C3 idea figure element 1.*positive/));
      expect(errors).toContainEqual(expect.stringMatching(/C3 idea figure element 2.*positive/));
      expect(errors).not.toContainEqual(expect.stringMatching(/C3 idea figure element 3/));
      expect(errors).toContainEqual(expect.stringMatching(/C3 idea figure element 4.*finite/));
    });

    it("rejects LaTeX in a label (labels are plain text)", () => {
      expect(
        errorsAfter((ch) => (c3(ch).explanation.figure = figure({ elements: [{ kind: "point", at: [0, 0], label: "$z$" }] }))),
      ).toContainEqual(expect.stringMatching(/C3 idea figure element 1.*plain text/));
    });

    it("rejects a line through two equal points and an empty region", () => {
      const errors = errorsAfter(
        (ch) =>
          (c3(ch).explanation.figure = figure({
            elements: [
              { kind: "line", through: [[1, 1], [1, 1]] },
              { kind: "region", within: [] },
            ],
          })),
      );
      expect(errors).toContainEqual(expect.stringMatching(/C3 idea figure element 1.*two different points/));
      expect(errors).toContainEqual(expect.stringMatching(/C3 idea figure element 2.*at least one shape/));
    });
  });

});
