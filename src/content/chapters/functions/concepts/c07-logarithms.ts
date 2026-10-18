import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Given $\log_{10} 2 \approx 0.3010$, **how many digits does $2^{20}$ have**, without multiplying it out?`,
    reveal: t`The power rule brings the $20$ down: $\log_{10} 2^{20} = 20 \times 0.3010$ $= 6.02$. So $10^6 < 2^{20} < 10^7$, and $2^{20}$ has $7$ digits. Indeed $2^{20} = 1048576$.`,
  },
  explanation: {
    intuition: [
      t`The **logarithm** $\log_a x$ answers one question: what power of $a$ gives $x$?`,
      t`So $\log_2 8 = 3$, because $2^3 = 8$; the number $2$ is the **base**.`,
      t`In symbols: $\log_a x = y$ means exactly $a^y = x$.`,
      t`Logs turn products into sums: $\log_2 (4 \times 8) = 2 + 3 = 5$.`,
      t`They turn powers into multiples: $\log_2 8^2 = 2 \times 3 = 6$.`,
      t`Both come from the index laws $a^p a^q = a^{p + q}$ and $(a^p)^k = a^{pk}$.`,
    ],
    formal: [
      {
        title: "The definition",
        points: [
          t`For a **base** $a > 0$, $a \ne 1$, and $x > 0$: $\log_a x = y$ means $a^y = x$.`,
          t`So $\log_3 81 = 4$, since $3^4 = 81$; and $\log_2 \frac{1}{8} = -3$, since $2^{-3} = \frac{1}{8}$.`,
          t`Two values to know: $\log_a 1 = 0$ and $\log_a a = 1$.`,
          t`To undo a log, raise the base to it: $\log_2 x = 5$ gives $x = 2^5 = 32$.`,
          t`Keep the roles: the base is raised to the log, so it is $2^5$, never $5^2$.`,
          t`A rule written with plain $\log$ holds in every base; $\ln x$ means $\log_e x$.`,
        ],
      },
      {
        title: "Product and quotient rules",
        points: [
          t`**Product rule:** $\log_a mn = \log_a m + \log_a n$, for $m, n > 0$.`,
          t`**Quotient rule:** $\log_a \frac{m}{n} = \log_a m - \log_a n$.`,
          t`For example, $\log 72 = \log (8 \times 9)$ $= \log 8 + \log 9$.`,
          t`A log of a **sum** has no rule: $\log (m + n)$ is not $\log m + \log n$.`,
          t`Check: $\log_2 (4 + 4) = 3$, but $\log_2 4 + \log_2 4 = 4$.`,
          t`And $\log \frac{m}{n}$ is a difference of logs, not the fraction $\frac{\log m}{\log n}$.`,
        ],
      },
      {
        title: "Power rule",
        points: [
          t`**Power rule:** $\log_a m^k = k \log_a m$: the power comes down in front.`,
          t`For example, $\log 72 = \log 2^3 + \log 3^2$ $= 3\log 2 + 2\log 3$.`,
          t`A root is a power too: $\log \sqrt[3]{m} = \frac{1}{3} \log m$.`,
          t`$\log m^k$ is not $(\log m)^k$: $\log_2 4^3 = 6$, but $(\log_2 4)^3 = 8$.`,
          t`Read back, a number in front goes up as a power: $3\log_2 4 = \log_2 4^3$.`,
          t`So $3\log_2 4 = \log_2 64 = 6$, never $\log_2 (3 \times 4) = \log_2 12$.`,
        ],
      },
      {
        title: "Change of base",
        points: [
          t`**Change of base:** $\log_a b = \dfrac{\log b}{\log a}$, both logs taken in one base.`,
          t`The base goes underneath: $\log_8 32 = \dfrac{\log_2 32}{\log_2 8}$ $= \dfrac{5}{3}$.`,
          t`Upside down gives $\log_{32} 8 = \frac{3}{5}$, a different number.`,
          t`Swapping base and argument gives the reciprocal: $\log_a b \times \log_b a = 1$.`,
          t`Read back, a fraction of logs in one base is one log: $\dfrac{\log_2 32}{\log_2 8} = \log_8 32$.`,
          t`It is not $\log_2 \frac{32}{8} = 2$, and the logs don't cancel to $\frac{32}{8} = 4$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $\log_2 x + \log_4 x + \log_{16} x = \frac{21}{4}$.`,
      steps: [
        t`Change to base $2$: $\log_4 x = \dfrac{\log_2 x}{\log_2 4}$ $= \dfrac{1}{2}\log_2 x$.`,
        t`Likewise $\log_{16} x = \dfrac{\log_2 x}{\log_2 16}$ $= \dfrac{1}{4}\log_2 x$.`,
        t`Add: $\left(1 + \frac{1}{2} + \frac{1}{4}\right)\log_2 x$ $= \frac{7}{4}\log_2 x = \frac{21}{4}$, so $\log_2 x = 3$.`,
        t`By the definition, $x = 2^3 = 8$.`,
      ],
      answer: t`$x = 8$. Check: $\log_2 8 + \log_4 8 + \log_{16} 8$ $= 3 + \frac{3}{2} + \frac{3}{4} = \frac{21}{4}$.`,
    },
    visualSpec: t`Slide two points along the curve $y = \log_2 x$ at $m$ and $n$, and watch the height at $mn$ match the two heights added.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Treats $\log$ like a number multiplying its argument: $\log (m + n) = \log m + \log n$, and $\dfrac{\log m}{\log n} = \dfrac{m}{n}$.`,
      remediation: t`A log is not a factor that spreads over a sum or cancels in a fraction. Only products split, $\log mn = \log m + \log n$; and $\dfrac{\log m}{\log n}$ is the single log $\log_n m$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C07-M2",
      mistake: t`Takes the log of a product or quotient as the product or quotient of the logs: $\log mn = \log m \cdot \log n$, $\log \frac{m}{n} = \frac{\log m}{\log n}$, and back.`,
      remediation: t`Logs turn products into **sums** and quotients into **differences**: $\log mn = \log m + \log n$ and $\log \frac{m}{n} = \log m - \log n$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C07-M3",
      mistake: t`Takes $\log m^k$ as $(\log m)^k$: the power stays on the log.`,
      remediation: t`The power comes down in front: $\log m^k = k \log m$. $(\log m)^k$ raises the log itself to a power, a different number.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C07-M4",
      mistake: t`Takes $k \log m$ as $\log km$ (and $\log m^k$ as $\log km$): the power becomes a factor inside.`,
      remediation: t`A number in front of a log goes up as a **power**: $k \log m = \log m^k$. So $2\log 5 = \log 25$, not $\log 10$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C07-M5",
      mistake: t`Swaps the base and the argument: reads $\log_a b$ as $\log_b a$, or writes the change of base upside down.`,
      remediation: t`In $\log_a b = \dfrac{\log b}{\log a}$ the base goes underneath. Swapping base and argument gives the reciprocal, $\log_b a = \dfrac{1}{\log_a b}$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C07-M6",
      mistake: t`Reads $\log_a x = y$ as $x = y^a$: the base and the exponent change places.`,
      remediation: t`$\log_a x = y$ means $a^y = x$: the base is raised to the log. So $\log_2 x = 5$ gives $x = 2^5 = 32$, not $5^2$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    t`C07-M5 gives the key when $\log_a b = \pm 1$; C07-M3 on a plain $\log_a a^e$ gives $1$, the key when $e = 1$.`,
    t`C07-M6 gives the key when $y^a = a^y$ (for example $\log_2 x = 4$, since $2^4 = 4^2$): why Misc I Q3's $2\log_2 x = 4$ became $2\log_3 x = 4$.`,
    t`C07-M4 gives the key when $m^k = km$ (for example $2\log 2$); C07-M1 needs a sum inside a log or a fraction of logs.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.1 SolvedEx.16" },
      stem: t`$\dfrac{\log_4 81}{\log_4 9}$ equals`,
      verify: { kind: "value", inputs: { m: "81", n: "9", a: "4" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$\log_4 9$`, correct: false, misconceptionId: "C07-M2", value: "log(3)/log(2)" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M5", value: "1/2" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C07-M1", value: "9" },
      ],
      solution: {
        steps: [
          t`A fraction of logs in one base is one log, by change of base read back: $\dfrac{\log_4 81}{\log_4 9} = \log_9 81$.`,
          t`$9^2 = 81$, so $\log_9 81 = 2$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.1 Q22" },
      stem: t`If $\log 2 = a$ and $\log 3 = b$, then $\log \sqrt{96}$ equals`,
      verify: { kind: "value", inputs: { N: "96", k: "1/2" }, params: { ask: "logpow" } },
      options: [
        { key: "A", text: t`$\dfrac{5ab}{2}$`, correct: false, misconceptionId: "C07-M2", value: "5*a*b/2" },
        { key: "B", text: t`$\sqrt{5a + b}$`, correct: false, misconceptionId: "C07-M3", value: "sqrt(5*a + b)" },
        { key: "C", text: t`$4a + b$`, correct: false, misconceptionId: "C07-M4", value: "4*a + b" },
        { key: "D", text: t`$\dfrac{5a + b}{2}$`, correct: true, value: "5*a/2 + b/2" },
      ],
      solution: {
        steps: [
          t`$96 = 2^5 \times 3$, so $\sqrt{96} = (2^5 \times 3)^{1/2}$.`,
          t`Power rule: $\log \sqrt{96} = \frac{1}{2}\log (2^5 \times 3)$.`,
          t`Product and power rules: $\log (2^5 \times 3) = 5\log 2 + \log 3$ $= 5a + b$.`,
          t`So $\log \sqrt{96} = \dfrac{5a + b}{2}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/6.1 SolvedEx.12" },
      stem: t`$\ln e^9 - \ln e^4$ equals`,
      verify: { kind: "value", inputs: { p: "9", q: "4" }, params: { ask: "lnexp" } },
      options: [
        { key: "A", text: t`$\ln \dfrac{9}{4}$`, correct: false, misconceptionId: "C07-M4", value: "log(9/4)" },
        { key: "B", text: t`$5$`, correct: true, value: "5" },
        { key: "C", text: t`$\ln(e^9 - e^4)$`, correct: false, misconceptionId: "C07-M1", value: "log(-exp(4) + exp(9))" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C07-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`Power rule: $\ln e^9 = 9\ln e = 9$, since $\ln e = 1$.`,
          t`Likewise $\ln e^4 = 4\ln e = 4$.`,
          t`So $\ln e^9 - \ln e^4 = 9 - 4 = 5$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc I Q3" },
      stem: t`If $2\log_3 x = 4$, then $x$ equals`,
      verify: { kind: "value", inputs: { k: "2", a: "3", c: "4" }, params: { ask: "solve" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$\frac{81}{2}$`, correct: false, misconceptionId: "C07-M4", value: "81/2" },
        { key: "C", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C07-M5", value: "sqrt(3)" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C07-M6", value: "8" },
      ],
      solution: {
        steps: [
          t`Divide both sides by $2$: $\log_3 x = 2$.`,
          t`By the definition, $x = 3^2 = 9$.`,
          t`Check: $2\log_3 9 = 2 \times 2 = 4$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.1 Q18(b)" },
      stem: t`$\log_5 \dfrac{1}{25}$ equals`,
      verify: { kind: "value", inputs: { a: "5", N: "1/25" }, params: { ask: "eval" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C07-M2", value: "0" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C07-M3", value: "1" },
        { key: "C", text: t`$-\frac{1}{2}$`, correct: false, misconceptionId: "C07-M5", value: "-1/2" },
        { key: "D", text: t`$-2$`, correct: true, value: "-2" },
      ],
      solution: {
        steps: [
          t`Write $\frac{1}{25}$ as a power of $5$: $\frac{1}{25} = 5^{-2}$.`,
          t`Power rule: $\log_5 5^{-2} = -2\log_5 5 = -2$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.1 Q23(b)" },
      stem: t`Changing to base $3$, $\log_9 27$ equals`,
      verify: { kind: "value", inputs: { m: "27", n: "9", a: "3" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C07-M1", value: "3" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C07-M2", value: "1" },
        { key: "D", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C07-M5", value: "2/3" },
      ],
      solution: {
        steps: [
          t`Change of base: $\log_9 27 = \dfrac{\log_3 27}{\log_3 9}$, base $3$ underneath.`,
          t`$3^3 = 27$ and $3^2 = 9$, so this is $\dfrac{3}{2}$.`,
        ],
      },
    },
  ],
};
