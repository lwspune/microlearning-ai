import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`$F(x) = \sin x$ and $G(x) = \sin x + 100$ both have derivative $\cos x$. **Do $F\left(\frac{\pi}{2}\right) - F(0)$ and $G\left(\frac{\pi}{2}\right) - G(0)$ agree?**`,
    reveal: t`Yes: $1 - 0 = 1$ and $101 - 100 = 1$. The constant cancels, so every antiderivative gives the same $\int_0^{\pi/2}\cos x\,dx = 1$.`,
  },
  explanation: {
    intuition: [
      t`A **definite integral** $\int_a^b f(x)\,dx$ is a number; $a$ is the **lower limit**, $b$ the **upper limit**.`,
      t`An **antiderivative** of $f$ is any function $F$ with $F'(x) = f(x)$.`,
      t`The fundamental theorem: for $f$ continuous on $[a, b]$, $\int_a^b f(x)\,dx = F(b) - F(a)$.`,
      t`The bracket $\left[F(x)\right]_a^b$ is shorthand for $F(b) - F(a)$.`,
      t`The $+c$ of $F$ cancels in the subtraction, so leave it out.`,
      t`Always upper minus lower, and put the limits into $F$, never into $f$.`,
    ],
    formal: [
      {
        title: "Evaluating in four steps",
        points: [
          t`Step 1: find an antiderivative $F$ with the standard formulae.`,
          t`Step 2: write $\left[F(x)\right]_a^b$, keeping the limits on the bracket.`,
          t`Step 3: work out $F(b)$ and $F(a)$ as two separate numbers.`,
          t`Step 4: subtract, upper value minus lower value: $F(b) - F(a)$.`,
          t`Example: $\int_1^2 3x^2\,dx = \left[x^3\right]_1^2$ $= 8 - 1 = 7$.`,
        ],
      },
      {
        title: "The lower limit counts",
        points: [
          t`$F(a)$ is often not $0$, even when $a = 0$.`,
          t`$\cos 0 = 1$, $\sec 0 = 1$ and $e^0 = 1$; only terms like $\sin 0$, $\tan 0$ and $0^n$ vanish.`,
          t`Example: $\int_0^{\pi}\sin x\,dx = \left[-\cos x\right]_0^{\pi}$.`,
          t`That is $(-\cos\pi) - (-\cos 0)$ $= 1 + 1 = 2$, not $1$.`,
          t`Keep $F(a)$ in brackets, so the minus sign reaches every one of its terms.`,
        ],
      },
      {
        title: "Rewrite before you integrate",
        points: [
          t`No standard formula fits a product, a quotient or a root of a sum.`,
          t`Rewrite such an integrand as a sum of standard terms first.`,
          t`Divide out: $\frac{x^2 + 4}{x^2} = 1 + 4x^{-2}$.`,
          t`Use an identity: $\cos^2 x = \frac{1 + \cos 2x}{2}$, or rationalise a difference of roots.`,
          t`For a function of $kx$, divide by $k$: $\int \cos 3x\,dx = \frac{\sin 3x}{3}$.`,
          t`So $\int_0^{\pi/6}\cos 3x\,dx$ $= \frac{\sin(\pi/2)}{3} - 0 = \frac{1}{3}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\int_0^1 \dfrac{dx}{\sqrt{1 + x} - \sqrt{x}} = \dfrac{k}{3}$, find $k$.`,
      steps: [
        t`Rationalise: $(1 + x) - x = 1$, so the integrand is $\sqrt{1 + x} + \sqrt{x}$.`,
        t`Antiderivative: $F(x) = \frac{2}{3}(1 + x)^{3/2} + \frac{2}{3}x^{3/2}$.`,
        t`Upper limit: $F(1) = \frac{2}{3}\cdot 2\sqrt{2} + \frac{2}{3}$ $= \frac{4\sqrt{2} + 2}{3}$.`,
        t`Lower limit: $F(0) = \frac{2}{3}\cdot 1 + 0 = \frac{2}{3}$, not $0$.`,
        t`Subtract: $\frac{4\sqrt{2} + 2}{3} - \frac{2}{3}$ $= \frac{4\sqrt{2}}{3}$, so $k = 4\sqrt{2}$.`,
      ],
      answer: t`$k = 4\sqrt{2}$`,
    },
    visualSpec: t`A graph of an antiderivative $F$ with draggable markers at $a$ and $b$: the rise $F(b) - F(a)$ updates beside the shaded area under $f$, and shifting $F$ up by $c$ leaves the rise unchanged.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Subtracting the wrong way round: $\int_a^b f(x)\,dx = F(a) - F(b)$`,
      remediation: t`The theorem is upper minus lower: $\int_a^b f(x)\,dx = F(b) - F(a)$. Work out $F$ at the upper limit first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Putting the limits into the integrand: $\int_a^b f(x)\,dx = f(b) - f(a)$`,
      remediation: t`The limits go into an antiderivative $F$, not into $f$. Integrate first, then work out $F(b) - F(a)$.`,
      fallback: { kind: "ext", topic: "indefinite integration" },
    },
    {
      id: "C02-M3",
      mistake: t`Assuming the lower limit gives $0$ and keeping only $F(b)$`,
      remediation: t`Work out $F(a)$ every time: $\cos 0 = 1$, $\sec 0 = 1$ and $e^0 = 1$, so $F(0)$ is often not $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Dropping the bracket round $F(a)$, so the minus sign changes only its first term`,
      remediation: t`Write $F(b) - \left(F(a)\right)$ with brackets: the minus sign changes the sign of every term of $F(a)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Dropping the $\frac{1}{k}$ when integrating a function of $kx$: $\int \cos 7x\,dx = \sin 7x$`,
      remediation: t`$\int \cos kx\,dx = \frac{\sin kx}{k}$: divide by $k$. Differentiate to check: the chain rule brings the $k$ back.`,
      fallback: { kind: "ext", topic: "indefinite integration" },
    },
  ],
  engineNotes: [
    "C02-M3 needs F(a) not 0, C02-M4 needs the terms of F after the first to be nonzero at the lower limit, and C02-M5 a term in kx with k not 1: draw a diagnosing item of that shape.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/4.2 Ex.1" },
      stem: t`$\int_{2}^{5} (x^2 - x)\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "x**2 - x", F1: "x**3/3", F2: "-x**2/2", a: "2", b: "5" } },
      options: [
        { key: "A", text: t`$\frac{57}{2}$`, correct: true, value: "57/2" },
        { key: "B", text: t`$18$`, correct: false, misconceptionId: "C02-M2", value: "18" },
        { key: "C", text: t`$\frac{175}{6}$`, correct: false, misconceptionId: "C02-M3", value: "175/6" },
        { key: "D", text: t`$\frac{49}{2}$`, correct: false, misconceptionId: "C02-M4", value: "49/2" },
      ],
      solution: {
        steps: [
          t`An antiderivative is $F(x) = \frac{x^3}{3} - \frac{x^2}{2}$.`,
          t`$F(5) = \frac{125}{3} - \frac{25}{2}$ $= \frac{175}{6}$; $F(2) = \frac{8}{3} - 2 = \frac{2}{3}$.`,
          t`So the integral is $\frac{175}{6} - \frac{4}{6}$ $= \frac{171}{6} = \frac{57}{2}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (1)" },
      stem: t`$\int_{1}^{9} \dfrac{x + 1}{\sqrt{x}}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "(x + 1)/sqrt(x)", r: "sqrt(x) + 1/sqrt(x)", F1: "2*x**(3/2)/3", F2: "2*sqrt(x)", a: "1", b: "9" } },
      options: [
        { key: "A", text: t`$- \frac{64}{3}$`, correct: false, misconceptionId: "C02-M1", value: "-64/3" },
        { key: "B", text: t`$24$`, correct: false, misconceptionId: "C02-M3", value: "24" },
        { key: "C", text: t`$\frac{76}{3}$`, correct: false, misconceptionId: "C02-M4", value: "76/3" },
        { key: "D", text: t`$\frac{64}{3}$`, correct: true, value: "64/3" },
      ],
      solution: {
        steps: [
          t`Divide by $\sqrt{x}$: $\frac{x + 1}{\sqrt{x}} = x^{1/2} + x^{-1/2}$.`,
          t`An antiderivative is $F(x) = \frac{2}{3}x^{3/2} + 2\sqrt{x}$.`,
          t`$F(9) = 18 + 6 = 24$; $F(1) = \frac{2}{3} + 2 = \frac{8}{3}$.`,
          t`So the integral is $24 - \frac{8}{3} = \frac{64}{3}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (8)" },
      stem: t`$\int_{0}^{\pi/4} \sqrt{1 + \sin 2x}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "sqrt(1 + sin(2*x))", r: "sin(x) + cos(x)", F1: "sin(x)", F2: "-cos(x)", a: "0", b: "pi/4" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C02-M3", value: "0" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C02-M1", value: "-1" },
        { key: "D", text: t`$\sqrt{2} - 1$`, correct: false, misconceptionId: "C02-M2", value: "-1 + sqrt(2)" },
      ],
      solution: {
        steps: [
          t`$1 + \sin 2x = (\sin x + \cos x)^2$, and $\sin x + \cos x > 0$ on $\left[0, \frac{\pi}{4}\right]$.`,
          t`So the integrand is $\sin x + \cos x$, and $F(x) = \sin x - \cos x$.`,
          t`$F\left(\frac{\pi}{4}\right) = 0$ and $F(0) = 0 - 1 = -1$.`,
          t`So the integral is $0 - (-1) = 1$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (4)" },
      stem: t`$\int_{-\pi/4}^{\pi/4} \dfrac{1}{1 - \sin x}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "1/(1 - sin(x))", r: "sec(x)**2 + sec(x)*tan(x)", F1: "tan(x)", F2: "sec(x)", a: "-pi/4", b: "pi/4" } },
      options: [
        { key: "A", text: t`$2 + 2 \sqrt{2}$`, correct: false, misconceptionId: "C02-M4", value: "2 + 2*sqrt(2)" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$2 \sqrt{2}$`, correct: false, misconceptionId: "C02-M2", value: "2*sqrt(2)" },
        { key: "D", text: t`$1 + \sqrt{2}$`, correct: false, misconceptionId: "C02-M3", value: "1 + sqrt(2)" },
      ],
      solution: {
        steps: [
          t`Multiply above and below by $1 + \sin x$: $\frac{1 + \sin x}{\cos^2 x}$ $= \sec^2 x + \sec x\tan x$.`,
          t`An antiderivative is $F(x) = \tan x + \sec x$.`,
          t`$F\left(\frac{\pi}{4}\right) = 1 + \sqrt{2}$; $F\left(-\frac{\pi}{4}\right) = -1 + \sqrt{2}$.`,
          t`So the integral is $(1 + \sqrt{2}) - (\sqrt{2} - 1)$ $= 2$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (7)" },
      stem: t`$\int_{0}^{\pi/4} \sin 4x\,\sin 3x\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "sin(4*x)*sin(3*x)", r: "cos(x)/2 - cos(7*x)/2", F1: "sin(x)/2", F2: "-sin(7*x)/14", a: "0", b: "pi/4" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{2}}{2}$`, correct: false, misconceptionId: "C02-M5", value: "sqrt(2)/2" },
        { key: "B", text: t`$\frac{2 \sqrt{2}}{7}$`, correct: true, value: "2*sqrt(2)/7" },
        { key: "C", text: t`$- \frac{2 \sqrt{2}}{7}$`, correct: false, misconceptionId: "C02-M1", value: "-2*sqrt(2)/7" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C02-M2", value: "0" },
      ],
      solution: {
        steps: [
          t`$2\sin A\sin B$ $= \cos(A - B) - \cos(A + B)$, so the integrand is $\frac{\cos x - \cos 7x}{2}$.`,
          t`Divide by $7$ for $\cos 7x$: $F(x) = \frac{1}{2}\left(\sin x - \frac{\sin 7x}{7}\right)$.`,
          t`$\sin\frac{7\pi}{4} = -\frac{1}{\sqrt{2}}$, so $F\left(\frac{\pi}{4}\right) = \frac{1}{2}\cdot\frac{8}{7\sqrt{2}}$ $= \frac{2\sqrt{2}}{7}$.`,
          t`$F(0) = 0$, so the integral is $\frac{2\sqrt{2}}{7}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (9)" },
      stem: t`$\int_{0}^{\pi/4} \sin^4 x\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "sin(x)**4", r: "3/8 - cos(2*x)/2 + cos(4*x)/8", F1: "3*x/8", F2: "-sin(2*x)/4 + sin(4*x)/32", a: "0", b: "pi/4" } },
      options: [
        { key: "A", text: t`$\frac{3\pi}{32} - \frac{1}{4}$`, correct: true, value: "-1/4 + 3*pi/32" },
        { key: "B", text: t`$\frac{1}{4} - \frac{3\pi}{32}$`, correct: false, misconceptionId: "C02-M1", value: "1/4 - 3*pi/32" },
        { key: "C", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C02-M2", value: "1/4" },
        { key: "D", text: t`$\frac{3\pi}{32} - \frac{1}{2}$`, correct: false, misconceptionId: "C02-M5", value: "-1/2 + 3*pi/32" },
      ],
      solution: {
        steps: [
          t`$\sin^4 x = \left(\frac{1 - \cos 2x}{2}\right)^2$ $= \frac{3 - 4\cos 2x + \cos 4x}{8}$.`,
          t`Divide by $2$ and $4$: $F(x) = \frac{3x}{8} - \frac{\sin 2x}{4}$ $+ \frac{\sin 4x}{32}$.`,
          t`$F\left(\frac{\pi}{4}\right) = \frac{3\pi}{32} - \frac{1}{4} + 0$, and $F(0) = 0$.`,
          t`So the integral is $\frac{3\pi}{32} - \frac{1}{4}$.`,
        ],
      },
    },
  ],
};
