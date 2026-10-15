import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/**
 * The xy-plane drawn as plain axes (no grid or numbers: only directions matter here), with its quadrants
 * unless `quadrants` is false; O is labelled at `oAt`, in a quadrant no arm crosses.
 */
function planeOf(len: number, quadrants = true, oAt: FigureElement["labelAt"] = "sw"): FigureElement[] {
  const q = len * 0.75;
  const axes: FigureElement[] = [
    { kind: "segment", from: [-len, 0], to: [len, 0], tone: "muted" },
    { kind: "label", at: [len, 0], label: "x", labelAt: "s", tone: "muted" },
    { kind: "segment", from: [0, -len], to: [0, len], tone: "muted" },
    { kind: "label", at: [0, len], label: "y", labelAt: "w", tone: "muted" },
    { kind: "point", at: [0, 0], label: "O", labelAt: oAt, tone: "muted" },
  ];
  if (!quadrants) return axes;
  return [
    ...axes,
    { kind: "label", at: [q, q], label: "I", labelAt: "n", tone: "muted" },
    { kind: "label", at: [-q, q], label: "II", labelAt: "n", tone: "muted" },
    { kind: "label", at: [-q, -q], label: "III", labelAt: "n", tone: "muted" },
    { kind: "label", at: [q, -q], label: "IV", labelAt: "n", tone: "muted" },
  ];
}

/** The initial arm along the positive x-axis, labelled clear of the arms and axis labels. */
const initialArm = (labelAt: Pt = [2.05, 0]): FigureElement[] => [
  { kind: "segment", from: [0, 0], to: [2.4, 0], tone: "good" },
  { kind: "label", at: labelAt, label: "initial arm", labelAt: "n", tone: "good" },
];

