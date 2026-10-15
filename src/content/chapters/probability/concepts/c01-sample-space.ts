import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Toss two coins. A friend says there are $3$ outcomes: two heads, two tails, or one of each. **Is she right?**`,
    reveal: t`No, there are $4$. Make the coins different, a 1-rupee and a 2-rupee coin: one of each happens in two ways, $HT$ (head on the 1-rupee coin) and $TH$. So $S = \{HH, HT, TH, TT\}$ and $n(S) = 2 \times 2 = 4$. Her list of $3$ hides that one of each is twice as likely as two heads.`,
  },
  explanation: {
    intuition: t`A random experiment can end in several ways; the sample space $S$ lists each of them exactly once. Write outcomes you can tell apart: when things happen one after another, $HT$ and $TH$ are different outcomes. When an experiment runs in stages, every choice at one stage pairs with every choice at the next, so the counts multiply. An event is just a set of outcomes, a subset of $S$, so you compare two events with $\cap$ and $\cup$.`,
    formal: t`**Sample space.** The set $S$ of all possible outcomes of a random experiment, each listed once; $n(S)$ is how many there are. A coin and a die: $S = \{H1, \dots, H6, T1, \dots, T6\}$, so $n(S) = 2 \times 6 = 12$.

**Counting $n(S)$** for $r$ draws from $n$ different items:
- one after another, **with** replacement: $n^r$ (every draw has all $n$ choices);
- one after another, **without** replacement: $n(n - 1)(n - 2)\cdots$, $r$ factors; arranging all $n$ gives $n!$;
- all together, where order doesn't count: $^nC_r$.

**Events.** An event is a subset of $S$. $A \cap B$: both happen. $A \cup B$: at least one happens. $A' = S - A$: $A$ does not happen.

