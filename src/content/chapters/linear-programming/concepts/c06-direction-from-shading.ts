import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`The shaded half-plane lies **above** the line $x - y = 1$. Shading above means $\ge$, so is it $x - y \ge 1$?`,
    reveal: t`No. The origin is shaded, and there $0 - 0 = 0 < 1$. So the shading is $x - y \le 1$. Because of the $-y$, moving up makes $x - y$ smaller, so above is the $\le$ side here.`,
  },
  explanation: {
    intuition: t`The picture tells you which side is shaded. The sign comes from a test point, not from above or below. Above means $\ge$ only when the coefficient of $y$ is positive.`,
    formal: t`**Reading the sign from the shading**

1. Write the line. Through $(p, 0)$ and $(0, q)$ it is $\frac{x}{p} + \frac{y}{q} = 1$; clear the fractions to get $ax + by = c$.
2. Pick a point clearly inside the shading: the origin, if it is shaded and not on the line.
3. Substitute it into $ax + by$. If you get less than $c$, the shading is $ax + by \le c$; otherwise it is $ax + by \ge c$.

**Above is not always $\ge$.** Moving up raises $ax + by$ only when $b > 0$. When $b < 0$, the side above the line is the $\le$ side.`,
    worked: {
      prompt: t`A line passes through $(5, 0)$ and $(0, -2)$, and the side containing the origin is shaded. Which inequality describes the shading?`,
      steps: [
        t`The line is $\frac{x}{5} + \frac{y}{-2} = 1$. Multiply by $10$: $2x - 5y = 10$.`,
        t`The origin is shaded and not on the line. Substitute it: $2(0) - 5(0) = 0 < 10$.`,
        t`So the shading is $2x - 5y \le 10$, even though it lies above the line.`,
      ],
      answer: t`$2x - 5y \le 10$`,
      figure: {
        alt: "The line 2x − 5y = 10 through (5, 0) and (0, −2), with the side above it, containing the origin, shaded. The origin is marked as a test point: 0 < 10, so the shading is 2x − 5y ≤ 10.",
        axes: "xy",
        view: { x: [-6, 6], y: [-6, 6] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, -2], [5, 0]] }] },
          { kind: "line", through: [[0, -2], [5, 0]] },
          { kind: "point", at: [5, 0], label: "(5, 0)", labelAt: "nw", tone: "muted", step: 1 },
          { kind: "point", at: [0, -2], label: "(0, −2)", labelAt: "se", tone: "muted", step: 1 },
          { kind: "label", at: [-3, -3.2], label: "2x − 5y = 10", labelAt: "se", step: 1 },
          { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "good", step: 2 },
          { kind: "label", at: [-4, 4], label: "2x − 5y ≤ 10", labelAt: "e", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The line x − y = 1 with the side above it shaded. The origin, in the shading, is the test point: 0 − 0 = 0 < 1, so the shading is x − y ≤ 1, not ≥.",
      axes: "xy",
      view: { x: [-3, 3], y: [-3, 3] },
      elements: [
        { kind: "region", within: [{ kind: "halfPlane", through: [[0, -1], [1, 0]] }], step: 1 },
        { kind: "line", through: [[0, -1], [1, 0]], step: 1 },
        { kind: "label", at: [2.4, 1.4], label: "x − y = 1", labelAt: "se", step: 1 },
        { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "nw", tone: "good", step: 2 },
        { kind: "label", at: [-2.6, 2.4], label: "x − y ≤ 1", labelAt: "e", step: 3 },
      ],
    },
    visualSpec: t`Drag the line's two intercepts and tap a side to shade it; a test point in the shading gives the inequality live, and a badge shows whether above is the $\ge$ or the $\le$ side for the current sign of $b$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Reading shading above the line as $\ge$ and below as $\le$`,
      remediation: t`That works only when the coefficient of $y$ is positive. Substitute a point from the shading instead: the sign it gives is the sign of the inequality.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M2",
      mistake: "Swapping the intercepts when writing the line",
      remediation: t`The line through $(p, 0)$ and $(0, q)$ is $\frac{x}{p} + \frac{y}{q} = 1$: $p$ goes under $x$. Check: $(p, 0)$ must satisfy your line.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "authored" },
      stem: t`The shaded half-plane is bounded by the line through $(4, 0)$ and $(0, -2)$. Which inequality describes it?`,
      figure: {
        alt: "A line through (4, 0) and (0, -2) with one side of it shaded.",
        axes: "xy",
        view: { x: [-5, 5], y: [-5, 5] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, -2], [2, -1]] }] },
          { kind: "line", through: [[0, -2], [2, -1]] },
          { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "nw" },
          { kind: "point", at: [0, -2], label: "(0, −2)", labelAt: "se" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { p: "4", q: "-2", side: "origin" } },
      options: [
        { key: "A", text: t`$x - 2y \ge 4$`, correct: false, misconceptionId: "C06-M1", value: "x - 2*y - 4" },
        { key: "B", text: t`$2x - y \ge -4$`, correct: false, misconceptionId: "C06-M2", value: "2*x - y + 4" },
        { key: "C", text: t`$x - 2y \le 4$`, correct: true, value: "-x + 2*y + 4" },
      ],
      solution: {
        steps: [
          t`The line is $\frac{x}{4} + \frac{y}{-2} = 1$. Multiply by $4$: $x - 2y = 4$.`,
          t`The origin is shaded. Substitute it: $0 - 2(0) = 0 < 4$.`,
          t`So the shading is $x - 2y \le 4$, even though it lies above the line.`,
        ],
        figure: {
          alt: "The line x − 2y = 4 through (4, 0) and (0, −2), with the origin's side shaded. The origin is the test point: 0 < 4.",
          axes: "xy",
          view: { x: [-5, 5], y: [-5, 5] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, -2], [2, -1]] }] },
            { kind: "line", through: [[0, -2], [2, -1]] },
            { kind: "point", at: [4, 0], label: "(4, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [0, -2], label: "(0, −2)", labelAt: "se", tone: "muted", step: 1 },
            { kind: "label", at: [-3, -3.5], label: "x − 2y = 4", labelAt: "se", step: 1 },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`The shaded half-plane is bounded by the line through $(-3, 0)$ and $(0, 3)$. Which inequality describes it?`,
      figure: {
        alt: "A line through (-3, 0) and (0, 3) with one side of it shaded.",
        axes: "xy",
        view: { x: [-4, 4], y: [-4, 4] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 3], [-1, 2]] }] },
          { kind: "line", through: [[0, 3], [1, 4]] },
          { kind: "point", at: [-3, 0], label: "(−3, 0)", labelAt: "nw" },
          { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "se" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { p: "-3", q: "3", side: "origin" } },
      options: [
        { key: "A", text: t`$x - y \le -3$`, correct: false, misconceptionId: "C06-M1", value: "-x + y - 3" },
        { key: "B", text: t`$x - y \le 3$`, correct: false, misconceptionId: "C06-M2", value: "-x + y + 3" },
        { key: "C", text: t`$x - y \ge -3$`, correct: true, value: "x - y + 3" },
      ],
      solution: {
        steps: [
          t`The line is $\frac{x}{-3} + \frac{y}{3} = 1$. Multiply by $-3$: $x - y = -3$.`,
          t`The origin is shaded. Substitute it: $0 - 0 = 0 > -3$.`,
          t`So the shading is $x - y \ge -3$, even though it lies below the line.`,
        ],
        figure: {
          alt: "The line x − y = −3 through (−3, 0) and (0, 3), with the origin's side shaded. The origin is the test point: 0 > −3.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 3], [-1, 2]] }] },
            { kind: "line", through: [[0, 3], [1, 4]] },
            { kind: "point", at: [-3, 0], label: "(−3, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [0, 3], label: "(0, 3)", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [-2, 1], label: "x − y = −3", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`The shaded half-plane is bounded by the line through $(2, 0)$ and $(0, -4)$. Which inequality describes it?`,
      figure: {
        alt: "A line through (2, 0) and (0, -4) with one side of it shaded.",
        axes: "xy",
        view: { x: [-5, 5], y: [-5, 5] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, -4], [-1, -6]] }] },
          { kind: "line", through: [[0, -4], [1, -2]] },
          { kind: "point", at: [2, 0], label: "(2, 0)", labelAt: "nw" },
          { kind: "point", at: [0, -4], label: "(0, −4)", labelAt: "se" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { p: "2", q: "-4", side: "far" } },
      options: [
        { key: "A", text: t`$2x - y \ge 4$`, correct: true, value: "2*x - y - 4" },
        { key: "B", text: t`$2x - y \le 4$`, correct: false, misconceptionId: "C06-M1", value: "-2*x + y + 4" },
        { key: "C", text: t`$x - 2y \le -4$`, correct: false, misconceptionId: "C06-M2", value: "-x + 2*y - 4" },
      ],
      solution: {
        steps: [
          t`The line is $\frac{x}{2} + \frac{y}{-4} = 1$. Multiply by $4$: $2x - y = 4$.`,
          t`The origin is not shaded, so test a shaded point, $(3, -3)$: $2(3) - (-3) = 9 > 4$.`,
          t`So the shading is $2x - y \ge 4$.`,
        ],
        figure: {
          alt: "The line 2x − y = 4 through (2, 0) and (0, −4), with the side away from the origin shaded. The origin is hollow (not shaded); the shaded point (3, −3) is the test point: 9 > 4.",
          axes: "xy",
          view: { x: [-5, 5], y: [-5, 5] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, -4], [-1, -6]] }] },
            { kind: "line", through: [[0, -4], [1, -2]] },
            { kind: "point", at: [2, 0], label: "(2, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [0, -4], label: "(0, −4)", labelAt: "se", tone: "muted", step: 1 },
            { kind: "label", at: [3.5, 3], label: "2x − y = 4", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 0], tone: "bad", hollow: true, step: 2 },
            { kind: "point", at: [3, -3], label: "(3, −3)", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`The shaded half-plane is bounded by the line through $(-2, 0)$ and $(0, 1)$. Which inequality describes it?`,
      figure: {
        alt: "A line through (-2, 0) and (0, 1) with one side of it shaded.",
        axes: "xy",
        view: { x: [-3, 3], y: [-3, 3] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [2, 2]] }] },
          { kind: "line", through: [[0, 1], [2, 2]] },
          { kind: "point", at: [-2, 0], label: "(−2, 0)", labelAt: "nw" },
          { kind: "point", at: [0, 1], label: "(0, 1)", labelAt: "se" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { p: "-2", q: "1", side: "far" } },
      options: [
        { key: "A", text: t`$x - 2y \le -2$`, correct: true, value: "-x + 2*y - 2" },
        { key: "B", text: t`$x - 2y \ge -2$`, correct: false, misconceptionId: "C06-M1", value: "x - 2*y + 2" },
        { key: "C", text: t`$2x - y \ge 2$`, correct: false, misconceptionId: "C06-M2", value: "2*x - y - 2" },
      ],
      solution: {
        steps: [
          t`The line is $\frac{x}{-2} + \frac{y}{1} = 1$. Multiply by $-2$: $x - 2y = -2$.`,
          t`The origin is not shaded, so test a shaded point, $(-1, 2)$: $-1 - 2(2) = -5 < -2$.`,
          t`So the shading is $x - 2y \le -2$, even though it lies above the line.`,
        ],
        figure: {
          alt: "The line x − 2y = −2 through (−2, 0) and (0, 1), with the side away from the origin shaded. The origin is hollow (not shaded); the shaded point (−1, 2) is the test point: −5 < −2.",
          axes: "xy",
          view: { x: [-3, 3], y: [-3, 3] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [2, 2]] }] },
            { kind: "line", through: [[0, 1], [2, 2]] },
            { kind: "point", at: [-2, 0], label: "(−2, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [0, 1], label: "(0, 1)", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [1.6, 1.8], label: "x − 2y = −2", labelAt: "se", step: 1 },
            { kind: "point", at: [0, 0], tone: "bad", hollow: true, step: 2 },
            { kind: "point", at: [-1, 2], label: "(−1, 2)", labelAt: "w", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`The shaded half-plane is bounded by the line through $(6, 0)$ and $(0, -3)$. Which inequality describes it?`,
      figure: {
        alt: "A line through (6, 0) and (0, -3) with one side of it shaded.",
        axes: "xy",
        view: { x: [-7, 7], y: [-7, 7] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, -3], [-2, -4]] }] },
          { kind: "line", through: [[0, -3], [2, -2]] },
          { kind: "point", at: [6, 0], label: "(6, 0)", labelAt: "nw" },
          { kind: "point", at: [0, -3], label: "(0, −3)", labelAt: "se" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { p: "6", q: "-3", side: "far" } },
      options: [
        { key: "A", text: t`$2x - y \le -6$`, correct: false, misconceptionId: "C06-M2", value: "-2*x + y - 6" },
        { key: "B", text: t`$x - 2y \ge 6$`, correct: true, value: "x - 2*y - 6" },
        { key: "C", text: t`$x - 2y \le 6$`, correct: false, misconceptionId: "C06-M1", value: "-x + 2*y + 6" },
      ],
      solution: {
        steps: [
          t`The line is $\frac{x}{6} + \frac{y}{-3} = 1$. Multiply by $6$: $x - 2y = 6$.`,
          t`The origin is not shaded, so test a shaded point, $(2, -4)$: $2 - 2(-4) = 10 > 6$.`,
          t`So the shading is $x - 2y \ge 6$.`,
        ],
        figure: {
          alt: "The line x − 2y = 6 through (6, 0) and (0, −3), with the side away from the origin shaded. The origin is hollow (not shaded); the shaded point (2, −4) is the test point: 10 > 6.",
          axes: "xy",
          view: { x: [-7, 7], y: [-7, 7] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, -3], [-2, -4]] }] },
            { kind: "line", through: [[0, -3], [2, -2]] },
            { kind: "point", at: [6, 0], label: "(6, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [0, -3], label: "(0, −3)", labelAt: "se", tone: "muted", step: 1 },
            { kind: "label", at: [-4, -5], label: "x − 2y = 6", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 0], tone: "bad", hollow: true, step: 2 },
            { kind: "point", at: [2, -4], label: "(2, −4)", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`The shaded half-plane is bounded by the line through $(3, 0)$ and $(0, -1)$. Which inequality describes it?`,
      figure: {
        alt: "A line through (3, 0) and (0, -1) with one side of it shaded.",
        axes: "xy",
        view: { x: [-4, 4], y: [-4, 4] },
        elements: [
          { kind: "region", within: [{ kind: "halfPlane", through: [[0, -1], [3, 0]] }] },
          { kind: "line", through: [[0, -1], [3, 0]] },
          { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "nw" },
          { kind: "point", at: [0, -1], label: "(0, −1)", labelAt: "se" },
        ],
      },
      verify: { kind: "value", inputs: {  }, params: { p: "3", q: "-1", side: "origin" } },
      options: [
        { key: "A", text: t`$x - 3y \le 3$`, correct: true, value: "-x + 3*y + 3" },
        { key: "B", text: t`$x - 3y \ge 3$`, correct: false, misconceptionId: "C06-M1", value: "x - 3*y - 3" },
        { key: "C", text: t`$3x - y \ge -3$`, correct: false, misconceptionId: "C06-M2", value: "3*x - y + 3" },
      ],
      solution: {
        steps: [
          t`The line is $\frac{x}{3} + \frac{y}{-1} = 1$. Multiply by $3$: $x - 3y = 3$.`,
          t`The origin is shaded. Substitute it: $0 - 3(0) = 0 < 3$.`,
          t`So the shading is $x - 3y \le 3$, even though it lies above the line.`,
        ],
        figure: {
          alt: "The line x − 3y = 3 through (3, 0) and (0, −1), with the origin's side shaded. The origin is the test point: 0 < 3.",
          axes: "xy",
          view: { x: [-4, 4], y: [-4, 4] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, -1], [3, 0]] }] },
            { kind: "line", through: [[0, -1], [3, 0]] },
            { kind: "point", at: [3, 0], label: "(3, 0)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "point", at: [0, -1], label: "(0, −1)", labelAt: "se", tone: "muted", step: 1 },
            { kind: "label", at: [-3, -2], label: "x − 3y = 3", labelAt: "se", step: 1 },
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", tone: "good", step: 2 },
          ],
        },
      },
    },
  ],
};
