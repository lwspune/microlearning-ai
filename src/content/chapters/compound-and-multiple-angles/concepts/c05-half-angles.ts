import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`$\cos 60^\circ = \frac{1}{2}$. Is $\cos 30^\circ$ half of that, $\frac{1}{4}$? **How can you get $\cos 30^\circ$ from $\cos 60^\circ$ alone?**`,
    reveal: t`Not by halving: a ratio does not halve when the angle does. Read $\cos 2A = 2\cos^2 A - 1$ backwards with $2A = 60^\circ$: $\cos^2 30^\circ = \frac{1 + \cos 60^\circ}{2} = \frac{3}{4}$. So $\cos 30^\circ = \frac{\sqrt{3}}{2}$, positive because $30^\circ$ is in quadrant I.`,
  },
  explanation: {
    intuition: t`A half-angle formula is a double-angle formula read backwards. In $\cos x = 1 - 2\sin^2\frac{x}{2}$, the angle $x$ is double $\frac{x}{2}$, so solving for $\sin^2\frac{x}{2}$ gives it from $\cos x$ alone. The formula gives a square, so its root comes with a $\pm$ and the formula can't choose. The angle $\frac{x}{2}$ chooses: halve the range of $x$ to find its quadrant.`,
    formal: t`**The formulas.** From $\cos x = 1 - 2\sin^2\frac{x}{2} = 2\cos^2\frac{x}{2} - 1$:
$$\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}, \qquad \cos^2\frac{x}{2} = \frac{1 + \cos x}{2}$$
The minus sign goes with $\sin$: at $x = 0$, $\sin 0 = 0$ and $1 - \cos 0 = 0$.

**tan of a half angle.** $\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x}$. There is no root here, so the sign comes out by itself. Its square is $\tan^2\frac{x}{2} = \frac{1 - \cos x}{1 + \cos x}$.

**Picking the sign.** Take the root, then halve the range of $x$. If $\pi < x < \frac{3\pi}{2}$, then $\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$: quadrant II, so $\sin\frac{x}{2} > 0$ and $\cos\frac{x}{2} < 0$. The sign belongs to $\frac{x}{2}$, not to $x$.

**In simplifications.** Read the formulas the other way: $1 - \cos x = 2\sin^2\frac{x}{2}$, $1 + \cos x = 2\cos^2\frac{x}{2}$, and $\sin x = 2\sin\frac{x}{2}\cos\frac{x}{2}$.`,
    worked: {
      prompt: t`If $\cos x = \frac{1}{9}$ and $\frac{3\pi}{2} < x < 2\pi$, find $\sin\frac{x}{2}$, $\cos\frac{x}{2}$ and $\tan\frac{x}{2}$.`,
      steps: [
        t`Halve the range: $\frac{3\pi}{4} < \frac{x}{2} < \pi$. So $\frac{x}{2}$ is in quadrant II: $\sin\frac{x}{2} > 0$, $\cos\frac{x}{2} < 0$.`,
        t`$\sin^2\frac{x}{2} = \frac{1 - \frac{1}{9}}{2} = \frac{4}{9}$, so $\sin\frac{x}{2} = \frac{2}{3}$.`,
        t`$\cos^2\frac{x}{2} = \frac{1 + \frac{1}{9}}{2} = \frac{5}{9}$, so $\cos\frac{x}{2} = -\frac{\sqrt{5}}{3}$.`,
        t`$\tan\frac{x}{2} = \frac{\sin\frac{x}{2}}{\cos\frac{x}{2}} = \frac{2}{3} \div \left(-\frac{\sqrt{5}}{3}\right) = -\frac{2}{\sqrt{5}}$. Note that $x$ itself is in quadrant IV, where $\sin$ is negative: its sign would have been wrong for $\sin\frac{x}{2}$.`,
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
