import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Your mean score in $4$ tests is $15$. You score $25$ in the fifth test. Is your new mean $\dfrac{15 + 25}{2} = 20$?`,
    reveal: t`No. The $4$ tests give a total of $4 \times 15 = 60$. The new total is $60 + 25 = 85$, so the new mean is $\dfrac{85}{5} = 17$.`,
  },
  explanation: {
    intuition: [
      t`The **mean** is the sum of the observations divided by their number.`,
      t`Turn it round: sum $=$ mean $\times$ number of observations.`,
      t`When data changes, the sum changes in a simple way; the mean does not.`,
      t`So first find the sum, then change the sum, then divide again.`,
      t`Always divide by the number of observations **after** the change.`,
    ],
    formal: [
      {
        title: "Sum from the mean",
        points: [
          t`Mean $=$ sum of observations $\div$ number of observations.`,
          t`So sum of observations $=$ mean $\times$ number of observations.`,
          t`If $10$ numbers have mean $7$, their sum is $10 \times 7 = 70$.`,
          t`Every problem on the mean starts from this sum.`,
        ],
      },
      {
        title: "Correcting a wrong value",
        points: [
          t`The mean of $20$ observations was $30$, but $45$ was recorded as $54$.`,
          t`Wrong sum $= 20 \times 30 = 600$.`,
          t`Take out the wrong value and put in the right one: $600 - 54 + 45 = 591$.`,
          t`The number of observations is still $20$.`,
          t`Correct mean $= \dfrac{591}{20} = 29.55$.`,
        ],
      },
      {
        title: "Adding an observation",
        points: [
          t`The mean of $6$ numbers is $12$; one number is added and the mean rises by $2$.`,
          t`Old sum $= 6 \times 12 = 72$.`,
          t`Now there are $7$ numbers with mean $14$, so the new sum $= 7 \times 14 = 98$.`,
          t`The number added $=$ new sum $-$ old sum $= 98 - 72 = 26$.`,
        ],
      },
      {
        title: "Removing an observation",
        points: [
          t`The mean of $8$ numbers is $20$; one is removed and the mean of the rest is $18$.`,
          t`Sum of all $8$ $= 8 \times 20 = 160$.`,
          t`Now $7$ numbers remain, so their sum $= 7 \times 18 = 126$.`,
          t`The number removed $= 160 - 126 = 34$.`,
        ],
      },
      {
        title: "Combined mean of two groups",
        points: [
          t`Group A: $10$ observations with mean $6$. Group B: $30$ observations with mean $10$.`,
          t`Sum for A $= 10 \times 6 = 60$; sum for B $= 30 \times 10 = 300$.`,
          t`Combined mean $= \dfrac{60 + 300}{10 + 30}$ $= \dfrac{360}{40} = 9$.`,
          t`It is not $\dfrac{6 + 10}{2} = 8$: group B is bigger, so it pulls the mean towards $10$.`,
          t`Only when the two groups are the same size is the combined mean the average of the two means.`,
        ],
      },
    ],
    worked: {
      prompt: t`The mean weight of $12$ boys is $40$ kg and the mean weight of $8$ girls is $35$ kg. Find the mean weight of all $20$ children.`,
      steps: [
        t`Total weight of the boys $= 12 \times 40 = 480$ kg.`,
        t`Total weight of the girls $= 8 \times 35 = 280$ kg.`,
        t`Total weight of all $20$ children $= 480 + 280 = 760$ kg.`,
        t`Mean weight $= \dfrac{760}{20} = 38$ kg.`,
        t`Check: $38$ is nearer $40$ than $35$, as there are more boys than girls.`,
      ],
      answer: t`The mean weight of all the children is $38$ kg.`,
    },
    visualSpec: t`Bars of equal height for the observations; dragging a bar up or down changes the total, and the mean line resettles at the total divided by the number of bars.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Averages the means as if every group counted equally: combined mean $= \dfrac{m_1 + m_2}{2}$, or a single added or removed value carries as much weight as all the others together.`,
      remediation: t`A mean depends on how many observations stand behind it. Turn each mean into a sum (mean $\times$ number), combine the sums, then divide by the total number.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M2",
      mistake: "Treats the mean as if it were the sum: adds or subtracts values straight onto the mean.",
      remediation: t`Values add to the **sum**, not to the mean. First find the sum $=$ mean $\times$ number, change the sum, then divide by the number of observations.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M3",
      mistake: "Forgets that the number of observations changes: works out the new sum with the old number.",
      remediation: "After adding one observation there is one more; after removing one there is one fewer. Multiply the new mean by the **new** number of observations.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Corrects the sum the wrong way round: adds the wrong value and subtracts the right one.",
      remediation: t`The wrong value is in the sum, so **subtract** it; the right value is missing, so **add** it. Correct sum $=$ wrong sum $-$ wrong value $+$ right value.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Pairs each group's mean with the other group's size.",
      remediation: t`Multiply each group's mean by the size of **that same** group: sum $= n_1 \bar{x}_1 + n_2 \bar{x}_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Stops at the total: gives the corrected or combined sum and never divides.",
      remediation: "The sum is only the middle step. The mean is that sum divided by the number of observations.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q7" },
      stem: t`The mean of $50$ observations was calculated as $80$. Later it was found that the observation $19$ had been recorded by mistake as $91$. What is the correct mean?`,
      verify: { kind: "value", inputs: { n: "50", a: "80", w: "91", r: "19" }, params: { kind: "correct" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C06-M2", value: "8" },
        { key: "B", text: t`$81.44$`, correct: false, misconceptionId: "C06-M4", value: "2036/25" },
        { key: "C", text: t`$3928$`, correct: false, misconceptionId: "C06-M6", value: "3928" },
        { key: "D", text: t`$78.56$`, correct: true, value: "1964/25" },
      ],
      solution: {
        steps: [
          t`Wrong sum $= 50 \times 80 = 4000$.`,
          t`Take out $91$ and put in $19$: correct sum $= 4000 - 91 + 19 = 3928$.`,
          t`Correct mean $= \dfrac{3928}{50} = 78.56$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q10" },
      stem: t`The mean of $5$ observations is $50$. One observation is removed, and the mean of the remaining observations becomes $45$. Which observation was removed?`,
      verify: { kind: "value", inputs: { n: "5", a: "50", b: "45" }, params: { kind: "remove" } },
      options: [
        { key: "A", text: t`$70$`, correct: true, value: "70" },
        { key: "B", text: t`$55$`, correct: false, misconceptionId: "C06-M1", value: "55" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C06-M2", value: "5" },
        { key: "D", text: t`$25$`, correct: false, misconceptionId: "C06-M3", value: "25" },
      ],
      solution: {
        steps: [
          t`Sum of the $5$ observations $= 5 \times 50 = 250$.`,
          t`$4$ observations remain, so their sum $= 4 \times 45 = 180$.`,
          t`The observation removed $= 250 - 180 = 70$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Ex 7.5 Q11" },
      stem: t`There are $40$ students in a class, of whom $15$ are boys. The mean of the boys' marks is $33$ and the mean of the girls' marks is $35$. What is the mean of the marks of all $40$ students?`,
      verify: { kind: "value", inputs: { n1: "15", m1: "33", n2: "25", m2: "35" }, params: { kind: "combine" } },
      options: [
        { key: "A", text: t`$34.25$`, correct: true, value: "137/4" },
        { key: "B", text: t`$34$`, correct: false, misconceptionId: "C06-M1", value: "34" },
        { key: "C", text: t`$33.75$`, correct: false, misconceptionId: "C06-M5", value: "135/4" },
        { key: "D", text: t`$1370$`, correct: false, misconceptionId: "C06-M6", value: "1370" },
      ],
      solution: {
        steps: [
          t`There are $40 - 15 = 25$ girls.`,
          t`Boys' total $= 15 \times 33 = 495$; girls' total $= 25 \times 35 = 875$.`,
          t`Mean of all students $= \dfrac{495 + 875}{40}$ $= \dfrac{1370}{40} = 34.25$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q3" },
      stem: t`The mean of nine numbers is $77$. One more number is added, and the mean increases by $5$. Which number was added?`,
      verify: { kind: "value", inputs: { n: "9", a: "77", d: "5" }, params: { kind: "add" } },
      options: [
        { key: "A", text: t`$45$`, correct: false, misconceptionId: "C06-M3", value: "45" },
        { key: "B", text: t`$127$`, correct: true, value: "127" },
        { key: "C", text: t`$87$`, correct: false, misconceptionId: "C06-M1", value: "87" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C06-M2", value: "5" },
      ],
      solution: {
        steps: [
          t`Sum of the nine numbers $= 9 \times 77 = 693$.`,
          t`Now there are $10$ numbers with mean $77 + 5 = 82$, so the new sum $= 10 \times 82 = 820$.`,
          t`The number added $= 820 - 693 = 127$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q1(vii)" },
      stem: t`The mean of $100$ observations is $40$. The 9th observation is $30$. If it is replaced by $70$, keeping all other observations the same, what is the new mean?`,
      verify: { kind: "value", inputs: { n: "100", a: "40", w: "30", r: "70" }, params: { kind: "correct" } },
      options: [
        { key: "A", text: t`$40.4$`, correct: true, value: "202/5" },
        { key: "B", text: t`$80$`, correct: false, misconceptionId: "C06-M2", value: "80" },
        { key: "C", text: t`$39.6$`, correct: false, misconceptionId: "C06-M4", value: "198/5" },
        { key: "D", text: t`$4040$`, correct: false, misconceptionId: "C06-M6", value: "4040" },
      ],
      solution: {
        steps: [
          t`Sum of the $100$ observations $= 100 \times 40 = 4000$.`,
          t`Replace $30$ by $70$: new sum $= 4000 - 30 + 70 = 4040$.`,
          t`The number of observations is still $100$, so the new mean $= \dfrac{4040}{100} = 40.4$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/statistics-9/Prob Q2" },
      stem: t`The mean salary of $20$ workers is ₹ 10,250. When the office superintendent's salary is added, the mean increases by ₹ 750. What is the superintendent's salary, in rupees?`,
      verify: { kind: "value", inputs: { n: "20", a: "10250", d: "750" }, params: { kind: "add" } },
      options: [
        { key: "A", text: t`$15000$`, correct: false, misconceptionId: "C06-M3", value: "15000" },
        { key: "B", text: t`$750$`, correct: false, misconceptionId: "C06-M2", value: "750" },
        { key: "C", text: t`$26000$`, correct: true, value: "26000" },
        { key: "D", text: t`$11750$`, correct: false, misconceptionId: "C06-M1", value: "11750" },
      ],
      solution: {
        steps: [
          t`Total salary of the $20$ workers $= 20 \times 10250 = 205000$ rupees.`,
          t`With the superintendent there are $21$ people and the mean is $10250 + 750 = 11000$ rupees.`,
          t`New total $= 21 \times 11000 = 231000$ rupees.`,
          t`Superintendent's salary $= 231000 - 205000 = 26000$ rupees.`,
        ],
      },
    },
  ],
};
