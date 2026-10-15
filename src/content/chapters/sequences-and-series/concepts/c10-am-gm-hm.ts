import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`You drive to a town at $20$ km/h and come back on the same road at $80$ km/h. What is your average speed for the whole trip? **It is not $50$.**`,
    reveal: t`Say the town is $80$ km away: $4$ hours there, $1$ hour back, so $160$ km in $5$ hours, which is $32$ km/h. That is the H.M. of $20$ and $80$: $\frac{2 \times 20 \times 80}{100} = 32$. The A.M. is $50$ and the G.M. is $\sqrt{1600} = 40$, and look: $40^2 = 50 \times 32$.`,
  },
  explanation: {
    intuition: [
      t`A **mean** of two positive numbers $a$ and $b$, here $20$ and $80$, is an average lying between them.`,
      t`Their **arithmetic mean** (A.M.), $A$, is half their sum: $A = 50$.`,
      t`Their **geometric mean** (G.M.), $G$, is the positive number whose square is their product: $G = 40$.`,
      t`Their **harmonic mean** (H.M.), $H$, is the right average for rates, like speeds over equal distances: $H = 32$.`,
      t`Whenever $a \ne b$, the three come in this order: $A > G > H$.`,
      t`And $50, 40, 32$ is a G.P., each term $\frac{4}{5}$ of the one before: in general $G^2 = AH$.`,
    ],
    figure: {
      alt: "A number line from 20 to 80 with a = 20 and b = 80 marked. Between them sit H = 32, G = 40 and A = 50, in that order from left to right, so H < G < A. Then 40² = 50 × 32: G squared equals A times H.",
      axes: "none",
      view: { x: [1.2, 8.8], y: [-1, 1.1] },
      elements: [
        { kind: "segment", from: [1.5, 0], to: [8.5, 0], tone: "muted" },
        { kind: "point", at: [2, 0], label: "a", labelAt: "n", step: 1 },
        { kind: "label", at: [2, 0], label: "20", labelAt: "s", tone: "muted", step: 1 },
        { kind: "point", at: [8, 0], label: "b", labelAt: "n", step: 1 },
        { kind: "label", at: [8, 0], label: "80", labelAt: "s", tone: "muted", step: 1 },
        { kind: "point", at: [5, 0], label: "A", labelAt: "n", tone: "good", step: 2 },
        { kind: "label", at: [5, 0], label: "50", labelAt: "s", tone: "good", step: 2 },
        { kind: "point", at: [4, 0], label: "G", labelAt: "n", tone: "good", step: 3 },
        { kind: "label", at: [4, 0], label: "40", labelAt: "s", tone: "good", step: 3 },
        { kind: "point", at: [3.2, 0], label: "H", labelAt: "n", tone: "good", step: 4 },
        { kind: "label", at: [3.2, 0], label: "32", labelAt: "s", tone: "good", step: 4 },
        { kind: "label", at: [1.4, 0.85], label: "H < G < A", labelAt: "e", tone: "good", step: 5 },
        { kind: "label", at: [8.6, 0.85], label: "40² = 50 × 32", labelAt: "w", tone: "good", step: 6 },
      ],
    },
    formal: [
      {
        title: "The three means",
        points: [
          t`For positive $a$ and $b$, the A.M. is half their sum: $A = \frac{a+b}{2}$.`,
          t`The G.M. is the positive square root of their product: $G = \sqrt{ab}$.`,
          t`The H.M. is $H = \frac{2ab}{a+b}$.`,
          t`Recall: to **flip** a non-zero number $x$ is to take its **reciprocal**, $\frac{1}{x}$.`,
          t`The A.M. of the reciprocals $\frac{1}{a}$ and $\frac{1}{b}$ is $\frac{a+b}{2ab}$.`,
          t`Flip that back and you get $H$: the H.M. is the reciprocal of the A.M. of the reciprocals.`,
        ],
      },
      {
        title: "The link between the means",
        points: [
          t`Multiply $A$ by $H$: $\frac{a+b}{2} \times \frac{2ab}{a+b}$.`,
          t`The $a + b$ and the $2$ cancel, leaving $ab$, which is $G^2$.`,
          t`So $G^2 = AH$.`,
          t`Recall: $x, y, z$ are in G.P. when $\frac{y}{x} = \frac{z}{y}$, that is when $y^2 = xz$.`,
          t`So $A, G, H$ are in G.P., with $G$ in the middle.`,
          t`Know any two of the means, and $G^2 = AH$ gives you the third.`,
        ],
      },
      {
        title: "The order of the means",
        points: [
          t`Subtract: $A - G = \frac{a + b - 2\sqrt{ab}}{2}$.`,
          t`The top is a perfect square, so $A - G = \frac{(\sqrt{a} - \sqrt{b})^2}{2}$.`,
          t`A square is never negative, so $A \ge G$.`,
          t`Divide $G^2 = AH$ by $GH$: $\frac{G}{H} = \frac{A}{G}$.`,
          t`Since $\frac{A}{G} \ge 1$, also $\frac{G}{H} \ge 1$, so $G \ge H$.`,
          t`So $A \ge G \ge H$, and all three are equal only when $a = b$.`,
        ],
      },
      {
        title: "Back to the two numbers",
        points: [
          t`Given two of the means, first find the third with $G^2 = AH$.`,
          t`Once $A$ and $G$ are known, $a + b = 2A$ and $ab = G^2$.`,
          t`Recall: two numbers with sum $s$ and product $p$ are the **roots** (solutions) of $x^2 - sx + p = 0$.`,
          t`So $a$ and $b$ are the roots of $x^2 - 2Ax + G^2 = 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The A.M. of two numbers exceeds their G.M. by $2$ and their H.M. by $\frac{18}{5}$. Find the numbers.`,
      steps: [
        t`Write $G$ and $H$ in terms of $A$: $G = A - 2$ and $H = A - \frac{18}{5}$.`,
        t`Use $G^2 = AH$: $(A - 2)^2$ equals $A\left(A - \frac{18}{5}\right)$, so $A^2 - 4A + 4$ equals $A^2 - \frac{18}{5}A$, which gives $\frac{2}{5}A = 4$, so $A = 10$ and $G = 8$.`,
        t`Now $a + b = 2A = 20$ and $ab = G^2 = 64$, so $a$ and $b$ are the roots of $x^2 - 20x + 64 = 0$, that is $(x - 4)(x - 16) = 0$.`,
        t`Check: $H = \frac{2 \times 64}{20}$, which is $\frac{32}{5}$, and $A - H = 10 - \frac{32}{5}$, which is $\frac{18}{5}$.`,
      ],
      answer: t`The numbers are $4$ and $16$.`,
    },
    visualSpec: t`Drag $a$ and $b$ along a number line and watch $H$, $G$, $A$ move between them, always in the order $H \le G \le A$, with a bar showing $G^2$ and $AH$ staying equal.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Takes the H.M. as (a+b)/(2ab), the A.M. of 1/a and 1/b, and forgets to flip it back",
      remediation: t`The H.M. is the reciprocal of the A.M. of $\frac{1}{a}$ and $\frac{1}{b}$, so flip at the end: $H = \frac{2ab}{a+b}$. It can never be more than $G$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M2",
      mistake: "Uses A = GH in place of G^2 = AH",
      remediation: t`$A, G, H$ are in G.P., so the middle one squared equals the product of the other two: $G^2 = AH$. Check with $1$ and $4$: $A = \frac{5}{2}$, $H = \frac{8}{5}$, and $AH = 4 = G^2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M3",
      mistake: "Drops the square root in the G.M.: takes G = ab, and so G = AH in place of G^2 = AH",
      remediation: t`$G = \sqrt{ab}$: it is the number whose square is $ab$, so the link is $G^2 = AH$. A quick check: the G.M. of two numbers lies between them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Treats the two given means as if they were the two numbers, and takes the asked mean of them",
      remediation: t`The given means belong to two unknown numbers; they are not the numbers. Join them with $G^2 = AH$, and check the order $A \ge G \ge H$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C10-M4 gives the key on a find-the-G.M. item (the G.M. of A and H is G, since G^2 = AH), and has no model on the means-of-two-numbers and which-is-not-true items. Draw it from a find-A or find-H item.",
    "Finding the two numbers from A - G and A - H (or G - H) is taught in the worked example only: no modelled misconception gives a clean wrong pair there, so it has no check item.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.6.3 SolvedEx.1" },
      stem: t`The A.M., G.M. and H.M. of $3$ and $27$, written as $(A, G, H)$, are:`,
      verify: { kind: "value", inputs: { a: "3", b: "27" }, params: { ask: "means" } },
      options: [
        { key: "A", text: t`$(15, 9, \frac{5}{27})$`, correct: false, misconceptionId: "C10-M1", value: "(15, 9, 5/27)" },
        { key: "B", text: t`$(15, 9, \frac{5}{3})$`, correct: false, misconceptionId: "C10-M2", value: "(15, 9, 5/3)" },
        { key: "C", text: t`$(15, 81, \frac{27}{5})$`, correct: false, misconceptionId: "C10-M3", value: "(15, 81, 27/5)" },
        { key: "D", text: t`$(15, 9, \frac{27}{5})$`, correct: true, value: "(15, 9, 27/5)" },
      ],
      solution: {
        steps: [
          t`$A = \frac{3 + 27}{2} = 15$ and $G = \sqrt{3 \times 27} = \sqrt{81} = 9$.`,
          t`$H = \frac{2 \times 3 \times 27}{3 + 27} = \frac{162}{30} = \frac{27}{5}$.`,
          t`Check: $AH = 15 \times \frac{27}{5} = 81 = G^2$. So $(A, G, H) = \left(15, 9, \frac{27}{5}\right)$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc I Q9" },
      stem: t`$A$, $G$ and $H$ are the A.M., G.M. and H.M. of $a$ and $b$, where $a, b > 0$. Which of the following is **not** true?`,
      verify: { kind: "value", inputs: { a: "a", b: "b" }, params: { ask: "false" } },
      options: [
        { key: "A", text: t`$A = GH$`, correct: true, value: "A_GH" },
        { key: "B", text: t`$H = \frac{2ab}{a+b}$`, correct: false, misconceptionId: "C10-M1", value: "H_def" },
        { key: "C", text: t`$G^2 = AH$`, correct: false, misconceptionId: "C10-M2", value: "G2_AH" },
        { key: "D", text: t`$G = \sqrt{ab}$`, correct: false, misconceptionId: "C10-M3", value: "G_def" },
      ],
      solution: {
        steps: [
          t`$A = \frac{a+b}{2}$, $G = \sqrt{ab}$ and $H = \frac{2ab}{a+b}$ are the definitions, so those are true.`,
          t`$AH = \frac{a+b}{2} \times \frac{2ab}{a+b} = ab = G^2$, so $G^2 = AH$ is true.`,
          t`$A = GH$ fails: with $a = 1$, $b = 4$, $A = \frac{5}{2}$ but $GH = 2 \times \frac{8}{5} = \frac{16}{5}$. So $A = GH$ is not true.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q3" },
      stem: t`The G.M. and H.M. of two positive numbers are $4$ and $\frac{16}{5}$. Their A.M. is:`,
      verify: { kind: "value", inputs: { G: "4", H: "16/5" }, params: { ask: "A" } },
      options: [
        { key: "A", text: t`$\frac{18}{5}$`, correct: false, misconceptionId: "C10-M4", value: "18/5" },
        { key: "B", text: t`$5$`, correct: true, value: "5" },
        { key: "C", text: t`$\frac{64}{5}$`, correct: false, misconceptionId: "C10-M2", value: "64/5" },
        { key: "D", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C10-M3", value: "5/4" },
      ],
      solution: {
        steps: [
          t`Use $G^2 = AH$: $4^2 = A \times \frac{16}{5}$.`,
          t`$A = 16 \times \frac{5}{16} = 5$. It is larger than $G = 4$, as it must be.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q4" },
      stem: t`The A.M. and G.M. of two positive numbers are $\frac{15}{2}$ and $6$. Their H.M. is:`,
      verify: { kind: "value", inputs: { A: "15/2", G: "6" }, params: { ask: "H" } },
      options: [
        { key: "A", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C10-M2", value: "5/4" },
        { key: "B", text: t`$\frac{20}{3}$`, correct: false, misconceptionId: "C10-M4", value: "20/3" },
        { key: "C", text: t`$\frac{24}{5}$`, correct: true, value: "24/5" },
        { key: "D", text: t`$\frac{5}{24}$`, correct: false, misconceptionId: "C10-M1", value: "5/24" },
      ],
      solution: {
        steps: [
          t`Use $G^2 = AH$: $6^2 = \frac{15}{2} \times H$.`,
          t`$H = 36 \times \frac{2}{15} = \frac{24}{5}$. It is smaller than $G = 6$, as it must be.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q5" },
      stem: t`The A.M. and H.M. of two positive numbers are $75$ and $48$. Their G.M. is:`,
      verify: { kind: "value", inputs: { A: "75", H: "48" }, params: { ask: "G" } },
      options: [
        { key: "A", text: t`$60$`, correct: true, value: "60" },
        { key: "B", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C10-M1", value: "5/4" },
        { key: "C", text: t`$\frac{25}{16}$`, correct: false, misconceptionId: "C10-M2", value: "25/16" },
        { key: "D", text: t`$3600$`, correct: false, misconceptionId: "C10-M3", value: "3600" },
      ],
      solution: {
        steps: [
          t`Use $G^2 = AH$: $G^2 = 75 \times 48 = 3600$.`,
          t`$G = \sqrt{3600} = 60$, which lies between $H = 48$ and $A = 75$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q4" },
      stem: t`The A.M. and G.M. of two positive numbers are $13$ and $12$. Their H.M. is:`,
      verify: { kind: "value", inputs: { A: "13", G: "12" }, params: { ask: "H" } },
      options: [
        { key: "A", text: t`$\frac{144}{13}$`, correct: true, value: "144/13" },
        { key: "B", text: t`$\frac{13}{144}$`, correct: false, misconceptionId: "C10-M1", value: "13/144" },
        { key: "C", text: t`$\frac{12}{13}$`, correct: false, misconceptionId: "C10-M3", value: "12/13" },
        { key: "D", text: t`$\frac{312}{25}$`, correct: false, misconceptionId: "C10-M4", value: "312/25" },
      ],
      solution: {
        steps: [
          t`Use $G^2 = AH$: $12^2 = 13 \times H$.`,
          t`$H = \frac{144}{13}$, a little less than $G = 12$, as it must be.`,
        ],
      },
    },
  ],
};
