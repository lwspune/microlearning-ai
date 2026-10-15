import type { Concept, FigureElement, Shape } from "../../../types.ts";

const t = String.raw;

/** Plain x and y axes through the origin O, with no grid or numbers. */
function axesOf(len: number): FigureElement[] {
  return [
    { kind: "segment", from: [-len, 0], to: [len, 0], tone: "muted" },
    { kind: "label", at: [len, 0], label: "x", labelAt: "s", tone: "muted" },
    { kind: "segment", from: [0, -len], to: [0, len], tone: "muted" },
    { kind: "label", at: [0, len], label: "y", labelAt: "w", tone: "muted" },
    { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
  ];
}

/** The xy-plane as plain axes, with the quadrant numerals I to IV. */
function planeOf(len: number): FigureElement[] {
  const q = len * 0.75;
  return [
    ...axesOf(len),
    { kind: "label", at: [q, q], label: "I", labelAt: "n", tone: "muted" },
    { kind: "label", at: [-q, q], label: "II", labelAt: "n", tone: "muted" },
    { kind: "label", at: [-q, -q], label: "III", labelAt: "n", tone: "muted" },
    { kind: "label", at: [q, -q], label: "IV", labelAt: "n", tone: "muted" },
  ];
}

/** The part of the disc of radius r about O that lies in quadrant q. */
const quadrant = (q: 1 | 2 | 3 | 4, r: number): Shape[] => [
  { kind: "disc", centre: [0, 0], r },
  { kind: "sector", centre: [0, 0], from: (q - 1) * 90, to: q * 90 },
];

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`$\cos\theta = \frac{8}{17}$. **Is $\sin\theta = \frac{15}{17}$?**`,
    reveal: t`Not necessarily. $\sin^2\theta = 1 - \frac{64}{289} = \frac{225}{289}$, so $\sin\theta = \frac{15}{17}$ or $-\frac{15}{17}$. Both fit: $\cos\theta$ is positive in the first quadrant and in the fourth. In the first, $\sin\theta = \frac{15}{17}$; in the fourth, $\sin\theta = -\frac{15}{17}$. One value fixes the size of every other ratio, but only the quadrant fixes its sign.`,
  },
  explanation: {
    intuition: [
      t`Suppose you know just one ratio, say $\cos\theta = \frac{8}{17}$.`,
      t`As $\cos\theta = \frac{x}{r}$, take a point on the terminal arm with $x = 8$ and $r = 17$.`,
      t`Pythagoras gives $y^2 = 17^2 - 8^2 = 225$, so $y = 15$ or $y = -15$.`,
      t`Either way the right triangle has sides $8$, $15$ and $17$, so each ratio's **size**, its value without the sign, is fixed.`,
      t`Its **sign**, plus or minus, is not: the point may lie in Quadrant I or in Quadrant IV.`,
      t`So an identity gives only a square, like $\sin^2\theta$, and the quadrant picks which square root to take.`,
    ],
    formal: [
      {
        title: "The size, from an identity",
        points: [
          t`First use the identity that links the given ratio to another one.`,
          t`$\sin^2\theta + \cos^2\theta = 1$ links $\sin\theta$ and $\cos\theta$.`,
          t`$\sec^2\theta = 1 + \tan^2\theta$ links $\sec\theta$ and $\tan\theta$.`,
          t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta$ links $\operatorname{cosec}\theta$ and $\cot\theta$.`,
          t`Each one gives the other ratio's **square**, such as $\sin^2\theta$, not the ratio itself.`,
          t`A positive square has two **square roots**, one positive and one negative: $\sin^2\theta = \frac{225}{289}$ gives $\sin\theta = \pm\frac{15}{17}$.`,
        ],
      },
      {
        title: "The sign, from the quadrant",
        points: [
          t`Keep the square root whose sign fits the quadrant that $\theta$ lies in.`,
          t`In Quadrant I, all six ratios are positive.`,
          t`In Quadrant II, only $\sin$ and $\operatorname{cosec}$ are positive.`,
          t`In Quadrant III, only $\tan$ and $\cot$ are positive.`,
          t`In Quadrant IV, only $\cos$ and $\sec$ are positive.`,
          t`If $\cos\theta$ is a root of a quadratic equation, keep the root whose sign fits the quadrant.`,
        ],
        figure: {
          alt: "The xy-plane with a disc about O, its quadrants shaded one at a time, anticlockwise. Quadrant I: all six ratios positive. Quadrant II: sin and cosec positive. Quadrant III: tan and cot positive. Quadrant IV: cos and sec positive.",
          axes: "none",
          view: { x: [-4.4, 4.4], y: [-3, 3] },
          elements: [
            ...axesOf(2.6),
            { kind: "region", within: quadrant(1, 2.2), tone: "good", step: 2 },
            { kind: "label", at: [1.5, 2.5], label: "I: all six +", labelAt: "e", tone: "good", step: 2 },
            { kind: "region", within: quadrant(2, 2.2), step: 3 },
            { kind: "label", at: [-1.5, 2.5], label: "II: sin, cosec +", labelAt: "w", step: 3 },
            { kind: "region", within: quadrant(3, 2.2), step: 4 },
            { kind: "label", at: [-1.5, -2.5], label: "III: tan, cot +", labelAt: "w", step: 4 },
            { kind: "region", within: quadrant(4, 2.2), step: 5 },
            { kind: "label", at: [1.5, -2.5], label: "IV: cos, sec +", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "The quadrant from an interval",
        points: [
          t`The quadrant is often given as an **interval**: two values that $\theta$ lies between.`,
          t`$0 < \theta < \frac{\pi}{2}$, from $0^\circ$ to $90^\circ$, is Quadrant I.`,
          t`$\frac{\pi}{2} < \theta < \pi$, from $90^\circ$ to $180^\circ$, is Quadrant II.`,
          t`$\pi < \theta < \frac{3\pi}{2}$, from $180^\circ$ to $270^\circ$, is Quadrant III.`,
          t`$\frac{3\pi}{2} < \theta < 2\pi$, from $270^\circ$ to $360^\circ$, is Quadrant IV.`,
        ],
        figure: {
          alt: "The xy-plane with the quadrants I to IV and the initial arm along the positive x-axis, at 0. An arm turns anticlockwise a quarter turn at a time, stopping at π/2 on the positive y-axis, π on the negative x-axis, 3π/2 on the negative y-axis and 2π back on the positive x-axis: the edges of Quadrants I, II, III and IV.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6),
            { kind: "segment", from: [0, 0], to: [2.2, 0], label: "initial arm, 0", labelAt: "n", tone: "good" },
            { kind: "turn", r: 2, to: 90, label: "π/2", labelAt: "e", step: 2 },
            { kind: "turn", r: 2, from: 90, to: 180, label: "π", labelAt: "n", step: 3 },
            { kind: "turn", r: 2, from: 180, to: 270, label: "3π/2", labelAt: "e", step: 4 },
            { kind: "turn", r: 2, from: 270, to: 360, label: "2π", labelAt: "s", step: 5 },
          ],
        },
      },
      {
        title: "The rest, without square roots",
        points: [
          t`After the identity and the quadrant, the other ratios need no more square roots.`,
          t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$, with $\sin$ on top, so $\sin\theta = \tan\theta\cos\theta$.`,
          t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, the **reciprocal** of $\sin\theta$: one divided by it.`,
          t`$\sec\theta = \frac{1}{\cos\theta}$, the reciprocal of $\cos\theta$.`,
          t`$\cot\theta = \frac{1}{\tan\theta}$, the reciprocal of $\tan\theta$.`,
          t`These carry the signs along by themselves: a reciprocal has the same sign as its partner.`,
        ],
      },
      {
        title: "Value of an expression",
        points: [
          t`To find an expression's value, find each ratio it uses, with its sign, then substitute.`,
          t`For example, let $\tan\theta = -\frac{20}{21}$, with $\theta$ in Quadrant IV, where $x > 0$ and $y < 0$.`,
          t`Then $\sec^2\theta = 1 + \frac{400}{441} = \frac{841}{441}$.`,
          t`$\sec\theta$ is positive in Quadrant IV, so $\sec\theta = \frac{29}{21}$ and $\cos\theta = \frac{21}{29}$.`,
          t`Then $\sin\theta = \tan\theta\cos\theta = -\frac{20}{29}$.`,
          t`So $2\sin\theta + 3\cos\theta = -\frac{40}{29} + \frac{63}{29}$, which is $\frac{23}{29}$.`,
        ],
        figure: {
          alt: "Quadrant IV is shaded. The point P(21, −20) lies on the terminal arm, with x = 21 along the x-axis and y = −20 below it, since tan θ = y/x = −20/21. The arm OP has length r = 29. Reading off: cos θ = x/r = 21/29 and sin θ = y/r = −20/29.",
          axes: "none",
          view: { x: [-1, 3.6], y: [-2.4, 1.7] },
          elements: [
            { kind: "segment", from: [-0.8, 0], to: [2.6, 0], tone: "muted" },
            { kind: "label", at: [2.6, 0], label: "x", labelAt: "s", tone: "muted" },
            { kind: "segment", from: [0, -2.2], to: [0, 1.4], tone: "muted" },
            { kind: "label", at: [0, 1.4], label: "y", labelAt: "w", tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "nw", tone: "muted" },
            { kind: "region", within: quadrant(4, 2.2), tone: "good", step: 2 },
            { kind: "segment", from: [0, 0], to: [1.575, -1.5], step: 2 },
            { kind: "point", at: [1.575, -1.5], label: "P(21, −20)", labelAt: "e", step: 2 },
            { kind: "label", at: [0.79, 0], label: "x = 21", labelAt: "n", step: 2 },
            { kind: "segment", from: [1.575, 0], to: [1.575, -1.5], dashed: true, step: 2 },
            { kind: "label", at: [1.575, -0.75], label: "y = −20", labelAt: "e", step: 2 },
            { kind: "label", at: [0.945, -0.9], label: "r = 29", labelAt: "sw", step: 3 },
            { kind: "label", at: [0.3, 1.3], label: "cos θ = x/r = 21/29", labelAt: "e", step: 4 },
            { kind: "label", at: [0.3, 0.8], label: "sin θ = y/r = −20/29", labelAt: "e", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`If $\sec\theta = -3$ and $\pi < \theta < \frac{3\pi}{2}$, find the other five trigonometric functions of $\theta$.`,
      steps: [
        t`$\cos\theta = \frac{1}{\sec\theta} = -\frac{1}{3}$.`,
        t`$\tan^2\theta = \sec^2\theta - 1 = 9 - 1 = 8$, so $\tan\theta = \pm 2\sqrt{2}$.`,
        t`$\pi < \theta < \frac{3\pi}{2}$ is the third quadrant, where $\tan$ is positive: $\tan\theta = 2\sqrt{2}$ and $\cot\theta = \frac{1}{2\sqrt{2}}$.`,
        t`$\sin\theta = \tan\theta\cos\theta$, which is $2\sqrt{2}\left(-\frac{1}{3}\right) = -\frac{2\sqrt{2}}{3}$, so $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$.`,
      ],
      answer: t`$\cos\theta = -\frac{1}{3}$, $\tan\theta = 2\sqrt{2}$, $\cot\theta = \frac{1}{2\sqrt{2}}$, $\sin\theta = -\frac{2\sqrt{2}}{3}$, $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$.`,
    },
    figure: {
      alt: "The xy-plane. cos θ = 8/17. A dashed circle of radius r = 17 about O and the dashed line x = 8 meet at two points, (8, 15) above the x-axis and (8, −15) below it. Each makes a right triangle with sides 8, 15 and 17. The upper point lies in Quadrant I, where sin θ = 15/17; the lower in Quadrant IV, where sin θ = −15/17.",
      axes: "none",
      view: { x: [-2.6, 4.6], y: [-2.6, 2.6] },
      elements: [
        ...axesOf(2.4),
        { kind: "label", at: [-2.5, 2.3], label: "cos θ = 8/17", labelAt: "e", step: 1 },
        { kind: "circle", centre: [0, 0], r: 2.04, dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [-1.44, -1.44], label: "r = 17", labelAt: "sw", step: 2 },
        { kind: "segment", from: [0.96, -2.4], to: [0.96, 2.4], dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [0.96, -2.4], label: "x = 8", labelAt: "e", step: 2 },
        { kind: "segment", from: [0, 0], to: [0.96, 1.8], step: 3 },
        { kind: "point", at: [0.96, 1.8], label: "(8, 15)", labelAt: "e", step: 3 },
        { kind: "segment", from: [0, 0], to: [0.96, -1.8], step: 3 },
        { kind: "point", at: [0.96, -1.8], label: "(8, −15)", labelAt: "e", step: 3 },
        { kind: "label", at: [0.7, 0], label: "8", labelAt: "s", step: 4 },
        { kind: "label", at: [0.96, 0.9], label: "15", labelAt: "e", step: 4 },
        { kind: "label", at: [0.48, 0.9], label: "17", labelAt: "w", step: 4 },
        { kind: "region", within: quadrant(1, 2.04), tone: "good", step: 5 },
        { kind: "label", at: [1.25, 0.45], label: "I", labelAt: "e", tone: "good", step: 5 },
        { kind: "region", within: quadrant(4, 2.04), tone: "bad", step: 5 },
        { kind: "label", at: [1.2, -0.45], label: "IV", labelAt: "e", tone: "bad", step: 5 },
        { kind: "label", at: [1.9, 1.25], label: "sin θ = 15/17", labelAt: "e", tone: "good", step: 6 },
        { kind: "label", at: [1.9, -1.25], label: "sin θ = −15/17", labelAt: "e", tone: "bad", step: 6 },
      ],
    },
    visualSpec: t`Hold $|\cos\theta|$ fixed and drag the terminal arm into each quadrant: the right triangle under it keeps its sides, so every ratio keeps its size, while a sign table lights up the ratios that turn negative.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Takes every square root as positive, ignoring the quadrant",
      remediation: t`An identity gives a square, so the ratio is $\pm$ its root. The quadrant picks the sign: in the third quadrant, for example, $\sin$ and $\cos$ are both negative.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M2",
      mistake: t`Takes $\tan\theta = \frac{\cos\theta}{\sin\theta}$: the quotient upside down`,
      remediation: t`$\tan\theta = \frac{y}{x} = \frac{\sin\theta}{\cos\theta}$, with $\sin$ on top. Its reciprocal is $\cot\theta = \frac{\cos\theta}{\sin\theta}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M3",
      mistake: t`Pairs the reciprocals the wrong way: $\sec\theta = \frac{1}{\sin\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\cos\theta}$`,
      remediation: t`$\sec\theta = \frac{1}{\cos\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: each pair has exactly one **co**. So from $\sec\theta$ you get $\cos\theta$ first.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M4",
      mistake: t`Stops at the square: takes the value of $\tan^2\theta$ (or $\cos^2\theta$) as $\tan\theta$ itself`,
      remediation: t`The identity gives the square of the ratio. Take the square root before going on: $\cos^2\theta = \frac{4}{9}$ gives $\cos\theta = \pm\frac{2}{3}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M1 gives the key whenever the root it takes is really positive (every first-quadrant item, or $\tan\theta$ from $\sec\theta$ in the third quadrant). Diagnose it where the root must be negative.`,
    t`C06-M2 is modelled only where $\tan$ or $\cot$ comes from $\sin$ and $\cos$; with $\tan$ or $\cot$ given it doesn't apply. It gives the key when $|\sin\theta| = |\cos\theta|$.`,
    t`C06-M3 shows only when $\sec$ or $\operatorname{cosec}$ is given or asked.`,
    t`C06-M4 gives the key when the square is $0$ or $1$ (e.g. $\sec\theta = \sqrt{2}$, where $\tan^2\theta = 1$).`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q9(i)" },
      stem: t`If $\cos\theta = -\frac{3}{5}$ and $180^\circ < \theta < 270^\circ$, then $\tan\theta =$`,
      verify: { kind: "value", inputs: { A: "-3/5" }, params: { given: "cos", q: "3", ask: "tanA" } },
      options: [
        { key: "A", text: t`$- \frac{4}{3}$`, correct: false, misconceptionId: "C06-M1", value: "-4/3" },
        { key: "B", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C06-M2", value: "3/4" },
        { key: "C", text: t`$\frac{16}{15}$`, correct: false, misconceptionId: "C06-M4", value: "16/15" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: true, value: "4/3" },
      ],
      solution: {
        steps: [
          t`$\sin^2\theta = 1 - \cos^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$, so $\sin\theta = \pm\frac{4}{5}$.`,
          t`$180^\circ < \theta < 270^\circ$ is the third quadrant, where $\sin$ is negative: $\sin\theta = -\frac{4}{5}$.`,
          t`$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-4/5}{-3/5} = \frac{4}{3}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q9(ii)" },
      stem: t`If $\sec A = -\frac{25}{7}$ and $A$ lies in the second quadrant, then $\tan A =$`,
      verify: { kind: "value", inputs: { A: "-25/7" }, params: { given: "sec", q: "2", ask: "tanA" } },
      options: [
        { key: "A", text: t`$- \frac{24}{7}$`, correct: true, value: "-24/7" },
        { key: "B", text: t`$\frac{24}{7}$`, correct: false, misconceptionId: "C06-M1", value: "24/7" },
        { key: "C", text: t`$\frac{7}{24}$`, correct: false, misconceptionId: "C06-M3", value: "7/24" },
        { key: "D", text: t`$- \frac{576}{49}$`, correct: false, misconceptionId: "C06-M4", value: "-576/49" },
      ],
      solution: {
        steps: [
          t`$\tan^2 A = \sec^2 A - 1 = \frac{625}{49} - 1 = \frac{576}{49}$, so $\tan A = \pm\frac{24}{7}$.`,
          t`In the second quadrant only $\sin$ and $\operatorname{cosec}$ are positive, so $\tan A = -\frac{24}{7}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.1 SolvedEx.6" },
      stem: t`If $\sec x = \frac{13}{5}$ and $x$ lies in the fourth quadrant, then $\cot x =$`,
      verify: { kind: "value", inputs: { A: "13/5" }, params: { given: "sec", q: "4", ask: "cotA" } },
      options: [
        { key: "A", text: t`$- \frac{5}{12}$`, correct: true, value: "-5/12" },
        { key: "B", text: t`$\frac{5}{12}$`, correct: false, misconceptionId: "C06-M1", value: "5/12" },
        { key: "C", text: t`$\frac{12}{5}$`, correct: false, misconceptionId: "C06-M3", value: "12/5" },
        { key: "D", text: t`$- \frac{25}{144}$`, correct: false, misconceptionId: "C06-M4", value: "-25/144" },
      ],
      solution: {
        steps: [
          t`$\tan^2 x = \sec^2 x - 1 = \frac{169}{25} - 1 = \frac{144}{25}$, so $\tan x = \pm\frac{12}{5}$.`,
          t`In the fourth quadrant $\tan$ is negative: $\tan x = -\frac{12}{5}$.`,
          t`$\cot x = \frac{1}{\tan x} = -\frac{5}{12}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q11" },
      stem: t`If $\cot\theta = \frac{3}{4}$ and $\pi < \theta < \frac{3\pi}{2}$, then $4\operatorname{cosec}\theta + 5\cos\theta =$`,
      verify: { kind: "value", inputs: { A: "3/4" }, params: { given: "cot", q: "3", ask: "4*cscA + 5*cosA" } },
      options: [
        { key: "A", text: t`$- \frac{173}{20}$`, correct: false, misconceptionId: "C06-M4", value: "-173/20" },
        { key: "B", text: t`$-8$`, correct: true, value: "-8" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C06-M1", value: "8" },
        { key: "D", text: t`$-9$`, correct: false, misconceptionId: "C06-M3", value: "-9" },
      ],
      solution: {
        steps: [
          t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 1 + \frac{9}{16} = \frac{25}{16}$. In the third quadrant $\operatorname{cosec}$ is negative: $\operatorname{cosec}\theta = -\frac{5}{4}$, so $\sin\theta = -\frac{4}{5}$.`,
          t`$\cos\theta = \cot\theta\sin\theta = \frac{3}{4}\left(-\frac{4}{5}\right) = -\frac{3}{5}$.`,
          t`$4\operatorname{cosec}\theta + 5\cos\theta = 4\left(-\frac{5}{4}\right) + 5\left(-\frac{3}{5}\right) = -5 - 3 = -8$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q2" },
      stem: t`If $\frac{\sin A}{3} = \frac{\sin B}{4} = \frac{1}{5}$ and $A$, $B$ are angles in the second quadrant, then $4\tan A + 3\tan B =$`,
      verify: { kind: "value", inputs: { A: "3/5", B: "4/5" }, params: { given: "sin,sin", q: "2,2", ask: "4*tanA + 3*tanB" } },
      options: [
        { key: "A", text: t`$-7$`, correct: true, value: "-7" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C06-M1", value: "7" },
        { key: "C", text: t`$- \frac{91}{12}$`, correct: false, misconceptionId: "C06-M2", value: "-91/12" },
        { key: "D", text: t`$- \frac{125}{12}$`, correct: false, misconceptionId: "C06-M4", value: "-125/12" },
      ],
      solution: {
        steps: [
          t`$\sin A = \frac{3}{5}$ and $\sin B = \frac{4}{5}$. In the second quadrant $\cos$ is negative.`,
          t`$\cos^2 A = 1 - \frac{9}{25} = \frac{16}{25}$, so $\cos A = -\frac{4}{5}$ and $\tan A = \frac{3/5}{-4/5} = -\frac{3}{4}$.`,
          t`$\cos^2 B = 1 - \frac{16}{25} = \frac{9}{25}$, so $\cos B = -\frac{3}{5}$ and $\tan B = \frac{4/5}{-3/5} = -\frac{4}{3}$.`,
          t`$4\tan A + 3\tan B = 4\left(-\frac{3}{4}\right) + 3\left(-\frac{4}{3}\right) = -3 - 4 = -7$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc I Q3" },
      stem: t`If $\alpha$ is a root of $25\cos^2\theta + 5\cos\theta - 12 = 0$ and $\frac{\pi}{2} < \alpha < \pi$, then $\tan\alpha =$`,
      verify: { kind: "value", inputs: { p2: "25", p1: "5", p0: "-12" }, params: { given: "cosroot", q: "2", ask: "tanA" } },
      options: [
        { key: "A", text: t`$- \frac{4}{3}$`, correct: false, misconceptionId: "C06-M2", value: "-4/3" },
        { key: "B", text: t`$- \frac{9}{20}$`, correct: false, misconceptionId: "C06-M4", value: "-9/20" },
        { key: "C", text: t`$- \frac{3}{4}$`, correct: true, value: "-3/4" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C06-M1", value: "4/3" },
      ],
      solution: {
        steps: [
          t`$25\cos^2\theta + 5\cos\theta - 12 = (5\cos\theta - 3)(5\cos\theta + 4) = 0$, so $\cos\theta = \frac{3}{5}$ or $-\frac{4}{5}$.`,
          t`$\frac{\pi}{2} < \alpha < \pi$ is the second quadrant, where $\cos$ is negative: $\cos\alpha = -\frac{4}{5}$.`,
          t`$\sin^2\alpha = 1 - \frac{16}{25} = \frac{9}{25}$, and $\sin$ is positive in the second quadrant: $\sin\alpha = \frac{3}{5}$.`,
          t`$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{3/5}{-4/5} = -\frac{3}{4}$.`,
        ],
      },
    },
  ],
};
