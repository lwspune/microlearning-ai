import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`$(x)' = 1$ and $(\sin x)' = \cos x$. **So is the derivative of $x\sin x$ just $1 \cdot \cos x = \cos x$?**`,
    reveal: t`No. Both factors change, and each change counts: $(x\sin x)' = x\cos x + \sin x$. At $x = \pi$ that is $-\pi$, not $\cos\pi = -1$.`,
  },
  explanation: {
    intuition: [
      t`A **product** $uv$ is two functions of $x$ multiplied, like $x^2\sin x$.`,
      t`When $x$ changes, both factors change at the same time.`,
      t`Each factor's change counts, scaled by the size of the other factor.`,
      t`So $(uv)' = uv' + vu'$: two terms, joined by a plus.`,
      t`It is not $u'v'$: that multiplies the two changes and loses both factors.`,
      t`Check with $x \cdot x = x^2$: the rule gives $x + x = 2x$, which is right.`,
    ],
    formal: [
      {
        title: "Why the rule holds",
        points: [
          t`Picture $uv$ as the area of a rectangle with sides $u$ and $v$.`,
          t`When $x$ grows a little, $u$ grows by $\Delta u$, a small change: a strip of area $v\,\Delta u$ appears.`,
          t`And $v$ grows by $\Delta v$: a strip of area $u\,\Delta v$ appears on top.`,
          t`The corner $\Delta u\,\Delta v$ is a small change times a small change, so it vanishes in the limit.`,
          t`So the area grows by about $u\,\Delta v + v\,\Delta u$.`,
          t`Divide by $\Delta x$ and let $\Delta x \to 0$: $(uv)' = uv' + vu'$.`,
        ],
        figure: {
          alt: "A rectangle with sides u and v has area uv. When u grows by Δu and v by Δv, two strips appear, of areas v·Δu on the right and u·Δv on top, plus a tiny corner of area Δu·Δv.",
          axes: "none",
          view: { x: [-0.8, 6], y: [-0.9, 4.5] },
          elements: [
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [4, 0]] }, { kind: "halfPlane", through: [[4, 0], [4, 3]] }, { kind: "halfPlane", through: [[4, 3], [0, 3]] }, { kind: "halfPlane", through: [[0, 3], [0, 0]] }], tone: "muted", step: 1 },
            { kind: "label", at: [2, 1.3], label: "uv", labelAt: "n", step: 1 },
            { kind: "segment", from: [0, 0], to: [4, 0], label: "u", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [0, 3], label: "v", labelAt: "w", step: 1 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[4, 0], [5.2, 0]] }, { kind: "halfPlane", through: [[5.2, 0], [5.2, 3]] }, { kind: "halfPlane", through: [[5.2, 3], [4, 3]] }, { kind: "halfPlane", through: [[4, 3], [4, 0]] }], tone: "accent", step: 2 },
            { kind: "segment", from: [4, 0], to: [5.2, 0], label: "Δu", labelAt: "s", tone: "accent", step: 2 },
            { kind: "label", at: [4.6, 1.3], label: "v·Δu", labelAt: "n", tone: "accent", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 3], [4, 3]] }, { kind: "halfPlane", through: [[4, 3], [4, 3.9]] }, { kind: "halfPlane", through: [[4, 3.9], [0, 3.9]] }, { kind: "halfPlane", through: [[0, 3.9], [0, 3]] }], tone: "good", step: 3 },
            { kind: "segment", from: [0, 3], to: [0, 3.9], label: "Δv", labelAt: "w", tone: "good", step: 3 },
            { kind: "label", at: [2, 3.25], label: "u·Δv", labelAt: "n", tone: "good", step: 3 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[4, 3], [5.2, 3]] }, { kind: "halfPlane", through: [[5.2, 3], [5.2, 3.9]] }, { kind: "halfPlane", through: [[5.2, 3.9], [4, 3.9]] }, { kind: "halfPlane", through: [[4, 3.9], [4, 3]] }], tone: "bad", step: 4 },
            { kind: "label", at: [4.6, 3.25], label: "Δu·Δv", labelAt: "n", tone: "bad", step: 4 },
          ],
        },
      },
      {
        title: "The product rule",
        points: [
          t`Let $u$ and $v$ be functions of $x$ that have derivatives.`,
          t`**Product rule:** $\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$.`,
          t`In words: the first times the derivative of the second, plus the second times the derivative of the first.`,
          t`The order of the two terms does not matter, but both always carry a plus.`,
          t`Example: $(x^2\sin x)' = x^2\cos x + \sin x \cdot 2x$.`,
          t`A number in front is a constant multiple, not a factor to differentiate: $(5uv)' = 5(uv)'$.`,
        ],
      },
      {
        title: "Three factors, subtracted products",
        points: [
          t`For three factors, differentiate one factor at a time and keep the other two as they are.`,
          t`So $(uvw)' = u'vw + uv'w + uvw'$: three terms, one for each factor.`,
          t`A **subtracted product** is one with a minus in front, like $-x\cos x$.`,
          t`Find $(uv)'$ in a bracket first, then subtract the whole bracket.`,
          t`So $-(uv)' = -u'v - uv'$: both terms change sign.`,
          t`Example: $(-x\cos x)' = -(\cos x - x\sin x)$ $= -\cos x + x\sin x$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Differentiate $y = x^4\cos x - e^x\log x$ with respect to $x$.`,
      steps: [
        t`Two products: $x^4\cos x$, and $e^x\log x$ with a minus in front.`,
        t`$(x^4\cos x)' = x^4(-\sin x) + \cos x \cdot 4x^3$ $= 4x^3\cos x - x^4\sin x$.`,
        t`$(e^x\log x)' = e^x \cdot \frac{1}{x} + \log x \cdot e^x$ $= \frac{e^x}{x} + e^x\log x$.`,
        t`Subtract the whole bracket: $-\left(\frac{e^x}{x} + e^x\log x\right)$ $= -\frac{e^x}{x} - e^x\log x$.`,
      ],
      answer: t`$\frac{dy}{dx} = 4x^3\cos x - x^4\sin x$ $- \frac{e^x}{x} - e^x\log x$`,
    },
    visualSpec: t`A rectangle with sides $u$ and $v$; drag $x$ and watch the strips $v\,\Delta u$ and $u\,\Delta v$ grow while the corner $\Delta u\,\Delta v$ shrinks away.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Differentiating each factor and multiplying: $(uv)' = u'v'$`,
      remediation: t`The derivative of a product is not the product of the derivatives. Use the product rule, $(uv)' = uv' + vu'$: each term keeps one factor as it is.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M2",
      mistake: t`Keeping the first factor in front as if it were a constant: $(uv)' = uv'$`,
      remediation: t`Only a fixed number can stay in front untouched. Both factors change with $x$, so add the second term: $(uv)' = uv' + vu'$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C05-M3",
      mistake: t`Putting a minus in the rule, as in the quotient rule: $(uv)' = u'v - uv'$`,
      remediation: t`The product rule has a plus between its terms: $(uv)' = uv' + vu'$. The minus belongs to the quotient rule.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Changing the sign of only the first term of a subtracted product: $-(uv)' = -u'v + uv'$`,
      remediation: t`Find $(uv)' = u'v + uv'$ in a bracket first, then subtract the whole bracket: $-(uv)' = -u'v - uv'$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`Writing only two terms for a product of three factors: $(uvw)' = u'vw + uv'w$`,
      remediation: t`Each factor takes its turn to be differentiated, so three factors give three terms: $(uvw)' = u'vw + uv'w + uvw'$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "The models read each product from the inputs: u, w and sign k (default 1), a second product u2, w2, k2, and a three-factor product u, v, w.",
    t`C05-M3 and C05-M4 give the same answer on a lone subtracted product (both $-u'v + uv'$): to separate them, use an item that also has a positive product, as C05-Q5 does.`,
    t`C05-M1 and C05-M2 agree when the first factor is $e^x$ (then $u' = u$); C05-M4 needs a subtracted product and C05-M5 three factors.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 II Q1" },
      stem: t`If $y = x^5\tan x$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "x**5*tan(x)", u: "x**5", w: "tan(x)" } },
      options: [
        { key: "A", text: t`$5x^4\tan x - x^5\sec^2 x$`, correct: false, misconceptionId: "C05-M3", value: "x**4*(-x/cos(x)**2 + 5*tan(x))" },
        { key: "B", text: t`$5x^4\tan x + x^5\sec^2 x$`, correct: true, value: "x**4*(x + 5*sin(2*x)/2)/cos(x)**2" },
        { key: "C", text: t`$5x^4\sec^2 x$`, correct: false, misconceptionId: "C05-M1", value: "5*x**4/cos(x)**2" },
        { key: "D", text: t`$x^5\sec^2 x$`, correct: false, misconceptionId: "C05-M2", value: "x**5/cos(x)**2" },
      ],
      solution: {
        steps: [
          t`Take $u = x^5$ and $v = \tan x$, so $u' = 5x^4$ and $v' = \sec^2 x$.`,
          t`$\frac{dy}{dx} = uv' + vu'$ $= x^5\sec^2 x + 5x^4\tan x$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 III Q3" },
      stem: t`If $y = x^4 - x^2e^x$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "x**4 - x**2*exp(x)", u: "x**2", w: "exp(x)", k: "-1" } },
      options: [
        { key: "A", text: t`$4x^3 - 2xe^x$`, correct: false, misconceptionId: "C05-M1", value: "2*x*(2*x**2 - exp(x))" },
        { key: "B", text: t`$4x^3 - x^2e^x$`, correct: false, misconceptionId: "C05-M2", value: "x**2*(4*x - exp(x))" },
        { key: "C", text: t`$4x^3 - 2xe^x + x^2e^x$`, correct: false, misconceptionId: "C05-M4", value: "x*(4*x**2 + x*exp(x) - 2*exp(x))" },
        { key: "D", text: t`$4x^3 - 2xe^x - x^2e^x$`, correct: true, value: "x*(4*x**2 - x*exp(x) - 2*exp(x))" },
      ],
      solution: {
        steps: [
          t`$(x^4)' = 4x^3$, and $(x^2e^x)' = x^2e^x + e^x \cdot 2x$.`,
          t`Subtract the whole bracket: $\frac{dy}{dx} = 4x^3 - (x^2e^x + 2xe^x)$.`,
          t`So $\frac{dy}{dx} = 4x^3 - 2xe^x - x^2e^x$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 II Q2" },
      stem: t`If $y = x^3\log x$, then the value of $\frac{dy}{dx}$ at $x = e$ is`,
      verify: { kind: "value", inputs: { f: "x**3*log(x)", u: "x**3", w: "log(x)", a: "E" } },
      options: [
        { key: "A", text: t`$4e^2$`, correct: true, value: "4*exp(2)" },
        { key: "B", text: t`$3e$`, correct: false, misconceptionId: "C05-M1", value: "3*E" },
        { key: "C", text: t`$e^2$`, correct: false, misconceptionId: "C05-M2", value: "exp(2)" },
        { key: "D", text: t`$2e^2$`, correct: false, misconceptionId: "C05-M3", value: "2*exp(2)" },
      ],
      solution: {
        steps: [
          t`$\frac{dy}{dx} = x^3 \cdot \frac{1}{x} + \log x \cdot 3x^2$ $= x^2 + 3x^2\log x$.`,
          t`At $x = e$, $\log e = 1$: $e^2 + 3e^2 = 4e^2$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 II Q5" },
      stem: t`If $y = x^{\frac{3}{2}}e^x\log x$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "x**(3/2)*exp(x)*log(x)", u: "x**(3/2)", v: "exp(x)", w: "log(x)" } },
      options: [
        { key: "A", text: t`$\sqrt{x}e^x$`, correct: false, misconceptionId: "C05-M2", value: "sqrt(x)*exp(x)" },
        { key: "B", text: t`$\sqrt{x}e^x\left(\frac{3}{2}\log x + x\log x\right)$`, correct: false, misconceptionId: "C05-M5", value: "sqrt(x)*(2*x + 3)*exp(x)*log(x)/2" },
        { key: "C", text: t`$\sqrt{x}e^x\left(\frac{3}{2}\log x + x\log x + 1\right)$`, correct: true, value: "sqrt(x)*(x*log(x) + 3*log(x)/2 + 1)*exp(x)" },
        { key: "D", text: t`$\frac{3e^x}{2\sqrt{x}}$`, correct: false, misconceptionId: "C05-M1", value: "3*exp(x)/(2*sqrt(x))" },
      ],
      solution: {
        steps: [
          t`Three factors give three terms, with one factor differentiated in each.`,
          t`$(x^{\frac{3}{2}})' = \frac{3}{2}\sqrt{x}$, $(e^x)' = e^x$ and $(\log x)' = \frac{1}{x}$.`,
          t`The terms are $\frac{3}{2}\sqrt{x}e^x\log x$, then $x^{\frac{3}{2}}e^x\log x$, then $x^{\frac{3}{2}}e^x \cdot \frac{1}{x}$ $= \sqrt{x}e^x$.`,
          t`Take out $\sqrt{x}e^x$: $\frac{dy}{dx} =$ $\sqrt{x}e^x\left(\frac{3}{2}\log x + x\log x + 1\right)$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 III Q2" },
      stem: t`If $y = e^x\sec x - x^{\frac{5}{3}}\log x$, then $\frac{dy}{dx} =$`,
      verify: { kind: "value", inputs: { f: "exp(x)*sec(x) - x**(5/3)*log(x)", u: "exp(x)", w: "sec(x)", u2: "x**(5/3)", w2: "log(x)", k2: "-1" } },
      options: [
        { key: "A", text: t`$e^x\sec x(1 + \tan x)$ $- x^{\frac{2}{3}}\left(\frac{5}{3}\log x + 1\right)$`, correct: true, value: "-5*x**(2/3)*log(x)/3 - x**(2/3) + sqrt(2)*exp(x)*sin(x + pi/4)/cos(x)**2" },
        { key: "B", text: t`$e^x\sec x\tan x - \frac{5}{3}x^{-\frac{1}{3}}$`, correct: false, misconceptionId: "C05-M1", value: "exp(x)*tan(x)*sec(x) - 5/(3*x**(1/3))" },
        { key: "C", text: t`$e^x\sec x(1 - \tan x)$ $- x^{\frac{2}{3}}\left(\frac{5}{3}\log x - 1\right)$`, correct: false, misconceptionId: "C05-M3", value: "-5*x**(2/3)*log(x)/3 + x**(2/3) + sqrt(2)*exp(x)*cos(x + pi/4)/cos(x)**2" },
        { key: "D", text: t`$e^x\sec x(1 + \tan x)$ $- x^{\frac{2}{3}}\left(\frac{5}{3}\log x - 1\right)$`, correct: false, misconceptionId: "C05-M4", value: "-5*x**(2/3)*log(x)/3 + x**(2/3) + sqrt(2)*exp(x)*sin(x + pi/4)/cos(x)**2" },
      ],
      solution: {
        steps: [
          t`$(e^x\sec x)' = e^x\sec x\tan x + e^x\sec x$ $= e^x\sec x(1 + \tan x)$.`,
          t`$(x^{\frac{5}{3}}\log x)'$ $= x^{\frac{5}{3}} \cdot \frac{1}{x}$ $+ \frac{5}{3}x^{\frac{2}{3}}\log x$ $= x^{\frac{2}{3}}\left(\frac{5}{3}\log x + 1\right)$.`,
          t`Subtract the whole of the second: $\frac{dy}{dx} = e^x\sec x(1 + \tan x)$ $- x^{\frac{2}{3}}\left(\frac{5}{3}\log x + 1\right)$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/differentiation-11/Ex 9.2 III Q4" },
      stem: t`If $y = 7^x \cdot x^7$, then the value of $\frac{dy}{dx}$ at $x = 1$ is`,
      verify: { kind: "value", inputs: { f: "7**x*x**7", u: "7**x", w: "x**7", a: "1" } },
      options: [
        { key: "A", text: t`$7\log 7 + 49$`, correct: true, value: "7*log(7) + 49" },
        { key: "B", text: t`$49\log 7$`, correct: false, misconceptionId: "C05-M1", value: "49*log(7)" },
        { key: "C", text: t`$49$`, correct: false, misconceptionId: "C05-M2", value: "49" },
        { key: "D", text: t`$7\log 7 - 49$`, correct: false, misconceptionId: "C05-M3", value: "-49 + 7*log(7)" },
      ],
      solution: {
        steps: [
          t`$(7^x)' = 7^x\log 7$ and $(x^7)' = 7x^6$.`,
          t`$\frac{dy}{dx} = 7^x \cdot 7x^6 + x^7 \cdot 7^x\log 7$.`,
          t`At $x = 1$: $7 \cdot 7 + 7\log 7 = 49 + 7\log 7$.`,
        ],
      },
    },
  ],
};
