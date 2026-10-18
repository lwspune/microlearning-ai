import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`$\frac{x^3}{x}$ is just $x^2$, whose derivative is $2x$. **But the top's derivative over the bottom's is $\frac{3x^2}{1} = 3x^2$. Which is right?**`,
    reveal: t`$2x$ is right: a quotient does not split into $\frac{u'}{v'}$. The quotient rule, $\frac{vu' - uv'}{v^2}$, gives $\frac{x \cdot 3x^2 - x^3 \cdot 1}{x^2}$ $= \frac{2x^3}{x^2} = 2x$.`,
  },
  explanation: {
    intuition: [
      t`A **quotient** is one function divided by another, like $\frac{\sin x}{x}$.`,
      t`The top $u$ is the **numerator**; the bottom $v$ is the **denominator**.`,
      t`If the top grows, the fraction grows; if the bottom grows, the fraction shrinks.`,
      t`So the top's change counts with a plus, and the bottom's change with a minus.`,
      t`Dividing by the bottom twice, $v^2$, scales these changes to the fraction's size.`,
      t`The rule: $\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v^2}$, denominator first.`,
    ],
    formal: [
      {
        title: "The quotient rule",
        points: [
          t`Let $u$ and $v$ be functions of $x$ that have derivatives, with $v \ne 0$.`,
          t`**Quotient rule:** $\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v^2}$.`,
          t`In words: bottom times the top's derivative, minus top times the bottom's derivative.`,
          t`Then divide by the **square** of the bottom, $v^2$.`,
          t`**Denominator first:** the numerator starts with $v$, the denominator, times $u'$.`,
          t`It is proved from first principles, by putting two fractions over one denominator.`,
        ],
      },
      {
        title: "Check the order",
        points: [
          t`The order matters because of the minus sign: $vu' - uv'$ is not $uv' - vu'$.`,
          t`Swapping the two terms flips the sign of the whole answer.`,
          t`Test it on $\frac{1}{x}$: $u = 1$ and $v = x$, so $u' = 0$ and $v' = 1$.`,
          t`The rule gives $\frac{x \cdot 0 - 1 \cdot 1}{x^2}$ $= -\frac{1}{x^2}$, the standard result.`,
          t`Starting with $u$ instead gives $+\frac{1}{x^2}$, which is wrong.`,
        ],
      },
      {
        title: "Three traps",
        points: [
          t`Not top over bottom: $\left(\frac{u}{v}\right)' \ne \frac{u'}{v'}$.`,
          t`Check: $\frac{x^2}{x} = x$ has derivative $1$, but $\frac{2x}{1} = 2x$.`,
          t`Square the bottom: divide by $v^2$, not by $v$.`,
          t`The middle sign is a minus; the plus belongs to the product rule.`,
        ],
      },
      {
        title: "Using the rule",
        points: [
          t`Name the top $u$ and the bottom $v$.`,
          t`Find $u'$ and $v'$ from the standard derivatives.`,
          t`Write $vu' - uv'$, bottom first, and simplify it.`,
          t`Divide by $v^2$, and leave the denominator as a square.`,
          t`To find $\frac{dy}{dx}$ at a point, put in the value of $x$ at the end.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = \frac{e^x - 5}{e^x + 5}$ with respect to $x$.`,
      steps: [
        t`Name the parts: $u = e^x - 5$ and $v = e^x + 5$.`,
        t`Then $u' = e^x$ and $v' = e^x$.`,
        t`Denominator first: $vu' - uv'$ $= (e^x + 5)e^x - (e^x - 5)e^x$.`,
        t`$= e^{2x} + 5e^x - e^{2x} + 5e^x$ $= 10e^x$.`,
        t`Divide by $v^2$: $\frac{dy}{dx} = \frac{10e^x}{(e^x + 5)^2}$.`,
      ],
      answer: t`$\frac{dy}{dx} = \frac{10e^x}{(e^x + 5)^2}$`,
    },
    visualSpec: t`A curve $y = \frac{u}{v}$ with sliders for $u'$ and $v'$ at a point: raising $u'$ steepens the tangent, raising $v'$ flattens it, and the slope readout matches $\frac{vu' - uv'}{v^2}$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Starting the numerator with the top: $\left(\frac{u}{v}\right)' = \frac{uv' - vu'}{v^2}$`,
      remediation: t`The numerator starts with the denominator: $vu' - uv'$. Swapping the order flips the sign; check on $\frac{1}{x}$, whose derivative is $-\frac{1}{x^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Differentiating the top and the bottom separately: $\left(\frac{u}{v}\right)' = \frac{u'}{v'}$`,
      remediation: t`A quotient does not split into $\frac{u'}{v'}$. Use the quotient rule: $\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v^2}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M3",
      mistake: t`Dividing by $v$ instead of $v^2$: $\left(\frac{u}{v}\right)' = \frac{vu' - uv'}{v}$`,
      remediation: t`The quotient rule divides by the **square** of the bottom, $v^2$, not by $v$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Adding the two terms, as in the product rule: $\left(\frac{u}{v}\right)' = \frac{vu' + uv'}{v^2}$`,
      remediation: t`The quotient rule has a minus: $vu' - uv'$. A growing bottom makes the fraction smaller, so its term is subtracted.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Inputs u and v are the top and the bottom; at is the point when the item asks for dy/dx at a value of x.",
    "C06-M3 gives the key at a point where v = 1 (x = 1 in e^x/sqrt(x)) and equals C06-M1 where v = -1; C06-M2 needs v' nonzero; C06-M4 gives the key where u v' = 0: draw diagnosing items away from these.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Misc I Q2" },
      stem: t`If $y = \frac{ax + b}{cx + d}$, where $a, b, c, d$ are constants, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { u: "a*x + b", v: "c*x + d" } },
      options: [
        { key: "A", text: t`$\frac{bc - ad}{(cx + d)^2}$`, correct: false, misconceptionId: "C06-M1", value: "(-a*(c*x + d) + c*(a*x + b))/(c*x + d)**2" },
        { key: "B", text: t`$\frac{a}{c}$`, correct: false, misconceptionId: "C06-M2", value: "a/c" },
        { key: "C", text: t`$\frac{ad - bc}{cx + d}$`, correct: false, misconceptionId: "C06-M3", value: "(a*d - b*c)/(c*x + d)" },
        { key: "D", text: t`$\frac{ad - bc}{(cx + d)^2}$`, correct: true, value: "(a*(c*x + d) - c*(a*x + b))/(c*x + d)**2" },
      ],
      solution: {
        steps: [
          t`$u = ax + b$ and $v = cx + d$, so $u' = a$ and $v' = c$.`,
          t`Numerator: $vu' - uv'$ $= (cx + d)a - (ax + b)c$.`,
          t`$= acx + ad - acx - bc$ $= ad - bc$.`,
          t`So $\frac{dy}{dx} = \frac{ad - bc}{(cx + d)^2}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 IV Q1" },
      stem: t`If $y = \frac{x^2 + 3}{x^2 - 5}$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { u: "x**2 + 3", v: "x**2 - 5" } },
      options: [
        { key: "A", text: t`$-\frac{16x}{(x^2 - 5)^2}$`, correct: true, value: "-16*x/(x**2 - 5)**2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C06-M2", value: "1" },
        { key: "C", text: t`$-\frac{16x}{x^2 - 5}$`, correct: false, misconceptionId: "C06-M3", value: "-16*x/(x**2 - 5)" },
        { key: "D", text: t`$\frac{4x^3 - 4x}{(x^2 - 5)^2}$`, correct: false, misconceptionId: "C06-M4", value: "4*x*(x**2 - 1)/(x**2 - 5)**2" },
      ],
      solution: {
        steps: [
          t`$u = x^2 + 3$ and $v = x^2 - 5$, so $u' = v' = 2x$.`,
          t`Numerator: $(x^2 - 5)(2x) - (x^2 + 3)(2x)$.`,
          t`$= 2x(x^2 - 5 - x^2 - 3)$ $= -16x$.`,
          t`So $\frac{dy}{dx} = -\frac{16x}{(x^2 - 5)^2}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Misc I Q4" },
      stem: t`If $y = \frac{5\sin x - 2}{4\sin x + 3}$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { u: "5*sin(x) - 2", v: "4*sin(x) + 3" } },
      options: [
        { key: "A", text: t`$\frac{23\cos x}{(4\sin x + 3)^2}$`, correct: true, value: "23*cos(x)/(4*sin(x) + 3)**2" },
        { key: "B", text: t`$-\frac{23\cos x}{(4\sin x + 3)^2}$`, correct: false, misconceptionId: "C06-M1", value: "-23*cos(x)/(4*sin(x) + 3)**2" },
        { key: "C", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C06-M2", value: "5/4" },
        { key: "D", text: t`$\frac{40\sin x\cos x + 7\cos x}{(4\sin x + 3)^2}$`, correct: false, misconceptionId: "C06-M4", value: "(40*sin(x) + 7)*cos(x)/(4*sin(x) + 3)**2" },
      ],
      solution: {
        steps: [
          t`$u' = 5\cos x$ and $v' = 4\cos x$.`,
          t`Numerator: $(4\sin x + 3)(5\cos x)$ $- (5\sin x - 2)(4\cos x)$.`,
          t`$= 20\sin x\cos x + 15\cos x$ $- 20\sin x\cos x + 8\cos x$ $= 23\cos x$.`,
          t`So $\frac{dy}{dx} = \frac{23\cos x}{(4\sin x + 3)^2}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Misc II Q10" },
      stem: t`If $y = \frac{e^x}{\sqrt{x}}$, then the value of $\frac{dy}{dx}$ at $x = 1$ is`,
      verify: { kind: "value", inputs: { u: "exp(x)", v: "sqrt(x)", at: "1" } },
      options: [
        { key: "A", text: t`$\frac{3e}{2}$`, correct: false, misconceptionId: "C06-M4", value: "3*E/2" },
        { key: "B", text: t`$\frac{e}{2}$`, correct: true, value: "E/2" },
        { key: "C", text: t`$-\frac{e}{2}$`, correct: false, misconceptionId: "C06-M1", value: "-E/2" },
        { key: "D", text: t`$2e$`, correct: false, misconceptionId: "C06-M2", value: "2*E" },
      ],
      solution: {
        steps: [
          t`$u = e^x$ and $v = \sqrt{x}$, so $u' = e^x$ and $v' = \frac{1}{2\sqrt{x}}$.`,
          t`Numerator: $\sqrt{x}\,e^x - \frac{e^x}{2\sqrt{x}}$; denominator: $(\sqrt{x})^2 = x$.`,
          t`At $x = 1$: $\frac{e - \frac{e}{2}}{1} = \frac{e}{2}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 IV Q2" },
      stem: t`If $y = \frac{\sqrt{x} + 5}{\sqrt{x} - 5}$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { u: "sqrt(x) + 5", v: "sqrt(x) - 5" } },
      options: [
        { key: "A", text: t`$-\frac{5}{\sqrt{x}(\sqrt{x} - 5)^2}$`, correct: true, value: "-5/(sqrt(x)*(sqrt(x) - 5)**2)" },
        { key: "B", text: t`$\frac{5}{\sqrt{x}(\sqrt{x} - 5)^2}$`, correct: false, misconceptionId: "C06-M1", value: "5/(sqrt(x)*(sqrt(x) - 5)**2)" },
        { key: "C", text: t`$-\frac{5}{\sqrt{x}(\sqrt{x} - 5)}$`, correct: false, misconceptionId: "C06-M3", value: "5/(5*sqrt(x) - x)" },
        { key: "D", text: t`$\frac{1}{(\sqrt{x} - 5)^2}$`, correct: false, misconceptionId: "C06-M4", value: "(sqrt(x) - 5)**(-2)" },
      ],
      solution: {
        steps: [
          t`$u = \sqrt{x} + 5$ and $v = \sqrt{x} - 5$, so $u' = v' = \frac{1}{2\sqrt{x}}$.`,
          t`Both terms share $\frac{1}{2\sqrt{x}}$, times $(\sqrt{x} - 5) - (\sqrt{x} + 5)$ $= -10$.`,
          t`The numerator is $\frac{-10}{2\sqrt{x}} = -\frac{5}{\sqrt{x}}$.`,
          t`So $\frac{dy}{dx} = -\frac{5}{\sqrt{x}(\sqrt{x} - 5)^2}$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 IV Q6" },
      stem: t`If $y = \frac{5e^x - 4}{3e^x - 2}$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { u: "5*exp(x) - 4", v: "3*exp(x) - 2" } },
      options: [
        { key: "A", text: t`$\frac{2e^x}{3e^x - 2}$`, correct: false, misconceptionId: "C06-M3", value: "2*exp(x)/(3*exp(x) - 2)" },
        { key: "B", text: t`$\frac{30e^{2x} - 22e^x}{(3e^x - 2)^2}$`, correct: false, misconceptionId: "C06-M4", value: "(30*exp(x) - 22)*exp(x)/(3*exp(x) - 2)**2" },
        { key: "C", text: t`$\frac{2e^x}{(3e^x - 2)^2}$`, correct: true, value: "2*exp(x)/(3*exp(x) - 2)**2" },
        { key: "D", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C06-M2", value: "5/3" },
      ],
      solution: {
        steps: [
          t`$u = 5e^x - 4$ and $v = 3e^x - 2$, so $u' = 5e^x$ and $v' = 3e^x$.`,
          t`Numerator: $(3e^x - 2)5e^x$ $- (5e^x - 4)3e^x$.`,
          t`$= 15e^{2x} - 10e^x$ $- 15e^{2x} + 12e^x$ $= 2e^x$.`,
          t`So $\frac{dy}{dx} = \frac{2e^x}{(3e^x - 2)^2}$.`,
        ],
      },
    },
  ],
};
