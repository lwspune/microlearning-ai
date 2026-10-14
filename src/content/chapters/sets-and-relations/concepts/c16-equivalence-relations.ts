import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c16: Concept = {
  id: "C16",
  status: "approved",
  hook: {
    prompt: t`Call two integers related when they leave the same remainder on division by $3$. So $7$ is related to $1$ and to $-2$, but not to $5$. **Into how many groups does this split all of $\mathbb{Z}$, and can one integer sit in two groups?**`,
    reveal: t`Three groups: remainder $0$, remainder $1$, remainder $2$. Each integer has exactly one remainder, so it sits in exactly one group. Two integers are related exactly when they share a group. A relation that is reflexive, symmetric and transitive always splits its set like this: the groups are its equivalence classes.`,
  },
  explanation: {
    intuition: t`An equivalence relation says two things are the same in some respect: same remainder, same number of pages, congruent triangles. Everything is the same as itself, sameness works both ways, and it passes along a chain. So the set falls into groups, the equivalence classes. Inside a class every element is related to every other one, and to itself; across classes nothing is related. To build one from a few pairs, join everything the pairs link, directly or through a chain.`,
    formal: t`**Equivalence relation.** A relation $R$ on $A$ is an equivalence relation if it is reflexive, symmetric and transitive. One failure is enough to say no.

**Equivalence class.** The class of $a$ is $[a] = \{x \in A : (a, x) \in R\}$. It always contains $a$ itself. Two classes are either equal or disjoint, and together they cover $A$. For $R = \{(a, b) : |a - b| \text{ is even}\}$ on $\{1, 2, 3, 4, 5\}$: $[1] = \{1, 3, 5\}$ and $[2] = \{2, 4\}$.

**Making one from a few pairs.** The smallest equivalence relation containing some pairs:
- Add $(a, a)$ for **every** $a \in A$, even one that is in no pair.
- For each $(a, b)$, add $(b, a)$.
- Follow chains: $(a, b)$ and $(b, c)$ need $(a, c)$.

In short: join the linked elements into classes; $R$ is every pair inside a class. A class of $k$ elements gives $k^2$ ordered pairs.

**Congruence modulo $m$.** $a \equiv b \pmod m$ means $m$ divides $a - b$. It is an equivalence relation on $\mathbb{Z}$, and its classes are the $m$ remainders $0, 1, \dots, m - 1$.`,
    worked: {
      prompt: t`On $A = \{1, 2, 3, 4, 5\}$, find the smallest equivalence relation $R$ containing $(1, 4)$ and $(4, 5)$. List its classes and count its ordered pairs.`,
      steps: [
        t`Reflexive: $R$ needs $(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)$. $2$ and $3$ are in no pair, but they still need theirs.`,
        t`Symmetric: $(1, 4)$ needs $(4, 1)$, and $(4, 5)$ needs $(5, 4)$.`,
        t`Transitive: $(1, 4)$ and $(4, 5)$ chain to $(1, 5)$; symmetry then needs $(5, 1)$.`,
        t`So the classes are $\{1, 4, 5\}$, $\{2\}$ and $\{3\}$, and $R$ has $3^2 + 1^2 + 1^2 = 11$ ordered pairs.`,
      ],
      answer: t`Classes $\{1, 4, 5\}$, $\{2\}$, $\{3\}$; $R$ has $11$ ordered pairs.`,
    },
    visualSpec: t`Drag pairs between dots for the elements of $A$; the closure fills in the reflexive loops, the reverse arrows and the chain arrows, and the dots regroup into coloured classes with the $k^2$ pair count beside each.`,
  },
  misconceptions: [
    {
      id: "C16-M1",
      mistake: t`Adds every $(a, a)$ and the reverse of each pair, but doesn't follow chains: from $(a, b)$ and $(b, c)$ never adds $(a, c)$.`,
      remediation: t`Transitive means following chains: if $a$ is related to $b$ and $b$ to $c$, then $a$ is related to $c$. Everything a chain links belongs to one class.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C16-M2",
      mistake: t`Adds $(a, a)$ only for elements that appear in some pair with another element; an element related to nothing else is left out.`,
      remediation: t`Reflexive means $(a, a) \in R$ for **every** $a \in A$, even an element in no other pair. Such an element is a class on its own, $\{a\}$.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C16-M3",
      mistake: t`Thinks an element is not related to itself: drops the $(a, a)$ pairs, so $a$ is missing from its own class.`,
      remediation: t`Every element is related to itself, so $(a, a) \in R$ and $a \in [a]$. A class of $k$ elements has $k^2$ pairs, and $k$ of them are the $(a, a)$.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C16-M4",
      mistake: t`Works in one direction only: keeps $(a, b)$ but never adds $(b, a)$, so a class only reaches forward and each pair is counted once.`,
      remediation: t`An equivalence relation is symmetric: $(a, b) \in R$ means $(b, a) \in R$ too. Both are separate ordered pairs, and $b$ is in $[a]$ exactly when $a$ is in $[b]$.`,
      fallback: { kind: "concept", id: "C15" },
    },
  ],
  engineNotes: [
    t`C16-M1 applies only to a relation built from a few given pairs; a relation given by a rule (such as $m$ divides $a - b$) already contains every chain pair, so the model refuses it.`,
    "C16-M2 needs an element related to no other element (in no given pair, or alone in its class); with none, the model refuses.",
    t`C16-M4 gives the key for the class of an element that starts every chain (e.g. the class of $1$ from $(1, 2), (2, 4)$); draw diagnosing items from the end of a chain.`,
  ],
  items: [
    {
      id: "C16-Q1",
      source: { kind: "authored" },
      stem: t`On $A = \{1, 2, 3, 4, 5\}$, let $R = \{(1, 2), (2, 3), (4, 4)\}$. What is the least number of ordered pairs that must be added to $R$ to make it an equivalence relation on $A$?`,
      verify: { kind: "value", inputs: { lo: "1", hi: "5", R: "{(1, 2), (2, 3), (4, 4)}" }, params: { ask: "add_count" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C16-M1", value: "6" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C16-M2", value: "7" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C16-M4", value: "5" },
        { key: "D", text: t`$8$`, correct: true, value: "8" },
      ],
      solution: {
        steps: [
          t`$(1, 2)$ and $(2, 3)$ link $1$, $2$, $3$ into one class. $4$ and $5$ are in no pair with another element, so the classes are $\{1, 2, 3\}$, $\{4\}$ and $\{5\}$.`,
          t`The equivalence relation is every pair inside a class: $3^2 + 1^2 + 1^2 = 11$ ordered pairs. They include the chain pairs $(1, 3)$, $(3, 1)$ and the pair $(5, 5)$.`,
          t`$R$ already has $3$ of them, so at least $11 - 3 = 8$ pairs must be added.`,
        ],
      },
    },
    {
      id: "C16-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q9(c)" },
      stem: t`Let $A = \{1, 2, 3, 4\}$ and $R = \{(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)\}$. What is the smallest set of pairs that must be added to $R$ to make it an equivalence relation on $A$?`,
      verify: { kind: "value", inputs: { lo: "1", hi: "4", R: "{(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)}" }, params: { ask: "add_set" } },
      options: [
        { key: "A", text: t`$\{(1, 3), (2, 1), (3, 1), (3, 2), (4, 4)\}$`, correct: true, value: "{(1, 3), (2, 1), (3, 1), (3, 2), (4, 4)}" },
        { key: "B", text: t`$\{(2, 1), (3, 2), (4, 4)\}$`, correct: false, misconceptionId: "C16-M1", value: "{(2, 1), (3, 2), (4, 4)}" },
        { key: "C", text: t`$\{(1, 3), (2, 1), (3, 1), (3, 2)\}$`, correct: false, misconceptionId: "C16-M2", value: "{(1, 3), (2, 1), (3, 1), (3, 2)}" },
        { key: "D", text: t`$\{(1, 3), (4, 4)\}$`, correct: false, misconceptionId: "C16-M4", value: "{(1, 3), (4, 4)}" },
      ],
      solution: {
        steps: [
          t`Reflexive: $(1, 1), (2, 2), (3, 3)$ are there, but $(4, 4)$ is missing, even though $4$ is in no pair.`,
          t`Symmetric: $(1, 2)$ needs $(2, 1)$, and $(2, 3)$ needs $(3, 2)$.`,
          t`Transitive: $(1, 2)$ and $(2, 3)$ chain to $(1, 3)$, and symmetry then needs $(3, 1)$.`,
          t`Add $\{(1, 3), (2, 1), (3, 1), (3, 2), (4, 4)\}$. Now $R$ is every pair inside the classes $\{1, 2, 3\}$ and $\{4\}$.`,
        ],
      },
    },
    {
      id: "C16-Q3",
      source: { kind: "authored" },
      stem: t`On $A = \{1, 2, 3, 4, 5, 6\}$, $R$ is the smallest equivalence relation that contains the pairs $(1, 2)$, $(2, 4)$ and $(3, 5)$. The equivalence class of $4$ is:`,
      verify: { kind: "value", inputs: { lo: "1", hi: "6", R: "{(1, 2), (2, 4), (3, 5)}", x: "4" }, params: { ask: "class" } },
      options: [
        { key: "A", text: t`$\left\{4\right\}$`, correct: false, misconceptionId: "C16-M4", value: "{4}" },
        { key: "B", text: t`$\left\{1, 2, 4\right\}$`, correct: true, value: "{1, 2, 4}" },
        { key: "C", text: t`$\left\{2, 4\right\}$`, correct: false, misconceptionId: "C16-M1", value: "{2, 4}" },
        { key: "D", text: t`$\left\{1, 2\right\}$`, correct: false, misconceptionId: "C16-M3", value: "{1, 2}" },
      ],
      solution: {
        steps: [
          t`$(1, 2)$ and $(2, 4)$ chain, so $1$, $2$ and $4$ are in one class. $(3, 5)$ gives a separate class $\{3, 5\}$, and $6$ is alone.`,
          t`The class of $4$ holds $4$ itself and everything related to it, in either direction: $[4] = \{1, 2, 4\}$.`,
        ],
      },
    },
    {
      id: "C16-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q10" },
      stem: t`On $A = \{1, 2, 3, 4, 5, 6, 7\}$, the relation $R = \{(a, b) : 4 \text{ divides } a - b\}$ is an equivalence relation. How many ordered pairs does $R$ contain?`,
      verify: { kind: "value", inputs: { lo: "1", hi: "7", m: "4" }, params: { ask: "pairs" } },
      options: [
        { key: "A", text: t`$13$`, correct: true, value: "13" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C16-M2", value: "12" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C16-M3", value: "6" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C16-M4", value: "10" },
      ],
      solution: {
        steps: [
          t`$4$ divides $a - b$ exactly when $a$ and $b$ leave the same remainder on division by $4$. The classes are $\{1, 5\}$, $\{2, 6\}$, $\{3, 7\}$ and $\{4\}$.`,
          t`A class of $k$ elements gives $k^2$ ordered pairs: every $(a, a)$, and both $(a, b)$ and $(b, a)$.`,
          t`$2^2 + 2^2 + 2^2 + 1^2 = 13$ ordered pairs.`,
        ],
      },
    },
    {
      id: "C16-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q12(b)" },
      stem: t`On $A = \{x \in \mathbb{Z} : 0 \le x \le 12\}$, the relation $R = \{(a, b) : |a - b| \text{ is a multiple of } 8\}$ is an equivalence relation. How many ordered pairs does $R$ contain?`,
      verify: { kind: "value", inputs: { lo: "0", hi: "12", m: "8" }, params: { ask: "pairs" } },
      options: [
        { key: "A", text: t`$18$`, correct: false, misconceptionId: "C16-M4", value: "18" },
        { key: "B", text: t`$23$`, correct: true, value: "23" },
        { key: "C", text: t`$20$`, correct: false, misconceptionId: "C16-M2", value: "20" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C16-M3", value: "10" },
      ],
      solution: {
        steps: [
          t`$|a - b|$ is a multiple of $8$ (and $0$ counts) exactly when $a$ and $b$ leave the same remainder on division by $8$.`,
          t`The classes are $\{0, 8\}$, $\{1, 9\}$, $\{2, 10\}$, $\{3, 11\}$, $\{4, 12\}$, and $\{5\}$, $\{6\}$, $\{7\}$ on their own.`,
          t`Each class of $k$ elements gives $k^2$ pairs: $5 \times 2^2 + 3 \times 1^2 = 20 + 3 = 23$.`,
        ],
      },
    },
    {
      id: "C16-Q6",
      source: { kind: "authored" },
      stem: t`On $A = \{1, 2, 3, 4, 5, 6\}$, $R$ is the smallest equivalence relation that contains the pairs $(1, 3)$, $(3, 5)$ and $(2, 6)$. How many ordered pairs does $R$ contain?`,
      verify: { kind: "value", inputs: { lo: "1", hi: "6", R: "{(1, 3), (3, 5), (2, 6)}" }, params: { ask: "pairs" } },
      options: [
        { key: "A", text: t`$14$`, correct: true, value: "14" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C16-M1", value: "12" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C16-M2", value: "13" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C16-M3", value: "8" },
      ],
      solution: {
        steps: [
          t`$(1, 3)$ and $(3, 5)$ chain, so $\{1, 3, 5\}$ is one class. $(2, 6)$ gives $\{2, 6\}$, and $4$ is a class on its own.`,
          t`Each class of $k$ elements gives $k^2$ ordered pairs: $3^2 + 2^2 + 1^2 = 9 + 4 + 1 = 14$.`,
        ],
      },
    },
  ],
};
