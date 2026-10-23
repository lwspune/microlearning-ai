import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`A salary rises by the same amount every year. It is ₹ 5,000 after $2$ years and ₹ 5,600 after $5$ years. **What was it at the start?**`,
    reveal: t`The $3$ years between added ₹ 600, so the increment is ₹ 200 a year. At the start it was $5000 - 2 \times 200 = 4600$, that is ₹ 4,600. Each fact in the story was an equation.`,
  },
  explanation: {
    intuition: [
      t`A word problem hides two unknown numbers: call them $x$ and $y$.`,
      t`Each fact in the story becomes one equation in $x$ and $y$.`,
      t`Shapes: the angles of a triangle add to $180^\circ$; a rectangle's perimeter is $2(l + b)$.`,
      t`Money: savings $=$ income $-$ expense.`,
      t`Travel: distance $=$ speed $\times$ time.`,
      t`Solve the two equations, then give exactly the quantity the question asks for.`,
    ],
    formal: [
      {
        title: "Angles and sides",
        points: [
          t`Let $\angle B = x$ and $\angle C = y$ in $\triangle ABC$.`,
          t`If $\angle A = \angle B + \angle C$, then $\angle A = x + y$ too.`,
          t`All **three** angles add to $180^\circ$: $(x + y) + x + y = 180$.`,
          t`So $2(x + y) = 180$, which gives $x + y = 90$.`,
          t`$\angle B : \angle C = 2 : 3$ means $\frac{x}{y} = \frac{2}{3}$, so $3x = 2y$.`,
          t`A rectangle has four sides, so length $+$ breadth is half the perimeter.`,
        ],
      },
      {
        title: "Incomes, expenses and savings",
        points: [
          t`Incomes in the ratio $5 : 4$ are $5k$ and $4k$ for some number $k$.`,
          t`Expenses in the ratio $3 : 2$ are $3m$ and $2m$: a **new** letter $m$.`,
          t`The two ratios are different facts, so they need different multipliers.`,
          t`Savings $=$ income $-$ expense, so each saving gives one equation.`,
          t`If each saves ₹ 400: $5k - 3m = 400$ and $4k - 2m = 400$.`,
        ],
      },
      {
        title: "Salary with increments",
        points: [
          t`Let the original salary be $x$ and the yearly **increment** (rise) be $y$.`,
          t`After $3$ years there have been $3$ increments: salary $= x + 3y$.`,
          t`After $8$ years the salary is $x + 8y$.`,
          t`Subtracting, the rise from year $3$ to year $8$ is $5y$.`,
          t`So divide the rise by the years **between**, here $8 - 3 = 5$.`,
        ],
      },
      {
        title: "Journeys",
        points: [
          t`Let the faster car's speed be $x$ km/hr and the slower one's $y$ km/hr.`,
          t`Towards each other, the gap closes by $x + y$ km every hour.`,
          t`Same direction, the faster car gains $x - y$ km every hour.`,
          t`While chasing, the slower car moves on too, so the gap closes slowly.`,
          t`So if a $60$ km gap closes in $4$ hours: $4(x - y) = 60$.`,
          t`In each case, distance $=$ speed $\times$ time gives the equation.`,
        ],
      },
    ],
    worked: {
      prompt: t`A rope $300$ cm long is cut into two parts. Twice the smaller part equals half of the larger part. Find the larger part.`,
      steps: [
        t`Let the smaller part be $x$ cm and the larger part $y$ cm. The parts make the rope: $x + y = 300$ (I).`,
        t`Twice the smaller equals half the larger: $2x = \frac{y}{2}$. Multiply by $2$: $4x = y$, so $4x - y = 0$ (II).`,
        t`Add (I) and (II): the $y$ terms cancel, so $5x = 300$ and $x = 60$.`,
        t`Put $x = 60$ in (I): $60 + y = 300$, so $y = 300 - 60 = 240$.`,
        t`Check: $2 \times 60 = 120$ and half of $240$ is $120$, true.`,
      ],
      answer: t`The larger part is $240$ cm (and the smaller part is $60$ cm).`,
    },
    visualSpec: t`Two cars on a road: drag their speeds and choose the same or opposite direction; the gap between them shrinks at x + y or x - y km each hour.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Writing a total with only the parts the question names: angle B + angle C = 180 (forgetting angle A), or length + breadth = perimeter",
      remediation: t`Count every part of the whole: a triangle's **three** angles add to $180^\circ$, and a rectangle's perimeter is $2(l + b)$, so $l + b$ is half of it.`,
      fallback: { kind: "ext", topic: "angle sum of a triangle and perimeter of a rectangle (Std VII)" },
    },
    {
      id: "C07-M2",
      mistake: "Using the same multiplier k for the incomes and the expenses, as if both ratios scaled together",
      remediation: t`Two different ratios need two different multipliers: incomes $5k$ and $4k$, expenses $3m$ and $2m$. Then savings $=$ income $-$ expense gives two equations in $k$ and $m$.`,
      fallback: { kind: "ext", topic: "ratio and proportion (Std VIII)" },
    },
    {
      id: "C07-M3",
      mistake: "Finding the yearly increment by dividing the rise in salary by the later number of years, not by the years between the two salaries",
      remediation: t`The rise happened only in the years **between** the two salaries: subtract $x + 3y$ from $x + 8y$ to get $5y$, the rise over $5$ years.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M4",
      mistake: "Thinking that, when one car chases another, the faster car covers only the starting gap, forgetting that the slower car keeps moving",
      remediation: t`While chasing, the slower car moves on too, so the gap closes by $x - y$ km each hour: $4(x - y) = 60$, not $4x = 60$.`,
      fallback: { kind: "ext", topic: "speed, distance and time (Std VII)" },
    },
    {
      id: "C07-M5",
      mistake: "Solving the equations correctly but giving the other unknown, not the quantity the question asks for",
      remediation: "Before you answer, read the question again and say what each letter stands for. Give the quantity asked, with its unit.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M6",
      mistake: "Putting the found value back, then moving a known number across = without changing its sign",
      remediation: t`A number that crosses the $=$ sign changes its sign: $40 + y = 90$ gives $y = 90 - 40$, not $90 + 40$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    "Each item uses one story type (params.type) and asks for one fixed quantity; C07-M1 applies to triangle and rectangle items, C07-M2 to income, C07-M3 to salary, C07-M4 to journey.",
    "C07-M5 and C07-M6 follow the route in the solutions: the other unknown is found first, then put back.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.2 Q5" },
      stem: t`Sanjay gets a fixed monthly salary, with the same increment every year. After $4$ years his monthly salary was ₹ 4,500; after $10$ years it was ₹ 5,400. What was his original monthly salary, in rupees?`,
      verify: { kind: "value", inputs: { n1: "4", s1: "4500", n2: "10", s2: "5400" }, params: { type: "salary" } },
      options: [
        { key: "A", text: t`$150$`, correct: false, misconceptionId: "C07-M5", value: "150" },
        { key: "B", text: t`$5100$`, correct: false, misconceptionId: "C07-M6", value: "5100" },
        { key: "C", text: t`$3900$`, correct: true, value: "3900" },
        { key: "D", text: t`$4140$`, correct: false, misconceptionId: "C07-M3", value: "4140" },
      ],
      solution: {
        steps: [
          t`Let the original salary be ₹ $x$ and the yearly increment ₹ $y$: $x + 4y = 4500$ (I) and $x + 10y = 5400$ (II).`,
          t`Subtract (I) from (II): $6y = 900$, so $y = 150$.`,
          t`Put $y = 150$ in (I): $x + 600 = 4500$, so $x = 4500 - 600 = 3900$.`,
          t`His original salary was ₹ 3,900 (with an increment of ₹ 150 a year).`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.2 Q8" },
      stem: t`In $\triangle ABC$, $\angle A$ equals the sum of $\angle B$ and $\angle C$. Also $\angle B : \angle C = 4 : 5$. What is the measure of $\angle C$?`,
      verify: { kind: "value", inputs: { p: "4", q: "5" }, params: { type: "triangle" } },
      options: [
        { key: "A", text: t`$100^\circ$`, correct: false, misconceptionId: "C07-M1", value: "100" },
        { key: "B", text: t`$40^\circ$`, correct: false, misconceptionId: "C07-M5", value: "40" },
        { key: "C", text: t`$130^\circ$`, correct: false, misconceptionId: "C07-M6", value: "130" },
        { key: "D", text: t`$50^\circ$`, correct: true, value: "50" },
      ],
      solution: {
        steps: [
          t`Let $\angle B = x$ and $\angle C = y$, so $\angle A = x + y$. The three angles: $2(x + y) = 180$, so $x + y = 90$ (I).`,
          t`$x : y = 4 : 5$ gives $5x = 4y$, so $5x - 4y = 0$ (II).`,
          t`Multiply (I) by $4$ and add (II): $9x = 360$, so $x = 40$.`,
          t`Put $x = 40$ in (I): $y = 90 - 40 = 50$. So $\angle C = 50^\circ$ (and $\angle A = 90^\circ$).`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q7" },
      stem: t`The incomes of two persons are in the ratio $9 : 7$ and their expenses are in the ratio $4 : 3$. Each of them saves ₹ 200 a month. What is the second person's monthly expense, in rupees?`,
      verify: { kind: "value", inputs: { a: "9", b: "7", c: "4", d: "3", s: "200" }, params: { type: "income" } },
      options: [
        { key: "A", text: t`$1600$`, correct: false, misconceptionId: "C07-M6", value: "1600" },
        { key: "B", text: t`$1200$`, correct: true, value: "1200" },
        { key: "C", text: t`$150$`, correct: false, misconceptionId: "C07-M2", value: "150" },
        { key: "D", text: t`$1400$`, correct: false, misconceptionId: "C07-M5", value: "1400" },
      ],
      solution: {
        steps: [
          t`Incomes $9k$, $7k$; expenses $4m$, $3m$. Savings: $9k - 4m = 200$ (I) and $7k - 3m = 200$ (II).`,
          t`Multiply (I) by $3$ and (II) by $4$: $27k - 12m = 600$ and $28k - 12m = 800$.`,
          t`Subtract: $k = 200$. Put it in (II): $1400 - 3m = 200$, so $3m = 1400 - 200 = 1200$.`,
          t`The second person's expense is $3m$, that is ₹ 1,200.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q9" },
      stem: t`Places A and B are $70$ km apart on a road. One car starts from A and another from B at the same time. Travelling in the same direction, they meet after $7$ hours. Travelling towards each other, they meet after $1$ hour. What is the speed of the slower car, in km/hr?`,
      verify: { kind: "value", inputs: { D: "70", t1: "7", t2: "1" }, params: { type: "journey" } },
      options: [
        { key: "A", text: t`$30$`, correct: true, value: "30" },
        { key: "B", text: t`$60$`, correct: false, misconceptionId: "C07-M4", value: "60" },
        { key: "C", text: t`$40$`, correct: false, misconceptionId: "C07-M5", value: "40" },
        { key: "D", text: t`$110$`, correct: false, misconceptionId: "C07-M6", value: "110" },
      ],
      solution: {
        steps: [
          t`Let the speeds be $x$ and $y$ km/hr, $x > y$. Same direction: $7(x - y) = 70$, so $x - y = 10$ (I).`,
          t`Towards each other: $1 \times (x + y) = 70$, so $x + y = 70$ (II).`,
          t`Add (I) and (II): $2x = 80$, so $x = 40$.`,
          t`Put $x = 40$ in (II): $y = 70 - 40 = 30$. The slower car's speed is $30$ km/hr.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`The length of a rectangle is $6$ cm more than its breadth, and its perimeter is $56$ cm. What is its breadth, in cm?`,
      verify: { kind: "value", inputs: { P: "56", d: "6" }, params: { type: "rectangle" } },
      options: [
        { key: "A", text: t`$25$`, correct: false, misconceptionId: "C07-M1", value: "25" },
        { key: "B", text: t`$17$`, correct: false, misconceptionId: "C07-M5", value: "17" },
        { key: "C", text: t`$45$`, correct: false, misconceptionId: "C07-M6", value: "45" },
        { key: "D", text: t`$11$`, correct: true, value: "11" },
      ],
      solution: {
        steps: [
          t`Let the length be $x$ cm and the breadth $y$ cm. Perimeter: $2(x + y) = 56$, so $x + y = 28$ (I).`,
          t`Length is $6$ more than breadth: $x - y = 6$ (II).`,
          t`Add (I) and (II): $2x = 34$, so $x = 17$.`,
          t`Put $x = 17$ in (I): $y = 28 - 17 = 11$. The breadth is $11$ cm.`,
        ],
      },
    },
  ],
};
