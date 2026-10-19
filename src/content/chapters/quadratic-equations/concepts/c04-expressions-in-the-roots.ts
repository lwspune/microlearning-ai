import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`The roots of $x^2 - 6x + 7 = 0$ are $3 + \sqrt{2}$ and $3 - \sqrt{2}$. Call them $\alpha$ and $\beta$. **To find $\alpha^2 + \beta^2$, must you square both surds?**`,
    reveal: t`No. Their sum is $6$ and their product is $7$, and $\alpha^2 + \beta^2$ $= (\alpha + \beta)^2 - 2\alpha\beta$ $= 36 - 14 = 22$. Squaring the surds gives $(11 + 6\sqrt{2}) + (11 - 6\sqrt{2})$ $= 22$ too, with more work.`,
  },
  explanation: {
    intuition: [
      t`Let $\alpha$ and $\beta$ be the two **roots** of $ax^2 + bx + c = 0$: the values of $x$ that make it true.`,
      t`Call their sum $s = \alpha + \beta$ and their product $p = \alpha\beta$.`,
      t`From the last concept, $s = -\frac{b}{a}$ and $p = \frac{c}{a}$, read off without solving.`,
      t`An expression is **symmetric** in the roots if swapping $\alpha$ and $\beta$ leaves it unchanged.`,
      t`For example $\alpha^2 + \beta^2$, $\alpha^3 + \beta^3$ and $\frac{1}{\alpha} + \frac{1}{\beta}$ are all symmetric.`,
      t`Each can be rewritten using only $s$ and $p$, so its value comes straight from the coefficients.`,
    ],
    formal: [
      {
        title: "Sum of squares",
        points: [
          t`Squaring the sum gives $(\alpha + \beta)^2$ $= \alpha^2 + 2\alpha\beta + \beta^2$.`,
          t`The middle term $2\alpha\beta$ means $(\alpha + \beta)^2$ is not $\alpha^2 + \beta^2$.`,
          t`Take it away: $\alpha^2 + \beta^2 = s^2 - 2p$.`,
          t`For $x^2 - 5x + 3 = 0$, $s = 5$ and $p = 3$.`,
          t`So $\alpha^2 + \beta^2 = 25 - 6 = 19$.`,
        ],
      },
      {
        title: "Difference of the roots",
        points: [
          t`Squaring the difference gives $(\alpha - \beta)^2$ $= \alpha^2 - 2\alpha\beta + \beta^2$.`,
          t`That is $\alpha^2 + \beta^2$ with $2p$ taken away once more: $(\alpha - \beta)^2 = s^2 - 4p$.`,
          t`Keep the two apart: $-2p$ for the sum of squares, $-4p$ for the squared difference.`,
          t`The **positive difference** of the roots, larger minus smaller, is $|\alpha - \beta| = \sqrt{s^2 - 4p}$.`,
          t`For $x^2 - 5x + 3 = 0$: $(\alpha - \beta)^2 = 25 - 12 = 13$.`,
          t`So the roots differ by $|\alpha - \beta| = \sqrt{13}$.`,
        ],
      },
      {
        title: "Sum of cubes",
        points: [
          t`Cubing the sum gives $(\alpha + \beta)^3 = \alpha^3 + \beta^3$ $+ 3\alpha\beta(\alpha + \beta)$.`,
          t`The last term is $3ps$, so $\alpha^3 + \beta^3 = s^3 - 3ps$.`,
          t`Keep the factor $s$: the term is $3\alpha\beta(\alpha + \beta)$, not just $3\alpha\beta$.`,
          t`For $x^2 - 5x + 3 = 0$: $\alpha^3 + \beta^3 = 125 - 45$ $= 80$.`,
        ],
      },
      {
        title: "Reciprocals",
        points: [
          t`The **reciprocal** of a number is one over it: $\frac{1}{\alpha}$ is the reciprocal of $\alpha$.`,
          t`Add them over the common denominator $\alpha\beta$: $\frac{1}{\alpha} + \frac{1}{\beta}$ $= \frac{\alpha + \beta}{\alpha\beta}$.`,
          t`So $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{s}{p}$, not $\frac{1}{\alpha + \beta}$.`,
          t`In the same way, $\frac{\alpha}{\beta} + \frac{\beta}{\alpha}$ $= \frac{\alpha^2 + \beta^2}{\alpha\beta}$ $= \frac{s^2 - 2p}{p}$.`,
          t`And $\frac{1}{\alpha^2} + \frac{1}{\beta^2}$ $= \frac{\alpha^2 + \beta^2}{\alpha^2\beta^2}$ $= \frac{s^2 - 2p}{p^2}$.`,
          t`All of these need $p \neq 0$, that is, neither root is $0$.`,
        ],
      },
      {
        title: "Fourth powers",
        points: [
          t`Read $\alpha^4 + \beta^4$ as a sum of squares: the squares of $\alpha^2$ and $\beta^2$.`,
          t`The sum-of-squares rule on them gives $\alpha^4 + \beta^4$ $= (\alpha^2 + \beta^2)^2 - 2\alpha^2\beta^2$.`,
          t`So $\alpha^4 + \beta^4 = (s^2 - 2p)^2 - 2p^2$.`,
          t`For $x^2 - 5x + 3 = 0$: $19^2 - 2 \times 9$ $= 361 - 18 = 343$.`,
        ],
      },
      {
        title: "Finding an unknown coefficient",
        points: [
          t`When a coefficient holds an unknown $k$, both $s$ and $p$ are expressions in $k$.`,
          t`Write the given condition in $s$ and $p$, then solve for $k$.`,
          t`“The roots differ by $d$” means $(\alpha - \beta)^2 = d^2$: square $d$ as well.`,
          t`Take $x^2 - kx + 6 = 0$ with roots differing by $1$: here $s = k$ and $p = 6$.`,
          t`Then $k^2 - 24 = 1$, so $k^2 = 25$ and $k = \pm 5$.`,
          t`Check: $k = 5$ gives the roots $2$ and $3$, which differ by $1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\alpha$ and $\beta$ are the roots of $3x^2 - 4x - 2 = 0$, find $\frac{\alpha}{\beta} + \frac{\beta}{\alpha}$.`,
      steps: [
        t`Divide by $a = 3$: $s = \frac{4}{3}$ and $p = -\frac{2}{3}$.`,
        t`Use the common denominator $\alpha\beta$: $\frac{\alpha}{\beta} + \frac{\beta}{\alpha}$ $= \frac{\alpha^2 + \beta^2}{\alpha\beta}$.`,
        t`$\alpha^2 + \beta^2 = s^2 - 2p$ $= \frac{16}{9} + \frac{4}{3} = \frac{28}{9}$.`,
        t`Divide by $p$: $\frac{28}{9} \times \left(-\frac{3}{2}\right)$ $= -\frac{14}{3}$.`,
      ],
      answer: t`$\frac{\alpha}{\beta} + \frac{\beta}{\alpha} = -\frac{14}{3}$. It is negative because $p < 0$: the roots have opposite signs, so each ratio is negative.`,
    },
    visualSpec: t`Drag $b$ and $c$ in $x^2 + bx + c = 0$: the roots slide along a number line while tiles show $s$, $p$, $\alpha^2 + \beta^2$ and $(\alpha - \beta)^2$ updating together.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Raising a sum or difference to a power term by term: $(\alpha + \beta)^2 = \alpha^2 + \beta^2$, $(\alpha + \beta)^3 = \alpha^3 + \beta^3$, $(\alpha - \beta)^2 = \alpha^2 - \beta^2$`,
      remediation: t`Powers don't split over a sum: $(\alpha + \beta)^2 = \alpha^2 + 2\alpha\beta + \beta^2$. So $\alpha^2 + \beta^2 = s^2 - 2p$, $\alpha^3 + \beta^3 = s^3 - 3ps$, and $\alpha^2 - \beta^2 = (\alpha + \beta)(\alpha - \beta)$.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
    {
      id: "C04-M2",
      mistake: t`Mixing up the $2p$ and the $4p$: $\alpha^2 + \beta^2 = s^2 - 4p$, or $(\alpha - \beta)^2 = s^2 - 2p$`,
      remediation: t`The sum of squares takes away $2p$: $\alpha^2 + \beta^2 = s^2 - 2p$. The squared difference takes away $2p$ once more: $(\alpha - \beta)^2 = s^2 - 4p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Taking the sum of the roots as $+\frac{b}{a}$`,
      remediation: t`For $ax^2 + bx + c = 0$ the sum of the roots is $-\frac{b}{a}$: the sign of $b$ flips. The product $\frac{c}{a}$ has no sign change.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: t`Reading $s = -b$ and $p = c$ without dividing by $a$`,
      remediation: t`Divide by the coefficient of $x^2$ first: $s = -\frac{b}{a}$ and $p = \frac{c}{a}$. They equal $-b$ and $c$ only when $a = 1$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M5",
      mistake: t`Confusing $(\alpha - \beta)^2$ with $|\alpha - \beta|$: leaving out the square root, or not squaring a given difference`,
      remediation: t`$s^2 - 4p$ is the **square** of the difference. Take its square root to get $|\alpha - \beta|$; when the roots differ by $d$, set $s^2 - 4p = d^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Adding reciprocals by adding denominators: $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{1}{\alpha + \beta}$`,
      remediation: t`Add fractions over a common denominator: $\frac{1}{\alpha} + \frac{1}{\beta}$ $= \frac{\alpha + \beta}{\alpha\beta} = \frac{s}{p}$.`,
      fallback: { kind: "ext", topic: "adding fractions" },
    },
  ],
  engineNotes: [
    t`C04-M3 (the sign of the sum) gives the key on any expression that has only even powers of $s$ ($\alpha^2 + \beta^2$, $(\alpha - \beta)^2$, $\frac{\alpha}{\beta} + \frac{\beta}{\alpha}$), so it is tagged only on C04-Q1 and C04-Q3; diagnose it with $\alpha^3 + \beta^3$ or $\frac{1}{\alpha} + \frac{1}{\beta}$.`,
    t`C04-M4 (not dividing by $a$) gives the key whenever $a = 1$, and C04-M5 gives the key when a given difference is $1$ (so NDA 2021 Sep Q45, roots differing by unity, is not used).`,
    t`C04-Q1 changes NDA 2019 Sep Q105 ($x^2 - 30x + 221 = 0$, key $7110$) to $2x^2 - 6x + 3 = 0$ so that C04-M4 can show. C04-Q3 takes the new-root sum from NDA 2017 Sep Q24 with $3x^2 + 5x + 1 = 0$ in place of $3x^2 + 2x + 1 = 0$, whose roots are not real.`,
    t`C04-Q5 changes NDA 2025 Apr Q3 ($x^2 - kx + k = 0$, key $6$) to $2x^2 - kx + k = 0$; C04-M4 then lands on the original $6$. C04-Q2, C04-Q4 and C04-Q6 keep their PYQ's numbers.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q105" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $2x^2 - 6x + 3 = 0$, then $\alpha^3 + \beta^3$ equals:`,
      verify: { kind: "value", inputs: { a: "2", b: "-6", c: "3" }, params: { ask: "value", expr: "cube_sum" } },
      options: [
        { key: "A", text: t`$- \frac{27}{2}$`, correct: false, misconceptionId: "C04-M3", value: "-27/2" },
        { key: "B", text: t`$162$`, correct: false, misconceptionId: "C04-M4", value: "162" },
        { key: "C", text: t`$\frac{27}{2}$`, correct: true, value: "27/2" },
        { key: "D", text: t`$27$`, correct: false, misconceptionId: "C04-M1", value: "27" },
      ],
      solution: {
        steps: [
          t`Divide by $a = 2$: $s = 3$ and $p = \frac{3}{2}$.`,
          t`$\alpha^3 + \beta^3 = s^3 - 3ps$ $= 27 - 3 \times \frac{3}{2} \times 3$.`,
          t`$= 27 - \frac{27}{2} = \frac{27}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Sep Q11" },
      stem: t`Let $\alpha$ and $\beta$, with $\alpha > \beta$, be the roots of $x^2 + bx + c = 0$, where $c > 0$. If $\alpha^2 + \beta^2 - 11\alpha\beta = 0$, then $\alpha - \beta$ equals:`,
      verify: { kind: "value", inputs: { m: "11" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$\sqrt{7c}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(7)*sqrt(c)" },
        { key: "B", text: t`$\sqrt{13c}$`, correct: false, misconceptionId: "C04-M2", value: "sqrt(13)*sqrt(c)" },
        { key: "C", text: t`$9c$`, correct: false, misconceptionId: "C04-M5", value: "9*c" },
        { key: "D", text: t`$3\sqrt{c}$`, correct: true, value: "3*sqrt(c)" },
      ],
      solution: {
        steps: [
          t`Here $p = \alpha\beta = c$, and the condition says $\alpha^2 + \beta^2 = 11c$.`,
          t`$\alpha^2 + \beta^2 = s^2 - 2p$, so $s^2 = 11c + 2c = 13c$.`,
          t`$(\alpha - \beta)^2 = s^2 - 4p$ $= 13c - 4c = 9c$.`,
          t`$\alpha > \beta$, so $\alpha - \beta = \sqrt{9c} = 3\sqrt{c}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Sep Q24" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $3x^2 + 5x + 1 = 0$, then $\left(\alpha + \frac{1}{\beta}\right)$ $+ \left(\beta + \frac{1}{\alpha}\right)$ equals:`,
      verify: { kind: "value", inputs: { a: "3", b: "5", c: "1" }, params: { ask: "value", expr: "plus_recip" } },
      options: [
        { key: "A", text: t`$-10$`, correct: false, misconceptionId: "C04-M4", value: "-10" },
        { key: "B", text: t`$- \frac{34}{15}$`, correct: false, misconceptionId: "C04-M6", value: "-34/15" },
        { key: "C", text: t`$- \frac{20}{3}$`, correct: true, value: "-20/3" },
        { key: "D", text: t`$\frac{20}{3}$`, correct: false, misconceptionId: "C04-M3", value: "20/3" },
      ],
      solution: {
        steps: [
          t`Divide by $a = 3$: $s = -\frac{5}{3}$ and $p = \frac{1}{3}$.`,
          t`Regroup: $(\alpha + \beta)$ $+ \left(\frac{1}{\alpha} + \frac{1}{\beta}\right)$ $= s + \frac{s}{p}$.`,
          t`$\frac{s}{p} = -\frac{5}{3} \times 3 = -5$.`,
          t`So the total is $-\frac{5}{3} - 5 = -\frac{20}{3}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q5" },
      stem: t`The value of $k$ for which the sum of the squares of the roots of $2x^2 - 2(k - 2)x - (k + 1) = 0$ is least is:`,
      verify: { kind: "value", inputs: { a: "2", b: "-2*(k - 2)", c: "-(k + 1)" }, params: { ask: "argmin" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C04-M1", value: "2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C04-M2", value: "1" },
        { key: "C", text: t`$\frac{7}{4}$`, correct: false, misconceptionId: "C04-M4", value: "7/4" },
        { key: "D", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
      ],
      solution: {
        steps: [
          t`Divide by $a = 2$: $s = k - 2$ and $p = -\frac{k + 1}{2}$.`,
          t`$\alpha^2 + \beta^2 = s^2 - 2p$ $= (k - 2)^2 + (k + 1)$ $= k^2 - 3k + 5$.`,
          t`Complete the square: $k^2 - 3k + 5$ $= \left(k - \frac{3}{2}\right)^2 + \frac{11}{4}$.`,
          t`The square is least, $0$, at $k = \frac{3}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q3" },
      stem: t`One root of $2x^2 - kx + k = 0$ exceeds the other by $2\sqrt{3}$. The positive value of $k$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "-k", c: "k", d: "2*sqrt(3)" }, params: { ask: "diff" } },
      options: [
        { key: "A", text: t`$6 + 2\sqrt{3}$`, correct: false, misconceptionId: "C04-M5", value: "2*sqrt(3) + 6" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$2 + 2\sqrt{13}$`, correct: false, misconceptionId: "C04-M2", value: "2 + 2*sqrt(13)" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C04-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`Divide by $a = 2$: $s = \frac{k}{2}$ and $p = \frac{k}{2}$.`,
          t`$(\alpha - \beta)^2 = s^2 - 4p$ $= \frac{k^2}{4} - 2k$, and it must equal $(2\sqrt{3})^2 = 12$.`,
          t`Multiply by $4$: $k^2 - 8k - 48 = 0$, so $(k - 12)(k + 4) = 0$.`,
          t`The positive value is $k = 12$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q20" },
      stem: t`Let $\alpha$ and $\beta$, with $\alpha > \beta$, be the roots of $x^2 - 8x + q = 0$. If $\alpha^2 - \beta^2 = 16$, then $q$ equals:`,
      verify: { kind: "value", inputs: { a: "1", b: "-8", c: "q", g: "16" }, params: { ask: "sqdiff" } },
      options: [
        { key: "A", text: t`$15$`, correct: true, value: "15" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C04-M1", value: "12" },
        { key: "C", text: t`$30$`, correct: false, misconceptionId: "C04-M2", value: "30" },
        { key: "D", text: t`$\frac{31}{2}$`, correct: false, misconceptionId: "C04-M5", value: "31/2" },
      ],
      solution: {
        steps: [
          t`$s = 8$ and $p = q$; factorise $\alpha^2 - \beta^2 = (\alpha + \beta)(\alpha - \beta)$.`,
          t`So $8(\alpha - \beta) = 16$, and $\alpha - \beta = 2$.`,
          t`$(\alpha - \beta)^2 = s^2 - 4p$: $64 - 4q = 4$.`,
          t`So $q = 15$.`,
        ],
      },
    },
  ],
};
