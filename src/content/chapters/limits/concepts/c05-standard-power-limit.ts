import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`At $x = 2$, $\frac{x^{10} - 2^{10}}{x - 2}$ is $\frac{0}{0}$. Near $x = 2$ it gets close to $5120$. Factorising $x^{10} - 2^{10}$ by hand is long. **Is there a shortcut?**`,
    reveal: t`$x^{10} - 2^{10}$ $= (x - 2)(x^9 + 2x^8 + \dots + 2^9)$. Cancel $x - 2$: the second bracket has $10$ terms, and each becomes $2^9$ at $x = 2$. So the limit is $10 \times 2^9 = 5120$, with no factorising at all.`,
  },
  explanation: {
    intuition: [
      t`At $x = a$, $\frac{x^n - a^n}{x - a}$ is $\frac{0}{0}$: the top is $a^n - a^n = 0$.`,
      t`For $n = 2$: $x^2 - a^2 = (x - a)(x + a)$, so the limit is $a + a = 2a$.`,
      t`For $n = 3$: $x^3 - a^3$ $= (x - a)(x^2 + ax + a^2)$, so the limit is $3a^2$.`,
      t`For any whole number $n$, $x^n - a^n$ has the factor $x - a$; the other factor has $n$ terms.`,
      t`At $x = a$ each of those $n$ terms becomes $a^{n-1}$, so the limit is $na^{n-1}$.`,
      t`Learn this as a **standard limit**: a result you quote instead of factorising every time.`,
    ],
    formal: [
      {
        title: "The standard result",
        points: [
          t`$\lim_{x \to a} \frac{x^n - a^n}{x - a}$ $= na^{n-1}$, where $a$ is the value $x$ tends to.`,
          t`It holds for every rational $n$, whole, negative or a fraction, wherever $a^{n-1}$ is defined.`,
          t`The power drops by one: $\frac{x^4 - 5^4}{x - 5} \to 4 \times 5^3 = 500$.`,
          t`For a negative $n$, dropping by one goes further from $0$: $n = -2$ gives $a^{-3}$.`,
          t`So with $n = -2$ and $a = 3$ the limit is $-2 \times 3^{-3} = -\frac{2}{27}$.`,
          t`Only when $a = 1$ is the limit just $n$, since $1^{n-1} = 1$.`,
        ],
      },
      {
        title: "Reading off n and a",
        points: [
          t`First write the top as $(\text{base})^n - a^n$, where $a$ is the value the **base** tends to.`,
          t`With $x \to -2$: $x^5 + 32 = x^5 - (-2)^5$, so $a = -2$, not $2$.`,
          t`The bottom must be the same base minus $a$, or the formula does not apply directly.`,
          t`In $\frac{(x + 1)^4 - 3^4}{x - 2}$ with $x \to 2$, the base $x + 1$ tends to $3$.`,
          t`The bottom fits: $x - 2 = (x + 1) - 3$. So the limit is $4 \times 3^3 = 108$.`,
        ],
      },
      {
        title: "A ratio of two powers",
        points: [
          t`For $\frac{x^m - a^m}{x^n - a^n}$, divide the top and the bottom by $x - a$, which is not $0$.`,
          t`The top tends to $ma^{m-1}$ and the bottom to $na^{n-1}$.`,
          t`So the limit is $\frac{ma^{m-1}}{na^{n-1}}$ $= \frac{m}{n}a^{m-n}$.`,
          t`The top's result stays on top: the bottom's $na^{n-1}$ goes below.`,
          t`Powers in a difference don't cancel like $\frac{x^m}{x^n}$: $a^{m-n}$ alone misses $\frac{m}{n}$.`,
        ],
      },
      {
        title: "Roots are powers too",
        points: [
          t`A root is a fractional power: $\sqrt{x} = x^{\frac{1}{2}}$ and $\sqrt[3]{x} = x^{\frac{1}{3}}$.`,
          t`So $\frac{\sqrt{x} - 3}{x - 9}$ is $\frac{x^{1/2} - 9^{1/2}}{x - 9}$, with $n = \frac{1}{2}$ and $a = 9$.`,
          t`Its limit is $\frac{1}{2} \times 9^{-\frac{1}{2}}$ $= \frac{1}{2} \times \frac{1}{3} = \frac{1}{6}$.`,
          t`With the root in the bottom, $\frac{x - 9}{\sqrt{x} - 3}$, the limit is the reciprocal, $6$.`,
          t`Don't treat $\sqrt{x} - 3$ as $x - 9$: a root difference has its own limit to divide by.`,
        ],
      },
    ],
    worked: {
      prompt: t`Evaluate $\displaystyle\lim_{x \to 5} \frac{x^3 - 125}{x^5 - 3125}$.`,
      steps: [
        t`At $x = 5$ the top is $125 - 125 = 0$ and the bottom is $3125 - 3125 = 0$: a $\frac{0}{0}$ form. Write $125 = 5^3$ and $3125 = 5^5$.`,
        t`Divide the top and the bottom by $x - 5$, which is not $0$ as $x \to 5$. Each part is now a standard limit.`,
        t`The top tends to $3 \times 5^2 = 75$. The bottom tends to $5 \times 5^4 = 3125$.`,
        t`So the limit is $\frac{75}{3125} = \frac{3}{125}$.`,
      ],
      answer: t`$\frac{3}{125}$`,
    },
    visualSpec: t`Drag $a$ and $n$: the graph of $y = \frac{x^n - a^n}{x - a}$ has a hole at $x = a$, at height $na^{n-1}$, and the hole moves as you drag.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Keeps the power: writes $na^n$ instead of $na^{n-1}$.`,
      remediation: t`The power drops by one: the limit is $na^{n-1}$. Check with $n = 2$: $\frac{x^2 - a^2}{x - a} = x + a$, which tends to $2a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: t`Cancels the powers like an ordinary fraction, $\frac{x^m}{x^n} = x^{m-n}$, so the factor $n$ (or $\frac{m}{n}$) is lost: $a^{n-1}$ or $a^{m-n}$.`,
      remediation: t`Only common factors cancel, and $x^n - a^n$ is not a power. Use the result: $\frac{x^n - a^n}{x - a} \to na^{n-1}$, with its factor $n$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: t`Takes $a$ from how the bracket looks, not from the value the base tends to: reads $y^5 + 243$ as $y^5 - 3^5$ when $y \to -3$, or uses $a$ for the base $z + 2$.`,
      remediation: t`$a$ is the value the base tends to. With $y \to -3$, $243 = -(-3)^5$, so $a = -3$. With base $z + 2$ and $z \to a$, it is $a + 2$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C05-M4",
      mistake: t`Remembers the result as $n$, the $a = 1$ case, and uses it for every $a$.`,
      remediation: t`Only for $a = 1$ is the limit $n$. In general it is $na^{n-1}$: the power of $a$ is part of the answer.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Applies the result to the top only, as if the bottom were $x - a$, when the bottom is a root or power difference.`,
      remediation: t`The bottom must be the base minus $a$. A root difference in the bottom is a power difference too: find its own limit and divide by it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Puts the bottom's result on top, so the answer comes out upside down.",
      remediation: t`Divide the top and the bottom by $x - a$: the top's limit stays on top, and the bottom's limit goes below.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M1 gives the key on a ratio of two power differences ($\frac{m}{n}a^{m-n}$ either way): diagnose it only where the bottom is $x - a$.`,
    t`C05-M3 gives the key when the base tends to a negative $a$ and $n - 1$ (or $m - n$) is even, as in C05-Q4: diagnose it where that difference is odd, or on a shifted base.`,
    t`C05-M4 gives the key when $a = 1$; C05-M5 and C05-M6 apply only where the bottom is a power or root difference.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.1 II Q2" },
      stem: t`Evaluate $\displaystyle\lim_{x \to 2} \frac{x^{-3} - 2^{-3}}{x - 2}$.`,
      verify: { kind: "value", inputs: { F: "(x**-3 - Rational(1, 8))/(x - 2)", at: "2", n: "-3", b: "2" } },
      options: [
        { key: "A", text: t`$-3$`, correct: false, misconceptionId: "C05-M4", value: "-3" },
        { key: "B", text: t`$- \frac{3}{16}$`, correct: true, value: "-3/16" },
        { key: "C", text: t`$- \frac{3}{8}$`, correct: false, misconceptionId: "C05-M1", value: "-3/8" },
        { key: "D", text: t`$\frac{1}{16}$`, correct: false, misconceptionId: "C05-M2", value: "1/16" },
      ],
      solution: {
        steps: [
          t`Here $n = -3$ and $a = 2$, so the limit is $na^{n-1} = -3 \times 2^{-4}$.`,
          t`$n - 1 = -4$ and $2^{-4} = \frac{1}{16}$, so the limit is $-\frac{3}{16}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.1 III Q7" },
      stem: t`For a constant $a > 0$, evaluate $\displaystyle\lim_{z \to a} \frac{(z + 2)^{\frac{3}{2}} - (a + 2)^{\frac{3}{2}}}{z - a}$.`,
      verify: { kind: "value", inputs: { F: "((z + 2)**Rational(3, 2) - (a + 2)**Rational(3, 2))/(z - a)", at: "a", n: "Rational(3, 2)", b: "a + 2" }, params: { var: "z" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}\sqrt{a}$`, correct: false, misconceptionId: "C05-M3", value: "3*sqrt(a)/2" },
        { key: "B", text: t`$\frac{3}{2}(a + 2)^{\frac{3}{2}}$`, correct: false, misconceptionId: "C05-M1", value: "3*(a + 2)**(3/2)/2" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C05-M4", value: "3/2" },
        { key: "D", text: t`$\frac{3}{2}\sqrt{a + 2}$`, correct: true, value: "3*sqrt(a + 2)/2" },
      ],
      solution: {
        steps: [
          t`The base is $z + 2$. As $z \to a$ it tends to $a + 2$, and $z - a = (z + 2) - (a + 2)$.`,
          t`So this is the standard limit with base $z + 2$, $n = \frac{3}{2}$, and $a + 2$ in place of $a$.`,
          t`The limit is $\frac{3}{2}(a + 2)^{\frac{1}{2}} = \frac{3}{2}\sqrt{a + 2}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.1 I Q2" },
      stem: t`Evaluate $\displaystyle\lim_{y \to -3} \frac{y^5 + 243}{y^2 - 9}$.`,
      verify: { kind: "value", inputs: { F: "(y**5 + 243)/(y**2 - 9)", at: "-3", n: "5", m: "2", b: "-3" }, params: { var: "y" } },
      options: [
        { key: "A", text: t`$- \frac{135}{2}$`, correct: true, value: "-135/2" },
        { key: "B", text: t`$\frac{135}{2}$`, correct: false, misconceptionId: "C05-M3", value: "135/2" },
        { key: "C", text: t`$-27$`, correct: false, misconceptionId: "C05-M2", value: "-27" },
        { key: "D", text: t`$\frac{5}{2}$`, correct: false, misconceptionId: "C05-M4", value: "5/2" },
      ],
      solution: {
        steps: [
          t`As $y \to -3$: $243 = -(-3)^5$ and $9 = (-3)^2$. The fraction is $\frac{y^5 - (-3)^5}{y^2 - (-3)^2}$.`,
          t`Divide the top and the bottom by $y + 3$. The top tends to $5(-3)^4 = 405$; the bottom to $2(-3) = -6$.`,
          t`The limit is $\frac{405}{-6} = -\frac{135}{2}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Misc I Q2" },
      stem: t`$\displaystyle\lim_{x \to -2} \frac{x^7 + 128}{x^3 + 8} = ?$`,
      verify: { kind: "value", inputs: { F: "(x**7 + 128)/(x**3 + 8)", at: "-2", n: "7", m: "3", b: "-2" } },
      options: [
        { key: "A", text: t`$448$`, correct: false, misconceptionId: "C05-M5", value: "448" },
        { key: "B", text: t`$\frac{3}{112}$`, correct: false, misconceptionId: "C05-M6", value: "3/112" },
        { key: "C", text: t`$\frac{112}{3}$`, correct: true, value: "112/3" },
        { key: "D", text: t`$16$`, correct: false, misconceptionId: "C05-M2", value: "16" },
      ],
      solution: {
        steps: [
          t`As $x \to -2$: $x^7 + 128 = x^7 - (-2)^7$ and $x^3 + 8 = x^3 - (-2)^3$.`,
          t`Divide the top and the bottom by $x + 2$. The top tends to $7(-2)^6 = 448$; the bottom to $3(-2)^2 = 12$.`,
          t`The limit is $\frac{448}{12} = \frac{112}{3}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.1 III Q8" },
      stem: t`Evaluate $\displaystyle\lim_{x \to 7} \frac{x^3 - 343}{\sqrt{x} - \sqrt{7}}$.`,
      verify: { kind: "value", inputs: { F: "(x**3 - 343)/(sqrt(x) - sqrt(7))", at: "7", n: "3", m: "Rational(1, 2)", b: "7" } },
      options: [
        { key: "A", text: t`$294 \sqrt{7}$`, correct: true, value: "294*sqrt(7)" },
        { key: "B", text: t`$147$`, correct: false, misconceptionId: "C05-M5", value: "147" },
        { key: "C", text: t`$49 \sqrt{7}$`, correct: false, misconceptionId: "C05-M2", value: "49*sqrt(7)" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C05-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`The bottom is a power difference: $\sqrt{x} - \sqrt{7} = x^{\frac{1}{2}} - 7^{\frac{1}{2}}$.`,
          t`Divide the top and the bottom by $x - 7$. The top tends to $3 \times 7^2 = 147$.`,
          t`The bottom tends to $\frac{1}{2} \times 7^{-\frac{1}{2}} = \frac{1}{2\sqrt{7}}$.`,
          t`The limit is $147 \times 2\sqrt{7} = 294\sqrt{7}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/limits-11/Ex 7.1 III Q6" },
      stem: t`Evaluate $\displaystyle\lim_{y \to 1} \frac{2y - 2}{\sqrt[3]{7 + y} - 2}$.`,
      verify: { kind: "value", inputs: { F: "(2*y - 2)/((7 + y)**Rational(1, 3) - 2)", at: "1", n: "1", m: "Rational(1, 3)", b: "8", k: "2" }, params: { var: "y" } },
      options: [
        { key: "A", text: t`$24$`, correct: true, value: "24" },
        { key: "B", text: t`$\frac{1}{6}$`, correct: false, misconceptionId: "C05-M6", value: "1/6" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C05-M2", value: "8" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C05-M5", value: "2" },
      ],
      solution: {
        steps: [
          t`Let $u = 7 + y$. As $y \to 1$, $u \to 8$, and $2y - 2 = 2(u - 8)$.`,
          t`The bottom is $u^{\frac{1}{3}} - 8^{\frac{1}{3}}$. Divided by $u - 8$, it tends to $\frac{1}{3} \times 8^{-\frac{2}{3}} = \frac{1}{12}$.`,
          t`So the limit is $2 \div \frac{1}{12} = 24$.`,
        ],
      },
    },
  ],
};
