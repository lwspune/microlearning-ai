import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Each term of $5, 1, \frac{1}{5}, \frac{1}{25}, \ldots$ comes from the one before in the same way. **Is the step $-4$, $\times 5$ or $\times \frac{1}{5}$?**`,
    reveal: t`$\times \frac{1}{5}$: $5 \times \frac{1}{5} = 1$, $1 \times \frac{1}{5} = \frac{1}{5}$, and so on. So it is a G.P. with $r = \frac{t_2}{t_1} = \frac{1}{5}$. $-4$ is the difference $1 - 5$, which only works once; $5$ is the ratio upside down, $\frac{t_1}{t_2}$.`,
  },
  explanation: {
    intuition: t`In an A.P. you add the same number each time. In a G.P. you **multiply** by the same number each time: the common ratio $r$. To find it, divide a term by the one before it, $r = \frac{t_2}{t_1}$. To be sure a sequence is a G.P., every such ratio must be the same, not just the first. A negative $r$ makes the signs alternate; an $r$ between $-1$ and $1$ makes the terms shrink.`,
    formal: t`**Definition.** A sequence of non-zero terms $t_1, t_2, t_3, \ldots$ is a G.P. if $\frac{t_{n+1}}{t_n} = r$ for every $n$, the same $r$ each time. $r$ is the **common ratio**, and the first term is $a = t_1$.

**Test a list of terms.** Work out $\frac{t_2}{t_1}$, $\frac{t_3}{t_2}$, $\frac{t_4}{t_3}$. All equal: a G.P. with that $r$. Any one different: not a G.P. For $4, 8, 12, 16$: $\frac{8}{4} = 2$ but $\frac{12}{8} = \frac{3}{2}$, so it is not a G.P. It is an A.P. with $d = 4$.

**Keep the order and the sign.** Later term over earlier term, sign included. For $2, -8, 32, -128$: $r = \frac{-8}{2} = -4$, not $4$ and not $-\frac{1}{4}$.

