import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A purse holds $10$ coins, some of ₹ 2 and some of ₹ 5, worth ₹ 29 in all. **How many ₹ 5 coins are there?**`,
    reveal: t`Say there are $x$ coins of ₹ 2 and $y$ coins of ₹ 5. Then $x + y = 10$ and $2x + 5y = 29$. Subtract twice the first: $3y = 9$, so $y = 3$. Two facts gave two equations.`,
  },
  explanation: {
    intuition: [
      t`Many word problems have two unknown quantities, such as two ages or two prices.`,
      t`Name them with two letters: let the son's age be $x$ years and the father's $y$ years.`,
      t`Each fact in the story gives one equation in $x$ and $y$.`,
      t`Two facts give two simultaneous equations, which you can solve by elimination.`,
      t`Then read the question again and give exactly the quantity it asks for.`,
      t`Check the answer in the story's own words.`,
    ],
    formal: [
      {
        title: "Name the unknowns",
        points: [
          t`Write what each letter stands for, with its unit: let one pen cost $y$ rupees.`,
          t`Use letters for the quantities the facts talk about, not always the one asked.`,
          t`For a fraction, let the **numerator** (top) be $x$ and the **denominator** (bottom) be $y$.`,
          t`Then the fraction is $\frac{x}{y}$.`,
        ],
      },
      {
        title: "More than, less than",
        points: [
          t`'$x$ is $5$ more than $y$' means $x = y + 5$.`,
          t`'$y$ is $6$ less than $x$' means $y = x - 6$: $y$ is the smaller.`,
          t`'$x$ is $3$ more than half of $y$' means $x = \frac{y}{2} + 3$.`,
          t`Test with numbers: $y = 10$ gives $x = 5 + 3 = 8$.`,
          t`Move the letters to the left: $x = y + 5$ becomes $x - y = 5$.`,
        ],
      },
      {
        title: "A change to both",
        points: [
          t`Four years ago, **each** person was $4$ years younger.`,
          t`So their ages then were $x - 4$ and $y - 4$.`,
          t`Their sum then was $(x - 4) + (y - 4) = x + y - 8$.`,
          t`'Add $1$ to the numerator and the denominator' gives $\frac{x + 1}{y + 1}$.`,
        ],
      },
      {
        title: "Counts and values",
        points: [
          t`$x$ notes of ₹ 20 are worth $20x$ rupees: count times value.`,
          t`$3$ chairs at $x$ rupees and $2$ tables at $y$ rupees cost $3x + 2y$.`,
          t`If $1$ mark is subtracted for each wrong answer, $y$ wrong answers lose $y$ marks.`,
          t`So $x$ correct answers at $4$ marks each give $4x - y$ marks in all.`,
          t`In a division, dividend $=$ divisor $\times$ quotient $+$ remainder.`,
          t`$40 \div 7$ gives quotient $5$, remainder $5$: $40 = 7 \times 5 + 5$.`,
        ],
      },
      {
        title: "Answer what is asked",
        points: [
          t`Solving gives $x$ and $y$, but the question may ask for something else.`,
          t`If it asks for the other quantity, give $y$, not $x$.`,
          t`If it asks for $2$ chairs and $1$ table, work out $2x + y$.`,
          t`Check the values in every sentence of the story.`,
        ],
      },
    ],
    worked: {
      prompt: t`The sum of the ages of a father and his son is $50$ years. Five years ago, the father was $7$ times as old as the son. Find the son's present age.`,
      steps: [
        t`Let the father's present age be $x$ years and the son's $y$ years. The first fact: $x + y = 50$.`,
        t`Five years ago their ages were $x - 5$ and $y - 5$. So $x - 5 = 7(y - 5)$.`,
        t`This gives $x - 5 = 7y - 35$, so $x - 7y = -30$.`,
        t`Subtract it from $x + y = 50$: $8y = 80$, so $y = 10$ and $x = 40$.`,
        t`Check: five years ago they were $35$ and $5$, and $35 = 7 \times 5$. True.`,
      ],
      answer: t`The son is $10$ years old (the father is $40$).`,
    },
    visualSpec: t`Drag sliders for x and y; each sentence of the story lights up when its equation holds, and both light up together only at the answer.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Turns an amount the wrong way: 'y is 6 less than x' written as y = x + 6, or a remainder subtracted instead of added",
      remediation: t`'$y$ is $6$ less than $x$' means $y = x - 6$, so $y$ is the smaller one. A 'more than' amount and a remainder are added. Test with numbers.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: "Applies a change meant for both quantities only once: 'six years ago' taken off the sum once, or 2 added to the numerator only",
      remediation: t`Six years ago **each** person was $6$ years younger: $(x - 6) + (y - 6)$. 'Added to the numerator and the denominator' changes both.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M3",
      mistake: "Puts each value on the wrong unknown: x notes of 5 rupees taken as worth 10x, or '1 book and 2 pens' priced as 2x + y",
      remediation: t`Multiply each count by its own value: $x$ notes of 5 rupees are worth $5x$ rupees, and $2$ pens at $y$ rupees cost $2y$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: "Answers with the wrong unknown: the other person's age, the other number, the correct answers instead of the wrong ones, the fraction upside down, or x alone when a total is asked",
      remediation: t`Before you answer, read the question again. Match what it asks to $x$ or $y$, or work out the total it asks for.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Adds the marks lost for wrong answers instead of subtracting them",
      remediation: t`A mark subtracted for each wrong answer is a minus: $x$ correct at $2$ marks and $y$ wrong give $2x - y$ marks.`,
      fallback: { kind: "ext", topic: "algebraic expressions from words (Std VIII)" },
    },
    {
      id: "C05-M6",
      mistake: "Leaves out a number the words give: the remainder in a division, the mark lost per wrong answer, or the 2 in '2 pens'",
      remediation: t`Use every number in the sentence: dividend $=$ divisor $\times$ quotient $+$ remainder, a lost mark is $-1$ each, and $2$ pens cost $2y$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "In a story whose first equation is x + y = total, putting the rates on the wrong unknowns gives the same as answering with the other unknown, so C05-M3 is tested only on Q2 (notes) and Q6 (prices).",
    "C05-M2 applies only to a change made to both quantities (Q1 ages, Q3 fraction); C05-M5 only to negative marking (Q4).",
    "Q2 follows the book's printed answer for Ex 5.2 Q1: as printed the stem says the 5 rupee notes are fewer, which gives no whole-number answer; the item states the 10 rupee notes are fewer, with new numbers.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/5.2 SolvedEx.2" },
      stem: t`Salil's age is $24$ years more than half of Sangram's age. Six years ago, the sum of their ages was $51$ years. Find Salil's present age, in years.`,
      verify: { kind: "value", inputs: { a: "24", k: "6", s: "51" }, params: { story: "ages" } },
      options: [
        { key: "A", text: t`$26$`, correct: false, misconceptionId: "C05-M4", value: "26" },
        { key: "B", text: t`$37$`, correct: true, value: "37" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C05-M1", value: "5" },
        { key: "D", text: t`$35$`, correct: false, misconceptionId: "C05-M2", value: "35" },
      ],
      solution: {
        steps: [
          t`Let Salil's age be $x$ years and Sangram's $y$ years. Then $x = \frac{y}{2} + 24$, so $2x - y = 48$.`,
          t`Six years ago each was $6$ years younger: $(x - 6) + (y - 6) = 51$, so $x + y = 63$.`,
          t`Add the equations: $3x = 111$, so $x = 37$ (and $y = 26$).`,
          t`Check: $13 + 24 = 37$ and $31 + 20 = 51$. Salil is $37$ years old.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.2 Q1" },
      stem: t`An envelope has some 5 rupee notes and some 10 rupee notes, worth ₹ 360 in all. The number of 10 rupee notes is $6$ less than the number of 5 rupee notes. How many 5 rupee notes are there?`,
      verify: { kind: "value", inputs: { T: "360", d: "6" }, params: { story: "notes" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C05-M1", value: "20" },
        { key: "B", text: t`$26$`, correct: false, misconceptionId: "C05-M3", value: "26" },
        { key: "C", text: t`$22$`, correct: false, misconceptionId: "C05-M4", value: "22" },
        { key: "D", text: t`$28$`, correct: true, value: "28" },
      ],
      solution: {
        steps: [
          t`Let there be $x$ notes of 5 rupees and $y$ notes of 10 rupees. Their value: $5x + 10y = 360$.`,
          t`The 10 rupee notes are $6$ fewer: $y = x - 6$, so $x - y = 6$.`,
          t`Multiply by $10$: $10x - 10y = 60$. Add to the first: $15x = 420$, so $x = 28$.`,
          t`Then $y = 22$. Check: $140 + 220 = 360$. There are $28$ notes of 5 rupees.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.2 Q2" },
      stem: t`The denominator of a fraction is $1$ less than twice its numerator. If $2$ is added to the numerator and to the denominator, the ratio of numerator to denominator becomes $3 : 5$. Find the fraction.`,
      verify: { kind: "value", inputs: { m: "2", a: "1", b: "2", p: "3", q: "5" }, params: { story: "fraction" } },
      options: [
        { key: "A", text: t`$\frac{7}{13}$`, correct: true, value: "7/13" },
        { key: "B", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C05-M1", value: "1/3" },
        { key: "C", text: t`$\frac{13}{25}$`, correct: false, misconceptionId: "C05-M2", value: "13/25" },
        { key: "D", text: t`$\frac{13}{7}$`, correct: false, misconceptionId: "C05-M4", value: "13/7" },
      ],
      solution: {
        steps: [
          t`Let the fraction be $\frac{x}{y}$. Then $y = 2x - 1$, so $2x - y = 1$.`,
          t`$\frac{x + 2}{y + 2} = \frac{3}{5}$ gives $5(x + 2) = 3(y + 2)$, so $5x - 3y = -4$.`,
          t`Multiply $2x - y = 1$ by $3$: $6x - 3y = 3$. Subtract $5x - 3y = -4$: $x = 7$, so $y = 13$.`,
          t`Check: $\frac{9}{15} = \frac{3}{5}$. The fraction is $\frac{7}{13}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.2 Q10" },
      stem: t`A test has $60$ questions. A correct answer carries $2$ marks, and $1$ mark is subtracted for a wrong answer. Yashwant attempted all the questions and got $90$ marks. How many questions did he get wrong?`,
      verify: { kind: "value", inputs: { Q: "60", c: "2", w: "1", M: "90" }, params: { story: "marks" } },
      options: [
        { key: "A", text: t`$30$`, correct: false, misconceptionId: "C05-M5", value: "30" },
        { key: "B", text: t`$15$`, correct: false, misconceptionId: "C05-M6", value: "15" },
        { key: "C", text: t`$10$`, correct: true, value: "10" },
        { key: "D", text: t`$50$`, correct: false, misconceptionId: "C05-M4", value: "50" },
      ],
      solution: {
        steps: [
          t`Let $x$ answers be correct and $y$ wrong. All were attempted: $x + y = 60$.`,
          t`Marks: $2x - y = 90$, since each wrong answer loses $1$ mark.`,
          t`Add the equations: $3x = 150$, so $x = 50$ and $y = 10$.`,
          t`Check: $100 - 10 = 90$. He got $10$ questions wrong.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/5.2 SolvedEx.1" },
      stem: t`The sum of two numbers is $105$. When the greater number is divided by the smaller, the quotient is $2$ and the remainder is $18$. Find the smaller number.`,
      verify: { kind: "value", inputs: { S: "105", n: "2", r: "18" }, params: { story: "numbers" } },
      options: [
        { key: "A", text: t`$29$`, correct: true, value: "29" },
        { key: "B", text: t`$41$`, correct: false, misconceptionId: "C05-M1", value: "41" },
        { key: "C", text: t`$76$`, correct: false, misconceptionId: "C05-M4", value: "76" },
        { key: "D", text: t`$35$`, correct: false, misconceptionId: "C05-M6", value: "35" },
      ],
      solution: {
        steps: [
          t`Let the greater number be $x$ and the smaller $y$. Then $x + y = 105$.`,
          t`Dividend $=$ divisor $\times$ quotient $+$ remainder: $x = 2y + 18$, so $x - 2y = 18$.`,
          t`Subtract it from $x + y = 105$: $3y = 87$, so $y = 29$ and $x = 76$.`,
          t`Check: $76 = 2 \times 29 + 18$. The smaller number is $29$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q6" },
      stem: t`$8$ books and $5$ pens cost ₹ 420 in all, and $5$ books and $8$ pens cost ₹ 321. Find the cost of $1$ book and $2$ pens, in rupees.`,
      verify: { kind: "value", inputs: { a1: "8", b1: "5", c1: "420", a2: "5", b2: "8", c2: "321", u: "1", t: "2" }, params: { story: "prices" } },
      options: [
        { key: "A", text: t`$69$`, correct: true, value: "69" },
        { key: "B", text: t`$102$`, correct: false, misconceptionId: "C05-M3", value: "102" },
        { key: "C", text: t`$45$`, correct: false, misconceptionId: "C05-M4", value: "45" },
        { key: "D", text: t`$57$`, correct: false, misconceptionId: "C05-M6", value: "57" },
      ],
      solution: {
        steps: [
          t`Let a book cost $x$ rupees and a pen $y$ rupees: $8x + 5y = 420$ and $5x + 8y = 321$.`,
          t`Add: $13x + 13y = 741$, so $x + y = 57$. Subtract: $3x - 3y = 99$, so $x - y = 33$.`,
          t`Add these: $2x = 90$, so $x = 45$ and $y = 12$.`,
          t`$1$ book and $2$ pens cost $45 + 2 \times 12 = 69$ rupees.`,
        ],
      },
    },
  ],
};
