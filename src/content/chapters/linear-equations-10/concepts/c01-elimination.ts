import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`$x + y = 10$ and $x - y = 2$. **What happens to $y$ if you add the two equations?**`,
    reveal: t`The $+y$ and $-y$ cancel, leaving $2x = 12$, so $x = 6$. Then $6 + y = 10$ gives $y = 4$. Removing one variable like this is called **elimination**.`,
  },
  explanation: {
    intuition: [
      t`One equation in $x$ and $y$ has many solutions, so it cannot fix both numbers.`,
      t`Two equations together usually fix exactly one pair $(x, y)$.`,
      t`The trick is to combine the two equations so that one variable disappears.`,
      t`What is left is an equation in one variable, which you already know how to solve.`,
      t`Find that value, then put it back into an equation to find the other.`,
      t`To **eliminate** means to remove; so this is the **elimination method**.`,
    ],
    formal: [
      {
        title: "Add or subtract the equations",
        points: [
          t`**Simultaneous equations** are two equations that must both be true for the same $x$ and $y$.`,
          t`Their **solution** is the pair $(x, y)$ that satisfies both equations.`,
          t`The **coefficient** of $y$ in $4x + 3y = 18$ is $3$, the number multiplying $y$.`,
          t`If one variable has the same coefficient in both equations, subtract the equations.`,
          t`If its coefficients are equal but opposite in sign, like $3y$ and $-3y$, add them.`,
          t`Example: $2x + y = 7$ minus $x + y = 4$ gives $x = 3$.`,
        ],
      },
      {
        title: "Make the coefficients equal",
        points: [
          t`Take $x + 2y = 8$ and $3x - y = 3$: no coefficients match yet.`,
          t`Multiply the first equation by $3$ so that both have $3x$.`,
          t`Multiply **every** term, the constant too: $3x + 6y = 24$.`,
          t`Subtracting $3x - y = 3$ changes the sign of every term in it: $-3x + y = -3$.`,
          t`So $3x + 6y - 3x + y = 24 - 3$.`,
          t`This gives $7y = 21$, so $y = 3$.`,
        ],
      },
      {
        title: "Put the value back",
        points: [
          t`Put $y = 3$ in $x + 2y = 8$: $x + 6 = 8$.`,
          t`A term that crosses the $=$ sign changes its sign: $x = 8 - 6 = 2$.`,
          t`Watch the signs: $5 - 8 = -3$, not $3$.`,
          t`Check the pair in the other equation: $3 \times 2 - 3 = 3$, true.`,
          t`Write the answer in order: $x = 2$, $y = 3$, or $(x, y) = (2, 3)$.`,
        ],
      },
      {
        title: "Fractions and other forms",
        points: [
          t`If an equation has fractions, multiply **every** term by the LCM of its denominators.`,
          t`$\frac{x}{2} + y = 4$ times $2$ gives $x + 2y = 8$: the $y$ term is doubled too.`,
          t`If an equation is not in the form $ax + by = c$, rearrange it first.`,
          t`For example, $y = 2x - 1$ becomes $2x - y = 1$.`,
          t`Or use **substitution**: put $y = 2x - 1$ straight into the other equation.`,
          t`Either way, you reach one equation in one variable.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve the simultaneous equations $3x + 2y = 29$ and $5x - y = 18$.`,
      steps: [
        t`The $y$ terms are $2y$ and $-y$. Multiply $5x - y = 18$ by $2$, every term: $10x - 2y = 36$.`,
        t`Now $2y$ and $-2y$ are opposite, so add: $3x + 10x = 29 + 36$, which gives $13x = 65$ and $x = 5$.`,
        t`Put $x = 5$ in $5x - y = 18$: $25 - y = 18$, so $-y = 18 - 25 = -7$ and $y = 7$.`,
        t`Check in $3x + 2y = 29$: $15 + 14 = 29$, true.`,
      ],
      answer: t`$x = 5$, $y = 7$, that is $(x, y) = (5, 7)$.`,
    },
    visualSpec: t`Drag a multiplier for each equation; the matching coefficients light up, and adding or subtracting the equations shows that variable vanish.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Multiplying an equation to match coefficients, but multiplying only the x and y terms and leaving the constant unchanged",
      remediation: "Multiplying an equation means multiplying **every** term, the number on the right too. Otherwise the two sides are no longer equal.",
      fallback: { kind: "ext", topic: "multiplying both sides of an equation (Std IX Linear Equations in Two Variables)" },
    },
    {
      id: "C01-M2",
      mistake: "Subtracting one equation from another, but changing the sign of only the term that cancels, so the other terms get added",
      remediation: t`Subtracting an equation changes the sign of **every** term in it, the constant too: $-(2x + y) = -2x - y$. Write this out before you combine.`,
      fallback: { kind: "ext", topic: "subtracting algebraic expressions (Std IX Polynomials)" },
    },
    {
      id: "C01-M3",
      mistake: "Putting the found value back, then moving the known term across = without changing its sign",
      remediation: t`A term that crosses the $=$ sign changes its sign: $x + 6 = 8$ gives $x = 8 - 6$, not $8 + 6$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable" },
    },
    {
      id: "C01-M4",
      mistake: "Clearing fractions by multiplying only the terms that have a denominator by the LCM",
      remediation: "Multiply **every** term of the equation by the LCM, the whole-number terms too, so the equation stays balanced.",
      fallback: { kind: "ext", topic: "clearing fractions in a linear equation" },
    },
    {
      id: "C01-M5",
      mistake: "Writing the value found for y as x, and the value of x as y",
      remediation: t`Keep track of which letter each value belongs to, and write the answer as $x = \ldots$, $y = \ldots$. Checking in both equations catches a swap.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Dropping the minus sign when a subtraction gives a negative number, such as working out 9 − 15 as 6",
      remediation: t`Taking a bigger number from a smaller one gives a negative answer: $9 - 15 = -6$. Check the pair in both equations to catch a lost sign.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 applies only when an equation is multiplied to match coefficients (Q1, Q6); C01-M2 only when the equations are subtracted (Q3, Q5); C01-M4 only when an equation has fractions (Q4).",
    "C01-M6 differs from the key only when putting the value back leaves a negative right side (Q2, Q6).",
    t`C01-M5 gives the key whenever $x = y$: draw items with $x \ne y$.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q2(B)(i)" },
      stem: t`Solve the simultaneous equations $x + y = 3$ and $3x - 2y = 4$.`,
      verify: { kind: "value", inputs: { a1: "1", b1: "1", c1: "3", a2: "3", b2: "-2", c2: "4", k1: "2" }, params: { elim: "y", op: "add", back: "1" } },
      options: [
        { key: "A", text: t`$x = 2,\ y = 1$`, correct: true, value: "2 + I" },
        { key: "B", text: t`$x = \frac{7}{5},\ y = \frac{8}{5}$`, correct: false, misconceptionId: "C01-M1", value: "7/5 + 8*I/5" },
        { key: "C", text: t`$x = 2,\ y = 5$`, correct: false, misconceptionId: "C01-M3", value: "2 + 5*I" },
        { key: "D", text: t`$x = 1,\ y = 2$`, correct: false, misconceptionId: "C01-M5", value: "1 + 2*I" },
      ],
      solution: {
        steps: [
          t`Multiply $x + y = 3$ by $2$, every term: $2x + 2y = 6$.`,
          t`Add it to $3x - 2y = 4$: the $y$ terms cancel, so $5x = 10$ and $x = 2$.`,
          t`Put $x = 2$ in $x + y = 3$: $y = 3 - 2 = 1$.`,
          t`Check: $3 \times 2 - 2 \times 1 = 4$, true. So $x = 2$, $y = 1$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q2(B)(i)" },
      stem: t`Solve the simultaneous equations $5x + 3y = 9$ and $2x - 3y = 12$.`,
      verify: { kind: "value", inputs: { a1: "5", b1: "3", c1: "9", a2: "2", b2: "-3", c2: "12" }, params: { elim: "y", op: "add", back: "1" } },
      options: [
        { key: "A", text: t`$x = 3,\ y = -2$`, correct: true, value: "3 - 2*I" },
        { key: "B", text: t`$x = 3,\ y = 8$`, correct: false, misconceptionId: "C01-M3", value: "3 + 8*I" },
        { key: "C", text: t`$x = -2,\ y = 3$`, correct: false, misconceptionId: "C01-M5", value: "-2 + 3*I" },
        { key: "D", text: t`$x = 3,\ y = 2$`, correct: false, misconceptionId: "C01-M6", value: "3 + 2*I" },
      ],
      solution: {
        steps: [
          t`The $y$ coefficients are $3$ and $-3$, so add the equations: $7x = 21$ and $x = 3$.`,
          t`Put $x = 3$ in $5x + 3y = 9$: $15 + 3y = 9$, so $3y = 9 - 15 = -6$.`,
          t`So $y = -2$. The solution is $x = 3$, $y = -2$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.1 Q.2(3)" },
      stem: t`Solve the simultaneous equations $2x - 3y = 9$ and $2x + y = 13$.`,
      verify: { kind: "value", inputs: { a1: "2", b1: "-3", c1: "9", a2: "2", b2: "1", c2: "13" }, params: { elim: "x", op: "sub", back: "2" } },
      options: [
        { key: "A", text: t`$x = 7,\ y = 1$`, correct: false, misconceptionId: "C01-M3", value: "7 + I" },
        { key: "B", text: t`$x = 1,\ y = 6$`, correct: false, misconceptionId: "C01-M5", value: "1 + 6*I" },
        { key: "C", text: t`$x = 6,\ y = 1$`, correct: true, value: "6 + I" },
        { key: "D", text: t`$x = 12,\ y = -11$`, correct: false, misconceptionId: "C01-M2", value: "12 - 11*I" },
      ],
      solution: {
        steps: [
          t`Both equations have $2x$, so subtract the first from the second, changing the sign of every term.`,
          t`$2x + y - 2x + 3y = 13 - 9$, so $4y = 4$ and $y = 1$.`,
          t`Put $y = 1$ in $2x + y = 13$: $2x = 13 - 1 = 12$, so $x = 6$.`,
          t`The solution is $x = 6$, $y = 1$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.1 Q.2(6)" },
      stem: t`Solve the simultaneous equations $\frac{1}{3}x + y = \frac{10}{3}$ and $2x + \frac{1}{4}y = \frac{11}{4}$.`,
      verify: { kind: "value", inputs: { a1: "1/3", b1: "1", c1: "10/3", a2: "2", b2: "1/4", c2: "11/4", L1: "3", L2: "4", k1: "8" }, params: { elim: "x", op: "sub", back: "1" } },
      options: [
        { key: "A", text: t`$x = 1,\ y = 3$`, correct: true, value: "1 + 3*I" },
        { key: "B", text: t`$x = 1,\ y = 9$`, correct: false, misconceptionId: "C01-M4", value: "1 + 9*I" },
        { key: "C", text: t`$x = 19,\ y = 3$`, correct: false, misconceptionId: "C01-M3", value: "19 + 3*I" },
        { key: "D", text: t`$x = 3,\ y = 1$`, correct: false, misconceptionId: "C01-M5", value: "3 + I" },
      ],
      solution: {
        steps: [
          t`Multiply the first equation by $3$, every term: $x + 3y = 10$. Multiply the second by $4$: $8x + y = 11$.`,
          t`Multiply $x + 3y = 10$ by $8$: $8x + 24y = 80$.`,
          t`Subtract $8x + y = 11$: $23y = 69$, so $y = 3$.`,
          t`Put $y = 3$ in $x + 3y = 10$: $x = 10 - 9 = 1$. The solution is $x = 1$, $y = 3$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.1 Q.2(1)" },
      stem: t`Solve the simultaneous equations $3a + 5b = 26$ and $a + 5b = 22$.`,
      verify: { kind: "value", inputs: { a1: "3", b1: "5", c1: "26", a2: "1", b2: "5", c2: "22" }, params: { elim: "y", op: "sub", back: "2" } },
      options: [
        { key: "A", text: t`$a = 2,\ b = 4$`, correct: true, value: "2 + 4*I" },
        { key: "B", text: t`$a = 12,\ b = 2$`, correct: false, misconceptionId: "C01-M2", value: "12 + 2*I" },
        { key: "C", text: t`$a = 2,\ b = \frac{24}{5}$`, correct: false, misconceptionId: "C01-M3", value: "2 + 24*I/5" },
        { key: "D", text: t`$a = 4,\ b = 2$`, correct: false, misconceptionId: "C01-M5", value: "4 + 2*I" },
      ],
      solution: {
        steps: [
          t`Both equations have $5b$, so subtract the second from the first, changing the sign of every term.`,
          t`$3a + 5b - a - 5b = 26 - 22$, so $2a = 4$ and $a = 2$.`,
          t`Put $a = 2$ in $a + 5b = 22$: $5b = 22 - 2 = 20$, so $b = 4$.`,
          t`The solution is $a = 2$, $b = 4$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Simultaneous linear equations SolvedEx.1" },
      stem: t`Solve the simultaneous equations $5x - 3y = 8$ and $3x + y = 2$.`,
      verify: { kind: "value", inputs: { a1: "5", b1: "-3", c1: "8", a2: "3", b2: "1", c2: "2", k2: "3" }, params: { elim: "y", op: "add", back: "2" } },
      options: [
        { key: "A", text: t`$x = 1,\ y = 5$`, correct: false, misconceptionId: "C01-M3", value: "1 + 5*I" },
        { key: "B", text: t`$x = 1,\ y = 1$`, correct: false, misconceptionId: "C01-M6", value: "1 + I" },
        { key: "C", text: t`$x = 1,\ y = -1$`, correct: true, value: "1 - I" },
        { key: "D", text: t`$x = \frac{5}{7},\ y = - \frac{1}{7}$`, correct: false, misconceptionId: "C01-M1", value: "5/7 - I/7" },
      ],
      solution: {
        steps: [
          t`Multiply $3x + y = 2$ by $3$, every term: $9x + 3y = 6$.`,
          t`Add it to $5x - 3y = 8$: the $y$ terms cancel, so $14x = 14$ and $x = 1$.`,
          t`Put $x = 1$ in $3x + y = 2$: $y = 2 - 3 = -1$.`,
          t`The solution is $x = 1$, $y = -1$.`,
        ],
      },
    },
  ],
};
