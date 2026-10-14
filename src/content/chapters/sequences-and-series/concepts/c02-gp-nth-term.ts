import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Rs $1000$ is kept in a bank at $10\%$ compound interest. **After $3$ years, is it Rs $1300$?**`,
    reveal: t`No. Each year the amount is multiplied by $1.1$: $1000, 1100, 1210, 1331$. That is a G.P. with $a = 1000$ and $r = 1.1$, and the amount after $3$ years is its fourth term, $1000(1.1)^3 = 1331$. Rs $1300$ would add the same $100$ every year: that is simple interest, an A.P.`,
  },
  explanation: {
    intuition: t`To get from $t_1 = a$ to $t_n$ you take $n - 1$ steps, and each step multiplies by $r$. So $t_n$ is $a$ times $n - 1$ factors of $r$. The first term has no factor $r$ at all. Every question here is this one equation, solved for whichever letter is missing: the term, its position $n$, $a$ or $r$.`,
    formal: t`**The $n$th term.** For a G.P. with first term $a$ and common ratio $r$:
$$t_n = ar^{n-1}$$
The power of $r$ is one less than the term number: $t_1 = a$, $t_2 = ar$, $t_{10} = ar^9$. Only $r$ carries the power: $3 \cdot 2^4 = 48$, not $6^4$.

**Which term is a given number?** Set $ar^{n-1}$ equal to it, write both sides as powers of one base, and compare indices. For $\sqrt{3}, 3, 3\sqrt{3}, \ldots$: $\sqrt{3}(\sqrt{3})^{n-1} = (\sqrt{3})^n = 3^{n/2}$, and $243 = 3^5$, so $\frac{n}{2} = 5$, $n = 10$.

**$a$ and $r$ from two terms.** Write $t_p = ar^{p-1}$ and $t_q = ar^{q-1}$. Divide the later by the earlier: $a$ cancels and $r^{q-p} = \frac{t_q}{t_p}$. Then put $r$ back into either equation to find $a$.

