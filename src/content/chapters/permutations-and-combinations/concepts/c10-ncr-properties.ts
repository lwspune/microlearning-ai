import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** Row 6 of Pascal's triangle, drawn as bars of height H per unit, each 2W wide, centred at r - 3. */
const row6 = [1, 6, 15, 20, 15, 6, 1];
const H = 0.15;
const W = 0.35;
const SUB = "₀₁₂₃₄₅₆";

/** The outline of the bar for ⁶Cᵣ: its two sides and its top. */
function bar(r: number, tone: FigureElement["tone"], step: number): FigureElement[] {
  const [x0, x1, h] = [r - 3 - W, r - 3 + W, row6[r] * H];
  return [
    { kind: "segment", from: [x0, 0], to: [x0, h], tone, step },
    { kind: "segment", from: [x0, h], to: [x1, h], tone, step },
    { kind: "segment", from: [x1, 0], to: [x1, h], tone, step },
  ];
}

/** The bar for ⁶Cᵣ, outlined and shaded in `tone`. */
function filledBar(r: number, tone: FigureElement["tone"], step: number): FigureElement[] {
  const [x0, x1, h] = [r - 3 - W, r - 3 + W, row6[r] * H];
  const corners: Pt[] = [[x0, 0], [x1, 0], [x1, h], [x0, h]];
  return [
    { kind: "region", within: corners.map((p, i) => ({ kind: "halfPlane" as const, through: [p, corners[(i + 1) % 4]] as [Pt, Pt] })), tone, step },
    ...bar(r, tone, step),
  ];
}

/** ᵏCⱼ, for the small rows drawn. */
const choose = (k: number, j: number): number => (j === 0 || j === k ? 1 : choose(k - 1, j - 1) + choose(k - 1, j));

/** Where ᵏCⱼ sits in the drawn triangle: row k one unit below row k - 1, entries one unit apart. */
const pascalAt = (k: number, j: number): Pt => [j - k / 2, 5 - k];

