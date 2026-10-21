import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Solve $1001x + 999y = 3001$ and $999x + 1001y = 2999$. **Can you do it without multiplying by $999$ or $1001$?**`,
    reveal: t`Yes. Add them: $2000x + 2000y = 6000$, so $x + y = 3$. Subtract them: $2x - 2y = 2$, so $x - y = 1$. Adding these two gives $2x = 4$, so $x = 2$ and $y = 1$.`,
  },
  explanation: {
    intuition: [
      t`In $4x + 7y = 26$ and $7x + 4y = 29$, the numbers $4$ and $7$ have **swapped** places.`,
      t`Elimination would mean multiplying by $7$ and by $4$: big numbers.`,
      t`Instead, **add** the equations: $11x + 11y = 55$, so $x + y = 5$.`,
      t`Then **subtract** them: $-3x + 3y = -3$, so $x - y = 1$.`,
      t`Now add $x + y = 5$ and $x - y = 1$: $2x = 6$, so $x = 3$.`,
      t`Then $3 + y = 5$, so $y = 2$.`,
    ],
    formal: [
      {
        title: "Add and subtract",
        points: [
          t`**Swapped coefficients** means the coefficient of $x$ in one equation is the coefficient of $y$ in the other.`,
          t`The pattern is $ax + by = c$ and $bx + ay = d$.`,
          t`Adding gives $(a + b)x + (a + b)y = c + d$.`,
          t`Divide both sides by $a + b$: $x + y = \frac{c + d}{a + b}$.`,
          t`Subtracting gives $(a - b)x - (a - b)y = c - d$.`,
          t`Divide both sides by $a - b$: $x - y = \frac{c - d}{a - b}$.`,
        ],
      },
      {
        title: "Then solve the easy pair",
        points: [
          t`Now you have two short equations, $x + y = p$ and $x - y = q$.`,
          t`Add them: $2x = p + q$, so $x$ is half of $p + q$.`,
          t`Put this $x$ into $x + y = p$ to find $y$.`,
          t`Check the pair in both **given** equations, not only in the short ones.`,
        ],
      },
      {
        title: "Watch the signs",
        points: [
          t`Subtracting often gives a negative coefficient of $x$, as in $-3x + 3y = -3$.`,
          t`Divide by $-3$, not by $3$: this gives $x - y = 1$.`,
          t`Remember that $-x + y$ is $y - x$, the opposite of $x - y$.`,
          t`With minus signs, as in $5x - 3y = 9$ and $3x - 5y = -1$, adding gives $8x - 8y = 8$.`,
          t`That is $x - y = 1$; here subtracting gives $2x + 2y = 10$, so $x + y = 5$.`,
          t`So always read the combined equation to see which one you got.`,
        ],
      },
      {
        title: "Inside other equations",
        points: [
          t`Sometimes the question puts new letters for you, such as $a = \frac{1}{x}$ and $b = \frac{1}{y}$.`,
          t`The equations in $a$ and $b$ may also have swapped coefficients.`,
          t`Add and subtract them as before to find $a + b$ and $a - b$, then $a$ and $b$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $23x + 29y = 98$ ... (I) and $29x + 23y = 110$ ... (II).`,
      steps: [
        t`The coefficients $23$ and $29$ are swapped, so add and subtract the equations.`,
        t`Adding: $52x + 52y = 208$. Divide by $52$: $x + y = 4$ ... (III).`,
        t`Subtracting (II) from (I): $-6x + 6y = -12$. Divide by $-6$: $x - y = 2$ ... (IV).`,
        t`Adding (III) and (IV): $2x = 6$, so $x = 3$.`,
        t`From (III): $3 + y = 4$, so $y = 1$.`,
      ],
      answer: t`$(x, y) = (3, 1)$. Check: $69 + 29 = 98$ and $87 + 23 = 110$.`,
    },
    visualSpec: t`Two equation cards with swapped coefficients: drag one onto the other to add or subtract, and watch the result collapse to $x + y$ or $x - y$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Drops the minus sign when dividing the subtracted equation: reads $-3x + 3y = 6$ as $x - y = 2$.`,
      remediation: t`Divide by the coefficient of $x$ with its sign: $-3x + 3y = 6$ gives $x - y = -2$. Remember $-x + y$ is the opposite of $x - y$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Thinks adding always gives $x + y$ and subtracting always gives $x - y$, or mixes up the two results.`,
      remediation: t`Read the combined equation: equal coefficients, like $8x + 8y$, give $x + y$; opposite ones, like $8x - 8y$, give $x - y$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`After adding, forgets to divide by the common coefficient: reads $11x + 11y = 55$ as $x + y = 55$.`,
      remediation: t`$11x + 11y = 55$ means $11(x + y) = 55$. Divide both sides by $11$: $x + y = 5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`From $x + y = p$ and $x - y = q$, takes $x = p + q$, forgetting that adding gives $2x$.`,
      remediation: t`Adding $x + y = p$ and $x - y = q$ gives $2x = p + q$, so $x$ is half of $p + q$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Adds the left sides of the equations but subtracts the right sides (or the reverse).",
      remediation: "Whatever you do to the left sides, do the same to the right sides: add both, or subtract both.",
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C02-M1 changes the sign of the quantity that comes from subtracting, and C02-M2 swaps $x + y$ with $x - y$; both give the key when that quantity is $0$ (or $y = 0$), so draw items where $x - y \ne 0$ and $y \ne 0$.`,
    t`C02-M3 applies only to the quantity from adding, C02-M4 only to a full solution, C02-M5 only to $x + y$ or $x - y$.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2019/Q1(A)(iii)" },
      stem: t`If $3x + 5y = 9$ and $5x + 3y = 7$, find the value of $x + y$.`,
      verify: { kind: "value", inputs: { a1: "3", b1: "5", c1: "9", a2: "5", b2: "3", c2: "7" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C02-M2", value: "-1" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C02-M3", value: "16" },
        { key: "D", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C02-M5", value: "1/4" },
      ],
      solution: {
        steps: [
          t`The coefficients $3$ and $5$ are swapped, so add the equations.`,
          t`Adding: $8x + 8y = 16$.`,
          t`Divide by $8$: $x + y = 2$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2018/Q2(iv)" },
      stem: t`Find the value of $x - y$ if $6x + 5y = 17$ and $5x + 6y = 13$.`,
      verify: { kind: "value", inputs: { a1: "6", b1: "5", c1: "17", a2: "5", b2: "6", c2: "13" }, params: { ask: "diff" } },
      options: [
        { key: "A", text: t`$-4$`, correct: false, misconceptionId: "C02-M1", value: "-4" },
        { key: "B", text: t`$\frac{30}{11}$`, correct: false, misconceptionId: "C02-M2", value: "30/11" },
        { key: "C", text: t`$30$`, correct: false, misconceptionId: "C02-M5", value: "30" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`The coefficients $6$ and $5$ are swapped; $x - y$ comes from subtracting.`,
          t`Subtracting the second from the first: $6x - 5x + 5y - 6y = 17 - 13$.`,
          t`So $x - y = 4$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q2(B)(v)" },
      stem: t`If $49x - 57y = 172$ and $57x - 49y = 252$, find the value of $x + y$.`,
      verify: { kind: "value", inputs: { a1: "49", b1: "-57", c1: "172", a2: "57", b2: "-49", c2: "252" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$-53$`, correct: false, misconceptionId: "C02-M5", value: "-53" },
        { key: "B", text: t`$10$`, correct: true, value: "10" },
        { key: "C", text: t`$-10$`, correct: false, misconceptionId: "C02-M1", value: "-10" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C02-M2", value: "4" },
      ],
      solution: {
        steps: [
          t`Adding gives $106x - 106y = 424$: that is $x - y = 4$, not $x + y$.`,
          t`Subtracting the first from the second: $8x + 8y = 80$.`,
          t`Divide by $8$: $x + y = 10$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.1 Q.2(7)" },
      stem: t`Solve the simultaneous equations $99x + 101y = 499$ and $101x + 99y = 501$.`,
      verify: { kind: "value", inputs: { a1: "99", b1: "101", c1: "499", a2: "101", b2: "99", c2: "501" }, params: { ask: "pair" } },
      options: [
        { key: "A", text: t`$x = 6,\ y = -1$`, correct: false, misconceptionId: "C02-M4", value: "6 - I" },
        { key: "B", text: t`$x = 3,\ y = 2$`, correct: true, value: "3 + 2*I" },
        { key: "C", text: t`$x = 2,\ y = 3$`, correct: false, misconceptionId: "C02-M1", value: "2 + 3*I" },
        { key: "D", text: t`$x = 3,\ y = -2$`, correct: false, misconceptionId: "C02-M2", value: "3 - 2*I" },
      ],
      solution: {
        steps: [
          t`Adding: $200x + 200y = 1000$, so $x + y = 5$.`,
          t`Subtracting the second from the first: $-2x + 2y = -2$. Divide by $-2$: $x - y = 1$.`,
          t`Adding these: $2x = 6$, so $x = 3$; then $3 + y = 5$, so $y = 2$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.4 Q.1(3)" },
      stem: t`To solve $\dfrac{27}{x - 2} + \dfrac{31}{y + 3} = 85$ and $\dfrac{31}{x - 2} + \dfrac{27}{y + 3} = 89$, put $a = \dfrac{1}{x - 2}$ and $b = \dfrac{1}{y + 3}$. This gives $27a + 31b = 85$ and $31a + 27b = 89$. Find $(a, b)$.`,
      verify: { kind: "value", inputs: { a1: "27", b1: "31", c1: "85", a2: "31", b2: "27", c2: "89" }, params: { ask: "tuple" } },
      options: [
        { key: "A", text: t`$(4, -1)$`, correct: false, misconceptionId: "C02-M4", value: "(4, -1)" },
        { key: "B", text: t`$(2, 1)$`, correct: true, value: "(2, 1)" },
        { key: "C", text: t`$(1, 2)$`, correct: false, misconceptionId: "C02-M1", value: "(1, 2)" },
        { key: "D", text: t`$(2, -1)$`, correct: false, misconceptionId: "C02-M2", value: "(2, -1)" },
      ],
      solution: {
        steps: [
          t`Adding: $58a + 58b = 174$, so $a + b = 3$.`,
          t`Subtracting the first from the second: $4a - 4b = 4$, so $a - b = 1$.`,
          t`Adding these: $2a = 4$, so $a = 2$; then $b = 1$. So $(a, b) = (2, 1)$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q1(B)(i)" },
      stem: t`If $17x + 15y = 11$ and $15x + 17y = 21$, find the value of $x - y$.`,
      verify: { kind: "value", inputs: { a1: "17", b1: "15", c1: "11", a2: "15", b2: "17", c2: "21" }, params: { ask: "diff" } },
      options: [
        { key: "A", text: t`$-5$`, correct: true, value: "-5" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C02-M1", value: "5" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C02-M5", value: "16" },
      ],
      solution: {
        steps: [
          t`The coefficients $17$ and $15$ are swapped; $x - y$ comes from subtracting.`,
          t`Subtracting the second from the first: $2x - 2y = -10$.`,
          t`Divide by $2$: $x - y = -5$.`,
        ],
      },
    },
  ],
};
