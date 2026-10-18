import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Without a calculator: what is $(101)^4$?`,
    reveal: t`$(101)^4 = (100 + 1)^4$ $= 100^4 + 4(100)^3 + 6(100)^2 + 4(100) + 1$ $= 100000000 + 4000000 + 60000 + 400 + 1$ $= 104060401$. Read the answer in pairs of digits: $1, 04, 06, 04, 01$. The coefficients $1, 4, 6, 4, 1$ sit right there.`,
  },
  explanation: {
    intuition: [
      t`To find a power of an awkward number, split it into a **round** number, like $100$, and a small one: $101 = 100 + 1$, $9.8 = 10 - 0.2$.`,
      t`Powers of the round number are a $1$ followed by zeros, and powers of the small one are tiny or simple.`,
      t`So the binomial expansion of the split number is a few easy additions.`,
      t`A **surd** is a root that is not a whole number, such as $\sqrt{2}$ or $\sqrt{3}$.`,
      t`$(a + b)^n$ and $(a - b)^n$ have the same terms, except that the odd powers of $b$ change sign.`,
      t`So adding the two cancels half the terms, and often every surd with them.`,
    ],
    formal: [
      {
        title: "Split the number",
        points: [
          t`Write the number as a round number plus or minus a small one.`,
          t`For example, $(98)^3 = (100 - 2)^3$.`,
          t`And $(0.97)^2 = (1 - 0.03)^2$.`,
          t`Then expand with the binomial theorem and add up the terms.`,
        ],
      },
      {
        title: "Signs in (a − b)ⁿ",
        points: [
          t`Recall: in $(a + b)^n$, the term with $b^r$ is $^nC_r\,a^{n-r}b^r$.`,
          t`In $(a - b)^n$ that term is $^nC_r\,a^{n-r}(-b)^r$.`,
          t`$(-b)^r$ is negative only when $r$ is odd, so the signs alternate: $+, -, +, -, \ldots$`,
          t`For example, $(a - b)^4$ equals $a^4 - 4a^3b + 6a^2b^2$ $- 4ab^3 + b^4$.`,
        ],
      },
      {
        title: "Keep every term",
        points: [
          t`An exact value needs all $n + 1$ terms of the expansion.`,
          t`Dropping the small later terms gives only an **approximation**: a value close to the answer, but not equal to it.`,
        ],
      },
      {
        title: "Adding the two expansions",
        points: [
          t`Add $(a + b)^n$ and $(a - b)^n$ term by term.`,
          t`The terms with odd powers of $b$ have opposite signs, so they cancel.`,
          t`The terms with even powers of $b$ are equal, so each is doubled.`,
          t`So $(a + b)^n + (a - b)^n$ equals $2[{}^nC_0\,a^n + {}^nC_2\,a^{n-2}b^2$ $+ {}^nC_4\,a^{n-4}b^4 + \ldots]$.`,
        ],
      },
      {
        title: "Subtracting the two expansions",
        points: [
          t`Now take $(a - b)^n$ away from $(a + b)^n$, term by term.`,
          t`The terms with even powers of $b$ are equal, so they cancel.`,
          t`The terms with odd powers of $b$ have opposite signs, so each is doubled.`,
          t`So $(a + b)^n - (a - b)^n$ equals $2[{}^nC_1\,a^{n-1}b$ $+ {}^nC_3\,a^{n-3}b^3 + \ldots]$.`,
          t`In short: the sum keeps the even powers of $b$, the difference the odd ones, and each kept term is doubled.`,
        ],
      },
      {
        title: "Why surds vanish",
        points: [
          t`Take $a = \sqrt{3}$, $b = \sqrt{2}$ and an even $n$.`,
          t`The sum $(a + b)^n + (a - b)^n$ keeps only the even powers of $b$.`,
          t`The power of $a$ is $n$ minus the power of $b$, so for an even $n$ it is even too.`,
          t`An even power of a square root is a whole number: $(\sqrt{3})^4 = 9$, $(\sqrt{2})^2 = 2$.`,
          t`So every term of the sum is a whole number, and so is the sum.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the value of $\left(\sqrt{3}+\sqrt{2}\right)^4$ $+ \left(\sqrt{3}-\sqrt{2}\right)^4$.`,
      steps: [
        t`Take $a = \sqrt{3}$, $b = \sqrt{2}$, $n = 4$: $(a + b)^4 = a^4 + 4a^3b$ $+ 6a^2b^2 + 4ab^3 + b^4$, and in $(a - b)^4$ the terms with $b$ and $b^3$ are negative.`,
        t`Add the two: $4a^3b$ and $4ab^3$ cancel, the other terms double: $2\left(a^4 + 6a^2b^2 + b^4\right)$.`,
        t`Work out the powers: $a^4 = (\sqrt{3})^4 = 9$, $a^2b^2 = 3 \cdot 2 = 6$, $b^4 = (\sqrt{2})^4 = 4$.`,
        t`So the sum is $2(9 + 6 \cdot 6 + 4) = 2(49) = 98$.`,
      ],
      answer: t`$\left(\sqrt{3}+\sqrt{2}\right)^4$ $+ \left(\sqrt{3}-\sqrt{2}\right)^4 = 98$.`,
    },
    visualSpec: t`Two rows of term cards, one for $(a + b)^n$ and one for $(a - b)^n$; toggle add or subtract and watch the matching cards cancel in pairs while the rest double.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Believes (a + b)^n = a^n + b^n, so keeps only the first and last terms",
      remediation: t`$(a + b)^n$ has $n + 1$ terms, not two: even $(a + b)^2 = a^2 + 2ab + b^2$ has a middle term. Write every term $^nC_r\,a^{n-r}b^r$ from $r = 0$ to $r = n$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M2",
      mistake: "Swaps which terms cancel: keeps the odd powers of b in (a + b)^n + (a - b)^n, and the even powers in the difference",
      remediation: t`In $(a - b)^n$ the terms with odd powers of $b$ are the negative ones. Adding the two expansions cancels them and doubles the even powers; subtracting cancels the even powers and doubles the odd ones.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M3",
      mistake: "Finds the terms that survive the sum or difference but adds them once, forgetting to double",
      remediation: t`Each surviving term comes once from each bracket, so it is counted twice: $(a + b)^n + (a - b)^n = 2\left[{}^nC_0\,a^n + {}^nC_2\,a^{n-2}b^2 + \ldots\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "In (a - b)^n puts a minus sign on every term after the first, instead of alternating the signs",
      remediation: t`The term with $b^r$ is $^nC_r\,a^{n-r}(-b)^r$, and $(-b)^r$ is negative only when $r$ is odd. So the signs alternate: $+, -, +, -, \ldots$`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M5",
      mistake: "Leaves out the binomial coefficients, writing (a + b)^n = a^n + a^(n-1) b + ... + b^n",
      remediation: t`Each term carries its coefficient $^nC_r$: for $n = 4$ they are $1, 4, 6, 4, 1$, and for $n = 5$ they are $1, 5, 10, 10, 5, 1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M6",
      mistake: "Stops after the first two terms, a^n + n a^(n-1) b, as if approximating, when the exact value is asked",
      remediation: t`The expansion has $n + 1$ terms and the exact value needs all of them. Dropping the small later terms gives only an approximation.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C07-M2 and C07-M3 have models only for a sum or difference of two powers, C07-M6 only for a single power, and C07-M4 only when (a - b)^n appears.",
    "For a sum (a + b)^n + (a - b)^n with n odd, C07-M1 and C07-M4 both give 2a^n: never tag both on one such item. For a difference with n even, C07-M1 gives 0.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q5(i)" },
      stem: t`Using the binomial theorem, $(102)^4 = (100 + 2)^4 = ?$`,
      verify: { kind: "value", inputs: { a: "100", b: "2", n: "4" }, params: { op: "plus" } },
      options: [
        { key: "A", text: t`$102040816$`, correct: false, misconceptionId: "C07-M5", value: "102040816" },
        { key: "B", text: t`$108000000$`, correct: false, misconceptionId: "C07-M6", value: "108000000" },
        { key: "C", text: t`$108243216$`, correct: true, value: "108243216" },
        { key: "D", text: t`$100000016$`, correct: false, misconceptionId: "C07-M1", value: "100000016" },
      ],
      solution: {
        steps: [
          t`$(100 + 2)^4 = 100^4 + 4(100)^3(2) + 6(100)^2(2)^2 + 4(100)(2)^3 + 2^4$.`,
          t`$= 100000000 + 8000000 + 240000 + 3200 + 16$.`,
          t`$= 108243216$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q6(i)" },
      stem: t`Using the binomial theorem, $(9.9)^3 = (10 - 0.1)^3 = ?$`,
      verify: { kind: "value", inputs: { a: "10", b: "1/10", n: "3" }, params: { op: "minus" } },
      options: [
        { key: "A", text: t`$969.699$`, correct: false, misconceptionId: "C07-M4", value: "969699/1000" },
        { key: "B", text: t`$990.099$`, correct: false, misconceptionId: "C07-M5", value: "990099/1000" },
        { key: "C", text: t`$970$`, correct: false, misconceptionId: "C07-M6", value: "970" },
        { key: "D", text: t`$970.299$`, correct: true, value: "970299/1000" },
      ],
      solution: {
        steps: [
          t`$(10 - 0.1)^3 = 10^3 - 3(10)^2(0.1) + 3(10)(0.1)^2 - (0.1)^3$: the signs alternate.`,
          t`$= 1000 - 30 + 0.3 - 0.001$.`,
          t`$= 970.299$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q4(i)" },
      stem: t`$\left(\sqrt{3}+\sqrt{2}\right)^6 + \left(\sqrt{3}-\sqrt{2}\right)^6 = ?$`,
      verify: { kind: "value", inputs: { a: "sqrt(3)", b: "sqrt(2)", n: "6" }, params: { op: "sum" } },
      options: [
        { key: "A", text: t`$54$`, correct: false, misconceptionId: "C07-M4", value: "54" },
        { key: "B", text: t`$970$`, correct: true, value: "970" },
        { key: "C", text: t`$396 \sqrt{6}$`, correct: false, misconceptionId: "C07-M2", value: "396*sqrt(6)" },
        { key: "D", text: t`$485$`, correct: false, misconceptionId: "C07-M3", value: "485" },
      ],
      solution: {
        steps: [
          t`With $a = \sqrt{3}$, $b = \sqrt{2}$, $n = 6$, the odd powers of $b$ cancel: the sum is $2\left[a^6 + 15a^4b^2 + 15a^2b^4 + b^6\right]$.`,
          t`$a^6 = 27$, $a^4b^2 = 9 \cdot 2 = 18$, $a^2b^4 = 3 \cdot 4 = 12$, $b^6 = 8$.`,
          t`$2\left[27 + 270 + 180 + 8\right] = 2(485) = 970$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q4(ii)" },
      stem: t`$\left(\sqrt{5}+1\right)^5 - \left(\sqrt{5}-1\right)^5 = ?$`,
      verify: { kind: "value", inputs: { a: "sqrt(5)", b: "1", n: "5" }, params: { op: "diff" } },
      options: [
        { key: "A", text: t`$352$`, correct: true, value: "352" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C07-M1", value: "2" },
        { key: "C", text: t`$160 \sqrt{5}$`, correct: false, misconceptionId: "C07-M2", value: "160*sqrt(5)" },
        { key: "D", text: t`$176$`, correct: false, misconceptionId: "C07-M3", value: "176" },
      ],
      solution: {
        steps: [
          t`With $a = \sqrt{5}$, $b = 1$, $n = 5$, the difference keeps the odd powers of $b$: $2\left[5a^4 + 10a^2 + 1\right]$.`,
          t`$a^4 = 25$ and $a^2 = 5$, so the bracket is $125 + 50 + 1 = 176$.`,
          t`The value is $2(176) = 352$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q3(ii)" },
      stem: t`$\left(2+\sqrt{5}\right)^5 + \left(2-\sqrt{5}\right)^5 = ?$`,
      verify: { kind: "value", inputs: { a: "2", b: "sqrt(5)", n: "5" }, params: { op: "sum" } },
      options: [
        { key: "A", text: t`$64$`, correct: false, misconceptionId: "C07-M1", value: "64" },
        { key: "B", text: t`$610 \sqrt{5}$`, correct: false, misconceptionId: "C07-M2", value: "610*sqrt(5)" },
        { key: "C", text: t`$244$`, correct: false, misconceptionId: "C07-M5", value: "244" },
        { key: "D", text: t`$1364$`, correct: true, value: "1364" },
      ],
      solution: {
        steps: [
          t`With $a = 2$, $b = \sqrt{5}$, $n = 5$, the sum keeps the even powers of $b$: $2\left[a^5 + 10a^3b^2 + 5ab^4\right]$.`,
          t`$a^5 = 32$, $10a^3b^2 = 10 \cdot 8 \cdot 5 = 400$, $5ab^4 = 5 \cdot 2 \cdot 25 = 250$.`,
          t`$2(32 + 400 + 250) = 2(682) = 1364$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q3(i)" },
      stem: t`$\left(\sqrt{3}+1\right)^4 - \left(\sqrt{3}-1\right)^4 = ?$`,
      verify: { kind: "value", inputs: { a: "sqrt(3)", b: "1", n: "4" }, params: { op: "diff" } },
      options: [
        { key: "A", text: t`$32 \sqrt{3}$`, correct: true, value: "32*sqrt(3)" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C07-M1", value: "0" },
        { key: "C", text: t`$16 \sqrt{3}$`, correct: false, misconceptionId: "C07-M3", value: "16*sqrt(3)" },
        { key: "D", text: t`$8 \sqrt{3}$`, correct: false, misconceptionId: "C07-M5", value: "8*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`With $a = \sqrt{3}$, $b = 1$, $n = 4$, the difference keeps the odd powers of $b$: $2\left[4a^3 + 4a\right]$.`,
          t`$a^3 = (\sqrt{3})^3 = 3\sqrt{3}$, so the bracket is $12\sqrt{3} + 4\sqrt{3} = 16\sqrt{3}$.`,
          t`The value is $2(16\sqrt{3}) = 32\sqrt{3}$.`,
        ],
      },
    },
  ],
};
