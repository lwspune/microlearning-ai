import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Ten cards bear the numbers 1 to 10. One card is drawn. Riya says only two numbers are complete squares: 4 and 9. **Is she right?**`,
    reveal: t`No. $1 = 1^2$ is a complete square too. The event is $\{1, 4, 9\}$, so it has $3$ sample points, not $2$.`,
  },
  explanation: {
    intuition: [
      t`An experiment has many possible outcomes; the sample space $S$ lists them all.`,
      t`Often we care only about some of them, like an even number on a die.`,
      t`A **condition** is the rule an outcome must meet, such as 'the number is even'.`,
      t`The outcomes that meet the condition form a set, called an **event**.`,
      t`For one die and 'even number', the event is $\{2, 4, 6\}$.`,
      t`Counting the outcomes in the event tells us how many ways it can happen.`,
    ],
    formal: [
      {
        title: "Event and its sample points",
        points: [
          t`An **event** is the set of outcomes of $S$ that meet a given condition.`,
          t`Events are named by capital letters $A$, $B$, $C$; each event is a subset of $S$.`,
          t`$n(A)$ is the **number of sample points** in event $A$, that is, how many outcomes it has.`,
          t`One die, $A$: even number on the upper face. $A = \{2, 4, 6\}$, so $n(A) = 3$.`,
          t`One die, $C$: prime number on the upper face. $C = \{2, 3, 5\}$, so $n(C) = 3$.`,
          t`A **prime number** has exactly two factors, $1$ and itself, so $1$ is not a prime.`,
        ],
      },
      {
        title: "Reading the condition",
        points: [
          t`Go through $S$ one outcome at a time and keep each outcome that meets the condition.`,
          t`**At least one** head means one head or more: $1$ head or $2$ heads, and so on.`,
          t`**At most one** tail means one tail or fewer: $0$ tails or $1$ tail.`,
          t`**Minimum** $9$ means $9$ or more; **maximum** $9$ means $9$ or less. The boundary $9$ is included.`,
          t`Two coins, $B$: to get no head. Only $TT$ has no head, so $B = \{TT\}$ and $n(B) = 1$.`,
          t`Cards 1 to 50, $D$: divisible by $6$. $D = \{6, 12, 18, 24, 30, 36, 42, 48\}$, so $n(D) = 8$.`,
        ],
      },
      {
        title: "Count outcomes, not sums",
        points: [
          t`With two dice, an outcome is an ordered pair: (first die, second die).`,
          t`$(1, 3)$ and $(3, 1)$ are two different outcomes, just as $HT$ and $TH$ are for two coins.`,
          t`A double like $(2, 2)$ is only one outcome: it cannot be turned round.`,
          t`So the sum $4$ comes from $3$ outcomes: $(1, 3)$, $(2, 2)$ and $(3, 1)$.`,
          t`$n(A)$ counts these outcomes, not the different sums.`,
          t`In a committee, order does not matter: $B_1G_1$ and $G_1B_1$ are the same committee.`,
        ],
      },
      {
        title: "Sure and impossible events",
        points: [
          t`A **sure event** contains every outcome of $S$, so $A = S$ and $n(A) = n(S)$.`,
          t`One die, 'the number is less than $7$' is a sure event: $n(A) = 6$.`,
          t`An **impossible event** has no outcome at all.`,
          t`It is the **empty set**, written $\emptyset$ or $\{\ \}$, so $n(A) = 0$.`,
          t`One die, 'the number is $8$' is an impossible event: $n(A) = 0$.`,
          t`Every other event has some, but not all, of the outcomes of $S$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two dice are rolled. Event $A$: the sum of the digits on the upper faces is a multiple of $5$. Write $A$ and find $n(A)$.`,
      steps: [
        t`Each sum is from $2$ to $12$, so the multiples of $5$ we can get are $5$ and $10$.`,
        t`Sum $5$: (1, 4), (2, 3), (3, 2), (4, 1). Order matters, so these are $4$ outcomes.`,
        t`Sum $10$: (4, 6), (5, 5), (6, 4). The double (5, 5) is one outcome, so $3$ outcomes.`,
        t`$A = \{(1, 4), (2, 3), (3, 2), (4, 1),$ $(4, 6), (5, 5), (6, 4)\}$.`,
        t`$n(A) = 4 + 3 = 7$.`,
      ],
      answer: t`$n(A) = 7$ (seven outcomes, not the two sums $5$ and $10$).`,
    },
    visualSpec: t`Tap each outcome of a sample space grid (two coins, two dice) to test it against a condition; the outcomes that pass light up as the event and $n(A)$ counts up.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Reading 'at least k' or 'at most k' as 'exactly k'",
      remediation: "'At least one' means one or more, and 'at most one' means one or fewer. Keep every outcome from the boundary onwards, not just the boundary.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Leaving the boundary out: 'at least k' or 'minimum k' as 'more than k', 'at most k' as 'less than k'",
      remediation: "'At least', 'at most', 'minimum' and 'maximum' include the boundary itself. 'At least one head' includes outcomes with exactly one head.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Getting order wrong: HT and TH, or (1, 2) and (2, 1), counted as one outcome; or a committee B1G1 and G1B1 counted as two",
      remediation: t`With coins and dice, order matters: $HT$ and $TH$ are two outcomes. In a committee it does not: $B_1G_1$ and $G_1B_1$ are one committee.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: "Counting 1 as a prime number",
      remediation: t`A prime number has exactly two factors, $1$ and itself. $1$ has only one factor, so it is not a prime. The primes on a die are $2$, $3$, $5$.`,
      fallback: { kind: "ext", topic: "prime numbers" },
    },
    {
      id: "C02-M5",
      mistake: "Counting the numbers that meet the condition (the sums, or the prime faces) instead of the outcomes",
      remediation: "An event is a set of outcomes. With two dice, each outcome is a pair, and one sum can come from several pairs: count every pair.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M6",
      mistake: "Swapping the sure and the impossible event",
      remediation: t`An impossible event has no outcome, so $n(A) = 0$. A sure event has every outcome of $S$, so $n(A) = n(S)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M1 and C02-M2 apply only to 'at least', 'at most' and 'minimum' conditions (Q1 to Q4).",
    t`On Q3, C02-M5 also gives $n(A) = 5$ (the five sums 8 to 12), the same as C02-M1; it is not tagged there.`,
    "C02-M4 applies only to prime conditions (Q6); C02-M6 only to sure or impossible events (Q5).",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q2(A)(iii)" },
      stem: t`Two coins are tossed simultaneously. Event $A$: to get at least one head. Write the event $A$ in set form.`,
      verify: { kind: "value", inputs: { k: "1" }, params: { exp: "coins2", cond: "heads_at_least", ask: "set" } },
      options: [
        { key: "A", text: t`$\{HH, HT, TH\}$`, correct: true, value: "{HH, HT, TH}" },
        { key: "B", text: t`$\{HT, TH\}$`, correct: false, misconceptionId: "C02-M1", value: "{HT, TH}" },
        { key: "C", text: t`$\{HH\}$`, correct: false, misconceptionId: "C02-M2", value: "{HH}" },
        { key: "D", text: t`$\{HH, HT\}$`, correct: false, misconceptionId: "C02-M3", value: "{HH, HT}" },
      ],
      solution: {
        steps: [
          t`$S = \{HH, HT, TH, TT\}$.`,
          t`At least one head means one head or two heads.`,
          t`$HT$ and $TH$ have one head each, and $HH$ has two. $TT$ has none.`,
          t`So $A = \{HH, HT, TH\}$ and $n(A) = 3$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q2(v)" },
      stem: t`Three coins are tossed simultaneously. Event $A$: to get at most one tail. Find $n(A)$.`,
      verify: { kind: "value", inputs: { k: "1" }, params: { exp: "coins3", cond: "tails_at_most", ask: "n" } },
      options: [
        { key: "A", text: t`$n(A) = 3$`, correct: false, misconceptionId: "C02-M1", value: "3" },
        { key: "B", text: t`$n(A) = 1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
        { key: "C", text: t`$n(A) = 2$`, correct: false, misconceptionId: "C02-M3", value: "2" },
        { key: "D", text: t`$n(A) = 4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`$S = \{HHH, HHT, HTH, THH,$ $HTT, THT, TTH, TTT\}$, so $n(S) = 8$.`,
          t`At most one tail means $0$ tails or $1$ tail.`,
          t`$0$ tails: $HHH$. $1$ tail: $HHT$, $HTH$, $THH$.`,
          t`$A = \{HHH, HHT, HTH, THH\}$, so $n(A) = 4$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Ex 5.3 Q.1 (2)" },
      stem: t`Two dice are rolled simultaneously. Event $A$: the sum of the digits on the upper faces is minimum $8$. Find $n(A)$.`,
      verify: { kind: "value", inputs: { k: "8" }, params: { exp: "dice2", cond: "sum_at_least", ask: "n" } },
      options: [
        { key: "A", text: t`$n(A) = 9$`, correct: false, misconceptionId: "C02-M3", value: "9" },
        { key: "B", text: t`$n(A) = 15$`, correct: true, value: "15" },
        { key: "C", text: t`$n(A) = 5$`, correct: false, misconceptionId: "C02-M1", value: "5" },
        { key: "D", text: t`$n(A) = 10$`, correct: false, misconceptionId: "C02-M2", value: "10" },
      ],
      solution: {
        steps: [
          t`Minimum $8$ means the sum is $8$ or more: $8$, $9$, $10$, $11$ or $12$.`,
          t`Sum 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2). Sum 9: (3, 6), (4, 5), (5, 4), (6, 3).`,
          t`Sum 10: (4, 6), (5, 5), (6, 4). Sum 11: (5, 6), (6, 5). Sum 12: (6, 6).`,
          t`$n(A) = 5 + 4 + 3 + 2 + 1 = 15$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Ex 5.3 Q.1 (5)" },
      stem: t`From three men $M_1$, $M_2$, $M_3$ and two women $F_1$, $F_2$, a committee of two persons is to be formed. Event $A$: there must be at least one woman member. Find $n(A)$.`,
      verify: { kind: "value", inputs: { b: "3", g: "2", k: "1" }, params: { exp: "committee", cond: "girls_at_least", ask: "n" } },
      options: [
        { key: "A", text: t`$n(A) = 14$`, correct: false, misconceptionId: "C02-M3", value: "14" },
        { key: "B", text: t`$n(A) = 7$`, correct: true, value: "7" },
        { key: "C", text: t`$n(A) = 6$`, correct: false, misconceptionId: "C02-M1", value: "6" },
        { key: "D", text: t`$n(A) = 1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
      ],
      solution: {
        steps: [
          t`Order does not matter in a committee, so $M_1F_1$ and $F_1M_1$ are the same committee.`,
          t`At least one woman means one woman or two women.`,
          t`One woman: $M_1F_1$, $M_1F_2$, $M_2F_1$, $M_2F_2$, $M_3F_1$, $M_3F_2$. Two women: $F_1F_2$.`,
          t`$n(A) = 6 + 1 = 7$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q3(B)(iii)" },
      stem: t`Two dice are rolled. Event $A$: the sum of the digits on the upper faces is $25$. Event $B$: the sum of the digits on the upper faces is less than $13$. Find $n(A)$ and $n(B)$.`,
      verify: { kind: "value", inputs: { k: "25", k2: "13" }, params: { exp: "dice2", cond: "sum_eq", cond2: "sum_lt", ask: "pair" } },
      options: [
        { key: "A", text: t`$n(A) = 36$, $n(B) = 0$`, correct: false, misconceptionId: "C02-M6", value: "(36, 0)" },
        { key: "B", text: t`$n(A) = 0$, $n(B) = 36$`, correct: true, value: "(0, 36)" },
        { key: "C", text: t`$n(A) = 0$, $n(B) = 21$`, correct: false, misconceptionId: "C02-M3", value: "(0, 21)" },
        { key: "D", text: t`$n(A) = 0$, $n(B) = 11$`, correct: false, misconceptionId: "C02-M5", value: "(0, 11)" },
      ],
      solution: {
        steps: [
          t`The largest sum is $6 + 6 = 12$, so no outcome has sum $25$.`,
          t`$A = \emptyset$, an impossible event, so $n(A) = 0$.`,
          t`Every sum is $12$ or less, so every outcome has sum less than $13$.`,
          t`$B = S$, a sure event, so $n(B) = n(S) = 36$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Ex 5.3 Q.1 (1)" },
      stem: t`Two dice are rolled simultaneously. Event $A$: the digit on each upper face is a prime number. Find $n(A)$.`,
      verify: { kind: "value", inputs: {  }, params: { exp: "dice2", cond: "both_prime", ask: "n" } },
      options: [
        { key: "A", text: t`$n(A) = 9$`, correct: true, value: "9" },
        { key: "B", text: t`$n(A) = 6$`, correct: false, misconceptionId: "C02-M3", value: "6" },
        { key: "C", text: t`$n(A) = 16$`, correct: false, misconceptionId: "C02-M4", value: "16" },
        { key: "D", text: t`$n(A) = 3$`, correct: false, misconceptionId: "C02-M5", value: "3" },
      ],
      solution: {
        steps: [
          t`The prime numbers on a die are $2$, $3$ and $5$; $1$ is not a prime.`,
          t`First die 2: (2, 2), (2, 3), (2, 5). First die 3: (3, 2), (3, 3), (3, 5).`,
          t`First die 5: (5, 2), (5, 3), (5, 5).`,
          t`$n(A) = 3 + 3 + 3 = 9$.`,
        ],
      },
    },
  ],
};
