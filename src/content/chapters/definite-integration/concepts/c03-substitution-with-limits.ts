import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Asha puts $u = x^2$ in $\int_1^2 2x\,e^{x^2}\,dx$, gets $\int e^u\,du$, and writes $\left[e^u\right]_1^2 = e^2 - e$. **Is she right?**`,
    reveal: t`No. The limits $1$ and $2$ are values of $x$. When $x = 2$, $u = 4$, so the answer is $\left[e^u\right]_1^4 = e^4 - e$.`,
  },
  explanation: {
    intuition: [
      t`A **definite integral** has limits: the values where its variable, here $x$, starts and stops.`,
      t`A **substitution** $u = g(x)$ changes the variable from $x$ to $u$.`,
      t`So the limits must change too: they become the values where $u$ starts and stops.`,
      t`At $x = a$, $u = g(a)$; at $x = b$, $u = g(b)$.`,
      t`Then finish in $u$: put the $u$-limits into the antiderivative in $u$.`,
      t`There is no need to go back to $x$.`,
    ],
    formal: [
      {
        title: "Changing the limits",
        points: [
          t`Put $u = g(x)$, so $du = g'(x)\,dx$.`,
          t`The limits change with it: $x = a$ gives $u = g(a)$, and $x = b$ gives $u = g(b)$.`,
          t`So $\int_a^b f(g(x))\,g'(x)\,dx$ $= \int_{g(a)}^{g(b)} f(u)\,du$.`,
          t`Integrate in $u$ and put in the $u$-limits; $x$ never comes back.`,
          t`Example: for $\int_1^3 \frac{2x\,dx}{x^2 + 1}$, put $u = x^2 + 1$.`,
          t`Then $u$ runs from $2$ to $10$, so the integral is $\int_2^{10} \frac{du}{u}$ $= \log 5$.`,
        ],
      },
      {
        title: "Why the limits must change",
        points: [
          t`Let $F$ be an antiderivative of $f$, so $F' = f$.`,
          t`By the chain rule, $\frac{d}{dx}F(g(x))$ $= f(g(x))\,g'(x)$.`,
          t`So, by the fundamental theorem, the $x$-integral is $F(g(b)) - F(g(a))$.`,
          t`The $u$-integral $\int_{g(a)}^{g(b)} f(u)\,du$ is the same number.`,
          t`Keeping $a$ and $b$ gives $F(b) - F(a)$ instead: a different number.`,
        ],
      },
      {
        title: "When u runs downwards",
        points: [
          t`If $g$ decreases, the new upper limit is the smaller one. That is allowed.`,
          t`For $u = \cos x$ on $\left[0, \frac{\pi}{2}\right]$, $u$ runs from $1$ down to $0$.`,
          t`Keep that order: the new integral is $\int_1^0$.`,
          t`Swapping the limits changes the sign: $\left[F(u)\right]_1^0 = F(0) - F(1)$ $= -\left[F(u)\right]_0^1$.`,
          t`Here $du = -\sin x\,dx$ brings its own minus, and the two minuses cancel.`,
          t`Swapping the limits without the sign gives the negative of the answer.`,
        ],
      },
      {
        title: "Both limits, and the constant",
        points: [
          t`Change both limits: $x = 0$ need not give $u = 0$.`,
          t`For $u = x^2 + 1$, $x = 0$ gives $u = 1$.`,
          t`Make up a constant in $du$ as usual: $u = 1 - x^2$ gives $x\,dx = -\frac{du}{2}$.`,
          t`Once the limits are in $u$, don't put $x$ back: the new limits fit only $u$.`,
          t`Or find the antiderivative in $x$ first and use the old limits. Never mix the two.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\int_0^{\pi/2} \sqrt{\cos x}\,\sin^3 x\,dx$.`,
      steps: [
        t`Write $\sin^3 x = (1 - \cos^2 x)\sin x$ and put $u = \cos x$, so $\sin x\,dx = -du$.`,
        t`Change the limits: $x = 0$ gives $u = 1$; $x = \frac{\pi}{2}$ gives $u = 0$.`,
        t`The integral is $\int_1^0 \sqrt{u}\,(1 - u^2)(-du)$ $= \int_0^1 (u^{1/2} - u^{5/2})\,du$.`,
        t`So it is $\left[\frac{2}{3}u^{3/2} - \frac{2}{7}u^{7/2}\right]_0^1$ $= \frac{2}{3} - \frac{2}{7} = \frac{8}{21}$.`,
      ],
      answer: t`$\int_0^{\pi/2} \sqrt{\cos x}\,\sin^3 x\,dx = \dfrac{8}{21}$`,
    },
    visualSpec: t`Drag the upper limit $b$ and watch the area under $f(g(x))\,g'(x)$ on $[a, b]$ stay equal to the area under $f(u)$ on $[g(a), g(b)]$, while the area on $[a, b]$ under $f(u)$ does not.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Keeps the $x$-limits after substituting: puts $a$ and $b$ into the antiderivative in $u$.`,
      remediation: t`The limits belong to the variable. With $u = g(x)$, the new limits are $g(a)$ and $g(b)$: work them out before integrating in $u$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: t`Believes the lower limit must be the smaller: when $u$ decreases, turns $\int_1^0$ into $\int_0^1$ without changing the sign.`,
      remediation: t`A lower limit may be larger than the upper one. Keep $\int_{g(a)}^{g(b)}$ as it comes; swapping the limits changes the sign.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: t`Forgets to divide by the number in $du$: from $du = -2x\,dx$ takes $x\,dx = -du$.`,
      remediation: t`Solve $du = k\,(\dots)\,dx$ for the factor you have: $(\dots)\,dx = \frac{du}{k}$. From $du = -2x\,dx$, $x\,dx = -\frac{du}{2}$.`,
      fallback: { kind: "ext", topic: "integration by substitution" },
    },
    {
      id: "C03-M4",
      mistake: t`Changes the limits, then puts $x$ back and uses the new limits as values of $x$.`,
      remediation: t`The new limits are values of $u$. Either finish in $u$ with the $u$-limits, or go back to $x$ with the old limits; never mix them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Changes only the upper limit and copies the lower one, e.g. assumes $x = 0$ gives $u = 0$.`,
      remediation: t`Change both limits: put each $x$-limit into $u = g(x)$. For $u = \cos x$, $x = 0$ gives $u = 1$, not $0$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M2 shows only when $u$ decreases ($g(a) > g(b)$); C03-M3 only when $|k| \ne 1$ in $du = k\,(\dots)\,dx$; C03-M5 only when $g(a) \ne a$; C03-M4 needs $g(g(a))$ and $g(g(b))$ in the domain.`,
    t`C03-M1 and C03-M2 give the same value when the substitution swaps the limits ($g(a) = b$, $g(b) = a$, as in C03-Q2, tagged C03-M1). C03-M4 equals C03-M1 when $g(g(x)) = x$, as for $u = \frac{1}{x}$.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Misc 4 I (6)" },
      stem: t`Put $u = \dfrac{2}{x}$. $\displaystyle\int_1^4 \dfrac{e^{2/x}}{x^2}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "exp(2/x)/x**2", u: "2/x", h: "exp(t)", k: "-2", a: "1", b: "4" } },
      options: [
        { key: "A", text: t`$\dfrac{\sqrt{e} - e^2}{2}$`, correct: false, misconceptionId: "C03-M2", value: "-(1 - exp(-3/2))*exp(2)/2" },
        { key: "B", text: t`$e^2 - \sqrt{e}$`, correct: false, misconceptionId: "C03-M3", value: "-exp(1/2) + exp(2)" },
        { key: "C", text: t`$\dfrac{e^2 - \sqrt{e}}{2}$`, correct: true, value: "-(1 - exp(3/2))*exp(1/2)/2" },
        { key: "D", text: t`$\dfrac{e - e^4}{2}$`, correct: false, misconceptionId: "C03-M1", value: "E*(1 - exp(3))/2" },
      ],
      solution: {
        steps: [
          t`Put $u = \frac{2}{x}$: $du = -\frac{2}{x^2}\,dx$, so $\frac{dx}{x^2} = -\frac{du}{2}$.`,
          t`Limits: $x = 1$ gives $u = 2$; $x = 4$ gives $u = \frac{1}{2}$.`,
          t`The integral is $-\frac{1}{2}\int_2^{1/2} e^u\,du$ $= \frac{1}{2}\int_{1/2}^2 e^u\,du$.`,
          t`So it equals $\frac{1}{2}\left(e^2 - e^{1/2}\right)$ $= \frac{e^2 - \sqrt{e}}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Misc 4 II (5)" },
      stem: t`Put $u = 1 - x^2$. $\displaystyle\int_0^1 x^5\sqrt{1 - x^2}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "x**5*sqrt(1 - x**2)", u: "1 - x**2", h: "(1 - t)**2*sqrt(t)", k: "-2", a: "0", b: "1" } },
      options: [
        { key: "A", text: t`$\frac{16}{105}$`, correct: false, misconceptionId: "C03-M3", value: "16/105" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M5", value: "0" },
        { key: "C", text: t`$\frac{8}{105}$`, correct: true, value: "8/105" },
        { key: "D", text: t`$- \frac{8}{105}$`, correct: false, misconceptionId: "C03-M1", value: "-8/105" },
      ],
      solution: {
        steps: [
          t`Put $u = 1 - x^2$: $x\,dx = -\frac{du}{2}$, and $x^4 = (1 - u)^2$.`,
          t`Limits: $x = 0$ gives $u = 1$; $x = 1$ gives $u = 0$.`,
          t`The integral is $-\frac{1}{2}\int_1^0 (1 - u)^2\sqrt{u}\,du$ $= \frac{1}{2}\int_0^1 (1 - u)^2\sqrt{u}\,du$.`,
          t`Expand to $u^{1/2} - 2u^{3/2} + u^{5/2}$: it is $\frac{1}{2}\left(\frac{2}{3} - \frac{4}{5} + \frac{2}{7}\right)$ $= \frac{8}{105}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 II (3)" },
      stem: t`Use $\sin^4 x + \cos^4 x = \dfrac{1 + \cos^2 2x}{2}$ and put $u = \cos 2x$. $\displaystyle\int_0^{\pi/4} \dfrac{\sin 2x}{\sin^4 x + \cos^4 x}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "2*sin(2*x)/(1 + cos(2*x)**2)", u: "cos(2*x)", h: "2/(1 + t**2)", k: "-2", a: "0", b: "pi/4" } },
      options: [
        { key: "A", text: t`$-\tan^{-1}\dfrac{\pi}{4}$`, correct: false, misconceptionId: "C03-M1", value: "-atan(pi/4)" },
        { key: "B", text: t`$- \frac{\pi}{4}$`, correct: false, misconceptionId: "C03-M2", value: "-pi/4" },
        { key: "C", text: t`$\frac{\pi}{2}$`, correct: false, misconceptionId: "C03-M3", value: "pi/2" },
        { key: "D", text: t`$\frac{\pi}{4}$`, correct: true, value: "pi/4" },
      ],
      solution: {
        steps: [
          t`With the identity, the integrand is $\frac{2\sin 2x}{1 + \cos^2 2x}$.`,
          t`Put $u = \cos 2x$: $\sin 2x\,dx = -\frac{du}{2}$. Limits: $x = 0$ gives $u = 1$; $x = \frac{\pi}{4}$ gives $u = 0$.`,
          t`The integral is $\int_1^0 \frac{-du}{1 + u^2}$ $= \int_0^1 \frac{du}{1 + u^2}$.`,
          t`So it equals $\left[\tan^{-1}u\right]_0^1 = \frac{\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Misc 4 IV (1)" },
      stem: t`Put $u = \cos x$. $\displaystyle\int_0^{\pi/2} \sin^3 x\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "sin(x)**3", u: "cos(x)", h: "1 - t**2", k: "-1", a: "0", b: "pi/2" } },
      options: [
        { key: "A", text: t`$- \frac{2}{3}$`, correct: false, misconceptionId: "C03-M2", value: "-2/3" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M5", value: "0" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: true, value: "2/3" },
        { key: "D", text: t`$\dfrac{\pi^3}{24} - \dfrac{\pi}{2}$`, correct: false, misconceptionId: "C03-M1", value: "pi*(-12 + pi**2)/24" },
      ],
      solution: {
        steps: [
          t`Write $\sin^3 x = (1 - \cos^2 x)\sin x$; put $u = \cos x$, so $\sin x\,dx = -du$.`,
          t`Limits: $x = 0$ gives $u = 1$; $x = \frac{\pi}{2}$ gives $u = 0$.`,
          t`The integral is $\int_1^0 (1 - u^2)(-du)$ $= \int_0^1 (1 - u^2)\,du$.`,
          t`So it equals $\left[u - \frac{u^3}{3}\right]_0^1 = \frac{2}{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Misc 4 I (5)" },
      stem: t`Put $u = 1 + x$. $\displaystyle\int_0^1 \sqrt{1 + x}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "sqrt(1 + x)", u: "1 + x", h: "sqrt(t)", k: "1", a: "0", b: "1" } },
      options: [
        { key: "A", text: t`$\dfrac{4\sqrt{2} - 2}{3}$`, correct: true, value: "-2/3 + 4*sqrt(2)/3" },
        { key: "B", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C03-M1", value: "2/3" },
        { key: "C", text: t`$2\sqrt{3} - \dfrac{4\sqrt{2}}{3}$`, correct: false, misconceptionId: "C03-M4", value: "-4*sqrt(2)/3 + 2*sqrt(3)" },
        { key: "D", text: t`$\dfrac{4\sqrt{2}}{3}$`, correct: false, misconceptionId: "C03-M5", value: "4*sqrt(2)/3" },
      ],
      solution: {
        steps: [
          t`Put $u = 1 + x$: $du = dx$.`,
          t`Limits: $x = 0$ gives $u = 1$; $x = 1$ gives $u = 2$.`,
          t`The integral is $\int_1^2 \sqrt{u}\,du$ $= \left[\frac{2}{3}u^{3/2}\right]_1^2$.`,
          t`So it equals $\frac{2}{3}(2\sqrt{2} - 1)$ $= \frac{4\sqrt{2} - 2}{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/def-integration-12/Ex 4.2 II (15)" },
      stem: t`Put $u = \log x$. $\displaystyle\int_2^3 \dfrac{\cos(\log x)}{x}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "cos(log(x))/x", u: "log(x)", h: "cos(t)", k: "1", a: "2", b: "3" } },
      options: [
        { key: "A", text: t`$\sin(\log 3) - \sin(\log 2)$`, correct: true, value: "-sin(log(2)) + sin(log(3))" },
        { key: "B", text: t`$\sin 3 - \sin 2$`, correct: false, misconceptionId: "C03-M1", value: "-sin(2) + sin(3)" },
        { key: "C", text: t`$\sin(\log\log 3) - \sin(\log\log 2)$`, correct: false, misconceptionId: "C03-M4", value: "sin(log(log(3))) - sin(log(log(2)))" },
        { key: "D", text: t`$\sin(\log 3) - \sin 2$`, correct: false, misconceptionId: "C03-M5", value: "-sin(2) + sin(log(3))" },
      ],
      solution: {
        steps: [
          t`Put $u = \log x$: $du = \frac{dx}{x}$.`,
          t`Limits: $x = 2$ gives $u = \log 2$; $x = 3$ gives $u = \log 3$.`,
          t`The integral is $\int_{\log 2}^{\log 3} \cos u\,du$ $= \left[\sin u\right]_{\log 2}^{\log 3}$.`,
          t`So it equals $\sin(\log 3) - \sin(\log 2)$.`,
        ],
      },
    },
  ],
};
