import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Look at $\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$ $= \left(\frac{d^2y}{dx^2}\right)^{3/2}$. **Is its degree $\frac{3}{2}$?**`,
    reveal: t`No. A degree is read only once the equation is free of roots and fractional powers. Square both sides: $1 + \left(\frac{dy}{dx}\right)^2$ $= \left(\frac{d^2y}{dx^2}\right)^3$. The highest derivative, $\frac{d^2y}{dx^2}$, now has power $3$: order $2$, degree $3$.`,
  },
  explanation: {
    intuition: [
      t`A **differential equation** is an equation that contains derivatives, such as $\frac{dy}{dx}$ or $\frac{d^2y}{dx^2}$.`,
      t`Write $y'$ for $\frac{dy}{dx}$, $y''$ for $\frac{d^2y}{dx^2}$ and $y'''$ for $\frac{d^3y}{dx^3}$.`,
      t`Its **order** is the order of the highest derivative in it: an equation with $y''$ at the top has order $2$.`,
      t`Its **degree** is the power of that highest derivative: $(y'')^3 = 1 + y'$ has degree $3$.`,
      t`The degree is read only when no derivative is under a root, in a fractional power or in a denominator.`,
      t`If a derivative sits inside $\sin$, $\cos$, $\log$ or an exponential, the degree is **not defined**.`,
    ],
    formal: [
      {
        title: "Finding the order",
        points: [
          t`The **order** is the order of the highest derivative present in the equation.`,
          t`Look only at which derivatives appear; their powers do not change the order.`,
          t`$(y')^5 + y'' = 0$ has order $2$: $y''$ is higher than $y'$, whatever the power.`,
          t`Do not confuse $(y')^2$, the square of the first derivative, with $y''$, the second derivative.`,
          t`Every differential equation has a highest derivative, so the order is always defined.`,
        ],
      },
      {
        title: "Making the equation polynomial",
        points: [
          t`An equation is **polynomial in the derivatives** when each derivative has only whole-number powers.`,
          t`A derivative in a denominator: multiply both sides by it to clear the fraction.`,
          t`A root or fractional power: raise both sides to the power that removes it.`,
          t`$(y'')^{3/2} = 1 + y'$ squared gives $(y'')^3 = (1 + y')^2$.`,
          t`Simplify after clearing: terms that cancel can lower the power of the highest derivative.`,
        ],
      },
      {
        title: "Reading the degree",
        points: [
          t`The **degree** is the power of the highest-order derivative in that polynomial form.`,
          t`Only that derivative counts: powers of $x$, $y$ or lower derivatives do not.`,
          t`$(y''')^2 + (y')^7 + y^4 = 0$ has order $3$ and degree $2$.`,
          t`A degree is always a positive whole number, never $\frac{3}{2}$ or $\frac{1}{2}$.`,
        ],
      },
      {
        title: "When the degree is not defined",
        points: [
          t`If a derivative sits inside $\sin$, $\cos$, $\tan$, $\log$ or an exponential, no polynomial form exists.`,
          t`Then the degree is **not defined**, but the order still is.`,
          t`$y''' + e^{y'} = x$ has order $3$, and its degree is not defined.`,
          t`A function of $x$ alone is harmless: $y'' + y = \tan x$ has degree $1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the order and degree of $\frac{d^2y}{dx^2} + \frac{dy}{dx} + x$ $= \sqrt{1 + \frac{d^3y}{dx^3}}$.`,
      steps: [
        t`The highest derivative is $\frac{d^3y}{dx^3}$, so the order is $3$.`,
        t`It sits under a square root, so square both sides to clear the root.`,
        t`In the $y'$ notation this gives $(y'' + y' + x)^2 = 1 + y'''$.`,
        t`The square on the left holds only $y''$ and $y'$; $y'''$ appears to the power $1$.`,
      ],
      answer: t`Order $3$, degree $1$.`,
    },
    visualSpec: t`Drag a root or a power onto a derivative and watch the polynomial form, the order and the degree update.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Reads the degree off the equation as printed, before clearing roots, fractional powers or a derivative in a denominator.",
      remediation: "First make the equation polynomial in the derivatives: clear fractions, and raise both sides to remove roots. Then read the power of the highest derivative.",
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C01-M2",
      mistake: t`Takes the highest power of $y$ or of a lower derivative, instead of the power of the highest-order derivative.`,
      remediation: t`The degree is the power of the highest-order derivative only. Powers of $y$, $x$ or lower derivatives do not count.`,
      fallback: { kind: "ext", topic: "higher order derivatives" },
    },
    {
      id: "C01-M3",
      mistake: t`Ignores a derivative inside $\sin$, $\cos$, $\log$ or an exponential and reads the degree from the other terms.`,
      remediation: t`A derivative inside $\sin$, $\cos$, $\log$ or an exponential can never be written as a polynomial, so the degree is not defined.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Swaps the two: gives the power as the order and the highest derivative's order as the degree.",
      remediation: t`The order is which derivative is highest ($y''$ gives order $2$); the degree is the power on that derivative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Believes that when the degree is not defined, the order is not defined either.",
      remediation: "The order is always defined: it is just the highest derivative present. Only the degree can fail to exist.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Calls the degree not defined whenever $\sin$, $\cos$, $\log$ or an exponential appears, even of $x$ alone.`,
      remediation: t`Only a derivative inside such a function spoils the degree. A function of $x$ alone, like $\cos x$ or $e^x$, is just a coefficient.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M1 gives the key when the root or fraction holds only lower derivatives, or when clearing it does not change the top derivative's power (e.g. a root over $1 + y'''$ alone gives $1$ either way): diagnose it on items like Q1, Q3 and Q6.`,
    "C01-M4 gives the key whenever the order equals the degree; it only diagnoses where they differ.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.2 Ex.1 v)" },
      stem: t`The order and degree of the differential equation $$\frac{dy}{dx} + \frac{3xy}{\;\frac{dy}{dx}\;} = \cos x$$ are`,
      verify: { kind: "value", inputs: { L: "p1 + 3*x*y/p1", R: "cos(x)" } },
      options: [
        { key: "A", text: t`Order $1$, degree $2$`, correct: true, value: "(1, 2)" },
        { key: "B", text: t`Order $1$, degree $1$`, correct: false, misconceptionId: "C01-M1", value: "(1, 1)" },
        { key: "C", text: t`Order $2$, degree $1$`, correct: false, misconceptionId: "C01-M4", value: "(2, 1)" },
        { key: "D", text: t`Order $1$, degree not defined`, correct: false, misconceptionId: "C01-M6", value: "(1, not_defined)" },
      ],
      solution: {
        steps: [
          t`The only derivative is $\frac{dy}{dx}$, so the order is $1$.`,
          t`It sits in a denominator, so multiply both sides by $\frac{dy}{dx}$:`,
          t`$\left(\frac{dy}{dx}\right)^2 + 3xy = \cos x\,\frac{dy}{dx}$.`,
          t`The power of $\frac{dy}{dx}$ is now $2$, and $\cos x$ involves $x$ alone: order $1$, degree $2$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc II Q.1 v)" },
      stem: t`The order and degree of the differential equation $$\frac{d^4y}{dx^4} + \sin\left(\frac{dy}{dx}\right) = 0$$ are`,
      verify: { kind: "value", inputs: { L: "p4 + sin(p1)", R: "0" } },
      options: [
        { key: "A", text: t`Order $4$, degree not defined`, correct: true, value: "(4, not_defined)" },
        { key: "B", text: t`Order $4$, degree $1$`, correct: false, misconceptionId: "C01-M3", value: "(4, 1)" },
        { key: "C", text: t`Order not defined, degree $4$`, correct: false, misconceptionId: "C01-M4", value: "(not_defined, 4)" },
        { key: "D", text: t`Neither the order nor the degree is defined`, correct: false, misconceptionId: "C01-M5", value: "(not_defined, not_defined)" },
      ],
      solution: {
        steps: [
          t`The highest derivative is $\frac{d^4y}{dx^4}$, so the order is $4$; the order is always defined.`,
          t`$\frac{dy}{dx}$ sits inside $\sin$, and no polynomial can express $\sin\left(\frac{dy}{dx}\right)$.`,
          t`So the degree is not defined: order $4$, degree not defined.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.2 Exercise 6.1 Q.1 viii)" },
      stem: t`The order and degree of the differential equation $$\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{\frac{3}{2}} = 8\,\frac{d^3y}{dx^3}$$ are`,
      verify: { kind: "value", inputs: { L: "(1 + p1**2)**Rational(3,2)", R: "8*p3" } },
      options: [
        { key: "A", text: t`Order $3$, degree $6$`, correct: false, misconceptionId: "C01-M2", value: "(3, 6)" },
        { key: "B", text: t`Order $2$, degree $3$`, correct: false, misconceptionId: "C01-M4", value: "(2, 3)" },
        { key: "C", text: t`Order $3$, degree $2$`, correct: true, value: "(3, 2)" },
        { key: "D", text: t`Order $3$, degree $1$`, correct: false, misconceptionId: "C01-M1", value: "(3, 1)" },
      ],
      solution: {
        steps: [
          t`The highest derivative is $\frac{d^3y}{dx^3}$, so the order is $3$.`,
          t`Square both sides to clear the power $\frac{3}{2}$:`,
          t`$\left[1 + \left(\frac{dy}{dx}\right)^2\right]^3$ $= 64\left(\frac{d^3y}{dx^3}\right)^2$.`,
          t`The power of $\frac{d^3y}{dx^3}$ is $2$; the $6$ on $\frac{dy}{dx}$ does not count. Order $3$, degree $2$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.2 Exercise 6.1 Q.1 i)" },
      stem: t`The order and degree of the differential equation $$\frac{d^2y}{dx^2} + x\,\frac{dy}{dx} + y^3 = 2\sin x$$ are`,
      verify: { kind: "value", inputs: { L: "p2 + x*p1 + y**3", R: "2*sin(x)" } },
      options: [
        { key: "A", text: t`Order $2$, degree $1$`, correct: true, value: "(2, 1)" },
        { key: "B", text: t`Order $2$, degree $3$`, correct: false, misconceptionId: "C01-M2", value: "(2, 3)" },
        { key: "C", text: t`Order $1$, degree $2$`, correct: false, misconceptionId: "C01-M4", value: "(1, 2)" },
        { key: "D", text: t`Order $2$, degree not defined`, correct: false, misconceptionId: "C01-M6", value: "(2, not_defined)" },
      ],
      solution: {
        steps: [
          t`The highest derivative is $\frac{d^2y}{dx^2}$, so the order is $2$.`,
          t`The equation is already polynomial in the derivatives; $\sin x$ involves $x$ alone.`,
          t`$\frac{d^2y}{dx^2}$ has power $1$; the cube is on $y$, which does not count. Order $2$, degree $1$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.2 Exercise 6.1 Q.1 vii)" },
      stem: t`The order and degree of the differential equation $$\left(\frac{d^2y}{dx^2}\right)^2 + \cos\left(\frac{dy}{dx}\right) = 0$$ are`,
      verify: { kind: "value", inputs: { L: "p2**2 + cos(p1)", R: "0" } },
      options: [
        { key: "A", text: t`Order $2$, degree not defined`, correct: true, value: "(2, not_defined)" },
        { key: "B", text: t`Order $2$, degree $2$`, correct: false, misconceptionId: "C01-M3", value: "(2, 2)" },
        { key: "C", text: t`Order not defined, degree $2$`, correct: false, misconceptionId: "C01-M4", value: "(not_defined, 2)" },
        { key: "D", text: t`Neither the order nor the degree is defined`, correct: false, misconceptionId: "C01-M5", value: "(not_defined, not_defined)" },
      ],
      solution: {
        steps: [
          t`The highest derivative is $\frac{d^2y}{dx^2}$, so the order is $2$.`,
          t`$\frac{dy}{dx}$ sits inside $\cos$, so the equation has no polynomial form.`,
          t`The square on $\frac{d^2y}{dx^2}$ does not change that: order $2$, degree not defined.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.2 Exercise 6.1 Q.1 x)" },
      stem: t`The order and degree of the differential equation $$e^x + \frac{d^2y}{dx^2} = \sqrt{1 + \left(\frac{d^2y}{dx^2}\right)^2}$$ are`,
      verify: { kind: "value", inputs: { L: "exp(x) + p2", R: "sqrt(1 + p2**2)" } },
      options: [
        { key: "A", text: t`Order $1$, degree $2$`, correct: false, misconceptionId: "C01-M4", value: "(1, 2)" },
        { key: "B", text: t`Order $2$, degree not defined`, correct: false, misconceptionId: "C01-M6", value: "(2, not_defined)" },
        { key: "C", text: t`Order $2$, degree $1$`, correct: true, value: "(2, 1)" },
        { key: "D", text: t`Order $2$, degree $2$`, correct: false, misconceptionId: "C01-M1", value: "(2, 2)" },
      ],
      solution: {
        steps: [
          t`The highest derivative is $\frac{d^2y}{dx^2}$, so the order is $2$.`,
          t`Square both sides to clear the root:`,
          t`$e^{2x} + 2e^x\frac{d^2y}{dx^2} + \left(\frac{d^2y}{dx^2}\right)^2$ $= 1 + \left(\frac{d^2y}{dx^2}\right)^2$.`,
          t`The squares cancel: $e^{2x} + 2e^x\frac{d^2y}{dx^2} = 1$. With $e^x$ a function of $x$ alone: order $2$, degree $1$.`,
        ],
      },
    },
  ],
};
