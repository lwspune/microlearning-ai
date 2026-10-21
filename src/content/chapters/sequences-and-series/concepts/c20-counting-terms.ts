import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c20: Concept = {
  id: "C20",
  status: "approved",
  hook: {
    prompt: t`You read a book from page $15$ to page $40$, both included. **Did you read $40 - 15 = 25$ pages?**`,
    reveal: t`No, you read $26$. $40 - 15$ counts the steps from page to page, and the first page needs no step. Pages $15, 16, \ldots, 40$ form an A.P. with $d = 1$, so there are $\frac{40 - 15}{1} + 1 = 26$ terms.`,
  },
  explanation: {
    intuition: [
      t`Recall: an **A.P.** adds the same common difference $d$ each time, and $t_n = a + (n - 1)d$.`,
      t`A term's **position** is its term number $n$: $t_7$ is in position $7$.`,
      t`Often you know a term's value but not its position.`,
      t`Then $t_n = a + (n - 1)d$ becomes an equation in $n$; solve it to find the position.`,
      t`Counting a list is the same question: the position of the last term is the number of terms.`,
      t`A position counts terms, so $n$ must be a **natural number**: $1, 2, 3, \ldots$`,
    ],
    formal: [
      {
        title: "Terms, not steps",
        points: [
          t`A finite A.P. runs from its first term $a$ to its **last term** $l$; each **step** adds $d$.`,
          t`In $2, 5, 8, 11, 14$, steps of $3$ take $2$ to $14$.`,
          t`There are $\frac{14 - 2}{3} = 4$ steps, but $5$ terms.`,
          t`The first term needs no step, so there is one more term than steps.`,
          t`So the number of terms is $n = \frac{l - a}{d} + 1$.`,
          t`This is just $l = a + (n - 1)d$ solved for $n$.`,
        ],
        figure: {
          alt: "The A.P. 2, 5, 8, 11, 14 as five points on a line. The first, 2, is marked a and the last, 14, is marked l. A jump labelled +3 joins each term to the next: four jumps. A label reads: 4 steps, 5 terms.",
          axes: "none",
          view: { x: [-1, 9.4], y: [-2.2, 3] },
          elements: [
            { kind: "segment", from: [-0.7, 0], to: [8.7, 0], tone: "muted" },
            { kind: "point", at: [0, 0], tone: "muted" },
            { kind: "point", at: [2, 0], tone: "muted" },
            { kind: "point", at: [4, 0], tone: "muted" },
            { kind: "point", at: [6, 0], tone: "muted" },
            { kind: "point", at: [8, 0], tone: "muted" },
            { kind: "label", at: [0, 0], label: "2", labelAt: "s", tone: "muted" },
            { kind: "label", at: [2, 0], label: "5", labelAt: "s", tone: "muted" },
            { kind: "label", at: [4, 0], label: "8", labelAt: "s", tone: "muted" },
            { kind: "label", at: [6, 0], label: "11", labelAt: "s", tone: "muted" },
            { kind: "label", at: [8, 0], label: "14", labelAt: "s", tone: "muted" },
            { kind: "label", at: [0, -0.9], label: "a", labelAt: "s", step: 1 },
            { kind: "label", at: [8, -0.9], label: "l", labelAt: "s", step: 1 },
            { kind: "arc", centre: [1, 0], r: 1, from: 0, to: 180, step: 2 },
            { kind: "arc", centre: [3, 0], r: 1, from: 0, to: 180, step: 2 },
            { kind: "arc", centre: [5, 0], r: 1, from: 0, to: 180, step: 2 },
            { kind: "arc", centre: [7, 0], r: 1, from: 0, to: 180, step: 2 },
            { kind: "label", at: [1, 1], label: "+3", labelAt: "n", step: 2 },
            { kind: "label", at: [3, 1], label: "+3", labelAt: "n", step: 2 },
            { kind: "label", at: [5, 1], label: "+3", labelAt: "n", step: 2 },
            { kind: "label", at: [7, 1], label: "+3", labelAt: "n", step: 2 },
            { kind: "label", at: [4, 2], label: "4 steps, 5 terms", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Which term is it?",
        points: [
          t`To find which term a number $T$ is, set $t_n = T$ and solve for $n$.`,
          t`Move $a$ across the equals sign, where it changes sign: $(n - 1)d = T - a$.`,
          t`Divide the **whole** of $T - a$ by $d$, then add $1$.`,
          t`With a negative $d$, keep the signs: $(n - 1)(-4) = -4n + 4$.`,
          t`If $n$ is a natural number, $T$ is the $n$th term.`,
          t`If $n$ comes out a fraction, zero or negative, $T$ is not a term at all.`,
        ],
      },
      {
        title: "Counting multiples in a range",
        points: [
          t`The multiples of $k$, in order, form an A.P. with $d = k$.`,
          t`Its first term $a$ is the smallest multiple in the range; its last term $l$ is the largest.`,
          t`The range's own ends are often not multiples, so find $a$ and $l$ first.`,
          t`Two-digit numbers run from $10$ to $99$; three-digit numbers from $100$ to $999$.`,
          t`Multiples of $6$ from $20$ to $100$: $a = 24$ and $l = 96$.`,
          t`So $n = \frac{96 - 24}{6} + 1 = 13$ multiples.`,
        ],
      },
      {
        title: "When two A.P.s meet",
        points: [
          t`Two A.P.s can have equal terms at the same position $n$.`,
          t`Write each $n$th term as $a + (n - 1)d$, then set the two equal.`,
          t`For $3, 7, 11, \ldots$: $t_n = 3 + (n - 1)4 = 4n - 1$.`,
          t`For $33, 35, 37, \ldots$: $t_n = 33 + (n - 1)2$ $= 2n + 31$.`,
          t`$4n - 1 = 2n + 31$ gives $2n = 32$, so $n = 16$.`,
          t`Check: both $16$th terms are $63$, since $4 \times 16 - 1 = 63$.`,
        ],
      },
    ],
    worked: {
      prompt: t`For the A.P. $7, 12, 17, 22, \ldots$, find which term is $182$, and decide whether $200$ is a term.`,
      steps: [
        t`Here $a = 7$ and $d = 12 - 7 = 5$.`,
        t`For $182$: $7 + (n - 1)5 = 182$, so $(n - 1)5 = 175$.`,
        t`Then $n - 1 = 35$, so $n = 36$: $182$ is the $36$th term.`,
        t`For $200$: $(n - 1)5 = 200 - 7 = 193$, so $n - 1 = \frac{193}{5}$ and $n = 39\frac{3}{5}$.`,
        t`That is not a natural number, so $200$ is not a term: it falls between $t_{39} = 197$ and $t_{40} = 202$.`,
      ],
      answer: t`$182$ is the $36$th term; $200$ is not a term, since it would need $n = 39\frac{3}{5}$.`,
    },
    visualSpec: t`Drag a number $T$ along a row of equally spaced terms: a counter shows the steps from $a$ and the term number, one more, and turns red when $T$ falls between two terms.`,
  },
  misconceptions: [
    {
      id: "C20-M1",
      mistake: t`Counts the steps of $d$, not the terms: takes $n = \frac{l - a}{d}$ and leaves out the $+ 1$`,
      remediation: t`$\frac{l - a}{d}$ counts the steps from $a$ to $l$. The first term needs no step, so there is one more term: $n = \frac{l - a}{d} + 1$.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C20-M2",
      mistake: t`Takes the ends of the range as the first and last terms, though they are not multiples of $k$`,
      remediation: t`Count only the multiples: the first term is the smallest multiple of $k$ in the range, and the last term the largest. Then $n = \frac{l - a}{k} + 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C20-M3",
      mistake: t`Divides the top of the range by $k$, which also counts the multiples below the range`,
      remediation: t`Dividing the largest number by $k$ counts every multiple from $k$ up, even those below the range. Start the A.P. at the first multiple inside the range.`,
      fallback: { kind: "none" },
    },
    {
      id: "C20-M4",
      mistake: "Moves the first term across the equals sign without changing its sign",
      remediation: t`A term that crosses the equals sign changes its sign: $a + (n - 1)d = t_n$ gives $(n - 1)d = t_n - a$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable" },
    },
    {
      id: "C20-M5",
      mistake: t`Divides only $t_n$ by $d$, not the whole of $t_n - a$`,
      remediation: t`Subtract first, then divide the whole difference by $d$: $(n - 1)d = t_n - a$ gives $n - 1 = \frac{t_n - a}{d}$.`,
      fallback: { kind: "ext", topic: "solving linear equations in one variable" },
    },
    {
      id: "C20-M6",
      mistake: t`Gets the sign of $(-1) \times d$ wrong when expanding $(n - 1)d$ with a negative $d$`,
      remediation: t`Multiply both parts of $n - 1$ by $d$ and keep the signs: $(n - 1)(-3) = -3n + 3$, since $(-1) \times (-3) = +3$.`,
      fallback: { kind: "ext", topic: "multiplying integers" },
    },
  ],
  engineNotes: [
    t`C20-M2 applies only when an end of the range is not a multiple of $k$ and the range's length divides by $k$; only Q2 catches it.`,
    t`C20-M6 applies only to an A.P. with a negative $d$ (Q1 and Q5).`,
  ],
  items: [
    {
      id: "C20-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/Ex 3.2 Q.8" },
      stem: t`In the A.P. $12, 9, 6, 3, \ldots$, which term is $-150$?`,
      verify: { kind: "value", inputs: { a: "12", d: "-3", T: "-150" }, params: { ask: "which" } },
      options: [
        { key: "A", text: t`$39$`, correct: false, misconceptionId: "C20-M5", value: "39" },
        { key: "B", text: t`$53$`, correct: false, misconceptionId: "C20-M6", value: "53" },
        { key: "C", text: t`$55$`, correct: true, value: "55" },
        { key: "D", text: t`$47$`, correct: false, misconceptionId: "C20-M4", value: "47" },
      ],
      solution: {
        steps: [
          t`Here $a = 12$ and $d = 9 - 12 = -3$. Set $12 + (n - 1)(-3) = -150$.`,
          t`Subtract $12$: $(n - 1)(-3) = -162$.`,
          t`Divide by $-3$: $n - 1 = 54$, so $n = 55$. $-150$ is the $55$th term.`,
        ],
      },
    },
    {
      id: "C20-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/Ex 3.2 Q.9" },
      stem: t`How many of the natural numbers from $10$ to $250$ are divisible by $4$?`,
      verify: { kind: "value", inputs: { lo: "10", hi: "250", k: "4" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$59$`, correct: false, misconceptionId: "C20-M1", value: "59" },
        { key: "B", text: t`$61$`, correct: false, misconceptionId: "C20-M2", value: "61" },
        { key: "C", text: t`$62$`, correct: false, misconceptionId: "C20-M3", value: "62" },
        { key: "D", text: t`$60$`, correct: true, value: "60" },
      ],
      solution: {
        steps: [
          t`The first multiple of $4$ from $10$ is $12$; the last up to $250$ is $248$.`,
          t`$12, 16, \ldots, 248$ is an A.P. with $a = 12$, $l = 248$ and $d = 4$.`,
          t`$n = \frac{248 - 12}{4} + 1$ $= 59 + 1 = 60$.`,
        ],
      },
    },
    {
      id: "C20-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2017/Q3(i)" },
      stem: t`How many three-digit natural numbers are divisible by $2$?`,
      verify: { kind: "value", inputs: { lo: "100", hi: "999", k: "2" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$450$`, correct: true, value: "450" },
        { key: "B", text: t`$499$`, correct: false, misconceptionId: "C20-M3", value: "499" },
        { key: "C", text: t`$550$`, correct: false, misconceptionId: "C20-M4", value: "550" },
        { key: "D", text: t`$400$`, correct: false, misconceptionId: "C20-M5", value: "400" },
      ],
      solution: {
        steps: [
          t`Three-digit numbers run from $100$ to $999$. The first even one is $100$, the last is $998$.`,
          t`$998 = 100 + (n - 1)2$, so $(n - 1)2 = 898$ and $n - 1 = 449$.`,
          t`So $n = 450$.`,
        ],
      },
    },
    {
      id: "C20-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/nth term of an A.P. SolvedEx.4" },
      stem: t`How many two-digit numbers are divisible by $4$?`,
      verify: { kind: "value", inputs: { lo: "10", hi: "99", k: "4" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$28$`, correct: false, misconceptionId: "C20-M4", value: "28" },
        { key: "B", text: t`$22$`, correct: true, value: "22" },
        { key: "C", text: t`$21$`, correct: false, misconceptionId: "C20-M1", value: "21" },
        { key: "D", text: t`$24$`, correct: false, misconceptionId: "C20-M3", value: "24" },
      ],
      solution: {
        steps: [
          t`Two-digit numbers run from $10$ to $99$. The multiples of $4$ among them are $12, 16, \ldots, 96$.`,
          t`$96 = 12 + (n - 1)4$, so $(n - 1)4 = 84$ and $n - 1 = 21$.`,
          t`So $n = 22$.`,
        ],
      },
    },
    {
      id: "C20-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/PS3 Q.5" },
      stem: t`Two A.P.s are $9, 7, 5, \ldots$ and $24, 21, 18, \ldots$. Their $n$th terms are equal. Find $n$.`,
      verify: { kind: "value", inputs: { a1: "9", d1: "-2", a2: "24", d2: "-3" }, params: { ask: "equal" } },
      options: [
        { key: "A", text: t`$15$`, correct: false, misconceptionId: "C20-M1", value: "15" },
        { key: "B", text: t`$34$`, correct: false, misconceptionId: "C20-M4", value: "34" },
        { key: "C", text: t`$14$`, correct: false, misconceptionId: "C20-M6", value: "14" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`First A.P.: $t_n = 9 + (n - 1)(-2)$ $= 11 - 2n$.`,
          t`Second A.P.: $t_n = 24 + (n - 1)(-3)$ $= 27 - 3n$.`,
          t`Set them equal: $11 - 2n = 27 - 3n$, so $n = 16$.`,
          t`Check: both $16$th terms are $-21$.`,
        ],
      },
    },
    {
      id: "C20-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026-jun/Q3(A)(ii)" },
      stem: t`The three-digit natural numbers divisible by $5$ are $100, 105, 110, \ldots, 995$. How many such numbers are there?`,
      verify: { kind: "value", inputs: { lo: "100", hi: "999", k: "5" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$100$`, correct: false, misconceptionId: "C20-M5", value: "100" },
        { key: "B", text: t`$180$`, correct: true, value: "180" },
        { key: "C", text: t`$179$`, correct: false, misconceptionId: "C20-M1", value: "179" },
        { key: "D", text: t`$199$`, correct: false, misconceptionId: "C20-M3", value: "199" },
      ],
      solution: {
        steps: [
          t`Here $a = 100$, $d = 5$ and the last term is $995$.`,
          t`$995 = 100 + (n - 1)5$, so $(n - 1)5 = 895$ and $n - 1 = 179$.`,
          t`So $n = 180$.`,
        ],
      },
    },
  ],
};
