import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** Each point drawn and named, its label on the side `labelAt` says. */
const dots = (pts: [string, Pt, FigureElement["labelAt"]][], step?: number): FigureElement[] =>
  pts.map(([label, at, labelAt]): FigureElement => ({ kind: "point", at, label, labelAt, ...(step ? { step } : {}) }));

/** The segment joining every pair of the given points, in one tone and at one step. */
const joins = (pts: Pt[], tone: FigureElement["tone"], step: number): FigureElement[] =>
  pts.flatMap((a, i) => pts.slice(i + 1).map((b): FigureElement => ({ kind: "segment", from: a, to: b, tone, step })));

/** Five points, no three collinear. */
const FREE: Record<string, Pt> = { A: [-2, -1], B: [1.8, -1.4], C: [2.4, 1.2], D: [0, 2], E: [-2.2, 1] };

/** Five points, A, B and C on one line (y = −1), D and E off it. */
const COL: Record<string, Pt> = { A: [-2.4, -1], B: [-0.4, -1], C: [1.6, -1], D: [-1, 1.4], E: [1.8, 1.6] };
const colDots = dots([["A", COL.A, "n"], ["B", COL.B, "n"], ["C", COL.C, "n"], ["D", COL.D, "n"], ["E", COL.E, "n"]]);

/** A regular pentagon's vertices, A at the top and the rest anticlockwise. */
const PENT: Pt[] = [90, 162, 234, 306, 18].map((d): Pt => [
  +(2 * Math.cos((d * Math.PI) / 180)).toFixed(3),
  +(2 * Math.sin((d * Math.PI) / 180)).toFixed(3),
]);

