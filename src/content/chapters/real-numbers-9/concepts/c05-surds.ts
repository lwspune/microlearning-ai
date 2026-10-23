import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`$\sqrt{20}$ and $\sqrt{45}$ look unrelated. Are they both whole-number multiples of one surd?`,
    reveal: t`Yes. $\sqrt{20} = \sqrt{4 \times 5}$ $= 2\sqrt{5}$ and $\sqrt{45} = \sqrt{9 \times 5}$ $= 3\sqrt{5}$. Both are multiples of $\sqrt{5}$, so they are like surds.`,
  },
  explanation: {
    intuition: [
      t`A **surd** is a root that is irrational, like $\sqrt{2}$ or $\sqrt[3]{5}$.`,
      t`$\sqrt{9} = 3$ is rational, so $\sqrt{9}$ is not a surd.`,
      t`The small number on the root sign is the **index**; the number under it is the **radicand**.`,
      t`The index is the surd's **order**: $\sqrt[3]{5}$ is a surd of order $3$.`,
      t`Simplest form takes every square factor out: $\sqrt{50} = \sqrt{25 \times 2}$ $= 5\sqrt{2}$.`,
      t`Surds of one order with one radicand, like $5\sqrt{2}$ and $\sqrt{2}$, are **like surds**.`,
    ],
    formal: [
      {
        title: "Surd and its order",
        points: [
          t`Let $a$ be a positive rational number and $n$ a whole number greater than $1$.`,
          t`If $\sqrt[n]{a}$ is irrational, then $\sqrt[n]{a}$ is a **surd of order** $n$.`,
          t`Here $a$ is the radicand and $n$, the index, is the order.`,
          t`A square root shows no index: $\sqrt{a}$ means $\sqrt[2]{a}$, so its order is $2$.`,
          t`So $\sqrt{39}$ has order $2$, and $\sqrt[4]{10}$ has order $4$.`,
          t`A number in front does not change the order: $5\sqrt{12}$ has order $2$.`,
        ],
      },
      {
        title: "Is it a surd?",
        points: [
          t`For $\sqrt[n]{a}$, ask: is $a$ a perfect $n$th power?`,
          t`If it is, the root is rational, so it is **not** a surd: $\sqrt[3]{64} = 4$, as $64 = 4^3$.`,
          t`If it is not, the root is irrational, so it **is** a surd.`,
          t`$\sqrt[3]{51}$ is a surd: $3^3 = 27$ and $4^3 = 64$, so $51$ is not a cube.`,
          t`Test the power the index asks for: $\sqrt[3]{49}$ is a surd, though $49 = 7^2$.`,
          t`Likewise $\sqrt{125}$ is a surd, though $125 = 5^3$: $125$ is not a square.`,
        ],
      },
      {
        title: "Simplest form",
        points: [
          t`A surd is in **simplest form** when its radicand has no square factor except $1$.`,
          t`Find the largest square that divides the radicand: $50 = 25 \times 2$.`,
          t`The root of a product is a product: $\sqrt{25 \times 2}$ $= \sqrt{25} \times \sqrt{2}$.`,
          t`Only the square root of the square comes out: $\sqrt{50} = 5\sqrt{2}$.`,
          t`It is not $25\sqrt{2}$, and not $5 + \sqrt{2}$.`,
          t`A number in front multiplies: $3\sqrt{50} = 3 \times 5\sqrt{2}$ $= 15\sqrt{2}$.`,
        ],
      },
      {
        title: "Like and unlike surds",
        points: [
          t`**Like surds** have the same order and the same radicand, in simplest form.`,
          t`$2\sqrt{13}$ and $5\sqrt{13}$ are like surds; $\sqrt{2}$ and $\sqrt{3}$ are **unlike surds**.`,
          t`Simplify before you compare: $\sqrt{52} = \sqrt{4 \times 13}$ $= 2\sqrt{13}$.`,
          t`So $\sqrt{52}$ and $5\sqrt{13}$ are like surds, though $52$ and $13$ differ.`,
          t`$\sqrt{75} = 5\sqrt{3}$ and $5\sqrt{5}$ are unlike: the radicands $3$ and $5$ differ.`,
          t`$\sqrt{5}$ and $\sqrt[3]{5}$ are unlike too: their orders differ.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $\sqrt{72}$ in simplest form. Is it a like surd of $5\sqrt{8}$?`,
      steps: [
        t`Squares that divide $72$: $4$, $9$ and $36$. The largest is $36$, so $72 = 36 \times 2$.`,
        t`So $\sqrt{72} = \sqrt{36} \times \sqrt{2}$ $= 6\sqrt{2}$.`,
        t`Now $5\sqrt{8}$: $8 = 4 \times 2$, so $5\sqrt{8} = 5 \times 2\sqrt{2}$ $= 10\sqrt{2}$.`,
        t`$6\sqrt{2}$ and $10\sqrt{2}$ have the same order $2$ and the same radicand $2$.`,
      ],
      answer: t`$\sqrt{72} = 6\sqrt{2}$, and $\sqrt{72}$ and $5\sqrt{8}$ are like surds.`,
    },
    visualSpec: t`Drag the largest square block out from under a root sign: a $16$-tile square leaves $\sqrt{112}$ as $4$ in front of $\sqrt{7}$, while a smaller block leaves a square factor behind.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Reads the number under the root sign (the radicand) as the order: calls sqrt(3) a surd of order 3",
      remediation: t`The order is the index, the small number on the root sign. $\sqrt{3}$ has index $2$, so it is a surd of order $2$, not $3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks every root is a surd: does not check whether the root works out to a rational number",
      remediation: t`A surd must be irrational. $\sqrt[3]{64} = 4$ is rational, so it is not a surd. Check whether the radicand is a perfect $n$th power.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: "Ignores the index: treats every root as a square root, so gives it order 2 and tests only for a perfect square",
      remediation: t`Read the index first. $\sqrt[3]{5}$ has order $3$, and $\sqrt[3]{a}$ is rational only when $a$ is a perfect cube, not a perfect square.`,
      fallback: { kind: "ext", topic: "cubes and cube roots (Std VIII)" },
    },
    {
      id: "C05-M4",
      mistake: "Takes the square root s of the square factor out but divides the radicand by s, not by s squared: sqrt(112) = 4 sqrt(28)",
      remediation: t`Taking $5$ out of $\sqrt{50}$ uses up the whole square $25$. Divide by $25$: $\sqrt{50} = 5\sqrt{2}$, not $5\sqrt{10}$.`,
      fallback: { kind: "ext", topic: "squares and square roots (Std VIII)" },
    },
    {
      id: "C05-M5",
      mistake: "Takes the square factor out whole instead of its square root: sqrt(112) = 16 sqrt(7)",
      remediation: t`Only the square root of the square comes out: $\sqrt{25 \times 2} = \sqrt{25} \times \sqrt{2}$, which is $5\sqrt{2}$, not $25\sqrt{2}$.`,
      fallback: { kind: "ext", topic: "squares and square roots (Std VIII)" },
    },
    {
      id: "C05-M6",
      mistake: "Splits the root of a product into a sum: sqrt(16 x 7) = 4 + sqrt(7)",
      remediation: t`The root of a product is a product, not a sum: $\sqrt{25 \times 2} = \sqrt{25} \times \sqrt{2}$, which is $5\sqrt{2}$, never $5 + \sqrt{2}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`Simplest form never changes a surd's value, so a student who stops at a smaller square factor ($\sqrt{112} = 2\sqrt{28}$) gives the key's value; that slip is taught on the Simplest form slide and in the worked example, not caught by an option.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q1(v)" },
      stem: t`How many of these are **surds of order 3**? $\sqrt[3]{36}$, $\sqrt[3]{27}$, $\sqrt{3}$, $\sqrt[3]{5}$, $\sqrt[4]{81}$, $\sqrt[3]{100}$`,
      verify: { kind: "value", inputs: {  }, params: { order: "3", roots: ["3:36", "3:27", "2:3", "3:5", "4:81", "3:100"] } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C05-M3", value: "0" },
        { key: "B", text: t`$3$`, correct: true, value: "3" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C05-M1", value: "1" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C05-M2", value: "4" },
      ],
      solution: {
        steps: [
          t`Order $3$ means index $3$: look at $\sqrt[3]{36}$, $\sqrt[3]{27}$, $\sqrt[3]{5}$ and $\sqrt[3]{100}$. ($\sqrt{3}$ has order $2$; $\sqrt[4]{81}$ has order $4$.)`,
          t`$27 = 3^3$, so $\sqrt[3]{27} = 3$ is rational: not a surd.`,
          t`$36$, $5$ and $100$ are not cubes, so those three roots are irrational: surds of order $3$.`,
          t`So $3$ of them are surds of order $3$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q2(iv)" },
      stem: t`How many of these are **surds of order 2**? $\sqrt{8}$, $\sqrt{49}$, $\sqrt[3]{16}$, $\sqrt[4]{2}$, $\sqrt{11}$, $\sqrt[3]{10}$`,
      verify: { kind: "value", inputs: {  }, params: { order: "2", roots: ["2:8", "2:49", "3:16", "4:2", "2:11", "3:10"] } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C05-M1", value: "1" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C05-M2", value: "3" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C05-M3", value: "4" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Order $2$ means a square root: look at $\sqrt{8}$, $\sqrt{49}$ and $\sqrt{11}$. The others have index $3$ or $4$.`,
          t`$49 = 7^2$, so $\sqrt{49} = 7$ is rational: not a surd.`,
          t`$8$ and $11$ are not perfect squares, so $\sqrt{8}$ and $\sqrt{11}$ are surds of order $2$.`,
          t`So $2$ of them are surds of order $2$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q4(iv)" },
      stem: t`Write the surd $\sqrt{112}$ in simplest form.`,
      verify: { kind: "value", inputs: { c: "1", n: "112" } },
      options: [
        { key: "A", text: t`$4\sqrt{7}$`, correct: true, value: "4*sqrt(7)" },
        { key: "B", text: t`$4\sqrt{28}$`, correct: false, misconceptionId: "C05-M4", value: "8*sqrt(7)" },
        { key: "C", text: t`$16\sqrt{7}$`, correct: false, misconceptionId: "C05-M5", value: "16*sqrt(7)" },
        { key: "D", text: t`$4 + \sqrt{7}$`, correct: false, misconceptionId: "C05-M6", value: "sqrt(7) + 4" },
      ],
      solution: {
        steps: [
          t`Squares that divide $112$: $4$ and $16$. The largest is $16$, so $112 = 16 \times 7$.`,
          t`$\sqrt{112} = \sqrt{16} \times \sqrt{7}$ $= 4\sqrt{7}$.`,
          t`$7$ has no square factor, so $4\sqrt{7}$ is the simplest form.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q3(iv)" },
      stem: t`$\sqrt{48}$ and $6\sqrt{3}$ are like surds. Write $\sqrt{48}$ in simplest form.`,
      verify: { kind: "value", inputs: { c: "1", n: "48" } },
      options: [
        { key: "A", text: t`$16\sqrt{3}$`, correct: false, misconceptionId: "C05-M5", value: "16*sqrt(3)" },
        { key: "B", text: t`$4 + \sqrt{3}$`, correct: false, misconceptionId: "C05-M6", value: "sqrt(3) + 4" },
        { key: "C", text: t`$4\sqrt{3}$`, correct: true, value: "4*sqrt(3)" },
        { key: "D", text: t`$4\sqrt{12}$`, correct: false, misconceptionId: "C05-M4", value: "8*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`The largest square that divides $48$ is $16$: $48 = 16 \times 3$.`,
          t`$\sqrt{48} = \sqrt{16} \times \sqrt{3}$ $= 4\sqrt{3}$.`,
          t`$4\sqrt{3}$ and $6\sqrt{3}$ have the same radicand $3$, so they are like surds.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q5(i)" },
      stem: t`Write $\frac{3}{4}\sqrt{32}$ in simplest form.`,
      verify: { kind: "value", inputs: { c: "3/4", n: "32" } },
      options: [
        { key: "A", text: t`$3\sqrt{2}$`, correct: true, value: "3*sqrt(2)" },
        { key: "B", text: t`$3\sqrt{8}$`, correct: false, misconceptionId: "C05-M4", value: "6*sqrt(2)" },
        { key: "C", text: t`$12\sqrt{2}$`, correct: false, misconceptionId: "C05-M5", value: "12*sqrt(2)" },
        { key: "D", text: t`$3 + \frac{3}{4}\sqrt{2}$`, correct: false, misconceptionId: "C05-M6", value: "3*sqrt(2)/4 + 3" },
      ],
      solution: {
        steps: [
          t`The largest square that divides $32$ is $16$: $\sqrt{32} = \sqrt{16} \times \sqrt{2}$ $= 4\sqrt{2}$.`,
          t`So $\frac{3}{4}\sqrt{32} = \frac{3}{4} \times 4\sqrt{2}$ $= 3\sqrt{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q5(ii)" },
      stem: t`Write $-\frac{5}{9}\sqrt{162}$ in simplest form.`,
      verify: { kind: "value", inputs: { c: "-5/9", n: "162" } },
      options: [
        { key: "A", text: t`$-5\sqrt{2}$`, correct: true, value: "-5*sqrt(2)" },
        { key: "B", text: t`$-5\sqrt{18}$`, correct: false, misconceptionId: "C05-M4", value: "-15*sqrt(2)" },
        { key: "C", text: t`$-45\sqrt{2}$`, correct: false, misconceptionId: "C05-M5", value: "-45*sqrt(2)" },
        { key: "D", text: t`$-5 - \frac{5}{9}\sqrt{2}$`, correct: false, misconceptionId: "C05-M6", value: "-5 - 5*sqrt(2)/9" },
      ],
      solution: {
        steps: [
          t`The largest square that divides $162$ is $81$: $\sqrt{162} = \sqrt{81} \times \sqrt{2}$ $= 9\sqrt{2}$.`,
          t`So $-\frac{5}{9}\sqrt{162} = -\frac{5}{9} \times 9\sqrt{2}$ $= -5\sqrt{2}$.`,
        ],
      },
    },
  ],
};
