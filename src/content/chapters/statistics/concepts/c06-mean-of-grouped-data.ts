import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A survey records only that $6$ families spend $100$ to $200$ rupees a week on fruit, and $4$ families spend $200$ to $300$. **Nobody knows the exact amounts. Can we still find the mean spend?**`,
    reveal: t`Yes, closely enough: let each family stand at the middle of its class, $150$ or $250$ rupees. The total is $6 \times 150 + 4 \times 250$ $= 1900$ rupees, so the mean is $\frac{1900}{10} = 190$ rupees.`,
  },
  explanation: {
    intuition: [
      t`**Grouped data** lists **classes**, like $10$–$20$, and the **frequency** $f$ of each: how many observations fall in it.`,
      t`Inside a class we no longer know the exact values.`,
      t`So we let every observation in a class stand at its middle, the **class mark** $x$.`,
      t`A class's **limits** are its two ends; the class mark is their average, so $10$–$20$ has mark $15$.`,
      t`Now the table reads like data where the value $x$ occurs $f$ times.`,
      t`The mean is the total $\sum fx$ shared among all the observations, $\sum f$ of them, not among the classes.`,
    ],
    formal: [
      {
        title: "The class-mark formula",
        points: [
          t`The **total frequency** $N = \sum f$ is the number of observations.`,
          t`Multiply each class mark by its frequency, then add: that is $\sum fx$.`,
          t`The mean is $\bar{x} = \frac{\sum fx}{N}$.`,
          t`It is an estimate: the class mark stands in for the unknown values inside each class.`,
        ],
      },
      {
        title: "Lay it out as a table",
        points: [
          t`Take classes $0$–$10$, $10$–$20$, $20$–$30$, $30$–$40$ with frequencies $3, 5, 8, 4$, so $N = 20$.`,
          t`Row $0$–$10$: $x = 5$, $fx = 15$.`,
          t`Row $10$–$20$: $x = 15$, $fx = 75$.`,
          t`Row $20$–$30$: $x = 25$, $fx = 200$.`,
          t`Row $30$–$40$: $x = 35$, $fx = 140$.`,
          t`$\sum fx = 430$, so $\bar{x} = \frac{430}{20} = 21.5$.`,
        ],
      },
      {
        title: "The assumed-mean method",
        points: [
          t`Large class marks make large products; shifting them first keeps the numbers small.`,
          t`Pick an **assumed mean** $A$: any handy value, usually a middle class mark.`,
          t`Each **deviation** is $d = x - A$, and then $\bar{x} = A + \frac{\sum fd}{N}$.`,
          t`In the table above take $A = 25$: the deviations are $-20, -10, 0, 10$.`,
          t`$\sum fd = -60 - 50 + 0 + 40$ $= -70$.`,
          t`So $\bar{x} = 25 + \frac{-70}{20}$ $= 25 - 3.5 = 21.5$, as before.`,
        ],
      },
      {
        title: "Step deviations",
        points: [
          t`The **class width** $h$ is upper limit minus lower limit; with equal classes, every $d$ is a multiple of $h$.`,
          t`Divide it out: the **step deviation** is $u = \frac{x - A}{h}$.`,
          t`Then $\bar{x} = A + h \times \frac{\sum fu}{N}$: multiply back by $h$.`,
          t`In the table above $h = 10$, and with $A = 25$ the steps are $u = -2, -1, 0, 1$.`,
          t`$\sum fu = -6 - 5 + 0 + 4 = -7$.`,
          t`So $\bar{x} = 25 + 10 \times \frac{-7}{20}$ $= 21.5$ again.`,
        ],
      },
      {
        title: "A missing frequency",
        points: [
          t`Sometimes the mean is given and one frequency is unknown: call it $k$.`,
          t`It appears twice: in $\sum fx$ and in the total $N$.`,
          t`Write $\sum fx = \bar{x} \times N$ with $k$ in both, and solve for $k$.`,
          t`Say the $8$ in the table above were unknown, with $\bar{x} = 21.5$.`,
          t`Then $230 + 25k = 21.5(12 + k)$, so $3.5k = 28$ and $k = 8$.`,
        ],
      },
      {
        title: "Scaling every frequency",
        points: [
          t`Double every frequency: $\sum fx$ doubles, and so does $N$.`,
          t`The two factors of $2$ cancel, so the mean does not change.`,
          t`Any common multiplier works the same way: only the share of observations in each class matters.`,
        ],
      },
    ],
    worked: {
      prompt: t`Daily wages (in rupees) of $50$ workers: $$\begin{array}{c|c} \text{Wage} & \text{Workers} \\ \hline 100\text{–}120 & 6 \\ 120\text{–}140 & 10 \\ 140\text{–}160 & 14 \\ 160\text{–}180 & 12 \\ 180\text{–}200 & 8 \end{array}$$ Find the mean wage by the step-deviation method.`,
      steps: [
        t`The class marks are $110, 130, 150, 170, 190$, and $N = 6 + 10 + 14 + 12 + 8$ $= 50$.`,
        t`Take $A = 150$ and $h = 20$: the steps $u = \frac{x - 150}{20}$ are $-2, -1, 0, 1, 2$.`,
        t`$\sum fu = -12 - 10 + 0 + 12 + 16$ $= 6$.`,
        t`$\bar{x} = 150 + 20 \times \frac{6}{50}$ $= 150 + 2.4 = 152.4$.`,
      ],
      answer: t`The mean daily wage is $152.4$ rupees.`,
    },
    visualSpec: t`Drag the bars of a histogram up and down: a pointer at the class-mark mean slides towards the taller bars, and stays put when every bar is scaled by the same factor.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Dividing $\sum fx$ by the number of classes instead of by $N = \sum f$`,
      remediation: t`Divide by the total frequency $N = \sum f$, the number of observations, not by the number of classes. Every observation counts once.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M2",
      mistake: "Using each class's lower limit as its value instead of the class mark",
      remediation: "A class stands at its middle, the class mark: the average of its two limits. Using lower limits pulls the mean down by half a class width.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M3",
      mistake: "Averaging the class marks and ignoring the frequencies",
      remediation: t`Weight each class mark by its frequency: $\bar{x} = \frac{\sum fx}{\sum f}$. A class with more observations counts for more.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M4",
      mistake: t`In the step-deviation method, leaving out the factor $h$`,
      remediation: t`Step deviations were divided by $h$, so multiply back: $\bar{x} = A + h \times \frac{\sum fu}{N}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinking that multiplying every frequency by a number multiplies the mean by it",
      remediation: t`Multiplying every frequency by $c$ multiplies both $\sum fx$ and $N$ by $c$, so their ratio, the mean, stays the same.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M6",
      mistake: t`Putting the missing frequency into $\sum fu$ (or $\sum fx$) but leaving it out of $N$`,
      remediation: t`The missing frequency is part of the total too: $N$ is the known frequencies plus the unknown one. Keep it in both places when you solve.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M4 applies only when the stem fixes an assumed mean $A$ (step deviations); C06-M5 only to scaled frequencies; C06-M6 only to a missing frequency, worked by the step method the stem names (it gives a different number by the direct method).`,
    t`C06-M3 gives the key whenever the frequencies are symmetric about the middle class. NDA 2025 Sep Q117 (frequencies $20, 30, 30, 20$, mean $25$) is such a table, so C06-Q1 uses $2, 3, 4, 1$; NDA 2022 Apr Q120 (mean $50$, also the plain average of its class marks) gets new frequencies in C06-Q3.`,
    t`C06-Q4 simplifies NDA 2022 Apr Q118 (two unknowns $p + q$ and $p - 3q$, with $N = 120$) to one unknown with the mean given; its numbers make every model give a whole number. C06-M1 gives no positive frequency there, so it is not tagged.`,
    "C06-Q5 uses the Mathematics column of the NDA 2020 Apr Q106 to Q108 table; C06-Q6 uses the table of NDA 2022 Sep Q118, which asks for the median.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Sep Q117" },
      stem: t`The marks of some students in a Science test are grouped below. $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 5\text{–}15 & 2 \\ 15\text{–}25 & 3 \\ 25\text{–}35 & 4 \\ 35\text{–}45 & 1 \end{array}$$ The mean mark is:`,
      verify: { kind: "value", inputs: { lo: "(5, 15, 25, 35)", hi: "(15, 25, 35, 45)", f: "(2, 3, 4, 1)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$60$`, correct: false, misconceptionId: "C06-M1", value: "60" },
        { key: "B", text: t`$19$`, correct: false, misconceptionId: "C06-M2", value: "19" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C06-M3", value: "25" },
        { key: "D", text: t`$24$`, correct: true, value: "24" },
      ],
      solution: {
        steps: [
          t`The class marks are $10, 20, 30, 40$, and $N = 2 + 3 + 4 + 1 = 10$.`,
          t`$\sum fx = 20 + 60 + 120 + 40$ $= 240$.`,
          t`$\bar{x} = \frac{240}{10} = 24$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q108" },
      stem: t`Marks in Physics of $100$ students: $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 10\text{–}20 & 8 \\ 20\text{–}30 & 11 \\ 30\text{–}40 & 30 \\ 40\text{–}50 & 26 \\ 50\text{–}60 & 15 \\ 60\text{–}70 & 10 \end{array}$$ Using the step deviations $u = \frac{x - 35}{10}$, where $x$ is the class mark, the mean mark is:`,
      verify: { kind: "value", inputs: { lo: "(10, 20, 30, 40, 50, 60)", hi: "(20, 30, 40, 50, 60, 70)", f: "(8, 11, 30, 26, 15, 10)", A: "35" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$40.9$`, correct: true, value: "409/10" },
        { key: "B", text: t`$35.59$`, correct: false, misconceptionId: "C06-M4", value: "3559/100" },
        { key: "C", text: t`$35.9$`, correct: false, misconceptionId: "C06-M2", value: "359/10" },
        { key: "D", text: t`$40$`, correct: false, misconceptionId: "C06-M3", value: "40" },
      ],
      solution: {
        steps: [
          t`The class marks are $15, 25, \ldots, 65$, so $u = -2, -1, 0, 1, 2, 3$.`,
          t`$\sum fu = -16 - 11 + 0 + 26 + 30 + 30$ $= 59$, and $N = 100$.`,
          t`$\bar{x} = 35 + 10 \times \frac{59}{100}$ $= 35 + 5.9 = 40.9$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q120" },
      stem: t`Consider the distribution: $$\begin{array}{c|c} \text{Class} & \text{Frequency} \\ \hline 0\text{–}20 & 12 \\ 20\text{–}40 & 28 \\ 40\text{–}60 & 30 \\ 60\text{–}80 & 20 \\ 80\text{–}100 & 10 \end{array}$$ If the frequency of every class is doubled, the mean of the new distribution is:`,
      verify: { kind: "value", inputs: { lo: "(0, 20, 40, 60, 80)", hi: "(20, 40, 60, 80, 100)", f: "(12, 28, 30, 20, 10)", c: "2" }, params: { ask: "double" } },
      options: [
        { key: "A", text: t`$47.6$`, correct: true, value: "238/5" },
        { key: "B", text: t`$95.2$`, correct: false, misconceptionId: "C06-M5", value: "476/5" },
        { key: "C", text: t`$37.6$`, correct: false, misconceptionId: "C06-M2", value: "188/5" },
        { key: "D", text: t`$50$`, correct: false, misconceptionId: "C06-M3", value: "50" },
      ],
      solution: {
        steps: [
          t`The class marks are $10, 30, 50, 70, 90$, and $N = 100$.`,
          t`$\sum fx = 120 + 840 + 1500 + 1400 + 900$ $= 4760$, so $\bar{x} = 47.6$.`,
          t`Doubling every frequency doubles both $\sum fx$ and $N$, so the mean stays $47.6$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q118" },
      stem: t`The mean of the distribution below is $36$. $$\begin{array}{c|c} \text{Class} & \text{Frequency} \\ \hline 10\text{–}20 & 16 \\ 20\text{–}30 & 12 \\ 30\text{–}40 & 11 \\ 40\text{–}50 & 11 \\ 50\text{–}60 & p \end{array}$$ Working with step deviations $u = \frac{x - 35}{10}$, where $x$ is the class mark, the missing frequency $p$ is:`,
      verify: { kind: "value", inputs: { lo: "(10, 20, 30, 40, 50)", hi: "(20, 30, 40, 50, 60)", f: "(16, 12, 11, 11, p)", m: "36", A: "35" }, params: { ask: "missing" } },
      options: [
        { key: "A", text: t`$45$`, correct: false, misconceptionId: "C06-M2", value: "45" },
        { key: "B", text: t`$20$`, correct: true, value: "20" },
        { key: "C", text: t`$19$`, correct: false, misconceptionId: "C06-M6", value: "19" },
        { key: "D", text: t`$83$`, correct: false, misconceptionId: "C06-M4", value: "83" },
      ],
      solution: {
        steps: [
          t`The class marks are $15, 25, 35, 45, 55$, so $u = -2, -1, 0, 1, 2$ and $N = 50 + p$.`,
          t`$\sum fu = -32 - 12 + 0 + 11 + 2p$ $= 2p - 33$.`,
          t`$35 + \frac{10(2p - 33)}{50 + p}$ $= 36$ gives $20p - 330 = 50 + p$.`,
          t`So $19p = 380$ and $p = 20$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q106" },
      stem: t`Marks in Mathematics of $100$ students: $$\begin{array}{c|c} \text{Marks} & \text{Students} \\ \hline 10\text{–}20 & 10 \\ 20\text{–}30 & 21 \\ 30\text{–}40 & 38 \\ 40\text{–}50 & 15 \\ 50\text{–}60 & 10 \\ 60\text{–}70 & 6 \end{array}$$ Taking the assumed mean $A = 35$ and step deviations $u = \frac{x - A}{10}$, where $x$ is the class mark, the mean mark is:`,
      verify: { kind: "value", inputs: { lo: "(10, 20, 30, 40, 50, 60)", hi: "(20, 30, 40, 50, 60, 70)", f: "(10, 21, 38, 15, 10, 6)", A: "35" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$36.2$`, correct: true, value: "181/5" },
        { key: "B", text: t`$35.12$`, correct: false, misconceptionId: "C06-M4", value: "878/25" },
        { key: "C", text: t`$55$`, correct: false, misconceptionId: "C06-M1", value: "55" },
        { key: "D", text: t`$40$`, correct: false, misconceptionId: "C06-M3", value: "40" },
      ],
      solution: {
        steps: [
          t`The class marks are $15, 25, \ldots, 65$, so $u = -2, -1, 0, 1, 2, 3$.`,
          t`$\sum fu = -20 - 21 + 0 + 15 + 20 + 18$ $= 12$, and $N = 100$.`,
          t`$\bar{x} = 35 + 10 \times \frac{12}{100}$ $= 35 + 1.2 = 36.2$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Sep Q118" },
      stem: t`Consider the distribution: $$\begin{array}{c|c} \text{Class} & \text{Frequency} \\ \hline 0\text{–}10 & 1 \\ 10\text{–}20 & 2 \\ 20\text{–}30 & 4 \\ 30\text{–}40 & 6 \\ 40\text{–}50 & 4 \\ 50\text{–}60 & 3 \end{array}$$ If every frequency is tripled, the mean of the new distribution is:`,
      verify: { kind: "value", inputs: { lo: "(0, 10, 20, 30, 40, 50)", hi: "(10, 20, 30, 40, 50, 60)", f: "(1, 2, 4, 6, 4, 3)", c: "3" }, params: { ask: "double" } },
      options: [
        { key: "A", text: t`$29.5$`, correct: false, misconceptionId: "C06-M2", value: "59/2" },
        { key: "B", text: t`$30$`, correct: false, misconceptionId: "C06-M3", value: "30" },
        { key: "C", text: t`$34.5$`, correct: true, value: "69/2" },
        { key: "D", text: t`$103.5$`, correct: false, misconceptionId: "C06-M5", value: "207/2" },
      ],
      solution: {
        steps: [
          t`The class marks are $5, 15, 25, 35, 45, 55$, and $N = 20$.`,
          t`$\sum fx = 5 + 30 + 100 + 210 + 180 + 165$ $= 690$, so $\bar{x} = 34.5$.`,
          t`Tripling every frequency triples both $\sum fx$ and $N$, so the mean stays $34.5$.`,
        ],
      },
    },
  ],
};
