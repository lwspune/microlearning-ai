import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A teacher tallies the marks of $40$ students into the classes $0$–$10$, $10$–$20$, …, $40$–$50$. Her frequencies add up to $43$. What went wrong?`,
    reveal: t`Three marks sat on a class limit, such as $20$, and each was tallied in two classes. In exclusive classes $20$ goes only in $20$–$30$, so the frequencies must add up to exactly $40$.`,
  },
  explanation: {
    intuition: [
      t`The **frequency** of a value or a class is the number of observations in it.`,
      t`A **frequency distribution table** lists each value or class with its frequency.`,
      t`To count, we draw one **tally mark** $|$ for each observation, against its row.`,
      t`Every fifth mark is drawn across the four before it: $\cancel{||||}$ means $5$.`,
      t`In exclusive classes such as $20$–$25$ and $25$–$30$, the value $25$ is tallied in $25$–$30$.`,
      t`The frequencies add up to $N$, the number of observations.`,
    ],
    formal: [
      {
        title: "Ungrouped frequency table",
        points: [
          t`When the data take only a few values, list each value once.`,
          t`Marks $2, 3, 2, 4, 2, 3$: the value $2$ occurs $3$ times.`,
          t`So $2$ has frequency $3$, $3$ has frequency $2$, and $4$ has frequency $1$.`,
          t`A table of each value with its frequency is an **ungrouped frequency distribution table**.`,
          t`The frequencies $3 + 2 + 1 = 6$, the number of marks.`,
        ],
      },
      {
        title: "Tally marks",
        points: [
          t`Go through the data once, in order, without skipping any observation.`,
          t`For each observation, draw one stroke $|$ in the row of its value or class.`,
          t`Draw the fifth stroke across the first four: $\cancel{||||}$ means $5$.`,
          t`Groups of five are quick to count: $\cancel{||||}\;\cancel{||||}\;|||$ means $5 + 5 + 3 = 13$.`,
          t`The number of strokes in a row is the frequency of that row.`,
        ],
      },
      {
        title: "Grouped frequency table",
        points: [
          t`When the data take many different values, we group them into classes.`,
          t`Choose classes that start at or below the smallest value and end above the largest.`,
          t`Tally each observation into its class; the strokes give the class frequency.`,
          t`Such a table is a **grouped frequency distribution table**.`,
          t`Inclusive classes $6$–$10$, $11$–$15$ leave a gap: $10.5$ fits in neither.`,
          t`So for decimal data, use exclusive classes such as $5$–$10$, $10$–$15$.`,
        ],
      },
      {
        title: "Values on a class limit",
        points: [
          t`An exclusive class holds its lower limit but not its upper limit.`,
          t`So $25$ is tallied in $25$–$30$, not in $20$–$25$.`,
          t`Tally such a value once: never in both classes, never in neither.`,
          t`Data $20, 22, 25, 27$ in $20$–$25$ and $25$–$30$ give frequencies $2$ and $2$.`,
        ],
      },
      {
        title: "Total frequency",
        points: [
          t`The sum of all the frequencies is written $N$, or $\sum f$.`,
          t`$N$ equals the number of observations, since each one is tallied exactly once.`,
          t`If $\sum f$ is not $N$, a value was missed or counted twice.`,
          t`If one frequency is missing, it is $N$ minus the sum of the others.`,
          t`Frequencies $8$, $?$, $5$ with $N = 20$: the missing one is $20 - 13 = 7$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The marks (out of $20$) of $15$ students are $4$, $7$, $10$, $12$, $5$, $15$, $9$, $18$, $11$, $10$, $3$, $14$, $16$, $8$, $13$. Prepare a frequency table with the classes $0$–$5$, $5$–$10$, $10$–$15$, $15$–$20$.`,
      steps: [
        t`The classes are exclusive: $5$ goes in $5$–$10$, $10$ in $10$–$15$, and $15$ in $15$–$20$.`,
        t`Read the marks in order and draw one stroke in each mark's class row.`,
        t`$0$–$5$ gets $4, 3$; $5$–$10$ gets $7, 5, 9, 8$; $15$–$20$ gets $15, 18, 16$.`,
        t`$10$–$15$ gets $10, 12, 11, 10, 14, 13$: a group of five and one more stroke. $$\begin{array}{c|c|c} \text{Class} & \text{Tally} & f \\ \hline 0\text{–}5 & || & 2 \\ 5\text{–}10 & |||| & 4 \\ 10\text{–}15 & \cancel{||||}\;| & 6 \\ 15\text{–}20 & ||| & 3 \\ \hline \text{Total} & & N = 15 \end{array}$$`,
        t`Check: $2 + 4 + 6 + 3 = 15$, the number of students.`,
      ],
      answer: t`The frequencies of $0$–$5$, $5$–$10$, $10$–$15$, $15$–$20$ are $2$, $4$, $6$, $3$; $N = 15$.`,
    },
    visualSpec: t`A list of observations beside a table of classes; tapping an observation drops a tally stroke into its class row, every fifth stroke crossing the four before it, while a running N counts the strokes.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Tallies an observation equal to an upper limit in the class it ends: $25$ goes in $20$–$25$.`,
      remediation: t`An exclusive class holds its lower limit but not its upper limit. A value equal to the upper limit, like $25$ in $20$–$25$, is tallied in the next class.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M2",
      mistake: "Tallies a value on a shared class limit in both classes.",
      remediation: t`Tally each observation exactly once. A value on a shared limit, like $25$, goes only in the class it starts, $25$–$30$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M3",
      mistake: "Leaves a value on a class limit out of every class.",
      remediation: t`Every observation belongs to one class. A value on a limit, like $25$, is the lower limit of $25$–$30$, so tally it there.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: t`Reads a crossed group of tally marks as $4$, counting only the upright strokes.`,
      remediation: t`A crossed group $\cancel{||||}$ is four strokes with a fifth drawn across them, so it stands for $5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Reads a crossed group of tally marks as $1$.`,
      remediation: t`Each stroke is one observation. A crossed group $\cancel{||||}$ holds five strokes, so it counts as $5$, not $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Gives the sum of the known frequencies instead of what is left of $N$.`,
      remediation: t`All the frequencies, the missing one too, add up to $N$. So the missing frequency is $N$ minus the sum of the others.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: t`Takes the total frequency $N$ as the number of rows or classes in the table.`,
      remediation: t`$N$ is the number of observations: add up all the frequencies. The number of rows is only the number of values or classes.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.3 Q4" },
      stem: t`The ages of the students in a class are tallied below. The tally for $14$–$15$ is not printed. What is the frequency of the class $14$–$15$? $$\begin{array}{c|c} \text{Age (years)} & \text{Tally marks} \\ \hline 12\text{–}13 & \cancel{||||} \\ 13\text{–}14 & \cancel{||||}\;\cancel{||||}\;|||| \\ 14\text{–}15 & \text{(not printed)} \\ 15\text{–}16 & |||| \\ \hline \text{Total} & N = 35 \end{array}$$`,
      verify: { kind: "value", inputs: { rows: "((1, 0), (2, 4), (0, 4))", N: "35" }, params: { kind: "missing" } },
      options: [
        { key: "A", text: t`$24$`, correct: false, misconceptionId: "C03-M5", value: "24" },
        { key: "B", text: t`$23$`, correct: false, misconceptionId: "C03-M6", value: "23" },
        { key: "C", text: t`$12$`, correct: true, value: "12" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C03-M4", value: "15" },
      ],
      solution: {
        steps: [
          t`A crossed group $\cancel{||||}$ stands for $5$; each single stroke is $1$.`,
          t`$12$–$13$: $5$; $13$–$14$: $5 + 5 + 4 = 14$; $15$–$16$: $4$.`,
          t`The frequencies add up to $N = 35$, so $14$–$15$ has $35 - (5 + 14 + 4)$ $= 35 - 23 = 12$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q4(i)" },
      stem: t`The maximum temperatures (in °C) of a city on $12$ days are: $29.2$, $30.0$, $32.0$, $30.5$, $28.5$, $31.4$, $33.5$, $30.0$, $34.2$, $31.0$, $32.9$, $35.0$. They are grouped in the classes $28$–$30$, $30$–$32$, $32$–$34$, $34$–$36$. What is the frequency of the class $30$–$32$?`,
      verify: { kind: "value", inputs: { obs: "(146/5, 30, 32, 61/2, 57/2, 157/5, 67/2, 30, 171/5, 31, 329/10, 35)", a: "30", b: "32" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C03-M2", value: "6" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C03-M3", value: "3" },
        { key: "C", text: t`$5$`, correct: true, value: "5" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M1", value: "4" },
      ],
      solution: {
        steps: [
          t`The classes are exclusive: $30$–$32$ holds $30$ but not $32$.`,
          t`In $30$–$32$: $30.0$, $30.5$, $31.4$, $30.0$, $31.0$.`,
          t`$32.0$ is tallied in $32$–$34$. So the frequency of $30$–$32$ is $5$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.3 Q5" },
      stem: t`The students of 'Harit Sena' recorded how many trees each of them planted. Their tally is below. How many students are there in all? $$\begin{array}{c|c} \text{Trees planted} & \text{Tally marks} \\ \hline 3 & \cancel{||||}\;\cancel{||||} \\ 4 & \cancel{||||}\;\cancel{||||}\;| \\ 5 & \cancel{||||}\;\cancel{||||}\;| \\ 6 & \cancel{||||}\;|| \\ 7 & \cancel{||||}\;| \end{array}$$`,
      verify: { kind: "value", inputs: { rows: "((2, 0), (2, 1), (2, 1), (1, 2), (1, 1))" }, params: { kind: "total" } },
      options: [
        { key: "A", text: t`$37$`, correct: false, misconceptionId: "C03-M4", value: "37" },
        { key: "B", text: t`$13$`, correct: false, misconceptionId: "C03-M5", value: "13" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C03-M7", value: "5" },
        { key: "D", text: t`$45$`, correct: true, value: "45" },
      ],
      solution: {
        steps: [
          t`Each crossed group stands for $5$, each single stroke for $1$.`,
          t`The frequencies of $3$, $4$, $5$, $6$, $7$ trees are $10$, $11$, $11$, $7$, $6$.`,
          t`$N = 10 + 11 + 11 + 7 + 6 = 45$, so there are $45$ students.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Frequency SolvedEx.1" },
      stem: t`The observations $6$, $10$, $10.5$, $11$, $15.5$, $19$, $20$, $12$, $13$ are tallied into the classes $5$–$10$, $10$–$15$, $15$–$20$, $20$–$25$. What is the sum of the frequencies in the table?`,
      verify: { kind: "value", inputs: { obs: "(6, 10, 21/2, 11, 31/2, 19, 20, 12, 13)", lo: "5", h: "5", k: "4" }, params: { kind: "n_obs" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C03-M3", value: "7" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C03-M7", value: "4" },
        { key: "C", text: t`$9$`, correct: true, value: "9" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C03-M2", value: "11" },
      ],
      solution: {
        steps: [
          t`Each observation is tallied once: $10$ in $10$–$15$, and $20$ in $20$–$25$.`,
          t`$5$–$10$: $1$; $10$–$15$: $5$; $15$–$20$: $2$; $20$–$25$: $1$.`,
          t`Sum $= 1 + 5 + 2 + 1 = 9$, the number of observations.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.3 Q4" },
      stem: t`The ages (in years) of $12$ children are: $12.5$, $13$, $14$, $13.5$, $15$, $13$, $12$, $14$, $14.5$, $13.5$, $15.5$, $14$. They are grouped in the classes $12$–$13$, $13$–$14$, $14$–$15$, $15$–$16$. What is the frequency of the class $13$–$14$?`,
      verify: { kind: "value", inputs: { obs: "(25/2, 13, 14, 27/2, 15, 13, 12, 14, 29/2, 27/2, 31/2, 14)", a: "13", b: "14" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C03-M1", value: "5" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C03-M2", value: "7" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C03-M3", value: "2" },
      ],
      solution: {
        steps: [
          t`The class $13$–$14$ holds $13$ but not $14$; each $14$ goes in $14$–$15$.`,
          t`In $13$–$14$: $13$, $13.5$, $13$, $13.5$.`,
          t`So the frequency of $13$–$14$ is $4$.`,
        ],
      },
    },
  ],
};
