import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Find $3 + 6 + 12 + \cdots + 384$ (eight terms) **without adding the terms one by one.**`,
    reveal: t`Call the sum $S$. Double every term: $2S = 6 + 12 + \cdots + 384 + 768$. Subtract $S$: every term the two rows share cancels, leaving $2S - S = 768 - 3$. So $S = 765$. That shift-and-subtract trick is the whole formula.`,
  },
  explanation: {
    intuition: t`Write $S_n = a + ar + ar^2 + \cdots + ar^{n-1}$. Multiply by $r$: $rS_n = ar + ar^2 + \cdots + ar^{n-1} + ar^n$. The two rows share every term except $a$ at the start and $ar^n$ at the end, so subtracting gives $rS_n - S_n = ar^n - a$. Divide by $r - 1$ and you have the sum. The power is $n$ because $ar^n$ is the term just after the last one.`,
    formal: t`**The sum of $n$ terms** (for $r \ne 1$)

$$S_n = \frac{a(r^n - 1)}{r - 1} = \frac{a(1 - r^n)}{1 - r}$$

The two forms are equal. The second is handier when $r < 1$. Use one form whole; never the top of one with the bottom of the other.

**Check on a small case.** $5 + 15 + 45 + 135 = 200$, and $\frac{5(3^4 - 1)}{3 - 1} = \frac{5 \times 80}{2} = 200$. The power is $n$, the number of terms, not $n - 1$.

**When $r = 1$** every term is $a$, so $S_n = na$. The formula would give $\frac{0}{0}$, so don't use it.

**Finding $a$, $n$ or $r$.** Put what you know into $S_n$ and solve. For $n$, get $r^n$ alone and write the number as a power of $r$.

