import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`As $x$ gets close to $2$, what does $\frac{x^2 + 1}{x + 3}$ get close to? You could make a table for $x = 1.9, 1.99, 2.01, \ldots$ **Is there a shortcut?**`,
    reveal: t`Yes: substitute $x = 2$. The top tends to $5$ and the bottom to $5$, so the fraction tends to $\frac{5}{5} = 1$. The table agrees: $x = 1.99$ gives about $0.994$, and $x = 2.01$ about $1.006$.`,
  },
  explanation: {
    intuition: [
      t`Recall: $\lim_{x \to a} f(x)$ is the value $f(x)$ gets close to as $x$ gets close to $a$.`,
      t`If $x$ is close to $3$, then $x^2$ is close to $9$ and $x + 1$ is close to $4$.`,
      t`So $x^2 + (x + 1)$ is close to $13$, and $x^2(x + 1)$ is close to $36$.`,
      t`Limits pass through $+$, $-$, $\times$ and $\div$: combine the parts' limits the same way.`,
      t`For such expressions the limit is just the value at $a$: **substitute** $x = a$.`,
      t`The one catch: a denominator that tends to $0$. Then the quotient rule can't be used.`,
    ],
    formal: [
      {
        title: "The algebra of limits",
        points: [
          t`Let $\lim_{x \to a} f(x) = l$ and $\lim_{x \to a} g(x) = m$, both finite numbers.`,
          t`**Sum and difference:** $\lim [f(x) \pm g(x)] = l \pm m$.`,
          t`**Constant multiple:** $\lim [k\,f(x)] = kl$, for any constant $k$.`,
          t`**Product:** $\lim [f(x)\,g(x)] = lm$.`,
          t`**Quotient:** $\lim \frac{f(x)}{g(x)} = \frac{l}{m}$, provided $m \ne 0$.`,
          t`**Powers and roots:** $\lim [f(x)]^n = l^n$, and $\lim \sqrt{f(x)} = \sqrt{l}$ when $l \ge 0$.`,
        ],
      },
      {
        title: "Direct substitution",
        points: [
          t`A **polynomial** is built from $x$ and constants using $+$, $-$ and $\times$, like $x^3 - 2x + 5$.`,
          t`By the rules, $\lim_{x \to a} p(x) = p(a)$ for every polynomial $p(x)$.`,
          t`The same holds for a quotient of polynomials whose denominator is not $0$ at $a$.`,
          t`Roots too: $\lim_{x \to 4} \sqrt{x + 5} = \sqrt{9} = 3$.`,
          t`So **substitute first**: if you get a number, that number is the limit.`,
          t`If you get $\frac{0}{0}$, substitution tells you nothing yet: simplify first.`,
        ],
      },
      {
        title: "The value at a doesn't count",
        points: [
          t`Take $f(x) = x + 1$ for $x \ne 2$, with $f(2) = 1$ defined separately.`,
          t`Near $x = 2$ the graph follows $y = x + 1$, heading for the height $3$.`,
          t`So $\lim_{x \to 2} f(x) = 3$, even though $f(2) = 1$.`,
          t`Substitute into the formula that holds **near** $a$, never the separate value at $a$.`,
        ],
        figure: {
          alt: "The line y = x + 1 with a hollow point at (2, 3), and a filled point below it at (2, 1), the separate value f(2) = 1. The hollow point is labelled as the limit, 3.",
          axes: "xy",
          view: { x: [-1.5, 4.5], y: [-1, 5] },
          elements: [
            { kind: "curve", points: [[-1.5, -0.5], [-1.425, -0.425], [-1.35, -0.35], [-1.275, -0.275], [-1.2, -0.2], [-1.125, -0.125], [-1.05, -0.05], [-0.975, 0.025], [-0.9, 0.1], [-0.825, 0.175], [-0.75, 0.25], [-0.675, 0.325], [-0.6, 0.4], [-0.525, 0.475], [-0.45, 0.55], [-0.375, 0.625], [-0.3, 0.7], [-0.225, 0.775], [-0.15, 0.85], [-0.075, 0.925], [0, 1], [0.075, 1.075], [0.15, 1.15], [0.225, 1.225], [0.3, 1.3], [0.375, 1.375], [0.45, 1.45], [0.525, 1.525], [0.6, 1.6], [0.675, 1.675], [0.75, 1.75], [0.825, 1.825], [0.9, 1.9], [0.975, 1.975], [1.05, 2.05], [1.125, 2.125], [1.2, 2.2], [1.275, 2.275], [1.35, 2.35], [1.425, 2.425], [1.5, 2.5], [1.575, 2.575], [1.65, 2.65], [1.725, 2.725], [1.8, 2.8], [1.875, 2.875], [1.95, 2.95], [2.025, 3.025], [2.1, 3.1], [2.175, 3.175], [2.25, 3.25], [2.325, 3.325], [2.4, 3.4], [2.475, 3.475], [2.55, 3.55], [2.625, 3.625], [2.7, 3.7], [2.775, 3.775], [2.85, 3.85], [2.925, 3.925], [3, 4], [3.075, 4.075], [3.15, 4.15], [3.225, 4.225], [3.3, 4.3], [3.375, 4.375], [3.45, 4.45], [3.525, 4.525], [3.6, 4.6], [3.675, 4.675], [3.75, 4.75], [3.825, 4.825], [3.9, 4.9], [3.975, 4.975], [4.05, 5.05], [4.125, 5.125], [4.2, 5.2], [4.275, 5.275], [4.35, 5.35], [4.425, 5.425], [4.5, 5.5]], step: 1 },
            { kind: "point", at: [2, 3], hollow: true, step: 1 },
            { kind: "point", at: [2, 1], label: "f(2) = 1", labelAt: "e", tone: "bad", step: 1 },
            { kind: "label", at: [2, 3], label: "limit 3", labelAt: "se", tone: "good", step: 2 },
          ],
        },
      },
      {
        title: "Substitute with care",
        points: [
          t`Put a negative value in brackets: at $x = -2$, $x^3 = (-2)^3 = -8$.`,
          t`A square is not a double: at $x = -3$, $x^2 = 9$, but $2x = -6$.`,
          t`Roots don't split: $\sqrt{16} + \sqrt{9} = 7$, but $\sqrt{16 + 9} = 5$.`,
          t`A product's limit is the **product** of the limits, not their sum.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\lim_{x \to 3} \frac{\sqrt{6 + x} - \sqrt{7 - x}}{x}$.`,
      steps: [
        t`The denominator tends to $3$, not $0$, so the quotient rule applies.`,
        t`Numerator, one root at a time: $\sqrt{6 + 3} - \sqrt{7 - 3}$ $= \sqrt{9} - \sqrt{4} = 3 - 2 = 1$.`,
        t`Don't combine the roots: $\sqrt{9 - 4} = \sqrt{5}$ is a different number.`,
        t`The limit is $\frac{1}{3}$.`,
      ],
      answer: t`$\frac{1}{3}$`,
    },
    visualSpec: t`Drag $x$ towards $2$ on the graph of $\frac{x^2 + 1}{x + 3}$; readouts of the top, the bottom and the fraction approach $5$, $5$ and $1$ together.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Takes the separately defined value f(a) as the limit",
      remediation: t`The limit depends only on the values of $f(x)$ near $a$, not on $f(a)$. Substitute into the formula that holds for $x \ne a$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: "Lets a square root combine or split over + and −: √u − √v = √(u − v), √(u + v) = √u + √v",
      remediation: t`A root doesn't split over $+$ or $-$: $\sqrt{9} - \sqrt{4} = 1$, but $\sqrt{9 - 4} = \sqrt{5}$. Work out each root on its own.`,
      fallback: { kind: "ext", topic: "surds" },
    },
    {
      id: "C02-M3",
      mistake: "Drops the minus sign of a negative value when substituting",
      remediation: t`Put a negative value in brackets, sign and all: $3 - (-1) = 4$, and $(-2)^3 = -8$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Reads a power as a multiple: x² as 2x",
      remediation: t`$x^2$ means $x \times x$, not $2x$: at $x = -3$, $x^2 = 9$, while $2x = -6$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Adds the limits of a product's factors instead of multiplying them",
      remediation: t`The limit of a product is the **product** of the limits: $\lim [f(x)\,g(x)] = lm$. Add limits only for a sum.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M1 needs an item with f(a) defined separately; C02-M2 needs a sum or difference of square roots.",
    "C02-M3 is detectable only when a substituted value is negative; C02-M4 agrees with the key where x² = 2x (x = 0 or x = 2), so avoid those points.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/7.1.7 SolvedEx.3" },
      stem: t`$\lim_{x \to -1} \frac{\sqrt{x^2 + 8} - \sqrt{3 - x}}{x} =$`,
      verify: { kind: "value", inputs: { e: "(sqrt(x**2 + 8) - sqrt(3 - x))/x", a: "-1" } },
      options: [
        { key: "A", text: t`$-1$`, correct: true, value: "-1" },
        { key: "B", text: t`$- \sqrt{5}$`, correct: false, misconceptionId: "C02-M2", value: "-sqrt(5)" },
        { key: "C", text: t`$3 - \sqrt{2}$`, correct: false, misconceptionId: "C02-M3", value: "3 - sqrt(2)" },
        { key: "D", text: t`$2 - \sqrt{6}$`, correct: false, misconceptionId: "C02-M4", value: "2 - sqrt(6)" },
      ],
      solution: {
        steps: [
          t`The denominator tends to $-1 \ne 0$, so substitute $x = -1$.`,
          t`$\sqrt{(-1)^2 + 8} = \sqrt{9} = 3$, and $\sqrt{3 - (-1)} = \sqrt{4} = 2$.`,
          t`The limit is $\frac{3 - 2}{-1} = -1$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/7.1.7 SolvedEx.2" },
      stem: t`$\lim_{y \to -2} \left[(y^2 - 3)(y + 5)\right] =$`,
      verify: { kind: "value", inputs: { e: "(y**2 - 3)*(y + 5)", a: "-2" }, params: { var: "y" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C02-M3", value: "7" },
        { key: "B", text: t`$-21$`, correct: false, misconceptionId: "C02-M4", value: "-21" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C02-M5", value: "4" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`Product rule: the limit is $\lim (y^2 - 3) \times \lim (y + 5)$.`,
          t`$(-2)^2 - 3 = 4 - 3 = 1$, and $-2 + 5 = 3$.`,
          t`The limit is $1 \times 3 = 3$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`If $\lim_{x \to a} f(x) = 4$ and $\lim_{x \to a} g(x) = -2$, then as $x \to a$, $\frac{[f(x)]^2 - 3g(x)}{f(x)\,g(x)}$ tends to:`,
      verify: { kind: "value", inputs: { e: "(F**2 - 3*G)/(F*G)", lF: "4", lG: "-2" } },
      options: [
        { key: "A", text: t`$11$`, correct: false, misconceptionId: "C02-M5", value: "11" },
        { key: "B", text: t`$- \frac{11}{4}$`, correct: true, value: "-11/4" },
        { key: "C", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C02-M3", value: "5/4" },
        { key: "D", text: t`$- \frac{7}{4}$`, correct: false, misconceptionId: "C02-M4", value: "-7/4" },
      ],
      solution: {
        steps: [
          t`Denominator: $4 \times (-2) = -8 \ne 0$, so the quotient rule applies.`,
          t`Numerator: $4^2 - 3(-2) = 16 + 6 = 22$.`,
          t`The limit is $\frac{22}{-8} = -\frac{11}{4}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`$f(x) = 2x^2 - x + 1$ for $x \ne -1$, and $f(-1) = 5$. Then $\lim_{x \to -1} f(x) =$`,
      verify: { kind: "value", inputs: { e: "2*x**2 - x + 1", a: "-1", fa: "5" } },
      options: [
        { key: "A", text: t`$-2$`, correct: false, misconceptionId: "C02-M4", value: "-2" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C02-M1", value: "5" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C02-M3", value: "2" },
      ],
      solution: {
        steps: [
          t`The limit uses $f(x)$ for $x$ near $-1$, where $f(x) = 2x^2 - x + 1$; $f(-1)$ plays no part.`,
          t`Substitute: $2(-1)^2 - (-1) + 1$ $= 2 + 1 + 1 = 4$.`,
          t`So the limit is $4$, even though $f(-1) = 5$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`If $\lim_{x \to a} f(x) = 9$ and $\lim_{x \to a} g(x) = -5$, then as $x \to a$, $\frac{\sqrt{f(x) + 16}}{f(x)\,g(x)}$ tends to:`,
      verify: { kind: "value", inputs: { e: "sqrt(F + 16)/(F*G)", lF: "9", lG: "-5" } },
      options: [
        { key: "A", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C02-M5", value: "5/4" },
        { key: "B", text: t`$- \frac{1}{9}$`, correct: true, value: "-1/9" },
        { key: "C", text: t`$- \frac{7}{45}$`, correct: false, misconceptionId: "C02-M2", value: "-7/45" },
        { key: "D", text: t`$\frac{1}{9}$`, correct: false, misconceptionId: "C02-M3", value: "1/9" },
      ],
      solution: {
        steps: [
          t`Numerator: $\sqrt{9 + 16} = \sqrt{25} = 5$.`,
          t`Denominator: $9 \times (-5) = -45 \ne 0$.`,
          t`The limit is $\frac{5}{-45} = -\frac{1}{9}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.1 I Q1" },
      stem: t`$\lim_{z \to -2} \frac{\sqrt{z^2 + 12}}{z(z + 3)} =$`,
      verify: { kind: "value", inputs: { e: "sqrt(z**2 + 12)/(z*(z + 3))", a: "-2" }, params: { var: "z" } },
      options: [
        { key: "A", text: t`$-2$`, correct: true, value: "-2" },
        { key: "B", text: t`$\frac{2}{5}$`, correct: false, misconceptionId: "C02-M3", value: "2/5" },
        { key: "C", text: t`$- \sqrt{2}$`, correct: false, misconceptionId: "C02-M4", value: "-sqrt(2)" },
        { key: "D", text: t`$-4$`, correct: false, misconceptionId: "C02-M5", value: "-4" },
      ],
      solution: {
        steps: [
          t`Denominator: $(-2)(-2 + 3) = -2 \ne 0$, so substitute $z = -2$.`,
          t`Numerator: $\sqrt{(-2)^2 + 12} = \sqrt{16} = 4$.`,
          t`The limit is $\frac{4}{-2} = -2$.`,
        ],
      },
    },
  ],
};
