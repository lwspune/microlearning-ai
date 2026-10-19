import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Can two mutually exclusive events $A$ and $B$ have $P(A) = 0.6$ and $P(B) = 0.6$?`,
    reveal: t`No. Mutually exclusive means $A \cap B = \phi$, so $P(A \cup B)$ $= 0.6 + 0.6 = 1.2$, more than $1$. Events this likely can't fit apart in $S$: they must share at least $0.6 + 0.6 - 1 = 0.2$.`,
  },
  explanation: {
    intuition: [
      t`Knowing $P(A)$ and $P(B)$ does not fix $P(A \cap B)$: picture the two circles sliding over each other.`,
      t`The overlap $A \cap B$ is part of $A$ and part of $B$, so it can't be bigger than either.`,
      t`It is biggest when the smaller event sits wholly inside the larger one.`,
      t`Slide the circles apart and the overlap shrinks, down to nothing if they fit apart.`,
      t`But the whole sample space $S$ has probability $1$, so two likely events may not fit apart.`,
      t`The union $A \cup B$ moves the other way: more overlap, less union.`,
    ],
    formal: [
      {
        title: "The greatest overlap",
        points: [
          t`$A \cap B$ lies inside $A$ and inside $B$, so $P(A \cap B) \le P(A)$ and $P(A \cap B) \le P(B)$.`,
          t`So $P(A \cap B) \le \min(P(A), P(B))$, where $\min$ means the smaller of the two.`,
          t`$B \subseteq A$ means every outcome of $B$ is in $A$; then $A \cap B = B$, so the bound is reached.`,
        ],
        figure: {
          alt: "Two events inside the sample space S, with circle B drawn wholly inside circle A. Then B is shaded and captioned 'B inside A: A ∩ B = B'.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [5.6, 3], r: 1.1 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], tone: "good", step: 3 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "label", at: [9.5, 6.4], label: "S", labelAt: "n" },
            { kind: "circle", centre: [5, 3.3], r: 2.4, tone: "muted" },
            { kind: "label", at: [3.3, 5], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [5.6, 3], r: 1.1, tone: "muted" },
            { kind: "label", at: [5.6, 3], label: "B", labelAt: "n" },
            { kind: "label", at: [5, 6.05], label: "B inside A: A ∩ B = B", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "The least overlap",
        points: [
          t`If $P(A) + P(B) \le 1$, the events can be mutually exclusive, and then $P(A \cap B) = 0$.`,
          t`If $P(A) + P(B) > 1$, they can't: $S$ has room for a total of only $1$.`,
          t`The addition theorem gives $P(A \cap B)$ $= P(A) + P(B) - P(A \cup B)$.`,
          t`Since $P(A \cup B) \le 1$, $P(A \cap B) \ge P(A) + P(B) - 1$.`,
          t`Both cases together: $P(A \cap B) \ge \max(0,\ P(A) + P(B) - 1)$, where $\max$ means the larger.`,
          t`When $P(A) + P(B) > 1$, the least overlap comes when $A \cup B = S$.`,
        ],
        figure: {
          alt: "Two events inside the sample space S drawn as separate circles A and B that do not meet. Both are shaded, captioned 'A ∩ B = φ'.",
          axes: "none",
          view: { x: [-0.3, 10.3], y: [-0.3, 7.3] },
          elements: [
            { kind: "region", within: [{ kind: "disc", centre: [2.9, 3.5], r: 1.9 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [7.1, 3.5], r: 1.9 }, { kind: "halfPlane", through: [[0, 0], [10, 0]] }, { kind: "halfPlane", through: [[10, 0], [10, 7]] }, { kind: "halfPlane", through: [[10, 7], [0, 7]] }, { kind: "halfPlane", through: [[0, 7], [0, 0]] }], step: 1 },
            { kind: "curve", points: [[0, 0], [10, 0], [10, 7], [0, 7], [0, 0]], tone: "muted" },
            { kind: "label", at: [9.5, 6.4], label: "S", labelAt: "n" },
            { kind: "circle", centre: [2.9, 3.5], r: 1.9, tone: "muted" },
            { kind: "label", at: [1.56, 4.84], label: "A", labelAt: "nw" },
            { kind: "circle", centre: [7.1, 3.5], r: 1.9, tone: "muted" },
            { kind: "label", at: [8.44, 4.84], label: "B", labelAt: "ne" },
            { kind: "label", at: [5, 6.05], label: "A ∩ B = φ", labelAt: "n", tone: "good", step: 1 },
          ],
        },
      },
      {
        title: "Bounds on the union",
        points: [
          t`$A \cup B$ contains $A$ and contains $B$, so $P(A \cup B) \ge \max(P(A), P(B))$.`,
          t`This least union comes when the smaller event lies inside the larger.`,
          t`The addition theorem subtracts $P(A \cap B) \ge 0$, so $P(A \cup B) \le P(A) + P(B)$.`,
          t`This is **Boole's inequality**; equality holds for mutually exclusive events.`,
          t`No probability exceeds $1$, so $P(A \cup B) \le \min(1,\ P(A) + P(B))$.`,
        ],
      },
      {
        title: "The four bounds together",
        points: [
          t`Overlap: $\max(0,\ P(A) + P(B) - 1)$ $\le P(A \cap B)$ $\le \min(P(A), P(B))$.`,
          t`Union: $\max(P(A), P(B))$ $\le P(A \cup B)$ $\le \min(1,\ P(A) + P(B))$.`,
          t`They are linked by $P(A \cup B) + P(A \cap B)$ $= P(A) + P(B)$, a fixed total.`,
          t`So the greatest overlap and the least union come from the same picture: one event inside the other.`,
          t`The least overlap and the greatest union also come together: the events as far apart as possible.`,
        ],
      },
      {
        title: "Checking given values",
        points: [
          t`Given values are **consistent** when some pair of events can actually have them.`,
          t`Check that the given $P(A \cap B)$ lies between its least and greatest values.`,
          t`For example, $P(A) = 0.5$ and $P(B) = 0.8$ force $P(A \cap B) \ge 0.3$, so $P(A \cap B) = 0.2$ is impossible.`,
          t`Mutually exclusive events need $P(A) + P(B) \le 1$.`,
        ],
      },
      {
        title: "Extremes of a sum",
        points: [
          t`Some questions limit $P(A \cup B)$ and $P(A \cap B)$, then ask about $P(A) + P(B)$.`,
          t`Use $P(A) + P(B) = P(A \cup B) + P(A \cap B)$.`,
          t`For the greatest sum, take each term at its greatest allowed value.`,
          t`Remember that $P(A \cup B)$ can rise to $1$ even when only a lower limit is given.`,
        ],
      },
    ],
    worked: {
      prompt: t`For two events, $P(A) = 0.9$ and $P(B) = 0.3$. Find the range of $P(A \cap B)$ and of $P(A \cup B)$. Can $P(A \cap B)$ be $0.1$?`,
      steps: [
        t`Least overlap: $\max(0,\ 0.9 + 0.3 - 1) = 0.2$, since the sum $1.2$ is more than $1$.`,
        t`Greatest overlap: $\min(0.9, 0.3) = 0.3$, reached when $B \subseteq A$. So $0.2 \le P(A \cap B) \le 0.3$.`,
        t`Union: least $\max(0.9, 0.3) = 0.9$; greatest $\min(1,\ 1.2) = 1$. So $0.9 \le P(A \cup B) \le 1$.`,
        t`$0.1$ is below the least overlap $0.2$, so $P(A \cap B) = 0.1$ is not possible.`,
      ],
      answer: t`$0.2 \le P(A \cap B) \le 0.3$ and $0.9 \le P(A \cup B) \le 1$; $P(A \cap B)$ can't be $0.1$.`,
    },
    visualSpec: t`Two circles $A$ and $B$ of fixed area inside $S$: drag one over the other, and sliders for $P(A \cap B)$ and $P(A \cup B)$ move together, stopping at the bounds when one circle is inside the other or when they can't be pulled further apart.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Swapping the extremes: taking the overlap as least (and the union as greatest) when one event is inside the other, and the reverse when they are far apart",
      remediation: "More overlap means less union. The overlap is greatest and the union least when the smaller event lies inside the larger; the overlap is least and the union greatest when the events are as far apart as they can be.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C11-M2",
      mistake: "Forgetting that every probability lies between 0 and 1: a negative least overlap, a union above 1, or a union never pushed up to 1",
      remediation: t`Every probability lies between $0$ and $1$. So the least $P(A \cap B)$ is $\max(0, P(A) + P(B) - 1)$ and the greatest $P(A \cup B)$ is $\min(1, P(A) + P(B))$; a union can reach $1$ even when only a lower limit is given.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C11-M3",
      mistake: "Thinking any two events can be mutually exclusive, so the least P(A ∩ B) is always 0",
      remediation: t`When $P(A) + P(B) > 1$ the events can't fit apart in $S$. Since $P(A \cup B) \le 1$, the addition theorem gives $P(A \cap B) \ge P(A) + P(B) - 1$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C11-M4",
      mistake: "Picking the wrong one of the pair: letting the overlap grow to the larger probability, or the union shrink to the smaller",
      remediation: t`$A \cap B$ lies inside both events, so it is at most the **smaller** of $P(A)$ and $P(B)$. $A \cup B$ contains both, so it is at least the **larger**.`,
      fallback: { kind: "ext", topic: "intersection and union of sets" },
    },
    {
      id: "C11-M5",
      mistake: "Treating the events as independent: taking P(A ∩ B) = P(A) P(B) as the extreme value",
      remediation: t`$P(A \cap B) = P(A)\,P(B)$ holds only for independent events, and the question asks for an extreme over all possible events. Find it from the bounds, by sliding the overlap as far as it can go.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C11-M6",
      mistake: "Dropping the overlap: taking P(A) + P(B) = P(A ∪ B)",
      remediation: t`By the addition theorem, $P(A) + P(B) = P(A \cup B) + P(A \cap B)$: the overlap is counted in both. Push each term to its greatest allowed value.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  engineNotes: [
    t`C11-M2 gives the key for the least $P(A \cap B)$ when $P(A) + P(B) \ge 1$, and for the greatest $P(A \cup B)$ when $P(A) + P(B) \le 1$; C11-M3 gives the key for the least $P(A \cap B)$ when $P(A) + P(B) \le 1$. Draw diagnosing items from the other case.`,
    t`C11-M4 gives the key when $P(A) = P(B)$, and C11-M6 gives the key for the greatest $P(A \cup B)$ when $P(A) + P(B) \le 1$: avoid those inputs where they are tagged.`,
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q101" },
      stem: t`For two events $A$ and $B$, $P(A) = 0.85$ and $P(B) = 0.4$. The least possible value of $P(A \cap B)$ is:`,
      verify: { kind: "value", inputs: { pa: "17/20", pb: "2/5" }, params: { ask: "imin" } },
      options: [
        { key: "A", text: t`$0.25$`, correct: true, value: "1/4" },
        { key: "B", text: t`$0.4$`, correct: false, misconceptionId: "C11-M1", value: "2/5" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C11-M3", value: "0" },
        { key: "D", text: t`$0.34$`, correct: false, misconceptionId: "C11-M5", value: "17/50" },
      ],
      solution: {
        steps: [
          t`$P(A) + P(B) = 0.85 + 0.4 = 1.25$, more than $1$, so the events must overlap.`,
          t`By the addition theorem, $P(A \cap B) = 1.25 - P(A \cup B)$, and $P(A \cup B) \le 1$.`,
          t`So $P(A \cap B) \ge 1.25 - 1 = 0.25$, reached when $A \cup B = S$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q120" },
      stem: t`For two events $A$ and $B$, $P(A) = 0.5$ and $P(B) = 0.15$. The greatest possible value of $P(A \cap B)$ is:`,
      verify: { kind: "value", inputs: { pa: "1/2", pb: "3/20" }, params: { ask: "imax" } },
      options: [
        { key: "A", text: t`$0.5$`, correct: false, misconceptionId: "C11-M4", value: "1/2" },
        { key: "B", text: t`$0.075$`, correct: false, misconceptionId: "C11-M5", value: "3/40" },
        { key: "C", text: t`$0.15$`, correct: true, value: "3/20" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C11-M1", value: "0" },
      ],
      solution: {
        steps: [
          t`$A \cap B$ lies inside $A$ and inside $B$, so $P(A \cap B) \le \min(0.5, 0.15) = 0.15$.`,
          t`When $B \subseteq A$, $A \cap B = B$, so $P(A \cap B) = 0.15$ is reached.`,
          t`The greatest possible value of $P(A \cap B)$ is $0.15$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q120" },
      stem: t`For two events $A$ and $B$, $P(A) = 0.7$ and $P(B) = 0.4$. The least possible value of $P(A \cup B)$ is:`,
      verify: { kind: "value", inputs: { pa: "7/10", pb: "2/5" }, params: { ask: "umin" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C11-M1", value: "1" },
        { key: "B", text: t`$0.4$`, correct: false, misconceptionId: "C11-M4", value: "2/5" },
        { key: "C", text: t`$0.82$`, correct: false, misconceptionId: "C11-M5", value: "41/50" },
        { key: "D", text: t`$0.7$`, correct: true, value: "7/10" },
      ],
      solution: {
        steps: [
          t`$A \cup B$ contains $A$ and $B$, so $P(A \cup B) \ge \max(0.7, 0.4) = 0.7$.`,
          t`When $B \subseteq A$, $A \cup B = A$, so $P(A \cup B) = 0.7$ is reached.`,
          t`The least possible value of $P(A \cup B)$ is $0.7$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q103" },
      stem: t`For two events $A$ and $B$, $P(A) = 0.8$ and $P(B) = 0.35$. The greatest possible value of $P(A \cup B)$ is:`,
      verify: { kind: "value", inputs: { pa: "4/5", pb: "7/20" }, params: { ask: "umax" } },
      options: [
        { key: "A", text: t`$1.15$`, correct: false, misconceptionId: "C11-M2", value: "23/20" },
        { key: "B", text: t`$0.87$`, correct: false, misconceptionId: "C11-M5", value: "87/100" },
        { key: "C", text: t`$1$`, correct: true, value: "1" },
        { key: "D", text: t`$0.8$`, correct: false, misconceptionId: "C11-M1", value: "4/5" },
      ],
      solution: {
        steps: [
          t`By Boole's inequality, $P(A \cup B) \le P(A) + P(B) = 1.15$.`,
          t`No probability exceeds $1$, so $P(A \cup B) \le \min(1, 1.15) = 1$.`,
          t`$1$ is reached when $A \cup B = S$, with overlap $1.15 - 1 = 0.15$. The greatest value is $1$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q112" },
      stem: t`Two events $A$ and $B$ satisfy $P(A \cup B) \ge 0.75$ and $0.125 \le P(A \cap B) \le 0.375$. The greatest possible value of $P(A) + P(B)$ is:`,
      verify: { kind: "value", inputs: { u0: "3/4", i0: "1/8", i1: "3/8" }, params: { ask: "summax" } },
      options: [
        { key: "A", text: t`$0.875$`, correct: false, misconceptionId: "C11-M1", value: "7/8" },
        { key: "B", text: t`$1.125$`, correct: false, misconceptionId: "C11-M2", value: "9/8" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C11-M6", value: "1" },
        { key: "D", text: t`$1.375$`, correct: true, value: "11/8" },
      ],
      solution: {
        steps: [
          t`By the addition theorem, $P(A) + P(B) = P(A \cup B) + P(A \cap B)$.`,
          t`$P(A \cup B)$ can be as large as $1$, and $P(A \cap B)$ as large as $0.375$.`,
          t`So $P(A) + P(B) \le 1 + 0.375 = 1.375$.`,
          t`It is reached, for example, with $P(A) = P(B) = 0.6875$, $P(A \cap B) = 0.375$ and $A \cup B = S$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q120" },
      stem: t`Two events $A$ and $B$ have $P(A) = \frac{3}{4}$ and $P(B) = \frac{5}{8}$. Consider the statements: I. The least possible value of $P(A \cap B)$ is $\frac{3}{8}$. II. The greatest possible value of $P(A \cup B)$ is $1$. Which of them is/are correct?`,
      verify: { kind: "value", inputs: { pa: "3/4", pb: "5/8", c1: "3/8", c2: "1" }, params: { ask: "stmt", s1: "imin", s2: "umax" } },
      options: [
        { key: "A", text: t`II only`, correct: false, misconceptionId: "C11-M3", value: "II_only" },
        { key: "B", text: t`Both I and II`, correct: true, value: "both" },
        { key: "C", text: t`Neither I nor II`, correct: false, misconceptionId: "C11-M1", value: "neither" },
        { key: "D", text: t`I only`, correct: false, misconceptionId: "C11-M2", value: "I_only" },
      ],
      solution: {
        steps: [
          t`I: least $P(A \cap B) = \max(0,\ \frac{3}{4} + \frac{5}{8} - 1)$ $= \frac{3}{8}$. True.`,
          t`II: greatest $P(A \cup B) = \min(1,\ \frac{11}{8}) = 1$. True.`,
          t`So both I and II are correct.`,
        ],
      },
    },
  ],
};
