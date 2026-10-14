import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A classmate says the middle term of $(a + b)^{20}$ is the $10$th term, because $20 \div 2 = 10$. **Is that right?**`,
    reveal: t`No. $(a + b)^{20}$ has $21$ terms, not $20$. The middle one has $10$ terms before it and $10$ after, so it is the $11$th term: $T_{11} = {}^{20}C_{10}\,a^{10}b^{10}$. Half of $n$ is the middle term's $r$, not its number.`,
  },
  explanation: {
    intuition: t`Write out $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$. Five terms, and the middle one, $6a^2b^2$, has $a$ and $b$ to the same power. In general $(a + b)^n$ has $n + 1$ terms. For even $n$ that count is odd, so one term sits in the middle; for odd $n$ the count is even, so two terms share the middle. Find the term's number, take $r$ one less, and the general term does the rest.`,
    formal: t`**Count first.** $(a + b)^n$ has $n + 1$ terms.

**$n$ even:** one middle term, $T_{\frac{n}{2}+1}$, with $r = \frac{n}{2}$.

**$n$ odd:** two middle terms, $T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$, with $r = \frac{n-1}{2}$ and $r = \frac{n+1}{2}$.

**Then use the general term** $T_{r+1} = {}^nC_r\,a^{n-r}b^r$. Raise the whole of $a$ and of $b$, numbers and signs included.

**Example.** In $\left(x^2 + \frac{2}{x}\right)^8$, $n = 8$ is even, so the middle term is $T_5$, with $r = 4$:
$$T_5 = {}^8C_4\,(x^2)^4\left(\frac{2}{x}\right)^4 = 70 \cdot x^8 \cdot \frac{16}{x^4} = 1120x^4$$`,
    worked: {
      prompt: t`Find the middle term(s) in the expansion of $\left(x^2 + \frac{1}{x}\right)^7$.`,
      steps: [
        t`Count: $n = 7$, so there are $8$ terms. An even count has two middle terms.`,
        t`They are $T_{\frac{7+1}{2}} = T_4$ and $T_{\frac{7+3}{2}} = T_5$: three terms before them and three after. Their $r$ values are $3$ and $4$.`,
        t`$T_4 = {}^7C_3\,(x^2)^4\left(\frac{1}{x}\right)^3 = 35 \cdot x^8 \cdot \frac{1}{x^3} = 35x^5$.`,
        t`$T_5 = {}^7C_4\,(x^2)^3\left(\frac{1}{x}\right)^4 = 35 \cdot x^6 \cdot \frac{1}{x^4} = 35x^2$.`,
      ],
      answer: t`$35x^5$ and $35x^2$.`,
    },
    visualSpec: t`The $n + 1$ terms of $(a + b)^n$ laid out as a row of tiles; a slider changes $n$, and the single middle tile (even $n$) splits into two (odd $n$), each showing its term number and its $r$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Counting $n$ terms in $(a + b)^n$ instead of $n + 1$, so even $n$ gets two middle terms and odd $n$ only one`,
      remediation: t`$(a + b)^n$ has $n + 1$ terms. For even $n$ that count is odd, so there is one middle term, $T_{\frac{n}{2}+1}$; for odd $n$ there are two.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: t`Putting $r$ equal to the middle term's number: using $r = k$ for $T_k$, which gives the next term $T_{k+1}$`,
      remediation: t`The $k$th term is $T_k = T_{r+1}$ with $r = k - 1$. For the middle term $T_{\frac{n}{2}+1}$, use $r = \frac{n}{2}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M3",
      mistake: t`Halving $n$ to get the middle term's number: $T_{\frac{n}{2}}$ for even $n$, and $T_{\frac{n-1}{2}}$, $T_{\frac{n+1}{2}}$ for odd $n$`,
      remediation: t`Half of $n$ is the middle term's $r$, not its number. The middle term is $T_{\frac{n}{2}+1}$, with $\frac{n}{2}$ terms on each side; for odd $n$ they are $T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M4",
      mistake: t`Dropping the minus sign of a negative term: taking $(-b)^r$ as $b^r$`,
      remediation: t`Keep the sign inside the bracket: $(-b)^r = b^r$ when $r$ is even, but $-b^r$ when $r$ is odd.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Raising only the variable to the power, not the number with it: $(2x)^3 = 2x^3$`,
      remediation: t`A power applies to the whole bracket, number and sign included: $(2x)^3 = 8x^3$ and $\left(-\frac{1}{2x}\right)^2 = \frac{1}{4x^2}$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C05-M6",
      mistake: t`Giving the binomial coefficient $^nC_r$ as the coefficient of the term, leaving out the numbers that come from $a^{n-r}b^r$`,
      remediation: t`The coefficient of a term is the whole number in front of its variables: $^nC_r$ multiplied by the numbers from $a^{n-r}$ and $b^r$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C05-M4 needs a negative term and an odd $r$ at a middle term: always so for odd $n$ (the two middle $r$ values are consecutive), but for even $n$ only when $\frac{n}{2}$ is odd. C05-M5 needs a number other than $\pm 1$ in $a$ or $b$. C05-M6 applies only to coefficient questions.`,
    t`Position questions with a letter for $n$ (like $(1 + x)^{2n}$) can only test C05-M1, C05-M2 and C05-M3; the model needs params.parity there.`,
    t`For even $n$, C05-M1's answer (two terms) contains the key term; it is still a different answer, since it claims two middle terms.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc I Q2" },
      stem: t`Let $n$ be a positive integer. In the expansion of $(1 + x)^{2n}$, the middle term(s) is/are:`,
      verify: { kind: "value", inputs: { n: "2*n" }, params: { ask: "position", parity: "even" } },
      options: [
        { key: "A", text: t`the $n$th term`, correct: false, misconceptionId: "C05-M3", value: "n" },
        { key: "B", text: t`the $(n + 1)$th term`, correct: true, value: "n + 1" },
        { key: "C", text: t`the $n$th and $(n + 1)$th terms`, correct: false, misconceptionId: "C05-M1", value: "(n, n + 1)" },
        { key: "D", text: t`the $(n + 2)$th term`, correct: false, misconceptionId: "C05-M2", value: "n + 2" },
      ],
      solution: {
        steps: [
          t`The index is $2n$, so $(1 + x)^{2n}$ has $2n + 1$ terms: an odd count, so one middle term.`,
          t`It has $n$ terms before it and $n$ after, so it is the $(n + 1)$th term, $T_{\frac{2n}{2}+1} = T_{n+1}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q4(i)" },
      stem: t`The middle term(s) in the expansion of $\left(\frac{x}{y} + \frac{y}{x}\right)^{12}$:`,
      verify: { kind: "value", inputs: { a: "x/y", b: "y/x", n: "12" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$\frac{792 x^{2}}{y^{2}}$ and $924$`, correct: false, misconceptionId: "C05-M1", value: "(792*x**2/y**2, 924)" },
        { key: "B", text: t`$\frac{792 y^{2}}{x^{2}}$`, correct: false, misconceptionId: "C05-M2", value: "792*y**2/x**2" },
        { key: "C", text: t`$\frac{792 x^{2}}{y^{2}}$`, correct: false, misconceptionId: "C05-M3", value: "792*x**2/y**2" },
        { key: "D", text: t`$924$`, correct: true, value: "924" },
      ],
      solution: {
        steps: [
          t`$n = 12$ is even: $13$ terms, so one middle term, $T_{\frac{12}{2}+1} = T_7$, with $r = 6$.`,
          t`$T_7 = {}^{12}C_6\left(\frac{x}{y}\right)^6\left(\frac{y}{x}\right)^6 = 924 \cdot \frac{x^6}{y^6} \cdot \frac{y^6}{x^6} = 924$. The middle term is a constant.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q4(v)" },
      stem: t`The middle term(s) in the expansion of $\left(x^4 - \frac{1}{x^3}\right)^{11}$:`,
      verify: { kind: "value", inputs: { a: "x**4", b: "-1/x**3", n: "11" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$- 462 x^{9}$ and $462 x^{2}$`, correct: true, value: "(-462*x**9, 462*x**2)" },
        { key: "B", text: t`$- 462 x^{9}$`, correct: false, misconceptionId: "C05-M1", value: "-462*x**9" },
        { key: "C", text: t`$462 x^{2}$ and $- \frac{330}{x^{5}}$`, correct: false, misconceptionId: "C05-M2", value: "(462*x**2, -330/x**5)" },
        { key: "D", text: t`$462 x^{9}$ and $462 x^{2}$`, correct: false, misconceptionId: "C05-M4", value: "(462*x**9, 462*x**2)" },
      ],
      solution: {
        steps: [
          t`$n = 11$ is odd: $12$ terms, so two middle terms, $T_{\frac{11+1}{2}} = T_6$ and $T_{\frac{11+3}{2}} = T_7$.`,
          t`$T_6$, with $r = 5$: $^{11}C_5\,(x^4)^6\left(-\frac{1}{x^3}\right)^5 = 462 \cdot x^{24} \cdot \left(-\frac{1}{x^{15}}\right) = -462x^9$. An odd power of a negative term is negative.`,
          t`$T_7$, with $r = 6$: $^{11}C_6\,(x^4)^5\left(-\frac{1}{x^3}\right)^6 = 462 \cdot x^{20} \cdot \frac{1}{x^{18}} = 462x^2$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc I Q8" },
      stem: t`In the expansion of $(3x + 2)^4$, the coefficient of the middle term is:`,
      verify: { kind: "value", inputs: { a: "3*x", b: "2", n: "4" }, params: { ask: "coeff" } },
      options: [
        { key: "A", text: t`$36$`, correct: false, misconceptionId: "C05-M5", value: "36" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C05-M6", value: "6" },
        { key: "C", text: t`$216$`, correct: true, value: "216" },
        { key: "D", text: t`$96$`, correct: false, misconceptionId: "C05-M2", value: "96" },
      ],
      solution: {
        steps: [
          t`$n = 4$ is even: $5$ terms, so one middle term, $T_{\frac{4}{2}+1} = T_3$, with $r = 2$.`,
          t`$T_3 = {}^4C_2\,(3x)^2(2)^2 = 6 \cdot 9x^2 \cdot 4 = 216x^2$. The whole of $3x$ is squared: $(3x)^2 = 9x^2$.`,
          t`The coefficient is the whole number in front of $x^2$: $216$, not just $^4C_2 = 6$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q8(ii)" },
      stem: t`The middle term(s) in the expansion of $\left(x - \frac{1}{2y}\right)^{10}$:`,
      verify: { kind: "value", inputs: { a: "x", b: "-1/(2*y)", n: "10" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$- \frac{63 x^{5}}{8 y^{5}}$`, correct: true, value: "-63*x**5/(8*y**5)" },
        { key: "B", text: t`$\frac{105 x^{6}}{8 y^{4}}$`, correct: false, misconceptionId: "C05-M3", value: "105*x**6/(8*y**4)" },
        { key: "C", text: t`$\frac{63 x^{5}}{8 y^{5}}$`, correct: false, misconceptionId: "C05-M4", value: "63*x**5/(8*y**5)" },
        { key: "D", text: t`$- \frac{126 x^{5}}{y^{5}}$`, correct: false, misconceptionId: "C05-M5", value: "-126*x**5/y**5" },
      ],
      solution: {
        steps: [
          t`$n = 10$ is even: $11$ terms, so one middle term, $T_{\frac{10}{2}+1} = T_6$, with $r = 5$.`,
          t`$T_6 = {}^{10}C_5\,x^5\left(-\frac{1}{2y}\right)^5 = 252 \cdot x^5 \cdot \left(-\frac{1}{32y^5}\right)$: the power $5$ is odd, so the minus sign stays, and $2^5 = 32$.`,
          t`$T_6 = -\frac{252}{32} \cdot \frac{x^5}{y^5} = -\frac{63x^5}{8y^5}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q8(iv)" },
      stem: t`The middle term(s) in the expansion of $\left(\frac{3x^2}{2} - \frac{1}{3x}\right)^9$:`,
      verify: { kind: "value", inputs: { a: "3*x**2/2", b: "-1/(3*x)", n: "9" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`$\frac{189 x^{6}}{16}$ and $- \frac{21 x^{3}}{8}$`, correct: true, value: "(189*x**6/16, -21*x**3/8)" },
        { key: "B", text: t`$\frac{189 x^{6}}{16}$`, correct: false, misconceptionId: "C05-M1", value: "189*x**6/16" },
        { key: "C", text: t`$- \frac{21 x^{3}}{8}$ and $\frac{7}{18}$`, correct: false, misconceptionId: "C05-M2", value: "(-21*x**3/8, 7/18)" },
        { key: "D", text: t`$- 63 x^{6}$ and $- 63 x^{3}$`, correct: false, misconceptionId: "C05-M5", value: "(-63*x**6, -63*x**3)" },
      ],
      solution: {
        steps: [
          t`$n = 9$ is odd: $10$ terms, so two middle terms, $T_{\frac{9+1}{2}} = T_5$ and $T_{\frac{9+3}{2}} = T_6$.`,
          t`$T_5$, with $r = 4$: $^9C_4\left(\frac{3x^2}{2}\right)^5\left(-\frac{1}{3x}\right)^4 = 126 \cdot \frac{243x^{10}}{32} \cdot \frac{1}{81x^4} = \frac{126 \cdot 3}{32}x^6 = \frac{189x^6}{16}$.`,
          t`$T_6$, with $r = 5$: $^9C_5\left(\frac{3x^2}{2}\right)^4\left(-\frac{1}{3x}\right)^5 = 126 \cdot \frac{81x^8}{16} \cdot \left(-\frac{1}{243x^5}\right) = -\frac{126}{48}x^3 = -\frac{21x^3}{8}$.`,
        ],
      },
    },
  ],
};
