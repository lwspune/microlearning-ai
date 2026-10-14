import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`$(x + 1, y - 2) = (3, 1)$. Riya says $x = 2$, $y = 3$. Sameer matches the entries crosswise, $x + 1 = 1$ and $y - 2 = 3$, and gets $x = 0$, $y = 5$. **Can both be right?**`,
    reveal: t`No. Sameer's values make the left side $(1, 3)$, and $(1, 3) \ne (3, 1)$. In an ordered pair the first entry must match the first and the second must match the second, so only $x = 2$, $y = 3$ works.`,
  },
  explanation: {
    intuition: t`An ordered pair is like a seat written as (row, seat): $(2, 5)$ and $(5, 2)$ are different seats. So two pairs are equal only when their first entries match and their second entries match. $A \times B$ is the set of every pair with a first entry from $A$ and a second entry from $B$. Each of the $n(A)$ first entries goes with each of the $n(B)$ second entries, so there are $n(A) \times n(B)$ pairs.`,
    formal: t`**Ordered pairs.** $(a, b)$ has first entry $a$ and second entry $b$.
$$(a, b) = (c, d) \iff a = c \text{ and } b = d$$
So $(2, 3) \ne (3, 2)$, though $\{2, 3\} = \{3, 2\}$. An entry may repeat: $(3, 3)$ is an ordered pair.

**Cartesian product.** $A \times B = \{(a, b) : a \in A,\ b \in B\}$. For $A = \{1, 3, 5\}$ and $B = \{2, 3\}$:
- $A \times B = \{(1, 2), (1, 3), (3, 2), (3, 3), (5, 2), (5, 3)\}$
- $B \times A = \{(2, 1), (2, 3), (2, 5), (3, 1), (3, 3), (3, 5)\}$

So $A \times B \ne B \times A$; they are equal only when $A = B$ or one set is empty.

**Counting.** $n(A \times B) = n(A) \times n(B)$ and $n(A \times A) = n(A)^2$. Above, $3 \times 2 = 6$.

**Pairs in both.** $(a, b)$ is in both $A \times B$ and $B \times A$ exactly when $a$ and $b$ are both in $A \cap B$:
$$(A \times B) \cap (B \times A) = (A \cap B) \times (A \cap B)$$
It has $n(A \cap B)^2$ elements. Above, $A \cap B = \{3\}$ gives only $(3, 3)$; two common elements $c, d$ give four: $(c, c), (c, d), (d, c), (d, d)$.

**The rest of $A \times B$.** The first entries of the pairs you know are in $A$, the second entries in $B$. If they already give $n(A) \times n(B) = n(A \times B)$, you have $A$ and $B$: list $A \times B$ and remove the known pairs.`,
    worked: {
      prompt: t`$A \times B$ has $6$ elements, and three of them are $(1, 3)$, $(2, 5)$ and $(3, 3)$. Find the other three.`,
      steps: [
        t`The first entries $1, 2, 3$ are in $A$; the second entries $3, 5$ are in $B$.`,
        t`So $n(A) \ge 3$ and $n(B) \ge 2$, giving $n(A \times B) \ge 3 \times 2 = 6$. As $n(A \times B) = 6$, $A = \{1, 2, 3\}$ and $B = \{3, 5\}$ exactly.`,
        t`$A \times B = \{(1, 3), (1, 5), (2, 3), (2, 5), (3, 3), (3, 5)\}$.`,
        t`Remove the three given pairs: $(1, 5)$, $(2, 3)$ and $(3, 5)$ are left.`,
      ],
      answer: t`The other three elements are $(1, 5)$, $(2, 3)$ and $(3, 5)$.`,
    },
    visualSpec: t`Drag elements into $A$ and $B$; a grid with $A$ down the side and $B$ along the top fills with the pairs of $A \times B$, the flipped grid shows $B \times A$, and the cells they share light up as the square $(A \cap B) \times (A \cap B)$.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Treats $(a, b)$ and $(b, a)$ as the same pair, as $\{a, b\} = \{b, a\}$ in a set, so keeps only one of them`,
      remediation: t`In an ordered pair the order matters: $(2, 3) \ne (3, 2)$. When $a \ne b$, $(a, b)$ and $(b, a)$ are two different elements, and both are counted.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C12-M2",
      mistake: t`Adds the sizes: $n(A \times B) = n(A) + n(B)$, and $n(A \cap B) + n(A \cap B)$ pairs common to $A \times B$ and $B \times A$`,
      remediation: t`Each of the $n(A)$ first entries pairs with each of the $n(B)$ second entries, so you multiply: $n(A \times B) = n(A) \times n(B)$.`,
      fallback: { kind: "ext", topic: "the multiplication principle of counting" },
    },
    {
      id: "C12-M3",
      mistake: t`Leaves out pairs with equal entries, like $(3, 3)$, carrying the set rule 'each element once' into pairs`,
      remediation: t`A pair may repeat an entry: $(3, 3)$ is in $A \times B$ whenever $3 \in A$ and $3 \in B$. 'Each element once' is a rule for the elements of a set, not the entries of a pair.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C12-M4",
      mistake: t`Thinks only the pairs with equal entries, $(c, c)$, lie in both $A \times B$ and $B \times A$`,
      remediation: t`$(a, b)$ is in both when $a$ and $b$ are each in $A \cap B$; they need not be equal. So $(A \times B) \cap (B \times A) = (A \cap B) \times (A \cap B)$, with $n(A \cap B)^2$ elements.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C12-M1 gives the key unless the answer set holds some $(a, b)$ and $(b, a)$ with $a \ne b$, that is unless $n(A \cap B) \ge 2$. C12-M3 gives the key when $A \cap B = \varnothing$; C12-M4 when $n(A \cap B) \le 1$. Draw items with at least two common elements.`,
    t`C12-M2 on a count item gives the key when $n(A) + n(B) = n(A) \times n(B)$ (both $2$), and on a common-pairs item when $n(A \cap B) = 2$; avoid those sizes.`,
    "Equality of ordered pairs is taught in the hook and the formal slide but has no item: only C12-M1 (matching crosswise) and an unmodelled sign slip fit it, too few for four options.",
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2.2 SolvedEx.1" },
      stem: t`Let $A = \{1, 3, 4\}$ and $B = \{2, 3, 4\}$. How many elements does $A \times B$ have?`,
      verify: { kind: "value", inputs: { A: "{1, 3, 4}", B: "{2, 3, 4}" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C12-M1", value: "8" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C12-M2", value: "6" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C12-M3", value: "7" },
        { key: "D", text: t`$9$`, correct: true, value: "9" },
      ],
      solution: {
        steps: [
          t`Each of the $3$ elements of $A$ pairs with each of the $3$ elements of $B$: $3 \times 3 = 9$ pairs.`,
          t`They are $(1, 2), (1, 3), (1, 4), (3, 2), (3, 3), (3, 4), (4, 2), (4, 3), (4, 4)$.`,
          t`$(3, 4)$ and $(4, 3)$ are different pairs, and $(3, 3)$, $(4, 4)$ count too. So $n(A \times B) = 9$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.2 Q3" },
      stem: t`If $A = \{-2, -1, 0, 1, 2\}$, how many elements does $A \times A$ have?`,
      verify: { kind: "value", inputs: { A: "{-2, -1, 0, 1, 2}" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C12-M3", value: "20" },
        { key: "B", text: t`$25$`, correct: true, value: "25" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C12-M1", value: "15" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C12-M2", value: "10" },
      ],
      solution: {
        steps: [
          t`$n(A) = 5$, so $n(A \times A) = 5 \times 5 = 25$.`,
          t`This includes the $5$ pairs with equal entries, $(-2, -2)$ to $(2, 2)$, and both $(-1, 2)$ and $(2, -1)$, which are different pairs.`,
          t`So $A \times A$ has $25$ elements.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q5" },
      stem: t`Two sets $A$ and $B$ have $43$ elements in common. How many elements are common to both $A \times B$ and $B \times A$?`,
      verify: { kind: "value", inputs: { k: "43" }, params: { ask: "common" } },
      options: [
        { key: "A", text: t`$43$`, correct: false, misconceptionId: "C12-M4", value: "43" },
        { key: "B", text: t`$1849$`, correct: true, value: "1849" },
        { key: "C", text: t`$86$`, correct: false, misconceptionId: "C12-M2", value: "86" },
        { key: "D", text: t`$1806$`, correct: false, misconceptionId: "C12-M3", value: "1806" },
      ],
      solution: {
        steps: [
          t`$(a, b) \in A \times B$ needs $a \in A$, $b \in B$; $(a, b) \in B \times A$ needs $a \in B$, $b \in A$. Both hold exactly when $a, b \in A \cap B$.`,
          t`So $(A \times B) \cap (B \times A) = (A \cap B) \times (A \cap B)$.`,
          t`It has $43 \times 43 = 43^2 = 1849$ elements: the $43$ pairs $(c, c)$ and also pairs $(c, d)$ with $c \ne d$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q5(i)" },
      stem: t`If $A = \{1, 2, 3\}$ and $B = \{2, 3, 4\}$, then $(A \times B) \cap (B \times A)$ is:`,
      verify: { kind: "value", inputs: { A: "{1, 2, 3}", B: "{2, 3, 4}" }, params: { ask: "common_list" } },
      options: [
        { key: "A", text: t`$\{(2, 2), (3, 3)\}$`, correct: false, misconceptionId: "C12-M4", value: "{(2, 2), (3, 3)}" },
        { key: "B", text: t`$\{(2, 2), (2, 3), (3, 2), (3, 3)\}$`, correct: true, value: "{(2, 2), (2, 3), (3, 2), (3, 3)}" },
        { key: "C", text: t`$\{(2, 2), (2, 3), (3, 3)\}$`, correct: false, misconceptionId: "C12-M1", value: "{(2, 2), (2, 3), (3, 3)}" },
        { key: "D", text: t`$\{(2, 3), (3, 2)\}$`, correct: false, misconceptionId: "C12-M3", value: "{(2, 3), (3, 2)}" },
      ],
      solution: {
        steps: [
          t`A pair is in both $A \times B$ and $B \times A$ when both its entries are in $A \cap B = \{2, 3\}$.`,
          t`So the answer is $\{2, 3\} \times \{2, 3\}$: every pair with entries from $\{2, 3\}$.`,
          t`$(A \times B) \cap (B \times A) = \{(2, 2), (2, 3), (3, 2), (3, 3)\}$. Check $(3, 2)$: $3 \in A$, $2 \in B$, and $3 \in B$, $2 \in A$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q5" },
      stem: t`Let $A = \{1, 2, 3, 4, 5\}$ and $B = \{2, 3, 4, 5, 6\}$. How many ordered pairs belong to both $A \times B$ and $B \times A$?`,
      verify: { kind: "value", inputs: { A: "{1, 2, 3, 4, 5}", B: "{2, 3, 4, 5, 6}" }, params: { ask: "common" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C12-M2", value: "8" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C12-M4", value: "4" },
        { key: "C", text: t`$16$`, correct: true, value: "16" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C12-M1", value: "10" },
      ],
      solution: {
        steps: [
          t`$A \cap B = \{2, 3, 4, 5\}$, so $n(A \cap B) = 4$.`,
          t`The pairs in both are $(A \cap B) \times (A \cap B)$: both entries from $\{2, 3, 4, 5\}$, equal or not.`,
          t`Their number is $4^2 = 16$.`,
        ],
      },
    },
  ],
};
