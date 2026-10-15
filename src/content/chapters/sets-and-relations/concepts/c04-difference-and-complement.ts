import type { Concept, FigureElement, Pt, Shape } from "../../../types.ts";

const t = String.raw;

/** The Venn diagram of the lesson slides: two circles of radius 2.4 inside the rectangle U. */
const LEFT: Pt = [3.9, 3.5];
const RIGHT: Pt = [6.1, 3.5];
const R = 2.4;
const view = { x: [-0.3, 10.3] as [number, number], y: [-0.3, 7.9] as [number, number] };

/** The inside of the rectangle U, (0, 0) to (10, 7). */
const inU: Shape[] = [
  { kind: "halfPlane", through: [[0, 0], [10, 0]] },
  { kind: "halfPlane", through: [[10, 0], [10, 7]] },
  { kind: "halfPlane", through: [[10, 7], [0, 7]] },
  { kind: "halfPlane", through: [[0, 7], [0, 0]] },
];

/** One of the four cells: inside (true) or outside (false) the left and the right circle, shaded at `step`. */
function cell(inLeft: boolean, inRight: boolean, step?: number, tone?: FigureElement["tone"]): FigureElement {
  const side = (inside: boolean, centre: Pt): Shape => ({ kind: inside ? "disc" : "outsideDisc", centre, r: R });
  return { kind: "region", within: [side(inLeft, LEFT), side(inRight, RIGHT), ...inU], ...(step ? { step } : {}), ...(tone ? { tone } : {}) };
}

