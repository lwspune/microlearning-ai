import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`For $\vec a = 2\hat i$, $\vec b = 3\hat j$ and $\vec c = \hat k$, work out $\vec a\cdot(\vec b\times\vec c)$ and $\vec c\cdot(\vec a\times\vec b)$. Are they equal?`,
    reveal: t`$\vec b\times\vec c = 3\hat i$, so the first is $6$. $\vec a\times\vec b = 6\hat k$, so the second is $6$ too. Both read $\vec a$, $\vec b$, $\vec c$ in the same cyclic order, and that never changes the value.`,
  },
  explanation: {
    intuition: [
      t`Three vectors can be combined into a single number.`,
      t`Cross two of them: $\vec b\times\vec c$ is a vector.`,
      t`Dot the third with it: $\vec a\cdot(\vec b\times\vec c)$ is a number.`,
      t`This number is the **scalar triple product**, written $[\vec a\ \vec b\ \vec c]$.`,
      t`With components, it is one 3 by 3 determinant.`,
      t`Its sign depends on the order of the three vectors, just as a determinant's does.`,
    ],
    formal: [
      {
        title: "The definition",
        points: [
          t`The **scalar triple product** of $\vec a$, $\vec b$, $\vec c$ is $\vec a\cdot(\vec b\times\vec c)$.`,
          t`First find the cross product $\vec b\times\vec c$, which is a vector.`,
          t`Then take its dot product with $\vec a$: the result is a **scalar**, a plain number.`,
          t`It is written $[\vec a\ \vec b\ \vec c]$: the three vectors, in order, in square brackets.`,
          t`$\vec a\cdot\vec b\times\vec c$ can only mean $\vec a\cdot(\vec b\times\vec c)$: the number $\vec a\cdot\vec b$ cannot be crossed.`,
        ],
      },
      {
        title: "The determinant form",
        points: [
          t`With components $a_1, a_2, a_3$ and so on, $[\vec a\ \vec b\ \vec c]$ is the 3 by 3 determinant with rows $\vec a$, $\vec b$, $\vec c$.`,
          t`It is the cross product's determinant with $\hat i, \hat j, \hat k$ replaced by $a_1, a_2, a_3$.`,
          t`Expanded: $a_1(b_2c_3 - b_3c_2)$ $- a_2(b_1c_3 - b_3c_1)$ $+ a_3(b_1c_2 - b_2c_1)$.`,
          t`A **minor** is the 2 by 2 determinant left when you strike out one row and one column.`,
          t`A minor with rows $p\ q$ and $r\ s$ is $ps - qr$; the middle term carries a minus sign.`,
          t`Every term takes one entry from each row and each column: $a_1b_1c_1$ never appears.`,
        ],
      },
      {
        title: "Cyclic shifts keep the value",
        points: [
          t`Write $\vec a$, $\vec b$, $\vec c$ round a circle, going clockwise.`,
          t`A **cyclic shift** starts reading at another vector, same direction: $\vec b, \vec c, \vec a$ or $\vec c, \vec a, \vec b$.`,
          t`A cyclic shift keeps the value: $[\vec a\ \vec b\ \vec c] = [\vec b\ \vec c\ \vec a]$ $= [\vec c\ \vec a\ \vec b]$.`,
          t`A **swap** exchanges two vectors, as in $[\vec a\ \vec c\ \vec b]$: it reads backwards and changes the sign.`,
          t`This is the determinant rule: swapping two rows negates, and a cyclic shift is two swaps.`,
        ],
        figure: {
          alt: "Three points a, b and c round a circle, a at the top, b at the bottom right, c at the bottom left. Arrows go clockwise from a to b, b to c and c back to a. Below them: [a b c] = [b c a] = [c a b], and under that, [a c b] = −[a b c].",
          axes: "none",
          view: { x: [-2.4, 2.4], y: [-2.4, 2.2] },
          elements: [
            { kind: "point", at: [0, 1.5], label: "a", labelAt: "n", step: 1 },
            { kind: "point", at: [1.3, -0.75], label: "b", labelAt: "e", step: 1 },
            { kind: "point", at: [-1.3, -0.75], label: "c", labelAt: "w", step: 1 },
            { kind: "vector", from: [0.234, 1.095], to: [1.066, -0.345], tone: "good", step: 1 },
            { kind: "vector", from: [0.832, -0.75], to: [-0.832, -0.75], tone: "good", step: 1 },
            { kind: "vector", from: [-1.066, -0.345], to: [-0.234, 1.095], tone: "good", step: 1 },
            { kind: "label", at: [0, -1.45], label: "[a b c] = [b c a] = [c a b]", labelAt: "n", tone: "good", step: 3 },
            { kind: "label", at: [0, -2.05], label: "[a c b] = −[a b c]", labelAt: "n", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "Dot and cross trade places",
        points: [
          t`$(\vec a\times\vec b)\cdot\vec c = \vec c\cdot(\vec a\times\vec b)$, since the dot product is commutative.`,
          t`That is $[\vec c\ \vec a\ \vec b]$, a cyclic shift of $[\vec a\ \vec b\ \vec c]$.`,
          t`So $\vec a\cdot(\vec b\times\vec c) = (\vec a\times\vec b)\cdot\vec c$: the dot and the cross can swap.`,
          t`Only the order of the three vectors matters: read it off, then compare it with $\vec a, \vec b, \vec c$.`,
          t`For the unit vectors, $[\hat i\ \hat j\ \hat k] = \hat i\cdot(\hat j\times\hat k)$ $= \hat i\cdot\hat i = 1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\vec a = 2\hat i - \hat j + \hat k$, $\vec b = \hat i + 3\hat j - 2\hat k$ and $\vec c = 3\hat i + \hat j + 2\hat k$, find $[\vec a\ \vec b\ \vec c]$, then $\vec c\cdot(\vec a\times\vec b)$ and $\vec b\cdot(\vec a\times\vec c)$.`,
      steps: [
        t`Rows: $2\ \ {-1}\ \ 1$, then $1\ \ 3\ \ {-2}$, then $3\ \ 1\ \ 2$.`,
        t`First term: $2[(3)(2) - (-2)(1)] = 2(8) = 16$.`,
        t`Middle: $-(-1)[(1)(2) - (-2)(3)] = +8$. Last: $1[(1)(1) - (3)(3)] = -8$.`,
        t`So $[\vec a\ \vec b\ \vec c] = 16 + 8 - 8 = 16$.`,
        t`$\vec c\cdot(\vec a\times\vec b) = [\vec c\ \vec a\ \vec b]$, a cyclic shift: $16$. $\vec b\cdot(\vec a\times\vec c) = [\vec b\ \vec a\ \vec c]$, one swap: $-16$.`,
      ],
      answer: t`$[\vec a\ \vec b\ \vec c] = 16$, $\vec c\cdot(\vec a\times\vec b) = 16$, $\vec b\cdot(\vec a\times\vec c) = -16$`,
    },
    visualSpec: t`Drag three vectors in a 3D view while $[\vec a\ \vec b\ \vec c]$ updates from the determinant; reorder them round a circle and watch a cyclic shift keep the value and a swap flip its sign.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Gives the middle term a $+$ sign, forgetting the signs $+$, $-$, $+$ along the first row`,
      remediation: t`Expanding along row 1, the signs go $+$, $-$, $+$: the middle term is $-a_2(b_1c_3 - b_3c_1)$.`,
      fallback: { kind: "ext", topic: "3 by 3 determinants" },
    },
    {
      id: "C10-M2",
      mistake: t`Ignores the order of the vectors, taking every triple product of $\vec a$, $\vec b$, $\vec c$ as $[\vec a\ \vec b\ \vec c]$`,
      remediation: t`Order matters: swapping two vectors changes the sign, so $[\vec b\ \vec a\ \vec c] = -[\vec a\ \vec b\ \vec c]$. Write the rows in the order the product names them.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C10-M3",
      mistake: "Thinks every change of order flips the sign, a cyclic shift included",
      remediation: t`A cyclic shift keeps the value: $[\vec a\ \vec b\ \vec c] = [\vec b\ \vec c\ \vec a]$ $= [\vec c\ \vec a\ \vec b]$. Only swapping two vectors flips the sign.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Multiplies matching components of all three, $a_1b_1c_1 + a_2b_2c_2 + a_3b_3c_3$, as in a dot product`,
      remediation: t`$\vec b\times\vec c$ mixes different components, so each term of $[\vec a\ \vec b\ \vec c]$ takes one entry from each row and each column. Write the determinant and expand it.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C10-M5",
      mistake: t`Works each 2 by 2 minor as $qr - ps$, the diagonals the wrong way round`,
      remediation: t`A 2 by 2 determinant with rows $p\ q$ and $r\ s$ is $ps - qr$: the leading diagonal, top left to bottom right, comes first.`,
      fallback: { kind: "ext", topic: "2 by 2 determinants" },
    },
    {
      id: "C10-M6",
      mistake: t`Adds the three signed minors of $\vec b\times\vec c$ without multiplying them by $a_1$, $a_2$, $a_3$`,
      remediation: t`Row 1 holds $a_1, a_2, a_3$ where the cross product has $\hat i, \hat j, \hat k$: multiply each minor by its entry, then add. That is the dot product with $\vec a$.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  engineNotes: [
    t`C10-M2 gives the key on a cyclic shift of the listed order, C10-M3 on a single swap; C10-M1 gives the key when the middle entry of row 1 is $0$.`,
    t`C10-M5 always gives minus the key, so on a single swapped product it lands on C10-M2's option and on a single cyclic one on C10-M3's: never list it with those there (C10-Q5 has C10-M2's $-4$, which C10-M5 also gives).`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q1" },
      stem: t`If $\vec a = 3\hat i - \hat j + 4\hat k$, $\vec b = 2\hat i + 3\hat j - \hat k$ and $\vec c = -5\hat i + 2\hat j + 3\hat k$, then $\vec a\cdot(\vec b\times\vec c)$ is:`,
      verify: { kind: "value", inputs: { a: "(3, -1, 4)", b: "(2, 3, -1)", c: "(-5, 2, 3)" }, params: { base: "abc", terms: "abc" } },
      options: [
        { key: "A", text: t`$108$`, correct: false, misconceptionId: "C10-M1", value: "108" },
        { key: "B", text: t`$-110$`, correct: false, misconceptionId: "C10-M5", value: "-110" },
        { key: "C", text: t`$29$`, correct: false, misconceptionId: "C10-M6", value: "29" },
        { key: "D", text: t`$110$`, correct: true, value: "110" },
      ],
      solution: {
        steps: [
          t`Rows: $3\ \ {-1}\ \ 4$, then $2\ \ 3\ \ {-1}$, then $-5\ \ 2\ \ 3$.`,
          t`First term: $3[(3)(3) - (-1)(2)] = 3(11) = 33$.`,
          t`Middle: $-(-1)[(2)(3) - (-1)(-5)] = +1$. Last: $4[(2)(2) - (3)(-5)] = 76$.`,
          t`$\vec a\cdot(\vec b\times\vec c)$ $= 33 + 1 + 76 = 110$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 SolvedEx.1 i)" },
      stem: t`If $\vec a = \hat i + 2\hat j + 3\hat k$, $\vec b = -\hat i + \hat j + 2\hat k$ and $\vec c = 2\hat i + \hat j + 4\hat k$, then $\vec b\cdot(\vec a\times\vec c)$ is:`,
      verify: { kind: "value", inputs: { a: "(1, 2, 3)", b: "(-1, 1, 2)", c: "(2, 1, 4)" }, params: { base: "abc", terms: "bac" } },
      options: [
        { key: "A", text: t`$-9$`, correct: true, value: "-9" },
        { key: "B", text: t`$-13$`, correct: false, misconceptionId: "C10-M1", value: "-13" },
        { key: "C", text: t`$9$`, correct: false, misconceptionId: "C10-M2", value: "9" },
        { key: "D", text: t`$24$`, correct: false, misconceptionId: "C10-M4", value: "24" },
      ],
      solution: {
        steps: [
          t`$\vec b\cdot(\vec a\times\vec c) = [\vec b\ \vec a\ \vec c]$: the rows go $\vec b$, $\vec a$, $\vec c$ in that order.`,
          t`Rows: $-1\ \ 1\ \ 2$, then $1\ \ 2\ \ 3$, then $2\ \ 1\ \ 4$.`,
          t`$-1(8 - 3) - 1(4 - 6) + 2(1 - 4)$ $= -5 + 2 - 6 = -9$.`,
          t`Check: $[\vec a\ \vec b\ \vec c] = 9$, and one swap flips it to $-9$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc I Q.17" },
      stem: t`The value of $\hat i\cdot(\hat j\times\hat k) + \hat j\cdot(\hat i\times\hat k) + \hat k\cdot(\hat i\times\hat j)$ is:`,
      verify: { kind: "value", inputs: { a: "(1, 0, 0)", b: "(0, 1, 0)", c: "(0, 0, 1)" }, params: { base: "abc", terms: "abc+bac+cab" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C10-M4", value: "0" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C10-M2", value: "3" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C10-M3", value: "-1" },
      ],
      solution: {
        steps: [
          t`$\hat i\cdot(\hat j\times\hat k)$ $= [\hat i\ \hat j\ \hat k] = 1$.`,
          t`$\hat j\cdot(\hat i\times\hat k) = [\hat j\ \hat i\ \hat k]$, one swap: $-1$. Indeed $\hat i\times\hat k = -\hat j$.`,
          t`$\hat k\cdot(\hat i\times\hat j) = [\hat k\ \hat i\ \hat j]$, a cyclic shift: $1$.`,
          t`The sum is $1 - 1 + 1 = 1$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q2" },
      stem: t`If $\vec a = 3\hat i + 5\hat k$, $\vec b = 4\hat i + 2\hat j - 3\hat k$ and $\vec c = 3\hat i + \hat j + 4\hat k$, then $\vec c\cdot(\vec a\times\vec b)$ is:`,
      verify: { kind: "value", inputs: { a: "(3, 0, 5)", b: "(4, 2, -3)", c: "(3, 1, 4)" }, params: { base: "abc", terms: "cab" } },
      options: [
        { key: "A", text: t`$-23$`, correct: false, misconceptionId: "C10-M3", value: "-23" },
        { key: "B", text: t`$25$`, correct: false, misconceptionId: "C10-M6", value: "25" },
        { key: "C", text: t`$23$`, correct: true, value: "23" },
        { key: "D", text: t`$-35$`, correct: false, misconceptionId: "C10-M1", value: "-35" },
      ],
      solution: {
        steps: [
          t`$\vec c\cdot(\vec a\times\vec b) = [\vec c\ \vec a\ \vec b]$, a cyclic shift of $[\vec a\ \vec b\ \vec c]$: same value.`,
          t`Rows: $3\ \ 0\ \ 5$, then $4\ \ 2\ \ {-3}$, then $3\ \ 1\ \ 4$.`,
          t`$3[(2)(4) - (-3)(1)] - 0$ $+ 5[(4)(1) - (2)(3)]$ $= 33 - 10$.`,
          t`$\vec c\cdot(\vec a\times\vec b) = 23$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q6 i)" },
      stem: t`If $\vec u = \hat i - 2\hat j + \hat k$, $\vec v = 3\hat i + \hat k$ and $\vec w = \hat j - \hat k$, then $\vec u\cdot(\vec w\times\vec v)$ is:`,
      verify: { kind: "value", inputs: { u: "(1, -2, 1)", v: "(3, 0, 1)", w: "(0, 1, -1)" }, params: { base: "uvw", terms: "uwv" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$-4$`, correct: false, misconceptionId: "C10-M2", value: "-4" },
        { key: "C", text: t`$-1$`, correct: false, misconceptionId: "C10-M4", value: "-1" },
        { key: "D", text: t`$-5$`, correct: false, misconceptionId: "C10-M6", value: "-5" },
      ],
      solution: {
        steps: [
          t`$\vec u\cdot(\vec w\times\vec v) = [\vec u\ \vec w\ \vec v]$: $\vec v$ and $\vec w$ are swapped, so it is $-[\vec u\ \vec v\ \vec w]$.`,
          t`Rows: $1\ \ {-2}\ \ 1$, then $3\ \ 0\ \ 1$, then $0\ \ 1\ \ {-1}$.`,
          t`$[\vec u\ \vec v\ \vec w]$ $= 1(0 - 1) + 2(-3 - 0) + 1(3 - 0)$ $= -4$.`,
          t`So $\vec u\cdot(\vec w\times\vec v) = -(-4) = 4$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc II Q.40" },
      stem: t`If $\vec a = \hat i + t\hat j + \hat k$, $\vec b = \hat j + t\hat k$ and $\vec c = t\hat i + \hat k$, then $[\vec a\ \vec b\ \vec c]$ is:`,
      verify: { kind: "value", inputs: { a: "(1, t, 1)", b: "(0, 1, t)", c: "(t, 0, 1)" }, params: { base: "abc", terms: "abc" } },
      options: [
        { key: "A", text: t`$t^3 - t + 1$`, correct: true, value: "t**3 - t + 1" },
        { key: "B", text: t`$-t^3 - t + 1$`, correct: false, misconceptionId: "C10-M1", value: "-t**3 - t + 1" },
        { key: "C", text: t`$-t^3 + t - 1$`, correct: false, misconceptionId: "C10-M5", value: "-t**3 + t - 1" },
        { key: "D", text: t`$t^2 - t + 1$`, correct: false, misconceptionId: "C10-M6", value: "t**2 - t + 1" },
      ],
      solution: {
        steps: [
          t`Rows: $1\ \ t\ \ 1$, then $0\ \ 1\ \ t$, then $t\ \ 0\ \ 1$.`,
          t`First term: $1[(1)(1) - (t)(0)] = 1$.`,
          t`Middle: $-t[(0)(1) - (t)(t)] = t^3$. Last: $1[(0)(0) - (1)(t)] = -t$.`,
          t`$[\vec a\ \vec b\ \vec c] = t^3 - t + 1$.`,
        ],
      },
    },
  ],
};
