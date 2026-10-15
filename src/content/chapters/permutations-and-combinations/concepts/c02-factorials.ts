import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/**
 * A row of numbered tiles, `top` down to 1, one unit wide each, ending at x = 9, its bottom at
 * `y`; the number sits inside the tile. `name` labels the row on the left.
 */
const tiles = (top: number, y: number, name: string, step: number): FigureElement[] => {
  const x0 = 9 - top;
  const els: FigureElement[] = [
    { kind: "segment", from: [x0, y], to: [9, y], step },
    { kind: "segment", from: [x0, y + 1], to: [9, y + 1], step },
    { kind: "label", at: [x0 - 0.1, y + 0.5], label: name, labelAt: "w", step },
  ];
  for (let i = 0; i <= top; i++) els.push({ kind: "segment", from: [x0 + i, y], to: [x0 + i, y + 1], step });
  for (let i = 0; i < top; i++) els.push({ kind: "label", at: [x0 + i + 0.5, y + 0.08], label: String(top - i), labelAt: "n", step });
  return els;
};

/** A slash through each of the tiles numbered `n` down to 1 in the row whose bottom is at `y`. */
const struck = (n: number, y: number, step: number): FigureElement[] =>
  Array.from({ length: n }, (_, i): FigureElement => {
    const x = 9 - n + i;
    return { kind: "segment", from: [x + 0.15, y + 0.15], to: [x + 0.85, y + 0.85], tone: "bad", step };
  });

