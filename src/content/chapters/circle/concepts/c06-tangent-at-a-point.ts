import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`The point $(3, 4)$ lies on the circle $x^2 + y^2 = 25$. **Can you write the tangent there in one line, without finding any slope?**`,
    reveal: t`Yes. Replace $x^2$ by $3x$ and $y^2$ by $4y$: the tangent is $3x + 4y = 25$. Check: the radius to $(3, 4)$ has slope $\frac{4}{3}$, this line has slope $-\frac{3}{4}$, and their product is $-1$.`,
  },
  explanation: {
    intuition: t`The tangent at a point $P$ of a circle touches it only at $P$, and it is perpendicular to the radius there. You could find the radius's slope and turn it into the perpendicular slope, but there is a shortcut. Write $x^2$ as $x \cdot x$ and $2x$ as $x + x$, then change one copy of $x$ into $x_1$ (and $y$ into $y_1$). The second-degree equation turns into a linear one, and that line is the tangent at $P$.`,
    formal: t`**The tangent at $P(x_1, y_1)$** on $x^2 + y^2 + 2gx + 2fy + c = 0$:
$$xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$$

**The substitution.** Replace $x^2$ by $xx_1$, $y^2$ by $yy_1$, $2x$ by $x + x_1$, $2y$ by $y + y_1$, and keep $c$. So $2gx$ becomes $g(x + x_1)$: $g$ is **half** the coefficient of $x$.

**Centre at the origin.** For $x^2 + y^2 = a^2$ the tangent at $(x_1, y_1)$ is $xx_1 + yy_1 = a^2$. At $P(\theta) = (a\cos\theta, a\sin\theta)$, dividing by $a$ gives $x\cos\theta + y\sin\theta = a$.

**Why it works.** The tangent is the line through $P$ perpendicular to the radius from $C(-g, -f)$: $(x_1 + g)(x - x_1) + (y_1 + f)(y - y_1) = 0$. Expand it and use the fact that $P$ is on the circle; the formula above comes out.

**Does a line touch at $P$?** Check that $P$ is on the circle, write the tangent at $P$, and see whether the given line is the same equation (or a multiple of it).`,
    worked: {
      prompt: t`Find the equation of the tangent to the circle $x^2 + y^2 - 2x - 4y - 5 = 0$ at the point $(2, 5)$.`,
      steps: [
        t`Read off $2g = -2$, $2f = -4$, $c = -5$, so $g = -1$, $f = -2$: the centre is $(1, 2)$.`,
        t`The point is on the circle: $4 + 25 - 4 - 20 - 5 = 0$. Substitute $(x_1, y_1) = (2, 5)$ in $xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$: $2x + 5y - (x + 2) - 2(y + 5) - 5 = 0$.`,
        t`Collect terms: $x + 3y - 17 = 0$.`,
        t`Check: the radius from $(1, 2)$ to $(2, 5)$ has slope $3$. The tangent has slope $-\frac{1}{3}$, and $3 \times \left(-\frac{1}{3}\right) = -1$.`,
      ],
      answer: t`The tangent is $x + 3y - 17 = 0$.`,
      figure: {
        alt: "The circle x² + y² − 2x − 4y − 5 = 0 with centre C(1, 2). The point P(2, 5) is on it; the tangent x + 3y − 17 = 0 passes through P at right angles to the radius CP.",
        axes: "xy",
        view: { x: [-3.5, 9], y: [-2, 8] },
        elements: [
          { kind: "circle", centre: [1, 2], r: 3.1623, tone: "muted", step: 1 },
          { kind: "point", at: [2, 5], label: "P(2, 5)", labelAt: "ne", step: 2 },
          { kind: "line", through: [[2, 5], [5, 4]], tone: "good", step: 3 },
          { kind: "label", at: [5.2, 4.3], label: "x + 3y − 17 = 0", labelAt: "ne", tone: "good", step: 3 },
          { kind: "point", at: [1, 2], label: "C(1, 2)", labelAt: "se", tone: "muted", step: 1 },
          { kind: "segment", from: [1, 2], to: [2, 5], tone: "muted", step: 4 },
          { kind: "angle", at: [2, 5], from: 251.57, to: 341.57, step: 4 },
        ],
      },
    },
    figure: {
      alt: "The circle x² + y² = 25 with centre O. The point P(3, 4) is on it, the radius OP is drawn, and the tangent 3x + 4y = 25 passes through P at right angles to OP.",
      axes: "xy",
      view: { x: [-6.5, 10], y: [-6, 7.5] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 5, tone: "muted", step: 1 },
        { kind: "point", at: [0, 0], label: "O", labelAt: "nw", tone: "muted", step: 1 },
        { kind: "point", at: [3, 4], label: "P(3, 4)", labelAt: "ne", step: 2 },
        { kind: "segment", from: [0, 0], to: [3, 4], tone: "muted", step: 3 },
        { kind: "line", through: [[3, 4], [7, 1]], tone: "good", step: 4 },
        { kind: "angle", at: [3, 4], from: 233.13, to: 323.13, step: 4 },
        { kind: "label", at: [5.8, 2.5], label: "3x + 4y = 25", labelAt: "ne", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag the point $P$ round the circle; the tangent from the $xx_1$ rule follows it, always at right angles to the radius $CP$, and its equation updates as $P$ moves.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Replacing only $x^2$ and $y^2$, and leaving $2gx + 2fy$ as they are: $xx_1 + yy_1 + 2gx + 2fy + c = 0$`,
      remediation: t`Every term with $x$ or $y$ changes, not just the squares: $2gx$ becomes $g(x + x_1)$ and $2fy$ becomes $f(y + y_1)$. Only $c$ stays as it is.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Replacing $2gx$ by $2g(x + x_1)$: taking $g$ as the whole coefficient of $x$ instead of half of it`,
      remediation: t`$g$ is half the coefficient of $x$ (and $f$ half that of $y$). The $2$ in $2gx$ is shared out as $x + x_1$, so $2gx$ becomes $g(x + x_1)$, not $2g(x + x_1)$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M3",
      mistake: "Giving the line through the centre and the point (the radius, or normal) instead of the tangent",
      remediation: t`The tangent at $P$ is perpendicular to the radius $CP$, not along it. Check any answer: its slope times the radius's slope must be $-1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Taking the centre of $x^2 + y^2 + 2gx + 2fy + c = 0$ as $(g, f)$, then drawing the line perpendicular to that wrong radius`,
      remediation: t`The centre is $(-g, -f)$: the signs flip. Or skip the centre altogether: the $xx_1$ rule gives the tangent straight from the equation.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M5",
      mistake: "Taking the tangent's slope as minus the radius's slope, instead of minus its reciprocal",
      remediation: t`Perpendicular slopes multiply to $-1$: if the radius has slope $m$, the tangent has slope $-\frac{1}{m}$, not $-m$.`,
      fallback: { kind: "ext", topic: "slopes of perpendicular lines" },
    },
    {
      id: "C06-M6",
      mistake: t`For $x^2 + y^2 = a^2$, writing the tangent as $xx_1 + yy_1 = a$ instead of $a^2$`,
      remediation: t`The right side keeps the circle's own number: $x^2 + y^2 = a^2$ gives $xx_1 + yy_1 = a^2$. Only after putting $x_1 = a\cos\theta$, $y_1 = a\sin\theta$ and dividing by $a$ do you get $x\cos\theta + y\sin\theta = a$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C06-M1, C06-M2 and C06-M4 give the key on circles centred at the origin ($g = f = 0$). C06-M1 and C06-M4 also give the key (or, for C06-M1, no line at all) whenever the point lies on the line through the origin and the centre ($gy_1 = fx_1$), e.g. at the origin itself or at the far end of the diameter through it (Ex 6.3 Q3, Misc II Q16); C06-M2 gives the key at the origin too. Draw diagnosing items from other points.`,
    "C06-M5 does not apply when the radius to the point is horizontal or vertical (its model raises there).",
    "C06-M6 applies only to circles centred at the origin.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.3 Q5" },
      stem: t`The equation of the tangent to the circle $x^2 + y^2 - 4x + 3y + 2 = 0$ at the point $(4, -2)$ is:`,
      verify: { kind: "locus", inputs: { g: "-2", f: "3/2", c: "2", x1: "4", y1: "-2" } },
      options: [
        { key: "A", text: t`$y = -2$`, correct: false, misconceptionId: "C06-M1", value: "y + 2" },
        { key: "B", text: t`$x + 4y + 4 = 0$`, correct: false, misconceptionId: "C06-M3", value: "x + 4*y + 4" },
        { key: "C", text: t`$x - 4y - 12 = 0$`, correct: false, misconceptionId: "C06-M5", value: "x - 4*y - 12" },
        { key: "D", text: t`$4x - y - 18 = 0$`, correct: true, value: "4*x - y - 18" },
      ],
      solution: {
        steps: [
          t`Here $2g = -4$, $2f = 3$, $c = 2$, so $g = -2$ and $f = \frac{3}{2}$. With $(x_1, y_1) = (4, -2)$: $4x - 2y - 2(x + 4) + \frac{3}{2}(y - 2) + 2 = 0$.`,
          t`Collect terms: $2x - \frac{1}{2}y - 9 = 0$. Multiply by $2$: $4x - y - 18 = 0$.`,
          t`Check: the centre is $\left(2, -\frac{3}{2}\right)$, so the radius to $(4, -2)$ has slope $-\frac{1}{4}$. The tangent has slope $4$, and the product is $-1$.`,
        ],
        figure: {
          alt: "The circle x² + y² − 4x + 3y + 2 = 0 with centre C(2, −1.5). The point P(4, −2) is on it; the tangent 4x − y − 18 = 0 passes through P at right angles to the radius CP.",
          axes: "xy",
          view: { x: [-1.5, 8.5], y: [-5, 3] },
          elements: [
            { kind: "circle", centre: [2, -1.5], r: 2.0616, tone: "muted" },
            { kind: "point", at: [4, -2], label: "P(4, −2)", labelAt: "se", step: 1 },
            { kind: "line", through: [[4, -2], [5, 2]], tone: "good", step: 2 },
            { kind: "label", at: [5.3, 1.6], label: "4x − y − 18 = 0", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [2, -1.5], label: "C(2, −1.5)", labelAt: "n", tone: "muted", step: 3 },
            { kind: "segment", from: [2, -1.5], to: [4, -2], tone: "muted", step: 3 },
            { kind: "angle", at: [4, -2], from: 75.96, to: 165.96, step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Ex 6.3 Q4" },
      stem: t`The point $(1, 2)$ lies on the circle $x^2 + y^2 + 5x - 7y + 4 = 0$. The tangent to the circle at $(1, 2)$ is:`,
      verify: { kind: "locus", inputs: { g: "5/2", f: "-7/2", c: "4", x1: "1", y1: "2" } },
      options: [
        { key: "A", text: t`$7x - 3y - 1 = 0$`, correct: true, value: "7*x - 3*y - 1" },
        { key: "B", text: t`$6x - 5y - 5 = 0$`, correct: false, misconceptionId: "C06-M2", value: "6*x - 5*y - 5" },
        { key: "C", text: t`$3x - 11y + 19 = 0$`, correct: false, misconceptionId: "C06-M4", value: "3*x - 11*y + 19" },
        { key: "D", text: t`$3x - 7y + 11 = 0$`, correct: false, misconceptionId: "C06-M5", value: "3*x - 7*y + 11" },
      ],
      solution: {
        steps: [
          t`Here $2g = 5$, $2f = -7$, $c = 4$, so $g = \frac{5}{2}$ and $f = -\frac{7}{2}$. The point is on the circle: $1 + 4 + 5 - 14 + 4 = 0$.`,
          t`With $(x_1, y_1) = (1, 2)$: $x + 2y + \frac{5}{2}(x + 1) - \frac{7}{2}(y + 2) + 4 = 0$. Multiply by $2$: $2x + 4y + 5x + 5 - 7y - 14 + 8 = 0$.`,
          t`So the tangent is $7x - 3y - 1 = 0$. Check: the radius from the centre $\left(-\frac{5}{2}, \frac{7}{2}\right)$ to $(1, 2)$ has slope $-\frac{3}{7}$, and the tangent's slope is $\frac{7}{3}$.`,
        ],
        figure: {
          alt: "The circle x² + y² + 5x − 7y + 4 = 0 with centre C(−2.5, 3.5). The point P(1, 2) is on it; the tangent 7x − 3y − 1 = 0 passes through P at right angles to the radius CP.",
          axes: "xy",
          view: { x: [-7.5, 8], y: [-2, 8.5] },
          elements: [
            { kind: "circle", centre: [-2.5, 3.5], r: 3.8079, tone: "muted" },
            { kind: "point", at: [1, 2], label: "P(1, 2)", labelAt: "se", step: 1 },
            { kind: "line", through: [[1, 2], [4, 9]], tone: "good", step: 3 },
            { kind: "label", at: [2.4, 0.6], label: "7x − 3y − 1 = 0", labelAt: "e", tone: "good", step: 3 },
            { kind: "point", at: [-2.5, 3.5], label: "C(−2.5, 3.5)", labelAt: "n", tone: "muted", step: 3 },
            { kind: "segment", from: [-2.5, 3.5], to: [1, 2], tone: "muted", step: 3 },
            { kind: "angle", at: [1, 2], from: 66.8, to: 156.8, step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q7" },
      stem: t`The tangent to the circle $x^2 + y^2 - 2y = 0$ at the point $(-1, 1)$ is:`,
      verify: { kind: "locus", inputs: { g: "0", f: "-1", c: "0", x1: "-1", y1: "1" } },
      options: [
        { key: "A", text: t`$x = -1$`, correct: true, value: "x + 1" },
        { key: "B", text: t`$x + y = 0$`, correct: false, misconceptionId: "C06-M1", value: "x + y" },
        { key: "C", text: t`$y = 1$`, correct: false, misconceptionId: "C06-M3", value: "y - 1" },
        { key: "D", text: t`$x - 2y + 3 = 0$`, correct: false, misconceptionId: "C06-M4", value: "x - 2*y + 3" },
      ],
      solution: {
        steps: [
          t`Here $2g = 0$, $2f = -2$, $c = 0$, so $g = 0$ and $f = -1$. With $(x_1, y_1) = (-1, 1)$: $x(-1) + y(1) - 1(y + 1) = 0$.`,
          t`Collect terms: $-x + y - y - 1 = 0$, so $-x - 1 = 0$. The tangent is $x = -1$.`,
          t`Check: the centre is $(0, 1)$, so the radius to $(-1, 1)$ is horizontal, and the tangent at its end is the vertical line $x = -1$.`,
        ],
        figure: {
          alt: "The circle x² + y² − 2y = 0 with centre C(0, 1) and radius 1. The point P(−1, 1) is on it; the tangent x = −1 is vertical, at right angles to the horizontal radius CP.",
          axes: "xy",
          view: { x: [-3.5, 2.5], y: [-1.5, 3.5] },
          elements: [
            { kind: "circle", centre: [0, 1], r: 1, tone: "muted" },
            { kind: "point", at: [-1, 1], label: "P(−1, 1)", labelAt: "w", step: 1 },
            { kind: "line", through: [[-1, 1], [-1, 2]], tone: "good", step: 2 },
            { kind: "label", at: [-1, 2.6], label: "x = −1", labelAt: "w", tone: "good", step: 2 },
            { kind: "point", at: [0, 1], label: "C(0, 1)", labelAt: "ne", tone: "muted", step: 3 },
            { kind: "segment", from: [-1, 1], to: [0, 1], tone: "muted", step: 3 },
            { kind: "angle", at: [-1, 1], from: 0, to: 90, step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q17" },
      stem: t`The tangent to the circle $x^2 + y^2 = 5$ at the point $(1, -2)$ on it is:`,
      verify: { kind: "locus", inputs: { g: "0", f: "0", c: "-5", x1: "1", y1: "-2" } },
      options: [
        { key: "A", text: t`$x - 2y - \sqrt{5} = 0$`, correct: false, misconceptionId: "C06-M6", value: "x - 2*y - sqrt(5)" },
        { key: "B", text: t`$x - 2y - 5 = 0$`, correct: true, value: "x - 2*y - 5" },
        { key: "C", text: t`$2x + y = 0$`, correct: false, misconceptionId: "C06-M3", value: "2*x + y" },
        { key: "D", text: t`$2x - y - 4 = 0$`, correct: false, misconceptionId: "C06-M5", value: "2*x - y - 4" },
      ],
      solution: {
        steps: [
          t`For $x^2 + y^2 = a^2$ the rule gives $xx_1 + yy_1 = a^2$. Here $a^2 = 5$ and $(x_1, y_1) = (1, -2)$.`,
          t`So $x(1) + y(-2) = 5$, that is, $x - 2y - 5 = 0$. The right side stays $a^2 = 5$, not $a = \sqrt{5}$.`,
          t`Check: the radius from $O$ to $(1, -2)$ has slope $-2$, the tangent has slope $\frac{1}{2}$, and the product is $-1$.`,
        ],
        figure: {
          alt: "The circle x² + y² = 5 with centre O. The point P(1, −2) is on it; the tangent x − 2y − 5 = 0 passes through P at right angles to the radius OP.",
          axes: "xy",
          view: { x: [-3.5, 7], y: [-4.5, 3] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.2361, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "nw", tone: "muted" },
            { kind: "point", at: [1, -2], label: "P(1, −2)", labelAt: "se", step: 1 },
            { kind: "line", through: [[1, -2], [5, 0]], tone: "good", step: 2 },
            { kind: "label", at: [3, -1], label: "x − 2y − 5 = 0", labelAt: "se", tone: "good", step: 2 },
            { kind: "segment", from: [0, 0], to: [1, -2], tone: "muted", step: 3 },
            { kind: "angle", at: [1, -2], from: 26.57, to: 116.57, step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/Misc II Q18" },
      stem: t`The tangent to the circle $x = 5\cos\theta$, $y = 5\sin\theta$ at the point $\theta = \frac{\pi}{3}$ is:`,
      verify: { kind: "locus", inputs: { g: "0", f: "0", c: "-25", theta: "pi/3" } },
      options: [
        { key: "A", text: t`$x + \sqrt{3} y - 10 = 0$`, correct: true, value: "x + sqrt(3)*y - 10" },
        { key: "B", text: t`$\sqrt{3} x - y = 0$`, correct: false, misconceptionId: "C06-M3", value: "sqrt(3)*x - y" },
        { key: "C", text: t`$\sqrt{3} x + y - 5 \sqrt{3} = 0$`, correct: false, misconceptionId: "C06-M5", value: "sqrt(3)*x + y - 5*sqrt(3)" },
        { key: "D", text: t`$x + \sqrt{3} y - 2 = 0$`, correct: false, misconceptionId: "C06-M6", value: "x + sqrt(3)*y - 2" },
      ],
      solution: {
        steps: [
          t`The circle is $x^2 + y^2 = 25$, and $\theta = \frac{\pi}{3}$ gives the point $\left(5\cos\frac{\pi}{3}, 5\sin\frac{\pi}{3}\right) = \left(\frac{5}{2}, \frac{5\sqrt{3}}{2}\right)$.`,
          t`$xx_1 + yy_1 = 25$ gives $\frac{5}{2}x + \frac{5\sqrt{3}}{2}y = 25$. Divide by $\frac{5}{2}$: $x + \sqrt{3}\,y = 10$. This is $x\cos\theta + y\sin\theta = 5$.`,
          t`So the tangent is $x + \sqrt{3}\,y - 10 = 0$. Its slope $-\frac{1}{\sqrt{3}}$ times the radius's slope $\tan\frac{\pi}{3} = \sqrt{3}$ is $-1$.`,
        ],
        figure: {
          alt: "The circle x = 5 cos θ, y = 5 sin θ, that is x² + y² = 25, with centre O. The radius at θ = π/3 reaches P(5/2, 5√3/2); the tangent x + √3y − 10 = 0 passes through P at right angles to it.",
          axes: "xy",
          view: { x: [-6.5, 11], y: [-6, 8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 5, tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "nw", tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.5, 4.3301], tone: "muted", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 60, step: 1 },
            { kind: "label", at: [1.2, 0.5], label: "π/3", labelAt: "ne", step: 1 },
            { kind: "point", at: [2.5, 4.3301], label: "P(5/2, 5√3/2)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[2.5, 4.3301], [10, 0]], tone: "good", step: 2 },
            { kind: "label", at: [6.2, 3.1], label: "x + √3y − 10 = 0", labelAt: "ne", tone: "good", step: 2 },
            { kind: "angle", at: [2.5, 4.3301], from: 240, to: 330, step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/circle-11/6.3.4 SolvedEx.3" },
      stem: t`The tangent to the circle $x^2 + y^2 - 4x - 6y - 12 = 0$ at the point $(-1, -1)$ is:`,
      verify: { kind: "locus", inputs: { g: "-2", f: "-3", c: "-12", x1: "-1", y1: "-1" } },
      options: [
        { key: "A", text: t`$5x + 7y + 2 = 0$`, correct: false, misconceptionId: "C06-M2", value: "5*x + 7*y + 2" },
        { key: "B", text: t`$x + 2y + 3 = 0$`, correct: false, misconceptionId: "C06-M4", value: "x + 2*y + 3" },
        { key: "C", text: t`$3x + 4y + 7 = 0$`, correct: true, value: "3*x + 4*y + 7" },
        { key: "D", text: t`$5x + 7y + 12 = 0$`, correct: false, misconceptionId: "C06-M1", value: "5*x + 7*y + 12" },
      ],
      solution: {
        steps: [
          t`Here $2g = -4$, $2f = -6$, $c = -12$, so $g = -2$ and $f = -3$. With $(x_1, y_1) = (-1, -1)$, $2gx$ becomes $-2(x - 1)$ and $2fy$ becomes $-3(y - 1)$.`,
          t`$-x - y - 2(x - 1) - 3(y - 1) - 12 = 0$, so $-3x - 4y - 7 = 0$.`,
          t`The tangent is $3x + 4y + 7 = 0$. Check: the centre is $(2, 3)$, so the radius to $(-1, -1)$ has slope $\frac{4}{3}$; the tangent's slope is $-\frac{3}{4}$.`,
        ],
        figure: {
          alt: "The circle x² + y² − 4x − 6y − 12 = 0 with centre C(2, 3) and radius 5. The point P(−1, −1) is on it; the tangent 3x + 4y + 7 = 0 passes through P at right angles to the radius CP.",
          axes: "xy",
          view: { x: [-6, 8.5], y: [-5.5, 9] },
          elements: [
            { kind: "circle", centre: [2, 3], r: 5, tone: "muted" },
            { kind: "point", at: [-1, -1], label: "P(−1, −1)", labelAt: "sw", step: 1 },
            { kind: "line", through: [[-1, -1], [3, -4]], tone: "good", step: 2 },
            { kind: "label", at: [2, -3.25], label: "3x + 4y + 7 = 0", labelAt: "ne", tone: "good", step: 2 },
            { kind: "point", at: [2, 3], label: "C(2, 3)", labelAt: "e", tone: "muted", step: 3 },
            { kind: "segment", from: [2, 3], to: [-1, -1], tone: "muted", step: 3 },
            { kind: "angle", at: [-1, -1], from: 53.13, to: 143.13, step: 3 },
          ],
        },
      },
    },
  ],
};
