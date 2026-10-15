import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`A family has two children. You are told that **at least one of them is a girl**. What is the probability that both are girls? Most people say $\frac{1}{2}$.`,
    reveal: t`List the children in order of birth: $BB$, $BG$, $GB$, $GG$, all equally likely. The news rules out only $BB$, so three cases are left: $BG$, $GB$, $GG$. Both are girls in just one of them, so the probability is $\frac{1}{3}$, not $\frac{1}{2}$. Knowing something shrinks the sample space.`,
  },
  explanation: {
    intuition: t`A condition is news. Once you know $B$ has happened, every outcome outside $B$ is impossible, so $B$ becomes the new sample space. Inside it, $A$ can happen only through the outcomes it shares with $B$, that is $A \cap B$. So $P(A \mid B)$ is the share of $B$ that also lies in $A$. The event after the bar is the one you already know.`,
    formal: t`**Definition.** For events $A$ and $B$ with $P(B) > 0$, the probability of $A$ given $B$ is
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}.$$
The book writes it as $P(A/B)$.

**Two ways to find it.**
- **Reduce the sample space** (equally likely outcomes): $P(A \mid B) = \dfrac{n(A \cap B)}{n(B)}$. Count inside $B$ only.
- **Use the formula** when probabilities, not outcomes, are given.

**Example.** A card drawn from a pack of $52$ is a face card. The reduced space is the $12$ face cards, and $4$ are kings: $P(\text{king} \mid \text{face}) = \frac{4}{12} = \frac{1}{3}$, while $P(\text{king}) = \frac{4}{52} = \frac{1}{13}$.

**Watch the order.** $P(A \mid B)$ divides by $P(B)$; $P(B \mid A)$ divides by $P(A)$. Above, $P(\text{face} \mid \text{king}) = 1$, not $\frac{1}{3}$.

**Complements keep the condition.** $P(A' \mid B) = 1 - P(A \mid B)$.`,
    worked: {
      prompt: t`A die is tossed once and shows an odd number. Find the probability that the number is less than $4$.`,
      steps: [
        t`Let $A$: less than $4$ $= \{1, 2, 3\}$, and $B$: odd $= \{1, 3, 5\}$. $B$ is given.`,
        t`The reduced sample space is $B = \{1, 3, 5\}$, so $n(B) = 3$.`,
        t`Inside $B$, the numbers less than $4$ are $A \cap B = \{1, 3\}$, so $n(A \cap B) = 2$ and $P(A \mid B) = \frac{2}{3}$.`,
        t`Check with the formula: $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{2/6}{3/6} = \dfrac{2}{3}$.`,
      ],
      answer: t`$P(\text{less than } 4 \mid \text{odd}) = \frac{2}{3}$.`,
    },
    visualSpec: t`Drag a boundary across a grid of equally likely outcomes to choose the given event $B$; everything outside $B$ fades, and the share of $B$ that also lies in $A$ updates as $P(A \mid B)$.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Divides by the wrong event: finds $\frac{P(A \cap B)}{P(A)}$, which is $P(B \mid A)$, when asked for $P(A \mid B)$.`,
      remediation: t`The event after the bar is the one that has happened, so it goes in the denominator: $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$. $P(B \mid A)$ divides by $P(A)$ and is usually different.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Ignores the condition and gives $P(A)$ over the whole sample space.`,
      remediation: t`Once $B$ is known to have happened, outcomes outside $B$ are impossible. Count only inside $B$: $P(A \mid B) = \dfrac{n(A \cap B)}{n(B)}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Finds the outcomes in both events but divides by $n(S)$, so answers $P(A \cap B)$.`,
      remediation: t`$A$ given $B$ is not $A$ and $B$. Divide the overlap by $n(B)$, the new sample space, not by $n(S)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Reads 'at least $k$ heads' as 'these $k$ coins are heads', so only the other coins are left to chance.`,
      remediation: "'At least two heads' does not say which coins are heads. List every outcome with at least two heads: that whole list is the reduced sample space.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Uses the given $P(A')$ as if it were $P(A)$.`,
      remediation: t`Find $P(A)$ first: $P(A) = 1 - P(A')$. Then use it in $P(A \cap B) = P(A)\,P(B \mid A)$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M6",
      mistake: t`Shrinks the denominator to $n(B)$ but still counts all of $A$, including the outcomes outside $B$: answers $\frac{n(A)}{n(B)}$.`,
      remediation: t`Once $B$ has happened, only the outcomes of $A$ that lie inside $B$ can occur. The numerator is $n(A \cap B)$, not $n(A)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C07-M1 gives the key when $P(A) = P(B)$ (e.g. less than 4 given odd on a die). Draw M1 items where $n(A) \ne n(B)$.`,
    t`C07-M2 gives the key when $A$ and $B$ are independent (face card given red; sum divisible by 3 given odd sum). Draw M2 items where they are not.`,
    t`C07-M6 gives the key when $A \subset B$ (three heads given at least two), and C07-M2 and C07-M3 then agree. Draw M6 and M3 items where $A$ sticks out of $B$.`,
    t`C07-M4 applies only to 'at least $k$' conditions; C07-M5 only when $P(A')$ is given.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q3" },
      stem: t`In a sample of $40$ vehicles, $18$ are red and $6$ are trucks; $2$ of the trucks are red. A vehicle is selected at random and it is red. What is the probability that it is a truck?`,
      verify: { kind: "value", inputs: { nS: "40", nA: "6", nB: "18", nAB: "2" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$\frac{3}{20}$`, correct: false, misconceptionId: "C07-M2", value: "3/20" },
        { key: "B", text: t`$\frac{1}{20}$`, correct: false, misconceptionId: "C07-M3", value: "1/20" },
        { key: "C", text: t`$\frac{1}{9}$`, correct: true, value: "1/9" },
        { key: "D", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C07-M1", value: "1/3" },
      ],
      solution: {
        steps: [
          t`Let $T$: truck, $R$: red. Red is given, so the reduced sample space is the $18$ red vehicles.`,
          t`Of these, the red trucks: $n(T \cap R) = 2$.`,
          t`$P(T \mid R) = \dfrac{n(T \cap R)}{n(R)} = \dfrac{2}{18} = \dfrac{1}{9}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc II Q3" },
      stem: t`Ten cards numbered $1$ to $10$ are placed in a box and one card is drawn at random. It is known that the number on the card is more than $3$. What is the probability that it is an even number?`,
      verify: { kind: "value", inputs: { nS: "10", nA: "5", nB: "7", nAB: "4" }, params: { kind: "count", exp: "cards10", A: "even", B: "more_than_3" } },
      options: [
        { key: "A", text: t`$\frac{4}{5}$`, correct: false, misconceptionId: "C07-M1", value: "4/5" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M2", value: "1/2" },
        { key: "C", text: t`$\frac{5}{7}$`, correct: false, misconceptionId: "C07-M6", value: "5/7" },
        { key: "D", text: t`$\frac{4}{7}$`, correct: true, value: "4/7" },
      ],
      solution: {
        steps: [
          t`Let $A$: even, $B$: more than $3$ $= \{4, 5, 6, 7, 8, 9, 10\}$, so $n(B) = 7$.`,
          t`The even numbers inside $B$: $A \cap B = \{4, 6, 8, 10\}$, so $n(A \cap B) = 4$.`,
          t`$P(A \mid B) = \dfrac{n(A \cap B)}{n(B)} = \dfrac{4}{7}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q8(c)" },
      stem: t`Two hundred patients who had either eye surgery or throat surgery were asked whether they were satisfied with the result:$$\begin{array}{l|c|c} \text{Surgery} & \text{Sat.} & \text{Unsat.} \\ \hline \text{Throat} & 70 & 25 \\ \text{Eye} & 90 & 15 \\ \hline \text{Total} & 160 & 40 \end{array}$$(Sat. = satisfied, Unsat. = unsatisfied.) One patient is selected at random. What is the probability that the patient had throat surgery, given that the patient was unsatisfied?`,
      verify: { kind: "value", inputs: { nS: "200", nA: "95", nB: "40", nAB: "25" }, params: { kind: "count" } },
      options: [
        { key: "A", text: t`$\frac{1}{8}$`, correct: false, misconceptionId: "C07-M3", value: "1/8" },
        { key: "B", text: t`$\frac{5}{8}$`, correct: true, value: "5/8" },
        { key: "C", text: t`$\frac{5}{19}$`, correct: false, misconceptionId: "C07-M1", value: "5/19" },
        { key: "D", text: t`$\frac{19}{40}$`, correct: false, misconceptionId: "C07-M2", value: "19/40" },
      ],
      solution: {
        steps: [
          t`Unsatisfied is given, so the reduced sample space is the $40$ unsatisfied patients (the Unsat. column total).`,
          t`Of these, $25$ had throat surgery.`,
          t`$P(\text{throat} \mid \text{unsatisfied}) = \dfrac{25}{40} = \dfrac{5}{8}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.3 Q14" },
      stem: t`Three fair coins are tossed. What is the probability of getting three heads, given that at least two coins show heads?`,
      verify: { kind: "value", inputs: { n: "3", k: "2" }, params: { kind: "atleast" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}$`, correct: true, value: "1/4" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C07-M1", value: "1" },
        { key: "C", text: t`$\frac{1}{8}$`, correct: false, misconceptionId: "C07-M2", value: "1/8" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M4", value: "1/2" },
      ],
      solution: {
        steps: [
          t`Three coins give $8$ equally likely outcomes. At least two heads: $B = \{HHH, HHT, HTH, THH\}$, so $n(B) = 4$.`,
          t`Three heads: $A = \{HHH\}$, which lies inside $B$, so $n(A \cap B) = 1$.`,
          t`$P(A \mid B) = \dfrac{n(A \cap B)}{n(B)} = \dfrac{1}{4}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/9.3.2 SolvedEx.2" },
      stem: t`If $P(A') = 0.7$, $P(B) = 0.75$ and $P(B \mid A) = 0.5$, find $P(A \mid B)$.`,
      verify: { kind: "value", inputs: { pAc: "7/10", pB: "3/4", pBgA: "1/2" }, params: { kind: "prob" } },
      options: [
        { key: "A", text: t`$\frac{7}{15}$`, correct: false, misconceptionId: "C07-M5", value: "7/15" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "1/2" },
        { key: "C", text: t`$\frac{3}{20}$`, correct: false, misconceptionId: "C07-M3", value: "3/20" },
        { key: "D", text: t`$\frac{1}{5}$`, correct: true, value: "1/5" },
      ],
      solution: {
        steps: [
          t`$P(A) = 1 - P(A') = 1 - 0.7 = 0.3$.`,
          t`$P(B \mid A) = \dfrac{P(A \cap B)}{P(A)}$, so $P(A \cap B) = 0.5 \times 0.3 = 0.15$.`,
          t`$P(A \mid B) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{0.15}{0.75} = \dfrac{1}{5}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/9.3.1 SolvedEx.2" },
      stem: t`A pair of dice is thrown. If the sum of the numbers is odd, what is the probability that the sum is divisible by $5$?`,
      verify: { kind: "value", inputs: { nS: "36", nA: "7", nB: "18", nAB: "4" }, params: { kind: "count", exp: "dice2", A: "sum_div5", B: "sum_odd" } },
      options: [
        { key: "A", text: t`$\frac{2}{9}$`, correct: true, value: "2/9" },
        { key: "B", text: t`$\frac{4}{7}$`, correct: false, misconceptionId: "C07-M1", value: "4/7" },
        { key: "C", text: t`$\frac{7}{36}$`, correct: false, misconceptionId: "C07-M2", value: "7/36" },
        { key: "D", text: t`$\frac{7}{18}$`, correct: false, misconceptionId: "C07-M6", value: "7/18" },
      ],
      solution: {
        steps: [
          t`Let $A$: sum divisible by $5$, $B$: sum odd. $B$ happens when one die is odd and the other even: $n(B) = 2 \times 3 \times 3 = 18$ of the $36$ outcomes. This is the reduced sample space.`,
          t`An odd sum divisible by $5$ must be $5$ ($10$ is even): $(1, 4), (2, 3), (3, 2), (4, 1)$, so $n(A \cap B) = 4$.`,
          t`$P(A \mid B) = \dfrac{n(A \cap B)}{n(B)} = \dfrac{4}{18} = \dfrac{2}{9}$.`,
        ],
      },
    },
  ],
};
