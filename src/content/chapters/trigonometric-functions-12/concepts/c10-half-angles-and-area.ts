import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`A triangular plot has sides $4$ m, $13$ m and $15$ m. Neither an angle nor a height is given. **Can you find its area?**`,
    reveal: t`Yes. Half the perimeter is $s = 16$, and the area is $\sqrt{16 \times 12 \times 3 \times 1}$ $= \sqrt{576} = 24$ sq. m. Three sides are enough.`,
  },
  explanation: {
    intuition: [
      t`Three sides fix a triangle, so they fix its angles and its area too.`,
      t`The cosine rule gives $\cos A$ from the sides; half angles need one more step.`,
      t`The **semi-perimeter** $s$ is half the distance round the triangle.`,
      t`With $s$, each half-angle ratio is a square root of a short fraction.`,
      t`The area needs no angle at all: $\sqrt{s(s - a)(s - b)(s - c)}$.`,
    ],
    formal: [
      {
        title: "The semi-perimeter",
        points: [
          t`The **perimeter** is the distance round the triangle: $a + b + c$.`,
          t`The **semi-perimeter** is half of it: $s = \frac{a + b + c}{2}$.`,
          t`Each side is shorter than the other two together, so $s - a$, $s - b$, $s - c$ are positive.`,
          t`For $a = 7$, $b = 8$, $c = 9$: $s = 12$, and $s - a = 5$, $s - b = 4$, $s - c = 3$.`,
          t`Check: $(s - a) + (s - b) + (s - c)$ $= 3s - 2s = s$.`,
        ],
      },
      {
        title: "Half-angle formulae",
        points: [
          t`Angle $A$ lies between sides $b$ and $c$; side $a$ is **opposite** it, across the triangle.`,
          t`$\sin\frac{A}{2}$ $= \sqrt{\frac{(s - b)(s - c)}{bc}}$`,
          t`$\cos\frac{A}{2}$ $= \sqrt{\frac{s(s - a)}{bc}}$`,
          t`Both have $bc$ below: the two sides that enclose $A$.`,
          t`The sine takes $s$ minus each enclosing side; the cosine takes $s$ and $s$ minus the opposite side.`,
          t`For $B$, between $c$ and $a$: $\sin\frac{B}{2}$ $= \sqrt{\frac{(s - c)(s - a)}{ca}}$.`,
        ],
        figure: {
          alt: "Triangle ABC. Angle A sits between sides b (from A to C) and c (from A to B); side a, from B to C, is opposite A. Later angle B is marked, between sides c and a.",
          axes: "none",
          view: { x: [-1, 7], y: [-1, 4.6] },
          elements: [
            { kind: "segment", from: [0, 0], to: [6, 0], tone: "muted" },
            { kind: "segment", from: [0, 0], to: [1.8, 3.6], tone: "muted" },
            { kind: "segment", from: [6, 0], to: [1.8, 3.6], tone: "muted" },
            { kind: "point", at: [0, 0], label: "A", labelAt: "sw" },
            { kind: "point", at: [6, 0], label: "B", labelAt: "se" },
            { kind: "point", at: [1.8, 3.6], label: "C", labelAt: "n" },
            { kind: "angle", at: [0, 0], from: 0, to: 63.4, step: 1 },
            { kind: "segment", from: [0, 0], to: [6, 0], tone: "good", label: "c", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.8, 3.6], tone: "good", label: "b", labelAt: "nw", step: 1 },
            { kind: "label", at: [3.9, 1.8], label: "a", labelAt: "ne", step: 1 },
            { kind: "angle", at: [6, 0], from: 139.4, to: 180, step: 6 },
            { kind: "segment", from: [6, 0], to: [1.8, 3.6], tone: "accent", step: 6 },
          ],
        },
      },
      {
        title: "Where they come from",
        points: [
          t`Start from the identity $2\sin^2\frac{A}{2} = 1 - \cos A$.`,
          t`Put in the cosine rule: $1 - \cos A$ $= \frac{a^2 - (b - c)^2}{2bc}$.`,
          t`Factorise: $a^2 - (b - c)^2$ $= (a - b + c)(a + b - c)$.`,
          t`$a - b + c = 2(s - b)$ and $a + b - c = 2(s - c)$, so $\sin^2\frac{A}{2}$ $= \frac{(s - b)(s - c)}{bc}$.`,
          t`$\frac{A}{2}$ is under $90^\circ$, so take the positive square root.`,
          t`$2\cos^2\frac{A}{2} = 1 + \cos A$ gives the cosine formula the same way.`,
        ],
      },
      {
        title: "Tangent of a half angle",
        points: [
          t`Divide the sine by the cosine: the $bc$ cancels.`,
          t`$\tan\frac{A}{2}$ $= \sqrt{\frac{(s - b)(s - c)}{s(s - a)}}$`,
          t`For $a = 7$, $b = 8$, $c = 9$: $\tan\frac{A}{2} = \sqrt{\frac{4 \times 3}{12 \times 5}}$ $= \frac{1}{\sqrt{5}}$.`,
          t`The fraction under the root is $\tan^2\frac{A}{2}$, not $\tan\frac{A}{2}$: always take the root.`,
        ],
      },
      {
        title: "Area from three sides",
        points: [
          t`$\sin A = 2\sin\frac{A}{2}\cos\frac{A}{2}$, which is $\frac{2}{bc}$ times $\sqrt{s(s - a)(s - b)(s - c)}$.`,
          t`The area is $\frac{1}{2}bc\sin A$, and the $bc$ cancels.`,
          t`$A(\triangle ABC)$ $= \sqrt{s(s - a)(s - b)(s - c)}$: this is **Heron's formula**.`,
          t`There are four factors under the root, and the first is $s$ itself.`,
          t`For $a = 7$, $b = 8$, $c = 9$: area $= \sqrt{12 \times 5 \times 4 \times 3}$ $= \sqrt{720} = 12\sqrt{5}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`In $\triangle ABC$, $a = 5$, $b = 6$ and $c = 7$. Find $\sin\frac{A}{2}$ and $A(\triangle ABC)$.`,
      steps: [
        t`$s = \frac{5 + 6 + 7}{2} = 9$, so $s - a = 4$, $s - b = 3$, $s - c = 2$.`,
        t`$A$ lies between $b$ and $c$: $\sin\frac{A}{2}$ $= \sqrt{\frac{(s - b)(s - c)}{bc}}$ $= \sqrt{\frac{3 \times 2}{6 \times 7}}$.`,
        t`That is $\sqrt{\frac{1}{7}} = \frac{1}{\sqrt{7}}$.`,
        t`Heron: area $= \sqrt{9 \times 4 \times 3 \times 2}$ $= \sqrt{216} = 6\sqrt{6}$ sq. units.`,
      ],
      answer: t`$\sin\frac{A}{2} = \frac{1}{\sqrt{7}}$ and $A(\triangle ABC) = 6\sqrt{6}$ sq. units.`,
    },
    visualSpec: t`Drag the three side lengths of a triangle; $s$, $s - a$, $s - b$, $s - c$ update beside it, and the half angles and Heron's area are read off live.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Swaps the sin and cos half-angle formulae: puts s(s - a) under the root for sin(A/2), and (s - b)(s - c) for cos(A/2)",
      remediation: t`$\sin\frac{A}{2}$ $= \sqrt{\frac{(s - b)(s - c)}{bc}}$ and $\cos\frac{A}{2}$ $= \sqrt{\frac{s(s - a)}{bc}}$. They come from $1 - \cos A$ and $1 + \cos A$.`,
      fallback: { kind: "ext", topic: "half-angle identities" },
    },
    {
      id: "C10-M2",
      mistake: "Takes s as the whole perimeter a + b + c instead of half of it",
      remediation: t`$s$ is the **semi**-perimeter: $s = \frac{a + b + c}{2}$, half the distance round the triangle.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Forgets the square root: gives sin^2(A/2) for sin(A/2), or the square of the area",
      remediation: t`The fraction (or product) is the square of the answer. Take its square root: $\sin\frac{A}{2}$ $= \sqrt{\frac{(s - b)(s - c)}{bc}}$, area $= \sqrt{s(s - a)(s - b)(s - c)}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Uses the formula for angle A (sides b, c) for angle B or C, without changing the letters",
      remediation: t`Each formula belongs to one angle. Below the root go the two sides that enclose it: for $C$, $\sin\frac{C}{2}$ $= \sqrt{\frac{(s - a)(s - b)}{ab}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Drops the lone factor s: area = sqrt((s - a)(s - b)(s - c)), cos(A/2) = sqrt((s - a)/(bc))",
      remediation: t`The first factor is $s$ itself: area $= \sqrt{s(s - a)(s - b)(s - c)}$ and $\cos\frac{A}{2}$ $= \sqrt{\frac{s(s - a)}{bc}}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C10-M4 gives the key for angle $A$: draw it only from items on $B$ or $C$. C10-M1 and C10-M4 have no model for the area; C10-M5 has none for $\sin\frac{A}{2}$.`,
    t`C10-M1 gives the key when the angle is $90^\circ$ (its half is $45^\circ$, where sine and cosine agree), as for $\cos\frac{C}{2}$ with $a = 18$, $b = 24$, $c = 30$.`,
    t`Book note: in 3.2 SolvedEx.Applications.1 the book's part (i) computes $\frac{13^2 + 15^2 - 14^2}{2(13)(15)} = \frac{33}{65}$, which is $\cos B$; $\cos A = \frac{3}{5}$.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.2 SolvedEx.Applications.1" },
      stem: t`In $\triangle ABC$, $a = 13$, $b = 14$ and $c = 15$. Then $\sin\frac{C}{2} =$`,
      verify: { kind: "value", inputs: { a: "13", b: "14", c: "15" }, params: { f: "sin", angle: "C" } },
      options: [
        { key: "A", text: t`$\frac{3}{\sqrt{13}}$`, correct: false, misconceptionId: "C10-M1", value: "3*sqrt(13)/13" },
        { key: "B", text: t`$\frac{4}{13}$`, correct: false, misconceptionId: "C10-M3", value: "4/13" },
        { key: "C", text: t`$\frac{1}{\sqrt{5}}$`, correct: false, misconceptionId: "C10-M4", value: "sqrt(5)/5" },
        { key: "D", text: t`$\frac{2}{\sqrt{13}}$`, correct: true, value: "2*sqrt(13)/13" },
      ],
      solution: {
        steps: [
          t`$s = \frac{13 + 14 + 15}{2} = 21$: $s - a = 8$, $s - b = 7$, $s - c = 6$.`,
          t`$C$ lies between $a$ and $b$: $\sin\frac{C}{2}$ $= \sqrt{\frac{(s - a)(s - b)}{ab}}$ $= \sqrt{\frac{8 \times 7}{13 \times 14}}$.`,
          t`That is $\sqrt{\frac{4}{13}} = \frac{2}{\sqrt{13}}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.2 Q10 (iii)" },
      stem: t`In $\triangle ABC$, $a = 18$, $b = 24$ and $c = 30$. Then $\cos\frac{A}{2} =$`,
      verify: { kind: "value", inputs: { a: "18", b: "24", c: "30" }, params: { f: "cos", angle: "A" } },
      options: [
        { key: "A", text: t`$\frac{3}{\sqrt{10}}$`, correct: true, value: "3*sqrt(10)/10" },
        { key: "B", text: t`$\frac{1}{\sqrt{10}}$`, correct: false, misconceptionId: "C10-M1", value: "sqrt(10)/10" },
        { key: "C", text: t`$\frac{9}{10}$`, correct: false, misconceptionId: "C10-M3", value: "9/10" },
        { key: "D", text: t`$\frac{1}{2\sqrt{10}}$`, correct: false, misconceptionId: "C10-M5", value: "sqrt(10)/20" },
      ],
      solution: {
        steps: [
          t`$s = \frac{18 + 24 + 30}{2} = 36$, and $s - a = 18$.`,
          t`$\cos\frac{A}{2}$ $= \sqrt{\frac{s(s - a)}{bc}}$ $= \sqrt{\frac{36 \times 18}{24 \times 30}}$.`,
          t`That is $\sqrt{\frac{9}{10}} = \frac{3}{\sqrt{10}}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.2 Q10 (v)" },
      stem: t`In $\triangle ABC$, $a = 18$, $b = 24$ and $c = 30$. Its area $A(\triangle ABC)$, in sq. units, is:`,
      verify: { kind: "value", inputs: { a: "18", b: "24", c: "30" }, params: { f: "area", angle: "A" } },
      options: [
        { key: "A", text: t`$36$`, correct: false, misconceptionId: "C10-M5", value: "36" },
        { key: "B", text: t`$216$`, correct: true, value: "216" },
        { key: "C", text: t`$432\sqrt{42}$`, correct: false, misconceptionId: "C10-M2", value: "432*sqrt(42)" },
        { key: "D", text: t`$46656$`, correct: false, misconceptionId: "C10-M3", value: "46656" },
      ],
      solution: {
        steps: [
          t`$s = 36$: $s - a = 18$, $s - b = 12$, $s - c = 6$.`,
          t`Area $= \sqrt{36 \times 18 \times 12 \times 6}$ $= \sqrt{46656} = 216$ sq. units.`,
          t`Check: $18^2 + 24^2 = 30^2$, so $C = 90^\circ$ and the area is $\frac{1}{2} \times 18 \times 24 = 216$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.2 SolvedEx.Applications.1" },
      stem: t`In $\triangle ABC$, $a = 13$, $b = 14$ and $c = 15$. Then $\tan\frac{B}{2} =$`,
      verify: { kind: "value", inputs: { a: "13", b: "14", c: "15" }, params: { f: "tan", angle: "B" } },
      options: [
        { key: "A", text: t`$\frac{16}{49}$`, correct: false, misconceptionId: "C10-M3", value: "16/49" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C10-M4", value: "1/2" },
        { key: "C", text: t`$\frac{4}{7}$`, correct: true, value: "4/7" },
        { key: "D", text: t`$\frac{7}{4}$`, correct: false, misconceptionId: "C10-M1", value: "7/4" },
      ],
      solution: {
        steps: [
          t`$s = 21$: $s - a = 8$, $s - b = 7$, $s - c = 6$.`,
          t`$B$ lies between $c$ and $a$: $\tan\frac{B}{2}$ $= \sqrt{\frac{(s - c)(s - a)}{s(s - b)}}$.`,
          t`$= \sqrt{\frac{6 \times 8}{21 \times 7}}$ $= \sqrt{\frac{16}{49}} = \frac{4}{7}$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.2 Q10" },
      stem: t`In $\triangle ABC$, $a = 18$, $b = 24$ and $c = 30$. Then $\cos\frac{C}{2} =$`,
      verify: { kind: "value", inputs: { a: "18", b: "24", c: "30" }, params: { f: "cos", angle: "C" } },
      options: [
        { key: "A", text: t`$\frac{1}{\sqrt{2}}$`, correct: true, value: "sqrt(2)/2" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C10-M3", value: "1/2" },
        { key: "C", text: t`$\frac{3}{\sqrt{10}}$`, correct: false, misconceptionId: "C10-M4", value: "3*sqrt(10)/10" },
        { key: "D", text: t`$\frac{1}{6\sqrt{2}}$`, correct: false, misconceptionId: "C10-M5", value: "sqrt(2)/12" },
      ],
      solution: {
        steps: [
          t`$s = 36$, and $s - c = 6$.`,
          t`$C$ lies between $a$ and $b$: $\cos\frac{C}{2}$ $= \sqrt{\frac{s(s - c)}{ab}}$ $= \sqrt{\frac{36 \times 6}{18 \times 24}}$.`,
          t`That is $\sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}}$. Check: $18^2 + 24^2 = 30^2$, so $C = 90^\circ$ and $\frac{C}{2} = 45^\circ$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.2 SolvedEx.Applications.1 (v)" },
      stem: t`In $\triangle ABC$, $a = 13$, $b = 14$ and $c = 15$. Its area $A(\triangle ABC)$, in sq. units, is:`,
      verify: { kind: "value", inputs: { a: "13", b: "14", c: "15" }, params: { f: "area", angle: "A" } },
      options: [
        { key: "A", text: t`$84$`, correct: true, value: "84" },
        { key: "B", text: t`$126\sqrt{58}$`, correct: false, misconceptionId: "C10-M2", value: "126*sqrt(58)" },
        { key: "C", text: t`$7056$`, correct: false, misconceptionId: "C10-M3", value: "7056" },
        { key: "D", text: t`$4\sqrt{21}$`, correct: false, misconceptionId: "C10-M5", value: "4*sqrt(21)" },
      ],
      solution: {
        steps: [
          t`$s = \frac{13 + 14 + 15}{2} = 21$: $s - a = 8$, $s - b = 7$, $s - c = 6$.`,
          t`Area $= \sqrt{21 \times 8 \times 7 \times 6}$ $= \sqrt{7056} = 84$ sq. units.`,
        ],
      },
    },
  ],
};
