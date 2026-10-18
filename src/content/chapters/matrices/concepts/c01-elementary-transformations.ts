import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`$2x + y = 5$ and $x + 3y = 10$ have the solution $x = 1$, $y = 3$. **Which of these keep that solution: swapping the two equations, doubling one, or adding one to the other?**`,
    reveal: t`All three. Swapped, they are the same pair. Doubled, $4x + 2y = 10$ still holds at $(1, 3)$. Added, $3x + 4y = 15$ holds too: $3 + 12 = 15$. Each move acts on a row of numbers, like $2, 1, 5$. These three moves on rows are the **elementary row transformations**.`,
  },
  explanation: {
    intuition: [
      t`Recall: a **matrix** is a rectangular table of numbers, set out in rows and columns.`,
      t`Think of each row as one equation's numbers: $2x + y = 5$ gives the row $2, 1, 5$.`,
      t`You may swap two equations, or multiply one by a nonzero number: the solution stays.`,
      t`You may also add a multiple of one equation to another: the solution still stays.`,
      t`These three moves on rows are the **elementary row transformations**.`,
      t`The same three moves on columns are the **elementary column transformations**.`,
    ],
    formal: [
      {
        title: "Row transformations",
        points: [
          t`A **row transformation** changes the rows of a matrix; $R_i$ stands for row $i$.`,
          t`**Interchange:** $R_i \leftrightarrow R_j$ swaps rows $i$ and $j$.`,
          t`**Multiply:** $R_i \to kR_i$, with $k \ne 0$, multiplies every entry of row $i$ by $k$.`,
          t`The book also writes $R_i \to kR_i$ as just $kR_i$.`,
          t`**Add:** $R_i \to R_i + kR_j$ adds $k$ times each entry of $R_j$ to the matching entry of $R_i$.`,
          t`Only the row on the left of the arrow changes; $R_j$ is copied down as it was.`,
        ],
      },
      {
        title: "Column transformations",
        points: [
          t`$C_j$ stands for column $j$, read from top to bottom.`,
          t`$C_i \leftrightarrow C_j$ swaps columns $i$ and $j$.`,
          t`$C_i \to kC_i$, with $k \ne 0$, multiplies every entry of column $i$ by $k$.`,
          t`$C_i \to C_i + kC_j$ adds $k$ times column $j$ to column $i$, entry by entry.`,
          t`In $\begin{bmatrix} 2 & 1 \\ 4 & 3 \end{bmatrix}$, $C_1 \to C_1 - 2C_2$ gives the first column $(2 - 2, 4 - 6)$.`,
          t`So the matrix becomes $\begin{bmatrix} 0 & 1 \\ -2 & 3 \end{bmatrix}$: only $C_1$ changed.`,
        ],
      },
      {
        title: "Equivalent matrices",
        points: [
          t`If $B$ comes from $A$ by elementary transformations, $A$ and $B$ are **equivalent**, written $A \sim B$.`,
          t`Each move can be undone by another move of the same kind.`,
          t`$R_i \leftrightarrow R_j$ undoes itself; $R_i \to kR_i$ is undone by $R_i \to \frac{1}{k}R_i$.`,
          t`$R_i \to R_i + kR_j$ is undone by $R_i \to R_i - kR_j$.`,
          t`That is why $k \ne 0$: multiplying a row by $0$ wipes it out for good.`,
          t`$kA$ multiplies every row at once: that is many moves, not the single move $kR_i$.`,
        ],
      },
      {
        title: "One step at a time",
        points: [
          t`Given a list of transformations, do them in order, one after another.`,
          t`Each one acts on the matrix the step before produced, not on the original.`,
          t`So rewrite the matrix after every step, and read the next step's entries from it.`,
          t`A row step and a column step give the same result in either order.`,
          t`Two row steps usually do not: there, the order matters.`,
        ],
      },
    ],
    worked: {
      prompt: t`Apply, in order, $R_1 \leftrightarrow R_2$, $R_2 \to R_2 - 2R_1$, $R_2 \to \frac{1}{3}R_2$ and $C_2 \to C_2 - 4C_1$ to $A = \begin{bmatrix} 2 & -1 & 3 \\ 1 & 4 & 0 \end{bmatrix}$.`,
      steps: [
        t`$R_1 \leftrightarrow R_2$ swaps the rows: $A \sim \begin{bmatrix} 1 & 4 & 0 \\ 2 & -1 & 3 \end{bmatrix}$.`,
        t`$R_2 \to R_2 - 2R_1$ on this matrix: $(2 - 2, -1 - 8, 3 - 0)$ $= (0, -9, 3)$, and $R_1$ stays.`,
        t`$R_2 \to \frac{1}{3}R_2$ gives $(0, -3, 1)$: $A \sim \begin{bmatrix} 1 & 4 & 0 \\ 0 & -3 & 1 \end{bmatrix}$.`,
        t`$C_2 \to C_2 - 4C_1$: $(4 - 4, -3 - 0) = (0, -3)$; $C_1$ and $C_3$ stay.`,
      ],
      answer: t`$A \sim \begin{bmatrix} 1 & 0 & 0 \\ 0 & -3 & 1 \end{bmatrix}$.`,
    },
    visualSpec: t`Pick a row and a slider for $k$: the target row updates entry by entry while the row being added stays highlighted and unchanged; a toggle switches every move from rows to columns.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Doing a column transformation on the rows, or a row transformation on the columns",
      remediation: t`$R$ names a row, read across, and $C$ names a column, read down. $C_1 \to C_1 - 2C_2$ changes the first column only, and every row keeps its other entries.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Writing the new row over $R_j$ in $R_i \to R_i + kR_j$`,
      remediation: t`Only the row on the left of the arrow changes: in $R_i \to R_i + kR_j$ the new row replaces $R_i$, and $R_j$ stays as it was. The same holds for columns.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Leaving $R_j$ multiplied by $k$ after $R_i \to R_i + kR_j$`,
      remediation: t`$kR_j$ is worked out on the side and added to $R_i$; $R_j$ itself does not change. Copy $R_j$ down exactly as it was; the same holds for $C_j$ in a column step.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Multiplying every entry by $k$ when only one row is to be multiplied`,
      remediation: t`$R_i \to kR_i$ multiplies row $i$ only, and the other rows stay. Multiplying every entry gives $kA$, which is not a single elementary transformation.`,
      fallback: { kind: "ext", topic: "matrix algebra" },
    },
    {
      id: "C01-M5",
      mistake: t`Dropping the minus sign in $R_i \to R_i - kR_j$`,
      remediation: t`$R_i \to R_i - kR_j$ subtracts: each entry of $R_i$ loses $k$ times the matching entry of $R_j$. Check the sign before you start; columns work the same way.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Working a later transformation from the original matrix instead of the latest one",
      remediation: "Transformations are done one after another: each acts on the matrix the step before produced. Rewrite the matrix after every step, then read the next step's entries from it.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M2, C01-M3 and C01-M5 apply only to items with an add step (R_i -> R_i + kR_j or its column form); C01-M5 only when k is negative, and C01-M3 gives the key when k = 1.",
    "C01-M4 applies only to items with a multiply step and k other than 1; C01-M6 only to sequences where a later step reads a line an earlier step changed.",
    "C01-M1 can't be modelled when the swapped index doesn't exist (C_3 on a matrix with 2 rows): draw it from items where it does.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.1 Ex 2.1 Q.2" },
      stem: t`Apply $R_1 \to R_1 - R_2$ to $B = \begin{bmatrix} 1 & -1 & 3 \\ 2 & 5 & 4 \end{bmatrix}$. The new matrix is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 3], [2, 5, 4]])" }, params: { ops: ["add R 1 2 -1"] } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-1 & -6 & -1\\2 & 5 & 4\end{matrix}\right]$`, correct: true, value: "Matrix([[-1, -6, -1], [2, 5, 4]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & -1 & 3\\-1 & -6 & -1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M2", value: "Matrix([[1, -1, 3], [-1, -6, -1]])" },
        { key: "C", text: t`$\left[\begin{matrix}-1 & -6 & -1\\-2 & -5 & -4\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M3", value: "Matrix([[-1, -6, -1], [-2, -5, -4]])" },
        { key: "D", text: t`$\left[\begin{matrix}3 & 4 & 7\\2 & 5 & 4\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M5", value: "Matrix([[3, 4, 7], [2, 5, 4]])" },
      ],
      solution: {
        steps: [
          t`Only $R_1$ changes; $R_2 = (2, 5, 4)$ is copied down.`,
          t`New $R_1$: $(1 - 2, -1 - 5, 3 - 4)$ $= (-1, -6, -1)$.`,
          t`So $B \sim \begin{bmatrix} -1 & -6 & -1 \\ 2 & 5 & 4 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.1 Solved Ex.3" },
      stem: t`Apply $R_1 \leftrightarrow R_2$ and then $C_1 \to C_1 + 2C_3$ to $A = \begin{bmatrix} 1 & 2 & -1 \\ 3 & -2 & 5 \end{bmatrix}$. The result is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, -1], [3, -2, 5]])" }, params: { ops: ["swap R 1 2", "add C 1 3 2"] } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}13 & -2 & 5\\-1 & 2 & -1\end{matrix}\right]$`, correct: true, value: "Matrix([[13, -2, 5], [-1, 2, -1]])" },
        { key: "B", text: t`$\left[\begin{matrix}-1 & -2 & 5\\13 & 2 & -1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M6", value: "Matrix([[-1, -2, 5], [13, 2, -1]])" },
        { key: "C", text: t`$\left[\begin{matrix}3 & -2 & 13\\1 & 2 & -1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M2", value: "Matrix([[3, -2, 13], [1, 2, -1]])" },
        { key: "D", text: t`$\left[\begin{matrix}13 & -2 & 10\\-1 & 2 & -2\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M3", value: "Matrix([[13, -2, 10], [-1, 2, -2]])" },
      ],
      solution: {
        steps: [
          t`$R_1 \leftrightarrow R_2$: $A \sim \begin{bmatrix} 3 & -2 & 5 \\ 1 & 2 & -1 \end{bmatrix}$.`,
          t`$C_1 \to C_1 + 2C_3$ on this matrix: $(3 + 10, 1 - 2)$ $= (13, -1)$; $C_3$ stays.`,
          t`So $A \sim \begin{bmatrix} 13 & -2 & 5 \\ -1 & 2 & -1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.1 Ex 2.1 Q.5" },
      stem: t`Apply $R_3 \to 3R_3$ and then $C_3 \to C_3 + 2C_2$ to $A = \begin{bmatrix} 1 & -1 & 3 \\ 2 & 1 & 0 \\ 3 & 3 & 1 \end{bmatrix}$. The result is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 3], [2, 1, 0], [3, 3, 1]])" }, params: { ops: ["mul R 3 3", "add C 3 2 2"] } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}1 & -1 & 1\\2 & 1 & 2\\9 & 9 & 7\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M6", value: "Matrix([[1, -1, 1], [2, 1, 2], [9, 9, 7]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & -1 & 9\\2 & 1 & 0\\7 & 5 & 3\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M1", value: "Matrix([[1, -1, 9], [2, 1, 0], [7, 5, 3]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & -1 & 1\\2 & 1 & 2\\9 & 9 & 21\end{matrix}\right]$`, correct: true, value: "Matrix([[1, -1, 1], [2, 1, 2], [9, 9, 21]])" },
        { key: "D", text: t`$\left[\begin{matrix}3 & -3 & 3\\6 & 3 & 6\\9 & 9 & 21\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M4", value: "Matrix([[3, -3, 3], [6, 3, 6], [9, 9, 21]])" },
      ],
      solution: {
        steps: [
          t`$R_3 \to 3R_3$: row 3 becomes $(9, 9, 3)$; rows 1 and 2 stay.`,
          t`$C_3 \to C_3 + 2C_2$ on the new matrix: $(3 - 2, 0 + 2, 3 + 18)$ $= (1, 2, 21)$.`,
          t`So $A \sim \begin{bmatrix} 1 & -1 & 1 \\ 2 & 1 & 2 \\ 9 & 9 & 21 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.1 Ex 2.1 Q.7" },
      stem: t`To make $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ upper triangular, apply $R_2 \to R_2 - 3R_1$. The result is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [3, 4]])" }, params: { ops: ["add R 2 1 -3"] } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}1 & 2\\0 & -2\end{matrix}\right]$`, correct: true, value: "Matrix([[1, 2], [0, -2]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & 2\\6 & 10\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M5", value: "Matrix([[1, 2], [6, 10]])" },
        { key: "C", text: t`$\left[\begin{matrix}0 & -2\\3 & 4\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M2", value: "Matrix([[0, -2], [3, 4]])" },
        { key: "D", text: t`$\left[\begin{matrix}1 & -1\\3 & -5\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M1", value: "Matrix([[1, -1], [3, -5]])" },
      ],
      solution: {
        steps: [
          t`Only $R_2$ changes: $(3 - 3, 4 - 6) = (0, -2)$.`,
          t`$R_1 = (1, 2)$ stays, so the result is $\begin{bmatrix} 1 & 2 \\ 0 & -2 \end{bmatrix}$, upper triangular.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.1 Ex 2.1 Q.8" },
      stem: t`Apply $R_2 \to R_2 - 2R_1$, then $R_2 \to \frac{1}{5}R_2$, then $R_1 \to R_1 + R_2$ to $\begin{bmatrix} 1 & -1 \\ 2 & 3 \end{bmatrix}$. The result is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1], [2, 3]])" }, params: { ops: ["add R 2 1 -2", "mul R 2 1/5", "add R 1 2 1"] } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}1 & 0\\0 & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[1, 0], [0, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{1}{5} & \frac{4}{5}\\0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M4", value: "Matrix([[1/5, 4/5], [0, 1]])" },
        { key: "C", text: t`$\left[\begin{matrix}\frac{9}{5} & - \frac{4}{5}\\\frac{4}{5} & \frac{1}{5}\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M5", value: "Matrix([[9/5, -4/5], [4/5, 1/5]])" },
        { key: "D", text: t`$\left[\begin{matrix}-2 & 3\\0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M3", value: "Matrix([[-2, 3], [0, 1]])" },
      ],
      solution: {
        steps: [
          t`$R_2 \to R_2 - 2R_1$: $(2 - 2, 3 + 2) = (0, 5)$, giving $\begin{bmatrix} 1 & -1 \\ 0 & 5 \end{bmatrix}$.`,
          t`$R_2 \to \frac{1}{5}R_2$: row 2 becomes $(0, 1)$; row 1 stays.`,
          t`$R_1 \to R_1 + R_2$: $(1 + 0, -1 + 1) = (1, 0)$, so the result is $I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.1" },
      stem: t`To reduce $A = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & 3 & 1 \end{bmatrix}$ to $I_3$ by column transformations, the first step is $C_1 \to C_1 - 2C_2$. It gives:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 0, 0], [2, 1, 0], [3, 3, 1]])" }, params: { ops: ["add C 1 2 -2"] } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}1 & 0 & 0\\0 & -2 & 0\\-3 & -6 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M3", value: "Matrix([[1, 0, 0], [0, -2, 0], [-3, -6, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & 0 & 0\\4 & 1 & 0\\9 & 3 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M5", value: "Matrix([[1, 0, 0], [4, 1, 0], [9, 3, 1]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & 0 & 0\\0 & 1 & 0\\-3 & 3 & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[1, 0, 0], [0, 1, 0], [-3, 3, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}-3 & -2 & 0\\2 & 1 & 0\\3 & 3 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C01-M1", value: "Matrix([[-3, -2, 0], [2, 1, 0], [3, 3, 1]])" },
      ],
      solution: {
        steps: [
          t`Only $C_1$ changes; $C_2$ and $C_3$ are copied down.`,
          t`New $C_1$: $(1 - 0, 2 - 2, 3 - 6)$ $= (1, 0, -3)$.`,
          t`So $A \sim \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -3 & 3 & 1 \end{bmatrix}$.`,
        ],
      },
    },
  ],
};
