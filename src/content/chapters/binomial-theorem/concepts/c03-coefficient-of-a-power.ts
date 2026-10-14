import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`In $(1 + x)^{11}$ the coefficient of $x^7$ is $^{11}C_7 = 330$. **Is the coefficient of $x^7$ in $\left(x^2 + \frac{1}{x}\right)^{11}$ also $330$?**`,
    reveal: t`No. Here $T_{r+1} = {}^{11}C_r(x^2)^{11-r}\left(\frac{1}{x}\right)^r = {}^{11}C_r\,x^{22-3r}$. For $x^7$, $22 - 3r = 7$, so $r = 5$: the term is $T_6$, not $T_8$, and the coefficient is $^{11}C_5 = 462$.`,
  },
  explanation: {
    intuition: t`Every term of the expansion carries its own power of $x$, and that power depends on $r$. Write the power of $x$ in $T_{r+1}$ as a formula in $r$, and the question becomes a simple equation for $r$. Once you know which term it is, its coefficient is everything in it except the power of $x$: $^nC_r$ and the numbers in $a$ and $b$, raised to their powers, signs included. Only in $(1 + x)^n$ is $x^k$ simply the term $T_{k+1}$.`,
    formal: t`**1. Write the general term** with $a$ and $b$ whole, signs included:
$$T_{r+1} = {}^nC_r\,a^{n-r}\,b^r$$

**2. Separate the numbers from the powers of $x$.** Use $(c\,x^p)^m = c^m x^{pm}$ and $\frac{1}{x^q} = x^{-q}$, then add the powers of $x$ from both factors.

**3. Solve for $r$.** Set the power of $x$ equal to the one asked. $r$ must be a whole number from $0$ to $n$.

**4. Read off the coefficient:** $^nC_r$ times the constant of $a$ to the power $n - r$ times the constant of $b$ to the power $r$.

**Example.** In $\left(x^2 - \frac{2}{x}\right)^6$: $T_{r+1} = {}^6C_r(-2)^r x^{12-3r}$. For $x^3$, $12 - 3r = 3$, so $r = 3$ and the coefficient is $^6C_3(-2)^3 = 20(-8) = -160$.`,
    worked: {
      prompt: t`Find the coefficient of $x^{-2}$ in the expansion of $\left(2x - \frac{1}{\sqrt{3}\,x^2}\right)^{10}$.`,
      steps: [
        t`Here $a = 2x$, $b = -\frac{1}{\sqrt{3}\,x^2}$, $n = 10$, so $T_{r+1} = {}^{10}C_r(2x)^{10-r}\left(-\frac{1}{\sqrt{3}\,x^2}\right)^r$.`,
        t`Separate numbers from powers of $x$: $T_{r+1} = {}^{10}C_r\,2^{10-r}\left(-\frac{1}{\sqrt{3}}\right)^r x^{10-r}\,x^{-2r} = {}^{10}C_r\,2^{10-r}\left(-\frac{1}{\sqrt{3}}\right)^r x^{10-3r}$.`,
        t`For $x^{-2}$: $10 - 3r = -2$, so $r = 4$. The term is $T_5$.`,
        t`Coefficient $= {}^{10}C_4\,2^6\left(-\frac{1}{\sqrt{3}}\right)^4 = 210 \times 64 \times \frac{1}{9} = \frac{4480}{3}$. The sign is $+$ because $r = 4$ is even.`,
      ],
      answer: t`The coefficient of $x^{-2}$ is $\frac{4480}{3}$.`,
    },
    visualSpec: t`Slide $r$ from $0$ to $n$ and watch the power of $x$ in $T_{r+1}$ step down; stop where it equals the power asked, and that term's coefficient lights up, built from $^nC_r$ and the powers of the constants.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Collecting the power of $x$ from $b^r$ only, forgetting that $a^{n-r}$ carries $x$ too`,
      remediation: t`Both factors of $T_{r+1}$ carry $x$. Add the power from $a^{n-r}$ to the power from $b^r$, then set the total equal to the power asked.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: t`Reading a negative power as positive: $\frac{1}{x^q}$ as $x^q$`,
      remediation: t`$\frac{1}{x^q} = x^{-q}$, so a term with $x$ in the denominator lowers the power. Write each term as a number times $x^p$ before you add the powers.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C03-M3",
      mistake: t`Taking the coefficient to be $^nC_r$ alone`,
      remediation: t`The coefficient is everything in $T_{r+1}$ except the power of $x$: $^nC_r$ times the constant of $a$ to the power $n - r$ and the constant of $b$ to the power $r$, signs included.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: "Leaving the minus sign out of a term",
      remediation: t`The minus sign belongs to the term: in $\left(a - \frac{c}{x}\right)^n$, use $b = -\frac{c}{x}$, so $(-c)^r$ is negative when $r$ is odd.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: t`Raising only the power of $x$, not the constant: $(2x^5)^4$ as $2x^{20}$`,
      remediation: t`A power applies to every factor in the bracket: $(c\,x^p)^m = c^m x^{pm}$. Raise the constant to the same power as the $x$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C03-M6",
      mistake: t`Putting the term number into the formula: $x^k$ is in $T_{r+1}$, so using $r + 1$ in place of $r$`,
      remediation: t`In $T_{r+1} = {}^nC_r\,a^{n-r}\,b^r$, use the $r$ you solved for. The term number $r + 1$ never goes into $^nC_r$ or the powers.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C03-M3 and C03-M5 give the key when the constants of $a$ and $b$ are both $1$ (as in $\left(x^2 + \frac{1}{x}\right)^n$); C03-M4 gives the key when the negative term's power is even. Diagnose them on items with other constants or an odd power.`,
    t`C03-M1 and C03-M2 apply only when they lead to a whole $r$ from $0$ to $n$ (C03-M2 needs a negative power of $x$); draw them from such inputs.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q2(ii)" },
      stem: t`The coefficient of $x^8$ in the expansion of $\left(2x^5 - \frac{5}{x^3}\right)^8$ is:`,
      verify: { kind: "value", inputs: { a: "2*x**5", b: "-5/x**3", n: "8", k: "8" } },
      options: [
        { key: "A", text: t`$-700$`, correct: false, misconceptionId: "C03-M5", value: "-700" },
        { key: "B", text: t`$-1400000$`, correct: false, misconceptionId: "C03-M6", value: "-1400000" },
        { key: "C", text: t`$700000$`, correct: true, value: "700000" },
        { key: "D", text: t`$70$`, correct: false, misconceptionId: "C03-M3", value: "70" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^8C_r(2x^5)^{8-r}\left(-\frac{5}{x^3}\right)^r = {}^8C_r\,2^{8-r}(-5)^r x^{40-5r-3r} = {}^8C_r\,2^{8-r}(-5)^r x^{40-8r}$.`,
          t`For $x^8$: $40 - 8r = 8$, so $r = 4$.`,
          t`Coefficient $= {}^8C_4\,2^4(-5)^4 = 70 \times 16 \times 625 = 700000$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q2(iv)" },
      stem: t`The coefficient of $x^{-3}$ in the expansion of $\left(x - \frac{1}{2x}\right)^5$ is:`,
      verify: { kind: "value", inputs: { a: "x", b: "-1/(2*x)", n: "5", k: "-3" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C03-M3", value: "5" },
        { key: "B", text: t`$- \frac{1}{32}$`, correct: false, misconceptionId: "C03-M6", value: "-1/32" },
        { key: "C", text: t`$\frac{5}{16}$`, correct: true, value: "5/16" },
        { key: "D", text: t`$- \frac{5}{4}$`, correct: false, misconceptionId: "C03-M1", value: "-5/4" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^5C_r\,x^{5-r}\left(-\frac{1}{2x}\right)^r = {}^5C_r\left(-\frac{1}{2}\right)^r x^{5-2r}$.`,
          t`For $x^{-3}$: $5 - 2r = -3$, so $r = 4$.`,
          t`Coefficient $= {}^5C_4\left(-\frac{1}{2}\right)^4 = 5 \times \frac{1}{16} = \frac{5}{16}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q2(v)" },
      stem: t`The coefficient of $x^{-20}$ in the expansion of $\left(x^3 - \frac{1}{2x^2}\right)^{15}$ is:`,
      verify: { kind: "value", inputs: { a: "x**3", b: "-1/(2*x**2)", n: "15", k: "-20" } },
      options: [
        { key: "A", text: t`$\frac{3003}{1024}$`, correct: false, misconceptionId: "C03-M1", value: "3003/1024" },
        { key: "B", text: t`$\frac{105}{8192}$`, correct: false, misconceptionId: "C03-M4", value: "105/8192" },
        { key: "C", text: t`$- \frac{105}{2}$`, correct: false, misconceptionId: "C03-M5", value: "-105/2" },
        { key: "D", text: t`$- \frac{105}{8192}$`, correct: true, value: "-105/8192" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^{15}C_r(x^3)^{15-r}\left(-\frac{1}{2x^2}\right)^r = {}^{15}C_r\left(-\frac{1}{2}\right)^r x^{45-3r-2r} = {}^{15}C_r\left(-\frac{1}{2}\right)^r x^{45-5r}$.`,
          t`For $x^{-20}$: $45 - 5r = -20$, so $r = 13$.`,
          t`Coefficient $= {}^{15}C_{13}\left(-\frac{1}{2}\right)^{13} = 105 \times \left(-\frac{1}{8192}\right) = -\frac{105}{8192}$. It is negative because $13$ is odd.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc I Q3" },
      stem: t`In the expansion of $(x^2 - 2x)^{10}$, the coefficient of $x^{16}$ is:`,
      verify: { kind: "value", inputs: { a: "x**2", b: "-2*x", n: "10", k: "16" } },
      options: [
        { key: "A", text: t`$-420$`, correct: false, misconceptionId: "C03-M5", value: "-420" },
        { key: "B", text: t`$-8064$`, correct: false, misconceptionId: "C03-M6", value: "-8064" },
        { key: "C", text: t`$3360$`, correct: true, value: "3360" },
        { key: "D", text: t`$210$`, correct: false, misconceptionId: "C03-M3", value: "210" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^{10}C_r(x^2)^{10-r}(-2x)^r = {}^{10}C_r(-2)^r x^{20-2r+r} = {}^{10}C_r(-2)^r x^{20-r}$.`,
          t`For $x^{16}$: $20 - r = 16$, so $r = 4$.`,
          t`Coefficient $= {}^{10}C_4(-2)^4 = 210 \times 16 = 3360$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q9(ii)" },
      stem: t`The coefficient of $x^{60}$ in the expansion of $\left(\frac{1}{x^2} + x^4\right)^{18}$ is:`,
      verify: { kind: "value", inputs: { a: "1/x**2", b: "x**4", n: "18", k: "60" } },
      options: [
        { key: "A", text: t`$153$`, correct: true, value: "153" },
        { key: "B", text: t`$816$`, correct: false, misconceptionId: "C03-M1", value: "816" },
        { key: "C", text: t`$18564$`, correct: false, misconceptionId: "C03-M2", value: "18564" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C03-M6", value: "18" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^{18}C_r\left(x^{-2}\right)^{18-r}\left(x^4\right)^r = {}^{18}C_r\,x^{-36+2r+4r} = {}^{18}C_r\,x^{6r-36}$.`,
          t`For $x^{60}$: $6r - 36 = 60$, so $r = 16$.`,
          t`Coefficient $= {}^{18}C_{16} = {}^{18}C_2 = \frac{18 \times 17}{2} = 153$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q16" },
      stem: t`The coefficient of $x^{13}$ in the expansion of $\left(x^2 - \frac{3}{x}\right)^{11}$ is:`,
      verify: { kind: "value", inputs: { a: "x**2", b: "-3/x", n: "11", k: "13" } },
      options: [
        { key: "A", text: t`$-4455$`, correct: true, value: "-4455" },
        { key: "B", text: t`$165$`, correct: false, misconceptionId: "C03-M3", value: "165" },
        { key: "C", text: t`$4455$`, correct: false, misconceptionId: "C03-M4", value: "4455" },
        { key: "D", text: t`$-495$`, correct: false, misconceptionId: "C03-M5", value: "-495" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^{11}C_r(x^2)^{11-r}\left(-\frac{3}{x}\right)^r = {}^{11}C_r(-3)^r x^{22-2r-r} = {}^{11}C_r(-3)^r x^{22-3r}$.`,
          t`For $x^{13}$: $22 - 3r = 13$, so $r = 3$.`,
          t`Coefficient $= {}^{11}C_3(-3)^3 = 165 \times (-27) = -4455$. It is negative because $3$ is odd.`,
        ],
      },
    },
  ],
};
