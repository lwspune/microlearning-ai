import type { Concept, FigureElement, Pt, Shape } from "../../../types.ts";

const t = String.raw;

/** The box U, from (0, 0) to (10, 7), as the half-planes that keep a region inside it. */
const box: Shape[] = [
  { kind: "halfPlane", through: [[0, 0], [10, 0]] },
  { kind: "halfPlane", through: [[10, 0], [10, 7]] },
  { kind: "halfPlane", through: [[10, 7], [0, 7]] },
  { kind: "halfPlane", through: [[0, 7], [0, 0]] },
];

/** The house Venn circles: A on the left, B on the right, both of radius 2.4. */
const cA: Pt = [3.9, 3.5];
const cB: Pt = [6.1, 3.5];
const R = 2.4;
const inA: Shape = { kind: "disc", centre: cA, r: R };
const outA: Shape = { kind: "outsideDisc", centre: cA, r: R };
const inB: Shape = { kind: "disc", centre: cB, r: R };
const outB: Shape = { kind: "outsideDisc", centre: cB, r: R };

/** The three cells of the circles, shaded at `step`. */
const onlyA = (step: number, tone?: "good"): FigureElement => ({ kind: "region", within: [inA, outB, ...box], step, ...(tone ? { tone } : {}) });
const onlyB = (step: number, tone?: "good"): FigureElement => ({ kind: "region", within: [outA, inB, ...box], step, ...(tone ? { tone } : {}) });
const both = (step: number, tone?: "good"): FigureElement => ({ kind: "region", within: [inA, inB, ...box], step, ...(tone ? { tone } : {}) });

