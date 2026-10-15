import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

type Tone = FigureElement["tone"];

/** Half the side of a letter tile. */
const H = 0.4;

/** The outline of the rectangle with corners (x0, y0) and (x1, y1). */
const box = (x0: number, y0: number, x1: number, y1: number, tone: Tone, step: number): FigureElement[] => [
  { kind: "segment", from: [x0, y0], to: [x1, y0], tone, step },
  { kind: "segment", from: [x1, y0], to: [x1, y1], tone, step },
  { kind: "segment", from: [x1, y1], to: [x0, y1], tone, step },
  { kind: "segment", from: [x0, y1], to: [x0, y0], tone, step },
];

/** A square tile centred at (x, y) with its letter in the middle ("s" puts the text's centre 0.255 below the anchor). */
const tile = (x: number, y: number, letter: string, tone: Tone, step: number): FigureElement[] => [
  ...box(x - H, y - H, x + H, y + H, tone, step),
  { kind: "label", at: [x, y + 0.255], label: letter, labelAt: "s", step },
];

/** Two tiles pushed side by side about x, boxed as one block. */
const block = (x: number, y: number, [a, b]: [string, string], step: number): FigureElement[] => [
  ...tile(x - H, y, a, "accent", step),
  ...tile(x + H, y, b, "accent", step),
  ...box(x - 2 * H - 0.1, y - H - 0.1, x + 2 * H + 0.1, y + H + 0.1, "good", step),
];

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A six-digit telephone number must begin with $45$, and no digit may appear more than once. **Are there $10 \times 9 \times 8 \times 7$ such numbers?**`,
    reveal: t`No. The first two places are already filled, and the digits $4$ and $5$ are used up. The last four places are filled from the other $8$ digits: $8 \times 7 \times 6 \times 5 = 1680$. Deal with the condition first, then arrange only what is left.`,
  },
  explanation: {
    intuition: [
      t`A **condition** is a rule every arrangement must obey; it takes away some freedom, so deal with it first.`,
      t`The **restricted** things are the ones the condition names: put them in their places first.`,
      t`Anything placed is used up, so arrange the rest only from what is left.`,
      t`Things that must be **together**, side by side, are glued into one **block**.`,
      t`The block moves as a single **unit**, while its members can still swap places inside it.`,
      t`For **never together**, count the opposite, the arrangements with them together, and subtract that from the total.`,
    ],
    formal: [
      {
        title: "Fill the restricted places first",
        points: [
          t`Recall: $n$ different things fill $n$ places in a row in $n!$ ways.`,
          t`Arrange the letters of WORLD so that the word begins with R.`,
          t`R is fixed in the first place, so it is used up.`,
          t`The other $4$ letters fill the other $4$ places in $4! = 24$ ways.`,
          t`To begin with R and end with D, fix D in the last place as well.`,
          t`The $3$ letters left fill the $3$ middle places in $3! = 6$ ways.`,
        ],
      },
      {
        title: "Together: glue into a block",
        points: [
          t`Suppose $k$ particular things out of $n$ must be together.`,
          t`Glue them into one block, which moves as one unit, like a single thing.`,
          t`The block and the other $n - k$ things make $n - k + 1$ units.`,
          t`The units can be arranged in $(n - k + 1)!$ ways.`,
          t`Inside the block, the $k$ things can swap places in $k!$ ways.`,
          t`Each order of the units goes with each order inside, so multiply: $(n - k + 1)! \times k!$.`,
        ],
        figure: {
          alt: "Five tiles A, B, C, D, E in a row, with B and C the two that must be together: n = 5, k = 2. Below, B and C are pushed side by side and boxed as one block, so the row is 4 units: A, the block, D and E. Next, the 4 units in another order, D, A, E and then the block: there are 4! orders. Last, the same order with the block flipped to C B: 2! orders inside. In all, 4! × 2! = 48 ways.",
          axes: "none",
          view: { x: [-0.6, 7.4], y: [-0.8, 5.9] },
          elements: [
            ...tile(0, 5.2, "A", "muted", 1),
            ...tile(1, 5.2, "B", "accent", 1),
            ...tile(2, 5.2, "C", "accent", 1),
            ...tile(3, 5.2, "D", "muted", 1),
            ...tile(4, 5.2, "E", "muted", 1),
            { kind: "label", at: [4.55, 5.2], label: "n = 5, k = 2", labelAt: "e", step: 1 },
            ...tile(0, 3.6, "A", "muted", 2),
            ...block(1.5, 3.6, ["B", "C"], 2),
            { kind: "label", at: [1.5, 4.1], label: "block", labelAt: "n", tone: "good", step: 2 },
            ...tile(3, 3.6, "D", "muted", 2),
            ...tile(4, 3.6, "E", "muted", 2),
            { kind: "label", at: [4.55, 3.6], label: "4 units", labelAt: "e", step: 3 },
            ...tile(0, 2, "D", "muted", 4),
            ...tile(1, 2, "A", "muted", 4),
            ...tile(2, 2, "E", "muted", 4),
            ...block(3.5, 2, ["B", "C"], 4),
            { kind: "label", at: [4.55, 2], label: "4! orders", labelAt: "e", step: 4 },
            ...tile(0, 0.4, "D", "muted", 5),
            ...tile(1, 0.4, "A", "muted", 5),
            ...tile(2, 0.4, "E", "muted", 5),
            ...block(3.5, 0.4, ["C", "B"], 5),
            { kind: "label", at: [4.55, 0.4], label: "2! inside", labelAt: "e", step: 5 },
            { kind: "label", at: [2, -0.15], label: "4! × 2! = 48 ways", labelAt: "s", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Several blocks at once",
        points: [
          t`With several blocks, each block is one unit.`,
          t`Arrange the units first, then the inside of each block, and multiply.`,
          t`Example: $3$ Marathi and $2$ Hindi books, the books of each language together.`,
          t`The two blocks make $2$ units, arranged in $2!$ ways.`,
          t`Inside, the Marathi books go in $3!$ ways and the Hindi books in $2!$ ways.`,
          t`So there are $2! \times 3! \times 2! = 24$ ways.`,
        ],
      },
      {
        title: "Never together: all minus together",
        points: [
          t`**Never together** means the particular things are never all side by side.`,
          t`Each arrangement has them either together or not, never both.`,
          t`So never together $=$ all $-$ together.`,
          t`Example: $10$ examination papers, with the best and the worst never together.`,
          t`With no condition there are $10!$ orders; with the pair glued, $9$ units give $2! \times 9!$.`,
          t`Never together: $10! - 2! \times 9!$ $= 9!\,(10 - 2) = 8 \times 9!$.`,
        ],
      },
      {
        title: "Alternate places",
        points: [
          t`Boys and girls sit at **alternate places** when no two boys and no two girls sit side by side.`,
          t`With equal numbers, there are two patterns ($B$ a boy, $G$ a girl): $BGBG\ldots$ and $GBGB\ldots$.`,
          t`In either pattern, the $b$ boys fill their places in $b!$ ways, and the $g$ girls theirs in $g!$.`,
          t`So the count is $2 \times b! \times g!$.`,
          t`With $5$ boys and $4$ girls, a boy must sit at each end: only $BGBGBGBGB$ works.`,
          t`So the count is $5! \times 4! = 2880$.`,
        ],
      },
    ],
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
