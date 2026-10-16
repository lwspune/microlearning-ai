import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** `{ step }`, or nothing for an element shown from the start. */
const stepOf = (step?: number) => (step === undefined ? {} : { step });

/** Both branches of x²/a² − y²/b² = 1, opening left and right. */
const hyperbolaX = (a: number, b: number, step?: number): FigureElement[] => [
  { kind: "hyperbola", centre: [0, 0], a, b, axis: "x", branch: 1, ...stepOf(step) },
  { kind: "hyperbola", centre: [0, 0], a, b, axis: "x", branch: -1, ...stepOf(step) },
];

/** The dashed rectangle −a ≤ x ≤ a, −b ≤ y ≤ b, whose diagonals are the asymptotes. */
const rectangle = (a: number, b: number, step?: number): FigureElement[] => [
  { kind: "segment", from: [a, b], to: [-a, b], dashed: true, tone: "muted", ...stepOf(step) },
  { kind: "segment", from: [-a, b], to: [-a, -b], dashed: true, tone: "muted", ...stepOf(step) },
  { kind: "segment", from: [-a, -b], to: [a, -b], dashed: true, tone: "muted", ...stepOf(step) },
  { kind: "segment", from: [a, -b], to: [a, b], dashed: true, tone: "muted", ...stepOf(step) },
];

/** The asymptotes y = ±(b/a)x, dashed. */
const asymptotes = (a: number, b: number, step?: number): FigureElement[] => [
  { kind: "line", through: [[0, 0], [1, +(b / a).toFixed(3)]], dashed: true, tone: "good", ...stepOf(step) },
  { kind: "line", through: [[0, 0], [1, -+(b / a).toFixed(3)]], dashed: true, tone: "good", ...stepOf(step) },
];

/**
 * The idea and formal slides draw x²/a² − y²/b² = 1 as x²/9 − y²/4 = 1 (a = 3, b = 2). From P(0, √5), on its
 * director circle x² + y² = 5, the tangents y = ∓x + √5 touch at (±4.025, −1.789) and meet at a right angle.
 */
