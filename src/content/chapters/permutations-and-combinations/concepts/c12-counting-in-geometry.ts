import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A hexagon has $6$ corners. **How many diagonals can you draw in it?**`,
    reveal: t`Any $2$ corners can be joined: $^6C_2 = 15$ segments. But $6$ of these are the sides of the hexagon, not diagonals. So there are $15 - 6 = 9$ diagonals. Check by counting: each corner joins $3$ non-neighbours, $6 \times 3 = 18$, and every diagonal was counted from both its ends, so $\frac{18}{2} = 9$.`,
  },
  explanation: {
    intuition: t`A line is fixed by $2$ points and a triangle by $3$, and the order you pick them in changes nothing: line $AB$ is line $BA$. So each count in geometry is a selection, $^nC_r$. Then correct for what the selection gets wrong. Collinear points all lie on one line, so their pairs give only that one line and their triples give no triangle. In a polygon, $n$ of the joined pairs are sides, not diagonals.`,
    formal: t`**Lines and triangles.** From $n$ points with no three collinear: $^nC_2$ lines and $^nC_3$ triangles.

**With $k$ collinear points** (no other three collinear):
$$\text{lines} = {}^nC_2 - {}^kC_2 + 1, \qquad \text{triangles} = {}^nC_3 - {}^kC_3$$
The $^kC_2$ pairs on the line give one line, not $^kC_2$, so take them away and add that $1$ back. Their $^kC_3$ triples give no triangle at all: nothing is added back.

**Diagonals of an $n$-sided polygon.** Join any $2$ vertices, then remove the $n$ sides:
$$^nC_2 - n = \frac{n(n - 3)}{2}$$

**Parallelograms.** When $a$ parallel lines cut $b$ other parallel lines, a parallelogram needs $2$ lines from each set, so there are $^aC_2 \times {}^bC_2$ of them.`,
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
