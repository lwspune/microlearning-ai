import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Which is bigger, $\frac{5}{8}$ or $\frac{7}{11}$? Both are just over a half.`,
    reveal: t`Cross-multiply: $5 \times 11 = 55$ and $7 \times 8 = 56$. Since $55 < 56$, $\frac{5}{8} < \frac{7}{11}$, by a hair.`,
  },
  explanation: {
    intuition: [
      t`A ratio $a : b$ can be written as the fraction $\frac{a}{b}$.`,
      t`Its size depends on both terms, not on either one alone.`,
      t`Two fractions with the same denominator are easy to compare: the bigger numerator wins.`,
      t`To compare $\frac{a}{b}$ with $\frac{c}{d}$, give both the same denominator $b \times d$, then compare numerators.`,
      t`Those new numerators are the **cross products** $a \times d$ and $b \times c$.`,
    ],
    formal: [
      {
        title: "Why cross-multiplying works",
        points: [
          t`Take two ratios $\frac{a}{b}$ and $\frac{c}{d}$, with $b$ and $d$ positive.`,
          t`Multiply the first by $\frac{d}{d}$: $\frac{a}{b} = \frac{ad}{bd}$.`,
          t`Multiply the second by $\frac{b}{b}$: $\frac{c}{d} = \frac{bc}{bd}$.`,
          t`Both now have the same positive denominator $bd$.`,
          t`So $\frac{a}{b}$ and $\frac{c}{d}$ compare the same way as $ad$ and $bc$.`,
        ],
      },
      {
        title: "The rule",
        points: [
          t`If $ad > bc$, then $\frac{a}{b} > \frac{c}{d}$.`,
          t`If $ad < bc$, then $\frac{a}{b} < \frac{c}{d}$.`,
          t`If $ad = bc$, then $\frac{a}{b} = \frac{c}{d}$.`,
          t`The product $ad$ uses the numerator $a$, so it goes with $\frac{a}{b}$.`,
          t`For $\frac{2}{5}$ and $\frac{3}{8}$: $2 \times 8 = 16$ and $3 \times 5 = 15$.`,
          t`Since $16 > 15$, $\frac{2}{5} > \frac{3}{8}$.`,
        ],
      },
      {
        title: "Ratios with square roots",
        points: [
          t`Cross-multiply the same way, using $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$.`,
          t`For $\frac{\sqrt{3}}{2}$ and $\frac{2}{\sqrt{5}}$, compare $\sqrt{15}$ with $2 \times 2 = 4$.`,
          t`A whole number is the square root of its square: $4 = \sqrt{16}$.`,
          t`Since $\sqrt{15} < \sqrt{16}$, $\frac{\sqrt{3}}{2} < \frac{2}{\sqrt{5}}$.`,
          t`Equal products mean equal ratios: for $\frac{\sqrt{80}}{\sqrt{48}}$ and $\frac{\sqrt{45}}{\sqrt{27}}$, both are $\sqrt{2160}$.`,
        ],
      },
      {
        title: "Three or more ratios",
        points: [
          t`Compare two ratios at a time by cross-multiplying.`,
          t`To find the greatest, keep the bigger of each pair and compare it with the next.`,
          t`**Ascending order** means from the smallest to the greatest.`,
          t`Numerators alone, denominators alone, or the gap between the terms can mislead.`,
          t`For example, $\frac{1}{2}$ and $\frac{4}{5}$ both have a gap of $1$, yet $\frac{1}{2} < \frac{4}{5}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Compare $\frac{3\sqrt{5}}{5\sqrt{7}}$ and $\frac{\sqrt{63}}{\sqrt{125}}$.`,
      steps: [
        t`The product for the first ratio is $3\sqrt{5} \times \sqrt{125}$ $= 3\sqrt{625}$ $= 3 \times 25 = 75$.`,
        t`The product for the second ratio is $5\sqrt{7} \times \sqrt{63}$ $= 5\sqrt{441}$ $= 5 \times 21 = 105$.`,
        t`Compare the products: $75 < 105$.`,
        t`So the first ratio is the smaller one.`,
      ],
      answer: t`$\frac{3\sqrt{5}}{5\sqrt{7}}$ $< \frac{\sqrt{63}}{\sqrt{125}}$`,
    },
    visualSpec: t`Drag the four terms of two ratios and watch the cross products $ad$ and $bc$ grow as two bars, so the longer bar always marks the bigger ratio.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Cross-multiplies but gives each product to the wrong ratio (takes b × c as the product for a/b), so every comparison comes out reversed",
      remediation: t`The product $a \times d$ uses the numerator of $\frac{a}{b}$, so it goes with $\frac{a}{b}$. If $ad > bc$, then $\frac{a}{b} > \frac{c}{d}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Compares only the numerators: the ratio with the bigger first term is the bigger ratio",
      remediation: t`A ratio's size depends on both terms: $\frac{3}{10}$ has the bigger numerator but is less than $\frac{1}{2}$. Cross-multiply to compare.`,
      fallback: { kind: "ext", topic: "comparing fractions (Std VIII)" },
    },
    {
      id: "C03-M3",
      mistake: "Compares only the denominators: the ratio with the smaller second term is the bigger ratio (as 1/3 > 1/5)",
      remediation: t`A smaller denominator means a bigger ratio only when the numerators are equal. Otherwise cross-multiply: compare $ad$ with $bc$.`,
      fallback: { kind: "ext", topic: "comparing fractions (Std VIII)" },
    },
    {
      id: "C03-M4",
      mistake: "Gap thinking: the ratio whose terms are closest together (smallest b − a) is the biggest",
      remediation: t`A ratio's size is the value $\frac{a}{b}$, not the gap $b - a$: $\frac{1}{2}$ and $\frac{4}{5}$ both have gap $1$, but $50\% < 80\%$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: "When whole numbers and square roots mix, writes a whole number n as √n (compares √35 with 9 as 35 with 9)",
      remediation: t`A whole number is the square root of its square: $4 = \sqrt{16}$, not $\sqrt{4}$. Write both products as square roots, then compare.`,
      fallback: { kind: "ext", topic: "comparing surds (Std IX Real Numbers)" },
    },
  ],
  engineNotes: [
    "C03-M4 shows only on ratios of plain numbers that are each less than 1; it raises elsewhere.",
    "C03-M5 shows only where whole numbers and square roots mix in the ratios; on plain numbers it is the key.",
    "On ascending items C03-M1 gives the exact reverse of the key, so it is left off most of them: a test-wise learner could pick the key from the pair.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.2 SolvedEx.1" },
      stem: t`Which is the greatest of the ratios $\frac{4}{9}$, $\frac{7}{8}$, $\frac{9}{16}$ and $\frac{5}{7}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "greatest", r: "4:9,7:8,9:16,5:7" } },
      options: [
        { key: "A", text: t`$\frac{9}{16}$`, correct: false, misconceptionId: "C03-M2", value: "9/16" },
        { key: "B", text: t`$\frac{5}{7}$`, correct: false, misconceptionId: "C03-M3", value: "5/7" },
        { key: "C", text: t`$\frac{7}{8}$`, correct: true, value: "7/8" },
        { key: "D", text: t`$\frac{4}{9}$`, correct: false, misconceptionId: "C03-M1", value: "4/9" },
      ],
      solution: {
        steps: [
          t`$\frac{7}{8}$ and $\frac{5}{7}$: $7 \times 7 = 49$ and $5 \times 8 = 40$. Since $49 > 40$, $\frac{7}{8} > \frac{5}{7}$.`,
          t`$\frac{7}{8}$ and $\frac{9}{16}$: $7 \times 16 = 112$ and $9 \times 8 = 72$, so $\frac{7}{8} > \frac{9}{16}$.`,
          t`$\frac{7}{8}$ and $\frac{4}{9}$: $7 \times 9 = 63$ and $4 \times 8 = 32$, so $\frac{7}{8} > \frac{4}{9}$.`,
          t`So $\frac{7}{8}$ is the greatest.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.2 Q3(iii)" },
      stem: t`Which is the smallest of the ratios $\frac{5}{18}$, $\frac{17}{121}$, $\frac{2}{17}$ and $\frac{1}{6}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "smallest", r: "5:18,17:121,2:17,1:6" } },
      options: [
        { key: "A", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C03-M2", value: "1/6" },
        { key: "B", text: t`$\frac{17}{121}$`, correct: false, misconceptionId: "C03-M4", value: "17/121" },
        { key: "C", text: t`$\frac{2}{17}$`, correct: true, value: "2/17" },
        { key: "D", text: t`$\frac{5}{18}$`, correct: false, misconceptionId: "C03-M1", value: "5/18" },
      ],
      solution: {
        steps: [
          t`$\frac{2}{17}$ and $\frac{1}{6}$: $2 \times 6 = 12$ and $1 \times 17 = 17$. Since $12 < 17$, $\frac{2}{17} < \frac{1}{6}$.`,
          t`$\frac{2}{17}$ and $\frac{5}{18}$: $2 \times 18 = 36$ and $5 \times 17 = 85$, so $\frac{2}{17} < \frac{5}{18}$.`,
          t`$\frac{2}{17}$ and $\frac{17}{121}$: $2 \times 121 = 242$ and $17 \times 17 = 289$, so $\frac{2}{17} < \frac{17}{121}$.`,
          t`So $\frac{2}{17}$ is the smallest.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.2 Q3(v)" },
      stem: t`Arrange the ratios $\frac{9.2}{5.1}$, $\frac{3.4}{7.1}$ and $\frac{2.4}{1.5}$ in ascending order.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ascending", r: "9.2:5.1,3.4:7.1,2.4:1.5" } },
      options: [
        { key: "A", text: t`$\frac{9.2}{5.1} < \frac{2.4}{1.5} < \frac{3.4}{7.1}$`, correct: false, misconceptionId: "C03-M1", value: "(92/51, 8/5, 34/71)" },
        { key: "B", text: t`$\frac{2.4}{1.5} < \frac{3.4}{7.1} < \frac{9.2}{5.1}$`, correct: false, misconceptionId: "C03-M2", value: "(8/5, 34/71, 92/51)" },
        { key: "C", text: t`$\frac{3.4}{7.1} < \frac{9.2}{5.1} < \frac{2.4}{1.5}$`, correct: false, misconceptionId: "C03-M3", value: "(34/71, 92/51, 8/5)" },
        { key: "D", text: t`$\frac{3.4}{7.1} < \frac{2.4}{1.5} < \frac{9.2}{5.1}$`, correct: true, value: "(34/71, 8/5, 92/51)" },
      ],
      solution: {
        steps: [
          t`$\frac{3.4}{7.1}$ and $\frac{2.4}{1.5}$: $3.4 \times 1.5 = 5.1$ and $2.4 \times 7.1 = 17.04$, so $\frac{3.4}{7.1} < \frac{2.4}{1.5}$.`,
          t`$\frac{2.4}{1.5}$ and $\frac{9.2}{5.1}$: $2.4 \times 5.1 = 12.24$ and $9.2 \times 1.5 = 13.8$, so $\frac{2.4}{1.5} < \frac{9.2}{5.1}$.`,
          t`So the order is $\frac{3.4}{7.1} < \frac{2.4}{1.5}$ $< \frac{9.2}{5.1}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.2 SolvedEx.2" },
      stem: t`Which is the greatest of the ratios $\frac{\sqrt{13}}{\sqrt{8}}$, $\frac{\sqrt{7}}{\sqrt{5}}$, $\frac{\sqrt{7}}{4}$ and $\frac{\sqrt{11}}{3}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "greatest", r: "sqrt(13):sqrt(8),sqrt(7):sqrt(5),sqrt(7):4,sqrt(11):3" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{7}}{\sqrt{5}}$`, correct: false, misconceptionId: "C03-M3", value: "sqrt(35)/5" },
        { key: "B", text: t`$\frac{\sqrt{11}}{3}$`, correct: false, misconceptionId: "C03-M5", value: "sqrt(11)/3" },
        { key: "C", text: t`$\frac{\sqrt{13}}{\sqrt{8}}$`, correct: true, value: "sqrt(26)/4" },
        { key: "D", text: t`$\frac{\sqrt{7}}{4}$`, correct: false, misconceptionId: "C03-M1", value: "sqrt(7)/4" },
      ],
      solution: {
        steps: [
          t`$\frac{\sqrt{13}}{\sqrt{8}}$ and $\frac{\sqrt{7}}{\sqrt{5}}$: $\sqrt{13} \times \sqrt{5} = \sqrt{65}$ and $\sqrt{8} \times \sqrt{7} = \sqrt{56}$, so the first is bigger.`,
          t`$\frac{\sqrt{13}}{\sqrt{8}}$ and $\frac{\sqrt{11}}{3}$: $3\sqrt{13} = \sqrt{117}$ and $\sqrt{8} \times \sqrt{11} = \sqrt{88}$, so the first is bigger.`,
          t`$\frac{\sqrt{13}}{\sqrt{8}}$ and $\frac{\sqrt{7}}{4}$: $4\sqrt{13} = \sqrt{208}$ and $\sqrt{8} \times \sqrt{7} = \sqrt{56}$, so the first is bigger.`,
          t`So $\frac{\sqrt{13}}{\sqrt{8}}$ is the greatest.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.2 Q3(i)" },
      stem: t`Arrange the ratios $\frac{\sqrt{5}}{3}$, $\frac{3}{\sqrt{7}}$ and $\frac{2}{\sqrt{6}}$ in ascending order.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ascending", r: "sqrt(5):3,3:sqrt(7),2:sqrt(6)" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{5}}{3} < \frac{2}{\sqrt{6}} < \frac{3}{\sqrt{7}}$`, correct: true, value: "(sqrt(5)/3, sqrt(6)/3, 3*sqrt(7)/7)" },
        { key: "B", text: t`$\frac{2}{\sqrt{6}} < \frac{\sqrt{5}}{3} < \frac{3}{\sqrt{7}}$`, correct: false, misconceptionId: "C03-M2", value: "(sqrt(6)/3, sqrt(5)/3, 3*sqrt(7)/7)" },
        { key: "C", text: t`$\frac{\sqrt{5}}{3} < \frac{3}{\sqrt{7}} < \frac{2}{\sqrt{6}}$`, correct: false, misconceptionId: "C03-M3", value: "(sqrt(5)/3, 3*sqrt(7)/7, sqrt(6)/3)" },
        { key: "D", text: t`$\frac{2}{\sqrt{6}} < \frac{3}{\sqrt{7}} < \frac{\sqrt{5}}{3}$`, correct: false, misconceptionId: "C03-M5", value: "(sqrt(6)/3, 3*sqrt(7)/7, sqrt(5)/3)" },
      ],
      solution: {
        steps: [
          t`$\frac{\sqrt{5}}{3}$ and $\frac{2}{\sqrt{6}}$: $\sqrt{5} \times \sqrt{6} = \sqrt{30}$ and $3 \times 2 = 6 = \sqrt{36}$.`,
          t`Since $\sqrt{30} < \sqrt{36}$, $\frac{\sqrt{5}}{3} < \frac{2}{\sqrt{6}}$.`,
          t`$\frac{2}{\sqrt{6}}$ and $\frac{3}{\sqrt{7}}$: $2\sqrt{7} = \sqrt{28}$ and $3\sqrt{6} = \sqrt{54}$, so $\frac{2}{\sqrt{6}} < \frac{3}{\sqrt{7}}$.`,
          t`So the order is $\frac{\sqrt{5}}{3} < \frac{2}{\sqrt{6}}$ $< \frac{3}{\sqrt{7}}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`Arrange the ratios $\frac{3}{7}$, $\frac{9}{14}$ and $\frac{7}{9}$ in ascending order.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ascending", r: "3:7,9:14,7:9" } },
      options: [
        { key: "A", text: t`$\frac{3}{7} < \frac{9}{14} < \frac{7}{9}$`, correct: true, value: "(3/7, 9/14, 7/9)" },
        { key: "B", text: t`$\frac{3}{7} < \frac{7}{9} < \frac{9}{14}$`, correct: false, misconceptionId: "C03-M2", value: "(3/7, 7/9, 9/14)" },
        { key: "C", text: t`$\frac{9}{14} < \frac{7}{9} < \frac{3}{7}$`, correct: false, misconceptionId: "C03-M3", value: "(9/14, 7/9, 3/7)" },
        { key: "D", text: t`$\frac{9}{14} < \frac{3}{7} < \frac{7}{9}$`, correct: false, misconceptionId: "C03-M4", value: "(9/14, 3/7, 7/9)" },
      ],
      solution: {
        steps: [
          t`$\frac{3}{7}$ and $\frac{9}{14}$: $3 \times 14 = 42$ and $9 \times 7 = 63$, so $\frac{3}{7} < \frac{9}{14}$.`,
          t`$\frac{9}{14}$ and $\frac{7}{9}$: $9 \times 9 = 81$ and $7 \times 14 = 98$, so $\frac{9}{14} < \frac{7}{9}$.`,
          t`So the order is $\frac{3}{7} < \frac{9}{14} < \frac{7}{9}$.`,
        ],
      },
    },
  ],
};
