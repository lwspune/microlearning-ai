import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`You can integrate $x$ and $\cos x$ on their own. **Is $\int x\cos x\,dx$ simply $\frac{x^2}{2}\sin x + c$?**`,
    reveal: t`No. Differentiate it: $\frac{d}{dx}\left(\frac{x^2}{2}\sin x\right)$ $= x\sin x + \frac{x^2}{2}\cos x$, not $x\cos x$. Running the product rule backwards gives the right method, integration by parts, and the answer $x\sin x + \cos x + c$.`,
  },
  explanation: {
    intuition: [
      t`The integral of a product is **not** the product of the integrals: $\int x\cos x\,dx \ne \frac{x^2}{2}\sin x$.`,
      t`Instead, run the **product rule** backwards: $\frac{d}{dx}(uw) = uw' + u'w$.`,
      t`Let $w = \int v\,dx$, so that $w' = v$; then $\frac{d}{dx}(uw) = uv + u'w$.`,
      t`Integrate both sides: $uw = \int uv\,dx + \int u'w\,dx$.`,
      t`So $\int uv\,dx = uw - \int u'w\,dx$: one factor is differentiated, the other integrated.`,
      t`This pays off when the new integral, $\int u'w\,dx$, is easier than the one you started with.`,
    ],
    formal: [
      {
        title: "The formula",
        points: [
          t`For a product of two functions $u$ and $v$: $\int u\,v\,dx = u\int v\,dx$ $- \int \left(u'\int v\,dx\right)dx$.`,
          t`$u$ is the factor you **differentiate**; $v$ is the factor you **integrate**.`,
          t`The first term is $u$ times $\int v\,dx$.`,
          t`Then **subtract** a new integral: $u'$ times $\int v\,dx$, integrated again.`,
          t`Leave out the constant inside $\int v\,dx$; add a single $+ c$ at the end.`,
          t`To check, differentiate your answer: you must get the integrand back.`,
        ],
      },
      {
        title: "Choosing u: LIATE",
        points: [
          t`Take as $u$ the factor whose type comes first in **LIATE**.`,
          t`L is **logarithmic**, like $\log x$; I is **inverse trigonometric**, like $\tan^{-1}x$.`,
          t`A is **algebraic**, like $x^2$; T is **trigonometric**, like $\sin x$; E is **exponential**, like $e^{2x}$.`,
          t`In $\int x e^{2x}\,dx$, A comes before E, so $u = x$: then $u' = 1$ and the new integral is easy.`,
          t`With $u = e^{2x}$ instead, you integrate $x$ to $\frac{x^2}{2}$: the power climbs and the new integral gets harder.`,
          t`Logs and inverse trig come first: their derivatives are simple, their integrals are not.`,
        ],
      },
      {
        title: "One function: take v = 1",
        points: [
          t`A lone $\log x$ or $\tan^{-1}x$ is a product with $1$: take $v = 1$, so $\int v\,dx = x$.`,
          t`$\int \log x\,dx = x\log x - \int \frac{1}{x}\cdot x\,dx$.`,
          t`So $\int \log x\,dx = x\log x - x + c$.`,
          t`Likewise $\int \tan^{-1}x\,dx$ $= x\tan^{-1}x - \int \frac{x}{1 + x^2}\,dx$.`,
          t`So $\int \tan^{-1}x\,dx$ $= x\tan^{-1}x - \frac{1}{2}\log(1 + x^2) + c$.`,
        ],
      },
      {
        title: "Using parts more than once",
        points: [
          t`With $u = x^2$, one round leaves $u' = 2x$ in the new integral: use parts on it again.`,
          t`$\int x^2 e^x\,dx = x^2 e^x - \int 2x e^x\,dx$.`,
          t`Again with $u = 2x$: $\int 2x e^x\,dx = 2xe^x - 2e^x$.`,
          t`So $\int x^2 e^x\,dx = x^2e^x - 2xe^x + 2e^x + c$.`,
          t`The minus in front of the second round flips its signs, so the terms alternate $+, -, +$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int x^2\,5^x\,dx$.`,
      steps: [
        t`LIATE: $x^2$ is algebraic and $5^x$ exponential, so $u = x^2$, $v = 5^x$, and $\int 5^x\,dx = \frac{5^x}{\log 5}$.`,
        t`$\int x^2\,5^x\,dx = \frac{x^2\,5^x}{\log 5}$ $- \frac{2}{\log 5}\int x\,5^x\,dx$.`,
        t`Parts again with $u = x$: $\int x\,5^x\,dx$ $= \frac{x\,5^x}{\log 5} - \frac{5^x}{(\log 5)^2}$.`,
        t`Put it back: the minus in front flips both of its signs.`,
      ],
      answer: t`$\int x^2\,5^x\,dx = \frac{x^2\,5^x}{\log 5}$ $- \frac{2x\,5^x}{(\log 5)^2}$ $+ \frac{2\cdot 5^x}{(\log 5)^3} + c$`,
    },
    visualSpec: t`Drag either factor of $\int x e^{2x}\,dx$ into the $u$ slot; the new integral $\int u'\left(\int v\,dx\right)dx$ appears beside it, green when it is simpler than the original and red when it is harder.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Integrates each factor on its own and multiplies: $\int uv\,dx = \int u\,dx \cdot \int v\,dx$`,
      remediation: t`The integral of a product is not the product of the integrals; differentiating such an answer does not give the integrand back. Use $\int uv\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M2",
      mistake: t`Writes the formula with a plus, like the product rule: $u\int v\,dx + \int\left(u'\int v\,dx\right)dx$`,
      remediation: t`The second integral is subtracted: $\int uv\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx$. It moved across the equals sign from the product rule.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Puts $u'v$, the product rule's term, in the second integral instead of $u'\int v\,dx$`,
      remediation: t`Inside the second integral, $u'$ multiplies $\int v\,dx$, the integral you have just found, not $v$ itself.`,
      fallback: { kind: "ext", topic: "product rule" },
    },
    {
      id: "C09-M4",
      mistake: t`Chooses $u$ against LIATE, such as the power of $x$ beside a log`,
      remediation: t`Choose $u$ by LIATE: log, inverse trig, algebraic, trig, exponential. Beside $\log x$, take $u = \log x$: its derivative $\frac{1}{x}$ cancels a power of $x$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "In repeated parts, keeps a minus on every later term",
      remediation: t`Each new round sits inside the bracket after a minus, so its signs flip: the terms alternate $+, -, +$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Writes the second term as $u'\int v\,dx$ without integrating it`,
      remediation: t`The second term is an integral still to be done, $\int\left(u'\int v\,dx\right)dx$: work it out before you write the answer.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C09-M4 (u against LIATE) shows only on step items, which ask for the integral left after one round: carried through, a wrong u can still reach the right answer. C09-Q4 is one.",
    t`C09-M6 gives the key when $u'\int v\,dx$ integrates to itself (as in $\int x e^x\,dx$), and C09-M3 and C09-M6 agree when $u' = 1$; draw diagnosing items from inputs where they differ.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 I (i)" },
      stem: t`For $x > 0$, $\int x^2\log x\,dx =$`,
      verify: { kind: "value", inputs: { u: "log(x)", v: "x**2" }, params: { mode: "full" } },
      options: [
        { key: "A", text: t`$\frac{x^3}{3}\log x - \frac{x^2}{2} + c$`, correct: false, misconceptionId: "C09-M3", value: "x**2*(2*x*log(x) - 3)/6" },
        { key: "B", text: t`$\frac{x^3}{3}\log x - \frac{x^2}{3} + c$`, correct: false, misconceptionId: "C09-M6", value: "x**2*(x*log(x) - 1)/3" },
        { key: "C", text: t`$\frac{x^3}{3}\log x - \frac{x^3}{9} + c$`, correct: true, value: "x**3*(3*log(x) - 1)/9" },
        { key: "D", text: t`$\frac{x^3}{3}\left(x\log x - x\right) + c$`, correct: false, misconceptionId: "C09-M1", value: "x**4*(log(x) - 1)/3" },
      ],
      solution: {
        steps: [
          t`LIATE puts $\log x$ before $x^2$: $u = \log x$, $v = x^2$, $\int v\,dx = \frac{x^3}{3}$.`,
          t`$\int x^2\log x\,dx = \frac{x^3}{3}\log x$ $- \int \frac{1}{x}\cdot\frac{x^3}{3}\,dx$.`,
          t`$\int \frac{x^2}{3}\,dx = \frac{x^3}{9}$, so the answer is $\frac{x^3}{3}\log x - \frac{x^3}{9} + c$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 I (ii)" },
      stem: t`$\int x^2\sin 3x\,dx =$`,
      verify: { kind: "value", inputs: { u: "x**2", v: "sin(3*x)" }, params: { mode: "full" } },
      options: [
        { key: "A", text: t`$-\frac{x^2\cos 3x}{3} + \frac{2x\sin 3x}{9}$ $+ \frac{2\cos 3x}{27} + c$`, correct: true, value: "-x**2*cos(3*x)/3 + 2*x*sin(3*x)/9 + 2*cos(3*x)/27" },
        { key: "B", text: t`$-\frac{x^2\cos 3x}{3} + \frac{2x\sin 3x}{9}$ $- \frac{2\cos 3x}{27} + c$`, correct: false, misconceptionId: "C09-M5", value: "-x**2*cos(3*x)/3 + 2*x*sin(3*x)/9 - 2*cos(3*x)/27" },
        { key: "C", text: t`$-\frac{x^2\cos 3x}{3} - \frac{2x\sin 3x}{9}$ $+ \frac{2\cos 3x}{27} + c$`, correct: false, misconceptionId: "C09-M2", value: "-x**2*cos(3*x)/3 - 2*x*sin(3*x)/9 + 2*cos(3*x)/27" },
        { key: "D", text: t`$-\frac{x^3\cos 3x}{9} + c$`, correct: false, misconceptionId: "C09-M1", value: "-x**3*cos(3*x)/9" },
      ],
      solution: {
        steps: [
          t`Algebraic before trig: $u = x^2$, $v = \sin 3x$, $\int v\,dx = -\frac{\cos 3x}{3}$.`,
          t`$\int x^2\sin 3x\,dx = -\frac{x^2\cos 3x}{3}$ $+ \frac{2}{3}\int x\cos 3x\,dx$.`,
          t`Parts again with $u = x$: $\int x\cos 3x\,dx$ $= \frac{x\sin 3x}{3} + \frac{\cos 3x}{9}$.`,
          t`So the answer is $-\frac{x^2\cos 3x}{3} + \frac{2x\sin 3x}{9}$ $+ \frac{2\cos 3x}{27} + c$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 I (iii)" },
      stem: t`$\int x\tan^{-1}x\,dx =$`,
      verify: { kind: "value", inputs: { u: "atan(x)", v: "x" }, params: { mode: "full" } },
      options: [
        { key: "A", text: t`$\frac{x^2 - 1}{2}\tan^{-1}x + \frac{x}{2} + c$`, correct: false, misconceptionId: "C09-M2", value: "x**2*atan(x)/2 + x/2 - atan(x)/2" },
        { key: "B", text: t`$\frac{x^2}{2}\tan^{-1}x$ $- \frac{1}{2}\log(1 + x^2) + c$`, correct: false, misconceptionId: "C09-M3", value: "x**2*atan(x)/2 - log(x**2 + 1)/2" },
        { key: "C", text: t`$\frac{x^2}{2}\tan^{-1}x$ $- \frac{x^2}{2(1 + x^2)} + c$`, correct: false, misconceptionId: "C09-M6", value: "x**2*((x**2 + 1)*atan(x) - 1)/(2*(x**2 + 1))" },
        { key: "D", text: t`$\frac{x^2 + 1}{2}\tan^{-1}x - \frac{x}{2} + c$`, correct: true, value: "x**2*atan(x)/2 - x/2 + atan(x)/2" },
      ],
      solution: {
        steps: [
          t`Inverse trig before algebraic: $u = \tan^{-1}x$, $v = x$, $\int v\,dx = \frac{x^2}{2}$.`,
          t`$\int x\tan^{-1}x\,dx = \frac{x^2}{2}\tan^{-1}x$ $- \frac{1}{2}\int \frac{x^2}{1 + x^2}\,dx$.`,
          t`$\frac{x^2}{1 + x^2} = 1 - \frac{1}{1 + x^2}$, so that integral is $x - \tan^{-1}x$.`,
          t`So the answer is $\frac{x^2}{2}\tan^{-1}x - \frac{x}{2}$ $+ \frac{1}{2}\tan^{-1}x$, that is $\frac{x^2 + 1}{2}\tan^{-1}x$ $- \frac{x}{2} + c$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 I (ix)" },
      stem: t`For $x > 0$, one round of integration by parts, with $u$ chosen by LIATE, turns $\int x^3\log x\,dx$ into $u\int v\,dx + \int g(x)\,dx$. Here $g(x) =$`,
      verify: { kind: "value", inputs: { u: "log(x)", v: "x**3" }, params: { mode: "step" } },
      options: [
        { key: "A", text: t`$-\frac{x^3}{4}$`, correct: true, value: "-x**3/4" },
        { key: "B", text: t`$\frac{x^3}{4}$`, correct: false, misconceptionId: "C09-M2", value: "x**3/4" },
        { key: "C", text: t`$-x^2$`, correct: false, misconceptionId: "C09-M3", value: "-x**2" },
        { key: "D", text: t`$-3x^2\left(x\log x - x\right)$`, correct: false, misconceptionId: "C09-M4", value: "3*x**3*(1 - log(x))" },
      ],
      solution: {
        steps: [
          t`LIATE puts $\log x$ before $x^3$: $u = \log x$, $v = x^3$, $\int v\,dx = \frac{x^4}{4}$.`,
          t`The formula gives $\frac{x^4}{4}\log x$ $- \int \frac{1}{x}\cdot\frac{x^4}{4}\,dx$.`,
          t`So $\int g(x)\,dx = -\int \frac{x^3}{4}\,dx$, and $g(x) = -\frac{x^3}{4}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 I (viii)" },
      stem: t`$\int x\sin^2 x\,dx =$`,
      verify: { kind: "value", inputs: { u: "x", v: "sin(x)**2" }, params: { mode: "full" } },
      options: [
        { key: "A", text: t`$\frac{x^2}{2} - \frac{x\sin 2x}{4} - \frac{x}{2}$ $+ \frac{\sin 2x}{4} + c$`, correct: false, misconceptionId: "C09-M3", value: "x**2/2 - x*sin(2*x)/4 - x/2 + sin(2*x)/4" },
        { key: "B", text: t`$\frac{3x^2}{4} - \frac{x\sin 2x}{4}$ $+ \frac{\cos 2x}{8} + c$`, correct: false, misconceptionId: "C09-M2", value: "3*x**2/4 - x*sin(2*x)/4 + cos(2*x)/8" },
        { key: "C", text: t`$\frac{x^2}{4} - \frac{x\sin 2x}{4}$ $- \frac{\cos 2x}{8} + c$`, correct: true, value: "x**2/4 - x*sin(2*x)/4 - cos(2*x)/8" },
        { key: "D", text: t`$\frac{x^3}{4} - \frac{x^2\sin 2x}{8} + c$`, correct: false, misconceptionId: "C09-M1", value: "x**2*(2*x - sin(2*x))/8" },
      ],
      solution: {
        steps: [
          t`Rewrite first: $\sin^2 x = \frac{1 - \cos 2x}{2}$, so $\int \sin^2 x\,dx = \frac{x}{2} - \frac{\sin 2x}{4}$.`,
          t`With $u = x$: $\int x\sin^2 x\,dx$ $= \frac{x^2}{2} - \frac{x\sin 2x}{4}$ $- \int\left(\frac{x}{2} - \frac{\sin 2x}{4}\right)dx$.`,
          t`That integral is $\frac{x^2}{4} + \frac{\cos 2x}{8}$.`,
          t`So the answer is $\frac{x^2}{4} - \frac{x\sin 2x}{4}$ $- \frac{\cos 2x}{8} + c$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc III Q.12" },
      stem: t`$\int \log(x^2 + 1)\,dx =$`,
      verify: { kind: "value", inputs: { u: "log(x**2 + 1)", v: "1" }, params: { mode: "full" } },
      options: [
        { key: "A", text: t`$x\log(x^2 + 1)$ $- \frac{2x^2}{x^2 + 1} + c$`, correct: false, misconceptionId: "C09-M6", value: "-x*(2*x - (x**2 + 1)*log(x**2 + 1))/(x**2 + 1)" },
        { key: "B", text: t`$x\log(x^2 + 1) - 2x$ $+ 2\tan^{-1}x + c$`, correct: true, value: "x*log(x**2 + 1) - 2*x + 2*atan(x)" },
        { key: "C", text: t`$x\log(x^2 + 1) + 2x$ $- 2\tan^{-1}x + c$`, correct: false, misconceptionId: "C09-M2", value: "x*log(x**2 + 1) + 2*x - 2*atan(x)" },
        { key: "D", text: t`$(x - 1)\log(x^2 + 1) + c$`, correct: false, misconceptionId: "C09-M3", value: "(x - 1)*log(x**2 + 1)" },
      ],
      solution: {
        steps: [
          t`One function: $u = \log(x^2 + 1)$, $v = 1$, so $\int v\,dx = x$.`,
          t`$\int \log(x^2 + 1)\,dx$ $= x\log(x^2 + 1) - \int \frac{2x^2}{x^2 + 1}\,dx$.`,
          t`$\frac{2x^2}{x^2 + 1} = 2 - \frac{2}{x^2 + 1}$, which integrates to $2x - 2\tan^{-1}x$.`,
          t`So the answer is $x\log(x^2 + 1) - 2x$ $+ 2\tan^{-1}x + c$.`,
        ],
      },
    },
  ],
};
