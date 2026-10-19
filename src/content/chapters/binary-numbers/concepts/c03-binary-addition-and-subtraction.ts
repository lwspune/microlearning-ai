import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`In decimal, $9 + 1$ runs out of digits, so you write $0$ and carry $1$. Binary runs out much sooner. **What is $(1)_2 + (1)_2$, and what is $(111)_2 + (1)_2$?**`,
    reveal: t`$1 + 1$ is two, which is $(10)_2$: write $0$ and carry $1$. In $(111)_2 + (1)_2$ the carry ripples through every column, so the answer is $(1000)_2$. Check: $7 + 1 = 8$.`,
  },
  explanation: {
    intuition: [
      t`Binary numbers add **column by column**, from right to left, just like decimal ones.`,
      t`A **column** is one place of the numbers: the units, the twos, the fours, and so on.`,
      t`In decimal, a column total of ten or more writes its last digit and **carries** $1$ to the next column.`,
      t`In binary that happens at two: $1 + 1 = (10)_2$, so write $0$ and carry $1$.`,
      t`In subtraction, a column that is short **borrows** $1$ from the next column on its left.`,
      t`That borrowed $1$ is worth $2$ in the column, because each place is worth twice the one on its right.`,
    ],
    formal: [
      {
        title: "Adding bits",
        points: [
          t`Four facts cover every column of a binary sum.`,
          t`$0 + 0 = 0$, and $0 + 1 = 1 + 0 = 1$.`,
          t`$1 + 1 = 2 = (10)_2$: write $0$ and carry $1$.`,
          t`$1 + 1 + 1 = 3 = (11)_2$: write $1$ and carry $1$.`,
          t`A carried $1$ counts like any other $1$ in its new column.`,
        ],
      },
      {
        title: "Adding two numbers",
        points: [
          t`Line the numbers up on the right, as in $(1101)_2 + (111)_2$.`,
          t`Units: $1 + 1 = (10)_2$, so write $0$ and carry $1$.`,
          t`Twos: $0 + 1$ and the carry make $(10)_2$: write $0$, carry $1$.`,
          t`Fours: $1 + 1$ and the carry make $(11)_2$: write $1$, carry $1$.`,
          t`Eights: $1$ and the carry make $(10)_2$: write $0$, and carry $1$ into a new column.`,
          t`So $(1101)_2 + (111)_2 = (10100)_2$.`,
        ],
      },
      {
        title: "Adding three numbers",
        points: [
          t`With three numbers, a column can hold four or more $1$s once the carry is counted.`,
          t`Count the $1$s and write the count in binary: keep its last bit and carry the rest.`,
          t`So $4 = (100)_2$ writes $0$ and carries $(10)_2$, that is $2$, into the next column.`,
          t`In $(111)_2 + (101)_2 + (110)_2$, the units hold $2$ and the twos $3$: write $0$, then $1$.`,
          t`The fours hold three $1$s and the carry, $4$ in all: write $0$ and carry $2$.`,
          t`The eights hold just that $2$, so write $0$ and carry $1$: the sum is $(10010)_2$.`,
        ],
      },
      {
        title: "Subtracting with borrowing",
        points: [
          t`Subtract column by column from the right: $1 - 0 = 1$, $1 - 1 = 0$, $0 - 0 = 0$.`,
          t`For $0 - 1$, borrow $1$ from the next column on the left; that column drops by $1$.`,
          t`The borrowed $1$ is worth $2$ in this column, so $0 - 1$ becomes $2 - 1 = 1$.`,
          t`In $(1101)_2 - (110)_2$, the units give $1 - 0 = 1$.`,
          t`Twos: $0 - 1$ borrows from the fours, giving $2 - 1 = 1$; the fours now hold $0$.`,
          t`Fours: $0 - 1$ borrows from the eights, giving $1$; so the answer is $(111)_2$.`,
        ],
      },
      {
        title: "Borrowing across zeros",
        points: [
          t`If the next column holds $0$, move left to the first $1$ and borrow from it.`,
          t`That $1$ becomes $0$, and every $0$ passed over becomes $1$.`,
          t`It is like $1000 - 1 = 999$ in decimal: the zeros turn into the largest digit.`,
          t`In binary, $(1000)_2 - (1)_2 = (111)_2$, which is $8 - 1 = 7$.`,
          t`In $(10100)_2 - (11)_2$, the units borrow from the fours: the twos become $1$, the units $2 - 1 = 1$.`,
          t`Then the twos give $1 - 1 = 0$ and the rest come down: $(10001)_2$.`,
        ],
      },
      {
        title: "Unknown digits",
        points: [
          t`Some questions hide bits as letters, as in $(11p1)_2 + (101)_2 = (10100)_2$.`,
          t`Convert every numeral to decimal, keeping each letter times its place value.`,
          t`$(11p1)_2 = 8 + 4 + 2p + 1$ $= 13 + 2p$.`,
          t`$(101)_2 = 5$ and $(10100)_2 = 20$, so $13 + 2p + 5 = 20$.`,
          t`So $2p = 2$, and $p = 1$.`,
          t`Each letter is a bit, so it must come out as $0$ or $1$; anything else means a slip.`,
        ],
      },
      {
        title: "Checking in decimal",
        points: [
          t`Check any binary sum by converting every numeral to decimal.`,
          t`$(1101)_2 + (111)_2 = (10100)_2$ checks out, since $13 + 7 = 20$.`,
          t`Check a difference by adding it back: $(111)_2 + (110)_2 = (1101)_2$, since $7 + 6 = 13$.`,
          t`In an exam you may skip the columns: convert, work in decimal, then convert back.`,
          t`To convert back, split the total into place values: $20 = 16 + 4$ $= (10100)_2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The sum of the binary numbers $(11011)_2$, $(10110110)_2$ and $(10011x0y)_2$ is $(101101101)_2$. Find the binary digits $x$ and $y$.`,
      steps: [
        t`Convert the known numbers: $(11011)_2 = 27$ and $(10110110)_2 = 182$.`,
        t`$(101101101)_2 = 256 + 64 + 32 + 8 + 4 + 1$ $= 365$.`,
        t`Keep the letters at their place values: $(10011x0y)_2$ $= 128 + 16 + 8 + 4x + y$ $= 152 + 4x + y$.`,
        t`So $27 + 182 + 152 + 4x + y = 365$, which gives $4x + y = 4$.`,
        t`Each letter is $0$ or $1$, so $x = 1$ and $y = 0$.`,
      ],
      answer: t`$x = 1$ and $y = 0$.`,
    },
    visualSpec: t`A column-addition board: bits drop into place-value columns, and every two $1$s in a column merge into a carry token that jumps one column left.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Working each column on its own: $1 + 1$ written as $0$ with no carry, and $0 - 1$ written as $1$ with no borrow`,
      remediation: t`$1 + 1 = (10)_2$: write $0$ and carry $1$ into the next column. In subtraction, $0 - 1$ borrows $1$ from the next column, which then drops by $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Believing a column can only hold $0$ or $1$, so $1 + 1$ stays $1$ and $0 - 1$ stays $0$`,
      remediation: t`$1 + 1$ is two, which is $(10)_2$: write $0$ and carry $1$. For $0 - 1$, borrow from the next column: the borrowed $1$ is worth $2$, so $2 - 1 = 1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Taking $1 + 1 + 1$ as $(10)_2$, so a column with three $1$s writes $0$ and carries $1$`,
      remediation: t`$1 + 1 + 1 = 3 = (11)_2$: write $1$ and carry $1$. Count a carried $1$ as one of the $1$s in its column.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: t`Carrying only $1$ when a column adds up to $4$ or more`,
      remediation: t`Write the column's total in binary and carry all but its last bit: $4 = (100)_2$ writes $0$ and carries $2$ into the next column.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Borrowing across zeros but leaving the zeros passed over as $0$`,
      remediation: t`When you borrow from a $1$ further left, every $0$ in between becomes $1$, just as $1000 - 1 = 999$ in decimal. So $(1000)_2 - (1)_2 = (111)_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Counting an unknown bit at its face value, $p$, instead of its place value, such as $8p$ in the eights place`,
      remediation: t`A letter stands in a place like any other bit: in $(1p101)_2$ it is worth $8p$. Keep each letter times its place value when you convert.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C03-M1 and C03-M2 give the key on an addition with no carry and a subtraction with no borrow; diagnose them with numbers that need one.",
    t`C03-M3 gives the key unless some column, with its carry, holds three $1$s; it is modelled only for column totals up to $3$.`,
    t`C03-M4 gives the key unless a column totals $4$ or more, which needs three or more numbers.`,
    t`C03-M5 applies only to subtraction and gives the key unless a borrow passes over a $0$.`,
    "C03-M6 applies only to unknown-digit questions. There C03-M1, C03-M2 and C03-M3 solve the lettered columns right to left with their own column rule, as a student filling in letters does.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Sep Q41" },
      stem: t`What is the sum of the binary numbers $(101101011)_2$ and $(110011)_2$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "add", bs: ["101101011", "110011"] } },
      options: [
        { key: "A", text: t`$(101111011)_2$`, correct: false, misconceptionId: "C03-M2", value: "379" },
        { key: "B", text: t`$(110011100)_2$`, correct: false, misconceptionId: "C03-M3", value: "412" },
        { key: "C", text: t`$(110011110)_2$`, correct: true, value: "414" },
        { key: "D", text: t`$(101011000)_2$`, correct: false, misconceptionId: "C03-M1", value: "344" },
      ],
      solution: {
        steps: [
          t`$(101101011)_2 = 256 + 64 + 32 + 8 + 2 + 1$ $= 363$.`,
          t`$(110011)_2 = 32 + 16 + 2 + 1 = 51$, so the sum is $363 + 51 = 414$.`,
          t`$414 = 256 + 128 + 16 + 8 + 4 + 2$, so the sum is $(110011110)_2$.`,
          t`In columns, the twos hold $1 + 1$ and a carry, $(11)_2$: write $1$ and carry $1$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is $(1011)_2 + (110)_2 + (111)_2$, written in binary?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "add", bs: ["1011", "110", "111"] } },
      options: [
        { key: "A", text: t`$(1111)_2$`, correct: false, misconceptionId: "C03-M2", value: "15" },
        { key: "B", text: t`$(10100)_2$`, correct: false, misconceptionId: "C03-M4", value: "20" },
        { key: "C", text: t`$(11000)_2$`, correct: true, value: "24" },
        { key: "D", text: t`$(1010)_2$`, correct: false, misconceptionId: "C03-M1", value: "10" },
      ],
      solution: {
        steps: [
          t`Units: $1 + 0 + 1 = (10)_2$, so write $0$ and carry $1$.`,
          t`Twos: three $1$s and the carry make $4 = (100)_2$: write $0$, carry $2$.`,
          t`Fours: $0 + 1 + 1$ and the $2$ make $4$ again: write $0$, carry $2$. Eights: $1 + 2 = (11)_2$.`,
          t`So the sum is $(11000)_2$. Check: $11 + 6 + 7 = 24$ $= 16 + 8$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Apr Q24" },
      stem: t`In the binary equation $(10p11)_2 + (101q)_2 = (111r0)_2$, where $p$, $q$ and $r$ are binary digits, what are $p$, $q$ and $r$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "digits", bs: ["10p11", "101q"], total: "111r0", vars: "pqr" } },
      options: [
        { key: "A", text: t`$p = 1$, $q = 1$, $r = 0$`, correct: false, misconceptionId: "C03-M1", value: "(1, 1, 0)" },
        { key: "B", text: t`$p = 0$, $q = 1$, $r = 0$`, correct: false, misconceptionId: "C03-M3", value: "(0, 1, 0)" },
        { key: "C", text: t`$p = 0$, $q = 0$, $r = 1$`, correct: false, misconceptionId: "C03-M6", value: "(0, 0, 1)" },
        { key: "D", text: t`$p = 0$, $q = 1$, $r = 1$`, correct: true, value: "(0, 1, 1)" },
      ],
      solution: {
        steps: [
          t`Keep each letter times its place value: $(10p11)_2 = 19 + 4p$.`,
          t`$(101q)_2 = 10 + q$ and $(111r0)_2 = 28 + 2r$.`,
          t`So $29 + 4p + q = 28 + 2r$, that is $4p + q + 1 = 2r$.`,
          t`$r = 0$ is impossible, so $r = 1$ and $4p + q = 1$: $p = 0$, $q = 1$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is $(11100)_2 - (101)_2$, written in binary?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sub", a: "11100", b: "101" } },
      options: [
        { key: "A", text: t`$(11000)_2$`, correct: false, misconceptionId: "C03-M2", value: "24" },
        { key: "B", text: t`$(10101)_2$`, correct: false, misconceptionId: "C03-M5", value: "21" },
        { key: "C", text: t`$(10111)_2$`, correct: true, value: "23" },
        { key: "D", text: t`$(11001)_2$`, correct: false, misconceptionId: "C03-M1", value: "25" },
      ],
      solution: {
        steps: [
          t`Units: $0 - 1$ must borrow, and the next $1$ is in the fours.`,
          t`The fours drop to $0$, the twos become $1$, and the units give $2 - 1 = 1$.`,
          t`Twos: $1 - 0 = 1$. Fours: $0 - 1$ borrows from the eights: $2 - 1 = 1$. Then $0$, then $1$.`,
          t`So the difference is $(10111)_2$. Check: $28 - 5 = 23$ $= 16 + 4 + 2 + 1$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`In the binary equation $(10p01)_2 + (10q1)_2 = (1110r)_2$, where $p$, $q$ and $r$ are binary digits, what are $p$, $q$ and $r$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "digits", bs: ["10p01", "10q1"], total: "1110r", vars: "pqr" } },
      options: [
        { key: "A", text: t`$p = 0$, $q = 1$, $r = 0$`, correct: true, value: "(0, 1, 0)" },
        { key: "B", text: t`$p = 1$, $q = 0$, $r = 0$`, correct: false, misconceptionId: "C03-M1", value: "(1, 0, 0)" },
        { key: "C", text: t`$p = 1$, $q = 0$, $r = 1$`, correct: false, misconceptionId: "C03-M2", value: "(1, 0, 1)" },
        { key: "D", text: t`$p = 1$, $q = 1$, $r = 0$`, correct: false, misconceptionId: "C03-M6", value: "(1, 1, 0)" },
      ],
      solution: {
        steps: [
          t`$(10p01)_2 = 17 + 4p$ and $(10q1)_2 = 9 + 2q$.`,
          t`$(1110r)_2 = 28 + r$, so $26 + 4p + 2q = 28 + r$.`,
          t`So $4p + 2q = 2 + r$; the left side is even, so $r = 0$.`,
          t`Then $4p + 2q = 2$, so $p = 0$ and $q = 1$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is $(111000)_2 - (1001)_2$, written in binary?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sub", a: "111000", b: "1001" } },
      options: [
        { key: "A", text: t`$(101111)_2$`, correct: true, value: "47" },
        { key: "B", text: t`$(110001)_2$`, correct: false, misconceptionId: "C03-M1", value: "49" },
        { key: "C", text: t`$(110000)_2$`, correct: false, misconceptionId: "C03-M2", value: "48" },
        { key: "D", text: t`$(101001)_2$`, correct: false, misconceptionId: "C03-M5", value: "41" },
      ],
      solution: {
        steps: [
          t`Units: $0 - 1$ borrows from the eights; the twos and fours passed over become $1$.`,
          t`The units give $2 - 1 = 1$, and the twos and fours give $1 - 0 = 1$ each.`,
          t`Eights: $0 - 1$ borrows from the sixteens: $2 - 1 = 1$. Then $0$, then $1$.`,
          t`So the difference is $(101111)_2$. Check: $56 - 9 = 47$ $= 32 + 8 + 4 + 2 + 1$.`,
        ],
      },
    },
  ],
};
