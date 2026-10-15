import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`A bag has $3$ red and $2$ white balls; two are drawn together. Asha counts selections: $P(\text{both red}) = \frac{^3C_2}{^5C_2}$. Ravi counts the draws in order: $\frac{3 \times 2}{5 \times 4}$. **Who is right?**`,
    reveal: t`Both. Asha gets $\frac{3}{10}$ and Ravi gets $\frac{6}{20} = \frac{3}{10}$. Ravi counts every pair of balls twice, once in each order, but he does it on the top **and** the bottom, so the $2$ cancels. What goes wrong is mixing the two: order on one side only.`,
  },
  explanation: {
    intuition: t`When every outcome is equally likely, $P(A) = \frac{n(A)}{n(S)}$, so a probability question becomes two counting questions. With cards, balls or committees there are far too many outcomes to list, so count them with $^nC_r$ and the multiplication principle. Count $n(S)$ and $n(A)$ the same way: both as selections, or both in order. And $n(A)$ counts whole outcomes: every card, person or letter in the outcome must be chosen or placed.`,
    formal: t`**Drawn together means a selection.** $r$ things taken at once from $N$: $n(S) = {}^NC_r$. Counting the draws one by one in order, $N(N - 1)\cdots$, gives the same probability only if $n(A)$ is counted in order too.

**Choose from each group and multiply.** From $6$ red and $4$ green balls, draw $3$. Two red and one green: $n(A) = {}^6C_2 \times {}^4C_1 = 60$, out of $^{10}C_3 = 120$, so $P = \frac{1}{2}$.

**Fill the whole outcome.** 'Exactly $2$ red' in a draw of $3$ also fixes the third ball: it is not red, so choose it from the others. If the event can happen in several ways (any one of the $4$ suits), add up all of them.

**Arrangements.** $n$ different letters in a row: $n(S) = n!$. Letters that must be together: tie them into one block, arrange the block with the others, then multiply by the ways the block's letters swap inside it. Fixed places: fill those first, then arrange the rest.

**The pack.** $52$ cards, $4$ suits of $13$; $26$ red and $26$ black; $12$ face cards (J, Q, K) and $4$ aces.`,
    worked: {
      prompt: t`There are $6$ positive and $8$ negative numbers. Four of them are chosen at random, without replacement, and multiplied. Find the probability that the product is positive.`,
      steps: [
        t`Choosing $4$ of the $14$ numbers: $n(S) = {}^{14}C_4 = 1001$.`,
        t`The product is positive when it has an even number of negative factors: $0$, $2$ or $4$ negatives.`,
        t`$0$ negatives: $^6C_4 = 15$. $2$ negatives: $^6C_2 \times {}^8C_2 = 15 \times 28 = 420$. $4$ negatives: $^8C_4 = 70$.`,
        t`The cases don't overlap, so add: $n(A) = 15 + 420 + 70 = 505$, and $P = \frac{505}{1001}$.`,
      ],
      answer: t`$\frac{505}{1001}$`,
    },
    visualSpec: t`Groups of balls drawn as coloured counters: tap counters to build a selection, and two counters, $n(A)$ and $n(S)$, update as each $^nC_r$ factor lights up.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Counts n(S) as ordered draws (52 × 51 = 52P2) but n(A) as an unordered selection (products of nCr)",
      remediation: t`Count $n(S)$ and $n(A)$ the same way. Cards drawn together are a selection, so $n(S) = {}^NC_r$; if you count $n(S)$ in order, count $n(A)$ in order too.`,
      fallback: { kind: "ext", topic: "combinations nCr" },
    },
    {
      id: "C03-M2",
      mistake: "Adds the counts for the different groups (or stages) instead of multiplying them",
      remediation: "An outcome needs a choice from each group **and** from the next one, so multiply the counts (the multiplication principle). Add only when the outcome is one case **or** another.",
      fallback: { kind: "ext", topic: "fundamental principle of counting" },
    },
    {
      id: "C03-M3",
      mistake: "Counts just one version of the event: one fixed suit, or the block's letters in one fixed order",
      remediation: t`Count every way the event can happen. 'Same suit' can be any of the $4$ suits, and a block of $k$ letters can be arranged inside itself in $k!$ ways.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: "Counts only the part of the outcome the condition names; forgets to choose or arrange the rest",
      remediation: t`$n(A)$ counts whole outcomes. After the named people or letters are placed, the other places must be filled too: choose them from the rest, or arrange the remaining letters.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: "Counts as if each draw or place is made from all N again: the choices never drop after one is used",
      remediation: t`Cards, balls and letters are not put back: once one is used, one fewer is left for the next draw or place. Count the selection with $^nC_r$, or the places with $n, n - 1, \ldots$`,
      fallback: { kind: "ext", topic: "combinations nCr" },
    },
  ],
  engineNotes: [
    "C03-M1 applies to selection items only; C03-M3 needs an event with several versions (several suits, or a block of 2 or more letters).",
    "C03-M4 needs a condition that leaves part of the outcome unnamed (exactly k of one group, or fixed end letters, or a block among other letters).",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q7(i)" },
      stem: t`Two cards are drawn at random from a pack of $52$ cards. Find the probability that one is a face card and the other is an ace.`,
      verify: { kind: "value", inputs: { N: "52", r: "2" }, params: { kind: "select", pop: "groups", groups: ["face:12", "ace:4", "other:36"], event: "face:1,ace:1", parts: ["12:1", "4:1"] } },
      options: [
        { key: "A", text: t`$\frac{8}{663}$`, correct: false, misconceptionId: "C03-M2", value: "8/663" },
        { key: "B", text: t`$\frac{6}{169}$`, correct: false, misconceptionId: "C03-M5", value: "6/169" },
        { key: "C", text: t`$\frac{8}{221}$`, correct: true, value: "8/221" },
        { key: "D", text: t`$\frac{4}{221}$`, correct: false, misconceptionId: "C03-M1", value: "4/221" },
      ],
      solution: {
        steps: [
          t`Two cards drawn together: $n(S) = {}^{52}C_2 = 1326$.`,
          t`One face card from $12$ and one ace from $4$: $n(A) = {}^{12}C_1 \times {}^4C_1 = 48$.`,
          t`$P = \frac{48}{1326} = \frac{8}{221}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q8(iii)" },
      stem: t`Three cards are drawn at random from a pack of $52$ cards. Find the probability that all three are from the same suit.`,
      verify: { kind: "value", inputs: { N: "52", r: "3" }, params: { kind: "select", pop: "cards", event: "samesuit", parts: ["13:3"], versions: "4" } },
      options: [
        { key: "A", text: t`$\frac{11}{850}$`, correct: false, misconceptionId: "C03-M3", value: "11/850" },
        { key: "B", text: t`$\frac{1}{16}$`, correct: false, misconceptionId: "C03-M5", value: "1/16" },
        { key: "C", text: t`$\frac{22}{425}$`, correct: true, value: "22/425" },
        { key: "D", text: t`$\frac{11}{1275}$`, correct: false, misconceptionId: "C03-M1", value: "11/1275" },
      ],
      solution: {
        steps: [
          t`$n(S) = {}^{52}C_3 = 22100$.`,
          t`Pick the suit in $4$ ways, then $3$ of its $13$ cards: $n(A) = 4 \times {}^{13}C_3 = 4 \times 286 = 1144$.`,
          t`$P = \frac{1144}{22100} = \frac{22}{425}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q10(ii)" },
      stem: t`From a group of $4$ men, $4$ women and $3$ children, $4$ persons are selected at random. Find the probability that exactly $2$ men are selected.`,
      verify: { kind: "value", inputs: { N: "11", r: "4" }, params: { kind: "select", pop: "groups", groups: ["man:4", "woman:4", "child:3"], event: "man:2", parts: ["4:2"], rest: "7:2" } },
      options: [
        { key: "A", text: t`$\frac{7}{440}$`, correct: false, misconceptionId: "C03-M1", value: "7/440" },
        { key: "B", text: t`$\frac{9}{110}$`, correct: false, misconceptionId: "C03-M2", value: "9/110" },
        { key: "C", text: t`$\frac{1}{55}$`, correct: false, misconceptionId: "C03-M4", value: "1/55" },
        { key: "D", text: t`$\frac{21}{55}$`, correct: true, value: "21/55" },
      ],
      solution: {
        steps: [
          t`$4$ of the $11$ persons: $n(S) = {}^{11}C_4 = 330$.`,
          t`Exactly $2$ men: $2$ of the $4$ men, and the other $2$ from the $7$ women and children: $n(A) = {}^4C_2 \times {}^7C_2 = 6 \times 21 = 126$.`,
          t`$P = \frac{126}{330} = \frac{21}{55}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q14(iv)" },
      stem: t`The letters of the word MOTHER are arranged at random. Find the probability that the arrangement starts with a vowel and ends with a consonant.`,
      verify: { kind: "value", inputs: { n: "6" }, params: { kind: "arrange", word: "MOTHER", event: "ends:OE:MTHR" } },
      options: [
        { key: "A", text: t`$\frac{1}{90}$`, correct: false, misconceptionId: "C03-M4", value: "1/90" },
        { key: "B", text: t`$\frac{2}{9}$`, correct: false, misconceptionId: "C03-M5", value: "2/9" },
        { key: "C", text: t`$\frac{4}{15}$`, correct: true, value: "4/15" },
        { key: "D", text: t`$\frac{1}{5}$`, correct: false, misconceptionId: "C03-M2", value: "1/5" },
      ],
      solution: {
        steps: [
          t`MOTHER has $6$ different letters: $n(S) = 6! = 720$.`,
          t`First place: one of the $2$ vowels O, E. Last place: one of the $4$ consonants. The middle $4$ places take the other $4$ letters in $4! = 24$ ways.`,
          t`$n(A) = 2 \times 4 \times 24 = 192$, so $P = \frac{192}{720} = \frac{4}{15}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc II Q1(a)" },
      stem: t`The letters of the word EQUATION are arranged in a row at random. Find the probability that all the vowels are together.`,
      verify: { kind: "value", inputs: { n: "8" }, params: { kind: "arrange", word: "EQUATION", event: "together:EUAIO" } },
      options: [
        { key: "A", text: t`$\frac{1}{14}$`, correct: true, value: "1/14" },
        { key: "B", text: t`$\frac{1}{280}$`, correct: false, misconceptionId: "C03-M2", value: "1/280" },
        { key: "C", text: t`$\frac{1}{1680}$`, correct: false, misconceptionId: "C03-M3", value: "1/1680" },
        { key: "D", text: t`$\frac{1}{336}$`, correct: false, misconceptionId: "C03-M4", value: "1/336" },
      ],
      solution: {
        steps: [
          t`EQUATION has $8$ different letters: $n(S) = 8! = 40320$.`,
          t`Tie the $5$ vowels E, U, A, I, O into one block. The block and Q, T, N are $4$ units: $4! = 24$ ways. Inside the block the vowels swap in $5! = 120$ ways.`,
          t`$n(A) = 24 \times 120 = 2880$, so $P = \frac{2880}{40320} = \frac{1}{14}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q17(ii)" },
      stem: t`A bag contains $7$ black and $4$ red balls. Three balls are drawn at random. Find the probability that one is black and two are red.`,
      verify: { kind: "value", inputs: { N: "11", r: "3" }, params: { kind: "select", pop: "groups", groups: ["black:7", "red:4"], event: "black:1,red:2", parts: ["7:1", "4:2"] } },
      options: [
        { key: "A", text: t`$\frac{14}{55}$`, correct: true, value: "14/55" },
        { key: "B", text: t`$\frac{7}{165}$`, correct: false, misconceptionId: "C03-M1", value: "7/165" },
        { key: "C", text: t`$\frac{13}{165}$`, correct: false, misconceptionId: "C03-M2", value: "13/165" },
        { key: "D", text: t`$\frac{336}{1331}$`, correct: false, misconceptionId: "C03-M5", value: "336/1331" },
      ],
      solution: {
        steps: [
          t`$3$ of the $11$ balls: $n(S) = {}^{11}C_3 = 165$.`,
          t`One black from $7$ and two red from $4$: $n(A) = {}^7C_1 \times {}^4C_2 = 7 \times 6 = 42$.`,
          t`$P = \frac{42}{165} = \frac{14}{55}$.`,
        ],
      },
    },
  ],
};
