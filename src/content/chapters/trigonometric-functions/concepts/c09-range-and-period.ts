import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** Plain axes (no grid or numbers) from `x[0]` to `x[1]` and `y[0]` to `y[1]`, named at their far ends. */
function axesOf(x: [number, number], y: [number, number], names: [string, string] = ["θ", "y"], origin: FigureElement["labelAt"] = "sw"): FigureElement[] {
  return [
    { kind: "segment", from: [x[0], 0], to: [x[1], 0], tone: "muted" },
    { kind: "label", at: [x[1], 0], label: names[0], labelAt: names[0] === "x" ? "s" : "n", tone: "muted" },
    { kind: "segment", from: [0, y[0]], to: [0, y[1]], tone: "muted" },
    { kind: "label", at: [0, y[1]], label: names[1], labelAt: "w", tone: "muted" },
    { kind: "point", at: [0, 0], label: "O", labelAt: origin, tone: "muted" },
  ];
}

/** A tick on the horizontal axis at `x`, named `label`. */
const xTick = (x: number, label: string, labelAt: FigureElement["labelAt"] = "s"): FigureElement[] => [
  { kind: "segment", from: [x, -0.06], to: [x, 0.06], tone: "muted" },
  { kind: "label", at: [x, 0], label, labelAt, tone: "muted" },
];

/** A tick on the vertical axis at `y`, named `label`. */
const yTick = (y: number, label: string): FigureElement[] => [
  { kind: "segment", from: [-0.06, y], to: [0.06, y], tone: "muted" },
  { kind: "label", at: [0, y], label, labelAt: "w", tone: "muted" },
];

/**
 * Points of the graph y = f(θ) for θ from `a` to `b`, drawn at (sx·θ, sy·f(θ)): the horizontal
 * scale `sx` squeezes the θ-axis so a whole period fits a phone, `sy` stretches the values.
 */
function graphOf(f: (th: number) => number, a: number, b: number, sx: number, sy = 1, n = 60): Pt[] {
  const r = (v: number) => Math.round(v * 1000) / 1000;
  return Array.from({ length: n + 1 }, (_, i) => {
    const th = a + ((b - a) * i) / n;
    return [r(sx * th), r(sy * f(th))];
  });
}

