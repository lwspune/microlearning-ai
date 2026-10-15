import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`Let $A = \{1, 2, 3\}$ and $B = \{7\}$. A relation from $A$ to $B$ is any set of pairs $(a, b)$ with $a \in A$, $b \in B$. **How many different relations from $A$ to $B$ can you write down?**`,
    reveal: t`$A \times B = \{(1, 7), (2, 7), (3, 7)\}$ has just $3$ pairs, and a relation is any subset of it. One with no pairs ($\phi$), three with one pair, three with two pairs, and $A \times B$ itself: $1 + 3 + 3 + 1 = 8 = 2^3$ relations. Each pair is in or out, $2 \times 2 \times 2$ ways.`,
  },
  explanation: {
    intuition: [
      t`Recall: $A \times B$ is the set of all pairs $(a, b)$ with $a \in A$ and $b \in B$.`,
      t`A **relation** from $A$ to $B$ is any subset of $A \times B$, nothing more.`,
      t`So counting relations means counting the subsets of $A \times B$.`,
      t`Go through the pairs one at a time: each pair is either in the relation or out of it.`,
      t`That is two choices per pair, and the choices multiply: $2 \times 2 \times \dots \times 2$, one $2$ for each pair.`,
      t`Even the empty set $\phi$, with no pairs, and the whole of $A \times B$ are among them.`,
    ],
    formal: [
      {
        title: "Relations from A to B",
        points: [
          t`Recall: $n(A)$ is the number of elements in $A$; let $n(A) = m$ and $n(B) = n$.`,
          t`Each element of $A$ pairs with each element of $B$, so $n(A \times B) = mn$.`,
          t`Recall: a set with $N$ elements has $2^N$ subsets.`,
          t`A relation is a subset of $A \times B$, so here $N = mn$.`,
          t`So the number of relations from $A$ to $B$ is $2^{mn}$.`,
        ],
      },
      {
        title: "Relations on a set",
        points: [
          t`A **relation on $A$** is a relation from $A$ to $A$ itself: a subset of $A \times A$.`,
          t`If $n(A) = n$, then $A \times A$ has $n \times n = n^2$ pairs.`,
          t`So there are $2^{n^2}$ relations on $A$.`,
        ],
      },
      {
        title: "Empty and universal relations",
        points: [
          t`Recall: the empty set $\phi$ is a subset of every set, so $\phi \subseteq A \times B$.`,
          t`So $\phi$ is a relation, the **empty (void) relation**: it relates nothing to anything.`,
          t`$A \times B$ is a subset of itself, so it is a relation too: the **universal relation**.`,
          t`The universal relation relates every element of $A$ to every element of $B$.`,
          t`Both are counted in $2^{mn}$: leave neither of them out.`,
        ],
      },
      {
        title: "Relations containing given pairs",
        points: [
          t`Say a relation must **contain** $k$ given pairs: every one of them must be in it.`,
          t`Those $k$ pairs have no choice: they are fixed in.`,
          t`The other $mn - k$ pairs are still free, each one in or out.`,
          t`So $2^{mn - k}$ relations contain the $k$ given pairs.`,
          t`They run from the $k$ pairs alone up to the whole of $A \times B$.`,
          t`Each fixed pair halves the count: $2^{mn}$, then $2^{mn - 1}$, and so on.`,
        ],
      },
    ],
    worked: {
      prompt: t`Let $A = \{p, q, r\}$ and $B = \{1, 2, 3, 4\}$. How many relations from $A$ to $B$ are there, and how many of them contain both $(p, 1)$ and $(q, 2)$?`,
      steps: [
        t`$n(A \times B) = 3 \times 4 = 12$ pairs.`,
        t`A relation is any subset of these $12$ pairs: each pair is in or out. So there are $2^{12} = 4096$ relations, $\phi$ and $A \times B$ included.`,
        t`Now $(p, 1)$ and $(q, 2)$ must be in. They have no choice; the other $12 - 2 = 10$ pairs are still in or out.`,
        t`So $2^{10} = 1024$ relations contain both pairs.`,
      ],
      answer: t`$4096$ relations from $A$ to $B$; $1024$ of them contain $(p, 1)$ and $(q, 2)$.`,
    },
    visualSpec: t`A grid of the pairs of $A \times B$, each a switch that turns on or off; the count of relations doubles each time a pair is added to the grid, and fixing a pair on halves it.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: t`Counting the pairs of $A \times B$ instead of the relations: answering $mn$ (or $mn - k$) rather than $2^{mn}$`,
      remediation: t`$mn$ is the number of pairs; a relation is a set of pairs, any subset of $A \times B$. A set of $N$ pairs has $2^N$ subsets, so there are $2^{mn}$ relations.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C14-M2",
      mistake: t`Taking $n(A \times B) = n(A) + n(B)$, so $2^{m + n}$ relations`,
      remediation: t`Each element of $A$ pairs with each element of $B$, so $n(A \times B) = n(A) \times n(B) = mn$, not $m + n$. The number of relations is $2^{mn}$.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C14-M3",
      mistake: t`Leaving out the empty relation, as if a relation must relate something: $2^{mn} - 1$`,
      remediation: t`$\phi$ is a subset of every set, so $\phi \subseteq A \times B$ is a relation: the empty relation. It is one of the $2^{mn}$, and so is the universal relation $A \times B$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C14-M4",
      mistake: t`Reading 'contains the $k$ given pairs' as 'is made from the given pairs', and counting the $2^k$ subsets of those pairs`,
      remediation: t`A relation that contains the given pairs has them all, plus any of the other pairs. The given pairs are fixed; the other $mn - k$ pairs are free, so there are $2^{mn - k}$ such relations.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    "C14-M3 is tested only on 'how many relations' items: on a 'contain the given pairs' item the empty relation is never counted anyway, so its model gives the key. C14-M4 is tested only on 'contain' items.",
    t`On a 'contain' item C14-M2 ($2^{m + n - k}$) and C14-M4 ($2^k$) agree when $k = (m + n)/2$, e.g. three fixed pairs with $n(A) = n(B) = 3$; pick $k$ away from that.`,
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q10" },
      stem: t`If $A = \{a, b, c\}$, the total number of distinct relations in $A \times A$ (relations on $A$) is:`,
      verify: { kind: "value", inputs: { m: "3", n: "3" }, params: { ask: "all" } },
      options: [
        { key: "A", text: t`$511$`, correct: false, misconceptionId: "C14-M3", value: "511" },
        { key: "B", text: t`$512$`, correct: true, value: "512" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C14-M1", value: "9" },
        { key: "D", text: t`$64$`, correct: false, misconceptionId: "C14-M2", value: "64" },
      ],
      solution: {
        steps: [
          t`$A \times A$ has $3 \times 3 = 9$ pairs.`,
          t`A relation on $A$ is any subset of $A \times A$, empty one included: each of the $9$ pairs is in or out.`,
          t`So there are $2^9 = 512$ relations on $A$.`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2 SolvedEx.8" },
      stem: t`Let $A = \{1, 2, 3, 4, 5\}$ and $B = \{1, 4, 5\}$. How many relations from $A$ to $B$ are there?`,
      verify: { kind: "value", inputs: { m: "5", n: "3" }, params: { ask: "all" } },
      options: [
        { key: "A", text: t`$32768$`, correct: true, value: "32768" },
        { key: "B", text: t`$15$`, correct: false, misconceptionId: "C14-M1", value: "15" },
        { key: "C", text: t`$256$`, correct: false, misconceptionId: "C14-M2", value: "256" },
        { key: "D", text: t`$32767$`, correct: false, misconceptionId: "C14-M3", value: "32767" },
      ],
      solution: {
        steps: [
          t`$n(A) = 5$ and $n(B) = 3$, so $A \times B$ has $5 \times 3 = 15$ pairs.`,
          t`Each relation is a subset of these $15$ pairs: each pair is in or out.`,
          t`So there are $2^{15} = 32768$ relations from $A$ to $B$.`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q6(iii)" },
      stem: t`Let $A = \{1, 2, 3\}$ and $B = \{4, 5, 6\}$, and let $R_3 = \{(1, 4), (1, 5), (3, 6), (2, 6), (3, 4)\}$. How many relations from $A$ to $B$ contain all five pairs of $R_3$?`,
      verify: { kind: "value", inputs: { m: "3", n: "3", k: "5" }, params: { ask: "contain" } },
      options: [
        { key: "A", text: t`$16$`, correct: true, value: "16" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C14-M1", value: "4" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C14-M2", value: "2" },
        { key: "D", text: t`$32$`, correct: false, misconceptionId: "C14-M4", value: "32" },
      ],
      solution: {
        steps: [
          t`$A \times B$ has $3 \times 3 = 9$ pairs.`,
          t`The $5$ pairs of $R_3$ must be in, so they have no choice. The other $9 - 5 = 4$ pairs are each in or out.`,
          t`So $2^4 = 16$ relations contain $R_3$, from $R_3$ itself up to $A \times B$.`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2 SolvedEx.7" },
      stem: t`Let $A = \{1, 2, 3\}$ and $B = \{2, 4, 6\}$. How many relations from $A$ to $B$ contain every pair of $R = \{(1, 2), (1, 4), (3, 2), (3, 4)\}$?`,
      verify: { kind: "value", inputs: { m: "3", n: "3", k: "4" }, params: { ask: "contain" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C14-M1", value: "5" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C14-M2", value: "4" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C14-M4", value: "16" },
        { key: "D", text: t`$32$`, correct: true, value: "32" },
      ],
      solution: {
        steps: [
          t`$A \times B$ has $3 \times 3 = 9$ pairs.`,
          t`The $4$ pairs of $R$ are fixed in; the remaining $9 - 4 = 5$ pairs are each in or out.`,
          t`So $2^5 = 32$ relations contain every pair of $R$.`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.2 Q7" },
      stem: t`Let $A = \{6, 8\}$ and $B = \{1, 3, 5\}$. The relation $R_1 = \{(a, b) : a - b \text{ is even}\}$ from $A$ to $B$ is the empty relation, and $R_2 = \{(a, b) : a + b \text{ is odd}\}$ is the universal relation $A \times B$. Counting these two as well, how many relations from $A$ to $B$ are there?`,
      verify: { kind: "value", inputs: { m: "2", n: "3" }, params: { ask: "all" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C14-M1", value: "6" },
        { key: "B", text: t`$32$`, correct: false, misconceptionId: "C14-M2", value: "32" },
        { key: "C", text: t`$63$`, correct: false, misconceptionId: "C14-M3", value: "63" },
        { key: "D", text: t`$64$`, correct: true, value: "64" },
      ],
      solution: {
        steps: [
          t`$A \times B$ has $2 \times 3 = 6$ pairs.`,
          t`Every subset of $A \times B$ is a relation, from $R_1 = \phi$ up to $R_2 = A \times B$.`,
          t`So there are $2^6 = 64$ relations from $A$ to $B$, these two included.`,
        ],
      },
    },
    {
      id: "C14-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q8(ii)" },
      stem: t`Let $A = \{1, 2, 3, 4\}$. How many relations on $A$ contain both $(1, 2)$ and $(2, 1)$?`,
      verify: { kind: "value", inputs: { m: "4", n: "4", k: "2" }, params: { ask: "contain" } },
      options: [
        { key: "A", text: t`$64$`, correct: false, misconceptionId: "C14-M2", value: "64" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C14-M4", value: "4" },
        { key: "C", text: t`$16384$`, correct: true, value: "16384" },
        { key: "D", text: t`$14$`, correct: false, misconceptionId: "C14-M1", value: "14" },
      ],
      solution: {
        steps: [
          t`$A \times A$ has $4 \times 4 = 16$ pairs.`,
          t`$(1, 2)$ and $(2, 1)$ are fixed in; the other $16 - 2 = 14$ pairs are each in or out.`,
          t`So $2^{14} = 16384$ relations on $A$ contain both pairs.`,
        ],
      },
    },
  ],
};
