import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Work out $\tan 20^\circ + \tan 25^\circ + \tan 20^\circ \tan 25^\circ$. Neither tan is a nice number. **Can the answer be?**`,
    reveal: t`Yes: it is exactly $1$. Since $20^\circ + 25^\circ = 45^\circ$, $\tan 45^\circ = \frac{\tan 20^\circ + \tan 25^\circ}{1 - \tan 20^\circ \tan 25^\circ} = 1$. Clear the fraction: $\tan 20^\circ + \tan 25^\circ = 1 - \tan 20^\circ \tan 25^\circ$, so the sum is $1$.`,
  },
  explanation: {
    intuition: t`$\tan(A + B)$ is $\frac{\sin(A + B)}{\cos(A + B)}$. Expand both with the sin and cos formulas, then divide top and bottom by $\cos A\cos B$: every term turns into a tan. The top keeps the sign of $A \pm B$; the bottom copies the sign of $\cos(A \pm B)$, which is the opposite one. So $\tan(A + B)$ is never just $\tan A + \tan B$.`,
    formal: t`**The formulas**

$$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}, \qquad \tan(A - B) = \frac{\tan A - \tan B}{1 + \tan A\tan B}$$

The top has the bracket's sign; the bottom has the opposite sign.

**Where they come from.** $\frac{\sin A\cos B + \cos A\sin B}{\cos A\cos B - \sin A\sin B}$, divided top and bottom by $\cos A\cos B$.

**With $\frac{\pi}{4}$.** $\tan\frac{\pi}{4} = 1$, so $\tan\left(\frac{\pi}{4} + x\right) = \frac{1 + \tan x}{1 - \tan x}$ and $\tan\left(\frac{\pi}{4} - x\right) = \frac{1 - \tan x}{1 + \tan x}$. Read backwards, $\frac{\cos x + \sin x}{\cos x - \sin x} = \tan\left(\frac{\pi}{4} + x\right)$: divide by $\cos x$ first.

**cot.** $\cot(A \pm B) = \frac{1}{\tan(A \pm B)}$: find the tan, then flip it. Don't write cot into the tan pattern.

