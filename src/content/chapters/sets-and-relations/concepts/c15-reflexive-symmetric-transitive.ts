import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c15: Concept = {
  id: "C15",
  status: "approved",
  hook: {
    prompt: t`$A = \{5, 7\}$ and $R = \{(5, 7), (7, 5)\}$. Every pair has its reverse, so $R$ is symmetric. **Is $R$ transitive?**`,
    reveal: t`No. Take $(5, 7)$ and then $(7, 5)$: the chain goes $5 \to 7 \to 5$, so transitivity needs $(5, 5)$ in $R$. It isn't there. A chain may come back to where it started, and it still has to close.`,
  },
  explanation: {
    intuition: [
      t`Recall: a relation $R$ on a set $A$ is a set of pairs $(a, b)$, with $a$ and $b$ in $A$.`,
      t`Draw each element of $A$ as a dot, and each pair $(a, b)$ as an arrow from $a$ to $b$.`,
      t`**Reflexive**: every element of $A$ has a **loop**, an arrow back to itself, for the pair $(a, a)$.`,
      t`**Symmetric**: every arrow has a **return arrow**, one going back the other way.`,
      t`**Transitive**: every two-step path, an arrow $a \to b$ then $b \to c$, has a direct arrow $a \to c$.`,
      t`Each test says **every**, so one missing loop, return arrow or direct arrow breaks the property.`,
    ],
    formal: [
      {
        title: "Reflexive relation",
        points: [
          t`$R$ is **reflexive** when $(a, a) \in R$ for **every** $a \in A$.`,
          t`Check each element of $A$, even one that appears in no pair of $R$.`,
          t`Other pairs may be in $R$ too: they do not spoil it.`,
          t`To make $R$ reflexive, add $(a, a)$ for each $a \in A$ that does not already have it.`,
          t`For example, on $A = \{1, 2, 3\}$, $R = \{(1, 1), (1, 2)\}$ needs $(2, 2)$ and $(3, 3)$ added.`,
        ],
      },
      {
        title: "Symmetric relation",
        points: [
          t`$R$ is **symmetric** when, whenever $(a, b) \in R$, also $(b, a) \in R$.`,
          t`The pair $(b, a)$ is the **reverse** of $(a, b)$: the same two entries, swapped.`,
          t`A pair $(a, a)$ is its own reverse, so it never breaks symmetry.`,
        ],
      },
      {
        title: "Transitive relation",
        points: [
          t`$R$ is **transitive** when $(a, b) \in R$ and $(b, c) \in R$ always give $(a, c) \in R$.`,
          t`Call $(a, b), (b, c)$ a **chain**; it **closes** when $(a, c)$ is in $R$ too.`,
          t`Here $c$ may equal $a$: a chain may come back to where it started.`,
          t`So $(a, b)$ and $(b, a)$ in $R$ need $(a, a)$ in $R$.`,
        ],
        figure: {
          alt: "Left: dots a, b and c, with arrows a to b and b to c, a chain, and the direct arrow a to c that closes it. Right: dots a and b with arrows a to b and b to a, a chain that comes back to a; it closes only with a loop at a, the pair (a, a).",
          axes: "none",
          view: { x: [-0.6, 6], y: [-0.9, 2.4] },
          elements: [
            { kind: "point", at: [0, 0], label: "a", labelAt: "s", tone: "muted", step: 1 },
            { kind: "point", at: [1.2, 1.8], label: "b", labelAt: "n", tone: "muted", step: 1 },
            { kind: "point", at: [2.4, 0], label: "c", labelAt: "s", tone: "muted", step: 1 },
            { kind: "vector", from: [0.194, 0.291], to: [1.006, 1.509], step: 1 },
            { kind: "vector", from: [1.394, 1.509], to: [2.206, 0.291], step: 1 },
            { kind: "vector", from: [0.35, 0], to: [2.05, 0], tone: "good", step: 1 },
            { kind: "point", at: [4.2, 0], label: "a", labelAt: "e", tone: "muted", step: 3 },
            { kind: "point", at: [5.4, 1.8], label: "b", labelAt: "n", tone: "muted", step: 3 },
            { kind: "vector", from: [4.578, 0.349], to: [5.222, 1.317], step: 3 },
            { kind: "vector", from: [5.022, 1.451], to: [4.378, 0.483], step: 3 },
            { kind: "circle", centre: [3.86, 0], r: 0.34, tone: "good", step: 4 },
            { kind: "label", at: [3.86, -0.34], label: "(a, a)", labelAt: "s", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Proving and disproving",
        points: [
          t`A **counterexample** is one pair or chain that fails the test: one is enough to break a property.`,
          t`One example that passes never proves it, since the test says every.`,
          t`If there is nothing to test, nothing breaks the rule, so the property holds.`,
          t`On $N$, $xy = x^2$ gives $y = x$, so $R$ has only pairs $(a, a)$.`,
          t`So this $R$ is symmetric and transitive: no pair or chain can fail either test.`,
        ],
      },
      {
        title: "A relation with none",
        points: [
          t`Take $R = \{(x, y) : 2x + y = 41\}$ on $N$.`,
          t`Not reflexive: $(1, 1) \notin R$, since $2 + 1 \ne 41$.`,
          t`Not symmetric: $(20, 1) \in R$, but $(1, 20) \notin R$.`,
          t`Not transitive: $(20, 1)$ and $(1, 39)$ are in $R$, but $(20, 39) \notin R$.`,
          t`So $R$ has none of the three, each broken by one counterexample.`,
        ],
      },
    ],
    worked: {
      prompt: t`$R = \{(a, b) :$ $a, b \in N,\ a \text{ divides } b\}$. Which of reflexive, symmetric, transitive does $R$ have?`,
      steps: [
        t`**Reflexive.** $a = 1 \times a$, so $a$ divides $a$ for every $a \in N$: $(a, a) \in R$. Reflexive.`,
        t`**Symmetric.** $2$ divides $6$, so $(2, 6) \in R$; $6$ does not divide $2$, so $(6, 2) \notin R$. One counterexample: not symmetric.`,
        t`**Transitive.** If $a$ divides $b$ and $b$ divides $c$, then $b = ka$ and $c = lb$ for some $k, l \in N$. So $c = (kl)a$ and $a$ divides $c$. Transitive.`,
      ],
      answer: t`$R$ is reflexive and transitive, but not symmetric.`,
    },
    figure: {
      alt: "Dots 1, 2 and 3 for A = {1, 2, 3}, with arrows 1 to 2 and 2 to 3 for two pairs of R. A loop is added at each dot, then the return arrows 2 to 1 and 3 to 2, then the direct arrow 1 to 3 for the path 1, 2, 3. The path 3, 2, 1 has no direct arrow 3 to 1, shown dashed: that one missing arrow breaks transitivity.",
      axes: "none",
      view: { x: [-0.9, 4.9], y: [-0.75, 3.3] },
      elements: [
        { kind: "label", at: [-0.8, 3], label: "A = {1, 2, 3}", labelAt: "e", tone: "muted", step: 1 },
        { kind: "point", at: [0, 0], label: "1", labelAt: "s", tone: "muted", step: 1 },
        { kind: "point", at: [2, 2.4], label: "2", labelAt: "w", tone: "muted", step: 1 },
        { kind: "point", at: [4, 0], label: "3", labelAt: "s", tone: "muted", step: 1 },
        { kind: "vector", from: [0.42, 0.301], to: [1.78, 1.933], step: 2 },
        { kind: "vector", from: [2.22, 1.933], to: [3.58, 0.301], step: 2 },
        { kind: "circle", centre: [-0.29, 0.17], r: 0.34, tone: "good", step: 3 },
        { kind: "circle", centre: [2.17, 2.69], r: 0.34, tone: "good", step: 3 },
        { kind: "circle", centre: [4.29, 0.17], r: 0.34, tone: "good", step: 3 },
        { kind: "vector", from: [1.58, 2.099], to: [0.22, 0.467], tone: "good", step: 4 },
        { kind: "vector", from: [3.78, 0.467], to: [2.42, 2.099], tone: "good", step: 4 },
        { kind: "vector", from: [0.45, -0.13], to: [3.55, -0.13], tone: "good", step: 5 },
        { kind: "label", at: [2, -0.13], label: "direct 1 → 3", labelAt: "s", tone: "good", step: 5 },
        { kind: "segment", from: [3.55, 0.13], to: [0.45, 0.13], dashed: true, tone: "bad", step: 6 },
        { kind: "label", at: [2, 0.13], label: "no 3 → 1", labelAt: "n", tone: "bad", step: 6 },
      ],
    },
    visualSpec: t`A dot for each element of $A$ and an arrow for each pair of $R$; tap reflexive, symmetric or transitive to see the loops, return arrows or direct arrows it needs, with the missing ones flashing.`,
  },
  misconceptions: [
    {
      id: "C15-M1",
      mistake: t`Checks $(a, a)$ only for the elements that appear in the pairs of $R$, skipping elements of $A$ that appear in none`,
      remediation: t`Reflexive means $(a, a) \in R$ for **every** $a$ in $A$, including an element that appears in no pair. Go through $A$ one element at a time and look for its $(a, a)$.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C15-M2",
      mistake: t`Skips the chains that come back to the start, so $(a, b), (b, a)$ is never checked for $(a, a)$`,
      remediation: t`In the transitive test $c$ may equal $a$: if $(a, b)$ and $(b, a)$ are in $R$, then $(a, a)$ must be in $R$. Check these chains along with the rest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M3",
      mistake: t`Takes one example as enough: one $(a, a)$ makes $R$ reflexive, one pair with its reverse makes it symmetric, one chain that closes makes it transitive; and with no example to show, says the property fails`,
      remediation: "Each property says **every**: one example never proves it, and one counterexample breaks it. When there is no pair or chain to test, nothing breaks the rule, so the property holds.",
      fallback: { kind: "ext", topic: "for every vs for some" },
    },
    {
      id: "C15-M4",
      mistake: t`Mixes up the names: tests 'each $(a, b)$ has its $(b, a)$' for reflexive, and 'each $a$ has $(a, a)$' for symmetric`,
      remediation: t`Reflexive is about loops: each element related to itself, $(a, a) \in R$. Symmetric is about reversing: $(a, b) \in R$ needs $(b, a) \in R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C15-M5",
      mistake: t`Thinks a reflexive relation may hold only the pairs $(a, a)$, so any other pair in $R$ spoils it`,
      remediation: t`Reflexive asks only that every $(a, a)$ be in $R$; other pairs may be there as well. A relation with nothing but the pairs $(a, a)$ is the identity relation, one particular reflexive relation.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C15-M1 shows only when some element of A appears in no pair of R; on a rule over N or Z every element appears, so it is not modelled there.",
    "C15-M1 and C15-M2 can't share a classification item: M2 needs a returning chain whose (a, a) is missing, which already makes M1's reflexive check fail.",
    "C15-M2 shows only when a chain (a, b), (b, a) fails and every other chain closes. C15-M4 shows only when exactly one of reflexive and symmetric holds. C15-M3 gives the key on clean rules such as a divides b on N.",
    "C15-M5 shows only when R is reflexive but holds some pair (a, b) with a != b.",
  ],
  items: [
    {
      id: "C15-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q9" },
      stem: t`$A = \{1, 2, 3\}$ and $R = \{(1, 1), (2, 3), (3, 2)\}$ is a relation on $A$. Then $R$ is:`,
      verify: { kind: "value", inputs: {  }, params: { A: ["1", "2", "3"], R: ["1,1", "2,3", "3,2"], ask: "classify" } },
      options: [
        { key: "A", text: t`reflexive and symmetric, not transitive`, correct: false, misconceptionId: "C15-M3", value: "refl_sym" },
        { key: "B", text: t`reflexive only`, correct: false, misconceptionId: "C15-M4", value: "refl" },
        { key: "C", text: t`symmetric only`, correct: true, value: "sym" },
        { key: "D", text: t`symmetric and transitive, not reflexive`, correct: false, misconceptionId: "C15-M2", value: "sym_trans" },
      ],
      solution: {
        steps: [
          t`**Reflexive?** $2, 3 \in A$ but $(2, 2), (3, 3) \notin R$. Not reflexive.`,
          t`**Symmetric?** $(1, 1)$ is its own reverse, and $(2, 3), (3, 2)$ are both in $R$. Symmetric.`,
          t`**Transitive?** The chain $(2, 3), (3, 2)$ needs $(2, 2)$, which is not in $R$. Not transitive. So $R$ is symmetric only.`,
        ],
      },
    },
    {
      id: "C15-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2.5 SolvedEx.4" },
      stem: t`$A = \{2, 4, 6, 8\}$ and $R = \{(2, 2), (4, 4), (6, 6)\}$ is a relation on $A$. Then $R$ is:`,
      verify: { kind: "value", inputs: {  }, params: { A: ["2", "4", "6", "8"], R: ["2,2", "4,4", "6,6"], ask: "classify" } },
      options: [
        { key: "A", text: t`reflexive, symmetric and transitive`, correct: false, misconceptionId: "C15-M1", value: "refl_sym_trans" },
        { key: "B", text: t`reflexive only`, correct: false, misconceptionId: "C15-M3", value: "refl" },
        { key: "C", text: t`reflexive and transitive, not symmetric`, correct: false, misconceptionId: "C15-M4", value: "refl_trans" },
        { key: "D", text: t`symmetric and transitive, not reflexive`, correct: true, value: "sym_trans" },
      ],
      solution: {
        steps: [
          t`**Reflexive?** $8 \in A$ but $(8, 8) \notin R$. Not reflexive, even though $8$ appears in no pair.`,
          t`**Symmetric?** Each pair $(a, a)$ is its own reverse. Symmetric.`,
          t`**Transitive?** The only chains are $(a, a), (a, a)$, and they need $(a, a)$, which is in $R$. Transitive. So $R$ is symmetric and transitive, not reflexive.`,
        ],
      },
    },
    {
      id: "C15-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q6" },
      stem: t`$R = \{(x, y) : x, y \in N,\ x + y = 10\}$ is a relation on $N$. Then $R$ is:`,
      verify: { kind: "value", inputs: {  }, params: { rule: "a + b - 10", dom: "N", ask: "classify" } },
      options: [
        { key: "A", text: t`reflexive and symmetric, not transitive`, correct: false, misconceptionId: "C15-M3", value: "refl_sym" },
        { key: "B", text: t`reflexive only`, correct: false, misconceptionId: "C15-M4", value: "refl" },
        { key: "C", text: t`symmetric only`, correct: true, value: "sym" },
        { key: "D", text: t`symmetric and transitive, not reflexive`, correct: false, misconceptionId: "C15-M2", value: "sym_trans" },
      ],
      solution: {
        steps: [
          t`**Reflexive?** $(a, a) \in R$ needs $2a = 10$, true only for $a = 5$. $(1, 1) \notin R$, so not reflexive.`,
          t`**Symmetric?** If $x + y = 10$ then $y + x = 10$. Symmetric.`,
          t`**Transitive?** $(1, 9), (9, 1) \in R$, but $(1, 1) \notin R$ since $1 + 1 \ne 10$. Not transitive. So $R$ is symmetric only.`,
        ],
      },
    },
    {
      id: "C15-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2.5 SolvedEx.1" },
      stem: t`$A = \{1, 2, 3, 4\}$ and $R = \{(1, 1), (1, 3), (2, 1), (3, 1)\}$ is a relation on $A$. What is the least number of ordered pairs that must be added to $R$ to make it reflexive?`,
      verify: { kind: "value", inputs: {  }, params: { A: ["1", "2", "3", "4"], R: ["1,1", "1,3", "2,1", "3,1"], ask: "refl_count" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C15-M3", value: "0" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C15-M4", value: "1" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C15-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`Reflexive needs $(1, 1), (2, 2), (3, 3), (4, 4)$: one for each element of $A$, including $4$, which appears in no pair.`,
          t`Only $(1, 1)$ is already in $R$. Add $(2, 2), (3, 3), (4, 4)$: $3$ pairs.`,
        ],
      },
    },
    {
      id: "C15-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q9" },
      stem: t`$A = \{1, 2, 3\}$ and $R = \{(1, 1), (1, 3), (2, 2), (3, 3)\}$ is a relation on $A$. Then $R$ is:`,
      verify: { kind: "value", inputs: {  }, params: { A: ["1", "2", "3"], R: ["1,1", "1,3", "2,2", "3,3"], ask: "classify" } },
      options: [
        { key: "A", text: t`symmetric and transitive, not reflexive`, correct: false, misconceptionId: "C15-M4", value: "sym_trans" },
        { key: "B", text: t`transitive only`, correct: false, misconceptionId: "C15-M5", value: "trans" },
        { key: "C", text: t`reflexive and transitive, not symmetric`, correct: true, value: "refl_trans" },
        { key: "D", text: t`reflexive only`, correct: false, misconceptionId: "C15-M3", value: "refl" },
      ],
      solution: {
        steps: [
          t`**Reflexive?** $(1, 1), (2, 2), (3, 3)$ are all in $R$. Reflexive; the extra pair $(1, 3)$ does not change that.`,
          t`**Symmetric?** $(1, 3) \in R$ but $(3, 1) \notin R$. Not symmetric.`,
          t`**Transitive?** Every chain uses a pair $(a, a)$, such as $(1, 1), (1, 3)$ or $(1, 3), (3, 3)$, and gives back $(1, 3)$ or $(a, a)$, which are in $R$. Transitive. So $R$ is reflexive and transitive, not symmetric.`,
        ],
      },
    },
    {
      id: "C15-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q9(a)" },
      stem: t`$A = \{1, 2, 3, 4, 5\}$ and $R = \{(1, 2), (2, 2), (2, 3), (3, 2), (4, 1)\}$ is a relation on $A$. What is the least number of ordered pairs that must be added to $R$ to make it reflexive?`,
      verify: { kind: "value", inputs: {  }, params: { A: ["1", "2", "3", "4", "5"], R: ["1,2", "2,2", "2,3", "3,2", "4,1"], ask: "refl_count" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C15-M1", value: "3" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C15-M3", value: "0" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C15-M4", value: "2" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`Reflexive needs $(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)$: one for each element of $A$, including $5$, which appears in no pair.`,
          t`Only $(2, 2)$ is already in $R$. Add $(1, 1), (3, 3), (4, 4), (5, 5)$: $4$ pairs.`,
        ],
      },
    },
  ],
};
