import type { Concept, FigureElement, Pt, Shape } from "../../../types.ts";

const t = String.raw;

/** The rectangle U, 10 by 7, as half-planes: a shaded piece stays inside it. */
const inU: Shape[] = [
  { kind: "halfPlane", through: [[0, 0], [10, 0]] },
  { kind: "halfPlane", through: [[10, 0], [10, 7]] },
  { kind: "halfPlane", through: [[10, 7], [0, 7]] },
  { kind: "halfPlane", through: [[0, 7], [0, 0]] },
];
const view = { x: [-0.3, 10.3] as [number, number], y: [-0.3, 7.3] as [number, number] };
const frame: FigureElement[] = [
  { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
  { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
];

/** Inside or outside the circle of radius r about `centre`. */
const side = (inside: boolean, centre: Pt, r: number): Shape => (inside ? { kind: "disc", centre, r } : { kind: "outsideDisc", centre, r });

/** Two overlapping sets A and B, as on the idea slide; `two(a, b)` is one of their pieces. */
const A2: Pt = [3.9, 3.5];
const B2: Pt = [6.1, 3.5];
const two = (a: boolean, b: boolean): Shape[] => [side(a, A2, 2.4), side(b, B2, 2.4), ...inU];
const twoSets: FigureElement[] = [
  ...frame,
  { kind: "circle", centre: A2, r: 2.4, tone: "muted" },
  { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
  { kind: "circle", centre: B2, r: 2.4, tone: "muted" },
  { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
];

/** Three sets A, B and C, as in the worked example; `three(a, b, c)` is one of their seven pieces. */
const A3: Pt = [3.9, 4.3];
const B3: Pt = [6.1, 4.3];
const C3: Pt = [5, 2.5];
const three = (a: boolean, b: boolean, c: boolean): Shape[] => [side(a, A3, 2.2), side(b, B3, 2.2), side(c, C3, 2.2), ...inU];
const threeSets: FigureElement[] = [
  ...frame,
  { kind: "circle", centre: A3, r: 2.2, tone: "muted" },
  { kind: "label", at: [2.34, 5.86], label: "A", labelAt: "nw" },
  { kind: "circle", centre: B3, r: 2.2, tone: "muted" },
  { kind: "label", at: [7.66, 5.86], label: "B", labelAt: "ne" },
  { kind: "circle", centre: C3, r: 2.2, tone: "muted" },
  { kind: "label", at: [7.2, 1.29], label: "C", labelAt: "e" },
];
/** The seven pieces of three sets, as [in A, in B, in C]. */
const pieces: [boolean, boolean, boolean][] = [
  [true, false, false], [false, true, false], [false, false, true],
  [true, true, false], [true, false, true], [false, true, true], [true, true, true],
];

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`The chess club has Asha, Bina and Chetan. The music club has Bina and Dev. The principal sends one invitation to every member of either club, and gives a badge to every student in both clubs. **How many invitations, and how many badges?**`,
    reveal: t`$4$ invitations: Asha, Bina, Chetan and Dev. Bina is in both clubs but gets one invitation. $1$ badge: Bina. The invitation list is the **union** of the two clubs; the badge list is their **intersection**.`,
  },
  explanation: {
    intuition: [
      t`A **Venn diagram** draws each set as a circle inside a rectangle $U$, the **universal set** of everything being discussed.`,
      t`Take $A = \{2, 4, 6, 8\}$ and $B = \{3, 6, 9\}$: $6$ is in both, so it sits where the circles overlap.`,
      t`The **union** $A \cup B$ collects everything in $A$, in $B$ or in both, each written once.`,
      t`So $A \cup B = \{2, 3, 4, 6, 8, 9\}$: the whole region the two circles cover.`,
      t`The **intersection** $A \cap B$ keeps only what the two sets share: here $A \cap B = \{6\}$, the overlap.`,
      t`With three sets or brackets, combine two sets at a time, the bracket first.`,
    ],
    formal: [
      {
        title: "Union",
        points: [
          t`$A \cup B = \{x \mid x \in A$ or $x \in B\}$, where $\mid$, like $/$, reads "such that".`,
          t`"Or" includes both: an element $x$ in both sets is in $A \cup B$, written once.`,
        ],
        figure: {
          alt: "A Venn diagram of two overlapping circles A and B in the rectangle U. Both circles together, the overlap included, are shaded as A ∪ B. Then a point x in the overlap is marked: it is in A ∪ B too.",
          axes: "none",
          view,
          elements: [
            { kind: "region", within: two(true, false), step: 1 },
            { kind: "region", within: two(false, true), step: 1 },
            { kind: "region", within: two(true, true), step: 1 },
            ...twoSets,
            { kind: "label", at: [5, 6.1], label: "A ∪ B", labelAt: "n", step: 1 },
            { kind: "point", at: [5, 3.5], label: "x", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Intersection",
        points: [
          t`$A \cap B = \{x \mid x \in A$ and $x \in B\}$: the overlap of the two circles.`,
          t`"And" needs both: an element $x$ in $A$ but not in $B$ is left out.`,
        ],
        figure: {
          alt: "A Venn diagram of two overlapping circles A and B in the rectangle U. Only the overlap is shaded, as A ∩ B. Then a point x in A but outside B is marked: it is not in A ∩ B.",
          axes: "none",
          view,
          elements: [
            { kind: "region", within: two(true, true), tone: "good", step: 1 },
            ...twoSets,
            { kind: "label", at: [5, 6.1], label: "A ∩ B", labelAt: "n", tone: "good", step: 1 },
            { kind: "point", at: [2.6, 3.5], label: "x", labelAt: "n", tone: "bad", step: 2 },
          ],
        },
      },
      {
        title: "Disjoint sets",
        points: [
          t`Two sets are **disjoint** when they have no element in common.`,
          t`For example, $\{1, 3, 5\}$ and $\{2, 4\}$ are disjoint: their circles do not overlap.`,
          t`Then $A \cap B = \emptyset$, the **empty set**, with no elements; it is also written $\phi$.`,
        ],
        figure: {
          alt: "A Venn diagram of two separate circles in the rectangle U: A holds 1, 3, 5 and B holds 2, 4. They do not overlap, so A ∩ B = ∅.",
          axes: "none",
          view,
          elements: [
            ...frame,
            { kind: "circle", centre: [2.8, 3.5], r: 1.8, tone: "muted" },
            { kind: "label", at: [1.53, 4.77], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [7.2, 3.5], r: 1.8, tone: "muted" },
            { kind: "label", at: [8.47, 4.77], label: "B", labelAt: "ne" },
            { kind: "label", at: [2.8, 3.3], label: "1, 3, 5", labelAt: "n", step: 2 },
            { kind: "label", at: [7.2, 3.3], label: "2, 4", labelAt: "n", step: 2 },
            { kind: "label", at: [5, 6.1], label: "A ∩ B = ∅", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Three sets",
        points: [
          t`$A \cup B \cup C$ holds the elements in at least one of the three sets.`,
          t`$A \cap B \cap C$ holds the elements in all three: the middle piece.`,
          t`With only one operation, the brackets don't matter: $(A \cup B) \cup C$ equals $A \cup (B \cup C)$.`,
        ],
        figure: {
          alt: "A Venn diagram of three overlapping circles A, B and C in the rectangle U. First all three circles together are shaded, as A ∪ B ∪ C. Then the middle piece, inside all three, is shaded as A ∩ B ∩ C.",
          axes: "none",
          view,
          elements: [
            ...pieces.map(([a, b, c]): FigureElement => ({ kind: "region", within: three(a, b, c), step: 1 })),
            { kind: "region", within: three(true, true, true), tone: "good", step: 2 },
            ...threeSets,
          ],
        },
      },
      {
        title: "Mixed operations: bracket first",
        points: [
          t`When $\cup$ and $\cap$ are mixed, work out the bracket first.`,
          t`In $A \cup (B \cap C)$, first find $B \cap C$, the part in both $B$ and $C$.`,
          t`Then join all of $A$ to it: that is $A \cup (B \cap C)$.`,
          t`$(A \cup B) \cap C$ is, in general, a different set: moving the bracket changes the answer.`,
        ],
        figure: {
          alt: "A Venn diagram of three overlapping circles A, B and C in the rectangle U. First B ∩ C, the part inside both B and C, is shaded. Then all of A is shaded with it, as A ∪ (B ∩ C).",
          axes: "none",
          view,
          elements: [
            { kind: "region", within: three(false, true, true), step: 2 },
            { kind: "region", within: three(true, true, true), step: 2 },
            ...pieces
              .filter(([a, b, c]) => a || (b && c))
              .map(([a, b, c]): FigureElement => ({ kind: "region", within: three(a, b, c), tone: "good", step: 3 })),
            ...threeSets,
            { kind: "label", at: [0.3, 0.6], label: "A ∪ (B ∩ C)", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Sets given by a rule",
        points: [
          t`When a set is given by a rule, first write it in roster form, as a list of its elements.`,
          t`Take $\{x \mid x^2 - 7x + 12 = 0\}$: factorise to get $(x - 3)(x - 4) = 0$.`,
          t`Each factor is zero at one root, so the set is $\{3, 4\}$.`,
        ],
        figure: {
          alt: "One circle in the rectangle U, for the set of x with x² − 7x + 12 = 0. Once the equation is factorised, its roots 3 and 4 appear inside the circle.",
          axes: "none",
          view,
          elements: [
            ...frame,
            { kind: "circle", centre: [5, 3.3], r: 2.4, tone: "muted" },
            { kind: "label", at: [5, 5.85], label: "{x | x² − 7x + 12 = 0}", labelAt: "n" },
            { kind: "label", at: [5, 3.1], label: "3, 4", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`$A = \{x \mid x$ is a prime number less than $10\}$, $B = \{x \mid x \in N$, $x$ is a factor of $8\}$ and $C = \{x \mid x^2 - 9x + 20 = 0\}$. Find $A \cap (B \cup C)$.`,
      steps: [
        t`Roster form: $A = \{2, 3, 5, 7\}$, $B = \{1, 2, 4, 8\}$, and $x^2 - 9x + 20 = (x - 4)(x - 5)$, so $C = \{4, 5\}$.`,
        t`Bracket first: $B \cup C = \{1, 2, 4, 5, 8\}$. Every element of $B$ or $C$, with $4$ written once.`,
        t`Keep the elements of $A$ that are also in $B \cup C$: $2$ and $5$. So $A \cap (B \cup C) = \{2, 5\}$.`,
        t`The bracket matters: $(A \cap B) \cup C$ is $\{2\} \cup \{4, 5\} = \{2, 4, 5\}$, a different set.`,
      ],
      answer: t`$A \cap (B \cup C) = \{2, 5\}$`,
      figure: {
        alt: "A Venn diagram of A = {2, 3, 5, 7}, B = {1, 2, 4, 8} and C = {4, 5}. A only holds 3, 7; A and B only holds 2; B only holds 1, 8; B and C only holds 4; A and C only holds 5. B ∪ C is shaded, then the part of A inside it, holding 2 and 5, is shaded as A ∩ (B ∪ C). A note says (A ∩ B) ∪ C = {2, 4, 5}.",
        axes: "none",
        view: { x: [-0.3, 10.3], y: [-0.3, 7.9] },
        elements: [
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
          { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
          { kind: "circle", centre: [3.9, 4.3], r: 2.2, tone: "muted" },
          { kind: "label", at: [2.34, 5.86], label: "A", labelAt: "nw" },
          { kind: "circle", centre: [6.1, 4.3], r: 2.2, tone: "muted" },
          { kind: "label", at: [7.66, 5.86], label: "B", labelAt: "ne" },
          { kind: "circle", centre: [5, 2.5], r: 2.2, tone: "muted" },
          { kind: "label", at: [7.2, 1.29], label: "C", labelAt: "e" },
          { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
          { kind: "label", at: [2.9, 5], label: "3, 7", labelAt: "n", step: 1 },
          { kind: "label", at: [5, 5.2], label: "2", labelAt: "n", step: 1 },
          { kind: "label", at: [7.1, 5], label: "1, 8", labelAt: "n", step: 1 },
          { kind: "label", at: [6.1, 2.9], label: "4", labelAt: "n", step: 1 },
          { kind: "label", at: [3.9, 2.9], label: "5", labelAt: "n", step: 1 },
          { kind: "label", at: [5, 7.05], label: "(A∩B)∪C = {2, 4, 5}", labelAt: "n", step: 4, tone: "bad" },
        ],
      },
    },
    figure: {
      alt: "A Venn diagram of A = {2, 4, 6, 8} and B = {3, 6, 9}. The overlap holds 6; A only holds 2, 4, 8; B only holds 3, 9. First both circles together are shaded: that is A ∪ B. Then only the overlap is shaded: that is A ∩ B = {6}.",
      axes: "none",
      view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
      elements: [
        { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3 },
        { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3 },
        { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3 },
        { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 5, tone: "good" },
        { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
        { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
        { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
        { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
        { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
        { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
        { kind: "label", at: [2.6, 3.5], label: "2, 4, 8", labelAt: "n", step: 2 },
        { kind: "label", at: [5, 3.5], label: "6", labelAt: "n", step: 2 },
        { kind: "label", at: [7.4, 3.5], label: "3, 9", labelAt: "n", step: 2 },
      ],
    },
    visualSpec: t`Drag elements into or out of two circles; $A \cup B$ and $A \cap B$ update as rosters and as shaded regions, and the overlap empties when the sets become disjoint.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Swapping the symbols: reading $\cup$ as 'common to both' and $\cap$ as 'all the elements together'`,
      remediation: t`$\cup$ (union) collects every element that is in either set; $\cap$ (intersection) keeps only the elements that are in both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Reading 'in $A$ or in $B$' as 'in exactly one of them', so the elements the sets share are left out of $A \cup B$`,
      remediation: t`The 'or' in $A \cup B$ includes both: an element in both sets belongs to $A \cup B$. Write it once, but keep it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Ignoring the brackets and working left to right, e.g. doing $A \cup (B \cap C)$ as $(A \cup B) \cap C$`,
      remediation: t`Work out the bracket first. When $\cup$ and $\cap$ are mixed, moving the brackets changes the set: $A \cup (B \cap C)$ is not $(A \cup B) \cap C$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Listing the roots of a quadratic with the wrong sign, e.g. reading $(x + 6)(x - 2) = 0$ as $x = 6$ or $x = -2$`,
      remediation: t`Each factor is zero at its root: $x + 6 = 0$ gives $x = -6$, and $x - 2 = 0$ gives $x = 2$. Substitute each root back into the equation to check.`,
      fallback: { kind: "ext", topic: "solving quadratic equations by factorising" },
    },
  ],
  engineNotes: [
    t`C03-M2 needs a $\cup$ in the expression asked for, and C03-M3 a mix of $\cup$ and $\cap$ with brackets; a plain $A \cap B$ of rostered sets catches only C03-M1, so no check item asks one.`,
    t`C03-M4 needs a set given by a quadratic. When every set is, its answer is the key with each sign flipped, so it hides when the key is $\emptyset$ or symmetric about $0$ (C03-Q4 gives $R$ in roster form for this reason).`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q3(i)" },
      stem: t`If $A = \{x \mid 6x^2 + x - 15 = 0\}$, $B = \{x \mid 2x^2 - 5x - 3 = 0\}$ and $C = \{x \mid 2x^2 - x - 3 = 0\}$, then $A \cup B \cup C =$`,
      verify: { kind: "value", inputs: { A: "[6, 1, -15]", B: "[2, -5, -3]", C: "[2, -1, -3]" }, params: { expr: "A | B | C" } },
      options: [
        { key: "A", text: t`$\left\{- \frac{5}{3}, -1, - \frac{1}{2}, 3\right\}$`, correct: false, misconceptionId: "C03-M2", value: "{-5/3, -1, -1/2, 3}" },
        { key: "B", text: t`$\left\{-3, - \frac{3}{2}, \frac{1}{2}, 1, \frac{5}{3}\right\}$`, correct: false, misconceptionId: "C03-M4", value: "{-3, -3/2, 1/2, 1, 5/3}" },
        { key: "C", text: t`$\left\{- \frac{5}{3}, -1, - \frac{1}{2}, \frac{3}{2}, 3\right\}$`, correct: true, value: "{-5/3, -1, -1/2, 3/2, 3}" },
        { key: "D", text: t`$\emptyset$`, correct: false, misconceptionId: "C03-M1", value: "EmptySet" },
      ],
      solution: {
        steps: [
          t`Factorise: $6x^2 + x - 15 = (2x - 3)(3x + 5)$, $2x^2 - 5x - 3 = (2x + 1)(x - 3)$, $2x^2 - x - 3 = (2x - 3)(x + 1)$. So $A = \{\frac{3}{2}, -\frac{5}{3}\}$, $B = \{-\frac{1}{2}, 3\}$, $C = \{\frac{3}{2}, -1\}$.`,
          t`The union takes every element in at least one set. $\frac{3}{2}$ is in $A$ and in $C$; write it once.`,
          t`$A \cup B \cup C = \{-\frac{5}{3}, -1, -\frac{1}{2}, \frac{3}{2}, 3\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C. A only holds −5/3; B only holds −1/2 and 3; A and C only holds 3/2; C only holds −1. All three circles together, shaded, hold A ∪ B ∪ C.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
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
            { kind: "label", at: [2.9, 5], label: "−5/3", labelAt: "n", step: 1 },
            { kind: "label", at: [7.1, 5], label: "−1/2, 3", labelAt: "n", step: 1 },
            { kind: "label", at: [3.9, 2.9], label: "3/2", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 1.2], label: "−1", labelAt: "n", step: 1 },
          ],
        },
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.6" },
      stem: t`If $P = \{x \mid x^2 + 14x + 40 = 0\}$, $Q = \{x \mid x^2 - 5x + 6 = 0\}$ and $R = \{x \mid x^2 + 17x - 60 = 0\}$, then $P \cup (Q \cap R) =$`,
      verify: { kind: "value", inputs: { P: "[1, 14, 40]", Q: "[1, -5, 6]", R: "[1, 17, -60]" }, params: { expr: "P | (Q & R)" } },
      options: [
        { key: "A", text: t`$\left\{3\right\}$`, correct: false, misconceptionId: "C03-M3", value: "{3}" },
        { key: "B", text: t`$\left\{-3, 4, 10\right\}$`, correct: false, misconceptionId: "C03-M4", value: "{-3, 4, 10}" },
        { key: "C", text: t`$\left\{-10, -4, 3\right\}$`, correct: true, value: "{-10, -4, 3}" },
        { key: "D", text: t`$\emptyset$`, correct: false, misconceptionId: "C03-M1", value: "EmptySet" },
      ],
      solution: {
        steps: [
          t`Factorise: $(x + 10)(x + 4) = 0$, $(x - 2)(x - 3) = 0$, $(x + 20)(x - 3) = 0$. So $P = \{-10, -4\}$, $Q = \{2, 3\}$, $R = \{-20, 3\}$.`,
          t`Bracket first: $Q \cap R = \{3\}$, the only element in both.`,
          t`$P \cup (Q \cap R) = \{-10, -4\} \cup \{3\} = \{-10, -4, 3\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of P, Q and R. P only holds −10 and −4; Q only holds 2; Q and R only holds 3; R only holds −20. Q ∩ R is shaded, then P with Q ∩ R is shaded as P ∪ (Q ∩ R).",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [2.34, 5.86], label: "P", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.66, 5.86], label: "Q", labelAt: "ne" },
            { kind: "circle", centre: [5, 2.5], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.2, 1.29], label: "R", labelAt: "e" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.9, 5], label: "−10, −4", labelAt: "n", step: 1 },
            { kind: "label", at: [7.1, 5], label: "2", labelAt: "n", step: 1 },
            { kind: "label", at: [6.1, 2.9], label: "3", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 1.2], label: "−20", labelAt: "n", step: 1 },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q5(i)" },
      stem: t`If $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5, 6\}$ and $C = \{4, 5, 6, 7, 8\}$, then $A \cup (B \cap C) =$`,
      verify: { kind: "value", inputs: { A: "{1, 2, 3, 4}", B: "{3, 4, 5, 6}", C: "{4, 5, 6, 7, 8}" }, params: { expr: "A | (B & C)" } },
      options: [
        { key: "A", text: t`$\left\{3, 4\right\}$`, correct: false, misconceptionId: "C03-M1", value: "{3, 4}" },
        { key: "B", text: t`$\left\{1, 2, 3, 5, 6\right\}$`, correct: false, misconceptionId: "C03-M2", value: "{1, 2, 3, 5, 6}" },
        { key: "C", text: t`$\left\{4, 5, 6\right\}$`, correct: false, misconceptionId: "C03-M3", value: "{4, 5, 6}" },
        { key: "D", text: t`$\left\{1, 2, 3, 4, 5, 6\right\}$`, correct: true, value: "{1, 2, 3, 4, 5, 6}" },
      ],
      solution: {
        steps: [
          t`Bracket first: the elements in both $B$ and $C$ are $4$, $5$, $6$. So $B \cap C = \{4, 5, 6\}$.`,
          t`Union with $A$: everything in $A$ or in $B \cap C$, with $4$ written once. $A \cup (B \cap C) = \{1, 2, 3, 4, 5, 6\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C. A only holds 1, 2; A and B only holds 3; all three hold 4; B and C only holds 5, 6; C only holds 7, 8. B ∩ C is shaded, then A with B ∩ C is shaded as A ∪ (B ∩ C).",
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
            { kind: "label", at: [2.9, 5], label: "1, 2", labelAt: "n" },
            { kind: "label", at: [5, 5.2], label: "3", labelAt: "n" },
            { kind: "label", at: [5, 3.8], label: "4", labelAt: "n" },
            { kind: "label", at: [6.1, 2.9], label: "5, 6", labelAt: "n" },
            { kind: "label", at: [5, 1.2], label: "7, 8", labelAt: "n" },
          ],
        },
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.6" },
      stem: t`If $P = \{x \mid x^2 + 9x + 20 = 0\}$, $Q = \{x \mid x^2 - 3x + 2 = 0\}$ and $R = \{-3, 2, 4, 5\}$, then $P \cap (Q \cup R) =$`,
      verify: { kind: "value", inputs: { P: "[1, 9, 20]", Q: "[1, -3, 2]", R: "{-3, 2, 4, 5}" }, params: { expr: "P & (Q | R)" } },
      options: [
        { key: "A", text: t`$\left\{-3, 2, 4, 5\right\}$`, correct: false, misconceptionId: "C03-M3", value: "{-3, 2, 4, 5}" },
        { key: "B", text: t`$\left\{4, 5\right\}$`, correct: false, misconceptionId: "C03-M4", value: "{4, 5}" },
        { key: "C", text: t`$\emptyset$`, correct: true, value: "EmptySet" },
        { key: "D", text: t`$\left\{-5, -4, 2\right\}$`, correct: false, misconceptionId: "C03-M1", value: "{-5, -4, 2}" },
      ],
      solution: {
        steps: [
          t`Factorise: $x^2 + 9x + 20 = (x + 5)(x + 4)$ and $x^2 - 3x + 2 = (x - 1)(x - 2)$. So $P = \{-5, -4\}$ and $Q = \{1, 2\}$.`,
          t`Bracket first: $Q \cup R = \{-3, 1, 2, 4, 5\}$.`,
          t`Neither $-5$ nor $-4$ is in $Q \cup R$. So $P \cap (Q \cup R) = \emptyset$: $P$ and $Q \cup R$ are disjoint.`,
        ],
        figure: {
          alt: "A Venn diagram of P, Q and R. P only holds −5, −4; Q only holds 1; Q and R only holds 2; R only holds −3, 4, 5. Q ∪ R is shaded and does not reach P's elements, so P ∩ (Q ∪ R) = ∅.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "outsideDisc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 4.3], r: 2.2 }, { kind: "disc", centre: [6.1, 4.3], r: 2.2 }, { kind: "disc", centre: [5, 2.5], r: 2.2 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [2.34, 5.86], label: "P", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 4.3], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.66, 5.86], label: "Q", labelAt: "ne" },
            { kind: "circle", centre: [5, 2.5], r: 2.2, tone: "muted" },
            { kind: "label", at: [7.2, 1.29], label: "R", labelAt: "e" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.9, 5], label: "−5, −4", labelAt: "n", step: 1 },
            { kind: "label", at: [7.1, 5], label: "1", labelAt: "n", step: 1 },
            { kind: "label", at: [6.1, 2.9], label: "2", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 1.2], label: "−3, 4, 5", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 6.75], label: "P ∩ (Q ∪ R) = ∅", labelAt: "n", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.6" },
      stem: t`If $A = \{x \mid x^2 - x - 12 = 0\}$ and $B = \{x \mid x^2 + 2x - 3 = 0\}$, then $A \cup B =$`,
      verify: { kind: "value", inputs: { A: "[1, -1, -12]", B: "[1, 2, -3]" }, params: { expr: "A | B" } },
      options: [
        { key: "A", text: t`$\left\{-3, 1, 4\right\}$`, correct: true, value: "{-3, 1, 4}" },
        { key: "B", text: t`$\left\{-3\right\}$`, correct: false, misconceptionId: "C03-M1", value: "{-3}" },
        { key: "C", text: t`$\left\{1, 4\right\}$`, correct: false, misconceptionId: "C03-M2", value: "{1, 4}" },
        { key: "D", text: t`$\left\{-4, -1, 3\right\}$`, correct: false, misconceptionId: "C03-M4", value: "{-4, -1, 3}" },
      ],
      solution: {
        steps: [
          t`Factorise: $x^2 - x - 12 = (x - 4)(x + 3)$ and $x^2 + 2x - 3 = (x + 3)(x - 1)$. So $A = \{-3, 4\}$ and $B = \{-3, 1\}$.`,
          t`Union: every element in $A$ or in $B$. $-3$ is in both; write it once. $A \cup B = \{-3, 1, 4\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B. The overlap holds −3, A only holds 4 and B only holds 1. Both circles together, shaded, hold A ∪ B.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 2, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [2.6, 3.5], label: "4", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 3.5], label: "−3", labelAt: "n", step: 1 },
            { kind: "label", at: [7.4, 3.5], label: "1", labelAt: "n", step: 1 },
          ],
        },
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q2(vi)" },
      stem: t`If $A = \{1, 4, 7, 10\}$, $B = \{2, 4, 6, 7, 11\}$ and $C = \{3, 5, 7, 8, 9, 12\}$, then $A \cap (B \cup C) =$`,
      verify: { kind: "value", inputs: { A: "{1, 4, 7, 10}", B: "{2, 4, 6, 7, 11}", C: "{3, 5, 7, 8, 9, 12}" }, params: { expr: "A & (B | C)" } },
      options: [
        { key: "A", text: t`$\left\{4, 7\right\}$`, correct: true, value: "{4, 7}" },
        { key: "B", text: t`$\left\{1, 4, 7, 10\right\}$`, correct: false, misconceptionId: "C03-M1", value: "{1, 4, 7, 10}" },
        { key: "C", text: t`$\left\{4\right\}$`, correct: false, misconceptionId: "C03-M2", value: "{4}" },
        { key: "D", text: t`$\left\{3, 4, 5, 7, 8, 9, 12\right\}$`, correct: false, misconceptionId: "C03-M3", value: "{3, 4, 5, 7, 8, 9, 12}" },
      ],
      solution: {
        steps: [
          t`Bracket first: $B \cup C = \{2, 3, 4, 5, 6, 7, 8, 9, 11, 12\}$, with $7$ (in both) written once.`,
          t`Keep the elements of $A = \{1, 4, 7, 10\}$ that are in $B \cup C$: $4$ and $7$. So $A \cap (B \cup C) = \{4, 7\}$.`,
        ],
        figure: {
          alt: "A Venn diagram of A, B and C. A only holds 1, 10; A and B only holds 4; all three hold 7; B only holds 2, 6, 11; C only holds 3, 5, 8, 9, 12. B ∪ C is shaded, then the part of A inside it, holding 4 and 7, is shaded as A ∩ (B ∪ C).",
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
            { kind: "label", at: [2.9, 5], label: "1, 10", labelAt: "n" },
            { kind: "label", at: [5, 5.2], label: "4", labelAt: "n" },
            { kind: "label", at: [5, 3.8], label: "7", labelAt: "n" },
            { kind: "label", at: [7.1, 5], label: "2, 6, 11", labelAt: "n" },
            { kind: "label", at: [5, 1.2], label: "3, 5, 8, 9, 12", labelAt: "n" },
          ],
        },
      },
    },
  ],
};