**Clearing the fraction.** If $C = A + B$, then $\tan C(1 - \tan A\tan B) = \tan A + \tan B$, so $\tan C - \tan A - \tan B = \tan A\tan B\tan C$. For example $\tan 3x - \tan 2x - \tan x = \tan 3x\tan 2x\tan x$.`,
    worked: {
      prompt: t`Simplify $\dfrac{\cos 27^\circ + \sin 27^\circ}{\cos 27^\circ - \sin 27^\circ}$.`,
      steps: [
        t`Divide top and bottom by $\cos 27^\circ$: $\dfrac{1 + \tan 27^\circ}{1 - \tan 27^\circ}$.`,
        t`Write $1$ as $\tan 45^\circ$: $\dfrac{\tan 45^\circ + \tan 27^\circ}{1 - \tan 45^\circ \tan 27^\circ}$.`,
        t`That is the $\tan(A + B)$ formula with $A = 45^\circ$, $B = 27^\circ$: plus on top, minus below.`,
      ],
      answer: t`$\tan(45^\circ + 27^\circ) = \tan 72^\circ$.`,
    },
    visualSpec: t`Drag $A$ and $B$ round the unit circle; $\tan A$, $\tan B$ and $\tan(A + B)$ update next to the formula with the numbers put in, and the denominator $1 - \tan A\tan B$ turns red as it nears $0$ (as $A + B$ nears $90^\circ$).`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Giving the denominator the same sign as the numerator: $\tan(A + B) = \frac{\tan A + \tan B}{1 + \tan A\tan B}$`,
      remediation: t`The denominator comes from $\cos(A + B) = \cos A\cos B - \sin A\sin B$, so its sign is the opposite of the top's: $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$ and $\tan(A - B) = \frac{\tan A - \tan B}{1 + \tan A\tan B}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Treating tan as if it spreads over a sum: $\tan(A + B) = \tan A + \tan B$`,
      remediation: t`The tan of a sum is not the sum of the tans: $\tan(45^\circ + 45^\circ)$ is undefined, not $2$. Use $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: t`Mixing up the sum and difference formulas, e.g. taking $\tan\left(\frac{\pi}{4} + x\right)$ as $\frac{1 - \tan x}{1 + \tan x}$`,
      remediation: t`Match the signs to the bracket: the top has the same sign as $A \pm B$, the bottom the opposite one. So $\tan\left(\frac{\pi}{4} + x\right) = \frac{1 + \tan x}{1 - \tan x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Copying the tan pattern onto cot: $\cot(A - B) = \frac{\cot A - \cot B}{1 + \cot A\cot B}$`,
      remediation: t`The cot formula does not follow the tan pattern. Find $\tan(A - B)$ first and flip it: $\cot(A - B) = \frac{1 + \tan A\tan B}{\tan A - \tan B}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Ignoring the quadrants when finding tan from sin or cos, so every tan comes out positive",
      remediation: "Use the quadrant to fix the sign of the missing ratio before dividing. In the third quadrant sin and cos are both negative, so tan is positive; in the fourth, tan is negative.",
      fallback: { kind: "ext", topic: "signs in the four quadrants" },
    },
  ],
  engineNotes: [
    t`C02-M1 and C02-M2 give the key when $\tan A\tan B = 0$, and C02-M3 when $\tan B = 0$: draw diagnosing items with both tans nonzero.`,
    "C02-M5 gives the key when both angles are in the first quadrant: diagnose it only with an angle outside it.",
    "C02-M4 applies only to cot questions; C02-M5 only when tan must be found from sin or cos and a quadrant.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q1(iii)" },
      stem: t`The value of $\tan 105^\circ$ is:`,
      verify: { kind: "value", inputs: { a: "pi/3", b: "pi/4" }, params: { form: "angles", op: "+" } },
      options: [
        { key: "A", text: t`$-(2 + \sqrt{3})$`, correct: true, value: "-2 - sqrt(3)" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "C", text: t`$\sqrt{3} + 1$`, correct: false, misconceptionId: "C02-M2", value: "1 + sqrt(3)" },
        { key: "D", text: t`$2 - \sqrt{3}$`, correct: false, misconceptionId: "C02-M3", value: "2 - sqrt(3)" },
      ],
      solution: {
        steps: [
          t`$105^\circ = 60^\circ + 45^\circ$, with $\tan 60^\circ = \sqrt{3}$ and $\tan 45^\circ = 1$.`,
          t`$\tan 105^\circ = \dfrac{\sqrt{3} + 1}{1 - \sqrt{3} \cdot 1} = \dfrac{\sqrt{3} + 1}{1 - \sqrt{3}}$.`,
          t`Multiply top and bottom by $1 + \sqrt{3}$: $\dfrac{(\sqrt{3} + 1)^2}{1 - 3} = \dfrac{4 + 2\sqrt{3}}{-2} = -(2 + \sqrt{3})$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.1 SolvedEx.2" },
      stem: t`The value of $\tan \frac{13\pi}{12}$ is:`,
      verify: { kind: "value", inputs: { c: "pi", a: "pi/4", b: "pi/6" }, params: { form: "angles", op: "-" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "B", text: t`$1 - \frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C02-M2", value: "1 - sqrt(3)/3" },
        { key: "C", text: t`$2 + \sqrt{3}$`, correct: false, misconceptionId: "C02-M3", value: "sqrt(3) + 2" },
        { key: "D", text: t`$2 - \sqrt{3}$`, correct: true, value: "2 - sqrt(3)" },
      ],
      solution: {
        steps: [
          t`$\frac{13\pi}{12} = \pi + \frac{\pi}{12}$. Since $\tan\pi = 0$, $\tan\left(\pi + \frac{\pi}{12}\right) = \dfrac{0 + \tan\frac{\pi}{12}}{1 - 0} = \tan\frac{\pi}{12}$.`,
          t`$\frac{\pi}{12} = \frac{\pi}{4} - \frac{\pi}{6}$: $\tan\frac{\pi}{12} = \dfrac{1 - \frac{1}{\sqrt{3}}}{1 + 1 \cdot \frac{1}{\sqrt{3}}} = \dfrac{\sqrt{3} - 1}{\sqrt{3} + 1}$.`,
          t`Multiply top and bottom by $\sqrt{3} - 1$: $\dfrac{(\sqrt{3} - 1)^2}{3 - 1} = \dfrac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q3(iii)" },
      stem: t`If $\sin A = -\frac{5}{13}$ with $\pi < A < \frac{3\pi}{2}$, and $\cos B = \frac{3}{5}$ with $\frac{3\pi}{2} < B < 2\pi$, then $\tan(A + B) =$`,
      verify: { kind: "value", inputs: { sa: "-5/13", qa: "3", cb: "3/5", qb: "4" }, params: { form: "ratios", op: "+" } },
      options: [
        { key: "A", text: t`$\frac{63}{16}$`, correct: false, misconceptionId: "C02-M5", value: "63/16" },
        { key: "B", text: t`$- \frac{33}{56}$`, correct: true, value: "-33/56" },
        { key: "C", text: t`$- \frac{33}{16}$`, correct: false, misconceptionId: "C02-M1", value: "-33/16" },
        { key: "D", text: t`$- \frac{11}{12}$`, correct: false, misconceptionId: "C02-M2", value: "-11/12" },
      ],
      solution: {
        steps: [
          t`$A$ is in the third quadrant, so $\cos A = -\frac{12}{13}$ and $\tan A = \dfrac{-5/13}{-12/13} = \frac{5}{12}$.`,
          t`$B$ is in the fourth quadrant, so $\sin B = -\frac{4}{5}$ and $\tan B = -\frac{4}{3}$.`,
          t`$\tan(A + B) = \dfrac{\frac{5}{12} - \frac{4}{3}}{1 - \frac{5}{12}\left(-\frac{4}{3}\right)} = \dfrac{-\frac{11}{12}}{\frac{14}{9}} = -\frac{33}{56}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q4" },
      stem: t`If $\tan A = \frac{5}{6}$ and $\tan B = \frac{1}{11}$, then $\tan(A + B) =$`,
      verify: { kind: "value", inputs: { ta: "5/6", tb: "1/11" }, params: { form: "tans", op: "+" } },
      options: [
        { key: "A", text: t`$\frac{49}{71}$`, correct: false, misconceptionId: "C02-M3", value: "49/71" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$\frac{61}{71}$`, correct: false, misconceptionId: "C02-M1", value: "61/71" },
        { key: "D", text: t`$\frac{61}{66}$`, correct: false, misconceptionId: "C02-M2", value: "61/66" },
      ],
      solution: {
        steps: [
          t`$\tan(A + B) = \dfrac{\frac{5}{6} + \frac{1}{11}}{1 - \frac{5}{6} \cdot \frac{1}{11}}$.`,
          t`Top: $\frac{55 + 6}{66} = \frac{61}{66}$. Bottom: $1 - \frac{5}{66} = \frac{61}{66}$.`,
          t`So $\tan(A + B) = 1$; for acute $A$ and $B$ this means $A + B = \frac{\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.1 Q2(iii)" },
      stem: t`$\dfrac{\tan\left(\frac{\pi}{4} + x\right)}{\tan\left(\frac{\pi}{4} - x\right)}$ is equal to:`,
      verify: { kind: "value", inputs: { x: "x" }, params: { form: "pi4ratio" } },
      options: [
        { key: "A", text: t`$\left(\dfrac{1 - \tan x}{1 + \tan x}\right)^2$`, correct: false, misconceptionId: "C02-M3", value: "(tan(x) - 1)**2/(tan(x) + 1)**2" },
        { key: "B", text: t`$\left(\dfrac{1 + \tan x}{1 - \tan x}\right)^2$`, correct: true, value: "((1 + tan(x))/(1 - tan(x)))**2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "D", text: t`$\dfrac{1 + \tan x}{1 - \tan x}$`, correct: false, misconceptionId: "C02-M2", value: "-(tan(x) + 1)/(tan(x) - 1)" },
      ],
      solution: {
        steps: [
          t`With $\tan\frac{\pi}{4} = 1$: $\tan\left(\frac{\pi}{4} + x\right) = \dfrac{1 + \tan x}{1 - \tan x}$ and $\tan\left(\frac{\pi}{4} - x\right) = \dfrac{1 - \tan x}{1 + \tan x}$.`,
          t`Dividing by a fraction means multiplying by its flip: $\dfrac{1 + \tan x}{1 - \tan x} \cdot \dfrac{1 + \tan x}{1 - \tan x} = \left(\dfrac{1 + \tan x}{1 - \tan x}\right)^2$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc I Q2" },
      stem: t`If $\tan A - \tan B = x$ and $\cot B - \cot A = y$, then $\cot(A - B) =$`,
      verify: { kind: "value", inputs: { x: "x", y: "y" }, params: { form: "cotdiff", op: "-", ask: "cot" } },
      options: [
        { key: "A", text: t`$\frac{1}{x} + \frac{1}{y}$`, correct: true, value: "(x + y)/(x*y)" },
        { key: "B", text: t`$\frac{1}{x} - \frac{1}{y}$`, correct: false, misconceptionId: "C02-M1", value: "(-x + y)/(x*y)" },
        { key: "C", text: t`$\frac{1}{x}$`, correct: false, misconceptionId: "C02-M2", value: "1/x" },
        { key: "D", text: t`$-\frac{xy}{x + y}$`, correct: false, misconceptionId: "C02-M4", value: "-x*y/(x + y)" },
      ],
      solution: {
        steps: [
          t`$\cot B - \cot A = \dfrac{1}{\tan B} - \dfrac{1}{\tan A} = \dfrac{\tan A - \tan B}{\tan A\tan B} = \dfrac{x}{\tan A\tan B}$. This is $y$, so $\tan A\tan B = \frac{x}{y}$.`,
          t`$\cot(A - B) = \dfrac{1}{\tan(A - B)} = \dfrac{1 + \tan A\tan B}{\tan A - \tan B} = \dfrac{1 + \frac{x}{y}}{x}$.`,
          t`$= \dfrac{x + y}{xy} = \frac{1}{x} + \frac{1}{y}$.`,
        ],
      },
    },
  ],
};
