import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Work out $\sqrt{4} \times \sqrt{9}$. Now work out $\sqrt{36}$. **What do you notice?**`,
    reveal: t`$\sqrt{4} \times \sqrt{9} = 2 \times 3 = 6$, and $\sqrt{36} = 6$ too. Multiplying the roots is the same as taking the root of the product. That is how surds multiply.`,
  },
  explanation: {
    intuition: [
      t`A **surd** is a root that is irrational, like $\sqrt{2}$ or $\sqrt{15}$.`,
      t`$\sqrt{4} \times \sqrt{9} = 2 \times 3 = 6$, and $\sqrt{4 \times 9} = \sqrt{36} = 6$.`,
      t`So you may multiply the numbers under the roots: $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$.`,
      t`Dividing works the same way: $\sqrt{a} \div \sqrt{b} = \sqrt{\frac{a}{b}}$.`,
      t`A **coefficient** is the number in front of a surd, like $5$ in $5\sqrt{2}$.`,
      t`Coefficients combine with coefficients; then write the answer in simplest form.`,
    ],
    formal: [
      {
        title: "Multiplying surds",
        points: [
          t`For $a \ge 0$ and $b \ge 0$: $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$.`,
          t`Example: $\sqrt{3} \times \sqrt{15} = \sqrt{45}$.`,
          t`$45 = 9 \times 5$, so $\sqrt{45} = 3\sqrt{5}$ in simplest form.`,
          t`With coefficients: $2\sqrt{3} \times 4\sqrt{15}$ $= (2 \times 4)\sqrt{3 \times 15}$.`,
          t`That is $8\sqrt{45}$ $= 8 \times 3\sqrt{5}$ $= 24\sqrt{5}$.`,
        ],
      },
      {
        title: "Dividing surds",
        points: [
          t`For $a \ge 0$ and $b > 0$: $\sqrt{a} \div \sqrt{b} = \sqrt{\frac{a}{b}}$.`,
          t`Example: $\sqrt{45} \div \sqrt{5}$ $= \sqrt{\frac{45}{5}} = \sqrt{9} = 3$.`,
          t`With coefficients: $6\sqrt{40} \div 2\sqrt{5}$ $= \frac{6}{2}\sqrt{\frac{40}{5}}$.`,
          t`That is $3\sqrt{8}$ $= 3 \times 2\sqrt{2}$ $= 6\sqrt{2}$.`,
          t`Divide in the order given: the first surd by the second.`,
          t`A product or quotient of surds can be rational, like $3$ above.`,
        ],
      },
      {
        title: "The same surd twice",
        points: [
          t`$\sqrt{a} \times \sqrt{a} = \sqrt{a^2} = a$, for $a \ge 0$.`,
          t`So $\sqrt{7} \times \sqrt{7} = 7$: not $\sqrt{7}$, and not $49$.`,
          t`$3\sqrt{6} \times 2\sqrt{6}$ $= 6 \times 6 = 36$.`,
          t`Adding is different: $3\sqrt{6} + 2\sqrt{6} = 5\sqrt{6}$ keeps the root.`,
          t`Multiplying like surds never keeps the root: $\sqrt{6} \times \sqrt{6}$ is $6$.`,
        ],
      },
      {
        title: "Traps to avoid",
        points: [
          t`A coefficient goes under the root as its square: $2\sqrt{3} = \sqrt{12}$, not $\sqrt{6}$.`,
          t`Take out the root of a square factor: $\sqrt{72} = \sqrt{36 \times 2}$ $= 6\sqrt{2}$.`,
          t`So $\sqrt{72}$ is $6\sqrt{2}$, never $36\sqrt{2}$.`,
          t`Multiply under the root, never add: $\sqrt{2} \times \sqrt{3} = \sqrt{6}$, not $\sqrt{5}$.`,
          t`Keep the root: $\sqrt{20} \div \sqrt{5} = \sqrt{4} = 2$, not $4$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Multiply and write the answer in the simplest form: $2\sqrt{6} \times 5\sqrt{10}$.`,
      steps: [
        t`Multiply the coefficients: $2 \times 5 = 10$.`,
        t`Multiply under the root: $\sqrt{6} \times \sqrt{10} = \sqrt{60}$.`,
        t`Find a square factor: $60 = 4 \times 15$, so $\sqrt{60} = 2\sqrt{15}$.`,
        t`So the product is $10 \times 2\sqrt{15} = 20\sqrt{15}$.`,
      ],
      answer: t`$20\sqrt{15}$`,
    },
    visualSpec: t`Two sliders set a and b; tiles show the square root of each and of their product, and the product of the first two always matches the third.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Puts a coefficient under the root as it is, so reads 3√12 as √36",
      remediation: t`A coefficient goes under the root as its **square**: $3\sqrt{12} = \sqrt{9 \times 12}$. Safer still, multiply coefficients with coefficients and roots with roots.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M2",
      mistake: "Takes the square factor out whole instead of its root, so writes √216 as 36√6",
      remediation: t`Out of the root comes the **square root** of the square factor: $\sqrt{216} = \sqrt{36 \times 6} = 6\sqrt{6}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M3",
      mistake: "Adds the numbers under the roots to multiply (and subtracts them to divide)",
      remediation: t`Under the root you multiply or divide, never add or subtract: $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$ and $\sqrt{a} \div \sqrt{b} = \sqrt{\frac{a}{b}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Multiplies like surds as if adding them, so keeps the common root: 5√8 × 2√8 = 10√8",
      remediation: t`Keeping the root is the rule for adding like surds. For multiplying, $\sqrt{a} \times \sqrt{a} = a$: the root goes away.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Combines the numbers under the roots but drops the root, so √98 ÷ √2 gives 49",
      remediation: t`The answer is still a root: $\sqrt{98} \div \sqrt{2} = \sqrt{49}$, and $\sqrt{49} = 7$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Divides the second surd by the first",
      remediation: t`In $\sqrt{a} \div \sqrt{b}$, the first number is divided by the second: $\sqrt{\frac{a}{b}}$, with $a$ on top.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C08-M1 applies only when a coefficient is not 1; C08-M4 only to a product of like surds; C08-M6 only to division.",
    "C08-M2 gives the key when the combined number has no square factor, and agrees with C08-M5 when it is a perfect square: use it only where the result keeps a surd part.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q7(i)" },
      stem: t`Multiply and write the answer in the simplest form: $3\sqrt{12} \times \sqrt{18}$`,
      verify: { kind: "value", inputs: { p: "3", m: "12", q: "1", n: "18" }, params: { op: "mul" } },
      options: [
        { key: "A", text: t`$18 \sqrt{6}$`, correct: true, value: "18*sqrt(6)" },
        { key: "B", text: t`$18 \sqrt{2}$`, correct: false, misconceptionId: "C08-M1", value: "18*sqrt(2)" },
        { key: "C", text: t`$108 \sqrt{6}$`, correct: false, misconceptionId: "C08-M2", value: "108*sqrt(6)" },
        { key: "D", text: t`$3 \sqrt{30}$`, correct: false, misconceptionId: "C08-M3", value: "3*sqrt(30)" },
      ],
      solution: {
        steps: [
          t`Multiply under the root: $3\sqrt{12} \times \sqrt{18} = 3\sqrt{216}$.`,
          t`$216 = 36 \times 6$, so $\sqrt{216} = 6\sqrt{6}$.`,
          t`So the product is $3 \times 6\sqrt{6} = 18\sqrt{6}$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q7(ii)" },
      stem: t`Multiply and write the answer in the simplest form: $3\sqrt{12} \times 7\sqrt{15}$`,
      verify: { kind: "value", inputs: { p: "3", m: "12", q: "7", n: "15" }, params: { op: "mul" } },
      options: [
        { key: "A", text: t`$6 \sqrt{105}$`, correct: false, misconceptionId: "C08-M1", value: "6*sqrt(105)" },
        { key: "B", text: t`$756 \sqrt{5}$`, correct: false, misconceptionId: "C08-M2", value: "756*sqrt(5)" },
        { key: "C", text: t`$3780$`, correct: false, misconceptionId: "C08-M5", value: "3780" },
        { key: "D", text: t`$126 \sqrt{5}$`, correct: true, value: "126*sqrt(5)" },
      ],
      solution: {
        steps: [
          t`Coefficients: $3 \times 7 = 21$. Under the root: $12 \times 15 = 180$.`,
          t`So the product is $21\sqrt{180}$.`,
          t`$180 = 36 \times 5$, so $\sqrt{180} = 6\sqrt{5}$.`,
          t`So the product is $21 \times 6\sqrt{5} = 126\sqrt{5}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q7(iv)" },
      stem: t`Multiply and write the answer in the simplest form: $5\sqrt{8} \times 2\sqrt{8}$`,
      verify: { kind: "value", inputs: { p: "5", m: "8", q: "2", n: "8" }, params: { op: "mul" } },
      options: [
        { key: "A", text: t`$20 \sqrt{2}$`, correct: false, misconceptionId: "C08-M4", value: "20*sqrt(2)" },
        { key: "B", text: t`$40$`, correct: false, misconceptionId: "C08-M3", value: "40" },
        { key: "C", text: t`$640$`, correct: false, misconceptionId: "C08-M5", value: "640" },
        { key: "D", text: t`$80$`, correct: true, value: "80" },
      ],
      solution: {
        steps: [
          t`Coefficients: $5 \times 2 = 10$.`,
          t`The same surd twice: $\sqrt{8} \times \sqrt{8} = 8$.`,
          t`So the product is $10 \times 8 = 80$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q8(i)" },
      stem: t`Divide, and write the answer in the simplest form: $\sqrt{98} \div \sqrt{2}$`,
      verify: { kind: "value", inputs: { p: "1", m: "98", q: "1", n: "2" }, params: { op: "div" } },
      options: [
        { key: "A", text: t`$4 \sqrt{6}$`, correct: false, misconceptionId: "C08-M3", value: "4*sqrt(6)" },
        { key: "B", text: t`$\frac{1}{7}$`, correct: false, misconceptionId: "C08-M6", value: "1/7" },
        { key: "C", text: t`$7$`, correct: true, value: "7" },
        { key: "D", text: t`$49$`, correct: false, misconceptionId: "C08-M5", value: "49" },
      ],
      solution: {
        steps: [
          t`Divide under the root: $\sqrt{98} \div \sqrt{2} = \sqrt{\frac{98}{2}}$.`,
          t`$\frac{98}{2} = 49$, and $\sqrt{49} = 7$.`,
          t`So the quotient is $7$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Divide, and write the answer in the simplest form: $12\sqrt{75} \div 3\sqrt{3}$`,
      verify: { kind: "value", inputs: { p: "12", m: "75", q: "3", n: "3" }, params: { op: "div" } },
      options: [
        { key: "A", text: t`$24 \sqrt{2}$`, correct: false, misconceptionId: "C08-M3", value: "24*sqrt(2)" },
        { key: "B", text: t`$20$`, correct: true, value: "20" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C08-M1", value: "10" },
        { key: "D", text: t`$100$`, correct: false, misconceptionId: "C08-M5", value: "100" },
      ],
      solution: {
        steps: [
          t`Coefficients: $12 \div 3 = 4$.`,
          t`Under the root: $\sqrt{75} \div \sqrt{3} = \sqrt{25} = 5$.`,
          t`So the quotient is $4 \times 5 = 20$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q8(iii)" },
      stem: t`Divide, and write the answer in the simplest form: $\sqrt{54} \div \sqrt{27}$`,
      verify: { kind: "value", inputs: { p: "1", m: "54", q: "1", n: "27" }, params: { op: "div" } },
      options: [
        { key: "A", text: t`$3 \sqrt{3}$`, correct: false, misconceptionId: "C08-M3", value: "3*sqrt(3)" },
        { key: "B", text: t`$\frac{1}{\sqrt{2}}$`, correct: false, misconceptionId: "C08-M6", value: "sqrt(2)/2" },
        { key: "C", text: t`$\sqrt{2}$`, correct: true, value: "sqrt(2)" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C08-M5", value: "2" },
      ],
      solution: {
        steps: [
          t`Divide under the root: $\sqrt{54} \div \sqrt{27} = \sqrt{\frac{54}{27}}$.`,
          t`$\frac{54}{27} = 2$, so the quotient is $\sqrt{2}$.`,
          t`$2$ has no square factor, so $\sqrt{2}$ is in simplest form.`,
        ],
      },
    },
  ],
};
