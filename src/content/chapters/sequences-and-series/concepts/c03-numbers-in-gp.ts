import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Three numbers in G.P. multiply to $216$. You are told nothing else. **Can you name one of them?**`,
    reveal: t`Yes: the middle one is $6$. Write the numbers as $\frac{a}{r}, a, ar$. Their product is $\frac{a}{r} \cdot a \cdot ar = a^3$: the $r$ cancels. So $a^3 = 216$ and $a = 6$, whatever $r$ is.`,
  },
  explanation: {
    intuition: t`In a G.P. the neighbours of a term are that term divided by $r$ and multiplied by $r$. So write three numbers around the middle one: $\frac{a}{r}, a, ar$. Now the $r$s cancel in the product, which is just $a^3$: the product condition gives $a$ at once, and the other condition (usually a sum) gives $r$. Four numbers have no middle term, so centre them on $a$ the same way: $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$, with product $a^4$. Each step there multiplies by $r^2$.`,
    formal: t`**Three numbers in G.P.**: take $\frac{a}{r}, a, ar$.

$$\text{product} = a^3, \qquad \text{sum} = a\left(\frac{1}{r} + 1 + r\right)$$

Find $a$ from the product, then put it in the sum: multiplying by $r$ gives a quadratic in $r$.

**Four numbers in G.P.**: take $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$. The product is $a^4$, the middle two add to $a\left(\frac{1}{r} + r\right)$, and the common ratio is $r^2$, not $r$.

**Two values of $r$, one set of numbers.** The quadratic gives $r$ and $\frac{1}{r}$: the same numbers in opposite orders.

**Three terms with an unknown.** If $a, b, c$ are consecutive terms of a G.P., then $\frac{b}{a} = \frac{c}{b}$, so $b^2 = ac$: the middle term squared. For $k - 1, k, k + 2$: $k^2 = k^2 + k - 2$, so $k = 2$ and the terms are $1, 2, 4$. No term of a G.P. is $0$: drop any value that makes one.

