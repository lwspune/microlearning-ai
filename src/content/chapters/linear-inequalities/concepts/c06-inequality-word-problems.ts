import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A student scored $62$ and $48$ in two terminal exams. He wants an average of **at least** $60$ after the annual exam. **Is $65$ in the annual exam enough?**`,
    reveal: t`No. Let $x$ be the annual mark: $\frac{62 + 48 + x}{3} \ge 60$. Multiply by $3$: $110 + x \ge 180$, so $x \ge 70$. With $65$ the average is $\frac{175}{3} \approx 58.3$. He needs a minimum of $70$ marks.`,
  },
  explanation: {
    intuition: [
      t`A word problem hides an inequality in a phrase such as **at least** or **less than**.`,
      t`**At least** $60$ means $60$ or more, so $60$ itself is allowed: $\ge 60$.`,
      t`**At most** $60$, or **not more than** $60$, means $60$ or less: $\le 60$.`,
      t`**More than** or **above** $60$ is $> 60$; **less than** or **below** $60$ is $< 60$.`,
      t`**Between** $30$ and $35$ gives a double inequality: $30 < x < 35$.`,
      t`Solve it, then answer the question asked, in its units, keeping only values the story allows.`,
    ],
    formal: [
      {
        title: "Words into symbols",
        points: [
          t`**At least** $a$, **not less than** $a$, **$a$ or more**: $x \ge a$.`,
          t`**At most** $a$, **not more than** $a$, **$a$ or less**: $x \le a$.`,
          t`**More than**, **above**, **exceeds** $a$: $x > a$; the value $a$ itself fails.`,
          t`**Less than**, **below** $a$: $x < a$.`,
          t`Careful: **least** sounds like less, but at least $60$ means $60$ or **more**.`,
        ],
      },
      {
        title: "The method",
        points: [
          t`**Step 1.** Let $x$ be the quantity the question asks for, with its unit.`,
          t`**Step 2.** Write every other quantity in terms of $x$.`,
          t`**Step 3.** Turn each condition into an inequality, phrase by phrase.`,
          t`**Step 4.** Solve each one; if there are two, keep the values that satisfy both.`,
          t`**Step 5.** Keep only values the story allows: positive lengths, whole numbers, odd numbers.`,
          t`**Step 6.** Answer in words and units: a minimum mark, a range in cm, the list of pairs.`,
        ],
      },
      {
        title: "Averages",
        points: [
          t`The **average** of some marks is their total divided by **how many** marks there are.`,
          t`The unknown mark $x$ counts too: with $3$ tests, divide the total of all $3$ by $3$.`,
          t`Scores $70$ and $80$, need an average of at least $75$: $\frac{70 + 80 + x}{3} \ge 75$.`,
          t`Multiply by the positive number $3$: $150 + x \ge 225$, so $x \ge 75$.`,
          t`Don't average the known marks first and then average that with $x$: it weights $x$ too heavily.`,
        ],
      },
      {
        title: "Consecutive odd or even numbers",
        points: [
          t`**Consecutive** odd numbers, like $11$ and $13$, differ by $2$: call them $x$ and $x + 2$.`,
          t`Consecutive even numbers, like $6$ and $8$, are also $x$ and $x + 2$.`,
          t`**Both** less than $20$: the larger, $x + 2$, must be less than $20$.`,
          t`Solve for $x$, then keep only the odd (or even) whole numbers in that range.`,
          t`Answer with the pairs: for $x = 11$, the pair is $(11, 13)$.`,
        ],
      },
      {
        title: "Lengths and differences",
        points: [
          t`**$3$ cm longer** than $x$ is $x + 3$; **$2$ cm shorter** than $3x$ is $3x - 2$.`,
          t`Check with a number: if $3x = 30$, a side $2$ cm shorter is $28$, which is $3x - 2$.`,
          t`$A$ is **at least $5$ cm longer** than $B$: $A \ge B + 5$.`,
          t`Pieces cut from one board: their total is **at most** the board's length.`,
          t`A length must be positive, so keep $x > 0$ with the answer.`,
        ],
      },
      {
        title: "Formulas and mixtures",
        points: [
          t`Put the formula into the condition, then solve for the unknown.`,
          t`For temperatures, $\text{F} = \frac{9}{5}\text{C} + 32$; undo $\times \frac{9}{5}$ by $\times \frac{5}{9}$.`,
          t`$\text{F} < 50$ gives $\frac{9}{5}\text{C} < 18$, so $\text{C} < 10$.`,
          t`In a mixture, the acid is a percentage of the **whole new volume**, old plus added.`,
          t`A range such as more than $15\%$ but less than $18\%$ gives two inequalities to solve.`,
        ],
      },
    ],
    worked: {
      prompt: t`A manufacturer has $600$ litres of a $12\%$ acid solution. How many litres of a $30\%$ acid solution must be added so that the mixture is **more than** $15\%$ but **less than** $18\%$ acid?`,
      steps: [
        t`Let $x$ litres of the $30\%$ solution be added. The mixture is $(600 + x)$ litres, with $0.3x + 72$ litres of acid.`,
        t`More than $15\%$: $0.3x + 72 > 0.15(600 + x)$. So $0.3x + 72 > 90 + 0.15x$, giving $0.15x > 18$: $x > 120$.`,
        t`Less than $18\%$: $0.3x + 72 < 0.18(600 + x)$. So $0.3x + 72 < 108 + 0.18x$, giving $0.12x < 36$: $x < 300$.`,
        t`Both must hold: $120 < x < 300$.`,
      ],
      answer: t`More than $120$ litres but less than $300$ litres of the $30\%$ solution.`,
    },
    visualSpec: t`A slider for the unknown mark shows the average changing and turns green once the average reaches the target.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Reads 'at least' as strictly greater (>), so the boundary value is lost",
      remediation: t`**At least** $a$ means $a$ or more, so $a$ itself is allowed: use $\ge a$. Keep $>$ for **more than** or **above**.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M2",
      mistake: "Reads 'at least' or 'not more than' the wrong way round, because 'least' sounds like 'less'",
      remediation: t`**At least** $a$ means $a$ or more ($\ge a$), and **not more than** $a$ means $a$ or less ($\le a$). Test a value: does $a + 1$ meet the condition?`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M3",
      mistake: "Averages the known marks first, then averages that with the new mark",
      remediation: t`The average is the total of **all** the marks divided by how many there are, the unknown one included. With $5$ exams, divide the total of all $5$ by $5$.`,
      fallback: { kind: "ext", topic: "mean of a set of numbers" },
    },
    {
      id: "C06-M4",
      mistake: "Puts a stated difference on the wrong side ('2 cm shorter than 3x' as 3x + 2)",
      remediation: t`$2$ cm **shorter** than $3x$ is $3x - 2$, and $A$ at least $5$ longer than $B$ is $A \ge B + 5$. Check with a number before you solve.`,
      fallback: { kind: "ext", topic: "writing expressions from words" },
    },
    {
      id: "C06-M5",
      mistake: "Keeps every whole number in the range, not only the odd (or even) ones",
      remediation: t`Consecutive odd numbers are both odd, so $x$ must be odd. After solving, keep only the odd (or even) values of $x$ in the range.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M6",
      mistake: "Undoes the factor 9/5 by multiplying by 9/5 again, instead of by 5/9",
      remediation: t`To undo $\times \frac{9}{5}$, multiply by $\frac{5}{9}$: from $\frac{9}{5}\text{C} \le k$ you get $\text{C} \le \frac{5}{9}k$.`,
      fallback: { kind: "ext", topic: "rearranging formulas" },
    },
  ],
  engineNotes: [
    "C06-M1 and C06-M2 differ from the key only when the boundary value can actually occur. In pairs questions the bound must be a reachable sum: the book's Ex 5.1 Q23 ('sum more than 11') gives the key under C06-M1, so C06-Q2 uses 'at least 12'.",
    "C06-M3 gives the key when the known marks already average exactly the target.",
    t`C06-M5 gives the key when no integer of the wrong parity lies in the range of $x$.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q22" },
      stem: t`To get Grade A, Sunita needs an average of **at least** $90$ marks over five examinations, each out of $100$. Her first four marks are $87$, $92$, $94$ and $95$. Which marks $x$ in the fifth examination get her Grade A?`,
      verify: { kind: "value", inputs: { known: "(87, 92, 94, 95)", A: "90", top: "100" }, params: { t: "avg" } },
      options: [
        { key: "A", text: t`$82 < x \le 100$`, correct: false, misconceptionId: "C06-M1", value: "Interval.Lopen(82, 100)" },
        { key: "B", text: t`$0 \le x \le 82$`, correct: false, misconceptionId: "C06-M2", value: "Interval(0, 82)" },
        { key: "C", text: t`$88 \le x \le 100$`, correct: false, misconceptionId: "C06-M3", value: "Interval(88, 100)" },
        { key: "D", text: t`$82 \le x \le 100$`, correct: true, value: "Interval(82, 100)" },
      ],
      solution: {
        steps: [
          t`The average of all five marks is at least $90$: $\frac{87 + 92 + 94 + 95 + x}{5} \ge 90$.`,
          t`The four marks total $368$. Multiply by $5$: $368 + x \ge 450$, so $x \ge 82$.`,
          t`A mark is out of $100$, so $82 \le x \le 100$. Her minimum is $82$ marks.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q23" },
      stem: t`Find all pairs of consecutive odd positive integers, both of which are smaller than $10$, such that their sum is **at least** $12$.`,
      verify: { kind: "value", inputs: { par: "1", cap: "10", s: "12" }, params: { t: "pairs" } },
      options: [
        { key: "A", text: t`$(5, 7)$ and $(7, 9)$`, correct: true, value: "{(5, 7), (7, 9)}" },
        { key: "B", text: t`$(7, 9)$ only`, correct: false, misconceptionId: "C06-M1", value: "{(7, 9)}" },
        { key: "C", text: t`$(1, 3)$, $(3, 5)$ and $(5, 7)$`, correct: false, misconceptionId: "C06-M2", value: "{(1, 3), (3, 5), (5, 7)}" },
        { key: "D", text: t`$(5, 7)$, $(6, 8)$ and $(7, 9)$`, correct: false, misconceptionId: "C06-M5", value: "{(5, 7), (6, 8), (7, 9)}" },
      ],
      solution: {
        steps: [
          t`Let the pair be $x$ and $x + 2$, with $x$ odd. Both are smaller than $10$, so $x + 2 < 10$: $x < 8$.`,
          t`The sum is at least $12$: $2x + 2 \ge 12$, so $x \ge 5$.`,
          t`So $5 \le x < 8$ with $x$ odd: $x = 5$ or $7$. The pairs are $(5, 7)$ and $(7, 9)$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q25" },
      stem: t`The longest side of a triangle is $3$ times the shortest side, and the third side is $2$ cm shorter than the longest side. The perimeter is **at least** $61$ cm. If the shortest side is $x$ cm, which describes the possible values of $x$?`,
      verify: { kind: "value", inputs: { k: "3", d: "2", P: "61" }, params: { t: "tri" } },
      options: [
        { key: "A", text: t`$x \ge 9$`, correct: true, value: "Interval(9, oo)" },
        { key: "B", text: t`$x > 9$`, correct: false, misconceptionId: "C06-M1", value: "Interval.open(9, oo)" },
        { key: "C", text: t`$0 < x \le 9$`, correct: false, misconceptionId: "C06-M2", value: "Interval.Lopen(0, 9)" },
        { key: "D", text: t`$x \ge \frac{59}{7}$`, correct: false, misconceptionId: "C06-M4", value: "Interval(59/7, oo)" },
      ],
      solution: {
        steps: [
          t`The sides are $x$, $3x$ and $3x - 2$ cm. The perimeter is at least $61$: $x + 3x + 3x - 2 \ge 61$.`,
          t`So $7x - 2 \ge 61$, $7x \ge 63$, and $x \ge 9$.`,
          t`The shortest side is at least $9$ cm: $x \ge 9$, with minimum $9$ cm.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "cbse-11/linear-inequalities/Ex 5.1 Q26" },
      stem: t`Three pieces are cut from a board $91$ cm long. If the shortest is $x$ cm, the second is $(x + 3)$ cm and the third is $2x$ cm. The third piece must be **at least** $5$ cm longer than the second. Which describes the possible values of $x$?`,
      verify: { kind: "value", inputs: { L: "91", a: "3", m: "2", g: "5" }, params: { t: "board" } },
      options: [
        { key: "A", text: t`$0 < x \le 22$`, correct: false, misconceptionId: "C06-M4", value: "Interval.Lopen(0, 22)" },
        { key: "B", text: t`$8 \le x \le 22$`, correct: true, value: "Interval(8, 22)" },
        { key: "C", text: t`$8 < x \le 22$`, correct: false, misconceptionId: "C06-M1", value: "Interval.Lopen(8, 22)" },
        { key: "D", text: t`$0 < x \le 8$`, correct: false, misconceptionId: "C06-M2", value: "Interval.Lopen(0, 8)" },
      ],
      solution: {
        steps: [
          t`The pieces fit in the board: $x + (x + 3) + 2x \le 91$, so $4x \le 88$: $x \le 22$.`,
          t`The third is at least $5$ cm longer than the second: $2x \ge (x + 3) + 5$, so $x \ge 8$.`,
          t`Both hold: $8 \le x \le 22$. The shortest piece is from $8$ cm to $22$ cm.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`A medicine must be stored at a temperature of **not more than** $77^\circ$F. If $\text{F} = \frac{9}{5}\text{C} + 32$, what is the allowed range in degrees Celsius?`,
      verify: { kind: "value", inputs: { F: "77" }, params: { t: "temp" } },
      options: [
        { key: "A", text: t`$\text{C} \le 25$`, correct: true, value: "Interval(-oo, 25)" },
        { key: "B", text: t`$\text{C} < 25$`, correct: false, misconceptionId: "C06-M1", value: "Interval.open(-oo, 25)" },
        { key: "C", text: t`$\text{C} > 25$`, correct: false, misconceptionId: "C06-M2", value: "Interval.open(25, oo)" },
        { key: "D", text: t`$\text{C} \le 81$`, correct: false, misconceptionId: "C06-M6", value: "Interval(-oo, 81)" },
      ],
      solution: {
        steps: [
          t`Not more than $77^\circ$F means $\text{F} \le 77$: $\frac{9}{5}\text{C} + 32 \le 77$.`,
          t`Subtract $32$: $\frac{9}{5}\text{C} \le 45$. Multiply by the positive number $\frac{5}{9}$: $\text{C} \le 25$.`,
          t`So the medicine must be kept at $25^\circ$C or below.`,
        ],
      },
    },
  ],
};
