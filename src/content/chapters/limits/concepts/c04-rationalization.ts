import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Put $x = 0$ into $\frac{\sqrt{x + 9} - 3}{x}$: you get $\frac{0}{0}$. Yet at $x = 0.0001$ it is about $0.16666$. **Where does $\frac{1}{6}$ come from?**`,
    reveal: t`Multiply top and bottom by $\sqrt{x + 9} + 3$. The top becomes $(x + 9) - 9 = x$, which cancels the $x$ below. What is left is $\frac{1}{\sqrt{x + 9} + 3}$, and at $x = 0$ that is $\frac{1}{3 + 3} = \frac{1}{6}$.`,
  },
  explanation: {
    intuition: [
      t`Put $x = 0$ into $\frac{\sqrt{x + 9} - 3}{x}$ and you get $\frac{0}{0}$: substitution fails.`,
      t`A **surd** is a root that won't simplify, like $\sqrt{x + 9}$; you can't factorise through it.`,
      t`The **conjugate** of $\sqrt{p} - \sqrt{q}$ is $\sqrt{p} + \sqrt{q}$: the same two terms, the middle sign flipped.`,
      t`Their product has no roots: $(\sqrt{p} - \sqrt{q})(\sqrt{p} + \sqrt{q})$ $= p - q$.`,
      t`Here $(\sqrt{x + 9} - 3)(\sqrt{x + 9} + 3) = x$: the hidden factor $x$ appears and cancels.`,
      t`Clearing the root this way, then cancelling and substituting, is called **rationalizing**.`,
    ],
    formal: [
      {
        title: "Multiply by one",
        points: [
          t`To **rationalize**, multiply the top and the bottom of the fraction by the conjugate.`,
          t`The conjugate over itself equals $1$, so the function, and its limit, don't change.`,
          t`Multiply only the top and you have changed the function: its limit changes too.`,
          t`The root difference becomes $p - q$; the conjugate lands on the other side of the fraction bar.`,
          t`The conjugate does not cancel: keep it, and substitute into it at the end.`,
        ],
      },
      {
        title: "The four steps",
        points: [
          t`**Step 1.** Substitute $x = a$. If you get $\frac{0}{0}$ and see a root difference, rationalize.`,
          t`**Step 2.** Multiply top and bottom by the conjugate of the root difference.`,
          t`**Step 3.** Expand to $p - q$: the first **radicand**, the expression under the root, minus the second.`,
          t`**Step 4.** Factorise $p - q$, cancel $(x - a)$, then substitute $x = a$.`,
          t`$\frac{0}{0}$ is never the answer: it only says a factor $(x - a)$ is hiding.`,
        ],
      },
      {
        title: "Substituting into the conjugate",
        points: [
          t`At $x = a$ the root difference is $0$, so its two roots are equal there.`,
          t`So the conjugate $\sqrt{p} + \sqrt{q}$ becomes $2\sqrt{p}$ at $x = a$.`,
          t`Example: $\sqrt{x + 5} + 3$ at $x = 4$ is $3 + 3 = 6$.`,
          t`Never add under one root: $\sqrt{4} + \sqrt{4} = 4$, but $\sqrt{8} \ne 4$.`,
        ],
      },
      {
        title: "Roots on top and bottom",
        points: [
          t`Some fractions have a root difference above and below, like $\frac{\sqrt{x + 1} - 2}{\sqrt{x - 2} - 1}$ at $x = 3$.`,
          t`Multiply top and bottom by **both** conjugates, $\sqrt{x + 1} + 2$ and $\sqrt{x - 2} + 1$.`,
          t`The top becomes $(x - 3)(\sqrt{x - 2} + 1)$: the bottom's conjugate moves up.`,
          t`The bottom becomes $(x - 3)(\sqrt{x + 1} + 2)$: the top's conjugate moves down.`,
          t`Cancel $(x - 3)$ and put $x = 3$: $\frac{1 + 1}{2 + 2} = \frac{1}{2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\displaystyle\lim_{x \to 4} \frac{x^2 + x - 20}{\sqrt{x^2 - 7} - \sqrt{25 - x^2}}$.`,
      steps: [
        t`At $x = 4$ the top is $16 + 4 - 20 = 0$ and the bottom is $\sqrt{9} - \sqrt{9} = 0$: a $\frac{0}{0}$ form, with the root difference below.`,
        t`Multiply top and bottom by $\sqrt{x^2 - 7} + \sqrt{25 - x^2}$. The bottom becomes $(x^2 - 7) - (25 - x^2)$ $= 2x^2 - 32$.`,
        t`Factorise: the top is $(x - 4)(x + 5)$, the bottom $2(x - 4)(x + 4)$. Cancel $x - 4$, since $x \ne 4$.`,
        t`What remains is $(x + 5)$ times the conjugate, over $2(x + 4)$. At $x = 4$ the conjugate is $3 + 3 = 6$, so the limit is $\frac{9 \times 6}{2 \times 8}$ $= \frac{27}{8}$.`,
      ],
      answer: t`$\frac{27}{8}$`,
    },
    visualSpec: t`Drag $x$ towards $a$: the fraction and its rationalized form agree everywhere except at $x = a$, where only the rationalized form can be evaluated.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Multiplies only the root difference by its conjugate, so $\sqrt{p} - \sqrt{q}$ just turns into $p - q$ and the conjugate is lost.`,
      remediation: t`Multiply top **and** bottom by the conjugate, so you multiply by $1$. The conjugate stays in the fraction: substitute into it at the end.`,
      fallback: { kind: "ext", topic: "surds" },
    },
    {
      id: "C04-M2",
      mistake: t`Adds roots under one root, $\sqrt{p} + \sqrt{q} = \sqrt{p + q}$, so the conjugate at $x = a$ comes out as $\sqrt{2p}$ instead of $2\sqrt{p}$.`,
      remediation: t`$\sqrt{p} + \sqrt{q}$ is not $\sqrt{p + q}$. At $x = a$ the two roots are equal, so the conjugate is $2\sqrt{p}$.`,
      fallback: { kind: "ext", topic: "surds" },
    },
    {
      id: "C04-M3",
      mistake: t`Expands $(\sqrt{p} - \sqrt{q})(\sqrt{p} + \sqrt{q})$ as $q - p$, flipping the sign of the answer.`,
      remediation: t`$(\sqrt{p} - \sqrt{q})(\sqrt{p} + \sqrt{q}) = p - q$: the first radicand minus the second. Keep the order and the sign follows.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Reads $\frac{0}{0}$ after substituting as: the limit does not exist.`,
      remediation: t`$\frac{0}{0}$ is not an answer: it says a factor $(x - a)$ is hiding. Rationalize, cancel it, then substitute.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M5",
      mistake: "With a root difference on top and bottom, keeps each conjugate on its own side, so the ratio of conjugates comes out upside down.",
      remediation: "The top's conjugate ends up in the denominator and the bottom's in the numerator. Write both products out before cancelling.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M2 gives the key when both top and bottom have a root difference (both conjugates shrink by the same factor $\sqrt{2}$): diagnose it only on items with one root difference.`,
    t`C04-M1 gives the key when the conjugate at $x = a$ equals $1$, and C04-M5 when the two conjugates are equal there: avoid such inputs.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.3 I Q1" },
      stem: t`Evaluate $\displaystyle\lim_{x \to 0} \frac{\sqrt{6 + x + x^2} - \sqrt{6}}{x}$.`,
      verify: { kind: "value", inputs: { at: "0", P: "6 + x + x**2", Q: "6", D: "x" }, params: { kind: "num" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3}}{6}$`, correct: false, misconceptionId: "C04-M2", value: "sqrt(3)/6" },
        { key: "B", text: t`The limit does not exist`, correct: false, misconceptionId: "C04-M4", value: "dne" },
        { key: "C", text: t`$\frac{\sqrt{6}}{12}$`, correct: true, value: "sqrt(6)/12" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C04-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $\sqrt{6 + x + x^2} + \sqrt{6}$. The top becomes $(6 + x + x^2) - 6$ $= x(1 + x)$.`,
          t`Cancel $x$: the top is $1 + x$, the bottom is the conjugate.`,
          t`At $x = 0$: $\frac{1}{\sqrt{6} + \sqrt{6}} = \frac{1}{2\sqrt{6}}$ $= \frac{\sqrt{6}}{12}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.3 I Q2" },
      stem: t`Evaluate $\displaystyle\lim_{x \to 3} \frac{\sqrt{2x + 3} - \sqrt{4x - 3}}{x^2 - 9}$.`,
      verify: { kind: "value", inputs: { at: "3", P: "2*x + 3", Q: "4*x - 3", D: "x**2 - 9" }, params: { kind: "num" } },
      options: [
        { key: "A", text: t`$- \frac{1}{3}$`, correct: false, misconceptionId: "C04-M1", value: "-1/3" },
        { key: "B", text: t`$- \frac{\sqrt{2}}{18}$`, correct: false, misconceptionId: "C04-M2", value: "-sqrt(2)/18" },
        { key: "C", text: t`$\frac{1}{18}$`, correct: false, misconceptionId: "C04-M3", value: "1/18" },
        { key: "D", text: t`$- \frac{1}{18}$`, correct: true, value: "-1/18" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $\sqrt{2x + 3} + \sqrt{4x - 3}$. The top becomes $(2x + 3) - (4x - 3)$ $= -2(x - 3)$.`,
          t`The bottom is $(x - 3)(x + 3)$ times the conjugate. Cancel $x - 3$.`,
          t`At $x = 3$ the conjugate is $3 + 3 = 6$, so the limit is $\frac{-2}{6 \times 6}$ $= -\frac{1}{18}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.3 II Q2" },
      stem: t`Evaluate $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{\sqrt{x + 2} - \sqrt{3x - 2}}$.`,
      verify: { kind: "value", inputs: { at: "2", P: "x + 2", Q: "3*x - 2", D: "x**2 - 4" }, params: { kind: "den" } },
      options: [
        { key: "A", text: t`$- 4 \sqrt{2}$`, correct: false, misconceptionId: "C04-M2", value: "-4*sqrt(2)" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C04-M3", value: "8" },
        { key: "C", text: t`$-8$`, correct: true, value: "-8" },
        { key: "D", text: t`$-2$`, correct: false, misconceptionId: "C04-M1", value: "-2" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $\sqrt{x + 2} + \sqrt{3x - 2}$. The bottom becomes $(x + 2) - (3x - 2)$ $= -2(x - 2)$.`,
          t`The top is $(x - 2)(x + 2)$ times the conjugate. Cancel $x - 2$.`,
          t`At $x = 2$ the conjugate is $2 + 2 = 4$, so the limit is $\frac{4 \times 4}{-2} = -8$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Misc I Q4" },
      stem: t`$\displaystyle\lim_{x \to 5} \frac{\sqrt{x + 4} - 3}{\sqrt{3x - 11} - 2} = ?$`,
      verify: { kind: "value", inputs: { at: "5", P: "x + 4", Q: "9", R: "3*x - 11", S: "4" }, params: { kind: "both" } },
      options: [
        { key: "A", text: t`$\frac{1}{3}$`, correct: false, misconceptionId: "C04-M1", value: "1/3" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M5", value: "1/2" },
        { key: "C", text: t`The limit does not exist`, correct: false, misconceptionId: "C04-M4", value: "dne" },
        { key: "D", text: t`$\frac{2}{9}$`, correct: true, value: "2/9" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by both conjugates, $\sqrt{x + 4} + 3$ and $\sqrt{3x - 11} + 2$.`,
          t`The top becomes $(x - 5)(\sqrt{3x - 11} + 2)$; the bottom becomes $3(x - 5)(\sqrt{x + 4} + 3)$.`,
          t`Cancel $x - 5$ and put $x = 5$: $\frac{2 + 2}{3(3 + 3)} = \frac{4}{18}$ $= \frac{2}{9}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.3 I Q4" },
      stem: t`Evaluate $\displaystyle\lim_{x \to 2} \frac{\sqrt{2 + x} - \sqrt{6 - x}}{\sqrt{x} - \sqrt{2}}$.`,
      verify: { kind: "value", inputs: { at: "2", P: "2 + x", Q: "6 - x", R: "x", S: "2" }, params: { kind: "both" } },
      options: [
        { key: "A", text: t`$- \sqrt{2}$`, correct: false, misconceptionId: "C04-M3", value: "-sqrt(2)" },
        { key: "B", text: t`$\sqrt{2}$`, correct: true, value: "sqrt(2)" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C04-M1", value: "2" },
        { key: "D", text: t`$2 \sqrt{2}$`, correct: false, misconceptionId: "C04-M5", value: "2*sqrt(2)" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by both conjugates, $\sqrt{2 + x} + \sqrt{6 - x}$ and $\sqrt{x} + \sqrt{2}$.`,
          t`The top becomes $2(x - 2)(\sqrt{x} + \sqrt{2})$; the bottom becomes $(x - 2)(\sqrt{2 + x} + \sqrt{6 - x})$.`,
          t`Cancel $x - 2$ and put $x = 2$: $\frac{2(\sqrt{2} + \sqrt{2})}{2 + 2} = \frac{4\sqrt{2}}{4}$ $= \sqrt{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.3 II Q4" },
      stem: t`For a constant $a > 0$, evaluate $\displaystyle\lim_{y \to 0} \frac{\sqrt{a + y} - \sqrt{a}}{y\sqrt{a + y}}$.`,
      verify: { kind: "value", inputs: { at: "0", P: "a + y", Q: "a", D: "y*sqrt(a + y)" }, params: { kind: "num", var: "y" } },
      options: [
        { key: "A", text: t`$\frac{1}{2 a}$`, correct: true, value: "1/(2*a)" },
        { key: "B", text: t`$\frac{1}{\sqrt{a}}$`, correct: false, misconceptionId: "C04-M1", value: "1/sqrt(a)" },
        { key: "C", text: t`$\frac{\sqrt{2}}{2 a}$`, correct: false, misconceptionId: "C04-M2", value: "sqrt(2)/(2*a)" },
        { key: "D", text: t`$- \frac{1}{2 a}$`, correct: false, misconceptionId: "C04-M3", value: "-1/(2*a)" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $\sqrt{a + y} + \sqrt{a}$. The top becomes $(a + y) - a = y$.`,
          t`Cancel $y$: the top is $1$; the bottom is $\sqrt{a + y}$ times the conjugate.`,
          t`At $y = 0$: $\frac{1}{\sqrt{a}(\sqrt{a} + \sqrt{a})} = \frac{1}{2a}$.`,
        ],
      },
    },
  ],
};
