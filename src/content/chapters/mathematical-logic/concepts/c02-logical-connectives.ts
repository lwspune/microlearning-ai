import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A father says: “If you score 90% in the exam, I will buy you a bicycle.” You score 75%, and he buys you the bicycle anyway. **Did he break his promise?**`,
    reveal: t`No. The promise is $p \to q$, with $p$: you score 90%, and $q$: he buys the bicycle. It is broken only if $p$ is T and $q$ is F. Here $p$ is F, so the promise stands: $F \to T = T$.`,
  },
  explanation: {
    intuition: [
      t`A **compound statement** joins simple statements with words like “and”, “or” and “if … then”.`,
      t`These joining words are called **logical connectives**, and each has its own symbol.`,
      t`The truth value of a compound statement depends only on the truth values of its parts.`,
      t`“And” needs both parts true; “or” needs at least one part true.`,
      t`“If $p$ then $q$” is a promise: it is broken only when $p$ happens and $q$ does not.`,
      t`“$p$ if and only if $q$” is true when $p$ and $q$ agree: both T or both F.`,
    ],
    formal: [
      {
        title: "Negation and conjunction",
        points: [
          t`The **negation** of $p$, written $\sim p$ and read “not $p$”, has the opposite truth value.`,
          t`So $\sim T = F$ and $\sim F = T$.`,
          t`The **conjunction** $p \wedge q$, read “$p$ and $q$”, is T only when both parts are T.`,
          t`So $T \wedge T = T$, while $T \wedge F$, $F \wedge T$ and $F \wedge F$ are all F.`,
          t`Words such as “but”, “yet” and “while” also mean $\wedge$.`,
          t`“Neither $p$ nor $q$” says both are false: it is $\sim p \wedge \sim q$.`,
        ],
      },
      {
        title: "Disjunction",
        points: [
          t`The **disjunction** $p \vee q$, read “$p$ or $q$”, is T when at least one part is T.`,
          t`It is F only when both $p$ and $q$ are F.`,
          t`In logic “or” is inclusive: it allows both, so $T \vee T = T$.`,
          t`Example: “2 is even or 4 is even” is $T \vee T$, so it is T.`,
        ],
      },
      {
        title: "Conditional",
        points: [
          t`The **conditional** $p \to q$ is read “if $p$ then $q$”.`,
          t`$p$ is its **antecedent** (the “if” part) and $q$ its **consequent** (the “then” part).`,
          t`$p \to q$ is F only when $p$ is T and $q$ is F.`,
          t`If the antecedent is F, the promise is never tested, so $p \to q$ is T.`,
          t`So $T \to T = T$, $T \to F = F$, $F \to T = T$ and $F \to F = T$.`,
        ],
      },
      {
        title: "Biconditional",
        points: [
          t`The **biconditional** $p \leftrightarrow q$ is read “$p$ if and only if $q$”.`,
          t`It says $p \to q$ and $q \to p$ both hold.`,
          t`So it is T when $p$ and $q$ have the same truth value.`,
          t`$T \leftrightarrow T = T$ and $F \leftrightarrow F = T$.`,
          t`It is F when they differ: $T \leftrightarrow F = F$ and $F \leftrightarrow T = F$.`,
        ],
      },
      {
        title: "Finding a truth value",
        points: [
          t`Name each simple statement with a letter, such as $p$ and $q$.`,
          t`Spot the connective and write the sentence in symbols.`,
          t`Find the truth value of each simple statement.`,
          t`Apply the rule of that connective to get the truth value of the whole.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write in symbols and find the truth value: “Delhi is in India but Dhaka is not in Srilanka.”`,
      steps: [
        t`Let $p$: Delhi is in India, and $q$: Dhaka is in Srilanka.`,
        t`“But” means “and”, and “not in Srilanka” is $\sim q$. In symbols: $p \wedge \sim q$.`,
        t`$p$ is T. Dhaka is in Bangladesh, so $q$ is F and $\sim q$ is T.`,
        t`$p \wedge \sim q = T \wedge T = T$.`,
      ],
      answer: t`$p \wedge \sim q$, and the statement is true.`,
    },
    visualSpec: t`Toggle $p$ and $q$ between T and F and watch the truth values of $\sim p$, $p \wedge q$, $p \vee q$, $p \to q$ and $p \leftrightarrow q$ change.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Taking $p \to q$ as false whenever $p$ is false`,
      remediation: t`$p \to q$ is F only when $p$ is T and $q$ is F. When $p$ is F the promise is never tested, so $p \to q$ is T.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Reading “or” as “one or the other, but not both”",
      remediation: t`In logic “or” is inclusive: $p \vee q$ is T when at least one part is T, so $T \vee T = T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Taking $p \leftrightarrow q$ as true only when both parts are true`,
      remediation: t`$p \leftrightarrow q$ is T whenever $p$ and $q$ have the same truth value, so $F \leftrightarrow F = T$ as well.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Reading “if and only if” one way only, as $p \to q$`,
      remediation: t`$p \leftrightarrow q$ needs both $p \to q$ and $q \to p$, so it is F whenever $p$ and $q$ differ: $F \leftrightarrow T = F$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Reading “neither $p$ nor $q$” as $\sim p \vee \sim q$`,
      remediation: t`“Neither $p$ nor $q$” says both are false: it is $\sim p \wedge \sim q$, which is T only when $p$ and $q$ are both F.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`Each misconception changes only one connective on one pair of truth values: C02-M1 a conditional with an F antecedent, C02-M2 $T \vee T$, C02-M3 $F \leftrightarrow F$, C02-M4 $F \leftrightarrow T$, C02-M5 “neither … nor” with exactly one part T. On other inputs its model gives the key, so a diagnosing item must contain that case.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "authored" },
      stem: t`$p$ is F and $q$ is T. Write the truth values of $p \to q$, $p \leftrightarrow q$ and $\sim p \vee q$, in that order.`,
      verify: { kind: "value", inputs: { p: "False", q: "True" }, params: { stmts: ["Implies(p, q)", "Equivalent(p, q)", "Or(Not(p), q)"] } },
      options: [
        { key: "A", text: t`T, F, T`, correct: true, value: "T_F_T" },
        { key: "B", text: t`F, F, T`, correct: false, misconceptionId: "C02-M1", value: "F_F_T" },
        { key: "C", text: t`T, F, F`, correct: false, misconceptionId: "C02-M2", value: "T_F_F" },
        { key: "D", text: t`T, T, T`, correct: false, misconceptionId: "C02-M4", value: "T_T_T" },
      ],
      solution: {
        steps: [
          t`$p \to q$ is $F \to T$: the antecedent is F, so it is T.`,
          t`$p \leftrightarrow q$ is $F \leftrightarrow T$: the parts differ, so it is F.`,
          t`$\sim p$ is T, so $\sim p \vee q$ is $T \vee T = T$. The truth values are T, F, T.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`$p$ is F and $q$ is F. Write the truth values of $p \to q$, $p \leftrightarrow q$ and $p \leftrightarrow \sim q$, in that order.`,
      verify: { kind: "value", inputs: { p: "False", q: "False" }, params: { stmts: ["Implies(p, q)", "Equivalent(p, q)", "Equivalent(p, Not(q))"] } },
      options: [
        { key: "A", text: t`F, T, F`, correct: false, misconceptionId: "C02-M1", value: "F_T_F" },
        { key: "B", text: t`T, F, F`, correct: false, misconceptionId: "C02-M3", value: "T_F_F" },
        { key: "C", text: t`T, T, T`, correct: false, misconceptionId: "C02-M4", value: "T_T_T" },
        { key: "D", text: t`T, T, F`, correct: true, value: "T_T_F" },
      ],
      solution: {
        steps: [
          t`$p \to q$ is $F \to F$: the antecedent is F, so it is T.`,
          t`$p \leftrightarrow q$ is $F \leftrightarrow F$: the parts agree, so it is T.`,
          t`$\sim q$ is T, so $p \leftrightarrow \sim q$ is $F \leftrightarrow T = F$. The truth values are T, T, F.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.1 Ex 1.1 Q.3 (v)" },
      stem: t`Write the truth values of these statements, in order. (i) If $3 \times 5 = 8$ then $3 + 5 = 15$. (ii) 24 is a composite number or 17 is a prime number. (iii) 4 is odd if and only if 1 is prime.`,
      verify: { kind: "value", inputs: { p1: "False", q1: "False", p2: "True", q2: "True", p3: "False", q3: "False" }, params: { stmts: ["Implies(p1, q1)", "Or(p2, q2)", "Equivalent(p3, q3)"] } },
      options: [
        { key: "A", text: t`T, T, F`, correct: false, misconceptionId: "C02-M3", value: "T_T_F" },
        { key: "B", text: t`T, T, T`, correct: true, value: "T_T_T" },
        { key: "C", text: t`F, T, T`, correct: false, misconceptionId: "C02-M1", value: "F_T_T" },
        { key: "D", text: t`T, F, T`, correct: false, misconceptionId: "C02-M2", value: "T_F_T" },
      ],
      solution: {
        steps: [
          t`(i) $3 \times 5 = 8$ is F and $3 + 5 = 15$ is F. A false antecedent makes it T: $F \to F = T$.`,
          t`(ii) 24 is composite (T) and 17 is prime (T). “Or” allows both: $T \vee T = T$.`,
          t`(iii) “4 is odd” is F, and “1 is prime” is F (a prime has exactly two factors). $F \leftrightarrow F = T$.`,
          t`The truth values are T, T, T.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.1 Solved Ex.2 (iv)" },
      stem: t`Write the truth values of these statements, in order. (i) 7 is neither even nor prime. (ii) The Sun rises in the West if and only if milk is white. (iii) If $2 + 2 = 5$ then $3 + 3 = 6$.`,
      verify: { kind: "value", inputs: { p1: "False", q1: "True", p2: "False", q2: "True", p3: "False", q3: "True" }, params: { stmts: ["Nor(p1, q1)", "Equivalent(p2, q2)", "Implies(p3, q3)"] } },
      options: [
        { key: "A", text: t`T, F, T`, correct: false, misconceptionId: "C02-M5", value: "T_F_T" },
        { key: "B", text: t`F, F, T`, correct: true, value: "F_F_T" },
        { key: "C", text: t`F, F, F`, correct: false, misconceptionId: "C02-M1", value: "F_F_F" },
        { key: "D", text: t`F, T, T`, correct: false, misconceptionId: "C02-M4", value: "F_T_T" },
      ],
      solution: {
        steps: [
          t`(i) Let $p$: 7 is even (F), $q$: 7 is prime (T). It is $\sim p \wedge \sim q$ $= T \wedge F = F$.`,
          t`(ii) “The Sun rises in the West” is F and “milk is white” is T. $F \leftrightarrow T = F$.`,
          t`(iii) $2 + 2 = 5$ is F and $3 + 3 = 6$ is T. $F \to T = T$.`,
          t`The truth values are F, F, T.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`$p$ is T and $q$ is T. Write the truth values of $p \vee q$, $\sim p \to q$ and $\sim p \leftrightarrow q$, in that order.`,
      verify: { kind: "value", inputs: { p: "True", q: "True" }, params: { stmts: ["Or(p, q)", "Implies(Not(p), q)", "Equivalent(Not(p), q)"] } },
      options: [
        { key: "A", text: t`T, T, T`, correct: false, misconceptionId: "C02-M4", value: "T_T_T" },
        { key: "B", text: t`T, T, F`, correct: true, value: "T_T_F" },
        { key: "C", text: t`T, F, F`, correct: false, misconceptionId: "C02-M1", value: "T_F_F" },
        { key: "D", text: t`F, T, F`, correct: false, misconceptionId: "C02-M2", value: "F_T_F" },
      ],
      solution: {
        steps: [
          t`$p \vee q$ is $T \vee T = T$: “or” is true when both parts are true.`,
          t`$\sim p$ is F, so $\sim p \to q$ is $F \to T = T$.`,
          t`$\sim p \leftrightarrow q$ is $F \leftrightarrow T$: the parts differ, so it is F. The truth values are T, T, F.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.1 Ex 1.1 Q.2 (iv)" },
      stem: t`Write the truth values of these statements, in order. (i) 9 is neither even nor a perfect square. (ii) $2 + 3 = 6$ if and only if $2 \times 3 = 5$. (iii) 12 is divisible by 3 or 12 is divisible by 4.`,
      verify: { kind: "value", inputs: { p1: "False", q1: "True", p2: "False", q2: "False", p3: "True", q3: "True" }, params: { stmts: ["Nor(p1, q1)", "Equivalent(p2, q2)", "Or(p3, q3)"] } },
      options: [
        { key: "A", text: t`F, T, T`, correct: true, value: "F_T_T" },
        { key: "B", text: t`F, T, F`, correct: false, misconceptionId: "C02-M2", value: "F_T_F" },
        { key: "C", text: t`F, F, T`, correct: false, misconceptionId: "C02-M3", value: "F_F_T" },
        { key: "D", text: t`T, T, T`, correct: false, misconceptionId: "C02-M5", value: "T_T_T" },
      ],
      solution: {
        steps: [
          t`(i) Let $p$: 9 is even (F), $q$: 9 is a perfect square (T, as $9 = 3^2$). It is $\sim p \wedge \sim q$ $= T \wedge F = F$.`,
          t`(ii) $2 + 3 = 6$ is F and $2 \times 3 = 5$ is F. $F \leftrightarrow F = T$.`,
          t`(iii) 12 is divisible by 3 (T) and by 4 (T). $T \vee T = T$.`,
          t`The truth values are F, T, T.`,
        ],
      },
    },
  ],
};
