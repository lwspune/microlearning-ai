import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`$p \vee (p \wedge q) \equiv p$ is a law. Swap every $\wedge$ with $\vee$ to get $p \wedge (p \vee q) \equiv p$. **Is that still a law?**`,
    reveal: t`Yes. If $p$ is T, then $p \vee q$ is T, so both sides are T. If $p$ is F, the $\wedge$ makes the left side F too. Swapping $\wedge$ and $\vee$ always turns a law into another law: this is the **principle of duality**.`,
  },
  explanation: {
    intuition: [
      t`$p \wedge q$ is T only when both parts are T.`,
      t`$p \vee q$ is F only when both parts are F: $\wedge$ and $\vee$ are mirror images.`,
      t`Let $t$ be a statement that is always true and $c$ one that is always false.`,
      t`The **dual** of a statement swaps every $\wedge$ with $\vee$, and every $t$ with $c$.`,
      t`The letters and every $\sim$ stay exactly where they are.`,
      t`So the dual of $\sim p \vee t$ is $\sim p \wedge c$.`,
    ],
    formal: [
      {
        title: "Forming the dual",
        points: [
          t`The dual is taken of a statement built with $\wedge$, $\vee$, $\sim$ and the constants $t$, $c$.`,
          t`Change each $\wedge$ to $\vee$ and each $\vee$ to $\wedge$.`,
          t`Change each $t$ to $c$ and each $c$ to $t$.`,
          t`Keep every letter, every $\sim$ and every bracket where it is.`,
          t`The dual of $(p \wedge q) \vee r$ is $(p \vee q) \wedge r$.`,
          t`Taking the dual twice gives back the statement you started with.`,
        ],
      },
      {
        title: "Swap t and c too",
        points: [
          t`$t$ and $c$ are partners like $\wedge$ and $\vee$: $p \vee c \equiv p$ and $p \wedge t \equiv p$.`,
          t`So they swap along with the connectives.`,
          t`The dual of $t \vee (p \vee q)$ is $c \wedge (p \wedge q)$.`,
          t`Writing $t \wedge (p \wedge q)$ is wrong: the $t$ must become $c$.`,
        ],
      },
      {
        title: "The negation sign stays",
        points: [
          t`The dual never adds or removes a $\sim$.`,
          t`The dual of $p \wedge \sim q$ is $p \vee \sim q$.`,
          t`A connective inside $\sim(\;)$ still swaps: the dual of $\sim(q \vee r)$ is $\sim(q \wedge r)$.`,
          t`Only the $\sim$ sign itself stays, not the bracket after it.`,
          t`Putting a $\sim$ on each letter as well gives $\sim p \vee q$, the **negation** of $p \wedge \sim q$, not its dual.`,
        ],
      },
      {
        title: "Every connective, inside and out",
        points: [
          t`The **main connective** is the one that joins the outermost parts.`,
          t`It swaps, and so does every connective inside the brackets.`,
          t`The dual of $(p \vee q) \wedge (r \vee s)$ is $(p \wedge q) \vee (r \wedge s)$.`,
          t`Swapping only the main one gives $(p \vee q) \vee (r \vee s)$: wrong.`,
          t`Swapping only the inner ones gives $(p \wedge q) \wedge (r \wedge s)$: wrong too.`,
          t`Check: the dual has as many $\wedge$ as the statement had $\vee$, and the other way round.`,
        ],
      },
      {
        title: "The principle of duality",
        points: [
          t`If two statements are equivalent, their duals are equivalent too.`,
          t`So laws come in pairs: the dual of a law is again a law.`,
          t`$(p \vee q) \vee r$ $\equiv p \vee (q \vee r)$ gives $(p \wedge q) \wedge r$ $\equiv p \wedge (q \wedge r)$.`,
          t`$\sim(p \wedge q)$ $\equiv \sim p \vee \sim q$ gives $\sim(p \vee q)$ $\equiv \sim p \wedge \sim q$.`,
          t`$p \vee \sim p \equiv t$ gives $p \wedge \sim p \equiv c$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the dual of $p \wedge [\sim q \vee (p \wedge q)$ $\vee \sim r]$.`,
      steps: [
        t`The main connective is the $\wedge$ after $p$; it becomes $\vee$: $p \vee [\;\dots\;]$.`,
        t`In the square bracket, each $\vee$ becomes $\wedge$: $\sim q \wedge (\;\dots\;) \wedge \sim r$.`,
        t`In the round bracket, $p \wedge q$ becomes $p \vee q$.`,
        t`The $\sim$ on $q$ and on $r$ stay; there is no $t$ or $c$ to swap.`,
      ],
      answer: t`The dual is $p \vee [\sim q \wedge (p \vee q)$ $\wedge \sim r]$.`,
    },
    visualSpec: t`Type a statement; each $\wedge$, $\vee$, $t$ and $c$ flips one by one with a highlight while the letters and $\sim$ stay grey, building the dual beside it.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Swaps $\wedge$ and $\vee$ but leaves the constants $t$ and $c$ unchanged`,
      remediation: t`The dual swaps the constants too: every $t$ becomes $c$ and every $c$ becomes $t$, along with $\wedge$ and $\vee$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Takes the dual to be the negation, putting a $\sim$ on every letter as well as swapping`,
      remediation: t`The dual leaves every letter and every $\sim$ as it is; only $\wedge$, $\vee$, $t$ and $c$ change. Putting $\sim$ on each letter as well gives the negation, a different statement.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Swaps only the main connective, leaving the connectives inside the brackets unchanged",
      remediation: t`Swap every $\wedge$ and $\vee$ in the statement: the ones inside the brackets as well as the main one between them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Swaps the connectives inside the brackets but misses the main connective",
      remediation: t`The main connective, the one joining the outermost parts, swaps too: every $\wedge$ and $\vee$ in the statement changes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Reads '$\sim$ stays as it is' as 'leave the bracket after a $\sim$ unchanged'`,
      remediation: t`Only the $\sim$ sign itself stays. A connective inside $\sim(\;)$ still swaps: the dual of $\sim(q \vee r)$ is $\sim(q \wedge r)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`Options are compared by truth column (a named answer such as TFFF, read down the rows in the standard order, with $t$ true and $c$ false). Equivalent statements have equivalent duals, so the dual is fixed up to equivalence and any equivalent form of an option matches it.`,
    t`C09-M3 and C09-M4 give the key when the brackets hold the same connective as the main one, as in $p \wedge (q \wedge r)$: diagnose them only on statements whose brackets hold the other connective, as in every item here. C09-M1 needs a $t$ or $c$; C09-M5 needs a connective under a $\sim$.`,
    t`C09-Q2's C09-M4 option, $t \vee \{p \vee (q \wedge r)\}$, is the answer printed in the textbook's key for Ex 1.3 Q.2 (viii), a misprint.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.2 (i)" },
      stem: t`The dual of $p \vee (q \wedge r)$ is:`,
      verify: { kind: "value", inputs: { f: "Or(p, And(q, r))" } },
      options: [
        { key: "A", text: t`$p \wedge (q \wedge r)$`, correct: false, misconceptionId: "C09-M3", value: "TFFFFFFF" },
        { key: "B", text: t`$p \vee (q \vee r)$`, correct: false, misconceptionId: "C09-M4", value: "TTTTTTTF" },
        { key: "C", text: t`$p \wedge (q \vee r)$`, correct: true, value: "TTTFFFFF" },
        { key: "D", text: t`$\sim p \wedge (\sim q \vee \sim r)$`, correct: false, misconceptionId: "C09-M2", value: "FFFFFTTT" },
      ],
      solution: {
        steps: [
          t`The main connective $\vee$ becomes $\wedge$: $p \wedge (\;\dots\;)$.`,
          t`Inside the bracket, $q \wedge r$ becomes $q \vee r$.`,
          t`The dual is $p \wedge (q \vee r)$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.2 (viii)" },
      stem: t`Here $t$ is a tautology and $c$ a contradiction. The dual of $c \vee \{p \wedge (q \vee r)\}$ is:`,
      verify: { kind: "value", inputs: { f: "Or(c, And(p, Or(q, r)))" } },
      options: [
        { key: "A", text: t`$t \wedge \{p \vee (q \wedge r)\}$`, correct: true, value: "TTTTTFFF" },
        { key: "B", text: t`$c \wedge \{p \vee (q \wedge r)\}$`, correct: false, misconceptionId: "C09-M1", value: "FFFFFFFF" },
        { key: "C", text: t`$t \wedge \{p \wedge (q \vee r)\}$`, correct: false, misconceptionId: "C09-M3", value: "TTTFFFFF" },
        { key: "D", text: t`$t \vee \{p \vee (q \wedge r)\}$`, correct: false, misconceptionId: "C09-M4", value: "TTTTTTTT" },
      ],
      solution: {
        steps: [
          t`The constant $c$ becomes $t$, and the main $\vee$ becomes $\wedge$: $t \wedge \{\;\dots\;\}$.`,
          t`Inside the braces, $p \wedge (q \vee r)$ becomes $p \vee (q \wedge r)$.`,
          t`The dual is $t \wedge \{p \vee (q \wedge r)\}$.`,
          t`The textbook's key prints $t \vee \{\;\dots\;\}$, a misprint: the main connective swaps too.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.2 (vii)" },
      stem: t`The dual of $[\sim(p \vee q)]$ $\wedge [p \vee \sim(q \wedge \sim s)]$ is:`,
      verify: { kind: "value", inputs: { f: "And(Not(Or(p, q)), Or(p, Not(And(q, Not(s)))))" } },
      options: [
        { key: "A", text: t`$[\sim(\sim p \wedge \sim q)]$ $\vee [\sim p$ $\wedge \sim(\sim q \vee s)]$`, correct: false, misconceptionId: "C09-M2", value: "TTTTTTFF" },
        { key: "B", text: t`$[\sim(p \vee q)]$ $\vee [p \vee \sim(q \wedge \sim s)]$`, correct: false, misconceptionId: "C09-M3", value: "TTTTTFTT" },
        { key: "C", text: t`$[\sim(p \vee q)]$ $\vee [p \wedge \sim(q \wedge \sim s)]$`, correct: false, misconceptionId: "C09-M5", value: "TFTTFFTT" },
        { key: "D", text: t`$[\sim(p \wedge q)]$ $\vee [p \wedge \sim(q \vee \sim s)]$`, correct: true, value: "FFTTTTTT" },
      ],
      solution: {
        steps: [
          t`The main $\wedge$ becomes $\vee$; the square brackets stay.`,
          t`First bracket: $\sim(p \vee q)$ becomes $\sim(p \wedge q)$. The $\sim$ stays; the $\vee$ under it swaps.`,
          t`Second bracket: $p \vee \sim(q \wedge \sim s)$ becomes $p \wedge \sim(q \vee \sim s)$.`,
          t`The dual is $[\sim(p \wedge q)]$ $\vee [p \wedge \sim(q \vee \sim s)]$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1 Duals (vii)" },
      stem: t`Here $t$ is a tautology and $c$ a contradiction. The dual of $(p \wedge t)$ $\vee (c \wedge \sim q)$ is:`,
      verify: { kind: "value", inputs: { f: "Or(And(p, t), And(c, Not(q)))" } },
      options: [
        { key: "A", text: t`$(p \vee c) \wedge (t \vee \sim q)$`, correct: true, value: "TTFF" },
        { key: "B", text: t`$(p \vee t) \wedge (c \vee \sim q)$`, correct: false, misconceptionId: "C09-M1", value: "FTFT" },
        { key: "C", text: t`$(\sim p \vee c) \wedge (t \vee q)$`, correct: false, misconceptionId: "C09-M2", value: "FFTT" },
        { key: "D", text: t`$(p \wedge c) \wedge (t \wedge \sim q)$`, correct: false, misconceptionId: "C09-M3", value: "FFFF" },
      ],
      solution: {
        steps: [
          t`The main $\vee$ becomes $\wedge$, and each $\wedge$ in the brackets becomes $\vee$.`,
          t`The constants swap: $t$ becomes $c$ and $c$ becomes $t$. The $\sim q$ stays.`,
          t`The dual is $(p \vee c) \wedge (t \vee \sim q)$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1 Duals (iv)" },
      stem: t`Here $t$ is a tautology and $c$ a contradiction. The dual of $(p \vee q) \wedge t$ is:`,
      verify: { kind: "value", inputs: { f: "And(Or(p, q), t)" } },
      options: [
        { key: "A", text: t`$(\sim p \wedge \sim q) \vee c$`, correct: false, misconceptionId: "C09-M2", value: "FFFT" },
        { key: "B", text: t`$(p \wedge q) \wedge c$`, correct: false, misconceptionId: "C09-M4", value: "FFFF" },
        { key: "C", text: t`$(p \wedge q) \vee c$`, correct: true, value: "TFFF" },
        { key: "D", text: t`$(p \wedge q) \vee t$`, correct: false, misconceptionId: "C09-M1", value: "TTTT" },
      ],
      solution: {
        steps: [
          t`$p \vee q$ becomes $p \wedge q$, and the main $\wedge$ becomes $\vee$.`,
          t`The constant $t$ becomes $c$.`,
          t`The dual is $(p \wedge q) \vee c$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "authored" },
      stem: t`The dual of $\sim(p \wedge q)$ $\vee (p \wedge \sim q)$ is:`,
      verify: { kind: "value", inputs: { f: "Or(Not(And(p, q)), And(p, Not(q)))" } },
      options: [
        { key: "A", text: t`$\sim(p \wedge q)$ $\wedge (p \vee \sim q)$`, correct: false, misconceptionId: "C09-M5", value: "FTFT" },
        { key: "B", text: t`$\sim(p \vee q)$ $\wedge (p \vee \sim q)$`, correct: true, value: "FFFT" },
        { key: "C", text: t`$\sim(\sim p \vee \sim q)$ $\wedge (\sim p \vee q)$`, correct: false, misconceptionId: "C09-M2", value: "TFFF" },
        { key: "D", text: t`$\sim(p \vee q)$ $\vee (p \vee \sim q)$`, correct: false, misconceptionId: "C09-M4", value: "TTFT" },
      ],
      solution: {
        steps: [
          t`$\sim(p \wedge q)$ becomes $\sim(p \vee q)$: the $\sim$ stays, the $\wedge$ under it swaps.`,
          t`The main $\vee$ becomes $\wedge$, and $p \wedge \sim q$ becomes $p \vee \sim q$.`,
          t`The dual is $\sim(p \vee q)$ $\wedge (p \vee \sim q)$.`,
        ],
      },
    },
  ],
};
