import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Is $\sqrt{9} + \sqrt{16}$ equal to $\sqrt{25}$?`,
    reveal: t`No. $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$, but $\sqrt{25} = 5$. Roots do not add like that. Only like surds combine.`,
  },
  explanation: {
    intuition: [
      t`Like surds are surds with the same order and the same number under the root, like $2\sqrt{3}$ and $5\sqrt{3}$.`,
      t`They add just as terms do in algebra: $2x + 5x = 7x$, so $2\sqrt{3} + 5\sqrt{3} = 7\sqrt{3}$.`,
      t`The number in front, the **coefficient**, changes. The root $\sqrt{3}$ stays as it is.`,
      t`Unlike surds, such as $\sqrt{2}$ and $\sqrt{3}$, cannot be joined into one surd.`,
      t`But some surds only look unlike: $\sqrt{8} = 2\sqrt{2}$ is a like surd of $\sqrt{2}$.`,
      t`So first write every surd in simplest form, then add the like ones.`,
    ],
    formal: [
      {
        title: "Adding like surds",
        points: [
          t`To add or subtract like surds, add or subtract their coefficients.`,
          t`$7\sqrt{3} + 29\sqrt{3} = (7 + 29)\sqrt{3}$ $= 36\sqrt{3}$.`,
          t`$7\sqrt{3} - 29\sqrt{3} = (7 - 29)\sqrt{3}$ $= -22\sqrt{3}$. A negative answer is fine.`,
          t`A surd with no number in front has coefficient $1$: $\sqrt{3} = 1\sqrt{3}$.`,
          t`So $4\sqrt{3} + \sqrt{3} = (4 + 1)\sqrt{3}$ $= 5\sqrt{3}$.`,
        ],
      },
      {
        title: "Unlike surds: simplify first",
        points: [
          t`$\sqrt{2} + \sqrt{3}$ is not $\sqrt{5}$: $1.41 + 1.73 = 3.14$, but $\sqrt{5} = 2.24$.`,
          t`So $\sqrt{2} + \sqrt{3}$ stays as it is. It cannot be written as one surd.`,
          t`First write each surd in simplest form: take the largest square factor out of the root.`,
          t`$\sqrt{45} = \sqrt{9 \times 5} = 3\sqrt{5}$ and $\sqrt{80} = \sqrt{16 \times 5} = 4\sqrt{5}$.`,
          t`Now they are like surds: $\sqrt{45} + \sqrt{80}$ $= 3\sqrt{5} + 4\sqrt{5} = 7\sqrt{5}$.`,
        ],
      },
      {
        title: "Signs and fractions",
        points: [
          t`Each sign belongs to the term right after it. A minus changes only that one term.`,
          t`Collect the signed coefficients in one bracket: $13\sqrt{8} + \frac{1}{2}\sqrt{8} - 5\sqrt{8}$.`,
          t`This is $\left(13 + \frac{1}{2} - 5\right)\sqrt{8}$ $= \frac{17}{2}\sqrt{8}$.`,
          t`Write the answer in simplest form: $\sqrt{8} = 2\sqrt{2}$.`,
          t`So $\frac{17}{2}\sqrt{8} = \frac{17}{2} \times 2\sqrt{2}$ $= 17\sqrt{2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Simplify: $3\sqrt{50} - \sqrt{8} + \sqrt{18}$`,
      steps: [
        t`Simplify each surd: $\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2}$.`,
        t`So $3\sqrt{50} = 3 \times 5\sqrt{2} = 15\sqrt{2}$.`,
        t`$\sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}$ and $\sqrt{18} = \sqrt{9 \times 2} = 3\sqrt{2}$.`,
        t`All are like surds: $15\sqrt{2} - 2\sqrt{2} + 3\sqrt{2}$ $= (15 - 2 + 3)\sqrt{2}$.`,
        t`So the answer is $16\sqrt{2}$.`,
      ],
      answer: t`$3\sqrt{50} - \sqrt{8} + \sqrt{18} = 16\sqrt{2}$`,
    },
    visualSpec: t`Drag surd tiles into a tray: tiles with the same root snap into one stack and their coefficients add, while a tile like the square root of 8 first splits into two square root of 2 tiles before it can join.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Treats unlike surds as like: adds the written coefficients and keeps the first term's root (9√5 − 4√5 + √125 = 6√5)",
      remediation: t`Only like surds combine. First write each surd in simplest form, like $\sqrt{125} = 5\sqrt{5}$; then add the coefficients of the like surds.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M2",
      mistake: "Takes the square factor out of the root without taking its root: √125 = √(25 × 5) = 25√5",
      remediation: t`Only the square root of the square factor comes out: $\sqrt{25 \times 5} = \sqrt{25} \times \sqrt{5}$ $= 5\sqrt{5}$, not $25\sqrt{5}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M3",
      mistake: "Carries a minus sign onto every term after it: works a − b + c as a − b − c",
      remediation: t`Each sign belongs only to the term right after it. In $9 - 4 + 5$, the $5$ is added: the bracket is $(9 - 4 + 5)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Adds the numbers under the roots: √a + √b = √(a + b) (√12 + √27 = √39)",
      remediation: t`Roots do not add that way: $\sqrt{9} + \sqrt{16} = 7$, but $\sqrt{25} = 5$. Make the surds like, then add only the coefficients; the root stays the same.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M5",
      mistake: "Reads a surd with no number in front as having coefficient 0, so drops it when collecting like surds",
      remediation: t`A surd with no number in front has coefficient $1$: $\sqrt{3} = 1\sqrt{3}$. Put that $1$ in the bracket with the other coefficients.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Loses the number taken out of the root when simplifying: 7√48 = 7√(16 × 3) becomes 7√3",
      remediation: t`The square factor comes out as its root and multiplies the coefficient: $7\sqrt{48} = 7 \times 4\sqrt{3}$ $= 28\sqrt{3}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  engineNotes: [
    "C07-M1 and C07-M6 agree when the first term is already in simplest form; C07-M3 gives the key when no plus sign follows a minus; C07-M4 is modelled only for sums. Each item uses at most one of a pair that agree on it.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q6(ii)" },
      stem: t`Simplify: $9\sqrt{5} - 4\sqrt{5} + \sqrt{125}$`,
      verify: { kind: "value", inputs: {  }, params: { terms: "9:5,-4:5,1:125" } },
      options: [
        { key: "A", text: t`$30 \sqrt{5}$`, correct: false, misconceptionId: "C07-M2", value: "30*sqrt(5)" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C07-M3", value: "0" },
        { key: "C", text: t`$10 \sqrt{5}$`, correct: true, value: "10*sqrt(5)" },
        { key: "D", text: t`$6 \sqrt{5}$`, correct: false, misconceptionId: "C07-M1", value: "6*sqrt(5)" },
      ],
      solution: {
        steps: [
          t`Simplify $\sqrt{125} = \sqrt{25 \times 5} = 5\sqrt{5}$.`,
          t`Now all are like surds: $9\sqrt{5} - 4\sqrt{5} + 5\sqrt{5}$ $= (9 - 4 + 5)\sqrt{5}$.`,
          t`So the answer is $10\sqrt{5}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q6(iii)" },
      stem: t`Simplify: $7\sqrt{48} - \sqrt{27} - \sqrt{3}$`,
      verify: { kind: "value", inputs: {  }, params: { terms: "7:48,-1:27,-1:3" } },
      options: [
        { key: "A", text: t`$102 \sqrt{3}$`, correct: false, misconceptionId: "C07-M2", value: "102*sqrt(3)" },
        { key: "B", text: t`$25 \sqrt{3}$`, correct: false, misconceptionId: "C07-M5", value: "25*sqrt(3)" },
        { key: "C", text: t`$5 \sqrt{3}$`, correct: false, misconceptionId: "C07-M6", value: "5*sqrt(3)" },
        { key: "D", text: t`$24 \sqrt{3}$`, correct: true, value: "24*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`$\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3}$, so $7\sqrt{48} = 28\sqrt{3}$.`,
          t`$\sqrt{27} = \sqrt{9 \times 3} = 3\sqrt{3}$, and $\sqrt{3} = 1\sqrt{3}$.`,
          t`So $28\sqrt{3} - 3\sqrt{3} - \sqrt{3}$ $= (28 - 3 - 1)\sqrt{3} = 24\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`Simplify: $\sqrt{12} + \sqrt{27}$`,
      verify: { kind: "value", inputs: {  }, params: { terms: "1:12,1:27" } },
      options: [
        { key: "A", text: t`$\sqrt{39}$`, correct: false, misconceptionId: "C07-M4", value: "sqrt(39)" },
        { key: "B", text: t`$5 \sqrt{3}$`, correct: true, value: "5*sqrt(3)" },
        { key: "C", text: t`$4 \sqrt{3}$`, correct: false, misconceptionId: "C07-M1", value: "4*sqrt(3)" },
        { key: "D", text: t`$13 \sqrt{3}$`, correct: false, misconceptionId: "C07-M2", value: "13*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`$\sqrt{12} = \sqrt{4 \times 3} = 2\sqrt{3}$ and $\sqrt{27} = \sqrt{9 \times 3} = 3\sqrt{3}$.`,
          t`They are like surds: $2\sqrt{3} + 3\sqrt{3}$ $= (2 + 3)\sqrt{3}$.`,
          t`So the answer is $5\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q6(iv)" },
      stem: t`Simplify: $\sqrt{7} - \frac{3}{5}\sqrt{7} + \sqrt{28}$`,
      verify: { kind: "value", inputs: {  }, params: { terms: "1:7,-3/5:7,1:28" } },
      options: [
        { key: "A", text: t`$\frac{12}{5}\sqrt{7}$`, correct: true, value: "12*sqrt(7)/5" },
        { key: "B", text: t`$\frac{22}{5}\sqrt{7}$`, correct: false, misconceptionId: "C07-M2", value: "22*sqrt(7)/5" },
        { key: "C", text: t`$-\frac{8}{5}\sqrt{7}$`, correct: false, misconceptionId: "C07-M3", value: "-8*sqrt(7)/5" },
        { key: "D", text: t`$\frac{7}{5}\sqrt{7}$`, correct: false, misconceptionId: "C07-M5", value: "7*sqrt(7)/5" },
      ],
      solution: {
        steps: [
          t`$\sqrt{28} = \sqrt{4 \times 7} = 2\sqrt{7}$, and $\sqrt{7} = 1\sqrt{7}$.`,
          t`So the sum is $\left(1 - \frac{3}{5} + 2\right)\sqrt{7}$.`,
          t`$1 - \frac{3}{5} + 2 = \frac{5 - 3 + 10}{5} = \frac{12}{5}$, so the answer is $\frac{12}{5}\sqrt{7}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q7(iv)" },
      stem: t`Simplify: $4\sqrt{12} - \sqrt{75} - 7\sqrt{48}$`,
      verify: { kind: "value", inputs: {  }, params: { terms: "4:12,-1:75,-7:48" } },
      options: [
        { key: "A", text: t`$- 8 \sqrt{3}$`, correct: false, misconceptionId: "C07-M1", value: "-8*sqrt(3)" },
        { key: "B", text: t`$- 121 \sqrt{3}$`, correct: false, misconceptionId: "C07-M2", value: "-121*sqrt(3)" },
        { key: "C", text: t`$- 4 \sqrt{3}$`, correct: false, misconceptionId: "C07-M6", value: "-4*sqrt(3)" },
        { key: "D", text: t`$- 25 \sqrt{3}$`, correct: true, value: "-25*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`$4\sqrt{12} = 4 \times 2\sqrt{3} = 8\sqrt{3}$ and $\sqrt{75} = \sqrt{25 \times 3} = 5\sqrt{3}$.`,
          t`$7\sqrt{48} = 7 \times 4\sqrt{3} = 28\sqrt{3}$.`,
          t`So $8\sqrt{3} - 5\sqrt{3} - 28\sqrt{3}$ $= (8 - 5 - 28)\sqrt{3} = -25\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/2.3 SolvedEx.4" },
      stem: t`Simplify: $8\sqrt{5} - \sqrt{20} + \sqrt{125}$`,
      verify: { kind: "value", inputs: {  }, params: { terms: "8:5,-1:20,1:125" } },
      options: [
        { key: "A", text: t`$11 \sqrt{5}$`, correct: true, value: "11*sqrt(5)" },
        { key: "B", text: t`$29 \sqrt{5}$`, correct: false, misconceptionId: "C07-M2", value: "29*sqrt(5)" },
        { key: "C", text: t`$\sqrt{5}$`, correct: false, misconceptionId: "C07-M3", value: "sqrt(5)" },
        { key: "D", text: t`$8 \sqrt{5}$`, correct: false, misconceptionId: "C07-M6", value: "8*sqrt(5)" },
      ],
      solution: {
        steps: [
          t`$\sqrt{20} = \sqrt{4 \times 5} = 2\sqrt{5}$ and $\sqrt{125} = \sqrt{25 \times 5} = 5\sqrt{5}$.`,
          t`So $8\sqrt{5} - 2\sqrt{5} + 5\sqrt{5}$ $= (8 - 2 + 5)\sqrt{5}$.`,
          t`So the answer is $11\sqrt{5}$.`,
        ],
      },
    },
  ],
};
