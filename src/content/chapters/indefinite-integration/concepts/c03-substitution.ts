import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$\dfrac{d}{dx}\sin(x^2) = 2x\cos(x^2)$. **So what is $\int x\cos(x^2)\,dx$?**`,
    reveal: t`Half of $\sin(x^2)$: $\dfrac{1}{2}\sin(x^2) + c$. The integrand has $x$, not $2x$, so the $2$ that differentiation produces must be divided out.`,
  },
  explanation: {
    intuition: [
      t`**Integration by substitution** undoes the chain rule, just as plain integration undoes plain differentiation.`,
      t`By the chain rule, $\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$.`,
      t`So an integrand like $\cos(x^2)\cdot 2x$ came from $\sin(x^2)$.`,
      t`The clue is an **inner function**, here $x^2$, standing next to its own derivative, $2x$.`,
      t`Call the inner function $t$; its derivative and $dx$ together become $dt$.`,
      t`The integral turns into a standard one in $t$: integrate it, then put $x$ back.`,
    ],
    formal: [
      {
        title: "The substitution rule",
        points: [
          t`Put $t = g(x)$, where $g(x)$ is the inner function.`,
          t`Differentiate: $dt = g'(x)\,dx$.`,
          t`Then $\int f(g(x))\,g'(x)\,dx$ $= \int f(t)\,dt$.`,
          t`Integrate in $t$, then replace $t$ by $g(x)$: the answer must be in $x$.`,
          t`It works because $\frac{d}{dx}F(g(x))$ $= F'(g(x))\,g'(x)$, by the chain rule.`,
          t`Check any answer by differentiating it: you must get the integrand back.`,
        ],
      },
      {
        title: "Making up a constant",
        points: [
          t`Often $g'(x)$ is present only up to a constant factor, like $x$ in place of $2x$.`,
          t`Then solve $dt = g'(x)\,dx$ for exactly the factor you have.`,
          t`Example: $t = x^2 + 1$ gives $dt = 2x\,dx$, so $x\,dx = \frac{dt}{2}$.`,
          t`So $\int x(x^2 + 1)^3\,dx$ $= \frac{1}{2}\int t^3\,dt$ $= \frac{(x^2 + 1)^4}{8} + c$.`,
          t`Keep the sign: $t = 4 - x^2$ gives $x\,dx = -\frac{dt}{2}$.`,
          t`Only a constant can be made up; a leftover factor in $x$ cannot be taken outside the integral.`,
        ],
      },
      {
        title: "Powers of a function",
        points: [
          t`For $[f(x)]^n f'(x)$, put $t = f(x)$, so that $f'(x)\,dx = dt$.`,
          t`Then $\int t^n\,dt = \frac{t^{n+1}}{n+1}$, for $n \ne -1$.`,
          t`So $\int [f(x)]^n f'(x)\,dx$ $= \frac{[f(x)]^{n+1}}{n+1} + c$.`,
          t`Divide by the new power $n + 1$, not by the old power $n$.`,
          t`Example: $\frac{1}{x}$ is the derivative of $\log x$, so $\int \frac{(\log x)^2}{x}\,dx$ $= \frac{(\log x)^3}{3} + c$.`,
          t`A root in the denominator is the power $-\frac{1}{2}$: $\int \frac{f'(x)}{\sqrt{f(x)}}\,dx$ $= 2\sqrt{f(x)} + c$.`,
        ],
      },
      {
        title: "Derivative over the function",
        points: [
          t`When the numerator is the derivative of the denominator, $\int \frac{f'(x)}{f(x)}\,dx$ $= \log|f(x)| + c$.`,
          t`This is the case $n = -1$: put $t = f(x)$, and $\int \frac{dt}{t} = \log|t|$.`,
          t`The bars make it work for negative $f(x)$ too, since $\log$ needs a positive number.`,
          t`Example: $\int \frac{e^x}{e^x + 1}\,dx$ $= \log|e^x + 1| + c$.`,
          t`A constant factor is fine: $\int \frac{x}{x^2 + 1}\,dx$ $= \frac{1}{2}\log|x^2 + 1| + c$.`,
          t`No match, no log: $\int \frac{2x}{(x^2 + 1)^2}\,dx$ $= -\frac{1}{x^2 + 1} + c$, by the power rule.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \dfrac{\cos\sqrt{x}}{\sqrt{x}}\,dx$ for $x > 0$.`,
      steps: [
        t`The inner function is $\sqrt{x}$: put $t = \sqrt{x}$.`,
        t`Then $dt = \frac{1}{2\sqrt{x}}\,dx$, so $\frac{dx}{\sqrt{x}} = 2\,dt$.`,
        t`The integral becomes $\int 2\cos t\,dt = 2\sin t + c$.`,
        t`Put $t = \sqrt{x}$ back: $2\sin\sqrt{x} + c$.`,
        t`Check: $\frac{d}{dx}\,2\sin\sqrt{x}$ $= 2\cos\sqrt{x}\cdot\frac{1}{2\sqrt{x}}$, the integrand.`,
      ],
      answer: t`$\int \dfrac{\cos\sqrt{x}}{\sqrt{x}}\,dx = 2\sin\sqrt{x} + c$`,
    },
    visualSpec: t`Slide the constant $k$ in $\int x\cos(kx^2)\,dx$ and watch the curve $\frac{1}{2k}\sin(kx^2)$ keep its slope equal to the integrand, while $\sin(kx^2)$ alone climbs $2k$ times too steeply.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Treats the factor present as the whole of $dt$: from $dt = 3e^{3x}\,dx$ takes $e^{3x}\,dx = dt$, so the $\frac{1}{k}$ is lost.`,
      remediation: t`Solve $dt = g'(x)\,dx$ for exactly the factor you have: if $dt = 3e^{3x}\,dx$, then $e^{3x}\,dx = \frac{dt}{3}$, so the answer carries $\frac{1}{3}$.`,
      fallback: { kind: "ext", topic: "chain rule" },
    },
    {
      id: "C03-M2",
      mistake: t`Inverts the constant: from $dt = 3e^{3x}\,dx$ writes $e^{3x}\,dx = 3\,dt$, multiplying by $k$ instead of dividing.`,
      remediation: t`Dividing $dt = k\,(\dots)\,dx$ by $k$ gives $(\dots)\,dx = \frac{dt}{k}$: the constant goes below, so the answer is divided by $k$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Believes any fraction integrates to $\log|\text{denominator}|$, whatever the numerator.`,
      remediation: t`$\int \frac{f'(x)}{f(x)}\,dx = \log|f(x)| + c$ only when the numerator is the denominator's derivative (up to a constant). Otherwise substitute and use the power rule.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: t`Divides by the old power in the power rule: $\int t^n\,dt = \frac{t^{n+1}}{n}$.`,
      remediation: t`$\int t^n\,dt = \frac{t^{n+1}}{n+1} + c$: raise the power by 1, then divide by the new power.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: t`Takes a factor in $x$ outside the integral as if it were a constant: $\int e^{3x}\cdot\frac{1}{e^{3x} + 1}\,dx = e^{3x}\log|e^{3x} + 1|$.`,
      remediation: t`Only constants come outside an integral. A factor in $x$ must become part of $dt$, as in $e^{3x}\,dx = \frac{dt}{3}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: t`Drops the minus sign of $dt$: from $t = 1 - x^2$, $dt = -2x\,dx$, takes $x\,dx = \frac{dt}{2}$.`,
      remediation: t`Keep the sign of $g'(x)$: $t = 1 - x^2$ gives $dt = -2x\,dx$, so $x\,dx = -\frac{dt}{2}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M1 and C03-M2 give the key when $dt$ is exactly the factor present ($k = 1$), and C03-M2 also when $k = -1$: draw items with $|k| \ne 1$ to detect them.`,
    t`C03-M6 shows only when $k < 0$ (an inner function like $1 - x^2$); C03-M5 only when $g'(x)$ is not constant; C03-M4 only for a power $t^n$ with $n \ne 0, -1$; C03-M3 only when the integrand is a fraction.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) I (5)" },
      stem: t`$\int \dfrac{e^{3x}}{e^{3x} + 1}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "exp(3*x)/(exp(3*x) + 1)", u: "exp(3*x) + 1", h: "1/t", k: "3" } },
      options: [
        { key: "A", text: t`$3\log\left|e^{3x} + 1\right| + c$`, correct: false, misconceptionId: "C03-M2", value: "c + 3*log(Abs(exp(3*x) + 1))" },
        { key: "B", text: t`$e^{3x}\log\left|e^{3x} + 1\right| + c$`, correct: false, misconceptionId: "C03-M5", value: "c + exp(3*x)*log(Abs(exp(3*x) + 1))" },
        { key: "C", text: t`$\dfrac{1}{3}\log\left|e^{3x} + 1\right| + c$`, correct: true, value: "c + log(Abs(exp(3*x) + 1))/3" },
        { key: "D", text: t`$\log\left|e^{3x} + 1\right| + c$`, correct: false, misconceptionId: "C03-M1", value: "c + log(Abs(exp(3*x) + 1))" },
      ],
      solution: {
        steps: [
          t`Put $t = e^{3x} + 1$: $dt = 3e^{3x}\,dx$, so $e^{3x}\,dx = \frac{dt}{3}$.`,
          t`The integral is $\frac{1}{3}\int \frac{dt}{t}$ $= \frac{1}{3}\log|t| + c$.`,
          t`So it equals $\frac{1}{3}\log\left|e^{3x} + 1\right| + c$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) I (4)" },
      stem: t`For $\tan(x^2) > 0$: $\int \dfrac{x\sec^2(x^2)}{\sqrt{\tan^3(x^2)}}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "x*sec(x**2)**2/sqrt(tan(x**2)**3)", u: "tan(x**2)", h: "t**(-3/2)", k: "2" } },
      options: [
        { key: "A", text: t`$-\dfrac{4}{\sqrt{\tan(x^2)}} + c$`, correct: false, misconceptionId: "C03-M2", value: "c - 4/sqrt(tan(x**2))" },
        { key: "B", text: t`$-\dfrac{1}{3\sqrt{\tan(x^2)}} + c$`, correct: false, misconceptionId: "C03-M4", value: "c - 1/(3*sqrt(tan(x**2)))" },
        { key: "C", text: t`$-\dfrac{1}{\sqrt{\tan(x^2)}} + c$`, correct: true, value: "c - 1/sqrt(tan(x**2))" },
        { key: "D", text: t`$-\dfrac{2}{\sqrt{\tan(x^2)}} + c$`, correct: false, misconceptionId: "C03-M1", value: "c - 2/sqrt(tan(x**2))" },
      ],
      solution: {
        steps: [
          t`Put $t = \tan(x^2)$: $dt = 2x\sec^2(x^2)\,dx$, so $x\sec^2(x^2)\,dx = \frac{dt}{2}$.`,
          t`The integral is $\frac{1}{2}\int t^{-3/2}\,dt$ $= \frac{1}{2}\cdot\frac{t^{-1/2}}{-1/2}$ $= -t^{-1/2}$.`,
          t`So it equals $-\frac{1}{\sqrt{\tan(x^2)}} + c$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) I (18)" },
      stem: t`For $1 + 4x^3 > 0$: $\int \dfrac{x^2}{\sqrt{1 + 4x^3}}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "x**2/sqrt(1 + 4*x**3)", u: "1 + 4*x**3", h: "t**(-1/2)", k: "12", den: "sqrt(1 + 4*x**3)" } },
      options: [
        { key: "A", text: t`$\log\left|\sqrt{1 + 4x^3}\right| + c$`, correct: false, misconceptionId: "C03-M3", value: "c + log(Abs(sqrt(4*x**3 + 1)))" },
        { key: "B", text: t`$-\dfrac{1}{6}\sqrt{1 + 4x^3} + c$`, correct: false, misconceptionId: "C03-M4", value: "c - sqrt(4*x**3 + 1)/6" },
        { key: "C", text: t`$2x^2\sqrt{1 + 4x^3} + c$`, correct: false, misconceptionId: "C03-M5", value: "c + 2*x**2*sqrt(4*x**3 + 1)" },
        { key: "D", text: t`$\dfrac{1}{6}\sqrt{1 + 4x^3} + c$`, correct: true, value: "c + sqrt(4*x**3 + 1)/6" },
      ],
      solution: {
        steps: [
          t`The numerator $x^2$ is not the derivative of $\sqrt{1 + 4x^3}$, so the answer is not a log.`,
          t`Put $t = 1 + 4x^3$: $dt = 12x^2\,dx$, so $x^2\,dx = \frac{dt}{12}$.`,
          t`The integral is $\frac{1}{12}\int t^{-1/2}\,dt$ $= \frac{1}{12}\cdot 2\sqrt{t}$.`,
          t`So it equals $\frac{1}{6}\sqrt{1 + 4x^3} + c$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) I (10)" },
      stem: t`For $x \ne 0$: $\int \dfrac{1}{4x + 5x^{-11}}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "1/(4*x + 5*x**(-11))", u: "4*x**12 + 5", h: "1/t", k: "48", den: "4*x + 5*x**(-11)" } },
      options: [
        { key: "A", text: t`$48\log\left|4x^{12} + 5\right| + c$`, correct: false, misconceptionId: "C03-M2", value: "c + 48*log(Abs(4*x**12 + 5))" },
        { key: "B", text: t`$\log\left|4x + 5x^{-11}\right| + c$`, correct: false, misconceptionId: "C03-M3", value: "c + log(Abs(4*x + 5/x**11))" },
        { key: "C", text: t`$\dfrac{1}{48}\log\left|4x^{12} + 5\right| + c$`, correct: true, value: "c + log(Abs(4*x**12 + 5))/48" },
        { key: "D", text: t`$\log\left|4x^{12} + 5\right| + c$`, correct: false, misconceptionId: "C03-M1", value: "c + log(Abs(4*x**12 + 5))" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $x^{11}$: the integrand is $\frac{x^{11}}{4x^{12} + 5}$.`,
          t`Put $t = 4x^{12} + 5$: $dt = 48x^{11}\,dx$, so $x^{11}\,dx = \frac{dt}{48}$.`,
          t`The integral is $\frac{1}{48}\int \frac{dt}{t}$ $= \frac{1}{48}\log\left|4x^{12} + 5\right| + c$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc II Q.3" },
      stem: t`For $6x + 5 > 0$: $\int (6x + 5)^{3/2}\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "(6*x + 5)**(3/2)", u: "6*x + 5", h: "t**(3/2)", k: "6" } },
      options: [
        { key: "A", text: t`$\dfrac{1}{15}(6x + 5)^{5/2} + c$`, correct: true, value: "c + (6*x + 5)**(5/2)/15" },
        { key: "B", text: t`$\dfrac{2}{5}(6x + 5)^{5/2} + c$`, correct: false, misconceptionId: "C03-M1", value: "c + 2*(6*x + 5)**(5/2)/5" },
        { key: "C", text: t`$\dfrac{12}{5}(6x + 5)^{5/2} + c$`, correct: false, misconceptionId: "C03-M2", value: "c + 12*(6*x + 5)**(5/2)/5" },
        { key: "D", text: t`$\dfrac{1}{9}(6x + 5)^{5/2} + c$`, correct: false, misconceptionId: "C03-M4", value: "c + (6*x + 5)**(5/2)/9" },
      ],
      solution: {
        steps: [
          t`Put $t = 6x + 5$: $dt = 6\,dx$, so $dx = \frac{dt}{6}$.`,
          t`The integral is $\frac{1}{6}\int t^{3/2}\,dt$ $= \frac{1}{6}\cdot\frac{t^{5/2}}{5/2}$ $= \frac{t^{5/2}}{15}$.`,
          t`So it equals $\frac{1}{15}(6x + 5)^{5/2} + c$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc I Q.5" },
      stem: t`For $-1 < x < 1$: $\int \tan(\sin^{-1}x)\,dx = ?$`,
      verify: { kind: "value", inputs: { f: "tan(asin(x))", u: "1 - x**2", h: "t**(-1/2)", k: "-2" } },
      options: [
        { key: "A", text: t`$-\sqrt{1 - x^2} + c$`, correct: true, value: "c - sqrt(1 - x**2)" },
        { key: "B", text: t`$2\sqrt{1 - x^2} + c$`, correct: false, misconceptionId: "C03-M1", value: "c + 2*sqrt(1 - x**2)" },
        { key: "C", text: t`$-4\sqrt{1 - x^2} + c$`, correct: false, misconceptionId: "C03-M2", value: "c - 4*sqrt(1 - x**2)" },
        { key: "D", text: t`$\sqrt{1 - x^2} + c$`, correct: false, misconceptionId: "C03-M6", value: "c + sqrt(1 - x**2)" },
      ],
      solution: {
        steps: [
          t`Let $\theta = \sin^{-1}x$, so $\sin\theta = x$ and $\cos\theta = \sqrt{1 - x^2}$, as $\cos\theta > 0$ here.`,
          t`So $\tan(\sin^{-1}x) = \frac{x}{\sqrt{1 - x^2}}$.`,
          t`Put $t = 1 - x^2$: $dt = -2x\,dx$, so $x\,dx = -\frac{dt}{2}$.`,
          t`The integral is $-\frac{1}{2}\int t^{-1/2}\,dt = -\sqrt{t}$, so it equals $-\sqrt{1 - x^2} + c$.`,
        ],
      },
    },
  ],
};
