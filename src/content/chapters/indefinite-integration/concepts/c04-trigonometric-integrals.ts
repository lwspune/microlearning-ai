import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$\int \cos 6x\,dx$ is a standard form. **But no formula covers a product: so what is $\int 2\cos 5x\cos x\,dx$?**`,
    reveal: t`Rewrite the product as a sum: $2\cos 5x\cos x = \cos 6x + \cos 4x$. Each term is a standard form, so the integral is $\frac{\sin 6x}{6} + \frac{\sin 4x}{4} + c$.`,
  },
  explanation: {
    intuition: [
      t`No standard formula covers a product like $\cos 5x\cos x$ or a power like $\cos^5 x$.`,
      t`A product of sines and cosines can be rewritten as a **sum**, and a sum integrates term by term.`,
      t`For a power, substitution needs a spare factor: $t = \sin x$ needs a $\cos x\,dx$ to make $dt$.`,
      t`An **odd** power, like $\cos^5 x$, can lend one factor and still leave an even power.`,
      t`The even power, $\cos^4 x = (\cos^2 x)^2$, turns into sines through $\cos^2 x = 1 - \sin^2 x$.`,
      t`Then the integrand is a polynomial in $t$, and the power rule finishes it.`,
    ],
    formal: [
      {
        title: "Products into sums",
        points: [
          t`The **product-to-sum formulae** rewrite a product of two sines or cosines as a sum.`,
          t`A sine times a cosine: $2\sin A\cos B$ $= \sin(A + B) + \sin(A - B)$.`,
          t`Two cosines: $2\cos A\cos B$ $= \cos(A + B) + \cos(A - B)$.`,
          t`Two sines: $2\sin A\sin B$ $= \cos(A - B) - \cos(A + B)$.`,
          t`Then integrate each term: $\int \cos kx\,dx = \frac{\sin kx}{k}$ and $\int \sin kx\,dx = -\frac{\cos kx}{k}$.`,
          t`Example: $\sin 3x\cos x = \frac{1}{2}(\sin 4x + \sin 2x)$, so its integral is $-\frac{\cos 4x}{8} - \frac{\cos 2x}{4} + c$.`,
        ],
      },
      {
        title: "Integrate the sum, not each factor",
        points: [
          t`The integral of a product is **not** the product of the integrals.`,
          t`Test it: $\frac{d}{dx}(\sin x\cdot\sin x) = 2\sin x\cos x$, which is not $\cos x\cdot\cos x$.`,
          t`So turn the product into a sum first, then integrate term by term.`,
          t`With three factors, combine two of them first, then multiply each term by the third.`,
          t`Example: $\cos 4x\cos 2x = \frac{1}{2}(\cos 6x + \cos 2x)$.`,
          t`Times $\cos x$, it is $\frac{1}{4}(\cos 7x + \cos 5x$ $+ \cos 3x + \cos x)$: each formula brings a $\frac{1}{2}$.`,
        ],
      },
      {
        title: "An odd power of cos x",
        points: [
          t`In $\int \sin^m x\cos^n x\,dx$, suppose the power $n$ of $\cos x$ is **odd** (1, 3, 5, ...).`,
          t`Keep one $\cos x$ aside: with $t = \sin x$, $dt = \cos x\,dx$.`,
          t`Only that one factor goes into $dt$; the even power left over stays in the integrand.`,
          t`Turn it into sines with $\cos^2 x = 1 - \sin^2 x$.`,
          t`Now the integrand is a polynomial in $t$: integrate it by the power rule and put $t = \sin x$ back.`,
          t`Example: $\int \cos^3 x\,dx = \int (1 - t^2)\,dt$ $= \sin x - \frac{\sin^3 x}{3} + c$.`,
        ],
      },
      {
        title: "An odd power of sin x",
        points: [
          t`If instead the power of $\sin x$ is odd, keep one $\sin x$ aside and put $t = \cos x$.`,
          t`Now $dt = -\sin x\,dx$, so $\sin x\,dx = -dt$: keep the minus sign.`,
          t`Turn the even power left over into cosines with $\sin^2 x = 1 - \cos^2 x$.`,
          t`Example: $\int \sin^3 x\,dx = -\int (1 - t^2)\,dt$ $= -\cos x + \frac{\cos^3 x}{3} + c$.`,
          t`If both powers are odd, either choice works; if both are even, use $\sin^2 x = \frac{1 - \cos 2x}{2}$ instead.`,
        ],
      },
      {
        title: "Powers of tan x",
        points: [
          t`A power of $\tan x$ has no spare factor, so make one with $\tan^2 x = \sec^2 x - 1$.`,
          t`Split off $\sec^2 x$: $\tan^n x = \tan^{n-2} x\sec^2 x$ $- \tan^{n-2} x$.`,
          t`The first part integrates with $t = \tan x$, $dt = \sec^2 x\,dx$, giving $\frac{\tan^{n-1} x}{n-1}$.`,
          t`Repeat on $\tan^{n-2} x$ until only $\tan x$ or $1$ is left; $\int \tan x\,dx = \log|\sec x|$.`,
          t`Example: $\int \tan^3 x\,dx = \frac{\tan^2 x}{2} - \log|\sec x| + c$.`,
          t`The plain power rule, $\frac{\tan^{n+1} x}{n+1}$, is wrong: there is no $\sec^2 x$ to make its $dt$.`,
        ],
      },
      {
        title: "Check by differentiating",
        points: [
          t`Two methods can give answers that look different but differ only by a constant.`,
          t`Example: in $\int \sin x\cos x\,dx$, $t = \sin x$ gives $\frac{\sin^2 x}{2}$, but $t = \cos x$ gives $-\frac{\cos^2 x}{2}$.`,
          t`Their difference is $\frac{\sin^2 x + \cos^2 x}{2} = \frac{1}{2}$, a constant, so both are right.`,
          t`To check any answer, differentiate it: it is right exactly when its derivative is the integrand.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\int \sin^3 x\cos^2 x\,dx$.`,
      steps: [
        t`The power of $\sin x$ is odd, so keep one $\sin x$ aside: $\sin^3 x = \sin^2 x\cdot\sin x$.`,
        t`Turn the rest into cosines: $\sin^2 x = 1 - \cos^2 x$.`,
        t`Put $t = \cos x$; then $dt = -\sin x\,dx$, so $\sin x\,dx = -dt$.`,
        t`The integral becomes $-\int (1 - t^2)t^2\,dt$ $= -\frac{t^3}{3} + \frac{t^5}{5} + c$.`,
        t`Put back $t = \cos x$. Check: the derivative is $\sin x\cos^2 x(1 - \cos^2 x)$ $= \sin^3 x\cos^2 x$.`,
      ],
      answer: t`$\int \sin^3 x\cos^2 x\,dx$ $= -\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + c$`,
    },
    visualSpec: t`A slider for the powers $m$ and $n$ in $\sin^m x\cos^n x$: when one is odd, one factor lifts out as $dt$ and the rest becomes a polynomial in $t$, shown term by term.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Ignoring the inside's derivative: using the power rule on a trig function, $\int \cos^7 x\,dx = \frac{\cos^8 x}{8}$, or $\int \cos kx\,dx = \sin kx$`,
      remediation: t`The power rule needs its $du$: $\int u^n\,du = \frac{u^{n+1}}{n+1}$. With $u = \cos x$ there is no $-\sin x\,dx$ to match, and $\int \cos kx\,dx = \frac{\sin kx}{k}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M2",
      mistake: t`Taking the whole odd power as $dt$: with $t = \sin x$, $\cos^3 x\,dx = dt$, so $\int \sin^4 x\cos^3 x\,dx = \int t^4\,dt$`,
      remediation: t`$dt = \cos x\,dx$ uses only one $\cos x$. Turn the even power left over into sines with $\cos^2 x = 1 - \sin^2 x$ before integrating.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: t`Converting with the wrong sign: $\cos^2 x = 1 + \sin^2 x$, $\sin^2 x = 1 + \cos^2 x$, $\tan^2 x = \sec^2 x + 1$`,
      remediation: t`From $\sin^2 x + \cos^2 x = 1$, $\cos^2 x = 1 - \sin^2 x$; from $1 + \tan^2 x = \sec^2 x$, $\tan^2 x = \sec^2 x - 1$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: t`Dropping the minus sign of the cosine's derivative: $\sin x\,dx = d(\cos x)$, $\int \sin kx\,dx = \frac{\cos kx}{k}$, $\int \tan x\,dx = \log|\cos x|$`,
      remediation: t`Since $\frac{d}{dx}\cos x = -\sin x$: $\sin x\,dx = -d(\cos x)$, $\int \sin kx\,dx = -\frac{\cos kx}{k}$ and $\int \tan x\,dx = \log|\sec x|$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: t`Integrating a product factor by factor: $\int f\,g\,dx = \int f\,dx\cdot\int g\,dx$`,
      remediation: "The integral of a product is not the product of the integrals. Turn the product into a sum first (a product-to-sum formula, or expanding), then integrate term by term.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M6",
      mistake: t`Multiplying by the coefficient instead of dividing: $\int \cos kx\,dx = k\sin kx$`,
      remediation: t`$\frac{d}{dx}\sin kx = k\cos kx$, so undoing it divides by $k$: $\int \cos kx\,dx = \frac{\sin kx}{k}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "Item types (verify params.type): sc is sin^m x cos^n x (inputs m, n, one of them odd); tan is tan^n x (input n); prod is a product of sines and cosines (params.fs names them, inputs k1, k2, ... their multipliers of x). The key model checks itself by differentiation.",
    "C04-M1 needs a single power (sin^n, cos^n, tan^n) or a product; C04-M2 needs sin^m cos^n; C04-M3 needs sin^m cos^n or tan^n; C04-M5 and C04-M6 need a product (C04-M5 also sin^m cos^n with two factors in t).",
    "C04-M4 needs t = cos x (an odd power of sin), an odd power of tan, or a sine after product-to-sum: it can't show on a cos-odd item or a product of cosines.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.1 II (x)" },
      stem: t`$\int \sin 4x\cos 3x\,dx =$`,
      verify: { kind: "value", inputs: { k1: "4", k2: "3" }, params: { type: "prod", fs: "sin cos" } },
      options: [
        { key: "A", text: t`$-\frac{1}{12}\cos 4x\sin 3x + c$`, correct: false, misconceptionId: "C04-M5", value: "-sin(3*x)*cos(4*x)/12" },
        { key: "B", text: t`$-\frac{7\cos 7x}{2} - \frac{\cos x}{2} + c$`, correct: false, misconceptionId: "C04-M6", value: "-cos(x)/2 - 7*cos(7*x)/2" },
        { key: "C", text: t`$-\frac{\cos 7x}{14} - \frac{\cos x}{2} + c$`, correct: true, value: "-cos(x)/2 - cos(7*x)/14" },
        { key: "D", text: t`$\frac{\cos 7x}{14} + \frac{\cos x}{2} + c$`, correct: false, misconceptionId: "C04-M4", value: "cos(x)/2 + cos(7*x)/14" },
      ],
      solution: {
        steps: [
          t`Use $2\sin A\cos B = \sin(A + B) + \sin(A - B)$: $\sin 4x\cos 3x = \frac{1}{2}(\sin 7x + \sin x)$.`,
          t`Integrate each term with $\int \sin kx\,dx = -\frac{\cos kx}{k}$.`,
          t`$\int \sin 4x\cos 3x\,dx$ $= -\frac{\cos 7x}{14} - \frac{\cos x}{2} + c$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc II Q.7" },
      stem: t`$\int \cos 3x\cos 2x\cos x\,dx =$`,
      verify: { kind: "value", inputs: { k1: "3", k2: "2", k3: "1" }, params: { type: "prod", fs: "cos cos cos" } },
      options: [
        { key: "A", text: t`$\frac{x}{4} + \frac{\sin 2x}{4}$ $+ \frac{\sin 4x}{4} + \frac{\sin 6x}{4} + c$`, correct: false, misconceptionId: "C04-M1", value: "x/4 + sin(2*x)/4 + sin(4*x)/4 + sin(6*x)/4" },
        { key: "B", text: t`$\frac{1}{6}\sin 3x\sin 2x\sin x + c$`, correct: false, misconceptionId: "C04-M5", value: "sin(x)*sin(2*x)*sin(3*x)/6" },
        { key: "C", text: t`$\frac{x}{4} + \frac{\sin 2x}{2}$ $+ \sin 4x + \frac{3\sin 6x}{2} + c$`, correct: false, misconceptionId: "C04-M6", value: "x/4 + sin(2*x)/2 + sin(4*x) + 3*sin(6*x)/2" },
        { key: "D", text: t`$\frac{x}{4} + \frac{\sin 2x}{8}$ $+ \frac{\sin 4x}{16} + \frac{\sin 6x}{24} + c$`, correct: true, value: "x/4 + sin(2*x)/8 + sin(4*x)/16 + sin(6*x)/24" },
      ],
      solution: {
        steps: [
          t`First $\cos 3x\cos x = \frac{1}{2}(\cos 4x + \cos 2x)$.`,
          t`Times $\cos 2x$: $\cos 4x\cos 2x = \frac{1}{2}(\cos 6x + \cos 2x)$ and $\cos^2 2x = \frac{1}{2}(\cos 4x + 1)$.`,
          t`So the integrand is $\frac{1}{4}(\cos 6x + \cos 4x$ $+ \cos 2x + 1)$.`,
          t`Integrate term by term: $\frac{x}{4} + \frac{\sin 2x}{8}$ $+ \frac{\sin 4x}{16} + \frac{\sin 6x}{24} + c$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) II (12)" },
      stem: t`$\int \cos^7 x\,dx =$`,
      verify: { kind: "value", inputs: { m: "0", n: "7" }, params: { type: "sc" } },
      options: [
        { key: "A", text: t`$\sin x + c$`, correct: false, misconceptionId: "C04-M2", value: "sin(x)" },
        { key: "B", text: t`$\sin x + \sin^3 x$ $+ \frac{3}{5}\sin^5 x + \frac{1}{7}\sin^7 x + c$`, correct: false, misconceptionId: "C04-M3", value: "sin(x)**7/7 + 3*sin(x)**5/5 + sin(x)**3 + sin(x)" },
        { key: "C", text: t`$\sin x - \sin^3 x$ $+ \frac{3}{5}\sin^5 x - \frac{1}{7}\sin^7 x + c$`, correct: true, value: "(-sin(x)**6/7 + 3*sin(x)**4/5 + cos(x)**2)*sin(x)" },
        { key: "D", text: t`$\frac{\cos^8 x}{8} + c$`, correct: false, misconceptionId: "C04-M1", value: "cos(x)**8/8" },
      ],
      solution: {
        steps: [
          t`The power of $\cos x$ is odd: $\cos^7 x = (1 - \sin^2 x)^3\cos x$.`,
          t`Put $t = \sin x$, $dt = \cos x\,dx$: $\int (1 - 3t^2 + 3t^4 - t^6)\,dt$.`,
          t`$= t - t^3 + \frac{3}{5}t^5 - \frac{1}{7}t^7 + c$, with $t = \sin x$.`,
          t`So the integral is $\sin x - \sin^3 x$ $+ \frac{3}{5}\sin^5 x - \frac{1}{7}\sin^7 x + c$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) I (9)" },
      stem: t`$\int \sin^4 x\cos^3 x\,dx =$`,
      verify: { kind: "value", inputs: { m: "4", n: "3" }, params: { type: "sc" } },
      options: [
        { key: "A", text: t`$\frac{\sin^5 x}{5} + c$`, correct: false, misconceptionId: "C04-M2", value: "sin(x)**5/5" },
        { key: "B", text: t`$\frac{\sin^5 x}{5} + \frac{\sin^7 x}{7} + c$`, correct: false, misconceptionId: "C04-M3", value: "sin(x)**7/7 + sin(x)**5/5" },
        { key: "C", text: t`$\frac{\sin^5 x}{5}\left(\sin x - \frac{\sin^3 x}{3}\right) + c$`, correct: false, misconceptionId: "C04-M5", value: "(cos(x)**2 + 2)*sin(x)**6/15" },
        { key: "D", text: t`$\frac{\sin^5 x}{5} - \frac{\sin^7 x}{7} + c$`, correct: true, value: "-sin(x)**7/7 + sin(x)**5/5" },
      ],
      solution: {
        steps: [
          t`The power of $\cos x$ is odd: $\cos^3 x = (1 - \sin^2 x)\cos x$.`,
          t`Put $t = \sin x$, $dt = \cos x\,dx$: $\int t^4(1 - t^2)\,dt$ $= \int (t^4 - t^6)\,dt$.`,
          t`$= \frac{\sin^5 x}{5} - \frac{\sin^7 x}{7} + c$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) II (14)" },
      stem: t`$\int \sin^5 x\cos^8 x\,dx =$`,
      verify: { kind: "value", inputs: { m: "5", n: "8" }, params: { type: "sc" } },
      options: [
        { key: "A", text: t`$\frac{\cos^9 x}{9} - \frac{2\cos^{11} x}{11}$ $+ \frac{\cos^{13} x}{13} + c$`, correct: false, misconceptionId: "C04-M4", value: "(99*cos(x)**4 - 234*cos(x)**2 + 143)*cos(x)**9/1287" },
        { key: "B", text: t`$-\frac{\cos^9 x}{9} + \frac{2\cos^{11} x}{11}$ $- \frac{\cos^{13} x}{13} + c$`, correct: true, value: "-(99*sin(x)**4 + 36*sin(x)**2 + 8)*cos(x)**9/1287" },
        { key: "C", text: t`$-\frac{\cos^9 x}{9} + c$`, correct: false, misconceptionId: "C04-M2", value: "-cos(x)**9/9" },
        { key: "D", text: t`$-\frac{\cos^9 x}{9} - \frac{2\cos^{11} x}{11}$ $- \frac{\cos^{13} x}{13} + c$`, correct: false, misconceptionId: "C04-M3", value: "(-99*sin(x)**4 + 432*sin(x)**2 - 476)*cos(x)**9/1287" },
      ],
      solution: {
        steps: [
          t`The power of $\sin x$ is odd: $\sin^5 x = (1 - \cos^2 x)^2\sin x$.`,
          t`Put $t = \cos x$, so $\sin x\,dx = -dt$: $-\int (1 - t^2)^2t^8\,dt$.`,
          t`$= -\int (t^8 - 2t^{10} + t^{12})\,dt$ $= -\frac{t^9}{9} + \frac{2t^{11}}{11} - \frac{t^{13}}{13} + c$.`,
          t`With $t = \cos x$: $-\frac{\cos^9 x}{9} + \frac{2\cos^{11} x}{11}$ $- \frac{\cos^{13} x}{13} + c$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.2(A) II (11)" },
      stem: t`$\int \tan^5 x\,dx =$`,
      verify: { kind: "value", inputs: { n: "5" }, params: { type: "tan" } },
      options: [
        { key: "A", text: t`$\frac{\tan^4 x}{4} - \frac{\tan^2 x}{2}$ $+ \log|\sec x| + c$`, correct: true, value: "log(Abs(sec(x))) + tan(x)**4/4 - tan(x)**2/2" },
        { key: "B", text: t`$\frac{\tan^6 x}{6} + c$`, correct: false, misconceptionId: "C04-M1", value: "tan(x)**6/6" },
        { key: "C", text: t`$\frac{\tan^4 x}{4} + \frac{\tan^2 x}{2}$ $+ \log|\sec x| + c$`, correct: false, misconceptionId: "C04-M3", value: "log(Abs(sec(x))) + tan(x)**4/4 + tan(x)**2/2" },
        { key: "D", text: t`$\frac{\tan^4 x}{4} - \frac{\tan^2 x}{2}$ $+ \log|\cos x| + c$`, correct: false, misconceptionId: "C04-M4", value: "log(Abs(cos(x))) + tan(x)**4/4 - tan(x)**2/2" },
      ],
      solution: {
        steps: [
          t`$\tan^5 x = \tan^3 x\sec^2 x - \tan^3 x$, and $\tan^3 x = \tan x\sec^2 x - \tan x$.`,
          t`So $\tan^5 x = \tan^3 x\sec^2 x$ $- \tan x\sec^2 x + \tan x$.`,
          t`With $t = \tan x$, the first two give $\frac{\tan^4 x}{4} - \frac{\tan^2 x}{2}$; and $\int \tan x\,dx = \log|\sec x|$.`,
          t`Total: $\frac{\tan^4 x}{4} - \frac{\tan^2 x}{2}$ $+ \log|\sec x| + c$.`,
        ],
      },
    },
  ],
};
