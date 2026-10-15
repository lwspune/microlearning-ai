import type { Concept, Figure, FigureElement, Pt, Shape } from "../../../types.ts";

const t = String.raw;

type Extra = { step?: number; tone?: FigureElement["tone"] };

/** The universal set's box, 10 wide and `h` high, as the four half-planes inside it. */
const box = (h: number): Shape[] => [
  { kind: "halfPlane", through: [[0, 0], [10, 0]] },
  { kind: "halfPlane", through: [[10, 0], [10, h]] },
  { kind: "halfPlane", through: [[10, h], [0, h]] },
  { kind: "halfPlane", through: [[0, h], [0, 0]] },
];

/** Inside or outside one circle. */
const side = (inside: boolean, centre: Pt, r: number): Shape =>
  inside ? { kind: "disc", centre, r } : { kind: "outsideDisc", centre, r };

/** Two-set Venn diagram, the house layout: circles A and B in a 10 × 7 box. */
const A2: Pt = [3.9, 3.5];
const B2: Pt = [6.1, 3.5];
const R2 = 2.4;
/** The cell in (true) or out of (false) A, and in or out of B. */
const cell2 = (a: boolean, b: boolean, extra: Extra = {}): FigureElement => ({
  kind: "region",
  within: [side(a, A2, R2), side(b, B2, R2), ...box(7)],
  ...extra,
});
const venn2: FigureElement[] = [
  { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
  { kind: "circle", centre: A2, r: R2, tone: "muted" },
  { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
  { kind: "circle", centre: B2, r: R2, tone: "muted" },
  { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
  { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
];
const view2: Figure["view"] = { x: [-0.3, 10.3], y: [-0.3, 7.3] };

/**
 * Three-set Venn diagram: the house circles A, B and C in a 10 × 8 box, one unit taller than the
 * solutions' so a law fits as a label above the circles (U moves to the bottom corner).
 */
const A3: Pt = [3.9, 4.3];
const B3: Pt = [6.1, 4.3];
const C3: Pt = [5, 2.5];
const R3 = 2.2;
const cell3 = (a: boolean, b: boolean, c: boolean, extra: Extra = {}): FigureElement => ({
  kind: "region",
  within: [side(a, A3, R3), side(b, B3, R3), side(c, C3, R3), ...box(8)],
  ...extra,
});
const venn3: FigureElement[] = [
  { kind: "curve", points: [[0, 0], [10, 0], [10, 8], [0, 8], [0, 0]], tone: "muted" },
  { kind: "circle", centre: A3, r: R3, tone: "muted" },
  { kind: "label", at: [2.34, 5.86], label: "A", labelAt: "nw" },
  { kind: "circle", centre: B3, r: R3, tone: "muted" },
  { kind: "label", at: [7.66, 5.86], label: "B", labelAt: "ne" },
  { kind: "circle", centre: C3, r: R3, tone: "muted" },
  { kind: "label", at: [7.2, 1.29], label: "C", labelAt: "e" },
  { kind: "label", at: [9.5, 0.3], label: "U", labelAt: "n" },
];
const view3: Figure["view"] = { x: [-0.3, 10.3], y: [-0.3, 8.3] };
/** Every cell of B ∪ C, at `step`. */
const bOrC = (step: number): FigureElement[] => [
  cell3(false, true, false, { step }),
  cell3(false, false, true, { step }),
  cell3(false, true, true, { step }),
  cell3(true, true, false, { step }),
  cell3(true, false, true, { step }),
  cell3(true, true, true, { step }),
];

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`$U = \{1, 2, 3, \ldots, 10\}$. You are told only $A' = \{1, 4, 6, 8, 9\}$ and $B' = \{2, 4, 8, 9, 10\}$. **What is $(A \cup B)'$?** Do you need to find $A$ and $B$ first?`,
    reveal: t`No. An element is outside $A \cup B$ exactly when it is outside $A$ **and** outside $B$. So $(A \cup B)' = A' \cap B' = \{4, 8, 9\}$.`,
  },
  explanation: {
    intuition: [
      t`Recall: $A'$, the **complement** of $A$, is everything in the universal set $U$ that is not in $A$.`,
      t`In the same way, $B'$ is everything in $U$ that is not in $B$.`,
      t`An element outside $A \cup B$ is in neither set: not in $A$ and not in $B$.`,
      t`So it lies in both $A'$ and $B'$, the part shaded twice: $(A \cup B)' = A' \cap B'$.`,
      t`An element outside $A \cap B$ only needs to be outside one of the two sets.`,
      t`So it lies in $A'$ or in $B'$, shaded at least once: $(A \cap B)' = A' \cup B'$.`,
    ],
    formal: [
      {
        title: "De Morgan's laws",
        points: [
          t`**De Morgan's first law:** for any subsets $A$ and $B$ of $U$, $(A \cup B)' = A' \cap B'$.`,
          t`**The second law:** $(A \cap B)' = A' \cup B'$.`,
          t`Each law makes two changes at once.`,
          t`Each set gets a dash, the mark of a complement: $A$ becomes $A'$, $B$ becomes $B'$.`,
          t`And the operation swaps: $\cup$ becomes $\cap$, and $\cap$ becomes $\cup$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U. First the region outside both circles is shaded: that is (A ∪ B)′, equal to A′ ∩ B′. Then the shading spreads to A only and B only, and the overlap A ∩ B is marked: everything except the overlap is (A ∩ B)′, equal to A′ ∪ B′.",
          axes: "none",
          view: view2,
          elements: [
            cell2(false, false, { step: 1, tone: "good" }),
            cell2(true, false, { step: 2, tone: "good" }),
            cell2(false, true, { step: 2, tone: "good" }),
            cell2(true, true, { step: 2, tone: "bad" }),
            ...venn2,
            { kind: "label", at: [5, 0.2], label: "(A ∪ B)′ = A′ ∩ B′", labelAt: "n", tone: "good", step: 1 },
            { kind: "label", at: [5, 3.5], label: "A ∩ B", labelAt: "n", tone: "bad", step: 2 },
            { kind: "label", at: [5, 6.35], label: "(A ∩ B)′ = A′ ∪ B′", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Why the laws hold",
        points: [
          t`Take any $x$ in $(A \cup B)'$: then $x \notin A$ and $x \notin B$, where $\notin$ means "is not in".`,
          t`So $x \in A'$ and $x \in B'$, that is, $x \in A' \cap B'$.`,
          t`Take any $y$ in $(A \cap B)'$: it is not in the overlap, so $y \notin A$ or $y \notin B$.`,
          t`So $y \in A'$ or $y \in B'$, that is, $y \in A' \cup B'$.`,
          t`Each step also works backwards, so the two sides of each law hold exactly the same elements.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U. A point x outside both circles is marked, and the region outside both is shaded: x is in A′ ∩ B′. Then the overlap A ∩ B is marked, and a point y in A only, outside the overlap: y is not in B, so y is in A′ ∪ B′.",
          axes: "none",
          view: view2,
          elements: [
            cell2(false, false, { step: 1, tone: "good" }),
            cell2(true, true, { step: 3, tone: "bad" }),
            ...venn2,
            { kind: "point", at: [8.9, 1], label: "x", labelAt: "e", tone: "good", step: 1 },
            { kind: "label", at: [5, 0.2], label: "x ∈ A′ ∩ B′", labelAt: "n", tone: "good", step: 2 },
            { kind: "point", at: [2.6, 3.5], label: "y", labelAt: "n", step: 3 },
            { kind: "label", at: [5, 6.35], label: "y ∈ A′ ∪ B′", labelAt: "n", step: 4 },
          ],
        },
      },
      {
        title: "Intersection over a union",
        points: [
          t`A **distributive law** hands the set outside a bracket to each set inside it.`,
          t`In $A \cap (B \cup C)$, the bracket $B \cup C$ is everything in $B$ or in $C$.`,
          t`$A \cap (B \cup C)$ keeps just the part of $A$ inside that bracket.`,
          t`That part is $A \cap B$ together with $A \cap C$.`,
          t`So $A \cap (B \cup C)$ equals $(A \cap B) \cup (A \cap C)$.`,
          t`The $\cup$ inside the bracket stays between the pieces.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C inside U. First B ∪ C, everything in B or C, is shaded. Then the part of A inside it is picked out: A and B together, plus A and C together. Above the circles: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
          axes: "none",
          view: view3,
          elements: [
            ...bOrC(2),
            cell3(true, true, false, { step: 3, tone: "good" }),
            cell3(true, false, true, { step: 3, tone: "good" }),
            cell3(true, true, true, { step: 3, tone: "good" }),
            ...venn3,
            { kind: "label", at: [5, 7], label: "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)", labelAt: "n", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Union over an intersection",
        points: [
          t`Here $B \cap C$ is the part that $B$ and $C$ share.`,
          t`$A \cup (B \cap C)$ adds all of $A$ to that part.`,
          t`Hand $A$ to each set inside the bracket: that gives $A \cup B$ and $A \cup C$.`,
          t`So $A \cup (B \cap C)$ equals $(A \cup B) \cap (A \cup C)$.`,
          t`The $\cap$ inside the bracket stays between the pieces: nothing swaps here.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C inside U. First B ∩ C, the part B and C share, is shaded. Then all of A is added to it. Above the circles: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).",
          axes: "none",
          view: view3,
          elements: [
            cell3(false, true, true, { step: 1 }),
            cell3(true, true, true, { step: 1 }),
            cell3(true, false, false, { step: 2, tone: "good" }),
            cell3(true, true, false, { step: 2, tone: "good" }),
            cell3(true, false, true, { step: 2, tone: "good" }),
            cell3(true, true, true, { step: 2, tone: "good" }),
            cell3(false, true, true, { step: 2, tone: "good" }),
            ...venn3,
            { kind: "label", at: [5, 7], label: "A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Finding a complement quickly",
        points: [
          t`To find $A' \cap B'$, first find $A \cup B$.`,
          t`Then take one complement: $A' \cap B' = (A \cup B)'$, the rest of $U$.`,
          t`Complements are always taken in $U$, so they include the elements outside every circle.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U. First A ∪ B, both circles, is shaded. Then the rest of U, the region outside both circles, is shaded: that is (A ∪ B)′, equal to A′ ∩ B′.",
          axes: "none",
          view: view2,
          elements: [
            cell2(true, false, { step: 1 }),
            cell2(false, true, { step: 1 }),
            cell2(true, true, { step: 1 }),
            cell2(false, false, { step: 2, tone: "good" }),
            ...venn2,
            { kind: "label", at: [5, 3.5], label: "A ∪ B", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 0.2], label: "A′ ∩ B′ = (A ∪ B)′", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Difference of a union",
        points: [
          t`Recall: $A - X = A \cap X'$, the part of $A$ outside $X$.`,
          t`Take $X = B \cup C$: then $A - (B \cup C)$ equals $A \cap (B \cup C)'$.`,
          t`By De Morgan's first law, $(B \cup C)' = B' \cap C'$.`,
          t`So it is $A \cap B' \cap C'$, which equals $(A \cap B') \cap (A \cap C')$.`,
          t`That is, $A - (B \cup C)$ equals $(A - B) \cap (A - C)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C inside U. First B ∪ C is shaded. Then the part of A outside it, A only, is picked out: A − (B ∪ C). Above the circles: A − (B ∪ C) = (A − B) ∩ (A − C).",
          axes: "none",
          view: view3,
          elements: [
            ...bOrC(2),
            cell3(true, false, false, { step: 4, tone: "good" }),
            ...venn3,
            { kind: "label", at: [5, 7], label: "A − (B ∪ C) = (A − B) ∩ (A − C)", labelAt: "n", tone: "good", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`$U = \{1, 2, 3, \ldots, 9\}$, $A = \{1, 2, 3, 4, 5\}$ and $B = \{4, 5, 6, 7\}$. Find $A' \cup B'$.`,
      steps: [
        t`By De Morgan's law, $A' \cup B' = (A \cap B)'$: one intersection and one complement, instead of two complements and a union.`,
        t`$A \cap B = \{4, 5\}$.`,
        t`$(A \cap B)' = U - \{4, 5\}$, which is $\{1, 2, 3, 6, 7, 8, 9\}$. It includes $8$ and $9$, which are outside both sets.`,
        t`Check the long way: $A' = \{6, 7, 8, 9\}$, $B' = \{1, 2, 3, 8, 9\}$, so $A' \cup B' = \{1, 2, 3, 6, 7, 8, 9\}$.`,
      ],
      answer: t`$A' \cup B' = \{1, 2, 3, 6, 7, 8, 9\}$`,
      figure: {
        alt: "A Venn diagram of A and B inside U = {1, ..., 9}. A only holds 1, 2, 3; the overlap holds 4, 5; B only holds 6, 7; outside both are 8, 9. The overlap A ∩ B is marked first; then everything else, 1, 2, 3, 6, 7, 8, 9, is shaded: that is (A ∩ B)′, which equals A′ ∪ B′.",
        axes: "none",
        view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
        elements: [
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "bad" },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
          { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
          { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
          { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
          { kind: "label", at: [2.6, 3.5], label: "1, 2, 3", labelAt: "n" },
          { kind: "label", at: [5, 3.5], label: "4, 5", labelAt: "n", tone: "bad", step: 2 },
          { kind: "label", at: [7.4, 3.5], label: "6, 7", labelAt: "n" },
          { kind: "label", at: [5, 0.2], label: "8, 9", labelAt: "n" },
          { kind: "label", at: [5, 6.35], label: "(A ∩ B)′ = A′ ∪ B′", labelAt: "n", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A Venn diagram of A and B inside U. First A′, everything outside circle A, is shaded; then B′, everything outside circle B. The region outside both circles, (A ∪ B)′, is shaded twice: A′ ∩ B′ = (A ∪ B)′. Then the overlap A ∩ B is marked: it is the only part not shaded at all, so everything shaded at least once is A′ ∪ B′ = (A ∩ B)′.",
      axes: "none",
      view: view2,
      elements: [
        cell2(false, true, { step: 1 }),
        cell2(false, false, { step: 1 }),
        cell2(true, false, { step: 2 }),
        cell2(false, false, { step: 2 }),
        cell2(false, false, { step: 3, tone: "good" }),
        cell2(true, true, { step: 5, tone: "bad" }),
        ...venn2,
        { kind: "label", at: [8.9, 0.6], label: "A′", labelAt: "n", tone: "accent", step: 1 },
        { kind: "label", at: [1.1, 0.6], label: "B′", labelAt: "n", tone: "accent", step: 2 },
        { kind: "label", at: [5, 0.2], label: "A′ ∩ B′ = (A ∪ B)′", labelAt: "n", tone: "good", step: 4 },
        { kind: "label", at: [5, 3.5], label: "A ∩ B", labelAt: "n", tone: "bad", step: 5 },
        { kind: "label", at: [5, 6.35], label: "A′ ∪ B′ = (A ∩ B)′", labelAt: "n", tone: "accent", step: 6 },
      ],
    },
    visualSpec: t`Shade any of $A'$, $B'$, $A \cup B$ and $A \cap B$ on a two-set Venn diagram by tapping; $(A \cup B)'$ and $A' \cap B'$ are drawn side by side and match cell by cell.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Mixes up which law swaps $\cup$ and $\cap$: writes $(A \cup B)' = A' \cup B'$ (no swap), or $A \cap (B \cup C) = (A \cup B) \cap (A \cup C)$ (a swap where none belongs)`,
      remediation: t`Only a complement swaps the operation: $(A \cup B)' = A' \cap B'$ and $(A \cap B)' = A' \cup B'$. Distributing keeps it: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M2",
      mistake: t`Thinks De Morgan's law is only 'swap $\cup$ and $\cap$': writes $(A \cup B)' = A \cap B$, dropping the complements, and $A \cap (B \cup C) = A \cap B \cap C$`,
      remediation: t`Swapping is only half of De Morgan's law: each set also gets a complement, so $(A \cup B)' = A' \cap B'$. With no complement, as in $A \cap (B \cup C)$, nothing swaps: it is $(A \cap B) \cup (A \cap C)$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: t`Takes the complement inside the circles drawn ($A \cup B$) instead of $U$, leaving out the elements outside both sets`,
      remediation: t`A complement is taken in $U$: $X' = U - X$. It includes the elements outside both circles, so $(A \cup B)'$ is the region outside both, not empty.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M4",
      mistake: t`Ignores the bracket: lets the operation outside it reach only the set next to it, reading $(A \cup B)'$ as $A \cup B'$ and $A \cap (B \cup C)$ as $(A \cap B) \cup C$`,
      remediation: t`An operation outside a bracket acts on the whole bracket. $(A \cup B)'$ is the complement of all of $A \cup B$, and $A \cap (B \cup C)$ intersects $A$ with all of $B \cup C$: $(A \cap B) \cup (A \cap C)$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    t`C05-M3 applies only to complement items, and on $(A \cup B)'$ and $A' \cap B'$ items it always gives $\phi$. C05-M4 has no model for $A' \cap B'$ items (no bracket).`,
    t`C05-Q6 asks for an expression; its option values are the sets each expression gives on a witness ($U = \{1, 2, 3, 4\}$, $A = \{1, 2\}$, $B = \{2, 3\}$, one element per Venn cell), so different regions give different values.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q5(iii)" },
      stem: t`Let $U = \{1, 2, 3, \ldots, 10\}$, $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$. Then $(A \cup B)' =$`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}", A: "{1, 2, 3, 4}", B: "{3, 4, 5, 6}" }, params: { ask: "cu" } },
      options: [
        { key: "A", text: t`$\left\{1, 2, 3, 4, 7, 8, 9, 10\right\}$`, correct: false, misconceptionId: "C05-M4", value: "{1, 2, 3, 4, 7, 8, 9, 10}" },
        { key: "B", text: t`$\left\{7, 8, 9, 10\right\}$`, correct: true, value: "{7, 8, 9, 10}" },
        { key: "C", text: t`$\left\{1, 2, 5, 6, 7, 8, 9, 10\right\}$`, correct: false, misconceptionId: "C05-M1", value: "{1, 2, 5, 6, 7, 8, 9, 10}" },
        { key: "D", text: t`$\left\{3, 4\right\}$`, correct: false, misconceptionId: "C05-M2", value: "{3, 4}" },
      ],
      solution: {
        steps: [
          t`$A \cup B = \{1, 2, 3, 4, 5, 6\}$.`,
          t`$(A \cup B)' = U - (A \cup B) = \{7, 8, 9, 10\}$, the elements outside both circles.`,
          t`Check with De Morgan: $A' = \{5, 6, 7, 8, 9, 10\}$ and $B' = \{1, 2, 7, 8, 9, 10\}$, so $A' \cap B' = \{7, 8, 9, 10\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U = {1, ..., 10}. A only holds 1, 2; the overlap 3, 4; B only 5, 6; outside both 7, 8, 9, 10. A ∪ B is shaded first, then the region outside both circles, (A ∪ B)′ = {7, 8, 9, 10}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "1, 2", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "3, 4", labelAt: "n" },
            { kind: "label", at: [7.4, 3.5], label: "5, 6", labelAt: "n" },
            { kind: "label", at: [5, 0.2], label: "7, 8, 9, 10", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [5, 6.35], label: "(A ∪ B)′ = A′ ∩ B′", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.4" },
      stem: t`Let $U = \{1, 2, 3, \ldots, 10\}$, $A = \{1, 3, 5, 7, 9\}$ and $B = \{6, 7, 8, 9\}$. Find $(A \cap B)'$.`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}", A: "{1, 3, 5, 7, 9}", B: "{6, 7, 8, 9}" }, params: { ask: "ci" } },
      options: [
        { key: "A", text: t`$\left\{1, 3, 5, 6, 7, 8, 9\right\}$`, correct: false, misconceptionId: "C05-M2", value: "{1, 3, 5, 6, 7, 8, 9}" },
        { key: "B", text: t`$\left\{1, 3, 5, 6, 8\right\}$`, correct: false, misconceptionId: "C05-M3", value: "{1, 3, 5, 6, 8}" },
        { key: "C", text: t`$\left\{1, 3, 5\right\}$`, correct: false, misconceptionId: "C05-M4", value: "{1, 3, 5}" },
        { key: "D", text: t`$\left\{1, 2, 3, 4, 5, 6, 8, 10\right\}$`, correct: true, value: "{1, 2, 3, 4, 5, 6, 8, 10}" },
      ],
      solution: {
        steps: [
          t`$A \cap B = \{7, 9\}$.`,
          t`$(A \cap B)' = U - \{7, 9\} = \{1, 2, 3, 4, 5, 6, 8, 10\}$. It keeps $2$, $4$ and $10$, which are outside both sets.`,
          t`Check with De Morgan: $A' = \{2, 4, 6, 8, 10\}$ and $B' = \{1, 2, 3, 4, 5, 10\}$, so $A' \cup B' = \{1, 2, 3, 4, 5, 6, 8, 10\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U = {1, ..., 10}. A only holds 1, 3, 5; the overlap 7, 9; B only 6, 8; outside both 2, 4, 10. The overlap is marked; everything else, including the region outside both circles, is shaded as (A ∩ B)′.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1, tone: "bad" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "1, 3, 5", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "7, 9", labelAt: "n", tone: "bad", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "6, 8", labelAt: "n" },
            { kind: "label", at: [5, 0.2], label: "2, 4, 10", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [5, 6.35], label: "(A ∩ B)′ = A′ ∪ B′", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.6" },
      stem: t`Let $X = \{-20, -10, -4, 2, 3, 4\}$ be the universal set, $Q = \{x / x^2 - 5x + 6 = 0\}$ and $R = \{x / x^2 + 17x - 60 = 0\}$. Then $Q' \cap R' =$`,
      verify: { kind: "value", inputs: { U: "{-20, -10, -4, 2, 3, 4}", A: "{2, 3}", B: "{-20, 3}" }, params: { ask: "icomp" } },
      options: [
        { key: "A", text: t`$\left\{-10, -4, 4\right\}$`, correct: true, value: "{-10, -4, 4}" },
        { key: "B", text: t`$\left\{-20, -10, -4, 2, 4\right\}$`, correct: false, misconceptionId: "C05-M1", value: "{-20, -10, -4, 2, 4}" },
        { key: "C", text: t`$\left\{-20, 2, 3\right\}$`, correct: false, misconceptionId: "C05-M2", value: "{-20, 2, 3}" },
        { key: "D", text: t`$\phi$`, correct: false, misconceptionId: "C05-M3", value: "EmptySet" },
      ],
      solution: {
        steps: [
          t`$x^2 - 5x + 6 = (x - 2)(x - 3)$, so $Q = \{2, 3\}$. $x^2 + 17x - 60 = (x + 20)(x - 3)$, so $R = \{-20, 3\}$.`,
          t`By De Morgan's law, $Q' \cap R' = (Q \cup R)'$, and $Q \cup R = \{-20, 2, 3\}$.`,
          t`$(Q \cup R)' = X - \{-20, 2, 3\} = \{-10, -4, 4\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of Q and R inside X. Q only holds 2; the overlap 3; R only −20; outside both −10, −4, 4. Q ∪ R is shaded, then the region outside both circles: Q′ ∩ R′ = {−10, −4, 4}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Q", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "R", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "X", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "2", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 3.5], label: "3", labelAt: "n", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "−20", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 0.2], label: "−10, −4, 4", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q2(vi)" },
      stem: t`Let $U = \{1, 2, 3, \ldots, 12\}$, $A = \{2, 3, 5, 7, 11\}$, $B = \{1, 2, 3, 4, 6\}$ and $C = \{3, 5, 6, 7, 8, 9\}$. Then $(A \cap B) \cup (A \cap C) =$`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}", A: "{2, 3, 5, 7, 11}", B: "{1, 2, 3, 4, 6}", C: "{3, 5, 6, 7, 8, 9}" }, params: { ask: "iux" } },
      options: [
        { key: "A", text: t`$\left\{3\right\}$`, correct: false, misconceptionId: "C05-M2", value: "{3}" },
        { key: "B", text: t`$\left\{2, 3, 5, 6, 7, 8, 9\right\}$`, correct: false, misconceptionId: "C05-M4", value: "{2, 3, 5, 6, 7, 8, 9}" },
        { key: "C", text: t`$\left\{2, 3, 5, 7\right\}$`, correct: true, value: "{2, 3, 5, 7}" },
        { key: "D", text: t`$\left\{2, 3, 5, 6, 7, 11\right\}$`, correct: false, misconceptionId: "C05-M1", value: "{2, 3, 5, 6, 7, 11}" },
      ],
      solution: {
        steps: [
          t`By the distributive law, $(A \cap B) \cup (A \cap C) = A \cap (B \cup C)$, and $B \cup C = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$.`,
          t`$A \cap (B \cup C)$ keeps the elements of $A$ that lie in $B \cup C$: $\{2, 3, 5, 7\}$. ($11$ is in neither $B$ nor $C$.)`,
          t`Check the long way: $A \cap B = \{2, 3\}$ and $A \cap C = \{3, 5, 7\}$, so their union is $\{2, 3, 5, 7\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C inside U = {1, ..., 12}. A only holds 11; A and B only 2; all three 3; A and C only 5, 7; B only 1, 4; B and C only 6; C only 8, 9; outside all 10, 12. B ∪ C is shaded, then the part of A inside it, {2, 3, 5, 7}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [2.34, 5.86], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.66, 5.86], label: "B", labelAt: "ne" },
            { kind: "circle", centre: [5, 2.5], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.2, 1.29], label: "C", labelAt: "e" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.9, 5], label: "11", labelAt: "n" },
            { kind: "label", at: [5, 5.2], label: "2", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [5, 3.8], label: "3", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [3.9, 2.9], label: "5, 7", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [7.1, 5], label: "1, 4", labelAt: "n" },
            { kind: "label", at: [6.1, 2.9], label: "6", labelAt: "n" },
            { kind: "label", at: [5, 1.2], label: "8, 9", labelAt: "n" },
            { kind: "label", at: [0.9, 0.8], label: "10, 12", labelAt: "n" },
          ],
        },
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q5(i)" },
      stem: t`Let $U = \{1, 2, 3, \ldots, 10\}$, $A = \{2, 4, 6\}$, $B = \{1, 2, 3, 5\}$ and $C = \{3, 5, 7, 9\}$. Find $(A \cup B) \cap (A \cup C)$.`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}", A: "{2, 4, 6}", B: "{1, 2, 3, 5}", C: "{3, 5, 7, 9}" }, params: { ask: "uix" } },
      options: [
        { key: "A", text: t`$\left\{2, 3, 4, 5, 6\right\}$`, correct: true, value: "{2, 3, 4, 5, 6}" },
        { key: "B", text: t`$\left\{2\right\}$`, correct: false, misconceptionId: "C05-M1", value: "{2}" },
        { key: "C", text: t`$\left\{1, 2, 3, 4, 5, 6, 7, 9\right\}$`, correct: false, misconceptionId: "C05-M2", value: "{1, 2, 3, 4, 5, 6, 7, 9}" },
        { key: "D", text: t`$\left\{3, 5\right\}$`, correct: false, misconceptionId: "C05-M4", value: "{3, 5}" },
      ],
      solution: {
        steps: [
          t`By the distributive law, $(A \cup B) \cap (A \cup C) = A \cup (B \cap C)$, and $B \cap C = \{3, 5\}$.`,
          t`$A \cup (B \cap C) = \{2, 4, 6\} \cup \{3, 5\} = \{2, 3, 4, 5, 6\}$.`,
          t`Check the long way: $A \cup B = \{1, 2, 3, 4, 5, 6\}$ and $A \cup C = \{2, 3, 4, 5, 6, 7, 9\}$, so their intersection is $\{2, 3, 4, 5, 6\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C inside U = {1, ..., 10}. A only holds 4, 6; A and B only 2; B and C only 3, 5; B only 1; C only 7, 9; outside all 8, 10; the other cells are empty. B ∩ C is shaded, then A ∪ (B ∩ C) = {2, 3, 4, 5, 6}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [2.34, 5.86], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.66, 5.86], label: "B", labelAt: "ne" },
            { kind: "circle", centre: [5, 2.5], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.2, 1.29], label: "C", labelAt: "e" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.9, 5], label: "4, 6", labelAt: "n" },
            { kind: "label", at: [5, 5.2], label: "2", labelAt: "n" },
            { kind: "label", at: [6.1, 2.9], label: "3, 5", labelAt: "n" },
            { kind: "label", at: [7.1, 5], label: "1", labelAt: "n" },
            { kind: "label", at: [5, 1.2], label: "7, 9", labelAt: "n" },
            { kind: "label", at: [0.9, 0.8], label: "8, 10", labelAt: "n" },
          ],
        },
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q5(iv)" },
      stem: t`For any two subsets $A$ and $B$ of a universal set $U$, the set $(A \cap B)'$ is equal to`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4}", A: "{1, 2}", B: "{2, 3}" }, params: { ask: "ci" } },
      options: [
        { key: "A", text: t`$A' \cup B'$`, correct: true, value: "{1, 3, 4}" },
        { key: "B", text: t`$A' \cap B'$`, correct: false, misconceptionId: "C05-M1", value: "{4}" },
        { key: "C", text: t`$A \cup B$`, correct: false, misconceptionId: "C05-M2", value: "{1, 2, 3}" },
        { key: "D", text: t`$(A \cup B) - (A \cap B)$`, correct: false, misconceptionId: "C05-M3", value: "{1, 3}" },
      ],
      solution: {
        steps: [
          t`$(A \cap B)'$ is everything in $U$ except the overlap: $A$ only, $B$ only, and the region outside both.`,
          t`$A'$ covers $B$ only and the outside; $B'$ covers $A$ only and the outside. Together, $A' \cup B'$ covers the same three parts, so $(A \cap B)' = A' \cup B'$.`,
          t`$A' \cap B'$ is only the region outside both circles, which is $(A \cup B)'$, a different set.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside U. Everything except the overlap is shaded: that is (A ∩ B)′, and also A′ ∪ B′. The region outside both circles alone is A′ ∩ B′, which is (A ∪ B)′ instead.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "bad" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 6.35], label: "(A ∩ B)′", labelAt: "n", tone: "good", step: 1 },
            { kind: "label", at: [5, 0.2], label: "A′ ∪ B′", labelAt: "n", tone: "good", step: 2 },
            { kind: "label", at: [0.9, 6.3], label: "A′ ∩ B′", labelAt: "n", tone: "bad", step: 3 },
          ],
        },
      },
    },
  ],
};
