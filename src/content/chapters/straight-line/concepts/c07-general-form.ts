import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Are $2x - 3y + 6 = 0$ and $4x - 6y + 12 = 0$ two different lines?`,
    reveal: t`No, they are the same line. The second is the first multiplied by $2$, so every point that fits one fits the other. Both have slope $\frac{2}{3}$ and cross the axes at $(-3, 0)$ and $(0, 2)$. In general, $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$ are the same line when $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.`,
  },
  explanation: {
    intuition: t`$y = mx + c$ can't write a vertical line, and the intercept form can't write a line through the origin. $ax + by + c = 0$ writes every line, so it is the form the rest of the chapter uses. The price: the slope and intercepts aren't on show. Each comes from one move: put $y = 0$, put $x = 0$, or solve for $y$. Multiplying the whole equation by a nonzero number doesn't change the line.`,
    formal: t`**Every line is $ax + by + c = 0$** ($a$, $b$ not both zero). If $b \ne 0$, solve for $y$: $y = -\frac{a}{b}x - \frac{c}{b}$. If $b = 0$, the line is vertical: $x = -\frac{c}{a}$. Any other form becomes general form by moving every term to one side: $y = 2x - 4$ becomes $2x - y - 4 = 0$.

**Read-offs**

- Slope $= -\frac{a}{b}$
- $x$-intercept $= -\frac{c}{a}$ (put $y = 0$)
- $y$-intercept $= -\frac{c}{b}$ (put $x = 0$)

**Area with the axes.** The line and the two axes make a triangle with its right angle at the origin: area $= \frac{1}{2}\,|x\text{-intercept}|\,|y\text{-intercept}|$. Intercepts can be negative; lengths can't.

**Two lines.** They meet where both equations hold, so solve them together: $x + 2y = 3$ and $2x - y = 1$ meet at $(1, 1)$. They are the same line when $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.

