import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`$A = \begin{bmatrix} 2 & -4 \\ 1 & -2 \end{bmatrix}$ is not the zero matrix. **Can $A^2$ be the zero matrix?**`,
    reveal: t`Yes. $A^2 = A \cdot A$: row 1 times column 1 is $2(2) + (-4)(1) = 0$, and the other three entries also come out $0$. So $A^2 = O$ although $A \ne O$. With numbers, $a^2 = 0$ forces $a = 0$; with matrices it doesn't.`,
  },
  explanation: {
    intuition: [
      t`Multiplying matrices is not like multiplying numbers.`,
      t`Recall: each entry of $AB$ is a row of $A$ times a column of $B$.`,
      t`$BA$ pairs the rows of $B$ with the columns of $A$ instead, so the two usually come out different.`,
      t`Recall: the **null matrix** (zero matrix) $O$ has every entry $0$.`,
      t`Rows and columns can cancel completely: two **non-zero** matrices, each with some entry not $0$, can multiply to $O$.`,
      t`So a number rule that swaps the order, as $ba = ab$ does in $(a + b)^2 = a^2 + 2ab + b^2$, must be checked again for matrices.`,
    ],
    formal: [
      {
        title: "Order matters",
        points: [
          t`In general $AB \ne BA$: the order of the two factors matters.`,
          t`Take $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$.`,
          t`Rows of $A$ times columns of $B$ give $AB = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$.`,
          t`Rows of $B$ times columns of $A$ give $BA = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$.`,
          t`The two products differ, so keep every product in the order it is written.`,
        ],
      },
      {
        title: "A zero product",
        points: [
          t`$AB = O$ can happen with $A \ne O$ and $B \ne O$.`,
          t`In the opening question, $A = \begin{bmatrix} 2 & -4 \\ 1 & -2 \end{bmatrix}$ is not $O$.`,
          t`Yet $A \cdot A = O$: each row of $A$ times each column of $A$ comes to $0$.`,
          t`So from $AB = O$ you cannot conclude that $A = O$ or $B = O$.`,
          t`With numbers, $ab = 0$ forces $a = 0$ or $b = 0$; with matrices it doesn't.`,
        ],
      },
      {
        title: "Powers of a matrix",
        points: [
          t`Recall: a **square matrix** has as many rows as columns, so $A \cdot A$ is defined.`,
          t`Its **square** $A^2$ means $A \cdot A$, worked out row by column.`,
          t`Its **cube** $A^3$ means $A^2 \cdot A$: multiply the square by $A$ once more.`,
          t`Never square the entries one by one: that is not matrix multiplication.`,
          t`For $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$, row by column gives $A^2 = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}$.`,
          t`Squaring each entry would give back $A$ itself, which is wrong.`,
        ],
      },
      {
        title: "Expanding brackets",
        points: [
          t`To expand, multiply each term of the first bracket by each term of the second, keeping their order.`,
          t`$(A + B)^2$ means $(A + B)(A + B)$.`,
          t`So $(A + B)^2 = A^2 + AB + BA + B^2$.`,
          t`Likewise $(A + B)(A - B)$ equals $A^2 - AB + BA - B^2$.`,
          t`The middle terms $AB$ and $BA$ are usually different matrices, so they don't combine.`,
          t`These shrink to $A^2 + 2AB + B^2$ and $A^2 - B^2$ only when $AB = BA$.`,
        ],
      },
      {
        title: "The unit matrix",
        points: [
          t`Recall: the **unit matrix** (identity) $I$ has $1$s on its diagonal, top left to bottom right, and $0$s elsewhere.`,
          t`$AI = IA = A$: multiplying by $I$, on either side, leaves $A$ unchanged.`,
          t`So $(A + I)(A - I)$ equals $A^2 - AI + IA - I^2$.`,
          t`The middle terms cancel and $I^2 = I$, so $(A + I)(A - I) = A^2 - I$.`,
          t`In $A^2 - 3A + 2I$, the term $2I = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$ changes only the diagonal, not every entry.`,
        ],
      },
      {
        title: "Finding an unknown number",
        points: [
          t`Some questions ask for a number $k$ in an equation such as $A^2 - 3A + kI = O$.`,
          t`Keep every term on one side, so the equation reads (one matrix) $= O$.`,
          t`Work out that side as one matrix, entry by entry.`,
          t`Then set every entry to $0$ and solve for $k$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $A = \begin{bmatrix} 1 & 0 \\ -1 & 7 \end{bmatrix}$, find $k$ so that $A^2 - 8A - kI = O$, where $I$ is the unit matrix and $O$ the null matrix of order $2$.`,
      steps: [
        t`$A^2 = A \cdot A$, row by column: $\begin{bmatrix} 1 + 0 & 0 + 0 \\ -1 - 7 & 0 + 49 \end{bmatrix}$ $= \begin{bmatrix} 1 & 0 \\ -8 & 49 \end{bmatrix}$.`,
        t`$8A = \begin{bmatrix} 8 & 0 \\ -8 & 56 \end{bmatrix}$, so $A^2 - 8A$ $= \begin{bmatrix} -7 & 0 \\ 0 & -7 \end{bmatrix}$.`,
        t`$kI = \begin{bmatrix} k & 0 \\ 0 & k \end{bmatrix}$ has $k$ only on the diagonal, so $A^2 - 8A - kI$ $= \begin{bmatrix} -7 - k & 0 \\ 0 & -7 - k \end{bmatrix}$.`,
        t`This is $O$ when $-7 - k = 0$, so $k = -7$.`,
      ],
      answer: t`$k = -7$`,
    },
    visualSpec: t`Drag the entries of two $2 \times 2$ matrices and watch $AB$ and $BA$ update side by side, with the entries where they differ highlighted and a flag when a product becomes $O$.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Treats matrix multiplication as commutative: $BA = AB$, so $(A + B)^2 = A^2 + 2AB + B^2$`,
      remediation: t`In general $AB \ne BA$: $AB$ uses rows of $A$ with columns of $B$, and $BA$ the other way round. Keep every product in the order written, so $(A + B)^2 = A^2 + AB + BA + B^2$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M2",
      mistake: t`Multiplies matching entries, so $A^2$ squares each entry of $A$`,
      remediation: t`$A^2$ means $A \cdot A$: each entry is a row of $A$ times a column of $A$. Multiplying matching entries is not matrix multiplication.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M3",
      mistake: t`Reads $cI$ (or $A + I$) as adding the number $c$ to every entry`,
      remediation: t`$I$ is the unit matrix: $1$s on the diagonal and $0$s elsewhere. So $cI$ adds $c$ to the diagonal entries only.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M4",
      mistake: t`Squares a sum term by term: $(A + B)^2 = A^2 + B^2$`,
      remediation: t`$(A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2$. The middle terms $AB + BA$ stay unless they add up to $O$.`,
      fallback: { kind: "ext", topic: "expanding (a + b)²" },
    },
    {
      id: "C10-M5",
      mistake: t`Multiplies row by row: entry $(i, j)$ as row $i$ of the first times row $j$ of the second`,
      remediation: t`Entry $(i, j)$ of $AB$ is row $i$ of $A$ times **column** $j$ of $B$. Run along the row of the first matrix and down the column of the second.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M6",
      mistake: t`Moves the $I$ term across the equals sign without changing its sign`,
      remediation: t`Bring every term to one side, so the equation reads (one matrix) $= O$, then set each entry to $0$. A term that changes sides changes its sign.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`Find-k items (Q4, Q5): a misconception's matrix gives entry equations that disagree, so its model solves the $(1, 1)$ entry, where the book's working starts.`,
    t`C10-M3 can't be caught by a find-k item: $cI$ and $c$ in every entry agree on the diagonal. Diagnose it with a matrix-valued item (Q3, Q6).`,
    t`C10-M1 gives the key when the factors commute (any product with $I$, as in Q6); diagnose it with two matrices that don't commute (Q1, Q2).`,
    t`C10-M5 gives the key for $A^2$ when $A$ is symmetric ($AA^T = A^2$); draw it from items with a non-symmetric matrix.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q2" },
      stem: t`If $A = \begin{bmatrix} 1 & -3 \\ 4 & 2 \end{bmatrix}$ and $B = \begin{bmatrix} 4 & 1 \\ 3 & -2 \end{bmatrix}$, then $BA = $`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -3], [4, 2]])", B: "Matrix([[4, 1], [3, -2]])" }, params: { expr: "B*A" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-5 & 7\\22 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M1", value: "Matrix([[-5, 7], [22, 0]])" },
        { key: "B", text: t`$\left[\begin{matrix}4 & -3\\12 & -4\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M2", value: "Matrix([[4, -3], [12, -4]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & 18\\9 & 8\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M5", value: "Matrix([[1, 18], [9, 8]])" },
        { key: "D", text: t`$\left[\begin{matrix}8 & -10\\-5 & -13\end{matrix}\right]$`, correct: true, value: "Matrix([[8, -10], [-5, -13]])" },
      ],
      solution: {
        steps: [
          t`$BA$ takes the rows of $B$ with the columns of $A$. Row 1 of $B$ is $(4, 1)$: $4(1) + 1(4) = 8$ and $4(-3) + 1(2) = -10$.`,
          t`Row 2 of $B$ is $(3, -2)$: $3(1) + (-2)(4) = -5$ and $3(-3) + (-2)(2) = -13$.`,
          t`So $BA = \begin{bmatrix} 8 & -10 \\ -5 & -13 \end{bmatrix}$. Compare $AB = \begin{bmatrix} -5 & 7 \\ 22 & 0 \end{bmatrix}$: here $AB \ne BA$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q14" },
      stem: t`If $A = \begin{bmatrix} 8 & 4 \\ 10 & 5 \end{bmatrix}$ and $B = \begin{bmatrix} 5 & -4 \\ 10 & -8 \end{bmatrix}$, then $(A + B)^2 = $`,
      verify: { kind: "value", inputs: { A: "Matrix([[8, 4], [10, 5]])", B: "Matrix([[5, -4], [10, -8]])" }, params: { expr: "(A + B)**2" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}169 & 0\\200 & 9\end{matrix}\right]$`, correct: true, value: "Matrix([[169, 0], [200, 9]])" },
        { key: "B", text: t`$\left[\begin{matrix}249 & -64\\300 & -71\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M1", value: "Matrix([[249, -64], [300, -71]])" },
        { key: "C", text: t`$\left[\begin{matrix}169 & 0\\400 & 9\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M2", value: "Matrix([[169, 0], [400, 9]])" },
        { key: "D", text: t`$\left[\begin{matrix}89 & 64\\100 & 89\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M4", value: "Matrix([[89, 64], [100, 89]])" },
      ],
      solution: {
        steps: [
          t`$A + B = \begin{bmatrix} 13 & 0 \\ 20 & -3 \end{bmatrix}$.`,
          t`$(A + B)^2 = (A + B)(A + B)$. Row 1: $13(13) + 0 = 169$ and $0 + 0 = 0$. Row 2: $20(13) + (-3)(20) = 200$ and $0 + (-3)(-3) = 9$.`,
          t`So $(A + B)^2 = \begin{bmatrix} 169 & 0 \\ 200 & 9 \end{bmatrix}$. Here $BA = O$ but $AB = \begin{bmatrix} 80 & -64 \\ 100 & -80 \end{bmatrix}$, so $(A + B)^2 = A^2 + AB + B^2$, not $A^2 + 2AB + B^2$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q15" },
      stem: t`If $A = \begin{bmatrix} 3 & 1 \\ -1 & 2 \end{bmatrix}$ and $I$ is the unit matrix of order $2$, then $A^2 - 5A + 7I = $`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, 1], [-1, 2]])" }, params: { expr: "A**2 - 5*A + 7*I" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}2 & -6\\4 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M5", value: "Matrix([[2, -6], [4, 2]])" },
        { key: "B", text: t`$\left[\begin{matrix}0 & 0\\0 & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[0, 0], [0, 0]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & -4\\6 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M2", value: "Matrix([[1, -4], [6, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}0 & 7\\7 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M3", value: "Matrix([[0, 7], [7, 0]])" },
      ],
      solution: {
        steps: [
          t`$A^2 = A \cdot A = \begin{bmatrix} 9 - 1 & 3 + 2 \\ -3 - 2 & -1 + 4 \end{bmatrix} = \begin{bmatrix} 8 & 5 \\ -5 & 3 \end{bmatrix}$.`,
          t`$5A = \begin{bmatrix} 15 & 5 \\ -5 & 10 \end{bmatrix}$ and $7I = \begin{bmatrix} 7 & 0 \\ 0 & 7 \end{bmatrix}$.`,
          t`$A^2 - 5A + 7I = \begin{bmatrix} 8 - 15 + 7 & 5 - 5 + 0 \\ -5 + 5 + 0 & 3 - 10 + 7 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = O$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q19" },
      stem: t`If $A = \begin{bmatrix} 3 & -2 \\ 4 & -2 \end{bmatrix}$ and $A^2 = kA - 2I$, where $I$ is the unit matrix of order $2$, then $k = $`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, -2], [4, -2]])" }, params: { expr: "A**2 - k*A + 2*I", ask: "k" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C10-M5", value: "5" },
        { key: "B", text: t`$- \frac{1}{3}$`, correct: false, misconceptionId: "C10-M6", value: "-1/3" },
        { key: "C", text: t`$1$`, correct: true, value: "1" },
        { key: "D", text: t`$\frac{11}{3}$`, correct: false, misconceptionId: "C10-M2", value: "11/3" },
      ],
      solution: {
        steps: [
          t`$A^2 = A \cdot A = \begin{bmatrix} 9 - 8 & -6 + 4 \\ 12 - 8 & -8 + 4 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 4 & -4 \end{bmatrix}$.`,
          t`$kA - 2I = \begin{bmatrix} 3k - 2 & -2k \\ 4k & -2k - 2 \end{bmatrix}$.`,
          t`Equal matrices have equal entries. Entry $(1, 2)$: $-2 = -2k$, so $k = 1$. The other entries check: $3 - 2 = 1$, $4 = 4$, $-2 - 2 = -4$. So $k = 1$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4B II Q14" },
      stem: t`If $A = \begin{bmatrix} 3 & -5 \\ -4 & 2 \end{bmatrix}$ and $A^2 - 5A + kI = O$, where $I$ is the unit matrix and $O$ the null matrix of order $2$, then $k = $`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, -5], [-4, 2]])" }, params: { expr: "A**2 - 5*A + k*I", ask: "k" } },
      options: [
        { key: "A", text: t`$-14$`, correct: true, value: "-14" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C10-M2", value: "6" },
        { key: "C", text: t`$-19$`, correct: false, misconceptionId: "C10-M5", value: "-19" },
        { key: "D", text: t`$14$`, correct: false, misconceptionId: "C10-M6", value: "14" },
      ],
      solution: {
        steps: [
          t`$A^2 = A \cdot A = \begin{bmatrix} 9 + 20 & -15 - 10 \\ -12 - 8 & 20 + 4 \end{bmatrix} = \begin{bmatrix} 29 & -25 \\ -20 & 24 \end{bmatrix}$.`,
          t`$5A = \begin{bmatrix} 15 & -25 \\ -20 & 10 \end{bmatrix}$, so $A^2 - 5A = \begin{bmatrix} 14 & 0 \\ 0 & 14 \end{bmatrix}$.`,
          t`Then $A^2 - 5A + kI = \begin{bmatrix} 14 + k & 0 \\ 0 & 14 + k \end{bmatrix} = O$ gives $14 + k = 0$, so $k = -14$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q10" },
      stem: t`If $A = \begin{bmatrix} 1 & 2 & 0 \\ 5 & 4 & 2 \\ 0 & 7 & -3 \end{bmatrix}$ and $I$ is the unit matrix of order $3$, then $(A + I)(A - I) = $`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 0], [5, 4, 2], [0, 7, -3]])" }, params: { expr: "(A + I)*(A - I)" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}10 & 10 & 4\\25 & 39 & 2\\35 & 7 & 22\end{matrix}\right]$`, correct: true, value: "Matrix([[10, 10, 4], [25, 39, 2], [35, 7, 22]])" },
        { key: "B", text: t`$\left[\begin{matrix}0 & 4 & 0\\25 & 15 & 4\\0 & 49 & 8\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M2", value: "Matrix([[0, 4, 0], [25, 15, 4], [0, 49, 8]])" },
        { key: "C", text: t`$\left[\begin{matrix}11 & 17 & -3\\17 & 39 & -13\\34 & 13 & 15\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M3", value: "Matrix([[11, 17, -3], [17, 39, -13], [34, 13, 15]])" },
        { key: "D", text: t`$\left[\begin{matrix}4 & 16 & 14\\10 & 44 & 27\\14 & 17 & 57\end{matrix}\right]$`, correct: false, misconceptionId: "C10-M5", value: "Matrix([[4, 16, 14], [10, 44, 27], [14, 17, 57]])" },
      ],
      solution: {
        steps: [
          t`$AI = IA = A$, so $(A + I)(A - I) = A^2 - AI + IA - I^2 = A^2 - I$.`,
          t`$A^2 = A \cdot A$, row by column: $\begin{bmatrix} 11 & 10 & 4 \\ 25 & 40 & 2 \\ 35 & 7 & 23 \end{bmatrix}$. For example, entry $(2, 2)$ is $5(2) + 4(4) + 2(7) = 40$.`,
          t`Subtract $1$ from each diagonal entry: $(A + I)(A - I) = \begin{bmatrix} 10 & 10 & 4 \\ 25 & 39 & 2 \\ 35 & 7 & 22 \end{bmatrix}$.`,
        ],
      },
    },
  ],
};