/** A bracket over the top row from x = a to x = b, labelled above its middle. */
const bracket = (a: number, b: number, label: string, step: number, tone?: "good"): FigureElement[] => [
  { kind: "segment", from: [a, 2.8], to: [b, 2.8], tone, step },
  { kind: "segment", from: [a, 2.6], to: [a, 2.8], tone, step },
  { kind: "segment", from: [b, 2.6], to: [b, 2.8], tone, step },
  { kind: "label", at: [(a + b) / 2, 2.8], label, labelAt: "n", tone, step },
];

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`$100!$ has $158$ digits, far too many for any calculator. **Yet $\frac{100!}{98!}$ is a small whole number. What is it?**`,
    reveal: t`$9900$. Write $100! = 100 \times 99 \times 98!$. The $98!$ on top cancels the $98!$ below, leaving $100 \times 99 = 9900$. You never work out either factorial.`,
  },
  explanation: {
    intuition: [
      t`$n!$, read "$n$ **factorial**", multiplies together every whole number from $n$ down to $1$.`,
      t`So $9! = 9 \times 8 \times \cdots \times 1$: nine **factors**, the numbers being multiplied.`,
      t`Factorials grow very fast: $10!$ is already $3628800$.`,
      t`Each factorial holds every smaller one inside it: $9! = 9 \times 8 \times 7!$.`,
      t`So a **quotient** of factorials, one divided by the other, cancels: $\frac{9!}{7!} = 9 \times 8 = 72$.`,
      t`The number of factors left is the **gap** between the two numbers: $9 - 7 = 2$.`,
    ],
    figure: {
      alt: "A row of nine numbered tiles, 9 down to 1, stands for 9!. A bracket over the tiles 7 down to 1 marks the 7! inside it. Below a fraction bar, a row of seven tiles, 7 down to 1, stands for 7!. Each tile from 7 down to 1 is struck through in both rows, and a green bracket over the two tiles left, 9 and 8, reads 9 × 8.",
      axes: "none",
      view: { x: [-1.3, 9.7], y: [-0.4, 3.6] },
      elements: [
        ...tiles(9, 1.4, "9!", 2),
        ...bracket(2.05, 8.95, "7!", 4),
        { kind: "segment", from: [0, 1.2], to: [9, 1.2], step: 5 },
        ...tiles(7, 0, "7!", 5),
        ...struck(7, 1.4, 5),
        ...struck(7, 0, 5),
        ...bracket(0.05, 1.95, "9 × 8", 6, "good"),
      ],
    },
    formal: [
      {
        title: "Definition of n!",
        points: [
          t`A **natural number** is a counting number: $1, 2, 3$ and so on.`,
          t`For a natural number $n$, $n!$ equals $1 \times 2 \times 3 \times \cdots \times n$.`,
          t`So $1! = 1$, $2! = 2$ and $3! = 6$.`,
          t`Then $4! = 24$, $5! = 120$ and $6! = 720$.`,
        ],
      },
      {
        title: "Stepping a factorial down",
        points: [
          t`Take the top factor out of $n!$, and what is left is $(n-1)!$.`,
          t`So $n! = n \times (n-1)!$.`,
          t`Step down once more: $n! = n(n-1) \times (n-2)!$.`,
          t`Divide by $(n-2)!$: $\frac{n!}{(n-2)!} = n(n-1)$.`,
          t`A gap of $2$ leaves exactly $2$ factors.`,
          t`They start at the top number and stop just above the bottom one: $n - 1$ is just above $n - 2$.`,
        ],
      },
      {
        title: "Zero factorial",
        points: [
          t`$0!$, zero factorial, is defined to be $1$.`,
          t`This keeps the rule $n! = n \times (n-1)!$ true at $n = 1$.`,
          t`At $n = 1$ the rule reads $1! = 1 \times 0!$, so $0!$ must be $1$.`,
        ],
      },
      {
        title: "The ! acts on one number",
        points: [
          t`The ! acts only on the number, or the bracket, just before it.`,
          t`So work out each factorial first, then do any other arithmetic.`,
          t`A bracket comes first: $(7 - 3)! = 4! = 24$.`,
          t`But $7! - 3! = 5040 - 6 = 5034$.`,
          t`In the same way, $\frac{9!}{3!} = 60480$, but $\left(\frac{9}{3}\right)! = 3! = 6$.`,
        ],
      },
      {
        title: "Adding fractions with factorials",
        points: [
          t`To add fractions with factorials at the bottom, put every term over the biggest factorial.`,
          t`For example, find $x$ if $\frac{1}{8!} + \frac{1}{9!} = \frac{x}{10!}$.`,
          t`Multiply both sides by $10!$: $x = \frac{10!}{8!} + \frac{10!}{9!}$.`,
          t`$\frac{10!}{8!} = 10 \times 9 = 90$, and $\frac{10!}{9!} = 10$.`,
          t`So $x = 90 + 10 = 100$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $n$ if $(n+1)! = 42 \times (n-1)!$.`,
      steps: [
        t`Step down twice from the top: $(n+1)!$ $= (n+1) \times n \times (n-1)!$.`,
        t`Cancel $(n-1)!$ from both sides: $(n+1)n = 42$.`,
        t`The left side is a product of two consecutive numbers, and $42 = 7 \times 6$. Match the bigger factors: $n + 1 = 7$.`,
        t`So $n = 6$. Check: $\frac{7!}{5!} = 7 \times 6 = 42$.`,
      ],
      answer: t`$n = 6$`,
    },
    visualSpec: t`Drag a slider for $n$ and another for the gap: a row of numbered tiles $n, n - 1, \ldots, 1$ for $n!$ sits over the tiles of the smaller factorial, the matching tiles fade out, and only the top few stay to be multiplied.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Thinks the ! passes through arithmetic: works out $\frac{a!}{b!}$ as $\left(\frac{a}{b}\right)!$ and $a! - b!$ as $(a - b)!$`,
      remediation: t`The ! belongs to one number: work out each factorial first, then divide or subtract. $\frac{9!}{3!} = 60480$, while $\left(\frac{9}{3}\right)! = 6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Takes $0! = 0$, so a product with $0!$ in it is $0$ and dividing by $0!$ is not allowed`,
      remediation: t`$0! = 1$ by definition. It keeps $n! = n \times (n-1)!$ true at $n = 1$, since $1! = 1 \times 0!$. So $0!$ changes nothing in a product or a quotient.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Cancels $\frac{a!}{b!}$ down to $a(a-1)\cdots b$, keeping the factor $b$ that $b!$ removes`,
      remediation: t`$b!$ cancels $b$ and everything below it, so stop at $b + 1$. $\frac{n!}{(n-2)!} = n(n-1)$: a gap of $2$ leaves exactly $2$ factors.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Divides factorials like powers: $\frac{a!}{b!} = (a - b)!$`,
      remediation: t`Index laws do not hold for factorials. Write the bigger one down to the smaller: $\frac{9!}{7!} = 9 \times 8 = 72$, not $2! = 2$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M2 shows only on items with a $0!$ in them (C02-Q4, C02-Q6). C02-M1 needs a quotient $\frac{a}{b}$ that is a whole number, or a difference of factorials; it can't model $\frac{8!}{6!}$ or $\frac{5!}{3!}$, so Q4 and Q6 leave it out.`,
    t`On C02-Q2, C02-M3 and C02-M4 split the fraction as $\frac{6!}{4!} - 1$ first, and only then cancel the wrong way.`,
    t`Finding $n$ from $(n+1)! = k(n-1)!$ is in the worked example, not an item: only C02-M3 gives a whole-number answer there, so such an item can't carry three modelled mistakes.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.2 Q2(i)" },
      stem: t`$\frac{12!}{6!} =$`,
      verify: { kind: "value", inputs: { a: "12", b: "6" }, params: { form: "quot" } },
      options: [
        { key: "A", text: t`$665280$`, correct: true, value: "665280" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C02-M1", value: "2" },
        { key: "C", text: t`$3991680$`, correct: false, misconceptionId: "C02-M3", value: "3991680" },
        { key: "D", text: t`$720$`, correct: false, misconceptionId: "C02-M4", value: "720" },
      ],
      solution: {
        steps: [
          t`Step $12!$ down to $6!$: $12! = 12 \times 11 \times 10 \times 9 \times 8 \times 7 \times 6!$.`,
          t`Cancel $6!$. A gap of $12 - 6 = 6$ leaves six factors: $12 \times 11 \times 10 \times 9 \times 8 \times 7$.`,
          t`$= 665280$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.2 Q2(vi)" },
      stem: t`$\frac{6! - 4!}{4!} =$`,
      verify: { kind: "value", inputs: { a: "6", b: "4" }, params: { form: "diffquot" } },
      options: [
        { key: "A", text: t`$\frac{1}{12}$`, correct: false, misconceptionId: "C02-M1", value: "1/12" },
        { key: "B", text: t`$119$`, correct: false, misconceptionId: "C02-M3", value: "119" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M4", value: "1" },
        { key: "D", text: t`$29$`, correct: true, value: "29" },
      ],
      solution: {
        steps: [
          t`Split the fraction: $\frac{6!}{4!} - \frac{4!}{4!}$.`,
          t`$\frac{6!}{4!} = 6 \times 5 = 30$, and $\frac{4!}{4!} = 1$.`,
          t`$30 - 1 = 29$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.2 Q5(i)" },
      stem: t`Find $n$ if $\frac{n}{6!} = \frac{2}{3!} + \frac{1}{2!}$.`,
      verify: { kind: "value", inputs: { c: "6", a: "3", b: "2", p: "2", q: "1" }, params: { form: "lcm" } },
      options: [
        { key: "A", text: t`$36$`, correct: false, misconceptionId: "C02-M4", value: "36" },
        { key: "B", text: t`$600$`, correct: true, value: "600" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C02-M1", value: "10" },
        { key: "D", text: t`$1440$`, correct: false, misconceptionId: "C02-M3", value: "1440" },
      ],
      solution: {
        steps: [
          t`Multiply both sides by $6!$: $n = \frac{2 \times 6!}{3!} + \frac{6!}{2!}$.`,
          t`$\frac{6!}{3!} = 6 \times 5 \times 4 = 120$, and $\frac{6!}{2!} = 6 \times 5 \times 4 \times 3 = 360$.`,
          t`$n = 2 \times 120 + 360 = 600$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`$\frac{8!}{6! \times 0!} =$`,
      verify: { kind: "value", inputs: { a: "8", b: "6" }, params: { form: "quot0" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C02-M4", value: "2" },
        { key: "B", text: t`$56$`, correct: true, value: "56" },
        { key: "C", text: t`not defined`, correct: false, misconceptionId: "C02-M2", value: "not_defined" },
        { key: "D", text: t`$336$`, correct: false, misconceptionId: "C02-M3", value: "336" },
      ],
      solution: {
        steps: [
          t`$0! = 1$, so the expression is just $\frac{8!}{6!}$.`,
          t`$8! = 8 \times 7 \times 6!$, so $\frac{8!}{6!} = 8 \times 7 = 56$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.2 Q4(i)" },
      stem: t`Evaluate $\frac{n!}{r!\,(n-r)!}$ for $n = 8$, $r = 4$.`,
      verify: { kind: "value", inputs: { n: "8", r: "4" }, params: { form: "binom" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C02-M4", value: "1" },
        { key: "B", text: t`$70$`, correct: true, value: "70" },
        { key: "C", text: t`$\frac{1}{12}$`, correct: false, misconceptionId: "C02-M1", value: "1/12" },
        { key: "D", text: t`$280$`, correct: false, misconceptionId: "C02-M3", value: "280" },
      ],
      solution: {
        steps: [
          t`With $n = 8$, $r = 4$: $\frac{8!}{4! \times 4!}$.`,
          t`Cancel one $4!$: $\frac{8!}{4!} = 8 \times 7 \times 6 \times 5 = 1680$.`,
          t`Divide by the other $4! = 24$: $\frac{1680}{24} = 70$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`$\frac{5! \times 0!}{3!} =$`,
      verify: { kind: "value", inputs: { a: "5", b: "3" }, params: { form: "mul0" } },
      options: [
        { key: "A", text: t`$20$`, correct: true, value: "20" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C02-M2", value: "0" },
        { key: "C", text: t`$60$`, correct: false, misconceptionId: "C02-M3", value: "60" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C02-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`$0! = 1$, so the expression is just $\frac{5!}{3!}$.`,
          t`$5! = 5 \times 4 \times 3!$, so $\frac{5!}{3!} = 5 \times 4 = 20$.`,
        ],
      },
    },
  ],
};
