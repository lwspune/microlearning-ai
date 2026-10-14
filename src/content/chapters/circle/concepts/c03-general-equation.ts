import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$x^2 + y^2 + 2x - 8y + 17 = 0$ has $x^2$ and $y^2$ with the same coefficient and no $xy$ term. **Is it a circle?**`,
    reveal: t`Complete the squares: $(x + 1)^2 + (y - 4)^2 = 1 + 16 - 17 = 0$. A sum of two squares is $0$ only when both are $0$, so the only point on it is $(-1, 4)$: a circle of radius $0$, a **point circle**. Change $17$ to $18$ and the right side is $-1$: no point at all. Whether you get a real circle depends on the sign of $g^2 + f^2 - c$.`,
  },
  explanation: {
    intuition: t`The general equation is the centre–radius form multiplied out. Expand $(x - h)^2 + (y - k)^2 = r^2$ and you get $x^2 + y^2 - 2hx - 2ky + (h^2 + k^2 - r^2) = 0$. So the coefficient of $x$ is $-2h$: halve it and flip its sign to get $h$, and the same for $y$. Whatever is left in the constant tells you $r$. For $x^2 + y^2 - 6x + 4y - 3 = 0$: the centre is $(3, -2)$, and $r^2 = 9 + 4 + 3 = 16$, so $r = 4$.`,
    formal: t`**The general equation** $x^2 + y^2 + 2gx + 2fy + c = 0$. Completing the squares gives $(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$, so

- centre $(-g, -f)$: half the coefficient of $x$ (and of $y$), sign flipped;
- radius $r = \sqrt{g^2 + f^2 - c}$.

**First make the coefficients of $x^2$ and $y^2$ equal to $1$.** In $2x^2 + 2y^2 + 8x - 4y - 10 = 0$, divide by $2$: $x^2 + y^2 + 4x - 2y - 5 = 0$. Now $g = 2$, $f = -1$, $c = -5$: centre $(-2, 1)$, $r = \sqrt{4 + 1 + 5} = \sqrt{10}$.

**Is it a real circle?** If $g^2 + f^2 - c > 0$, yes. If it is $0$, the equation is the single point $(-g, -f)$ (a point circle). If it is negative, no point satisfies it.

**Concentric circles** share a centre: same $g$ and $f$, a different $c$. They are $x^2 + y^2 + 2gx + 2fy + k = 0$.

**Intercepts on the axes.** Put $y = 0$: $x^2 + 2gx + c = 0$. Its two roots are where the circle meets the $x$-axis, and the chord between them has length $2\sqrt{g^2 - c}$. On the $y$-axis it is $2\sqrt{f^2 - c}$. The chord is a diameter only when the centre lies on that axis.`,
    worked: {
      prompt: t`Show that $3x^2 + 3y^2 - 6x + 4y - 1 = 0$ represents a circle, and find its centre and radius.`,
      steps: [
        t`The coefficient of $x^2$ and $y^2$ is $3$, so divide by $3$: $x^2 + y^2 - 2x + \frac{4}{3}y - \frac{1}{3} = 0$.`,
        t`Compare with $x^2 + y^2 + 2gx + 2fy + c = 0$: $2g = -2$, $2f = \frac{4}{3}$, so $g = -1$, $f = \frac{2}{3}$, $c = -\frac{1}{3}$.`,
        t`$g^2 + f^2 - c = 1 + \frac{4}{9} + \frac{1}{3} = \frac{16}{9} > 0$, so the equation is a real circle.`,
        t`Centre $(-g, -f) = \left(1, -\frac{2}{3}\right)$; radius $\sqrt{\frac{16}{9}} = \frac{4}{3}$.`,
      ],
      answer: t`A circle with centre $\left(1, -\frac{2}{3}\right)$ and radius $\frac{4}{3}$.`,
      figure: {
        alt: "The equation divided by 3, x² + y² − 2x + 4y/3 − 1/3 = 0, then g = −1, f = 2/3, c = −1/3, then the circle 3x² + 3y² − 6x + 4y − 1 = 0: centre (1, −2/3), radius 4/3, drawn as a horizontal segment from the centre.",
        axes: "xy",
        view: { x: [-1.5, 3.5], y: [-2.5, 1.5] },
        elements: [
          { kind: "label", at: [1.9, -2.45], label: "x² + y² − 2x + 4y/3 − 1/3 = 0", labelAt: "n", step: 1 },
          { kind: "label", at: [2, 1], label: "g = −1, f = 2/3, c = −1/3", labelAt: "n", step: 2 },
          { kind: "circle", centre: [1, -0.667], r: 1.333, step: 3 },
          { kind: "point", at: [1, -0.667], label: "(1, −2/3)", labelAt: "s", step: 4 },
          { kind: "segment", from: [1, -0.667], to: [2.333, -0.667], label: "r = 4/3", labelAt: "n", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The circle x² + y² − 6x + 4y − 3 = 0, labelled c = −3, with its centre (3, −2) and a radius of length 4 drawn to the right. A smaller dashed circle with the same centre, x² + y² − 6x + 4y + 9 = 0, has radius 2: same g and f, a different c, so the circles are concentric.",
      axes: "xy",
      view: { x: [-2.5, 8.5], y: [-7, 3] },
      elements: [
        { kind: "circle", centre: [3, -2], r: 4, step: 1 },
        { kind: "label", at: [3, 2], label: "c = −3", labelAt: "n", step: 1 },
        { kind: "point", at: [3, -2], label: "(3, −2)", labelAt: "n", step: 2 },
        { kind: "segment", from: [3, -2], to: [7, -2], step: 3 },
        { kind: "label", at: [6, -2], label: "r = 4", labelAt: "n", step: 3 },
        { kind: "circle", centre: [3, -2], r: 2, dashed: true, tone: "muted", step: 4 },
        { kind: "label", at: [3, -4.2], label: "c = 9, r = 2", labelAt: "s", tone: "muted", step: 4 },
      ],
    },
    visualSpec: t`Drag the sliders for $g$, $f$ and $c$ and watch the circle move: its centre sits at $(-g, -f)$, and as $c$ grows the circle shrinks to a point and then vanishes.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Takes the centre as $(g, f)$, keeping the signs of the coefficients`,
      remediation: t`The centre is $(-g, -f)$: halve the coefficients of $x$ and $y$, then flip their signs. A $-6x$ term means the centre has $x = 3$, just as $(x - 3)^2$ does.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Takes $g$ as the whole coefficient of $x$ (and $f$ of $y$), forgetting the $2$ in $2gx$`,
      remediation: t`The equation is written with $2gx$ and $2fy$, so $g$ is **half** the coefficient of $x$, and $f$ half the coefficient of $y$. For $-6x$, $2g = -6$ and $g = -3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Reads $g$, $f$, $c$ off the equation before dividing by the common coefficient of $x^2$ and $y^2$`,
      remediation: t`The formulas need $x^2 + y^2$ with coefficient $1$. Divide the whole equation by the coefficient of $x^2$ first, then read $2g$, $2f$ and $c$.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
    {
      id: "C03-M4",
      mistake: t`Uses $r = \sqrt{g^2 + f^2 + c}$`,
      remediation: t`The radius is $\sqrt{g^2 + f^2 - c}$: completing the squares moves $c$ to the right-hand side, so its sign changes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Mixes up $r$ and $r^2$: stops at $g^2 + f^2 - c$ without the square root, or writes $r$ where $r^2$ belongs`,
      remediation: t`$g^2 + f^2 - c$ is $r^2$, so take its square root for $r$ (and the same for $g^2 - c$ in the intercept $2\sqrt{g^2 - c}$). The other way round, $(x - h)^2 + (y - k)^2$ equals $r^2$, not $r$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: "Takes the chord a circle cuts off on an axis to be a diameter",
      remediation: t`The chord on the $x$-axis is a diameter only when the centre is on the $x$-axis. Put $y = 0$ and find the two points where the circle meets the axis: the chord is $2\sqrt{g^2 - c}$ long.`,
      fallback: { kind: "ext", topic: "chords of a circle" },
    },
  ],
  engineNotes: [
    "C03-M1 leaves the radius and the intercepts unchanged: diagnose it with a centre or an equation item.",
    "C03-M3 only applies when the coefficient of x² is not 1.",
    "C03-M4 gives the key when c = 0 (a circle through the origin, as in C03-Q6).",
    "C03-M6 applies to intercept items only, and gives the key when the centre lies on that axis.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.2 Q1(i)" },
      stem: t`The centre and radius of the circle $x^2 + y^2 - 2x + 4y - 4 = 0$ are:`,
      verify: { kind: "value", inputs: { A: "1", D: "-2", E: "4", F: "-4" }, params: { kind: "eq", ask: "cr" } },
      options: [
        { key: "A", text: t`centre $(2, -4)$, radius $2 \sqrt{6}$`, correct: false, misconceptionId: "C03-M2", value: "(2, -4, 2*sqrt(6))" },
        { key: "B", text: t`centre $(1, -2)$, radius $1$`, correct: false, misconceptionId: "C03-M4", value: "(1, -2, 1)" },
        { key: "C", text: t`centre $(1, -2)$, radius $3$`, correct: true, value: "(1, -2, 3)" },
        { key: "D", text: t`centre $(-1, 2)$, radius $3$`, correct: false, misconceptionId: "C03-M1", value: "(-1, 2, 3)" },
      ],
      solution: {
        steps: [
          t`The coefficient of $x^2$ is already $1$. $2g = -2$, $2f = 4$, $c = -4$, so $g = -1$, $f = 2$.`,
          t`Centre $(-g, -f) = (1, -2)$.`,
          t`$r = \sqrt{g^2 + f^2 - c} = \sqrt{1 + 4 + 4} = 3$. Centre $(1, -2)$, radius $3$.`,
        ],
        figure: {
          alt: "The circle x² + y² − 2x + 4y − 4 = 0 with centre (1, −2) and a radius of 3 drawn to the right of the centre.",
          axes: "xy",
          view: { x: [-3.5, 5.5], y: [-6, 2] },
          elements: [
            { kind: "point", at: [1, -2], label: "(1, −2)", labelAt: "s", step: 2 },
            { kind: "circle", centre: [1, -2], r: 3, step: 3 },
            { kind: "segment", from: [1, -2], to: [4, -2], label: "r = 3", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.2 Q1(iii)" },
      stem: t`The centre of the circle $4x^2 + 4y^2 - 24x - 8y - 24 = 0$ is:`,
      verify: { kind: "value", inputs: { A: "4", D: "-24", E: "-8", F: "-24" }, params: { kind: "eq", ask: "centre" } },
      options: [
        { key: "A", text: t`$(6, 2)$`, correct: false, misconceptionId: "C03-M2", value: "(6, 2)" },
        { key: "B", text: t`$(12, 4)$`, correct: false, misconceptionId: "C03-M3", value: "(12, 4)" },
        { key: "C", text: t`$(3, 1)$`, correct: true, value: "(3, 1)" },
        { key: "D", text: t`$(-3, -1)$`, correct: false, misconceptionId: "C03-M1", value: "(-3, -1)" },
      ],
      solution: {
        steps: [
          t`Divide by $4$ first: $x^2 + y^2 - 6x - 2y - 6 = 0$.`,
          t`Now $2g = -6$ and $2f = -2$, so $g = -3$, $f = -1$.`,
          t`Centre $(-g, -f) = (3, 1)$. (Its radius is $\sqrt{9 + 1 + 6} = 4$.)`,
        ],
        figure: {
          alt: "The circle 4x² + 4y² − 24x − 8y − 24 = 0, the same as x² + y² − 6x − 2y − 6 = 0, with its centre (3, 1) marked; its radius is 4.",
          axes: "xy",
          view: { x: [-2.5, 8], y: [-4, 6] },
          elements: [
            { kind: "circle", centre: [3, 1], r: 4 },
            { kind: "point", at: [3, 1], label: "(3, 1)", labelAt: "ne", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.2 Q2" },
      stem: t`The equation $3x^2 + 3y^2 + 12x + 18y - 11 = 0$ represents a circle. Its radius is:`,
      verify: { kind: "value", inputs: { A: "3", D: "12", E: "18", F: "-11" }, params: { kind: "eq", ask: "radius" } },
      options: [
        { key: "A", text: t`$8 \sqrt{2}$`, correct: false, misconceptionId: "C03-M3", value: "8*sqrt(2)" },
        { key: "B", text: t`$\frac{2 \sqrt{21}}{3}$`, correct: false, misconceptionId: "C03-M4", value: "2*sqrt(21)/3" },
        { key: "C", text: t`$\frac{50}{3}$`, correct: false, misconceptionId: "C03-M5", value: "50/3" },
        { key: "D", text: t`$\frac{5 \sqrt{6}}{3}$`, correct: true, value: "5*sqrt(6)/3" },
      ],
      solution: {
        steps: [
          t`Divide by $3$: $x^2 + y^2 + 4x + 6y - \frac{11}{3} = 0$.`,
          t`$2g = 4$, $2f = 6$, so $g = 2$, $f = 3$, $c = -\frac{11}{3}$. The centre is $(-2, -3)$.`,
          t`$g^2 + f^2 - c = 4 + 9 + \frac{11}{3} = \frac{50}{3} > 0$, so it is a real circle, with $r = \sqrt{\frac{50}{3}} = \frac{5\sqrt{6}}{3}$.`,
        ],
        figure: {
          alt: "The circle 3x² + 3y² + 12x + 18y − 11 = 0 with centre (−2, −3) and a radius of 5√6/3, about 4.08, drawn to the left of the centre.",
          axes: "xy",
          view: { x: [-7.5, 3.5], y: [-8.5, 2.5] },
          elements: [
            { kind: "point", at: [-2, -3], label: "(−2, −3)", labelAt: "s", step: 2 },
            { kind: "circle", centre: [-2, -3], r: 4.0825, step: 3 },
            { kind: "segment", from: [-2, -3], to: [-6.0825, -3], label: "r = 5√6/3", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q10" },
      stem: t`The equation of the circle concentric with $x^2 + y^2 - 4x + 6y = 1$ and having radius $4$ units is:`,
      verify: { kind: "locus", inputs: { D: "-4", E: "6", F: "-1", r: "4" }, params: { kind: "conc" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 - 8x + 12y + 36 = 0$`, correct: false, misconceptionId: "C03-M2", value: "x**2 - 8*x + y**2 + 12*y + 36" },
        { key: "B", text: t`$x^2 + y^2 - 4x + 6y + 9 = 0$`, correct: false, misconceptionId: "C03-M5", value: "x**2 - 4*x + y**2 + 6*y + 9" },
        { key: "C", text: t`$x^2 + y^2 - 4x + 6y - 3 = 0$`, correct: true, value: "x**2 - 4*x + y**2 + 6*y - 3" },
        { key: "D", text: t`$x^2 + y^2 + 4x - 6y - 3 = 0$`, correct: false, misconceptionId: "C03-M1", value: "x**2 + 4*x + y**2 - 6*y - 3" },
      ],
      solution: {
        steps: [
          t`Write the given circle as $x^2 + y^2 - 4x + 6y - 1 = 0$: $g = -2$, $f = 3$, so its centre is $(2, -3)$ (and its radius $\sqrt{4 + 9 + 1} = \sqrt{14}$).`,
          t`Concentric means the same centre. With radius $4$: $(x - 2)^2 + (y + 3)^2 = 16$.`,
          t`Expand: $x^2 - 4x + 4 + y^2 + 6y + 9 = 16$, so $x^2 + y^2 - 4x + 6y - 3 = 0$.`,
        ],
        figure: {
          alt: "The given circle x² + y² − 4x + 6y = 1, dashed, with centre (2, −3) and radius √14, and the answer circle with the same centre and radius 4, slightly larger.",
          axes: "xy",
          view: { x: [-3.5, 7.5], y: [-8, 2] },
          elements: [
            { kind: "circle", centre: [2, -3], r: 3.7417, dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [2, -3], label: "(2, −3)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [2, -3], to: [2, -6.7417], label: "√14", labelAt: "e", tone: "muted", step: 1 },
            { kind: "circle", centre: [2, -3], r: 4, step: 2 },
            { kind: "segment", from: [2, -3], to: [6, -3], label: "r = 4", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q11(i)" },
      stem: t`The length of the intercept (the chord) that the circle $x^2 + y^2 - 8x + y - 20 = 0$ cuts off on the $x$-axis is:`,
      verify: { kind: "value", inputs: { A: "1", D: "-8", E: "1", F: "-20" }, params: { kind: "eq", ask: "xint" } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$4 \sqrt{21}$`, correct: false, misconceptionId: "C03-M2", value: "4*sqrt(21)" },
        { key: "C", text: t`$72$`, correct: false, misconceptionId: "C03-M5", value: "72" },
        { key: "D", text: t`$\sqrt{145}$`, correct: false, misconceptionId: "C03-M6", value: "sqrt(145)" },
      ],
      solution: {
        steps: [
          t`Put $y = 0$: $x^2 - 8x - 20 = 0$, so $(x - 10)(x + 2) = 0$ and $x = 10$ or $x = -2$.`,
          t`The chord runs from $(-2, 0)$ to $(10, 0)$, so its length is $12$. The formula agrees: $2\sqrt{g^2 - c} = 2\sqrt{16 + 20} = 12$.`,
          t`It is not a diameter: the centre $\left(4, -\frac{1}{2}\right)$ is off the $x$-axis, and the diameter is $\sqrt{145}$. The intercept is $12$.`,
        ],
        figure: {
          alt: "The circle x² + y² − 8x + y − 20 = 0 meets the x-axis at (−2, 0) and (10, 0); the chord between them has length 12. The centre (4, −1/2) lies just below the x-axis, so the chord is not a diameter.",
          axes: "xy",
          view: { x: [-7, 16], y: [-7.5, 6.5] },
          elements: [
            { kind: "circle", centre: [4, -0.5], r: 6.0208 },
            { kind: "point", at: [-2, 0], label: "(−2, 0)", labelAt: "nw", step: 1 },
            { kind: "point", at: [10, 0], label: "(10, 0)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [-2, 0], to: [10, 0], label: "12", labelAt: "n", tone: "good", step: 2 },
            { kind: "point", at: [4, -0.5], label: "(4, −1/2)", labelAt: "s", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc I Q7" },
      stem: t`A circle passes through the points $(0, 0)$, $(a, 0)$ and $(0, b)$. Its centre and radius are:`,
      verify: { kind: "value", inputs: { a: "a", b: "b" }, params: { kind: "three" } },
      options: [
        { key: "A", text: t`centre $\left(\frac{a}{2}, \frac{b}{2}\right)$, radius $\frac{1}{2}\sqrt{a^2 + b^2}$`, correct: true, value: "(a/2, b/2, sqrt(a**2/4 + b**2/4))" },
        { key: "B", text: t`centre $\left(-\frac{a}{2}, -\frac{b}{2}\right)$, radius $\frac{1}{2}\sqrt{a^2 + b^2}$`, correct: false, misconceptionId: "C03-M1", value: "(-a/2, -b/2, sqrt(a**2/4 + b**2/4))" },
        { key: "C", text: t`centre $(a, b)$, radius $\sqrt{a^2 + b^2}$`, correct: false, misconceptionId: "C03-M2", value: "(a, b, sqrt(a**2 + b**2))" },
        { key: "D", text: t`centre $\left(\frac{a}{2}, \frac{b}{2}\right)$, radius $\frac{a^2 + b^2}{4}$`, correct: false, misconceptionId: "C03-M5", value: "(a/2, b/2, a**2/4 + b**2/4)" },
      ],
      solution: {
        steps: [
          t`Use $x^2 + y^2 + 2gx + 2fy + c = 0$. Through $(0, 0)$: $c = 0$. Through $(a, 0)$: $a^2 + 2ga = 0$, so $g = -\frac{a}{2}$. Through $(0, b)$: likewise $f = -\frac{b}{2}$.`,
          t`Centre $(-g, -f) = \left(\frac{a}{2}, \frac{b}{2}\right)$.`,
          t`$r = \sqrt{g^2 + f^2 - c} = \sqrt{\frac{a^2}{4} + \frac{b^2}{4}} = \frac{1}{2}\sqrt{a^2 + b^2}$.`,
        ],
        figure: {
          alt: "Drawn for a = 8 and b = 6: the points (0, 0), (a, 0) and (0, b), the circle through them with centre (a/2, b/2), here (4, 3), and a radius r, here 5.",
          axes: "xy",
          view: { x: [-2, 10], y: [-2.5, 9] },
          elements: [
            { kind: "point", at: [0, 0], label: "(0, 0)", labelAt: "ne", step: 1 },
            { kind: "point", at: [8, 0], label: "(a, 0)", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 6], label: "(0, b)", labelAt: "se", step: 1 },
            { kind: "point", at: [4, 3], label: "(a/2, b/2)", labelAt: "e", step: 2 },
            { kind: "circle", centre: [4, 3], r: 5, step: 3 },
            { kind: "segment", from: [4, 3], to: [4, 8], label: "r", labelAt: "e", step: 3 },
          ],
        },
      },
    },
  ],
};
