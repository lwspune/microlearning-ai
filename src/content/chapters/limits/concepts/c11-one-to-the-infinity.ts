import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`$1$ to any power is 1. So is $\left(1 + \frac1n\right)^n$ close to 1 when $n$ is huge?`,
    reveal: t`No: it tends to $e \approx 2.718$. The base creeps towards 1 while the power races to infinity, and neither wins outright.`,
  },
  explanation: {
    intuition: [
      t`A base tending to 1 raised to a power tending to $\infty$ is the form $1^\infty$.`,
      t`It is indeterminate: the answer depends on how fast each part moves.`,
      t`The standard case is $\lim (1 + x)^{1/x} = e$.`,
      t`Every $1^\infty$ limit reduces to it.`,
    ],
    formal: [
      {
        title: "The rule",
        points: [
          t`If $f \to 1$ and $g \to \infty$, then $\lim f^g = e^{\lim (f - 1)g}$.`,
          t`So find $\lim (f - 1)g$ first, then raise $e$ to it.`,
          t`$\left(1 + \frac{k}{x}\right)^{x} \to e^k$ as $x \to \infty$.`,
          t`$(1 + kx)^{1/x} \to e^k$ as $x \to 0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\displaystyle\lim_{x \to 0} (1 + 4x)^{3/x}$.`,
      steps: [
        t`$f - 1 = 4x$, $g = \frac{3}{x}$`,
        t`$(f - 1)g = 12$`,
        t`$e^{12}$`,
      ],
      answer: t`$e^{12}$`,
    },
    visualSpec: t`Plot $\left(1 + \frac1n\right)^n$ against $n$ and watch it climb towards $e$, never to 1.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Divides the exponents.",
      remediation: t`$(f - 1)g = \frac{3}{x} \cdot 2x = 6$: multiply.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Takes $1^\infty$ as 1.`,
      remediation: t`$1^\infty$ is indeterminate: use $e^{\lim (f - 1)g}$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M3",
      mistake: "Adds the exponents.",
      remediation: t`Multiply: $(f - 1)g = 6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: t`Takes $1^\infty$ as 1.`,
      remediation: t`Use $e^{\lim (f - 1)g}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Drops the minus sign.",
      remediation: t`$\cos x - 1 \approx -\frac{x^2}{2}$, negative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: t`Uses $1 - \cos x \approx x^2$.`,
      remediation: t`$1 - \cos x \approx \frac{x^2}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Uses the numerator only.",
      remediation: t`$f - 1 = \frac{3}{x - 1}$: both 2 and $-1$ count.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: "Uses the denominator only.",
      remediation: t`$f - 1 = \frac{(x + 2) - (x - 1)}{x - 1} = \frac{3}{x - 1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: t`Takes $1^\infty$ as 1.`,
      remediation: t`Use $e^{\lim (f - 1)g}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Drops the sign.",
      remediation: t`$f - 1 = -2x$, so the exponent is $-2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Divides.",
      remediation: t`$(f - 1)g = -2x \cdot \frac1x = -2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: t`Takes $1^\infty$ as 1.`,
      remediation: t`Use $e^{\lim (f - 1)g}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Says always 1.",
      remediation: t`$\left(1 + \frac1n\right)^n \to e$, not 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: "Says always infinite.",
      remediation: "The base tends to 1, which slows the growth: the limit is finite.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: "Forgets the minus 1.",
      remediation: t`The exponent is $\lim (f - 1)g$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^{2x} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "inf" } },
      options: [
        { key: "A", text: t`$e^{6}$`, correct: true, value: "exp(6)" },
        { key: "B", text: t`$e^{\frac{3}{2}}$`, correct: false, misconceptionId: "C11-M1", value: "exp(3/2)" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C11-M2", value: "1" },
        { key: "D", text: t`$e^{5}$`, correct: false, misconceptionId: "C11-M3", value: "exp(5)" },
      ],
      solution: {
        steps: [
          t`$(f - 1)g = \frac{3}{x} \cdot 2x = 6$`,
          t`$e^6$`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to 0} (\cos x)^{1/x^2} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "cos" } },
      options: [
        { key: "A", text: t`$e^{\frac{1}{2}}$`, correct: false, misconceptionId: "C11-M5", value: "exp(1/2)" },
        { key: "B", text: t`$e^{-1}$`, correct: false, misconceptionId: "C11-M6", value: "exp(-1)" },
        { key: "C", text: t`$e^{- \frac{1}{2}}$`, correct: true, value: "exp(-1/2)" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C11-M4", value: "1" },
      ],
      solution: {
        steps: [
          t`$(\cos x - 1) \cdot \frac{1}{x^2} \to -\frac12$`,
          t`$e^{-1/2}$`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to \infty} \left(\frac{x + 2}{x - 1}\right)^{x} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "ratio" } },
      options: [
        { key: "A", text: t`$e^{2}$`, correct: false, misconceptionId: "C11-M7", value: "exp(2)" },
        { key: "B", text: t`$e$`, correct: false, misconceptionId: "C11-M8", value: "E" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C11-M9", value: "1" },
        { key: "D", text: t`$e^{3}$`, correct: true, value: "exp(3)" },
      ],
      solution: {
        steps: [
          t`$f - 1 = \frac{3}{x - 1}$; times $x$ tends to 3.`,
          t`$e^3$`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to 0} (1 - 2x)^{1/x} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "neg" } },
      options: [
        { key: "A", text: t`$e^{- \frac{1}{2}}$`, correct: false, misconceptionId: "C11-M11", value: "exp(-1/2)" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C11-M12", value: "1" },
        { key: "C", text: t`$e^{-2}$`, correct: true, value: "exp(-2)" },
        { key: "D", text: t`$e^{2}$`, correct: false, misconceptionId: "C11-M10", value: "exp(2)" },
      ],
      solution: {
        steps: [
          t`$(f - 1)g = -2x \cdot \frac1x = -2$`,
          t`$e^{-2}$`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`If $f(x) \to 1$ and $g(x) \to \infty$, then $\lim f(x)^{g(x)}$ equals`,
      verify: { kind: "value", inputs: {  }, params: { q: "rule" } },
      options: [
        { key: "A", text: t`$1$, always`, correct: false, misconceptionId: "C11-M13", value: "always_one" },
        { key: "B", text: t`$\infty$, always`, correct: false, misconceptionId: "C11-M14", value: "always_infinite" },
        { key: "C", text: t`$e^{\lim fg}$`, correct: false, misconceptionId: "C11-M15", value: "e_power_lim_f_g" },
        { key: "D", text: t`$e^{\lim (f - 1)g}$`, correct: true, value: "e_power_lim_f_minus_one_g" },
      ],
      solution: {
        steps: [
          t`$f^g = e^{g \log f}$ and $\log f \approx f - 1$.`,
          t`$e^{\lim (f - 1)g}$`,
        ],
      },
    },
  ],
};
