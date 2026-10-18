import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`Integrate $\int e^x \sin x\,dx$ by parts twice and you are back at $\int e^x \sin x\,dx$. **Dead end, or answer?**`,
    reveal: t`Answer. Call it $I$: parts twice gives $I = e^x(\sin x - \cos x) - I$. So $2I = e^x(\sin x - \cos x)$, and $I = \frac{e^x}{2}(\sin x - \cos x) + c$.`,
  },
  explanation: {
    intuition: [
      t`A few integrals by parts come up so often that their results are worth knowing by heart.`,
      t`The product rule gives $\frac{d}{dx}\left[e^x f(x)\right]$ $= e^x\left[f(x) + f'(x)\right]$.`,
      t`So if the bracket is a function plus its own derivative, the integral is $e^x f(x) + c$.`,
      t`Some integrals **return**: after parts, the integral you started with appears again on the right.`,
      t`That is not a dead end: call it $I$, move it to the left side, and divide.`,
      t`The same move gives $\int \sqrt{a^2 - x^2}\,dx$ and its two relatives.`,
    ],
    formal: [
      {
        title: "A function plus its derivative",
        points: [
          t`To integrate $e^x g(x)$, try to split $g(x)$ as $f(x) + f'(x)$.`,
          t`Then $\int e^x\left[f(x) + f'(x)\right]dx$ $= e^x f(x) + c$.`,
          t`Here $f$ is the part whose derivative is the other part; the answer uses $f$, not $f'$.`,
          t`Example: $\frac{x - 1}{x^2} = \frac{1}{x} - \frac{1}{x^2}$, and $\frac{d}{dx}\left(\frac{1}{x}\right) = -\frac{1}{x^2}$.`,
          t`So $f(x) = \frac{1}{x}$, and $\int \frac{e^x(x - 1)}{x^2}dx$ $= \frac{e^x}{x} + c$.`,
          t`With $e^{ax}$: $\int e^{ax}\left[a f(x) + f'(x)\right]dx$ $= e^{ax} f(x) + c$.`,
        ],
      },
      {
        title: "An integral that returns",
        points: [
          t`Let $I = \int e^{2x}\sin 3x\,dx$, and apply parts twice, taking $e^{2x}$ first each time.`,
          t`You get $I = \frac{e^{2x}}{9}(2\sin 3x - 3\cos 3x)$ $- \frac{4}{9}I$.`,
          t`Keep the $I$ on the right: moved to the left, $-\frac{4}{9}I$ becomes $+\frac{4}{9}I$.`,
          t`So $\frac{13}{9}I = \frac{e^{2x}}{9}(2\sin 3x - 3\cos 3x)$.`,
          t`Divide by $\frac{13}{9}$: $I = \frac{e^{2x}}{13}(2\sin 3x - 3\cos 3x)$ $+ c$.`,
        ],
      },
      {
        title: "The general results",
        points: [
          t`Repeating this for any $a$ and $b$ puts $a^2 + b^2$ in the denominator.`,
          t`$\int e^{ax}\sin bx\,dx$ $= \frac{e^{ax}}{a^2 + b^2}(a\sin bx - b\cos bx)$ $+ c$.`,
          t`$\int e^{ax}\cos bx\,dx$ $= \frac{e^{ax}}{a^2 + b^2}(a\cos bx + b\sin bx)$ $+ c$.`,
          t`Check a sign by differentiating: the derivative must give back the integrand.`,
        ],
      },
      {
        title: "The root of a² − x²",
        points: [
          t`Write $\int \sqrt{a^2 - x^2}\,dx$ as $\int \sqrt{a^2 - x^2}\cdot 1\,dx$, with the root first.`,
          t`Parts gives $I = x\sqrt{a^2 - x^2}$ $+ \int \frac{x^2}{\sqrt{a^2 - x^2}}dx$.`,
          t`Write $x^2 = a^2 - (a^2 - x^2)$: that integral is $a^2\sin^{-1}\frac{x}{a} - I$.`,
          t`So $2I = x\sqrt{a^2 - x^2} + a^2\sin^{-1}\frac{x}{a}$: halve both sides.`,
          t`$\int \sqrt{a^2 - x^2}\,dx$ $= \frac{x}{2}\sqrt{a^2 - x^2}$ $+ \frac{a^2}{2}\sin^{-1}\frac{x}{a} + c$.`,
        ],
      },
      {
        title: "Its two relatives",
        points: [
          t`The same steps work for $\sqrt{x^2 + a^2}$ and $\sqrt{x^2 - a^2}$.`,
          t`$\int \sqrt{x^2 + a^2}\,dx = \frac{x}{2}\sqrt{x^2 + a^2}$ $+ \frac{a^2}{2}\log|x + \sqrt{x^2 + a^2}|$ $+ c$.`,
          t`$\int \sqrt{x^2 - a^2}\,dx = \frac{x}{2}\sqrt{x^2 - a^2}$ $- \frac{a^2}{2}\log|x + \sqrt{x^2 - a^2}|$ $+ c$.`,
          t`Only the sign of the $\frac{a^2}{2}$ term differs: $+$ goes with $x^2 + a^2$.`,
          t`Complete the square first if needed: $x^2 - 6x + 13 = (x - 3)^2 + 2^2$.`,
          t`Then use the formula with $x - 3$ in place of $x$ and $a = 2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $x > -3$, find $\int e^x\left[\frac{x + 2}{(x + 3)^2}\right]dx$.`,
      steps: [
        t`Split the fraction: $\frac{x + 2}{(x + 3)^2} = \frac{(x + 3) - 1}{(x + 3)^2}$.`,
        t`$= \frac{1}{x + 3} - \frac{1}{(x + 3)^2}$.`,
        t`With $f(x) = \frac{1}{x + 3}$, $f'(x) = -\frac{1}{(x + 3)^2}$: the bracket is $f(x) + f'(x)$.`,
        t`So the integral is $e^x f(x) + c = \frac{e^x}{x + 3} + c$.`,
        t`Check: $\frac{d}{dx}\left(\frac{e^x}{x + 3}\right)$ $= \frac{e^x}{x + 3} - \frac{e^x}{(x + 3)^2}$, the integrand.`,
      ],
      answer: t`$\frac{e^x}{x + 3} + c$`,
    },
    visualSpec: t`A slider for $b$ in $\int e^x\sin bx\,dx$: the returning term $-b^2 I$ moves left, and the denominator $1 + b^2$ updates with it.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Integrates a product factor by factor: $\int e^{ax} g(x)\,dx = \int e^{ax}dx \cdot \int g(x)\,dx$.`,
      remediation: t`The integral of a product is not the product of the integrals. Use the $e^x\left[f(x) + f'(x)\right]$ form or parts, and check by differentiating.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M2",
      mistake: t`In $e^x\left[f(x) + f'(x)\right]$, takes the wrong part as $f$, so answers $e^x f'(x)$.`,
      remediation: t`$f$ is the part whose derivative is the other part. The answer is $e^x f(x) + c$; differentiate it to check.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C10-M3",
      mistake: t`When the starting integral $I$ reappears after parts, drops it, so the answer is missing its divisor.`,
      remediation: t`Keep the returning $I$: from $I = A - kI$, move $kI$ to the left and divide, $I = \frac{A}{1 + k}$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M4",
      mistake: t`Moves the returning integral across without changing its sign: $I = A - kI$ becomes $(1 - k)I = A$.`,
      remediation: t`A term $-kI$ moves to the left as $+kI$: $(1 + k)I = A$, so the denominator is $a^2 + b^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Recalls the standard result with the wrong sign between its two terms.",
      remediation: t`Differentiate the answer: only the right sign gives back the integrand. For roots, $+\frac{a^2}{2}$ goes with $a^2 - x^2$ and $x^2 + a^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: t`Keeps only the first term of parts, $u\int v\,dx$, as if $u$ were a constant.`,
      remediation: t`Parts gives $u\int v\,dx - \int\left(u'\int v\,dx\right)dx$; the second term is not zero, because $u$ is not a constant.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  engineNotes: [
    t`C10-M2 applies only to the $e^{ax}\left[a f(x) + f'(x)\right]$ form; C10-M1 only to a product of $e^{ax}$ and a function it can integrate (not to roots or $\sin(\log x)$).`,
    t`C10-M4 needs $a^2 \ne b^2$, so it has no model for $\sin(\log x)$ or the root forms (there the wrong sign gives $0 \cdot I$).`,
    t`C10-M3 and C10-M4 depend on which function parts takes first (param first); C10-Q5 follows the book, $e^{ax}$ first. On the root forms and $\sin(\log x)$, C10-M3 is twice the key.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 III (i)" },
      stem: t`For $0 < x < \pi$, $\int e^x\left(2 + \cot x - \operatorname{cosec}^2 x\right)dx = ?$`,
      verify: { kind: "value", inputs: { f: "2 + cot(x)", g: "2 + cot(x) - 1/sin(x)**2" }, params: { form: "ef" } },
      options: [
        { key: "A", text: t`$e^x(2x + \log \sin x + \cot x) + c$`, correct: false, misconceptionId: "C10-M1", value: "(2*x + log(sin(x)) + 1/tan(x))*exp(x)" },
        { key: "B", text: t`$-e^x \operatorname{cosec}^2 x + c$`, correct: false, misconceptionId: "C10-M2", value: "-exp(x)/sin(x)**2" },
        { key: "C", text: t`$e^x(2 + \cot x - \operatorname{cosec}^2 x) + c$`, correct: false, misconceptionId: "C10-M6", value: "(1 + 1/tan(x) - 1/tan(x)**2)*exp(x)" },
        { key: "D", text: t`$e^x(2 + \cot x) + c$`, correct: true, value: "(cot(x) + 2)*exp(x)" },
      ],
      solution: {
        steps: [
          t`Take $f(x) = 2 + \cot x$; then $f'(x) = -\operatorname{cosec}^2 x$.`,
          t`So the bracket is $f(x) + f'(x)$, and $\int e^x\left[f(x) + f'(x)\right]dx = e^x f(x) + c$.`,
          t`The integral is $e^x(2 + \cot x) + c$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 III (vi)" },
      stem: t`For $x > 0$, $\int e^{5x}\left(\frac{5x \log x + 1}{x}\right)dx = ?$`,
      verify: { kind: "value", inputs: { f: "log(x)", g: "5*log(x) + 1/x", a: "5" }, params: { form: "ef" } },
      options: [
        { key: "A", text: t`$e^{5x}\log x + c$`, correct: true, value: "exp(5*x)*log(x)" },
        { key: "B", text: t`$\frac{e^{5x}}{5}(5x\log x - 5x + \log x) + c$`, correct: false, misconceptionId: "C10-M1", value: "(x*log(x) - x + log(x)/5)*exp(5*x)" },
        { key: "C", text: t`$\frac{e^{5x}}{x} + c$`, correct: false, misconceptionId: "C10-M2", value: "exp(5*x)/x" },
        { key: "D", text: t`$e^{5x}\left(\log x + \frac{1}{5x}\right) + c$`, correct: false, misconceptionId: "C10-M6", value: "(x*log(x) + 1/5)*exp(5*x)/x" },
      ],
      solution: {
        steps: [
          t`$\frac{5x\log x + 1}{x} = 5\log x + \frac{1}{x}$.`,
          t`With $f(x) = \log x$, this is $5f(x) + f'(x)$: the form $a f(x) + f'(x)$ with $a = 5$.`,
          t`$\frac{d}{dx}\left(e^{5x}\log x\right) = e^{5x}\left(5\log x + \frac{1}{x}\right)$, so the integral is $e^{5x}\log x + c$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 II (xi)" },
      stem: t`Using $x^2 + 2x + 5 = (x + 1)^2 + 2^2$, $\int \sqrt{x^2 + 2x + 5}\,dx = ?$`,
      verify: { kind: "value", inputs: { t: "x + 1", k: "4" }, params: { form: "root", kind: "t2+a2" } },
      options: [
        { key: "A", text: t`$(x + 1)\sqrt{x^2 + 2x + 5} + c$`, correct: false, misconceptionId: "C10-M6", value: "(x + 1)*sqrt((x + 1)**2 + 4)" },
        { key: "B", text: t`$\frac{x + 1}{2}\sqrt{x^2 + 2x + 5}$ $+ 2\log\left|x + 1 + \sqrt{x^2 + 2x + 5}\right| + c$`, correct: true, value: "(x + 1)*sqrt((x + 1)**2 + 4)/2 + 2*log(Abs(x + sqrt((x + 1)**2 + 4) + 1))" },
        { key: "C", text: t`$(x + 1)\sqrt{x^2 + 2x + 5}$ $+ 4\log\left|x + 1 + \sqrt{x^2 + 2x + 5}\right| + c$`, correct: false, misconceptionId: "C10-M3", value: "(x + 1)*sqrt((x + 1)**2 + 4) + 4*log(Abs(x + sqrt((x + 1)**2 + 4) + 1))" },
        { key: "D", text: t`$\frac{x + 1}{2}\sqrt{x^2 + 2x + 5}$ $- 2\log\left|x + 1 + \sqrt{x^2 + 2x + 5}\right| + c$`, correct: false, misconceptionId: "C10-M5", value: "(x + 1)*sqrt((x + 1)**2 + 4)/2 - 2*log(Abs(x + sqrt((x + 1)**2 + 4) + 1))" },
      ],
      solution: {
        steps: [
          t`Put $t = x + 1$: the integral is $\int \sqrt{t^2 + 2^2}\,dt$.`,
          t`Use $\frac{t}{2}\sqrt{t^2 + a^2} + \frac{a^2}{2}\log|t + \sqrt{t^2 + a^2}|$ with $a = 2$, so $\frac{a^2}{2} = 2$.`,
          t`Back in $x$: $\frac{x + 1}{2}\sqrt{x^2 + 2x + 5}$ $+ 2\log|x + 1 + \sqrt{x^2 + 2x + 5}| + c$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 II (vi)" },
      stem: t`For $3 < x < 7$, using $(x - 3)(7 - x) = 2^2 - (x - 5)^2$, $\int \sqrt{(x - 3)(7 - x)}\,dx = ?$`,
      verify: { kind: "value", inputs: { t: "x - 5", k: "4" }, params: { form: "root", kind: "a2-t2" } },
      options: [
        { key: "A", text: t`$\frac{x - 5}{2}\sqrt{(x - 3)(7 - x)}$ $- 2\sin^{-1}\left(\frac{x - 5}{2}\right) + c$`, correct: false, misconceptionId: "C10-M5", value: "sqrt(4 - (x - 5)**2)*(x - 5)/2 - 2*asin(x/2 - 5/2)" },
        { key: "B", text: t`$(x - 5)\sqrt{(x - 3)(7 - x)} + c$`, correct: false, misconceptionId: "C10-M6", value: "sqrt(4 - (x - 5)**2)*(x - 5)" },
        { key: "C", text: t`$\frac{x - 5}{2}\sqrt{(x - 3)(7 - x)}$ $+ 2\sin^{-1}\left(\frac{x - 5}{2}\right) + c$`, correct: true, value: "sqrt(4 - (x - 5)**2)*(x - 5)/2 + 2*asin(x/2 - 5/2)" },
        { key: "D", text: t`$(x - 5)\sqrt{(x - 3)(7 - x)}$ $+ 4\sin^{-1}\left(\frac{x - 5}{2}\right) + c$`, correct: false, misconceptionId: "C10-M3", value: "sqrt(4 - (x - 5)**2)*(x - 5) + 4*asin(x/2 - 5/2)" },
      ],
      solution: {
        steps: [
          t`Put $t = x - 5$: the integral is $\int \sqrt{2^2 - t^2}\,dt$.`,
          t`Use $\frac{t}{2}\sqrt{a^2 - t^2} + \frac{a^2}{2}\sin^{-1}\frac{t}{a}$ with $a = 2$, so $\frac{a^2}{2} = 2$.`,
          t`Back in $x$: $\frac{x - 5}{2}\sqrt{(x - 3)(7 - x)}$ $+ 2\sin^{-1}\left(\frac{x - 5}{2}\right) + c$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Ex 3.3 II (ii)" },
      stem: t`$\int e^{-x}\cos 2x\,dx = ?$`,
      verify: { kind: "value", inputs: { a: "-1", b: "2" }, params: { form: "exptrig", trig: "cos", first: "exp" } },
      options: [
        { key: "A", text: t`$\frac{e^{-x}}{5}(2\sin 2x - \cos 2x) + c$`, correct: true, value: "(2*sin(2*x) - cos(2*x))*exp(-x)/5" },
        { key: "B", text: t`$-\frac{1}{2}e^{-x}\sin 2x + c$`, correct: false, misconceptionId: "C10-M1", value: "-exp(-x)*sin(2*x)/2" },
        { key: "C", text: t`$\frac{e^{-x}}{4}(2\sin 2x - \cos 2x) + c$`, correct: false, misconceptionId: "C10-M3", value: "(2*sin(2*x) - cos(2*x))*exp(-x)/4" },
        { key: "D", text: t`$\frac{e^{-x}}{3}(2\sin 2x - \cos 2x) + c$`, correct: false, misconceptionId: "C10-M4", value: "(2*sin(2*x) - cos(2*x))*exp(-x)/3" },
      ],
      solution: {
        steps: [
          t`Let $I = \int e^{-x}\cos 2x\,dx$. Parts, $e^{-x}$ first: $I = \frac{1}{2}e^{-x}\sin 2x$ $+ \frac{1}{2}\int e^{-x}\sin 2x\,dx$.`,
          t`Again: $\int e^{-x}\sin 2x\,dx$ $= -\frac{1}{2}e^{-x}\cos 2x - \frac{1}{2}I$.`,
          t`So $I = \frac{e^{-x}}{4}(2\sin 2x - \cos 2x) - \frac{1}{4}I$.`,
          t`$\frac{5}{4}I = \frac{e^{-x}}{4}(2\sin 2x - \cos 2x)$, so $I = \frac{e^{-x}}{5}(2\sin 2x - \cos 2x) + c$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/indef-integration-12/Misc I Q.12" },
      stem: t`For $x > 0$, $\int \sin(\log x)\,dx = ?$`,
      verify: { kind: "value", inputs: { a: "1", b: "1" }, params: { form: "exptrig", trig: "sin", first: "trig", sub: "log" } },
      options: [
        { key: "A", text: t`$\frac{x}{2}\left[\sin(\log x) - \cos(\log x)\right] + c$`, correct: true, value: "-sqrt(2)*x*cos(log(x) + pi/4)/2" },
        { key: "B", text: t`$x\left[\sin(\log x) - \cos(\log x)\right] + c$`, correct: false, misconceptionId: "C10-M3", value: "-sqrt(2)*x*cos(log(x) + pi/4)" },
        { key: "C", text: t`$\frac{x}{2}\left[\sin(\log x) + \cos(\log x)\right] + c$`, correct: false, misconceptionId: "C10-M5", value: "sqrt(2)*x*sin(log(x) + pi/4)/2" },
        { key: "D", text: t`$x\sin(\log x) + c$`, correct: false, misconceptionId: "C10-M6", value: "x*sin(log(x))" },
      ],
      solution: {
        steps: [
          t`Let $I = \int \sin(\log x)\cdot 1\,dx$. Parts: $I = x\sin(\log x) - \int \cos(\log x)\,dx$.`,
          t`Again: $\int \cos(\log x)\,dx = x\cos(\log x) + I$.`,
          t`So $I = x\left[\sin(\log x) - \cos(\log x)\right] - I$, and $2I = x\left[\sin(\log x) - \cos(\log x)\right]$.`,
          t`$I = \frac{x}{2}\left[\sin(\log x) - \cos(\log x)\right] + c$.`,
        ],
      },
    },
  ],
};
