import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`$\begin{vmatrix} 7 & 9 \\ -4 & 3 \end{vmatrix}$ is a single number. **Is it $21 - 36 = -15$?**`,
    reveal: t`No. A $2 \times 2$ determinant is $ad - bc$: $7 \times 3 - 9 \times (-4) = 21 - (-36) = 21 + 36 = 57$. The product $bc$ is negative here, and subtracting a negative adds it.`,
  },
  explanation: {
    intuition: t`A determinant turns a square array of numbers into one number. For a $2 \times 2$, cross-multiply: the leading diagonal's product minus the other diagonal's. A $3 \times 3$ is broken into $2 \times 2$s: take each entry of the top row, cross out its row and column, and multiply the entry by the $2 \times 2$ that is left. Add these three terms with the signs $+ - +$.`,
    formal: t`**$2 \times 2$**

$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

**$3 \times 3$: expand along the first row**

$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = a_1\begin{vmatrix} b_2 & c_2 \\ b_3 & c_3 \end{vmatrix} - b_1\begin{vmatrix} a_2 & c_2 \\ a_3 & c_3 \end{vmatrix} + c_1\begin{vmatrix} a_2 & b_2 \\ a_3 & b_3 \end{vmatrix}$$

**The signs alternate.** The middle term is always subtracted. If $b_1$ is negative, $-b_1$ makes that term added.

**No diagonal shortcut.** $ad - bc$ is only for a $2 \times 2$. A $3 \times 3$ always goes through the three $2 \times 2$s.

**Finding $x$.** If the determinant equals a value, expand it, set the result equal to that value, and solve the equation in $x$.`,
    worked: {
      prompt: t`Evaluate $\begin{vmatrix} 3 & -4 & 5 \\ 1 & 1 & -2 \\ 2 & 3 & -1 \end{vmatrix}$.`,
      steps: [
        t`Expand along the first row with signs $+ - +$: $3\begin{vmatrix} 1 & -2 \\ 3 & -1 \end{vmatrix} - (-4)\begin{vmatrix} 1 & -2 \\ 2 & -1 \end{vmatrix} + 5\begin{vmatrix} 1 & 1 \\ 2 & 3 \end{vmatrix}$.`,
        t`The $2 \times 2$s: $(1)(-1) - (-2)(3) = -1 + 6 = 5$; $(1)(-1) - (-2)(2) = -1 + 4 = 3$; $(1)(3) - (1)(2) = 1$.`,
        t`Put them together: $3 \times 5 + 4 \times 3 + 5 \times 1 = 15 + 12 + 5 = 32$.`,
      ],
      answer: t`The determinant is $32$.`,
    },
    visualSpec: t`Tap an entry of the top row to cross out its row and column; the leftover $2 \times 2$ lights up with its sign from $+ - +$, and the running total builds term by term.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Expanding a $3 \times 3$ with all plus signs instead of $+ - +$`,
      remediation: t`Along the first row the signs alternate: $a_1(\ldots) - b_1(\ldots) + c_1(\ldots)$. The middle term is always subtracted.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Using the $2 \times 2$ diagonal rule on a $3 \times 3$: the leading diagonal's product minus the other diagonal's`,
      remediation: t`The rule $ad - bc$ is only for a $2 \times 2$. Expand a $3 \times 3$ along a row: each entry times the $2 \times 2$ left when its row and column are crossed out, with signs $+ - +$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Subtracting the cross products the wrong way round: $bc - ad$`,
      remediation: t`A $2 \times 2$ is the leading diagonal first: $ad - bc$, top-left times bottom-right minus top-right times bottom-left. The other order flips the sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Adding the two cross products, $ad + bc$: the minus before a product is lost, often when the product is negative`,
      remediation: t`A $2 \times 2$ is $ad - bc$: always subtract the second product. If that product is negative, subtracting it adds: $4 - (-6) = 10$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Taking $i^2 = 1$ when multiplying entries that contain $i$`,
      remediation: t`$i^2 = -1$, so $i \times i = -1$ and $i \times (-i) = 1$. Replace each $i^2$ by $-1$ before you add up.`,
      fallback: { kind: "ext", topic: "powers of i" },
    },
  ],
  engineNotes: [
    "C01-M3 gives exactly the negative of the determinant, so it matches the key whenever the determinant is 0: it can't be caught on a 'find x if the determinant is 0' item.",
    t`C01-M1 matches the key when the middle term of the expansion is 0 (for example $b_1 = 0$), and C01-M4 when every subtracted product is 0.`,
    t`C01-M1 and C01-M2 apply only to a $3 \times 3$; C01-M5 only to entries with $i$.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.1 Q1(ii)" },
      stem: t`Given $i^2 = -1$, the value of $\begin{vmatrix} 2i & 3 \\ 4 & -i \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2*I, 3], [4, -I]])" } },
      options: [
        { key: "A", text: t`$-10$`, correct: true, value: "-10" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C01-M3", value: "10" },
        { key: "C", text: t`$14$`, correct: false, misconceptionId: "C01-M4", value: "14" },
        { key: "D", text: t`$-14$`, correct: false, misconceptionId: "C01-M5", value: "-14" },
      ],
      solution: {
        steps: [
          t`$ad - bc = (2i)(-i) - (3)(4) = -2i^2 - 12$.`,
          t`With $i^2 = -1$: $-2i^2 = 2$, so the value is $2 - 12 = -10$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q2" },
      stem: t`The value of $\begin{vmatrix} 1 & -1 & 2 \\ 3 & 2 & -2 \\ 0 & 1 & -2 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2], [3, 2, -2], [0, 1, -2]])" } },
      options: [
        { key: "A", text: t`$-2$`, correct: true, value: "-2" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C01-M1", value: "10" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C01-M2", value: "-4" },
        { key: "D", text: t`$-6$`, correct: false, misconceptionId: "C01-M4", value: "-6" },
      ],
      solution: {
        steps: [
          t`Expand along the first row with signs $+ - +$: $1\begin{vmatrix} 2 & -2 \\ 1 & -2 \end{vmatrix} - (-1)\begin{vmatrix} 3 & -2 \\ 0 & -2 \end{vmatrix} + 2\begin{vmatrix} 3 & 2 \\ 0 & 1 \end{vmatrix}$.`,
          t`The $2 \times 2$s: $-4 - (-2) = -2$; $-6 - 0 = -6$; $3 - 0 = 3$.`,
          t`$1(-2) + 1(-6) + 2(3) = -2 - 6 + 6 = -2$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q1(i)" },
      stem: t`The value of $\begin{vmatrix} 2 & -5 & 7 \\ 5 & 2 & 1 \\ 9 & 0 & 2 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -5, 7], [5, 2, 1], [9, 0, 2]])" } },
      options: [
        { key: "A", text: t`$-118$`, correct: false, misconceptionId: "C01-M2", value: "-118" },
        { key: "B", text: t`$113$`, correct: false, misconceptionId: "C01-M3", value: "113" },
        { key: "C", text: t`$-113$`, correct: true, value: "-113" },
        { key: "D", text: t`$-123$`, correct: false, misconceptionId: "C01-M1", value: "-123" },
      ],
      solution: {
        steps: [
          t`Expand along the first row with signs $+ - +$: $2\begin{vmatrix} 2 & 1 \\ 0 & 2 \end{vmatrix} - (-5)\begin{vmatrix} 5 & 1 \\ 9 & 2 \end{vmatrix} + 7\begin{vmatrix} 5 & 2 \\ 9 & 0 \end{vmatrix}$.`,
          t`The $2 \times 2$s: $4 - 0 = 4$; $10 - 9 = 1$; $0 - 18 = -18$.`,
          t`$2(4) + 5(1) + 7(-18) = 8 + 5 - 126 = -113$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q1(ii)" },
      stem: t`The value of $\begin{vmatrix} 1 & -3 & 12 \\ 0 & 2 & -4 \\ 9 & 7 & 2 \end{vmatrix}$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -3, 12], [0, 2, -4], [9, 7, 2]])" } },
      options: [
        { key: "A", text: t`$-76$`, correct: true, value: "-76" },
        { key: "B", text: t`$-292$`, correct: false, misconceptionId: "C01-M1", value: "-292" },
        { key: "C", text: t`$-212$`, correct: false, misconceptionId: "C01-M2", value: "-212" },
        { key: "D", text: t`$84$`, correct: false, misconceptionId: "C01-M4", value: "84" },
      ],
      solution: {
        steps: [
          t`Expand along the first row with signs $+ - +$: $1\begin{vmatrix} 2 & -4 \\ 7 & 2 \end{vmatrix} - (-3)\begin{vmatrix} 0 & -4 \\ 9 & 2 \end{vmatrix} + 12\begin{vmatrix} 0 & 2 \\ 9 & 7 \end{vmatrix}$.`,
          t`The $2 \times 2$s: $4 - (-28) = 32$; $0 - (-36) = 36$; $0 - 18 = -18$.`,
          t`$1(32) + 3(36) + 12(-18) = 32 + 108 - 216 = -76$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.1 Q2(ii)" },
      stem: t`Find $x$ if $\begin{vmatrix} x & -1 & 2 \\ 2x & 1 & -3 \\ 3 & -4 & 5 \end{vmatrix} = 29$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[x, -1, 2], [2*x, 1, -3], [3, -4, 5]])", k: "29" }, params: { ask: "x" } },
      options: [
        { key: "A", text: t`$x = -2$`, correct: true, value: "{-2}" },
        { key: "B", text: t`$x = -\frac{4}{3}$`, correct: false, misconceptionId: "C01-M1", value: "{-4/3}" },
        { key: "C", text: t`$x = 7$`, correct: false, misconceptionId: "C01-M2", value: "{7}" },
        { key: "D", text: t`$x = \frac{32}{13}$`, correct: false, misconceptionId: "C01-M3", value: "{32/13}" },
      ],
      solution: {
        steps: [
          t`Expand along the first row: $x(5 - 12) - (-1)(10x + 9) + 2(-8x - 3)$.`,
          t`$= -7x + 10x + 9 - 16x - 6 = -13x + 3$.`,
          t`$-13x + 3 = 29$ gives $-13x = 26$, so $x = -2$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.1.3 SolvedEx.2(ii)" },
      stem: t`Find $x$ if $\begin{vmatrix} x & 3 & 2 \\ x & x & 1 \\ 1 & 0 & 1 \end{vmatrix} = 3$.`,
      verify: { kind: "value", inputs: { A: "Matrix([[x, 3, 2], [x, x, 1], [1, 0, 1]])", k: "3" }, params: { ask: "x" } },
      options: [
        { key: "A", text: t`$x = 2$ or $x = 3$`, correct: false, misconceptionId: "C01-M3", value: "{2, 3}" },
        { key: "B", text: t`$x = -2$ or $x = 3$`, correct: false, misconceptionId: "C01-M4", value: "{-2, 3}" },
        { key: "C", text: t`$x = 0$ or $x = 5$`, correct: true, value: "{0, 5}" },
        { key: "D", text: t`$x = -3$ or $x = 2$`, correct: false, misconceptionId: "C01-M1", value: "{-3, 2}" },
      ],
      solution: {
        steps: [
          t`Expand along the first row: $x(x - 0) - 3(x - 1) + 2(0 - x) = x^2 - 3x + 3 - 2x = x^2 - 5x + 3$.`,
          t`$x^2 - 5x + 3 = 3$ gives $x^2 - 5x = 0$, that is $x(x - 5) = 0$.`,
          t`So $x = 0$ or $x = 5$.`,
        ],
      },
    },
  ],
};
