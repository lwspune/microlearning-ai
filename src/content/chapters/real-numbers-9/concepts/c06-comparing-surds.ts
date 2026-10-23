import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`$5\sqrt{2}$ has the bigger number outside the root. $3\sqrt{5}$ has the bigger number under the root. Which is bigger?`,
    reveal: t`Square both. $(5\sqrt{2})^2 = 25 \times 2 = 50$ and $(3\sqrt{5})^2 = 9 \times 5 = 45$. Since $50 > 45$, $5\sqrt{2} > 3\sqrt{5}$.`,
  },
  explanation: {
    intuition: [
      t`A surd like $3\sqrt{2}$ means $3 \times \sqrt{2}$.`,
      t`Two surds with different roots are hard to compare by looking at them.`,
      t`Squaring a surd gets rid of the root: $(3\sqrt{2})^2 = 9 \times 2 = 18$.`,
      t`For positive numbers, squaring keeps the order: $3 < 4$ and $9 < 16$.`,
      t`So square both numbers, compare the squares, and the bigger square belongs to the bigger number.`,
    ],
    formal: [
      {
        title: "Comparing two square roots",
        points: [
          t`The **radicand** is the number under the root: in $\sqrt{274}$ it is $274$.`,
          t`A bigger radicand gives a bigger square root.`,
          t`Since $274 > 247$, we get $\sqrt{274} > \sqrt{247}$.`,
          t`So write each number as a single square root, then compare the radicands.`,
        ],
      },
      {
        title: "One surd as one root",
        points: [
          t`Any positive number $a$ is the square root of its square: $a = \sqrt{a^2}$.`,
          t`So $a\sqrt{b}$ $= \sqrt{a^2} \times \sqrt{b}$ $= \sqrt{a^2 b}$.`,
          t`The number outside goes in as its **square**; the radicand stays as it is.`,
          t`For example, $4\sqrt{3} = \sqrt{16 \times 3}$ $= \sqrt{48}$.`,
          t`Check: $(4\sqrt{3})^2 = 16 \times 3 = 48$.`,
        ],
      },
      {
        title: "A whole number and a surd",
        points: [
          t`A whole number is also a square root: $7 = \sqrt{49}$, because $7^2 = 49$.`,
          t`Compare $7$ and $2\sqrt{5}$: $2\sqrt{5} = \sqrt{4 \times 5}$ $= \sqrt{20}$.`,
          t`Since $49 > 20$, we get $\sqrt{49} > \sqrt{20}$, so $7 > 2\sqrt{5}$.`,
          t`Do not write $7$ as $\sqrt{7}$: $\sqrt{7}$ is less than $3$.`,
        ],
      },
      {
        title: "Steps to compare surds",
        points: [
          t`Step 1: write each number as a single square root, $a\sqrt{b} = \sqrt{a^2 b}$.`,
          t`Step 2: compare the radicands.`,
          t`Step 3: the bigger radicand belongs to the bigger number.`,
          t`Equal radicands mean equal numbers: $2\sqrt{7} = \sqrt{28}$.`,
          t`Comparing only the numbers outside, or only the radicands, can mislead.`,
        ],
      },
    ],
    worked: {
      prompt: t`Compare $6\sqrt{2}$ and $4\sqrt{5}$.`,
      steps: [
        t`Write $6\sqrt{2}$ as one square root: $6\sqrt{2} = \sqrt{36 \times 2}$ $= \sqrt{72}$.`,
        t`Write $4\sqrt{5}$ as one square root: $4\sqrt{5} = \sqrt{16 \times 5}$ $= \sqrt{80}$.`,
        t`Compare the radicands: $72 < 80$, so $\sqrt{72} < \sqrt{80}$.`,
        t`So $6\sqrt{2} < 4\sqrt{5}$, even though $6 > 4$.`,
      ],
      answer: t`$6\sqrt{2} < 4\sqrt{5}$`,
    },
    visualSpec: t`Drag the outside number and the radicand of two surds and watch each one's square, $a^2 b$, grow on a bar beside it, so the longer bar always marks the bigger surd.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Compares only the numbers outside the root: the bigger coefficient means the bigger surd (7√2 is the greatest because 7 is the biggest)",
      remediation: t`Only like surds, with the same root, can be compared by the number outside. Here the roots differ, so write each as $\sqrt{a^2 b}$ and compare.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M2",
      mistake: "Compares only the numbers under the root and ignores the number outside",
      remediation: t`$a\sqrt{b}$ means $a \times \sqrt{b}$, so the number outside counts too. Put it inside as its square, $\sqrt{a^2 b}$, then compare.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M3",
      mistake: "Moves the number outside into the root without squaring it: 7√2 = √14",
      remediation: t`The number outside goes in as its square, because $a = \sqrt{a^2}$. For example, $3\sqrt{2} = \sqrt{9 \times 2}$ $= \sqrt{18}$, not $\sqrt{6}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: "Writes a whole number n as √n instead of √(n²): 9 = √9",
      remediation: t`A whole number is the square root of its square: $6 = \sqrt{36}$, because $6^2 = 36$. But $\sqrt{6}$ is less than $3$.`,
      fallback: { kind: "ext", topic: "squares and square roots (Std VIII)" },
    },
    {
      id: "C06-M5",
      mistake: "Doubles the number outside instead of squaring it: 7√2 = √(14 × 2)",
      remediation: t`Squaring means multiplying a number by itself, not by $2$: $3^2 = 9$, so $3\sqrt{2} = \sqrt{18}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Squares the number under the root instead of the one outside: 4√6 = √(4 × 36)",
      remediation: t`Only the number outside is squared; the radicand stays as it is: $a\sqrt{b} = \sqrt{a^2 b}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M1 and C06-M2 show only on greatest and smallest items, never on pair or box items. Between just two surds one of them always agrees with the key, so diagnose them with three or more numbers.",
    "C06-M4 shows only when a whole number is among the numbers; on surds alone it gives the key.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q5(i)" },
      stem: t`To compare $7\sqrt{2}$ and $5\sqrt{3}$, write each as a single square root. Which two numbers under the root do you then compare?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pair", nums: "7:2,5:3" } },
      options: [
        { key: "A", text: t`$14$ and $15$`, correct: false, misconceptionId: "C06-M3", value: "(14, 15)" },
        { key: "B", text: t`$28$ and $30$`, correct: false, misconceptionId: "C06-M5", value: "(28, 30)" },
        { key: "C", text: t`$28$ and $45$`, correct: false, misconceptionId: "C06-M6", value: "(28, 45)" },
        { key: "D", text: t`$98$ and $75$`, correct: true, value: "(98, 75)" },
      ],
      solution: {
        steps: [
          t`$7\sqrt{2} = \sqrt{49 \times 2}$ $= \sqrt{98}$.`,
          t`$5\sqrt{3} = \sqrt{25 \times 3}$ $= \sqrt{75}$.`,
          t`So you compare $98$ and $75$. Since $98 > 75$, $7\sqrt{2} > 5\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q5(vi)" },
      stem: t`To compare $5\sqrt{3}$ and $9$, write each as a single square root. Which two numbers under the root do you then compare?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pair", nums: "5:3,9:1" } },
      options: [
        { key: "A", text: t`$75$ and $81$`, correct: true, value: "(75, 81)" },
        { key: "B", text: t`$15$ and $9$`, correct: false, misconceptionId: "C06-M3", value: "(15, 9)" },
        { key: "C", text: t`$75$ and $9$`, correct: false, misconceptionId: "C06-M4", value: "(75, 9)" },
        { key: "D", text: t`$30$ and $18$`, correct: false, misconceptionId: "C06-M5", value: "(30, 18)" },
      ],
      solution: {
        steps: [
          t`$5\sqrt{3} = \sqrt{25 \times 3}$ $= \sqrt{75}$.`,
          t`$9 = \sqrt{81}$, because $9^2 = 81$.`,
          t`So you compare $75$ and $81$. Since $75 < 81$, $5\sqrt{3} < 9$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q5(iv)" },
      stem: t`Which is the greatest of $5\sqrt{5}$, $7\sqrt{2}$, $2\sqrt{13}$ and $4\sqrt{7}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "greatest", nums: "5:5,7:2,2:13,4:7" } },
      options: [
        { key: "A", text: t`$5 \sqrt{5}$`, correct: true, value: "5*sqrt(5)" },
        { key: "B", text: t`$7 \sqrt{2}$`, correct: false, misconceptionId: "C06-M1", value: "7*sqrt(2)" },
        { key: "C", text: t`$2 \sqrt{13}$`, correct: false, misconceptionId: "C06-M2", value: "2*sqrt(13)" },
        { key: "D", text: t`$4 \sqrt{7}$`, correct: false, misconceptionId: "C06-M3", value: "4*sqrt(7)" },
      ],
      solution: {
        steps: [
          t`Square each: $(5\sqrt{5})^2 = 25 \times 5 = 125$ and $(7\sqrt{2})^2 = 49 \times 2 = 98$.`,
          t`$(2\sqrt{13})^2 = 4 \times 13 = 52$ and $(4\sqrt{7})^2 = 16 \times 7 = 112$.`,
          t`The greatest square is $125$, so $5\sqrt{5}$ is the greatest.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`Which is the smallest of $2\sqrt{11}$, $3\sqrt{7}$, $4\sqrt{6}$ and $6\sqrt{5}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "smallest", nums: "2:11,3:7,4:6,6:5" } },
      options: [
        { key: "A", text: t`$4 \sqrt{6}$`, correct: false, misconceptionId: "C06-M6", value: "4*sqrt(6)" },
        { key: "B", text: t`$2 \sqrt{11}$`, correct: true, value: "2*sqrt(11)" },
        { key: "C", text: t`$6 \sqrt{5}$`, correct: false, misconceptionId: "C06-M2", value: "6*sqrt(5)" },
        { key: "D", text: t`$3 \sqrt{7}$`, correct: false, misconceptionId: "C06-M3", value: "3*sqrt(7)" },
      ],
      solution: {
        steps: [
          t`Square each: $(2\sqrt{11})^2 = 4 \times 11 = 44$ and $(3\sqrt{7})^2 = 9 \times 7 = 63$.`,
          t`$(4\sqrt{6})^2 = 16 \times 6 = 96$ and $(6\sqrt{5})^2 = 36 \times 5 = 180$.`,
          t`The smallest square is $44$, so $2\sqrt{11}$ is the smallest.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.3 Q5(v)" },
      stem: t`To compare $4\sqrt{42}$ and $9\sqrt{2}$, first write $4\sqrt{42} = \sqrt{m}$. What is $m$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "box", nums: "4:42" } },
      options: [
        { key: "A", text: t`$672$`, correct: true, value: "672" },
        { key: "B", text: t`$168$`, correct: false, misconceptionId: "C06-M3", value: "168" },
        { key: "C", text: t`$336$`, correct: false, misconceptionId: "C06-M5", value: "336" },
        { key: "D", text: t`$7056$`, correct: false, misconceptionId: "C06-M6", value: "7056" },
      ],
      solution: {
        steps: [
          t`The number outside goes in as its square: $4^2 = 16$.`,
          t`$4\sqrt{42} = \sqrt{16 \times 42}$ $= \sqrt{672}$, so $m = 672$.`,
          t`Then $9\sqrt{2} = \sqrt{162}$, and $672 > 162$, so $4\sqrt{42} > 9\sqrt{2}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`Which is the greatest of $2\sqrt{6}$, $3\sqrt{5}$, $6\sqrt{3}$ and $7\sqrt{2}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "greatest", nums: "2:6,3:5,6:3,7:2" } },
      options: [
        { key: "A", text: t`$2 \sqrt{6}$`, correct: false, misconceptionId: "C06-M2", value: "2*sqrt(6)" },
        { key: "B", text: t`$3 \sqrt{5}$`, correct: false, misconceptionId: "C06-M6", value: "3*sqrt(5)" },
        { key: "C", text: t`$6 \sqrt{3}$`, correct: true, value: "6*sqrt(3)" },
        { key: "D", text: t`$7 \sqrt{2}$`, correct: false, misconceptionId: "C06-M1", value: "7*sqrt(2)" },
      ],
      solution: {
        steps: [
          t`Square each: $(2\sqrt{6})^2 = 4 \times 6 = 24$ and $(3\sqrt{5})^2 = 9 \times 5 = 45$.`,
          t`$(6\sqrt{3})^2 = 36 \times 3 = 108$ and $(7\sqrt{2})^2 = 49 \times 2 = 98$.`,
          t`The greatest square is $108$, so $6\sqrt{3}$ is the greatest.`,
        ],
      },
    },
  ],
};
