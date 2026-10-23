import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Riya writes $(x + 1)(x + 2) = x^2 + 2$. **Is she right?** Try $x = 1$ on both sides.`,
    reveal: t`No. At $x = 1$ the left side is $2 \times 3 = 6$, but $x^2 + 2 = 3$. She missed two products. Every term must multiply every term: $x^2 + 2x + x + 2$ $= x^2 + 3x + 2$, which gives $6$.`,
  },
  explanation: {
    intuition: [
      t`To multiply two polynomials, multiply **every term** of one by **every term** of the other.`,
      t`So 2 terms times 3 terms gives $2 \times 3 = 6$ products.`,
      t`The **coefficient** is the number in front of a term: in $3x^2$ it is $3$.`,
      t`To multiply two terms, multiply the coefficients and **add** the powers: $3x^2 \times 4x^5 = 12x^7$.`,
      t`Signs follow the number rules: a negative times a negative is positive.`,
      t`Last, add the **like terms**, the terms with the same power of the variable.`,
    ],
    formal: [
      {
        title: "Multiplying two terms",
        points: [
          t`Multiply the coefficients, then add the powers: $x^m \times x^n = x^{m + n}$.`,
          t`Example: $-2a \times 5a^2$ $= (-2 \times 5)a^{1 + 2}$ $= -10a^3$.`,
          t`The powers add; they do not multiply: $a^4 \times a^2 = a^6$, not $a^8$.`,
          t`A number times $x^n$ keeps the power: $7 \times x^3 = 7x^3$.`,
        ],
      },
      {
        title: "A term times a polynomial",
        points: [
          t`Multiply the term into **every** term of the bracket.`,
          t`Example: $3a(a^2 - 4a + 5)$ $= 3a^3 - 12a^2 + 15a$.`,
          t`A negative term carries its sign into every product.`,
          t`Example: $-4(a^2 - 2a - 3)$ $= -4a^2 + 8a + 12$.`,
          t`Negative times negative is positive: $(-4) \times (-3) = 12$.`,
        ],
      },
      {
        title: "Two polynomials",
        points: [
          t`Multiply each term of the first polynomial into the whole second polynomial.`,
          t`Example: $(a^3 + 2)(a^2 - 3a + 1)$.`,
          t`Split it: $a^3(a^2 - 3a + 1)$ $+ 2(a^2 - 3a + 1)$.`,
          t`The rows are $a^5 - 3a^4 + a^3$ and $2a^2 - 6a + 2$.`,
          t`That is 2 terms times 3 terms: six products, none skipped.`,
          t`No two products have the same power, so the product is $a^5 - 3a^4 + a^3$ $+ 2a^2 - 6a + 2$.`,
        ],
      },
      {
        title: "Like terms and the degree",
        points: [
          t`Write every product first, then add the like terms: $4a^3 - 7a^3 = -3a^3$.`,
          t`First times first and last times last is not enough.`,
          t`For example, $(a + 3)(a + 4)$ is not $a^2 + 12$.`,
          t`The middle products $4a + 3a = 7a$ also count: $(a + 3)(a + 4)$ $= a^2 + 7a + 12$.`,
          t`The degree of the product is the sum of the two degrees.`,
          t`A degree 3 polynomial times a degree 2 one has degree $3 + 2 = 5$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Multiply: $(2a^2 - 3)(a^3 + 4a - 1)$.`,
      steps: [
        t`Split the first polynomial: $2a^2(a^3 + 4a - 1)$ $- 3(a^3 + 4a - 1)$.`,
        t`First row: $2a^2 \times a^3 = 2a^5$, so the row is $2a^5 + 8a^3 - 2a^2$.`,
        t`Second row: $-3$ multiplies every term, and $(-3) \times (-1) = 3$. The row is $-3a^3 - 12a + 3$.`,
        t`Add the like terms: $8a^3 - 3a^3 = 5a^3$.`,
        t`The product has degree $2 + 3 = 5$, as it should.`,
      ],
      answer: t`$2a^5 + 5a^3 - 2a^2 - 12a + 3$`,
    },
    visualSpec: t`A grid with the terms of one polynomial down the side and the other's along the top: each cell fills with its product, and cells with the same power light up in one colour before they are added.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Multiplies the powers when two terms multiply, so x^5 × x^3 = x^15",
      remediation: t`When two terms multiply, their powers **add**: $x^m \times x^n = x^{m + n}$, so $a^4 \times a^3 = a^7$, not $a^{12}$.`,
      fallback: { kind: "ext", topic: "laws of indices (Std VIII)" },
    },
    {
      id: "C04-M2",
      mistake: "Multiplies only first term by first term and last term by last term, so (a + b)(c + d) = ac + bd",
      remediation: "Every term of one polynomial multiplies every term of the other. Two terms times three terms gives **six** products.",
      fallback: { kind: "ext", topic: "multiplying binomials (Std VIII)" },
    },
    {
      id: "C04-M3",
      mistake: "Takes a negative term times a negative term as negative",
      remediation: t`A negative times a negative is **positive**: $(-5) \times (-2) = +10$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Multiplies the term outside the bracket into the first term inside only, copying the rest",
      remediation: t`The term outside multiplies **every** term inside: $a(b + c - d) = ab + ac - ad$.`,
      fallback: { kind: "ext", topic: "multiplying a polynomial by a monomial (Std VIII)" },
    },
    {
      id: "C04-M5",
      mistake: "Lets a negative term's minus sign reach only the first term of the bracket",
      remediation: t`A negative term multiplies every term in the bracket, sign and all: $-3(a^2 + a + 2)$ $= -3a^2 - 3a - 6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Multiplies only the first term of the first polynomial into the second, forgetting the other terms' rows",
      remediation: "Every term of the first polynomial gets its own row. Multiply the second polynomial by each of them, then add the rows.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M2 and C04-M6 need two or more terms in the first factor (C04-M2 in both); C04-M4 only a single term times a polynomial.",
    "C04-M3 applies only where a negative term meets a negative term; C04-M5 only where the first factor has a negative term.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q4(i)" },
      stem: t`Multiply: $-2x\left(x^2 + 3x - 1\right)$`,
      verify: { kind: "value", inputs: {  }, params: { P: ["-2*x"], Q: ["x**2", "3*x", "-1"], var: "x", ask: "product" } },
      options: [
        { key: "A", text: t`$-2x^3 + 3x - 1$`, correct: false, misconceptionId: "C04-M4", value: "-2*x**3 + 3*x - 1" },
        { key: "B", text: t`$-2x^3 + 6x^2 - 2x$`, correct: false, misconceptionId: "C04-M5", value: "2*x*(-x**2 + 3*x - 1)" },
        { key: "C", text: t`$-2x^3 - 6x^2 + 2x$`, correct: true, value: "2*x*(-x**2 - 3*x + 1)" },
        { key: "D", text: t`$-2x^3 - 6x^2 - 2x$`, correct: false, misconceptionId: "C04-M3", value: "2*x*(-x**2 - 3*x - 1)" },
      ],
      solution: {
        steps: [
          t`Multiply $-2x$ into every term: $-2x \times x^2 = -2x^3$ and $-2x \times 3x = -6x^2$.`,
          t`Then $(-2x) \times (-1) = 2x$: a negative times a negative is positive.`,
          t`So the product is $-2x^3 - 6x^2 + 2x$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q4(ii)" },
      stem: t`Multiply: $\left(x^5 - 1\right)\left(x^3 + 2x^2 + 2\right)$`,
      verify: { kind: "value", inputs: {  }, params: { P: ["x**5", "-1"], Q: ["x**3", "2*x**2", "2"], var: "x", ask: "product" } },
      options: [
        { key: "A", text: t`$x^{15} + 2x^{10} + 2x^5 - x^3 - 2x^2 - 2$`, correct: false, misconceptionId: "C04-M1", value: "x**15 + 2*x**10 + 2*x**5 - x**3 - 2*x**2 - 2" },
        { key: "B", text: t`$x^8 - 2$`, correct: false, misconceptionId: "C04-M2", value: "x**8 - 2" },
        { key: "C", text: t`$x^8 + 2x^7 + 2x^5 - x^3 + 2x^2 + 2$`, correct: false, misconceptionId: "C04-M5", value: "x**8 + 2*x**7 + 2*x**5 - x**3 + 2*x**2 + 2" },
        { key: "D", text: t`$x^8 + 2x^7 + 2x^5 - x^3 - 2x^2 - 2$`, correct: true, value: "x**8 + 2*x**7 + 2*x**5 - x**3 - 2*x**2 - 2" },
      ],
      solution: {
        steps: [
          t`Split: $x^5(x^3 + 2x^2 + 2)$ $- 1(x^3 + 2x^2 + 2)$.`,
          t`First row: $x^8 + 2x^7 + 2x^5$ (the powers add: $5 + 3 = 8$).`,
          t`Second row: $-x^3 - 2x^2 - 2$. No two products are like terms.`,
          t`So the product is $x^8 + 2x^7 + 2x^5$ $- x^3 - 2x^2 - 2$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.2 SolvedEx.3" },
      stem: t`Multiply: $\left(m^2 - 5\right)\left(m^3 + 2m - 2\right)$`,
      verify: { kind: "value", inputs: {  }, params: { P: ["m**2", "-5"], Q: ["m**3", "2*m", "-2"], var: "m", ask: "product" } },
      options: [
        { key: "A", text: t`$m^5 - 3m^3 - 2m^2 - 10m - 10$`, correct: false, misconceptionId: "C04-M3", value: "m**5 - 3*m**3 - 2*m**2 - 10*m - 10" },
        { key: "B", text: t`$m^5 + 2m^3 - 2m^2$`, correct: false, misconceptionId: "C04-M6", value: "m**2*(m**3 + 2*m - 2)" },
        { key: "C", text: t`$m^5 - 3m^3 - 2m^2 - 10m + 10$`, correct: true, value: "m**5 - 3*m**3 - 2*m**2 - 10*m + 10" },
        { key: "D", text: t`$m^6 - 5m^3 - 10m + 10$`, correct: false, misconceptionId: "C04-M1", value: "m**6 - 5*m**3 - 10*m + 10" },
      ],
      solution: {
        steps: [
          t`Split: $m^2(m^3 + 2m - 2)$ $- 5(m^3 + 2m - 2)$.`,
          t`Rows: $m^5 + 2m^3 - 2m^2$ and $-5m^3 - 10m + 10$.`,
          t`Add the like terms: $2m^3 - 5m^3 = -3m^3$.`,
          t`So the product is $m^5 - 3m^3 - 2m^2$ $- 10m + 10$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q8(i)" },
      stem: t`Multiply $\left(m^3 - 2m + 3\right)$ by $\left(m^4 - 2m^2 + 3m + 2\right)$. What is the coefficient of $m^3$ in the product?`,
      verify: { kind: "value", inputs: {  }, params: { P: ["m**3", "-2*m", "3"], Q: ["m**4", "-2*m**2", "3*m", "2"], var: "m", ask: "coef", k: "3" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C04-M2", value: "0" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C04-M3", value: "-2" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C04-M6", value: "2" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Find every pair of terms whose powers add to $3$.`,
          t`$m^3 \times 2 = 2m^3$ and $(-2m) \times (-2m^2) = 4m^3$.`,
          t`The term $3$ would need an $m^3$ term in the second bracket, and there is none.`,
          t`So the coefficient of $m^3$ is $2 + 4 = 6$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q8(ii)" },
      stem: t`Multiply: $\left(5m^3 - 2\right)\left(m^2 - m + 3\right)$`,
      verify: { kind: "value", inputs: {  }, params: { P: ["5*m**3", "-2"], Q: ["m**2", "-m", "3"], var: "m", ask: "product" } },
      options: [
        { key: "A", text: t`$5m^5 - 5m^4 + 15m^3$`, correct: false, misconceptionId: "C04-M6", value: "5*m**3*(m**2 - m + 3)" },
        { key: "B", text: t`$5m^5 - 5m^4 + 15m^3 - 2m^2 + 2m - 6$`, correct: true, value: "5*m**5 - 5*m**4 + 15*m**3 - 2*m**2 + 2*m - 6" },
        { key: "C", text: t`$5m^5 - 6$`, correct: false, misconceptionId: "C04-M2", value: "5*m**5 - 6" },
        { key: "D", text: t`$5m^5 - 5m^4 + 15m^3 - 2m^2 - 2m - 6$`, correct: false, misconceptionId: "C04-M3", value: "5*m**5 - 5*m**4 + 15*m**3 - 2*m**2 - 2*m - 6" },
      ],
      solution: {
        steps: [
          t`Split: $5m^3(m^2 - m + 3)$ $- 2(m^2 - m + 3)$.`,
          t`First row: $5m^5 - 5m^4 + 15m^3$.`,
          t`Second row: $-2m^2 + 2m - 6$, since $(-2) \times (-m) = 2m$.`,
          t`So the product is $5m^5 - 5m^4 + 15m^3$ $- 2m^2 + 2m - 6$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.2 Q4(iii)" },
      stem: t`Multiply: $\left(2y + 1\right)\left(y^2 - 2y^3 + 3y\right)$`,
      verify: { kind: "value", inputs: {  }, params: { P: ["2*y", "1"], Q: ["y**2", "-2*y**3", "3*y"], var: "y", ask: "product" } },
      options: [
        { key: "A", text: t`$-4y^4 + 7y^2 + 3y$`, correct: true, value: "y*(-4*y**3 + 7*y + 3)" },
        { key: "B", text: t`$-6y^3 + 3y^2 + 9y$`, correct: false, misconceptionId: "C04-M1", value: "3*y*(-2*y**2 + y + 3)" },
        { key: "C", text: t`$2y^3 + 3y$`, correct: false, misconceptionId: "C04-M2", value: "y*(2*y**2 + 3)" },
        { key: "D", text: t`$-4y^4 + 2y^3 + 6y^2$`, correct: false, misconceptionId: "C04-M6", value: "2*y**2*(-2*y**2 + y + 3)" },
      ],
      solution: {
        steps: [
          t`Split: $2y(y^2 - 2y^3 + 3y)$ $+ 1(y^2 - 2y^3 + 3y)$.`,
          t`Rows: $2y^3 - 4y^4 + 6y^2$ and $y^2 - 2y^3 + 3y$.`,
          t`Add the like terms: $2y^3 - 2y^3 = 0$ and $6y^2 + y^2 = 7y^2$.`,
          t`So the product is $-4y^4 + 7y^2 + 3y$.`,
        ],
      },
    },
  ],
};
