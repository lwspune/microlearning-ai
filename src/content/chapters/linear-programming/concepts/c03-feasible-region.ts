import type { Concept, FigureElement, Shape } from "../../../types.ts";

const t = String.raw;

/** The idea slide's constraints, 2x + y ≤ 8 and x + 2y ≤ 8, reused on the formal slides. */
const line1: FigureElement = { kind: "line", through: [[0, 8], [-1, 10]], tone: "muted" };
const label1: FigureElement = { kind: "label", at: [1, 6], label: "2x + y = 8", labelAt: "e", tone: "muted" };
const line2: FigureElement = { kind: "line", through: [[0, 4], [-2, 5]], tone: "muted" };
const label2: FigureElement = { kind: "label", at: [6, 1.8], label: "x + 2y = 8", labelAt: "e", tone: "muted" };
const h1: Shape = { kind: "halfPlane", through: [[0, 8], [-1, 10]] };
const h2: Shape = { kind: "halfPlane", through: [[0, 4], [-2, 5]] };
const firstQuadrant: Shape[] = [{ kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }];

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A shop makes $x$ chairs and $y$ tables a day. **Can $x$ be $-2$?**`,
    reveal: t`No: you can't make $-2$ chairs. That's why every LPP includes $x \ge 0$ and $y \ge 0$, which keep you in the first quadrant.`,
  },
  explanation: {
    intuition: [
      t`A **constraint** is a rule that $x$ and $y$ must obey, written as an inequality.`,
      t`$x$ and $y$ count things, so $x \ge 0$ and $y \ge 0$ are always constraints: we stay in the first quadrant.`,
      t`Recall: a **half-plane** is one side of a line. $2x + y \le 8$ keeps one half-plane.`,
      t`A second constraint, $x + 2y \le 8$, keeps a half-plane of its own.`,
      t`Keep only the **overlap**, the part every constraint keeps at once: this is the **feasible region**.`,
    ],
    formal: [
      {
        title: "The feasible region",
        points: [
          t`The **feasible region** is the set of points that satisfy every constraint at once.`,
          t`The constraints always include $x \ge 0$ and $y \ge 0$, so it lies in the first quadrant.`,
        ],
        figure: {
          alt: "The lines 2x + y = 8 and x + 2y = 8 in the first quadrant. The feasible region, the points satisfying 2x + y ≤ 8, x + 2y ≤ 8, x ≥ 0 and y ≥ 0, is shaded; the y-axis is marked x ≥ 0 and the x-axis y ≥ 0.",
          axes: "xy",
          view: { x: [-0.9, 9], y: [-0.9, 9] },
          elements: [
            line1,
            label1,
            line2,
            label2,
            { kind: "region", within: [h1, h2, ...firstQuadrant], step: 1 },
            { kind: "label", at: [1.3, 1.3], label: "feasible region", step: 1 },
            { kind: "label", at: [0, 2.6], label: "x ≥ 0", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [5.8, 0], label: "y ≥ 0", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Drawing the feasible region",
        points: [
          t`First draw each constraint's boundary line.`,
          t`Pick each line's side by testing the origin: $0 \le 8$ is true for both, so keep the origin's side.`,
          t`Then keep the overlap of those sides, inside the first quadrant.`,
          t`With $\le$ and $\ge$, the boundary lines belong to the region.`,
        ],
        figure: {
          alt: "Step by step: the lines 2x + y = 8 and x + 2y = 8 are drawn; testing the origin shades the origin's side of each; their overlap in the first quadrant is the feasible region, with corners (0, 0), (4, 0), (8/3, 8/3) and (0, 4); its edges, parts of the boundary lines, are highlighted as belonging to it.",
          axes: "xy",
          view: { x: [-0.9, 9], y: [-0.9, 9] },
          elements: [
            { ...line1, step: 1 },
            { ...label1, step: 1 },
            { ...line2, step: 1 },
            { ...label2, step: 1 },
            { kind: "region", within: [h1], tone: "muted", step: 2 },
            { kind: "region", within: [h2], tone: "muted", step: 2 },
            { kind: "point", at: [0, 0], label: "test (0, 0)", labelAt: "ne", tone: "good", step: 2 },
            { kind: "region", within: [h1, h2, ...firstQuadrant], step: 3 },
            { kind: "label", at: [1.3, 1.3], label: "feasible region", step: 3 },
            { kind: "segment", from: [0, 0], to: [4, 0], tone: "good", step: 4 },
            { kind: "segment", from: [4, 0], to: [8 / 3, 8 / 3], tone: "good", step: 4 },
            { kind: "segment", from: [8 / 3, 8 / 3], to: [0, 4], tone: "good", step: 4 },
            { kind: "segment", from: [0, 4], to: [0, 0], tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Is a point in it?",
        points: [
          t`To test a point, substitute it into every inequality, including $x \ge 0$ and $y \ge 0$.`,
          t`$(1, 1)$ gives $3 \le 8$ and $3 \le 8$, and its coordinates are positive: it is inside.`,
          t`One failure puts a point outside: $(5, 1)$ gives $2x + y = 11$, more than $8$.`,
          t`$(-1, 2)$ passes both, but $x = -1 < 0$, so it is outside too.`,
          t`A point on a boundary line satisfies that constraint with equality, so it is inside.`,
          t`For example, $(3, 2)$ gives $2x + y = 8$ and $x + 2y = 7 \le 8$: inside.`,
        ],
        figure: {
          alt: "The feasible region of 2x + y ≤ 8, x + 2y ≤ 8, x, y ≥ 0, shaded. The point (1, 1) is inside; (5, 1) is outside, beyond 2x + y = 8; (−1, 2) is outside, left of the y-axis; (3, 2) lies on the line 2x + y = 8, on the region's edge, and is inside.",
          axes: "xy",
          view: { x: [-1.6, 9], y: [-0.9, 9] },
          elements: [
            line1,
            label1,
            line2,
            label2,
            { kind: "region", within: [h1, h2, ...firstQuadrant] },
            { kind: "point", at: [1, 1], label: "(1, 1)", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [5, 1], label: "(5, 1)", labelAt: "s", tone: "bad", hollow: true, step: 3 },
            { kind: "point", at: [-1, 2], label: "(−1, 2)", labelAt: "n", tone: "bad", hollow: true, step: 4 },
            { kind: "segment", from: [4, 0], to: [8 / 3, 8 / 3], tone: "good", step: 5 },
            { kind: "point", at: [3, 2], label: "(3, 2)", labelAt: "e", tone: "good", step: 6 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Shade the feasible region of $x + y \le 5$, $2x + y \ge 4$, $x, y \ge 0$, and check whether $(2, 1)$ is in it.`,
      steps: [
        t`$x + y \le 5$: the origin gives $0 \le 5$, true, so keep the origin's side of $x + y = 5$.`,
        t`$2x + y \ge 4$: the origin gives $0 \ge 4$, false, so keep the side of $2x + y = 4$ away from the origin.`,
        t`With $x, y \ge 0$, keep the overlap in the first quadrant: the band between the two lines.`,
        t`$(2, 1)$: $2 + 1 = 3 \le 5$, $4 + 1 = 5 \ge 4$, and both coordinates are positive. It is inside.`,
      ],
      answer: t`$(2, 1)$ is in the feasible region.`,
      figure: {
        alt: "The lines x + y = 5 and 2x + y = 4. The feasible region is the band between them in the first quadrant, shaded, and the point (2, 1) lies inside it.",
        axes: "xy",
        view: { x: [-0.6, 6], y: [-0.6, 5.6] },
        elements: [
          { kind: "line", through: [[0, 5], [-1, 6]], tone: "muted", step: 1 },
          { kind: "label", at: [3.5, 1.5], label: "x + y = 5", labelAt: "ne", tone: "muted", step: 1 },
          { kind: "line", through: [[0, 4], [-1, 6]], tone: "muted", step: 2 },
          { kind: "label", at: [1.5, 1], label: "2x + y = 4", labelAt: "sw", tone: "muted", step: 2 },
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 5], [-1, 6]] }, { kind: "halfPlane", through: [[0, 4], [1, 2]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 3 },
          { kind: "label", at: [1.6, 2.6], label: "feasible region", step: 3 },
          { kind: "point", at: [2, 1], label: "(2, 1)", labelAt: "e", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The constraints 2x + y ≤ 8 and x + 2y ≤ 8 each shade one side of their line in the first quadrant; the feasible region is their overlap, with corners (0, 0), (4, 0), (8/3, 8/3) and (0, 4).",
      axes: "xy",
      view: { x: [-0.9, 9], y: [-0.9, 9] },
      elements: [
        { ...line1, step: 3 },
        { ...label1, step: 3 },
        { kind: "region", within: [h1, ...firstQuadrant], tone: "muted", step: 3 },
        { ...line2, step: 4 },
        { ...label2, step: 4 },
        { kind: "region", within: [h2, ...firstQuadrant], tone: "muted", step: 4 },
        { kind: "region", within: [h1, h2, ...firstQuadrant], step: 5 },
        { kind: "label", at: [1.3, 1.3], label: "feasible region", step: 5 },
      ],
    },
    visualSpec: t`Toggle constraints on and off and drag a test point: each constraint shades its side, the overlap is highlighted, and the point turns green inside or red outside, showing the inequality it fails.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Forgetting $x \ge 0$ and $y \ge 0$`,
      remediation: "The variables count things, so they can't be negative. A point with a negative coordinate is outside the region, whatever the other constraints say.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Assuming the region always contains the origin",
      remediation: t`Only a $\le$ constraint with a positive right side keeps the origin's side. For $x + y \ge 4$ the origin gives $0 \ge 4$, false, so the region lies away from it.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: "Leaving out points on a boundary line",
      remediation: t`With $\le$ and $\ge$, the boundary is part of the region: a point on the line satisfies the constraint with equality.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: "Counting points that satisfy any one constraint instead of all of them",
      remediation: t`The feasible region is the overlap: a point is in it only if it satisfies every constraint at once, including $x, y \ge 0$. One failed constraint puts it outside.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Keeping the origin's side (C03-M2) gives the key when every constraint is ≤ with a non-negative right side (C03-Q5). Diagnose it with an item that has a ≥ constraint.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "authored" },
      stem: t`How many of the points $(3, 3)$, $(2, 4)$, $(5, 2)$, $(-1, 5)$ lie in the feasible region of $x + y \ge 4$, $x \le 5$, $y \le 5$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y >= 4", "x <= 5", "y <= 5"], pts: ["3+I*(3)", "2+I*(4)", "5+I*(2)", "-1+I*(5)"] } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M3", value: "2" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M1", value: "4" },
      ],
      solution: {
        steps: [
          t`The region lies on the far side of $x + y = 4$ from the origin, with $x \le 5$, $y \le 5$ and $x, y \ge 0$.`,
          t`$(3, 3)$: $6 \ge 4$, $3 \le 5$, $3 \le 5$. $(2, 4)$: $6 \ge 4$, $2 \le 5$, $4 \le 5$. Both are inside.`,
          t`$(5, 2)$: $7 \ge 4$, and it lies on the line $x = 5$, which belongs to the region. Inside.`,
          t`$(-1, 5)$ passes the other three constraints, but $x = -1 < 0$, so it is outside. $3$ points lie in the region.`,
        ],
        figure: {
          alt: "The feasible region of x + y ≥ 4, x ≤ 5, y ≤ 5, x, y ≥ 0, shaded. The points (3, 3), (2, 4) and (5, 2) are inside; (−1, 5) is outside, left of the y-axis.",
          axes: "xy",
          view: { x: [-1.5, 6.5], y: [-1.5, 6.5] },
          elements: [
            { kind: "line", through: [[0, 4], [-1, 5]], tone: "muted", step: 1 },
            { kind: "label", at: [1.5, 2.5], label: "x + y = 4", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "line", through: [[5, 0], [5, 1]], tone: "muted", step: 1 },
            { kind: "label", at: [5, 6], label: "x = 5", labelAt: "e", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 5], [-1, 5]], tone: "muted", step: 1 },
            { kind: "label", at: [6, 5], label: "y = 5", labelAt: "n", tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 4], [1, 3]] }, { kind: "halfPlane", through: [[5, 0], [5, 1]] }, { kind: "halfPlane", through: [[0, 5], [-1, 5]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [3, 3], label: "(3, 3)", labelAt: "ne", tone: "good", step: 2 },
            { kind: "point", at: [2, 4], label: "(2, 4)", labelAt: "ne", tone: "good", step: 2 },
            { kind: "point", at: [5, 2], label: "(5, 2)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [-1, 5], label: "(−1, 5)", labelAt: "s", tone: "bad", hollow: true, step: 4 },
          ],
        },
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`How many of the points $(2, 2)$, $(1, 1)$, $(3, 4)$, $(4, 0)$, $(-2, 4)$, $(0, 5)$ lie in the feasible region of $2x + y \le 10$, $x + 2y \ge 4$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["2*x + y <= 10", "x + 2*y >= 4"], pts: ["2+I*(2)", "1+I*(1)", "3+I*(4)", "4+I*(0)", "-2+I*(4)", "0+I*(5)"] } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C03-M2", value: "2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C03-M1", value: "5" },
      ],
      solution: {
        steps: [
          t`The region lies on the origin's side of $2x + y = 10$, on the far side of $x + 2y = 4$, in the first quadrant.`,
          t`$(2, 2)$: $6 \le 10$ and $6 \ge 4$. Inside.`,
          t`On a boundary, so inside: $(3, 4)$ gives $2x + y = 10$; $(4, 0)$ gives $x + 2y = 4$ and $y = 0$; $(0, 5)$ is on $x = 0$, with $5 \le 10$ and $10 \ge 4$.`,
          t`Outside: $(1, 1)$ gives $x + 2y = 3 < 4$; $(-2, 4)$ has $x < 0$. $4$ points lie in the region.`,
        ],
        figure: {
          alt: "The feasible region of 2x + y ≤ 10, x + 2y ≥ 4, x, y ≥ 0, shaded. The points (2, 2), (3, 4), (4, 0) and (0, 5) are in it; (1, 1) and (−2, 4) are outside.",
          axes: "xy",
          view: { x: [-2.5, 6], y: [-2.5, 10.5] },
          elements: [
            { kind: "line", through: [[0, 10], [-1, 12]], tone: "muted", step: 1 },
            { kind: "label", at: [4.5, 1], label: "2x + y = 10", labelAt: "e", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 2], [-2, 3]], tone: "muted", step: 1 },
            { kind: "label", at: [-0.3, 1.3], label: "x + 2y = 4", labelAt: "w", tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 10], [-1, 12]] }, { kind: "halfPlane", through: [[0, 2], [2, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [2, 2], label: "(2, 2)", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [3, 4], label: "(3, 4)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "n", tone: "good", step: 3 },
            { kind: "point", at: [0, 5], label: "(0, 5)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [1, 1], label: "(1, 1)", labelAt: "s", tone: "bad", hollow: true, step: 4 },
            { kind: "point", at: [-2, 4], label: "(−2, 4)", labelAt: "n", tone: "bad", hollow: true, step: 4 },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`How many of the points $(2, 3)$, $(1, 2)$, $(2, -1)$, $(1/2, 2)$, $(4, 2)$ lie in the feasible region of $x + y \le 6$, $x \ge 1$, $y \le 4$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y <= 6", "x >= 1", "y <= 4"], pts: ["2+I*(3)", "1+I*(2)", "2+I*(-1)", "1/2+I*(2)", "4+I*(2)"] } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C03-M1", value: "4" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M2", value: "2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`The region lies on the origin's side of $x + y = 6$, right of $x = 1$, below $y = 4$, with $x, y \ge 0$.`,
          t`$(2, 3)$: $5 \le 6$, $2 \ge 1$, $3 \le 4$. Inside.`,
          t`On a boundary, so inside: $(1, 2)$ is on $x = 1$; $(4, 2)$ is on $x + y = 6$.`,
          t`Outside: $(2, -1)$ has $y < 0$; $\left(\frac12, 2\right)$ has $x = \frac12 < 1$. $3$ points lie in the region.`,
        ],
        figure: {
          alt: "The feasible region of x + y ≤ 6, x ≥ 1, y ≤ 4, x, y ≥ 0, shaded. The points (2, 3), (1, 2) and (4, 2) are in it; (2, −1) and (½, 2) are outside.",
          axes: "xy",
          view: { x: [-1.5, 7], y: [-1.5, 6.5] },
          elements: [
            { kind: "line", through: [[0, 6], [-1, 7]], tone: "muted", step: 1 },
            { kind: "label", at: [5, 1], label: "x + y = 6", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "line", through: [[1, 0], [1, 1]], tone: "muted", step: 1 },
            { kind: "label", at: [1, 5.5], label: "x = 1", labelAt: "e", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 4], [-1, 4]], tone: "muted", step: 1 },
            { kind: "label", at: [6, 4], label: "y = 4", labelAt: "n", tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 6], [-1, 7]] }, { kind: "halfPlane", through: [[1, 0], [1, -1]] }, { kind: "halfPlane", through: [[0, 4], [-1, 4]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [1, 2], label: "(1, 2)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [4, 2], label: "(4, 2)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [2, -1], label: "(2, −1)", labelAt: "e", tone: "bad", hollow: true, step: 4 },
            { kind: "point", at: [0.5, 2], label: "(½, 2)", labelAt: "n", tone: "bad", hollow: true, step: 4 },
          ],
        },
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`How many of the points $(1, 2)$, $(2, 0)$, $(2, 3)$, $(1, 1)$, $(-1, 3)$, $(0, 4)$ lie in the feasible region of $3x + 2y \le 12$, $y \ge 1$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["3*x + 2*y <= 12", "y >= 1"], pts: ["1+I*(2)", "2+I*(0)", "2+I*(3)", "1+I*(1)", "-1+I*(3)", "0+I*(4)"] } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C03-M2", value: "2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C03-M1", value: "5" },
      ],
      solution: {
        steps: [
          t`The region lies on the origin's side of $3x + 2y = 12$, on or above $y = 1$, with $x \ge 0$.`,
          t`$(1, 2)$: $7 \le 12$ and $2 \ge 1$. Inside.`,
          t`On a boundary, so inside: $(2, 3)$ gives $3x + 2y = 12$; $(1, 1)$ is on $y = 1$; $(0, 4)$ is on $x = 0$, with $8 \le 12$.`,
          t`Outside: $(2, 0)$ has $y = 0 < 1$; $(-1, 3)$ has $x < 0$. $4$ points lie in the region.`,
        ],
        figure: {
          alt: "The feasible region of 3x + 2y ≤ 12, y ≥ 1, x, y ≥ 0: a triangle with corners (0, 1), (10/3, 1) and (0, 6), shaded. The points (1, 2), (2, 3), (1, 1) and (0, 4) are in it; (2, 0) and (−1, 3) are outside.",
          axes: "xy",
          view: { x: [-1.5, 5], y: [-1.5, 6.6] },
          elements: [
            { kind: "line", through: [[0, 6], [-2, 9]], tone: "muted", step: 1 },
            { kind: "label", at: [3, 1.5], label: "3x + 2y = 12", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 1], [-1, 1]], tone: "muted", step: 1 },
            { kind: "label", at: [4.5, 1], label: "y = 1", labelAt: "s", tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 6], [-2, 9]] }, { kind: "halfPlane", through: [[0, 1], [1, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [1, 2], label: "(1, 2)", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [1, 1], label: "(1, 1)", labelAt: "n", tone: "good", step: 3 },
            { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [2, 0], label: "(2, 0)", labelAt: "n", tone: "bad", hollow: true, step: 4 },
            { kind: "point", at: [-1, 3], label: "(−1, 3)", labelAt: "n", tone: "bad", hollow: true, step: 4 },
          ],
        },
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`How many of the points $(3, 1)$, $(1, 3)$, $(-1, -2)$, $(5, 2)$, $(4, 0)$ lie in the feasible region of $y \le x$, $x + y \le 6$, $x, y \ge 0$?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["y <= x", "x + y <= 6"], pts: ["3+I*(1)", "1+I*(3)", "-1+I*(-2)", "5+I*(2)", "4+I*(0)"] } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C03-M1", value: "3" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C03-M4", value: "5" },
      ],
      solution: {
        steps: [
          t`The region lies below $y = x$ and on the origin's side of $x + y = 6$, with $x, y \ge 0$: a triangle.`,
          t`Inside: $(3, 1)$ gives $1 \le 3$ and $4 \le 6$; $(4, 0)$ gives $0 \le 4$ and $4 \le 6$, on the boundary $y = 0$.`,
          t`Outside: $(1, 3)$ has $y > x$; $(5, 2)$ gives $x + y = 7 > 6$.`,
          t`$(-1, -2)$ passes $y \le x$ and $x + y \le 6$, but its coordinates are negative, so it is outside. $2$ points lie in the region.`,
        ],
        figure: {
          alt: "The feasible region of y ≤ x, x + y ≤ 6, x, y ≥ 0: a triangle with corners (0, 0), (6, 0) and (3, 3), shaded. The points (3, 1) and (4, 0) are in it; (1, 3), (5, 2) and (−1, −2) are outside.",
          axes: "xy",
          view: { x: [-2.5, 7], y: [-2.5, 5] },
          elements: [
            { kind: "line", through: [[0, 0], [-1, -1]], tone: "muted", step: 1 },
            { kind: "label", at: [4, 4], label: "y = x", labelAt: "se", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 6], [-1, 7]], tone: "muted", step: 1 },
            { kind: "label", at: [5.5, 0.5], label: "x + y = 6", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [-1, -1]] }, { kind: "halfPlane", through: [[0, 6], [-1, 7]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 1 },
            { kind: "point", at: [3, 1], label: "(3, 1)", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "n", tone: "good", step: 2 },
            { kind: "point", at: [1, 3], label: "(1, 3)", labelAt: "n", tone: "bad", hollow: true, step: 3 },
            { kind: "point", at: [5, 2], label: "(5, 2)", labelAt: "e", tone: "bad", hollow: true, step: 3 },
            { kind: "point", at: [-1, -2], label: "(−1, −2)", labelAt: "s", tone: "bad", hollow: true, step: 4 },
          ],
        },
      },
    },
  ],
};
