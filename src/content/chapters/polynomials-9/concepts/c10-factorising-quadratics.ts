import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`Multiplying is easy: $(2x + 1)(x + 4)$ $= 2x^2 + 8x + x + 4$ $= 2x^2 + 9x + 4$. **Going back**, how would you know to split $9x$ as $8x + x$?`,
    reveal: t`The two parts multiply to $2 \times 4 = 8$, the first coefficient times the constant. And $8 \times 1 = 8$ with $8 + 1 = 9$. Find those two numbers and the factors follow.`,
  },
  explanation: {
    intuition: [
      t`To **factorise** a polynomial is to write it as a product of simpler polynomials, its **factors**.`,
      t`A **quadratic** polynomial has degree 2: $ax^2 + bx + c$.`,
      t`Here $bx$ is the **middle term** and $c$ is the **constant term**.`,
      t`Multiplying two brackets builds the middle term from two parts.`,
      t`Factorising undoes this: split the middle term back into its two parts.`,
      t`Then group the terms in pairs and take out what each pair has in common.`,
    ],
    formal: [
      {
        title: "Splitting the middle term",
        points: [
          t`For $ax^2 + bx + c$, multiply the first coefficient by the constant: $a \times c$.`,
          t`Find two numbers whose **product** is $a \times c$ and whose **sum** is $b$.`,
          t`Example: $2x^2 + 7x + 6$. Here $a \times c = 2 \times 6 = 12$.`,
          t`$12 = 4 \times 3$ and $4 + 3 = 7$, so the numbers are $4$ and $3$.`,
          t`Write $7x$ as $4x + 3x$: $2x^2 + 7x + 6$ $= 2x^2 + 4x + 3x + 6$.`,
        ],
      },
      {
        title: "Grouping the terms",
        points: [
          t`Take out the common factor of the first two terms: $2x^2 + 4x = 2x(x + 2)$.`,
          t`Take out the common factor of the last two terms: $3x + 6 = 3(x + 2)$.`,
          t`Both groups now share the bracket $(x + 2)$.`,
          t`Take it out: $2x(x + 2) + 3(x + 2)$ $= (x + 2)(2x + 3)$.`,
          t`Check by multiplying: $(x + 2)(2x + 3)$ $= 2x^2 + 7x + 6$.`,
          t`The two numbers $4$ and $3$ are not the constants of the factors. Those come from grouping.`,
        ],
      },
      {
        title: "Getting the signs right",
        points: [
          t`If $a \times c$ is positive, both numbers have the same sign as $b$.`,
          t`If $a \times c$ is negative, the numbers have opposite signs.`,
          t`Example: $5x^2 - 3x - 2$. Here $5 \times (-2) = -10$ $= (-5) \times 2$, and $-5 + 2 = -3$.`,
          t`So $5x^2 - 5x + 2x - 2$ $= 5x(x - 1) + 2(x - 1)$ $= (x - 1)(5x + 2)$.`,
          t`When the second group starts with a minus, take out a negative number.`,
          t`For example, $-4x - 6 = -2(2x + 3)$. The minus stays in the factor $-2$.`,
        ],
      },
      {
        title: "Difference of squares",
        points: [
          t`Use the identity $a^2 - b^2 = (a + b)(a - b)$.`,
          t`Example: $9x^2 - 4$ $= (3x)^2 - 2^2$ $= (3x + 2)(3x - 2)$.`,
          t`$9x^2$ is $(3x)^2$, not $(9x)^2$: take the square root of the coefficient too.`,
          t`$a^2 - b^2$ is not $(a - b)^2$, because $(3x - 2)^2 = 9x^2 - 12x + 4$.`,
          t`Always check a factorisation by multiplying the factors back.`,
        ],
      },
    ],
    worked: {
      prompt: t`Factorise: $6x^2 - 5x - 6$.`,
      steps: [
        t`$a \times c = 6 \times (-6) = -36$. It is negative, so the two numbers have opposite signs.`,
        t`$-36 = (-9) \times 4$ and $-9 + 4 = -5$, so split $-5x$ as $-9x + 4x$.`,
        t`$6x^2 - 5x - 6$ $= 6x^2 - 9x + 4x - 6$.`,
        t`Group: $6x^2 - 9x = 3x(2x - 3)$ and $4x - 6 = 2(2x - 3)$.`,
        t`Take out $(2x - 3)$: $3x(2x - 3) + 2(2x - 3)$ $= (2x - 3)(3x + 2)$.`,
      ],
      answer: t`$(2x - 3)(3x + 2)$`,
    },
    visualSpec: t`Tiles for $ax^2 + bx + c$: a student slides the $x$-strips into two groups and the tiles snap into one rectangle whose sides are the two factors.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Picks two numbers with the right product but the signs swapped, so they add to -b instead of b",
      remediation: t`The two numbers must **add to $b$**, sign included. Check the sum before you split the middle term.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Writes (x + m)(x + n) straight from the two numbers m and n, as for x^2 + bx + c, ignoring the coefficient a",
      remediation: t`When $a \ne 1$, the two numbers only split the middle term. Group the four terms to find the factors; multiply back to check.`,
      fallback: { kind: "ext", topic: "factorising x^2 + bx + c (Std VIII)" },
    },
    {
      id: "C10-M3",
      mistake: "Takes a^2 - b^2 as (a - b)^2",
      remediation: t`$a^2 - b^2 = (a + b)(a - b)$. The square $(a - b)^2$ has a middle term: $a^2 - 2ab + b^2$.`,
      fallback: { kind: "ext", topic: "the identity a^2 - b^2 = (a + b)(a - b) (Std VIII)" },
    },
    {
      id: "C10-M4",
      mistake: "Drops the minus sign of the second group's common factor, writing -4x - 6 as +2(2x + 3)",
      remediation: t`When the second group starts with a minus, take out a negative number: $-4x - 6 = -2(2x + 3)$. The minus goes into the second factor.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Takes the square root of the variable but not of its coefficient, reading 4x^2 as (4x)^2",
      remediation: t`Take the square root of the coefficient too: $4x^2 = (2x)^2$, since $(4x)^2 = 16x^2$.`,
      fallback: { kind: "ext", topic: "laws of indices (Std VIII)" },
    },
    {
      id: "C10-M6",
      mistake: "Puts the constants in the wrong brackets: the first and last terms come out right but the middle term does not",
      remediation: "Multiply your factors back and check the **middle term** too, not only the first and last terms.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C10-M3 and C10-M5 apply only to a difference of squares; C10-M1 and C10-M6 only where there is a middle term.",
    "C10-M4 applies only where the second group's common factor is negative.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.6 SolvedEx.2" },
      stem: t`Factorise: $3x^2 + 7x + 2$`,
      verify: { kind: "value", inputs: {  }, params: { P: "3*x**2 + 7*x + 2", var: "x" } },
      options: [
        { key: "A", text: t`$(x - 2)(3x - 1)$`, correct: false, misconceptionId: "C10-M1", value: "(x - 2)*(3*x - 1)" },
        { key: "B", text: t`$(x + 6)(x + 1)$`, correct: false, misconceptionId: "C10-M2", value: "(x + 1)*(x + 6)" },
        { key: "C", text: t`$(x + 1)(3x + 2)$`, correct: false, misconceptionId: "C10-M6", value: "(x + 1)*(3*x + 2)" },
        { key: "D", text: t`$(x + 2)(3x + 1)$`, correct: true, value: "(x + 2)*(3*x + 1)" },
      ],
      solution: {
        steps: [
          t`$a \times c = 3 \times 2 = 6$ $= 6 \times 1$, and $6 + 1 = 7$.`,
          t`$3x^2 + 7x + 2$ $= 3x^2 + 6x + x + 2$.`,
          t`Group: $3x(x + 2) + 1(x + 2)$.`,
          t`So the factors are $(x + 2)(3x + 1)$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.6 SolvedEx.3" },
      stem: t`Factorise: $63x^2 + 5x - 2$`,
      verify: { kind: "value", inputs: {  }, params: { P: "63*x**2 + 5*x - 2", var: "x", split: "14,-9" } },
      options: [
        { key: "A", text: t`$(7x - 1)(9x + 2)$`, correct: true, value: "(7*x - 1)*(9*x + 2)" },
        { key: "B", text: t`$(7x + 1)(9x - 2)$`, correct: false, misconceptionId: "C10-M1", value: "(7*x + 1)*(9*x - 2)" },
        { key: "C", text: t`$(x + 14)(x - 9)$`, correct: false, misconceptionId: "C10-M2", value: "(x - 9)*(x + 14)" },
        { key: "D", text: t`$(7x + 1)(9x + 2)$`, correct: false, misconceptionId: "C10-M4", value: "(7*x + 1)*(9*x + 2)" },
      ],
      solution: {
        steps: [
          t`$a \times c = 63 \times (-2) = -126$ $= 14 \times (-9)$, and $14 - 9 = 5$.`,
          t`$63x^2 + 5x - 2$ $= 63x^2 + 14x - 9x - 2$.`,
          t`Group: $7x(9x + 2) - 1(9x + 2)$. The second group's factor is $-1$.`,
          t`So the factors are $(9x + 2)(7x - 1)$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.6 SolvedEx.1" },
      stem: t`Factorise: $4x^2 - 25$`,
      verify: { kind: "value", inputs: {  }, params: { P: "4*x**2 - 25", var: "x" } },
      options: [
        { key: "A", text: t`$(4x + 5)(4x - 5)$`, correct: false, misconceptionId: "C10-M5", value: "16*x**2 - 25" },
        { key: "B", text: t`$(2x + 5)(2x - 5)$`, correct: true, value: "4*x**2 - 25" },
        { key: "C", text: t`$(x + 10)(x - 10)$`, correct: false, misconceptionId: "C10-M2", value: "x**2 - 100" },
        { key: "D", text: t`$(2x - 5)^2$`, correct: false, misconceptionId: "C10-M3", value: "(2*x - 5)**2" },
      ],
      solution: {
        steps: [
          t`$4x^2 = (2x)^2$ and $25 = 5^2$.`,
          t`So $4x^2 - 25 = (2x)^2 - 5^2$.`,
          t`By $a^2 - b^2 = (a + b)(a - b)$, the factors are $(2x + 5)(2x - 5)$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.6 Q1(ii)" },
      stem: t`Find the factors of $2m^2 + 5m - 3$.`,
      verify: { kind: "value", inputs: {  }, params: { P: "2*m**2 + 5*m - 3", var: "m", split: "6,-1" } },
      options: [
        { key: "A", text: t`$(m + 3)(2m + 1)$`, correct: false, misconceptionId: "C10-M4", value: "(m + 3)*(2*m + 1)" },
        { key: "B", text: t`$(m - 1)(2m + 3)$`, correct: false, misconceptionId: "C10-M6", value: "(m - 1)*(2*m + 3)" },
        { key: "C", text: t`$(m + 3)(2m - 1)$`, correct: true, value: "(m + 3)*(2*m - 1)" },
        { key: "D", text: t`$(m - 3)(2m + 1)$`, correct: false, misconceptionId: "C10-M1", value: "(m - 3)*(2*m + 1)" },
      ],
      solution: {
        steps: [
          t`$a \times c = 2 \times (-3) = -6$ $= 6 \times (-1)$, and $6 - 1 = 5$.`,
          t`$2m^2 + 5m - 3$ $= 2m^2 + 6m - m - 3$.`,
          t`Group: $2m(m + 3) - 1(m + 3)$.`,
          t`So the factors are $(m + 3)(2m - 1)$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.6 Q1(iii)" },
      stem: t`Find the factors of $12x^2 + 61x + 77$.`,
      verify: { kind: "value", inputs: {  }, params: { P: "12*x**2 + 61*x + 77", var: "x" } },
      options: [
        { key: "A", text: t`$(3x + 7)(4x + 11)$`, correct: true, value: "(3*x + 7)*(4*x + 11)" },
        { key: "B", text: t`$(3x - 7)(4x - 11)$`, correct: false, misconceptionId: "C10-M1", value: "(3*x - 7)*(4*x - 11)" },
        { key: "C", text: t`$(x + 33)(x + 28)$`, correct: false, misconceptionId: "C10-M2", value: "(x + 28)*(x + 33)" },
        { key: "D", text: t`$(3x + 11)(4x + 7)$`, correct: false, misconceptionId: "C10-M6", value: "(3*x + 11)*(4*x + 7)" },
      ],
      solution: {
        steps: [
          t`$a \times c = 12 \times 77 = 924$ $= 28 \times 33$, and $28 + 33 = 61$.`,
          t`$12x^2 + 61x + 77$ $= 12x^2 + 28x + 33x + 77$.`,
          t`Group: $4x(3x + 7) + 11(3x + 7)$.`,
          t`So the factors are $(3x + 7)(4x + 11)$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.6 SolvedEx.1" },
      stem: t`Factorise: $9y^2 - 64$`,
      verify: { kind: "value", inputs: {  }, params: { P: "9*y**2 - 64", var: "y", split: "24,-24" } },
      options: [
        { key: "A", text: t`$(3y + 8)(3y - 8)$`, correct: true, value: "9*y**2 - 64" },
        { key: "B", text: t`$(3y - 8)^2$`, correct: false, misconceptionId: "C10-M3", value: "(3*y - 8)**2" },
        { key: "C", text: t`$(3y + 8)^2$`, correct: false, misconceptionId: "C10-M4", value: "(3*y + 8)**2" },
        { key: "D", text: t`$(9y + 8)(9y - 8)$`, correct: false, misconceptionId: "C10-M5", value: "81*y**2 - 64" },
      ],
      solution: {
        steps: [
          t`$9y^2 = (3y)^2$ and $64 = 8^2$.`,
          t`So $9y^2 - 64 = (3y)^2 - 8^2$.`,
          t`By $a^2 - b^2 = (a + b)(a - b)$, the factors are $(3y + 8)(3y - 8)$.`,
        ],
      },
    },
  ],
};
