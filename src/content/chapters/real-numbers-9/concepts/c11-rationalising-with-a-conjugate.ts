import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "draft",
  hook: {
    prompt: t`Is $\frac{1}{\sqrt{3} - \sqrt{2}}$ equal to $\sqrt{3} + \sqrt{2}$? Multiply $\sqrt{3} + \sqrt{2}$ by $\sqrt{3} - \sqrt{2}$ to check.`,
    reveal: t`Yes. $(\sqrt{3} + \sqrt{2})(\sqrt{3} - \sqrt{2})$ $= 3 - 2 = 1$. So $\sqrt{3} + \sqrt{2}$ is exactly $\frac{1}{\sqrt{3} - \sqrt{2}}$. Multiplying by a **conjugate** clears the root.`,
  },
  explanation: {
    intuition: [
      t`To **rationalize** a denominator is to make it rational, with no root left.`,
      t`For $\frac{3}{\sqrt{5}}$, multiplying top and bottom by $\sqrt{5}$ was enough.`,
      t`For $\frac{1}{\sqrt{5} - \sqrt{3}}$, multiplying by $\sqrt{5} - \sqrt{3}$ leaves $8 - 2\sqrt{15}$ below.`,
      t`The **conjugate** of $\sqrt{5} - \sqrt{3}$ is $\sqrt{5} + \sqrt{3}$: same terms, sign changed.`,
      t`Their product is $(\sqrt{5})^2 - (\sqrt{3})^2$ $= 5 - 3 = 2$, a rational number.`,
      t`So $\frac{1}{\sqrt{5} - \sqrt{3}} = \frac{\sqrt{5} + \sqrt{3}}{2}$.`,
    ],
    formal: [
      {
        title: "The conjugate pair",
        points: [
          t`$\sqrt{a} + \sqrt{b}$ and $\sqrt{a} - \sqrt{b}$ form a **conjugate pair**.`,
          t`Their product: $(\sqrt{a} + \sqrt{b})$ $\times (\sqrt{a} - \sqrt{b})$ $= a - b$.`,
          t`Why: the middle terms $-\sqrt{ab}$ and $+\sqrt{ab}$ cancel.`,
          t`Square the coefficient too: $(2\sqrt{3})^2 = 4 \times 3 = 12$.`,
          t`So $(2\sqrt{3} + \sqrt{7})$ $\times (2\sqrt{3} - \sqrt{7})$ $= 12 - 7 = 5$.`,
          t`A whole number pairs the same way: $(5 + 2\sqrt{6})$ $\times (5 - 2\sqrt{6})$ $= 25 - 24 = 1$.`,
        ],
      },
      {
        title: "Rationalizing step by step",
        points: [
          t`Write the conjugate of the denominator: change the sign between its terms.`,
          t`Multiply the top **and** the bottom by it, so the value does not change.`,
          t`Bottom: (first term)$^2$ minus (second term)$^2$, a rational number.`,
          t`Top: multiply out and keep the roots.`,
          t`Example: $\frac{2}{\sqrt{6} + 2}$ $= \frac{2(\sqrt{6} - 2)}{6 - 4}$ $= \sqrt{6} - 2$.`,
          t`Cancel a common factor at the end, if there is one.`,
        ],
      },
      {
        title: "Traps to avoid",
        points: [
          t`The pair gives $a - b$, not $a + b$: the middle terms cancel, the squares subtract.`,
          t`Change the sign: $\sqrt{5} - \sqrt{3}$ pairs with $\sqrt{5} + \sqrt{3}$, not with itself.`,
          t`Square the coefficient as well: $(2\sqrt{3})^2$ is $12$, not $6$.`,
          t`Multiply the numerator too, or the value of the number changes.`,
          t`$(\sqrt{a} - \sqrt{b})^2 = a + b - 2\sqrt{ab}$: keep the middle term.`,
        ],
      },
    ],
    worked: {
      prompt: t`Rationalize the denominator: $\frac{8}{3\sqrt{2} + \sqrt{5}}$.`,
      steps: [
        t`The conjugate of $3\sqrt{2} + \sqrt{5}$ is $3\sqrt{2} - \sqrt{5}$.`,
        t`Multiply the top and the bottom by $3\sqrt{2} - \sqrt{5}$.`,
        t`Bottom: $(3\sqrt{2})^2 - (\sqrt{5})^2$ $= 18 - 5 = 13$.`,
        t`Top: $8(3\sqrt{2} - \sqrt{5})$ $= 24\sqrt{2} - 8\sqrt{5}$.`,
      ],
      answer: t`$\frac{24\sqrt{2} - 8\sqrt{5}}{13}$`,
    },
    visualSpec: t`Sliders set a and b; an area model of (√a + √b)(√a − √b) shows the two √ab strips cancel, leaving a − b.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Takes the product of a conjugate pair to be a + b: adds the squares",
      remediation: t`The middle terms cancel and the squares **subtract**: $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M2",
      mistake: "Multiplies the top by the denominator itself, not its conjugate (keeps the sign)",
      remediation: t`The conjugate has the **opposite** sign between the terms: for $\sqrt{a} - \sqrt{b}$ it is $\sqrt{a} + \sqrt{b}$. Multiply the top by that.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Squares only the root, not the number in front: takes (3√2)² as 3 × 2",
      remediation: t`The whole term is squared: $(3\sqrt{2})^2 = 3^2 \times 2 = 18$. Square the coefficient as well as the root.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M4",
      mistake: "Multiplies only the denominator by the conjugate and leaves the numerator as it was",
      remediation: "Multiply the top **and** the bottom by the conjugate. Changing only the bottom changes the number.",
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C11-M5",
      mistake: "Squares a binomial numerator term by term, dropping the middle term: (√5 − √3)² = 5 + 3",
      remediation: t`$(\sqrt{a} - \sqrt{b})^2 = a + b - 2\sqrt{ab}$. Multiply term by term and keep the middle term.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  engineNotes: [
    "C11-M3 applies only when a term of the denominator has a coefficient other than 1.",
    "C11-M5 applies only when the numerator is the conjugate of the denominator; there C11-M2 always gives 1.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q2(i)" },
      stem: t`Rationalize the denominator: $\frac{1}{\sqrt{7} + \sqrt{2}}$`,
      verify: { kind: "value", inputs: { num: "1", p: "1", m: "7", q: "1", n: "2", s: "1" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{7} - \sqrt{2}}{5}$`, correct: true, value: "1/(sqrt(2) + sqrt(7))" },
        { key: "B", text: t`$\frac{\sqrt{7} - \sqrt{2}}{9}$`, correct: false, misconceptionId: "C11-M1", value: "-sqrt(2)/9 + sqrt(7)/9" },
        { key: "C", text: t`$\frac{\sqrt{7} + \sqrt{2}}{5}$`, correct: false, misconceptionId: "C11-M2", value: "sqrt(2)/5 + sqrt(7)/5" },
        { key: "D", text: t`$\frac{1}{5}$`, correct: false, misconceptionId: "C11-M4", value: "1/5" },
      ],
      solution: {
        steps: [
          t`The conjugate of $\sqrt{7} + \sqrt{2}$ is $\sqrt{7} - \sqrt{2}$.`,
          t`Bottom: $(\sqrt{7})^2 - (\sqrt{2})^2$ $= 7 - 2 = 5$.`,
          t`Top: $1 \times (\sqrt{7} - \sqrt{2}) = \sqrt{7} - \sqrt{2}$.`,
          t`So the answer is $\frac{\sqrt{7} - \sqrt{2}}{5}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q2(ii)" },
      stem: t`Rationalize the denominator: $\frac{3}{2\sqrt{5} - 3\sqrt{2}}$`,
      verify: { kind: "value", inputs: { num: "3", p: "2", m: "5", q: "3", n: "2", s: "-1" } },
      options: [
        { key: "A", text: t`$\frac{6\sqrt{5} + 9\sqrt{2}}{4}$`, correct: false, misconceptionId: "C11-M3", value: "9*sqrt(2)/4 + 3*sqrt(5)/2" },
        { key: "B", text: t`$\frac{6\sqrt{5} - 9\sqrt{2}}{2}$`, correct: false, misconceptionId: "C11-M2", value: "-9*sqrt(2)/2 + 3*sqrt(5)" },
        { key: "C", text: t`$\frac{6\sqrt{5} + 9\sqrt{2}}{2}$`, correct: true, value: "-3/(-2*sqrt(5) + 3*sqrt(2))" },
        { key: "D", text: t`$\frac{6\sqrt{5} + 9\sqrt{2}}{38}$`, correct: false, misconceptionId: "C11-M1", value: "9*sqrt(2)/38 + 3*sqrt(5)/19" },
      ],
      solution: {
        steps: [
          t`The conjugate of $2\sqrt{5} - 3\sqrt{2}$ is $2\sqrt{5} + 3\sqrt{2}$.`,
          t`Bottom: $(2\sqrt{5})^2 - (3\sqrt{2})^2$ $= 20 - 18 = 2$.`,
          t`Top: $3(2\sqrt{5} + 3\sqrt{2})$ $= 6\sqrt{5} + 9\sqrt{2}$.`,
          t`So the answer is $\frac{6\sqrt{5} + 9\sqrt{2}}{2}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q2(iii)" },
      stem: t`Rationalize the denominator: $\frac{4}{7 + 4\sqrt{3}}$`,
      verify: { kind: "value", inputs: { num: "4", p: "7", m: "1", q: "4", n: "3", s: "1" } },
      options: [
        { key: "A", text: t`$28 + 16\sqrt{3}$`, correct: false, misconceptionId: "C11-M2", value: "16*sqrt(3) + 28" },
        { key: "B", text: t`$\frac{28 - 16\sqrt{3}}{37}$`, correct: false, misconceptionId: "C11-M3", value: "28/37 - 16*sqrt(3)/37" },
        { key: "C", text: t`$\frac{28 - 16\sqrt{3}}{97}$`, correct: false, misconceptionId: "C11-M1", value: "28/97 - 16*sqrt(3)/97" },
        { key: "D", text: t`$28 - 16\sqrt{3}$`, correct: true, value: "28 - 16*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`The conjugate of $7 + 4\sqrt{3}$ is $7 - 4\sqrt{3}$.`,
          t`Bottom: $7^2 - (4\sqrt{3})^2$ $= 49 - 48 = 1$.`,
          t`Top: $4(7 - 4\sqrt{3})$ $= 28 - 16\sqrt{3}$.`,
          t`Dividing by $1$ changes nothing, so the answer is $28 - 16\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q2(iv)" },
      stem: t`Rationalize the denominator and simplify: $\frac{\sqrt{5} - \sqrt{3}}{\sqrt{5} + \sqrt{3}}$`,
      verify: { kind: "value", inputs: { num: "sqrt(5) - sqrt(3)", p: "1", m: "5", q: "1", n: "3", s: "1" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C11-M2", value: "1" },
        { key: "B", text: t`$\frac{4 - \sqrt{15}}{4}$`, correct: false, misconceptionId: "C11-M1", value: "1 - sqrt(15)/4" },
        { key: "C", text: t`$4 - \sqrt{15}$`, correct: true, value: "(-sqrt(3) + sqrt(5))/(sqrt(3) + sqrt(5))" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C11-M5", value: "4" },
      ],
      solution: {
        steps: [
          t`Multiply the top and the bottom by $\sqrt{5} - \sqrt{3}$.`,
          t`Bottom: $(\sqrt{5})^2 - (\sqrt{3})^2$ $= 5 - 3 = 2$.`,
          t`Top: $(\sqrt{5} - \sqrt{3})^2$ $= 5 - 2\sqrt{15} + 3$ $= 8 - 2\sqrt{15}$.`,
          t`So the value is $\frac{8 - 2\sqrt{15}}{2}$ $= 4 - \sqrt{15}$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q8(v)" },
      stem: t`Rationalize the denominator: $\frac{12}{4\sqrt{3} - \sqrt{2}}$`,
      verify: { kind: "value", inputs: { num: "12", p: "4", m: "3", q: "1", n: "2", s: "-1" } },
      options: [
        { key: "A", text: t`$\frac{24\sqrt{3} + 6\sqrt{2}}{5}$`, correct: false, misconceptionId: "C11-M3", value: "6*sqrt(2)/5 + 24*sqrt(3)/5" },
        { key: "B", text: t`$\frac{6}{23}$`, correct: false, misconceptionId: "C11-M4", value: "6/23" },
        { key: "C", text: t`$\frac{24\sqrt{3} - 6\sqrt{2}}{23}$`, correct: false, misconceptionId: "C11-M2", value: "-6*sqrt(2)/23 + 24*sqrt(3)/23" },
        { key: "D", text: t`$\frac{24\sqrt{3} + 6\sqrt{2}}{23}$`, correct: true, value: "-12/(-4*sqrt(3) + sqrt(2))" },
      ],
      solution: {
        steps: [
          t`The conjugate of $4\sqrt{3} - \sqrt{2}$ is $4\sqrt{3} + \sqrt{2}$.`,
          t`Bottom: $(4\sqrt{3})^2 - (\sqrt{2})^2$ $= 48 - 2 = 46$.`,
          t`Top: $12(4\sqrt{3} + \sqrt{2})$ $= 48\sqrt{3} + 12\sqrt{2}$.`,
          t`Cancel $2$ from top and bottom: $\frac{24\sqrt{3} + 6\sqrt{2}}{23}$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q8(iv)" },
      stem: t`Rationalize the denominator: $\frac{1}{3\sqrt{5} + 2\sqrt{2}}$`,
      verify: { kind: "value", inputs: { num: "1", p: "3", m: "5", q: "2", n: "2", s: "1" } },
      options: [
        { key: "A", text: t`$\frac{1}{37}$`, correct: false, misconceptionId: "C11-M4", value: "1/37" },
        { key: "B", text: t`$\frac{3\sqrt{5} - 2\sqrt{2}}{37}$`, correct: true, value: "1/(2*sqrt(2) + 3*sqrt(5))" },
        { key: "C", text: t`$\frac{3\sqrt{5} - 2\sqrt{2}}{11}$`, correct: false, misconceptionId: "C11-M3", value: "-2*sqrt(2)/11 + 3*sqrt(5)/11" },
        { key: "D", text: t`$\frac{3\sqrt{5} - 2\sqrt{2}}{53}$`, correct: false, misconceptionId: "C11-M1", value: "-2*sqrt(2)/53 + 3*sqrt(5)/53" },
      ],
      solution: {
        steps: [
          t`The conjugate of $3\sqrt{5} + 2\sqrt{2}$ is $3\sqrt{5} - 2\sqrt{2}$.`,
          t`Bottom: $(3\sqrt{5})^2 - (2\sqrt{2})^2$ $= 45 - 8 = 37$.`,
          t`Top: $1 \times (3\sqrt{5} - 2\sqrt{2})$, so the answer is $\frac{3\sqrt{5} - 2\sqrt{2}}{37}$.`,
        ],
      },
    },
  ],
};
