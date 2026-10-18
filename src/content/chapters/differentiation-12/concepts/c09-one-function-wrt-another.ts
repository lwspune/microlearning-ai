import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "draft",
  hook: {
    prompt: t`Let $u = x^6$ and $v = x^2$. **How fast does $u$ change as $v$ changes?** Hint: write $u$ in terms of $v$.`,
    reveal: t`$u = (x^2)^3 = v^3$, so $\frac{du}{dv} = 3v^2 = 3x^4$. Dividing the two rates with respect to $x$ gives the same: $\frac{6x^5}{2x} = 3x^4$.`,
  },
  explanation: {
    intuition: [
      t`Two quantities $u$ and $v$ can both depend on the same variable $x$.`,
      t`As $x$ changes, both change, so $u$ changes as $v$ changes.`,
      t`The **derivative of $u$ with respect to $v$**, $\frac{du}{dv}$, is the rate at which $u$ changes per unit change in $v$.`,
      t`Often $u$ is hard to write in terms of $v$, as with $u = 7^x$ and $v = x^7$.`,
      t`Then differentiate both with respect to $x$ and divide: $\frac{du}{dv} = \frac{du/dx}{dv/dx}$.`,
      t`It is the parametric rule again, with $x$ playing the part of the parameter $t$.`,
    ],
    formal: [
      {
        title: "Why the rule works",
        points: [
          t`Let $u = f(x)$ and $v = g(x)$ be differentiable, with $\frac{dv}{dx} \neq 0$.`,
          t`By the chain rule, $\frac{du}{dx} = \frac{du}{dv} \cdot \frac{dv}{dx}$.`,
          t`Divide both sides by $\frac{dv}{dx}$: $\frac{du}{dv} = \frac{du/dx}{dv/dx}$.`,
          t`So $\frac{du}{dv}$ is a quotient of two derivatives, never their product.`,
        ],
      },
      {
        title: "Which function goes on top",
        points: [
          t`In 'the derivative of $u$ with respect to $v$', $u$ is the function being differentiated.`,
          t`$v$, the function after **with respect to**, takes the place of the variable.`,
          t`Find $\frac{du}{dx}$ and $\frac{dv}{dx}$ separately, each by the usual rules.`,
          t`Put $u$'s derivative on top and $v$'s below.`,
          t`Stopping at $\frac{du}{dx}$ answers a different question: the rate with respect to $x$.`,
        ],
      },
      {
        title: "A first example",
        points: [
          t`Find the derivative of $7^x$ with respect to $x^7$.`,
          t`Let $u = 7^x$, so $\frac{du}{dx} = 7^x\log 7$.`,
          t`Let $v = x^7$, so $\frac{dv}{dx} = 7x^6$.`,
          t`Divide: $\frac{du}{dv} = \frac{7^x\log 7}{7x^6}$.`,
        ],
      },
      {
        title: "Simplify each function first",
        points: [
          t`Inverse trigonometric functions often get shorter after a substitution, so simplify $u$ and $v$ before differentiating.`,
          t`Take $u = \sin^{-1}\left(\frac{2x}{1 + x^2}\right)$ and $v = \cos^{-1}\left(\frac{1 - x^2}{1 + x^2}\right)$.`,
          t`Put $x = \tan\theta$: for $0 < x < 1$, both become $2\theta$ $= 2\tan^{-1}x$.`,
          t`So $u = v$ there, and $\frac{du}{dv} = 1$.`,
          t`For $-1 < x < 0$, $u$ is still $2\tan^{-1}x$ but $v = -2\tan^{-1}x$, so $\frac{du}{dv} = -1$.`,
          t`The answer depends on the range, so such a question states the range of $x$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the derivative of $\sin^2 x$ with respect to $e^{\cos x}$, where $\sin x \neq 0$.`,
      steps: [
        t`Let $u = \sin^2 x$ and $v = e^{\cos x}$; we need $\frac{du}{dv} = \frac{du/dx}{dv/dx}$.`,
        t`By the chain rule, $\frac{du}{dx} = 2\sin x\cos x$.`,
        t`By the chain rule, $\frac{dv}{dx} = e^{\cos x} \cdot (-\sin x)$ $= -\sin x\,e^{\cos x}$.`,
        t`Divide: $\frac{du}{dv} = \frac{2\sin x\cos x}{-\sin x\,e^{\cos x}}$ $= -2\cos x\,e^{-\cos x}$.`,
      ],
      answer: t`$\frac{du}{dv} = -2\cos x\,e^{-\cos x}$`,
    },
    visualSpec: t`A slider for $x$ that moves a point along the curve of $u$ against $v$ (here $v = x^2$, $u = x^6$), showing its slope $\frac{du}{dv}$ as the ratio of the two rates $\frac{du}{dx}$ and $\frac{dv}{dx}$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Turning the ratio upside down: $\frac{du}{dv} = \frac{dv/dx}{du/dx}$`,
      remediation: t`The function you differentiate goes on top: $\frac{du}{dv} = \frac{du/dx}{dv/dx}$, just as $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ for parametric functions.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: t`Multiplying the derivatives, as if it were the chain rule: $\frac{du}{dv} = \frac{du}{dx} \cdot \frac{dv}{dx}$`,
      remediation: t`The chain rule says $\frac{du}{dx} = \frac{du}{dv} \cdot \frac{dv}{dx}$, so $\frac{du}{dv}$ comes from dividing: $\frac{du}{dv} = \frac{du/dx}{dv/dx}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: t`Differentiating $u$ with respect to $x$ and stopping: $\frac{du}{dv} = \frac{du}{dx}$`,
      remediation: t`With respect to $v$ means $v$ is now the variable: divide $\frac{du}{dx}$ by $\frac{dv}{dx}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Dropping the minus sign in a derivative such as $\frac{d}{dx}\cos x = -\sin x$`,
      remediation: t`Keep the minus signs: $\frac{d}{dx}\cos x = -\sin x$, $\frac{d}{dx}\cos^{-1}x = -\frac{1}{\sqrt{1 - x^2}}$ and $\frac{d}{dx}\frac{1}{f} = -\frac{f'}{f^2}$.`,
      fallback: { kind: "ext", topic: "derivatives of standard functions" },
    },
  ],
  engineNotes: [
    "Inputs: u is the function differentiated, v the function it is differentiated with respect to, s a sample x in the stem's range (square roots of squares are opened with their sign there). params.neg names the function whose derivative carries a minus sign, for C09-M4.",
    "The key is sympy's du/dx divided by its dv/dx; each item's key was also checked against the difference quotient Δu/Δv at two points of the stated range.",
    "C09-M1 gives the key when du/dv = ±1 (e.g. Ex 1.4 Q.4 (ii)); C09-M3 gives the key when v = x; C09-M4 applies only where params.neg is set and then always gives the negative of the key.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.4 (i)" },
      stem: t`The derivative of $x\sin x$ with respect to $\tan x$ is`,
      verify: { kind: "value", inputs: { u: "x*sin(x)", v: "tan(x)", s: "1/2" } },
      options: [
        { key: "A", text: t`$(\sin x + x\cos x)\sec^2 x$`, correct: false, misconceptionId: "C09-M2", value: "(x + tan(x))/cos(x)" },
        { key: "B", text: t`$\sin x + x\cos x$`, correct: false, misconceptionId: "C09-M3", value: "x*cos(x) + sin(x)" },
        { key: "C", text: t`$(\sin x + x\cos x)\cos^2 x$`, correct: true, value: "(x*cos(x) + sin(x))*cos(x)**2" },
        { key: "D", text: t`$\frac{\sec^2 x}{\sin x + x\cos x}$`, correct: false, misconceptionId: "C09-M1", value: "1/((x*cos(x) + sin(x))*cos(x)**2)" },
      ],
      solution: {
        steps: [
          t`Let $u = x\sin x$, $v = \tan x$; by the product rule, $\frac{du}{dx} = \sin x + x\cos x$.`,
          t`$\frac{dv}{dx} = \sec^2 x$.`,
          t`$\frac{du}{dv} = \frac{\sin x + x\cos x}{\sec^2 x}$ $= (\sin x + x\cos x)\cos^2 x$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/1.4.3 SolvedEx.2" },
      stem: t`The derivative of $\cos^{-1}x$ with respect to $\sqrt{1 - x^2}$, where $0 < x < 1$, is`,
      verify: { kind: "value", inputs: { u: "acos(x)", v: "sqrt(1 - x**2)", s: "1/2" }, params: { neg: "u" } },
      options: [
        { key: "A", text: t`$\frac{1}{x}$`, correct: true, value: "1/x" },
        { key: "B", text: t`$x$`, correct: false, misconceptionId: "C09-M1", value: "x" },
        { key: "C", text: t`$\frac{x}{1 - x^2}$`, correct: false, misconceptionId: "C09-M2", value: "-x/(x**2 - 1)" },
        { key: "D", text: t`$-\frac{1}{x}$`, correct: false, misconceptionId: "C09-M4", value: "-1/x" },
      ],
      solution: {
        steps: [
          t`Let $u = \cos^{-1}x$: $\frac{du}{dx} = -\frac{1}{\sqrt{1 - x^2}}$.`,
          t`Let $v = \sqrt{1 - x^2}$: $\frac{dv}{dx} = \frac{-2x}{2\sqrt{1 - x^2}}$ $= -\frac{x}{\sqrt{1 - x^2}}$.`,
          t`Divide: the minus signs and $\sqrt{1 - x^2}$ cancel, so $\frac{du}{dv} = \frac{1}{x}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.4 (v)" },
      stem: t`The derivative of $3^x$ with respect to $\log_x 3$, where $x > 0$, $x \neq 1$, is`,
      verify: { kind: "value", inputs: { u: "3**x", v: "log(3)/log(x)", s: "2" }, params: { neg: "v" } },
      options: [
        { key: "A", text: t`$-\frac{3^x(\log 3)^2}{x(\log x)^2}$`, correct: false, misconceptionId: "C09-M2", value: "-3**x*log(3)**2/(x*log(x)**2)" },
        { key: "B", text: t`$3^x\log 3$`, correct: false, misconceptionId: "C09-M3", value: "3**x*log(3)" },
        { key: "C", text: t`$x \cdot 3^x(\log x)^2$`, correct: false, misconceptionId: "C09-M4", value: "3**x*x*log(x)**2" },
        { key: "D", text: t`$-x \cdot 3^x(\log x)^2$`, correct: true, value: "-3**x*x*log(x)**2" },
      ],
      solution: {
        steps: [
          t`Let $u = 3^x$: $\frac{du}{dx} = 3^x\log 3$.`,
          t`By the change of base, $v = \log_x 3 = \frac{\log 3}{\log x}$ $= \log 3\,(\log x)^{-1}$.`,
          t`$\frac{dv}{dx} = -\log 3\,(\log x)^{-2} \cdot \frac{1}{x}$ $= -\frac{\log 3}{x(\log x)^2}$.`,
          t`$\frac{du}{dv} = 3^x\log 3 \cdot \left(-\frac{x(\log x)^2}{\log 3}\right)$ $= -x \cdot 3^x(\log x)^2$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.4 (iii)" },
      stem: t`The derivative of $\tan^{-1}\left(\frac{x}{\sqrt{1 - x^2}}\right)$ with respect to $\sec^{-1}\left(\frac{1}{2x^2 - 1}\right)$, where $0 < x < \frac{1}{\sqrt{2}}$, is`,
      verify: { kind: "value", inputs: { u: "atan(x/sqrt(1 - x**2))", v: "asec(1/(2*x**2 - 1))", s: "1/2" }, params: { neg: "v" } },
      options: [
        { key: "A", text: t`$-\frac{1}{2}$`, correct: true, value: "-1/2" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C09-M1", value: "-2" },
        { key: "C", text: t`$-\frac{2}{1 - x^2}$`, correct: false, misconceptionId: "C09-M2", value: "2/(x**2 - 1)" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C09-M4", value: "1/2" },
      ],
      solution: {
        steps: [
          t`Put $x = \sin\theta$, $\theta$ in $(0, \frac{\pi}{4})$: $\frac{x}{\sqrt{1 - x^2}} = \tan\theta$, so $u = \sin^{-1}x$.`,
          t`$\sec^{-1}\left(\frac{1}{2x^2 - 1}\right) = \cos^{-1}(2x^2 - 1)$; put $x = \cos\phi$, $\phi$ in $(\frac{\pi}{4}, \frac{\pi}{2})$.`,
          t`Then $2x^2 - 1 = \cos 2\phi$ with $2\phi$ in $(\frac{\pi}{2}, \pi)$, so $v = 2\phi$ $= 2\cos^{-1}x$.`,
          t`$\frac{du}{dx} = \frac{1}{\sqrt{1 - x^2}}$ and $\frac{dv}{dx} = -\frac{2}{\sqrt{1 - x^2}}$, so $\frac{du}{dv} = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Ex 1.4 Q.4 (viii)" },
      stem: t`The derivative of $\tan^{-1}\left(\frac{\sqrt{1 + x^2} - 1}{x}\right)$ with respect to $\tan^{-1}\left(\frac{2x\sqrt{1 - x^2}}{1 - 2x^2}\right)$, where $0 < x < \frac{1}{\sqrt{2}}$, is`,
      verify: { kind: "value", inputs: { u: "atan((sqrt(1 + x**2) - 1)/x)", v: "atan(2*x*sqrt(1 - x**2)/(1 - 2*x**2))", s: "1/2" } },
      options: [
        { key: "A", text: t`$\frac{1}{(1 + x^2)\sqrt{1 - x^2}}$`, correct: false, misconceptionId: "C09-M2", value: "1/(sqrt(1 - x**2)*(x**2 + 1))" },
        { key: "B", text: t`$\frac{1}{2(1 + x^2)}$`, correct: false, misconceptionId: "C09-M3", value: "1/(2*(x**2 + 1))" },
        { key: "C", text: t`$\frac{\sqrt{1 - x^2}}{4(1 + x^2)}$`, correct: true, value: "sqrt(1 - x**2)/(4*(x**2 + 1))" },
        { key: "D", text: t`$\frac{4(1 + x^2)}{\sqrt{1 - x^2}}$`, correct: false, misconceptionId: "C09-M1", value: "4*(x**2 + 1)/sqrt(1 - x**2)" },
      ],
      solution: {
        steps: [
          t`Put $x = \tan\theta$: $\frac{\sqrt{1 + x^2} - 1}{x} = \frac{1 - \cos\theta}{\sin\theta}$ $= \tan\frac{\theta}{2}$, so $u = \frac{1}{2}\tan^{-1}x$.`,
          t`Put $x = \sin\phi$, $\phi$ in $(0, \frac{\pi}{4})$: the argument of $v$ is $\frac{\sin 2\phi}{\cos 2\phi}$, so $v = 2\sin^{-1}x$.`,
          t`$\frac{du}{dx} = \frac{1}{2(1 + x^2)}$ and $\frac{dv}{dx} = \frac{2}{\sqrt{1 - x^2}}$.`,
          t`$\frac{du}{dv} = \frac{1}{2(1 + x^2)} \cdot \frac{\sqrt{1 - x^2}}{2}$ $= \frac{\sqrt{1 - x^2}}{4(1 + x^2)}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/differentiation-12/Misc II Q.6 (ii)" },
      stem: t`The derivative of $\log\left(\frac{\sqrt{1 + x^2} + x}{\sqrt{1 + x^2} - x}\right)$ with respect to $\cos(\log x)$, where $x > 0$, $\sin(\log x) \neq 0$, is`,
      verify: { kind: "value", inputs: { u: "log((sqrt(1 + x**2) + x)/(sqrt(1 + x**2) - x))", v: "cos(log(x))", s: "2" }, params: { neg: "v" } },
      options: [
        { key: "A", text: t`$\frac{2x}{\sqrt{1 + x^2}\sin(\log x)}$`, correct: false, misconceptionId: "C09-M4", value: "2*x/(sqrt(x**2 + 1)*sin(log(x)))" },
        { key: "B", text: t`$-\frac{2x}{\sqrt{1 + x^2}\sin(\log x)}$`, correct: true, value: "-2*x/(sqrt(x**2 + 1)*sin(log(x)))" },
        { key: "C", text: t`$-\frac{\sqrt{1 + x^2}\sin(\log x)}{2x}$`, correct: false, misconceptionId: "C09-M1", value: "-sqrt(x**2 + 1)*sin(log(x))/(2*x)" },
        { key: "D", text: t`$\frac{2}{\sqrt{1 + x^2}}$`, correct: false, misconceptionId: "C09-M3", value: "2/sqrt(x**2 + 1)" },
      ],
      solution: {
        steps: [
          t`$(\sqrt{1 + x^2} + x)(\sqrt{1 + x^2} - x) = 1$, so $u = \log(\sqrt{1 + x^2} + x)^2$ $= 2\log(\sqrt{1 + x^2} + x)$.`,
          t`$\frac{du}{dx} = \frac{2}{\sqrt{1 + x^2} + x} \cdot \frac{x + \sqrt{1 + x^2}}{\sqrt{1 + x^2}}$ $= \frac{2}{\sqrt{1 + x^2}}$.`,
          t`Let $v = \cos(\log x)$: $\frac{dv}{dx} = -\frac{\sin(\log x)}{x}$.`,
          t`$\frac{du}{dv} = \frac{2}{\sqrt{1 + x^2}} \cdot \left(-\frac{x}{\sin(\log x)}\right)$ $= -\frac{2x}{\sqrt{1 + x^2}\sin(\log x)}$.`,
        ],
      },
    },
  ],
};
