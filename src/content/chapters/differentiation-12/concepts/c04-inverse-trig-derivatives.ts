import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`$y = \sin x$ has slope $\cos x$. **What is the slope of $y = \sin^{-1}x$ at $x = \frac{1}{2}$?**`,
    reveal: t`Turn it round: $x = \sin y$, so $\frac{dx}{dy} = \cos y$ and $\frac{dy}{dx} = \frac{1}{\cos y}$. At $x = \frac{1}{2}$, $y = \frac{\pi}{6}$, so the slope is $\frac{1}{\cos\frac{\pi}{6}} = \frac{2}{\sqrt{3}}$.`,
  },
  explanation: {
    intuition: [
      t`$\sin^{-1}x$ is the angle in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ whose sine is $x$.`,
      t`The $-1$ marks an **inverse**, not a power: $\sin^{-1}x \ne \frac{1}{\sin x}$.`,
      t`If $y = \sin^{-1}x$, then $x = \sin y$, so $\frac{dx}{dy} = \cos y$.`,
      t`The inverse function rule flips this: $\frac{dy}{dx} = \frac{1}{\cos y}$.`,
      t`For $y$ in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, $\cos y \ge 0$, so $\cos y = \sqrt{1 - x^2}$.`,
      t`So $\frac{d}{dx}\sin^{-1}x$ $= \frac{1}{\sqrt{1 - x^2}}$, for $-1 < x < 1$.`,
    ],
    formal: [
      {
        title: "Three standard results",
        points: [
          t`For $-1 < x < 1$: $\frac{d}{dx}\sin^{-1}x$ $= \frac{1}{\sqrt{1 - x^2}}$.`,
          t`For every real $x$: $\frac{d}{dx}\tan^{-1}x$ $= \frac{1}{1 + x^2}$.`,
          t`For $|x| > 1$: $\frac{d}{dx}\sec^{-1}x$ $= \frac{1}{|x|\sqrt{x^2 - 1}}$.`,
          t`Here $|x|$, the **modulus** of $x$, is $x$ without its sign: $|-3| = 3$.`,
          t`The modulus keeps the slope positive: $\sec^{-1}x$ rises on both of its pieces.`,
          t`Each result comes from the inverse function rule, just as $\sin^{-1}x$ did.`,
        ],
      },
      {
        title: "The co-functions take a minus",
        points: [
          t`The **co-functions** are $\cos^{-1}$, $\cot^{-1}$ and $\operatorname{cosec}^{-1}$.`,
          t`$\cos^{-1}x = \frac{\pi}{2} - \sin^{-1}x$, so its derivative is the negative.`,
          t`$\frac{d}{dx}\cos^{-1}x$ $= -\frac{1}{\sqrt{1 - x^2}}$, for $-1 < x < 1$.`,
          t`$\frac{d}{dx}\cot^{-1}x$ $= -\frac{1}{1 + x^2}$, for every real $x$.`,
          t`$\frac{d}{dx}\operatorname{cosec}^{-1}x$ $= -\frac{1}{|x|\sqrt{x^2 - 1}}$, for $|x| > 1$.`,
          t`So a function whose name starts with **co** gets a minus.`,
        ],
      },
      {
        title: "With the chain rule",
        points: [
          t`When the inside is a function $u$ of $x$, multiply by $\frac{du}{dx}$.`,
          t`$\frac{d}{dx}\sin^{-1}u$ $= \frac{1}{\sqrt{1 - u^2}} \cdot \frac{du}{dx}$.`,
          t`$\frac{d}{dx}\tan^{-1}u$ $= \frac{1}{1 + u^2} \cdot \frac{du}{dx}$.`,
          t`$\frac{d}{dx}\sec^{-1}u$ $= \frac{1}{|u|\sqrt{u^2 - 1}} \cdot \frac{du}{dx}$.`,
          t`Square the **whole** of $u$: for $u = x^4$, $1 - u^2 = 1 - x^8$.`,
          t`Example: $\frac{d}{dx}\tan^{-1}(x^2)$ $= \frac{1}{1 + x^4} \cdot 2x$ $= \frac{2x}{1 + x^4}$.`,
        ],
      },
      {
        title: "Four traps",
        points: [
          t`$\sin^{-1}u$ is not $(\sin u)^{-1}$: the derivative of $\operatorname{cosec}u$ has no place here.`,
          t`Don't stop at $\frac{1}{\sqrt{1 - u^2}}$: multiply by $\frac{du}{dx}$.`,
          t`Check the sign: only $\cos^{-1}$, $\cot^{-1}$ and $\operatorname{cosec}^{-1}$ carry a minus.`,
          t`Keep $|u|$ in front for $\sec^{-1}u$ and $\operatorname{cosec}^{-1}u$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = \sin^{-1}(2^x)$, $x < 0$, with respect to $x$.`,
      steps: [
        t`Let $u = 2^x$, so $\frac{du}{dx} = 2^x\log 2$.`,
        t`Standard result: $\frac{dy}{dx} = \frac{1}{\sqrt{1 - u^2}}$ $\cdot \frac{du}{dx}$.`,
        t`Square all of $u$: $u^2 = (2^x)^2 = 4^x$.`,
        t`So $\frac{dy}{dx} = \frac{2^x\log 2}{\sqrt{1 - 4^x}}$.`,
      ],
      answer: t`$\frac{dy}{dx} = \frac{2^x\log 2}{\sqrt{1 - 4^x}}$`,
    },
    visualSpec: t`A slider moves $x$ along $y = \sin^{-1}x$ from $-1$ to $1$; the tangent's slope readout matches $\frac{1}{\sqrt{1 - x^2}}$ and shoots up near the ends.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Stopping at the standard result: $\frac{d}{dx}\sin^{-1}u = \frac{1}{\sqrt{1 - u^2}}$, leaving out $\frac{du}{dx}$`,
      remediation: t`When the inside is a function $u$ of $x$, the chain rule multiplies the standard result by $\frac{du}{dx}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`Reading the $-1$ as a power, e.g. $\sin^{-1}u$ as $\frac{1}{\sin u} = \operatorname{cosec}u$, and differentiating that`,
      remediation: t`The $-1$ means inverse, not a power: $\sin^{-1}u$ is the angle whose sine is $u$. Use the inverse function's own result, times $\frac{du}{dx}$.`,
      fallback: { kind: "ext", topic: "inverse trigonometric functions" },
    },
    {
      id: "C04-M3",
      mistake: t`Getting the sign wrong: leaving the minus off $\cos^{-1}$, $\cot^{-1}$, $\operatorname{cosec}^{-1}$, or putting one on the others`,
      remediation: t`Only the co-functions, $\cos^{-1}$, $\cot^{-1}$ and $\operatorname{cosec}^{-1}$, have a minus in their derivative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Putting $u$ into the formula without squaring it: $1 - u$ in place of $1 - u^2$`,
      remediation: t`Replace $x$ by the whole of $u$, then square it: for $u = x^4$, $1 - u^2 = 1 - x^8$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Dropping the $|u|$ in front: $\frac{d}{dx}\sec^{-1}u = \frac{1}{\sqrt{u^2 - 1}} \cdot \frac{du}{dx}$`,
      remediation: t`$\sec^{-1}u$ and $\operatorname{cosec}^{-1}u$ keep $|u|$ in front: $\frac{1}{|u|\sqrt{u^2 - 1}} \cdot \frac{du}{dx}$, with a minus for $\operatorname{cosec}^{-1}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Input f is the function of x; a is the point when the item asks for dy/dx at a value of x.",
    "C04-M1 gives the key when u = x (du/dx = 1) and its model refuses then; C04-M5 applies only to sec^-1 and cosec^-1; C04-M4 is a slip of composite u, so draw it from items where u is not x.",
    "C04-Q4 option values are sympy's forms of the book's answers; they agree for x < 0, the item's domain.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.2.6 SolvedEx.2 (i)" },
      stem: t`If $y = \sin^{-1}(x^3)$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "asin(x**3)" } },
      options: [
        { key: "A", text: t`$-3x^2\operatorname{cosec}(x^3)\cot(x^3)$`, correct: false, misconceptionId: "C04-M2", value: "-3*x**2*cos(x**3)/sin(x**3)**2" },
        { key: "B", text: t`$\frac{3x^2}{\sqrt{1 - x^3}}$`, correct: false, misconceptionId: "C04-M4", value: "3*x**2/sqrt(1 - x**3)" },
        { key: "C", text: t`$\frac{3x^2}{\sqrt{1 - x^6}}$`, correct: true, value: "3*x**2/sqrt(1 - x**6)" },
        { key: "D", text: t`$\frac{1}{\sqrt{1 - x^6}}$`, correct: false, misconceptionId: "C04-M1", value: "1/sqrt(1 - x**6)" },
      ],
      solution: {
        steps: [
          t`$u = x^3$, so $\frac{du}{dx} = 3x^2$ and $u^2 = x^6$.`,
          t`$\frac{dy}{dx} = \frac{1}{\sqrt{1 - x^6}} \cdot 3x^2$.`,
          t`$= \frac{3x^2}{\sqrt{1 - x^6}}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.6 (iv)" },
      stem: t`If $y = \cot^{-1}(4^x)$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "acot(4**x)" } },
      options: [
        { key: "A", text: t`$\frac{4^x\log 4}{1 + 16^x}$`, correct: false, misconceptionId: "C04-M3", value: "4**x*log(4)/(16**x + 1)" },
        { key: "B", text: t`$-\frac{4^x\log 4}{1 + 4^x}$`, correct: false, misconceptionId: "C04-M4", value: "-4**x*log(4)/(4**x + 1)" },
        { key: "C", text: t`$4^x\log 4\sec^2(4^x)$`, correct: false, misconceptionId: "C04-M2", value: "4**x*log(4)/cos(4**x)**2" },
        { key: "D", text: t`$-\frac{4^x\log 4}{1 + 16^x}$`, correct: true, value: "-4**x*log(4)/(16**x + 1)" },
      ],
      solution: {
        steps: [
          t`$u = 4^x$, so $\frac{du}{dx} = 4^x\log 4$ and $u^2 = 16^x$.`,
          t`$\cot^{-1}$ is a co-function, so its result has a minus.`,
          t`$\frac{dy}{dx} = -\frac{1}{1 + 16^x} \cdot 4^x\log 4$ $= -\frac{4^x\log 4}{1 + 16^x}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.6 (i)" },
      stem: t`If $y = \tan^{-1}(\log x)$, $x > 0$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "atan(log(x))" } },
      options: [
        { key: "A", text: t`$-\frac{\operatorname{cosec}^2(\log x)}{x}$`, correct: false, misconceptionId: "C04-M2", value: "-1/(x*sin(log(x))**2)" },
        { key: "B", text: t`$-\frac{1}{x[1 + (\log x)^2]}$`, correct: false, misconceptionId: "C04-M3", value: "-1/(x*(log(x)**2 + 1))" },
        { key: "C", text: t`$\frac{1}{x[1 + (\log x)^2]}$`, correct: true, value: "1/(x*(log(x)**2 + 1))" },
        { key: "D", text: t`$\frac{1}{1 + (\log x)^2}$`, correct: false, misconceptionId: "C04-M1", value: "1/(log(x)**2 + 1)" },
      ],
      solution: {
        steps: [
          t`$u = \log x$, so $\frac{du}{dx} = \frac{1}{x}$.`,
          t`$\frac{dy}{dx} = \frac{1}{1 + (\log x)^2}$ $\cdot \frac{1}{x}$.`,
          t`$= \frac{1}{x[1 + (\log x)^2]}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.6 (ii)" },
      stem: t`If $y = \operatorname{cosec}^{-1}(e^{-x})$, $x < 0$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "acsc(exp(-x))" } },
      options: [
        { key: "A", text: t`$\frac{e^{-x}}{\sqrt{e^{-2x} - 1}}$`, correct: false, misconceptionId: "C04-M5", value: "1/sqrt(1 - exp(2*x))" },
        { key: "B", text: t`$-\frac{1}{\sqrt{e^{-2x} - 1}}$`, correct: false, misconceptionId: "C04-M3", value: "-exp(x)/sqrt(1 - exp(2*x))" },
        { key: "C", text: t`$-\frac{1}{e^{-x}\sqrt{e^{-2x} - 1}}$`, correct: false, misconceptionId: "C04-M1", value: "-exp(2*x)/sqrt(1 - exp(2*x))" },
        { key: "D", text: t`$\frac{1}{\sqrt{e^{-2x} - 1}}$`, correct: true, value: "exp(x)/sqrt(1 - exp(2*x))" },
      ],
      solution: {
        steps: [
          t`$u = e^{-x}$, so $\frac{du}{dx} = -e^{-x}$; $u > 0$, so $|u| = e^{-x}$.`,
          t`$\operatorname{cosec}^{-1}$ takes a minus: $\frac{dy}{dx} = \frac{-1}{e^{-x}\sqrt{e^{-2x} - 1}}$ $\cdot (-e^{-x})$.`,
          t`The minuses cancel, and so do the $e^{-x}$: $\frac{dy}{dx} = \frac{1}{\sqrt{e^{-2x} - 1}}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.2.6 SolvedEx.2 (ii)" },
      stem: t`If $y = \cos^{-1}(2x^2 - x)$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "acos(2*x**2 - x)" } },
      options: [
        { key: "A", text: t`$(4x - 1)\sec(2x^2 - x)\tan(2x^2 - x)$`, correct: false, misconceptionId: "C04-M2", value: "(4*x - 1)*sin(x*(2*x - 1))/cos(x*(2*x - 1))**2" },
        { key: "B", text: t`$\frac{1 - 4x}{\sqrt{1 - (2x^2 - x)^2}}$`, correct: true, value: "(1 - 4*x)/sqrt(-x**2*(2*x - 1)**2 + 1)" },
        { key: "C", text: t`$\frac{4x - 1}{\sqrt{1 - (2x^2 - x)^2}}$`, correct: false, misconceptionId: "C04-M3", value: "(4*x - 1)/sqrt(-x**2*(2*x - 1)**2 + 1)" },
        { key: "D", text: t`$-\frac{1}{\sqrt{1 - (2x^2 - x)^2}}$`, correct: false, misconceptionId: "C04-M1", value: "-1/sqrt(-x**2*(2*x - 1)**2 + 1)" },
      ],
      solution: {
        steps: [
          t`$u = 2x^2 - x$, so $\frac{du}{dx} = 4x - 1$.`,
          t`$\cos^{-1}$ takes a minus: $\frac{dy}{dx}$ $= \frac{-(4x - 1)}{\sqrt{1 - (2x^2 - x)^2}}$.`,
          t`$= \frac{1 - 4x}{\sqrt{1 - (2x^2 - x)^2}}$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.2 Q.6 (viii)" },
      stem: t`If $y = \sin^{-1}\left(x^{\frac{3}{2}}\right)$, then the value of $\frac{dy}{dx}$ at $x = \frac{1}{4}$ is`,
      verify: { kind: "value", inputs: { f: "asin(x**(3/2))", a: "1/4" } },
      options: [
        { key: "A", text: t`$\frac{2 \sqrt{7}}{7}$`, correct: true, value: "2*sqrt(7)/7" },
        { key: "B", text: t`$\frac{8 \sqrt{7}}{21}$`, correct: false, misconceptionId: "C04-M1", value: "8*sqrt(7)/21" },
        { key: "C", text: t`$\frac{3 \sqrt{14}}{14}$`, correct: false, misconceptionId: "C04-M4", value: "3*sqrt(14)/14" },
        { key: "D", text: t`$- \frac{2 \sqrt{7}}{7}$`, correct: false, misconceptionId: "C04-M3", value: "-2*sqrt(7)/7" },
      ],
      solution: {
        steps: [
          t`$u = x^{\frac{3}{2}}$, so $\frac{du}{dx} = \frac{3}{2}\sqrt{x}$ and $u^2 = x^3$.`,
          t`$\frac{dy}{dx} = \frac{3\sqrt{x}}{2\sqrt{1 - x^3}}$.`,
          t`At $x = \frac{1}{4}$: $\sqrt{x} = \frac{1}{2}$ and $\sqrt{1 - x^3} = \frac{3\sqrt{7}}{8}$.`,
          t`$\frac{dy}{dx} = \frac{3}{4} \cdot \frac{8}{3\sqrt{7}}$ $= \frac{2}{\sqrt{7}} = \frac{2\sqrt{7}}{7}$.`,
        ],
      },
    },
  ],
};
