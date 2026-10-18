import type { Concept, Figure, FigureElement, Pt, Shape } from "../../../types.ts";

const t = String.raw;

/** The two-set Venn diagram of verify/figures.py `venn()`: S is the rectangle [0, 10] × [0, 7]. */
const view: Figure["view"] = { x: [-0.3, 10.3], y: [-0.3, 7.3] };
const cA: Pt = [3.9, 3.5];
const cB: Pt = [6.1, 3.5];
const r = 2.4;
const frame: Shape[] = [
  { kind: "halfPlane", through: [[0, 0], [10, 0]] },
  { kind: "halfPlane", through: [[10, 0], [10, 7]] },
  { kind: "halfPlane", through: [[10, 7], [0, 7]] },
  { kind: "halfPlane", through: [[0, 7], [0, 0]] },
];

/** Where each cell's label sits, and the caption above the circles. */
const at = { onlyA: [2.6, 3.5] as Pt, both: [5, 3.5] as Pt, onlyB: [7.4, 3.5] as Pt, neither: [0.9, 0.8] as Pt, note: [5, 6.05] as Pt };

type Cell = "onlyA" | "both" | "onlyB" | "neither";

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

/** The rectangle S, the two circles and their names; always shown. */
const venn: FigureElement[] = [
  { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
  { kind: "circle", centre: cA, r, tone: "muted" },
  { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
  { kind: "circle", centre: cB, r, tone: "muted" },
  { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
  { kind: "label", at: [9.5, 6.4], label: "S", labelAt: "n" },
];

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`The chance of rain tomorrow is $0.7$ and the chance of a strong wind is $0.5$. **So is the chance of rain or wind $0.7 + 0.5 = 1.2$?**`,
    reveal: t`No: a probability can never be more than $1$. The days with rain **and** wind were counted twice, once in each number. If the chance of both is $0.4$, take it away once: $P(\text{rain or wind})$ $= 0.7 + 0.5 - 0.4 = 0.8$.`,
  },
  explanation: {
    intuition: [
      t`Recall: events are sets of outcomes, so draw $A$ and $B$ as two circles inside the sample space $S$.`,
      t`$P(A)$ covers all of circle $A$, including the **overlap**, the part inside both circles.`,
      t`$P(B)$ covers all of circle $B$, so it covers the overlap too.`,
      t`So $P(A) + P(B)$ counts the overlap, $A \cap B$, twice.`,
      t`Subtract $P(A \cap B)$ once, and you have $P(A \cup B)$, the chance of $A$ or $B$.`,
      t`When the circles don't overlap, the events are mutually exclusive: there is nothing to subtract, so just add.`,
    ],
    figure: {
      alt: "A Venn diagram of events A and B inside the sample space S. Circle A is shaded, then circle B, so the overlap is shaded twice and is marked 'twice'. Last, the caption P(A ∪ B) = P(A) + P(B) − P(A ∩ B) appears above the circles.",
      axes: "none",
      view,
      elements: [
        cell("onlyA", { step: 2 }),
        cell("both", { step: 2 }),
        cell("onlyB", { step: 3 }),
        cell("both", { step: 3 }),
        ...venn,
        { kind: "label", at: at.both, label: "twice", labelAt: "n", tone: "bad", step: 4 },
        { kind: "label", at: at.note, label: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", labelAt: "n", tone: "good", step: 5 },
      ],
    },
    formal: [
      {
        title: "The addition theorem",
        points: [
          t`The **addition theorem** gives $P(A \cup B)$ for any two events $A$ and $B$ of a sample space $S$.`,
          t`$P(A \cup B)$ equals $P(A) + P(B) - P(A \cap B)$.`,
        ],
      },
      {
        title: "Mutually exclusive events",
        points: [
          t`Recall: $A$ and $B$ are **mutually exclusive** when they have no common outcome, $A \cap B = \phi$.`,
          t`Then $P(A \cap B) = 0$.`,
          t`So $P(A \cup B) = P(A) + P(B)$.`,
          t`This is the only case where you just add.`,
        ],
      },
      {
        title: "Words into events",
        points: [
          t`"$A$ or $B$" and "at least one" both mean $A \cup B$.`,
          t`"Both" means $A \cap B$, the overlap.`,
          t`"Exactly one" means one happens but not the other: $A \cup B$ with the overlap left out.`,
          t`So $P(\text{exactly one})$ equals $P(A) + P(B) - 2P(A \cap B)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside S. Both circles are shaded, captioned 'A ∪ B: at least one'. The overlap is marked 'both'. Then the two parts outside the overlap are shaded again and marked 'only A' and 'only B': exactly one.",
          axes: "none",
          view,
          elements: [
            cell("onlyA", { step: 1 }),
            cell("both", { step: 1 }),
            cell("onlyB", { step: 1 }),
            cell("onlyA", { step: 3, tone: "good" }),
            cell("onlyB", { step: 3, tone: "good" }),
            ...venn,
            { kind: "label", at: at.note, label: "A ∪ B: at least one", labelAt: "n", step: 1 },
            { kind: "label", at: at.both, label: "both", labelAt: "n", step: 2 },
            { kind: "label", at: at.onlyA, label: "only A", labelAt: "n", step: 3 },
            { kind: "label", at: at.onlyB, label: "only B", labelAt: "n", step: 3 },
          ],
        },
      },
      {
        title: "Neither: outside both circles",
        points: [
          t`Recall: $A'$, the **complement** of $A$, is the event that $A$ does not happen.`,
          t`**Neither** means $A$ does not happen and $B$ does not happen: $A' \cap B'$.`,
          t`By De Morgan's law, $A' \cap B' = (A \cup B)'$, the part outside both circles.`,
          t`So $P(A' \cap B') = 1 - P(A \cup B)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside S. The region outside both circles is shaded and marked 'neither', captioned A′ ∩ B′ = (A ∪ B)′.",
          axes: "none",
          view,
          elements: [
            cell("neither", { step: 3, tone: "good" }),
            ...venn,
            { kind: "label", at: at.neither, label: "neither", labelAt: "n", step: 3 },
            { kind: "label", at: at.note, label: "A′ ∩ B′ = (A ∪ B)′", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Not both: all but the overlap",
        points: [
          t`**Not both** means $A$ and $B$ do not both happen: $A' \cup B'$.`,
          t`By De Morgan's law, $A' \cup B' = (A \cap B)'$, everything outside the overlap.`,
          t`So $P(A' \cup B') = 1 - P(A \cap B)$.`,
          t`Don't swap them: neither uses $P(A \cup B)$, and not both uses $P(A \cap B)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside S. Everything except the overlap is shaded, captioned A′ ∪ B′ = (A ∩ B)′: not both.",
          axes: "none",
          view,
          elements: [
            cell("onlyA", { step: 2, tone: "good" }),
            cell("onlyB", { step: 2, tone: "good" }),
            cell("neither", { step: 2, tone: "good" }),
            ...venn,
            { kind: "label", at: at.note, label: "A′ ∪ B′ = (A ∩ B)′", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Use it backwards",
        points: [
          t`The theorem links four numbers: $P(A)$, $P(B)$, $P(A \cap B)$ and $P(A \cup B)$.`,
          t`Any three of them give the fourth.`,
          t`For example, $P(A \cap B)$ equals $P(A) + P(B) - P(A \cup B)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The probability that a student passes in French is $0.64$, in Sociology is $0.45$, and in both is $0.40$. Find the probability that the student passes in at least one, in exactly one, and in neither of the two subjects.`,
      steps: [
        t`Let $F$: passes in French, $S$: passes in Sociology. Then $P(F) = 0.64$, $P(S) = 0.45$, $P(F \cap S) = 0.40$.`,
        t`At least one: $P(F \cup S)$ $= P(F) + P(S) - P(F \cap S)$ $= 0.64 + 0.45 - 0.40 = 0.69$.`,
        t`Exactly one: take the overlap out of the union too. $P(F \cup S) - P(F \cap S)$ $= 0.69 - 0.40 = 0.29$.`,
        t`Neither: $P(F' \cap S') = 1 - P(F \cup S)$ $= 1 - 0.69 = 0.31$.`,
      ],
      answer: t`At least one: $0.69$; exactly one: $0.29$; neither: $0.31$.`,
    },
    visualSpec: t`Two overlapping circles $A$ and $B$ inside $S$: drag them apart or together, and bars for $P(A)$, $P(B)$, $P(A \cap B)$ and $P(A \cup B)$ update, showing the overlap counted twice until it is subtracted once.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Adding P(A) and P(B) without subtracting the overlap, as if the events were always mutually exclusive",
      remediation: t`$P(A) + P(B)$ counts the outcomes in $A \cap B$ twice. Use $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; you just add only when $A$ and $B$ are mutually exclusive.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: "Mixing up 'neither' and 'not both': taking P(A' ∩ B') = 1 − P(A ∩ B), or P(A' ∪ B') = 1 − P(A ∪ B)",
      remediation: t`By De Morgan's laws, $A' \cap B' = (A \cup B)'$, so $P(\text{neither}) = 1 - P(A \cup B)$. It is $A' \cup B' = (A \cap B)'$, 'not both', that equals $1 - P(A \cap B)$.`,
      fallback: { kind: "ext", topic: "De Morgan's laws" },
    },
    {
      id: "C05-M3",
      mistake: "Treating 'A or B' (at least one) and 'exactly one' as the same event",
      remediation: t`'$A$ or $B$' includes the outcomes in both: $P(\text{at least one}) = P(A) + P(B) - P(A \cap B)$. 'Exactly one' leaves the overlap out: $P(A) + P(B) - 2P(A \cap B)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: "Multiplying for 'and': taking P(A ∩ B) = P(A) P(B), or P(A' ∩ B') = P(A') P(B')",
      remediation: t`$P(A \cap B) = P(A)\,P(B)$ holds only for independent events, which the question doesn't say. Get $P(A \cap B)$ from the addition theorem: $P(A \cap B) = P(A) + P(B) - P(A \cup B)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Using the given P(B') as if it were P(B)",
      remediation: t`When the question gives $P(B')$, first find $P(B) = 1 - P(B')$, then put $P(B)$ into the addition theorem.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M6",
      mistake: "Adding the overlap instead of subtracting it: P(A ∪ B) = P(A) + P(B) + P(A ∩ B)",
      remediation: t`The overlap is already counted twice in $P(A) + P(B)$, so it is subtracted once: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M1 and C05-M3 give the key when $A$ and $B$ are mutually exclusive ($P(A \cap B) = 0$): draw diagnosing items from overlapping events.`,
    t`C05-M4 gives the key when $A$ and $B$ happen to be independent (e.g. black card and face card): avoid such pairs where C05-M4 is tagged.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc I Q4" },
      stem: t`In a set of $30$ shirts, $17$ are white and the rest are black. $4$ white and $5$ black shirts are tagged 'PARTY WEAR'. A shirt is chosen at random. The probability that it is a black shirt or a 'PARTY WEAR' shirt is:`,
      verify: { kind: "value", inputs: { n: "30", white: "17", wp: "4", bp: "5" }, params: { data: "shirts", ask: "union" } },
      options: [
        { key: "A", text: t`$\frac{9}{10}$`, correct: false, misconceptionId: "C05-M6", value: "9/10" },
        { key: "B", text: t`$\frac{17}{30}$`, correct: true, value: "17/30" },
        { key: "C", text: t`$\frac{11}{15}$`, correct: false, misconceptionId: "C05-M1", value: "11/15" },
        { key: "D", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C05-M3", value: "2/5" },
      ],
      solution: {
        steps: [
          t`Let $A$: the shirt is black, $B$: it is 'PARTY WEAR'. $n(S) = 30$, $n(A) = 30 - 17 = 13$, $n(B) = 4 + 5 = 9$.`,
          t`$A \cap B$ is the black 'PARTY WEAR' shirts: $n(A \cap B) = 5$.`,
          t`$P(A \cup B) = \frac{13}{30} + \frac{9}{30} - \frac{5}{30} = \frac{17}{30}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q3(iii)" },
      stem: t`A girl's chance of cracking the National Level exam is $0.42$ and of cracking the State Level exam is $0.54$. The probability that she cracks both is $0.11$. The probability that she cracks neither exam is:`,
      verify: { kind: "value", inputs: { pa: "21/50", pb: "27/50", pab: "11/100" }, params: { ask: "neither" } },
      options: [
        { key: "A", text: t`$0.04$`, correct: false, misconceptionId: "C05-M1", value: "1/25" },
        { key: "B", text: t`$0.89$`, correct: false, misconceptionId: "C05-M2", value: "89/100" },
        { key: "C", text: t`$0.26$`, correct: false, misconceptionId: "C05-M3", value: "13/50" },
        { key: "D", text: t`$0.15$`, correct: true, value: "3/20" },
      ],
      solution: {
        steps: [
          t`Let $N$: she cracks the National exam, $T$: she cracks the State exam. $P(N) = 0.42$, $P(T) = 0.54$, $P(N \cap T) = 0.11$.`,
          t`At least one: $P(N \cup T) = 0.42 + 0.54 - 0.11 = 0.85$.`,
          t`Neither: $P(N' \cap T') = 1 - P(N \cup T) = 1 - 0.85 = 0.15$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q7(b)" },
      stem: t`For two events $A$ and $B$ of a sample space $S$, $P(A) = \frac{1}{3}$, $P(B) = \frac{1}{4}$ and $P(A \cup B) = \frac{5}{12}$. Then $P(A' \cap B')$ is:`,
      verify: { kind: "value", inputs: { pa: "1/3", pb: "1/4", pu: "5/12" }, params: { ask: "neither" } },
      options: [
        { key: "A", text: t`$\frac{7}{12}$`, correct: true, value: "7/12" },
        { key: "B", text: t`$\frac{5}{6}$`, correct: false, misconceptionId: "C05-M2", value: "5/6" },
        { key: "C", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C05-M3", value: "3/4" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C05-M4", value: "1/2" },
      ],
      solution: {
        steps: [
          t`By De Morgan's law, $A' \cap B' = (A \cup B)'$.`,
          t`So $P(A' \cap B') = 1 - P(A \cup B) = 1 - \frac{5}{12} = \frac{7}{12}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/9.2 SolvedEx.2" },
      stem: t`The probability that a student will solve problem $A$ is $\frac{2}{3}$, and the probability that he will **not** solve problem $B$ is $\frac{5}{9}$. The probability that he solves at least one of the two is $\frac{4}{5}$. The probability that he solves both problems is:`,
      verify: { kind: "value", inputs: { pa: "2/3", pbc: "5/9", pu: "4/5" }, params: { ask: "inter" } },
      options: [
        { key: "A", text: t`$\frac{8}{27}$`, correct: false, misconceptionId: "C05-M4", value: "8/27" },
        { key: "B", text: t`$\frac{19}{45}$`, correct: false, misconceptionId: "C05-M5", value: "19/45" },
        { key: "C", text: t`$\frac{14}{45}$`, correct: true, value: "14/45" },
        { key: "D", text: t`$\frac{7}{45}$`, correct: false, misconceptionId: "C05-M3", value: "7/45" },
      ],
      solution: {
        steps: [
          t`Let $A$: he solves problem $A$, $B$: he solves problem $B$. $P(B) = 1 - P(B') = 1 - \frac{5}{9} = \frac{4}{9}$.`,
          t`'At least one' is $A \cup B$, so $P(A \cup B) = \frac{4}{5}$.`,
          t`$P(A \cap B) = P(A) + P(B) - P(A \cup B) = \frac{2}{3} + \frac{4}{9} - \frac{4}{5} = \frac{30 + 20 - 36}{45} = \frac{14}{45}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q8" },
      stem: t`For two events $A$ and $B$ of a sample space $S$, $P(A \cup B) = \frac{5}{6}$, $P(A \cap B) = \frac{1}{4}$ and $P(B') = \frac{1}{3}$. Then $P(A)$ is:`,
      verify: { kind: "value", inputs: { pu: "5/6", pab: "1/4", pbc: "1/3" }, params: { ask: "a" } },
      options: [
        { key: "A", text: t`$\frac{5}{12}$`, correct: true, value: "5/12" },
        { key: "B", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C05-M1", value: "1/6" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C05-M3", value: "2/3" },
        { key: "D", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C05-M5", value: "3/4" },
      ],
      solution: {
        steps: [
          t`$P(B) = 1 - P(B') = 1 - \frac{1}{3} = \frac{2}{3}$.`,
          t`From $P(A \cup B) = P(A) + P(B) - P(A \cap B)$: $P(A) = P(A \cup B) - P(B) + P(A \cap B)$.`,
          t`$P(A) = \frac{5}{6} - \frac{2}{3} + \frac{1}{4} = \frac{10 - 8 + 3}{12} = \frac{5}{12}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q4(a)" },
      stem: t`A bag contains $75$ tickets numbered from $1$ to $75$. One ticket is drawn at random. The probability that the number on it is a perfect square or divisible by $4$ is:`,
      verify: { kind: "value", inputs: { n: "75" }, params: { data: "tickets", A: "square", B: "div4", ask: "union" } },
      options: [
        { key: "A", text: t`$\frac{22}{75}$`, correct: true, value: "22/75" },
        { key: "B", text: t`$\frac{26}{75}$`, correct: false, misconceptionId: "C05-M1", value: "26/75" },
        { key: "C", text: t`$\frac{6}{25}$`, correct: false, misconceptionId: "C05-M3", value: "6/25" },
        { key: "D", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C05-M6", value: "2/5" },
      ],
      solution: {
        steps: [
          t`$A$: a perfect square: $1, 4, 9, 16, 25, 36, 49, 64$, so $n(A) = 8$. $B$: divisible by $4$: $4, 8, \ldots, 72$, so $n(B) = 18$.`,
          t`$A \cap B$: the squares divisible by $4$: $4, 16, 36, 64$, so $n(A \cap B) = 4$.`,
          t`$P(A \cup B) = \frac{8}{75} + \frac{18}{75} - \frac{4}{75} = \frac{22}{75}$.`,
        ],
      },
    },
  ],
};
