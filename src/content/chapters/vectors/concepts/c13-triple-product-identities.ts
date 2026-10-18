import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`Take $\vec a = \hat i$, $\vec b = \hat j$, $\vec c = \hat k$, so $[\vec a\ \vec b\ \vec c] = 1$. What is $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a]$?`,
    reveal: t`The vectors are $\hat i + \hat j$, $\hat j + \hat k$, $\hat k + \hat i$, and their triple product is $2$. It is $2[\vec a\ \vec b\ \vec c]$ for any three vectors: multiplying out the bracket shows why.`,
  },
  explanation: {
    intuition: [
      t`A bracket like $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a]$ hides several simpler triple products.`,
      t`Multiply it out, just as you multiply out $(x + y)(y + z)$.`,
      t`Any term with a repeated vector, like $[\vec a\ \vec b\ \vec a]$, is $0$.`,
      t`The terms that stay hold $\vec a$, $\vec b$, $\vec c$ in some order.`,
      t`Reorder each one to $[\vec a\ \vec b\ \vec c]$, minding the sign.`,
      t`The answer is a number times $[\vec a\ \vec b\ \vec c]$.`,
    ],
    formal: [
      {
        title: "Multiplying out a bracket",
        points: [
          t`A triple product splits over a sum in any slot, like multiplying out brackets.`,
          t`First slot: $[\vec a + \vec d\ \ \vec b\ \ \vec c]$ $= [\vec a\ \vec b\ \vec c] + [\vec d\ \vec b\ \vec c]$.`,
          t`The same holds in the second and third slots, by the distributive laws of $\cdot$ and $\times$.`,
          t`A scalar comes out as a factor: $[k\vec a\ \vec b\ \vec c]$ $= k[\vec a\ \vec b\ \vec c]$.`,
          t`Scalars from different slots multiply: $[2\vec a\ \ 3\vec b\ \ \vec c]$ $= 6[\vec a\ \vec b\ \vec c]$.`,
          t`So take one term from each slot in every way: three two-term slots give $2 \times 2 \times 2 = 8$ terms.`,
        ],
      },
      {
        title: "Repeated vectors give zero",
        points: [
          t`If two slots hold the same vector, the triple product is $0$.`,
          t`For example, $[\vec a\ \vec b\ \vec a] = \vec a\cdot(\vec b\times\vec a)$.`,
          t`$\vec b\times\vec a$ is perpendicular to $\vec a$, so this dot product is $0$.`,
          t`In volume terms, $\vec a$, $\vec b$, $\vec a$ lie in one plane and enclose no volume.`,
          t`So keep only the terms whose three vectors are all different.`,
          t`At most six survive: $\vec a$, $\vec b$, $\vec c$ in each of their six orders.`,
        ],
      },
      {
        title: "Reordering each surviving term",
        points: [
          t`A **cyclic shift** reads $\vec a, \vec b, \vec c$ from another start and keeps the sign: $[\vec b\ \vec c\ \vec a] = [\vec a\ \vec b\ \vec c]$.`,
          t`A **swap** exchanges two vectors and flips the sign: $[\vec b\ \vec a\ \vec c] = -[\vec a\ \vec b\ \vec c]$.`,
          t`A minus sign in a slot comes out too: $[\vec a\ \vec b\ {-\vec c}]$ $= -[\vec a\ \vec b\ \vec c]$.`,
          t`Add the signed coefficients: the total is the multiple of $[\vec a\ \vec b\ \vec c]$.`,
          t`In $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a]$ only $[\vec a\ \vec b\ \vec c]$ and $[\vec b\ \vec c\ \vec a]$ survive.`,
          t`Both are cyclic, so the bracket is $2[\vec a\ \vec b\ \vec c]$.`,
        ],
      },
      {
        title: "The determinant shortcut",
        points: [
          t`Write the coefficients of $\vec a$, $\vec b$, $\vec c$ in each slot as a row.`,
          t`For $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a]$ the rows are $1\ 1\ 0$, $0\ 1\ 1$ and $1\ 0\ 1$.`,
          t`The bracket equals this 3 by 3 determinant times $[\vec a\ \vec b\ \vec c]$.`,
          t`Expand along row 1 with the signs $+$, $-$, $+$: $1(1) - 1(-1) + 0 = 2$.`,
          t`A missing vector is a $0$ entry, and a minus sign stays with its entry.`,
          t`It gives the same total as multiplying out, and is quicker for busy brackets.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $|\vec a| = 2$, $|\vec b| = 3$ and $|\vec c| = 4$, find $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c - \vec a]$.`,
      steps: [
        t`Multiply out: one vector from each slot, $2 \times 2 \times 2 = 8$ terms.`,
        t`With $\vec a$ first, only $[\vec a\ \vec b\ \vec c]$ has three different vectors.`,
        t`With $\vec b$ first, only $[\vec b\ \vec c\ {-\vec a}]$ $= -[\vec b\ \vec c\ \vec a]$ does.`,
        t`$[\vec b\ \vec c\ \vec a]$ is a cyclic shift, so it equals $[\vec a\ \vec b\ \vec c]$.`,
        t`Total: $[\vec a\ \vec b\ \vec c] - [\vec a\ \vec b\ \vec c] = 0$. The magnitudes never enter.`,
      ],
      answer: t`$0$`,
    },
    visualSpec: t`Set the coefficients in each slot with sliders; the surviving terms light up with their signs, and the multiple of $[\vec a\ \vec b\ \vec c]$ updates beside the determinant of the coefficients.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: t`Counts every surviving term as $+[\vec a\ \vec b\ \vec c]$, ignoring the order its vectors are in`,
      remediation: t`Order matters: a cyclic shift keeps the sign, but a swap flips it, so $[\vec b\ \vec a\ \vec c] = -[\vec a\ \vec b\ \vec c]$. Reorder each term before adding.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C13-M2",
      mistake: t`Thinks every reordering flips the sign, a cyclic shift such as $[\vec b\ \vec c\ \vec a]$ included`,
      remediation: t`A cyclic shift keeps the value: $[\vec b\ \vec c\ \vec a] = [\vec c\ \vec a\ \vec b] = [\vec a\ \vec b\ \vec c]$. Only a swap of two vectors flips the sign.`,
      fallback: { kind: "concept", id: "C10" },
    },
    {
      id: "C13-M3",
      mistake: t`Keeps only the term with $\vec a$ from the first slot, $\vec b$ from the second and $\vec c$ from the third`,
      remediation: t`Multiply out fully: every term whose three vectors are different survives, in whatever order, not just $[\vec a\ \vec b\ \vec c]$ as listed.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C13-M4",
      mistake: t`Takes the scalars out of the bracket by adding them, so $[2\vec b\ \ 3\vec a\ \ 4\vec c]$ becomes $9[\vec b\ \vec a\ \vec c]$`,
      remediation: t`Each scalar comes out as a factor, so they multiply: $[2\vec b\ \ 3\vec a\ \ 4\vec c] = 24[\vec b\ \vec a\ \vec c]$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C13-M5",
      mistake: t`Uses the determinant of the coefficients but gives its middle term a $+$ sign`,
      remediation: t`Expanding along row 1, the signs go $+$, $-$, $+$: the middle entry times its minor is subtracted.`,
      fallback: { kind: "ext", topic: "3 by 3 determinants" },
    },
    {
      id: "C13-M6",
      mistake: "Drops the minus signs of the coefficients when multiplying out",
      remediation: t`Keep each coefficient's sign: a $-\vec c$ in a slot brings a factor $-1$, so $[\vec a\ \vec b\ {-\vec c}] = -[\vec a\ \vec b\ \vec c]$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C13-M1 gives the key when no swapped order survives (as in $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a]$), C13-M2 when no cyclic shift survives beside the listed order, C13-M3 when only the listed order survives, C13-M6 when no coefficient is negative.`,
    "C13-M4 applies only to brackets of plain multiples. C13-M5 often lands on C13-M1's or C13-M2's value (C13-Q1: M1's; C13-Q6: M2's): never list it beside the one it matches.",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q4 ii)" },
      stem: t`For any vectors $\vec a$, $\vec b$, $\vec c$, $[\vec a + 2\vec b - \vec c\ \ \vec a - \vec b\ \ \vec b - \vec c]$ equals:`,
      verify: { kind: "value", inputs: { u: "(1, 2, -1)", v: "(1, -1, 0)", w: "(0, 1, -1)" } },
      options: [
        { key: "A", text: t`$2[\vec a\ \vec b\ \vec c]$`, correct: true, value: "2*T" },
        { key: "B", text: t`$-2[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M1", value: "-2*T" },
        { key: "C", text: t`$4[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M2", value: "4*T" },
        { key: "D", text: t`$[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M3", value: "T" },
      ],
      solution: {
        steps: [
          t`Keep terms with three different vectors: $[\vec a\ \ {-\vec b}\ \ {-\vec c}] = [\vec a\ \vec b\ \vec c]$.`,
          t`$[2\vec b\ \ \vec a\ \ {-\vec c}] = -2[\vec b\ \vec a\ \vec c]$ $= 2[\vec a\ \vec b\ \vec c]$, as a swap flips the sign.`,
          t`$[{-\vec c}\ \ \vec a\ \ \vec b] = -[\vec c\ \vec a\ \vec b]$ $= -[\vec a\ \vec b\ \vec c]$, a cyclic shift.`,
          t`Total: $1 + 2 - 1 = 2$, so the bracket is $2[\vec a\ \vec b\ \vec c]$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc II Q.47" },
      stem: t`For any vectors $\vec a$, $\vec b$, $\vec c$, $(\vec b + \vec c)\cdot[(\vec a + \vec b)\times(\vec a + \vec b + \vec c)]$ equals:`,
      verify: { kind: "value", inputs: { u: "(0, 1, 1)", v: "(1, 1, 0)", w: "(1, 1, 1)" } },
      options: [
        { key: "A", text: t`$-[\vec a\ \vec b\ \vec c]$`, correct: true, value: "-T" },
        { key: "B", text: t`$3[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M1", value: "3*T" },
        { key: "C", text: t`$-3[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M2", value: "-3*T" },
        { key: "D", text: t`$[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M5", value: "T" },
      ],
      solution: {
        steps: [
          t`The expression is $[\vec b + \vec c\ \ \vec a + \vec b\ \ \vec a + \vec b + \vec c]$.`,
          t`Terms with three different vectors: $[\vec b\ \vec a\ \vec c]$, $[\vec c\ \vec a\ \vec b]$ and $[\vec c\ \vec b\ \vec a]$.`,
          t`Two are swaps, $-1$ each, and $[\vec c\ \vec a\ \vec b]$ is cyclic, $+1$.`,
          t`Total: $-1 + 1 - 1 = -1$, so it equals $-[\vec a\ \vec b\ \vec c]$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc II Q.42" },
      stem: t`If $[\vec a\ \vec b\ \vec c] = 2$, then $(2\vec b)\cdot(3\vec a\times 4\vec c)$ is:`,
      verify: { kind: "value", inputs: { u: "(0, 2, 0)", v: "(3, 0, 0)", w: "(0, 0, 4)", t: "2" } },
      options: [
        { key: "A", text: t`$-18$`, correct: false, misconceptionId: "C13-M4", value: "-18" },
        { key: "B", text: t`$-48$`, correct: true, value: "-48" },
        { key: "C", text: t`$48$`, correct: false, misconceptionId: "C13-M1", value: "48" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C13-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`$(2\vec b)\cdot(3\vec a\times 4\vec c)$ $= [2\vec b\ \ 3\vec a\ \ 4\vec c]$.`,
          t`The scalars multiply: $2 \times 3 \times 4 = 24$, giving $24[\vec b\ \vec a\ \vec c]$.`,
          t`$[\vec b\ \vec a\ \vec c]$ swaps $\vec a$ and $\vec b$, so it is $-[\vec a\ \vec b\ \vec c] = -2$.`,
          t`The value is $24 \times (-2) = -48$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q4 i)" },
      stem: t`For any vectors $\vec a$, $\vec b$, $\vec c$, $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec a - \vec c]$ equals:`,
      verify: { kind: "value", inputs: { u: "(1, 1, 0)", v: "(0, 1, 1)", w: "(1, 0, -1)" } },
      options: [
        { key: "A", text: t`$-2[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M2", value: "-2*T" },
        { key: "B", text: t`$-[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M3", value: "-T" },
        { key: "C", text: t`$2[\vec a\ \vec b\ \vec c]$`, correct: false, misconceptionId: "C13-M6", value: "2*T" },
        { key: "D", text: t`$0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`Keep terms with three different vectors: $[\vec a\ \vec b\ {-\vec c}]$ and $[\vec b\ \vec c\ \vec a]$.`,
          t`$[\vec a\ \vec b\ {-\vec c}] = -[\vec a\ \vec b\ \vec c]$, and the cyclic $[\vec b\ \vec c\ \vec a] = [\vec a\ \vec b\ \vec c]$.`,
          t`Total: $-1 + 1 = 0$. Indeed $\vec a - \vec c$ $= (\vec a + \vec b) - (\vec b + \vec c)$, so the three are coplanar.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/Misc II Q.45" },
      stem: t`If $[\vec a\ \vec b\ \vec c] = 3$, then $[\vec a - \vec b\ \ \vec a + \vec b - \vec c\ \ \vec a + \vec b + \vec c]$ is:`,
      verify: { kind: "value", inputs: { u: "(1, -1, 0)", v: "(1, 1, -1)", w: "(1, 1, 1)", t: "3" } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C13-M2", value: "6" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C13-M3", value: "3" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C13-M6", value: "0" },
      ],
      solution: {
        steps: [
          t`Terms with three different vectors: $[\vec a\ \vec b\ \vec c]$, $[\vec a\ {-\vec c}\ \vec b]$, $[{-\vec b}\ \vec a\ \vec c]$, $[{-\vec b}\ {-\vec c}\ \vec a]$.`,
          t`$[\vec a\ {-\vec c}\ \vec b] = -[\vec a\ \vec c\ \vec b]$ $= [\vec a\ \vec b\ \vec c]$, a minus and a swap. So is $[{-\vec b}\ \vec a\ \vec c]$.`,
          t`$[{-\vec b}\ {-\vec c}\ \vec a] = [\vec b\ \vec c\ \vec a]$ $= [\vec a\ \vec b\ \vec c]$: two minus signs and a cyclic shift.`,
          t`So the bracket is $4[\vec a\ \vec b\ \vec c] = 4 \times 3 = 12$.`,
        ],
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/vectors-12/5.5 Ex.Q5" },
      stem: t`If $[\vec a + \vec b - \vec c\ \ \vec b - \vec c\ \ \vec a + \vec b] = 6$, then $[\vec a\ \vec b\ \vec c]$ is:`,
      verify: { kind: "value", inputs: { u: "(1, 1, -1)", v: "(0, 1, -1)", w: "(1, 1, 0)", g: "6" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C13-M1", value: "-2" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C13-M5", value: "2" },
        { key: "C", text: t`$-6$`, correct: false, misconceptionId: "C13-M6", value: "-6" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Terms with three different vectors: $[\vec a\ {-\vec c}\ \vec b]$, $[\vec b\ {-\vec c}\ \vec a]$, $[{-\vec c}\ \vec b\ \vec a]$.`,
          t`$[\vec a\ {-\vec c}\ \vec b] = -[\vec a\ \vec c\ \vec b]$ $= [\vec a\ \vec b\ \vec c]$, and $[{-\vec c}\ \vec b\ \vec a] = [\vec a\ \vec b\ \vec c]$ too (a swap each).`,
          t`$[\vec b\ {-\vec c}\ \vec a] = -[\vec b\ \vec c\ \vec a]$ $= -[\vec a\ \vec b\ \vec c]$ (cyclic).`,
          t`So the bracket is $(1 + 1 - 1)[\vec a\ \vec b\ \vec c] = [\vec a\ \vec b\ \vec c]$, and $[\vec a\ \vec b\ \vec c] = 6$.`,
        ],
      },
    },
  ],
};
