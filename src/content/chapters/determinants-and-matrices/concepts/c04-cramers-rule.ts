import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Solve $3x + 2y = 7$ and $5x - 3y = 37$. Elimination works, but **is there a formula for $x$**, the way there is one for the roots of a quadratic?`,
    reveal: t`Yes. Eliminating $y$ from any such pair gives $x$ as a ratio of two determinants. Here $D = \begin{vmatrix} 3 & 2 \\ 5 & -3 \end{vmatrix} = -19$, and putting the constants $7, 37$ in place of the $x$-coefficients gives $D_x = \begin{vmatrix} 7 & 2 \\ 37 & -3 \end{vmatrix} = -95$. So $x = \frac{-95}{-19} = 5$, and in the same way $y = \frac{76}{-19} = -4$.`,
  },
  explanation: {
    intuition: [
      t`A **linear equation** such as $a_1x + b_1y = d_1$ has **coefficients** $a_1$, $b_1$ multiplying the unknowns $x$, $y$, and a **constant** $d_1$.`,
      t`Each linear equation is a straight line; two of them form a **system**, whose **solution** is the point where the lines meet.`,
      t`To **eliminate** $y$, combine the equations so that $y$ cancels: this leaves $(a_1b_2 - a_2b_1)x$ $= d_1b_2 - d_2b_1$.`,
      t`The bracket is $\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}$, the determinant of the coefficients: the **coefficient determinant** $D$.`,
      t`The right side is $D_x = \begin{vmatrix} d_1 & b_1 \\ d_2 & b_2 \end{vmatrix}$: $D$ with the constants in place of the $x$-coefficients.`,
      t`So $x = \frac{D_x}{D}$ when $D \ne 0$: this is **Cramer's rule**, elimination done once for every system, and it works for three unknowns too.`,
    ],
    figure: {
      alt: "Two straight lines, a₁x + b₁y = d₁ falling to the right and a₂x + b₂y = d₂ rising to the right, cross at one point, marked as the solution of the system.",
      axes: "none",
      view: { x: [-0.8, 5], y: [-0.7, 3.5] },
      elements: [
        { kind: "segment", from: [-0.4, 0], to: [4.6, 0], tone: "muted" },
        { kind: "label", at: [4.6, 0], label: "x", labelAt: "s", tone: "muted" },
        { kind: "segment", from: [0, -0.4], to: [0, 3.2], tone: "muted" },
        { kind: "label", at: [0, 3.2], label: "y", labelAt: "e", tone: "muted" },
        { kind: "segment", from: [0.3, 2.35], to: [4.2, 0.4], step: 2 },
        { kind: "label", at: [3.3, 1.05], label: "a₁x + b₁y = d₁", labelAt: "ne", step: 2 },
        { kind: "segment", from: [1.4, 0.2], to: [3.2, 2.9], step: 2 },
        { kind: "label", at: [3.2, 2.9], label: "a₂x + b₂y = d₂", labelAt: "e", step: 2 },
        { kind: "point", at: [2.2, 1.4], label: "solution", labelAt: "w", tone: "good", step: 2 },
      ],
    },
    formal: [
      {
        title: "Standard form",
        points: [
          t`An equation is in **standard form** when it reads $a_ix + b_iy + c_iz = d_i$, where $i$ numbers the equation.`,
          t`The unknowns stand in the order $x, y, z$, and the constant is on the right.`,
          t`A missing unknown gets coefficient $0$, in its own place.`,
          t`So $x + z = 1$ is $1x + 0y + 1z = 1$.`,
          t`A constant on the left moves across with its sign changed.`,
          t`So $ax + by + k = 0$ becomes $ax + by = -k$.`,
        ],
      },
      {
        title: "Four determinants for three unknowns",
        points: [
          t`Recall: $D$ is the determinant of the coefficients; each **row**, read across, is one equation's.`,
          t`$D = \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$.`,
          t`Each **column**, read down, belongs to one unknown: the first column holds the $x$-coefficients.`,
          t`$D_x$ is $D$ with the column of $x$-coefficients replaced by the constants.`,
          t`$D_x = \begin{vmatrix} d_1 & b_1 & c_1 \\ d_2 & b_2 & c_2 \\ d_3 & b_3 & c_3 \end{vmatrix}$.`,
          t`$D_y$ and $D_z$ replace the $y$-column and the $z$-column in the same way.`,
        ],
      },
      {
        title: "Cramer's rule",
        points: [
          t`If $D \ne 0$, the system has exactly one solution.`,
          t`It is $x = \frac{D_x}{D}$, $y = \frac{D_y}{D}$, $z = \frac{D_z}{D}$.`,
          t`$D$ is always the denominator, the same for every unknown.`,
          t`For two unknowns, drop $z$ and use $2 \times 2$ determinants.`,
        ],
      },
      {
        title: "Equations in 1/x, 1/y, 1/z",
        points: [
          t`Some systems have the **reciprocals** $\frac{1}{x}$, $\frac{1}{y}$, $\frac{1}{z}$ where the unknowns should be.`,
          t`Put $p = \frac{1}{x}$, $q = \frac{1}{y}$, $r = \frac{1}{z}$: the equations become linear in $p, q, r$.`,
          t`Solve for $p$, $q$, $r$ by Cramer's rule.`,
          t`Then turn back: $x = \frac{1}{p}$, $y = \frac{1}{q}$, $z = \frac{1}{r}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $x + y + z = 6$, $x - y + z = 2$, $x + 2y - z = 2$ by Cramer's rule.`,
      steps: [
        t`$D = \begin{vmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 2 & -1 \end{vmatrix}$ $= 1(1 - 2) - 1(-1 - 1) + 1(2 + 1)$ $= -1 + 2 + 3 = 4$. Since $D \ne 0$, the rule applies.`,
        t`Put the constants $6, 2, 2$ in the $x$-column: $D_x = \begin{vmatrix} 6 & 1 & 1 \\ 2 & -1 & 1 \\ 2 & 2 & -1 \end{vmatrix}$ $= 6(1 - 2) - 1(-2 - 2) + 1(4 + 2)$ $= -6 + 4 + 6 = 4$.`,
        t`In the $y$-column: $D_y = 1(-2 - 2) - 6(-1 - 1)$ $+ 1(2 - 2)$ $= -4 + 12 + 0 = 8$. In the $z$-column: $D_z = 1(-2 - 4) - 1(2 - 2)$ $+ 6(2 + 1)$ $= -6 + 0 + 18 = 12$.`,
        t`$x = \frac{4}{4} = 1$, $y = \frac{8}{4} = 2$, $z = \frac{12}{4} = 3$. Check in the third equation: $1 + 4 - 3 = 2$.`,
      ],
      answer: t`$x = 1$, $y = 2$, $z = 3$.`,
    },
    visualSpec: t`Drag the column of constants onto the coefficient grid: dropped on the $x$-column it makes $D_x$, on the $y$-column $D_y$, and the ratio to $D$ updates live as each unknown.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Dividing the wrong way: $x = \frac{D}{D_x}$`,
      remediation: t`The coefficient determinant $D$ is always the denominator: $x = \frac{D_x}{D}$. $D$ is the same for every unknown, so it goes below each time.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Writing the constants into a row of D instead of a column",
      remediation: t`$D_x$ replaces the **column** of $x$-coefficients with the constants. Each row still comes from one equation, so the rows keep their other coefficients.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Expanding a 3 × 3 determinant with signs + + + instead of + − +",
      remediation: t`Along the first row the signs are $+ - +$: $a_1(\ldots) - b_1(\ldots) + c_1(\ldots)$. Use them for $D$ and for every one of $D_x$, $D_y$, $D_z$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: t`Taking the constant of $ax + by + k = 0$ as $k$, without moving it to the right`,
      remediation: t`Cramer's rule needs the constants on the right-hand side. $ax + by + k = 0$ becomes $ax + by = -k$, so the constant is $-k$.`,
      fallback: { kind: "ext", topic: "simultaneous linear equations" },
    },
    {
      id: "C04-M5",
      mistake: t`After putting $p = \frac{1}{x}$, reporting $p$ as $x$`,
      remediation: t`Cramer's rule gives $p = \frac{1}{x}$, not $x$. Finish by turning back: $x = \frac{1}{p}$, and the same for $y$ and $z$.`,
      fallback: { kind: "ext", topic: "simultaneous linear equations" },
    },
    {
      id: "C04-M6",
      mistake: "Closing up the coefficients when an unknown is missing, instead of writing 0 in its place",
      remediation: t`A missing unknown has coefficient $0$, and the $0$ keeps its column: $x + z = 1$ is the row $1, 0, 1$, not $1, 1, 0$.`,
      fallback: { kind: "ext", topic: "simultaneous linear equations" },
    },
  ],
  engineNotes: [
    t`On an item with the substitution $p = \frac{1}{x}$ (params.sub = recip), C04-M1 and C04-M5 always give the same answer: never list both there.`,
    "C04-M2 gives the key when the coefficient matrix is symmetric (e.g. x + z = 1, y + z = 1, x + y = 4): draw C04-M2 items from non-symmetric systems.",
    "C04-M3 applies only to three unknowns, C04-M4 only when a stem writes a constant on the left, C04-M5 only to a reciprocal substitution, and C04-M6 only when a missing unknown leaves a gap before another one.",
    "C04-M1 agrees with the key in any unknown equal to 1 or −1; on a one-value item, ask for an unknown whose value is not ±1.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q1(ii)" },
      stem: t`By Cramer's rule, the solution $(x, y, z)$ of $x + y - 2z = -10$, $2x + y - 3z = -19$, $4x + 6y + z = 2$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, 1, -2, 0, -10], [2, 1, -3, 0, -19], [4, 6, 1, 0, 2]])" }, params: { ask: "all" } },
      options: [
        { key: "A", text: t`$(- \frac{92}{11}, \frac{45}{11}, - \frac{27}{11})$`, correct: false, misconceptionId: "C04-M2", value: "(-92/11, 45/11, -27/11)" },
        { key: "B", text: t`$(\frac{29}{17}, - \frac{313}{17}, \frac{116}{17})$`, correct: false, misconceptionId: "C04-M3", value: "(29/17, -313/17, 116/17)" },
        { key: "C", text: t`$(-5, 3, 4)$`, correct: true, value: "(-5, 3, 4)" },
        { key: "D", text: t`$(- \frac{1}{5}, \frac{1}{3}, \frac{1}{4})$`, correct: false, misconceptionId: "C04-M1", value: "(-1/5, 1/3, 1/4)" },
      ],
      solution: {
        steps: [
          t`$D = 1(1 + 18) - 1(2 + 12) - 2(12 - 4) = 19 - 14 - 16 = -11$.`,
          t`Constants $-10, -19, 2$ in the $x$-column: $D_x = -10(19) - 1(-19 + 6) - 2(-114 - 2) = -190 + 13 + 232 = 55$. In the same way $D_y = -33$ and $D_z = -44$.`,
          t`$x = \frac{55}{-11} = -5$, $y = \frac{-33}{-11} = 3$, $z = \frac{-44}{-11} = 4$. So $(x, y, z) = (-5, 3, 4)$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q1(iv)" },
      stem: t`Using Cramer's rule, solve $-\frac{2}{x} - \frac{1}{y} - \frac{3}{z} = 3$, $\frac{2}{x} - \frac{3}{y} + \frac{1}{z} = -13$, $\frac{2}{x} - \frac{3}{z} = -11$. Then $(x, y, z)$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[-2, -1, -3, 0, 3], [2, -3, 1, 0, -13], [2, 0, -3, 0, -11]])" }, params: { ask: "all", sub: "recip" } },
      options: [
        { key: "A", text: t`$(-4, 2, 1)$`, correct: false, misconceptionId: "C04-M5", value: "(-4, 2, 1)" },
        { key: "B", text: t`$(-4, \frac{2}{7}, - \frac{1}{2})$`, correct: false, misconceptionId: "C04-M6", value: "(-4, 2/7, -1/2)" },
        { key: "C", text: t`$(- \frac{7}{19}, \frac{7}{34}, \frac{7}{13})$`, correct: false, misconceptionId: "C04-M3", value: "(-7/19, 7/34, 7/13)" },
        { key: "D", text: t`$(- \frac{1}{4}, \frac{1}{2}, 1)$`, correct: true, value: "(-1/4, 1/2, 1)" },
      ],
      solution: {
        steps: [
          t`Put $p = \frac{1}{x}$, $q = \frac{1}{y}$, $r = \frac{1}{z}$: $-2p - q - 3r = 3$, $2p - 3q + r = -13$, $2p + 0q - 3r = -11$. The missing $q$ gets a $0$ in its own place.`,
          t`$D = -2(9 - 0) - (-1)(-6 - 2) + (-3)(0 + 6) = -18 - 8 - 18 = -44$. Likewise $D_p = 176$, $D_q = -88$, $D_r = -44$.`,
          t`$p = \frac{176}{-44} = -4$, $q = \frac{-88}{-44} = 2$, $r = \frac{-44}{-44} = 1$.`,
          t`Turn back: $x = \frac{1}{p} = -\frac{1}{4}$, $y = \frac{1}{2}$, $z = 1$. So $(x, y, z) = (-\frac{1}{4}, \frac{1}{2}, 1)$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q15" },
      stem: t`The lines $x - y = 6$, $4x - 3y = 20$ and $6x + 5y + 8 = 0$ are concurrent. Solving the first and third equations by Cramer's rule, the point of concurrence is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 0, 6], [6, 5, 8, 0]])" }, params: { ask: "all" } },
      options: [
        { key: "A", text: t`$(\frac{1}{2}, - \frac{1}{4})$`, correct: false, misconceptionId: "C04-M1", value: "(1/2, -1/4)" },
        { key: "B", text: t`$(\frac{78}{11}, - \frac{2}{11})$`, correct: false, misconceptionId: "C04-M2", value: "(78/11, -2/11)" },
        { key: "C", text: t`$(2, -4)$`, correct: true, value: "(2, -4)" },
        { key: "D", text: t`$(\frac{38}{11}, - \frac{28}{11})$`, correct: false, misconceptionId: "C04-M4", value: "(38/11, -28/11)" },
      ],
      solution: {
        steps: [
          t`Standard form: $x - y = 6$ and $6x + 5y = -8$ (the $+8$ moves across as $-8$).`,
          t`$D = \begin{vmatrix} 1 & -1 \\ 6 & 5 \end{vmatrix} = 5 + 6 = 11$, $D_x = \begin{vmatrix} 6 & -1 \\ -8 & 5 \end{vmatrix} = 30 - 8 = 22$, $D_y = \begin{vmatrix} 1 & 6 \\ 6 & -8 \end{vmatrix} = -8 - 36 = -44$.`,
          t`$x = \frac{22}{11} = 2$, $y = \frac{-44}{11} = -4$. It fits the second line too: $4(2) - 3(-4) = 20$. The point is $(2, -4)$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Misc 4A II Q9(iv)" },
      stem: t`By Cramer's rule, for $x - y + 2z = 7$, $3x + 4y - 5z = 5$, $2x - y + 3z = 12$, the value of $z$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[1, -1, 2, 0, 7], [3, 4, -5, 0, 5], [2, -1, 3, 0, 12]])" }, params: { ask: "z" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C04-M1", value: "2" },
        { key: "B", text: t`$\frac{59}{2}$`, correct: false, misconceptionId: "C04-M2", value: "59/2" },
        { key: "C", text: t`$\frac{25}{17}$`, correct: false, misconceptionId: "C04-M3", value: "25/17" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: true, value: "1/2" },
      ],
      solution: {
        steps: [
          t`$D = 1(12 - 5) - (-1)(9 + 10) + 2(-3 - 8) = 7 + 19 - 22 = 4$.`,
          t`Constants $7, 5, 12$ in the $z$-column: $D_z = \begin{vmatrix} 1 & -1 & 7 \\ 3 & 4 & 5 \\ 2 & -1 & 12 \end{vmatrix} = 1(48 + 5) - (-1)(36 - 10) + 7(-3 - 8) = 53 + 26 - 77 = 2$.`,
          t`$z = \frac{D_z}{D} = \frac{2}{4} = \frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/Ex 4.3 Q3(i)" },
      stem: t`Solve $2x - y + 3 = 0$ and $3x + y - 2 = 0$ by Cramer's rule. The value of $y$ is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -1, 3, 0], [3, 1, -2, 0]])" }, params: { ask: "y" } },
      options: [
        { key: "A", text: t`$\frac{1}{5}$`, correct: false, misconceptionId: "C04-M2", value: "1/5" },
        { key: "B", text: t`$\frac{13}{5}$`, correct: true, value: "13/5" },
        { key: "C", text: t`$- \frac{13}{5}$`, correct: false, misconceptionId: "C04-M4", value: "-13/5" },
        { key: "D", text: t`$\frac{5}{13}$`, correct: false, misconceptionId: "C04-M1", value: "5/13" },
      ],
      solution: {
        steps: [
          t`Standard form: $2x - y = -3$ and $3x + y = 2$.`,
          t`$D = \begin{vmatrix} 2 & -1 \\ 3 & 1 \end{vmatrix} = 2 + 3 = 5$ and $D_y = \begin{vmatrix} 2 & -3 \\ 3 & 2 \end{vmatrix} = 4 + 9 = 13$.`,
          t`$y = \frac{D_y}{D} = \frac{13}{5}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/determinants-matrices-11/4.3.1 SolvedEx.4" },
      stem: t`The cost of 2 books, 6 notebooks and 3 pens is Rs 120. The cost of 3 books, 4 notebooks and 2 pens is Rs 105, and the cost of 5 books, 7 notebooks and 4 pens is Rs 183. Using Cramer's rule, the cost of one pen, in rupees, is:`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, 6, 3, 0, 120], [3, 4, 2, 0, 105], [5, 7, 4, 0, 183]])" }, params: { ask: "z" } },
      options: [
        { key: "A", text: t`$6$`, correct: true, value: "6" },
        { key: "B", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C04-M1", value: "1/6" },
        { key: "C", text: t`$261$`, correct: false, misconceptionId: "C04-M2", value: "261" },
        { key: "D", text: t`$\frac{258}{19}$`, correct: false, misconceptionId: "C04-M3", value: "258/19" },
      ],
      solution: {
        steps: [
          t`Let one book, notebook and pen cost Rs $x$, $y$, $z$: $2x + 6y + 3z = 120$, $3x + 4y + 2z = 105$, $5x + 7y + 4z = 183$.`,
          t`$D = 2(16 - 14) - 6(12 - 10) + 3(21 - 20) = 4 - 12 + 3 = -5$.`,
          t`$D_z = \begin{vmatrix} 2 & 6 & 120 \\ 3 & 4 & 105 \\ 5 & 7 & 183 \end{vmatrix} = 2(732 - 735) - 6(549 - 525) + 120(21 - 20) = -6 - 144 + 120 = -30$.`,
          t`$z = \frac{-30}{-5} = 6$: one pen costs Rs $6$.`,
        ],
      },
    },
  ],
};
