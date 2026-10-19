import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`You can read $(101)_2$ as $4 + 1 = 5$. Now go the other way. **Without guessing, how do you write $26$ in binary?**`,
    reveal: t`Halve it again and again and keep the remainders: $26 \to 13$ r $0$, $13 \to 6$ r $1$, $6 \to 3$ r $0$, $3 \to 1$ r $1$, $1 \to 0$ r $1$. Read them from the last to the first: $1, 1, 0, 1, 0$. So $26 = (11010)_2 = 16 + 8 + 2$.`,
  },
  explanation: {
    intuition: [
      t`Writing a decimal number in binary means finding which powers of $2$ add up to it.`,
      t`Every whole number above $0$ is a sum of different powers of $2$ in just one way: $22 = 16 + 4 + 2$.`,
      t`Each power used gets a $1$ in its place; every other place gets a $0$.`,
      t`When you divide by $2$, the **remainder** is what is left over: $13 \div 2$ is $6$, remainder $1$.`,
      t`The remainder tells you the units bit: $1$ for an odd number, $0$ for an even one.`,
      t`So dividing by $2$ again and again gives the bits one at a time, units bit first.`,
    ],
    formal: [
      {
        title: "Repeated division by 2",
        points: [
          t`Dividing $N$ by $2$ gives $N = 2q + r$: $q$ is the **quotient**, and the remainder $r$ is $0$ or $1$.`,
          t`Divide the number by $2$ and write down the remainder.`,
          t`Divide the quotient by $2$ again, and keep going until the quotient is $0$.`,
          t`Don't stop at quotient $1$: the last step, $1 = 2 \times 0 + 1$, gives the leading $1$.`,
          t`The first remainder is the units bit, so it goes on the **right**.`,
          t`So read the remainders from the **last to the first**, bottom to top.`,
        ],
      },
      {
        title: "An example: 41",
        points: [
          t`$41 = 2 \times 20 + 1$, so the first remainder is $1$.`,
          t`$20 = 2 \times 10 + 0$ and $10 = 2 \times 5 + 0$.`,
          t`$5 = 2 \times 2 + 1$, $2 = 2 \times 1 + 0$ and $1 = 2 \times 0 + 1$.`,
          t`The remainders, first to last, are $1, 0, 0, 1, 0, 1$.`,
          t`Read from the last to the first: $41 = (101001)_2$.`,
          t`Check: $32 + 8 + 1 = 41$. Read the wrong way, $(100101)_2 = 37$.`,
        ],
      },
      {
        title: "Subtracting powers of 2",
        points: [
          t`Another way: take the largest power of $2$ not above the number, and subtract it.`,
          t`Repeat with what is left, until nothing is left.`,
          t`For $75$: $75 - 64 = 11$, $11 - 8 = 3$, $3 - 2 = 1$, $1 - 1 = 0$.`,
          t`So $75 = 64 + 8 + 2 + 1$.`,
          t`Write the places $64, 32, 16, 8, 4, 2, 1$: a $1$ under each power used, $0$ under the rest.`,
          t`So $75 = (1001011)_2$. The skipped places keep their $0$s: it is not $(1111)_2$.`,
        ],
      },
      {
        title: "How many binary digits",
        points: [
          t`Find the largest power of $2$ not above the number, say $2^k$.`,
          t`The places then run from $2^0 = 1$ up to $2^k$: that is $k + 1$ places.`,
          t`So a number $N$ with $2^k \le N < 2^{k + 1}$ has $k + 1$ binary digits.`,
          t`For $300$: $2^8 = 256 \le 300 < 512$, so $300$ has $9$ binary digits.`,
          t`A power $2^k$ itself is a $1$ and then $k$ zeros: $k + 1$ digits too.`,
        ],
      },
      {
        title: "Counting the 1s",
        points: [
          t`The number of $1$s is the number of powers of $2$ that add up to the number.`,
          t`$75 = 64 + 8 + 2 + 1$ uses four powers, so $(1001011)_2$ has four $1$s.`,
          t`One less than a power of $2$ is all $1$s: $2^n - 1$ is $n$ ones.`,
          t`For example, $63 = 2^6 - 1 = (111111)_2$.`,
          t`A power $2^n$ has a single $1$, followed by $n$ zeros.`,
        ],
      },
      {
        title: "Numbers given in binary",
        points: [
          t`Some questions give numbers in binary and want the answer in binary.`,
          t`Convert each number to decimal, do the work in decimal, then convert the answer back.`,
          t`For example, $(1100)_2 = 12$ and $(10010)_2 = 18$.`,
          t`Their **HCF**, the highest common factor, is $6 = (110)_2$.`,
          t`Their **LCM**, the lowest common multiple, is $36 = (100100)_2$.`,
          t`A decimal number made of $0$s and $1$s, like $1001$, is still decimal: convert it like any other.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $154$ in binary. How many binary digits does it have, and how many of them are $1$?`,
      steps: [
        t`$154 = 2 \times 77 + 0$, $77 = 2 \times 38 + 1$ and $38 = 2 \times 19 + 0$.`,
        t`$19 = 2 \times 9 + 1$, $9 = 2 \times 4 + 1$ and $4 = 2 \times 2 + 0$.`,
        t`$2 = 2 \times 1 + 0$ and $1 = 2 \times 0 + 1$: the quotient is $0$, so stop.`,
        t`The remainders, first to last, are $0, 1, 0, 1, 1, 0, 0, 1$. Read from the last: $(10011010)_2$.`,
        t`Check: $128 + 16 + 8 + 2 = 154$. It has $8$ digits, since $128 \le 154 < 256$, and four $1$s.`,
      ],
      answer: t`$154 = (10011010)_2$: $8$ binary digits, four of them $1$.`,
    },
    visualSpec: t`A number splits into halves step by step: each halving drops its remainder, $0$ or $1$, into a row of bit slots that fills from the right.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Reading the remainders from the first to the last (top to bottom), so the bits come out reversed",
      remediation: t`The first remainder is the units bit, worth $1$, so it goes on the right. Read the remainders from the last one to the first.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Subtracting powers of $2$ and writing a $1$ for each power used, with no $0$ for the powers skipped`,
      remediation: t`Every place from the largest power down to $1$ needs a digit: write $0$ under each power you skip, as in $18 = 16 + 2 = (10010)_2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: t`Stopping the division when the quotient reaches $1$, so the last remainder, the leading $1$, is lost`,
      remediation: t`Keep dividing until the quotient is $0$: the last step, $1 = 2 \times 0 + 1$, gives the leading $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Taking the power $k$ of the largest $2^k$ not above the number as its number of binary digits`,
      remediation: t`The places run from $2^0$ up to $2^k$, which is $k + 1$ places. So a number with $2^k \le N < 2^{k + 1}$ has $k + 1$ binary digits.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: t`Converting each decimal digit to binary on its own and joining the results, or reading a decimal number made of $0$s and $1$s as binary`,
      remediation: t`Binary place values belong to the whole number, not to each decimal digit. Divide the whole number by $2$ again and again.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C02-M1 gives the key when the binary numeral reads the same both ways, such as $45 = (101101)_2$; diagnose it with one that does not.`,
    t`C02-M2 gives the key when the numeral is all $1$s ($2^n - 1$), and C02-M5 gives the key for a one-digit number.`,
    "C02-M4 applies only to digit-count items. There C02-M1 does not apply (reversing keeps the count) and C02-M3 would give the same count as C02-M4.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Apr Q3" },
      stem: t`What is the binary form of the decimal number $1011$?`,
      verify: { kind: "value", inputs: { n: "1011" }, params: { ask: "bin" } },
      options: [
        { key: "A", text: t`$(1111110011)_2$`, correct: true, value: "1011" },
        { key: "B", text: t`$(1100111111)_2$`, correct: false, misconceptionId: "C02-M1", value: "831" },
        { key: "C", text: t`$(111110011)_2$`, correct: false, misconceptionId: "C02-M3", value: "499" },
        { key: "D", text: t`$(1011)_2$`, correct: false, misconceptionId: "C02-M5", value: "11" },
      ],
      solution: {
        steps: [
          t`$1011$ is a decimal number, so convert it: subtract powers of $2$, largest first.`,
          t`$1011 - 512 = 499$, $499 - 256 = 243$ and $243 - 128 = 115$.`,
          t`$115 - 64 = 51$, $51 - 32 = 19$ and $19 - 16 = 3$. Skip $8$ and $4$: $3 - 2 = 1$, $1 - 1 = 0$.`,
          t`The powers used are $512$ down to $16$, then $2$ and $1$: $1011 = (1111110011)_2$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q17" },
      stem: t`What is the binary form of the decimal number $47$?`,
      verify: { kind: "value", inputs: { n: "47" }, params: { ask: "bin" } },
      options: [
        { key: "A", text: t`$(111101)_2$`, correct: false, misconceptionId: "C02-M1", value: "61" },
        { key: "B", text: t`$(11111)_2$`, correct: false, misconceptionId: "C02-M2", value: "31" },
        { key: "C", text: t`$(1111)_2$`, correct: false, misconceptionId: "C02-M3", value: "15" },
        { key: "D", text: t`$(101111)_2$`, correct: true, value: "47" },
      ],
      solution: {
        steps: [
          t`$47 = 2 \times 23 + 1$, $23 = 2 \times 11 + 1$ and $11 = 2 \times 5 + 1$.`,
          t`$5 = 2 \times 2 + 1$, $2 = 2 \times 1 + 0$ and $1 = 2 \times 0 + 1$.`,
          t`The remainders, first to last, are $1, 1, 1, 1, 0, 1$. Read from the last: $(101111)_2$.`,
          t`Check: $32 + 8 + 4 + 2 + 1 = 47$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The decimal number $1101$ is written in binary. How many binary digits does it have?`,
      verify: { kind: "value", inputs: { n: "1101" }, params: { ask: "bits" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C02-M5", value: "4" },
        { key: "B", text: t`$11$`, correct: true, value: "11" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C02-M4", value: "10" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C02-M2", value: "5" },
      ],
      solution: {
        steps: [
          t`The largest power of $2$ not above $1101$ is $2^{10} = 1024$, since $2^{11} = 2048$.`,
          t`So the places run from $2^0$ up to $2^{10}$: $11$ places.`,
          t`Indeed $1101 = (10001001101)_2$, which has $11$ binary digits.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Sep Q41" },
      stem: t`What is the LCM of $(11110)_2$, $(10100)_2$ and $(11011)_2$? Give it in binary.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lcm", bs: ["11110", "10100", "11011"] } },
      options: [
        { key: "A", text: t`$(1011000)_2$`, correct: false, misconceptionId: "C02-M5", value: "88" },
        { key: "B", text: t`$(1000011100)_2$`, correct: true, value: "540" },
        { key: "C", text: t`$(11100001)_2$`, correct: false, misconceptionId: "C02-M1", value: "225" },
        { key: "D", text: t`$(11100)_2$`, correct: false, misconceptionId: "C02-M3", value: "28" },
      ],
      solution: {
        steps: [
          t`Convert: $(11110)_2 = 30$, $(10100)_2 = 20$ and $(11011)_2 = 27$.`,
          t`$30 = 2 \times 3 \times 5$, $20 = 2^2 \times 5$ and $27 = 3^3$.`,
          t`The LCM takes each prime's highest power: $2^2 \times 3^3 \times 5$ $= 540$.`,
          t`$540 = 512 + 16 + 8 + 4$, so the LCM is $(1000011100)_2$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`Which binary numeral stands for the decimal number $92$?`,
      verify: { kind: "value", inputs: { n: "92" }, params: { ask: "bin" } },
      options: [
        { key: "A", text: t`$(11100)_2$`, correct: false, misconceptionId: "C02-M3", value: "28" },
        { key: "B", text: t`$(1011100)_2$`, correct: true, value: "92" },
        { key: "C", text: t`$(11101)_2$`, correct: false, misconceptionId: "C02-M1", value: "29" },
        { key: "D", text: t`$(1111)_2$`, correct: false, misconceptionId: "C02-M2", value: "15" },
      ],
      solution: {
        steps: [
          t`Subtract powers of $2$: $92 - 64 = 28$, $28 - 16 = 12$, $12 - 8 = 4$, $4 - 4 = 0$.`,
          t`Under the places $64, 32, 16, 8, 4, 2, 1$ write $1, 0, 1, 1, 1, 0, 0$.`,
          t`So $92 = (1011100)_2$. Check: $64 + 16 + 8 + 4 = 92$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`How many binary digits does the decimal number $896$ need?`,
      verify: { kind: "value", inputs: { n: "896" }, params: { ask: "bits" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C02-M4", value: "9" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M2", value: "3" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C02-M5", value: "11" },
      ],
      solution: {
        steps: [
          t`The largest power of $2$ not above $896$ is $2^9 = 512$, since $2^{10} = 1024$.`,
          t`So the places run from $2^0$ up to $2^9$: $10$ places.`,
          t`Indeed $896 = 512 + 256 + 128$ $= (1110000000)_2$, with $10$ binary digits.`,
        ],
      },
    },
  ],
};
