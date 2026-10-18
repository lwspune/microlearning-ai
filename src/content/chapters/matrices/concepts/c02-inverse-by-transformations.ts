import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`The row operation $R_2 \to R_2 - 2R_1$ turns $\begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix}$ into $I$. **Can you use that to write down its inverse, with no formula?**`,
    reveal: t`Yes. Do the same operation to $I$: it becomes $\begin{bmatrix} 1 & 0 \\ -2 & 1 \end{bmatrix}$. That matrix undoes the original one: their product is $I$. The operations that turn $A$ into $I$, done to $I$, build $A^{-1}$.`,
  },
  explanation: {
    intuition: [
      t`Recall: an **elementary row operation** swaps two rows, multiplies a row by a non-zero number, or adds a multiple of one row to another.`,
      t`Each row operation on $A$ is the same as multiplying $A$ on the left by a fixed matrix.`,
      t`So if some row operations turn $A$ into $I$, together they act as one matrix $B$ with $BA = I$.`,
      t`That $B$ is the **inverse** $A^{-1}$: the matrix whose product with $A$ is $I$.`,
      t`To record $B$, do every operation to $I$ as well: $I$ turns into $B$ step by step.`,
      t`Column operations work the same way from the right, but you use one kind only, never both.`,
    ],
    formal: [
      {
        title: "The row method",
        points: [
          t`Write $A = IA$; the $I$ on the right will record every step.`,
          t`Do each row operation to the $A$ on the left and to that $I$; the last $A$ stays as it is.`,
          t`Work column by column: make the pivot (the diagonal entry) $1$, then clear the rest of its column.`,
          t`If a pivot is $0$, first interchange its row with a row below it.`,
          t`When the left side is $I$, the equation reads $I = BA$, so $A^{-1} = B$.`,
          t`The book writes this as $AA^{-1} = I$, with the same row operations on $A$ and on $I$.`,
        ],
      },
      {
        title: "The column method",
        points: [
          t`Write $A = AI$; now the $I$ on the right records column operations.`,
          t`Do each column operation to the $A$ on the left and to the $I$ on the right.`,
          t`Work row by row: make the pivot $1$, then clear the rest of its row.`,
          t`When the left side is $I$, it reads $I = AB$, so $A^{-1} = B$.`,
          t`The book writes this as $A^{-1}A = I$; both methods give the same inverse.`,
        ],
      },
      {
        title: "Never mix rows and columns",
        points: [
          t`A row operation multiplies from the left: $A$ becomes $EA$ for some matrix $E$.`,
          t`A column operation multiplies from the right: $A$ becomes $AF$.`,
          t`Rows $R$ and columns $C$ that turn $A$ into $I$ give $RAC = I$, so $A^{-1} = CR$.`,
          t`Recording all of them on one $I$ builds $RC$ instead, usually a different matrix.`,
          t`So choose rows ($A = IA$) or columns ($A = AI$) and keep to that kind to the end.`,
        ],
      },
      {
        title: "Every step on both sides",
        points: [
          t`The two sides stay equal only if every step is done to both.`,
          t`An interchange on the left needs the same interchange on $I$.`,
          t`Dividing a row by its pivot on the left needs the same division on $I$.`,
          t`In the row method $I$ gets the same **row** operation, never the matching column one.`,
          t`Stop only when the left side is exactly $I$, not when it is just triangular.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $A^{-1}$ for $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ by elementary row transformations.`,
      steps: [
        t`Write $A = IA$: $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ $= \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} A$. The pivot $a_{11}$ is already $1$.`,
        t`Clear column 1 with $R_2 \to R_2 - 3R_1$ on both sides: $\begin{bmatrix} 1 & 2 \\ 0 & -2 \end{bmatrix}$ $= \begin{bmatrix} 1 & 0 \\ -3 & 1 \end{bmatrix} A$.`,
        t`Make the second pivot $1$ with $R_2 \to -\frac{1}{2}R_2$: $\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$ $= \begin{bmatrix} 1 & 0 \\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix} A$.`,
        t`Clear column 2 with $R_1 \to R_1 - 2R_2$: $I = \begin{bmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix} A$.`,
      ],
      answer: t`$A^{-1} = \begin{bmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix}$.`,
    },
    visualSpec: t`Step through the row operations one click at a time: the left matrix walks to $I$ while the $I$ on the right turns into $A^{-1}$, with each operation lit on both sides.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Mixing the two kinds in one reduction: rows to clear below the diagonal, then columns to finish (or the reverse)",
      remediation: t`Row operations multiply from the left and column operations from the right, so mixing them on one $I$ builds the wrong product. Use only row operations with $A = IA$, or only column operations with $A = AI$, all the way.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: "Doing row operations on A but the same-named column operations on I (or the reverse), which gives the transpose of the inverse",
      remediation: t`The $I$ must get exactly the same operation as $A$: a row operation in $A = IA$, a column operation in $A = AI$. Switching the kind on $I$ gives the transpose of $A^{-1}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: "Interchanging two rows (or columns) of A but not of I",
      remediation: t`Every step is done to both sides, an interchange too. When you swap two rows of the left side, swap the same two rows of $I$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Dividing a row (or column) of A by its pivot but not the same row of I",
      remediation: "When you divide a row of the left side by its pivot, divide the same row of the right side too, so the two sides stay equal.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Stopping once A is triangular and reading the I side as the inverse",
      remediation: t`The method ends only when the left side is exactly $I$. Keep going: make every pivot $1$ and clear the entries above the diagonal too.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M2 gives the key when $A^{-1}$ is symmetric (as in C02-Q6): diagnose it with a non-symmetric $A$.`,
    "C02-M3 shows only when the reduction meets a zero pivot and needs an interchange (C02-Q2).",
    t`C02-M4 shows only when some pivot is not $1$.`,
    t`C02-M1 and C02-M5 need a step below the diagonal (right of it, in the column method): they can't be told apart from the key when $A$ is already triangular that way.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.6 (ii)" },
      stem: t`Using elementary row transformations, the inverse of $A = \begin{bmatrix} 2 & -3 \\ -1 & 2 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -3], [-1, 2]])" }, params: { by: "row" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & 3\\1 & 2\end{matrix}\right]$`, correct: true, value: "Matrix([[2, 3], [1, 2]])" },
        { key: "B", text: t`$\left[\begin{matrix}2 & 1\\3 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M2", value: "Matrix([[2, 1], [3, 2]])" },
        { key: "C", text: t`$\left[\begin{matrix}\frac{5}{2} & \frac{3}{2}\\1 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M4", value: "Matrix([[5/2, 3/2], [1, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}\frac{1}{2} & 0\\\frac{1}{2} & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M5", value: "Matrix([[1/2, 0], [1/2, 1]])" },
      ],
      solution: {
        steps: [
          t`Write $A = IA$. Make the first pivot $1$ with $R_1 \to \frac{1}{2}R_1$, then $R_2 \to R_2 + R_1$: $\begin{bmatrix} 1 & -\frac{3}{2} \\ 0 & \frac{1}{2} \end{bmatrix}$ $= \begin{bmatrix} \frac{1}{2} & 0 \\ \frac{1}{2} & 1 \end{bmatrix} A$.`,
          t`$R_2 \to 2R_2$, then $R_1 \to R_1 + \frac{3}{2}R_2$: $I = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix} A$.`,
          t`So $A^{-1} = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.6 (iii)" },
      stem: t`Using elementary row transformations, the inverse of $A = \begin{bmatrix} 0 & 1 & 2 \\ 1 & 2 & 3 \\ 3 & 1 & 1 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[0, 1, 2], [1, 2, 3], [3, 1, 1]])" }, params: { by: "row" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}- \frac{1}{2} & \frac{1}{2} & \frac{1}{2}\\3 & -4 & -1\\- \frac{3}{2} & \frac{5}{2} & \frac{1}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M3", value: "Matrix([[-1/2, 1/2, 1/2], [3, -4, -1], [-3/2, 5/2, 1/2]])" },
        { key: "B", text: t`$\left[\begin{matrix}3 & -2 & 1\\-9 & 6 & -2\\5 & -3 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M4", value: "Matrix([[3, -2, 1], [-9, 6, -2], [5, -3, 1]])" },
        { key: "C", text: t`$\left[\begin{matrix}\frac{1}{2} & -4 & \frac{5}{2}\\- \frac{1}{2} & 3 & - \frac{3}{2}\\\frac{1}{2} & -1 & \frac{1}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M2", value: "Matrix([[1/2, -4, 5/2], [-1/2, 3, -3/2], [1/2, -1, 1/2]])" },
        { key: "D", text: t`$\left[\begin{matrix}\frac{1}{2} & - \frac{1}{2} & \frac{1}{2}\\-4 & 3 & -1\\\frac{5}{2} & - \frac{3}{2} & \frac{1}{2}\end{matrix}\right]$`, correct: true, value: "Matrix([[1/2, -1/2, 1/2], [-4, 3, -1], [5/2, -3/2, 1/2]])" },
      ],
      solution: {
        steps: [
          t`Write $A = IA$. The pivot $a_{11}$ is $0$, so $R_1 \leftrightarrow R_2$ on both sides, then $R_3 \to R_3 - 3R_1$: $\begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 0 & -5 & -8 \end{bmatrix}$ $= \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & -3 & 1 \end{bmatrix} A$.`,
          t`$R_1 \to R_1 - 2R_2$, $R_3 \to R_3 + 5R_2$: $\begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 2 \end{bmatrix}$ $= \begin{bmatrix} -2 & 1 & 0 \\ 1 & 0 & 0 \\ 5 & -3 & 1 \end{bmatrix} A$.`,
          t`$R_3 \to \frac{1}{2}R_3$, then $R_1 \to R_1 + R_3$, $R_2 \to R_2 - 2R_3$: $I = \begin{bmatrix} \frac{1}{2} & -\frac{1}{2} & \frac{1}{2} \\ -4 & 3 & -1 \\ \frac{5}{2} & -\frac{3}{2} & \frac{1}{2} \end{bmatrix} A$.`,
          t`So $A^{-1} = \begin{bmatrix} \frac{1}{2} & -\frac{1}{2} & \frac{1}{2} \\ -4 & 3 & -1 \\ \frac{5}{2} & -\frac{3}{2} & \frac{1}{2} \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.6 (iv)" },
      stem: t`Using elementary row transformations, the inverse of $A = \begin{bmatrix} 2 & 0 & -1 \\ 5 & 1 & 0 \\ 0 & 1 & 3 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 0, -1], [5, 1, 0], [0, 1, 3]])" }, params: { by: "row" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}\frac{1}{2} & 0 & 0\\- \frac{5}{2} & 1 & 0\\\frac{5}{2} & -1 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M5", value: "Matrix([[1/2, 0, 0], [-5/2, 1, 0], [5/2, -1, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}3 & -1 & 1\\-15 & 6 & -5\\5 & -2 & 2\end{matrix}\right]$`, correct: true, value: "Matrix([[3, -1, 1], [-15, 6, -5], [5, -2, 2]])" },
        { key: "C", text: t`$\left[\begin{matrix}\frac{1}{2} & 0 & \frac{1}{4}\\- \frac{5}{2} & 1 & - \frac{15}{4}\\5 & -2 & \frac{19}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M1", value: "Matrix([[1/2, 0, 1/4], [-5/2, 1, -15/4], [5, -2, 19/2]])" },
        { key: "D", text: t`$\left[\begin{matrix}3 & -15 & 5\\-1 & 6 & -2\\1 & -5 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M2", value: "Matrix([[3, -15, 5], [-1, 6, -2], [1, -5, 2]])" },
      ],
      solution: {
        steps: [
          t`Write $A = IA$. $R_1 \to \frac{1}{2}R_1$, then $R_2 \to R_2 - 5R_1$: $\begin{bmatrix} 1 & 0 & -\frac{1}{2} \\ 0 & 1 & \frac{5}{2} \\ 0 & 1 & 3 \end{bmatrix}$ $= \begin{bmatrix} \frac{1}{2} & 0 & 0 \\ -\frac{5}{2} & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} A$.`,
          t`$R_3 \to R_3 - R_2$: $\begin{bmatrix} 1 & 0 & -\frac{1}{2} \\ 0 & 1 & \frac{5}{2} \\ 0 & 0 & \frac{1}{2} \end{bmatrix}$ $= \begin{bmatrix} \frac{1}{2} & 0 & 0 \\ -\frac{5}{2} & 1 & 0 \\ \frac{5}{2} & -1 & 1 \end{bmatrix} A$.`,
          t`$R_3 \to 2R_3$, then $R_1 \to R_1 + \frac{1}{2}R_3$, $R_2 \to R_2 - \frac{5}{2}R_3$: $I = \begin{bmatrix} 3 & -1 & 1 \\ -15 & 6 & -5 \\ 5 & -2 & 2 \end{bmatrix} A$.`,
          t`So $A^{-1} = \begin{bmatrix} 3 & -1 & 1 \\ -15 & 6 & -5 \\ 5 & -2 & 2 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.17" },
      stem: t`Using elementary column transformations, the inverse of $A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 3 \\ 1 & 2 & 1 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 0, 1], [0, 2, 3], [1, 2, 1]])" }, params: { by: "col" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & 1 & -1\\3 & 4 & -3\\-1 & -1 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M4", value: "Matrix([[2, 1, -1], [3, 4, -3], [-1, -1, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{2}{3} & - \frac{1}{3} & \frac{1}{3}\\- \frac{1}{2} & 0 & \frac{1}{2}\\\frac{1}{3} & \frac{1}{3} & - \frac{1}{3}\end{matrix}\right]$`, correct: true, value: "Matrix([[2/3, -1/3, 1/3], [-1/2, 0, 1/2], [1/3, 1/3, -1/3]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & 0 & \frac{1}{3}\\0 & \frac{1}{2} & \frac{1}{2}\\-1 & - \frac{1}{2} & - \frac{7}{6}\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M1", value: "Matrix([[1, 0, 1/3], [0, 1/2, 1/2], [-1, -1/2, -7/6]])" },
        { key: "D", text: t`$\left[\begin{matrix}\frac{2}{3} & - \frac{1}{2} & \frac{1}{3}\\- \frac{1}{3} & 0 & \frac{1}{3}\\\frac{1}{3} & \frac{1}{2} & - \frac{1}{3}\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M2", value: "Matrix([[2/3, -1/2, 1/3], [-1/3, 0, 1/3], [1/3, 1/2, -1/3]])" },
      ],
      solution: {
        steps: [
          t`Write $A = AI$ and use columns only. $C_3 \to C_3 - C_1$: $\begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 3 \\ 1 & 2 & 0 \end{bmatrix}$ $= A \begin{bmatrix} 1 & 0 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$.`,
          t`$C_2 \to \frac{1}{2}C_2$, then $C_3 \to C_3 - 3C_2$: $\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 1 & -3 \end{bmatrix}$ $= A \begin{bmatrix} 1 & 0 & -1 \\ 0 & \frac{1}{2} & -\frac{3}{2} \\ 0 & 0 & 1 \end{bmatrix}$.`,
          t`$C_3 \to -\frac{1}{3}C_3$, then $C_1 \to C_1 - C_3$, $C_2 \to C_2 - C_3$: $I = A \begin{bmatrix} \frac{2}{3} & -\frac{1}{3} & \frac{1}{3} \\ -\frac{1}{2} & 0 & \frac{1}{2} \\ \frac{1}{3} & \frac{1}{3} & -\frac{1}{3} \end{bmatrix}$.`,
          t`So $A^{-1} = \begin{bmatrix} \frac{2}{3} & -\frac{1}{3} & \frac{1}{3} \\ -\frac{1}{2} & 0 & \frac{1}{2} \\ \frac{1}{3} & \frac{1}{3} & -\frac{1}{3} \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.18" },
      stem: t`Using elementary row transformations, the inverse of $A = \begin{bmatrix} 1 & 2 & 3 \\ 1 & 1 & 5 \\ 2 & 4 & 7 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 3], [1, 1, 5], [2, 4, 7]])" }, params: { by: "row" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}1 & 0 & 0\\-1 & 1 & 0\\-2 & 0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M5", value: "Matrix([[1, 0, 0], [-1, 1, 0], [-2, 0, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}13 & 2 & -7\\-3 & -1 & 2\\-2 & 0 & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[13, 2, -7], [-3, -1, 2], [-2, 0, 1]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & -2 & -7\\1 & -3 & -9\\-2 & 4 & 15\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M1", value: "Matrix([[1, -2, -7], [1, -3, -9], [-2, 4, 15]])" },
        { key: "D", text: t`$\left[\begin{matrix}17 & -2 & -7\\-5 & 1 & 2\\-2 & 0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M4", value: "Matrix([[17, -2, -7], [-5, 1, 2], [-2, 0, 1]])" },
      ],
      solution: {
        steps: [
          t`Write $A = IA$. $R_2 \to R_2 - R_1$, $R_3 \to R_3 - 2R_1$: $\begin{bmatrix} 1 & 2 & 3 \\ 0 & -1 & 2 \\ 0 & 0 & 1 \end{bmatrix}$ $= \begin{bmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ -2 & 0 & 1 \end{bmatrix} A$.`,
          t`The left side is triangular, but not yet $I$. $R_2 \to -R_2$, then $R_1 \to R_1 - 2R_2$: $\begin{bmatrix} 1 & 0 & 7 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{bmatrix}$ $= \begin{bmatrix} -1 & 2 & 0 \\ 1 & -1 & 0 \\ -2 & 0 & 1 \end{bmatrix} A$.`,
          t`$R_1 \to R_1 - 7R_3$, $R_2 \to R_2 + 2R_3$: $I = \begin{bmatrix} 13 & 2 & -7 \\ -3 & -1 & 2 \\ -2 & 0 & 1 \end{bmatrix} A$.`,
          t`So $A^{-1} = \begin{bmatrix} 13 & 2 & -7 \\ -3 & -1 & 2 \\ -2 & 0 & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.6 (i)" },
      stem: t`Using elementary column transformations, the inverse of $A = \begin{bmatrix} 1 & 2 \\ 2 & -1 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [2, -1]])" }, params: { by: "col" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}\frac{1}{5} & \frac{2}{5}\\\frac{2}{5} & - \frac{1}{5}\end{matrix}\right]$`, correct: true, value: "Matrix([[1/5, 2/5], [2/5, -1/5]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & \frac{2}{5}\\-2 & -1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M1", value: "Matrix([[1, 2/5], [-2, -1]])" },
        { key: "C", text: t`$\left[\begin{matrix}5 & -2\\-2 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M4", value: "Matrix([[5, -2], [-2, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}1 & -2\\0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C02-M5", value: "Matrix([[1, -2], [0, 1]])" },
      ],
      solution: {
        steps: [
          t`Write $A = AI$ and use columns only. $C_2 \to C_2 - 2C_1$: $\begin{bmatrix} 1 & 0 \\ 2 & -5 \end{bmatrix}$ $= A \begin{bmatrix} 1 & -2 \\ 0 & 1 \end{bmatrix}$.`,
          t`$C_2 \to -\frac{1}{5}C_2$, then $C_1 \to C_1 - 2C_2$: $I = A \begin{bmatrix} \frac{1}{5} & \frac{2}{5} \\ \frac{2}{5} & -\frac{1}{5} \end{bmatrix}$.`,
          t`So $A^{-1} = \begin{bmatrix} \frac{1}{5} & \frac{2}{5} \\ \frac{2}{5} & -\frac{1}{5} \end{bmatrix}$.`,
        ],
      },
    },
  ],
};
