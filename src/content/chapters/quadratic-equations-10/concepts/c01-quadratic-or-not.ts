import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`$x^2 - 2x + 5 = x^2$ has an $x^2$ in it. **Is it a quadratic equation?**`,
    reveal: t`No. Take $x^2$ from both sides: $-2x + 5 = 0$. The highest power left is $1$, so it is a linear equation. Always simplify before you decide.`,
  },
  explanation: {
    intuition: [
      t`The **degree** of an equation is the highest power of its variable, the letter you solve for.`,
      t`A **quadratic equation** has degree exactly $2$, like $x^2 + 5x - 2 = 0$.`,
      t`Find the degree only after simplifying, because brackets can hide a square.`,
      t`$(l + 2)(l - 5) = 0$ shows no square, but it is $l^2 - 3l - 10 = 0$.`,
      t`A square can also cancel away, and then the equation is not quadratic.`,
      t`Once simplified, every quadratic equation can be written as $ax^2 + bx + c = 0$.`,
    ],
    formal: [
      {
        title: "The standard form",
        points: [
          t`The **standard form** of a quadratic equation is $ax^2 + bx + c = 0$.`,
          t`Here $a$, $b$, $c$ are real numbers and $a \neq 0$.`,
          t`$a$ is the **coefficient** of $x^2$, the number multiplying $x^2$.`,
          t`$b$ is the coefficient of $x$, and $c$ is the **constant term**, the number alone.`,
          t`If $a = 0$, the $x^2$ term vanishes and the equation is linear.`,
          t`$b$ or $c$ may be $0$: $9y^2 + 5 = 0$ is quadratic with $b = 0$.`,
        ],
      },
      {
        title: "Simplify, then decide",
        points: [
          t`**Expand** every bracket, keeping the middle term: $(x + 3)^2 = x^2 + 6x + 9$.`,
          t`**Transpose** every term to the left: a term changes its sign when it crosses $=$.`,
          t`**Combine** like terms by adding their coefficients.`,
          t`A power cancels only when it has the same coefficient on both sides.`,
          t`In $l^3 + l^2 = 2l^3 + 1$, the cubes leave $-l^3$: degree $3$, not quadratic.`,
          t`Then read the highest power: exactly $2$ means quadratic.`,
        ],
      },
      {
        title: "A variable in the denominator",
        points: [
          t`If the variable is in a **denominator**, the bottom of a fraction, clear it first.`,
          t`Multiply **every** term on both sides by the variable; it cannot be $0$ there.`,
          t`$y^2 + \dfrac{1}{y} = 2$ becomes $y^3 + 1 = 2y$.`,
          t`Its highest power is $3$, so it is not quadratic.`,
          t`Never just drop the fraction term: clearing it can raise the degree.`,
        ],
      },
      {
        title: "Reading a, b and c",
        points: [
          t`Write the terms in order: the $x^2$ term, the $x$ term, then the number.`,
          t`Each coefficient keeps its sign: $3x^2 - 5x + 3 = 0$ has $b = -5$.`,
          t`$b$ always goes with $x$; $c$ is the number standing alone.`,
          t`A missing term has coefficient $0$: $y^2 - 7y = 0$ has $c = 0$.`,
          t`If $a$ comes out negative, multiply the whole equation by $-1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is $x + \dfrac{1}{x} = -2$ a quadratic equation? If it is, find $a$, $b$ and $c$.`,
      steps: [
        t`$x$ is in a denominator, so multiply every term by $x$: $x^2 + 1 = -2x$.`,
        t`Transpose $-2x$ to the left, where it becomes $+2x$: $x^2 + 2x + 1 = 0$.`,
        t`The highest power of $x$ is $2$, so it is a quadratic equation.`,
        t`Compare with $ax^2 + bx + c = 0$: $a = 1$, $b = 2$, $c = 1$.`,
      ],
      answer: t`Yes: $x^2 + 2x + 1 = 0$, with $a = 1$, $b = 2$, $c = 1$.`,
    },
    visualSpec: t`A term sorter: drag terms across the equals sign, watch their signs flip, and see the degree and $a$, $b$, $c$ update.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Ignores the terms with the variable in a denominator and judges the degree from the rest.",
      remediation: "Don't drop a fraction term. Multiply every term by the variable first, then find the highest power.",
      fallback: { kind: "ext", topic: "clearing fractions in an equation" },
    },
    {
      id: "C01-M2",
      mistake: t`Moves terms across $=$ without changing their signs.`,
      remediation: t`A term that crosses $=$ changes its sign: $+3$ becomes $-3$, and $-x$ becomes $+x$.`,
      fallback: { kind: "ext", topic: "transposing terms in an equation" },
    },
    {
      id: "C01-M3",
      mistake: "Cancels the highest power whenever it appears on both sides, even with different coefficients.",
      remediation: t`Like terms combine by their coefficients: $5x^2$ on the left and $2x^2$ on the right leave $3x^2$, not $0$.`,
      fallback: { kind: "ext", topic: "adding and subtracting like terms" },
    },
    {
      id: "C01-M4",
      mistake: t`Squares a bracket term by term and leaves out the middle term: $(x - 1)^2 = x^2 + 1$.`,
      remediation: t`Use $(a + b)^2 = a^2 + 2ab + b^2$ and $(a - b)^2 = a^2 - 2ab + b^2$: keep the middle term.`,
      fallback: { kind: "ext", topic: "expanding (a + b)^2 and (a - b)^2 (Std IX Polynomials)" },
    },
    {
      id: "C01-M5",
      mistake: "Drops the minus signs when writing the coefficients.",
      remediation: t`Each coefficient keeps the sign in front of its term: $-4x$ gives the coefficient $-4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Swaps $b$ and $c$: takes the constant term as $b$ and the coefficient of $x$ as $c$.`,
      remediation: t`$b$ is the coefficient of $x$; $c$ is the number with no $x$. Write the terms in the order $x^2$, $x$, number.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M3 gives the key when the highest power has the same coefficient on both sides; draw items where the coefficients differ.",
    t`C01-M5 gives the key when no coefficient is negative, and C01-M6 when $b = c$.`,
    "C01-M1 needs a fraction term and C01-M4 a squared bracket; elsewhere they give no answer.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.1 (1)" },
      stem: t`Is $\dfrac{5}{x} - 3 = x^2$ a quadratic equation? Clear any fraction and bring every term to the left, with the highest power's coefficient positive. What do you get?`,
      verify: { kind: "value", inputs: { L: "5/x - 3", R: "x**2" }, params: { out: "form" } },
      options: [
        { key: "A", text: t`$x^{3} + 3 x - 5 = 0$, so not quadratic`, correct: true, value: "x**3 + 3*x - 5" },
        { key: "B", text: t`$x^{2} + 3 = 0$, so quadratic`, correct: false, misconceptionId: "C01-M1", value: "x**2 + 3" },
        { key: "C", text: t`$x^{3} - 3 x + 5 = 0$, so not quadratic`, correct: false, misconceptionId: "C01-M2", value: "x**3 - 3*x + 5" },
        { key: "D", text: t`$x^{3} + 3 x + 5 = 0$, so not quadratic`, correct: false, misconceptionId: "C01-M5", value: "x**3 + 3*x + 5" },
      ],
      solution: {
        steps: [
          t`$x$ is in a denominator, so multiply every term by $x$: $5 - 3x = x^3$.`,
          t`Bring every term to the left: $5 - 3x - x^3 = 0$.`,
          t`Multiply by $-1$ to make the highest power positive: $x^3 + 3x - 5 = 0$.`,
          t`The highest power is $3$, so it is not a quadratic equation.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.1 Q.2 (6)" },
      stem: t`Is $m^3 + 3m^2 - 2 = 3m^3$ a quadratic equation? Clear any fraction and bring every term to the left, with the highest power's coefficient positive. What do you get?`,
      verify: { kind: "value", inputs: { L: "m**3 + 3*m**2 - 2", R: "3*m**3" }, params: { out: "form" } },
      options: [
        { key: "A", text: t`$2 m^{3} - 3 m^{2} + 2 = 0$, so not quadratic`, correct: true, value: "2*m**3 - 3*m**2 + 2" },
        { key: "B", text: t`$3 m^{2} - 2 = 0$, so quadratic`, correct: false, misconceptionId: "C01-M3", value: "3*m**2 - 2" },
        { key: "C", text: t`$4 m^{3} + 3 m^{2} - 2 = 0$, so not quadratic`, correct: false, misconceptionId: "C01-M2", value: "4*m**3 + 3*m**2 - 2" },
        { key: "D", text: t`$2 m^{3} + 3 m^{2} + 2 = 0$, so not quadratic`, correct: false, misconceptionId: "C01-M5", value: "2*m**3 + 3*m**2 + 2" },
      ],
      solution: {
        steps: [
          t`Transpose $3m^3$ to the left: $m^3 - 3m^3 + 3m^2 - 2 = 0$.`,
          t`Combine the cubes, $m^3 - 3m^3 = -2m^3$: $-2m^3 + 3m^2 - 2 = 0$.`,
          t`Multiply by $-1$: $2m^3 - 3m^2 + 2 = 0$.`,
          t`The highest power is $3$, so it is not a quadratic equation.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.2 (3)" },
      stem: t`Is $(x + 2)^2 = 2x^2$ a quadratic equation? Clear any fraction and bring every term to the left, with the highest power's coefficient positive. What do you get?`,
      verify: { kind: "value", inputs: { L: "(x + 2)**2", R: "2*x**2" }, params: { out: "form" } },
      options: [
        { key: "A", text: t`$4 x + 4 = 0$, so not quadratic`, correct: false, misconceptionId: "C01-M3", value: "4*x + 4" },
        { key: "B", text: t`$3 x^{2} + 4 x + 4 = 0$, so quadratic`, correct: false, misconceptionId: "C01-M2", value: "3*x**2 + 4*x + 4" },
        { key: "C", text: t`$x^{2} - 4 x - 4 = 0$, so quadratic`, correct: true, value: "x**2 - 4*x - 4" },
        { key: "D", text: t`$x^{2} - 4 = 0$, so quadratic`, correct: false, misconceptionId: "C01-M4", value: "x**2 - 4" },
      ],
      solution: {
        steps: [
          t`Expand: $(x + 2)^2 = x^2 + 4x + 4$.`,
          t`Transpose $2x^2$: $x^2 + 4x + 4 - 2x^2 = 0$, so $-x^2 + 4x + 4 = 0$.`,
          t`Multiply by $-1$: $x^2 - 4x - 4 = 0$.`,
          t`The highest power is $2$, so it is a quadratic equation.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.1 Q.3 (2)" },
      stem: t`Write $(x - 1)^2 = 2x + 3$ in the form $ax^2 + bx + c = 0$ with $a > 0$. What are $a$, $b$ and $c$?`,
      verify: { kind: "value", inputs: { L: "(x - 1)**2", R: "2*x + 3" }, params: { out: "abc" } },
      options: [
        { key: "A", text: t`$a = 1,\ b = -4,\ c = -2$`, correct: true, value: "(1, -4, -2)" },
        { key: "B", text: t`$a = 1,\ b = -2,\ c = -2$`, correct: false, misconceptionId: "C01-M4", value: "(1, -2, -2)" },
        { key: "C", text: t`$a = 1,\ b = 0,\ c = 4$`, correct: false, misconceptionId: "C01-M2", value: "(1, 0, 4)" },
        { key: "D", text: t`$a = 1,\ b = -2,\ c = -4$`, correct: false, misconceptionId: "C01-M6", value: "(1, -2, -4)" },
      ],
      solution: {
        steps: [
          t`Expand: $(x - 1)^2 = x^2 - 2x + 1$.`,
          t`Transpose $2x + 3$: $x^2 - 2x + 1 - 2x - 3 = 0$.`,
          t`Combine like terms: $x^2 - 4x - 2 = 0$.`,
          t`So $a = 1$, $b = -4$, $c = -2$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q1(vi)" },
      stem: t`Write $2x^2 - 3 = x$ in the form $ax^2 + bx + c = 0$ with $a > 0$. What are $a$, $b$ and $c$?`,
      verify: { kind: "value", inputs: { L: "2*x**2 - 3", R: "x" }, params: { out: "abc" } },
      options: [
        { key: "A", text: t`$a = 2,\ b = -1,\ c = -3$`, correct: true, value: "(2, -1, -3)" },
        { key: "B", text: t`$a = 2,\ b = 1,\ c = -3$`, correct: false, misconceptionId: "C01-M2", value: "(2, 1, -3)" },
        { key: "C", text: t`$a = 2,\ b = 1,\ c = 3$`, correct: false, misconceptionId: "C01-M5", value: "(2, 1, 3)" },
        { key: "D", text: t`$a = 2,\ b = -3,\ c = -1$`, correct: false, misconceptionId: "C01-M6", value: "(2, -3, -1)" },
      ],
      solution: {
        steps: [
          t`Transpose $x$ to the left, where it becomes $-x$: $2x^2 - 3 - x = 0$.`,
          t`Write the terms in order: $2x^2 - x - 3 = 0$.`,
          t`So $a = 2$, $b = -1$, $c = -3$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2019/Q2(A)(ii)" },
      stem: t`Write the quadratic equation $x^2 - 7 = -10x$ in the form $ax^2 + bx + c = 0$ with $a > 0$. What are $a$, $b$ and $c$?`,
      verify: { kind: "value", inputs: { L: "x**2 - 7", R: "-10*x" }, params: { out: "abc" } },
      options: [
        { key: "A", text: t`$a = 1,\ b = 10,\ c = 7$`, correct: false, misconceptionId: "C01-M5", value: "(1, 10, 7)" },
        { key: "B", text: t`$a = 1,\ b = -7,\ c = 10$`, correct: false, misconceptionId: "C01-M6", value: "(1, -7, 10)" },
        { key: "C", text: t`$a = 1,\ b = 10,\ c = -7$`, correct: true, value: "(1, 10, -7)" },
        { key: "D", text: t`$a = 1,\ b = -10,\ c = -7$`, correct: false, misconceptionId: "C01-M2", value: "(1, -10, -7)" },
      ],
      solution: {
        steps: [
          t`Transpose $-10x$ to the left, where it becomes $+10x$: $x^2 - 7 + 10x = 0$.`,
          t`Write the terms in order: $x^2 + 10x - 7 = 0$.`,
          t`So $a = 1$, $b = 10$, $c = -7$.`,
        ],
      },
    },
  ],
};
