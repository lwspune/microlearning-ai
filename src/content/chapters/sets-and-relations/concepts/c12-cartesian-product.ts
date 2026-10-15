import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/**
 * The pairs of X × Y as points of the xy-plane: first entry across, second entry up. Labelled pairs
 * put the top row's labels above-right and the others below-right, clear of the guides.
 */
function gridOf(xs: number[], ys: number[], o: { step?: number; tone?: FigureElement["tone"]; labelled?: boolean } = {}): FigureElement[] {
  const top = Math.max(...ys);
  return xs.flatMap((x) =>
    ys.map((y): FigureElement => {
      const at: Pt = [x, y];
      return {
        kind: "point",
        at,
        ...(o.labelled ? { label: `(${x}, ${y})`, labelAt: y === top ? "ne" : "se" } : {}),
        ...(o.tone ? { tone: o.tone } : {}),
        ...(o.step === undefined ? {} : { step: o.step }),
      };
    }),
  );
}

/** Dashed columns up from each x and rows across from each y, showing the points form a grid. */
function guides(xs: number[], ys: number[], step: number): FigureElement[] {
  const [right, top] = [Math.max(...xs), Math.max(...ys)];
  return [
    ...xs.map((x): FigureElement => ({ kind: "segment", from: [x, 0], to: [x, top], dashed: true, tone: "muted", step })),
    ...ys.map((y): FigureElement => ({ kind: "segment", from: [0, y], to: [right, y], dashed: true, tone: "muted", step })),
  ];
}

