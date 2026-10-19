import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`For $A = \begin{bmatrix} 3 & 1 \\ 2 & 2 \end{bmatrix}$, $A^2 = \begin{bmatrix} 11 & 5 \\ 10 & 6 \end{bmatrix}$. **Find numbers $p$ and $q$ with $A^2 = pA + qI$.**`,
    reveal: t`The top-right entries give $5 = p \cdot 1$, so $p = 5$. The top-left entries give $11 = 15 + q$, so $q = -4$. Now $5 = 3 + 2$ is the sum of the diagonal, and $4 = 6 - 2 = |A|$. That is no accident: every $2 \times 2$ matrix has $A^2 = (\operatorname{tr}A)A - |A|I$.`,
  },
  explanation: {
    intuition: [
      t`The **trace** of a square matrix, $\operatorname{tr}A$, is the sum of its diagonal entries.`,
      t`For a $2 \times 2$ matrix, $A^2$ can always be built from $A$ and $I$ alone.`,
      t`Just two numbers fix how: the trace $\operatorname{tr}A$ and the determinant $|A|$.`,
      t`The rule is $A^2 - (\operatorname{tr}A)A + |A|I = O$, where $O$ is the null matrix.`,
      t`So any polynomial in $A$ shrinks to the form $pA + qI$.`,
      t`Multiply the rule by $A^{-1}$, and $A^{-1}$ also comes out as $pA + qI$.`,
    ],
    formal: [
      {
        title: "The characteristic equation",
        points: [
          t`The **characteristic equation** of a square matrix $A$ is $|A - \lambda I| = 0$, for a number $\lambda$.`,
          t`Take $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$.`,
          t`Then $A - \lambda I = \begin{bmatrix} a - \lambda & b \\ c & d - \lambda \end{bmatrix}$: subtract $\lambda$ from the diagonal entries only.`,
          t`Expanding: $(a - \lambda)(d - \lambda) - bc = 0$.`,
          t`That is $\lambda^2 - (a + d)\lambda$ $+ (ad - bc) = 0$.`,
          t`So it reads $\lambda^2 - (\operatorname{tr}A)\lambda + |A| = 0$.`,
        ],
      },
      {
        title: "The Cayley–Hamilton theorem",
        points: [
          t`The **Cayley–Hamilton theorem**: every square matrix satisfies its own characteristic equation.`,
          t`To use it, put $A$ for $\lambda$, $|A|I$ for the number $|A|$, and $O$ for $0$.`,
          t`For a $2 \times 2$ matrix: $A^2 - (\operatorname{tr}A)A + |A|I = O$.`,
          t`Mind the signs: minus the trace, **plus** the determinant.`,
          t`Example: $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ has trace $5$ and determinant $4 - 6 = -2$.`,
          t`So it satisfies $A^2 - 5A - 2I = O$.`,
        ],
      },
      {
        title: "Reducing a polynomial in A",
        points: [
          t`Rearranged, the theorem gives $A^2 = (\operatorname{tr}A)A - |A|I$.`,
          t`Replace $A^2$ by this, and any polynomial in $A$ becomes $pA + qI$.`,
          t`For example, $A^2 - (\operatorname{tr}A)A$ is just $-|A|I$.`,
          t`If $A^2 + xA + yI = O$, compare with the theorem: $x = -\operatorname{tr}A$, $y = |A|$.`,
          t`This pair is the only one, as long as $A$ is not a number times $I$.`,
        ],
      },
      {
        title: "The inverse from the theorem",
        points: [
          t`Multiply $A^2 - (\operatorname{tr}A)A + |A|I = O$ by $A^{-1}$.`,
          t`As $A^2A^{-1} = A$ and $AA^{-1} = I$, this gives $A - (\operatorname{tr}A)I + |A|A^{-1} = O$.`,
          t`Move the other terms across: $|A|A^{-1} = (\operatorname{tr}A)I - A$.`,
          t`Divide by $|A| \neq 0$: $A^{-1} = \frac{1}{|A|}\left((\operatorname{tr}A)I - A\right)$.`,
          t`So in $A^{-1} = \alpha I + \beta A$: $\alpha = \frac{\operatorname{tr}A}{|A|}$ and $\beta = -\frac{1}{|A|}$.`,
          t`Here $(\operatorname{tr}A)I - A$ is exactly $\operatorname{adj}A$, so this matches $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
        ],
      },
      {
        title: "When the polynomial is given",
        points: [
          t`Some questions give the relation instead, like $A^2 + pA + qI = O$, for a matrix of any order.`,
          t`If $q \neq 0$, multiply by $A^{-1}$: $A + pI + qA^{-1} = O$.`,
          t`So $qA^{-1} = -(A + pI)$: each term changes sign as it moves across.`,
          t`A product like $(A - 2I)(A - 4I) = O$ first expands to $A^2 - 6A + 8I = O$.`,
          t`It does **not** mean $A = 2I$ or $A = 4I$: two non-zero matrices can multiply to $O$.`,
          t`Then $A - 6I + 8A^{-1} = O$, so $A^{-1} = \frac{1}{8}(6I - A)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Using the Cayley–Hamilton theorem, write $A^{-1}$ in the form $xA + yI$ for $A = \begin{bmatrix} 3 & -2 \\ 1 & 2 \end{bmatrix}$.`,
      steps: [
        t`$\operatorname{tr}A = 3 + 2 = 5$ and $|A| = 6 - (-2) = 8$.`,
        t`The theorem: $A^2 - 5A + 8I = O$.`,
        t`Multiply by $A^{-1}$: $A - 5I + 8A^{-1} = O$.`,
        t`So $8A^{-1} = 5I - A$, and $A^{-1} = -\frac{1}{8}A + \frac{5}{8}I$.`,
        t`Check: $5I - A = \begin{bmatrix} 2 & 2 \\ -1 & 3 \end{bmatrix}$, which is $\operatorname{adj}A$, as the adjoint method says.`,
      ],
      answer: t`$A^{-1} = -\frac{1}{8}A + \frac{5}{8}I$, so $x = -\frac{1}{8}$ and $y = \frac{5}{8}$.`,
    },
    visualSpec: t`Drag the entries of a $2 \times 2$ matrix: $\operatorname{tr}A$ and $|A|$ update, and $A^2$ sits beside $(\operatorname{tr}A)A - |A|I$, always equal.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Writing the determinant term with a minus: $A^2 - (\operatorname{tr}A)A - |A|I = O$`,
      remediation: t`The theorem is $A^2 - (\operatorname{tr}A)A + |A|I = O$: minus the trace, **plus** the determinant. It comes from $\lambda^2 - (a + d)\lambda + (ad - bc) = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: t`Adding the trace term: $A^2 + (\operatorname{tr}A)A + |A|I = O$`,
      remediation: t`Expanding $(a - \lambda)(d - \lambda)$ gives $-(a + d)\lambda$, so the trace term carries a **minus**: $A^2 - (\operatorname{tr}A)A + |A|I = O$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: t`Taking $|A|$ of a $2 \times 2$ matrix as $ad + bc$`,
      remediation: t`For $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, $|A| = ad - bc$: the product $bc$ is **subtracted**. Then use the theorem with that value.`,
      fallback: { kind: "ext", topic: "2 by 2 determinants" },
    },
    {
      id: "C12-M4",
      mistake: t`Losing a sign when moving terms across: from $A + pI + qA^{-1} = O$, taking $A^{-1} = \frac{1}{q}(A + pI)$`,
      remediation: t`Moving terms to the other side changes their signs: $qA^{-1} = -(A + pI)$. For a $2 \times 2$ matrix this gives $A^{-1} = \frac{1}{|A|}\left((\operatorname{tr}A)I - A\right)$.`,
      fallback: { kind: "ext", topic: "transposing terms in a linear equation" },
    },
    {
      id: "C12-M5",
      mistake: t`Forgetting to divide by the constant term: $A^{-1} = (\operatorname{tr}A)I - A$`,
      remediation: t`From $|A|A^{-1} = (\operatorname{tr}A)I - A$, divide by $|A|$ as well. $(\operatorname{tr}A)I - A$ is $\operatorname{adj}A$, and $A^{-1} = \frac{1}{|A|}\operatorname{adj}A$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C12-M6",
      mistake: t`Reading $(A - 3I)(A - 5I) = O$ as $A = 3I$ (or $A = 5I$)`,
      remediation: t`Two non-zero matrices can multiply to $O$, so neither factor need be $O$. Expand the product to $A^2 + pA + qI = O$, then multiply by $A^{-1}$.`,
      fallback: { kind: "ext", topic: "matrix algebra" },
    },
  ],
  engineNotes: [
    "C12-M1 and C12-M4 give the same value on every 2 x 2 inverse item, (A - (tr A)I)/|A|; such items tag only one of them (C12-Q3 and C12-Q4 tag M1, C12-Q6 tags M4). M4 is told apart from M1 only on a given-polynomial item (C12-Q5).",
    "C12-M3 gives the key when bc = 0 (a triangular A), C12-M1 when |A| = 0, C12-M2 when tr A = 0, and C12-M5 when the constant term is 1: avoid those inputs.",
    "C12-M6 needs a factored polynomial and an ask of (x, y) in A^{-1} = xA + yI; on alpha A + beta A^{-1} = kI forms it leaves alpha and beta undetermined.",
    "Every (x, y) item needs A not a multiple of I, so that the pair is unique.",
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "2026 April Q65" },
      stem: t`If $A = \begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix}$ and $A^2 + xA + yI = O$, where $I$ and $O$ are the identity and null matrices of order 2, then $(x, y) =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -1], [1, 3]])" }, params: { ask: "xy" } },
      options: [
        { key: "A", text: t`$(-5, -7)$`, correct: false, misconceptionId: "C12-M1", value: "(-5, -7)" },
        { key: "B", text: t`$(5, 7)$`, correct: false, misconceptionId: "C12-M2", value: "(5, 7)" },
        { key: "C", text: t`$(-5, 5)$`, correct: false, misconceptionId: "C12-M3", value: "(-5, 5)" },
        { key: "D", text: t`$(-5, 7)$`, correct: true, value: "(-5, 7)" },
      ],
      solution: {
        steps: [
          t`$\operatorname{tr}A = 2 + 3 = 5$ and $|A| = 6 - (-1) = 7$.`,
          t`By the Cayley–Hamilton theorem, $A^2 - 5A + 7I = O$.`,
          t`Compare with $A^2 + xA + yI = O$: $x = -5$ and $y = 7$, so $(x, y) = (-5, 7)$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "2021 May Q117" },
      stem: t`If $A = \begin{bmatrix} 1 & -1 \\ 2 & 3 \end{bmatrix}$, then $A^2 - 4A$ equals`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1], [2, 3]])", p: "-4", q: "0" }, params: { ask: "poly" } },
      options: [
        { key: "A", text: t`$\begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$`, correct: false, misconceptionId: "C12-M3", value: "Matrix([[-1, 0], [0, -1]])" },
        { key: "B", text: t`$\begin{bmatrix} -5 & 0 \\ 0 & -5 \end{bmatrix}$`, correct: true, value: "Matrix([[-5, 0], [0, -5]])" },
        { key: "C", text: t`$\begin{bmatrix} 5 & 0 \\ 0 & 5 \end{bmatrix}$`, correct: false, misconceptionId: "C12-M1", value: "Matrix([[5, 0], [0, 5]])" },
        { key: "D", text: t`$\begin{bmatrix} -13 & 8 \\ -16 & -29 \end{bmatrix}$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[-13, 8], [-16, -29]])" },
      ],
      solution: {
        steps: [
          t`$\operatorname{tr}A = 1 + 3 = 4$ and $|A| = 3 - (-2) = 5$.`,
          t`By the Cayley–Hamilton theorem, $A^2 - 4A + 5I = O$.`,
          t`So $A^2 - 4A = -5I = \begin{bmatrix} -5 & 0 \\ 0 & -5 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "2024 May Q139" },
      stem: t`If $A = \begin{bmatrix} 1 & 2 \\ -5 & 1 \end{bmatrix}$ and $A^{-1} = xA + yI$, where $I$ is the identity matrix of order 2, then $2x + 3y =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [-5, 1]])" }, params: { ask: "combo", expr: "2*cA + 3*cI" } },
      options: [
        { key: "A", text: t`$- \frac{4}{9}$`, correct: false, misconceptionId: "C12-M3", value: "-4/9" },
        { key: "B", text: t`$\frac{4}{11}$`, correct: true, value: "4/11" },
        { key: "C", text: t`$- \frac{4}{11}$`, correct: false, misconceptionId: "C12-M1", value: "-4/11" },
        { key: "D", text: t`$- \frac{8}{11}$`, correct: false, misconceptionId: "C12-M2", value: "-8/11" },
      ],
      solution: {
        steps: [
          t`$\operatorname{tr}A = 2$ and $|A| = 1 - (-10) = 11$, so $A^2 - 2A + 11I = O$.`,
          t`Multiply by $A^{-1}$: $A - 2I + 11A^{-1} = O$.`,
          t`So $A^{-1} = -\frac{1}{11}A + \frac{2}{11}I$: $x = -\frac{1}{11}$, $y = \frac{2}{11}$.`,
          t`$2x + 3y = \frac{-2 + 6}{11} = \frac{4}{11}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "2023 May Q115" },
      stem: t`If $A = \begin{bmatrix} 1 & 2 \\ -1 & 4 \end{bmatrix}$ and $A^{-1} = \alpha I + \beta A$, where $\alpha, \beta \in \mathbb{R}$ and $I$ is the identity matrix of order 2, then $4(\alpha - \beta) =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2], [-1, 4]])" }, params: { ask: "combo", expr: "4*(cI - cA)" } },
      options: [
        { key: "A", text: t`$24$`, correct: false, misconceptionId: "C12-M5", value: "24" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C12-M1", value: "-4" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C12-M3", value: "12" },
      ],
      solution: {
        steps: [
          t`$\operatorname{tr}A = 5$ and $|A| = 4 - (-2) = 6$, so $A^2 - 5A + 6I = O$.`,
          t`Multiply by $A^{-1}$: $A - 5I + 6A^{-1} = O$.`,
          t`So $A^{-1} = \frac{5}{6}I - \frac{1}{6}A$: $\alpha = \frac{5}{6}$, $\beta = -\frac{1}{6}$.`,
          t`$4(\alpha - \beta) = 4 \cdot 1 = 4$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "2023 May Q101" },
      stem: t`$A$ is a non-singular $3 \times 3$ matrix with $(A - 3I)(A - 5I) = O$, where $I$ and $O$ are the identity and null matrices of order 3. If $A^{-1} = xA + yI$, then $(x, y) =$`,
      verify: { kind: "value", inputs: { r1: "3", r2: "5", n: "3" }, params: { ask: "pair" } },
      options: [
        { key: "A", text: t`$(-1, 8)$`, correct: false, misconceptionId: "C12-M5", value: "(-1, 8)" },
        { key: "B", text: t`$\left(0, \frac{1}{3}\right)$`, correct: false, misconceptionId: "C12-M6", value: "(0, 1/3)" },
        { key: "C", text: t`$\left(-\frac{1}{15}, \frac{8}{15}\right)$`, correct: true, value: "(-1/15, 8/15)" },
        { key: "D", text: t`$\left(\frac{1}{15}, -\frac{8}{15}\right)$`, correct: false, misconceptionId: "C12-M4", value: "(1/15, -8/15)" },
      ],
      solution: {
        steps: [
          t`Expand: $A^2 - 8A + 15I = O$.`,
          t`Multiply by $A^{-1}$: $A - 8I + 15A^{-1} = O$.`,
          t`So $15A^{-1} = 8I - A$, and $A^{-1} = -\frac{1}{15}A + \frac{8}{15}I$.`,
          t`$(x, y) = \left(-\frac{1}{15}, \frac{8}{15}\right)$.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "exam-style", exam: "MHT-CET", ref: "2026 May Q68" },
      stem: t`If $A = \begin{bmatrix} 4 & 5 \\ 2 & 1 \end{bmatrix}$, then $A^{-1} =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[4, 5], [2, 1]])" }, params: { ask: "inv" } },
      options: [
        { key: "A", text: t`$\frac{1}{6}(A + 5I)$`, correct: false, misconceptionId: "C12-M2", value: "Matrix([[3/2, 5/6], [1/3, 1]])" },
        { key: "B", text: t`$\frac{1}{6}(5I - A)$`, correct: false, misconceptionId: "C12-M4", value: "Matrix([[1/6, -5/6], [-1/3, 2/3]])" },
        { key: "C", text: t`$5I - A$`, correct: false, misconceptionId: "C12-M5", value: "Matrix([[1, -5], [-2, 4]])" },
        { key: "D", text: t`$\frac{1}{6}(A - 5I)$`, correct: true, value: "Matrix([[-1/6, 5/6], [1/3, -2/3]])" },
      ],
      solution: {
        steps: [
          t`$\operatorname{tr}A = 5$ and $|A| = 4 - 10 = -6$, so $A^2 - 5A - 6I = O$.`,
          t`Multiply by $A^{-1}$: $A - 5I - 6A^{-1} = O$.`,
          t`So $6A^{-1} = A - 5I$, and $A^{-1} = \frac{1}{6}(A - 5I)$.`,
        ],
      },
    },
  ],
};
