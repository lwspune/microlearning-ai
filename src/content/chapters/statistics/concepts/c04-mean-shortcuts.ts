import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A class of $30$ students has a mean mark of $62$. The teacher adds $5$ grace marks to every script. Then she finds that one script marked $45$ should have been $75$. **What is the new mean, without adding up $30$ marks again?**`,
    reveal: t`Think in totals. The grace marks add $5$ to every mark, so the mean becomes $62 + 5 = 67$. The fix raises the total by $75 - 45 = 30$, shared over $30$ students: the mean rises by $1$, to $68$.`,
  },
  explanation: {
    intuition: [
      t`The **mean** $\bar{x}$ of $n$ observations, the data values, is their total divided by $n$.`,
      t`So the total is always $n\bar{x}$: rebuild it whenever the data change.`,
      t`Add the same number $a$ to every observation: the total grows by $na$, so the mean grows by $a$.`,
      t`Multiply every observation by $b$: the total, and so the mean, is multiplied by $b$.`,
      t`Change one observation by $d$: the total changes by $d$, but the mean only by $\frac{d}{n}$.`,
      t`Remove or add observations and the count $n$ changes too: fix the total first, then divide by the new count.`,
    ],
    formal: [
      {
        title: "Shifting and scaling",
        points: [
          t`A **shift** adds the same number $a$ to every observation; a **scale** multiplies each one by the same $b$.`,
          t`If $y_i = a + bx_i$ for every $i$, the total is $\sum y_i = na + b\sum x_i$.`,
          t`Divide by $n$: $\bar{y} = a + b\bar{x}$.`,
          t`Example: mean $12$, each value doubled and then $3$ added: $\bar{y} = 2 \times 12 + 3 = 27$.`,
          t`A shift moves the mean by $a$; only how spread out the data are stays the same.`,
        ],
      },
      {
        title: "Coded values",
        points: [
          t`Data are often **coded**, rewritten as smaller numbers, as $u_i = \frac{x_i - a}{h}$: subtract $a$, then divide by $h$.`,
          t`Do the same to the mean, in the same order: $\bar{u} = \frac{\bar{x} - a}{h}$.`,
          t`Example: $\bar{x} = 62$ and $u_i = \frac{x_i - 2}{10}$ give $\bar{u} = \frac{60}{10} = 6$.`,
          t`Dividing first, $\frac{\bar{x}}{h} - a$, is a different code and a wrong answer.`,
          t`To go back, undo the steps in reverse order: multiply by $h$, then add $a$.`,
          t`So $\bar{x} = a + h\bar{u}$.`,
        ],
      },
      {
        title: "Sums from a mean",
        points: [
          t`From $\bar{x} = \frac{\sum x_i}{n}$ we get $\sum x_i = n\bar{x}$.`,
          t`A constant inside a sum is added once for each $i$: $\sum_{i=1}^{n} c = nc$.`,
          t`So $\sum (a + bx_i) = na + bn\bar{x}$.`,
          t`Example: $n = 8$ and $\bar{x} = 5$, so $\sum x_i = 40$.`,
          t`Then $\sum (2x_i + 1) = 2 \times 40 + 8$ $= 88$.`,
          t`A sum is a total: check whether the question wants it or the mean.`,
        ],
      },
      {
        title: "Correcting a misread value",
        points: [
          t`A **misread** observation is one copied wrongly, like $47$ written as $74$.`,
          t`Rebuild the total $n\bar{x}$; take out the wrong value and put in the right one.`,
          t`The count is still $n$, so divide by the same $n$.`,
          t`Shortcut: new mean $= \bar{x} + \frac{d}{n}$, where $d$ is the right value minus the wrong one.`,
          t`Replacing one value by another on purpose works the same way.`,
        ],
      },
      {
        title: "Removing or adding values",
        points: [
          t`Remove $k$ observations: $n - k$ are left, and their total is $(n - k)$ times their mean.`,
          t`The removed values' total is the old total minus what is left.`,
          t`Divide that by $k$ for the mean of the removed values.`,
          t`Add observations: add their values to the total and their number to the count.`,
          t`Example: $10$ values with mean $8$, then add $19$: $\frac{80 + 19}{11} = 9$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The mean of $20$ observations is $15$. Later it is found that $38$ was misread as $78$. After the correction, each observation is multiplied by $3$ and then $2$ is subtracted. Find the final mean.`,
      steps: [
        t`Rebuild the total: $\sum x_i = 20 \times 15 = 300$.`,
        t`Correct it: $300 - 78 + 38 = 260$; there are still $20$ observations.`,
        t`The corrected mean is $\frac{260}{20} = 13$.`,
        t`Each value becomes $3x_i - 2$, so the mean becomes $3 \times 13 - 2 = 37$.`,
      ],
      answer: t`The final mean is $37$.`,
    },
    visualSpec: t`Stack the observations as bars over a line at the mean: slide or stretch every bar together and the mean line follows; drag one bar and the line moves by a $\frac{1}{n}$ share.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinking that adding or subtracting a constant from every observation leaves the mean unchanged",
      remediation: t`Adding $a$ to each of the $n$ observations adds $na$ to the total, so the mean moves by $a$ too: the mean of $a + bx_i$ is $a + b\bar{x}$. Only the spread ignores a shift.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M2",
      mistake: t`Doing the steps to $\bar{x}$ in a different order from the steps done to each observation`,
      remediation: t`Do to $\bar{x}$ exactly what was done to each value, in the same order: the mean of $\frac{x_i - a}{h}$ is $\frac{\bar{x} - a}{h}$. To go back, undo the steps in reverse order.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Treating a misread or replaced value as removed: taking it out of the total, leaving the right value out, and dividing by $n - 1$`,
      remediation: t`A misread value is replaced, not dropped: take the wrong value out of $n\bar{x}$, put the right value in, and divide by the same $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Mixing up the total $n\bar{x}$ and the mean $\bar{x}$: putting a change straight onto the mean, or giving a mean where a total is asked (or the reverse)`,
      remediation: t`A change of $d$ in one value changes the total by $d$ but the mean by only $\frac{d}{n}$. Check whether the question asks for a total or a mean, and divide or multiply by the count to match.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M5",
      mistake: t`Keeping the old count $n$ after observations are removed`,
      remediation: t`After removing $k$ observations, $n - k$ are left, so their total is $(n - k)$ times their mean. Subtract that from $n\bar{x}$ to get the removed values' total.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M6",
      mistake: "Taking a difference the wrong way round, so the shift or correction goes the other way",
      remediation: t`Check each direction: a correction adds $\text{right} - \text{wrong}$ to the total, removed values total the old total minus what is left, and $+a$ is undone by $-a$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M1 and C04-M6 need a shift step (ask mean, sum or inv); C04-M2 needs two steps; C04-M3 applies only to a correction (ask fix), C04-M5 only to removed values (ask drop).",
    t`C04-Q2 asks a sum, so its C04-M4 option is the mean $\frac{112}{10}$; in C04-Q4 and C04-Q6 C04-M4 puts the whole change on the mean, and in C04-Q5 it gives the removed values' total.`,
    t`C04-Q4 changes the numbers of 2020 Apr Q112 ($100$ observations, mean $40$, $53$ read as $83$, key $39.7$) so that the C04-M3 option is a whole number: $50$ observations, $59$ read as $89$.`,
    t`C04-Q6 is 2024 Sep Q112, whose printed options $\bar{x} - \frac{x_n - k}{n}$ and $\frac{n\bar{x} - x_n + k}{n}$ are equal, so the PYQ had two correct options; here only the second form is offered.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q113" },
      stem: t`The arithmetic mean of $100$ observations is $50$. If $5$ is subtracted from each observation and the result is then divided by $20$, the new arithmetic mean is:`,
      verify: { kind: "value", inputs: { m: "50" }, params: { ask: "mean", steps: "-5,/20" } },
      options: [
        { key: "A", text: t`$-2.5$`, correct: false, misconceptionId: "C04-M2", value: "-5/2" },
        { key: "B", text: t`$2.75$`, correct: false, misconceptionId: "C04-M6", value: "11/4" },
        { key: "C", text: t`$2.25$`, correct: true, value: "9/4" },
        { key: "D", text: t`$2.5$`, correct: false, misconceptionId: "C04-M1", value: "5/2" },
      ],
      solution: {
        steps: [
          t`Each value becomes $\frac{x_i - 5}{20}$, so do the same to the mean, in the same order.`,
          t`Subtract first: $50 - 5 = 45$.`,
          t`Then divide: $\frac{45}{20} = 2.25$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2023 Sep Q102" },
      stem: t`The mean of $10$ observations $x_1, x_2, \ldots, x_{10}$ is $\bar{x} = 20$. The value of $\sum_{i=1}^{10} \frac{3x_i - 4}{5}$ is:`,
      verify: { kind: "value", inputs: { n: "10", m: "20" }, params: { ask: "sum", steps: "*3,-4,/5" } },
      options: [
        { key: "A", text: t`$120$`, correct: false, misconceptionId: "C04-M1", value: "120" },
        { key: "B", text: t`$11.2$`, correct: false, misconceptionId: "C04-M4", value: "56/5" },
        { key: "C", text: t`$128$`, correct: false, misconceptionId: "C04-M6", value: "128" },
        { key: "D", text: t`$112$`, correct: true, value: "112" },
      ],
      solution: {
        steps: [
          t`$\sum x_i = n\bar{x}$ $= 10 \times 20 = 200$.`,
          t`$\sum \frac{3x_i - 4}{5}$ $= \frac{3\sum x_i - 4 \times 10}{5}$: the $4$ is taken off once for each of the $10$ values.`,
          t`$= \frac{600 - 40}{5}$ $= \frac{560}{5} = 112$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q105" },
      stem: t`$\bar{x}$ is the mean of the observations $x_i$, and $x_i = a + cy_i$ for every $i$, where $c \ne 0$. The mean of the $y_i$ is:`,
      verify: { kind: "value", inputs: { xbar: "xbar", a: "a", c: "c" }, params: { ask: "inv", steps: "*c,+a" } },
      options: [
        { key: "A", text: t`$\frac{\bar{x}}{c} - a$`, correct: false, misconceptionId: "C04-M2", value: "-a + xbar/c" },
        { key: "B", text: t`$\frac{\bar{x} + a}{c}$`, correct: false, misconceptionId: "C04-M6", value: "(a + xbar)/c" },
        { key: "C", text: t`$\frac{\bar{x} - a}{c}$`, correct: true, value: "(-a + xbar)/c" },
        { key: "D", text: t`$\frac{\bar{x}}{c}$`, correct: false, misconceptionId: "C04-M1", value: "xbar/c" },
      ],
      solution: {
        steps: [
          t`Take the mean of both sides of $x_i = a + cy_i$: $\bar{x} = a + c\bar{y}$.`,
          t`Undo in reverse order: subtract $a$ to get $\bar{x} - a = c\bar{y}$.`,
          t`Then divide by $c$: $\bar{y} = \frac{\bar{x} - a}{c}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q112" },
      stem: t`The arithmetic mean of $50$ observations is $40$. Later it was found that the observation $59$ had been wrongly read as $89$. The correct arithmetic mean is:`,
      verify: { kind: "value", inputs: { n: "50", m: "40", wrong: "89", right: "59" }, params: { ask: "fix" } },
      options: [
        { key: "A", text: t`$39$`, correct: false, misconceptionId: "C04-M3", value: "39" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C04-M4", value: "10" },
        { key: "C", text: t`$40.6$`, correct: false, misconceptionId: "C04-M6", value: "203/5" },
        { key: "D", text: t`$39.4$`, correct: true, value: "197/5" },
      ],
      solution: {
        steps: [
          t`The total is $50 \times 40 = 2000$.`,
          t`Take out $89$ and put in $59$: $2000 - 89 + 59 = 1970$, still $50$ observations.`,
          t`The correct mean is $\frac{1970}{50} = 39.4$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q112" },
      stem: t`The mean of $12$ observations is $75$. Two observations are discarded, and the mean of the remaining observations is $65$. The mean of the two discarded observations is:`,
      verify: { kind: "value", inputs: { n: "12", m: "75", k: "2", m2: "65" }, params: { ask: "drop" } },
      options: [
        { key: "A", text: t`$-125$`, correct: false, misconceptionId: "C04-M6", value: "-125" },
        { key: "B", text: t`$125$`, correct: true, value: "125" },
        { key: "C", text: t`$250$`, correct: false, misconceptionId: "C04-M4", value: "250" },
        { key: "D", text: t`$60$`, correct: false, misconceptionId: "C04-M5", value: "60" },
      ],
      solution: {
        steps: [
          t`The total of all $12$ is $12 \times 75 = 900$.`,
          t`The $10$ left have total $10 \times 65 = 650$.`,
          t`The two discarded total $900 - 650 = 250$, so their mean is $\frac{250}{2} = 125$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q112" },
      stem: t`The mean of the observations $x_1, x_2, \ldots, x_n$ is $\bar{x}$. If $x_n$ is replaced by $k$, the new mean is:`,
      verify: { kind: "value", inputs: { n: "n", m: "xbar", wrong: "x_n", right: "k" }, params: { ask: "fix" } },
      options: [
        { key: "A", text: t`$\frac{n\bar{x} - x_n + k}{n}$`, correct: true, value: "(k + n*xbar - x_n)/n" },
        { key: "B", text: t`$\frac{n\bar{x} - x_n}{n - 1}$`, correct: false, misconceptionId: "C04-M3", value: "(n*xbar - x_n)/(n - 1)" },
        { key: "C", text: t`$\bar{x} - x_n + k$`, correct: false, misconceptionId: "C04-M4", value: "k - x_n + xbar" },
        { key: "D", text: t`$\frac{n\bar{x} + x_n - k}{n}$`, correct: false, misconceptionId: "C04-M6", value: "(-k + n*xbar + x_n)/n" },
      ],
      solution: {
        steps: [
          t`The total is $n\bar{x}$.`,
          t`Take out $x_n$ and put in $k$: the new total is $n\bar{x} - x_n + k$, still $n$ observations.`,
          t`The new mean is $\frac{n\bar{x} - x_n + k}{n}$.`,
        ],
      },
    },
  ],
};
