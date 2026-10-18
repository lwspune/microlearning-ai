import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$\dfrac{dy}{dx} = xy$. You can't just integrate the right side with respect to $x$: it contains $y$, which you don't know yet. **So how do you start?**`,
    reveal: t`Divide by $y$ and multiply by $dx$: $\dfrac{dy}{y} = x\,dx$. Now each side holds only one variable, so integrate each side: $\log|y| = \dfrac{x^2}{2} + c$. That gives $y = Ae^{\frac{x^2}{2}}$, with $A$ an arbitrary constant.`,
  },
  explanation: {
    intuition: [
      t`An equation is **separable** when $\dfrac{dy}{dx}$ is a function of $x$ times a function of $y$.`,
      t`For example, $\dfrac{dy}{dx} = xy$ is $x$ times $y$.`,
      t`Divide by the $y$ part and multiply by $dx$: every $y$ goes left, every $x$ goes right.`,
      t`Then each side can be integrated on its own, the left in $y$, the right in $x$.`,
      t`The two integrals need only **one** arbitrary constant, a number left free, written on one side.`,
      t`A given condition, such as $y = 3$ when $x = 1$, then fixes that constant.`,
    ],
    formal: [
      {
        title: "Separating the variables",
        points: [
          t`**Variables separable** means the equation can be written as $\dfrac{dy}{dx} = f(x)\,g(y)$.`,
          t`Divide by $g(y)$, where $g(y) \ne 0$: $\dfrac{dy}{g(y)} = f(x)\,dx$.`,
          t`Integrate both sides: $\int \dfrac{dy}{g(y)}$ $= \int f(x)\,dx + c$.`,
          t`This gives $G(y) = F(x) + c$, the **general solution**, with one arbitrary constant $c$.`,
          t`Here $F$ is an antiderivative of $f(x)$, and $G$ one of $\dfrac{1}{g(y)}$.`,
        ],
      },
      {
        title: "Equations written with dx and dy",
        points: [
          t`Many questions come as $M\,dx + N\,dy = 0$, for example $x(1 - y^2)\,dx - y(1 + x^2)\,dy = 0$.`,
          t`Divide by the factors on the wrong side: here $(1 + x^2)(1 - y^2)$.`,
          t`This leaves $\dfrac{x\,dx}{1 + x^2} - \dfrac{y\,dy}{1 - y^2} = 0$.`,
          t`Now only $x$ sits with $dx$ and only $y$ with $dy$: integrate term by term.`,
          t`Moving a term across the $=$ sign changes its sign, so keep the minus.`,
        ],
      },
      {
        title: "Placing the constant",
        points: [
          t`When the integrals are logs, write the constant as $\log c$ too.`,
          t`From $\log y = \log x + \log c$ you get $y = cx$, not $y = x + c$.`,
          t`The reason: $e^{\log x + k} = e^k \cdot x$, so the constant becomes a factor.`,
          t`The same holds for $\tan^{-1}$: $\tan(A + c)$ is not $\tan A + c$.`,
          t`Safest route: find $c$ from the condition **before** you solve for $y$.`,
          t`Then put in the new value of $x$ and solve for $y$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $\sec^2 x \tan y\,dx + \sec^2 y \tan x\,dy = 0$, given $y = \frac{\pi}{4}$ when $x = \frac{\pi}{4}$. Find $y$ when $x = \frac{\pi}{6}$.`,
      steps: [
        t`Divide by $\tan x \tan y$: $\dfrac{\sec^2 x}{\tan x}dx + \dfrac{\sec^2 y}{\tan y}dy = 0$.`,
        t`In each term the top is the derivative of the bottom: $\log|\tan x| + \log|\tan y| = \log c$, so $\tan x \tan y = c$.`,
        t`At $x = y = \frac{\pi}{4}$: $1 \cdot 1 = c$, so $\tan x \tan y = 1$.`,
        t`At $x = \frac{\pi}{6}$: $\tan y = \dfrac{1}{\tan\frac{\pi}{6}} = \sqrt{3}$, so $y = \frac{\pi}{3}$.`,
      ],
      answer: t`$y = \frac{\pi}{3}$ when $x = \frac{\pi}{6}$.`,
    },
    visualSpec: t`Drag the condition point and watch which curve of the family $y = Ae^{\frac{x^2}{2}}$ passes through it.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Separates $\dfrac{dy}{dx} = f(x)\,g(y)$ by multiplying by $g(y)$: writes $g(y)\,dy = f(x)\,dx$.`,
      remediation: t`To separate, divide both sides by the $y$ part: $\dfrac{dy}{dx} = f(x)\,g(y)$ becomes $\dfrac{dy}{g(y)} = f(x)\,dx$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Solves $G(y) = F(x)$ for $y$ first and adds the constant afterwards, e.g. $\log y = \log x + c$ read as $y = x + c$.`,
      remediation: t`The constant goes in before you undo the log or $\tan^{-1}$: $e^{\log x + k} = e^k x$. Find $c$ from the condition first, then solve for $y$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: "Integrates both sides but leaves out the arbitrary constant, so the given condition is never used.",
      remediation: t`Integrating gives $G(y) = F(x) + c$ with one arbitrary constant; put the given values of $x$ and $y$ in to find $c$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: t`Moves a term of $M\,dx + N\,dy = 0$ across the equals sign without changing its sign.`,
      remediation: t`A term that crosses the $=$ sign changes sign: $M\,dx + N\,dy = 0$ gives $N\,dy = -M\,dx$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Swaps the condition: puts the given $x$ value in for $y$ and the given $y$ value in for $x$.`,
      remediation: t`The condition $y = b$ when $x = a$ means put $x = a$ and $y = b$ into the general solution; keep each value with its own variable.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M2 gives the key when $G(y)$ is just $y$ (e.g. $\dfrac{dy}{dx} = f(x)$); C04-M1 gives the key when $g(y)^2 = 1$. Diagnose them on items with a log or $\tan^{-1}$ in $G$.`,
    t`C04-M3 gives the key when the condition makes $c = 0$; draw diagnosing items where $c \ne 0$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.2 (iii)" },
      stem: t`Solve $y - x\dfrac{dy}{dx} = 0$, given that $y = 6$ when $x = 2$. What is $y$ when $x = 5$?`,
      verify: { kind: "value", inputs: { f: "1/x", g: "y", x0: "2", y0: "6", x1: "5" } },
      options: [
        { key: "A", text: t`$\frac{12}{5}$`, correct: false, misconceptionId: "C04-M4", value: "12/5" },
        { key: "B", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C04-M5", value: "5/3" },
        { key: "C", text: t`$15$`, correct: true, value: "15" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C04-M3", value: "5" },
      ],
      solution: {
        steps: [
          t`Separate: $x\dfrac{dy}{dx} = y$, so $\dfrac{dy}{y} = \dfrac{dx}{x}$.`,
          t`Integrate: $\log y = \log x + \log c$, so $y = cx$.`,
          t`$y = 6$ at $x = 2$ gives $c = 3$, so $y = 3x$.`,
          t`At $x = 5$: $y = 15$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.2 (i)" },
      stem: t`$\dfrac{dy}{dx} = \dfrac{1 + y^2}{1 + x^2}$, and $y = 1$ when $x = 0$. Find $y$ when $x = \frac{1}{2}$.`,
      verify: { kind: "value", inputs: { f: "1/(1+x**2)", g: "1+y**2", x0: "0", y0: "1", x1: "1/2" } },
      options: [
        { key: "A", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C04-M2", value: "3/2" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M3", value: "1/2" },
        { key: "C", text: t`$- \frac{1}{3}$`, correct: false, misconceptionId: "C04-M5", value: "-1/3" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`Separate: $\dfrac{dy}{1 + y^2} = \dfrac{dx}{1 + x^2}$.`,
          t`Integrate: $\tan^{-1} y = \tan^{-1} x + c$. At $x = 0$, $y = 1$: $c = \frac{\pi}{4}$.`,
          t`At $x = \frac{1}{2}$: $y = \tan\left(\tan^{-1}\frac{1}{2} + \frac{\pi}{4}\right)$.`,
          t`By $\tan(A + B)$: $y = \dfrac{\frac{1}{2} + 1}{1 - \frac{1}{2}} = 3$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/Misc II Q.5 ii)" },
      stem: t`Find the particular solution of $\dfrac{dy}{dx} = x^2y + y$ for which $y = 2$ when $x = 0$.`,
      verify: { kind: "value", inputs: { f: "x**2+1", g: "y", x0: "0", y0: "2" } },
      options: [
        { key: "A", text: t`$y = e^{\frac{x^3}{3} + x} + 1$`, correct: false, misconceptionId: "C04-M2", value: "exp(x*(x**2 + 3)/3) + 1" },
        { key: "B", text: t`$y = e^{\frac{x^3}{3} + x}$`, correct: false, misconceptionId: "C04-M3", value: "exp(x*(x**2 + 3)/3)" },
        { key: "C", text: t`$y = 2e^{\frac{x^3}{3} + x}$`, correct: true, value: "2*exp(x*(x**2 + 3)/3)" },
        { key: "D", text: t`$y = \sqrt{\frac{2x^3}{3} + 2x + 4}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(6*x**3 + 18*x + 36)/3" },
      ],
      solution: {
        steps: [
          t`Factor: $\dfrac{dy}{dx} = y(x^2 + 1)$, so $\dfrac{dy}{y} = (x^2 + 1)\,dx$.`,
          t`Integrate: $\log y = \dfrac{x^3}{3} + x + c$.`,
          t`At $x = 0$, $y = 2$: $c = \log 2$.`,
          t`So $y = e^{\log 2} \cdot e^{\frac{x^3}{3} + x}$ $= 2e^{\frac{x^3}{3} + x}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.3 (i)" },
      stem: t`$3e^x \tan y\,dx + (1 + e^x)\sec^2 y\,dy = 0$, and $y = \frac{\pi}{4}$ when $x = 0$. Find $\tan y$ when $x = \log 3$.`,
      verify: { kind: "value", inputs: { f: "-3*exp(x)/(1+exp(x))", g: "sin(y)*cos(y)", G: "log(tan(y))", x0: "0", y0: "pi/4", x1: "log(3)", w: "tan(y)" } },
      options: [
        { key: "A", text: t`$\frac{57}{64}$`, correct: false, misconceptionId: "C04-M2", value: "57/64" },
        { key: "B", text: t`$\frac{1}{64}$`, correct: false, misconceptionId: "C04-M3", value: "1/64" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C04-M4", value: "8" },
        { key: "D", text: t`$\frac{1}{8}$`, correct: true, value: "1/8" },
      ],
      solution: {
        steps: [
          t`Divide by $(1 + e^x)\tan y$: $\dfrac{3e^x}{1 + e^x}dx + \dfrac{\sec^2 y}{\tan y}dy = 0$.`,
          t`Integrate: $3\log(1 + e^x) + \log\tan y = \log c$, so $(1 + e^x)^3 \tan y = c$.`,
          t`At $x = 0$, $y = \frac{\pi}{4}$: $c = 2^3 \cdot 1 = 8$.`,
          t`At $x = \log 3$, $e^x = 3$: $4^3 \tan y = 8$, so $\tan y = \frac{1}{8}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.3 (iii)" },
      stem: t`$y(1 + \log x)\dfrac{dx}{dy} - x\log x = 0$, and $y = e^2$ when $x = e$. Find $y$ when $x = e^2$.`,
      verify: { kind: "value", inputs: { f: "(1+log(x))/(x*log(x))", g: "y", x0: "E", y0: "E**2", x1: "E**2" } },
      options: [
        { key: "A", text: t`$e$`, correct: false, misconceptionId: "C04-M5", value: "E" },
        { key: "B", text: t`$2 e^{3}$`, correct: true, value: "2*exp(3)" },
        { key: "C", text: t`$2 e^{2}$`, correct: false, misconceptionId: "C04-M3", value: "2*exp(2)" },
        { key: "D", text: t`$\frac{e}{2}$`, correct: false, misconceptionId: "C04-M4", value: "E/2" },
      ],
      solution: {
        steps: [
          t`Separate: $\dfrac{1 + \log x}{x\log x}dx = \dfrac{dy}{y}$.`,
          t`The left side integrates to $\log x + \log(\log x)$, so $\log y = \log x + \log(\log x)$ $+ \log c$.`,
          t`That is, $y = cx\log x$. At $x = e$, $y = e^2$: $e^2 = c \cdot e \cdot 1$, so $c = e$.`,
          t`At $x = e^2$: $y = e \cdot e^2 \cdot 2 = 2e^3$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/diff-equations-12/6.4 Exercise 6.3 Q.2 (v)" },
      stem: t`$\cos x\cos y\,dy - \sin x\sin y\,dx = 0$, and $y = \frac{\pi}{6}$ when $x = 0$. Find $\sin y$ when $x = \frac{\pi}{4}$.`,
      verify: { kind: "value", inputs: { f: "tan(x)", g: "tan(y)", x0: "0", y0: "pi/6", x1: "pi/4", w: "sin(y)" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{2}}{2}$`, correct: true, value: "sqrt(2)/2" },
        { key: "B", text: t`$\frac{\sqrt{10}}{4}$`, correct: false, misconceptionId: "C04-M1", value: "sqrt(10)/4" },
        { key: "C", text: t`$\sqrt{2} - \frac{1}{2}$`, correct: false, misconceptionId: "C04-M2", value: "-1/2 + sqrt(2)" },
        { key: "D", text: t`$\frac{\sqrt{2}}{4}$`, correct: false, misconceptionId: "C04-M4", value: "sqrt(2)/4" },
      ],
      solution: {
        steps: [
          t`Divide by $\cos x \sin y$: $\dfrac{\cos y}{\sin y}dy = \dfrac{\sin x}{\cos x}dx$.`,
          t`Integrate: $\log\sin y = -\log\cos x + \log c$, so $\sin y\cos x = c$.`,
          t`At $x = 0$, $y = \frac{\pi}{6}$: $c = \frac{1}{2}$.`,
          t`At $x = \frac{\pi}{4}$: $\sin y = \dfrac{1}{2} \div \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$.`,
        ],
      },
    },
  ],
};
