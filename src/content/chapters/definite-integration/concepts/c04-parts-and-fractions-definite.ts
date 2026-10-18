import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`For $\int_1^e \log x\,dx$, take $u = \log x$, $v = 1$. The first term of parts is $\left[x\log x\right]_1^e = e$. **Is the answer $e$?**`,
    reveal: t`No. The second integral is still to be subtracted, over the same limits: $\int_1^e 1\,dx = e - 1$. So $\int_1^e \log x\,dx = e - (e - 1) = 1$.`,
  },
  explanation: {
    intuition: [
      t`Integration by parts works on a definite integral just as on an indefinite one.`,
      t`The one change: **both** terms of the formula take the limits $a$ and $b$.`,
      t`The first term, $u\int v\,dx$, is worked out at $b$ and at $a$, and the two are subtracted.`,
      t`The second integral is still subtracted, and it runs over the same $a$ to $b$.`,
      t`A fraction with a factorised denominator is first split into simpler fractions, one per factor.`,
      t`Each simple fraction integrates to a log; put in both limits, since the log at the lower limit is rarely $0$.`,
    ],
    formal: [
      {
        title: "Parts with limits",
        points: [
          t`For a product $u\,v$ on $[a, b]$: $\int_a^b u\,v\,dx = \left[u\int v\,dx\right]_a^b$ $- \int_a^b \left(u'\int v\,dx\right)dx$.`,
          t`Choose $u$, the factor to differentiate, by LIATE, exactly as for an indefinite integral.`,
          t`The **boundary term** $\left[u\int v\,dx\right]_a^b$ is $u\int v\,dx$ at $b$ minus its value at $a$.`,
          t`The second integral keeps the same limits, $a$ and $b$.`,
          t`The minus in front of the second integral stays: it comes from the product rule.`,
          t`Or find the whole antiderivative $F(x)$ first, then work out $F(b) - F(a)$.`,
        ],
      },
      {
        title: "Work out the boundary term",
        points: [
          t`Take $\int_0^\pi x\cos x\,dx$: $u = x$, $v = \cos x$, so $\int v\,dx = \sin x$.`,
          t`Boundary term: $\left[x\sin x\right]_0^\pi$ $= \pi\sin\pi - 0 = 0$.`,
          t`Second integral: $\int_0^\pi \sin x\,dx$ $= \left[-\cos x\right]_0^\pi = 2$.`,
          t`So $\int_0^\pi x\cos x\,dx = 0 - 2 = -2$.`,
          t`The boundary term was $0$ only because $\sin\pi = \sin 0 = 0$: always work it out.`,
        ],
      },
      {
        title: "Split rational functions first",
        points: [
          t`A **rational function** is one polynomial divided by another, like $\frac{1}{x^2 + 5x + 4}$.`,
          t`Factorise the denominator: $x^2 + 5x + 4 = (x + 1)(x + 4)$.`,
          t`**Partial fractions** split it: $\frac{1}{(x + 1)(x + 4)}$ $= \frac{A}{x + 1} + \frac{B}{x + 4}$.`,
          t`Clear the denominators: $1 = A(x + 4) + B(x + 1)$; put $x = -1$ to get $A = \frac{1}{3}$.`,
          t`Put $x = -4$ to get $B = -\frac{1}{3}$.`,
          t`So the split carries a factor: $\frac{1}{3}\left(\frac{1}{x + 1} - \frac{1}{x + 4}\right)$, not just the difference.`,
        ],
      },
      {
        title: "Then put in the limits",
        points: [
          t`$\int_0^2 \frac{dx}{x^2 + 5x + 4}$ $= \frac{1}{3}\left[\log\frac{x + 1}{x + 4}\right]_0^2$.`,
          t`At $x = 2$ the log is $\log\frac{3}{6} = \log\frac{1}{2}$.`,
          t`At $x = 0$ it is $\log\frac{1}{4}$, which is not $0$: keep it.`,
          t`So the value is $\frac{1}{3}\left(\log\frac{1}{2} - \log\frac{1}{4}\right)$ $= \frac{1}{3}\log 2$.`,
          t`Not $\log(x^2 + 5x + 4)$: that needs the derivative $2x + 5$ on top, not $1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\int_0^{\pi/4} x\sec^2 x\,dx$.`,
      steps: [
        t`LIATE: algebraic before trigonometric, so $u = x$, $v = \sec^2 x$, and $\int v\,dx = \tan x$.`,
        t`$\int_0^{\pi/4} x\sec^2 x\,dx = \left[x\tan x\right]_0^{\pi/4}$ $- \int_0^{\pi/4} \tan x\,dx$.`,
        t`Boundary term: $\frac{\pi}{4}\tan\frac{\pi}{4} - 0 = \frac{\pi}{4}$.`,
        t`Second integral: $\left[\log\sec x\right]_0^{\pi/4}$ $= \log\sqrt{2} - \log 1 = \frac{1}{2}\log 2$.`,
      ],
      answer: t`$\int_0^{\pi/4} x\sec^2 x\,dx = \frac{\pi}{4} - \frac{1}{2}\log 2$`,
    },
    visualSpec: t`Slide the limits $a$ and $b$ on $\int_a^b x\cos x\,dx$; bars show the boundary term and the second integral, and their difference matches the signed area under the curve.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Integrates each factor over $[a, b]$ and multiplies: $\int_a^b u\,v\,dx = \int_a^b u\,dx \cdot \int_a^b v\,dx$`,
      remediation: t`The integral of a product is not the product of the integrals. Use parts: $\int_a^b u\,v\,dx = \left[u\int v\,dx\right]_a^b - \int_a^b \left(u'\int v\,dx\right)dx$.`,
      fallback: { kind: "ext", topic: "integration by parts" },
    },
    {
      id: "C04-M2",
      mistake: t`Drops the boundary term $\left[u\int v\,dx\right]_a^b$, as if it were always $0$`,
      remediation: t`The first term takes the limits too: work out $u\int v\,dx$ at $b$ and at $a$ and subtract. It is $0$ only when the two values are equal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Adds the second integral instead of subtracting it",
      remediation: t`The second integral is subtracted: $\int_a^b u\,v\,dx = \left[u\int v\,dx\right]_a^b - \int_a^b \left(u'\int v\,dx\right)dx$, the minus coming from the product rule.`,
      fallback: { kind: "ext", topic: "integration by parts" },
    },
    {
      id: "C04-M4",
      mistake: t`Splits $\frac{1}{(x + p)(x + q)}$ as $\frac{1}{x + p} - \frac{1}{x + q}$, leaving out the factor $\frac{1}{q - p}$`,
      remediation: t`$\frac{1}{x + p} - \frac{1}{x + q} = \frac{q - p}{(x + p)(x + q)}$, so divide by $q - p$. Find $A$ and $B$ by putting $x = -p$ and $x = -q$.`,
      fallback: { kind: "ext", topic: "partial fractions" },
    },
    {
      id: "C04-M5",
      mistake: t`Puts in only the upper limit, taking the value at the lower limit to be $0$`,
      remediation: t`$\left[F(x)\right]_a^b = F(b) - F(a)$, and $F(a)$ is often not $0$: $\log 1 = 0$, but $\log\frac{1}{4}$ and $-\frac{1}{x}$ at $x = 1$ are not.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M6",
      mistake: t`Integrates $\frac{1}{(x + p)(x + q)}$ as $\log\left[(x + p)(x + q)\right]$`,
      remediation: t`$\int \frac{f'(x)}{f(x)}\,dx = \log f(x)$ needs the derivative of the denominator on top. With $1$ on top, split into partial fractions first.`,
      fallback: { kind: "ext", topic: "integral of f'(x)/f(x)" },
    },
  ],
  engineNotes: [
    t`C04-M2 gives the key when the boundary term is $0$ (as for $\int_0^\pi x\cos x\,dx$), and C04-M5 gives the key when the antiderivative is $0$ at the lower limit (as for $\int_0^1 x\tan^{-1}x\,dx$); draw diagnosing items where they differ.`,
    t`C04-M4 gives the key when $q - p = 1$ (the book's $\int_2^3 \frac{dx}{x^2 + 5x + 6}$); use factors whose constants differ by more than 1.`,
    t`C04-M3 and C04-M5 agree on $\int_1^2 \frac{\log x}{x^2}\,dx$, so C04-Q3 lists only C04-M5.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (13)" },
      stem: t`$\int_0^{\pi/2} x\cos x\,dx =$`,
      verify: { kind: "value", inputs: { u: "x", v: "cos(x)", a: "0", b: "pi/2" }, params: { mode: "parts" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C04-M2", value: "-1" },
        { key: "B", text: t`$\frac{\pi}{2} + 1$`, correct: false, misconceptionId: "C04-M3", value: "1 + pi/2" },
        { key: "C", text: t`$\frac{\pi}{2} - 1$`, correct: true, value: "-1 + pi/2" },
        { key: "D", text: t`$\frac{\pi^2}{8}$`, correct: false, misconceptionId: "C04-M1", value: "pi**2/8" },
      ],
      solution: {
        steps: [
          t`Algebraic before trigonometric: $u = x$, $v = \cos x$, so $\int v\,dx = \sin x$.`,
          t`Boundary term: $\left[x\sin x\right]_0^{\pi/2} = \frac{\pi}{2}$.`,
          t`Second integral: $\int_0^{\pi/2} \sin x\,dx$ $= \left[-\cos x\right]_0^{\pi/2} = 1$.`,
          t`So the value is $\frac{\pi}{2} - 1$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (14)" },
      stem: t`$\int_0^1 x\tan^{-1}x\,dx =$`,
      verify: { kind: "value", inputs: { u: "atan(x)", v: "x", a: "0", b: "1" }, params: { mode: "parts" } },
      options: [
        { key: "A", text: t`$\frac{\pi}{8} - \frac{1}{4}\log 2$`, correct: false, misconceptionId: "C04-M1", value: "-log(2)/4 + pi/8" },
        { key: "B", text: t`$\frac{\pi}{8} - \frac{1}{2}$`, correct: false, misconceptionId: "C04-M2", value: "-1/2 + pi/8" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M3", value: "1/2" },
        { key: "D", text: t`$\frac{\pi}{4} - \frac{1}{2}$`, correct: true, value: "-1/2 + pi/4" },
      ],
      solution: {
        steps: [
          t`Inverse trig before algebraic: $u = \tan^{-1}x$, $v = x$, so $\int v\,dx = \frac{x^2}{2}$.`,
          t`Boundary term: $\left[\frac{x^2}{2}\tan^{-1}x\right]_0^1 = \frac{\pi}{8}$.`,
          t`Second integral: $\frac{1}{2}\int_0^1 \frac{x^2}{1 + x^2}\,dx$ $= \frac{1}{2}\left[x - \tan^{-1}x\right]_0^1$ $= \frac{1}{2} - \frac{\pi}{8}$.`,
          t`So the value is $\frac{\pi}{8} - \left(\frac{1}{2} - \frac{\pi}{8}\right)$ $= \frac{\pi}{4} - \frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/4.2 SolvedEx.5" },
      stem: t`$\int_1^2 \frac{\log x}{x^2}\,dx =$`,
      verify: { kind: "value", inputs: { u: "log(x)", v: "1/x**2", a: "1", b: "2" }, params: { mode: "parts" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M2", value: "1/2" },
        { key: "B", text: t`$-\frac{1}{2} - \frac{1}{2}\log 2$`, correct: false, misconceptionId: "C04-M5", value: "-1/2 - log(2)/2" },
        { key: "C", text: t`$\frac{1}{2} - \frac{1}{2}\log 2$`, correct: true, value: "1/2 - log(2)/2" },
        { key: "D", text: t`$\log 2 - \frac{1}{2}$`, correct: false, misconceptionId: "C04-M1", value: "-1/2 + log(2)" },
      ],
      solution: {
        steps: [
          t`Log before algebraic: $u = \log x$, $v = \frac{1}{x^2}$, so $\int v\,dx = -\frac{1}{x}$.`,
          t`Boundary term: $\left[-\frac{\log x}{x}\right]_1^2$ $= -\frac{1}{2}\log 2 - 0$.`,
          t`Minus the second integral: $-\int_1^2 \frac{1}{x}\left(-\frac{1}{x}\right)dx$ $= \int_1^2 \frac{dx}{x^2} = \frac{1}{2}$.`,
          t`So the value is $\frac{1}{2} - \frac{1}{2}\log 2$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (2)" },
      stem: t`$\int_1^3 \frac{dx}{x^2 + 4x + 3} =$`,
      verify: { kind: "value", inputs: { k: "1", p: "1", q: "3", a: "1", b: "3" }, params: { mode: "pf" } },
      options: [
        { key: "A", text: t`$\log\frac{4}{3}$`, correct: false, misconceptionId: "C04-M4", value: "log(4/3)" },
        { key: "B", text: t`$\frac{1}{2}\log\frac{2}{3}$`, correct: false, misconceptionId: "C04-M5", value: "-log(6)/2 + log(2)" },
        { key: "C", text: t`$\log 3$`, correct: false, misconceptionId: "C04-M6", value: "log(3)" },
        { key: "D", text: t`$\frac{1}{2}\log\frac{4}{3}$`, correct: true, value: "-log(6)/2 + 3*log(2)/2" },
      ],
      solution: {
        steps: [
          t`$x^2 + 4x + 3 = (x + 1)(x + 3)$, and $\frac{1}{(x + 1)(x + 3)}$ $= \frac{1}{2}\left(\frac{1}{x + 1} - \frac{1}{x + 3}\right)$.`,
          t`So the integral is $\frac{1}{2}\left[\log\frac{x + 1}{x + 3}\right]_1^3$.`,
          t`$= \frac{1}{2}\left(\log\frac{4}{6} - \log\frac{2}{4}\right)$ $= \frac{1}{2}\log\frac{4}{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (2)" },
      stem: t`$\int_1^2 \frac{dx}{x^2 + 3x} =$`,
      verify: { kind: "value", inputs: { k: "1", p: "0", q: "3", a: "1", b: "2" }, params: { mode: "pf" } },
      options: [
        { key: "A", text: t`$\log\frac{5}{2}$`, correct: false, misconceptionId: "C04-M6", value: "log(5/2)" },
        { key: "B", text: t`$\frac{1}{3}\log\frac{8}{5}$`, correct: true, value: "-log(5)/3 + log(2)" },
        { key: "C", text: t`$\log\frac{8}{5}$`, correct: false, misconceptionId: "C04-M4", value: "log(8/5)" },
        { key: "D", text: t`$\frac{1}{3}\log\frac{2}{5}$`, correct: false, misconceptionId: "C04-M5", value: "-log(5)/3 + log(2)/3" },
      ],
      solution: {
        steps: [
          t`$x^2 + 3x = x(x + 3)$, and $\frac{1}{x(x + 3)}$ $= \frac{1}{3}\left(\frac{1}{x} - \frac{1}{x + 3}\right)$.`,
          t`So the integral is $\frac{1}{3}\left[\log\frac{x}{x + 3}\right]_1^2$.`,
          t`$= \frac{1}{3}\left(\log\frac{2}{5} - \log\frac{1}{4}\right)$ $= \frac{1}{3}\log\frac{8}{5}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 I (15)" },
      stem: t`$\int_0^1 x e^{-x}\,dx =$`,
      verify: { kind: "value", inputs: { u: "x", v: "exp(-x)", a: "0", b: "1" }, params: { mode: "parts" } },
      options: [
        { key: "A", text: t`$1 - \frac{2}{e}$`, correct: true, value: "1 - 2*exp(-1)" },
        { key: "B", text: t`$1 - \frac{1}{e}$`, correct: false, misconceptionId: "C04-M2", value: "1 - exp(-1)" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C04-M3", value: "-1" },
        { key: "D", text: t`$-\frac{2}{e}$`, correct: false, misconceptionId: "C04-M5", value: "-2*exp(-1)" },
      ],
      solution: {
        steps: [
          t`Algebraic before exponential: $u = x$, $v = e^{-x}$, so $\int v\,dx = -e^{-x}$.`,
          t`Boundary term: $\left[-xe^{-x}\right]_0^1 = -\frac{1}{e}$.`,
          t`Minus the second integral: $-\int_0^1 \left(-e^{-x}\right)dx$ $= \left[-e^{-x}\right]_0^1 = 1 - \frac{1}{e}$.`,
          t`So the value is $-\frac{1}{e} + 1 - \frac{1}{e} = 1 - \frac{2}{e}$.`,
        ],
      },
    },
  ],
};
