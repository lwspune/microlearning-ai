import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** A faint number line from x0 to x1 at height y: always present. */
const line = (x0: number, x1: number, y = 0): FigureElement => ({ kind: "segment", from: [x0, y], to: [x1, y], tone: "muted" });

/** An end of an interval at (x, y): a filled dot if it is in, a hollow one if not, with its number below. */
function end(x: number, y: number, label: string, inside: boolean, step?: number, tone?: FigureElement["tone"]): FigureElement[] {
  const at = step === undefined ? {} : { step };
  const colour = tone === undefined ? {} : { tone };
  return [
    { kind: "point", at: [x, y], ...(inside ? {} : { hollow: true }), ...at, ...colour },
    { kind: "label", at: [x, y], label, labelAt: "s", tone: "muted", ...at },
  ];
}

/** The formal slides' frames: two or three rows of number line. */
const rows2 = { x: [-0.6, 5.6] as [number, number], y: [-1.1, 1.1] as [number, number] };
const rows3 = { x: [-0.6, 5.6] as [number, number], y: [-1.6, 1.6] as [number, number] };

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`$x$ is a real number with $0 \le x < 1$. **What is the largest value $x$ can take?**`,
    reveal: t`There isn't one. $0.9$, $0.99$, $0.999$, ... are all allowed, and past any of them there is a bigger one still below $1$. So you can't name a last element. Instead you name the boundary, $1$, and mark it as left out: $[0, 1)$. The square bracket says $0$ is in; the round one says $1$ is not.`,
  },
  explanation: {
    intuition: [
      t`A **real number** is any point on the number line, like $-2$, $0.5$ or $\sqrt{2}$.`,
      t`An **interval** is all the real numbers between two **ends**, with no gaps.`,
      t`A **square bracket** $[\ ]$, drawn as a filled dot, says that end belongs: $[-6, -3]$.`,
      t`A **round bracket** $(\ )$, drawn as a hollow dot, says that end is left out: $(-1, 2)$.`,
      t`**Infinity**, $\infty$, is not a number: it only says the set runs on for ever.`,
      t`So $\infty$ can never belong, and it always gets a round bracket: $[4, \infty)$.`,
    ],
    formal: [
      {
        title: "Closed and open intervals",
        points: [
          t`A colon, like the slash, reads "such that": $\{x \in R : x > 2\}$ is every $x$ in $R$, the set of real numbers, with $x > 2$.`,
          t`Take any two real numbers $a < b$.`,
          t`The **closed** interval $[a, b]$ is $\{x \in R : a \le x \le b\}$: both ends are in.`,
          t`The **open** interval $(a, b)$ is $\{x \in R : a < x < b\}$: both ends are out.`,
        ],
        figure: {
          alt: "Two number lines, each with a and b marked. On the top one, a filled dot at a and at b, joined, mark the closed interval [a, b]. On the bottom one, a hollow dot at a and at b, joined, mark the open interval (a, b).",
          axes: "none",
          view: rows2,
          elements: [
            line(-0.4, 5.4, 0.5),
            line(-0.4, 5.4, -0.5),
            { kind: "label", at: [1, 0.5], label: "a", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [4, 0.5], label: "b", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [1, -0.5], label: "a", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [4, -0.5], label: "b", labelAt: "s", tone: "muted", step: 2 },
            { kind: "segment", from: [1, 0.5], to: [4, 0.5], step: 3 },
            { kind: "point", at: [1, 0.5], step: 3 },
            { kind: "point", at: [4, 0.5], step: 3 },
            { kind: "label", at: [2.5, 0.5], label: "[a, b]", labelAt: "n", step: 3 },
            { kind: "segment", from: [1, -0.5], to: [4, -0.5], step: 4 },
            { kind: "point", at: [1, -0.5], hollow: true, step: 4 },
            { kind: "point", at: [4, -0.5], hollow: true, step: 4 },
            { kind: "label", at: [2.5, -0.5], label: "(a, b)", labelAt: "n", step: 4 },
          ],
        },
      },
      {
        title: "Semi-open intervals",
        points: [
          t`An interval with one end in and the other end out is **semi-open**.`,
          t`$[a, b)$ is $\{x \in R : a \le x < b\}$: $a$ is in, $b$ is out.`,
          t`$(a, b]$ is $\{x \in R : a < x \le b\}$: $a$ is out, $b$ is in.`,
          t`So $\le$ or $\ge$ gives a square bracket, and $<$ or $>$ gives a round one.`,
        ],
        figure: {
          alt: "Two number lines, each with a and b marked. On the top one, a filled dot at a and a hollow dot at b, joined, mark [a, b). On the bottom one, a hollow dot at a and a filled dot at b, joined, mark (a, b].",
          axes: "none",
          view: rows2,
          elements: [
            line(-0.4, 5.4, 0.5),
            line(-0.4, 5.4, -0.5),
            { kind: "segment", from: [1, 0.5], to: [4, 0.5], step: 2 },
            ...end(1, 0.5, "a", true, 2),
            ...end(4, 0.5, "b", false, 2),
            { kind: "label", at: [2.5, 0.5], label: "[a, b)", labelAt: "n", step: 2 },
            { kind: "segment", from: [1, -0.5], to: [4, -0.5], step: 3 },
            ...end(1, -0.5, "a", false, 3),
            ...end(4, -0.5, "b", true, 3),
            { kind: "label", at: [2.5, -0.5], label: "(a, b]", labelAt: "n", step: 3 },
          ],
        },
      },
      {
        title: "Rays running right",
        points: [
          t`A **ray** is an interval with only one end: on the other side it runs on for ever.`,
          t`$[a, \infty)$ is $\{x \in R : x \ge a\}$: from $a$ rightwards, with $a$ in.`,
          t`$(a, \infty)$ is $\{x \in R : x > a\}$: the same, with $a$ out.`,
          t`$\infty$ is never reached, so it always takes a round bracket.`,
        ],
        figure: {
          alt: "Two number lines with a marked. On the top one, a filled dot at a with an arrow running off to the right marks [a, ∞). On the bottom one, a hollow dot at a with an arrow running off to the right marks (a, ∞).",
          axes: "none",
          view: rows2,
          elements: [
            line(-0.4, 5.4, 0.5),
            line(-0.4, 5.4, -0.5),
            { kind: "vector", from: [1.5, 0.5], to: [5.4, 0.5], step: 2 },
            ...end(1.5, 0.5, "a", true, 2),
            { kind: "label", at: [3.5, 0.5], label: "[a, ∞)", labelAt: "n", step: 2 },
            { kind: "vector", from: [1.5, -0.5], to: [5.4, -0.5], step: 3 },
            ...end(1.5, -0.5, "a", false, 3),
            { kind: "label", at: [3.5, -0.5], label: "(a, ∞)", labelAt: "n", step: 3 },
          ],
        },
      },
      {
        title: "Rays running left",
        points: [
          t`$(-\infty, b]$ is $\{x \in R : x \le b\}$: everything up to $b$, with $b$ in.`,
          t`$(-\infty, b)$ is $\{x \in R : x < b\}$: the same, with $b$ out.`,
          t`$-\infty$ is never reached either, so it too takes a round bracket.`,
          t`With no end at all, $(-\infty, \infty)$ is the whole number line, $R$.`,
        ],
        figure: {
          alt: "Three number lines. On the top one, a filled dot at b with an arrow running off to the left marks (−∞, b]. On the middle one, a hollow dot at b with an arrow to the left marks (−∞, b). On the bottom one, arrows run off both ends: (−∞, ∞) is the whole line, R.",
          axes: "none",
          view: rows3,
          elements: [
            line(-0.4, 5.4, 1),
            line(-0.4, 5.4, 0),
            line(-0.4, 5.4, -1),
            { kind: "vector", from: [3.5, 1], to: [-0.4, 1], step: 1 },
            ...end(3.5, 1, "b", true, 1),
            { kind: "label", at: [1.5, 1], label: "(−∞, b]", labelAt: "n", step: 1 },
            { kind: "vector", from: [3.5, 0], to: [-0.4, 0], step: 2 },
            ...end(3.5, 0, "b", false, 2),
            { kind: "label", at: [1.5, 0], label: "(−∞, b)", labelAt: "n", step: 2 },
            { kind: "vector", from: [2.5, -1], to: [-0.4, -1], step: 4 },
            { kind: "vector", from: [2.5, -1], to: [5.4, -1], step: 4 },
            { kind: "label", at: [2.5, -1], label: "(−∞, ∞) = R", labelAt: "n", step: 4 },
          ],
        },
      },
      {
        title: "Turn the inequality round",
        points: [
          t`Sometimes the inequality has $x$ on the right, as in $10 < x$.`,
          t`Turn it round first, so that $x$ comes first: $10 < x$ says $x > 10$.`,
          t`So the set is every real number above $10$: $(10, \infty)$, running right.`,
          t`In the same way, $3 > x$ says $x < 3$, so the set runs left: $(-\infty, 3)$.`,
        ],
        figure: {
          alt: "A number line from 0 to 13. A hollow dot at 10 with an arrow running off to the right marks (10, ∞). A hollow dot at 3 with an arrow running off to the left marks (−∞, 3).",
          axes: "none",
          view: { x: [-1.1, 14.1], y: [-1, 1] },
          elements: [
            line(-0.9, 13.9),
            { kind: "vector", from: [10, 0], to: [13.9, 0], step: 3 },
            ...end(10, 0, "10", false, 3),
            { kind: "label", at: [12, 0], label: "(10, ∞)", labelAt: "n", step: 3 },
            { kind: "vector", from: [3, 0], to: [-0.9, 0], step: 4 },
            ...end(3, 0, "3", false, 4),
            { kind: "label", at: [1, 0], label: "(−∞, 3)", labelAt: "n", step: 4 },
          ],
        },
      },
      {
        title: "Real numbers, not whole numbers",
        points: [
          t`In an interval, $x$ is real, so fractions and decimals count too.`,
          t`$(0, 3]$ holds $0.1$, $0.001$ and every real number up to $3$.`,
          t`There is no next number after $0$: half of any number above $0$ is smaller still.`,
          t`So $(0, 3]$ is not $[1, 3]$, which leaves out $0.5$, for one.`,
        ],
        figure: {
          alt: "Two number lines from 0 to 3. On the top one, a hollow dot at 0 and a filled dot at 3, joined, mark (0, 3], with the point 0.5 inside it. On the bottom one, in red, filled dots at 1 and 3, joined, mark [1, 3], which misses 0.5.",
          axes: "none",
          view: { x: [-0.8, 3.8], y: [-0.9, 0.9] },
          elements: [
            line(-0.6, 3.6, 0.4),
            line(-0.6, 3.6, -0.4),
            { kind: "segment", from: [0, 0.4], to: [3, 0.4], step: 2 },
            ...end(0, 0.4, "0", false, 2),
            ...end(3, 0.4, "3", true, 2),
            { kind: "label", at: [1.5, 0.4], label: "(0, 3]", labelAt: "n", step: 2 },
            { kind: "point", at: [0.5, 0.4], label: "0.5", labelAt: "n", tone: "good", step: 4 },
            { kind: "segment", from: [1, -0.4], to: [3, -0.4], tone: "bad", step: 4 },
            ...end(1, -0.4, "1", true, 4, "bad"),
            ...end(3, -0.4, "3", true, 4, "bad"),
            { kind: "label", at: [2, -0.4], label: "[1, 3]", labelAt: "n", tone: "bad", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Write $\{x \in R : x \le -2\}$ in interval notation, and write $(1, 8]$ in set-builder form.`,
      steps: [
        t`$x \le -2$ allows $-2$ itself, so that end gets a square bracket: $-2]$.`,
        t`There is no lower limit: the set runs left for ever. $-\infty$ is never reached, so it gets a round bracket: $(-\infty, -2]$.`,
        t`In $(1, 8]$, the round bracket says $1$ is out, so $1 < x$; the square bracket says $8$ is in, so $x \le 8$.`,
        t`Every real number between them is in, so $(1, 8]$ is $\{x \in R : 1 < x \le 8\}$.`,
      ],
      answer: t`$\{x \in R : x \le -2\}$ is $(-\infty, -2]$, and $(1, 8]$ is $\{x \in R : 1 < x \le 8\}$.`,
      figure: {
        alt: "A number line from −5 to 9. A filled dot at −2 with an arrow running off to the left marks (−∞, −2]. A hollow dot at 1 and a filled dot at 8, joined, mark (1, 8].",
        axes: "none",
        view: { x: [-6.1, 10.1], y: [-1, 1] },
        elements: [
          { kind: "segment", from: [-5.9, 0], to: [9.9, 0], tone: "muted" },
          { kind: "vector", from: [-2, 0], to: [-5.9, 0], step: 2 },
          { kind: "point", at: [-2, 0], step: 1 },
          { kind: "label", at: [-2, 0], label: "−2", labelAt: "s", tone: "muted", step: 1 },
          { kind: "label", at: [-4, 0], label: "(−∞, −2]", labelAt: "n", step: 2 },
          { kind: "segment", from: [1, 0], to: [8, 0], step: 4 },
          { kind: "point", at: [1, 0], hollow: true, step: 3 },
          { kind: "point", at: [8, 0], step: 3 },
          { kind: "label", at: [1, 0], label: "1", labelAt: "s", tone: "muted", step: 3 },
          { kind: "label", at: [8, 0], label: "8", labelAt: "s", tone: "muted", step: 3 },
          { kind: "label", at: [4.5, 0], label: "(1, 8]", labelAt: "n", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A number line from −6 to 6 with three intervals. [−6, −3] has filled dots at both ends: both ends are in. (−1, 2) has hollow dots at both ends: both ends are out. [4, ∞) has a filled dot at 4 and an arrow running off to the right: there is no right end, so ∞ gets a round bracket.",
      axes: "none",
      view: { x: [-7.1, 7.1], y: [-1, 1] },
      elements: [
        line(-6.9, 6.9),
        { kind: "segment", from: [-6, 0], to: [-3, 0], step: 2 },
        { kind: "label", at: [-6, 0], label: "−6", labelAt: "s", tone: "muted", step: 2 },
        { kind: "label", at: [-3, 0], label: "−3", labelAt: "s", tone: "muted", step: 2 },
        { kind: "point", at: [-6, 0], step: 3 },
        { kind: "point", at: [-3, 0], step: 3 },
        { kind: "label", at: [-4.5, 0], label: "[−6, −3]", labelAt: "n", step: 3 },
        { kind: "segment", from: [-1, 0], to: [2, 0], step: 4 },
        ...end(-1, 0, "−1", false, 4),
        ...end(2, 0, "2", false, 4),
        { kind: "label", at: [0.5, 0], label: "(−1, 2)", labelAt: "n", step: 4 },
        { kind: "vector", from: [4, 0], to: [6.9, 0], step: 5 },
        ...end(4, 0, "4", true, 5),
        { kind: "label", at: [5.5, 0], label: "[4, ∞)", labelAt: "n", step: 6 },
      ],
    },
    visualSpec: t`Drag two end markers along a number line, tap each to switch it between filled and hollow, or push it off the end to $\pm\infty$; the interval and its set-builder form update together.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Reads the brackets the wrong way round: a round bracket for an end that is in, a square one for an end that is out",
      remediation: t`A square bracket means the end is in (the inequality has $\le$ or $\ge$); a round bracket means it is out ($<$ or $>$).`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Treats $x$ as a whole number: replaces an end that is left out by the next whole number, closed (so $x > 2$ becomes $[3, \ldots$)`,
      remediation: t`$x$ is real, so there is no next number after the end: numbers just past it, like $2.1$ and $2.001$, are in. Keep the end and give it a round bracket.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: "Gives every finite end a square bracket, whether or not the inequality is strict",
      remediation: t`Check each end on its own: $\le$ or $\ge$ puts the end in (square bracket); $<$ or $>$ leaves it out (round bracket).`,
      fallback: { kind: "ext", topic: "inequalities on the number line" },
    },
    {
      id: "C09-M4",
      mistake: t`Reads an inequality with $x$ on the right backwards, taking $a < x$ to mean $x < a$`,
      remediation: t`Turn it round so $x$ comes first: $a < x$ says $x > a$, so the set runs right from $a$; $a > x$ says $x < a$, so it runs left.`,
      fallback: { kind: "ext", topic: "inequalities on the number line" },
    },
  ],
  engineNotes: [
    t`C09-M3 gives the same set as C09-M1 when every finite end is out (open intervals, strict rays) and the key when every finite end is in; test it on semi-open intervals. C09-M2 gives the key when no finite end is out and needs whole-number ends. C09-M4 applies only to one-sided sets written with $x$ on the right.`,
    t`Writing a square bracket at $\infty$, as in $[6, \infty]$, is not a set of real numbers, so it can't be an option value; it is taught in the text (the one-liner and the rays section), not tested.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q12(vi)" },
      stem: t`Write the set $\{x \in R : -3 \le x < 4\}$ in interval notation.`,
      verify: { kind: "value", inputs: { a: "-3", b: "4" }, params: { l: "<=", r: "<" } },
      options: [
        { key: "A", text: t`$\left[-3, 3\right]$`, correct: false, misconceptionId: "C09-M2", value: "Interval(-3, 3)" },
        { key: "B", text: t`$\left[-3, 4\right]$`, correct: false, misconceptionId: "C09-M3", value: "Interval(-3, 4)" },
        { key: "C", text: t`$\left[-3, 4\right)$`, correct: true, value: "Interval.Ropen(-3, 4)" },
        { key: "D", text: t`$\left(-3, 4\right]$`, correct: false, misconceptionId: "C09-M1", value: "Interval.Lopen(-3, 4)" },
      ],
      solution: {
        steps: [
          t`$-3 \le x$: $-3$ is in, so a square bracket on the left: $[-3$.`,
          t`$x < 4$: $4$ is out, so a round bracket on the right: $4)$.`,
          t`Every real number between is in, $3.9$ and $3.99$ too: $[-3, 4)$.`,
        ],
        figure: {
          alt: "A number line from −5 to 6: a filled dot at −3 and a hollow dot at 4, joined, mark [−3, 4).",
          axes: "none",
          view: { x: [-6.1, 7.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [-5.9, 0], to: [6.9, 0], tone: "muted" },
            { kind: "segment", from: [-3, 0], to: [4, 0], step: 3, tone: "good" },
            { kind: "point", at: [-3, 0], step: 1, tone: "good" },
            { kind: "point", at: [4, 0], hollow: true, step: 2, tone: "good" },
            { kind: "label", at: [-3, 0], label: "−3", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [4, 0], label: "4", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [0.5, 0], label: "[−3, 4)", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q12(v)" },
      stem: t`Write the set $\{x \in R : 2 < x \le 5\}$ in interval notation.`,
      verify: { kind: "value", inputs: { a: "2", b: "5" }, params: { l: "<", r: "<=" } },
      options: [
        { key: "A", text: t`$\left(2, 5\right]$`, correct: true, value: "Interval.Lopen(2, 5)" },
        { key: "B", text: t`$\left[2, 5\right)$`, correct: false, misconceptionId: "C09-M1", value: "Interval.Ropen(2, 5)" },
        { key: "C", text: t`$\left[3, 5\right]$`, correct: false, misconceptionId: "C09-M2", value: "Interval(3, 5)" },
        { key: "D", text: t`$\left[2, 5\right]$`, correct: false, misconceptionId: "C09-M3", value: "Interval(2, 5)" },
      ],
      solution: {
        steps: [
          t`$2 < x$: $2$ is out, so a round bracket on the left: $(2$.`,
          t`$x \le 5$: $5$ is in, so a square bracket on the right: $5]$.`,
          t`Every real number between is in, $2.01$ and $2.5$ too, so the set doesn't start at $3$: $(2, 5]$.`,
        ],
        figure: {
          alt: "A number line from 0 to 7: a hollow dot at 2 and a filled dot at 5, joined, mark (2, 5].",
          axes: "none",
          view: { x: [-1.1, 8.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [-0.9, 0], to: [7.9, 0], tone: "muted" },
            { kind: "segment", from: [2, 0], to: [5, 0], step: 3, tone: "good" },
            { kind: "point", at: [2, 0], hollow: true, step: 1, tone: "good" },
            { kind: "point", at: [5, 0], step: 2, tone: "good" },
            { kind: "label", at: [2, 0], label: "2", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [5, 0], label: "5", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [3.5, 0], label: "(2, 5]", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q12(iii)" },
      stem: t`Write the set $\{x \in R : 6 < x\}$ in interval notation.`,
      verify: { kind: "value", inputs: { a: "6", b: "oo" }, params: { l: "<", r: "<" } },
      options: [
        { key: "A", text: t`$\left[6, \infty\right)$`, correct: false, misconceptionId: "C09-M1", value: "Interval(6, oo)" },
        { key: "B", text: t`$\left[7, \infty\right)$`, correct: false, misconceptionId: "C09-M2", value: "Interval(7, oo)" },
        { key: "C", text: t`$\left(-\infty, 6\right)$`, correct: false, misconceptionId: "C09-M4", value: "Interval.open(-oo, 6)" },
        { key: "D", text: t`$\left(6, \infty\right)$`, correct: true, value: "Interval.open(6, oo)" },
      ],
      solution: {
        steps: [
          t`$6 < x$ says $x > 6$. $6$ itself is out, so a round bracket: $(6$.`,
          t`Numbers just above $6$, like $6.01$, are in, and the set runs right for ever. $\infty$ always gets a round bracket: $(6, \infty)$.`,
        ],
        figure: {
          alt: "A number line from 3 to 10: a hollow dot at 6 with an arrow running off to the right marks (6, ∞).",
          axes: "none",
          view: { x: [1.9, 11.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [2.1, 0], to: [10.9, 0], tone: "muted" },
            { kind: "vector", from: [6, 0], to: [10.9, 0], step: 2, tone: "good" },
            { kind: "point", at: [6, 0], hollow: true, step: 1, tone: "good" },
            { kind: "label", at: [6, 0], label: "6", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [8, 0], label: "(6, ∞)", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/Ex 5.1 Q12(iv)" },
      stem: t`Write the set $\{x \in R : 5 > x\}$ in interval notation.`,
      verify: { kind: "value", inputs: { a: "-oo", b: "5" }, params: { l: "<", r: "<" } },
      options: [
        { key: "A", text: t`$\left(-\infty, 5\right)$`, correct: true, value: "Interval.open(-oo, 5)" },
        { key: "B", text: t`$\left(-\infty, 5\right]$`, correct: false, misconceptionId: "C09-M1", value: "Interval(-oo, 5)" },
        { key: "C", text: t`$\left(-\infty, 4\right]$`, correct: false, misconceptionId: "C09-M2", value: "Interval(-oo, 4)" },
        { key: "D", text: t`$\left(5, \infty\right)$`, correct: false, misconceptionId: "C09-M4", value: "Interval.open(5, oo)" },
      ],
      solution: {
        steps: [
          t`$5 > x$ says $x < 5$. $5$ itself is out, so a round bracket: $5)$.`,
          t`Every real number below $5$ is in, $4.9$ too, and there is no lower limit: $(-\infty, 5)$.`,
        ],
        figure: {
          alt: "A number line from 1 to 8: a hollow dot at 5 with an arrow running off to the left marks (−∞, 5).",
          axes: "none",
          view: { x: [-0.1, 9.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [0.1, 0], to: [8.9, 0], tone: "muted" },
            { kind: "vector", from: [5, 0], to: [0.1, 0], step: 2, tone: "good" },
            { kind: "point", at: [5, 0], hollow: true, step: 1, tone: "good" },
            { kind: "label", at: [5, 0], label: "5", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [3, 0], label: "(−∞, 5)", labelAt: "n", step: 2 },
          ],
        },
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sets-relations-11/5.1.6 SolvedEx.1(a)" },
      stem: t`Solving an inequality leaves $-6 < x \le 2$, with $x$ real. Which interval is the solution set?`,
      verify: { kind: "value", inputs: { a: "-6", b: "2" }, params: { l: "<", r: "<=" } },
      options: [
        { key: "A", text: t`$\left[-5, 2\right]$`, correct: false, misconceptionId: "C09-M2", value: "Interval(-5, 2)" },
        { key: "B", text: t`$\left[-6, 2\right]$`, correct: false, misconceptionId: "C09-M3", value: "Interval(-6, 2)" },
        { key: "C", text: t`$\left(-6, 2\right]$`, correct: true, value: "Interval.Lopen(-6, 2)" },
        { key: "D", text: t`$\left[-6, 2\right)$`, correct: false, misconceptionId: "C09-M1", value: "Interval.Ropen(-6, 2)" },
      ],
      solution: {
        steps: [
          t`$-6 < x$: $-6$ is out, so a round bracket on the left: $(-6$.`,
          t`$x \le 2$: $2$ is in, so a square bracket on the right: $2]$.`,
          t`Every real number between is in, $-5.9$ too: $(-6, 2]$.`,
        ],
        figure: {
          alt: "A number line from −8 to 4: a hollow dot at −6 and a filled dot at 2, joined, mark (−6, 2].",
          axes: "none",
          view: { x: [-9.1, 5.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [-8.9, 0], to: [4.9, 0], tone: "muted" },
            { kind: "segment", from: [-6, 0], to: [2, 0], step: 3, tone: "good" },
            { kind: "point", at: [-6, 0], hollow: true, step: 1, tone: "good" },
            { kind: "point", at: [2, 0], step: 2, tone: "good" },
            { kind: "label", at: [-6, 0], label: "−6", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [2, 0], label: "2", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [-2, 0], label: "(−6, 2]", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "authored" },
      stem: t`The number line shows a set of real numbers. Which interval is it?`,
      figure: {
        alt: "A number line from −3 to 5. The stretch from −1 to 3 is marked, with a filled dot at −1 and a hollow dot at 3.",
        axes: "none",
        view: { x: [-4.1, 6.1], y: [-1, 1] },
        elements: [
          { kind: "segment", from: [-3.9, 0], to: [5.9, 0], tone: "muted" },
          { kind: "segment", from: [-1, 0], to: [3, 0] },
          { kind: "point", at: [-1, 0] },
          { kind: "point", at: [3, 0], hollow: true },
          { kind: "label", at: [-1, 0], label: "−1", labelAt: "s", tone: "muted" },
          { kind: "label", at: [3, 0], label: "3", labelAt: "s", tone: "muted" },
        ],
      },
      verify: { kind: "value", inputs: { a: "-1", b: "3" }, params: { l: "<=", r: "<" } },
      options: [
        { key: "A", text: t`$\left[-1, 3\right]$`, correct: false, misconceptionId: "C09-M3", value: "Interval(-1, 3)" },
        { key: "B", text: t`$\left[-1, 3\right)$`, correct: true, value: "Interval.Ropen(-1, 3)" },
        { key: "C", text: t`$\left(-1, 3\right]$`, correct: false, misconceptionId: "C09-M1", value: "Interval.Lopen(-1, 3)" },
        { key: "D", text: t`$\left[-1, 2\right]$`, correct: false, misconceptionId: "C09-M2", value: "Interval(-1, 2)" },
      ],
      solution: {
        steps: [
          t`The filled dot at $-1$: $-1$ is in, so a square bracket: $[-1$.`,
          t`The hollow dot at $3$: $3$ is out, so a round bracket: $3)$.`,
          t`Every point between is in, $2.9$ too: $[-1, 3)$.`,
        ],
        figure: {
          alt: "A number line from −3 to 5: a filled dot at −1 and a hollow dot at 3, joined, mark [−1, 3).",
          axes: "none",
          view: { x: [-4.1, 6.1], y: [-1, 1] },
          elements: [
            { kind: "segment", from: [-3.9, 0], to: [5.9, 0], tone: "muted" },
            { kind: "segment", from: [-1, 0], to: [3, 0], step: 3, tone: "good" },
            { kind: "point", at: [-1, 0], step: 1, tone: "good" },
            { kind: "point", at: [3, 0], hollow: true, step: 2, tone: "good" },
            { kind: "label", at: [-1, 0], label: "−1", labelAt: "s", tone: "muted", step: 1 },
            { kind: "label", at: [3, 0], label: "3", labelAt: "s", tone: "muted", step: 2 },
            { kind: "label", at: [1, 0], label: "[−1, 3)", labelAt: "n", step: 3 },
          ],
        },
      },
    },
  ],
};