**Test a formula for $t_n$.** Write $t_{n+1}$ by putting $n + 1$ in place of $n$, then simplify $\frac{t_{n+1}}{t_n}$. If the $n$'s cancel and leave a constant, it is a G.P. with that $r$, and $a = t_1$.`,
    worked: {
      prompt: t`If $t_n = \frac{5^{n-2}}{4^{n-3}}$, show that the sequence is a G.P. Find its first term and common ratio.`,
      steps: [
        t`Put $n + 1$ in place of $n$: $t_{n+1} = \frac{5^{n-1}}{4^{n-2}}$.`,
        t`Divide: $\frac{t_{n+1}}{t_n} = \frac{5^{n-1}}{4^{n-2}} \times \frac{4^{n-3}}{5^{n-2}} = \frac{5^{(n-1)-(n-2)}}{4^{(n-2)-(n-3)}} = \frac{5}{4}$.`,
        t`The $n$'s cancel, so the ratio is $\frac{5}{4}$ for every $n$: the sequence is a G.P. with $r = \frac{5}{4}$.`,
        t`First term: $t_1 = \frac{5^{-1}}{4^{-2}} = \frac{16}{5}$. Check: $t_2 = \frac{5^0}{4^{-1}} = 4$, and $4 \div \frac{16}{5} = \frac{5}{4}$.`,
      ],
      answer: t`A G.P. with $a = \frac{16}{5}$ and $r = \frac{5}{4}$.`,
    },
    visualSpec: t`Drag a slider for $r$ (whole, fractional or negative) and watch the terms appear as bars, each joined to the next by a $\times r$ arrow; a toggle switches to $+d$ to compare with an A.P.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Uses the difference between terms as r, as in an A.P. (r = t2 - t1), and judges a G.P. by a constant difference",
      remediation: t`A G.P. multiplies, it doesn't add: $r = \frac{t_{n+1}}{t_n}$, a quotient. A constant difference makes an A.P.; a G.P. needs every ratio $\frac{t_{n+1}}{t_n}$ to be the same.`,
      fallback: { kind: "ext", topic: "arithmetic progressions" },
    },
    {
      id: "C01-M2",
      mistake: "Divides the wrong way round: r = t1 / t2, an earlier term over a later one",
      remediation: t`The ratio is the later term over the earlier one, $r = \frac{t_2}{t_1}$, so that $t_1 \times r = t_2$. Check your $r$ by multiplying the first term by it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Ignores signs: drops the minus sign from r, or misses a sign pattern that breaks the G.P.",
      remediation: t`Keep the sign when you divide: if the terms alternate in sign, $r$ is negative. The signs must follow the pattern too: $\frac{t_{n+1}}{t_n}$ has to be the same number, sign included, every time.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Decides from the first two terms only: takes r = t2 / t1 and calls the sequence a G.P. without checking the next ratio",
      remediation: t`One ratio gives a candidate $r$, but it doesn't prove a G.P. Check every ratio you can, $\frac{t_3}{t_2}$, $\frac{t_4}{t_3}, \ldots$: if any one differs, it is not a G.P.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M3 gives the key whenever r > 0: diagnose it with a G.P. whose r is negative, or a sequence whose sign pattern breaks.",
    "C01-M4 gives the key on every true G.P.: diagnose it with a sequence that is not a G.P. (Q4, Q6).",
    "C01-M2 gives the key when r = 1 or r = -1.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.1 Q1(ii)" },
      stem: t`The sequence $1, -5, 25, -125, \ldots$ is a G.P. Its common ratio $r$ is:`,
      verify: { kind: "value", inputs: { s: "(1, -5, 25, -125)" } },
      options: [
        { key: "A", text: t`$-5$`, correct: true, value: "-5" },
        { key: "B", text: t`$-6$`, correct: false, misconceptionId: "C01-M1", value: "-6" },
        { key: "C", text: t`$- \frac{1}{5}$`, correct: false, misconceptionId: "C01-M2", value: "-1/5" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C01-M3", value: "5" },
      ],
      solution: {
        steps: [
          t`Divide each term by the one before: $\frac{-5}{1} = -5$, $\frac{25}{-5} = -5$, $\frac{-125}{25} = -5$.`,
          t`Every ratio is $-5$, sign included; the signs alternate because $r$ is negative. So $r = -5$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q1(iv)" },
      stem: t`The sequence $\sqrt{5}, -5, 5\sqrt{5}, -25, \ldots$ is a G.P. Its common ratio $r$ is:`,
      verify: { kind: "value", inputs: { s: "(sqrt(5), -5, 5*sqrt(5), -25)" } },
      options: [
        { key: "A", text: t`$- \sqrt{5}$`, correct: true, value: "-sqrt(5)" },
        { key: "B", text: t`$-5 - \sqrt{5}$`, correct: false, misconceptionId: "C01-M1", value: "-5 - sqrt(5)" },
        { key: "C", text: t`$- \frac{\sqrt{5}}{5}$`, correct: false, misconceptionId: "C01-M2", value: "-sqrt(5)/5" },
        { key: "D", text: t`$\sqrt{5}$`, correct: false, misconceptionId: "C01-M3", value: "sqrt(5)" },
      ],
      solution: {
        steps: [
          t`$\frac{t_2}{t_1} = \frac{-5}{\sqrt{5}} = -\sqrt{5}$, since $5 = \sqrt{5} \times \sqrt{5}$.`,
          t`Check the rest: $\frac{5\sqrt{5}}{-5} = -\sqrt{5}$ and $\frac{-25}{5\sqrt{5}} = -\frac{5}{\sqrt{5}} = -\sqrt{5}$.`,
          t`Every ratio is the same, so $r = -\sqrt{5}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.1 SolvedEx.1" },
      stem: t`Is $1, -\frac{3}{2}, \frac{9}{4}, -\frac{27}{8}, \ldots$ a G.P.? If it is, what is its common ratio?`,
      verify: { kind: "value", inputs: { s: "(1, -3/2, 9/4, -27/8)" }, params: { ask: "verdict" } },
      options: [
        { key: "A", text: t`A G.P. with $r = -\frac{2}{3}$`, correct: false, misconceptionId: "C01-M2", value: "-2/3" },
        { key: "B", text: t`A G.P. with $r = \frac{3}{2}$`, correct: false, misconceptionId: "C01-M3", value: "3/2" },
        { key: "C", text: t`A G.P. with $r = -\frac{3}{2}$`, correct: true, value: "-3/2" },
        { key: "D", text: t`Not a G.P.`, correct: false, misconceptionId: "C01-M1", value: "not_gp" },
      ],
      solution: {
        steps: [
          t`$\frac{t_2}{t_1} = \frac{-3/2}{1} = -\frac{3}{2}$.`,
          t`$\frac{t_3}{t_2} = \frac{9}{4} \times \left(-\frac{2}{3}\right) = -\frac{3}{2}$ and $\frac{t_4}{t_3} = -\frac{27}{8} \times \frac{4}{9} = -\frac{3}{2}$.`,
          t`Every ratio is $-\frac{3}{2}$, so it is a G.P. with $r = -\frac{3}{2}$. Its differences change, but that only shows it is not an A.P.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.1 Q1" },
      stem: t`How many of these sequences are G.P.s? (i) $2, 6, 18, 54, \ldots$ (ii) $\sqrt{5}, \frac{1}{\sqrt{5}}, \frac{1}{5\sqrt{5}}, \frac{1}{25\sqrt{5}}, \ldots$ (iii) $7, 14, 21, 28, \ldots$ (iv) $3, -6, -12, 24, \ldots$`,
      verify: { kind: "value", inputs: { seqs: "((2, 6, 18, 54), (sqrt(5), 1/sqrt(5), 1/(5*sqrt(5)), 1/(25*sqrt(5))), (7, 14, 21, 28), (3, -6, -12, 24))" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C01-M1", value: "1" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C01-M3", value: "3" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C01-M4", value: "4" },
      ],
      solution: {
        steps: [
          t`(i) Ratios $3, 3, 3$: a G.P. (ii) Each term is the one before divided by $5$, ratios $\frac{1}{5}, \frac{1}{5}, \frac{1}{5}$: a G.P.`,
          t`(iii) $\frac{14}{7} = 2$ but $\frac{21}{14} = \frac{3}{2}$: not a G.P. It is an A.P. with $d = 7$.`,
          t`(iv) $\frac{-6}{3} = -2$ but $\frac{-12}{-6} = 2$: the signs break the pattern, so not a G.P.`,
          t`So $2$ of the sequences are G.P.s.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q4" },
      stem: t`For a sequence, $t_n = \frac{(-5)^{n-2}}{7^{n-3}}$. It is a G.P. Its common ratio $r$ is:`,
      verify: { kind: "value", inputs: { t: "(-5)**(n-2)/7**(n-3)" } },
      options: [
        { key: "A", text: t`$- \frac{5}{7}$`, correct: true, value: "-5/7" },
        { key: "B", text: t`$\frac{84}{5}$`, correct: false, misconceptionId: "C01-M1", value: "84/5" },
        { key: "C", text: t`$- \frac{7}{5}$`, correct: false, misconceptionId: "C01-M2", value: "-7/5" },
        { key: "D", text: t`$\frac{5}{7}$`, correct: false, misconceptionId: "C01-M3", value: "5/7" },
      ],
      solution: {
        steps: [
          t`Put $n + 1$ in place of $n$: $t_{n+1} = \frac{(-5)^{n-1}}{7^{n-2}}$.`,
          t`$\frac{t_{n+1}}{t_n} = \frac{(-5)^{(n-1)-(n-2)}}{7^{(n-2)-(n-3)}} = \frac{-5}{7}$, the same for every $n$.`,
          t`So $r = -\frac{5}{7}$. Check: $t_1 = \frac{(-5)^{-1}}{7^{-2}} = -\frac{49}{5}$, $t_2 = 7$, and $7 \div \left(-\frac{49}{5}\right) = -\frac{5}{7}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q1(iii)" },
      stem: t`How many of these sequences are G.P.s? (i) $0.7, 0.07, 0.007, 0.0007, \ldots$ (ii) $\frac{1}{4}, -\frac{1}{2}, 1, -2, \ldots$ (iii) $3, 4, 5, 6, \ldots$ (iv) $5, -10, -20, 40, \ldots$ (v) $3, 6, 12, 24, \ldots$`,
      verify: { kind: "value", inputs: { seqs: "((7/10, 7/100, 7/1000, 7/10000), (1/4, -1/2, 1, -2), (3, 4, 5, 6), (5, -10, -20, 40), (3, 6, 12, 24))" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C01-M3", value: "4" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C01-M4", value: "5" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C01-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`(i) Each term is $\frac{1}{10}$ of the one before: a G.P. (ii) Ratios $-2, -2, -2$: a G.P. (v) Ratios $2, 2, 2$: a G.P.`,
          t`(iii) $\frac{4}{3} \ne \frac{5}{4}$: not a G.P. It is an A.P. with $d = 1$.`,
          t`(iv) $\frac{-10}{5} = -2$ but $\frac{-20}{-10} = 2$: the signs break the pattern, so not a G.P.`,
          t`So $3$ of the sequences are G.P.s.`,
        ],
      },
    },
  ],
};