**Two sums.** Since $r^6 - 1 = (r^3 - 1)(r^3 + 1)$, $\frac{S_6}{S_3} = \frac{r^6 - 1}{r^3 - 1} = r^3 + 1$. The 4th to 6th terms add up to $S_6 - S_3 = r^3 S_3$.`,
    worked: {
      prompt: t`How many terms of the G.P. $2 + 4 + 8 + \cdots$ add up to $2046$?`,
      steps: [
        t`Here $a = 2$ and $r = 2$, so $S_n = \frac{2(2^n - 1)}{2 - 1} = 2(2^n - 1)$.`,
        t`Set $2(2^n - 1) = 2046$: then $2^n - 1 = 1023$, so $2^n = 1024$.`,
        t`$1024 = 2^{10}$, so $n = 10$. Check: the 10th term is $2 \times 2^9 = 1024$, and $2 + 4 + \cdots + 1024 = 2046$.`,
      ],
      answer: t`$10$ terms.`,
    },
    visualSpec: t`Drag $n$ to add terms of a G.P. as a row of bars; a second row shows $r$ times the same bars, shifted one place, and subtracting the rows leaves only $ar^n - a$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Uses the power $n - 1$ from $t_n$ in the sum: $S_n = \frac{a(r^{n-1} - 1)}{r - 1}$`,
      remediation: t`In $S_n = \frac{a(r^n - 1)}{r - 1}$ the power is $n$, the number of terms. The power $n - 1$ belongs to the last term $t_n = ar^{n-1}$; using it in the sum adds only $n - 1$ terms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Takes the sum $S_n$ to be the $n$th term $ar^{n-1}$`,
      remediation: t`$t_n = ar^{n-1}$ is one term; $S_n$ adds all $n$ terms: $S_n = \frac{a(r^n - 1)}{r - 1}$. Check whether the question gives or asks for a term or a sum.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M3",
      mistake: t`Drops the $-1$s: $S_n = \frac{ar^n}{r - 1}$, so $\frac{S_6}{S_3} = r^3$`,
      remediation: t`Keep the $-1$: $S_n = \frac{a(r^n - 1)}{r - 1}$. In $\frac{r^6 - 1}{r^3 - 1}$ the $1$s don't cancel; factorise $r^6 - 1 = (r^3 - 1)(r^3 + 1)$ to get $r^3 + 1$.`,
      fallback: { kind: "ext", topic: "simplifying algebraic fractions" },
    },
    {
      id: "C04-M4",
      mistake: t`Mixes the two forms: $S_n = \frac{a(r^n - 1)}{1 - r}$`,
      remediation: t`Use one form whole: $\frac{a(r^n - 1)}{r - 1}$ or $\frac{a(1 - r^n)}{1 - r}$. Taking the top of one and the bottom of the other flips the sign of the sum.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M2 and C04-M3 give the same $r = \sqrt[3]{S_6/S_3}$ on items with $S_3$ and $S_6$, so those items ask for $a$, where the two differ.`,
    "C04-M4 gives the negative of the key, which is not a plausible option for counts or money; word problems use C04-M1 to C04-M3.",
    t`On items that ask for $n$ only C04-M1 applies (it gives $n + 1$), so finding $n$ is taught in the worked example, not a check item. No model applies when $r = 1$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q2(i)" },
      stem: t`For a G.P. with $a = 2$ and $r = -\frac{2}{3}$, find $S_6$.`,
      verify: { kind: "value", inputs: { a: "2", r: "-2/3", n: "6" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$- \frac{64}{243}$`, correct: false, misconceptionId: "C04-M2", value: "-64/243" },
        { key: "B", text: t`$- \frac{266}{243}$`, correct: false, misconceptionId: "C04-M4", value: "-266/243" },
        { key: "C", text: t`$\frac{266}{243}$`, correct: true, value: "266/243" },
        { key: "D", text: t`$\frac{110}{81}$`, correct: false, misconceptionId: "C04-M1", value: "110/81" },
      ],
      solution: {
        steps: [
          t`$r < 1$, so use $S_n = \frac{a(1 - r^n)}{1 - r}$ with $n = 6$. First, $\left(-\frac{2}{3}\right)^6 = \frac{64}{729}$.`,
          t`$S_6 = \frac{2\left(1 - \frac{64}{729}\right)}{1 + \frac{2}{3}} = \frac{2 \times \frac{665}{729}}{\frac{5}{3}} = \frac{1330}{729} \times \frac{3}{5}$.`,
          t`$S_6 = \frac{266}{243}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q2(ii)" },
      stem: t`For a G.P., $S_5 = 1023$ and $r = 4$. Find the first term $a$.`,
      verify: { kind: "value", inputs: { r: "4", n: "5", S: "1023" }, params: { ask: "a" } },
      options: [
        { key: "A", text: t`$\frac{1023}{85}$`, correct: false, misconceptionId: "C04-M1", value: "1023/85" },
        { key: "B", text: t`$\frac{1023}{256}$`, correct: false, misconceptionId: "C04-M2", value: "1023/256" },
        { key: "C", text: t`$-3$`, correct: false, misconceptionId: "C04-M4", value: "-3" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`$S_5 = \frac{a(4^5 - 1)}{4 - 1} = \frac{1023a}{3} = 341a$.`,
          t`$341a = 1023$, so $a = 3$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.2 SolvedEx.13" },
      stem: t`A teacher gives a student $1$ chocolate on the first day, $2$ on the second day, $4$ on the third day, and so on, doubling each day for $6$ days. How many chocolates does the student get in all?`,
      verify: { kind: "value", inputs: { a: "1", r: "2", n: "6" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$32$`, correct: false, misconceptionId: "C04-M2", value: "32" },
        { key: "B", text: t`$64$`, correct: false, misconceptionId: "C04-M3", value: "64" },
        { key: "C", text: t`$63$`, correct: true, value: "63" },
        { key: "D", text: t`$31$`, correct: false, misconceptionId: "C04-M1", value: "31" },
      ],
      solution: {
        steps: [
          t`The daily chocolates $1, 2, 4, \ldots$ form a G.P. with $a = 1$, $r = 2$. The total for $6$ days is $S_6$.`,
          t`$S_6 = \frac{1(2^6 - 1)}{2 - 1} = 64 - 1 = 63$ chocolates.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.2 SolvedEx.8" },
      stem: t`For a G.P., $S_3 = 16$ and $S_6 = 144$. Find the first term $a$.`,
      verify: { kind: "value", inputs: { S3: "16", S6: "144" }, params: { ask: "a36" } },
      options: [
        { key: "A", text: t`$\frac{16\sqrt[3]{9}}{9}$`, correct: false, misconceptionId: "C04-M2", value: "16*3**(2/3)/9" },
        { key: "B", text: t`$\frac{16(\sqrt[3]{9} - 1)}{9}$`, correct: false, misconceptionId: "C04-M3", value: "-16/9 + 16*3**(2/3)/9" },
        { key: "C", text: t`$- \frac{16}{7}$`, correct: false, misconceptionId: "C04-M4", value: "-16/7" },
        { key: "D", text: t`$\frac{16}{7}$`, correct: true, value: "16/7" },
      ],
      solution: {
        steps: [
          t`$\frac{S_6}{S_3} = \frac{r^6 - 1}{r^3 - 1} = r^3 + 1$, since $r^6 - 1 = (r^3 - 1)(r^3 + 1)$.`,
          t`$r^3 + 1 = \frac{144}{16} = 9$, so $r^3 = 8$ and $r = 2$.`,
          t`$S_3 = \frac{a(2^3 - 1)}{2 - 1} = 7a = 16$, so $a = \frac{16}{7}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q4(i)" },
      stem: t`For a G.P., $t_3 = 20$ and $t_6 = 160$. Find $S_7$.`,
      verify: { kind: "value", inputs: { i: "3", ti: "20", j: "6", tj: "160", n: "7" }, params: { ask: "sumtt" } },
      options: [
        { key: "A", text: t`$640$`, correct: false, misconceptionId: "C04-M3", value: "640" },
        { key: "B", text: t`$635$`, correct: true, value: "635" },
        { key: "C", text: t`$315$`, correct: false, misconceptionId: "C04-M1", value: "315" },
        { key: "D", text: t`$320$`, correct: false, misconceptionId: "C04-M2", value: "320" },
      ],
      solution: {
        steps: [
          t`$\frac{t_6}{t_3} = \frac{ar^5}{ar^2} = r^3 = \frac{160}{20} = 8$, so $r = 2$.`,
          t`$t_3 = ar^2 = 4a = 20$, so $a = 5$.`,
          t`$S_7 = \frac{5(2^7 - 1)}{2 - 1} = 5 \times 127 = 635$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.3.2 SolvedEx.14" },
      stem: t`Mr. Pritesh's salary is Rs $4{,}00{,}000$ in the first year, with a $10\%$ increment every year. Find his total earnings through salary in the first $4$ years. [Given $(1.1)^4 = 1.4641$]`,
      verify: { kind: "value", inputs: { a: "400000", r: "11/10", n: "4" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`Rs $18{,}56{,}400$`, correct: true, value: "1856400" },
        { key: "B", text: t`Rs $13{,}24{,}000$`, correct: false, misconceptionId: "C04-M1", value: "1324000" },
        { key: "C", text: t`Rs $5{,}32{,}400$`, correct: false, misconceptionId: "C04-M2", value: "532400" },
        { key: "D", text: t`Rs $58{,}56{,}400$`, correct: false, misconceptionId: "C04-M3", value: "5856400" },
      ],
      solution: {
        steps: [
          t`Each year's salary is $1.1$ times the last: a G.P. with $a = 4{,}00{,}000$, $r = 1.1$, and we want $S_4$.`,
          t`$S_4 = 4{,}00{,}000 \times \frac{(1.1)^4 - 1}{1.1 - 1} = 4{,}00{,}000 \times \frac{0.4641}{0.1} = 4{,}00{,}000 \times 4.641$.`,
          t`His total earnings are Rs $18{,}56{,}400$.`,
        ],
      },
    },
  ],
};
