import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`A flyover crosses above a road. Their directions differ, so they are not parallel. **Do they meet?**`,
    reveal: t`No. In space, lines can miss each other without being parallel; such lines are **skew**. One number settles it: the lines lie in one plane exactly when $(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2) = 0$.`,
  },
  explanation: {
    intuition: [
      t`Two lines in space can **meet**, be **parallel**, or do neither.`,
      t`Lines that do neither are **skew**, like a flyover and the road under it.`,
      t`Lines are **coplanar** when one flat sheet, a **plane**, holds both of them.`,
      t`Meeting lines and parallel lines are coplanar; skew lines are not.`,
      t`To test, join a point of one line to a point of the other: that arrow must lie in the same plane.`,
      t`To find where lines meet, make a point of each line equal.`,
    ],
    formal: [
      {
        title: "The coplanarity test",
        points: [
          t`Line 1 passes through $A_1(\vec a_1)$ along $\vec b_1$; line 2 through $A_2(\vec a_2)$ along $\vec b_2$.`,
          t`A plane holding both lines has $\vec b_1\times\vec b_2$ as its **normal**, the direction perpendicular to it.`,
          t`It must also hold the arrow from $A_1$ to $A_2$, which is $\vec a_2 - \vec a_1$.`,
          t`So the lines are coplanar exactly when $(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2) = 0$.`,
          t`This is the scalar triple product $[\vec a_2 - \vec a_1\ \ \vec b_1\ \ \vec b_2]$, a $3\times3$ determinant.`,
          t`It is the top of the shortest-distance formula: for lines that are not parallel, it is $0$ exactly when $d = 0$.`,
        ],
        figure: {
          alt: "Two lines drawn on a flat sheet seen at a slant. Line 1 runs across the sheet through A1 with an arrow b1 along it; line 2 crosses it, through A2 with an arrow b2 along it. Then the sheet appears with an arrow b1 × b2 standing straight up from A1, perpendicular to the sheet. Next an arrow a2 − a1 runs from A1 to A2, lying in the sheet. Last a note: (a2 − a1) · (b1 × b2) = 0.",
          axes: "none",
          view: { x: [-1.4, 6], y: [-1.7, 3.5] },
          elements: [
            { kind: "segment", from: [-0.2, 0.3], to: [4.5, 0.3], step: 1 },
            { kind: "point", at: [0.6, 0.3], step: 1, label: "A₁", labelAt: "sw" },
            { kind: "vector", from: [0.6, 0.3], to: [1.8, 0.3], step: 1 },
            { kind: "label", at: [1.2, 0.3], label: "b₁", labelAt: "s", step: 1 },
            { kind: "segment", from: [1.4, -0.3], to: [4.6, 1.5], step: 1 },
            { kind: "point", at: [3.7, 0.994], step: 1, label: "A₂", labelAt: "nw" },
            { kind: "vector", from: [3.7, 0.994], to: [4.3, 1.331], step: 1 },
            { kind: "label", at: [4, 1.163], label: "b₂", labelAt: "se", step: 1 },
            { kind: "segment", from: [-1, -0.6], to: [4.2, -0.6], tone: "muted", step: 2 },
            { kind: "segment", from: [4.2, -0.6], to: [5.6, 1.7], tone: "muted", step: 2 },
            { kind: "segment", from: [5.6, 1.7], to: [0.4, 1.7], tone: "muted", step: 2 },
            { kind: "segment", from: [0.4, 1.7], to: [-1, -0.6], tone: "muted", step: 2 },
            { kind: "vector", from: [0.6, 0.3], to: [0.6, 2.9], tone: "good", step: 2 },
            { kind: "label", at: [0.6, 2.9], label: "b₁ × b₂", labelAt: "e", tone: "good", step: 2 },
            { kind: "vector", from: [0.6, 0.3], to: [3.7, 0.994], tone: "muted", step: 3 },
            { kind: "label", at: [2.15, 0.647], label: "a₂ − a₁", labelAt: "nw", tone: "muted", step: 3 },
            { kind: "label", at: [2.3, -1], label: "(a₂ − a₁) · (b₁ × b₂) = 0", labelAt: "s", step: 4 },
          ],
        },
      },
      {
        title: "Meet, parallel or skew",
        points: [
          t`The test says only whether the lines are coplanar; check the directions next.`,
          t`If $\vec b_1\times\vec b_2 \ne \vec 0$, the lines are not parallel, so coplanar lines meet at one point.`,
          t`If $\vec b_1\times\vec b_2 = \vec 0$, the lines are parallel, and the triple product is $0$ anyway.`,
          t`Parallel lines that are not the same line never meet, though they are coplanar.`,
          t`If the triple product is not $0$, the lines are skew: not parallel, yet they never meet.`,
        ],
      },
      {
        title: "Finding the meeting point",
        points: [
          t`A meeting point lies on both lines: $\vec a_1 + \lambda\vec b_1 = \vec a_2 + \mu\vec b_2$.`,
          t`Use two different letters: the point is usually a different number of steps along each line.`,
          t`Comparing the $\hat i$, $\hat j$ and $\hat k$ parts gives three equations in $\lambda$ and $\mu$.`,
          t`Solve two of them, then check the third; if it fails, the lines do not meet.`,
          t`Put $\lambda$ into line 1: the point is $\vec a_1 + \lambda\vec b_1$, not just $\lambda\vec b_1$.`,
        ],
      },
      {
        title: "An unknown in the lines",
        points: [
          t`To find $k$ so that the lines meet, set the triple product to $0$ and solve for $k$.`,
          t`Expand $\vec b_1\times\vec b_2$ with care: its $\hat j$ term carries a minus sign.`,
          t`Or equate the parameters: the two equations without $k$ fix $\lambda$ and $\mu$, and the third gives $k$.`,
          t`Put each value back where it belongs: $\lambda$ goes with $\vec b_1$, $\mu$ with $\vec b_2$.`,
          t`Last, reject any $k$ that makes $\vec b_1$ and $\vec b_2$ parallel: those lines never meet.`,
        ],
      },
    ],
    worked: {
      prompt: t`Show that the lines $\vec r = (\hat i + 4\hat j)$ $+ \lambda(\hat i + 2\hat j + 3\hat k)$ and $\vec r = (3\hat j - \hat k)$ $+ \mu(2\hat i + 3\hat j + 4\hat k)$ intersect, and find where.`,
      steps: [
        t`$\vec a_2 - \vec a_1 = -\hat i - \hat j - \hat k$ and $\vec b_1\times\vec b_2 = -\hat i + 2\hat j - \hat k$.`,
        t`Triple product: $(-1)(-1) + (-1)(2) + (-1)(-1)$ $= 0$. Since $\vec b_1\times\vec b_2 \ne \vec 0$, the lines meet.`,
        t`Equate: $1 + \lambda = 2\mu$ and $4 + 2\lambda = 3 + 3\mu$. So $\lambda = 2\mu - 1$, and $\mu = 1$, $\lambda = 1$.`,
        t`Check the $\hat k$ parts: $3\lambda = 3$ and $-1 + 4\mu = 3$. They agree.`,
        t`Put $\lambda = 1$ into line 1: $(1 + 1,\ 4 + 2,\ 0 + 3) = (2, 6, 3)$.`,
      ],
      answer: t`The lines intersect at $(2, 6, 3)$.`,
    },
    visualSpec: t`Drag the second line up and down out of the plane of the first: a readout of $(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2)$ hits $0$ exactly when the lines touch.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Takes $(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2) = 0$ to mean the lines meet, so keeps a value of $k$ that makes them parallel.`,
      remediation: t`A zero triple product means coplanar: the lines meet **or** are parallel. Reject any $k$ that makes $\vec b_1\times\vec b_2 = \vec 0$; parallel lines never meet.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M2",
      mistake: "Assumes two lines that are not parallel must meet, as in a plane; solves two of the three equations and never checks the third.",
      remediation: t`In space, non-parallel lines can be skew. After solving two equations for $\lambda$ and $\mu$, check the third: if it fails, the lines do not meet.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: t`Uses one parameter for both lines, $\vec a_1 + t\vec b_1 = \vec a_2 + t\vec b_2$.`,
      remediation: t`The meeting point is usually a different number of steps along each line, so give the lines different parameters: $\vec a_1 + \lambda\vec b_1 = \vec a_2 + \mu\vec b_2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: t`Solves for $\lambda$ and $\mu$, then puts them back into the wrong lines: $\lambda$ into line 2 and $\mu$ into line 1.`,
      remediation: t`Each parameter belongs to its own line: the point is $\vec a_1 + \lambda\vec b_1$, or equally $\vec a_2 + \mu\vec b_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Expands $\vec b_1\times\vec b_2$ without the minus sign on the $\hat j$ term.`,
      remediation: t`The cross product is $(b_1c_2 - c_1b_2)\hat i - (a_1c_2 - c_1a_2)\hat j$ $+ (a_1b_2 - b_1a_2)\hat k$: the middle term carries a minus sign.`,
      fallback: { kind: "ext", topic: "cross product" },
    },
    {
      id: "C05-M6",
      mistake: t`Finds $\lambda$ correctly but gives the meeting point as $\lambda\vec b_1$, dropping the starting point $\vec a_1$.`,
      remediation: t`The point at parameter $\lambda$ is $\vec a_1 + \lambda\vec b_1$: start at $A_1$, then take $\lambda$ steps of $\vec b_1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C05-M1 shows only when a root of the triple product makes the lines parallel (Q3); C05-M2 only on skew lines (Q5). Elsewhere they give the key.",
    t`C05-M3 and C05-M4 give the key when $\lambda = \mu$, and C05-M6 when $\vec a_1 = \vec 0$: diagnose them with other inputs.`,
    "Q3 is built on Misc I Q.6 with new numbers, so that one root of the triple product gives parallel lines; the book's own lines are never parallel.",
    t`Q6 is Misc A Q.16 i) with the second line's point moved to $(1, -2, 4)$: the book's lines meet at the first line's given point ($\lambda = 0$), so the key could be copied from the stem. Now $\lambda = 1$, $\mu = 2$.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.2 Q.8" },
      stem: t`If the lines $\dfrac{x - 1}{2} = \dfrac{y + 1}{3}$ $= \dfrac{z - 1}{4}$ and $\dfrac{x - 3}{1} = \dfrac{y - k}{2}$ $= \dfrac{z}{1}$ intersect each other, then $k =$`,
      verify: { kind: "value", inputs: { a1: "(1, -1, 1)", b1: "(2, 3, 4)", a2: "(3, k, 0)", b2: "(1, 2, 1)" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$k = - \frac{13}{2}$`, correct: false, misconceptionId: "C05-M5", value: "-13/2" },
        { key: "B", text: t`$k = \frac{9}{2}$`, correct: true, value: "9/2" },
        { key: "C", text: t`$k = 1$`, correct: false, misconceptionId: "C05-M3", value: "1" },
        { key: "D", text: t`$k = -13$`, correct: false, misconceptionId: "C05-M4", value: "-13" },
      ],
      solution: {
        steps: [
          t`Here $\vec a_1 = (1, -1, 1)$, $\vec b_1 = (2, 3, 4)$, $\vec a_2 = (3, k, 0)$, $\vec b_2 = (1, 2, 1)$.`,
          t`$\vec b_1\times\vec b_2 = (3 - 8)\hat i - (2 - 4)\hat j$ $+ (4 - 3)\hat k = -5\hat i + 2\hat j + \hat k$.`,
          t`$\vec a_2 - \vec a_1 = 2\hat i + (k + 1)\hat j - \hat k$, so the triple product is $-10 + 2k + 2 - 1$ $= 2k - 9$.`,
          t`The lines are not parallel, so they meet when $2k - 9 = 0$: $k = \dfrac{9}{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc A Q.17" },
      stem: t`If the lines $\dfrac{x - 1}{2} = \dfrac{y + 1}{3}$ $= \dfrac{z - 1}{4}$ and $\dfrac{x - 2}{1} = \dfrac{y + m}{2}$ $= \dfrac{z - 2}{1}$ intersect each other, then $m =$`,
      verify: { kind: "value", inputs: { a1: "(1, -1, 1)", b1: "(2, 3, 4)", a2: "(2, -m, 2)", b2: "(1, 2, 1)" }, params: { ask: "k" } },
      options: [
        { key: "A", text: t`$m = 0$`, correct: false, misconceptionId: "C05-M3", value: "0" },
        { key: "B", text: t`$m = 4$`, correct: false, misconceptionId: "C05-M4", value: "4" },
        { key: "C", text: t`$m = 3$`, correct: false, misconceptionId: "C05-M5", value: "3" },
        { key: "D", text: t`$m = -1$`, correct: true, value: "-1" },
      ],
      solution: {
        steps: [
          t`Here $\vec a_1 = (1, -1, 1)$, $\vec b_1 = (2, 3, 4)$, $\vec a_2 = (2, -m, 2)$, $\vec b_2 = (1, 2, 1)$.`,
          t`$\vec b_1\times\vec b_2 = -5\hat i + 2\hat j + \hat k$ and $\vec a_2 - \vec a_1 = \hat i + (1 - m)\hat j + \hat k$.`,
          t`Triple product: $-5 + 2(1 - m) + 1$ $= -2 - 2m$.`,
          t`The lines are not parallel, so they meet when $-2 - 2m = 0$: $m = -1$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc I Q.6" },
      stem: t`Find every value of $k$ for which the lines $\dfrac{x - 2}{1} = \dfrac{y - 3}{k}$ $= \dfrac{z - 4}{3}$ and $\dfrac{x}{k} = \dfrac{y}{4} = \dfrac{z - 1}{6}$ intersect.`,
      verify: { kind: "value", inputs: { a1: "(2, 3, 4)", b1: "(1, k, 3)", a2: "(0, 0, 1)", b2: "(k, 4, 6)" }, params: { ask: "kset" } },
      options: [
        { key: "A", text: t`$k = 5$`, correct: true, value: "{5}" },
        { key: "B", text: t`$k = 2$ or $k = 5$`, correct: false, misconceptionId: "C05-M1", value: "{2, 5}" },
        { key: "C", text: t`$k = 3$`, correct: false, misconceptionId: "C05-M3", value: "{3}" },
        { key: "D", text: t`$k = -1$ or $k = 2$`, correct: false, misconceptionId: "C05-M5", value: "{-1, 2}" },
      ],
      solution: {
        steps: [
          t`$\vec b_1 = (1, k, 3)$, $\vec b_2 = (k, 4, 6)$, and $\vec a_2 - \vec a_1 = (-2, -3, -3)$.`,
          t`$\vec b_1\times\vec b_2 = (6k - 12)\hat i + (3k - 6)\hat j$ $+ (4 - k^2)\hat k$.`,
          t`Triple product: $-2(6k - 12) - 3(3k - 6)$ $- 3(4 - k^2) = 3(k - 2)(k - 5)$, zero at $k = 2$ or $5$.`,
          t`At $k = 2$, $\vec b_2 = 2\vec b_1$: the lines are parallel and never meet. So only $k = 5$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/6.3 SolvedEx.16" },
      stem: t`The lines $\vec r = (\hat i + \hat j - \hat k)$ $+ \lambda(2\hat i - 2\hat j + \hat k)$ and $\vec r = (4\hat i - 3\hat j + 2\hat k)$ $+ \mu(\hat i - 2\hat j + 2\hat k)$ intersect at the point`,
      verify: { kind: "value", inputs: { a1: "(1, 1, -1)", b1: "(2, -2, 1)", a2: "(4, -3, 2)", b2: "(1, -2, 2)" }, params: { ask: "point" } },
      options: [
        { key: "A", text: t`$(5, -5, 4)$`, correct: false, misconceptionId: "C05-M4", value: "(5, -5, 4)" },
        { key: "B", text: t`$(2, -2, 1)$`, correct: false, misconceptionId: "C05-M6", value: "(2, -2, 1)" },
        { key: "C", text: t`$(3, -1, 0)$`, correct: true, value: "(3, -1, 0)" },
        { key: "D", text: t`$(7, -5, 2)$`, correct: false, misconceptionId: "C05-M3", value: "(7, -5, 2)" },
      ],
      solution: {
        steps: [
          t`Equate: $1 + 2\lambda = 4 + \mu$, $1 - 2\lambda = -3 - 2\mu$, $-1 + \lambda = 2 + 2\mu$.`,
          t`Add the first two: $2 = 1 - \mu$, so $\mu = -1$ and then $\lambda = 1$.`,
          t`Check the third: $-1 + 1 = 0$ and $2 - 2 = 0$. It holds, so the lines meet.`,
          t`Put $\lambda = 1$ into line 1: $(1 + 2,\ 1 - 2,\ -1 + 1) = (3, -1, 0)$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Ex 6.2 Q.7 i)" },
      stem: t`Do the lines $\vec r = (\hat i - \hat j) + \lambda(2\hat i + \hat k)$ and $\vec r = (2\hat i - \hat j)$ $+ \mu(\hat i + \hat j - \hat k)$ meet? If they do, where?`,
      verify: { kind: "value", inputs: { a1: "(1, -1, 0)", b1: "(2, 0, 1)", a2: "(2, -1, 0)", b2: "(1, 1, -1)" }, params: { ask: "point" } },
      options: [
        { key: "A", text: t`They do not meet`, correct: true, value: "no_meet" },
        { key: "B", text: t`They meet at $(2, -1, \frac{1}{2})$`, correct: false, misconceptionId: "C05-M2", value: "(2, -1, 1/2)" },
        { key: "C", text: t`They meet at $(3, -1, 1)$`, correct: false, misconceptionId: "C05-M3", value: "(3, -1, 1)" },
        { key: "D", text: t`They meet at $(\frac{5}{2}, - \frac{1}{2}, - \frac{1}{2})$`, correct: false, misconceptionId: "C05-M4", value: "(5/2, -1/2, -1/2)" },
      ],
      solution: {
        steps: [
          t`Equate: $1 + 2\lambda = 2 + \mu$, $-1 = -1 + \mu$, $\lambda = -\mu$.`,
          t`The second gives $\mu = 0$; then the first gives $\lambda = \dfrac{1}{2}$.`,
          t`Check the third: $\lambda = \dfrac{1}{2}$ but $-\mu = 0$. It fails, so no point is on both lines.`,
          t`The directions $(2, 0, 1)$ and $(1, 1, -1)$ are not parallel either: the lines are skew and do not meet.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/line-planes-12/Misc A Q.16 i)" },
      stem: t`The lines $\vec r = (\hat i + \hat j - \hat k)$ $+ \lambda(2\hat i - \hat j + \hat k)$ and $\vec r = (\hat i - 2\hat j + 4\hat k)$ $+ \mu(\hat i + \hat j - 2\hat k)$ intersect at the point`,
      verify: { kind: "value", inputs: { a1: "(1, 1, -1)", b1: "(2, -1, 1)", a2: "(1, -2, 4)", b2: "(1, 1, -2)" }, params: { ask: "point" } },
      options: [
        { key: "A", text: t`$(3, 0, 0)$`, correct: true, value: "(3, 0, 0)" },
        { key: "B", text: t`$(1, 1, -1)$`, correct: false, misconceptionId: "C05-M3", value: "(1, 1, -1)" },
        { key: "C", text: t`$(2, -1, 2)$`, correct: false, misconceptionId: "C05-M4", value: "(2, -1, 2)" },
        { key: "D", text: t`$(2, -1, 1)$`, correct: false, misconceptionId: "C05-M6", value: "(2, -1, 1)" },
      ],
      solution: {
        steps: [
          t`Equate: $1 + 2\lambda = 1 + \mu$, $1 - \lambda = -2 + \mu$, $-1 + \lambda = 4 - 2\mu$.`,
          t`Subtract the second from the first: $3\lambda = 3$, so $\lambda = 1$ and then $\mu = 2$.`,
          t`Check the third: $-1 + 1 = 0$ and $4 - 4 = 0$. It holds.`,
          t`Put $\lambda = 1$ into line 1: $(1 + 2,\ 1 - 1,\ -1 + 1) = (3, 0, 0)$.`,
        ],
      },
    },
  ],
};
