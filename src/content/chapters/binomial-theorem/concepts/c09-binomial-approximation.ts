import type { Concept, Pt } from "../../../types.ts";

const t = String.raw;

/** y = √(1 + x) from x = −1 to 1.8, traced as (s² − 1, s) so it stays smooth where it starts steeply. */
const rootCurve: Pt[] = Array.from({ length: 85 }, (_, i) => {
  const s = (i * Math.sqrt(2.8)) / 84;
  return [+(s * s - 1).toFixed(3), +s.toFixed(3)];
});

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`No calculator: $\sqrt{1.02}$. **Is it closer to $1.01$ or to $1.02$?**`,
    reveal: t`Closer to $1.01$. $\sqrt{1.02} = (1 + 0.02)^{1/2} \approx 1 + \frac{1}{2}(0.02) = 1.01$. The next term, $\frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2!}(0.02)^2 = -0.00005$, sharpens it to $1.00995$. A calculator gives $1.0099505\ldots$: two or three terms are already very close.`,
  },
  explanation: {
    intuition: [
      t`A number $x$ is **small** when it is close to $0$: then $x^2$ is much smaller, and $x^3$ smaller still.`,
      t`So for a small $x$, each term of $(1 + x)^n$ $= 1 + nx + \frac{n(n-1)}{2!}x^2 + \ldots$ is only a small correction to the one before.`,
      t`The curve here is $y = (1 + x)^n$ for $n = \frac{1}{2}$, that is $y = \sqrt{1 + x}$.`,
      t`Its first two terms, $1 + nx$, give the straight line $y = 1 + \frac{x}{2}$.`,
      t`Near $x = 0$ the line hugs the curve, so the first two or three terms give the value very closely.`,
      t`So make $x$ small: take out the nearest number with an easy power, like $25$ for a square root or $125$ for a cube root.`,
    ],
    figure: {
      alt: "The curve y = √(1 + x), starting on the x-axis at x = −1 and rising more and more slowly, and the straight line y = 1 + x/2. Both pass through (0, 1) and almost touch near x = 0; further from 0, on either side, the line runs above the curve and the gap between them grows.",
      axes: "xy",
      view: { x: [-1.3, 1.8], y: [-0.4, 2.1] },
      elements: [
        { kind: "curve", points: rootCurve, step: 3 },
        { kind: "label", at: [0.9, 1.25], label: "y = √(1 + x)", labelAt: "se", step: 3 },
        { kind: "line", through: [[0, 1], [1, 1.5]], tone: "good", step: 4 },
        { kind: "label", at: [-0.4, 0.95], label: "y = 1 + x/2", labelAt: "nw", tone: "good", step: 4 },
        { kind: "point", at: [0, 1], label: "(0, 1)", labelAt: "se", tone: "muted", step: 5 },
      ],
    },
    formal: [
      {
        title: "The method",
        points: [
          t`To approximate $N^n$, write $N = a + b$, where $a$ is near $N$ and $a^n$ is easy.`,
          t`Then $N = a(1 + x)$, with $x = \frac{b}{a}$ close to $0$.`,
          t`So $N^n = a^n(1 + x)^n$.`,
          t`Keep three terms: $(1 + x)^n \approx 1 + nx$ $+ \frac{n(n-1)}{2!}x^2$, where $\approx$ means "is about".`,
          t`For two terms, stop after $nx$.`,
          t`Multiply back by $a^n$.`,
        ],
      },
      {
        title: "Taking a out of the bracket",
        points: [
          t`The power acts on both factors: $\left[a(1 + x)\right]^n$ $= a^n(1 + x)^n$.`,
          t`So $a$ comes out of the bracket as $a^n$, not as $a$.`,
          t`For example, $50 = 49\left(1 + \frac{1}{49}\right)$, so $x = \frac{1}{49}$.`,
          t`The $49$ leaves the bracket as $49^{1/2} = 7$.`,
          t`So $\sqrt{50}$ $= 7\left(1 + \frac{1}{49}\right)^{1/2}$.`,
          t`The extra $1$ is divided by $49$, not by $7$.`,
        ],
      },
      {
        title: "The third term",
        points: [
          t`The third term is $\frac{n(n-1)}{2!}x^2$, with $2! = 2 \times 1 = 2$.`,
          t`Its **coefficient**, the number multiplying $x^2$, is $\frac{n(n-1)}{2!}$.`,
          t`Put $n$ in with its sign.`,
          t`For $n = \frac{1}{2}$ it is $\frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2}$ $= -\frac{1}{8}$.`,
          t`For $n = -2$ it is $\frac{(-2)(-3)}{2} = 3$.`,
        ],
      },
      {
        title: "Keep the sign of x",
        points: [
          t`A **perfect power** is a number with an exact root, such as $1$, $49 = 7^2$ or $125 = 5^3$.`,
          t`Just below a perfect power, $x$ is negative: $0.97 = 1 + (-0.03)$, so $x = -0.03$.`,
          t`Then the term $nx$ changes sign.`,
          t`But $x^2 = 0.0009$ stays positive.`,
        ],
      },
      {
        title: "How close the answer is",
        points: [
          t`The answer is the exact value of the terms you keep.`,
          t`It differs from the true value by roughly the size of the first term you dropped.`,
        ],
      },
    ],
    worked: {
      prompt: t`Use the first three terms of the binomial expansion to approximate $\sqrt[3]{127}$.`,
      steps: [
        t`$125 = 5^3$ is the nearest cube: $127$ $= 125\left(1 + \frac{2}{125}\right)$, so $\sqrt[3]{127}$ $= 5\left(1 + \frac{2}{125}\right)^{1/3}$, with $x = \frac{2}{125}$ and $n = \frac{1}{3}$.`,
        t`Second term: $nx = \frac{1}{3} \times \frac{2}{125}$ $= \frac{2}{375}$.`,
        t`Third term: $\frac{n(n-1)}{2!}$ $= \frac{\frac{1}{3}\left(-\frac{2}{3}\right)}{2}$ $= -\frac{1}{9}$ and $x^2 = \frac{4}{15625}$, so the term is $-\frac{4}{140625}$.`,
        t`Multiply back by $5$: $5\left(1 + \frac{2}{375} - \frac{4}{140625}\right)$ $= 5 + \frac{2}{75} - \frac{4}{28125}$ $= \frac{141371}{28125}$.`,
      ],
      answer: t`$\sqrt[3]{127} \approx \frac{141371}{28125} \approx 5.02652$ (a calculator gives $5.02653$).`,
    },
    visualSpec: t`Slide $x$ from $-0.3$ to $0.3$: the curve $y = (1 + x)^n$ beside the line $y = 1 + nx$ and the parabola $y = 1 + nx + \frac{n(n-1)}{2}x^2$, both hugging the curve near $x = 0$ and peeling away as $|x|$ grows.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Takes a out of the bracket as a, not as a^n: (a(1 + x))^n = a(1 + x)^n",
      remediation: t`The power acts on both factors: $\left[a(1 + x)\right]^n = a^n(1 + x)^n$. For example $\left[49\left(1 + \frac{1}{49}\right)\right]^{1/2} = 7\left(1 + \frac{1}{49}\right)^{1/2}$, and $\left[9(1 + 0.01)\right]^{-1} = \frac{1}{9}(1 + 0.01)^{-1}$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C09-M2",
      mistake: "Uses n(n + 1)/2! for the coefficient of x^2 instead of n(n - 1)/2!",
      remediation: t`The third term of $(1 + x)^n$ is $\frac{n(n-1)}{2!}x^2$. Put $n$ in with its sign: for $n = -2$ the coefficient is $\frac{(-2)(-3)}{2} = 3$, and for $n = \frac{1}{2}$ it is $\frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2} = -\frac{1}{8}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M3",
      mistake: "Leaves out the 2! in the third term: writes n(n - 1)x^2",
      remediation: t`The third term is $\frac{n(n-1)}{2!}x^2$: divide $n(n-1)$ by $2! = 2$. For $n = \frac{1}{2}$ the coefficient is $-\frac{1}{8}$, not $-\frac{1}{4}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M4",
      mistake: "Drops the minus sign of x when the number is just below a perfect power: expands (1 - h)^n as (1 + h)^n",
      remediation: t`Below a perfect power, $x$ is negative: $0.97 = 1 + (-0.03)$, so $x = -0.03$. Then the term $nx$ changes sign, while $x^2$ stays positive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "For a root, divides the extra part by the root instead of by the perfect power: sqrt(49 + 1) = 7(1 + 1/7)^(1/2)",
      remediation: t`First write the whole number as $a(1 + x)$: $50 = 49\left(1 + \frac{1}{49}\right)$, so $x = \frac{1}{49}$. Only then does the root come out: $49^{1/2} = 7$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    "C09-M1 and C09-M5 need a != 1 (a number like 0.98 has nothing to take out); C09-M5 only applies to a root (0 < n < 1).",
    "C09-M2 and C09-M3 need a three-term item; C09-M4 needs a number just below its perfect power (x < 0).",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/4.4 SolvedEx.4" },
      stem: t`Write $30 = 25 + 5$. Using the first three terms of the binomial expansion, what is the approximate value of $\sqrt{30}$?`,
      verify: { kind: "value", inputs: { a: "25", x: "1/5", n: "1/2" }, params: { terms: "3" } },
      options: [
        { key: "A", text: t`$5.575$`, correct: false, misconceptionId: "C09-M2", value: "223/40" },
        { key: "B", text: t`$5.45$`, correct: false, misconceptionId: "C09-M3", value: "109/20" },
        { key: "C", text: t`$5.475$`, correct: true, value: "219/40" },
        { key: "D", text: t`$6.875$`, correct: false, misconceptionId: "C09-M5", value: "55/8" },
      ],
      solution: {
        steps: [
          t`$30 = 25\left(1 + \frac{1}{5}\right)$, so $\sqrt{30} = 5\left(1 + \frac{1}{5}\right)^{1/2}$, with $x = 0.2$ and $n = \frac{1}{2}$.`,
          t`$nx = \frac{1}{2}(0.2) = 0.1$. Third term: $\frac{\frac{1}{2}\left(-\frac{1}{2}\right)}{2} = -\frac{1}{8}$, times $x^2 = 0.04$, gives $-0.005$.`,
          t`$\sqrt{30} \approx 5(1 + 0.1 - 0.005) = 5 \times 1.095 = 5.475$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.4 Q4(i)" },
      stem: t`Write $99 = 100 - 1$. Using the first three terms of the binomial expansion, what is the approximate value of $\sqrt{99}$?`,
      verify: { kind: "value", inputs: { a: "100", x: "-1/100", n: "1/2" }, params: { terms: "3" } },
      options: [
        { key: "A", text: t`$9.949875$`, correct: true, value: "79599/8000" },
        { key: "B", text: t`$10.049875$`, correct: false, misconceptionId: "C09-M4", value: "80399/8000" },
        { key: "C", text: t`$9.950375$`, correct: false, misconceptionId: "C09-M2", value: "79603/8000" },
        { key: "D", text: t`$9.94975$`, correct: false, misconceptionId: "C09-M3", value: "39799/4000" },
      ],
      solution: {
        steps: [
          t`$99 = 100(1 - 0.01)$, so $\sqrt{99} = 10(1 - 0.01)^{1/2}$, with $x = -0.01$ and $n = \frac{1}{2}$.`,
          t`$nx = \frac{1}{2}(-0.01) = -0.005$. Third term: $-\frac{1}{8} \times 0.0001 = -0.0000125$.`,
          t`$\sqrt{99} \approx 10(1 - 0.005 - 0.0000125) = 10 \times 0.9949875 = 9.949875$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.4 Q4(v)" },
      stem: t`Using the first three terms of the binomial expansion, what is the approximate value of $(0.98)^{-3}$?`,
      verify: { kind: "value", inputs: { a: "1", x: "-1/50", n: "-3" }, params: { terms: "3" } },
      options: [
        { key: "A", text: t`$0.9424$`, correct: false, misconceptionId: "C09-M4", value: "589/625" },
        { key: "B", text: t`$1.0612$`, correct: false, misconceptionId: "C09-M2", value: "2653/2500" },
        { key: "C", text: t`$1.0648$`, correct: false, misconceptionId: "C09-M3", value: "1331/1250" },
        { key: "D", text: t`$1.0624$`, correct: true, value: "664/625" },
      ],
      solution: {
        steps: [
          t`$0.98 = 1 - 0.02$, so $x = -0.02$ and $n = -3$.`,
          t`$nx = (-3)(-0.02) = 0.06$. Third term: $\frac{(-3)(-4)}{2} = 6$, times $x^2 = 0.0004$, gives $0.0024$.`,
          t`$(0.98)^{-3} \approx 1 + 0.06 + 0.0024 = 1.0624$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q22" },
      stem: t`Write $4.08 = 4 + 0.08$. Using the first three terms of the binomial expansion, what is the approximate value of $\frac{1}{4.08} = (4.08)^{-1}$?`,
      verify: { kind: "value", inputs: { a: "4", x: "1/50", n: "-1" }, params: { terms: "3" } },
      options: [
        { key: "A", text: t`$0.2451$`, correct: true, value: "2451/10000" },
        { key: "B", text: t`$3.9216$`, correct: false, misconceptionId: "C09-M1", value: "2451/625" },
        { key: "C", text: t`$0.245$`, correct: false, misconceptionId: "C09-M2", value: "49/200" },
        { key: "D", text: t`$0.2452$`, correct: false, misconceptionId: "C09-M3", value: "613/2500" },
      ],
      solution: {
        steps: [
          t`$4.08 = 4(1 + 0.02)$, so $(4.08)^{-1} = 4^{-1}(1 + 0.02)^{-1} = \frac{1}{4}(1 + 0.02)^{-1}$, with $x = 0.02$ and $n = -1$.`,
          t`$nx = -0.02$. Third term: $\frac{(-1)(-2)}{2} = 1$, times $x^2 = 0.0004$, gives $0.0004$.`,
          t`$\frac{1}{4.08} \approx \frac{1}{4}(1 - 0.02 + 0.0004) = \frac{0.9804}{4} = 0.2451$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q21" },
      stem: t`Write $995 = 1000 - 5$. Using the first two terms of the binomial expansion, what is the approximate value of $\sqrt[3]{995}$?`,
      verify: { kind: "value", inputs: { a: "1000", x: "-1/200", n: "1/3" }, params: { terms: "2" } },
      options: [
        { key: "A", text: t`$10 + \frac{1}{60}$`, correct: false, misconceptionId: "C09-M4", value: "601/60" },
        { key: "B", text: t`$10 - \frac{5}{3}$`, correct: false, misconceptionId: "C09-M5", value: "25/3" },
        { key: "C", text: t`$10 - \frac{1}{60}$`, correct: true, value: "599/60" },
        { key: "D", text: t`$1000 - \frac{5}{3}$`, correct: false, misconceptionId: "C09-M1", value: "2995/3" },
      ],
      solution: {
        steps: [
          t`$995 = 1000\left(1 - \frac{1}{200}\right)$, so $\sqrt[3]{995} = 10\left(1 - \frac{1}{200}\right)^{1/3}$, with $x = -\frac{1}{200}$ and $n = \frac{1}{3}$.`,
          t`$nx = \frac{1}{3}\left(-\frac{1}{200}\right) = -\frac{1}{600}$.`,
          t`$\sqrt[3]{995} \approx 10\left(1 - \frac{1}{600}\right) = 10 - \frac{1}{60}$, about $9.9833$.`,
        ],
      },
    },
  ],
};
