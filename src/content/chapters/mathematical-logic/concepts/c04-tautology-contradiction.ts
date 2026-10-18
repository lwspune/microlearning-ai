import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Let $p$ be 'It is raining.' Can $p \vee \sim p$ (it is raining or it is not) ever be false? Can $p \wedge \sim p$ ever be true?`,
    reveal: t`Neither. $p \vee \sim p$ is T in both rows of its truth table, so it is a **tautology**. $p \wedge \sim p$ is F in both rows: a **contradiction**. Most patterns, like $p \to q$, are T in some rows and F in others: a **contingency**.`,
  },
  explanation: {
    intuition: [
      t`A **statement pattern** is a formula built from letters such as $p$, $q$, $r$ joined by connectives.`,
      t`Its truth table has one row for each way of giving the letters T or F.`,
      t`Look only at the **last column**: the value of the whole pattern in each row.`,
      t`All T: the pattern is true whatever $p$ and $q$ are. It is a **tautology**.`,
      t`All F: the pattern is false whatever $p$ and $q$ are. It is a **contradiction**.`,
      t`Some T and some F: its truth depends on $p$ and $q$. It is a **contingency**.`,
    ],
    formal: [
      {
        title: "The three kinds",
        points: [
          t`A **tautology** is a statement pattern that is T in every row of its truth table.`,
          t`A **contradiction** is a statement pattern that is F in every row.`,
          t`A **contingency** is neither: its last column has at least one T and at least one F.`,
          t`With $n$ letters there are $2^n$ rows: $4$ for $p, q$ and $8$ for $p, q, r$.`,
          t`So count the T's in the last column: all $2^n$, none, or some.`,
        ],
      },
      {
        title: "How to examine a pattern",
        points: [
          t`**Step 1.** List all $2^n$ rows; for $p, q$ they are TT, TF, FT, FF.`,
          t`**Step 2.** Add a column for each part, the innermost brackets first.`,
          t`**Step 3.** Fill the last column, for the whole pattern.`,
          t`**Step 4.** Read the last column: all T, all F, or a mix.`,
          t`Check every row: a pattern can be T in three rows and still be F in the fourth.`,
        ],
      },
      {
        title: "Connective rows to trust",
        points: [
          t`$p \wedge q$ is T only when $p$ and $q$ are both T.`,
          t`$p \vee q$ is F only when both are F; T or T is T.`,
          t`$p \to q$ is F only when $p$ is T and $q$ is F.`,
          t`So when $p$ is F, $p \to q$ is T, whatever $q$ is.`,
          t`$p \leftrightarrow q$ is T when $p$ and $q$ have the same value, and F otherwise.`,
        ],
      },
    ],
    worked: {
      prompt: t`Examine whether $[p \wedge (p \to \sim q)] \to q$ is a tautology, a contradiction or a contingency.`,
      steps: [
        t`Two letters, so $4$ rows: $p, q$ = TT, TF, FT, FF.`,
        t`$\sim q$ is F, T, F, T, so $p \to \sim q$ is F, T, T, T.`,
        t`Then $p \wedge (p \to \sim q)$ is F, T, F, F.`,
        t`With $q$ = T, F, T, F, the last column is T, F, T, T: only row TF gives T → F.`,
        t`The last column has both T and F.`,
      ],
      answer: t`It is T in $3$ of $4$ rows: a **contingency**.`,
    },
    visualSpec: t`A truth table whose last column the student fills row by row, with a badge that settles on tautology, contradiction or contingency as the column fills.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks there are only two kinds: all T is a tautology, and anything else is a contradiction.",
      remediation: "There are three kinds. A contradiction is F in every row; a column with both T and F is a contingency.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks a tautology is a pattern that can be true, so one T in the last column is enough.",
      remediation: "A tautology must be T in every row. A column with both T and F is a contingency.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Fills $p \to q$ as if it were $p \leftrightarrow q$, taking F → T as F.`,
      remediation: t`$p \to q$ is F only when $p$ is T and $q$ is F. When $p$ is F, $p \to q$ is T, so F → T is T.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: "Reads 'or' as exclusive, taking T ∨ T as F.",
      remediation: t`In logic 'or' is inclusive: $p \vee q$ is T when either or both are T, and F only when both are F.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M5",
      mistake: t`Fills $p \leftrightarrow q$ one way only, like $p \to q$, taking F ↔ T as T.`,
      remediation: t`$p \leftrightarrow q$ is T only when $p$ and $q$ have the same value, so F ↔ T is F.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M6",
      mistake: t`Fills $p \to q$ like $p \wedge q$, taking F → T and F → F as F.`,
      remediation: t`$p \to q$ is not $p \wedge q$: when $p$ is F, $p \to q$ is T whatever $q$ is.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    "C04-M1 and C04-M2 change only the name, so they show only on a contingency; on a tautology or a contradiction they give the key.",
    t`C04-M3 and C04-M6 need a $\to$ in the pattern, C04-M4 a $\vee$ and C04-M5 a $\leftrightarrow$; elsewhere their models raise.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.3 (iii)" },
      stem: t`Examine the statement pattern $[\sim(\sim p \wedge \sim q)] \vee q$. In how many rows of its truth table is it T, and is it a tautology, a contradiction or a contingency?`,
      verify: { kind: "value", inputs: {  }, params: { f: "Or(Not(And(Not(p), Not(q))), q)" } },
      options: [
        { key: "A", text: t`T in $3$ of $4$ rows: a tautology`, correct: false, misconceptionId: "C04-M2", value: "(3, tautology)" },
        { key: "B", text: t`T in $1$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M4", value: "(1, contingency)" },
        { key: "C", text: t`T in $3$ of $4$ rows: a contingency`, correct: true, value: "(3, contingency)" },
        { key: "D", text: t`T in $3$ of $4$ rows: a contradiction`, correct: false, misconceptionId: "C04-M1", value: "(3, contradiction)" },
      ],
      solution: {
        steps: [
          t`Rows TT, TF, FT, FF: $\sim p \wedge \sim q$ is F, F, F, T.`,
          t`So $\sim(\sim p \wedge \sim q)$ is T, T, T, F.`,
          t`Or-ing with $q$ = T, F, T, F gives T, T, T, F: T in $3$ of $4$ rows.`,
          t`A mix of T and F: a contingency.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.3 (i)" },
      stem: t`Examine the statement pattern $(p \wedge q) \to (q \vee p)$. In how many rows of its truth table is it T, and is it a tautology, a contradiction or a contingency?`,
      verify: { kind: "value", inputs: {  }, params: { f: "Implies(And(p, q), Or(q, p))" } },
      options: [
        { key: "A", text: t`T in $2$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M3", value: "(2, contingency)" },
        { key: "B", text: t`T in $3$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M4", value: "(3, contingency)" },
        { key: "C", text: t`T in $1$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M6", value: "(1, contingency)" },
        { key: "D", text: t`T in $4$ of $4$ rows: a tautology`, correct: true, value: "(4, tautology)" },
      ],
      solution: {
        steps: [
          t`Rows TT, TF, FT, FF: $p \wedge q$ is T, F, F, F and $q \vee p$ is T, T, T, F.`,
          t`Row TT gives T → T = T; the other rows start with F, so they are T too.`,
          t`T in all $4$ rows: a tautology.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.3 (vi)" },
      stem: t`Examine the statement pattern $(p \leftrightarrow q) \wedge (p \to \sim q)$. In how many rows of its truth table is it T, and is it a tautology, a contradiction or a contingency?`,
      verify: { kind: "value", inputs: {  }, params: { f: "And(Equivalent(p, q), Implies(p, Not(q)))" } },
      options: [
        { key: "A", text: t`T in $0$ of $4$ rows: a contradiction`, correct: false, misconceptionId: "C04-M3", value: "(0, contradiction)" },
        { key: "B", text: t`T in $2$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M5", value: "(2, contingency)" },
        { key: "C", text: t`T in $1$ of $4$ rows: a contingency`, correct: true, value: "(1, contingency)" },
        { key: "D", text: t`T in $1$ of $4$ rows: a tautology`, correct: false, misconceptionId: "C04-M2", value: "(1, tautology)" },
      ],
      solution: {
        steps: [
          t`Rows TT, TF, FT, FF: $p \leftrightarrow q$ is T, F, F, T.`,
          t`$p \to \sim q$ is F, T, T, T: it fails only in row TT.`,
          t`Both parts are T only in row FF: T in $1$ of $4$ rows.`,
          t`A mix of T and F: a contingency.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.3 (viii)" },
      stem: t`Examine the statement pattern $(p \wedge \sim q) \leftrightarrow (p \to q)$. In how many rows of its truth table is it T, and is it a tautology, a contradiction or a contingency?`,
      verify: { kind: "value", inputs: {  }, params: { f: "Equivalent(And(p, Not(q)), Implies(p, q))" } },
      options: [
        { key: "A", text: t`T in $1$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M3", value: "(1, contingency)" },
        { key: "B", text: t`T in $3$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M5", value: "(3, contingency)" },
        { key: "C", text: t`T in $2$ of $4$ rows: a contingency`, correct: false, misconceptionId: "C04-M6", value: "(2, contingency)" },
        { key: "D", text: t`T in $0$ of $4$ rows: a contradiction`, correct: true, value: "(0, contradiction)" },
      ],
      solution: {
        steps: [
          t`Rows TT, TF, FT, FF: $p \wedge \sim q$ is F, T, F, F.`,
          t`$p \to q$ is T, F, T, T: the opposite value in every row.`,
          t`So the $\leftrightarrow$ is F in all $4$ rows: a contradiction.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.2 Ex 1.2 Q.3 (ix)" },
      stem: t`Examine the statement pattern $(\sim p \to q) \wedge (p \wedge r)$. In how many rows of its truth table is it T, and is it a tautology, a contradiction or a contingency?`,
      verify: { kind: "value", inputs: {  }, params: { f: "And(Implies(Not(p), q), And(p, r))" } },
      options: [
        { key: "A", text: t`T in $0$ of $8$ rows: a contradiction`, correct: false, misconceptionId: "C04-M6", value: "(0, contradiction)" },
        { key: "B", text: t`T in $2$ of $8$ rows: a contingency`, correct: true, value: "(2, contingency)" },
        { key: "C", text: t`T in $2$ of $8$ rows: a contradiction`, correct: false, misconceptionId: "C04-M1", value: "(2, contradiction)" },
        { key: "D", text: t`T in $1$ of $8$ rows: a contingency`, correct: false, misconceptionId: "C04-M3", value: "(1, contingency)" },
      ],
      solution: {
        steps: [
          t`Three letters give $8$ rows; $p \wedge r$ is T only when $p$ and $r$ are both T, in $2$ rows.`,
          t`In those rows $\sim p$ is F, so $\sim p \to q$ is T.`,
          t`So the pattern is T in $2$ of $8$ rows and F in the other $6$: a contingency.`,
        ],
      },
    },
  ],
};
