import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`A pizza place offers $4$ different toppings. You may put on any number of them, even none. **How many different pizzas can you order?**`,
    reveal: t`$16$. Count by size: $1$ pizza with no topping, $4$ with one, $6$ with two, $4$ with three, $1$ with all four, and $1 + 4 + 6 + 4 + 1 = 16$. Quicker: each topping is either on or off, $2$ choices each, so $2 \times 2 \times 2 \times 2 = 2^4 = 16$.`,
  },
  explanation: {
    intuition: t`When you may choose any number of things, don't count size by size: decide thing by thing. Each thing is either in the selection or out of it, $2$ choices, and every thing is decided on its own. By the multiplication principle, $n$ different things give $2 \times 2 \times \cdots \times 2 = 2^n$ selections. One of them is the empty selection, with nothing chosen. If the question needs at least one thing, remove it: $2^n - 1$.`,
    formal: t`**Any number, even none.** From $n$ different things, each in or out: $$2 \times 2 \times \cdots \times 2 = 2^n \text{ selections.}$$

**At least one.** Remove the one empty selection: $$2^n - 1.$$ Watch for it in words: "at least one", "the hall is lit" (some lamp is on), "he fails" (in at least one subject).

**The same count, size by size.** Choosing $r$ things gives $^nC_r$ selections, for $r = 0, 1, \ldots, n$. So $$^nC_0 + {}^nC_1 + \ldots + {}^nC_n = 2^n, \qquad {}^nC_1 + {}^nC_2 + \ldots + {}^nC_n = 2^n - 1.$$

**Check with $n = 3$.** $1 + 3 + 3 + 1 = 8 = 2^3$. Choosing nothing is one way: $^nC_0 = 1$, not $0$. And $2^n$ is neither $2n$ nor $n^2$: for $n = 3$ those give $6$ and $9$.`,
    worked: {
      prompt: t`A shelf has $10$ different books. In how many ways can you choose at least one of them to take on a trip?`,
      steps: [
        t`Each book is either taken or left: $2$ choices per book.`,
        t`The $10$ books are decided independently, so multiply: $2^{10} = 1024$ selections. One of them takes no book at all.`,
        t`At least one book is needed, so remove that empty selection: $1024 - 1 = 1023$.`,
      ],
      answer: t`$1023$ ways.`,
    },
    visualSpec: t`A row of $n$ switches, each flipped in or out; a counter shows the number of selections doubling with every switch added, and the all-out position greys out when 'at least one' is ticked.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: "Keeps the empty selection when the question needs at least one thing: answers 2^n instead of 2^n - 1",
      remediation: t`$2^n$ counts every selection, including the one with nothing chosen. When at least one thing is needed (a lit hall, a failed exam, a sum that starts at $r = 1$), subtract that one: $2^n - 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M2",
      mistake: "Adds the in-or-out choices instead of multiplying them: n things with 2 choices each gives 2n",
      remediation: t`Each thing's in-or-out choice goes with every choice for the others, so multiply: $2 \times 2 \times \cdots \times 2 = 2^n$, not $2 + 2 + \cdots + 2 = 2n$. So the full sum of $^nC_r$ is $2^n$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C14-M3",
      mistake: "Swaps base and exponent: n things with 2 choices each taken as n^2",
      remediation: t`Each of the $n$ things is a place to fill, and each place has $2$ choices, in or out. That gives $2^n$, not $n^2$: for $n = 3$, $2^3 = 8$ but $3^2 = 9$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C14-M4",
      mistake: "Reads 'at least one' as 'exactly one': counts only the n single choices",
      remediation: t`At least one means one, or two, or more, up to all $n$. Count every size, $^nC_1 + {}^nC_2 + \ldots + {}^nC_n$, which is $2^n - 1$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C14-M5",
      mistake: "Takes nC0 = 0, so drops the empty selection even where choosing none is allowed",
      remediation: t`$^nC_0 = 1$: choosing nothing is one way. When none is allowed, keep it and the total is $2^n$. Subtract $1$ only when at least one thing is needed.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  engineNotes: [
    "C14-M1 gives the key when the empty selection is allowed, and C14-M5 applies only there: draw C14-M1 from an 'at least one' item (Q1, Q2, Q3, Q6) and C14-M5 from an 'any number, even none' item (Q4, Q5).",
    "C14-M4 applies only to 'at least one' word problems (Q1, Q3).",
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q11" },
      stem: t`A hall has $12$ lamps, and each lamp can be switched on or off independently. The hall is lit when at least one lamp is on. The number of ways of lighting the hall is:`,
      verify: { kind: "value", inputs: { n: "12", lo: "1", hi: "12" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$12$`, correct: false, misconceptionId: "C14-M4", value: "12" },
        { key: "B", text: t`$4095$`, correct: true, value: "4095" },
        { key: "C", text: t`$4096$`, correct: false, misconceptionId: "C14-M1", value: "4096" },
        { key: "D", text: t`$143$`, correct: false, misconceptionId: "C14-M3", value: "143" },
      ],
      solution: {
        steps: [
          t`Each lamp is either on or off: $2$ choices per lamp, made independently.`,
          t`$12$ lamps give $2^{12} = 4096$ patterns, and one of them has every lamp off.`,
          t`With every lamp off the hall is dark, so remove that pattern: $4096 - 1 = 4095$.`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q14" },
      stem: t`A question paper has $6$ questions. A student wants to answer at least one of them. The number of ways he can choose which questions to answer is:`,
      verify: { kind: "value", inputs: { n: "6", lo: "1", hi: "6" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$63$`, correct: true, value: "63" },
        { key: "B", text: t`$64$`, correct: false, misconceptionId: "C14-M1", value: "64" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C14-M2", value: "11" },
        { key: "D", text: t`$35$`, correct: false, misconceptionId: "C14-M3", value: "35" },
      ],
      solution: {
        steps: [
          t`Each question is either answered or left: $2$ choices per question.`,
          t`$6$ questions give $2^6 = 64$ choices, and one of them answers nothing.`,
          t`At least one question must be answered: $64 - 1 = 63$.`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q9" },
      stem: t`A student passes an examination only if he scores the minimum marks in each of his $7$ subjects. He fails if he falls short in one or more subjects. Counting by the subjects he falls short in, the number of ways he can fail is:`,
      verify: { kind: "value", inputs: { n: "7", lo: "1", hi: "7" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$127$`, correct: true, value: "127" },
        { key: "B", text: t`$128$`, correct: false, misconceptionId: "C14-M1", value: "128" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C14-M2", value: "13" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C14-M4", value: "7" },
      ],
      solution: {
        steps: [
          t`In each subject he either clears the minimum or falls short: $2$ outcomes per subject, so $2^7 = 128$ patterns.`,
          t`Only one pattern, clearing every subject, is a pass. All the others are fails: $128 - 1 = 127$.`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "authored" },
      stem: t`$^8C_0 + {}^8C_1 + {}^8C_2 + \ldots + {}^8C_8 = ?$`,
      verify: { kind: "value", inputs: { n: "8", lo: "0", hi: "8" }, params: { kind: "sum" } },
      options: [
        { key: "A", text: t`$255$`, correct: false, misconceptionId: "C14-M5", value: "255" },
        { key: "B", text: t`$16$`, correct: false, misconceptionId: "C14-M2", value: "16" },
        { key: "C", text: t`$64$`, correct: false, misconceptionId: "C14-M3", value: "64" },
        { key: "D", text: t`$256$`, correct: true, value: "256" },
      ],
      solution: {
        steps: [
          t`$^8C_r$ counts the selections of $r$ things out of $8$, so adding over every $r$ from $0$ to $8$ counts every selection once.`,
          t`Each of the $8$ things is in or out, so there are $2^8 = 256$ selections in all.`,
          t`The sum is $256$. Check: $1 + 8 + 28 + 56 + 70 + 56 + 28 + 8 + 1 = 256$.`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "authored" },
      stem: t`A plate has $5$ different sweets. A guest may take any number of them, including none at all. The number of ways the guest can choose is:`,
      verify: { kind: "value", inputs: { n: "5", lo: "0", hi: "5" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$31$`, correct: false, misconceptionId: "C14-M5", value: "31" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C14-M2", value: "10" },
        { key: "C", text: t`$25$`, correct: false, misconceptionId: "C14-M3", value: "25" },
        { key: "D", text: t`$32$`, correct: true, value: "32" },
      ],
      solution: {
        steps: [
          t`Each sweet is either taken or left: $2$ choices per sweet.`,
          t`$5$ sweets give $2^5 = 32$ choices.`,
          t`Taking none is allowed, so keep that choice: $32$ ways.`,
        ],
      },
    },
    {
      id: "C14-Q6",
      source: { kind: "authored" },
      stem: t`$^9C_1 + {}^9C_2 + {}^9C_3 + \ldots + {}^9C_9 = ?$`,
      verify: { kind: "value", inputs: { n: "9", lo: "1", hi: "9" }, params: { kind: "sum" } },
      options: [
        { key: "A", text: t`$17$`, correct: false, misconceptionId: "C14-M2", value: "17" },
        { key: "B", text: t`$80$`, correct: false, misconceptionId: "C14-M3", value: "80" },
        { key: "C", text: t`$511$`, correct: true, value: "511" },
        { key: "D", text: t`$512$`, correct: false, misconceptionId: "C14-M1", value: "512" },
      ],
      solution: {
        steps: [
          t`The full sum is $^9C_0 + {}^9C_1 + \ldots + {}^9C_9 = 2^9 = 512$.`,
          t`This sum leaves out $^9C_0 = 1$, the empty selection: $512 - 1 = 511$.`,
        ],
      },
    },
  ],
};