const PI = Math.PI;
/** π/2 to one unit: the range figures for sine, cosine and secant. */
const HALF_PI = 2 / PI;
/** The secant and tangent figures stop where the value reaches 2.4 and 2.3 in size. */
const SEC_CUT = Math.acos(1 / 2.4);
const TAN_CUT = Math.atan(2.3);
/** The least-value figure: π/4 to 1.5 units, values halved; its curves stop at 6.6. */
const LEAST_X = 6 / PI;
const TAN2_CUT = Math.atan(Math.sqrt(6.6));
const SUM_LO = Math.atan(Math.sqrt((6.6 - Math.sqrt(6.6 ** 2 - 4)) / 2));
/** The period figure: π to 1.5 units, values stretched by 1.2. */
const PERIOD_X = 1.5 / PI;
const sec = (th: number) => 1 / Math.cos(th);
const tan2 = (th: number) => Math.tan(th) ** 2;
const cot2 = (th: number) => 1 / Math.tan(th) ** 2;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Is there an angle with $\sec\theta = \frac{1}{2}$? One with $\tan\theta = 100$?`,
    reveal: t`No angle has $\sec\theta = \frac{1}{2}$: $\sec\theta = \frac{r}{x}$ and $x$ is never bigger than $r$ in size, so $\sec\theta$ is never between $-1$ and $1$. But $\tan\theta = 100$ is fine: take the point $(1, 100)$, then $\tan\theta = \frac{y}{x} = 100$. Each function has its own **range**.`,
  },
  explanation: {
    intuition: [
      t`Take a point $P(x, y)$ on the terminal arm of $\theta$, at distance $r$ from the origin $O$.`,
      t`Each co-ordinate, in size (ignoring its sign), is a side of a right triangle whose longest side is $r$.`,
      t`So $\sin\theta = \frac{y}{r}$ and $\cos\theta = \frac{x}{r}$ always lie between $-1$ and $1$, ends included.`,
      t`Their **reciprocals**, the same fractions turned upside down, $\operatorname{cosec}\theta = \frac{r}{y}$ and $\sec\theta = \frac{r}{x}$, are at least $1$ in size.`,
      t`But $\tan\theta = \frac{y}{x}$ has no cap: near the $y$-axis, $x$ is tiny and $\frac{y}{x}$ is huge.`,
      t`One full turn, $2\pi$, brings $P$ back to the same place, so every value repeats after $2\pi$.`,
    ],
    formal: [
      {
        title: "Range of sine and cosine",
        points: [
          t`The **range** of a function is the set of all the values it takes.`,
          t`As $\theta$ runs from $0$ to $2\pi$, $\sin\theta$ rises and falls between $-1$ and $1$.`,
          t`Its highest value is $\sin\frac{\pi}{2} = \sin 90^\circ = 1$.`,
          t`Its lowest value is $\sin\frac{3\pi}{2} = \sin 270^\circ = -1$.`,
          t`So the range of $\sin\theta$ is $-1 \le \sin\theta \le 1$, both ends included.`,
          t`Likewise $-1 \le \cos\theta \le 1$, with $\cos 0^\circ = 1$ and $\cos 180^\circ = -1$.`,
        ],
        figure: {
          alt: "The graph of y = sin θ for θ from 0 to 2π. It rises to its highest value, 1, at π/2, falls to its lowest value, −1, at 3π/2, and comes back to 0 at 2π, never leaving the dashed lines y = 1 and y = −1. The dashed graph of y = cos θ stays between the same lines: 1 at 0, −1 at π.",
          axes: "none",
          view: { x: [-0.6, 4.9], y: [-1.5, 1.55] },
          elements: [
            ...axesOf([-0.4, 4.6], [-1.4, 1.45]),
            ...xTick(1, "π/2"),
            ...xTick(2, "π", "sw"),
            ...xTick(3, "3π/2"),
            ...xTick(4, "2π", "se"),
            ...yTick(1, "1"),
            ...yTick(-1, "−1"),
            { kind: "curve", points: graphOf(Math.sin, 0, 2 * PI, HALF_PI), step: 2 },
            { kind: "label", at: [2.75, 0.45], label: "y = sin θ", step: 2 },
            { kind: "point", at: [1, 1], label: "highest: 1", labelAt: "n", step: 3 },
            { kind: "point", at: [3, -1], label: "lowest: −1", labelAt: "s", step: 4 },
            { kind: "segment", from: [0, 1], to: [4.4, 1], dashed: true, tone: "muted", step: 5 },
            { kind: "segment", from: [0, -1], to: [4.4, -1], dashed: true, tone: "muted", step: 5 },
            { kind: "curve", points: graphOf(Math.cos, 0, 2 * PI, HALF_PI), dashed: true, tone: "good", step: 6 },
            { kind: "label", at: [0.6, -0.75], label: "y = cos θ", tone: "good", step: 6 },
            { kind: "point", at: [0, 1], tone: "good", step: 6 },
            { kind: "point", at: [2, -1], tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Range of secant and cosecant",
        points: [
          t`$\sec\theta = \frac{1}{\cos\theta}$, the reciprocal of $\cos\theta$.`,
          t`$\cos\theta$ stays in the band from $-1$ to $1$.`,
          t`One divided by a number in that band is at least $1$ in size: $\frac{1}{0.5} = 2$.`,
          t`So $\sec\theta \le -1$ or $\sec\theta \ge 1$: its graph never enters the band.`,
          t`Where $\cos\theta = 0$, at $\frac{\pi}{2}$ and $\frac{3\pi}{2}$, $\sec\theta$ is not defined: we cannot divide by $0$.`,
          t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$ behaves the same: $\operatorname{cosec}\theta \le -1$ or $\operatorname{cosec}\theta \ge 1$.`,
        ],
        figure: {
          alt: "For θ from 0 to 2π, the dashed graph of y = cos θ stays inside the shaded band from −1 to 1. The graph of y = sec θ, its reciprocal, stays outside the band: it rises from 1 at θ = 0, comes up from below to −1 at π, and comes back down to 1 at 2π. At π/2 and 3π/2, where cos θ = 0, dashed upright lines mark where sec θ is not defined.",
          axes: "none",
          view: { x: [-0.6, 4.7], y: [-2.6, 2.6] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [-1, 1]] }, { kind: "halfPlane", through: [[0, -1], [1, -1]] }], tone: "muted", step: 2 },
            ...axesOf([-0.4, 4.5], [-2.5, 2.5]),
            ...xTick(1, "π/2", "sw"),
            ...xTick(2, "π"),
            ...xTick(3, "3π/2", "se"),
            ...xTick(4, "2π"),
            ...yTick(1, "1"),
            ...yTick(-1, "−1"),
            { kind: "curve", points: graphOf(Math.cos, 0, 2 * PI, HALF_PI), dashed: true, tone: "good", step: 1 },
            { kind: "label", at: [0.55, -0.75], label: "y = cos θ", tone: "good", step: 1 },
            { kind: "curve", points: graphOf(sec, 0, SEC_CUT, HALF_PI, 1, 30), step: 3 },
            { kind: "curve", points: graphOf(sec, PI - SEC_CUT, PI + SEC_CUT, HALF_PI, 1, 40), step: 3 },
            { kind: "curve", points: graphOf(sec, 2 * PI - SEC_CUT, 2 * PI, HALF_PI, 1, 30), step: 3 },
            { kind: "label", at: [2, 1.7], label: "y = sec θ", step: 3 },
            { kind: "label", at: [2, 0.4], label: "no sec θ here", tone: "bad", step: 4 },
            { kind: "segment", from: [1, -2.5], to: [1, 2.5], dashed: true, tone: "muted", step: 5 },
            { kind: "segment", from: [3, -2.5], to: [3, 2.5], dashed: true, tone: "muted", step: 5 },
          ],
        },
      },
      {
        title: "Range of tangent and cotangent",
        points: [
          t`As $\theta$ climbs from $0$ towards $\frac{\pi}{2}$, $\tan\theta$ grows past any number you name.`,
          t`As $\theta$ falls from $0$ towards $-\frac{\pi}{2}$, $\tan\theta$ falls below any number.`,
          t`At $\theta = \pm\frac{\pi}{2}$, $x = 0$, so $\tan\theta = \frac{y}{x}$ is not defined.`,
          t`Every horizontal line, such as $y = 2$ or $y = -1$, meets the graph.`,
          t`So $\tan\theta$ takes every real value, positive or negative, big or small.`,
          t`$\cot\theta = \frac{x}{y}$ also takes every real value.`,
        ],
        figure: {
          alt: "The graph of y = tan θ for θ between −π/2 and π/2. It passes through O, climbs without end as θ nears π/2 and falls without end as θ nears −π/2; dashed upright lines at ±π/2 mark where tan θ is not defined. The horizontal lines y = 2 and y = −1 each meet the graph once.",
          axes: "none",
          view: { x: [-2.3, 2.4], y: [-2.5, 2.5] },
          elements: [
            ...axesOf([-2.2, 2.3], [-2.4, 2.4]),
            ...xTick(PI / 2, "π/2", "se"),
            ...xTick(-PI / 2, "−π/2", "nw"),
            { kind: "curve", points: graphOf(Math.tan, 0, TAN_CUT, 1, 1, 40), step: 1 },
            { kind: "label", at: [0.9, 1.26], label: "y = tan θ", labelAt: "se", step: 1 },
            { kind: "curve", points: graphOf(Math.tan, -TAN_CUT, 0, 1, 1, 40), step: 2 },
            { kind: "segment", from: [PI / 2, -2.4], to: [PI / 2, 2.4], dashed: true, tone: "muted", step: 3 },
            { kind: "segment", from: [-PI / 2, -2.4], to: [-PI / 2, 2.4], dashed: true, tone: "muted", step: 3 },
            { kind: "segment", from: [-2.1, 2], to: [2.1, 2], dashed: true, tone: "good", step: 4 },
            { kind: "label", at: [-1.1, 2], label: "y = 2", tone: "good", step: 4 },
            { kind: "point", at: [Math.atan(2), 2], tone: "good", step: 4 },
            { kind: "segment", from: [-2.1, -1], to: [2.1, -1], dashed: true, tone: "good", step: 4 },
            { kind: "label", at: [1.1, -1], label: "y = −1", labelAt: "s", tone: "good", step: 4 },
            { kind: "point", at: [-PI / 4, -1], tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Rejecting impossible roots",
        points: [
          t`Some equations become a quadratic in one function, such as $\cos\theta$.`,
          t`For example, $3\cos^2\theta + 5\cos\theta - 2 = 0$.`,
          t`It factorises: $(3\cos\theta - 1)(\cos\theta + 2) = 0$.`,
          t`So $\cos\theta = \frac{1}{3}$ or $\cos\theta = -2$.`,
          t`Test each root against that function's range: here $\cos\theta$ runs from $-1$ to $1$.`,
          t`A root outside the range gives no angle: drop $-2$, keep $\frac{1}{3}$.`,
        ],
        figure: {
          alt: "A number line from −2 to 2. The two roots, cos θ = 1/3 and cos θ = −2, are marked on it. The range of cos θ, from −1 to 1, is drawn over the line: 1/3 lies inside it and is kept; −2 lies outside it, so no angle gives it and it is dropped.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-1.0, 0.85] },
          elements: [
            { kind: "segment", from: [-2.6, 0], to: [2.6, 0], tone: "muted" },
            ...xTick(-2, "−2"),
            ...xTick(-1, "−1"),
            ...xTick(0, "0"),
            ...xTick(1, "1"),
            ...xTick(2, "2"),
            { kind: "point", at: [1 / 3, 0], label: "cos θ = 1/3", labelAt: "n", step: 4 },
            { kind: "point", at: [-2, 0], label: "cos θ = −2", labelAt: "n", step: 4 },
            { kind: "segment", from: [-1, 0], to: [1, 0], tone: "good", step: 5 },
            { kind: "point", at: [-1, 0], tone: "good", step: 5 },
            { kind: "point", at: [1, 0], tone: "good", step: 5 },
            { kind: "label", at: [0, -0.5], label: "range of cos θ", labelAt: "s", tone: "good", step: 5 },
            { kind: "label", at: [1 / 3, 0.38], label: "keep", tone: "good", step: 6 },
            { kind: "label", at: [-2, 0.38], label: "drop: no angle", tone: "bad", step: 6 },
          ],
        },
      },
      {
        title: "Least values",
        points: [
          t`The **least value** of an expression is the smallest value it actually takes.`,
          t`$\tan\theta$ and $\cot\theta$ are tied: $\tan\theta \cot\theta = 1$, so they are never both $0$.`,
          t`Since $2\tan\theta\cot\theta = 2$, $\tan^2\theta + \cot^2\theta$ $= (\tan\theta - \cot\theta)^2 + 2$.`,
          t`A square is never negative, so $\tan^2\theta + \cot^2\theta \ge 2$.`,
          t`It equals $2$ when $\tan\theta = \cot\theta$, at $45^\circ$: the least value is $2$, not $0$.`,
          t`Using $\sin^2\theta + \cos^2\theta = 1$, $1 - 2\sin\theta\cos\theta$ $= (\sin\theta - \cos\theta)^2 \ge 0$.`,
        ],
        figure: {
          alt: "For θ between 0 and π/2: the dashed graph of tan²θ starts at 0 and climbs; the dashed graph of cot²θ comes down to 0 at π/2. Each reaches 0, but never at the same θ. Their sum, tan²θ + cot²θ, is a U-shaped graph that never goes below the dashed line at 2; it touches it at π/4, which is 45°: the least value is 2.",
          axes: "none",
          view: { x: [-0.75, 3.5], y: [-0.45, 3.4] },
          elements: [
            ...axesOf([-0.3, 3.3], [-0.3, 3.35]),
            ...xTick(1.5, "π/4"),
            ...xTick(3, "π/2"),
            ...yTick(1, "2"),
            ...yTick(2, "4"),
            ...yTick(3, "6"),
            { kind: "curve", points: graphOf(tan2, 0, TAN2_CUT, LEAST_X, 0.5), dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [0.6, 0.05], label: "tan²θ", tone: "muted", step: 2 },
            { kind: "curve", points: graphOf(cot2, PI / 2 - TAN2_CUT, PI / 2, LEAST_X, 0.5), dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [2.4, 0.05], label: "cot²θ", tone: "muted", step: 2 },
            { kind: "curve", points: graphOf((th) => tan2(th) + cot2(th), SUM_LO, PI / 2 - SUM_LO, LEAST_X, 0.5), step: 3 },
            { kind: "label", at: [1.5, 2.6], label: "tan²θ + cot²θ", step: 3 },
            { kind: "segment", from: [0, 1], to: [3.2, 1], dashed: true, tone: "good", step: 4 },
            { kind: "segment", from: [1.5, 0], to: [1.5, 1], dashed: true, tone: "muted", step: 5 },
            { kind: "point", at: [1.5, 1], label: "2", labelAt: "n", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Period of sine and cosine",
        points: [
          t`A function is **periodic** when its values repeat after a fixed step in $\theta$.`,
          t`The smallest such step is its **period**.`,
          t`A full turn, $2\pi$, brings the terminal arm back, so $\sin(\theta + 2\pi) = \sin\theta$.`,
          t`So the graph of $\sin\theta$ repeats every $2\pi$: its period is $2\pi$.`,
          t`In the same way, $\cos(\theta + 2\pi) = \cos\theta$: $\cos\theta$ also has period $2\pi$.`,
          t`So do their reciprocals, $\operatorname{cosec}\theta$ and $\sec\theta$.`,
        ],
        figure: {
          alt: "The graph of y = sin θ for θ from 0 to 4π: two identical waves. The peaks at π/2 and 5π/2 are both 1, and 2π apart. The first wave, from 0 to 2π, is marked as one period: after it, the graph repeats.",
          axes: "none",
          view: { x: [-0.6, 6.6], y: [-2.05, 1.95] },
          elements: [
            ...axesOf([-0.4, 6.4], [-1.45, 1.6]),
            ...xTick(1.5, "π", "sw"),
            ...xTick(3, "2π", "se"),
            ...xTick(4.5, "3π", "sw"),
            ...xTick(6, "4π", "se"),
            ...yTick(1.2, "1"),
            ...yTick(-1.2, "−1"),
            { kind: "curve", points: graphOf(Math.sin, 0, 4 * PI, PERIOD_X, 1.2, 120), step: 1 },
            { kind: "label", at: [2.25, 0.45], label: "y = sin θ", step: 1 },
            { kind: "point", at: [0.75, 1.2], step: 3 },
            { kind: "point", at: [3.75, 1.2], step: 3 },
            { kind: "segment", from: [0.75, 1.2], to: [3.75, 1.2], dashed: true, tone: "muted", label: "2π", labelAt: "n", step: 3 },
            { kind: "curve", points: graphOf(Math.sin, 0, 2 * PI, PERIOD_X, 1.2), tone: "good", step: 4 },
            { kind: "segment", from: [0, -1.6], to: [3, -1.6], tone: "good", label: "one period: 2π", labelAt: "s", step: 4 },
            { kind: "segment", from: [3, -1.5], to: [3, -1.7], tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Period of tangent",
        points: [
          t`Half a turn, $\pi$, takes $P(x, y)$ on the terminal arm to the opposite point $P'(-x, -y)$.`,
          t`Both co-ordinates change sign, so $\frac{-y}{-x} = \frac{y}{x}$.`,
          t`So $\tan(\theta + \pi) = \tan\theta$: $\tan\theta$ repeats after only $\pi$.`,
          t`The period of $\tan\theta$ is $\pi$, not $2\pi$.`,
          t`$\cot\theta = \frac{x}{y}$ is unchanged too, so its period is also $\pi$.`,
        ],
        figure: {
          alt: "The xy-plane with a circle about O. P(x, y) lies on the terminal arm of θ, 40° from the initial arm. The arm turns on by half a turn, π, to the opposite point P′(−x, −y). Dashed lines show P′'s co-ordinates are those of P with both signs changed, so y/x, which is tan θ, is the same: tan(θ + π) = tan θ.",
          axes: "none",
          view: { x: [-3, 3], y: [-3.05, 2.8] },
          elements: [
            ...axesOf([-2.6, 2.6], [-2.6, 2.6], ["x", "y"], "nw"),
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2, 0], label: "initial arm", labelAt: "s", tone: "good" },
            { kind: "turn", r: 2, to: 40, label: "P(x, y)" },
            { kind: "label", at: [0.752, 0.274], label: "θ", labelAt: "e" },
            { kind: "turn", r: 2, from: 40, to: 220, label: "P′(−x, −y)", labelAt: "sw", step: 1 },
            { kind: "label", at: [-0.546, 0.651], label: "π", labelAt: "nw", step: 1 },
            { kind: "segment", from: [0, 1.286], to: [1.532, 1.286], dashed: true, tone: "muted", label: "x", labelAt: "n", step: 2 },
            { kind: "segment", from: [1.532, 1.286], to: [1.532, 0], dashed: true, tone: "muted", label: "y", labelAt: "e", step: 2 },
            { kind: "segment", from: [0, -1.286], to: [-1.532, -1.286], dashed: true, tone: "muted", label: "−x", labelAt: "s", step: 2 },
            { kind: "segment", from: [-1.532, -1.286], to: [-1.532, 0], dashed: true, tone: "muted", label: "−y", labelAt: "e", step: 2 },
            { kind: "label", at: [0, -2.65], label: "tan(θ + π) = tan θ", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Using the period",
        points: [
          t`Adding or removing whole turns, multiples of $2\pi$, leaves $\sin\theta$ unchanged.`,
          t`For example, take $\sin\frac{41\pi}{4}$.`,
          t`Split off whole turns: $\frac{41\pi}{4} = 10\pi + \frac{\pi}{4}$, and $10\pi$ is $5$ full turns.`,
          t`So $\sin\frac{41\pi}{4} = \sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $2\sin^2\theta + 7\cos\theta = 5$, find the permissible values of $\cos\theta$.`,
      steps: [
        t`Write everything in $\cos\theta$: $2(1 - \cos^2\theta) + 7\cos\theta = 5$.`,
        t`Tidy up: $2\cos^2\theta - 7\cos\theta + 3 = 0$, so $(2\cos\theta - 1)(\cos\theta - 3) = 0$.`,
        t`The roots are $\cos\theta = \frac{1}{2}$ and $\cos\theta = 3$.`,
        t`$\cos\theta$ can never be more than $1$, so $3$ is impossible. $\frac{1}{2}$ is fine ($\theta = 60^\circ$).`,
      ],
      answer: t`$\cos\theta = \frac{1}{2}$`,
    },
    figure: {
      alt: "The xy-plane with a circle of radius r about O. The terminal arm turns 50° from the initial arm to P(x, y) on the circle. Dashed lines show P's co-ordinates x and y, sides of a right triangle whose slanted side is r, so neither is bigger than r. Where the circle meets the axes, sin θ and cos θ reach 1 and −1. An arm near the y-axis has a tiny x. A full turn, 2π, brings the arm back to P.",
      axes: "none",
      view: { x: [-3, 3], y: [-2.8, 2.8] },
      elements: [
        ...axesOf([-2.6, 2.6], [-2.6, 2.6], ["x", "y"]),
        { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
        { kind: "segment", from: [0, 0], to: [2, 0], label: "initial arm", labelAt: "s", tone: "good" },
        { kind: "turn", r: 2, to: 50, label: "P(x, y)", step: 1 },
        { kind: "segment", from: [0, 1.532], to: [1.286, 1.532], dashed: true, tone: "muted", label: "x", labelAt: "n", step: 2 },
        { kind: "segment", from: [1.286, 1.532], to: [1.286, 0], dashed: true, tone: "muted", label: "y", labelAt: "e", step: 2 },
        { kind: "label", at: [0.643, 0.766], label: "r", labelAt: "nw", step: 2 },
        { kind: "point", at: [0, 2], label: "sin θ = 1", labelAt: "ne", tone: "good", step: 3 },
        { kind: "point", at: [0, -2], label: "sin θ = −1", labelAt: "se", tone: "good", step: 3 },
        { kind: "point", at: [2, 0], label: "cos θ = 1", labelAt: "ne", tone: "good", step: 3 },
        { kind: "point", at: [-2, 0], label: "cos θ = −1", labelAt: "ne", tone: "good", step: 3 },
        { kind: "turn", r: 2, from: 50, to: 84, step: 5 },
        { kind: "turn", r: 2, from: 50, to: 410, step: 6 },
        { kind: "label", at: [-0.15, -0.9], label: "full turn: 2π", labelAt: "sw", step: 6 },
      ],
    },
    visualSpec: t`Drag $P$ round a circle and watch $\frac{y}{r}$ slide between $-1$ and $1$ while $\frac{y}{x}$ runs off to very large values as $P$ nears the $y$-axis.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Accepts every root of the quadratic without checking it against the function's range.",
      remediation: t`After solving, test each root: $\sin\theta$ and $\cos\theta$ lie in $[-1, 1]$; $\sec\theta$ and $\operatorname{cosec}\theta$ are $\le -1$ or $\ge 1$. A root outside the range gives no angle, so drop it.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M2",
      mistake: t`Thinks every trigonometric function stays between $-1$ and $1$, as $\sin\theta$ and $\cos\theta$ do.`,
      remediation: t`Only $\sin\theta$ and $\cos\theta$ are trapped in $[-1, 1]$. $\sec\theta = \frac{r}{x}$ and $\operatorname{cosec}\theta = \frac{r}{y}$ are at least $1$ in size, and $\tan\theta$, $\cot\theta$ take every real value.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: t`Right-triangle habit: thinks $\sin\theta$ and $\cos\theta$ lie between $0$ and $1$ (and $\sec\theta \ge 1$, $\tan\theta \ge 0$), so rejects negative values.`,
      remediation: t`Beyond $90^\circ$ the co-ordinates $x$ and $y$ can be negative, so $\sin\theta$ and $\cos\theta$ run from $-1$ to $1$ and $\tan\theta$ can be negative. The range caps the size, not the sign.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M4",
      mistake: t`Thinks $\sin\theta$ and $\cos\theta$ never actually reach $1$ or $-1$, so rejects a root equal to $\pm 1$.`,
      remediation: t`The range includes its ends: $\sin 90^\circ = 1$, $\sin 270^\circ = -1$, $\cos 0^\circ = 1$, $\cos 180^\circ = -1$. A root of exactly $1$ or $-1$ is allowed.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M5",
      mistake: t`Takes the least value of a sum as the sum of each term's least value, forgetting that $\tan\theta \cot\theta = 1$.`,
      remediation: t`$\tan^2\theta$ and $\cot^2\theta$ can't both be $0$: their product is $1$. Write the sum as a perfect square plus a number, e.g. $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2$.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
    {
      id: "C09-M6",
      mistake: t`Slips the sign of the middle term: factorises $at^2 + bt + c$ as if it were $at^2 - bt + c$, so every root changes sign.`,
      remediation: "Check the factors by expanding them back: the middle term must come out with the same sign as in the equation.",
      fallback: { kind: "ext", topic: "quadratic equations" },
    },
    {
      id: "C09-M7",
      mistake: t`Completes the square with $(p + q)^2$ where $(p - q)^2$ is needed, so takes a negative bound that is never reached as the least value.`,
      remediation: t`Use the square whose middle term is $-2pq$: $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2$, and that square is $0$ at $45^\circ$. With $(p + q)^2$ the number left over is negative, but $\tan\theta + \cot\theta$ is never $0$, so that bound is never reached.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
  ],
  engineNotes: [
    "C09-M1 shows only when a root lies outside the range (Q1, Q2); when every root is allowed it gives the key.",
    "C09-M2 shows only on sec, cosec, tan, cot items (Q2, Q4, Q6); on sin and cos items it gives the key.",
    "C09-M3 shows only when an allowed value is negative (Q1, Q3, Q4, Q5).",
    "C09-M4 shows only when a root is exactly 1 or -1 for sin or cos (Q3, Q5).",
    "C09-M5 is caught by the least-value item (Q6) only.",
    "C09-M6 shows on the quadratic items (Q1 to Q5); C09-M7, split from it, on the least-value item (Q6) only.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q6" },
      stem: t`If $2\cos^2\theta + 11\cos\theta + 5 = 0$, which values can $\cos\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "2*cos(x)**2 + 11*cos(x) + 5", q: "2*t**2 + 11*t + 5" }, params: { type: "quad", f: "cos" } },
      options: [
        { key: "A", text: t`No value: no angle fits`, correct: false, misconceptionId: "C09-M3", value: "EmptySet" },
        { key: "B", text: t`$\cos\theta = \frac{1}{2}$ only`, correct: false, misconceptionId: "C09-M6", value: "{1/2}" },
        { key: "C", text: t`$\cos\theta = -\frac{1}{2}$ only`, correct: true, value: "{-1/2}" },
        { key: "D", text: t`$\cos\theta = -\frac{1}{2}$ or $\cos\theta = -5$`, correct: false, misconceptionId: "C09-M1", value: "{-5, -1/2}" },
      ],
      solution: {
        steps: [
          t`Factorise: $(2\cos\theta + 1)(\cos\theta + 5) = 0$, so $\cos\theta = -\frac{1}{2}$ or $\cos\theta = -5$.`,
          t`$\cos\theta$ is never below $-1$, so $-5$ is impossible.`,
          t`$-\frac{1}{2}$ is allowed (for example $\theta = 120^\circ$). So $\cos\theta = -\frac{1}{2}$ only.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q8" },
      stem: t`If $5\tan^2\theta + 3 = 9\sec\theta$, which values can $\sec\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "5*tan(x)**2 + 3 - 9*sec(x)", q: "5*t**2 - 9*t - 2" }, params: { type: "quad", f: "sec" } },
      options: [
        { key: "A", text: t`$\sec\theta = 2$ only`, correct: true, value: "{2}" },
        { key: "B", text: t`$\sec\theta = 2$ or $\sec\theta = -\frac{1}{5}$`, correct: false, misconceptionId: "C09-M1", value: "{-1/5, 2}" },
        { key: "C", text: t`$\sec\theta = -\frac{1}{5}$ only`, correct: false, misconceptionId: "C09-M2", value: "{-1/5}" },
        { key: "D", text: t`$\sec\theta = -2$ only`, correct: false, misconceptionId: "C09-M6", value: "{-2}" },
      ],
      solution: {
        steps: [
          t`Put $\tan^2\theta = \sec^2\theta - 1$: $5\sec^2\theta - 5 + 3 = 9\sec\theta$, so $5\sec^2\theta - 9\sec\theta - 2 = 0$.`,
          t`Factorise: $(5\sec\theta + 1)(\sec\theta - 2) = 0$, so $\sec\theta = -\frac{1}{5}$ or $\sec\theta = 2$.`,
          t`$\sec\theta$ is never between $-1$ and $1$, so $-\frac{1}{5}$ is impossible. So $\sec\theta = 2$ only (the acute angle is $\theta = 60^\circ$).`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q9" },
      stem: t`If $3\cos\theta - 4\sin\theta = 4$, which values can $\sin\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "3*cos(x) - 4*sin(x) - 4", q: "25*t**2 + 32*t + 7" }, params: { type: "quad", f: "sin" } },
      options: [
        { key: "A", text: t`No value: no angle fits`, correct: false, misconceptionId: "C09-M3", value: "EmptySet" },
        { key: "B", text: t`$\sin\theta = -\frac{7}{25}$ only`, correct: false, misconceptionId: "C09-M4", value: "{-7/25}" },
        { key: "C", text: t`$\sin\theta = 1$ or $\sin\theta = \frac{7}{25}$`, correct: false, misconceptionId: "C09-M6", value: "{7/25, 1}" },
        { key: "D", text: t`$\sin\theta = -1$ or $\sin\theta = -\frac{7}{25}$`, correct: true, value: "{-1, -7/25}" },
      ],
      solution: {
        steps: [
          t`Write $3\cos\theta = 4(1 + \sin\theta)$ and square: $9(1 - \sin^2\theta) = 16(1 + \sin\theta)^2$.`,
          t`Tidy up: $25\sin^2\theta + 32\sin\theta + 7 = 0$, so $(25\sin\theta + 7)(\sin\theta + 1) = 0$: $\sin\theta = -\frac{7}{25}$ or $\sin\theta = -1$.`,
          t`Squaring can add roots, so check both. $\sin\theta = -1$ gives $\cos\theta = 0$: $0 + 4 = 4$. $\sin\theta = -\frac{7}{25}$ with $\cos\theta = \frac{24}{25}$: $\frac{72}{25} + \frac{28}{25} = 4$.`,
          t`$-1$ is the lowest value of $\sin\theta$, not outside the range. So $\sin\theta = -1$ or $\sin\theta = -\frac{7}{25}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`If $\sec^2\theta = \tan\theta + 3$, which values can $\tan\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "sec(x)**2 - tan(x) - 3", q: "t**2 - t - 2" }, params: { type: "quad", f: "tan" } },
      options: [
        { key: "A", text: t`$\tan\theta = 2$ or $\tan\theta = -1$`, correct: true, value: "{-1, 2}" },
        { key: "B", text: t`$\tan\theta = -1$ only`, correct: false, misconceptionId: "C09-M2", value: "{-1}" },
        { key: "C", text: t`$\tan\theta = 2$ only`, correct: false, misconceptionId: "C09-M3", value: "{2}" },
        { key: "D", text: t`$\tan\theta = -2$ or $\tan\theta = 1$`, correct: false, misconceptionId: "C09-M6", value: "{-2, 1}" },
      ],
      solution: {
        steps: [
          t`Put $\sec^2\theta = 1 + \tan^2\theta$: $1 + \tan^2\theta = \tan\theta + 3$, so $\tan^2\theta - \tan\theta - 2 = 0$.`,
          t`Factorise: $(\tan\theta - 2)(\tan\theta + 1) = 0$, so $\tan\theta = 2$ or $\tan\theta = -1$.`,
          t`$\tan\theta$ takes every real value, so both stand ($\tan 135^\circ = -1$). So $\tan\theta = 2$ or $\tan\theta = -1$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q5" },
      stem: t`If $2\sin^2\theta + \cos\theta = 1$, which values can $\cos\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "2*sin(x)**2 + cos(x) - 1", q: "2*t**2 - t - 1" }, params: { type: "quad", f: "cos" } },
      options: [
        { key: "A", text: t`$\cos\theta = -\frac{1}{2}$ only`, correct: false, misconceptionId: "C09-M4", value: "{-1/2}" },
        { key: "B", text: t`$\cos\theta = -1$ or $\cos\theta = \frac{1}{2}$`, correct: false, misconceptionId: "C09-M6", value: "{-1, 1/2}" },
        { key: "C", text: t`$\cos\theta = 1$ or $\cos\theta = -\frac{1}{2}$`, correct: true, value: "{-1/2, 1}" },
        { key: "D", text: t`$\cos\theta = 1$ only`, correct: false, misconceptionId: "C09-M3", value: "{1}" },
      ],
      solution: {
        steps: [
          t`Put $\sin^2\theta = 1 - \cos^2\theta$: $2 - 2\cos^2\theta + \cos\theta = 1$, so $2\cos^2\theta - \cos\theta - 1 = 0$.`,
          t`Factorise: $(2\cos\theta + 1)(\cos\theta - 1) = 0$, so $\cos\theta = -\frac{1}{2}$ or $\cos\theta = 1$.`,
          t`Both lie in $[-1, 1]$; $1$ is the top of the range and is reached at $\theta = 0^\circ$. So $\cos\theta = 1$ or $\cos\theta = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q7" },
      stem: t`What is the least value of $4\tan^2\theta + 9\cot^2\theta$ (for $\theta$ where both are defined)?`,
      verify: { kind: "value", inputs: { a: "4", b: "9" }, params: { type: "least" } },
      options: [
        { key: "A", text: t`$-12$`, correct: false, misconceptionId: "C09-M7", value: "-12" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C09-M2", value: "13" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C09-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`$2\tan\theta \cdot 3\cot\theta = 6$, so $4\tan^2\theta + 9\cot^2\theta = (2\tan\theta - 3\cot\theta)^2 + 12$.`,
          t`A square is never negative, so the expression is at least $12$.`,
          t`It equals $12$ when $2\tan\theta = 3\cot\theta$, that is $\tan^2\theta = \frac{3}{2}$, which some $\theta$ gives. The least value is $12$.`,
        ],
      },
    },
  ],
};
