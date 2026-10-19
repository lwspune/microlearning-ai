import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`Nobody gives you a formula for $f$, only the rule $f(x + y) = f(x) + f(y)$ for all real $x$ and $y$. **Can you still find $f(0)$?**`,
    reveal: t`Yes. The rule holds for every $x$ and $y$, so put $x = y = 0$: $f(0) = f(0) + f(0)$. Take $f(0)$ from both sides: $f(0) = 0$.`,
  },
  explanation: {
    intuition: [
      t`A **functional equation** is a rule that $f$ must obey, like $f(x + y) = f(x) + f(y)$, in place of a formula.`,
      t`**For all** $x$ means the rule holds at every input, so we may put in any value we like.`,
      t`A clever value gives a fact: $x = y = 0$ in that rule gives $f(0) = 2f(0)$, so $f(0) = 0$.`,
      t`Replacing $x$ by another input, such as $\frac{1}{x}$, gives a second equation from the same rule.`,
      t`$f(\frac{1}{x})$ is the output at a different input, so it is a new unknown, not $f(x)$.`,
      t`A few rules have a known answer: $f(x + y) = f(x)f(y)$ is met by $2^x$, since $2^{x + y} = 2^x \cdot 2^y$.`,
    ],
    formal: [
      {
        title: "Putting in values",
        points: [
          t`Choose values that make the rule simple: $x = 0$, $y = 0$, $x = y$ or $y = \frac{1}{x}$.`,
          t`For $f(x + y) = f(x)f(y)$: $x = y = 0$ gives $f(0) = f(0)^2$, so $f(0) = 0$ or $1$.`,
          t`If $f(0) = 0$, then $y = 0$ gives $f(x) = f(x)f(0) = 0$ for every $x$.`,
          t`So when $f$ is not always $0$, it has $f(0) = 1$.`,
          t`For $f(xy) = f(x)f(y)$: $x = y = 1$ gives $f(1) = 1$ in the same way.`,
          t`Then $y = \frac{1}{x}$ gives $f(x)f(\frac{1}{x}) = f(1) = 1$, so $f(\frac{1}{x}) = \frac{1}{f(x)}$.`,
        ],
      },
      {
        title: "Two equations from one",
        points: [
          t`A rule may mix $f(x)$ with $f(1 - x)$ or $f(\frac{1}{x})$, its **partner**: doing the change twice gives $x$ back.`,
          t`Take $3f(x) + f(1 - x) = 8x$: its two unknowns are $f(x)$ and $f(1 - x)$.`,
          t`Replace $x$ by $1 - x$ on both sides: $3f(1 - x) + f(x) = 8 - 8x$.`,
          t`Multiply the first by $3$ so $f(1 - x)$ cancels: $9f(x) + 3f(1 - x) = 24x$.`,
          t`Subtract the second: $8f(x) = 32x - 8$, so $f(x) = 4x - 1$.`,
          t`Check: $3(4x - 1) + (3 - 4x) = 8x$.`,
        ],
      },
      {
        title: "Undoing a shifted input",
        points: [
          t`A rule may give $f(x - 1)$, not $f(x)$: the input is **shifted**, moved by a fixed amount.`,
          t`Take $f(x - 1) = x^2$. Name the input $t = x - 1$, so $x = t + 1$.`,
          t`Put $t + 1$ for $x$ on the right: $f(t) = (t + 1)^2 = t^2 + 2t + 1$.`,
          t`The letter does not matter, so $f(x) = x^2 + 2x + 1$.`,
          t`It is not $x^2 + 1$: shifting the input does not shift the output by the same amount.`,
          t`A scaled input works the same way: from $f(3x)$, put $t = 3x$, so $x = \frac{t}{3}$.`,
        ],
      },
      {
        title: "Four standard forms",
        points: [
          t`$f(x + y) = f(x) + f(y)$, sums to sums, is met by $f(x) = kx$.`,
          t`$f(x + y) = f(x)f(y)$, sums to products, is met by $f(x) = a^x$, as $a^{x + y} = a^x a^y$.`,
          t`$f(xy) = f(x)f(y)$, products to products, is met by $f(x) = x^n$, as $(xy)^n = x^n y^n$.`,
          t`$f(xy) = f(x) + f(y)$, products to sums, is met by $f(x) = k \log x$.`,
          t`Read both sides: the left says $x + y$ or $xy$, the right says sum or product.`,
          t`These are the answers NDA expects; one given value then fixes $k$, $a$ or $n$.`,
        ],
      },
      {
        title: "Using a given value",
        points: [
          t`$f(x + y) = f(x)f(y)$ with $f(3) = 8$: $f(x) = a^x$, so $a^3 = 8$ and $a = 2$.`,
          t`So $f(x) = 2^x$, and $f(-1) = 2^{-1} = \frac{1}{2}$.`,
          t`$f(xy) = f(x)f(y)$ with $f(3) = 27$: $f(x) = x^n$, so $3^n = 27$ and $n = 3$.`,
          t`So $f(x) = x^3$, and $f(-2) = -8$.`,
          t`The same value $f(4) = 16$ gives $4x$, $2^x$ or $x^2$: find the form before using it.`,
          t`Only $kx$ obeys $f(2x) = 2f(x)$; the other forms do not.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $f(x) + 2f(\frac{1}{x}) = 3x$ for all $x \ne 0$, find $f(x)$.`,
      steps: [
        t`Replace $x$ by $\frac{1}{x}$ on both sides: $f(\frac{1}{x}) + 2f(x) = \frac{3}{x}$.`,
        t`Double this second equation: $4f(x) + 2f(\frac{1}{x}) = \frac{6}{x}$.`,
        t`Subtract the first equation, so $f(\frac{1}{x})$ cancels: $3f(x) = \frac{6}{x} - 3x$.`,
        t`Divide by $3$: $f(x) = \frac{2}{x} - x$.`,
        t`Check at $x = 1$: the rule gives $3f(1) = 3$, so $f(1) = 1$, and $\frac{2}{1} - 1 = 1$.`,
      ],
      answer: t`$f(x) = \frac{2}{x} - x$, for $x \ne 0$.`,
    },
    visualSpec: t`Choose a rule such as $f(x + y) = f(x)f(y)$ and a value $f(2)$, and watch the four forms $kx$, $a^x$, $x^n$ and $k \log x$ try to fit it, with only one passing.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Takes $f$ of a changed input as $f(x)$ itself: $f(\frac{1}{x})$, $f(1 - x)$ or $f(x + 1)$ read as $f(x)$.`,
      remediation: t`$f(\frac{1}{x})$ is the output at a different input, so it is a new unknown, not $f(x)$. Replace $x$ by $\frac{1}{x}$ to get a second equation; for $f(x + 1)$, put $t = x + 1$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C12-M2",
      mistake: t`Undoes a shift the wrong way: from $f(x + 1) = h(x)$, puts $x + 1$ for $x$ instead of $x - 1$.`,
      remediation: t`Let $t = x + 1$, so $x = t - 1$, and put $t - 1$ for $x$ on the right. For $f(2x)$, put $\frac{x}{2}$, not $2x$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C12-M3",
      mistake: t`Thinks a change to the input passes straight to the output: $f(x + 1) = f(x) + 1$, $f(2x) = 2f(x)$, $f(\frac{1}{2}) = \frac{1}{4}f(2)$.`,
      remediation: t`Changing the input does not change the output by the same amount: only $f(x) = kx$ obeys $f(2x) = 2f(x)$. Undo a shift by naming the input, and find a rule's form before using a value.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C12-M4",
      mistake: t`Subtracts the two equations as they stand and reads the result as $f(x)$, though $f(\frac{1}{x})$ or $f(1 - x)$ is still in it.`,
      remediation: t`First multiply so the partner has the same coefficient in both equations, then subtract: only then is $f(x)$ alone.`,
      fallback: { kind: "ext", topic: "simultaneous linear equations" },
    },
    {
      id: "C12-M5",
      mistake: t`Mixes up the power and exponential forms: takes $f(xy) = f(x)f(y)$ as $a^x$, and $f(x + y) = f(x)f(y)$ as $x^n$.`,
      remediation: t`Read the left side: $f(x + y)$ with a product is $a^x$, since $a^{x + y} = a^x a^y$; $f(xy)$ with a product is $x^n$, since $(xy)^n = x^n y^n$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C12-M6",
      mistake: t`Solves the pair but reports the partner, $f(\frac{1}{x})$ or $f(1 - x)$, as $f(x)$.`,
      remediation: t`Cancel the partner, so the unknown left is $f(x)$. Then check the answer in the given equation.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C12-M1 on a standard-form item needs the asked input to be the reciprocal of the given one ($f(2)$ given, $f(\frac{1}{2})$ asked).`,
    t`C12-M3 gives the key for the additive form $f(x + y) = f(x) + f(y)$; diagnose it with a shifted input or the power or exponential form.`,
    t`C12-M4 needs unequal coefficients on $f(x)$ and its partner; C12-M5 acts only on the power and exponential forms.`,
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Apr Q80" },
      stem: t`If $2f(x) + f(1 - x) = x$ for all real $x$, then $f(x)$ equals`,
      verify: { kind: "value", inputs: { u: "x" }, params: { ask: "pair", a: "2", b: "1", g: "1 - x", h: "x" } },
      options: [
        { key: "A", text: t`$\frac{x}{3}$`, correct: false, misconceptionId: "C12-M1", value: "x/3" },
        { key: "B", text: t`$2x - 1$`, correct: false, misconceptionId: "C12-M4", value: "2*x - 1" },
        { key: "C", text: t`$\frac{2}{3} - x$`, correct: false, misconceptionId: "C12-M6", value: "2/3 - x" },
        { key: "D", text: t`$x - \frac{1}{3}$`, correct: true, value: "x - 1/3" },
      ],
      solution: {
        steps: [
          t`Replace $x$ by $1 - x$: $2f(1 - x) + f(x) = 1 - x$.`,
          t`Double the given equation and subtract this one: $4f(x) - f(x) = 2x - (1 - x)$.`,
          t`So $3f(x) = 3x - 1$, and $f(x) = x - \frac{1}{3}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q67" },
      stem: t`If $4f(x) - f\left(\frac{1}{x}\right)$ $= \left(2x + \frac{1}{x}\right)\left(2x - \frac{1}{x}\right)$ for all $x \ne 0$, then $f(2)$ equals`,
      verify: { kind: "value", inputs: { u: "2" }, params: { ask: "pair", a: "4", b: "-1", g: "1/x", h: "(2*x + 1/x)*(2*x - 1/x)" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C12-M6", value: "1/4" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$\frac{21}{4}$`, correct: false, misconceptionId: "C12-M1", value: "21/4" },
        { key: "D", text: t`$\frac{15}{4}$`, correct: false, misconceptionId: "C12-M4", value: "15/4" },
      ],
      solution: {
        steps: [
          t`The right side is $4x^2 - \frac{1}{x^2}$. At $x = 2$: $4f(2) - f(\frac{1}{2}) = \frac{63}{4}$.`,
          t`At $x = \frac{1}{2}$: $4f(\frac{1}{2}) - f(2) = 1 - 4 = -3$.`,
          t`Multiply the first by $4$ and add the second: $16f(2) - f(2) = 63 - 3$.`,
          t`So $15f(2) = 60$, and $f(2) = 4$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q51" },
      stem: t`If $f(x + 1) = x^2 - 3x + 2$ for all real $x$, then $f(x)$ equals`,
      verify: { kind: "value", inputs: { u: "x" }, params: { ask: "shift", inner: "x + 1", h: "x**2 - 3*x + 2" } },
      options: [
        { key: "A", text: t`$x^2 - 3x + 1$`, correct: false, misconceptionId: "C12-M3", value: "x**2 - 3*x + 1" },
        { key: "B", text: t`$x^2 - 5x + 6$`, correct: true, value: "x**2 - 5*x + 6" },
        { key: "C", text: t`$x^2 - 3x + 2$`, correct: false, misconceptionId: "C12-M1", value: "x**2 - 3*x + 2" },
        { key: "D", text: t`$x^2 - x$`, correct: false, misconceptionId: "C12-M2", value: "x*(x - 1)" },
      ],
      solution: {
        steps: [
          t`Let $t = x + 1$, so $x = t - 1$: $f(t) = (t - 1)^2 - 3(t - 1) + 2$.`,
          t`Expand: $t^2 - 2t + 1 - 3t + 3 + 2$ $= t^2 - 5t + 6$.`,
          t`Rename $t$ as $x$: $f(x) = x^2 - 5x + 6$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q76" },
      stem: t`If $f(2x) = 4x^2 + 1$ for all real $x$, then $f(x)$ equals`,
      verify: { kind: "value", inputs: { u: "x" }, params: { ask: "shift", inner: "2*x", h: "4*x**2 + 1" } },
      options: [
        { key: "A", text: t`$2x^2 + \frac{1}{2}$`, correct: false, misconceptionId: "C12-M3", value: "2*x**2 + 1/2" },
        { key: "B", text: t`$x^2 + 1$`, correct: true, value: "x**2 + 1" },
        { key: "C", text: t`$4x^2 + 1$`, correct: false, misconceptionId: "C12-M1", value: "4*x**2 + 1" },
        { key: "D", text: t`$16x^2 + 1$`, correct: false, misconceptionId: "C12-M2", value: "16*x**2 + 1" },
      ],
      solution: {
        steps: [
          t`Let $t = 2x$, so $x = \frac{t}{2}$: $f(t) = 4\left(\frac{t}{2}\right)^2 + 1 = t^2 + 1$.`,
          t`Rename $t$ as $x$: $f(x) = x^2 + 1$.`,
          t`Check: $f(2x) = (2x)^2 + 1 = 4x^2 + 1$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q80" },
      stem: t`Let $f(xy) = f(x)f(y)$ for all real $x$, $y$. If $f(2) = 4$, then $f\left(\frac{1}{2}\right)$ equals`,
      verify: { kind: "value", inputs: { u: "1/2" }, params: { ask: "form", form: "pow", a: "2", b: "4" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C12-M3", value: "1" },
        { key: "B", text: t`$\sqrt{2}$`, correct: false, misconceptionId: "C12-M5", value: "sqrt(2)" },
        { key: "C", text: t`$\frac{1}{4}$`, correct: true, value: "1/4" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C12-M1", value: "4" },
      ],
      solution: {
        steps: [
          t`Put $x = y = 1$: $f(1) = f(1)^2$, so $f(1) = 0$ or $1$.`,
          t`$f(1) = 0$ would give $f(2) = f(2)f(1) = 0$, not $4$; so $f(1) = 1$.`,
          t`Put $x = 2$, $y = \frac{1}{2}$: $f(1) = f(2)f(\frac{1}{2})$, so $1 = 4f(\frac{1}{2})$.`,
          t`So $f(\frac{1}{2}) = \frac{1}{4}$, as the form $f(x) = x^2$ also gives.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Sep Q31" },
      stem: t`Let $f(x + y) = f(x)f(y)$ for all real $x$, $y$. If $f(2) = 16$, then $f\left(\frac{1}{2}\right)$ equals`,
      verify: { kind: "value", inputs: { u: "1/2" }, params: { ask: "form", form: "exp", a: "2", b: "16" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C12-M1", value: "16" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C12-M3", value: "4" },
        { key: "C", text: t`$\frac{1}{16}$`, correct: false, misconceptionId: "C12-M5", value: "1/16" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Sums to products means $f(x) = a^x$, so $a^2 = f(2) = 16$ and $a = 4$.`,
          t`So $f(\frac{1}{2}) = 4^{\frac{1}{2}} = 2$.`,
          t`Check with the rule alone: $f(\frac{1}{2})^4 = f(1)^2 = f(2) = 16$, and $f(\frac{1}{2}) = f(\frac{1}{4})^2 \ge 0$, so $f(\frac{1}{2}) = 2$.`,
        ],
      },
    },
  ],
};
