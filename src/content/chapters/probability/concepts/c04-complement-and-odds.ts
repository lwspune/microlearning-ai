import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** A shaded block of the outcome bar, from x0 to x1: four half-planes, walked anticlockwise. */
const block = (x0: number, x1: number, tone: FigureElement["tone"], step: number): FigureElement => ({
  kind: "region",
  within: [
    { kind: "halfPlane", through: [[x0, 0], [x1, 0]] },
    { kind: "halfPlane", through: [[x1, 0], [x1, 1]] },
    { kind: "halfPlane", through: [[x1, 1], [x0, 1]] },
    { kind: "halfPlane", through: [[x0, 1], [x0, 0]] },
  ],
  tone,
  step,
});

/** The bar of 8 equally likely outcomes: its top, its bottom and the 9 upright block edges. */
const bar: FigureElement[] = [
  { kind: "segment", from: [0, 0], to: [8, 0], tone: "muted" },
  { kind: "segment", from: [0, 1], to: [8, 1], tone: "muted" },
  ...Array.from({ length: 9 }, (_, i): FigureElement => ({ kind: "segment", from: [i, 0], to: [i, 1], tone: "muted" })),
];

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`The forecast gives a $1$ in $5$ chance of rain tomorrow. Your friend says: so the odds against rain are $5$ to $1$. **Is that right?**`,
    reveal: t`No. Out of $5$ equally likely days, $1$ is rainy and $4$ are dry. Odds compare the two parts with each other, not a part with the whole: the odds against rain are $4 : 1$, and the odds in favour are $1 : 4$. Probability is the one that uses the whole: $P(\text{rain}) = \frac{1}{5}$.`,
  },
  explanation: {
    intuition: [
      t`Recall: an event $A$ is a set of outcomes, and its **complement** $A'$ is every outcome not in $A$.`,
      t`Here $3$ of $8$ equally likely outcomes are in $A$, and the other $5$ are in $A'$.`,
      t`Each outcome is in exactly one part, so $P(A) + P(A') = 1$: here $\frac{3}{8} + \frac{5}{8} = 1$.`,
      t`When $A$ is hard to count, such as 'at least one', count $A'$ instead and subtract from $1$.`,
      t`**Odds** compare the two parts with each other, not with the whole: here $3 : 5$.`,
      t`Probability compares a part with the whole: $P(A) = \frac{3}{8}$.`,
    ],
    figure: {
      alt: "A bar of 8 equal blocks, the equally likely outcomes. The first 3 blocks are shaded and labelled A; the other 5 are shaded in another colour and labelled A′. Below, the counts 3 and 5, and P(A) + P(A′) = 3/8 + 5/8 = 1. Above, the odds 3 : 5 compare the two parts; below, P(A) = 3/8 compares a part with the whole.",
      axes: "none",
      view: { x: [-0.5, 8.5], y: [-2.6, 2.6] },
      elements: [
        ...bar,
        block(0, 3, "good", 1),
        { kind: "label", at: [1.5, 1], label: "A", labelAt: "n", tone: "good", step: 1 },
        block(3, 8, "accent", 1),
        { kind: "label", at: [5.5, 1], label: "A′", labelAt: "n", step: 1 },
        { kind: "label", at: [1.5, 0], label: "3", labelAt: "s", tone: "good", step: 2 },
        { kind: "label", at: [5.5, 0], label: "5", labelAt: "s", step: 2 },
        { kind: "label", at: [4, -0.9], label: "P(A) + P(A′) = 3/8 + 5/8 = 1", labelAt: "s", step: 3 },
        { kind: "label", at: [4, 1.6], label: "odds in favour of A = 3 : 5", labelAt: "n", tone: "good", step: 5 },
        { kind: "label", at: [4, -1.8], label: "P(A) = 3/8", labelAt: "s", tone: "good", step: 6 },
      ],
    },
    formal: [
      {
        title: "The complement rule",
        points: [
          t`$A'$ happens exactly when $A$ does not.`,
          t`So $A$ and $A'$ never happen together, and one of them always happens.`,
          t`Together they make up $S$, so $P(A) + P(A') = P(S) = 1$.`,
          t`So $P(A') = 1 - P(A)$.`,
        ],
      },
      {
        title: "At least one: count none",
        points: [
          t`'At least one' means one or more: it also counts two, three or more.`,
          t`If it is not true that at least one happens, then none does.`,
          t`So the complement of 'at least one' is **none**, not 'all'.`,
          t`So $P(\text{at least one})$ equals $1 - P(\text{none})$.`,
        ],
      },
      {
        title: "Odds in favour and against",
        points: [
          t`Let $n(A) = m$ of the $n(S) = n$ outcomes be **favourable**: they make $A$ happen.`,
          t`The other $n - m$ outcomes are **unfavourable**: they make up $A'$.`,
          t`**Odds in favour** of $A$ put the favourable first: $m : (n - m)$.`,
          t`Dividing both by $n$, that is $P(A) : P(A')$.`,
          t`**Odds against** $A$ put the unfavourable first: $(n - m) : m$.`,
          t`That is $P(A') : P(A)$.`,
        ],
      },
      {
        title: "From odds to probability",
        points: [
          t`Odds in favour $a : b$ mean $a$ parts for $A$ and $b$ parts against.`,
          t`That is $a + b$ parts in all, so $P(A) = \frac{a}{a + b}$.`,
          t`Odds against $a : b$ put the unfavourable first: $a$ parts against, $b$ for.`,
          t`So $P(A) = \frac{b}{a + b}$.`,
          t`Odds are part to part; probability is part to whole.`,
        ],
      },
    ],
    worked: {
      prompt: t`The odds in favour of X solving a problem are $4 : 3$, and the odds against Y solving the same problem are $2 : 3$. Find the probability that X solves it, that Y solves it, and that Y fails.`,
      steps: [
        t`In favour $4 : 3$ means $4$ parts for X and $3$ against, $7$ parts in all: $P(X) = \frac{4}{4 + 3}$ $= \frac{4}{7}$.`,
        t`Against $2 : 3$ puts the unfavourable part first: $2$ parts against Y, $3$ for Y. So $P(Y) = \frac{3}{2 + 3}$ $= \frac{3}{5}$.`,
        t`Y fails is the complement: $P(Y') = 1 - \frac{3}{5}$ $= \frac{2}{5}$, the $2$ parts against out of $5$.`,
      ],
      answer: t`$P(X) = \frac{4}{7}$, $P(Y) = \frac{3}{5}$ and $P(Y') = \frac{2}{5}$.`,
    },
    visualSpec: t`A bar of $n$ equally likely outcomes, with a slider that moves the boundary between favourable and unfavourable blocks; the bar shows $P(A)$ and $P(A')$ as part over whole and the odds as part over part.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Puts the total into the odds: odds in favour $n(A) : n(S)$ and odds against $n(S) : n(A)$, so a $1$ in $5$ chance becomes $5$ to $1$ against`,
      remediation: t`Odds compare the two parts with each other: in favour $n(A) : n(A')$, against $n(A') : n(A)$. Only probability uses the total, $P(A) = \frac{n(A)}{n(S)}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: "Swaps odds in favour and odds against",
      remediation: t`Odds in favour put the favourable outcomes first, $n(A) : n(A')$. Odds against put the unfavourable outcomes first, $n(A') : n(A)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Takes the complement of 'at least one' to be 'all'",
      remediation: t`The opposite of 'at least one' is 'none': if it isn't true that at least one is drawn, then none is. So $P(\text{at least one}) = 1 - P(\text{none})$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: t`Writes the odds against as the probability of failure, $n(A') : n(S)$`,
      remediation: t`$\frac{n(A')}{n(S)}$ is $P(A')$, a probability. The odds against compare the unfavourable outcomes with the favourable ones: $n(A') : n(A)$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M5",
      mistake: t`Stops at $P(\text{none})$ and forgets to subtract it from $1$`,
      remediation: t`$P(\text{none})$ is the probability of the complement. The event asked for is everything else: $P(\text{at least one}) = 1 - P(\text{none})$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Reads 'at least one' as 'exactly one'",
      remediation: t`'At least one' also counts the draws with two or more of the kind. The quick way to count all of them is $1 - P(\text{none})$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C04-M1 and C04-M4 give the same answer for odds in favour, and C04-M4 is modelled only on odds against: diagnose it with odds-against items.",
    "C04-M5 agrees with C04-M2 when the item asks for odds (odds for 'none' are the odds against 'at least one'), so it is tagged only on probability items.",
    "C04-M3 gives no answer when drawing 'all of the kind' is impossible (fewer of the kind than are drawn).",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.5 Q6" },
      stem: t`In a single toss of a fair die, the odds against the event that the number $3$ or $4$ turns up are:`,
      verify: { kind: "value", inputs: { m: "2", n: "6" }, params: { kind: "count", ask: "against" } },
      options: [
        { key: "A", text: t`$1 : 2$`, correct: false, misconceptionId: "C04-M2", value: "1/2" },
        { key: "B", text: t`$2 : 3$`, correct: false, misconceptionId: "C04-M4", value: "2/3" },
        { key: "C", text: t`$2 : 1$`, correct: true, value: "2" },
        { key: "D", text: t`$3 : 1$`, correct: false, misconceptionId: "C04-M1", value: "3" },
      ],
      solution: {
        steps: [
          t`Favourable outcomes: $\{3, 4\}$, so $n(A) = 2$. The other $6 - 2 = 4$ faces are unfavourable.`,
          t`Odds against put the unfavourable first: $4 : 2 = 2 : 1$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q13(ii)" },
      stem: t`A room has three sockets for lamps. From a collection of $10$ bulbs, of which $6$ are defective, a person selects $3$ bulbs at random at night and puts them in the sockets. The probability that the room is lit is:`,
      verify: { kind: "value", inputs: { N: "10", G: "4", r: "3" }, params: { kind: "atleast", ask: "prob" } },
      options: [
        { key: "A", text: t`$\frac{29}{30}$`, correct: false, misconceptionId: "C04-M3", value: "29/30" },
        { key: "B", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C04-M5", value: "1/6" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M6", value: "1/2" },
        { key: "D", text: t`$\frac{5}{6}$`, correct: true, value: "5/6" },
      ],
      solution: {
        steps: [
          t`There are $4$ good bulbs. The room is lit if at least one of the $3$ bulbs is good; the complement is 'no good bulb', all $3$ defective.`,
          t`$P(\text{all defective}) = \frac{^6C_3}{^{10}C_3} = \frac{20}{120} = \frac{1}{6}$.`,
          t`$P(\text{lit}) = 1 - \frac{1}{6} = \frac{5}{6}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/9.1.5 SolvedEx.3" },
      stem: t`Five of the $20$ employees in a company are graduates. If $3$ of the $20$ are selected at random, the odds in favour of at least one graduate among them are:`,
      verify: { kind: "value", inputs: { N: "20", G: "5", r: "3" }, params: { kind: "atleast", ask: "favour" } },
      options: [
        { key: "A", text: t`$91 : 137$`, correct: false, misconceptionId: "C04-M2", value: "91/137" },
        { key: "B", text: t`$113 : 1$`, correct: false, misconceptionId: "C04-M3", value: "113" },
        { key: "C", text: t`$137 : 91$`, correct: true, value: "137/91" },
        { key: "D", text: t`$137 : 228$`, correct: false, misconceptionId: "C04-M1", value: "137/228" },
      ],
      solution: {
        steps: [
          t`The complement of 'at least one graduate' is 'no graduate': all $3$ from the $15$ others. $P(\text{none}) = \frac{^{15}C_3}{^{20}C_3} = \frac{455}{1140} = \frac{91}{228}$.`,
          t`$P(\text{at least one}) = 1 - \frac{91}{228} = \frac{137}{228}$.`,
          t`Odds in favour $= P(A) : P(A') = 137 : 91$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q17(i)" },
      stem: t`A bag contains $7$ black and $4$ red balls. If $3$ balls are drawn at random, the probability that at least one of them is red is:`,
      verify: { kind: "value", inputs: { N: "11", G: "4", r: "3" }, params: { kind: "atleast", ask: "prob" } },
      options: [
        { key: "A", text: t`$\frac{161}{165}$`, correct: false, misconceptionId: "C04-M3", value: "161/165" },
        { key: "B", text: t`$\frac{7}{33}$`, correct: false, misconceptionId: "C04-M5", value: "7/33" },
        { key: "C", text: t`$\frac{28}{55}$`, correct: false, misconceptionId: "C04-M6", value: "28/55" },
        { key: "D", text: t`$\frac{26}{33}$`, correct: true, value: "26/33" },
      ],
      solution: {
        steps: [
          t`The complement of 'at least one red' is 'no red': all $3$ black. $P(\text{none red}) = \frac{^7C_3}{^{11}C_3} = \frac{35}{165} = \frac{7}{33}$.`,
          t`$P(\text{at least one red}) = 1 - \frac{7}{33} = \frac{26}{33}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q10(ii)" },
      stem: t`A box contains $75$ tickets numbered $1$ to $75$. One ticket is drawn at random. The odds against the number on it being a perfect square are:`,
      verify: { kind: "value", inputs: { n: "75" }, params: { kind: "square", ask: "against" } },
      options: [
        { key: "A", text: t`$67 : 75$`, correct: false, misconceptionId: "C04-M4", value: "67/75" },
        { key: "B", text: t`$67 : 8$`, correct: true, value: "67/8" },
        { key: "C", text: t`$75 : 8$`, correct: false, misconceptionId: "C04-M1", value: "75/8" },
        { key: "D", text: t`$8 : 67$`, correct: false, misconceptionId: "C04-M2", value: "8/67" },
      ],
      solution: {
        steps: [
          t`The perfect squares up to $75$ are $1, 4, 9, 16, 25, 36, 49, 64$: $n(A) = 8$.`,
          t`The other $75 - 8 = 67$ tickets are unfavourable.`,
          t`Odds against put the unfavourable first: $67 : 8$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q9(iii)" },
      stem: t`A bag contains $10$ red, $4$ blue and $6$ black balls. One ball is drawn at random. The odds against the event 'the ball is not black' are:`,
      verify: { kind: "value", inputs: { m: "14", n: "20" }, params: { kind: "count", ask: "against" } },
      options: [
        { key: "A", text: t`$3 : 7$`, correct: true, value: "3/7" },
        { key: "B", text: t`$10 : 7$`, correct: false, misconceptionId: "C04-M1", value: "10/7" },
        { key: "C", text: t`$7 : 3$`, correct: false, misconceptionId: "C04-M2", value: "7/3" },
        { key: "D", text: t`$3 : 10$`, correct: false, misconceptionId: "C04-M4", value: "3/10" },
      ],
      solution: {
        steps: [
          t`'Not black' is the complement of 'black': $n(A) = 20 - 6 = 14$ balls, and the $6$ black balls are unfavourable.`,
          t`Odds against put the unfavourable first: $6 : 14 = 3 : 7$.`,
        ],
      },
    },
  ],
};
