import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`No standard formula fits $\int \dfrac{dx}{2 + \cos x}$, and $u = \cos x$ fails: there is no $\sin x$ to make $du$. **Is there a substitution that turns it into a plain fraction in one letter?**`,
    reveal: t`Yes. With $t = \tan\frac{x}{2}$, $\cos x = \frac{1 - t^2}{1 + t^2}$ and $dx = \frac{2\,dt}{1 + t^2}$, so the integral becomes $\int \frac{2\,dt}{t^2 + 3}$.`,
  },
  explanation: {
    intuition: [
      t`A fraction built from $\sin x$ and $\cos x$, like $\frac{1}{3 + \cos x}$, often matches no standard formula.`,
      t`The trick is to name one quantity, $t = \tan\frac{x}{2}$, and write everything in $t$.`,
      t`Then $\sin x$, $\cos x$ and $dx$ all become **rational** in $t$: fractions of polynomials, with no roots.`,
      t`The integral turns into a fraction in $t$, usually $1$ over a quadratic.`,
      t`Integrate that in $t$, then put back $t = \tan\frac{x}{2}$.`,
    ],
    formal: [
      {
        title: "Where the formulae come from",
        points: [
          t`Draw a right triangle with angle $\frac{x}{2}$, opposite side $t$ and adjacent side $1$, so $\tan\frac{x}{2} = t$.`,
          t`By Pythagoras, the **hypotenuse**, the longest side, is $\sqrt{1 + t^2}$.`,
          t`So $\sin\frac{x}{2} = \frac{t}{\sqrt{1 + t^2}}$, and $\cos\frac{x}{2} = \frac{1}{\sqrt{1 + t^2}}$.`,
          t`Then $\sin x = 2\sin\frac{x}{2}\cos\frac{x}{2}$ $= \frac{2t}{1 + t^2}$.`,
          t`And $\cos x = \cos^2\frac{x}{2} - \sin^2\frac{x}{2}$ $= \frac{1 - t^2}{1 + t^2}$.`,
          t`Check at $x = 0$: $t = 0$ gives $\sin x = 0$ and $\cos x = 1$, as it should.`,
        ],
        figure: {
          alt: "A right triangle with the angle x/2 at the left corner. The side next to the angle is 1, the side opposite it is t, so tan(x/2) = t; the hypotenuse is √(1 + t²).",
          axes: "none",
          view: { x: [-0.6, 3.9], y: [-0.8, 2.9] },
          elements: [
            { kind: "segment", from: [0, 0], to: [3, 0], step: 1 },
            { kind: "segment", from: [3, 0], to: [3, 2], step: 1 },
            { kind: "segment", from: [0, 0], to: [3, 2], step: 1 },
            { kind: "segment", from: [2.75, 0], to: [2.75, 0.25], tone: "muted", step: 1 },
            { kind: "segment", from: [2.75, 0.25], to: [3, 0.25], tone: "muted", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 33.69, label: "x/2", labelAt: "e", step: 1 },
            { kind: "label", at: [1.5, 0], label: "1", labelAt: "s", step: 1 },
            { kind: "label", at: [3, 1], label: "t", labelAt: "e", step: 1 },
            { kind: "label", at: [1.5, 1], label: "√(1 + t²)", labelAt: "nw", step: 2 },
          ],
        },
      },
      {
        title: "Change dx too",
        points: [
          t`For $-\pi < x < \pi$, $t = \tan\frac{x}{2}$ means $x = 2\tan^{-1}t$.`,
          t`Differentiate: $\frac{dx}{dt} = \frac{2}{1 + t^2}$, so $dx = \frac{2\,dt}{1 + t^2}$.`,
          t`The $2$ comes from the half angle; without it the answer is half what it should be.`,
          t`Every part changes: $\sin x$, $\cos x$ **and** $dx$. Leaving $dx$ as $dt$ is wrong.`,
        ],
      },
      {
        title: "Clear the fractions",
        points: [
          t`Take $\int \frac{dx}{2 - \sin x}$ and put $t = \tan\frac{x}{2}$.`,
          t`Give $2$ the denominator $1 + t^2$ first: $2 = \frac{2 + 2t^2}{1 + t^2}$.`,
          t`So $2 - \sin x$ $= \frac{2 + 2t^2 - 2t}{1 + t^2}$.`,
          t`Flip it and multiply by $dx = \frac{2\,dt}{1 + t^2}$: the two $1 + t^2$ cancel.`,
          t`The integral becomes $\int \frac{2\,dt}{2t^2 - 2t + 2}$ $= \int \frac{dt}{t^2 - t + 1}$.`,
          t`A quadratic like this is then finished with the standard quadratic forms.`,
        ],
      },
      {
        title: "When the angle is 2x",
        points: [
          t`For $\sin 2x$ and $\cos 2x$, put $t = \tan x$ instead: half of the angle $2x$.`,
          t`Then $\sin 2x = \frac{2t}{1 + t^2}$ and $\cos 2x = \frac{1 - t^2}{1 + t^2}$, the same shapes.`,
          t`But now $x = \tan^{-1}t$, so $dx = \frac{dt}{1 + t^2}$, with no $2$.`,
          t`So always find $dx$ from the substitution itself, not from memory.`,
          t`The same steps handle $a + b\sin x + c\cos x$: replace both, then clear the fractions.`,
        ],
      },
      {
        title: "Write the answer in x",
        points: [
          t`Example: $1 + \cos x = \frac{2}{1 + t^2}$, so $\int \frac{dx}{1 + \cos x} = \int dt$.`,
          t`That is $t + c$, and $t$ is $\tan\frac{x}{2}$, not $\tan x$: the answer is $\tan\frac{x}{2} + c$.`,
          t`Check by differentiating: $\frac{d}{dx}\tan\frac{x}{2}$ $= \frac{1}{2}\sec^2\frac{x}{2}$ $= \frac{1}{1 + \cos x}$.`,
          t`Two right answers can look different, since they may differ by a constant; compare their derivatives.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \dfrac{dx}{1 + \sin x}$ for $-\dfrac{\pi}{2} < x < \pi$.`,
      steps: [
        t`Put $t = \tan\frac{x}{2}$: $\sin x = \frac{2t}{1 + t^2}$ and $dx = \frac{2\,dt}{1 + t^2}$.`,
        t`$1 + \sin x$ $= \frac{1 + t^2 + 2t}{1 + t^2}$ $= \frac{(1 + t)^2}{1 + t^2}$.`,
        t`The $1 + t^2$ cancels: $\int \frac{2\,dt}{(1 + t)^2}$ $= -\frac{2}{1 + t} + c$.`,
        t`Put back $t = \tan\frac{x}{2}$: the answer is $-\frac{2}{1 + \tan\frac{x}{2}} + c$.`,
      ],
      answer: t`$-\dfrac{2}{1 + \tan\frac{x}{2}} + c$`,
    },
    visualSpec: t`A slider for $x$ on the unit circle that shows $t = \tan\frac{x}{2}$ and the point $(\cos x, \sin x)$ as $\left(\frac{1 - t^2}{1 + t^2}, \frac{2t}{1 + t^2}\right)$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Changing $\sin x$ and $\cos x$ to $t$ but leaving $dx$ as $dt$`,
      remediation: t`A substitution changes $dx$ too: with $t = \tan\frac{x}{2}$, $dx = \frac{2\,dt}{1 + t^2}$. Multiply by it before integrating.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: t`Not matching $dx$ to the angle: $dx = \frac{dt}{1 + t^2}$ for $t = \tan\frac{x}{2}$, or $\frac{2\,dt}{1 + t^2}$ for $t = \tan x$`,
      remediation: t`Find $dx$ from the substitution itself: $x = 2\tan^{-1}t$ gives $dx = \frac{2\,dt}{1 + t^2}$, and $x = \tan^{-1}t$ gives $dx = \frac{dt}{1 + t^2}$.`,
      fallback: { kind: "ext", topic: "chain rule" },
    },
    {
      id: "C05-M3",
      mistake: t`Swapping the formulae: $\sin x = \frac{1 - t^2}{1 + t^2}$ and $\cos x = \frac{2t}{1 + t^2}$`,
      remediation: t`$\sin x = \frac{2t}{1 + t^2}$ and $\cos x = \frac{1 - t^2}{1 + t^2}$. Check at $x = 0$: $t = 0$ must give $\sin x = 0$ and $\cos x = 1$.`,
      fallback: { kind: "ext", topic: "trigonometric identities" },
    },
    {
      id: "C05-M4",
      mistake: t`Adding the constant without the common denominator: taking $a + \frac{b(1 - t^2)}{1 + t^2}$ as $\frac{a + b(1 - t^2)}{1 + t^2}$`,
      remediation: t`Write the constant over $1 + t^2$ first: $a = \frac{a(1 + t^2)}{1 + t^2}$, so the top is $a(1 + t^2) + b(1 - t^2)$.`,
      fallback: { kind: "ext", topic: "adding fractions" },
    },
    {
      id: "C05-M5",
      mistake: t`A sign slip in the cos formula: $\cos x = \frac{t^2 - 1}{1 + t^2}$`,
      remediation: t`$\cos x = \frac{1 - t^2}{1 + t^2}$: at $x = 0$, $t = 0$ and $\cos x$ must be $1$, not $-1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Putting back $t = \tan x$ instead of $t = \tan\frac{x}{2}$ at the end`,
      remediation: t`Return to $x$ with the same $t$ you started with: replace $t$ by $\tan\frac{x}{2}$. Differentiate your answer to check it.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M4 needs a constant term ($a \ne 0$), C05-M5 a $\cos$ term, and C05-M6 an item that asks for the antiderivative in $x$ with $t = \tan\frac{x}{2}$ (only Q5).`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) II (ii)" },
      stem: t`Put $t = \tan\dfrac{x}{2}$ in $\int \dfrac{dx}{4 - 5\cos x}$. The integral becomes $\int f(t)\,dt$, where $f(t) =$`,
      verify: { kind: "value", inputs: { a: "4", b: "0", c: "-5" }, params: { sub: "half", ask: "t" } },
      options: [
        { key: "A", text: t`$\dfrac{2}{5t^2 - 1}$`, correct: false, misconceptionId: "C05-M4", value: "2/(5*t**2 - 1)" },
        { key: "B", text: t`$\dfrac{2}{9t^2 - 1}$`, correct: true, value: "2/(9*t**2 - 1)" },
        { key: "C", text: t`$\dfrac{1 + t^2}{9t^2 - 1}$`, correct: false, misconceptionId: "C05-M1", value: "(t**2 + 1)/(9*t**2 - 1)" },
        { key: "D", text: t`$\dfrac{1}{2t^2 - 5t + 2}$`, correct: false, misconceptionId: "C05-M3", value: "1/(2*t**2 - 5*t + 2)" },
      ],
      solution: {
        steps: [
          t`$\cos x = \frac{1 - t^2}{1 + t^2}$ and $dx = \frac{2\,dt}{1 + t^2}$.`,
          t`$4 - 5\cos x$ $= \frac{4 + 4t^2 - 5 + 5t^2}{1 + t^2}$ $= \frac{9t^2 - 1}{1 + t^2}$.`,
          t`Divide $dx$ by it: the $1 + t^2$ cancels, so $f(t) = \frac{2}{9t^2 - 1}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) II (i)" },
      stem: t`Put $t = \tan\dfrac{x}{2}$ in $\int \dfrac{dx}{3 + 2\sin x}$. The integral becomes $\int f(t)\,dt$, where $f(t) =$`,
      verify: { kind: "value", inputs: { a: "3", b: "2", c: "0" }, params: { sub: "half", ask: "t" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{3t^2 + 4t + 3}$`, correct: false, misconceptionId: "C05-M2", value: "1/(3*t**2 + 4*t + 3)" },
        { key: "B", text: t`$\dfrac{2}{t^2 + 5}$`, correct: false, misconceptionId: "C05-M3", value: "2/(t**2 + 5)" },
        { key: "C", text: t`$\dfrac{2}{4t + 3}$`, correct: false, misconceptionId: "C05-M4", value: "2/(4*t + 3)" },
        { key: "D", text: t`$\dfrac{2}{3t^2 + 4t + 3}$`, correct: true, value: "2/(3*t**2 + 4*t + 3)" },
      ],
      solution: {
        steps: [
          t`$\sin x = \frac{2t}{1 + t^2}$ and $dx = \frac{2\,dt}{1 + t^2}$.`,
          t`$3 + 2\sin x$ $= \frac{3 + 3t^2 + 4t}{1 + t^2}$.`,
          t`Divide $dx$ by it: the $1 + t^2$ cancels, so $f(t) = \frac{2}{3t^2 + 4t + 3}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) II (iv)" },
      stem: t`Put $t = \tan\dfrac{x}{2}$ in $\int \dfrac{dx}{3 + 2\sin x - \cos x}$. The integral becomes $\int f(t)\,dt$, where $f(t) =$`,
      verify: { kind: "value", inputs: { a: "3", b: "2", c: "-1" }, params: { sub: "half", ask: "t" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{2t^2 + 2t + 1}$`, correct: true, value: "1/(2*t**2 + 2*t + 1)" },
        { key: "B", text: t`$\dfrac{1 + t^2}{2(2t^2 + 2t + 1)}$`, correct: false, misconceptionId: "C05-M1", value: "(t**2 + 1)/(2*(2*t**2 + 2*t + 1))" },
        { key: "C", text: t`$\dfrac{2}{t^2 - 2t + 5}$`, correct: false, misconceptionId: "C05-M3", value: "2/(t**2 - 2*t + 5)" },
        { key: "D", text: t`$\dfrac{1}{t^2 + 2t + 2}$`, correct: false, misconceptionId: "C05-M5", value: "1/(t**2 + 2*t + 2)" },
      ],
      solution: {
        steps: [
          t`Replace both: $\sin x = \frac{2t}{1 + t^2}$, $\cos x = \frac{1 - t^2}{1 + t^2}$, and $dx = \frac{2\,dt}{1 + t^2}$.`,
          t`Over $1 + t^2$, the denominator's top is $3 + 3t^2 + 4t - 1 + t^2$ $= 4t^2 + 4t + 2$.`,
          t`So $f(t) = \frac{2}{4t^2 + 4t + 2}$ $= \frac{1}{2t^2 + 2t + 1}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) II (v)" },
      stem: t`Put $t = \tan x$ in $\int \dfrac{dx}{3 - 2\cos 2x}$. The integral becomes $\int f(t)\,dt$, where $f(t) =$`,
      verify: { kind: "value", inputs: { a: "3", b: "0", c: "-2" }, params: { sub: "tan", ask: "t" } },
      options: [
        { key: "A", text: t`$\dfrac{2}{5t^2 + 1}$`, correct: false, misconceptionId: "C05-M2", value: "2/(5*t**2 + 1)" },
        { key: "B", text: t`$\dfrac{1}{2t^2 + 1}$`, correct: false, misconceptionId: "C05-M4", value: "1/(2*t**2 + 1)" },
        { key: "C", text: t`$\dfrac{1}{5t^2 + 1}$`, correct: true, value: "1/(5*t**2 + 1)" },
        { key: "D", text: t`$\dfrac{1 + t^2}{5t^2 + 1}$`, correct: false, misconceptionId: "C05-M1", value: "(t**2 + 1)/(5*t**2 + 1)" },
      ],
      solution: {
        steps: [
          t`The angle is $2x$ and $t = \tan x$: $\cos 2x = \frac{1 - t^2}{1 + t^2}$, $dx = \frac{dt}{1 + t^2}$.`,
          t`$3 - 2\cos 2x$ $= \frac{3 + 3t^2 - 2 + 2t^2}{1 + t^2}$ $= \frac{5t^2 + 1}{1 + t^2}$.`,
          t`So $f(t) = \frac{1}{5t^2 + 1}$, with no factor $2$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/3.2B SolvedEx.11" },
      stem: t`For $-\pi < x < \pi$, $\int \dfrac{dx}{5 - 4\cos x} =$`,
      verify: { kind: "value", inputs: { a: "5", b: "0", c: "-4" }, params: { sub: "half", ask: "anti" } },
      options: [
        { key: "A", text: t`$\dfrac{2}{3}\tan^{-1}\left(3\tan\dfrac{x}{2}\right) + c$`, correct: true, value: "2*atan(3*tan(x/2))/3" },
        { key: "B", text: t`$\dfrac{1}{3}\tan^{-1}\left(3\tan\dfrac{x}{2}\right) + c$`, correct: false, misconceptionId: "C05-M2", value: "atan(3*tan(x/2))/3" },
        { key: "C", text: t`$\tan^{-1}\left(2\tan\dfrac{x}{2}\right) + c$`, correct: false, misconceptionId: "C05-M4", value: "atan(2*tan(x/2))" },
        { key: "D", text: t`$\dfrac{2}{3}\tan^{-1}(3\tan x) + c$`, correct: false, misconceptionId: "C05-M6", value: "2*atan(3*tan(x))/3" },
      ],
      solution: {
        steps: [
          t`Put $t = \tan\frac{x}{2}$. The denominator is $\frac{5 + 5t^2 - 4 + 4t^2}{1 + t^2}$ $= \frac{9t^2 + 1}{1 + t^2}$.`,
          t`With $dx = \frac{2\,dt}{1 + t^2}$, the integral is $\int \frac{2\,dt}{1 + 9t^2}$.`,
          t`Put $u = 3t$: $\frac{2}{3}\int \frac{du}{1 + u^2}$ $= \frac{2}{3}\tan^{-1}(3t) + c$.`,
          t`Put back $t = \tan\frac{x}{2}$: $\frac{2}{3}\tan^{-1}\left(3\tan\frac{x}{2}\right) + c$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) II (vi)" },
      stem: t`Put $t = \tan x$ in $\int \dfrac{dx}{2\sin 2x - 3}$. The integral becomes $\int f(t)\,dt$, where $f(t) =$`,
      verify: { kind: "value", inputs: { a: "-3", b: "2", c: "0" }, params: { sub: "tan", ask: "t" } },
      options: [
        { key: "A", text: t`$-\dfrac{1}{3t^2 - 4t + 3}$`, correct: true, value: "-1/(3*t**2 - 4*t + 3)" },
        { key: "B", text: t`$-\dfrac{1 + t^2}{3t^2 - 4t + 3}$`, correct: false, misconceptionId: "C05-M1", value: "(-t**2 - 1)/(3*t**2 - 4*t + 3)" },
        { key: "C", text: t`$-\dfrac{2}{3t^2 - 4t + 3}$`, correct: false, misconceptionId: "C05-M2", value: "-2/(3*t**2 - 4*t + 3)" },
        { key: "D", text: t`$-\dfrac{1}{5t^2 + 1}$`, correct: false, misconceptionId: "C05-M3", value: "-1/(5*t**2 + 1)" },
      ],
      solution: {
        steps: [
          t`The angle is $2x$ and $t = \tan x$: $\sin 2x = \frac{2t}{1 + t^2}$, $dx = \frac{dt}{1 + t^2}$.`,
          t`$2\sin 2x - 3$ $= \frac{4t - 3 - 3t^2}{1 + t^2}$.`,
          t`So $f(t) = \frac{1}{-3t^2 + 4t - 3}$ $= -\frac{1}{3t^2 - 4t + 3}$.`,
        ],
      },
    },
  ],
};
