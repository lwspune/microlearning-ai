import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`If $y = 2x$ and $x + y = 12$, what are $x$ and $y$?`,
    reveal: t`Put $2x$ in place of $y$: $x + 2x = 12$. So $3x = 12$ and $x = 4$. Then $y = 2 \times 4 = 8$.`,
  },
  explanation: {
    intuition: [
      t`Two equations in $x$ and $y$ have two unknowns, so neither one can be solved alone.`,
      t`Sometimes one equation tells us what $y$ is in terms of $x$, like $y = 2x$.`,
      t`Then $y$ and $2x$ are the same number.`,
      t`So wherever $y$ appears in the other equation, we may write $2x$ instead.`,
      t`That leaves one equation in one variable, which we already know how to solve.`,
      t`This is the **substitution method**: to substitute means to put one thing in place of another.`,
    ],
    formal: [
      {
        title: "Write one variable alone",
        points: [
          t`Take the simultaneous equations $x + 3y = 7$ (I) and $2x - y = 7$ (II).`,
          t`Look for a variable with coefficient $1$ or $-1$. It is the easiest to write alone.`,
          t`In (I), $x$ has coefficient $1$.`,
          t`Move $3y$ to the right side. A term that changes sides changes its sign.`,
          t`So from (I), $x = 7 - 3y$.`,
        ],
      },
      {
        title: "Substitute and solve",
        points: [
          t`Put $7 - 3y$ in place of $x$ in (II), inside a bracket: $2(7 - 3y) - y = 7$.`,
          t`The $2$ multiplies every term in the bracket: $14 - 6y - y = 7$.`,
          t`Now only $y$ is left: $14 - 7y = 7$.`,
          t`Move $14$ to the right side as $-14$: $-7y = 7 - 14$ $= -7$.`,
          t`Divide by $-7$: $y = 1$.`,
        ],
      },
      {
        title: "Find the other value",
        points: [
          t`Put $y = 1$ in $x = 7 - 3y$: $x = 7 - 3 = 4$.`,
          t`So the solution is $x = 4$, $y = 1$. Keep $x$ first, as in the pair $(4, 1)$.`,
          t`Check in (I): $4 + 3 \times 1 = 7$. True.`,
          t`Check in (II): $2 \times 4 - 1 = 7$. True.`,
          t`Substitute into the **other** equation, never back into the one you wrote it from: that only gives $7 = 7$.`,
        ],
      },
      {
        title: "When the coefficient is not 1",
        points: [
          t`In $2x - y = 7$, $y$ has coefficient $-1$: $-y = 7 - 2x$.`,
          t`Multiply both sides by $-1$: $y = 2x - 7$. Don't leave the minus sign behind.`,
          t`If no coefficient is $1$ or $-1$, divide by the coefficient.`,
          t`From $2x + 3y = 13$: $2x = 13 - 3y$, so $x = \frac{13 - 3y}{2}$.`,
          t`After substituting, multiply the whole equation by $2$ to clear the fraction.`,
          t`Any choice of variable and equation gives the same solution.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $8x + 3y = 11$ (I) and $3x - y = 2$ (II) by substitution.`,
      steps: [
        t`(II) has $-y$, so write $y$ from it: $-y = 2 - 3x$, so $y = 3x - 2$.`,
        t`Substitute in (I): $8x + 3(3x - 2) = 11$.`,
        t`Multiply out: $8x + 9x - 6 = 11$, so $17x = 17$ and $x = 1$.`,
        t`Put $x = 1$ in $y = 3x - 2$: $y = 3 - 2 = 1$.`,
        t`Check in (I): $8 + 3 = 11$. True.`,
      ],
      answer: t`$x = 1$, $y = 1$`,
    },
    visualSpec: t`Drag the expression for $y$ out of one equation and drop it onto the $y$ in the other; the equation rewrites itself in one variable, and solving it fills in the pair.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Moves a term to the other side without changing its sign when writing one variable in terms of the other: from x + 3y = 7 writes x = 7 + 3y",
      remediation: t`A term that moves to the other side changes its sign. From $x + 4y = 9$: $x = 9 - 4y$, not $9 + 4y$.`,
      fallback: { kind: "ext", topic: "transposing terms in a linear equation (Std VIII)" },
    },
    {
      id: "C03-M2",
      mistake: "Multiplies only the variable term inside the bracket: 3(3x - 2) becomes 9x - 2, and -(x - 3) becomes -x - 3",
      remediation: t`The number before a bracket multiplies every term inside it: $3(3x - 2) = 9x - 6$, and $-(x - 5) = -x + 5$.`,
      fallback: { kind: "ext", topic: "multiplying out brackets (Std VIII)" },
    },
    {
      id: "C03-M3",
      mistake: "Forgets to divide by the coefficient of the variable it writes alone: from 2y = 10 - x writes y = 10 - x, from -y = 3 - x writes y = 3 - x",
      remediation: t`After moving the other terms, divide by the coefficient of the variable, including $-1$. From $-y = 5 - x$, $y = x - 5$; from $3y = 8 - x$, $y = \frac{8 - x}{3}$.`,
      fallback: { kind: "ext", topic: "solving a linear equation in one variable (Std VIII)" },
    },
    {
      id: "C03-M4",
      mistake: "In the one-variable equation, moves the constant to the other side without changing its sign: 32 - y = 30 gives -y = 30 + 32",
      remediation: t`In the one-variable equation too, a number that changes sides changes its sign: $20 - y = 14$ gives $-y = 14 - 20$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Finds the values correctly but writes them the wrong way round, giving x the value of y",
      remediation: t`A solution is an ordered pair $(x, y)$. Keep track of which value belongs to which variable, and check the pair in both equations.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C03-M3 applies only when the variable written alone has a coefficient other than 1; C03-M5 only to pair items where x and y differ. C03-M2 and C03-M4 agree when the bracket is multiplied by -1, so no item uses both there.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q2(ii)" },
      stem: t`Solve $x - 2y = -1$ and $2x - y = 7$ by substitution, writing $x$ in terms of $y$ from the first equation.`,
      verify: { kind: "value", inputs: { a1: "1", b1: "-2", c1: "-1", a2: "2", b2: "-1", c2: "7" }, params: { src: "1", iso: "x", ask: "pair" } },
      options: [
        { key: "A", text: t`$x = \frac{13}{3},\ y = \frac{8}{3}$`, correct: false, misconceptionId: "C03-M2", value: "13/3 + 8*I/3" },
        { key: "B", text: t`$x = 3,\ y = 5$`, correct: false, misconceptionId: "C03-M5", value: "3 + 5*I" },
        { key: "C", text: t`$x = 5,\ y = 3$`, correct: true, value: "5 + 3*I" },
        { key: "D", text: t`$x = \frac{13}{5},\ y = - \frac{9}{5}$`, correct: false, misconceptionId: "C03-M1", value: "13/5 - 9*I/5" },
      ],
      solution: {
        steps: [
          t`From the first equation, $x = 2y - 1$.`,
          t`Substitute in $2x - y = 7$: $2(2y - 1) - y = 7$, so $4y - 2 - y = 7$.`,
          t`So $3y = 9$ and $y = 3$.`,
          t`Then $x = 2 \times 3 - 1 = 5$. So $x = 5$, $y = 3$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q2(vi)" },
      stem: t`Solve $x - 2y = -2$ and $x + 2y = 10$ by substitution, writing $y$ in terms of $x$ from the second equation.`,
      verify: { kind: "value", inputs: { a1: "1", b1: "-2", c1: "-2", a2: "1", b2: "2", c2: "10" }, params: { src: "2", iso: "y", ask: "pair" } },
      options: [
        { key: "A", text: t`$x = -6,\ y = 8$`, correct: false, misconceptionId: "C03-M4", value: "-6 + 8*I" },
        { key: "B", text: t`$x = 3,\ y = 4$`, correct: false, misconceptionId: "C03-M5", value: "3 + 4*I" },
        { key: "C", text: t`$x = 4,\ y = 3$`, correct: true, value: "4 + 3*I" },
        { key: "D", text: t`$x = 6,\ y = 4$`, correct: false, misconceptionId: "C03-M3", value: "6 + 4*I" },
      ],
      solution: {
        steps: [
          t`From the second equation, $2y = 10 - x$, so $y = \frac{10 - x}{2}$.`,
          t`Substitute in $x - 2y = -2$: $x - (10 - x) = -2$, so $2x - 10 = -2$.`,
          t`So $2x = 8$ and $x = 4$.`,
          t`Then $y = \frac{10 - 4}{2} = 3$. So $x = 4$, $y = 3$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Substitution SolvedEx.2" },
      stem: t`Solve $3x - 4y = 16$ and $2x - 3y = 10$. Write $x$ in terms of $y$ from the first equation and substitute it in the second. The value of $y$ is`,
      verify: { kind: "value", inputs: { a1: "3", b1: "-4", c1: "16", a2: "2", b2: "-3", c2: "10" }, params: { src: "1", iso: "x", ask: "first" } },
      options: [
        { key: "A", text: t`$-14$`, correct: false, misconceptionId: "C03-M2", value: "-14" },
        { key: "B", text: t`$- \frac{22}{5}$`, correct: false, misconceptionId: "C03-M3", value: "-22/5" },
        { key: "C", text: t`$-62$`, correct: false, misconceptionId: "C03-M4", value: "-62" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`From the first equation, $3x = 16 + 4y$, so $x = \frac{16 + 4y}{3}$.`,
          t`Substitute in the second: $\frac{2(16 + 4y)}{3} - 3y = 10$.`,
          t`Multiply by $3$: $32 + 8y - 9y = 30$, so $32 - y = 30$.`,
          t`So $-y = -2$ and $y = 2$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`Solve $2x - y = 9$ and $x - y = 3$ by substitution, writing $y$ in terms of $x$ from the second equation.`,
      verify: { kind: "value", inputs: { a1: "2", b1: "-1", c1: "9", a2: "1", b2: "-1", c2: "3" }, params: { src: "2", iso: "y", ask: "pair" } },
      options: [
        { key: "A", text: t`$x = 12,\ y = 9$`, correct: false, misconceptionId: "C03-M2", value: "12 + 9*I" },
        { key: "B", text: t`$x = 4,\ y = -1$`, correct: false, misconceptionId: "C03-M3", value: "4 - I" },
        { key: "C", text: t`$x = 6,\ y = 3$`, correct: true, value: "6 + 3*I" },
        { key: "D", text: t`$x = 2,\ y = -5$`, correct: false, misconceptionId: "C03-M1", value: "2 - 5*I" },
      ],
      solution: {
        steps: [
          t`From $x - y = 3$: $-y = 3 - x$, so $y = x - 3$.`,
          t`Substitute in $2x - y = 9$: $2x - (x - 3) = 9$, so $2x - x + 3 = 9$.`,
          t`So $x = 6$.`,
          t`Then $y = 6 - 3 = 3$. So $x = 6$, $y = 3$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Complete the activity. Solve $2x - y = 12$ and $x + y = 3$. From the first equation, write $y$ in terms of $x$ and substitute it in the second. Then $x = \square$`,
      verify: { kind: "value", inputs: { a1: "2", b1: "-1", c1: "12", a2: "1", b2: "1", c2: "3" }, params: { src: "1", iso: "y", ask: "first" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$-15$`, correct: false, misconceptionId: "C03-M1", value: "-15" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C03-M3", value: "9" },
        { key: "D", text: t`$-3$`, correct: false, misconceptionId: "C03-M4", value: "-3" },
      ],
      solution: {
        steps: [
          t`From $2x - y = 12$: $-y = 12 - 2x$, so $y = 2x - 12$.`,
          t`Substitute in $x + y = 3$: $x + 2x - 12 = 3$.`,
          t`So $3x = 3 + 12 = 15$ and $x = 5$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`Solve $2x - y = 1$ and $4x - 3y = 7$ by substitution, writing $y$ in terms of $x$ from the first equation.`,
      verify: { kind: "value", inputs: { a1: "2", b1: "-1", c1: "1", a2: "4", b2: "-3", c2: "7" }, params: { src: "1", iso: "y", ask: "pair" } },
      options: [
        { key: "A", text: t`$x = -2,\ y = -5$`, correct: true, value: "-2 - 5*I" },
        { key: "B", text: t`$x = -4,\ y = -9$`, correct: false, misconceptionId: "C03-M2", value: "-4 - 9*I" },
        { key: "C", text: t`$x = 1,\ y = -1$`, correct: false, misconceptionId: "C03-M3", value: "1 - I" },
        { key: "D", text: t`$x = -5,\ y = -11$`, correct: false, misconceptionId: "C03-M4", value: "-5 - 11*I" },
      ],
      solution: {
        steps: [
          t`From $2x - y = 1$: $-y = 1 - 2x$, so $y = 2x - 1$.`,
          t`Substitute in $4x - 3y = 7$: $4x - 3(2x - 1) = 7$, so $4x - 6x + 3 = 7$.`,
          t`So $-2x = 4$ and $x = -2$.`,
          t`Then $y = 2(-2) - 1 = -5$. So $x = -2$, $y = -5$.`,
        ],
      },
    },
  ],
};
