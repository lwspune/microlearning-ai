import type { Concept, FigureElement, Pt, Shape } from "../../../types.ts";

const t = String.raw;

/** The house Venn diagram (the worked and solution figures spell out the same shapes): U is the rectangle [0, 10] × [0, 7]. */
const view = { x: [-0.3, 10.3] as [number, number], y: [-0.3, 7.3] as [number, number] };
const cA: Pt = [3.9, 3.5];
const cB: Pt = [6.1, 3.5];
const r = 2.4;
const frame: Shape[] = [
  { kind: "halfPlane", through: [[0, 0], [10, 0]] },
  { kind: "halfPlane", through: [[10, 0], [10, 7]] },
  { kind: "halfPlane", through: [[10, 7], [0, 7]] },
  { kind: "halfPlane", through: [[0, 7], [0, 0]] },
];

/** Where each cell's label sits. */
const at = { onlyA: [2.6, 3.5] as Pt, both: [5, 3.5] as Pt, onlyB: [7.4, 3.5] as Pt, neither: [0.9, 0.8] as Pt };

type Cell = keyof typeof at;

/** One of the four cells, shaded. */
function cell(c: Cell, more: { step?: number; tone?: FigureElement["tone"] } = {}): FigureElement {
  const inA = c === "onlyA" || c === "both";
  const inB = c === "onlyB" || c === "both";
  return {
    kind: "region",
    within: [
      { kind: inA ? "disc" : "outsideDisc", centre: cA, r },
      { kind: inB ? "disc" : "outsideDisc", centre: cB, r },
      ...frame,
    ],
    ...more,
  };
}

