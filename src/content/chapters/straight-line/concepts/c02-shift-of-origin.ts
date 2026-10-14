import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A point $P$ sits at $(6, 5)$. Keep the directions of the axes, but move the origin to $(2, 1)$. **Does $P$ move? What are its co-ordinates now?**`,
    reveal: t`$P$ stays exactly where it is; only the place you measure from moves. From the new origin, $P$ is $6 - 2 = 4$ across and $5 - 1 = 4$ up, so its new co-ordinates are $(4, 4)$.`,
  },
  explanation: {
    intuition: t`Shifting the origin moves the place you measure from, not the points. Every point stays put; only its co-ordinates change. If the new origin $O'$ is at $(h, k)$, the old distance across, $x$, is the trip to $O'$, which is $h$, plus the trip from $O'$ to the point, which is $X$. So $x = X + h$, and in the same way $y = Y + k$. A curve is the same set of points, so its new equation comes from putting $x = X + h$, $y = Y + k$ into the old one.`,
    formal: t`**Shift of origin.** Move the origin to $O'(h, k)$, keeping the axes parallel to the old ones. A point with old co-ordinates $(x, y)$ and new co-ordinates $(X, Y)$ has
$$x = X + h, \qquad y = Y + k.$$

**New from old:** $X = x - h$, $Y = y - k$: the point minus the new origin.

**Old from new:** $x = X + h$, $y = Y + k$.

**Where the origin went:** from one point whose old and new co-ordinates you know, $h = x - X$ and $k = y - Y$.

**New equation of a locus:** put $x = X + h$, $y = Y + k$ into the old equation and simplify. Expand every square in full: $(X + h)^2 = X^2 + 2hX + h^2$.`,
    worked: {
      prompt: t`Obtain the new equation of the locus $x^2 + y^2 - 6x + 2y + 6 = 0$ when the origin is shifted to $(3, -1)$, the axes remaining parallel to the original axes.`,
      steps: [
        t`$(h, k) = (3, -1)$, so put $x = X + 3$ and $y = Y - 1$.`,
        t`Substitute: $(X + 3)^2 + (Y - 1)^2 - 6(X + 3) + 2(Y - 1) + 6 = 0$.`,
        t`Expand: $X^2 + 6X + 9 + Y^2 - 2Y + 1 - 6X - 18 + 2Y - 2 + 6 = 0$. The $X$ and $Y$ terms cancel, and $9 + 1 - 18 - 2 + 6 = -4$.`,
        t`So $X^2 + Y^2 - 4 = 0$: the same circle, radius $2$, now centred at the new origin.`,
      ],
      answer: t`$X^2 + Y^2 = 4$.`,
      figure: {
        alt: "The circle x² + y² − 6x + 2y + 6 = 0, centre (3, −1) and radius 2. Dashed new axes run through O′(3, −1), the circle's centre, so in the new co-ordinates the circle is X² + Y² = 4.",
        axes: "xy",
        view: { x: [-1, 7], y: [-3.6, 2.4] },
        elements: [
          { kind: "circle", centre: [3, -1], r: 2 },
          { kind: "point", at: [3, -1], step: 1 },
          { kind: "label", at: [3.05, -1.2], label: "O′(3, −1)", labelAt: "se", step: 1 },
          { kind: "line", through: [[3, -1], [4, -1]], dashed: true, tone: "muted", step: 1 },
          { kind: "line", through: [[3, -1], [3, 0]], dashed: true, tone: "muted", step: 1 },
          { kind: "label", at: [6.7, -1], label: "X", labelAt: "n", tone: "muted", step: 1 },
          { kind: "label", at: [3, 2], label: "Y", labelAt: "e", tone: "muted", step: 1 },
          { kind: "label", at: [4.414, 0.414], label: "X² + Y² = 4", labelAt: "ne", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "Old axes, and dashed new axes through O′(2, 1) parallel to them. The point P(6, 5) stays where it is. Measured from O′ it is X = 4 across and Y = 4 up, so its new co-ordinates are (4, 4): x = X + h and y = Y + k.",
      axes: "xy",
      view: { x: [-1, 8], y: [-1, 6.5] },
      elements: [
        { kind: "point", at: [2, 1], label: "O′(2, 1)", labelAt: "nw", step: 1 },
        { kind: "line", through: [[2, 1], [3, 1]], dashed: true, tone: "muted", step: 1 },
        { kind: "line", through: [[2, 1], [2, 2]], dashed: true, tone: "muted", step: 1 },
        { kind: "label", at: [7.6, 1], label: "X", labelAt: "n", tone: "muted", step: 1 },
        { kind: "label", at: [2, 6.1], label: "Y", labelAt: "e", tone: "muted", step: 1 },
        { kind: "point", at: [6, 5], label: "P(6, 5)", labelAt: "ne", step: 2 },
        { kind: "segment", from: [2, 1], to: [6, 1], label: "X = 4", labelAt: "s", tone: "good", step: 3 },
        { kind: "segment", from: [6, 1], to: [6, 5], label: "Y = 4", labelAt: "e", tone: "good", step: 3 },
        { kind: "label", at: [6, 5], label: "new (4, 4)", labelAt: "nw", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag the new origin $O'$ around the plane: a fixed point $P$ shows its old co-ordinates and its new ones, $(x - h, y - k)$, and a fixed curve's new equation updates as $O'$ moves.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Shifting the wrong way: taking the new co-ordinates as $(x + h, y + k)$, or the old ones as $(X - h, Y - k)$`,
      remediation: t`The point stays put; only the origin moves. Old = new + shift: $x = X + h$, $y = Y + k$, so the new co-ordinates are $X = x - h$, $Y = y - k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Measuring from the point to the new origin: $X = h - x$, $Y = k - y$`,
      remediation: t`A co-ordinate is measured from the origin to the point, so the new co-ordinate is the point minus the new origin: $X = x - h$, not $h - x$.`,
      fallback: { kind: "ext", topic: "co-ordinates of a point" },
    },
    {
      id: "C02-M3",
      mistake: t`Pairing $h$ with $y$ and $k$ with $x$`,
      remediation: t`$h$ is the new origin's $x$-co-ordinate, so it goes with $x$, and $k$ goes with $y$: $x = X + h$, $y = Y + k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Expanding $(X + h)^2$ as $X^2 + h^2$ when substituting into an equation`,
      remediation: t`$(X + h)^2 = X^2 + 2hX + h^2$: keep the middle term $2hX$.`,
      fallback: { kind: "ext", topic: "squaring a binomial" },
    },
  ],
  engineNotes: [
    t`C02-M3 gives the key when $h = k$ (the book's Ex 5.1 Q10 uses $(2, 2)$; C02-Q4 moves it to $(2, 3)$). Diagnose it with an origin whose co-ordinates differ.`,
    t`C02-M2 agrees with the key in any new co-ordinate that is $0$, and on a locus symmetric about the new origin: Ex 5.1 Q10(c), $xy - 2x - 2y + 4 = 0$ at $(2, 2)$, gives $xy = 0$ either way.`,
    "C02-M4 applies only to an equation with a square term (C02-Q5, C02-Q6).",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.1 Q7(a)" },
      stem: t`The origin is shifted to $O'(2, 3)$, the axes remaining parallel to the original axes. The new co-ordinates of the point $A(1, 3)$ are:`,
      verify: { kind: "value", inputs: { h: "2", k: "3", a: "1", b: "3" }, params: { ask: "new" } },
      options: [
        { key: "A", text: t`$(-1, 0)$`, correct: true, value: "(-1, 0)" },
        { key: "B", text: t`$(3, 6)$`, correct: false, misconceptionId: "C02-M1", value: "(3, 6)" },
        { key: "C", text: t`$(1, 0)$`, correct: false, misconceptionId: "C02-M2", value: "(1, 0)" },
        { key: "D", text: t`$(-2, 1)$`, correct: false, misconceptionId: "C02-M3", value: "(-2, 1)" },
      ],
      solution: {
        steps: [
          t`$(h, k) = (2, 3)$, so the new co-ordinates are $X = x - 2$, $Y = y - 3$.`,
          t`For $A(1, 3)$: $X = 1 - 2 = -1$ and $Y = 3 - 3 = 0$.`,
          t`The new co-ordinates of $A$ are $(-1, 0)$: $A$ lies on the new $X$-axis, one unit to the left of $O'$.`,
        ],
        figure: {
          alt: "Dashed new axes through O′(2, 3). The point A(1, 3) lies on the new X-axis, one unit to the left of O′, so its new co-ordinates are (−1, 0).",
          axes: "xy",
          view: { x: [-1, 5], y: [-1, 5] },
          elements: [
            { kind: "point", at: [2, 3], label: "O′(2, 3)", labelAt: "ne", step: 1 },
            { kind: "line", through: [[2, 3], [3, 3]], dashed: true, tone: "muted", step: 1 },
            { kind: "line", through: [[2, 3], [2, 4]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [4.7, 3], label: "X", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [2, 4.7], label: "Y", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [1, 3], label: "A(1, 3)", labelAt: "s", step: 1 },
            { kind: "segment", from: [2, 3], to: [1, 3], label: "X = −1", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [1, 2.55], label: "new (−1, 0)", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.1 Q8(a)" },
      stem: t`The origin is shifted to $O'(1, 3)$, the axes remaining parallel to the original axes. A point $C$ has new co-ordinates $(5, 4)$. Its old co-ordinates are:`,
      verify: { kind: "value", inputs: { h: "1", k: "3", a: "5", b: "4" }, params: { ask: "old" } },
      options: [
        { key: "A", text: t`$(4, 1)$`, correct: false, misconceptionId: "C02-M1", value: "(4, 1)" },
        { key: "B", text: t`$(-4, -1)$`, correct: false, misconceptionId: "C02-M2", value: "(-4, -1)" },
        { key: "C", text: t`$(8, 5)$`, correct: false, misconceptionId: "C02-M3", value: "(8, 5)" },
        { key: "D", text: t`$(6, 7)$`, correct: true, value: "(6, 7)" },
      ],
      solution: {
        steps: [
          t`$(h, k) = (1, 3)$, so the old co-ordinates are $x = X + 1$, $y = Y + 3$.`,
          t`For the new co-ordinates $(5, 4)$: $x = 5 + 1 = 6$ and $y = 4 + 3 = 7$.`,
          t`The old co-ordinates of $C$ are $(6, 7)$. Check: $6 - 1 = 5$ and $7 - 3 = 4$.`,
        ],
        figure: {
          alt: "Dashed new axes through O′(1, 3). From O′ the point C is X = 5 across and Y = 4 up, which puts it at (6, 7) on the old axes.",
          axes: "xy",
          view: { x: [-1, 8.5], y: [-1, 8.5] },
          elements: [
            { kind: "point", at: [1, 3], label: "O′(1, 3)", labelAt: "se", step: 1 },
            { kind: "line", through: [[1, 3], [2, 3]], dashed: true, tone: "muted", step: 1 },
            { kind: "line", through: [[1, 3], [1, 4]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [8.1, 3], label: "X", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [1, 8.1], label: "Y", labelAt: "e", tone: "muted", step: 1 },
            { kind: "segment", from: [1, 3], to: [6, 3], label: "X = 5", labelAt: "n", tone: "good", step: 2 },
            { kind: "segment", from: [6, 3], to: [6, 7], label: "Y = 4", labelAt: "e", tone: "good", step: 2 },
            { kind: "point", at: [6, 7], step: 2 },
            { kind: "label", at: [6, 7], label: "C(6, 7)", labelAt: "ne", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.1 Q9" },
      stem: t`By a shift of origin (axes kept parallel), the co-ordinates $(5, 14)$ of a point change to $(8, 3)$. The origin has been shifted to the point:`,
      verify: { kind: "value", inputs: { a: "5", b: "14", A: "8", B: "3" }, params: { ask: "origin" } },
      options: [
        { key: "A", text: t`$(11, -3)$`, correct: false, misconceptionId: "C02-M3", value: "(11, -3)" },
        { key: "B", text: t`$(-3, 11)$`, correct: true, value: "(-3, 11)" },
        { key: "C", text: t`$(3, -11)$`, correct: false, misconceptionId: "C02-M1", value: "(3, -11)" },
        { key: "D", text: t`$(13, 17)$`, correct: false, misconceptionId: "C02-M2", value: "(13, 17)" },
      ],
      solution: {
        steps: [
          t`Old $(x, y) = (5, 14)$ and new $(X, Y) = (8, 3)$ are the same point, so $x = X + h$ and $y = Y + k$.`,
          t`$5 = 8 + h$ gives $h = -3$; $14 = 3 + k$ gives $k = 11$.`,
          t`The origin was shifted to $(-3, 11)$. Check: from $(-3, 11)$ the point is $8$ across and $3$ up.`,
        ],
        figure: {
          alt: "The point P(5, 14) on the old axes. The new origin O′(−3, 11) has dashed new axes through it; from O′ the point P is 8 across and 3 up, matching its new co-ordinates (8, 3).",
          axes: "xy",
          view: { x: [-6.5, 8], y: [-1, 16] },
          elements: [
            { kind: "point", at: [5, 14], label: "P(5, 14)", labelAt: "ne", step: 1 },
            { kind: "point", at: [-3, 11], label: "O′(−3, 11)", labelAt: "nw", tone: "good", step: 2 },
            { kind: "line", through: [[-3, 11], [-2, 11]], dashed: true, tone: "muted", step: 2 },
            { kind: "line", through: [[-3, 11], [-3, 12]], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [7.7, 11], label: "X", labelAt: "n", tone: "muted", step: 2 },
            { kind: "label", at: [-3, 15.6], label: "Y", labelAt: "e", tone: "muted", step: 2 },
            { kind: "segment", from: [-3, 11], to: [5, 11], label: "X = 8", labelAt: "s", tone: "good", step: 3 },
            { kind: "segment", from: [5, 11], to: [5, 14], label: "Y = 3", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.1 Q10(a)" },
      stem: t`The origin is shifted to $O'(2, 3)$, the direction of the axes remaining the same. Writing $x, y$ for the new co-ordinates $X, Y$, the new equation of the line $3x - y + 2 = 0$ is:`,
      verify: { kind: "locus", inputs: { h: "2", k: "3" }, params: { ask: "equation", f: "3*x - y + 2" } },
      options: [
        { key: "A", text: t`$3x - y + 9 = 0$`, correct: false, misconceptionId: "C02-M3", value: "3*x - y + 9" },
        { key: "B", text: t`$3x - y + 5 = 0$`, correct: true, value: "3*x - y + 5" },
        { key: "C", text: t`$3x - y - 1 = 0$`, correct: false, misconceptionId: "C02-M1", value: "3*x - y - 1" },
        { key: "D", text: t`$3x - y - 5 = 0$`, correct: false, misconceptionId: "C02-M2", value: "-3*x + y + 5" },
      ],
      solution: {
        steps: [
          t`$(h, k) = (2, 3)$, so put $x = X + 2$ and $y = Y + 3$.`,
          t`$3(X + 2) - (Y + 3) + 2 = 0$, that is $3X + 6 - Y - 3 + 2 = 0$.`,
          t`So $3X - Y + 5 = 0$; in $x, y$ this is $3x - y + 5 = 0$. The line has not moved; only its equation has changed.`,
        ],
        figure: {
          alt: "The line 3x − y + 2 = 0, through (0, 2) and (1, 5). Dashed new axes run through O′(2, 3). Measured from O′, the same line has the equation 3X − Y + 5 = 0.",
          axes: "xy",
          view: { x: [-4.5, 5], y: [-2.2, 7] },
          elements: [
            { kind: "line", through: [[0, 2], [1, 5]] },
            { kind: "label", at: [-1.1, -0.85], label: "3x − y + 2 = 0", labelAt: "w", tone: "muted" },
            { kind: "point", at: [2, 3], label: "O′(2, 3)", labelAt: "se", step: 1 },
            { kind: "line", through: [[2, 3], [3, 3]], dashed: true, tone: "muted", step: 1 },
            { kind: "line", through: [[2, 3], [2, 4]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [4.7, 3], label: "X", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [2, 6.7], label: "Y", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [-1.4, -1.75], label: "3X − Y + 5 = 0", labelAt: "w", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.1 Q10(b)" },
      stem: t`The origin is shifted to $O'(2, 2)$, the direction of the axes remaining the same. Writing $x, y$ for the new co-ordinates $X, Y$, the new equation of the locus $x^2 + y^2 - 3x = 7$ is:`,
      verify: { kind: "locus", inputs: { h: "2", k: "2" }, params: { ask: "equation", f: "x**2 + y**2 - 3*x - 7" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 - 3x - 5 = 0$`, correct: false, misconceptionId: "C02-M4", value: "x**2 - 3*x + y**2 - 5" },
        { key: "B", text: t`$x^2 + y^2 + x + 4y - 5 = 0$`, correct: true, value: "x**2 + x + y**2 + 4*y - 5" },
        { key: "C", text: t`$x^2 + y^2 - 7x - 4y + 7 = 0$`, correct: false, misconceptionId: "C02-M1", value: "x**2 - 7*x + y**2 - 4*y + 7" },
        { key: "D", text: t`$x^2 + y^2 - x - 4y - 5 = 0$`, correct: false, misconceptionId: "C02-M2", value: "x**2 - x + y**2 - 4*y - 5" },
      ],
      solution: {
        steps: [
          t`$(h, k) = (2, 2)$, so put $x = X + 2$ and $y = Y + 2$.`,
          t`$(X + 2)^2 + (Y + 2)^2 - 3(X + 2) = 7$, that is $X^2 + 4X + 4 + Y^2 + 4Y + 4 - 3X - 6 - 7 = 0$.`,
          t`So $X^2 + Y^2 + X + 4Y - 5 = 0$; in $x, y$ this is $x^2 + y^2 + x + 4y - 5 = 0$.`,
          t`Check: the old centre $\left(\frac{3}{2}, 0\right)$ has new co-ordinates $\left(\frac{3}{2} - 2, 0 - 2\right) = \left(-\frac{1}{2}, -2\right)$, the centre of the new equation.`,
        ],
        figure: {
          alt: "The circle x² + y² − 3x = 7, centre (3/2, 0). Dashed new axes run through O′(2, 2). Measured from O′, the centre is at (−1/2, −2), the centre of the new equation x² + y² + x + 4y − 5 = 0.",
          axes: "xy",
          view: { x: [-2, 5.2], y: [-3.5, 3.9] },
          elements: [
            { kind: "circle", centre: [1.5, 0], r: 3.041 },
            { kind: "point", at: [2, 2], step: 1 },
            { kind: "label", at: [1.95, 1.85], label: "O′(2, 2)", labelAt: "sw", step: 1 },
            { kind: "line", through: [[2, 2], [3, 2]], dashed: true, tone: "muted", step: 1 },
            { kind: "line", through: [[2, 2], [2, 3]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [4.9, 2], label: "X", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [2, 3.6], label: "Y", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [1.5, 0], tone: "good", step: 4 },
            { kind: "label", at: [2.15, -1.2], label: "(−1/2, −2)", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/straight-line-11/Ex 5.1 Q10(d)" },
      stem: t`The origin is shifted to $O'(2, 2)$, the direction of the axes remaining the same. Writing $x, y$ for the new co-ordinates $X, Y$, the new equation of the locus $y^2 - 4x - 4y + 12 = 0$ is:`,
      verify: { kind: "locus", inputs: { h: "2", k: "2" }, params: { ask: "equation", f: "y**2 - 4*x - 4*y + 12" } },
      options: [
        { key: "A", text: t`$y^2 - 4x = 0$`, correct: true, value: "-4*x + y**2" },
        { key: "B", text: t`$y^2 - 4x - 8y + 32 = 0$`, correct: false, misconceptionId: "C02-M1", value: "-4*x + y**2 - 8*y + 32" },
        { key: "C", text: t`$y^2 + 4x = 0$`, correct: false, misconceptionId: "C02-M2", value: "4*x + y**2" },
        { key: "D", text: t`$y^2 - 4x - 4y = 0$`, correct: false, misconceptionId: "C02-M4", value: "-4*x + y**2 - 4*y" },
      ],
      solution: {
        steps: [
          t`$(h, k) = (2, 2)$, so put $x = X + 2$ and $y = Y + 2$.`,
          t`$(Y + 2)^2 - 4(X + 2) - 4(Y + 2) + 12 = 0$, that is $Y^2 + 4Y + 4 - 4X - 8 - 4Y - 8 + 12 = 0$.`,
          t`So $Y^2 - 4X = 0$, that is $Y^2 = 4X$; in $x, y$ this is $y^2 - 4x = 0$. The new origin is the parabola's vertex.`,
        ],
        figure: {
          alt: "The parabola y² − 4x − 4y + 12 = 0, opening to the right with its vertex at (2, 2). Dashed new axes run through O′(2, 2), the vertex, so in the new co-ordinates the parabola is Y² = 4X.",
          axes: "xy",
          view: { x: [-1, 7.5], y: [-3.2, 7.2] },
          elements: [
            { kind: "curve", points: [[2, 2], [2.027, 2.332], [2.055, 2.469], [2.083, 2.574], [2.11, 2.663], [2.138, 2.742], [2.165, 2.812], [2.192, 2.877], [2.22, 2.938], [2.248, 2.995], [2.275, 3.049], [2.303, 3.1], [2.33, 3.149], [2.357, 3.196], [2.385, 3.241], [2.413, 3.285], [2.44, 3.327], [2.468, 3.367], [2.495, 3.407], [2.522, 3.446], [2.55, 3.483], [2.578, 3.52], [2.605, 3.556], [2.632, 3.591], [2.66, 3.625], [2.688, 3.658], [2.715, 3.691], [2.743, 3.723], [2.77, 3.755], [2.797, 3.786], [2.825, 3.817], [2.853, 3.847], [2.88, 3.876], [2.907, 3.905], [2.935, 3.934], [2.962, 3.962], [2.99, 3.99], [3.018, 4.017], [3.045, 4.045], [3.072, 4.071], [3.1, 4.098], [3.127, 4.124], [3.155, 4.149], [3.183, 4.175], [3.21, 4.2], [3.237, 4.225], [3.265, 4.249], [3.292, 4.274], [3.32, 4.298], [3.348, 4.322], [3.375, 4.345], [3.402, 4.369], [3.43, 4.392], [3.458, 4.415], [3.485, 4.437], [3.513, 4.46], [3.54, 4.482], [3.567, 4.504], [3.595, 4.526], [3.623, 4.548], [3.65, 4.569], [3.678, 4.59], [3.705, 4.612], [3.732, 4.632], [3.76, 4.653], [3.788, 4.674], [3.815, 4.694], [3.843, 4.715], [3.87, 4.735], [3.897, 4.755], [3.925, 4.775], [3.952, 4.795], [3.98, 4.814], [4.008, 4.834], [4.035, 4.853], [4.062, 4.872], [4.09, 4.891], [4.117, 4.91], [4.145, 4.929], [4.172, 4.948], [4.2, 4.966], [4.228, 4.985], [4.255, 5.003], [4.283, 5.022], [4.31, 5.04], [4.338, 5.058], [4.365, 5.076], [4.393, 5.094], [4.42, 5.111], [4.447, 5.129], [4.475, 5.146], [4.502, 5.164], [4.53, 5.181], [4.558, 5.198], [4.585, 5.216], [4.612, 5.233], [4.64, 5.25], [4.668, 5.266], [4.695, 5.283], [4.723, 5.3], [4.75, 5.317], [4.777, 5.333], [4.805, 5.35], [4.832, 5.366], [4.86, 5.382], [4.888, 5.399], [4.915, 5.415], [4.942, 5.431], [4.97, 5.447], [4.998, 5.463], [5.025, 5.479], [5.053, 5.494], [5.08, 5.51], [5.107, 5.526], [5.135, 5.541], [5.162, 5.557], [5.19, 5.572], [5.217, 5.587], [5.245, 5.603], [5.272, 5.618], [5.3, 5.633], [5.328, 5.648], [5.355, 5.663], [5.383, 5.678], [5.41, 5.693], [5.438, 5.708], [5.465, 5.723], [5.492, 5.738], [5.52, 5.752], [5.547, 5.767], [5.575, 5.782], [5.603, 5.796], [5.63, 5.811], [5.658, 5.825], [5.685, 5.839], [5.713, 5.854], [5.74, 5.868], [5.768, 5.882], [5.795, 5.896], [5.822, 5.91], [5.85, 5.924], [5.877, 5.938], [5.905, 5.952], [5.933, 5.966], [5.96, 5.98], [5.987, 5.994], [6.015, 6.007], [6.043, 6.021], [6.07, 6.035], [6.098, 6.048], [6.125, 6.062], [6.152, 6.076], [6.18, 6.089], [6.207, 6.102], [6.235, 6.116], [6.263, 6.129], [6.29, 6.142], [6.317, 6.156], [6.345, 6.169], [6.372, 6.182], [6.4, 6.195], [6.428, 6.208], [6.455, 6.221], [6.482, 6.234], [6.51, 6.247], [6.537, 6.26], [6.565, 6.273], [6.593, 6.286], [6.62, 6.299], [6.647, 6.312], [6.675, 6.324], [6.702, 6.337], [6.73, 6.35], [6.758, 6.362], [6.785, 6.375], [6.812, 6.387], [6.84, 6.4], [6.867, 6.412], [6.895, 6.425], [6.923, 6.437], [6.95, 6.45], [6.978, 6.462], [7.005, 6.474], [7.032, 6.487], [7.06, 6.499], [7.088, 6.511], [7.115, 6.523], [7.143, 6.535], [7.17, 6.548], [7.197, 6.56], [7.225, 6.572], [7.253, 6.584], [7.28, 6.596], [7.308, 6.608], [7.335, 6.62], [7.362, 6.631], [7.39, 6.643], [7.418, 6.655], [7.445, 6.667], [7.473, 6.679], [7.5, 6.69]] },
            { kind: "curve", points: [[2, 2], [2.027, 1.668], [2.055, 1.531], [2.083, 1.426], [2.11, 1.337], [2.138, 1.258], [2.165, 1.188], [2.192, 1.123], [2.22, 1.062], [2.248, 1.005], [2.275, 0.951], [2.303, 0.9], [2.33, 0.851], [2.357, 0.804], [2.385, 0.759], [2.413, 0.715], [2.44, 0.673], [2.468, 0.633], [2.495, 0.593], [2.522, 0.554], [2.55, 0.517], [2.578, 0.48], [2.605, 0.444], [2.632, 0.409], [2.66, 0.375], [2.688, 0.342], [2.715, 0.309], [2.743, 0.277], [2.77, 0.245], [2.797, 0.214], [2.825, 0.183], [2.853, 0.153], [2.88, 0.124], [2.907, 0.095], [2.935, 0.066], [2.962, 0.038], [2.99, 0.01], [3.018, -0.017], [3.045, -0.045], [3.072, -0.071], [3.1, -0.098], [3.127, -0.124], [3.155, -0.149], [3.183, -0.175], [3.21, -0.2], [3.237, -0.225], [3.265, -0.249], [3.292, -0.274], [3.32, -0.298], [3.348, -0.322], [3.375, -0.345], [3.402, -0.369], [3.43, -0.392], [3.458, -0.415], [3.485, -0.437], [3.513, -0.46], [3.54, -0.482], [3.567, -0.504], [3.595, -0.526], [3.623, -0.548], [3.65, -0.569], [3.678, -0.59], [3.705, -0.612], [3.732, -0.632], [3.76, -0.653], [3.788, -0.674], [3.815, -0.694], [3.843, -0.715], [3.87, -0.735], [3.897, -0.755], [3.925, -0.775], [3.952, -0.795], [3.98, -0.814], [4.008, -0.834], [4.035, -0.853], [4.062, -0.872], [4.09, -0.891], [4.117, -0.91], [4.145, -0.929], [4.172, -0.948], [4.2, -0.966], [4.228, -0.985], [4.255, -1.003], [4.283, -1.022], [4.31, -1.04], [4.338, -1.058], [4.365, -1.076], [4.393, -1.094], [4.42, -1.111], [4.447, -1.129], [4.475, -1.146], [4.502, -1.164], [4.53, -1.181], [4.558, -1.198], [4.585, -1.216], [4.612, -1.233], [4.64, -1.25], [4.668, -1.266], [4.695, -1.283], [4.723, -1.3], [4.75, -1.317], [4.777, -1.333], [4.805, -1.35], [4.832, -1.366], [4.86, -1.382], [4.888, -1.399], [4.915, -1.415], [4.942, -1.431], [4.97, -1.447], [4.998, -1.463], [5.025, -1.479], [5.053, -1.494], [5.08, -1.51], [5.107, -1.526], [5.135, -1.541], [5.162, -1.557], [5.19, -1.572], [5.217, -1.587], [5.245, -1.603], [5.272, -1.618], [5.3, -1.633], [5.328, -1.648], [5.355, -1.663], [5.383, -1.678], [5.41, -1.693], [5.438, -1.708], [5.465, -1.723], [5.492, -1.738], [5.52, -1.752], [5.547, -1.767], [5.575, -1.782], [5.603, -1.796], [5.63, -1.811], [5.658, -1.825], [5.685, -1.839], [5.713, -1.854], [5.74, -1.868], [5.768, -1.882], [5.795, -1.896], [5.822, -1.91], [5.85, -1.924], [5.877, -1.938], [5.905, -1.952], [5.933, -1.966], [5.96, -1.98], [5.987, -1.994], [6.015, -2.007], [6.043, -2.021], [6.07, -2.035], [6.098, -2.048], [6.125, -2.062], [6.152, -2.076], [6.18, -2.089], [6.207, -2.102], [6.235, -2.116], [6.263, -2.129], [6.29, -2.142], [6.317, -2.156], [6.345, -2.169], [6.372, -2.182], [6.4, -2.195], [6.428, -2.208], [6.455, -2.221], [6.482, -2.234], [6.51, -2.247], [6.537, -2.26], [6.565, -2.273], [6.593, -2.286], [6.62, -2.299], [6.647, -2.312], [6.675, -2.324], [6.702, -2.337], [6.73, -2.35], [6.758, -2.362], [6.785, -2.375], [6.812, -2.387], [6.84, -2.4], [6.867, -2.412], [6.895, -2.425], [6.923, -2.437], [6.95, -2.45], [6.978, -2.462], [7.005, -2.474], [7.032, -2.487], [7.06, -2.499], [7.088, -2.511], [7.115, -2.523], [7.143, -2.535], [7.17, -2.548], [7.197, -2.56], [7.225, -2.572], [7.253, -2.584], [7.28, -2.596], [7.308, -2.608], [7.335, -2.62], [7.362, -2.631], [7.39, -2.643], [7.418, -2.655], [7.445, -2.667], [7.473, -2.679], [7.5, -2.69]] },
            { kind: "point", at: [2, 2], label: "O′(2, 2)", labelAt: "nw", step: 1 },
            { kind: "line", through: [[2, 2], [3, 2]], dashed: true, tone: "muted", step: 1 },
            { kind: "line", through: [[2, 2], [2, 3]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [7.2, 2], label: "X", labelAt: "n", tone: "muted", step: 1 },
            { kind: "label", at: [2, 6.9], label: "Y", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [4.5, 5.2], label: "Y² = 4X", labelAt: "nw", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
