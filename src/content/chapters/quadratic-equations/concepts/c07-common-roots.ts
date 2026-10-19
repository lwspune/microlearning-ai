import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`The equations $x^2 - 5x + 6 = 0$ and $x^2 - 7x + 12 = 0$ share one root. **Can you find it without solving either equation?**`,
    reveal: t`Subtract one from the other: $(x^2 - 5x + 6) - (x^2 - 7x + 12)$ $= 2x - 6$. The shared root makes both equations zero, so it makes $2x - 6$ zero too: $x = 3$. Check: $9 - 15 + 6 = 0$ and $9 - 21 + 12 = 0$.`,
  },
  explanation: {
    intuition: [
      t`A **root** of an equation is a value of $x$ that makes it true.`,
      t`Two quadratic equations can share a root: a **common root** makes both of them true at once.`,
      t`At a common root both equations equal zero, so their difference is zero there too.`,
      t`Once the $x^2$ terms match, subtracting cancels them and leaves a simple linear equation.`,
      t`Its solution is the only candidate for the common root.`,
      t`If both roots are shared, one equation is just a multiple of the other.`,
    ],
    formal: [
      {
        title: "Finding one common root",
        points: [
          t`Take $a_1x^2 + b_1x + c_1 = 0$ and $a_2x^2 + b_2x + c_2 = 0$, with common root $\alpha$.`,
          t`Then $a_1\alpha^2 + b_1\alpha + c_1 = 0$ and $a_2\alpha^2 + b_2\alpha + c_2 = 0$ both hold.`,
          t`Multiply the first by $a_2$ and the second by $a_1$, so both $\alpha^2$ terms become $a_1a_2\alpha^2$.`,
          t`Subtract: the $\alpha^2$ terms cancel and a linear equation in $\alpha$ is left.`,
          t`Solve it, then check the value in both equations.`,
        ],
      },
      {
        title: "An example pair",
        points: [
          t`Take $x^2 - 3x + 2 = 0$ and $2x^2 - 5x + 2 = 0$.`,
          t`Twice the first is $2x^2 - 6x + 4 = 0$; now the $x^2$ terms match.`,
          t`Subtract the second: $(2x^2 - 6x + 4) - (2x^2 - 5x + 2)$ $= -x + 2$.`,
          t`So $-x + 2 = 0$, and the common root is $x = 2$.`,
          t`Check: $4 - 6 + 2 = 0$ and $8 - 10 + 2 = 0$.`,
        ],
      },
      {
        title: "A parameter for a common root",
        points: [
          t`A **parameter** is a letter such as $k$ standing for an unknown number in the equation.`,
          t`Take $x^2 + kx - 6 = 0$ and $x^2 + 2kx - 3 = 0$; subtracting leaves $-kx - 3 = 0$.`,
          t`So the common root is $\alpha = -\frac{3}{k}$, written in terms of $k$.`,
          t`Put it in the first equation: $\frac{9}{k^2} - 3 - 6 = 0$, so $k^2 = 1$.`,
          t`Both $k = 1$ (root $-3$) and $k = -1$ (root $3$) work.`,
          t`Keep only the values the question allows, such as $k > 0$ or a non-zero root.`,
        ],
      },
      {
        title: "A check from the coefficients",
        points: [
          t`Eliminating $\alpha$ from the two equations gives one test for a common root:`,
          t`$(c_1a_2 - c_2a_1)^2 =$`,
          t`$(b_1c_2 - b_2c_1)(a_1b_2 - a_2b_1)$.`,
          t`For $x^2 - 3x + 2$ and $2x^2 - 5x + 2$: $2^2 = 4 \times 1$, so they do share a root.`,
          t`Use it to check an answer, not to find the root; it is easy to misremember.`,
        ],
      },
      {
        title: "Both roots common",
        points: [
          t`Multiplying an equation by a non-zero number does not change its roots.`,
          t`So two equations share both roots exactly when one is a multiple of the other.`,
          t`That means the coefficients are in **proportion**: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.`,
          t`They need not be equal: $x^2 - x - 2 = 0$ and $5x^2 - 5x - 10 = 0$ both have roots $2$ and $-1$.`,
          t`To match $Ax^2 + px + q$ to $ax^2 + bx + c$, multiply the second by $\frac{A}{a}$.`,
        ],
      },
      {
        title: "Roots that swap places",
        points: [
          t`Some questions say one value is a root of the first equation and another a root of the second.`,
          t`Substitute each value into its own equation to get two equations.`,
          t`Subtract them: the difference of the two values usually comes out as a factor.`,
          t`If the two values are different, that factor is not zero, so you can cancel it.`,
        ],
      },
    ],
    worked: {
      prompt: t`$n$ is a root of $x^2 + px + m = 0$ and $m$ is a root of $x^2 + px + n = 0$, where $m \neq n$. Find $p + m + n$.`,
      steps: [
        t`Substitute each root into its own equation: $n^2 + pn + m = 0$ and $m^2 + pm + n = 0$.`,
        t`Subtract the second from the first: $(n^2 - m^2) + p(n - m)$ $+ (m - n) = 0$.`,
        t`Each part has the factor $n - m$: $(n - m)(n + m + p - 1) = 0$.`,
        t`As $m \neq n$, $n - m \neq 0$, so $n + m + p - 1 = 0$.`,
      ],
      answer: t`$p + m + n = 1$.`,
    },
    visualSpec: t`Drag the coefficients of two parabolas: when they cross the $x$-axis at the same point the shared root lights up, and when one is a stretch of the other both roots light up.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Taking both roots common to mean the coefficients are equal: $p = b_2$, $q = c_2$`,
      remediation: t`Multiplying an equation by a number keeps its roots, so both roots common means the coefficients are in proportion, $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$, not equal. Match the $x^2$ terms first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Scaling the known equation by the inverse ratio, $\frac{a_2}{A}$ instead of $\frac{A}{a_2}$`,
      remediation: t`If $Ax^2 + px + q$ has the same roots as $a_2x^2 + b_2x + c_2$, it is $\frac{A}{a_2}$ times it. Check that the $x^2$ terms come out equal before reading off $p$ and $q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Taking $p$ as the sum of the roots (times $A$) instead of minus it`,
      remediation: t`For $Ax^2 + px + q = 0$ the sum of the roots is $-\frac{p}{A}$, so $p = -A \times (\text{sum})$; only the product gives $q = A \times (\text{product})$ with no sign change.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M4",
      mistake: t`A sign slip solving the linear equation left after subtracting: $\alpha = \frac{w}{u}$ from $u\alpha + w = 0$`,
      remediation: t`From $u\alpha + w = 0$, $\alpha = -\frac{w}{u}$. Put the common root back into both equations to check it before solving for the parameter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Subtracting the equations as if the $x^2$ terms cancel when their coefficients differ`,
      remediation: t`The $x^2$ terms cancel only when their coefficients are equal. First multiply, for example $2 \times$ the first equation when the second starts with $2x^2$, then subtract.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Keeping every value of the parameter and ignoring the question's condition",
      remediation: t`Solving usually gives more than one value. Test each against the condition in the question ($k > 0$, $k < 0$, a non-zero root) and keep only those that pass.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C07-M1, C07-M2 and C07-M3 apply only when both roots are common (ask both); C07-M4, C07-M5 and C07-M6 only to a parameter for one common root (ask param).",
    t`C07-M5 needs different leading coefficients ($a_1 \neq a_2$); with equal ones the $x^2$ terms really cancel. C07-M2 needs $A \neq a_2$, and C07-M6 needs a condition in the stem.`,
    t`C07-M3 models a student who finds the shared sum and product correctly and then flips the sign of $p$; a student who uses sum $= \frac{b}{a}$ in both equations gets the key.`,
    t`NDA 2024 Sep Q16 (swapped roots) is the worked example: its options ($-1, 0, 1, 2$) don't all come from modelled mistakes.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The equations $x^2 - kx - 15 = 0$ and $2x^2 - 3kx - 20 = 0$ have a common root, and $k > 0$. What is $k$?`,
      verify: { kind: "value", inputs: { a1: "1", b1: "-k", c1: "-15", a2: "2", b2: "-3*k", c2: "-20" }, params: { ask: "param", cond: "pos" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{2}}{2}$`, correct: false, misconceptionId: "C07-M5", value: "sqrt(2)/2" },
        { key: "B", text: t`$\pm 2$`, correct: false, misconceptionId: "C07-M6", value: "{-2, 2}" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$2 \sqrt{5}$`, correct: false, misconceptionId: "C07-M4", value: "2*sqrt(5)" },
      ],
      solution: {
        steps: [
          t`Make the $x^2$ terms match: twice the first is $2x^2 - 2kx - 30 = 0$.`,
          t`Subtract the second: $(2x^2 - 2kx - 30) - (2x^2 - 3kx - 20)$ $= kx - 10$, so the common root is $\alpha = \frac{10}{k}$.`,
          t`Put it in the first equation: $\frac{100}{k^2} - 10 - 15 = 0$, so $k^2 = 4$.`,
          t`So $k = \pm 2$, and $k > 0$ leaves $k = 2$ (common root $5$).`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The equations $x^2 + 5x + 2\lambda = 0$ and $2x^2 + 9x + 3\lambda = 0$ have a non-zero common root. What is $\lambda$?`,
      verify: { kind: "value", inputs: { a1: "1", b1: "5", c1: "2*k", a2: "2", b2: "9", c2: "3*k" }, params: { ask: "param", cond: "nz" } },
      options: [
        { key: "A", text: t`$-7$`, correct: false, misconceptionId: "C07-M4", value: "-7" },
        { key: "B", text: t`$-12$`, correct: false, misconceptionId: "C07-M5", value: "-12" },
        { key: "C", text: t`$0$ or $3$`, correct: false, misconceptionId: "C07-M6", value: "{0, 3}" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`Twice the first is $2x^2 + 10x + 4\lambda = 0$; subtract the second: $(10x - 9x) + (4\lambda - 3\lambda)$ $= x + \lambda$.`,
          t`So the common root is $\alpha = -\lambda$. Put it in the first equation: $\lambda^2 - 5\lambda + 2\lambda = 0$, so $\lambda(\lambda - 3) = 0$.`,
          t`$\lambda = 0$ gives the common root $0$, which is ruled out; so $\lambda = 3$ (common root $-3$).`,
          t`Check: $9 - 15 + 6 = 0$ and $18 - 27 + 9 = 0$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The equations $x^2 + kx - 10 = 0$ and $3x^2 - kx - 6 = 0$ have a common root, and $k < 0$. What is $k$?`,
      verify: { kind: "value", inputs: { a1: "1", b1: "k", c1: "-10", a2: "3", b2: "-k", c2: "-6" }, params: { ask: "param", cond: "neg" } },
      options: [
        { key: "A", text: t`$\pm 3$`, correct: false, misconceptionId: "C07-M6", value: "{-3, 3}" },
        { key: "B", text: t`$-3$`, correct: true, value: "-3" },
        { key: "C", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C07-M4", value: "-3/2" },
        { key: "D", text: t`$- \frac{\sqrt{2}}{2}$`, correct: false, misconceptionId: "C07-M5", value: "-sqrt(2)/2" },
      ],
      solution: {
        steps: [
          t`Three times the first is $3x^2 + 3kx - 30 = 0$; subtract the second: $(3kx + kx) + (-30 + 6)$ $= 4kx - 24$.`,
          t`So the common root is $\alpha = \frac{6}{k}$. Put it in the first equation: $\frac{36}{k^2} + 6 - 10 = 0$, so $k^2 = 9$.`,
          t`So $k = \pm 3$, and $k < 0$ leaves $k = -3$ (common root $-2$).`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The equations $x^2 + px + q = 0$ and $3x^2 - 12x + 6 = 0$ have both roots in common. What are $p$ and $q$?`,
      verify: { kind: "value", inputs: { A: "1", a2: "3", b2: "-12", c2: "6" }, params: { ask: "both" } },
      options: [
        { key: "A", text: t`$p = -4,\ q = 2$`, correct: true, value: "(-4, 2)" },
        { key: "B", text: t`$p = -12,\ q = 6$`, correct: false, misconceptionId: "C07-M1", value: "(-12, 6)" },
        { key: "C", text: t`$p = -36,\ q = 18$`, correct: false, misconceptionId: "C07-M2", value: "(-36, 18)" },
        { key: "D", text: t`$p = 4,\ q = 2$`, correct: false, misconceptionId: "C07-M3", value: "(4, 2)" },
      ],
      solution: {
        steps: [
          t`Both roots common means the coefficients are in proportion: $\frac{1}{3} = \frac{p}{-12} = \frac{q}{6}$.`,
          t`So $x^2 + px + q$ is $\frac{1}{3}$ of $3x^2 - 12x + 6$, that is $x^2 - 4x + 2$.`,
          t`Hence $p = -4$ and $q = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The equations $4x^2 + px + q = 0$ and $2x^2 - 5x + 1 = 0$ have the same roots. What is $p + q$?`,
      verify: { kind: "value", inputs: { A: "4", a2: "2", b2: "-5", c2: "1" }, params: { ask: "both", out: "sum" } },
      options: [
        { key: "A", text: t`$-4$`, correct: false, misconceptionId: "C07-M1", value: "-4" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C07-M2", value: "-2" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C07-M3", value: "12" },
        { key: "D", text: t`$-8$`, correct: true, value: "-8" },
      ],
      solution: {
        steps: [
          t`Same roots means $4x^2 + px + q$ is a multiple of $2x^2 - 5x + 1$; the $x^2$ terms give the factor $\frac{4}{2} = 2$.`,
          t`So $4x^2 + px + q = 4x^2 - 10x + 2$: $p = -10$ and $q = 2$.`,
          t`Hence $p + q = -8$.`,
        ],
      },
    },
  ],
};
