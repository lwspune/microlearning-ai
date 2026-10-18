import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`No standard formula has $\sin^2 x$ in it, and $\int \sin^2 x\,dx$ is not $\frac{\sin^3 x}{3}$. **So how do you integrate $\sin^2 x$?**`,
    reveal: t`Rewrite it first: $\sin^2 x = \frac{1 - \cos 2x}{2}$ $= \frac{1}{2} - \frac{\cos 2x}{2}$, a sum of standard forms. Integrate term by term: $\frac{x}{2} - \frac{\sin 2x}{4} + c$.`,
  },
  explanation: {
    intuition: [
      t`The standard formulae cover single forms like $x^n$, $\sin x$, $\sec^2 x$, $e^x$ and $\frac{1}{x}$.`,
      t`An integral splits over sums and constant multiples: $\int (f + g)\,dx$ $= \int f\,dx + \int g\,dx$.`,
      t`It does **not** split over products or quotients: $\int fg\,dx$ is not $\int f\,dx \cdot \int g\,dx$.`,
      t`So first **rewrite** a product, quotient or power as a sum of standard forms.`,
      t`Three tools do it: expand the brackets, divide out the fraction, or use an identity.`,
      t`Check any answer by differentiating it: you must get the integrand back.`,
    ],
    formal: [
      {
        title: "Expand brackets first",
        points: [
          t`A bracket raised to a power must be multiplied out before you integrate.`,
          t`$(a + b)^2 = a^2 + 2ab + b^2$: keep the middle term $2ab$.`,
          t`Example: $x^2\left(1 - \frac{2}{x}\right)^2$ $= x^2 - \frac{4x^2}{x} + \frac{4x^2}{x^2}$ $= x^2 - 4x + 4$.`,
          t`So $\int x^2\left(1 - \frac{2}{x}\right)^2 dx$ $= \frac{x^3}{3} - 2x^2 + 4x + c$.`,
          t`The power rule is for $x^n$ only: $\frac{d}{dx}\frac{g^3}{3} = g^2 g'$, not $g^2$.`,
        ],
      },
      {
        title: "Divide out a fraction",
        points: [
          t`Over a single term, divide **every** term of the numerator by it.`,
          t`Example: $\frac{x^2 + 3x - 1}{x} = x + 3 - \frac{1}{x}$.`,
          t`Write roots as powers: $\frac{1}{x\sqrt{x}} = x^{-3/2}$, and $\frac{e^{3x}}{e^x} = e^{2x}$.`,
          t`Over $ax + b$, write the numerator in terms of the denominator: $\frac{x}{x + 2}$ $= \frac{(x + 2) - 2}{x + 2}$.`,
          t`That gives $1 - \frac{2}{x + 2}$, so the integral is $x - 2\log|x + 2| + c$ (for $x > -2$).`,
          t`Only constants come out of an integral; a factor holding $x$ stays inside.`,
        ],
      },
      {
        title: "Squares of sine and cosine",
        points: [
          t`From $\cos 2x = 1 - 2\sin^2 x$: $\sin^2 x = \frac{1 - \cos 2x}{2}$, minus for sine.`,
          t`From $\cos 2x = 2\cos^2 x - 1$: $\cos^2 x = \frac{1 + \cos 2x}{2}$, plus for cosine.`,
          t`Test the sign at $x = 0$: $\sin^2 0 = 0$ and $\frac{1 - \cos 0}{2} = 0$.`,
          t`Integrate $\cos 2x$ with $\int f(ax + b)\,dx$ $= \frac{1}{a}F(ax + b) + c$; here $a = 2$.`,
          t`So $\int \cos 2x\,dx = \frac{\sin 2x}{2} + c$: the derivative of $\sin 2x$ is $2\cos 2x$.`,
        ],
      },
      {
        title: "Other identities that help",
        points: [
          t`$\tan^2 x = \sec^2 x - 1$ and $\cot^2 x = \operatorname{cosec}^2 x - 1$.`,
          t`They come from $1 + \tan^2 x = \sec^2 x$ and $1 + \cot^2 x = \operatorname{cosec}^2 x$.`,
          t`Example: $\int \cot^2 x\,dx$ $= \int (\operatorname{cosec}^2 x - 1)\,dx$ $= -\cot x - x + c$.`,
          t`A double angle can cancel: $\frac{\sin 2x}{\cos x} = \frac{2\sin x\cos x}{\cos x}$ $= 2\sin x$.`,
          t`A conjugate clears a sum below: $\frac{1}{1 + \sin x}$ $= \frac{1 - \sin x}{1 - \sin^2 x}$ $= \frac{1 - \sin x}{\cos^2 x}$.`,
          t`That is $\sec^2 x - \sec x\tan x$, two standard forms.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \dfrac{\cos 2x}{\sin^2 x\cos^2 x}\,dx$.`,
      steps: [
        t`No standard form fits, so rewrite the numerator: $\cos 2x = \cos^2 x - \sin^2 x$.`,
        t`Split the fraction: $\frac{\cos^2 x}{\sin^2 x\cos^2 x}$ $- \frac{\sin^2 x}{\sin^2 x\cos^2 x}$.`,
        t`Cancel: the integrand is $\operatorname{cosec}^2 x - \sec^2 x$.`,
        t`Integrate term by term: $-\cot x - \tan x + c$.`,
        t`Check: $\frac{d}{dx}(-\cot x - \tan x)$ $= \operatorname{cosec}^2 x - \sec^2 x$.`,
      ],
      answer: t`$-\cot x - \tan x + c$`,
    },
    visualSpec: t`Two graphs on one screen: $\cos^2 x$ and a draggable choice of $\frac{1 + \cos 2x}{2}$ or $\frac{1 - \cos 2x}{2}$; the right identity lies exactly on top of $\cos^2 x$, the wrong sign sits half a period apart.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Using the power rule on a power of a function: $\int \tan^2 x\,dx = \frac{\tan^3 x}{3} + c$`,
      remediation: t`The power rule $\int x^n\,dx = \frac{x^{n+1}}{n+1} + c$ is for $x^n$ only. Rewrite the power of a function as a sum of standard forms first.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Integrating the parts of a product or quotient separately: $\int \cos x\cdot\cos x\,dx = \sin x\cdot\sin x + c$`,
      remediation: "An integral splits over sums, never over products or quotients. Expand, divide out or use an identity until the integrand is a sum.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: t`Squaring a bracket term by term: $(\tan x + \cot x)^2 = \tan^2 x + \cot^2 x$`,
      remediation: t`$(a + b)^2 = a^2 + 2ab + b^2$: keep the middle term $2ab$ when you expand.`,
      fallback: { kind: "ext", topic: "expanding brackets" },
    },
    {
      id: "C02-M4",
      mistake: t`Using an identity with the wrong sign: $\cos^2 x = \frac{1 - \cos 2x}{2}$, or $\tan^2 x = \sec^2 x + 1$`,
      remediation: t`$\sin^2 x = \frac{1 - \cos 2x}{2}$, $\cos^2 x = \frac{1 + \cos 2x}{2}$ and $\tan^2 x = \sec^2 x - 1$. Test a sign at $x = 0$.`,
      fallback: { kind: "ext", topic: "trigonometric identities" },
    },
    {
      id: "C02-M5",
      mistake: t`Taking a factor that holds $x$ outside the integral like a constant: $\int \frac{x}{x + 2}\,dx = x\log|x + 2| + c$`,
      remediation: "Only constants come out of an integral. Divide out or expand first, so that every term is a standard form.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M6",
      mistake: t`Dropping the $\frac{1}{a}$ when integrating a function of $ax + b$: $\int \cos 2x\,dx = \sin 2x + c$`,
      remediation: t`$\int f(ax + b)\,dx = \frac{1}{a}F(ax + b) + c$, so $\int \cos 2x\,dx = \frac{\sin 2x}{2} + c$. Differentiate to check: the chain rule brings the $a$ back.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C02-M1 needs a power of a function, C02-M2 and C02-M5 a product or quotient, C02-M3 a squared bracket, C02-M4 a squared sine, cosine, tangent or cotangent, and C02-M6 a term in ax + b with a not 1: draw a diagnosing item of that shape.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.1 III (viii)" },
      stem: t`$\int \cos^2 x\, dx = ?$`,
      verify: { kind: "value", inputs: { f: "cos(x)**2", u: "cos(x)", v: "cos(x)", r: "1/2 + cos(2*x)/2" }, params: { op: "prod" } },
      options: [
        { key: "A", text: t`$\dfrac{x}{2} + \dfrac{\sin 2x}{4} + c$`, correct: true, value: "x/2 + sin(2*x)/4" },
        { key: "B", text: t`$\sin^2 x + c$`, correct: false, misconceptionId: "C02-M2", value: "sin(x)**2" },
        { key: "C", text: t`$\dfrac{x}{2} - \dfrac{\sin 2x}{4} + c$`, correct: false, misconceptionId: "C02-M4", value: "x/2 - sin(2*x)/4" },
        { key: "D", text: t`$\dfrac{x}{2} + \dfrac{\sin 2x}{2} + c$`, correct: false, misconceptionId: "C02-M6", value: "x/2 + sin(2*x)/2" },
      ],
      solution: {
        steps: [
          t`$\cos^2 x$ is not a standard form: use $\cos^2 x = \frac{1 + \cos 2x}{2}$, plus for cosine.`,
          t`$\int \frac{1 + \cos 2x}{2}\,dx$ $= \frac{x}{2} + \frac{1}{2}\cdot\frac{\sin 2x}{2}$.`,
          t`So $\int \cos^2 x\,dx = \frac{x}{2} + \frac{\sin 2x}{4} + c$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/3.1 SolvedEx.3" },
      stem: t`For $0 < x < \dfrac{\pi}{2}$, $\int (\tan x + \cot x)^2\, dx = ?$`,
      verify: { kind: "value", inputs: { f: "(tan(x) + cot(x))**2", g: "tan(x) + cot(x)", n: "2", a: "tan(x)", b: "cot(x)" } },
      options: [
        { key: "A", text: t`$\dfrac{(\tan x + \cot x)^3}{3} + c$`, correct: false, misconceptionId: "C02-M1", value: "(tan(x) + cot(x))**3/3" },
        { key: "B", text: t`$\tan x - \cot x - 2x + c$`, correct: false, misconceptionId: "C02-M3", value: "-2*x + 2*tan(x) - 2/sin(2*x)" },
        { key: "C", text: t`$\tan x - \cot x + 4x + c$`, correct: false, misconceptionId: "C02-M4", value: "4*x + 2*tan(x) - 2/sin(2*x)" },
        { key: "D", text: t`$\tan x - \cot x + c$`, correct: true, value: "tan(x) - 1/tan(x)" },
      ],
      solution: {
        steps: [
          t`Expand with the middle term: $\tan^2 x + 2\tan x\cot x + \cot^2 x$.`,
          t`$\tan x\cot x = 1$, $\tan^2 x = \sec^2 x - 1$ and $\cot^2 x = \operatorname{cosec}^2 x - 1$.`,
          t`So the integrand is $\sec^2 x - 1 + 2$ $- 1 + \operatorname{cosec}^2 x$, which is $\sec^2 x + \operatorname{cosec}^2 x$.`,
          t`Integrate term by term: $\tan x - \cot x + c$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.1 III (ii)" },
      stem: t`For $x > -\dfrac{1}{2}$, $\int \dfrac{4x + 3}{2x + 1}\, dx = ?$`,
      verify: { kind: "value", inputs: { f: "(4*x + 3)/(2*x + 1)", u: "4*x + 3", v: "2*x + 1", r: "2 + 1/(2*x + 1)" }, params: { op: "quot" } },
      options: [
        { key: "A", text: t`$2x + \log|2x + 1| + c$`, correct: false, misconceptionId: "C02-M6", value: "2*x + log(2*x + 1)" },
        { key: "B", text: t`$2x + \dfrac{1}{2}\log|2x + 1| + c$`, correct: true, value: "2*x + log(2*x + 1)/2" },
        { key: "C", text: t`$\dfrac{2x^2 + 3x}{x^2 + x} + c$`, correct: false, misconceptionId: "C02-M2", value: "(2*x + 3)/(x + 1)" },
        { key: "D", text: t`$\dfrac{4x + 3}{2}\log|2x + 1| + c$`, correct: false, misconceptionId: "C02-M5", value: "(4*x + 3)*log(2*x + 1)/2" },
      ],
      solution: {
        steps: [
          t`Write the numerator in terms of the denominator: $4x + 3 = 2(2x + 1) + 1$.`,
          t`So $\frac{4x + 3}{2x + 1} = 2 + \frac{1}{2x + 1}$.`,
          t`$\int \frac{dx}{2x + 1} = \frac{1}{2}\log|2x + 1|$, so the answer is $2x + \frac{1}{2}\log|2x + 1|$ $+ c$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc II Q.1" },
      stem: t`For $x > 0$, $\int (x - 2)^2\sqrt{x}\, dx = ?$`,
      verify: { kind: "value", inputs: { f: "(x - 2)**2*sqrt(x)", u: "sqrt(x)", v: "(x - 2)**2", a: "x", b: "-2", w: "sqrt(x)", iv: "(x - 2)**3/3" }, params: { op: "prod" } },
      options: [
        { key: "A", text: t`$\dfrac{\sqrt{x}\,(x - 2)^3}{3} + c$`, correct: false, misconceptionId: "C02-M5", value: "sqrt(x)*(x - 2)**3/3" },
        { key: "B", text: t`$\dfrac{2}{7}x^{7/2} - \dfrac{8}{5}x^{5/2} + \dfrac{8}{3}x^{3/2} + c$`, correct: true, value: "2*x**(3/2)*(15*x**2 - 84*x + 140)/105" },
        { key: "C", text: t`$\dfrac{2}{9}x^{3/2}(x - 2)^3 + c$`, correct: false, misconceptionId: "C02-M2", value: "2*x**(3/2)*(x - 2)**3/9" },
        { key: "D", text: t`$\dfrac{2}{7}x^{7/2} + \dfrac{8}{3}x^{3/2} + c$`, correct: false, misconceptionId: "C02-M3", value: "2*x**(3/2)*(3*x**2 + 28)/21" },
      ],
      solution: {
        steps: [
          t`Expand: $(x - 2)^2\sqrt{x} = (x^2 - 4x + 4)x^{1/2}$.`,
          t`$= x^{5/2} - 4x^{3/2} + 4x^{1/2}$.`,
          t`Power rule term by term: $\frac{2}{7}x^{7/2} - \frac{8}{5}x^{5/2}$ $+ \frac{8}{3}x^{3/2} + c$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc I Q.20" },
      stem: t`$\int \dfrac{e^{2x} + e^{-2x}}{e^x}\, dx = ?$`,
      verify: { kind: "value", inputs: { f: "(exp(2*x) + exp(-2*x))/exp(x)", u: "exp(2*x) + exp(-2*x)", v: "exp(x)", r: "exp(x) + exp(-3*x)" }, params: { op: "quot" } },
      options: [
        { key: "A", text: t`$e^x + e^{-3x} + c$`, correct: false, misconceptionId: "C02-M6", value: "exp(x) + exp(-3*x)" },
        { key: "B", text: t`$e^x - \dfrac{e^{-3x}}{3} + c$`, correct: true, value: "exp(x) - exp(-3*x)/3" },
        { key: "C", text: t`$\dfrac{e^{2x} - e^{-2x}}{2e^x} + c$`, correct: false, misconceptionId: "C02-M2", value: "exp(-x)*sinh(2*x)" },
        { key: "D", text: t`$-(e^{2x} + e^{-2x})\,e^{-x} + c$`, correct: false, misconceptionId: "C02-M5", value: "-exp(x) - exp(-3*x)" },
      ],
      solution: {
        steps: [
          t`Divide each term by $e^x$: $\frac{e^{2x}}{e^x} + \frac{e^{-2x}}{e^x}$ $= e^x + e^{-3x}$.`,
          t`$\int e^{-3x}\,dx = \frac{e^{-3x}}{-3}$: divide by $a = -3$.`,
          t`So the integral is $e^x - \frac{e^{-3x}}{3} + c$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.1 II (i)" },
      stem: t`For $0 < x < \dfrac{\pi}{2}$, $\int \tan^2 x\, dx = ?$`,
      verify: { kind: "value", inputs: { f: "tan(x)**2", g: "tan(x)", n: "2", u: "tan(x)", v: "tan(x)" }, params: { op: "prod" } },
      options: [
        { key: "A", text: t`$\tan x - x + c$`, correct: true, value: "-x + tan(x)" },
        { key: "B", text: t`$\dfrac{\tan^3 x}{3} + c$`, correct: false, misconceptionId: "C02-M1", value: "tan(x)**3/3" },
        { key: "C", text: t`$(\log \sec x)^2 + c$`, correct: false, misconceptionId: "C02-M2", value: "log(cos(x))**2" },
        { key: "D", text: t`$\tan x + x + c$`, correct: false, misconceptionId: "C02-M4", value: "x + tan(x)" },
      ],
      solution: {
        steps: [
          t`$\tan^2 x$ is not a standard form: use $\tan^2 x = \sec^2 x - 1$.`,
          t`$\int (\sec^2 x - 1)\,dx = \tan x - x + c$.`,
        ],
      },
    },
  ],
};
