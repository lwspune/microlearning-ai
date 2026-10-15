import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`Let $A = \{2, 3, 5\}$ and $B = \{4, 6, 7\}$. Pair $x \in A$ with $y \in B$ when $x$ is a factor of $y$. **Is $5$ in the domain? Is $7$ in the range?**`,
    reveal: t`Neither. The pairs are $(2, 4)$, $(2, 6)$ and $(3, 6)$. No pair starts with $5$, since $5$ divides nothing in $B$, so the domain is $\{2, 3\}$. No pair ends in $7$, so the range is $\{4, 6\}$. $7$ is still in the co-domain, which is all of $B$.`,
  },
  explanation: {
    intuition: [
      t`A **relation** pairs elements of a set $A$ with elements of a set $B$, by a rule.`,
      t`Take $A = \{2, 3, 5\}$ and $B = \{4, 6, 7\}$, and pair $x$ with $y$ when $x$ is a factor of $y$.`,
      t`Each pair $(x, y)$ the rule allows is drawn as an arrow $x \to y$: $2 \to 4$, $2 \to 6$, $3 \to 6$.`,
      t`The **domain** is the part of $A$ that sends at least one arrow: here $\{2, 3\}$, as $5$ sends none.`,
      t`The **range** is the part of $B$ that receives at least one arrow: here $\{4, 6\}$.`,
      t`The **co-domain** is all of $B$, whether an arrow lands there or not, so $7$ is in it.`,
    ],
    figure: {
      alt: "An arrow diagram. An oval A holds 2, 3 and 5; an oval B holds 4, 6 and 7. Arrows run from 2 to 4, from 2 to 6 and from 3 to 6, since x is a factor of y. A dashed loop round 2 and 3 marks the domain; 5 sends no arrow. A dashed loop round 4 and 6 marks the range; 7 receives no arrow but is still in B, the co-domain.",
      axes: "none",
      view: { x: [-3, 8], y: [-2.9, 2.8] },
      elements: [
        { kind: "ellipse", centre: [0, 0], rx: 1.1, ry: 2, tone: "muted", step: 1 },
        { kind: "label", at: [0, 2], label: "A", labelAt: "n", tone: "muted", step: 1 },
        { kind: "ellipse", centre: [5, 0], rx: 1.1, ry: 2, tone: "muted", step: 1 },
        { kind: "label", at: [5, 2], label: "B", labelAt: "n", tone: "muted", step: 1 },
        { kind: "point", at: [0, 1.2], label: "2", labelAt: "w", step: 2 },
        { kind: "point", at: [0, 0], label: "3", labelAt: "w", step: 2 },
        { kind: "point", at: [0, -1.2], label: "5", labelAt: "w", step: 2 },
        { kind: "point", at: [5, 1.2], label: "4", labelAt: "e", step: 2 },
        { kind: "point", at: [5, 0], label: "6", labelAt: "e", step: 2 },
        { kind: "point", at: [5, -1.2], label: "7", labelAt: "e", step: 2 },
        { kind: "vector", from: [0.25, 1.2], to: [4.75, 1.2], step: 3 },
        { kind: "vector", from: [0.25, 1.14], to: [4.75, 0.06], step: 3 },
        { kind: "vector", from: [0.25, 0], to: [4.75, 0], step: 3 },
        { kind: "ellipse", centre: [0, 0.6], rx: 0.85, ry: 1.15, dashed: true, tone: "good", step: 4 },
        { kind: "label", at: [-1.1, 0.6], label: "domain", labelAt: "w", tone: "good", step: 4 },
        { kind: "ellipse", centre: [5, 0.6], rx: 0.85, ry: 1.15, dashed: true, tone: "good", step: 5 },
        { kind: "label", at: [6.1, 0.6], label: "range", labelAt: "e", tone: "good", step: 5 },
        { kind: "label", at: [5, -2], label: "co-domain = B", labelAt: "s", step: 6 },
      ],
    },
    formal: [
      {
        title: "Relation from A to B",
        points: [
          t`Recall: $A \times B$ is the set of all ordered pairs $(x, y)$ with $x \in A$ and $y \in B$.`,
          t`A **relation** $R$ from $A$ to $B$ is a subset of $A \times B$.`,
          t`It keeps only the pairs its rule allows, usually a small part of $A \times B$.`,
          t`If $(x, y) \in R$, we write $x\,R\,y$ and say $x$ is related to $y$.`,
          t`A relation from $A$ to $A$ itself is called a **relation on $A$**.`,
        ],
      },
      {
        title: "Listing a relation from its rule",
        points: [
          t`Take each $x \in A$ in turn.`,
          t`Test every $y \in B$ against the rule.`,
          t`Keep the pairs $(x, y)$ that pass, and drop the rest.`,
          t`The first entry always comes from $A$, the second from $B$.`,
        ],
      },
      {
        title: "Domain, co-domain and range",
        points: [
          t`The **domain** of $R$ is the set of first entries, $\{x : (x, y) \in R\}$.`,
          t`So the domain is a subset of $A$.`,
          t`The **co-domain** of $R$ is the whole set $B$.`,
          t`The **range** of $R$ is the set of second entries, $\{y : (x, y) \in R\}$.`,
          t`So the range is a subset of the co-domain.`,
        ],
      },
      {
        title: "Read the rule exactly",
        points: [
          t`$<$ and $>$ leave out equality: $2 < 2$ is false.`,
          t`$N = \{1, 2, 3, \ldots\}$, the set of natural numbers, has no $0$.`,
          t`So over $N$, stop listing when an entry would reach $0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Let $A = \{1, 2, 3, 4, 5, 6\}$ and $R = \{(x, y) : y = x + 1\}$, a relation on $A$. List $R$, and write its domain, co-domain and range.`,
      steps: [
        t`For each $x \in A$, $y = x + 1$ must also be in $A$. That works for $x = 1$ to $5$; for $x = 6$, $y = 7 \notin A$.`,
        t`$R = \{(1, 2), (2, 3), (3, 4),$ $(4, 5), (5, 6)\}$.`,
        t`Domain: the first entries, $\{1, 2, 3, 4, 5\}$. $6$ is in $A$ but starts no pair.`,
        t`Co-domain: the whole set $A = \{1, 2, 3, 4, 5, 6\}$. Range: the second entries, $\{2, 3, 4, 5, 6\}$. $1$ is in the co-domain but not in the range.`,
      ],
      answer: t`$R = \{(1, 2), (2, 3), (3, 4),$ $(4, 5), (5, 6)\}$; domain $\{1, 2, 3, 4, 5\}$, co-domain $\{1, 2, 3, 4, 5, 6\}$, range $\{2, 3, 4, 5, 6\}$.`,
    },
    visualSpec: t`Two ovals, $A$ and $B$: draw or delete arrows between their elements, and the elements of $A$ that send an arrow light up as the domain, the elements of $B$ that receive one light up as the range, while all of $B$ stays outlined as the co-domain.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Takes the whole sets: R is all of A × B, the domain is all of A and the range is all of B (the co-domain)",
      remediation: t`$R$ keeps only the pairs of $A \times B$ that satisfy the rule. Its domain is just the first entries of those pairs and its range just the second entries; only the co-domain is the whole of $B$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C13-M2",
      mistake: "Swaps the two entries: writes the pairs as (y, x), so the domain and the range trade places",
      remediation: t`In $(x, y) \in R$ the first entry comes from $A$ and the second from $B$. The domain is the set of first entries and the range the set of second entries.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C13-M3",
      mistake: "Reads a strict inequality as non-strict, so the boundary values get in",
      remediation: t`$<$ and $>$ leave out equality: $2 < 2$ is false. Test the boundary value on its own before you keep a pair.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M4",
      mistake: "Counts 0 as a natural number, so pairs with a 0 entry join R",
      remediation: t`$N = \{1, 2, 3, \ldots\}$ starts at $1$, so a pair with a $0$ entry is not in $N \times N$. Stop listing when an entry would reach $0$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C13-M3 shows only on a rule with a strict inequality, and C13-M4 only on a relation over N: draw items of that kind to diagnose them.",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.2 Q8(iv)" },
      stem: t`$R = \{(x, y) : y > x + 1,\ x = 1, 2 \text{ and } y = 2, 4, 6\}$. Written in roster form, $R$ is:`,
      verify: { kind: "value", inputs: { A: "{1, 2}", B: "{2, 4, 6}" }, params: { rule: "y > x + 1", ask: "R" } },
      options: [
        { key: "A", text: t`$\{(1, 4), (1, 6), (2, 4), (2, 6)\}$`, correct: true, value: "{(1, 4), (1, 6), (2, 4), (2, 6)}" },
        { key: "B", text: t`$\{(1, 2), (1, 4), (1, 6), (2, 2), (2, 4), (2, 6)\}$`, correct: false, misconceptionId: "C13-M1", value: "{(1, 2), (1, 4), (1, 6), (2, 2), (2, 4), (2, 6)}" },
        { key: "C", text: t`$\{(4, 1), (4, 2), (6, 1), (6, 2)\}$`, correct: false, misconceptionId: "C13-M2", value: "{(4, 1), (4, 2), (6, 1), (6, 2)}" },
        { key: "D", text: t`$\{(1, 2), (1, 4), (1, 6), (2, 4), (2, 6)\}$`, correct: false, misconceptionId: "C13-M3", value: "{(1, 2), (1, 4), (1, 6), (2, 4), (2, 6)}" },
      ],
      solution: {
        steps: [
          t`$x = 1$: $y > 2$, so $y = 4$ or $6$. $y = 2$ fails, since $2 > 2$ is false.`,
          t`$x = 2$: $y > 3$, so $y = 4$ or $6$.`,
          t`$R = \{(1, 4), (1, 6), (2, 4), (2, 6)\}$, four of the six pairs in $A \times B$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2 SolvedEx.8" },
      stem: t`Let $A = \{1, 2, 3, 4, 5\}$ and $B = \{2, 5, 8\}$. $R$ is the relation from $A$ to $B$ with $(x, y) \in R$ if $2x < y$. The domain of $R$ is:`,
      verify: { kind: "value", inputs: { A: "{1, 2, 3, 4, 5}", B: "{2, 5, 8}" }, params: { rule: "2*x < y", ask: "domain" } },
      options: [
        { key: "A", text: t`$\{1, 2, 3\}$`, correct: true, value: "{1, 2, 3}" },
        { key: "B", text: t`$\{1, 2, 3, 4, 5\}$`, correct: false, misconceptionId: "C13-M1", value: "{1, 2, 3, 4, 5}" },
        { key: "C", text: t`$\{5, 8\}$`, correct: false, misconceptionId: "C13-M2", value: "{5, 8}" },
        { key: "D", text: t`$\{1, 2, 3, 4\}$`, correct: false, misconceptionId: "C13-M3", value: "{1, 2, 3, 4}" },
      ],
      solution: {
        steps: [
          t`$x = 1$: $2 < y$ gives $y = 5, 8$. $x = 2$: $4 < y$ gives $y = 5, 8$. $x = 3$: $6 < y$ gives $y = 8$.`,
          t`$x = 4$: $8 < y$ fails even for $y = 8$, since $8 < 8$ is false. $x = 5$: $10 < y$ fails.`,
          t`$R = \{(1, 5), (1, 8), (2, 5), (2, 8), (3, 8)\}$, so the domain is $\{1, 2, 3\}$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2.4 SolvedEx.1" },
      stem: t`Let $A = \{2, 3, 4\}$ and $B = \{1, 2, 5, 6\}$. $R$ is the relation from $A$ to $B$ with $(x, y) \in R$ if $x < y$. The range of $R$ is:`,
      verify: { kind: "value", inputs: { A: "{2, 3, 4}", B: "{1, 2, 5, 6}" }, params: { rule: "x < y", ask: "range" } },
      options: [
        { key: "A", text: t`$\{2, 5, 6\}$`, correct: false, misconceptionId: "C13-M3", value: "{2, 5, 6}" },
        { key: "B", text: t`$\{5, 6\}$`, correct: true, value: "{5, 6}" },
        { key: "C", text: t`$\{1, 2, 5, 6\}$`, correct: false, misconceptionId: "C13-M1", value: "{1, 2, 5, 6}" },
        { key: "D", text: t`$\{2, 3, 4\}$`, correct: false, misconceptionId: "C13-M2", value: "{2, 3, 4}" },
      ],
      solution: {
        steps: [
          t`Every $x$ in $A$ is at least $2$, so $y = 1$ never works, and $y = 2$ fails too: $2 < 2$ is false.`,
          t`$y = 5$ and $y = 6$ beat every $x$: $R = \{(2, 5), (2, 6), (3, 5), (3, 6), (4, 5), (4, 6)\}$.`,
          t`The range is the set of second entries, $\{5, 6\}$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.2 Q8(vii)" },
      stem: t`$R = \{(a, b) : a, b \in N,\ a + 2b = 8\}$. The domain of $R$ is:`,
      verify: { kind: "value", inputs: { A: "Naturals", B: "Naturals" }, params: { rule: "Eq(x + 2*y, 8)", ask: "domain" } },
      options: [
        { key: "A", text: t`$N$`, correct: false, misconceptionId: "C13-M1", value: "Naturals" },
        { key: "B", text: t`$\{1, 2, 3\}$`, correct: false, misconceptionId: "C13-M2", value: "{1, 2, 3}" },
        { key: "C", text: t`$\{0, 2, 4, 6, 8\}$`, correct: false, misconceptionId: "C13-M4", value: "{0, 2, 4, 6, 8}" },
        { key: "D", text: t`$\{2, 4, 6\}$`, correct: true, value: "{2, 4, 6}" },
      ],
      solution: {
        steps: [
          t`$a = 8 - 2b$. $b = 1$: $a = 6$; $b = 2$: $a = 4$; $b = 3$: $a = 2$. $b = 4$ gives $a = 0 \notin N$.`,
          t`$R = \{(6, 1), (4, 2), (2, 3)\}$.`,
          t`The domain is the set of first entries, $\{2, 4, 6\}$.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2.5 SolvedEx.2" },
      stem: t`$R = \{(a, b) : a, b \in N,\ 2a + b = 10\}$ is a relation on $N$. The range of $R$ is:`,
      verify: { kind: "value", inputs: { A: "Naturals", B: "Naturals" }, params: { rule: "Eq(2*x + y, 10)", ask: "range" } },
      options: [
        { key: "A", text: t`$\{2, 4, 6, 8\}$`, correct: true, value: "{2, 4, 6, 8}" },
        { key: "B", text: t`$N$`, correct: false, misconceptionId: "C13-M1", value: "Naturals" },
        { key: "C", text: t`$\{1, 2, 3, 4\}$`, correct: false, misconceptionId: "C13-M2", value: "{1, 2, 3, 4}" },
        { key: "D", text: t`$\{0, 2, 4, 6, 8, 10\}$`, correct: false, misconceptionId: "C13-M4", value: "{0, 2, 4, 6, 8, 10}" },
      ],
      solution: {
        steps: [
          t`$b = 10 - 2a$. $a = 1, 2, 3, 4$ give $b = 8, 6, 4, 2$. $a = 5$ gives $b = 0 \notin N$.`,
          t`$R = \{(1, 8), (2, 6), (3, 4), (4, 2)\}$.`,
          t`The range is the set of second entries, $\{2, 4, 6, 8\}$. The co-domain is $N$.`,
        ],
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.2 Q8(viii)" },
      stem: t`$R = \{(a, b) : b = a + 2,\ a \in Z,\ 0 < a < 5\}$, a relation on $Z$. The range of $R$ is:`,
      verify: { kind: "value", inputs: { A: "Integers", B: "Integers" }, params: { rule: "(0 < x) & (x < 5) & Eq(y, x + 2)", ask: "range" } },
      options: [
        { key: "A", text: t`$Z$`, correct: false, misconceptionId: "C13-M1", value: "Integers" },
        { key: "B", text: t`$\{1, 2, 3, 4\}$`, correct: false, misconceptionId: "C13-M2", value: "{1, 2, 3, 4}" },
        { key: "C", text: t`$\{2, 3, 4, 5, 6, 7\}$`, correct: false, misconceptionId: "C13-M3", value: "{2, 3, 4, 5, 6, 7}" },
        { key: "D", text: t`$\{3, 4, 5, 6\}$`, correct: true, value: "{3, 4, 5, 6}" },
      ],
      solution: {
        steps: [
          t`$a \in Z$ with $0 < a < 5$: $a = 1, 2, 3, 4$. Neither $0$ nor $5$ is allowed.`,
          t`$b = a + 2$: $R = \{(1, 3), (2, 4), (3, 5), (4, 6)\}$.`,
          t`The range is the set of second entries, $\{3, 4, 5, 6\}$.`,
        ],
      },
    },
  ],
};
