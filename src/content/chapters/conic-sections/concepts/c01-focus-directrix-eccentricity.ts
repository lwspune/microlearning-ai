import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;
const r3 = (v: number) => Math.round(v * 1000) / 1000;

/** The parabola y² = 4x (focus S(1, 0), directrix x = −1, e = 1) out to x = 5.5: the upper half for `s = 1`, the lower for `s = −1`. */
const parabola = (s: 1 | -1): Pt[] =>
  Array.from({ length: 61 }, (_, i) => {
    const x = (5.5 * i) / 60;
    return [r3(x), r3(s * 2 * Math.sqrt(x))];
  });

/**
 * The ellipse (e < 1) with focus `S` that is `p` from its directrix, `dir` being the direction (degrees)
 * from the directrix to the focus: the points S + r(cos, sin) with r = ep / (1 − e cos φ).
 */
function focalEllipse(S: Pt, dir: number, p: number, e: number): Pt[] {
  return Array.from({ length: 121 }, (_, i) => {
    const phi = (2 * Math.PI * i) / 120;
    const r = (e * p) / (1 - e * Math.cos(phi));
    const a = phi + (dir * Math.PI) / 180;
    return [r3(S[0] + r * Math.cos(a)), r3(S[1] + r * Math.sin(a))];
  });
}

