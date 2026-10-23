import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`Take $\sqrt{2} = 1.414$. Which is easier to work out by hand: $\frac{1}{\sqrt{2}}$ or $\frac{\sqrt{2}}{2}$? **Are they equal?**`,
    reveal: t`They are equal: $\frac{1}{\sqrt{2}} \times \frac{\sqrt{2}}{\sqrt{2}}$ $= \frac{\sqrt{2}}{2}$. And $\frac{1.414}{2} = 0.707$ is easy, while $1 \div 1.414$ is hard. Moving the surd out of the denominator is called rationalising.`,
  },
  explanation: {
    intuition: [
      t`A **surd** is a root that is irrational, like $\sqrt{2}$ or $\sqrt{7}$.`,
      t`Dividing by a surd is hard; dividing by a whole number is easy.`,
      t`$\sqrt{5} \times \sqrt{5} = 5$, a rational number.`,
      t`So multiplying the denominator $\sqrt{5}$ by $\sqrt{5}$ makes it rational.`,
      t`To keep the value the same, multiply the numerator by $\sqrt{5}$ too.`,
      t`That is multiplying by $\frac{\sqrt{5}}{\sqrt{5}} = 1$, so nothing changes but the look.`,
    ],
    formal: [
      {
        title: "Rationalising factor",
        points: [
          t`If the product of two surds is rational, each is a **rationalising factor** of the other.`,
          t`$\sqrt{2} \times \sqrt{2} = 2$, so $\sqrt{2}$ is a rationalising factor of $\sqrt{2}$.`,
          t`First write the surd in simplest form: $\sqrt{12} = \sqrt{4 \times 3} = 2\sqrt{3}$.`,
          t`$2\sqrt{3} \times \sqrt{3} = 2 \times 3 = 6$, a rational number.`,
          t`So the simplest rationalising factor of $\sqrt{12}$ is $\sqrt{3}$.`,
          t`The factor is the surd $\sqrt{3}$, not the product $6$.`,
        ],
      },
      {
        title: "Rationalising the denominator",
        points: [
          t`To **rationalise the denominator** is to make the denominator a rational number.`,
          t`Multiply the numerator and the denominator by the rationalising factor.`,
          t`Example: $\frac{4}{\sqrt{3}}$ $= \frac{4 \times \sqrt{3}}{\sqrt{3} \times \sqrt{3}}$.`,
          t`$\sqrt{3} \times \sqrt{3} = 3$, so $\frac{4}{\sqrt{3}} = \frac{4\sqrt{3}}{3}$.`,
          t`The surd moves to the numerator, and the denominator becomes rational.`,
        ],
      },
      {
        title: "A coefficient in the denominator",
        points: [
          t`For $\frac{1}{4\sqrt{6}}$, multiplying by $\sqrt{6}$ is enough.`,
          t`$4\sqrt{6} \times \sqrt{6} = 4 \times 6 = 24$.`,
          t`So $\frac{1}{4\sqrt{6}} = \frac{\sqrt{6}}{24}$.`,
          t`If the root is not in simplest form, simplify it first: $\sqrt{18} = 3\sqrt{2}$.`,
          t`Then $\frac{1}{\sqrt{18}} = \frac{1}{3\sqrt{2}}$ $= \frac{\sqrt{2}}{3 \times 2} = \frac{\sqrt{2}}{6}$.`,
          t`Last, cancel any common factor of the numerator and the denominator.`,
        ],
      },
      {
        title: "Traps to avoid",
        points: [
          t`Multiply the top as well: $\frac{1}{\sqrt{5}}$ is $\frac{\sqrt{5}}{5}$, not $\frac{1}{5}$.`,
          t`$\sqrt{5} \times \sqrt{5} = 5$, not $25$.`,
          t`The denominator does not vanish: $\frac{1}{\sqrt{5}}$ is not $\sqrt{5}$.`,
          t`Check with decimals: $\frac{1}{\sqrt{5}} \approx 0.447$ and $\frac{\sqrt{5}}{5} \approx 0.447$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Rationalise the denominator: $\frac{5}{2\sqrt{3}}$.`,
      steps: [
        t`$2\sqrt{3}$ is in simplest form, so the rationalising factor is $\sqrt{3}$.`,
        t`Multiply the numerator and the denominator by $\sqrt{3}$: $\frac{5 \times \sqrt{3}}{2\sqrt{3} \times \sqrt{3}}$.`,
        t`Denominator: $2\sqrt{3} \times \sqrt{3} = 2 \times 3 = 6$.`,
        t`So $\frac{5}{2\sqrt{3}} = \frac{5\sqrt{3}}{6}$.`,
      ],
      answer: t`$\frac{5\sqrt{3}}{6}$`,
    },
    visualSpec: t`A slider sets n; the fraction 1 over root n is multiplied by root n over root n, and a decimal readout shows both forms have the same value.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Multiplies only the denominator by the surd, so 3/√5 becomes 3/5",
      remediation: t`Multiply the numerator **and** the denominator by the same surd. That is multiplying by $1$, so the value stays the same: $\frac{3}{\sqrt{5}} = \frac{3\sqrt{5}}{5}$.`,
      fallback: { kind: "ext", topic: "equivalent fractions (Std VIII)" },
    },
    {
      id: "C10-M2",
      mistake: "Takes √5 × √5 as 25, the square of the number under the root",
      remediation: t`$\sqrt{a} \times \sqrt{a} = a$: so $\sqrt{5} \times \sqrt{5} = 5$, not $25$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C10-M3",
      mistake: "Moves the surd up to the numerator and drops it from the denominator, so 3/√5 becomes 3√5",
      remediation: t`The denominator does not vanish: $\sqrt{5} \times \sqrt{5} = 5$ stays below the line. So $\frac{3}{\sqrt{5}} = \frac{3\sqrt{5}}{5}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Gives the root as written, without first writing the surd in simplest form",
      remediation: t`Write the surd in simplest form first: $\sqrt{72} = 6\sqrt{2}$. The simplest rationalising factor is then just $\sqrt{2}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C10-M5",
      mistake: "Gives the whole surd, coefficient included, as its own rationalising factor",
      remediation: t`The coefficient is already rational, so it is not needed. Only the surd part must be cleared: the simplest factor of $2\sqrt{27} = 6\sqrt{3}$ is $\sqrt{3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Gives the rational product of the surd and its factor, instead of the factor",
      remediation: t`The rationalising factor is the surd you multiply **by**, not the rational answer you get. For $3\sqrt{72} \times \sqrt{2} = 36$, the factor is $\sqrt{2}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C10-M1 to C10-M3 apply to rationalising a denominator; C10-M4 to C10-M6 to finding the simplest rationalising factor.",
    "C10-M4 gives the key when the root is already in simplest form, and agrees with C10-M5 when the coefficient is 1: use both only on a surd like 3√72 with a coefficient and a square factor.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q9(i)" },
      stem: t`Rationalise the denominator: $\frac{3}{\sqrt{5}}$`,
      verify: { kind: "value", inputs: { a: "3", b: "1", n: "5" }, params: { op: "rat" } },
      options: [
        { key: "A", text: t`$\frac{3}{5}$`, correct: false, misconceptionId: "C10-M1", value: "3/5" },
        { key: "B", text: t`$\frac{3 \sqrt{5}}{25}$`, correct: false, misconceptionId: "C10-M2", value: "3*sqrt(5)/25" },
        { key: "C", text: t`$3 \sqrt{5}$`, correct: false, misconceptionId: "C10-M3", value: "3*sqrt(5)" },
        { key: "D", text: t`$\frac{3 \sqrt{5}}{5}$`, correct: true, value: "3*sqrt(5)/5" },
      ],
      solution: {
        steps: [
          t`Multiply the numerator and the denominator by $\sqrt{5}$.`,
          t`$\frac{3 \times \sqrt{5}}{\sqrt{5} \times \sqrt{5}}$, and $\sqrt{5} \times \sqrt{5} = 5$.`,
          t`So $\frac{3}{\sqrt{5}} = \frac{3\sqrt{5}}{5}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q9(iv)" },
      stem: t`Rationalise the denominator and write the answer in the simplest form: $\frac{6}{9\sqrt{3}}$`,
      verify: { kind: "value", inputs: { a: "6", b: "9", n: "3" }, params: { op: "rat" } },
      options: [
        { key: "A", text: t`$\frac{2 \sqrt{3}}{9}$`, correct: true, value: "2*sqrt(3)/9" },
        { key: "B", text: t`$\frac{2}{9}$`, correct: false, misconceptionId: "C10-M1", value: "2/9" },
        { key: "C", text: t`$\frac{2 \sqrt{3}}{27}$`, correct: false, misconceptionId: "C10-M2", value: "2*sqrt(3)/27" },
        { key: "D", text: t`$\frac{2 \sqrt{3}}{3}$`, correct: false, misconceptionId: "C10-M3", value: "2*sqrt(3)/3" },
      ],
      solution: {
        steps: [
          t`Multiply the numerator and the denominator by $\sqrt{3}$.`,
          t`Denominator: $9\sqrt{3} \times \sqrt{3} = 9 \times 3 = 27$.`,
          t`So the number is $\frac{6\sqrt{3}}{27}$.`,
          t`Cancel $3$: $\frac{6\sqrt{3}}{27} = \frac{2\sqrt{3}}{9}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`Rationalise the denominator and write the answer in the simplest form: $\frac{10}{\sqrt{8}}$`,
      verify: { kind: "value", inputs: { a: "10", b: "1", n: "8" }, params: { op: "rat" } },
      options: [
        { key: "A", text: t`$20 \sqrt{2}$`, correct: false, misconceptionId: "C10-M3", value: "20*sqrt(2)" },
        { key: "B", text: t`$\frac{5 \sqrt{2}}{2}$`, correct: true, value: "5*sqrt(2)/2" },
        { key: "C", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C10-M1", value: "5/4" },
        { key: "D", text: t`$\frac{5 \sqrt{2}}{16}$`, correct: false, misconceptionId: "C10-M2", value: "5*sqrt(2)/16" },
      ],
      solution: {
        steps: [
          t`Simplest form first: $\sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}$.`,
          t`So $\frac{10}{\sqrt{8}} = \frac{10}{2\sqrt{2}} = \frac{5}{\sqrt{2}}$.`,
          t`Multiply the numerator and the denominator by $\sqrt{2}$: $\frac{5\sqrt{2}}{2}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q6(v)" },
      stem: t`Write the simplest form of the rationalising factor of $3\sqrt{72}$.`,
      verify: { kind: "value", inputs: { p: "3", m: "72" }, params: { op: "rf" } },
      options: [
        { key: "A", text: t`$3\sqrt{72}$`, correct: false, misconceptionId: "C10-M5", value: "18*sqrt(2)" },
        { key: "B", text: t`$36$`, correct: false, misconceptionId: "C10-M6", value: "36" },
        { key: "C", text: t`$\sqrt{2}$`, correct: true, value: "sqrt(2)" },
        { key: "D", text: t`$\sqrt{72}$`, correct: false, misconceptionId: "C10-M4", value: "6*sqrt(2)" },
      ],
      solution: {
        steps: [
          t`Simplest form first: $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$.`,
          t`So $3\sqrt{72} = 18\sqrt{2}$.`,
          t`$18\sqrt{2} \times \sqrt{2} = 36$, a rational number.`,
          t`So the simplest rationalising factor is $\sqrt{2}$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q6(iii)" },
      stem: t`Write the simplest form of the rationalising factor of $2\sqrt{27}$.`,
      verify: { kind: "value", inputs: { p: "2", m: "27" }, params: { op: "rf" } },
      options: [
        { key: "A", text: t`$\sqrt{3}$`, correct: true, value: "sqrt(3)" },
        { key: "B", text: t`$\sqrt{27}$`, correct: false, misconceptionId: "C10-M4", value: "3*sqrt(3)" },
        { key: "C", text: t`$2\sqrt{27}$`, correct: false, misconceptionId: "C10-M5", value: "6*sqrt(3)" },
        { key: "D", text: t`$18$`, correct: false, misconceptionId: "C10-M6", value: "18" },
      ],
      solution: {
        steps: [
          t`Simplest form first: $\sqrt{27} = \sqrt{9 \times 3} = 3\sqrt{3}$.`,
          t`So $2\sqrt{27} = 6\sqrt{3}$.`,
          t`$6\sqrt{3} \times \sqrt{3} = 18$, a rational number.`,
          t`So the simplest rationalising factor is $\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q8(ii)" },
      stem: t`Rationalise the denominator: $\frac{2}{3\sqrt{7}}$`,
      verify: { kind: "value", inputs: { a: "2", b: "3", n: "7" }, params: { op: "rat" } },
      options: [
        { key: "A", text: t`$\frac{2 \sqrt{7}}{21}$`, correct: true, value: "2*sqrt(7)/21" },
        { key: "B", text: t`$\frac{2}{21}$`, correct: false, misconceptionId: "C10-M1", value: "2/21" },
        { key: "C", text: t`$\frac{2 \sqrt{7}}{147}$`, correct: false, misconceptionId: "C10-M2", value: "2*sqrt(7)/147" },
        { key: "D", text: t`$\frac{2 \sqrt{7}}{3}$`, correct: false, misconceptionId: "C10-M3", value: "2*sqrt(7)/3" },
      ],
      solution: {
        steps: [
          t`Multiply the numerator and the denominator by $\sqrt{7}$.`,
          t`Denominator: $3\sqrt{7} \times \sqrt{7} = 3 \times 7 = 21$.`,
          t`So $\frac{2}{3\sqrt{7}} = \frac{2\sqrt{7}}{21}$.`,
        ],
      },
    },
  ],
};