**Types of events.**
- **Mutually exclusive:** $A \cap B = \emptyset$ (they can't happen together).
- **Exhaustive:** $A \cup B = S$ (one of them must happen).
- **Complementary:** both at once; then $B = A'$.
- **Equally likely:** no outcome is more likely than another (a fair coin, a fair die).

The first two are separate tests, an overlap test and a covering test: a pair can pass one, both or neither.`,
    worked: {
      prompt: t`Two friends go from Mumbai to Delhi by car, train or plane, then tour the city by bus or taxi. List $S$ and find $n(S)$. $A$: they travel by train. $B$: they tour by taxi. Are $A$ and $B$ mutually exclusive? Exhaustive?`,
      steps: [
        t`Each outcome is a pair (travel, tour): $3$ ways, then $2$, so $n(S) = 3 \times 2 = 6$. $S$ = {(car, bus), (car, taxi), (train, bus), (train, taxi), (plane, bus), (plane, taxi)}.`,
        t`$A$ = {(train, bus), (train, taxi)} and $B$ = {(car, taxi), (train, taxi), (plane, taxi)}.`,
        t`Overlap test: (train, taxi) is in both, so $A \cap B \ne \emptyset$. Not mutually exclusive.`,
        t`Covering test: (car, bus) is in neither, so $A \cup B \ne S$. Not exhaustive.`,
        t`Compare $B$ with $C$, they tour by bus: no common outcome and together they cover $S$, so $B$ and $C$ are complementary, $C = B'$.`,
      ],
      answer: t`$n(S) = 6$; $A$ and $B$ are neither mutually exclusive nor exhaustive.`,
    },
    visualSpec: t`A tree of outcomes that grows as the student adds stages (a coin, a die, a draw), with two events shaded on it to show their overlap and whether together they cover $S$.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Gets order the wrong way round: merges $(a, b)$ and $(b, a)$ when things happen one after another, and counts orders when items are taken all together.`,
      remediation: t`One after another (tosses, draws in turn, letters into envelopes), $(a, b)$ and $(b, a)$ are different outcomes. Taken all together, a handful is one outcome whatever the order, so count with $^nC_r$.`,
      fallback: { kind: "ext", topic: "permutations and combinations" },
    },
    {
      id: "C01-M2",
      mistake: t`Gets replacement backwards: gives every stage all $n$ choices when items are used up, and one fewer each stage when they are put back.`,
      remediation: t`With replacement, every draw has all $n$ choices: $n^r$. When an item is used up (a card not put back, a letter already placed), the next stage has one fewer choice: $n(n - 1)\cdots$.`,
      fallback: { kind: "ext", topic: "permutations with repetition" },
    },
    {
      id: "C01-M3",
      mistake: "Adds the number of choices at each stage instead of multiplying them.",
      remediation: t`Every choice at one stage pairs with every choice at the next, so the counts multiply: $3$ ways to travel, then $2$ ways to tour, gives $3 \times 2 = 6$ outcomes, not $3 + 2$.`,
      fallback: { kind: "ext", topic: "fundamental principle of counting" },
    },
    {
      id: "C01-M4",
      mistake: t`Takes mutually exclusive to mean complementary: tests only $A \cap B = \emptyset$ and decides exhaustive from it too.`,
      remediation: t`Mutually exclusive only says $A \cap B = \emptyset$. Exhaustive is a separate test, $A \cup B = S$; the events are complementary only when both hold.`,
      fallback: { kind: "ext", topic: "sets" },
    },
    {
      id: "C01-M5",
      mistake: t`Takes exhaustive to mean complementary: tests only $A \cup B = S$ and decides mutually exclusive from it too.`,
      remediation: t`Exhaustive only says $A \cup B = S$; the events can still share outcomes. Test $A \cap B = \emptyset$ separately; the events are complementary only when both hold.`,
      fallback: { kind: "ext", topic: "sets" },
    },
    {
      id: "C01-M6",
      mistake: t`Swaps the two tests: checks mutually exclusive with $A \cup B = S$ and exhaustive with $A \cap B = \emptyset$.`,
      remediation: t`Mutually exclusive: no common outcome, $A \cap B = \emptyset$. Exhaustive: together they cover everything, $A \cup B = S$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M1, C01-M2 and C01-M3 give the key when only one item is drawn ($r = 1$); a diagnosing count item needs $r \ge 2$.`,
    "C01-M4, C01-M5 and C01-M6 give the key for complementary pairs and for pairs that are neither; diagnose them on pairs that are mutually exclusive only or exhaustive only.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q1(i)" },
      stem: t`A desk drawer has four pens: red, green, blue and purple. Two pens are selected at random one after the other, **with replacement**. Find $n(S)$, the number of outcomes in the sample space.`,
      verify: { kind: "value", inputs: { n: "4", r: "2" }, params: { ask: "count", draw: "seq_repl" } },
      options: [
        { key: "A", text: t`$16$`, correct: true, value: "16" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C01-M1", value: "10" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C01-M2", value: "12" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C01-M3", value: "8" },
      ],
      solution: {
        steps: [
          t`One after another, so order matters: (red, green) and (green, red) are different outcomes.`,
          t`With replacement, the second pen again has all $4$ choices, so (red, red) is an outcome too.`,
          t`$n(S) = 4 \times 4 = 16$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q5(ii)" },
      stem: t`A bag contains four cards marked $5$, $6$, $7$ and $8$. Two cards are drawn at random one after the other, **without replacement**. Find $n(S)$.`,
      verify: { kind: "value", inputs: { n: "4", r: "2" }, params: { ask: "count", draw: "seq" } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C01-M1", value: "6" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C01-M2", value: "16" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C01-M3", value: "7" },
      ],
      solution: {
        steps: [
          t`Order matters: $(5, 6)$ means $5$ first, then $6$, which differs from $(6, 5)$.`,
          t`Without replacement, the first card has $4$ choices and the second only $3$: no pair like $(5, 5)$.`,
          t`$n(S) = 4 \times 3 = 12$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q4(v)" },
      stem: t`Two fair dice are thrown. $A$: the sum of the numbers is divisible by $3$ or $4$. $B$: the sum of the numbers is $7$. Which describes $A$ and $B$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "classify", exp: "dice2", A: "sum_div_3_or_4", B: "sum_7" } },
      options: [
        { key: "A", text: t`Neither mutually exclusive nor exhaustive`, correct: false, misconceptionId: "C01-M5", value: "neither" },
        { key: "B", text: t`Exhaustive, but not mutually exclusive`, correct: false, misconceptionId: "C01-M6", value: "ex_only" },
        { key: "C", text: t`Mutually exclusive, but not exhaustive`, correct: true, value: "me_only" },
        { key: "D", text: t`Mutually exclusive and exhaustive (complementary)`, correct: false, misconceptionId: "C01-M4", value: "complementary" },
      ],
      solution: {
        steps: [
          t`$n(S) = 36$. $A$ holds the outcomes with sum $3$, $4$, $6$, $8$, $9$ or $12$; $B$ holds the $6$ outcomes with sum $7$.`,
          t`Overlap test: $7$ is divisible by neither $3$ nor $4$, so no outcome is in both: $A \cap B = \emptyset$. Mutually exclusive.`,
          t`Covering test: $(1, 1)$ has sum $2$ and is in neither event, so $A \cup B \ne S$. Not exhaustive.`,
          t`So $A$ and $B$ are mutually exclusive, but not exhaustive.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q3(ii)" },
      stem: t`$5$ different letters are placed into $5$ envelopes, one letter in each, so that no envelope is empty. Find $n(S)$, the number of ways this can be done.`,
      verify: { kind: "value", inputs: { n: "5", r: "5" }, params: { ask: "count", draw: "seq" } },
      options: [
        { key: "A", text: t`$120$`, correct: true, value: "120" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C01-M1", value: "1" },
        { key: "C", text: t`$3125$`, correct: false, misconceptionId: "C01-M2", value: "3125" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C01-M3", value: "15" },
      ],
      solution: {
        steps: [
          t`One letter per envelope, so this is an arrangement of the $5$ letters: order matters.`,
          t`The first envelope can take any of $5$ letters, the next any of the $4$ left, then $3$, $2$, $1$: a placed letter is used up.`,
          t`$n(S) = 5 \times 4 \times 3 \times 2 \times 1 = 5! = 120$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/9.1.1 SolvedEx.3" },
      stem: t`Three coins are tossed. $A$: at least one head. $B$: at least one tail. Which describes $A$ and $B$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "classify", exp: "coins3", A: "at_least_one_head", B: "at_least_one_tail" } },
      options: [
        { key: "A", text: t`Exhaustive, but not mutually exclusive`, correct: true, value: "ex_only" },
        { key: "B", text: t`Neither mutually exclusive nor exhaustive`, correct: false, misconceptionId: "C01-M4", value: "neither" },
        { key: "C", text: t`Mutually exclusive and exhaustive (complementary)`, correct: false, misconceptionId: "C01-M5", value: "complementary" },
        { key: "D", text: t`Mutually exclusive, but not exhaustive`, correct: false, misconceptionId: "C01-M6", value: "me_only" },
      ],
      solution: {
        steps: [
          t`$S = \{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\}$. $A$ is every outcome except $TTT$; $B$ is every outcome except $HHH$.`,
          t`Overlap test: $HHT$ has a head and a tail, so $A \cap B \ne \emptyset$. Not mutually exclusive.`,
          t`Covering test: $TTT$ is in $B$ and $HHH$ is in $A$, so $A \cup B = S$. Exhaustive.`,
          t`So $A$ and $B$ are exhaustive, but not mutually exclusive.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q3(iv)" },
      stem: t`$3$ tickets are drawn at random, all together, from a box containing $20$ lottery tickets. Find $n(S)$.`,
      verify: { kind: "value", inputs: { n: "20", r: "3" }, params: { ask: "count", draw: "together" } },
      options: [
        { key: "A", text: t`$8000$`, correct: false, misconceptionId: "C01-M2", value: "8000" },
        { key: "B", text: t`$57$`, correct: false, misconceptionId: "C01-M3", value: "57" },
        { key: "C", text: t`$1140$`, correct: true, value: "1140" },
        { key: "D", text: t`$6840$`, correct: false, misconceptionId: "C01-M1", value: "6840" },
      ],
      solution: {
        steps: [
          t`The $3$ tickets are taken all together, so a handful is one outcome whatever order you list it in: order doesn't count.`,
          t`Choose $3$ of $20$ different tickets: $n(S) = {}^{20}C_3 = \frac{20 \times 19 \times 18}{3 \times 2 \times 1}$.`,
          t`$n(S) = 1140$.`,
        ],
      },
    },
  ],
};
