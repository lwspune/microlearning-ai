import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Two dice are thrown. A sum of $11$ needs a $5$ and a $6$; a sum of $12$ needs a $6$ and a $6$. **One way each, so are they equally likely?**`,
    reveal: t`No. Paint one die red. Then $11$ comes two ways, red $5$ with blue $6$ or red $6$ with blue $5$, but $12$ comes only one way. Of the $36$ equally likely pairs, $2$ give $11$ and $1$ gives $12$: $P(11) = \frac{2}{36} = \frac{1}{18}$, twice $P(12) = \frac{1}{36}$.`,
  },
  explanation: {
    intuition: t`When every outcome has the same chance, probability is a share: the outcomes you want out of all the outcomes. So list the sample space, count the outcomes in the event, and divide. The share can't be less than none or more than all, so a probability always lies between $0$ and $1$. The one thing to check first is that your listed outcomes really are equally likely: two dice give $36$ ordered pairs, not $21$ unordered ones.`,
    formal: t`**Classical definition.** If $S$ has $n(S)$ equally likely outcomes and the event $A$ contains $n(A)$ of them, then $$P(A) = \frac{n(A)}{n(S)}.$$

**Properties.** $0 \le P(A) \le 1$, $P(\phi) = 0$ and $P(S) = 1$. The probabilities of all the outcomes total $1$. So $P(A) = 0.4$, $P(B) = 0.6$, $P(C) = 0.2$ for mutually exclusive events covering $S$ is impossible: the total is $1.2$.

**Equally likely outcomes.** Two dice: $6 \times 6 = 36$ ordered pairs, and $(1, 4)$ is a different outcome from $(4, 1)$. A bag of balls: count every ball, not every colour.

**Example.** One card from a pack of $52$: $P(\text{king or queen}) = \frac{4 + 4}{52} = \frac{2}{13}$.

**Outcomes not equally likely.** Give each a weight and scale so they total $1$. A coin with heads twice as likely as tails: $P(H) = 2k$, $P(T) = k$, $3k = 1$, so $P(H) = \frac{2}{3}$.`,
    worked: {
      prompt: t`A box contains $75$ tickets numbered $1$ to $75$. A ticket is drawn at random. Find the probability that the number on it is divisible by $3$ and $5$.`,
      steps: [
        t`Every ticket is equally likely, so $n(S) = 75$.`,
        t`Divisible by both $3$ and $5$ means divisible by $15$.`,
        t`The multiples of $15$ up to $75$: $15, 30, 45, 60, 75$. So $n(A) = 5$, counting $75$ itself.`,
        t`$P(A) = \frac{n(A)}{n(S)} = \frac{5}{75} = \frac{1}{15}$.`,
      ],
      answer: t`$\frac{1}{15}$`,
    },
    visualSpec: t`A $6 \times 6$ grid of two-dice outcomes: pick an event and its cells light up with $\frac{n(A)}{36}$ beside it; a toggle folds the grid to $21$ unordered pairs to show why that list is not equally likely.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Counts outcomes that are not equally likely as if they were: two dice as $21$ unordered pairs, balls by colour, a year as '$52$ or $53$ Sundays', a loaded die as fair`,
      remediation: t`$P(A) = \frac{n(A)}{n(S)}$ only works when the outcomes are equally likely. List ones that are: two dice give $36$ ordered pairs, with $(1, 4)$ and $(4, 1)$ different, and a bag gives one outcome per ball.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Divides the favourable outcomes by the unfavourable ones, $\frac{n(A)}{n(S) - n(A)}$`,
      remediation: t`Divide by all the outcomes, $n(S)$, not just the ones where $A$ fails. Favourable to unfavourable is the odds, not the probability.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Takes two dice to give $6 + 6 = 12$ outcomes, adding where the counting principle multiplies`,
      remediation: t`Each of the $6$ faces of the first die goes with each of the $6$ faces of the second, so $n(S) = 6 \times 6 = 36$ ordered pairs.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: t`Reads 'at least $k$' as 'more than $k$', leaving out $k$ itself`,
      remediation: t`'At least $k$' means $k$ or more, so the outcomes equal to $k$ count too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Counts the outcomes where the event fails and gives that share as the answer",
      remediation: t`$n(A)$ counts the outcomes where $A$ happens. Check which event the question asks for before you divide.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Takes 'proportional to $j$' as $P(j) = \frac{j}{6}$, never checking that the probabilities total $1$`,
      remediation: t`The probabilities of all the outcomes must add to $1$: write $P(j) = kj$ and find $k$ from $k(1 + 2 + \cdots + 6) = 1$. A value above $1$ can never be a probability.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M3 applies only to two-dice items (C02-Q1, C02-Q3); C02-M4 needs an 'at least' (C02-Q2); C02-M6 needs a loaded die (C02-Q6).",
    t`C02-M2 gives a value above $1$ whenever $P(A) > \frac{1}{2}$, so it is left off C02-Q3; C02-M5 equals the key when $P(A) = \frac{1}{2}$.`,
    t`Two book questions were changed so the key and a distractor differ: C02-Q3 asks for an odd product (the book's Misc I Q3 asks even, $\frac{3}{4}$, which is C02-M5's answer here), and C02-Q4 has $12$ red balls, not $10$ (with $10$, 'blue or black' is $\frac{1}{2}$, equal to its complement).`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q6(i)" },
      stem: t`A fair die is thrown two times. The probability that the sum of the numbers on them is $5$ is`,
      verify: { kind: "value", inputs: { k: "5" }, params: { kind: "dice2", event: "sum_eq" } },
      options: [
        { key: "A", text: t`$\frac{1}{9}$`, correct: true, value: "1/9" },
        { key: "B", text: t`$\frac{2}{21}$`, correct: false, misconceptionId: "C02-M1", value: "2/21" },
        { key: "C", text: t`$\frac{1}{8}$`, correct: false, misconceptionId: "C02-M2", value: "1/8" },
        { key: "D", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C02-M3", value: "1/3" },
      ],
      solution: {
        steps: [
          t`Two throws give $6 \times 6 = 36$ equally likely ordered pairs, so $n(S) = 36$.`,
          t`Sum $5$: $(1, 4), (2, 3), (3, 2), (4, 1)$, so $n(A) = 4$.`,
          t`$P(A) = \frac{4}{36} = \frac{1}{9}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q6(ii)" },
      stem: t`A fair die is thrown two times. The probability that the sum of the numbers on them is at least $8$ is`,
      verify: { kind: "value", inputs: { k: "8" }, params: { kind: "dice2", event: "sum_ge" } },
      options: [
        { key: "A", text: t`$\frac{3}{7}$`, correct: false, misconceptionId: "C02-M1", value: "3/7" },
        { key: "B", text: t`$\frac{5}{7}$`, correct: false, misconceptionId: "C02-M2", value: "5/7" },
        { key: "C", text: t`$\frac{5}{18}$`, correct: false, misconceptionId: "C02-M4", value: "5/18" },
        { key: "D", text: t`$\frac{5}{12}$`, correct: true, value: "5/12" },
      ],
      solution: {
        steps: [
          t`$n(S) = 36$ ordered pairs.`,
          t`Count by sum: $8$ comes $5$ ways, $9$ comes $4$, $10$ comes $3$, $11$ comes $2$, $12$ comes $1$. So $n(A) = 15$.`,
          t`$P(A) = \frac{15}{36} = \frac{5}{12}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc I Q3" },
      stem: t`Two dice are thrown simultaneously. The probability of getting two numbers whose product is odd is`,
      verify: { kind: "value", inputs: {}, params: { kind: "dice2", event: "prod_odd" } },
      options: [
        { key: "A", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C02-M5", value: "3/4" },
        { key: "B", text: t`$\frac{1}{4}$`, correct: true, value: "1/4" },
        { key: "C", text: t`$\frac{2}{7}$`, correct: false, misconceptionId: "C02-M1", value: "2/7" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C02-M3", value: "1/2" },
      ],
      solution: {
        steps: [
          t`$n(S) = 36$ ordered pairs.`,
          t`A product is odd only when both numbers are odd: $3$ choices for the first die and $3$ for the second, so $n(A) = 9$.`,
          t`$P(A) = \frac{9}{36} = \frac{1}{4}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q9(ii)" },
      stem: t`A bag contains $12$ red, $4$ blue and $6$ black balls. A ball is drawn at random. The probability of drawing a blue or black ball is`,
      verify: { kind: "value", inputs: { r: "12", u: "4", b: "6" }, params: { kind: "bag", event: "blue,black" } },
      options: [
        { key: "A", text: t`$\frac{6}{11}$`, correct: false, misconceptionId: "C02-M5", value: "6/11" },
        { key: "B", text: t`$\frac{5}{11}$`, correct: true, value: "5/11" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C02-M1", value: "2/3" },
        { key: "D", text: t`$\frac{5}{6}$`, correct: false, misconceptionId: "C02-M2", value: "5/6" },
      ],
      solution: {
        steps: [
          t`Each of the $12 + 4 + 6 = 22$ balls is equally likely, so $n(S) = 22$.`,
          t`Blue or black: $n(A) = 4 + 6 = 10$.`,
          t`$P(A) = \frac{10}{22} = \frac{5}{11}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.1 Q11" },
      stem: t`A leap year is selected at random. The probability that it contains $53$ Sundays is`,
      verify: { kind: "value", inputs: { n: "366" }, params: { kind: "leap" } },
      options: [
        { key: "A", text: t`$\frac{5}{7}$`, correct: false, misconceptionId: "C02-M5", value: "5/7" },
        { key: "B", text: t`$\frac{2}{7}$`, correct: true, value: "2/7" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C02-M1", value: "1/2" },
        { key: "D", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C02-M2", value: "2/5" },
      ],
      solution: {
        steps: [
          t`$366 = 52 \times 7 + 2$: $52$ full weeks give $52$ Sundays, plus $2$ extra days in a row.`,
          t`The extra pair is one of $7$ equally likely pairs: (Sun, Mon), (Mon, Tue), …, (Sat, Sun). So $n(S) = 7$.`,
          t`Two of them contain a Sunday, (Sat, Sun) and (Sun, Mon), so $n(A) = 2$ and $P(A) = \frac{2}{7}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc II Q8" },
      stem: t`A die is loaded so that the probability of the face with $j$ dots turning up is proportional to $j$, for $j = 1, 2, \ldots, 6$. The probability that an odd number of dots turns up in one roll is`,
      verify: { kind: "value", inputs: {}, params: { kind: "loaded" } },
      options: [
        { key: "A", text: t`$\frac{3}{7}$`, correct: true, value: "3/7" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C02-M1", value: "1/2" },
        { key: "C", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C02-M2", value: "3/4" },
        { key: "D", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C02-M6", value: "3/2" },
      ],
      solution: {
        steps: [
          t`The faces are not equally likely: $P(j) = kj$.`,
          t`The six probabilities total $1$: $k(1 + 2 + 3 + 4 + 5 + 6) = 21k = 1$, so $k = \frac{1}{21}$.`,
          t`$P(\text{odd}) = \frac{1 + 3 + 5}{21} = \frac{9}{21} = \frac{3}{7}$.`,
        ],
      },
    },
  ],
};
