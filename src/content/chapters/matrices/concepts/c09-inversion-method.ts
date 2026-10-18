import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Take $3x + 2y = 7$ and $x + y = 3$. **Is there one matrix that turns the column of right-hand sides $\begin{bmatrix} 7 \\ 3 \end{bmatrix}$ straight into $\begin{bmatrix} x \\ y \end{bmatrix}$?**`,
    reveal: t`Yes. The coefficients form $A = \begin{bmatrix} 3 & 2 \\ 1 & 1 \end{bmatrix}$, and its inverse is $A^{-1} = \begin{bmatrix} 1 & -2 \\ -1 & 3 \end{bmatrix}$. Then $A^{-1}\begin{bmatrix} 7 \\ 3 \end{bmatrix} = \begin{bmatrix} 7 - 6 \\ -7 + 9 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$, so $x = 1$ and $y = 2$ in one step. Check: $3 + 4 = 7$ and $1 + 2 = 3$.`,
  },
  explanation: {
    intuition: [
      t`A **system of linear equations** is a set of first-degree equations in the same unknowns.`,
      t`Matrix multiplication lets us write the whole system as one equation, $AX = B$.`,
      t`$A$ holds the coefficients, $X$ the unknowns and $B$ the constants on the right.`,
      t`For one number equation $ax = b$, we would divide: $x = \dfrac{b}{a}$.`,
      t`We can't divide by a matrix, so we multiply by its **inverse** $A^{-1}$ instead.`,
      t`That gives $X = A^{-1}B$: every unknown comes out at once.`,
    ],
    formal: [
      {
        title: "Matrix form AX = B",
        points: [
          t`A **coefficient** is the number multiplying an unknown, like $2$ in $2x$.`,
          t`$A$ is the **coefficient matrix**: row $i$ holds the coefficients of equation $i$.`,
          t`Column 1 of $A$ belongs to $x$, column 2 to $y$, column 3 to $z$.`,
          t`An unknown missing from an equation gets the coefficient $0$ in that row.`,
          t`$X = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$ is the column of unknowns; $B$ is the column of constants.`,
          t`So $x + y = 3$, $y - z = 1$, $x + z = 4$ has rows $(1, 1, 0)$, $(0, 1, -1)$, $(1, 0, 1)$.`,
        ],
      },
      {
        title: "Why X = A⁻¹B",
        points: [
          t`If $|A| \neq 0$, then $A$ is invertible: $A^{-1}$ exists.`,
          t`To **premultiply** means to multiply on the left. Premultiply $AX = B$ by $A^{-1}$.`,
          t`This gives $A^{-1}(AX) = A^{-1}B$, that is, $(A^{-1}A)X = A^{-1}B$.`,
          t`Since $A^{-1}A = I$ and $IX = X$, we get $X = A^{-1}B$.`,
          t`$B$ is a column, so $A^{-1}$ must stand on its left; $BA^{-1}$ is not even defined.`,
          t`Equal matrices have equal entries, so row 1 of $A^{-1}B$ is $x$, row 2 is $y$, row 3 is $z$.`,
        ],
      },
      {
        title: "The method of inversion",
        points: [
          t`Step 1: write the system as $AX = B$, each coefficient under its own unknown.`,
          t`Step 2: find $|A|$. If $|A| = 0$, $A^{-1}$ does not exist and this method fails.`,
          t`Step 3: find $\operatorname{adj}A$, then $A^{-1} = \dfrac{1}{|A|}\operatorname{adj}A$.`,
          t`Step 4: multiply $(\operatorname{adj}A)B$ first, then divide each entry by $|A|$.`,
          t`Step 5: read off the unknowns, and check them in one of the equations.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve by the method of inversion: $x - y + z = 4$, $2x + y - 3z = 0$ and $x + y + z = 2$.`,
      steps: [
        t`Matrix form: $A = \begin{bmatrix} 1 & -1 & 1 \\ 2 & 1 & -3 \\ 1 & 1 & 1 \end{bmatrix}$, $B = \begin{bmatrix} 4 \\ 0 \\ 2 \end{bmatrix}$, so $AX = B$.`,
        t`$|A| = 1(1 + 3) + 1(2 + 3) + 1(2 - 1)$ $= 4 + 5 + 1 = 10 \neq 0$, so $A^{-1}$ exists.`,
        t`The cofactors give $\operatorname{adj}A = \begin{bmatrix} 4 & 2 & 2 \\ -5 & 0 & 5 \\ 1 & -2 & 3 \end{bmatrix}$.`,
        t`$(\operatorname{adj}A)B = \begin{bmatrix} 16 + 0 + 4 \\ -20 + 0 + 10 \\ 4 + 0 + 6 \end{bmatrix}$ $= \begin{bmatrix} 20 \\ -10 \\ 10 \end{bmatrix}$.`,
        t`$X = A^{-1}B = \dfrac{1}{10}\begin{bmatrix} 20 \\ -10 \\ 10 \end{bmatrix} = \begin{bmatrix} 2 \\ -1 \\ 1 \end{bmatrix}$. Check: $2 + 1 + 1 = 4$.`,
      ],
      answer: t`$x = 2$, $y = -1$, $z = 1$.`,
    },
    visualSpec: t`Type a system and watch its coefficients drop into the rows of $A$ under their own unknowns, then tap $A^{-1}$ and see $B$ turn into $X$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Using the cofactor matrix $[A_{ij}]$ over $|A|$ as $A^{-1}$, without the transpose`,
      remediation: t`$A^{-1} = \dfrac{1}{|A|}\operatorname{adj}A$, and $\operatorname{adj}A$ is the **transpose** of the cofactor matrix. Also keep each equation as a **row** of $A$: writing equations as columns gives the same wrong answer.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C09-M2",
      mistake: t`Copying coefficients in the order the terms are written, so a missing unknown gets no $0$ and $y - x$ gives the row $(1, -1)$`,
      remediation: t`Each column of $A$ belongs to one unknown: column 1 to $x$, column 2 to $y$, column 3 to $z$. Put each coefficient under its own unknown, and write $0$ for a missing one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Using $\operatorname{adj}A$ in place of $A^{-1}$: $X = (\operatorname{adj}A)B$`,
      remediation: t`$A^{-1} = \dfrac{1}{|A|}\operatorname{adj}A$. After multiplying $(\operatorname{adj}A)B$, divide every entry by $|A|$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M4",
      mistake: t`Dividing $B$ by $|A|$ as if $A$ were a number: $X = \dfrac{B}{|A|}$`,
      remediation: t`There is no division by a matrix. Premultiply both sides by $A^{-1}$ to get $X = A^{-1}B$, where $A^{-1} = \dfrac{1}{|A|}\operatorname{adj}A$.`,
      fallback: { kind: "concept", id: "C08" },
    },
  ],
  engineNotes: [
    "C09-M1 gives the key when A is symmetric (e.g. Ex 2.3 Q.1 (i) and Misc II Q.1 (iv)); writing each equation as a column of A gives the same value as C09-M1.",
    "C09-M3 gives the key when |A| = 1, and its negative when |A| = -1.",
    "C09-M2 applies only when an equation's terms are out of x, y, z order or an unknown is missing before the last place, and the misread matrix must be non-singular (it is singular for Misc II Q.1 (v)); params.order gives the written order.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Ex 2.3 Q.1 (ii)" },
      stem: t`Solve by the method of inversion: $x + y = 4$ and $2x - y = 5$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 1], [2, -1]])", B: "Matrix([4, 5])" }, params: { ask: "X" } },
      options: [
        { key: "A", text: t`$x = -9,\ y = -3$`, correct: false, misconceptionId: "C09-M3", value: "(-9, -3)" },
        { key: "B", text: t`$x = - \frac{4}{3},\ y = - \frac{5}{3}$`, correct: false, misconceptionId: "C09-M4", value: "(-4/3, -5/3)" },
        { key: "C", text: t`$x = 3,\ y = 1$`, correct: true, value: "(3, 1)" },
        { key: "D", text: t`$x = \frac{14}{3},\ y = - \frac{1}{3}$`, correct: false, misconceptionId: "C09-M1", value: "(14/3, -1/3)" },
      ],
      solution: {
        steps: [
          t`$A = \begin{bmatrix} 1 & 1 \\ 2 & -1 \end{bmatrix}$, $B = \begin{bmatrix} 4 \\ 5 \end{bmatrix}$, and $|A| = -1 - 2 = -3$.`,
          t`$\operatorname{adj}A = \begin{bmatrix} -1 & -1 \\ -2 & 1 \end{bmatrix}$, so $(\operatorname{adj}A)B = \begin{bmatrix} -9 \\ -3 \end{bmatrix}$.`,
          t`$X = -\dfrac{1}{3}\begin{bmatrix} -9 \\ -3 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix}$: $x = 3$, $y = 1$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc II Q.1 (i)" },
      stem: t`The equations $2x - y = -2$ and $x + 5y = 5$ are solved by the method of inversion. The value of $y$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -1], [1, 5]])", B: "Matrix([-2, 5])" }, params: { ask: "y" } },
      options: [
        { key: "A", text: t`$\frac{12}{11}$`, correct: true, value: "12/11" },
        { key: "B", text: t`$\frac{8}{11}$`, correct: false, misconceptionId: "C09-M1", value: "8/11" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C09-M3", value: "12" },
        { key: "D", text: t`$\frac{5}{11}$`, correct: false, misconceptionId: "C09-M4", value: "5/11" },
      ],
      solution: {
        steps: [
          t`$A = \begin{bmatrix} 2 & -1 \\ 1 & 5 \end{bmatrix}$, $B = \begin{bmatrix} -2 \\ 5 \end{bmatrix}$, and $|A| = 10 + 1 = 11$.`,
          t`$\operatorname{adj}A = \begin{bmatrix} 5 & 1 \\ -1 & 2 \end{bmatrix}$, so $(\operatorname{adj}A)B = \begin{bmatrix} -5 \\ 12 \end{bmatrix}$.`,
          t`$X = \dfrac{1}{11}\begin{bmatrix} -5 \\ 12 \end{bmatrix}$, so $y = \dfrac{12}{11}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.3 Solved Ex.1 (reduction)" },
      stem: t`The equations $2x + 3y = 9$ and $y - x = -2$ are solved by the method of inversion. The value of $y$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 3], [-1, 1]])", B: "Matrix([9, -2])" }, params: { ask: "y", order: ["xy", "yx"] } },
      options: [
        { key: "A", text: t`$\frac{13}{5}$`, correct: false, misconceptionId: "C09-M2", value: "13/5" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C09-M3", value: "5" },
        { key: "C", text: t`$- \frac{2}{5}$`, correct: false, misconceptionId: "C09-M4", value: "-2/5" },
        { key: "D", text: t`$1$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`Write $y - x = -2$ as $-x + y = -2$, so $A = \begin{bmatrix} 2 & 3 \\ -1 & 1 \end{bmatrix}$, $B = \begin{bmatrix} 9 \\ -2 \end{bmatrix}$.`,
          t`$|A| = 2 + 3 = 5$ and $\operatorname{adj}A = \begin{bmatrix} 1 & -3 \\ 1 & 2 \end{bmatrix}$.`,
          t`$(\operatorname{adj}A)B = \begin{bmatrix} 9 + 6 \\ 9 - 4 \end{bmatrix} = \begin{bmatrix} 15 \\ 5 \end{bmatrix}$; divide by $5$: $x = 3$, $y = 1$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc II Q.1 (iii)" },
      stem: t`Solve by the method of inversion: $5x - y + 4z = 5$, $2x + 3y + 5z = 2$ and $5x - 2y + 6z = -1$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[5, -1, 4], [2, 3, 5], [5, -2, 6]])", B: "Matrix([5, 2, -1])" }, params: { ask: "X" } },
      options: [
        { key: "A", text: t`$x = 3,\ y = 2,\ z = -2$`, correct: true, value: "(3, 2, -2)" },
        { key: "B", text: t`$x = \frac{185}{51},\ y = \frac{5}{51},\ z = - \frac{8}{3}$`, correct: false, misconceptionId: "C09-M1", value: "(185/51, 5/51, -8/3)" },
        { key: "C", text: t`$x = 153,\ y = 102,\ z = -102$`, correct: false, misconceptionId: "C09-M3", value: "(153, 102, -102)" },
        { key: "D", text: t`$x = \frac{5}{51},\ y = \frac{2}{51},\ z = - \frac{1}{51}$`, correct: false, misconceptionId: "C09-M4", value: "(5/51, 2/51, -1/51)" },
      ],
      solution: {
        steps: [
          t`$A = \begin{bmatrix} 5 & -1 & 4 \\ 2 & 3 & 5 \\ 5 & -2 & 6 \end{bmatrix}$, $B = \begin{bmatrix} 5 \\ 2 \\ -1 \end{bmatrix}$.`,
          t`$|A| = 5(28) + 1(-13) + 4(-19)$ $= 140 - 13 - 76 = 51$.`,
          t`$\operatorname{adj}A = \begin{bmatrix} 28 & -2 & -17 \\ 13 & 10 & -17 \\ -19 & 5 & 17 \end{bmatrix}$, so $(\operatorname{adj}A)B = \begin{bmatrix} 153 \\ 102 \\ -102 \end{bmatrix}$.`,
          t`Divide by $51$: $x = 3$, $y = 2$, $z = -2$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc II Q.1 (ii)" },
      stem: t`For $a \neq 0$, the equations $x + y + z = 1$, $2x + 3y + 2z = 2$ and $ax + ay + 2az = 4$ are solved by the method of inversion. The value of $z$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 1, 1], [2, 3, 2], [a, a, 2*a]])", B: "Matrix([1, 2, 4])" }, params: { ask: "z" } },
      options: [
        { key: "A", text: t`$4 - a$`, correct: false, misconceptionId: "C09-M3", value: "4 - a" },
        { key: "B", text: t`$\frac{4}{a}$`, correct: false, misconceptionId: "C09-M4", value: "4/a" },
        { key: "C", text: t`$\frac{4 - a}{a}$`, correct: true, value: "(4 - a)/a" },
        { key: "D", text: t`$\frac{3}{a}$`, correct: false, misconceptionId: "C09-M1", value: "3/a" },
      ],
      solution: {
        steps: [
          t`$A = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 3 & 2 \\ a & a & 2a \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 2 \\ 4 \end{bmatrix}$, and $|A| = a$.`,
          t`Row 3 of $\operatorname{adj}A$ is $(A_{13}, A_{23}, A_{33}) = (-a, 0, 1)$.`,
          t`So $z = \dfrac{1}{a}(-a \cdot 1 + 0 \cdot 2 + 1 \cdot 4) = \dfrac{4 - a}{a}$.`,
        ],
      },
    },
  ],
};
