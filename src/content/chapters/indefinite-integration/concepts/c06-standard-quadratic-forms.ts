import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`$\frac{d}{dx}\tan^{-1}\frac{x}{4} = \frac{4}{x^2 + 16}$. **So what is $\int \frac{dx}{x^2 + 16}$?**`,
    reveal: t`Divide by $4$: $\frac{d}{dx}\left(\frac{1}{4}\tan^{-1}\frac{x}{4}\right)$ $= \frac{1}{x^2 + 16}$. So $\int \frac{dx}{x^2 + 16}$ $= \frac{1}{4}\tan^{-1}\frac{x}{4} + c$: the $\frac{1}{4}$ in front is easy to lose.`,
  },
  explanation: {
    intuition: [
      t`Here a **quadratic form** is $x^2 + a^2$, $x^2 - a^2$ or $a^2 - x^2$, with $a > 0$ a constant.`,
      t`Six integrals built on them come up so often that the book lists them as standard results.`,
      t`Each is a derivative read backwards: $\frac{d}{dx}\tan^{-1}\frac{x}{a}$ $= \frac{a}{x^2 + a^2}$.`,
      t`Without a root you get $\tan^{-1}$ or the log of a ratio, with $\frac{1}{a}$ or $\frac{1}{2a}$ in front.`,
      t`Under a square root you get $\sin^{-1}$ or a log, with nothing in front.`,
      t`To use the table, first make the coefficient of $x^2$ equal to $1$.`,
    ],
    formal: [
      {
        title: "The inverse tangent form",
        points: [
          t`$a$ is a positive constant, and $a^2$ is the number added to $x^2$.`,
          t`$\frac{d}{dx}\tan^{-1}\frac{x}{a}$ $= \frac{1}{1 + x^2/a^2}\cdot\frac{1}{a}$ $= \frac{a}{x^2 + a^2}$.`,
          t`Divide by $a$: $\int \frac{dx}{x^2 + a^2}$ $= \frac{1}{a}\tan^{-1}\frac{x}{a} + c$.`,
          t`Example: $\int \frac{dx}{x^2 + 25}$ $= \frac{1}{5}\tan^{-1}\frac{x}{5} + c$, since $a = 5$, not $25$.`,
        ],
      },
      {
        title: "Two log forms",
        points: [
          t`Split the fraction: $\frac{1}{x^2 - a^2}$ $= \frac{1}{2a}\left(\frac{1}{x - a} - \frac{1}{x + a}\right)$.`,
          t`Integrate each piece: $\int \frac{dx}{x^2 - a^2}$ $= \frac{1}{2a}\log\left|\frac{x - a}{x + a}\right| + c$.`,
          t`Swap the squares and the ratio flips: $\int \frac{dx}{a^2 - x^2}$ $= \frac{1}{2a}\log\left|\frac{a + x}{a - x}\right| + c$.`,
          t`The square written first leads both brackets: $x^2 - a^2$ gives $x - a$ over $x + a$.`,
          t`The **modulus** bars $|\;|$ make the log's input positive, so it works on both sides of $x = \pm a$.`,
        ],
      },
      {
        title: "Three square-root forms",
        points: [
          t`For $|x| < a$: $\int \frac{dx}{\sqrt{a^2 - x^2}}$ $= \sin^{-1}\frac{x}{a} + c$.`,
          t`$\int \frac{dx}{\sqrt{x^2 + a^2}}$ $= \log\left|x + \sqrt{x^2 + a^2}\right| + c$.`,
          t`For $|x| > a$: $\int \frac{dx}{\sqrt{x^2 - a^2}}$ $= \log\left|x + \sqrt{x^2 - a^2}\right| + c$.`,
          t`No $\frac{1}{a}$ in front: $\frac{d}{dx}\sin^{-1}\frac{x}{a}$ is already $\frac{1}{\sqrt{a^2 - x^2}}$.`,
          t`Likewise $\frac{d}{dx}\log\left(x + \sqrt{x^2 + a^2}\right)$ $= \frac{1}{\sqrt{x^2 + a^2}}$ exactly.`,
        ],
      },
      {
        title: "When x² has a coefficient",
        points: [
          t`The table needs $x^2$ alone, so take its coefficient out first.`,
          t`$\int \frac{dx}{9x^2 + 4}$ $= \frac{1}{9}\int \frac{dx}{x^2 + \frac{4}{9}}$, so $a = \frac{2}{3}$.`,
          t`Then $\frac{1}{9}\cdot\frac{3}{2}\tan^{-1}\frac{3x}{2}$ $= \frac{1}{6}\tan^{-1}\frac{3x}{2} + c$.`,
          t`Under a root only the square root comes out: $\sqrt{9x^2 + 4}$ $= 3\sqrt{x^2 + \frac{4}{9}}$.`,
          t`So a root form gets $\frac{1}{3}$ in front, not $\frac{1}{9}$.`,
          t`Substitution says the same: put $u = 3x$, so $dx = \frac{du}{3}$ and the $\frac{1}{3}$ appears.`,
        ],
      },
      {
        title: "Any u in place of x",
        points: [
          t`Each form holds for any function $u$ in place of $x$, with $du$ in place of $dx$.`,
          t`For $\int \frac{e^x\,dx}{\sqrt{1 - e^{2x}}}$, put $u = e^x$, so $du = e^x\,dx$.`,
          t`It becomes $\int \frac{du}{\sqrt{1 - u^2}}$ $= \sin^{-1}(e^x) + c$.`,
          t`Check any answer by differentiating it: you must get the integrand back.`,
          t`Right answers may differ by a constant: $\log\left|3x + \sqrt{9x^2 + 4}\right|$ is $\log 3$ more than $\log\left|x + \sqrt{x^2 + \frac{4}{9}}\right|$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \frac{1}{4x^2 + 11}\,dx$.`,
      steps: [
        t`Take out the coefficient of $x^2$: $4x^2 + 11$ $= 4\left(x^2 + \frac{11}{4}\right)$.`,
        t`So $I = \frac{1}{4}\int \frac{dx}{x^2 + a^2}$ with $a = \frac{\sqrt{11}}{2}$.`,
        t`Use $\frac{1}{a}\tan^{-1}\frac{x}{a}$: $I = \frac{1}{4}\cdot\frac{2}{\sqrt{11}}\tan^{-1}\frac{2x}{\sqrt{11}} + c$.`,
        t`Simplify: $I = \frac{1}{2\sqrt{11}}\tan^{-1}\frac{2x}{\sqrt{11}} + c$.`,
      ],
      answer: t`$\frac{1}{2\sqrt{11}}\tan^{-1}\frac{2x}{\sqrt{11}} + c$`,
    },
    visualSpec: t`A slider changes $a$; the curve $y = \frac{1}{x^2 + a^2}$ and its antiderivative $\frac{1}{a}\tan^{-1}\frac{x}{a}$ change together, the antiderivative levelling off at $\pm\frac{\pi}{2a}$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Leaving out the $\frac{1}{a}$ (or $\frac{1}{2a}$) in front of the $\tan^{-1}$ and log forms, as if $\frac{d}{dx}\tan^{-1}\frac{x}{a} = \frac{1}{x^2 + a^2}$`,
      remediation: t`$\frac{d}{dx}\tan^{-1}\frac{x}{a} = \frac{a}{x^2 + a^2}$, so $\int \frac{dx}{x^2 + a^2}$ needs $\frac{1}{a}$ in front; the two log forms need $\frac{1}{2a}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M2",
      mistake: t`Putting $\frac{1}{a}$ in front of the square-root forms too, e.g. $\int \frac{dx}{\sqrt{a^2 - x^2}} = \frac{1}{a}\sin^{-1}\frac{x}{a}$`,
      remediation: t`The square-root forms have nothing in front: $\frac{d}{dx}\sin^{-1}\frac{x}{a}$ is already $\frac{1}{\sqrt{a^2 - x^2}}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M3",
      mistake: t`Writing $k^2x^2$ as $(kx)^2$ and using $kx$ as the variable, but never dividing by $k$ (treating $dx$ as $d(kx)$)`,
      remediation: t`With $u = kx$, $dx = \frac{du}{k}$, so the result is divided by $k$. Or take the coefficient of $x^2$ out first.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M4",
      mistake: t`Taking the coefficient of $x^2$ out of a square root whole: $\frac{1}{\sqrt{9x^2 + 4}} = \frac{1}{9}\cdot\frac{1}{\sqrt{x^2 + 4/9}}$`,
      remediation: t`Only its square root leaves the root: $\sqrt{9x^2 + 4} = 3\sqrt{x^2 + \frac{4}{9}}$, so $\frac{1}{3}$ goes in front.`,
      fallback: { kind: "ext", topic: "surds" },
    },
    {
      id: "C06-M5",
      mistake: t`Mixing up the two log forms: using $\frac{1}{2a}\log\left|\frac{x - a}{x + a}\right|$ for $a^2 - x^2$, or the other way round`,
      remediation: t`The square written first leads both brackets: $x^2 - a^2$ gives $\frac{x - a}{x + a}$, and $a^2 - x^2$ gives $\frac{a + x}{a - x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Reading $a^2$ as $a$: for $x^2 + 25$, taking $a = 25$ instead of $5$`,
      remediation: t`$a$ is the square root of the constant: $x^2 + 25 = x^2 + 5^2$, so $a = 5$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M1 and C06-M5 apply only to the forms without a root (C06-M5 only to the two log forms); C06-M2 and C06-M4 only to the square-root forms.",
    "C06-M3 and C06-M4 need a coefficient of x^2 other than 1 or -1; C06-M6 needs a != 1.",
    "Log-of-root options are written log|kx + sqrt(k^2 x^2 +- b)|, the book's cleared form; it differs from log|x + sqrt(x^2 +- a^2)| by a constant. Every option was checked by differentiating: only the key gives the integrand back.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (ii)" },
      stem: t`$\int \frac{1}{25 - 9x^2}\,dx =$`,
      verify: { kind: "value", inputs: { A: "-9", B: "25" }, params: { root: "no" } },
      options: [
        { key: "A", text: t`$\frac{1}{9}\log\left|\frac{5 + 3x}{5 - 3x}\right| + c$`, correct: false, misconceptionId: "C06-M1", value: "log(Abs((3*x + 5)/(3*x - 5)))/9" },
        { key: "B", text: t`$\frac{1}{10}\log\left|\frac{5 + 3x}{5 - 3x}\right| + c$`, correct: false, misconceptionId: "C06-M3", value: "log(Abs((3*x + 5)/(3*x - 5)))/10" },
        { key: "C", text: t`$\frac{1}{30}\log\left|\frac{3x - 5}{3x + 5}\right| + c$`, correct: false, misconceptionId: "C06-M5", value: "log(Abs((3*x - 5)/(3*x + 5)))/30" },
        { key: "D", text: t`$\frac{1}{30}\log\left|\frac{5 + 3x}{5 - 3x}\right| + c$`, correct: true, value: "log(Abs((3*x + 5)/(3*x - 5)))/30" },
      ],
      solution: {
        steps: [
          t`Take out $9$: $25 - 9x^2$ $= 9\left(\frac{25}{9} - x^2\right)$, so $a = \frac{5}{3}$.`,
          t`Use $\int \frac{dx}{a^2 - x^2}$ $= \frac{1}{2a}\log\left|\frac{a + x}{a - x}\right|$, with $\frac{1}{2a} = \frac{3}{10}$.`,
          t`$I = \frac{1}{9}\cdot\frac{3}{10}\log\left|\frac{5/3 + x}{5/3 - x}\right|$ $= \frac{1}{30}\log\left|\frac{5 + 3x}{5 - 3x}\right| + c$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (v)" },
      stem: t`For $4x^2 < 11$, $\int \frac{1}{\sqrt{11 - 4x^2}}\,dx =$`,
      verify: { kind: "value", inputs: { A: "-4", B: "11" }, params: { root: "yes" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}\sin^{-1}\frac{2x}{\sqrt{11}} + c$`, correct: true, value: "asin(2*sqrt(11)*x/11)/2" },
        { key: "B", text: t`$\frac{1}{\sqrt{11}}\sin^{-1}\frac{2x}{\sqrt{11}} + c$`, correct: false, misconceptionId: "C06-M2", value: "sqrt(11)*asin(2*sqrt(11)*x/11)/11" },
        { key: "C", text: t`$\sin^{-1}\frac{2x}{\sqrt{11}} + c$`, correct: false, misconceptionId: "C06-M3", value: "asin(2*sqrt(11)*x/11)" },
        { key: "D", text: t`$\frac{1}{4}\sin^{-1}\frac{2x}{\sqrt{11}} + c$`, correct: false, misconceptionId: "C06-M4", value: "asin(2*sqrt(11)*x/11)/4" },
      ],
      solution: {
        steps: [
          t`Take $4$ out under the root: $\sqrt{11 - 4x^2}$ $= 2\sqrt{\frac{11}{4} - x^2}$, so $a = \frac{\sqrt{11}}{2}$.`,
          t`$I = \frac{1}{2}\int \frac{dx}{\sqrt{a^2 - x^2}}$ $= \frac{1}{2}\sin^{-1}\frac{x}{a} + c$.`,
          t`$\frac{x}{a} = \frac{2x}{\sqrt{11}}$, so $I = \frac{1}{2}\sin^{-1}\frac{2x}{\sqrt{11}} + c$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/3.2B SolvedEx.3" },
      stem: t`For $3x^2 > 7$, $\int \frac{1}{\sqrt{3x^2 - 7}}\,dx =$`,
      verify: { kind: "value", inputs: { A: "3", B: "-7" }, params: { root: "yes" } },
      options: [
        { key: "A", text: t`$\frac{1}{\sqrt3}\log\left|\sqrt3\,x + \sqrt{3x^2 - 7}\right| + c$`, correct: true, value: "sqrt(3)*log(Abs(sqrt(3)*x + sqrt(3*x**2 - 7)))/3" },
        { key: "B", text: t`$\frac{1}{\sqrt7}\log\left|\sqrt3\,x + \sqrt{3x^2 - 7}\right| + c$`, correct: false, misconceptionId: "C06-M2", value: "sqrt(7)*log(Abs(sqrt(3)*x + sqrt(3*x**2 - 7)))/7" },
        { key: "C", text: t`$\frac{1}{3}\log\left|\sqrt3\,x + \sqrt{3x^2 - 7}\right| + c$`, correct: false, misconceptionId: "C06-M4", value: "log(Abs(sqrt(3)*x + sqrt(3*x**2 - 7)))/3" },
        { key: "D", text: t`$\frac{1}{\sqrt3}\log\left|3x + \sqrt{9x^2 - 49}\right| + c$`, correct: false, misconceptionId: "C06-M6", value: "sqrt(3)*log(Abs(3*x + sqrt(9*x**2 - 49)))/3" },
      ],
      solution: {
        steps: [
          t`$\sqrt{3x^2 - 7} = \sqrt{3}\sqrt{x^2 - \frac{7}{3}}$, so $\frac{1}{\sqrt3}$ comes out.`,
          t`$I = \frac{1}{\sqrt3}\log\left|x + \sqrt{x^2 - \frac{7}{3}}\right| + c$.`,
          t`Multiply inside the log by $\sqrt3$ (this only changes $c$): $I = \frac{1}{\sqrt3}\log\left|\sqrt3\,x + \sqrt{3x^2 - 7}\right| + c$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (i)" },
      stem: t`$\int \frac{1}{4x^2 - 3}\,dx =$`,
      verify: { kind: "value", inputs: { A: "4", B: "-3" }, params: { root: "no" } },
      options: [
        { key: "A", text: t`$\frac{1}{6}\log\left|\frac{4x - 3}{4x + 3}\right| + c$`, correct: false, misconceptionId: "C06-M6", value: "log(Abs((4*x - 3)/(4*x + 3)))/6" },
        { key: "B", text: t`$\frac{1}{4\sqrt3}\log\left|\frac{2x - \sqrt3}{2x + \sqrt3}\right| + c$`, correct: true, value: "sqrt(3)*log(Abs((2*x - sqrt(3))/(2*x + sqrt(3))))/12" },
        { key: "C", text: t`$\frac{1}{4}\log\left|\frac{2x - \sqrt3}{2x + \sqrt3}\right| + c$`, correct: false, misconceptionId: "C06-M1", value: "log(Abs((2*x - sqrt(3))/(2*x + sqrt(3))))/4" },
        { key: "D", text: t`$\frac{1}{4\sqrt3}\log\left|\frac{\sqrt3 + 2x}{\sqrt3 - 2x}\right| + c$`, correct: false, misconceptionId: "C06-M5", value: "sqrt(3)*log(Abs((2*x + sqrt(3))/(2*x - sqrt(3))))/12" },
      ],
      solution: {
        steps: [
          t`Take out $4$: $4x^2 - 3$ $= 4\left(x^2 - \frac{3}{4}\right)$, so $a = \frac{\sqrt3}{2}$.`,
          t`Use $\int \frac{dx}{x^2 - a^2}$ $= \frac{1}{2a}\log\left|\frac{x - a}{x + a}\right|$, with $\frac{1}{2a} = \frac{1}{\sqrt3}$.`,
          t`$I = \frac{1}{4}\cdot\frac{1}{\sqrt3}\log\left|\frac{2x - \sqrt3}{2x + \sqrt3}\right|$ $= \frac{1}{4\sqrt3}\log\left|\frac{2x - \sqrt3}{2x + \sqrt3}\right| + c$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (iii)" },
      stem: t`$\int \frac{1}{7 + 2x^2}\,dx =$`,
      verify: { kind: "value", inputs: { A: "2", B: "7" }, params: { root: "no" } },
      options: [
        { key: "A", text: t`$\frac{1}{\sqrt{14}}\tan^{-1}\frac{\sqrt2\,x}{\sqrt7} + c$`, correct: true, value: "sqrt(14)*atan(sqrt(14)*x/7)/14" },
        { key: "B", text: t`$\frac{1}{2}\tan^{-1}\frac{\sqrt2\,x}{\sqrt7} + c$`, correct: false, misconceptionId: "C06-M1", value: "atan(sqrt(14)*x/7)/2" },
        { key: "C", text: t`$\frac{1}{\sqrt7}\tan^{-1}\frac{\sqrt2\,x}{\sqrt7} + c$`, correct: false, misconceptionId: "C06-M3", value: "sqrt(7)*atan(sqrt(14)*x/7)/7" },
        { key: "D", text: t`$\frac{1}{7}\tan^{-1}\frac{2x}{7} + c$`, correct: false, misconceptionId: "C06-M6", value: "atan(2*x/7)/7" },
      ],
      solution: {
        steps: [
          t`Take out $2$: $7 + 2x^2$ $= 2\left(x^2 + \frac{7}{2}\right)$, so $a = \frac{\sqrt7}{\sqrt2}$.`,
          t`$I = \frac{1}{2}\cdot\frac{1}{a}\tan^{-1}\frac{x}{a}$ $= \frac{1}{2}\cdot\frac{\sqrt2}{\sqrt7}\tan^{-1}\frac{\sqrt2\,x}{\sqrt7}$.`,
          t`$\frac{\sqrt2}{2\sqrt7} = \frac{1}{\sqrt{14}}$, so $I = \frac{1}{\sqrt{14}}\tan^{-1}\frac{\sqrt2\,x}{\sqrt7} + c$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (iv)" },
      stem: t`$\int \frac{1}{\sqrt{3x^2 + 8}}\,dx =$`,
      verify: { kind: "value", inputs: { A: "3", B: "8" }, params: { root: "yes" } },
      options: [
        { key: "A", text: t`$\log\left|\sqrt3\,x + \sqrt{3x^2 + 8}\right| + c$`, correct: false, misconceptionId: "C06-M3", value: "log(Abs(sqrt(3)*x + sqrt(3*x**2 + 8)))" },
        { key: "B", text: t`$\frac{1}{\sqrt3}\log\left|3x + \sqrt{9x^2 + 64}\right| + c$`, correct: false, misconceptionId: "C06-M6", value: "sqrt(3)*log(Abs(3*x + sqrt(9*x**2 + 64)))/3" },
        { key: "C", text: t`$\frac{1}{\sqrt3}\log\left|\sqrt3\,x + \sqrt{3x^2 + 8}\right| + c$`, correct: true, value: "sqrt(3)*log(Abs(sqrt(3)*x + sqrt(3*x**2 + 8)))/3" },
        { key: "D", text: t`$\frac{1}{2\sqrt2}\log\left|\sqrt3\,x + \sqrt{3x^2 + 8}\right| + c$`, correct: false, misconceptionId: "C06-M2", value: "sqrt(2)*log(Abs(sqrt(3)*x + sqrt(3*x**2 + 8)))/4" },
      ],
      solution: {
        steps: [
          t`$\sqrt{3x^2 + 8} = \sqrt{3}\sqrt{x^2 + \frac{8}{3}}$, so $\frac{1}{\sqrt3}$ comes out.`,
          t`$I = \frac{1}{\sqrt3}\log\left|x + \sqrt{x^2 + \frac{8}{3}}\right| + c$.`,
          t`Multiply inside the log by $\sqrt3$ (this only changes $c$): $I = \frac{1}{\sqrt3}\log\left|\sqrt3\,x + \sqrt{3x^2 + 8}\right| + c$.`,
        ],
      },
    },
  ],
};
