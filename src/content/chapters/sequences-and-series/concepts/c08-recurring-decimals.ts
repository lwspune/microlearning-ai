import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Is $0.999\ldots$ (nines for ever) a tiny bit less than $1$, or **exactly** $1$?`,
    reveal: t`Exactly $1$. $0.999\ldots = 0.9 + 0.09 + 0.009 + \ldots$ is a G.P. with $a = 0.9$ and $r = 0.1$. Its sum to infinity is $\frac{0.9}{1 - 0.1} = \frac{0.9}{0.9} = 1$. The same sum turns any recurring decimal into a fraction.`,
  },
  explanation: {
    intuition: [
      t`A **recurring decimal** goes on for ever, with a block of digits repeating, like $0.333\ldots$.`,
      t`Split it by place value into an endless sum: $0.333\ldots$ is $0.3 + 0.03 + 0.003 + \ldots$.`,
      t`Each term is the one before divided by $10$: recall, that makes a G.P., with ratio $r = 0.1$.`,
      t`Since $|r| < 1$, it has a sum to infinity (recall: the total of all its terms), here $\frac{0.3}{0.9} = \frac{1}{3}$.`,
      t`When two digits repeat, as in $0.3636\ldots = 0.36 + 0.0036 + \ldots$, each block sits two places further right, so $r = 0.01$.`,
      t`Digits that don't repeat stay out of the G.P., and are added on at the end.`,
    ],
    formal: [
      {
        title: "Writing the repeats as a G.P.",
        points: [
          t`A bar over digits marks the repeating block: $0.\overline{36}$ means $0.363636\ldots$.`,
          t`By place value, $0.\overline{36}$ equals $0.36 + 0.0036 + 0.000036 + \ldots$.`,
          t`Its first term is $a = 0.36$.`,
          t`Divide neighbouring terms for the ratio: $r = \frac{0.0036}{0.36} = 0.01$.`,
        ],
      },
      {
        title: "Sum to infinity",
        points: [
          t`$|r| < 1$, so the G.P. has a sum to infinity: $S_\infty = \frac{a}{1 - r}$.`,
          t`Here $S_\infty = \frac{0.36}{1 - 0.01} = \frac{0.36}{0.99}$.`,
          t`Clear the decimals: $\frac{0.36}{0.99} = \frac{36}{99} = \frac{4}{11}$.`,
          t`So $0.\overline{36} = \frac{4}{11}$.`,
        ],
      },
      {
        title: "The ratio from the block",
        points: [
          t`Say the repeating block is $k$ digits long.`,
          t`Each block then sits $k$ places to the right of the one before.`,
          t`So each term is the one before divided by $10^k$: $r = \frac{1}{10^k}$.`,
          t`One digit repeating gives $r = 0.1$; two digits repeating give $r = 0.01$.`,
        ],
      },
      {
        title: "Digits in front of the repeats",
        points: [
          t`Some decimals start repeating late: in $0.1\overline{3} = 0.1333\ldots$, only the $3$ repeats.`,
          t`Keep the whole number and any non-repeating digits out of the G.P.`,
          t`Start the G.P. where the repeating digits really sit: the first $3$ is in the hundredths place.`,
          t`So $0.1\overline{3} = 0.1 + (0.03 + 0.003 + \ldots)$.`,
          t`The bracket is a G.P. with $a = 0.03$ and $r = 0.1$, so its sum is $\frac{0.03}{0.9} = \frac{1}{30}$.`,
          t`Add the front part back: $\frac{1}{10} + \frac{1}{30} = \frac{2}{15}$.`,
        ],
      },
      {
        title: "Check by dividing out",
        points: [
          t`Divide your fraction out: $\frac{2}{15} = 0.1333\ldots$.`,
          t`Its digits should match the decimal you started from.`,
        ],
      },
    ],
    worked: {
      prompt: t`Express $0.5\overline{27} = 0.52727\ldots$ as a fraction.`,
      steps: [
        t`Split off the digit that doesn't repeat: $0.5\overline{27}$ equals $0.5$ plus $(0.027 + 0.00027 + 0.0000027 + \ldots)$.`,
        t`The bracket is a G.P. with $a = 0.027$ and $r = \frac{0.00027}{0.027} = 0.01$ (two digits repeat), and $|r| < 1$.`,
        t`Its sum to infinity is $\frac{a}{1 - r} = \frac{0.027}{0.99}$, which is $\frac{27}{990} = \frac{3}{110}$.`,
        t`Add the front part back: $\frac{1}{2} + \frac{3}{110} = \frac{55}{110} + \frac{3}{110}$, which is $\frac{58}{110} = \frac{29}{55}$.`,
      ],
      answer: t`$0.5\overline{27} = \frac{29}{55}$.`,
    },
    visualSpec: t`Drag the number of terms of $0.36 + 0.0036 + 0.000036 + \ldots$: a bar fills towards $\frac{4}{11}$, each new piece $100$ times thinner, while the running total's decimal grows by one block of $36$ at a time.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Taking r = 0.1 even when a block of two digits repeats (0.45 + 0.0045 + ... read with r = 0.1)",
      remediation: t`Find $r$ by dividing neighbouring terms: $\frac{0.0045}{0.45} = 0.01$. A block of $k$ repeating digits moves $k$ places each time, so $r = \frac{1}{10^k}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M2",
      mistake: "Starting the G.P. right after the decimal point, over the non-repeating digits: 4.7888... = 4.7 + (0.8 + 0.08 + ...)",
      remediation: t`Write the terms with their place values. In $4.7888\ldots$ the first repeating $8$ is in the hundredths place, so the G.P. is $0.08 + 0.008 + \ldots$ with $a = 0.08$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M3",
      mistake: "Summing the G.P. and stopping there, without adding back the whole number and the non-repeating digits",
      remediation: t`The G.P. is only the tail of the decimal. Add its sum to the part in front of it: $4.7888\ldots = 4.7 + (0.08 + 0.008 + \ldots)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Treating the decimal as if it stopped after one block, so using only the first term of the G.P. instead of its sum",
      remediation: t`A recurring decimal never stops: $0.\overline{3} = 0.3 + 0.03 + 0.003 + \ldots$ has infinitely many terms. Add them all with $S_\infty = \frac{a}{1 - r}$, which works because $|r| < 1$.`,
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  engineNotes: [
    "C08-M1 has no model when one digit repeats (r = 0.1 is then right). Draw it from an item with a repeating block of two or more digits.",
    "C08-M2 has no model without non-repeating digits after the point, and C08-M3 none when nothing comes before the G.P. (a number like 0.46 recurring). Draw them from items such as 2.3 followed by a recurring 5.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.4.1 SolvedEx.1(ii)" },
      stem: t`Written as a fraction, the recurring decimal $2.\overline{45} = 2.454545\ldots$ is:`,
      verify: { kind: "value", inputs: { w: "2" }, params: { nr: "", rep: "45" } },
      options: [
        { key: "A", text: t`$\frac{27}{11}$`, correct: true, value: "27/11" },
        { key: "B", text: t`$\frac{5}{2}$`, correct: false, misconceptionId: "C08-M1", value: "5/2" },
        { key: "C", text: t`$\frac{5}{11}$`, correct: false, misconceptionId: "C08-M3", value: "5/11" },
        { key: "D", text: t`$\frac{49}{20}$`, correct: false, misconceptionId: "C08-M4", value: "49/20" },
      ],
      solution: {
        steps: [
          t`$2.\overline{45} = 2 + (0.45 + 0.0045 + 0.000045 + \ldots)$: a G.P. with $a = 0.45$ and $r = 0.01$, since two digits repeat.`,
          t`Its sum to infinity is $\frac{0.45}{1 - 0.01} = \frac{45}{99} = \frac{5}{11}$.`,
          t`$2.\overline{45} = 2 + \frac{5}{11} = \frac{27}{11}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q2(iii)" },
      stem: t`Written as a fraction, the recurring decimal $2.3\overline{5} = 2.3555\ldots$ (only the $5$ repeats) is:`,
      verify: { kind: "value", inputs: { w: "2" }, params: { nr: "3", rep: "5" } },
      options: [
        { key: "A", text: t`$\frac{257}{90}$`, correct: false, misconceptionId: "C08-M2", value: "257/90" },
        { key: "B", text: t`$\frac{1}{18}$`, correct: false, misconceptionId: "C08-M3", value: "1/18" },
        { key: "C", text: t`$\frac{47}{20}$`, correct: false, misconceptionId: "C08-M4", value: "47/20" },
        { key: "D", text: t`$\frac{106}{45}$`, correct: true, value: "106/45" },
      ],
      solution: {
        steps: [
          t`$2.3\overline{5} = 2.3 + (0.05 + 0.005 + 0.0005 + \ldots)$: the first repeating $5$ is in the hundredths place, so $a = 0.05$, $r = 0.1$.`,
          t`Its sum to infinity is $\frac{0.05}{1 - 0.1} = \frac{5}{90} = \frac{1}{18}$.`,
          t`$2.3\overline{5} = \frac{23}{10} + \frac{1}{18} = \frac{207}{90} + \frac{5}{90} = \frac{212}{90} = \frac{106}{45}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q2(iv)" },
      stem: t`Written as a fraction, the recurring decimal $51.0\overline{2} = 51.0222\ldots$ (only the $2$ repeats) is:`,
      verify: { kind: "value", inputs: { w: "51" }, params: { nr: "0", rep: "2" } },
      options: [
        { key: "A", text: t`$\frac{461}{9}$`, correct: false, misconceptionId: "C08-M2", value: "461/9" },
        { key: "B", text: t`$\frac{1}{45}$`, correct: false, misconceptionId: "C08-M3", value: "1/45" },
        { key: "C", text: t`$\frac{2551}{50}$`, correct: false, misconceptionId: "C08-M4", value: "2551/50" },
        { key: "D", text: t`$\frac{2296}{45}$`, correct: true, value: "2296/45" },
      ],
      solution: {
        steps: [
          t`$51.0\overline{2} = 51 + (0.02 + 0.002 + 0.0002 + \ldots)$: a G.P. with $a = 0.02$, $r = 0.1$.`,
          t`Its sum to infinity is $\frac{0.02}{1 - 0.1} = \frac{2}{90} = \frac{1}{45}$.`,
          t`$51.0\overline{2} = 51 + \frac{1}{45} = \frac{2295 + 1}{45} = \frac{2296}{45}$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q2(iii)" },
      stem: t`Written as a fraction, the recurring decimal $0.3\overline{18} = 0.3181818\ldots$ is:`,
      verify: { kind: "value", inputs: { w: "0" }, params: { nr: "3", rep: "18" } },
      options: [
        { key: "A", text: t`$\frac{53}{110}$`, correct: false, misconceptionId: "C08-M2", value: "53/110" },
        { key: "B", text: t`$\frac{159}{500}$`, correct: false, misconceptionId: "C08-M4", value: "159/500" },
        { key: "C", text: t`$\frac{7}{22}$`, correct: true, value: "7/22" },
        { key: "D", text: t`$\frac{8}{25}$`, correct: false, misconceptionId: "C08-M1", value: "8/25" },
      ],
      solution: {
        steps: [
          t`$0.3\overline{18} = 0.3 + (0.018 + 0.00018 + \ldots)$: a G.P. with $a = 0.018$ and $r = 0.01$, since two digits repeat.`,
          t`Its sum to infinity is $\frac{0.018}{1 - 0.01} = \frac{18}{990} = \frac{1}{55}$.`,
          t`$0.3\overline{18} = \frac{3}{10} + \frac{1}{55} = \frac{33}{110} + \frac{2}{110} = \frac{35}{110} = \frac{7}{22}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.3 Q2(iii)" },
      stem: t`Written as a fraction, the recurring decimal $0.1\overline{6} = 0.1666\ldots$ is:`,
      verify: { kind: "value", inputs: { w: "0" }, params: { nr: "1", rep: "6" } },
      options: [
        { key: "A", text: t`$\frac{4}{25}$`, correct: false, misconceptionId: "C08-M4", value: "4/25" },
        { key: "B", text: t`$\frac{1}{6}$`, correct: true, value: "1/6" },
        { key: "C", text: t`$\frac{23}{30}$`, correct: false, misconceptionId: "C08-M2", value: "23/30" },
        { key: "D", text: t`$\frac{1}{15}$`, correct: false, misconceptionId: "C08-M3", value: "1/15" },
      ],
      solution: {
        steps: [
          t`$0.1\overline{6} = 0.1 + (0.06 + 0.006 + 0.0006 + \ldots)$: a G.P. with $a = 0.06$, $r = 0.1$.`,
          t`Its sum to infinity is $\frac{0.06}{1 - 0.1} = \frac{6}{90} = \frac{1}{15}$.`,
          t`$0.1\overline{6} = \frac{1}{10} + \frac{1}{15} = \frac{3}{30} + \frac{2}{30} = \frac{5}{30} = \frac{1}{6}$.`,
        ],
      },
    },
  ],
};