/** A × B (faint) and B × A for A = {1, 3, 5}, B = {2, 3}; B × A appears at `bStep` when given. */
function bothGrids(bStep?: number): FigureElement[] {
  const at = bStep === undefined ? {} : { step: bStep };
  return [
    ...gridOf([1, 3, 5], [2, 3], { tone: "muted" }),
    { kind: "label", at: [5, 2.5], label: "A × B", labelAt: "e", tone: "muted" },
    ...gridOf([2, 3], [1, 3, 5], at),
    { kind: "label", at: [2.5, 5], label: "B × A", labelAt: "n", ...at },
  ];
}

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`$(x + 1, y - 2) = (3, 1)$. Riya says $x = 2$, $y = 3$. Sameer matches the entries crosswise, $x + 1 = 1$ and $y - 2 = 3$, and gets $x = 0$, $y = 5$. **Can both be right?**`,
    reveal: t`No. Sameer's values make the left side $(1, 3)$, and $(1, 3) \ne (3, 1)$. In an ordered pair the first entry must match the first and the second must match the second, so only $x = 2$, $y = 3$ works.`,
  },
  explanation: {
    intuition: [
      t`An **ordered pair** $(a, b)$ lists two **entries** in a fixed order: $a$ first, then $b$.`,
      t`Think of a cinema seat written as (row, seat): $(2, 5)$ and $(5, 2)$ are different seats.`,
      t`So two ordered pairs are equal only when their first entries match and their second entries match.`,
      t`The **Cartesian product** $A \times B$ is the set of every pair with first entry from $A$ and second entry from $B$.`,
      t`Each of the $n(A)$ elements of $A$ goes with each of the $n(B)$ elements of $B$.`,
      t`So $A \times B$ has $n(A) \times n(B)$ pairs.`,
    ],
    formal: [
      {
        title: "Equal ordered pairs",
        points: [
          t`In the ordered pair $(a, b)$, $a$ is the **first entry** and $b$ is the **second entry**.`,
          t`$(a, b) = (c, d)$ exactly when $a = c$ and $b = d$.`,
          t`So $(2, 3) \ne (3, 2)$, though the sets $\{2, 3\}$ and $\{3, 2\}$ are equal.`,
          t`An entry may repeat: $(3, 3)$ is an ordered pair.`,
        ],
        figure: {
          alt: "The xy-plane with each ordered pair drawn as a point: first entry across, second entry up. (2, 3) and (3, 2) are two different points. Then (3, 3), a pair with a repeated entry, appears as a point of its own.",
          axes: "xy",
          view: { x: [-0.8, 4.6], y: [-0.8, 4.4] },
          elements: [
            { kind: "point", at: [2, 3], label: "(2, 3)", labelAt: "nw", step: 3 },
            { kind: "point", at: [3, 2], label: "(3, 2)", labelAt: "se", step: 3 },
            { kind: "point", at: [3, 3], label: "(3, 3)", labelAt: "ne", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "The Cartesian product",
        points: [
          t`$A \times B = \{(a, b) : a \in A,\ b \in B\}$: every pair with $a$ from $A$ and $b$ from $B$.`,
          t`It is read "$A$ cross $B$".`,
          t`Take $A = \{1, 3, 5\}$ and $B = \{2, 3\}$, and draw each pair as a point: first entry across, second entry up.`,
          t`$A \times B = \{(1, 2), (1, 3), (3, 2),$ $(3, 3), (5, 2), (5, 3)\}$.`,
          t`The points form a grid: a column for each element of $A$, a row for each element of $B$.`,
        ],
        figure: {
          alt: "A × B for A = {1, 3, 5} and B = {2, 3}, drawn on the xy-plane: the six points (1, 2), (1, 3), (3, 2), (3, 3), (5, 2) and (5, 3). Dashed lines show they form a grid of three columns, at x = 1, 3 and 5, and two rows, at y = 2 and 3.",
          axes: "xy",
          view: { x: [-0.8, 6.6], y: [-0.8, 4.4] },
          elements: [
            ...gridOf([1, 3, 5], [2, 3], { step: 4, labelled: true }),
            ...guides([1, 3, 5], [2, 3], 5),
          ],
        },
      },
      {
        title: "Order of the sets matters",
        points: [
          t`$B \times A$ takes its first entries from $B$ and its second entries from $A$.`,
          t`$B \times A = \{(2, 1), (2, 3), (2, 5),$ $(3, 1), (3, 3), (3, 5)\}$.`,
          t`So $A \times B \ne B \times A$: $(1, 2)$ is in $A \times B$ but not in $B \times A$.`,
          t`They are equal only when $A = B$ or one of the sets is empty.`,
        ],
        figure: {
          alt: "A × B for A = {1, 3, 5} and B = {2, 3} drawn faintly as a grid of six points, three columns and two rows. Then B × A appears: six points in two columns, at x = 2 and 3, and three rows, at y = 1, 3 and 5. They are different sets of points: (1, 2) is marked as a point of A × B that is not in B × A.",
          axes: "xy",
          view: { x: [-0.8, 6.6], y: [-0.8, 6.4] },
          elements: [
            ...bothGrids(2),
            { kind: "point", at: [1, 2], label: "(1, 2)", labelAt: "sw", tone: "bad", step: 3 },
          ],
        },
      },
      {
        title: "Pairs in both products",
        points: [
          t`A pair $(a, b)$ is in $A \times B$ when $a \in A$ and $b \in B$.`,
          t`It is also in $B \times A$ when $a \in B$ and $b \in A$.`,
          t`Both hold exactly when $a$ and $b$ are each in $A \cap B$, the elements common to $A$ and $B$.`,
          t`So $(A \times B) \cap (B \times A)$ equals $(A \cap B) \times (A \cap B)$.`,
          t`Above, $A \cap B = \{3\}$, so the only pair in both is $(3, 3)$.`,
        ],
        figure: {
          alt: "A × B for A = {1, 3, 5} and B = {2, 3}, faint, and B × A, in colour, drawn on the same xy-plane. The only point the two share is (3, 3), which is highlighted: A ∩ B = {3}.",
          axes: "xy",
          view: { x: [-0.8, 6.6], y: [-0.8, 6.4] },
          elements: [
            ...bothGrids(),
            { kind: "point", at: [3, 3], label: "(3, 3) in both", labelAt: "ne", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Counting the pairs",
        points: [
          t`Recall: $n(A)$ is the number of elements of $A$.`,
          t`Each element of $A$ pairs with each element of $B$, so $n(A \times B) = n(A) \times n(B)$.`,
          t`Above, $n(A) = 3$ and $n(B) = 2$, so $A \times B$ has $3 \times 2 = 6$ pairs.`,
          t`Pairing $A$ with itself gives $n(A \times A) = n(A)^2$.`,
          t`The pairs in both $A \times B$ and $B \times A$ number $n(A \cap B)^2$.`,
          t`Two common elements $c, d$ give four: $(c, c), (c, d), (d, c), (d, d)$.`,
        ],
      },
      {
        title: "Finding the missing pairs",
        points: [
          t`Sometimes you know $n(A \times B)$ and only some of its pairs.`,
          t`The first entries of the known pairs are elements of $A$; the second entries are elements of $B$.`,
          t`If these already give $n(A) \times n(B) = n(A \times B)$, then $A$ and $B$ have no other elements.`,
          t`Then list all of $A \times B$ and remove the known pairs.`,
        ],
      },
    ],
    worked: {
      prompt: t`$A \times B$ has $6$ elements, and three of them are $(1, 3)$, $(2, 5)$ and $(3, 3)$. Find the other three.`,
      steps: [
        t`The first entries $1, 2, 3$ are in $A$; the second entries $3, 5$ are in $B$.`,
        t`So $n(A) \ge 3$ and $n(B) \ge 2$, giving $n(A \times B) \ge 3 \times 2 = 6$. As $n(A \times B) = 6$, $A = \{1, 2, 3\}$ and $B = \{3, 5\}$ exactly.`,
        t`$A \times B = \{(1, 3), (1, 5), (2, 3),$ $(2, 5), (3, 3), (3, 5)\}$.`,
        t`Remove the three given pairs: $(1, 5)$, $(2, 3)$ and $(3, 5)$ are left.`,
      ],
      answer: t`The other three elements are $(1, 5)$, $(2, 3)$ and $(3, 5)$.`,
    },
    visualSpec: t`Drag elements into $A$ and $B$; a grid with $A$ down the side and $B$ along the top fills with the pairs of $A \times B$, the flipped grid shows $B \times A$, and the cells they share light up as the square $(A \cap B) \times (A \cap B)$.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: t`Treats $(a, b)$ and $(b, a)$ as the same pair, as $\{a, b\} = \{b, a\}$ in a set, so keeps only one of them`,
      remediation: t`In an ordered pair the order matters: $(2, 3) \ne (3, 2)$. When $a \ne b$, $(a, b)$ and $(b, a)$ are two different elements, and both are counted.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C12-M2",
      mistake: t`Adds the sizes instead of multiplying: $n(A \times B) = n(A) + n(B)$, and $n(A \cap B) + n(A \cap B)$ pairs common to $A \times B$ and $B \times A$`,
      remediation: t`Each of the $n(A)$ first entries pairs with each of the $n(B)$ second entries, so you multiply: $n(A \times B) = n(A) \times n(B)$. The same goes for the common pairs: they are $(A \cap B) \times (A \cap B)$, so there are $n(A \cap B) \times n(A \cap B)$ of them, not $n(A \cap B) + n(A \cap B)$.`,
      fallback: { kind: "ext", topic: "the multiplication principle of counting" },
    },
    {
      id: "C12-M3",
      mistake: t`Leaves out pairs with equal entries, like $(3, 3)$, carrying the set rule 'each element once' into pairs`,
      remediation: t`A pair may repeat an entry: $(3, 3)$ is in $A \times B$ whenever $3 \in A$ and $3 \in B$. 'Each element once' is a rule for the elements of a set, not the entries of a pair.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C12-M4",
      mistake: t`Thinks only the pairs with equal entries, $(c, c)$, lie in both $A \times B$ and $B \times A$`,
      remediation: t`$(a, b)$ is in both when $a$ and $b$ are each in $A \cap B$; they need not be equal. So $(A \times B) \cap (B \times A) = (A \cap B) \times (A \cap B)$, with $n(A \cap B)^2$ elements.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C12-M1 gives the key unless the answer set holds some $(a, b)$ and $(b, a)$ with $a \ne b$, that is unless $n(A \cap B) \ge 2$. C12-M3 gives the key when $A \cap B = \varnothing$; C12-M4 when $n(A \cap B) \le 1$. Draw items with at least two common elements.`,
    t`C12-M2 on a count item gives the key when $n(A) + n(B) = n(A) \times n(B)$ (both $2$), and on a common-pairs item when $n(A \cap B) = 2$; avoid those sizes.`,
    "Equality of ordered pairs is taught in the hook and the formal slide but has no item: only C12-M1 (matching crosswise) and an unmodelled sign slip fit it, too few for four options.",
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.2.2 SolvedEx.1" },
      stem: t`Let $A = \{1, 3, 4\}$ and $B = \{2, 3, 4\}$. How many elements does $A \times B$ have?`,
      verify: { kind: "value", inputs: { A: "{1, 3, 4}", B: "{2, 3, 4}" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C12-M1", value: "8" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C12-M2", value: "6" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C12-M3", value: "7" },
        { key: "D", text: t`$9$`, correct: true, value: "9" },
      ],
      solution: {
        steps: [
          t`Each of the $3$ elements of $A$ pairs with each of the $3$ elements of $B$: $3 \times 3 = 9$ pairs.`,
          t`They are $(1, 2), (1, 3), (1, 4), (3, 2), (3, 3), (3, 4), (4, 2), (4, 3), (4, 4)$.`,
          t`$(3, 4)$ and $(4, 3)$ are different pairs, and $(3, 3)$, $(4, 4)$ count too. So $n(A \times B) = 9$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.2 Q3" },
      stem: t`If $A = \{-2, -1, 0, 1, 2\}$, how many elements does $A \times A$ have?`,
      verify: { kind: "value", inputs: { A: "{-2, -1, 0, 1, 2}" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C12-M3", value: "20" },
        { key: "B", text: t`$25$`, correct: true, value: "25" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C12-M1", value: "15" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C12-M2", value: "10" },
      ],
      solution: {
        steps: [
          t`$n(A) = 5$, so $n(A \times A) = 5 \times 5 = 25$.`,
          t`This includes the $5$ pairs with equal entries, $(-2, -2)$ to $(2, 2)$, and both $(-1, 2)$ and $(2, -1)$, which are different pairs.`,
          t`So $A \times A$ has $25$ elements.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q5" },
      stem: t`Two sets $A$ and $B$ have $43$ elements in common. How many elements are common to both $A \times B$ and $B \times A$?`,
      verify: { kind: "value", inputs: { k: "43" }, params: { ask: "common" } },
      options: [
        { key: "A", text: t`$43$`, correct: false, misconceptionId: "C12-M4", value: "43" },
        { key: "B", text: t`$1849$`, correct: true, value: "1849" },
        { key: "C", text: t`$86$`, correct: false, misconceptionId: "C12-M2", value: "86" },
        { key: "D", text: t`$1806$`, correct: false, misconceptionId: "C12-M3", value: "1806" },
      ],
      solution: {
        steps: [
          t`$(a, b) \in A \times B$ needs $a \in A$, $b \in B$; $(a, b) \in B \times A$ needs $a \in B$, $b \in A$. Both hold exactly when $a, b \in A \cap B$.`,
          t`So $(A \times B) \cap (B \times A) = (A \cap B) \times (A \cap B)$.`,
          t`It has $43 \times 43 = 43^2 = 1849$ elements: the $43$ pairs $(c, c)$ and also pairs $(c, d)$ with $c \ne d$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc II Q5(i)" },
      stem: t`If $A = \{1, 2, 3\}$ and $B = \{2, 3, 4\}$, then $(A \times B) \cap (B \times A)$ is:`,
      verify: { kind: "value", inputs: { A: "{1, 2, 3}", B: "{2, 3, 4}" }, params: { ask: "common_list" } },
      options: [
        { key: "A", text: t`$\{(2, 2), (3, 3)\}$`, correct: false, misconceptionId: "C12-M4", value: "{(2, 2), (3, 3)}" },
        { key: "B", text: t`$\{(2, 2), (2, 3), (3, 2), (3, 3)\}$`, correct: true, value: "{(2, 2), (2, 3), (3, 2), (3, 3)}" },
        { key: "C", text: t`$\{(2, 2), (2, 3), (3, 3)\}$`, correct: false, misconceptionId: "C12-M1", value: "{(2, 2), (2, 3), (3, 3)}" },
        { key: "D", text: t`$\{(2, 3), (3, 2)\}$`, correct: false, misconceptionId: "C12-M3", value: "{(2, 3), (3, 2)}" },
      ],
      solution: {
        steps: [
          t`A pair is in both $A \times B$ and $B \times A$ when both its entries are in $A \cap B = \{2, 3\}$.`,
          t`So the answer is $\{2, 3\} \times \{2, 3\}$: every pair with entries from $\{2, 3\}$.`,
          t`$(A \times B) \cap (B \times A) = \{(2, 2), (2, 3), (3, 2), (3, 3)\}$. Check $(3, 2)$: $3 \in A$, $2 \in B$, and $3 \in B$, $2 \in A$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Misc I Q5" },
      stem: t`Let $A = \{1, 2, 3, 4, 5\}$ and $B = \{2, 3, 4, 5, 6\}$. How many ordered pairs belong to both $A \times B$ and $B \times A$?`,
      verify: { kind: "value", inputs: { A: "{1, 2, 3, 4, 5}", B: "{2, 3, 4, 5, 6}" }, params: { ask: "common" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C12-M2", value: "8" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C12-M4", value: "4" },
        { key: "C", text: t`$16$`, correct: true, value: "16" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C12-M1", value: "10" },
      ],
      solution: {
        steps: [
          t`$A \cap B = \{2, 3, 4, 5\}$, so $n(A \cap B) = 4$.`,
          t`The pairs in both are $(A \cap B) \times (A \cap B)$: both entries from $\{2, 3, 4, 5\}$, equal or not.`,
          t`Their number is $4^2 = 16$.`,
        ],
      },
    },
  ],
};