/** From a label's anchor up to the middle of its text (labelAt "n", 15 px type), in figure units. */
const LIFT = 0.29;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`$^nC_8 = {}^nC_6$, yet $8 \ne 6$. **How can two different lower indices give the same number, and what is $n$?**`,
    reveal: t`Choosing $8$ things to take from $n$ is the same as choosing the $n - 8$ to leave behind. So $^nC_8 = {}^nC_{n-8}$, and this equals $^nC_6$ when $n - 8 = 6$. So $n = 14$: picking $8$ of $14$ and picking $6$ of $14$ are the same count.`,
  },
  explanation: {
    intuition: [
      t`Recall: $^nC_r$ counts the ways to choose $r$ things from $n$ different things.`,
      t`**Row $n$** is the list $^nC_0, {}^nC_1, \ldots, {}^nC_n$; row $6$ is $1, 6, 15, 20, 15, 6, 1$.`,
      t`Taking $2$ of $6$ things leaves $4$ behind, so $^6C_2 = {}^6C_4$: both are $15$.`,
      t`In general, taking $r$ things leaves $n - r$, so $^nC_r = {}^nC_{n-r}$: equal values come in mirror pairs.`,
      t`A row rises to the middle and falls again, so its largest value sits in the middle.`,
      t`Two **neighbours**, side by side in one row, add up to an entry of the next row: that is **Pascal's rule**.`,
    ],
    figure: {
      alt: "Row 6 drawn as seven bars, one for each of 6C0 to 6C6, with heights 1, 6, 15, 20, 15, 6, 1. The bars for 6C2 and 6C4 light up together: both are 15. Then the other mirror pairs light up, either side of a dashed line down the middle, and last the middle bar, 6C3 = 20, the tallest.",
      axes: "none",
      view: { x: [-3.8, 3.8], y: [-0.6, 3.6] },
      elements: [
        { kind: "segment", from: [-3.6, 0], to: [3.6, 0], tone: "muted" },
        ...row6.flatMap((_, r) => bar(r, "muted", 2)),
        ...row6.map((v, r): FigureElement => ({ kind: "label", at: [r - 3, v * H], label: String(v), labelAt: "n", step: 2 })),
        ...row6.map((_, r): FigureElement => ({ kind: "label", at: [r - 3, 0], label: `⁶C${SUB[r]}`, labelAt: "s", tone: "muted", step: 2 })),
        ...[2, 4].flatMap((r) => filledBar(r, "good", 3)),
        ...[0, 1, 5, 6].flatMap((r) => filledBar(r, "good", 4)),
        { kind: "segment", from: [0, 0], to: [0, 20 * H], dashed: true, tone: "muted", step: 4 },
        ...filledBar(3, "accent", 5),
      ],
    },
    formal: [
      {
        title: "The complement rule",
        points: [
          t`In $^nC_r$, $n$ is the **upper index** and $r$ is the **lower index**.`,
          t`Each choice of $r$ things has a **complement**: the $n - r$ things it leaves out.`,
          t`So $^nC_r = {}^nC_{n-r}$: the lower index $r$ can be swapped for $n - r$, with the upper index unchanged.`,
          t`Use it to shorten work when $r$ is close to $n$.`,
          t`For example, $^{100}C_{98} = {}^{100}C_2$, since $100 - 98 = 2$.`,
          t`And $^{100}C_2$ equals $\frac{100 \times 99}{2}$, which is $4950$.`,
        ],
      },
      {
        title: "When two values are equal",
        points: [
          t`Suppose $^nC_x = {}^nC_y$, with the same upper index $n$.`,
          t`Then either $x = y$, **or** $x + y = n$, a mirror pair.`,
          t`Solve **both** cases: each one can give values of the unknown.`,
          t`Recall: $^nC_r$ exists only when $r$ is a whole number from $0$ to $n$.`,
          t`So put each value back into **both** lower indices.`,
          t`Keep it only if each lower index is a whole number from $0$ to $n$.`,
        ],
      },
      {
        title: "Pascal's rule",
        points: [
          t`Add two neighbours of row $n$: $^nC_r + {}^nC_{r-1}$ equals $^{n+1}C_r$, the entry below them.`,
          t`The upper index goes up by one, and the larger lower index stays: $^4C_2 + {}^4C_1 = {}^5C_2$.`,
          t`Why: out of $n + 1$ things, mark one particular thing.`,
          t`A choice of $r$ that leaves it out takes all $r$ from the other $n$: $^nC_r$ ways.`,
          t`A choice of $r$ that takes it needs only $r - 1$ more from the other $n$: $^nC_{r-1}$ ways.`,
          t`Every choice does one or the other, so the two counts add up to $^{n+1}C_r$.`,
        ],
        figure: {
          alt: "Rows 0 to 5 of Pascal's triangle: 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1; 1 5 10 10 5 1, each entry set below and between two entries of the row above. The neighbours 4 and 6 in row 4 are circled, with arrows down to the 10 between them in row 5. Then the label 4C2 + 4C1 = 5C2 appears.",
          axes: "none",
          view: { x: [-4.1, 3.4], y: [-0.35, 5.6] },
          elements: [
            ...[0, 1, 2, 3, 4, 5].map((k): FigureElement => ({ kind: "label", at: [-3.6, 5 - k], label: `row ${k}`, labelAt: "n", tone: "muted" })),
            ...[0, 1, 2, 3, 4, 5].flatMap((k) =>
              Array.from({ length: k + 1 }, (_, j): FigureElement => ({ kind: "label", at: pascalAt(k, j), label: String(choose(k, j)), labelAt: "n" })),
            ),
            ...[pascalAt(4, 1), pascalAt(4, 2), pascalAt(5, 2)].map((p): FigureElement => ({ kind: "circle", centre: [p[0], p[1] + LIFT], r: 0.3, tone: "good", step: 1 })),
            { kind: "vector", from: [-0.866, 1.022], to: [-0.634, 0.558], tone: "good", step: 1 },
            { kind: "vector", from: [-0.134, 1.022], to: [-0.366, 0.558], tone: "good", step: 1 },
            { kind: "label", at: [0.7, 5.2], label: "⁴C₂ + ⁴C₁ = ⁵C₂", labelAt: "e", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Ratio of neighbours",
        points: [
          t`Divide an entry of row $n$ by its left neighbour: $\frac{{}^nC_r}{{}^nC_{r-1}}$ equals $\frac{n - r + 1}{r}$.`,
          t`This comes from writing both with factorials and cancelling.`,
          t`The ratio links $n$ and $r$, so a given ratio of entries gives equations in $n$ and $r$.`,
        ],
      },
      {
        title: "Finding n and r from ratios",
        points: [
          t`Suppose $^nC_{r-1} : {}^nC_r : {}^nC_{r+1}$ is $14 : 8 : 3$.`,
          t`The first two give $\frac{n - r + 1}{r} = \frac{8}{14}$, so $7n - 11r = -7$.`,
          t`The last two, by the same rule with $r + 1$ for $r$, give $\frac{n - r}{r + 1} = \frac{3}{8}$, so $8n - 11r = 3$.`,
          t`Subtract the first equation from the second: $n = 10$.`,
          t`Then $70 - 11r = -7$, so $r = 7$.`,
          t`Check: $^{10}C_6 : {}^{10}C_7 : {}^{10}C_8$ is $210 : 120 : 45$, which is $14 : 8 : 3$.`,
        ],
      },
      {
        title: "The largest value in a row",
        points: [
          t`The ratio $\frac{n - r + 1}{r}$ is above $1$ while $r < \frac{n + 1}{2}$, so the row rises.`,
          t`Past the middle the ratio is below $1$, so the row falls.`,
          t`For even $n$, the largest value is at $r = \frac{n}{2}$, such as $^8C_4 = 70$.`,
          t`For odd $n$, the two middle values tie for the largest, at $r = \frac{n - 1}{2}$ and $r = \frac{n + 1}{2}$.`,
          t`For example, $^{11}C_5 = {}^{11}C_6 = 462$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $r$ if $^{16}C_4 + {}^{16}C_5 + {}^{17}C_6 + {}^{18}C_7 = {}^{19}C_r$.`,
      steps: [
        t`Pascal's rule on the first pair: $^{16}C_4 + {}^{16}C_5 = {}^{17}C_5$, the upper index up by one and the larger lower index kept.`,
        t`Now $^{17}C_5 + {}^{17}C_6 = {}^{18}C_6$, and then $^{18}C_6 + {}^{18}C_7 = {}^{19}C_7$.`,
        t`So $^{19}C_7 = {}^{19}C_r$. Either $r = 7$, or $r + 7 = 19$, giving $r = 12$.`,
        t`Both $7$ and $12$ lie between $0$ and $19$, so both are valid.`,
      ],
      answer: t`$r = 7$ or $r = 12$.`,
    },
    visualSpec: t`Drag $n$ to build row $n$ of Pascal's triangle as bars of height $^nC_r$: the bars mirror about the middle and peak there, and tapping two neighbouring bars drops their sum into the row below.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Giving Pascal's sum the smaller lower index: nC(r-1) + nC(r) = (n+1)C(r-1)",
      remediation: t`Pascal's rule keeps the larger lower index: $^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$. Check with small numbers: $^2C_0 + {}^2C_1 = 1 + 2 = 3 = {}^3C_1$, not $^3C_0 = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "From nC(x) = nC(y), concluding only x = y",
      remediation: t`Taking $r$ things leaves $n - r$ behind, so $^nC_r = {}^nC_{n-r}$. So $^nC_x = {}^nC_y$ has two cases, $x = y$ or $x + y = n$: solve both.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M3",
      mistake: "From nC(x) = nC(y), using only x + y = n and dropping the case x = y",
      remediation: t`$x + y = n$ is the second case, not the only one. Equal lower indices give equal values too, so solve $x = y$ as well and keep the valid roots of both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Keeping every root of the equations without checking that each lower index lies between 0 and n",
      remediation: t`$^nC_r$ exists only for whole numbers $r$ from $0$ to $n$. Put each root back into both lower indices and reject any root that makes one negative or bigger than $n$.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  engineNotes: [
    "C10-M1 can only be caught on items with a Pascal step (Q1, Q2, Q5); C10-M4 only on equations where some root puts a lower index outside 0 to n (Q3, Q4).",
    "C10-M2 and C10-M3 give the key when the two cases agree (x = n - x, e.g. 14C7 = 14Cr); draw diagnosing items where they differ.",
    "The largest nCr and the ratio of neighbours are taught in the formal section and not checked by these items.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q1(c)" },
      stem: t`If $^{15}C_4 + {}^{15}C_5 = {}^{16}C_r$, then:`,
      verify: { kind: "value", inputs: { N: "16" }, params: { kind: "pascal", terms: ["1 15 4", "1 15 5"] } },
      options: [
        { key: "A", text: t`$r = 4$ or $r = 12$`, correct: false, misconceptionId: "C10-M1", value: "{4, 12}" },
        { key: "B", text: t`$r = 5$ only`, correct: false, misconceptionId: "C10-M2", value: "{5}" },
        { key: "C", text: t`$r = 11$ only`, correct: false, misconceptionId: "C10-M3", value: "{11}" },
        { key: "D", text: t`$r = 5$ or $r = 11$`, correct: true, value: "{5, 11}" },
      ],
      solution: {
        steps: [
          t`Pascal's rule: $^{15}C_4 + {}^{15}C_5 = {}^{16}C_5$.`,
          t`So $^{16}C_5 = {}^{16}C_r$. Either $r = 5$, or $r + 5 = 16$, giving $r = 11$.`,
          t`Both lie between $0$ and $16$, so $r = 5$ or $r = 11$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q1(d)" },
      stem: t`If $^{20}C_{16} - {}^{19}C_{16} = {}^{19}C_r$, then:`,
      verify: { kind: "value", inputs: { N: "19" }, params: { kind: "pascal", terms: ["1 20 16", "-1 19 16"] } },
      options: [
        { key: "A", text: t`$r = 4$ or $r = 15$`, correct: true, value: "{4, 15}" },
        { key: "B", text: t`$r = 2$ or $r = 17$`, correct: false, misconceptionId: "C10-M1", value: "{2, 17}" },
        { key: "C", text: t`$r = 15$ only`, correct: false, misconceptionId: "C10-M2", value: "{15}" },
        { key: "D", text: t`$r = 4$ only`, correct: false, misconceptionId: "C10-M3", value: "{4}" },
      ],
      solution: {
        steps: [
          t`Pascal's rule: $^{20}C_{16} = {}^{19}C_{16} + {}^{19}C_{15}$.`,
          t`So $^{20}C_{16} - {}^{19}C_{16} = {}^{19}C_{15}$, and $^{19}C_{15} = {}^{19}C_r$.`,
          t`Either $r = 15$, or $r + 15 = 19$, giving $r = 4$. Both are valid: $r = 4$ or $r = 15$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q16(iii)" },
      stem: t`All the values of $n$ for which $^{21}C_{6n} = {}^{21}C_{n^2 + 5}$ are:`,
      verify: { kind: "value", inputs: { N: "21", x: "6*n", y: "n**2 + 5" }, params: { kind: "eq" } },
      options: [
        { key: "A", text: t`$n = -8, 1, 2$ or $5$`, correct: false, misconceptionId: "C10-M4", value: "{-8, 1, 2, 5}" },
        { key: "B", text: t`$n = 1$ or $n = 2$`, correct: true, value: "{1, 2}" },
        { key: "C", text: t`$n = 1$ only`, correct: false, misconceptionId: "C10-M2", value: "{1}" },
        { key: "D", text: t`$n = 2$ only`, correct: false, misconceptionId: "C10-M3", value: "{2}" },
      ],
      solution: {
        steps: [
          t`Equal lower indices: $6n = n^2 + 5$, so $n^2 - 6n + 5 = 0$, giving $n = 1$ or $n = 5$.`,
          t`Lower indices adding to $21$: $6n + n^2 + 5 = 21$, so $n^2 + 6n - 16 = 0$, giving $n = 2$ or $n = -8$.`,
          t`Check that $6n$ and $n^2 + 5$ lie from $0$ to $21$: $n = 1$ gives $6, 6$ and $n = 2$ gives $12, 9$. But $n = 5$ gives $6n = 30 > 21$ and $n = -8$ gives $6n = -48$.`,
          t`So $n = 1$ or $n = 2$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q16(ii)" },
      stem: t`All the values of $n$ for which $^{10}C_{3n - 2} = {}^{10}C_{n^2 - 6}$ are:`,
      verify: { kind: "value", inputs: { N: "10", x: "3*n - 2", y: "n**2 - 6" }, params: { kind: "eq" } },
      options: [
        { key: "A", text: t`$n = 3$ only`, correct: false, misconceptionId: "C10-M3", value: "{3}" },
        { key: "B", text: t`$n = -6, -1, 3$ or $4$`, correct: false, misconceptionId: "C10-M4", value: "{-6, -1, 3, 4}" },
        { key: "C", text: t`$n = 3$ or $n = 4$`, correct: true, value: "{3, 4}" },
        { key: "D", text: t`$n = 4$ only`, correct: false, misconceptionId: "C10-M2", value: "{4}" },
      ],
      solution: {
        steps: [
          t`Equal lower indices: $3n - 2 = n^2 - 6$, so $n^2 - 3n - 4 = 0$, giving $n = 4$ or $n = -1$.`,
          t`Lower indices adding to $10$: $3n - 2 + n^2 - 6 = 10$, so $n^2 + 3n - 18 = 0$, giving $n = 3$ or $n = -6$.`,
          t`Check that both lower indices lie from $0$ to $10$: $n = 4$ gives $10, 10$ and $n = 3$ gives $7, 3$. But $n = -1$ gives $3n - 2 = -5$ and $n = -6$ gives $-20$.`,
          t`So $n = 3$ or $n = 4$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`If $^{10}C_3 + 2 \times {}^{10}C_4 + {}^{10}C_5 = {}^{12}C_r$, then:`,
      verify: { kind: "value", inputs: { N: "12" }, params: { kind: "pascal", terms: ["1 10 3", "2 10 4", "1 10 5"] } },
      options: [
        { key: "A", text: t`$r = 5$ or $r = 7$`, correct: true, value: "{5, 7}" },
        { key: "B", text: t`$r = 3$ or $r = 9$`, correct: false, misconceptionId: "C10-M1", value: "{3, 9}" },
        { key: "C", text: t`$r = 5$ only`, correct: false, misconceptionId: "C10-M2", value: "{5}" },
        { key: "D", text: t`$r = 7$ only`, correct: false, misconceptionId: "C10-M3", value: "{7}" },
      ],
      solution: {
        steps: [
          t`Split the middle term: $({}^{10}C_3 + {}^{10}C_4) + ({}^{10}C_4 + {}^{10}C_5) = {}^{11}C_4 + {}^{11}C_5$ by Pascal's rule.`,
          t`Pascal's rule again: $^{11}C_4 + {}^{11}C_5 = {}^{12}C_5$.`,
          t`So $^{12}C_5 = {}^{12}C_r$: either $r = 5$, or $r + 5 = 12$, giving $r = 7$. Both are valid.`,
        ],
      },
    },
  ],
};
