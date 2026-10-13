import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Work out $i^1, i^2, i^3, i^4, i^5$. **What do you notice?**`,
    reveal: t`They repeat every four: $i, -1, -i, 1$, then $i$ again. So every power of $i$ is one of just four values.`,
  },
  explanation: {
    intuition: t`Each extra factor of $i$ moves one step around the cycle $i \to -1 \to -i \to 1 \to i$. The cycle has length 4, so only the remainder of the exponent on division by 4 matters.`,
    formal: t`$i^1 = i$, $i^2 = -1$, $i^3 = i^2\cdot i = -i$, $i^4 = 1$.

For any integer $n$, write $n = 4q + r$ with $r \in \{0, 1, 2, 3\}$. Then $i^n = i^r$:
- $r = 0$: $1$
- $r = 1$: $i$
- $r = 2$: $-1$
- $r = 3$: $-i$

**Negative exponents** work the same way, with $r$ still between 0 and 3: $i^{-2} = \dfrac{1}{i^2} = -1$, which matches $r = 2$ because $-2 = 4(-1) + 2$.`,
    worked: {
      prompt: t`Find $i^{58}$.`,
      steps: [
        t`Divide by 4: $58 = 4 \times 14 + 2$, so $r = 2$.`,
        t`$i^{58} = i^2 = -1$.`,
      ],
      answer: t`$-1$`,
    },
    visualSpec: t`A clock with four positions ($1$, $i$, $-1$, $-i$) and a hand that steps once for each factor of $i$. Typing an exponent spins the hand that many steps, showing that only the remainder matters.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`$i^3 = i$`,
      remediation: t`$i^3 = i^2\cdot i = -1\cdot i = -i$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Off by one in the cycle: reading remainder $r$ as $i^{r+1}$`,
      remediation: t`Remainder $r$ means $i^n = i^r$ exactly: remainder 1 is $i$, remainder 2 is $-1$, remainder 3 is $-i$, remainder 0 is $1$.`,
      fallback: { kind: "ext", topic: "remainders on division" },
    },
    {
      id: "C02-M3",
      mistake: t`Pairing up $i^2 = -1$ and forgetting the leftover $i$ in an odd power`,
      remediation: t`For an odd power, one $i$ is left over after pairing: $i^{2k+1} = (i^2)^k\cdot i$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M4",
      mistake: "Ignoring the minus in a negative exponent",
      remediation: t`$i^{-n} = \dfrac{1}{i^n}$, which is usually different from $i^n$. Find the remainder of $-n$ on division by 4 (between 0 and 3).`,
      fallback: { kind: "ext", topic: "negative exponents" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "authored" },
      stem: t`$i^{43} = ?$`,
      verify: { kind: "value", inputs: { n: "43" } },
      options: [
        { key: "A", text: t`$- i$`, correct: true, value: "-I" },
        { key: "B", text: t`$i$`, correct: false, misconceptionId: "C02-M1", value: "I" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
      ],
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`$i^{-1} = ?$`,
      verify: { kind: "value", inputs: { n: "-1" } },
      options: [
        { key: "A", text: t`$i$`, correct: false, misconceptionId: "C02-M4", value: "I" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
        { key: "D", text: t`$- i$`, correct: true, value: "-I" },
      ],
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`$i^{37} = ?$`,
      verify: { kind: "value", inputs: { n: "37" } },
      options: [
        { key: "A", text: t`$i$`, correct: true, value: "I" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C02-M2", value: "-1" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C02-M3", value: "1" },
      ],
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`$i^{-3} = ?$`,
      verify: { kind: "value", inputs: { n: "-3" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C02-M3", value: "1" },
        { key: "B", text: t`$i$`, correct: true, value: "I" },
        { key: "C", text: t`$- i$`, correct: false, misconceptionId: "C02-M4", value: "-I" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C02-M2", value: "-1" },
      ],
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`$i^{99} = ?$`,
      verify: { kind: "value", inputs: { n: "99" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C02-M3", value: "-1" },
        { key: "B", text: t`$- i$`, correct: true, value: "-I" },
        { key: "C", text: t`$i$`, correct: false, misconceptionId: "C02-M1", value: "I" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C02-M2", value: "1" },
      ],
    },
  ],
};
