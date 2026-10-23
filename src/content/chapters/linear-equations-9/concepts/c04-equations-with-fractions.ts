import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`$\dfrac{x}{2} + \dfrac{y}{5} = 3$ has fractions in it. **Can you rewrite it with no fractions at all?**`,
    reveal: t`Multiply every term by $10$: $5x + 2y = 30$. It is now an ordinary linear equation, ready for elimination.`,
  },
  explanation: {
    intuition: [
      t`Fractions make simultaneous equations look harder than they are.`,
      t`When the denominators are numbers, multiply each equation to clear them.`,
      t`Then solve the new equations by elimination, as before.`,
      t`When $x$ and $y$ are in the denominators, as in $\dfrac{2}{x}$, change the letters instead.`,
      t`Put $p = \dfrac{1}{x}$ and $q = \dfrac{1}{y}$; the equations become linear in $p$ and $q$.`,
      t`Solve for $p$ and $q$, then turn them back into $x$ and $y$.`,
    ],
    formal: [
      {
        title: "Clear the denominators",
        points: [
          t`The **LCM** of the denominators is the smallest number each of them divides.`,
          t`In $\dfrac{x}{2} + \dfrac{y}{5} = 3$ the LCM of $2$ and $5$ is $10$.`,
          t`Multiply **every** term by $10$: $10 \times \dfrac{x}{2} = 5x$ and $10 \times \dfrac{y}{5} = 2y$.`,
          t`The number on the right is multiplied too: $10 \times 3 = 30$.`,
          t`So the equation becomes $5x + 2y = 30$.`,
          t`Dropping the denominators, $x + y = 3$, gives a different equation.`,
        ],
      },
      {
        title: "Letters in the denominator",
        points: [
          t`The **reciprocal** of $x$ is $\dfrac{1}{x}$; here $x \ne 0$ and $y \ne 0$.`,
          t`$\dfrac{4}{x} + \dfrac{5}{y} = 7$ is not linear in $x$ and $y$.`,
          t`But $\dfrac{4}{x} = 4 \times \dfrac{1}{x}$ and $\dfrac{5}{y} = 5 \times \dfrac{1}{y}$.`,
          t`Put $\dfrac{1}{x} = p$ and $\dfrac{1}{y} = q$.`,
          t`The equation becomes $4p + 5q = 7$, linear in $p$ and $q$.`,
          t`Do the same to both equations, then solve for $p$ and $q$ by elimination.`,
        ],
      },
      {
        title: "Back from p and q",
        points: [
          t`$p$ and $q$ are not the answer; $x$ and $y$ are.`,
          t`If $p = 5$, then $\dfrac{1}{x} = 5$, so $x = \dfrac{1}{5}$.`,
          t`If $q = \dfrac{1}{4}$, then $\dfrac{1}{y} = \dfrac{1}{4}$, so $y = 4$.`,
          t`Each value of $x$ or $y$ is the reciprocal of $p$ or $q$.`,
          t`Check the pair in both of the given equations.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve the simultaneous equations $\dfrac{3}{x} + \dfrac{2}{y} = 14$ and $\dfrac{5}{x} - \dfrac{2}{y} = 18$.`,
      steps: [
        t`Put $\dfrac{1}{x} = p$ and $\dfrac{1}{y} = q$: $3p + 2q = 14$ and $5p - 2q = 18$.`,
        t`The $q$ terms are opposite, so add: $8p = 32$, so $p = 4$.`,
        t`Put $p = 4$ in $3p + 2q = 14$: $12 + 2q = 14$, so $2q = 14 - 12 = 2$ and $q = 1$.`,
        t`$\dfrac{1}{x} = 4$ gives $x = \dfrac{1}{4}$; $\dfrac{1}{y} = 1$ gives $y = 1$.`,
        t`Check: $\dfrac{3}{1/4} + \dfrac{2}{1}$ $= 12 + 2 = 14$, true.`,
      ],
      answer: t`$x = \dfrac{1}{4}$, $y = 1$.`,
    },
    visualSpec: t`Slide a multiplier under an equation with fractions; when it reaches the LCM every denominator cancels, and a p, q switch turns the 1/x, 1/y form into a plain linear pair.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Clearing the denominators by multiplying the fraction terms but leaving the constant on the right unchanged (x/2 + y/5 = 3 becomes 5x + 2y = 3; 2/x + 3/y = 13 times xy becomes 2y + 3x = 13)",
      remediation: t`Clearing fractions means multiplying **every** term, the number on the right too: $\dfrac{x}{2} + \dfrac{y}{5} = 3$ times $10$ is $5x + 2y = 30$. With $x$ and $y$ in the denominators, put $p = \dfrac{1}{x}$, $q = \dfrac{1}{y}$ instead.`,
      fallback: { kind: "ext", topic: "multiplying both sides of an equation (Std VIII)" },
    },
    {
      id: "C04-M2",
      mistake: "Solving for p = 1/x and q = 1/y and giving p and q as the values of x and y",
      remediation: t`$p$ stands for $\dfrac{1}{x}$, not $x$. Once you have $p$ and $q$, take reciprocals: $p = 5$ gives $x = \dfrac{1}{5}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Removing the denominators without multiplying, so x/2 + y/5 = 3 is taken as x + y = 3",
      remediation: t`Denominators cannot just be crossed out. Multiply every term by the LCM of the denominators: $\dfrac{x}{2} + \dfrac{y}{5} = 3$ is $5x + 2y = 30$, not $x + y = 3$.`,
      fallback: { kind: "ext", topic: "solving equations with fractions in one variable (Std VIII)" },
    },
    {
      id: "C04-M4",
      mistake: "Writing the value found for y as x, and the value of x as y",
      remediation: t`A solution is an ordered pair $(x, y)$: keep track of which letter each value belongs to. Checking in both equations catches a swap.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: "Putting the found value back, then moving the known term across = without changing its sign",
      remediation: t`A term that crosses the $=$ sign changes its sign: $3x + 5 = 20$ gives $3x = 20 - 5$, not $20 + 5$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C04-M1 on the $\dfrac{1}{x}$, $\dfrac{1}{y}$ form is modelled as multiplying through by $xy$ and leaving the constant: it gives $x = q$, $y = p$ (Q3, Q4).`,
    "C04-M2 applies only to the 1/x, 1/y form (Q3, Q4, Q6); C04-M3 only to number denominators (Q1, Q5).",
    "C04-M5 works on the cleared equations (or on p and q, then takes reciprocals) using the item's elim and back params.",
    t`C04-M4 gives the key whenever $x = y$: draw items with $x \ne y$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q4(i)" },
      stem: t`Solve the simultaneous equations $\dfrac{x}{3} + \dfrac{y}{4} = 4$ and $\dfrac{x}{2} - \dfrac{y}{4} = 1$.`,
      verify: { kind: "value", inputs: { a1: "1/3", b1: "1/4", c1: "4", a2: "1/2", b2: "-1/4", c2: "1", L1: "12", L2: "4" }, params: { form: "frac", elim: "y", back: "2" } },
      options: [
        { key: "A", text: t`$x = 8,\ y = 6$`, correct: false, misconceptionId: "C04-M4", value: "8 + 6*I" },
        { key: "B", text: t`$x = 6,\ y = -16$`, correct: false, misconceptionId: "C04-M5", value: "6 - 16*I" },
        { key: "C", text: t`$x = 6,\ y = 8$`, correct: true, value: "6 + 8*I" },
        { key: "D", text: t`$x = \frac{5}{2},\ y = \frac{3}{2}$`, correct: false, misconceptionId: "C04-M3", value: "5/2 + 3*I/2" },
      ],
      solution: {
        steps: [
          t`Multiply the first equation by $12$: $4x + 3y = 48$. Multiply the second by $4$: $2x - y = 4$.`,
          t`Multiply $2x - y = 4$ by $3$: $6x - 3y = 12$. Add it to $4x + 3y = 48$: $10x = 60$, so $x = 6$.`,
          t`Put $x = 6$ in $2x - y = 4$: $12 - y = 4$, so $-y = 4 - 12 = -8$ and $y = 8$.`,
          t`The solution is $x = 6$, $y = 8$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q4(ii)" },
      stem: t`Solve the simultaneous equations $\dfrac{x}{3} + y = 11$ and $2x + \dfrac{y}{2} = 22$.`,
      verify: { kind: "value", inputs: { a1: "1/3", b1: "1", c1: "11", a2: "2", b2: "1/2", c2: "22", L1: "3", L2: "2" }, params: { form: "frac", elim: "x", back: "2" } },
      options: [
        { key: "A", text: t`$x = 5,\ y = 2$`, correct: false, misconceptionId: "C04-M1", value: "5 + 2*I" },
        { key: "B", text: t`$x = 8,\ y = 9$`, correct: false, misconceptionId: "C04-M4", value: "8 + 9*I" },
        { key: "C", text: t`$x = 13,\ y = 8$`, correct: false, misconceptionId: "C04-M5", value: "13 + 8*I" },
        { key: "D", text: t`$x = 9,\ y = 8$`, correct: true, value: "9 + 8*I" },
      ],
      solution: {
        steps: [
          t`Multiply the first equation by $3$: $x + 3y = 33$. Multiply the second by $2$: $4x + y = 44$.`,
          t`Multiply $x + 3y = 33$ by $4$: $4x + 12y = 132$. Subtract $4x + y = 44$: $11y = 88$, so $y = 8$.`,
          t`Put $y = 8$ in $4x + y = 44$: $4x = 44 - 8 = 36$, so $x = 9$.`,
          t`The solution is $x = 9$, $y = 8$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q4(iii)" },
      stem: t`Solve the simultaneous equations $\dfrac{2}{x} + \dfrac{3}{y} = 13$ and $\dfrac{5}{x} - \dfrac{4}{y} = -2$.`,
      verify: { kind: "value", inputs: { a1: "2", b1: "3", c1: "13", a2: "5", b2: "-4", c2: "-2" }, params: { form: "recip", elim: "y", back: "1" } },
      options: [
        { key: "A", text: t`$x = 2,\ y = 3$`, correct: false, misconceptionId: "C04-M2", value: "2 + 3*I" },
        { key: "B", text: t`$x = \frac{1}{3},\ y = \frac{1}{2}$`, correct: false, misconceptionId: "C04-M4", value: "1/3 + I/2" },
        { key: "C", text: t`$x = \frac{1}{2},\ y = \frac{1}{3}$`, correct: true, value: "1/2 + I/3" },
        { key: "D", text: t`$x = 3,\ y = 2$`, correct: false, misconceptionId: "C04-M1", value: "3 + 2*I" },
      ],
      solution: {
        steps: [
          t`Put $\dfrac{1}{x} = p$, $\dfrac{1}{y} = q$: $2p + 3q = 13$ and $5p - 4q = -2$.`,
          t`Multiply by $4$ and $3$: $8p + 12q = 52$ and $15p - 12q = -6$. Add: $23p = 46$, so $p = 2$.`,
          t`Put $p = 2$ in $2p + 3q = 13$: $3q = 13 - 4 = 9$, so $q = 3$.`,
          t`$\dfrac{1}{x} = 2$ and $\dfrac{1}{y} = 3$, so $x = \dfrac{1}{2}$, $y = \dfrac{1}{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Put $\dfrac{1}{x} = p$ and $\dfrac{1}{y} = q$ to solve $\dfrac{4}{x} + \dfrac{3}{y} = 3$ and $\dfrac{6}{x} - \dfrac{3}{y} = 2$.`,
      verify: { kind: "value", inputs: { a1: "4", b1: "3", c1: "3", a2: "6", b2: "-3", c2: "2" }, params: { form: "recip", elim: "y", back: "1" } },
      options: [
        { key: "A", text: t`$x = \frac{1}{3},\ y = \frac{1}{2}$`, correct: false, misconceptionId: "C04-M1", value: "1/3 + I/2" },
        { key: "B", text: t`$x = \frac{1}{2},\ y = \frac{1}{3}$`, correct: false, misconceptionId: "C04-M2", value: "1/2 + I/3" },
        { key: "C", text: t`$x = 2,\ y = \frac{3}{5}$`, correct: false, misconceptionId: "C04-M5", value: "2 + 3*I/5" },
        { key: "D", text: t`$x = 2,\ y = 3$`, correct: true, value: "2 + 3*I" },
      ],
      solution: {
        steps: [
          t`With $p$ and $q$: $4p + 3q = 3$ and $6p - 3q = 2$.`,
          t`Add: $10p = 5$, so $p = \dfrac{1}{2}$.`,
          t`Put $p = \dfrac{1}{2}$ in $4p + 3q = 3$: $3q = 3 - 2 = 1$, so $q = \dfrac{1}{3}$.`,
          t`$\dfrac{1}{x} = \dfrac{1}{2}$ and $\dfrac{1}{y} = \dfrac{1}{3}$, so $x = 2$, $y = 3$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`Solve the simultaneous equations $\dfrac{x}{2} + 2y = 11$ and $x + \dfrac{y}{3} = 11$.`,
      verify: { kind: "value", inputs: { a1: "1/2", b1: "2", c1: "11", a2: "1", b2: "1/3", c2: "11", L1: "2", L2: "3" }, params: { form: "frac", elim: "x", back: "2" } },
      options: [
        { key: "A", text: t`$x = 12,\ y = 3$`, correct: false, misconceptionId: "C04-M5", value: "12 + 3*I" },
        { key: "B", text: t`$x = 10,\ y = 3$`, correct: true, value: "10 + 3*I" },
        { key: "C", text: t`$x = 3,\ y = 2$`, correct: false, misconceptionId: "C04-M1", value: "3 + 2*I" },
        { key: "D", text: t`$x = 11,\ y = 0$`, correct: false, misconceptionId: "C04-M3", value: "11" },
      ],
      solution: {
        steps: [
          t`Multiply the first equation by $2$: $x + 4y = 22$. Multiply the second by $3$: $3x + y = 33$.`,
          t`Multiply $x + 4y = 22$ by $3$: $3x + 12y = 66$. Subtract $3x + y = 33$: $11y = 33$, so $y = 3$.`,
          t`Put $y = 3$ in $3x + y = 33$: $3x = 33 - 3 = 30$, so $x = 10$.`,
          t`The solution is $x = 10$, $y = 3$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`Solve the simultaneous equations $\dfrac{1}{x} + \dfrac{1}{y} = 5$ and $\dfrac{1}{x} - \dfrac{1}{y} = 1$.`,
      verify: { kind: "value", inputs: { a1: "1", b1: "1", c1: "5", a2: "1", b2: "-1", c2: "1" }, params: { form: "recip", elim: "y", back: "1" } },
      options: [
        { key: "A", text: t`$x = \frac{1}{3},\ y = \frac{1}{2}$`, correct: true, value: "1/3 + I/2" },
        { key: "B", text: t`$x = 3,\ y = 2$`, correct: false, misconceptionId: "C04-M2", value: "3 + 2*I" },
        { key: "C", text: t`$x = \frac{1}{2},\ y = \frac{1}{3}$`, correct: false, misconceptionId: "C04-M4", value: "1/2 + I/3" },
        { key: "D", text: t`$x = \frac{1}{3},\ y = \frac{1}{8}$`, correct: false, misconceptionId: "C04-M5", value: "1/3 + I/8" },
      ],
      solution: {
        steps: [
          t`Put $\dfrac{1}{x} = p$, $\dfrac{1}{y} = q$: $p + q = 5$ and $p - q = 1$.`,
          t`Add: $2p = 6$, so $p = 3$. Then $q = 5 - 3 = 2$.`,
          t`$\dfrac{1}{x} = 3$ and $\dfrac{1}{y} = 2$, so $x = \dfrac{1}{3}$, $y = \dfrac{1}{2}$.`,
        ],
      },
    },
  ],
};
