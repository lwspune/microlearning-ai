import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A bag has $3$ red and $4$ blue marbles. Two are drawn without replacement. **The first one drawn is red. What is the chance the second is blue?** Is it $\frac{3}{7} \times \frac{4}{6} = \frac{2}{7}$?`,
    reveal: t`No. You are told the first is red, so that part is no longer uncertain: the bag now holds $2$ red and $4$ blue, and the chance is $\frac{4}{6} = \frac{2}{3}$. The product $\frac{3}{7} \times \frac{4}{6} = \frac{2}{7}$ answers a different question: the chance that the first is red **and** the second is blue, asked before any draw. That product is the multiplication theorem.`,
  },
  explanation: {
    intuition: [
      t`For $A$ and $B$ both to happen, $A$ must happen, and then $B$ in the world where $A$ already has.`,
      t`The chance of the first is $P(A)$.`,
      t`Recall: the chance of the second, once $A$ has happened, is $P(B \mid A)$.`,
      t`Multiply the two chances to get the chance that both happen.`,
      t`A draw **without replacement** keeps the thing drawn aside: it is not put back.`,
      t`So by the second draw the box has changed: one fewer thing in all, and one fewer of the kind just drawn.`,
    ],
    formal: [
      {
        title: "The multiplication theorem",
        points: [
          t`Recall: $A \cap B$ is the event that both $A$ and $B$ happen.`,
          t`For events $A$ and $B$ with $P(A) \ne 0$, the **multiplication theorem** says`,
          t`$P(A \cap B) = P(A)\,P(B \mid A)$.`,
          t`It is the conditional probability formula: $P(B \mid A)$ equals $\frac{P(A \cap B)}{P(A)}$.`,
          t`Multiply both sides by $P(A)$ to get the theorem.`,
          t`The book writes $P(B \mid A)$ as $P(B/A)$.`,
        ],
      },
      {
        title: "Without replacement",
        points: [
          t`Two cards are drawn from a pack of $52$, and the first is kept aside.`,
          t`Let $A$: the first card is an ace, and $B$: the second is an ace.`,
          t`The pack has $4$ aces in $52$ cards, so $P(A) = \frac{4}{52}$.`,
          t`Then $51$ cards are left with $3$ aces, so $P(B \mid A) = \frac{3}{51}$.`,
          t`Multiply along the branch: $P(\text{both aces})$ is $\frac{4}{52} \times \frac{3}{51}$.`,
          t`So $P(\text{both aces}) = \frac{1}{221}$.`,
        ],
        figure: {
          alt: "A two-stage tree growing left to right. From the start, the first card branches to ace, with chance 4/52, and to not ace, with chance 48/52. From the ace, the second card branches to ace, with chance 3/51, and to not ace, with chance 48/51. The path ace then ace is highlighted: 4/52 × 3/51 = 1/221.",
          axes: "none",
          view: { x: [-0.6, 7.4], y: [-3.6, 3.4] },
          elements: [
            { kind: "point", at: [0, 0], tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.6, 1.6], step: 2 },
            { kind: "point", at: [2.6, 1.6], label: "ace", labelAt: "nw", step: 2 },
            { kind: "segment", from: [0, 0], to: [2.6, -1.6], tone: "muted", step: 2 },
            { kind: "point", at: [2.6, -1.6], label: "not ace", labelAt: "e", tone: "muted", step: 2 },
            { kind: "label", at: [1.3, 0.8], label: "4/52", labelAt: "nw", step: 3 },
            { kind: "label", at: [1.3, -0.8], label: "48/52", labelAt: "sw", tone: "muted", step: 3 },
            { kind: "segment", from: [2.6, 1.6], to: [5.4, 2.6], step: 4 },
            { kind: "point", at: [5.4, 2.6], label: "ace", labelAt: "e", step: 4 },
            { kind: "segment", from: [2.6, 1.6], to: [5.4, 0.6], tone: "muted", step: 4 },
            { kind: "point", at: [5.4, 0.6], label: "not ace", labelAt: "e", tone: "muted", step: 4 },
            { kind: "label", at: [4, 2.1], label: "3/51", labelAt: "n", step: 4 },
            { kind: "label", at: [3.8, 1.0], label: "48/51", labelAt: "sw", tone: "muted", step: 4 },
            { kind: "segment", from: [0, 0], to: [2.6, 1.6], tone: "good", step: 5 },
            { kind: "segment", from: [2.6, 1.6], to: [5.4, 2.6], tone: "good", step: 5 },
            { kind: "label", at: [3.4, -2.5], label: "4/52 × 3/51", labelAt: "s", tone: "good", step: 5 },
            { kind: "label", at: [3.4, -3.1], label: "= 1/221", labelAt: "s", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "With replacement",
        points: [
          t`A draw **with replacement** puts the first card back before the second draw.`,
          t`The second draw sees the full pack again, so $P(B \mid A) = \frac{4}{52}$.`,
          t`Each of the two fractions is $\frac{4}{52} = \frac{1}{13}$.`,
          t`So $P(\text{both aces})$ is $\frac{1}{13} \times \frac{1}{13}$.`,
          t`That is $\frac{1}{169}$.`,
        ],
      },
      {
        title: "Order matters",
        points: [
          t`Write $R_1$ for "the first is red" and $G_2$ for "the second is green".`,
          t`"First red, then green" is one order, so it is one product: $P(R_1)\,P(G_2 \mid R_1)$.`,
          t`"One red and one green" allows both orders: red then green, or green then red.`,
          t`So find the product for each order, and add the two.`,
        ],
      },
    ],
    worked: {
      prompt: t`An urn contains $4$ black and $6$ white balls. Two balls are drawn one after the other without replacement. Find the probability that both balls are black.`,
      steps: [
        t`Let $A$: the first ball is black, and $B$: the second ball is black. Then $P(A) = \frac{4}{10}$.`,
        t`The first black ball is not put back, so $9$ balls are left, $3$ of them black: $P(B \mid A) = \frac{3}{9}$.`,
        t`By the multiplication theorem, $P(A \cap B) = P(A)\,P(B \mid A)$ $= \frac{4}{10} \times \frac{3}{9}$ $= \frac{12}{90} = \frac{2}{15}$.`,
      ],
      answer: t`$P(\text{both black}) = \frac{2}{15}$.`,
    },
    visualSpec: t`Tap a ball to draw it from the box: it leaves the box (or goes back, with the replacement switch on), the counts for the second draw update, and the two fractions multiply on a two-stage tree.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Ignores that the first thing is kept aside: uses the full box for the second draw, $P(A)\,P(B)$`,
      remediation: t`Without replacement, the second draw is from a smaller box: one fewer thing in all, and one fewer of the kind just drawn. Use $P(B \mid A)$, worked out from the box as it is after the first draw.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M2",
      mistake: t`Takes the drawn thing off its kind but not off the total: $\frac{a}{n} \times \frac{a - 1}{n}$`,
      remediation: t`After one thing is drawn and kept aside, only $n - 1$ things are left, so the second fraction has $n - 1$ at the bottom as well as $a - 1$ at the top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Counts both orders when the question fixes the order: adds $P(\text{first } B, \text{ then } A)$ to $P(\text{first } A, \text{ then } B)$`,
      remediation: t`"First red, then green" is a single order, so it is one product, $P(R_1)\,P(G_2 \mid R_1)$. Add the second order only when the question says "one of each", in any order.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M4",
      mistake: t`Gives the second-draw probability $P(B \mid A)$ as the answer for $P(A \cap B)$`,
      remediation: t`$P(B \mid A)$ is the chance of $B$ once $A$ is known to have happened. For both to happen, multiply by the chance of $A$ too: $P(A \cap B) = P(A)\,P(B \mid A)$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M5",
      mistake: "Shrinks the box for the second draw even though the first card was put back",
      remediation: t`With replacement the box is exactly as it started, so the second draw has the same chance as the first: $P(B \mid A) = P(B)$. Shrink the counts only when the first draw is kept aside.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C08-M6",
      mistake: t`Adds the two stage probabilities, $P(A) + P(B \mid A)$, instead of multiplying them`,
      remediation: t`"$A$ and then $B$" multiplies: $P(A \cap B) = P(A)\,P(B \mid A)$. Adding is for "$A$ or $B$", and even then the overlap is taken away. A product of two probabilities is never more than either one.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  engineNotes: [
    "C08-M1 and C08-M2 only show on draws without replacement (with replacement C08-M1 gives the key); C08-M5 only shows on draws with replacement.",
    "C08-M2 needs both draws to want the same kind; C08-M3 needs two different kinds in a fixed order.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q2" },
      stem: t`A box contains $5$ green pencils and $7$ yellow pencils. Two pencils are chosen at random, one after the other, without replacement. The probability that both are yellow is:`,
      verify: { kind: "value", inputs: { n: "12", a: "7" }, params: { repl: "no" } },
      options: [
        { key: "A", text: t`$\frac{7}{22}$`, correct: true, value: "7/22" },
        { key: "B", text: t`$\frac{49}{144}$`, correct: false, misconceptionId: "C08-M1", value: "49/144" },
        { key: "C", text: t`$\frac{7}{24}$`, correct: false, misconceptionId: "C08-M2", value: "7/24" },
        { key: "D", text: t`$\frac{6}{11}$`, correct: false, misconceptionId: "C08-M4", value: "6/11" },
      ],
      solution: {
        steps: [
          t`Let $A$: the first pencil is yellow, $B$: the second is yellow. There are $12$ pencils, $7$ yellow, so $P(A) = \frac{7}{12}$.`,
          t`The first yellow pencil is not put back: $11$ pencils are left, $6$ yellow, so $P(B \mid A) = \frac{6}{11}$.`,
          t`$P(A \cap B) = \frac{7}{12} \times \frac{6}{11} = \frac{42}{132} = \frac{7}{22}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q4(ii)" },
      stem: t`Two cards are drawn one after the other from a well-shuffled pack of $52$ cards, and the first card is **replaced** in the pack before the second is drawn. The probability that both cards are diamonds is:`,
      verify: { kind: "value", inputs: { n: "52", a: "13" }, params: { repl: "yes" } },
      options: [
        { key: "A", text: t`$\frac{1}{17}$`, correct: false, misconceptionId: "C08-M5", value: "1/17" },
        { key: "B", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C08-M4", value: "1/4" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C08-M6", value: "1/2" },
        { key: "D", text: t`$\frac{1}{16}$`, correct: true, value: "1/16" },
      ],
      solution: {
        steps: [
          t`Let $A$: the first card is a diamond, $B$: the second is a diamond. $P(A) = \frac{13}{52} = \frac{1}{4}$.`,
          t`The first card is replaced, so the second draw is again from all $52$ cards with $13$ diamonds: $P(B \mid A) = \frac{13}{52} = \frac{1}{4}$.`,
          t`$P(A \cap B) = \frac{1}{4} \times \frac{1}{4} = \frac{1}{16}$. (Had the first card been kept aside, it would be $\frac{13}{52} \times \frac{12}{51} = \frac{1}{17}$.)`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q11(a)" },
      stem: t`A box contains $10$ red balls and $15$ green balls. Two balls are drawn in succession without replacement. The probability that the first is red and the second is green is:`,
      verify: { kind: "value", inputs: { n: "25", a: "10", b: "15" }, params: { repl: "no" } },
      options: [
        { key: "A", text: t`$\frac{6}{25}$`, correct: false, misconceptionId: "C08-M1", value: "6/25" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C08-M3", value: "1/2" },
        { key: "C", text: t`$\frac{5}{8}$`, correct: false, misconceptionId: "C08-M4", value: "5/8" },
        { key: "D", text: t`$\frac{1}{4}$`, correct: true, value: "1/4" },
      ],
      solution: {
        steps: [
          t`Let $R_1$: the first ball is red, $G_2$: the second is green. There are $25$ balls, $10$ red, so $P(R_1) = \frac{10}{25} = \frac{2}{5}$.`,
          t`A red ball is kept aside: $24$ balls are left, all $15$ green ones still there, so $P(G_2 \mid R_1) = \frac{15}{24} = \frac{5}{8}$.`,
          t`The order is fixed, so there is one product: $P(R_1 \cap G_2) = \frac{2}{5} \times \frac{5}{8} = \frac{1}{4}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc I Q2" },
      stem: t`A jar has $5$ black marbles and $3$ green marbles. Two marbles are picked at random, one after the other, without replacement. The probability that both marbles are black is:`,
      verify: { kind: "value", inputs: { n: "8", a: "5" }, params: { repl: "no" } },
      options: [
        { key: "A", text: t`$\frac{5}{16}$`, correct: false, misconceptionId: "C08-M2", value: "5/16" },
        { key: "B", text: t`$\frac{4}{7}$`, correct: false, misconceptionId: "C08-M4", value: "4/7" },
        { key: "C", text: t`$\frac{5}{14}$`, correct: true, value: "5/14" },
        { key: "D", text: t`$\frac{25}{64}$`, correct: false, misconceptionId: "C08-M1", value: "25/64" },
      ],
      solution: {
        steps: [
          t`Let $A$: the first marble is black, $B$: the second is black. There are $8$ marbles, $5$ black, so $P(A) = \frac{5}{8}$.`,
          t`The first black marble is not put back: $7$ are left, $4$ black, so $P(B \mid A) = \frac{4}{7}$.`,
          t`$P(A \cap B) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q15" },
      stem: t`Two cards are drawn one after the other from a pack of $52$ cards without replacement. The probability that both cards are face cards (the $12$ kings, queens and jacks) is:`,
      verify: { kind: "value", inputs: { n: "52", a: "12" }, params: { repl: "no" } },
      options: [
        { key: "A", text: t`$\frac{296}{663}$`, correct: false, misconceptionId: "C08-M6", value: "296/663" },
        { key: "B", text: t`$\frac{11}{221}$`, correct: true, value: "11/221" },
        { key: "C", text: t`$\frac{9}{169}$`, correct: false, misconceptionId: "C08-M1", value: "9/169" },
        { key: "D", text: t`$\frac{33}{676}$`, correct: false, misconceptionId: "C08-M2", value: "33/676" },
      ],
      solution: {
        steps: [
          t`Let $A$: the first card is a face card, $B$: the second is a face card. $P(A) = \frac{12}{52} = \frac{3}{13}$.`,
          t`The first face card is not replaced: $51$ cards are left, $11$ face cards, so $P(B \mid A) = \frac{11}{51}$.`,
          t`$P(A \cap B) = \frac{3}{13} \times \frac{11}{51} = \frac{33}{663} = \frac{11}{221}$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc II Q15" },
      stem: t`Five good fuses and two defective ones are mixed up. They are tested one by one, at random and without replacement. The probability that both defective fuses are found in the first two tests is:`,
      verify: { kind: "value", inputs: { n: "7", a: "2" }, params: { repl: "no" } },
      options: [
        { key: "A", text: t`$\frac{2}{49}$`, correct: false, misconceptionId: "C08-M2", value: "2/49" },
        { key: "B", text: t`$\frac{19}{42}$`, correct: false, misconceptionId: "C08-M6", value: "19/42" },
        { key: "C", text: t`$\frac{1}{21}$`, correct: true, value: "1/21" },
        { key: "D", text: t`$\frac{4}{49}$`, correct: false, misconceptionId: "C08-M1", value: "4/49" },
      ],
      solution: {
        steps: [
          t`Let $A$: the first fuse tested is defective, $B$: the second is defective. There are $7$ fuses, $2$ defective, so $P(A) = \frac{2}{7}$.`,
          t`The tested fuse is not put back: $6$ fuses are left, $1$ defective, so $P(B \mid A) = \frac{1}{6}$.`,
          t`$P(A \cap B) = \frac{2}{7} \times \frac{1}{6} = \frac{2}{42} = \frac{1}{21}$.`,
        ],
      },
    },
  ],
};
