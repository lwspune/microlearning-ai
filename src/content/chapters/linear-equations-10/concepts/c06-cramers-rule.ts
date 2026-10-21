import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Solve $2x + y = 7$ and $x + 3y = 11$ without adding or subtracting the equations. **Can three small determinants do it?**`,
    reveal: t`Yes. $D = 2 \times 3 - 1 \times 1 = 5$. Put the constants in the $x$ column: $D_x = 7 \times 3 - 11 \times 1 = 10$. Put them in the $y$ column: $D_y = 2 \times 11 - 1 \times 7 = 15$. So $x = \frac{10}{5} = 2$ and $y = \frac{15}{5} = 3$. Check: $2 + 9 = 11$.`,
  },
  explanation: {
    intuition: [
      t`**Simultaneous equations** are two equations in $x$ and $y$ that we solve together.`,
      t`**Cramer's rule** solves them with determinants, instead of adding or subtracting the equations.`,
      t`First write both as $ax + by = c$: the $x$ term, the $y$ term, then the constant on the right.`,
      t`$D$ is the determinant of the coefficients: the $x$ column, then the $y$ column.`,
      t`For $D_x$ the constants replace the $x$ column; for $D_y$ they replace the $y$ column.`,
      t`Then $x = \frac{D_x}{D}$ and $y = \frac{D_y}{D}$: three determinants, two divisions.`,
    ],
    formal: [
      {
        title: "Rewrite both equations first",
        points: [
          t`Write the pair as $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$.`,
          t`A term that crosses the $=$ sign changes its sign.`,
          t`So $4x - 5 = 2y$ becomes $4x - 2y = 5$.`,
          t`And $3y = 7 - x$ becomes $x + 3y = 7$.`,
          t`Keep $x$ first and $y$ second in both equations.`,
          t`Only now read off $a$, $b$ and $c$, each with its sign.`,
        ],
      },
      {
        title: "The three determinants",
        points: [
          t`$D = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}$: the $x$ column, then the $y$ column.`,
          t`For $D_x$, the constants $c_1$, $c_2$ replace the $x$ column.`,
          t`$D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix}$`,
          t`For $D_y$, the constants replace the $y$ column.`,
          t`$D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix}$`,
          t`Find each value as before: the down-right product minus the up-right product.`,
        ],
      },
      {
        title: "Then divide by D",
        points: [
          t`$x = \frac{D_x}{D}$ and $y = \frac{D_y}{D}$.`,
          t`$D$ always goes on the bottom, in both fractions.`,
          t`Keep the signs: a negative divided by a negative is positive.`,
          t`Check by putting $x$ and $y$ back into both equations.`,
        ],
      },
      {
        title: "When D is not zero",
        points: [
          t`For $ax + by = c$ and $mx + ny = d$, $D = an - bm$.`,
          t`If $an \neq bm$, then $D \neq 0$ and the pair has **exactly one** solution.`,
          t`If $D = 0$, we cannot divide by it, so Cramer's rule cannot be used.`,
          t`Then the pair has no solution, or infinitely many.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $5x - 2y = 8$ and $3y = 5 - x$ by Cramer's rule.`,
      steps: [
        t`Rewrite the second equation: $x + 3y = 5$. So $a_1 = 5$, $b_1 = -2$, $c_1 = 8$ and $a_2 = 1$, $b_2 = 3$, $c_2 = 5$.`,
        t`$D = \begin{vmatrix} 5 & -2 \\ 1 & 3 \end{vmatrix}$ $= 5 \times 3 - 1 \times (-2)$ $= 15 + 2 = 17$.`,
        t`$D_x = \begin{vmatrix} 8 & -2 \\ 5 & 3 \end{vmatrix}$ $= 8 \times 3 - 5 \times (-2)$ $= 24 + 10 = 34$.`,
        t`$D_y = \begin{vmatrix} 5 & 8 \\ 1 & 5 \end{vmatrix}$ $= 5 \times 5 - 1 \times 8$ $= 25 - 8 = 17$.`,
        t`$x = \frac{D_x}{D} = \frac{34}{17} = 2$ and $y = \frac{D_y}{D} = \frac{17}{17} = 1$.`,
      ],
      answer: t`$(x, y) = (2, 1)$. Check: $5(2) - 2(1) = 8$ and $3(1) = 5 - 2$.`,
    },
    visualSpec: t`Drag the column of constants into the $x$ or the $y$ column of the coefficient grid and watch $D_x$, $D_y$, $x$ and $y$ update.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Puts the constants in the wrong column, so it pairs $x$ with $D_y$ and $y$ with $D_x$.`,
      remediation: t`For $D_x$ the constants replace the $x$ column, the first one; for $D_y$ they replace the $y$ column. So $x = \frac{D_x}{D}$ and $y = \frac{D_y}{D}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Divides the other way round: $x = \frac{D}{D_x}$.`,
      remediation: t`$D$ always goes on the bottom: $x = \frac{D_x}{D}$ and $y = \frac{D_y}{D}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Reads the numbers as printed, without first rewriting both equations as $ax + by = c$.`,
      remediation: t`First write each equation as $ax + by = c$. A term that crosses the $=$ sign changes its sign, so $2x + y - 9 = 0$ gives $c = 9$.`,
      fallback: { kind: "ext", topic: "moving a term to the other side of an equation (Std IX Linear Equations in Two Variables)" },
    },
    {
      id: "C06-M4",
      mistake: t`Adds the two products: $ad + bc$.`,
      remediation: t`A determinant subtracts: $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M5",
      mistake: t`Subtracts the products the wrong way round: $bc - ad$.`,
      remediation: t`Start with the down-right product: $ad - bc$, not $bc - ad$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M6",
      mistake: t`Ignores the sign of a negative $D$ when dividing.`,
      remediation: t`Keep the sign of $D$ when you divide: a negative divided by a negative is positive.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M5 cancels in $x = \frac{D_x}{D}$ (both determinants change sign), so only items asking for $D$, $D_x$ or $D_y$ detect it.`,
    t`C06-M6 gives the key when $D > 0$; detect it with $D < 0$.`,
    t`C06-M3 needs an equation not already in the form $ax + by = c$.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.3 Q.3(2)" },
      stem: t`To solve $4x + 3y - 4 = 0$ and $6x = 8 - 5y$ by Cramer's rule, find the value of $D$.`,
      verify: { kind: "value", inputs: { a1: "4", b1: "3", c1: "4", a2: "6", b2: "5", c2: "8" }, params: { ask: "D", wrongside: "c1,b2" } },
      options: [
        { key: "A", text: t`$-38$`, correct: false, misconceptionId: "C06-M3", value: "-38" },
        { key: "B", text: t`$38$`, correct: false, misconceptionId: "C06-M4", value: "38" },
        { key: "C", text: t`$-2$`, correct: false, misconceptionId: "C06-M5", value: "-2" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Rewrite both: $4x + 3y = 4$ and $6x + 5y = 8$.`,
          t`$D = \begin{vmatrix} 4 & 3 \\ 6 & 5 \end{vmatrix}$ $= 4 \times 5 - 6 \times 3$ $= 20 - 18 = 2$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q2(B)(i)" },
      stem: t`To solve $3x + 5y = 26$ and $x + 5y = 22$ by Cramer's rule, find the value of $D_x$.`,
      verify: { kind: "value", inputs: { a1: "3", b1: "5", c1: "26", a2: "1", b2: "5", c2: "22" }, params: { ask: "Dx" } },
      options: [
        { key: "A", text: t`$20$`, correct: true, value: "20" },
        { key: "B", text: t`$40$`, correct: false, misconceptionId: "C06-M1", value: "40" },
        { key: "C", text: t`$240$`, correct: false, misconceptionId: "C06-M4", value: "240" },
        { key: "D", text: t`$-20$`, correct: false, misconceptionId: "C06-M5", value: "-20" },
      ],
      solution: {
        steps: [
          t`$D_x$ puts the constants $26$ and $22$ in the $x$ column.`,
          t`$D_x = \begin{vmatrix} 26 & 5 \\ 22 & 5 \end{vmatrix}$ $= 26 \times 5 - 22 \times 5$ $= 130 - 110 = 20$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q1(B)(ii)" },
      stem: t`For simultaneous equations in $x$ and $y$, $D_x = -42$, $D_y = 12$ and $D = -3$. What is the value of $x$?`,
      verify: { kind: "value", inputs: { Dx: "-42", Dy: "12", D: "-3" }, params: { ask: "x" } },
      options: [
        { key: "A", text: t`$14$`, correct: true, value: "14" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C06-M1", value: "-4" },
        { key: "C", text: t`$\frac{1}{14}$`, correct: false, misconceptionId: "C06-M2", value: "1/14" },
        { key: "D", text: t`$-14$`, correct: false, misconceptionId: "C06-M6", value: "-14" },
      ],
      solution: {
        steps: [
          t`$x = \frac{D_x}{D} = \frac{-42}{-3}$.`,
          t`A negative divided by a negative is positive: $x = 14$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q3(B)(ii)" },
      stem: t`Solve $3x - 4y = 10$ and $4x + 3y = 5$ by Cramer's rule.`,
      verify: { kind: "value", inputs: { a1: "3", b1: "-4", c1: "10", a2: "4", b2: "3", c2: "5" }, params: { ask: "xy" } },
      options: [
        { key: "A", text: t`$\left(-\frac{10}{7}, -\frac{55}{7}\right)$`, correct: false, misconceptionId: "C06-M4", value: "-10/7 - 55*I/7" },
        { key: "B", text: t`$(2, -1)$`, correct: true, value: "2 - I" },
        { key: "C", text: t`$(-1, 2)$`, correct: false, misconceptionId: "C06-M1", value: "-1 + 2*I" },
        { key: "D", text: t`$(\frac{1}{2}, -1)$`, correct: false, misconceptionId: "C06-M2", value: "1/2 - I" },
      ],
      solution: {
        steps: [
          t`$D = \begin{vmatrix} 3 & -4 \\ 4 & 3 \end{vmatrix}$ $= 9 + 16 = 25$.`,
          t`$D_x = \begin{vmatrix} 10 & -4 \\ 5 & 3 \end{vmatrix}$ $= 30 + 20 = 50$.`,
          t`$D_y = \begin{vmatrix} 3 & 10 \\ 4 & 5 \end{vmatrix}$ $= 15 - 40 = -25$.`,
          t`$x = \frac{50}{25} = 2$ and $y = \frac{-25}{25} = -1$, so $(x, y) = (2, -1)$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/PS1 Q.5(1)" },
      stem: t`Solve $6x - 3y = -10$ and $3x + 5y - 8 = 0$ by Cramer's rule. What is the value of $y$?`,
      verify: { kind: "value", inputs: { a1: "6", b1: "-3", c1: "-10", a2: "3", b2: "5", c2: "8" }, params: { ask: "y", wrongside: "c2" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$- \frac{2}{3}$`, correct: false, misconceptionId: "C06-M1", value: "-2/3" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C06-M2", value: "1/2" },
        { key: "D", text: t`$- \frac{6}{13}$`, correct: false, misconceptionId: "C06-M3", value: "-6/13" },
      ],
      solution: {
        steps: [
          t`Rewrite the second equation: $3x + 5y = 8$.`,
          t`$D = \begin{vmatrix} 6 & -3 \\ 3 & 5 \end{vmatrix}$ $= 30 - (-9) = 39$.`,
          t`$D_y = \begin{vmatrix} 6 & -10 \\ 3 & 8 \end{vmatrix}$ $= 48 - (-30) = 78$.`,
          t`$y = \frac{D_y}{D} = \frac{78}{39} = 2$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q1(A)(iii)" },
      stem: t`For simultaneous equations in $x$ and $y$, $D_x = 49$, $D_y = -63$ and $D = -7$. What is the value of $y$?`,
      verify: { kind: "value", inputs: { Dx: "49", Dy: "-63", D: "-7" }, params: { ask: "y" } },
      options: [
        { key: "A", text: t`$\frac{1}{9}$`, correct: false, misconceptionId: "C06-M2", value: "1/9" },
        { key: "B", text: t`$-9$`, correct: false, misconceptionId: "C06-M6", value: "-9" },
        { key: "C", text: t`$9$`, correct: true, value: "9" },
        { key: "D", text: t`$-7$`, correct: false, misconceptionId: "C06-M1", value: "-7" },
      ],
      solution: {
        steps: [
          t`$y = \frac{D_y}{D} = \frac{-63}{-7}$.`,
          t`A negative divided by a negative is positive: $y = 9$.`,
        ],
      },
    },
  ],
};
