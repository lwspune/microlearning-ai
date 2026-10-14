import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`$1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \ldots$ goes on for ever. **Can an endless sum be a finite number?**`,
    reveal: t`Yes. The running totals are $1, 1.5, 1.75, 1.875, \ldots$: each new term fills half of the gap that is left to $2$. The gap shrinks to nothing, so the sum is exactly $2$. But $1 + 2 + 4 + 8 + \ldots$ grows past every number, so it has no sum. The ratio decides which one you get.`,
  },
  explanation: {
    intuition: t`Adding for ever can still give a finite total if the terms shrink fast enough. In a G.P. with $|r| < 1$, every term is the same fraction of the one before, so the terms die away and the running totals $S_n$ settle on one number: the sum to infinity, $S_\infty$. When $|r| \ge 1$ the terms never shrink, so the totals either grow without limit or keep jumping about, and there is no sum. A negative $r$ is fine: the terms change sign, so the totals swing above and below the limit, but the swings shrink and close in on it.`,
    formal: t`**Where the formula comes from.** $S_n = \frac{a(1 - r^n)}{1 - r}$. If $|r| < 1$, then $r^n \to 0$ as $n$ grows (for example $0.5^{10} < 0.001$), so $S_n \to \frac{a}{1 - r}$.

**The rule.** $$S_\infty = \frac{a}{1 - r}, \qquad \text{only when } |r| < 1, \text{ that is } -1 < r < 1.$$

**No sum when $|r| \ge 1$.** For $r = 1$ the terms are $a, a, a, \ldots$; for $r = -1$ the totals jump between $a$ and $0$; for $|r| > 1$ the terms grow. Always check $|r|$ **first**.

**Keep the sign of $r$.** For $r = -\frac{1}{4}$: $1 - r = 1 + \frac{1}{4} = \frac{5}{4}$. In $\sum_{k=1}^{\infty} c\,q^k$ the first term is the $k = 1$ term, $cq$, and the ratio is $q$.

**Finding $a$ or $r$.** From $S_\infty = \frac{a}{1 - r}$: $a = S_\infty(1 - r)$ and $r = 1 - \frac{a}{S_\infty}$. Then check that $|r| < 1$.`,
    worked: {
      prompt: t`Does the sum to infinity of $\frac{3}{5}, -\frac{9}{25}, \frac{27}{125}, -\frac{81}{625}, \ldots$ exist? If it does, find it.`,
      steps: [
        t`First term $a = \frac{3}{5}$. Ratio $r = \frac{-9/25}{3/5} = -\frac{3}{5}$.`,
        t`Check: $|r| = \frac{3}{5} < 1$, so the sum to infinity exists, even though the terms change sign.`,
        t`Keep the sign: $1 - r = 1 - \left(-\frac{3}{5}\right) = \frac{8}{5}$.`,
        t`$S_\infty = \frac{a}{1 - r} = \frac{3/5}{8/5} = \frac{3}{8}$.`,
      ],
      answer: t`It exists: $S_\infty = \frac{3}{8}$.`,
    },
    visualSpec: t`Drag $r$ from $-1.5$ to $1.5$: bars for $S_1, S_2, S_3, \ldots$ close in on the line $\frac{a}{1 - r}$ when $|r| < 1$ (from below for positive $r$, zigzagging for negative $r$), and run off or keep jumping when $|r| \ge 1$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Believes a sum to infinity exists only for 0 < r < 1, so a G.P. with a negative ratio has no sum",
      remediation: t`The condition is $|r| < 1$, that is $-1 < r < 1$. A negative ratio such as $-\frac{1}{4}$ still makes the terms shrink, so the sum exists and $S_\infty = \frac{a}{1 - r}$.`,
      fallback: { kind: "ext", topic: "modulus inequalities" },
    },
    {
      id: "C07-M2",
      mistake: "Uses S = a/(1 - r) without first checking |r| < 1",
      remediation: t`Check $|r| < 1$ before you use $\frac{a}{1 - r}$. When $|r| \ge 1$ the terms do not shrink, the totals $S_n$ never settle, and there is no sum to infinity.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Drops the minus sign of a negative ratio: works out 1 - r as 1 - |r|",
      remediation: t`Put $r$ in with its sign: for $r = -\frac{1}{4}$, $1 - r = 1 + \frac{1}{4} = \frac{5}{4}$. And check $|r| < 1$ before you use the formula at all.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Turns the formula over: S = a/(r - 1), from the S_n form a(r^n - 1)/(r - 1) with r^n dropped",
      remediation: t`Start from $S_n = \frac{a(1 - r^n)}{1 - r}$. When $|r| < 1$, $r^n \to 0$ and this gives $S_\infty = \frac{a}{1 - r}$, with $1 - r$ in the denominator.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    "C07-M1 differs from the key only when -1 < r < 0 (on a find-a item it gives 'No such G.P. exists'); draw it from an item with a negative ratio.",
    "C07-M2 differs from the key only when |r| >= 1; C07-M3 only when r < 0. On an item with no sum (C07-Q2), C07-M3 and C07-M4 also skip the |r| check.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc I Q7" },
      stem: t`The sum to infinity of the G.P. $5, -\frac{5}{2}, \frac{5}{4}, -\frac{5}{8}, \frac{5}{16}, \ldots$ is:`,
      verify: { kind: "value", inputs: { c: "5", q: "-1/2", s: "0" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C07-M3", value: "10" },
        { key: "B", text: t`$- \frac{10}{3}$`, correct: false, misconceptionId: "C07-M4", value: "-10/3" },
        { key: "C", text: t`$\frac{10}{3}$`, correct: true, value: "10/3" },
        { key: "D", text: t`No finite sum`, correct: false, misconceptionId: "C07-M1", value: "no_finite_sum" },
      ],
      solution: {
        steps: [
          t`$a = 5$ and $r = \frac{-5/2}{5} = -\frac{1}{2}$.`,
          t`$|r| = \frac{1}{2} < 1$, so the sum to infinity exists.`,
          t`$S_\infty = \frac{5}{1 - \left(-\frac{1}{2}\right)} = \frac{5}{3/2} = \frac{10}{3}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q1(iv)" },
      stem: t`The sum to infinity of the G.P. $\frac{1}{5}, -\frac{2}{5}, \frac{4}{5}, -\frac{8}{5}, \frac{16}{5}, \ldots$ is:`,
      verify: { kind: "value", inputs: { c: "1/5", q: "-2", s: "0" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{1}{15}$`, correct: false, misconceptionId: "C07-M2", value: "1/15" },
        { key: "B", text: t`$- \frac{1}{5}$`, correct: false, misconceptionId: "C07-M3", value: "-1/5" },
        { key: "C", text: t`$- \frac{1}{15}$`, correct: false, misconceptionId: "C07-M4", value: "-1/15" },
        { key: "D", text: t`No finite sum`, correct: true, value: "no_finite_sum" },
      ],
      solution: {
        steps: [
          t`$a = \frac{1}{5}$ and $r = \frac{-2/5}{1/5} = -2$.`,
          t`$|r| = 2 \ge 1$: the terms double in size, so the totals swing further and further and never settle.`,
          t`So $\frac{a}{1 - r}$ does not apply: the G.P. has no finite sum.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q6(ii)" },
      stem: t`The value of $\sum_{k=1}^{\infty} \left(-\frac{1}{3}\right)^{k}$ is:`,
      verify: { kind: "value", inputs: { c: "1", q: "-1/3", s: "1" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}$`, correct: false, misconceptionId: "C07-M4", value: "1/4" },
        { key: "B", text: t`$- \frac{1}{4}$`, correct: true, value: "-1/4" },
        { key: "C", text: t`No finite sum`, correct: false, misconceptionId: "C07-M1", value: "no_finite_sum" },
        { key: "D", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C07-M3", value: "-1/2" },
      ],
      solution: {
        steps: [
          t`The sum starts at $k = 1$, so the first term is $a = \left(-\frac{1}{3}\right)^1 = -\frac{1}{3}$, and the ratio is $r = -\frac{1}{3}$.`,
          t`$|r| = \frac{1}{3} < 1$, so the sum exists.`,
          t`$S_\infty = \frac{-1/3}{1 + 1/3} = \frac{-1/3}{4/3} = -\frac{1}{4}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q6(iii)" },
      stem: t`The value of $\sum_{k=0}^{\infty} (-8)\left(-\frac{1}{2}\right)^{k}$ is:`,
      verify: { kind: "value", inputs: { c: "-8", q: "-1/2", s: "0" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$- \frac{16}{3}$`, correct: true, value: "-16/3" },
        { key: "B", text: t`No finite sum`, correct: false, misconceptionId: "C07-M1", value: "no_finite_sum" },
        { key: "C", text: t`$-16$`, correct: false, misconceptionId: "C07-M3", value: "-16" },
        { key: "D", text: t`$\frac{16}{3}$`, correct: false, misconceptionId: "C07-M4", value: "16/3" },
      ],
      solution: {
        steps: [
          t`The sum starts at $k = 0$, so the first term is $a = (-8)\left(-\frac{1}{2}\right)^0 = -8$, and the ratio is $r = -\frac{1}{2}$.`,
          t`$|r| = \frac{1}{2} < 1$, so the sum exists.`,
          t`$S_\infty = \frac{-8}{1 + 1/2} = \frac{-8}{3/2} = -\frac{16}{3}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q3" },
      stem: t`The common ratio of a G.P. is $-\frac{2}{3}$ and its sum to infinity is $12$. Its first term is:`,
      verify: { kind: "value", inputs: { r: "-2/3", S: "12" }, params: { ask: "a" } },
      options: [
        { key: "A", text: t`No such G.P. exists`, correct: false, misconceptionId: "C07-M1", value: "no_such_gp" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C07-M3", value: "4" },
        { key: "C", text: t`$-20$`, correct: false, misconceptionId: "C07-M4", value: "-20" },
        { key: "D", text: t`$20$`, correct: true, value: "20" },
      ],
      solution: {
        steps: [
          t`$|r| = \frac{2}{3} < 1$, so a sum to infinity is possible.`,
          t`$S_\infty = \frac{a}{1 - r}$ gives $12 = \frac{a}{1 + 2/3} = \frac{a}{5/3}$.`,
          t`$a = 12 \times \frac{5}{3} = 20$. Check: $\frac{20}{5/3} = 12$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q1(iii)" },
      stem: t`The sum to infinity of the G.P. $-3, 1, -\frac{1}{3}, \frac{1}{9}, \ldots$ is:`,
      verify: { kind: "value", inputs: { c: "-3", q: "-1/3", s: "0" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$- \frac{9}{4}$`, correct: true, value: "-9/4" },
        { key: "B", text: t`No finite sum`, correct: false, misconceptionId: "C07-M1", value: "no_finite_sum" },
        { key: "C", text: t`$- \frac{9}{2}$`, correct: false, misconceptionId: "C07-M3", value: "-9/2" },
        { key: "D", text: t`$\frac{9}{4}$`, correct: false, misconceptionId: "C07-M4", value: "9/4" },
      ],
      solution: {
        steps: [
          t`$a = -3$ and $r = \frac{1}{-3} = -\frac{1}{3}$.`,
          t`$|r| = \frac{1}{3} < 1$, so the sum exists.`,
          t`$S_\infty = \frac{-3}{1 + 1/3} = \frac{-3}{4/3} = -\frac{9}{4}$.`,
        ],
      },
    },
  ],
};
