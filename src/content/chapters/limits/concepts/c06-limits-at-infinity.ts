import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`At $x = 1000$, $\frac{2x + 1}{x + 3}$ is about $1.995$. At $x = 10^6$ it is about $1.999995$. **What number is it heading for?**`,
    reveal: t`Divide top and bottom by $x$: $\frac{2 + \frac{1}{x}}{1 + \frac{3}{x}}$. As $x$ grows, $\frac{1}{x}$ and $\frac{3}{x}$ shrink to $0$, so the fraction heads for $\frac{2}{1} = 2$.`,
  },
  explanation: {
    intuition: [
      t`$x \to \infty$ means $x$ grows without bound: past $100$, past $10^6$, past any number you name.`,
      t`$\infty$ is not a number, so you can't substitute it; it only says which way $x$ moves.`,
      t`As $x$ grows, $\frac{1}{x}$ shrinks towards $0$: $\frac{1}{10}$, $\frac{1}{100}$, $\frac{1}{1000}$, and so on.`,
      t`The **leading term** is the term with the highest power of $x$; for large $x$ it outweighs the rest.`,
      t`In $2x + 1$ at $x = 10^6$, the $1$ hardly counts next to $2x$.`,
      t`Dividing by the highest power turns every smaller term into some $\frac{c}{x^k}$, which shrinks to $0$.`,
    ],
    formal: [
      {
        title: "The basic limit",
        points: [
          t`**The basic limit:** $\lim_{x \to \infty} \frac{1}{x} = 0$.`,
          t`Take $x$ large enough and $\frac{1}{x}$ is as close to $0$ as you like: $x = 10^6$ gives $10^{-6}$.`,
          t`Powers shrink even faster: $\frac{1}{x^k} \to 0$ for every $k > 0$.`,
          t`A constant times it still vanishes: $\frac{c}{x^k} \to c \times 0 = 0$.`,
          t`A constant on its own stays put: $\lim_{x \to \infty} c = c$.`,
        ],
        figure: {
          alt: "The graphs of y = 1/x and y = 1/x² for x > 0. Both fall towards the x-axis as x grows: at x = 2, 1/x is 0.5; at x = 8, it is 0.125. The graph of 1/x² falls faster.",
          axes: "xy",
          view: { x: [0, 10], y: [-0.5, 4] },
          elements: [
            { kind: "curve", points: [[0.25, 4], [0.372, 2.689], [0.494, 2.025], [0.616, 1.624], [0.738, 1.356], [0.859, 1.164], [0.981, 1.019], [1.103, 0.907], [1.225, 0.816], [1.347, 0.742], [1.469, 0.681], [1.591, 0.629], [1.712, 0.584], [1.834, 0.545], [1.956, 0.511], [2.078, 0.481], [2.2, 0.455], [2.322, 0.431], [2.444, 0.409], [2.566, 0.39], [2.688, 0.372], [2.809, 0.356], [2.931, 0.341], [3.053, 0.328], [3.175, 0.315], [3.297, 0.303], [3.419, 0.293], [3.541, 0.282], [3.663, 0.273], [3.784, 0.264], [3.906, 0.256], [4.028, 0.248], [4.15, 0.241], [4.272, 0.234], [4.394, 0.228], [4.516, 0.221], [4.638, 0.216], [4.759, 0.21], [4.881, 0.205], [5.003, 0.2], [5.125, 0.195], [5.247, 0.191], [5.369, 0.186], [5.491, 0.182], [5.612, 0.178], [5.734, 0.174], [5.856, 0.171], [5.978, 0.167], [6.1, 0.164], [6.222, 0.161], [6.344, 0.158], [6.466, 0.155], [6.588, 0.152], [6.709, 0.149], [6.831, 0.146], [6.953, 0.144], [7.075, 0.141], [7.197, 0.139], [7.319, 0.137], [7.441, 0.134], [7.562, 0.132], [7.684, 0.13], [7.806, 0.128], [7.928, 0.126], [8.05, 0.124], [8.172, 0.122], [8.294, 0.121], [8.416, 0.119], [8.537, 0.117], [8.659, 0.115], [8.781, 0.114], [8.903, 0.112], [9.025, 0.111], [9.147, 0.109], [9.269, 0.108], [9.391, 0.106], [9.512, 0.105], [9.634, 0.104], [9.756, 0.102], [9.878, 0.101], [10, 0.1]], step: 1 },
            { kind: "label", at: [2.5, 1.2], label: "y = 1/x", labelAt: "e", step: 1 },
            { kind: "point", at: [2, 0.5], label: "(2, 0.5)", labelAt: "ne", step: 2 },
            { kind: "point", at: [8, 0.125], label: "(8, 0.125)", labelAt: "n", step: 2 },
            { kind: "curve", points: [[0.5, 4], [0.619, 2.612], [0.738, 1.839], [0.856, 1.364], [0.975, 1.052], [1.094, 0.836], [1.212, 0.68], [1.331, 0.564], [1.45, 0.476], [1.569, 0.406], [1.688, 0.351], [1.806, 0.307], [1.925, 0.27], [2.044, 0.239], [2.163, 0.214], [2.281, 0.192], [2.4, 0.174], [2.519, 0.158], [2.638, 0.144], [2.756, 0.132], [2.875, 0.121], [2.994, 0.112], [3.112, 0.103], [3.231, 0.096], [3.35, 0.089], [3.469, 0.083], [3.587, 0.078], [3.706, 0.073], [3.825, 0.068], [3.944, 0.064], [4.062, 0.061], [4.181, 0.057], [4.3, 0.054], [4.419, 0.051], [4.537, 0.049], [4.656, 0.046], [4.775, 0.044], [4.894, 0.042], [5.013, 0.04], [5.131, 0.038], [5.25, 0.036], [5.369, 0.035], [5.487, 0.033], [5.606, 0.032], [5.725, 0.031], [5.844, 0.029], [5.963, 0.028], [6.081, 0.027], [6.2, 0.026], [6.319, 0.025], [6.438, 0.024], [6.556, 0.023], [6.675, 0.022], [6.794, 0.022], [6.912, 0.021], [7.031, 0.02], [7.15, 0.02], [7.269, 0.019], [7.388, 0.018], [7.506, 0.018], [7.625, 0.017], [7.744, 0.017], [7.862, 0.016], [7.981, 0.016], [8.1, 0.015], [8.219, 0.015], [8.338, 0.014], [8.456, 0.014], [8.575, 0.014], [8.694, 0.013], [8.812, 0.013], [8.931, 0.013], [9.05, 0.012], [9.169, 0.012], [9.287, 0.012], [9.406, 0.011], [9.525, 0.011], [9.644, 0.011], [9.762, 0.01], [9.881, 0.01], [10, 0.01]], step: 3, tone: "muted", dashed: true },
            { kind: "label", at: [0.75, 3.2], label: "y = 1/x²", labelAt: "e", step: 3, tone: "muted" },
          ],
        },
      },
      {
        title: "Divide by the highest power",
        points: [
          t`**Step 1.** Find the highest power of $x$ in the denominator, say $x^k$.`,
          t`**Step 2.** Divide every term, top and bottom, by $x^k$: the fraction's value doesn't change.`,
          t`**Step 3.** Each $\frac{c}{x^m}$ tends to $0$; the bottom now tends to a non-zero number.`,
          t`**Step 4.** The limit is the top's limit over the bottom's, by the algebra of limits.`,
          t`Example: in $\frac{10x^2 + 5x + 3}{5x^2 - 3x + 8}$ the highest power below is $x^2$.`,
          t`Divided by $x^2$, the top tends to $10 + 0 + 0$ and the bottom to $5 - 0 + 0$: the limit is $2$.`,
        ],
      },
      {
        title: "Comparing the degrees",
        points: [
          t`The **degree** is the highest power of $x$; the **leading coefficient** is the number in that term.`,
          t`Same degree top and bottom: the limit is the ratio of the leading coefficients.`,
          t`Lower degree on top: divide $\frac{3x + 1}{x^2 + 4}$ by $x^2$ and the top becomes $\frac{3}{x} + \frac{1}{x^2} \to 0$.`,
          t`So when the top's degree is lower, the limit is $0$.`,
          t`Higher degree on top: the fraction grows without bound, so the limit does not exist.`,
          t`$\frac{\infty}{\infty}$ is not $1$ and not a verdict: like $\frac{0}{0}$, it says divide first.`,
        ],
      },
      {
        title: "Brackets raised to powers",
        points: [
          t`$(ax + b)^n$ has degree $n$ and leading term $a^n x^n$: the coefficient is raised too.`,
          t`Example: $(2x - 1)^3$ starts with $8x^3$, not $2x^3$.`,
          t`In a product the degrees add: $(x + 1)^2 (x - 3)^3$ has degree $2 + 3 = 5$.`,
          t`To divide by $x^n$, give each bracket its share: $\frac{(2x - 1)^3}{x^3} = \left(2 - \frac{1}{x}\right)^3$.`,
          t`Then $\left(2 - \frac{1}{x}\right)^3 \to 2^3 = 8$.`,
        ],
      },
      {
        title: "Square roots",
        points: [
          t`A square root halves the degree: $\sqrt{x^4 + 1}$ has degree $2$, since $\sqrt{x^4} = x^2$.`,
          t`To divide a root by $x^2$, divide inside it by $x^4$; here $x > 0$, so $x^2 = \sqrt{x^4}$.`,
          t`So $\frac{\sqrt{x^4 + 1}}{x^2} = \sqrt{1 + \frac{1}{x^4}}$, which tends to $\sqrt{1} = 1$.`,
          t`The root acts on the coefficient too: $\sqrt{9x^4 + x}$ behaves like $3x^2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\displaystyle\lim_{x \to \infty} \frac{(2x + 3)^7 (x - 5)^3}{(2x - 5)^{10}}$.`,
      steps: [
        t`The bottom $(2x - 5)^{10}$ has degree $10$. The top has degree $7 + 3 = 10$.`,
        t`Divide by $x^{10}$: give $x^7$ to $(2x + 3)^7$, $x^3$ to $(x - 5)^3$ and $x^{10}$ to the bottom.`,
        t`That gives $\left(2 + \frac{3}{x}\right)^7$, $\left(1 - \frac{5}{x}\right)^3$ and $\left(2 - \frac{5}{x}\right)^{10}$.`,
        t`Each fraction tends to $0$: the limit is $\frac{2^7 \times 1^3}{2^{10}}$ $= \frac{1}{2^3} = \frac{1}{8}$.`,
      ],
      answer: t`$\frac{1}{8}$`,
    },
    visualSpec: t`Drag $x$ to the right: the graph of the fraction flattens onto the line $y = $ ratio of leading coefficients, while each $\frac{c}{x^k}$ term shrinks to $0$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Treats $x \to \infty$ like $x \to 0$: drops the terms with $x$ and keeps the constants, so the limit is the ratio of the constant terms.`,
      remediation: t`As $x$ grows, the highest powers take over and the constants hardly count. Divide by the highest power of $x$ in the denominator: each constant becomes $\frac{c}{x^k} \to 0$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M2",
      mistake: t`Reads $\frac{\infty}{\infty}$ as $1$: the top and the bottom both grow without bound, so they cancel.`,
      remediation: t`$\infty$ is not a number, so $\frac{\infty}{\infty}$ is not $1$. Divide by the highest power of $x$ in the denominator, then take the limit.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M3",
      mistake: t`Reads $\frac{\infty}{\infty}$ as: the limit does not exist.`,
      remediation: t`$\frac{\infty}{\infty}$ is not an answer: like $\frac{0}{0}$, it says divide first. Divide by the highest power of $x$ in the denominator and the limit appears.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M4",
      mistake: t`Takes the leading coefficient of $(ax + b)^n$ as $a$, forgetting to raise it to the power $n$.`,
      remediation: t`$(ax + b)^n$ starts with $a^n x^n$. Dividing by $x^n$ gives $\left(a + \frac{b}{x}\right)^n$, which tends to $a^n$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C06-M5",
      mistake: t`Reads the degree of $\sqrt{x^4 + \dots}$ as $4$, so the denominator seems to outgrow the numerator and the limit comes out $0$.`,
      remediation: t`A square root halves the degree: $\sqrt{x^4} = x^2$. Divide the root by $x^2$ by dividing inside it by $x^4$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
  ],
  engineNotes: [
    t`C06-M2 gives the key when the limit is $1$ (e.g. Ex 7.7 I Q2), and C06-M1 when the constant terms are in the same ratio as the leading terms: avoid such inputs. On Ex 7.7 III Q4 C06-M1 gives $1$, the same as C06-M2, so only C06-M2 is tagged there.`,
    t`C06-M4 needs a bracket raised to a power above $1$ with an $x$-coefficient other than $1$; C06-M5 needs a square root. C06-M1 is undefined when the denominator's constant term is $0$.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.7 I Q3" },
      stem: t`Evaluate $\displaystyle\lim_{x \to \infty} \frac{7x^2 + 5x - 3}{8x^2 - 2x + 7}$.`,
      verify: { kind: "value", inputs: { N: "7*x**2 + 5*x - 3", D: "8*x**2 - 2*x + 7" } },
      options: [
        { key: "A", text: t`$- \frac{3}{7}$`, correct: false, misconceptionId: "C06-M1", value: "-3/7" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C06-M2", value: "1" },
        { key: "C", text: t`The limit does not exist`, correct: false, misconceptionId: "C06-M3", value: "dne" },
        { key: "D", text: t`$\frac{7}{8}$`, correct: true, value: "7/8" },
      ],
      solution: {
        steps: [
          t`The highest power below is $x^2$. Divide every term by $x^2$.`,
          t`The top becomes $7 + \frac{5}{x} - \frac{3}{x^2} \to 7$; the bottom $8 - \frac{2}{x} + \frac{7}{x^2} \to 8$.`,
          t`So the limit is $\frac{7}{8}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.7 II Q1" },
      stem: t`Evaluate $\displaystyle\lim_{x \to \infty} \frac{7x^2 + 2x - 3}{\sqrt{x^4 + x + 2}}$.`,
      verify: { kind: "value", inputs: { N: "7*x**2 + 2*x - 3", D: "sqrt(x**4 + x + 2)" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`$-\frac{3}{\sqrt{2}}$`, correct: false, misconceptionId: "C06-M1", value: "-3*sqrt(2)/2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C06-M2", value: "1" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C06-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`Under the root the highest power is $x^4$, so the bottom has degree $2$: $\sqrt{x^4} = x^2$.`,
          t`Divide by $x^2$; inside the root that means dividing by $x^4$. The bottom becomes $\sqrt{1 + \frac{1}{x^3} + \frac{2}{x^4}}$, which tends to $1$.`,
          t`The top becomes $7 + \frac{2}{x} - \frac{3}{x^2} \to 7$, so the limit is $\frac{7}{1} = 7$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.7 III Q1" },
      stem: t`Evaluate $\displaystyle\lim_{x \to \infty} \frac{(3x^2 + 4)(4x^2 - 6)(5x^2 + 2)}{4x^6 + 2x^4 - 1}$.`,
      verify: { kind: "value", inputs: { N: "(3*x**2 + 4)*(4*x**2 - 6)*(5*x**2 + 2)", D: "4*x**6 + 2*x**4 - 1" } },
      options: [
        { key: "A", text: t`$15$`, correct: true, value: "15" },
        { key: "B", text: t`$48$`, correct: false, misconceptionId: "C06-M1", value: "48" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C06-M2", value: "1" },
        { key: "D", text: t`The limit does not exist`, correct: false, misconceptionId: "C06-M3", value: "dne" },
      ],
      solution: {
        steps: [
          t`The top has degree $2 + 2 + 2 = 6$, the same as the bottom. Divide by $x^6$, giving $x^2$ to each bracket.`,
          t`The top tends to $3 \times 4 \times 5 = 60$; the bottom $4 + \frac{2}{x^2} - \frac{1}{x^6} \to 4$.`,
          t`So the limit is $\frac{60}{4} = 15$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.7 III Q2" },
      stem: t`Evaluate $\displaystyle\lim_{x \to \infty} \frac{(3x - 4)^3 (4x + 3)^4}{(3x + 2)^7}$.`,
      verify: { kind: "value", inputs: { N: "(3*x - 4)**3*(4*x + 3)**4", D: "(3*x + 2)**7" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C06-M4", value: "4" },
        { key: "B", text: t`$\frac{256}{81}$`, correct: true, value: "256/81" },
        { key: "C", text: t`$- \frac{81}{2}$`, correct: false, misconceptionId: "C06-M1", value: "-81/2" },
        { key: "D", text: t`The limit does not exist`, correct: false, misconceptionId: "C06-M3", value: "dne" },
      ],
      solution: {
        steps: [
          t`The top has degree $3 + 4 = 7$, the same as the bottom. Divide by $x^7$, giving $x$ to each bracket.`,
          t`The top tends to $3^3 \times 4^4 = 27 \times 256$; the bottom to $3^7 = 2187$.`,
          t`So the limit is $\frac{27 \times 256}{2187}$ $= \frac{256}{81}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.7 III Q4" },
      stem: t`Evaluate $\displaystyle\lim_{x \to \infty} \frac{(2x - 1)^{20} (3x - 1)^{30}}{(2x + 1)^{50}}$.`,
      verify: { kind: "value", inputs: { N: "(2*x - 1)**20*(3*x - 1)**30", D: "(2*x + 1)**50" } },
      options: [
        { key: "A", text: t`$\left(\frac{3}{2}\right)^{30}$`, correct: true, value: "205891132094649/1073741824" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C06-M2", value: "1" },
        { key: "C", text: t`The limit does not exist`, correct: false, misconceptionId: "C06-M3", value: "dne" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C06-M4", value: "3" },
      ],
      solution: {
        steps: [
          t`The top has degree $20 + 30 = 50$, the same as the bottom. Divide by $x^{50}$.`,
          t`The top tends to $2^{20} \times 3^{30}$; the bottom to $2^{50}$.`,
          t`So the limit is $\frac{3^{30}}{2^{30}} = \left(\frac{3}{2}\right)^{30}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Misc II Q15" },
      stem: t`Evaluate $\displaystyle\lim_{x \to \infty} \frac{(2x + 1)^2 (7x - 3)^3}{(5x + 2)^5}$.`,
      verify: { kind: "value", inputs: { N: "(2*x + 1)**2*(7*x - 3)**3", D: "(5*x + 2)**5" } },
      options: [
        { key: "A", text: t`The limit does not exist`, correct: false, misconceptionId: "C06-M3", value: "dne" },
        { key: "B", text: t`$\frac{14}{5}$`, correct: false, misconceptionId: "C06-M4", value: "14/5" },
        { key: "C", text: t`$\frac{1372}{3125}$`, correct: true, value: "1372/3125" },
        { key: "D", text: t`$- \frac{27}{32}$`, correct: false, misconceptionId: "C06-M1", value: "-27/32" },
      ],
      solution: {
        steps: [
          t`The top has degree $2 + 3 = 5$, the same as the bottom. Divide by $x^5$.`,
          t`The top tends to $2^2 \times 7^3 = 4 \times 343 = 1372$; the bottom to $5^5 = 3125$.`,
          t`So the limit is $\frac{1372}{3125}$.`,
        ],
      },
    },
  ],
};
