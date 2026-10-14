import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A tea stall has $5$ kinds of tea and $2$ kinds of biscuits. Riya buys **one** thing. Arjun buys a tea **and** a biscuit. **Who has more choices?**`,
    reveal: t`Arjun. Riya picks from one list of $5 + 2 = 7$ things. Arjun's every tea can go with either biscuit, so he has $5 \times 2 = 10$ pairs. One thing OR another: add. One thing AND then another: multiply.`,
  },
  explanation: {
    intuition: t`Ask one question: after the first choice, is the task over, or is there a next step? If you do one thing OR another, the choices sit side by side in one list, so you add. If you do one thing AND THEN another, every first choice pairs with every second choice, like the cells of a grid, so you multiply. Bigger problems mix both: split them into cases, multiply inside each case, then add the cases.`,
    formal: t`**Addition principle.** If one task can be done in $m$ ways and another in $n$ ways, and only one of them is to be done, the choice can be made in $m + n$ ways. Example: $5$ fruit juices or $3$ milk shakes give $5 + 3 = 8$ choices of one drink.

**Multiplication principle.** If a task has two stages, the first done in $m$ ways and then, for each of these, the second in $n$ ways, the task can be done in $m \times n$ ways. It extends to any number of stages. Example: a code of two letters followed by three digits: $26 \times 26 \times 10 \times 10 \times 10 = 676000$.

**Which one?** "Or", "either ... or", "one of the kinds": add. "And", "then", "followed by", "one for each item": multiply. When repetition is allowed, every place keeps its full set of choices.

**Mixed problems.** Split into cases that cannot happen together. Count each case by multiplying its stages, then add the cases. Routes A to B through N ($2 \times 3 = 6$) or through S ($1 \times 2 = 2$): $6 + 2 = 8$ routes.`,
    worked: {
      prompt: t`How many numbers less than $1000$ that are divisible by $5$ can be formed using the digits $1, 3, 5, 6, 9$, if the digits may be repeated?`,
      steps: [
        t`Divisible by $5$ means the units digit is $0$ or $5$; here only $5$ is available. Less than $1000$ means $1$, $2$ or $3$ digits: three separate cases.`,
        t`One digit: only $5$, so $1$ way.`,
        t`Two digits: tens place any of $5$ digits, and then units place $5$: $5 \times 1 = 5$ ways.`,
        t`Three digits: $5 \times 5 \times 1 = 25$ ways. A number has one length or another, so add the cases: $1 + 5 + 25 = 31$.`,
      ],
      answer: t`$31$ numbers.`,
    },
    visualSpec: t`Drag the number of choices at each stage: choices of one stage line up side by side in a single list (add), while each new stage branches out from every earlier choice in a tree (multiply), and the counts update.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Adding the choices for stages that happen one after another (an 'and then' task)",
      remediation: t`In a task done in stages, each choice at one stage goes with every choice at the next. Multiply the stages: $m$ ways and then $n$ ways give $m \times n$ ways.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Multiplying the counts of separate cases that cannot happen together (an 'or' task)",
      remediation: t`Cases that cannot happen together are counted separately and then added: $m$ ways or $n$ ways give $m + n$ ways. Multiply only across the stages inside one case.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Counting only the biggest case and forgetting the others, e.g. only 3-digit numbers for 'less than 1000'",
      remediation: t`List every case first: each route, each kind of code, or numbers with $1$, $2$ and $3$ digits. Count each case, then add them all.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Taking one choice fewer at each later place even though repetition is allowed",
      remediation: "When digits or letters may be repeated, every place can use the whole set again. Each place keeps all its choices.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 needs a stage to multiply and C01-M2 and C01-M3 need a case to add; C01-M4 applies only when the stem allows repetition.",
    t`On 'less than 100' digit items C01-M3 and C01-M4 always agree ($O \times N$ = $O + O(N - 1)$), so such an item can carry only one of them; C01-Q6 carries C01-M4.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.3 SolvedEx.1" },
      stem: t`Town A is joined to town B through two villages, N and S. There are $3$ roads from A to N and $2$ roads from N to B; there are $2$ roads from A to S and $4$ roads from S to B. No road joins N and S. How many different routes are there from A to B?`,
      verify: { kind: "value", inputs: { a: "3", b: "2", c: "2", d: "4" }, params: { plan: "a*b + c*d" } },
      options: [
        { key: "A", text: t`$14$`, correct: true, value: "14" },
        { key: "B", text: t`$11$`, correct: false, misconceptionId: "C01-M1", value: "11" },
        { key: "C", text: t`$48$`, correct: false, misconceptionId: "C01-M2", value: "48" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C01-M3", value: "8" },
      ],
      solution: {
        steps: [
          t`Through N: each of the $3$ roads from A to N goes with each of the $2$ roads from N to B, so $3 \times 2 = 6$ routes.`,
          t`Through S: $2 \times 4 = 8$ routes.`,
          t`A route goes through N or through S, never both: $6 + 8 = 14$ routes.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.3 SolvedEx.3" },
      stem: t`How many even numbers less than $1000$ can be formed using the digits $2, 3, 7, 8$, if the digits may be repeated?`,
      verify: { kind: "value", inputs: { E: "2", N: "4" }, params: { plan: "E + E*N + E*N*N", same: "E N", rep: "1", digits: "2,3,7,8", below: "1000", parity: "even" } },
      options: [
        { key: "A", text: t`$42$`, correct: true, value: "42" },
        { key: "B", text: t`$18$`, correct: false, misconceptionId: "C01-M1", value: "18" },
        { key: "C", text: t`$32$`, correct: false, misconceptionId: "C01-M3", value: "32" },
        { key: "D", text: t`$20$`, correct: false, misconceptionId: "C01-M4", value: "20" },
      ],
      solution: {
        steps: [
          t`Even means the units digit is $2$ or $8$: $2$ ways. Less than $1000$ means $1$, $2$ or $3$ digits.`,
          t`One digit: $2$. Two digits: tens place $4$ ways, then units $2$ ways: $4 \times 2 = 8$.`,
          t`Three digits: $4 \times 4 \times 2 = 32$, since digits may be repeated.`,
          t`Add the cases: $2 + 8 + 32 = 42$ even numbers.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.2.2 SolvedEx.2" },
      stem: t`A locker code is either one letter followed by two digits, or two letters followed by one digit. The letters are chosen from A, B, C, D, E and the digits from $0$ to $9$, and both may be repeated. How many different codes are possible?`,
      verify: { kind: "value", inputs: { L: "5", D: "10" }, params: { plan: "L*D*D + L*L*D", rep: "1" } },
      options: [
        { key: "A", text: t`$500$`, correct: false, misconceptionId: "C01-M3", value: "500" },
        { key: "B", text: t`$650$`, correct: false, misconceptionId: "C01-M4", value: "650" },
        { key: "C", text: t`$750$`, correct: true, value: "750" },
        { key: "D", text: t`$125000$`, correct: false, misconceptionId: "C01-M2", value: "125000" },
      ],
      solution: {
        steps: [
          t`One letter then two digits: $5 \times 10 \times 10 = 500$ codes.`,
          t`Two letters then one digit: $5 \times 5 \times 10 = 250$ codes.`,
          t`A code is of one kind or the other: $500 + 250 = 750$ codes.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc I Q1" },
      stem: t`A college offers $6$ courses in the morning and $4$ in the evening. A student selects exactly one course, either in the morning or in the evening, and also one of $3$ sports. In how many ways can the student choose?`,
      verify: { kind: "value", inputs: { m: "6", e: "4", s: "3" }, params: { plan: "(m + e)*s" } },
      options: [
        { key: "A", text: t`$30$`, correct: true, value: "30" },
        { key: "B", text: t`$13$`, correct: false, misconceptionId: "C01-M1", value: "13" },
        { key: "C", text: t`$72$`, correct: false, misconceptionId: "C01-M2", value: "72" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C01-M3", value: "18" },
      ],
      solution: {
        steps: [
          t`One course, morning or evening: $6 + 4 = 10$ ways.`,
          t`Then one of $3$ sports: each course goes with each sport, so $10 \times 3 = 30$ ways.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.1 Q13" },
      stem: t`A school has $3$ gates. From the ground floor to a student's classroom on the second floor, the student can climb one of $4$ staircases or take one of $2$ lifts. In how many ways can the student go from outside the school to the classroom?`,
      verify: { kind: "value", inputs: { g: "3", s: "4", l: "2" }, params: { plan: "g*(s + l)" } },
      options: [
        { key: "A", text: t`$18$`, correct: true, value: "18" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C01-M1", value: "9" },
        { key: "C", text: t`$24$`, correct: false, misconceptionId: "C01-M2", value: "24" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C01-M3", value: "12" },
      ],
      solution: {
        steps: [
          t`Enter by a gate: $3$ ways.`,
          t`Then go up by a staircase or a lift: $4 + 2 = 6$ ways.`,
          t`Each gate goes with each way up: $3 \times 6 = 18$ ways.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.3 SolvedEx.3" },
      stem: t`How many odd numbers less than $100$ can be formed using the digits $1, 2, 4, 5, 7$, if the digits may be repeated?`,
      verify: { kind: "value", inputs: { O: "3", N: "5" }, params: { plan: "O + O*N", same: "O N", rep: "1", digits: "1,2,4,5,7", below: "100", parity: "odd" } },
      options: [
        { key: "A", text: t`$45$`, correct: false, misconceptionId: "C01-M2", value: "45" },
        { key: "B", text: t`$15$`, correct: false, misconceptionId: "C01-M4", value: "15" },
        { key: "C", text: t`$18$`, correct: true, value: "18" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C01-M1", value: "11" },
      ],
      solution: {
        steps: [
          t`Odd means the units digit is $1$, $5$ or $7$: $3$ ways. Less than $100$ means $1$ or $2$ digits.`,
          t`One digit: $3$. Two digits: tens place any of $5$ digits, then units $3$ ways: $5 \times 3 = 15$.`,
          t`Add the cases: $3 + 15 = 18$ odd numbers.`,
        ],
      },
    },
  ],
};
