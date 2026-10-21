import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`A boat goes at $10$ km/hr in still water, and the river flows at $2$ km/hr. Does a trip of $24$ km upstream and $24$ km back take as long as $48$ km on a still lake?`,
    reveal: t`No. Upstream the boat makes $8$ km/hr, so $24$ km takes $3$ hours. Downstream it makes $12$ km/hr, so the way back takes $2$ hours. That is $5$ hours, but $48 \div 10 = 4.8$ hours on the lake.`,
  },
  explanation: {
    intuition: [
      t`A boat has its own speed in **still water**, water that does not flow.`,
      t`A river's **current** (the stream) carries everything in it along at its own speed.`,
      t`Going **upstream**, against the current, the boat is slowed down by the current's speed.`,
      t`Going **downstream**, with the current, the boat is speeded up by the same amount.`,
      t`Time $=$ distance $\div$ speed, so each trip gives a fraction with the speed below.`,
      t`People moving towards or after each other work the same way: their speeds add or subtract.`,
    ],
    formal: [
      {
        title: "Upstream and downstream speeds",
        points: [
          t`Let the speed of the boat in still water be $x$ km/hr.`,
          t`Let the speed of the stream, the water current, be $y$ km/hr.`,
          t`Upstream the current pushes against the boat, so its speed is $(x - y)$ km/hr.`,
          t`Downstream the current carries it along, so its speed is $(x + y)$ km/hr.`,
          t`For example, $x = 9$ and $y = 3$ give $6$ km/hr upstream and $12$ km/hr downstream.`,
        ],
      },
      {
        title: "Writing the time equations",
        points: [
          t`Distance $=$ speed $\times$ time, so time $=$ distance $\div$ speed.`,
          t`So $20$ km upstream takes $\frac{20}{x - y}$ hours.`,
          t`And $30$ km downstream takes $\frac{30}{x + y}$ hours.`,
          t`If the two trips take $7$ hours in all, then $\frac{20}{x - y} + \frac{30}{x + y}$ $= 7$.`,
          t`A second trip gives a second equation of the same kind.`,
          t`Every time must be in hours: $40$ minutes is $\frac{40}{60} = \frac{2}{3}$ hour, not $0.40$ hour.`,
        ],
      },
      {
        title: "Make the pair linear",
        points: [
          t`Put $\frac{1}{x - y} = m$ and $\frac{1}{x + y} = n$.`,
          t`Then $\frac{20}{x - y} + \frac{30}{x + y}$ $= 7$ becomes $20m + 30n = 7$.`,
          t`Solve the two linear equations in $m$ and $n$ by elimination.`,
          t`Then go back: $m = \frac{1}{5}$ means $\frac{1}{x - y} = \frac{1}{5}$, so $x - y = 5$.`,
          t`In the same way, $n = \frac{1}{13}$ means $x + y = 13$.`,
        ],
      },
      {
        title: "Back to x and y",
        points: [
          t`Now there are two easy equations: $x - y = 5$ and $x + y = 13$.`,
          t`Add them: $2x = 18$, so $x = 9$.`,
          t`Subtract the first from the second: $2y = 8$, so $y = 4$.`,
          t`Don't stop at $2x$ or $2y$: divide by $2$.`,
          t`The speed in still water is $x = 9$, not the downstream speed $x + y = 13$.`,
          t`Answer only the speed asked: $x$ for the boat, $y$ for the stream.`,
        ],
      },
      {
        title: "Journeys in two parts",
        points: [
          t`Out of $600$ km, say $x$ km is by bus and the rest, $(600 - x)$ km, by train.`,
          t`At $40$ km/hr the bus takes $\frac{x}{40}$ hours; at $60$ km/hr the train takes $\frac{600 - x}{60}$ hours.`,
          t`If the journey takes $12$ hours: $\frac{x}{40} + \frac{600 - x}{60}$ $= 12$.`,
          t`Multiply by $120$: $3x + 1200 - 2x$ $= 1440$, so $x = 240$ km by bus.`,
          t`If you name the two times as unknowns instead, finish with distance $=$ speed $\times$ time.`,
        ],
      },
      {
        title: "Meeting and catching up",
        points: [
          t`Two riders start $60$ km apart, at $x$ and $y$ km/hr, with $x$ the faster.`,
          t`Riding towards each other, the gap between them closes at $(x + y)$ km/hr.`,
          t`Riding the same way, the faster one gains $(x - y)$ km/hr.`,
          t`If they meet in $1$ hour, then $(x + y) \times 1 = 60$, so $x + y = 60$.`,
          t`If the faster catches up in $6$ hours, then $(x - y) \times 6 = 60$, so $x - y = 10$.`,
          t`So $2x = 70$: $x = 35$ and $y = 25$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A boat takes $9$ hours to go $24$ km upstream and $70$ km downstream. It takes $8$ hours to go $30$ km upstream and $42$ km downstream. Find the speed of the boat in still water and the speed of the stream.`,
      steps: [
        t`Let the boat's speed in still water be $x$ km/hr and the stream's $y$ km/hr. Time $=$ distance $\div$ speed gives $\frac{24}{x - y} + \frac{70}{x + y}$ $= 9$ and $\frac{30}{x - y} + \frac{42}{x + y}$ $= 8$.`,
        t`Put $\frac{1}{x - y} = m$ and $\frac{1}{x + y} = n$: $24m + 70n = 9$ and $30m + 42n = 8$.`,
        t`Multiply the first by $5$ and the second by $4$: $120m + 350n = 45$ and $120m + 168n = 32$. Subtract: $182n = 13$, so $n = \frac{1}{14}$.`,
        t`Then $24m = 9 - 5 = 4$, so $m = \frac{1}{6}$. So $x - y = 6$ and $x + y = 14$.`,
        t`Add: $2x = 20$, so $x = 10$. Subtract: $2y = 8$, so $y = 4$.`,
      ],
      answer: t`The boat goes at $10$ km/hr in still water, and the stream flows at $4$ km/hr.`,
    },
    visualSpec: t`A river with a slider for the current's speed, showing the boat's upstream and downstream speeds and the two trip times change together.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Solves for m = 1/(x - y) and n = 1/(x + y), then uses m and n themselves as x - y and x + y",
      remediation: t`$m$ and $n$ are the reciprocals of the two speeds. If $m = \frac{1}{5}$, then $x - y = 5$: turn $m$ and $n$ upside down before finding $x$ and $y$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C09-M2",
      mistake: "Adds or subtracts x - y and x + y and stops at 2x or 2y, forgetting to divide by 2",
      remediation: t`Adding $x - y$ and $x + y$ gives $2x$, and subtracting gives $2y$. Divide by $2$ to get $x$ or $y$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: "Takes the speed of the boat in still water to be its downstream speed x + y",
      remediation: t`Downstream the current adds its own speed, so $x + y$ is more than the boat's speed. The speed in still water is $x$ alone: find it from $x - y$ and $x + y$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Gives the other unknown of the pair instead of the one asked: the boat's speed for the stream's, the plane's distance for the bus's",
      remediation: "Two unknowns are found, but only one is asked for. Reread the question and give the quantity it names.",
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M5",
      mistake: "Reads h hours m minutes as the decimal h.m hours, e.g. 4 hours 30 minutes as 4.30 hours",
      remediation: t`An hour has $60$ minutes, not $100$. So $30$ minutes $= \frac{30}{60} = \frac{1}{2}$ hour, and $4$ hours $30$ minutes is $4.5$ hours.`,
      fallback: { kind: "ext", topic: "converting minutes to hours" },
    },
    {
      id: "C09-M6",
      mistake: "Names the bus and plane times as the unknowns, then gives the bus time as the distance asked",
      remediation: t`The time by bus is not the distance by bus. Finish with distance $=$ speed $\times$ time.`,
      fallback: { kind: "concept", id: "C08" },
    },
  ],
  engineNotes: [
    "C09-M1 and C09-M3 have models only for boat items that ask the speed in still water (for the stream, C09-M1 gives a negative number).",
    "C09-M2 needs a pair x - y, x + y (boat or meeting items); C09-M6 is for two-part journeys only.",
    "C09-M5 needs a time given in hours and minutes; with whole hours it gives the key, so its model refuses.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2018/Q5(i)" },
      stem: t`A boat takes $10$ hours to travel $30$ km upstream and $44$ km downstream. It takes $13$ hours to travel $40$ km upstream and $55$ km downstream. What is the speed of the boat in still water, in km/hr?`,
      verify: { kind: "value", inputs: { a: "30", b: "44", h1: "10", n1: "0", c: "40", d: "55", h2: "13", n2: "0" }, params: { kind: "boat", ask: "x" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C09-M2", value: "16" },
        { key: "B", text: t`$11$`, correct: false, misconceptionId: "C09-M3", value: "11" },
        { key: "C", text: t`$8$`, correct: true, value: "8" },
        { key: "D", text: t`$\frac{8}{55}$`, correct: false, misconceptionId: "C09-M1", value: "8/55" },
      ],
      solution: {
        steps: [
          t`Let the boat's speed be $x$ km/hr and the stream's $y$ km/hr. Put $\frac{1}{x - y} = m$ and $\frac{1}{x + y} = n$: $30m + 44n = 10$ and $40m + 55n = 13$.`,
          t`Multiply by $4$ and $3$: $120m + 176n = 40$ and $120m + 165n = 39$. Subtract: $11n = 1$, so $n = \frac{1}{11}$.`,
          t`Then $30m = 10 - 4 = 6$, so $m = \frac{1}{5}$. So $x - y = 5$ and $x + y = 11$.`,
          t`Add: $2x = 16$, so the boat's speed in still water is $x = 8$ km/hr.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Application of Simultaneous equations SolvedEx.3" },
      stem: t`A boat travels $16$ km upstream and $24$ km downstream in $5$ hours $20$ minutes. The same boat travels $36$ km upstream and $48$ km downstream in $11$ hours $40$ minutes. What is the speed of the water current, in km/hr?`,
      verify: { kind: "value", inputs: { a: "16", b: "24", h1: "5", n1: "20", c: "36", d: "48", h2: "11", n2: "40" }, params: { kind: "boat", ask: "y" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`$14$`, correct: false, misconceptionId: "C09-M2", value: "14" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C09-M4", value: "11" },
        { key: "D", text: t`$8$`, correct: false, misconceptionId: "C09-M5", value: "8" },
      ],
      solution: {
        steps: [
          t`In hours: $5$ h $20$ min $= \frac{16}{3}$ h and $11$ h $40$ min $= \frac{35}{3}$ h.`,
          t`With $\frac{1}{x - y} = m$ and $\frac{1}{x + y} = n$: $16m + 24n = \frac{16}{3}$ and $36m + 48n = \frac{35}{3}$.`,
          t`Double the first: $32m + 48n = \frac{32}{3}$. Subtract it from the second: $4m = 1$, so $m = \frac{1}{4}$. Then $24n = \frac{16}{3} - 4$ $= \frac{4}{3}$, so $n = \frac{1}{18}$.`,
          t`So $x - y = 4$ and $x + y = 18$. Subtract: $2y = 14$, so the current's speed is $y = 7$ km/hr.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.5 Q.6" },
      stem: t`Out of $975$ km, Vishal travelled some distance by bus and the rest by aeroplane. The bus travels at $50$ km/hr and the aeroplane at $550$ km/hr. The whole journey takes $4$ hours $30$ minutes. How many km did Vishal travel by bus?`,
      verify: { kind: "value", inputs: { D: "975", s1: "50", s2: "550", h: "4", n: "30" }, params: { kind: "bus" } },
      options: [
        { key: "A", text: t`$825$`, correct: false, misconceptionId: "C09-M4", value: "825" },
        { key: "B", text: t`$139$`, correct: false, misconceptionId: "C09-M5", value: "139" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C09-M6", value: "3" },
        { key: "D", text: t`$150$`, correct: true, value: "150" },
      ],
      solution: {
        steps: [
          t`Let the distance by bus be $x$ km; the aeroplane covers $(975 - x)$ km. The time is $4$ h $30$ min $= \frac{9}{2}$ h.`,
          t`Time $=$ distance $\div$ speed: $\frac{x}{50} + \frac{975 - x}{550}$ $= \frac{9}{2}$.`,
          t`Multiply by $550$: $11x + 975 - x$ $= 2475$, so $10x = 1500$.`,
          t`So Vishal travelled $x = 150$ km by bus.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/PS1 Q.7(6)" },
      stem: t`Places A and B are $30$ km apart on a straight road. Hamid starts from A towards B on a bike, and at the same time Joseph starts from B towards A. They meet after $20$ minutes. If Joseph had instead ridden away from A, Hamid would have caught him after $3$ hours. What is Joseph's speed, in km/hr?`,
      verify: { kind: "value", inputs: { D: "30", h1: "0", n1: "20", h2: "3", n2: "0" }, params: { kind: "meet", ask: "y" } },
      options: [
        { key: "A", text: t`$40$`, correct: true, value: "40" },
        { key: "B", text: t`$80$`, correct: false, misconceptionId: "C09-M2", value: "80" },
        { key: "C", text: t`$50$`, correct: false, misconceptionId: "C09-M4", value: "50" },
        { key: "D", text: t`$70$`, correct: false, misconceptionId: "C09-M5", value: "70" },
      ],
      solution: {
        steps: [
          t`Let Hamid's speed be $x$ km/hr and Joseph's $y$ km/hr. $20$ minutes $= \frac{1}{3}$ hour.`,
          t`Towards each other the gap closes at $(x + y)$ km/hr: $(x + y) \times \frac{1}{3} = 30$, so $x + y = 90$.`,
          t`The same way, Hamid gains $(x - y)$ km/hr: $(x - y) \times 3 = 30$, so $x - y = 10$.`,
          t`Subtract: $2y = 80$, so Joseph's speed is $y = 40$ km/hr.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2018/Q5(i)" },
      stem: t`A boat takes $8$ hours to travel $12$ km upstream and $44$ km downstream. It takes $11$ hours to travel $18$ km upstream and $55$ km downstream. What is the speed of the boat in still water, in km/hr?`,
      verify: { kind: "value", inputs: { a: "12", b: "44", h1: "8", n1: "0", c: "18", d: "55", h2: "11", n2: "0" }, params: { kind: "boat", ask: "x" } },
      options: [
        { key: "A", text: t`$11$`, correct: false, misconceptionId: "C09-M3", value: "11" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C09-M4", value: "4" },
        { key: "C", text: t`$7$`, correct: true, value: "7" },
        { key: "D", text: t`$\frac{7}{33}$`, correct: false, misconceptionId: "C09-M1", value: "7/33" },
      ],
      solution: {
        steps: [
          t`With $\frac{1}{x - y} = m$ and $\frac{1}{x + y} = n$: $12m + 44n = 8$ and $18m + 55n = 11$.`,
          t`Multiply by $3$ and $2$: $36m + 132n = 24$ and $36m + 110n = 22$. Subtract: $22n = 2$, so $n = \frac{1}{11}$.`,
          t`Then $12m = 8 - 4 = 4$, so $m = \frac{1}{3}$. So $x - y = 3$ and $x + y = 11$.`,
          t`Add: $2x = 14$, so the boat's speed in still water is $x = 7$ km/hr.`,
        ],
      },
    },
  ],
};
