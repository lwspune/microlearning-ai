import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Without a calculator: what is the remainder when $2^{100}$ is divided by $3$?`,
    reveal: t`Write $2 = 3 - 1$, so $2^{100} = (3 - 1)^{100}$. Every term of the expansion except the last has a factor $3$. The last term is $(-1)^{100} = 1$, so the remainder is $1$.`,
  },
  explanation: {
    intuition: [
      t`Dividing a huge power such as $2^{100}$ by $3$ looks hopeless, but only the remainder is wanted.`,
      t`Write the base, or a small power of it, as a multiple of the divisor plus or minus $1$: $2 = 3 - 1$.`,
      t`In the expansion, every term except the last carries that multiple, so only the last term decides the remainder.`,
      t`A power of a surd sum can sit just below a whole number: $(3 + 2\sqrt{2})^4 \approx 1153.9991$.`,
      t`Its partner with the surd's sign flipped, $(3 - 2\sqrt{2})^4$, is tiny.`,
      t`The two add up to a whole number, so the partner tells you exactly how far below it the power sits.`,
    ],
    formal: [
      {
        title: "Remainders",
        points: [
          t`When a whole number $N$ is divided by $m$, we write $N = qm + r$.`,
          t`Here $q$ is the **quotient** and $r$ is the **remainder**, a whole number with $0 \le r < m$.`,
          t`For example, $45 = 6 \times 7 + 3$, so $45$ leaves remainder $3$ on division by $7$.`,
          t`Adding or taking away a multiple of $m$ does not change the remainder.`,
        ],
      },
      {
        title: "Base next to a multiple",
        points: [
          t`Find a power of the base that is a multiple of $m$, plus or minus $1$: for $m = 7$, $2^3 = 8 = 7 + 1$.`,
          t`Split the exponent to use it: $2^{31} = 2 \cdot (2^3)^{10}$. The leftover factor $2$ must stay.`,
          t`In the expansion of $(7 + 1)^{10}$, every term except the last, $1^{10} = 1$, has a factor $7$.`,
          t`So $(7 + 1)^{10} = 7k + 1$ for some whole number $k$.`,
          t`Then $2^{31} = 2(7k + 1)$ $= 7(2k) + 2$, so the remainder is $2$.`,
        ],
      },
      {
        title: "The minus-one case",
        points: [
          t`For $m = 13$: $4^3 = 64 = 65 - 1$, and $65 = 5 \times 13$ is a multiple of $13$.`,
          t`In $(65 - 1)^t$ the signs alternate, and the last term is $(-1)^t$.`,
          t`That last term is $+1$ when $t$ is even and $-1$ when $t$ is odd.`,
          t`So $4^{10} = 4 \cdot (4^3)^3$ $= 4(13k - 1) = 13(4k) - 4$.`,
          t`A remainder is never negative: $13(4k) - 4$ $= 13(4k - 1) + 9$, so the remainder is $9$.`,
          t`In short: if the work ends at $-r$, with $0 < r < m$, the remainder is $m - r$.`,
        ],
      },
      {
        title: "When two terms survive",
        points: [
          t`Sometimes the base is $1$ plus a factor of $m$, not a multiple: $9 = 1 + 8$, divided by $64$.`,
          t`$(1 + 8)^n = 1 + {}^nC_1\,8$ $+ {}^nC_2\,8^2 + \ldots + 8^n$.`,
          t`From $^nC_2\,8^2$ on, every term has the factor $8^2 = 64$.`,
          t`The first two terms, $1 + 8n$, have no factor $64$, so both stay.`,
          t`So $9^n - 8n - 1$, that is $3^{2n} - 8n - 1$, is divisible by $64$.`,
          t`In the same way $7^n = (1 + 6)^n$ leaves $1 + 6n$ on division by $36$, so $7^{100} - 600$ leaves $1$.`,
        ],
      },
      {
        title: "Integer and fractional parts",
        points: [
          t`Every positive number $N$ can be written as $I + f$, with $I$ a whole number and $0 \le f < 1$.`,
          t`$I$ is the **integer part** of $N$, and $f$ is its **fractional part**.`,
          t`For example, $14.07 = 14 + 0.07$: integer part $14$, fractional part $0.07$.`,
          t`A surd term is not the fractional part: in $17 + 12\sqrt{2}$, the term $12\sqrt{2} \approx 16.97$.`,
          t`So $17 + 12\sqrt{2} \approx 33.97$ has integer part $33$, not $17$.`,
        ],
      },
      {
        title: "The conjugate partner",
        points: [
          t`The **conjugate** of $a + \sqrt{b}$ is $a - \sqrt{b}$: the same two terms with the surd's sign flipped.`,
          t`Their product has no surd: $(a + \sqrt{b})(a - \sqrt{b})$ $= a^2 - b$.`,
          t`For $3 + 2\sqrt{2}$ the conjugate is $3 - 2\sqrt{2} \approx 0.17$, between $0$ and $1$.`,
          t`So its powers $f' = (3 - 2\sqrt{2})^n$ are small too: $0 < f' < 1$.`,
          t`In $(a + \sqrt{b})^n$ $+ (a - \sqrt{b})^n$ the odd powers of $\sqrt{b}$ cancel, so the sum is a whole number.`,
        ],
      },
      {
        title: "Fractional parts add to 1",
        points: [
          t`Let $(a + \sqrt{b})^n = I + f$, and let $f' = (a - \sqrt{b})^n$ with $0 < f' < 1$.`,
          t`The sum $I + f + f'$ is a whole number $S$, so $f + f'$ is a whole number too.`,
          t`But $0 < f + f' < 2$, so $f + f' = 1$.`,
          t`So $f = 1 - f'$, and the integer part is $I = S - 1$.`,
          t`For example, $(3 + 2\sqrt{2})^2$ $+ (3 - 2\sqrt{2})^2 = 34$, so $(3 + 2\sqrt{2})^2$ has integer part $33$.`,
          t`Products follow too: $(I + f)(1 - f)$ $= (I + f) f' = (a^2 - b)^n$.`,
        ],
      },
      {
        title: "Odd powers: f = f′",
        points: [
          t`For $\sqrt{5} + 2$, the partner between $0$ and $1$ is $\sqrt{5} - 2 \approx 0.24$.`,
          t`For an odd $n$, the **difference** of $(\sqrt{5} + 2)^n$ and $(\sqrt{5} - 2)^n$ is the whole number.`,
          t`For example, $(\sqrt{5} + 2)^3 = 38 + 17\sqrt{5}$ and $(\sqrt{5} - 2)^3 = 17\sqrt{5} - 38$; the difference is $76$.`,
          t`Then $I + f - f'$ is a whole number with $-1 < f - f' < 1$, so $f = f'$.`,
          t`So $(\sqrt{5} + 2)^3 \approx 76.013$ has integer part $76$ and fractional part $(\sqrt{5} - 2)^3$.`,
          t`Check whether the sum or the difference cancels the surds before choosing the rule.`,
        ],
      },
    ],
    worked: {
      prompt: t`Let $(3 + 2\sqrt{2})^4 = I + f$, where $I$ is an integer and $0 < f < 1$. Find $I$ and the value of $(I + f)(1 - f)$.`,
      steps: [
        t`The partner is $f' = (3 - 2\sqrt{2})^4$. Since $3 - 2\sqrt{2} \approx 0.17$, $0 < f' < 1$.`,
        t`Add the two powers: the odd powers of $2\sqrt{2}$ cancel and the rest double. With $(2\sqrt{2})^2 = 8$: $2[81 + 6 \cdot 9 \cdot 8 + 64]$ $= 2(577) = 1154$.`,
        t`So $I + f + f' = 1154$. Then $f + f'$ is a whole number between $0$ and $2$, so $f + f' = 1$ and $I = 1153$.`,
        t`Since $1 - f = f'$: $(I + f)(1 - f)$ $= (3 + 2\sqrt{2})^4$ $\times (3 - 2\sqrt{2})^4$.`,
        t`$(3 + 2\sqrt{2})(3 - 2\sqrt{2})$ $= 9 - 8 = 1$, so the value is $1^4 = 1$.`,
      ],
      answer: t`$I = 1153$ and $(I + f)(1 - f) = 1$.`,
    },
    visualSpec: t`A slider for $n$ that shows $(a + \sqrt{b})^n$ and its tiny partner on a number line, with their sum landing exactly on a whole number.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Believes (km - 1)^t always leaves remainder 1, forgetting that (-1)^t = -1 when t is odd",
      remediation: t`The last term of $(km - 1)^t$ is $(-1)^t$: it is $+1$ when $t$ is even and $-1$ when $t$ is odd. A last term of $-1$ turns the leftover factor $a^r$ into $-a^r$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M2",
      mistake: "Drops the leftover factor when the exponent is not a multiple of the split power, e.g. takes 5^99 as (5^2)^49",
      remediation: t`Split the exponent exactly: if $n = kt + r$, then $a^n = a^r \cdot (a^k)^t$. Multiply the last term by the leftover $a^r$ before reading off the remainder.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C10-M3",
      mistake: "Gives the negative number the expansion ends at, such as -5, as the remainder",
      remediation: t`A remainder always satisfies $0 \le r < m$. If the work ends at a negative number, add the divisor (as often as needed) until it lands in that range: $-4$ on division by $11$ becomes $7$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Takes the integer part of (a + sqrt b)^n to be the whole number (a + sqrt b)^n + (a - sqrt b)^n itself, treating the small partner as zero",
      remediation: t`The power is that whole number minus a small positive partner, so it sits just below it. Since $f + f' = 1$, the integer part is one less: $I = S - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Takes the rational part of the expansion as the integer part, as if the surd terms were the fractional part",
      remediation: t`The surd terms are not small: in $17 + 12\sqrt{2}$, $12\sqrt{2} \approx 16.97$. Add the conjugate power to get the whole number $S$; the integer part is $S - 1$.`,
      fallback: { kind: "ext", topic: "integer and fractional parts of a number" },
    },
    {
      id: "C10-M6",
      mistake: "Adds the surviving even terms once instead of twice, then subtracts 1",
      remediation: t`Each surviving term comes once from each bracket, so the sum is $2[{}^nC_0\,a^n$ $+ {}^nC_2\,a^{n-2}b + \ldots]$. Double the bracket before subtracting $1$.`,
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  engineNotes: [
    "C10-M1 to C10-M3 have models only for remainder items, and C10-M4 to C10-M6 only for integer-part items, so no item can show both groups.",
    "C10-M1 gives the key when the last term (-1)^t is +1, C10-M2 when n is a multiple of the split power k, and C10-M3 needs the work to end at a negative number: remainder items use a power that is a multiple of m minus 1, an odd t and a leftover factor.",
    "C10-M4 to C10-M6 assume the sum with the conjugate is the whole number (f + f' = 1). For (sqrt b + a)^n with a < sqrt b and n odd, the difference is the whole number (f = f') and C10-M4 would give the key, so the models refuse that case.",
    "The two-terms-survive case (9^n on division by 64) and the f = f' case are taught on the slides but not checked by an item.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`What is the remainder when $5^{99}$ is divided by $13$?`,
      verify: { kind: "value", inputs: { A: "5", n: "99", m: "13", k: "2" }, params: { ask: "rem" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C10-M1", value: "5" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C10-M2", value: "12" },
        { key: "C", text: t`$-5$`, correct: false, misconceptionId: "C10-M3", value: "-5" },
        { key: "D", text: t`$8$`, correct: true, value: "8" },
      ],
      solution: {
        steps: [
          t`$5^2 = 25 = 26 - 1$, and $26 = 2 \times 13$. So $5^{99} = 5 \cdot (5^2)^{49}$ $= 5(26 - 1)^{49}$.`,
          t`Every term of $(26 - 1)^{49}$ except the last has a factor $13$; the last is $(-1)^{49} = -1$.`,
          t`So $5^{99} = 13k - 5$ $= 13(k - 1) + 8$: the remainder is $8$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q18" },
      stem: t`What is the remainder when $2^{101}$ is divided by $9$?`,
      verify: { kind: "value", inputs: { A: "2", n: "101", m: "9", k: "3" }, params: { ask: "rem" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C10-M1", value: "4" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C10-M2", value: "8" },
        { key: "D", text: t`$-4$`, correct: false, misconceptionId: "C10-M3", value: "-4" },
      ],
      solution: {
        steps: [
          t`$2^3 = 8 = 9 - 1$. So $2^{101} = 2^2 \cdot (2^3)^{33}$ $= 4(9 - 1)^{33}$.`,
          t`Every term of $(9 - 1)^{33}$ except the last has a factor $9$; the last is $(-1)^{33} = -1$.`,
          t`So $2^{101} = 9k - 4$ $= 9(k - 1) + 5$: the remainder is $5$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $3^{41} = 7q + r$, where $q$ and $r$ are whole numbers and $0 \le r < 7$, then what is $r$?`,
      verify: { kind: "value", inputs: { A: "3", n: "41", m: "7", k: "3" }, params: { ask: "rem" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C10-M3", value: "-2" },
        { key: "B", text: t`$5$`, correct: true, value: "5" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C10-M1", value: "2" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C10-M2", value: "6" },
      ],
      solution: {
        steps: [
          t`$3^3 = 27 = 28 - 1$, and $28 = 4 \times 7$. So $3^{41} = 3^2 \cdot (3^3)^{13}$ $= 9(28 - 1)^{13}$.`,
          t`Every term of $(28 - 1)^{13}$ except the last has a factor $7$; the last is $(-1)^{13} = -1$.`,
          t`So $3^{41} = 7k - 9$ $= 7(k - 2) + 5$: $r = 5$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Apr Q49" },
      stem: t`Let $(\sqrt{2} + 1)^{10} = u + f$, where $u$ is an integer and $0 < f < 1$. What is the value of $u$?`,
      verify: { kind: "value", inputs: { a: "1", b: "2", n: "10" }, params: { ask: "int" } },
      options: [
        { key: "A", text: t`$3363$`, correct: false, misconceptionId: "C10-M5", value: "3363" },
        { key: "B", text: t`$3362$`, correct: false, misconceptionId: "C10-M6", value: "3362" },
        { key: "C", text: t`$6725$`, correct: true, value: "6725" },
        { key: "D", text: t`$6726$`, correct: false, misconceptionId: "C10-M4", value: "6726" },
      ],
      solution: {
        steps: [
          t`Let $v = (\sqrt{2} - 1)^{10}$. Since $\sqrt{2} - 1 \approx 0.41$, $0 < v < 1$.`,
          t`$(\sqrt{2} + 1)^2 = 3 + 2\sqrt{2}$, so the sum $(3 + 2\sqrt{2})^5$ $+ (3 - 2\sqrt{2})^5$ $= 2[243 + 10 \cdot 27 \cdot 8$ $+ 5 \cdot 3 \cdot 64]$ $= 6726$.`,
          t`So $u + f + v = 6726$, and $0 < f + v < 2$ gives $f + v = 1$.`,
          t`So $u = 6726 - 1 = 6725$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q22" },
      stem: t`If $k < (2 + \sqrt{3})^4 < k + 1$, where $k$ is a natural number, then what is the value of $k$?`,
      verify: { kind: "value", inputs: { a: "2", b: "3", n: "4" }, params: { ask: "int" } },
      options: [
        { key: "A", text: t`$193$`, correct: true, value: "193" },
        { key: "B", text: t`$194$`, correct: false, misconceptionId: "C10-M4", value: "194" },
        { key: "C", text: t`$97$`, correct: false, misconceptionId: "C10-M5", value: "97" },
        { key: "D", text: t`$96$`, correct: false, misconceptionId: "C10-M6", value: "96" },
      ],
      solution: {
        steps: [
          t`$(2 + \sqrt{3})^4$ $+ (2 - \sqrt{3})^4$ $= 2[16 + 6 \cdot 4 \cdot 3 + 9] = 2(97) = 194$.`,
          t`$2 - \sqrt{3} \approx 0.27$, so $0 < (2 - \sqrt{3})^4 < 1$.`,
          t`So $(2 + \sqrt{3})^4$ is $194$ minus a small positive number: it lies between $193$ and $194$, and $k = 193$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q45" },
      stem: t`Let $(8 + 3\sqrt{7})^3 = U + V$, where $U$ is an integer and $0 < V < 1$. What is $U$?`,
      verify: { kind: "value", inputs: { a: "8", b: "63", n: "3" }, params: { ask: "int" } },
      options: [
        { key: "A", text: t`$4047$`, correct: true, value: "4047" },
        { key: "B", text: t`$4048$`, correct: false, misconceptionId: "C10-M4", value: "4048" },
        { key: "C", text: t`$2024$`, correct: false, misconceptionId: "C10-M5", value: "2024" },
        { key: "D", text: t`$2023$`, correct: false, misconceptionId: "C10-M6", value: "2023" },
      ],
      solution: {
        steps: [
          t`Let $W = (8 - 3\sqrt{7})^3$. Since $3\sqrt{7} = \sqrt{63} \approx 7.94$, $0 < W < 1$.`,
          t`In the sum $(8 + 3\sqrt{7})^3 + W$ the odd powers of $3\sqrt{7}$ cancel: $2[512 + 3 \cdot 8 \cdot 63]$ $= 4048$.`,
          t`So $U + V + W = 4048$, and $0 < V + W < 2$ gives $V + W = 1$.`,
          t`So $U = 4048 - 1 = 4047$.`,
        ],
      },
    },
  ],
};
