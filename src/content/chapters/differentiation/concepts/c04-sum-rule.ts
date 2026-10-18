import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$(x^2)' = 2x$ and $(x^3)' = 3x^2$. **So is the derivative of $x^2 \cdot x^3$ equal to $2x \cdot 3x^2 = 6x^3$?**`,
    reveal: t`No. $x^2 \cdot x^3 = x^5$, whose derivative is $5x^4$. Derivatives split over a **sum**, term by term, but not over a product. So multiply out first, then differentiate.`,
  },
  explanation: {
    intuition: [
      t`The derivative tells you how fast a function changes as $x$ changes.`,
      t`If $y = u + v$, a small change in $x$ changes $y$ by the change in $u$ plus the change in $v$.`,
      t`So the rates add: $(u + v)' = u' + v'$, and likewise $(u - v)' = u' - v'$.`,
      t`Multiply a function by a fixed number $k$ and every change is $k$ times as big: $(ku)' = ku'$.`,
      t`A **constant**, a term with no $x$ in it, never changes, so its derivative is $0$.`,
      t`Products and quotients do not split this way: expand or divide first, to get a sum.`,
    ],
    formal: [
      {
        title: "The sum and difference rule",
        points: [
          t`Let $u$ and $v$ be functions of $x$ that have derivatives.`,
          t`**Sum rule:** $\frac{d}{dx}(u + v) = u' + v'$.`,
          t`**Difference rule:** $\frac{d}{dx}(u - v) = u' - v'$.`,
          t`From first principles, the difference quotient of $u + v$ is the one for $u$ plus the one for $v$.`,
          t`It works for any number of terms: differentiate **term by term**, one term at a time.`,
          t`Example: $(x^3 - \sin x)' = 3x^2 - \cos x$.`,
        ],
      },
      {
        title: "Constant multiples and constants",
        points: [
          t`A **constant multiple** is a fixed number $k$ times a function: $(ku)' = ku'$.`,
          t`Keep the number: $(5x^3)' = 5 \cdot 3x^2 = 15x^2$.`,
          t`Dividing by a number is a multiple too: $\frac{x^4}{4} = \frac{1}{4}x^4$.`,
          t`So $\left(\frac{x^4}{4}\right)' = \frac{1}{4} \cdot 4x^3$ $= x^3$.`,
          t`A constant term, like $7$ or $7^7$, has derivative $0$: it drops out.`,
          t`Watch the signs: $(-3\cos x)' = -3(-\sin x)$ $= 3\sin x$.`,
        ],
      },
      {
        title: "Expand or split first",
        points: [
          t`Derivatives do not split over a product: $(uv)' \ne u'v'$.`,
          t`Check: $x \cdot x = x^2$ has derivative $2x$, but $1 \cdot 1 = 1$.`,
          t`So **expand** a product or a squared bracket into a sum: $(x + 1)^2 = x^2 + 2x + 1$.`,
          t`Nor over a quotient: $\left(\frac{u}{v}\right)' \ne \frac{u'}{v'}$.`,
          t`With one term below, divide each term on top by it: $\frac{x^2 + 3}{x} = x + \frac{3}{x}$.`,
          t`Write roots as powers, $x\sqrt{x} = x^{\frac{3}{2}}$, then use the sum rule.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = (\sqrt{x} + 1)^2 + 3\sin x$ with respect to $x$.`,
      steps: [
        t`Expand the bracket first: $(\sqrt{x} + 1)^2 = x + 2\sqrt{x} + 1$.`,
        t`So $y = x + 2\sqrt{x} + 1 + 3\sin x$, a sum of four terms.`,
        t`Term by term: $(x)' = 1$, $(2\sqrt{x})' = 2 \cdot \frac{1}{2\sqrt{x}}$ $= \frac{1}{\sqrt{x}}$.`,
        t`The constant $1$ gives $0$, and $(3\sin x)' = 3\cos x$.`,
      ],
      answer: t`$\frac{dy}{dx} = 1 + \frac{1}{\sqrt{x}} + 3\cos x$`,
    },
    visualSpec: t`Two curves $u$ and $v$ and their sum $u + v$; drag a point along $x$ and the tangent slopes show the slope of $u + v$ is the slope of $u$ plus the slope of $v$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Differentiating a product factor by factor and multiplying: $(uv)' = u'v'$`,
      remediation: t`The sum rule does not carry over to products: $(uv)' \ne u'v'$. Expand the product into a sum of terms first, then differentiate term by term.`,
      fallback: { kind: "ext", topic: "expanding brackets" },
    },
    {
      id: "C04-M2",
      mistake: t`Differentiating the top and the bottom of a fraction separately: $\left(\frac{u}{v}\right)' = \frac{u'}{v'}$`,
      remediation: t`A quotient does not split into $\frac{u'}{v'}$. Simplify first: divide each term on top by a single-term denominator, or cancel a common factor, then differentiate term by term.`,
      fallback: { kind: "ext", topic: "simplifying algebraic fractions" },
    },
    {
      id: "C04-M3",
      mistake: t`Keeping the constant term: $(u + c)' = u' + c$`,
      remediation: t`A constant term never changes, so its derivative is $0$ and it drops out of $\frac{dy}{dx}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: t`Dropping a term's number in front: $(ku)' = u'$`,
      remediation: t`A constant multiple stays in front: $(ku)' = ku'$. Differentiate the function, then multiply by the same number.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Giving the function's value $f(a)$ when $f'(a)$ is asked`,
      remediation: t`$f'(a)$ is the value of the derivative at $a$. Differentiate first to get $f'(x)$, then put $x = a$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M6",
      mistake: t`Losing a sign when a subtracted term has a negative derivative: $(-\cos x)' = -\sin x$`,
      remediation: t`Keep the term's sign and multiply it by the derivative's sign: $-k$ times a negative derivative gives a plus, so $(-\cos x)' = \sin x$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M1 needs the product's factors (inputs u, w) and C04-M2 the fraction's top and bottom (inputs n, d); C04-M5 needs a point a.",
    "C04-M4 gives the key when every term's number in front is 1 or -1, and C04-M6 when no subtracted term has a negative derivative: draw diagnosing items from inputs with such terms.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Misc I Q8" },
      stem: t`If $f(x) = \frac{x^4}{4} + \frac{x^3}{3} + \frac{x^2}{2} + x + 1$, then $f'(1) =$`,
      verify: { kind: "value", inputs: { f: "x**4/4 + x**3/3 + x**2/2 + x + 1", a: "1" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C04-M4", value: "10" },
        { key: "B", text: t`$\frac{37}{12}$`, correct: false, misconceptionId: "C04-M5", value: "37/12" },
        { key: "C", text: t`$4$`, correct: true, value: "4" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C04-M3", value: "5" },
      ],
      solution: {
        steps: [
          t`Each term $\frac{x^n}{n}$ is $\frac{1}{n}$ times $x^n$, so its derivative is $\frac{1}{n} \cdot nx^{n-1} = x^{n-1}$.`,
          t`The constant $1$ gives $0$, so $f'(x) = x^3 + x^2 + x + 1$.`,
          t`$f'(1) = 1 + 1 + 1 + 1 = 4$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 II Q3" },
      stem: t`If $y = (x^2 + 2)^2$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "(x**2 + 2)**2", u: "x**2 + 2", w: "x**2 + 2" } },
      options: [
        { key: "A", text: t`$4x^2$`, correct: false, misconceptionId: "C04-M1", value: "4*x**2" },
        { key: "B", text: t`$4x^3 + 8x + 4$`, correct: false, misconceptionId: "C04-M3", value: "4*x*(x**2 + 2) + 4" },
        { key: "C", text: t`$4x^3 + 2x$`, correct: false, misconceptionId: "C04-M4", value: "4*x**3 + 2*x" },
        { key: "D", text: t`$4x^3 + 8x$`, correct: true, value: "4*x*(x**2 + 2)" },
      ],
      solution: {
        steps: [
          t`Expand first: $(x^2 + 2)^2 = x^4 + 4x^2 + 4$.`,
          t`Term by term: $(x^4)' = 4x^3$, $(4x^2)' = 8x$, $(4)' = 0$.`,
          t`So $\frac{dy}{dx} = 4x^3 + 8x$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`If $y = \frac{2x^3 - 5x - 4}{x}$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "(2*x**3 - 5*x - 4)/x", n: "2*x**3 - 5*x - 4", d: "x" } },
      options: [
        { key: "A", text: t`$2x + \frac{1}{x^2}$`, correct: false, misconceptionId: "C04-M4", value: "2*x + x**(-2)" },
        { key: "B", text: t`$4x - \frac{4}{x^2}$`, correct: false, misconceptionId: "C04-M6", value: "4*x - 4/x**2" },
        { key: "C", text: t`$4x + \frac{4}{x^2}$`, correct: true, value: "4*x + 4/x**2" },
        { key: "D", text: t`$6x^2 - 5$`, correct: false, misconceptionId: "C04-M2", value: "6*x**2 - 5" },
      ],
      solution: {
        steps: [
          t`Divide each term on top by $x$: $y = 2x^2 - 5 - \frac{4}{x}$.`,
          t`$(2x^2)' = 4x$ and $(-5)' = 0$.`,
          t`$\left(-\frac{4}{x}\right)' = -4\left(-\frac{1}{x^2}\right)$ $= \frac{4}{x^2}$.`,
          t`So $\frac{dy}{dx} = 4x + \frac{4}{x^2}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 III Q1" },
      stem: t`If $f(x) = x^2\sqrt{x} - \frac{6}{x} + 5$, then $f'(1) =$`,
      verify: { kind: "value", inputs: { f: "x**2*sqrt(x) - 6/x + 5", a: "1", u: "x**2", w: "sqrt(x)" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C04-M1", value: "7" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C04-M5", value: "0" },
        { key: "C", text: t`$-\frac{7}{2}$`, correct: false, misconceptionId: "C04-M6", value: "-7/2" },
        { key: "D", text: t`$\frac{17}{2}$`, correct: true, value: "17/2" },
      ],
      solution: {
        steps: [
          t`Write the product as one power: $x^2\sqrt{x} = x^{\frac{5}{2}}$.`,
          t`$f'(x) = \frac{5}{2}x^{\frac{3}{2}} + \frac{6}{x^2}$, since $\left(-\frac{6}{x}\right)' = \frac{6}{x^2}$ and $(5)' = 0$.`,
          t`$f'(1) = \frac{5}{2} + 6 = \frac{17}{2}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/9.2.4 SolvedEx.1(1)" },
      stem: t`If $y = 4x^{\frac{3}{2}} + \log x - 2\cos x + 9$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "4*x**(3/2) + log(x) - 2*cos(x) + 9" } },
      options: [
        { key: "A", text: t`$6\sqrt{x} + \frac{1}{x} - 2\sin x$`, correct: false, misconceptionId: "C04-M6", value: "6*sqrt(x) - 2*sin(x) + 1/x" },
        { key: "B", text: t`$6\sqrt{x} + \frac{1}{x} + 2\sin x$`, correct: true, value: "6*sqrt(x) + 2*sin(x) + 1/x" },
        { key: "C", text: t`$6\sqrt{x} + \frac{1}{x} + 2\sin x + 9$`, correct: false, misconceptionId: "C04-M3", value: "6*sqrt(x) + 2*sin(x) + 9 + 1/x" },
        { key: "D", text: t`$\frac{3}{2}\sqrt{x} + \frac{1}{x} + \sin x$`, correct: false, misconceptionId: "C04-M4", value: "3*sqrt(x)/2 + sin(x) + 1/x" },
      ],
      solution: {
        steps: [
          t`$(4x^{\frac{3}{2}})' = 4 \cdot \frac{3}{2}x^{\frac{1}{2}}$ $= 6\sqrt{x}$, and $(\log x)' = \frac{1}{x}$.`,
          t`$(-2\cos x)' = -2(-\sin x) = 2\sin x$, and $(9)' = 0$.`,
          t`So $\frac{dy}{dx} = 6\sqrt{x} + \frac{1}{x} + 2\sin x$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Misc I Q1" },
      stem: t`If $y = \frac{x - 4}{\sqrt{x} + 2}$, then the value of $\frac{dy}{dx}$ at $x = 4$ is`,
      verify: { kind: "value", inputs: { f: "(x - 4)/(sqrt(x) + 2)", a: "4", n: "x - 4", d: "sqrt(x) + 2" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}$`, correct: true, value: "1/4" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C04-M2", value: "4" },
        { key: "C", text: t`$-\frac{7}{4}$`, correct: false, misconceptionId: "C04-M3", value: "-7/4" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C04-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`Factor the top: $x - 4 = (\sqrt{x} - 2)(\sqrt{x} + 2)$.`,
          t`Cancel: $y = \sqrt{x} - 2$, so $\frac{dy}{dx} = \frac{1}{2\sqrt{x}}$.`,
          t`At $x = 4$: $\frac{1}{2 \cdot 2} = \frac{1}{4}$.`,
        ],
      },
    },
  ],
};
