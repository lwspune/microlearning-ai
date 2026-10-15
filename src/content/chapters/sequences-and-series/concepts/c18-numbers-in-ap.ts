import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c18: Concept = {
  id: "C18",
  status: "approved",
  hook: {
    prompt: t`The three angles of a triangle are in A.P. You are told nothing else. **Can you name one of them?**`,
    reveal: t`Yes: the middle one is $60^\circ$. Write the angles as $a - d, a, a + d$. Their sum is $3a$: the $d$ cancels. The angles of a triangle add to $180^\circ$, so $3a = 180^\circ$ and $a = 60^\circ$, whatever $d$ is.`,
  },
  explanation: {
    intuition: [
      t`Recall: in an **A.P.** each term is the one before it plus the **common difference** $d$.`,
      t`So a term's **neighbours**, the terms just before and just after it, are that term minus $d$ and plus $d$.`,
      t`Write three numbers in A.P. around the middle one, $a$: they are $a - d, a, a + d$.`,
      t`Their **sum**, all three added together, is just $3a$, because the $-d$ and $+d$ cancel.`,
      t`So a condition on the sum gives $a$ at once, and the other condition gives $d$.`,
      t`Four numbers have no middle term, so centre them on $a$ the same way: $a - 3d, a - d, a + d, a + 3d$.`,
    ],
    formal: [
      {
        title: "Three numbers in A.P.",
        points: [
          t`Take three numbers in A.P. as $a - d, a, a + d$: each one plus $d$ gives the next.`,
          t`Their sum is $3a$, so the sum alone gives the middle number $a$.`,
          t`Their **product**, all three multiplied together, is $(a - d)\,a\,(a + d) = a(a^2 - d^2)$.`,
          t`Multiply $a$ into both terms of the bracket: $a(a^2 - d^2) = a^3 - ad^2$.`,
          t`The **sum of their squares**, each number squared and then added, is $3a^2 + 2d^2$: the $2ad$ terms cancel.`,
          t`Put in $a$, solve for $d$, then write out all three numbers.`,
        ],
        figure: {
          alt: "Three numbers in a row: a − d, a and a + d. An arrow labelled + d runs from a − d to a, and another from a to a + d: each number plus d gives the next, with a in the middle. Below, their sum is 3a.",
          axes: "none",
          view: { x: [-1, 7], y: [-1.6, 1.4] },
          elements: [
            { kind: "point", at: [0, 0], label: "a − d", labelAt: "s", step: 1 },
            { kind: "point", at: [3, 0], label: "a", labelAt: "s", step: 1 },
            { kind: "point", at: [6, 0], label: "a + d", labelAt: "s", step: 1 },
            { kind: "vector", from: [0.3, 0.35], to: [2.7, 0.35], tone: "good", step: 1 },
            { kind: "label", at: [1.5, 0.35], label: "+ d", labelAt: "n", tone: "good", step: 1 },
            { kind: "vector", from: [3.3, 0.35], to: [5.7, 0.35], tone: "good", step: 1 },
            { kind: "label", at: [4.5, 0.35], label: "+ d", labelAt: "n", tone: "good", step: 1 },
            { kind: "label", at: [3, -1], label: "sum = 3a", labelAt: "s", tone: "accent", step: 2 },
          ],
        },
      },
      {
        title: "Two values of d",
        points: [
          t`The equation for $d$ contains $d^2$, so it has two **roots**, two values that solve it: $d$ and $-d$.`,
          t`A positive $d$ lists the numbers in increasing order; a negative $d$ lists them in decreasing order.`,
          t`For $a = 7$, $d = 2$ gives $5, 7, 9$.`,
          t`And $d = -2$ gives $9, 7, 5$: the same numbers in reverse order.`,
          t`So take the root that matches the order the question asks for.`,
        ],
        figure: {
          alt: "The numbers 5, 7 and 9 in a row. Above, arrows labelled + 2 run left to right: d = 2 lists them as 5, 7, 9. Below, arrows labelled − 2 run right to left: d = −2 lists the same numbers as 9, 7, 5.",
          axes: "none",
          view: { x: [-1, 7], y: [-1.8, 1.4] },
          elements: [
            { kind: "point", at: [0, 0], label: "5", labelAt: "s", step: 3 },
            { kind: "point", at: [3, 0], label: "7", labelAt: "s", step: 3 },
            { kind: "point", at: [6, 0], label: "9", labelAt: "s", step: 3 },
            { kind: "vector", from: [0.3, 0.35], to: [2.7, 0.35], tone: "good", step: 3 },
            { kind: "label", at: [1.5, 0.35], label: "+ 2", labelAt: "n", tone: "good", step: 3 },
            { kind: "vector", from: [3.3, 0.35], to: [5.7, 0.35], tone: "good", step: 3 },
            { kind: "label", at: [4.5, 0.35], label: "+ 2", labelAt: "n", tone: "good", step: 3 },
            { kind: "vector", from: [5.7, -0.9], to: [3.3, -0.9], tone: "muted", step: 4 },
            { kind: "label", at: [4.5, -0.9], label: "− 2", labelAt: "s", tone: "muted", step: 4 },
            { kind: "vector", from: [2.7, -0.9], to: [0.3, -0.9], tone: "muted", step: 4 },
            { kind: "label", at: [1.5, -0.9], label: "− 2", labelAt: "s", tone: "muted", step: 4 },
          ],
        },
      },
      {
        title: "Four numbers in A.P.",
        points: [
          t`Four numbers have no middle number, so centre them on $a$, the point halfway between the middle two.`,
          t`Take them as $a - 3d, a - d, a + d, a + 3d$.`,
          t`Their sum is $4a$, so the sum fixes $a$ again.`,
          t`From $a - 3d$ to $a - d$ you add $2d$, and the same at each step.`,
          t`So the common difference of the four numbers is $2d$; $d$ is only half a step, from $a - d$ to $a$.`,
          t`The sum of their squares is $4a^2 + 20d^2$.`,
        ],
        figure: {
          alt: "Four numbers in a row: a − 3d, a − d, a + d and a + 3d, centred on a hollow point a halfway between the middle two. Arrows labelled + 2d run from each number to the next: the common difference of the four is 2d. Below, the gap from a − d to a is marked d, only half a step.",
          axes: "none",
          view: { x: [-1, 10], y: [-1.6, 1.4] },
          elements: [
            { kind: "point", at: [4.5, 0], hollow: true, label: "a", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [0, 0], label: "a − 3d", labelAt: "s", step: 2 },
            { kind: "point", at: [3, 0], label: "a − d", labelAt: "s", step: 2 },
            { kind: "point", at: [6, 0], label: "a + d", labelAt: "s", step: 2 },
            { kind: "point", at: [9, 0], label: "a + 3d", labelAt: "s", step: 2 },
            { kind: "vector", from: [0.3, 0.35], to: [2.7, 0.35], tone: "good", step: 4 },
            { kind: "label", at: [1.5, 0.35], label: "+ 2d", labelAt: "n", tone: "good", step: 4 },
            { kind: "vector", from: [3.3, 0.35], to: [5.7, 0.35], tone: "good", step: 4 },
            { kind: "label", at: [4.5, 0.35], label: "+ 2d", labelAt: "n", tone: "good", step: 4 },
            { kind: "vector", from: [6.3, 0.35], to: [8.7, 0.35], tone: "good", step: 4 },
            { kind: "label", at: [7.5, 0.35], label: "+ 2d", labelAt: "n", tone: "good", step: 4 },
            { kind: "segment", from: [3, -1], to: [4.5, -1], tone: "muted", label: "d", labelAt: "s", step: 5 },
          ],
        },
      },
      {
        title: "Condition for three in A.P.",
        points: [
          t`Let $a, b, c$ be **consecutive** terms of an A.P.: one straight after another.`,
          t`The two gaps are equal: $b - a = c - b$.`,
          t`Add $a + b$ to both sides: $2b = a + c$.`,
          t`So $b = \frac{a + c}{2}$, the **arithmetic mean**, or average, of $a$ and $c$.`,
          t`Here $b$ is the middle term: it is the one you double.`,
        ],
        figure: {
          alt: "Three consecutive terms a, b and c in a row, b in the middle. The gap from a to b is labelled b − a and the gap from b to c is labelled c − b: the two gaps are equal.",
          axes: "none",
          view: { x: [-1, 7], y: [-1, 1.4] },
          elements: [
            { kind: "point", at: [0, 0], label: "a", labelAt: "s", step: 1 },
            { kind: "point", at: [3, 0], label: "b", labelAt: "s", step: 1 },
            { kind: "point", at: [6, 0], label: "c", labelAt: "s", step: 1 },
            { kind: "vector", from: [0.3, 0.35], to: [2.7, 0.35], tone: "good", step: 2 },
            { kind: "label", at: [1.5, 0.35], label: "b − a", labelAt: "n", tone: "good", step: 2 },
            { kind: "vector", from: [3.3, 0.35], to: [5.7, 0.35], tone: "good", step: 2 },
            { kind: "label", at: [4.5, 0.35], label: "c − b", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Finding an unknown k",
        points: [
          t`When the terms contain an unknown $k$, put them into $2b = a + c$.`,
          t`For $k, 2k - 1, 2k + 1$: $2(2k - 1) = k + (2k + 1)$.`,
          t`Multiply every term in the bracket by $2$: $4k - 2 = 3k + 1$.`,
          t`So $k = 3$, and the terms are $3, 5, 7$.`,
          t`Check: both gaps, $5 - 3$ and $7 - 5$, are $2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find three numbers in A.P. whose sum is $21$ and the sum of whose squares is $155$.`,
      steps: [
        t`Take the numbers as $a - d, a, a + d$. Their sum is $3a = 21$, so $a = 7$.`,
        t`The squares: $(7 - d)^2 + 49 + (7 + d)^2 = 155$. The $14d$ terms cancel: $147 + 2d^2 = 155$.`,
        t`So $2d^2 = 8$, $d^2 = 4$, and $d = 2$ or $d = -2$.`,
        t`$d = 2$ gives $5, 7, 9$ and $d = -2$ gives $9, 7, 5$: the same numbers. Check: $5 + 7 + 9 = 21$ and $25 + 49 + 81 = 155$.`,
      ],
      answer: t`The numbers are $5, 7, 9$.`,
      figure: {
        alt: "The middle number a = 7, found from the sum. Then the numbers 5 and 9 on either side, with arrows labelled + 2 from 5 to 7 and from 7 to 9.",
        axes: "none",
        view: { x: [-1, 7], y: [-1, 1.4] },
        elements: [
          { kind: "point", at: [3, 0], label: "a = 7", labelAt: "s", step: 1 },
          { kind: "point", at: [0, 0], label: "5", labelAt: "s", step: 4 },
          { kind: "point", at: [6, 0], label: "9", labelAt: "s", step: 4 },
          { kind: "vector", from: [0.3, 0.35], to: [2.7, 0.35], tone: "good", step: 4 },
          { kind: "label", at: [1.5, 0.35], label: "+ 2", labelAt: "n", tone: "good", step: 4 },
          { kind: "vector", from: [3.3, 0.35], to: [5.7, 0.35], tone: "good", step: 4 },
          { kind: "label", at: [4.5, 0.35], label: "+ 2", labelAt: "n", tone: "good", step: 4 },
        ],
      },
    },
    visualSpec: t`A slider for $d$ spreads $a - d$ and $a + d$ apart around a fixed middle $a$, while a readout shows their sum staying at $3a$ and their product changing.`,
  },
  misconceptions: [
    {
      id: "C18-M1",
      mistake: "Takes d as the common difference of a − 3d, a − d, a + d, a + 3d (it is 2d)",
      remediation: t`From $a - 3d$ to $a - d$ you add $2d$, so the common difference of the four numbers is $2d$, not $d$. Add $2d$ to get the next term.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C18-M2",
      mistake: "Drops the 2 in 2b = a + c: takes the middle term as the sum of its neighbours",
      remediation: t`The middle term is the **average** of its neighbours, not their sum: $b - a = c - b$ gives $2b = a + c$, so $b = \frac{a + c}{2}$.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C18-M3",
      mistake: "Loses track of the middle term: takes a of a − d, a, a + d as the first number (a, a + 2d, a + 4d, a + 6d for four), or doubles the first term in 2b = a + c",
      remediation: t`In $a - d, a, a + d$ the number $a$ is the **middle** one, and the first is $a - d$. In $2b = a + c$, $b$ is the middle term, so it is the one you double.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C18-M4",
      mistake: "Ignores the order: takes the root of d that lists the numbers the other way round (d < 0 for increasing numbers)",
      remediation: t`$d$ and $-d$ give the same numbers in opposite orders. Numbers in increasing order need $d > 0$; numbers in decreasing order need $d < 0$.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C18-M5",
      mistake: "Multiplies a bracket by its first term only: a(a² − d²) becomes a³ − d², and 2(3k − 1) becomes 6k − 1",
      remediation: t`Multiply **every** term inside a bracket: $a(a^2 - d^2) = a^3 - ad^2$, and $2(pk + q) = 2pk + 2q$.`,
      fallback: { kind: "ext", topic: "expanding brackets" },
    },
  ],
  engineNotes: [
    "C18-M1 is modelled only on four-number items, C18-M2 only on items that find k, and C18-M5 not on four-number items (a sum of squares has no bracket to slip on).",
    "C18-M4 needs a stem that fixes the order and asks for a term by position (the first number, the term after the fourth): the smallest or largest number is the same in either order.",
    "C18-M3's four-number model takes the numbers as a, a + 2d, a + 4d, a + 6d with the true d, so it differs from C18-M1.",
  ],
  items: [
    {
      id: "C18-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q3(B)(iv)" },
      stem: t`Three numbers in A.P., in increasing order, have sum $27$ and product $504$. The first of the three numbers is:`,
      verify: { kind: "value", inputs: { S: "27", P: "504" }, params: { n: "3", order: "inc" } },
      options: [
        { key: "A", text: t`$-6$`, correct: false, misconceptionId: "C18-M5", value: "-6" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C18-M3", value: "9" },
        { key: "D", text: t`$14$`, correct: false, misconceptionId: "C18-M4", value: "14" },
      ],
      solution: {
        steps: [
          t`Take $a - d, a, a + d$: the sum is $3a = 27$, so $a = 9$.`,
          t`The product: $9(81 - d^2) = 504$, so $81 - d^2 = 56$, $d^2 = 25$ and $d = \pm 5$.`,
          t`Increasing order needs $d = 5$: the numbers are $4, 9, 14$, so the first is $4$. Check: $4 \times 9 \times 14 = 504$.`,
        ],
      },
    },
    {
      id: "C18-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q3(A)(i)" },
      stem: t`Three numbers in A.P., in decreasing order, have sum $12$ and product $28$. The first of the three numbers is:`,
      verify: { kind: "value", inputs: { S: "12", P: "28" }, params: { n: "3", order: "dec" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C18-M3", value: "4" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C18-M4", value: "1" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C18-M5", value: "10" },
        { key: "D", text: t`$7$`, correct: true, value: "7" },
      ],
      solution: {
        steps: [
          t`Take $a - d, a, a + d$: the sum is $3a = 12$, so $a = 4$.`,
          t`The product: $4(16 - d^2) = 28$, so $16 - d^2 = 7$, $d^2 = 9$ and $d = \pm 3$.`,
          t`Decreasing order needs $d = -3$: the numbers are $7, 4, 1$, so the first is $7$. Check: $7 + 4 + 1 = 12$ and $7 \times 4 \times 1 = 28$.`,
        ],
      },
    },
    {
      id: "C18-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q3(B)(iv)" },
      stem: t`Four numbers in A.P., in increasing order, have sum $20$, and the sum of their squares is $120$. The term of this A.P. that comes after the fourth number is:`,
      verify: { kind: "value", inputs: { S: "20", Q: "120" }, params: { n: "4" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C18-M1", value: "9" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C18-M3", value: "13" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C18-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`Take $a - 3d, a - d, a + d, a + 3d$: the sum is $4a = 20$, so $a = 5$.`,
          t`The squares add to $4a^2 + 20d^2 = 100 + 20d^2 = 120$, so $d^2 = 1$; increasing order needs $d = 1$.`,
          t`The numbers are $2, 4, 6, 8$, with common difference $2d = 2$.`,
          t`The next term is $8 + 2 = 10$.`,
        ],
      },
    },
    {
      id: "C18-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q3(A)(i)" },
      stem: t`Four numbers in A.P., in increasing order, have sum $28$, and the sum of their squares is $216$. The term of this A.P. that comes after the fourth number is:`,
      verify: { kind: "value", inputs: { S: "28", Q: "216" }, params: { n: "4" } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$11$`, correct: false, misconceptionId: "C18-M1", value: "11" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C18-M3", value: "15" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C18-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`Take $a - 3d, a - d, a + d, a + 3d$: the sum is $4a = 28$, so $a = 7$.`,
          t`The squares add to $4a^2 + 20d^2 = 196 + 20d^2 = 216$, so $d^2 = 1$; increasing order needs $d = 1$.`,
          t`The numbers are $4, 6, 8, 10$, with common difference $2d = 2$.`,
          t`The next term is $10 + 2 = 12$.`,
        ],
      },
    },
    {
      id: "C18-Q5",
      source: { kind: "pyqvault-practice", ref: "ncert-10/c10ArithmeticProgressions/Ex 5.2 Q3 (i)" },
      stem: t`$2$, $3k - 1$, $26$ are consecutive terms of an A.P. The value of $k$ is:`,
      verify: { kind: "value", inputs: { t1: "2", t2: "3*k - 1", t3: "26" }, params: { n: "k" } },
      options: [
        { key: "A", text: t`$\frac{29}{6}$`, correct: false, misconceptionId: "C18-M5", value: "29/6" },
        { key: "B", text: t`$5$`, correct: true, value: "5" },
        { key: "C", text: t`$\frac{29}{3}$`, correct: false, misconceptionId: "C18-M2", value: "29/3" },
        { key: "D", text: t`$-7$`, correct: false, misconceptionId: "C18-M3", value: "-7" },
      ],
      solution: {
        steps: [
          t`The middle term doubled equals the sum of its neighbours: $2(3k - 1) = 2 + 26$.`,
          t`So $6k - 2 = 28$, $6k = 30$ and $k = 5$. The terms are $2, 14, 26$, with common difference $12$.`,
        ],
      },
    },
    {
      id: "C18-Q6",
      source: { kind: "pyqvault-practice", ref: "ncert-10/c10ArithmeticProgressions/Ex 5.2 Q3 (i)" },
      stem: t`$k + 1$, $2k + 3$, $4k - 1$ are consecutive terms of an A.P. The value of $k$ is:`,
      verify: { kind: "value", inputs: { t1: "k + 1", t2: "2*k + 3", t3: "4*k - 1" }, params: { n: "k" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C18-M2", value: "1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C18-M3", value: "0" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C18-M5", value: "3" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`The middle term doubled equals the sum of its neighbours: $2(2k + 3) = (k + 1) + (4k - 1)$, that is $4k + 6 = 5k$.`,
          t`So $k = 6$, and the terms are $7, 15, 23$, with common difference $8$.`,
        ],
      },
    },
  ],
};
