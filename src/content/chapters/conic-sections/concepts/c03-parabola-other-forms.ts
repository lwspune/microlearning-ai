import type { Concept, Pt } from "../../../types.ts";

const t = String.raw;

/** The parabola (x − h)² = 4a(y − k), opening up (a > 0) or down (a < 0): 81 points for x from x0 to x1. */
const upDown = (h: number, k: number, a: number, x0: number, x1: number): Pt[] =>
  Array.from({ length: 81 }, (_, i) => {
    const x = x0 + ((x1 - x0) * i) / 80;
    return [+x.toFixed(3), +(k + (x - h) ** 2 / (4 * a)).toFixed(3)];
  });

/** The parabola y² = 4ax, opening right (a > 0) or left (a < 0): 81 points for y from −y1 to y1. */
const leftRight = (a: number, y1: number): Pt[] =>
  Array.from({ length: 81 }, (_, i) => {
    const y = -y1 + (2 * y1 * i) / 80;
    return [+((y * y) / (4 * a)).toFixed(3), +y.toFixed(3)];
  });

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$y^2 = 4x$ has its focus at $(1, 0)$ and opens to the right. Swap $x$ and $y$ to get $x^2 = 4y$. **Where is the focus now, and which way does the parabola open?**`,
    reveal: t`The focus is $(0, 1)$ and the parabola opens upward. Swapping $x$ and $y$ reflects the whole picture in the line $y = x$, so the $x$-axis turns into the $y$-axis. Now $x$ is the squared letter, and the axis of the parabola is the other one: the $y$-axis.`,
  },
  explanation: {
    intuition: [
      t`Recall: $y^2 = 4ax$, with $a > 0$, opens to the right from its vertex, the origin (here $a = 1$).`,
      t`Give that picture a quarter turn anticlockwise about the origin: it becomes $x^2 = 4ay$, opening upward.`,
      t`Which letter is squared? The **axis**, the curve's line of symmetry, runs along the other letter: here the $y$-axis.`,
      t`Which sign does the other side have? A minus turns the curve round: $y^2 = -4ax$ opens left, $x^2 = -4ay$ opens down.`,
      t`The **focus** is always inside the curve, $a$ from the vertex: here $S(0, 1)$.`,
      t`The **directrix** is outside, $a$ from the vertex on the other side: here $y = -1$.`,
    ],
    formal: [
      {
        title: "Four parabolas, vertex at origin",
        points: [
          t`Take $a > 0$: each of these four parabolas has its vertex at the origin.`,
          t`$y^2 = 4ax$ opens right: focus $(a, 0)$, directrix $x = -a$.`,
          t`$y^2 = -4ax$ opens left: focus $(-a, 0)$, directrix $x = a$.`,
          t`$x^2 = 4ay$ opens up: focus $(0, a)$, directrix $y = -a$.`,
          t`$x^2 = -4ay$ opens down: focus $(0, -a)$, directrix $y = a$.`,
        ],
        figure: {
          alt: "The four parabolas with vertex at the origin, drawn with a = 1: y² = 4ax opening right with its focus (a, 0), y² = −4ax opening left with its focus (−a, 0), x² = 4ay opening up with its focus (0, a), and x² = −4ay opening down with its focus (0, −a). Each focus is inside its own curve.",
          axes: "xy",
          view: { x: [-5, 5], y: [-5, 5] },
          elements: [
            { kind: "curve", points: leftRight(1, 4.4), step: 2 },
            { kind: "label", at: [2.6, -1], label: "y² = 4ax", labelAt: "e", step: 2 },
            { kind: "point", at: [1, 0], step: 2 },
            { kind: "curve", points: leftRight(-1, 4.4), step: 3 },
            { kind: "label", at: [-2.6, -1], label: "y² = −4ax", labelAt: "w", step: 3 },
            { kind: "point", at: [-1, 0], step: 3 },
            { kind: "curve", points: upDown(0, 0, 1, -4.4, 4.4), step: 4 },
            { kind: "label", at: [0.3, 3.3], label: "x² = 4ay", labelAt: "e", step: 4 },
            { kind: "point", at: [0, 1], step: 4 },
            { kind: "curve", points: upDown(0, 0, -1, -4.4, 4.4), step: 5 },
            { kind: "label", at: [0.3, -3.3], label: "x² = −4ay", labelAt: "e", step: 5 },
            { kind: "point", at: [0, -1], step: 5 },
          ],
        },
      },
      {
        title: "Reading the axis and focus",
        points: [
          t`In $x^2 = 4ay$, $x$ and $-x$ give the same $y$: the squared letter runs across the axis.`,
          t`The letter not squared, $y$, gives the axis: here the $y$-axis.`,
          t`So the focus $(0, a)$ lies on the $y$-axis, $a$ above the vertex.`,
          t`Recall: the **latus rectum** is the chord through the focus at right angles to the axis.`,
          t`Its length is $4a$ for all four parabolas.`,
          t`For $x^2 = 4ay$ its ends are $(\pm 2a, a)$.`,
        ],
        figure: {
          alt: "The parabola x² = 4y, that is a = 1. The points (−3, 9/4) and (3, 9/4) are at the same height, so x runs across the y-axis, which is the axis. The focus S(0, 1) is on the axis, and the latus rectum of length 4 joins (−2, 1) and (2, 1) through it.",
          axes: "xy",
          view: { x: [-4, 4], y: [-2, 5] },
          elements: [
            { kind: "curve", points: upDown(0, 0, 1, -4, 4) },
            { kind: "label", at: [0.3, 3.4], label: "x² = 4y", labelAt: "e" },
            { kind: "segment", from: [-3, 2.25], to: [3, 2.25], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [-3, 2.25], label: "(−3, 9/4)", labelAt: "ne", tone: "muted", step: 1 },
            { kind: "point", at: [3, 2.25], label: "(3, 9/4)", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 0], [0, 1]], tone: "good", step: 2 },
            { kind: "label", at: [0, 4.6], label: "axis", labelAt: "w", tone: "good", step: 2 },
            { kind: "point", at: [0, 1], label: "S(0, 1)", labelAt: "ne", step: 3 },
            { kind: "segment", from: [-2, 1], to: [2, 1], tone: "good", step: 4 },
            { kind: "label", at: [-1, 1], label: "4a = 4", labelAt: "s", tone: "good", step: 5 },
            { kind: "point", at: [-2, 1], label: "(−2, 1)", labelAt: "sw", tone: "good", step: 6 },
            { kind: "point", at: [2, 1], label: "(2, 1)", labelAt: "se", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Finding a from the equation",
        points: [
          t`First make the **coefficient** of the square, the number in front of it, equal to $1$.`,
          t`Take $5x^2 = -12y$: divide by $5$ to get $x^2 = -\frac{12}{5}y$.`,
          t`Compare with $x^2 = -4ay$: $4a = \frac{12}{5}$, so $a = \frac{3}{5}$.`,
          t`The focus is $a$ below the vertex: $\left(0, -\frac{3}{5}\right)$.`,
          t`The directrix is $a$ above the vertex: $y = \frac{3}{5}$.`,
        ],
        figure: {
          alt: "The parabola 5x² = −12y, that is x² = −(12/5)y, opening downward from the origin. With a = 3/5, the focus S(0, −3/5) is just below the vertex and the directrix y = 3/5 just above it.",
          axes: "xy",
          view: { x: [-4, 4], y: [-5.5, 1.8] },
          elements: [
            { kind: "curve", points: upDown(0, 0, -0.6, -3.7, 3.7), step: 2 },
            { kind: "label", at: [0.3, -3.6], label: "5x² = −12y", labelAt: "e", step: 2 },
            { kind: "label", at: [-0.3, -2.4], label: "a = 3/5", labelAt: "w", tone: "good", step: 3 },
            { kind: "point", at: [0, -0.6], label: "S", labelAt: "e", step: 4 },
            { kind: "line", through: [[-1, 0.6], [1, 0.6]], dashed: true, tone: "muted", step: 5 },
            { kind: "label", at: [2.6, 0.6], label: "y = 3/5", labelAt: "n", tone: "muted", step: 5 },
          ],
        },
      },
      {
        title: "Moving the vertex",
        points: [
          t`**Completing the square** rewrites $x^2 + 6x$ as $(x + 3)^2 - 9$.`,
          t`Do it in the squared letter: $x^2 + 6x - 4y + 17 = 0$ becomes $(x + 3)^2 = 4(y - 2)$.`,
          t`This is $(x - h)^2 = 4a(y - k)$, with $h = -3$, $k = 2$ and $a = 1$.`,
          t`In general $a$ may be negative; then the parabola opens downward.`,
          t`Put $X = x - h$ and $Y = y - k$: the equation becomes $X^2 = 4aY$.`,
          t`Its vertex, where $X = 0$ and $Y = 0$, is $(h, k)$: here $(-3, 2)$, not $(3, -2)$.`,
        ],
        figure: {
          alt: "The parabola x² + 6x − 4y + 17 = 0, that is (x + 3)² = 4(y − 2), opening upward. The dashed lines X = 0 (that is x = −3) and Y = 0 (that is y = 2) are its new axes, crossing at the vertex V(−3, 2).",
          axes: "xy",
          view: { x: [-8, 4], y: [-2.4, 7] },
          elements: [
            { kind: "curve", points: upDown(-3, 2, 1, -7.6, 1.6), step: 2 },
            { kind: "label", at: [-5.2, -1.9], label: "(x + 3)² = 4(y − 2)", labelAt: "n", step: 2 },
            { kind: "segment", from: [-3, 0], to: [-3, 7], dashed: true, tone: "muted", step: 5 },
            { kind: "label", at: [-3, 6.6], label: "X = 0", labelAt: "e", tone: "muted", step: 5 },
            { kind: "line", through: [[0, 2], [1, 2]], dashed: true, tone: "muted", step: 5 },
            { kind: "label", at: [3.6, 2], label: "Y = 0", labelAt: "n", tone: "muted", step: 5 },
            { kind: "point", at: [-3, 2], label: "V(−3, 2)", labelAt: "se", step: 6 },
          ],
        },
      },
      {
        title: "Shifting back to x and y",
        points: [
          t`Find the focus and directrix in $X, Y$ first, as for $X^2 = 4aY$.`,
          t`There the focus is $X = 0$, $Y = a$, and the directrix is $Y = -a$.`,
          t`Then shift back, using $x = X + h$ and $y = Y + k$.`,
          t`The focus is $(h, k + a)$: here $(-3, 3)$.`,
          t`The directrix is $y = k - a$: here $y = 1$.`,
          t`The axis is $x = h$: here $x = -3$.`,
        ],
        figure: {
          alt: "The parabola (x + 3)² = 4(y − 2) with its new axes X = 0 and Y = 0 crossing at the vertex V(−3, 2). The focus is Y = 1 in the new letters, which is S(−3, 3); the directrix Y = −1 is the line y = 1; the axis is x = −3.",
          axes: "xy",
          view: { x: [-8, 4], y: [-2.4, 7] },
          elements: [
            { kind: "curve", points: upDown(-3, 2, 1, -7.6, 1.6) },
            { kind: "label", at: [-5.2, -1.9], label: "(x + 3)² = 4(y − 2)", labelAt: "n" },
            { kind: "segment", from: [-3, 0], to: [-3, 7], dashed: true, tone: "muted" },
            { kind: "line", through: [[0, 2], [1, 2]], dashed: true, tone: "muted" },
            { kind: "label", at: [3.6, 2], label: "Y = 0", labelAt: "n", tone: "muted" },
            { kind: "point", at: [-3, 2], label: "V(−3, 2)", labelAt: "se" },
            { kind: "point", at: [-3, 3], label: "Y = 1", labelAt: "e", step: 2 },
            { kind: "line", through: [[0, 1], [1, 1]], tone: "good", step: 2 },
            { kind: "label", at: [-7.4, 1], label: "Y = −1", labelAt: "s", tone: "good", step: 2 },
            { kind: "label", at: [-3, 3], label: "S(−3, 3)", labelAt: "nw", step: 4 },
            { kind: "label", at: [2, 1], label: "y = 1", labelAt: "n", tone: "good", step: 5 },
            { kind: "label", at: [-3, 6.6], label: "x = −3", labelAt: "e", tone: "muted", step: 6 },
          ],
        },
      },
      {
        title: "An equation from given data",
        points: [
          t`Vertex at the origin and axis along the $y$-axis: write $x^2 = 4ay$.`,
          t`A given point on the curve fixes $a$, including its sign: say $P(4, -4)$.`,
          t`Then $4^2 = 4a(-4)$, so $a = -1$: the parabola is $x^2 = -4y$.`,
          t`Recall: each point $P$ is as far from the focus $S$ as from the directrix.`,
          t`So, given a focus and a directrix instead, write $SP = PM$ directly and simplify.`,
        ],
        figure: {
          alt: "The parabola x² = −4y through P(4, −4), with its axis along the y-axis. Its focus S(0, −1) and the directrix y = 1 are drawn; P is 5 from S and 5 from M(4, 1) on the directrix.",
          axes: "xy",
          view: { x: [-5.5, 5.5], y: [-5.5, 2.5] },
          elements: [
            { kind: "line", through: [[0, 0], [0, 1]], tone: "good", step: 1 },
            { kind: "label", at: [0, 1.6], label: "axis", labelAt: "w", tone: "good", step: 1 },
            { kind: "point", at: [4, -4], label: "P(4, −4)", labelAt: "w", step: 2 },
            { kind: "curve", points: upDown(0, 0, -1, -4.6, 4.6), step: 3 },
            { kind: "label", at: [-0.6, -3.2], label: "x² = −4y", labelAt: "w", step: 3 },
            { kind: "point", at: [0, -1], label: "S", labelAt: "ne", step: 4 },
            { kind: "line", through: [[0, 1], [1, 1]], dashed: true, tone: "muted", step: 4 },
            { kind: "label", at: [-4, 1], label: "y = 1", labelAt: "n", tone: "muted", step: 4 },
            { kind: "point", at: [4, 1], label: "M", labelAt: "ne", tone: "muted", step: 4 },
            { kind: "segment", from: [0, -1], to: [4, -4], tone: "good", step: 4 },
            { kind: "segment", from: [4, -4], to: [4, 1], dashed: true, tone: "good", step: 4 },
            { kind: "label", at: [-0.6, -4.6], label: "SP = PM = 5", labelAt: "w", tone: "good", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the vertex, the focus, the axis and the directrix of the parabola $x^2 + 4x + 4y + 16 = 0$.`,
      steps: [
        t`Complete the square in $x$, the squared letter: $x^2 + 4x + 4 = -4y - 12$, so $(x + 2)^2 = -4(y + 3)$.`,
        t`Put $X = x + 2$, $Y = y + 3$: $X^2 = -4Y$, which is $X^2 = -4aY$ with $a = 1$. It opens downward. The vertex is $X = 0$, $Y = 0$, that is $(-2, -3)$.`,
        t`In $X, Y$ the focus is $(0, -1)$: $x + 2 = 0$, $y + 3 = -1$, so the focus is $(-2, -4)$. The axis is $X = 0$, that is $x + 2 = 0$.`,
        t`The directrix is $Y = 1$: $y + 3 = 1$, that is $y + 2 = 0$. Check: the vertex $(-2, -3)$ is midway between the focus ($y = -4$) and the directrix ($y = -2$).`,
      ],
      answer: t`Vertex $(-2, -3)$, focus $(-2, -4)$, axis $x + 2 = 0$, directrix $y + 2 = 0$.`,
      figure: {
        alt: "The parabola (x + 2)² = −4(y + 3), opening downward from its vertex V(−2, −3). The focus S(−2, −4) is one unit below the vertex on the axis x + 2 = 0, and the directrix y + 2 = 0 is one unit above it.",
        axes: "xy",
        view: { x: [-7, 3], y: [-7.5, 1] },
        elements: [
          { kind: "curve", points: [[-7, -9.25], [-6.875, -8.941], [-6.75, -8.641], [-6.625, -8.348], [-6.5, -8.062], [-6.375, -7.785], [-6.25, -7.516], [-6.125, -7.254], [-6, -7], [-5.875, -6.754], [-5.75, -6.516], [-5.625, -6.285], [-5.5, -6.062], [-5.375, -5.848], [-5.25, -5.641], [-5.125, -5.441], [-5, -5.25], [-4.875, -5.066], [-4.75, -4.891], [-4.625, -4.723], [-4.5, -4.562], [-4.375, -4.41], [-4.25, -4.266], [-4.125, -4.129], [-4, -4], [-3.875, -3.879], [-3.75, -3.766], [-3.625, -3.66], [-3.5, -3.562], [-3.375, -3.473], [-3.25, -3.391], [-3.125, -3.316], [-3, -3.25], [-2.875, -3.191], [-2.75, -3.141], [-2.625, -3.098], [-2.5, -3.062], [-2.375, -3.035], [-2.25, -3.016], [-2.125, -3.004], [-2, -3], [-1.875, -3.004], [-1.75, -3.016], [-1.625, -3.035], [-1.5, -3.062], [-1.375, -3.098], [-1.25, -3.141], [-1.125, -3.191], [-1, -3.25], [-0.875, -3.316], [-0.75, -3.391], [-0.625, -3.473], [-0.5, -3.562], [-0.375, -3.66], [-0.25, -3.766], [-0.125, -3.879], [0, -4], [0.125, -4.129], [0.25, -4.266], [0.375, -4.41], [0.5, -4.562], [0.625, -4.723], [0.75, -4.891], [0.875, -5.066], [1, -5.25], [1.125, -5.441], [1.25, -5.641], [1.375, -5.848], [1.5, -6.062], [1.625, -6.285], [1.75, -6.516], [1.875, -6.754], [2, -7], [2.125, -7.254], [2.25, -7.516], [2.375, -7.785], [2.5, -8.062], [2.625, -8.348], [2.75, -8.641], [2.875, -8.941], [3, -9.25]], step: 1 },
          { kind: "point", at: [-2, -3], label: "V(−2, −3)", labelAt: "nw", step: 2 },
          { kind: "line", through: [[-2, -3], [-2, -4]], dashed: true, tone: "muted", step: 3 },
          { kind: "label", at: [-2.2, -6.3], label: "x + 2 = 0", labelAt: "w", tone: "muted", step: 3 },
          { kind: "point", at: [-2, -4], label: "S(−2, −4)", labelAt: "sw", step: 3 },
          { kind: "line", through: [[-2, -2], [0, -2]], tone: "good", step: 4 },
          { kind: "label", at: [1.4, -2], label: "y + 2 = 0", labelAt: "n", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "The parabola y² = 4x opening right from the origin, drawn faintly. An arm along its axis, labelled opens right, turns a quarter turn anticlockwise to point up, and the picture becomes x² = 4y, opening upward. Its axis is the y-axis, its focus S(0, 1) is inside the curve, and its directrix y = −1 is outside, below the vertex.",
      axes: "xy",
      view: { x: [-4.5, 4.5], y: [-4, 5] },
      elements: [
        { kind: "curve", points: leftRight(1, 4), tone: "muted", step: 1 },
        { kind: "label", at: [2.4, -1.6], label: "y² = 4x", labelAt: "e", tone: "muted", step: 1 },
        { kind: "segment", from: [0, 0], to: [3, 0], tone: "good", step: 1 },
        { kind: "label", at: [3.2, 0], label: "opens right", labelAt: "n", tone: "good", step: 1 },
        { kind: "turn", r: 2.5, to: 90, label: "opens up", labelAt: "w", step: 2 },
        { kind: "curve", points: upDown(0, 0, 1, -4.5, 4.5), step: 2 },
        { kind: "label", at: [0.4, 3.8], label: "x² = 4y", labelAt: "e", step: 2 },
        { kind: "label", at: [-0.2, 4.5], label: "axis", labelAt: "w", tone: "good", step: 3 },
        { kind: "point", at: [0, 1], label: "S(0, 1)", labelAt: "nw", step: 5 },
        { kind: "line", through: [[-1, -1], [1, -1]], dashed: true, tone: "muted", step: 6 },
        { kind: "label", at: [-2.8, -1], label: "y = −1", labelAt: "s", tone: "muted", step: 6 },
      ],
    },
    visualSpec: t`Two switches, swap and flip, turn $y^2 = 4ax$ into each of the other three parabolas, with the focus, directrix and latus rectum moving along; then drag the vertex to $(h, k)$ and watch the equation become $(x - h)^2 = 4a(y - k)$.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Taking the squared letter as the axis: putting the focus of $x^2 = 4ay$ on the $x$-axis, or writing $y^2 = 4ax$ for a parabola whose axis is the $y$-axis`,
      remediation: t`The squared letter runs across the axis; the other letter is the axis. $x^2 = 4ay$ has the $y$-axis as its axis and its focus at $(0, a)$, and a parabola with its axis along the $y$-axis is $x^2 = 4ay$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: t`Ignoring the minus sign: treating $y^2 = -4ax$ like $y^2 = 4ax$, as if every parabola opened right or up`,
      remediation: t`The sign of the unsquared side gives the direction: $y^2 = -4ax$ opens left, so its focus is $(-a, 0)$ and its directrix $x = a$. The focus is always inside the curve.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: t`Mixing up $a$ and $4a$: reading $a$ as the whole coefficient ($x^2 = -8y$ gives $a = 8$), or writing the $a$ found where $4a$ belongs ($x^2 = ay$)`,
      remediation: t`The coefficient is $4a$, not $a$: divide it by $4$ to get $a$, the distance from the vertex to the focus. When you write the equation, put $4a$ back: $x^2 = 4ay$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: t`Forgetting to shift back: giving the focus or directrix of $X^2 = 4aY$ as the answer in $x, y$, as if the vertex were the origin`,
      remediation: t`After completing the square, $(0, a)$ is the focus in the shifted letters $X, Y$. Put $X = x - h$, $Y = y - k$ back: the focus is $(h, k + a)$ and the directrix $y = k - a$.`,
      fallback: { kind: "ext", topic: "shifting the origin" },
    },
    {
      id: "C03-M5",
      mistake: t`Reading the vertex of $(x - h)^2 = 4a(y - k)$ as $(-h, -k)$`,
      remediation: t`The vertex is where $x - h = 0$ and $y - k = 0$, so it is $(h, k)$: $(x - 1)^2$ points to $x = 1$, not $x = -1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Not dividing by the coefficient of the square: from $3y^2 = -16x$ taking $4a = 16$`,
      remediation: t`Make the square's coefficient $1$ first: $3y^2 = -16x$ is $y^2 = -\frac{16}{3}x$, so $4a = \frac{16}{3}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M2 does not apply to a parabola that opens right or up (its model raises there).",
    t`C03-M4 and C03-M5 apply only to shifted parabolas (vertex not at the origin); C03-M6 only when the square's coefficient is not $\pm 1$.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q1(v)" },
      stem: t`The focus of the parabola $3y^2 = -16x$ is:`,
      verify: { kind: "value", inputs: { A: "3", B: "0", C: "16", D: "0" }, params: { sq: "y", ask: "focus" } },
      options: [
        { key: "A", text: t`$(\frac{4}{3}, 0)$`, correct: false, misconceptionId: "C03-M2", value: "(4/3, 0)" },
        { key: "B", text: t`$(-4, 0)$`, correct: false, misconceptionId: "C03-M6", value: "(-4, 0)" },
        { key: "C", text: t`$(- \frac{4}{3}, 0)$`, correct: true, value: "(-4/3, 0)" },
        { key: "D", text: t`$(0, - \frac{4}{3})$`, correct: false, misconceptionId: "C03-M1", value: "(0, -4/3)" },
      ],
      solution: {
        steps: [
          t`Divide by $3$: $y^2 = -\frac{16}{3}x$. The square is on $y$, so the axis is the $x$-axis, and the minus sign means it opens to the left.`,
          t`Compare with $y^2 = -4ax$: $4a = \frac{16}{3}$, so $a = \frac{4}{3}$.`,
          t`The focus is $(-a, 0) = \left(-\frac{4}{3}, 0\right)$, inside the curve; the directrix $x = \frac{4}{3}$ is on the other side of the vertex.`,
        ],
        figure: {
          alt: "The parabola 3y² = −16x opening to the left from the origin. Its focus S(−4/3, 0) is on the x-axis inside the curve, and the directrix x = 4/3 is on the other side of the vertex.",
          axes: "xy",
          view: { x: [-6.5, 3], y: [-6, 6] },
          elements: [
            { kind: "curve", points: [[-6.417, -5.85], [-6.1, -5.704], [-5.791, -5.557], [-5.49, -5.411], [-5.198, -5.265], [-4.913, -5.119], [-4.636, -4.973], [-4.367, -4.826], [-4.107, -4.68], [-3.854, -4.534], [-3.609, -4.387], [-3.373, -4.241], [-3.144, -4.095], [-2.924, -3.949], [-2.711, -3.802], [-2.507, -3.656], [-2.31, -3.51], [-2.122, -3.364], [-1.941, -3.217], [-1.769, -3.071], [-1.604, -2.925], [-1.448, -2.779], [-1.299, -2.632], [-1.159, -2.486], [-1.027, -2.34], [-0.902, -2.194], [-0.786, -2.047], [-0.678, -1.901], [-0.578, -1.755], [-0.485, -1.609], [-0.401, -1.462], [-0.325, -1.316], [-0.257, -1.17], [-0.197, -1.024], [-0.144, -0.878], [-0.1, -0.731], [-0.064, -0.585], [-0.036, -0.439], [-0.016, -0.293], [-0.004, -0.146], [0, 0], [-0.004, 0.146], [-0.016, 0.293], [-0.036, 0.439], [-0.064, 0.585], [-0.1, 0.731], [-0.144, 0.877], [-0.197, 1.024], [-0.257, 1.17], [-0.325, 1.316], [-0.401, 1.463], [-0.485, 1.609], [-0.578, 1.755], [-0.678, 1.901], [-0.786, 2.047], [-0.902, 2.194], [-1.027, 2.34], [-1.159, 2.486], [-1.299, 2.632], [-1.448, 2.779], [-1.604, 2.925], [-1.769, 3.071], [-1.941, 3.217], [-2.122, 3.364], [-2.31, 3.51], [-2.507, 3.656], [-2.711, 3.803], [-2.924, 3.949], [-3.144, 4.095], [-3.373, 4.241], [-3.609, 4.388], [-3.854, 4.534], [-4.107, 4.68], [-4.367, 4.826], [-4.636, 4.973], [-4.913, 5.119], [-5.198, 5.265], [-5.49, 5.411], [-5.791, 5.557], [-6.1, 5.704], [-6.417, 5.85]], step: 1 },
            { kind: "label", at: [-5.6, 2.4], label: "3y² = −16x", labelAt: "e", step: 1 },
            { kind: "point", at: [-1.3333, 0], label: "S(−4/3, 0)", labelAt: "nw", step: 3 },
            { kind: "line", through: [[1.3333, -1], [1.3333, 1]], dashed: true, tone: "muted", step: 3 },
            { kind: "label", at: [1.3333, 4.5], label: "x = 4/3", labelAt: "e", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q1(iv)" },
      stem: t`The directrix of the parabola $x^2 = -8y$ is:`,
      verify: { kind: "locus", inputs: { A: "1", B: "0", C: "8", D: "0" }, params: { sq: "x", ask: "directrix" } },
      options: [
        { key: "A", text: t`$y = -2$`, correct: false, misconceptionId: "C03-M2", value: "y + 2" },
        { key: "B", text: t`$y = 8$`, correct: false, misconceptionId: "C03-M3", value: "y - 8" },
        { key: "C", text: t`$y = 2$`, correct: true, value: "y - 2" },
        { key: "D", text: t`$x = 2$`, correct: false, misconceptionId: "C03-M1", value: "x - 2" },
      ],
      solution: {
        steps: [
          t`The square is on $x$, so the axis is the $y$-axis; $-8y$ means the parabola opens downward.`,
          t`Compare with $x^2 = -4ay$: $4a = 8$, so $a = 2$. The focus is $(0, -2)$, below the vertex.`,
          t`The directrix is the same distance on the other side of the vertex: $y = 2$.`,
        ],
        figure: {
          alt: "The parabola x² = −8y opening downward from the origin. Its focus S(0, −2) is on the y-axis below the vertex, and the directrix y = 2 is the same distance above it.",
          axes: "xy",
          view: { x: [-7, 7], y: [-6.5, 3.5] },
          elements: [
            { kind: "curve", points: [[-7, -6.125], [-6.825, -5.823], [-6.65, -5.528], [-6.475, -5.241], [-6.3, -4.961], [-6.125, -4.689], [-5.95, -4.425], [-5.775, -4.169], [-5.6, -3.92], [-5.425, -3.679], [-5.25, -3.445], [-5.075, -3.219], [-4.9, -3.001], [-4.725, -2.791], [-4.55, -2.588], [-4.375, -2.393], [-4.2, -2.205], [-4.025, -2.025], [-3.85, -1.853], [-3.675, -1.688], [-3.5, -1.531], [-3.325, -1.382], [-3.15, -1.24], [-2.975, -1.106], [-2.8, -0.98], [-2.625, -0.861], [-2.45, -0.75], [-2.275, -0.647], [-2.1, -0.551], [-1.925, -0.463], [-1.75, -0.383], [-1.575, -0.31], [-1.4, -0.245], [-1.225, -0.188], [-1.05, -0.138], [-0.875, -0.096], [-0.7, -0.061], [-0.525, -0.034], [-0.35, -0.015], [-0.175, -0.004], [0, 0], [0.175, -0.004], [0.35, -0.015], [0.525, -0.034], [0.7, -0.061], [0.875, -0.096], [1.05, -0.138], [1.225, -0.188], [1.4, -0.245], [1.575, -0.31], [1.75, -0.383], [1.925, -0.463], [2.1, -0.551], [2.275, -0.647], [2.45, -0.75], [2.625, -0.861], [2.8, -0.98], [2.975, -1.106], [3.15, -1.24], [3.325, -1.382], [3.5, -1.531], [3.675, -1.688], [3.85, -1.853], [4.025, -2.025], [4.2, -2.205], [4.375, -2.393], [4.55, -2.588], [4.725, -2.791], [4.9, -3.001], [5.075, -3.219], [5.25, -3.445], [5.425, -3.679], [5.6, -3.92], [5.775, -4.169], [5.95, -4.425], [6.125, -4.689], [6.3, -4.961], [6.475, -5.241], [6.65, -5.528], [6.825, -5.823], [7, -6.125]], step: 1 },
            { kind: "label", at: [0.4, -4.5], label: "x² = −8y", labelAt: "e", step: 1 },
            { kind: "point", at: [0, -2], label: "S(0, −2)", labelAt: "e", step: 2 },
            { kind: "line", through: [[-1, 2], [1, 2]], tone: "good", step: 3 },
            { kind: "label", at: [4, 2], label: "y = 2", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q2" },
      stem: t`The equation of the parabola with vertex at the origin, axis along the $Y$-axis and passing through the point $(-10, -5)$ is:`,
      verify: { kind: "locus", inputs: { x1: "-10", y1: "-5" }, params: { ask: "equation", data: "point", axis: "y" } },
      options: [
        { key: "A", text: t`$2y^2 = -5x$`, correct: false, misconceptionId: "C03-M1", value: "5*x/2 + y**2" },
        { key: "B", text: t`$x^2 = 20y$`, correct: false, misconceptionId: "C03-M2", value: "x**2 - 20*y" },
        { key: "C", text: t`$x^2 = -5y$`, correct: false, misconceptionId: "C03-M3", value: "x**2 + 5*y" },
        { key: "D", text: t`$x^2 = -20y$`, correct: true, value: "x**2 + 20*y" },
      ],
      solution: {
        steps: [
          t`Vertex at the origin and axis along the $Y$-axis: the square goes on $x$, so the parabola is $x^2 = 4ay$, with $a$ of either sign.`,
          t`$(-10, -5)$ lies on it: $(-10)^2 = 4a(-5)$, so $100 = -20a$ and $a = -5$.`,
          t`So $x^2 = 4(-5)y$, that is $x^2 = -20y$. The point is below the vertex, so the parabola opens downward, with focus $(0, -5)$.`,
        ],
        figure: {
          alt: "The parabola x² = −20y opening downward from the origin and passing through P(−10, −5). Its focus S(0, −5) is on the y-axis.",
          axes: "xy",
          view: { x: [-13, 13], y: [-8.5, 2.5] },
          elements: [
            { kind: "point", at: [-10, -5], label: "P(−10, −5)", labelAt: "se", step: 2 },
            { kind: "curve", points: [[-13, -8.45], [-12.675, -8.033], [-12.35, -7.626], [-12.025, -7.23], [-11.7, -6.845], [-11.375, -6.47], [-11.05, -6.105], [-10.725, -5.751], [-10.4, -5.408], [-10.075, -5.075], [-9.75, -4.753], [-9.425, -4.442], [-9.1, -4.14], [-8.775, -3.85], [-8.45, -3.57], [-8.125, -3.301], [-7.8, -3.042], [-7.475, -2.794], [-7.15, -2.556], [-6.825, -2.329], [-6.5, -2.113], [-6.175, -1.907], [-5.85, -1.711], [-5.525, -1.526], [-5.2, -1.352], [-4.875, -1.188], [-4.55, -1.035], [-4.225, -0.893], [-3.9, -0.761], [-3.575, -0.639], [-3.25, -0.528], [-2.925, -0.428], [-2.6, -0.338], [-2.275, -0.259], [-1.95, -0.19], [-1.625, -0.132], [-1.3, -0.085], [-0.975, -0.048], [-0.65, -0.021], [-0.325, -0.005], [0, 0], [0.325, -0.005], [0.65, -0.021], [0.975, -0.048], [1.3, -0.085], [1.625, -0.132], [1.95, -0.19], [2.275, -0.259], [2.6, -0.338], [2.925, -0.428], [3.25, -0.528], [3.575, -0.639], [3.9, -0.76], [4.225, -0.893], [4.55, -1.035], [4.875, -1.188], [5.2, -1.352], [5.525, -1.526], [5.85, -1.711], [6.175, -1.907], [6.5, -2.113], [6.825, -2.329], [7.15, -2.556], [7.475, -2.794], [7.8, -3.042], [8.125, -3.301], [8.45, -3.57], [8.775, -3.85], [9.1, -4.141], [9.425, -4.442], [9.75, -4.753], [10.075, -5.075], [10.4, -5.408], [10.725, -5.751], [11.05, -6.105], [11.375, -6.47], [11.7, -6.845], [12.025, -7.23], [12.35, -7.626], [12.675, -8.033], [13, -8.45]], step: 3 },
            { kind: "point", at: [0, -5], label: "S(0, −5)", labelAt: "e", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q3" },
      stem: t`The equation of the parabola whose focus is $(0, -3)$ and whose directrix is $y = 3$ is:`,
      verify: { kind: "locus", inputs: { fx: "0", fy: "-3", d: "3" }, params: { ask: "equation", data: "focus_directrix", axis: "y" } },
      options: [
        { key: "A", text: t`$x^2 = 12y$`, correct: false, misconceptionId: "C03-M2", value: "x**2 - 12*y" },
        { key: "B", text: t`$x^2 = -3y$`, correct: false, misconceptionId: "C03-M3", value: "x**2 + 3*y" },
        { key: "C", text: t`$x^2 = -12y$`, correct: true, value: "x**2 + 12*y" },
        { key: "D", text: t`$y^2 = -12x$`, correct: false, misconceptionId: "C03-M1", value: "12*x + y**2" },
      ],
      solution: {
        steps: [
          t`The focus $(0, -3)$ is on the $y$-axis and the directrix $y = 3$ is horizontal, so the axis is the $y$-axis. The vertex is midway, at the origin.`,
          t`For a point $P(x, y)$ on the parabola, $SP^2 = PM^2$: $x^2 + (y + 3)^2 = (y - 3)^2$.`,
          t`Expand: $x^2 + y^2 + 6y + 9 = y^2 - 6y + 9$, so $x^2 = -12y$. It opens downward, towards the focus: $P(-6, -3)$ is $6$ from $S$ and $6$ from the directrix.`,
        ],
        figure: {
          alt: "The focus S(0, −3) and the directrix y = 3. The parabola x² = −12y through the origin opens downward towards the focus; its point P(−6, −3) is 6 from S and 6 from M(−6, 3) on the directrix.",
          axes: "xy",
          view: { x: [-9, 9], y: [-7.5, 4.5] },
          elements: [
            { kind: "point", at: [0, -3], label: "S(0, −3)", labelAt: "e", step: 1 },
            { kind: "line", through: [[-1, 3], [1, 3]], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [4, 3], label: "y = 3", labelAt: "n", tone: "muted", step: 1 },
            { kind: "curve", points: [[-9, -6.75], [-8.775, -6.417], [-8.55, -6.092], [-8.325, -5.775], [-8.1, -5.467], [-7.875, -5.168], [-7.65, -4.877], [-7.425, -4.594], [-7.2, -4.32], [-6.975, -4.054], [-6.75, -3.797], [-6.525, -3.548], [-6.3, -3.307], [-6.075, -3.075], [-5.85, -2.852], [-5.625, -2.637], [-5.4, -2.43], [-5.175, -2.232], [-4.95, -2.042], [-4.725, -1.86], [-4.5, -1.688], [-4.275, -1.523], [-4.05, -1.367], [-3.825, -1.219], [-3.6, -1.08], [-3.375, -0.949], [-3.15, -0.827], [-2.925, -0.713], [-2.7, -0.608], [-2.475, -0.51], [-2.25, -0.422], [-2.025, -0.342], [-1.8, -0.27], [-1.575, -0.207], [-1.35, -0.152], [-1.125, -0.105], [-0.9, -0.068], [-0.675, -0.038], [-0.45, -0.017], [-0.225, -0.004], [0, 0], [0.225, -0.004], [0.45, -0.017], [0.675, -0.038], [0.9, -0.068], [1.125, -0.105], [1.35, -0.152], [1.575, -0.207], [1.8, -0.27], [2.025, -0.342], [2.25, -0.422], [2.475, -0.51], [2.7, -0.607], [2.925, -0.713], [3.15, -0.827], [3.375, -0.949], [3.6, -1.08], [3.825, -1.219], [4.05, -1.367], [4.275, -1.523], [4.5, -1.688], [4.725, -1.86], [4.95, -2.042], [5.175, -2.232], [5.4, -2.43], [5.625, -2.637], [5.85, -2.852], [6.075, -3.075], [6.3, -3.308], [6.525, -3.548], [6.75, -3.797], [6.975, -4.054], [7.2, -4.32], [7.425, -4.594], [7.65, -4.877], [7.875, -5.168], [8.1, -5.468], [8.325, -5.775], [8.55, -6.092], [8.775, -6.417], [9, -6.75]], step: 3 },
            { kind: "segment", from: [0, -3], to: [-6, -3], tone: "good", step: 3 },
            { kind: "segment", from: [-6, -3], to: [-6, 3], tone: "good", dashed: true, step: 3 },
            { kind: "point", at: [-6, -3], label: "P(−6, −3)", labelAt: "nw", step: 3 },
            { kind: "point", at: [-6, 3], label: "M(−6, 3)", labelAt: "nw", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Ex 7.1 Q13" },
      stem: t`The focus of the parabola $y = x^2 - 2x + 3$ is:`,
      verify: { kind: "value", inputs: { A: "1", B: "-2", C: "-1", D: "3" }, params: { sq: "x", ask: "focus" } },
      options: [
        { key: "A", text: t`$(1, \frac{9}{4})$`, correct: true, value: "(1, 9/4)" },
        { key: "B", text: t`$(\frac{5}{4}, 2)$`, correct: false, misconceptionId: "C03-M1", value: "(5/4, 2)" },
        { key: "C", text: t`$(0, \frac{1}{4})$`, correct: false, misconceptionId: "C03-M4", value: "(0, 1/4)" },
        { key: "D", text: t`$(-1, - \frac{7}{4})$`, correct: false, misconceptionId: "C03-M5", value: "(-1, -7/4)" },
      ],
      solution: {
        steps: [
          t`Complete the square: $y = (x^2 - 2x + 1) + 2$, so $(x - 1)^2 = y - 2$.`,
          t`Put $X = x - 1$, $Y = y - 2$: $X^2 = Y$, which is $X^2 = 4aY$ with $4a = 1$, $a = \frac{1}{4}$. The vertex is $X = Y = 0$, that is $(1, 2)$, and it opens upward.`,
          t`The focus is $X = 0$, $Y = \frac{1}{4}$, so $x = 1$ and $y = 2 + \frac{1}{4}$: the focus is $\left(1, \frac{9}{4}\right)$.`,
        ],
        figure: {
          alt: "The parabola y = x² − 2x + 3, that is (x − 1)² = y − 2, opening upward from its vertex V(1, 2). The focus S(1, 9/4) is a quarter of a unit above the vertex.",
          axes: "xy",
          view: { x: [-0.6, 2.6], y: [1.2, 4.4] },
          elements: [
            { kind: "curve", points: [[-0.6, 4.56], [-0.56, 4.434], [-0.52, 4.31], [-0.48, 4.19], [-0.44, 4.074], [-0.4, 3.96], [-0.36, 3.85], [-0.32, 3.742], [-0.28, 3.638], [-0.24, 3.538], [-0.2, 3.44], [-0.16, 3.346], [-0.12, 3.254], [-0.08, 3.166], [-0.04, 3.082], [0, 3], [0.04, 2.922], [0.08, 2.846], [0.12, 2.774], [0.16, 2.706], [0.2, 2.64], [0.24, 2.578], [0.28, 2.518], [0.32, 2.462], [0.36, 2.41], [0.4, 2.36], [0.44, 2.314], [0.48, 2.27], [0.52, 2.23], [0.56, 2.194], [0.6, 2.16], [0.64, 2.13], [0.68, 2.102], [0.72, 2.078], [0.76, 2.058], [0.8, 2.04], [0.84, 2.026], [0.88, 2.014], [0.92, 2.006], [0.96, 2.002], [1, 2], [1.04, 2.002], [1.08, 2.006], [1.12, 2.014], [1.16, 2.026], [1.2, 2.04], [1.24, 2.058], [1.28, 2.078], [1.32, 2.102], [1.36, 2.13], [1.4, 2.16], [1.44, 2.194], [1.48, 2.23], [1.52, 2.27], [1.56, 2.314], [1.6, 2.36], [1.64, 2.41], [1.68, 2.462], [1.72, 2.518], [1.76, 2.578], [1.8, 2.64], [1.84, 2.706], [1.88, 2.774], [1.92, 2.846], [1.96, 2.922], [2, 3], [2.04, 3.082], [2.08, 3.166], [2.12, 3.254], [2.16, 3.346], [2.2, 3.44], [2.24, 3.538], [2.28, 3.638], [2.32, 3.742], [2.36, 3.85], [2.4, 3.96], [2.44, 4.074], [2.48, 4.19], [2.52, 4.31], [2.56, 4.434], [2.6, 4.56]], step: 1 },
            { kind: "point", at: [1, 2], label: "V(1, 2)", labelAt: "s", step: 2 },
            { kind: "point", at: [1, 2.25], label: "S(1, 9/4)", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q2" },
      stem: t`The directrix of the parabola $x^2 - 4x - 8y + 12 = 0$ is:`,
      verify: { kind: "locus", inputs: { A: "1", B: "-4", C: "-8", D: "12" }, params: { sq: "x", ask: "directrix" } },
      options: [
        { key: "A", text: t`$y = -1$`, correct: true, value: "y + 1" },
        { key: "B", text: t`$y = -7$`, correct: false, misconceptionId: "C03-M3", value: "y + 7" },
        { key: "C", text: t`$y = -2$`, correct: false, misconceptionId: "C03-M4", value: "y + 2" },
        { key: "D", text: t`$y = -3$`, correct: false, misconceptionId: "C03-M5", value: "y + 3" },
      ],
      solution: {
        steps: [
          t`Complete the square in $x$: $x^2 - 4x + 4 = 8y - 12 + 4$, so $(x - 2)^2 = 8(y - 1)$.`,
          t`Put $X = x - 2$, $Y = y - 1$: $X^2 = 8Y$, so $4a = 8$ and $a = 2$. The vertex is $(2, 1)$ and the parabola opens upward; the focus is $2$ above it, at $(2, 3)$.`,
          t`The directrix is $2$ below the vertex: $Y = -2$, so $y - 1 = -2$, that is $y = -1$.`,
        ],
        figure: {
          alt: "The parabola (x − 2)² = 8(y − 1) opening upward from its vertex V(2, 1). The focus S(2, 3) is 2 above the vertex and the directrix y = −1 is 2 below it.",
          axes: "xy",
          view: { x: [-3, 7], y: [-2, 6] },
          elements: [
            { kind: "curve", points: [[-3, 4.125], [-2.875, 3.971], [-2.75, 3.82], [-2.625, 3.674], [-2.5, 3.531], [-2.375, 3.393], [-2.25, 3.258], [-2.125, 3.127], [-2, 3], [-1.875, 2.877], [-1.75, 2.758], [-1.625, 2.643], [-1.5, 2.531], [-1.375, 2.424], [-1.25, 2.32], [-1.125, 2.221], [-1, 2.125], [-0.875, 2.033], [-0.75, 1.945], [-0.625, 1.861], [-0.5, 1.781], [-0.375, 1.705], [-0.25, 1.633], [-0.125, 1.564], [0, 1.5], [0.125, 1.439], [0.25, 1.383], [0.375, 1.33], [0.5, 1.281], [0.625, 1.236], [0.75, 1.195], [0.875, 1.158], [1, 1.125], [1.125, 1.096], [1.25, 1.07], [1.375, 1.049], [1.5, 1.031], [1.625, 1.018], [1.75, 1.008], [1.875, 1.002], [2, 1], [2.125, 1.002], [2.25, 1.008], [2.375, 1.018], [2.5, 1.031], [2.625, 1.049], [2.75, 1.07], [2.875, 1.096], [3, 1.125], [3.125, 1.158], [3.25, 1.195], [3.375, 1.236], [3.5, 1.281], [3.625, 1.33], [3.75, 1.383], [3.875, 1.439], [4, 1.5], [4.125, 1.564], [4.25, 1.633], [4.375, 1.705], [4.5, 1.781], [4.625, 1.861], [4.75, 1.945], [4.875, 2.033], [5, 2.125], [5.125, 2.221], [5.25, 2.32], [5.375, 2.424], [5.5, 2.531], [5.625, 2.643], [5.75, 2.758], [5.875, 2.877], [6, 3], [6.125, 3.127], [6.25, 3.258], [6.375, 3.393], [6.5, 3.531], [6.625, 3.674], [6.75, 3.82], [6.875, 3.971], [7, 4.125]], step: 1 },
            { kind: "point", at: [2, 1], label: "V(2, 1)", labelAt: "s", step: 2 },
            { kind: "point", at: [2, 3], label: "S(2, 3)", labelAt: "e", tone: "muted", step: 2 },
            { kind: "line", through: [[0, -1], [1, -1]], tone: "good", step: 3 },
            { kind: "label", at: [5.5, -1], label: "y = −1", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
