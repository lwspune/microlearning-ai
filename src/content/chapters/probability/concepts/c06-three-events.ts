import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`A number is drawn at random from $1$ to $100$. Adding the three chances, $P(\text{divisible by } 2) + P(\text{by } 3) + P(\text{by } 5) = \frac{50}{100} + \frac{33}{100} + \frac{20}{100} = \frac{103}{100}$. **That is more than $1$. What went wrong, and what is the real probability of 'divisible by $2$, $3$ or $5$'?**`,
    reveal: t`Numbers such as $6$, $10$ and $15$ were counted twice, and $30$, $60$, $90$ three times. Subtract the pairs: there are $16 + 10 + 6 = 32$ multiples of $6$, $10$ and $15$, leaving $103 - 32 = 71$. But $30$, $60$, $90$ were added three times and subtracted three times, so they are now missing: add them back to get $74$. The probability is $\frac{74}{100} = \frac{37}{50}$.`,
  },
  explanation: {
    intuition: t`Draw $A$, $B$ and $C$ as three overlapping circles. Adding $P(A) + P(B) + P(C)$ counts each two-circle overlap twice and the centre, $A \cap B \cap C$, three times. Subtracting the three pairs fixes the overlaps, but the centre lies inside every pair, so it is subtracted three times and drops out completely. Adding $P(A \cap B \cap C)$ back once makes every region count exactly once.`,
    formal: t`**The addition theorem for three events**

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$$

Add the three, subtract the pairs, add back the triple. The signs alternate: $+$, $-$, $+$.

**Divisible by $a$ or $b$ or $c$.** From $1$ to $N$ there are as many multiples of $d$ as the whole-number part of $\frac{N}{d}$. Divisible by both $a$ and $b$ means divisible by their LCM: by $2$ and $3$ is by $6$, by $2$ and $10$ is just by $10$.

**None of the three.** $P(\text{none}) = 1 - P(A \cup B \cup C)$.

**Exactly one must happen.** If only one of $A$, $B$, $C$ can happen and one must, every overlap is $0$ and $P(A) + P(B) + P(C) = 1$. With odds against $A$ of $7 : 4$ and against $B$ of $5 : 3$: $P(A) = \frac{4}{11}$, $P(B) = \frac{3}{8}$, so $P(C) = \frac{23}{88}$ and the odds against $C$ are $P(C') : P(C) = 65 : 23$.`,
    worked: {
      prompt: t`A student takes exams in English, Hindi and Marathi. The probabilities that she passes them are $P(E) = 0.5$, $P(H) = 0.4$ and $P(M) = 0.3$; $P(E \cap H) = 0.2$, $P(H \cap M) = 0.1$, $P(E \cap M) = 0.15$ and $P(E \cap H \cap M) = 0.05$. Find the probability that she passes at least one of the three.`,
      steps: [
        t`Add the three: $0.5 + 0.4 + 0.3 = 1.2$. It is more than $1$ because the overlaps have been counted more than once.`,
        t`Subtract the pairs: $0.2 + 0.1 + 0.15 = 0.45$, and $1.2 - 0.45 = 0.75$.`,
        t`Add back the triple, which the pairs removed completely: $0.75 + 0.05 = 0.8$.`,
      ],
      answer: t`$P(E \cup H \cup M) = 0.8$. (So the probability that she passes none is $1 - 0.8 = 0.2$.)`,
    },
    visualSpec: t`Three overlapping circles $A$, $B$, $C$: step through adding the three, subtracting the pairs and adding back the triple, with each of the seven regions showing how many times it has been counted so far, until every region reads $1$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Stopping at 'add the three, subtract the pairs', so the outcomes in all three events are not counted at all",
      remediation: t`An outcome in all three events is added three times and subtracted three times, so it drops out. Add $P(A \cap B \cap C)$ back once at the end.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M2",
      mistake: "Just adding the three probabilities, as if the events could never happen together",
      remediation: t`Adding alone works only for mutually exclusive events. When the events overlap, subtract the three pairs and then add back $P(A \cap B \cap C)$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M3",
      mistake: t`Subtracting $P(A \cap B \cap C)$ along with the pairs, as one more overlap`,
      remediation: "The signs alternate: add the three, subtract the pairs, **add** the triple. It goes back in because subtracting the pairs took it out completely.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Giving the odds the wrong way round: in favour when the odds against are asked, or against when in favour is asked",
      remediation: t`Odds against $C$ are $P(C') : P(C)$; odds in favour of $C$ are $P(C) : P(C')$. Read which one the question asks for before you write the ratio.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M5",
      mistake: t`Turning odds against $a : b$ into $P = \frac{a}{a + b}$, the rule for odds in favour`,
      remediation: t`Odds against $a : b$ means $a$ chances against and $b$ for, so $P = \frac{b}{a + b}$. Only odds in favour $a : b$ give $P = \frac{a}{a + b}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M6",
      mistake: t`Writing odds as a part of the whole, $P(C') : 1$ or $P(C) : 1$, as if odds were a probability`,
      remediation: t`Odds compare the two parts with each other, not with the total: odds against $C$ are $P(C') : P(C)$, and the two numbers add up to the whole.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    t`C06-M1 and C06-M3 give the key when $P(A \cap B \cap C) = 0$ (for divisibility, when the LCM of all three divisors is more than $N$): draw diagnosing items with a nonzero triple.`,
    "C06-M2 gives the key for mutually exclusive events, and can pass 1 when the three probabilities add to more than 1: use it only where the sum stays below 1.",
    "C06-M5 gives an impossible P(C) when both given odds are against (as in the book's Ex 9.5 Q5): diagnose it with one odds against and one in favour, the event given against being the more likely one.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "authored" },
      stem: t`A student appears for three entrance exams $A$, $B$ and $C$. The probabilities that she cracks them are $P(A) = 0.4$, $P(B) = 0.3$ and $P(C) = 0.2$; $P(A \cap B) = 0.12$, $P(B \cap C) = 0.06$, $P(A \cap C) = 0.08$ and $P(A \cap B \cap C) = 0.03$. The probability that she cracks at least one of the three is:`,
      verify: { kind: "value", inputs: { a: "2/5", b: "3/10", c: "1/5", ab: "3/25", bc: "3/50", ca: "2/25", abc: "3/100" }, params: { type: "prob", ask: "union" } },
      options: [
        { key: "A", text: t`$0.64$`, correct: false, misconceptionId: "C06-M1", value: "16/25" },
        { key: "B", text: t`$0.9$`, correct: false, misconceptionId: "C06-M2", value: "9/10" },
        { key: "C", text: t`$0.61$`, correct: false, misconceptionId: "C06-M3", value: "61/100" },
        { key: "D", text: t`$0.67$`, correct: true, value: "67/100" },
      ],
      solution: {
        steps: [
          t`Add the three: $0.4 + 0.3 + 0.2 = 0.9$. The pairs add to $0.12 + 0.06 + 0.08 = 0.26$.`,
          t`$P(A \cup B \cup C) = 0.9 - 0.26 + 0.03 = 0.67$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q11" },
      stem: t`A number is drawn at random from the numbers $1$ to $50$. The probability that it is divisible by $2$ or $3$ or $10$ is:`,
      verify: { kind: "value", inputs: { N: "50", d1: "2", d2: "3", d3: "10" }, params: { type: "div" } },
      options: [
        { key: "A", text: t`$\frac{33}{50}$`, correct: true, value: "33/50" },
        { key: "B", text: t`$\frac{16}{25}$`, correct: false, misconceptionId: "C06-M1", value: "16/25" },
        { key: "C", text: t`$\frac{23}{25}$`, correct: false, misconceptionId: "C06-M2", value: "23/25" },
        { key: "D", text: t`$\frac{31}{50}$`, correct: false, misconceptionId: "C06-M3", value: "31/50" },
      ],
      solution: {
        steps: [
          t`$n(S) = 50$. Multiples of $2$: $25$; of $3$: $16$; of $10$: $5$.`,
          t`Divisible by $2$ and $3$ means by $6$: $8$ numbers. By $2$ and $10$ means by $10$ (every multiple of $10$ is even): $5$. By $3$ and $10$ means by $30$: $1$. By all three, also by $30$: $1$.`,
          t`$n = 25 + 16 + 5 - 8 - 5 - 1 + 1 = 33$, so the probability is $\frac{33}{50}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`A number is drawn at random from the numbers $1$ to $60$. The probability that it is divisible by $3$ or $4$ or $5$ is:`,
      verify: { kind: "value", inputs: { N: "60", d1: "3", d2: "4", d3: "5" }, params: { type: "div" } },
      options: [
        { key: "A", text: t`$\frac{3}{5}$`, correct: true, value: "3/5" },
        { key: "B", text: t`$\frac{7}{12}$`, correct: false, misconceptionId: "C06-M1", value: "7/12" },
        { key: "C", text: t`$\frac{47}{60}$`, correct: false, misconceptionId: "C06-M2", value: "47/60" },
        { key: "D", text: t`$\frac{17}{30}$`, correct: false, misconceptionId: "C06-M3", value: "17/30" },
      ],
      solution: {
        steps: [
          t`$n(S) = 60$. Multiples of $3$: $20$; of $4$: $15$; of $5$: $12$. Total $47$.`,
          t`Pairs: by $12$: $5$; by $20$: $3$; by $15$: $4$. Total $12$. All three means by $60$: $1$.`,
          t`$n = 47 - 12 + 1 = 36$, so the probability is $\frac{36}{60} = \frac{3}{5}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`Let $A$, $B$ and $C$ be the events that a student gets a distinction in Mathematics, Physics and Chemistry, with $P(A) = 0.45$, $P(B) = 0.35$, $P(C) = 0.15$, $P(A \cap B) = 0.15$, $P(B \cap C) = 0.05$, $P(A \cap C) = 0.1$ and $P(A \cap B \cap C) = 0.03$. The probability that the student gets **no** distinction is:`,
      verify: { kind: "value", inputs: { a: "9/20", b: "7/20", c: "3/20", ab: "3/20", bc: "1/20", ca: "1/10", abc: "3/100" }, params: { type: "prob", ask: "none" } },
      options: [
        { key: "A", text: t`$0.38$`, correct: false, misconceptionId: "C06-M3", value: "19/50" },
        { key: "B", text: t`$0.32$`, correct: true, value: "8/25" },
        { key: "C", text: t`$0.35$`, correct: false, misconceptionId: "C06-M1", value: "7/20" },
        { key: "D", text: t`$0.05$`, correct: false, misconceptionId: "C06-M2", value: "1/20" },
      ],
      solution: {
        steps: [
          t`$P(A \cup B \cup C) = (0.45 + 0.35 + 0.15) - (0.15 + 0.05 + 0.1) + 0.03 = 0.95 - 0.3 + 0.03 = 0.68$.`,
          t`No distinction is the complement of at least one: $1 - 0.68 = 0.32$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`There are three events $A$, $B$ and $C$, one of which must, and only one can, happen. The odds against $A$ are $5 : 4$ and the odds in favour of $B$ are $1 : 5$. The odds against $C$ are:`,
      verify: { kind: "value", inputs: { a1: "5", b1: "4", a2: "1", b2: "5" }, params: { type: "odds", A: "against", B: "for", ask: "against" } },
      options: [
        { key: "A", text: t`$11 : 7$`, correct: true, value: "11/7" },
        { key: "B", text: t`$7 : 11$`, correct: false, misconceptionId: "C06-M4", value: "7/11" },
        { key: "C", text: t`$13 : 5$`, correct: false, misconceptionId: "C06-M5", value: "13/5" },
        { key: "D", text: t`$11 : 18$`, correct: false, misconceptionId: "C06-M6", value: "11/18" },
      ],
      solution: {
        steps: [
          t`Odds against $A$ are $5 : 4$, so $P(A) = \frac{4}{9}$. Odds in favour of $B$ are $1 : 5$, so $P(B) = \frac{1}{6}$.`,
          t`Exactly one happens, so $P(A) + P(B) + P(C) = 1$: $P(C) = 1 - \frac{8}{18} - \frac{3}{18} = \frac{7}{18}$.`,
          t`$P(C') = \frac{11}{18}$, so the odds against $C$ are $P(C') : P(C) = 11 : 7$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`Exactly one of the three events $A$, $B$ and $C$ happens. The odds in favour of $A$ are $2 : 9$ and the odds against $B$ are $6 : 5$. The odds in favour of $C$ are:`,
      verify: { kind: "value", inputs: { a1: "2", b1: "9", a2: "6", b2: "5" }, params: { type: "odds", A: "for", B: "against", ask: "for" } },
      options: [
        { key: "A", text: t`$3 : 8$`, correct: false, misconceptionId: "C06-M5", value: "3/8" },
        { key: "B", text: t`$4 : 11$`, correct: false, misconceptionId: "C06-M6", value: "4/11" },
        { key: "C", text: t`$4 : 7$`, correct: true, value: "4/7" },
        { key: "D", text: t`$7 : 4$`, correct: false, misconceptionId: "C06-M4", value: "7/4" },
      ],
      solution: {
        steps: [
          t`Odds in favour of $A$ are $2 : 9$, so $P(A) = \frac{2}{11}$. Odds against $B$ are $6 : 5$, so $P(B) = \frac{5}{11}$.`,
          t`Exactly one happens, so $P(C) = 1 - \frac{2}{11} - \frac{5}{11} = \frac{4}{11}$ and $P(C') = \frac{7}{11}$.`,
          t`The odds in favour of $C$ are $P(C) : P(C') = 4 : 7$.`,
        ],
      },
    },
  ],
};