const P: [number, number] = [0, 2.236];
const tangentRight: FigureElement[] = [
  { kind: "segment", from: P, to: [5.232, -2.996] },
  { kind: "point", at: [4.025, -1.789] },
];
const tangentLeft: FigureElement[] = [
  { kind: "segment", from: P, to: [-5.232, -2.996] },
  { kind: "point", at: [-4.025, -1.789] },
];
const withStep = (els: FigureElement[], step: number): FigureElement[] => els.map((e) => ({ ...e, step }));

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`On the hyperbola $\frac{x^2}{4} - y^2 = 1$, take the point in the first quadrant with $x = 200$. **How far is its $y$ from $100$?**`,
    reveal: t`$y = \sqrt{\frac{200^2}{4} - 1} = \sqrt{9999} \approx 99.995$, only about $0.005$ below $100 = \frac{200}{2}$. Farther out the gap shrinks towards $0$ but never closes: the branch hugs the line $y = \frac{x}{2}$, an **asymptote** of the hyperbola.`,
  },
  explanation: {
    intuition: [
      t`Take the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, drawn here with $a = 3$ and $b = 2$.`,
      t`Far from the centre, $x^2$ and $y^2$ are huge and the $1$ hardly matters: the curve almost satisfies $\frac{x^2}{a^2} = \frac{y^2}{b^2}$.`,
      t`That is the pair of lines $y = \pm\frac{b}{a}x$, the **asymptotes**: the branches come ever closer to them, never touching.`,
      t`The asymptotes are the diagonals of the rectangle with sides $2a$ and $2b$ around the centre.`,
      t`Every tangent is steeper than the asymptotes, so two tangents can meet at right angles only when $\frac{b}{a} < 1$.`,
      t`They then meet on the **director circle** $x^2 + y^2 = a^2 - b^2$, the path of all such meeting points.`,
    ],
    formal: [
      {
        title: "Finding the asymptotes",
        points: [
          t`Replace the $1$ by $0$: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$.`,
          t`The left side factorises, so $\frac{x}{a} - \frac{y}{b} = 0$ or $\frac{x}{a} + \frac{y}{b} = 0$: two straight lines.`,
          t`So the asymptotes are $y = \pm\frac{b}{a}x$.`,
          t`Both lines pass through the centre $O$.`,
          t`They are the diagonals of the rectangle $-a \le x \le a$, $-b \le y \le b$.`,
        ],
        figure: {
          alt: "The hyperbola x²/a² − y²/b² = 1, drawn with a = 3 and b = 2. Its asymptotes y = ±bx/a are two dashed lines crossing at the centre O; they are the diagonals of the dashed rectangle with corner (a, b).",
          axes: "xy",
          view: { x: [-8, 8], y: [-6, 6] },
          elements: [
            ...hyperbolaX(3, 2),
            { kind: "label", at: [-7.7, -5.5], label: "x²/a² − y²/b² = 1", labelAt: "e" },
            ...asymptotes(3, 2, 2),
            { kind: "label", at: [7.7, 5.5], label: "y = ±bx/a", labelAt: "w", tone: "good", step: 3 },
            { kind: "point", at: [0, 0], label: "O", labelAt: "se", tone: "good", step: 4 },
            ...rectangle(3, 2, 5),
            { kind: "point", at: [3, 2], label: "(a, b)", labelAt: "nw", tone: "muted", step: 5 },
          ],
        },
      },
      {
        title: "Asymptotes of the conjugate hyperbola",
        points: [
          t`Recall: the **conjugate hyperbola** of $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ is $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$, opening up and down.`,
          t`Replace its $1$ by $0$: $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 0$, the same two lines as before.`,
          t`So it has the same asymptotes, $y = \pm\frac{b}{a}x$, the diagonals of the same rectangle.`,
          t`The root of the $y^2$ denominator always goes on top, whichever term is positive.`,
        ],
        figure: {
          alt: "The hyperbola x²/a² − y²/b² = 1, drawn with a = 3 and b = 2, opening left and right, and the dashed rectangle with corners (±a, ±b). Its conjugate y²/b² − x²/a² = 1 opens up and down. Both hug the same dashed asymptotes y = ±bx/a, the rectangle's diagonals. The slope is b, up the y-axis, over a, along the x-axis.",
          axes: "xy",
          view: { x: [-9, 9], y: [-6.5, 6.5] },
          elements: [
            ...hyperbolaX(3, 2),
            { kind: "label", at: [-0.3, -5.6], label: "x²/a² − y²/b² = 1", labelAt: "w" },
            ...rectangle(3, 2),
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 3, axis: "y", branch: 1, tone: "accent", step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 3, axis: "y", branch: -1, tone: "accent", step: 1 },
            { kind: "label", at: [0.3, 5.8], label: "y²/b² − x²/a² = 1", labelAt: "e", step: 1 },
            ...asymptotes(3, 2, 2),
            { kind: "label", at: [0.3, -5.6], label: "y = ±bx/a", labelAt: "e", tone: "good", step: 3 },
            { kind: "segment", from: [0, 0], to: [0, 2], tone: "good", step: 4 },
            { kind: "label", at: [0, 1], label: "b", labelAt: "w", tone: "good", step: 4 },
            { kind: "segment", from: [0, 0], to: [3, 0], tone: "good", step: 4 },
            { kind: "label", at: [1.5, 0], label: "a", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Tangents from a point P",
        points: [
          t`Recall: $y = mx + c$ touches the hyperbola exactly when $c^2 = a^2m^2 - b^2$.`,
          t`Let the tangent pass through a point $P(h, k)$: then $k = mh + c$, so $c = k - mh$.`,
          t`Put this $c$ into the condition: $(k - mh)^2 = a^2m^2 - b^2$.`,
          t`Expand and collect the powers of $m$: $(h^2 - a^2)m^2 - 2hkm$ $+\, k^2 + b^2 = 0$.`,
          t`This quadratic in $m$ has two roots, $m_1$ and $m_2$: the slopes of the two tangents from $P$.`,
        ],
        figure: {
          alt: "The hyperbola x²/a² − y²/b² = 1, drawn with a = 3 and b = 2. A tangent, c² = a²m² − b², touches the right branch and passes through the point P(h, k) above the centre. A second tangent from P touches the left branch: their slopes are m₁ and m₂.",
          axes: "xy",
          view: { x: [-8, 8], y: [-6, 6] },
          elements: [
            ...hyperbolaX(3, 2),
            { kind: "label", at: [-7.7, -5.5], label: "x²/a² − y²/b² = 1", labelAt: "e" },
            ...withStep(tangentRight, 1),
            { kind: "label", at: [7.7, -5.5], label: "c² = a²m² − b²", labelAt: "w", tone: "good", step: 1 },
            { kind: "point", at: P, label: "P(h, k)", labelAt: "ne", step: 2 },
            ...withStep(tangentLeft, 5),
            { kind: "label", at: [1.6, 0.9], label: "m₁", labelAt: "ne", tone: "good", step: 5 },
            { kind: "label", at: [-1.6, 0.9], label: "m₂", labelAt: "nw", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Perpendicular tangents meet on a circle",
        points: [
          t`Two lines are at right angles when their slopes multiply to $-1$: $m_1m_2 = -1$.`,
          t`The product of the roots of the quadratic is $m_1m_2 = \frac{k^2 + b^2}{h^2 - a^2}$.`,
          t`Set it equal to $-1$: $k^2 + b^2 = a^2 - h^2$.`,
          t`So $h^2 + k^2 = a^2 - b^2$: $P$ lies on the circle $x^2 + y^2 = a^2 - b^2$.`,
          t`This is the **director circle**: from each of its points, the two tangents meet at right angles.`,
        ],
        figure: {
          alt: "The hyperbola x²/a² − y²/b² = 1, drawn with a = 3 and b = 2. The two tangents from P(h, k) meet at a right angle. P lies on the dashed circle x² + y² = a² − b² about the centre: the director circle.",
          axes: "xy",
          view: { x: [-8, 8], y: [-6, 6] },
          elements: [
            ...hyperbolaX(3, 2),
            { kind: "label", at: [-7.7, -5.5], label: "x²/a² − y²/b² = 1", labelAt: "e" },
            ...tangentRight,
            ...tangentLeft,
            { kind: "point", at: P, label: "P(h, k)", labelAt: "ne" },
            { kind: "angle", at: P, from: 225, to: 315, tone: "good", step: 1 },
            { kind: "circle", centre: [0, 0], r: 2.236, dashed: true, tone: "good", step: 4 },
            { kind: "label", at: [-0.5, 4.6], label: "x² + y² = a² − b²", labelAt: "w", tone: "good", step: 4 },
            { kind: "label", at: [0, -2.236], label: "director circle", labelAt: "s", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "When the director circle exists",
        points: [
          t`The circle $x^2 + y^2 = a^2 - b^2$ is real only when $a^2 - b^2 > 0$, that is, when $a > b$.`,
          t`If $b \ge a$, the asymptotes have slopes $\pm\frac{b}{a}$, at least as steep as slope $1$.`,
          t`Every tangent is steeper still: $|m| > \frac{b}{a} \ge 1$.`,
          t`Two such slopes multiply to more than $1$ in size, never to $-1$: no two tangents are perpendicular.`,
        ],
        figure: {
          alt: "The hyperbola x²/a² − y²/b² = 1, drawn with a = 2 and b = 3, so b > a and there is no director circle. Its dashed asymptotes y = ±bx/a are steeper than the muted lines of slope ±1. Two tangents, steeper still, touch the two branches and meet below the centre at an angle well short of 90°.",
          axes: "xy",
          view: { x: [-8, 8], y: [-6, 6] },
          elements: [
            ...hyperbolaX(2, 3),
            { kind: "label", at: [-7.8, 0.8], label: "x²/a² − y²/b² = 1", labelAt: "e" },
            { kind: "label", at: [-7.8, -0.8], label: "b > a: no circle", labelAt: "e", tone: "bad", step: 1 },
            ...asymptotes(2, 3, 2),
            { kind: "label", at: [7.8, 0.8], label: "y = ±bx/a", labelAt: "w", tone: "good", step: 2 },
            { kind: "line", through: [[0, 0], [1, 1]], dashed: true, tone: "muted", step: 2 },
            { kind: "line", through: [[0, 0], [1, -1]], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [7.8, -0.8], label: "slope ±1", labelAt: "w", tone: "muted", step: 2 },
            { kind: "segment", from: [0, -4], to: [3.6, 5], step: 3 },
            { kind: "point", at: [2.5, 2.25], step: 3 },
            { kind: "segment", from: [0, -4], to: [-3.6, 5], step: 3 },
            { kind: "point", at: [-2.5, 2.25], step: 3 },
            { kind: "angle", at: [0, -4], from: 68.2, to: 111.8, tone: "bad", step: 4 },
            { kind: "label", at: [0, -4], label: "not 90°", labelAt: "se", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "Transverse axis on the y-axis",
        points: [
          t`In $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$ the positive term is in $y$, so the branches open up and down.`,
          t`Recall: its **transverse axis**, of length $2b$, joins the vertices $(0, \pm b)$ on the $y$-axis.`,
          t`Here, from a point $P$ on the $x$-axis, two tangents meet at a right angle.`,
          t`Such points now lie on $x^2 + y^2 = b^2 - a^2$: the positive term's denominator comes first.`,
          t`So this hyperbola has a director circle only when $b > a$.`,
        ],
        figure: {
          alt: "The hyperbola y²/b² − x²/a² = 1, drawn with b = 3 and a = 2, opening up and down. Its transverse axis, of length 2b, runs up the y-axis between the vertices (0, ±3). From P(√5, 0) two tangents touch the upper and lower branches and meet at a right angle; P lies on the dashed circle x² + y² = b² − a² = 9 − 4.",
          axes: "xy",
          view: { x: [-8, 8], y: [-6, 6] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 3, b: 2, axis: "y", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 3, b: 2, axis: "y", branch: -1, step: 1 },
            { kind: "label", at: [7.8, 2.4], label: "y²/b² − x²/a² = 1", labelAt: "w", step: 1 },
            { kind: "segment", from: [0, -3], to: [0, 3], tone: "good", step: 2 },
            { kind: "point", at: [0, 3], step: 2 },
            { kind: "point", at: [0, -3], step: 2 },
            { kind: "label", at: [0, 1.5], label: "2b", labelAt: "w", tone: "good", step: 2 },
            { kind: "segment", from: [2.236, 0], to: [-2.996, 5.232], step: 3 },
            { kind: "point", at: [-1.789, 4.025], step: 3 },
            { kind: "segment", from: [2.236, 0], to: [-2.996, -5.232], step: 3 },
            { kind: "point", at: [-1.789, -4.025], step: 3 },
            { kind: "angle", at: [2.236, 0], from: 135, to: 225, tone: "good", step: 3 },
            { kind: "point", at: [2.236, 0], label: "P", labelAt: "ne", step: 3 },
            { kind: "circle", centre: [0, 0], r: 2.236, dashed: true, tone: "good", step: 4 },
            { kind: "label", at: [7.8, -2.4], label: "x² + y² = b² − a²", labelAt: "w", tone: "good", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the asymptotes and the director circle of the hyperbola $\frac{x^2}{36} - \frac{y^2}{9} = 1$.`,
      steps: [
        t`Here $a^2 = 36$ and $b^2 = 9$, so $a = 6$ and $b = 3$.`,
        t`Asymptotes: replace $1$ by $0$: $\frac{x^2}{36} = \frac{y^2}{9}$, so $y = \pm\frac{3}{6}x = \pm\frac{1}{2}x$.`,
        t`A tangent $y = mx + c$ needs $c^2 = 36m^2 - 9$. Through $P(h, k)$, $c = k - mh$: $(h^2 - 36)m^2 - 2hkm + k^2 + 9 = 0$.`,
        t`Perpendicular tangents: $m_1m_2 = \frac{k^2 + 9}{h^2 - 36} = -1$, so $h^2 + k^2 = 36 - 9 = 27$.`,
      ],
      answer: t`Asymptotes $y = \pm\frac{1}{2}x$; director circle $x^2 + y^2 = 27$, of radius $3\sqrt{3}$.`,
      figure: {
        alt: "The hyperbola x²/36 − y²/9 = 1 with vertices (±6, 0). The rectangle with corners (±6, ±3) has diagonals y = ±x/2, the asymptotes. From P(0, 3√3) the two tangents y = x + 3√3 and y = −x + 3√3 meet at a right angle, and P lies on the dashed director circle x² + y² = 27.",
        axes: "xy",
        view: { x: [-12, 12], y: [-7, 9] },
        elements: [
          { kind: "hyperbola", centre: [0, 0], a: 6, b: 3, axis: "x", branch: 1, step: 1 },
          { kind: "hyperbola", centre: [0, 0], a: 6, b: 3, axis: "x", branch: -1, step: 1 },
          { kind: "label", at: [-11.6, -6.2], label: "x²/36 − y²/9 = 1", labelAt: "e", step: 1 },
          { kind: "point", at: [6, 0], step: 1 },
          { kind: "point", at: [-6, 0], step: 1 },
          { kind: "segment", from: [6, 3], to: [-6, 3], dashed: true, tone: "muted", step: 2 },
          { kind: "segment", from: [-6, 3], to: [-6, -3], dashed: true, tone: "muted", step: 2 },
          { kind: "segment", from: [-6, -3], to: [6, -3], dashed: true, tone: "muted", step: 2 },
          { kind: "segment", from: [6, -3], to: [6, 3], dashed: true, tone: "muted", step: 2 },
          { kind: "line", through: [[0, 0], [1, 0.5]], dashed: true, tone: "good", step: 2 },
          { kind: "line", through: [[0, 0], [1, -0.5]], dashed: true, tone: "good", step: 2 },
          { kind: "label", at: [11.6, 7.6], label: "y = ±x/2", labelAt: "w", tone: "good", step: 2 },
          { kind: "segment", from: [0, 5.196], to: [9.007, -3.811], step: 3 },
          { kind: "point", at: [6.928, -1.732], step: 3 },
          { kind: "segment", from: [0, 5.196], to: [-9.007, -3.811], step: 3 },
          { kind: "point", at: [-6.928, -1.732], step: 3 },
          { kind: "angle", at: [0, 5.196], from: 225, to: 315, tone: "good", step: 3 },
          { kind: "point", at: [0, 5.196], label: "P(0, 3√3)", labelAt: "ne", step: 3 },
          { kind: "circle", centre: [0, 0], r: 5.196, dashed: true, tone: "good", step: 4 },
          { kind: "label", at: [-5.5, 7.6], label: "x² + y² = 27", labelAt: "w", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The hyperbola x²/9 − y²/4 = 1, which is x²/a² − y²/b² = 1 with a = 3 and b = 2. Its asymptotes y = ±2x/3 are dashed lines through the centre: the branches run closer and closer to them. They are the diagonals of the dashed rectangle with corners (±3, ±2). From P(0, √5) two tangents meet at a right angle; P lies on the dashed circle x² + y² = 9 − 4 = 5, the director circle.",
      axes: "xy",
      view: { x: [-8, 8], y: [-6, 6] },
      elements: [
        ...hyperbolaX(3, 2, 1),
        { kind: "label", at: [-7.7, -5.5], label: "x²/9 − y²/4 = 1", labelAt: "e", step: 1 },
        ...asymptotes(3, 2, 3),
        { kind: "label", at: [7.7, 5.5], label: "y = ±2x/3", labelAt: "w", tone: "good", step: 3 },
        ...rectangle(3, 2, 4),
        ...withStep(tangentRight, 5),
        ...withStep(tangentLeft, 5),
        { kind: "angle", at: P, from: 225, to: 315, tone: "good", step: 5 },
        { kind: "point", at: P, label: "P", labelAt: "ne", step: 5 },
        { kind: "circle", centre: [0, 0], r: 2.236, dashed: true, tone: "good", step: 6 },
        { kind: "label", at: [-0.5, 4.6], label: "x² + y² = 9 − 4", labelAt: "w", tone: "good", step: 6 },
      ],
    },
    visualSpec: t`Drag a point $P$ around the hyperbola's plane: its tangents to the curve update, the angle between them is shown, and it turns green when $P$ is on the director circle; a slider for $b$ shows the circle shrinking to nothing as $b$ reaches $a$, while the asymptotes, the diagonals of the $2a \times 2b$ rectangle, swing with it.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: t`Writes the slope of the asymptotes upside down: $y = \pm\frac{a}{b}x$, the root of the $x^2$ denominator over the root of the $y^2$ denominator`,
      remediation: t`Far out, $\frac{x^2}{a^2} = \frac{y^2}{b^2}$, so $\frac{y}{b} = \pm\frac{x}{a}$ and $y = \pm\frac{b}{a}x$. The root of the $y^2$ denominator goes on top.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C14-M2",
      mistake: t`Forgets a square root: uses $a^2$ and $b^2$ where $a$ and $b$ are needed (slope $\frac{b^2}{a^2}$, or radius $a^2 - b^2$)`,
      remediation: t`$a$ and $b$ are the square roots of the denominators. The asymptotes have slope $\pm\frac{b}{a}$, and the circle $x^2 + y^2 = a^2 - b^2$ has radius $\sqrt{a^2 - b^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M3",
      mistake: t`Factorises the equation but keeps the $1$, taking $\frac{x}{a} \pm \frac{y}{b} = 1$ as the asymptotes`,
      remediation: t`Asymptotes describe the curve far out, where the $1$ is negligible: set the right side to $0$. $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$ gives two lines through the centre, $y = \pm\frac{b}{a}x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M4",
      mistake: t`Uses the ellipse's director circle $x^2 + y^2 = a^2 + b^2$ for a hyperbola`,
      remediation: t`For a hyperbola the tangent condition is $c^2 = a^2m^2 - b^2$, with a minus. Setting $m_1m_2 = -1$ then gives $x^2 + y^2 = a^2 - b^2$.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C14-M5",
      mistake: "Takes the auxiliary circle, drawn on the transverse axis as diameter, as the director circle",
      remediation: t`The circle on the transverse axis is the auxiliary circle. Perpendicular tangents meet on a smaller circle: its radius squared is (transverse semi-axis)$^2$ minus (conjugate semi-axis)$^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M6",
      mistake: t`Uses $x^2 + y^2 = a^2 - b^2$ with $a^2$ always the $x^2$ denominator, even when the transverse axis is the $y$-axis`,
      remediation: t`The positive term decides. For $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$ the transverse axis is the $y$-axis, and perpendicular tangents meet on $x^2 + y^2 = b^2 - a^2$.`,
      fallback: { kind: "concept", id: "C11" },
    },
  ],
  engineNotes: [
    "C14-M1, C14-M2 and C14-M3 show on asymptote items; C14-M2 also on the director circle's radius. C14-M4, C14-M5 and C14-M6 show only on director-circle items.",
    "C14-M6 gives the key when the transverse axis is the x-axis: diagnose it only on hyperbolas of the form y²/b² − x²/a² = 1.",
    "The book has no asymptote or director-circle exercises, so the items are authored on hyperbolas from its Ex 7.3 Q1 list.",
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "authored" },
      stem: t`The asymptotes of the hyperbola $\frac{x^2}{25} - \frac{y^2}{16} = 1$ are`,
      verify: { kind: "locus", inputs: { P: "25", Q: "-16" }, params: { ask: "asym" } },
      options: [
        { key: "A", text: t`$\frac{x}{5} \pm \frac{y}{4} = 1$`, correct: false, misconceptionId: "C14-M3", value: "x**2/25 - 2*x/5 - y**2/16 + 1" },
        { key: "B", text: t`$y = \pm \frac{4}{5}\,x$`, correct: true, value: "-16*x**2/25 + y**2" },
        { key: "C", text: t`$y = \pm \frac{5}{4}\,x$`, correct: false, misconceptionId: "C14-M1", value: "-25*x**2/16 + y**2" },
        { key: "D", text: t`$y = \pm \frac{16}{25}\,x$`, correct: false, misconceptionId: "C14-M2", value: "-256*x**2/625 + y**2" },
      ],
      solution: {
        steps: [
          t`Here $a^2 = 25$ and $b^2 = 16$, so $a = 5$ and $b = 4$.`,
          t`Replace $1$ by $0$: $\frac{x^2}{25} = \frac{y^2}{16}$, so $\frac{y}{4} = \pm\frac{x}{5}$.`,
          t`The asymptotes are $y = \pm\frac{4}{5}x$, the diagonals of the rectangle with corners $(\pm 5, \pm 4)$.`,
        ],
        figure: {
          alt: "The hyperbola x²/25 − y²/16 = 1 and the dashed rectangle with corners (±5, ±4). Its diagonals are the asymptotes y = ±4x/5, which the branches approach.",
          axes: "xy",
          view: { x: [-12, 12], y: [-10, 10] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 4, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 4, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [-0.05, 9.3], label: "x²/25 − y²/16 = 1", labelAt: "w", step: 1 },
            { kind: "segment", from: [5, 4], to: [-5, 4], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-5, 4], to: [-5, -4], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-5, -4], to: [5, -4], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [5, -4], to: [5, 4], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [5, 4], tone: "muted", step: 1, label: "(5, 4)", labelAt: "nw" },
            { kind: "line", through: [[0, 0], [1, 0.8]], dashed: true, tone: "good", step: 2 },
            { kind: "line", through: [[0, 0], [1, -0.8]], dashed: true, tone: "good", step: 2 },
            { kind: "label", at: [0.6, -9.3], label: "y = ±4x/5", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "authored" },
      stem: t`The asymptotes of the hyperbola $\frac{y^2}{25} - \frac{x^2}{144} = 1$ are`,
      verify: { kind: "locus", inputs: { P: "-144", Q: "25" }, params: { ask: "asym" } },
      options: [
        { key: "A", text: t`$y = \pm \frac{5}{12}\,x$`, correct: true, value: "-25*x**2/144 + y**2" },
        { key: "B", text: t`$y = \pm \frac{12}{5}\,x$`, correct: false, misconceptionId: "C14-M1", value: "-144*x**2/25 + y**2" },
        { key: "C", text: t`$y = \pm \frac{25}{144}\,x$`, correct: false, misconceptionId: "C14-M2", value: "-625*x**2/20736 + y**2" },
        { key: "D", text: t`$\frac{y}{5} \pm \frac{x}{12} = 1$`, correct: false, misconceptionId: "C14-M3", value: "-x**2/144 + y**2/25 - 2*y/5 + 1" },
      ],
      solution: {
        steps: [
          t`Here $25$ is under $y^2$ and $144$ under $x^2$, so the rectangle has corners $(\pm 12, \pm 5)$. The transverse axis is the $y$-axis.`,
          t`Replace $1$ by $0$: $\frac{y^2}{25} = \frac{x^2}{144}$, so $\frac{y}{5} = \pm\frac{x}{12}$.`,
          t`The asymptotes are $y = \pm\frac{5}{12}x$: the root of the $y^2$ denominator goes on top, whichever term is positive.`,
        ],
        figure: {
          alt: "The hyperbola y²/25 − x²/144 = 1, opening up and down with vertices (0, ±5), and the dashed rectangle with corners (±12, ±5). Its diagonals are the asymptotes y = ±5x/12.",
          axes: "xy",
          view: { x: [-20, 20], y: [-13, 13] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 12, axis: "y", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 12, axis: "y", branch: -1, step: 1 },
            { kind: "label", at: [-19.5, -11.8], label: "y²/25 − x²/144 = 1", labelAt: "e", step: 1 },
            { kind: "segment", from: [12, 5], to: [-12, 5], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-12, 5], to: [-12, -5], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-12, -5], to: [12, -5], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [12, -5], to: [12, 5], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [12, 5], tone: "muted", step: 1, label: "(12, 5)", labelAt: "se" },
            { kind: "line", through: [[0, 0], [1, 0.417]], dashed: true, tone: "good", step: 2 },
            { kind: "line", through: [[0, 0], [1, -0.417]], dashed: true, tone: "good", step: 2 },
            { kind: "label", at: [19.5, 11.8], label: "y = ±5x/12", labelAt: "w", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "authored" },
      stem: t`The asymptotes of the hyperbola $x = 2\sec\theta$, $y = 2\sqrt{3}\tan\theta$ are`,
      verify: { kind: "locus", inputs: { P: "4", Q: "-12" }, params: { ask: "asym" } },
      options: [
        { key: "A", text: t`$y = \pm \sqrt{3}\,x$`, correct: true, value: "-3*x**2 + y**2" },
        { key: "B", text: t`$y = \pm \frac{1}{\sqrt{3}}\,x$`, correct: false, misconceptionId: "C14-M1", value: "-x**2/3 + y**2" },
        { key: "C", text: t`$y = \pm 3\,x$`, correct: false, misconceptionId: "C14-M2", value: "-9*x**2 + y**2" },
        { key: "D", text: t`$\frac{x}{2} \pm \frac{y}{2 \sqrt{3}} = 1$`, correct: false, misconceptionId: "C14-M3", value: "x**2/4 - x - y**2/12 + 1" },
      ],
      solution: {
        steps: [
          t`$\sec^2\theta - \tan^2\theta = 1$ gives $\frac{x^2}{4} - \frac{y^2}{12} = 1$: $a = 2$ and $b = 2\sqrt{3}$.`,
          t`Replace $1$ by $0$: $\frac{x^2}{4} = \frac{y^2}{12}$, so $y^2 = 3x^2$.`,
          t`The asymptotes are $y = \pm\sqrt{3}\,x$.`,
        ],
        figure: {
          alt: "The hyperbola x²/4 − y²/12 = 1 (x = 2 sec θ, y = 2√3 tan θ) and the dashed rectangle with corners (±2, ±2√3). Its diagonals are the asymptotes y = ±√3x.",
          axes: "xy",
          view: { x: [-9.5, 9.5], y: [-6.5, 6.5] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 3.464, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 3.464, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [-2.9, -1.45], label: "x²/4 − y²/12 = 1", labelAt: "w", step: 1 },
            { kind: "segment", from: [2, 3.464], to: [-2, 3.464], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-2, 3.464], to: [-2, -3.464], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [-2, -3.464], to: [2, -3.464], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [2, -3.464], to: [2, 3.464], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [2, 3.464], tone: "muted", step: 1 },
            { kind: "line", through: [[0, 0], [1, 1.732]], dashed: true, tone: "good", step: 2 },
            { kind: "line", through: [[0, 0], [1, -1.732]], dashed: true, tone: "good", step: 2 },
            { kind: "label", at: [4.3, 1.6], label: "y = ±√3x", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "authored" },
      stem: t`Perpendicular tangents to the hyperbola $\frac{x^2}{100} - \frac{y^2}{25} = 1$ meet on its director circle. The radius of that circle is`,
      verify: { kind: "value", inputs: { P: "100", Q: "-25" }, params: { ask: "dcr" } },
      options: [
        { key: "A", text: t`$75$`, correct: false, misconceptionId: "C14-M2", value: "75" },
        { key: "B", text: t`$5 \sqrt{5}$`, correct: false, misconceptionId: "C14-M4", value: "5*sqrt(5)" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C14-M5", value: "10" },
        { key: "D", text: t`$5 \sqrt{3}$`, correct: true, value: "5*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`Here $a^2 = 100$ and $b^2 = 25$. A tangent $y = mx + c$ needs $c^2 = 100m^2 - 25$.`,
          t`Through $(h, k)$: $(h^2 - 100)m^2 - 2hkm + k^2 + 25 = 0$. Perpendicular tangents: $m_1m_2 = \frac{k^2 + 25}{h^2 - 100} = -1$, so $h^2 + k^2 = 75$.`,
          t`The director circle is $x^2 + y^2 = 75$, so its radius is $\sqrt{75} = 5\sqrt{3}$.`,
        ],
        figure: {
          alt: "The hyperbola x²/100 − y²/25 = 1. From P(0, 5√3) the two tangents meet at a right angle; P lies on the dashed director circle x² + y² = 75, of radius 5√3.",
          axes: "xy",
          view: { x: [-16, 16], y: [-11, 12] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 10, b: 5, axis: "x", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 10, b: 5, axis: "x", branch: -1, step: 1 },
            { kind: "label", at: [-15.5, -10.2], label: "x²/100 − y²/25 = 1", labelAt: "e", step: 1 },
            { kind: "segment", from: [0, 8.66], to: [15.011, -6.351], step: 2 },
            { kind: "point", at: [11.547, -2.887], step: 2 },
            { kind: "segment", from: [0, 8.66], to: [-15.011, -6.351], step: 2 },
            { kind: "point", at: [-11.547, -2.887], step: 2 },
            { kind: "angle", at: [0, 8.66], from: 225, to: 315, tone: "good", step: 2 },
            { kind: "point", at: [0, 8.66], label: "P(0, 5√3)", labelAt: "ne", step: 2 },
            { kind: "circle", centre: [0, 0], r: 8.66, dashed: true, tone: "good", step: 2 },
            { kind: "label", at: [-4, 10.8], label: "x² + y² = 75", labelAt: "w", tone: "good", step: 2 },
            { kind: "segment", from: [0, 0], to: [-4.33, -7.5], tone: "good", step: 3 },
            { kind: "label", at: [-2.6, -4.6], label: "5√3", labelAt: "nw", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "authored" },
      stem: t`The locus of the point where two perpendicular tangents to the hyperbola $\frac{x^2}{25} - \frac{y^2}{16} = -1$ meet is`,
      verify: { kind: "locus", inputs: { P: "-25", Q: "16" }, params: { ask: "dc" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 = 41$`, correct: false, misconceptionId: "C14-M4", value: "x**2 + y**2 - 41" },
        { key: "B", text: t`$x^2 + y^2 = 16$`, correct: false, misconceptionId: "C14-M5", value: "x**2 + y**2 - 16" },
        { key: "C", text: t`$x^2 + y^2 = 9$`, correct: false, misconceptionId: "C14-M6", value: "x**2 + y**2 - 9" },
        { key: "D", text: t`$x^2 + y^2 = -9$: no real point, so no two tangents are perpendicular`, correct: true, value: "x**2 + y**2 + 9" },
      ],
      solution: {
        steps: [
          t`Multiply by $-1$: $\frac{y^2}{16} - \frac{x^2}{25} = 1$. The transverse axis is the $y$-axis, with $16$ under $y^2$ and $25$ under $x^2$.`,
          t`Perpendicular tangents would meet on $x^2 + y^2 = 16 - 25$, that is, $x^2 + y^2 = -9$.`,
          t`No real point satisfies this. Every tangent is flatter than the asymptotes $y = \pm\frac{4}{5}x$, so no two tangent slopes multiply to $-1$.`,
        ],
        figure: {
          alt: "The hyperbola y²/16 − x²/25 = 1, opening up and down with vertices (0, ±4), and its asymptotes y = ±4x/5. Every tangent is flatter than the asymptotes, so no two tangents are perpendicular.",
          axes: "xy",
          view: { x: [-12, 12], y: [-8.5, 8.5] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 5, axis: "y", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 4, b: 5, axis: "y", branch: -1, step: 1 },
            { kind: "label", at: [11.75, -1.6], label: "y²/16 − x²/25 = 1", labelAt: "w", step: 1 },
            { kind: "line", through: [[0, 0], [1, 0.8]], dashed: true, tone: "good", step: 3 },
            { kind: "line", through: [[0, 0], [1, -0.8]], dashed: true, tone: "good", step: 3 },
            { kind: "label", at: [-11.75, 1.6], label: "y = ±4x/5", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C14-Q6",
      source: { kind: "authored" },
      stem: t`The locus of the point where two perpendicular tangents to the hyperbola $\frac{y^2}{25} - \frac{x^2}{9} = 1$ meet is`,
      verify: { kind: "locus", inputs: { P: "-9", Q: "25" }, params: { ask: "dc" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 = 25$`, correct: false, misconceptionId: "C14-M5", value: "x**2 + y**2 - 25" },
        { key: "B", text: t`$x^2 + y^2 = -16$: no real point, so no two tangents are perpendicular`, correct: false, misconceptionId: "C14-M6", value: "x**2 + y**2 + 16" },
        { key: "C", text: t`$x^2 + y^2 = 16$`, correct: true, value: "x**2 + y**2 - 16" },
        { key: "D", text: t`$x^2 + y^2 = 34$`, correct: false, misconceptionId: "C14-M4", value: "x**2 + y**2 - 34" },
      ],
      solution: {
        steps: [
          t`The transverse axis is the $y$-axis: $25$ under $y^2$, $9$ under $x^2$. A tangent $y = mx + c$ needs $c^2 = 25 - 9m^2$.`,
          t`Through $(h, k)$, $c = k - mh$: $(h^2 + 9)m^2 - 2hkm + k^2 - 25 = 0$. Perpendicular tangents: $m_1m_2 = \frac{k^2 - 25}{h^2 + 9} = -1$.`,
          t`So $h^2 + k^2 = 25 - 9 = 16$: the locus is $x^2 + y^2 = 16$.`,
        ],
        figure: {
          alt: "The hyperbola y²/25 − x²/9 = 1, opening up and down. From P(4, 0) the two tangents y = −x + 4 and y = x − 4 touch the upper and lower branches and meet at a right angle; P lies on the dashed circle x² + y² = 16.",
          axes: "xy",
          view: { x: [-10, 10], y: [-9, 9] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 3, axis: "y", branch: 1, step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 5, b: 3, axis: "y", branch: -1, step: 1 },
            { kind: "label", at: [9.6, -4.85], label: "y²/25 − x²/9 = 1", labelAt: "w", step: 1 },
            { kind: "segment", from: [4, 0], to: [-4.125, -8.125], step: 2 },
            { kind: "point", at: [-2.25, -6.25], step: 2 },
            { kind: "segment", from: [4, 0], to: [-4.125, 8.125], step: 2 },
            { kind: "point", at: [-2.25, 6.25], step: 2 },
            { kind: "angle", at: [4, 0], from: 135, to: 225, tone: "good", step: 2 },
            { kind: "point", at: [4, 0], label: "P(4, 0)", labelAt: "ne", step: 2 },
            { kind: "circle", centre: [0, 0], r: 4, dashed: true, tone: "good", step: 3 },
            { kind: "label", at: [5.2, 4.6], label: "x² + y² = 16", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
