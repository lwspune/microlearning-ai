import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`For $y = x^{\sin x}$, the power rule gives $\sin x\cdot x^{\sin x - 1}$. The exponential rule gives $x^{\sin x}\log x\cdot\cos x$. **Which one is right?**`,
    reveal: t`Neither on its own. Take logs: $\log y = \sin x\log x$. The product rule gives two terms, and $\frac{dy}{dx}$ turns out to be the **sum** of both answers.`,
  },
  explanation: {
    intuition: [
      t`In $x^x$, the variable $x$ sits in both the **base** and the **index** (the power).`,
      t`The power rule needs a constant index; the exponential rule needs a constant base. Neither fits $x^x$.`,
      t`Logarithms bring the index down: $\log(x^x) = x\log x$, a plain product.`,
      t`They also turn products into sums and quotients into differences, which are easy to differentiate.`,
      t`So take $\log$ of both sides first, differentiate, then undo the $\log$ by multiplying by $y$.`,
      t`In this chapter, $\log$ means the natural logarithm, to base $e$.`,
    ],
    formal: [
      {
        title: "The three steps",
        points: [
          t`**Step 1:** take $\log$ of both sides of $y = f(x)$, and expand the right side with the laws of logarithms.`,
          t`**Step 2:** differentiate both sides with respect to $x$.`,
          t`The left side is $\log y$, a function of $y$; by the chain rule, its derivative is $\frac{1}{y}\cdot\frac{dy}{dx}$.`,
          t`**Step 3:** multiply both sides by $y$, and write $y$ out in terms of $x$.`,
          t`Use it when the base and the index both vary, or for long products, quotients and roots.`,
        ],
      },
      {
        title: "Laws of logarithms used",
        points: [
          t`Product: $\log(uv) = \log u + \log v$.`,
          t`Quotient: $\log\frac{u}{v} = \log u - \log v$, so the denominator's factors get a minus sign.`,
          t`Power: $\log u^n = n\log u$; a root is a power, like $\sqrt[3]{u} = u^{\frac{1}{3}}$.`,
          t`There is no law for a sum: $\log(u + v)$ does not split.`,
          t`Each $\log u$ differentiates to $\frac{1}{u}\cdot\frac{du}{dx}$: keep the inside's derivative.`,
        ],
      },
      {
        title: "Variable base and variable index",
        points: [
          t`Let $y = f^g$, where $f$ and $g$ are functions of $x$ and $f > 0$.`,
          t`Take logs: $\log y = g\log f$.`,
          t`The product rule: $\frac{1}{y}\frac{dy}{dx} = g'\log f + g\cdot\frac{f'}{f}$.`,
          t`So $\frac{dy}{dx} = f^g\left[g'\log f + \frac{gf'}{f}\right]$.`,
          t`The power rule gives only the second term, the exponential rule only the first; you need both.`,
          t`Example: $\frac{d}{dx}x^x = x^x(1 + \log x)$.`,
        ],
      },
      {
        title: "Products, quotients and roots",
        points: [
          t`Example: $y = \frac{x^2(x + 1)^3}{(x + 5)^4}$.`,
          t`Take logs: $\log y = 2\log x + 3\log(x + 1)$ $- 4\log(x + 5)$.`,
          t`Differentiate: $\frac{1}{y}\frac{dy}{dx} = \frac{2}{x} + \frac{3}{x + 1} - \frac{4}{x + 5}$.`,
          t`Multiply back: $\frac{dy}{dx} = y\left[\frac{2}{x} + \frac{3}{x + 1} - \frac{4}{x + 5}\right]$.`,
          t`One term per factor, with no long quotient rule.`,
        ],
      },
      {
        title: "Sums of such functions",
        points: [
          t`For $y = x^x + \sin x$, taking $\log y$ doesn't help: $\log(u + v)$ doesn't split.`,
          t`Instead, let $u = x^x$ and $v = \sin x$, so $\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx}$.`,
          t`Find $\frac{du}{dx}$ by logs: $x^x(1 + \log x)$. Find $\frac{dv}{dx} = \cos x$ directly.`,
          t`Add: $\frac{dy}{dx} = x^x(1 + \log x) + \cos x$.`,
          t`A constant term such as $e^e$ has derivative $0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = x^{\sqrt{x}}$, $x > 0$, with respect to $x$.`,
      steps: [
        t`Base and index both contain $x$, so take logs: $\log y = \sqrt{x}\log x$.`,
        t`Differentiate, with the product rule on the right: $\frac{1}{y}\frac{dy}{dx} = \frac{\log x}{2\sqrt{x}} + \sqrt{x}\cdot\frac{1}{x}$.`,
        t`Since $\sqrt{x}\cdot\frac{1}{x} = \frac{2}{2\sqrt{x}}$: $\frac{1}{y}\frac{dy}{dx} = \frac{\log x + 2}{2\sqrt{x}}$.`,
        t`Multiply both sides by $y = x^{\sqrt{x}}$.`,
      ],
      answer: t`$\frac{dy}{dx} = \frac{x^{\sqrt{x}}(\log x + 2)}{2\sqrt{x}}$`,
    },
    visualSpec: t`A slider for $x$ on the graph of $y = x^x$: the tangent's slope splits into a power-rule part and an exponential-rule part, drawn as two bars that add up to the slope.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Stopping at the derivative of $\log y$: giving $\frac{1}{y}\frac{dy}{dx}$ as the answer, never multiplying back by $y$`,
      remediation: t`The left side is $\frac{1}{y}\cdot\frac{dy}{dx}$, not $\frac{dy}{dx}$. Multiply both sides by $y$, written in terms of $x$, to finish.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M2",
      mistake: t`Using the power rule on $f^g$ as if the index were constant: $\frac{d}{dx}x^x = x\cdot x^{x - 1}$`,
      remediation: t`The power rule needs a constant index. Take logs: $\log y = g\log f$, and the product rule gives two terms, $f^g\left[g'\log f + \frac{gf'}{f}\right]$.`,
      fallback: { kind: "ext", topic: "the power rule and the exponential rule" },
    },
    {
      id: "C06-M3",
      mistake: t`Using the exponential rule on $f^g$ as if the base were constant: $\frac{d}{dx}x^x = x^x\log x$`,
      remediation: t`The exponential rule needs a constant base. Take logs: $\log y = g\log f$, and the product rule gives two terms, $f^g\left[g'\log f + \frac{gf'}{f}\right]$.`,
      fallback: { kind: "ext", topic: "the power rule and the exponential rule" },
    },
    {
      id: "C06-M4",
      mistake: t`Taking $\log\frac{u}{v} = \log u + \log v$, so the denominator's factors come out with a plus sign`,
      remediation: t`$\log\frac{u}{v} = \log u - \log v$: every factor of the denominator enters $\log y$ with a minus sign.`,
      fallback: { kind: "ext", topic: "laws of logarithms" },
    },
    {
      id: "C06-M5",
      mistake: t`Leaving off the inside's derivative when differentiating a log: $\frac{d}{dx}\log(\sin x) = \frac{1}{\sin x}$`,
      remediation: t`By the chain rule, $\frac{d}{dx}\log u = \frac{1}{u}\cdot\frac{du}{dx}$. So $\frac{d}{dx}\log(\sin x)$ $= \frac{\cos x}{\sin x} = \cot x$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M6",
      mistake: t`Taking the log of a sum term by term: $\log(u + v) = \log u + \log v$`,
      remediation: t`Logarithms split products, not sums. Write $y = u + v$, differentiate each part on its own (by logs where needed), then add.`,
      fallback: { kind: "ext", topic: "laws of logarithms" },
    },
  ],
  engineNotes: [
    "Inputs, three styles: base and index (y = base^index); factors, a tuple of (b, e) pairs, with k (y = (b1^e1 * b2^e2 ...)^k); or terms, a tuple (y = their sum). a is the point when the item asks for a value.",
    "C06-M1 gives the key wherever y = 1 at the point (e.g. x^x at x = 1, (tan x)^(tan^2 x) at pi/4): pick a point where y is not 1.",
    "C06-M2 and C06-M3 need an f^g with x in both base and index; on a sum they act on those terms only. They agree with each other at x = e for x^x, so list only one of them there.",
    "C06-M4 needs a factor with a negative exponent; C06-M5 gives the key when every base has derivative 1 (x^x, (x + 1)^2/(x + 2)^3); C06-M6 needs a sum.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.1 (vii)" },
      stem: t`If $y = (\sin x)^x$, $\sin x > 0$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { base: "sin(x)", index: "x" } },
      options: [
        { key: "A", text: t`$\log(\sin x) + x\cot x$`, correct: false, misconceptionId: "C06-M1", value: "x/tan(x) + log(sin(x))" },
        { key: "B", text: t`$(\sin x)^x\left[\log(\sin x) + x\operatorname{cosec} x\right]$`, correct: false, misconceptionId: "C06-M5", value: "(x + log(sin(x))*sin(x))*sin(x)**(x - 1)" },
        { key: "C", text: t`$x(\sin x)^{x - 1}\cos x$`, correct: false, misconceptionId: "C06-M2", value: "x*sin(x)**(x - 1)*cos(x)" },
        { key: "D", text: t`$(\sin x)^x\left[\log(\sin x) + x\cot x\right]$`, correct: true, value: "(x*cos(x) + log(sin(x))*sin(x))*sin(x)**(x - 1)" },
      ],
      solution: {
        steps: [
          t`Take logs: $\log y = x\log(\sin x)$.`,
          t`Product rule: $\frac{1}{y}\frac{dy}{dx}$ $= \log(\sin x) + x\cdot\frac{\cos x}{\sin x}$ $= \log(\sin x) + x\cot x$.`,
          t`Multiply by $y$: $\frac{dy}{dx}$ $= (\sin x)^x\left[\log(\sin x) + x\cot x\right]$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.3.1 SolvedEx.1 (iv)" },
      stem: t`If $y = x^x$, then the value of $\dfrac{dy}{dx}$ at $x = 3$ is`,
      verify: { kind: "value", inputs: { base: "x", index: "x", a: "3" } },
      options: [
        { key: "A", text: t`$27(1 + \log 3)$`, correct: true, value: "27 + 27*log(3)" },
        { key: "B", text: t`$1 + \log 3$`, correct: false, misconceptionId: "C06-M1", value: "1 + log(3)" },
        { key: "C", text: t`$27$`, correct: false, misconceptionId: "C06-M2", value: "27" },
        { key: "D", text: t`$27\log 3$`, correct: false, misconceptionId: "C06-M3", value: "27*log(3)" },
      ],
      solution: {
        steps: [
          t`Take logs: $\log y = x\log x$, so $\frac{1}{y}\frac{dy}{dx} = \log x + 1$.`,
          t`Multiply by $y$: $\frac{dy}{dx} = x^x(1 + \log x)$.`,
          t`At $x = 3$: $3^3(1 + \log 3) = 27(1 + \log 3)$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.1 (ii)" },
      stem: t`If $y = \sqrt[3]{\dfrac{4x - 1}{(2x + 3)(5 - 2x)^2}}$, then the value of $\dfrac{dy}{dx}$ at $x = \dfrac{1}{2}$ is`,
      verify: { kind: "value", inputs: { factors: "((4*x - 1, 1), (2*x + 3, -1), (5 - 2*x, -2))", k: "1/3", a: "1/2" } },
      options: [
        { key: "A", text: t`$\frac{3}{8}$`, correct: true, value: "3/8" },
        { key: "B", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C06-M1", value: "3/2" },
        { key: "C", text: t`$\frac{7}{24}$`, correct: false, misconceptionId: "C06-M4", value: "7/24" },
        { key: "D", text: t`$\frac{1}{48}$`, correct: false, misconceptionId: "C06-M5", value: "1/48" },
      ],
      solution: {
        steps: [
          t`$\log y = \frac{1}{3}[\log(4x - 1) - \log(2x + 3)$ $- 2\log(5 - 2x)]$.`,
          t`$\frac{1}{y}\frac{dy}{dx}$ $= \frac{1}{3}\left[\frac{4}{4x - 1} - \frac{2}{2x + 3} + \frac{4}{5 - 2x}\right]$.`,
          t`At $x = \frac{1}{2}$: $4x - 1 = 1$, $2x + 3 = 4$, $5 - 2x = 4$, so $y = \sqrt[3]{\frac{1}{64}} = \frac{1}{4}$.`,
          t`$\frac{dy}{dx} = \frac{1}{4}\cdot\frac{1}{3}\left[4 - \frac{1}{2} + 1\right]$ $= \frac{1}{12}\cdot\frac{9}{2} = \frac{3}{8}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.2 (iii)" },
      stem: t`If $y = (\log x)^x$, $x > 1$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { base: "log(x)", index: "x" } },
      options: [
        { key: "A", text: t`$(\log x)^{x - 1}$`, correct: false, misconceptionId: "C06-M2", value: "log(x)**(x - 1)" },
        { key: "B", text: t`$(\log x)^x\left[\log(\log x) + \dfrac{1}{\log x}\right]$`, correct: true, value: "(log(x)*log(log(x)) + 1)*log(x)**(x - 1)" },
        { key: "C", text: t`$(\log x)^x\left[\log(\log x) + \dfrac{x}{\log x}\right]$`, correct: false, misconceptionId: "C06-M5", value: "(x + log(x)*log(log(x)))*log(x)**(x - 1)" },
        { key: "D", text: t`$(\log x)^x\log(\log x)$`, correct: false, misconceptionId: "C06-M3", value: "log(x)**x*log(log(x))" },
      ],
      solution: {
        steps: [
          t`Take logs: $\log y = x\log(\log x)$.`,
          t`Product rule: $\frac{1}{y}\frac{dy}{dx}$ $= \log(\log x) + x\cdot\frac{1}{\log x}\cdot\frac{1}{x}$.`,
          t`So $\frac{dy}{dx}$ $= (\log x)^x\left[\log(\log x) + \frac{1}{\log x}\right]$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.3.1 SolvedEx.1 (iv)" },
      stem: t`If $y = x^2 + x^x + 2^x$, then the value of $\dfrac{dy}{dx}$ at $x = 2$ is`,
      verify: { kind: "value", inputs: { terms: "(x**2, x**x, 2**x)", a: "2" } },
      options: [
        { key: "A", text: t`$8 + 8\log 2$`, correct: true, value: "8*log(2) + 8" },
        { key: "B", text: t`$5 + 5\log 2$`, correct: false, misconceptionId: "C06-M1", value: "5*log(2) + 5" },
        { key: "C", text: t`$8 + 4\log 2$`, correct: false, misconceptionId: "C06-M2", value: "4*log(2) + 8" },
        { key: "D", text: t`$24 + 24\log 2$`, correct: false, misconceptionId: "C06-M6", value: "24*log(2) + 24" },
      ],
      solution: {
        steps: [
          t`A sum doesn't split under $\log$, so only $u = x^x$ needs logs: $\frac{du}{dx} = x^x(1 + \log x)$.`,
          t`$\frac{dy}{dx} = 2x + x^x(1 + \log x)$ $+ 2^x\log 2$.`,
          t`At $x = 2$: $4 + 4(1 + \log 2) + 4\log 2$ $= 8 + 8\log 2$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.3 Q.2 (i)" },
      stem: t`If $y = x^e + x^x + e^x + e^e$, then the value of $\dfrac{dy}{dx}$ at $x = e$ is`,
      verify: { kind: "value", inputs: { terms: "(x**E, x**x, exp(x), exp(E))", a: "E" } },
      options: [
        { key: "A", text: t`$3e^e$`, correct: false, misconceptionId: "C06-M3", value: "3*exp(E)" },
        { key: "B", text: t`$16e^e$`, correct: false, misconceptionId: "C06-M6", value: "16*exp(E)" },
        { key: "C", text: t`$4e^e$`, correct: true, value: "4*exp(E)" },
        { key: "D", text: t`$2e^e + 2$`, correct: false, misconceptionId: "C06-M1", value: "2 + 2*exp(E)" },
      ],
      solution: {
        steps: [
          t`Differentiate term by term; only $x^x$ needs logs: $\frac{d}{dx}x^x = x^x(1 + \log x)$.`,
          t`$e^e$ is a constant, so $\frac{dy}{dx} = ex^{e - 1} + x^x(1 + \log x)$ $+ e^x$.`,
          t`At $x = e$: $e\cdot e^{e - 1} = e^e$, $e^e(1 + 1) = 2e^e$, and $e^e$.`,
          t`Total: $e^e + 2e^e + e^e = 4e^e$.`,
        ],
      },
    },
  ],
};
