import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A line passes through $(1, 2)$ and has slope $3$. Does it pass through $(3, 8)$? **Can you write one rule that every point on it obeys?**`,
    reveal: t`Yes. From $(1, 2)$ to $(3, 8)$ the slope is $\frac{8 - 2}{3 - 1} = 3$. Any point $(x, y)$ on the line gives the same slope: $\frac{y - 2}{x - 1} = 3$, that is $y - 2 = 3(x - 1)$. That is the line's equation.`,
  },
  explanation: {
    intuition: t`A line is fixed once you know one point on it and how steep it is. Take any other point $(x, y)$ on the line: the slope from $(x_1, y_1)$ to it must be $m$. That one condition, with the fraction cleared, is the equation. Given two points instead, find $m$ from them first, then use either point. A line parallel to an axis keeps one coordinate fixed, so its equation names just that coordinate.`,
    formal: t`**Point–slope form:** the line through $(x_1, y_1)$ with slope $m$ is $$y - y_1 = m(x - x_1)$$ If the inclination $\theta$ is given, first find $m = \tan\theta$.

**Two-point form:** the line through $(x_1, y_1)$ and $(x_2, y_2)$ is $$\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1}$$ It is the same as finding $m = \frac{y_2 - y_1}{x_2 - x_1}$ first, then using point–slope.

**Watch the signs:** subtract the point's coordinates. Through $(-1, 4)$: $y - 4 = m(x + 1)$. Then check that every given point satisfies your answer.

**Lines parallel to the axes:**
- Parallel to the $X$-axis (horizontal, slope $0$): $y = k$. The $X$-axis itself is $y = 0$.
- Parallel to the $Y$-axis (vertical, inclination $90^\circ$, slope not defined): $x = h$. The $Y$-axis itself is $x = 0$.
- Two points with the same $x$-coordinate $h$ lie on $x = h$.`,
    worked: {
      prompt: t`Find the equation of the line passing through $A(-1, 4)$ and $B(3, -2)$.`,
      steps: [
        t`Slope from the two points: $m = \frac{-2 - 4}{3 - (-1)} = \frac{-6}{4} = -\frac{3}{2}$.`,
        t`Point–slope form with $A(-1, 4)$: $y - 4 = -\frac{3}{2}(x + 1)$.`,
        t`Multiply by $2$: $2y - 8 = -3x - 3$, so $3x + 2y - 5 = 0$.`,
        t`Check with $B(3, -2)$: $9 - 4 - 5 = 0$. It works.`,
      ],
      answer: t`$3x + 2y - 5 = 0$`,
      figure: {
        alt: "The line through A(−1, 4) and B(3, −2): a run of 4 and a rise of −6 give slope −3/2; the line is 3x + 2y − 5 = 0, and B satisfies it.",
        axes: "xy",
        view: { x: [-3, 5], y: [-3.5, 6] },
        elements: [
          { kind: "point", at: [-1, 4], label: "A(−1, 4)", labelAt: "sw", step: 1 },
          { kind: "point", at: [3, -2], label: "B(3, −2)", labelAt: "ne", step: 1 },
          { kind: "segment", from: [-1, 4], to: [3, 4], dashed: true, label: "run 4", labelAt: "n", tone: "muted", step: 1 },
          { kind: "segment", from: [3, 4], to: [3, -2], dashed: true, label: "rise −6", labelAt: "e", tone: "muted", step: 1 },
          { kind: "line", through: [[-1, 4], [3, -2]], step: 2 },
          { kind: "label", at: [1.4, -2.8], label: "3x + 2y − 5 = 0", step: 3 },
          { kind: "point", at: [3, -2], tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A line of slope 2 through P(2, 1). A second point (x, y) on it is reached by a run of x − 2 and a rise of y − 1, so y − 1 = 2(x − 2).",
      axes: "xy",
      view: { x: [-1, 6], y: [-1.5, 6.5] },
      elements: [
        { kind: "point", at: [2, 1], label: "P(2, 1)", labelAt: "nw", step: 1 },
        { kind: "line", through: [[2, 1], [4, 5]], step: 2 },
        { kind: "point", at: [4, 5], label: "(x, y)", labelAt: "nw", step: 3 },
        { kind: "segment", from: [2, 1], to: [4, 1], dashed: true, label: "x − 2", labelAt: "s", tone: "muted", step: 3 },
        { kind: "segment", from: [4, 1], to: [4, 5], dashed: true, label: "y − 1", labelAt: "e", tone: "muted", step: 3 },
        { kind: "label", at: [3, -1.2], label: "y − 1 = 2(x − 2)", step: 4 },
      ],
    },
    visualSpec: t`Drag the point $(x_1, y_1)$ and a slope handle; the line, its rise–run triangle and $y - y_1 = m(x - x_1)$ update together, and the line becomes $x = x_1$ when the run reaches $0$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Keeps the point's signs: writes $y + y_1 = m(x + x_1)$, which is the line through $(-x_1, -y_1)$`,
      remediation: t`The form is $y - y_1 = m(x - x_1)$: subtract the point's coordinates. Through $(4, -2)$ it is $y + 2 = m(x - 4)$. Check: the given point must satisfy your equation.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Takes the slope as run over rise: $\frac{x_2 - x_1}{y_2 - y_1}$, or writes $x - x_1 = m(y - y_1)$`,
      remediation: t`Slope is rise over run: $m = \frac{y_2 - y_1}{x_2 - x_1}$, the change in $y$ over the change in $x$. In $y - y_1 = m(x - x_1)$ the $m$ multiplies the $x$ side.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: t`Uses the point's $y$-coordinate as the $y$-intercept: $y = mx + y_1$`,
      remediation: t`$y_1$ is the height of the line at $x = x_1$, not at $x = 0$. Use $y - y_1 = m(x - x_1)$; the $y$-intercept, $y_1 - mx_1$, appears only when you expand.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Uses $\cot\theta$ for the slope instead of $\tan\theta$ (e.g. $\tan 30^\circ$ taken as $\sqrt{3}$)`,
      remediation: t`The slope is $m = \tan\theta$, with $\theta$ measured from the positive $X$-axis: $\tan 60^\circ = \sqrt{3}$ and $\tan 150^\circ = -\frac{1}{\sqrt{3}}$. At $\theta = 90^\circ$ the line is vertical: $x = x_1$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M5",
      mistake: t`Puts the fixed coordinate against the wrong variable: the vertical line through $(h, k)$ written as $y = h$, the horizontal one as $x = k$`,
      remediation: t`On a vertical line every point has the same $x$, so its equation is $x = h$. On a horizontal line every point has the same $y$, so it is $y = k$. The $Y$-axis itself is $x = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Two points with the same $x$-coordinate: reads the slope $\frac{y_2 - y_1}{0}$ as $0$ and writes the horizontal line $y = y_1$`,
      remediation: t`Dividing by $0$ does not give $0$: the slope is not defined, so the line is vertical. Both points have $x = x_1$, so the line is $x = x_1$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C05-M1 (point's signs kept) gives the key when the line passes through the origin (e.g. Ex 5.3 Q5(a)); draw M1 items whose line misses the origin.",
    "C05-M2 (run over rise) gives the key when m = 1 or m = −1 (e.g. the book's A(2, 1), B(1, 2)); on two points with the same x it gives y = y1, the C05-M6 answer, so those items tag M6.",
    "C05-M3 (y-coordinate as intercept) gives the key when x1 = 0 or m = 0, and does not apply to vertical lines.",
    "C05-M4 (cot for tan) gives the key at 45° and 135°; it applies only to items that give the inclination.",
    "C05-M5 (wrong variable) applies only to lines parallel to an axis. The book's horizontal-line questions (Ex 5.3 Q1–Q3, Misc II Q6–Q7) give too few distinct modelled wrong answers to make items, so y = k is taught in the formal section.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.3 Q5(d)" },
      stem: t`The equation of the line containing the point $A(3, 5)$ and having slope $\dfrac{2}{3}$ is:`,
      verify: { kind: "locus", inputs: { x1: "3", y1: "5", m: "2/3" }, params: { form: "slope" } },
      options: [
        { key: "A", text: t`$2 x - 3 y + 15 = 0$`, correct: false, misconceptionId: "C05-M3", value: "2*x - 3*y + 15" },
        { key: "B", text: t`$2 x - 3 y + 9 = 0$`, correct: true, value: "2*x - 3*y + 9" },
        { key: "C", text: t`$2 x - 3 y - 9 = 0$`, correct: false, misconceptionId: "C05-M1", value: "2*x - 3*y - 9" },
        { key: "D", text: t`$3 x - 2 y + 1 = 0$`, correct: false, misconceptionId: "C05-M2", value: "3*x - 2*y + 1" },
      ],
      solution: {
        steps: [
          t`Point–slope form with $(x_1, y_1) = (3, 5)$ and $m = \frac{2}{3}$: $y - 5 = \frac{2}{3}(x - 3)$.`,
          t`Multiply by $3$: $3y - 15 = 2x - 6$.`,
          t`Collect the terms: $2x - 3y + 9 = 0$.`,
        ],
        figure: {
          alt: "The line 2x − 3y + 9 = 0 through A(3, 5), rising 2 for every 3 across.",
          axes: "xy",
          view: { x: [-1, 8], y: [-1, 9] },
          elements: [
            { kind: "point", at: [3, 5], label: "A(3, 5)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [3, 5], to: [6, 5], dashed: true, label: "3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: [6, 5], to: [6, 7], dashed: true, label: "2", labelAt: "e", tone: "muted", step: 1 },
            { kind: "line", through: [[3, 5], [6, 7]], step: 1 },
            { kind: "label", at: [4.5, 2.5], label: "2x − 3y + 9 = 0", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.3 Q5(e)" },
      stem: t`The equation of the line containing the point $A(4, 3)$ and having inclination $120^\circ$ is:`,
      verify: { kind: "locus", inputs: { x1: "4", y1: "3", th: "2*pi/3" }, params: { form: "incl" } },
      options: [
        { key: "A", text: t`$\sqrt{3} x + y + 3 + 4 \sqrt{3} = 0$`, correct: false, misconceptionId: "C05-M1", value: "sqrt(3)*x + y + 3 + 4*sqrt(3)" },
        { key: "B", text: t`$\sqrt{3} x + y - 3 = 0$`, correct: false, misconceptionId: "C05-M3", value: "sqrt(3)*x + y - 3" },
        { key: "C", text: t`$x + \sqrt{3} y - 4 - 3 \sqrt{3} = 0$`, correct: false, misconceptionId: "C05-M4", value: "x + sqrt(3)*y - 3*sqrt(3) - 4" },
        { key: "D", text: t`$\sqrt{3} x + y - 3 - 4 \sqrt{3} = 0$`, correct: true, value: "sqrt(3)*x + y - 4*sqrt(3) - 3" },
      ],
      solution: {
        steps: [
          t`The slope is $m = \tan 120^\circ = -\sqrt{3}$.`,
          t`Point–slope form with $A(4, 3)$: $y - 3 = -\sqrt{3}(x - 4)$.`,
          t`Expand: $y - 3 = -\sqrt{3}x + 4\sqrt{3}$, so $\sqrt{3}x + y - 3 - 4\sqrt{3} = 0$.`,
        ],
        figure: {
          alt: "A line making 120° with the positive x-axis, through A(4, 3): √3x + y − 3 − 4√3 = 0.",
          axes: "xy",
          view: { x: [-1, 7], y: [-2.5, 10.5] },
          elements: [
            { kind: "line", through: [[4, 3], [5.732, 0]], step: 1 },
            { kind: "angle", at: [5.732, 0], from: 0, to: 120, label: "120°", step: 1 },
            { kind: "point", at: [4, 3], label: "A(4, 3)", labelAt: "ne", step: 2 },
            { kind: "label", at: [2.2, 1], label: "√3x + y − 3 − 4√3 = 0", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.3 Q4(a)" },
      stem: t`The equation of the line passing through the points $A(2, 0)$ and $B(3, 4)$ is:`,
      verify: { kind: "locus", inputs: { x1: "2", y1: "0", x2: "3", y2: "4" }, params: { form: "two" } },
      options: [
        { key: "A", text: t`$4 x - y - 8 = 0$`, correct: true, value: "4*x - y - 8" },
        { key: "B", text: t`$4 x - y + 8 = 0$`, correct: false, misconceptionId: "C05-M1", value: "4*x - y + 8" },
        { key: "C", text: t`$x - 4 y - 2 = 0$`, correct: false, misconceptionId: "C05-M2", value: "x - 4*y - 2" },
        { key: "D", text: t`$4 x - y = 0$`, correct: false, misconceptionId: "C05-M3", value: "4*x - y" },
      ],
      solution: {
        steps: [
          t`Slope from the two points: $m = \frac{4 - 0}{3 - 2} = 4$.`,
          t`Point–slope form with $A(2, 0)$: $y - 0 = 4(x - 2)$.`,
          t`So $y = 4x - 8$, that is $4x - y - 8 = 0$.`,
        ],
        figure: {
          alt: "The line 4x − y − 8 = 0 through A(2, 0) and B(3, 4): a run of 1 and a rise of 4.",
          axes: "xy",
          view: { x: [-1, 5], y: [-2, 6] },
          elements: [
            { kind: "point", at: [2, 0], label: "A(2, 0)", labelAt: "nw", step: 1 },
            { kind: "point", at: [3, 4], label: "B(3, 4)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [3, 0], to: [3, 4], dashed: true, label: "rise 4", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [2.5, 0.05], label: "run 1", step: 1 },
            { kind: "line", through: [[2, 0], [3, 4]], step: 2 },
            { kind: "label", at: [4.1, 0.9], label: "4x − y − 8 = 0", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q9" },
      stem: t`The equation of the line passing through the points $S(2, 1)$ and $T(2, 3)$ is:`,
      verify: { kind: "locus", inputs: { x1: "2", y1: "1", x2: "2", y2: "3" }, params: { form: "two" } },
      options: [
        { key: "A", text: t`$y = 2$`, correct: false, misconceptionId: "C05-M5", value: "y - 2" },
        { key: "B", text: t`$y = 1$`, correct: false, misconceptionId: "C05-M6", value: "y - 1" },
        { key: "C", text: t`$x = 2$`, correct: true, value: "x - 2" },
        { key: "D", text: t`$x = -2$`, correct: false, misconceptionId: "C05-M1", value: "x + 2" },
      ],
      solution: {
        steps: [
          t`Both points have $x = 2$, so the run $x_2 - x_1 = 0$ and the slope is not defined.`,
          t`The line is vertical: every point on it has $x = 2$.`,
          t`Its equation is $x = 2$.`,
        ],
        figure: {
          alt: "S(2, 1) and T(2, 3) lie one above the other; the line through them is the vertical line x = 2.",
          axes: "xy",
          view: { x: [-1, 4], y: [-1, 4.5] },
          elements: [
            { kind: "point", at: [2, 1], label: "S(2, 1)", labelAt: "e", step: 1 },
            { kind: "point", at: [2, 3], label: "T(2, 3)", labelAt: "e", step: 1 },
            { kind: "line", through: [[2, 1], [2, 3]], step: 2 },
            { kind: "label", at: [2.15, 2], label: "x = 2", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q8(b)" },
      stem: t`The equation of the line containing the point $T(7, 3)$ and having inclination $90^\circ$ is:`,
      verify: { kind: "locus", inputs: { x1: "7", y1: "3", th: "pi/2" }, params: { form: "incl" } },
      options: [
        { key: "A", text: t`$x = 7$`, correct: true, value: "x - 7" },
        { key: "B", text: t`$x = -7$`, correct: false, misconceptionId: "C05-M1", value: "x + 7" },
        { key: "C", text: t`$y = 3$`, correct: false, misconceptionId: "C05-M4", value: "y - 3" },
        { key: "D", text: t`$y = 7$`, correct: false, misconceptionId: "C05-M5", value: "y - 7" },
      ],
      solution: {
        steps: [
          t`Inclination $90^\circ$ means the line is vertical; $\tan 90^\circ$ is not defined, so there is no slope to use.`,
          t`Every point on a vertical line has the same $x$ as $T$, namely $7$.`,
          t`Its equation is $x = 7$.`,
        ],
        figure: {
          alt: "A vertical line through T(7, 3), making 90° with the x-axis: x = 7.",
          axes: "xy",
          view: { x: [-1, 9], y: [-1, 5] },
          elements: [
            { kind: "line", through: [[7, 0], [7, 3]], step: 1 },
            { kind: "angle", at: [7, 0], from: 0, to: 90, label: "90°", step: 1 },
            { kind: "point", at: [7, 3], label: "T(7, 3)", labelAt: "e", step: 2 },
            { kind: "label", at: [7.15, 4.3], label: "x = 7", labelAt: "e", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.3 SolvedEx.3(iv)" },
      stem: t`The equation of the line passing through the points $A(2, -1)$ and $B(5, 1)$ is:`,
      verify: { kind: "locus", inputs: { x1: "2", y1: "-1", x2: "5", y2: "1" }, params: { form: "two" } },
      options: [
        { key: "A", text: t`$2 x - 3 y - 7 = 0$`, correct: true, value: "2*x - 3*y - 7" },
        { key: "B", text: t`$2 x - 3 y + 7 = 0$`, correct: false, misconceptionId: "C05-M1", value: "2*x - 3*y + 7" },
        { key: "C", text: t`$3 x - 2 y - 8 = 0$`, correct: false, misconceptionId: "C05-M2", value: "3*x - 2*y - 8" },
        { key: "D", text: t`$2 x - 3 y - 3 = 0$`, correct: false, misconceptionId: "C05-M3", value: "2*x - 3*y - 3" },
      ],
      solution: {
        steps: [
          t`Slope from the two points: $m = \frac{1 - (-1)}{5 - 2} = \frac{2}{3}$.`,
          t`Point–slope form with $A(2, -1)$: $y + 1 = \frac{2}{3}(x - 2)$.`,
          t`Multiply by $3$: $3y + 3 = 2x - 4$, so $2x - 3y - 7 = 0$.`,
        ],
        figure: {
          alt: "The line 2x − 3y − 7 = 0 through A(2, −1) and B(5, 1): a run of 3 and a rise of 2.",
          axes: "xy",
          view: { x: [-1, 7], y: [-3.5, 3] },
          elements: [
            { kind: "point", at: [2, -1], label: "A(2, −1)", labelAt: "nw", step: 1 },
            { kind: "point", at: [5, 1], label: "B(5, 1)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [2, -1], to: [5, -1], dashed: true, label: "run 3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "segment", from: [5, -1], to: [5, 1], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [5.15, 0.45], label: "rise 2", labelAt: "e", step: 1 },
            { kind: "line", through: [[2, -1], [5, 1]], step: 2 },
            { kind: "label", at: [4.6, -2.6], label: "2x − 3y − 7 = 0", step: 3 },
          ],
        },
      },
    },
  ],
};
