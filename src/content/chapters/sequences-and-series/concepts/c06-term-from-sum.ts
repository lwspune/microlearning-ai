import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A piggy bank holds $2$ rupees in all after day 1, $8$ rupees after day 2 and $26$ rupees after day 3. **How much went in on day 3?**`,
    reveal: t`The total jumped from $8$ to $26$, so $26 - 8 = 18$ rupees went in on day 3. That is the whole idea: a term is the jump in the running total, $t_n = S_n - S_{n-1}$. Day 1 has no earlier total, so its deposit is just $S_1 = 2$. The deposits $2, 6, 18$ form a G.P. with $r = 3$.`,
  },
  explanation: {
    intuition: t`$S_n$ is a running total: the first $n$ terms added up. Going from $S_{n-1}$ to $S_n$ adds exactly one more term, $t_n$. So $t_n = S_n - S_{n-1}$. The first term has no earlier total to subtract from, so $t_1 = S_1$. Once you have $t_n$, the ratio $\frac{t_{n+1}}{t_n}$ tells you whether the terms form a G.P.`,
    formal: t`**The rule.** $S_n = t_1 + t_2 + \ldots + t_{n-1} + t_n$ and $S_{n-1} = t_1 + t_2 + \ldots + t_{n-1}$. Subtract:

$$t_n = S_n - S_{n-1} \ (n \ge 2), \qquad t_1 = S_1$$

**Subtract all of $S_{n-1}$.** Replace $n$ by $n - 1$, then bracket it. For $S_n = 3(5^n - 1)$: $t_n = 3(5^n - 1) - 3(5^{n-1} - 1) = 3 \cdot 5^n - 3 \cdot 5^{n-1} = 12 \cdot 5^{n-1}$. The constants cancel.

**Is it a G.P.?** Find $\frac{t_{n+1}}{t_n}$. If it is a constant, that constant is $r$. Then check $t_1 = S_1$ against the formula for $t_n$.

