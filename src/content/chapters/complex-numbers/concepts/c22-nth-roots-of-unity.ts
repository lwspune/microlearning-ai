import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c22: Concept = {
  id: "C22",
  status: "approved",
  hook: {
    prompt: t`$z^6 = 1$ has six solutions. **Where are they on the Argand plane?**`,
    reveal: t`Equally spaced round the unit circle, $60^\circ$ apart, starting at $1$: the corners of a regular hexagon.`,
  },
  explanation: {
    intuition: t`The $n$th roots of unity are $n$ points equally spaced round the unit circle, starting at $1$: angles $0, \dfrac{2\pi}n, \dfrac{4\pi}n, \ldots$ By symmetry they balance out, so their sum is $0$.`,
    formal: t`The roots of $z^n = 1$ are $\cos\dfrac{2\pi k}{n} + i\sin\dfrac{2\pi k}{n}$ for $k = 0, 1, \ldots, n - 1$. Writing $\alpha$ for the root with $k = 1$, they are $1, \alpha, \alpha^2, \ldots, \alpha^{n-1}$.
- Sum of all $n$ roots: $0$, so the roots other than $1$ add to $-1$
- Product of all $n$ roots: $(-1)^{n+1}$

The roots of $z^n = k$ (with $k > 0$) are $\sqrt[n]k$ times the roots of unity.`,
    worked: {
      prompt: t`Find the product of the fifth roots of unity.`,
      steps: [
        t`Use the product rule $(-1)^{n+1}$ with $n = 5$.`,
        t`$(-1)^6 = 1$.`,
      ],
      answer: t`$1$`,
    },
    visualSpec: t`A slider for $n$ redraws the $n$ roots round the unit circle as a regular polygon, with arrows from the origin that visibly cancel to a zero sum.`,
  },
  misconceptions: [
    {
      id: "C22-M1",
      mistake: "Saying the roots other than 1 add to 0",
      remediation: t`All $n$ roots add to $0$, so leaving out the root $1$ leaves $-1$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M2",
      mistake: t`Spacing the roots $\dfrac\pi n$ apart`,
      remediation: t`$n$ equal steps fill the whole turn $2\pi$, so the spacing is $\dfrac{2\pi}n$.`,
      fallback: { kind: "concept", id: "C17" },
    },
    {
      id: "C22-M3",
      mistake: "Saying the product of all the roots is always 1",
      remediation: t`The product is $(-1)^{n+1}$: $1$ for odd $n$, $-1$ for even $n$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M4",
      mistake: t`Forgetting to scale by $\sqrt[n]k$`,
      remediation: t`The roots of $z^n = k$ lie on a circle of radius $\sqrt[n]k$, not 1.`,
      fallback: { kind: "concept", id: "C17" },
    },
    {
      id: "C22-M5",
      mistake: "Counting the roots instead of adding them",
      remediation: t`Each root is a complex number, not 1: by symmetry they add to $0$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M6",
      mistake: "Saying the product is 0, like the sum",
      remediation: t`None of the roots is $0$, so their product can't be $0$; it is $(-1)^{n+1}$.`,
      fallback: { kind: "concept", id: "C20" },
    },
    {
      id: "C22-M7",
      mistake: t`Thinking the roots of unity are only $\pm1$ and $\pm i$`,
      remediation: t`Those are the fourth roots. The $n$th roots are $n$ points spaced $\dfrac{2\pi}n$ apart.`,
      fallback: { kind: "concept", id: "C17" },
    },
  ],
  items: [
    {
      id: "C22-Q1",
      source: { kind: "authored" },
      stem: t`If $1, \alpha, \alpha^2, \alpha^3, \alpha^4$ are the fifth roots of unity, then $\alpha + \alpha^2 + \alpha^3 + \alpha^4 = ?$`,
      verify: { kind: "value", inputs: { n: "5" }, params: { op: "sum_powers" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C22-M1", value: "0" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C22-M5", value: "4" },
      ],
    },
    {
      id: "C22-Q2",
      source: { kind: "authored" },
      stem: t`The product of all the sixth roots of unity is:`,
      verify: { kind: "value", inputs: { n: "6" }, params: { op: "product_all" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C22-M3", value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C22-M6", value: "0" },
      ],
    },
    {
      id: "C22-Q3",
      source: { kind: "authored" },
      stem: t`The sum of the sixth roots of unity other than $1$ is:`,
      verify: { kind: "value", inputs: { n: "6" }, params: { op: "sum_powers" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C22-M1", value: "0" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C22-M5", value: "5" },
        { key: "C", text: t`$-1$`, correct: true, value: "-1" },
      ],
    },
    {
      id: "C22-Q4",
      source: { kind: "authored" },
      stem: t`Of the sixth roots of unity, the one with the smallest positive argument is:`,
      verify: { kind: "value", inputs: { n: "6" }, params: { op: "first_root" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3}}{2} + \frac{i}{2}$`, correct: false, misconceptionId: "C22-M2", value: "sqrt(3)/2 + I/2" },
        { key: "B", text: t`$i$`, correct: false, misconceptionId: "C22-M7", value: "I" },
        { key: "C", text: t`$\frac{1}{2} + \frac{\sqrt{3} i}{2}$`, correct: true, value: "1/2 + sqrt(3)*I/2" },
      ],
    },
    {
      id: "C22-Q5",
      source: { kind: "authored" },
      stem: t`The roots of $z^4 = 16$ are:`,
      verify: { kind: "value", inputs: { k: "16", n: "4" }, params: { op: "roots_of" } },
      options: [
        { key: "A", text: t`$\pm 1,\ \pm i$`, correct: false, misconceptionId: "C22-M4", value: "I" },
        { key: "B", text: t`$\pm 2,\ \pm 2i$`, correct: true, value: "2*I" },
        { key: "C", text: t`$\pm\sqrt2 \pm \sqrt2\,i$`, correct: false, misconceptionId: "C22-M2", value: "sqrt(2)*(1 + I)" },
      ],
    },
  ],
};
