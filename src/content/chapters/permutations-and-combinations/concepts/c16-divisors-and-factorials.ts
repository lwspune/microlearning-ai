import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c16: Concept = {
  id: "C16",
  status: "approved",
  hook: {
    prompt: t`How many numbers divide 360 exactly? Testing 1 to 360 is slow. Is there a quicker way?`,
    reveal: t`Yes: $360 = 2^3 \cdot 3^2 \cdot 5$, and a divisor picks a power of each prime: $4 \times 3 \times 2 = 24$.`,
  },
  explanation: {
    intuition: [
      t`Every divisor of $N$ is built from $N$'s prime factors.`,
      t`For each prime, a divisor picks one of its powers, from $p^0$ up.`,
      t`Multiplying the choices counts the divisors.`,
      t`Powers of a prime in $n!$ come from counting multiples.`,
    ],
    formal: [
      {
        title: "Divisors",
        points: [
          t`If $N = p^a q^b r^c$, it has $(a + 1)(b + 1)(c + 1)$ divisors.`,
          t`Even divisors must take at least one 2: drop the $2^0$ choice.`,
          t`Sum of divisors: $(1 + p + \dots + p^a)(1 + q + \dots + q^b)\cdots$`,
        ],
      },
      {
        title: "Primes in a factorial",
        points: [
          t`The power of prime $p$ in $n!$ is $\left[\frac{n}{p}\right] + \left[\frac{n}{p^2}\right] + \dots$`,
          t`Here $[\,]$ is the greatest integer part.`,
          t`Each term counts the multiples of $p$, $p^2$, and so on.`,
          t`Trailing zeros of $n!$ equal the power of 5, since 2s are plentiful.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many divisors has $1800 = 2^3 \cdot 3^2 \cdot 5^2$, and how many of them are odd?`,
      steps: [
        t`All: $4 \times 3 \times 3 = 36$.`,
        t`Odd divisors take $2^0$ only: $3 \times 3 = 9$.`,
      ],
      answer: t`36 divisors, 9 of them odd`,
    },
    visualSpec: t`A grid of a divisor's choices, one row per prime and one column per power.`,
  },
  misconceptions: [
    {
      id: "C16-M1",
      mistake: "Multiplies the exponents.",
      remediation: t`Each exponent $a$ gives $a + 1$ choices, from $p^0$ to $p^a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C16-M2",
      mistake: "Adds the exponents.",
      remediation: "Choices for different primes multiply, not add.",
      fallback: { kind: "none" },
    },
    {
      id: "C16-M3",
      mistake: "Leaves out 1 and N.",
      remediation: "Both 1 and N are divisors too.",
      fallback: { kind: "none" },
    },
    {
      id: "C16-M4",
      mistake: "Counts every divisor.",
      remediation: "Even divisors need at least one factor 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C16-M5",
      mistake: "Counts the odd ones.",
      remediation: t`Odd divisors take $2^0$; the even ones are the rest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C16-M6",
      mistake: "Drops two choices of 2.",
      remediation: t`Only $2^0$ is excluded: 3 choices for $2^1, 2^2, 2^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C16-M7",
      mistake: "Takes the first term only.",
      remediation: t`Multiples of 4, 8, 16 give extra 2s: keep adding $\left[\frac{n}{p^k}\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C16-M8",
      mistake: t`Stops at $p^2$.`,
      remediation: t`Continue while $p^k \le n$: 8 and 16 count too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C16-M9",
      mistake: "Multiplies the terms.",
      remediation: "The powers add up, so add the terms.",
      fallback: { kind: "none" },
    },
    {
      id: "C16-M10",
      mistake: "Counts multiples of 5 only.",
      remediation: t`25, 50, 75, 100 each give a second 5: add $\left[\frac{100}{25}\right]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C16-M11",
      mistake: "Counts the 2s.",
      remediation: "A zero needs a 2 and a 5; the 5s run out first.",
      fallback: { kind: "none" },
    },
    {
      id: "C16-M12",
      mistake: "Counts multiples of 10.",
      remediation: "Count the 5s instead; 2s are plentiful.",
      fallback: { kind: "none" },
    },
    {
      id: "C16-M13",
      mistake: "Counts instead of summing.",
      remediation: t`The sum is $(1 + 2 + 4 + 8)(1 + 3 + 9)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C16-M14",
      mistake: "Adds the factors.",
      remediation: "Multiply the two bracketed sums.",
      fallback: { kind: "none" },
    },
    {
      id: "C16-M15",
      mistake: "Leaves out N itself.",
      remediation: "N divides itself, so it is in the sum.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C16-Q1",
      source: { kind: "authored" },
      stem: t`The number of divisors of $360$ is`,
      verify: { kind: "value", inputs: { N: "360" }, params: { q: "count" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C16-M1", value: "6" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C16-M2", value: "7" },
        { key: "C", text: t`$22$`, correct: false, misconceptionId: "C16-M3", value: "22" },
        { key: "D", text: t`$24$`, correct: true, value: "24" },
      ],
      solution: {
        steps: [
          t`$360 = 2^3 \cdot 3^2 \cdot 5$`,
          t`$4 \times 3 \times 2 = 24$`,
        ],
      },
    },
    {
      id: "C16-Q2",
      source: { kind: "authored" },
      stem: t`The number of even divisors of $360$ is`,
      verify: { kind: "value", inputs: { N: "360" }, params: { q: "even" } },
      options: [
        { key: "A", text: t`$18$`, correct: true, value: "18" },
        { key: "B", text: t`$24$`, correct: false, misconceptionId: "C16-M4", value: "24" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C16-M5", value: "6" },
        { key: "D", text: t`$12$`, correct: false, misconceptionId: "C16-M6", value: "12" },
      ],
      solution: {
        steps: [
          t`Take $2^1$, $2^2$ or $2^3$: 3 choices.`,
          t`$3 \times 3 \times 2 = 18$`,
        ],
      },
    },
    {
      id: "C16-Q3",
      source: { kind: "authored" },
      stem: t`The highest power of $2$ that divides $20!$ is $2^k$, where $k =$`,
      verify: { kind: "value", inputs: { n: "20", p: "2" }, params: { q: "legendre" } },
      options: [
        { key: "A", text: t`$100$`, correct: false, misconceptionId: "C16-M9", value: "100" },
        { key: "B", text: t`$18$`, correct: true, value: "18" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C16-M7", value: "10" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C16-M8", value: "15" },
      ],
      solution: {
        steps: [
          t`$10 + 5 + 2 + 1$`,
          t`$= 18$`,
        ],
      },
    },
    {
      id: "C16-Q4",
      source: { kind: "authored" },
      stem: t`The number of zeros at the end of $100!$ is`,
      verify: { kind: "value", inputs: { n: "100" }, params: { q: "zeros" } },
      options: [
        { key: "A", text: t`$24$`, correct: true, value: "24" },
        { key: "B", text: t`$20$`, correct: false, misconceptionId: "C16-M10", value: "20" },
        { key: "C", text: t`$97$`, correct: false, misconceptionId: "C16-M11", value: "97" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C16-M12", value: "10" },
      ],
      solution: {
        steps: [
          t`Fives: $20 + 4$`,
          t`$= 24$`,
        ],
      },
    },
    {
      id: "C16-Q5",
      source: { kind: "authored" },
      stem: t`The sum of the divisors of $72$ is`,
      verify: { kind: "value", inputs: { N: "72" }, params: { q: "sum" } },
      options: [
        { key: "A", text: t`$123$`, correct: false, misconceptionId: "C16-M15", value: "123" },
        { key: "B", text: t`$195$`, correct: true, value: "195" },
        { key: "C", text: t`$12$`, correct: false, misconceptionId: "C16-M13", value: "12" },
        { key: "D", text: t`$28$`, correct: false, misconceptionId: "C16-M14", value: "28" },
      ],
      solution: {
        steps: [
          t`$72 = 2^3 \cdot 3^2$`,
          t`$(1 + 2 + 4 + 8)(1 + 3 + 9)$`,
          t`$= 15 \times 13 = 195$`,
        ],
      },
    },
  ],
};
