import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`The chance of rain tomorrow is $0.7$ and the chance of a strong wind is $0.5$. **So is the chance of rain or wind $0.7 + 0.5 = 1.2$?**`,
    reveal: t`No: a probability can never be more than $1$. The days with rain **and** wind were counted twice, once in each number. If the chance of both is $0.4$, take it away once: $P(\text{rain or wind}) = 0.7 + 0.5 - 0.4 = 0.8$.`,
  },
  explanation: {
    intuition: t`Picture $A$ and $B$ as two overlapping circles in a Venn diagram. $P(A)$ covers the overlap, and so does $P(B)$, so $P(A) + P(B)$ counts the overlap $A \cap B$ twice. Subtract it once and you have $P(A \cup B)$. Only when the circles don't overlap (mutually exclusive events) is there nothing to subtract, and then you just add.`,
    formal: t`**The addition theorem.** For any two events $A$ and $B$ of a sample space $S$:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Mutually exclusive events.** If $A \cap B = \phi$, then $P(A \cap B) = 0$ and $P(A \cup B) = P(A) + P(B)$. This is the only case where you just add.

**Words into events.** "$A$ or $B$" and "at least one" mean $A \cup B$; "both" means $A \cap B$. "Exactly one" leaves out the overlap: $P(A) + P(B) - 2P(A \cap B)$.

**Neither, and not both (De Morgan).** $P(A' \cap B') = 1 - P(A \cup B)$ and $P(A' \cup B') = 1 - P(A \cap B)$.

**Use it backwards.** The theorem links four numbers: $P(A)$, $P(B)$, $P(A \cap B)$, $P(A \cup B)$. Any three give the fourth.`,
    worked: {
      prompt: t`The probability that a student passes in French is $0.64$, in Sociology is $0.45$, and in both is $0.40$. Find the probability that the student passes in at least one, in exactly one, and in neither of the two subjects.`,
      steps: [
        t`Let $F$: passes in French, $S$: passes in Sociology. Then $P(F) = 0.64$, $P(S) = 0.45$, $P(F \cap S) = 0.40$.`,
        t`At least one: $P(F \cup S) = P(F) + P(S) - P(F \cap S) = 0.64 + 0.45 - 0.40 = 0.69$.`,
        t`Exactly one: take the overlap out of the union too. $P(F \cup S) - P(F \cap S) = 0.69 - 0.40 = 0.29$.`,
        t`Neither: $P(F' \cap S') = 1 - P(F \cup S) = 1 - 0.69 = 0.31$.`,
      ],
      answer: t`At least one: $0.69$; exactly one: $0.29$; neither: $0.31$.`,
    },
    visualSpec: t`Two overlapping circles $A$ and $B$ inside $S$: drag them apart or together, and bars for $P(A)$, $P(B)$, $P(A \cap B)$ and $P(A \cup B)$ update, showing the overlap counted twice until it is subtracted once.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Adding P(A) and P(B) without subtracting the overlap, as if the events were always mutually exclusive",
      remediation: t`$P(A) + P(B)$ counts the outcomes in $A \cap B$ twice. Use $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; you just add only when $A$ and $B$ are mutually exclusive.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: "Mixing up 'neither' and 'not both': taking P(A' ∩ B') = 1 − P(A ∩ B), or P(A' ∪ B') = 1 − P(A ∪ B)",
      remediation: t`By De Morgan's laws, $A' \cap B' = (A \cup B)'$, so $P(\text{neither}) = 1 - P(A \cup B)$. It is $A' \cup B' = (A \cap B)'$, 'not both', that equals $1 - P(A \cap B)$.`,
      fallback: { kind: "ext", topic: "De Morgan's laws" },
    },
    {
      id: "C05-M3",
      mistake: "Treating 'A or B' (at least one) and 'exactly one' as the same event",
      remediation: t`'$A$ or $B$' includes the outcomes in both: $P(\text{at least one}) = P(A) + P(B) - P(A \cap B)$. 'Exactly one' leaves the overlap out: $P(A) + P(B) - 2P(A \cap B)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M4",
      mistake: "Multiplying for 'and': taking P(A ∩ B) = P(A) P(B), or P(A' ∩ B') = P(A') P(B')",
      remediation: t`$P(A \cap B) = P(A)\,P(B)$ holds only for independent events, which the question doesn't say. Get $P(A \cap B)$ from the addition theorem: $P(A \cap B) = P(A) + P(B) - P(A \cup B)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Using the given P(B') as if it were P(B)",
      remediation: t`When the question gives $P(B')$, first find $P(B) = 1 - P(B')$, then put $P(B)$ into the addition theorem.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M6",
      mistake: "Adding the overlap instead of subtracting it: P(A ∪ B) = P(A) + P(B) + P(A ∩ B)",
      remediation: t`The overlap is already counted twice in $P(A) + P(B)$, so it is subtracted once: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M1 and C05-M3 give the key when $A$ and $B$ are mutually exclusive ($P(A \cap B) = 0$): draw diagnosing items from overlapping events.`,
    t`C05-M4 gives the key when $A$ and $B$ happen to be independent (e.g. black card and face card): avoid such pairs where C05-M4 is tagged.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc I Q4" },
      stem: t`In a set of $30$ shirts, $17$ are white and the rest are black. $4$ white and $5$ black shirts are tagged 'PARTY WEAR'. A shirt is chosen at random. The probability that it is a black shirt or a 'PARTY WEAR' shirt is:`,
      verify: { kind: "value", inputs: { n: "30", white: "17", wp: "4", bp: "5" }, params: { data: "shirts", ask: "union" } },
      options: [
        { key: "A", text: t`$\frac{9}{10}$`, correct: false, misconceptionId: "C05-M6", value: "9/10" },
        { key: "B", text: t`$\frac{17}{30}$`, correct: true, value: "17/30" },
        { key: "C", text: t`$\frac{11}{15}$`, correct: false, misconceptionId: "C05-M1", value: "11/15" },
        { key: "D", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C05-M3", value: "2/5" },
      ],
      solution: {
        steps: [
          t`Let $A$: the shirt is black, $B$: it is 'PARTY WEAR'. $n(S) = 30$, $n(A) = 30 - 17 = 13$, $n(B) = 4 + 5 = 9$.`,
          t`$A \cap B$ is the black 'PARTY WEAR' shirts: $n(A \cap B) = 5$.`,
          t`$P(A \cup B) = \frac{13}{30} + \frac{9}{30} - \frac{5}{30} = \frac{17}{30}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q3(iii)" },
      stem: t`A girl's chance of cracking the National Level exam is $0.42$ and of cracking the State Level exam is $0.54$. The probability that she cracks both is $0.11$. The probability that she cracks neither exam is:`,
      verify: { kind: "value", inputs: { pa: "21/50", pb: "27/50", pab: "11/100" }, params: { ask: "neither" } },
      options: [
        { key: "A", text: t`$0.04$`, correct: false, misconceptionId: "C05-M1", value: "1/25" },
        { key: "B", text: t`$0.89$`, correct: false, misconceptionId: "C05-M2", value: "89/100" },
        { key: "C", text: t`$0.26$`, correct: false, misconceptionId: "C05-M3", value: "13/50" },
        { key: "D", text: t`$0.15$`, correct: true, value: "3/20" },
      ],
      solution: {
        steps: [
          t`Let $N$: she cracks the National exam, $T$: she cracks the State exam. $P(N) = 0.42$, $P(T) = 0.54$, $P(N \cap T) = 0.11$.`,
          t`At least one: $P(N \cup T) = 0.42 + 0.54 - 0.11 = 0.85$.`,
          t`Neither: $P(N' \cap T') = 1 - P(N \cup T) = 1 - 0.85 = 0.15$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q7(b)" },
      stem: t`For two events $A$ and $B$ of a sample space $S$, $P(A) = \frac{1}{3}$, $P(B) = \frac{1}{4}$ and $P(A \cup B) = \frac{5}{12}$. Then $P(A' \cap B')$ is:`,
      verify: { kind: "value", inputs: { pa: "1/3", pb: "1/4", pu: "5/12" }, params: { ask: "neither" } },
      options: [
        { key: "A", text: t`$\frac{7}{12}$`, correct: true, value: "7/12" },
        { key: "B", text: t`$\frac{5}{6}$`, correct: false, misconceptionId: "C05-M2", value: "5/6" },
        { key: "C", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C05-M3", value: "3/4" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C05-M4", value: "1/2" },
      ],
      solution: {
        steps: [
          t`By De Morgan's law, $A' \cap B' = (A \cup B)'$.`,
          t`So $P(A' \cap B') = 1 - P(A \cup B) = 1 - \frac{5}{12} = \frac{7}{12}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/9.2 SolvedEx.2" },
      stem: t`The probability that a student will solve problem $A$ is $\frac{2}{3}$, and the probability that he will **not** solve problem $B$ is $\frac{5}{9}$. The probability that he solves at least one of the two is $\frac{4}{5}$. The probability that he solves both problems is:`,
      verify: { kind: "value", inputs: { pa: "2/3", pbc: "5/9", pu: "4/5" }, params: { ask: "inter" } },
      options: [
        { key: "A", text: t`$\frac{8}{27}$`, correct: false, misconceptionId: "C05-M4", value: "8/27" },
        { key: "B", text: t`$\frac{19}{45}$`, correct: false, misconceptionId: "C05-M5", value: "19/45" },
        { key: "C", text: t`$\frac{14}{45}$`, correct: true, value: "14/45" },
        { key: "D", text: t`$\frac{7}{45}$`, correct: false, misconceptionId: "C05-M3", value: "7/45" },
      ],
      solution: {
        steps: [
          t`Let $A$: he solves problem $A$, $B$: he solves problem $B$. $P(B) = 1 - P(B') = 1 - \frac{5}{9} = \frac{4}{9}$.`,
          t`'At least one' is $A \cup B$, so $P(A \cup B) = \frac{4}{5}$.`,
          t`$P(A \cap B) = P(A) + P(B) - P(A \cup B) = \frac{2}{3} + \frac{4}{9} - \frac{4}{5} = \frac{30 + 20 - 36}{45} = \frac{14}{45}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q8" },
      stem: t`For two events $A$ and $B$ of a sample space $S$, $P(A \cup B) = \frac{5}{6}$, $P(A \cap B) = \frac{1}{4}$ and $P(B') = \frac{1}{3}$. Then $P(A)$ is:`,
      verify: { kind: "value", inputs: { pu: "5/6", pab: "1/4", pbc: "1/3" }, params: { ask: "a" } },
      options: [
        { key: "A", text: t`$\frac{5}{12}$`, correct: true, value: "5/12" },
        { key: "B", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C05-M1", value: "1/6" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C05-M3", value: "2/3" },
        { key: "D", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C05-M5", value: "3/4" },
      ],
      solution: {
        steps: [
          t`$P(B) = 1 - P(B') = 1 - \frac{1}{3} = \frac{2}{3}$.`,
          t`From $P(A \cup B) = P(A) + P(B) - P(A \cap B)$: $P(A) = P(A \cup B) - P(B) + P(A \cap B)$.`,
          t`$P(A) = \frac{5}{6} - \frac{2}{3} + \frac{1}{4} = \frac{10 - 8 + 3}{12} = \frac{5}{12}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.2 Q4(a)" },
      stem: t`A bag contains $75$ tickets numbered from $1$ to $75$. One ticket is drawn at random. The probability that the number on it is a perfect square or divisible by $4$ is:`,
      verify: { kind: "value", inputs: { n: "75" }, params: { data: "tickets", A: "square", B: "div4", ask: "union" } },
      options: [
        { key: "A", text: t`$\frac{22}{75}$`, correct: true, value: "22/75" },
        { key: "B", text: t`$\frac{26}{75}$`, correct: false, misconceptionId: "C05-M1", value: "26/75" },
        { key: "C", text: t`$\frac{6}{25}$`, correct: false, misconceptionId: "C05-M3", value: "6/25" },
        { key: "D", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C05-M6", value: "2/5" },
      ],
      solution: {
        steps: [
          t`$A$: a perfect square: $1, 4, 9, 16, 25, 36, 49, 64$, so $n(A) = 8$. $B$: divisible by $4$: $4, 8, \ldots, 72$, so $n(B) = 18$.`,
          t`$A \cap B$: the squares divisible by $4$: $4, 16, 36, 64$, so $n(A \cap B) = 4$.`,
          t`$P(A \cup B) = \frac{8}{75} + \frac{18}{75} - \frac{4}{75} = \frac{22}{75}$.`,
        ],
      },
    },
  ],
};
