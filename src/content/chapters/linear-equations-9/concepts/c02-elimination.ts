import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`$3x + 5y = 9$ and $5x + 3y = 7$. **Can you find $x + y$ without finding $x$ and $y$?**`,
    reveal: t`Add the two equations: $8x + 8y = 16$. Divide by $8$: $x + y = 2$. Combining equations like this is the heart of **elimination**.`,
  },
  explanation: {
    intuition: [
      t`One equation in $x$ and $y$ has many solutions, so it cannot fix both numbers.`,
      t`Two simultaneous equations usually fix exactly one pair $(x, y)$.`,
      t`Combine the two equations so that one variable disappears.`,
      t`What is left is an equation in one variable, which you can already solve.`,
      t`Find that value, then put it back into an equation to find the other.`,
      t`To **eliminate** means to remove; so this is the **elimination method**.`,
    ],
    formal: [
      {
        title: "Line up the terms first",
        points: [
          t`Keep the $x$ term, then the $y$ term, on the left; the number on the right.`,
          t`$2x + y - 7 = 0$ becomes $2x + y = 7$.`,
          t`The $-7$ crosses the $=$ sign, so it becomes $+7$.`,
          t`$y + x = 5$ is written $x + y = 5$, so the $x$ terms line up.`,
        ],
      },
      {
        title: "Add or subtract the equations",
        points: [
          t`The **coefficient** of $y$ in $4x + 3y = 18$ is $3$, the number multiplying $y$.`,
          t`If one variable has the same coefficient in both equations, subtract them.`,
          t`If its coefficients are opposite, like $2y$ and $-2y$, add them.`,
          t`Example: $2x + y = 11$ minus $x + y = 7$ gives $x = 4$.`,
          t`Example: $x + y = 9$ plus $x - y = 3$ gives $2x = 12$, so $x = 6$.`,
        ],
      },
      {
        title: "Make the coefficients equal",
        points: [
          t`Take $x + 2y = 8$ and $3x - y = 10$: no coefficients match yet.`,
          t`Multiply the first equation by $3$ so that both have $3x$.`,
          t`Multiply **every** term, the constant too: $3x + 6y = 24$.`,
          t`Subtracting $3x - y = 10$ changes the sign of every term in it.`,
          t`So $3x + 6y - 3x + y = 24 - 10$.`,
          t`This gives $7y = 14$, so $y = 2$.`,
        ],
      },
      {
        title: "Put the value back",
        points: [
          t`Put $y = 2$ in $x + 2y = 8$: $x + 4 = 8$.`,
          t`A term that crosses the $=$ sign changes its sign: $x = 8 - 4 = 4$.`,
          t`Watch the signs: $5 - 8 = -3$, not $3$.`,
          t`Check the pair in the other equation: $3 \times 4 - 2 = 10$, true.`,
          t`Write the answer in order: $x = 4$, $y = 2$, or $(x, y) = (4, 2)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve the simultaneous equations $3x + y = 5$ and $2x + 3y = 1$.`,
      steps: [
        t`No coefficients match. Multiply $3x + y = 5$ by $3$, every term: $9x + 3y = 15$.`,
        t`Both equations now have $3y$, so subtract $2x + 3y = 1$, changing every sign: $9x + 3y - 2x - 3y = 15 - 1$.`,
        t`This gives $7x = 14$, so $x = 2$.`,
        t`Put $x = 2$ in $3x + y = 5$: $6 + y = 5$, so $y = 5 - 6 = -1$.`,
        t`Check in $2x + 3y = 1$: $4 - 3 = 1$, true.`,
      ],
      answer: t`$x = 2$, $y = -1$, that is $(x, y) = (2, -1)$.`,
    },
    visualSpec: t`Drag a multiplier for each equation; the matching coefficients light up, and adding or subtracting the equations shows that variable vanish.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Multiplying an equation to match coefficients, but multiplying only the x and y terms and leaving the constant unchanged",
      remediation: "Multiplying an equation means multiplying **every** term, the number on the right too. Otherwise the two sides are no longer equal.",
      fallback: { kind: "ext", topic: "multiplying both sides of an equation (Std VIII)" },
    },
    {
      id: "C02-M2",
      mistake: "Subtracting one equation from another, but changing the sign of only the term that cancels, so the other terms get added",
      remediation: t`Subtracting an equation changes the sign of **every** term in it, the constant too: $-(x - 3y) = -x + 3y$. Write this out before you combine.`,
      fallback: { kind: "ext", topic: "subtracting algebraic expressions (Std VIII)" },
    },
    {
      id: "C02-M3",
      mistake: "Putting the found value back, then moving the known term across = without changing its sign",
      remediation: t`A term that crosses the $=$ sign changes its sign: $x + 4 = 8$ gives $x = 8 - 4$, not $8 + 4$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable (Std VIII)" },
    },
    {
      id: "C02-M4",
      mistake: "Writing the value found for y as x, and the value of x as y",
      remediation: t`A solution is an ordered pair $(x, y)$: keep track of which letter each value belongs to. Checking in both equations catches a swap.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Dropping the minus sign when a subtraction gives a negative number, such as working out -2 - 2 as 4",
      remediation: t`Taking a bigger number from a smaller one gives a negative answer: $-2 - 2 = -4$ and $4 - 6 = -2$. Check the pair in both equations to catch a lost sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Rewriting an equation such as 3x - 4y - 15 = 0 as 3x - 4y = -15, moving the constant across = without changing its sign",
      remediation: t`When the constant crosses the $=$ sign it changes its sign: $3x - 4y - 15 = 0$ becomes $3x - 4y = 15$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable (Std VIII)" },
    },
  ],
  engineNotes: [
    "C02-M1 applies only when an equation is multiplied to match coefficients (Q1, Q3, Q4); C02-M2 only when the equations are subtracted (Q4).",
    "C02-M5 differs from the key only when putting the value back leaves a negative right side (Q2, Q5, Q6).",
    t`C02-M6 applies only when the stem gives an equation as $\ldots = 0$ (Q6).`,
    t`C02-M4 gives the key whenever $x = y$: draw items with $x \ne y$.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.1 Q3(i)" },
      stem: t`Solve the simultaneous equations $x + y = 4$ and $2x - 5y = 1$.`,
      verify: { kind: "value", inputs: { a1: "1", b1: "1", c1: "4", a2: "2", b2: "-5", c2: "1", k1: "5" }, params: { elim: "y", op: "add", back: "1" } },
      options: [
        { key: "A", text: t`$x = 3,\ y = 1$`, correct: true, value: "3 + I" },
        { key: "B", text: t`$x = \frac{5}{7},\ y = \frac{23}{7}$`, correct: false, misconceptionId: "C02-M1", value: "5/7 + 23*I/7" },
        { key: "C", text: t`$x = 3,\ y = 7$`, correct: false, misconceptionId: "C02-M3", value: "3 + 7*I" },
        { key: "D", text: t`$x = 1,\ y = 3$`, correct: false, misconceptionId: "C02-M4", value: "1 + 3*I" },
      ],
      solution: {
        steps: [
          t`Multiply $x + y = 4$ by $5$, every term: $5x + 5y = 20$.`,
          t`Add it to $2x - 5y = 1$: the $y$ terms cancel, so $7x = 21$ and $x = 3$.`,
          t`Put $x = 3$ in $x + y = 4$: $y = 4 - 3 = 1$.`,
          t`Check: $6 - 5 = 1$, true. So $x = 3$, $y = 1$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q2(iv)" },
      stem: t`Solve the simultaneous equations $2x + y = -2$ and $3x - y = 7$.`,
      verify: { kind: "value", inputs: { a1: "2", b1: "1", c1: "-2", a2: "3", b2: "-1", c2: "7" }, params: { elim: "y", op: "add", back: "1" } },
      options: [
        { key: "A", text: t`$x = 1,\ y = 0$`, correct: false, misconceptionId: "C02-M3", value: "1" },
        { key: "B", text: t`$x = -4,\ y = 1$`, correct: false, misconceptionId: "C02-M4", value: "-4 + I" },
        { key: "C", text: t`$x = 1,\ y = 4$`, correct: false, misconceptionId: "C02-M5", value: "1 + 4*I" },
        { key: "D", text: t`$x = 1,\ y = -4$`, correct: true, value: "1 - 4*I" },
      ],
      solution: {
        steps: [
          t`The $y$ coefficients are $1$ and $-1$, so add the equations: $5x = 5$ and $x = 1$.`,
          t`Put $x = 1$ in $2x + y = -2$: $2 + y = -2$, so $y = -2 - 2 = -4$.`,
          t`Check: $3 - (-4) = 7$, true. So $x = 1$, $y = -4$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q3(iii)" },
      stem: t`By equating coefficients, solve $x - 2y = -10$ and $3x - 5y = -12$.`,
      verify: { kind: "value", inputs: { a1: "1", b1: "-2", c1: "-10", a2: "3", b2: "-5", c2: "-12", k1: "3" }, params: { elim: "x", op: "sub", back: "1" } },
      options: [
        { key: "A", text: t`$x = 18,\ y = 26$`, correct: false, misconceptionId: "C02-M4", value: "18 + 26*I" },
        { key: "B", text: t`$x = 26,\ y = 18$`, correct: true, value: "26 + 18*I" },
        { key: "C", text: t`$x = -14,\ y = -2$`, correct: false, misconceptionId: "C02-M1", value: "-14 - 2*I" },
        { key: "D", text: t`$x = -46,\ y = 18$`, correct: false, misconceptionId: "C02-M3", value: "-46 + 18*I" },
      ],
      solution: {
        steps: [
          t`Multiply $x - 2y = -10$ by $3$, every term: $3x - 6y = -30$.`,
          t`Subtract $3x - 5y = -12$, changing every sign: $3x - 6y - 3x + 5y$ $= -30 + 12$.`,
          t`So $-y = -18$ and $y = 18$.`,
          t`Put $y = 18$ in $x - 2y = -10$: $x - 36 = -10$, so $x = -10 + 36 = 26$. The solution is $x = 26$, $y = 18$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.1 Q3(iii)" },
      stem: t`Solve the simultaneous equations $3x - 5y = 16$ and $x - 3y = 4$.`,
      verify: { kind: "value", inputs: { a1: "3", b1: "-5", c1: "16", a2: "1", b2: "-3", c2: "4", k2: "3" }, params: { elim: "x", op: "sub", back: "2" } },
      options: [
        { key: "A", text: t`$x = 1,\ y = 1$`, correct: false, misconceptionId: "C02-M3", value: "1 + I" },
        { key: "B", text: t`$x = 7,\ y = 1$`, correct: true, value: "7 + I" },
        { key: "C", text: t`$x = 13,\ y = 3$`, correct: false, misconceptionId: "C02-M1", value: "13 + 3*I" },
        { key: "D", text: t`$x = -2,\ y = -2$`, correct: false, misconceptionId: "C02-M2", value: "-2 - 2*I" },
      ],
      solution: {
        steps: [
          t`Multiply $x - 3y = 4$ by $3$, every term: $3x - 9y = 12$.`,
          t`Subtract it from $3x - 5y = 16$, changing every sign: $3x - 5y - 3x + 9y$ $= 16 - 12$.`,
          t`So $4y = 4$ and $y = 1$.`,
          t`Put $y = 1$ in $x - 3y = 4$: $x - 3 = 4$, so $x = 4 + 3 = 7$. The solution is $x = 7$, $y = 1$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q3(ii)" },
      stem: t`By equating coefficients, solve $5x + 7y = 17$ and $3x - 2y = 4$.`,
      verify: { kind: "value", inputs: { a1: "5", b1: "7", c1: "17", a2: "3", b2: "-2", c2: "4", k1: "2", k2: "7" }, params: { elim: "y", op: "add", back: "2" } },
      options: [
        { key: "A", text: t`$x = 2,\ y = -1$`, correct: false, misconceptionId: "C02-M5", value: "2 - I" },
        { key: "B", text: t`$x = 2,\ y = 1$`, correct: true, value: "2 + I" },
        { key: "C", text: t`$x = 2,\ y = -5$`, correct: false, misconceptionId: "C02-M3", value: "2 - 5*I" },
        { key: "D", text: t`$x = 1,\ y = 2$`, correct: false, misconceptionId: "C02-M4", value: "1 + 2*I" },
      ],
      solution: {
        steps: [
          t`Multiply the first equation by $2$: $10x + 14y = 34$. Multiply the second by $7$: $21x - 14y = 28$.`,
          t`Now $14y$ and $-14y$ are opposite, so add: $31x = 62$ and $x = 2$.`,
          t`Put $x = 2$ in $3x - 2y = 4$: $6 - 2y = 4$, so $-2y = 4 - 6 = -2$.`,
          t`So $y = 1$. The solution is $x = 2$, $y = 1$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Elimination SolvedEx.4" },
      stem: t`Solve the simultaneous equations $3x - 4y - 15 = 0$ and $y + x + 2 = 0$.`,
      verify: { kind: "value", inputs: { a1: "3", b1: "-4", c1: "15", a2: "1", b2: "1", c2: "-2", k2: "4" }, params: { elim: "y", op: "add", back: "2", moved: "12" } },
      options: [
        { key: "A", text: t`$x = 1,\ y = -3$`, correct: true, value: "1 - 3*I" },
        { key: "B", text: t`$x = 1,\ y = -1$`, correct: false, misconceptionId: "C02-M3", value: "1 - I" },
        { key: "C", text: t`$x = 1,\ y = 3$`, correct: false, misconceptionId: "C02-M5", value: "1 + 3*I" },
        { key: "D", text: t`$x = -1,\ y = 3$`, correct: false, misconceptionId: "C02-M6", value: "-1 + 3*I" },
      ],
      solution: {
        steps: [
          t`Move each constant across $=$, changing its sign: $3x - 4y = 15$ and $x + y = -2$.`,
          t`Multiply $x + y = -2$ by $4$: $4x + 4y = -8$. Add it to $3x - 4y = 15$: $7x = 7$, so $x = 1$.`,
          t`Put $x = 1$ in $x + y = -2$: $y = -2 - 1 = -3$.`,
          t`Check: $3 + 12 - 15 = 0$, true. So $x = 1$, $y = -3$.`,
        ],
      },
    },
  ],
};
