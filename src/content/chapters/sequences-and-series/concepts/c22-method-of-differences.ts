import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c22: Concept = {
  id: "C22",
  status: "approved",
  hook: {
    prompt: t`Add $\frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \dots + \frac{1}{99 \cdot 100}$ without adding 99 fractions. Is there a shortcut?`,
    reveal: t`Yes: each term is $\frac{1}{r} - \frac{1}{r + 1}$, so almost everything cancels and the sum is $1 - \frac{1}{100} = \frac{99}{100}$.`,
  },
  explanation: {
    intuition: [
      t`Some series have terms that are differences of one expression at neighbouring $r$.`,
      t`Written out, each term's second part cancels the next term's first part.`,
      t`Only the first piece and the last piece survive.`,
      t`This is the **method of differences**, or a **telescoping sum**.`,
    ],
    formal: [
      {
        title: "The method",
        points: [
          t`Write $t_r = f(r) - f(r + 1)$.`,
          t`Then $S_n = f(1) - f(n + 1)$.`,
          t`Partial fractions split products: $\frac{1}{r(r + 1)} = \frac{1}{r} - \frac{1}{r + 1}$.`,
          t`A gap of $k$ brings a factor $\frac{1}{k}$: $\frac{1}{r(r + 2)} = \frac12\left(\frac1r - \frac{1}{r + 2}\right)$.`,
          t`With a gap of 2, two terms survive at each end.`,
        ],
      },
      {
        title: "Other telescopes",
        points: [
          t`Rationalise: $\frac{1}{\sqrt r + \sqrt{r + 1}} = \sqrt{r + 1} - \sqrt r$.`,
          t`Factorials: $r \cdot r! = (r + 1)! - r!$.`,
          t`For a sum to infinity, let $n \to \infty$ in $f(1) - f(n + 1)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\dfrac{1}{2 \cdot 3} + \dfrac{1}{3 \cdot 4} + \dots + \dfrac{1}{9 \cdot 10}$.`,
      steps: [
        t`$\frac{1}{r(r + 1)} = \frac1r - \frac{1}{r + 1}$, for $r = 2$ to $9$.`,
        t`The middle terms cancel: $\frac12 - \frac{1}{10}$.`,
        t`$= \frac{2}{5}$`,
      ],
      answer: t`$\dfrac{2}{5}$`,
    },
    visualSpec: t`A row of terms where each term's tail and the next term's head light up and vanish together.`,
  },
  misconceptions: [
    {
      id: "C22-M1",
      mistake: "Gives the infinite sum.",
      remediation: t`The sum stops at $n$: $1 - \frac{1}{n + 1}$, not 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M2",
      mistake: "Adds the last piece.",
      remediation: t`The last surviving piece is subtracted: $1 - \frac{1}{n + 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M3",
      mistake: t`Ends at $\frac1n$.`,
      remediation: t`The last term $\frac{1}{n(n + 1)}$ leaves $-\frac{1}{n + 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M4",
      mistake: t`Drops the factor $\frac12$.`,
      remediation: t`$\frac{1}{(2r - 1)(2r + 1)} = \frac12\left(\frac{1}{2r - 1} - \frac{1}{2r + 1}\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M5",
      mistake: "Gives the infinite sum.",
      remediation: t`For finitely many terms, $\frac12\left(1 - \frac{1}{2n + 1}\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M6",
      mistake: t`Ends at $2n - 1$.`,
      remediation: t`The last surviving piece is $\frac{1}{2n + 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M7",
      mistake: "Keeps one surviving term.",
      remediation: t`A gap of 2 leaves two terms at the start: $1 + \frac12$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M8",
      mistake: t`Drops the factor $\frac12$.`,
      remediation: t`$\frac{1}{r(r + 2)} = \frac12\left(\frac1r - \frac{1}{r + 2}\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M9",
      mistake: "Copies the r(r + 1) answer.",
      remediation: "A gap of 2 changes both the factor and the survivors.",
      fallback: { kind: "none" },
    },
    {
      id: "C22-M10",
      mistake: t`Ends at $\sqrt n$.`,
      remediation: t`The last term gives $\sqrt{n + 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M11",
      mistake: "Adds the 1.",
      remediation: t`$\sum(\sqrt{r + 1} - \sqrt r) = \sqrt{n + 1} - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M12",
      mistake: "Forgets the 1.",
      remediation: t`The first term leaves $-\sqrt 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M13",
      mistake: "Forgets the minus 1.",
      remediation: t`$\sum((r + 1)! - r!) = (n + 1)! - 1!$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M14",
      mistake: t`Ends at $n!$.`,
      remediation: t`The last term gives $(n + 1)!$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C22-M15",
      mistake: t`Gives $n \cdot n!$.`,
      remediation: t`Telescope: $r \cdot r! = (r + 1)! - r!$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C22-Q1",
      source: { kind: "authored" },
      stem: t`$\dfrac{1}{1 \cdot 2} + \dfrac{1}{2 \cdot 3} + \dots + \dfrac{1}{20 \cdot 21} =$`,
      verify: { kind: "value", inputs: { n: "20" }, params: { q: "pair" } },
      options: [
        { key: "A", text: t`$\frac{22}{21}$`, correct: false, misconceptionId: "C22-M2", value: "22/21" },
        { key: "B", text: t`$\frac{19}{20}$`, correct: false, misconceptionId: "C22-M3", value: "19/20" },
        { key: "C", text: t`$\frac{20}{21}$`, correct: true, value: "20/21" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C22-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`$\sum\left(\frac1r - \frac{1}{r + 1}\right) = 1 - \frac{1}{21}$`,
          t`$= \frac{20}{21}$`,
        ],
      },
    },
    {
      id: "C22-Q2",
      source: { kind: "authored" },
      stem: t`$\dfrac{1}{1 \cdot 3} + \dfrac{1}{3 \cdot 5} + \dots + \dfrac{1}{19 \cdot 21} =$`,
      verify: { kind: "value", inputs: { n: "10" }, params: { q: "odd" } },
      options: [
        { key: "A", text: t`$\frac{20}{21}$`, correct: false, misconceptionId: "C22-M4", value: "20/21" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C22-M5", value: "1/2" },
        { key: "C", text: t`$\frac{10}{19}$`, correct: false, misconceptionId: "C22-M6", value: "10/19" },
        { key: "D", text: t`$\frac{10}{21}$`, correct: true, value: "10/21" },
      ],
      solution: {
        steps: [
          t`$\frac12\left(1 - \frac{1}{21}\right)$`,
          t`$= \frac{10}{21}$`,
        ],
      },
    },
    {
      id: "C22-Q3",
      source: { kind: "authored" },
      stem: t`The sum to infinity $\dfrac{1}{1 \cdot 3} + \dfrac{1}{2 \cdot 4} + \dfrac{1}{3 \cdot 5} + \dots$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "gap2" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C22-M7", value: "1/2" },
        { key: "B", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C22-M8", value: "3/2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C22-M9", value: "1" },
        { key: "D", text: t`$\frac{3}{4}$`, correct: true, value: "3/4" },
      ],
      solution: {
        steps: [
          t`$\frac12\sum\left(\frac1r - \frac{1}{r + 2}\right)$`,
          t`$= \frac12\left(1 + \frac12\right) = \frac34$`,
        ],
      },
    },
    {
      id: "C22-Q4",
      source: { kind: "authored" },
      stem: t`$\displaystyle\sum_{r=1}^{24} \frac{1}{\sqrt r + \sqrt{r + 1}} =$`,
      verify: { kind: "value", inputs: { n: "24" }, params: { q: "roots" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$-1 + 2 \sqrt{6}$`, correct: false, misconceptionId: "C22-M10", value: "-1 + 2*sqrt(6)" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C22-M11", value: "6" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C22-M12", value: "5" },
      ],
      solution: {
        steps: [
          t`Each term is $\sqrt{r + 1} - \sqrt r$.`,
          t`$\sqrt{25} - 1 = 4$`,
        ],
      },
    },
    {
      id: "C22-Q5",
      source: { kind: "authored" },
      stem: t`$1 \cdot 1! + 2 \cdot 2! + 3 \cdot 3! + 4 \cdot 4! + 5 \cdot 5! =$`,
      verify: { kind: "value", inputs: { n: "5" }, params: { q: "fact" } },
      options: [
        { key: "A", text: t`$719$`, correct: true, value: "719" },
        { key: "B", text: t`$720$`, correct: false, misconceptionId: "C22-M13", value: "720" },
        { key: "C", text: t`$119$`, correct: false, misconceptionId: "C22-M14", value: "119" },
        { key: "D", text: t`$600$`, correct: false, misconceptionId: "C22-M15", value: "600" },
      ],
      solution: {
        steps: [
          t`$r \cdot r! = (r + 1)! - r!$`,
          t`$6! - 1! = 719$`,
        ],
      },
    },
  ],
};
