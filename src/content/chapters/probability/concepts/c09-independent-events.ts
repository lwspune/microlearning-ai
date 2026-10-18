import type { Concept, Figure, FigureElement } from "../../../types.ts";

const t = String.raw;

// The area square: all outcomes as a square of area 1 (drawn 4 by 4), A in the left strip of
// width p = 0.4, B in the bottom strip of height q = 0.3. Each piece's area is its probability.
const S = 4;
const X = 1.6;
const Y = 1.2;

function rect(x0: number, x1: number, y0: number, y1: number, tone: FigureElement["tone"], step?: number): FigureElement {
  return {
    kind: "region",
    within: [
      { kind: "halfPlane", through: [[x0, y1], [x0, y0]] },
      { kind: "halfPlane", through: [[x1, y0], [x1, y1]] },
      { kind: "halfPlane", through: [[x0, y0], [x1, y0]] },
      { kind: "halfPlane", through: [[x1, y1], [x0, y1]] },
    ],
    tone,
    ...(step === undefined ? {} : { step }),
  };
}

function square(step?: number): FigureElement[] {
  const at = step === undefined ? {} : { step };
  return [
    { kind: "segment", from: [0, 0], to: [S, 0], tone: "muted", ...at },
    { kind: "segment", from: [S, 0], to: [S, S], tone: "muted", ...at },
    { kind: "segment", from: [S, S], to: [0, S], tone: "muted", ...at },
    { kind: "segment", from: [0, S], to: [0, 0], tone: "muted", ...at },
  ];
}

function strips(step?: number): FigureElement[] {
  const at = step === undefined ? {} : { step };
  return [
    { kind: "segment", from: [X, 0], to: [X, S], ...at },
    { kind: "segment", from: [0, Y], to: [S, Y], ...at },
    { kind: "label", at: [X / 2, 0], label: "p", labelAt: "s", ...at },
    { kind: "label", at: [(X + S) / 2, 0], label: "1 − p", labelAt: "s", ...at },
    { kind: "label", at: [0, Y / 2], label: "q", labelAt: "w", ...at },
    { kind: "label", at: [0, (Y + S) / 2], label: "1 − q", labelAt: "w", ...at },
    { kind: "label", at: [X / 2, S], label: "A", labelAt: "n", ...at },
    { kind: "label", at: [(X + S) / 2, S], label: "A′", labelAt: "n", ...at },
    { kind: "label", at: [S, Y / 2], label: "B", labelAt: "e", ...at },
    { kind: "label", at: [S, (Y + S) / 2], label: "B′", labelAt: "e", ...at },
  ];
}

function area(x0: number, x1: number, y0: number, y1: number, label: string, step?: number): FigureElement {
  return { kind: "label", at: [(x0 + x1) / 2, (y0 + y1) / 2 - 0.25], label, labelAt: "n", ...(step === undefined ? {} : { step }) };
}

