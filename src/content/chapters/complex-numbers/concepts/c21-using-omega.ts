import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c21: Concept = {
  id: "C21",
  status: "approved",
  hook: {
    prompt: t`$1 + \omega + \omega^2 = 0$. **Write $1 + \omega$ as a single term.**`,
    reveal: t`$1 + \omega = -\omega^2$. Any two of $1, \omega, \omega^2$ add to minus the third.`,
  },
  explanation: {
    intuition: t`Most $\omega$ problems collapse with one move: group terms so that $1 + \omega + \omega^2 = 0$ can replace a pair by minus the third. A messy bracket then becomes a single power of $\omega$, and $\omega^3 = 1$ finishes the job.`,
    formal: t`From $1 + \omega + \omega^2 = 0$:
- $1 + \omega = -\omega^2$, $\;1 + \omega^2 = -\omega$, $\;\omega + \omega^2 = -1$
- so $p + q\omega + p\omega^2 = p(1 + \omega^2) + q\omega = (q - p)\omega$

**Roots of $z^3 = k$:** if $c$ is the real cube root of $k$, the roots are $c$, $c\omega$ and $c\omega^2$. Scale **all three**.

A power doesn't split over a sum: $(a + b)^n \ne a^n + b^n$.`,
    worked: {
      prompt: t`Simplify $(3 + 3\omega + 7\omega^2)^3$.`,
      steps: [
        t`Group: $3(1 + \omega) + 7\omega^2 = -3\omega^2 + 7\omega^2 = 4\omega^2$.`,
        t`Cube: $(4\omega^2)^3 = 64\omega^6 = 64$.`,
      ],
      answer: t`$64$`,
    },
    visualSpec: t`The three points $1$, $\omega$ and $\omega^2$ as arrows from the origin. Dragging the coefficients scales each arrow; equal coefficients visibly cancel, leaving one arrow.`,
  },
  misconceptions: [
    {
      id: "C21-M1",
      mistake: t`Dropping the sign: $1 + \omega^2 = \omega$`,
      remediation: t`$1 + \omega + \omega^2 = 0$ gives $1 + \omega^2 = -\omega$: keep the minus.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C21-M2",
      mistake: t`$1 + \omega^2 = -\omega^2$`,
      remediation: t`Taking $\omega$ out of $1 + \omega + \omega^2 = 0$ leaves $1 + \omega^2 = -\omega$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C21-M3",
      mistake: "Raising each term to the power separately",
      remediation: "A power doesn't split over a sum. Simplify the bracket to one term first, then raise it to the power.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C21-M4",
      mistake: t`Forgetting to scale $\omega$ and $\omega^2$ by the real cube root`,
      remediation: t`All three roots of $z^3 = k$ are scaled: $c$, $c\omega$, $c\omega^2$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C21-M5",
      mistake: t`Giving the roots of $z^3 = -k$ instead of $z^3 = k$`,
      remediation: t`Check the sign: the real cube root of $8$ is $2$, and of $-27$ is $-3$.`,
      fallback: { kind: "concept", id: "C20" },
    },
  ],
  items: [
    {
      id: "C21-Q1",
      source: { kind: "authored" },
      stem: t`$(1 + \omega^2)^3 = ?$`,
      verify: { kind: "value", inputs: { p: "1", q: "0", n: "3" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C21-M1", value: "1" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C21-M3", value: "2" },
      ],
    },
    {
      id: "C21-Q2",
      source: { kind: "authored" },
      stem: t`$(1 - \omega + \omega^2)^4 = ?$`,
      verify: { kind: "value", inputs: { p: "1", q: "-1", n: "4" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C21-M1", value: "0" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C21-M2", value: "1" },
        { key: "C", text: t`$16 \omega$`, correct: true, value: "16*omega" },
      ],
    },
    {
      id: "C21-Q3",
      source: { kind: "authored" },
      stem: t`$(2 + 5\omega + 2\omega^2)^6 = ?$`,
      verify: { kind: "value", inputs: { p: "2", q: "5", n: "6" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$729$`, correct: true, value: "729" },
        { key: "B", text: t`$117649$`, correct: false, misconceptionId: "C21-M1", value: "117649" },
        { key: "C", text: t`$15753$`, correct: false, misconceptionId: "C21-M3", value: "15753" },
      ],
    },
    {
      id: "C21-Q4",
      source: { kind: "authored" },
      stem: t`$(2 - \omega + 2\omega^2)^3 = ?$`,
      verify: { kind: "value", inputs: { p: "2", q: "-1", n: "3" }, params: { op: "binpow" } },
      options: [
        { key: "A", text: t`$-27$`, correct: true, value: "-27" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C21-M1", value: "1" },
        { key: "C", text: t`$6 \omega + 3$`, correct: false, misconceptionId: "C21-M2", value: "6*omega + 3" },
        { key: "D", text: t`$15$`, correct: false, misconceptionId: "C21-M3", value: "15" },
      ],
    },
    {
      id: "C21-Q5",
      source: { kind: "authored" },
      stem: t`The roots of $z^3 = 8$ are:`,
      verify: { kind: "value", inputs: { k: "8" }, params: { op: "cube_roots" } },
      options: [
        { key: "A", text: t`$2,\ 2\omega,\ 2\omega^2$`, correct: true, value: "2*omega" },
        { key: "B", text: t`$2,\ \omega,\ \omega^2$`, correct: false, misconceptionId: "C21-M4", value: "omega" },
        { key: "C", text: t`$-2,\ -2\omega,\ -2\omega^2$`, correct: false, misconceptionId: "C21-M5", value: "-2*omega**2" },
      ],
    },
    {
      id: "C21-Q6",
      source: { kind: "authored" },
      stem: t`The roots of $z^3 = -27$ are:`,
      verify: { kind: "value", inputs: { k: "-27" }, params: { op: "cube_roots" } },
      options: [
        { key: "A", text: t`$3,\ 3\omega,\ 3\omega^2$`, correct: false, misconceptionId: "C21-M5", value: "3*omega" },
        { key: "B", text: t`$-3,\ -3\omega,\ -3\omega^2$`, correct: true, value: "-3*omega**2" },
        { key: "C", text: t`$-3,\ \omega,\ \omega^2$`, correct: false, misconceptionId: "C21-M4", value: "omega" },
      ],
    },
  ],
};
