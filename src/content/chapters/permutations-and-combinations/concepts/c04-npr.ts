import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$8$ runners finish a race. Gold, silver and bronze go to three of them. **Is the number of possible podiums $8 \times 8 \times 8 = 512$?**`,
    reveal: t`No. Once a runner has gold, they can't also take silver. Gold has $8$ choices, silver the $7$ runners left, bronze the $6$ left after that: $8 \times 7 \times 6 = 336$ podiums. That is $^8P_3$, the number of ways to arrange $3$ of $8$ different things.`,
  },
  explanation: {
    intuition: t`Arrange $r$ of $n$ different things by filling $r$ places one at a time. The first place can take any of the $n$ things. That thing is now used, so the second place has $n - 1$ choices, the third $n - 2$, and so on. Multiply the choices: one factor per place, so exactly $r$ factors. The product is the top of $n!$ with the tail $(n - r)!$ cut off, which is why it equals $\frac{n!}{(n - r)!}$.`,
    formal: t`**Definition.** $^nP_r$ is the number of arrangements of $r$ things taken from $n$ different things, with no thing used twice ($0 \le r \le n$). Order matters: AB and BA are different arrangements.

**Formula.**
$$^nP_r = n(n - 1)(n - 2)\cdots(n - r + 1) = \frac{n!}{(n - r)!}$$
There are exactly $r$ factors, and the last one is $n - r + 1$. For example, $^6P_2 = 6 \times 5 = 30$.

**Special values.** $^nP_n = n!$ (all $n$ things in a row, since $0! = 1$), $^nP_1 = n$ and $^nP_0 = 1$.

**Ratios with the same $n$.** The $n!$ cancels:
$$\frac{^nP_a}{^nP_b} = \frac{(n - b)!}{(n - a)!}$$
For example, $\frac{^nP_4}{^nP_2} = \frac{(n - 2)!}{(n - 4)!} = (n - 2)(n - 3)$. It is not $^nP_2$: these are not powers, and indices don't subtract.`,
    worked: {
      prompt: t`Find $r$ if $^{56}P_{r+6} : {}^{54}P_{r+3} = 30800 : 1$.`,
      steps: [
        t`Write both with the formula: $^{56}P_{r+6} = \frac{56!}{(50 - r)!}$ and $^{54}P_{r+3} = \frac{54!}{(51 - r)!}$.`,
        t`Divide: $\frac{56!}{54!} \cdot \frac{(51 - r)!}{(50 - r)!} = 56 \times 55 \times (51 - r) = 3080(51 - r)$.`,
        t`Set it equal to the ratio: $3080(51 - r) = 30800$, so $51 - r = 10$ and $r = 41$.`,
        t`Check: $r + 6 = 47 \le 56$ and $r + 3 = 44 \le 54$, so both permutations make sense.`,
      ],
      answer: t`$r = 41$.`,
    },
    visualSpec: t`Drag $r$ to set the number of boxes in a row: each box shows its count of choices $n, n - 1, \ldots, n - r + 1$, the product updates, and the unused tail $(n - r)!$ of $n!$ is greyed out.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Lets a thing be used again: gives every place all $n$ choices, $n^r$`,
      remediation: t`In $^nP_r$ no thing is used twice, so each place has one choice fewer than the place before: $n(n - 1)\cdots(n - r + 1)$. Only when repetition is allowed does every place have $n$ choices.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`Writes one factor too many: $n(n - 1)\cdots(n - r)$, ending at $n - r$`,
      remediation: t`$^nP_r$ fills $r$ places, so it has exactly $r$ factors, and the last is $n - r + 1$. In $\frac{n!}{(n - r)!}$ the factor $n - r$ is inside $(n - r)!$, so it cancels.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M3",
      mistake: t`Writes one factor too few: $n(n - 1)\cdots(n - r + 2)$, filling only $r - 1$ places`,
      remediation: t`$^nP_r$ fills $r$ places, so it has exactly $r$ factors, the last being $n - r + 1$. Count the factors before you multiply: $^nP_3$ has three.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: t`Divides permutations like powers: $^nP_a \div {}^nP_b = {}^nP_{a-b}$`,
      remediation: t`Write each permutation as $\frac{n!}{(n - r)!}$ and cancel $n!$: $\frac{^nP_a}{^nP_b} = \frac{(n - b)!}{(n - a)!}$, the factors from $n - b$ down to $n - a + 1$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    t`C04-M1 has no whole-number answer on an equation $^nP_a = k \cdot {}^nP_b$ when $a - b \ge 2$ (it gives $n^{a-b} = k$, and $k$, a product of $a - b$ consecutive numbers, is never a perfect power), so diagnose it with items that count or evaluate.`,
    t`C04-M4 only shows on a ratio of two permutations with the same $n$; it can't show on an item that counts or evaluates one permutation.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.5.1 SolvedEx.1" },
      stem: t`The value of $^{10}P_3$ is:`,
      verify: { kind: "value", inputs: { n: "10", r: "3" }, params: { ask: "eval" } },
      options: [
        { key: "A", text: t`$5040$`, correct: false, misconceptionId: "C04-M2", value: "5040" },
        { key: "B", text: t`$90$`, correct: false, misconceptionId: "C04-M3", value: "90" },
        { key: "C", text: t`$720$`, correct: true, value: "720" },
        { key: "D", text: t`$1000$`, correct: false, misconceptionId: "C04-M1", value: "1000" },
      ],
      solution: {
        steps: [
          t`$^{10}P_3 = \frac{10!}{7!}$: three factors, starting at $10$.`,
          t`$^{10}P_3 = 10 \times 9 \times 8 = 720$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q10(b)" },
      stem: t`How many $4$-digit numbers can be formed from the digits $1, 2, 4, 5, 6, 8$ if no digit is repeated?`,
      verify: { kind: "value", inputs: { n: "6", r: "4" }, params: { ask: "eval" } },
      options: [
        { key: "A", text: t`$1296$`, correct: false, misconceptionId: "C04-M1", value: "1296" },
        { key: "B", text: t`$720$`, correct: false, misconceptionId: "C04-M2", value: "720" },
        { key: "C", text: t`$120$`, correct: false, misconceptionId: "C04-M3", value: "120" },
        { key: "D", text: t`$360$`, correct: true, value: "360" },
      ],
      solution: {
        steps: [
          t`A $4$-digit number fills $4$ places from $6$ different digits, with no digit used twice. None of the digits is $0$, so any digit can come first.`,
          t`The count is $^6P_4 = 6 \times 5 \times 4 \times 3 = 360$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q5(b)" },
      stem: t`How many $4$-letter words, with or without meaning, can be formed from the letters of the word MADHURI if no letter is repeated?`,
      verify: { kind: "value", inputs: { n: "7", r: "4" }, params: { ask: "eval" } },
      options: [
        { key: "A", text: t`$2520$`, correct: false, misconceptionId: "C04-M2", value: "2520" },
        { key: "B", text: t`$210$`, correct: false, misconceptionId: "C04-M3", value: "210" },
        { key: "C", text: t`$840$`, correct: true, value: "840" },
        { key: "D", text: t`$2401$`, correct: false, misconceptionId: "C04-M1", value: "2401" },
      ],
      solution: {
        steps: [
          t`MADHURI has $7$ letters, all different: M, A, D, H, U, R, I.`,
          t`A $4$-letter word with no letter repeated fills $4$ places from these $7$: $^7P_4$.`,
          t`$^7P_4 = 7 \times 6 \times 5 \times 4 = 840$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q4" },
      stem: t`The $11$ letters A, H, I, M, O, T, U, V, W, X, Y look the same in a mirror. How many $3$-letter passwords can be made from them if no letter is used twice in a password?`,
      verify: { kind: "value", inputs: { n: "11", r: "3" }, params: { ask: "eval" } },
      options: [
        { key: "A", text: t`$1331$`, correct: false, misconceptionId: "C04-M1", value: "1331" },
        { key: "B", text: t`$7920$`, correct: false, misconceptionId: "C04-M2", value: "7920" },
        { key: "C", text: t`$110$`, correct: false, misconceptionId: "C04-M3", value: "110" },
        { key: "D", text: t`$990$`, correct: true, value: "990" },
      ],
      solution: {
        steps: [
          t`A password fills $3$ places from $11$ different letters, with no letter used twice: $^{11}P_3$.`,
          t`$^{11}P_3 = 11 \times 10 \times 9 = 990$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.5.1 SolvedEx.6" },
      stem: t`If $^nP_5 = 42 \times {}^nP_3$, then $n =$`,
      verify: { kind: "value", inputs: { a: "5", b: "3", k: "42" }, params: { ask: "solve" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C04-M4", value: "7" },
        { key: "B", text: t`$10$`, correct: true, value: "10" },
        { key: "C", text: t`$11$`, correct: false, misconceptionId: "C04-M2", value: "11" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C04-M3", value: "9" },
      ],
      solution: {
        steps: [
          t`$\frac{n!}{(n - 5)!} = 42 \cdot \frac{n!}{(n - 3)!}$. Cancel $n!$ and multiply by $(n - 3)!$: $\frac{(n - 3)!}{(n - 5)!} = 42$.`,
          t`$\frac{(n - 3)!}{(n - 5)!} = (n - 3)(n - 4)$, so $(n - 3)(n - 4) = 42 = 7 \times 6$.`,
          t`$n - 3 = 7$, so $n = 10$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.3 Q1" },
      stem: t`If $^nP_6 : {}^nP_3 = 120 : 1$, then $n =$`,
      verify: { kind: "value", inputs: { a: "6", b: "3", k: "120" }, params: { ask: "solve" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$10$`, correct: false, misconceptionId: "C04-M2", value: "10" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C04-M3", value: "8" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C04-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`$\frac{^nP_6}{^nP_3} = \frac{(n - 3)!}{(n - 6)!} = (n - 3)(n - 4)(n - 5)$.`,
          t`$(n - 3)(n - 4)(n - 5) = 120 = 6 \times 5 \times 4$, so $n - 3 = 6$.`,
          t`$n = 9$.`,
        ],
      },
    },
  ],
};
