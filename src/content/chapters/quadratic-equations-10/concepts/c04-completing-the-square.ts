import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`$(x + 3)^2 = 25$ is easy: $x + 3$ is $5$ or $-5$. **Can you turn $x^2 + 6x = 16$ into that shape?**`,
    reveal: t`Add $9$ to both sides: $x^2 + 6x + 9 = 25$, and $x^2 + 6x + 9 = (x + 3)^2$. So $(x + 3)^2 = 25$, giving $x = 2$ or $x = -8$. Adding the missing $9$ is called **completing the square**.`,
  },
  explanation: {
    intuition: [
      t`You can solve $(x + 3)^2 = 25$ at once: $x + 3$ is $5$ or $-5$.`,
      t`Most quadratic equations are not written as a square like that.`,
      t`To **complete the square** means to add the missing number that makes a perfect square.`,
      t`Whatever you add to one side, you add to the other side too.`,
      t`Then the equation reads $(x + p)^2 = q$, a square equal to a number.`,
      t`Taking both square roots of $q$ gives both roots.`,
    ],
    formal: [
      {
        title: "The perfect square pattern",
        points: [
          t`A **perfect square** is a bracket multiplied by itself, like $(x + 3)^2$.`,
          t`$(x + k)^2 = x^2 + 2kx + k^2$.`,
          t`The coefficient of $x$ is $2k$, so $k$ is **half** of it.`,
          t`The last term $k^2$ is the **square** of that half.`,
          t`So $x^2 + bx$ needs $\left(\frac{b}{2}\right)^2$ to become a perfect square.`,
          t`Example: $\left(\frac{6}{2}\right)^2 = 9$, and $x^2 + 6x + 9 = (x + 3)^2$.`,
        ],
      },
      {
        title: "The steps of the method",
        points: [
          t`Step 1: if the coefficient of $x^2$ is not $1$, divide **every** term by it.`,
          t`Step 2: move the constant to the right side; crossing $=$ changes its sign.`,
          t`Step 3: add $\left(\frac{b}{2}\right)^2$ to **both** sides, where $b$ is now the coefficient of $x$.`,
          t`Step 4: write the left side as $\left(x + \frac{b}{2}\right)^2$ and simplify the right side to $q$.`,
          t`Step 5: take square roots: $x + \frac{b}{2} = \sqrt{q}$ or $x + \frac{b}{2} = -\sqrt{q}$.`,
          t`The book adds and subtracts $\left(\frac{b}{2}\right)^2$ on the left instead: the result is the same.`,
        ],
      },
      {
        title: "Signs and both roots",
        points: [
          t`For $x^2 - 14x$, half of $-14$ is $-7$, and $(-7)^2 = 49$.`,
          t`So $x^2 - 14x + 49 = (x - 7)^2$: the bracket keeps the sign of $b$.`,
          t`A positive number has two square roots: $y^2 = 49$ gives $y = 7$ or $y = -7$.`,
          t`So $(x + p)^2 = q$ gives $x = -p + \sqrt{q}$ or $x = -p - \sqrt{q}$.`,
          t`We write both at once as $x = -p \pm \sqrt{q}$.`,
          t`If $q$ is negative, no real number squares to it, so there is no real root.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $2x^2 - 6x + 1 = 0$ by completing the square.`,
      steps: [
        t`Divide every term by $2$: $x^2 - 3x + \frac{1}{2} = 0$, so $x^2 - 3x = -\frac{1}{2}$.`,
        t`Half of $-3$ is $-\frac{3}{2}$, and $\left(-\frac{3}{2}\right)^2 = \frac{9}{4}$. Add $\frac{9}{4}$ to both sides.`,
        t`$x^2 - 3x + \frac{9}{4}$ $= \frac{9}{4} - \frac{1}{2}$, so $\left(x - \frac{3}{2}\right)^2 = \frac{7}{4}$.`,
        t`Take both square roots: $x - \frac{3}{2} = \frac{\sqrt{7}}{2}$ or $x - \frac{3}{2} = -\frac{\sqrt{7}}{2}$.`,
      ],
      answer: t`$x = \frac{3 + \sqrt{7}}{2}$ or $x = \frac{3 - \sqrt{7}}{2}$.`,
    },
    visualSpec: t`A square of side $x$ and two strips of $\frac{b}{2}$ by $x$, with the missing corner $\left(\frac{b}{2}\right)^2$ that completes the big square.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Adds half the coefficient of $x$, $\frac{b}{2}$, instead of its square.`,
      remediation: t`The number to add is $\left(\frac{b}{2}\right)^2$: halve the coefficient of $x$, then square it.`,
      fallback: { kind: "ext", topic: "the square of a binomial, (a + b)^2 (Std IX Polynomials)" },
    },
    {
      id: "C04-M2",
      mistake: t`Adds $b^2$: squares the coefficient of $x$ without halving it.`,
      remediation: t`Since $(x + k)^2 = x^2 + 2kx + k^2$, $k$ is **half** the coefficient of $x$. Halve it first, then square.`,
      fallback: { kind: "ext", topic: "the square of a binomial, (a + b)^2 (Std IX Polynomials)" },
    },
    {
      id: "C04-M3",
      mistake: t`Adds $\left(\frac{b}{2}\right)^2$ to the left side only, so the right side stays $-c$.`,
      remediation: "Add the same number to **both** sides. Only then does the equation stay true.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Moves the constant across $=$ without changing its sign.`,
      remediation: t`A term that crosses the $=$ sign changes its sign: $x^2 + bx + c = 0$ becomes $x^2 + bx = -c$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: "Takes only the positive square root, so finds one root.",
      remediation: t`$(x + p)^2 = q$ gives $x + p = \sqrt{q}$ **or** $x + p = -\sqrt{q}$. Keep both: there are two roots.`,
      fallback: { kind: "ext", topic: "square roots: a positive number has two (Std IX Real Numbers)" },
    },
    {
      id: "C04-M6",
      mistake: t`Completes the square without first dividing by $a$, using $b$ and $c$ as printed.`,
      remediation: t`First make the coefficient of $x^2$ one: divide **every** term by $a$. Then halve the new coefficient of $x$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M1 gives the key when $\frac{b}{a} = 2$ (half of $2$ is $1 = 1^2$); its model refuses those inputs.`,
    "C04-M3 and C04-M4 change only the right side, so they cannot show on a 'number to add' item; C04-M5 shows only on roots items.",
    t`C04-M6 needs $a \neq 1$, and its stem must not show the division by $a$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q2(A)(i)" },
      stem: t`Complete the activity. To solve $x^2 + 8x - 48 = 0$ by completing the square, it is written as $(x + 4)^2 = \square$. What number goes in the box?`,
      verify: { kind: "value", inputs: { a: "1", b: "8", c: "-48" }, params: { out: "q" } },
      options: [
        { key: "A", text: t`$48$`, correct: false, misconceptionId: "C04-M3", value: "48" },
        { key: "B", text: t`$-32$`, correct: false, misconceptionId: "C04-M4", value: "-32" },
        { key: "C", text: t`$64$`, correct: true, value: "64" },
        { key: "D", text: t`$52$`, correct: false, misconceptionId: "C04-M1", value: "52" },
      ],
      solution: {
        steps: [
          t`Move $-48$ across: $x^2 + 8x = 48$.`,
          t`Half of $8$ is $4$, and $4^2 = 16$. Add $16$ to both sides: $x^2 + 8x + 16 = 64$.`,
          t`So $(x + 4)^2 = 64$: the box is $64$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Solution of a quadratic equation by completing the square SolvedEx.1" },
      stem: t`Sakshi solves $5x^2 - 4x - 3 = 0$ by completing the square. After making the coefficient of $x^2$ one, what number does she add to both sides?`,
      verify: { kind: "value", inputs: { a: "5", b: "-4", c: "-3" }, params: { out: "add" } },
      options: [
        { key: "A", text: t`$- \frac{2}{5}$`, correct: false, misconceptionId: "C04-M1", value: "-2/5" },
        { key: "B", text: t`$\frac{16}{25}$`, correct: false, misconceptionId: "C04-M2", value: "16/25" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C04-M6", value: "4" },
        { key: "D", text: t`$\frac{4}{25}$`, correct: true, value: "4/25" },
      ],
      solution: {
        steps: [
          t`Divide every term by $5$: $x^2 - \frac{4}{5}x - \frac{3}{5} = 0$.`,
          t`Half of $-\frac{4}{5}$ is $-\frac{2}{5}$.`,
          t`$\left(-\frac{2}{5}\right)^2 = \frac{4}{25}$, so she adds $\frac{4}{25}$ to both sides.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.3 (1)" },
      stem: t`Solve $x^2 + x - 20 = 0$ by completing the square. Which completed form do you reach?`,
      verify: { kind: "value", inputs: { a: "1", b: "1", c: "-20" }, params: { out: "form" } },
      options: [
        { key: "A", text: t`$\left(x + \frac{1}{2}\right)^2 = 20$`, correct: false, misconceptionId: "C04-M3", value: "(1/2, 20)" },
        { key: "B", text: t`$\left(x + \frac{1}{2}\right)^2 = - \frac{79}{4}$`, correct: false, misconceptionId: "C04-M4", value: "(1/2, -79/4)" },
        { key: "C", text: t`$\left(x + \frac{1}{2}\right)^2 = \frac{81}{4}$`, correct: true, value: "(1/2, 81/4)" },
        { key: "D", text: t`$\left(x + \frac{1}{2}\right)^2 = 21$`, correct: false, misconceptionId: "C04-M2", value: "(1/2, 21)" },
      ],
      solution: {
        steps: [
          t`Move $-20$ across: $x^2 + x = 20$.`,
          t`Half of $1$ is $\frac{1}{2}$, and $\left(\frac{1}{2}\right)^2 = \frac{1}{4}$. Add $\frac{1}{4}$ to both sides.`,
          t`$x^2 + x + \frac{1}{4} = 20 + \frac{1}{4}$, so $\left(x + \frac{1}{2}\right)^2 = \frac{81}{4}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q3(B)(iv)" },
      stem: t`Solve $x^2 + 10x + 2 = 0$ by completing the square.`,
      verify: { kind: "value", inputs: { a: "1", b: "10", c: "2" }, params: { out: "roots" } },
      options: [
        { key: "A", text: t`$x = -5 \pm 7 \sqrt{2}$`, correct: false, misconceptionId: "C04-M2", value: "{-5 + 7*sqrt(2), -7*sqrt(2) - 5}" },
        { key: "B", text: t`$x = -5 \pm 3 \sqrt{3}$`, correct: false, misconceptionId: "C04-M4", value: "{-5 + 3*sqrt(3), -3*sqrt(3) - 5}" },
        { key: "C", text: t`$x = -5 + \sqrt{23}$ only`, correct: false, misconceptionId: "C04-M5", value: "{-5 + sqrt(23)}" },
        { key: "D", text: t`$x = -5 \pm \sqrt{23}$`, correct: true, value: "{-5 - sqrt(23), -5 + sqrt(23)}" },
      ],
      solution: {
        steps: [
          t`Move $2$ across: $x^2 + 10x = -2$.`,
          t`Half of $10$ is $5$; add $25$ to both sides: $(x + 5)^2 = 23$.`,
          t`$x + 5 = \sqrt{23}$ or $x + 5 = -\sqrt{23}$, so $x = -5 \pm \sqrt{23}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.3 (3)" },
      stem: t`Solve $m^2 - 5m = -3$ by completing the square. Which completed form do you reach?`,
      verify: { kind: "value", inputs: { a: "1", b: "-5", c: "3" }, params: { out: "form" } },
      options: [
        { key: "A", text: t`$\left(m - \frac{5}{2}\right)^2 = -3$`, correct: false, misconceptionId: "C04-M3", value: "(-5/2, -3)" },
        { key: "B", text: t`$\left(m - \frac{5}{2}\right)^2 = \frac{13}{4}$`, correct: true, value: "(-5/2, 13/4)" },
        { key: "C", text: t`$\left(m - \frac{5}{2}\right)^2 = - \frac{11}{2}$`, correct: false, misconceptionId: "C04-M1", value: "(-5/2, -11/2)" },
        { key: "D", text: t`$\left(m - \frac{5}{2}\right)^2 = 22$`, correct: false, misconceptionId: "C04-M2", value: "(-5/2, 22)" },
      ],
      solution: {
        steps: [
          t`The constant is already on the right: $m^2 - 5m = -3$.`,
          t`Half of $-5$ is $-\frac{5}{2}$, and $\left(-\frac{5}{2}\right)^2 = \frac{25}{4}$. Add it to both sides.`,
          t`$-3 + \frac{25}{4} = \frac{13}{4}$, so $\left(m - \frac{5}{2}\right)^2 = \frac{13}{4}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.3 (4)" },
      stem: t`Solve $9y^2 - 12y + 2 = 0$ by completing the square.`,
      verify: { kind: "value", inputs: { a: "9", b: "-12", c: "2" }, params: { out: "roots" } },
      options: [
        { key: "A", text: t`$y = \frac{2}{3} \pm \frac{\sqrt{2}}{3}$`, correct: true, value: "{2/3 - sqrt(2)/3, sqrt(2)/3 + 2/3}" },
        { key: "B", text: t`$y = \frac{2}{3} \pm \frac{\sqrt{6}}{3}$`, correct: false, misconceptionId: "C04-M4", value: "{2/3 - sqrt(6)/3, 2/3 + sqrt(6)/3}" },
        { key: "C", text: t`$y = \frac{2}{3} + \frac{\sqrt{2}}{3}$ only`, correct: false, misconceptionId: "C04-M5", value: "{sqrt(2)/3 + 2/3}" },
        { key: "D", text: t`$y = 6 \pm \sqrt{34}$`, correct: false, misconceptionId: "C04-M6", value: "{6 - sqrt(34), sqrt(34) + 6}" },
      ],
      solution: {
        steps: [
          t`Divide every term by $9$: $y^2 - \frac{4}{3}y + \frac{2}{9} = 0$, so $y^2 - \frac{4}{3}y = -\frac{2}{9}$.`,
          t`Half of $-\frac{4}{3}$ is $-\frac{2}{3}$; add $\frac{4}{9}$ to both sides: $\left(y - \frac{2}{3}\right)^2 = \frac{2}{9}$.`,
          t`$\sqrt{\frac{2}{9}} = \frac{\sqrt{2}}{3}$, so $y - \frac{2}{3} = \pm\frac{\sqrt{2}}{3}$.`,
          t`So $y = \frac{2}{3} \pm \frac{\sqrt{2}}{3}$, that is $y = \frac{2 \pm \sqrt{2}}{3}$.`,
        ],
      },
    },
  ],
};
