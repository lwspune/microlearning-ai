import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Meera thinks of two whole numbers that add up to $10$. Can you tell which two numbers she has in mind?`,
    reveal: t`Not from this alone. $1$ and $9$, $2$ and $8$, $6$ and $4$ all work. One equation in two unknowns has many solutions. A second fact is needed to fix the pair.`,
  },
  explanation: {
    intuition: [
      t`An **unknown** is a number we don't know yet. We name it by a letter such as $x$ or $y$.`,
      t`An equation in two unknowns, like $x + y = 10$, links two numbers.`,
      t`A **solution** is a pair of values that makes the equation true.`,
      t`$x = 6$, $y = 4$ is a solution, since $6 + 4 = 10$. So is $x = 2$, $y = 8$.`,
      t`Choose any value for $x$, and the equation gives the matching $y$. So there are many solutions.`,
      t`Two such equations together usually allow only one pair. That pair is what we will learn to find.`,
    ],
    formal: [
      {
        title: "Linear equation in two variables",
        points: [
          t`A **variable** is a letter that stands for a number, such as $x$ or $y$.`,
          t`A **linear equation in two variables** can be written as $ax + by + c = 0$.`,
          t`Here $a$, $b$, $c$ are real numbers, and $a$ and $b$ are not both zero.`,
          t`Each variable has index $1$, and $x$ and $y$ are never multiplied together.`,
          t`So $2x - y = 3$ and $\frac{x}{2} + y = 4$ are linear equations in two variables.`,
          t`$x^2 + y = 5$ and $xy = 6$ are not: each has a term of degree $2$.`,
        ],
      },
      {
        title: "Solutions as ordered pairs",
        points: [
          t`A **solution** is a value of $x$ and a value of $y$ that together make the equation true.`,
          t`We write it as an **ordered pair** $(x, y)$: the value of $x$ first, then $y$.`,
          t`$(1, 4)$ means $x = 1$ and $y = 4$.`,
          t`$(1, 4)$ is a solution of $3x + y = 7$, since $3 \times 1 + 4 = 7$.`,
          t`$(4, 1)$ is a different pair: $3 \times 4 + 1 = 13$, so it is not a solution.`,
          t`To check a pair, put both values in and see if the two sides are equal.`,
        ],
      },
      {
        title: "Finding a solution",
        points: [
          t`Choose a value for one variable. The equation then has only one unknown.`,
          t`Take $x - 2y = 1$ and choose $y = 3$.`,
          t`Then $x - 6 = 1$.`,
          t`Move $-6$ to the other side and change its sign: $x = 1 + 6 = 7$.`,
          t`So $(7, 3)$ is a solution. Check: $7 - 6 = 1$.`,
          t`Each value we choose gives one more solution, so there are infinitely many.`,
        ],
      },
      {
        title: "Forming an equation",
        points: [
          t`Name the two unknown numbers $x$ and $y$, and say what each one stands for.`,
          t`Translate the sentence one part at a time.`,
          t`'$3$ less than $x$' is $x - 3$, not $3 - x$.`,
          t`'$x$ is three times $y$' is $x = 3y$. Check: $y = 2$ gives $x = 6$.`,
          t`The perimeter of a rectangle is $2(\text{length} + \text{breadth})$.`,
          t`Then simplify to the form $ax + by = c$.`,
        ],
      },
      {
        title: "Simultaneous equations",
        points: [
          t`Two equations in the same two variables, taken together, are **simultaneous equations**.`,
          t`Take $x + y = 8$ and $x - y = 2$.`,
          t`$(6, 2)$ satisfies the first, but $6 - 2 = 4$, so not the second.`,
          t`$(5, 3)$ satisfies both: $5 + 3 = 8$ and $5 - 3 = 2$.`,
          t`A pair that satisfies both equations is the **solution** of the simultaneous equations.`,
        ],
      },
    ],
    worked: {
      prompt: t`'The sum of a number $x$ and three times a number $y$ is $15$.' Write the equation, then find its solution in which $y = 2$.`,
      steps: [
        t`Three times $y$ is $3y$. So the equation is $x + 3y = 15$.`,
        t`Put $y = 2$: $x + 3 \times 2 = 15$, so $x + 6 = 15$.`,
        t`Move $6$ to the other side and change its sign: $x = 15 - 6 = 9$.`,
        t`Write $x$ first: the solution is $(9, 2)$. Check: $9 + 6 = 15$.`,
      ],
      answer: t`$x + 3y = 15$; the solution is $(9, 2)$`,
    },
    visualSpec: t`Drag a slider for x along a number line; the matching y for x + y = 10 appears beside it, and each (x, y) pair is listed as a solution.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Reads or writes an ordered pair the wrong way round: (a, b) taken as y = a, x = b",
      remediation: t`In an ordered pair $(x, y)$ the value of $x$ comes first and $y$ second. $(3, 8)$ and $(8, 3)$ are different pairs.`,
      fallback: { kind: "ext", topic: "ordered pairs and co-ordinates (Std IX Co-ordinate Geometry)" },
    },
    {
      id: "C01-M2",
      mistake: "Moves a term to the other side of = without changing its sign (3y + 4 = 19 gives 3y = 23)",
      remediation: t`When a term moves to the other side of $=$, its sign changes: $3y + 4 = 19$ gives $3y = 19 - 4$.`,
      fallback: { kind: "ext", topic: "linear equations in one variable (Std VIII)" },
    },
    {
      id: "C01-M3",
      mistake: "Stops at 3y = 15 and gives y = 15, without dividing by the coefficient",
      remediation: t`$3y = 15$ means $3 \times y = 15$. Divide both sides by $3$ to get $y = 5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Writes 'd less than A' (or 'd subtracted from A') as d − A instead of A − d",
      remediation: t`'$5$ less than $x$' and '$5$ subtracted from $x$' both mean $x - 5$: start from $x$ and take $5$ away.`,
      fallback: { kind: "ext", topic: "algebraic expressions from words (Std VIII)" },
    },
    {
      id: "C01-M5",
      mistake: "Takes the perimeter of a rectangle as length + breadth",
      remediation: t`A rectangle has two lengths and two breadths, so its perimeter is $2(\text{length} + \text{breadth})$.`,
      fallback: { kind: "ext", topic: "perimeter of a rectangle (Std VIII)" },
    },
    {
      id: "C01-M6",
      mistake: "Puts the multiplier on the wrong side: 'x is twice y' written as 2x = y",
      remediation: t`'$x$ is twice $y$' means $x = 2y$: $x$ is the bigger number. Check with numbers: $y = 3$ gives $x = 6$.`,
      fallback: { kind: "ext", topic: "algebraic expressions from words (Std VIII)" },
    },
  ],
  engineNotes: [
    t`C01-M1 needs a pair with unequal values; C01-M3 needs a coefficient other than $1$ on the variable being found; C01-M4 needs 'less than' or 'subtracted from' in the sentence; C01-M5 needs a rectangle's perimeter; C01-M6 needs a 'times' comparison. Draw diagnosing items where these hold.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.1 Q2" },
      stem: t`Find the solution of $3x + 2y = 20$ in which $x = 2$. Write it as an ordered pair $(x, y)$.`,
      verify: { kind: "value", inputs: { a: "3", b: "2", c: "20", v: "2" }, params: { type: "pair", given: "x" } },
      options: [
        { key: "A", text: t`$(2, 7)$`, correct: true, value: "(2, 7)" },
        { key: "B", text: t`$(7, 2)$`, correct: false, misconceptionId: "C01-M1", value: "(7, 2)" },
        { key: "C", text: t`$(2, 13)$`, correct: false, misconceptionId: "C01-M2", value: "(2, 13)" },
        { key: "D", text: t`$(2, 14)$`, correct: false, misconceptionId: "C01-M3", value: "(2, 14)" },
      ],
      solution: {
        steps: [
          t`Put $x = 2$: $3 \times 2 + 2y = 20$, so $6 + 2y = 20$.`,
          t`Move $6$ across and change its sign: $2y = 20 - 6 = 14$.`,
          t`Divide by $2$: $y = 7$.`,
          t`Write $x$ first: the solution is $(2, 7)$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`$(2, 1)$ is a solution of the equation $kx + 5y = 13$. Find $k$.`,
      verify: { kind: "value", inputs: { b: "5", c: "13", p: "2", q: "1" }, params: { type: "k" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C01-M1", value: "3" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C01-M2", value: "9" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C01-M3", value: "8" },
      ],
      solution: {
        steps: [
          t`$(2, 1)$ means $x = 2$ and $y = 1$.`,
          t`Put them in: $2k + 5 \times 1 = 13$, so $2k + 5 = 13$.`,
          t`$2k = 13 - 5 = 8$.`,
          t`Divide by $2$: $k = 4$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q1(ii)" },
      stem: t`Take the length of a rectangle as $x$ and its breadth as $y$. 'When $5$ is subtracted from the length and the breadth of the rectangle, the perimeter becomes $26$.' Which equation states this?`,
      verify: { kind: "locus", inputs: { d: "5", P: "26" }, params: { type: "rect" } },
      options: [
        { key: "A", text: t`$x + y = -3$`, correct: false, misconceptionId: "C01-M4", value: "-2*x - 2*y - 6" },
        { key: "B", text: t`$x + y = 36$`, correct: false, misconceptionId: "C01-M5", value: "x + y - 36" },
        { key: "C", text: t`$x + y = 23$`, correct: true, value: "2*x + 2*y - 46" },
        { key: "D", text: t`$x + y = 3$`, correct: false, misconceptionId: "C01-M2", value: "2*x + 2*y - 6" },
      ],
      solution: {
        steps: [
          t`The new length is $x - 5$ and the new breadth is $y - 5$.`,
          t`Perimeter: $2(x - 5 + y - 5) = 26$.`,
          t`Divide by $2$: $x + y - 10 = 13$.`,
          t`So $x + y = 13 + 10 = 23$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`Rahul's age is $4$ years less than twice his sister's age. Take Rahul's age as $x$ years and his sister's age as $y$ years. Which equation states this?`,
      verify: { kind: "locus", inputs: { m: "2", d: "4" }, params: { type: "less" } },
      options: [
        { key: "A", text: t`$x - 2y = -4$`, correct: true, value: "x - 2*y + 4" },
        { key: "B", text: t`$x + 2y = -4$`, correct: false, misconceptionId: "C01-M2", value: "x + 2*y + 4" },
        { key: "C", text: t`$x + 2y = 4$`, correct: false, misconceptionId: "C01-M4", value: "x + 2*y - 4" },
        { key: "D", text: t`$2x - y = -4$`, correct: false, misconceptionId: "C01-M6", value: "2*x - y + 4" },
      ],
      solution: {
        steps: [
          t`Twice the sister's age is $2y$.`,
          t`$4$ less than that is $2y - 4$, so $x = 2y - 4$.`,
          t`Move $2y$ to the left and change its sign: $x - 2y = -4$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.1 Q2" },
      stem: t`Find the solution of $2x - 3y = 4$ in which $y = 2$. Write it as an ordered pair $(x, y)$.`,
      verify: { kind: "value", inputs: { a: "2", b: "-3", c: "4", v: "2" }, params: { type: "pair", given: "y" } },
      options: [
        { key: "A", text: t`$(5, 2)$`, correct: true, value: "(5, 2)" },
        { key: "B", text: t`$(2, 5)$`, correct: false, misconceptionId: "C01-M1", value: "(2, 5)" },
        { key: "C", text: t`$(-1, 2)$`, correct: false, misconceptionId: "C01-M2", value: "(-1, 2)" },
        { key: "D", text: t`$(10, 2)$`, correct: false, misconceptionId: "C01-M3", value: "(10, 2)" },
      ],
      solution: {
        steps: [
          t`Put $y = 2$: $2x - 3 \times 2 = 4$, so $2x - 6 = 4$.`,
          t`Move $-6$ across and change its sign: $2x = 4 + 6 = 10$.`,
          t`Divide by $2$: $x = 5$.`,
          t`Write $x$ first: the solution is $(5, 2)$.`,
        ],
      },
    },
  ],
};
