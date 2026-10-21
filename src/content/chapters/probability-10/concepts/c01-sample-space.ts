import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Lockers in a school are numbered $31$ to $40$. You are given one locker at random. **How many possible lockers are there? Is it $40 - 31 = 9$?**`,
    reveal: t`No, it is $10$. List them: $31, 32, \ldots, 40$. Subtracting leaves out one end. Listing every outcome is the safe way to count, and that list is the sample space.`,
  },
  explanation: {
    intuition: [
      t`Tossing a coin is an **experiment**: we know what can happen, but not what will happen.`,
      t`Each thing that can happen is an **outcome**: a coin can show head (H) or tail (T).`,
      t`Write every possible outcome once, in a set: $\{H, T\}$.`,
      t`This set of all outcomes is the **sample space**, written $S$.`,
      t`The number of outcomes in $S$ is written $n(S)$; for one coin, $n(S) = 2$.`,
      t`Probability later compares outcomes with $n(S)$, so $S$ must miss nothing and repeat nothing.`,
    ],
    formal: [
      {
        title: "Random experiment and sample space",
        points: [
          t`A **random experiment** has known possible results, but the result of one trial can't be predicted.`,
          t`Each possible result is an **outcome**, also called a **sample point**.`,
          t`The set of all sample points is the **sample space** $S$.`,
          t`$n(S)$ is the number of sample points in $S$.`,
          t`Outcomes are **equally likely** when no outcome is more likely than another, as with a fair coin or die.`,
        ],
      },
      {
        title: "Some sample spaces",
        points: [
          t`One coin is tossed: $S = \{H, T\}$, so $n(S) = 2$.`,
          t`One die is thrown: the upper face shows $1$ to $6$, so $S = \{1, 2, 3, 4, 5, 6\}$ and $n(S) = 6$.`,
          t`A day of the week is selected: $S = \{$Monday, Tuesday, $\ldots$, Sunday$\}$, so $n(S) = 7$.`,
          t`One card is selected from a pack of playing cards: $n(S) = 52$.`,
          t`Two coins are tossed together: $S = \{HH, HT, TH, TT\}$, so $n(S) = 4$.`,
          t`Two dice are thrown together: each of $6$ faces pairs with each of $6$, so $n(S) = 36$.`,
        ],
      },
      {
        title: "Numbered cards",
        points: [
          t`Cards numbered $1$ to $50$, one number on each: $S = \{1, 2, \ldots, 50\}$, so $n(S) = 50$.`,
          t`Starting at $1$, the last number is the count. Starting anywhere else, it is not.`,
          t`Cards numbered $21$ to $30$: $S = \{21, 22, \ldots, 30\}$.`,
          t`Subtracting gives $30 - 21 = 9$, but that leaves out one end card.`,
          t`Count both ends: $n(S) = 30 - 21 + 1 = 10$.`,
        ],
      },
      {
        title: "Two things together",
        points: [
          t`A coin is tossed and a day of the week is selected together.`,
          t`Each of the $2$ coin results pairs with each of the $7$ days: H-Monday, T-Monday, and so on.`,
          t`So $n(S) = 2 \times 7 = 14$, not $2 + 7 = 9$.`,
          t`Pair each outcome of the first with each outcome of the second, then count the pairs: multiply.`,
        ],
      },
      {
        title: "Two-digit numbers",
        points: [
          t`Form two-digit numbers from the digits $4$ and $7$.`,
          t`**Order matters**: $47$ and $74$ are different numbers, so both are in $S$.`,
          t`**Without repetition**, a digit is used once: $S = \{47, 74\}$, so $n(S) = 2$.`,
          t`**With repetition**, a digit may be used twice: $S = \{44, 47, 74, 77\}$, so $n(S) = 4$.`,
          t`Count by places: tens digit first, then units digit, and multiply the choices.`,
          t`With $3$ digits and no repetition: $3$ choices for tens, $2$ for units, so $3 \times 2 = 6$.`,
        ],
      },
      {
        title: "Committees of two",
        points: [
          t`A **committee** is decided by who is in it, not by the order of the names.`,
          t`So $B_1G_1$ and $G_1B_1$ are the same committee; write it once.`,
          t`A person can't be chosen twice, so $B_1B_1$ is not a committee.`,
          t`Committee of two from $A$, $B$, $C$: $S = \{AB, AC, BC\}$, so $n(S) = 3$.`,
          t`List in groups: two boys, two girls, then one boy and one girl.`,
        ],
      },
    ],
    worked: {
      prompt: t`One coin and one die are thrown together. Write the sample space $S$ and find $n(S)$.`,
      steps: [
        t`The die can show $1, 2, 3, 4, 5, 6$; the coin can show $H$ or $T$.`,
        t`Each die result pairs with each coin result: $1H$, $1T$, $2H$, $2T$, and so on.`,
        t`$S = \{1H, 1T, 2H, 2T, 3H, 3T,$ $4H, 4T, 5H, 5T, 6H, 6T\}$.`,
        t`Count the pairs: $n(S) = 6 \times 2 = 12$, not $6 + 2 = 8$.`,
      ],
      answer: t`$n(S) = 12$.`,
    },
    visualSpec: t`Tap objects (a coin, a die, digit cards, children) into an experiment and watch its sample space fill in as a list, with $n(S)$ counting up.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Counts the numbers from a to b by subtracting: b - a",
      remediation: t`Subtracting leaves out one end. The numbers from $a$ to $b$, both included, are $b - a + 1$ in all.`,
      fallback: { kind: "ext", topic: "counting the elements of a set (Std IX Sets)" },
    },
    {
      id: "C01-M2",
      mistake: "Takes the last number on the cards as the number of cards, even when the numbers don't start at 1",
      remediation: t`The last number is the count only when the numbers start at $1$. Otherwise count from the first to the last: $b - a + 1$.`,
      fallback: { kind: "ext", topic: "counting the elements of a set (Std IX Sets)" },
    },
    {
      id: "C01-M3",
      mistake: "Adds the choices for the two places (or two members) instead of pairing each choice with each",
      remediation: "Each choice for the first place goes with each choice for the second, so multiply the choices (then, for a committee, write each group once).",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Swaps the order rule: counts B1G1 and G1B1 as two committees, or 23 and 32 as one number",
      remediation: t`In a number, order matters: $23$ and $32$ are different. In a committee, it doesn't: $B_1G_1$ and $G_1B_1$ are one committee.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Swaps the repetition rule: allows a repeated digit (or member) when it is barred, or forgets 22 and 44 when it is allowed",
      remediation: t`Read the condition. Without repetition a digit is used once; with repetition $22$ counts too. A person can't sit on a committee twice.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Leaves out both end numbers: counts only the numbers strictly between a and b",
      remediation: t`The first and last numbers are on cards too. From $a$ to $b$, both included, there are $b - a + 1$ cards.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1, C01-M2 and C01-M6 apply only to numbered-card items (Q1, Q2); C01-M2 gives the key when the numbers start at 1, so draw such items from a start above 1.",
    "C01-M3, C01-M4 and C01-M5 apply only to two-digit-number and committee items (Q3 to Q6).",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Ex 5.1 Q.1 (4)" },
      stem: t`One number from $10$ to $20$ is written on each card. One card is selected at random. How many possibilities are there, that is, what is $n(S)$?`,
      verify: { kind: "value", inputs: { a: "10", b: "20" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`$11$`, correct: true, value: "11" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C01-M1", value: "10" },
        { key: "C", text: t`$20$`, correct: false, misconceptionId: "C01-M2", value: "20" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C01-M6", value: "9" },
      ],
      solution: {
        steps: [
          t`$S = \{10, 11, 12, \ldots, 20\}$: both $10$ and $20$ are on cards.`,
          t`Count both ends: $20 - 10 + 1 = 11$.`,
          t`So there are $11$ possibilities, $n(S) = 11$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q1(iii)" },
      stem: t`A bag has tickets bearing the numbers $5$ to $25$, one ticket for each number. One ticket is drawn from the bag at random. Find $n(S)$.`,
      verify: { kind: "value", inputs: { a: "5", b: "25" }, params: { ask: "range" } },
      options: [
        { key: "A", text: t`$21$`, correct: true, value: "21" },
        { key: "B", text: t`$20$`, correct: false, misconceptionId: "C01-M1", value: "20" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C01-M2", value: "25" },
        { key: "D", text: t`$19$`, correct: false, misconceptionId: "C01-M6", value: "19" },
      ],
      solution: {
        steps: [
          t`$S = \{5, 6, 7, \ldots, 25\}$: both $5$ and $25$ are on tickets.`,
          t`Count both ends: $25 - 5 + 1 = 21$.`,
          t`So $n(S) = 21$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024/Q1(B)(iv)" },
      stem: t`Two-digit numbers are formed using the digits $2$, $3$ and $5$ without repeating a digit. Find $n(S)$.`,
      verify: { kind: "value", inputs: { d: "3" }, params: { ask: "digits", rep: "no" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C01-M4", value: "3" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C01-M5", value: "9" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C01-M3", value: "5" },
      ],
      solution: {
        steps: [
          t`Tens digit: $3$ choices. Units digit: the $2$ digits left, since no digit repeats.`,
          t`$S = \{23, 25, 32, 35, 52, 53\}$; order matters, so $23$ and $32$ are both in.`,
          t`$n(S) = 3 \times 2 = 6$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Ex 5.2 Q.1 (2)" },
      stem: t`Two-digit numbers are formed using the digits $1$, $4$, $7$ and $8$. A digit may be repeated. Find $n(S)$.`,
      verify: { kind: "value", inputs: { d: "4" }, params: { ask: "digits", rep: "yes" } },
      options: [
        { key: "A", text: t`$16$`, correct: true, value: "16" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C01-M3", value: "8" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C01-M4", value: "10" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C01-M5", value: "12" },
      ],
      solution: {
        steps: [
          t`Tens digit: $4$ choices. Units digit: $4$ choices, since a digit may repeat.`,
          t`Tens digit $1$ gives $11, 14, 17, 18$; each of $4, 7, 8$ gives $4$ more numbers the same way.`,
          t`$n(S) = 4 \times 4 = 16$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2023/Q3(A)(i)" },
      stem: t`A 'Road Safety Committee' of two is formed from $2$ boys ($B_1$, $B_2$) and $2$ girls ($G_1$, $G_2$). Find $n(S)$, the number of different committees.`,
      verify: { kind: "value", inputs: { b: "2", g: "2" }, params: { ask: "committee" } },
      options: [
        { key: "A", text: t`$6$`, correct: true, value: "6" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C01-M3", value: "7" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C01-M4", value: "12" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C01-M5", value: "10" },
      ],
      solution: {
        steps: [
          t`Two boys: $B_1B_2$. Two girls: $G_1G_2$.`,
          t`One boy and one girl: $B_1G_1$, $B_1G_2$, $B_2G_1$, $B_2G_2$.`,
          t`$S = \{B_1B_2, G_1G_2, B_1G_1,$ $B_1G_2, B_2G_1, B_2G_2\}$, so $n(S) = 6$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-probability-10/Event SolvedEx.3" },
      stem: t`A sanitation committee of $2$ members is to be formed from $3$ boys and $2$ girls. Find $n(S)$, the number of different committees.`,
      verify: { kind: "value", inputs: { b: "3", g: "2" }, params: { ask: "committee" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C01-M4", value: "20" },
        { key: "B", text: t`$15$`, correct: false, misconceptionId: "C01-M5", value: "15" },
        { key: "C", text: t`$10$`, correct: true, value: "10" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C01-M3", value: "9" },
      ],
      solution: {
        steps: [
          t`Call them $B_1, B_2, B_3$ and $G_1, G_2$. Two boys: $B_1B_2$, $B_1B_3$, $B_2B_3$. Two girls: $G_1G_2$.`,
          t`One boy and one girl: each of $3$ boys with each of $2$ girls, $3 \times 2 = 6$ committees.`,
          t`$n(S) = 3 + 1 + 6 = 10$.`,
        ],
      },
    },
  ],
};
