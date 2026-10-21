import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A coach knows only that $6$ runners took $10$ to $20$ minutes and $4$ runners took $20$ to $30$ minutes. **Can we still find the mean time?**`,
    reveal: t`Yes, closely enough: let each runner stand at the middle of the class, $15$ or $25$ minutes. The total is $6 \times 15 + 4 \times 25$ $= 190$, so the mean is $\frac{190}{10} = 19$ minutes.`,
  },
  explanation: {
    intuition: [
      t`**Grouped data** shows **classes**, like $10$–$20$, and the **frequency** of each: how many values fall in it.`,
      t`Inside a class, we do not know the exact values.`,
      t`So we let every value in a class stand at the middle of the class.`,
      t`This middle is the **class mark**: the class $10$–$20$ has class mark $15$.`,
      t`A class with frequency $6$ then acts like the value $15$ written $6$ times.`,
      t`The **mean** is the total of all the values divided by the number of values.`,
    ],
    formal: [
      {
        title: "Class mark of a class",
        points: [
          t`The two ends of a class are its **lower limit** and its **upper limit**.`,
          t`The **class mark** $x_i$ is the middle of the class.`,
          t`Class mark $=$ (lower limit $+$ upper limit) $\div 2$.`,
          t`For the class $40$–$50$, the class mark is $\frac{40 + 50}{2} = 45$.`,
          t`The **class width** is upper limit minus lower limit, here $10$; it is not the class mark.`,
          t`For $40$–$49$, the class mark is $\frac{40 + 49}{2} = 44.5$, the same as for $39.5$–$49.5$.`,
        ],
      },
      {
        title: "The direct method formula",
        points: [
          t`Let every value in class $i$ stand at its class mark $x_i$.`,
          t`If $f_i$ is the frequency of the class, the class adds $f_i \times x_i$ to the total.`,
          t`Adding over all classes gives the total, $\sum f_i x_i$.`,
          t`The number of values is the total frequency, $\sum f_i$.`,
          t`So the mean is $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$.`,
          t`Divide by $\sum f_i$, the number of values, not by the number of classes.`,
        ],
      },
      {
        title: "Lay it out as a table",
        points: [
          t`Make four columns: class, class mark $x_i$, frequency $f_i$ and $f_i x_i$.`,
          t`Row $0$–$10$: $x_i = 5$, $f_i = 2$, $f_i x_i = 10$.`,
          t`Row $10$–$20$: $x_i = 15$, $f_i = 5$, $f_i x_i = 75$.`,
          t`Row $20$–$30$: $x_i = 25$, $f_i = 8$, $f_i x_i = 200$.`,
          t`Row $30$–$40$: $x_i = 35$, $f_i = 5$, $f_i x_i = 175$.`,
          t`$\sum f_i = 20$ and $\sum f_i x_i = 460$, so $\bar{x} = \frac{460}{20} = 23$.`,
        ],
      },
      {
        title: "A missing frequency",
        points: [
          t`Sometimes the mean is given and one frequency is unknown, say $k$.`,
          t`Then $k$ appears twice: in $\sum f_i x_i$ and in $\sum f_i$.`,
          t`Write $\sum f_i x_i = \bar{x} \times \sum f_i$ with $k$ in both, and solve for $k$.`,
          t`Say the $8$ in the table above is $k$ and the mean is $23$.`,
          t`Then $260 + 25k = 23(12 + k)$ $= 276 + 23k$.`,
          t`So $2k = 16$ and $k = 8$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The time taken by $50$ workers to complete a job is shown below. $$\begin{array}{c|c} \text{Time (hours)} & \text{Workers} \\ \hline 15\text{–}19 & 10 \\ 20\text{–}24 & 15 \\ 25\text{–}29 & 12 \\ 30\text{–}34 & 8 \\ 35\text{–}39 & 5 \end{array}$$ Find the mean time by the direct method.`,
      steps: [
        t`Class marks: $\frac{15 + 19}{2} = 17$, then $22$, $27$, $32$, $37$.`,
        t`$\sum f_i = 10 + 15 + 12 + 8 + 5$ $= 50$.`,
        t`$f_i x_i$: $170$, $330$, $324$, $256$, $185$; so $\sum f_i x_i = 1265$.`,
        t`$\bar{x} = \frac{\sum f_i x_i}{\sum f_i} = \frac{1265}{50}$ $= 25.3$.`,
      ],
      answer: t`The mean time is $25.3$ hours.`,
    },
    visualSpec: t`Drag the frequencies of a grouped table up and down: a pointer at the mean $\bar{x}$ slides towards the classes with more values.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Dividing $\sum f_i x_i$ by the number of classes instead of by $\sum f_i$`,
      remediation: t`Divide by $\sum f_i$, the total number of values. Every value counts once, not every class.`,
      fallback: { kind: "ext", topic: "mean of ungrouped data (Std IX Statistics)" },
    },
    {
      id: "C01-M2",
      mistake: "Taking each class's lower limit as its class mark",
      remediation: t`The class mark is the middle of the class: (lower limit $+$ upper limit) $\div 2$. For $20$–$30$ it is $25$, not $20$.`,
      fallback: { kind: "ext", topic: "class marks and grouped frequency tables (Std IX Statistics)" },
    },
    {
      id: "C01-M3",
      mistake: "Averaging the class marks and ignoring the frequencies",
      remediation: t`Multiply each class mark by its frequency: $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$. A class with more values counts for more.`,
      fallback: { kind: "ext", topic: "mean of ungrouped data (Std IX Statistics)" },
    },
    {
      id: "C01-M4",
      mistake: "Confusing the class mark with the class width (upper limit minus lower limit)",
      remediation: t`Upper limit minus lower limit is the class width. The class mark is the middle: add the two limits and divide by $2$.`,
      fallback: { kind: "ext", topic: "class marks and grouped frequency tables (Std IX Statistics)" },
    },
    {
      id: "C01-M5",
      mistake: "Taking each class's upper limit as its class mark",
      remediation: t`The class mark is the middle of the class, not its end: (lower limit $+$ upper limit) $\div 2$. For $20$–$30$ it is $25$, not $30$.`,
      fallback: { kind: "ext", topic: "class marks and grouped frequency tables (Std IX Statistics)" },
    },
    {
      id: "C01-M6",
      mistake: t`Putting the missing frequency $k$ into $\sum f_i x_i$ but leaving it out of $\sum f_i$`,
      remediation: t`The unknown frequency is part of the total frequency too: $\sum f_i$ includes $k$. Keep $k$ in both sums when you solve.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M4 applies only to a class-mark question (on a table every value would be the class width); C01-M6 only to a missing frequency. C01-M1 gives no positive frequency on a missing-frequency item and C01-M3 does not involve $k$, so neither is tagged there.`,
    t`C01-M3 gives the key when the frequencies are symmetric about the middle class. Board 2025 Q2(B)(v) (frequencies $8, 14, 18, 10, 10$, mean $5$) is such a table, so C01-Q3 uses $6, 14, 18, 12, 10$.`,
    t`C01-Q4 puts an unknown frequency into the book's percentage-of-marks table (Direct method Solved Ex.1) with new frequencies, so that C01-M2, C01-M5 and C01-M6 each give a whole positive $k$.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q3(B)(iii)" },
      stem: t`A milk centre sold milk to $50$ customers. $$\begin{array}{c|c} \text{Milk (litre)} & \text{Customers} \\ \hline 1\text{–}2 & 17 \\ 2\text{–}3 & 13 \\ 3\text{–}4 & 10 \\ 4\text{–}5 & 7 \\ 5\text{–}6 & 3 \end{array}$$ By the direct method, the mean milk sold (in litre) is:`,
      verify: { kind: "value", inputs: { lo: "(1, 2, 3, 4, 5)", hi: "(2, 3, 4, 5, 6)", f: "(17, 13, 10, 7, 3)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$2.82$`, correct: true, value: "141/50" },
        { key: "B", text: t`$28.2$`, correct: false, misconceptionId: "C01-M1", value: "141/5" },
        { key: "C", text: t`$2.32$`, correct: false, misconceptionId: "C01-M2", value: "58/25" },
        { key: "D", text: t`$3.5$`, correct: false, misconceptionId: "C01-M3", value: "7/2" },
      ],
      solution: {
        steps: [
          t`Class marks: $1.5$, $2.5$, $3.5$, $4.5$, $5.5$; $\sum f_i = 50$.`,
          t`$f_i x_i$: $25.5$, $32.5$, $35$, $31.5$, $16.5$; so $\sum f_i x_i = 141$.`,
          t`$\bar{x} = \frac{141}{50} = 2.82$ litre.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025-jul/Q1(B)(iv)" },
      stem: t`The class mark of the class $6$–$10$ is:`,
      verify: { kind: "value", inputs: { l: "6", u: "10" }, params: { ask: "mark" } },
      options: [
        { key: "A", text: t`$8$`, correct: true, value: "8" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C01-M2", value: "6" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C01-M4", value: "4" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C01-M5", value: "10" },
      ],
      solution: {
        steps: [
          t`Class mark $=$ (lower limit $+$ upper limit) $\div 2$.`,
          t`$\frac{6 + 10}{2} = \frac{16}{2} = 8$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2025/Q2(B)(v)" },
      stem: t`The time $60$ students spend daily on their studies is shown below. $$\begin{array}{c|c} \text{Time (hours)} & \text{Students} \\ \hline 0\text{–}2 & 6 \\ 2\text{–}4 & 14 \\ 4\text{–}6 & 18 \\ 6\text{–}8 & 12 \\ 8\text{–}10 & 10 \end{array}$$ The mean time spent on studies (in hours) is:`,
      verify: { kind: "value", inputs: { lo: "(0, 2, 4, 6, 8)", hi: "(2, 4, 6, 8, 10)", f: "(6, 14, 18, 12, 10)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C01-M3", value: "5" },
        { key: "B", text: t`$6.2$`, correct: false, misconceptionId: "C01-M5", value: "31/5" },
        { key: "C", text: t`$5.2$`, correct: true, value: "26/5" },
        { key: "D", text: t`$62.4$`, correct: false, misconceptionId: "C01-M1", value: "312/5" },
      ],
      solution: {
        steps: [
          t`Class marks: $1$, $3$, $5$, $7$, $9$; $\sum f_i = 60$.`,
          t`$f_i x_i$: $6$, $42$, $90$, $84$, $90$; so $\sum f_i x_i = 312$.`,
          t`$\bar{x} = \frac{312}{60} = 5.2$ hours.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Direct method SolvedEx.1" },
      stem: t`The percentage of marks of some students in a test is given below. $$\begin{array}{c|c} \text{Marks (\%)} & \text{Students} \\ \hline 0\text{–}20 & 10 \\ 20\text{–}40 & 14 \\ 40\text{–}60 & 7 \\ 60\text{–}80 & 18 \\ 80\text{–}100 & k \end{array}$$ The mean percentage of marks is $60$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { lo: "(0, 20, 40, 60, 80)", hi: "(20, 40, 60, 80, 100)", f: "(10, 14, 7, 18, k)", m: "60" }, params: { ask: "missing" } },
      options: [
        { key: "A", text: t`$27$`, correct: true, value: "27" },
        { key: "B", text: t`$65$`, correct: false, misconceptionId: "C01-M2", value: "65" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C01-M5", value: "8" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C01-M6", value: "9" },
      ],
      solution: {
        steps: [
          t`Class marks: $10$, $30$, $50$, $70$, $90$.`,
          t`$\sum f_i x_i = 2130 + 90k$ and $\sum f_i = 49 + k$.`,
          t`$2130 + 90k = 60(49 + k)$ $= 2940 + 60k$.`,
          t`So $30k = 810$ and $k = 27$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/PS6 Q.3" },
      stem: t`The loans sanctioned by a bank for farm ponds are shown below. $$\begin{array}{c|c} \text{Loan (thousand rupees)} & \text{Farm ponds} \\ \hline 40\text{–}50 & 13 \\ 50\text{–}60 & 20 \\ 60\text{–}70 & 24 \\ 70\text{–}80 & 36 \\ 80\text{–}90 & 7 \end{array}$$ The mean loan, in thousand rupees, is:`,
      verify: { kind: "value", inputs: { lo: "(40, 50, 60, 70, 80)", hi: "(50, 60, 70, 80, 90)", f: "(13, 20, 24, 36, 7)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$65.4$`, correct: true, value: "327/5" },
        { key: "B", text: t`$60.4$`, correct: false, misconceptionId: "C01-M2", value: "302/5" },
        { key: "C", text: t`$65$`, correct: false, misconceptionId: "C01-M3", value: "65" },
        { key: "D", text: t`$70.4$`, correct: false, misconceptionId: "C01-M5", value: "352/5" },
      ],
      solution: {
        steps: [
          t`Class marks: $45$, $55$, $65$, $75$, $85$; $\sum f_i = 100$.`,
          t`$f_i x_i$: $585$, $1100$, $1560$, $2700$, $595$; so $\sum f_i x_i = 6540$.`,
          t`$\bar{x} = \frac{6540}{100} = 65.4$ thousand rupees.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2016/Q2(v)" },
      stem: t`The number of words written by $100$ candidates in an essay is shown below. $$\begin{array}{c|c} \text{Words} & \text{Candidates} \\ \hline 600\text{–}800 & 8 \\ 800\text{–}1000 & 22 \\ 1000\text{–}1200 & 40 \\ 1200\text{–}1400 & 18 \\ 1400\text{–}1600 & 12 \end{array}$$ The mean number of words written is:`,
      verify: { kind: "value", inputs: { lo: "(600, 800, 1000, 1200, 1400)", hi: "(800, 1000, 1200, 1400, 1600)", f: "(8, 22, 40, 18, 12)" }, params: { ask: "mean" } },
      options: [
        { key: "A", text: t`$1100$`, correct: false, misconceptionId: "C01-M3", value: "1100" },
        { key: "B", text: t`$1208$`, correct: false, misconceptionId: "C01-M5", value: "1208" },
        { key: "C", text: t`$1108$`, correct: true, value: "1108" },
        { key: "D", text: t`$22160$`, correct: false, misconceptionId: "C01-M1", value: "22160" },
      ],
      solution: {
        steps: [
          t`Class marks: $700$, $900$, $1100$, $1300$, $1500$; $\sum f_i = 100$.`,
          t`$f_i x_i$: $5600$, $19800$, $44000$, $23400$, $18000$.`,
          t`$\sum f_i x_i = 110800$, so $\bar{x} = \frac{110800}{100} = 1108$ words.`,
        ],
      },
    },
  ],
};
