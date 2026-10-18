import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`'If a number is divisible by $4$ then it is even' is true. Is 'If a number is even then it is divisible by $4$' true too?`,
    reveal: t`No: $6$ is even but not divisible by $4$. Swapping the parts gave the **converse**, which can fail. But 'If a number is not even then it is not divisible by $4$', the **contrapositive**, is always true.`,
  },
  explanation: {
    intuition: [
      t`In $p \to q$, $p$ is the **hypothesis** (the 'if' part) and $q$ the **conclusion** (the 'then' part).`,
      t`To **negate** a part is to say its opposite: 'it rains' becomes 'it does not rain'.`,
      t`Swap the two parts and you get the **converse**, $q \to p$.`,
      t`Negate both parts, keeping their places, and you get the **inverse**, $\sim p \to \sim q$.`,
      t`Swap and negate, and you get the **contrapositive**, $\sim q \to \sim p$.`,
      t`Only the contrapositive always has the same truth value as $p \to q$.`,
    ],
    formal: [
      {
        title: "The three forms",
        points: [
          t`Start from a conditional $p \to q$: 'if $p$ then $q$'.`,
          t`**Converse:** $q \to p$, the two parts swapped.`,
          t`**Inverse:** $\sim p \to \sim q$, each part negated and kept in its place.`,
          t`**Contrapositive:** $\sim q \to \sim p$, the parts swapped and negated.`,
          t`Find the 'if' part first: '$q$ if $p$' still means $p \to q$.`,
        ],
      },
      {
        title: "Only the contrapositive is equivalent",
        points: [
          t`Two statements are **logically equivalent** ($\equiv$) when they have the same truth value in every row.`,
          t`Row $p$ = T, $q$ = T: $p \to q$, converse, inverse and contrapositive are all T.`,
          t`Row T, F: $p \to q$ is F, the converse T, the inverse T, the contrapositive F.`,
          t`Row F, T: $p \to q$ is T, the converse F, the inverse F, the contrapositive T.`,
          t`Row F, F: all four are T.`,
          t`So $p \to q \equiv \sim q \to \sim p$, and the converse $\equiv$ the inverse.`,
        ],
      },
      {
        title: "Negating each part",
        points: [
          t`The inverse and the contrapositive negate **both** parts, not just the 'if' part.`,
          t`A part with a bracket is negated whole, by De Morgan's laws.`,
          t`$\sim(p \vee q) \equiv \sim p \wedge \sim q$: 'or' turns into 'and'.`,
          t`$\sim(p \wedge q) \equiv \sim p \vee \sim q$: 'and' turns into 'or'.`,
          t`So the inverse of $(p \wedge q) \to r$ is $(\sim p \vee \sim q) \to \sim r$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the converse, inverse and contrapositive of 'If a function is differentiable then it is continuous'. Which of them is equivalent to the statement?`,
      steps: [
        t`Let $p$: a function is differentiable, $q$: it is continuous. The statement is $p \to q$.`,
        t`Converse $q \to p$: if a function is continuous then it is differentiable.`,
        t`Inverse $\sim p \to \sim q$: if a function is not differentiable then it is not continuous.`,
        t`Contrapositive $\sim q \to \sim p$: if a function is not continuous then it is not differentiable.`,
        t`Only $\sim q \to \sim p$ has the same truth value as $p \to q$ in every row.`,
      ],
      answer: t`The contrapositive, 'If a function is not continuous then it is not differentiable', is the equivalent one.`,
    },
    visualSpec: t`Two cards, 'if' and 'then', that the student swaps and stamps with 'not', beside a truth-table strip showing which result still matches $p \to q$ in every row.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Swaps the names: takes the converse as $\sim p \to \sim q$ and the inverse as $q \to p$.`,
      remediation: t`The **converse** swaps the parts: $q \to p$. The **inverse** negates them in place: $\sim p \to \sim q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Writes the contrapositive as $\sim p \to \sim q$: negates both parts but forgets to swap them.`,
      remediation: t`The contrapositive swaps and negates: $\sim q \to \sim p$. $\sim p \to \sim q$ is the inverse, which is not equivalent to $p \to q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Negates only the 'if' part: takes the inverse as $\sim p \to q$ and the contrapositive as $\sim q \to p$.`,
      remediation: t`The inverse and the contrapositive negate **both** parts: $\sim p \to \sim q$ and $\sim q \to \sim p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Negates a bracket letter by letter but keeps its connective: $\sim(p \vee q)$ taken as $\sim p \vee \sim q$.`,
      remediation: t`Negating a bracket swaps its connective (De Morgan's laws): $\sim(p \vee q) \equiv \sim p \wedge \sim q$, and $\sim(p \wedge q) \equiv \sim p \vee \sim q$.`,
      fallback: { kind: "ext", topic: "De Morgan's laws for sets" },
    },
    {
      id: "C06-M5",
      mistake: t`Thinks the converse and the inverse say the same as $p \to q$, just like the contrapositive.`,
      remediation: t`$p \to q$ works one way only. Only the contrapositive $\sim q \to \sim p$ is equivalent to it; when $p$ is F and $q$ is T, the converse and inverse are F.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M6",
      mistake: t`In a statement written '$q$ if $p$', takes the clause written first as the 'if' part.`,
      remediation: t`The 'if' part is the clause that follows 'if', wherever it stands: '$q$ if $p$' means $p \to q$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C06-M1 shows only on converse or inverse items; C06-M2 only on contrapositive, equivalence or truth-value items; C06-M4 needs a bracket in a negated part; C06-M6 needs a statement written '$q$ if $p$'. Elsewhere their models raise.`,
    "Truth-value items cannot detect C06-M1: the converse and inverse are equivalent, so swapping their names changes no truth value.",
    t`Truth-value items need $p$, $q$ = T, F or F, T: in rows TT and FF all three forms are T, so C06-M2 and C06-M5 give the key.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc I (iii)" },
      stem: t`The inverse of the statement pattern $(p \vee q) \to (p \wedge q)$ is:`,
      verify: { kind: "value", inputs: { a: "Or(p, q)", b: "And(p, q)" }, params: { ask: "inverse" } },
      options: [
        { key: "A", text: t`$(p \wedge q) \to (p \vee q)$`, correct: false, misconceptionId: "C06-M1", value: "(TFFF, TTTF)" },
        { key: "B", text: t`$\sim(p \vee q) \to (p \wedge q)$`, correct: false, misconceptionId: "C06-M3", value: "(FFFT, TFFF)" },
        { key: "C", text: t`$(\sim p \vee \sim q) \to (\sim p \wedge \sim q)$`, correct: false, misconceptionId: "C06-M4", value: "(FTTT, FFFT)" },
        { key: "D", text: t`$(\sim p \wedge \sim q) \to (\sim p \vee \sim q)$`, correct: true, value: "(FFFT, FTTT)" },
      ],
      solution: {
        steps: [
          t`The inverse of $a \to b$ is $\sim a \to \sim b$: negate both parts, keep their places.`,
          t`By De Morgan's laws, $\sim(p \vee q) \equiv \sim p \wedge \sim q$ and $\sim(p \wedge q) \equiv \sim p \vee \sim q$.`,
          t`So the inverse is $(\sim p \wedge \sim q) \to (\sim p \vee \sim q)$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.4 (iv)" },
      stem: t`Which statement is logically equivalent to 'If voltage increases then current decreases'?`,
      verify: { kind: "value", inputs: { a: "p", b: "q" }, params: { ask: "equivalent" } },
      options: [
        { key: "A", text: t`If current does not decrease then voltage does not increase.`, correct: true, value: "(FTFT, FFTT)" },
        { key: "B", text: t`If voltage does not increase then current does not decrease.`, correct: false, misconceptionId: "C06-M2", value: "(FFTT, FTFT)" },
        { key: "C", text: t`If current does not decrease then voltage increases.`, correct: false, misconceptionId: "C06-M3", value: "(FTFT, TTFF)" },
        { key: "D", text: t`If current decreases then voltage increases.`, correct: false, misconceptionId: "C06-M5", value: "(TFTF, TTFF)" },
      ],
      solution: {
        steps: [
          t`Let $p$: voltage increases, $q$: current decreases. The statement is $p \to q$.`,
          t`Only its contrapositive $\sim q \to \sim p$ is logically equivalent to it.`,
          t`So: if current does not decrease then voltage does not increase.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.4 (i)" },
      stem: t`Take $x = 1$ and $y = -3$ in the statement 'If $x < y$ then $x^2 < y^2$'. What are the truth values of its converse, inverse and contrapositive, in that order?`,
      verify: { kind: "value", inputs: { a: "false", b: "true" }, params: { ask: "values" } },
      options: [
        { key: "A", text: t`Converse F, inverse F, contrapositive T`, correct: true, value: "(F, F, T)" },
        { key: "B", text: t`Converse F, inverse F, contrapositive F`, correct: false, misconceptionId: "C06-M2", value: "(F, F, F)" },
        { key: "C", text: t`Converse F, inverse T, contrapositive T`, correct: false, misconceptionId: "C06-M3", value: "(F, T, T)" },
        { key: "D", text: t`Converse T, inverse T, contrapositive T`, correct: false, misconceptionId: "C06-M5", value: "(T, T, T)" },
      ],
      solution: {
        steps: [
          t`$p$: $1 < -3$ is F. $q$: $1^2 < (-3)^2$, that is $1 < 9$, is T.`,
          t`Converse $q \to p$ is T → F, so F. Inverse $\sim p \to \sim q$ is T → F, so F.`,
          t`Contrapositive $\sim q \to \sim p$ is F → T, so T, the same as $p \to q$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`The contrapositive of $p \to (q \vee r)$ is:`,
      verify: { kind: "value", inputs: { a: "p", b: "Or(q, r)" }, params: { ask: "contrapositive" } },
      options: [
        { key: "A", text: t`$(\sim q \vee \sim r) \to \sim p$`, correct: false, misconceptionId: "C06-M4", value: "(FTTTFTTT, FFFFTTTT)" },
        { key: "B", text: t`$(\sim q \wedge \sim r) \to \sim p$`, correct: true, value: "(FFFTFFFT, FFFFTTTT)" },
        { key: "C", text: t`$\sim p \to (\sim q \wedge \sim r)$`, correct: false, misconceptionId: "C06-M2", value: "(FFFFTTTT, FFFTFFFT)" },
        { key: "D", text: t`$(\sim q \wedge \sim r) \to p$`, correct: false, misconceptionId: "C06-M3", value: "(FFFTFFFT, TTTTFFFF)" },
      ],
      solution: {
        steps: [
          t`The contrapositive of $a \to b$ is $\sim b \to \sim a$: swap the parts and negate both.`,
          t`Here $b$ is $q \vee r$, and $\sim(q \vee r) \equiv \sim q \wedge \sim r$.`,
          t`So the contrapositive is $(\sim q \wedge \sim r) \to \sim p$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.4 (ii)" },
      stem: t`The inverse of 'A family becomes literate if the woman in it is literate' is:`,
      verify: { kind: "value", inputs: { a: "p", b: "q" }, params: { ask: "inverse", order: "if-second" } },
      options: [
        { key: "A", text: t`If the woman in a family is not literate, then the family does not become literate.`, correct: true, value: "(FFTT, FTFT)" },
        { key: "B", text: t`If a family becomes literate, then the woman in it is literate.`, correct: false, misconceptionId: "C06-M1", value: "(TFTF, TTFF)" },
        { key: "C", text: t`If the woman in a family is not literate, then the family becomes literate.`, correct: false, misconceptionId: "C06-M3", value: "(FFTT, TFTF)" },
        { key: "D", text: t`If a family does not become literate, then the woman in it is not literate.`, correct: false, misconceptionId: "C06-M6", value: "(FTFT, FFTT)" },
      ],
      solution: {
        steps: [
          t`The 'if' clause is 'the woman in it is literate': call it $p$, and $q$: the family becomes literate.`,
          t`So the statement is $p \to q$, and its inverse is $\sim p \to \sim q$.`,
          t`If the woman in a family is not literate, then the family does not become literate.`,
        ],
      },
    },
  ],
};
