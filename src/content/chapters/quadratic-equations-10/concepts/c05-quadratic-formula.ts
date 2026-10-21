import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`$x^2 + 10x + 2 = 0$ does not factorise, and completing the square takes many steps. **Is there one formula that solves it at once?**`,
    reveal: t`Yes. Here $a = 1$, $b = 10$, $c = 2$, so $b^2 - 4ac = 100 - 8 = 92$. Then $x = \frac{-10 \pm \sqrt{92}}{2}$ $= \frac{-10 \pm 2\sqrt{23}}{2}$ $= -5 \pm \sqrt{23}$.`,
  },
  explanation: {
    intuition: [
      t`Completing the square on $ax^2 + bx + c = 0$ gives one answer for every quadratic equation.`,
      t`That answer is the **quadratic formula**: it gives both roots from $a$, $b$ and $c$.`,
      t`So the method is: read $a$, $b$, $c$, then put them into the formula.`,
      t`The sign $\pm$ means plus or minus: use $+$ for one root and $-$ for the other.`,
      t`The number $b^2 - 4ac$ under the square root is worked out first.`,
      t`Most mistakes come from signs, so keep each sign with its number.`,
    ],
    formal: [
      {
        title: "Read a, b and c",
        points: [
          t`First bring every term to the left: the equation must read $ax^2 + bx + c = 0$.`,
          t`A term that crosses the $=$ sign changes its sign: $4x^2 = 9x + 2$ becomes $4x^2 - 9x - 2 = 0$.`,
          t`Each coefficient keeps its sign: in $2x^2 - 7x - 4 = 0$, $b = -7$ and $c = -4$.`,
          t`No number in front means $1$: in $x^2 + 4x - 1 = 0$, $a = 1$.`,
          t`A missing term means $0$: in $x^2 - 5 = 0$, $b = 0$.`,
          t`If there are fractions, you may multiply every term by their LCM first.`,
        ],
      },
      {
        title: "The formula",
        points: [
          t`For $ax^2 + bx + c = 0$ with $a \neq 0$:`,
          t`$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$`,
          t`The numerator starts with $-b$, the opposite of $b$: if $b = -7$, then $-b = 7$.`,
          t`The whole numerator, $-b$ and the square root together, is divided by $2a$.`,
          t`The denominator is $2a$, not just $2$, unless $a = 1$.`,
        ],
      },
      {
        title: "Work out b² − 4ac carefully",
        points: [
          t`Square $b$ with its sign: $(-7)^2 = 49$, which is positive.`,
          t`With a negative $c$, $-4ac$ is positive: $-4 \times 2 \times (-4) = +32$.`,
          t`So for $2x^2 - 7x - 4 = 0$, $b^2 - 4ac = 49 + 32 = 81$.`,
          t`Then $x = \frac{7 \pm 9}{4}$, so $x = 4$ or $x = -\frac{1}{2}$.`,
          t`If $b^2 - 4ac$ is negative, its square root is not a real number: no real roots.`,
        ],
      },
      {
        title: "Simplify the roots",
        points: [
          t`If $b^2 - 4ac$ is a perfect square, the roots are fractions or whole numbers: write both.`,
          t`Otherwise take square factors out of the root: $\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3}$.`,
          t`Then cancel a factor common to all three numbers: $\frac{6 \pm 4\sqrt{3}}{2} = 3 \pm 2\sqrt{3}$.`,
          t`Leave the answer as $\frac{p \pm q\sqrt{n}}{r}$ in lowest terms.`,
        ],
      },
      {
        title: "The book's flow chart",
        points: [
          t`Box 1: compare the equation with $ax^2 + bx + c = 0$ and write $a$, $b$, $c$.`,
          t`Box 2: find the value of $b^2 - 4ac$.`,
          t`Box 3: write the formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.`,
          t`Box 4: substitute $a$, $b$, $c$ and find the two roots.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $5m^2 - 4m - 2 = 0$ using the formula.`,
      steps: [
        t`Compare with $am^2 + bm + c = 0$: $a = 5$, $b = -4$, $c = -2$.`,
        t`$b^2 - 4ac = (-4)^2 - 4 \times 5 \times (-2)$ $= 16 + 40 = 56$.`,
        t`$m = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ $= \frac{4 \pm \sqrt{56}}{10}$.`,
        t`$\sqrt{56} = \sqrt{4 \times 14} = 2\sqrt{14}$, so $m = \frac{4 \pm 2\sqrt{14}}{10}$.`,
        t`Cancel $2$ from every number: $m = \frac{2 \pm \sqrt{14}}{5}$.`,
      ],
      answer: t`$m = \frac{2 + \sqrt{14}}{5}$ or $m = \frac{2 - \sqrt{14}}{5}$.`,
    },
    visualSpec: t`Drag sliders for $a$, $b$ and $c$ and watch $b^2 - 4ac$ and the two roots $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ update.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Reads $a$, $b$, $c$ as printed, before bringing every term to the left, so a term from the right keeps its sign.`,
      remediation: t`First write the equation as $ax^2 + bx + c = 0$. A term that crosses the $=$ sign changes its sign: $3x^2 + 2x = 1$ gives $c = -1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: t`Starts the numerator with $b$ instead of $-b$.`,
      remediation: t`The formula starts with $-b$, the opposite of $b$: if $b = -3$, the numerator starts with $3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Divides only the square root by $2a$: $-b \pm \frac{\sqrt{b^2 - 4ac}}{2a}$.`,
      remediation: t`The fraction bar is under the whole numerator: both $-b$ and $\sqrt{b^2 - 4ac}$ are divided by $2a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Divides by $2$ instead of $2a$.`,
      remediation: t`The denominator is $2a$: for $a = 3$ it is $6$, not $2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`With a negative $c$, works out $-4ac$ as negative, getting $b^2 - 4a|c|$.`,
      remediation: t`Minus times minus is plus: when $c$ is negative, $-4ac$ is positive, so $b^2 - 4ac$ is **more** than $b^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`With a negative $b$, squares only the number and keeps the minus: $(-3)^2$ becomes $-9$.`,
      remediation: t`Square $b$ with its sign, in brackets: $(-3)^2 = 9$. The square $b^2$ is never negative.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M1 needs an equation not yet in the form $ax^2 + bx + c = 0$. When the right side is a positive number, it gives the same roots as C05-M5, so never list both on such an item.`,
    t`C05-M4 gives the key when $a = 1$; C05-M5 needs $c < 0$ and C05-M6 needs $b < 0$.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q3(B)(ii)" },
      stem: t`Solve $x^2 - 3x - 2 = 0$ by the formula method.`,
      verify: { kind: "value", inputs: { L: "x**2 - 3*x - 2", R: "0" } },
      options: [
        { key: "A", text: t`$x = 2$ or $x = 1$`, correct: false, misconceptionId: "C05-M5", value: "{1, 2}" },
        { key: "B", text: t`$x = \frac{3 \pm \sqrt{17}}{2}$`, correct: true, value: "{3/2 - sqrt(17)/2, 3/2 + sqrt(17)/2}" },
        { key: "C", text: t`$x = \frac{-3 \pm \sqrt{17}}{2}$`, correct: false, misconceptionId: "C05-M2", value: "{-3/2 + sqrt(17)/2, -sqrt(17)/2 - 3/2}" },
        { key: "D", text: t`$x = \frac{6 \pm \sqrt{17}}{2}$`, correct: false, misconceptionId: "C05-M3", value: "{3 - sqrt(17)/2, sqrt(17)/2 + 3}" },
      ],
      solution: {
        steps: [
          t`$a = 1$, $b = -3$, $c = -2$.`,
          t`$b^2 - 4ac = 9 - 4 \times 1 \times (-2)$ $= 9 + 8 = 17$.`,
          t`$x = \frac{-(-3) \pm \sqrt{17}}{2 \times 1} = \frac{3 \pm \sqrt{17}}{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2018/Q3(ii)" },
      stem: t`Solve $3x^2 + 2x = 1$ by the formula method.`,
      verify: { kind: "value", inputs: { L: "3*x**2 + 2*x", R: "1" } },
      options: [
        { key: "A", text: t`No real roots`, correct: false, misconceptionId: "C05-M1", value: "EmptySet" },
        { key: "B", text: t`$x = 1$ or $x = - \frac{1}{3}$`, correct: false, misconceptionId: "C05-M2", value: "{-1/3, 1}" },
        { key: "C", text: t`$x = 1$ or $x = -3$`, correct: false, misconceptionId: "C05-M4", value: "{-3, 1}" },
        { key: "D", text: t`$x = \frac{1}{3}$ or $x = -1$`, correct: true, value: "{-1, 1/3}" },
      ],
      solution: {
        steps: [
          t`Bring $1$ to the left: $3x^2 + 2x - 1 = 0$, so $a = 3$, $b = 2$, $c = -1$.`,
          t`$b^2 - 4ac = 4 - 4 \times 3 \times (-1)$ $= 4 + 12 = 16$.`,
          t`$x = \frac{-2 \pm 4}{6}$: $x = \frac{2}{6} = \frac{1}{3}$ or $x = \frac{-6}{6} = -1$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q3(B)(i)" },
      stem: t`Solve $3m^2 - m - 10 = 0$ by the formula method.`,
      verify: { kind: "value", inputs: { L: "3*m**2 - m - 10", R: "0" } },
      options: [
        { key: "A", text: t`$m = 2$ or $m = - \frac{5}{3}$`, correct: true, value: "{-5/3, 2}" },
        { key: "B", text: t`$m = \frac{17}{6}$ or $m = - \frac{5}{6}$`, correct: false, misconceptionId: "C05-M3", value: "{-5/6, 17/6}" },
        { key: "C", text: t`$m = 6$ or $m = -5$`, correct: false, misconceptionId: "C05-M4", value: "{-5, 6}" },
        { key: "D", text: t`$m = \frac{1 \pm \sqrt{119}}{6}$`, correct: false, misconceptionId: "C05-M6", value: "{1/6 - sqrt(119)/6, 1/6 + sqrt(119)/6}" },
      ],
      solution: {
        steps: [
          t`$a = 3$, $b = -1$, $c = -10$.`,
          t`$b^2 - 4ac = (-1)^2 - 4 \times 3 \times (-10)$ $= 1 + 120 = 121$.`,
          t`$m = \frac{1 \pm 11}{6}$: $m = \frac{12}{6} = 2$ or $m = \frac{-10}{6} = -\frac{5}{3}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2016/Q3(i)" },
      stem: t`Solve $5m^2 + 5m - 1 = 0$ by the formula method.`,
      verify: { kind: "value", inputs: { L: "5*m**2 + 5*m - 1", R: "0" } },
      options: [
        { key: "A", text: t`$m = \frac{-5 \pm 3\sqrt{5}}{2}$`, correct: false, misconceptionId: "C05-M4", value: "{-5/2 + 3*sqrt(5)/2, -3*sqrt(5)/2 - 5/2}" },
        { key: "B", text: t`$m = \frac{-5 \pm \sqrt{5}}{10}$`, correct: false, misconceptionId: "C05-M5", value: "{-1/2 - sqrt(5)/10, -1/2 + sqrt(5)/10}" },
        { key: "C", text: t`$m = \frac{-5 \pm 3\sqrt{5}}{10}$`, correct: true, value: "{-1/2 + 3*sqrt(5)/10, -3*sqrt(5)/10 - 1/2}" },
        { key: "D", text: t`$m = \frac{5 \pm 3\sqrt{5}}{10}$`, correct: false, misconceptionId: "C05-M2", value: "{1/2 - 3*sqrt(5)/10, 1/2 + 3*sqrt(5)/10}" },
      ],
      solution: {
        steps: [
          t`$a = 5$, $b = 5$, $c = -1$.`,
          t`$b^2 - 4ac = 25 - 4 \times 5 \times (-1)$ $= 25 + 20 = 45$.`,
          t`$\sqrt{45} = \sqrt{9 \times 5} = 3\sqrt{5}$.`,
          t`$m = \frac{-5 \pm 3\sqrt{5}}{2 \times 5} = \frac{-5 \pm 3\sqrt{5}}{10}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.7 (1)" },
      stem: t`Solving $\frac{1}{x + 5} = \frac{1}{x^2}$, cross-multiplying gives $x^2 = x + 5$. Solve this by the formula.`,
      verify: { kind: "value", inputs: { L: "x**2", R: "x + 5" } },
      options: [
        { key: "A", text: t`$x = \frac{1 \pm \sqrt{21}}{2}$`, correct: true, value: "{1/2 - sqrt(21)/2, 1/2 + sqrt(21)/2}" },
        { key: "B", text: t`No real roots`, correct: false, misconceptionId: "C05-M1", value: "EmptySet" },
        { key: "C", text: t`$x = \frac{-1 \pm \sqrt{21}}{2}$`, correct: false, misconceptionId: "C05-M2", value: "{-1/2 + sqrt(21)/2, -sqrt(21)/2 - 1/2}" },
        { key: "D", text: t`$x = \frac{1 \pm \sqrt{19}}{2}$`, correct: false, misconceptionId: "C05-M6", value: "{1/2 - sqrt(19)/2, 1/2 + sqrt(19)/2}" },
      ],
      solution: {
        steps: [
          t`Bring every term to the left: $x^2 - x - 5 = 0$, so $a = 1$, $b = -1$, $c = -5$.`,
          t`$b^2 - 4ac = 1 - 4 \times 1 \times (-5)$ $= 1 + 20 = 21$.`,
          t`$x = \frac{1 \pm \sqrt{21}}{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.4 Q.3" },
      stem: t`Complete the flow chart for $3x^2 - 4\sqrt{3}x + 4 = 0$. Compare with $ax^2 + bx + c = 0$: $a = 3$, $b = -4\sqrt{3}$, $c = 4$. Then $b^2 - 4ac = 48 - 48 = 0$. Substitute in the formula: what are the roots?`,
      verify: { kind: "value", inputs: { L: "3*x**2 - 4*sqrt(3)*x + 4", R: "0" } },
      options: [
        { key: "A", text: t`$x = \frac{2 \sqrt{3}}{3}$, both roots`, correct: true, value: "{2*sqrt(3)/3}" },
        { key: "B", text: t`$x = - \frac{2 \sqrt{3}}{3}$, both roots`, correct: false, misconceptionId: "C05-M2", value: "{-2*sqrt(3)/3}" },
        { key: "C", text: t`$x = 4 \sqrt{3}$, both roots`, correct: false, misconceptionId: "C05-M3", value: "{4*sqrt(3)}" },
        { key: "D", text: t`$x = 2 \sqrt{3}$, both roots`, correct: false, misconceptionId: "C05-M4", value: "{2*sqrt(3)}" },
      ],
      solution: {
        steps: [
          t`$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ $= \frac{4\sqrt{3} \pm \sqrt{0}}{2 \times 3}$.`,
          t`$x = \frac{4\sqrt{3}}{6} = \frac{2\sqrt{3}}{3}$.`,
          t`$\sqrt{0} = 0$, so both roots are $\frac{2\sqrt{3}}{3}$.`,
        ],
      },
    },
  ],
};
