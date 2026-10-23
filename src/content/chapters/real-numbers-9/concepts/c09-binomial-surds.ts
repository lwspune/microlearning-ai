import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`You know $(x + 2)(x + 3) = x^2 + 5x + 6$. **What is $(\sqrt{5} + 2)(\sqrt{5} + 3)$?**`,
    reveal: t`Multiply the same way, term by term: $5 + 3\sqrt{5} + 2\sqrt{5} + 6$. Now collect: $11 + 5\sqrt{5}$. Surds multiply like letters, except $\sqrt{5} \times \sqrt{5} = 5$.`,
  },
  explanation: {
    intuition: [
      t`A **binomial surd** has two terms, at least one a surd, like $\sqrt{3} - \sqrt{2}$ or $\sqrt{7} + 2$.`,
      t`Multiply it just like $(x + 2)(x + 3)$ in algebra.`,
      t`Each term of one bracket multiplies each term of the other.`,
      t`Two terms times two terms gives four products.`,
      t`Each product uses $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$, and $\sqrt{a} \times \sqrt{a} = a$.`,
      t`Last, add only like terms: numbers with numbers, like surds with like surds.`,
    ],
    formal: [
      {
        title: "A surd times a binomial",
        points: [
          t`Multiply the surd into **both** terms of the bracket.`,
          t`Example: $\sqrt{2}\left(\sqrt{8} + \sqrt{18}\right)$ $= \sqrt{2} \times \sqrt{8} + \sqrt{2} \times \sqrt{18}$.`,
          t`That is $\sqrt{16} + \sqrt{36}$ $= 4 + 6 = 10$.`,
          t`The answer can be rational even though each factor is a surd.`,
        ],
      },
      {
        title: "Two binomial surds",
        points: [
          t`Take $\left(\sqrt{5} + \sqrt{2}\right)\left(\sqrt{5} + 3\sqrt{2}\right)$.`,
          t`Split the first bracket: $\sqrt{5}\left(\sqrt{5} + 3\sqrt{2}\right)$ $+ \sqrt{2}\left(\sqrt{5} + 3\sqrt{2}\right)$.`,
          t`Four products: $5 + 3\sqrt{10}$ $+ \sqrt{10} + 6$.`,
          t`$\sqrt{2} \times 3\sqrt{2} = 3 \times 2 = 6$: the same surd twice gives a number.`,
          t`Collect like terms: $5 + 6 = 11$ and $3\sqrt{10} + \sqrt{10} = 4\sqrt{10}$.`,
          t`So the product is $11 + 4\sqrt{10}$.`,
        ],
      },
      {
        title: "Signs in the products",
        points: [
          t`Carry each term's sign into its product.`,
          t`A negative times a positive is negative: $-\sqrt{2} \times \sqrt{3} = -\sqrt{6}$.`,
          t`A negative times a negative is positive: $(-2) \times \left(-\sqrt{5}\right) = 2\sqrt{5}$.`,
          t`Write all four products with their signs before you collect.`,
        ],
      },
      {
        title: "Traps to avoid",
        points: [
          t`Don't stop at first times first and last times last: there are four products.`,
          t`A number and a surd don't combine: $9 - 2\sqrt{5}$ stays as it is.`,
          t`$\sqrt{a} + \sqrt{b}$ is not $\sqrt{a + b}$: $\sqrt{9} + \sqrt{16} = 7$, but $\sqrt{25} = 5$.`,
          t`A surd times itself loses its root: $\sqrt{5} \times 4\sqrt{5} = 20$, not $4\sqrt{5}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Multiply: $\left(2\sqrt{6} - \sqrt{5}\right)\left(\sqrt{6} + 2\sqrt{5}\right)$.`,
      steps: [
        t`Split the first bracket: $2\sqrt{6}\left(\sqrt{6} + 2\sqrt{5}\right)$ $- \sqrt{5}\left(\sqrt{6} + 2\sqrt{5}\right)$.`,
        t`First part: $2\sqrt{6} \times \sqrt{6} = 12$ and $2\sqrt{6} \times 2\sqrt{5} = 4\sqrt{30}$.`,
        t`Second part: $-\sqrt{5} \times \sqrt{6} = -\sqrt{30}$ and $-\sqrt{5} \times 2\sqrt{5} = -10$.`,
        t`All four: $12 + 4\sqrt{30}$ $- \sqrt{30} - 10$.`,
        t`Collect like terms: $12 - 10 = 2$ and $4\sqrt{30} - \sqrt{30} = 3\sqrt{30}$.`,
      ],
      answer: t`$2 + 3\sqrt{30}$`,
    },
    visualSpec: t`A 2 by 2 grid: the terms of one bracket label the rows and the other's the columns; each cell fills with its product, and like cells light up in the same colour before they are added.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Multiplies only first by first and last by last, so (a + b)(c + d) = ac + bd",
      remediation: t`Every term of one bracket multiplies every term of the other: two terms times two terms gives **four** products, just like $(x + 2)(x + 3)$.`,
      fallback: { kind: "ext", topic: "multiplying binomials (Std VIII)" },
    },
    {
      id: "C09-M2",
      mistake: "Takes a negative term times a negative term as negative",
      remediation: t`A negative times a negative is **positive**: $\left(-\sqrt{2}\right) \times \left(-3\sqrt{2}\right) = +6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Adds the number part and the surd part of the answer, so 12 − 5√6 becomes 7√6",
      remediation: t`Only like terms add. A number and a surd are not like terms, so $12 - 5\sqrt{6}$ is already the answer.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C09-M4",
      mistake: "Multiplies the surd outside into the first term of the bracket only",
      remediation: t`The surd outside multiplies **every** term inside: $\sqrt{a}\left(\sqrt{b} - \sqrt{c}\right) = \sqrt{ab} - \sqrt{ac}$.`,
      fallback: { kind: "ext", topic: "multiplying a polynomial by a monomial (Std VIII)" },
    },
    {
      id: "C09-M5",
      mistake: "Keeps the root when a surd is multiplied by itself, so √2 × 3√2 = 3√2",
      remediation: t`A surd times itself loses its root: $\sqrt{a} \times \sqrt{a} = a$, so $\sqrt{2} \times 3\sqrt{2} = 3 \times 2 = 6$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M6",
      mistake: "Adds or subtracts the numbers under the roots inside a bracket, so √7 − √3 = √4",
      remediation: t`Only like surds combine: $\sqrt{7} - \sqrt{3}$ cannot be written as one surd. Multiply each term separately instead.`,
      fallback: { kind: "concept", id: "C07" },
    },
  ],
  engineNotes: [
    "C09-M1 applies only to two binomials; C09-M4 only to a single surd times a binomial; C09-M2 only where two negative terms meet.",
    "C09-M5 applies only where a surd meets itself; C09-M3 only where the answer is a number plus one surd term; C09-M6 only where a bracket's two terms are both surds.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q1(i)" },
      stem: t`Multiply: $\sqrt{3}\left(\sqrt{7} - \sqrt{3}\right)$`,
      verify: { kind: "value", inputs: { a1: "1", r1: "3", a2: "0", r2: "1", b1: "1", s1: "7", b2: "-1", s2: "3" } },
      options: [
        { key: "A", text: t`$-2\sqrt{21}$`, correct: false, misconceptionId: "C09-M3", value: "-2*sqrt(21)" },
        { key: "B", text: t`$2\sqrt{3}$`, correct: false, misconceptionId: "C09-M6", value: "2*sqrt(3)" },
        { key: "C", text: t`$\sqrt{21} - 3$`, correct: true, value: "-3 + sqrt(21)" },
        { key: "D", text: t`$\sqrt{21} - \sqrt{3}$`, correct: false, misconceptionId: "C09-M4", value: "-sqrt(3) + sqrt(21)" },
      ],
      solution: {
        steps: [
          t`Multiply $\sqrt{3}$ into both terms: $\sqrt{3} \times \sqrt{7} - \sqrt{3} \times \sqrt{3}$.`,
          t`$\sqrt{3} \times \sqrt{7} = \sqrt{21}$ and $\sqrt{3} \times \sqrt{3} = 3$.`,
          t`So the product is $\sqrt{21} - 3$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q1(iii)" },
      stem: t`Multiply: $\left(3\sqrt{2} - \sqrt{3}\right)\left(4\sqrt{3} - \sqrt{2}\right)$`,
      verify: { kind: "value", inputs: { a1: "3", r1: "2", a2: "-1", r2: "3", b1: "4", s1: "3", b2: "-1", s2: "2" } },
      options: [
        { key: "A", text: t`$13\sqrt{6} - 18$`, correct: true, value: "-18 + 13*sqrt(6)" },
        { key: "B", text: t`$13\sqrt{6}$`, correct: false, misconceptionId: "C09-M1", value: "13*sqrt(6)" },
        { key: "C", text: t`$11\sqrt{6} - 18$`, correct: false, misconceptionId: "C09-M2", value: "-18 + 11*sqrt(6)" },
        { key: "D", text: t`$13\sqrt{6} - 3\sqrt{2} - 4\sqrt{3}$`, correct: false, misconceptionId: "C09-M5", value: "-4*sqrt(3) - 3*sqrt(2) + 13*sqrt(6)" },
      ],
      solution: {
        steps: [
          t`Four products: $3\sqrt{2} \times 4\sqrt{3} = 12\sqrt{6}$ and $3\sqrt{2} \times \left(-\sqrt{2}\right) = -6$.`,
          t`Then $-\sqrt{3} \times 4\sqrt{3} = -12$ and $\left(-\sqrt{3}\right) \times \left(-\sqrt{2}\right) = \sqrt{6}$.`,
          t`Collect: $12\sqrt{6} + \sqrt{6} = 13\sqrt{6}$ and $-6 - 12 = -18$.`,
          t`So the product is $13\sqrt{6} - 18$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q1(ii)" },
      stem: t`Multiply and write the answer in the simplest form: $\sqrt{3}\left(2\sqrt{3} - \sqrt{6}\right)$`,
      verify: { kind: "value", inputs: { a1: "1", r1: "3", a2: "0", r2: "1", b1: "2", s1: "3", b2: "-1", s2: "6" } },
      options: [
        { key: "A", text: t`$6 - \sqrt{6}$`, correct: false, misconceptionId: "C09-M4", value: "6 - sqrt(6)" },
        { key: "B", text: t`$2\sqrt{3} - 3\sqrt{2}$`, correct: false, misconceptionId: "C09-M5", value: "-3*sqrt(2) + 2*sqrt(3)" },
        { key: "C", text: t`$3\sqrt{2}$`, correct: false, misconceptionId: "C09-M3", value: "3*sqrt(2)" },
        { key: "D", text: t`$6 - 3\sqrt{2}$`, correct: true, value: "6 - 3*sqrt(2)" },
      ],
      solution: {
        steps: [
          t`Multiply $\sqrt{3}$ into both terms: $\sqrt{3} \times 2\sqrt{3} = 2 \times 3 = 6$.`,
          t`$\sqrt{3} \times \sqrt{6} = \sqrt{18}$ $= \sqrt{9 \times 2} = 3\sqrt{2}$.`,
          t`So the product is $6 - 3\sqrt{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/2.4 SolvedEx.2" },
      stem: t`Multiply: $\left(\sqrt{3} - \sqrt{2}\right)\left(2\sqrt{3} - 3\sqrt{2}\right)$`,
      verify: { kind: "value", inputs: { a1: "1", r1: "3", a2: "-1", r2: "2", b1: "2", s1: "3", b2: "-3", s2: "2" } },
      options: [
        { key: "A", text: t`$12 - 5\sqrt{6}$`, correct: true, value: "12 - 5*sqrt(6)" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C09-M1", value: "12" },
        { key: "C", text: t`$-5\sqrt{6}$`, correct: false, misconceptionId: "C09-M2", value: "-5*sqrt(6)" },
        { key: "D", text: t`$7\sqrt{6}$`, correct: false, misconceptionId: "C09-M3", value: "7*sqrt(6)" },
      ],
      solution: {
        steps: [
          t`Four products: $\sqrt{3} \times 2\sqrt{3} = 6$ and $\sqrt{3} \times \left(-3\sqrt{2}\right) = -3\sqrt{6}$.`,
          t`Then $-\sqrt{2} \times 2\sqrt{3} = -2\sqrt{6}$ and $\left(-\sqrt{2}\right) \times \left(-3\sqrt{2}\right) = 6$.`,
          t`Collect: $6 + 6 = 12$ and $-3\sqrt{6} - 2\sqrt{6} = -5\sqrt{6}$.`,
          t`So the product is $12 - 5\sqrt{6}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.4 Q1(iii)" },
      stem: t`Multiply: $\left(2\sqrt{5} + \sqrt{3}\right)\left(\sqrt{5} - \sqrt{3}\right)$`,
      verify: { kind: "value", inputs: { a1: "2", r1: "5", a2: "1", r2: "3", b1: "1", s1: "5", b2: "-1", s2: "3" } },
      options: [
        { key: "A", text: t`$6\sqrt{15}$`, correct: false, misconceptionId: "C09-M3", value: "6*sqrt(15)" },
        { key: "B", text: t`$2\sqrt{5} - \sqrt{3} - \sqrt{15}$`, correct: false, misconceptionId: "C09-M5", value: "-sqrt(15) - sqrt(3) + 2*sqrt(5)" },
        { key: "C", text: t`$7 - \sqrt{15}$`, correct: true, value: "7 - sqrt(15)" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C09-M1", value: "7" },
      ],
      solution: {
        steps: [
          t`Four products: $2\sqrt{5} \times \sqrt{5} = 10$ and $2\sqrt{5} \times \left(-\sqrt{3}\right) = -2\sqrt{15}$.`,
          t`Then $\sqrt{3} \times \sqrt{5} = \sqrt{15}$ and $\sqrt{3} \times \left(-\sqrt{3}\right) = -3$.`,
          t`Collect: $10 - 3 = 7$ and $-2\sqrt{15} + \sqrt{15} = -\sqrt{15}$.`,
          t`So the product is $7 - \sqrt{15}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/2.4 SolvedEx.2" },
      stem: t`Multiply: $\left(\sqrt{7} - 2\right)\left(\sqrt{7} - 3\right)$`,
      verify: { kind: "value", inputs: { a1: "1", r1: "7", a2: "-2", r2: "1", b1: "1", s1: "7", b2: "-3", s2: "1" } },
      options: [
        { key: "A", text: t`$8\sqrt{7}$`, correct: false, misconceptionId: "C09-M3", value: "8*sqrt(7)" },
        { key: "B", text: t`$13 - 5\sqrt{7}$`, correct: true, value: "13 - 5*sqrt(7)" },
        { key: "C", text: t`$1 - 5\sqrt{7}$`, correct: false, misconceptionId: "C09-M2", value: "1 - 5*sqrt(7)" },
        { key: "D", text: t`$6 - 4\sqrt{7}$`, correct: false, misconceptionId: "C09-M5", value: "6 - 4*sqrt(7)" },
      ],
      solution: {
        steps: [
          t`Four products: $\sqrt{7} \times \sqrt{7} = 7$ and $\sqrt{7} \times (-3) = -3\sqrt{7}$.`,
          t`Then $(-2) \times \sqrt{7} = -2\sqrt{7}$ and $(-2) \times (-3) = 6$.`,
          t`Collect: $7 + 6 = 13$ and $-3\sqrt{7} - 2\sqrt{7} = -5\sqrt{7}$.`,
          t`So the product is $13 - 5\sqrt{7}$.`,
        ],
      },
    },
  ],
};
