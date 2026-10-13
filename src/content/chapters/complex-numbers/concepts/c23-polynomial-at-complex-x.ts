import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c23: Concept = {
  id: "C23",
  status: "draft",
  hook: {
    prompt: t`If $x = 1 + i$, what is $x^2 - 2x + 2$? **Work it out, then guess why it's useful.**`,
    reveal: t`It's $0$: $(1 + i)^2 - 2(1 + i) + 2 = 2i - 2 - 2i + 2 = 0$. So any polynomial in $x$ can be cut down using $x^2 = 2x - 2$, instead of computing big powers.`,
  },
  explanation: {
    intuition: t`Substituting a complex number into a long polynomial is slow. Instead, find the quadratic the number satisfies (its minimal quadratic). That quadratic is 0, so divide the polynomial by it: only the remainder survives.`,
    formal: t`If $x = p + qi$, then $x$ is a root of $t^2 - 2pt + (p^2 + q^2) = 0$ (sum of the roots $2p$, product $p^2 + q^2$).

Write the polynomial as (quadratic) × (something) + remainder. The quadratic is 0 at $x$, so the value is just the remainder.

**Powers of roots:** for roots $\alpha$ and $\beta$, work from $\alpha + \beta$ and $\alpha\beta$, e.g. $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$. Note that $\alpha^n + \beta^n \ne (\alpha + \beta)^n$.`,
    worked: {
      prompt: t`If $x = 2 + i$, find $x^2 - 4x + 9$.`,
      steps: [
        t`$x = 2 + i$ satisfies $t^2 - 4t + 5 = 0$.`,
        t`So $x^2 - 4x + 9 = (x^2 - 4x + 5) + 4 = 0 + 4$.`,
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
    },
  ],
};
