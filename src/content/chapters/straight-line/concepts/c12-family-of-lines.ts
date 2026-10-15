import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`The lines $x + y = 4$ and $x - y = 2$ meet at some point. **Can you write the line through that point and the origin without finding the point?**`,
    reveal: t`Yes. At the meeting point both $x + y - 4$ and $x - y - 2$ are $0$, so $(x + y - 4) + k(x - y - 2) = 0$ holds there for every $k$. For the origin to be on it too: $-4 - 2k = 0$, so $k = -2$, and the line is $-x + 3y = 0$, that is $x = 3y$. (The lines meet at $(3, 1)$, and $3 = 3 \times 1$.)`,
  },
  explanation: {
    intuition: t`Where $L_1 = 0$ and $L_2 = 0$ meet, both expressions are $0$, so $L_1 + kL_2$ is $0$ there too, whatever $k$ is. Each value of $k$ gives one line through that point: change $k$ and the line swings about the point. The question always gives one more fact (an intercept, a direction, a second point), and that fact fixes $k$. You never need the meeting point itself.`,
    formal: t`**The family.** If $L_1 \equiv a_1x + b_1y + c_1 = 0$ and $L_2 \equiv a_2x + b_2y + c_2 = 0$ meet at a point, then $L_1 + kL_2 = 0$ is a line through that point for every $k$. First bring each line to the form $\ldots = 0$: $2x - y = 2$ becomes $2x - y - 2 = 0$.

**One condition fixes $k$.** Collect terms into $Ax + By + C = 0$, where $A = a_1 + ka_2$, $B = b_1 + kb_2$, $C = c_1 + kc_2$. Then:
- through $(x_1, y_1)$: substitute the point;
- $X$-intercept: $-\frac{C}{A}$; $Y$-intercept: $-\frac{C}{B}$;
- parallel to the $X$-axis: $A = 0$; parallel to the $Y$-axis: $B = 0$.

**Put $k$ back** into $L_1 + kL_2 = 0$, in the same place, and clear the fractions.

**Concurrent lines.** Three lines are concurrent when the third passes through the meeting point of the other two. $3x - 4y + 5 = 0$ and $7x - 8y + 5 = 0$ meet at $(5, 5)$, and $4(5) + 5(5) - 45 = 0$, so $4x + 5y - 45 = 0$ passes through it too.`,
    worked: {
      prompt: t`Find the equation of the line through the point of intersection of $2x + y - 5 = 0$ and $x - y - 1 = 0$ that makes intercept $4$ on the $Y$-axis.`,
      steps: [
        t`The line passes through the meeting point, so it is $(2x + y - 5) + k(x - y - 1) = 0$ for some $k$. (The lines meet at $(2, 1)$, but you don't need that.)`,
        t`Collect terms: $(2 + k)x + (1 - k)y - (5 + k) = 0$.`,
        t`For $Ax + By + C = 0$ the $Y$-intercept is $-\frac{C}{B} = \frac{5 + k}{1 - k}$. Set it equal to $4$: $5 + k = 4 - 4k$, so $k = -\frac{1}{5}$. The line must pass through $(0, 4)$.`,
        t`Put $k = -\frac{1}{5}$ and multiply by $5$: $5(2x + y - 5) - (x - y - 1) = 0$, so $9x + 6y - 24 = 0$. Divide by $3$: $3x + 2y - 8 = 0$. Check: $3(2) + 2(1) - 8 = 0$.`,
      ],
      answer: t`$3x + 2y - 8 = 0$`,
      figure: {
        alt: "The lines 2x + y − 5 = 0 and x − y − 1 = 0 meet at (2, 1). The point (0, 4) on the y-axis is marked, and the line 3x + 2y − 8 = 0 passes through both (2, 1) and (0, 4).",
        axes: "xy",
        view: { x: [-1.5, 5], y: [-1.5, 5.5] },
        elements: [
          { kind: "line", through: [[-0.25, 5.5], [3.25, -1.5]], tone: "muted", step: 1 },
          { kind: "line", through: [[-0.5, -1.5], [5, 4]], tone: "muted", step: 1 },
          { kind: "line", through: [[-1, 5.5], [3.667, -1.5]], tone: "good", step: 4 },
          { kind: "point", at: [2, 1], step: 1 },
          { kind: "label", at: [2.26, 1], label: "(2, 1)", labelAt: "e", step: 1 },
          { kind: "point", at: [0, 4], step: 3 },
          { kind: "label", at: [-0.099, 3.76], label: "(0, 4)", labelAt: "sw", step: 3 },
          { kind: "label", at: [0.52, 3.96], label: "2x + y − 5 = 0", labelAt: "ne", tone: "muted", step: 1 },
          { kind: "label", at: [3.845, 2.845], label: "x − y − 1 = 0", labelAt: "nw", tone: "muted", step: 1 },
          { kind: "label", at: [2.407, 0.39], label: "3x + 2y − 8 = 0", labelAt: "e", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The lines x + y = 4 and x − y = 2 cross at (3, 1). Dashed lines through (3, 1) show members of the family (x + y − 4) + k(x − y − 2) = 0: k = −1/2 gives x + 3y = 6 and k = −1 gives y = 1. The member with k = −2, the line x = 3y, also passes through the origin.",
      axes: "xy",
      view: { x: [-1.5, 8], y: [-2, 5] },
      elements: [
        { kind: "line", through: [[-1, 5], [6, -2]], tone: "muted", step: 1 },
        { kind: "line", through: [[0, -2], [7, 5]], tone: "muted", step: 1 },
        { kind: "line", through: [[-1.5, 2.5], [8, -0.667]], tone: "muted", step: 3, dashed: true },
        { kind: "line", through: [[-1.5, 1], [8, 1]], tone: "muted", step: 3, dashed: true },
        { kind: "line", through: [[-1.5, -0.5], [8, 2.667]], tone: "good", step: 4 },
        { kind: "point", at: [3, 1], step: 2 },
        { kind: "label", at: [3, 1.76], label: "(3, 1)", labelAt: "n", step: 2 },
        { kind: "point", at: [0, 0], tone: "good", step: 4 },
        { kind: "label", at: [5.37, -1.37], label: "x + y = 4", labelAt: "sw", tone: "muted", step: 1 },
        { kind: "label", at: [6.37, 4.37], label: "x − y = 2", labelAt: "nw", tone: "muted", step: 1 },
        { kind: "label", at: [5.435, 0.188], label: "k = −1/2", labelAt: "ne", tone: "muted", step: 3 },
        { kind: "label", at: [6.86, 1], label: "k = −1", labelAt: "n", tone: "muted", step: 3 },
        { kind: "label", at: [7.43, 2.477], label: "k = −2", labelAt: "nw", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag a slider for $k$: the line $L_1 + kL_2 = 0$ swings about the meeting point of two fixed lines, and a target (a point or an intercept) lights up when the line reaches it, showing that value of $k$.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Stops at L1 + L2 = 0 (takes k = 1) and never uses the extra condition",
      remediation: t`$L_1 + kL_2 = 0$ is a whole family of lines through the meeting point, and $k = 1$ is just one of them. Use the extra condition (the intercept, the direction or the point) to find the one $k$ that fits.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: "Takes the intercepts of Ax + By + C = 0 as C/A and C/B, dropping the minus sign",
      remediation: t`For $Ax + By + C = 0$, put $y = 0$ to get the $X$-intercept $-\frac{C}{A}$, and $x = 0$ to get the $Y$-intercept $-\frac{C}{B}$. Keep the minus sign.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C12-M3",
      mistake: "Uses the intercept on the wrong axis: -C/B for the X-intercept, or -C/A for the Y-intercept",
      remediation: t`The $X$-intercept is where the line meets the $X$-axis, so put $y = 0$: it is $-\frac{C}{A}$. The $Y$-intercept comes from $x = 0$: it is $-\frac{C}{B}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C12-M4",
      mistake: "Reads 'parallel to the X-axis' as 'no y term', so sets the y-coefficient to 0 and gets a vertical line",
      remediation: t`A line parallel to the $X$-axis is $y = $ constant, so it has no $x$ term: set the coefficient of $x$ to $0$. No $y$ term gives $x = $ constant, a line parallel to the $Y$-axis.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C12-M5",
      mistake: "Moves the constant of ax + by = c across without changing its sign, writing ax + by + c = 0",
      remediation: t`To write $ax + by = c$ as $\ldots = 0$, subtract $c$ from both sides: $ax + by - c = 0$. A wrong sign here moves the meeting point, so the line you build misses the real one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Finds k for L1 + kL2 = 0 correctly, then writes the line as kL1 + L2 = 0",
      remediation: t`The $k$ you found multiplies $L_2$ in $L_1 + kL_2 = 0$, so put it back there. $kL_1 + L_2 = 0$ is a different line through the same point.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C12-M5 is only detectable when the stem writes a line as ax + by = c (Q3 to Q6); C12-M2 and C12-M3 only on intercept items (Q1, Q2, Q6); C12-M4 only on parallel-to-X-axis items (Q3, Q4).",
    "In the book's Misc II Q14 (x + y - 3 = 0, 2x - y + 1 = 0, parallel to the X-axis) L1 + L2 = 0 is the vertical line 3x - 2 = 0, the same line C12-M4 gives, so Q4 does not offer C12-M1; its stem writes both lines as ax + by = c so that C12-M5 can be tested instead.",
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.4 Q17" },
      stem: t`The line through the point of intersection of $x + y - 2 = 0$ and $2x - 3y + 4 = 0$ that makes intercept $3$ on the $X$-axis is:`,
      verify: { kind: "locus", inputs: { a1: "1", b1: "1", c1: "-2", a2: "2", b2: "-3", c2: "4", v: "3" }, params: { cond: "xint" } },
      options: [
        { key: "A", text: t`$3x - 2y + 2 = 0$`, correct: false, misconceptionId: "C12-M1", value: "3*x - 2*y + 2" },
        { key: "B", text: t`$8x - 17y + 24 = 0$`, correct: false, misconceptionId: "C12-M2", value: "8*x - 17*y + 24" },
        { key: "C", text: t`$7x + 2y - 6 = 0$`, correct: false, misconceptionId: "C12-M3", value: "7*x + 2*y - 6" },
        { key: "D", text: t`$8x + 13y - 24 = 0$`, correct: true, value: "8*x + 13*y - 24" },
      ],
      solution: {
        steps: [
          t`Every line through the meeting point is $(x + y - 2) + k(2x - 3y + 4) = 0$, that is $(1 + 2k)x + (1 - 3k)y + (4k - 2) = 0$. The lines meet at $\left(\frac{2}{5}, \frac{8}{5}\right)$.`,
          t`Its $X$-intercept is $-\frac{4k - 2}{1 + 2k} = 3$, so $2 - 4k = 3 + 6k$ and $k = -\frac{1}{10}$. The line must pass through $(3, 0)$.`,
          t`Put $k = -\frac{1}{10}$ and multiply by $10$: $10(x + y - 2) - (2x - 3y + 4) = 0$, so $8x + 13y - 24 = 0$.`,
        ],
        figure: {
          alt: "The lines x + y − 2 = 0 and 2x − 3y + 4 = 0 meet at (2/5, 8/5). The line 8x + 13y − 24 = 0 passes through that point and through (3, 0) on the x-axis.",
          axes: "xy",
          view: { x: [-3, 5], y: [-1.5, 3.5] },
          elements: [
            { kind: "line", through: [[-1.5, 3.5], [3.5, -1.5]], tone: "muted", step: 1 },
            { kind: "line", through: [[-3, -0.667], [3.25, 3.5]], tone: "muted", step: 1 },
            { kind: "line", through: [[-2.687, 3.5], [5, -1.231]], tone: "good", step: 3 },
            { kind: "point", at: [0.4, 1.6], step: 1 },
            { kind: "label", at: [1.04, 1.6], label: "(2/5, 8/5)", labelAt: "e", step: 1 },
            { kind: "point", at: [3, 0], step: 2 },
            { kind: "label", at: [3.113, 0.113], label: "(3, 0)", labelAt: "ne", step: 2 },
            { kind: "label", at: [3.05, -1.05], label: "x + y − 2 = 0", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "label", at: [2.125, 2.75], label: "2x − 3y + 4 = 0", labelAt: "se", tone: "muted", step: 1 },
            { kind: "label", at: [1.771, 0.756], label: "8x + 13y − 24 = 0", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q15" },
      stem: t`The line through the point of intersection of $x + y + 9 = 0$ and $2x + 3y + 1 = 0$ that makes $X$-intercept $1$ is:`,
      verify: { kind: "locus", inputs: { a1: "1", b1: "1", c1: "9", a2: "2", b2: "3", c2: "1", v: "1" }, params: { cond: "xint" } },
      options: [
        { key: "A", text: t`$4x + y + 87 = 0$`, correct: false, misconceptionId: "C12-M6", value: "4*x + y + 87" },
        { key: "B", text: t`$17x + 27y - 17 = 0$`, correct: true, value: "17*x + 27*y - 17" },
        { key: "C", text: t`$17x + 25y + 17 = 0$`, correct: false, misconceptionId: "C12-M2", value: "17*x + 25*y + 17" },
        { key: "D", text: t`$8x + 13y - 13 = 0$`, correct: false, misconceptionId: "C12-M3", value: "8*x + 13*y - 13" },
      ],
      solution: {
        steps: [
          t`Every line through the meeting point is $(x + y + 9) + k(2x + 3y + 1) = 0$, that is $(1 + 2k)x + (1 + 3k)y + (9 + k) = 0$. The lines meet at $(-26, 17)$.`,
          t`Its $X$-intercept is $-\frac{9 + k}{1 + 2k} = 1$, so $-9 - k = 1 + 2k$ and $k = -\frac{10}{3}$. The line must pass through $(1, 0)$.`,
          t`Put $k = -\frac{10}{3}$ and multiply by $3$: $3(x + y + 9) - 10(2x + 3y + 1) = 0$, so $-17x - 27y + 17 = 0$, that is $17x + 27y - 17 = 0$.`,
        ],
        figure: {
          alt: "The lines x + y + 9 = 0 and 2x + 3y + 1 = 0 meet at (−26, 17). The line 17x + 27y − 17 = 0 passes through that point and through (1, 0) on the x-axis.",
          axes: "xy",
          view: { x: [-31, 7], y: [-12, 21] },
          elements: [
            { kind: "line", through: [[-30, 21], [3, -12]], tone: "muted", step: 1 },
            { kind: "line", through: [[-31, 20.333], [7, -5]], tone: "muted", step: 1 },
            { kind: "line", through: [[-31, 20.148], [7, -3.778]], tone: "good", step: 3 },
            { kind: "point", at: [-26, 17], step: 1 },
            { kind: "label", at: [-25.298, 17.291], label: "(−26, 17)", labelAt: "ne", step: 1 },
            { kind: "point", at: [1, 0], step: 2 },
            { kind: "label", at: [1, 2.28], label: "(1, 0)", labelAt: "ne", step: 2 },
            { kind: "label", at: [-14.82, 5.82], label: "x + y + 9 = 0", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "label", at: [-22.64, 14.76], label: "2x + 3y + 1 = 0", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "label", at: [-18.08, 12.013], label: "17x + 27y − 17 = 0", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.4 Q16" },
      stem: t`The line parallel to the $X$-axis and passing through the point of intersection of $x + y - 2 = 0$ and $4x + 3y = 10$ is:`,
      verify: { kind: "locus", inputs: { a1: "1", b1: "1", c1: "-2", a2: "4", b2: "3", c2: "-10" }, params: { cond: "xaxis", rhs: "2" } },
      options: [
        { key: "A", text: t`$y - 18 = 0$`, correct: false, misconceptionId: "C12-M5", value: "y - 18" },
        { key: "B", text: t`$y + 2 = 0$`, correct: true, value: "y + 2" },
        { key: "C", text: t`$5x + 4y - 12 = 0$`, correct: false, misconceptionId: "C12-M1", value: "5*x + 4*y - 12" },
        { key: "D", text: t`$x - 4 = 0$`, correct: false, misconceptionId: "C12-M4", value: "x - 4" },
      ],
      solution: {
        steps: [
          t`Write the second line as $4x + 3y - 10 = 0$. Every line through the meeting point is $(x + y - 2) + k(4x + 3y - 10) = 0$, that is $(1 + 4k)x + (1 + 3k)y - (2 + 10k) = 0$.`,
          t`Parallel to the $X$-axis means no $x$ term: $1 + 4k = 0$, so $k = -\frac{1}{4}$.`,
          t`Multiply by $4$: $4(x + y - 2) - (4x + 3y - 10) = 0$, so $y + 2 = 0$. Check: the lines meet at $(4, -2)$, which is on $y = -2$.`,
        ],
        figure: {
          alt: "The lines x + y − 2 = 0 and 4x + 3y = 10 meet at (4, −2). The horizontal line y = −2 passes through that point, parallel to the x-axis.",
          axes: "xy",
          view: { x: [-1.5, 7], y: [-4, 4] },
          elements: [
            { kind: "line", through: [[-1.5, 3.5], [6, -4]], tone: "muted", step: 1 },
            { kind: "line", through: [[-0.5, 4], [5.5, -4]], tone: "muted", step: 1 },
            { kind: "line", through: [[-1.5, -2], [7, -2]], tone: "good", step: 3 },
            { kind: "point", at: [4, -2], step: 3 },
            { kind: "label", at: [4, -1.83], label: "(4, −2)", labelAt: "ne", step: 3 },
            { kind: "label", at: [2.85, -0.85], label: "x + y − 2 = 0", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "label", at: [0.82, 2.24], label: "4x + 3y = 10", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "label", at: [1.645, -2], label: "y + 2 = 0", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q14" },
      stem: t`The line through the point of intersection of $x + y = 3$ and $2x - y = -1$ that is parallel to the $X$-axis is:`,
      verify: { kind: "locus", inputs: { a1: "1", b1: "1", c1: "-3", a2: "2", b2: "-1", c2: "1" }, params: { cond: "xaxis", rhs: "12" } },
      options: [
        { key: "A", text: t`$3x - 3y + 5 = 0$`, correct: false, misconceptionId: "C12-M6", value: "3*x - 3*y + 5" },
        { key: "B", text: t`$3y - 7 = 0$`, correct: true, value: "3*y - 7" },
        { key: "C", text: t`$3x - 2 = 0$`, correct: false, misconceptionId: "C12-M4", value: "3*x - 2" },
        { key: "D", text: t`$3y + 7 = 0$`, correct: false, misconceptionId: "C12-M5", value: "3*y + 7" },
      ],
      solution: {
        steps: [
          t`Write the lines as $x + y - 3 = 0$ and $2x - y + 1 = 0$. Every line through their meeting point is $(x + y - 3) + k(2x - y + 1) = 0$, that is $(1 + 2k)x + (1 - k)y + (k - 3) = 0$.`,
          t`Parallel to the $X$-axis means no $x$ term: $1 + 2k = 0$, so $k = -\frac{1}{2}$.`,
          t`Multiply by $2$: $2(x + y - 3) - (2x - y + 1) = 0$, so $3y - 7 = 0$, the line $y = \frac{7}{3}$ through the meeting point $\left(\frac{2}{3}, \frac{7}{3}\right)$.`,
        ],
        figure: {
          alt: "The lines x + y = 3 and 2x − y = −1 meet at (2/3, 7/3). The horizontal line y = 7/3 passes through that point, parallel to the x-axis.",
          axes: "xy",
          view: { x: [-2.5, 4], y: [-1.5, 4] },
          elements: [
            { kind: "line", through: [[-1, 4], [4, -1]], tone: "muted", step: 1 },
            { kind: "line", through: [[-1.25, -1.5], [1.5, 4]], tone: "muted", step: 1 },
            { kind: "line", through: [[-2.5, 2.333], [4, 2.333]], tone: "good", step: 3 },
            { kind: "point", at: [0.667, 2.333], step: 3 },
            { kind: "label", at: [1.027, 2.483], label: "(2/3, 7/3)", labelAt: "ne", step: 3 },
            { kind: "label", at: [1.9, 1.1], label: "x + y = 3", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "label", at: [1.335, 3.67], label: "2x − y = −1", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [-0.875, 2.333], label: "3y − 7 = 0", labelAt: "nw", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.4.4 SolvedEx.2" },
      stem: t`The line through the point of intersection of $3x + 2y = 6$ and $x + y + 1 = 0$ and through the point $A(2, 1)$ is:`,
      verify: { kind: "locus", inputs: { a1: "3", b1: "2", c1: "-6", a2: "1", b2: "1", c2: "1", px: "2", py: "1" }, params: { cond: "point", rhs: "1" } },
      options: [
        { key: "A", text: t`$x + 3y - 5 = 0$`, correct: false, misconceptionId: "C12-M5", value: "x + 3*y - 5" },
        { key: "B", text: t`$x - 8 = 0$`, correct: false, misconceptionId: "C12-M6", value: "x - 8" },
        { key: "C", text: t`$5x + 3y - 13 = 0$`, correct: true, value: "5*x + 3*y - 13" },
        { key: "D", text: t`$4x + 3y - 5 = 0$`, correct: false, misconceptionId: "C12-M1", value: "4*x + 3*y - 5" },
      ],
      solution: {
        steps: [
          t`Write the first line as $3x + 2y - 6 = 0$. The lines meet at $P(8, -9)$, and every line through $P$ is $(3x + 2y - 6) + k(x + y + 1) = 0$.`,
          t`It passes through $A(2, 1)$: $(6 + 2 - 6) + k(2 + 1 + 1) = 0$, so $2 + 4k = 0$ and $k = -\frac{1}{2}$.`,
          t`Multiply by $2$: $2(3x + 2y - 6) - (x + y + 1) = 0$, so $5x + 3y - 13 = 0$.`,
        ],
        figure: {
          alt: "The lines 3x + 2y = 6 and x + y + 1 = 0 meet at P(8, −9). The line 5x + 3y − 13 = 0 passes through P and through A(2, 1).",
          axes: "xy",
          view: { x: [-3, 11], y: [-11, 4] },
          elements: [
            { kind: "line", through: [[-0.667, 4], [9.333, -11]], tone: "muted", step: 1 },
            { kind: "line", through: [[-3, 2], [10, -11]], tone: "muted", step: 1 },
            { kind: "line", through: [[0.2, 4], [9.2, -11]], tone: "good", step: 3 },
            { kind: "point", at: [8, -9], step: 1 },
            { kind: "label", at: [8.28, -9], label: "P(8, −9)", labelAt: "ne", step: 1 },
            { kind: "point", at: [2, 1], step: 2 },
            { kind: "label", at: [2.28, 1], label: "A(2, 1)", labelAt: "ne", step: 2 },
            { kind: "label", at: [8.433, -9.65], label: "3x + 2y = 6", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "label", at: [5.32, -6.32], label: "x + y + 1 = 0", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "label", at: [1.1, 2.5], label: "5x + 3y − 13 = 0", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.4.4 SolvedEx.1" },
      stem: t`The line through the point of intersection of $x + 2y + 6 = 0$ and $2x - y = 2$ that makes intercept $5$ on the $Y$-axis is:`,
      verify: { kind: "locus", inputs: { a1: "1", b1: "2", c1: "6", a2: "2", b2: "-1", c2: "-2", v: "5" }, params: { cond: "yint", rhs: "2" } },
      options: [
        { key: "A", text: t`$11x + 2y + 10 = 0$`, correct: false, misconceptionId: "C12-M2", value: "11*x + 2*y + 10" },
        { key: "B", text: t`$14x - 27y - 70 = 0$`, correct: false, misconceptionId: "C12-M3", value: "14*x - 27*y - 70" },
        { key: "C", text: t`$7x - 2y + 10 = 0$`, correct: false, misconceptionId: "C12-M5", value: "7*x - 2*y + 10" },
        { key: "D", text: t`$39x - 2y + 10 = 0$`, correct: true, value: "39*x - 2*y + 10" },
      ],
      solution: {
        steps: [
          t`Write the second line as $2x - y - 2 = 0$. Every line through the meeting point is $(x + 2y + 6) + k(2x - y - 2) = 0$, that is $(1 + 2k)x + (2 - k)y + (6 - 2k) = 0$. The lines meet at $\left(-\frac{2}{5}, -\frac{14}{5}\right)$.`,
          t`Its $Y$-intercept is $-\frac{6 - 2k}{2 - k} = 5$, so $-6 + 2k = 10 - 5k$ and $k = \frac{16}{7}$. The line must pass through $(0, 5)$.`,
          t`Put $k = \frac{16}{7}$ and multiply by $7$: $7(x + 2y + 6) + 16(2x - y - 2) = 0$, so $39x - 2y + 10 = 0$.`,
        ],
        figure: {
          alt: "The lines x + 2y + 6 = 0 and 2x − y = 2 meet at (−2/5, −14/5). The steep line 39x − 2y + 10 = 0 passes through that point and through (0, 5) on the y-axis.",
          axes: "xy",
          view: { x: [-6.5, 4], y: [-4.5, 6.5] },
          elements: [
            { kind: "line", through: [[-6.5, 0.25], [3, -4.5]], tone: "muted", step: 1 },
            { kind: "line", through: [[-1.25, -4.5], [4, 6]], tone: "muted", step: 1 },
            { kind: "line", through: [[-0.487, -4.5], [0.077, 6.5]], tone: "good", step: 3 },
            { kind: "point", at: [-0.4, -2.8], step: 1 },
            { kind: "label", at: [-0.82, -2.8], label: "(−2/5, −14/5)", labelAt: "sw", step: 1 },
            { kind: "point", at: [0, 5], step: 2 },
            { kind: "label", at: [0.21, 5], label: "(0, 5)", labelAt: "e", step: 2 },
            { kind: "label", at: [-2.985, -1.508], label: "x + 2y + 6 = 0", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "label", at: [0.377, -1.245], label: "2x − y = 2", labelAt: "se", tone: "muted", step: 1 },
            { kind: "label", at: [-0.228, 0.56], label: "39x − 2y + 10 = 0", labelAt: "w", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
