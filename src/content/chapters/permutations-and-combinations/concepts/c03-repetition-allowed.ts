import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** A box, one place to fill, drawn as four segments; `at` is its lower-left corner. */
const box = ([x, y]: Pt, w: number, h: number, step: number): FigureElement[] => [
  { kind: "segment", from: [x, y], to: [x + w, y], step },
  { kind: "segment", from: [x + w, y], to: [x + w, y + h], step },
  { kind: "segment", from: [x + w, y + h], to: [x, y + h], step },
  { kind: "segment", from: [x, y + h], to: [x, y], step },
];

/**
 * Text centred on `at`, in a figure whose view is `width` units wide (drawn 400px wide): a label sits
 * 10px above an "n" anchor, so the anchor drops 15px to centre the text's height on `at`.
 */
const mid = (width: number, [x, y]: Pt, label: string, step: number): FigureElement => ({
  kind: "label",
  at: [x, y - (15 * width) / 400],
  label,
  labelAt: "n",
  step,
});

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$5$ different chocolates are shared among $4$ children, and a child may get any number of them, even none. **Is the count $4^5$ or $5^4$?**`,
    reveal: t`Follow the chocolates. Each chocolate picks its child: $4$ choices, and it is the same $4$ for every chocolate. That is $5$ choices of $4$ each, so $4 \times 4 \times 4 \times 4 \times 4 = 4^5 = 1024$. The other way round fails: a child does not pick just one chocolate.`,
  },
  explanation: {
    intuition: [
      t`A **place** is one blank to fill, such as one digit of a number or one letter of a word.`,
      t`**Repetition allowed** means a thing used in one place can be used again in another.`,
      t`So every one of the $r$ places has the same $n$ choices.`,
      t`Recall: by the multiplication principle, the choices of places filled one after another multiply.`,
      t`So $r$ places give $n \times n \times \cdots \times n$ ways, which is $n^r$.`,
      t`In $n^r$, the **base** $n$ is what each place chooses from; the **power** $r$ counts the places.`,
    ],
    figure: {
      alt: "A row of r boxes, the places, with dots standing for the boxes between. Each box holds n, its number of choices. Multiplication signs join the boxes, and the row equals n to the power r.",
      axes: "none",
      view: { x: [-0.4, 8.4], y: [-1.1, 1.4] },
      elements: [
        ...box([0, 0], 1.2, 1, 1),
        ...box([2, 0], 1.2, 1, 1),
        mid(8.8, [4.2, 0.5], "⋯", 1),
        ...box([5.2, 0], 1.2, 1, 1),
        { kind: "segment", from: [0, -0.3], to: [6.4, -0.3], tone: "muted", step: 1 },
        { kind: "label", at: [3.2, -0.3], label: "r places", labelAt: "s", tone: "muted", step: 1 },
        mid(8.8, [0.6, 0.5], "n", 3),
        mid(8.8, [2.6, 0.5], "n", 3),
        mid(8.8, [5.8, 0.5], "n", 3),
        mid(8.8, [1.6, 0.5], "×", 4),
        mid(8.8, [3.6, 0.5], "×", 4),
        mid(8.8, [4.8, 0.5], "×", 4),
        mid(8.8, [7.4, 0.5], "= nʳ", 5),
      ],
    },
    formal: [
      {
        title: "Arrangements with repetition",
        points: [
          t`An **arrangement** fills the places in order, so $AB$ and $BA$ are different.`,
          t`Arrange $r$ things taken from $n$ different things, each repeatable any number of times.`,
          t`The number of such arrangements is $n \times n \times \cdots \times n$, with $r$ factors.`,
          t`That is $n^r$.`,
        ],
      },
      {
        title: "Which is the base?",
        points: [
          t`To find the base, ask what makes each choice.`,
          t`Example: $5$ different letters are posted in $3$ post boxes.`,
          t`Each letter chooses its box, so each letter is a place: $5$ places.`,
          t`Each place has the same $3$ choices, the post boxes.`,
          t`Multiply the $5$ choices of $3$ each: $3^5 = 243$.`,
          t`It is not $5^3$: a box does not choose just one letter.`,
        ],
        figure: {
          alt: "Five boxes in a row, one for each letter, so 5 places. Each box holds 3, the post boxes it can choose. Multiplication signs join them, and the row equals 3 to the power 5.",
          axes: "none",
          view: { x: [-0.4, 8.6], y: [-1.1, 1.4] },
          elements: [
            ...[0, 1.5, 3, 4.5, 6].flatMap((x) => box([x, 0], 1, 1, 3)),
            { kind: "segment", from: [0, -0.3], to: [7, -0.3], tone: "muted", step: 3 },
            { kind: "label", at: [3.5, -0.3], label: "5 letters: 5 places", labelAt: "s", tone: "muted", step: 3 },
            ...[0, 1.5, 3, 4.5, 6].map((x) => mid(9, [x + 0.5, 0.5], "3", 4)),
            ...[1.25, 2.75, 4.25, 5.75].map((x) => mid(9, [x, 0.5], "×", 5)),
            mid(9, [7.8, 0.5], "= 3⁵", 5),
          ],
        },
      },
      {
        title: "With and without repetition",
        points: [
          t`A **word** here is any row of letters, with or without meaning.`,
          t`Form $2$-letter words from the $6$ letters $A, B, C, D, E, F$.`,
          t`With repetition, both places have all $6$ letters: $6 \times 6 = 36$ words.`,
          t`Without repetition, the second place can't reuse the first letter: $6 \times 5 = 30$.`,
          t`The $6$ extra words with repetition are $AA, BB, \ldots, FF$.`,
        ],
        figure: {
          alt: "Two rows of two boxes. With repetition, both boxes hold 6, and 6 × 6 = 36. Without repetition, the boxes hold 6 and 5, and 6 × 5 = 30.",
          axes: "none",
          view: { x: [-1.75, 5.25], y: [-0.4, 2.9] },
          elements: [
            { kind: "label", at: [1.25, 2.3], label: "with repetition", labelAt: "n", tone: "muted", step: 3 },
            ...box([0, 1.5], 1, 0.8, 3),
            ...box([1.5, 1.5], 1, 0.8, 3),
            mid(7, [0.5, 1.9], "6", 3),
            mid(7, [1.25, 1.9], "×", 3),
            mid(7, [2, 1.9], "6", 3),
            mid(7, [3.4, 1.9], "= 36", 3),
            { kind: "label", at: [1.25, 0.8], label: "without repetition", labelAt: "n", tone: "muted", step: 4 },
            ...box([0, 0], 1, 0.8, 4),
            ...box([1.5, 0], 1, 0.8, 4),
            mid(7, [0.5, 0.4], "6", 4),
            mid(7, [1.25, 0.4], "×", 4),
            mid(7, [2, 0.4], "5", 4),
            mid(7, [3.4, 0.4], "= 30", 4),
          ],
        },
      },
      {
        title: "A restricted first place",
        points: [
          t`A **restricted** place is one where some thing is not allowed, such as $0$ first in a number.`,
          t`Likewise, $ax^2 + bx + c = 0$ is a quadratic only if $a \ne 0$.`,
          t`Fill the restricted place first, with one choice fewer: $n - 1$.`,
          t`The other $r - 1$ places still have all $n$ choices.`,
          t`So the count is $(n - 1) \times n^{r-1}$.`,
        ],
        figure: {
          alt: "A row of r boxes, the first marked restricted. The first box holds n − 1; the other r − 1 boxes each hold n. Multiplication signs join them.",
          axes: "none",
          view: { x: [-0.4, 7], y: [-1.1, 1.6] },
          elements: [
            ...box([0, 0], 1.4, 1, 1),
            { kind: "label", at: [0.7, 1], label: "restricted", labelAt: "n", tone: "muted", step: 1 },
            ...box([2.2, 0], 1.2, 1, 1),
            mid(7.4, [4.4, 0.5], "⋯", 1),
            ...box([5.4, 0], 1.2, 1, 1),
            mid(7.4, [0.7, 0.5], "n − 1", 3),
            mid(7.4, [2.8, 0.5], "n", 4),
            mid(7.4, [6, 0.5], "n", 4),
            { kind: "segment", from: [2.2, -0.3], to: [6.6, -0.3], tone: "muted", step: 4 },
            { kind: "label", at: [4.4, -0.3], label: "r − 1 places", labelAt: "s", tone: "muted", step: 4 },
            mid(7.4, [1.8, 0.5], "×", 5),
            mid(7.4, [3.8, 0.5], "×", 5),
            mid(7.4, [5, 0.5], "×", 5),
          ],
        },
      },
    ],
    worked: {
      prompt: t`How many four-digit numbers can be formed from the digits $0, 2, 5, 7, 9$, if repetition of digits is allowed?`,
      steps: [
        t`There are $4$ places, and each can take one of $5$ digits.`,
        t`The thousands place can't be $0$: $4$ choices ($2, 5, 7, 9$).`,
        t`Repetition is allowed, so the hundreds, tens and units places each have all $5$ choices, $0$ included.`,
        t`By the multiplication principle: $4 \times 5 \times 5 \times 5 = 500$. (Using $5^4 = 625$ would wrongly count the $125$ strings that start with $0$.)`,
      ],
      answer: t`$500$ four-digit numbers.`,
    },
    visualSpec: t`A row of $r$ empty boxes, each with a dial of the same $n$ things; spinning each dial multiplies the count by $n$, and greying $0$ on the first dial shows the leading-zero rule.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Swapping the base and the power: writing $r^n$ (the things choose places) instead of $n^r$`,
      remediation: t`The power is the number of choices made, and the base is the number of options for each one. When letters go into boxes, each letter chooses a box, so it is (boxes)$^{\text{letters}}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Counting as if repetition were not allowed: $n(n-1)(n-2)\cdots$`,
      remediation: t`When repetition is allowed, a thing used in one place is still available for the next, so every place has all $n$ choices: $n \times n \times \cdots = n^r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Adding the choices for the places ($n + n + \cdots$, or $n \times r$) instead of multiplying them`,
      remediation: t`The places are filled one after another, and every choice for one place goes with every choice for the next. That is the multiplication principle: multiply the choices, $n \times n \times \cdots \times n = n^r$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: t`Ignoring the rule on the first place: counting $n^r$ when a number can't start with $0$ (or $a \ne 0$ in a quadratic)`,
      remediation: t`A three-digit number can't start with $0$, and $ax^2 + bx + c = 0$ is a quadratic only if $a \ne 0$. Fill that place first with one choice fewer: $(n - 1) \times n^{r-1}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C03-M1 ($r^n$) gives the key when $n = r$ (and for $n, r = 2, 4$); draw diagnosing items with $n \ne r$. It is modelled only for items whose places are all free ($z = 0$).`,
    t`C03-M2 does not apply when $r > n$ (no arrangement without repetition), so items that test it need $r \le n$.`,
    t`C03-M4 applies only to items with a restricted first place ($z = 1$: a leading $0$ or $a \ne 0$).`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.1 Q3(i)" },
      stem: t`How many two-letter words (with or without meaning) can be formed using the letters of the word SPACE, if repetition of letters is allowed?`,
      verify: { kind: "value", inputs: { n: "5", r: "2", z: "0" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C03-M2", value: "20" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C03-M3", value: "10" },
        { key: "C", text: t`$25$`, correct: true, value: "25" },
        { key: "D", text: t`$32$`, correct: false, misconceptionId: "C03-M1", value: "32" },
      ],
      solution: {
        steps: [
          t`SPACE has $5$ different letters, and a two-letter word has $2$ places.`,
          t`Repetition is allowed, so each place has all $5$ choices.`,
          t`Number of words $= 5 \times 5 = 5^2 = 25$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q5(a)" },
      stem: t`How many 4-letter words (with or without meaning) can be formed using the letters of the word MADHURI, if letters can be repeated?`,
      verify: { kind: "value", inputs: { n: "7", r: "4", z: "0" } },
      options: [
        { key: "A", text: t`$840$`, correct: false, misconceptionId: "C03-M2", value: "840" },
        { key: "B", text: t`$28$`, correct: false, misconceptionId: "C03-M3", value: "28" },
        { key: "C", text: t`$2401$`, correct: true, value: "2401" },
        { key: "D", text: t`$16384$`, correct: false, misconceptionId: "C03-M1", value: "16384" },
      ],
      solution: {
        steps: [
          t`MADHURI has $7$ different letters: M, A, D, H, U, R, I. A $4$-letter word has $4$ places.`,
          t`Letters can repeat, so each of the $4$ places has all $7$ choices.`,
          t`Number of words $= 7 \times 7 \times 7 \times 7 = 7^4 = 2401$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q14" },
      stem: t`In how many ways can $3$ different letters be posted in $4$ post boxes, if any number of letters can be posted in a post box?`,
      verify: { kind: "value", inputs: { n: "4", r: "3", z: "0" } },
      options: [
        { key: "A", text: t`$81$`, correct: false, misconceptionId: "C03-M1", value: "81" },
        { key: "B", text: t`$24$`, correct: false, misconceptionId: "C03-M2", value: "24" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C03-M3", value: "12" },
        { key: "D", text: t`$64$`, correct: true, value: "64" },
      ],
      solution: {
        steps: [
          t`Each letter chooses its post box. There are $3$ letters, so $3$ choices are made.`,
          t`Any box can take any number of letters, so each letter has all $4$ boxes to choose from.`,
          t`Number of ways $= 4 \times 4 \times 4 = 4^3 = 64$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.1 Q4(i)" },
      stem: t`How many three-digit numbers can be formed from the digits $0, 1, 3, 5, 6$, if repetition of digits is allowed?`,
      verify: { kind: "value", inputs: { n: "5", r: "3", z: "1" } },
      options: [
        { key: "A", text: t`$14$`, correct: false, misconceptionId: "C03-M3", value: "14" },
        { key: "B", text: t`$125$`, correct: false, misconceptionId: "C03-M4", value: "125" },
        { key: "C", text: t`$100$`, correct: true, value: "100" },
        { key: "D", text: t`$48$`, correct: false, misconceptionId: "C03-M2", value: "48" },
      ],
      solution: {
        steps: [
          t`A three-digit number has $3$ places. The hundreds place can't be $0$: $4$ choices ($1, 3, 5, 6$).`,
          t`Repetition is allowed, so the tens and units places each have all $5$ choices, $0$ included.`,
          t`Number of numbers $= 4 \times 5 \times 5 = 100$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q12" },
      stem: t`How many quadratic equations $ax^2 + bx + c = 0$ can be formed using numbers from $0, 2, 4, 5$ as the coefficients $a$, $b$, $c$, if a coefficient can be repeated in an equation?`,
      verify: { kind: "value", inputs: { n: "4", r: "3", z: "1" } },
      options: [
        { key: "A", text: t`$48$`, correct: true, value: "48" },
        { key: "B", text: t`$18$`, correct: false, misconceptionId: "C03-M2", value: "18" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C03-M3", value: "11" },
        { key: "D", text: t`$64$`, correct: false, misconceptionId: "C03-M4", value: "64" },
      ],
      solution: {
        steps: [
          t`An equation is fixed by choosing $a$, $b$ and $c$: $3$ places, each from $0, 2, 4, 5$.`,
          t`It is a quadratic only if $a \ne 0$: $3$ choices for $a$. A coefficient can repeat, so $b$ and $c$ each have all $4$ choices.`,
          t`Number of equations $= 3 \times 4 \times 4 = 48$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`A lock opens with a $3$-digit code. Each digit can be any of $0, 1, 2, \ldots, 9$, digits may repeat, and a code may start with $0$ (so $007$ is a code). How many codes are possible?`,
      verify: { kind: "value", inputs: { n: "10", r: "3", z: "0" } },
      options: [
        { key: "A", text: t`$1000$`, correct: true, value: "1000" },
        { key: "B", text: t`$59049$`, correct: false, misconceptionId: "C03-M1", value: "59049" },
        { key: "C", text: t`$720$`, correct: false, misconceptionId: "C03-M2", value: "720" },
        { key: "D", text: t`$30$`, correct: false, misconceptionId: "C03-M3", value: "30" },
      ],
      solution: {
        steps: [
          t`A code has $3$ places, and each can be any of the $10$ digits $0$ to $9$.`,
          t`Digits may repeat and a code may start with $0$, so every place has all $10$ choices.`,
          t`Number of codes $= 10 \times 10 \times 10 = 10^3 = 1000$.`,
        ],
      },
    },
  ],
};
