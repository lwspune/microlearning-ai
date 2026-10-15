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

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`$\cos 60^\circ = \frac{1}{2}$. Is $\cos 30^\circ$ half of that, $\frac{1}{4}$? **How can you get $\cos 30^\circ$ from $\cos 60^\circ$ alone?**`,
    reveal: t`Not by halving: a ratio does not halve when the angle does. Read $\cos 2A = 2\cos^2 A - 1$ backwards with $2A = 60^\circ$: $\cos^2 30^\circ = \frac{1 + \cos 60^\circ}{2} = \frac{3}{4}$. So $\cos 30^\circ = \frac{\sqrt{3}}{2}$, positive because $30^\circ$ is in quadrant I.`,
  },
  explanation: {
    intuition: [
      t`The **half angle** of an angle $x$ is $\frac{x}{2}$: $x$ is double it.`,
      t`A **half-angle formula** gives a ratio of $\frac{x}{2}$ from a ratio of $x$.`,
      t`It is a double-angle formula read backwards.`,
      t`In $\cos x = 1 - 2\sin^2\frac{x}{2}$, solve for $\sin^2\frac{x}{2}$: you get it from $\cos x$ alone.`,
      t`The formula gives a square, so its root comes with a $\pm$, and the formula can't choose.`,
      t`The angle $\frac{x}{2}$ chooses: halve the interval $x$ lies in to find its quadrant.`,
    ],
    formal: [
      {
        title: "Sin and cos of half angles",
        points: [
          t`Put $A = \frac{x}{2}$, so $2A = x$, in two forms of $\cos 2A$.`,
          t`$\cos x = 1 - 2\sin^2\frac{x}{2}$, so $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$.`,
          t`$\cos x = 2\cos^2\frac{x}{2} - 1$, so $\cos^2\frac{x}{2} = \frac{1 + \cos x}{2}$.`,
          t`The minus sign goes with $\sin$.`,
          t`Check at $x = 0$: $\sin 0 = 0$, and $1 - \cos 0 = 0$.`,
        ],
      },
      {
        title: "Read the other way",
        points: [
          t`Read the other way, the formulas turn expressions in $x$ into ones in $\frac{x}{2}$.`,
          t`$1 - \cos x = 2\sin^2\frac{x}{2}$.`,
          t`$1 + \cos x = 2\cos^2\frac{x}{2}$.`,
          t`And from $\sin 2A = 2\sin A\cos A$: $\sin x = 2\sin\frac{x}{2}\cos\frac{x}{2}$.`,
          t`Use them this way in simplifications.`,
        ],
      },
      {
        title: "Tan of a half angle",
        points: [
          t`$\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x}$.`,
          t`Why: its top is $2\sin\frac{x}{2}\cos\frac{x}{2}$, and its bottom is $2\cos^2\frac{x}{2}$.`,
          t`Cancel $2\cos\frac{x}{2}$: what is left is $\frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = \tan\frac{x}{2}$.`,
          t`There is no root here, so the sign comes out by itself.`,
          t`Its square, $\tan^2\frac{x}{2}$, is $\frac{1 - \cos x}{1 + \cos x}$.`,
        ],
      },
      {
        title: "Picking the sign",
        points: [
          t`First take the square root, with both signs: $\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}$.`,
          t`Say $\pi < x < \frac{3\pi}{2}$: the arm of $x$ is in quadrant III.`,
          t`Halve each end of the interval: $\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$.`,
          t`So $\frac{x}{2}$ is in quadrant II, where $\sin\frac{x}{2} > 0$ and $\cos\frac{x}{2} < 0$.`,
          t`The sign belongs to $\frac{x}{2}$, not to $x$: quadrant III would make $\sin$ negative.`,
        ],
        figure: {
          alt: "The xy-plane with its four quadrants. Quadrant III, where π < x < 3π/2, is shaded, and an arm turns from the initial arm to an angle x there. Halving each end gives π/2 < x/2 < 3π/4: a narrower wedge in quadrant II is shaded, and an arm turns half as far, to x/2, inside it. Beside it: sin(x/2) > 0 and cos(x/2) < 0.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-2.8, 2.8] },
          elements: [
            ...planeOf(2.6, true, "se"),
            ...initialArm(),
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], tone: "bad", step: 2 },
            { kind: "turn", r: 2, to: 240, label: "x", labelAt: "se", tone: "bad", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 90, to: 135 }], step: 3 },
            { kind: "turn", r: 2, to: 120, label: "x/2", labelAt: "ne", step: 3 },
            { kind: "label", at: [-2.75, 0.95], label: "sin(x/2) > 0", labelAt: "e", tone: "good", step: 4 },
            { kind: "label", at: [-2.75, 0.45], label: "cos(x/2) < 0", labelAt: "e", tone: "bad", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`If $\cos x = \frac{1}{9}$ and $\frac{3\pi}{2} < x < 2\pi$, find $\sin\frac{x}{2}$, $\cos\frac{x}{2}$ and $\tan\frac{x}{2}$.`,
      steps: [
        t`Halve the interval: $\frac{3\pi}{4} < \frac{x}{2} < \pi$. So $\frac{x}{2}$ is in quadrant II: $\sin\frac{x}{2} > 0$, $\cos\frac{x}{2} < 0$.`,
        t`$\sin^2\frac{x}{2} = \frac{1 - \frac{1}{9}}{2}$ $= \frac{4}{9}$, so $\sin\frac{x}{2} = \frac{2}{3}$.`,
        t`$\cos^2\frac{x}{2} = \frac{1 + \frac{1}{9}}{2}$ $= \frac{5}{9}$, so $\cos\frac{x}{2} = -\frac{\sqrt{5}}{3}$.`,
        t`$\tan\frac{x}{2} = \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}}$ $= \frac{2}{3} \div \left(-\frac{\sqrt{5}}{3}\right)$ $= -\frac{2}{\sqrt{5}}$. Note that $x$ itself is in quadrant IV, where $\sin$ is negative: its sign would have been wrong for $\sin\frac{x}{2}$.`,
      ],
      answer: t`$\sin\frac{x}{2} = \frac{2}{3}$, $\cos\frac{x}{2} = -\frac{\sqrt{5}}{3}$, $\tan\frac{x}{2} = -\frac{2}{\sqrt{5}}$.`,
    },
    visualSpec: t`Drag $x$ around the unit circle: the point for $\frac{x}{2}$ follows at half the speed, and the signs of $\sin\frac{x}{2}$ and $\cos\frac{x}{2}$ light up from its quadrant, next to the quadrant of $x$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Swaps the formulas: $\sin^2\frac{x}{2} = \frac{1 + \cos x}{2}$ and $\cos^2\frac{x}{2} = \frac{1 - \cos x}{2}$`,
      remediation: t`The minus sign goes with $\sin$: $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$, from $\cos x = 1 - 2\sin^2\frac{x}{2}$. Check at $x = 0$: $\sin 0 = 0$, and $1 - \cos 0 = 0$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M2",
      mistake: t`Drops the square root: $\sin\frac{x}{2} = \frac{1 - \cos x}{2}$`,
      remediation: t`The formula gives the square, $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$. Take the square root at the end: $\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Takes the sign from the quadrant of $x$ instead of the quadrant of $\frac{x}{2}$`,
      remediation: t`Halve the range of $x$ to find where $\frac{x}{2}$ lies, and use that quadrant's sign. For $\pi < x < \frac{3\pi}{2}$, $\frac{x}{2}$ is in quadrant II, not quadrant III.`,
      fallback: { kind: "ext", topic: "signs in the four quadrants" },
    },
    {
      id: "C05-M4",
      mistake: t`Halves the ratio: $\sin\frac{x}{2} = \frac{1}{2}\sin x$`,
      remediation: t`A ratio does not halve when the angle does: $\sin 30^\circ = \frac{1}{2}$, not $\frac{1}{2}\sin 60^\circ$. Use $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$, or $\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M5",
      mistake: t`Forgets to divide by 2: $\sin^2\frac{x}{2} = 1 - \cos x$`,
      remediation: t`$1 - \cos x = 2\sin^2\frac{x}{2}$, so divide by 2: $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$. Check at $x = \pi$: $\sin^2\frac{\pi}{2} = 1$, and $\frac{1 - \cos\pi}{2} = 1$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M3 gives the key when $x$ is in quadrant I, and whenever the asked ratio has the same sign in the quadrants of $x$ and $\frac{x}{2}$ (e.g. $\sin\frac{x}{2}$ for $x$ in quadrant II, $\tan\frac{x}{2}$ for $x$ in quadrant IV). Diagnose it with $\cos\frac{x}{2}$ for $x$ in II, $\sin$ or $\tan\frac{x}{2}$ for $x$ in III, or $\sin$, $\cos\frac{x}{2}$ for $x$ in IV. It has no model on simplifications.`,
    t`C05-M5 gives the key on $\tan\frac{x}{2}$ (the 2 cancels in the ratio): test it on $\sin$ or $\cos$ of the half angle.`,
    t`On simplifications each model follows one route (models/compound_and_multiple_angles/c05.py, EXPRS): C05-Q5 through $\tan\frac{\theta}{2}$, C05-Q6 through $\sin x\tan\frac{x}{2} = 2\sin^2\frac{x}{2}$.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q1(i)" },
      stem: t`The value of $\sin\frac{\pi}{8}$ is:`,
      verify: { kind: "value", inputs: { a: "pi/4" }, params: { form: "angle", ask: "sin" } },
      options: [
        { key: "A", text: t`$\sqrt{1 - \frac{1}{\sqrt{2}}}$`, correct: false, misconceptionId: "C05-M5", value: "sqrt(4 - 2*sqrt(2))/2" },
        { key: "B", text: t`$\frac{\sqrt{2 - \sqrt{2}}}{2}$`, correct: true, value: "sqrt(2 - sqrt(2))/2" },
        { key: "C", text: t`$\frac{\sqrt{2 + \sqrt{2}}}{2}$`, correct: false, misconceptionId: "C05-M1", value: "sqrt(sqrt(2) + 2)/2" },
        { key: "D", text: t`$\frac{2 - \sqrt{2}}{4}$`, correct: false, misconceptionId: "C05-M2", value: "1/2 - sqrt(2)/4" },
      ],
      solution: {
        steps: [
          t`$\frac{\pi}{8}$ is half of $\frac{\pi}{4}$ and lies in quadrant I, so $\sin\frac{\pi}{8} > 0$.`,
          t`$\sin^2\frac{\pi}{8} = \frac{1 - \cos\frac{\pi}{4}}{2} = \frac{1 - \frac{1}{\sqrt{2}}}{2} = \frac{2 - \sqrt{2}}{4}$.`,
          t`Take the positive root: $\sin\frac{\pi}{8} = \frac{\sqrt{2 - \sqrt{2}}}{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.3.2 SolvedEx.10" },
      stem: t`The value of $\tan\frac{\pi}{8}$ is:`,
      verify: { kind: "value", inputs: { a: "pi/4" }, params: { form: "angle", ask: "tan" } },
      options: [
        { key: "A", text: t`$\sqrt{2} + 1$`, correct: false, misconceptionId: "C05-M1", value: "1 + sqrt(2)" },
        { key: "B", text: t`$3 - 2\sqrt{2}$`, correct: false, misconceptionId: "C05-M2", value: "3 - 2*sqrt(2)" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C05-M4", value: "1/2" },
        { key: "D", text: t`$\sqrt{2} - 1$`, correct: true, value: "-1 + sqrt(2)" },
      ],
      solution: {
        steps: [
          t`With $x = \frac{\pi}{4}$: $\tan\frac{\pi}{8} = \frac{\sin\frac{\pi}{4}}{1 + \cos\frac{\pi}{4}} = \frac{\frac{1}{\sqrt{2}}}{1 + \frac{1}{\sqrt{2}}} = \frac{1}{\sqrt{2} + 1}$.`,
          t`Rationalise: $\frac{1}{\sqrt{2} + 1} \cdot \frac{\sqrt{2} - 1}{\sqrt{2} - 1} = \sqrt{2} - 1$.`,
          t`It is positive, as it should be: $\frac{\pi}{8}$ is in quadrant I. So $\tan\frac{\pi}{8} = \sqrt{2} - 1$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.3.2 SolvedEx.9" },
      stem: t`If $\tan x = -\frac{4}{3}$ and $\frac{\pi}{2} < x < \pi$, then $\cos\frac{x}{2} =$`,
      verify: { kind: "value", inputs: { t: "-4/3", q: "2" }, params: { form: "ratio", ask: "cos" } },
      options: [
        { key: "A", text: t`$\frac{1}{\sqrt{5}}$`, correct: true, value: "sqrt(5)/5" },
        { key: "B", text: t`$\frac{2}{\sqrt{5}}$`, correct: false, misconceptionId: "C05-M1", value: "2*sqrt(5)/5" },
        { key: "C", text: t`$-\frac{1}{\sqrt{5}}$`, correct: false, misconceptionId: "C05-M3", value: "-sqrt(5)/5" },
        { key: "D", text: t`$\sqrt{\frac{2}{5}}$`, correct: false, misconceptionId: "C05-M5", value: "sqrt(10)/5" },
      ],
      solution: {
        steps: [
          t`$\sec^2 x = 1 + \frac{16}{9} = \frac{25}{9}$. In quadrant II $\cos x < 0$, so $\cos x = -\frac{3}{5}$.`,
          t`Halve the range: $\frac{\pi}{4} < \frac{x}{2} < \frac{\pi}{2}$, quadrant I, so $\cos\frac{x}{2} > 0$.`,
          t`$\cos^2\frac{x}{2} = \frac{1 + \left(-\frac{3}{5}\right)}{2} = \frac{1}{5}$, so $\cos\frac{x}{2} = \frac{1}{\sqrt{5}}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.3.2 SolvedEx.9" },
      stem: t`If $\tan x = \frac{4}{3}$ and $\pi < x < \frac{3\pi}{2}$, then $\tan\frac{x}{2} =$`,
      verify: { kind: "value", inputs: { t: "4/3", q: "3" }, params: { form: "ratio", ask: "tan" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C05-M3", value: "2" },
        { key: "B", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C05-M4", value: "2/3" },
        { key: "C", text: t`$-2$`, correct: true, value: "-2" },
        { key: "D", text: t`$-4$`, correct: false, misconceptionId: "C05-M2", value: "-4" },
      ],
      solution: {
        steps: [
          t`$\sec^2 x = 1 + \frac{16}{9} = \frac{25}{9}$. In quadrant III $\cos x < 0$ and $\sin x < 0$, so $\cos x = -\frac{3}{5}$ and $\sin x = -\frac{4}{5}$.`,
          t`Halve the range: $\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$, quadrant II, so $\tan\frac{x}{2} < 0$.`,
          t`$\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x} = \frac{-\frac{4}{5}}{\frac{2}{5}} = -2$, negative as expected.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q3(xi)" },
      stem: t`$\dfrac{\tan\frac{\theta}{2} + \cot\frac{\theta}{2}}{\cot\frac{\theta}{2} - \tan\frac{\theta}{2}}$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", e: "tancot" } },
      options: [
        { key: "A", text: t`$\sec\theta$`, correct: true, value: "1/cos(x)" },
        { key: "B", text: t`$-\sec\theta$`, correct: false, misconceptionId: "C05-M1", value: "-1/cos(x)" },
        { key: "C", text: t`$\dfrac{1 + \cos^2\theta}{2\cos\theta}$`, correct: false, misconceptionId: "C05-M2", value: "(1 + cos(x)**2)/(2*cos(x))" },
        { key: "D", text: t`$\dfrac{4 + \tan^2\theta}{4 - \tan^2\theta}$`, correct: false, misconceptionId: "C05-M4", value: "(4 + tan(x)**2)/(4 - tan(x)**2)" },
      ],
      solution: {
        steps: [
          t`Write both in $\sin\frac{\theta}{2}$ and $\cos\frac{\theta}{2}$: $\tan\frac{\theta}{2} + \cot\frac{\theta}{2} = \frac{\sin^2\frac{\theta}{2} + \cos^2\frac{\theta}{2}}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{1}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}}$.`,
          t`$\cot\frac{\theta}{2} - \tan\frac{\theta}{2} = \frac{\cos^2\frac{\theta}{2} - \sin^2\frac{\theta}{2}}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}} = \frac{\cos\theta}{\sin\frac{\theta}{2}\cos\frac{\theta}{2}}$.`,
          t`Divide: the denominators cancel, leaving $\frac{1}{\cos\theta} = \sec\theta$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q3(xix)" },
      stem: t`$\sin x\tan\frac{x}{2} + 2\cos x$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", e: "sintan" } },
      options: [
        { key: "A", text: t`$1 + \cos x$`, correct: true, value: "cos(x) + 1" },
        { key: "B", text: t`$1 + 3\cos x$`, correct: false, misconceptionId: "C05-M1", value: "3*cos(x) + 1" },
        { key: "C", text: t`$\dfrac{(1 + \cos x)^2}{2}$`, correct: false, misconceptionId: "C05-M2", value: "(cos(x) + 1)**2/2" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C05-M5", value: "2" },
      ],
      solution: {
        steps: [
          t`$\sin x\tan\frac{x}{2} = 2\sin\frac{x}{2}\cos\frac{x}{2} \cdot \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = 2\sin^2\frac{x}{2}$.`,
          t`$2\sin^2\frac{x}{2} = 1 - \cos x$.`,
          t`So the expression is $1 - \cos x + 2\cos x = 1 + \cos x$.`,
        ],
      },
    },
  ],
};
