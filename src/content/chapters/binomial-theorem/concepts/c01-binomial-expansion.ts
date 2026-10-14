import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Is $(x + 1)^3 = x^3 + 1$? **Try $x = 1$.**`,
    reveal: t`No. $(1 + 1)^3 = 8$, but $1^3 + 1 = 2$. Multiplying out gives $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$: four terms, not two. The middle terms carry the coefficients $3$ and $3$, which are $^3C_1$ and $^3C_2$.`,
  },
  explanation: {
    intuition: t`$(a + b)^n$ is $n$ brackets multiplied together. Each term of the product picks $a$ or $b$ from every bracket. Picking $b$ from exactly $r$ brackets gives $a^{n-r}b^r$, and there are $^nC_r$ ways to choose those $r$ brackets. So the coefficient of $a^{n-r}b^r$ is $^nC_r$, and $r$ runs from $0$ to $n$: that makes $n + 1$ terms.`,
    formal: t`**The binomial theorem.** For a positive integer $n$:
$$(a + b)^n = {}^nC_0\,a^n + {}^nC_1\,a^{n-1}b + {}^nC_2\,a^{n-2}b^2 + \ldots + {}^nC_n\,b^n$$

**The pattern.** There are $n + 1$ terms. Powers of $a$ fall from $n$ to $0$ while powers of $b$ rise from $0$ to $n$; in every term they add to $n$. The coefficients are symmetric, $^nC_r = {}^nC_{n-r}$:
$n = 4$: $1, 4, 6, 4, 1$; $n = 5$: $1, 5, 10, 10, 5, 1$; $n = 6$: $1, 6, 15, 20, 15, 6, 1$.

**A minus sign.** Write $(a - b)^n$ as $(a + (-b))^n$. Odd powers of $-b$ are negative, so the signs alternate $+, -, +, \ldots$ and the last term is $(-b)^n$.

