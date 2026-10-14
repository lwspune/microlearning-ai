import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A six-digit telephone number must begin with $45$, and no digit may appear more than once. **Are there $10 \times 9 \times 8 \times 7$ such numbers?**`,
    reveal: t`No. The first two places are already filled, and the digits $4$ and $5$ are used up. The last four places are filled from the other $8$ digits: $8 \times 7 \times 6 \times 5 = 1680$. Deal with the condition first, then arrange only what is left.`,
  },
  explanation: {
    intuition: t`A condition takes away some freedom, so deal with it first. Put the restricted things in their places, then arrange the rest from what is left: anything placed is used up. Things that must be together are glued into one block, which moves as a single unit while its members can still swap inside it. For 'never together', count the opposite and subtract it from the total.`,
    formal: t`**Fill the restricted places first.** Arrangements of WORLD that begin with R: R is fixed, and the other $4$ letters fill $4$ places in $4! = 24$ ways. Those that begin with R and end with D: $3! = 6$.

**Together: glue them into a block.** If $k$ particular things out of $n$ must be together, the block and the other $n - k$ things make $n - k + 1$ units. Arrange the units, then the inside of the block:
$$(n - k + 1)! \times k!$$
With several blocks, arrange the blocks, then inside each one. $3$ Marathi and $2$ Hindi books, each language together: $2! \times 3! \times 2! = 24$.

**Never together $=$ all $-$ together.** $10$ examination papers, the best and the worst never together: $10! - 2! \times 9! = 9!\,(10 - 2) = 8 \times 9!$.