**A point on a line.** Substitute it: the point lies on the line only if the left side becomes $0$. For $A(2, 3)$ and $3x + 2y - 6 = 0$: $6 + 6 - 6 = 6 \ne 0$, so $A$ is not on the line.`,
    worked: {
      prompt: t`For the line $4x - 5y + 20 = 0$, find the slope, the two intercepts, and the area of the triangle it cuts off with the axes.`,
      steps: [
        t`Compare with $ax + by + c = 0$: $a = 4$, $b = -5$, $c = 20$. Keep the signs.`,
        t`Slope $= -\frac{a}{b} = -\frac{4}{-5} = \frac{4}{5}$.`,
        t`$x$-intercept $= -\frac{c}{a} = -\frac{20}{4} = -5$; $y$-intercept $= -\frac{c}{b} = -\frac{20}{-5} = 4$. Check $(-5, 0)$: $-20 - 0 + 20 = 0$.`,
        t`Area $= \frac{1}{2}\,|-5|\,|4| = \frac{1}{2} \times 5 \times 4 = 10$ square units.`,
      ],
      answer: t`Slope $\frac{4}{5}$, $x$-intercept $-5$, $y$-intercept $4$, area $10$ square units.`,
    },
    visualSpec: t`Sliders for $a$, $b$ and $c$ move the line, with its slope $-\frac{a}{b}$ and intercepts $-\frac{c}{a}$, $-\frac{c}{b}$ updating; scaling all three together leaves the line where it is.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Finds the $x$-intercept by putting $x = 0$ (and the $y$-intercept by putting $y = 0$), so the two intercepts come out swapped.`,
      remediation: t`The $x$-intercept is where the line meets the $X$-axis, and every point there has $y = 0$. So put $y = 0$ for the $x$-intercept, $-\frac{c}{a}$, and $x = 0$ for the $y$-intercept, $-\frac{c}{b}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M2",
      mistake: t`Reads $ax + by + c = 0$ as if it were $y = mx + c$: takes the slope to be $a$ and the $y$-intercept to be $c$.`,
      remediation: t`The coefficient of $x$ is the slope only once $y$ stands alone. Solve for $y$ first: $y = -\frac{a}{b}x - \frac{c}{b}$, so the slope is $-\frac{a}{b}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M3",
      mistake: t`Moves terms across the $=$ sign without changing their signs: slope $\frac{a}{b}$, intercepts $\frac{c}{a}$ and $\frac{c}{b}$.`,
      remediation: t`A term changes sign when it crosses the $=$ sign: $by = -ax - c$. So the slope is $-\frac{a}{b}$ and the intercepts are $-\frac{c}{a}$ and $-\frac{c}{b}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Gets $by = -ax - c$ (or $ax = -c$) but forgets to divide by $b$ (or $a$): slope $-a$, intercepts $-c$ and $-c$.`,
      remediation: t`Divide every term by the coefficient of the variable you are solving for: $by = -ax - c$ gives $y = -\frac{a}{b}x - \frac{c}{b}$, and $ax = -c$ gives $x = -\frac{c}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Takes the area of the triangle with the axes as $x$-intercept $\times$ $y$-intercept, forgetting the $\frac{1}{2}$.`,
      remediation: t`The triangle is right-angled at the origin with legs $|x\text{-intercept}|$ and $|y\text{-intercept}|$, so its area is $\frac{1}{2}$ of their product.`,
      fallback: { kind: "ext", topic: "area of a triangle" },
    },
    {
      id: "C07-M6",
      mistake: t`Treats intercepts as lengths that are always positive: uses $\frac{1}{2} \times$ ($x$-intercept) $\times$ ($y$-intercept) with no modulus, and keeps only the positive value of an unknown constant.`,
      remediation: t`Intercepts can be negative; the triangle's sides are their absolute values, so area $= \frac{1}{2}\,|x\text{-intercept}|\,|y\text{-intercept}|$. An equation like $p^2 = 100$ gives $p = \pm 10$: one line on each side of the origin.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C07-M1 gives the key when $a = b$ (equal intercepts); draw intercept items with $a \ne b$.`,
    t`C07-M2 gives the key's slope when $b = -1$, and C07-M4 when $b = 1$; draw slope items with $|b| \ne 1$. On intercept items C07-M4 matches the key only when $a = b = 1$.`,
    "C07-M3 and C07-M1 don't change an area (the modulus hides signs and order), so area items can't detect them.",
    "C07-M6 gives the key's area when both intercepts are positive; draw area items with a negative intercept, or ask for the constant, where it drops the negative value.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.4 Q1(a)" },
      stem: t`What is the slope of the line $2x + 3y - 6 = 0$?`,
      verify: { kind: "value", inputs: { a: "2", b: "3", c: "-6" }, params: { ask: "slope" } },
      options: [
        { key: "A", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C07-M3", value: "2/3" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C07-M4", value: "-2" },
        { key: "C", text: t`$- \frac{2}{3}$`, correct: true, value: "-2/3" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C07-M2", value: "2" },
      ],
      solution: {
        steps: [
          t`Compare with $ax + by + c = 0$: $a = 2$, $b = 3$, $c = -6$.`,
          t`Slope $= -\frac{a}{b} = -\frac{2}{3}$. Check: $3y = -2x + 6$ gives $y = -\frac{2}{3}x + 2$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.4 Q1(b)" },
      stem: t`Where does the line $3x - y - 9 = 0$ cut the coordinate axes?`,
      verify: { kind: "value", inputs: { a: "3", b: "-1", c: "-9" }, params: { ask: "intercepts" } },
      options: [
        { key: "A", text: t`$(-9, 0)$ and $(0, 3)$`, correct: false, misconceptionId: "C07-M1", value: "-9 + 3*I" },
        { key: "B", text: t`$(-3, 0)$ and $(0, 9)$`, correct: false, misconceptionId: "C07-M3", value: "-3 + 9*I" },
        { key: "C", text: t`$(9, 0)$ and $(0, 9)$`, correct: false, misconceptionId: "C07-M4", value: "9 + 9*I" },
        { key: "D", text: t`$(3, 0)$ and $(0, -9)$`, correct: true, value: "3 - 9*I" },
      ],
      solution: {
        steps: [
          t`Put $y = 0$: $3x - 9 = 0$, so $x = 3$. The line meets the $X$-axis at $(3, 0)$.`,
          t`Put $x = 0$: $-y - 9 = 0$, so $y = -9$. The line meets the $Y$-axis at $(0, -9)$.`,
          t`Same from the formulas: $-\frac{c}{a} = -\frac{-9}{3} = 3$ and $-\frac{c}{b} = -\frac{-9}{-1} = -9$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Misc II Q2" },
      stem: t`Reduce the equation $6x + 3y + 8 = 0$ to slope–intercept form.`,
      verify: { kind: "locus", inputs: { a: "6", b: "3", c: "8" }, params: { ask: "si_form" } },
      options: [
        { key: "A", text: t`$y = - 6 x - 8$`, correct: false, misconceptionId: "C07-M4", value: "6*x + y + 8" },
        { key: "B", text: t`$y = - 2 x - \frac{8}{3}$`, correct: true, value: "6*x + 3*y + 8" },
        { key: "C", text: t`$y = 6 x + 8$`, correct: false, misconceptionId: "C07-M2", value: "-6*x + y - 8" },
        { key: "D", text: t`$y = 2 x + \frac{8}{3}$`, correct: false, misconceptionId: "C07-M3", value: "-2*x + y - 8/3" },
      ],
      solution: {
        steps: [
          t`Keep $3y$ on the left and move the other terms across, changing their signs: $3y = -6x - 8$.`,
          t`Divide every term by $3$: $y = -2x - \frac{8}{3}$.`,
          t`This is $y = mx + c$ with slope $-2$ and $y$-intercept $-\frac{8}{3}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`Find the area of the triangle that the line $3x - 4y + 24 = 0$ cuts off with the coordinate axes (in square units).`,
      verify: { kind: "value", inputs: { a: "3", b: "-4", c: "24" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$24$`, correct: true, value: "24" },
        { key: "B", text: t`$288$`, correct: false, misconceptionId: "C07-M4", value: "288" },
        { key: "C", text: t`$48$`, correct: false, misconceptionId: "C07-M5", value: "48" },
        { key: "D", text: t`$-24$`, correct: false, misconceptionId: "C07-M6", value: "-24" },
      ],
      solution: {
        steps: [
          t`Put $y = 0$: $3x + 24 = 0$, so $x = -8$. Put $x = 0$: $-4y + 24 = 0$, so $y = 6$.`,
          t`The triangle has its right angle at the origin, with legs $|-8| = 8$ and $|6| = 6$.`,
          t`Area $= \frac{1}{2} \times 8 \times 6 = 24$ square units.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.4 Q5" },
      stem: t`The line $3x + 4y = p$ makes a triangle of area $24$ square units with the coordinate axes. Find $p$.`,
      verify: { kind: "value", inputs: { a: "3", b: "4", A: "24" }, params: { ask: "p_area" } },
      options: [
        { key: "A", text: t`$p = 4\sqrt{3}$ or $p = -4\sqrt{3}$`, correct: false, misconceptionId: "C07-M4", value: "{-4*sqrt(3), 4*sqrt(3)}" },
        { key: "B", text: t`$p = 12\sqrt{2}$ or $p = -12\sqrt{2}$`, correct: false, misconceptionId: "C07-M5", value: "{-12*sqrt(2), 12*sqrt(2)}" },
        { key: "C", text: t`$p = 24$ only`, correct: false, misconceptionId: "C07-M6", value: "{24}" },
        { key: "D", text: t`$p = 24$ or $p = -24$`, correct: true, value: "{-24, 24}" },
      ],
      solution: {
        steps: [
          t`Write it as $3x + 4y - p = 0$: the $x$-intercept is $\frac{p}{3}$ and the $y$-intercept is $\frac{p}{4}$.`,
          t`Area $= \frac{1}{2}\left|\frac{p}{3}\right|\left|\frac{p}{4}\right| = \frac{p^2}{24}$.`,
          t`$\frac{p^2}{24} = 24$ gives $p^2 = 576$, so $p = 24$ or $p = -24$: one line on each side of the origin.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/5.4 SolvedEx.1(b)" },
      stem: t`Find the points where the line $2x + y + 30 = 0$ meets the $X$-axis and the $Y$-axis.`,
      verify: { kind: "value", inputs: { a: "2", b: "1", c: "30" }, params: { ask: "intercepts" } },
      options: [
        { key: "A", text: t`$(-15, 0)$ and $(0, -30)$`, correct: true, value: "-15 - 30*I" },
        { key: "B", text: t`$(-30, 0)$ and $(0, -15)$`, correct: false, misconceptionId: "C07-M1", value: "-30 - 15*I" },
        { key: "C", text: t`$(15, 0)$ and $(0, 30)$`, correct: false, misconceptionId: "C07-M3", value: "15 + 30*I" },
        { key: "D", text: t`$(-30, 0)$ and $(0, -30)$`, correct: false, misconceptionId: "C07-M4", value: "-30 - 30*I" },
      ],
      solution: {
        steps: [
          t`Put $y = 0$: $2x + 30 = 0$, so $x = -15$. The line meets the $X$-axis at $(-15, 0)$.`,
          t`Put $x = 0$: $y + 30 = 0$, so $y = -30$. The line meets the $Y$-axis at $(0, -30)$.`,
        ],
      },
    },
  ],
};
