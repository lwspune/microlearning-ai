import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Raju says a pack of cards has $16$ face cards: the king, queen, jack and ace of each suit. **Is he right?**`,
    reveal: t`No. A **face card** shows a face: only the king, queen and jack do. That is $3$ in each suit, so $3 \times 4 = 12$ face cards. An ace is not a face card.`,
  },
  explanation: {
    intuition: [
      t`A pack of playing cards has $52$ cards.`,
      t`The cards come in $4$ **suits**, or families: spades, clubs, hearts and diamonds.`,
      t`Spades and clubs are black; hearts and diamonds are red.`,
      t`Each suit has the same $13$ cards: ace, $2$ to $10$, jack, queen and king.`,
      t`When one card is drawn from a well shuffled pack, each of the $52$ cards is equally likely.`,
      t`So every card question is a counting question: count the cards in the event, then divide by $52$.`,
    ],
    formal: [
      {
        title: "Suits and colours",
        points: [
          t`A pack has $4$ suits of $13$ cards each: $4 \times 13 = 52$.`,
          t`Black suits: spades ♠ and clubs ♣, so $13 + 13 = 26$ black cards.`,
          t`Red suits: hearts ♥ and diamonds ♦, so $13 + 13 = 26$ red cards.`,
          t`A suit is one family of $13$ cards; a colour covers two suits, $26$ cards.`,
          t`So a spade is a black card, but only half the black cards are spades.`,
        ],
      },
      {
        title: "Face cards and aces",
        points: [
          t`A **face card** is a king, a queen or a jack: the cards with a picture of a face.`,
          t`Each suit has $3$ face cards, so the pack has $3 \times 4 = 12$ face cards.`,
          t`Half of them are red: $6$ red face cards and $6$ black face cards.`,
          t`An **ace** is the card marked A; it is not a face card.`,
          t`Each suit has one ace, so the pack has $4$ aces: $2$ red and $2$ black.`,
          t`In the same way there are $4$ kings, $4$ queens and $4$ jacks.`,
        ],
      },
      {
        title: "Finding the probability",
        points: [
          t`The sample space $S$ is the whole pack, so $n(S) = 52$ for every question.`,
          t`Count the cards in the event $A$ to get $n(A)$; then $P(A) = \frac{n(A)}{n(S)}$.`,
          t`A red card: $n(A) = 26$, so $P(A) = \frac{26}{52} = \frac{1}{2}$.`,
          t`A spade: $n(A) = 13$, so $P(A) = \frac{13}{52} = \frac{1}{4}$.`,
          t`An ace: $n(A) = 4$, so $P(A) = \frac{4}{52} = \frac{1}{13}$.`,
        ],
      },
      {
        title: "Two conditions, and not",
        points: [
          t`A **king of spades** must be a spade **and** a king: there is only one such card.`,
          t`So count the cards that meet both conditions: $n(A) = 1$, not $13 + 4$.`,
          t`Still divide by all $52$ cards, not by the $13$ spades: $P(A) = \frac{1}{52}$.`,
          t`For **not** a heart, count the other cards: $52 - 13 = 39$.`,
          t`So $P(\text{not a heart}) = \frac{39}{52} = \frac{3}{4}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A card is drawn from a well shuffled pack of $52$ playing cards. Find the probability that it is a red card that is not a face card.`,
      steps: [
        t`The sample space is the whole pack: $n(S) = 52$.`,
        t`The red cards are the hearts and diamonds: $13 + 13 = 26$ cards.`,
        t`The red face cards are the king, queen and jack of hearts and of diamonds: $6$ cards.`,
        t`Let $A$ be the event: a red card, not a face card. Then $n(A) = 26 - 6 = 20$.`,
        t`$P(A) = \frac{n(A)}{n(S)} = \frac{20}{52} = \frac{5}{13}$.`,
      ],
      answer: t`$P(A) = \frac{5}{13}$`,
    },
    visualSpec: t`Tap conditions (red, black, a suit, face card, ace, not) and a grid of all $52$ cards lights up the cards in the event, with the count over $52$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Counts the aces as face cards: $4$ face cards a suit, $16$ in the pack.`,
      remediation: t`Face cards are only the king, queen and jack: $3$ in each suit, $12$ in the pack. An ace is not a face card.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Forgets that every card comes in all $4$ suits: takes one ace, or three face cards, in the whole pack.`,
      remediation: t`Each suit has its own ace, king, queen and jack. So there are $4$ aces and $12$ face cards; count them in every suit the event allows.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M3",
      mistake: "Reads a red face card as the red cards plus the face cards, and adds the two counts.",
      remediation: "A red face card must be red **and** a face card. Count only the cards that meet both conditions.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M4",
      mistake: "For not a card of some kind, finds the probability of that kind instead.",
      remediation: t`Not an ace means every card other than the aces. Count those cards: $52$ minus the cards of that kind.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M5",
      mistake: t`Divides by the cards of that colour or suit ($26$ or $13$), not by the whole pack.`,
      remediation: t`The card is drawn from the whole pack, so $n(S) = 52$. Divide the count by $52$, whatever the condition.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M6",
      mistake: t`Writes the fraction upside down: $\frac{n(S)}{n(A)}$.`,
      remediation: t`$P(A) = \frac{n(A)}{n(S)}$: the cards in the event over all $52$ cards. A probability is never more than $1$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C05-M1 shows only on face-card events; C05-M3 and C05-M5 only on two-condition events (a colour or suit with a rank); C05-M4 only on not events; C05-M2 needs a rank (on a spade or red card event it has nothing to drop). Draw diagnosing items accordingly.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q3(A)(ii)" },
      stem: t`A card is drawn from a well shuffled pack of $52$ playing cards. Complete the activity. Let $S$ be the sample space, so $n(S) = 52$. Event $B$: the card drawn is a face card. $n(B) = \square$, and $P(B) = \frac{n(B)}{n(S)} = \square$. What is $P(B)$?`,
      verify: { kind: "value", inputs: { N: "52" }, params: { colour: "any", suit: "any", rank: "face", neg: "no" } },
      options: [
        { key: "A", text: t`$\frac{13}{3}$`, correct: false, misconceptionId: "C05-M6", value: "13/3" },
        { key: "B", text: t`$\frac{3}{13}$`, correct: true, value: "3/13" },
        { key: "C", text: t`$\frac{4}{13}$`, correct: false, misconceptionId: "C05-M1", value: "4/13" },
        { key: "D", text: t`$\frac{3}{52}$`, correct: false, misconceptionId: "C05-M2", value: "3/52" },
      ],
      solution: {
        steps: [
          t`The face cards are the king, queen and jack of each of the $4$ suits.`,
          t`So $n(B) = 3 \times 4 = 12$.`,
          t`$P(B) = \frac{12}{52} = \frac{3}{13}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Probability of an event SolvedEx.3" },
      stem: t`A card is drawn at random from a well shuffled pack of $52$ playing cards. Find the probability that the card drawn is a red face card.`,
      verify: { kind: "value", inputs: { N: "52" }, params: { colour: "red", suit: "any", rank: "face", neg: "no" } },
      options: [
        { key: "A", text: t`$\frac{2}{13}$`, correct: false, misconceptionId: "C05-M1", value: "2/13" },
        { key: "B", text: t`$\frac{19}{26}$`, correct: false, misconceptionId: "C05-M3", value: "19/26" },
        { key: "C", text: t`$\frac{3}{13}$`, correct: false, misconceptionId: "C05-M5", value: "3/13" },
        { key: "D", text: t`$\frac{3}{26}$`, correct: true, value: "3/26" },
      ],
      solution: {
        steps: [
          t`$n(S) = 52$. The red suits are hearts and diamonds.`,
          t`Each has a king, a queen and a jack, so there are $3 \times 2 = 6$ red face cards.`,
          t`$P(A) = \frac{6}{52} = \frac{3}{26}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Ex 5.4 Q.5 (1)" },
      stem: t`A card is drawn at random from a well shuffled pack of $52$ playing cards. Find the probability that the card drawn is **not** an ace.`,
      verify: { kind: "value", inputs: { N: "52" }, params: { colour: "any", suit: "any", rank: "ace", neg: "yes" } },
      options: [
        { key: "A", text: t`$\frac{12}{13}$`, correct: true, value: "12/13" },
        { key: "B", text: t`$\frac{1}{13}$`, correct: false, misconceptionId: "C05-M4", value: "1/13" },
        { key: "C", text: t`$\frac{51}{52}$`, correct: false, misconceptionId: "C05-M2", value: "51/52" },
        { key: "D", text: t`$\frac{13}{12}$`, correct: false, misconceptionId: "C05-M6", value: "13/12" },
      ],
      solution: {
        steps: [
          t`$n(S) = 52$. There is one ace in each suit, so the pack has $4$ aces.`,
          t`The cards that are not aces: $52 - 4 = 48$.`,
          t`$P(\text{not an ace}) = \frac{48}{52} = \frac{12}{13}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Ex 5.4 Q.5 (2)" },
      stem: t`A card is drawn at random from a well shuffled pack of $52$ playing cards. Find the probability that the card drawn is a face card of spades.`,
      verify: { kind: "value", inputs: { N: "52" }, params: { colour: "any", suit: "spades", rank: "face", neg: "no" } },
      options: [
        { key: "A", text: t`$\frac{25}{52}$`, correct: false, misconceptionId: "C05-M3", value: "25/52" },
        { key: "B", text: t`$\frac{3}{13}$`, correct: false, misconceptionId: "C05-M5", value: "3/13" },
        { key: "C", text: t`$\frac{3}{52}$`, correct: true, value: "3/52" },
        { key: "D", text: t`$\frac{1}{13}$`, correct: false, misconceptionId: "C05-M1", value: "1/13" },
      ],
      solution: {
        steps: [
          t`$n(S) = 52$, the whole pack.`,
          t`The face cards of spades are the king, queen and jack of spades: $n(A) = 3$.`,
          t`$P(A) = \frac{3}{52}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q3(A)(ii)" },
      stem: t`A card is drawn at random from a well shuffled pack of $52$ playing cards. Find the probability that the card drawn is a black ace.`,
      verify: { kind: "value", inputs: { N: "52" }, params: { colour: "black", suit: "any", rank: "ace", neg: "no" } },
      options: [
        { key: "A", text: t`$\frac{1}{26}$`, correct: true, value: "1/26" },
        { key: "B", text: t`$\frac{1}{52}$`, correct: false, misconceptionId: "C05-M2", value: "1/52" },
        { key: "C", text: t`$\frac{15}{26}$`, correct: false, misconceptionId: "C05-M3", value: "15/26" },
        { key: "D", text: t`$\frac{1}{13}$`, correct: false, misconceptionId: "C05-M5", value: "1/13" },
      ],
      solution: {
        steps: [
          t`$n(S) = 52$. The black suits are spades and clubs.`,
          t`Each has one ace: the ace of spades and the ace of clubs, so $n(A) = 2$.`,
          t`$P(A) = \frac{2}{52} = \frac{1}{26}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q2(B)(iv)" },
      stem: t`A card is drawn from a well shuffled pack of $52$ playing cards. Find the probability that the card drawn is **not** a face card.`,
      verify: { kind: "value", inputs: { N: "52" }, params: { colour: "any", suit: "any", rank: "face", neg: "yes" } },
      options: [
        { key: "A", text: t`$\frac{10}{13}$`, correct: true, value: "10/13" },
        { key: "B", text: t`$\frac{9}{13}$`, correct: false, misconceptionId: "C05-M1", value: "9/13" },
        { key: "C", text: t`$\frac{49}{52}$`, correct: false, misconceptionId: "C05-M2", value: "49/52" },
        { key: "D", text: t`$\frac{3}{13}$`, correct: false, misconceptionId: "C05-M4", value: "3/13" },
      ],
      solution: {
        steps: [
          t`$n(S) = 52$. The face cards are the king, queen and jack of each suit: $12$ cards.`,
          t`The cards that are not face cards: $52 - 12 = 40$.`,
          t`$P(\text{not a face card}) = \frac{40}{52} = \frac{10}{13}$.`,
        ],
      },
    },
  ],
};
