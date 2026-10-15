import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A pizza shop offers $6$ toppings. You may pick any of them: some, all, or none. **How many different pizzas can you order?**`,
    reveal: t`Go through the toppings one at a time: each is in or out, $2$ choices each. So there are $2^6 = 64$ pizzas. That count includes the plain pizza (no toppings, the empty set $\phi$) and the one with everything (the whole set). Each pizza is a **subset** of the $6$ toppings.`,
  },
  explanation: {
    intuition: [
      t`A **subset** of a set $A$ is a set made only of elements of $A$.`,
      t`To build one, go through the elements of $A$ and decide for each one: in or out.`,
      t`With $n$ elements, that makes $2 \times 2 \times \dots \times 2 = 2^n$ subsets.`,
      t`Saying out every time gives the **empty set** $\phi$, the set with no elements.`,
      t`Saying in every time gives $A$ itself, so $\phi$ and $A$ are always subsets of $A$.`,
      t`A **proper subset** of $A$ is any subset except $A$ itself.`,
    ],
    formal: [
      {
        title: "Subset",
        points: [
          t`$B \subseteq A$, read "$B$ is a subset of $A$", means every element of $B$ is also an element of $A$.`,
          t`For example, $\{1, 2\} \subseteq \{1, 2, 3, 4\}$: both $1$ and $2$ are elements of the bigger set.`,
          t`$\phi \subseteq A$ for every set $A$: $\phi$ has no element that could be missing from $A$.`,
          t`$A \subseteq A$ for every set $A$ too: each element of $A$ is in $A$.`,
          t`$B$ is a proper subset of $A$ when $B \subseteq A$ and $B \neq A$.`,
          t`So $\{1, 2\}$ is a proper subset of $\{1, 2, 3, 4\}$, but no set is a proper subset of itself.`,
        ],
        figure: {
          alt: "A large oval A holds the elements 1, 2, 3 and 4. A smaller circle B inside it holds 1 and 2, so every element of B is in A. The elements 3 and 4 are in A but outside B, so B is not equal to A: B is a proper subset of A.",
          axes: "none",
          view: { x: [0.4, 9.6], y: [-0.9, 5.9] },
          elements: [
            { kind: "ellipse", centre: [5, 3], rx: 4.2, ry: 2.6, tone: "muted", step: 1 },
            { kind: "label", at: [2.03, 4.84], label: "A", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "circle", centre: [3.6, 3], r: 1.5, step: 1 },
            { kind: "label", at: [2.54, 4.06], label: "B", labelAt: "nw", step: 1 },
            { kind: "point", at: [3.2, 3.4], label: "1", labelAt: "ne", step: 2 },
            { kind: "point", at: [4, 2.5], label: "2", labelAt: "ne", step: 2 },
            { kind: "point", at: [6.4, 3.6], label: "3", labelAt: "ne", tone: "muted", step: 2 },
            { kind: "point", at: [7.4, 2.5], label: "4", labelAt: "ne", tone: "muted", step: 2 },
            { kind: "label", at: [5, 0.2], label: "3, 4 ∉ B, so B ≠ A", labelAt: "s", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Element or subset?",
        points: [
          t`Recall: $x \in A$, read "$x$ belongs to $A$", says $x$ is one of the elements listed in $A$.`,
          t`$B \subseteq A$ compares two sets: every element of $B$ must belong to $A$.`,
          t`Take $A = \{1, \{2\}\}$: its two elements are the number $1$ and the set $\{2\}$.`,
          t`So $1 \in A$, and $\{1\} \subseteq A$, since its one element, $1$, belongs to $A$.`,
          t`Also $\{2\} \in A$, but $\{2\} \not\subseteq A$ (not a subset), since $2 \notin A$: the number $2$ is not listed in $A$.`,
          t`$\phi \subseteq A$ always, but $\phi \in A$ only when $\phi$ is listed in $A$.`,
        ],
      },
      {
        title: "The power set",
        points: [
          t`Recall: $n(A)$ is the number of distinct elements of $A$.`,
          t`The **power set** $P(A)$ is the set of all subsets of $A$.`,
          t`Its elements are sets: for $A = \{1, 2\}$ it holds $\{1\}$, not the number $1$.`,
          t`If $n(A) = n$, then $n(P(A)) = 2^n$: each element is in or out.`,
          t`Proper subsets leave out $A$ itself, so there are $2^n - 1$ of them.`,
          t`Non-empty proper subsets leave out $\phi$ as well, so there are $2^n - 2$.`,
        ],
      },
      {
        title: "Power set of a power set",
        points: [
          t`$P(A)$ is itself a set, with $2^n$ elements.`,
          t`So apply the rule to that number: $n(P(P(A))) = 2^{2^n}$.`,
          t`It is not $(2^n)^2$: each $P$ puts the previous count in the exponent.`,
          t`The empty set has no elements, so $n(\phi) = 0$, and its only subset is $\phi$ itself.`,
          t`So $P(\phi) = \{\phi\}$, a set with one element: $n(P(\phi)) = 2^0 = 1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`$A = \{p, q\}$. Write $P(A)$. Then find the number of proper subsets of $A$, the number of non-empty proper subsets, and $n(P(P(A)))$.`,
      steps: [
        t`Each of $p$, $q$ is in or out: $P(A) = \{\phi, \{p\},$ $\{q\}, \{p, q\}\}$, so $n(P(A)) = 2^2 = 4$. Both $\phi$ (both out) and $A$ (both in) are on the list.`,
        t`Proper subsets: leave out $A$ itself, keep $\phi$. That leaves $\phi$, $\{p\}$, $\{q\}$: $2^2 - 1 = 3$.`,
        t`Non-empty proper subsets: leave out $\phi$ as well. That leaves $\{p\}$, $\{q\}$: $2^2 - 2 = 2$.`,
        t`$P(A)$ is a set with $4$ elements, so $n(P(P(A))) = 2^4 = 16$.`,
      ],
      answer: t`$P(A) = \{\phi, \{p\},$ $\{q\}, \{p, q\}\}$; $A$ has $3$ proper subsets and $2$ non-empty proper subsets; $n(P(P(A))) = 16$.`,
    },
    visualSpec: t`Tick boxes beside each element of $A$ switch it in or out of a subset; the subset and its place in $P(A)$ light up, with $\phi$ (all off) and $A$ (all on) marked, and the count $2^n$ updates as elements are added.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Leaving out $\phi$: not seeing that the empty set is a subset of every set`,
      remediation: t`$\phi$ is a subset of every set: it has no element that could be missing from $A$. Always count it: $P(A)$ has $2^n$ members, $\phi$ among them, and $\phi$ is a proper subset too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Treating subset and proper subset as the same: dropping $A$ from $P(A)$, or counting $A$ as a proper subset of itself`,
      remediation: t`Every set is a subset of itself, so $A$ belongs in $P(A)$. A proper subset must differ from $A$: leave $A$ out only when the question says proper.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`For a power set of a power set, multiplying the exponents: $n(P(P(A))) = (2^n)^2 = 2^{2n}$ instead of $2^{2^n}$`,
      remediation: t`$P(A)$ is a set with $2^n$ elements, so apply the rule to that number: $n(P(P(A))) = 2^{2^n}$. Each $P$ puts the previous count in the exponent.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C02-M4",
      mistake: t`Mixing up $\in$ and $\subseteq$: writing $x$ for the subset $\{x\}$, reading $\{x\} \in A$ as $\{x\} \subseteq A$, or counting $\phi$ as an element of $A$ because $\phi \subseteq A$`,
      remediation: t`$x \in A$ means $x$ is listed in $A$; $B \subseteq A$ means every element of $B$ is listed in $A$. So a power set holds $\{1\}$, not $1$, and $\phi \subseteq A$ always, but $\phi$ is not an element of $A$ unless it is listed: $n(\phi) = 0$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C02-M3 applies only to power sets of power sets, and gives the key when $n(A)$ is $1$ or $2$ ($2^{2n} = 2^{2^n}$ there); diagnose it with $n(A) = 0$ or $n(A) \ge 3$.`,
    t`C02-M1 and C02-M2 give the same count, $2^n - 1$ at each step, on 'number of subsets' and nested items; list both only on proper-subset, listing and statement items. On non-empty proper subsets C02-M1 gives the key, so it has no model there.`,
    t`C02-M4 gives the key on counts when $\phi$ is already an element of $A$; use sets without $\phi$ as an element.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q11" },
      stem: t`The power set of $A = \{1, 2, 3\}$ is:`,
      verify: { kind: "value", inputs: { A: "FiniteSet(1, 2, 3)" }, params: { ask: "list" } },
      options: [
        { key: "A", text: t`$\{\phi, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$`, correct: true, value: "FiniteSet(EmptySet, FiniteSet(1), FiniteSet(2), FiniteSet(3), FiniteSet(1, 2), FiniteSet(1, 3), FiniteSet(2, 3), FiniteSet(1, 2, 3))" },
        { key: "B", text: t`$\{\{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$`, correct: false, misconceptionId: "C02-M1", value: "FiniteSet(FiniteSet(1), FiniteSet(2), FiniteSet(3), FiniteSet(1, 2), FiniteSet(1, 3), FiniteSet(2, 3), FiniteSet(1, 2, 3))" },
        { key: "C", text: t`$\{\phi, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}\}$`, correct: false, misconceptionId: "C02-M2", value: "FiniteSet(EmptySet, FiniteSet(1), FiniteSet(2), FiniteSet(3), FiniteSet(1, 2), FiniteSet(1, 3), FiniteSet(2, 3))" },
        { key: "D", text: t`$\{\phi, 1, 2, 3, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$`, correct: false, misconceptionId: "C02-M4", value: "FiniteSet(EmptySet, 1, 2, 3, FiniteSet(1, 2), FiniteSet(1, 3), FiniteSet(2, 3), FiniteSet(1, 2, 3))" },
      ],
      solution: {
        steps: [
          t`Each of $1$, $2$, $3$ is in or out of a subset, so $A$ has $2^3 = 8$ subsets.`,
          t`All out gives $\phi$; all in gives $\{1, 2, 3\}$ itself. Both belong in $P(A)$.`,
          t`The one-element subsets are the sets $\{1\}$, $\{2\}$, $\{3\}$, not the numbers $1$, $2$, $3$. So $P(A) = \{\phi, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q3" },
      stem: t`If $A$ is the empty set, then $n[P(P(P(A)))]$ is:`,
      verify: { kind: "value", inputs: { A: "EmptySet", k: "3" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C02-M1", value: "0" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C02-M3", value: "1" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C02-M4", value: "16" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`$n(\phi) = 0$: the empty set has no elements. Its only subset is $\phi$, so $P(A) = \{\phi\}$ and $n(P(A)) = 2^0 = 1$.`,
          t`$P(A)$ has $1$ element, so $n(P(P(A))) = 2^1 = 2$: $P(P(A)) = \{\phi, \{\phi\}\}$.`,
          t`$P(P(A))$ has $2$ elements, so $n(P(P(P(A)))) = 2^2 = 4$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`The number of proper subsets of $V = \{a, e, i, o, u\}$ is:`,
      verify: { kind: "value", inputs: { A: "FiniteSet(a, e, i, o, u)" }, params: { ask: "proper" } },
      options: [
        { key: "A", text: t`$63$`, correct: false, misconceptionId: "C02-M4", value: "63" },
        { key: "B", text: t`$31$`, correct: true, value: "31" },
        { key: "C", text: t`$30$`, correct: false, misconceptionId: "C02-M1", value: "30" },
        { key: "D", text: t`$32$`, correct: false, misconceptionId: "C02-M2", value: "32" },
      ],
      solution: {
        steps: [
          t`$n(V) = 5$, so $V$ has $2^5 = 32$ subsets, $\phi$ and $V$ included.`,
          t`A proper subset is any subset except $V$ itself; $\phi$ stays. So $V$ has $32 - 1 = 31$ proper subsets.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`$A = \{a, b, c\}$. The number of elements of $P(P(A))$ is:`,
      verify: { kind: "value", inputs: { A: "FiniteSet(a, b, c)", k: "2" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$65536$`, correct: false, misconceptionId: "C02-M4", value: "65536" },
        { key: "B", text: t`$256$`, correct: true, value: "256" },
        { key: "C", text: t`$127$`, correct: false, misconceptionId: "C02-M1", value: "127" },
        { key: "D", text: t`$64$`, correct: false, misconceptionId: "C02-M3", value: "64" },
      ],
      solution: {
        steps: [
          t`$n(A) = 3$, so $n(P(A)) = 2^3 = 8$.`,
          t`$P(A)$ is a set with $8$ elements, so the rule applies to it with $8$ in place of $3$: $n(P(P(A))) = 2^8 = 256$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`$A = \{x : x \text{ is a prime number less than } 10\}$. The number of proper subsets of $A$ is:`,
      verify: { kind: "value", inputs: { A: "FiniteSet(2, 3, 5, 7)" }, params: { ask: "proper" } },
      options: [
        { key: "A", text: t`$31$`, correct: false, misconceptionId: "C02-M4", value: "31" },
        { key: "B", text: t`$15$`, correct: true, value: "15" },
        { key: "C", text: t`$14$`, correct: false, misconceptionId: "C02-M1", value: "14" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C02-M2", value: "16" },
      ],
      solution: {
        steps: [
          t`The primes less than $10$ are $2$, $3$, $5$, $7$, so $A = \{2, 3, 5, 7\}$ and $n(A) = 4$.`,
          t`$A$ has $2^4 = 16$ subsets, $\phi$ and $A$ included.`,
          t`Leave out $A$ itself but keep $\phi$: $A$ has $16 - 1 = 15$ proper subsets.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`$A = \{1, \{2, 3\}, 4\}$. Which statement is true?`,
      verify: { kind: "value", inputs: { A: "FiniteSet(1, FiniteSet(2, 3), 4)", X: "FiniteSet(2, 3)", E: "EmptySet" }, params: { ask: "stmt", stmts: ["elem X", "sub X", "notsub E", "proper A"] } },
      options: [
        { key: "A", text: t`$\{2, 3\} \in A$`, correct: true, value: "elem_X" },
        { key: "B", text: t`$\phi \not\subseteq A$`, correct: false, misconceptionId: "C02-M1", value: "notsub_E" },
        { key: "C", text: t`$A$ is a proper subset of $A$`, correct: false, misconceptionId: "C02-M2", value: "proper_A" },
        { key: "D", text: t`$\{2, 3\} \subseteq A$`, correct: false, misconceptionId: "C02-M4", value: "sub_X" },
      ],
      solution: {
        steps: [
          t`The elements of $A$ are $1$, the set $\{2, 3\}$, and $4$. So $\{2, 3\} \in A$ is true.`,
          t`$\{2, 3\} \subseteq A$ would need $2 \in A$ and $3 \in A$; neither is, so it is false.`,
          t`$\phi \subseteq A$ for every set $A$, and no set is a proper subset of itself. The one true statement is $\{2, 3\} \in A$.`,
        ],
      },
    },
  ],
};
