import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Put $x = 3$ in $\dfrac{x^2 - 9}{x - 3}$ and you get $\frac{0}{0}$. Yet at $x = 2.9$ it is $5.9$, and at $x = 3.01$ it is $6.01$. **What is it heading for, and why?**`,
    reveal: t`It heads for $6$. Since $x^2 - 9 = (x - 3)(x + 3)$, the fraction is just $x + 3$ whenever $x \ne 3$. The $\frac{0}{0}$ came from the factor $(x - 3)$ hiding in both the top and the bottom.`,
  },
  explanation: {
    intuition: [
      t`Substituting $x = 3$ in $\frac{x^2 - 9}{x - 3}$ gives $\frac{0}{0}$, which is not a number.`,
      t`$\frac{0}{0}$ is an **indeterminate form**: it does not tell you the limit yet.`,
      t`A polynomial is $0$ at $x = 3$ exactly when $(x - 3)$ is a factor of it.`,
      t`So the top and the bottom both contain $(x - 3)$: $x^2 - 9 = (x - 3)(x + 3)$.`,
      t`Near $3$ we have $x \ne 3$, so $x - 3 \ne 0$ and we may cancel it: the fraction is $x + 3$.`,
      t`Now substitute: the limit is $3 + 3 = 6$.`,
    ],
    formal: [
      {
        title: "Why the factor is there",
        points: [
          t`**Factor theorem:** if a polynomial $p(x)$ has $p(a) = 0$, then $(x - a)$ is a factor of $p(x)$.`,
          t`So $\frac{0}{0}$ at $x = a$ means $(x - a)$ divides both the numerator and the denominator.`,
          t`As $x \to a$, $x$ stays different from $a$, so $x - a \ne 0$ and cancelling it is allowed.`,
          t`The cancelled fraction equals the original at every $x$ near $a$, so both have the same limit.`,
          t`**The method:** factorise, cancel $(x - a)$, then substitute $x = a$.`,
        ],
      },
      {
        title: "Finding the other factor",
        points: [
          t`$a^2 - b^2 = (a - b)(a + b)$, and a quadratic with root $a$ splits as $(x - a)(\ldots)$.`,
          t`$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.`,
          t`$a^3 + b^3$ $= (a + b)(a^2 - ab + b^2)$: the middle sign is opposite to the first bracket's.`,
          t`For any other cubic, divide by $(x - a)$ with **synthetic division**, which uses only the coefficients.`,
          t`For $x^3 - 2x^2 + 4x - 3$ and $a = 1$: bring down $1$, then multiply by $1$ and add, column by column.`,
          t`The coefficients $1, -2, 4, -3$ give $1, -1, 3$, remainder $0$: so it is $(x - 1)(x^2 - x + 3)$.`,
        ],
      },
      {
        title: "Cancel again, or stop",
        points: [
          t`After one cancellation you may still get $\frac{0}{0}$: then $(x - a)$ is a **repeated factor**, one that appears more than once.`,
          t`In $\frac{5y^3 + 8y^2}{3y^4 - 16y^2}$ as $y \to 0$, the top is $y^2(5y + 8)$.`,
          t`The bottom is $y^2(3y^2 - 16)$: cancel all of $y^2$, not just one $y$.`,
          t`Then substitute: the limit is $\frac{8}{-16} = -\frac{1}{2}$.`,
          t`If the bottom is still $0$ but the top is not, the fraction grows without bound: no limit.`,
        ],
      },
      {
        title: "A sum that blows up",
        points: [
          t`In $\frac{1}{x - 1} - \frac{2}{x^2 - 1}$, each term grows without bound as $x \to 1$.`,
          t`Infinity minus infinity, like $\frac{0}{0}$, is indeterminate: it is not $0$.`,
          t`Combine over the common denominator $(x - 1)(x + 1)$.`,
          t`The numerator is $(x + 1) - 2 = x - 1$, so the sum is $\frac{x - 1}{(x - 1)(x + 1)}$.`,
          t`Cancel $(x - 1)$: the sum is $\frac{1}{x + 1}$, so the limit is $\frac{1}{2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\lim_{z \to 3} \dfrac{z(2z - 3) - 9}{z^2 - 4z + 3}$.`,
      steps: [
        t`Substitute $z = 3$: the top is $3 \times 3 - 9 = 0$ and the bottom is $9 - 12 + 3 = 0$. So $(z - 3)$ divides both.`,
        t`Top: $2z^2 - 3z - 9 = (z - 3)(2z + 3)$. Bottom: $z^2 - 4z + 3 = (z - 3)(z - 1)$.`,
        t`As $z \to 3$, $z \ne 3$: cancel $(z - 3)$ to get $\frac{2z + 3}{z - 1}$.`,
        t`Substitute $z = 3$: $\frac{6 + 3}{3 - 1} = \frac{9}{2}$.`,
      ],
      answer: t`$\frac{9}{2}$`,
    },
    figure: {
      alt: "The graph of y = (x² − 9)/(x − 3): the straight line y = x + 3 with a hollow dot at (3, 6), where the fraction has no value. Then the hollow dot is labelled: the limit is 6.",
      axes: "xy",
      view: { x: [-1, 6], y: [-1, 9] },
      elements: [
        { kind: "curve", points: [[-1, 2], [-0.919, 2.081], [-0.838, 2.163], [-0.756, 2.244], [-0.675, 2.325], [-0.594, 2.406], [-0.512, 2.487], [-0.431, 2.569], [-0.35, 2.65], [-0.269, 2.731], [-0.188, 2.812], [-0.106, 2.894], [-0.025, 2.975], [0.056, 3.056], [0.137, 3.138], [0.219, 3.219], [0.3, 3.3], [0.381, 3.381], [0.462, 3.462], [0.544, 3.544], [0.625, 3.625], [0.706, 3.706], [0.788, 3.788], [0.869, 3.869], [0.95, 3.95], [1.031, 4.031], [1.112, 4.112], [1.194, 4.194], [1.275, 4.275], [1.356, 4.356], [1.438, 4.438], [1.519, 4.519], [1.6, 4.6], [1.681, 4.681], [1.763, 4.763], [1.844, 4.844], [1.925, 4.925], [2.006, 5.006], [2.087, 5.088], [2.169, 5.169], [2.25, 5.25], [2.331, 5.331], [2.413, 5.412], [2.494, 5.494], [2.575, 5.575], [2.656, 5.656], [2.737, 5.737], [2.819, 5.819], [2.9, 5.9], [2.981, 5.981], [3.062, 6.062], [3.144, 6.144], [3.225, 6.225], [3.306, 6.306], [3.388, 6.388], [3.469, 6.469], [3.55, 6.55], [3.631, 6.631], [3.713, 6.713], [3.794, 6.794], [3.875, 6.875], [3.956, 6.956], [4.037, 7.037], [4.119, 7.119], [4.2, 7.2], [4.281, 7.281], [4.362, 7.362], [4.444, 7.444], [4.525, 7.525], [4.606, 7.606], [4.688, 7.688], [4.769, 7.769], [4.85, 7.85], [4.931, 7.931], [5.013, 8.012], [5.094, 8.094], [5.175, 8.175], [5.256, 8.256], [5.338, 8.338], [5.419, 8.419], [5.5, 8.5]], step: 5 },
        { kind: "point", at: [3, 6], hollow: true, step: 5 },
        { kind: "label", at: [3, 6], label: "y = x + 3, x ≠ 3", labelAt: "nw", tone: "muted", step: 5 },
        { kind: "segment", from: [3, 0], to: [3, 6], dashed: true, tone: "muted", step: 6 },
        { kind: "label", at: [3, 6], label: "limit 6", labelAt: "se", tone: "good", step: 6 },
      ],
    },
    visualSpec: t`Drag $x$ towards $a$ on the graph of the fraction: a hollow dot sits at $x = a$, and a readout shows the fraction's value closing in on the cancelled form's value at $a$.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Reads $\frac{0}{0}$ as $1$, as if a number divided by itself`,
      remediation: t`$\frac{0}{0}$ is not a number, so it is not $1$. It tells you $(x - a)$ divides the top and the bottom: cancel it, then substitute again.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Reads $\frac{0}{0}$ as $0$ because the numerator is $0$`,
      remediation: t`A zero numerator gives $0$ only when the denominator is not $0$. With $\frac{0}{0}$, cancel the common factor $(x - a)$ first, then substitute.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Loses a minus sign after cancelling: takes a negative factor, such as $(1 - 2)$ or the $-2$ in $-2(x + 2)$, as positive`,
      remediation: t`After cancelling, substitute into each remaining factor with its sign: $(x - 2)$ at $x = 1$ is $-1$, and $-2(x + 2)$ keeps its $-2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Thinks the limit does not exist because the expression is undefined at $x = a$`,
      remediation: t`A limit uses the values of $x$ near $a$, never $x = a$ itself. $\frac{0}{0}$ only means more work: cancel $(x - a)$, and the limit usually appears.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M5",
      mistake: t`Takes infinity minus infinity as $0$, finding each term's limit separately`,
      remediation: t`The rule $\lim (f - g) = \lim f - \lim g$ needs both limits to exist. When each term blows up, combine into one fraction first, then cancel $(x - a)$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M6",
      mistake: t`Factorises $a^3 - b^3$ as $(a - b)(a^2 - ab + b^2)$, with the middle sign flipped`,
      remediation: t`$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ and $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$: the middle sign is opposite to the sign in the first bracket.`,
      fallback: { kind: "ext", topic: "factorising sums and differences of cubes" },
    },
  ],
  engineNotes: [
    "C03-M3 is a sign slip, modelled as the negative of the key; tag it only where a negative factor is cancelled or substituted (Q2, Q4, Q5, Q6). Its model gives no distinct answer when the limit is 0.",
    "C03-M1 and C03-M2 apply only to a single 0/0 fraction (params.form 0/0); C03-M5 only to a sum whose terms blow up (form inf-inf).",
    "C03-M4 gives the key when the limit really does not exist (a repeated factor left in the denominator); draw from items whose limit exists.",
    "Q4 (Ex 7.2 III Q2): the book prints the answer -2; the limit is +2 (the slip C03-M3 models).",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.2 I Q1" },
      stem: t`$\lim_{z \to 2} \dfrac{z^2 - 5z + 6}{z^2 - 4}$ equals:`,
      verify: { kind: "value", inputs: { a: "2" }, params: { f: "(x**2 - 5*x + 6)/(x**2 - 4)", form: "0/0" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "B", text: t`The limit does not exist`, correct: false, misconceptionId: "C03-M4", value: "dne" },
        { key: "C", text: t`$- \frac{1}{4}$`, correct: true, value: "-1/4" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C03-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`At $z = 2$: $4 - 10 + 6 = 0$ and $4 - 4 = 0$, so $(z - 2)$ divides both.`,
          t`$z^2 - 5z + 6 = (z - 2)(z - 3)$ and $z^2 - 4 = (z - 2)(z + 2)$.`,
          t`Cancel $(z - 2)$ and substitute: $\frac{2 - 3}{2 + 2} = -\frac{1}{4}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.2 I Q4" },
      stem: t`$\lim_{x \to -2} \dfrac{-2x - 4}{x^3 + 2x^2}$ equals:`,
      verify: { kind: "value", inputs: { a: "-2" }, params: { f: "(-2*x - 4)/(x**3 + 2*x**2)", form: "0/0" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M1", value: "1" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "C", text: t`$- \frac{1}{2}$`, correct: true, value: "-1/2" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M3", value: "1/2" },
      ],
      solution: {
        steps: [
          t`At $x = -2$: $4 - 4 = 0$ and $-8 + 8 = 0$, so $(x + 2)$ divides both.`,
          t`$-2x - 4 = -2(x + 2)$ and $x^3 + 2x^2 = x^2(x + 2)$.`,
          t`Cancel $(x + 2)$, keeping the $-2$: $\frac{-2}{x^2}$ $= \frac{-2}{4} = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.2 II Q1" },
      stem: t`$\lim_{u \to 1} \dfrac{u^4 - 1}{u^3 - 1}$ equals:`,
      verify: { kind: "value", inputs: { a: "1" }, params: { f: "(x**4 - 1)/(x**3 - 1)", form: "0/0" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C03-M6", value: "4" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C03-M2", value: "0" },
        { key: "C", text: t`The limit does not exist`, correct: false, misconceptionId: "C03-M4", value: "dne" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: true, value: "4/3" },
      ],
      solution: {
        steps: [
          t`At $u = 1$ the top and the bottom are both $0$, so $(u - 1)$ divides both.`,
          t`$u^4 - 1 = (u - 1)(u + 1)(u^2 + 1)$.`,
          t`$u^3 - 1 = (u - 1)(u^2 + u + 1)$.`,
          t`Cancel $(u - 1)$ and substitute: $\frac{2 \times 2}{1 + 1 + 1} = \frac{4}{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.2 III Q2" },
      stem: t`$\lim_{x \to 1} \left[\dfrac{x - 2}{x^2 - x} - \dfrac{1}{x^3 - 3x^2 + 2x}\right]$ equals:`,
      verify: { kind: "value", inputs: { a: "1" }, params: { f: "(x - 2)/(x**2 - x) - 1/(x**3 - 3*x**2 + 2*x)", form: "inf-inf" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C03-M5", value: "0" },
        { key: "B", text: t`The limit does not exist`, correct: false, misconceptionId: "C03-M4", value: "dne" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C03-M3", value: "-2" },
      ],
      solution: {
        steps: [
          t`$x^2 - x = x(x - 1)$ and $x^3 - 3x^2 + 2x$ $= x(x - 1)(x - 2)$: both terms blow up at $x = 1$.`,
          t`Over the common denominator: $\frac{(x - 2)^2 - 1}{x(x - 1)(x - 2)}$.`,
          t`$(x - 2)^2 - 1 = (x - 1)(x - 3)$; cancel $(x - 1)$: $\frac{x - 3}{x(x - 2)}$.`,
          t`At $x = 1$: $\frac{1 - 3}{1 \times (1 - 2)}$ $= \frac{-2}{-1} = 2$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.2 II Q5" },
      stem: t`$\lim_{x \to \sqrt{2}} \dfrac{x^2 + \sqrt{2}x - 4}{x^2 - 3\sqrt{2}x + 4}$ equals:`,
      verify: { kind: "value", inputs: { a: "sqrt(2)" }, params: { f: "(x**2 + sqrt(2)*x - 4)/(x**2 - 3*sqrt(2)*x + 4)", form: "0/0" } },
      options: [
        { key: "A", text: t`$-3$`, correct: true, value: "-3" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C03-M3", value: "3" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C03-M1", value: "1" },
        { key: "D", text: t`The limit does not exist`, correct: false, misconceptionId: "C03-M4", value: "dne" },
      ],
      solution: {
        steps: [
          t`At $x = \sqrt{2}$: $2 + 2 - 4 = 0$ and $2 - 6 + 4 = 0$, so $(x - \sqrt{2})$ divides both.`,
          t`Top: $(x - \sqrt{2})(x + 2\sqrt{2})$. Bottom: $(x - \sqrt{2})(x - 2\sqrt{2})$.`,
          t`Cancel and substitute: $\frac{\sqrt{2} + 2\sqrt{2}}{\sqrt{2} - 2\sqrt{2}}$ $= \frac{3\sqrt{2}}{-\sqrt{2}} = -3$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.2 III Q3" },
      stem: t`$\lim_{x \to 1} \dfrac{x^4 - 3x^2 + 2}{x^3 - 5x^2 + 3x + 1}$ equals:`,
      verify: { kind: "value", inputs: { a: "1" }, params: { f: "(x**4 - 3*x**2 + 2)/(x**3 - 5*x**2 + 3*x + 1)", form: "0/0" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: true, value: "1/2" },
        { key: "B", text: t`$- \frac{1}{2}$`, correct: false, misconceptionId: "C03-M3", value: "-1/2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C03-M1", value: "1" },
        { key: "D", text: t`The limit does not exist`, correct: false, misconceptionId: "C03-M4", value: "dne" },
      ],
      solution: {
        steps: [
          t`At $x = 1$: $1 - 3 + 2 = 0$ and $1 - 5 + 3 + 1 = 0$, so $(x - 1)$ divides both.`,
          t`Top: $(x^2 - 1)(x^2 - 2)$ $= (x - 1)(x + 1)(x^2 - 2)$.`,
          t`Bottom, by synthetic division: $(x - 1)(x^2 - 4x - 1)$.`,
          t`Cancel $(x - 1)$ and substitute: $\frac{2 \times (-1)}{1 - 4 - 1}$ $= \frac{-2}{-4} = \frac{1}{2}$.`,
        ],
      },
    },
  ],
};
