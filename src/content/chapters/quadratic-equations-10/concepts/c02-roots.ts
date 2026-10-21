import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Which of $2$ and $-2$ makes $x^2 + x - 6 = 0$ true? **Both? One? Neither?**`,
    reveal: t`Put $x = 2$: $4 + 2 - 6 = 0$, true. Put $x = -2$: $4 - 2 - 6 = -4$, not $0$. So only $2$ is a root.`,
  },
  explanation: {
    intuition: [
      t`An equation like $x^2 + x - 6 = 0$ is true for some values of $x$ only.`,
      t`A **root** (or solution) of an equation is a value of the variable that makes it true.`,
      t`To **substitute** a value means to put it in place of the variable everywhere.`,
      t`To check a value, substitute it in the left side, $ax^2 + bx + c$.`,
      t`If the left side becomes $0$, the value is a root; if not, it is not a root.`,
      t`If a root is given, putting it in must give $0$: this finds an unknown coefficient.`,
    ],
    formal: [
      {
        title: "Checking a root",
        points: [
          t`Write the value being tested as $\alpha$ (read alpha).`,
          t`$\alpha$ is a root of $ax^2 + bx + c = 0$ when $a\alpha^2 + b\alpha + c = 0$.`,
          t`Put the value itself in, sign and all: root $3$ means $x = 3$.`,
          t`Work out each term, then add them up.`,
          t`Value $0$: the value is a root. Any other value: it is not a root.`,
        ],
      },
      {
        title: "Squares and signs",
        points: [
          t`A square is a number times itself: $3^2 = 3 \times 3 = 9$, not $6$.`,
          t`Put a negative value in brackets: $(-3)^2 = (-3) \times (-3) = 9$.`,
          t`So the square of a negative number is positive.`,
          t`In $ax^2$ only $x$ is squared: $2x^2$ is not $(2x)^2$.`,
          t`Square first, then multiply by $a$: $2(-3)^2 = 2 \times 9 = 18$.`,
        ],
      },
      {
        title: "Finding an unknown coefficient",
        points: [
          t`Sometimes one coefficient is a letter, say $k$, and one root is given.`,
          t`A root makes the equation true, so put it in for $x$.`,
          t`This gives a linear equation in $k$, like $4k - 20 = 0$.`,
          t`Move the number across and change its sign: $4k = 20$.`,
          t`Divide by the number with $k$: $k = \frac{20}{4} = 5$.`,
          t`Check: put $k$ and the root back; the left side must be $0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $x = -4$ is a root of $2x^2 + 5x + k = 0$, find $k$.`,
      steps: [
        t`$-4$ is a root, so put $x = -4$: $2(-4)^2 + 5(-4) + k = 0$.`,
        t`$(-4)^2 = 16$, so $2 \times 16 = 32$. Also $5 \times (-4) = -20$.`,
        t`$32 - 20 + k = 0$, so $12 + k = 0$.`,
        t`Move $12$ across and change its sign: $k = -12$.`,
        t`Check: $32 - 20 - 12 = 0$, so the equation is true.`,
      ],
      answer: t`$k = -12$.`,
    },
    visualSpec: t`Drag a value along a number line; the left side $ax^2 + bx + c$ updates, and turns green when it reaches $0$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Squaring a negative value to a negative: $(-2)^2 = -4$`,
      remediation: t`A negative number times itself is positive: $(-2)^2 = (-2) \times (-2) = 4$. Put a negative value in brackets before squaring.`,
      fallback: { kind: "ext", topic: "squares of negative numbers" },
    },
    {
      id: "C02-M2",
      mistake: t`Taking a square as doubling: $3^2 = 6$`,
      remediation: t`A square is a number times itself: $3^2 = 3 \times 3 = 9$, not $3 \times 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Moving a number across the equals sign without changing its sign: $9k - 18 = 0$ gives $9k = -18$`,
      remediation: t`A term that moves to the other side changes its sign: $5k - 10 = 0$ gives $5k = 10$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable" },
    },
    {
      id: "C02-M4",
      mistake: t`Putting in the opposite of the value: root $3$ read as $x = -3$, as in the factor $x - 3$`,
      remediation: t`A root is the value of the variable itself, sign and all: if $3$ is a root, put $x = 3$; if $-2$ is a root, put $x = -2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Dividing the wrong way round: $9k = 18$ gives $k = \frac{9}{18}$`,
      remediation: t`Divide both sides by the number with $k$: $5k = 10$ gives $k = \frac{10}{5} = 2$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable" },
    },
    {
      id: "C02-M6",
      mistake: t`Squaring the coefficient as well: $2x^2$ taken as $(2x)^2$`,
      remediation: t`In $ax^2$ only $x$ is squared: square the value first, then multiply by $a$, so $2 \times 3^2 = 2 \times 9 = 18$.`,
      fallback: { kind: "ext", topic: "index notation and order of operations" },
    },
  ],
  engineNotes: [
    t`C02-M1 applies only to a negative value, C02-M3 and C02-M5 only to find-$k$ items, and C02-M6 only when the coefficient of $x^2$ is a number other than $\pm 1$.`,
    t`C02-M2 matches the key when the value is $2$ ($2^2 = 2 \times 2$), and C02-M5 when $k = 1$ (C02-Q4 leaves it out).`,
    t`C02-M3 gives the negative of the key, so it can agree with C02-M4 (it does on C02-Q5); C02-M1 agrees with C02-M2 at the value $-2$.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.1 Q.4 (1)" },
      stem: t`Is $x = -1$ a root of $x^2 + 4x - 5 = 0$? Complete the activity: put $x = -1$ in $x^2 + 4x - 5$. The value is $\square$. The box holds:`,
      verify: { kind: "value", inputs: { E: "x**2 + 4*x - 5", r: "-1" }, params: { var: "x" } },
      options: [
        { key: "A", text: t`$-8$`, correct: true, value: "-8" },
        { key: "B", text: t`$-10$`, correct: false, misconceptionId: "C02-M1", value: "-10" },
        { key: "C", text: t`$-11$`, correct: false, misconceptionId: "C02-M2", value: "-11" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C02-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`Put $x = -1$: $(-1)^2 + 4(-1) - 5$.`,
          t`$(-1)^2 = 1$ and $4 \times (-1) = -4$.`,
          t`$1 - 4 - 5 = -8$, so the box holds $-8$. As $-8 \neq 0$, $-1$ is not a root.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.1 Q.4 (2)" },
      stem: t`Is $m = \dfrac{5}{2}$ a root of $2m^2 - 5m = 0$? Put $m = \dfrac{5}{2}$ in $2m^2 - 5m$. The value is:`,
      verify: { kind: "value", inputs: { E: "2*m**2 - 5*m", r: "Rational(5, 2)" }, params: { var: "m" } },
      options: [
        { key: "A", text: t`$- \frac{5}{2}$`, correct: false, misconceptionId: "C02-M2", value: "-5/2" },
        { key: "B", text: t`$25$`, correct: false, misconceptionId: "C02-M4", value: "25" },
        { key: "C", text: t`$\frac{25}{2}$`, correct: false, misconceptionId: "C02-M6", value: "25/2" },
        { key: "D", text: t`$0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`$\left(\frac{5}{2}\right)^2 = \frac{25}{4}$, so $2 \times \frac{25}{4} = \frac{25}{2}$.`,
          t`$5 \times \frac{5}{2} = \frac{25}{2}$.`,
          t`$\frac{25}{2} - \frac{25}{2} = 0$, so the value is $0$ and $\frac{5}{2}$ is a root.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q3(A)(i)" },
      stem: t`One of the roots of the equation $kx^2 - 10x + 12 = 0$ is $3$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { E: "k*x**2 - 10*x + 12", r: "3" }, params: { var: "x", ask: "k" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C02-M5", value: "1/2" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M2", value: "3" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C02-M3", value: "-2" },
      ],
      solution: {
        steps: [
          t`Put $x = 3$: $k(3)^2 - 10(3) + 12 = 0$.`,
          t`$9k - 30 + 12 = 0$, so $9k - 18 = 0$.`,
          t`$9k = 18$, so $k = \frac{18}{9} = 2$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q1(A)(i)" },
      stem: t`If $3$ is one of the roots of the quadratic equation $kx^2 - 7x + 12 = 0$, then $k = $`,
      verify: { kind: "value", inputs: { E: "k*x**2 - 7*x + 12", r: "3" }, params: { var: "x", ask: "k" } },
      options: [
        { key: "A", text: t`$- \frac{11}{3}$`, correct: false, misconceptionId: "C02-M4", value: "-11/3" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C02-M2", value: "3/2" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
      ],
      solution: {
        steps: [
          t`Put $x = 3$: $k(3)^2 - 7(3) + 12 = 0$.`,
          t`$9k - 21 + 12 = 0$, so $9k - 9 = 0$.`,
          t`$9k = 9$, so $k = 1$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/PS2 Q.4" },
      stem: t`One of the roots of the quadratic equation $2x^2 + kx - 2 = 0$ is $-2$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { E: "2*x**2 + k*x - 2", r: "-2" }, params: { var: "x", ask: "k" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C02-M6", value: "7" },
        { key: "B", text: t`$3$`, correct: true, value: "3" },
        { key: "C", text: t`$-5$`, correct: false, misconceptionId: "C02-M1", value: "-5" },
        { key: "D", text: t`$-3$`, correct: false, misconceptionId: "C02-M4", value: "-3" },
      ],
      solution: {
        steps: [
          t`Put $x = -2$: $2(-2)^2 + k(-2) - 2 = 0$.`,
          t`$(-2)^2 = 4$, so $8 - 2k - 2 = 0$.`,
          t`$6 - 2k = 0$, so $2k = 6$ and $k = 3$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q3(A)(ii)" },
      stem: t`One of the roots of $5m^2 + 2m + k = 0$ is $\dfrac{-7}{5}$. Complete the activity: $5\left(\frac{-7}{5}\right)^2$ $+ 2\left(\frac{-7}{5}\right)$ $+ k = 0$, so $k = \square$. The box holds:`,
      verify: { kind: "value", inputs: { E: "5*m**2 + 2*m + k", r: "Rational(-7, 5)" }, params: { var: "m", ask: "k" } },
      options: [
        { key: "A", text: t`$-7$`, correct: true, value: "-7" },
        { key: "B", text: t`$\frac{63}{5}$`, correct: false, misconceptionId: "C02-M1", value: "63/5" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C02-M3", value: "7" },
        { key: "D", text: t`$- \frac{63}{5}$`, correct: false, misconceptionId: "C02-M4", value: "-63/5" },
      ],
      solution: {
        steps: [
          t`$\left(\frac{-7}{5}\right)^2 = \frac{49}{25}$, so $5 \times \frac{49}{25} = \frac{49}{5}$.`,
          t`$2 \times \frac{-7}{5} = -\frac{14}{5}$.`,
          t`$\frac{49}{5} - \frac{14}{5} + k = 0$, so $7 + k = 0$.`,
          t`So the box holds $k = -7$.`,
        ],
      },
    },
  ],
};