**Not an A.P.** In an A.P. ($a - d, a, a + d$) the sum fixes the middle term. In a G.P. the product does, and $2b = a + c$ is replaced by $b^2 = ac$.`,
    worked: {
      prompt: t`Find three numbers in G.P. whose sum is $42$ and whose product is $1728$.`,
      steps: [
        t`Take the numbers as $\frac{a}{r}, a, ar$. Their product is $a^3 = 1728$, so $a = 12$.`,
        t`The sum: $\frac{12}{r} + 12 + 12r = 42$, so $\frac{12}{r} + 12r = 30$. Multiply by $r$ and divide by $6$: $2r^2 - 5r + 2 = 0$.`,
        t`$(2r - 1)(r - 2) = 0$, so $r = 2$ or $r = \frac{1}{2}$.`,
        t`$r = 2$ gives $6, 12, 24$ and $r = \frac{1}{2}$ gives $24, 12, 6$: the same numbers. Check: $6 + 12 + 24 = 42$ and $6 \times 12 \times 24 = 1728$.`,
      ],
      answer: t`The numbers are $6, 12, 24$.`,
    },
    visualSpec: t`A slider for $r$ moves $\frac{a}{r}$ and $ar$ apart around a fixed middle $a$, while a readout shows their product staying at $a^3$ and their sum changing.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Uses an A.P. rule on a G.P.: the middle number is the sum divided by 3, the outer pair adds up like the middle pair, the terms go up in equal steps, or 2b = a + c",
      remediation: t`G.P. terms multiply by the same $r$; they don't go up in equal steps. The product fixes the middle term ($a^3$ for three numbers), and consecutive terms $a, b, c$ satisfy $b^2 = ac$, not $2b = a + c$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Takes the middle term as the first: writes a, ar, ar² after finding a (a, ar², ar⁴, ar⁶ for four numbers), or squares the first of three given terms instead of the middle one",
      remediation: t`In $\frac{a}{r}, a, ar$ the number $a$ is the **middle** term, so the numbers are $\frac{a}{r}, a, ar$, not $a, ar, ar^2$. In $b^2 = ac$, $b$ is the middle one of the three terms.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: "Takes r as the common ratio of a/r³, a/r, ar, ar³",
      remediation: t`From $\frac{a}{r^3}$ to $\frac{a}{r}$ you multiply by $r^2$, so the common ratio of the four numbers is $r^2$, not $r$. Multiply by $r^2$ to get the next term.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: "Reads a power as a multiple: a³ = 27 gives a = 9, or (k + 1)² is taken as 2(k + 1)",
      remediation: t`$a^3$ means $a \times a \times a$, so $a^3 = 27$ gives $a = \sqrt[3]{27} = 3$, not $9$. In the same way $b^2$ is $b \times b$, not $2b$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    "C03-M3 shows only on four-number items that ask for the ratio or a term beyond the four; C03-M4 is modelled only for three-number and three-terms-with-k items.",
    t`C03-M2's model for three numbers uses the increasing order ($r > 1$), which is why those stems say the numbers increase.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.1 SolvedEx.6" },
      stem: t`Three numbers in G.P., in increasing order, have sum $7$ and product $8$. The middle number is:`,
      verify: { kind: "value", inputs: { S: "7", P: "8" }, params: { n: "3", ask: "middle" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C03-M2", value: "4" },
        { key: "B", text: t`$\frac{8}{3}$`, correct: false, misconceptionId: "C03-M4", value: "8/3" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$\frac{7}{3}$`, correct: false, misconceptionId: "C03-M1", value: "7/3" },
      ],
      solution: {
        steps: [
          t`Take the numbers as $\frac{a}{r}, a, ar$. Their product is $a^3 = 8$, so $a = 2$.`,
          t`$a$ is the middle number, so it is $2$; the sum isn't even needed. (The sum gives $r = 2$: the numbers are $1, 2, 4$.)`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc I Q6" },
      stem: t`Three numbers in G.P., in increasing order, have sum $\frac{21}{4}$ and product $1$. The sum of the first and the last number is:`,
      verify: { kind: "value", inputs: { S: "21/4", P: "1" }, params: { n: "3", ask: "outer" } },
      options: [
        { key: "A", text: t`$17$`, correct: false, misconceptionId: "C03-M2", value: "17" },
        { key: "B", text: t`$\frac{59}{12}$`, correct: false, misconceptionId: "C03-M4", value: "59/12" },
        { key: "C", text: t`$\frac{17}{4}$`, correct: true, value: "17/4" },
        { key: "D", text: t`$\frac{7}{2}$`, correct: false, misconceptionId: "C03-M1", value: "7/2" },
      ],
      solution: {
        steps: [
          t`Take $\frac{a}{r}, a, ar$: the product is $a^3 = 1$, so the middle number is $a = 1$.`,
          t`The sum: $\frac{1}{r} + 1 + r = \frac{21}{4}$, so $4r^2 - 17r + 4 = 0$, $(4r - 1)(r - 4) = 0$. Increasing order: $r = 4$.`,
          t`The numbers are $\frac{1}{4}, 1, 4$, so the first and last add to $\frac{1}{4} + 4 = \frac{17}{4}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.1 SolvedEx.7" },
      stem: t`Four numbers in G.P., in increasing order, have product $64$, and the sum of the second and third numbers is $6$. The term of this G.P. that comes after the fourth number is:`,
      verify: { kind: "value", inputs: { P: "64", M: "6" }, params: { n: "4", ask: "next" } },
      options: [
        { key: "A", text: t`$12$`, correct: false, misconceptionId: "C03-M1", value: "12" },
        { key: "B", text: t`$32 \sqrt{2}$`, correct: false, misconceptionId: "C03-M2", value: "32*sqrt(2)" },
        { key: "C", text: t`$8 \sqrt{2}$`, correct: false, misconceptionId: "C03-M3", value: "8*sqrt(2)" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`Take $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$: the product is $a^4 = 64$, so $a = 2\sqrt{2}$.`,
          t`The middle two: $2\sqrt{2}\left(\frac{1}{r} + r\right) = 6$, so $\sqrt{2}\,r^2 - 3r + \sqrt{2} = 0$, $(r - \sqrt{2})(\sqrt{2}\,r - 1) = 0$. Increasing order: $r = \sqrt{2}$.`,
          t`The numbers are $1, 2, 4, 8$, and the common ratio is $r^2 = 2$.`,
          t`The next term is $8 \times 2 = 16$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.1 Q7" },
      stem: t`Four numbers in G.P., in increasing order, have product $1$, and the sum of the middle two numbers is $\frac{10}{3}$. The term of this G.P. that comes after the fourth number is:`,
      verify: { kind: "value", inputs: { P: "1", M: "10/3" }, params: { n: "4", ask: "next" } },
      options: [
        { key: "A", text: t`$6561$`, correct: false, misconceptionId: "C03-M2", value: "6561" },
        { key: "B", text: t`$81$`, correct: false, misconceptionId: "C03-M3", value: "81" },
        { key: "C", text: t`$243$`, correct: true, value: "243" },
        { key: "D", text: t`$51$`, correct: false, misconceptionId: "C03-M1", value: "51" },
      ],
      solution: {
        steps: [
          t`Take $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$: the product is $a^4 = 1$, so $a = 1$.`,
          t`The middle two: $\frac{1}{r} + r = \frac{10}{3}$, so $3r^2 - 10r + 3 = 0$, $(3r - 1)(r - 3) = 0$. Increasing order: $r = 3$.`,
          t`The numbers are $\frac{1}{27}, \frac{1}{3}, 3, 27$, and the common ratio is $r^2 = 9$.`,
          t`The next term is $27 \times 9 = 243$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.1 Q4" },
      stem: t`$4$, $k + 1$, $9$ are consecutive terms of a G.P. The positive value of $k$ is:`,
      verify: { kind: "value", inputs: { t1: "4", t2: "k + 1", t3: "9" }, params: { n: "k" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$\frac{11}{2}$`, correct: false, misconceptionId: "C03-M1", value: "11/2" },
        { key: "C", text: t`$\frac{7}{9}$`, correct: false, misconceptionId: "C03-M2", value: "7/9" },
        { key: "D", text: t`$17$`, correct: false, misconceptionId: "C03-M4", value: "17" },
      ],
      solution: {
        steps: [
          t`The middle term squared equals the product of its neighbours: $(k + 1)^2 = 4 \times 9 = 36$.`,
          t`So $k + 1 = 6$ or $k + 1 = -6$, giving $k = 5$ or $k = -7$. Both work ($4, 6, 9$ and $4, -6, 9$); the positive value is $k = 5$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q24" },
      stem: t`$9$, $6$, $k + 1$ are consecutive terms of a G.P. The value of $k$ is:`,
      verify: { kind: "value", inputs: { t1: "9", t2: "6", t3: "k + 1" }, params: { n: "k" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M1", value: "2" },
        { key: "C", text: t`$\frac{25}{2}$`, correct: false, misconceptionId: "C03-M2", value: "25/2" },
        { key: "D", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C03-M4", value: "1/3" },
      ],
      solution: {
        steps: [
          t`The middle term is $6$, so $6^2 = 9(k + 1)$, that is $36 = 9k + 9$.`,
          t`So $k = 3$, and the terms are $9, 6, 4$, with common ratio $\frac{2}{3}$.`,
        ],
      },
    },
  ],
};