/** The rectangle U, the two circles and their names. */
function venn(a: string, b: string): FigureElement[] {
  return [
    { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
    { kind: "circle", centre: cA, r, tone: "muted" },
    { kind: "label", at: [2.2, 5.2], label: a, labelAt: "nw" },
    { kind: "circle", centre: cB, r, tone: "muted" },
    { kind: "label", at: [7.8, 5.2], label: b, labelAt: "ne" },
    { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
  ];
}

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A class has $30$ students. $18$ play cricket, $15$ play football and $7$ play both. But $18 + 15 = 33$, more than the whole class. **How many play neither game?**`,
    reveal: t`The $7$ who play both were counted in the $18$ and again in the $15$. Count them once: $18 + 15 - 7 = 26$ play at least one game, so $30 - 26 = 4$ play neither.`,
  },
  explanation: {
    intuition: [
      t`Recall: a Venn diagram draws each set as a circle inside a rectangle, the universal set $U$.`,
      t`In a class of $30$, the Cricket circle holds the $18$ who play cricket.`,
      t`The Football circle holds the $15$ who play football.`,
      t`The $7$ who play both sit in the **overlap**, the part inside both circles.`,
      t`So $18 + 15 = 33$ counts those $7$ twice, once in each circle.`,
      t`The circles cut $U$ into four **cells**, or regions: cricket only $11$, both $7$, football only $8$, neither $4$.`,
    ],
    formal: [
      {
        title: "The addition rule",
        points: [
          t`Recall: $n(A)$ is the number of elements of $A$, and it includes the overlap with $B$.`,
          t`$n(B)$ includes that overlap too.`,
          t`So $n(A) + n(B)$ counts each element of $A \cap B$ twice.`,
          t`Subtracting $n(A \cap B)$ once counts every element exactly once.`,
          t`So for **finite** sets, whose elements can be counted to an end, $n(A \cup B)$ equals $n(A) + n(B) - n(A \cap B)$.`,
          t`Recall: **disjoint** sets share no element; then $n(A \cap B) = 0$ and $n(A \cup B) = n(A) + n(B)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U. Circle A is shaded, then circle B, so the overlap A ∩ B is shaded twice: n(A) + n(B) counts it twice.",
          axes: "none",
          view,
          elements: [
            cell("onlyA", { step: 1 }),
            cell("both", { step: 1 }),
            cell("onlyB", { step: 2 }),
            cell("both", { step: 2 }),
            ...venn("A", "B"),
            { kind: "label", at: at.both, label: "A ∩ B", labelAt: "n", tone: "bad", step: 3 },
            { kind: "label", at: [5, 0.1], label: "counted twice", labelAt: "n", tone: "bad", step: 3 },
          ],
        },
      },
      {
        title: "The four cells",
        points: [
          t`Both: the overlap $A \cap B$ has $n(A \cap B)$ elements.`,
          t`Only $A$ is $A - B$, also written $A \cap B'$; recall, $B'$ is everything in $U$ outside $B$.`,
          t`It has $n(A) - n(A \cap B)$ elements: take the overlap out of $A$.`,
          t`Only $B$ is $B - A$, or $A' \cap B$, with $n(B) - n(A \cap B)$ elements.`,
          t`Neither is $A' \cap B'$, outside both circles, with $n(U) - n(A \cup B)$ elements.`,
          t`Fill the overlap first, then the rest of each circle, then the outside: the four counts add up to $n(U)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U, its four cells named in turn: the overlap A ∩ B, A − B (A only), B − A (B only) and, outside both circles, A′ ∩ B′ (neither).",
          axes: "none",
          view,
          elements: [
            ...venn("A", "B"),
            { kind: "label", at: at.both, label: "A ∩ B", labelAt: "n", step: 1 },
            { kind: "label", at: at.onlyA, label: "A − B", labelAt: "n", step: 2 },
            { kind: "label", at: at.onlyB, label: "B − A", labelAt: "n", step: 4 },
            { kind: "label", at: at.neither, label: "A′ ∩ B′", labelAt: "n", step: 5 },
          ],
        },
      },
      {
        title: "Words to sets",
        points: [
          t`"$A$ or $B$" and "at least one" both mean $A \cup B$, the overlap included.`,
          t`"Both" means $A \cap B$, the overlap.`,
          t`"Only $A$" and "$A$ but not $B$" mean $A - B$.`,
          t`"Only $B$" and "$B$ but not $A$" mean $B - A$.`,
          t`"Neither" means $A' \cap B'$, outside both circles.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U. The two circles together are shaded for 'A or B', 'at least one'. Then the cells are named in words: both in the overlap, only A, only B, and neither outside both circles.",
          axes: "none",
          view,
          elements: [
            cell("onlyA", { step: 1 }),
            cell("both", { step: 1 }),
            cell("onlyB", { step: 1 }),
            ...venn("A", "B"),
            { kind: "label", at: at.both, label: "both", labelAt: "n", step: 2 },
            { kind: "label", at: at.onlyA, label: "only A", labelAt: "n", step: 3 },
            { kind: "label", at: at.onlyB, label: "only B", labelAt: "n", step: 4 },
            { kind: "label", at: at.neither, label: "neither", labelAt: "n", step: 5 },
          ],
        },
      },
      {
        title: "Exactly one",
        points: [
          t`"Exactly one", or "only one", means only $A$ together with only $B$.`,
          t`It leaves out the overlap, which "$A$ or $B$" keeps.`,
          t`Only $A$ has $n(A) - n(A \cap B)$ elements, and only $B$ has $n(B) - n(A \cap B)$.`,
          t`Add them: exactly one has $n(A) + n(B) - 2\,n(A \cap B)$ elements.`,
          t`The overlap is taken away twice: once from $n(A)$ and once from $n(B)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U. The A-only and B-only cells are shaded; the overlap is left out.",
          axes: "none",
          view,
          elements: [
            cell("onlyA", { step: 1, tone: "good" }),
            cell("onlyB", { step: 1, tone: "good" }),
            ...venn("A", "B"),
            { kind: "label", at: at.both, label: "left out", labelAt: "n", tone: "bad", step: 2 },
          ],
        },
      },
      {
        title: "Percentages",
        points: [
          t`A **percentage** is a number out of every $100$: $40\%$ of a group is $40$ in every $100$.`,
          t`The addition rule works on percentages exactly as on counts.`,
          t`Say $40\%$ of $200$ people read paper $A$, $30\%$ read paper $B$ and $10\%$ read both.`,
          t`Then $40\% + 30\% - 10\% = 60\%$ read at least one paper.`,
          t`$x\%$ of $N$ is $\frac{x}{100} \times N$, so that is $\frac{60}{100} \times 200 = 120$ people.`,
          t`The other $40\%$, which is $80$ people, read neither.`,
        ],
        figure: {
          alt: "A Venn diagram of papers A and B among 200 people. The overlap holds 10%. The two circles together, shaded, hold 60%, which is 120 people; outside both circles is the other 40%.",
          axes: "none",
          view,
          elements: [
            cell("onlyA", { step: 4, tone: "good" }),
            cell("both", { step: 4, tone: "good" }),
            cell("onlyB", { step: 4, tone: "good" }),
            ...venn("A", "B"),
            { kind: "label", at: at.both, label: "10%", labelAt: "n", step: 3 },
            { kind: "label", at: [5, 6.1], label: "60% of 200 = 120", labelAt: "n", tone: "good", step: 5 },
            { kind: "label", at: at.neither, label: "40%", labelAt: "n", step: 6 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`$A$ and $B$ are subsets of the universal set $X$, with $n(X) = 50$, $n(A) = 35$, $n(B) = 22$ and $n(A' \cap B') = 3$. Find $n(A \cap B)$ and $n(A' \cap B)$.`,
      steps: [
        t`$A' \cap B'$ is the region outside both circles: $3$ elements. So $n(A \cup B) = 50 - 3 = 47$.`,
        t`$n(A \cap B)$ equals $n(A) + n(B) - n(A \cup B)$, which is $35 + 22 - 47 = 10$.`,
        t`$A' \cap B$ is the part of $B$ outside $A$: $n(A' \cap B) = n(B) - n(A \cap B)$ $= 22 - 10 = 12$.`,
        t`Check: only $A$ is $35 - 10 = 25$, and $25 + 10 + 12 + 3 = 50 = n(X)$.`,
      ],
      answer: t`$n(A \cap B) = 10$ and $n(A' \cap B) = 12$.`,
      figure: {
        alt: "A Venn diagram of A and B inside X. The region outside both circles holds 3, so A ∪ B holds 47. The overlap holds 10, B only holds 12 (shaded), and A only holds 25; 25 + 10 + 12 + 3 = 50.",
        axes: "none",
        view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
        elements: [
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
          { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
          { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
          { kind: "label", at: [9.5, 6.4], label: "X", labelAt: "n" },
          { kind: "label", at: [0.9, 0.8], label: "3", labelAt: "n", step: 1 },
          { kind: "label", at: [5, 3.5], label: "10", labelAt: "n", step: 2 },
          { kind: "label", at: [7.4, 3.5], label: "12", labelAt: "n", tone: "good", step: 3 },
          { kind: "label", at: [2.6, 3.5], label: "25", labelAt: "n", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A Venn diagram of 30 students: the Cricket circle and the Football circle overlap. Shading Cricket, then Football, covers the overlap twice, so 18 + 15 counts the 7 who play both twice. The cells read 11 cricket only, 7 both, 8 football only, and 4 neither.",
      axes: "none",
      view,
      elements: [
        cell("onlyA", { step: 2 }),
        cell("both", { step: 2 }),
        cell("onlyB", { step: 3 }),
        cell("both", { step: 3 }),
        ...venn("Cricket", "Football"),
        { kind: "label", at: at.both, label: "7", labelAt: "n", tone: "bad", step: 4 },
        { kind: "label", at: [5, 0.1], label: "counted twice", labelAt: "n", tone: "bad", step: 5 },
        { kind: "label", at: at.onlyA, label: "11", labelAt: "n", step: 6 },
        { kind: "label", at: at.onlyB, label: "8", labelAt: "n", step: 6 },
        { kind: "label", at: at.neither, label: "4", labelAt: "n", tone: "good", step: 6 },
      ],
    },
    visualSpec: t`Drag the sizes of $n(A)$, $n(B)$ and $n(A \cap B)$ inside a fixed $n(U)$; the four cells of the Venn diagram update, and $n(A) + n(B)$ is shown beside $n(A \cup B)$ with the overlap counted twice.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Adding $n(A)$ and $n(B)$ for 'A or B' without subtracting the overlap, so the elements in both are counted twice`,
      remediation: t`The elements in both sets are inside $n(A)$ and again inside $n(B)$. Use $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ so each one is counted once.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M2",
      mistake: t`Reading $n(A)$ as the number in $A$ only, as if the elements in both were a separate third group`,
      remediation: t`$n(A)$ counts everything in $A$, including the elements that are also in $B$. The part in $A$ only is $n(A) - n(A \cap B)$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M3",
      mistake: "Mixing up 'A or B' (at least one) with 'only one' (exactly one)",
      remediation: t`'$A$ or $B$' means at least one, so it includes the elements in both: $n(A \cup B)$. 'Only one' leaves the overlap out: $n(A) + n(B) - 2\,n(A \cap B)$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M4",
      mistake: t`Taking $n(U) - n(A \cap B)$, everyone not in both sets, as the number in neither set or in only one`,
      remediation: t`$n(U) - n(A \cap B)$ counts everyone outside the overlap: only $A$, only $B$ and neither together. Neither is $n(U) - n(A \cup B)$; only one is $n(A) + n(B) - 2\,n(A \cap B)$.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    t`C06-M1 has no model for 'only one' items: its natural answer there, $n(A) + n(B) - n(A \cap B)$, is C06-M3's. C06-M3 is tested on 'or', 'only one' and 'find n(B)' items; C06-M4 only on 'neither' and 'only one' items.`,
    t`C06-M2 on a 'neither' item gives $n(U) - n(A) - n(B) - n(A \cap B)$, which is negative unless $n(A) + n(B) + n(A \cap B) < n(U)$; pick inputs where it stays positive.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q4" },
      stem: t`In a city, $20\%$ of the population travels by car, $50\%$ travels by bus and $10\%$ travels by both car and bus. The percentage of people who travel by car or bus is:`,
      verify: { kind: "value", inputs: { A: "20", B: "50", AB: "10" }, params: { ask: "union" } },
      options: [
        { key: "A", text: t`$70\%$`, correct: false, misconceptionId: "C06-M1", value: "70" },
        { key: "B", text: t`$80\%$`, correct: false, misconceptionId: "C06-M2", value: "80" },
        { key: "C", text: t`$50\%$`, correct: false, misconceptionId: "C06-M3", value: "50" },
        { key: "D", text: t`$60\%$`, correct: true, value: "60" },
      ],
      solution: {
        steps: [
          t`The $10\%$ who use both are inside the $20\%$ and inside the $50\%$, so $20\% + 50\%$ counts them twice.`,
          t`Car only: $20\% - 10\% = 10\%$. Bus only: $50\% - 10\% = 40\%$.`,
          t`Car or bus: $20\% + 50\% - 10\% = 60\%$, the same as $10\% + 10\% + 40\%$.`,
        ],
        figure: {
          alt: "A Venn diagram of Car and Bus. The overlap holds 10%, car only 10% and bus only 40%; the two circles together, shaded, hold 60%.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Car", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "Bus", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "10%", labelAt: "n", step: 1 },
            { kind: "label", at: [2.6, 3.5], label: "10%", labelAt: "n", step: 2 },
            { kind: "label", at: [7.4, 3.5], label: "40%", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q10(iii)" },
      stem: t`Of $260$ persons with a skin disorder, $150$ had been exposed to chemical A, $74$ to chemical B and $36$ to both chemicals A and B. How many had been exposed to chemical A or chemical B?`,
      verify: { kind: "value", inputs: { U: "260", A: "150", B: "74", AB: "36" }, params: { ask: "union" } },
      options: [
        { key: "A", text: t`$188$`, correct: true, value: "188" },
        { key: "B", text: t`$224$`, correct: false, misconceptionId: "C06-M1", value: "224" },
        { key: "C", text: t`$260$`, correct: false, misconceptionId: "C06-M2", value: "260" },
        { key: "D", text: t`$152$`, correct: false, misconceptionId: "C06-M3", value: "152" },
      ],
      solution: {
        steps: [
          t`The $36$ exposed to both are inside the $150$ and inside the $74$.`,
          t`A only: $150 - 36 = 114$. B only: $74 - 36 = 38$.`,
          t`A or B: $n(A \cup B) = 150 + 74 - 36 = 188$, which is $114 + 36 + 38$. The other $260 - 188 = 72$ were exposed to neither.`,
        ],
        figure: {
          alt: "A Venn diagram of chemicals A and B among 260 persons. The overlap holds 36, A only 114 and B only 38; the two circles together, shaded, hold 188. Outside both are 72.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "36", labelAt: "n", step: 1 },
            { kind: "label", at: [2.6, 3.5], label: "114", labelAt: "n", step: 2 },
            { kind: "label", at: [7.4, 3.5], label: "38", labelAt: "n", step: 2 },
            { kind: "label", at: [0.9, 0.8], label: "72", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q3" },
      stem: t`In a survey of $425$ students in a school, $115$ drink apple juice, $160$ drink orange juice and $80$ drink both. How many drink neither apple juice nor orange juice?`,
      verify: { kind: "value", inputs: { U: "425", A: "115", B: "160", AB: "80" }, params: { ask: "neither" } },
      options: [
        { key: "A", text: t`$230$`, correct: true, value: "230" },
        { key: "B", text: t`$150$`, correct: false, misconceptionId: "C06-M1", value: "150" },
        { key: "C", text: t`$70$`, correct: false, misconceptionId: "C06-M2", value: "70" },
        { key: "D", text: t`$345$`, correct: false, misconceptionId: "C06-M4", value: "345" },
      ],
      solution: {
        steps: [
          t`Both: $80$. Apple only: $115 - 80 = 35$. Orange only: $160 - 80 = 80$.`,
          t`At least one juice: $115 + 160 - 80 = 195$.`,
          t`Neither: $425 - 195 = 230$.`,
        ],
        figure: {
          alt: "A Venn diagram of Apple and Orange among 425 students. The overlap holds 80, apple only 35 and orange only 80, 195 in all; the region outside both circles, shaded, holds 230.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Apple", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "Orange", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "80", labelAt: "n", step: 1 },
            { kind: "label", at: [2.6, 3.5], label: "35", labelAt: "n", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "80", labelAt: "n", step: 1 },
            { kind: "label", at: [0.9, 0.8], label: "230", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q8(iii)" },
      stem: t`Of $2000$ literate individuals of a town, $45\%$ read Marathi newspapers, $35\%$ read English newspapers and $15\%$ read both. How many read only one of the two newspapers?`,
      verify: { kind: "value", inputs: { U: "2000", A: "45", B: "35", AB: "15" }, params: { ask: "exactly1", pct: "1" } },
      options: [
        { key: "A", text: t`$1700$`, correct: false, misconceptionId: "C06-M4", value: "1700" },
        { key: "B", text: t`$1000$`, correct: true, value: "1000" },
        { key: "C", text: t`$1600$`, correct: false, misconceptionId: "C06-M2", value: "1600" },
        { key: "D", text: t`$1300$`, correct: false, misconceptionId: "C06-M3", value: "1300" },
      ],
      solution: {
        steps: [
          t`In numbers: Marathi $\dfrac{45}{100} \times 2000 = 900$, English $700$, both $300$.`,
          t`Marathi only: $900 - 300 = 600$. English only: $700 - 300 = 400$.`,
          t`Only one: $600 + 400 = 1000$. The $300$ who read both are left out.`,
        ],
        figure: {
          alt: "A Venn diagram of Marathi and English readers among 2000. The overlap holds 300, Marathi only 600 and English only 400; the two 'only' parts, shaded, hold 1000.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Marathi", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "English", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "300", labelAt: "n", step: 1 },
            { kind: "label", at: [2.6, 3.5], label: "600", labelAt: "n", step: 2 },
            { kind: "label", at: [7.4, 3.5], label: "400", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q4" },
      stem: t`In a school, $20$ teachers teach Mathematics or Physics. Of these, $12$ teach Mathematics and $4$ teach both Mathematics and Physics. How many teachers teach Physics?`,
      verify: { kind: "value", inputs: { AuB: "20", A: "12", AB: "4" }, params: { ask: "B" } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C06-M1", value: "8" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C06-M2", value: "4" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C06-M3", value: "16" },
      ],
      solution: {
        steps: [
          t`Both: $4$ teachers. Mathematics only: $12 - 4 = 8$.`,
          t`All $20$ are inside the two circles, so Physics only: $20 - 8 - 4 = 8$.`,
          t`$n(P) = 8 + 4 = 12$. Check: $n(M \cup P) = 12 + 12 - 4 = 20$.`,
        ],
        figure: {
          alt: "A Venn diagram of Maths and Physics teachers, 20 in all. The overlap holds 4, Maths only 8 and Physics only 8; the Physics circle, shaded, holds 12.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Maths", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "Physics", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "4", labelAt: "n", step: 1 },
            { kind: "label", at: [2.6, 3.5], label: "8", labelAt: "n", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "8", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q8(ii)" },
      stem: t`Of $2000$ literate individuals of a town, $50\%$ read Marathi newspapers, $30\%$ read English newspapers and $12\%$ read both. How many read neither a Marathi nor an English newspaper?`,
      verify: { kind: "value", inputs: { U: "2000", A: "50", B: "30", AB: "12" }, params: { ask: "neither", pct: "1" } },
      options: [
        { key: "A", text: t`$160$`, correct: false, misconceptionId: "C06-M2", value: "160" },
        { key: "B", text: t`$1760$`, correct: false, misconceptionId: "C06-M4", value: "1760" },
        { key: "C", text: t`$640$`, correct: true, value: "640" },
        { key: "D", text: t`$400$`, correct: false, misconceptionId: "C06-M1", value: "400" },
      ],
      solution: {
        steps: [
          t`In numbers: Marathi $\dfrac{50}{100} \times 2000 = 1000$, English $600$, both $240$.`,
          t`Marathi only: $1000 - 240 = 760$. English only: $600 - 240 = 360$. At least one: $1000 + 600 - 240 = 1360$, which is $760 + 240 + 360$.`,
          t`Neither: $2000 - 1360 = 640$.`,
        ],
        figure: {
          alt: "A Venn diagram of Marathi and English readers among 2000. The overlap holds 240, Marathi only 760 and English only 360, 1360 in all; the region outside both circles, shaded, holds 640.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Marathi", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "English", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "240", labelAt: "n", step: 1 },
            { kind: "label", at: [2.6, 3.5], label: "760", labelAt: "n", step: 2 },
            { kind: "label", at: [7.4, 3.5], label: "360", labelAt: "n", step: 2 },
            { kind: "label", at: [0.9, 0.8], label: "640", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
