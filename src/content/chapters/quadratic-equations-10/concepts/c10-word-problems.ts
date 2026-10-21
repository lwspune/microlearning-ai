import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`Two consecutive natural numbers multiply to $56$. Solving $x(x + 1) = 56$ gives $x = 7$ or $x = -8$. **What are the numbers?**`,
    reveal: t`$-8$ is not a natural number, so throw it out. The numbers are $7$ and $8$: $7 \times 8 = 56$.`,
  },
  explanation: {
    intuition: [
      t`A **word problem** tells a story with an unknown number in it.`,
      t`Call the unknown $x$, and write the other quantities of the story using $x$.`,
      t`The story's condition becomes an equation; in this chapter, a quadratic equation.`,
      t`A quadratic equation has two roots, but the story may allow only one of them.`,
      t`Ages, lengths, times and speeds are positive; counts of people or trees are natural numbers.`,
      t`So **reject** (throw out) the root that does not fit, then answer the question asked.`,
    ],
    formal: [
      {
        title: "Forming the equation",
        points: [
          t`Choose the unknown and say what it is: let the present age be $x$ years.`,
          t`Write every other quantity in $x$: $2$ years ago the age was $x - 2$.`,
          t`Turn the condition into an equation: their product is $84$ gives $(x - 2)(x + 3) = 84$.`,
          t`Simplify it to the form $ax^2 + bx + c = 0$.`,
          t`Then solve it by factorisation, or by the formula.`,
        ],
      },
      {
        title: "Useful relations",
        points: [
          t`Consecutive natural numbers: $x$, $x + 1$, $x + 2$, and so on.`,
          t`Consecutive even (or odd) numbers: $x$, $x + 2$, $x + 4$, and so on.`,
          t`Dividend $=$ divisor $\times$ quotient $+$ remainder.`,
          t`Time $= \frac{\text{distance}}{\text{speed}}$.`,
          t`If a tap fills a tank in $x$ hours, it fills $\frac{1}{x}$ of the tank in $1$ hour.`,
          t`In a rectangle, $\text{length}^2 + \text{breadth}^2$ $= \text{diagonal}^2$ (Pythagoras' theorem).`,
        ],
      },
      {
        title: "Keeping the root that fits",
        points: [
          t`Find both roots first; both make the equation true.`,
          t`Put each root back into every quantity of the story.`,
          t`Reject a root that makes an age, length, time or speed negative or zero.`,
          t`Reject a root that makes a count, like students or trees, a fraction.`,
          t`Usually exactly one root is left: that is the value of $x$.`,
        ],
      },
      {
        title: "Answering the question asked",
        points: [
          t`$x$ is only the name you chose; the question may ask for something else.`,
          t`If $x$ is the trees in a column, the trees in a row may be $x + 5$.`,
          t`Read the last line of the question again, and work out exactly that.`,
          t`Check the answer in the story, not only in the equation.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $460$ is divided by a natural number, the quotient is $6$ more than five times the divisor and the remainder is $1$. Find the quotient and the divisor.`,
      steps: [
        t`Let the divisor be $x$. Then the quotient is $5x + 6$.`,
        t`Dividend $=$ divisor $\times$ quotient $+$ remainder: $460 = x(5x + 6) + 1$.`,
        t`So $5x^2 + 6x - 459 = 0$. Factorise: $(x - 9)(5x + 51) = 0$.`,
        t`$x = 9$ or $x = -\frac{51}{5}$. A divisor is a natural number, so reject $-\frac{51}{5}$.`,
        t`Divisor $9$, quotient $5 \times 9 + 6 = 51$. Check: $9 \times 51 + 1 = 460$.`,
      ],
      answer: t`Divisor $9$, quotient $51$.`,
    },
    visualSpec: t`Drag $x$ along a number line; each quantity of the story (age, row, length) shows its value and turns red when it stops making sense.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Keeping the root that makes no sense in the story: a negative age, length, time or count",
      remediation: "Both roots solve the equation, but only one fits the story. Ages, lengths, times and counts are positive, so reject a root that makes any of them negative.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Stopping at $x$, or giving another quantity of the story instead of the one asked`,
      remediation: t`$x$ is only the name you gave the unknown. Read the question again and work out the quantity it asks for, such as the row, the length or the smaller tap.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Reading the roots off the factors with the wrong signs: $(x + 10)(x - 9) = 0$ taken as $x = 10$ or $x = -9$`,
      remediation: t`Each factor is zero at its own root: $x - 9 = 0$ gives $x = 9$, and $x + 10 = 0$ gives $x = -10$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    t`C10-M1 and C10-M3 use the root that makes no sense, so they need two roots that are not opposites: for $x^2 = 289$, C10-M3 gives the key.`,
    "C10-M3 assumes the quadratic factorises over the integers; draw it from stories whose rejected root is a whole number.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q3(B)(iii)" },
      stem: t`The product of Shraddha's age $2$ years ago and her age $3$ years hence is $84$. Her present age, in years, is:`,
      verify: { kind: "value", inputs: { a: "2", b: "3", P: "84" }, params: { story: "ages", ask: "x", other: "x - a" } },
      options: [
        { key: "A", text: t`$-10$`, correct: false, misconceptionId: "C10-M1", value: "-10" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C10-M2", value: "7" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C10-M3", value: "10" },
        { key: "D", text: t`$9$`, correct: true, value: "9" },
      ],
      solution: {
        steps: [
          t`Let the present age be $x$ years: $(x - 2)(x + 3) = 84$.`,
          t`$x^2 + x - 6 = 84$, so $x^2 + x - 90 = 0$.`,
          t`$(x + 10)(x - 9) = 0$, so $x = -10$ or $x = 9$.`,
          t`An age is not negative, so her present age is $9$ years.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q4(i)" },
      stem: t`Two taps together fill a tank in $6$ hours. The smaller tap alone takes $5$ hours more than the bigger tap alone. The time the smaller tap alone takes, in hours, is:`,
      verify: { kind: "value", inputs: { T: "6", d: "5" }, params: { story: "taps", ask: "x + d", other: "x" } },
      options: [
        { key: "A", text: t`$15$`, correct: true, value: "15" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C10-M1", value: "2" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C10-M2", value: "10" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C10-M3", value: "8" },
      ],
      solution: {
        steps: [
          t`Let the bigger tap take $x$ hours; the smaller takes $x + 5$.`,
          t`In $1$ hour: $\frac{1}{x} + \frac{1}{x + 5}$ $= \frac{1}{6}$, so $6(2x + 5) = x(x + 5)$.`,
          t`$x^2 - 7x - 30 = 0$, so $(x - 10)(x + 3) = 0$ and $x = 10$ or $x = -3$.`,
          t`Time is not negative, so $x = 10$. The smaller tap takes $10 + 5 = 15$ hours.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Application of quadratic equation SolvedEx.1" },
      stem: t`The base of Mr. Ratnakarrao's onion storehouse is a rectangle. Its length is $7$ m more than its breadth, and its diagonal is $1$ m more than its length. The length, in metres, is:`,
      verify: { kind: "value", inputs: { d1: "7", d2: "1" }, params: { story: "store", ask: "x + d1", other: "x" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C10-M3", value: "10" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C10-M1", value: "4" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C10-M2", value: "5" },
      ],
      solution: {
        steps: [
          t`Breadth $x$, length $x + 7$, diagonal $x + 8$ metres.`,
          t`Pythagoras: $x^2 + (x + 7)^2 = (x + 8)^2$, so $x^2 - 2x - 15 = 0$.`,
          t`$(x - 5)(x + 3) = 0$, so $x = 5$ or $x = -3$. A breadth is not negative: $x = 5$.`,
          t`The length is $5 + 7 = 12$ m. Check: $5^2 + 12^2 = 13^2$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-quadratic-equations-10/Ex 2.6 Q.3" },
      stem: t`Mr. Madhusudan's garden has $150$ orange trees in rows and columns. Each row has $5$ trees more than each column. The number of trees in each row is:`,
      verify: { kind: "value", inputs: { N: "150", d: "5" }, params: { story: "grid", ask: "x + d", other: "x" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C10-M2", value: "10" },
        { key: "B", text: t`$20$`, correct: false, misconceptionId: "C10-M3", value: "20" },
        { key: "C", text: t`$15$`, correct: true, value: "15" },
        { key: "D", text: t`$-10$`, correct: false, misconceptionId: "C10-M1", value: "-10" },
      ],
      solution: {
        steps: [
          t`Let each column have $x$ trees; each row has $x + 5$.`,
          t`$x(x + 5) = 150$, so $x^2 + 5x - 150 = 0$.`,
          t`$(x + 15)(x - 10) = 0$, so $x = -15$ or $x = 10$. A count is not negative: $x = 10$.`,
          t`Each row has $10 + 5 = 15$ trees.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2023/Q4(iii)" },
      stem: t`The sum of the squares of five consecutive natural numbers is $1455$. The largest of the five numbers is:`,
      verify: { kind: "value", inputs: { n: "5", S: "1455" }, params: { story: "consec", ask: "x + 4", other: "x" } },
      options: [
        { key: "A", text: t`$19$`, correct: true, value: "19" },
        { key: "B", text: t`$-15$`, correct: false, misconceptionId: "C10-M1", value: "-15" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C10-M2", value: "15" },
        { key: "D", text: t`$23$`, correct: false, misconceptionId: "C10-M3", value: "23" },
      ],
      solution: {
        steps: [
          t`Let the numbers be $x$, $x + 1$, $x + 2$, $x + 3$, $x + 4$.`,
          t`Squares add to $5x^2 + 20x + 30 = 1455$, so $x^2 + 4x - 285 = 0$.`,
          t`$(x + 19)(x - 15) = 0$, so $x = -19$ or $x = 15$. Natural numbers: $x = 15$.`,
          t`The numbers are $15$ to $19$, so the largest is $19$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q4(i)" },
      stem: t`Manisha wants to share $540$ bananas equally among some students. If there were $30$ more students, each would get $3$ bananas less. The number of students is:`,
      verify: { kind: "value", inputs: { N: "540", e: "30", f: "3" }, params: { story: "share", ask: "x", other: "N/x" } },
      options: [
        { key: "A", text: t`$60$`, correct: true, value: "60" },
        { key: "B", text: t`$-90$`, correct: false, misconceptionId: "C10-M1", value: "-90" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C10-M2", value: "9" },
        { key: "D", text: t`$90$`, correct: false, misconceptionId: "C10-M3", value: "90" },
      ],
      solution: {
        steps: [
          t`Let there be $x$ students: each gets $\frac{540}{x}$ bananas.`,
          t`$\frac{540}{x} - \frac{540}{x + 30}$ $= 3$, so $16200 = 3x(x + 30)$.`,
          t`$x^2 + 30x - 5400 = 0$, so $(x + 90)(x - 60) = 0$.`,
          t`$x = -90$ or $x = 60$. A count is not negative, so there are $60$ students.`,
        ],
      },
    },
  ],
};
