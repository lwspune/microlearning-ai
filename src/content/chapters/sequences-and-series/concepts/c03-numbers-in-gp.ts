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
    intuition: [
      t`Recall: in a **G.P.** each term is the one before it times the **common ratio** $r$.`,
      t`So a term's **neighbours**, the terms just before and just after it, are that term divided by $r$ and times $r$.`,
      t`Write three numbers in G.P. around the middle one, $a$: they are $\frac{a}{r}, a, ar$.`,
      t`Their **product**, all three multiplied together, is just $a^3$, because the $r$s cancel.`,
      t`So a condition on the product gives $a$ at once, and the other condition, usually the sum, gives $r$.`,
      t`Four numbers have no middle term, so centre them on $a$ the same way: $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$.`,
    ],
    formal: [
      {
        title: "Three numbers in G.P.",
        points: [
          t`Take three numbers in G.P. as $\frac{a}{r}, a, ar$: each one times $r$ gives the next.`,
          t`Their product is $a^3$.`,
          t`Their sum is $a\left(\frac{1}{r} + 1 + r\right)$.`,
          t`Find $a$ from the product, then put it in the sum.`,
          t`Multiply that equation by $r$ to get a **quadratic** in $r$: an equation whose highest power of $r$ is $r^2$.`,
        ],
        figure: {
          alt: "Three numbers in a row: a/r, a and ar. An arrow labelled × r runs from a/r to a, and another from a to ar: each number times r gives the next, with a in the middle.",
          axes: "none",
          view: { x: [-1, 7], y: [-1, 1.4] },
          elements: [
            { kind: "point", at: [0, 0], label: "a/r", labelAt: "s", step: 1 },
            { kind: "point", at: [3, 0], label: "a", labelAt: "s", step: 1 },
            { kind: "point", at: [6, 0], label: "ar", labelAt: "s", step: 1 },
            { kind: "vector", from: [0.3, 0.35], to: [2.7, 0.35], tone: "good", step: 1 },
            { kind: "label", at: [1.5, 0.35], label: "× r", labelAt: "n", tone: "good", step: 1 },
            { kind: "vector", from: [3.3, 0.35], to: [5.7, 0.35], tone: "good", step: 1 },
            { kind: "label", at: [4.5, 0.35], label: "× r", labelAt: "n", tone: "good", step: 1 },
          ],
        },
      },
      {
        title: "Two ratios, one set of numbers",
        points: [
          t`The quadratic in $r$ has two **roots**, two values of $r$ that solve it.`,
          t`Swapping $r$ for $\frac{1}{r}$ leaves the sum $a\left(\frac{1}{r} + 1 + r\right)$ unchanged.`,
          t`So if $r$ is one root, $\frac{1}{r}$ is the other.`,
          t`They give the same three numbers, in opposite orders.`,
          t`For a positive $a$, numbers that increase need the root with $r > 1$.`,
        ],
      },
      {
        title: "Four numbers in G.P.",
        points: [
          t`Take four numbers in G.P. as $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$, centred on $a$.`,
          t`Their product is $a^4$: the $r$s cancel again.`,
          t`The middle two add to $a\left(\frac{1}{r} + r\right)$.`,
          t`From $\frac{a}{r^3}$ to $\frac{a}{r}$ you multiply by $r^2$, and so on at each step.`,
          t`So the common ratio of the four numbers is $r^2$, not $r$.`,
        ],
        figure: {
          alt: "Four numbers in a row: a/r³, a/r, ar and ar³. Arrows labelled × r² run from each number to the next: the common ratio of the four is r², not r.",
          axes: "none",
          view: { x: [-1, 10], y: [-1, 1.4] },
          elements: [
            { kind: "point", at: [0, 0], label: "a/r³", labelAt: "s", step: 1 },
            { kind: "point", at: [3, 0], label: "a/r", labelAt: "s", step: 1 },
            { kind: "point", at: [6, 0], label: "ar", labelAt: "s", step: 1 },
            { kind: "point", at: [9, 0], label: "ar³", labelAt: "s", step: 1 },
            { kind: "vector", from: [0.3, 0.35], to: [2.7, 0.35], tone: "good", step: 4 },
            { kind: "label", at: [1.5, 0.35], label: "× r²", labelAt: "n", tone: "good", step: 4 },
            { kind: "vector", from: [3.3, 0.35], to: [5.7, 0.35], tone: "good", step: 4 },
            { kind: "label", at: [4.5, 0.35], label: "× r²", labelAt: "n", tone: "good", step: 4 },
            { kind: "vector", from: [6.3, 0.35], to: [8.7, 0.35], tone: "good", step: 4 },
            { kind: "label", at: [7.5, 0.35], label: "× r²", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Three terms with an unknown",
        points: [
          t`Let $a, b, c$ be **consecutive** terms of a G.P., one straight after another: then $\frac{b}{a} = \frac{c}{b}$.`,
          t`Cross-multiply: $b^2 = ac$. Here $b$ is the middle term: its square is the product of its neighbours.`,
          t`For $k - 1, k, k + 2$: $k^2 = (k - 1)(k + 2)$.`,
          t`That is $k^2 = k^2 + k - 2$, so $k = 2$.`,
          t`So the terms are $1, 2, 4$.`,
          t`No term of a G.P. is $0$: drop any value of $k$ that makes one.`,
        ],
      },
      {
        title: "Unlike an A.P.",
        points: [
          t`An **A.P.**, an arithmetic progression, adds the same **common difference** $d$ at each step.`,
          t`Three numbers in A.P. are taken as $a - d, a, a + d$.`,
          t`In an A.P. the sum fixes the middle term; in a G.P. the product does.`,
          t`For consecutive terms $a, b, c$, the A.P. rule is $2b = a + c$.`,
          t`In a G.P. it is replaced by $b^2 = ac$.`,
        ],
      },
    ],
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
