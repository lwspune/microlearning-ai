import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Add $9 + 99 + 999 + 9999$ in your head. **Is there a quick way?**`,
    reveal: t`Each term is a power of $10$ minus $1$. So the sum is $(10 + 100 + 1000 + 10000) - 4 = 11110 - 4 = 11106$. Any repeated-digit number can be turned into a power of $10$ minus $1$ the same way, and that is the whole trick for $5 + 55 + 555 + \ldots$.`,
  },
  explanation: {
    intuition: t`$5, 55, 555, \ldots$ is not a G.P.: $\frac{55}{5} = 11$ but $\frac{555}{55}$ is not $11$. But each term is close to a power of $10$: $555 = \frac{5}{9} \times 999 = \frac{5}{9}(10^3 - 1)$. So every term is $\frac{5}{9}$ times (a power of $10$ minus $1$). The powers of $10$ form a G.P. you can sum, and the $-1$s just add up to $-n$. Decimals work the same way: $0.333 = \frac{3}{9}(1 - 0.001)$.`,
    formal: t`**Write each term with a power of 10.** With $k$ copies of the digit $d$:

$$dd\ldots d = \frac{d}{9}\left(10^k - 1\right), \qquad 0.dd\ldots d = \frac{d}{9}\left(1 - \frac{1}{10^k}\right)$$

**Whole numbers.** $S_n = \frac{d}{9}\left[(10 + 100 + \ldots + 10^n) - n\right]$. The G.P. has $a = 10$, $r = 10$, so $S_n = \frac{d}{9}\left[\frac{10(10^n - 1)}{9} - n\right] = \frac{d}{81}\left(10^{n+1} - 9n - 10\right)$.

**Decimals.** $S_n = \frac{d}{9}\left[n - (0.1 + 0.01 + \ldots + 0.1^n)\right] = \frac{d}{9}\left[n - \frac{1}{9}\left(1 - \frac{1}{10^n}\right)\right]$. The nth term alone is $t_n = \frac{d}{9}\left(1 - \frac{1}{10^n}\right)$.

