import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The unit circle about O on plain x- and y-axes, with the initial arm along the positive x-axis. */
const unitPlane: FigureElement[] = [
  { kind: "segment", from: [-1.4, 0], to: [1.4, 0], tone: "muted" },
  { kind: "label", at: [1.4, 0], label: "x", labelAt: "s", tone: "muted" },
  { kind: "segment", from: [0, -1.1], to: [0, 1.3], tone: "muted" },
  { kind: "label", at: [0, 1.3], label: "y", labelAt: "w", tone: "muted" },
  { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
  { kind: "circle", centre: [0, 0], r: 1, tone: "muted" },
  { kind: "segment", from: [0, 0], to: [1, 0], label: "initial arm", labelAt: "s", tone: "good" },
];

/** The point r from O along the arm at `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Is $\sin(30^\circ + 60^\circ)$ the same as $\sin 30^\circ + \sin 60^\circ$?`,
    reveal: t`No. $\sin(30^\circ + 60^\circ) = \sin 90^\circ = 1$, but $\sin 30^\circ + \sin 60^\circ = \frac{1}{2} + \frac{\sqrt{3}}{2} \approx 1.37$, more than any sine can be. The sine of a sum needs the sines **and** the cosines of both angles.`,
  },
  explanation: {
    intuition: [
      t`A **compound angle** is a sum or difference of two angles, such as $A + B$ or $A - B$.`,
      t`Sine and cosine don't split over it: $\sin(A + B)$ is not $\sin A + \sin B$.`,
      t`On the unit circle, turn the arm through $A$ from the initial arm.`,
      t`Then turn it through $B$ more: together, that is one turn through $A + B$.`,
      t`The end point's coordinates mix the sines and cosines of both turns, so each formula has two products.`,
      t`Sine's products mix the functions, $\sin \cdot \cos$ and $\cos \cdot \sin$; cosine's pair like with like.`,
    ],
    figure: {
      alt: "The unit circle about O, with the initial arm along the positive x-axis. An arm turns anticlockwise through A, then through B more, ending on the arm of A + B. That arm meets the circle at P(cos(A + B), sin(A + B)).",
      axes: "none",
      view: { x: [-2.4, 1.6], y: [-1.15, 1.4] },
      elements: [
        ...unitPlane,
        { kind: "turn", r: 1, to: 40, step: 3 },
        { kind: "label", at: tip(0.45, 20), label: "A", labelAt: "e", step: 3 },
        { kind: "turn", r: 1, from: 40, to: 110, step: 4 },
        { kind: "label", at: tip(0.45, 75), label: "B", labelAt: "ne", step: 4 },
        { kind: "label", at: tip(0.7, 110), label: "A + B", labelAt: "w", step: 4 },
        { kind: "point", at: tip(1, 110), label: "P", labelAt: "nw", tone: "good", step: 5 },
        { kind: "label", at: [-2.38, -1.06], label: "P = (cos(A + B), sin(A + B))", labelAt: "e", tone: "good", step: 5 },
      ],
    },
    formal: [
      {
        title: "Sine of a sum or difference",
        points: [
          t`$\sin(A + B)$ equals $\sin A\cos B + \cos A\sin B$.`,
          t`$\sin(A - B)$ equals $\sin A\cos B - \cos A\sin B$.`,
          t`Sine keeps the sign: a plus in the angle gives a plus between the products.`,
          t`Write both at once with $\pm$, read as "plus or minus".`,
          t`$\sin(A \pm B)$ equals $\sin A\cos B \pm \cos A\sin B$.`,
        ],
      },
      {
        title: "Cosine of a sum or difference",
        points: [
          t`$\cos(A + B)$ equals $\cos A\cos B - \sin A\sin B$.`,
          t`$\cos(A - B)$ equals $\cos A\cos B + \sin A\sin B$.`,
          t`Cosine flips the sign: a plus in the angle gives a minus between the products.`,
          t`$\cos(A \pm B)$ equals $\cos A\cos B \mp \sin A\sin B$.`,
          t`Here $\mp$ is $\pm$ upside down: read all the top signs together, or all the bottom ones.`,
        ],
      },
      {
        title: "Check with B = 0",
        points: [
          t`Put $B = 0$, where $\sin 0 = 0$ and $\cos 0 = 1$.`,
          t`Then $\sin(A + 0)$ must give $\sin A$.`,
          t`Only the mixed products do: $\sin A \cdot 1 + \cos A \cdot 0$ $= \sin A$.`,
          t`Like with like would give $\cos A \cdot 1 - \sin A \cdot 0$ $= \cos A$, the wrong function.`,
        ],
      },
      {
        title: "Keep the first angle first",
        points: [
          t`In $\sin(A - B)$, keep the first angle first.`,
          t`Sine is **odd**: a negative angle gives the negative value, $\sin(-\theta) = -\sin\theta$.`,
          t`So $\sin(B - A) = -\sin(A - B)$: swapping the angles changes the sign.`,
          t`Cosine is **even**: a negative angle gives the same value, $\cos(-\theta) = \cos\theta$.`,
          t`So for cos the order doesn't matter: $\cos(B - A) = \cos(A - B)$.`,
        ],
      },
      {
        title: "Exact values",
        points: [
          t`Split the angle into standard ones, such as $75^\circ = 45^\circ + 30^\circ$.`,
          t`Expand it with the formula, and put in the known values at the standard angles.`,
          t`Then **rationalise** the denominator: multiply the top and the bottom to clear the root from the bottom.`,
        ],
      },
      {
        title: "Given one ratio and a quadrant",
        points: [
          t`Often one ratio of each angle is given, with the quadrant the angle lies in.`,
          t`Find the other ratio from $\sin^2\theta + \cos^2\theta = 1$.`,
          t`For example, $\cos\theta = \pm\sqrt{1 - \sin^2\theta}$: the root alone doesn't give the sign.`,
          t`Take its sign from the quadrant.`,
        ],
      },
      {
        title: "Read the formulae backwards",
        points: [
          t`Each formula also works from right to left.`,
          t`$\cos X\cos Y + \sin X\sin Y$ equals $\cos(X - Y)$.`,
          t`$\sin X\cos Y - \cos X\sin Y$ equals $\sin(X - Y)$.`,
          t`So a plus between the cos products means a difference of the angles.`,
          t`A long expression can collapse to one ratio this way.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\sin A = \frac{7}{25}$, $\frac{\pi}{2} < A < \pi$, and $\cos B = -\frac{4}{5}$, $\pi < B < \frac{3\pi}{2}$, find $\sin(A - B)$.`,
      steps: [
        t`$A$ is in the second quadrant, where cos is negative: $\cos A = -\sqrt{1 - \frac{49}{625}}$ $= -\frac{24}{25}$.`,
        t`$B$ is in the third quadrant, where sin is negative: $\sin B = -\sqrt{1 - \frac{16}{25}}$ $= -\frac{3}{5}$.`,
        t`$\sin(A - B)$ $= \sin A\cos B - \cos A\sin B$ $= \frac{7}{25}\left(-\frac{4}{5}\right)$ $- \left(-\frac{24}{25}\right)\left(-\frac{3}{5}\right)$.`,
        t`$= -\frac{28}{125} - \frac{72}{125}$ $= -\frac{100}{125} = -\frac{4}{5}$.`,
      ],
      answer: t`$\sin(A - B) = -\frac{4}{5}$.`,
    },
    visualSpec: t`Drag $A$ and $B$ round a unit circle: the point at angle $A + B$ shows its coordinates, built up as bars from the two products in each formula.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Distributing sin or cos over a sum: $\sin(A + B) = \sin A + \sin B$`,
      remediation: t`Sine and cosine don't split over a sum: $\sin 30^\circ + \sin 60^\circ$ is more than $1$. Use $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$ and $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Copying the sign into the cos formula: $\cos(A + B) = \cos A\cos B + \sin A\sin B$, so read backwards $\cos X\cos Y + \sin X\sin Y = \cos(X + Y)$`,
      remediation: t`In the cos formula the sign flips: $\cos(A + B) = \cos A\cos B - \sin A\sin B$ and $\cos(A - B) = \cos A\cos B + \sin A\sin B$. A plus between the products means a difference of the angles.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Swapping the two patterns: like-with-like products for sin, mixed products for cos",
      remediation: t`sin mixes the functions: $\sin A\cos B \pm \cos A\sin B$. cos pairs like with like: $\cos A\cos B \mp \sin A\sin B$. Check with $B = 0$: $\sin(A + 0)$ must give $\sin A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Taking the missing ratio positive whatever the quadrant",
      remediation: t`After $\cos A = \pm\sqrt{1 - \sin^2 A}$, take the sign from the quadrant of $A$: cos is negative in the second and third quadrants, sin in the third and fourth.`,
      fallback: { kind: "ext", topic: "signs in the four quadrants" },
    },
    {
      id: "C01-M5",
      mistake: t`Mixing up which of sin and cos is even: taking $\sin(B - A) = \sin(A - B)$, or $\cos(-\theta) = -\cos\theta$`,
      remediation: t`sin is odd: $\sin(-\theta) = -\sin\theta$, so $\sin(B - A) = -\sin(A - B)$ and the first angle must stay first. cos is even: $\cos(-\theta) = \cos\theta$.`,
      fallback: { kind: "ext", topic: "even and odd functions: sin(−θ) = −sin θ, cos(−θ) = cos θ" },
    },
    {
      id: "C01-M6",
      mistake: t`Mixing up the values at $30^\circ$ and $60^\circ$: $\sin 30^\circ = \frac{\sqrt{3}}{2}$, $\cos 30^\circ = \frac{1}{2}$`,
      remediation: t`$\sin 30^\circ = \cos 60^\circ = \frac{1}{2}$ and $\sin 60^\circ = \cos 30^\circ = \frac{\sqrt{3}}{2}$. Sine grows from $0^\circ$ to $90^\circ$, so $\sin 30^\circ$ is the smaller one.`,
      fallback: { kind: "ext", topic: "values at standard angles" },
    },
  ],
  engineNotes: [
    "C01-M4 changes the answer only when the two missing ratios don't multiply together: in the book's Ex 3.1 Q3(i) (sin(A + B), cos A and sin B both negative) the signs cancel and it gives the key. C01-Q4 changes B to the first quadrant for that reason.",
    t`C01-M5 shows only on sin of a difference, or when the angle formed backwards comes out negative; C01-M6 only when $30^\circ$ or $60^\circ$ is one of the angles.`,
    t`C01-M2 and C01-M3 give the same value on a cos item whenever one angle is $45^\circ$ ($\cos(A \mp B) = \sin(A \pm B)$ then), so such an item can list only one of them.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q1(i)" },
      stem: t`Using $15^\circ = 45^\circ - 30^\circ$, the value of $\sin 15^\circ$ is:`,
      verify: { kind: "value", inputs: { a: "pi/4", b: "pi/6" }, params: { kind: "fwd", f: "sin", s: "-" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{6} - \sqrt{2}}{4}$`, correct: true, value: "-sqrt(2)/4 + sqrt(6)/4" },
        { key: "B", text: t`$\frac{\sqrt{2} - 1}{2}$`, correct: false, misconceptionId: "C01-M1", value: "-1/2 + sqrt(2)/2" },
        { key: "C", text: t`$\frac{\sqrt{6} + \sqrt{2}}{4}$`, correct: false, misconceptionId: "C01-M3", value: "sqrt(2)/4 + sqrt(6)/4" },
        { key: "D", text: t`$\frac{\sqrt{2} - \sqrt{6}}{4}$`, correct: false, misconceptionId: "C01-M6", value: "-sqrt(6)/4 + sqrt(2)/4" },
      ],
      solution: {
        steps: [
          t`$\sin(45^\circ - 30^\circ) = \sin 45^\circ\cos 30^\circ - \cos 45^\circ\sin 30^\circ$.`,
          t`$= \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{3}}{2} - \frac{1}{\sqrt{2}} \cdot \frac{1}{2} = \frac{\sqrt{3} - 1}{2\sqrt{2}}$.`,
          t`Multiply top and bottom by $\sqrt{2}$: $\sin 15^\circ = \frac{\sqrt{6} - \sqrt{2}}{4}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q1(ii)" },
      stem: t`Using $105^\circ = 60^\circ + 45^\circ$, the value of $\cos 105^\circ$ is:`,
      verify: { kind: "value", inputs: { a: "pi/3", b: "pi/4" }, params: { kind: "fwd", f: "cos", s: "+" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{2} - \sqrt{6}}{4}$`, correct: true, value: "-sqrt(6)/4 + sqrt(2)/4" },
        { key: "B", text: t`$\frac{1 + \sqrt{2}}{2}$`, correct: false, misconceptionId: "C01-M1", value: "1/2 + sqrt(2)/2" },
        { key: "C", text: t`$\frac{\sqrt{6} + \sqrt{2}}{4}$`, correct: false, misconceptionId: "C01-M2", value: "sqrt(2)/4 + sqrt(6)/4" },
        { key: "D", text: t`$\frac{\sqrt{6} - \sqrt{2}}{4}$`, correct: false, misconceptionId: "C01-M6", value: "-sqrt(2)/4 + sqrt(6)/4" },
      ],
      solution: {
        steps: [
          t`The sign flips in a cos formula: $\cos(60^\circ + 45^\circ) = \cos 60^\circ\cos 45^\circ - \sin 60^\circ\sin 45^\circ$.`,
          t`$= \frac{1}{2} \cdot \frac{1}{\sqrt{2}} - \frac{\sqrt{3}}{2} \cdot \frac{1}{\sqrt{2}} = \frac{1 - \sqrt{3}}{2\sqrt{2}}$.`,
          t`Multiply top and bottom by $\sqrt{2}$: $\cos 105^\circ = \frac{\sqrt{2} - \sqrt{6}}{4}$, negative, as it must be for an angle in the second quadrant.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q3(ii)" },
      stem: t`If $\sin A = -\frac{5}{13}$, $\pi < A < \frac{3\pi}{2}$, and $\cos B = \frac{3}{5}$, $\frac{3\pi}{2} < B < 2\pi$, then $\cos(A - B)$ is:`,
      verify: { kind: "value", inputs: { sA: "-5/13", qA: "3", cB: "3/5", qB: "4" }, params: { kind: "quad", f: "cos", s: "-" } },
      options: [
        { key: "A", text: t`$- \frac{63}{65}$`, correct: false, misconceptionId: "C01-M3", value: "-63/65" },
        { key: "B", text: t`$\frac{16}{65}$`, correct: false, misconceptionId: "C01-M4", value: "16/65" },
        { key: "C", text: t`$- \frac{16}{65}$`, correct: true, value: "-16/65" },
        { key: "D", text: t`$- \frac{56}{65}$`, correct: false, misconceptionId: "C01-M2", value: "-56/65" },
      ],
      solution: {
        steps: [
          t`$A$ is in the third quadrant: $\cos A = -\sqrt{1 - \frac{25}{169}} = -\frac{12}{13}$. $B$ is in the fourth: $\sin B = -\sqrt{1 - \frac{9}{25}} = -\frac{4}{5}$.`,
          t`$\cos(A - B) = \cos A\cos B + \sin A\sin B = \left(-\frac{12}{13}\right)\frac{3}{5} + \left(-\frac{5}{13}\right)\left(-\frac{4}{5}\right)$.`,
          t`$= -\frac{36}{65} + \frac{20}{65} = -\frac{16}{65}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q3(i)" },
      stem: t`If $\sin A = -\frac{8}{17}$, $\pi < A < \frac{3\pi}{2}$, and $\cos B = \frac{4}{5}$, $0 < B < \frac{\pi}{2}$, then $\sin(A + B)$ is:`,
      verify: { kind: "value", inputs: { sA: "-8/17", qA: "3", cB: "4/5", qB: "1" }, params: { kind: "quad", f: "sin", s: "+" } },
      options: [
        { key: "A", text: t`$- \frac{77}{85}$`, correct: true, value: "-77/85" },
        { key: "B", text: t`$\frac{11}{85}$`, correct: false, misconceptionId: "C01-M1", value: "11/85" },
        { key: "C", text: t`$- \frac{36}{85}$`, correct: false, misconceptionId: "C01-M3", value: "-36/85" },
        { key: "D", text: t`$\frac{13}{85}$`, correct: false, misconceptionId: "C01-M4", value: "13/85" },
      ],
      solution: {
        steps: [
          t`$A$ is in the third quadrant: $\cos A = -\sqrt{1 - \frac{64}{289}} = -\frac{15}{17}$. $B$ is in the first: $\sin B = \frac{3}{5}$.`,
          t`$\sin(A + B) = \sin A\cos B + \cos A\sin B = \left(-\frac{8}{17}\right)\frac{4}{5} + \left(-\frac{15}{17}\right)\frac{3}{5}$.`,
          t`$= -\frac{32}{85} - \frac{45}{85} = -\frac{77}{85}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc I Q1" },
      stem: t`The value of $\sin (n+1)A\,\sin (n+2)A + \cos (n+1)A\,\cos (n+2)A$ is:`,
      verify: { kind: "value", inputs: { p: "(n+1)*A", q: "(n+2)*A" }, params: { kind: "back", pat: "cos", s: "+" } },
      options: [
        { key: "A", text: t`$\cos A$`, correct: true, value: "cos(A)" },
        { key: "B", text: t`$\cos (2n+3)A$`, correct: false, misconceptionId: "C01-M2", value: "cos(A*(2*n + 3))" },
        { key: "C", text: t`$-\sin A$`, correct: false, misconceptionId: "C01-M3", value: "-sin(A)" },
        { key: "D", text: t`$-\cos A$`, correct: false, misconceptionId: "C01-M5", value: "-cos(A)" },
      ],
      solution: {
        steps: [
          t`Like-with-like products joined by a plus are $\cos X\cos Y + \sin X\sin Y = \cos(X - Y)$.`,
          t`With $X = (n+1)A$ and $Y = (n+2)A$, the expression is $\cos[(n+1)A - (n+2)A] = \cos(-A)$.`,
          t`cos is even, so $\cos(-A) = \cos A$, whatever $n$ is.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q2(v)" },
      stem: t`$\sqrt{2}\,\sin\left(\frac{\pi}{4} - A\right)$ equals:`,
      verify: { kind: "value", inputs: { a: "pi/4", b: "A", k: "sqrt(2)" }, params: { kind: "fwd", f: "sin", s: "-" } },
      options: [
        { key: "A", text: t`$\cos A + \sin A$`, correct: false, misconceptionId: "C01-M3", value: "cos(A) + sin(A)" },
        { key: "B", text: t`$\sin A - \cos A$`, correct: false, misconceptionId: "C01-M5", value: "sin(A) - cos(A)" },
        { key: "C", text: t`$\cos A - \sin A$`, correct: true, value: "cos(A) - sin(A)" },
        { key: "D", text: t`$1 - \sqrt{2}\,\sin A$`, correct: false, misconceptionId: "C01-M1", value: "-sqrt(2)*sin(A) + 1" },
      ],
      solution: {
        steps: [
          t`Keep the first angle first: $\sin\left(\frac{\pi}{4} - A\right) = \sin\frac{\pi}{4}\cos A - \cos\frac{\pi}{4}\sin A$.`,
          t`$= \frac{1}{\sqrt{2}}\cos A - \frac{1}{\sqrt{2}}\sin A$.`,
          t`Multiply by $\sqrt{2}$: $\sqrt{2}\,\sin\left(\frac{\pi}{4} - A\right) = \cos A - \sin A$.`,
        ],
      },
    },
  ],
};
