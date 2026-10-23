import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Look at $\{x \mid x + 7 = 7\}$. **Is this set empty?**`,
    reveal: t`No. $x + 7 = 7$ gives $x = 0$, so the set is $\{0\}$. It holds one element, the number $0$. A set is empty only when nothing at all is inside.`,
  },
  explanation: {
    intuition: [
      t`A set with no element at all is the **empty set**, written $\varnothing$.`,
      t`A set with exactly one element is a **singleton set**, like $\{7\}$.`,
      t`A **finite set** is one whose elements can be counted, and the count comes to an end.`,
      t`An **infinite set** is one whose elements never run out, however long you count.`,
      t`$\{0\}$ is not empty: it holds one element, the number $0$.`,
      t`The set of all people on Earth is huge, but it is still finite.`,
    ],
    formal: [
      {
        title: "Empty and singleton sets",
        points: [
          t`The **empty set** has no elements. It is written $\varnothing$ or $\{\ \}$.`,
          t`The empty set is also called the **null set**.`,
          t`$\{x \mid x \in N,\ x < 0\} = \varnothing$, as no natural number is below $0$.`,
          t`The number system in the rule matters: in $\{x \mid x \in N,\ 2x = 3\}$, $x = \frac{3}{2}$ is not natural.`,
          t`So $\{x \mid x \in N,\ 2x = 3\} = \varnothing$.`,
          t`A **singleton set** has exactly one element: $\{x \mid x \in N,\ x < 2\} = \{1\}$.`,
        ],
      },
      {
        title: "Counting a finite set",
        points: [
          t`A set is **finite** if counting its elements comes to an end.`,
          t`$N$ (natural numbers) starts at $1$; $W$ (whole numbers) starts at $0$.`,
          t`$<$ leaves the end number out; $\le$ puts it in.`,
          t`$\{x \mid x \in N,\ x < 6\}$ $= \{1, 2, 3, 4, 5\}$: $5$ elements.`,
          t`$\{x \mid x \in W,\ x \le 3\}$ $= \{0, 1, 2, 3\}$: $4$ elements, as $0$ counts too.`,
          t`The empty set and every singleton set are finite.`,
        ],
      },
      {
        title: "Large is not infinite",
        points: [
          t`The people in your village can be counted, so they form a finite set.`,
          t`The apparatus in a laboratory is finite too.`,
          t`A set with a million elements is still finite: the count ends.`,
          t`In a list, dots $\ldots$ only stand for elements that are skipped.`,
          t`$\{2, 4, 6, \ldots, 50\}$ stops at $50$, so it is finite.`,
        ],
      },
      {
        title: "Infinite sets",
        points: [
          t`A set is **infinite** if its elements never come to an end.`,
          t`$N = \{1, 2, 3, \ldots\}$ is infinite: no last element follows the dots.`,
          t`$\{y \mid y \in I,\ y < 0\}$ $= \{-1, -2, -3, \ldots\}$ is infinite too.`,
          t`Between $0$ and $1$ lie $\frac{1}{2}$, $\frac{1}{3}$, $\frac{1}{4}$, and so on without end.`,
          t`So the rational numbers between two numbers form an infinite set.`,
          t`Only integers between two numbers can be counted: $\{x \mid x \in I,\ 0 < x < 5\}$ has $4$.`,
        ],
      },
    ],
    worked: {
      prompt: t`$D = \{x \mid x \in I,\ -2 < x \le 2\}$, where $I$ is the set of integers. List $D$. Is it empty, singleton, finite or infinite?`,
      steps: [
        t`$-2 < x$ leaves $-2$ out, so the integers start at $-1$.`,
        t`$x \le 2$ puts $2$ in, so they stop at $2$.`,
        t`$D = \{-1, 0, 1, 2\}$. The number $0$ is an element like any other.`,
        t`The count stops at $4$, so $D$ is a finite set.`,
      ],
      answer: t`$D = \{-1, 0, 1, 2\}$, a finite set with $4$ elements.`,
    },
    visualSpec: t`Slide the end number of a rule such as $x < n$ and watch the listed set grow, shrink to $\varnothing$, or run on for ever.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Treats $0$ as nothing, so a set holding $0$ loses that element; $\{0\}$ is taken to be $\varnothing$.`,
      remediation: t`$0$ is a number, so it is an element like any other. $\{0\}$ has one element; only $\varnothing$ has none.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Ignores the number system in the rule ($x \in N$, $x \in I$) and takes every real number that fits.`,
      remediation: t`The number system is part of the rule. Keep only values from it: when $x \in I$, only integers count.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks rational or real numbers between two bounds form a finite set, counting only the integers there.",
      remediation: "Between any two different numbers lie endless rational numbers, so such a set is infinite. Only integers between two bounds can be counted.",
      fallback: { kind: "ext", topic: "rational numbers between two numbers (Std IX Real Numbers)" },
    },
    {
      id: "C02-M4",
      mistake: "Calls a set infinite because it is too big to list (modelled as 1000 or more elements).",
      remediation: "A set is finite whenever its count would end, however large it is. Only a set whose elements never run out is infinite.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Mixes up $<$ and $\le$, so takes in an end number that is left out, or leaves out one that is in.`,
      remediation: t`$x < 1$ leaves $1$ out; $x \le 1$ puts $1$ in. Check each end number against its sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Thinks the dots $\ldots$ in a list always mean the set never ends.`,
      remediation: t`Dots only stand for skipped elements. If a last element follows them, as in $\{2, 4, \ldots, 50\}$, the set stops there and is finite.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "Q3 to Q5 are pick-one items: a student with the tagged misconception may see two sets with the asked property (the key and its trap), so a correct pick there does not clear the misconception; the count items Q1, Q2 and Q6 diagnose M1, M2, M4 and M5 cleanly.",
    "C02-M4 is modelled as: a set of 1000 or more elements is called infinite.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.2 Q4(i)" },
      stem: t`$A = \{x \mid x \in W,\ x < 1000\}$, where $W$ is the set of whole numbers. How many elements does $A$ have?`,
      verify: { kind: "value", inputs: {  }, params: { set: "W|x<1000" } },
      options: [
        { key: "A", text: t`$1000$`, correct: true, value: "1000" },
        { key: "B", text: t`$999$`, correct: false, misconceptionId: "C02-M1", value: "999" },
        { key: "C", text: t`Infinitely many: $A$ is infinite`, correct: false, misconceptionId: "C02-M4", value: "infinite" },
        { key: "D", text: t`$1001$`, correct: false, misconceptionId: "C02-M5", value: "1001" },
      ],
      solution: {
        steps: [
          t`$W$ starts at $0$, and $x < 1000$ leaves $1000$ out.`,
          t`So $A = \{0, 1, 2, \ldots, 999\}$.`,
          t`$1$ to $999$ gives $999$ numbers; with $0$ that makes $1000$.`,
          t`The count ends, so $A$ is a finite set with $1000$ elements.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Prob Q1(vi)" },
      stem: t`$P = \{x \mid x \in I,\ -1 < x < 1\}$, where $I$ is the set of integers. How many elements does $P$ have?`,
      verify: { kind: "value", inputs: {  }, params: { set: "I|(-1<x)&(x<1)" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C02-M1", value: "0" },
        { key: "B", text: t`Infinitely many: $P$ is infinite`, correct: false, misconceptionId: "C02-M2", value: "infinite" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M5", value: "3" },
        { key: "D", text: t`$1$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`Both ends are left out, so the only integer between $-1$ and $1$ is $0$.`,
          t`$P = \{0\}$, and $0$ is an element, so $P$ is not empty.`,
          t`$P$ has $1$ element: it is a singleton set.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Prob Q1(vi)" },
      stem: t`Which of these sets is empty? ($N$: natural numbers, $W$: whole numbers, $Q$: rational numbers.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "empty", sets: ["P=world|0", "R=W|x<1", "T=Q|(2<x)&(x<3)", "M=N|x<=1"] } },
      options: [
        { key: "A", text: t`$\{x \mid x \in N,\ x \le 1\}$`, correct: false, misconceptionId: "C02-M5", value: "set_M" },
        { key: "B", text: t`The set of points where two parallel lines meet`, correct: true, value: "set_P" },
        { key: "C", text: t`$\{x \mid x \in W,\ x < 1\}$`, correct: false, misconceptionId: "C02-M1", value: "set_R" },
        { key: "D", text: t`$\{x \mid x \in Q,\ 2 < x < 3\}$`, correct: false, misconceptionId: "C02-M3", value: "set_T" },
      ],
      solution: {
        steps: [
          t`Parallel lines never meet, so the set of their meeting points has no element: it is $\varnothing$.`,
          t`$\{x \mid x \in W,\ x < 1\} = \{0\}$ and $\{x \mid x \in N,\ x \le 1\} = \{1\}$: one element each.`,
          t`$\{x \mid x \in Q,\ 2 < x < 3\}$ holds $\frac{5}{2}$, $\frac{7}{3}$, $\frac{9}{4}$, ... without end.`,
          t`So the empty set is the set of points where two parallel lines meet.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.2 Q4(ii)" },
      stem: t`Which of these sets is infinite? ($I$ is the set of integers.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "infinite", sets: ["P=I|x<-1", "R=world|1400000000", "T=I|(-3<x)&(x<3)", "M=list|3,3,300"] } },
      options: [
        { key: "A", text: t`$\{3, 6, 9, \ldots, 300\}$`, correct: false, misconceptionId: "C02-M6", value: "set_M" },
        { key: "B", text: t`$\{y \mid y \in I,\ y < -1\}$`, correct: true, value: "set_P" },
        { key: "C", text: t`$\{x \mid x \in I,\ -3 < x < 3\}$`, correct: false, misconceptionId: "C02-M2", value: "set_T" },
        { key: "D", text: t`The set of people living in India`, correct: false, misconceptionId: "C02-M4", value: "set_R" },
      ],
      solution: {
        steps: [
          t`$\{y \mid y \in I,\ y < -1\} = \{-2, -3, -4, \ldots\}$ never ends: infinite.`,
          t`The integers between $-3$ and $3$ are $-2, -1, 0, 1, 2$: finite.`,
          t`The people in India are very many, but they can be counted: finite.`,
          t`$\{3, 6, 9, \ldots, 300\}$ stops at $300$: finite. So the infinite set is $\{y \mid y \in I,\ y < -1\}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.2 Q3(ii)" },
      stem: t`Which of these is a singleton set? ($N$: natural numbers, $W$: whole numbers, $R$: real numbers.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "singleton", sets: ["P=U|Eq(x**2,0)", "R=N|Eq(5*x-2,0)", "T=W|Eq(x**2,5*x)", "M=R|(2<=x)&(x<3)"] } },
      options: [
        { key: "A", text: t`$\{x \mid x \in R,\ 2 \le x < 3\}$`, correct: false, misconceptionId: "C02-M3", value: "set_M" },
        { key: "B", text: t`$\{x \mid x^2 = 0\}$`, correct: true, value: "set_P" },
        { key: "C", text: t`$\{x \mid x \in W,\ x^2 = 5x\}$`, correct: false, misconceptionId: "C02-M1", value: "set_T" },
        { key: "D", text: t`$\{x \mid x \in N,\ 5x - 2 = 0\}$`, correct: false, misconceptionId: "C02-M2", value: "set_R" },
      ],
      solution: {
        steps: [
          t`$x^2 = 0$ only when $x = 0$, so $\{x \mid x^2 = 0\} = \{0\}$: one element.`,
          t`$5x - 2 = 0$ gives $x = \frac{2}{5}$, not a natural number, so that set is $\varnothing$.`,
          t`$x^2 = 5x$ gives $x = 0$ or $x = 5$, both whole numbers: two elements.`,
          t`Every real number from $2$ up to $3$ fits $2 \le x < 3$: infinite. The singleton set is $\{x \mid x^2 = 0\}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.2 Q4(ii)" },
      stem: t`$B = \{y \mid y \in I,\ -3 \le y \le 0\}$, where $I$ is the set of integers. How many elements does $B$ have?`,
      verify: { kind: "value", inputs: {  }, params: { set: "I|(-3<=x)&(x<=0)" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C02-M1", value: "3" },
        { key: "C", text: t`Infinitely many: $B$ is infinite`, correct: false, misconceptionId: "C02-M2", value: "infinite" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C02-M5", value: "2" },
      ],
      solution: {
        steps: [
          t`$\le$ puts both ends in, so $B = \{-3, -2, -1, 0\}$.`,
          t`$0$ is an element too, so count it.`,
          t`$B$ has $4$ elements; it is a finite set.`,
        ],
      },
    },
  ],
};