/** The focus S(1, 0) and directrix x = −1 that the idea slide and three formal slides share. */
const directrix: FigureElement = { kind: "line", through: [[-1, -1], [-1, 1]], tone: "muted" };
const directrixLabel = (at: Pt = [-1, 3.6]): FigureElement => ({ kind: "label", at, label: "x = −1", labelAt: "w", tone: "muted" });
const focus: FigureElement = { kind: "point", at: [1, 0], label: "S(1, 0)", labelAt: "ne" };
/** The three curves from S(1, 0) and x = −1: e = ½, 1, 2. */
const ellipseHalf: FigureElement = { kind: "ellipse", centre: [1.667, 0], rx: 1.333, ry: 1.155 };
const hyperbolaTwo = (branch: 1 | -1, step: number): FigureElement =>
  ({ kind: "hyperbola", centre: [-1.667, 0], a: 1.333, b: 2.309, axis: "x", branch, tone: "bad", step });

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A point $P$ moves so that it is always as far from the point $S(0, -3)$ as from the line $y = 3$. **What curve does it trace?**`,
    reveal: t`A parabola. For $P(x, y)$: $SP^2 = x^2 + (y + 3)^2$ and the distance to $y = 3$ is $|y - 3|$. Setting them equal and squaring, $x^2 + y^2 + 6y + 9 = y^2 - 6y + 9$, so $x^2 = -12y$. A fixed point, a fixed line and a fixed ratio of distances: that is every conic. Here the ratio is $1$.`,
  },
  explanation: {
    intuition: [
      t`Fix a point $S$, the **focus**, and a line, the **directrix**.`,
      t`A point $P$ moves: $SP$ is its distance from the focus, $PM$ its distance straight across to the directrix.`,
      t`It always keeps $SP = e \cdot PM$, where $e$ is a fixed number, the **eccentricity**.`,
      t`If $e = 1$, the two distances are equal, and $P$ traces a **parabola**.`,
      t`If $e < 1$, $P$ stays nearer the focus than the line, and its path closes up into an **ellipse**.`,
      t`If $e > 1$, $P$ is farther from the focus than the line, and its path opens into a **hyperbola**, in two pieces.`,
    ],
    formal: [
      {
        title: "The focus–directrix rule",
        points: [
          t`$SP$ is the distance from the moving point $P$ to the focus $S$: here $SP = 1$.`,
          t`$M$, the **foot of the perpendicular**, is where a line from $P$ at right angles to the directrix meets it.`,
          t`$PM$ is $P$'s distance from the directrix: here $PM = 2$.`,
          t`A **conic** is the path of a point $P$ for which $\frac{SP}{PM}$ is a fixed number $e$.`,
          t`That fixed number, the eccentricity, is always positive: $e > 0$.`,
          t`The focus distance goes on top, the directrix distance below: here $e = \frac{1}{2}$.`,
        ],
        figure: {
          alt: "The focus S(1, 0) and the directrix x = −1. A point P(1, 1) is 1 above S, so SP = 1. The foot of the perpendicular from P to the directrix is M(−1, 1), with a right angle marked there, and PM = 2. The path of P with SP/PM = ½ is an ellipse round S, drawn at the end.",
          axes: "xy",
          view: { x: [-2.5, 4.2], y: [-2, 2.5] },
          elements: [
            directrix,
            directrixLabel([-1, 2.1]),
            focus,
            { kind: "point", at: [1, 1], label: "P(1, 1)", labelAt: "nw", step: 1 },
            { kind: "segment", from: [1, 0], to: [1, 1], step: 1 },
            { kind: "label", at: [1, 0.62], label: "SP = 1", labelAt: "e", step: 1 },
            { kind: "point", at: [-1, 1], label: "M", labelAt: "w", tone: "muted", step: 2 },
            { kind: "angle", at: [-1, 1], from: 0, to: 90, step: 2 },
            { kind: "segment", from: [1, 1], to: [-1, 1], tone: "muted", step: 3 },
            { kind: "label", at: [-0.6, 1], label: "PM = 2", labelAt: "s", tone: "muted", step: 3 },
            { ...ellipseHalf, tone: "good", step: 4 },
            { kind: "label", at: [3, 0], label: "e = ½", labelAt: "ne", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "The eccentricity names the conic",
        points: [
          t`$e = 1$: the conic is a **parabola**.`,
          t`$0 < e < 1$: the conic is an **ellipse**.`,
          t`$e > 1$: the conic is a **hyperbola**.`,
          t`A **rectangular hyperbola** is one whose branches open at right angles, like $x^2 - y^2 = 4$.`,
          t`Every rectangular hyperbola has $e = \sqrt{2}$, about $1.41$.`,
        ],
        figure: {
          alt: "One focus S(1, 0) and one directrix x = −1 give a conic for each e. With e = 1 it is the parabola y² = 4x, opening to the right. With e = ½ it is an ellipse round S. With e = 2 it is a hyperbola: one branch curls round S, the other lies left of the directrix. With e = √2 it is a rectangular hyperbola, dashed, whose right branch lies between the parabola and the e = 2 branch.",
          axes: "xy",
          view: { x: [-5.5, 4.5], y: [-4.5, 4.5] },
          elements: [
            directrix,
            directrixLabel(),
            focus,
            { kind: "curve", points: parabola(1), tone: "good", step: 1 },
            { kind: "curve", points: parabola(-1), tone: "good", step: 1 },
            { kind: "label", at: [3.4, 2.6], label: "e = 1", labelAt: "e", tone: "good", step: 1 },
            { ...ellipseHalf, step: 2 },
            { kind: "label", at: [3, 0], label: "e = ½", labelAt: "ne", step: 2 },
            hyperbolaTwo(1, 3),
            hyperbolaTwo(-1, 3),
            { kind: "label", at: [-4.3, 0.8], label: "e = 2", labelAt: "w", tone: "bad", step: 3 },
            { kind: "hyperbola", centre: [-3, 0], a: 2.828, b: 2.828, axis: "x", branch: 1, tone: "muted", dashed: true, step: 4 },
            { kind: "label", at: [1.5, -3.5], label: "e = √2", labelAt: "e", tone: "muted", step: 5 },
          ],
        },
      },
      {
        title: "Equation of a conic",
        points: [
          t`Take the focus $S(x_1, y_1)$ and the directrix $lx + my + n = 0$.`,
          t`For a point $P(x, y)$, the distance formula gives $SP^2 = (x - x_1)^2 + (y - y_1)^2$.`,
          t`The distance from a point to a line gives $PM = \frac{|lx + my + n|}{\sqrt{l^2 + m^2}}$.`,
          t`Square $SP = e \cdot PM$, and square $e$ too: $SP^2 = e^2 \cdot PM^2$.`,
          t`So $(x - x_1)^2 + (y - y_1)^2$ equals $e^2 \cdot \frac{(lx + my + n)^2}{l^2 + m^2}$.`,
          t`Clear the fractions and expand: that is the conic's equation.`,
        ],
        figure: {
          alt: "A focus S(x₁, y₁) and a sloping directrix lx + my + n = 0. A point P(x, y) is joined to S, and to M, the foot of the perpendicular on the directrix, with a right angle at M. The rule SP² = e² · PM² is written at the top, and the conic it gives, here an ellipse round S, stretched away from the directrix, is drawn at the end.",
          axes: "xy",
          view: { x: [-1.5, 5.8], y: [-1.6, 4.6] },
          elements: [
            { kind: "line", through: [[2, 0], [0, 2]], tone: "muted", step: 1 },
            { kind: "label", at: [3.2, -1.2], label: "lx + my + n = 0", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [3, 2], label: "S(x₁, y₁)", labelAt: "se", step: 1 },
            { kind: "point", at: [2.25, 2.75], label: "P(x, y)", labelAt: "nw", step: 2 },
            { kind: "segment", from: [3, 2], to: [2.25, 2.75], step: 2 },
            { kind: "label", at: [2.625, 2.375], label: "SP", labelAt: "ne", step: 2 },
            { kind: "point", at: [0.75, 1.25], label: "M", labelAt: "sw", tone: "muted", step: 3 },
            { kind: "angle", at: [0.75, 1.25], from: 45, to: 135, step: 3 },
            { kind: "segment", from: [2.25, 2.75], to: [0.75, 1.25], tone: "muted", step: 3 },
            { kind: "label", at: [1.5, 2], label: "PM", labelAt: "nw", tone: "muted", step: 3 },
            { kind: "label", at: [2.5, 4.3], label: "SP² = e² · PM²", labelAt: "e", step: 4 },
            { kind: "curve", points: focalEllipse([3, 2], 45, 3 / Math.SQRT2, 0.5), tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Finding the eccentricity from a point",
        points: [
          t`To find $e$, take a known point $P$ of the conic: here $P(1, 4)$, with focus $S(1, 0)$ and directrix $x = -1$.`,
          t`$SP = 4$, straight up from $S$.`,
          t`The foot of the perpendicular is $M(-1, 4)$, so $PM = 2$.`,
          t`So $e = \frac{SP}{PM} = \frac{4}{2} = 2$, and the conic is a hyperbola.`,
        ],
        figure: {
          alt: "The focus S(1, 0), the directrix x = −1 and the point P(1, 4). SP = 4, straight up from S. M(−1, 4) is the foot of the perpendicular from P, and PM = 2. So e = 2, and the hyperbola with that focus, directrix and eccentricity is drawn through P at the end.",
          axes: "xy",
          view: { x: [-5.5, 4.5], y: [-4.5, 5.6] },
          elements: [
            { ...directrix, step: 1 },
            { ...directrixLabel([-1, -3.6]), step: 1 },
            { ...focus, step: 1 },
            { kind: "point", at: [1, 4], label: "P(1, 4)", labelAt: "ne", step: 1 },
            { kind: "segment", from: [1, 0], to: [1, 4], step: 2 },
            { kind: "label", at: [1, 2], label: "SP = 4", labelAt: "e", step: 2 },
            { kind: "point", at: [-1, 4], label: "M(−1, 4)", labelAt: "w", tone: "muted", step: 3 },
            { kind: "segment", from: [1, 4], to: [-1, 4], tone: "muted", step: 3 },
            { kind: "label", at: [-0.5, 4], label: "PM = 2", labelAt: "n", tone: "muted", step: 3 },
            hyperbolaTwo(1, 4),
            hyperbolaTwo(-1, 4),
            { kind: "label", at: [-4.3, 0.8], label: "e = 2", labelAt: "w", tone: "bad", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the equation of the conic with focus $(1, 0)$, directrix $x = 4$ and eccentricity $\frac{1}{2}$, and name it.`,
      steps: [
        t`Take $P(x, y)$. $SP^2 = (x - 1)^2 + y^2$. The directrix is $x - 4 = 0$, and $\sqrt{1^2 + 0^2} = 1$, so $PM = |x - 4|$.`,
        t`$SP = \frac{1}{2}PM$. Square both sides, $e$ included: $(x - 1)^2 + y^2 = \frac{1}{4}(x - 4)^2$.`,
        t`Multiply by $4$ and expand: $4x^2 - 8x + 4 + 4y^2$ $= x^2 - 8x + 16$, so $3x^2 + 4y^2 = 12$.`,
        t`Divide by $12$: $\frac{x^2}{4} + \frac{y^2}{3} = 1$. Since $e = \frac{1}{2} < 1$, it is an ellipse.`,
      ],
      answer: t`$3x^2 + 4y^2 = 12$, that is $\frac{x^2}{4} + \frac{y^2}{3} = 1$: an ellipse.`,
      figure: {
        alt: "The focus S(1, 0) and the directrix x = 4. A point P(−1, −1.5) is joined to S and, by a horizontal segment, to M(4, −1.5) on the directrix: SP = 2.5 is half of PM = 5. The ellipse x²/4 + y²/3 = 1 through P is drawn at the end.",
        axes: "xy",
        view: { x: [-3.5, 6.5], y: [-3, 3] },
        elements: [
          { kind: "line", through: [[4, -1], [4, 1]], tone: "muted", step: 1 },
          { kind: "label", at: [4, 2.3], label: "x = 4", labelAt: "e", tone: "muted", step: 1 },
          { kind: "point", at: [1, 0], label: "S(1, 0)", labelAt: "n", step: 1 },
          { kind: "point", at: [-1, -1.5], label: "P(−1, −1.5)", labelAt: "sw", step: 1 },
          { kind: "point", at: [4, -1.5], label: "M(4, −1.5)", labelAt: "e", tone: "muted", step: 1 },
          { kind: "segment", from: [1, 0], to: [-1, -1.5], step: 1 },
          { kind: "segment", from: [-1, -1.5], to: [4, -1.5], tone: "muted", step: 1 },
          { kind: "label", at: [0, -0.75], label: "SP", labelAt: "nw", step: 1 },
          { kind: "label", at: [2.5, -1.5], label: "PM", labelAt: "s", tone: "muted", step: 1 },
          { kind: "ellipse", centre: [0, 0], rx: 2, ry: 1.732, tone: "good", step: 4 },
          { kind: "label", at: [-3.4, 2.5], label: "x²/4 + y²/3 = 1", labelAt: "e", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "One focus S(1, 0) and one directrix x = −1. A point P(1, 2) is joined to S, and straight across to M(−1, 2) on the directrix: SP and PM are both 2. Then three curves: with e = 1 the parabola y² = 4x through P, with its vertex at the origin, opening to the right. With e = 1/2 an ellipse around S, between the directrix and x = 3. With e = 2 a hyperbola: one branch curls round S, the other lies left of the directrix.",
      axes: "xy",
      view: { x: [-5.5, 4.5], y: [-4.5, 4.5] },
      elements: [
        { ...directrix, step: 1 },
        { ...directrixLabel(), step: 1 },
        { ...focus, step: 1 },
        { kind: "point", at: [1, 2], label: "P", labelAt: "ne", step: 2 },
        { kind: "segment", from: [1, 0], to: [1, 2], step: 2 },
        { kind: "label", at: [1, 1.5], label: "SP", labelAt: "e", step: 2 },
        { kind: "point", at: [-1, 2], label: "M", labelAt: "w", tone: "muted", step: 2 },
        { kind: "segment", from: [1, 2], to: [-1, 2], tone: "muted", step: 2 },
        { kind: "label", at: [-0.5, 2], label: "PM", labelAt: "n", tone: "muted", step: 2 },
        { kind: "curve", points: parabola(1), tone: "good", step: 4 },
        { kind: "curve", points: parabola(-1), tone: "good", step: 4 },
        { kind: "label", at: [3.4, 2.6], label: "e = 1", labelAt: "e", tone: "good", step: 4 },
        { ...ellipseHalf, step: 5 },
        { kind: "label", at: [3, 0], label: "e = ½", labelAt: "ne", step: 5 },
        hyperbolaTwo(1, 6),
        hyperbolaTwo(-1, 6),
        { kind: "label", at: [-4.3, 0.8], label: "e = 2", labelAt: "w", tone: "bad", step: 6 },
      ],
    },
    visualSpec: t`Drag $P$ along the curve and watch $SP$ and $PM$ change while their ratio stays $e$; a slider for $e$ morphs the curve from an ellipse ($e < 1$) through a parabola ($e = 1$) to a hyperbola ($e > 1$), with the focus and directrix fixed.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Takes $PM = |lx + my + n|$, without dividing by $\sqrt{l^2 + m^2}$.`,
      remediation: t`The distance from $P(x, y)$ to $lx + my + n = 0$ is $\frac{|lx + my + n|}{\sqrt{l^2 + m^2}}$. The root is $1$ only for a line like $x = c$ or $y = c$; otherwise divide by it before you square.`,
      fallback: { kind: "ext", topic: "distance of a point from a line" },
    },
    {
      id: "C01-M2",
      mistake: t`Squares $SP$ and $PM$ but not $e$: writes $SP^2 = e \cdot PM^2$, and finds $e$ as $\frac{SP^2}{PM^2}$.`,
      remediation: t`Squaring $SP = e \cdot PM$ squares every factor: $SP^2 = e^2 \cdot PM^2$. And $e$ itself is $\frac{SP}{PM}$, the ratio of the distances, not of their squares.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Turns the ratio upside down: takes $PM = e \cdot SP$, so $e = \frac{PM}{SP}$.`,
      remediation: t`$e = \frac{SP}{PM}$: the distance from the focus over the distance from the directrix. On an ellipse $P$ is always nearer the focus than the directrix, so $e < 1$; on a hyperbola $e > 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Copies the focus's signs into $SP$: writes $(x + x_1)^2 + (y + y_1)^2$ for the focus $(x_1, y_1)$.`,
      remediation: t`The distance from $P(x, y)$ to $S(x_1, y_1)$ subtracts the focus's coordinates: $SP^2 = (x - x_1)^2 + (y - y_1)^2$. For $S(2, -5)$ that is $(x - 2)^2 + (y + 5)^2$.`,
      fallback: { kind: "ext", topic: "distance formula" },
    },
    {
      id: "C01-M5",
      mistake: t`Treats every focus–directrix curve as a parabola: takes $SP = PM$ whatever $e$ is.`,
      remediation: t`$SP = PM$ is only the case $e = 1$, the parabola. For any other eccentricity keep it in: $SP = e \cdot PM$. An ellipse has $e < 1$ and a hyperbola $e > 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Takes a fixed ratio of distances to give a circle, as for $PA = k \cdot PB$ with two fixed points $A$ and $B$.`,
      remediation: t`A fixed ratio of distances from two points gives a circle. Here one of the two is a line, the directrix, so the path is a conic, named by the ratio $e$: below $1$ an ellipse, $1$ a parabola, above $1$ a hyperbola.`,
      fallback: { kind: "ext", topic: "locus of a point" },
    },
  ],
  engineNotes: [
    t`C01-M2, C01-M3 and C01-M5 give the key when $e = 1$ (a parabola): draw equation and eccentricity items with $e \ne 1$.`,
    t`C01-M1 gives the key when $l^2 + m^2 = 1$ (a directrix $x = c$ or $y = c$), and C01-M4 when the focus is the origin.`,
    t`On equation items C01-M1 and C01-M2 agree when $e(l^2 + m^2) = 1$ (e.g. $e = \frac{1}{2}$ with $x - y + 3 = 0$): never show both then.`,
    "Naming items detect only C01-M3, C01-M5 and C01-M6; the distance slips (C01-M1, C01-M2, C01-M4) don't change the name.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "authored" },
      stem: t`The equation of the conic with focus $(-1, 1)$, directrix $x - y + 3 = 0$ and eccentricity $\frac{1}{2}$ is:`,
      verify: { kind: "locus", inputs: { a: "-1", b: "1", l: "1", m: "-1", n: "3", e: "1/2" }, params: { ask: "eq" } },
      options: [
        { key: "A", text: t`$7x^2 + 2xy + 7y^2 + 10x - 10y + 7 = 0$`, correct: true, value: "7*x**2/8 + x*y/4 + 5*x/4 + 7*y**2/8 - 5*y/4 + 7/8" },
        { key: "B", text: t`$3x^2 + 2xy + 3y^2 + 2x - 2y - 1 = 0$`, correct: false, misconceptionId: "C01-M1", value: "3*x**2/4 + x*y/2 + x/2 + 3*y**2/4 - y/2 - 1/4" },
        { key: "C", text: t`$x^2 - 4xy + y^2 + 10x - 10y + 16 = 0$`, correct: false, misconceptionId: "C01-M3", value: "-x**2 + 4*x*y - 10*x - y**2 + 10*y - 16" },
        { key: "D", text: t`$7x^2 + 2xy + 7y^2 - 22x + 22y + 7 = 0$`, correct: false, misconceptionId: "C01-M4", value: "7*x**2/8 + x*y/4 - 11*x/4 + 7*y**2/8 + 11*y/4 + 7/8" },
      ],
      solution: {
        steps: [
          t`Take $P(x, y)$: $SP^2 = (x + 1)^2 + (y - 1)^2$ and $PM = \frac{|x - y + 3|}{\sqrt{1^2 + (-1)^2}} = \frac{|x - y + 3|}{\sqrt{2}}$.`,
          t`$SP = \frac{1}{2}PM$, squared: $(x + 1)^2 + (y - 1)^2 = \frac{1}{4} \cdot \frac{(x - y + 3)^2}{2} = \frac{(x - y + 3)^2}{8}$.`,
          t`Multiply by $8$: $8x^2 + 8y^2 + 16x - 16y + 16 = x^2 + y^2 - 2xy + 6x - 6y + 9$, so $7x^2 + 2xy + 7y^2 + 10x - 10y + 7 = 0$, an ellipse ($e < 1$).`,
        ],
        figure: {
          alt: "The focus S(−1, 1) and the directrix x − y + 3 = 0, a line sloping up through (−3, 0) and (0, 3). The answer is a small ellipse round S, on the side away from the directrix.",
          axes: "xy",
          view: { x: [-2.2, 0.4], y: [-0.1, 2.3] },
          elements: [
            { kind: "line", through: [[-3, 0], [0, 3]], tone: "muted", step: 1 },
            { kind: "label", at: [-2.15, 2.05], label: "x − y + 3 = 0", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [-1, 1], label: "S(−1, 1)", labelAt: "se", step: 1 },
            { kind: "curve", points: [[-0.5, 0.5], [-0.494, 0.507], [-0.487, 0.513], [-0.481, 0.52], [-0.475, 0.528], [-0.47, 0.535], [-0.464, 0.542], [-0.459, 0.55], [-0.453, 0.557], [-0.449, 0.565], [-0.444, 0.573], [-0.439, 0.581], [-0.435, 0.589], [-0.431, 0.598], [-0.427, 0.606], [-0.423, 0.615], [-0.42, 0.623], [-0.416, 0.632], [-0.413, 0.64], [-0.41, 0.649], [-0.408, 0.658], [-0.405, 0.667], [-0.403, 0.676], [-0.401, 0.685], [-0.399, 0.694], [-0.398, 0.703], [-0.396, 0.712], [-0.395, 0.721], [-0.394, 0.73], [-0.393, 0.739], [-0.393, 0.749], [-0.393, 0.758], [-0.392, 0.767], [-0.392, 0.776], [-0.393, 0.785], [-0.393, 0.794], [-0.394, 0.803], [-0.394, 0.812], [-0.395, 0.821], [-0.396, 0.83], [-0.398, 0.839], [-0.399, 0.847], [-0.401, 0.856], [-0.403, 0.865], [-0.404, 0.873], [-0.407, 0.882], [-0.409, 0.89], [-0.411, 0.899], [-0.414, 0.907], [-0.416, 0.915], [-0.419, 0.924], [-0.422, 0.932], [-0.425, 0.94], [-0.428, 0.947], [-0.431, 0.955], [-0.435, 0.963], [-0.438, 0.971], [-0.442, 0.978], [-0.445, 0.985], [-0.449, 0.993], [-0.453, 1], [-0.457, 1.007], [-0.461, 1.014], [-0.465, 1.021], [-0.469, 1.028], [-0.474, 1.034], [-0.478, 1.041], [-0.482, 1.048], [-0.487, 1.054], [-0.491, 1.06], [-0.496, 1.066], [-0.501, 1.072], [-0.505, 1.078], [-0.51, 1.084], [-0.515, 1.09], [-0.52, 1.096], [-0.525, 1.101], [-0.53, 1.106], [-0.535, 1.112], [-0.54, 1.117], [-0.545, 1.122], [-0.55, 1.127], [-0.555, 1.132], [-0.56, 1.137], [-0.565, 1.141], [-0.57, 1.146], [-0.575, 1.15], [-0.58, 1.155], [-0.586, 1.159], [-0.591, 1.163], [-0.596, 1.167], [-0.601, 1.171], [-0.607, 1.175], [-0.612, 1.179], [-0.617, 1.183], [-0.622, 1.186], [-0.627, 1.19], [-0.633, 1.193], [-0.638, 1.197], [-0.643, 1.2], [-0.648, 1.203], [-0.654, 1.206], [-0.659, 1.209], [-0.664, 1.212], [-0.669, 1.215], [-0.674, 1.218], [-0.679, 1.22], [-0.685, 1.223], [-0.69, 1.225], [-0.695, 1.228], [-0.7, 1.23], [-0.705, 1.233], [-0.71, 1.235], [-0.715, 1.237], [-0.72, 1.239], [-0.725, 1.241], [-0.73, 1.243], [-0.735, 1.245], [-0.74, 1.247], [-0.745, 1.248], [-0.75, 1.25], [-0.755, 1.252], [-0.76, 1.253], [-0.765, 1.255], [-0.769, 1.256], [-0.774, 1.257], [-0.779, 1.259], [-0.784, 1.26], [-0.789, 1.261], [-0.793, 1.262], [-0.798, 1.263], [-0.803, 1.264], [-0.807, 1.265], [-0.812, 1.266], [-0.816, 1.267], [-0.821, 1.268], [-0.826, 1.269], [-0.83, 1.269], [-0.835, 1.27], [-0.839, 1.271], [-0.843, 1.271], [-0.848, 1.272], [-0.852, 1.272], [-0.857, 1.272], [-0.861, 1.273], [-0.865, 1.273], [-0.87, 1.273], [-0.874, 1.274], [-0.878, 1.274], [-0.882, 1.274], [-0.886, 1.274], [-0.891, 1.274], [-0.895, 1.274], [-0.899, 1.274], [-0.903, 1.274], [-0.907, 1.274], [-0.911, 1.274], [-0.915, 1.274], [-0.919, 1.274], [-0.923, 1.273], [-0.927, 1.273], [-0.931, 1.273], [-0.935, 1.273], [-0.938, 1.272], [-0.942, 1.272], [-0.946, 1.271], [-0.95, 1.271], [-0.954, 1.27], [-0.957, 1.27], [-0.961, 1.269], [-0.965, 1.269], [-0.968, 1.268], [-0.972, 1.267], [-0.975, 1.267], [-0.979, 1.266], [-0.983, 1.265], [-0.986, 1.265], [-0.99, 1.264], [-0.993, 1.263], [-0.997, 1.262], [-1, 1.261], [-1.003, 1.26], [-1.007, 1.259], [-1.01, 1.258], [-1.013, 1.257], [-1.017, 1.256], [-1.02, 1.255], [-1.023, 1.254], [-1.027, 1.253], [-1.03, 1.252], [-1.033, 1.251], [-1.036, 1.25], [-1.039, 1.249], [-1.043, 1.247], [-1.046, 1.246], [-1.049, 1.245], [-1.052, 1.244], [-1.055, 1.242], [-1.058, 1.241], [-1.061, 1.24], [-1.064, 1.238], [-1.067, 1.237], [-1.07, 1.236], [-1.073, 1.234], [-1.076, 1.233], [-1.078, 1.231], [-1.081, 1.23], [-1.084, 1.228], [-1.087, 1.227], [-1.09, 1.225], [-1.093, 1.223], [-1.095, 1.222], [-1.098, 1.22], [-1.101, 1.219], [-1.103, 1.217], [-1.106, 1.215], [-1.109, 1.213], [-1.111, 1.212], [-1.114, 1.21], [-1.117, 1.208], [-1.119, 1.206], [-1.122, 1.205], [-1.124, 1.203], [-1.127, 1.201], [-1.129, 1.199], [-1.132, 1.197], [-1.134, 1.195], [-1.137, 1.193], [-1.139, 1.191], [-1.142, 1.19], [-1.144, 1.188], [-1.146, 1.186], [-1.149, 1.184], [-1.151, 1.181], [-1.153, 1.179], [-1.156, 1.177], [-1.158, 1.175], [-1.16, 1.173], [-1.162, 1.171], [-1.164, 1.169], [-1.167, 1.167], [-1.169, 1.164], [-1.171, 1.162], [-1.173, 1.16], [-1.175, 1.158], [-1.177, 1.156], [-1.179, 1.153], [-1.181, 1.151], [-1.184, 1.149], [-1.186, 1.146], [-1.188, 1.144], [-1.19, 1.142], [-1.191, 1.139], [-1.193, 1.137], [-1.195, 1.134], [-1.197, 1.132], [-1.199, 1.129], [-1.201, 1.127], [-1.203, 1.124], [-1.205, 1.122], [-1.206, 1.119], [-1.208, 1.117], [-1.21, 1.114], [-1.212, 1.111], [-1.213, 1.109], [-1.215, 1.106], [-1.217, 1.103], [-1.219, 1.101], [-1.22, 1.098], [-1.222, 1.095], [-1.223, 1.093], [-1.225, 1.09], [-1.227, 1.087], [-1.228, 1.084], [-1.23, 1.081], [-1.231, 1.078], [-1.233, 1.076], [-1.234, 1.073], [-1.236, 1.07], [-1.237, 1.067], [-1.238, 1.064], [-1.24, 1.061], [-1.241, 1.058], [-1.242, 1.055], [-1.244, 1.052], [-1.245, 1.049], [-1.246, 1.046], [-1.247, 1.043], [-1.249, 1.039], [-1.25, 1.036], [-1.251, 1.033], [-1.252, 1.03], [-1.253, 1.027], [-1.254, 1.023], [-1.255, 1.02], [-1.256, 1.017], [-1.257, 1.013], [-1.258, 1.01], [-1.259, 1.007], [-1.26, 1.003], [-1.261, 1], [-1.262, 0.997], [-1.263, 0.993], [-1.264, 0.99], [-1.265, 0.986], [-1.265, 0.983], [-1.266, 0.979], [-1.267, 0.975], [-1.267, 0.972], [-1.268, 0.968], [-1.269, 0.965], [-1.269, 0.961], [-1.27, 0.957], [-1.27, 0.954], [-1.271, 0.95], [-1.271, 0.946], [-1.272, 0.942], [-1.272, 0.938], [-1.273, 0.935], [-1.273, 0.931], [-1.273, 0.927], [-1.273, 0.923], [-1.274, 0.919], [-1.274, 0.915], [-1.274, 0.911], [-1.274, 0.907], [-1.274, 0.903], [-1.274, 0.899], [-1.274, 0.895], [-1.274, 0.891], [-1.274, 0.886], [-1.274, 0.882], [-1.274, 0.878], [-1.274, 0.874], [-1.273, 0.87], [-1.273, 0.865], [-1.273, 0.861], [-1.272, 0.857], [-1.272, 0.852], [-1.272, 0.848], [-1.271, 0.843], [-1.271, 0.839], [-1.27, 0.835], [-1.269, 0.83], [-1.269, 0.826], [-1.268, 0.821], [-1.267, 0.816], [-1.266, 0.812], [-1.265, 0.807], [-1.264, 0.803], [-1.263, 0.798], [-1.262, 0.793], [-1.261, 0.789], [-1.26, 0.784], [-1.259, 0.779], [-1.257, 0.774], [-1.256, 0.769], [-1.255, 0.765], [-1.253, 0.76], [-1.252, 0.755], [-1.25, 0.75], [-1.248, 0.745], [-1.247, 0.74], [-1.245, 0.735], [-1.243, 0.73], [-1.241, 0.725], [-1.239, 0.72], [-1.237, 0.715], [-1.235, 0.71], [-1.233, 0.705], [-1.23, 0.7], [-1.228, 0.695], [-1.225, 0.69], [-1.223, 0.685], [-1.22, 0.679], [-1.218, 0.674], [-1.215, 0.669], [-1.212, 0.664], [-1.209, 0.659], [-1.206, 0.654], [-1.203, 0.648], [-1.2, 0.643], [-1.197, 0.638], [-1.193, 0.633], [-1.19, 0.627], [-1.186, 0.622], [-1.183, 0.617], [-1.179, 0.612], [-1.175, 0.607], [-1.171, 0.601], [-1.167, 0.596], [-1.163, 0.591], [-1.159, 0.586], [-1.155, 0.58], [-1.15, 0.575], [-1.146, 0.57], [-1.141, 0.565], [-1.137, 0.56], [-1.132, 0.555], [-1.127, 0.55], [-1.122, 0.545], [-1.117, 0.54], [-1.112, 0.535], [-1.106, 0.53], [-1.101, 0.525], [-1.096, 0.52], [-1.09, 0.515], [-1.084, 0.51], [-1.078, 0.505], [-1.072, 0.501], [-1.066, 0.496], [-1.06, 0.491], [-1.054, 0.487], [-1.048, 0.482], [-1.041, 0.478], [-1.034, 0.474], [-1.028, 0.469], [-1.021, 0.465], [-1.014, 0.461], [-1.007, 0.457], [-1, 0.453], [-0.993, 0.449], [-0.985, 0.445], [-0.978, 0.442], [-0.971, 0.438], [-0.963, 0.435], [-0.955, 0.431], [-0.947, 0.428], [-0.94, 0.425], [-0.932, 0.422], [-0.924, 0.419], [-0.915, 0.416], [-0.907, 0.414], [-0.899, 0.411], [-0.89, 0.409], [-0.882, 0.407], [-0.873, 0.404], [-0.865, 0.403], [-0.856, 0.401], [-0.847, 0.399], [-0.839, 0.398], [-0.83, 0.396], [-0.821, 0.395], [-0.812, 0.394], [-0.803, 0.394], [-0.794, 0.393], [-0.785, 0.393], [-0.776, 0.392], [-0.767, 0.392], [-0.758, 0.393], [-0.749, 0.393], [-0.739, 0.393], [-0.73, 0.394], [-0.721, 0.395], [-0.712, 0.396], [-0.703, 0.398], [-0.694, 0.399], [-0.685, 0.401], [-0.676, 0.403], [-0.667, 0.405], [-0.658, 0.408], [-0.649, 0.41], [-0.64, 0.413], [-0.632, 0.416], [-0.623, 0.42], [-0.615, 0.423], [-0.606, 0.427], [-0.598, 0.431], [-0.589, 0.435], [-0.581, 0.439], [-0.573, 0.444], [-0.565, 0.449], [-0.557, 0.453], [-0.55, 0.459], [-0.542, 0.464], [-0.535, 0.47], [-0.528, 0.475], [-0.52, 0.481], [-0.513, 0.487], [-0.507, 0.494], [-0.5, 0.5]], tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`The equation of the conic with focus $(1, 1)$, directrix $x - y - 3 = 0$ and eccentricity $\sqrt{2}$ is:`,
      verify: { kind: "locus", inputs: { a: "1", b: "1", l: "1", m: "-1", n: "-3", e: "sqrt(2)" }, params: { ask: "eq" } },
      options: [
        { key: "A", text: t`$2xy + 4x - 8y - 7 = 0$`, correct: true, value: "2*x*y + 4*x - 8*y - 7" },
        { key: "B", text: t`$x^2 - 4xy + y^2 - 10x + 14y + 16 = 0$`, correct: false, misconceptionId: "C01-M1", value: "-x**2 + 4*x*y + 10*x - y**2 - 14*y - 16" },
        { key: "C", text: t`$2xy + 8x - 4y - 7 = 0$`, correct: false, misconceptionId: "C01-M4", value: "2*x*y + 8*x - 4*y - 7" },
        { key: "D", text: t`$x^2 + 2xy + y^2 + 2x - 10y - 5 = 0$`, correct: false, misconceptionId: "C01-M5", value: "x**2/2 + x*y + x + y**2/2 - 5*y - 5/2" },
      ],
      solution: {
        steps: [
          t`Take $P(x, y)$: $SP^2 = (x - 1)^2 + (y - 1)^2$ and $PM^2 = \frac{(x - y - 3)^2}{1^2 + (-1)^2} = \frac{(x - y - 3)^2}{2}$.`,
          t`$SP^2 = e^2 \cdot PM^2$ with $e^2 = 2$: $(x - 1)^2 + (y - 1)^2 = (x - y - 3)^2$.`,
          t`Expand: $x^2 + y^2 - 2x - 2y + 2 = x^2 + y^2 - 2xy - 6x + 6y + 9$, so $2xy + 4x - 8y - 7 = 0$, a hyperbola ($e > 1$).`,
        ],
        figure: {
          alt: "The focus S(1, 1) and the directrix x − y − 3 = 0, a line through (3, 0) and (0, −3). The answer 2xy + 4x − 8y − 7 = 0 is a hyperbola with centre (4, −2): one branch wraps round S, the other lies across the directrix, below and to the right.",
          axes: "xy",
          view: { x: [-3, 9], y: [-7, 4] },
          elements: [
            { kind: "line", through: [[3, 0], [0, -3]], tone: "muted", step: 1 },
            { kind: "label", at: [6.5, 2.2], label: "x − y − 3 = 0", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [1, 1], label: "S(1, 1)", labelAt: "n", step: 1 },
            { kind: "curve", points: [[-3, -1.357], [-2.95, -1.353], [-2.9, -1.348], [-2.85, -1.343], [-2.8, -1.338], [-2.75, -1.333], [-2.7, -1.328], [-2.65, -1.323], [-2.6, -1.318], [-2.55, -1.313], [-2.5, -1.308], [-2.45, -1.302], [-2.4, -1.297], [-2.35, -1.291], [-2.3, -1.286], [-2.25, -1.28], [-2.2, -1.274], [-2.15, -1.268], [-2.1, -1.262], [-2.05, -1.256], [-2, -1.25], [-1.95, -1.244], [-1.9, -1.237], [-1.85, -1.231], [-1.8, -1.224], [-1.75, -1.217], [-1.7, -1.211], [-1.65, -1.204], [-1.6, -1.196], [-1.55, -1.189], [-1.5, -1.182], [-1.45, -1.174], [-1.4, -1.167], [-1.35, -1.159], [-1.3, -1.151], [-1.25, -1.143], [-1.2, -1.135], [-1.15, -1.126], [-1.1, -1.118], [-1.05, -1.109], [-1, -1.1], [-0.95, -1.091], [-0.9, -1.082], [-0.85, -1.072], [-0.8, -1.062], [-0.75, -1.053], [-0.7, -1.043], [-0.65, -1.032], [-0.6, -1.022], [-0.55, -1.011], [-0.5, -1], [-0.45, -0.989], [-0.4, -0.977], [-0.35, -0.966], [-0.3, -0.953], [-0.25, -0.941], [-0.2, -0.929], [-0.15, -0.916], [-0.1, -0.902], [-0.05, -0.889], [0, -0.875], [0.05, -0.861], [0.1, -0.846], [0.15, -0.831], [0.2, -0.816], [0.25, -0.8], [0.3, -0.784], [0.35, -0.767], [0.4, -0.75], [0.45, -0.732], [0.5, -0.714], [0.55, -0.696], [0.6, -0.676], [0.65, -0.657], [0.7, -0.636], [0.75, -0.615], [0.8, -0.594], [0.85, -0.571], [0.9, -0.548], [0.95, -0.525], [1, -0.5], [1.05, -0.475], [1.1, -0.448], [1.15, -0.421], [1.2, -0.393], [1.25, -0.364], [1.3, -0.333], [1.35, -0.302], [1.4, -0.269], [1.45, -0.235], [1.5, -0.2], [1.55, -0.163], [1.6, -0.125], [1.65, -0.085], [1.7, -0.043], [1.75, 0], [1.8, 0.045], [1.85, 0.093], [1.9, 0.143], [1.95, 0.195], [2, 0.25], [2.05, 0.308], [2.1, 0.368], [2.15, 0.432], [2.2, 0.5], [2.25, 0.571], [2.3, 0.647], [2.35, 0.727], [2.4, 0.813], [2.45, 0.903], [2.5, 1], [2.55, 1.103], [2.6, 1.214], [2.65, 1.333], [2.7, 1.462], [2.75, 1.6], [2.8, 1.75], [2.85, 1.913], [2.9, 2.091], [2.95, 2.286], [3, 2.5], [3.05, 2.737], [3.1, 3], [3.15, 3.294], [3.2, 3.625], [3.25, 4], [3.3, 4.429], [3.35, 4.923], [3.4, 5.5], [3.45, 6.182], [3.5, 7], [3.55, 8], [3.6, 9.25], [3.65, 10.857], [3.7, 13]], tone: "good", step: 3 },
            { kind: "curve", points: [[4.3, -17], [4.35, -14.857], [4.4, -13.25], [4.45, -12], [4.5, -11], [4.55, -10.182], [4.6, -9.5], [4.65, -8.923], [4.7, -8.429], [4.75, -8], [4.8, -7.625], [4.85, -7.294], [4.9, -7], [4.95, -6.737], [5, -6.5], [5.05, -6.286], [5.1, -6.091], [5.15, -5.913], [5.2, -5.75], [5.25, -5.6], [5.3, -5.462], [5.35, -5.333], [5.4, -5.214], [5.45, -5.103], [5.5, -5], [5.55, -4.903], [5.6, -4.812], [5.65, -4.727], [5.7, -4.647], [5.75, -4.571], [5.8, -4.5], [5.85, -4.432], [5.9, -4.368], [5.95, -4.308], [6, -4.25], [6.05, -4.195], [6.1, -4.143], [6.15, -4.093], [6.2, -4.045], [6.25, -4], [6.3, -3.957], [6.35, -3.915], [6.4, -3.875], [6.45, -3.837], [6.5, -3.8], [6.55, -3.765], [6.6, -3.731], [6.65, -3.698], [6.7, -3.667], [6.75, -3.636], [6.8, -3.607], [6.85, -3.579], [6.9, -3.552], [6.95, -3.525], [7, -3.5], [7.05, -3.475], [7.1, -3.452], [7.15, -3.429], [7.2, -3.406], [7.25, -3.385], [7.3, -3.364], [7.35, -3.343], [7.4, -3.324], [7.45, -3.304], [7.5, -3.286], [7.55, -3.268], [7.6, -3.25], [7.65, -3.233], [7.7, -3.216], [7.75, -3.2], [7.8, -3.184], [7.85, -3.169], [7.9, -3.154], [7.95, -3.139], [8, -3.125], [8.05, -3.111], [8.1, -3.098], [8.15, -3.084], [8.2, -3.071], [8.25, -3.059], [8.3, -3.047], [8.35, -3.034], [8.4, -3.023], [8.45, -3.011], [8.5, -3], [8.55, -2.989], [8.6, -2.978], [8.65, -2.968], [8.7, -2.957], [8.75, -2.947], [8.8, -2.938], [8.85, -2.928], [8.9, -2.918], [8.95, -2.909], [9, -2.9]], tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`A point $P$ moves so that $3SP = 2PM$, where $S$ is the point $(1, -2)$ and $PM$ is the perpendicular distance of $P$ from the line $x - y + 1 = 0$. The path of $P$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-2", l: "1", m: "-1", n: "1", e: "2/3" }, params: { ask: "name" } },
      options: [
        { key: "A", text: t`A parabola`, correct: false, misconceptionId: "C01-M5", value: "parabola" },
        { key: "B", text: t`A circle`, correct: false, misconceptionId: "C01-M6", value: "circle" },
        { key: "C", text: t`An ellipse`, correct: true, value: "ellipse" },
        { key: "D", text: t`A hyperbola`, correct: false, misconceptionId: "C01-M3", value: "hyperbola" },
      ],
      solution: {
        steps: [
          t`$3SP = 2PM$ gives $\frac{SP}{PM} = \frac{2}{3}$: the distance from the point over the distance from the line. So $e = \frac{2}{3}$, with focus $S$ and directrix $x - y + 1 = 0$.`,
          t`$e = \frac{2}{3} < 1$, so the path is an ellipse.`,
        ],
        figure: {
          alt: "The point S(1, −2) and the line x − y + 1 = 0. The path with SP = (2/3)PM is an ellipse with S inside it, stretched away from the line, down and to the right as far as (5, −6).",
          axes: "xy",
          view: { x: [-4, 8], y: [-8, 2] },
          elements: [
            { kind: "line", through: [[-1, 0], [0, 1]], tone: "muted", step: 1 },
            { kind: "label", at: [-4, 1.3], label: "x − y + 1 = 0", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [1, -2], label: "S(1, −2)", labelAt: "ne", step: 1 },
            { kind: "curve", points: [[5, -6], [5.051, -5.947], [5.101, -5.891], [5.148, -5.834], [5.192, -5.775], [5.235, -5.714], [5.275, -5.651], [5.313, -5.587], [5.349, -5.521], [5.382, -5.454], [5.412, -5.386], [5.441, -5.316], [5.467, -5.245], [5.49, -5.173], [5.511, -5.1], [5.529, -5.026], [5.546, -4.952], [5.559, -4.877], [5.571, -4.801], [5.58, -4.725], [5.586, -4.648], [5.591, -4.571], [5.593, -4.494], [5.593, -4.417], [5.591, -4.339], [5.587, -4.262], [5.58, -4.185], [5.572, -4.108], [5.562, -4.031], [5.55, -3.955], [5.536, -3.879], [5.52, -3.803], [5.503, -3.728], [5.484, -3.654], [5.463, -3.58], [5.441, -3.507], [5.417, -3.435], [5.392, -3.364], [5.366, -3.293], [5.338, -3.223], [5.309, -3.155], [5.279, -3.087], [5.248, -3.02], [5.216, -2.954], [5.183, -2.889], [5.15, -2.825], [5.115, -2.763], [5.079, -2.701], [5.043, -2.64], [5.006, -2.581], [4.968, -2.522], [4.93, -2.465], [4.891, -2.409], [4.852, -2.354], [4.813, -2.3], [4.772, -2.247], [4.732, -2.196], [4.691, -2.145], [4.65, -2.096], [4.609, -2.047], [4.567, -2], [4.525, -1.954], [4.484, -1.909], [4.442, -1.865], [4.4, -1.822], [4.357, -1.78], [4.315, -1.739], [4.273, -1.699], [4.231, -1.66], [4.189, -1.623], [4.146, -1.586], [4.104, -1.55], [4.062, -1.515], [4.021, -1.481], [3.979, -1.448], [3.937, -1.416], [3.896, -1.384], [3.855, -1.354], [3.814, -1.325], [3.773, -1.296], [3.732, -1.268], [3.692, -1.241], [3.651, -1.215], [3.611, -1.189], [3.572, -1.164], [3.532, -1.14], [3.493, -1.117], [3.454, -1.095], [3.415, -1.073], [3.377, -1.052], [3.339, -1.031], [3.301, -1.011], [3.263, -0.992], [3.226, -0.974], [3.189, -0.956], [3.152, -0.939], [3.116, -0.922], [3.08, -0.906], [3.044, -0.89], [3.009, -0.875], [2.974, -0.861], [2.939, -0.847], [2.904, -0.833], [2.87, -0.82], [2.836, -0.808], [2.802, -0.796], [2.769, -0.784], [2.736, -0.773], [2.703, -0.763], [2.671, -0.752], [2.639, -0.743], [2.607, -0.733], [2.575, -0.724], [2.544, -0.716], [2.513, -0.708], [2.482, -0.7], [2.452, -0.693], [2.422, -0.686], [2.392, -0.679], [2.363, -0.673], [2.333, -0.667], [2.304, -0.661], [2.276, -0.656], [2.247, -0.651], [2.219, -0.646], [2.191, -0.642], [2.164, -0.637], [2.136, -0.634], [2.109, -0.63], [2.083, -0.627], [2.056, -0.624], [2.03, -0.621], [2.004, -0.619], [1.978, -0.616], [1.952, -0.614], [1.927, -0.613], [1.902, -0.611], [1.877, -0.61], [1.853, -0.609], [1.828, -0.608], [1.804, -0.607], [1.78, -0.607], [1.757, -0.607], [1.733, -0.607], [1.71, -0.607], [1.687, -0.607], [1.664, -0.608], [1.641, -0.609], [1.619, -0.61], [1.597, -0.611], [1.575, -0.612], [1.553, -0.613], [1.532, -0.615], [1.51, -0.617], [1.489, -0.619], [1.468, -0.621], [1.447, -0.623], [1.427, -0.626], [1.406, -0.628], [1.386, -0.631], [1.366, -0.634], [1.346, -0.637], [1.326, -0.64], [1.307, -0.643], [1.288, -0.647], [1.268, -0.65], [1.249, -0.654], [1.231, -0.658], [1.212, -0.662], [1.193, -0.666], [1.175, -0.67], [1.157, -0.675], [1.139, -0.679], [1.121, -0.684], [1.103, -0.688], [1.086, -0.693], [1.068, -0.698], [1.051, -0.703], [1.034, -0.708], [1.017, -0.713], [1, -0.718], [0.983, -0.724], [0.967, -0.729], [0.95, -0.735], [0.934, -0.741], [0.918, -0.747], [0.902, -0.753], [0.886, -0.759], [0.87, -0.765], [0.855, -0.771], [0.839, -0.777], [0.824, -0.784], [0.808, -0.79], [0.793, -0.797], [0.778, -0.803], [0.763, -0.81], [0.749, -0.817], [0.734, -0.824], [0.719, -0.831], [0.705, -0.838], [0.691, -0.845], [0.676, -0.853], [0.662, -0.86], [0.648, -0.867], [0.634, -0.875], [0.621, -0.883], [0.607, -0.89], [0.593, -0.898], [0.58, -0.906], [0.567, -0.914], [0.553, -0.922], [0.54, -0.93], [0.527, -0.938], [0.514, -0.947], [0.501, -0.955], [0.489, -0.963], [0.476, -0.972], [0.464, -0.98], [0.451, -0.989], [0.439, -0.998], [0.426, -1.007], [0.414, -1.016], [0.402, -1.025], [0.39, -1.034], [0.378, -1.043], [0.367, -1.052], [0.355, -1.061], [0.343, -1.071], [0.332, -1.08], [0.32, -1.09], [0.309, -1.099], [0.298, -1.109], [0.286, -1.119], [0.275, -1.129], [0.264, -1.139], [0.253, -1.149], [0.243, -1.159], [0.232, -1.169], [0.221, -1.179], [0.211, -1.19], [0.2, -1.2], [0.19, -1.211], [0.179, -1.221], [0.169, -1.232], [0.159, -1.243], [0.149, -1.253], [0.139, -1.264], [0.129, -1.275], [0.119, -1.286], [0.109, -1.298], [0.099, -1.309], [0.09, -1.32], [0.08, -1.332], [0.071, -1.343], [0.061, -1.355], [0.052, -1.367], [0.043, -1.378], [0.034, -1.39], [0.025, -1.402], [0.016, -1.414], [0.007, -1.426], [-0.002, -1.439], [-0.011, -1.451], [-0.02, -1.464], [-0.028, -1.476], [-0.037, -1.489], [-0.045, -1.501], [-0.053, -1.514], [-0.062, -1.527], [-0.07, -1.54], [-0.078, -1.553], [-0.086, -1.567], [-0.094, -1.58], [-0.102, -1.593], [-0.11, -1.607], [-0.117, -1.621], [-0.125, -1.634], [-0.133, -1.648], [-0.14, -1.662], [-0.147, -1.676], [-0.155, -1.691], [-0.162, -1.705], [-0.169, -1.719], [-0.176, -1.734], [-0.183, -1.749], [-0.19, -1.763], [-0.197, -1.778], [-0.203, -1.793], [-0.21, -1.808], [-0.216, -1.824], [-0.223, -1.839], [-0.229, -1.855], [-0.235, -1.87], [-0.241, -1.886], [-0.247, -1.902], [-0.253, -1.918], [-0.259, -1.934], [-0.265, -1.95], [-0.271, -1.967], [-0.276, -1.983], [-0.282, -2], [-0.287, -2.017], [-0.292, -2.034], [-0.297, -2.051], [-0.302, -2.068], [-0.307, -2.086], [-0.312, -2.103], [-0.316, -2.121], [-0.321, -2.139], [-0.325, -2.157], [-0.33, -2.175], [-0.334, -2.193], [-0.338, -2.212], [-0.342, -2.231], [-0.346, -2.249], [-0.35, -2.268], [-0.353, -2.288], [-0.357, -2.307], [-0.36, -2.326], [-0.363, -2.346], [-0.366, -2.366], [-0.369, -2.386], [-0.372, -2.406], [-0.374, -2.427], [-0.377, -2.447], [-0.379, -2.468], [-0.381, -2.489], [-0.383, -2.51], [-0.385, -2.532], [-0.387, -2.553], [-0.388, -2.575], [-0.389, -2.597], [-0.39, -2.619], [-0.391, -2.641], [-0.392, -2.664], [-0.393, -2.687], [-0.393, -2.71], [-0.393, -2.733], [-0.393, -2.757], [-0.393, -2.78], [-0.393, -2.804], [-0.392, -2.828], [-0.391, -2.853], [-0.39, -2.877], [-0.389, -2.902], [-0.387, -2.927], [-0.386, -2.952], [-0.384, -2.978], [-0.381, -3.004], [-0.379, -3.03], [-0.376, -3.056], [-0.373, -3.083], [-0.37, -3.109], [-0.366, -3.136], [-0.363, -3.164], [-0.358, -3.191], [-0.354, -3.219], [-0.349, -3.247], [-0.344, -3.276], [-0.339, -3.304], [-0.333, -3.333], [-0.327, -3.363], [-0.321, -3.392], [-0.314, -3.422], [-0.307, -3.452], [-0.3, -3.482], [-0.292, -3.513], [-0.284, -3.544], [-0.276, -3.575], [-0.267, -3.607], [-0.257, -3.639], [-0.248, -3.671], [-0.237, -3.703], [-0.227, -3.736], [-0.216, -3.769], [-0.204, -3.802], [-0.192, -3.836], [-0.18, -3.87], [-0.167, -3.904], [-0.153, -3.939], [-0.139, -3.974], [-0.125, -4.009], [-0.11, -4.044], [-0.094, -4.08], [-0.078, -4.116], [-0.061, -4.152], [-0.044, -4.189], [-0.026, -4.226], [-0.008, -4.263], [0.011, -4.301], [0.031, -4.339], [0.052, -4.377], [0.073, -4.415], [0.095, -4.454], [0.117, -4.493], [0.14, -4.532], [0.164, -4.572], [0.189, -4.611], [0.215, -4.651], [0.241, -4.692], [0.268, -4.732], [0.296, -4.773], [0.325, -4.814], [0.354, -4.855], [0.384, -4.896], [0.416, -4.937], [0.448, -4.979], [0.481, -5.021], [0.515, -5.062], [0.55, -5.104], [0.586, -5.146], [0.623, -5.189], [0.66, -5.231], [0.699, -5.273], [0.739, -5.315], [0.78, -5.357], [0.822, -5.4], [0.865, -5.442], [0.909, -5.484], [0.954, -5.525], [1, -5.567], [1.047, -5.609], [1.096, -5.65], [1.145, -5.691], [1.196, -5.732], [1.247, -5.772], [1.3, -5.813], [1.354, -5.852], [1.409, -5.891], [1.465, -5.93], [1.522, -5.968], [1.581, -6.006], [1.64, -6.043], [1.701, -6.079], [1.763, -6.115], [1.825, -6.15], [1.889, -6.183], [1.954, -6.216], [2.02, -6.248], [2.087, -6.279], [2.155, -6.309], [2.223, -6.338], [2.293, -6.366], [2.364, -6.392], [2.435, -6.417], [2.507, -6.441], [2.58, -6.463], [2.654, -6.484], [2.728, -6.503], [2.803, -6.52], [2.879, -6.536], [2.955, -6.55], [3.031, -6.562], [3.108, -6.572], [3.185, -6.58], [3.262, -6.587], [3.339, -6.591], [3.417, -6.593], [3.494, -6.593], [3.571, -6.591], [3.648, -6.586], [3.725, -6.58], [3.801, -6.571], [3.877, -6.559], [3.952, -6.546], [4.026, -6.529], [4.1, -6.511], [4.173, -6.49], [4.245, -6.467], [4.316, -6.441], [4.386, -6.412], [4.454, -6.382], [4.521, -6.349], [4.587, -6.313], [4.651, -6.275], [4.714, -6.235], [4.775, -6.192], [4.834, -6.148], [4.891, -6.101], [4.947, -6.051], [5, -6]], tone: "good", step: 2 },
            { kind: "label", at: [5.4, -3.2], label: "e = 2/3", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/conic-sections-11/Misc I Q11" },
      stem: t`The rectangular hyperbola $x^2 - y^2 = 8$ has a focus $S(4, 0)$ with directrix $x = 2$, and the point $P(3, 1)$ lies on it. Its eccentricity is:`,
      verify: { kind: "value", inputs: { a: "4", b: "0", l: "1", m: "0", n: "-2", px: "3", py: "1" }, params: { ask: "e" } },
      options: [
        { key: "A", text: t`$\sqrt{2}$`, correct: true, value: "sqrt(2)" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C01-M2", value: "2" },
        { key: "C", text: t`$\frac{1}{\sqrt{2}}$`, correct: false, misconceptionId: "C01-M3", value: "sqrt(2)/2" },
        { key: "D", text: t`$5 \sqrt{2}$`, correct: false, misconceptionId: "C01-M4", value: "5*sqrt(2)" },
      ],
      solution: {
        steps: [
          t`$SP = \sqrt{(3 - 4)^2 + (1 - 0)^2} = \sqrt{2}$.`,
          t`$M$ is the foot of the perpendicular on $x = 2$, so $M(2, 1)$ and $PM = |3 - 2| = 1$.`,
          t`$e = \frac{SP}{PM} = \frac{\sqrt{2}}{1} = \sqrt{2}$. Every rectangular hyperbola has $e = \sqrt{2}$.`,
        ],
        figure: {
          alt: "The right branch of the rectangular hyperbola x² − y² = 8, with its focus S(4, 0) and directrix x = 2. The point P(3, 1) on the branch is joined to S, a segment of length √2, and to M(2, 1) on the directrix, a segment of length 1.",
          axes: "xy",
          view: { x: [1, 5], y: [-1.5, 2.5] },
          elements: [
            { kind: "hyperbola", centre: [0, 0], a: 2.828, b: 2.828, axis: "x", branch: 1, tone: "muted" },
            { kind: "line", through: [[2, -1], [2, 1]], tone: "muted" },
            { kind: "label", at: [2, 2.2], label: "x = 2", labelAt: "w", tone: "muted" },
            { kind: "point", at: [4, 0], label: "S(4, 0)", labelAt: "ne" },
            { kind: "point", at: [3, 1], label: "P(3, 1)", labelAt: "nw" },
            { kind: "segment", from: [4, 0], to: [3, 1], step: 1 },
            { kind: "label", at: [3.5, 0.5], label: "√2", labelAt: "ne", step: 1 },
            { kind: "point", at: [2, 1], label: "M(2, 1)", labelAt: "nw", tone: "muted", step: 2 },
            { kind: "segment", from: [3, 1], to: [2, 1], tone: "muted", step: 2 },
            { kind: "label", at: [2.5, 1], label: "1", labelAt: "s", tone: "muted", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`A conic has focus $S(1, 2)$ and directrix $3x + 4y - 1 = 0$, and the point $P(4, 6)$ lies on it. Its eccentricity is:`,
      verify: { kind: "value", inputs: { a: "1", b: "2", l: "3", m: "4", n: "-1", px: "4", py: "6" }, params: { ask: "e" } },
      options: [
        { key: "A", text: t`$\frac{5}{7}$`, correct: true, value: "5/7" },
        { key: "B", text: t`$\frac{1}{7}$`, correct: false, misconceptionId: "C01-M1", value: "1/7" },
        { key: "C", text: t`$\frac{25}{49}$`, correct: false, misconceptionId: "C01-M2", value: "25/49" },
        { key: "D", text: t`$\frac{\sqrt{89}}{7}$`, correct: false, misconceptionId: "C01-M4", value: "sqrt(89)/7" },
      ],
      solution: {
        steps: [
          t`$SP = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{9 + 16} = 5$.`,
          t`$PM = \frac{|3(4) + 4(6) - 1|}{\sqrt{3^2 + 4^2}} = \frac{35}{5} = 7$.`,
          t`$e = \frac{SP}{PM} = \frac{5}{7}$. Since $e < 1$, the conic is an ellipse.`,
        ],
        figure: {
          alt: "The focus S(1, 2), the directrix 3x + 4y − 1 = 0 and the point P(4, 6). SP = 5. The perpendicular from P to the directrix, PM, has length 7.",
          axes: "xy",
          view: { x: [-3, 7], y: [-1.5, 7] },
          elements: [
            { kind: "line", through: [[3, -2], [-1, 1]], tone: "muted" },
            { kind: "label", at: [2.6, -1], label: "3x + 4y − 1 = 0", labelAt: "e", tone: "muted" },
            { kind: "point", at: [1, 2], label: "S(1, 2)", labelAt: "se" },
            { kind: "point", at: [4, 6], label: "P(4, 6)", labelAt: "ne" },
            { kind: "segment", from: [1, 2], to: [4, 6], step: 1 },
            { kind: "label", at: [2.5, 4], label: "SP = 5", labelAt: "se", step: 1 },
            { kind: "segment", from: [4, 6], to: [-0.2, 0.4], tone: "muted", step: 2 },
            { kind: "label", at: [1.9, 3.2], label: "PM = 7", labelAt: "nw", tone: "muted", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`The equation of the conic with focus $(3, 0)$, directrix $3x - 4 = 0$ and eccentricity $\frac{3}{2}$ is:`,
      verify: { kind: "locus", inputs: { a: "3", b: "0", l: "3", m: "0", n: "-4", e: "3/2" }, params: { ask: "eq" } },
      options: [
        { key: "A", text: t`$45x^2 + 81y^2 - 390x + 665 = 0$`, correct: false, misconceptionId: "C01-M3", value: "5*x**2/9 - 130*x/27 + y**2 + 665/81" },
        { key: "B", text: t`$9y^2 - 30x + 65 = 0$`, correct: false, misconceptionId: "C01-M5", value: "-10*x/3 + y**2 + 65/9" },
        { key: "C", text: t`$5x^2 - 4y^2 - 20 = 0$`, correct: true, value: "-5*x**2/4 + y**2 + 5" },
        { key: "D", text: t`$3x^2 - 6y^2 + 12x - 38 = 0$`, correct: false, misconceptionId: "C01-M2", value: "-x**2/2 - 2*x + y**2 + 19/3" },
      ],
      solution: {
        steps: [
          t`Take $P(x, y)$: $SP^2 = (x - 3)^2 + y^2$ and $PM = \frac{|3x - 4|}{\sqrt{3^2}} = \frac{|3x - 4|}{3}$.`,
          t`$SP^2 = e^2 \cdot PM^2 = \frac{9}{4} \cdot \frac{(3x - 4)^2}{9} = \frac{(3x - 4)^2}{4}$.`,
          t`Multiply by $4$: $4x^2 - 24x + 36 + 4y^2 = 9x^2 - 24x + 16$, so $5x^2 - 4y^2 - 20 = 0$, that is $\frac{x^2}{4} - \frac{y^2}{5} = 1$: a hyperbola.`,
        ],
        figure: {
          alt: "The hyperbola x²/4 − y²/5 = 1, with vertices (±2, 0), its focus S(3, 0) and the directrix 3x − 4 = 0, the line x = 4/3 between the centre and the right branch.",
          axes: "xy",
          view: { x: [-6, 6], y: [-5, 5] },
          elements: [
            { kind: "line", through: [[1.333, -1], [1.333, 1]], tone: "muted", step: 1 },
            { kind: "label", at: [1.333, 4.2], label: "x = 4/3", labelAt: "e", tone: "muted", step: 1 },
            { kind: "point", at: [3, 0], label: "S(3, 0)", labelAt: "ne", step: 1 },
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 2.236, axis: "x", branch: 1, tone: "good", step: 3 },
            { kind: "hyperbola", centre: [0, 0], a: 2, b: 2.236, axis: "x", branch: -1, tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
