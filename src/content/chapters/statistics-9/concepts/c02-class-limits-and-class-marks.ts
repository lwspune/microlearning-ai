import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Heights are grouped in the classes $140$–$145$ and $145$–$150$ cm. Riya is exactly $145$ cm tall. Which class is she counted in, and which single number stands for that class?`,
    reveal: t`She goes in $145$–$150$: an upper limit belongs to the next class. The class is represented by its middle, $\dfrac{145 + 150}{2} = 147.5$, its **class mark**.`,
  },
  explanation: {
    intuition: [
      t`When there are many observations, we group them into ranges called **classes**.`,
      t`A class such as $20$–$25$ holds the observations from $20$ up to $25$.`,
      t`The two end values of a class are its **class limits**.`,
      t`The size of a class, upper limit minus lower limit, is its **class width**.`,
      t`The middle value of a class is its **class mark**; it stands for the whole class.`,
      t`For $20$–$25$: limits $20$ and $25$, width $5$, class mark $22.5$.`,
    ],
    formal: [
      {
        title: "Class limits",
        points: [
          t`In the class $60$–$70$, the smaller end, $60$, is the **lower class limit**.`,
          t`The larger end, $70$, is the **upper class limit**.`,
          t`The lower limit is always written first.`,
        ],
      },
      {
        title: "Class width",
        points: [
          t`Class width $=$ upper class limit $-$ lower class limit.`,
          t`For $60$–$70$, the class width is $70 - 60 = 10$.`,
          t`It is a difference of limits, not a count of whole numbers.`,
          t`In a table such as $60$–$70$, $70$–$80$, $80$–$90$, all classes have width $10$.`,
        ],
      },
      {
        title: "Class mark",
        points: [
          t`Class mark $= \dfrac{\text{lower limit} + \text{upper limit}}{2}$.`,
          t`Add the two limits, then halve the sum.`,
          t`For $60$–$70$: $\dfrac{60 + 70}{2} = \dfrac{130}{2} = 65$.`,
          t`The class mark lies exactly in the middle of the class.`,
        ],
      },
      {
        title: "A class from its mark",
        points: [
          t`The class mark is the middle, so the class reaches half the width on each side.`,
          t`Lower limit $=$ class mark $-$ half the class width.`,
          t`Upper limit $=$ class mark $+$ half the class width.`,
          t`Class mark $65$, width $10$: half width $= 5$, so the class is $60$–$70$.`,
        ],
      },
      {
        title: "Exclusive classes",
        points: [
          t`In **exclusive** classes like $0$–$5$, $5$–$10$, $10$–$15$, each upper limit is the next lower limit.`,
          t`An observation equal to an upper limit is **not** in that class.`,
          t`It goes in the next class, where it is the lower limit.`,
          t`So $5$ goes in $5$–$10$, never in $0$–$5$, and never in both.`,
        ],
      },
      {
        title: "Inclusive classes",
        points: [
          t`In **inclusive** classes like $1$–$5$, $6$–$10$, $11$–$15$, the classes do not share a limit.`,
          t`Here both limits belong to the class.`,
          t`So $5$ goes in $1$–$5$ and $6$ goes in $6$–$10$.`,
          t`The class mark is found the same way: for $6$–$10$ it is $\dfrac{6 + 10}{2} = 8$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The class mark of a class is $17$ and its class width is $4$. Find the class.`,
      steps: [
        t`The class mark is the middle of the class, so the class reaches half the width on each side.`,
        t`Half the class width $= \dfrac{4}{2} = 2$.`,
        t`Lower class limit $= 17 - 2 = 15$; upper class limit $= 17 + 2 = 19$.`,
        t`Check: $\dfrac{15 + 19}{2} = 17$ and $19 - 15 = 4$.`,
      ],
      answer: t`The class is $15$–$19$.`,
    },
    visualSpec: t`A number line with a class drawn as a bar; dragging its ends shows the limits, the width as the bar's length and the class mark as a dot that stays at the middle.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Finds the class mark as half the difference of the limits, $\dfrac{\text{upper} - \text{lower}}{2}$.`,
      remediation: t`The class mark is the middle of the class: **add** the two limits, then halve. $\dfrac{\text{lower} + \text{upper}}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Forgets to halve: takes the class mark as lower + upper, or puts a whole class width on each side of the mark.",
      remediation: t`The class mark is the **average** of the limits, so divide their sum by $2$. Going back, the class reaches only **half** the width on each side of the mark.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Counts both limits as inside an exclusive class: width $=$ upper $-$ lower $+ 1$, and a value on a limit is in both classes.`,
      remediation: t`In exclusive classes a class holds its lower limit but not its upper limit. Its width is just upper $-$ lower, and each observation goes in exactly one class.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Swaps class mark and class width: gives the width when asked for the mark, and the mark when asked for the width.",
      remediation: t`Class width is the **difference** of the limits, upper $-$ lower. Class mark is the **middle**, $\dfrac{\text{lower} + \text{upper}}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Puts an observation equal to an upper limit in the class it ends.",
      remediation: "In exclusive classes, an observation equal to an upper limit goes in the **next** class, where it is the lower limit.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Counts neither limit as inside a class: width $=$ upper $-$ lower $- 1$, and a value on a limit belongs to no class.`,
      remediation: t`Every observation belongs to exactly one class. In exclusive classes the lower limit belongs to the class, and the width is upper $-$ lower.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.3 Q2" },
      stem: t`What is the class mark of the class $35$–$40$?`,
      verify: { kind: "value", inputs: { a: "35", b: "40" }, params: { kind: "mark" } },
      options: [
        { key: "A", text: t`$37.5$`, correct: true, value: "75/2" },
        { key: "B", text: t`$2.5$`, correct: false, misconceptionId: "C02-M1", value: "5/2" },
        { key: "C", text: t`$75$`, correct: false, misconceptionId: "C02-M2", value: "75" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C02-M4", value: "5" },
      ],
      solution: {
        steps: [
          t`Class mark $= \dfrac{\text{lower limit} + \text{upper limit}}{2}$.`,
          t`$\dfrac{35 + 40}{2} = \dfrac{75}{2} = 37.5$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.3 Q3" },
      stem: t`The class mark of a class is $10$ and its class width is $6$. Which is the class?`,
      verify: { kind: "value", inputs: { m: "10", w: "6" }, params: { kind: "class" } },
      options: [
        { key: "A", text: t`$4$–$16$`, correct: false, misconceptionId: "C02-M2", value: "(4, 16)" },
        { key: "B", text: t`$7.5$–$12.5$`, correct: false, misconceptionId: "C02-M3", value: "(15/2, 25/2)" },
        { key: "C", text: t`$1$–$11$`, correct: false, misconceptionId: "C02-M4", value: "(1, 11)" },
        { key: "D", text: t`$7$–$13$`, correct: true, value: "(7, 13)" },
      ],
      solution: {
        steps: [
          t`The class reaches half the width on each side of the class mark.`,
          t`Half the class width $= \dfrac{6}{2} = 3$.`,
          t`Lower limit $= 10 - 3 = 7$; upper limit $= 10 + 3 = 13$.`,
          t`The class is $7$–$13$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(iv)" },
      stem: t`The classes are $0$–$10$, $10$–$20$, $20$–$30$, … In which class should the observation $10$ be included?`,
      verify: { kind: "value", inputs: { lo: "0", h: "10", x: "10" }, params: { kind: "boundary" } },
      options: [
        { key: "A", text: t`In neither class`, correct: false, misconceptionId: "C02-M6", value: "neither" },
        { key: "B", text: t`$10$–$20$`, correct: true, value: "(10, 20)" },
        { key: "C", text: t`$0$–$10$`, correct: false, misconceptionId: "C02-M5", value: "(0, 10)" },
        { key: "D", text: t`In both $0$–$10$ and $10$–$20$`, correct: false, misconceptionId: "C02-M3", value: "both" },
      ],
      solution: {
        steps: [
          t`These are exclusive classes: the upper limit of one is the lower limit of the next.`,
          t`$10$ is the upper limit of $0$–$10$, so it is not in that class.`,
          t`It is the lower limit of $10$–$20$, so $10$ is included in $10$–$20$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.3 Q1" },
      stem: t`The classes in a table are $20$–$25$, $25$–$30$, $30$–$35$. What is the class width?`,
      verify: { kind: "value", inputs: { a: "20", b: "25" }, params: { kind: "width" } },
      options: [
        { key: "A", text: t`$22.5$`, correct: false, misconceptionId: "C02-M4", value: "45/2" },
        { key: "B", text: t`$5$`, correct: true, value: "5" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C02-M3", value: "6" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C02-M6", value: "4" },
      ],
      solution: {
        steps: [
          t`Class width $=$ upper class limit $-$ lower class limit.`,
          t`For $20$–$25$: $25 - 20 = 5$. Every class here has width $5$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(iii)" },
      stem: t`What is the class mark of the class $25$–$35$?`,
      verify: { kind: "value", inputs: { a: "25", b: "35" }, params: { kind: "mark" } },
      options: [
        { key: "A", text: t`$60$`, correct: false, misconceptionId: "C02-M2", value: "60" },
        { key: "B", text: t`$30$`, correct: true, value: "30" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C02-M4", value: "10" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C02-M1", value: "5" },
      ],
      solution: {
        steps: [
          t`Class mark $= \dfrac{\text{lower limit} + \text{upper limit}}{2}$.`,
          t`$\dfrac{25 + 35}{2} = \dfrac{60}{2} = 30$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(iv)" },
      stem: t`The marks $50$, $55$, $60$, $60$, $70$ are grouped in the classes $40$–$50$, $50$–$60$, $60$–$70$, $70$–$80$. How many of these marks fall in the class $50$–$60$?`,
      verify: { kind: "value", inputs: { a: "50", b: "60", obs: "(50, 55, 60, 60, 70)" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C02-M5", value: "3" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C02-M3", value: "4" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C02-M6", value: "1" },
      ],
      solution: {
        steps: [
          t`The class $50$–$60$ holds $50$ but not $60$: $60$ goes in $60$–$70$.`,
          t`Of the marks, only $50$ and $55$ fall in $50$–$60$.`,
          t`So $2$ marks fall in the class $50$–$60$.`,
        ],
      },
    },
  ],
};
