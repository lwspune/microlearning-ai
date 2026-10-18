import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Solve $z = 4$, $y + z = 7$ and $x + y + z = 9$. **Why is this system so much quicker than one where every equation has $x$, $y$ and $z$?**`,
    reveal: t`Start at the bottom: $z = 4$, then $y = 7 - 4 = 3$, then $x = 9 - 3 - 4 = 2$. Each equation has only one new unknown, so the system solves itself from the last line upwards. The reduction method uses row operations to bring any system to this shape.`,
  },
  explanation: {
    intuition: [
      t`A system like $2x + 3y = 9$, $x - y = 2$ is written $AX = B$.`,
      t`$A$ holds the coefficients, $X$ the unknowns and $B$ the constants.`,
      t`A system is easy when its last equation has just one unknown: solve that first.`,
      t`Put that value into the equation above, which then has one unknown too.`,
      t`The **reduction method** uses row operations to turn any system into this easy shape.`,
      t`A row operation changes whole equations, so it acts on $A$ and $B$ together.`,
    ],
    formal: [
      {
        title: "Row operations on equations",
        points: [
          t`Each row of $A$, with the matching entry of $B$, is one equation.`,
          t`$R_2 \to R_2 - 3R_1$ means: equation 2 minus 3 times equation 1.`,
          t`Every term changes, the constant too: $b_2$ becomes $b_2 - 3b_1$.`,
          t`$R_3 \to 2R_3 - 5R_1$ doubles equation 3 first, its constant included.`,
          t`These operations never change the solution of the system.`,
          t`Use row operations only: a column operation would mix up the unknowns.`,
        ],
      },
      {
        title: "Reaching triangular form",
        points: [
          t`Write $[A \mid B]$: the matrix $A$ with $B$ added as a last column.`,
          t`An **upper triangular** matrix has every entry below its diagonal equal to 0.`,
          t`Use $R_1$ to make the first entry of $R_2$ (and of $R_3$) zero.`,
          t`In a $3 \times 3$ system, then use $R_2$ to make the second entry of $R_3$ zero.`,
          t`Stop when $A$ is upper triangular; the last row now has one unknown.`,
          t`If a diagonal entry is 0, the system has no unique solution.`,
        ],
      },
      {
        title: "Back-substitution",
        points: [
          t`**Back-substitution** means solving from the last equation upwards.`,
          t`The last row has one unknown: $4z = 8$ gives $z = 2$.`,
          t`Put it into the row above, which now has one unknown left.`,
          t`A known term changes sign as it crosses: $y + 3z = 5$ gives $y = 5 - 6$.`,
          t`Terms to the right of the diagonal still count: the system is triangular, not diagonal.`,
          t`Check the answer in the original equations.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve by the method of reduction: $x + y + z = 1$, $2x + 3y + 2z = 2$ and $x + y + 2z = 4$.`,
      steps: [
        t`Write $[A \mid B]$: rows $(1, 1, 1 \mid 1)$, $(2, 3, 2 \mid 2)$ and $(1, 1, 2 \mid 4)$.`,
        t`$R_2 \to R_2 - 2R_1$: row 2 becomes $(0, 1, 0 \mid 0)$.`,
        t`$R_3 \to R_3 - R_1$: row 3 becomes $(0, 0, 1 \mid 3)$. Now $A$ is upper triangular.`,
        t`Last row: $z = 3$. Row 2: $y = 0$. Row 1: $x + 0 + 3 = 1$, so $x = -2$.`,
        t`Check: $2(-2) + 0 + 6 = 2$ and $-2 + 0 + 6 = 4$.`,
      ],
      answer: t`$x = -2$, $y = 0$, $z = 3$.`,
    },
    visualSpec: t`Tap a row operation and watch the whole row of $[A \mid B]$, constant included, update at once; the entries below the diagonal turn to 0 one by one, then the unknowns light up from the bottom row upwards.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Applying the row operations to $A$ only, leaving the constants $B$ unchanged`,
      remediation: t`A row operation changes whole equations, so apply it to $B$ too: in $R_2 \to R_2 - 3R_1$, $b_2$ becomes $b_2 - 3b_1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M2",
      mistake: "Reading the triangular system as if it were diagonal: each unknown is its constant divided by the diagonal entry",
      remediation: "Only the last row has one unknown. Each row above still has terms to the right of the diagonal: put in the values already found, then solve.",
      fallback: { kind: "ext", topic: "solving linear equations by substitution" },
    },
    {
      id: "C10-M3",
      mistake: "Moving a known term across the equals sign without changing its sign",
      remediation: t`A term changes sign when it crosses the equals sign: $3x + y = 7$ with $y = -2$ gives $3x = 7 + 2$.`,
      fallback: { kind: "ext", topic: "transposing terms in a linear equation" },
    },
    {
      id: "C10-M4",
      mistake: t`In $R_i \to sR_i + cR_j$, multiplying the coefficients of $R_j$ by $c$ but not its constant`,
      remediation: t`The multiplier acts on the whole row, constant included: in $R_2 \to 2R_2 - 3R_1$, $b_2$ becomes $2b_2 - 3b_1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C10-M1 and C10-M4 depend on the row operations, so every item names them in its stem; C10-M4 gives the key when every multiplier c is 1 or -1.",
    "C10-M2 and C10-M3 give the key's value for the last unknown; ask for an earlier unknown or the whole solution to detect them (C10-Q5 asks for x).",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.2 (i)" },
      stem: t`Solve by the method of reduction, using $R_2 \to 2R_2 - 3R_1$: $2x + y = 5$ and $3x + 5y = -3$. The solution $(x, y)$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 1], [3, 5]])", B: "Matrix([[5], [-3]])" }, params: { ops: "R2=2*R2-3*R1" } },
      options: [
        { key: "A", text: t`$(\frac{19}{7}, - \frac{3}{7})$`, correct: false, misconceptionId: "C10-M1", value: "(19/7, -3/7)" },
        { key: "B", text: t`$(\frac{5}{2}, -3)$`, correct: false, misconceptionId: "C10-M2", value: "(5/2, -3)" },
        { key: "C", text: t`$(1, -3)$`, correct: false, misconceptionId: "C10-M3", value: "(1, -3)" },
        { key: "D", text: t`$(4, -3)$`, correct: true, value: "(4, -3)" },
      ],
      solution: {
        steps: [
          t`$[A \mid B]$ has rows $(2, 1 \mid 5)$ and $(3, 5 \mid -3)$.`,
          t`$R_2 \to 2R_2 - 3R_1$: row 2 becomes $(0, 7 \mid -21)$, so $y = -3$.`,
          t`Row 1: $2x - 3 = 5$, so $2x = 8$ and $x = 4$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.2 (iv)" },
      stem: t`Solve by the method of reduction, using $R_2 \to 5R_2 - 7R_1$: $5x + 2y = 4$ and $7x + 3y = 5$. The solution $(x, y)$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[5, 2], [7, 3]])", B: "Matrix([[4], [5]])" }, params: { ops: "R2=5*R2-7*R1" } },
      options: [
        { key: "A", text: t`$(2, -3)$`, correct: true, value: "(2, -3)" },
        { key: "B", text: t`$(- \frac{6}{5}, 5)$`, correct: false, misconceptionId: "C10-M1", value: "(-6/5, 5)" },
        { key: "C", text: t`$(\frac{4}{5}, -3)$`, correct: false, misconceptionId: "C10-M2", value: "(4/5, -3)" },
        { key: "D", text: t`$(- \frac{38}{5}, 21)$`, correct: false, misconceptionId: "C10-M4", value: "(-38/5, 21)" },
      ],
      solution: {
        steps: [
          t`$[A \mid B]$ has rows $(5, 2 \mid 4)$ and $(7, 3 \mid 5)$.`,
          t`$R_2 \to 5R_2 - 7R_1$: row 2 becomes $(0, 1 \mid 25 - 28)$, so $y = -3$.`,
          t`Row 1: $5x - 6 = 4$, so $5x = 10$ and $x = 2$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.2 (ii)" },
      stem: t`Solve by the method of reduction, using $R_2 \to R_2 - 3R_1$: $x + 3y = 2$ and $3x + 5y = 4$. The solution $(x, y)$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 3], [3, 5]])", B: "Matrix([[2], [4]])" }, params: { ops: "R2=R2-3*R1" } },
      options: [
        { key: "A", text: t`$(\frac{7}{2}, - \frac{1}{2})$`, correct: false, misconceptionId: "C10-M4", value: "(7/2, -1/2)" },
        { key: "B", text: t`$(\frac{1}{2}, \frac{1}{2})$`, correct: true, value: "(1/2, 1/2)" },
        { key: "C", text: t`$(2, \frac{1}{2})$`, correct: false, misconceptionId: "C10-M2", value: "(2, 1/2)" },
        { key: "D", text: t`$(\frac{7}{2}, \frac{1}{2})$`, correct: false, misconceptionId: "C10-M3", value: "(7/2, 1/2)" },
      ],
      solution: {
        steps: [
          t`$[A \mid B]$ has rows $(1, 3 \mid 2)$ and $(3, 5 \mid 4)$.`,
          t`$R_2 \to R_2 - 3R_1$: row 2 becomes $(0, -4 \mid -2)$, so $y = \frac{1}{2}$.`,
          t`Row 1: $x + \frac{3}{2} = 2$, so $x = \frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc II Q.2 (i)" },
      stem: t`Solve $x - y + z = 1$, $2x - y = 1$ and $3x + 3y - 4z = 2$ by the method of reduction, using $R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - 3R_1$, then $R_3 \to R_3 - 6R_2$. The solution $(x, y, z)$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 1], [2, -1, 0], [3, 3, -4]])", B: "Matrix([[1], [1], [2]])" }, params: { ops: "R2=R2-2*R1;R3=R3-3*R1;R3=R3-6*R2" } },
      options: [
        { key: "A", text: t`$(1, -1, 1)$`, correct: false, misconceptionId: "C10-M2", value: "(1, -1, 1)" },
        { key: "B", text: t`$(5, -3, 1)$`, correct: false, misconceptionId: "C10-M3", value: "(5, -3, 1)" },
        { key: "C", text: t`$(1, 1, 1)$`, correct: true, value: "(1, 1, 1)" },
        { key: "D", text: t`$(\frac{12}{5}, \frac{9}{5}, \frac{2}{5})$`, correct: false, misconceptionId: "C10-M1", value: "(12/5, 9/5, 2/5)" },
      ],
      solution: {
        steps: [
          t`$R_2 \to R_2 - 2R_1$ gives $(0, 1, -2 \mid -1)$; $R_3 \to R_3 - 3R_1$ gives $(0, 6, -7 \mid -1)$.`,
          t`$R_3 \to R_3 - 6R_2$ gives $(0, 0, 5 \mid 5)$, so $z = 1$.`,
          t`Row 2: $y - 2 = -1$, so $y = 1$. Row 1: $x - 1 + 1 = 1$, so $x = 1$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc II Q.2 (iv)" },
      stem: t`Solve $x + y + z = 6$, $3x - y + 3z = 10$ and $5x + 5y - 4z = 3$ by the method of reduction, using $R_2 \to R_2 - 3R_1$ and $R_3 \to R_3 - 5R_1$. The value of $x$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 1, 1], [3, -1, 3], [5, 5, -4]])", B: "Matrix([[6], [10], [3]])" }, params: { ops: "R2=R2-3*R1;R3=R3-5*R1", ask: "x" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C10-M2", value: "6" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C10-M3", value: "11" },
        { key: "D", text: t`$\frac{20}{3}$`, correct: false, misconceptionId: "C10-M4", value: "20/3" },
      ],
      solution: {
        steps: [
          t`$R_2 \to R_2 - 3R_1$ gives $(0, -4, 0 \mid -8)$; $R_3 \to R_3 - 5R_1$ gives $(0, 0, -9 \mid -27)$.`,
          t`Last row: $-9z = -27$, so $z = 3$. Row 2: $-4y = -8$, so $y = 2$.`,
          t`Row 1: $x + 2 + 3 = 6$, so $x = 1$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.2 (iii)" },
      stem: t`Solve by the method of reduction, using $R_2 \to 3R_2 - 4R_1$: $3x - y = 1$ and $4x + y = 6$. The solution $(x, y)$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, -1], [4, 1]])", B: "Matrix([[1], [6]])" }, params: { ops: "R2=3*R2-4*R1" } },
      options: [
        { key: "A", text: t`$(1, 2)$`, correct: true, value: "(1, 2)" },
        { key: "B", text: t`$(\frac{13}{21}, \frac{6}{7})$`, correct: false, misconceptionId: "C10-M1", value: "(13/21, 6/7)" },
        { key: "C", text: t`$(- \frac{1}{3}, 2)$`, correct: false, misconceptionId: "C10-M3", value: "(-1/3, 2)" },
        { key: "D", text: t`$(\frac{8}{7}, \frac{17}{7})$`, correct: false, misconceptionId: "C10-M4", value: "(8/7, 17/7)" },
      ],
      solution: {
        steps: [
          t`$[A \mid B]$ has rows $(3, -1 \mid 1)$ and $(4, 1 \mid 6)$.`,
          t`$R_2 \to 3R_2 - 4R_1$: row 2 becomes $(0, 7 \mid 18 - 4)$, so $7y = 14$ and $y = 2$.`,
          t`Row 1: $3x - 2 = 1$, so $3x = 3$ and $x = 1$.`,
        ],
      },
    },
  ],
};
