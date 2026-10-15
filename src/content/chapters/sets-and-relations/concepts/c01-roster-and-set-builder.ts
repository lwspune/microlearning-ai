import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`The word 'MISSISSIPPI' has $11$ letters. $A$ is the set of its letters. **How many elements does $A$ have?**`,
    reveal: t`Only $4$. A set lists each element once, so the repeated I's, S's and P's add nothing: $A = \{\text{M, I, S, P}\}$ and $n(A) = 4$.`,
  },
  explanation: {
    intuition: [
      t`A **set** is a collection of objects; each object in it is an **element** of the set.`,
      t`We write a set's elements inside **braces**, the curly brackets $\{\ \}$.`,
      t`A set can also be given by a **rule** that says which objects belong to it.`,
      t`To list a set from its rule, try each value the rule allows, in order, and write down what it makes.`,
      t`Two things decide the list: where the allowed values start and stop, and what the rule does to each one.`,
      t`Order and repeats never matter: $\{1, 2\}$ and $\{2, 1, 1\}$ are the same set.`,
    ],
    formal: [
      {
        title: "Roster method",
        points: [
          t`The **roster method** lists a set's elements inside braces, separated by commas.`,
          t`The vowels of the English alphabet make $C = \{a, e, i, o, u\}$.`,
          t`Each element is written once, in any order.`,
        ],
      },
      {
        title: "Set-builder method",
        points: [
          t`The **set-builder method** states the property that every element of the set has.`,
          t`The vowels again: $C = \{x / x$ is a vowel of the English alphabet$\}$.`,
          t`Here $x$ stands for any element of the set.`,
          t`Read the slash "$/$" as "such that".`,
          t`So $C$ is "the set of all $x$ such that $x$ is a vowel of the English alphabet".`,
        ],
      },
      {
        title: "Where the values start",
        points: [
          t`In a rule, $n \in N$ means the letter $n$ is an element of $N$: read $\in$ as "belongs to".`,
          t`$N = \{1, 2, 3, \ldots\}$, the **natural numbers**, starts at $1$; the dots mean "and so on".`,
          t`$W = \{0, 1, 2, \ldots\}$, the **whole numbers**, is $N$ with $0$ added: it starts at $0$.`,
          t`$Z = \{\ldots, -2, -1,$ $0, 1, 2, \ldots\}$, the **integers**, goes on in both directions.`,
        ],
      },
      {
        title: "Reading a rule",
        points: [
          t`A **strict** sign, $<$ or $>$, leaves its end value out: $n < 4$ stops at $3$.`,
          t`The sign $\le$, "less than or equal to", keeps its end: $n \le 4$ includes $4$.`,
          t`Commas in a rule separate its conditions, and every condition must hold: $\{x / x = 3n,\ n \in N,$ $n \le 3\}$.`,
          t`Here $n \in N$ and $n \le 3$ allow $n = 1, 2, 3$.`,
          t`The rule $x = 3n$ turns these into $x = 3, 6, 9$.`,
          t`The elements are the values of $x$: the set is $\{3, 6, 9\}$, not $\{1, 2, 3\}$.`,
        ],
      },
      {
        title: "Number of elements",
        points: [
          t`$n(A)$, the **number of elements** of $A$, counts each different element of $A$ once.`,
          t`The letters of 'BOOK' are B, O, O and K: the O comes twice.`,
          t`As a set they give $\{\text{B, O, K}\}$, which has $3$ elements, not $4$.`,
        ],
      },
      {
        title: "Equal and equivalent sets",
        points: [
          t`Sets $A$ and $B$ are **equal**, $A = B$, when they have exactly the same elements.`,
          t`They are **equivalent** when they have the same number of elements: $n(A) = n(B)$.`,
          t`Equal sets are always equivalent.`,
          t`$\{1, 2, 3\}$ and $\{a, b, c\}$ both have $3$ elements, so they are equivalent.`,
          t`They are not equal: their elements are different.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $B = \bigg\{x / x \text{ is an integer},$ $-\dfrac{3}{2} < x < \dfrac{9}{2}\bigg\}$ in roster form and find $n(B)$.`,
      steps: [
        t`The ends are $-\dfrac{3}{2} = -1.5$ and $\dfrac{9}{2} = 4.5$. Neither is an integer, so the question is only which integers lie between them.`,
        t`The smallest integer greater than $-1.5$ is $-1$: $-2$ lies to the left of $-1.5$, so it is too small. The largest integer less than $4.5$ is $4$.`,
        t`List every integer from $-1$ to $4$, including $0$: $B = \{-1, 0, 1, 2, 3, 4\}$.`,
        t`Count them: $n(B) = 6$.`,
      ],
      answer: t`$B = \{-1, 0, 1, 2, 3, 4\}$ and $n(B) = 6$.`,
    },
    visualSpec: t`A slider for each end of the range of $n$, with a $<$ / $\le$ toggle and an $N$ / $W$ / $Z$ switch: each allowed $n$ drops through the rule into the set, and a value that is already there merges into it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Counting every occurrence: each letter of a word, or each value of n, as a new element even when it repeats",
      remediation: t`A set lists each element once. Cross out the repeats before you count: the letters of 'BOOK' make $\{\text{B, O, K}\}$, so $n = 3$, not $4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Including the end of a strict inequality: reading $n < b$ as $n \le b$`,
      remediation: t`A strict sign leaves its end out: $n < 4$ stops at $3$. Only $\le$ or $\ge$ lets the end value in.`,
      fallback: { kind: "ext", topic: "inequalities on the number line" },
    },
    {
      id: "C01-M3",
      mistake: t`Mixing up $N$ and $W$: starting $N$ at $0$, or $W$ at $1$`,
      remediation: t`$N = \{1, 2, 3, \ldots\}$ starts at $1$; $W = \{0, 1, 2, \ldots\}$ is $N$ with $0$ added. Check the first value before you list.`,
      fallback: { kind: "ext", topic: "number systems N, W, Z, Q, R" },
    },
    {
      id: "C01-M4",
      mistake: t`Listing the values of $n$ instead of the elements $x$ the rule makes from them`,
      remediation: t`In $\{x / x = f(n), \ldots\}$ the elements are the values of $x$. Put each allowed $n$ into the rule and list the results.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 shows only on counting items: a repeat doesn't change a roster set.",
    "C01-M4 shows only on roster items: when the rule makes no repeats, listing n gives the right count.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q1(iii)" },
      stem: t`The roster form of $C = \{x / x = 2n + 1,\ n \in N,\ n < 5\}$ is:`,
      verify: { kind: "value", inputs: { hi: "5" }, params: { f: "2*n + 1", over: "N", hi_op: "<", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{3, 5, 7, 9\right\}$`, correct: true, value: "{3, 5, 7, 9}" },
        { key: "B", text: t`$\left\{3, 5, 7, 9, 11\right\}$`, correct: false, misconceptionId: "C01-M2", value: "{3, 5, 7, 9, 11}" },
        { key: "C", text: t`$\left\{1, 3, 5, 7, 9\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{1, 3, 5, 7, 9}" },
        { key: "D", text: t`$\left\{1, 2, 3, 4\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{1, 2, 3, 4}" },
      ],
      solution: {
        steps: [
          t`$n \in N$ and $n < 5$: $n = 1, 2, 3, 4$. $N$ starts at $1$, and $5$ is left out.`,
          t`Put each into $x = 2n + 1$: $3, 5, 7, 9$.`,
          t`$C = \{3, 5, 7, 9\}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q1(i)" },
      stem: t`$A$ is the set of letters of the word 'MOVEMENT', and $B = \{x / x \in W,\ x < k\}$. If $A$ and $B$ are equivalent sets, then $k$ is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "MOVEMENT", f: "n", over: "W", ask: "k" } },
      options: [
        { key: "A", text: t`$6$`, correct: true, value: "6" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C01-M1", value: "8" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C01-M2", value: "5" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C01-M3", value: "7" },
      ],
      solution: {
        steps: [
          t`The letters of 'MOVEMENT' are M, O, V, E, M, E, N, T; M and E repeat. Once each: $A = \{\text{M, O, V, E, N, T}\}$, so $n(A) = 6$.`,
          t`$B = \{0, 1, \ldots, k - 1\}$: $W$ starts at $0$ and $k$ is left out, so $n(B) = k$.`,
          t`Equivalent sets have $n(A) = n(B)$, so $k = 6$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1.2 SolvedEx.2(ii)" },
      stem: t`The roster form of $B = \{x / x = n^2,\ n \in W,\ n < 4\}$ is:`,
      verify: { kind: "value", inputs: { hi: "4" }, params: { f: "n**2", over: "W", hi_op: "<", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{1, 4, 9\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{1, 4, 9}" },
        { key: "B", text: t`$\left\{0, 1, 2, 3\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{0, 1, 2, 3}" },
        { key: "C", text: t`$\left\{0, 1, 4, 9\right\}$`, correct: true, value: "{0, 1, 4, 9}" },
        { key: "D", text: t`$\left\{0, 1, 4, 9, 16\right\}$`, correct: false, misconceptionId: "C01-M2", value: "{0, 1, 4, 9, 16}" },
      ],
      solution: {
        steps: [
          t`$n \in W$ and $n < 4$: $n = 0, 1, 2, 3$. $W$ starts at $0$, and $4$ is left out.`,
          t`Put each into $x = n^2$: $0, 1, 4, 9$.`,
          t`$B = \{0, 1, 4, 9\}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q2(iii)" },
      stem: t`The roster form of $A = \left\{x / x = \dfrac{n}{n^2 + 1},\ n \in N,\ n < 4\right\}$ is:`,
      verify: { kind: "value", inputs: { hi: "4" }, params: { f: "n/(n**2 + 1)", over: "N", hi_op: "<", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{\frac{1}{2}, \frac{2}{5}, \frac{3}{10}\right\}$`, correct: true, value: "{3/10, 2/5, 1/2}" },
        { key: "B", text: t`$\left\{\frac{1}{2}, \frac{2}{5}, \frac{3}{10}, \frac{4}{17}\right\}$`, correct: false, misconceptionId: "C01-M2", value: "{4/17, 3/10, 2/5, 1/2}" },
        { key: "C", text: t`$\left\{0, \frac{1}{2}, \frac{2}{5}, \frac{3}{10}\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{0, 3/10, 2/5, 1/2}" },
        { key: "D", text: t`$\left\{1, 2, 3\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{1, 2, 3}" },
      ],
      solution: {
        steps: [
          t`$n \in N$ and $n < 4$: $n = 1, 2, 3$.`,
          t`Put each into $x = \dfrac{n}{n^2 + 1}$: $\dfrac{1}{2}$, $\dfrac{2}{5}$, $\dfrac{3}{10}$.`,
          t`$A = \left\{\dfrac{1}{2}, \dfrac{2}{5}, \dfrac{3}{10}\right\}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`$P$ is the set of letters of the word 'REFERENCE', and $Q = \{x / x = 5n,\ n \in W,\ n < k\}$. If $P$ and $Q$ are equivalent sets, then $k$ is:`,
      verify: { kind: "value", inputs: {  }, params: { word: "REFERENCE", f: "5*n", over: "W", ask: "k" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C01-M1", value: "9" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C01-M2", value: "4" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C01-M3", value: "6" },
      ],
      solution: {
        steps: [
          t`The letters of 'REFERENCE' are R, E, F, E, R, E, N, C, E. Once each: $P = \{\text{R, E, F, N, C}\}$, so $n(P) = 5$.`,
          t`$n \in W$ and $n < k$: $n = 0, 1, \ldots, k - 1$, which is $k$ values, each giving a different $5n$. So $n(Q) = k$.`,
          t`Equivalent sets have $n(P) = n(Q)$, so $k = 5$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q1(i)" },
      stem: t`The roster form of $D = \{x / x = 10n,\ n \in N,\ n < 6\}$ is:`,
      verify: { kind: "value", inputs: { hi: "6" }, params: { f: "10*n", over: "N", hi_op: "<", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{0, 10, 20, 30, 40, 50\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{0, 10, 20, 30, 40, 50}" },
        { key: "B", text: t`$\left\{1, 2, 3, 4, 5\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{1, 2, 3, 4, 5}" },
        { key: "C", text: t`$\left\{10, 20, 30, 40, 50\right\}$`, correct: true, value: "{10, 20, 30, 40, 50}" },
        { key: "D", text: t`$\left\{10, 20, 30, 40, 50, 60\right\}$`, correct: false, misconceptionId: "C01-M2", value: "{10, 20, 30, 40, 50, 60}" },
      ],
      solution: {
        steps: [
          t`$n \in N$ and $n < 6$: $n = 1, 2, 3, 4, 5$.`,
          t`Put each into $x = 10n$: $10, 20, 30, 40, 50$.`,
          t`$D = \{10, 20, 30, 40, 50\}$.`,
        ],
      },
    },
  ],
};
