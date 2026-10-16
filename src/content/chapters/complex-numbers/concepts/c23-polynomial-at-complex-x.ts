import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c23: Concept = {
  id: "C23",
  status: "approved",
  hook: {
    prompt: t`If $x = 1 + i$, what is $x^2 - 2x + 2$? **Work it out, then guess why it's useful.**`,
    reveal: t`It's $0$: $(1 + i)^2 - 2(1 + i) + 2 = 2i - 2 - 2i + 2 = 0$. So any polynomial in $x$ can be cut down using $x^2 = 2x - 2$, instead of computing big powers.`,
  },
  explanation: {
    intuition: [
      t`To **evaluate** a polynomial at $x = 1 + i$ is to put $1 + i$ in place of $x$ and work it out.`,
      t`Done directly, that is slow: every power, such as $(1 + i)^4$, must be multiplied out.`,
      t`But $1 + i$ is a root of a short quadratic: $x^2 - 2x + 2 = 0$.`,
      t`This is its **minimal quadratic**: the quadratic $x^2 + bx + c$, with real $b$ and $c$, that it satisfies.`,
      t`Divide the polynomial by this quadratic: at $x = 1 + i$, the quadratic part is $0$.`,
      t`Only the **remainder**, the part left over after dividing, survives: it is the value.`,
    ],
    formal: [
      {
        title: "The minimal quadratic",
        points: [
          t`Take $x = p + qi$, with $p$ and $q$ real, and pair it with its conjugate $p - qi$.`,
          t`Their sum is $2p$, because the $qi$ parts cancel.`,
          t`Their product is $(p + qi)(p - qi)$, which is $p^2 + q^2$.`,
          t`So both are roots of $t^2 - 2pt + (p^2 + q^2) = 0$, written in $t$ since $x$ names the number.`,
          t`The middle term is $-2pt$, with a minus: recall that the roots add to $-\dfrac ba$.`,
          t`For example, $3 + 2i$ has sum $6$ and product $13$, so its quadratic is $t^2 - 6t + 13$.`,
        ],
      },
      {
        title: "The value is the remainder",
        points: [
          t`Divide the polynomial by the minimal quadratic, as in long division of numbers.`,
          t`The **quotient** is what the quadratic gets multiplied by; the remainder is what is left over.`,
          t`So the polynomial equals (quadratic) × (quotient) + (remainder).`,
          t`At $x = p + qi$ the quadratic is $0$, so only the remainder survives: it is the value, not $0$.`,
          t`For $x = 3 + 2i$, $x^3 - 6x^2 + 13x + 4$ equals $x(x^2 - 6x + 13) + 4$.`,
          t`The bracket is $0$ there, so the value is $4$.`,
        ],
      },
      {
        title: "Powers of the roots",
        points: [
          t`Let $\alpha$ and $\beta$ be the roots of a quadratic: recall that its coefficients give $\alpha + \beta$ and $\alpha\beta$.`,
          t`Sums of powers, such as $\alpha^2 + \beta^2$, can be built from those two alone.`,
          t`Squaring the sum, $(\alpha + \beta)^2$ is $\alpha^2 + 2\alpha\beta + \beta^2$.`,
          t`So $\alpha^2 + \beta^2$ equals $(\alpha + \beta)^2 - 2\alpha\beta$: subtract the $2\alpha\beta$, don't add it.`,
          t`For cubes, $\alpha^3 + \beta^3$ equals $(\alpha + \beta)^3$ minus $3\alpha\beta(\alpha + \beta)$.`,
          t`Powers don't split over sums: $\alpha^n + \beta^n$ is not $(\alpha + \beta)^n$, nor $n(\alpha + \beta)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $x = 2 + i$, find $x^2 - 4x + 9$.`,
      steps: [
        t`$x = 2 + i$ satisfies $t^2 - 4t + 5 = 0$.`,
        t`So $x^2 - 4x + 9$ equals $(x^2 - 4x + 5) + 4$, which is $0 + 4$.`,
      ],
      answer: t`$4$`,
    },
    visualSpec: t`A polynomial's value at a complex $x$ worked out two ways side by side: brute-force substitution with a growing pile of terms, and the short remainder after dividing by the minimal quadratic, landing on the same point.`,
  },
  misconceptions: [
    {
      id: "C23-M1",
      mistake: t`Reducing with the wrong-sign quadratic, $t^2 + 2pt + \ldots$`,
      remediation: t`For $x = p + qi$ the roots add to $+2p$, so the quadratic is $t^2 - 2pt + (p^2 + q^2)$.`,
      fallback: { kind: "concept", id: "C19" },
    },
    {
      id: "C23-M2",
      mistake: "Deciding the whole expression vanishes",
      remediation: "Only the quadratic part vanishes. Keep the remainder: it is the answer.",
      fallback: { kind: "ext", topic: "polynomial division" },
    },
    {
      id: "C23-M3",
      mistake: t`$\alpha^n + \beta^n = (\alpha + \beta)^n$`,
      remediation: t`Powers don't split over sums. Use $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ and build up from there.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C23-M4",
      mistake: t`A sign slip: $\alpha^2 + \beta^2 = (\alpha + \beta)^2 + 2\alpha\beta$`,
      remediation: t`$(\alpha + \beta)^2 = \alpha^2 + 2\alpha\beta + \beta^2$, so subtract $2\alpha\beta$.`,
      fallback: { kind: "concept", id: "C19" },
    },
    {
      id: "C23-M5",
      mistake: "Treating the roots as cube roots of unity",
      remediation: t`The roots of $x^2 - x + 1 = 0$ satisfy $\alpha^3 = -1$, not $1$: multiply by $x + 1$ to get $x^3 + 1 = 0$.`,
      fallback: { kind: "concept", id: "C19" },
    },
    {
      id: "C23-M6",
      mistake: t`Working with $i^2 = 1$`,
      remediation: t`$i^2 = -1$: so $(2 + i)^2 = 4 + 4i - 1 = 3 + 4i$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C23-M7",
      mistake: t`Treating the power as a multiple: $\alpha^n + \beta^n = n(\alpha + \beta)$`,
      remediation: t`A power is not a multiple. Use $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ and build up from there.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  items: [
    {
      id: "C23-Q1",
      source: { kind: "authored" },
      stem: t`If $x = 1 + i$, then $x^4 - 2x^3 + 2x^2 + 3 = ?$`,
      verify: { kind: "value", inputs: { x: "1+I" }, params: { op: "poly_at", poly: "t**4 - 2*t**3 + 2*t**2 + 3" } },
      options: [
        { key: "A", text: t`$3$`, correct: true, value: "3" },
        { key: "B", text: t`$-5 - 8 i$`, correct: false, misconceptionId: "C23-M1", value: "-5 - 8*I" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C23-M2", value: "0" },
        { key: "D", text: t`$7 + 4 i$`, correct: false, misconceptionId: "C23-M6", value: "7 + 4*I" },
      ],
      solution: {
        steps: [
          t`$x = 1 + i$ satisfies $t^2 - 2t + 2 = 0$ (sum of the roots $2$, product $1 + 1 = 2$).`,
          t`Factor out the quadratic: $x^4 - 2x^3 + 2x^2 + 3 = x^2(x^2 - 2x + 2) + 3$.`,
          t`The bracket is $0$, so the value is $3$.`,
        ],
      },
    },
    {
      id: "C23-Q2",
      source: { kind: "authored" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $x^2 - x + 1 = 0$, then $\alpha^3 + \beta^3 = ?$`,
      verify: { kind: "value", inputs: { b: "-1", c: "1", n: "3" }, params: { op: "power_sum" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C23-M3", value: "1" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C23-M5", value: "2" },
        { key: "C", text: t`$-2$`, correct: true, value: "-2" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C23-M7", value: "3" },
      ],
      solution: {
        steps: [
          t`From $x^2 - x + 1 = 0$: $\alpha + \beta = 1$ and $\alpha\beta = 1$.`,
          t`$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$.`,
          t`So $\alpha^3 + \beta^3 = 1 - 3 = -2$.`,
        ],
      },
    },
    {
      id: "C23-Q3",
      source: { kind: "authored" },
      stem: t`If $x = 2 - i$, then $x^3 - 4x^2 + 5x + 7 = ?$`,
      verify: { kind: "value", inputs: { x: "2-I" }, params: { op: "poly_at", poly: "t**3 - 4*t**2 + 5*t + 7" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`$-17 - 32 i$`, correct: false, misconceptionId: "C23-M1", value: "-17 - 32*I" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C23-M2", value: "0" },
        { key: "D", text: t`$11 - 2 i$`, correct: false, misconceptionId: "C23-M6", value: "11 - 2*I" },
      ],
      solution: {
        steps: [
          t`$x = 2 - i$ satisfies $t^2 - 4t + 5 = 0$ (sum of the roots $4$, product $4 + 1 = 5$).`,
          t`Factor out the quadratic: $x^3 - 4x^2 + 5x + 7 = x(x^2 - 4x + 5) + 7$.`,
          t`The bracket is $0$, so the value is $7$.`,
        ],
      },
    },
    {
      id: "C23-Q4",
      source: { kind: "authored" },
      stem: t`If $\alpha$ and $\beta$ are the roots of $x^2 + x + 1 = 0$, then $\alpha^2 + \beta^2 = ?$`,
      verify: { kind: "value", inputs: { b: "1", c: "1", n: "2" }, params: { op: "power_sum" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C23-M3", value: "1" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C23-M4", value: "3" },
        { key: "C", text: t`$-1$`, correct: true, value: "-1" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C23-M7", value: "-2" },
      ],
      solution: {
        steps: [
          t`From $x^2 + x + 1 = 0$: $\alpha + \beta = -1$ and $\alpha\beta = 1$.`,
          t`$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 1 - 2 = -1$.`,
        ],
      },
    },
    {
      id: "C23-Q5",
      source: { kind: "authored" },
      stem: t`If $x = 1 - i$, then $x^2 - 2x + 7 = ?$`,
      verify: { kind: "value", inputs: { x: "1-I" }, params: { op: "poly_at", poly: "t**2 - 2*t + 7" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$9 + 4 i$`, correct: false, misconceptionId: "C23-M1", value: "9 + 4*I" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C23-M2", value: "0" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C23-M6", value: "7" },
      ],
      solution: {
        steps: [
          t`$x = 1 - i$ satisfies $t^2 - 2t + 2 = 0$ (sum of the roots $2$, product $1 + 1 = 2$).`,
          t`So $x^2 - 2x + 7 = (x^2 - 2x + 2) + 5 = 0 + 5 = 5$.`,
        ],
      },
    },
  ],
};
