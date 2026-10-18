import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Take $A = \begin{bmatrix} 3 & 1 \\ 5 & 2 \end{bmatrix}$. Swap its diagonal entries $3$ and $2$, and change the signs of the other two. **What do you get when you multiply $A$ by this new matrix?**`,
    reveal: t`The new matrix is $\begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix}$. Row 1 times column 1: $6 - 5 = 1$; row 1 times column 2: $-3 + 3 = 0$. The product is $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$, the identity. The new matrix is the **adjoint** of $A$, and later it will give inverses.`,
  },
  explanation: {
    intuition: [
      t`Recall: the **cofactor** of $a_{ij}$ is $A_{ij} = (-1)^{i+j}M_{ij}$, where $M_{ij}$ is its minor.`,
      t`Replace every element of $A$ by its cofactor: that gives the **cofactor matrix** $[A_{ij}]$.`,
      t`The **transpose** of a matrix turns its rows into columns.`,
      t`The **adjoint** of $A$, written $\operatorname{adj}A$, is the transpose of the cofactor matrix.`,
      t`So the cofactor of $a_{ij}$ lands in row $j$, column $i$ of $\operatorname{adj}A$.`,
      t`For a $2 \times 2$ matrix this becomes a quick rule: swap the diagonal, negate the other two.`,
    ],
    formal: [
      {
        title: "Definition of adj A",
        points: [
          t`Let $A = [a_{ij}]$ be a square matrix; its cofactor matrix $[A_{ij}]$ has the same order.`,
          t`The adjoint is $\operatorname{adj}A = [A_{ij}]^T$, the transpose of the cofactor matrix.`,
          t`So the entry in row $i$, column $j$ of $\operatorname{adj}A$ is $A_{ji}$: the indices swap.`,
          t`Row 1 of $\operatorname{adj}A$ holds $A_{11}, A_{21}, A_{31}$: the cofactors of column 1 of $A$.`,
          t`Each entry is a cofactor, with its sign: never a bare minor, never an element $a_{ij}$.`,
        ],
      },
      {
        title: "The 2 × 2 shortcut",
        points: [
          t`Take $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$; each minor is the single opposite entry.`,
          t`The cofactors are $A_{11} = d$, $A_{12} = -c$, $A_{21} = -b$, $A_{22} = a$.`,
          t`So the cofactor matrix is $\begin{bmatrix} d & -c \\ -b & a \end{bmatrix}$.`,
          t`Transposing it gives $\operatorname{adj}A = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.`,
          t`In words: swap the diagonal entries $a$ and $d$; change the signs of $b$ and $c$ where they stand.`,
          t`For example, the adjoint of $\begin{bmatrix} 4 & 7 \\ 1 & 3 \end{bmatrix}$ is $\begin{bmatrix} 3 & -7 \\ -1 & 4 \end{bmatrix}$.`,
        ],
      },
      {
        title: "The 3 × 3 recipe",
        points: [
          t`First find all nine cofactors $A_{ij} = (-1)^{i+j}M_{ij}$.`,
          t`Their signs follow a chessboard: $+ - +$ in row 1, $- + -$ in row 2, $+ - +$ in row 3.`,
          t`Then write them in place as the cofactor matrix $[A_{ij}]$.`,
          t`Finally transpose it: row $i$ of $[A_{ij}]$ becomes column $i$ of $\operatorname{adj}A$.`,
          t`The diagonal cofactors $A_{11}, A_{22}, A_{33}$ stay where they are; only the others move.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\operatorname{adj}A$ for $A = \begin{bmatrix} 2 & 0 & -1 \\ 3 & 1 & 2 \\ -1 & 1 & 2 \end{bmatrix}$.`,
      steps: [
        t`Row 1 cofactors: $A_{11} = +(2 - 2) = 0$, $A_{12} = -(6 + 2) = -8$, $A_{13} = +(3 + 1) = 4$.`,
        t`Row 2: $A_{21} = -(0 + 1) = -1$, $A_{22} = +(4 - 1) = 3$, $A_{23} = -(2 - 0) = -2$.`,
        t`Row 3: $A_{31} = +(0 + 1) = 1$, $A_{32} = -(4 + 3) = -7$, $A_{33} = +(2 - 0) = 2$.`,
        t`Cofactor matrix: $[A_{ij}] = \begin{bmatrix} 0 & -8 & 4 \\ -1 & 3 & -2 \\ 1 & -7 & 2 \end{bmatrix}$.`,
        t`Transpose it: row $(0, -8, 4)$ becomes column 1, and so on.`,
      ],
      answer: t`$\operatorname{adj}A = \begin{bmatrix} 0 & -1 & 1 \\ -8 & 3 & -7 \\ 4 & -2 & 2 \end{bmatrix}$.`,
    },
    visualSpec: t`Tap any entry of $A$: its row and column grey out, the minor and its chessboard sign light up, and the cofactor flies to its mirror position across the diagonal of $\operatorname{adj}A$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Taking the cofactor matrix itself as adj A, without the transpose",
      remediation: t`$\operatorname{adj}A$ is the **transpose** of the cofactor matrix: the cofactors of row $i$ of $A$ form column $i$ of $\operatorname{adj}A$. Write $[A_{ij}]$ first, then turn its rows into columns.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Using the minors $M_{ij}$ without the sign $(-1)^{i+j}$`,
      remediation: t`Each entry of $\operatorname{adj}A$ is a cofactor $A_{ij} = (-1)^{i+j}M_{ij}$, not a bare minor. In the $2 \times 2$ rule this is why $b$ and $c$ change sign.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: t`Using the elements $a_{ij}$ in place of the cofactors $A_{ij}$`,
      remediation: t`$a_{ij}$ is an element of $A$, while $A_{ij}$ is its cofactor, a signed minor. $\operatorname{adj}A$ is built from cofactors, so find each minor first.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: t`In the $2 \times 2$ rule, swapping $b$ and $c$ and negating $a$ and $d$`,
      remediation: t`For $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, swap the **diagonal** entries $a$ and $d$, and change the signs of $b$ and $c$ where they stand: $\operatorname{adj}A = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Giving every row the signs $+ - +$ of row 1`,
      remediation: t`The sign of $A_{ij}$ is $(-1)^{i+j}$, a chessboard: rows go $+ - +$, $- + -$, $+ - +$. Row 2 starts with a minus.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C04-M1 gives the key when A is symmetric; for a 2 x 2 matrix C04-M1 and C04-M2 agree when b = -c (C04-Q1), so use only one of them there.",
    "C04-M4 applies only to 2 x 2 matrices and C04-M5 only to 3 x 3; C04-M5 changes only row 2 of the cofactor matrix (column 2 of adj A), so an entry item must ask for column 2 of adj A to catch it.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.3 (i)" },
      stem: t`The adjoint of $A = \begin{bmatrix} 2 & -3 \\ 3 & 5 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -3], [3, 5]])" }, params: { ask: "adj" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & -3\\3 & 5\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M3", value: "Matrix([[2, -3], [3, 5]])" },
        { key: "B", text: t`$\left[\begin{matrix}-2 & 3\\-3 & -5\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M4", value: "Matrix([[-2, 3], [-3, -5]])" },
        { key: "C", text: t`$\left[\begin{matrix}5 & 3\\-3 & 2\end{matrix}\right]$`, correct: true, value: "Matrix([[5, 3], [-3, 2]])" },
        { key: "D", text: t`$\left[\begin{matrix}5 & -3\\3 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M1", value: "Matrix([[5, -3], [3, 2]])" },
      ],
      solution: {
        steps: [
          t`For $2 \times 2$: swap the diagonal entries $2$ and $5$.`,
          t`Change the signs of $-3$ and $3$ where they stand: they become $3$ and $-3$.`,
          t`So $\operatorname{adj}A = \begin{bmatrix} 5 & 3 \\ -3 & 2 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc I (4)" },
      stem: t`If $A = \begin{bmatrix} 2 & -4 \\ 3 & 1 \end{bmatrix}$, then $\operatorname{adj}A$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -4], [3, 1]])" }, params: { ask: "adj" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}1 & -4\\3 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M2", value: "Matrix([[1, -4], [3, 2]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & -3\\4 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M1", value: "Matrix([[1, -3], [4, 2]])" },
        { key: "C", text: t`$\left[\begin{matrix}-2 & 3\\-4 & -1\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M4", value: "Matrix([[-2, 3], [-4, -1]])" },
        { key: "D", text: t`$\left[\begin{matrix}1 & 4\\-3 & 2\end{matrix}\right]$`, correct: true, value: "Matrix([[1, 4], [-3, 2]])" },
      ],
      solution: {
        steps: [
          t`Swap the diagonal entries $2$ and $1$.`,
          t`Change the signs of $-4$ and $3$ in place: they become $4$ and $-3$.`,
          t`So $\operatorname{adj}A = \begin{bmatrix} 1 & 4 \\ -3 & 2 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.3 (ii)" },
      stem: t`Find $\operatorname{adj}A$ for $A = \begin{bmatrix} 1 & -1 & 2 \\ -2 & 3 & 5 \\ -2 & 0 & -1 \end{bmatrix}$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2], [-2, 3, 5], [-2, 0, -1]])" }, params: { ask: "adj" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-3 & 1 & -11\\12 & 3 & 9\\6 & -2 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M2", value: "Matrix([[-3, 1, -11], [12, 3, 9], [6, -2, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}-3 & 1 & -11\\-12 & -3 & -9\\6 & -2 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M5", value: "Matrix([[-3, 1, -11], [-12, -3, -9], [6, -2, 1]])" },
        { key: "C", text: t`$\left[\begin{matrix}-3 & -1 & -11\\-12 & 3 & -9\\6 & 2 & 1\end{matrix}\right]$`, correct: true, value: "Matrix([[-3, -1, -11], [-12, 3, -9], [6, 2, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}-3 & -12 & 6\\-1 & 3 & 2\\-11 & -9 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M1", value: "Matrix([[-3, -12, 6], [-1, 3, 2], [-11, -9, 1]])" },
      ],
      solution: {
        steps: [
          t`Row 1 cofactors: $A_{11} = -3$, $A_{12} = -(2 + 10) = -12$, $A_{13} = 6$.`,
          t`Row 2: $A_{21} = -1$, $A_{22} = -1 + 4 = 3$, $A_{23} = -(0 - 2) = 2$.`,
          t`Row 3: $A_{31} = -5 - 6 = -11$, $A_{32} = -(5 + 4) = -9$, $A_{33} = 1$.`,
          t`Transpose: $\operatorname{adj}A = \begin{bmatrix} -3 & -1 & -11 \\ -12 & 3 & -9 \\ 6 & 2 & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.4" },
      stem: t`Find $\operatorname{adj}A$ for $A = \begin{bmatrix} 1 & -1 & 2 \\ 3 & 0 & -2 \\ 1 & 0 & 3 \end{bmatrix}$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2], [3, 0, -2], [1, 0, 3]])" }, params: { ask: "adj" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}0 & -3 & 2\\-11 & -1 & 8\\0 & 1 & 3\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M5", value: "Matrix([[0, -3, 2], [-11, -1, 8], [0, 1, 3]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & -3 & 1\\1 & 0 & 0\\2 & 2 & 3\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M3", value: "Matrix([[1, -3, 1], [1, 0, 0], [2, 2, 3]])" },
        { key: "C", text: t`$\left[\begin{matrix}0 & -3 & 2\\11 & 1 & -8\\0 & 1 & 3\end{matrix}\right]$`, correct: false, misconceptionId: "C04-M2", value: "Matrix([[0, -3, 2], [11, 1, -8], [0, 1, 3]])" },
        { key: "D", text: t`$\left[\begin{matrix}0 & 3 & 2\\-11 & 1 & 8\\0 & -1 & 3\end{matrix}\right]$`, correct: true, value: "Matrix([[0, 3, 2], [-11, 1, 8], [0, -1, 3]])" },
      ],
      solution: {
        steps: [
          t`Row 1 cofactors: $A_{11} = 0$, $A_{12} = -(9 + 2) = -11$, $A_{13} = 0$.`,
          t`Row 2: $A_{21} = -(-3 - 0) = 3$, $A_{22} = 3 - 2 = 1$, $A_{23} = -(0 + 1) = -1$.`,
          t`Row 3: $A_{31} = 2 - 0 = 2$, $A_{32} = -(-2 - 6) = 8$, $A_{33} = 0 + 3 = 3$.`,
          t`Transpose: $\operatorname{adj}A = \begin{bmatrix} 0 & 3 & 2 \\ -11 & 1 & 8 \\ 0 & -1 & 3 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.2 (ii)" },
      stem: t`For $A = \begin{bmatrix} 1 & 0 & 2 \\ -2 & 1 & 3 \\ 0 & 3 & -5 \end{bmatrix}$, the entry in row 1, column 2 of $\operatorname{adj}A$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 0, 2], [-2, 1, 3], [0, 3, -5]])" }, params: { ask: "entry", i: "1", j: "2" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C04-M3", value: "2" },
        { key: "B", text: t`$6$`, correct: true, value: "6" },
        { key: "C", text: t`$-10$`, correct: false, misconceptionId: "C04-M1", value: "-10" },
        { key: "D", text: t`$-6$`, correct: false, misconceptionId: "C04-M2", value: "-6" },
      ],
      solution: {
        steps: [
          t`Row 1, column 2 of $\operatorname{adj}A$ holds the cofactor $A_{21}$: the indices swap.`,
          t`Delete row 2 and column 1: $M_{21} = 0(-5) - 2(3) = -6$.`,
          t`$A_{21} = (-1)^{2+1}(-6) = 6$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc I (1)" },
      stem: t`If $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $\operatorname{adj}A = \begin{bmatrix} 4 & a \\ -3 & b \end{bmatrix}$, then:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [3, 4]])" }, params: { ask: "pair", at: "1 2, 2 2" } },
      options: [
        { key: "A", text: t`$a = -2$, $b = 1$`, correct: true, value: "(-2, 1)" },
        { key: "B", text: t`$a = -3$, $b = 1$`, correct: false, misconceptionId: "C04-M1", value: "(-3, 1)" },
        { key: "C", text: t`$a = 2$, $b = 1$`, correct: false, misconceptionId: "C04-M2", value: "(2, 1)" },
        { key: "D", text: t`$a = 3$, $b = -4$`, correct: false, misconceptionId: "C04-M4", value: "(3, -4)" },
      ],
      solution: {
        steps: [
          t`Swap the diagonal entries $1$ and $4$; change the signs of $2$ and $3$ in place.`,
          t`So $\operatorname{adj}A = \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$, which matches the given $4$ and $-3$.`,
          t`Reading off: $a = -2$ and $b = 1$.`,
        ],
      },
    },
  ],
};
