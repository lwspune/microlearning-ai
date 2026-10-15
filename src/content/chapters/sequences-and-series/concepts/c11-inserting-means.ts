import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Put $4$ numbers between $2$ and $22$ so that all six are in A.P. **Is the common difference $\frac{22 - 2}{4} = 5$?**`,
    reveal: t`No. With $d = 5$ the numbers are $7, 12, 17, 22$: the last one lands on $22$ itself. Six terms have only five gaps, so $d = \frac{20}{5} = 4$ and the numbers are $6, 10, 14, 18$. Counting the terms right is the whole trick of inserting means.`,
  },
  explanation: {
    intuition: [
      t`To **insert** $k$ numbers between $a$ and $b$ is to fit them in so that $a$, the new numbers and $b$ form one progression.`,
      t`The inserted numbers are called **means**: **arithmetic means** for an A.P., **geometric** for a G.P., **harmonic** for an H.P.`,
      t`For example, three arithmetic means between $2$ and $18$ are $6$, $10$ and $14$.`,
      t`The $3$ means and the $2$ ends make $5$ terms, $t_1$ to $t_5$.`,
      t`Five terms have only $4$ **gaps**, the steps from one term to the next, so $d = \frac{16}{4} = 4$.`,
      t`In general, $k$ means make $k + 2$ terms and $k + 1$ gaps, so $b$ is the term $t_{k+2}$.`,
    ],
    figure: {
      alt: "A number line with the ends a = 2 and b = 18 marked. Three arithmetic means, 6, 10 and 14, are marked between them, and the five numbers are labelled t₁ to t₅. A hop labelled +4 joins each number to the next: four hops, one for each gap, take 2 to 18.",
      axes: "none",
      view: { x: [0.4, 19.6], y: [-2.6, 3] },
      elements: [
        { kind: "segment", from: [0.8, 0], to: [19.2, 0], tone: "muted" },
        { kind: "point", at: [2, 0], label: "a = 2", labelAt: "s", step: 1 },
        { kind: "point", at: [18, 0], label: "b = 18", labelAt: "s", step: 1 },
        ...[6, 10, 14].map((x): FigureElement => ({ kind: "point", at: [x, 0], label: String(x), labelAt: "s", tone: "good", step: 3 })),
        ...["t₁", "t₂", "t₃", "t₄", "t₅"].map((label, i): FigureElement => ({
          kind: "label", at: [2 + 4 * i, -1.5], label, labelAt: "s", tone: "muted", step: 4,
        })),
        ...[4, 8, 12, 16].flatMap((x): FigureElement[] => [
          { kind: "arc", centre: [x, 0], r: 2, from: 0, to: 180, step: 5 },
          { kind: "label", at: [x, 2], label: "+4", labelAt: "n", step: 5 },
        ]),
      ],
    },
    formal: [
      {
        title: "Count the terms",
        points: [
          t`Call the inserted numbers $x_1, x_2, \ldots, x_k$.`,
          t`The list $a, x_1, \ldots, x_k, b$ then has $k + 2$ terms.`,
          t`So $b$ is the last term, $t_{k+2}$.`,
          t`Recall: $t_n$ is $a + (n - 1)d$ in an A.P. and $ar^{n-1}$ in a G.P.`,
          t`For $b = t_{k+2}$, that $n - 1$ is $k + 1$: one for each gap.`,
        ],
      },
      {
        title: "Inserting arithmetic means",
        points: [
          t`For A.M.s, the list from $a$ to $b$ is an A.P. with first term $a$.`,
          t`Its last term gives $b = a + (k + 1)d$.`,
          t`So the common difference is $d = \frac{b - a}{k + 1}$.`,
          t`The means are $a + d, a + 2d, \ldots, a + kd$.`,
        ],
      },
      {
        title: "Inserting geometric means",
        points: [
          t`For G.M.s, the list from $a$ to $b$ is a G.P. with first term $a$.`,
          t`Its last term gives $b = ar^{k+1}$.`,
          t`So the common ratio solves $r^{k+1} = \frac{b}{a}$.`,
          t`The means are $ar, ar^2, \ldots, ar^k$.`,
          t`When $k + 1$ is odd, a negative $\frac{b}{a}$ gives a negative $r$.`,
        ],
      },
      {
        title: "Inserting harmonic means",
        points: [
          t`For H.M.s, the list $a, H_1, \ldots, H_k, b$ is an H.P.`,
          t`Recall: then the reciprocals, from $\frac{1}{a}$ to $\frac{1}{b}$, form an A.P.`,
          t`So insert $k$ A.M.s between $\frac{1}{a}$ and $\frac{1}{b}$.`,
          t`Those A.M.s are $\frac{1}{H_1}, \ldots, \frac{1}{H_k}$, not the H.M.s themselves.`,
          t`Take the reciprocal of each one: those are the H.M.s.`,
        ],
      },
      {
        title: "Check the last step",
        points: [
          t`In an A.P., one more step $d$ after the last mean must land exactly on $b$.`,
          t`In a G.P., one more factor $r$ after the last mean must land exactly on $b$.`,
          t`If the last mean you found is $b$ itself, you counted one term too few.`,
        ],
      },
    ],
    worked: {
      prompt: t`Insert two numbers between $1$ and $-27$ so that the resulting sequence is a G.P.`,
      steps: [
        t`Call them $G_1$ and $G_2$. Then $1, G_1, G_2, -27$ is a G.P. with $4$ terms: $a = 1$ and $t_4 = -27$.`,
        t`$t_4 = ar^3$, so $r^3 = -27$ and $r = -3$. A cube root of a negative number is negative.`,
        t`$G_1 = ar = -3$ and $G_2 = ar^2 = 9$. Check: $9 \times (-3) = -27$, the last term.`,
      ],
      answer: t`$-3$ and $9$: the G.P. is $1, -3, 9, -27$.`,
    },
    visualSpec: t`Drag $k$ to change how many numbers sit between $a$ and $b$ on a number line; the $k + 1$ gaps resize together (equal steps for an A.P., equal ratios for a G.P.) and the value of $d$ or $r$ updates.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Counting k + 1 terms instead of k + 2: taking b as t_(k+1), so d = (b - a)/k or r^k = b/a",
      remediation: t`The $k$ inserted numbers plus the two ends make $k + 2$ terms, so $b = a + (k + 1)d$ or $b = ar^{k+1}$. Quick check: your last inserted number must not be $b$ itself.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C11-M2",
      mistake: "Using the number of terms as the power: b = ar^(k+2) or b = a + (k+2)d",
      remediation: t`In $t_n = ar^{n-1}$ (or $a + (n - 1)d$) the power is one less than the term number. $b$ is $t_{k+2}$, so $b = ar^{k+1}$ (or $a + (k + 1)d$).`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C11-M3",
      mistake: "H.P.: finding the A.P. of reciprocals and giving its middle terms without flipping them back",
      remediation: t`The A.P. is made of the reciprocals $\frac{1}{H_1}, \frac{1}{H_2}, \ldots$. Once you have its middle terms, take their reciprocals: those are the numbers in the H.P.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M4",
      mistake: "Treating every mean as an arithmetic mean: inserting equally spaced numbers between a and b for a G.P. or an H.P.",
      remediation: t`Equal steps make only an A.P. In a G.P. each term is $r$ times the one before, so use $b = ar^{k+1}$. For an H.P., insert A.M.s between $\frac{1}{a}$ and $\frac{1}{b}$, then flip back.`,
      fallback: { kind: "concept", id: "C10" },
    },
  ],
  engineNotes: [
    "C11-M3 has a model only for H.P. items, and C11-M4 only for G.P. and H.P. items (on an A.P. item it gives the key).",
    "C11-M1 and C11-M2 have no real value on a G.P. item whose b/a is negative with an even power (e.g. 1 and -27): draw them from items with b/a > 0.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.6.3 SolvedEx.4" },
      stem: t`Insert two numbers between $1$ and $27$ so that the resulting sequence is a G.P. The two numbers are:`,
      verify: { kind: "value", inputs: { a: "1", b: "27", k: "2" }, params: { kind: "gp" } },
      options: [
        { key: "A", text: t`$3$ and $9$`, correct: true, value: "(3, 9)" },
        { key: "B", text: t`$3 \sqrt{3}$ and $27$`, correct: false, misconceptionId: "C11-M1", value: "(3*sqrt(3), 27)" },
        { key: "C", text: t`$\sqrt[4]{27}$ and $3 \sqrt{3}$`, correct: false, misconceptionId: "C11-M2", value: "(3**(3/4), 3*sqrt(3))" },
        { key: "D", text: t`$\frac{29}{3}$ and $\frac{55}{3}$`, correct: false, misconceptionId: "C11-M4", value: "(29/3, 55/3)" },
      ],
      solution: {
        steps: [
          t`$1, G_1, G_2, 27$ is a G.P. with $4$ terms: $a = 1$ and $t_4 = ar^3 = 27$.`,
          t`$r^3 = 27$, so $r = 3$.`,
          t`$G_1 = ar = 3$ and $G_2 = ar^2 = 9$. Check: $9 \times 3 = 27$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q27" },
      stem: t`Which two numbers can be inserted between $5$ and $40$ so that the resulting sequence is a G.P.?`,
      verify: { kind: "value", inputs: { a: "5", b: "40", k: "2" }, params: { kind: "gp" } },
      options: [
        { key: "A", text: t`$5\sqrt[4]{8}$ and $10 \sqrt{2}$`, correct: false, misconceptionId: "C11-M2", value: "(5*2**(3/4), 10*sqrt(2))" },
        { key: "B", text: t`$\frac{50}{3}$ and $\frac{85}{3}$`, correct: false, misconceptionId: "C11-M4", value: "(50/3, 85/3)" },
        { key: "C", text: t`$10$ and $20$`, correct: true, value: "(10, 20)" },
        { key: "D", text: t`$10 \sqrt{2}$ and $40$`, correct: false, misconceptionId: "C11-M1", value: "(10*sqrt(2), 40)" },
      ],
      solution: {
        steps: [
          t`$5, G_1, G_2, 40$ is a G.P. with $4$ terms: $a = 5$ and $t_4 = 5r^3 = 40$.`,
          t`$r^3 = 8$, so $r = 2$.`,
          t`$G_1 = 5 \times 2 = 10$ and $G_2 = 10 \times 2 = 20$. Check: $20 \times 2 = 40$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q6" },
      stem: t`Insert two numbers between $\frac{1}{4}$ and $\frac{1}{3}$ so that the resulting sequence is an H.P. The two numbers are:`,
      verify: { kind: "value", inputs: { a: "1/4", b: "1/3", k: "2" }, params: { kind: "hp" } },
      options: [
        { key: "A", text: t`$\frac{2}{7}$ and $\frac{1}{3}$`, correct: false, misconceptionId: "C11-M1", value: "(2/7, 1/3)" },
        { key: "B", text: t`$\frac{11}{3}$ and $\frac{10}{3}$`, correct: false, misconceptionId: "C11-M3", value: "(11/3, 10/3)" },
        { key: "C", text: t`$\frac{5}{18}$ and $\frac{11}{36}$`, correct: false, misconceptionId: "C11-M4", value: "(5/18, 11/36)" },
        { key: "D", text: t`$\frac{3}{11}$ and $\frac{3}{10}$`, correct: true, value: "(3/11, 3/10)" },
      ],
      solution: {
        steps: [
          t`If $\frac{1}{4}, H_1, H_2, \frac{1}{3}$ is an H.P., then $4, \frac{1}{H_1}, \frac{1}{H_2}, 3$ is an A.P. with $4$ terms.`,
          t`$t_4 = 4 + 3d = 3$, so $d = -\frac{1}{3}$. The middle terms are $\frac{11}{3}$ and $\frac{10}{3}$.`,
          t`Flip them back: $H_1 = \frac{3}{11}$ and $H_2 = \frac{3}{10}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`Three harmonic means are inserted between $\frac{1}{2}$ and $\frac{1}{10}$, so that $\frac{1}{2}, H_1, H_2, H_3, \frac{1}{10}$ is an H.P. Then $(H_1, H_2, H_3)$ is:`,
      verify: { kind: "value", inputs: { a: "1/2", b: "1/10", k: "3" }, params: { kind: "hp" } },
      options: [
        { key: "A", text: t`$(\frac{5}{18}, \frac{5}{26}, \frac{5}{34})$`, correct: false, misconceptionId: "C11-M2", value: "(5/18, 5/26, 5/34)" },
        { key: "B", text: t`$(4, 6, 8)$`, correct: false, misconceptionId: "C11-M3", value: "(4, 6, 8)" },
        { key: "C", text: t`$(\frac{1}{4}, \frac{1}{6}, \frac{1}{8})$`, correct: true, value: "(1/4, 1/6, 1/8)" },
        { key: "D", text: t`$(\frac{3}{14}, \frac{3}{22}, \frac{1}{10})$`, correct: false, misconceptionId: "C11-M1", value: "(3/14, 3/22, 1/10)" },
      ],
      solution: {
        steps: [
          t`Take reciprocals: $2, \frac{1}{H_1}, \frac{1}{H_2}, \frac{1}{H_3}, 10$ is an A.P. with $5$ terms.`,
          t`$t_5 = 2 + 4d = 10$, so $d = 2$. The middle terms are $4, 6, 8$.`,
          t`Flip them back: $(H_1, H_2, H_3) = \left(\frac{1}{4}, \frac{1}{6}, \frac{1}{8}\right)$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`Two geometric means $G_1$ and $G_2$ are inserted between $3$ and $192$, so that $3, G_1, G_2, 192$ is a G.P. Then $(G_1, G_2)$ is:`,
      verify: { kind: "value", inputs: { a: "3", b: "192", k: "2" }, params: { kind: "gp" } },
      options: [
        { key: "A", text: t`$(24, 192)$`, correct: false, misconceptionId: "C11-M1", value: "(24, 192)" },
        { key: "B", text: t`$(6 \sqrt{2}, 24)$`, correct: false, misconceptionId: "C11-M2", value: "(6*sqrt(2), 24)" },
        { key: "C", text: t`$(66, 129)$`, correct: false, misconceptionId: "C11-M4", value: "(66, 129)" },
        { key: "D", text: t`$(12, 48)$`, correct: true, value: "(12, 48)" },
      ],
      solution: {
        steps: [
          t`$3, G_1, G_2, 192$ has $4$ terms: $a = 3$ and $t_4 = 3r^3 = 192$.`,
          t`$r^3 = 64$, so $r = 4$.`,
          t`$G_1 = 3 \times 4 = 12$ and $G_2 = 12 \times 4 = 48$. Check: $48 \times 4 = 192$. So $(G_1, G_2) = (12, 48)$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.6.3 SolvedEx.3" },
      stem: t`Insert two numbers between $\frac{2}{9}$ and $\frac{1}{12}$ so that the resulting sequence is an H.P. The two numbers are:`,
      verify: { kind: "value", inputs: { a: "2/9", b: "1/12", k: "2" }, params: { kind: "hp" } },
      options: [
        { key: "A", text: t`$\frac{19}{108}$ and $\frac{7}{54}$`, correct: false, misconceptionId: "C11-M4", value: "(19/108, 7/54)" },
        { key: "B", text: t`$\frac{1}{7}$ and $\frac{2}{19}$`, correct: true, value: "(1/7, 2/19)" },
        { key: "C", text: t`$\frac{8}{51}$ and $\frac{4}{33}$`, correct: false, misconceptionId: "C11-M2", value: "(8/51, 4/33)" },
        { key: "D", text: t`$7$ and $\frac{19}{2}$`, correct: false, misconceptionId: "C11-M3", value: "(7, 19/2)" },
      ],
      solution: {
        steps: [
          t`If $\frac{2}{9}, H_1, H_2, \frac{1}{12}$ is an H.P., then $\frac{9}{2}, \frac{1}{H_1}, \frac{1}{H_2}, 12$ is an A.P. with $4$ terms.`,
          t`$t_4 = \frac{9}{2} + 3d = 12$, so $3d = \frac{15}{2}$ and $d = \frac{5}{2}$. The middle terms are $7$ and $\frac{19}{2}$.`,
          t`Flip them back: $H_1 = \frac{1}{7}$ and $H_2 = \frac{2}{19}$.`,
        ],
      },
    },
  ],
};