**The first term can break the pattern.** For $S_n = 3^n + 1$: $t_n = 2 \cdot 3^{n-1}$ for $n \ge 2$, but $t_1 = S_1 = 4$, not $2$. The terms are $4, 6, 18, 54, \ldots$: not a G.P.`,
    worked: {
      prompt: t`For a sequence, $S_n = 5(4^n - 1)$. Find $t_n$, verify that the sequence is a G.P. and find $r$.`,
      steps: [
        t`$S_{n-1} = 5(4^{n-1} - 1)$, so $t_n = S_n - S_{n-1} = 5 \cdot 4^n - 5 - 5 \cdot 4^{n-1} + 5 = 5(4^n - 4^{n-1})$.`,
        t`$4^n - 4^{n-1} = 4^{n-1}(4 - 1) = 3 \cdot 4^{n-1}$, so $t_n = 15 \cdot 4^{n-1}$ for $n \ge 2$.`,
        t`First term: $t_1 = S_1 = 5(4 - 1) = 15$, and the formula gives $15 \cdot 4^0 = 15$ too. So $t_n = 15 \cdot 4^{n-1}$ for every $n$.`,
        t`$\frac{t_{n+1}}{t_n} = \frac{15 \cdot 4^n}{15 \cdot 4^{n-1}} = 4$, a constant. So the sequence is a G.P. with $r = 4$.`,
      ],
      answer: t`$t_n = 15 \cdot 4^{n-1}$: a G.P. with $a = 15$ and $r = 4$.`,
    },
    visualSpec: t`Drag $n$ to grow a bar of running totals $S_1, S_2, S_3, \ldots$; the piece added at each step lights up as $t_n = S_n - S_{n-1}$, and the first piece stands alone as $t_1 = S_1$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Taking the sum S_n as the nth term t_n",
      remediation: t`$S_n$ is the total of the first $n$ terms, not the $n^{\text{th}}$ term. The $n^{\text{th}}$ term is the step from one total to the next: $t_n = S_n - S_{n-1}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M2",
      mistake: "Subtracting S_(n-1) without brackets, so its constant is added instead of subtracted and the constants double instead of cancelling",
      remediation: t`Bracket all of $S_{n-1}$ before you subtract: $-5(4^{n-1} - 1) = -5 \cdot 4^{n-1} + 5$. The constants in $S_n$ and $S_{n-1}$ then cancel.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Taking t_n = S_(n+1) - S_n, which is the term after the one asked",
      remediation: t`$S_n$ is $S_{n-1}$ plus the $n^{\text{th}}$ term, so $t_n = S_n - S_{n-1}$. The difference $S_{n+1} - S_n$ is the next term, $t_{n+1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Using t_n = S_n - S_(n-1) for n = 1 too (t_1 = S_1 - S_0), so the first term loses the constant in S_n and the sequence looks like a G.P.",
      remediation: t`There is no sum before the first term, so $t_1 = S_1$. Work it out on its own: when $S_0 \ne 0$ it differs from what the $t_n$ formula gives, and the sequence is not a G.P.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C06-M4 has no model for a t_n or t_k item (it agrees with the key from the 2nd term on), and it gives the key whenever S_0 = 0, as for S_n = A(r^n - 1). Draw it from a t_1 or t_2/t_1 item with S_0 not 0.",
    "C06-M1 gives the key on a t_1 item (t_1 = S_1). C06-M3 gives the key on a t_2/t_1 item for a G.P., and matches C06-M4 there when S_n = A r^n + c. C06-M2 needs a constant in S_n.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q8" },
      stem: t`For a sequence, $S_n = 2(3^n - 1)$. Its $n^{\text{th}}$ term $t_n$ is:`,
      verify: { kind: "value", inputs: { S: "2*(3**n - 1)", n: "n" }, params: { ask: "tn" } },
      options: [
        { key: "A", text: t`$2\left(3^{n} - 1\right)$`, correct: false, misconceptionId: "C06-M1", value: "2*3**n - 2" },
        { key: "B", text: t`$4 \cdot 3^{n-1} - 4$`, correct: false, misconceptionId: "C06-M2", value: "4*3**(n - 1) - 4" },
        { key: "C", text: t`$4 \cdot 3^{n}$`, correct: false, misconceptionId: "C06-M3", value: "4*3**n" },
        { key: "D", text: t`$4 \cdot 3^{n-1}$`, correct: true, value: "4*3**(n - 1)" },
      ],
      solution: {
        steps: [
          t`$S_{n-1} = 2(3^{n-1} - 1)$, so $t_n = S_n - S_{n-1} = 2 \cdot 3^n - 2 - 2 \cdot 3^{n-1} + 2 = 2(3^n - 3^{n-1})$.`,
          t`$3^n - 3^{n-1} = 3^{n-1}(3 - 1) = 2 \cdot 3^{n-1}$, so $t_n = 4 \cdot 3^{n-1}$.`,
          t`Check: $t_1 = S_1 = 2(3 - 1) = 4 = 4 \cdot 3^0$. So $t_n = 4 \cdot 3^{n-1}$ for every $n$: a G.P. with $r = 3$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q7" },
      stem: t`For a sequence, the sum of the first $n$ terms is $S_n = 4(7^n - 1)$. The third term $t_3$ is:`,
      verify: { kind: "value", inputs: { S: "4*(7**n - 1)", n: "n", k: "3" }, params: { ask: "tk" } },
      options: [
        { key: "A", text: t`$1176$`, correct: true, value: "1176" },
        { key: "B", text: t`$1368$`, correct: false, misconceptionId: "C06-M1", value: "1368" },
        { key: "C", text: t`$1168$`, correct: false, misconceptionId: "C06-M2", value: "1168" },
        { key: "D", text: t`$8232$`, correct: false, misconceptionId: "C06-M3", value: "8232" },
      ],
      solution: {
        steps: [
          t`$S_3 = 4(7^3 - 1) = 4 \times 342 = 1368$ and $S_2 = 4(7^2 - 1) = 4 \times 48 = 192$.`,
          t`$t_3 = S_3 - S_2 = 1368 - 192 = 1176$. Check: $t_n = 4(7^n - 7^{n-1}) = 24 \cdot 7^{n-1}$, and $24 \times 49 = 1176$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.2 SolvedEx.12" },
      stem: t`For a sequence, $S_n = 6\left[1 - \left(\frac{1}{2}\right)^n\right]$. Its $n^{\text{th}}$ term $t_n$ is:`,
      verify: { kind: "value", inputs: { S: "6*(1 - (1/2)**n)", n: "n" }, params: { ask: "tn" } },
      options: [
        { key: "A", text: t`$3\left(\frac{1}{2}\right)^{n-1}$`, correct: true, value: "6/2**n" },
        { key: "B", text: t`$6\left[1 - \left(\frac{1}{2}\right)^{n}\right]$`, correct: false, misconceptionId: "C06-M1", value: "6 - 6/2**n" },
        { key: "C", text: t`$3\left(\frac{1}{2}\right)^{n-1} + 12$`, correct: false, misconceptionId: "C06-M2", value: "12 + 6/2**n" },
        { key: "D", text: t`$3\left(\frac{1}{2}\right)^{n}$`, correct: false, misconceptionId: "C06-M3", value: "3/2**n" },
      ],
      solution: {
        steps: [
          t`$S_{n-1} = 6\left[1 - \left(\frac{1}{2}\right)^{n-1}\right]$, so $t_n = 6 - 6\left(\frac{1}{2}\right)^n - 6 + 6\left(\frac{1}{2}\right)^{n-1}$: the $6$s cancel.`,
          t`$6\left(\frac{1}{2}\right)^{n-1} - 6\left(\frac{1}{2}\right)^{n} = 6\left(\frac{1}{2}\right)^{n-1}\left(1 - \frac{1}{2}\right) = 3\left(\frac{1}{2}\right)^{n-1}$.`,
          t`Check: $t_1 = S_1 = 6 \times \frac{1}{2} = 3$, which the formula gives too. So $t_n = 3\left(\frac{1}{2}\right)^{n-1}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`For a sequence, $S_n = 4^n + 2$. The ratio $\frac{t_2}{t_1}$ is:`,
      verify: { kind: "value", inputs: { S: "4**n + 2", n: "n" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C06-M4", value: "4" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C06-M1", value: "3" },
        { key: "D", text: t`$\frac{16}{7}$`, correct: false, misconceptionId: "C06-M2", value: "16/7" },
      ],
      solution: {
        steps: [
          t`The first term has no earlier sum: $t_1 = S_1 = 4 + 2 = 6$.`,
          t`$S_2 = 16 + 2 = 18$, so $t_2 = S_2 - S_1 = 18 - 6 = 12$, and $\frac{t_2}{t_1} = \frac{12}{6} = 2$.`,
          t`From the 2nd term on, $t_n = 4^n - 4^{n-1} = 3 \cdot 4^{n-1}$, so $\frac{t_3}{t_2} = 4$. The ratios differ: the sequence is not a G.P.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`For a sequence, the sum of the first $n$ terms is $S_n = 3^n + 5$. The first term $t_1$ is:`,
      verify: { kind: "value", inputs: { S: "3**n + 5", n: "n" }, params: { ask: "t1" } },
      options: [
        { key: "A", text: t`$8$`, correct: true, value: "8" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C06-M2", value: "12" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C06-M3", value: "6" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C06-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`The first term has no earlier sum to subtract, so $t_1 = S_1$.`,
          t`$t_1 = S_1 = 3^1 + 5 = 8$. The rule $S_n - S_{n-1}$ does not work at $n = 1$ here: $S_0 = 3^0 + 5 = 6$, not $0$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`For a sequence, $S_n = 5 \cdot 2^n - 3$. For $n \ge 2$, its $n^{\text{th}}$ term $t_n$ is:`,
      verify: { kind: "value", inputs: { S: "5*2**n - 3", n: "n" }, params: { ask: "tn" } },
      options: [
        { key: "A", text: t`$5 \cdot 2^{n-1} - 6$`, correct: false, misconceptionId: "C06-M2", value: "5*2**(n - 1) - 6" },
        { key: "B", text: t`$5 \cdot 2^{n}$`, correct: false, misconceptionId: "C06-M3", value: "5*2**n" },
        { key: "C", text: t`$5 \cdot 2^{n-1}$`, correct: true, value: "5*2**(n - 1)" },
        { key: "D", text: t`$5 \cdot 2^{n} - 3$`, correct: false, misconceptionId: "C06-M1", value: "5*2**n - 3" },
      ],
      solution: {
        steps: [
          t`$S_{n-1} = 5 \cdot 2^{n-1} - 3$, so $t_n = (5 \cdot 2^n - 3) - (5 \cdot 2^{n-1} - 3) = 5 \cdot 2^n - 5 \cdot 2^{n-1}$: the $3$s cancel.`,
          t`$5 \cdot 2^n - 5 \cdot 2^{n-1} = 5 \cdot 2^{n-1}(2 - 1) = 5 \cdot 2^{n-1}$ for $n \ge 2$.`,
          t`But $t_1 = S_1 = 10 - 3 = 7$, not $5$. The terms are $7, 10, 20, 40, \ldots$: a G.P. only from the 2nd term on.`,
        ],
      },
    },
  ],
};