/** The rectangle U and the two circles, named `left` and `right`; `uStep` delays the rectangle. */
function venn(left: string, right: string, uStep?: number): FigureElement[] {
  const at = uStep ? { step: uStep } : {};
  return [
    { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted", ...at },
    { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n", ...at },
    { kind: "circle", centre: LEFT, r: R, tone: "muted" },
    { kind: "label", at: [2.2, 5.2], label: left, labelAt: "nw" },
    { kind: "circle", centre: RIGHT, r: R, tone: "muted" },
    { kind: "label", at: [7.8, 5.2], label: right, labelAt: "ne" },
  ];
}

/** A label just above the rectangle, clear of its top edge. */
const top = (label: string, step: number, tone?: FigureElement["tone"]): FigureElement => ({ kind: "label", at: [5, 7.05], label, labelAt: "n", step, ...(tone ? { tone } : {}) });

/** The names of the two crescents, under their elements. */
const leftName = (label: string, step: number, tone?: FigureElement["tone"]): FigureElement => ({ kind: "label", at: [2.4, 3.3], label, labelAt: "s", step, ...(tone ? { tone } : {}) });
const rightName = (label: string, step: number, tone?: FigureElement["tone"]): FigureElement => ({ kind: "label", at: [7.6, 3.3], label, labelAt: "s", step, ...(tone ? { tone } : {}) });

/** The elements of A = {1, 2, 3, 5, 8} and B = {2, 4, 8} in their cells. */
const hookElements = (step?: number): FigureElement[] =>
  [
    { at: [2.6, 3.5] as Pt, label: "1, 3, 5" },
    { at: [5, 3.5] as Pt, label: "2, 8" },
    { at: [7.4, 3.5] as Pt, label: "4" },
  ].map((e): FigureElement => ({ kind: "label", ...e, labelAt: "n", ...(step ? { step } : {}) }));

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$A = \{1, 2, 3, 5, 8\}$ and $B = \{2, 4, 8\}$. You know $A \cup B = B \cup A$ and $A \cap B = B \cap A$. **Is $A - B$ the same set as $B - A$?**`,
    reveal: t`No. $A - B$ strikes $2$ and $8$ out of $A$ and leaves $\{1, 3, 5\}$. $B - A$ strikes them out of $B$ and leaves $\{4\}$. Order matters for a difference. The two leftovers together, $\{1, 3, 4, 5\}$, are the elements in exactly one set: $A \,\Delta\, B$.`,
  },
  explanation: {
    intuition: [
      t`Recall: a **Venn diagram** draws each set as a circle; here $A = \{1, 2, 3, 5, 8\}$ and $B = \{2, 4, 8\}$.`,
      t`To find $A - B$, read "$A$ minus $B$", strike out of $A$ the elements it shares with $B$: $2$ and $8$.`,
      t`What is left is the **difference** $A - B = \{1, 3, 5\}$: the crescent of $A$ outside $B$.`,
      t`$B - A$ starts from $B$ instead and leaves $\{4\}$: order matters here, unlike for $\cup$ and $\cap$.`,
      t`Recall: the universal set $U$, drawn as the rectangle, holds every element under discussion.`,
      t`The **complement** $A'$ is what is left of $U$ once you strike out $A$: everything outside circle $A$, even outside both circles.`,
    ],
    formal: [
      {
        title: "Difference of two sets",
        points: [
          t`$A - B$ is the set of the elements that are in $A$ and not in $B$.`,
          t`In set-builder form, $A - B$ equals $\{x : x \in A \text{ and } x \notin B\}$.`,
          t`Only elements of $A$ can be in it: nothing from $B$ gets in.`,
          t`$B - A$ is the other crescent: the elements of $B$ that are not in $A$.`,
          t`So in general $A - B \ne B - A$.`,
        ],
        figure: {
          alt: "A Venn diagram of two sets A and B inside the rectangle U. First the part of circle A outside circle B is shaded and named A − B. Then the part of circle B outside circle A is shaded in another colour and named B − A. A note says A − B ≠ B − A.",
          axes: "none",
          view,
          elements: [
            cell(true, false, 1),
            cell(false, true, 4, "good"),
            ...venn("A", "B"),
            leftName("A − B", 1),
            rightName("B − A", 4, "good"),
            top("A − B ≠ B − A", 5),
          ],
        },
      },
      {
        title: "Complement of a set",
        points: [
          t`Fix a universal set $U$, the rectangle; the book also calls it $X$.`,
          t`The complement of $A$ is $A' = U - A$: the elements of $U$ that are not in $A$.`,
          t`In set-builder form, $A' = \{x \in U : x \notin A\}$.`,
          t`It includes the elements of $U$ that are in none of the given sets.`,
          t`Taking the complement twice gives back the set: $(A')' = A$.`,
          t`Also $U' = \varnothing$, the empty set, since nothing in $U$ is outside $U$; and $\varnothing' = U$.`,
        ],
        figure: {
          alt: "A Venn diagram of two sets A and B inside the rectangle U. Everything in U outside circle A is shaded and named A′ = U − A: the part of B outside A and the part of U outside both circles. That outside part is marked: in neither A nor B, and still in A′.",
          axes: "none",
          view,
          elements: [
            cell(false, true, 2, "good"),
            cell(false, false, 2, "good"),
            ...venn("A", "B"),
            top("A′ = U − A", 2, "good"),
            { kind: "label", at: [5, 0.15], label: "in neither A nor B", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Difference as an intersection",
        points: [
          t`$B'$ is everything in $U$ outside circle $B$.`,
          t`Recall: $A \cap B'$ keeps the part of $B'$ that is also inside circle $A$.`,
          t`That is exactly the crescent $A - B$: so $A - B = A \cap B'$.`,
          t`In words: an element of $A - B$ is in $A$ and outside $B$.`,
        ],
        figure: {
          alt: "A Venn diagram of two sets A and B inside the rectangle U. First everything outside circle B is shaded lightly and named B′. Then the part of it inside circle A is shaded and named A ∩ B′: it is the crescent A − B. A note says A − B = A ∩ B′.",
          axes: "none",
          view,
          elements: [
            cell(true, false, 1, "muted"),
            cell(false, false, 1, "muted"),
            cell(true, false, 2),
            ...venn("A", "B"),
            { kind: "label", at: [0.9, 0.8], label: "B′", labelAt: "n", tone: "muted", step: 1 },
            leftName("A ∩ B′", 2),
            top("A − B = A ∩ B′", 3),
          ],
        },
      },
      {
        title: "Complement of a bracket",
        points: [
          t`To find $(B - C)'$, work out the bracket first: $B - C$.`,
          t`Then take what is left of $U$: $(B - C)' = U - (B - C)$.`,
          t`An intersection works the same way: $(A \cap C)' = U - (A \cap C)$.`,
        ],
        figure: {
          alt: "A Venn diagram of two sets B and C inside the rectangle U. First the bracket, B − C, the part of circle B outside circle C, is shaded. Then everything else in U is shaded in another colour and named (B − C)′ = U − (B − C): the overlap, the part of C outside B and the part outside both circles.",
          axes: "none",
          view,
          elements: [
            cell(true, false, 1),
            cell(true, true, 2, "good"),
            cell(false, true, 2, "good"),
            cell(false, false, 2, "good"),
            ...venn("B", "C"),
            leftName("B − C", 1),
            top("(B − C)′ = U − (B − C)", 2, "good"),
          ],
        },
      },
      {
        title: "Symmetric difference",
        points: [
          t`The **symmetric difference** $A \,\Delta\, B$ holds the elements in exactly one of the two sets.`,
          t`So $A \,\Delta\, B = (A - B) \cup (B - A)$: the two crescents together.`,
          t`Here order does not matter: $A \,\Delta\, B = B \,\Delta\, A$.`,
          t`For $A = \{1, 2, 3, 5, 8\}$ and $B = \{2, 4, 8\}$: $A \,\Delta\, B = \{1, 3, 4, 5\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of two sets A and B inside the rectangle U. Both crescents, the part of A outside B and the part of B outside A, are shaded; the overlap is not. They are named A − B and B − A. Then the elements appear: A only holds 1, 3, 5, the overlap holds 2, 8 and B only holds 4, so A Δ B = {1, 3, 4, 5}.",
          axes: "none",
          view,
          elements: [
            cell(true, false, 1),
            cell(false, true, 1),
            ...venn("A", "B"),
            leftName("A − B", 2),
            rightName("B − A", 2),
            ...hookElements(4),
            top("A Δ B = {1, 3, 4, 5}", 4),
          ],
        },
      },
    ],
    worked: {
      prompt: t`Let $U = \{1, 2, 3, \ldots, 10\}$, $A = \{x / x \text{ is prime},\ x < 10\}$ and $B = \{1, 3, 5, 7, 9\}$. Find $A - B$ and $(A - B)'$, and check that $A - B = A \cap B'$.`,
      steps: [
        t`$A = \{2, 3, 5, 7\}$. Sort $U$ into the four cells: $A$ only $\{2\}$, both $\{3, 5, 7\}$, $B$ only $\{1, 9\}$, neither $\{4, 6, 8, 10\}$.`,
        t`$A - B$: strike $3, 5, 7$ out of $A$. $A - B = \{2\}$.`,
        t`$(A - B)' = U - \{2\}$: every other element of $U$, including $4, 6, 8, 10$, which are in neither set. So $(A - B)'$ equals $\{1, 3, 4, 5, 6, 7, 8, 9, 10\}$.`,
        t`Check: $B' = \{2, 4, 6, 8, 10\}$, so $A \cap B' = \{2\} = A - B$.`,
      ],
      answer: t`$A - B = \{2\}$ and $(A - B)'$ equals $\{1, 3, 4, 5, 6, 7, 8, 9, 10\}$.`,
      figure: {
        alt: "A Venn diagram of A (primes) and B (odd numbers) inside U = {1, ..., 10}. A only holds 2; the overlap holds 3, 5, 7; B only holds 1, 9; outside both are 4, 6, 8, 10. A − B, the part of A outside B, is shaded first: {2}. Then everything else in U is shaded: (A − B)′ = {1, 3, 4, 5, 6, 7, 8, 9, 10}, including the four numbers outside both circles.",
        axes: "none",
        view: { x: [-0.3, 10.3], y: [-0.3, 7.9] },
        elements: [
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
          { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
          { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
          { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
          { kind: "label", at: [5, 7.05], label: "(A − B)′ = {1, 3, 4, 5, 6, 7, 8, 9, 10}", labelAt: "n", step: 3, tone: "good" },
          { kind: "label", at: [2.6, 3.5], label: "2", labelAt: "n", step: 1 },
          { kind: "label", at: [5, 3.5], label: "3, 5, 7", labelAt: "n", step: 1 },
          { kind: "label", at: [7.4, 3.5], label: "1, 9", labelAt: "n", step: 1 },
          { kind: "label", at: [0.9, 0.8], label: "4, 6, 8, 10", labelAt: "n", step: 1 },
        ],
      },
    },
    figure: {
      alt: "A Venn diagram of A = {1, 2, 3, 5, 8} and B = {2, 4, 8}. A only holds 1, 3, 5; the overlap holds 2, 8; B only holds 4. First the overlap, 2 and 8, is shaded as struck out of A. Then the part of A outside B is shaded: A − B = {1, 3, 5}. Then the part of B outside A: B − A = {4}, a different set. The rectangle U appears around both circles, and the part of U outside both circles is shaded too, so everything outside circle A is shaded: the complement A′.",
      axes: "none",
      view,
      elements: [
        cell(true, true, 2, "bad"),
        cell(true, false, 3),
        cell(false, true, 4, "good"),
        cell(false, false, 6, "good"),
        ...venn("A", "B", 5),
        ...hookElements(),
        leftName("A − B", 3),
        rightName("B − A", 4, "good"),
        { kind: "label", at: [9.1, 0.8], label: "A′", labelAt: "n", tone: "good", step: 6 },
      ],
    },
    visualSpec: t`Tap the elements of $U$ into $A$, $B$ or neither on a Venn diagram; buttons for $A - B$, $B - A$, $A \,\Delta\, B$ and $A'$ shade the matching cells and list their elements.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Treating a difference as order-free, like union and intersection: working out $B - A$ when asked for $A - B$`,
      remediation: t`$A - B$ starts from $A$: keep the elements of $A$ that are not in $B$. $B - A$ starts from $B$, so it is usually a different set.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Mixing up the difference $A - B$ with the symmetric difference $A \,\Delta\, B$ (in exactly one set), in either direction`,
      remediation: t`$A - B$ holds only elements of $A$; nothing from $B$ gets in. $A \,\Delta\, B = (A - B) \cup (B - A)$ takes the one-sided parts of both sets.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Taking the complement inside the sets that are listed, so the elements of $U$ that lie in none of them are left out`,
      remediation: t`$A' = U - A$: every element of $U$ not in $A$, including those that belong to none of the sets in the question. Go through $U$ itself, element by element.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Writing down the elements struck out ($A \cap B$) instead of the elements left ($A - B$)`,
      remediation: t`In $A - B$ the common elements, $A \cap B$, are the ones you remove. The answer is what remains of $A$: $A - B = A \cap B'$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    t`C04-M1 gives the key on any symmetric-difference item ($X \,\Delta\, Y = Y \,\Delta\, X$) and has no model for a plain complement; it is tested on $X - Y$ and $(X - Y)'$ items.`,
    t`C04-M3 gives the key whenever the listed sets cover $U$; draw it only from items where $U$ has elements in none of the listed sets. A plain complement $A'$ item can detect only C04-M3, so none is used as a check item.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.1" },
      stem: t`If $A = \{x / x \in \mathrm{N},\ x \text{ is a factor of } 12\}$ and $B = \{x / x \in \mathrm{N},\ x \text{ is a factor of } 18\}$, then $A - B$ is:`,
      verify: { kind: "value", inputs: { A: "{1, 2, 3, 4, 6, 12}", B: "{1, 2, 3, 6, 9, 18}" }, params: { ask: "diff" } },
      options: [
        { key: "A", text: t`$\left\{4, 9, 12, 18\right\}$`, correct: false, misconceptionId: "C04-M2", value: "{4, 9, 12, 18}" },
        { key: "B", text: t`$\left\{1, 2, 3, 6\right\}$`, correct: false, misconceptionId: "C04-M4", value: "{1, 2, 3, 6}" },
        { key: "C", text: t`$\left\{4, 12\right\}$`, correct: true, value: "{4, 12}" },
        { key: "D", text: t`$\left\{9, 18\right\}$`, correct: false, misconceptionId: "C04-M1", value: "{9, 18}" },
      ],
      solution: {
        steps: [
          t`$A = \{1, 2, 3, 4, 6, 12\}$ and $B = \{1, 2, 3, 6, 9, 18\}$. Common elements: $1, 2, 3, 6$.`,
          t`$A - B$: strike the common elements out of $A$. What is left is $\{4, 12\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A (factors of 12) and B (factors of 18). The overlap holds 1, 2, 3, 6; A only holds 4, 12; B only holds 9, 18. The part of A outside B, shaded, is A − B = {4, 12}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "4, 12", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 3.5], label: "1, 2, 3, 6", labelAt: "n", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "9, 18", labelAt: "n", step: 1 },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q2(iii)" },
      stem: t`If $A = \{1, 4, 7, 10\}$ and $B = \{2, 4, 6, 7, 11\}$, then $B - A$ is:`,
      verify: { kind: "value", inputs: { A: "{1, 4, 7, 10}", B: "{2, 4, 6, 7, 11}" }, params: { ask: "diff", x: "B", y: "A" } },
      options: [
        { key: "A", text: t`$\left\{1, 10\right\}$`, correct: false, misconceptionId: "C04-M1", value: "{1, 10}" },
        { key: "B", text: t`$\left\{1, 2, 6, 10, 11\right\}$`, correct: false, misconceptionId: "C04-M2", value: "{1, 2, 6, 10, 11}" },
        { key: "C", text: t`$\left\{4, 7\right\}$`, correct: false, misconceptionId: "C04-M4", value: "{4, 7}" },
        { key: "D", text: t`$\left\{2, 6, 11\right\}$`, correct: true, value: "{2, 6, 11}" },
      ],
      solution: {
        steps: [
          t`Common elements of $A = \{1, 4, 7, 10\}$ and $B = \{2, 4, 6, 7, 11\}$: $4$ and $7$.`,
          t`$B - A$ starts from $B$: strike out $4$ and $7$. $B - A = \{2, 6, 11\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B. The overlap holds 4, 7; A only holds 1, 10; B only holds 2, 6, 11. The part of B outside A, shaded, is B − A = {2, 6, 11}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "1, 10", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 3.5], label: "4, 7", labelAt: "n", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "2, 6, 11", labelAt: "n", step: 1 },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.4" },
      stem: t`Let $U = \{1, 2, 3, \ldots, 12\}$ be the universal set, $A = \{1, 3, 5, 7, 9\}$, $B = \{2, 3, 4, 6, 8, 10\}$ and $C = \{6, 7, 8, 9\}$. Then $(B - C)'$ is:`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}", A: "{1, 3, 5, 7, 9}", B: "{2, 3, 4, 6, 8, 10}", C: "{6, 7, 8, 9}" }, params: { ask: "comp_diff", x: "B", y: "C" } },
      options: [
        { key: "A", text: t`$\left\{1, 5, 6, 7, 8, 9\right\}$`, correct: false, misconceptionId: "C04-M3", value: "{1, 5, 6, 7, 8, 9}" },
        { key: "B", text: t`$\left\{1, 2, 3, 4, 5, 7, 9, 10, 11, 12\right\}$`, correct: false, misconceptionId: "C04-M4", value: "{1, 2, 3, 4, 5, 7, 9, 10, 11, 12}" },
        { key: "C", text: t`$\left\{1, 5, 6, 7, 8, 9, 11, 12\right\}$`, correct: true, value: "{1, 5, 6, 7, 8, 9, 11, 12}" },
        { key: "D", text: t`$\left\{1, 2, 3, 4, 5, 6, 8, 10, 11, 12\right\}$`, correct: false, misconceptionId: "C04-M1", value: "{1, 2, 3, 4, 5, 6, 8, 10, 11, 12}" },
      ],
      solution: {
        steps: [
          t`$B - C$: strike $6$ and $8$, the elements $B$ shares with $C$, out of $B$. $B - C = \{2, 3, 4, 10\}$.`,
          t`$(B - C)' = U - \{2, 3, 4, 10\}$: every other element of $U$. From the circles: $1, 5, 6, 7, 8, 9$.`,
          t`$11$ and $12$ are in none of $A$, $B$, $C$, but they are in $U$, so they belong too. $(B - C)' = \{1, 5, 6, 7, 8, 9, 11, 12\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of B and C inside U = {1, ..., 12}. B only holds 2, 3, 4, 10; the overlap holds 6, 8; C only holds 7, 9; outside both are 1, 5, 11, 12. B − C, the part of B outside C, is shaded first; then everything else in U is shaded as (B − C)′, and 11, 12 are marked as part of it.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "B", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "C", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "2, 3, 4, 10", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "6, 8", labelAt: "n" },
            { kind: "label", at: [7.4, 3.5], label: "7, 9", labelAt: "n" },
            { kind: "label", at: [0.9, 0.8], label: "1, 5", labelAt: "n" },
            { kind: "label", at: [9.1, 0.8], label: "11, 12", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q5(vii)" },
      stem: t`Let $X = \{1, 2, 3, \ldots, 10\}$ be the universal set, $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5, 6\}$ and $C = \{4, 5, 6, 7, 8\}$. Then $(A - C)'$ is:`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}", A: "{1, 2, 3, 4}", B: "{3, 4, 5, 6}", C: "{4, 5, 6, 7, 8}" }, params: { ask: "comp_diff", x: "A", y: "C" } },
      options: [
        { key: "A", text: t`$\left\{4, 9, 10\right\}$`, correct: false, misconceptionId: "C04-M2", value: "{4, 9, 10}" },
        { key: "B", text: t`$\left\{4, 5, 6, 7, 8\right\}$`, correct: false, misconceptionId: "C04-M3", value: "{4, 5, 6, 7, 8}" },
        { key: "C", text: t`$\left\{1, 2, 3, 5, 6, 7, 8, 9, 10\right\}$`, correct: false, misconceptionId: "C04-M4", value: "{1, 2, 3, 5, 6, 7, 8, 9, 10}" },
        { key: "D", text: t`$\left\{4, 5, 6, 7, 8, 9, 10\right\}$`, correct: true, value: "{4, 5, 6, 7, 8, 9, 10}" },
      ],
      solution: {
        steps: [
          t`$A - C$: strike $4$, the only element $A$ shares with $C$, out of $A$. $A - C = \{1, 2, 3\}$.`,
          t`$(A - C)' = X - \{1, 2, 3\}$. From the circles: $4, 5, 6, 7, 8$.`,
          t`$9$ and $10$ are in none of $A$, $B$, $C$, but they are in $X$. $(A - C)' = \{4, 5, 6, 7, 8, 9, 10\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and C inside X = {1, ..., 10}. A only holds 1, 2, 3; the overlap holds 4; C only holds 5, 6, 7, 8; outside both are 9, 10. A − C is shaded first; then everything else in X is shaded as (A − C)′, and 9, 10 are marked as part of it.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "C", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "X", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "1, 2, 3", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "4", labelAt: "n" },
            { kind: "label", at: [7.4, 3.5], label: "5, 6, 7, 8", labelAt: "n" },
            { kind: "label", at: [0.9, 0.8], label: "9, 10", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q5(viii)" },
      stem: t`Let $X = \{1, 2, 3, \ldots, 10\}$ be the universal set, $A = \{2, 4, 6, 8\}$ and $B = \{1, 2, 3, 4\}$. The symmetric difference is $A \,\Delta\, B = (A - B) \cup (B - A)$. Then $(A \,\Delta\, B)'$ is:`,
      verify: { kind: "value", inputs: { U: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}", A: "{2, 4, 6, 8}", B: "{1, 2, 3, 4}" }, params: { ask: "comp_sym" } },
      options: [
        { key: "A", text: t`$\left\{1, 3, 5, 6, 7, 8, 9, 10\right\}$`, correct: false, misconceptionId: "C04-M4", value: "{1, 3, 5, 6, 7, 8, 9, 10}" },
        { key: "B", text: t`$\left\{2, 4, 5, 7, 9, 10\right\}$`, correct: true, value: "{2, 4, 5, 7, 9, 10}" },
        { key: "C", text: t`$\left\{1, 2, 3, 4, 5, 7, 9, 10\right\}$`, correct: false, misconceptionId: "C04-M2", value: "{1, 2, 3, 4, 5, 7, 9, 10}" },
        { key: "D", text: t`$\left\{2, 4\right\}$`, correct: false, misconceptionId: "C04-M3", value: "{2, 4}" },
      ],
      solution: {
        steps: [
          t`$A - B = \{6, 8\}$ and $B - A = \{1, 3\}$, so $A \,\Delta\, B = \{1, 3, 6, 8\}$: the two crescents.`,
          t`$(A \,\Delta\, B)'$ is the rest of $X$: the overlap $\{2, 4\}$ and the outside $\{5, 7, 9, 10\}$.`,
          t`$(A \,\Delta\, B)' = \{2, 4, 5, 7, 9, 10\}$: the elements in both sets or in neither.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside X = {1, ..., 10}. A only holds 6, 8; the overlap holds 2, 4; B only holds 1, 3; outside both are 5, 7, 9, 10. The two crescents, A Δ B, are shaded first; then the overlap and the outside are shaded as (A Δ B)′ = {2, 4, 5, 7, 9, 10}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "X", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "6, 8", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "2, 4", labelAt: "n" },
            { kind: "label", at: [7.4, 3.5], label: "1, 3", labelAt: "n" },
            { kind: "label", at: [0.9, 0.8], label: "5, 7, 9, 10", labelAt: "n" },
          ],
        },
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.2" },
      stem: t`If $A = \left\{\dfrac{1}{x} / x \in \mathrm{N},\ x < 5\right\}$ and $B = \left\{\dfrac{1}{2x} / x \in \mathrm{N},\ x \le 4\right\}$, then $B - A$ is:`,
      verify: { kind: "value", inputs: { A: "{1, 1/2, 1/3, 1/4}", B: "{1/2, 1/4, 1/6, 1/8}" }, params: { ask: "diff", x: "B", y: "A" } },
      options: [
        { key: "A", text: t`$\left\{\frac{1}{6}, \frac{1}{8}\right\}$`, correct: true, value: "{1/8, 1/6}" },
        { key: "B", text: t`$\left\{1, \frac{1}{3}\right\}$`, correct: false, misconceptionId: "C04-M1", value: "{1/3, 1}" },
        { key: "C", text: t`$\left\{1, \frac{1}{3}, \frac{1}{6}, \frac{1}{8}\right\}$`, correct: false, misconceptionId: "C04-M2", value: "{1/8, 1/6, 1/3, 1}" },
        { key: "D", text: t`$\left\{\frac{1}{2}, \frac{1}{4}\right\}$`, correct: false, misconceptionId: "C04-M4", value: "{1/4, 1/2}" },
      ],
      solution: {
        steps: [
          t`List the sets: $A = \left\{1, \dfrac{1}{2}, \dfrac{1}{3}, \dfrac{1}{4}\right\}$ and $B = \left\{\dfrac{1}{2}, \dfrac{1}{4}, \dfrac{1}{6}, \dfrac{1}{8}\right\}$. Common elements: $\dfrac{1}{2}$ and $\dfrac{1}{4}$.`,
          t`$B - A$ starts from $B$: strike out $\dfrac{1}{2}$ and $\dfrac{1}{4}$. $B - A = \left\{\dfrac{1}{6}, \dfrac{1}{8}\right\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B. The overlap holds 1/2, 1/4; A only holds 1, 1/3; B only holds 1/6, 1/8. The part of B outside A, shaded, is B − A = {1/6, 1/8}.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "1, 1/3", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 3.5], label: "1/2, 1/4", labelAt: "n", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "1/6, 1/8", labelAt: "n", step: 1 },
          ],
        },
      },
    },
  ],
};
