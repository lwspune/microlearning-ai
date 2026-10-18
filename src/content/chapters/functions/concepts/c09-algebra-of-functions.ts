import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`Take $f(x) = \sqrt{x}$ and $g(x) = \sqrt{x}$. The rule for $fg$ simplifies to $\sqrt{x} \cdot \sqrt{x} = x$. **So is $(fg)(-4) = -4$?**`,
    reveal: t`No. $f(-4) = \sqrt{-4}$ is not a real number, so $(fg)(-4) = f(-4)\,g(-4)$ has no value. $fg$ exists only where both $f$ and $g$ do: on $[0, \infty)$, not on all of $\mathbb{R}$.`,
  },
  explanation: {
    intuition: [
      t`Two functions $f$ and $g$ can be combined, one input at a time.`,
      t`At an input $x$, find the two outputs $f(x)$ and $g(x)$.`,
      t`Then add, subtract, multiply or divide those two numbers.`,
      t`So $(f + g)(3)$ is just $f(3) + g(3)$.`,
      t`This works only at an $x$ where both outputs exist.`,
      t`And you can never divide by $0$, so $\frac{f}{g}$ also needs $g(x) \ne 0$.`,
    ],
    formal: [
      {
        title: "Four new functions",
        points: [
          t`For functions $f$ and $g$, each rule below holds at every $x$ where both are defined.`,
          t`**Sum:** $(f + g)(x) = f(x) + g(x)$.`,
          t`**Difference:** $(f - g)(x) = f(x) - g(x)$.`,
          t`**Product:** $(fg)(x) = f(x)\,g(x)$.`,
          t`**Quotient:** $\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}$, provided $g(x) \ne 0$.`,
        ],
      },
      {
        title: "Brackets keep the rules whole",
        points: [
          t`Take $f(x) = x^2 + 1$ and $g(x) = x - 3$, and bracket each rule before combining.`,
          t`$(f - g)(x) = (x^2 + 1) - (x - 3)$ $= x^2 - x + 4$.`,
          t`Without brackets, $x^2 + 1 - x - 3$ subtracts only the $x$: the $-3$ should have become $+3$.`,
          t`$(fg)(x) = (x^2 + 1)(x - 3)$; without brackets, $x^2 + 1 \cdot x - 3$ is a different rule.`,
          t`Bracket the input too: $f(2m) = (2m)^2 + 1$ $= 4m^2 + 1$, not $2m^2 + 1$.`,
        ],
      },
      {
        title: "A product, not a composition",
        points: [
          t`$fg$ multiplies the two outputs: $(fg)(x) = f(x) \cdot g(x)$.`,
          t`Putting $g(x)$ into $f$, as in $f(g(x))$, is **composition**, a different operation you meet later.`,
          t`With $f(x) = x^2 + 1$ and $g(x) = x - 3$: $f(1) = 2$ and $g(1) = -2$.`,
          t`So $(fg)(1) = 2 \cdot (-2) = -4$.`,
          t`But $f(g(1)) = f(-2) = 5$: a different number.`,
        ],
      },
      {
        title: "Domain: both must be defined",
        points: [
          t`$D_f$ stands for the domain of $f$: the inputs where $f(x)$ is a real number.`,
          t`$f + g$, $f - g$ and $fg$ need both outputs, so their domain is $D_f \cap D_g$.`,
          t`$\cap$ means the overlap: an $x$ in only one domain gives only one output, with nothing to combine.`,
          t`$\frac{f}{g}$ has domain $D_f \cap D_g$ with every zero of $g$ removed.`,
          t`For $f(x) = \frac{1}{x}$ and $g(x) = x - 2$, $f + g$ has domain $\mathbb{R} - \{0\}$.`,
          t`But $\frac{f}{g}$ also loses $x = 2$, where $g(2) = 0$: its domain is $\mathbb{R} - \{0, 2\}$.`,
        ],
      },
      {
        title: "Find the domain before simplifying",
        points: [
          t`Work out $D_f$ and $D_g$ from $f$ and $g$ first; never read the domain off a simplified rule.`,
          t`With $f(x) = x^2 - 4$ and $g(x) = x - 2$, $\frac{f}{g}$ simplifies to $x + 2$.`,
          t`Yet $g(2) = 0$, so $2$ stays out: the domain is $\mathbb{R} - \{2\}$.`,
          t`Roots too: $\sqrt{x - 5} \cdot \sqrt{x - 7}$ needs $x \ge 5$ and $x \ge 7$, so $x \ge 7$.`,
          t`$\sqrt{(x - 5)(x - 7)}$ also accepts every $x \le 5$: at $x = 0$ it is $\sqrt{35}$.`,
          t`So $\sqrt{u} \cdot \sqrt{v}$ and $\sqrt{uv}$ are different functions.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $f(x) = \sqrt{x + 2}$ and $g(x) = \sqrt{4 - x}$, find the domains of $f + g$ and $\frac{f}{g}$.`,
      steps: [
        t`$\sqrt{x + 2}$ needs $x + 2 \ge 0$: $D_f = [-2, \infty)$.`,
        t`$\sqrt{4 - x}$ needs $4 - x \ge 0$: $D_g = (-\infty, 4]$.`,
        t`$f + g$ needs both: $D_f \cap D_g = [-2, 4]$.`,
        t`$\frac{f}{g}$ also needs $g(x) \ne 0$; $g(4) = 0$, so remove $4$.`,
      ],
      answer: t`The domain of $f + g$ is $[-2, 4]$; the domain of $\frac{f}{g}$ is $[-2, 4)$.`,
      figure: {
        alt: "Four number lines. First x ≥ −2, the domain of f, from −2 to the right, filled at −2. Then x ≤ 4, the domain of g, from 4 to the left, filled at 4. Then their overlap, from −2 to 4 with both ends filled: the domain of f + g. Last the same interval with 4 hollow, since g(4) = 0: the domain of f / g.",
        axes: "none",
        view: { x: [-5.1, 7.1], y: [-0.9, 5.4] },
        elements: [
          { kind: "segment", from: [-4.8, 4.5], to: [6.8, 4.5], tone: "muted", step: 1 },
          { kind: "vector", from: [-2, 4.5], to: [6.8, 4.5], tone: "good", step: 1 },
          { kind: "point", at: [-2, 4.5], tone: "good", step: 1 },
          { kind: "label", at: [-2, 4.5], label: "−2", labelAt: "s", tone: "muted", step: 1 },
          { kind: "label", at: [-4.8, 5], label: "f: x ≥ −2", labelAt: "e", tone: "good", step: 1 },
          { kind: "segment", from: [-4.8, 3], to: [6.8, 3], tone: "muted", step: 2 },
          { kind: "vector", from: [4, 3], to: [-4.8, 3], tone: "good", step: 2 },
          { kind: "point", at: [4, 3], tone: "good", step: 2 },
          { kind: "label", at: [4, 3], label: "4", labelAt: "s", tone: "muted", step: 2 },
          { kind: "label", at: [-4.8, 3.5], label: "g: x ≤ 4", labelAt: "e", tone: "good", step: 2 },
          { kind: "segment", from: [-4.8, 1.5], to: [6.8, 1.5], tone: "muted", step: 3 },
          { kind: "segment", from: [-2, 1.5], to: [4, 1.5], tone: "good", step: 3 },
          { kind: "point", at: [-2, 1.5], tone: "good", step: 3 },
          { kind: "point", at: [4, 1.5], tone: "good", step: 3 },
          { kind: "label", at: [-2, 1.5], label: "−2", labelAt: "s", tone: "muted", step: 3 },
          { kind: "label", at: [4, 1.5], label: "4", labelAt: "s", tone: "muted", step: 3 },
          { kind: "label", at: [-4.8, 2], label: "f + g: both", labelAt: "e", tone: "good", step: 3 },
          { kind: "segment", from: [-4.8, 0], to: [6.8, 0], tone: "muted", step: 4 },
          { kind: "segment", from: [-2, 0], to: [4, 0], tone: "good", step: 4 },
          { kind: "point", at: [-2, 0], tone: "good", step: 4 },
          { kind: "point", at: [4, 0], tone: "bad", hollow: true, step: 4 },
          { kind: "label", at: [-2, 0], label: "−2", labelAt: "s", tone: "muted", step: 4 },
          { kind: "label", at: [4, 0], label: "4", labelAt: "s", tone: "muted", step: 4 },
          { kind: "label", at: [-4.8, 0.5], label: "f / g: g(4) = 0", labelAt: "e", tone: "good", step: 4 },
        ],
      },
    },
    visualSpec: t`Drag the ends of $D_f$ and $D_g$ on two stacked number lines; their overlap lights up as the domain of $f + g$, and each zero of $g$ punches a hole in it for $\frac{f}{g}$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Taking $D_f \cap D_g$ as the domain of $f/g$, without removing the zeros of $g$`,
      remediation: t`A quotient $\frac{f}{g}$ is defined only where $g(x) \ne 0$. After taking the overlap of the two domains, remove every $x$ that makes $g(x) = 0$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M2",
      mistake: "Taking the union of the two domains instead of their overlap",
      remediation: t`$f + g$, $fg$ and $\frac{f}{g}$ need both $f(x)$ and $g(x)$, so $x$ must lie in $D_f$ and in $D_g$: take the intersection $D_f \cap D_g$, not the union.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M3",
      mistake: t`Reading the domain off the combined rule, treating $\sqrt{u}\sqrt{v}$ as $\sqrt{uv}$ and $\sqrt{u}/\sqrt{v}$ as $\sqrt{u/v}$`,
      remediation: t`Find $D_f$ and $D_g$ from $f$ and $g$ separately, before combining. $\sqrt{u} \cdot \sqrt{v}$ needs $u \ge 0$ and $v \ge 0$, while $\sqrt{uv}$ also accepts $u$ and $v$ both negative.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M4",
      mistake: t`Reading $(fg)(x)$ as $f(g(x))$`,
      remediation: t`$(fg)(x)$ means the product $f(x) \cdot g(x)$. Putting $g(x)$ into $f$ is composition, a different function.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Joining the two rules without brackets, so the product or minus reaches only the first term of $g$`,
      remediation: t`Put each rule in brackets before you combine them: $(fg)(x) = (x^2 + 1)(x - 3)$, not $x^2 + 1 \cdot x - 3$.`,
      fallback: { kind: "ext", topic: "using brackets in algebra" },
    },
    {
      id: "C09-M6",
      mistake: t`Putting the input in without brackets: $(-2)^2$ written as $-2^2$, $(3m)^2$ as $3m^2$`,
      remediation: t`Replace $x$ by the whole input, in brackets: $x^2$ at $x = -3$ is $(-3)^2 = 9$, and at $x = 2m$ it is $(2m)^2 = 4m^2$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C09-M3 gives the key when the two radicands point opposite ways, as in $\sqrt{x + 2}/\sqrt{4 - x}$: diagnose it with radicands that can be negative together (C09-Q2, Q3, Q5).`,
    t`C09-M4 gives the key when the outputs of $g$ already lie in $D_f$ (the book's $5x^2 \cdot \sqrt{4 - x}$), and C09-M6 gives the key for a non-negative whole-number input.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.2 SolvedEx.1(iii)" },
      stem: t`If $f(x) = x^2 + 2$ and $g(x) = 5x - 8$, then $(fg)(3m)$ equals:`,
      verify: { kind: "value", inputs: { u: "3*m" }, params: { f: "x**2 + 2", g: "5*x - 8", op: "*", ask: "value" } },
      options: [
        { key: "A", text: t`$9 m^{2} + 30 m - 8$`, correct: false, misconceptionId: "C09-M5", value: "9*m**2 + 30*m - 8" },
        { key: "B", text: t`$45 m^{3} - 24 m^{2} + 30 m - 16$`, correct: false, misconceptionId: "C09-M6", value: "45*m**3 - 24*m**2 + 30*m - 16" },
        { key: "C", text: t`$135 m^{3} - 72 m^{2} + 30 m - 16$`, correct: true, value: "135*m**3 - 72*m**2 + 30*m - 16" },
        { key: "D", text: t`$225 m^{2} - 240 m + 66$`, correct: false, misconceptionId: "C09-M4", value: "225*m**2 - 240*m + 66" },
      ],
      solution: {
        steps: [
          t`$(fg)(3m) = f(3m)\,g(3m)$, a product, not $f(g(3m))$.`,
          t`$f(3m) = (3m)^2 + 2 = 9m^2 + 2$, and $g(3m) = 15m - 8$.`,
          t`$(9m^2 + 2)(15m - 8)$ $= 135m^3 - 72m^2 + 30m - 16$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.2 SolvedEx.2(iii)" },
      stem: t`For $f(x) = \sqrt{x - 1}$ and $g(x) = \sqrt{x - 3}$, the domain of $\dfrac{f}{g}$ is:`,
      verify: { kind: "value", inputs: {  }, params: { f: "sqrt(x - 1)", g: "sqrt(x - 3)", op: "/", ask: "domain" } },
      options: [
        { key: "A", text: t`$\left(3, \infty\right)$`, correct: true, value: "Interval.open(3, oo)" },
        { key: "B", text: t`$\left[3, \infty\right)$`, correct: false, misconceptionId: "C09-M1", value: "Interval(3, oo)" },
        { key: "C", text: t`$\left[1, 3\right) \cup \left(3, \infty\right)$`, correct: false, misconceptionId: "C09-M2", value: "Union(Interval.Ropen(1, 3), Interval.open(3, oo))" },
        { key: "D", text: t`$\left(-\infty, 1\right] \cup \left(3, \infty\right)$`, correct: false, misconceptionId: "C09-M3", value: "Union(Interval(-oo, 1), Interval.open(3, oo))" },
      ],
      solution: {
        steps: [
          t`$\sqrt{x - 1}$ needs $x \ge 1$, and $\sqrt{x - 3}$ needs $x \ge 3$. Both hold for $x \ge 3$.`,
          t`$g(3) = 0$, and a quotient needs $g(x) \ne 0$, so remove $3$.`,
          t`The domain of $\frac{f}{g}$ is $(3, \infty)$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.2 SolvedEx.2(ii)" },
      stem: t`For $f(x) = \sqrt{x - 2}$ and $g(x) = \sqrt{x + 1}$, the domain of $fg$ is:`,
      verify: { kind: "value", inputs: {  }, params: { f: "sqrt(x - 2)", g: "sqrt(x + 1)", op: "*", ask: "domain" } },
      options: [
        { key: "A", text: t`$\left[-1, \infty\right)$`, correct: false, misconceptionId: "C09-M2", value: "Interval(-1, oo)" },
        { key: "B", text: t`$\left(-\infty, -1\right] \cup \left[2, \infty\right)$`, correct: false, misconceptionId: "C09-M3", value: "Union(Interval(-oo, -1), Interval(2, oo))" },
        { key: "C", text: t`$\left[3, \infty\right)$`, correct: false, misconceptionId: "C09-M4", value: "Interval(3, oo)" },
        { key: "D", text: t`$\left[2, \infty\right)$`, correct: true, value: "Interval(2, oo)" },
      ],
      solution: {
        steps: [
          t`$\sqrt{x - 2}$ needs $x \ge 2$: $D_f = [2, \infty)$.`,
          t`$\sqrt{x + 1}$ needs $x \ge -1$: $D_g = [-1, \infty)$.`,
          t`$fg$ needs both: $D_f \cap D_g = [2, \infty)$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.2 Q1(c)" },
      stem: t`If $f(x) = x^2 - 5$ and $g(x) = 2x + 3$, then $(fg)(-2)$ equals:`,
      verify: { kind: "value", inputs: { u: "-2" }, params: { f: "x**2 - 5", g: "2*x + 3", op: "*", ask: "value" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C09-M4", value: "-4" },
        { key: "C", text: t`$27$`, correct: false, misconceptionId: "C09-M5", value: "27" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C09-M6", value: "9" },
      ],
      solution: {
        steps: [
          t`$f(-2) = (-2)^2 - 5 = -1$.`,
          t`$g(-2) = 2(-2) + 3 = -1$.`,
          t`$(fg)(-2) = f(-2)\,g(-2)$ $= (-1)(-1) = 1$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.2 Q1(d)" },
      stem: t`For $f(x) = \sqrt{9 - x^2}$ and $g(x) = \sqrt{x - 1}$, the domain of $\dfrac{f}{g}$ is:`,
      verify: { kind: "value", inputs: {  }, params: { f: "sqrt(9 - x**2)", g: "sqrt(x - 1)", op: "/", ask: "domain" } },
      options: [
        { key: "A", text: t`$\left[-3, 1\right) \cup \left(1, \infty\right)$`, correct: false, misconceptionId: "C09-M2", value: "Union(Interval.Ropen(-3, 1), Interval.open(1, oo))" },
        { key: "B", text: t`$\left(-\infty, -3\right] \cup \left(1, 3\right]$`, correct: false, misconceptionId: "C09-M3", value: "Union(Interval(-oo, -3), Interval.Lopen(1, 3))" },
        { key: "C", text: t`$\left(1, 3\right]$`, correct: true, value: "Interval.Lopen(1, 3)" },
        { key: "D", text: t`$\left[1, 3\right]$`, correct: false, misconceptionId: "C09-M1", value: "Interval(1, 3)" },
      ],
      solution: {
        steps: [
          t`$\sqrt{9 - x^2}$ needs $x^2 \le 9$: $D_f = [-3, 3]$.`,
          t`$\sqrt{x - 1}$ needs $x \ge 1$: $D_g = [1, \infty)$. The overlap is $[1, 3]$.`,
          t`$g(1) = 0$, so remove $1$: the domain of $\frac{f}{g}$ is $(1, 3]$.`,
        ],
      },
    },
  ],
};