**Check.** Put $n = 1$ in your answer: you must get the first term back.`,
    worked: {
      prompt: t`Find $5 + 55 + 555 + 5555 + \ldots$ up to $n$ terms.`,
      steps: [
        t`Take out $5$ and multiply and divide by $9$: $S_n = \frac{5}{9}(9 + 99 + 999 + \ldots \text{ to } n \text{ terms})$.`,
        t`Write each nine-string as a power of $10$ minus $1$: $9 + 99 + 999 + \ldots = (10 + 100 + \ldots + 10^n) - (1 + 1 + \ldots + 1) = (10 + 100 + \ldots + 10^n) - n$.`,
        t`$10 + 100 + \ldots + 10^n$ is a G.P. with $a = 10$, $r = 10$: its sum is $\frac{10(10^n - 1)}{9}$.`,
        t`$S_n = \frac{5}{9}\left[\frac{10(10^n - 1)}{9} - n\right] = \frac{5}{81}\left(10^{n+1} - 9n - 10\right)$. Check: $n = 1$ gives $\frac{5}{81}(100 - 9 - 10) = 5$.`,
      ],
      answer: t`$S_n = \frac{5}{81}\left(10^{n+1} - 9n - 10\right)$.`,
    },
    visualSpec: t`Drag $n$ to stack the terms $5, 55, 555, \ldots$ as bars; each bar shows $\frac{5}{9}$ of a power of $10$ with a small $-\frac{5}{9}$ piece cut off, and the totals of the two parts update as a G.P. sum and as $-\frac{5}{9}n$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Treating d, dd, ddd, ... itself as a G.P. with ratio 11 (or 1.1 for decimals)",
      remediation: t`Check the ratio of every pair of neighbours: $\frac{55}{5} = 11$ but $\frac{555}{55}$ is not $11$, so the series is not a G.P. Write each term as $\frac{d}{9}(10^k - 1)$ first; the G.P. is hidden inside.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: "Summing 10 + 100 + ... + 10^n (or 0.1 + 0.01 + ... + 0.1^n) as if the G.P. started at 1",
      remediation: t`This G.P. starts at $a = 10$ (or $a = 0.1$), so its sum is $\frac{10(10^n - 1)}{9}$ (or $\frac{0.1(1 - 0.1^n)}{1 - 0.1}$). Read $a$ off the first term before you use the $S_n$ formula.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: "Keeping only one part of each split term: dropping the -1s (the -n), or taking 0.dd...d as exactly d/9",
      remediation: t`Each term is $\frac{d}{9}(10^k - 1)$ or $\frac{d}{9}\left(1 - \frac{1}{10^k}\right)$, and both parts count. The $-1$s add up to $-n$; the small decimal parts add up to $-\frac{1}{9}\left(1 - \frac{1}{10^n}\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Mixing up the nth term t_n with the sum S_n of the first n terms",
      remediation: t`$t_n$ is the single term with $n$ digits; $S_n$ adds the first $n$ terms. Test with $n = 2$: $t_2$ is the second term, and $S_2$ is the first two terms added.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C05-M2 has no model for an nth-term item (ask: term): there is no G.P. of powers of 10 to sum. Draw it from a sum item.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q5(i)" },
      stem: t`The sum to $n$ terms of $3 + 33 + 333 + 3333 + \ldots$ is:`,
      verify: { kind: "value", inputs: { d: "3", n: "n" }, params: { kind: "int", ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{1}{27}\left(10^{n+1} - 10\right)$`, correct: false, misconceptionId: "C05-M3", value: "10*10**n/27 - 10/27" },
        { key: "B", text: t`$\frac{1}{27}\left(10^{n+1} - 9n - 10\right)$`, correct: true, value: "10*10**n/27 - n/3 - 10/27" },
        { key: "C", text: t`$\frac{3}{10}\left(11^{n} - 1\right)$`, correct: false, misconceptionId: "C05-M1", value: "3*11**n/10 - 3/10" },
        { key: "D", text: t`$\frac{1}{27}\left(10^{n} - 9n - 1\right)$`, correct: false, misconceptionId: "C05-M2", value: "10**n/27 - n/3 - 1/27" },
      ],
      solution: {
        steps: [
          t`Take out $3$ and multiply and divide by $9$: $S_n = \frac{3}{9}(9 + 99 + 999 + \ldots)$, and $9 + 99 + 999 + \ldots = (10 - 1) + (100 - 1) + \ldots + (10^n - 1) = (10 + 100 + \ldots + 10^n) - n$.`,
          t`$10 + 100 + \ldots + 10^n$ is a G.P. with $a = 10$, $r = 10$, so its sum is $\frac{10(10^n - 1)}{9} = \frac{10^{n+1} - 10}{9}$.`,
          t`$S_n = \frac{3}{9}\left[\frac{10^{n+1} - 10}{9} - n\right] = \frac{1}{27}\left(10^{n+1} - 9n - 10\right)$. Check: $n = 1$ gives $\frac{1}{27}(100 - 9 - 10) = 3$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q5(ii)" },
      stem: t`The sum to $n$ terms of $8 + 88 + 888 + 8888 + \ldots$ is:`,
      verify: { kind: "value", inputs: { d: "8", n: "n" }, params: { kind: "int", ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{4}{5}\left(11^{n} - 1\right)$`, correct: false, misconceptionId: "C05-M1", value: "4*11**n/5 - 4/5" },
        { key: "B", text: t`$\frac{8}{81}\left(10^{n+1} - 10\right)$`, correct: false, misconceptionId: "C05-M3", value: "80*10**n/81 - 80/81" },
        { key: "C", text: t`$\frac{8}{9}\left(10^{n} - 1\right)$`, correct: false, misconceptionId: "C05-M4", value: "8*10**n/9 - 8/9" },
        { key: "D", text: t`$\frac{8}{81}\left(10^{n+1} - 9n - 10\right)$`, correct: true, value: "80*10**n/81 - 8*n/9 - 80/81" },
      ],
      solution: {
        steps: [
          t`Take out $8$ and multiply and divide by $9$: $S_n = \frac{8}{9}(9 + 99 + 999 + \ldots)$, and $9 + 99 + 999 + \ldots = (10 - 1) + (100 - 1) + \ldots + (10^n - 1) = (10 + 100 + \ldots + 10^n) - n$.`,
          t`$10 + 100 + \ldots + 10^n$ is a G.P. with $a = 10$, $r = 10$, so its sum is $\frac{10(10^n - 1)}{9} = \frac{10^{n+1} - 10}{9}$.`,
          t`$S_n = \frac{8}{9}\left[\frac{10^{n+1} - 10}{9} - n\right] = \frac{8}{81}\left(10^{n+1} - 9n - 10\right)$. Check: $n = 1$ gives $\frac{8}{81}(100 - 9 - 10) = 8$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q6(i)" },
      stem: t`The sum to $n$ terms of $0.4 + 0.44 + 0.444 + \ldots$ is:`,
      verify: { kind: "value", inputs: { d: "4", n: "n" }, params: { kind: "dec", ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{4}{9}\left[n - \frac{1}{9}\left(1 - \frac{1}{10^{n}}\right)\right]$`, correct: true, value: "4*n/9 - 4/81 + 4/(81*10**n)" },
        { key: "B", text: t`$4\left[\left(\frac{11}{10}\right)^{n} - 1\right]$`, correct: false, misconceptionId: "C05-M1", value: "-4 + 4*11**n/10**n" },
        { key: "C", text: t`$\frac{4}{9}\left[n - \frac{10}{9}\left(1 - \frac{1}{10^{n}}\right)\right]$`, correct: false, misconceptionId: "C05-M2", value: "4*n/9 - 40/81 + 40/(81*10**n)" },
        { key: "D", text: t`$\frac{4n}{9}$`, correct: false, misconceptionId: "C05-M3", value: "4*n/9" },
      ],
      solution: {
        steps: [
          t`Each term: $0.44\ldots4 = \frac{4}{9}(0.99\ldots9) = \frac{4}{9}\left(1 - \frac{1}{10^k}\right)$ for $k$ digits.`,
          t`So $S_n = \frac{4}{9}\left[(1 + 1 + \ldots + 1) - (0.1 + 0.01 + \ldots + 0.1^n)\right]$, and the $n$ ones add up to $n$.`,
          t`$0.1 + 0.01 + \ldots + 0.1^n$ is a G.P. with $a = 0.1$, $r = 0.1$: its sum is $\frac{0.1(1 - 0.1^n)}{1 - 0.1} = \frac{1}{9}\left(1 - \frac{1}{10^n}\right)$.`,
          t`$S_n = \frac{4}{9}\left[n - \frac{1}{9}\left(1 - \frac{1}{10^{n}}\right)\right]$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.2 Q6(ii)" },
      stem: t`The sum to $n$ terms of $0.7 + 0.77 + 0.777 + \ldots$ is:`,
      verify: { kind: "value", inputs: { d: "7", n: "n" }, params: { kind: "dec", ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{7n}{9}$`, correct: false, misconceptionId: "C05-M3", value: "7*n/9" },
        { key: "B", text: t`$\frac{7}{9}\left(1 - \frac{1}{10^{n}}\right)$`, correct: false, misconceptionId: "C05-M4", value: "7/9 - 7/(9*10**n)" },
        { key: "C", text: t`$\frac{7}{9}\left[n - \frac{1}{9}\left(1 - \frac{1}{10^{n}}\right)\right]$`, correct: true, value: "7*n/9 - 7/81 + 7/(81*10**n)" },
        { key: "D", text: t`$\frac{7}{9}\left[n - \frac{10}{9}\left(1 - \frac{1}{10^{n}}\right)\right]$`, correct: false, misconceptionId: "C05-M2", value: "7*n/9 - 70/81 + 70/(81*10**n)" },
      ],
      solution: {
        steps: [
          t`Each term: $0.77\ldots7 = \frac{7}{9}(0.99\ldots9) = \frac{7}{9}\left(1 - \frac{1}{10^k}\right)$ for $k$ digits.`,
          t`So $S_n = \frac{7}{9}\left[(1 + 1 + \ldots + 1) - (0.1 + 0.01 + \ldots + 0.1^n)\right]$, and the $n$ ones add up to $n$.`,
          t`$0.1 + 0.01 + \ldots + 0.1^n$ is a G.P. with $a = 0.1$, $r = 0.1$: its sum is $\frac{0.1(1 - 0.1^n)}{1 - 0.1} = \frac{1}{9}\left(1 - \frac{1}{10^n}\right)$.`,
          t`$S_n = \frac{7}{9}\left[n - \frac{1}{9}\left(1 - \frac{1}{10^{n}}\right)\right]$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q9" },
      stem: t`The $n^{\text{th}}$ term of the sequence $0.6,\ 0.66,\ 0.666,\ 0.6666, \ldots$ is:`,
      verify: { kind: "value", inputs: { d: "6", n: "n" }, params: { kind: "dec", ask: "term" } },
      options: [
        { key: "A", text: t`$\frac{2}{3}\left(1 - \frac{1}{10^{n}}\right)$`, correct: true, value: "2/3 - 2/(3*10**n)" },
        { key: "B", text: t`$\frac{3}{5}\left(\frac{11}{10}\right)^{n-1}$`, correct: false, misconceptionId: "C05-M1", value: "6*11**(n - 1)/10**n" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C05-M3", value: "2/3" },
        { key: "D", text: t`$\frac{2}{3}\left[n - \frac{1}{9}\left(1 - \frac{1}{10^{n}}\right)\right]$`, correct: false, misconceptionId: "C05-M4", value: "2*n/3 - 2/27 + 2/(27*10**n)" },
      ],
      solution: {
        steps: [
          t`$t_n = 0.66\ldots6$ with $n$ sixes $= 0.6 + 0.06 + 0.006 + \ldots$, $n$ terms of a G.P. with $a = 0.6$, $r = 0.1$.`,
          t`$t_n = \frac{0.6(1 - 0.1^n)}{1 - 0.1} = \frac{6}{9}\left(1 - \frac{1}{10^n}\right) = \frac{2}{3}\left(1 - \frac{1}{10^n}\right)$.`,
          t`Check: $n = 1$ gives $\frac{2}{3} \times \frac{9}{10} = 0.6$, the first term.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc II Q8" },
      stem: t`$2 + 22 + 222 + 2222 + \ldots$ up to $n$ terms equals:`,
      verify: { kind: "value", inputs: { d: "2", n: "n" }, params: { kind: "int", ask: "sum" } },
      options: [
        { key: "A", text: t`$\frac{2}{81}\left(10^{n+1} - 9n - 10\right)$`, correct: true, value: "20*10**n/81 - 2*n/9 - 20/81" },
        { key: "B", text: t`$\frac{1}{5}\left(11^{n} - 1\right)$`, correct: false, misconceptionId: "C05-M1", value: "11**n/5 - 1/5" },
        { key: "C", text: t`$\frac{2}{81}\left(10^{n} - 9n - 1\right)$`, correct: false, misconceptionId: "C05-M2", value: "2*10**n/81 - 2*n/9 - 2/81" },
        { key: "D", text: t`$\frac{2}{9}\left(10^{n} - 1\right)$`, correct: false, misconceptionId: "C05-M4", value: "2*10**n/9 - 2/9" },
      ],
      solution: {
        steps: [
          t`Take out $2$ and multiply and divide by $9$: $S_n = \frac{2}{9}(9 + 99 + 999 + \ldots)$, and $9 + 99 + 999 + \ldots = (10 - 1) + (100 - 1) + \ldots + (10^n - 1) = (10 + 100 + \ldots + 10^n) - n$.`,
          t`$10 + 100 + \ldots + 10^n$ is a G.P. with $a = 10$, $r = 10$, so its sum is $\frac{10(10^n - 1)}{9} = \frac{10^{n+1} - 10}{9}$.`,
          t`$S_n = \frac{2}{9}\left[\frac{10^{n+1} - 10}{9} - n\right] = \frac{2}{81}\left(10^{n+1} - 9n - 10\right)$. Check: $n = 1$ gives $\frac{2}{81}(100 - 9 - 10) = 2$.`,
        ],
      },
    },
  ],
};
