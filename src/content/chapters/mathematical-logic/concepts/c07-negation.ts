import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Riya promises: **I will bring the notes and the pen.** She brings the notes but forgets the pen. Did she break her promise? What does **not (notes and pen)** really say?`,
    reveal: t`Yes, she broke it: one missing thing is enough. **Not (notes and pen)** means **no notes, or no pen**. So $\sim(p \wedge q) \equiv \sim p \vee \sim q$: the $\sim$ goes onto each part and **and** becomes **or**.`,
  },
  explanation: {
    intuition: [
      t`The **negation** $\sim A$ of a statement $A$ is true exactly when $A$ is false.`,
      t`So to negate a compound statement, ask: in which cases is it **false**?`,
      t`An **and** statement fails when at least one part fails: that is an **or**.`,
      t`An **or** statement fails only when both parts fail: that is an **and**.`,
      t`A conditional $p \to q$ fails only when $p$ is true and $q$ is false.`,
      t`Each connective has its own rule for $\sim$; learn the four and push $\sim$ inward.`,
    ],
    formal: [
      {
        title: "De Morgan's laws",
        points: [
          t`$\sim(p \wedge q) \equiv \sim p \vee \sim q$.`,
          t`$\sim(p \vee q) \equiv \sim p \wedge \sim q$.`,
          t`Two moves together: put $\sim$ on **each** part, **and** swap $\wedge$ with $\vee$.`,
          t`Example: the negation of **$7 > 3$ and $4 > 11$** is **$7 \leq 3$ or $4 \leq 11$**.`,
          t`Keeping the $\wedge$ is wrong: at $p$ T, $q$ F, $\sim(p \wedge q)$ is T but $\sim p \wedge \sim q$ is F.`,
          t`Swapping without negating is wrong too: at $p$ T, $q$ T, $p \vee q$ is T but $\sim(p \wedge q)$ is F.`,
        ],
      },
      {
        title: "Negating a conditional",
        points: [
          t`$p \to q$ is false in one case only: $p$ true and $q$ false.`,
          t`So $\sim(p \to q) \equiv p \wedge \sim q$: the negation is an **and**, not an **if-then**.`,
          t`Check by laws: $\sim(p \to q) \equiv \sim(\sim p \vee q)$ $\equiv \sim(\sim p) \wedge \sim q$ $\equiv p \wedge \sim q$.`,
          t`**If it rains, the match is cancelled** is negated by **It rains and the match is not cancelled**.`,
          t`Not $\sim p \to \sim q$: at $p$ T, $q$ T it is T, but $\sim(p \to q)$ is F.`,
          t`Not $p \to \sim q$: when $p$ is F, both $p \to q$ and $p \to \sim q$ are T.`,
        ],
      },
      {
        title: "Negating a biconditional",
        points: [
          t`$p \leftrightarrow q$ means $(p \to q) \wedge (q \to p)$.`,
          t`Negate it by De Morgan: $\sim(p \to q) \vee \sim(q \to p)$.`,
          t`So $\sim(p \leftrightarrow q)$ $\equiv (p \wedge \sim q) \vee (q \wedge \sim p)$.`,
          t`In words: exactly one of $p$, $q$ is true.`,
          t`Not $\sim p \leftrightarrow \sim q$: it is true in the same rows as $p \leftrightarrow q$ itself.`,
          t`Not $(p \wedge \sim q) \wedge (q \wedge \sim p)$: that is never true.`,
        ],
      },
      {
        title: "Double negation and longer statements",
        points: [
          t`Two negations cancel: $\sim(\sim p) \equiv p$.`,
          t`So $\sim(\sim p \wedge q) \equiv p \vee \sim q$, not $\sim p \vee \sim q$.`,
          t`For a long statement, start with the main connective, the one that joins the largest parts.`,
          t`Apply its rule, then negate the smaller parts the same way.`,
          t`A part that the rule keeps, like $a$ in $\sim(a \to b) \equiv a \wedge \sim b$, is copied unchanged.`,
          t`Check the answer in a row or two of a truth table: it must flip every value.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the negation of $(p \wedge q) \to (\sim p \vee r)$, stating the rules used.`,
      steps: [
        t`The main connective is $\to$. Negation of a conditional: $\sim(a \to b) \equiv a \wedge \sim b$.`,
        t`So the negation is $(p \wedge q) \wedge \sim(\sim p \vee r)$.`,
        t`De Morgan's law: $\sim(\sim p \vee r)$ $\equiv \sim(\sim p) \wedge \sim r$.`,
        t`Double negation: $\sim(\sim p) \equiv p$, so this part is $p \wedge \sim r$.`,
        t`Now $(p \wedge q) \wedge (p \wedge \sim r)$ has $p$ twice, and $p \wedge p \equiv p$.`,
      ],
      answer: t`$\sim[(p \wedge q) \to (\sim p \vee r)]$ $\equiv p \wedge q \wedge \sim r$.`,
    },
    visualSpec: t`Type a statement in $p$, $q$, $r$; its truth column and the column of a proposed negation sit side by side, and every row that fails to flip is flagged.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Negates each part but keeps the connective: $\sim(p \wedge q) \equiv \sim p \wedge \sim q$, $\sim(p \vee q) \equiv \sim p \vee \sim q$`,
      remediation: t`De Morgan's laws negate each part **and** swap the connective: $\sim(p \wedge q) \equiv \sim p \vee \sim q$ and $\sim(p \vee q) \equiv \sim p \wedge \sim q$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M2",
      mistake: t`Negates a conditional by negating both parts and keeping the arrow: $\sim(p \to q) \equiv \sim p \to \sim q$`,
      remediation: t`$p \to q$ is false only when $p$ is T and $q$ is F, so its negation is $p \wedge \sim q$, an **and**. $\sim p \to \sim q$ is a different conditional.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M3",
      mistake: t`Negates a conditional by negating only its consequent: $\sim(p \to q) \equiv p \to \sim q$`,
      remediation: t`The negation must be false wherever $p \to q$ is true, but when $p$ is F both $p \to q$ and $p \to \sim q$ are T. Use $\sim(p \to q) \equiv p \wedge \sim q$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C07-M4",
      mistake: t`Negates a biconditional by negating both sides: $\sim(p \leftrightarrow q) \equiv \sim p \leftrightarrow \sim q$`,
      remediation: t`$\sim p \leftrightarrow \sim q$ is true in the same rows as $p \leftrightarrow q$. The negation says exactly one is true: $(p \wedge \sim q) \vee (q \wedge \sim p)$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M5",
      mistake: t`Leaves a negated part negated when negating it again: $\sim(\sim q) \equiv \sim q$`,
      remediation: t`Two negations cancel: $\sim(\sim q) \equiv q$. So $\sim(p \wedge \sim q) \equiv \sim p \vee q$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Swaps $\wedge$ and $\vee$ but forgets to negate the parts: $\sim(p \wedge q) \equiv p \vee q$`,
      remediation: t`Swapping the connective is only half of De Morgan's law: each part must be negated too, so $\sim(p \wedge q) \equiv \sim p \vee \sim q$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Options are compared by truth column (a named answer such as FTTF, read down the rows in the standard order), so any equivalent form of an option matches it.",
    t`On a biconditional the models expand $p \leftrightarrow q$ as $(p \to q) \wedge (q \to p)$; there C07-M2 and C07-M6 both give a tautology, so C07-Q3 lists neither.`,
    "C07-M4 applies only to a biconditional (C07-Q3); C07-M5 only where a negated part is negated again (C07-Q4, Q5).",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc I (vi)" },
      stem: t`The negation of $p \wedge (q \to r)$ is:`,
      verify: { kind: "value", inputs: { f: "And(p, Implies(q, r))" } },
      options: [
        { key: "A", text: t`$\sim p \vee (\sim q \to \sim r)$`, correct: false, misconceptionId: "C07-M2", value: "TTFTTTTT" },
        { key: "B", text: t`$p \vee (\sim q \vee r)$`, correct: false, misconceptionId: "C07-M6", value: "TTTTTFTT" },
        { key: "C", text: t`$\sim p \vee (q \wedge \sim r)$`, correct: true, value: "FTFFTTTT" },
        { key: "D", text: t`$\sim p \wedge (q \wedge \sim r)$`, correct: false, misconceptionId: "C07-M1", value: "FFFFFTFF" },
      ],
      solution: {
        steps: [
          t`The main connective is $\wedge$. De Morgan's law: $\sim[p \wedge (q \to r)]$ $\equiv \sim p \vee \sim(q \to r)$.`,
          t`Negation of a conditional: $\sim(q \to r) \equiv q \wedge \sim r$.`,
          t`So the negation is $\sim p \vee (q \wedge \sim r)$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.3 (v)" },
      stem: t`The negation of the statement **If it is raining, then we will go and play football** is:`,
      verify: { kind: "value", inputs: { f: "Implies(p, And(q, r))" } },
      options: [
        { key: "A", text: t`It is raining, and we will not go and we will not play football.`, correct: false, misconceptionId: "C07-M1", value: "FFFTFFFF" },
        { key: "B", text: t`If it is not raining, then we will not go or we will not play football.`, correct: false, misconceptionId: "C07-M2", value: "TTTTFTTT" },
        { key: "C", text: t`If it is raining, then we will not go or we will not play football.`, correct: false, misconceptionId: "C07-M3", value: "FTTTTTTT" },
        { key: "D", text: t`It is raining, and we will not go or we will not play football.`, correct: true, value: "FTTTFFFF" },
      ],
      solution: {
        steps: [
          t`Let $p$: it is raining, $q$: we will go, $r$: we will play football. The statement is $p \to (q \wedge r)$.`,
          t`Negation of a conditional: $\sim[p \to (q \wedge r)]$ $\equiv p \wedge \sim(q \wedge r)$.`,
          t`De Morgan's law: $\sim(q \wedge r) \equiv \sim q \vee \sim r$, giving $p \wedge (\sim q \vee \sim r)$.`,
          t`In words: it is raining, and we will not go or we will not play football.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.3 (iii)" },
      stem: t`The negation of the statement **A quadrilateral is a square if and only if it is a rhombus** is:`,
      verify: { kind: "value", inputs: { f: "Equivalent(p, q)" } },
      options: [
        { key: "A", text: t`A quadrilateral is not a square if and only if it is not a rhombus.`, correct: false, misconceptionId: "C07-M4", value: "TFFT" },
        { key: "B", text: t`It is a square but not a rhombus, or it is a rhombus but not a square.`, correct: true, value: "FTTF" },
        { key: "C", text: t`It is a square but not a rhombus, and it is a rhombus but not a square.`, correct: false, misconceptionId: "C07-M1", value: "FFFF" },
        { key: "D", text: t`If it is a square, then it is not a rhombus; or if it is a rhombus, then it is not a square.`, correct: false, misconceptionId: "C07-M3", value: "FTTT" },
      ],
      solution: {
        steps: [
          t`Let $p$: the quadrilateral is a square, $q$: it is a rhombus. The statement is $p \leftrightarrow q$.`,
          t`$\sim(p \leftrightarrow q)$ $\equiv (p \wedge \sim q) \vee (q \wedge \sim p)$.`,
          t`In words: it is a square but not a rhombus, or it is a rhombus but not a square.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.4 Ex 1.4 Q.1 (ii)" },
      stem: t`Using the rules of negation, the negation of $p \wedge \sim q$ is:`,
      verify: { kind: "value", inputs: { f: "And(p, Not(q))" } },
      options: [
        { key: "A", text: t`$\sim p \vee q$`, correct: true, value: "TFTT" },
        { key: "B", text: t`$\sim p \wedge q$`, correct: false, misconceptionId: "C07-M1", value: "FFTF" },
        { key: "C", text: t`$\sim p \vee \sim q$`, correct: false, misconceptionId: "C07-M5", value: "FTTT" },
        { key: "D", text: t`$p \vee \sim q$`, correct: false, misconceptionId: "C07-M6", value: "TTFT" },
      ],
      solution: {
        steps: [
          t`De Morgan's law: $\sim(p \wedge \sim q)$ $\equiv \sim p \vee \sim(\sim q)$.`,
          t`Double negation: $\sim(\sim q) \equiv q$.`,
          t`So the negation is $\sim p \vee q$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.4 Ex 1.4 Q.1 (vii)" },
      stem: t`Using the rules of negation, the negation of $(p \vee \sim q) \to (p \wedge \sim q)$ is:`,
      verify: { kind: "value", inputs: { f: "Implies(Or(p, Not(q)), And(p, Not(q)))" } },
      options: [
        { key: "A", text: t`$(\sim p \wedge q) \to (\sim p \vee q)$`, correct: false, misconceptionId: "C07-M2", value: "TTTT" },
        { key: "B", text: t`$(p \vee \sim q) \to (\sim p \vee q)$`, correct: false, misconceptionId: "C07-M3", value: "TFTT" },
        { key: "C", text: t`$(p \vee \sim q) \wedge (\sim p \vee \sim q)$`, correct: false, misconceptionId: "C07-M5", value: "FTFT" },
        { key: "D", text: t`$(p \vee \sim q) \wedge (\sim p \vee q)$`, correct: true, value: "TFFT" },
      ],
      solution: {
        steps: [
          t`Negation of a conditional: $\sim(a \to b) \equiv a \wedge \sim b$, with $a = p \vee \sim q$, $b = p \wedge \sim q$.`,
          t`So the negation is $(p \vee \sim q) \wedge \sim(p \wedge \sim q)$.`,
          t`De Morgan and double negation: $\sim(p \wedge \sim q) \equiv \sim p \vee q$.`,
          t`So the negation is $(p \vee \sim q) \wedge (\sim p \vee q)$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc Q.11 (iii)" },
      stem: t`Using the rules of negation, the negation of $(p \to q) \wedge r$ is:`,
      verify: { kind: "value", inputs: { f: "And(Implies(p, q), r)" } },
      options: [
        { key: "A", text: t`$(p \wedge \sim q) \vee \sim r$`, correct: true, value: "FTTTFTFT" },
        { key: "B", text: t`$(\sim p \to \sim q) \vee \sim r$`, correct: false, misconceptionId: "C07-M2", value: "TTTTFTTT" },
        { key: "C", text: t`$(p \to \sim q) \vee \sim r$`, correct: false, misconceptionId: "C07-M3", value: "FTTTTTTT" },
        { key: "D", text: t`$(p \to q) \vee r$`, correct: false, misconceptionId: "C07-M6", value: "TTTFTTTT" },
      ],
      solution: {
        steps: [
          t`The main connective is $\wedge$. De Morgan's law: $\sim[(p \to q) \wedge r]$ $\equiv \sim(p \to q) \vee \sim r$.`,
          t`Negation of a conditional: $\sim(p \to q) \equiv p \wedge \sim q$.`,
          t`So the negation is $(p \wedge \sim q) \vee \sim r$.`,
        ],
      },
    },
  ],
};
