import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`The line $x + y = 5$ splits the plane in two. **Which half is $x + y \le 5$?**`,
    reveal: t`Try the origin: $0 + 0 \le 5$ is true. So it is the half containing the origin, plus the line itself.`,
  },
  explanation: {
    intuition: t`A straight line cuts the plane into two halves. On one side $ax + by$ is less than $c$, on the other it is more, and on the line it equals $c$. Every point on a side gives the same answer, so one test point decides the whole side.`,
    formal: t`**To graph $ax + by \le c$ (or $\ge c$):**

1. Draw the line $ax + by = c$ (intercepts or any two points). With $\le$ or $\ge$ the line belongs to the region: draw it solid. Only $<$ and $>$ leave it out.
2. Test a point not on the line. The origin is easiest: put $x = 0,\ y = 0$.
3. True: keep the test point's side. False: keep the other side.

**Line through the origin** ($c = 0$), like $y \le 3x$: the origin gives $0 \le 0$, true whichever side you mean, so it tells you nothing. Test $(1, 0)$ or $(0, 1)$ instead: at $(1, 0)$, $0 \le 3$ is true, so keep the side containing $(1, 0)$.`,
    worked: {
      prompt: t`Which region does $x + 3y \ge 6$ describe?`,
      steps: [
        t`Draw the line $x + 3y = 6$ through $(6, 0)$ and $(0, 2)$. The $\ge$ includes it.`,
        t`Test the origin: $0 + 3 \cdot 0 \ge 6$ gives $0 \ge 6$, false.`,
        t`So keep the other side: the region is the line and the side away from the origin.`,
      ],
      answer: t`The line and the side away from the origin`,
      figure: {
        alt: "The line x + 3y = 6 through (6, 0) and (0, 2). The origin fails the test (0 ≥ 6 is false), so the side away from the origin is shaded, with the line.",
        axes: "xy",
        view: { x: [-0.8, 8], y: [-0.8, 4.5] },
        elements: [
          { kind: "line", through: [[0, 2], [-3, 3]], step: 1 },
          { kind: "point", at: [6, 0], tone: "muted", step: 1 },
          { kind: "point", at: [0, 2], tone: "muted", step: 1 },
          { kind: "label", at: [3, 1], label: "x + 3y = 6", labelAt: "ne", step: 1 },
          { kind: "point", at: [0, 0], tone: "bad", label: "0 ≥ 6 false", labelAt: "ne", step: 2 },
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [3, 1]] }], step: 3 },
          { kind: "label", at: [5.5, 3], label: "x + 3y ≥ 6", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The line x + y = 5. The origin passes the test (0 ≤ 5 is true), so the half containing the origin is shaded, with the line.",
      axes: "xy",
      view: { x: [-2, 7], y: [-2, 7] },
      elements: [
        { kind: "line", through: [[0, 5], [-1, 6]], step: 1 },
        { kind: "label", at: [3.5, 1.5], label: "x + y = 5", labelAt: "ne", step: 1 },
        { kind: "point", at: [0, 0], tone: "good", label: "0 ≤ 5 true", labelAt: "ne", step: 2 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[0, 5], [-1, 6]] }], step: 3 },
        { kind: "label", at: [1.2, 2.4], label: "x + y ≤ 5", step: 3 },
      ],
    },
    visualSpec: t`Drag a test point around a line $ax + by = c$; it turns green where the inequality is true and red where it is false, and its whole side shades when the student picks a side.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Keeping the side that fails the test",
      remediation: "The test point's result is about its own side: true keeps that side, false keeps the other side.",
      fallback: { kind: "ext", topic: "linear inequalities" },
    },
    {
      id: "C02-M2",
      mistake: t`Leaving the boundary line out of $\le$ or $\ge$`,
      remediation: t`$\le$ means less than or equal to, so points on the line count. Only $<$ and $>$ leave the line out.`,
      fallback: { kind: "ext", topic: "linear inequalities" },
    },
    {
      id: "C02-M3",
      mistake: "Testing the origin when the line passes through it",
      remediation: t`The origin gives $0 \le 0$, true whichever side you mean. Test a point off the line, such as $(1, 0)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Treating $\le$ or $\ge$ as $=$: graphing only the boundary line`,
      remediation: t`The line $ax + by = c$ is only the boundary. The inequality adds every point on one side of it: test a point off the line to find which side.`,
      fallback: { kind: "ext", topic: "linear inequalities" },
    },
  ],
  engineNotes: [
    "C02-M3 only shows on lines through the origin (C02-Q3, C02-Q5); for any other line the origin is a valid test point.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "authored" },
      stem: t`Which region does $3x + 2y \ge 12$ describe?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["3*x + 2*y >= 12"] } },
      options: [
        { key: "A", text: t`The side away from the origin, without the line`, correct: false, misconceptionId: "C02-M2", value: "4" },
        { key: "B", text: t`The line and the side away from the origin`, correct: true, value: "2" },
        { key: "C", text: t`The line and the side containing the origin`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "D", text: t`Only the line $3x + 2y = 12$`, correct: false, misconceptionId: "C02-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`Draw the line $3x + 2y = 12$ through $(4, 0)$ and $(0, 6)$. The $\ge$ includes it.`,
          t`Test the origin: $3 \cdot 0 + 2 \cdot 0 \ge 12$ gives $0 \ge 12$, false.`,
          t`So the region is the line and the side away from the origin.`,
        ],
        figure: {
          alt: "The line 3x + 2y = 12 through (4, 0) and (0, 6). The origin fails (0 ≥ 12 is false), so the side away from it is shaded, with the line.",
          axes: "xy",
          view: { x: [-0.75, 7], y: [-0.75, 7.5] },
          elements: [
            { kind: "line", through: [[0, 6], [-2, 9]], step: 1 },
            { kind: "point", at: [4, 0], tone: "muted", step: 1 },
            { kind: "point", at: [0, 6], tone: "muted", step: 1 },
            { kind: "label", at: [3, 1.5], label: "3x + 2y = 12", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 0], tone: "bad", label: "0 ≥ 12 false", labelAt: "ne", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 6], [2, 3]] }], step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`Which region does $x + 4y \le 8$ describe?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + 4*y <= 8"] } },
      options: [
        { key: "A", text: t`The line and the side containing the origin`, correct: true, value: "1" },
        { key: "B", text: t`The line and the side away from the origin`, correct: false, misconceptionId: "C02-M1", value: "2" },
        { key: "C", text: t`The side containing the origin, without the line`, correct: false, misconceptionId: "C02-M2", value: "3" },
        { key: "D", text: t`Only the line $x + 4y = 8$`, correct: false, misconceptionId: "C02-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`Draw the line $x + 4y = 8$ through $(8, 0)$ and $(0, 2)$. The $\le$ includes it.`,
          t`Test the origin: $0 + 4 \cdot 0 \le 8$ gives $0 \le 8$, true.`,
          t`So the region is the line and the side containing the origin.`,
        ],
        figure: {
          alt: "The line x + 4y = 8 through (8, 0) and (0, 2). The origin passes (0 ≤ 8 is true), so the side containing it is shaded, with the line.",
          axes: "xy",
          view: { x: [-1.5, 10], y: [-1.5, 4] },
          elements: [
            { kind: "line", through: [[0, 2], [-4, 3]], step: 1 },
            { kind: "point", at: [8, 0], tone: "muted", step: 1 },
            { kind: "point", at: [0, 2], tone: "muted", step: 1 },
            { kind: "label", at: [4, 1], label: "x + 4y = 8", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 0], tone: "good", label: "0 ≤ 8 true", labelAt: "ne", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [-4, 3]] }], step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`Which region does $y \le 2x$ describe?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["y <= 2*x"], ref: "1" } },
      options: [
        { key: "A", text: t`The side containing the origin`, correct: false, misconceptionId: "C02-M3", value: "5" },
        { key: "B", text: t`The line and the side containing $(1, 0)$`, correct: true, value: "1" },
        { key: "C", text: t`The line and the side containing $(0, 1)$`, correct: false, misconceptionId: "C02-M1", value: "2" },
        { key: "D", text: t`The side containing $(1, 0)$, without the line`, correct: false, misconceptionId: "C02-M2", value: "3" },
      ],
      solution: {
        steps: [
          t`Draw the line $y = 2x$ through $(0, 0)$ and $(1, 2)$. The $\le$ includes it.`,
          t`The origin is on the line ($0 \le 0$ tells nothing), so test $(1, 0)$: $0 \le 2 \cdot 1$ is true.`,
          t`So the region is the line and the side containing $(1, 0)$.`,
        ],
        figure: {
          alt: "The line y = 2x through the origin and (1, 2). The origin is on the line, so (1, 0) is tested: 0 ≤ 2 is true, and the side containing (1, 0) is shaded, with the line.",
          axes: "xy",
          view: { x: [-2, 3], y: [-2, 4] },
          elements: [
            { kind: "line", through: [[0, 0], [-1, -2]], step: 1 },
            { kind: "point", at: [1, 2], tone: "muted", step: 1 },
            { kind: "label", at: [1.5, 3], label: "y = 2x", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 0], tone: "muted", label: "0 ≤ 0", labelAt: "nw", step: 2 },
            { kind: "point", at: [1, 0], tone: "good", label: "0 ≤ 2 true", labelAt: "ne", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [-1, -2]] }], step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Which region does $x - y \le 2$ describe?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x - y <= 2"] } },
      options: [
        { key: "A", text: t`The line and the side away from the origin`, correct: false, misconceptionId: "C02-M1", value: "2" },
        { key: "B", text: t`The side containing the origin, without the line`, correct: false, misconceptionId: "C02-M2", value: "3" },
        { key: "C", text: t`The line and the side containing the origin`, correct: true, value: "1" },
        { key: "D", text: t`Only the line $x - y = 2$`, correct: false, misconceptionId: "C02-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`Draw the line $x - y = 2$ through $(2, 0)$ and $(0, -2)$. The $\le$ includes it.`,
          t`Test the origin: $0 - 0 \le 2$ gives $0 \le 2$, true.`,
          t`So the region is the line and the side containing the origin.`,
        ],
        figure: {
          alt: "The line x − y = 2 through (2, 0) and (0, −2). The origin passes (0 ≤ 2 is true), so the side containing it is shaded, with the line.",
          axes: "xy",
          view: { x: [-3, 5], y: [-3, 4] },
          elements: [
            { kind: "line", through: [[0, -2], [1, -1]], step: 1 },
            { kind: "point", at: [2, 0], tone: "muted", step: 1 },
            { kind: "point", at: [0, -2], tone: "muted", step: 1 },
            { kind: "label", at: [4, 2], label: "x − y = 2", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 0], tone: "good", label: "0 ≤ 2 true", labelAt: "nw", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, -2], [1, -1]] }], step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Which region does $x \ge 3y$ describe?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x - 3*y >= 0"], ref: "1" } },
      options: [
        { key: "A", text: t`The line and the side containing $(0, 1)$`, correct: false, misconceptionId: "C02-M1", value: "2" },
        { key: "B", text: t`The side containing the origin`, correct: false, misconceptionId: "C02-M3", value: "5" },
        { key: "C", text: t`The line and the side containing $(1, 0)$`, correct: true, value: "1" },
        { key: "D", text: t`The side containing $(1, 0)$, without the line`, correct: false, misconceptionId: "C02-M2", value: "3" },
      ],
      solution: {
        steps: [
          t`Draw the line $x = 3y$ through $(0, 0)$ and $(3, 1)$. The $\ge$ includes it.`,
          t`The origin is on the line ($0 \ge 0$ tells nothing), so test $(1, 0)$: $1 \ge 3 \cdot 0$ is true.`,
          t`So the region is the line and the side containing $(1, 0)$.`,
        ],
        figure: {
          alt: "The line x = 3y through the origin and (3, 1). The origin is on the line, so (1, 0) is tested: 1 ≥ 0 is true, and the side containing (1, 0) is shaded, with the line.",
          axes: "xy",
          view: { x: [-2, 5], y: [-2, 3] },
          elements: [
            { kind: "line", through: [[0, 0], [3, 1]], step: 1 },
            { kind: "point", at: [3, 1], tone: "muted", step: 1 },
            { kind: "label", at: [4.2, 1.4], label: "x = 3y", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 0], tone: "muted", label: "0 ≥ 0", labelAt: "nw", step: 2 },
            { kind: "point", at: [1, 0], tone: "good", step: 2 },
            { kind: "label", at: [1.5, -1.4], label: "(1, 0): 1 ≥ 0 true", tone: "good", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [-3, -1]] }], step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`Which region does $2x + 5y \ge 10$ describe?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["2*x + 5*y >= 10"] } },
      options: [
        { key: "A", text: t`The line and the side containing the origin`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "B", text: t`The side away from the origin, without the line`, correct: false, misconceptionId: "C02-M2", value: "4" },
        { key: "C", text: t`The line and the side away from the origin`, correct: true, value: "2" },
        { key: "D", text: t`Only the line $2x + 5y = 10$`, correct: false, misconceptionId: "C02-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`Draw the line $2x + 5y = 10$ through $(5, 0)$ and $(0, 2)$. The $\ge$ includes it.`,
          t`Test the origin: $2 \cdot 0 + 5 \cdot 0 \ge 10$ gives $0 \ge 10$, false.`,
          t`So the region is the line and the side away from the origin.`,
        ],
        figure: {
          alt: "The line 2x + 5y = 10 through (5, 0) and (0, 2). The origin fails (0 ≥ 10 is false), so the side away from it is shaded, with the line.",
          axes: "xy",
          view: { x: [-0.7, 7], y: [-0.7, 4.5] },
          elements: [
            { kind: "line", through: [[0, 2], [-5, 4]], step: 1 },
            { kind: "point", at: [5, 0], tone: "muted", step: 1 },
            { kind: "point", at: [0, 2], tone: "muted", step: 1 },
            { kind: "label", at: [2.5, 1], label: "2x + 5y = 10", labelAt: "ne", step: 1 },
            { kind: "point", at: [0, 0], tone: "bad", label: "0 ≥ 10 false", labelAt: "ne", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 2], [5, 0]] }], step: 3 },
          ],
        },
      },
    },
  ],
};
