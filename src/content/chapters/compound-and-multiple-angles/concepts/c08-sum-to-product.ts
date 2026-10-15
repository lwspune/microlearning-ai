import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The xy-plane drawn as plain axes (only directions matter here), O labelled below the initial arm's start. */
function planeOf(len: number): FigureElement[] {
  return [
    { kind: "segment", from: [-len, 0], to: [len, 0], tone: "muted" },
    { kind: "label", at: [len, 0], label: "x", labelAt: "n", tone: "muted" },
    { kind: "segment", from: [0, -1], to: [0, len], tone: "muted" },
    { kind: "label", at: [0, len], label: "y", labelAt: "w", tone: "muted" },
    { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
  ];
}

/** The initial arm along the positive x-axis, labelled below it, clear of the arms above. */
const initialArm: FigureElement[] = [
  { kind: "segment", from: [0, 0], to: [2.4, 0], tone: "good" },
  { kind: "label", at: [1.5, 0], label: "initial arm", labelAt: "s", tone: "good" },
];

/** The point r from O along the arm at `deg` degrees. */
const tip = (r: number, deg: number): Pt => {
  const a = (deg * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
};

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Neither $75^\circ$ nor $15^\circ$ is a standard angle. **Can you still find $\sin 75^\circ + \sin 15^\circ$ exactly?**`,
    reveal: t`Yes. Turn the sum into a product: $\sin 75^\circ + \sin 15^\circ = 2\sin\frac{75^\circ + 15^\circ}{2}\cos\frac{75^\circ - 15^\circ}{2} = 2\sin 45^\circ\cos 30^\circ = 2 \cdot \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{6}}{2}$.`,
  },
  explanation: {
    intuition: [
      t`A **product** is a multiplication; its parts are its **factors**, like $\sin A$ and $\cos B$ in $2\sin A\cos B$.`,
      t`A sum like $\sin C + \sin D$ can't be simplified term by term.`,
      t`A product can: factors cancel, and a product is $0$ when one factor is.`,
      t`To **factorise** a sum is to rewrite it as a product; these formulas do it for two angles $C$ and $D$.`,
      t`The product's angles are the **average** $\frac{C+D}{2}$, the direction halfway between $C$ and $D$.`,
      t`And the **half-gap** $\frac{C-D}{2}$: $C$ is this far past the average, and $D$ this far short of it.`,
    ],
    figure: {
      alt: "The xy-plane. One arm turns 15° from the initial arm to the angle D, another turns 135° to the angle C. A dashed arm at 75° lies halfway between them: the average, (C + D)/2. Two arcs, one on each side of it, mark the half-gap (C − D)/2 = 60°: C is 60° past the average and D is 60° short of it.",
      axes: "none",
      view: { x: [-2.8, 2.8], y: [-1.2, 2.8] },
      elements: [
        ...planeOf(2.6),
        ...initialArm,
        { kind: "turn", r: 2.6, to: 15, label: "D", labelAt: "n", step: 4 },
        { kind: "turn", r: 2.2, to: 135, label: "C", labelAt: "sw", step: 4 },
        { kind: "segment", from: [0, 0], to: tip(2.2, 75), dashed: true, step: 5 },
        { kind: "label", at: tip(2.2, 75), label: "(C + D)/2", labelAt: "e", step: 5 },
        { kind: "arc", centre: [0, 0], r: 1.9, from: 15, to: 75, label: "(C − D)/2", labelAt: "ne", tone: "good", step: 6 },
        { kind: "arc", centre: [0, 0], r: 1.9, from: 75, to: 135, label: "(C − D)/2", labelAt: "nw", tone: "good", step: 6 },
      ],
    },
    formal: [
      {
        title: "The four formulas",
        points: [
          t`$\sin C + \sin D$ equals $2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$.`,
          t`$\sin C - \sin D$ equals $2\cos\frac{C+D}{2}\sin\frac{C-D}{2}$.`,
          t`$\cos C + \cos D$ equals $2\cos\frac{C+D}{2}\cos\frac{C-D}{2}$.`,
          t`$\cos C - \cos D$ equals $-2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$.`,
          t`Each product starts with $2$, or $-2$, and uses the average and the half-gap.`,
        ],
      },
      {
        title: "Where they come from",
        points: [
          t`Add $\sin(A + B)$ and $\sin(A - B)$, using the compound-angle formulas.`,
          t`The $\cos A\sin B$ terms cancel, so $\sin(A + B) + \sin(A - B)$ equals $2\sin A\cos B$.`,
          t`Now put $C = A + B$ and $D = A - B$.`,
          t`Then $A = \frac{C+D}{2}$ and $B = \frac{C-D}{2}$, which gives the first formula.`,
          t`The other three come the same way.`,
          t`So these are the compound-angle formulas read backwards.`,
        ],
      },
      {
        title: "The sign trap",
        points: [
          t`Only $\cos C - \cos D$ has a minus in front.`,
          t`That is because $\cos(A + B) - \cos(A - B)$ equals $-2\sin A\sin B$.`,
          t`When $C < D$, the half-gap is negative, so $\sin\frac{C-D}{2}$ is negative too.`,
          t`Then the two minuses cancel.`,
          t`For example, $\cos 10^\circ - \cos 50^\circ$ equals $-2\sin 30^\circ\sin(-20^\circ)$.`,
          t`$\sin(-20^\circ) = -\sin 20^\circ$ and $2\sin 30^\circ = 1$, so it equals $\sin 20^\circ$.`,
        ],
      },
      {
        title: "Four terms",
        points: [
          t`With four terms, pair the ones whose angles have the same sum.`,
          t`Then each pair gives the same factor.`,
          t`In $\sin 7\theta + \sin 5\theta + \sin 3\theta + \sin\theta$, pair $7\theta$ with $\theta$, and $5\theta$ with $3\theta$.`,
          t`Both pairs add to $8\theta$: they give $2\sin 4\theta\cos 3\theta$ and $2\sin 4\theta\cos\theta$.`,
          t`So the sum is $2\sin 4\theta(\cos 3\theta + \cos\theta)$.`,
        ],
      },
      {
        title: "Quotients",
        points: [
          t`A **quotient** is one expression divided by another.`,
          t`Factorise the top and the bottom separately.`,
          t`A factor common to both then cancels.`,
          t`What is left is often a single tan or cot.`,
        ],
      },
    ],
    worked: {
      prompt: t`Simplify $\dfrac{\cos 3\theta - \cos 7\theta}{\sin 7\theta - \sin 3\theta}$.`,
      steps: [
        t`Top, a cos difference: $\cos 3\theta - \cos 7\theta$ $= -2\sin\frac{3\theta + 7\theta}{2}\sin\frac{3\theta - 7\theta}{2}$ $= -2\sin 5\theta\sin(-2\theta)$.`,
        t`$\sin(-2\theta) = -\sin 2\theta$, so the two minuses cancel: the top is $2\sin 5\theta\sin 2\theta$.`,
        t`Bottom, a sin difference: $\sin 7\theta - \sin 3\theta$ $= 2\cos\frac{7\theta + 3\theta}{2}\sin\frac{7\theta - 3\theta}{2}$ $= 2\cos 5\theta\sin 2\theta$.`,
        t`Cancel $2\sin 2\theta$: $\dfrac{\sin 5\theta}{\cos 5\theta}$.`,
      ],
      answer: t`$\tan 5\theta$.`,
    },
    visualSpec: t`Two sliders set $C$ and $D$; bars show $\sin C$, $\sin D$ and their sum beside the product $2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$, with the average and half-gap angles marked on a unit circle, and the two totals always match.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`The sign trap: writing $\cos C - \cos D = 2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$, without the minus`,
      remediation: t`$\cos C - \cos D = -2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$, because $\cos(A + B) - \cos(A - B) = -2\sin A\sin B$. Check with $C = 0^\circ$, $D = 60^\circ$: $\cos 0^\circ - \cos 60^\circ = \frac{1}{2}$, and $-2\sin 30^\circ\sin(-30^\circ) = \frac{1}{2}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M2",
      mistake: t`Forgetting the halves: $\sin C + \sin D = 2\sin(C + D)\cos(C - D)$`,
      remediation: t`The angles in the product are half the sum and half the difference: $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$. They come from $C = A + B$, $D = A - B$, so $A = \frac{C+D}{2}$ and $B = \frac{C-D}{2}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M3",
      mistake: t`Letting sin and cos spread over a sum: $\sin C + \sin D = \sin(C + D)$, $\cos C - \cos D = \cos(C - D)$`,
      remediation: t`The sin of a sum is not the sum of the sins: $\sin 30^\circ + \sin 60^\circ$ is about $1.37$, not $\sin 90^\circ = 1$. A sum of two sines or cosines becomes $2$ times a product: $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M4",
      mistake: t`Copying the sum's product onto the difference: $\sin C - \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$`,
      remediation: t`That product is $\sin C + \sin D$. For the difference, sin and cos swap places: $\sin C - \sin D = 2\cos\frac{C+D}{2}\sin\frac{C-D}{2}$. The sin sits on the half-difference, so it is $0$ when $C = D$, as it must be.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Dropping the factor 2: $\sin C + \sin D = \sin\frac{C+D}{2}\cos\frac{C-D}{2}$`,
      remediation: t`Every one of the four products starts with $2$ (or $-2$). Check with $C = D = 0$: $\cos 0 + \cos 0 = 2$, and $2\cos 0\cos 0 = 2$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C08-M5 gives the key on a quotient (the 2s on top and bottom cancel): diagnose it only on a sum or difference that is not divided.",
    t`C08-M1 applies only when a $\cos C - \cos D$ pair appears, and C08-M4 only when a $\sin C - \sin D$ pair appears.`,
    t`C08-M2 and C08-M3 agree when the half-difference factor cancels top and bottom (e.g. 3.4.2 SolvedEx.4(i), $\cot(x + y)$): don't put both on such an item.`,
    t`C08-Q1 is 3.4.2 SolvedEx.3(i), whose printed stem says $\cos 3x$; the book's own solution ends at $\cot 3x$, so the printed answer is a misprint.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.4.2 SolvedEx.3(i)" },
      stem: t`$\dfrac{\sin 8x + \sin 2x}{\cos 2x - \cos 8x}$ simplifies to:`,
      verify: { kind: "value", inputs: { C1: "8*x", D1: "2*x", C2: "2*x", D2: "8*x" }, params: { num: "ss+", den: "cc-" } },
      options: [
        { key: "A", text: t`$\cot 3x$`, correct: true, value: "cot(3*x)" },
        { key: "B", text: t`$-\cot 3x$`, correct: false, misconceptionId: "C08-M1", value: "-cot(3*x)" },
        { key: "C", text: t`$\cot 6x$`, correct: false, misconceptionId: "C08-M2", value: "cot(6*x)" },
        { key: "D", text: t`$\dfrac{\sin 10x}{\cos 6x}$`, correct: false, misconceptionId: "C08-M3", value: "sin(10*x)/cos(6*x)" },
      ],
      solution: {
        steps: [
          t`Top: $\sin 8x + \sin 2x = 2\sin\frac{8x + 2x}{2}\cos\frac{8x - 2x}{2} = 2\sin 5x\cos 3x$.`,
          t`Bottom: $\cos 2x - \cos 8x = -2\sin\frac{2x + 8x}{2}\sin\frac{2x - 8x}{2} = -2\sin 5x\sin(-3x) = 2\sin 5x\sin 3x$.`,
          t`Cancel $2\sin 5x$: $\dfrac{\cos 3x}{\sin 3x} = \cot 3x$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.4 Q2(i)" },
      stem: t`$\dfrac{\sin 2x + \sin 2y}{\sin 2x - \sin 2y}$ is equal to:`,
      verify: { kind: "value", inputs: { C1: "2*x", D1: "2*y", C2: "2*x", D2: "2*y" }, params: { num: "ss+", den: "ss-" } },
      options: [
        { key: "A", text: t`$\dfrac{\tan(2x + 2y)}{\tan(2x - 2y)}$`, correct: false, misconceptionId: "C08-M2", value: "tan(2*x + 2*y)/tan(2*x - 2*y)" },
        { key: "B", text: t`$\dfrac{\sin(2x + 2y)}{\sin(2x - 2y)}$`, correct: false, misconceptionId: "C08-M3", value: "sin(2*x + 2*y)/sin(2*x - 2*y)" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C08-M4", value: "1" },
        { key: "D", text: t`$\dfrac{\tan(x + y)}{\tan(x - y)}$`, correct: true, value: "tan(x + y)/tan(x - y)" },
      ],
      solution: {
        steps: [
          t`Top: $\sin 2x + \sin 2y = 2\sin(x + y)\cos(x - y)$.`,
          t`Bottom: $\sin 2x - \sin 2y = 2\cos(x + y)\sin(x - y)$.`,
          t`Divide: $\dfrac{\sin(x + y)}{\cos(x + y)} \cdot \dfrac{\cos(x - y)}{\sin(x - y)} = \tan(x + y)\cot(x - y) = \dfrac{\tan(x + y)}{\tan(x - y)}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc II Q11" },
      stem: t`$\dfrac{\cos 9x - \cos 5x}{\sin 17x - \sin 3x}$ is equal to:`,
      verify: { kind: "value", inputs: { C1: "9*x", D1: "5*x", C2: "17*x", D2: "3*x" }, params: { num: "cc-", den: "ss-" } },
      options: [
        { key: "A", text: t`$\dfrac{\sin 2x}{\cos 10x}$`, correct: false, misconceptionId: "C08-M1", value: "sin(2*x)/cos(10*x)" },
        { key: "B", text: t`$-\dfrac{\sin 4x}{\cos 20x}$`, correct: false, misconceptionId: "C08-M2", value: "-sin(4*x)/cos(20*x)" },
        { key: "C", text: t`$-\dfrac{\sin 2x\tan 7x}{\sin 10x}$`, correct: false, misconceptionId: "C08-M4", value: "-sin(2*x)*tan(7*x)/sin(10*x)" },
        { key: "D", text: t`$-\dfrac{\sin 2x}{\cos 10x}$`, correct: true, value: "-sin(2*x)/cos(10*x)" },
      ],
      solution: {
        steps: [
          t`Top: $\cos 9x - \cos 5x = -2\sin\frac{9x + 5x}{2}\sin\frac{9x - 5x}{2} = -2\sin 7x\sin 2x$.`,
          t`Bottom: $\sin 17x - \sin 3x = 2\cos\frac{17x + 3x}{2}\sin\frac{17x - 3x}{2} = 2\cos 10x\sin 7x$.`,
          t`Cancel $2\sin 7x$: $-\dfrac{\sin 2x}{\cos 10x}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc II Q6" },
      stem: t`$\cos\left(\frac{\pi}{4} + x\right) - \cos\left(\frac{\pi}{4} - x\right)$ is equal to:`,
      verify: { kind: "value", inputs: { C1: "pi/4 + x", D1: "pi/4 - x" }, params: { num: "cc-" } },
      options: [
        { key: "A", text: t`$\cos 2x$`, correct: false, misconceptionId: "C08-M3", value: "cos(2*x)" },
        { key: "B", text: t`$-\frac{1}{\sqrt{2}}\sin x$`, correct: false, misconceptionId: "C08-M5", value: "-sqrt(2)*sin(x)/2" },
        { key: "C", text: t`$-\sqrt{2}\sin x$`, correct: true, value: "-sqrt(2)*sin(x)" },
        { key: "D", text: t`$\sqrt{2}\sin x$`, correct: false, misconceptionId: "C08-M1", value: "sqrt(2)*sin(x)" },
      ],
      solution: {
        steps: [
          t`Use $\cos C - \cos D = -2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$ with $C = \frac{\pi}{4} + x$, $D = \frac{\pi}{4} - x$: $\frac{C+D}{2} = \frac{\pi}{4}$ and $\frac{C-D}{2} = x$.`,
          t`So the expression is $-2\sin\frac{\pi}{4}\sin x = -2 \cdot \frac{1}{\sqrt{2}}\sin x = -\sqrt{2}\sin x$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.4.2 SolvedEx.1(ii)" },
      stem: t`$\cos 40^\circ + \cos 50^\circ + \cos 70^\circ + \cos 80^\circ$ is equal to:`,
      verify: { kind: "value", inputs: { C1: "4*pi/9", D1: "2*pi/9", C2: "7*pi/18", D2: "5*pi/18" }, params: { num: "cc+, cc+" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}(\cos 20^\circ + \cos 10^\circ)$`, correct: false, misconceptionId: "C08-M5", value: "cos(pi/9)/2 + cos(pi/18)/2" },
        { key: "B", text: t`$\cos 20^\circ + \cos 10^\circ$`, correct: true, value: "cos(pi/9) + cos(pi/18)" },
        { key: "C", text: t`$-(\cos 40^\circ + \cos 20^\circ)$`, correct: false, misconceptionId: "C08-M2", value: "-cos(pi/9) - cos(2*pi/9)" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C08-M3", value: "-1" },
      ],
      solution: {
        steps: [
          t`Pair the terms whose angles add to $120^\circ$: $(\cos 80^\circ + \cos 40^\circ) + (\cos 70^\circ + \cos 50^\circ)$.`,
          t`$\cos 80^\circ + \cos 40^\circ = 2\cos 60^\circ\cos 20^\circ$ and $\cos 70^\circ + \cos 50^\circ = 2\cos 60^\circ\cos 10^\circ$.`,
          t`$2\cos 60^\circ = 1$, so the sum is $\cos 20^\circ + \cos 10^\circ$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.4.2 SolvedEx.1(i)" },
      stem: t`$\sin 40^\circ - \cos 70^\circ$ is equal to:`,
      verify: { kind: "value", inputs: { C1: "2*pi/9", D1: "7*pi/18" }, params: { num: "sc-" } },
      options: [
        { key: "A", text: t`$\sqrt{3}\sin 20^\circ$`, correct: false, misconceptionId: "C08-M2", value: "sqrt(3)*sin(pi/9)" },
        { key: "B", text: t`$\frac{\sqrt{3}}{2}\cos 80^\circ$`, correct: false, misconceptionId: "C08-M5", value: "sqrt(3)*cos(4*pi/9)/2" },
        { key: "C", text: t`$\sqrt{3}\cos 80^\circ$`, correct: true, value: "sqrt(3)*cos(4*pi/9)" },
        { key: "D", text: t`$-\sqrt{3}\cos 80^\circ$`, correct: false, misconceptionId: "C08-M1", value: "-sqrt(3)*cos(4*pi/9)" },
      ],
      solution: {
        steps: [
          t`$\sin 40^\circ = \sin(90^\circ - 50^\circ) = \cos 50^\circ$, so the expression is $\cos 50^\circ - \cos 70^\circ$.`,
          t`$\cos 50^\circ - \cos 70^\circ = -2\sin 60^\circ\sin(-10^\circ) = 2 \cdot \frac{\sqrt{3}}{2}\sin 10^\circ = \sqrt{3}\sin 10^\circ$.`,
          t`$\sin 10^\circ = \cos 80^\circ$, so it equals $\sqrt{3}\cos 80^\circ$.`,
        ],
      },
    },
  ],
};
