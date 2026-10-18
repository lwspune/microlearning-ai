import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Asha says: **Every student in our class passed the test.** Ravi wants to prove her wrong. Must he show that every student failed, or is less enough?`,
    reveal: t`Less is enough: one student who failed. The opposite of **all passed** is **at least one did not pass**, not **all failed**. To negate a for all statement, switch to there exists and negate the condition.`,
  },
  explanation: {
    intuition: [
      t`A **quantifier** says for how many members of a set a condition $P(x)$, such as $x + 3 > 5$, must hold.`,
      t`$\forall$, read **for all** or **for every**, claims the condition for every member of the set.`,
      t`$\exists$, read **there exists**, claims it for at least one member; in words we often say **some**.`,
      t`One member that fails makes a $\forall$ statement false; one member that works makes an $\exists$ statement true.`,
      t`To negate a quantified statement, swap $\forall$ and $\exists$, and negate the condition.`,
      t`So the negation of **all are** is **some are not**, and the negation of **some are** is **none are**.`,
    ],
    formal: [
      {
        title: "Truth of a for all statement",
        points: [
          t`$\forall x \in A$, $P(x)$ is true only when **every** member of $A$ makes $P(x)$ true.`,
          t`Take $A = \{2, 4, 6, 8\}$ and $\forall x \in A$, $x + 3 > 4$.`,
          t`Every member works: even the smallest, $x = 2$, gives $5 > 4$. So the statement is T.`,
          t`A **counterexample** is a member of $A$ that makes $P(x)$ false.`,
          t`For $\forall x \in A$, $x + 3 > 6$: $x = 2$ gives $5 > 6$, which is false. So the statement is F.`,
          t`One member that works proves nothing here: $x = 8$ gives $11 > 6$, yet the statement is F.`,
        ],
      },
      {
        title: "Truth of a there exists statement",
        points: [
          t`$\exists x \in A$ such that $P(x)$ is true when **at least one** member of $A$ makes $P(x)$ true.`,
          t`With $A = \{2, 4, 6, 8\}$: $\exists x \in A$ such that $x + 3 = 9$ is T, since $x = 6$ works.`,
          t`Members that fail do not matter: $x = 2$ fails, but one member that works is enough.`,
          t`The member must be in $A$: $\exists x \in A$ such that $x + 3 = 8$ needs $x = 5$.`,
          t`Since $5 \notin A$, no member works, so that statement is F.`,
          t`An $\exists$ statement is F only when **no** member of $A$ makes $P(x)$ true.`,
        ],
      },
      {
        title: "Negating a quantified statement",
        points: [
          t`$\sim(\forall x \in A, P(x))$ $\equiv \exists x \in A$ such that $\sim P(x)$.`,
          t`$\sim(\exists x \in A$ such that $P(x))$ $\equiv \forall x \in A, \sim P(x)$.`,
          t`Make both changes: swap the quantifier **and** negate the condition. The set $A$ stays the same.`,
          t`Why: **every member works** is false exactly when **at least one member fails**.`,
          t`And **some member works** is false exactly when **every member fails**.`,
          t`Check your answer: a statement and its negation always have opposite truth values.`,
        ],
      },
      {
        title: "Negating the condition",
        points: [
          t`The negation of an inequality takes every case it leaves out, equality included.`,
          t`$\sim(x > a)$ is $x \leq a$, and $\sim(x < a)$ is $x \geq a$.`,
          t`$\sim(x \geq a)$ is $x < a$, and $\sim(x \leq a)$ is $x > a$.`,
          t`Reversing the sign is wrong: when $x = a$, both $x > a$ and $x < a$ are false.`,
          t`Example: $\sim(\forall x \in A, 2x > 5)$ $\equiv \exists x \in A$ such that $2x \leq 5$.`,
          t`$\sim(x = a)$ is $x \neq a$, and **is odd** becomes **is not odd**.`,
        ],
      },
      {
        title: "Negating statements in words",
        points: [
          t`**All** and **every** mean $\forall$; **some** and **at least one** mean $\exists$.`,
          t`**All natural numbers are rational** negates to **Some natural numbers are not rational**.`,
          t`**Some students of class X are sixteen** negates to **No student of class X is sixteen**.`,
          t`**No** means **for all, not**: no student is sixteen says every student is not sixteen.`,
          t`Keeping the quantifier fails: **All students passed** and **No student passed** are both F when only some passed.`,
          t`A true negation is F whenever the statement is T, and T whenever it is F.`,
        ],
      },
    ],
    worked: {
      prompt: t`Let $A = \{1, 2, 3, 4, 5, 6, 7\}$. Find the truth value of $\forall x \in A$, $x + 1 \geq 3$, and write its negation.`,
      steps: [
        t`$\forall$ needs every member of $A$ to work. Try the smallest, $x = 1$: $1 + 1 = 2$, and $2 \geq 3$ is false.`,
        t`$x = 1$ is a counterexample, so the statement is F. Members $2$ to $7$ work, but that is not enough.`,
        t`Negation: swap $\forall$ for $\exists$, and negate $\geq$ to $<$: $\exists x \in A$ such that $x + 1 < 3$.`,
        t`Check: $x = 1$ gives $2 < 3$, so the negation is T, the opposite of the statement, as it must be.`,
      ],
      answer: t`The statement is F. Its negation is $\exists x \in A$ such that $x + 1 < 3$, which is T.`,
    },
    visualSpec: t`The members of $A$ sit as tiles; type a condition and each tile lights green or red, the $\forall$ and $\exists$ verdicts update, and a Negate button swaps the quantifier and the condition.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Takes one member that works as proof of a for all statement: thinks $\forall x \in A$, $P(x)$ is T when some $x$ in $A$ works`,
      remediation: t`A $\forall$ statement claims the condition for **every** member of $A$. Look for a counterexample: one member that fails makes it F.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Reads $\exists$ as for all: thinks a there exists statement is F as soon as one member of $A$ fails`,
      remediation: t`$\exists x \in A$ such that $P(x)$ needs just **one** member that works. Members that fail do not matter; it is F only when no member works.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Negates only the condition and keeps the quantifier: $\sim(\forall x, P(x)) \equiv \forall x, \sim P(x)$`,
      remediation: t`Swap the quantifier too: $\sim(\forall x, P(x))$ is $\exists x$ such that $\sim P(x)$. **Not all work** means **some fail**, not **none work**.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: t`Swaps the quantifier but keeps the condition: $\sim(\forall x, P(x)) \equiv \exists x$ such that $P(x)$`,
      remediation: t`Negate the condition as well: $\sim(\forall x, P(x))$ is $\exists x$ such that $\sim P(x)$, and $\sim(\exists x, P(x))$ is $\forall x, \sim P(x)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Negates an inequality by reversing its sign: takes $\sim(x > a)$ as $x < a$`,
      remediation: t`A negation takes every case left out, equality included: $\sim(x > a)$ is $x \leq a$, and $\sim(x \leq a)$ is $x > a$.`,
      fallback: { kind: "ext", topic: "inequalities" },
    },
    {
      id: "C08-M6",
      mistake: t`Ignores the set $A$ and judges the statement over all numbers: solves $x + 8 = 18$ and says T, though $10 \notin A$`,
      remediation: t`$x \in A$ limits $x$ to the members of $A$. Check only those: a solution outside $A$ does not count, and a failure outside $A$ does not matter.`,
      fallback: { kind: "ext", topic: "sets" },
    },
  ],
  engineNotes: [
    t`C08-M1 differs from the key only on a $\forall$ statement that some but not all members satisfy; C08-M2 only on an $\exists$ statement that some but not all satisfy; C08-M6 only where the truth value over the integers differs from that over $A$. The count items (C08-Q1, Q2) mix such statements so that the four counts differ.`,
    "C08-M5 applies only to an inequality condition; a negation item with an equation needs another distractor.",
    t`Negation options are named answers such as exists_le ($\exists$, condition $\leq$); the key is the form whose truth value is the opposite one on every set of one or two integers.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.1 (i)" },
      stem: t`Let $A = \{3, 5, 7, 9, 11, 12\}$. How many of these four statements are true? (i) $\exists x \in A$ such that $x - 8 = 1$; (ii) $\forall x \in A$, $x$ is an even number; (iii) $\exists x \in A$ such that $3x + 8 > 40$; (iv) $\forall x \in A$, $2x + 9 > 14$.`,
      verify: { kind: "value", inputs: { A: "FiniteSet(3, 5, 7, 9, 11, 12)" }, params: { ask: "count", s: ["exists|Eq(x - 8, 1)", "forall|Eq(Mod(x, 2), 0)", "exists|3*x + 8 > 40", "forall|2*x + 9 > 14"] } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C08-M1", value: "4" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C08-M2", value: "1" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C08-M6", value: "2" },
      ],
      solution: {
        steps: [
          t`(i) $x = 9$ is in $A$ and $9 - 8 = 1$: T. (ii) $3 \in A$ is odd, a counterexample: F.`,
          t`(iii) $x = 11$ gives $3(11) + 8 = 41 > 40$: T.`,
          t`(iv) The smallest member, $3$, gives $2(3) + 9 = 15 > 14$, so every member works: T.`,
          t`Statements (i), (iii) and (iv) are true: **3**.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc Q.4 (i)" },
      stem: t`Let $A = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$. How many of these four statements are true? (i) $\exists x \in A$ such that $x + 8 = 18$; (ii) $\forall x \in A$, $x + 5 < 12$; (iii) $\exists x \in A$ such that $x + 7 \geq 11$; (iv) $\forall x \in A$, $3x \leq 25$.`,
      verify: { kind: "value", inputs: { A: "FiniteSet(1, 2, 3, 4, 5, 6, 7, 8, 9)" }, params: { ask: "count", s: ["exists|Eq(x + 8, 18)", "forall|x + 5 < 12", "exists|x + 7 >= 11", "forall|3*x <= 25"] } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C08-M1", value: "3" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C08-M6", value: "2" },
        { key: "D", text: t`$1$`, correct: true, value: "1" },
      ],
      solution: {
        steps: [
          t`(i) $x + 8 = 18$ needs $x = 10$, and $10 \notin A$: F.`,
          t`(ii) $x = 7$ gives $12 < 12$, which is false; a counterexample, so F.`,
          t`(iii) $x = 4$ gives $11 \geq 11$: T. (iv) $x = 9$ gives $27 \leq 25$, which is false: F.`,
          t`Only (iii) is true: **1**.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc Q.5 (i)" },
      stem: t`Let $A = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$. The negation of $\forall n \in A$, $n + 7 > 6$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "negate", q: "forall", rel: "gt", lhs: "x + 7", rhs: "6" } },
      options: [
        { key: "A", text: t`$\forall n \in A$, $n + 7 \leq 6$`, correct: false, misconceptionId: "C08-M3", value: "forall_le" },
        { key: "B", text: t`$\exists n \in A$ such that $n + 7 > 6$`, correct: false, misconceptionId: "C08-M4", value: "exists_gt" },
        { key: "C", text: t`$\exists n \in A$ such that $n + 7 < 6$`, correct: false, misconceptionId: "C08-M5", value: "exists_lt" },
        { key: "D", text: t`$\exists n \in A$ such that $n + 7 \leq 6$`, correct: true, value: "exists_le" },
      ],
      solution: {
        steps: [
          t`Swap $\forall$ for $\exists$; the set $A$ stays.`,
          t`Negate $n + 7 > 6$: not greater means $n + 7 \leq 6$.`,
          t`Negation: $\exists n \in A$ such that $n + 7 \leq 6$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.3 Ex 1.3 Q.3 (ix)" },
      stem: t`The negation of $\exists x \in N$ such that $x - 17 < 20$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "negate", q: "exists", rel: "lt", lhs: "x - 17", rhs: "20" } },
      options: [
        { key: "A", text: t`$\forall x \in N$, $x - 17 < 20$`, correct: false, misconceptionId: "C08-M4", value: "forall_lt" },
        { key: "B", text: t`$\forall x \in N$, $x - 17 > 20$`, correct: false, misconceptionId: "C08-M5", value: "forall_gt" },
        { key: "C", text: t`$\forall x \in N$, $x - 17 \geq 20$`, correct: true, value: "forall_ge" },
        { key: "D", text: t`$\exists x \in N$ such that $x - 17 \geq 20$`, correct: false, misconceptionId: "C08-M3", value: "exists_ge" },
      ],
      solution: {
        steps: [
          t`Swap $\exists$ for $\forall$; the set $N$ stays.`,
          t`Negate $x - 17 < 20$: not less means $x - 17 \geq 20$.`,
          t`Negation: $\forall x \in N$, $x - 17 \geq 20$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc Q.5 (ii)" },
      stem: t`Let $A = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$. The negation of $\exists x \in A$ such that $x + 9 \leq 15$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "negate", q: "exists", rel: "le", lhs: "x + 9", rhs: "15" } },
      options: [
        { key: "A", text: t`$\forall x \in A$, $x + 9 \geq 15$`, correct: false, misconceptionId: "C08-M5", value: "forall_ge" },
        { key: "B", text: t`$\forall x \in A$, $x + 9 > 15$`, correct: true, value: "forall_gt" },
        { key: "C", text: t`$\exists x \in A$ such that $x + 9 > 15$`, correct: false, misconceptionId: "C08-M3", value: "exists_gt" },
        { key: "D", text: t`$\forall x \in A$, $x + 9 \leq 15$`, correct: false, misconceptionId: "C08-M4", value: "forall_le" },
      ],
      solution: {
        steps: [
          t`Swap $\exists$ for $\forall$; the set $A$ stays.`,
          t`Negate $x + 9 \leq 15$: not at most $15$ means $x + 9 > 15$.`,
          t`Negation: $\forall x \in A$, $x + 9 > 15$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc I (vii)" },
      stem: t`Let $A = \{1, 2, 3, 4, 5\}$. The negation of $\forall x \in A$, $x + 6 \geq 9$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "negate", q: "forall", rel: "ge", lhs: "x + 6", rhs: "9" } },
      options: [
        { key: "A", text: t`$\exists x \in A$ such that $x + 6 \geq 9$`, correct: false, misconceptionId: "C08-M4", value: "exists_ge" },
        { key: "B", text: t`$\exists x \in A$ such that $x + 6 \leq 9$`, correct: false, misconceptionId: "C08-M5", value: "exists_le" },
        { key: "C", text: t`$\exists x \in A$ such that $x + 6 < 9$`, correct: true, value: "exists_lt" },
        { key: "D", text: t`$\forall x \in A$, $x + 6 < 9$`, correct: false, misconceptionId: "C08-M3", value: "forall_lt" },
      ],
      solution: {
        steps: [
          t`Swap $\forall$ for $\exists$; the set $A$ stays.`,
          t`Negate $x + 6 \geq 9$: not at least $9$ means $x + 6 < 9$.`,
          t`Negation: $\exists x \in A$ such that $x + 6 < 9$. It is T: $x = 1$ gives $7 < 9$.`,
        ],
      },
    },
  ],
};
