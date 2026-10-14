import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`The lines $x + y = 8$ and $y = 3$ cross at $(5, 3)$. **Is that a corner of the region $x + y \le 8$, $y \le 3$, $x \le 4$, $x, y \ge 0$?**`,
    reveal: t`No: $x = 5$ breaks $x \le 4$, so $(5, 3)$ is outside the region. A crossing is a corner only if it satisfies every constraint. Here $x + y = 8$ never even touches the region: its corners are $(0, 0)$, $(4, 0)$, $(4, 3)$ and $(0, 3)$.`,
  },
  explanation: {
    intuition: t`Corners are where boundary lines meet. But not every crossing is a corner: two lines can meet outside the region. Find the crossings, then keep only those that satisfy every constraint.`,
    formal: t`**Finding the corners**

1. Take the boundary lines in pairs, including the axes $x = 0$ and $y = 0$, and solve each pair.
2. Keep a crossing only if it satisfies **every** constraint.
3. Include the corners on the axes, and the origin $(0, 0)$ if the region contains it.

**A line that doesn't bind** (never touches the region) gives no corners. Its crossings and intercepts all lie outside, so they are never corners.`,
    worked: {
      prompt: t`Find the corners of the region $x + y \le 7$, $x \le 5$, $y \le 4$, $x, y \ge 0$.`,
      steps: [
        t`On the axes: $(0, 0)$, $(5, 0)$ from $x = 5$, and $(0, 4)$ from $y = 4$. The intercepts $(7, 0)$ and $(0, 7)$ of $x + y = 7$ break $x \le 5$ and $y \le 4$, so they are out.`,
        t`$x = 5$ meets $x + y = 7$ at $(5, 2)$, and $y = 4$ meets it at $(3, 4)$. Both satisfy every constraint.`,
        t`$x = 5$ meets $y = 4$ at $(5, 4)$, but $5 + 4 = 9 > 7$: not a corner.`,
      ],
      answer: t`Five corners: $(0, 0)$, $(5, 0)$, $(5, 2)$, $(3, 4)$, $(0, 4)$.`,
      figure: {
        alt: "The region x + y ≤ 7, x ≤ 5, y ≤ 4 in the first quadrant, shaded. Its corners (0, 0), (5, 0), (5, 2), (3, 4) and (0, 4) are marked. The intercepts (7, 0) and (0, 7) and the crossing (5, 4) are hollow: each breaks a constraint.",
        axes: "xy",
        view: { x: [-0.78, 7.8], y: [-0.78, 7.8] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 7], [-1, 8]] }, { kind: "halfPlane", through: [[5, 0], [5, 1]] }, { kind: "halfPlane", through: [[0, 4], [-1, 4]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
          { kind: "line", through: [[0, 7], [-1, 8]], tone: "muted" },
          { kind: "label", at: [5.8, 1.2], label: "x + y = 7", labelAt: "ne", tone: "muted" },
          { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", step: 1 },
          { kind: "point", at: [5, 0], label: "(5, 0)", labelAt: "n", step: 1 },
          { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "e", step: 1 },
          { kind: "point", at: [7, 0], label: "(7, 0)", labelAt: "n", tone: "bad", hollow: true, step: 1 },
          { kind: "point", at: [0, 7], label: "(0, 7)", labelAt: "e", tone: "bad", hollow: true, step: 1 },
          { kind: "point", at: [5, 2], label: "(5, 2)", labelAt: "e", step: 2 },
          { kind: "point", at: [3, 4], label: "(3, 4)", labelAt: "nw", step: 2 },
          { kind: "point", at: [5, 4], label: "(5, 4)", labelAt: "ne", tone: "bad", hollow: true, step: 3 },
        ],
      },
    },
    figure: {
      alt: "The region x + y ≤ 8, y ≤ 3, x ≤ 4 in the first quadrant, shaded. The lines x + y = 8 and y = 3 cross at (5, 3), hollow: it lies right of x = 4, outside the region. The line x + y = 8 never touches the region. The real corners are (0, 0), (4, 0), (4, 3) and (0, 3).",
      axes: "xy",
      view: { x: [-0.6599999999999999, 6.6], y: [-0.6599999999999999, 5.4] },
      elements: [
        { kind: "line", through: [[0, 8], [-1, 9]], tone: "muted", dashed: true, step: 1 },
        { kind: "label", at: [5.4, 3.8], label: "x + y = 8", labelAt: "e", tone: "muted", step: 1 },
        { kind: "line", through: [[0, 3], [-1, 3]], tone: "muted", step: 1 },
        { kind: "label", at: [2, 3], label: "y = 3", labelAt: "n", tone: "muted", step: 1 },
        { kind: "point", at: [5, 3], label: "(5, 3)", labelAt: "ne", tone: "bad", hollow: true, step: 2 },
        { kind: "line", through: [[4, 0], [4, 1]], tone: "muted", step: 3 },
        { kind: "label", at: [4, 4.7], label: "x = 4", labelAt: "e", tone: "muted", step: 3 },
        { kind: "region", within: [{ kind: "halfPlane", through: [[0, 8], [-1, 9]] }, { kind: "halfPlane", through: [[0, 3], [-1, 3]] }, { kind: "halfPlane", through: [[4, 0], [4, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }], step: 3 },
        { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", step: 4 },
        { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "ne", step: 4 },
        { kind: "point", at: [4, 3], label: "(4, 3)", labelAt: "nw", step: 4 },
        { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "ne", step: 4 },
      ],
    },
    visualSpec: t`Drag a boundary line; every crossing of two boundary lines shows as a dot, filled when it satisfies all the constraints (a corner) and red and hollow when it breaks one.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Keeping a crossing that another constraint rules out",
      remediation: "Check every crossing against all the constraints. If it breaks one, it is outside the region, so it is not a corner.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: "Taking a line's axis intercept as a corner without checking it",
      remediation: "An intercept is only a corner if it satisfies every other constraint. A line's intercept often lies outside the region, and a line that doesn't bind never reaches it at all. Test each candidate before calling it a corner.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: "Leaving out the origin",
      remediation: t`$x = 0$ and $y = 0$ are boundary lines too. When the origin satisfies every constraint, it is a corner.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M4",
      mistake: "Assuming the origin is always a corner",
      remediation: t`The origin is a corner only when it satisfies every constraint. A constraint such as $x + y \ge 1$ rules it out: test $(0, 0)$ before listing it.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M5",
      mistake: t`Pairing the largest $x$ with the largest $y$, as if the region were a rectangle`,
      remediation: "The region's furthest point to the right and its highest point are usually different corners. A corner is where two boundary lines meet, and it must satisfy every constraint: test the point before you keep it.",
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M6",
      mistake: "Pairing only the constraint lines, forgetting the axes",
      remediation: t`$x = 0$ and $y = 0$ are boundary lines too. Pair each constraint line with both axes as well: most corners of a first-quadrant region lie on an axis.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "Leaving out the origin (C05-M3) is tested only by the count items (C05-Q4, C05-Q5); the missing-corner items give the origin, or (C05-Q1) exclude it with x + y ≥ 1.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "authored" },
      stem: t`The region $x + y \le 4$, $x \le 2$, $y \le 1$, $x + y \ge 1$, $x, y \ge 0$ has corners $(1, 0)$, $(2, 0)$ and $(0, 1)$. Its fourth corner is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + y <= 4", "x <= 2", "y <= 1", "x + y >= 1"], known: ["1", "2", "I"], ask: "missing", axis: "y" } },
      options: [
        { key: "A", text: t`$(2, 1)$`, correct: true, value: "2 + I" },
        { key: "B", text: t`$(2, 2)$`, correct: false, misconceptionId: "C05-M1", value: "2 + 2*I" },
        { key: "C", text: t`$(0, 4)$`, correct: false, misconceptionId: "C05-M2", value: "4*I" },
        { key: "D", text: t`$(0, 0)$`, correct: false, misconceptionId: "C05-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`$x = 2$ meets $y = 1$ at $(2, 1)$, and $2 + 1 = 3$ lies between $1$ and $4$: it satisfies every constraint.`,
          t`$x + y = 4$ meets $x = 2$ at $(2, 2)$, but $y = 2$ breaks $y \le 1$. Its intercept $(0, 4)$ breaks $y \le 1$ too.`,
          t`$x + y \le 4$ never binds: $x \le 2$ and $y \le 1$ already give $x + y \le 3$. The fourth corner is $(2, 1)$.`,
        ],
        figure: {
          alt: "The region x + y ≤ 4, x ≤ 2, y ≤ 1, x + y ≥ 1 in the first quadrant, shaded, with corners (1, 0), (2, 0), (2, 1) and (0, 1). The line x + y = 4 lies outside it; its crossing (2, 2) with x = 2 and its intercept (0, 4) are hollow.",
          axes: "xy",
          view: { x: [-0.45999999999999996, 4.6], y: [-0.45999999999999996, 4.6] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 4], [-1, 5]] }, { kind: "halfPlane", through: [[2, 0], [2, 1]] }, { kind: "halfPlane", through: [[0, 1], [-1, 1]] }, { kind: "halfPlane", through: [[0, 1], [1, 0]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "point", at: [1, 0], label: "(1, 0)", labelAt: "n", tone: "muted" },
            { kind: "point", at: [2, 0], label: "(2, 0)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [0, 1], label: "(0, 1)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [2, 1], label: "(2, 1)", labelAt: "e", step: 1 },
            { kind: "line", through: [[0, 4], [-1, 5]], tone: "muted", dashed: true, step: 2 },
            { kind: "label", at: [3.1, 0.9], label: "x + y = 4", labelAt: "ne", tone: "muted", step: 2 },
            { kind: "point", at: [2, 2], label: "(2, 2)", labelAt: "ne", tone: "bad", hollow: true, step: 2 },
            { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "e", tone: "bad", hollow: true, step: 2 },
          ],
        },
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`The region $x + 2y \le 10$, $x \le 4$, $x + y \le 6$, $x, y \ge 0$ has corners $(0, 0)$, $(4, 0)$, $(2, 4)$ and $(0, 5)$. Its fifth corner is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + 2*y <= 10", "x <= 4", "x + y <= 6"], known: ["0", "4", "2+4*I", "5*I"], ask: "missing", axis: "x" } },
      options: [
        { key: "A", text: t`$(10, 0)$`, correct: false, misconceptionId: "C05-M2", value: "10" },
        { key: "B", text: t`$(4, 2)$`, correct: true, value: "4 + 2*I" },
        { key: "C", text: t`$(4, 3)$`, correct: false, misconceptionId: "C05-M1", value: "4 + 3*I" },
        { key: "D", text: t`$(4, 5)$`, correct: false, misconceptionId: "C05-M5", value: "4 + 5*I" },
      ],
      solution: {
        steps: [
          t`$x = 4$ meets $x + 2y = 10$ at $(4, 3)$, but $4 + 3 = 7 > 6$ breaks $x + y \le 6$: not a corner.`,
          t`$x = 4$ meets $x + y = 6$ at $(4, 2)$, and $4 + 2(2) = 8 \le 10$: it satisfies every constraint.`,
          t`The intercept $(10, 0)$ of $x + 2y = 10$ breaks $x \le 4$. The fifth corner is $(4, 2)$.`,
        ],
        figure: {
          alt: "The region x + 2y ≤ 10, x ≤ 4, x + y ≤ 6 in the first quadrant, shaded, with corners (0, 0), (4, 0), (4, 2), (2, 4) and (0, 5). The crossing (4, 3) of x = 4 and x + 2y = 10 and the intercept (10, 0) are hollow: each lies outside the region.",
          axes: "xy",
          view: { x: [-1.08, 10.8], y: [-1.08, 6.6] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 5], [-2, 6]] }, { kind: "halfPlane", through: [[4, 0], [4, 1]] }, { kind: "halfPlane", through: [[0, 6], [-1, 7]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "nw", tone: "muted" },
            { kind: "point", at: [2, 4], label: "(2, 4)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [0, 5], label: "(0, 5)", labelAt: "e", tone: "muted" },
            { kind: "line", through: [[0, 5], [-2, 6]], tone: "muted", step: 1 },
            { kind: "label", at: [7, 1.5], label: "x + 2y = 10", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [4, 3], label: "(4, 3)", labelAt: "ne", tone: "bad", hollow: true, step: 1 },
            { kind: "point", at: [4, 2], label: "(4, 2)", labelAt: "e", step: 2 },
            { kind: "point", at: [10, 0], label: "(10, 0)", labelAt: "n", tone: "bad", hollow: true, step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`The region $2x + y \le 8$, $y \le 3$, $x + y \le 5$, $x, y \ge 0$ has corners $(0, 0)$, $(4, 0)$, $(2, 3)$ and $(0, 3)$. Its fifth corner is:`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["2*x + y <= 8", "y <= 3", "x + y <= 5"], known: ["0", "4", "2+3*I", "3*I"], ask: "missing", axis: "y" } },
      options: [
        { key: "A", text: t`$(\frac{5}{2}, 3)$`, correct: false, misconceptionId: "C05-M1", value: "5/2 + 3*I" },
        { key: "B", text: t`$(0, 8)$`, correct: false, misconceptionId: "C05-M2", value: "8*I" },
        { key: "C", text: t`$(3, 2)$`, correct: true, value: "3 + 2*I" },
        { key: "D", text: t`$(4, 3)$`, correct: false, misconceptionId: "C05-M5", value: "4 + 3*I" },
      ],
      solution: {
        steps: [
          t`$y = 3$ meets $2x + y = 8$ at $(\frac52, 3)$, but $\frac52 + 3 = \frac{11}2 > 5$ breaks $x + y \le 5$: not a corner.`,
          t`$2x + y = 8$ meets $x + y = 5$: subtracting gives $x = 3$, so $y = 2$. At $(3, 2)$, $y = 2 \le 3$: it satisfies every constraint.`,
          t`The intercept $(0, 8)$ of $2x + y = 8$ breaks $y \le 3$. The fifth corner is $(3, 2)$.`,
        ],
        figure: {
          alt: "The region 2x + y ≤ 8, y ≤ 3, x + y ≤ 5 in the first quadrant, shaded, with corners (0, 0), (4, 0), (3, 2), (2, 3) and (0, 3). The crossing (2.5, 3) of y = 3 and 2x + y = 8 and the intercept (0, 8) are hollow: each lies outside the region.",
          axes: "xy",
          view: { x: [-0.86, 5.8], y: [-0.86, 8.6] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 8], [-1, 10]] }, { kind: "halfPlane", through: [[0, 3], [-1, 3]] }, { kind: "halfPlane", through: [[0, 5], [-1, 6]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "nw", tone: "muted" },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "e", tone: "muted" },
            { kind: "line", through: [[0, 8], [-1, 10]], tone: "muted", step: 1 },
            { kind: "label", at: [1.2, 5.6], label: "2x + y = 8", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [2.5, 3], label: "(2.5, 3)", labelAt: "ne", tone: "bad", hollow: true, step: 1 },
            { kind: "point", at: [3, 2], label: "(3, 2)", labelAt: "e", step: 2 },
            { kind: "point", at: [0, 8], label: "(0, 8)", labelAt: "e", tone: "bad", hollow: true, step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`How many corner points does the region $x + 2y \le 8$, $x \le 4$, $x, y \ge 0$ have?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["x + 2*y <= 8", "x <= 4"], ask: "count" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C05-M3", value: "3" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C05-M1", value: "5" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C05-M6", value: "1" },
      ],
      solution: {
        steps: [
          t`On the axes: $(0, 0)$, $(4, 0)$ from $x = 4$, and $(0, 4)$ from $x + 2y = 8$.`,
          t`$x = 4$ meets $x + 2y = 8$: $2y = 4$, so $(4, 2)$. It satisfies both constraints.`,
          t`The intercept $(8, 0)$ breaks $x \le 4$, so it is out. The corners are $(0, 0)$, $(4, 0)$, $(4, 2)$ and $(0, 4)$: $4$ corners.`,
        ],
        figure: {
          alt: "The region x + 2y ≤ 8, x ≤ 4 in the first quadrant, shaded, with corners (0, 0), (4, 0), (4, 2) and (0, 4). The intercept (8, 0) of x + 2y = 8 is hollow: it breaks x ≤ 4.",
          axes: "xy",
          view: { x: [-0.8800000000000001, 8.8], y: [-0.8800000000000001, 5.2] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 4], [-2, 5]] }, { kind: "halfPlane", through: [[4, 0], [4, 1]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "line", through: [[0, 4], [-2, 5]], tone: "muted" },
            { kind: "label", at: [6, 1], label: "x + 2y = 8", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "e", step: 1 },
            { kind: "point", at: [4, 2], label: "(4, 2)", labelAt: "ne", step: 2 },
            { kind: "point", at: [8, 0], label: "(8, 0)", labelAt: "n", tone: "bad", hollow: true, step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`How many corner points does the region $3x + 2y \le 12$, $x \le 3$, $y \le 4$, $x, y \ge 0$ have?`,
      verify: { kind: "value", inputs: {  }, params: { cons: ["3*x + 2*y <= 12", "x <= 3", "y <= 4"], ask: "count" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C05-M1", value: "8" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C05-M3", value: "4" },
        { key: "C", text: t`$5$`, correct: true, value: "5" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C05-M6", value: "2" },
      ],
      solution: {
        steps: [
          t`On the axes: $(0, 0)$, $(3, 0)$ from $x = 3$, and $(0, 4)$ from $y = 4$.`,
          t`$x = 3$ meets $3x + 2y = 12$ at $(3, \frac32)$; $y = 4$ meets it at $(\frac43, 4)$. Both satisfy every constraint.`,
          t`Out: $(3, 4)$ gives $9 + 8 = 17 > 12$; the intercept $(4, 0)$ breaks $x \le 3$; the intercept $(0, 6)$ breaks $y \le 4$.`,
          t`That leaves $5$ corners: $(0, 0)$, $(3, 0)$, $(3, \frac32)$, $(\frac43, 4)$, $(0, 4)$.`,
        ],
        figure: {
          alt: "The region 3x + 2y ≤ 12, x ≤ 3, y ≤ 4 in the first quadrant, shaded, with 5 corners: (0, 0), (3, 0), (3, 1.5), (4/3, 4) and (0, 4). The crossing (3, 4) and the intercepts (4, 0) and (0, 6) are hollow: each breaks a constraint.",
          axes: "xy",
          view: { x: [-0.6599999999999999, 4.8], y: [-0.6599999999999999, 6.6] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 6], [-2, 9]] }, { kind: "halfPlane", through: [[3, 0], [3, 1]] }, { kind: "halfPlane", through: [[0, 4], [-1, 4]] }, { kind: "halfPlane", through: [[0, 0], [0, -1]] }, { kind: "halfPlane", through: [[0, 0], [1, 0]] }] },
            { kind: "line", through: [[0, 6], [-2, 9]], tone: "muted" },
            { kind: "label", at: [2.4, 2.4], label: "3x + 2y = 12", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 4], label: "(0, 4)", labelAt: "e", step: 1 },
            { kind: "point", at: [3, 1.5], label: "(3, 1.5)", labelAt: "e", step: 2 },
            { kind: "point", at: [1.3333333333333333, 4], label: "(4/3, 4)", labelAt: "ne", step: 2 },
            { kind: "point", at: [3, 4], label: "(3, 4)", labelAt: "ne", tone: "bad", hollow: true, step: 3 },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "n", tone: "bad", hollow: true, step: 3 },
            { kind: "point", at: [0, 6], label: "(0, 6)", labelAt: "e", tone: "bad", hollow: true, step: 3 },
          ],
        },
      },
    },
  ],
};
