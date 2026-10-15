import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Two lines cross. One has slope $3$, the other slope $-3$: they lean opposite ways by the same amount. **Do they meet at a right angle?**`,
    reveal: t`No. Turn the line of slope $3$ through a right angle and its step turns too: right $1$, up $3$ becomes up $1$, left $3$. That is a slope of $-\frac{1}{3}$, not $-3$. The perpendicular slope flips the fraction **and** changes the sign, so the two slopes multiply to $-1$: $3 \times \left(-\frac{1}{3}\right) = -1$.`,
  },
  explanation: {
    intuition: t`Slope is the rise for each step to the right. Parallel lines climb at the same rate, so they have the same slope. Turn a line through a right angle and its step turns with it: right $1$, up $m$ becomes up $1$, left $m$. The new slope is $\frac{1}{-m} = -\frac{1}{m}$, which is why perpendicular slopes multiply to $-1$. A horizontal line and a vertical line are perpendicular too, but the vertical one has no slope, so the product rule can't be used there.`,
    formal: t`**Parallel lines**

Two non-vertical lines are parallel if and only if $m_1 = m_2$. Any two vertical lines are parallel.

**Perpendicular lines**

Two non-vertical lines are perpendicular if and only if $m_1 m_2 = -1$, that is, $m_2 = -\frac{1}{m_1}$: flip the fraction **and** change its sign. A horizontal line is perpendicular to a vertical one.

**A right angle without Pythagoras**

Find the slopes of all three sides. If two of them multiply to $-1$, those sides are perpendicular, and the right angle is at the vertex they share.

**Altitudes and unknowns**

The altitude from $A$ is perpendicular to the **opposite** side $BC$, so its slope is $-\frac{1}{m_{BC}}$. For an unknown coordinate, write the slope with the unknown in it, set $m_1 = m_2$ or $m_1 m_2 = -1$, and solve.`,
    worked: {
      prompt: t`Show that line $AB$ is perpendicular to line $BC$, where $A(1, 2)$, $B(2, 4)$ and $C(0, 5)$. Then find the slope of the line through $C$ parallel to $AB$.`,
      steps: [
        t`$m_{AB} = \frac{4 - 2}{2 - 1} = 2$.`,
        t`$m_{BC} = \frac{5 - 4}{0 - 2} = -\frac{1}{2}$.`,
        t`$m_{AB} \times m_{BC} = 2 \times \left(-\frac{1}{2}\right) = -1$, so $AB \perp BC$: the angle at $B$ is a right angle.`,
        t`A line parallel to $AB$ has the same slope as $AB$: $2$.`,
      ],
      answer: t`$AB \perp BC$, with the right angle at $B$; the line through $C$ parallel to $AB$ has slope $2$.`,
      figure: {
        alt: "Points A(1, 2), B(2, 4) and C(0, 5). Side AB has slope 2 and side BC has slope −1/2; the angle at B is marked as a right angle. A dashed line through C, parallel to AB, has slope 2.",
        axes: "xy",
        view: { x: [-2.2, 4.2], y: [-0.6, 6.4] },
        elements: [
          { kind: "point", at: [1, 2], label: "A(1, 2)", labelAt: "se" },
          { kind: "point", at: [2, 4], label: "B(2, 4)", labelAt: "e" },
          { kind: "point", at: [0, 5], label: "C(0, 5)", labelAt: "ne" },
          { kind: "segment", from: [1, 2], to: [2, 4], step: 1 },
          { kind: "label", at: [1.35, 3], label: "m = 2", labelAt: "w", step: 1 },
          { kind: "segment", from: [2, 4], to: [0, 5], step: 2 },
          { kind: "label", at: [1.3, 4.95], label: "m = −1/2", labelAt: "ne", step: 2 },
          { kind: "angle", at: [2, 4], from: 153.43, to: 243.43, tone: "good", step: 3 },
          { kind: "segment", from: [0, 5], to: [-1.25, 2.5], dashed: true, tone: "good", step: 4 },
          { kind: "label", at: [-0.8, 3.9], label: "slope 2", labelAt: "w", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A line of slope 2 through the point (3, 2), with a step drawn on it: 1 to the right, 2 up. A second line of slope 2 runs beside it, parallel. Then the step is turned through a right angle, to 1 up and 2 to the left, and drawn on a third line through (3, 2) of slope −1/2, marked at right angles to the first. The two slopes multiply to −1.",
      axes: "xy",
      view: { x: [0, 9], y: [-0.6, 5.6] },
      elements: [
        { kind: "line", through: [[3, 2], [4, 4]], step: 1 },
        { kind: "label", at: [3.9, 4.6], label: "m₁ = 2", labelAt: "w", step: 1 },
        { kind: "segment", from: [3.5, 3], to: [4.5, 3], dashed: true, tone: "muted", label: "1", labelAt: "s", step: 2 },
        { kind: "segment", from: [4.5, 3], to: [4.5, 5], dashed: true, tone: "muted", label: "2", labelAt: "e", step: 2 },
        { kind: "line", through: [[6, 2], [7, 4]], dashed: true, step: 3 },
        { kind: "label", at: [6.3, 1.4], label: "parallel: m = 2", labelAt: "e", step: 3 },
        { kind: "line", through: [[3, 2], [1, 3]], tone: "good", step: 4 },
        { kind: "segment", from: [2.5, 2.25], to: [2.5, 3.25], dashed: true, tone: "muted", step: 4 },
        { kind: "label", at: [2.5, 2.8], label: "1", labelAt: "w", tone: "muted", step: 4 },
        { kind: "segment", from: [2.5, 3.25], to: [0.5, 3.25], dashed: true, tone: "muted", label: "2", labelAt: "n", step: 4 },
        { kind: "angle", at: [3, 2], from: 63.43, to: 153.43, tone: "good", step: 4 },
        { kind: "label", at: [0.15, 2.2], label: "m₂ = −1/2", labelAt: "e", tone: "good", step: 4 },
        { kind: "label", at: [0.15, 1], label: "m₁ × m₂ = −1", labelAt: "e", tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag a handle to turn a line about a fixed point: its slope triangle turns with it, a second line stays at right angles to it, and the two slopes and their product, always $-1$, update as you drag.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Takes the perpendicular slope to be the negative, $-m$: lines that lean opposite ways by the same amount`,
      remediation: t`Perpendicular slopes multiply to $-1$, so the line perpendicular to slope $m$ has slope $-\frac{1}{m}$: flip the fraction and change its sign. Slopes $2$ and $-2$ are not perpendicular.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M2",
      mistake: t`Takes the perpendicular slope to be the reciprocal, $\frac{1}{m}$, without changing the sign`,
      remediation: t`The perpendicular slope is the **negative** reciprocal, $-\frac{1}{m}$. Flipping alone keeps the sign, so the line still leans the same way. Check that the two slopes multiply to $-1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Swaps the two conditions: equal slopes for perpendicular lines, $m_1 m_2 = -1$ for parallel ones`,
      remediation: t`Parallel lines have **equal** slopes, $m_1 = m_2$; perpendicular lines have slopes that multiply to $-1$. Lines with equal slopes never meet at all, let alone at a right angle.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Pairs vertex $A$ with the wrong side: the altitude from $A$ drawn perpendicular to $AB$, or a right angle at $A$ put between $AB$ and $BC$`,
      remediation: t`The altitude from $A$ is perpendicular to the side **opposite** $A$, which is $BC$. A right angle at $A$ is between the two sides **through** $A$: $AB$ and $AC$.`,
      fallback: { kind: "ext", topic: "altitudes and angles of a triangle" },
    },
    {
      id: "C04-M5",
      mistake: t`Reads the slope as $\frac{y_2 - y_1}{x_1 - x_2}$, taking the points in opposite orders on top and bottom`,
      remediation: t`Take the two points in the same order on top and bottom: $m = \frac{y_2 - y_1}{x_2 - x_1}$. Mixing the order flips the sign of the slope.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M6",
      mistake: t`Reads the slope as run over rise, $\frac{x_2 - x_1}{y_2 - y_1}$`,
      remediation: t`Slope is rise over run: $m = \frac{y_2 - y_1}{x_2 - x_1}$, with the change in $y$ on top.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    t`C04-M1 gives the key when the given slope is $1$ or $-1$ (there $-m = -\frac{1}{m}$): draw M1 items from other slopes.`,
    t`C04-M5 and C04-M6 are only detectable on parallel items. On a perpendicular item their answers coincide with C04-M2 ($\frac{1}{m}$) and C04-M1 ($-m$), so those items list M1 and M2 instead.`,
    "On a which-sides-are-perpendicular item, C04-M3 always answers that no two sides are perpendicular, since no two sides of a triangle are parallel.",
    t`The slope rules need non-vertical lines. In C04-Q6 side $AB$ is vertical, so C04-M4 (perpendicular to $AB$) gives a horizontal line, slope $0$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.2.3 SolvedEx.2" },
      stem: t`$A(1, 2)$, $B(2, 3)$ and $C(-2, 5)$ are the vertices of $\triangle ABC$. The slope of the altitude drawn from $A$ is:`,
      verify: { kind: "value", inputs: { ax: "1", ay: "2", bx: "2", by: "3", cx: "-2", cy: "5" }, params: { form: "altitude" } },
      options: [
        { key: "A", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C04-M3", value: "-1/2" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C04-M4", value: "-1" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C04-M2", value: "-2" },
      ],
      solution: {
        steps: [
          t`$m_{BC} = \frac{5 - 3}{-2 - 2} = -\frac{1}{2}$.`,
          t`The altitude from $A$ is perpendicular to the opposite side $BC$, so its slope $m$ satisfies $m \times \left(-\frac{1}{2}\right) = -1$.`,
          t`So $m = 2$.`,
        ],
        figure: {
          alt: "Triangle A(1, 2), B(2, 3), C(−2, 5). Side BC has slope −1/2. The altitude from A meets BC at right angles and has slope 2.",
          axes: "xy",
          view: { x: [-3.4, 3.4], y: [-0.6, 6] },
          elements: [
            { kind: "segment", from: [1, 2], to: [2, 3], tone: "muted" },
            { kind: "segment", from: [-2, 5], to: [1, 2], tone: "muted" },
            { kind: "point", at: [1, 2], label: "A(1, 2)", labelAt: "se" },
            { kind: "point", at: [2, 3], label: "B(2, 3)", labelAt: "e" },
            { kind: "point", at: [-2, 5], label: "C(−2, 5)", labelAt: "n" },
            { kind: "segment", from: [2, 3], to: [-2, 5], label: "m = −1/2", labelAt: "ne", step: 1 },
            { kind: "line", through: [[1, 2], [1.6, 3.2]], tone: "good", dashed: true, step: 2 },
            { kind: "angle", at: [1.6, 3.2], from: 153.43, to: 243.43, tone: "good", step: 2 },
            { kind: "label", at: [2.45, 4.4], label: "slope 2", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q19" },
      stem: t`The line through $A(h, 3)$ and $B(4, 1)$ is perpendicular to the line through $B(4, 1)$ and $C(-5, -6)$. The value of $h$ is:`,
      verify: { kind: "value", inputs: { px: "h", py: "3", qx: "4", qy: "1", rx: "4", ry: "1", sx: "-5", sy: "-6" }, params: { form: "perp_k" } },
      options: [
        { key: "A", text: t`$\frac{10}{7}$`, correct: false, misconceptionId: "C04-M1", value: "10/7" },
        { key: "B", text: t`$\frac{50}{9}$`, correct: false, misconceptionId: "C04-M2", value: "50/9" },
        { key: "C", text: t`$\frac{46}{7}$`, correct: false, misconceptionId: "C04-M3", value: "46/7" },
        { key: "D", text: t`$\frac{22}{9}$`, correct: true, value: "22/9" },
      ],
      solution: {
        steps: [
          t`$m_{BC} = \frac{-6 - 1}{-5 - 4} = \frac{7}{9}$.`,
          t`$AB \perp BC$, so $m_{AB} = -\frac{9}{7}$.`,
          t`$m_{AB} = \frac{1 - 3}{4 - h} = -\frac{9}{7}$ gives $9(4 - h) = 14$, so $4 - h = \frac{14}{9}$ and $h = \frac{22}{9}$.`,
        ],
        figure: {
          alt: "The line through B(4, 1) and C(−5, −6), of slope 7/9. The line through B at right angles to it has slope −9/7; it reaches height 3 at A(22/9, 3).",
          axes: "xy",
          view: { x: [-6.5, 6.5], y: [-7, 5] },
          elements: [
            { kind: "point", at: [4, 1], label: "B(4, 1)", labelAt: "e" },
            { kind: "point", at: [-5, -6], label: "C(−5, −6)", labelAt: "se" },
            { kind: "segment", from: [4, 1], to: [-5, -6], step: 1 },
            { kind: "label", at: [-2.5, -3.5], label: "m = 7/9", labelAt: "nw", step: 1 },
            { kind: "segment", from: [4, 1], to: [1.55, 4.15], tone: "good", dashed: true, step: 2 },
            { kind: "angle", at: [4, 1], from: 127.87, to: 217.87, tone: "good", step: 2 },
            { kind: "label", at: [2, 4.3], label: "m = −9/7", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [2.444, 3], label: "A(22/9, 3)", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.2 Q6" },
      stem: t`$A(-1, 0)$, $B(3, 8)$ and $C(9, 5)$ are the vertices of $\triangle ABC$. Without using Pythagoras' theorem, which two sides are perpendicular?`,
      verify: { kind: "value", inputs: { ax: "-1", ay: "0", bx: "3", by: "8", cx: "9", cy: "5" }, params: { form: "which_perp" } },
      options: [
        { key: "A", text: t`$CA \perp AB$: the right angle is at $A$`, correct: false, misconceptionId: "C04-M2", value: "at_A" },
        { key: "B", text: t`No two sides are perpendicular`, correct: false, misconceptionId: "C04-M3", value: "none" },
        { key: "C", text: t`$AB \perp BC$: the right angle is at $B$`, correct: true, value: "at_B" },
        { key: "D", text: t`$BC \perp CA$: the right angle is at $C$`, correct: false, misconceptionId: "C04-M1", value: "at_C" },
      ],
      solution: {
        steps: [
          t`$m_{AB} = \frac{8 - 0}{3 + 1} = 2$, $m_{BC} = \frac{5 - 8}{9 - 3} = -\frac{1}{2}$, $m_{CA} = \frac{0 - 5}{-1 - 9} = \frac{1}{2}$.`,
          t`$m_{AB} \times m_{BC} = 2 \times \left(-\frac{1}{2}\right) = -1$. The other two products are $-\frac{1}{4}$ and $1$, not $-1$.`,
          t`So $AB \perp BC$, and the right angle is at $B$, the vertex they share.`,
        ],
        figure: {
          alt: "Triangle A(−1, 0), B(3, 8), C(9, 5). Side AB has slope 2, BC has slope −1/2 and CA has slope 1/2. AB and BC multiply to −1, so the angle at B is marked as a right angle.",
          axes: "xy",
          view: { x: [-4, 12], y: [-1.5, 9.8] },
          elements: [
            { kind: "point", at: [-1, 0] },
            { kind: "label", at: [-1, 0.25], label: "A(−1, 0)", labelAt: "nw" },
            { kind: "point", at: [3, 8], label: "B(3, 8)", labelAt: "n" },
            { kind: "point", at: [9, 5], label: "C(9, 5)", labelAt: "ne" },
            { kind: "segment", from: [-1, 0], to: [3, 8], label: "m = 2", labelAt: "se", step: 1 },
            { kind: "segment", from: [3, 8], to: [9, 5], label: "m = −1/2", labelAt: "ne", step: 1 },
            { kind: "segment", from: [9, 5], to: [-1, 0], label: "m = 1/2", labelAt: "se", step: 1 },
            { kind: "angle", at: [3, 8], from: 243.43, to: 333.43, tone: "good", step: 2 },
            { kind: "point", at: [3, 8], tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`$ABCD$ is a parallelogram with $A(1, 1)$, $B(4, 3)$ and $C(6, 7)$. The slope of side $CD$ is:`,
      verify: { kind: "value", inputs: { ax: "1", ay: "1", bx: "4", by: "3", cx: "6", cy: "7" }, params: { form: "parallel" } },
      options: [
        { key: "A", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C04-M3", value: "-3/2" },
        { key: "B", text: t`$- \frac{2}{3}$`, correct: false, misconceptionId: "C04-M5", value: "-2/3" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C04-M6", value: "3/2" },
        { key: "D", text: t`$\frac{2}{3}$`, correct: true, value: "2/3" },
      ],
      solution: {
        steps: [
          t`Opposite sides of a parallelogram are parallel, so $CD \parallel AB$.`,
          t`$m_{AB} = \frac{3 - 1}{4 - 1} = \frac{2}{3}$.`,
          t`Parallel lines have equal slopes, so $m_{CD} = \frac{2}{3}$. (Here $D$ is $(3, 5)$, and $\frac{7 - 5}{6 - 3} = \frac{2}{3}$ agrees.)`,
        ],
        figure: {
          alt: "Parallelogram ABCD with A(1, 1), B(4, 3), C(6, 7) and D(3, 5). Side AB has slope 2/3, and the opposite side CD, parallel to it, has the same slope 2/3.",
          axes: "xy",
          view: { x: [-0.6, 7.4], y: [-0.6, 8] },
          elements: [
            { kind: "segment", from: [4, 3], to: [6, 7], tone: "muted" },
            { kind: "segment", from: [3, 5], to: [1, 1], tone: "muted" },
            { kind: "point", at: [1, 1], label: "A(1, 1)", labelAt: "se" },
            { kind: "point", at: [4, 3], label: "B(4, 3)", labelAt: "se" },
            { kind: "point", at: [6, 7], label: "C(6, 7)", labelAt: "e" },
            { kind: "point", at: [3, 5], label: "D", labelAt: "nw" },
            { kind: "segment", from: [1, 1], to: [4, 3], step: 1 },
            { kind: "segment", from: [6, 7], to: [3, 5], step: 1 },
            { kind: "label", at: [2.7, 1.9], label: "m = 2/3", labelAt: "se", step: 2 },
            { kind: "label", at: [4.4, 6.1], label: "m = 2/3", labelAt: "nw", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.2 Q6" },
      stem: t`$\triangle ABC$ has $A(4, 4)$, $B(2, 5)$ and $C(0, k)$, and its right angle is at $A$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { ax: "4", ay: "4", bx: "2", by: "5", cx: "0", cy: "k" }, params: { form: "right_k" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C04-M4", value: "1" },
        { key: "B", text: t`$-4$`, correct: true, value: "-4" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C04-M1", value: "2" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C04-M2", value: "12" },
      ],
      solution: {
        steps: [
          t`$m_{AB} = \frac{5 - 4}{2 - 4} = -\frac{1}{2}$.`,
          t`The right angle at $A$ is between $AB$ and $AC$, so $m_{AC} \times \left(-\frac{1}{2}\right) = -1$ and $m_{AC} = 2$.`,
          t`$m_{AC} = \frac{k - 4}{0 - 4} = 2$, so $k - 4 = -8$ and $k = -4$.`,
        ],
        figure: {
          alt: "Triangle A(4, 4), B(2, 5), C(0, −4). Side AB has slope −1/2. The right angle at A is between AB and AC, so the line AC has slope 2; it meets the y-axis at C(0, −4).",
          axes: "xy",
          view: { x: [-2, 6.5], y: [-5, 6.5] },
          elements: [
            { kind: "point", at: [4, 4], label: "A(4, 4)", labelAt: "se" },
            { kind: "point", at: [2, 5], label: "B(2, 5)", labelAt: "w" },
            { kind: "segment", from: [4, 4], to: [2, 5], step: 1 },
            { kind: "label", at: [3.2, 4.75], label: "m = −1/2", labelAt: "n", step: 1 },
            { kind: "segment", from: [4, 4], to: [2.5, 1], tone: "good", dashed: true, step: 2 },
            { kind: "angle", at: [4, 4], from: 153.43, to: 243.43, tone: "good", step: 2 },
            { kind: "label", at: [3, 1.6], label: "m = 2", labelAt: "e", tone: "good", step: 2 },
            { kind: "segment", from: [2.5, 1], to: [0, -4], tone: "good", dashed: true, step: 3 },
            { kind: "point", at: [0, -4], label: "C(0, −4)", labelAt: "se", tone: "good", step: 3 },
            { kind: "segment", from: [2, 5], to: [0, -4], tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`$A(2, 5)$, $B(2, -1)$ and $C(5, 1)$ are the vertices of $\triangle ABC$. The slope of the altitude drawn from $A$ is:`,
      verify: { kind: "value", inputs: { ax: "2", ay: "5", bx: "2", by: "-1", cx: "5", cy: "1" }, params: { form: "altitude" } },
      options: [
        { key: "A", text: t`$- \frac{3}{2}$`, correct: true, value: "-3/2" },
        { key: "B", text: t`$- \frac{2}{3}$`, correct: false, misconceptionId: "C04-M1", value: "-2/3" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C04-M3", value: "2/3" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C04-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`The altitude from $A$ goes to the opposite side $BC$, not to $AB$, which passes through $A$.`,
          t`$m_{BC} = \frac{1 - (-1)}{5 - 2} = \frac{2}{3}$.`,
          t`The altitude is perpendicular to $BC$, so its slope is $-\frac{3}{2}$: $\frac{2}{3} \times \left(-\frac{3}{2}\right) = -1$.`,
        ],
        figure: {
          alt: "Triangle A(2, 5), B(2, −1), C(5, 1); side AB is vertical. Side BC, opposite A, has slope 2/3. The altitude from A meets BC at right angles and has slope −3/2.",
          axes: "xy",
          view: { x: [-1, 6.6], y: [-2, 6.2] },
          elements: [
            { kind: "segment", from: [2, 5], to: [2, -1], tone: "muted" },
            { kind: "segment", from: [2, 5], to: [5, 1], tone: "muted" },
            { kind: "point", at: [2, 5], label: "A(2, 5)", labelAt: "n" },
            { kind: "point", at: [2, -1], label: "B(2, −1)", labelAt: "sw" },
            { kind: "point", at: [5, 1], label: "C(5, 1)", labelAt: "e" },
            { kind: "segment", from: [2, -1], to: [5, 1], step: 1 },
            { kind: "label", at: [3.4, 0.15], label: "m = 2/3", labelAt: "nw", step: 2 },
            { kind: "segment", from: [2, 5], to: [4.769, 0.846], tone: "good", step: 3 },
            { kind: "angle", at: [4.769, 0.846], from: 123.69, to: 213.69, tone: "good", step: 3 },
            { kind: "label", at: [3.2, 3.4], label: "slope −3/2", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
