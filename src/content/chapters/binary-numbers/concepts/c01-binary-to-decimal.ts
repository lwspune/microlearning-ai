import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Binary uses only the digits $0$ and $1$. Counting goes $0$, $1$, and then the digits run out. **How do you write two, and what number is $(100)_2$?**`,
    reveal: t`Do what decimal does after $9$: write $0$ and start a new place on the left. So two is $(10)_2$, three is $(11)_2$ and four is $(100)_2$. Each new place is worth twice the one before: $1, 2, 4, \ldots$`,
  },
  explanation: {
    intuition: [
      t`Everyday numbers are **decimal**, or base $10$: they use ten digits, $0$ to $9$.`,
      t`In decimal each place is worth ten times the place on its right: ones, tens, hundreds.`,
      t`**Binary**, or base $2$, uses only two digits, $0$ and $1$; a binary digit is called a **bit**.`,
      t`In binary each place is worth **twice** the place on its right: $1, 2, 4, 8, 16, \ldots$`,
      t`A small $2$ after brackets marks a binary number: $(101)_2 = 4 + 0 + 1 = 5$.`,
      t`A number with no subscript is decimal: $101$ is one hundred and one.`,
    ],
    formal: [
      {
        title: "Place values are powers of 2",
        points: [
          t`$2^k$, a **power of 2**, means $k$ twos multiplied together, and $2^0 = 1$.`,
          t`Number the places from the right, starting at $0$: place $k$ is worth $2^k$.`,
          t`So from the right the places are worth $1, 2, 4, 8, 16, 32, 64, 128, \ldots$`,
          t`Each is double the one before: $2^8 = 256$, $2^9 = 512$, $2^{10} = 1024$.`,
          t`A $4$-bit number $(b_3 b_2 b_1 b_0)_2$, each bit $0$ or $1$, means:`,
          t`$8b_3 + 4b_2 + 2b_1 + b_0$.`,
        ],
      },
      {
        title: "Binary to decimal",
        points: [
          t`To convert to decimal, write each bit's place value above it, starting with $1$ on the right.`,
          t`Then add the place values that sit above a $1$; a $0$ bit adds nothing.`,
          t`Take $(100111)_2$: from the left its places are worth $32, 16, 8, 4, 2, 1$.`,
          t`Its $1$s sit under $32$, $4$, $2$ and $1$.`,
          t`So $(100111)_2 = 32 + 4 + 2 + 1$ $= 39$.`,
          t`Check the size: a $6$-bit number with a leading $1$ lies from $32$ to $63$.`,
        ],
      },
      {
        title: "Long numbers",
        points: [
          t`For a long number, count its bits first: the leftmost of $n$ bits is worth $2^{n - 1}$.`,
          t`$(10000010001)_2$ has $11$ bits, so its leftmost $1$ is worth $2^{10} = 1024$.`,
          t`Its other $1$s sit under $16$ and $1$.`,
          t`So $(10000010001)_2 = 1024 + 16 + 1$ $= 1041$.`,
          t`Runs of zeros add nothing, so skip them; just keep counting the places.`,
        ],
      },
      {
        title: "Digits written as letters",
        points: [
          t`Some questions write the bits as letters, like $(abbab)_2$ with $a > b$.`,
          t`Binary has only the digits $0$ and $1$, so the larger letter is $1$ and the smaller is $0$.`,
          t`Here $a = 1$ and $b = 0$, so the number is $(10010)_2$.`,
          t`Its $1$s sit under $16$ and $2$: $(10010)_2 = 16 + 2 = 18$.`,
        ],
      },
      {
        title: "The largest n-bit number",
        points: [
          t`The largest number with $n$ bits has every bit equal to $1$.`,
          t`$(1111)_2 = 8 + 4 + 2 + 1 = 15$, one less than the next place value, $16$.`,
          t`In general, $n$ ones make $2^n - 1$.`,
          t`$n$ bits give $2^n$ different numbers, but they start at $0$: from $0$ up to $2^n - 1$.`,
          t`So $5$ bits reach at most $2^5 - 1 = 31$.`,
        ],
      },
      {
        title: "Values given in binary",
        points: [
          t`When a question gives its values in binary, convert each one to decimal first.`,
          t`Then do the arithmetic in decimal, as usual.`,
          t`For example, $(101)_2 \times (111)_2 = 5 \times 7$ $= 35$.`,
          t`If the options are in binary too, convert each option, or convert your answer back (the next concept).`,
        ],
      },
    ],
    worked: {
      prompt: t`If $x = (1111)_2$, $y = (1001)_2$ and $z = (110)_2$, find $x^3 - y^3 - z^3 - 3xyz$.`,
      steps: [
        t`Convert first: $x = 8 + 4 + 2 + 1 = 15$.`,
        t`$y = 8 + 1 = 9$ and $z = 4 + 2 = 6$.`,
        t`Notice $y + z = 15 = x$, so $x^3 = (y + z)^3$ $= y^3 + z^3 + 3yz(y + z)$.`,
        t`That is $x^3 = y^3 + z^3 + 3xyz$, so $x^3 - y^3 - z^3 - 3xyz = 0$.`,
      ],
      answer: t`$x^3 - y^3 - z^3 - 3xyz = 0$, which is $(0)_2$ in binary.`,
    },
    visualSpec: t`A row of switches under the place values $128, 64, \ldots, 1$: turning a switch on makes that bit $1$ and adds its place value to a running decimal total.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Starting the place values at $2^1 = 2$ on the right, so the bits are worth $2, 4, 8, \ldots$`,
      remediation: t`The rightmost bit is the units place, worth $2^0 = 1$. From the right the places go $1, 2, 4, 8, \ldots$, so check that your last place is $1$.`,
      fallback: { kind: "ext", topic: "powers of 2" },
    },
    {
      id: "C01-M2",
      mistake: t`Reading the place values from the left, so the leftmost bit is worth $1$`,
      remediation: t`Place values grow from the **right**: the rightmost bit is worth $1$, the next $2$, then $4$. Start lining up the place values at the right-hand end.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Adding every place value, even those that sit above a $0$`,
      remediation: t`Only the bits that are $1$ count: a $0$ in a place adds nothing. Cross out the places that hold $0$ before you add.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Reading the binary digits as an ordinary decimal number, without converting",
      remediation: t`A number marked $(\ldots)_2$ is binary, not decimal. Convert it by adding the place values $1, 2, 4, 8, \ldots$ that sit above its $1$s.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Taking the larger letter as $0$ and the smaller one as $1$`,
      remediation: t`Binary has only the digits $0$ and $1$, and $1 > 0$, so the larger letter is $1$ and the smaller one is $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Taking $2^n$ as the largest number with $n$ bits`,
      remediation: t`$n$ bits give $2^n$ numbers, but they start at $0$, so the largest is $2^n - 1$: all $n$ bits equal to $1$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M2 gives the key for a numeral that reads the same both ways, such as $(1001)_2$; diagnose it with a numeral that does not.`,
    t`C01-M3 gives the key for a numeral of all $1$s, and C01-M2 and C01-M3 do not apply to the largest-$n$-bit question.`,
    t`C01-M5 applies only to numerals written with letters; C01-M6 only to the largest-$n$-bit question.`,
    t`C01-M1 doubles every value, so on an expression item it scales the answer and gives the key when the key is $0$ (as in NDA 2025 Apr Q7): use an expression with a non-zero value.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q40" },
      stem: t`A binary number is written $(cdccddcccddd)_2$, where $c$ and $d$ are its two digits and $c > d$. What is its decimal value?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dec", b: "cdccddcccddd", one: "c" } },
      options: [
        { key: "A", text: t`$2872$`, correct: true, value: "2872" },
        { key: "B", text: t`$461$`, correct: false, misconceptionId: "C01-M2", value: "461" },
        { key: "C", text: t`$4095$`, correct: false, misconceptionId: "C01-M3", value: "4095" },
        { key: "D", text: t`$1223$`, correct: false, misconceptionId: "C01-M5", value: "1223" },
      ],
      solution: {
        steps: [
          t`Binary has only the digits $0$ and $1$; since $c > d$, $c = 1$ and $d = 0$.`,
          t`So the number is $(101100111000)_2$, with $12$ bits.`,
          t`From the left, its $1$s sit under $2048, 512, 256, 32, 16, 8$.`,
          t`$2048 + 512 + 256$ $+ 32 + 16 + 8 = 2872$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q6" },
      stem: t`What is $(1101101)_2 + (1011001)_2$ in the decimal system?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sum", bs: ["1101101", "1011001"] } },
      options: [
        { key: "A", text: t`$198$`, correct: true, value: "198" },
        { key: "B", text: t`$396$`, correct: false, misconceptionId: "C01-M1", value: "396" },
        { key: "C", text: t`$168$`, correct: false, misconceptionId: "C01-M2", value: "168" },
        { key: "D", text: t`$254$`, correct: false, misconceptionId: "C01-M3", value: "254" },
      ],
      solution: {
        steps: [
          t`$(1101101)_2 = 64 + 32 + 8 + 4 + 1$ $= 109$.`,
          t`$(1011001)_2 = 64 + 16 + 8 + 1$ $= 89$.`,
          t`The sum is $109 + 89 = 198$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is the largest number that can be written with $9$ binary digits? Give it in decimal.`,
      verify: { kind: "value", inputs: { n: "9" }, params: { ask: "max" } },
      options: [
        { key: "A", text: t`$111111111$`, correct: false, misconceptionId: "C01-M4", value: "111111111" },
        { key: "B", text: t`$512$`, correct: false, misconceptionId: "C01-M6", value: "512" },
        { key: "C", text: t`$511$`, correct: true, value: "511" },
        { key: "D", text: t`$1022$`, correct: false, misconceptionId: "C01-M1", value: "1022" },
      ],
      solution: {
        steps: [
          t`The largest $9$-bit number has every bit $1$: $(111111111)_2$.`,
          t`That is $256 + 128 + \cdots + 2 + 1$, one less than the next place value, $2^9 = 512$.`,
          t`So it is $2^9 - 1 = 511$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is the decimal value of $(110100)_2$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dec", b: "110100" } },
      options: [
        { key: "A", text: t`$52$`, correct: true, value: "52" },
        { key: "B", text: t`$104$`, correct: false, misconceptionId: "C01-M1", value: "104" },
        { key: "C", text: t`$63$`, correct: false, misconceptionId: "C01-M3", value: "63" },
        { key: "D", text: t`$110100$`, correct: false, misconceptionId: "C01-M4", value: "110100" },
      ],
      solution: {
        steps: [
          t`From the right, the places of $(110100)_2$ are worth $1, 2, 4, 8, 16, 32$.`,
          t`Its $1$s sit under $32$, $16$ and $4$.`,
          t`So $(110100)_2 = 32 + 16 + 4 = 52$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`A binary number is written $(pqqpqp)_2$, where $p$ and $q$ are its two digits and $p > q$. What is its decimal value?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dec", b: "pqqpqp", one: "p" } },
      options: [
        { key: "A", text: t`$37$`, correct: true, value: "37" },
        { key: "B", text: t`$74$`, correct: false, misconceptionId: "C01-M1", value: "74" },
        { key: "C", text: t`$100101$`, correct: false, misconceptionId: "C01-M4", value: "100101" },
        { key: "D", text: t`$26$`, correct: false, misconceptionId: "C01-M5", value: "26" },
      ],
      solution: {
        steps: [
          t`Since $p > q$, $p = 1$ and $q = 0$: the number is $(100101)_2$.`,
          t`Its $1$s sit under $32$, $4$ and $1$.`,
          t`So it is $32 + 4 + 1 = 37$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $x = (1011)_2$ and $y = (101)_2$, what is $x^2 - y^2$ in decimal?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "expr", bs: ["1011", "101"], f: "x**2 - y**2" } },
      options: [
        { key: "A", text: t`$144$`, correct: false, misconceptionId: "C01-M2", value: "144" },
        { key: "B", text: t`$176$`, correct: false, misconceptionId: "C01-M3", value: "176" },
        { key: "C", text: t`$96$`, correct: true, value: "96" },
        { key: "D", text: t`$384$`, correct: false, misconceptionId: "C01-M1", value: "384" },
      ],
      solution: {
        steps: [
          t`Convert first: $x = (1011)_2 = 8 + 2 + 1 = 11$.`,
          t`$y = (101)_2 = 4 + 1 = 5$.`,
          t`$x^2 - y^2 = 121 - 25 = 96$.`,
        ],
      },
    },
  ],
};
