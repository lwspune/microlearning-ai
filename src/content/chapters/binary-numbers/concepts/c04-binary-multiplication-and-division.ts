import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`In decimal, multiplying by ten just puts a $0$ on the end: $37 \times 10 = 370$. **What does multiplying by $(10)_2$ do to a binary number?**`,
    reveal: t`$(10)_2$ is two, and each binary place is worth twice the one on its right. So multiplying by $(10)_2$ moves every bit one place left: put a $0$ on the end. For example, $(101)_2 \times (10)_2 = (1010)_2$, that is $5 \times 2 = 10$.`,
  },
  explanation: {
    intuition: [
      t`Binary multiplication works like decimal long multiplication, but with only the digits $0$ and $1$.`,
      t`Multiplying by one bit is easy: $\times\, 1$ copies the number and $\times\, 0$ gives $0$.`,
      t`Multiplying by $(10)_2$, which is $2$, moves every bit one place left: put a $0$ on the end.`,
      t`So each $1$ in the number you multiply by gives a shifted copy; adding the copies gives the product.`,
      t`Division asks how many times one number fits into another, and what is left over.`,
      t`You can also convert to decimal, do the arithmetic there, and convert the answer back to binary.`,
    ],
    formal: [
      {
        title: "Multiplying by powers of 2",
        points: [
          t`A $1$ followed by $k$ zeros is $2^k$: $(10)_2 = 2$, $(100)_2 = 4$, $(1000)_2 = 8$.`,
          t`Multiplying by $(10)_2$ doubles every place value, so each bit moves one place left.`,
          t`So $\times\, (10)_2$ puts one $0$ on the end: $(1101)_2 \times (10)_2 = (11010)_2$.`,
          t`Check in decimal: $13 \times 2 = 26$ $= 16 + 8 + 2$.`,
          t`In the same way, $\times\, (100)_2$ puts two $0$s on the end, and $\times\, (1000)_2$ three.`,
        ],
      },
      {
        title: "Shift and add",
        points: [
          t`The **multiplier** is the number you multiply by; a **partial product** is the other number times one of its bits.`,
          t`For each $1$ in the multiplier, write the other number shifted left to that $1$'s place.`,
          t`Take $(1101)_2 \times (110)_2$: the $1$s of $(110)_2$ sit in the $2$s and $4$s places.`,
          t`So the partial products are $(11010)_2$ and $(110100)_2$; the $0$ bit gives none.`,
          t`Add them in binary: $(11010)_2 + (110100)_2$ $= (1001110)_2$.`,
          t`Check in decimal: $13 \times 6 = 78$ $= 64 + 8 + 4 + 2$.`,
        ],
      },
      {
        title: "Quotient and remainder",
        points: [
          t`In $A \div B$, $A$ is the **dividend**, the number divided, and $B$ is the **divisor**.`,
          t`The **quotient** $Q$ is how many whole times $B$ fits into $A$.`,
          t`The **remainder** $R$ is what is left over, always less than $B$.`,
          t`They satisfy $A = BQ + R$, with $0 \le R < B$.`,
          t`For example, $39 \div 5$: $39 = 5 \times 7 + 4$, so $Q = 7$ and $R = 4$.`,
        ],
      },
      {
        title: "Binary long division",
        points: [
          t`Long division in binary is simple: at each step the divisor fits once (write $1$) or not at all (write $0$).`,
          t`Find $(11010)_2 \div (101)_2$: the first three bits, $(110)_2$, are at least $(101)_2$, so write $1$.`,
          t`Subtract: $(110)_2 - (101)_2 = (1)_2$; bring down the next bit to get $(11)_2$.`,
          t`$(11)_2$ is less than $(101)_2$, so write $0$ in the quotient and bring down the last bit: $(110)_2$.`,
          t`$(110)_2 - (101)_2 = (1)_2$, so write $1$: the quotient is $(101)_2$ and the remainder $(1)_2$.`,
          t`Check: $26 = 5 \times 5 + 1$. Every time the divisor does not fit, the $0$ must be written.`,
        ],
      },
      {
        title: "Convert, work, convert back",
        points: [
          t`Any of these can be done in decimal: convert each number, do the arithmetic, then convert back.`,
          t`Convert back by dividing by $2$ again and again, reading the remainders from the last to the first.`,
          t`Take $(100111)_2 \div (101)_2$: that is $39 \div 5$, so $Q = 7$ and $R = 4$.`,
          t`Back in binary, $Q = (111)_2$ and $R = (100)_2$.`,
          t`When the options are in binary, convert **every** answer back, the remainder too.`,
          t`Read the order asked: “the remainder and the quotient, respectively” lists the remainder first.`,
        ],
      },
      {
        title: "Identities with binary values",
        points: [
          t`Some questions give values in binary and ask for an algebraic expression: convert them first.`,
          t`Then look for an identity before doing heavy arithmetic, such as the **sum of cubes**:`,
          t`$x^3 + y^3$ $= (x + y)(x^2 - xy + y^2)$.`,
          t`Also $(x - y)^2 + xy$ $= x^2 - 2xy + y^2 + xy$, which is $x^2 - xy + y^2$.`,
          t`So given $x^3 + y^3$ and $x + y$, divide: the quotient is $(x - y)^2 + xy$.`,
          t`Careful: $x^2 - xy + y^2$ is not $(x - y)^2$, which is $x^2 - 2xy + y^2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $(10011)_2 \times (110)_2$ by shifting and adding, and check it in decimal.`,
      steps: [
        t`The multiplier $(110)_2$ has its $1$s in the $2$s and $4$s places.`,
        t`So the partial products are $(10011)_2$ shifted one place, $(100110)_2$, and shifted two places, $(1001100)_2$.`,
        t`Add in binary, carrying where $1 + 1 = (10)_2$: $(100110)_2 + (1001100)_2$ $= (1110010)_2$.`,
        t`Check: $19 \times 6 = 114$, and $(1110010)_2 = 64 + 32 + 16 + 2$ $= 114$.`,
      ],
      answer: t`$(10011)_2 \times (110)_2 = (1110010)_2$, which is $114$.`,
    },
    visualSpec: t`Two binary numbers stacked for long multiplication: tapping a $1$ in the multiplier drops a shifted copy of the other number into place, and the copies add with their carries shown.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Adding the partial products without shifting them, so each $1$ of the multiplier just adds another copy of the number`,
      remediation: t`Each $1$ in the multiplier stands for its own place value, $1, 2, 4, \ldots$, so its copy is shifted left to that place. A copy for the $4$s place ends in two $0$s.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`In long division, bringing down the next bit without writing $0$ in the quotient when the divisor does not fit`,
      remediation: t`Every time the divisor does not fit, write $0$ in the quotient before bringing down the next bit. Check with $A = BQ + R$: the quotient's $0$s are real digits.`,
      fallback: { kind: "ext", topic: "long division" },
    },
    {
      id: "C04-M3",
      mistake: "Converting the decimal answer back to binary with the remainders read from the first to the last, so the bits come out reversed",
      remediation: t`When you divide by $2$ again and again, the first remainder is the units bit, on the **right**. Read the remainders from the last to the first.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: "Forgetting to convert the decimal answer back, and picking the binary numeral that has the same digits",
      remediation: t`$(110)_2$ is six, not one hundred and ten. After working in decimal, convert the answer back to binary before you compare it with binary options.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Giving the quotient and the remainder in the wrong order",
      remediation: "Read the order the question asks for: “the remainder and the quotient, respectively” means the remainder comes first. The remainder is the one less than the divisor.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Taking $x^2 - xy + y^2$ to be $(x - y)^2$, and so adding $xy$ again to get $(x - y)^2 + xy$`,
      remediation: t`$(x - y)^2 = x^2 - 2xy + y^2$, so $(x - y)^2 + xy = x^2 - xy + y^2$. That is exactly $(x^3 + y^3) \div (x + y)$: nothing more to add.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
  ],
  engineNotes: [
    t`C04-M1 applies only to multiplication, C04-M2 only to division (and needs a quotient with a $0$ bit), C04-M5 only to quotient-and-remainder questions, C04-M6 only to the sum-of-cubes question.`,
    t`C04-M3 gives the key when the answer's binary numeral reads the same both ways, such as $(101)_2$ (the PYQ 2022 Apr Q53 quotient): diagnose it with a numeral that does not.`,
    t`C04-M4 applies only when the decimal answer is written with the digits $0$ and $1$ alone, such as $110$ or $11$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is $(1010)_2 \times (1011)_2$ in binary?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mul", bs: ["1010", "1011"] } },
      options: [
        { key: "A", text: t`$(111011)_2$`, correct: false, misconceptionId: "C04-M3", value: "59" },
        { key: "B", text: t`$(110)_2$`, correct: false, misconceptionId: "C04-M4", value: "6" },
        { key: "C", text: t`$(1101110)_2$`, correct: true, value: "110" },
        { key: "D", text: t`$(11110)_2$`, correct: false, misconceptionId: "C04-M1", value: "30" },
      ],
      solution: {
        steps: [
          t`The $1$s of $(1011)_2$ sit in the $1$s, $2$s and $8$s places.`,
          t`Partial products: $(1010)_2$, $(10100)_2$ and $(1010000)_2$.`,
          t`In decimal they are $10 + 20 + 80 = 110$, which is $10 \times 11$.`,
          t`$110 = 64 + 32 + 8 + 4 + 2$ $= (1101110)_2$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q53" },
      stem: t`What is $(11111101)_2 \div (10111)_2$ equal to?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "div", bs: ["11111101", "10111"] } },
      options: [
        { key: "A", text: t`$(111)_2$`, correct: false, misconceptionId: "C04-M2", value: "7" },
        { key: "B", text: t`$(1101)_2$`, correct: false, misconceptionId: "C04-M3", value: "13" },
        { key: "C", text: t`$(11)_2$`, correct: false, misconceptionId: "C04-M4", value: "3" },
        { key: "D", text: t`$(1011)_2$`, correct: true, value: "11" },
      ],
      solution: {
        steps: [
          t`Convert: $(11111101)_2 = 253$ and $(10111)_2 = 23$.`,
          t`Divide: $253 = 23 \times 11$, exactly.`,
          t`Convert back: $11 = 8 + 2 + 1$ $= (1011)_2$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Sep Q2" },
      stem: t`What are the remainder and the quotient, respectively, of the binary division $(101110)_2 \div (111)_2$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "qr", order: "rq", bs: ["101110", "111"] } },
      options: [
        { key: "A", text: t`$(1)_2$ and $(11)_2$`, correct: false, misconceptionId: "C04-M3", value: "(1, 3)" },
        { key: "B", text: t`$(110)_2$ and $(100)_2$`, correct: false, misconceptionId: "C04-M5", value: "(6, 4)" },
        { key: "C", text: t`$(100)_2$ and $(110)_2$`, correct: true, value: "(4, 6)" },
        { key: "D", text: t`$(100)_2$ and $(11)_2$`, correct: false, misconceptionId: "C04-M2", value: "(4, 3)" },
      ],
      solution: {
        steps: [
          t`Convert: $(101110)_2 = 46$ and $(111)_2 = 7$.`,
          t`$46 = 7 \times 6 + 4$, so the quotient is $6$ and the remainder $4$.`,
          t`In binary, the quotient is $(110)_2$ and the remainder $(100)_2$.`,
          t`The remainder comes first: $(100)_2$ and $(110)_2$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q54" },
      stem: t`If $x^3 + y^3 = (100100011011)_2$ and $x + y = (10101)_2$, what is $(x - y)^2 + xy$ equal to?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "id3", c3: "100100011011", s: "10101" } },
      options: [
        { key: "A", text: t`$(11011101)_2$`, correct: false, misconceptionId: "C04-M6", value: "221" },
        { key: "B", text: t`$(1111011)_2$`, correct: false, misconceptionId: "C04-M3", value: "123" },
        { key: "C", text: t`$(111)_2$`, correct: false, misconceptionId: "C04-M4", value: "7" },
        { key: "D", text: t`$(1101111)_2$`, correct: true, value: "111" },
      ],
      solution: {
        steps: [
          t`Convert: $x^3 + y^3 = 2331$ and $x + y = 21$.`,
          t`$(x - y)^2 + xy = x^2 - xy + y^2$ $= (x^3 + y^3) \div (x + y)$.`,
          t`$2331 \div 21 = 111$.`,
          t`$111 = 64 + 32 + 8 + 4 + 2 + 1$ $= (1101111)_2$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is $(11001)_2 \times (100)_2$ in binary?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mul", bs: ["11001", "100"] } },
      options: [
        { key: "A", text: t`$(100)_2$`, correct: false, misconceptionId: "C04-M4", value: "4" },
        { key: "B", text: t`$(1100100)_2$`, correct: true, value: "100" },
        { key: "C", text: t`$(11001)_2$`, correct: false, misconceptionId: "C04-M1", value: "25" },
        { key: "D", text: t`$(10011)_2$`, correct: false, misconceptionId: "C04-M3", value: "19" },
      ],
      solution: {
        steps: [
          t`$(100)_2 = 4 = 2^2$, so multiplying by it puts two $0$s on the end.`,
          t`$(11001)_2 \times (100)_2 = (1100100)_2$.`,
          t`Check: $25 \times 4 = 100$ $= 64 + 32 + 4$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What are the quotient and the remainder, respectively, of $(10001101)_2 \div (1101)_2$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "qr", order: "qr", bs: ["10001101", "1101"] } },
      options: [
        { key: "A", text: t`$(1010)_2$ and $(1011)_2$`, correct: true, value: "(10, 11)" },
        { key: "B", text: t`$(11)_2$ and $(1011)_2$`, correct: false, misconceptionId: "C04-M2", value: "(3, 11)" },
        { key: "C", text: t`$(101)_2$ and $(1101)_2$`, correct: false, misconceptionId: "C04-M3", value: "(5, 13)" },
        { key: "D", text: t`$(10)_2$ and $(11)_2$`, correct: false, misconceptionId: "C04-M4", value: "(2, 3)" },
      ],
      solution: {
        steps: [
          t`Convert: $(10001101)_2 = 141$ and $(1101)_2 = 13$.`,
          t`$141 = 13 \times 10 + 11$, so the quotient is $10$ and the remainder $11$.`,
          t`In binary: $10 = (1010)_2$ and $11 = (1011)_2$; the $0$s in $(1010)_2$ are real digits.`,
        ],
      },
    },
  ],
};
