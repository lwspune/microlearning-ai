import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`You know $\int \frac{dx}{x^2 + 1} = \tan^{-1}x + c$. **What is $\int \frac{dx}{x^2 + 2x + 2}$?**`,
    reveal: t`Write $x^2 + 2x + 2$ $= (x + 1)^2 + 1$. It is the same shape with $x + 1$ in place of $x$, so the answer is $\tan^{-1}(x + 1) + c$. Check: its derivative is $\frac{1}{(x + 1)^2 + 1}$, the integrand.`,
  },
  explanation: {
    intuition: [
      t`The standard forms fit $x^2 + a^2$, $x^2 - a^2$ and $a^2 - x^2$: none has an $x$ term.`,
      t`A middle term, like the $6x$ in $x^2 + 6x + 5$, spoils the match.`,
      t`**Completing the square** absorbs it into a square: $x^2 + 6x = (x + 3)^2 - 9$.`,
      t`So $x^2 + 6x + 5 = (x + 3)^2 - 4$, which is $u^2 - 2^2$ with $u = x + 3$.`,
      t`Since $du = dx$, the standard result works with $u$ in place of $x$.`,
      t`The answer is that standard result, written with $x + 3$ wherever it had $x$.`,
    ],
    formal: [
      {
        title: "Completing the square",
        points: [
          t`For $x^2 + bx$, halve the coefficient of $x$ and square it: $\left(\frac{b}{2}\right)^2$.`,
          t`Add and subtract it: $x^2 + bx + c$ $= \left(x + \frac{b}{2}\right)^2 + c - \frac{b^2}{4}$.`,
          t`The $-\frac{b^2}{4}$ matters: $(x + 3)^2$ is $x^2 + 6x + 9$, not $x^2 + 6x$.`,
          t`The bracket takes the sign of the $x$ term: $x^2 - 4x$ gives $(x - 2)^2$.`,
          t`Example: $x^2 - 4x + 13$ $= (x - 2)^2 - 4 + 13$ $= (x - 2)^2 + 9$.`,
        ],
      },
      {
        title: "When a is not 1",
        points: [
          t`First take $a$ out of every term: $ax^2 + bx + c$ $= a\left[x^2 + \frac{b}{a}x + \frac{c}{a}\right]$.`,
          t`Then complete the square inside the bracket, where $x^2$ has coefficient $1$.`,
          t`In $\int \frac{dx}{a[\dots]}$ the factor stays in front as $\frac{1}{a}$.`,
          t`Under a root it comes out as $\frac{1}{\sqrt{a}}$, since $\sqrt{aQ} = \sqrt{a}\,\sqrt{Q}$.`,
          t`If $x^2$ has a minus sign, take out the minus too: $5 + 4x - x^2$ $= 9 - (x - 2)^2$.`,
        ],
      },
      {
        title: "Pick the standard form",
        points: [
          t`Completing the square leaves $(x + p)^2 + q^2$, $(x + p)^2 - q^2$ or $q^2 - (x + p)^2$.`,
          t`The sign of the number left over picks the row of the table.`,
          t`Put $u = x + p$; then $du = dx$, so the $dx$ needs no change.`,
          t`Use the standard result in $u$, then put $x + p$ back for every $u$.`,
          t`Example: $\int \frac{dx}{(x - 2)^2 + 3^2}$ $= \frac{1}{3}\tan^{-1}\left(\frac{x - 2}{3}\right) + c$.`,
          t`Check by differentiating: the derivative of the answer must be the integrand.`,
        ],
      },
      {
        title: "A quadratic after substitution",
        points: [
          t`A quadratic in $\tan x$, $\sin x$ or $e^x$ is handled the same way.`,
          t`Put $t = \tan x$, so $dt = \sec^2 x\,dx$, and complete the square in $t$.`,
          t`Example: $\int \frac{\sec^2 x\,dx}{\tan^2 x + 2\tan x + 5}$ $= \int \frac{dt}{(t + 1)^2 + 2^2}$.`,
          t`This gives $\frac{1}{2}\tan^{-1}\left(\frac{t + 1}{2}\right) + c$ $= \frac{1}{2}\tan^{-1}\left(\frac{\tan x + 1}{2}\right) + c$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \dfrac{1}{3 - 10x - 25x^2}\,dx$.`,
      steps: [
        t`Take out $25$: $3 - 10x - 25x^2$ $= 25\left[\frac{3}{25} - \left(x^2 + \frac{2}{5}x\right)\right]$.`,
        t`Complete the square: $x^2 + \frac{2}{5}x$ $= \left(x + \frac{1}{5}\right)^2 - \frac{1}{25}$.`,
        t`So the bracket is $\frac{4}{25} - \left(x + \frac{1}{5}\right)^2$: the form $a^2 - u^2$ with $a = \frac{2}{5}$, $u = x + \frac{1}{5}$.`,
        t`$\int \frac{du}{a^2 - u^2} = \frac{1}{2a}\log\left|\frac{a + u}{a - u}\right|$, and $\frac{1}{25} \cdot \frac{1}{2a} = \frac{1}{20}$.`,
        t`$\frac{a + u}{a - u} = \frac{x + \frac{3}{5}}{\frac{1}{5} - x}$ $= \frac{5x + 3}{1 - 5x}$, so $I = \frac{1}{20}\log\left|\frac{5x + 3}{1 - 5x}\right| + c$.`,
      ],
      answer: t`$\frac{1}{20}\log\left|\frac{5x + 3}{1 - 5x}\right| + c$`,
    },
    visualSpec: t`Drag $b$ in $x^2 + bx + c$ and watch the square $\left(x + \frac{b}{2}\right)^2$ and the number left over change, with the matching row of the table lighting up.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Adds $\left(\frac{b}{2}\right)^2$ to make the square but never subtracts it: $x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 + c$.`,
      remediation: t`$\left(x + \frac{b}{2}\right)^2$ already contains $\frac{b^2}{4}$, so take it away: the number left is $c - \frac{b^2}{4}$. Expand your square to check.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
    {
      id: "C07-M2",
      mistake: t`Completes the square, then writes the standard result with $x$ instead of $x + p$.`,
      remediation: t`The standard form is in $u = x + p$, so the answer is too: put $x + p$ wherever the standard result has $x$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M3",
      mistake: t`Takes $a$ out of a square root as $a$: $\sqrt{aQ} = a\sqrt{Q}$.`,
      remediation: t`$\sqrt{aQ} = \sqrt{a}\,\sqrt{Q}$, so the factor in front of the integral is $\frac{1}{\sqrt{a}}$, not $\frac{1}{a}$.`,
      fallback: { kind: "ext", topic: "surds" },
    },
    {
      id: "C07-M4",
      mistake: t`Uses the standard form for the other sign: $u^2 - q^2$ read as $u^2 + q^2$ (or the reverse), or $q^2 - u^2$ as $u^2 - q^2$.`,
      remediation: t`The sign of the number left after completing the square picks the row: $u^2 + q^2$, $u^2 - q^2$ and $q^2 - u^2$ each have their own result.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M5",
      mistake: t`Takes $a$ out of the quadratic, then loses it: no $\frac{1}{a}$ (or $\frac{1}{\sqrt{a}}$) in front.`,
      remediation: t`The factor you take out stays in front: $\int \frac{dx}{a[\dots]} = \frac{1}{a}\int \frac{dx}{[\dots]}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Gets the sign inside the bracket wrong: $x^2 - bx$ written as $\left(x + \frac{b}{2}\right)^2 - \dots$`,
      remediation: t`The bracket takes the sign of the $x$ term: $x^2 - 5x$ gives $\left(x - \frac{5}{2}\right)^2$, and $x^2 + 5x$ gives $\left(x + \frac{5}{2}\right)^2$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C07-M3 applies only to a root form with $a \ne 1$; C07-M5 only when $a \ne \pm 1$: draw items with such an $a$ to diagnose them.`,
    "C07-M1 can change which standard form applies (the number left over changes sign), so its option may use a different function from the key.",
    t`For $\int \frac{dx}{q^2 - u^2}$, C07-M4 gives exactly minus the key.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (x)" },
      stem: t`$\int \dfrac{1}{x^2 + 8x + 12}\,dx =$`,
      verify: { kind: "value", inputs: { a: "1", b: "8", c: "12" }, params: { kind: "recip" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}\log\left|\frac{x - 2}{x + 2}\right| + c$`, correct: false, misconceptionId: "C07-M2", value: "log(Abs((x - 2)/(x + 2)))/4" },
        { key: "B", text: t`$\frac{1}{2}\tan^{-1}\left(\frac{x + 4}{2}\right) + c$`, correct: false, misconceptionId: "C07-M4", value: "atan(x/2 + 2)/2" },
        { key: "C", text: t`$\frac{1}{4}\log\left|\frac{x + 2}{x + 6}\right| + c$`, correct: true, value: "log(Abs((x + 2)/(x + 6)))/4" },
        { key: "D", text: t`$\frac{1}{2\sqrt{3}}\tan^{-1}\left(\frac{x + 4}{2\sqrt{3}}\right) + c$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(3)*atan(sqrt(3)*(x + 4)/6)/6" },
      ],
      solution: {
        steps: [
          t`$x^2 + 8x + 12$ $= (x + 4)^2 - 16 + 12$ $= (x + 4)^2 - 2^2$.`,
          t`Use $\int \frac{du}{u^2 - a^2} = \frac{1}{2a}\log\left|\frac{u - a}{u + a}\right|$ with $u = x + 4$, $a = 2$.`,
          t`$I = \frac{1}{4}\log\left|\frac{x + 2}{x + 6}\right| + c$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (xi)" },
      stem: t`$\int \dfrac{1}{1 + x - x^2}\,dx =$`,
      verify: { kind: "value", inputs: { a: "-1", b: "1", c: "1" }, params: { kind: "recip" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}\log\left|\frac{2x + 1}{3 - 2x}\right| + c$`, correct: false, misconceptionId: "C07-M1", value: "log(Abs((2*x + 1)/(2*x - 3)))/2" },
        { key: "B", text: t`$\frac{1}{\sqrt{5}}\log\left|\frac{2x - 1 - \sqrt{5}}{2x - 1 + \sqrt{5}}\right| + c$`, correct: false, misconceptionId: "C07-M4", value: "sqrt(5)*log(Abs((-2*x + 1 + sqrt(5))/(2*x - 1 + sqrt(5))))/5" },
        { key: "C", text: t`$\frac{1}{\sqrt{5}}\log\left|\frac{2x + 1 + \sqrt{5}}{\sqrt{5} - 2x - 1}\right| + c$`, correct: false, misconceptionId: "C07-M6", value: "sqrt(5)*log(Abs((2*x + 1 + sqrt(5))/(2*x - sqrt(5) + 1)))/5" },
        { key: "D", text: t`$\frac{1}{\sqrt{5}}\log\left|\frac{2x - 1 + \sqrt{5}}{1 + \sqrt{5} - 2x}\right| + c$`, correct: true, value: "sqrt(5)*log(Abs((2*x - 1 + sqrt(5))/(-2*x + 1 + sqrt(5))))/5" },
      ],
      solution: {
        steps: [
          t`$1 + x - x^2 = -\left(x^2 - x - 1\right)$ $= \frac{5}{4} - \left(x - \frac{1}{2}\right)^2$.`,
          t`This is $a^2 - u^2$ with $a = \frac{\sqrt{5}}{2}$, $u = x - \frac{1}{2}$; use $\frac{1}{2a}\log\left|\frac{a + u}{a - u}\right|$.`,
          t`$\frac{1}{2a} = \frac{1}{\sqrt{5}}$, and doubling top and bottom, $\frac{a + u}{a - u}$ $= \frac{2x - 1 + \sqrt{5}}{1 + \sqrt{5} - 2x}$.`,
          t`$I = \frac{1}{\sqrt{5}}\log\left|\frac{2x - 1 + \sqrt{5}}{1 + \sqrt{5} - 2x}\right| + c$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (xii)" },
      stem: t`$\int \dfrac{1}{4x^2 - 20x + 17}\,dx =$`,
      verify: { kind: "value", inputs: { a: "4", b: "-20", c: "17" }, params: { kind: "recip" } },
      options: [
        { key: "A", text: t`$\frac{1}{8\sqrt{2}}\log\left|\frac{2x + 5 - 2\sqrt{2}}{2x + 5 + 2\sqrt{2}}\right| + c$`, correct: false, misconceptionId: "C07-M6", value: "sqrt(2)*log(Abs((2*x - 2*sqrt(2) + 5)/(2*x + 2*sqrt(2) + 5)))/16" },
        { key: "B", text: t`$\frac{1}{8\sqrt{2}}\log\left|\frac{2x - 5 - 2\sqrt{2}}{2x - 5 + 2\sqrt{2}}\right| + c$`, correct: true, value: "sqrt(2)*log(Abs((-2*x + 2*sqrt(2) + 5)/(2*x - 5 + 2*sqrt(2))))/16" },
        { key: "C", text: t`$\frac{1}{2\sqrt{17}}\tan^{-1}\left(\frac{2x - 5}{\sqrt{17}}\right) + c$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(17)*atan(sqrt(17)*(2*x - 5)/17)/34" },
        { key: "D", text: t`$\frac{1}{2\sqrt{2}}\log\left|\frac{2x - 5 - 2\sqrt{2}}{2x - 5 + 2\sqrt{2}}\right| + c$`, correct: false, misconceptionId: "C07-M5", value: "sqrt(2)*log(Abs((-2*x + 2*sqrt(2) + 5)/(2*x - 5 + 2*sqrt(2))))/4" },
      ],
      solution: {
        steps: [
          t`$4x^2 - 20x + 17$ $= 4\left[x^2 - 5x + \frac{17}{4}\right]$ $= 4\left[\left(x - \frac{5}{2}\right)^2 - 2\right]$.`,
          t`So $I = \frac{1}{4}\int \frac{dx}{\left(x - \frac{5}{2}\right)^2 - (\sqrt{2})^2}$.`,
          t`$= \frac{1}{4} \cdot \frac{1}{2\sqrt{2}}\log\left|\frac{x - \frac{5}{2} - \sqrt{2}}{x - \frac{5}{2} + \sqrt{2}}\right|$.`,
          t`$I = \frac{1}{8\sqrt{2}}\log\left|\frac{2x - 5 - 2\sqrt{2}}{2x - 5 + 2\sqrt{2}}\right| + c$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (xvi)" },
      stem: t`$\int \dfrac{1}{\sqrt{8 - 3x + 2x^2}}\,dx =$`,
      verify: { kind: "value", inputs: { a: "2", b: "-3", c: "8" }, params: { kind: "root" } },
      options: [
        { key: "A", text: t`$\frac{1}{\sqrt{2}}\log\left|x - \frac{3}{4} + \sqrt{x^2 - \frac{3}{2}x + 4}\right| + c$`, correct: true, value: "sqrt(2)*log(Abs(4*x + 2*sqrt(2)*sqrt(2*x**2 - 3*x + 8) - 3)/4)/2" },
        { key: "B", text: t`$\frac{1}{\sqrt{2}}\log\left|x - \frac{3}{4} + \sqrt{x^2 - \frac{3}{2}x + \frac{73}{16}}\right| + c$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(2)*log(Abs(4*x + sqrt(16*x**2 - 24*x + 73) - 3)/4)/2" },
        { key: "C", text: t`$\frac{1}{2}\log\left|x - \frac{3}{4} + \sqrt{x^2 - \frac{3}{2}x + 4}\right| + c$`, correct: false, misconceptionId: "C07-M3", value: "log(Abs(4*x + 2*sqrt(2)*sqrt(2*x**2 - 3*x + 8) - 3)/4)/2" },
        { key: "D", text: t`$\log\left|x - \frac{3}{4} + \sqrt{x^2 - \frac{3}{2}x + 4}\right| + c$`, correct: false, misconceptionId: "C07-M5", value: "log(Abs(x + sqrt(x**2 - 3*x/2 + 4) - 3/4))" },
      ],
      solution: {
        steps: [
          t`$8 - 3x + 2x^2$ $= 2\left[x^2 - \frac{3}{2}x + 4\right]$, so $\frac{1}{\sqrt{2}}$ comes out of the root.`,
          t`$x^2 - \frac{3}{2}x + 4$ $= \left(x - \frac{3}{4}\right)^2 + \frac{55}{16}$: the form $u^2 + a^2$.`,
          t`$\int \frac{du}{\sqrt{u^2 + a^2}} = \log\left|u + \sqrt{u^2 + a^2}\right|$ with $u = x - \frac{3}{4}$.`,
          t`$I = \frac{1}{\sqrt{2}}\log\left|x - \frac{3}{4} + \sqrt{x^2 - \frac{3}{2}x + 4}\right| + c$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(B) I (xv)" },
      stem: t`For $x > 2$, $\int \dfrac{1}{\sqrt{x^2 + 8x - 20}}\,dx =$`,
      verify: { kind: "value", inputs: { a: "1", b: "8", c: "-20" }, params: { kind: "root" } },
      options: [
        { key: "A", text: t`$\log\left|x + \sqrt{x^2 - 36}\right| + c$`, correct: false, misconceptionId: "C07-M2", value: "log(Abs(x + sqrt(x**2 - 36)))" },
        { key: "B", text: t`$\log\left|x + 4 + \sqrt{x^2 + 8x + 52}\right| + c$`, correct: false, misconceptionId: "C07-M4", value: "log(Abs(x + sqrt(x**2 + 8*x + 52) + 4))" },
        { key: "C", text: t`$\log\left|x - 4 + \sqrt{x^2 - 8x - 20}\right| + c$`, correct: false, misconceptionId: "C07-M6", value: "log(Abs(x + sqrt(x**2 - 8*x - 20) - 4))" },
        { key: "D", text: t`$\log\left|x + 4 + \sqrt{x^2 + 8x - 20}\right| + c$`, correct: true, value: "log(Abs(x + sqrt(x**2 + 8*x - 20) + 4))" },
      ],
      solution: {
        steps: [
          t`$x^2 + 8x - 20$ $= (x + 4)^2 - 16 - 20$ $= (x + 4)^2 - 6^2$.`,
          t`Use $\int \frac{du}{\sqrt{u^2 - a^2}} = \log\left|u + \sqrt{u^2 - a^2}\right|$ with $u = x + 4$.`,
          t`$I = \log\left|x + 4 + \sqrt{x^2 + 8x - 20}\right| + c$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc III Q.16" },
      stem: t`Where $7 + 2\tan x - \tan^2 x > 0$, $\int \dfrac{\sec^2 x}{\sqrt{7 + 2\tan x - \tan^2 x}}\,dx =$`,
      verify: { kind: "value", inputs: { a: "-1", b: "2", c: "7", g: "tan(x)" }, params: { kind: "root" } },
      options: [
        { key: "A", text: t`$\sin^{-1}\left(\frac{\tan x - 1}{2\sqrt{2}}\right) + c$`, correct: true, value: "asin(sqrt(2)*(tan(x) - 1)/4)" },
        { key: "B", text: t`$\sin^{-1}\left(\frac{\tan x - 1}{\sqrt{7}}\right) + c$`, correct: false, misconceptionId: "C07-M1", value: "asin(sqrt(7)*(tan(x) - 1)/7)" },
        { key: "C", text: t`$\sin^{-1}\left(\frac{\tan x}{2\sqrt{2}}\right) + c$`, correct: false, misconceptionId: "C07-M2", value: "asin(sqrt(2)*tan(x)/4)" },
        { key: "D", text: t`$\log\left|\tan x - 1 + \sqrt{\tan^2 x - 2\tan x - 7}\right| + c$`, correct: false, misconceptionId: "C07-M4", value: "log(Abs(sqrt(tan(x)**2 - 2*tan(x) - 7) + tan(x) - 1))" },
      ],
      solution: {
        steps: [
          t`Put $t = \tan x$, $dt = \sec^2 x\,dx$: $I = \int \frac{dt}{\sqrt{7 + 2t - t^2}}$.`,
          t`$7 + 2t - t^2 = 8 - (t - 1)^2$ $= (2\sqrt{2})^2 - (t - 1)^2$.`,
          t`$\int \frac{du}{\sqrt{a^2 - u^2}} = \sin^{-1}\left(\frac{u}{a}\right)$ with $u = t - 1$, $a = 2\sqrt{2}$.`,
          t`$I = \sin^{-1}\left(\frac{\tan x - 1}{2\sqrt{2}}\right) + c$.`,
        ],
      },
    },
  ],
};
