import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`$A = \begin{bmatrix} \cos 1^\circ & -\sin 1^\circ \\ \sin 1^\circ & \cos 1^\circ \end{bmatrix}$. Multiplying $A$ by itself $360$ times, row by column, would take all day. **What is $A^{360}$?**`,
    reveal: t`$I$, the identity matrix. $A$ turns the plane through $1^\circ$, and each extra factor of $A$ turns it $1^\circ$ more. So $A^{360}$ turns it through $360^\circ$, a full turn, and every point ends where it began: $A^{360} = I$, with no multiplying at all.`,
  },
  explanation: {
    intuition: [
      t`Recall: $I$ is the identity matrix, and $O$ is the zero matrix, with every entry $0$.`,
      t`Some square matrices obey one short equation, and that equation gives them a name.`,
      t`**Idempotent** means $A^2 = A$, **involutory** means $A^2 = I$, and **nilpotent** means some power $A^k = O$.`,
      t`**Orthogonal** means $AA^T = I$: the transpose undoes the matrix.`,
      t`The equation does the work: high powers and inverses come out without long multiplication.`,
      t`A **rotation matrix** turns the plane about the origin; it is orthogonal, and multiplying two adds their angles.`,
    ],
    formal: [
      {
        title: "Orthogonal matrices",
        points: [
          t`A square matrix $B$ is the **inverse** of $A$ if $AB = BA = I$; it is written $A^{-1}$.`,
          t`A square matrix $A$ is **orthogonal** if $AA^T = A^TA = I$.`,
          t`So an orthogonal matrix has $A^{-1} = A^T$: its transpose is its inverse.`,
          t`Two facts about determinants: $|AB| = |A|\,|B|$ and $|A^T| = |A|$.`,
          t`So $|A|^2 = |AA^T| = |I| = 1$, which gives $|A| = 1$ or $|A| = -1$.`,
          t`$A^T$ is $A$ itself only when $A$ is symmetric, so an orthogonal matrix is usually not its own inverse.`,
        ],
      },
      {
        title: "Rotation matrices",
        points: [
          t`The **rotation matrix** of angle $\theta$ is $R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$.`,
          t`Multiplying a point $(x, y)$, written as a column, by $R(\theta)$ turns it through $\theta$ about the origin.`,
          t`Row by column, the formulas for $\cos(\alpha + \beta)$ and $\sin(\alpha + \beta)$ give $R(\alpha)R(\beta) = R(\alpha + \beta)$.`,
          t`So a power multiplies the angle: $R(\theta)^n = R(n\theta)$.`,
          t`$|R(\theta)| = \cos^2\theta + \sin^2\theta = 1$, and $R(\theta)^T = R(-\theta)$ undoes $R(\theta)$: it is orthogonal.`,
          t`The form with $\sin\theta$ on top and $-\sin\theta$ below is $R(-\theta)$; its powers multiply the angle too.`,
        ],
      },
      {
        title: "Back to the identity",
        points: [
          t`$R(\varphi) = I$ needs $\cos\varphi = 1$ and $\sin\varphi = 0$: $\varphi$ must be a multiple of $2\pi$.`,
          t`A half-turn is not enough: $\cos\pi = -1$, so $R(\pi) = -I$.`,
          t`So $R(\theta)^n = I$ exactly when $n\theta$ is a multiple of $2\pi$, a whole number of full turns.`,
          t`For $\theta = \frac{2\pi}{5}$, the least such $n$ is $5$: $R\left(\frac{2\pi}{5}\right)^5 = R(2\pi) = I$.`,
        ],
      },
      {
        title: "Idempotent and involutory",
        points: [
          t`A square matrix $A$ is **idempotent** if $A^2 = A$: squaring changes nothing.`,
          t`Then $A^3 = A^2A = AA = A$, and so on: $A^n = A$ for every $n \ge 1$.`,
          t`$A$ is **involutory** if $A^2 = I$: it is its own inverse, $A^{-1} = A$.`,
          t`Its powers alternate: even powers are $I$ and odd powers are $A$, so $A^5 = (A^2)^2A = A$.`,
          t`For example, $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$ is idempotent and $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ is involutory.`,
          t`Keep them apart: idempotent squares to **itself**, involutory squares to $I$.`,
        ],
      },
      {
        title: "Nilpotent matrices",
        points: [
          t`A square matrix $A$ is **nilpotent** if some power of it is the zero matrix: $A^k = O$.`,
          t`The least such $k$ is its **index**.`,
          t`For $A = \begin{bmatrix} 0 & 3 \\ 0 & 0 \end{bmatrix}$, row by column gives $A^2 = O$, so its index is $2$.`,
          t`A nilpotent matrix is singular: $|A|^k = |A^k| = |O| = 0$, so $|A| = 0$.`,
          t`Nilpotent of index $2$ means $A^2 = O$; idempotent means $A^2 = A$. They are different rules.`,
        ],
      },
      {
        title: "Powers of I + A",
        points: [
          t`$I$ and $A$ commute, $IA = AI = A$, so $(I + A)^n$ expands just like $(1 + a)^n$.`,
          t`So $(I + A)^2 = I + 2A + A^2$, middle term included.`,
          t`Then replace $A^2$ by $A$, $I$ or $O$, as the matrix's type says.`,
          t`Idempotent gives $(I + A)^2 = I + 3A$; involutory gives $(I + A)^2 = 2I + 2A$.`,
          t`For idempotent $A$, $(I - A)^2 = I - 2A + A$ $= I - A$: so $I - A$ is idempotent too.`,
          t`For nilpotent $A$ of index $2$, $(I - A)(I + A)$ $= I - A^2 = I$: so $(I - A)^{-1} = I + A$.`,
        ],
      },
      {
        title: "Skew-symmetric and diagonal shortcuts",
        points: [
          t`Recall: $A$ is skew-symmetric when $A^T = -A$, and $|kA| = k^n|A|$ for order $n$.`,
          t`So $|A| = |A^T| = |-A| = (-1)^n|A|$.`,
          t`When $n$ is odd this says $|A| = -|A|$, which forces $|A| = 0$.`,
          t`So a skew-symmetric matrix of odd order is always singular; one of even order need not be.`,
          t`A diagonal matrix's power raises each diagonal entry: $\begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}^n = \begin{bmatrix} 2^n & 0 \\ 0 & 3^n \end{bmatrix}$.`,
          t`That entry-by-entry shortcut works for diagonal matrices only, not for others.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the least positive integer $n$ for which $A^n = I$, where $A = \begin{bmatrix} \frac{\sqrt{3}}{2} & -\frac{1}{2} \\ \frac{1}{2} & \frac{\sqrt{3}}{2} \end{bmatrix}$.`,
      steps: [
        t`$\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$ and $\sin\frac{\pi}{6} = \frac{1}{2}$, so $A = R\left(\frac{\pi}{6}\right)$, a rotation matrix.`,
        t`A power multiplies the angle: $A^n = R\left(\frac{n\pi}{6}\right)$.`,
        t`This is $I$ only when $\frac{n\pi}{6}$ is a multiple of $2\pi$. A half-turn is not enough: $A^6 = R(\pi) = -I$.`,
        t`The least $n$ with $\frac{n\pi}{6} = 2\pi$ is $n = 12$.`,
      ],
      answer: t`$n = 12$: $A^{12} = R(2\pi) = I$, while $A^6 = -I$.`,
    },
    visualSpec: t`Drag a slider to set $\theta$ and press multiply: the matrix $R(\theta)^n$ turns a point by $\theta$ each time, showing $-I$ at a half-turn and $I$ at a full turn.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Multiplies matching entries, so a power of a matrix raises each entry to that power",
      remediation: t`$A^n$ means $A$ multiplied by itself $n$ times, row by column. Raising each entry to the power works only for a diagonal matrix; for a rotation, $R(\theta)^n = R(n\theta)$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C13-M2",
      mistake: t`Mixes up idempotent and involutory: uses $A^2 = I$ for an idempotent matrix, or $A^2 = A$ for an involutory one`,
      remediation: t`Idempotent means $A^2 = A$: squaring gives the matrix itself. Involutory means $A^2 = I$: the matrix is its own inverse.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M3",
      mistake: t`Takes an orthogonal matrix to be its own inverse, $A^{-1} = A$, so $A^2 = I$ and every power is $I$ or $A$`,
      remediation: t`Orthogonal means $A^{-1} = A^T$, the transpose, not $A$. A rotation has $R(\theta)^n = R(n\theta)$, which is $I$ only when $n\theta$ is a multiple of $2\pi$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C13-M4",
      mistake: t`Thinks a half-turn brings a rotation back to $I$, as if $R(\pi) = I$`,
      remediation: t`$\cos\pi = -1$ and $\sin\pi = 0$, so $R(\pi) = -I$. A rotation matrix is $I$ only when its angle is a multiple of $2\pi$, a full turn.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M5",
      mistake: t`Drops the middle terms of the binomial: writes $(I + cA)^n$ as $I + c^nA^n$`,
      remediation: t`$I$ and $A$ commute, so $(I + A)^n$ expands like $(1 + a)^n$, middle terms included: $(I + A)^2 = I + 2A + A^2$. Then simplify each power of $A$ by its type.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C13-M6",
      mistake: t`Mixes up idempotent and nilpotent: uses $A^2 = O$ for an idempotent matrix, or $A^2 = A$ for a nilpotent one`,
      remediation: t`Idempotent means $A^2 = A$. Nilpotent means some power of $A$ is $O$: for index $2$, $A^2 = O$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C13-M1 gives the key on a diagonal matrix, where raising each entry to the power is right; its items use rotation matrices or a non-diagonal I + cA.",
    t`C13-M3 gives the key when a rotation's power is $I$ (even $n$) or $A$ itself (odd $n$); C13-M4 gives the key unless $n\theta$ lands in the second half of a turn, between $\pi$ and $2\pi$.`,
    t`C13-M5 gives the key on $(I - A)^n$ with $A$ idempotent and $n$ odd, since $I - A$ is idempotent too; its items use $I + cA$ with other $c$ or even $n$.`,
    "C13-M2 applies only to idempotent and involutory matrices, and C13-M6 only to idempotent and nilpotent ones.",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q26" },
      stem: t`If $A = \begin{bmatrix} \cos\frac{\pi}{3} & -\sin\frac{\pi}{3} \\ \sin\frac{\pi}{3} & \cos\frac{\pi}{3} \end{bmatrix}$, then $A^3 =$`,
      verify: { kind: "value", inputs: { theta: "pi/3", n: "3" }, params: { ask: "rot", form: "std" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}-1 & 0\\0 & -1\end{matrix}\right]$`, correct: true, value: "Matrix([[-1, 0], [0, -1]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{1}{8} & - \frac{3 \sqrt{3}}{8}\\\frac{3 \sqrt{3}}{8} & \frac{1}{8}\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M1", value: "Matrix([[1/8, -3*sqrt(3)/8], [3*sqrt(3)/8, 1/8]])" },
        { key: "C", text: t`$\left[\begin{matrix}\frac{1}{2} & - \frac{\sqrt{3}}{2}\\\frac{\sqrt{3}}{2} & \frac{1}{2}\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M3", value: "Matrix([[1/2, -sqrt(3)/2], [sqrt(3)/2, 1/2]])" },
        { key: "D", text: t`$\left[\begin{matrix}1 & 0\\0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M4", value: "Matrix([[1, 0], [0, 1]])" },
      ],
      solution: {
        steps: [
          t`$A = R\left(\frac{\pi}{3}\right)$, a rotation matrix, and a power multiplies the angle: $A^3 = R(\pi)$.`,
          t`$\cos\pi = -1$ and $\sin\pi = 0$, so $R(\pi) = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$.`,
          t`A half-turn gives $-I$, not $I$: $A^3 = -I$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Apr Q30" },
      stem: t`If $A = \begin{bmatrix} \cos\frac{\pi}{4} & \sin\frac{\pi}{4} \\ -\sin\frac{\pi}{4} & \cos\frac{\pi}{4} \end{bmatrix}$, then $A^6 =$`,
      verify: { kind: "value", inputs: { theta: "pi/4", n: "6" }, params: { ask: "rot", form: "cw" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}0 & -1\\1 & 0\end{matrix}\right]$`, correct: true, value: "Matrix([[0, -1], [1, 0]])" },
        { key: "B", text: t`$\left[\begin{matrix}\frac{1}{8} & \frac{1}{8}\\\frac{1}{8} & \frac{1}{8}\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M1", value: "Matrix([[1/8, 1/8], [1/8, 1/8]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & 0\\0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M3", value: "Matrix([[1, 0], [0, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}0 & 1\\-1 & 0\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M4", value: "Matrix([[0, 1], [-1, 0]])" },
      ],
      solution: {
        steps: [
          t`With $\sin$ on top and $-\sin$ below, $A = R\left(-\frac{\pi}{4}\right)$, and its powers keep that form with the angle multiplied.`,
          t`So $A^6$ has angle $6 \cdot \frac{\pi}{4} = \frac{3\pi}{2}$, where $\cos\frac{3\pi}{2} = 0$ and $\sin\frac{3\pi}{2} = -1$.`,
          t`$A^6 = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$, a three-quarter turn: not $I$, as $\frac{3\pi}{2}$ is not a multiple of $2\pi$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q12" },
      stem: t`If $A$ is an idempotent matrix and $I$ is the identity matrix of the same order, then $(I + A)^3 =$`,
      verify: { kind: "value", inputs: { c: "1", n: "3" }, params: { ask: "poly", type: "idem" } },
      options: [
        { key: "A", text: t`$I + 3A$`, correct: false, misconceptionId: "C13-M6", value: "(1, 3)" },
        { key: "B", text: t`$I + 7A$`, correct: true, value: "(1, 7)" },
        { key: "C", text: t`$4I + 4A$`, correct: false, misconceptionId: "C13-M2", value: "(4, 4)" },
        { key: "D", text: t`$I + A$`, correct: false, misconceptionId: "C13-M5", value: "(1, 1)" },
      ],
      solution: {
        steps: [
          t`$I$ and $A$ commute, so $(I + A)^3 = I + 3A + 3A^2 + A^3$.`,
          t`Idempotent: $A^2 = A$, and $A^3 = A^2A = AA = A$.`,
          t`So $(I + A)^3 = I + 3A + 3A + A = I + 7A$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Apr Q9" },
      stem: t`$A = \begin{bmatrix} 2 & -3 \\ 1 & -2 \end{bmatrix}$ is an involutory matrix. Then $(I + A)^4 =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -3], [1, -2]])", c: "1", n: "4" }, params: { ask: "poly", type: "invol" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}81 & 81\\1 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M1", value: "Matrix([[81, 81], [1, 1]])" },
        { key: "B", text: t`$\left[\begin{matrix}31 & -45\\15 & -29\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M2", value: "Matrix([[31, -45], [15, -29]])" },
        { key: "C", text: t`$\left[\begin{matrix}2 & 0\\0 & 2\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M5", value: "Matrix([[2, 0], [0, 2]])" },
        { key: "D", text: t`$\left[\begin{matrix}24 & -24\\8 & -8\end{matrix}\right]$`, correct: true, value: "Matrix([[24, -24], [8, -8]])" },
      ],
      solution: {
        steps: [
          t`Involutory: $A^2 = I$. So $(I + A)^2 = I + 2A + A^2$ $= 2I + 2A = 2(I + A)$.`,
          t`Then $(I + A)^4 = \left(2(I + A)\right)^2$ $= 4(I + A)^2 = 8(I + A)$.`,
          t`$I + A = \begin{bmatrix} 3 & -3 \\ 1 & -1 \end{bmatrix}$, so $(I + A)^4 = \begin{bmatrix} 24 & -24 \\ 8 & -8 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Apr Q9" },
      stem: t`$A = \begin{bmatrix} 2 & -1 \\ 4 & -2 \end{bmatrix}$ is a nilpotent matrix. Then $(I + A)^3 =$`,
      verify: { kind: "value", inputs: { A: "Matrix([[2, -1], [4, -2]])", c: "1", n: "3" }, params: { ask: "poly", type: "nil" } },
      options: [
        { key: "A", text: t`$\left[\begin{matrix}7 & -3\\12 & -5\end{matrix}\right]$`, correct: true, value: "Matrix([[7, -3], [12, -5]])" },
        { key: "B", text: t`$\left[\begin{matrix}27 & -1\\64 & -1\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M1", value: "Matrix([[27, -1], [64, -1]])" },
        { key: "C", text: t`$\left[\begin{matrix}1 & 0\\0 & 1\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M5", value: "Matrix([[1, 0], [0, 1]])" },
        { key: "D", text: t`$\left[\begin{matrix}15 & -7\\28 & -13\end{matrix}\right]$`, correct: false, misconceptionId: "C13-M6", value: "Matrix([[15, -7], [28, -13]])" },
      ],
      solution: {
        steps: [
          t`Row by column, $A^2 = \begin{bmatrix} 4 - 4 & -2 + 2 \\ 8 - 8 & -4 + 4 \end{bmatrix} = O$, so $A^3 = O$ too.`,
          t`$(I + A)^3 = I + 3A + 3A^2 + A^3$ $= I + 3A$.`,
          t`$I + 3A = \begin{bmatrix} 1 + 6 & -3 \\ 12 & 1 - 6 \end{bmatrix}$ $= \begin{bmatrix} 7 & -3 \\ 12 & -5 \end{bmatrix}$.`,
        ],
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q50" },
      stem: t`If $A$ is an idempotent matrix and $I$ is the identity matrix of the same order, then $(I - 2A)^2 =$`,
      verify: { kind: "value", inputs: { c: "-2", n: "2" }, params: { ask: "poly", type: "idem" } },
      options: [
        { key: "A", text: t`$5I - 4A$`, correct: false, misconceptionId: "C13-M2", value: "(5, -4)" },
        { key: "B", text: t`$I + 4A$`, correct: false, misconceptionId: "C13-M5", value: "(1, 4)" },
        { key: "C", text: t`$I - 4A$`, correct: false, misconceptionId: "C13-M6", value: "(1, -4)" },
        { key: "D", text: t`$I$`, correct: true, value: "(1, 0)" },
      ],
      solution: {
        steps: [
          t`$I$ and $A$ commute, so $(I - 2A)^2 = I - 4A + 4A^2$.`,
          t`Idempotent: $A^2 = A$, so this is $I - 4A + 4A = I$.`,
          t`So $(I - 2A)^2 = I$: the matrix $I - 2A$ is involutory.`,
        ],
      },
    },
  ],
};
