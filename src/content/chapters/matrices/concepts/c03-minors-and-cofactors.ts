import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`You know $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$. Cover the row and column of $a$: only $d$ is left. Cover the row and column of $b$: only $c$ is left. **So why does $b$ get a minus sign and $a$ a plus?**`,
    reveal: t`Read it as $a(d) - b(c)$: each element of row 1 times what is left when its row and column are covered. That leftover is the element's **minor**. The sign comes from the element's place: $b$ is in row 1, column 2, and $(-1)^{1+2} = -1$. A minor with its sign is a **cofactor**, and the same rule expands any square matrix.`,
  },
  explanation: {
    intuition: [
      t`Pick one element of a square matrix and cross out its row and its column.`,
      t`The determinant of what is left is that element's **minor**.`,
      t`Give the minor a sign from a chessboard pattern of $+$ and $-$: that is the element's **cofactor**.`,
      t`The pattern starts with $+$ at the top left and alternates along every row and down every column.`,
      t`Multiply each element of one row by its own cofactor and add: you get the determinant.`,
      t`Any row gives the same answer, so a row with zeros saves work.`,
    ],
    formal: [
      {
        title: "The minor of an element",
        points: [
          t`The element $a_{ij}$ of $A = [a_{ij}]$ sits in row $i$ and column $j$; its **minor** $M_{ij}$ is the determinant left after deleting both.`,
          t`The first index is always the row: $M_{23}$ deletes row 2 and column 3.`,
          t`Take $B = \begin{bmatrix} 4 & 1 & 0 \\ 2 & 3 & 5 \\ 1 & 2 & 6 \end{bmatrix}$.`,
          t`Deleting row 2 and column 3 of $B$ leaves $\begin{vmatrix} 4 & 1 \\ 1 & 2 \end{vmatrix}$.`,
          t`So $M_{23} = 8 - 1 = 7$: a $2 \times 2$ determinant is $ad - bc$.`,
          t`In a $2 \times 2$ matrix each minor is a single element: the one not in that row or column.`,
        ],
      },
      {
        title: "The cofactor of an element",
        points: [
          t`The **cofactor** of $a_{ij}$ is $A_{ij} = (-1)^{i+j} M_{ij}$.`,
          t`If $i + j$ is even, $A_{ij} = M_{ij}$; if $i + j$ is odd, $A_{ij} = -M_{ij}$.`,
          t`For a $3 \times 3$ matrix the signs are: row 1 $+\ -\ +$, row 2 $-\ +\ -$, row 3 $+\ -\ +$.`,
          t`Row 2 starts with $-$: the pattern does not restart at $+$ on each row.`,
          t`In $B$, $M_{23} = 7$ and $2 + 3 = 5$ is odd, so $A_{23} = -7$.`,
          t`A minor has no sign of its own; only the cofactor carries $(-1)^{i+j}$.`,
        ],
      },
      {
        title: "Expanding along a row",
        points: [
          t`**Expanding** along row $i$ means multiplying each element of row $i$ by its own cofactor and adding.`,
          t`For a $3 \times 3$ matrix: $|A| = a_{i1}A_{i1} + a_{i2}A_{i2} + a_{i3}A_{i3}$.`,
          t`In $B$, row 1 has $A_{11} = 8$, $A_{12} = -7$, $A_{13} = 1$.`,
          t`So $|B| = 4(8) + 1(-7) + 0(1)$ $= 25$.`,
          t`Row 2 has $A_{21} = -6$, $A_{22} = 24$, $A_{23} = -7$.`,
          t`So $|B| = 2(-6) + 3(24) + 5(-7)$ $= 25$ again: every row gives $|A|$.`,
        ],
      },
      {
        title: "Mixing two rows gives zero",
        points: [
          t`Now take the elements of row 1 with the cofactors of row 2.`,
          t`In $B$: $4(-6) + 1(24) + 0(-7) = 0$.`,
          t`This always happens: $a_{11}A_{21} + a_{12}A_{22} + a_{13}A_{23} = 0$.`,
          t`The reason: it expands, along row 2, a matrix whose row 2 is a copy of row 1.`,
          t`A determinant with two equal rows is $0$.`,
          t`So only a row's own cofactors give $|A|$; another row's cofactors give $0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the cofactors of the second row of $A = \begin{bmatrix} 1 & -1 & 2 \\ -2 & 3 & 5 \\ -2 & 0 & -1 \end{bmatrix}$, and use them to find $|A|$.`,
      steps: [
        t`Delete row 2 and column 1: $M_{21} = \begin{vmatrix} -1 & 2 \\ 0 & -1 \end{vmatrix} = 1$. Sign $-$, so $A_{21} = -1$.`,
        t`Delete row 2 and column 2: $M_{22} = \begin{vmatrix} 1 & 2 \\ -2 & -1 \end{vmatrix}$ $= -1 + 4 = 3$. Sign $+$, so $A_{22} = 3$.`,
        t`Delete row 2 and column 3: $M_{23} = \begin{vmatrix} 1 & -1 \\ -2 & 0 \end{vmatrix}$ $= 0 - 2 = -2$. Sign $-$, so $A_{23} = 2$.`,
        t`Expand along row 2: $|A| = (-2)(-1) + 3(3) + 5(2)$ $= 2 + 9 + 10$.`,
      ],
      answer: t`$A_{21} = -1$, $A_{22} = 3$, $A_{23} = 2$, and $|A| = 21$.`,
    },
    visualSpec: t`Tap any element of a $3 \times 3$ matrix: its row and column grey out, the leftover $2 \times 2$ minor lights up, and the chessboard sign turns it into the cofactor.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Treats the minor and the cofactor as the same number: never applies $(-1)^{i+j}$, or applies it to a minor.`,
      remediation: t`A cofactor carries a sign: $A_{ij} = (-1)^{i+j}M_{ij}$, so it is $-M_{ij}$ when $i + j$ is odd. A minor has no sign of its own.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Mixes up the indices: for $M_{ij}$ deletes row $j$ and column $i$.`,
      remediation: t`The first index is the row: $M_{ij}$ deletes row $i$ and column $j$, the row and column that meet at $a_{ij}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Evaluates each $2 \times 2$ minor as $ad + bc$ instead of $ad - bc$.`,
      remediation: t`A $2 \times 2$ determinant is $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$: the leading diagonal minus the other one.`,
      fallback: { kind: "ext", topic: "2 by 2 determinants" },
    },
    {
      id: "C03-M4",
      mistake: t`Uses the signs $+\ -\ +$ of row 1 on every row, so row 2 gets $+\ -\ +$ too.`,
      remediation: t`The sign is $(-1)^{i+j}$, a chessboard: row 2 is $-\ +\ -$. Only rows 1 and 3 of a $3 \times 3$ matrix start with $+$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Believes the elements of any row times the cofactors of any row give $|A|$.`,
      remediation: t`Only a row's own cofactors give $|A|$. The elements of one row with the cofactors of another row always give $0$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M1 agrees with the key on any cofactor with $i + j$ even; diagnose it on an odd place, a cofactor matrix or an expansion.`,
    "C03-M2 agrees with the key on diagonal elements and on symmetric matrices.",
    t`C03-M3 needs a $3 \times 3$ matrix and agrees with the key when a minor has a zero cross product.`,
    t`C03-M4 agrees with the key on rows 1 and 3 of a $3 \times 3$ matrix, and with C03-M1 on the odd places of row 2; diagnose it on row 2 expansions or a cofactor matrix.`,
    "C03-M5 applies only to a sum that mixes two rows.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.4" },
      stem: t`For $A = \begin{bmatrix} 1 & -1 & 2 \\ 3 & 0 & -2 \\ 1 & 0 & 3 \end{bmatrix}$, the cofactor $A_{12}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2], [3, 0, -2], [1, 0, 3]])" }, params: { ask: "cofactor", i: "1", j: "2" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C03-M2", value: "3" },
        { key: "B", text: t`$-7$`, correct: false, misconceptionId: "C03-M3", value: "-7" },
        { key: "C", text: t`$-11$`, correct: true, value: "-11" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C03-M1", value: "11" },
      ],
      solution: {
        steps: [
          t`Delete row 1 and column 2: $M_{12} = \begin{vmatrix} 3 & -2 \\ 1 & 3 \end{vmatrix}$ $= 9 - (-2) = 11$.`,
          t`$1 + 2 = 3$ is odd, so the sign is $-$.`,
          t`$A_{12} = -M_{12} = -11$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.2 (i)" },
      stem: t`The matrix of cofactors of $\begin{bmatrix} 1 & 3 \\ 4 & -1 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 3], [4, -1]])" }, params: { ask: "cofmatrix" } },
      options: [
        { key: "A", text: t`$\begin{bmatrix} -1 & -3 \\ -4 & 1 \end{bmatrix}$`, correct: false, misconceptionId: "C03-M2", value: "Matrix([[-1, -3], [-4, 1]])" },
        { key: "B", text: t`$\begin{bmatrix} -1 & -4 \\ 3 & -1 \end{bmatrix}$`, correct: false, misconceptionId: "C03-M4", value: "Matrix([[-1, -4], [3, -1]])" },
        { key: "C", text: t`$\begin{bmatrix} -1 & -4 \\ -3 & 1 \end{bmatrix}$`, correct: true, value: "Matrix([[-1, -4], [-3, 1]])" },
        { key: "D", text: t`$\begin{bmatrix} -1 & 4 \\ 3 & 1 \end{bmatrix}$`, correct: false, misconceptionId: "C03-M1", value: "Matrix([[-1, 4], [3, 1]])" },
      ],
      solution: {
        steps: [
          t`Each minor is the element left after deleting its row and column: $M_{11} = -1$, $M_{12} = 4$, $M_{21} = 3$, $M_{22} = 1$.`,
          t`The signs are $+\ -$ on row 1 and $-\ +$ on row 2.`,
          t`So $A_{11} = -1$, $A_{12} = -4$, $A_{21} = -3$, $A_{22} = 1$.`,
          t`The matrix of cofactors is $\begin{bmatrix} -1 & -4 \\ -3 & 1 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Solved Ex.7" },
      stem: t`For $A = \begin{bmatrix} 2 & 0 & -1 \\ 3 & 1 & 2 \\ -1 & 1 & 2 \end{bmatrix}$, the minor $M_{32}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 0, -1], [3, 1, 2], [-1, 1, 2]])" }, params: { ask: "minor", i: "3", j: "2" } },
      options: [
        { key: "A", text: t`$-7$`, correct: false, misconceptionId: "C03-M1", value: "-7" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M2", value: "2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "D", text: t`$7$`, correct: true, value: "7" },
      ],
      solution: {
        steps: [
          t`Delete row 3 and column 2: what is left is $\begin{vmatrix} 2 & -1 \\ 3 & 2 \end{vmatrix}$.`,
          t`$M_{32} = 2(2) - (-1)(3)$ $= 4 + 3 = 7$.`,
          t`A minor takes no sign, so $M_{32} = 7$ (the cofactor $A_{32}$ would be $-7$).`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Ex 2.2 Q.2 (ii)" },
      stem: t`Expanding along the second row, $|A|$ for $A = \begin{bmatrix} 1 & 0 & 2 \\ -2 & 1 & 3 \\ 0 & 3 & -5 \end{bmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 0, 2], [-2, 1, 3], [0, 3, -5]])" }, params: { ask: "expand", r: "2" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C03-M3", value: "-2" },
        { key: "B", text: t`$26$`, correct: false, misconceptionId: "C03-M4", value: "26" },
        { key: "C", text: t`$-26$`, correct: true, value: "-26" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C03-M1", value: "16" },
      ],
      solution: {
        steps: [
          t`$M_{21} = \begin{vmatrix} 0 & 2 \\ 3 & -5 \end{vmatrix} = -6$, so $A_{21} = 6$.`,
          t`$M_{22} = \begin{vmatrix} 1 & 2 \\ 0 & -5 \end{vmatrix} = -5$, so $A_{22} = -5$.`,
          t`$M_{23} = \begin{vmatrix} 1 & 0 \\ 0 & 3 \end{vmatrix} = 3$, so $A_{23} = -3$.`,
          t`$|A| = (-2)(6) + 1(-5) + 3(-3)$ $= -12 - 5 - 9 = -26$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.19 i)" },
      stem: t`For $A = \begin{bmatrix} 3 & 2 & 6 \\ 1 & 1 & 2 \\ 2 & 2 & 5 \end{bmatrix}$, with $A_{ij}$ the cofactor of $a_{ij}$, the sum $a_{11}A_{21} + a_{12}A_{22} + a_{13}A_{23}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, 2, 6], [1, 1, 2], [2, 2, 5]])" }, params: { ask: "alien", r: "1", s: "2" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C03-M1", value: "12" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C03-M2", value: "3" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C03-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`Row 2's cofactors: $A_{21} = -\begin{vmatrix} 2 & 6 \\ 2 & 5 \end{vmatrix} = 2$, $A_{22} = \begin{vmatrix} 3 & 6 \\ 2 & 5 \end{vmatrix} = 3$.`,
          t`$A_{23} = -\begin{vmatrix} 3 & 2 \\ 2 & 2 \end{vmatrix} = -2$.`,
          t`The sum is $3(2) + 2(3) + 6(-2)$ $= 6 + 6 - 12 = 0$.`,
          t`Row 1's elements with row 2's cofactors always give $0$, not $|A|$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.19 ii)" },
      stem: t`For $A = \begin{bmatrix} 0 & 1 & 2 \\ 1 & 2 & 3 \\ 3 & 1 & 1 \end{bmatrix}$, with $A_{ij}$ the cofactor of $a_{ij}$, the sum $a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[0, 1, 2], [1, 2, 3], [3, 1, 1]])" }, params: { ask: "expand", r: "1" } },
      options: [
        { key: "A", text: t`$-2$`, correct: true, value: "-2" },
        { key: "B", text: t`$-18$`, correct: false, misconceptionId: "C03-M1", value: "-18" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C03-M2", value: "-1" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M3", value: "4" },
      ],
      solution: {
        steps: [
          t`$A_{11} = \begin{vmatrix} 2 & 3 \\ 1 & 1 \end{vmatrix} = -1$ and $A_{12} = -\begin{vmatrix} 1 & 3 \\ 3 & 1 \end{vmatrix} = 8$.`,
          t`$A_{13} = \begin{vmatrix} 1 & 2 \\ 3 & 1 \end{vmatrix} = -5$.`,
          t`The sum is $0(-1) + 1(8) + 2(-5) = -2$: the expansion of $|A|$ along row 1.`,
        ],
      },
    },
  ],
};
