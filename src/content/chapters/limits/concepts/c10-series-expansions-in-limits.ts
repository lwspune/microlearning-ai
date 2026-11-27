import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`$\lim_{x \to 0} \frac{x - \sin x}{x^3}$: using $\sin x \approx x$ gives $\frac{0}{x^3}$, yet the answer is not 0. What went wrong?`,
    reveal: t`$\sin x \approx x$ throws away the $x^3$ term that matters. With $\sin x = x - \frac{x^3}{6} + \dots$ the limit is $\frac16$.`,
  },
  explanation: {
    intuition: [
      t`Near 0, $\sin x$, $\cos x$, $e^x$ and $\log(1 + x)$ behave like polynomials.`,
      t`Their **series expansions** give these polynomials term by term.`,
      t`Keep terms up to the power in the denominator.`,
      t`Then cancel and let $x \to 0$.`,
    ],
    formal: [
      {
        title: "The expansions",
        points: [
          t`$\sin x = x - \frac{x^3}{6} + \dots$`,
          t`$\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \dots$`,
          t`$\tan x = x + \frac{x^3}{3} + \dots$`,
          t`$e^x = 1 + x + \frac{x^2}{2} + \dots$`,
          t`$\log(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$`,
        ],
      },
      {
        title: "Finding constants",
        points: [
          t`For a finite limit, every lower power in the numerator must vanish.`,
          t`Set those coefficients to 0 to find the unknown constants.`,
          t`The next coefficient is then the limit.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\displaystyle\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.`,
      steps: [
        t`$e^x - 1 - x = \frac{x^2}{2} + \frac{x^3}{6} + \dots$`,
        t`Divide by $x^2$ and let $x \to 0$.`,
        t`$= \frac12$`,
      ],
      answer: t`$\dfrac12$`,
    },
    visualSpec: t`Overlay $\sin x$ and its first few series terms near 0, the error shrinking as terms are added.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Stops $\sin x$ at $x$.`,
      remediation: t`Keep $-\frac{x^3}{6}$: the denominator is $x^3$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M2",
      mistake: "Flips the sign.",
      remediation: t`$x - \sin x = \frac{x^3}{6} - \dots$, positive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Uses $\frac{1}{2!}$.`,
      remediation: t`$\sin x$ has $\frac{x^3}{3!}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Flips the sign.",
      remediation: t`$1 - \frac{x^2}{2} - \cos x = -\frac{x^4}{24} + \dots$`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: t`Stops $\cos x$ at $x^2$.`,
      remediation: t`Keep the $\frac{x^4}{24}$ term.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: t`Keeps only $x^2$.`,
      remediation: t`The $x^2$ terms cancel; the $x^4$ term gives the limit.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Says 0.",
      remediation: t`With $a = 0$ the $x$ term stays and the limit is infinite.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: t`Says $\frac12$.`,
      remediation: t`$\frac12$ is the limit once $a = 1$, not $a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Says 2.",
      remediation: t`The $x$ coefficient is $1 - a$, so $a = 1$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C10-M10",
      mistake: "Flips the sign.",
      remediation: t`$\log(1 + x) - x = -\frac{x^2}{2} + \dots$`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Stops log at x.",
      remediation: t`Keep $-\frac{x^2}{2}$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M12",
      mistake: t`Uses the $x^3$ term.`,
      remediation: t`The $x^2$ term decides a limit over $x^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Flips the sign.",
      remediation: t`$\tan x - x = \frac{x^3}{3} + \dots$`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: t`Borrows $\sin x$'s $\frac16$.`,
      remediation: t`$\tan x = x + \frac{x^3}{3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: t`Stops $\tan x$ at $x$.`,
      remediation: t`Keep the $\frac{x^3}{3}$ term.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to 0} \frac{x - \sin x}{x^3} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "sin" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C10-M1", value: "0" },
        { key: "B", text: t`$- \frac{1}{6}$`, correct: false, misconceptionId: "C10-M2", value: "-1/6" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C10-M3", value: "1/2" },
        { key: "D", text: t`$\frac{1}{6}$`, correct: true, value: "1/6" },
      ],
      solution: {
        steps: [
          t`$x - \sin x = \frac{x^3}{6} - \dots$`,
          t`$\frac16$`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to 0} \frac{1 - \frac{x^2}{2} - \cos x}{x^4} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "cos" } },
      options: [
        { key: "A", text: t`$- \frac{1}{24}$`, correct: true, value: "-1/24" },
        { key: "B", text: t`$\frac{1}{24}$`, correct: false, misconceptionId: "C10-M4", value: "1/24" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C10-M5", value: "0" },
        { key: "D", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C10-M6", value: "-1/2" },
      ],
      solution: {
        steps: [
          t`$1 - \frac{x^2}{2} - \cos x = -\frac{x^4}{24} + \dots$`,
          t`$-\frac{1}{24}$`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to 0} \frac{e^x - 1 - ax}{x^2}$ is finite only when $a =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "const" } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C10-M9", value: "2" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C10-M7", value: "0" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C10-M8", value: "1/2" },
      ],
      solution: {
        steps: [
          t`$e^x - 1 - ax = (1 - a)x + \frac{x^2}{2} + \dots$`,
          t`Finite only if $1 - a = 0$: $a = 1$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to 0} \frac{\log(1 + x) - x}{x^2} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "log" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C10-M11", value: "0" },
        { key: "B", text: t`$- \frac{1}{3}$`, correct: false, misconceptionId: "C10-M12", value: "-1/3" },
        { key: "C", text: t`$- \frac{1}{2}$`, correct: true, value: "-1/2" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C10-M10", value: "1/2" },
      ],
      solution: {
        steps: [
          t`$\log(1 + x) - x = -\frac{x^2}{2} + \dots$`,
          t`$-\frac12$`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`$\displaystyle\lim_{x \to 0} \frac{\tan x - x}{x^3} =$`,
      verify: { kind: "value", inputs: {  }, params: { q: "tan" } },
      options: [
        { key: "A", text: t`$\frac{1}{3}$`, correct: true, value: "1/3" },
        { key: "B", text: t`$- \frac{1}{3}$`, correct: false, misconceptionId: "C10-M13", value: "-1/3" },
        { key: "C", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C10-M14", value: "1/6" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C10-M15", value: "0" },
      ],
      solution: {
        steps: [
          t`$\tan x - x = \frac{x^3}{3} + \dots$`,
          t`$\frac13$`,
        ],
      },
    },
  ],
};
