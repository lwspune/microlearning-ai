import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`If $\frac{a}{b} = \frac{3}{2}$, what is the value of $\frac{a + b}{b}$? You are not told $a$ or $b$.`,
    reveal: t`Add $1$ to both sides: $\frac{a}{b} + 1 = \frac{3}{2} + 1$, so $\frac{a + b}{b} = \frac{5}{2}$. Every pair $a$, $b$ in the ratio $3 : 2$ gives $\frac{5}{2}$.`,
  },
  explanation: {
    intuition: [
      t`$\frac{a}{b} = \frac{c}{d}$ says two ratios are **equal ratios**: they are the same number.`,
      t`Do the same thing to both sides, and the two sides stay equal.`,
      t`Turn both upside down, add $1$ to both, or subtract $1$ from both.`,
      t`Each of these moves has a name: invertendo, alternendo, componendo, dividendo.`,
      t`With them you find a ratio like $\frac{a + b}{a - b}$ without knowing $a$ or $b$.`,
    ],
    formal: [
      {
        title: "Invertendo and alternendo",
        points: [
          t`In $\frac{a}{b} = \frac{c}{d}$, the numbers $a$, $b$, $c$, $d$ are all non-zero.`,
          t`**Invertendo**: turn both ratios upside down, $\frac{b}{a} = \frac{d}{c}$.`,
          t`**Alternendo**: swap $b$ and $c$, $\frac{a}{c} = \frac{b}{d}$.`,
          t`Example: $\frac{a}{b} = \frac{9}{4}$ gives $\frac{b}{a} = \frac{4}{9}$ by invertendo.`,
          t`By alternendo it gives $\frac{a}{9} = \frac{b}{4}$, so $a$ stays with $9$ and $b$ with $4$.`,
        ],
      },
      {
        title: "Componendo and dividendo",
        points: [
          t`**Componendo**: add $1$ to both sides of $\frac{a}{b} = \frac{c}{d}$.`,
          t`It gives $\frac{a + b}{b} = \frac{c + d}{d}$.`,
          t`**Dividendo**: subtract $1$ from both sides.`,
          t`It gives $\frac{a - b}{b} = \frac{c - d}{d}$.`,
          t`Example: $\frac{a}{b} = \frac{9}{4}$ gives $\frac{a + b}{b} = \frac{13}{4}$.`,
          t`It also gives $\frac{a - b}{b} = \frac{5}{4}$.`,
        ],
      },
      {
        title: "Componendo-dividendo",
        points: [
          t`Divide the componendo result by the dividendo result. The $b$ and $d$ cancel.`,
          t`$\frac{a + b}{a - b} = \frac{c + d}{c - d}$, when $a \ne b$ and $c \ne d$.`,
          t`Example: $\frac{a}{b} = \frac{9}{4}$ gives $\frac{a + b}{a - b}$ $= \frac{9 + 4}{9 - 4} = \frac{13}{5}$.`,
          t`It works backwards too: $\frac{a + b}{a - b} = \frac{c}{d}$ gives $\frac{a}{b} = \frac{c + d}{c - d}$.`,
        ],
      },
      {
        title: "First make the right pair",
        points: [
          t`To find $\frac{2a + 5b}{2a - 5b}$, the pair you need is $2a$ and $5b$.`,
          t`So first find $\frac{2a}{5b}$: multiply $\frac{a}{b}$ by $\frac{2}{5}$.`,
          t`For $a^2$ and $b^2$, first square: $\frac{a}{b} = \frac{9}{4}$ gives $\frac{a^2}{b^2} = \frac{81}{16}$.`,
          t`Then use componendo-dividendo on that pair.`,
          t`If the asked ratio is upside down, finish with invertendo.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $5x = 4y$, find the value of the ratio $\frac{3x^2 + y^2}{3x^2 - y^2}$.`,
      steps: [
        t`$5x = 4y$, so $\frac{x}{y} = \frac{4}{5}$.`,
        t`Square both sides: $\frac{x^2}{y^2} = \frac{16}{25}$.`,
        t`The pair we need is $3x^2$ and $y^2$: $\frac{3x^2}{y^2} = \frac{48}{25}$.`,
        t`Componendo-dividendo: $\frac{3x^2 + y^2}{3x^2 - y^2}$ $= \frac{48 + 25}{48 - 25}$.`,
        t`So $\frac{3x^2 + y^2}{3x^2 - y^2} = \frac{73}{23}$.`,
      ],
      answer: t`$\frac{3x^2 + y^2}{3x^2 - y^2} = \frac{73}{23}$`,
    },
    visualSpec: t`Two bars in the ratio a : b; dragging a length b onto the first bar shows a + b against b (componendo), and cutting it off shows a − b (dividendo).`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Ignores the coefficients: applies componendo or componendo-dividendo to a/b itself, so (5a + 3b)/(5a - 3b) = (7 + 3)/(7 - 3)",
      remediation: t`Componendo-dividendo needs the exact pair in the asked ratio. For $5a + 3b$, first find $\frac{5a}{3b}$, then add and subtract.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Treats a^2/b^2 as if it were a/b: forgets to square (or, going back, forgets to take the square root)",
      remediation: t`If $\frac{a}{b} = \frac{7}{3}$, then $\frac{a^2}{b^2} = \frac{49}{9}$. Raise the ratio to the power first; going back, take the root at the end.`,
      fallback: { kind: "ext", topic: "powers of a fraction (Std VIII)" },
    },
    {
      id: "C05-M3",
      mistake: "Gives the reciprocal: misses the final invertendo, or does it twice",
      remediation: "Check which way up the asked ratio is. If your result is the other way up, use invertendo once.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Misreads alternendo: from a/b = 7/3 writes a/3 = b/7, so takes a = 3k and b = 7k",
      remediation: t`Alternendo keeps $a$ with $7$: $\frac{a}{b} = \frac{7}{3}$ gives $\frac{a}{7} = \frac{b}{3}$, so $a = 7k$ and $b = 3k$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M5",
      mistake: "Turns componendo-dividendo upside down: from (a + b)/(a - b) = c/d writes a/b = (c - d)/(c + d)",
      remediation: t`Going back, the sum goes on top: $\frac{a + b}{a - b} = \frac{c}{d}$ gives $\frac{a}{b} = \frac{c + d}{c - d}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M1 gives the key when every coefficient is 1 (as in $\frac{a^3 + b^3}{b^3}$); draw items with other coefficients to catch it. C05-M2 needs a squared or cubed ratio. C05-M4 applies only when a/b is given; C05-M5 only when a componendo-dividendo form is given and a/b is asked.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.3 Q1(i)" },
      stem: t`If $\dfrac{a}{b} = \dfrac{7}{3}$, find the value of the ratio $\dfrac{5a + 3b}{5a - 3b}$.`,
      verify: { kind: "value", inputs: { t: "7/3", p: "5", q: "3", r: "5", s: "-3", n: "1" }, params: { kind: "fwd" } },
      options: [
        { key: "A", text: t`$-6$`, correct: false, misconceptionId: "C05-M4", value: "-6" },
        { key: "B", text: t`$\frac{22}{13}$`, correct: true, value: "22/13" },
        { key: "C", text: t`$\frac{5}{2}$`, correct: false, misconceptionId: "C05-M1", value: "5/2" },
        { key: "D", text: t`$\frac{13}{22}$`, correct: false, misconceptionId: "C05-M3", value: "13/22" },
      ],
      solution: {
        steps: [
          t`The pair we need is $5a$ and $3b$. Multiply $\frac{a}{b} = \frac{7}{3}$ by $\frac{5}{3}$: $\frac{5a}{3b} = \frac{35}{9}$.`,
          t`Componendo-dividendo: $\frac{5a + 3b}{5a - 3b}$ $= \frac{35 + 9}{35 - 9} = \frac{44}{26}$.`,
          t`So the ratio is $\frac{22}{13}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.3 Q1(ii)" },
      stem: t`If $\dfrac{a}{b} = \dfrac{7}{3}$, find the value of the ratio $\dfrac{2a^2 + 3b^2}{2a^2 - 3b^2}$.`,
      verify: { kind: "value", inputs: { t: "7/3", p: "2", q: "3", r: "2", s: "-3", n: "2" }, params: { kind: "fwd" } },
      options: [
        { key: "A", text: t`$\frac{29}{20}$`, correct: false, misconceptionId: "C05-M1", value: "29/20" },
        { key: "B", text: t`$\frac{23}{5}$`, correct: false, misconceptionId: "C05-M2", value: "23/5" },
        { key: "C", text: t`$-\frac{55}{43}$`, correct: false, misconceptionId: "C05-M4", value: "-55/43" },
        { key: "D", text: t`$\frac{125}{71}$`, correct: true, value: "125/71" },
      ],
      solution: {
        steps: [
          t`Square: $\frac{a^2}{b^2} = \frac{49}{9}$.`,
          t`Multiply by $\frac{2}{3}$: $\frac{2a^2}{3b^2} = \frac{98}{27}$.`,
          t`Componendo-dividendo: $\frac{2a^2 + 3b^2}{2a^2 - 3b^2}$ $= \frac{98 + 27}{98 - 27} = \frac{125}{71}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q8(iii)" },
      stem: t`If $\dfrac{a}{b} = \dfrac{2}{3}$, find the value of $\dfrac{a^3 + b^3}{b^3}$.`,
      verify: { kind: "value", inputs: { t: "2/3", p: "1", q: "1", r: "0", s: "1", n: "3" }, params: { kind: "fwd" } },
      options: [
        { key: "A", text: t`$\frac{35}{27}$`, correct: true, value: "35/27" },
        { key: "B", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C05-M2", value: "5/3" },
        { key: "C", text: t`$\frac{27}{35}$`, correct: false, misconceptionId: "C05-M3", value: "27/35" },
        { key: "D", text: t`$\frac{35}{8}$`, correct: false, misconceptionId: "C05-M4", value: "35/8" },
      ],
      solution: {
        steps: [
          t`Cube: $\frac{a^3}{b^3} = \frac{8}{27}$.`,
          t`Componendo: $\frac{a^3 + b^3}{b^3} = \frac{8 + 27}{27}$.`,
          t`So the value is $\frac{35}{27}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q8(i)" },
      stem: t`If $\dfrac{a}{b} = \dfrac{2}{3}$, find the value of $\dfrac{4a + 3b}{3b}$.`,
      verify: { kind: "value", inputs: { t: "2/3", p: "4", q: "3", r: "0", s: "3", n: "1" }, params: { kind: "fwd" } },
      options: [
        { key: "A", text: t`$\frac{9}{17}$`, correct: false, misconceptionId: "C05-M3", value: "9/17" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C05-M4", value: "3" },
        { key: "C", text: t`$\frac{17}{9}$`, correct: true, value: "17/9" },
        { key: "D", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C05-M1", value: "5/3" },
      ],
      solution: {
        steps: [
          t`The pair we need is $4a$ and $3b$: $\frac{4a}{3b} = \frac{4 \times 2}{3 \times 3} = \frac{8}{9}$.`,
          t`Componendo: $\frac{4a + 3b}{3b} = \frac{8 + 9}{9}$.`,
          t`So the value is $\frac{17}{9}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.3 Q2(i)" },
      stem: t`If $\dfrac{15a^2 + 4b^2}{15a^2 - 4b^2} = \dfrac{47}{7}$, and $a$ and $b$ are positive, find the value of $\dfrac{a}{b}$.`,
      verify: { kind: "value", inputs: { p: "15", q: "4", c: "47", d: "7", n: "2" }, params: { kind: "rev" } },
      options: [
        { key: "A", text: t`$\frac{3}{5}$`, correct: true, value: "3/5" },
        { key: "B", text: t`$\frac{9}{25}$`, correct: false, misconceptionId: "C05-M2", value: "9/25" },
        { key: "C", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C05-M3", value: "5/3" },
        { key: "D", text: t`$\frac{4}{9}$`, correct: false, misconceptionId: "C05-M5", value: "4/9" },
      ],
      solution: {
        steps: [
          t`Componendo-dividendo: $\frac{15a^2}{4b^2} = \frac{47 + 7}{47 - 7}$ $= \frac{54}{40} = \frac{27}{20}$.`,
          t`Multiply by $\frac{4}{15}$: $\frac{a^2}{b^2} = \frac{108}{300} = \frac{9}{25}$.`,
          t`$a$ and $b$ are positive, so take the square root: $\frac{a}{b} = \frac{3}{5}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.3 Q3" },
      stem: t`If $\dfrac{3a + 7b}{3a - 7b} = \dfrac{4}{3}$, find the value of $\dfrac{a}{b}$.`,
      verify: { kind: "value", inputs: { p: "3", q: "7", c: "4", d: "3", n: "1" }, params: { kind: "rev" } },
      options: [
        { key: "A", text: t`$\frac{49}{3}$`, correct: true, value: "49/3" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C05-M1", value: "7" },
        { key: "C", text: t`$\frac{3}{49}$`, correct: false, misconceptionId: "C05-M3", value: "3/49" },
        { key: "D", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C05-M5", value: "1/3" },
      ],
      solution: {
        steps: [
          t`Componendo-dividendo: $\frac{3a}{7b} = \frac{4 + 3}{4 - 3} = \frac{7}{1}$.`,
          t`So $3a = 49b$.`,
          t`Therefore $\frac{a}{b} = \frac{49}{3}$.`,
        ],
      },
    },
  ],
};