**Raise the whole term.** In $(2x + 3y)^n$, $a = 2x$, so its powers are $(2x)^2 = 4x^2$, $(2x)^3 = 8x^3$, never $2x^3$. Work out each power of $a$ and of $b$ in full, then multiply by $^nC_r$.`,
    worked: {
      prompt: t`Expand $(3x - 2)^4$.`,
      steps: [
        t`$a = 3x$, $b = -2$, $n = 4$: five terms, with coefficients $1, 4, 6, 4, 1$.`,
        t`Powers of $3x$, falling: $81x^4, 27x^3, 9x^2, 3x, 1$. Powers of $-2$, rising: $1, -2, 4, -8, 16$.`,
        t`Multiply each coefficient by its two powers: $81x^4$, $4 \cdot 27x^3 \cdot (-2) = -216x^3$, $6 \cdot 9x^2 \cdot 4 = 216x^2$, $4 \cdot 3x \cdot (-8) = -96x$, $16$.`,
      ],
      answer: t`$(3x - 2)^4 = 81x^4 - 216x^3 + 216x^2 - 96x + 16$.`,
    },
    visualSpec: t`Drag $n$ from $1$ to $7$ to grow Pascal's triangle; the chosen row lights up as the coefficients of $(a + b)^n$, with the powers of $a$ falling and the powers of $b$ rising beneath it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Raising only the variable inside a bracket: $(2x)^3$ taken as $2x^3$`,
      remediation: t`Raise the whole term, number and all: $(2x)^3 = 2^3x^3 = 8x^3$. Work out each power of $a$ and of $b$ in full before multiplying by $^nC_r$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C01-M2",
      mistake: t`Dropping the minus sign: expanding $(a - b)^n$ with every term positive`,
      remediation: t`Treat $(a - b)^n$ as $(a + (-b))^n$. Odd powers of $-b$ are negative, so the signs alternate $+, -, +, \ldots$`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Thinking $(a + b)^n$ has $n$ terms, so stopping one short and missing $b^n$`,
      remediation: t`$r$ runs from $0$ to $n$, so $(a + b)^n$ has $n + 1$ terms. The last one is $^nC_n\,b^n = b^n$: check you have counted $n + 1$ terms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Believing $(a + b)^n = a^n + b^n$`,
      remediation: t`A power of a sum is not the sum of the powers: even $(a + b)^2$ has the middle term $2ab$. All $n + 1$ terms $^nC_r\,a^{n-r}b^r$ appear, not just the first and last.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
    {
      id: "C01-M5",
      mistake: t`Using $^nP_r$ as the coefficients instead of $^nC_r$`,
      remediation: t`The coefficient counts the ways to choose which $r$ brackets give $b$, and order does not matter: it is $^nC_r$, not $^nP_r$. For $n = 5$ the coefficients are $1, 5, 10, 10, 5, 1$.`,
      fallback: { kind: "ext", topic: "combinations nCr" },
    },
  ],
  engineNotes: [
    t`C01-M1 gives the key when the numbers in front of the variables are $\pm 1$ (as in $(x - \frac{1}{x})^n$); diagnose it on items like $(2x^2 + 3)^n$.`,
    "C01-M2 applies only when the second term carries a minus sign (its model refuses otherwise). C01-M3 gives the key on any coefficient other than the last term's, and C01-M4 gives the key on the first and last terms.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q2(i)" },
      stem: t`Expand $(2x^2 + 3)^4$.`,
      verify: { kind: "value", inputs: { a: "2*x**2", b: "3", n: "4" }, params: { ask: "full" } },
      options: [
        { key: "A", text: t`$16 x^{8} + 96 x^{6} + 216 x^{4} + 216 x^{2} + 81$`, correct: true, value: "16*x**8 + 96*x**6 + 216*x**4 + 216*x**2 + 81" },
        { key: "B", text: t`$2 x^{8} + 24 x^{6} + 108 x^{4} + 216 x^{2} + 81$`, correct: false, misconceptionId: "C01-M1", value: "2*x**8 + 24*x**6 + 108*x**4 + 216*x**2 + 81" },
        { key: "C", text: t`$16 x^{8} + 96 x^{6} + 216 x^{4} + 216 x^{2}$`, correct: false, misconceptionId: "C01-M3", value: "x**2*(16*x**6 + 96*x**4 + 216*x**2 + 216)" },
        { key: "D", text: t`$16 x^{8} + 81$`, correct: false, misconceptionId: "C01-M4", value: "16*x**8 + 81" },
      ],
      solution: {
        steps: [
          t`$a = 2x^2$, $b = 3$, $n = 4$: five terms, with coefficients $1, 4, 6, 4, 1$.`,
          t`Powers of $2x^2$, falling: $16x^8, 8x^6, 4x^4, 2x^2, 1$. Powers of $3$, rising: $1, 3, 9, 27, 81$.`,
          t`Multiply: $16x^8$, $4 \cdot 8x^6 \cdot 3 = 96x^6$, $6 \cdot 4x^4 \cdot 9 = 216x^4$, $4 \cdot 2x^2 \cdot 27 = 216x^2$, $81$.`,
          t`$(2x^2 + 3)^4 = 16x^8 + 96x^6 + 216x^4 + 216x^2 + 81$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.2 Q2(ii)" },
      stem: t`The first three terms in the expansion of $\left(2x - \frac{1}{x}\right)^6$, in falling powers of $x$, add up to:`,
      verify: { kind: "value", inputs: { a: "2*x", b: "-1/x", n: "6" }, params: { ask: "first", k: "3" } },
      options: [
        { key: "A", text: t`$64 x^{6} - 192 x^{4} + 240 x^{2}$`, correct: true, value: "x**2*(64*x**4 - 192*x**2 + 240)" },
        { key: "B", text: t`$2 x^{6} - 12 x^{4} + 30 x^{2}$`, correct: false, misconceptionId: "C01-M1", value: "2*x**2*(x**4 - 6*x**2 + 15)" },
        { key: "C", text: t`$64 x^{6} + 192 x^{4} + 240 x^{2}$`, correct: false, misconceptionId: "C01-M2", value: "x**2*(64*x**4 + 192*x**2 + 240)" },
        { key: "D", text: t`$64 x^{6} - 192 x^{4} + 480 x^{2}$`, correct: false, misconceptionId: "C01-M5", value: "x**2*(64*x**4 - 192*x**2 + 480)" },
      ],
      solution: {
        steps: [
          t`$a = 2x$, $b = -\frac{1}{x}$, $n = 6$. The first three coefficients are $^6C_0 = 1$, $^6C_1 = 6$, $^6C_2 = 15$.`,
          t`$T_1 = (2x)^6 = 64x^6$. $T_2 = 6(2x)^5\left(-\frac{1}{x}\right) = 6 \cdot 32x^5 \cdot \left(-\frac{1}{x}\right) = -192x^4$.`,
          t`$T_3 = 15(2x)^4\left(-\frac{1}{x}\right)^2 = 15 \cdot 16x^4 \cdot \frac{1}{x^2} = 240x^2$.`,
          t`The sum is $64x^6 - 192x^4 + 240x^2$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q4" },
      stem: t`In the expansion of $(3x^2 + 2y)^5$, the coefficient of $x^6y^2$ is:`,
      verify: { kind: "value", inputs: { a: "3*x**2", b: "2*y", n: "5" }, params: { ask: "coeff", of: ["x**6*y**2"] } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C01-M4", value: "0" },
        { key: "B", text: t`$2160$`, correct: false, misconceptionId: "C01-M5", value: "2160" },
        { key: "C", text: t`$1080$`, correct: true, value: "1080" },
        { key: "D", text: t`$60$`, correct: false, misconceptionId: "C01-M1", value: "60" },
      ],
      solution: {
        steps: [
          t`$a = 3x^2$, $b = 2y$, $n = 5$. To get $x^6$, $3x^2$ is cubed, so $2y$ is squared: the term is $^5C_2(3x^2)^3(2y)^2$.`,
          t`$^5C_2 = 10$, $(3x^2)^3 = 27x^6$, $(2y)^2 = 4y^2$.`,
          t`The term is $10 \cdot 27 \cdot 4\,x^6y^2 = 1080x^6y^2$, so the coefficient is $1080$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q5" },
      stem: t`Expand $\left(x - \frac{1}{x}\right)^4$.`,
      verify: { kind: "value", inputs: { a: "x", b: "-1/x", n: "4" }, params: { ask: "full" } },
      options: [
        { key: "A", text: t`$x^{4} - 4 x^{2} + 6 - \frac{4}{x^{2}} + \frac{1}{x^{4}}$`, correct: true, value: "x**4 - 4*x**2 + 6 - 4/x**2 + x**(-4)" },
        { key: "B", text: t`$x^{4} + 4 x^{2} + 6 + \frac{4}{x^{2}} + \frac{1}{x^{4}}$`, correct: false, misconceptionId: "C01-M2", value: "x**4 + 4*x**2 + 6 + 4/x**2 + x**(-4)" },
        { key: "C", text: t`$x^{4} - 4 x^{2} + 6 - \frac{4}{x^{2}}$`, correct: false, misconceptionId: "C01-M3", value: "x**4 - 4*x**2 + 6 - 4/x**2" },
        { key: "D", text: t`$x^{4} + \frac{1}{x^{4}}$`, correct: false, misconceptionId: "C01-M4", value: "(x**8 + 1)/x**4" },
      ],
      solution: {
        steps: [
          t`$a = x$, $b = -\frac{1}{x}$, $n = 4$: five terms, with coefficients $1, 4, 6, 4, 1$ and signs alternating, since odd powers of $-\frac{1}{x}$ are negative.`,
          t`Each $x$ meets a $\frac{1}{x}$: $x^4$, $-4x^3 \cdot \frac{1}{x} = -4x^2$, $6x^2 \cdot \frac{1}{x^2} = 6$, $-4x \cdot \frac{1}{x^3} = -\frac{4}{x^2}$, $\frac{1}{x^4}$.`,
          t`$\left(x - \frac{1}{x}\right)^4 = x^4 - 4x^2 + 6 - \frac{4}{x^2} + \frac{1}{x^4}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q26" },
      stem: t`If $(1 - 2x)^6 = 1 + px + qx^2 + \ldots$, then $p + q$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "-2*x", n: "6" }, params: { ask: "coeff", of: ["x", "x**2"] } },
      options: [
        { key: "A", text: t`$48$`, correct: true, value: "48" },
        { key: "B", text: t`$18$`, correct: false, misconceptionId: "C01-M1", value: "18" },
        { key: "C", text: t`$72$`, correct: false, misconceptionId: "C01-M2", value: "72" },
        { key: "D", text: t`$108$`, correct: false, misconceptionId: "C01-M5", value: "108" },
      ],
      solution: {
        steps: [
          t`$a = 1$, $b = -2x$, $n = 6$. Powers of $1$ are all $1$, so the term with $(-2x)^r$ is just $^6C_r(-2x)^r$.`,
          t`$T_2 = 6(-2x) = -12x$, so $p = -12$. $T_3 = 15(-2x)^2 = 15 \cdot 4x^2 = 60x^2$, so $q = 60$.`,
          t`$p + q = -12 + 60 = 48$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`The last term in the expansion of $(2x - 3)^5$ is:`,
      verify: { kind: "value", inputs: { a: "2*x", b: "-3", n: "5" }, params: { ask: "last" } },
      options: [
        { key: "A", text: t`$810 x$`, correct: false, misconceptionId: "C01-M3", value: "810*x" },
        { key: "B", text: t`$-29160$`, correct: false, misconceptionId: "C01-M5", value: "-29160" },
        { key: "C", text: t`$-243$`, correct: true, value: "-243" },
        { key: "D", text: t`$243$`, correct: false, misconceptionId: "C01-M2", value: "243" },
      ],
      solution: {
        steps: [
          t`$n = 5$, so there are $6$ terms; the last one is $^5C_5(2x)^0(-3)^5$.`,
          t`$^5C_5 = 1$ and $(-3)^5 = -243$, negative because the power is odd.`,
          t`The last term is $-243$.`,
        ],
      },
    },
  ],
};
