import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Is **'the good singers in your class'** a set? Is **'the students in your class born in May'** a set?`,
    reveal: t`Only the second. Anyone can check a birth date, so everyone agrees who belongs. 'Good' is an opinion, so the first collection is not **well-defined**, and it is not a set.`,
  },
  explanation: {
    intuition: [
      t`A **set** is a collection of objects, such as the vowels a, e, i, o, u.`,
      t`Each object in a set is called an **element** (or member) of the set.`,
      t`The collection must be **well-defined**: anyone can tell whether an object belongs to it.`,
      t`'Colours of the rainbow' is a set; 'tall trees' is not, since 'tall' is an opinion.`,
      t`We name a set with a capital letter and write its elements inside braces, $\{\ \}$.`,
      t`A set can be written in two ways: list its elements, or give a rule for them.`,
    ],
    formal: [
      {
        title: "Belongs to, does not belong",
        points: [
          t`If $a$ is an element of set $A$, we write $a \in A$.`,
          t`Read $a \in A$ as '$a$ belongs to $A$' or '$a$ is an element of $A$'.`,
          t`If $b$ is not an element of $A$, we write $b \notin A$.`,
          t`For $A = \{2, 3, 5\}$: $3 \in A$, but $4 \notin A$.`,
        ],
      },
      {
        title: "Sets of numbers",
        points: [
          t`$\mathbb{N}$ is the set of **natural numbers**: $1, 2, 3, \ldots$ It starts at $1$.`,
          t`$\mathbb{W}$ is the set of **whole numbers**: $0, 1, 2, 3, \ldots$ It is $\mathbb{N}$ with $0$ added.`,
          t`$\mathbb{I}$ is the set of **integers**: $\ldots, -2, -1, 0, 1, 2, \ldots$`,
          t`$\mathbb{Q}$ is the set of **rational numbers**: $\frac{p}{q}$, where $p, q \in \mathbb{I}$ and $q \ne 0$.`,
          t`$\mathbb{R}$ is the set of **real numbers**: all rational and irrational numbers.`,
          t`So $0 \in \mathbb{W}$ but $0 \notin \mathbb{N}$, and $-2 \in \mathbb{I}$ but $-2 \notin \mathbb{W}$.`,
        ],
      },
      {
        title: "Listing method",
        points: [
          t`In the **listing method** (roster form), we write every element inside braces.`,
          t`Elements are separated by commas, and their order does not matter.`,
          t`Each element is written only once: the letters of 'COMMA' give $\{C, O, M, A\}$.`,
          t`If the elements go on without end, show the pattern and add dots: $\{5, 10, 15, \ldots\}$.`,
        ],
      },
      {
        title: "Rule method",
        points: [
          t`In the **rule method** (set-builder form), we state the property every element has.`,
          t`$V = \{x \mid x$ is a vowel of the English alphabet$\}$.`,
          t`The bar $\mid$ means 'such that'.`,
          t`Read it as: '$V$ is the set of all $x$ such that $x$ is a vowel'.`,
          t`Every condition after the bar must hold for each element.`,
        ],
      },
      {
        title: "From rule to list and back",
        points: [
          t`Take $\{x \mid x = 3n,$ $n \in \mathbb{N},\ n \le 4\}$.`,
          t`First list the allowed values of $n$: $n = 1, 2, 3, 4$.`,
          t`Put each $n$ into the rule $x = 3n$: $x = 3, 6, 9, 12$.`,
          t`The elements are the values of $x$, not of $n$: $\{3, 6, 9, 12\}$.`,
          t`Read each end with care: $n < 4$ leaves out $4$, but $n \le 4$ keeps it.`,
          t`To go back, spot the pattern: $\{3, 6, 9, 12\}$ is $3n$ for $n = 1$ to $4$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $A = \{x \mid x = n^2 + 1,$ $n \in \mathbb{W},\ n \le 3\}$ in roster form.`,
      steps: [
        t`$n \in \mathbb{W}$ starts at $0$, and $n \le 3$ keeps $3$: so $n = 0, 1, 2, 3$.`,
        t`Put each $n$ into the rule $x = n^2 + 1$: $0 + 1 = 1$, $1 + 1 = 2$, $4 + 1 = 5$, $9 + 1 = 10$.`,
        t`The elements are these values of $x$, not the values of $n$.`,
        t`No value repeats, so all four are written once.`,
      ],
      answer: t`$A = \{1, 2, 5, 10\}$`,
    },
    visualSpec: t`Drag the two ends of a range of $n$ on a number line and switch each between $<$ and $\le$; the listed set updates as each $n$ goes through the rule.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Mixes up n and x in a rule: lists the values of n instead of the elements x, or puts the bound on x instead of on n",
      remediation: t`The elements are the values of $x$. List the allowed values of $n$ first, then put each into the rule. A bound like $n \le k$ limits $n$, not $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Mixes up N and W: thinks the natural numbers start at 0, or the whole numbers at 1",
      remediation: t`$\mathbb{N} = \{1, 2, 3, \ldots\}$ starts at $1$. $\mathbb{W} = \{0, 1, 2, \ldots\}$ is $\mathbb{N}$ with $0$ added.`,
      fallback: { kind: "ext", topic: "natural and whole numbers (Std VIII)" },
    },
    {
      id: "C01-M3",
      mistake: "Includes the end of a strict inequality: reads < as less than or equal to",
      remediation: t`$x < 5$ means 'less than $5$', so $5$ is left out. Only $\le$ keeps the end.`,
      fallback: { kind: "ext", topic: "reading inequalities (Std VIII)" },
    },
    {
      id: "C01-M4",
      mistake: "Leaves out the end of a 'less than or equal to' inequality, as if an end is never included",
      remediation: t`$x \le 5$ means 'less than or equal to $5$', so $5$ is kept. Only $<$ leaves the end out.`,
      fallback: { kind: "ext", topic: "reading inequalities (Std VIII)" },
    },
    {
      id: "C01-M5",
      mistake: "Ignores a property in the rule (odd, even) and lists every number in the range",
      remediation: t`Every condition in the rule must hold. Check each number against all of them: for 'odd', keep only $1, 3, 5, \ldots$`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Reads I as W: leaves the negative integers out of the integers",
      remediation: t`$\mathbb{I}$ holds the negative integers too: $\ldots, -2, -1, 0, 1, 2, \ldots$ Only $\mathbb{W}$ stops at $0$.`,
      fallback: { kind: "ext", topic: "integers (Std VIII)" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Prob Q1(ii)" },
      stem: t`$P = \{x \mid x$ is an odd natural number, $1 < x \le 5\}$. Which is set $P$ in roster form?`,
      verify: { kind: "value", inputs: { lo: "1", hi: "5" }, params: { over: "N", lo_op: "<", hi_op: "<=", prop: "odd", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{3, 5\right\}$`, correct: true, value: "{3, 5}" },
        { key: "B", text: t`$\left\{1, 3, 5\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{1, 3, 5}" },
        { key: "C", text: t`$\left\{3\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{3}" },
        { key: "D", text: t`$\left\{2, 3, 4, 5\right\}$`, correct: false, misconceptionId: "C01-M5", value: "{2, 3, 4, 5}" },
      ],
      solution: {
        steps: [
          t`$x$ is an odd natural number: $1, 3, 5, 7, \ldots$`,
          t`$1 < x$ leaves out $1$, and $x \le 5$ keeps $5$.`,
          t`So $P = \{3, 5\}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.1 Q5(ii)" },
      stem: t`Write $A = \{x \mid x = 2n + 1,$ $n \in \mathbb{W},\ n < 4\}$ in roster form.`,
      verify: { kind: "value", inputs: { hi: "4" }, params: { f: "2*n + 1", over: "W", hi_op: "<", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{1, 3, 5, 7\right\}$`, correct: true, value: "{1, 3, 5, 7}" },
        { key: "B", text: t`$\left\{0, 1, 2, 3\right\}$`, correct: false, misconceptionId: "C01-M1", value: "{0, 1, 2, 3}" },
        { key: "C", text: t`$\left\{3, 5, 7\right\}$`, correct: false, misconceptionId: "C01-M2", value: "{3, 5, 7}" },
        { key: "D", text: t`$\left\{1, 3, 5, 7, 9\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{1, 3, 5, 7, 9}" },
      ],
      solution: {
        steps: [
          t`$n \in \mathbb{W}$ starts at $0$, and $n < 4$ leaves out $4$: so $n = 0, 1, 2, 3$.`,
          t`Put each $n$ into $x = 2n + 1$: $x = 1, 3, 5, 7$.`,
          t`The elements are the values of $x$: $A = \{1, 3, 5, 7\}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.1 Q5(i)" },
      stem: t`$A = \{1, 4, 9, 16, 25, 36\}$ is written in rule form as $A = \{x \mid x = n^2,$ $n \in \mathbb{N},\ n \le k\}$. What is $k$?`,
      verify: { kind: "value", inputs: {  }, params: { f: "n**2", over: "N", hi_op: "<=", target: "[1, 4, 9, 16, 25, 36]", ask: "k" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C01-M2", value: "5" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C01-M4", value: "7" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
        { key: "D", text: t`$36$`, correct: false, misconceptionId: "C01-M1", value: "36" },
      ],
      solution: {
        steps: [
          t`$1 = 1^2$, $4 = 2^2$, $\ldots$, $36 = 6^2$: so $x = n^2$ for $n = 1$ to $6$.`,
          t`$n \in \mathbb{N}$ starts at $1$, and $n \le k$ keeps $k$, so the last value of $n$ is $k$.`,
          t`The bound is on $n$, not on $x$: $k = 6$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.1 Q1(iii)" },
      stem: t`Write $B = \{x \mid x \in \mathbb{I},$ $-3 < x \le 2\}$ in roster form.`,
      verify: { kind: "value", inputs: { lo: "-3", hi: "2" }, params: { over: "I", lo_op: "<", hi_op: "<=", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{-2, -1, 0, 1, 2\right\}$`, correct: true, value: "{-2, -1, 0, 1, 2}" },
        { key: "B", text: t`$\left\{-3, -2, -1, 0, 1, 2\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{-3, -2, -1, 0, 1, 2}" },
        { key: "C", text: t`$\left\{-2, -1, 0, 1\right\}$`, correct: false, misconceptionId: "C01-M4", value: "{-2, -1, 0, 1}" },
        { key: "D", text: t`$\left\{0, 1, 2\right\}$`, correct: false, misconceptionId: "C01-M6", value: "{0, 1, 2}" },
      ],
      solution: {
        steps: [
          t`$\mathbb{I}$ holds the negative integers too: $\ldots, -3, -2, -1, 0, 1, 2, \ldots$`,
          t`$-3 < x$ leaves out $-3$, and $x \le 2$ keeps $2$.`,
          t`So $B = \{-2, -1, 0, 1, 2\}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.1 Q1(i)" },
      stem: t`Write $C = \{x \mid x$ is an even natural number, $x < 10\}$ in roster form.`,
      verify: { kind: "value", inputs: { hi: "10" }, params: { over: "N", hi_op: "<", prop: "even", ask: "set" } },
      options: [
        { key: "A", text: t`$\left\{2, 4, 6, 8\right\}$`, correct: true, value: "{2, 4, 6, 8}" },
        { key: "B", text: t`$\left\{0, 2, 4, 6, 8\right\}$`, correct: false, misconceptionId: "C01-M2", value: "{0, 2, 4, 6, 8}" },
        { key: "C", text: t`$\left\{2, 4, 6, 8, 10\right\}$`, correct: false, misconceptionId: "C01-M3", value: "{2, 4, 6, 8, 10}" },
        { key: "D", text: t`$\left\{1, 2, 3, 4, 5, 6, 7, 8, 9\right\}$`, correct: false, misconceptionId: "C01-M5", value: "{1, 2, 3, 4, 5, 6, 7, 8, 9}" },
      ],
      solution: {
        steps: [
          t`Even natural numbers start at $2$, since $0 \notin \mathbb{N}$: $2, 4, 6, \ldots$`,
          t`$x < 10$ leaves out $10$.`,
          t`So $C = \{2, 4, 6, 8\}$.`,
        ],
      },
    },
  ],
};
