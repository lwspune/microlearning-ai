import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`$\begin{bmatrix} 1 & 2 \end{bmatrix}\begin{bmatrix} 3 \\ 4 \end{bmatrix}$ is a single number. Now swap the two: $\begin{bmatrix} 3 \\ 4 \end{bmatrix}\begin{bmatrix} 1 & 2 \end{bmatrix}$. **Same answer?**`,
    reveal: t`Not even the same size. A $1 \times 2$ times a $2 \times 1$ is $1 \times 1$: $\begin{bmatrix} 3 + 8 \end{bmatrix} = \begin{bmatrix} 11 \end{bmatrix}$. A $2 \times 1$ times a $1 \times 2$ is $2 \times 2$: each entry is one row times one column, giving $\begin{bmatrix} 3 & 6 \\ 4 & 8 \end{bmatrix}$. The outer numbers of the orders fix the size of a product.`,
  },
  explanation: {
    intuition: t`Riya buys $2$ pens and $3$ notebooks; a pen costs ₹$5$ and a notebook ₹$20$. Her bill is $2(5) + 3(20) = 70$: quantities along a row, prices down a column, matched and added. That is one entry of a product. Put each buyer in a row of $A$ and each price list in a column of $B$: entry $(i, j)$ of $AB$ is buyer $i$'s bill at price list $j$. A row can only meet a column of the same length, so $A$ needs as many columns as $B$ has rows.`,
    formal: t`**Definition.** If $A = [a_{ij}]$ is $m \times n$ and $B = [b_{jk}]$ is $n \times p$, then $AB = [c_{ik}]$ is the $m \times p$ matrix with
$$c_{ik} = a_{i1}b_{1k} + a_{i2}b_{2k} + \dots + a_{in}b_{nk}$$
Row $i$ of $A$ times column $k$ of $B$: multiply matching entries, then add.

**When is $AB$ defined?** Only when the number of columns of $A$ equals the number of rows of $B$: the inner numbers of the orders match. The outer numbers give the order of the product: $(m \times n)(n \times p)$ is $m \times p$.

**Example.** $\begin{bmatrix} 1 & 2 \\ 0 & 3 \end{bmatrix}\begin{bmatrix} 4 \\ 5 \end{bmatrix} = \begin{bmatrix} 4 + 10 \\ 0 + 15 \end{bmatrix} = \begin{bmatrix} 14 \\ 15 \end{bmatrix}$: a $2 \times 2$ times a $2 \times 1$ is $2 \times 1$.

**Order matters.** $AB$ can be defined while $BA$ is not, and when both are defined they usually differ. Unlike addition, entries in the same position are never multiplied together.`,
    worked: {
      prompt: t`Find $AB$ if $A = \begin{bmatrix} 2 & 1 & 0 \\ 1 & -1 & 3 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 2 \\ 0 & 1 \\ 4 & -1 \end{bmatrix}$.`,
      steps: [
        t`$A$ is $2 \times 3$ and $B$ is $3 \times 2$. The inner numbers match ($3 = 3$), so $AB$ is defined, and the outer numbers give its order: $2 \times 2$.`,
        t`Row $1$ of $A$ is $(2, 1, 0)$. With column $1$ of $B$: $c_{11} = 2(1) + 1(0) + 0(4) = 2$. With column $2$: $c_{12} = 2(2) + 1(1) + 0(-1) = 5$.`,
        t`Row $2$ of $A$ is $(1, -1, 3)$. $c_{21} = 1(1) + (-1)(0) + 3(4) = 13$ and $c_{22} = 1(2) + (-1)(1) + 3(-1) = -2$.`,
      ],
      answer: t`$AB = \begin{bmatrix} 2 & 5 \\ 13 & -2 \end{bmatrix}$`,
    },
    visualSpec: t`Drag a highlight along row $i$ of $A$ and down column $j$ of $B$; the matching entries pair up, multiply and add into cell $(i, j)$ of $AB$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Multiplies entries in the same position, as in addition, so believes $AB$ needs $A$ and $B$ of the same order.`,
      remediation: t`Matrices are not multiplied entry by entry. Entry $(i, j)$ of $AB$ is row $i$ of $A$ times column $j$ of $B$, so $AB$ needs columns of $A$ = rows of $B$, not equal orders.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: t`Works out $BA$ instead of $AB$ (row of $B$ times column of $A$), as if the order of the factors does not matter.`,
      remediation: t`In $AB$ the rows come from the first factor, $A$, and the columns from the second, $B$. Swapping the factors gives a different product, often of a different order.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Multiplies row $i$ of $A$ by row $j$ of $B$.`,
      remediation: t`Each entry of $AB$ pairs a **row** of $A$ with a **column** of $B$: go across $A$ and down $B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Multiplies column $i$ of $A$ by column $j$ of $B$.`,
      remediation: t`Go across a row of $A$, not down its column: entry $(i, j)$ of $AB$ is row $i$ of $A$ times column $j$ of $B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Takes the order of $AB$ from the inner numbers: an $m \times n$ times an $n \times p$ gives $n \times n$.`,
      remediation: t`The inner numbers must match for $AB$ to exist; the outer numbers give its order. An $m \times n$ times an $n \times p$ is $m \times p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Swaps rows and columns: reads $c_{ij}$ as the entry in row $j$, column $i$, and writes an order as columns $\times$ rows.`,
      remediation: t`The first index is always the row: $c_{21}$ is in row $2$, column $1$, and an order $m \times p$ means $m$ rows and $p$ columns.`,
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  engineNotes: [
    t`C09-M2 gives the key whenever $AB = BA$, e.g. on any $A^2$ item; diagnose it with a pair that does not commute.`,
    t`On order items, C09-M5 and C09-M6 give the key when both factors are square of the same order; use factors whose product is not square. On entry items, C09-M6 gives the key when $c_{ij} = c_{ji}$.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q2" },
      stem: t`If $A = \begin{bmatrix} 1 & -3 \\ 4 & 2 \end{bmatrix}$ and $B = \begin{bmatrix} 4 & 1 \\ 3 & -2 \end{bmatrix}$, then $AB =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -3], [4, 2]])", B: "Matrix([[4, 1], [3, -2]])" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}8 & -10\\-5 & -13\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M2", value: "Matrix([[8, -10], [-5, -13]])" },
        { key: "B", text: t`$\left[\begin{matrix}1 & 9\\18 & 8\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M3", value: "Matrix([[1, 9], [18, 8]])" },
        { key: "C", text: t`$\left[\begin{matrix}-5 & 7\\22 & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[-5, 7], [22, 0]])" },
        { key: "D", text: t`$\left[\begin{matrix}4 & -3\\12 & -4\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M1", value: "Matrix([[4, -3], [12, -4]])" },
      ],
      solution: {
        steps: [
          t`Both matrices are $2 \times 2$, so $AB$ is defined and is $2 \times 2$.`,
          t`Row $1$ of $A$ is $(1, -3)$: $c_{11} = 1(4) + (-3)(3) = -5$ and $c_{12} = 1(1) + (-3)(-2) = 7$.`,
          t`Row $2$ of $A$ is $(4, 2)$: $c_{21} = 4(4) + 2(3) = 22$ and $c_{22} = 4(1) + 2(-2) = 0$. So $AB = \begin{bmatrix} -5 & 7 \\ 22 & 0 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q5" },
      stem: t`If $A = \begin{bmatrix} 4 & 8 \\ -2 & -4 \end{bmatrix}$, then $A^2 =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[4, 8], [-2, -4]])", B: "Matrix([[4, 8], [-2, -4]])" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}0 & 0\\0 & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[0, 0], [0, 0]])" },
        { key: "B", text: t`$\left[\begin{matrix}16 & 64\\4 & 16\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M1", value: "Matrix([[16, 64], [4, 16]])" },
        { key: "C", text: t`$\left[\begin{matrix}80 & -40\\-40 & 20\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M3", value: "Matrix([[80, -40], [-40, 20]])" },
        { key: "D", text: t`$\left[\begin{matrix}20 & 40\\40 & 80\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M4", value: "Matrix([[20, 40], [40, 80]])" },
      ],
      solution: {
        steps: [
          t`$A^2 = AA$: each entry is a row of the first $A$ times a column of the second.`,
          t`Row $1$ is $(4, 8)$: $4(4) + 8(-2) = 0$ and $4(8) + 8(-4) = 0$.`,
          t`Row $2$ is $(-2, -4)$: $-2(4) + (-4)(-2) = 0$ and $-2(8) + (-4)(-4) = 0$. So $A^2 = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$, the null matrix, though $A$ itself is not null.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.6 SolvedEx.8" },
      stem: t`Four schools send students for Kabaddi, Cricket and Tennis coaching. The numbers of students are $S = \begin{bmatrix} 20 & 35 & 15 \\ 18 & 36 & 12 \\ 24 & 12 & 8 \\ 25 & 20 & 6 \end{bmatrix}$ (a row per school, a column per game) and the charges per student are $C = \begin{bmatrix} 40 & 10 \\ 50 & 50 \\ 60 & 40 \end{bmatrix}$ (a row per game; columns: coaching, equipment). The order of the expense matrix $SC$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[20, 35, 15], [18, 36, 12], [24, 12, 8], [25, 20, 6]])", B: "Matrix([[40, 10], [50, 50], [60, 40]])" }, params: { ask: "order" } },
      options: [
        { key: "A", text: t`$SC$ is not defined`, correct: false, misconceptionId: "C09-M1", value: "not_defined" },
        { key: "B", text: t`$3 \times 3$`, correct: false, misconceptionId: "C09-M5", value: "(3, 3)" },
        { key: "C", text: t`$2 \times 4$`, correct: false, misconceptionId: "C09-M6", value: "(2, 4)" },
        { key: "D", text: t`$4 \times 2$`, correct: true, value: "(4, 2)" },
      ],
      solution: {
        steps: [
          t`$S$ is $4 \times 3$ and $C$ is $3 \times 2$. The inner numbers match ($3 = 3$): each row of $S$ (one school) meets each column of $C$ (one kind of charge) game by game, so $SC$ is defined.`,
          t`The outer numbers give the order: $SC$ is $4 \times 2$, a row per school and a column for coaching and for equipment.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.6 SolvedEx.1" },
      stem: t`If $A = \begin{bmatrix} 1 & -1 & 2 \\ 0 & -1 & 3 \end{bmatrix}$ and $B = \begin{bmatrix} -2 & 1 \\ 3 & -1 \\ 0 & 2 \end{bmatrix}$, the entry in row $2$, column $1$ of $AB$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2], [0, -1, 3]])", B: "Matrix([[-2, 1], [3, -1], [0, 2]])" }, params: { ask: "entry", i: "2", j: "1" } },
      options: [
        { key: "A", text: t`$-3$`, correct: true, value: "-3" },
        { key: "B", text: t`$AB$ is not defined`, correct: false, misconceptionId: "C09-M1", value: "not_defined" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C09-M2", value: "3" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C09-M6", value: "6" },
      ],
      solution: {
        steps: [
          t`$A$ is $2 \times 3$ and $B$ is $3 \times 2$, so $AB$ is defined and is $2 \times 2$.`,
          t`The entry in row $2$, column $1$ uses row $2$ of $A$, $(0, -1, 3)$, and column $1$ of $B$, $(-2, 3, 0)$.`,
          t`$c_{21} = 0(-2) + (-1)(3) + 3(0) = -3$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q8" },
      stem: t`If $A = \begin{bmatrix} 1 & -2 \\ 5 & 6 \end{bmatrix}$ and $B = \begin{bmatrix} 3 & -1 \\ 3 & 7 \end{bmatrix}$, and $I$ is the unit matrix of order $2$, then $AB - 2I =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -2], [5, 6]])", B: "Matrix([[3, -1], [3, 7]])" }, params: { k: "2" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}3 & -11\\9 & 55\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M3", value: "Matrix([[3, -11], [9, 55]])" },
        { key: "B", text: t`$\left[\begin{matrix}16 & 34\\12 & 42\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M4", value: "Matrix([[16, 34], [12, 42]])" },
        { key: "C", text: t`$\left[\begin{matrix}-5 & -15\\33 & 35\end{matrix}\right]$`, correct: true, value: "Matrix([[-5, -15], [33, 35]])" },
        { key: "D", text: t`$\left[\begin{matrix}-4 & -12\\38 & 34\end{matrix}\right]$`, correct: false, misconceptionId: "C09-M2", value: "Matrix([[-4, -12], [38, 34]])" },
      ],
      solution: {
        steps: [
          t`Row $1$ of $A$ is $(1, -2)$: $1(3) + (-2)(3) = -3$ and $1(-1) + (-2)(7) = -15$.`,
          t`Row $2$ of $A$ is $(5, 6)$: $5(3) + 6(3) = 33$ and $5(-1) + 6(7) = 37$. So $AB = \begin{bmatrix} -3 & -15 \\ 33 & 37 \end{bmatrix}$.`,
          t`$2I = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$, so $AB - 2I = \begin{bmatrix} -5 & -15 \\ 33 & 35 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.6 Q6(i)" },
      stem: t`If $A = \begin{bmatrix} 1 & 0 & 1 \\ 2 & 3 & 0 \\ 0 & 4 & 5 \end{bmatrix}$ and $B = \begin{bmatrix} 2 & -2 \\ -1 & 1 \\ 0 & 3 \end{bmatrix}$, the order of $AB$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 0, 1], [2, 3, 0], [0, 4, 5]])", B: "Matrix([[2, -2], [-1, 1], [0, 3]])" }, params: { ask: "order" } },
      options: [
        { key: "A", text: t`$2 \times 3$`, correct: false, misconceptionId: "C09-M6", value: "(2, 3)" },
        { key: "B", text: t`$3 \times 2$`, correct: true, value: "(3, 2)" },
        { key: "C", text: t`$AB$ is not defined`, correct: false, misconceptionId: "C09-M1", value: "not_defined" },
        { key: "D", text: t`$3 \times 3$`, correct: false, misconceptionId: "C09-M5", value: "(3, 3)" },
      ],
      solution: {
        steps: [
          t`$A$ is $3 \times 3$ and $B$ is $3 \times 2$. Columns of $A$ ($3$) = rows of $B$ ($3$), so $AB$ is defined; the two orders need not be equal.`,
          t`The outer numbers give the order: $AB$ is $3 \times 2$.`,
        ],
      },
    },
  ],
};