/** The point r from O along the arm at `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Without a calculator: is $\sin 1830^\circ$ bigger or smaller than $\sin 30^\circ$?`,
    reveal: t`Neither: they are equal. $1830^\circ = 5 \times 360^\circ + 30^\circ$. Five whole turns bring the arm back to where it started, then it turns $30^\circ$ more. Same arm, same point $P$, so $\sin 1830^\circ = \sin 30^\circ = \frac{1}{2}$.`,
  },
  explanation: {
    intuition: [
      t`An angle measures turning: here the arm turns $50^\circ$ from the initial arm.`,
      t`A **whole turn**, $360^\circ$ or $2\pi$, brings the arm back to where it started.`,
      t`So the point $P(x, y)$ on it is back too, and all six functions repeat.`,
      t`That is why we drop whole turns first.`,
      t`A **negative angle** turns **clockwise**, the way a clock's hands go: $-50^\circ$ ends below the $x$-axis.`,
      t`Its arm is the $50^\circ$ arm reflected in the $x$-axis, its **mirror image**: $x$ stays, $y$ changes sign.`,
    ],
    figure: {
      alt: "The xy-plane. An arm turns 50° anticlockwise from the initial arm. Another arm starts there and turns one whole turn, 360°, more, ending on the same arm, at the same point P(x, y). Then an arm turns 50° clockwise, −50°, and ends below the x-axis at (x, −y): the mirror image of P in the x-axis, joined to it by a dashed line.",
      axes: "none",
      view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
      elements: [
        ...planeOf(2.6, false),
        ...initialArm(),
        { kind: "turn", r: 1.4, to: 50, label: "50°", labelAt: "nw", step: 1 },
        { kind: "turn", r: 2.2, from: 50, to: 410, label: "+ 360°", labelAt: "nw", step: 2 },
        { kind: "point", at: tip(2.2, 50), label: "P(x, y)", labelAt: "e", step: 3 },
        { kind: "turn", r: 2.2, to: -50, label: "−50°", labelAt: "sw", tone: "bad", step: 5 },
        { kind: "segment", from: tip(2.2, 50), to: tip(2.2, -50), dashed: true, tone: "muted", step: 6 },
        { kind: "point", at: tip(2.2, -50), label: "(x, −y)", labelAt: "e", tone: "bad", step: 6 },
      ],
    },
    formal: [
      {
        title: "Drop whole turns",
        points: [
          t`Adding $2n\pi$, where $n$ is any integer, adds $n$ whole turns.`,
          t`The arm ends where it was, at the same point $P$, so $\sin(2n\pi + \theta) = \sin\theta$.`,
          t`In the same way, $\cos(2n\pi + \theta) = \cos\theta$.`,
          t`The same holds for cosec and sec.`,
          t`Tan and cot repeat sooner, every $\pi$: $\tan(n\pi + \theta) = \tan\theta$.`,
          t`Half a turn changes the signs of both $x$ and $y$, so $\tan\theta = \frac{y}{x}$ stays the same.`,
        ],
        figure: {
          alt: "The xy-plane. The arm of θ lies in Quadrant I. A second arm starts on it and turns one whole turn, 2π, ending on the same arm at the same point P(x, y). A third turns half a turn, π, from the arm of θ and points the opposite way, to (−x, −y): both coordinates change sign, so y/x is the same.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, false, "se"),
            ...initialArm(),
            { kind: "turn", r: 1.4, to: 40, label: "θ", labelAt: "nw" },
            { kind: "turn", r: 2.2, from: 40, to: 400, label: "2π + θ", labelAt: "nw", step: 1 },
            { kind: "point", at: tip(2.2, 40), label: "P(x, y)", labelAt: "e", step: 2 },
            { kind: "turn", r: 2.2, from: 40, to: 220, label: "π + θ", labelAt: "nw", tone: "bad", step: 5 },
            { kind: "point", at: tip(2.2, 220), label: "(−x, −y)", labelAt: "se", tone: "bad", step: 6 },
          ],
        },
      },
      {
        title: "Whole turns in degrees, radians",
        points: [
          t`In degrees, take away multiples of $360^\circ$.`,
          t`For example, $765^\circ = 2 \times 360^\circ + 45^\circ$: two whole turns and $45^\circ$ more.`,
          t`So $\cos 765^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$.`,
          t`In radians, take away multiples of $2\pi$: $\frac{41\pi}{4} = 10\pi + \frac{\pi}{4}$.`,
          t`So $\sin\frac{41\pi}{4} = \sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.`,
        ],
        figure: {
          alt: "The xy-plane. An arm turns 765° anticlockwise: two whole turns and 45° more, ending 45° above the positive x-axis, as 765° − 720° = 45°. The angle 41π/4, five whole turns and π/4 more, ends on the same arm: 41π/4 − 10π = π/4.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, false),
            ...initialArm(),
            { kind: "turn", r: 2.2, to: 765, label: "765°", labelAt: "e", step: 2 },
            { kind: "label", at: [-2.7, -1.9], label: "765° − 720° = 45°", labelAt: "e", step: 2 },
            { kind: "label", at: tip(2.2, 45), label: "41π/4", labelAt: "nw", tone: "good", step: 4 },
            { kind: "label", at: [-2.7, -2.5], label: "41π/4 − 10π = π/4", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Negative angles",
        points: [
          t`Take a point $P(x, y)$ on the arm of $\theta$, a distance $r$ from $O$.`,
          t`Its mirror image $(x, -y)$ lies on the arm of $-\theta$, also $r$ from $O$.`,
          t`So $\sin(-\theta) = \frac{-y}{r} = -\sin\theta$.`,
          t`And $\cos(-\theta) = \frac{x}{r} = \cos\theta$: $x$ does not change.`,
          t`And $\tan(-\theta) = \frac{-y}{x} = -\tan\theta$.`,
          t`So cosec and cot change sign too; sec does not.`,
        ],
        figure: {
          alt: "The xy-plane. The arm of θ lies in Quadrant I with the point P(x, y) on it. The arm of −θ is its mirror image in the x-axis, with the point (x, −y). A dashed line joins the two points: its upper half is y, its lower half −y, and both points are x along the x-axis.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, false),
            ...initialArm(),
            { kind: "turn", r: 2.2, to: 50, label: "θ", labelAt: "nw" },
            { kind: "point", at: tip(2.2, 50), label: "P(x, y)", labelAt: "e", step: 1 },
            { kind: "turn", r: 2.2, to: -50, label: "−θ", labelAt: "sw", tone: "bad", step: 2 },
            { kind: "point", at: tip(2.2, -50), label: "(x, −y)", labelAt: "e", tone: "bad", step: 2 },
            { kind: "segment", from: tip(2.2, 50), to: tip(2.2, -50), dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [1.414, 0.8], label: "y", labelAt: "e", step: 3 },
            { kind: "label", at: [1.414, -0.8], label: "−y", labelAt: "e", tone: "bad", step: 3 },
            { kind: "label", at: [0.9, 0], label: "x", labelAt: "s", step: 4 },
          ],
        },
      },
      {
        title: "Reference angle",
        points: [
          t`First drop whole turns, so the angle $\theta$ lies between $0^\circ$ and $360^\circ$.`,
          t`Its **reference angle** is the acute angle, under $90^\circ$, between its arm and the $x$-axis.`,
          t`In quadrant II, the reference angle is $180^\circ - \theta$.`,
          t`In quadrant III, it is $\theta - 180^\circ$.`,
          t`In quadrant IV, it is $360^\circ - \theta$.`,
        ],
        figure: {
          alt: "The xy-plane with the quadrants I to IV. An arm θ turns anticlockwise into Quadrant II; the acute angle between it and the negative x-axis is 180° − θ. It turns on into Quadrant III, where the angle down to the negative x-axis is θ − 180°, and on into Quadrant IV, where the angle up to the positive x-axis is 360° − θ.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, true, "ne"),
            ...initialArm([1.2, 0]),
            { kind: "turn", r: 2.2, to: 150, label: "θ", labelAt: "n", step: 3 },
            { kind: "arc", centre: [0, 0], r: 1.2, from: 150, to: 180, label: "180° − θ", labelAt: "nw", tone: "good", step: 3 },
            { kind: "turn", r: 2.2, from: 150, to: 210, label: "θ", labelAt: "s", step: 4 },
            { kind: "arc", centre: [0, 0], r: 1.2, from: 180, to: 210, label: "θ − 180°", labelAt: "sw", tone: "good", step: 4 },
            { kind: "turn", r: 2.2, from: 210, to: 330, label: "θ", labelAt: "s", step: 5 },
            { kind: "arc", centre: [0, 0], r: 1.2, from: 330, to: 360, label: "360° − θ", labelAt: "se", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Reference angle and sign",
        points: [
          t`The value is the value at the reference angle, with the sign of the quadrant.`,
          t`For example, $240^\circ$ lies in quadrant III.`,
          t`Its reference angle is $240^\circ - 180^\circ = 60^\circ$.`,
          t`Sin is negative in quadrant III, where $y < 0$.`,
          t`So $\sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$.`,
        ],
        figure: {
          alt: "The xy-plane with the quadrants I to IV. An arm turns 240° anticlockwise and stops in Quadrant III, which is shaded. The acute angle between it and the negative x-axis is 60°. There y is negative, so sin 240° = −√3/2.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, true, "nw"),
            ...initialArm([1.2, 0]),
            { kind: "turn", r: 2.2, to: 240, label: "240°", labelAt: "w", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], tone: "good", step: 2 },
            { kind: "arc", centre: [0, 0], r: 1.5, from: 180, to: 240, label: "60°", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [-2.7, -2.5], label: "y < 0 here", labelAt: "e", tone: "bad", step: 4 },
            { kind: "label", at: [0.25, -2.5], label: "sin 240° = −√3/2", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "Only whole turns",
        points: [
          t`Only a whole turn brings the arm back to the same place.`,
          t`A quarter turn, $90^\circ$, moves the arm into another quadrant.`,
          t`So $90^\circ$ can't be dropped like $360^\circ$.`,
          t`Half a turn, $180^\circ$, can't be dropped either, except for tan and cot.`,
        ],
        figure: {
          alt: "The xy-plane with the quadrants I to IV and the arm of θ in Quadrant I. One arm turns a whole turn, 360°, from it and ends on the same arm. Another turns a quarter turn, 90°, and ends in Quadrant II; a third turns half a turn, 180°, and ends in Quadrant III: different arms, so different values.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, true, "se"),
            ...initialArm([1.2, 0]),
            { kind: "turn", r: 1.4, to: 30, label: "θ", labelAt: "nw" },
            { kind: "turn", r: 2.2, from: 30, to: 390, label: "360° + θ", labelAt: "n", step: 1 },
            { kind: "turn", r: 2.2, from: 30, to: 120, label: "90° + θ", labelAt: "n", tone: "bad", step: 2 },
            { kind: "turn", r: 2.2, from: 30, to: 210, label: "180° + θ", labelAt: "s", tone: "bad", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find $\cos(-480^\circ)$.`,
      steps: [
        t`Cos keeps its sign for a negative angle: $\cos(-480^\circ) = \cos 480^\circ$.`,
        t`Drop one whole turn: $480^\circ = 360^\circ + 120^\circ$, so $\cos 480^\circ = \cos 120^\circ$.`,
        t`$120^\circ$ is in quadrant II. Its reference angle is $180^\circ - 120^\circ = 60^\circ$.`,
        t`Cos is negative in quadrant II: $\cos 120^\circ = -\cos 60^\circ$ $= -\frac{1}{2}$.`,
      ],
      answer: t`$\cos(-480^\circ) = -\frac{1}{2}$`,
    },
    visualSpec: t`Drag the arm round and round: a turn counter climbs while $P$ and its six values repeat each turn; flip the sign of $\theta$ to see $P$ reflect in the $x$-axis.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Drops whole turns and finds the reference angle, but gives the value there without the quadrant's sign: $\sin 240^\circ = \sin 60^\circ$.`,
      remediation: t`The reference angle gives the size only. Take the sign from the quadrant where the arm stops: in quadrant III only tan and cot are positive, so $\sin 240^\circ = -\sin 60^\circ$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: t`Ignores the minus sign of a negative angle: $\sin(-\theta) = \sin\theta$.`,
      remediation: t`A negative angle turns clockwise, so $P(x, y)$ becomes $(x, -y)$. Sin, tan, cosec and cot change sign: $\sin(-\theta) = -\sin\theta$. Only cos and sec stay the same.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: t`Takes the minus sign out of every function, cos and sec too: $\cos(-\theta) = -\cos\theta$.`,
      remediation: t`Turning clockwise flips only $y$; $x$ stays the same. So $\cos(-\theta) = \cos\theta$ and $\sec(-\theta) = \sec\theta$. Only sin, tan, cosec and cot change sign.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: t`Measures the reference angle to the $y$-axis ($120^\circ = 90^\circ + 30^\circ$, so uses $30^\circ$), keeping the right sign.`,
      remediation: t`The reference angle is the acute angle to the **$x$-axis**: $180^\circ - \theta$ in quadrant II, $\theta - 180^\circ$ in III, $360^\circ - \theta$ in IV. For $120^\circ$ it is $60^\circ$, not $30^\circ$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: t`Drops quarter turns as if they were whole turns: $\sin(90^\circ + \theta) = \sin\theta$, so $\sin 120^\circ = \sin 30^\circ$.`,
      remediation: t`Only a whole turn ($360^\circ$ or $2\pi$) brings the arm back to the same place, so only whole turns can be dropped. A quarter turn moves the arm into the next quadrant and changes the value.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Forgets to take the reciprocal: works out sin for cosec, cos for sec.",
      remediation: t`$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$ and $\sec\theta = \frac{1}{\cos\theta}$. Find sin or cos first, sign included, then flip it.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M1 gives the key whenever the value is positive; diagnose it on items with a negative key.",
    "C04-M2 gives the key on cos and sec, and agrees with C04-M1 when an odd function of a negative angle is negative; diagnose it on sin, tan, cosec or cot of a negative angle with a positive value (Q4).",
    "C04-M3 gives the key on sin, tan, cosec and cot, and agrees with C04-M1 when cos or sec of a negative angle is negative; diagnose it on cos or sec of a negative angle with a positive value (Q5).",
    t`C04-M4 and C04-M5 give the key when the reference angle is $45^\circ$; C04-M5 also gives the key when the angle lands in quadrant I after dropping turns (as in the book's $\cos 1140^\circ$). The two agree when the value is positive in quadrant II or IV (Q4, Q5 tag C04-M4).`,
    t`C04-M6 applies only to sec, cosec and cot; for cot it agrees with C04-M4 at $30^\circ$ and $60^\circ$ reference angles, so cot items can't separate them.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q1" },
      stem: t`$\cos 150^\circ =$`,
      verify: { kind: "value", inputs: { a: "5*pi/6" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C04-M4", value: "-1/2" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M5", value: "1/2" },
        { key: "C", text: t`$- \frac{\sqrt{3}}{2}$`, correct: true, value: "-sqrt(3)/2" },
        { key: "D", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`$150^\circ$ is in quadrant II. Its reference angle is $180^\circ - 150^\circ = 30^\circ$.`,
          t`Cos is negative in quadrant II.`,
          t`$\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q14(i)" },
      stem: t`$\sin \frac{23\pi}{6} =$`,
      verify: { kind: "value", inputs: { a: "23*pi/6" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M1", value: "1/2" },
        { key: "B", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M4", value: "-sqrt(3)/2" },
        { key: "C", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(3)/2" },
        { key: "D", text: t`$- \frac{1}{2}$`, correct: true, value: "-1/2" },
      ],
      solution: {
        steps: [
          t`Drop the whole turn: $\frac{23\pi}{6} = 2\pi + \frac{11\pi}{6}$, so $\sin\frac{23\pi}{6} = \sin\frac{11\pi}{6}$.`,
          t`$\frac{11\pi}{6}$ ($330^\circ$) is in quadrant IV. Its reference angle is $2\pi - \frac{11\pi}{6} = \frac{\pi}{6}$.`,
          t`Sin is negative in quadrant IV: $\sin\frac{23\pi}{6} = -\sin\frac{\pi}{6} = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q14(ii)" },
      stem: t`$\tan 1200^\circ =$`,
      verify: { kind: "value", inputs: { a: "20*pi/3" }, params: { f: "tan" } },
      options: [
        { key: "A", text: t`$-\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M4", value: "-sqrt(3)/3" },
        { key: "B", text: t`$\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M5", value: "sqrt(3)/3" },
        { key: "C", text: t`$- \sqrt{3}$`, correct: true, value: "-sqrt(3)" },
        { key: "D", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(3)" },
      ],
      solution: {
        steps: [
          t`Drop whole turns: $1200^\circ = 3 \times 360^\circ + 120^\circ$, so $\tan 1200^\circ = \tan 120^\circ$.`,
          t`$120^\circ$ is in quadrant II. Its reference angle is $60^\circ$, and tan is negative there.`,
          t`$\tan 1200^\circ = -\tan 60^\circ = -\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q1" },
      stem: t`$\operatorname{cosec}(-210^\circ) =$`,
      verify: { kind: "value", inputs: { a: "-7*pi/6" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C04-M2", value: "-2" },
        { key: "B", text: t`$\frac{2}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M4", value: "2*sqrt(3)/3" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M6", value: "1/2" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Cosec changes sign with the angle: $\operatorname{cosec}(-210^\circ) = -\operatorname{cosec} 210^\circ$.`,
          t`$210^\circ$ is in quadrant III, reference angle $30^\circ$. Sin and cosec are negative there: $\operatorname{cosec} 210^\circ = -\operatorname{cosec} 30^\circ = -2$.`,
          t`$\operatorname{cosec}(-210^\circ) = -(-2) = 2$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q1" },
      stem: t`$\sec(-330^\circ) =$`,
      verify: { kind: "value", inputs: { a: "-11*pi/6" }, params: { f: "sec" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M6", value: "sqrt(3)/2" },
        { key: "B", text: t`$\frac{2}{\sqrt{3}}$`, correct: true, value: "2*sqrt(3)/3" },
        { key: "C", text: t`$-\frac{2}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M3", value: "-2*sqrt(3)/3" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C04-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`Sec keeps its sign for a negative angle: $\sec(-330^\circ) = \sec 330^\circ$.`,
          t`$330^\circ$ is in quadrant IV, reference angle $360^\circ - 330^\circ = 30^\circ$. Cos and sec are positive there.`,
          t`$\sec 330^\circ = \frac{1}{\cos 30^\circ} = \frac{1}{\sqrt{3}/2} = \frac{2}{\sqrt{3}}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q1" },
      stem: t`$\operatorname{cosec} 300^\circ =$`,
      verify: { kind: "value", inputs: { a: "5*pi/3" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$-\frac{2}{\sqrt{3}}$`, correct: true, value: "-2*sqrt(3)/3" },
        { key: "B", text: t`$\frac{2}{\sqrt{3}}$`, correct: false, misconceptionId: "C04-M1", value: "2*sqrt(3)/3" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C04-M4", value: "-2" },
        { key: "D", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C04-M6", value: "-sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`$300^\circ$ is in quadrant IV. Its reference angle is $360^\circ - 300^\circ = 60^\circ$.`,
          t`Sin is negative in quadrant IV: $\sin 300^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2}$.`,
          t`$\operatorname{cosec} 300^\circ = \frac{1}{\sin 300^\circ} = -\frac{2}{\sqrt{3}}$.`,
        ],
      },
    },
  ],
};