**Compound interest.** A principal $P$ at $R\%$ a year grows by the factor $1 + \frac{R}{100}$ each year. The amounts $P, Pr, Pr^2, \ldots$ form a G.P. with $r = 1 + \frac{R}{100}$, and after $N$ years the amount is its $(N + 1)$th term:
$$A = P\left(1 + \frac{R}{100}\right)^N$$`,
    worked: {
      prompt: t`In a G.P., the third term is $\frac{1}{5}$ and the sixth term is $\frac{1}{625}$. Find $a$, $r$ and $t_n$.`,
      steps: [
        t`$t_3 = ar^2 = \frac{1}{5}$ and $t_6 = ar^5 = \frac{1}{625}$.`,
        t`Divide the later term by the earlier: $\frac{ar^5}{ar^2} = r^3 = \frac{1/625}{1/5} = \frac{1}{125}$, so $r = \frac{1}{5}$.`,
        t`Put $r$ into $t_3$: $a \cdot \frac{1}{25} = \frac{1}{5}$, so $a = 5$.`,
        t`$t_n = 5\left(\frac{1}{5}\right)^{n-1} = \left(\frac{1}{5}\right)^{n-2}$. Check: $t_6 = \left(\frac{1}{5}\right)^4 = \frac{1}{625}$.`,
      ],
      answer: t`$a = 5$, $r = \frac{1}{5}$ and $t_n = \left(\frac{1}{5}\right)^{n-2}$.`,
    },
    visualSpec: t`Drag $n$ along a row of terms: each step right multiplies by $r$, and a counter shows the power of $r$ is always one less than the term number; drag $r$ below zero to watch the signs alternate.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Takes the power of $r$ equal to the term number: $t_n = ar^n$`,
      remediation: t`$t_1 = a$ has no factor $r$, so the $n$th term has $n - 1$ of them: $t_n = ar^{n-1}$. When you solve for $n$, it is one more than the power of $r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Finds the common ratio upside down: an earlier term over a later one",
      remediation: t`The common ratio is a term divided by the one before it: $r = \frac{t_2}{t_1}$. From two terms, divide the later by the earlier: $r^{q-p} = \frac{t_q}{t_p}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: t`Uses the A.P. formula $t_n = a + (n - 1)d$: adds a fixed step instead of multiplying by $r$`,
      remediation: t`In a G.P. each term is the one before it times $r$, so the steps multiply: $t_n = ar^{n-1}$. Adding the same step each time is an A.P.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: t`Multiplies $a$ by $r$ before raising to the power: reads $ar^{n-1}$ as $(ar)^{n-1}$`,
      remediation: t`In $ar^{n-1}$ only $r$ carries the power. Work out $r^{n-1}$ first, then multiply by $a$: $3 \cdot 2^4 = 3 \cdot 16 = 48$, not $6^4$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    t`C02-M1 gives the key when a term is found from two other terms: $t_n = ar^n$ used throughout shifts $a$ to $\frac{a}{r}$ and the shift cancels. Diagnose it with items that ask for $a$, for $n$, or for a term from $a$ and $r$.`,
    t`C02-M2 shows only when the ratio has to be worked out (from listed terms or from two terms); it can't show when $r$ is given.`,
    t`C02-M4 gives the key when $a = 1$ (e.g. $1, 2, 4, \ldots$), so its items need $a \ne 1$.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc I Q2" },
      stem: t`The tenth term of the G.P. $\frac{1}{4}, -\frac{1}{2}, 1, -2, \ldots$ is:`,
      verify: { kind: "value", inputs: { t1: "1/4", t2: "-1/2", n: "10" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$-128$`, correct: true, value: "-128" },
        { key: "B", text: t`$256$`, correct: false, misconceptionId: "C02-M1", value: "256" },
        { key: "C", text: t`$- \frac{1}{2048}$`, correct: false, misconceptionId: "C02-M2", value: "-1/2048" },
        { key: "D", text: t`$- \frac{13}{2}$`, correct: false, misconceptionId: "C02-M3", value: "-13/2" },
      ],
      solution: {
        steps: [
          t`$a = \frac{1}{4}$ and $r = \frac{-1/2}{1/4} = -2$.`,
          t`$t_{10} = ar^9 = \frac{1}{4}(-2)^9 = \frac{1}{4}(-512)$. An odd power of a negative ratio is negative.`,
          t`$t_{10} = -128$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.1 Q2(i)" },
      stem: t`For a G.P., $a = 9$ and $r = \frac{1}{3}$. Then $t_7 =$`,
      verify: { kind: "value", inputs: { a: "9", r: "1/3", n: "7" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$\frac{1}{243}$`, correct: false, misconceptionId: "C02-M1", value: "1/243" },
        { key: "B", text: t`$11$`, correct: false, misconceptionId: "C02-M3", value: "11" },
        { key: "C", text: t`$729$`, correct: false, misconceptionId: "C02-M4", value: "729" },
        { key: "D", text: t`$\frac{1}{81}$`, correct: true, value: "1/81" },
      ],
      solution: {
        steps: [
          t`$t_7 = ar^6 = 9\left(\frac{1}{3}\right)^6$. Only $r$ carries the power.`,
          t`$t_7 = \frac{9}{729} = \frac{1}{81}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc I Q4" },
      stem: t`In the G.P. $2, 4, 8, 16, \ldots$, the term $1024$ is $t_n$, where $n =$`,
      verify: { kind: "value", inputs: { t1: "2", t2: "4", T: "1024" }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C02-M4", value: "6" },
        { key: "B", text: t`$10$`, correct: true, value: "10" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C02-M1", value: "9" },
        { key: "D", text: t`$512$`, correct: false, misconceptionId: "C02-M3", value: "512" },
      ],
      solution: {
        steps: [
          t`$a = 2$ and $r = \frac{4}{2} = 2$, so $t_n = 2 \cdot 2^{n-1} = 2^n$.`,
          t`$2^n = 1024 = 2^{10}$, so $n = 10$: $1024$ is the tenth term.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc I Q5" },
      stem: t`The common ratio of a G.P. is $5$ and its fourth term is $1000$. Its first term is:`,
      verify: { kind: "value", inputs: { r: "5", n: "4", tn: "1000" }, params: { ask: "a" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C02-M4", value: "2" },
        { key: "B", text: t`$8$`, correct: true, value: "8" },
        { key: "C", text: t`$\frac{8}{5}$`, correct: false, misconceptionId: "C02-M1", value: "8/5" },
        { key: "D", text: t`$985$`, correct: false, misconceptionId: "C02-M3", value: "985" },
      ],
      solution: {
        steps: [
          t`$t_4 = ar^3 = a \cdot 5^3 = 125a$.`,
          t`$125a = 1000$, so $a = 8$. Check: $8, 40, 200, 1000$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q21" },
      stem: t`For a G.P., $t_2 = 6$ and $t_5 = 162$. Its first term $a$ is:`,
      verify: { kind: "value", inputs: { p: "2", tp: "6", q: "5", tq: "162" }, params: { ask: "a2" } },
      options: [
        { key: "A", text: t`$-46$`, correct: false, misconceptionId: "C02-M3", value: "-46" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C02-M1", value: "2/3" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C02-M2", value: "18" },
      ],
      solution: {
        steps: [
          t`$t_2 = ar = 6$ and $t_5 = ar^4 = 162$.`,
          t`Divide the later term by the earlier: $r^3 = \frac{162}{6} = 27$, so $r = 3$.`,
          t`$a \cdot 3 = 6$, so $a = 2$. Check: $2, 6, 18, 54, 162$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.1 SolvedEx.1" },
      stem: t`The ninth term of the G.P. $1, -\frac{3}{2}, \frac{9}{4}, \ldots$ is:`,
      verify: { kind: "value", inputs: { t1: "1", t2: "-3/2", n: "9" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$\frac{6561}{256}$`, correct: true, value: "6561/256" },
        { key: "B", text: t`$- \frac{19683}{512}$`, correct: false, misconceptionId: "C02-M1", value: "-19683/512" },
        { key: "C", text: t`$\frac{256}{6561}$`, correct: false, misconceptionId: "C02-M2", value: "256/6561" },
        { key: "D", text: t`$-19$`, correct: false, misconceptionId: "C02-M3", value: "-19" },
      ],
      solution: {
        steps: [
          t`$a = 1$ and $r = \frac{-3/2}{1} = -\frac{3}{2}$.`,
          t`$t_9 = ar^8 = \left(-\frac{3}{2}\right)^8$, an even power, so the term is positive.`,
          t`$t_9 = \frac{3^8}{2^8} = \frac{6561}{256}$.`,
        ],
      },
    },
  ],
};
