import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Statement A: **If it rains, I carry an umbrella.** Statement B: **It does not rain, or I carry an umbrella.** Can one of them be true while the other is false?`,
    reveal: t`No. A is false only when it rains and I have no umbrella. B is false only when both its parts are false: it rains and I have no umbrella. They fail in exactly the same case, so they say the same thing: $p \to q \equiv \sim p \vee q$.`,
  },
  explanation: {
    intuition: [
      t`Two statements are **logically equivalent** when they are true in exactly the same cases.`,
      t`We write $A \equiv B$, read as $A$ is logically equivalent to $B$.`,
      t`To test it, draw one truth table for both: their last columns must match in **every** row.`,
      t`Some equivalences hold for every $p$, $q$, $r$; we call them **laws**.`,
      t`A law lets you swap a statement for a simpler one, as an identity does in algebra.`,
      t`The key laws: the conditional law, De Morgan's laws, the distributive laws and absorption.`,
    ],
    formal: [
      {
        title: "Same last column means equivalent",
        points: [
          t`Compare $p \to q$ with $\sim p \vee q$, row by row.`,
          t`$p$ T, $q$ T: both are T.`,
          t`$p$ T, $q$ F: both are F.`,
          t`$p$ F, $q$ T: both are T; and $p$ F, $q$ F: both are T.`,
          t`The last columns match in every row, so $p \to q \equiv \sim p \vee q$.`,
          t`This is the **conditional law**: use it to replace every $\to$ before using the other laws.`,
        ],
      },
      {
        title: "One matching row is not enough",
        points: [
          t`$p \to q$ is not $p \wedge q$, though both are T when $p$ and $q$ are T.`,
          t`When $p$ is F and $q$ is T, $p \to q$ is T but $p \wedge q$ is F.`,
          t`$p \to q$ is not $p \vee \sim q$ either: at $p$ F, $q$ T it is T, but $p \vee \sim q$ is F.`,
          t`The negation goes on $p$, the part before the arrow: $\sim p \vee q$.`,
          t`One row that differs is enough to show two statements are **not** equivalent.`,
        ],
      },
      {
        title: "De Morgan's laws",
        points: [
          t`$\sim(p \wedge q) \equiv \sim p \vee \sim q$.`,
          t`$\sim(p \vee q) \equiv \sim p \wedge \sim q$.`,
          t`The $\sim$ goes onto each part, **and** $\wedge$ and $\vee$ swap.`,
          t`Why: $\sim(p \wedge q)$ is F only when $p$, $q$ are both T, and so is $\sim p \vee \sim q$.`,
          t`Keeping the $\wedge$ is wrong: at $p$ T, $q$ F, $\sim(p \wedge q)$ is T but $\sim p \wedge \sim q$ is F.`,
          t`Two $\sim$ cancel: $\sim(\sim p) \equiv p$, so $\sim(\sim p \vee q) \equiv p \wedge \sim q$.`,
        ],
      },
      {
        title: "Distributive laws",
        points: [
          t`$p \wedge (q \vee r)$ $\equiv (p \wedge q) \vee (p \wedge r)$.`,
          t`$p \vee (q \wedge r)$ $\equiv (p \vee q) \wedge (p \vee r)$.`,
          t`The outside part joins **each** term in the bracket, as in $a(b + c) = ab + ac$.`,
          t`The outside connective goes inside each new bracket; the bracket's connective goes between them.`,
          t`So $p \wedge (q \vee r)$ is not $(p \wedge q) \vee r$: $p$ must join $r$ too.`,
          t`Nor is it $(p \vee q) \wedge (p \vee r)$: that is the other law, which starts from $p \vee (q \wedge r)$.`,
        ],
      },
      {
        title: "Complement, identity and absorption",
        points: [
          t`Let $t$ be a statement that is always true and $c$ one that is always false.`,
          t`**Complement laws:** $p \vee \sim p \equiv t$ and $p \wedge \sim p \equiv c$.`,
          t`**Identity laws:** $p \wedge t \equiv p$, $p \vee c \equiv p$, $p \vee t \equiv t$, $p \wedge c \equiv c$.`,
          t`**Absorption:** $p \vee (p \wedge q) \equiv p$ and $p \wedge (p \vee q) \equiv p$.`,
          t`Why: in $p \vee (p \wedge q)$, if $p$ is T the whole is T; if $p$ is F, both parts are F.`,
          t`The bracket is swallowed by $p$, not the other way: the answer is $p$ alone.`,
        ],
      },
      {
        title: "A plan for simplifying",
        points: [
          t`**Step 1.** Replace each $a \to b$ by $\sim a \vee b$ (conditional law).`,
          t`**Step 2.** Move each $\sim$ inside its bracket by De Morgan's laws.`,
          t`**Step 3.** Expand or take out a common part with the distributive laws.`,
          t`**Step 4.** Shorten with the complement, identity and absorption laws.`,
          t`Check the answer in one or two rows of a truth table.`,
        ],
      },
    ],
    worked: {
      prompt: t`Using the laws of logic, show that $\sim(p \vee q) \vee (\sim p \wedge q)$ $\equiv \sim p$.`,
      steps: [
        t`De Morgan's law: $\sim(p \vee q) \equiv \sim p \wedge \sim q$. The statement becomes $(\sim p \wedge \sim q)$ $\vee (\sim p \wedge q)$.`,
        t`Distributive law, taking out the common $\sim p$: $\sim p \wedge (\sim q \vee q)$.`,
        t`Complement law: $\sim q \vee q \equiv t$, giving $\sim p \wedge t$.`,
        t`Identity law: $\sim p \wedge t \equiv \sim p$.`,
      ],
      answer: t`$\sim(p \vee q) \vee (\sim p \wedge q)$ $\equiv \sim p$.`,
    },
    visualSpec: t`Type two statements in $p$, $q$, $r$; their truth tables fill in side by side, matching rows light up, and the first row that differs is flagged.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Reads $p \to q$ as $p \wedge q$, as if a conditional were true only when both parts are true`,
      remediation: t`A conditional is false only when $p$ is T and $q$ is F, so $p \to q \equiv \sim p \vee q$, not $p \wedge q$. Replace each $\to$ by this before using the other laws.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M2",
      mistake: t`Puts the negation on the wrong part in the conditional law: $p \to q \equiv p \vee \sim q$`,
      remediation: t`The conditional law negates the part before the arrow: $p \to q \equiv \sim p \vee q$. Check the row $p$ F, $q$ T: $p \to q$ is T, but $p \vee \sim q$ is F.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Applies De Morgan without swapping the connective: $\sim(p \wedge q) \equiv \sim p \wedge \sim q$`,
      remediation: t`De Morgan's laws negate each part **and** swap the connective: $\sim(p \wedge q) \equiv \sim p \vee \sim q$ and $\sim(p \vee q) \equiv \sim p \wedge \sim q$.`,
      fallback: { kind: "ext", topic: "De Morgan's laws for sets" },
    },
    {
      id: "C05-M4",
      mistake: t`Distributes onto the first term only: $p \wedge (q \vee r)$ $\equiv (p \wedge q) \vee r$`,
      remediation: t`The outside part joins every term in the bracket: $p \wedge (q \vee r)$ $\equiv (p \wedge q) \vee (p \wedge r)$, just as $a(b + c) = ab + ac$.`,
      fallback: { kind: "ext", topic: "expanding brackets" },
    },
    {
      id: "C05-M5",
      mistake: t`Applies absorption the wrong way round: $p \vee (p \wedge q) \equiv p \wedge q$`,
      remediation: t`In absorption the bracket is swallowed by the single statement: $p \vee (p \wedge q) \equiv p$ and $p \wedge (p \vee q) \equiv p$. Check: when $p$ is T, $p \vee (p \wedge q)$ is T whatever $q$ is.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Mixes up the two distributive laws: $p \wedge (q \vee r)$ $\equiv (p \vee q) \wedge (p \vee r)$`,
      remediation: t`Distributing keeps the outside connective with the outside part: $p \wedge (q \vee r)$ $\equiv (p \wedge q) \vee (p \wedge r)$ and $p \vee (q \wedge r)$ $\equiv (p \vee q) \wedge (p \vee r)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M6 gives the key on an absorption pattern such as $p \wedge (p \vee q)$, and C05-M4 there gives the same answer as C05-M5. Diagnose M4 and M6 only with a bracket whose terms differ from the outside part, as in C05-Q2, Q4 and Q5.`,
    "Options are compared by truth column (a named answer such as TFTT, read down the rows in the standard order), so any equivalent form of an option matches it.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc I (ii)" },
      stem: t`$(p \wedge q) \to r$ is logically equivalent to:`,
      verify: { kind: "value", inputs: { f: "Implies(And(p, q), r)" } },
      options: [
        { key: "A", text: t`$(\sim p \wedge \sim q) \vee r$`, correct: false, misconceptionId: "C05-M3", value: "TFTFTFTT" },
        { key: "B", text: t`$\sim p \vee \sim q \vee r$`, correct: true, value: "TFTTTTTT" },
        { key: "C", text: t`$p \wedge q \wedge r$`, correct: false, misconceptionId: "C05-M1", value: "TFFFFFFF" },
        { key: "D", text: t`$(p \wedge q) \vee \sim r$`, correct: false, misconceptionId: "C05-M2", value: "TTFTFTFT" },
      ],
      solution: {
        steps: [
          t`Conditional law: $(p \wedge q) \to r$ $\equiv \sim(p \wedge q) \vee r$.`,
          t`De Morgan's law: $\sim(p \wedge q) \equiv \sim p \vee \sim q$.`,
          t`So $(p \wedge q) \to r$ $\equiv \sim p \vee \sim q \vee r$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.2 (vi)" },
      stem: t`$p \to (q \wedge r)$ is logically equivalent to:`,
      verify: { kind: "value", inputs: { f: "Implies(p, And(q, r))" } },
      options: [
        { key: "A", text: t`$p \vee \sim q \vee \sim r$`, correct: false, misconceptionId: "C05-M2", value: "TTTTFTTT" },
        { key: "B", text: t`$(\sim p \vee q) \wedge r$`, correct: false, misconceptionId: "C05-M4", value: "TFFFTFTF" },
        { key: "C", text: t`$(\sim p \wedge q) \vee (\sim p \wedge r)$`, correct: false, misconceptionId: "C05-M6", value: "FFFFTTTF" },
        { key: "D", text: t`$(\sim p \vee q) \wedge (\sim p \vee r)$`, correct: true, value: "TFFFTTTT" },
      ],
      solution: {
        steps: [
          t`Conditional law: $p \to (q \wedge r)$ $\equiv \sim p \vee (q \wedge r)$.`,
          t`Distributive law: $\sim p$ joins each term, giving $(\sim p \vee q)$ $\wedge (\sim p \vee r)$.`,
          t`So $p \to (q \wedge r)$ $\equiv (\sim p \vee q) \wedge (\sim p \vee r)$, that is, $(p \to q) \wedge (p \to r)$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`Using the laws of logic, $\sim p \wedge (p \to q)$ simplifies to:`,
      verify: { kind: "value", inputs: { f: "And(Not(p), Implies(p, q))" } },
      options: [
        { key: "A", text: t`$\sim p$`, correct: true, value: "FFTT" },
        { key: "B", text: t`$c$, a statement that is always false`, correct: false, misconceptionId: "C05-M1", value: "FFFF" },
        { key: "C", text: t`$\sim p \wedge \sim q$`, correct: false, misconceptionId: "C05-M2", value: "FFFT" },
        { key: "D", text: t`$\sim p \vee q$`, correct: false, misconceptionId: "C05-M5", value: "TFTT" },
      ],
      solution: {
        steps: [
          t`Conditional law: $p \to q \equiv \sim p \vee q$, so the statement is $\sim p \wedge (\sim p \vee q)$.`,
          t`Absorption law: $\sim p \wedge (\sim p \vee q) \equiv \sim p$.`,
          t`So $\sim p \wedge (p \to q) \equiv \sim p$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.2 (vii)" },
      stem: t`$p \wedge (\sim q \to r)$ is logically equivalent to:`,
      verify: { kind: "value", inputs: { f: "And(p, Implies(Not(q), r))" } },
      options: [
        { key: "A", text: t`$(p \wedge q) \vee r$`, correct: false, misconceptionId: "C05-M4", value: "TTTFTFTF" },
        { key: "B", text: t`$(p \vee q) \wedge (p \vee r)$`, correct: false, misconceptionId: "C05-M6", value: "TTTTTFFF" },
        { key: "C", text: t`$(p \wedge q) \vee (p \wedge r)$`, correct: true, value: "TTTFFFFF" },
        { key: "D", text: t`$p \wedge \sim q \wedge r$`, correct: false, misconceptionId: "C05-M1", value: "FFTFFFFF" },
      ],
      solution: {
        steps: [
          t`Conditional law: $\sim q \to r \equiv \sim(\sim q) \vee r$ $\equiv q \vee r$.`,
          t`So the statement is $p \wedge (q \vee r)$.`,
          t`Distributive law: $p \wedge (q \vee r)$ $\equiv (p \wedge q) \vee (p \wedge r)$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.2 (i)" },
      stem: t`Using the laws of logic, $\sim q \wedge \sim(\sim p \wedge \sim q)$ simplifies to:`,
      verify: { kind: "value", inputs: { f: "And(Not(q), Not(And(Not(p), Not(q))))" } },
      options: [
        { key: "A", text: t`$p \wedge \sim q$`, correct: true, value: "FTFF" },
        { key: "B", text: t`$c$, a statement that is always false`, correct: false, misconceptionId: "C05-M3", value: "FFFF" },
        { key: "C", text: t`$p \vee q$`, correct: false, misconceptionId: "C05-M4", value: "TTTF" },
        { key: "D", text: t`$p \vee \sim q$`, correct: false, misconceptionId: "C05-M6", value: "TTFT" },
      ],
      solution: {
        steps: [
          t`De Morgan's law: $\sim(\sim p \wedge \sim q) \equiv p \vee q$, so the statement is $\sim q \wedge (p \vee q)$.`,
          t`Distributive law: $(\sim q \wedge p) \vee (\sim q \wedge q)$.`,
          t`Complement law: $\sim q \wedge q \equiv c$; identity law: $(\sim q \wedge p) \vee c$ $\equiv \sim q \wedge p$.`,
          t`So the statement simplifies to $p \wedge \sim q$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`Using the laws of logic, $(\sim p \vee q) \to p$ simplifies to:`,
      verify: { kind: "value", inputs: { f: "Implies(Or(Not(p), q), p)" } },
      options: [
        { key: "A", text: t`$p$`, correct: true, value: "TTFF" },
        { key: "B", text: t`$p \wedge q$`, correct: false, misconceptionId: "C05-M1", value: "TFFF" },
        { key: "C", text: t`$p \vee \sim q$`, correct: false, misconceptionId: "C05-M3", value: "TTFT" },
        { key: "D", text: t`$p \wedge \sim q$`, correct: false, misconceptionId: "C05-M5", value: "FTFF" },
      ],
      solution: {
        steps: [
          t`Conditional law: $(\sim p \vee q) \to p$ $\equiv \sim(\sim p \vee q) \vee p$.`,
          t`De Morgan's law: $\sim(\sim p \vee q) \equiv p \wedge \sim q$, giving $(p \wedge \sim q) \vee p$.`,
          t`Absorption law: $p \vee (p \wedge \sim q) \equiv p$.`,
          t`So $(\sim p \vee q) \to p \equiv p$.`,
        ],
      },
    },
  ],
};
