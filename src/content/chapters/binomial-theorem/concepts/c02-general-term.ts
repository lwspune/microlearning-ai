import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`The $5$th term of $\left(2x - \frac{1}{x}\right)^8$: **does it carry $^8C_5$ or $^8C_4$?**`,
    reveal: t`$^8C_4$. The terms carry $^8C_0, {}^8C_1, {}^8C_2, \ldots$ in order, so the $5$th one has $^8C_4$: $T_5 = {}^8C_4\,(2x)^4\left(-\frac{1}{x}\right)^4 = 70 \cdot 16 = 1120$. The $x$'s cancel, and the even power makes it positive.`,
  },
  explanation: {
    intuition: t`Each term of $(a + b)^n$ takes $b$ from $r$ of the $n$ brackets and $a$ from the other $n - r$, in $^nC_r$ ways. The first term takes $b$ from no bracket: $r = 0$. So $r$ counts the $b$'s, and the term's place is one more than $r$: $r = 4$ gives the $5$th term. $b$ brings its sign along, so in $(a - b)^n$ the odd powers of $b$ are negative.`,
    formal: t`**The general term**

$$T_{r+1} = {}^nC_r\,a^{n-r}\,b^r, \qquad r = 0, 1, 2, \ldots, n$$

**For the $k$th term, take $r = k - 1$.** The $5$th term has $r = 4$: $^nC_4\,a^{n-4}\,b^4$. The powers of $a$ and $b$ add up to $n$, and $b$'s power is the same $r$ as in $^nC_r$.

**Put $a$ and $b$ in whole.** In $(a - b)^n$, $b$ enters as $-b$, so the term is negative when $r$ is odd. Raise numbers too: $(2x^2)^4 = 16x^8$.

**Counting from the end.** There are $n + 1$ terms, so the $k$th term from the end is the $(n - k + 2)$th from the start. In $(x + 2)^6$, the $2$nd term from the end is $T_6 = {}^6C_5\,x\,(2)^5 = 192x$.`,
    worked: {
      prompt: t`Find the $5$th term in the expansion of $\left(2x^2 + \frac{3}{2x}\right)^8$.`,
      steps: [
        t`$a = 2x^2$, $b = \frac{3}{2x}$, $n = 8$. The $5$th term is $T_{r+1}$ with $r = 4$.`,
        t`$T_5 = {}^8C_4\,(2x^2)^{8-4}\left(\frac{3}{2x}\right)^4$.`,
        t`$^8C_4 = \frac{8 \cdot 7 \cdot 6 \cdot 5}{4 \cdot 3 \cdot 2 \cdot 1} = 70$, $(2x^2)^4 = 16x^8$ and $\left(\frac{3}{2x}\right)^4 = \frac{81}{16x^4}$.`,
        t`$T_5 = 70 \cdot 16x^8 \cdot \frac{81}{16x^4} = 5670x^4$.`,
      ],
      answer: t`The $5$th term is $5670x^4$.`,
    },
    visualSpec: t`Slide $r$ from $0$ to $n$: the term's place $r + 1$ and its place from the end update, while the powers of $a$ and $b$ trade off, always adding up to $n$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Takes r equal to the term's number: the kth term as ⁿC_k a^(n−k) b^k",
      remediation: t`The first term carries $^nC_0$, so the $k$th term is $T_{r+1}$ with $r = k - 1$. For the $5$th term, use $r = 4$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: "Drops the minus sign of b: works out (a − b)ⁿ as if it were (a + b)ⁿ",
      remediation: t`In $(a - b)^n$, $b$ enters as $-b$, so the term has $(-b)^r$: negative when $r$ is odd, positive when $r$ is even.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: "Swaps the powers: ⁿC_r a^r b^(n−r)",
      remediation: t`In $T_{r+1}$, $b$ carries the same power $r$ as in $^nC_r$, and $a$ carries $n - r$. Swapping them gives the term just as far from the other end.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Raises only the variable, not its number: (2x²)⁴ = 2x⁸",
      remediation: t`A power applies to every factor: $(2x^2)^4 = 2^4x^8 = 16x^8$. Raise the number, with its sign, along with the variable.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C02-M5",
      mistake: "Takes the kth term from the end as the (n − k + 1)th from the start",
      remediation: t`There are $n + 1$ terms, so the $k$th from the end is the $(n - k + 2)$th from the start. Check with the last term: $k = 1$ gives the $(n + 1)$th.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M2 gives the key when $b$ has no minus sign or $r$ is even: diagnose it with $(a - b)^n$ and an odd $r$.`,
    t`C02-M3 gives the key for a middle term ($n = 2r$, e.g. the $5$th term of an $8$th power), and its value is the $k$th term from the start on an item asking for the $k$th from the end.`,
    t`C02-M4 needs a number other than $\pm 1$ in $a$ or $b$, raised to a power of at least $2$.`,
    "C02-M5 applies only to items counting from the end.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q1(ii)" },
      stem: t`The $5$th term in the expansion of $\left(x^2 - \frac{4}{x^3}\right)^{11}$ is:`,
      verify: { kind: "value", inputs: { a: "x**2", b: "-4/x**3", n: "11", k: "5" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$84480 x^{2}$`, correct: true, value: "84480*x**2" },
        { key: "B", text: t`$- \frac{473088}{x^{3}}$`, correct: false, misconceptionId: "C02-M1", value: "-473088/x**3" },
        { key: "C", text: t`$- \frac{5406720}{x^{13}}$`, correct: false, misconceptionId: "C02-M3", value: "-5406720/x**13" },
        { key: "D", text: t`$- 1320 x^{2}$`, correct: false, misconceptionId: "C02-M4", value: "-1320*x**2" },
      ],
      solution: {
        steps: [
          t`$a = x^2$, $b = -\frac{4}{x^3}$, $n = 11$. The $5$th term is $T_5$, so $r = 4$.`,
          t`$T_5 = {}^{11}C_4\,(x^2)^7\left(-\frac{4}{x^3}\right)^4 = 330 \cdot x^{14} \cdot \frac{256}{x^{12}}$. The even power makes it positive.`,
          t`$T_5 = 84480x^2$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q7" },
      stem: t`The $10$th term in the expansion of $\left(2x^2 + \frac{1}{x}\right)^{12}$ is:`,
      verify: { kind: "value", inputs: { a: "2*x**2", b: "1/x", n: "12", k: "10" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$\frac{264}{x^{6}}$`, correct: false, misconceptionId: "C02-M1", value: "264/x**6" },
        { key: "B", text: t`$112640 x^{15}$`, correct: false, misconceptionId: "C02-M3", value: "112640*x**15" },
        { key: "C", text: t`$\frac{440}{x^{3}}$`, correct: false, misconceptionId: "C02-M4", value: "440/x**3" },
        { key: "D", text: t`$\frac{1760}{x^{3}}$`, correct: true, value: "1760/x**3" },
      ],
      solution: {
        steps: [
          t`$a = 2x^2$, $b = \frac{1}{x}$, $n = 12$. The $10$th term is $T_{10}$, so $r = 9$.`,
          t`$T_{10} = {}^{12}C_9\,(2x^2)^3\left(\frac{1}{x}\right)^9 = 220 \cdot 8x^6 \cdot \frac{1}{x^9}$.`,
          t`$T_{10} = \frac{1760}{x^3}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/4.3 SolvedEx.3" },
      stem: t`The $6$th term in the expansion of $\left(2x - \frac{1}{4x}\right)^{9}$ is:`,
      verify: { kind: "value", inputs: { a: "2*x", b: "-1/(4*x)", n: "9", k: "6" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$\frac{63 x}{4}$`, correct: false, misconceptionId: "C02-M3", value: "63*x/4" },
        { key: "B", text: t`$- \frac{63}{32 x}$`, correct: true, value: "-63/(32*x)" },
        { key: "C", text: t`$\frac{63}{32 x}$`, correct: false, misconceptionId: "C02-M2", value: "63/(32*x)" },
        { key: "D", text: t`$\frac{21}{128 x^{3}}$`, correct: false, misconceptionId: "C02-M1", value: "21/(128*x**3)" },
      ],
      solution: {
        steps: [
          t`$a = 2x$, $b = -\frac{1}{4x}$, $n = 9$. The $6$th term is $T_6$, so $r = 5$.`,
          t`$T_6 = {}^9C_5\,(2x)^4\left(-\frac{1}{4x}\right)^5 = 126 \cdot 16x^4 \cdot \left(-\frac{1}{1024x^5}\right)$. The odd power keeps the minus sign.`,
          t`$T_6 = -\frac{2016}{1024x} = -\frac{63}{32x}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q1(iii)" },
      stem: t`The $4$th term from the end in the expansion of $\left(\frac{4x}{5} - \frac{5}{2x}\right)^{9}$ is:`,
      verify: { kind: "value", inputs: { a: "4*x/5", b: "-5/(2*x)", n: "9", k: "4" }, params: { ask: "end" } },
      options: [
        { key: "A", text: t`$- \frac{168}{x^{3}}$`, correct: false, misconceptionId: "C02-M4", value: "-168/x**3" },
        { key: "B", text: t`$\frac{10500}{x^{3}}$`, correct: true, value: "10500/x**3" },
        { key: "C", text: t`$- \frac{5040}{x}$`, correct: false, misconceptionId: "C02-M5", value: "-5040/x" },
        { key: "D", text: t`$- \frac{43008 x^{3}}{125}$`, correct: false, misconceptionId: "C02-M3", value: "-43008*x**3/125" },
      ],
      solution: {
        steps: [
          t`$n = 9$, so there are $10$ terms. The $4$th from the end is the $(9 - 4 + 2) = 7$th from the start: $T_7$, with $r = 6$.`,
          t`$T_7 = {}^9C_6\left(\frac{4x}{5}\right)^3\left(-\frac{5}{2x}\right)^6 = 84 \cdot \frac{64x^3}{125} \cdot \frac{15625}{64x^6}$.`,
          t`$T_7 = \frac{84 \cdot 125}{x^3} = \frac{10500}{x^3}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q6" },
      stem: t`The $2$nd term from the end in the expansion of $\left(9x^2 - \frac{y^3}{6}\right)^{4}$ is:`,
      verify: { kind: "value", inputs: { a: "9*x**2", b: "-y**3/6", n: "4", k: "2" }, params: { ask: "end" } },
      options: [
        { key: "A", text: t`$- 486 x^{6} y^{3}$`, correct: false, misconceptionId: "C02-M3", value: "-486*x**6*y**3" },
        { key: "B", text: t`$- \frac{x^{2} y^{9}}{6}$`, correct: true, value: "-x**2*y**9/6" },
        { key: "C", text: t`$\frac{x^{2} y^{9}}{6}$`, correct: false, misconceptionId: "C02-M2", value: "x**2*y**9/6" },
        { key: "D", text: t`$\frac{27 x^{4} y^{6}}{2}$`, correct: false, misconceptionId: "C02-M5", value: "27*x**4*y**6/2" },
      ],
      solution: {
        steps: [
          t`$n = 4$, so there are $5$ terms. The $2$nd from the end is the $(4 - 2 + 2) = 4$th from the start: $T_4$, with $r = 3$.`,
          t`$T_4 = {}^4C_3\,(9x^2)\left(-\frac{y^3}{6}\right)^3 = 4 \cdot 9x^2 \cdot \left(-\frac{y^9}{216}\right)$. The odd power keeps the minus sign.`,
          t`$T_4 = -\frac{36x^2y^9}{216} = -\frac{x^2y^9}{6}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc I Q9" },
      stem: t`The coefficient of the $8$th term in the expansion of $(2 + x)^{10}$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "x", n: "10", k: "8" }, params: { ask: "coef" } },
      options: [
        { key: "A", text: t`$960$`, correct: true, value: "960" },
        { key: "B", text: t`$180$`, correct: false, misconceptionId: "C02-M1", value: "180" },
        { key: "C", text: t`$15360$`, correct: false, misconceptionId: "C02-M3", value: "15360" },
        { key: "D", text: t`$240$`, correct: false, misconceptionId: "C02-M4", value: "240" },
      ],
      solution: {
        steps: [
          t`$a = 2$, $b = x$, $n = 10$. The $8$th term is $T_8$, so $r = 7$.`,
          t`$T_8 = {}^{10}C_7\,(2)^3x^7 = 120 \cdot 8x^7 = 960x^7$.`,
          t`Its coefficient is $960$.`,
        ],
      },
    },
  ],
};
