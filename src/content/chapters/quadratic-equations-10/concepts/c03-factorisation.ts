import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Without expanding anything, which values of $x$ make $(x - 4)(x + 7) = 0$ true?`,
    reveal: t`A product is $0$ only when one of its factors is $0$. So $x - 4 = 0$ or $x + 7 = 0$, which gives $x = 4$ or $x = -7$. Watch the sign: $x + 7 = 0$ gives $-7$, not $7$.`,
  },
  explanation: {
    intuition: [
      t`A **root** is a value of the variable that makes the equation true.`,
      t`If two numbers multiply to give $0$, at least one of them is $0$.`,
      t`So we write the equation as two brackets multiplied together, equal to $0$.`,
      t`Each bracket equal to $0$ is a simple equation and gives one root.`,
      t`To get the brackets, we **split the middle term** $bx$ into two terms.`,
      t`The two parts must multiply to give $ac$ and add up to $b$.`,
    ],
    formal: [
      {
        title: "If a product is zero",
        points: [
          t`If $pq = 0$, then $p = 0$ or $q = 0$.`,
          t`So $(x - 2)(x + 9) = 0$ gives $x - 2 = 0$ or $x + 9 = 0$.`,
          t`Solve each bracket: $x = 2$ or $x = -9$.`,
          t`A number that crosses the $=$ sign changes its sign: $x + 9 = 0$ gives $x = -9$.`,
          t`Divide by the coefficient of $x$ too: $2x - 5 = 0$ gives $x = \frac{5}{2}$, not $5$.`,
          t`This works only when the right side is $0$.`,
        ],
      },
      {
        title: "Splitting the middle term",
        points: [
          t`Write the equation as $ax^2 + bx + c = 0$.`,
          t`Find $ac$, the product of the first and last coefficients.`,
          t`Find two numbers whose product is $ac$ and whose sum is $b$.`,
          t`In $2x^2 + 7x + 3 = 0$, $ac = 6$, and $6$ and $1$ work.`,
          t`Split: $2x^2 + 6x + x + 3 = 0$, so $2x(x + 3) + 1(x + 3) = 0$.`,
          t`So $(x + 3)(2x + 1) = 0$, which gives $x = -3$ or $x = -\frac{1}{2}$.`,
        ],
      },
      {
        title: "Coefficients with surds",
        points: [
          t`The same steps work when $a$ or $c$ is a surd.`,
          t`Take $6\sqrt{3}\,x^2 + 7x - \sqrt{3} = 0$.`,
          t`Here $ac = 6\sqrt{3} \times (-\sqrt{3})$ $= -18$.`,
          t`$9$ and $-2$ have product $-18$ and sum $7$; write $9x$ as $3\sqrt{3}x \times \sqrt{3}$.`,
          t`So $3\sqrt{3}x(2x + \sqrt{3})$ $- 1(2x + \sqrt{3}) = 0$.`,
          t`Then $(2x + \sqrt{3})(3\sqrt{3}x - 1)$ $= 0$: $x = -\frac{\sqrt{3}}{2}$ or $x = \frac{1}{3\sqrt{3}}$.`,
        ],
      },
      {
        title: "Rearrange it first",
        points: [
          t`Factorisation needs the form $ax^2 + bx + c = 0$, with $0$ on the right.`,
          t`A term that crosses the $=$ sign changes its sign.`,
          t`So $x^2 = 4x + 12$ becomes $x^2 - 4x - 12 = 0$.`,
          t`Expand brackets first: $x(x - 1) = 6$ becomes $x^2 - x - 6 = 0$.`,
          t`Its roots are $3$ and $-2$, not $0$ and $1$: the right side was $6$, not $0$.`,
          t`For a term like $\frac{2}{x}$, multiply every term by $x$ (here $x \neq 0$).`,
        ],
      },
      {
        title: "When b or c is zero",
        points: [
          t`When $c = 0$, take the variable common: $4x^2 = 7x$ gives $x(4x - 7) = 0$.`,
          t`So $x = 0$ or $x = \frac{7}{4}$.`,
          t`Never divide both sides by $x$: that loses the root $x = 0$.`,
          t`When $b = 0$, use $p^2 - q^2 = (p + q)(p - q)$.`,
          t`$x^2 = 3$ gives $x^2 - (\sqrt{3})^2 = 0$, so $(x + \sqrt{3})(x - \sqrt{3}) = 0$.`,
          t`So $x = \sqrt{3}$ or $x = -\sqrt{3}$: two roots, not one.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve by factorisation: $6x - \frac{2}{x} = 1$.`,
      steps: [
        t`Here $x \neq 0$. Multiply every term by $x$: $6x^2 - 2 = x$.`,
        t`Bring $x$ to the left: $6x^2 - x - 2 = 0$. So $a = 6$, $b = -1$, $c = -2$.`,
        t`$ac = -12$. The numbers $-4$ and $3$ have product $-12$ and sum $-1$. Split: $6x^2 - 4x + 3x - 2 = 0$.`,
        t`$2x(3x - 2) + 1(3x - 2) = 0$, so $(3x - 2)(2x + 1) = 0$.`,
        t`$3x - 2 = 0$ or $2x + 1 = 0$, so $x = \frac{2}{3}$ or $x = -\frac{1}{2}$.`,
      ],
      answer: t`$x = \frac{2}{3}$ or $x = -\frac{1}{2}$. Check $x = \frac{2}{3}$: $6 \times \frac{2}{3}$ $- 2 \div \frac{2}{3}$ $= 4 - 3 = 1$.`,
    },
    visualSpec: t`Pick two numbers for the split and see their product and sum beside $ac$ and $b$; when both match, the two brackets appear.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Reads each root off its bracket with the sign printed there: $x - 4 = 0$ gives $x = -4$.`,
      remediation: t`Solve each bracket as an equation: $x - 4 = 0$ gives $x = 4$, and $x + 4 = 0$ gives $x = -4$. Check a root by putting it back into the equation.`,
      fallback: { kind: "ext", topic: "solving a linear equation in one variable" },
    },
    {
      id: "C03-M2",
      mistake: t`Divides both sides by the variable, so the root $0$ is lost.`,
      remediation: t`Never divide both sides by the variable: it may be $0$. Bring every term to one side and take the variable common; then $0$ is one of the roots.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: t`Solving $x^2 = k$, takes only the positive square root.`,
      remediation: t`Write $x^2 - k = 0$ as a difference of squares, $(x + \sqrt{k})(x - \sqrt{k}) = 0$. Two brackets give two roots, $\sqrt{k}$ and $-\sqrt{k}$.`,
      fallback: { kind: "ext", topic: "factorising a difference of squares (Std IX Polynomials)" },
    },
    {
      id: "C03-M4",
      mistake: t`Takes the two numbers used to split the middle term (product $ac$, sum $b$) as the roots, with their signs changed.`,
      remediation: t`The split numbers are not the roots. Use them to split $bx$, take a common factor from each pair to get two brackets, then solve each bracket.`,
      fallback: { kind: "ext", topic: "factorising quadratic expressions (Std IX Polynomials)" },
    },
    {
      id: "C03-M5",
      mistake: t`From a bracket such as $2x - 5 = 0$ writes $x = 5$, forgetting to divide by the coefficient of $x$.`,
      remediation: t`Finish each bracket: $2x - 5 = 0$ gives $2x = 5$, so $x = \frac{5}{2}$. Always divide by the coefficient of the variable.`,
      fallback: { kind: "ext", topic: "solving a linear equation in one variable" },
    },
    {
      id: "C03-M6",
      mistake: t`Sets each printed factor to $0$ even though the product equals a nonzero number.`,
      remediation: t`A product gives roots this way only when it equals $0$. Expand, and bring every term to one side to get $ax^2 + bx + c = 0$ first.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C03-M1 gives the key when the roots are $\pm r$ (as in $x^2 = k$); C03-M2 needs $c = 0$; C03-M3 needs $b = 0$; C03-M4 needs $a \neq 1$; C03-M5 needs a bracket whose $x$ coefficient is not $1$; C03-M6 needs a product equal to a nonzero number. Draw diagnosing items from those inputs.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q3(ii)" },
      stem: t`Solve by factorisation: $3x^2 - 22x + 40 = 0$.`,
      verify: { kind: "value", inputs: { a: "3", b: "-22", c: "40" } },
      options: [
        { key: "A", text: t`$x = 12$ or $x = 10$`, correct: false, misconceptionId: "C03-M4", value: "{10, 12}" },
        { key: "B", text: t`$x = 10$ or $x = 4$`, correct: false, misconceptionId: "C03-M5", value: "{4, 10}" },
        { key: "C", text: t`$x = 4$ or $x = \frac{10}{3}$`, correct: true, value: "{10/3, 4}" },
        { key: "D", text: t`$x = - \frac{10}{3}$ or $x = -4$`, correct: false, misconceptionId: "C03-M1", value: "{-4, -10/3}" },
      ],
      solution: {
        steps: [
          t`$ac = 3 \times 40 = 120$. The numbers $-10$ and $-12$ have product $120$ and sum $-22$.`,
          t`$3x^2 - 10x - 12x + 40 = 0$, so $x(3x - 10) - 4(3x - 10) = 0$.`,
          t`$(3x - 10)(x - 4) = 0$, so $3x - 10 = 0$ or $x - 4 = 0$.`,
          t`$x = \frac{10}{3}$ or $x = 4$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Solutions of a quadratic equation by factorisation SolvedEx.1 (3)" },
      stem: t`Solve by factorisation: $3y^2 = 5y$.`,
      verify: { kind: "value", inputs: { a: "3", b: "-5", c: "0" } },
      options: [
        { key: "A", text: t`$y = \frac{5}{3}$ only`, correct: false, misconceptionId: "C03-M2", value: "{5/3}" },
        { key: "B", text: t`$y = 5$ or $y = 0$`, correct: false, misconceptionId: "C03-M5", value: "{0, 5}" },
        { key: "C", text: t`$y = \frac{5}{3}$ or $y = 0$`, correct: true, value: "{0, 5/3}" },
        { key: "D", text: t`$y = 0$ or $y = - \frac{5}{3}$`, correct: false, misconceptionId: "C03-M1", value: "{-5/3, 0}" },
      ],
      solution: {
        steps: [
          t`Bring every term to the left: $3y^2 - 5y = 0$. Don't divide by $y$.`,
          t`Take $y$ common: $y(3y - 5) = 0$.`,
          t`$y = 0$ or $3y - 5 = 0$, so $y = 0$ or $y = \frac{5}{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q2(B)(iv)" },
      stem: t`Solve by factorisation: $25m^2 = 9$.`,
      verify: { kind: "value", inputs: { a: "25", b: "0", c: "-9" } },
      options: [
        { key: "A", text: t`$m = \frac{3}{5}$ only`, correct: false, misconceptionId: "C03-M3", value: "{3/5}" },
        { key: "B", text: t`$m = 15$ or $m = -15$`, correct: false, misconceptionId: "C03-M4", value: "{-15, 15}" },
        { key: "C", text: t`$m = 3$ or $m = -3$`, correct: false, misconceptionId: "C03-M5", value: "{-3, 3}" },
        { key: "D", text: t`$m = \frac{3}{5}$ or $m = - \frac{3}{5}$`, correct: true, value: "{-3/5, 3/5}" },
      ],
      solution: {
        steps: [
          t`$25m^2 - 9 = 0$, that is $(5m)^2 - 3^2 = 0$.`,
          t`$(5m + 3)(5m - 3) = 0$, so $5m + 3 = 0$ or $5m - 3 = 0$.`,
          t`$m = -\frac{3}{5}$ or $m = \frac{3}{5}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.2 Q.1 (7)" },
      stem: t`Solve by factorisation: $\sqrt{2}\,x^2 + 7x + 5\sqrt{2} = 0$.`,
      verify: { kind: "value", inputs: { a: "sqrt(2)", b: "7", c: "5*sqrt(2)" }, params: { factors: ["sqrt(2)*x + 5", "x + sqrt(2)"] } },
      options: [
        { key: "A", text: t`$x = -2$ or $x = -5$`, correct: false, misconceptionId: "C03-M4", value: "{-5, -2}" },
        { key: "B", text: t`$x = - \sqrt{2}$ or $x = -5$`, correct: false, misconceptionId: "C03-M5", value: "{-5, -sqrt(2)}" },
        { key: "C", text: t`$x = - \sqrt{2}$ or $x = -\frac{5}{\sqrt{2}}$`, correct: true, value: "{-5*sqrt(2)/2, -sqrt(2)}" },
        { key: "D", text: t`$x = \frac{5}{\sqrt{2}}$ or $x = \sqrt{2}$`, correct: false, misconceptionId: "C03-M1", value: "{sqrt(2), 5*sqrt(2)/2}" },
      ],
      solution: {
        steps: [
          t`$ac = \sqrt{2} \times 5\sqrt{2}$ $= 10$. The numbers $5$ and $2$ have product $10$ and sum $7$.`,
          t`$\sqrt{2}\,x^2 + 5x + 2x$ $+ 5\sqrt{2} = 0$. Write $2x$ as $\sqrt{2} \times \sqrt{2}x$.`,
          t`$x(\sqrt{2}x + 5)$ $+ \sqrt{2}(\sqrt{2}x + 5) = 0$, so $(\sqrt{2}x + 5)(x + \sqrt{2}) = 0$.`,
          t`$\sqrt{2}x + 5 = 0$ or $x + \sqrt{2} = 0$, so $x = -\frac{5}{\sqrt{2}}$ or $x = -\sqrt{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.2 Q.1 (4)" },
      stem: t`Solve by factorisation: $5m^2 = 22m + 15$.`,
      verify: { kind: "value", inputs: { a: "5", b: "-22", c: "-15" } },
      options: [
        { key: "A", text: t`$m = 5$ or $m = - \frac{3}{5}$`, correct: true, value: "{-3/5, 5}" },
        { key: "B", text: t`$m = \frac{3}{5}$ or $m = -5$`, correct: false, misconceptionId: "C03-M1", value: "{-5, 3/5}" },
        { key: "C", text: t`$m = 25$ or $m = -3$`, correct: false, misconceptionId: "C03-M4", value: "{-3, 25}" },
        { key: "D", text: t`$m = 5$ or $m = -3$`, correct: false, misconceptionId: "C03-M5", value: "{-3, 5}" },
      ],
      solution: {
        steps: [
          t`Bring every term to the left: $5m^2 - 22m - 15 = 0$.`,
          t`$ac = -75$. The numbers $-25$ and $3$ have product $-75$ and sum $-22$.`,
          t`$5m^2 - 25m + 3m - 15 = 0$, so $5m(m - 5) + 3(m - 5) = 0$, so $(m - 5)(5m + 3) = 0$.`,
          t`$m = 5$ or $m = -\frac{3}{5}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.2 Q.1 (9)" },
      stem: t`Solve by factorisation: $2m(m - 24) = 50$.`,
      verify: { kind: "value", inputs: { k: "2", p1: "0", p2: "24", d: "50" } },
      options: [
        { key: "A", text: t`$m = 25$ or $m = -1$`, correct: true, value: "{-1, 25}" },
        { key: "B", text: t`$m = 1$ or $m = -25$`, correct: false, misconceptionId: "C03-M1", value: "{-25, 1}" },
        { key: "C", text: t`$m = 50$ or $m = -2$`, correct: false, misconceptionId: "C03-M4", value: "{-2, 50}" },
        { key: "D", text: t`$m = 24$ or $m = 0$`, correct: false, misconceptionId: "C03-M6", value: "{0, 24}" },
      ],
      solution: {
        steps: [
          t`The right side is $50$, not $0$, so expand first: $2m^2 - 48m = 50$.`,
          t`$2m^2 - 48m - 50 = 0$. Divide by $2$: $m^2 - 24m - 25 = 0$.`,
          t`$-25$ and $1$ have product $-25$ and sum $-24$: $m(m - 25) + 1(m - 25) = 0$.`,
          t`$(m - 25)(m + 1) = 0$, so $m = 25$ or $m = -1$.`,
        ],
      },
    },
  ],
};
