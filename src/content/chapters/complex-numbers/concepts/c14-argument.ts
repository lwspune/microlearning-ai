import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The initial arm along the positive real axis, `len` long, labelled above the axis at `labelX`. */
const initialArm = (len: number, labelX: number, step?: number): FigureElement[] => {
  const s = step === undefined ? {} : { step };
  return [
    { kind: "segment", from: [0, 0], to: [len, 0], tone: "good", ...s },
    { kind: "label", at: [labelX, 0], label: "initial arm", labelAt: "n", tone: "good", ...s },
  ];
};

/** The point r from the origin in the direction `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

/** Direction of x + iy in degrees, and its length: a turn of this length ends on the arrow. */
const deg = (x: number, y: number) => (Math.atan2(y, x) * 180) / Math.PI;
const len = (x: number, y: number) => Math.hypot(x, y);

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`$1 + i$ and $-1 - i$ both have $\dfrac{y}{x} = 1$, so $\tan^{-1}\dfrac yx$ gives $\dfrac\pi4$ for both. **Do they point the same way?**`,
    reveal: t`No, they point in exactly opposite directions. $\tan^{-1}$ only knows the slope, not which way the arrow points. The argument needs both.`,
  },
  explanation: {
    intuition: [
      t`Draw an arrow from the origin $0$ to $z$, like $2 + 2i$.`,
      t`The **positive real axis** is the real axis to the right of $0$: the **initial arm**, where a turn starts.`,
      t`The **argument** of $z$ is the angle an arm turns through, from the initial arm to the arrow.`,
      t`Turning **anticlockwise**, against a clock's hands, counts as positive: $2 + 2i$ has argument $\frac\pi4$.`,
      t`Turning **clockwise**, the way a clock's hands go, counts as negative.`,
      t`So $-2 - 2i$, pointing the opposite way, has argument $-\frac{3\pi}{4}$.`,
    ],
    formal: [
      {
        title: "Argument from cos and sin",
        points: [
          t`Recall: the **modulus** $|z| = \sqrt{x^2 + y^2}$ is the length of the arrow to $z$.`,
          t`Write the argument of $z$ as $\arg z = \theta$.`,
          t`Its cosine is the real part over the length: $\cos\theta = \frac{x}{|z|}$.`,
          t`Its sine is the imaginary part over the length: $\sin\theta = \frac{y}{|z|}$.`,
          t`This needs $z \ne 0$: the arrow to $0$ has no direction, so $0$ has no argument.`,
        ],
        figure: {
          alt: "The Argand plane with the arrow to −3 + 2i, of length |z|. An arm turns anticlockwise from the initial arm on the positive real axis to the arrow, tracing the angle θ. The real part, x = −3, runs along the real axis; the imaginary part, y = 2, is the dashed height from the axis up to the point.",
          view: { x: [-4.2, 2.8], y: [-1.2, 3] },
          elements: [
            ...initialArm(2.2, 1.75),
            { kind: "vector", to: [-3, 2], label: "−3 + 2i", labelAt: "nw" },
            { kind: "label", at: [-1.5, 1], label: "|z|", labelAt: "ne", step: 1 },
            { kind: "turn", r: len(-3, 2), to: deg(-3, 2), step: 2 },
            { kind: "label", at: tip(1.4, 70), label: "θ", labelAt: "e", step: 2 },
            { kind: "segment", from: [0, 0], to: [-3, 0], label: "x = −3", labelAt: "n", step: 3 },
            { kind: "segment", from: [-3, 0], to: [-3, 2], dashed: true, label: "y = 2", labelAt: "w", step: 4 },
          ],
        },
      },
      {
        title: "Principal argument",
        points: [
          t`One more whole turn, $2\pi$, brings the arm back to the same arrow.`,
          t`So $\theta + 2\pi$, $\theta - 2\pi$ and so on are arguments of $z$ too.`,
          t`The **principal argument** is the one with $-\pi < \theta \le \pi$, written $\theta \in (-\pi, \pi]$.`,
          t`Anticlockwise, it goes at most half a turn: $\pi$ is included.`,
          t`Clockwise, it stops short of half a turn: $-\pi$ is left out.`,
          t`So each direction has exactly one principal argument.`,
        ],
        figure: {
          alt: "The arrow to 1 + 2i, with its argument θ turned from the initial arm. A second arm starts on the arrow and turns one whole turn more, θ + 2π, ending on the same arrow. Then a long arm turns half a turn anticlockwise to π, on the negative real axis, and another turns half a turn clockwise to −π, which the principal range leaves out.",
          view: { x: [-4, 3.2], y: [-1.6, 2.6] },
          elements: [
            ...initialArm(2.2, 1.9),
            { kind: "vector", to: [1, 2], label: "1 + 2i", labelAt: "ne" },
            { kind: "turn", r: len(1, 2), to: deg(1, 2) },
            { kind: "label", at: tip(1.35, 30), label: "θ", labelAt: "e" },
            { kind: "turn", r: len(1, 2), from: deg(1, 2), to: deg(1, 2) + 360, step: 1 },
            { kind: "label", at: tip(1.3, 225), label: "θ + 2π", labelAt: "sw", step: 1 },
            { kind: "turn", r: 3.5, to: 180, label: "π", labelAt: "n", tone: "good", step: 4 },
            { kind: "turn", r: 3, to: -180, tone: "bad", step: 5 },
            { kind: "label", at: [-3.9, -0.6], label: "−π: left out", labelAt: "e", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Slope alone is not enough",
        points: [
          t`The arrow's **slope**, its rise over its run, is $\frac yx$, and $\tan\theta = \frac yx$.`,
          t`Recall: $\tan^{-1} k$ is the angle between $-\frac\pi2$ and $\frac\pi2$ whose tangent is $k$.`,
          t`So $\tan^{-1}$ only gives arrows pointing right of the imaginary axis.`,
          t`$1 + 2i$ points the opposite way to $-1 - 2i$, but has the same slope: $\frac{2}{1} = \frac{-2}{-1}$.`,
          t`So $\tan^{-1}\frac yx$ points to $1 + 2i$, not to $-1 - 2i$.`,
          t`**Plot the point first**: $-1 - 2i$ lies left of and below $0$, so its arm turns clockwise.`,
        ],
        figure: {
          alt: "The arrow to −1 − 2i. The right half of the plane is shaded: tan⁻¹ only gives arrows there. The arrow to 1 + 2i lies on the same dashed line through 0, pointing the opposite way, with the same slope. A faint arm turns to 1 + 2i: that is what tan⁻¹(y/x) gives. Then the arm for −1 − 2i turns clockwise from the initial arm, down to its arrow.",
          view: { x: [-2.6, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...initialArm(2.4, 1.9),
            { kind: "vector", to: [-1, -2], label: "−1 − 2i", labelAt: "w" },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 1], [0, -1]] }], tone: "muted", step: 3 },
            { kind: "label", at: [0.3, -2.45], label: "tan⁻¹ points this side", labelAt: "e", tone: "muted", step: 3 },
            { kind: "line", through: [[-1, -2], [1, 2]], dashed: true, tone: "muted", step: 4 },
            { kind: "vector", to: [1, 2], label: "1 + 2i", labelAt: "e", tone: "muted", step: 4 },
            { kind: "turn", r: len(1, 2), to: deg(1, 2), tone: "muted", step: 5 },
            { kind: "turn", r: len(-1, -2), to: deg(-1, -2), step: 6 },
            { kind: "label", at: tip(1.25, -50), label: "θ", labelAt: "e", step: 6 },
          ],
        },
      },
      {
        title: "Reference angle",
        points: [
          t`The **reference angle** $\alpha$ is the angle between the arrow and the real axis, from $0$ to $\frac\pi2$.`,
          t`It sits in a right triangle with width $|x|$ and height $|y|$.`,
          t`So $\tan\alpha = \left|\frac yx\right|$, and $\alpha = \tan^{-1}\left|\frac yx\right|$.`,
          t`Take imaginary over real: $\left|\frac xy\right|$ would measure from the imaginary axis instead.`,
        ],
        figure: {
          alt: "The arrow to −2 + 3i. The reference angle α lies between the arrow and the negative real axis. The dashed height of the point above the axis is |y| = 3 and its dashed width from the imaginary axis is |x| = 2. A second angle, between the arrow and the imaginary axis, is marked: not α.",
          view: { x: [-3.4, 1.4], y: [-0.9, 3.6] },
          elements: [
            { kind: "vector", to: [-2, 3], label: "−2 + 3i", labelAt: "w" },
            { kind: "arc", centre: [0, 0], r: 0.9, from: deg(-2, 3), to: 180, label: "α", labelAt: "nw", tone: "good", step: 1 },
            { kind: "segment", from: [0, 3], to: [-2, 3], dashed: true, tone: "muted", label: "|x| = 2", labelAt: "n", step: 2 },
            { kind: "segment", from: [-2, 0], to: [-2, 3], dashed: true, tone: "muted", label: "|y| = 3", labelAt: "w", step: 2 },
            { kind: "arc", centre: [0, 0], r: 1.5, from: 90, to: deg(-2, 3), label: "not α", labelAt: "n", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "Argument by quadrant",
        points: [
          t`Recall: the axes split the plane into **quadrants** I to IV, anticlockwise from the top right.`,
          t`Quadrant I: $\theta = \alpha$.`,
          t`Quadrant II: $\theta = \pi - \alpha$.`,
          t`Quadrant III, turning clockwise: $\theta = -(\pi - \alpha)$.`,
          t`Quadrant IV, turning clockwise: $\theta = -\alpha$.`,
        ],
        figure: {
          alt: "The Argand plane with quadrants I to IV. Four arrows share the reference angle α: 2 + i in quadrant I, where an arm turns anticlockwise to θ = α; −2 + i in quadrant II, θ = π − α; −2 − i in quadrant III, where the arm turns clockwise to θ = −(π − α); and 2 − i in quadrant IV, clockwise to θ = −α.",
          view: { x: [-3.6, 3.6], y: [-2.4, 2.4] },
          elements: [
            ...initialArm(2.6, 2.2),
            { kind: "label", at: [3.1, 2.1], label: "I", tone: "muted", step: 1 },
            { kind: "label", at: [-3.1, 2.1], label: "II", tone: "muted", step: 1 },
            { kind: "label", at: [-3.1, -2.1], label: "III", tone: "muted", step: 1 },
            { kind: "label", at: [3.1, -2.1], label: "IV", tone: "muted", step: 1 },
            { kind: "vector", to: [2, 1], label: "2 + i", labelAt: "e", step: 2 },
            { kind: "turn", r: len(2, 1), to: deg(2, 1), step: 2 },
            { kind: "label", at: [0.4, 1.75], label: "θ = α", labelAt: "e", step: 2 },
            { kind: "vector", to: [-2, 1], label: "−2 + i", labelAt: "w", step: 3 },
            { kind: "turn", r: len(-2, 1), to: deg(-2, 1), step: 3 },
            { kind: "label", at: [-0.4, 1.75], label: "θ = π − α", labelAt: "w", step: 3 },
            { kind: "vector", to: [-2, -1], label: "−2 − i", labelAt: "w", tone: "bad", step: 4 },
            { kind: "turn", r: len(-2, -1), to: deg(-2, -1), tone: "bad", step: 4 },
            { kind: "label", at: [-0.4, -1.75], label: "θ = −(π − α)", labelAt: "w", tone: "bad", step: 4 },
            { kind: "vector", to: [2, -1], label: "2 − i", labelAt: "e", tone: "bad", step: 5 },
            { kind: "turn", r: len(2, -1), to: deg(2, -1), tone: "bad", step: 5 },
            { kind: "label", at: [0.4, -1.75], label: "θ = −α", labelAt: "e", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Points on the axes",
        points: [
          t`On the positive real axis, like $2$, the arm has not turned: $\theta = 0$.`,
          t`On the positive imaginary axis, like $2i$, it turns a quarter turn: $\theta = \frac\pi2$.`,
          t`On the **negative real axis**, left of $0$, like $-2$, it turns a half turn: $\theta = \pi$.`,
          t`On the **negative imaginary axis**, below $0$, like $-2i$, it turns a quarter turn clockwise: $\theta = -\frac\pi2$.`,
          t`A point on an axis is in no quadrant, so read its argument straight off the plane.`,
        ],
        figure: {
          alt: "Four arrows on the axes. The arrow to 2 lies on the initial arm: θ = 0. An arm turns a quarter turn anticlockwise to 2i: θ = π/2. It turns on, a half turn in all, to −2: θ = π. Another arm turns a quarter turn clockwise to −2i: θ = −π/2.",
          view: { x: [-3.4, 4], y: [-2.6, 2.6] },
          elements: [
            ...initialArm(2.6, 1.3),
            { kind: "vector", to: [2, 0], label: "2: θ = 0", labelAt: "ne", step: 1 },
            { kind: "turn", r: 2, to: 90, step: 2 },
            { kind: "vector", to: [0, 2], label: "2i: θ = π/2", labelAt: "e", step: 2 },
            { kind: "turn", r: 2, from: 90, to: 180, step: 3 },
            { kind: "vector", to: [-2, 0], label: "−2: θ = π", labelAt: "n", step: 3 },
            { kind: "turn", r: 2, to: -90, tone: "bad", step: 4 },
            { kind: "vector", to: [0, -2], label: "−2i: θ = −π/2", labelAt: "e", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "Two conventions",
        points: [
          t`Some papers take the argument in $[0, 2\pi)$ instead of $(-\pi, \pi]$.`,
          t`$[0, 2\pi)$ runs from $0$ up to, but not including, $2\pi$: every turn is anticlockwise.`,
          t`The same direction reads $-\frac{3\pi}{4}$ in $(-\pi, \pi]$.`,
          t`It reads $\frac{5\pi}{4}$ in $[0, 2\pi)$.`,
          t`The two differ by $2\pi$, one whole turn.`,
          t`Read the question, or the options, to see which one it uses.`,
        ],
        figure: {
          alt: "The arrow to −2 − 2i. One arm turns clockwise from the initial arm to it: −3π/4, in (−π, π]. Another turns anticlockwise the long way round to the same arrow: 5π/4, in [0, 2π).",
          view: { x: [-3, 3], y: [-3, 3] },
          elements: [
            ...initialArm(2.4, 1.9),
            { kind: "vector", to: [-2, -2], label: "−2 − 2i", labelAt: "w" },
            { kind: "turn", r: len(-2, -2), to: -135, tone: "bad", step: 3 },
            { kind: "label", at: tip(1.35, -67.5), label: "−3π/4", labelAt: "e", tone: "bad", step: 3 },
            { kind: "turn", r: len(-2, -2), to: 225, tone: "good", step: 4 },
            { kind: "label", at: tip(1.35, 135), label: "5π/4", labelAt: "nw", tone: "good", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the principal argument of $z = -2 - 2i$.`,
      steps: [
        t`Plot: $x < 0$ and $y < 0$, so the point is in quadrant III.`,
        t`Reference angle: $\alpha = \tan^{-1}\left|\dfrac{-2}{-2}\right|$ $= \dfrac\pi4$.`,
        t`Quadrant III: $\theta = -\left(\pi - \dfrac\pi4\right)$ $= -\dfrac{3\pi}{4}$.`,
      ],
      answer: t`$-\dfrac{3\pi}{4}$ (or $\dfrac{5\pi}{4}$ in $[0, 2\pi)$). The trap: $\tan^{-1}\dfrac{-2}{-2}$ $= \dfrac\pi4$ points into quadrant I, the opposite direction.`,
      figure: {
        alt: "−2 − 2i is in quadrant III. Its reference angle with the negative real axis is π/4. An arm turns clockwise from the initial arm on the positive real axis to the arrow: its argument is −3π/4.",
        view: { x: [-3.3, 1.5], y: [-3.3, 1.3] },
        elements: [
          ...initialArm(1.4, 0.75),
          { kind: "vector", to: [-2, -2], label: "−2 − 2i", labelAt: "sw", step: 1 },
          { kind: "angle", at: [0, 0], from: -180, to: -135, label: "π/4", tone: "muted", step: 2 },
          { kind: "turn", r: len(-2, -2), to: -135, step: 3 },
          { kind: "label", at: tip(1.35, -67.5), label: "−3π/4", labelAt: "e", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The arrow to 2 + 2i. The initial arm lies along the positive real axis; an arm turns anticlockwise from it to the arrow: the argument, π/4. The arrow to −2 − 2i points the opposite way, on the same dashed line; its arm turns clockwise: argument −3π/4.",
      view: { x: [-3.2, 3.2], y: [-3.2, 3.2] },
      elements: [
        { kind: "vector", to: [2, 2], label: "2 + 2i", labelAt: "se", step: 1 },
        ...initialArm(2.4, 1.9, 2),
        { kind: "turn", r: len(2, 2), to: 45, step: 3 },
        { kind: "label", at: tip(1.5, 30), label: "π/4", labelAt: "e", step: 4 },
        { kind: "vector", to: [-2, -2], label: "−2 − 2i", labelAt: "nw", tone: "bad", step: 5 },
        { kind: "turn", r: len(-2, -2), to: -135, tone: "bad", step: 5 },
        { kind: "label", at: tip(1.35, -67.5), label: "−3π/4", labelAt: "e", tone: "bad", step: 6 },
        { kind: "line", through: [[0, 0], [2, 2]], dashed: true, tone: "muted", step: 6 },
      ],
    },
    visualSpec: t`A draggable point on the Argand plane, with its arrow and an arc showing $\theta$. A faint "ghost" arrow shows what $\tan^{-1}\dfrac yx$ alone gives. When the point is dragged to $x < 0$, the ghost flips to the opposite side. That's the gap the quadrant rule fixes.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: t`Taking $\tan^{-1}\dfrac yx$ itself as the argument`,
      remediation: t`$\tan^{-1}$ only returns angles between $-\frac\pi2$ and $\frac\pi2$, which point to the right. Your point is on the left. Plot it, then use the quadrant rule.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C14-M2",
      mistake: t`Answering outside $(-\pi, \pi]$, or mixing up the two conventions`,
      remediation: t`Principal means $(-\pi, \pi]$. Add or subtract $2\pi$ to bring your angle into range. Is the paper using $[0, 2\pi)$? The options tell you.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M3",
      mistake: t`Reference angle from $\tan^{-1}\left|\dfrac xy\right|$, measured from the imaginary axis`,
      remediation: t`The angle is measured from the **real** axis, so it's $\tan^{-1}\left|\frac{y}{x}\right|$: imaginary part over real part.`,
      fallback: { kind: "ext", topic: "trig values" },
    },
    {
      id: "C14-M4",
      mistake: "Giving the reference angle without placing it by quadrant",
      remediation: "That's the reference angle. Now place it: which quadrant is the point in?",
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C14-M5",
      mistake: "For a point on an axis, putting it on the other axis: a real number read as imaginary, or the reverse",
      remediation: t`A real number like $-5$ lies on the **real** axis; a number like $-2i$ lies on the **imaginary** axis. Plot it first, then read off how far the arm turns.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    "For a point in quadrant I or IV, C14-M1 gives the correct answer, so those items cannot detect M1. To diagnose M1, use a point with x < 0.",
    "C14-M3 applies only to points off the axes and C14-M5 only to points on an axis: diagnose each with its own kind of point.",
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "authored" },
      stem: t`The principal argument of $-1 + \sqrt3\,i$ is:`,
      verify: { kind: "value", inputs: { x: "-1", y: "sqrt(3)" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$\dfrac{2\pi}{3}$`, correct: true, value: "2*pi/3" },
        { key: "B", text: t`$-\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M1", value: "-pi/3" },
        { key: "C", text: t`$\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M4", value: "pi/3" },
        { key: "D", text: t`$\dfrac{5\pi}{6}$`, correct: false, misconceptionId: "C14-M3", value: "5*pi/6" },
      ],
      solution: {
        steps: [
          t`Plot: $x < 0$ and $y > 0$, so the point is in quadrant II.`,
          t`Reference angle: $\alpha = \tan^{-1}\dfrac{\sqrt3}{1} = \dfrac\pi3$.`,
          t`Quadrant II: $\theta = \pi - \dfrac\pi3 = \dfrac{2\pi}{3}$.`,
        ],
        figure: {
          alt: "−1 + √3i is in quadrant II, π/3 above the negative real axis, so its argument is π − π/3 = 2π/3.",
          view: { x: [-2.3, 1.3], y: [-1.3, 3.032] },
          elements: [
            { kind: "vector", to: [-1, 1.732], label: "−1 + √3i", labelAt: "nw", step: 1 },
            { kind: "angle", at: [0, 0], from: 120, to: 180, label: "π/3", tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 120, label: "2π/3", step: 3 },
          ],
        },
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "cetcn-argument-and-quadrant" },
      stem: t`The principal argument of $-\sqrt3 - i$ is:`,
      verify: { kind: "value", inputs: { x: "-sqrt(3)", y: "-1" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$-\dfrac{5\pi}{6}$`, correct: true, value: "-5*pi/6" },
        { key: "B", text: t`$\dfrac{7\pi}{6}$`, correct: false, misconceptionId: "C14-M2", value: "7*pi/6" },
        { key: "C", text: t`$\dfrac{\pi}{6}$`, correct: false, misconceptionId: "C14-M1", value: "pi/6" },
        { key: "D", text: t`$-\dfrac{2\pi}{3}$`, correct: false, misconceptionId: "C14-M3", value: "-2*pi/3" },
      ],
      solution: {
        steps: [
          t`Plot: $x < 0$ and $y < 0$, so the point is in quadrant III.`,
          t`Reference angle: $\alpha = \tan^{-1}\dfrac{1}{\sqrt3} = \dfrac\pi6$.`,
          t`Quadrant III, measured clockwise: $\theta = -\left(\pi - \dfrac\pi6\right) = -\dfrac{5\pi}{6}$.`,
        ],
        figure: {
          alt: "−√3 − i is in quadrant III, π/6 below the negative real axis, so its argument, measured clockwise, is −5π/6.",
          view: { x: [-3.032, 1.3], y: [-2.3, 1.3] },
          elements: [
            { kind: "vector", to: [-1.732, -1], label: "−√3 − i", labelAt: "sw", step: 1 },
            { kind: "angle", at: [0, 0], from: -180, to: -150, label: "π/6", tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: -150, to: 0, label: "−5π/6", step: 3 },
          ],
        },
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "authored" },
      stem: t`The principal argument of $1 - \sqrt3\,i$ is:`,
      verify: { kind: "value", inputs: { x: "1", y: "-sqrt(3)" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$-\dfrac{\pi}{3}$`, correct: true, value: "-pi/3" },
        { key: "B", text: t`$\dfrac{5\pi}{3}$`, correct: false, misconceptionId: "C14-M2", value: "5*pi/3" },
        { key: "C", text: t`$-\dfrac{\pi}{6}$`, correct: false, misconceptionId: "C14-M3", value: "-pi/6" },
        { key: "D", text: t`$\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M4", value: "pi/3" },
      ],
      solution: {
        steps: [
          t`Plot: $x > 0$ and $y < 0$, so the point is in quadrant IV.`,
          t`Reference angle: $\alpha = \tan^{-1}\sqrt3 = \dfrac\pi3$.`,
          t`Quadrant IV, measured clockwise: $\theta = -\dfrac\pi3$.`,
        ],
        figure: {
          alt: "1 − √3i is in quadrant IV, π/3 below the positive real axis, so its argument is −π/3.",
          view: { x: [-1.3, 2.3], y: [-3.032, 1.3] },
          elements: [
            { kind: "vector", to: [1, -1.732], label: "1 − √3i", labelAt: "se", step: 1 },
            { kind: "angle", at: [0, 0], from: -60, to: 0, label: "−π/3", step: 2 },
          ],
        },
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "jcx-arg" },
      stem: t`The principal argument of $-5$ is:`,
      verify: { kind: "value", inputs: { x: "-5", y: "0" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$\pi$`, correct: true, value: "pi" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C14-M1", value: "0" },
        { key: "C", text: t`$-\pi$`, correct: false, misconceptionId: "C14-M2", value: "-pi" },
        { key: "D", text: t`$-\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C14-M5", value: "-pi/2" },
      ],
      solution: {
        steps: [
          t`Plot: $-5$ lies on the negative real axis.`,
          t`That is a half-turn from the positive real axis: $\theta = \pi$. Not $-\pi$: the principal range $(-\pi, \pi]$ includes $\pi$ but not $-\pi$.`,
        ],
        figure: {
          alt: "−5 lies on the negative real axis, a half-turn from the positive real axis: its argument is π.",
          view: { x: [-6.3, 1.3], y: [-1.75, 1.75] },
          elements: [
            { kind: "vector", to: [-5, 0], label: "−5", labelAt: "n", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 180, label: "π", step: 2 },
          ],
        },
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "authored" },
      stem: t`The principal argument of $-2i$ is:`,
      verify: { kind: "value", inputs: { x: "0", y: "-2" }, params: { range: "principal" } },
      options: [
        { key: "A", text: t`$-\dfrac{\pi}{2}$`, correct: true, value: "-pi/2" },
        { key: "B", text: t`$\dfrac{3\pi}{2}$`, correct: false, misconceptionId: "C14-M2", value: "3*pi/2" },
        { key: "C", text: t`$\dfrac{\pi}{2}$`, correct: false, misconceptionId: "C14-M4", value: "pi/2" },
        { key: "D", text: t`$\pi$`, correct: false, misconceptionId: "C14-M5", value: "pi" },
      ],
      solution: {
        steps: [
          t`Plot: $-2i$ lies on the negative imaginary axis.`,
          t`That is a quarter-turn clockwise from the positive real axis: $\theta = -\dfrac\pi2$.`,
        ],
        figure: {
          alt: "−2i lies on the negative imaginary axis, a quarter-turn clockwise: its argument is −π/2.",
          view: { x: [-1.75, 1.75], y: [-3.3, 1.3] },
          elements: [
            { kind: "vector", to: [0, -2], label: "−2i", labelAt: "e", step: 1 },
            { kind: "angle", at: [0, 0], from: -90, to: 0, label: "−π/2", step: 2 },
          ],
        },
      },
    },
    {
      id: "C14-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "cn-argument-polar" },
      stem: t`The argument of $-1 - \sqrt3\,i$, taken in $[0, 2\pi)$, is:`,
      verify: { kind: "value", inputs: { x: "-1", y: "-sqrt(3)" }, params: { range: "0_2pi" } },
      options: [
        { key: "A", text: t`$\dfrac{4\pi}{3}$`, correct: true, value: "4*pi/3" },
        { key: "B", text: t`$-\dfrac{2\pi}{3}$`, correct: false, misconceptionId: "C14-M2", value: "-2*pi/3" },
        { key: "C", text: t`$\dfrac{\pi}{3}$`, correct: false, misconceptionId: "C14-M1", value: "pi/3" },
        { key: "D", text: t`$\dfrac{7\pi}{6}$`, correct: false, misconceptionId: "C14-M3", value: "7*pi/6" },
      ],
      solution: {
        steps: [
          t`Plot: $x < 0$ and $y < 0$, so the point is in quadrant III.`,
          t`Reference angle: $\alpha = \tan^{-1}\sqrt3 = \dfrac\pi3$.`,
          t`In $[0, 2\pi)$, measure anticlockwise all the way: $\theta = \pi + \dfrac\pi3 = \dfrac{4\pi}{3}$.`,
        ],
        figure: {
          alt: "−1 − √3i is in quadrant III, π/3 past the negative real axis. Measured anticlockwise all the way round, its argument is 4π/3.",
          view: { x: [-2.3, 1.3], y: [-3.032, 1.3] },
          elements: [
            { kind: "vector", to: [-1, -1.732], label: "−1 − √3i", labelAt: "sw", step: 1 },
            { kind: "angle", at: [0, 0], from: 180, to: 240, label: "π/3", tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 240, label: "4π/3", step: 3 },
          ],
        },
      },
    },
  ],
};