const view: Figure["view"] = { x: [-1.4, 5.2], y: [-0.9, 4.9] };

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Three friends each try a puzzle on their own, and each solves it with probability $\frac{1}{2}$. **Is the chance that someone solves it $\frac{1}{2} + \frac{1}{2} + \frac{1}{2}$?**`,
    reveal: t`No: that is $\frac{3}{2}$, more than $1$. Adding counts the cases where two or three of them solve it more than once. Go the other way: all three fail with probability $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$, so at least one solves it with probability $1 - \frac{1}{8} = \frac{7}{8}$.`,
  },
  explanation: {
    intuition: [
      t`Two events are **independent** when one happening does not change the chance of the other.`,
      t`A coin and a die, draws with replacement, and two people working on their own are all independent.`,
      t`Then the chance that both happen is the product of their two chances.`,
      t`Their failures are independent too, so the chances of failing multiply as well.`,
      t`For a compound event, list its **patterns** (which events happen, which fail), multiply along each, then add them.`,
      t`'At least one' is quickest as $1 - P(\text{none})$, where 'none' means every event fails.`,
    ],
    formal: [
      {
        title: "Independent events",
        points: [
          t`Recall: $P(B \mid A)$ is the chance of $B$ once we know $A$ has happened.`,
          t`Recall the multiplication theorem: $P(A \cap B) = P(A)\,P(B \mid A)$.`,
          t`$A$ and $B$ are **independent** if $P(B \mid A) = P(B)$.`,
          t`Then the theorem becomes $P(A \cap B) = P(A)\,P(B)$.`,
          t`This product rule is the usual test: $A$ and $B$ are independent exactly when it holds.`,
        ],
      },
      {
        title: "Cards with and without replacement",
        points: [
          t`Draw two cards one after the other; the first is a red card that is not a face card.`,
          t`A **face card** is a jack, queen or king: $12$ of the $52$ cards.`,
          t`With replacement, the chance that the second card is a face card is $\frac{12}{52}$.`,
          t`That equals $P(\text{face card})$, so the two draws are independent.`,
          t`Without replacement it is $\frac{12}{51}$, so the two draws are not independent.`,
        ],
      },
      {
        title: "Complements are independent too",
        points: [
          t`Recall: $A'$, the complement of $A$, is the event that $A$ does not happen.`,
          t`If $A$ and $B$ are independent, so are $A$ and $B'$.`,
          t`So are $A'$ and $B$, and $A'$ and $B'$.`,
          t`For example, $P(A \cap B') = P(A)\,[1 - P(B)]$.`,
          t`This holds for any number of independent events.`,
        ],
      },
      {
        title: "Independent is not mutually exclusive",
        points: [
          t`Recall: **mutually exclusive** events cannot happen together, so $P(A \cap B) = 0$.`,
          t`Independent events can happen together: $P(A \cap B) = P(A)\,P(B)$.`,
          t`So never just add the chances of independent events.`,
        ],
      },
      {
        title: "Both, or none",
        points: [
          t`Let $p = P(A)$ and $q = P(B)$, for independent events $A$ and $B$.`,
          t`Draw all the outcomes as a square of area $1$: each part's area is its probability.`,
          t`$A$ happens in a strip of width $p$, and $B$ in a strip of height $q$.`,
          t`Both happen where the strips cross: $P(A \cap B) = pq$.`,
          t`None happens in the far corner: $P(A' \cap B') = (1 - p)(1 - q)$.`,
          t`The failures multiply too, because $A'$ and $B'$ are independent.`,
        ],
        figure: {
          alt: "A square of area 1. A vertical line splits it into a left strip of width p, where A happens, and a right strip of width 1 − p, where A fails. A horizontal line splits it into a bottom strip of height q, where B happens, and a top strip of height 1 − q, where B fails. The bottom-left corner, area pq, is shaded for both; the top-right corner, area (1 − p)(1 − q), is shaded for none.",
          axes: "none",
          view,
          elements: [
            ...square(2),
            ...strips(3),
            rect(0, X, 0, Y, "good", 4),
            area(0, X, 0, Y, "pq", 4),
            rect(X, S, Y, S, "muted", 5),
            area(X, S, Y, S, "(1 − p)(1 − q)", 5),
          ],
        },
      },
      {
        title: "Exactly one, or at least one",
        points: [
          t`Exactly one happens in the two side pieces: $p(1 - q) + (1 - p)q$.`,
          t`'Exactly one' needs the other to fail: $p(1 - q)$, not just $p$.`,
          t`At least one adds 'both': it is everything outside the 'none' corner.`,
          t`So $P(\text{at least one}) = 1 - (1 - p)(1 - q)$.`,
          t`$1 - pq$ is 'not both', which also includes 'none'.`,
        ],
        figure: {
          alt: "The same square of area 1, split at p across and q up. The two side pieces, A without B with area p(1 − q) and B without A with area (1 − p)q, are shaded for exactly one. Then the corner pq is shaded too: everything except the top-right corner (1 − p)(1 − q) is at least one.",
          axes: "none",
          view,
          elements: [
            ...square(),
            ...strips(),
            rect(0, X, Y, S, "good", 1),
            area(0, X, Y, S, "p(1 − q)", 1),
            rect(X, S, 0, Y, "good", 1),
            area(X, S, 0, Y, "(1 − p)q", 1),
            rect(0, X, 0, Y, "good", 3),
            area(0, X, 0, Y, "pq", 3),
            area(X, S, Y, S, "(1 − p)(1 − q)"),
          ],
        },
      },
      {
        title: "Start from the odds",
        points: [
          t`Recall: odds in favour $a : b$ give $P = \frac{a}{a + b}$.`,
          t`Odds against $a : b$ give $P = \frac{b}{a + b}$.`,
          t`Convert each odds to a probability first, then multiply.`,
        ],
      },
    ],
    worked: {
      prompt: t`$A$, $B$ and $C$ try to hit a target independently, with probabilities $\frac{3}{4}$, $\frac{1}{2}$ and $\frac{5}{8}$. Find the probability that the target is not hit, that it is hit, and that it is hit by exactly one of them.`,
      steps: [
        t`The chances of missing: $P(A') = \frac{1}{4}$, $P(B') = \frac{1}{2}$, $P(C') = \frac{3}{8}$.`,
        t`Not hit means all three miss: $\frac{1}{4} \times \frac{1}{2} \times \frac{3}{8} = \frac{3}{64}$.`,
        t`Hit means at least one hits: $1 - \frac{3}{64} = \frac{61}{64}$.`,
        t`Exactly one: $A$ only $= \frac{3}{4} \times \frac{1}{2} \times \frac{3}{8} = \frac{9}{64}$, $B$ only $= \frac{1}{4} \times \frac{1}{2} \times \frac{3}{8} = \frac{3}{64}$, $C$ only $= \frac{1}{4} \times \frac{1}{2} \times \frac{5}{8} = \frac{5}{64}$. Add: $\frac{17}{64}$.`,
      ],
      answer: t`Not hit $\frac{3}{64}$; hit $\frac{61}{64}$; hit by exactly one $\frac{17}{64}$.`,
    },
    visualSpec: t`Two sliders set $P(A)$ and $P(B)$; a unit square split at $P(A)$ across and $P(B)$ down shades the rectangles for both, exactly one and none, each labelled with its area as a product.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Taking 'not both' for 'none', 'at least one' or 'exactly one': using $1 - P(A)\,P(B)$`,
      remediation: t`$1 - P(A)\,P(B)$ is the chance that not both happen: it lumps 'none' and 'exactly one' together. None is $P(A')\,P(B')$, at least one is $1 - P(A')\,P(B')$, and exactly one is $P(A)\,P(B') + P(A')\,P(B)$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C09-M2",
      mistake: t`Treating independent events as mutually exclusive: adding $P(A) + P(B)$ for 'at least one', or using $1 - [P(A) + P(B)]$ for 'none'`,
      remediation: t`Independent events can happen together, so adding their chances counts 'both' twice. Multiply the failures instead: $P(\text{none}) = P(A')\,P(B')$, and $P(\text{at least one}) = 1 - P(A')\,P(B')$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C09-M3",
      mistake: "For 'exactly one' or 'exactly two', multiplying only the chances of the events that happen and forgetting that the others must fail",
      remediation: t`Exactly one means one happens **and** the other fails: $P(A)\,P(B') + P(A')\,P(B)$. Every pattern carries a factor for each event, the misses included.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C09-M4",
      mistake: t`Answering the opposite event: stopping at $P(\text{none})$ when the question asks for 'at least one', or giving $1 -$ the right answer`,
      remediation: t`Check which event the question asks for before you finish. 'At least one' $= 1 - P(\text{none})$, so end with the subtraction; 'none', 'exactly one' and 'exactly two' are the patterns themselves, added up.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Reading odds against $a : b$ as odds in favour, so taking $P = \frac{a}{a + b}$`,
      remediation: t`Odds against $a : b$ means $a$ chances of failing to $b$ of happening, so $P = \frac{b}{a + b}$. Check 'for' or 'against' as you turn each odds into a probability, then multiply.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C09-M6",
      mistake: "Reading 'exactly one' as 'at least one' (or 'exactly two' as 'at least two'), so the cases where more of them happen are counted too",
      remediation: t`'Exactly $k$' leaves out the cases where more than $k$ happen. Add only the patterns with exactly $k$ successes and the rest failing.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C09-M5 needs an item that gives odds against. When every odds is against and the event is 'exactly one' of two, its answer equals the key ($p$ and $1 - p$ swap for both), so diagnose it on 'none' or 'at least one'.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q6(ii)" },
      stem: t`The probability that student $X$ solves a problem in dynamics is $\frac{2}{5}$, and the probability that student $Y$ solves the same problem is $\frac{1}{4}$. They work independently. The probability that the problem is solved is:`,
      verify: { kind: "value", inputs: { p1: "2/5", p2: "1/4" }, params: { ask: "atleast1" } },
      options: [
        { key: "A", text: t`$\frac{13}{20}$`, correct: false, misconceptionId: "C09-M2", value: "13/20" },
        { key: "B", text: t`$\frac{9}{20}$`, correct: false, misconceptionId: "C09-M4", value: "9/20" },
        { key: "C", text: t`$\frac{11}{20}$`, correct: true, value: "11/20" },
        { key: "D", text: t`$\frac{9}{10}$`, correct: false, misconceptionId: "C09-M1", value: "9/10" },
      ],
      solution: {
        steps: [
          t`$P(X') = 1 - \frac{2}{5} = \frac{3}{5}$ and $P(Y') = 1 - \frac{1}{4} = \frac{3}{4}$.`,
          t`Not solved means both fail: $\frac{3}{5} \times \frac{3}{4} = \frac{9}{20}$.`,
          t`Solved means at least one solves it: $1 - \frac{9}{20} = \frac{11}{20}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q10(b)" },
      stem: t`The probability that a man who is $45$ years old will be alive till he is $70$ is $\frac{5}{12}$. The probability that his wife, who is $40$, will be alive till she is $65$ is $\frac{3}{8}$. The two events are independent. The probability that, $25$ years hence, exactly one of them will be alive is:`,
      verify: { kind: "value", inputs: { p1: "5/12", p2: "3/8" }, params: { ask: "exactly1" } },
      options: [
        { key: "A", text: t`$\frac{23}{48}$`, correct: true, value: "23/48" },
        { key: "B", text: t`$\frac{27}{32}$`, correct: false, misconceptionId: "C09-M1", value: "27/32" },
        { key: "C", text: t`$\frac{19}{24}$`, correct: false, misconceptionId: "C09-M3", value: "19/24" },
        { key: "D", text: t`$\frac{61}{96}$`, correct: false, misconceptionId: "C09-M6", value: "61/96" },
      ],
      solution: {
        steps: [
          t`Not alive: the man $1 - \frac{5}{12} = \frac{7}{12}$, the wife $1 - \frac{3}{8} = \frac{5}{8}$.`,
          t`Only the man alive: $\frac{5}{12} \times \frac{5}{8} = \frac{25}{96}$. Only the wife alive: $\frac{7}{12} \times \frac{3}{8} = \frac{21}{96}$.`,
          t`Exactly one: $\frac{25}{96} + \frac{21}{96} = \frac{46}{96} = \frac{23}{48}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.5 Q3(ii)" },
      stem: t`The odds against student $X$ solving a statistics problem are $8 : 6$, and the odds in favour of student $Y$ solving the same problem are $14 : 16$. They try it independently. The probability that neither of them solves the problem is:`,
      verify: { kind: "value", inputs: { a1: "8", b1: "6", a2: "14", b2: "16" }, params: { odds: ["against", "for"], ask: "none" } },
      options: [
        { key: "A", text: t`$\frac{8}{35}$`, correct: false, misconceptionId: "C09-M5", value: "8/35" },
        { key: "B", text: t`$\frac{11}{105}$`, correct: false, misconceptionId: "C09-M2", value: "11/105" },
        { key: "C", text: t`$\frac{73}{105}$`, correct: false, misconceptionId: "C09-M4", value: "73/105" },
        { key: "D", text: t`$\frac{32}{105}$`, correct: true, value: "32/105" },
      ],
      solution: {
        steps: [
          t`Odds against $X$ are $8 : 6$, so $P(X) = \frac{6}{14} = \frac{3}{7}$ and $P(X') = \frac{4}{7}$.`,
          t`Odds in favour of $Y$ are $14 : 16$, so $P(Y) = \frac{14}{30} = \frac{7}{15}$ and $P(Y') = \frac{8}{15}$.`,
          t`Neither solves it: $P(X')\,P(Y') = \frac{4}{7} \times \frac{8}{15} = \frac{32}{105}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc I Q10" },
      stem: t`The odds against an event $A$ are $5 : 3$, and the odds in favour of another event $B$, independent of $A$, are $7 : 5$. The probability that at least one of the two events will occur is:`,
      verify: { kind: "value", inputs: { a1: "5", b1: "3", a2: "7", b2: "5" }, params: { odds: ["against", "for"], ask: "atleast1" } },
      options: [
        { key: "A", text: t`$\frac{71}{96}$`, correct: true, value: "71/96" },
        { key: "B", text: t`$\frac{27}{32}$`, correct: false, misconceptionId: "C09-M5", value: "27/32" },
        { key: "C", text: t`$\frac{25}{32}$`, correct: false, misconceptionId: "C09-M1", value: "25/32" },
        { key: "D", text: t`$\frac{23}{24}$`, correct: false, misconceptionId: "C09-M2", value: "23/24" },
      ],
      solution: {
        steps: [
          t`Odds against $A$ are $5 : 3$, so $P(A) = \frac{3}{8}$ and $P(A') = \frac{5}{8}$.`,
          t`Odds in favour of $B$ are $7 : 5$, so $P(B) = \frac{7}{12}$ and $P(B') = \frac{5}{12}$.`,
          t`Neither occurs: $\frac{5}{8} \times \frac{5}{12} = \frac{25}{96}$. At least one occurs: $1 - \frac{25}{96} = \frac{71}{96}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q7" },
      stem: t`$A$ speaks the truth in $80\%$ of cases and $B$ speaks the truth in $60\%$ of cases, independently of each other. The probability that they contradict each other in narrating an incident is:`,
      verify: { kind: "value", inputs: { p1: "4/5", p2: "3/5" }, params: { ask: "exactly1" } },
      options: [
        { key: "A", text: t`$\frac{14}{25}$`, correct: false, misconceptionId: "C09-M4", value: "14/25" },
        { key: "B", text: t`$\frac{23}{25}$`, correct: false, misconceptionId: "C09-M6", value: "23/25" },
        { key: "C", text: t`$\frac{11}{25}$`, correct: true, value: "11/25" },
        { key: "D", text: t`$\frac{13}{25}$`, correct: false, misconceptionId: "C09-M1", value: "13/25" },
      ],
      solution: {
        steps: [
          t`$P(A \text{ true}) = \frac{4}{5}$, $P(B \text{ true}) = \frac{3}{5}$, so they lie with probabilities $\frac{1}{5}$ and $\frac{2}{5}$.`,
          t`They contradict each other when exactly one tells the truth. $A$ true, $B$ lies: $\frac{4}{5} \times \frac{2}{5} = \frac{8}{25}$. $A$ lies, $B$ true: $\frac{1}{5} \times \frac{3}{5} = \frac{3}{25}$.`,
          t`Add: $\frac{8}{25} + \frac{3}{25} = \frac{11}{25}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q5(d)" },
      stem: t`$A$, $B$ and $C$ try to hit a target independently. Their probabilities of hitting it are $\frac{1}{2}$, $\frac{1}{3}$ and $\frac{1}{4}$. The probability that the target is hit by exactly two of them is:`,
      verify: { kind: "value", inputs: { p1: "1/2", p2: "1/3", p3: "1/4" }, params: { ask: "exactly2" } },
      options: [
        { key: "A", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C09-M4", value: "3/4" },
        { key: "B", text: t`$\frac{1}{4}$`, correct: true, value: "1/4" },
        { key: "C", text: t`$\frac{3}{8}$`, correct: false, misconceptionId: "C09-M3", value: "3/8" },
        { key: "D", text: t`$\frac{7}{24}$`, correct: false, misconceptionId: "C09-M6", value: "7/24" },
      ],
      solution: {
        steps: [
          t`The chances of missing: $P(A') = \frac{1}{2}$, $P(B') = \frac{2}{3}$, $P(C') = \frac{3}{4}$.`,
          t`$A$, $B$ hit and $C$ misses: $\frac{1}{2} \times \frac{1}{3} \times \frac{3}{4} = \frac{3}{24}$. $A$, $C$ hit and $B$ misses: $\frac{1}{2} \times \frac{2}{3} \times \frac{1}{4} = \frac{2}{24}$. $B$, $C$ hit and $A$ misses: $\frac{1}{2} \times \frac{1}{3} \times \frac{1}{4} = \frac{1}{24}$.`,
          t`Exactly two: $\frac{3 + 2 + 1}{24} = \frac{6}{24} = \frac{1}{4}$.`,
        ],
      },
    },
  ],
};