**Alternate places.** With equal numbers of boys and girls there are two patterns, $BGBG\ldots$ and $GBGB\ldots$, so the count is $2 \times b! \times g!$. With $5$ boys and $4$ girls only $BGBGBGBGB$ works: $5! \times 4! = 2880$.`,
    worked: {
      prompt: t`In how many ways can $4$ boys and $4$ girls sit in a row so that boys and girls are at alternate places?`,
      steps: [
        t`In $8$ seats, the alternate patterns are $BGBGBGBG$ and $GBGBGBGB$: $2$ patterns.`,
        t`In either pattern, the $4$ boys fill their $4$ seats in $4! = 24$ ways.`,
        t`The $4$ girls fill the other $4$ seats in $4! = 24$ ways.`,
        t`The pattern, the boys and the girls are chosen one after another, so multiply: $2 \times 24 \times 24 = 1152$.`,
      ],
      answer: t`$1152$ ways.`,
    },
    visualSpec: t`A row of letter tiles: drag two tiles together and they snap into one block that slides as a single unit, with a flip button inside the block, while a counter shows (units)! $\times$ (inside)!.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Forgetting that the things inside a block, or the things placed at the restricted places, can swap among themselves (dropping the $k!$ factor)`,
      remediation: t`Gluing fixes who sits together, not their order: the $k$ things in a block can still be arranged in $k!$ ways, and the two things at the ends can swap. Multiply by that count as well.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: "Leaving the block in one fixed spot: arranging only the loose things (and the inside of each block), not the block among them",
      remediation: "A glued block is one unit and moves like any other. Count the units (blocks plus loose things), arrange all of them, then arrange the inside of each block.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: "Adding the counts for the stages (the units, the inside of each block, the ends) instead of multiplying them",
      remediation: "Arranging the units and then arranging inside the block are stages done one after the other, and every way of one goes with every way of the other. Multiply the counts.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: t`Not using up the things already placed: filling the other places from all $n$ things, or arranging all $n$ things as well as the block`,
      remediation: "A thing placed at an end or glued into a block is used up. Fill the remaining places only from what is left, and let the block stand in for its members as one unit.",
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    t`C05-M1 and C05-M2 give the same count for one block of $k$ among $n$ when $n - k + 1 = k!$ (e.g. $3$ brothers together among $8$ people: both give $720$), and for 'never together' when $n = 3$. Draw diagnosing items away from these.`,
    "C05-M2 is modelled only for block and 'never together' items; C05-M4 only for block and restricted-end items.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q8(a)" },
      stem: t`In how many ways can the letters of the word HISTORY be arranged so that Y and T are together?`,
      verify: { kind: "value", inputs: { n: "7" }, params: { kind: "block", sizes: ["2"] } },
      options: [
        { key: "A", text: t`$722$`, correct: false, misconceptionId: "C05-M3", value: "722" },
        { key: "B", text: t`$1440$`, correct: true, value: "1440" },
        { key: "C", text: t`$720$`, correct: false, misconceptionId: "C05-M1", value: "720" },
        { key: "D", text: t`$240$`, correct: false, misconceptionId: "C05-M2", value: "240" },
      ],
      solution: {
        steps: [
          t`Glue Y and T into one block. The block and H, I, S, O, R make $6$ units: $6! = 720$ ways.`,
          t`Inside the block, YT or TY: $2! = 2$ ways.`,
          t`Number of arrangements $= 720 \times 2 = 1440$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q16(iii)" },
      stem: t`In how many ways can $5$ different books be arranged on a shelf so that $2$ particular books are never together?`,
      verify: { kind: "value", inputs: { n: "5" }, params: { kind: "never" } },
      options: [
        { key: "A", text: t`$96$`, correct: false, misconceptionId: "C05-M1", value: "96" },
        { key: "B", text: t`$108$`, correct: false, misconceptionId: "C05-M2", value: "108" },
        { key: "C", text: t`$94$`, correct: false, misconceptionId: "C05-M3", value: "94" },
        { key: "D", text: t`$72$`, correct: true, value: "72" },
      ],
      solution: {
        steps: [
          t`With no condition, $5$ books can be arranged in $5! = 120$ ways.`,
          t`Together: glue the $2$ books into a block, giving $4$ units, $4! = 24$ ways, and $2! = 2$ ways inside. That is $48$ ways.`,
          t`Never together $=$ all $-$ together $= 120 - 48 = 72$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.5.1 SolvedEx.5" },
      stem: t`A teacher has $2$ different books on English, $3$ different books on Physics and $4$ different books on Mathematics. In how many ways can they be placed on a shelf so that all the books on each subject are together?`,
      verify: { kind: "value", inputs: { n: "9" }, params: { kind: "block", sizes: ["2", "3", "4"] } },
      options: [
        { key: "A", text: t`$1728$`, correct: true, value: "1728" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C05-M1", value: "6" },
        { key: "C", text: t`$288$`, correct: false, misconceptionId: "C05-M2", value: "288" },
        { key: "D", text: t`$38$`, correct: false, misconceptionId: "C05-M3", value: "38" },
      ],
      solution: {
        steps: [
          t`Make each subject one block: E, P, M. The $3$ blocks can be arranged in $3! = 6$ ways.`,
          t`Inside the blocks: English $2! = 2$, Physics $3! = 6$, Mathematics $4! = 24$ ways.`,
          t`Number of ways $= 6 \times 2 \times 6 \times 24 = 1728$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q8(d)" },
      stem: t`In how many ways can the letters of the word HISTORY be arranged so that the word begins and ends with a vowel? (Its vowels are I and O.)`,
      verify: { kind: "value", inputs: { n: "7", g: "2" }, params: { kind: "ends" } },
      options: [
        { key: "A", text: t`$122$`, correct: false, misconceptionId: "C05-M3", value: "122" },
        { key: "B", text: t`$5040$`, correct: false, misconceptionId: "C05-M4", value: "5040" },
        { key: "C", text: t`$240$`, correct: true, value: "240" },
        { key: "D", text: t`$120$`, correct: false, misconceptionId: "C05-M1", value: "120" },
      ],
      solution: {
        steps: [
          t`Fill the ends first from the vowels I and O: $2$ choices for the first place, then $1$ for the last, so $2! = 2$ ways.`,
          t`The $5$ middle places take the other $5$ letters H, S, T, R, Y: $5! = 120$ ways.`,
          t`Number of arrangements $= 2 \times 120 = 240$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q17(ii)" },
      stem: t`$3$ boys and $3$ girls are to sit in a row. In how many ways can this be done if there is a girl at each end?`,
      verify: { kind: "value", inputs: { n: "6", g: "3" }, params: { kind: "ends" } },
      options: [
        { key: "A", text: t`$144$`, correct: true, value: "144" },
        { key: "B", text: t`$72$`, correct: false, misconceptionId: "C05-M1", value: "72" },
        { key: "C", text: t`$30$`, correct: false, misconceptionId: "C05-M3", value: "30" },
        { key: "D", text: t`$2160$`, correct: false, misconceptionId: "C05-M4", value: "2160" },
      ],
      solution: {
        steps: [
          t`Fill the ends first: $3$ girls for the left end, then $2$ for the right end, so $^3P_2 = 6$ ways.`,
          t`The $4$ middle seats take the remaining $4$ people ($3$ boys and $1$ girl): $4! = 24$ ways.`,
          t`Number of ways $= 6 \times 24 = 144$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q6(a)" },
      stem: t`In how many ways can the letters of the word ALGORITHM be arranged so that the vowels A, O and I are always together?`,
      verify: { kind: "value", inputs: { n: "9" }, params: { kind: "block", sizes: ["3"] } },
      options: [
        { key: "A", text: t`$30240$`, correct: true, value: "30240" },
        { key: "B", text: t`$5040$`, correct: false, misconceptionId: "C05-M1", value: "5040" },
        { key: "C", text: t`$4320$`, correct: false, misconceptionId: "C05-M2", value: "4320" },
        { key: "D", text: t`$2177280$`, correct: false, misconceptionId: "C05-M4", value: "2177280" },
      ],
      solution: {
        steps: [
          t`Glue the vowels A, O, I into one block. The block and L, G, R, T, H, M make $7$ units: $7! = 5040$ ways.`,
          t`Inside the block, the $3$ vowels can be arranged in $3! = 6$ ways.`,
          t`Number of arrangements $= 5040 \times 6 = 30240$.`,
        ],
      },
    },
  ],
};