/** Slanted parallel lines: each through (x, 0) and (x + 1, 2). */
const SLANT = [-1, 0.4, 1.8, 3.2];
const FLAT = [0, 1.2, 2.4];

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A hexagon has $6$ corners. **How many diagonals can you draw in it?**`,
    reveal: t`Any $2$ corners can be joined: $^6C_2 = 15$ segments. But $6$ of these are the sides of the hexagon, not diagonals. So there are $15 - 6 = 9$ diagonals. Check by counting: each corner joins $3$ non-neighbours, $6 \times 3 = 18$, and every diagonal was counted from both its ends, so $\frac{18}{2} = 9$.`,
  },
  explanation: {
    intuition: [
      t`Two points fix the line through them; three points not on one line fix a triangle.`,
      t`Order changes nothing: line $AB$ is line $BA$, so each count is a selection, $^nC_r$.`,
      t`Points are **collinear** when they all lie on one straight line.`,
      t`Collinear points spoil that count: their pairs give only one line, and their triples give no triangle.`,
      t`A **polygon** is a closed shape with straight sides; its corners are its **vertices**.`,
      t`A **diagonal** joins two vertices that are not neighbours, so the $n$ sides of an $n$-sided polygon are not diagonals.`,
    ],
    formal: [
      {
        title: "Lines and triangles",
        points: [
          t`Take $n$ points in a plane, no three of them collinear.`,
          t`Each pair of points fixes its own line, so there are $^nC_2$ lines.`,
          t`Each triple fixes its own triangle, so there are $^nC_3$ triangles.`,
          t`So $5$ such points give $^5C_2 = 10$ lines and $^5C_3 = 10$ triangles.`,
        ],
        figure: {
          alt: "Five points A, B, C, D and E, no three on one line. Every pair is joined: 10 lines, with line AB marked. The triangle ACD, one of the 10 triangles, is shaded.",
          axes: "none",
          view: { x: [-3, 3.4], y: [-2, 2.6] },
          elements: [
            ...dots([["A", FREE.A, "sw"], ["B", FREE.B, "se"], ["C", FREE.C, "e"], ["D", FREE.D, "n"], ["E", FREE.E, "w"]], 1),
            ...joins([FREE.A, FREE.B, FREE.C, FREE.D, FREE.E], "muted", 2),
            { kind: "segment", from: FREE.A, to: FREE.B, label: "line AB", labelAt: "s", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [FREE.A, FREE.C] }, { kind: "halfPlane", through: [FREE.C, FREE.D] }, { kind: "halfPlane", through: [FREE.D, FREE.A] }], tone: "good", step: 3 },
            { kind: "label", at: [-0.12, 0.45], label: "triangle ACD", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Lines through collinear points",
        points: [
          t`Now let $k$ of the $n$ points be collinear, with no other three collinear.`,
          t`Those $k$ points make $^kC_2$ pairs, all lying on that one line.`,
          t`So these pairs give just $1$ line, not $^kC_2$ lines.`,
          t`Take the $^kC_2$ pairs away, then add their one line back.`,
          t`Lines $= {}^nC_2 - {}^kC_2 + 1$.`,
          t`Here $5$ points with $3$ collinear give $10 - 3 + 1 = 8$ lines.`,
        ],
        figure: {
          alt: "Five points: A, B and C on one straight line, D and E off it. The 3 pairs AB, BC and AC all lie on that line, so they give just 1 line. With the 7 other joins, DA, DB, DC, EA, EB, EC and DE, there are 8 lines.",
          axes: "none",
          view: { x: [-3.2, 3.2], y: [-2.2, 2.4] },
          elements: [
            ...colDots,
            { kind: "line", through: [COL.A, COL.C], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [-0.4, -1.4], label: "pairs AB, BC, AC", labelAt: "s", tone: "bad", step: 2 },
            { kind: "segment", from: [-3, -1], to: [2.6, -1], tone: "good", step: 3 },
            { kind: "label", at: [2.6, -1], label: "1 line", labelAt: "ne", tone: "good", step: 3 },
            ...joins([COL.D, COL.E], "muted", 6),
            ...[COL.A, COL.B, COL.C].flatMap((p): FigureElement[] => [
              { kind: "segment", from: COL.D, to: p, tone: "muted", step: 6 },
              { kind: "segment", from: COL.E, to: p, tone: "muted", step: 6 },
            ]),
            { kind: "label", at: [-3.1, 2.1], label: "8 lines", labelAt: "e", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Triangles with collinear points",
        points: [
          t`The $k$ collinear points make $^kC_3$ triples, all on that one line.`,
          t`Three points on one line enclose nothing, so none of these triples is a triangle.`,
          t`A triple with a point off the line is still a triangle.`,
          t`So take the $^kC_3$ triples away, and add nothing back.`,
          t`Triangles $= {}^nC_3 - {}^kC_3$.`,
          t`Here $5$ points with $3$ collinear give $10 - 1 = 9$ triangles.`,
        ],
        figure: {
          alt: "The same five points: A, B and C on one line, D and E off it. The triple A, B, C lies along the line and makes no triangle. The triple A, B, D, with D off the line, makes a shaded triangle. In all there are 9 triangles.",
          axes: "none",
          view: { x: [-3.2, 3.2], y: [-2.2, 2.4] },
          elements: [
            ...colDots,
            { kind: "line", through: [COL.A, COL.C], dashed: true, tone: "muted" },
            { kind: "segment", from: COL.A, to: COL.C, tone: "bad", step: 1 },
            { kind: "label", at: [-0.4, -1.4], label: "triple A, B, C", labelAt: "s", tone: "bad", step: 1 },
            { kind: "label", at: [1.6, -1.4], label: "no triangle", labelAt: "se", tone: "bad", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [COL.A, COL.B] }, { kind: "halfPlane", through: [COL.B, COL.D] }, { kind: "halfPlane", through: [COL.D, COL.A] }], tone: "good", step: 3 },
            { kind: "label", at: [-2.2, 0.4], label: "triangle ABD", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [-3.1, 2.1], label: "9 triangles", labelAt: "e", tone: "good", step: 6 },
          ],
        },
      },
      {
        title: "Diagonals of a polygon",
        points: [
          t`A polygon with $n$ sides has $n$ vertices.`,
          t`Joining any $2$ of them gives $^nC_2$ segments.`,
          t`$n$ of these segments are the sides.`,
          t`The rest are the diagonals: $^nC_2 - n$ of them.`,
          t`That equals $\frac{n(n - 3)}{2}$: each vertex starts $n - 3$ diagonals, and each diagonal has two ends.`,
          t`A pentagon, with $n = 5$, has $10 - 5 = 5$ diagonals.`,
        ],
        figure: {
          alt: "A pentagon's 5 vertices, A to E. All 10 pairs are joined. The 5 joins between neighbours are the sides; the other 5, inside the pentagon, are the diagonals.",
          axes: "none",
          view: { x: [-3, 3], y: [-2.5, 2.6] },
          elements: [
            ...dots([["A", PENT[0], "n"], ["B", PENT[1], "w"], ["C", PENT[2], "sw"], ["D", PENT[3], "se"], ["E", PENT[4], "e"]], 1),
            ...joins(PENT, "muted", 2),
            ...PENT.map((p, i): FigureElement => ({ kind: "segment", from: p, to: PENT[(i + 1) % 5], tone: "good", step: 3 })),
            { kind: "label", at: [0, -1.618], label: "side", labelAt: "s", tone: "good", step: 3 },
            ...PENT.map((p, i): FigureElement => ({ kind: "segment", from: p, to: PENT[(i + 2) % 5], step: 4 })),
            { kind: "label", at: [1.5, 0.618], label: "diagonal", labelAt: "nw", step: 4 },
          ],
        },
      },
      {
        title: "Parallelograms from parallel lines",
        points: [
          t`Take $a$ **parallel** lines, lines that never meet, crossed by $b$ other parallel lines.`,
          t`A **parallelogram** has two pairs of parallel sides: $2$ lines from the first set and $2$ from the second.`,
          t`The first set gives $^aC_2$ choices, and the second gives $^bC_2$.`,
          t`You choose from both sets, so multiply: $^aC_2 \times {}^bC_2$ parallelograms.`,
          t`Here $3$ lines crossing $4$ lines give $^3C_2 \times {}^4C_2 = 3 \times 6 = 18$.`,
        ],
        figure: {
          alt: "Three level parallel lines crossed by four slanted parallel lines. Two level lines and two slanted lines are picked out, and the parallelogram between them is shaded.",
          axes: "none",
          view: { x: [-2.6, 5], y: [-0.8, 3.2] },
          elements: [
            ...FLAT.map((y): FigureElement => ({ kind: "line", through: [[0, y], [1, y]], tone: "muted", step: 1 })),
            ...SLANT.map((x): FigureElement => ({ kind: "line", through: [[x, 0], [x + 1, 2]], tone: "muted", step: 1 })),
            { kind: "label", at: [-2.5, 0.6], label: "a = 3", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [4.6, 3], label: "b = 4", labelAt: "w", tone: "muted", step: 1 },
            { kind: "line", through: [[0, 0], [1, 0]], tone: "good", step: 2 },
            { kind: "line", through: [[0, 2.4], [1, 2.4]], tone: "good", step: 2 },
            { kind: "line", through: [[-1, 0], [0, 2]], tone: "good", step: 2 },
            { kind: "line", through: [[1.8, 0], [2.8, 2]], tone: "good", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[-1, 0], [1.8, 0]] }, { kind: "halfPlane", through: [[1.8, 0], [2.8, 2]] }, { kind: "halfPlane", through: [[1, 2.4], [0, 2.4]] }, { kind: "halfPlane", through: [[0, 2], [-1, 0]] }], tone: "good", step: 2 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`There are $8$ points in a plane. Three of them are collinear, and no other three are collinear. How many straight lines and how many triangles do they give?`,
      steps: [
        t`If no three were collinear: $^8C_2 = 28$ lines and $^8C_3 = 56$ triangles.`,
        t`The $3$ collinear points give $^3C_2 = 3$ pairs, but all of them lie on one line. Lines: $28 - 3 + 1 = 26$.`,
        t`Those $3$ points give $^3C_3 = 1$ triple, and it is not a triangle. Triangles: $56 - 1 = 55$.`,
      ],
      answer: t`$26$ lines and $55$ triangles.`,
    },
    visualSpec: t`Tap points on a board to mark them and drag some onto one straight line; every pair is joined, and the counts of lines and triangles update as the collinear points merge their lines into one.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Treating line AB and line BA (or triangle ABC and triangle BAC) as different: uses nPr where nCr belongs",
      remediation: t`A line, a triangle or a diagonal depends only on which points you pick, not the order you pick them in. Count selections with $^nC_r$, not arrangements with $^nP_r$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C12-M2",
      mistake: "With k collinear points, takes away their kC2 lines and forgets that they still make one line",
      remediation: t`The $k$ collinear points do give a line, just one. So the count is $^nC_2 - {}^kC_2 + 1$: take away the $^kC_2$ pairs, then add their one line back.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Counting every selection and ignoring the condition: collinear points as if they made extra lines or triangles, sides as diagonals, any 4 lines as a parallelogram",
      remediation: t`Count all the selections, then remove the ones that fail: collinear points share one line and make no triangle, the $n$ sides of a polygon are not diagonals, and a parallelogram needs $2$ lines from each parallel set.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "For triangles with k collinear points, copies the lines rule and adds 1 back after taking away kC3",
      remediation: t`Collinear points give no triangle at all, so nothing is added back: triangles $= {}^nC_3 - {}^kC_3$. The $+1$ belongs only to lines.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Counts n - 3 diagonals at each of the n vertices and gives n(n - 3), counting each diagonal twice",
      remediation: t`Each diagonal has two ends, so counting from every vertex finds it twice. Halve it: $\frac{n(n - 3)}{2}$, which is the same as $^nC_2 - n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "For parallelograms, adds the choices from the two sets of parallel lines instead of multiplying",
      remediation: t`A parallelogram needs $2$ lines from the first set **and** $2$ from the second, so multiply: $^aC_2 \times {}^bC_2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C12-M2 and C12-M4 apply only when $k \ge 3$ points are collinear (lines and triangles respectively); C12-M5 and C12-M6 only to diagonals and parallelograms. Draw a diagnosing item of the matching kind.`,
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q13(b)" },
      stem: t`Ten points are plotted on a plane. Four of them are collinear, and no other three are collinear. How many straight lines are obtained by joining these points?`,
      verify: { kind: "value", inputs: { n: "10", k: "4" }, params: { kind: "lines" } },
      options: [
        { key: "A", text: t`$79$`, correct: false, misconceptionId: "C12-M1", value: "79" },
        { key: "B", text: t`$39$`, correct: false, misconceptionId: "C12-M2", value: "39" },
        { key: "C", text: t`$45$`, correct: false, misconceptionId: "C12-M3", value: "45" },
        { key: "D", text: t`$40$`, correct: true, value: "40" },
      ],
      solution: {
        steps: [
          t`If no three were collinear: $^{10}C_2 = 45$ lines.`,
          t`The $4$ collinear points give $^4C_2 = 6$ pairs, all on one line: take away $6$, add back $1$.`,
          t`Lines: $45 - 6 + 1 = 40$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q14(b)" },
      stem: t`Twelve points are marked on a plane. Four of them are collinear, and no other three are collinear. How many triangles have their vertices at these points?`,
      verify: { kind: "value", inputs: { n: "12", k: "4" }, params: { kind: "triangles" } },
      options: [
        { key: "A", text: t`$217$`, correct: false, misconceptionId: "C12-M4", value: "217" },
        { key: "B", text: t`$216$`, correct: true, value: "216" },
        { key: "C", text: t`$1296$`, correct: false, misconceptionId: "C12-M1", value: "1296" },
        { key: "D", text: t`$220$`, correct: false, misconceptionId: "C12-M3", value: "220" },
      ],
      solution: {
        steps: [
          t`If no three were collinear: $^{12}C_3 = 220$ triangles.`,
          t`The $4$ collinear points give $^4C_3 = 4$ triples, and none of them is a triangle. Nothing is added back.`,
          t`Triangles: $220 - 4 = 216$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q11(a)" },
      stem: t`How many diagonals does a polygon with $10$ sides have?`,
      verify: { kind: "value", inputs: { n: "10", k: "0" }, params: { kind: "diagonals" } },
      options: [
        { key: "A", text: t`$70$`, correct: false, misconceptionId: "C12-M5", value: "70" },
        { key: "B", text: t`$35$`, correct: true, value: "35" },
        { key: "C", text: t`$80$`, correct: false, misconceptionId: "C12-M1", value: "80" },
        { key: "D", text: t`$45$`, correct: false, misconceptionId: "C12-M3", value: "45" },
      ],
      solution: {
        steps: [
          t`Join any $2$ of the $10$ vertices: $^{10}C_2 = 45$ segments.`,
          t`$10$ of these are sides. Diagonals: $45 - 10 = 35$, which is $\frac{10 \times 7}{2}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q17" },
      stem: t`A set of $4$ parallel lines intersects another set of $5$ parallel lines. How many parallelograms are formed?`,
      verify: { kind: "value", inputs: { a: "4", b: "5" }, params: { kind: "parallelograms" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C12-M6", value: "16" },
        { key: "B", text: t`$60$`, correct: true, value: "60" },
        { key: "C", text: t`$240$`, correct: false, misconceptionId: "C12-M1", value: "240" },
        { key: "D", text: t`$126$`, correct: false, misconceptionId: "C12-M3", value: "126" },
      ],
      solution: {
        steps: [
          t`A parallelogram needs $2$ lines from the first set and $2$ from the second.`,
          t`First set: $^4C_2 = 6$ ways. Second set: $^5C_2 = 10$ ways.`,
          t`Both choices together: $6 \times 10 = 60$ parallelograms.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q11(b)" },
      stem: t`How many diagonals does a polygon with $15$ sides have?`,
      verify: { kind: "value", inputs: { n: "15", k: "0" }, params: { kind: "diagonals" } },
      options: [
        { key: "A", text: t`$105$`, correct: false, misconceptionId: "C12-M3", value: "105" },
        { key: "B", text: t`$180$`, correct: false, misconceptionId: "C12-M5", value: "180" },
        { key: "C", text: t`$90$`, correct: true, value: "90" },
        { key: "D", text: t`$195$`, correct: false, misconceptionId: "C12-M1", value: "195" },
      ],
      solution: {
        steps: [
          t`Join any $2$ of the $15$ vertices: $^{15}C_2 = 105$ segments.`,
          t`$15$ of these are sides. Diagonals: $105 - 15 = 90$, which is $\frac{15 \times 12}{2}$.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.6.1 SolvedEx.3(ii)" },
      stem: t`There are $15$ points in a plane. Six of them are collinear, and no other three are collinear. How many straight lines are obtained by joining these points?`,
      verify: { kind: "value", inputs: { n: "15", k: "6" }, params: { kind: "lines" } },
      options: [
        { key: "A", text: t`$181$`, correct: false, misconceptionId: "C12-M1", value: "181" },
        { key: "B", text: t`$90$`, correct: false, misconceptionId: "C12-M2", value: "90" },
        { key: "C", text: t`$105$`, correct: false, misconceptionId: "C12-M3", value: "105" },
        { key: "D", text: t`$91$`, correct: true, value: "91" },
      ],
      solution: {
        steps: [
          t`If no three were collinear: $^{15}C_2 = 105$ lines.`,
          t`The $6$ collinear points give $^6C_2 = 15$ pairs, all on one line: take away $15$, add back $1$.`,
          t`Lines: $105 - 15 + 1 = 91$.`,
        ],
      },
    },
  ],
};
