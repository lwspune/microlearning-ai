import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`The curve $y = e^{x^2}$ is lowest at $x = 0$, so its slope there is $0$. **But $\frac{d}{dx}e^{x} = e^{x}$ suggests the slope is $e^{x^2}$, which is $1$ at $x = 0$. Which is right?**`,
    reveal: t`The slope is $0$. Here $e$ is raised to a function, so the chain rule multiplies by the inside's derivative: $\frac{d}{dx}e^{x^2} = e^{x^2}\cdot 2x$, which is $0$ at $x = 0$.`,
  },
  explanation: {
    intuition: [
      t`Functions like $e^{\sin x}$, $5^{x^2}$ and $\log(\cos x)$ have an **outside** and an **inside** $u$.`,
      t`The outside is $e^{u}$, $a^{u}$ or $\log u$; the inside $u$ is a function of $x$.`,
      t`The chain rule still works: differentiate the outside, then multiply by $u'$.`,
      t`$e^{u}$ is its own outer derivative, so $\frac{d}{dx}e^{u} = e^{u}u'$.`,
      t`Another base adds a factor $\log a$; a log gives $\frac{1}{u}$ times $u'$.`,
      t`A log of a product is easier split into a sum of logs first.`,
    ],
    formal: [
      {
        title: "e to a function",
        points: [
          t`Let $u$ be a function of $x$ whose derivative is $u'$.`,
          t`Since $\frac{d}{dx}e^{x} = e^{x}$, the outer derivative of $e^{u}$ is $e^{u}$ itself.`,
          t`**Rule:** $\frac{d}{dx}e^{u} = e^{u}\cdot u'$.`,
          t`Example: $\frac{d}{dx}e^{\sin x} = e^{\sin x}\cos x$.`,
          t`The exponent stays as it is; the only new part is the factor $u'$.`,
        ],
      },
      {
        title: "Any base a",
        points: [
          t`Let $a$ be a constant **base**, with $a > 0$ and $a \ne 1$.`,
          t`From Std XI, $\frac{d}{dx}a^{x} = a^{x}\log a$.`,
          t`**Rule:** $\frac{d}{dx}a^{u}$ $= a^{u}\log a\cdot u'$.`,
          t`Example: $\frac{d}{dx}2^{x^2}$ $= 2^{x^2}\log 2\cdot 2x$.`,
          t`The power rule does not apply: the variable is in the exponent, not the base.`,
          t`Base $e$ is the special case where $\log e = 1$.`,
        ],
      },
      {
        title: "Log of a function",
        points: [
          t`In this book $\log$ means the natural log, to base $e$.`,
          t`Since $\frac{d}{dx}\log x = \frac{1}{x}$, the outer derivative of $\log u$ is $\frac{1}{u}$.`,
          t`**Rule:** $\frac{d}{dx}\log u = \frac{u'}{u}$, the inside's derivative over the inside.`,
          t`Example: $\frac{d}{dx}\log(\cos x)$ $= \frac{-\sin x}{\cos x} = -\tan x$.`,
          t`Another base: $\log_a u = \frac{\log u}{\log a}$, so $\frac{d}{dx}\log_a u = \frac{u'}{u\log a}$.`,
        ],
      },
      {
        title: "Simplify logs first",
        points: [
          t`A log of a product, quotient or power is easier to split before differentiating.`,
          t`$\log(AB) = \log A + \log B$ and $\log\frac{A}{B} = \log A - \log B$.`,
          t`$\log A^{n} = n\log A$, and $\log e^{u} = u$.`,
          t`Example: $\log\frac{x^2}{\sin x}$ $= 2\log x - \log(\sin x)$.`,
          t`Then differentiate term by term: $\frac{2}{x} - \cot x$.`,
          t`Also $e^{\log u} = u$ and $a^{\log_a u} = u$: simplify these first too.`,
        ],
      },
      {
        title: "Four traps",
        points: [
          t`Don't forget $u'$: $\frac{d}{dx}e^{3x}$ is $3e^{3x}$, not $e^{3x}$.`,
          t`Multiply by $u'$, never divide: $\frac{d}{dx}e^{3x}$ is not $\frac{e^{3x}}{3}$.`,
          t`No power rule on exponents: $\frac{d}{dx}2^{x}$ is not $x\cdot 2^{x - 1}$.`,
          t`$\log a$ multiplies for $a^{u}$ but divides for $\log_a u$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = \log\left[\frac{e^{3x}(3x - 4)^{\frac{2}{3}}}{\sqrt[3]{2x + 5}}\right]$ with respect to $x$.`,
      steps: [
        t`Split the log: $y = \log e^{3x} + \log(3x - 4)^{\frac{2}{3}}$ $- \log(2x + 5)^{\frac{1}{3}}$.`,
        t`Bring the powers down: $y = 3x + \frac{2}{3}\log(3x - 4)$ $- \frac{1}{3}\log(2x + 5)$.`,
        t`Use $\frac{d}{dx}\log u = \frac{u'}{u}$: $\frac{dy}{dx} = 3 + \frac{2}{3}\cdot\frac{3}{3x - 4}$ $- \frac{1}{3}\cdot\frac{2}{2x + 5}$.`,
        t`So $\frac{dy}{dx} = 3 + \frac{2}{3x - 4}$ $- \frac{2}{3(2x + 5)}$.`,
      ],
      answer: t`$\frac{dy}{dx} = 3 + \frac{2}{3x - 4} - \frac{2}{3(2x + 5)}$`,
    },
    visualSpec: t`A slider moves $x$ along $y = e^{u(x)}$ with its tangent, and a readout splits the slope into $e^{u}$ times $u'$; switching the outside to $a^{u}$ or $\log u$ shows the extra $\log a$ or the $\frac{1}{u}$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Stopping at the outer derivative and forgetting $u'$: $\frac{d}{dx}e^{u} = e^{u}$, $\frac{d}{dx}a^{u} = a^{u}\log a$, $\frac{d}{dx}\log u = \frac{1}{u}$`,
      remediation: t`The chain rule multiplies by the inside's derivative: $\frac{d}{dx}e^{u} = e^{u}u'$, $\frac{d}{dx}a^{u} = a^{u}\log a\cdot u'$ and $\frac{d}{dx}\log u = \frac{u'}{u}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Using the power rule on a variable exponent: $\frac{d}{dx}a^{u} = u\,a^{u - 1}u'$`,
      remediation: t`The power rule needs a fixed power. When the variable is in the exponent, use $\frac{d}{dx}a^{u} = a^{u}\log a\cdot u'$ (and $e^{u}u'$ for base $e$).`,
      fallback: { kind: "ext", topic: "derivatives of standard functions" },
    },
    {
      id: "C02-M3",
      mistake: t`Putting $\log a$ on the wrong side: $\frac{d}{dx}a^{u} = \frac{a^{u}u'}{\log a}$ and $\frac{d}{dx}\log_a u = \frac{u'\log a}{u}$`,
      remediation: t`$\log a$ multiplies for an exponential, $\frac{d}{dx}a^{u} = a^{u}\log a\cdot u'$, and divides for a log, $\frac{d}{dx}\log_a u = \frac{u'}{u\log a}$.`,
      fallback: { kind: "ext", topic: "derivatives of standard functions" },
    },
    {
      id: "C02-M4",
      mistake: t`Treating every base like $e$ and dropping $\log a$: $\frac{d}{dx}a^{u} = a^{u}u'$, $\frac{d}{dx}\log_a u = \frac{u'}{u}$, $\log a^{u} = u$`,
      remediation: t`Only base $e$ has $\log e = 1$. For another base keep the factor: $\frac{d}{dx}a^{u} = a^{u}\log a\cdot u'$ and $\log a^{u} = u\log a$.`,
      fallback: { kind: "ext", topic: "derivatives of standard functions" },
    },
    {
      id: "C02-M5",
      mistake: t`Adding the log of the denominator: $\log\frac{A}{B} = \log A + \log B$`,
      remediation: t`The log of a quotient is a difference: $\log\frac{A}{B} = \log A - \log B$, so every factor of the denominator comes with a minus sign.`,
      fallback: { kind: "ext", topic: "laws of logarithms" },
    },
    {
      id: "C02-M6",
      mistake: t`Dividing by the inner derivative instead of multiplying: $\frac{d}{dx}e^{u} = \frac{e^{u}}{u'}$, $\frac{d}{dx}\log u = \frac{1}{u\,u'}$`,
      remediation: t`The chain rule multiplies by $u'$, it never divides: $\frac{d}{dx}e^{u} = e^{u}\cdot u'$ and $\frac{d}{dx}\log u = \frac{u'}{u}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "params.form is exp (e^u), pow (a^u), loga (log_a u) or logprod (log of top/bot); inputs u and a, or top and bot; at is the point when the item asks for dy/dx at a value of x.",
    "C02-M1 gives the key where u' = 1 and C02-M6 where u' = 1 or -1; C02-M3 and C02-M4 need a base other than e; C02-M2 needs an exponential; C02-M5 needs a log of a quotient: draw diagnosing items away from these.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.2 (vi)" },
      stem: t`If $y = 5^{\sin^3 x + 3}$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { a: "5", u: "sin(x)**3 + 3" }, params: { form: "pow" } },
      options: [
        { key: "A", text: t`$5^{\sin^3 x + 3}\log 5\cdot 3\sin^2 x\cos x$`, correct: true, value: "3*5**(sin(x)**3 + 3)*log(5)*sin(x)**2*cos(x)" },
        { key: "B", text: t`$5^{\sin^3 x + 3}\log 5$`, correct: false, misconceptionId: "C02-M1", value: "5**(sin(x)**3 + 3)*log(5)" },
        { key: "C", text: t`$(\sin^3 x + 3)\,5^{\sin^3 x + 2}\cdot 3\sin^2 x\cos x$`, correct: false, misconceptionId: "C02-M2", value: "3*(sin(x)**3 + 3)*5**(sin(x)**3 + 2)*sin(x)**2*cos(x)" },
        { key: "D", text: t`$\dfrac{5^{\sin^3 x + 3}\cdot 3\sin^2 x\cos x}{\log 5}$`, correct: false, misconceptionId: "C02-M3", value: "3*5**(sin(x)**3 + 3)*sin(x)**2*cos(x)/log(5)" },
      ],
      solution: {
        steps: [
          t`The inside is $u = \sin^3 x + 3$, so $u' = 3\sin^2 x\cos x$.`,
          t`Use $\frac{d}{dx}a^{u} = a^{u}\log a\cdot u'$ with $a = 5$.`,
          t`So $\frac{dy}{dx} = 5^{\sin^3 x + 3}\log 5$ $\cdot 3\sin^2 x\cos x$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.2 (xvi)" },
      stem: t`If $y = \log_{e^2}(\log x)$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { a: "exp(2)", u: "log(x)" }, params: { form: "loga" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{2\log x}$`, correct: false, misconceptionId: "C02-M1", value: "1/(2*log(x))" },
        { key: "B", text: t`$\dfrac{2}{x\log x}$`, correct: false, misconceptionId: "C02-M3", value: "2/(x*log(x))" },
        { key: "C", text: t`$\dfrac{1}{x\log x}$`, correct: false, misconceptionId: "C02-M4", value: "1/(x*log(x))" },
        { key: "D", text: t`$\dfrac{1}{2x\log x}$`, correct: true, value: "1/(2*x*log(x))" },
      ],
      solution: {
        steps: [
          t`Change the base: $y = \frac{\log(\log x)}{\log e^2}$ $= \frac{1}{2}\log(\log x)$.`,
          t`The inside is $u = \log x$, so $u' = \frac{1}{x}$.`,
          t`$\frac{dy}{dx} = \frac{1}{2}\cdot\frac{u'}{u}$ $= \frac{1}{2}\cdot\frac{1}{x\log x} = \frac{1}{2x\log x}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.3 (xvii)" },
      stem: t`If $y = \log\left[\dfrac{e^{x^2}(5 - 4x)^{\frac{3}{2}}}{\sqrt[3]{7 - 6x}}\right]$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { top: "exp(x**2)*(5 - 4*x)**(3/2)", bot: "(7 - 6*x)**(1/3)" }, params: { form: "logprod" } },
      options: [
        { key: "A", text: t`$2x - \dfrac{3}{8(5 - 4x)} + \dfrac{1}{18(7 - 6x)}$`, correct: false, misconceptionId: "C02-M6", value: "2*x - 3/(8*(5 - 4*x)) + 1/(18*(7 - 6*x))" },
        { key: "B", text: t`$2x - \dfrac{6}{5 - 4x} + \dfrac{2}{7 - 6x}$`, correct: true, value: "2*x - 6/(5 - 4*x) + 2/(7 - 6*x)" },
        { key: "C", text: t`$2x + \dfrac{3}{2(5 - 4x)} - \dfrac{1}{3(7 - 6x)}$`, correct: false, misconceptionId: "C02-M1", value: "2*x + 3/(2*(5 - 4*x)) - 1/(3*(7 - 6*x))" },
        { key: "D", text: t`$2x - \dfrac{6}{5 - 4x} - \dfrac{2}{7 - 6x}$`, correct: false, misconceptionId: "C02-M5", value: "2*x - 6/(5 - 4*x) - 2/(7 - 6*x)" },
      ],
      solution: {
        steps: [
          t`Split the log: $y = x^2 + \frac{3}{2}\log(5 - 4x)$ $- \frac{1}{3}\log(7 - 6x)$.`,
          t`$\frac{d}{dx}\frac{3}{2}\log(5 - 4x)$ $= \frac{3}{2}\cdot\frac{-4}{5 - 4x} = -\frac{6}{5 - 4x}$.`,
          t`$\frac{d}{dx}\frac{1}{3}\log(7 - 6x)$ $= \frac{1}{3}\cdot\frac{-6}{7 - 6x} = -\frac{2}{7 - 6x}$.`,
          t`So $\frac{dy}{dx} = 2x - \frac{6}{5 - 4x}$ $+ \frac{2}{7 - 6x}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.3 (xviii)" },
      stem: t`If $y = \log\left[\dfrac{a^{\cos x}}{(x^2 - 3)^3\log x}\right]$, where $a > 0$ is a constant, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { top: "a**cos(x)", bot: "(x**2 - 3)**3*log(x)" }, params: { form: "logprod" } },
      options: [
        { key: "A", text: t`$-\sin x\log a + \dfrac{6x}{x^2 - 3} + \dfrac{1}{x\log x}$`, correct: false, misconceptionId: "C02-M5", value: "-sin(x)*log(a) + 6*x/(x**2 - 3) + 1/(x*log(x))" },
        { key: "B", text: t`$-\sin x\log a - \dfrac{6x}{x^2 - 3} - \dfrac{1}{x\log x}$`, correct: true, value: "-sin(x)*log(a) - 6*x/(x**2 - 3) - 1/(x*log(x))" },
        { key: "C", text: t`$-\sin x\log a - \dfrac{3}{x^2 - 3} - \dfrac{1}{\log x}$`, correct: false, misconceptionId: "C02-M1", value: "-sin(x)*log(a) - 3/(x**2 - 3) - 1/log(x)" },
        { key: "D", text: t`$-\sin x - \dfrac{6x}{x^2 - 3} - \dfrac{1}{x\log x}$`, correct: false, misconceptionId: "C02-M4", value: "-sin(x) - 6*x/(x**2 - 3) - 1/(x*log(x))" },
      ],
      solution: {
        steps: [
          t`Split the log: $y = \cos x\log a$ $- 3\log(x^2 - 3) - \log(\log x)$.`,
          t`$\frac{d}{dx}\cos x\log a = -\sin x\log a$, since $\log a$ is a constant.`,
          t`$\frac{d}{dx}3\log(x^2 - 3) = \frac{6x}{x^2 - 3}$ and $\frac{d}{dx}\log(\log x) = \frac{1}{x\log x}$.`,
          t`So $\frac{dy}{dx} = -\sin x\log a$ $- \frac{6x}{x^2 - 3} - \frac{1}{x\log x}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.1.3 SolvedEx.3 (vi)" },
      stem: t`If $y = a^{a^{\log_a(\cot x)}}$, where $a > 0$, $a \ne 1$, then $\dfrac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { a: "a", u: "cot(x)" }, params: { form: "pow" } },
      options: [
        { key: "A", text: t`$-a^{\cot x}\operatorname{cosec}^2 x$`, correct: false, misconceptionId: "C02-M4", value: "-a**cot(x)/sin(x)**2" },
        { key: "B", text: t`$-a^{\cot x}\operatorname{cosec}^2 x\log a$`, correct: true, value: "-a**cot(x)*log(a)/sin(x)**2" },
        { key: "C", text: t`$a^{\cot x}\log a$`, correct: false, misconceptionId: "C02-M1", value: "a**cot(x)*log(a)" },
        { key: "D", text: t`$-\cot x\, a^{\cot x - 1}\operatorname{cosec}^2 x$`, correct: false, misconceptionId: "C02-M2", value: "-a**(cot(x) - 1)*cot(x)/sin(x)**2" },
      ],
      solution: {
        steps: [
          t`Simplify first: $a^{\log_a(\cot x)} = \cot x$, so $y = a^{\cot x}$.`,
          t`The inside is $u = \cot x$, so $u' = -\operatorname{cosec}^2 x$.`,
          t`So $\frac{dy}{dx} = a^{\cot x}\log a\cdot(-\operatorname{cosec}^2 x)$ $= -a^{\cot x}\operatorname{cosec}^2 x\log a$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.1 Q.2 (ix)" },
      stem: t`If $y = e^{3\sin^2 x - 2\cos^2 x}$, then the value of $\dfrac{dy}{dx}$ at $x = \dfrac{\pi}{4}$ is`,
      verify: { kind: "value", inputs: { u: "3*sin(x)**2 - 2*cos(x)**2", at: "pi/4" }, params: { form: "exp" } },
      options: [
        { key: "A", text: t`$5\sqrt{e}$`, correct: true, value: "5*exp(1/2)" },
        { key: "B", text: t`$\sqrt{e}$`, correct: false, misconceptionId: "C02-M1", value: "exp(1/2)" },
        { key: "C", text: t`$\dfrac{5}{2\sqrt{e}}$`, correct: false, misconceptionId: "C02-M2", value: "5*exp(-1/2)/2" },
        { key: "D", text: t`$\dfrac{\sqrt{e}}{5}$`, correct: false, misconceptionId: "C02-M6", value: "exp(1/2)/5" },
      ],
      solution: {
        steps: [
          t`The inside is $u = 3\sin^2 x - 2\cos^2 x$.`,
          t`$u' = 6\sin x\cos x + 4\cos x\sin x$ $= 5\sin 2x$.`,
          t`At $x = \frac{\pi}{4}$: $u = \frac{3}{2} - 1 = \frac{1}{2}$ and $u' = 5\sin\frac{\pi}{2} = 5$.`,
          t`So $\frac{dy}{dx} = e^{u}\cdot u' = 5e^{\frac{1}{2}} = 5\sqrt{e}$.`,
        ],
      },
    },
  ],
};
