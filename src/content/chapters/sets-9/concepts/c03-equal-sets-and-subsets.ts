import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Asha writes the colours of our flag in the order saffron, white, green. Ravi writes them as green, white, saffron. **Have they written the same set?**`,
    reveal: t`Yes. Both lists have exactly the same three colours, and the order of listing does not change a set. Such sets are called **equal sets**. And the set holding only white is made of colours from the flag set, so it is a **subset** of it.`,
  },
  explanation: {
    intuition: [
      t`Two sets are **equal** when they have exactly the same elements.`,
      t`The order of listing does not matter: $\{1, 2, 3\} = \{3, 1, 2\}$.`,
      t`A set $A$ is a **subset** of a set $B$ when every element of $A$ is also an element of $B$.`,
      t`A cricket team picked from a class is a subset of the class: each player is in the class.`,
      t`Every set is a subset of itself, and the empty set is a subset of every set.`,
    ],
    formal: [
      {
        title: "Equal sets",
        points: [
          t`$A = B$ when every element of $A$ is in $B$ and every element of $B$ is in $A$.`,
          t`Order does not matter: $\{a, b\} = \{b, a\}$.`,
          t`For a set given by a rule, first list its elements, then compare.`,
          t`$\{x \mid 2x = 6\} = \{3\}$, and the set of odd primes less than $5$ is also $\{3\}$.`,
          t`So these two sets are equal, though their rules look different.`,
          t`The same number of elements is not enough: $\{1, 2\} \neq \{1, 5\}$, read 'is not equal to'.`,
        ],
      },
      {
        title: "Subset",
        points: [
          t`$A \subseteq B$, read '$A$ is a subset of $B$', means every element of $A$ is an element of $B$.`,
          t`$\{2, 4\} \subseteq \{1, 2, 3, 4\}$: both $2$ and $4$ are in the bigger set.`,
          t`$\not\subseteq$ is read 'is not a subset of'.`,
          t`One missing element is enough to break it: $\{2, 5\} \not\subseteq \{1, 2, 3, 4\}$, as $5$ is not there.`,
          t`The direction matters: $\{1, 2, 3, 4\} \not\subseteq \{2, 4\}$, as $1$ is not in $\{2, 4\}$.`,
        ],
      },
      {
        title: "Two subsets of every set",
        points: [
          t`Each element of $A$ is in $A$, so $A \subseteq A$: every set is a subset of itself.`,
          t`The **empty set** $\varnothing$ is the set with no elements.`,
          t`$\varnothing \subseteq A$ for every set $A$: $\varnothing$ has no element that could be missing from $A$.`,
          t`If $A \subseteq B$ and $B \subseteq A$, then $A = B$.`,
          t`So equal sets are subsets of each other: $\{1, 3\} \subseteq \{3, 1\}$.`,
        ],
      },
      {
        title: "Listing subsets",
        points: [
          t`To list subsets of $A$, choose some of its elements: none, some or all.`,
          t`For $A = \{p, q\}$, choosing none gives $\varnothing$.`,
          t`Choosing one element gives $\{p\}$ and $\{q\}$.`,
          t`Choosing both gives $\{p, q\}$, which is $A$ itself.`,
          t`So the subsets of $\{p, q\}$ are $\varnothing$, $\{p\}$, $\{q\}$ and $\{p, q\}$.`,
          t`A subset is a set, so write $\{p\}$ in braces, not just $p$.`,
        ],
      },
    ],
    worked: {
      prompt: t`$P$ is the set of residents of Pune, $H$ of Maharashtra, $I$ of Indore, $M$ of Madhya Pradesh and $B$ of India. Write the subset relations between these sets.`,
      steps: [
        t`Every resident of Pune lives in Maharashtra, so $P \subseteq H$.`,
        t`Every resident of Maharashtra lives in India, so $H \subseteq B$. Then each Pune resident is in India too: $P \subseteq B$.`,
        t`In the same way, $I \subseteq M$, $M \subseteq B$ and $I \subseteq B$.`,
        t`The direction matters: $H \not\subseteq P$, as many residents of Maharashtra live outside Pune.`,
      ],
      answer: t`$P \subseteq H$, $P \subseteq B$, $H \subseteq B$, $I \subseteq M$, $I \subseteq B$ and $M \subseteq B$.`,
    },
    visualSpec: t`Elements can be dragged in and out of two sets $A$ and $B$; the screen says whether $A \subseteq B$, $B \subseteq A$ and $A = B$, and lights up any element of $A$ missing from $B$.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinking the order of listing matters: two sets listed in different orders are not equal",
      remediation: t`A set is fixed by its elements, not by the order they are written in. $\{1, 2, 3\} = \{3, 1, 2\}$: check that each element of one set is in the other.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Reading $A \subseteq B$ the wrong way round: checking that every element of $B$ is in $A$`,
      remediation: t`$A \subseteq B$ means every element of the set on the left, $A$, is in the set on the right, $B$. Take each element of $A$ and look for it in $B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinking the empty set is not a subset, since it has no elements",
      remediation: t`$\varnothing \subseteq A$ for every set $A$: $\varnothing$ has no element that could be missing from $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinking a subset must be smaller, so a set is not a subset of itself or of a set equal to it",
      remediation: t`Every element of $A$ is in $A$, so $A \subseteq A$. Equal sets are subsets of each other: $A = B$ gives $A \subseteq B$ and $B \subseteq A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Thinking one shared element is enough for $A \subseteq B$`,
      remediation: t`$A \subseteq B$ needs every element of $A$ to be in $B$. One element of $A$ missing from $B$ makes $A \not\subseteq B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinking sets with the same number of elements are equal",
      remediation: t`Equal sets have exactly the same elements. $\{1, 2\}$ and $\{1, 5\}$ both have two elements, but $2$ is not in the second set, so they are not equal.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M1 shows only on sets listed in different orders (or rules a student would list in different orders, like the letters of TEAM and MEAT); it gives the key on sets listed alike.",
    t`C03-M3 shows only on statements about $\varnothing$, and C03-M4 only on $X \subseteq X$ or on equal sets. C03-M2, C03-M3 and C03-M5 all deny $\varnothing \subseteq X$, so a 'which is true' or 'which is false' item with a $\varnothing$ statement lists only one of them; a count item can list all three (Q2).`,
    t`C03-M5 agrees with C03-M2 on a false $Y \subseteq X$ statement where $X \subseteq Y$ (the sets overlap); give C03-M2 a $\not\subseteq$ statement on items that also list C03-M5.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.2 Q2" },
      stem: t`$A$ is the set of even prime numbers, $B = \{x \mid 7x - 1 = 13\}$, $C = \{x \mid x \in \mathbb{N},\ x < 3\}$ and $D = \{x \mid x \in \mathbb{N},\ x < 2\}$. Which statement is true?`,
      verify: { kind: "value", inputs: { A: "FiniteSet(2)", B: "FiniteSet(2)", C: "FiniteSet(1, 2)", D: "FiniteSet(1)" }, params: { ask: "true", stmts: ["eq A B", "eq A D", "sub C A", "notsub A B"] } },
      options: [
        { key: "A", text: t`$C \subseteq A$`, correct: false, misconceptionId: "C03-M2", value: "sub_C_A" },
        { key: "B", text: t`$A \not\subseteq B$`, correct: false, misconceptionId: "C03-M4", value: "notsub_A_B" },
        { key: "C", text: t`$A = B$`, correct: true, value: "eq_A_B" },
        { key: "D", text: t`$A = D$`, correct: false, misconceptionId: "C03-M6", value: "eq_A_D" },
      ],
      solution: {
        steps: [
          t`List each set. The only even prime is $2$, so $A = \{2\}$. For $B$: $7x = 14$, so $x = 2$ and $B = \{2\}$.`,
          t`$C = \{1, 2\}$ and $D = \{1\}$.`,
          t`$A$ and $B$ have exactly the same element, so $A = B$, and then $A \subseteq B$ as well.`,
          t`$A \neq D$, since $2 \neq 1$; and $C \not\subseteq A$, since $1 \notin A$. The true statement is $A = B$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.3 Q1(i)" },
      stem: t`$A = \{a, b, c, d, e\}$, $B = \{c, d, e, f\}$, $C = \{b, d\}$, $D = \{a, e\}$. How many of these statements are true? $C \subseteq B$, $A \subseteq D$, $D \subseteq B$, $D \subseteq A$, $B \subseteq A$, $C \subseteq A$, $\varnothing \subseteq B$`,
      verify: { kind: "value", inputs: { A: "Tuple(a, b, c, d, e)", B: "Tuple(c, d, e, f)", C: "Tuple(b, d)", D: "Tuple(a, e)", O: "EmptySet" }, params: { ask: "count", stmts: ["sub C B", "sub A D", "sub D B", "sub D A", "sub B A", "sub C A", "sub O B"] } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M2", value: "1" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C03-M5", value: "6" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C03-M3", value: "2" },
      ],
      solution: {
        steps: [
          t`Check each statement element by element. $C \subseteq B$: $b \notin B$, false. $A \subseteq D$: $b \notin D$, false.`,
          t`$D \subseteq B$: $a \notin B$, false. $D \subseteq A$: $a$ and $e$ are in $A$, true.`,
          t`$B \subseteq A$: $f \notin A$, false. $C \subseteq A$: $b$ and $d$ are in $A$, true.`,
          t`$\varnothing \subseteq B$ is true, as for every set. So $3$ statements are true.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.3 Q4" },
      stem: t`$P = \{1, 3, 2, 7\}$, $Q = \{7, 2, 3, 1\}$ and $R = \{1, 2, 3, 7, 9\}$. Which statement is **false**?`,
      verify: { kind: "value", inputs: { P: "Tuple(1, 3, 2, 7)", Q: "Tuple(7, 2, 3, 1)", R: "Tuple(1, 2, 3, 7, 9)", O: "EmptySet" }, params: { ask: "false", stmts: ["sub R P", "eq P Q", "sub Q P", "sub O R"] } },
      options: [
        { key: "A", text: t`$P = Q$`, correct: false, misconceptionId: "C03-M1", value: "eq_P_Q" },
        { key: "B", text: t`$Q \subseteq P$`, correct: false, misconceptionId: "C03-M4", value: "sub_Q_P" },
        { key: "C", text: t`$\varnothing \subseteq R$`, correct: false, misconceptionId: "C03-M3", value: "sub_O_R" },
        { key: "D", text: t`$R \subseteq P$`, correct: true, value: "sub_R_P" },
      ],
      solution: {
        steps: [
          t`$P$ and $Q$ have the same elements $1, 2, 3, 7$ in a different order, so $P = Q$ is true.`,
          t`Every element of $Q$ is in $P$, so $Q \subseteq P$ is true. $\varnothing \subseteq R$ is true for every set $R$.`,
          t`$9 \in R$ but $9 \notin P$, so $R \subseteq P$ is false.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Ex 1.2 Q1" },
      stem: t`$P$ is the set of letters of the word TEAM, $Q$ of MEAT, $R$ of MAT and $S$ of MOAT. Which statement is true?`,
      verify: { kind: "value", inputs: { P: "Tuple(t, e, a, m)", Q: "Tuple(m, e, a, t)", R: "Tuple(m, a, t)", S: "Tuple(m, o, a, t)", O: "EmptySet" }, params: { ask: "true", stmts: ["sub R Q", "neq P Q", "notsub O R", "eq P S"] } },
      options: [
        { key: "A", text: t`$\varnothing \not\subseteq R$`, correct: false, misconceptionId: "C03-M3", value: "notsub_O_R" },
        { key: "B", text: t`$P = S$`, correct: false, misconceptionId: "C03-M6", value: "eq_P_S" },
        { key: "C", text: t`$R \subseteq Q$`, correct: true, value: "sub_R_Q" },
        { key: "D", text: t`$P \neq Q$`, correct: false, misconceptionId: "C03-M1", value: "neq_P_Q" },
      ],
      solution: {
        steps: [
          t`List the letters: $P = \{T, E, A, M\}$, $Q = \{M, E, A, T\}$, $R = \{M, A, T\}$, $S = \{M, O, A, T\}$.`,
          t`$P$ and $Q$ have the same letters, so $P = Q$ and $P \neq Q$ is false. $O$ is in $S$ but not in $P$, so $P \neq S$.`,
          t`$\varnothing \subseteq R$, as for every set, so $\varnothing \not\subseteq R$ is false.`,
          t`$M$, $A$ and $T$ are all in $Q$, so $R \subseteq Q$ is true.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/sets-9/Prob Q8" },
      stem: t`$X$ is the set of all quadrilaterals, $T$ of all parallelograms, $Y$ of all rhombuses, $V$ of all rectangles and $S$ of all squares. How many of these statements are true? $S \subseteq Y$, $Y \subseteq V$, $T \subseteq Y$, $S \subseteq X$, $V \subseteq T$, $T \subseteq T$`,
      verify: { kind: "value", inputs: { S: "FiniteSet(sq)", Y: "FiniteSet(sq, rh)", V: "FiniteSet(sq, re)", T: "FiniteSet(sq, rh, re, pa)", X: "FiniteSet(sq, rh, re, pa, qu)" }, params: { ask: "count", stmts: ["sub S Y", "sub Y V", "sub T Y", "sub S X", "sub V T", "sub T T"] } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C03-M5", value: "6" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C03-M2", value: "2" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C03-M4", value: "3" },
      ],
      solution: {
        steps: [
          t`Every square is a rhombus and a quadrilateral, so $S \subseteq Y$ and $S \subseteq X$ are true.`,
          t`Every rectangle is a parallelogram, so $V \subseteq T$ is true; and $T \subseteq T$, as every set is a subset of itself.`,
          t`A rhombus with no right angle is not a rectangle, so $Y \subseteq V$ is false. A parallelogram with unequal sides is not a rhombus, so $T \subseteq Y$ is false.`,
          t`So $4$ statements are true.`,
        ],
      },
    },
  ],
};
