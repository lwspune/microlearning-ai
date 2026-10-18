import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Every number except $0$ has an inverse. $B = \begin{bmatrix} 2 & 1 \\ 6 & 3 \end{bmatrix}$ has no zero entry at all. **Does $B$ have an inverse?**`,
    reveal: t`No. $|B| = 6 - 6 = 0$. If $BX = I$ for some $X$, then $|B| \cdot |X| = |I| = 1$, but the left side is $0$. So no $X$ works. The test is $|B|$, not the entries: a matrix with $|B| = 0$ is **singular** and has no inverse.`,
  },
  explanation: {
    intuition: [
      t`The **inverse** of a square matrix $A$ is a matrix $B$ with $AB = BA = I$; we write it $A^{-1}$.`,
      t`A matrix that has an inverse is called **invertible**.`,
      t`For numbers, only $0$ has no inverse; for matrices, the number to watch is $|A|$.`,
      t`A square matrix with $|A| = 0$ is called **singular**; one with $|A| \ne 0$ is **non-singular**.`,
      t`The rule: $A^{-1}$ exists exactly when $|A| \ne 0$.`,
      t`Zero entries don't matter: only the value of $|A|$ decides.`,
    ],
    formal: [
      {
        title: "Singular and non-singular",
        points: [
          t`Only a square matrix has a determinant, so only a square matrix can be singular or not.`,
          t`$A$ is **singular** if $|A| = 0$, and **non-singular** if $|A| \ne 0$.`,
          t`For example, $\begin{bmatrix} 2 & 1 \\ 4 & 2 \end{bmatrix}$ is singular: $|A| = 4 - 4 = 0$.`,
          t`The identity $I$ is non-singular, since $|I| = 1$.`,
          t`That example has no zero entry; its row 2 is just $2 \times$ row 1.`,
        ],
      },
      {
        title: "Why singular means no inverse",
        points: [
          t`The **product rule** for determinants says $|AB| = |A| \cdot |B|$.`,
          t`Suppose $AB = I$; then $|A| \cdot |B| = |I| = 1$.`,
          t`If $|A| = 0$, the left side is $0$, which is never $1$.`,
          t`So a singular matrix has no inverse.`,
          t`The converse holds too: if $|A| \ne 0$, an inverse always exists.`,
          t`The adjoint method builds that inverse; here we only decide whether it exists.`,
        ],
      },
      {
        title: "Testing a matrix",
        points: [
          t`Step 1: find $|A|$; for $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ it is $ad - bc$.`,
          t`For $3 \times 3$, expand along row 1 with the signs $+ - +$.`,
          t`Step 2: if $|A| = 0$, then $A$ is singular and $A^{-1}$ does not exist.`,
          t`If $|A| \ne 0$, then $A$ is non-singular and $A^{-1}$ exists; a negative $|A|$ is fine.`,
          t`Zero entries don't block it: $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ has $|A| = -1$ and is its own inverse.`,
        ],
      },
      {
        title: "A matrix with an unknown",
        points: [
          t`When an entry is an unknown $k$, $|A|$ becomes an expression in $k$.`,
          t`$A^{-1}$ fails to exist exactly at the roots of $|A| = 0$.`,
          t`Keep every root: a quadratic in $k$ can give two values.`,
          t`For every other $k$, $|A| \ne 0$ and $A^{-1}$ exists.`,
        ],
      },
    ],
    worked: {
      prompt: t`For which values of $k$ does $A = \begin{bmatrix} k & 3 \\ 3 & k \end{bmatrix}$ have no inverse?`,
      steps: [
        t`$|A| = k \cdot k - 3 \cdot 3 = k^2 - 9$.`,
        t`$A^{-1}$ does not exist exactly when $|A| = 0$, so solve $k^2 - 9 = 0$.`,
        t`$k^2 = 9$ gives two roots: $k = 3$ and $k = -3$.`,
        t`Check $k = 3$: $\begin{bmatrix} 3 & 3 \\ 3 & 3 \end{bmatrix}$ has $|A| = 9 - 9 = 0$.`,
        t`At $k = 0$ the diagonal is zero, yet $|A| = -9 \ne 0$, so $A^{-1}$ exists there.`,
      ],
      answer: t`$A^{-1}$ does not exist for $k = 3$ and $k = -3$; it exists for every other $k$.`,
    },
    visualSpec: t`Drag the entries of a $2 \times 2$ matrix: its columns span a parallelogram of signed area $|A|$, and the inverse button greys out the moment the parallelogram flattens onto a line.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Reverses the test: thinks $A^{-1}$ exists when $|A| = 0$ (mixes up singular and non-singular)`,
      remediation: t`$A^{-1}$ exists exactly when $|A| \ne 0$. A matrix with $|A| = 0$ is **singular** and has no inverse.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Treats $A$ like a number: thinks $A^{-1}$ fails when a diagonal entry is $0$, as $\frac{1}{a}$ fails at $0$`,
      remediation: t`Zero entries, even on the diagonal, don't decide anything; only $|A| = 0$ does. $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ has $|A| = -1$ and is its own inverse.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Adds the products in the determinant: $ad + bc$ for $2 \times 2$, all plus signs for $3 \times 3$`,
      remediation: t`In $|A| = ad - bc$ the second product is **subtracted**. In a $3 \times 3$ determinant each $2 \times 2$ minor is also a difference.`,
      fallback: { kind: "ext", topic: "2 × 2 and 3 × 3 determinants" },
    },
    {
      id: "C05-M4",
      mistake: t`Expands a $3 \times 3$ determinant along row 1 with signs $+ + +$`,
      remediation: t`Along row 1 the signs are $+ - +$: $|A| = a_{11}M_{11} - a_{12}M_{12} + a_{13}M_{13}$.`,
      fallback: { kind: "ext", topic: "expanding a 3 × 3 determinant" },
    },
    {
      id: "C05-M5",
      mistake: t`Keeps only the positive root of $|A| = 0$`,
      remediation: t`$|A| = 0$ can have more than one root: $\lambda^2 = 1$ gives $\lambda = 1$ and $\lambda = -1$, and $A^{-1}$ fails at each.`,
      fallback: { kind: "ext", topic: "solving quadratic equations" },
    },
  ],
  engineNotes: [
    "C05-M2 applies only to 'values' items with the unknown on the diagonal; C05-M5 only where |A| = 0 has two or more roots; C05-M4 only to 3 x 3 matrices.",
    "C05-M3 gives the key for triangular matrices (the off-diagonal products vanish) and C05-M4 gives it when a12 or M12 is 0, so diagnosing items need both nonzero.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc I (6)" },
      stem: t`If $A = \begin{bmatrix} \lambda & 1 \\ -1 & -\lambda \end{bmatrix}$, then $A^{-1}$ does not exist if:`,
      verify: { kind: "value", inputs: { A: "Matrix([[k, 1], [-1, -k]])" }, params: { ask: "values", var: "k" } },
      options: [
        { key: "A", text: t`$\lambda = 1$ only`, correct: false, misconceptionId: "C05-M5", value: "{1}" },
        { key: "B", text: t`$\lambda = \pm 1$`, correct: true, value: "{-1, 1}" },
        { key: "C", text: t`$\lambda$ is any real number except $\pm 1$`, correct: false, misconceptionId: "C05-M1", value: "Union(Interval.open(-oo, -1), Interval.open(-1, 1), Interval.open(1, oo))" },
        { key: "D", text: t`$\lambda = 0$`, correct: false, misconceptionId: "C05-M2", value: "{0}" },
      ],
      solution: {
        steps: [
          t`$|A| = \lambda(-\lambda) - (1)(-1) = 1 - \lambda^2$.`,
          t`$A^{-1}$ does not exist exactly when $1 - \lambda^2 = 0$.`,
          t`$\lambda^2 = 1$ gives both roots: $\lambda = 1$ and $\lambda = -1$, so $\lambda = \pm 1$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.3 iv)" },
      stem: t`For which real $k$ does $A = \begin{bmatrix} 2 & 3 \\ 10 & k \end{bmatrix}$ have no inverse?`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 3], [10, k]])" }, params: { ask: "values", var: "k" } },
      options: [
        { key: "A", text: t`Every real $k$ except $15$`, correct: false, misconceptionId: "C05-M1", value: "Union(Interval.open(-oo, 15), Interval.open(15, oo))" },
        { key: "B", text: t`$k = 0$`, correct: false, misconceptionId: "C05-M2", value: "{0}" },
        { key: "C", text: t`$k = -15$`, correct: false, misconceptionId: "C05-M3", value: "{-15}" },
        { key: "D", text: t`$k = 15$`, correct: true, value: "{15}" },
      ],
      solution: {
        steps: [
          t`$|A| = 2k - 3 \cdot 10 = 2k - 30$.`,
          t`$A$ has no inverse exactly when $2k - 30 = 0$.`,
          t`So $k = 15$; for every other $k$ the inverse exists.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.3 vii)" },
      stem: t`Is $A = \begin{bmatrix} 3 & 4 & 3 \\ 1 & 1 & 0 \\ 1 & 4 & 5 \end{bmatrix}$ invertible?`,
      verify: { kind: "value", inputs: { A: "Matrix([[3, 4, 3], [1, 1, 0], [1, 4, 5]])" }, params: { ask: "verdict" } },
      options: [
        { key: "A", text: t`$|A| = 4$, so $A^{-1}$ exists`, correct: true, value: "(4, exists)" },
        { key: "B", text: t`$|A| = 4$, so $A^{-1}$ does not exist`, correct: false, misconceptionId: "C05-M1", value: "(4, none)" },
        { key: "C", text: t`$|A| = 50$, so $A^{-1}$ exists`, correct: false, misconceptionId: "C05-M3", value: "(50, exists)" },
        { key: "D", text: t`$|A| = 44$, so $A^{-1}$ exists`, correct: false, misconceptionId: "C05-M4", value: "(44, exists)" },
      ],
      solution: {
        steps: [
          t`Expand along row 1 with signs $+ - +$:`,
          t`$|A| = 3(5 - 0) - 4(5 - 0) + 3(4 - 1)$ $= 15 - 20 + 9 = 4$.`,
          t`$|A| = 4 \ne 0$, so $A$ is non-singular and $A^{-1}$ exists.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.3 viii)" },
      stem: t`Is $A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & -1 & 3 \\ 1 & 2 & 3 \end{bmatrix}$ invertible?`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 3], [2, -1, 3], [1, 2, 3]])" }, params: { ask: "verdict" } },
      options: [
        { key: "A", text: t`$|A| = 30$, so $A^{-1}$ exists`, correct: false, misconceptionId: "C05-M3", value: "(30, exists)" },
        { key: "B", text: t`$|A| = 12$, so $A^{-1}$ exists`, correct: false, misconceptionId: "C05-M4", value: "(12, exists)" },
        { key: "C", text: t`$|A| = 0$, so $A^{-1}$ does not exist`, correct: true, value: "(0, none)" },
        { key: "D", text: t`$|A| = 0$, so $A^{-1}$ exists`, correct: false, misconceptionId: "C05-M1", value: "(0, exists)" },
      ],
      solution: {
        steps: [
          t`Rows 1 and 3 are equal, so $|A| = 0$.`,
          t`Check by expanding: $1(-3 - 6) - 2(6 - 3) + 3(4 + 1)$ $= -9 - 6 + 15 = 0$.`,
          t`$|A| = 0$, so $A$ is singular and $A^{-1}$ does not exist.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/2.2 Solved Ex.1" },
      stem: t`Is $C = \begin{bmatrix} 1 & 3 & 2 \\ 3 & 1 & 2 \\ 1 & 2 & 3 \end{bmatrix}$ invertible?`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 3, 2], [3, 1, 2], [1, 2, 3]])" }, params: { ask: "verdict" } },
      options: [
        { key: "A", text: t`$|C| = -12$, so $C^{-1}$ exists`, correct: true, value: "(-12, exists)" },
        { key: "B", text: t`$|C| = -12$, so $C^{-1}$ does not exist`, correct: false, misconceptionId: "C05-M1", value: "(-12, none)" },
        { key: "C", text: t`$|C| = 54$, so $C^{-1}$ exists`, correct: false, misconceptionId: "C05-M3", value: "(54, exists)" },
        { key: "D", text: t`$|C| = 30$, so $C^{-1}$ exists`, correct: false, misconceptionId: "C05-M4", value: "(30, exists)" },
      ],
      solution: {
        steps: [
          t`Expand along row 1 with signs $+ - +$:`,
          t`$|C| = 1(3 - 4) - 3(9 - 2) + 2(6 - 1)$ $= -1 - 21 + 10 = -12$.`,
          t`$|C| = -12 \ne 0$, so $C$ is non-singular and $C^{-1}$ exists.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/matrices-12/Misc 2A Q.3 ix)" },
      stem: t`For which value of $k$ is $A = \begin{bmatrix} 1 & 2 & 3 \\ 3 & 4 & 5 \\ 4 & 6 & k \end{bmatrix}$ singular?`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 2, 3], [3, 4, 5], [4, 6, k]])" }, params: { ask: "values", var: "k" } },
      options: [
        { key: "A", text: t`$k = 8$`, correct: true, value: "{8}" },
        { key: "B", text: t`$k = 0$`, correct: false, misconceptionId: "C05-M2", value: "{0}" },
        { key: "C", text: t`$k = -\frac{86}{5}$`, correct: false, misconceptionId: "C05-M3", value: "{-86/5}" },
        { key: "D", text: t`$k = \frac{32}{5}$`, correct: false, misconceptionId: "C05-M4", value: "{32/5}" },
      ],
      solution: {
        steps: [
          t`$|A| = 1(4k - 30) - 2(3k - 20) + 3(18 - 16)$.`,
          t`$= 4k - 30 - 6k + 40 + 6 = 16 - 2k$.`,
          t`$A$ is singular exactly when $16 - 2k = 0$, so $k = 8$.`,
        ],
      },
    },
  ],
};
