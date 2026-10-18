import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A bakery makes cakes and pastries. A cake uses $3$ eggs and a pastry $1$; there are $30$ eggs. Profit is ₹$50$ per cake and ₹$20$ per pastry. **What are $x$ and $y$?**`,
    reveal: t`Name the decision variables first: $x$ = number of cakes, $y$ = number of pastries. Everything else is written in them: eggs give $3x + y \le 30$, and profit is $Z = 50x + 20y$.`,
  },
  explanation: {
    intuition: [
      t`Recall: a **linear programming problem** (LPP) asks for the best value of an expression in $x$ and $y$, under constraints.`,
      t`**Formulating** an LPP means turning a word problem into that maths, in three translations.`,
      t`First, the **decision variables**: what you choose, such as how many of each product to make.`,
      t`Second, the **objective**: what you make as large (**maximise**) or as small (**minimise**) as possible, written in those variables.`,
      t`Third, the **constraints**: one for each limited **resource** (eggs, hours, money) or requirement, every figure in the same unit.`,
      t`Then add $x, y \ge 0$, since you cannot make a negative number of anything.`,
    ],
    formal: [
      {
        title: "The resource table",
        points: [
          t`A **resource table** has one row per resource and one column per product.`,
          t`Product A is counted by $x$, so the figures in its column go with $x$; B's go with $y$.`,
          t`A last column holds each resource's limit.`,
          t`Say a row reads: A uses $a$, B uses $b$, limit $c$.`,
          t`That row becomes the constraint $ax + by \le c$ (or $\ge$).`,
          t`Each row becomes one constraint, read across.`,
        ],
      },
      {
        title: "Choosing the direction",
        points: [
          t`The **direction** of a constraint is its sign, $\le$ or $\ge$.`,
          t`"At most", "available" and "cannot exceed" set a ceiling on the total, so use $\le$.`,
          t`"At least" and "minimum requirement" set a floor under the total, so use $\ge$.`,
        ],
      },
      {
        title: "Units first",
        points: [
          t`Every figure in one row must be in the same unit.`,
          t`Convert before writing the constraint, e.g. $30$ min $= \dfrac12$ h.`,
          t`Then clear fractions: multiply both sides by the same positive number.`,
        ],
      },
      {
        title: "Objective and sign conditions",
        points: [
          t`The **objective function** $Z$ is the objective written in $x$ and $y$.`,
          t`With $p$ per unit of A and $q$ per unit of B, $Z = px + qy$.`,
          t`For a profit, maximise $Z = px + qy$.`,
          t`For a cost, minimise $Z = px + qy$.`,
          t`Always add the **sign conditions** $x \ge 0$ and $y \ge 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A workshop makes $x$ lamps and $y$ fans. A lamp needs $3$ hours of wiring and $20$ minutes of packing; a fan needs $2$ hours of wiring and $40$ minutes of packing. At most $24$ hours of wiring and $5$ hours of packing are available. Profit is ₹$120$ per lamp and ₹$150$ per fan. Formulate the LPP.`,
      steps: [
        t`Variables: $x$ = lamps, $y$ = fans, with $x, y \ge 0$.`,
        t`Wiring, all in hours: $3x + 2y \le 24$.`,
        t`Packing: $5$ h $= 300$ min, so $20x + 40y \le 300$. Divide by $20$: $x + 2y \le 15$.`,
        t`Profit is to be as large as possible: maximise $Z = 120x + 150y$.`,
      ],
      answer: t`Maximise $Z = 120x + 150y$ subject to $3x + 2y \le 24$, $x + 2y \le 15$, $x, y \ge 0$`,
    },
    visualSpec: t`A resource table where each row lights up and turns into its constraint as you tap it, with a unit switch that converts minutes to hours and redraws the coefficients.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Swapping the figures between the two products",
      remediation: t`$x$'s coefficient comes from product A's column and $y$'s from product B's. Lay the figures out in a table with one column per product, then read each row across.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: t`Using $\ge$ for 'at most' or $\le$ for 'at least'`,
      remediation: t`'At most', 'available' and 'cannot exceed' put a ceiling on the total, so use $\le$. 'At least' and 'minimum requirement' set a floor, so use $\ge$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Mixing units, such as hours with minutes",
      remediation: t`Convert everything to one unit before writing the constraint: $30$ min $= \dfrac12$ h, or $8$ h $= 480$ min. Then clear any fractions.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Maximising a cost or minimising a profit",
      remediation: "Profit is something you want more of, so maximise it. Cost is something you want less of, so minimise it.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Counting the items instead of what each one uses or earns",
      remediation: t`A limit on hours caps the total hours, not the number of items: if a chair takes $2$ hours and a table $3$, the time is $2x + 3y$, not $x + y$. The same goes for $Z$: multiply each amount by its profit or cost per unit.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C12-M1 (swapped figures) gives the key when both products have the same figure (a = b, or p = q); draw diagnosing items with different figures.",
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "authored" },
      stem: t`A carpenter makes $x$ chairs and $y$ tables. A chair takes $2$ hours of work and a table $3$ hours; $60$ hours are available. The time constraint is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "constraint", a: "2", b: "3", cap: "60", op: "<=" } },
      options: [
        { key: "A", text: t`$2x + 3y \le 60$`, correct: true, value: "-x/30 - y/20 + 1" },
        { key: "B", text: t`$3x + 2y \le 60$`, correct: false, misconceptionId: "C12-M1", value: "-x/20 - y/30 + 1" },
        { key: "C", text: t`$2x + 3y \ge 60$`, correct: false, misconceptionId: "C12-M2", value: "x/30 + y/20 - 1" },
        { key: "D", text: t`$x + y \le 60$`, correct: false, misconceptionId: "C12-M5", value: "-x/60 - y/60 + 1" },
      ],
      solution: {
        steps: [
          t`Chairs take $2$ hours each and tables $3$: total time $2x + 3y$ hours.`,
          t`Only $60$ hours are available, so the total is at most $60$.`,
          t`The constraint is $2x + 3y \le 60$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "authored" },
      stem: t`A diet uses $x$ kg of food A and $y$ kg of food B. Food A has $4$ units of vitamin C per kg and food B has $6$. The diet needs at least $24$ units. The vitamin C constraint is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "constraint", a: "4", b: "6", cap: "24", op: ">=" } },
      options: [
        { key: "A", text: t`$4x + 6y \le 24$`, correct: false, misconceptionId: "C12-M2", value: "-x/6 - y/4 + 1" },
        { key: "B", text: t`$4x + 6y \ge 24$`, correct: true, value: "x/6 + y/4 - 1" },
        { key: "C", text: t`$6x + 4y \ge 24$`, correct: false, misconceptionId: "C12-M1", value: "x/4 + y/6 - 1" },
        { key: "D", text: t`$x + y \ge 24$`, correct: false, misconceptionId: "C12-M5", value: "x/24 + y/24 - 1" },
      ],
      solution: {
        steps: [
          t`Food A gives $4$ units per kg and food B $6$: total vitamin C $4x + 6y$ units.`,
          t`The diet needs at least $24$ units, so use $\ge$.`,
          t`The constraint is $4x + 6y \ge 24$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "authored" },
      stem: t`Product A ($x$ units) needs $1$ hour on a machine and product B ($y$ units) needs $30$ minutes. The machine is free for $8$ hours. The machine constraint is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "constraint", a: "1", b: "30", cap: "8", op: "<=", bscale: "60" } },
      options: [
        { key: "A", text: t`$x + 30y \le 8$`, correct: false, misconceptionId: "C12-M3", value: "-x/8 - 15*y/4 + 1" },
        { key: "B", text: t`$2x + y \le 16$`, correct: true, value: "-x/8 - y/16 + 1" },
        { key: "C", text: t`$x + 2y \le 16$`, correct: false, misconceptionId: "C12-M1", value: "-x/16 - y/8 + 1" },
        { key: "D", text: t`$2x + y \ge 16$`, correct: false, misconceptionId: "C12-M2", value: "x/8 + y/16 - 1" },
      ],
      solution: {
        steps: [
          t`Work in hours: $30$ min $= \dfrac12$ h, so the time is $x + \dfrac{y}{2}$ hours.`,
          t`The machine is free for $8$ hours: $x + \dfrac{y}{2} \le 8$.`,
          t`Multiply by $2$: $2x + y \le 16$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "authored" },
      stem: t`A toy of type A ($x$ toys) takes $2$ hours to paint and one of type B ($y$ toys) takes $45$ minutes. The painter works at most $12$ hours. The painting constraint is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "constraint", a: "2", b: "45", cap: "12", op: "<=", bscale: "60" } },
      options: [
        { key: "A", text: t`$3x + 8y \le 48$`, correct: false, misconceptionId: "C12-M1", value: "-x/16 - y/6 + 1" },
        { key: "B", text: t`$2x + 45y \le 12$`, correct: false, misconceptionId: "C12-M3", value: "-x/6 - 15*y/4 + 1" },
        { key: "C", text: t`$8x + 3y \le 48$`, correct: true, value: "-x/6 - y/16 + 1" },
        { key: "D", text: t`$8x + 3y \ge 48$`, correct: false, misconceptionId: "C12-M2", value: "x/6 + y/16 - 1" },
      ],
      solution: {
        steps: [
          t`Work in hours: $45$ min $= \dfrac34$ h, so the time is $2x + \dfrac34 y$ hours.`,
          t`The painter works at most $12$ hours: $2x + \dfrac34 y \le 12$.`,
          t`Multiply by $4$: $8x + 3y \le 48$.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "authored" },
      stem: t`A firm makes $x$ chairs and $y$ tables, earning a profit of ₹$40$ per chair and ₹$60$ per table. Its objective is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "objective", p: "40", q: "60", goal: "max" } },
      options: [
        { key: "A", text: t`Maximise $Z = 60x + 40y$`, correct: false, misconceptionId: "C12-M1", value: "60*x + 40*y" },
        { key: "B", text: t`Minimise $Z = 40x + 60y$`, correct: false, misconceptionId: "C12-M4", value: "-40*x - 60*y" },
        { key: "C", text: t`Maximise $Z = 40x + 60y$`, correct: true, value: "40*x + 60*y" },
        { key: "D", text: t`Maximise $Z = x + y$`, correct: false, misconceptionId: "C12-M5", value: "x + y" },
      ],
      solution: {
        steps: [
          t`Profit is ₹$40$ per chair and ₹$60$ per table: $Z = 40x + 60y$.`,
          t`Profit should be as large as possible: maximise $Z = 40x + 60y$.`,
        ],
      },
    },
    {
      id: "C12-Q6",
      source: { kind: "authored" },
      stem: t`A diet uses $x$ kg of food A at ₹$5$ per kg and $y$ kg of food B at ₹$8$ per kg. Its objective is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "objective", p: "5", q: "8", goal: "min" } },
      options: [
        { key: "A", text: t`Minimise $Z = 5x + 8y$`, correct: true, value: "-5*x - 8*y" },
        { key: "B", text: t`Minimise $Z = 8x + 5y$`, correct: false, misconceptionId: "C12-M1", value: "-8*x - 5*y" },
        { key: "C", text: t`Maximise $Z = 5x + 8y$`, correct: false, misconceptionId: "C12-M4", value: "5*x + 8*y" },
        { key: "D", text: t`Minimise $Z = x + y$`, correct: false, misconceptionId: "C12-M5", value: "-x - y" },
      ],
      solution: {
        steps: [
          t`Food A costs ₹$5$ per kg and food B ₹$8$: $Z = 5x + 8y$.`,
          t`Cost should be as small as possible: minimise $Z = 5x + 8y$.`,
        ],
      },
    },
  ],
};
