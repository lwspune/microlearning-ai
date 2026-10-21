import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A shop's table: $6$ sales in $10$–$20$, $12$ in $20$–$30$, $2$ in $30$–$40$. The busiest class is $20$–$30$. **Is the mode its middle, $25$?**`,
    reveal: t`No. The class before has more values than the class after, so the values crowd towards $20$. The mode is $20 + \frac{6}{16} \times 10$ $= 23.75$, a little below $25$.`,
  },
  explanation: {
    intuition: [
      t`The **mode** is the value that occurs most often.`,
      t`In grouped data we see only classes, not the single values.`,
      t`The class with the highest frequency is the **modal class**; the mode lies in it.`,
      t`The mode is a value, like $72$ units, never a frequency, like $100$ families.`,
      t`Inside the modal class, the mode leans towards the busier neighbouring class.`,
      t`A formula measures that lean and gives the mode.`,
    ],
    formal: [
      {
        title: "The letters in the formula",
        points: [
          t`$L$ is the lower limit of the modal class.`,
          t`$h$ is the class interval: upper limit minus lower limit of the modal class.`,
          t`$f_1$ is the frequency of the modal class.`,
          t`$f_0$ is the frequency of the class just **before** the modal class.`,
          t`$f_2$ is the frequency of the class just **after** the modal class.`,
          t`If the modal class is the first or the last class, the missing neighbour has frequency $0$.`,
        ],
      },
      {
        title: "The mode formula",
        points: [
          t`Mode $= L + \left[\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right] \times h$.`,
          t`The top, $f_1 - f_0$, compares the modal class with the class before it.`,
          t`The bottom is $(f_1 - f_0) + (f_1 - f_2)$, both comparisons added.`,
          t`The fraction is less than $1$, so the mode stays inside the modal class.`,
          t`Multiply the fraction by $h$ before adding it to $L$.`,
          t`Check: the answer must lie between the limits of the modal class.`,
        ],
      },
      {
        title: "Classes with gaps",
        points: [
          t`Classes like $10$–$19$, $20$–$29$ leave a gap of $1$ between $19$ and $20$.`,
          t`Make them **continuous** first: subtract half the gap from each lower limit, add it to each upper limit.`,
          t`So $20$–$29$ becomes $19.5$–$29.5$.`,
          t`Now $L = 19.5$ and $h = 29.5 - 19.5 = 10$.`,
          t`Use these $L$ and $h$ in the formula; the frequencies do not change.`,
        ],
      },
    ],
    worked: {
      prompt: t`The demand for a sweet and the number of customers is shown below. $$\begin{array}{c|c} \text{Sweet (gram)} & \text{Customers} \\ \hline 0\text{–}250 & 10 \\ 250\text{–}500 & 60 \\ 500\text{–}750 & 30 \\ 750\text{–}1000 & 20 \\ 1000\text{–}1250 & 15 \end{array}$$ Find the mode of the demand.`,
      steps: [
        t`The highest frequency is $60$, so the modal class is $250$–$500$.`,
        t`$L = 250$, $h = 250$, $f_1 = 60$, $f_0 = 10$, $f_2 = 30$.`,
        t`$f_1 - f_0 = 50$ and $2f_1 - f_0 - f_2$ $= 120 - 10 - 30 = 80$.`,
        t`Mode $= 250 + \frac{50}{80} \times 250$ $= 250 + 156.25 = 406.25$.`,
      ],
      answer: t`The mode is $406.25$ gram, which lies in $250$–$500$.`,
    },
    visualSpec: t`Drag the frequencies of the classes on either side of the modal class: a marker for the mode slides inside the modal class towards the taller neighbour.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Giving the highest frequency $f_1$ as the mode`,
      remediation: "The highest frequency only picks the modal class. The mode is a value inside that class, found with the formula.",
      fallback: { kind: "ext", topic: "mode of ungrouped data (Std IX Statistics)" },
    },
    {
      id: "C05-M2",
      mistake: t`Using the printed limits of classes with gaps (like $4$–$6$) as $L$ and $h$`,
      remediation: t`Make classes with gaps continuous first: $4$–$6$ becomes $3.5$–$6.5$, so $L = 3.5$ and $h = 3$.`,
      fallback: { kind: "ext", topic: "continuous and discontinuous classes (Std IX Statistics)" },
    },
    {
      id: "C05-M3",
      mistake: t`Swapping $f_0$ and $f_2$: taking the class after the modal class as $f_0$`,
      remediation: t`$f_0$ is the frequency of the class **before** the modal class and $f_2$ of the class **after** it. The top of the fraction is $f_1 - f_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Forgetting to multiply the fraction by $h$`,
      remediation: t`The fraction is a part of the class interval: multiply it by $h$, then add it to $L$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Giving the class mark (middle) of the modal class as the mode",
      remediation: "The mode need not be the middle of the modal class. It leans towards the busier neighbour; use the formula.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M2 applies only to a table whose classes have gaps (C05-Q3, C05-Q6); on continuous classes it gives the key. C05-M4 gives the key when $h = 1$, so it is not tagged on C05-Q4.`,
    t`C05-M5 gives the key when $f_0 = f_2$; the items avoid such tables. C05-M3 gives the key in the same case.`,
    t`Book numbers changed so every option is exact: Ex 6.3 Q.1 has $50$ (not $60$) after the modal class, Ex 6.3 Q.3 has $25$ (not $18$) in $11$–$13$, Ex 6.3 Q.4 has $36$ in $0$–$4$ and $38$ in $15$–$19$ (still $200$ patients), and PS6 Q.8 (the worked example) has $30$ in $500$–$750$.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q2(B)(v)" },
      stem: t`For a frequency distribution, $L = 10$, $f_1 = 70$, $f_0 = 58$, $f_2 = 42$ and $h = 2$. Using the formula, the mode is:`,
      verify: { kind: "value", inputs: { L: "10", f1: "70", f0: "58", f2: "42", h: "2" }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$11$`, correct: false, misconceptionId: "C05-M5", value: "11" },
        { key: "B", text: t`$10.6$`, correct: true, value: "53/5" },
        { key: "C", text: t`$11.4$`, correct: false, misconceptionId: "C05-M3", value: "57/5" },
        { key: "D", text: t`$10.3$`, correct: false, misconceptionId: "C05-M4", value: "103/10" },
      ],
      solution: {
        steps: [
          t`Mode $= L + \left[\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right] \times h$.`,
          t`$f_1 - f_0 = 12$ and $2f_1 - f_0 - f_2$ $= 140 - 100 = 40$.`,
          t`Mode $= 10 + \frac{12}{40} \times 2$ $= 10 + 0.6 = 10.6$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q3(B)(iii)" },
      stem: t`Electricity used by some families is shown below. $$\begin{array}{c|c} \text{Units} & \text{Families} \\ \hline 0\text{–}20 & 13 \\ 20\text{–}40 & 50 \\ 40\text{–}60 & 70 \\ 60\text{–}80 & 100 \\ 80\text{–}100 & 80 \\ 100\text{–}120 & 17 \end{array}$$ The mode of electricity used (in units) is:`,
      verify: { kind: "value", inputs: { lo: "(0, 20, 40, 60, 80, 100)", hi: "(20, 40, 60, 80, 100, 120)", f: "(13, 50, 70, 100, 80, 17)" }, params: { ask: "table" } },
      options: [
        { key: "A", text: t`$100$`, correct: false, misconceptionId: "C05-M1", value: "100" },
        { key: "B", text: t`$68$`, correct: false, misconceptionId: "C05-M3", value: "68" },
        { key: "C", text: t`$60.6$`, correct: false, misconceptionId: "C05-M4", value: "303/5" },
        { key: "D", text: t`$72$`, correct: true, value: "72" },
      ],
      solution: {
        steps: [
          t`The highest frequency is $100$, so the modal class is $60$–$80$.`,
          t`$L = 60$, $h = 20$, $f_1 = 100$, $f_0 = 70$, $f_2 = 80$.`,
          t`Mode $= 60 + \frac{30}{200 - 150} \times 20$ $= 60 + 12 = 72$ units.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Mode SolvedEx.2" },
      stem: t`The volume of petrol filled in some vehicles is shown below. $$\begin{array}{c|c} \text{Petrol (litre)} & \text{Vehicles} \\ \hline 1\text{–}3 & 33 \\ 4\text{–}6 & 40 \\ 7\text{–}9 & 27 \\ 10\text{–}12 & 18 \\ 13\text{–}15 & 12 \end{array}$$ The mode of the volume of petrol (in litre) is:`,
      verify: { kind: "value", inputs: { lo: "(1, 4, 7, 10, 13)", hi: "(3, 6, 9, 12, 15)", f: "(33, 40, 27, 18, 12)" }, params: { ask: "table" } },
      options: [
        { key: "A", text: t`$4.55$`, correct: true, value: "91/20" },
        { key: "B", text: t`$4.7$`, correct: false, misconceptionId: "C05-M2", value: "47/10" },
        { key: "C", text: t`$5.45$`, correct: false, misconceptionId: "C05-M3", value: "109/20" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C05-M5", value: "5" },
      ],
      solution: {
        steps: [
          t`The classes have gaps, so make them continuous: $4$–$6$ becomes $3.5$–$6.5$.`,
          t`The modal class is $3.5$–$6.5$: $L = 3.5$, $h = 3$, $f_1 = 40$, $f_0 = 33$, $f_2 = 27$.`,
          t`Mode $= 3.5 + \frac{7}{80 - 60} \times 3$ $= 3.5 + 1.05 = 4.55$ litre.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Ex 6.3 Q.1" },
      stem: t`Milk collected at a centre, by its fat content, is shown below. $$\begin{array}{c|c} \text{Fat (\%)} & \text{Milk (litre)} \\ \hline 2\text{–}3 & 30 \\ 3\text{–}4 & 70 \\ 4\text{–}5 & 80 \\ 5\text{–}6 & 50 \\ 6\text{–}7 & 20 \end{array}$$ The mode of the fat content (in %) is:`,
      verify: { kind: "value", inputs: { lo: "(2, 3, 4, 5, 6)", hi: "(3, 4, 5, 6, 7)", f: "(30, 70, 80, 50, 20)" }, params: { ask: "table" } },
      options: [
        { key: "A", text: t`$4.75$`, correct: false, misconceptionId: "C05-M3", value: "19/4" },
        { key: "B", text: t`$4.5$`, correct: false, misconceptionId: "C05-M5", value: "9/2" },
        { key: "C", text: t`$4.25$`, correct: true, value: "17/4" },
        { key: "D", text: t`$80$`, correct: false, misconceptionId: "C05-M1", value: "80" },
      ],
      solution: {
        steps: [
          t`The highest frequency is $80$, so the modal class is $4$–$5$.`,
          t`$L = 4$, $h = 1$, $f_1 = 80$, $f_0 = 70$, $f_2 = 50$.`,
          t`Mode $= 4 + \frac{10}{160 - 120} \times 1$ $= 4 + 0.25 = 4.25$ %.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Ex 6.3 Q.3" },
      stem: t`The milk supplied to some hotels is shown below. $$\begin{array}{c|c} \text{Milk (litre)} & \text{Hotels} \\ \hline 1\text{–}3 & 7 \\ 3\text{–}5 & 5 \\ 5\text{–}7 & 15 \\ 7\text{–}9 & 20 \\ 9\text{–}11 & 35 \\ 11\text{–}13 & 25 \end{array}$$ The mode of the supply of milk (in litre) is:`,
      verify: { kind: "value", inputs: { lo: "(1, 3, 5, 7, 9, 11)", hi: "(3, 5, 7, 9, 11, 13)", f: "(7, 5, 15, 20, 35, 25)" }, params: { ask: "table" } },
      options: [
        { key: "A", text: t`$10.2$`, correct: true, value: "51/5" },
        { key: "B", text: t`$35$`, correct: false, misconceptionId: "C05-M1", value: "35" },
        { key: "C", text: t`$9.8$`, correct: false, misconceptionId: "C05-M3", value: "49/5" },
        { key: "D", text: t`$9.6$`, correct: false, misconceptionId: "C05-M4", value: "48/5" },
      ],
      solution: {
        steps: [
          t`The highest frequency is $35$, so the modal class is $9$–$11$.`,
          t`$L = 9$, $h = 2$, $f_1 = 35$, $f_0 = 20$, $f_2 = 25$.`,
          t`Mode $= 9 + \frac{15}{70 - 45} \times 2$ $= 9 + 1.2 = 10.2$ litre.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-statistics-10/Ex 6.3 Q.4" },
      stem: t`The ages of $200$ patients treated in a hospital in a week are shown below. $$\begin{array}{c|c} \text{Age (years)} & \text{Patients} \\ \hline 0\text{–}4 & 36 \\ 5\text{–}9 & 32 \\ 10\text{–}14 & 50 \\ 15\text{–}19 & 38 \\ 20\text{–}24 & 24 \\ 25\text{–}29 & 20 \end{array}$$ The mode of the ages (in years) is:`,
      verify: { kind: "value", inputs: { lo: "(0, 5, 10, 15, 20, 25)", hi: "(4, 9, 14, 19, 24, 29)", f: "(36, 32, 50, 38, 24, 20)" }, params: { ask: "table" } },
      options: [
        { key: "A", text: t`$12.5$`, correct: true, value: "25/2" },
        { key: "B", text: t`$12.4$`, correct: false, misconceptionId: "C05-M2", value: "62/5" },
        { key: "C", text: t`$10.1$`, correct: false, misconceptionId: "C05-M4", value: "101/10" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C05-M5", value: "12" },
      ],
      solution: {
        steps: [
          t`The classes have gaps, so make them continuous: $10$–$14$ becomes $9.5$–$14.5$.`,
          t`The modal class is $9.5$–$14.5$: $L = 9.5$, $h = 5$, $f_1 = 50$, $f_0 = 32$, $f_2 = 38$.`,
          t`Mode $= 9.5 + \frac{18}{100 - 70} \times 5$ $= 9.5 + 3 = 12.5$ years.`,
        ],
      },
    },
  ],
};