/** The box U and the two circles with their names; `uStep` delays the label U. */
function venn(a: string, b: string, u = "U", uStep?: number): FigureElement[] {
  return [
    { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
    { kind: "circle", centre: cA, r: R, tone: "muted" },
    { kind: "label", at: [2.2, 5.2], label: a, labelAt: "nw" },
    { kind: "circle", centre: cB, r: R, tone: "muted" },
    { kind: "label", at: [7.8, 5.2], label: b, labelAt: "ne" },
    { kind: "label", at: [9.5, 6.4], label: u, labelAt: "n", ...(uStep === undefined ? {} : { step: uStep }) },
  ];
}

const view = { x: [-0.3, 10.3] as [number, number], y: [-0.3, 7.3] as [number, number] };

/** For the greatest overlap: a smaller B (radius 1.7), and where it sits once slid inside A. */
const cSmallB: Pt = [6.4, 3.5];
const rSmallB = 1.7;
const cSlidB: Pt = [3.4, 3.5];

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A class has $40$ students. $30$ have a phone and $25$ have a bicycle. Nobody says how many have both. **Could it be none? What is the least it can be, and the most?**`,
    reveal: t`$30 + 25 = 55$, but there are only $40$ students, so at least $55 - 40 = 15$ of them are counted twice: at least $15$ have both, never none. At most, all $25$ bicycle owners also have a phone, so the most is $25$.`,
  },
  explanation: {
    intuition: [
      t`In a class of $40$ (the box $U$), $30$ students have a phone and $25$ have a bicycle.`,
      t`The **overlap** is the part inside both circles: the students who have both.`,
      t`Slide the circles apart, keeping their sizes, and the overlap shrinks until nobody is left outside them.`,
      t`Then $30 + 25 - 40 = 15$ students have nowhere else to go: at least $15$ have both.`,
      t`That leaves $15$ with only a phone and $10$ with only a bicycle.`,
      t`Slide them together and the overlap grows, until the smaller circle sits inside the larger: at most $25$ have both.`,
    ],
    formal: [
      {
        title: "The least overlap",
        points: [
          t`Recall: $n(A)$ is the number of elements in $A$, and $n(A) + n(B)$ counts the overlap twice.`,
          t`So $n(A \cup B)$ equals $n(A) + n(B) - n(A \cap B)$.`,
          t`$A \cup B$ lies inside $U$, so $n(A \cup B) \le n(U)$.`,
          t`Put the two together: $n(A \cap B) \ge n(A) + n(B) - n(U)$.`,
          t`A count is never negative, so also $n(A \cap B) \ge 0$.`,
          t`So the least $n(A \cap B)$ is $\max\{0,\ n(A) + n(B) - n(U)\}$, where $\max$ picks the larger number.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside the box U. Shading A and then B shades the overlap A ∩ B twice. Since the union lies inside U, n(A ∪ B) ≤ n(U), and so n(A ∩ B) ≥ n(A) + n(B) − n(U).",
          axes: "none",
          view,
          elements: [
            { kind: "region", within: [inA, ...box], step: 1 },
            { kind: "region", within: [inB, ...box], step: 1 },
            ...venn("A", "B"),
            { kind: "label", at: [5, 3.5], label: "A ∩ B", labelAt: "n", step: 1 },
            { kind: "label", at: [5, 6.1], label: "n(A ∪ B) ≤ n(U)", labelAt: "n", step: 3 },
            { kind: "label", at: [5, 0.1], label: "n(A ∩ B) ≥ n(A) + n(B) − n(U)", labelAt: "n", step: 4, tone: "good" },
          ],
        },
      },
      {
        title: "The greatest overlap",
        points: [
          t`$A \cap B$ lies inside $A$, so $n(A \cap B) \le n(A)$.`,
          t`It lies inside $B$ too, so $n(A \cap B) \le n(B)$.`,
          t`So the greatest $n(A \cap B)$ is $\min\{n(A),\ n(B)\}$, where $\min$ picks the smaller number.`,
          t`It is reached when the smaller set, here $B$, lies wholly inside the larger.`,
        ],
        figure: {
          alt: "A Venn diagram of a larger circle A and a smaller circle B inside the box U. A is shaded, then B: the overlap lies inside each, so n(A ∩ B) ≤ min{n(A), n(B)}. A dashed copy of B sits wholly inside A, where the overlap is all of B.",
          axes: "none",
          view,
          elements: [
            { kind: "region", within: [inA, ...box], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: cSmallB, r: rSmallB }, ...box], step: 2 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: cA, r: R, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: cSmallB, r: rSmallB, tone: "muted" },
            { kind: "label", at: [7.6, 4.7], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 0.1], label: "n(A ∩ B) ≤ min{n(A), n(B)}", labelAt: "n", step: 3, tone: "good" },
            { kind: "circle", centre: cSlidB, r: rSmallB, dashed: true, tone: "good", step: 4 },
            { kind: "label", at: cSlidB, label: "B inside A", labelAt: "n", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "The least and greatest union",
        points: [
          t`Recall: the union $A \cup B$ is everything in either circle.`,
          t`$n(A \cup B)$ is $n(A) + n(B)$ minus the overlap, so a smaller overlap means a bigger union.`,
          t`The greatest overlap gives the least union: $\max\{n(A),\ n(B)\}$, the size of the larger set.`,
          t`The least overlap gives the greatest union: $\min\{n(U),\ n(A) + n(B)\}$.`,
          t`That is because no union holds more than $n(U)$ elements, or more than $n(A) + n(B)$.`,
        ],
        figure: {
          alt: "A Venn diagram of A and B inside the box U, with the union A ∪ B shaded. The overlap is taken away once, so the union moves the other way from it: the least union is max{n(A), n(B)} and the greatest is min{n(U), n(A) + n(B)}.",
          axes: "none",
          view,
          elements: [
            onlyA(1, "good"),
            onlyB(1, "good"),
            both(1, "good"),
            ...venn("A", "B"),
            { kind: "label", at: [5, 3.5], label: "− n(A ∩ B)", labelAt: "n", tone: "bad", step: 2 },
            { kind: "label", at: [5, 6.1], label: "least: max{n(A), n(B)}", labelAt: "n", step: 3 },
            { kind: "label", at: [5, 0.1], label: "greatest: min{n(U), n(A) + n(B)}", labelAt: "n", step: 4, tone: "good" },
          ],
        },
      },
      {
        title: "Percentages",
        points: [
          t`With percentages, the whole group is $100\%$, so take $n(U) = 100\%$.`,
          t`Every rule above then holds as it stands.`,
          t`Say $60\%$ of a town watch cricket and $70\%$ watch football.`,
          t`At least $60\% + 70\% - 100\% = 30\%$ watch both.`,
          t`At most $\min\{60\%,\ 70\%\} = 60\%$ watch both: every cricket watcher also watches football.`,
        ],
        figure: {
          alt: "A Venn diagram of Cricket (60%) and Football (70%) inside the box U = 100%. Both circles are shaded; the overlap must hold at least 60% + 70% − 100% = 30%, and at most 60%, when the Cricket circle lies inside the Football circle.",
          axes: "none",
          view,
          elements: [
            { kind: "region", within: [inA, ...box], step: 3 },
            { kind: "region", within: [inB, ...box], step: 3 },
            ...venn("Cricket", "Football", "U = 100%", 1),
            { kind: "label", at: [5, 3.5], label: "30%", labelAt: "n", tone: "good", step: 4 },
            { kind: "label", at: [5, 0.1], label: "at most 60%: Cricket inside Football", labelAt: "n", tone: "good", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Of $120$ people, $85$ speak Hindi and $60$ speak English. Find the least and the greatest number who speak both languages.`,
      steps: [
        t`Let $A$ and $B$ be the Hindi and English speakers. $n(A \cup B) = 85 + 60 - n(A \cap B)$, which is $145 - n(A \cap B)$.`,
        t`$A \cup B$ lies inside the group of $120$, so $145 - n(A \cap B) \le 120$, which gives $n(A \cap B) \ge 25$.`,
        t`$25$ is possible: $25$ speak both, $85 - 25 = 60$ Hindi only, $60 - 25 = 35$ English only and $0$ neither; $60 + 25 + 35 + 0 = 120$.`,
        t`$A \cap B$ lies inside $A$ and inside $B$, so $n(A \cap B) \le \min\{85, 60\}$, which is $60$. This happens when all $60$ English speakers also speak Hindi, and $120 - 85 = 35$ speak neither.`,
      ],
      answer: t`The least is $25$ and the greatest is $60$.`,
      figure: {
        alt: "A Venn diagram of Hindi (85) and English (60) speakers among 120 people. The two circles together are shaded; the least overlap is 25, leaving 60 Hindi only, 35 English only and 0 neither. The greatest overlap is 60, when the English circle lies inside the Hindi circle.",
        axes: "none",
        view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
        elements: [
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
          { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
          { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
          { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
          { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [2.2, 5.2], label: "Hindi", labelAt: "nw" },
          { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
          { kind: "label", at: [7.8, 5.2], label: "English", labelAt: "ne" },
          { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
          { kind: "label", at: [5, 3.5], label: "25", labelAt: "n", step: 2, tone: "good" },
          { kind: "label", at: [2.6, 3.5], label: "60", labelAt: "n", step: 3 },
          { kind: "label", at: [7.4, 3.5], label: "35", labelAt: "n", step: 3 },
          { kind: "label", at: [0.9, 0.8], label: "0", labelAt: "n", step: 3 },
          { kind: "label", at: [5, 0.1], label: "greatest: 60, English inside Hindi", labelAt: "n", step: 4, tone: "good" },
        ],
      },
    },
    figure: {
      alt: "A Venn diagram of 40 students: the Phone circle (30) and the Bicycle circle (25) inside the box U. The overlap is shaded first. With the circles slid apart until nobody is outside, 0 have neither, and 30 + 25 − 40 = 15 must have both, leaving 15 with only a phone and 10 with only a bicycle. Slid together, at most 25 have both, when the Bicycle circle lies inside the Phone circle.",
      axes: "none",
      view,
      elements: [
        both(2),
        onlyA(3),
        onlyB(3),
        ...venn("Phone", "Bicycle"),
        { kind: "label", at: [0.9, 0.8], label: "0", labelAt: "n", step: 3, tone: "good" },
        { kind: "label", at: [5, 3.5], label: "15", labelAt: "n", step: 4, tone: "bad" },
        { kind: "label", at: [5, 0.1], label: "at least 30 + 25 − 40 = 15 in both", labelAt: "n", step: 4, tone: "bad" },
        { kind: "label", at: [2.6, 3.5], label: "15", labelAt: "n", step: 5 },
        { kind: "label", at: [7.4, 3.5], label: "10", labelAt: "n", step: 5 },
        { kind: "label", at: [5, 6.1], label: "at most 25: Bicycle inside Phone", labelAt: "n", step: 6, tone: "good" },
      ],
    },
    visualSpec: t`Drag circle $B$ along a line inside $U$ with $n(A)$, $n(B)$ and $n(U)$ fixed; the four cell counts update, and the overlap stops shrinking when the outside cell reaches $0$ and stops growing when $B$ sits inside $A$.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Bounding the overlap by the larger set, or the union by the smaller set",
      remediation: t`$A \cap B$ sits inside both sets, so it is at most the smaller one: $n(A \cap B) \le \min\{n(A), n(B)\}$. $A \cup B$ contains both sets, so it is at least the larger one.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C08-M2",
      mistake: t`Ignoring $n(U)$: thinking the sets can always be pulled apart, so the overlap can be $0$ and the union $n(A) + n(B)$`,
      remediation: t`Everything has to fit inside $U$, so $n(A \cup B) \le n(U)$. When $n(A) + n(B) > n(U)$, at least $n(A) + n(B) - n(U)$ elements must be in both sets.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M3",
      mistake: t`Swapping the least and the greatest: reading $n(A \cup B) \le n(U)$ as an upper bound on the overlap`,
      remediation: t`$n(A \cap B) = n(A) + n(B) - n(A \cup B)$: the bigger the union, the smaller the overlap. So $n(A \cup B) \le n(U)$ gives the least overlap, $n(A) + n(B) - n(U)$; the overlap is greatest when the smaller set lies inside the larger.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C08-M4",
      mistake: t`Confusing $A \cap B$ with $A \cup B$: giving the bound for the union when the overlap is asked, or the other way round`,
      remediation: t`'Both' is $A \cap B$, the overlap; 'at least one' is $A \cup B$, everything in either circle. Check which one the question asks for before finding its least or greatest value.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    t`C08-M2 gives the key when $n(A) + n(B) \le n(U)$ (least overlap $0$, greatest union $n(A) + n(B)$); diagnose it only with $n(A) + n(B) > n(U)$.`,
    t`C08-M1 gives the key when $n(A) = n(B)$, and C08-M3 when the larger set is all of $U$ (then the least and greatest are equal).`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.10" },
      stem: t`In a survey of $100$ consumers, $72$ like product A and $45$ like product B. What is the least number of consumers who must like both products A and B?`,
      verify: { kind: "value", inputs: { U: "100", A: "72", B: "45" }, params: { ask: "least_both" } },
      options: [
        { key: "A", text: t`$17$`, correct: true, value: "17" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "C", text: t`$45$`, correct: false, misconceptionId: "C08-M3", value: "45" },
        { key: "D", text: t`$72$`, correct: false, misconceptionId: "C08-M4", value: "72" },
      ],
      solution: {
        steps: [
          t`$n(A \cup B) = 72 + 45 - n(A \cap B) = 117 - n(A \cap B)$, and $A \cup B$ holds at most the $100$ consumers surveyed.`,
          t`$117 - n(A \cap B) \le 100$, so $n(A \cap B) \ge 17$.`,
          t`$17$ is possible: $17$ like both, $55$ only A, $28$ only B and $0$ neither; $55 + 17 + 28 = 100$.`,
        ],
        figure: {
          alt: "A Venn diagram of products A (72) and B (45) among 100 consumers. Both circles together are shaded; the least overlap is 17, with 55 only A, 28 only B and 0 neither.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "B", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "17", labelAt: "n", step: 2, tone: "good" },
            { kind: "label", at: [2.6, 3.5], label: "55", labelAt: "n", step: 3 },
            { kind: "label", at: [7.4, 3.5], label: "28", labelAt: "n", step: 3 },
            { kind: "label", at: [0.9, 0.8], label: "0", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1 SolvedEx.10" },
      stem: t`In a group of $60$ students, $38$ like tea and $32$ like coffee. What is the greatest possible number of students who like both tea and coffee?`,
      verify: { kind: "value", inputs: { U: "60", A: "38", B: "32" }, params: { ask: "most_both" } },
      options: [
        { key: "A", text: t`$38$`, correct: false, misconceptionId: "C08-M1", value: "38" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C08-M3", value: "10" },
        { key: "C", text: t`$60$`, correct: false, misconceptionId: "C08-M4", value: "60" },
        { key: "D", text: t`$32$`, correct: true, value: "32" },
      ],
      solution: {
        steps: [
          t`Students who like both are among the $32$ who like coffee and among the $38$ who like tea, so at most $\min\{38, 32\} = 32$.`,
          t`$32$ is possible when every coffee lover also likes tea: $32$ both, $38 - 32 = 6$ tea only, $0$ coffee only and $60 - 38 = 22$ neither.`,
        ],
        figure: {
          alt: "A Venn diagram of Tea (38) and Coffee (32) among 60 students. The Coffee circle is shaded; at most all 32 coffee lovers are in the overlap, leaving 6 tea only, 0 coffee only and 22 neither.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Tea", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "Coffee", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "32", labelAt: "n", step: 1, tone: "good" },
            { kind: "label", at: [2.6, 3.5], label: "6", labelAt: "n", step: 2 },
            { kind: "label", at: [7.4, 3.5], label: "0", labelAt: "n", step: 2 },
            { kind: "label", at: [0.9, 0.8], label: "22", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`In a colony of $150$ families, $90$ families own a car and $70$ own a scooter. What is the least possible number of families that own a car or a scooter (at least one of the two)?`,
      verify: { kind: "value", inputs: { U: "150", A: "90", B: "70" }, params: { ask: "least_union" } },
      options: [
        { key: "A", text: t`$70$`, correct: false, misconceptionId: "C08-M1", value: "70" },
        { key: "B", text: t`$150$`, correct: false, misconceptionId: "C08-M3", value: "150" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C08-M4", value: "10" },
        { key: "D", text: t`$90$`, correct: true, value: "90" },
      ],
      solution: {
        steps: [
          t`Let $A$ and $B$ be the families with a car and with a scooter. $A \cup B$ contains all $90$ car owners, so $n(A \cup B) \ge 90$, the larger of $90$ and $70$.`,
          t`$90$ is possible when every scooter owner also owns a car: $70$ both, $20$ car only, $0$ scooter only and $150 - 90 = 60$ neither.`,
          t`Check: $n(A \cup B) = 90 + 70 - 70 = 90$.`,
        ],
        figure: {
          alt: "A Venn diagram of Car (90) and Scooter (70) among 150 families. The Car circle is shaded first; with all 70 scooter owners in the overlap, 20 own a car only, 0 a scooter only and 60 neither. The union, shaded, holds 90.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Car", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "Scooter", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "70", labelAt: "n", step: 2 },
            { kind: "label", at: [2.6, 3.5], label: "20", labelAt: "n", step: 2 },
            { kind: "label", at: [7.4, 3.5], label: "0", labelAt: "n", step: 2 },
            { kind: "label", at: [0.9, 0.8], label: "60", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`A class has $50$ students. $35$ of them play chess and $28$ play carrom. What is the greatest possible number of students who play at least one of the two games?`,
      verify: { kind: "value", inputs: { U: "50", A: "35", B: "28" }, params: { ask: "most_union" } },
      options: [
        { key: "A", text: t`$35$`, correct: false, misconceptionId: "C08-M3", value: "35" },
        { key: "B", text: t`$28$`, correct: false, misconceptionId: "C08-M4", value: "28" },
        { key: "C", text: t`$50$`, correct: true, value: "50" },
        { key: "D", text: t`$63$`, correct: false, misconceptionId: "C08-M2", value: "63" },
      ],
      solution: {
        steps: [
          t`Let $A$ and $B$ be the chess and carrom players. $n(A \cup B) = 35 + 28 - n(A \cap B) = 63 - n(A \cap B)$: the union is largest when the overlap is least.`,
          t`The union lies inside the class, so $n(A \cup B) \le 50$, which needs $n(A \cap B) \ge 63 - 50 = 13$.`,
          t`$50$ is possible: $13$ play both, $22$ chess only, $15$ carrom only and $0$ neither. So all $50$ can play at least one game.`,
        ],
        figure: {
          alt: "A Venn diagram of Chess (35) and Carrom (28) among 50 students. The overlap must hold at least 13; then 22 play chess only, 15 carrom only and 0 neither, and the union, shaded, holds all 50.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 3, tone: "good" },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Chess", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "Carrom", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "13", labelAt: "n", step: 2, tone: "bad" },
            { kind: "label", at: [2.6, 3.5], label: "22", labelAt: "n", step: 3 },
            { kind: "label", at: [7.4, 3.5], label: "15", labelAt: "n", step: 3 },
            { kind: "label", at: [0.9, 0.8], label: "0", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`In a town, $80\%$ of the families own a two-wheeler and $65\%$ own a television. What is the greatest possible percentage of families that own both a two-wheeler and a television?`,
      verify: { kind: "value", inputs: { U: "100", A: "80", B: "65" }, params: { ask: "most_both" } },
      options: [
        { key: "A", text: t`$100\%$`, correct: false, misconceptionId: "C08-M4", value: "100" },
        { key: "B", text: t`$65\%$`, correct: true, value: "65" },
        { key: "C", text: t`$80\%$`, correct: false, misconceptionId: "C08-M1", value: "80" },
        { key: "D", text: t`$45\%$`, correct: false, misconceptionId: "C08-M3", value: "45" },
      ],
      solution: {
        steps: [
          t`Families owning both are among the $65\%$ with a television, so at most $\min\{80\%, 65\%\} = 65\%$.`,
          t`$65\%$ is possible when every family with a television also owns a two-wheeler: two-wheeler only $15\%$, television only $0\%$ and neither $100\% - 80\% = 20\%$.`,
        ],
        figure: {
          alt: "A Venn diagram of Two-wheeler (80%) and TV (65%). The TV circle is shaded; at most all 65% are in the overlap, leaving 15% two-wheeler only, 0% TV only and 20% neither.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "Two-wheeler", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "TV", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "65%", labelAt: "n", step: 1, tone: "good" },
            { kind: "label", at: [2.6, 3.5], label: "15%", labelAt: "n", step: 2 },
            { kind: "label", at: [7.4, 3.5], label: "0%", labelAt: "n", step: 2 },
            { kind: "label", at: [0.9, 0.8], label: "20%", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "authored" },
      stem: t`In an examination, $70\%$ of the students passed in English and $65\%$ passed in Mathematics. What is the least percentage of students who must have passed in both subjects?`,
      verify: { kind: "value", inputs: { U: "100", A: "70", B: "65" }, params: { ask: "least_both" } },
      options: [
        { key: "A", text: t`$65\%$`, correct: false, misconceptionId: "C08-M3", value: "65" },
        { key: "B", text: t`$70\%$`, correct: false, misconceptionId: "C08-M4", value: "70" },
        { key: "C", text: t`$35\%$`, correct: true, value: "35" },
        { key: "D", text: t`$0\%$`, correct: false, misconceptionId: "C08-M2", value: "0" },
      ],
      solution: {
        steps: [
          t`With $E$ and $M$ the students who passed English and Mathematics: $n(E \cup M) = 70\% + 65\% - n(E \cap M) = 135\% - n(E \cap M)$, and this can't exceed $100\%$.`,
          t`So $n(E \cap M) \ge 135\% - 100\% = 35\%$.`,
          t`$35\%$ is possible: $35\%$ passed both, $35\%$ English only, $30\%$ Mathematics only and $0\%$ neither.`,
        ],
        figure: {
          alt: "A Venn diagram of English (70%) and Maths (65%). Both circles together are shaded; the least overlap is 35%, with 35% English only, 30% Maths only and 0% neither.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "outsideDisc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "outsideDisc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [3.9, 3.5], r: 2.4 }, { kind: "disc", centre: [6.1, 3.5], r: 2.4 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "circle", centre: [3.9, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [2.2, 5.2], label: "English", labelAt: "nw" },
            { kind: "circle", centre: [6.1, 3.5], r: 2.4, tone: "muted" },
            { kind: "label", at: [7.8, 5.2], label: "Maths", labelAt: "ne" },
            { kind: "label", at: [9.5, 6.4], label: "U", labelAt: "n" },
            { kind: "label", at: [5, 3.5], label: "35%", labelAt: "n", step: 2, tone: "good" },
            { kind: "label", at: [2.6, 3.5], label: "35%", labelAt: "n", step: 3 },
            { kind: "label", at: [7.4, 3.5], label: "30%", labelAt: "n", step: 3 },
            { kind: "label", at: [0.9, 0.8], label: "0%", labelAt: "n", step: 3 },
          ],
        },
      },
    },
  ],
};
