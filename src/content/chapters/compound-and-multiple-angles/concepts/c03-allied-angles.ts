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

/** The initial arm along the positive x-axis, its label at `labelAt` on the side `side`. */
const initialArm = (len: number, labelAt: Pt, side: FigureElement["labelAt"] = "n"): FigureElement[] => [
  { kind: "segment", from: [0, 0], to: [len, 0], tone: "good" },
  { kind: "label", at: labelAt, label: "initial arm", labelAt: side, tone: "good" },
];

/** The point r from O along the arm at `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Without a calculator: is $\cos 100^\circ$ equal to $\cos 10^\circ$, $-\cos 10^\circ$, $\sin 10^\circ$ or $-\sin 10^\circ$?`,
    reveal: t`$100^\circ = 90^\circ + 10^\circ$. Adding $90^\circ$ switches cos to sin. And $100^\circ$ is in the second quadrant, where cos is negative. So $\cos 100^\circ = -\sin 10^\circ$. Two questions settle every allied angle: does the function switch, and what sign does the quadrant give?`,
  },
  explanation: {
    intuition: [
      t`Take the point $P(\cos\theta, \sin\theta)$ for an angle $\theta$ on the unit circle.`,
      t`An angle is **allied** to $\theta$ when their sum or difference is a multiple of $90^\circ$, like $90^\circ + \theta$.`,
      t`Add $90^\circ$, and $P$ makes a **quarter turn** to $(-\sin\theta, \cos\theta)$.`,
      t`Its $x$ and $y$ trade places, one with a minus, so cos and sin trade places too.`,
      t`Add $180^\circ$, and a **half turn** flips $P$ through the centre to $(-\cos\theta, -\sin\theta)$.`,
      t`Then $x$ and $y$ keep their roles and only change sign; $360^\circ$ brings $P$ right back.`,
    ],
    figure: {
      alt: "The unit circle about O on plain x- and y-axes, with the initial arm along the positive x-axis. Step 1: an arm turns θ, a little way into Quadrant I, to the point P(cos θ, sin θ). Step 3: from there it makes a quarter turn, to 90° + θ, ending in Quadrant II at (−sin θ, cos θ): the coordinates trade places. Step 5: from P it makes a half turn instead, to 180° + θ, ending in Quadrant III at (−cos θ, −sin θ), straight through the centre from P along a dashed line: both coordinates only change sign. The three points' coordinates are listed below the circle.",
      axes: "none",
      view: { x: [-3.2, 3.2], y: [-4.1, 2.6] },
      elements: [
        ...planeOf(2.4, false, "se"),
        ...initialArm(2.4, [1.0, 0], "s"),
        { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
        { kind: "label", at: tip(2, -40), label: "unit circle", labelAt: "se", tone: "muted" },
        { kind: "turn", r: 2, to: 30, step: 1 },
        { kind: "label", at: tip(0.95, 14), label: "θ", labelAt: "e", step: 1 },
        { kind: "point", at: tip(2, 30), label: "P", labelAt: "ne", step: 1 },
        { kind: "label", at: [-3.1, -2.75], label: "P: (cos θ, sin θ)", labelAt: "e", step: 1 },
        { kind: "turn", r: 2, from: 30, to: 120, label: "90° + θ", labelAt: "nw", step: 3 },
        { kind: "point", at: tip(2, 120), step: 3 },
        { kind: "label", at: [-3.1, -3.3], label: "90° + θ: (−sin θ, cos θ)", labelAt: "e", step: 3 },
        { kind: "turn", r: 2, from: 30, to: 210, label: "180° + θ", labelAt: "sw", tone: "bad", step: 5 },
        { kind: "segment", from: tip(2, 30), to: tip(2, 210), dashed: true, tone: "muted", step: 5 },
        { kind: "point", at: tip(2, 210), tone: "bad", step: 5 },
        { kind: "label", at: [-3.1, -3.85], label: "180° + θ: (−cos θ, −sin θ)", labelAt: "e", tone: "bad", step: 5 },
      ],
    },
    formal: [
      {
        title: "Switch the function or keep it",
        points: [
          t`Write the allied angle as $n \cdot 90^\circ \pm \theta$, where $n$ is a whole number.`,
          t`Treat $\theta$ as **acute**, between $0^\circ$ and $90^\circ$; the result still holds for every $\theta$.`,
          t`$90^\circ$ and $270^\circ$ are **odd multiples** of $90^\circ$: $n$ is $1$ or $3$.`,
          t`$180^\circ$ and $360^\circ$ are **even multiples** of $90^\circ$: $n$ is $2$ or $4$.`,
          t`For an odd multiple, switch: $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$.`,
          t`For an even multiple, keep the function as it is.`,
        ],
      },
      {
        title: "Take the sign from the quadrant",
        points: [
          t`The sign is that of the **original** function, the one you started with.`,
          t`Take that sign in the quadrant where $n \cdot 90^\circ \pm \theta$ lies.`,
          t`For example, $90^\circ + \theta$ lies in quadrant II, since $\theta$ is acute.`,
          t`Cos is negative in quadrant II, where $x < 0$.`,
          t`Cos switches to sin, so $\cos(90^\circ + \theta) = -\sin\theta$.`,
        ],
        figure: {
          alt: "The xy-plane with the quadrants I to IV. The arm of the acute angle θ lies in Quadrant I. Step 3: an arm turns on from it by 90°, to 90° + θ, and stops in Quadrant II, which is shaded. Step 4: there x < 0, so cos is negative. Step 5: cos(90° + θ) = −sin θ.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, true, "se"),
            ...initialArm(2.4, [1.2, 0]),
            { kind: "turn", r: 1.4, to: 30, label: "θ", labelAt: "nw" },
            { kind: "turn", r: 2.2, from: 30, to: 120, label: "90° + θ", labelAt: "ne", step: 3 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2.4 }, { kind: "sector", centre: [0, 0], from: 90, to: 180 }], tone: "good", step: 3 },
            { kind: "label", at: [-2.7, 1.0], label: "x < 0 here", labelAt: "e", tone: "bad", step: 4 },
            { kind: "label", at: [-2.7, -2.5], label: "cos(90° + θ) = −sin θ", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "The table: quadrants I and II",
        points: [
          t`Each row gives sin, cos and tan of one allied angle, in that order.`,
          t`At $90^\circ - \theta$ (quadrant I), they are $\cos\theta$, $\sin\theta$ and $\cot\theta$.`,
          t`At $90^\circ + \theta$ (quadrant II), they are $\cos\theta$, $-\sin\theta$ and $-\cot\theta$.`,
          t`At $180^\circ - \theta$ (quadrant II), they are $\sin\theta$, $-\cos\theta$ and $-\tan\theta$.`,
        ],
      },
      {
        title: "The table: quadrants III and IV",
        points: [
          t`At $180^\circ + \theta$ (quadrant III), they are $-\sin\theta$, $-\cos\theta$ and $\tan\theta$.`,
          t`At $270^\circ - \theta$ (quadrant III), they are $-\cos\theta$, $-\sin\theta$ and $\cot\theta$.`,
          t`At $270^\circ + \theta$ (quadrant IV), they are $-\cos\theta$, $\sin\theta$ and $-\cot\theta$.`,
          t`At $360^\circ - \theta$ (quadrant IV), they are $-\sin\theta$, $\cos\theta$ and $-\tan\theta$.`,
          t`Each row follows from the two rules: switch or keep, then the sign.`,
        ],
      },
      {
        title: "Large and negative angles",
        points: [
          t`Here $f$ stands for any of the six functions.`,
          t`Remove whole turns first: $f(k \cdot 360^\circ + \theta) = f(\theta)$ for any integer $k$.`,
          t`Only cos and sec are **even**: they give the same value at $-\theta$ as at $\theta$.`,
          t`So $\cos(-\theta) = \cos\theta$ and $\sec(-\theta) = \sec\theta$.`,
          t`The other four are **odd**: they change sign, as in $\sin(-\theta) = -\sin\theta$.`,
        ],
      },
      {
        title: "Where the table comes from",
        points: [
          t`Each row is the sum or difference formula with the values at $90^\circ$, $180^\circ$, $270^\circ$ or $360^\circ$.`,
          t`For example, take $\cos(90^\circ + \theta)$ and use the sum formula.`,
          t`It equals $\cos 90^\circ\cos\theta$ $- \sin 90^\circ\sin\theta$.`,
          t`As $\cos 90^\circ = 0$ and $\sin 90^\circ = 1$, this is $-\sin\theta$.`,
        ],
      },
      {
        title: "Sums that pair off",
        points: [
          t`Look for angles that add up to $180^\circ$ or $360^\circ$.`,
          t`For example, $55^\circ + 125^\circ = 180^\circ$.`,
          t`Their points on the unit circle are mirror images in the $y$-axis.`,
          t`So $\cos 125^\circ = \cos(180^\circ - 55^\circ)$, which is $-\cos 55^\circ$.`,
          t`Then $\cos 55^\circ + \cos 125^\circ = 0$.`,
        ],
        figure: {
          alt: "The unit circle about O on plain x- and y-axes. Step 2: two arms turn from the initial arm, one to 55° and one to 125°. Step 3: their points on the circle are joined by a dashed line across the y-axis: they are mirror images in it. Step 4: dashed lines drop from each point to the x-axis; the 55° point is cos 55° along it, the 125° point −cos 55°. Step 5: cos 55° + cos 125° = 0.",
          axes: "none",
          view: { x: [-3.4, 4.0], y: [-3.2, 3.2] },
          elements: [
            ...planeOf(3.0, false, "sw"),
            ...initialArm(3.0, [2.85, 0]),
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "turn", r: 2, to: 55, label: "55°", labelAt: "ne", step: 2 },
            { kind: "turn", r: 2, to: 125, label: "125°", labelAt: "nw", step: 2 },
            { kind: "segment", from: tip(2, 55), to: tip(2, 125), dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: tip(2, 55), step: 3 },
            { kind: "point", at: tip(2, 125), step: 3 },
            { kind: "segment", from: tip(2, 55), to: [tip(2, 55)[0], 0], dashed: true, tone: "good", step: 4 },
            { kind: "label", at: [tip(2, 55)[0], 0], label: "cos 55°", labelAt: "s", tone: "good", step: 4 },
            { kind: "segment", from: tip(2, 125), to: [tip(2, 125)[0], 0], dashed: true, tone: "bad", step: 4 },
            { kind: "label", at: [tip(2, 125)[0], 0], label: "−cos 55°", labelAt: "s", tone: "bad", step: 4 },
            { kind: "label", at: [-3.3, -2.75], label: "cos 55° + cos 125° = 0", labelAt: "e", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the value of $\sec(-855^\circ)$.`,
      steps: [
        t`sec is even: $\sec(-855^\circ) = \sec 855^\circ$.`,
        t`Remove full turns: $855^\circ - 2 \times 360^\circ$ $= 135^\circ$, so this is $\sec 135^\circ$.`,
        t`$135^\circ = 90^\circ + 45^\circ$, an odd multiple of $90^\circ$: sec switches to cosec. $135^\circ$ is in the second quadrant, where sec (like cos) is negative.`,
        t`$\sec 135^\circ = -\operatorname{cosec} 45^\circ$ $= -\sqrt{2}$.`,
      ],
      answer: t`$\sec(-855^\circ) = -\sqrt{2}$.`,
    },
    visualSpec: t`Drag $\theta$ round the unit circle and watch the point for $90^\circ + \theta$ (or $180^\circ + \theta$, $270^\circ - \theta$, ...) move with it: its coordinates swap for an odd multiple of $90^\circ$ and only flip sign for an even one, with the quadrant's sign lit up.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Switching the function at the wrong multiples: keeping it at $90^\circ$ or $270^\circ$, or switching it at $180^\circ$ or $360^\circ$`,
      remediation: t`Only an odd multiple of $90^\circ$ ($90^\circ$, $270^\circ$) switches the function: $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$. At $180^\circ$ and $360^\circ$ the function stays the same.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Taking the sign from the new function after switching, instead of from the original one",
      remediation: t`Fix the sign before you switch: it is the sign of the function you started with, in the quadrant where the angle lies. $\cos(90^\circ + \theta)$ is negative because cos is negative in the second quadrant, so it equals $-\sin\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: "Leaving out the quadrant sign, as if every allied angle gave a positive value",
      remediation: t`Every allied angle lands in a quadrant, and the original function's sign there goes in front: $\sin(180^\circ + \theta) = -\sin\theta$ because sin is negative in the third quadrant.`,
      fallback: { kind: "ext", topic: "signs in the four quadrants" },
    },
    {
      id: "C03-M4",
      mistake: t`Dropping the minus sign of a negative angle: taking $f(-\theta) = f(\theta)$ for every function`,
      remediation: t`Only cos and sec are even: $\cos(-\theta) = \cos\theta$, $\sec(-\theta) = \sec\theta$. sin, tan, cot and cosec are odd, so the minus comes outside: $\tan(-\theta) = -\tan\theta$.`,
      fallback: { kind: "ext", topic: "trigonometric functions of negative angles" },
    },
    {
      id: "C03-M5",
      mistake: t`Dropping the multiple of $90^\circ$ altogether, as if the function repeated every $90^\circ$`,
      remediation: t`You may drop only full turns of $360^\circ$. A leftover $90^\circ$, $180^\circ$ or $270^\circ$ still switches the function or changes its sign: $\cos 200^\circ = \cos(180^\circ + 20^\circ) = -\cos 20^\circ$, not $\cos 20^\circ$.`,
      fallback: { kind: "ext", topic: "periodicity of trigonometric functions" },
    },
  ],
  engineNotes: [
    t`C03-M1 gives the key when $\theta = 45^\circ$ ($\sin 45^\circ = \cos 45^\circ$, $\tan 45^\circ = \cot 45^\circ$): diagnose it with other angles.`,
    "C03-M2 shows only when the switch pairs functions of different sign in that quadrant (sin and cos, sec and cosec); tan and cot always share a sign. On a single negative value it gives the same answer as C03-M3, so it is drawn from items where the terms combine (C03-Q3, C03-Q5).",
    "C03-M4 changes nothing for cos and sec, or under an even power: it needs a negative angle inside sin, tan, cot or cosec, and on a single value it matches C03-M3, so it is drawn from products (C03-Q4, C03-Q6).",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q1(i)" },
      stem: t`The value of $\sin 690^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(690)" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M3", value: "1/2" },
        { key: "B", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M5", value: "sqrt(3)/2" },
        { key: "C", text: t`$- \frac{1}{2}$`, correct: true, value: "-1/2" },
        { key: "D", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M1", value: "-sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`Remove a full turn: $690^\circ - 360^\circ = 330^\circ$, so $\sin 690^\circ = \sin 330^\circ$.`,
          t`$330^\circ = 360^\circ - 30^\circ$, an even multiple of $90^\circ$: sin stays sin. $330^\circ$ is in the fourth quadrant, where sin is negative.`,
          t`$\sin 690^\circ = -\sin 30^\circ = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.2 SolvedEx.1(iii)" },
      stem: t`The value of $\tan 840^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "tan(840)" } },
      options: [
        { key: "A", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C03-M3", value: "sqrt(3)" },
        { key: "B", text: t`$\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C03-M5", value: "sqrt(3)/3" },
        { key: "C", text: t`$-\sqrt{3}$`, correct: true, value: "-sqrt(3)" },
        { key: "D", text: t`$-\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C03-M1", value: "-sqrt(3)/3" },
      ],
      solution: {
        steps: [
          t`Remove full turns: $840^\circ - 2 \times 360^\circ = 120^\circ$, so $\tan 840^\circ = \tan 120^\circ$.`,
          t`$120^\circ = 90^\circ + 30^\circ$, an odd multiple of $90^\circ$: tan switches to cot. $120^\circ$ is in the second quadrant, where tan is negative.`,
          t`$\tan 840^\circ = -\cot 30^\circ = -\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q2(iii)" },
      stem: t`The value of $\sin(-150^\circ) \cdot \tan(-600^\circ)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(-150)*tan(-600)" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M1", value: "1/2" },
        { key: "B", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M2", value: "-sqrt(3)/2" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C03-M5", value: "3/2" },
        { key: "D", text: t`$\frac{\sqrt{3}}{2}$`, correct: true, value: "sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`sin and tan are odd: $\sin(-150^\circ) = -\sin 150^\circ$ and $\tan(-600^\circ) = -\tan 600^\circ$.`,
          t`$\sin 150^\circ = \sin(90^\circ + 60^\circ) = \cos 60^\circ = \frac{1}{2}$: sin switches to cos, and sin is positive in the second quadrant.`,
          t`$\tan 600^\circ = \tan 240^\circ = \tan(180^\circ + 60^\circ) = \tan 60^\circ = \sqrt{3}$: tan is positive in the third quadrant.`,
          t`The product is $\left(-\frac{1}{2}\right)\left(-\sqrt{3}\right) = \frac{\sqrt{3}}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q2(iii)" },
      stem: t`The value of $\sec 840^\circ \cdot \cot(-945^\circ) + \sin 600^\circ \cdot \tan(-690^\circ)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sec(840)*cot(-945) + sin(600)*tan(-690)", route: "x" } },
      options: [
        { key: "A", text: t`$- \frac{5}{2}$`, correct: false, misconceptionId: "C03-M3", value: "-5/2" },
        { key: "B", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C03-M4", value: "-3/2" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
        { key: "D", text: t`$\frac{\sqrt{3}}{6}$`, correct: false, misconceptionId: "C03-M1", value: "sqrt(3)/6" },
      ],
      solution: {
        steps: [
          t`$\sec 840^\circ = \sec 120^\circ = \sec(180^\circ - 60^\circ) = -\sec 60^\circ = -2$, and $\cot(-945^\circ) = -\cot 225^\circ = -\cot(180^\circ + 45^\circ) = -1$.`,
          t`$\sin 600^\circ = \sin 240^\circ = \sin(180^\circ + 60^\circ) = -\frac{\sqrt{3}}{2}$, and $\tan(-690^\circ) = -\tan 330^\circ = -(-\tan 30^\circ) = \frac{1}{\sqrt{3}}$.`,
          t`The value is $(-2)(-1) + \left(-\frac{\sqrt{3}}{2}\right)\left(\frac{1}{\sqrt{3}}\right) = 2 - \frac{1}{2} = \frac{3}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q2(i)" },
      stem: t`$\dfrac{\cos(\pi + x)\cos(-x)}{\sin(\pi - x)\cos\left(\dfrac{\pi}{2} + x\right)}$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { e: "cos(180 + x)*cos(-x)/(sin(180 - x)*cos(90 + x))" } },
      options: [
        { key: "A", text: t`$\cot^2 x$`, correct: true, value: "tan(x)**(-2)" },
        { key: "B", text: t`$\tan x$`, correct: false, misconceptionId: "C03-M1", value: "tan(x)" },
        { key: "C", text: t`$-\cot^2 x$`, correct: false, misconceptionId: "C03-M2", value: "-1/tan(x)**2" },
        { key: "D", text: t`$-\cot x$`, correct: false, misconceptionId: "C03-M5", value: "-1/tan(x)" },
      ],
      solution: {
        steps: [
          t`Numerator: $\cos(\pi + x) = -\cos x$ and $\cos(-x) = \cos x$, so it is $-\cos^2 x$.`,
          t`Denominator: $\sin(\pi - x) = \sin x$ and $\cos\left(\frac{\pi}{2} + x\right) = -\sin x$, so it is $-\sin^2 x$.`,
          t`$\dfrac{-\cos^2 x}{-\sin^2 x} = \cot^2 x$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.2 SolvedEx.2(iv)" },
      stem: t`$\dfrac{\cot\left(\dfrac{\pi}{2} + \theta\right)\sin(-\theta)\cot(\pi - \theta)}{\cos(2\pi - \theta)\sin(\pi + \theta)\tan(2\pi - \theta)}$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { e: "cot(90 + x)*sin(-x)*cot(180 - x)/(cos(360 - x)*sin(180 + x)*tan(360 - x))" } },
      options: [
        { key: "A", text: t`$-\operatorname{cosec}\theta$`, correct: true, value: "-1/sin(x)" },
        { key: "B", text: t`$-\sec\theta\tan\theta$`, correct: false, misconceptionId: "C03-M1", value: "-tan(x)/cos(x)" },
        { key: "C", text: t`$\operatorname{cosec}\theta$`, correct: false, misconceptionId: "C03-M4", value: "1/sin(x)" },
        { key: "D", text: t`$-\cot^2\theta\operatorname{cosec}\theta$`, correct: false, misconceptionId: "C03-M5", value: "-cos(x)**2/sin(x)**3" },
      ],
      solution: {
        steps: [
          t`Numerator: $\cot\left(\frac{\pi}{2} + \theta\right) = -\tan\theta$, $\sin(-\theta) = -\sin\theta$, $\cot(\pi - \theta) = -\cot\theta$. As $\tan\theta\cot\theta = 1$, it is $-\sin\theta$.`,
          t`Denominator: $\cos(2\pi - \theta) = \cos\theta$, $\sin(\pi + \theta) = -\sin\theta$, $\tan(2\pi - \theta) = -\tan\theta$. It is $\cos\theta\sin\theta\tan\theta = \sin^2\theta$.`,
          t`$\dfrac{-\sin\theta}{\sin^2\theta} = -\dfrac{1}{\sin\theta} = -\operatorname{cosec}\theta$.`,
        ],
      },
    },
  ],
};
