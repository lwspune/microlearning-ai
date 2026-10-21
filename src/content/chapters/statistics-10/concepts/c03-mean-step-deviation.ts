import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Weekly wages have class marks ₹ 1,500, ₹ 2,500, ₹ 3,500 and ₹ 4,500. Subtract $2500$ from each, then divide by $1000$. **What numbers are left, and can they still give the mean?**`,
    reveal: t`They become $-1, 0, 1, 2$. Yes: find the mean of these small numbers, multiply it by $1000$ and add $2500$.`,
  },
  explanation: {
    intuition: [
      t`Class marks such as $1500, 2500, 3500$ are big numbers to multiply by frequencies.`,
      t`The assumed mean method subtracts a value $A$ to make them smaller.`,
      t`When all classes have the same width, every deviation is a multiple of that width.`,
      t`Divide the deviations by the width and they become tiny: $-1, 0, 1, 2$.`,
      t`Find the mean of the tiny numbers first.`,
      t`Then undo the two steps: multiply by the width, then add $A$.`,
    ],
    formal: [
      {
        title: "The step deviation",
        points: [
          t`The **class width** is upper limit minus lower limit; call it $g$.`,
          t`For classes $0$–$20$, $20$–$40$, $40$–$60$, the class width is $g = 20$.`,
          t`Choose an **assumed mean** $A$: usually the class mark of a middle class.`,
          t`The **step deviation** of a class is $u_i = \frac{x_i - A}{g}$.`,
          t`With class marks $10, 30, 50, 70, 90$ and $A = 50$, $g = 20$:`,
          t`the $u_i$ are $-2, -1, 0, 1, 2$.`,
        ],
      },
      {
        title: "The mean from the u-column",
        points: [
          t`Find $f_i u_i$ for each class.`,
          t`Add them to get $\sum f_i u_i$; add the frequencies to get $\sum f_i$.`,
          t`The mean of the $u_i$ is $\bar{u} = \frac{\sum f_i u_i}{\sum f_i}$.`,
          t`Each class mark is $x_i = A + g u_i$, so $\bar{x} = A + g \bar{u}$.`,
          t`So the formula is $\bar{x} = A + g \times \frac{\sum f_i u_i}{\sum f_i}$.`,
          t`It gives the same mean as the direct and assumed mean methods.`,
        ],
      },
      {
        title: "Checks before you answer",
        points: [
          t`Multiply by $g$ at the end: the division by $g$ must be undone.`,
          t`Take $x_i - A$, not $A - x_i$: classes above $A$ have positive $u_i$.`,
          t`Divide by $\sum f_i$, the total frequency, not by the number of classes.`,
          t`Add $A$ back: $g \bar{u}$ is only the distance of the mean from $A$.`,
          t`Use class marks $x_i$, not lower limits, to find $u_i$.`,
          t`The mean must lie between the lowest and highest class limits.`,
        ],
      },
    ],
    worked: {
      prompt: t`Classes $0$–$20$, $20$–$40$, $40$–$60$, $60$–$80$, $80$–$100$ have frequencies $5, 8, 12, 10, 5$. Find the mean by the step deviation method.`,
      steps: [
        t`Class marks $x_i$: $10, 30, 50, 70, 90$. Take $A = 50$ and $g = 20$.`,
        t`$u_i = \frac{x_i - 50}{20}$ gives $-2, -1, 0, 1, 2$.`,
        t`$f_i u_i$: $-10, -8, 0, 10, 10$. So $\sum f_i u_i = 2$ and $\sum f_i = 40$.`,
        t`$\bar{x} = 50 + 20 \times \frac{2}{40}$ $= 50 + 1 = 51$.`,
      ],
      answer: t`The mean is $51$.`,
    },
    visualSpec: t`A table where the student slides A and g; the class-mark column turns into a small u-column, and the mean is rebuilt by stretching by g and shifting by A.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Leaving the class width out: taking u_i = x_i - A, or stopping at A + sum(f u)/sum(f) without multiplying by g",
      remediation: t`The step deviation divides by the class width, $u_i = \frac{x_i - A}{g}$. At the end, multiply back by $g$: $\bar{x} = A + g \times \frac{\sum f_i u_i}{\sum f_i}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Dividing by g again at the end (or multiplying by g when finding u_i): mixing up which way the scaling goes",
      remediation: t`Finding $u_i$ divides by $g$; finding $\bar{x}$ multiplies by $g$ to undo it. So $\bar{x} = A + g \times \frac{\sum f_i u_i}{\sum f_i}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Dividing sum(f u) by the number of classes instead of the total frequency",
      remediation: t`The mean divides by the number of observations, which is $\sum f_i$, not the number of classes.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: "Taking the deviation as A - x_i, so u_i has the wrong sign and the mean lands on the wrong side of A",
      remediation: t`The deviation is $x_i - A$: a class above $A$ has a positive $u_i$. Then $\bar{x} = A + g \bar{u}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M5",
      mistake: "Forgetting to add A back: giving g times sum(f u)/sum(f) as the mean",
      remediation: t`$g \times \frac{\sum f_i u_i}{\sum f_i}$ is only how far the mean is from $A$. Add $A$ to it.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M6",
      mistake: "Using each class's lower limit in place of its class mark",
      remediation: t`Each class stands at its class mark, the middle of the class: $x_i = \frac{\text{lower} + \text{upper}}{2}$. Find $u_i$ from $x_i$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Step deviation Ex.1" },
      stem: t`The amounts (₹) invested in health insurance by $100$ families are grouped in classes $800$–$1200$, $1200$–$1600$, …, $2800$–$3200$. For the step deviation method, take $A = 2200$ and $g = 400$. For the class $1200$–$1600$, $u_i = \frac{x_i - A}{g}$ is:`,
      verify: { kind: "value", inputs: { l: "1200", u: "1600", A: "2200", g: "400" }, params: { ask: "u" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C03-M4", value: "2" },
        { key: "B", text: t`$-2.5$`, correct: false, misconceptionId: "C03-M6", value: "-5/2" },
        { key: "C", text: t`$-2$`, correct: true, value: "-2" },
        { key: "D", text: t`$-800$`, correct: false, misconceptionId: "C03-M1", value: "-800" },
      ],
      solution: {
        steps: [
          t`The class mark of $1200$–$1600$ is $x_i = \frac{1200 + 1600}{2} = 1400$.`,
          t`$u_i = \frac{1400 - 2200}{400}$ $= \frac{-800}{400} = -2$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Step deviation SolvedEx.1" },
      stem: t`The funds collected by $50$ students for flood affected people are shown below. $$\begin{array}{c|c} \text{Fund} & \text{Students} \\ \hline 0\text{–}500 & 2 \\ 500\text{–}1000 & 4 \\ 1000\text{–}1500 & 24 \\ 1500\text{–}2000 & 18 \\ 2000\text{–}2500 & 1 \\ 2500\text{–}3000 & 1 \end{array}$$ Taking $A = 1250$ and $g = 500$, the mean fund (₹) by the step deviation method is:`,
      verify: { kind: "value", inputs: { lo: "(0, 500, 1000, 1500, 2000, 2500)", hi: "(500, 1000, 1500, 2000, 2500, 3000)", f: "(2, 4, 24, 18, 1, 1)", A: "1250", g: "500" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$1100$`, correct: false, misconceptionId: "C03-M4", value: "1100" },
        { key: "B", text: t`$1150$`, correct: false, misconceptionId: "C03-M6", value: "1150" },
        { key: "C", text: t`$1400$`, correct: true, value: "1400" },
        { key: "D", text: t`$2500$`, correct: false, misconceptionId: "C03-M3", value: "2500" },
      ],
      solution: {
        steps: [
          t`Class marks: $250, 750, 1250, 1750, 2250, 2750$; so $u_i$: $-2, -1, 0, 1, 2, 3$.`,
          t`$f_i u_i$: $-4, -4, 0, 18, 2, 3$. So $\sum f_i u_i = 15$ and $\sum f_i = 50$.`,
          t`$\bar{x} = 1250 + 500 \times \frac{15}{50}$ $= 1250 + 150 = 1400$.`,
          t`The mean fund is ₹ 1,400.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2018/Q4(iii)" },
      stem: t`The daily commission (₹) received by $100$ salesmen is shown below. $$\begin{array}{c|c} \text{Commission} & \text{Salesmen} \\ \hline 100\text{–}120 & 20 \\ 120\text{–}140 & 45 \\ 140\text{–}160 & 22 \\ 160\text{–}180 & 9 \\ 180\text{–}200 & 4 \end{array}$$ Taking $A = 150$ and $g = 20$, the mean daily commission (₹) by the step deviation method is:`,
      verify: { kind: "value", inputs: { lo: "(100, 120, 140, 160, 180)", hi: "(120, 140, 160, 180, 200)", f: "(20, 45, 22, 9, 4)", A: "150", g: "20" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$149.32$`, correct: false, misconceptionId: "C03-M1", value: "3733/25" },
        { key: "B", text: t`$163.6$`, correct: false, misconceptionId: "C03-M4", value: "818/5" },
        { key: "C", text: t`$126.4$`, correct: false, misconceptionId: "C03-M6", value: "632/5" },
        { key: "D", text: t`$136.4$`, correct: true, value: "682/5" },
      ],
      solution: {
        steps: [
          t`Class marks: $110, 130, 150, 170, 190$; so $u_i$: $-2, -1, 0, 1, 2$.`,
          t`$f_i u_i$: $-40, -45, 0, 9, 8$. So $\sum f_i u_i = -68$ and $\sum f_i = 100$.`,
          t`$\bar{x} = 150 + 20 \times \frac{-68}{100}$ $= 150 - 13.6 = 136.4$.`,
          t`The mean daily commission is ₹ 136.40.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q2(B)(v)" },
      stem: t`For a frequency distribution, $A = 2000$, class width $g = 50$, $\sum f_i u_i = 200$ and $\sum f_i = 100$. By the step deviation method, the mean $\bar{x}$ is:`,
      verify: { kind: "value", inputs: { A: "2000", g: "50", S: "200", N: "100" }, params: { ask: "sums" } },
      options: [
        { key: "A", text: t`$2000.04$`, correct: false, misconceptionId: "C03-M2", value: "50001/25" },
        { key: "B", text: t`$100$`, correct: false, misconceptionId: "C03-M5", value: "100" },
        { key: "C", text: t`$2100$`, correct: true, value: "2100" },
        { key: "D", text: t`$2002$`, correct: false, misconceptionId: "C03-M1", value: "2002" },
      ],
      solution: {
        steps: [
          t`$\bar{x} = A + g \times \frac{\sum f_i u_i}{\sum f_i}$.`,
          t`$\bar{x} = 2000 + 50 \times \frac{200}{100}$ $= 2000 + 100 = 2100$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Ex 6.1 Q.5" },
      stem: t`The funds collected by $120$ workers for drought affected people are shown below. $$\begin{array}{c|c} \text{Fund} & \text{Workers} \\ \hline 0\text{–}500 & 35 \\ 500\text{–}1000 & 28 \\ 1000\text{–}1500 & 32 \\ 1500\text{–}2000 & 15 \\ 2000\text{–}2500 & 10 \end{array}$$ Taking $A = 750$ and $g = 500$, the mean fund (₹) by the step deviation method is:`,
      verify: { kind: "value", inputs: { lo: "(0, 500, 1000, 1500, 2000)", hi: "(500, 1000, 1500, 2000, 2500)", f: "(35, 28, 32, 15, 10)", A: "750", g: "500" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$987.5$`, correct: true, value: "1975/2" },
        { key: "B", text: t`$750.475$`, correct: false, misconceptionId: "C03-M1", value: "30019/40" },
        { key: "C", text: t`$512.5$`, correct: false, misconceptionId: "C03-M4", value: "1025/2" },
        { key: "D", text: t`$237.5$`, correct: false, misconceptionId: "C03-M5", value: "475/2" },
      ],
      solution: {
        steps: [
          t`Class marks: $250, 750, 1250, 1750, 2250$; so $u_i$: $-1, 0, 1, 2, 3$.`,
          t`$f_i u_i$: $-35, 0, 32, 30, 30$. So $\sum f_i u_i = 57$ and $\sum f_i = 120$.`,
          t`$\bar{x} = 750 + 500 \times \frac{57}{120}$ $= 750 + 237.5 = 987.5$.`,
          t`The mean fund is ₹ 987.50.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/PS6 Q.5" },
      stem: t`The aid (thousand rupees) given to $50$ flood affected families is shown below. $$\begin{array}{c|c} \text{Aid} & \text{Families} \\ \hline 50\text{–}60 & 7 \\ 60\text{–}70 & 13 \\ 70\text{–}80 & 20 \\ 80\text{–}90 & 6 \\ 90\text{–}100 & 4 \end{array}$$ Taking $A = 75$ and $g = 10$, the mean aid (thousand rupees) by the step deviation method is:`,
      verify: { kind: "value", inputs: { lo: "(50, 60, 70, 80, 90)", hi: "(60, 70, 80, 90, 100)", f: "(7, 13, 20, 6, 4)", A: "75", g: "10" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$72.4$`, correct: true, value: "362/5" },
        { key: "B", text: t`$74.74$`, correct: false, misconceptionId: "C03-M1", value: "3737/50" },
        { key: "C", text: t`$49$`, correct: false, misconceptionId: "C03-M3", value: "49" },
        { key: "D", text: t`$67.4$`, correct: false, misconceptionId: "C03-M6", value: "337/5" },
      ],
      solution: {
        steps: [
          t`Class marks: $55, 65, 75, 85, 95$; so $u_i$: $-2, -1, 0, 1, 2$.`,
          t`$f_i u_i$: $-14, -13, 0, 6, 8$. So $\sum f_i u_i = -13$ and $\sum f_i = 50$.`,
          t`$\bar{x} = 75 + 10 \times \frac{-13}{50}$ $= 75 - 2.6 = 72.4$.`,
          t`The mean aid is $72.4$ thousand rupees.`,
        ],
      },
    },
  ],
};
