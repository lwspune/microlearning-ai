import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A point moves so that $x = \cos\theta$ and $y = \sin\theta$, as $\theta$ takes every value. **Is there one equation in $x$ and $y$ alone, with no $\theta$, that every such point satisfies?**`,
    reveal: t`Yes. Square and add: $x^2 + y^2 = \cos^2\theta + \sin^2\theta = 1$, whatever $\theta$ is. Every point lies on the circle $x^2 + y^2 = 1$. Finding such an equation is called **eliminating** $\theta$.`,
  },
  explanation: {
    intuition: [
      t`Think of $\theta$ as a hidden dial: each setting of the dial gives one point $(x, y)$.`,
      t`To **eliminate** $\theta$ is to get rid of it, leaving one equation in $x$ and $y$ alone.`,
      t`First make each trigonometric function the **subject**: get it alone on one side, as in $\cos\theta = \frac{x}{a}$.`,
      t`An **identity** is an equation that is true for every $\theta$, such as $\cos^2\theta + \sin^2\theta = 1$.`,
      t`Put both functions into an identity that links them, and $\theta$ drops out.`,
      t`The whole skill is choosing the right identity and doing the algebra cleanly.`,
    ],
    formal: [
      {
        title: "The method in three steps",
        points: [
          t`Step 1: make each trigonometric function the subject.`,
          t`In $x = a\cos\theta$, the number $a$ multiplying $\cos\theta$ is its **coefficient**.`,
          t`Divide both sides by the coefficient: $\cos\theta = \frac{x}{a}$.`,
          t`Step 2: choose the identity that links the pair of functions.`,
          t`Step 3: **substitute**, putting each fraction in place of its function.`,
          t`Write the answer as one equation in $x$ and $y$.`,
        ],
      },
      {
        title: "Which identity to use",
        points: [
          t`Each pair of functions is linked by its own identity.`,
          t`Cos and sin: $\cos^2\theta + \sin^2\theta = 1$.`,
          t`Sec and tan: $\sec^2\theta - \tan^2\theta = 1$.`,
          t`Cosec and cot: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
          t`Only sin and cos add; the other two pairs subtract.`,
          t`When they subtract, sec or cosec comes first.`,
        ],
      },
      {
        title: "The standard result",
        points: [
          t`Take $x = a\cos\theta$ and $y = b\sin\theta$.`,
          t`Divide by the coefficients: $\cos\theta = \frac{x}{a}$ and $\sin\theta = \frac{y}{b}$.`,
          t`Cos and sin are linked by $\cos^2\theta + \sin^2\theta = 1$.`,
          t`Substitute: $\left(\frac{x}{a}\right)^2 + \left(\frac{y}{b}\right)^2 = 1$.`,
          t`The square acts on the whole fraction, top and bottom: $\left(\frac{x}{a}\right)^2 = \frac{x^2}{a^2}$.`,
          t`So $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.`,
        ],
      },
      {
        title: "Constant terms",
        points: [
          t`A **constant term** is a number standing on its own, like $h$ in $x = h + a\cos\theta$.`,
          t`Move it first: subtract $h$ from both sides, so $x - h = a\cos\theta$.`,
          t`Then divide by the coefficient: $\cos\theta = \frac{x - h}{a}$.`,
        ],
      },
      {
        title: "Cubed functions",
        points: [
          t`In $x = a\cos^3\theta$, the function is **cubed**: $\cos^3\theta$ means $(\cos\theta)^3$.`,
          t`Divide by the coefficient: $\cos^3\theta = \frac{x}{a}$.`,
          t`A **cube root**, the power $\frac{1}{3}$, undoes a cube.`,
          t`So take the cube root first: $\cos\theta = \left(\frac{x}{a}\right)^{1/3}$.`,
          t`Then square it for the identity: $\cos^2\theta = \left(\frac{x}{a}\right)^{2/3}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Eliminate $\theta$ from $x = 2 + 3\cos\theta$, $y = 5 + 3\sin\theta$.`,
      steps: [
        t`Move the constants across: $x - 2 = 3\cos\theta$ and $y - 5 = 3\sin\theta$.`,
        t`Divide by $3$: $\cos\theta = \frac{x - 2}{3}$ and $\sin\theta = \frac{y - 5}{3}$.`,
        t`Cos and sin are linked by $\cos^2\theta + \sin^2\theta = 1$, so $\frac{(x - 2)^2}{9} + \frac{(y - 5)^2}{9} = 1$.`,
        t`Multiply by $9$: $(x - 2)^2 + (y - 5)^2 = 9$.`,
      ],
      answer: t`$(x - 2)^2 + (y - 5)^2 = 9$: a circle with centre $(2, 5)$ and radius $3$.`,
    },
    visualSpec: t`Drag $\theta$ and watch the point $(a\cos\theta, b\sin\theta)$ trace its curve; sliders for $a$ and $b$ reshape it while the equation $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ updates beside it.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Adds the squares for every pair, as if $\sec^2\theta + \tan^2\theta = 1$`,
      remediation: t`Only $\cos^2\theta + \sin^2\theta = 1$ is a sum. For sec and tan use $\sec^2\theta - \tan^2\theta = 1$; for cosec and cot use $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M2",
      mistake: t`Subtracts the wrong way round: $\tan^2\theta - \sec^2\theta = 1$ (or $\cot^2\theta - \operatorname{cosec}^2\theta = 1$)`,
      remediation: t`Since $\sec^2\theta = 1 + \tan^2\theta$, the sec term is the larger one: $\sec^2\theta - \tan^2\theta = 1$. In the same way, $\operatorname{cosec}^2\theta - \cot^2\theta = 1$, with cosec first.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M3",
      mistake: t`Raises the variable to the power but not its coefficient: $\left(\frac{x}{a}\right)^2$ taken as $\frac{x^2}{a}$`,
      remediation: t`A power acts on the whole fraction, top and bottom: $\left(\frac{x}{a}\right)^n = \frac{x^n}{a^n}$.`,
      fallback: { kind: "ext", topic: "powers of a fraction" },
    },
    {
      id: "C08-M4",
      mistake: t`Moves the constant term across with the wrong sign: $x = h + a\cos\theta$ gives $\cos\theta = \frac{x + h}{a}$`,
      remediation: t`Subtract the constant from both sides: $x = h + a\cos\theta$ gives $x - h = a\cos\theta$, so $\cos\theta = \frac{x - h}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Treats $\cos^3\theta = \frac{x}{a}$ as if it were $\cos\theta = \frac{x}{a}$, and squares $\frac{x}{a}$`,
      remediation: t`Take the cube root first: $\cos\theta = \left(\frac{x}{a}\right)^{1/3}$, so $\cos^2\theta = \left(\frac{x}{a}\right)^{2/3}$. Squaring $\frac{x}{a}$ gives $\cos^6\theta$, and $\cos^6\theta + \sin^6\theta$ is not $1$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C08-M6",
      mistake: t`Multiplies by the coefficient instead of dividing: $x = a\cos\theta$ gives $\cos\theta = ax$`,
      remediation: t`To get $\cos\theta$ alone, divide both sides by its coefficient: $x = a\cos\theta$ gives $\cos\theta = \frac{x}{a}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "Each misconception shows only on some item types: C08-M1 and C08-M2 on sec/tan or cosec/cot pairs (on sin/cos, adding is right), C08-M4 when there is a constant term, C08-M5 when the functions are cubed. To diagnose one, draw an item of that type.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q4(i)" },
      stem: t`Eliminate $\theta$ from $x = 3\sec\theta$, $y = 4\tan\theta$.`,
      verify: { kind: "value", inputs: { cx: "1", hx: "0", ax: "3", cy: "1", hy: "0", ay: "4", n: "1" }, params: { fx: "sec", fy: "tan" } },
      options: [
        { key: "A", text: t`$\frac{x^2}{9} - \frac{y^2}{16} = 1$`, correct: true, value: "x**2/9 - y**2/16" },
        { key: "B", text: t`$\frac{x^2}{9} + \frac{y^2}{16} = 1$`, correct: false, misconceptionId: "C08-M1", value: "x**2/9 + y**2/16" },
        { key: "C", text: t`$\frac{y^2}{16} - \frac{x^2}{9} = 1$`, correct: false, misconceptionId: "C08-M2", value: "-x**2/9 + y**2/16" },
        { key: "D", text: t`$\frac{x^2}{3} - \frac{y^2}{4} = 1$`, correct: false, misconceptionId: "C08-M3", value: "x**2/3 - y**2/4" },
      ],
      solution: {
        steps: [
          t`$\sec\theta = \frac{x}{3}$ and $\tan\theta = \frac{y}{4}$.`,
          t`Sec and tan are linked by $\sec^2\theta - \tan^2\theta = 1$.`,
          t`So $\frac{x^2}{9} - \frac{y^2}{16} = 1$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q4(ii)" },
      stem: t`Eliminate $\theta$ from $x = 6\operatorname{cosec}\theta$, $y = 8\cot\theta$.`,
      verify: { kind: "value", inputs: { cx: "1", hx: "0", ax: "6", cy: "1", hy: "0", ay: "8", n: "1" }, params: { fx: "cosec", fy: "cot" } },
      options: [
        { key: "A", text: t`$\frac{x^2}{36} + \frac{y^2}{64} = 1$`, correct: false, misconceptionId: "C08-M1", value: "x**2/36 + y**2/64" },
        { key: "B", text: t`$\frac{y^2}{64} - \frac{x^2}{36} = 1$`, correct: false, misconceptionId: "C08-M2", value: "-x**2/36 + y**2/64" },
        { key: "C", text: t`$36x^2 - 64y^2 = 1$`, correct: false, misconceptionId: "C08-M6", value: "36*x**2 - 64*y**2" },
        { key: "D", text: t`$\frac{x^2}{36} - \frac{y^2}{64} = 1$`, correct: true, value: "x**2/36 - y**2/64" },
      ],
      solution: {
        steps: [
          t`$\operatorname{cosec}\theta = \frac{x}{6}$ and $\cot\theta = \frac{y}{8}$.`,
          t`Cosec and cot are linked by $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
          t`So $\frac{x^2}{36} - \frac{y^2}{64} = 1$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q4(iv)" },
      stem: t`Eliminate $\theta$ from $x = 5 + 6\operatorname{cosec}\theta$, $y = 3 + 8\cot\theta$.`,
      verify: { kind: "value", inputs: { cx: "1", hx: "5", ax: "6", cy: "1", hy: "3", ay: "8", n: "1" }, params: { fx: "cosec", fy: "cot" } },
      options: [
        { key: "A", text: t`$\frac{(x - 5)^2}{36} + \frac{(y - 3)^2}{64} = 1$`, correct: false, misconceptionId: "C08-M1", value: "(x - 5)**2/36 + (y - 3)**2/64" },
        { key: "B", text: t`$\frac{(x - 5)^2}{6} - \frac{(y - 3)^2}{8} = 1$`, correct: false, misconceptionId: "C08-M3", value: "(x - 5)**2/6 - (y - 3)**2/8" },
        { key: "C", text: t`$\frac{(x + 5)^2}{36} - \frac{(y + 3)^2}{64} = 1$`, correct: false, misconceptionId: "C08-M4", value: "(x + 5)**2/36 - (y + 3)**2/64" },
        { key: "D", text: t`$\frac{(x - 5)^2}{36} - \frac{(y - 3)^2}{64} = 1$`, correct: true, value: "(x - 5)**2/36 - (y - 3)**2/64" },
      ],
      solution: {
        steps: [
          t`Move the constants: $x - 5 = 6\operatorname{cosec}\theta$ and $y - 3 = 8\cot\theta$.`,
          t`So $\operatorname{cosec}\theta = \frac{x - 5}{6}$ and $\cot\theta = \frac{y - 3}{8}$.`,
          t`$\operatorname{cosec}^2\theta - \cot^2\theta = 1$ gives $\frac{(x - 5)^2}{36} - \frac{(y - 3)^2}{64} = 1$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q4(v)" },
      stem: t`Eliminate $\theta$ from $2x = 3 - 4\tan\theta$, $3y = 5 + 3\sec\theta$.`,
      verify: { kind: "value", inputs: { cx: "2", hx: "3", ax: "-4", cy: "3", hy: "5", ay: "3", n: "1" }, params: { fx: "tan", fy: "sec" } },
      options: [
        { key: "A", text: t`$\frac{(2x - 3)^2}{16} - \frac{(3y - 5)^2}{9} = 1$`, correct: false, misconceptionId: "C08-M2", value: "(2*x - 3)**2/16 - (3*y - 5)**2/9" },
        { key: "B", text: t`$\frac{(3y + 5)^2}{9} - \frac{(2x + 3)^2}{16} = 1$`, correct: false, misconceptionId: "C08-M4", value: "-(2*x + 3)**2/16 + (3*y + 5)**2/9" },
        { key: "C", text: t`$\frac{(3y - 5)^2}{9} - \frac{(2x - 3)^2}{16} = 1$`, correct: true, value: "-(2*x - 3)**2/16 + (3*y - 5)**2/9" },
        { key: "D", text: t`$\frac{(3y - 5)^2}{9} + \frac{(2x - 3)^2}{16} = 1$`, correct: false, misconceptionId: "C08-M1", value: "(2*x - 3)**2/16 + (3*y - 5)**2/9" },
      ],
      solution: {
        steps: [
          t`From $2x = 3 - 4\tan\theta$: $4\tan\theta = 3 - 2x$, so $\tan\theta = \frac{3 - 2x}{4}$.`,
          t`From $3y = 5 + 3\sec\theta$: $3\sec\theta = 3y - 5$, so $\sec\theta = \frac{3y - 5}{3}$.`,
          t`$\sec^2\theta - \tan^2\theta = 1$ gives $\frac{(3y - 5)^2}{9} - \frac{(3 - 2x)^2}{16} = 1$.`,
          t`Since $(3 - 2x)^2 = (2x - 3)^2$, this is $\frac{(3y - 5)^2}{9} - \frac{(2x - 3)^2}{16} = 1$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.8(ii)" },
      stem: t`Eliminate $\theta$ from $x = 8\cos^3\theta$, $y = 27\sin^3\theta$.`,
      verify: { kind: "value", inputs: { cx: "1", hx: "0", ax: "8", cy: "1", hy: "0", ay: "27", n: "3" }, params: { fx: "cos", fy: "sin" } },
      options: [
        { key: "A", text: t`$4x^{2/3} + 9y^{2/3} = 1$`, correct: false, misconceptionId: "C08-M6", value: "4*x**(2/3) + 9*y**(2/3)" },
        { key: "B", text: t`$\frac{x^{2/3}}{4} + \frac{y^{2/3}}{9} = 1$`, correct: true, value: "x**(2/3)/4 + y**(2/3)/9" },
        { key: "C", text: t`$\frac{x^{2/3}}{8} + \frac{y^{2/3}}{27} = 1$`, correct: false, misconceptionId: "C08-M3", value: "x**(2/3)/8 + y**(2/3)/27" },
        { key: "D", text: t`$\frac{x^2}{64} + \frac{y^2}{729} = 1$`, correct: false, misconceptionId: "C08-M5", value: "x**2/64 + y**2/729" },
      ],
      solution: {
        steps: [
          t`$\cos^3\theta = \frac{x}{8}$, so $\cos\theta = \left(\frac{x}{8}\right)^{1/3} = \frac{x^{1/3}}{2}$. Likewise $\sin\theta = \frac{y^{1/3}}{3}$.`,
          t`Square: $\cos^2\theta = \frac{x^{2/3}}{4}$ and $\sin^2\theta = \frac{y^{2/3}}{9}$.`,
          t`$\cos^2\theta + \sin^2\theta = 1$ gives $\frac{x^{2/3}}{4} + \frac{y^{2/3}}{9} = 1$.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.8(iii)" },
      stem: t`Eliminate $\theta$ from $x = 3 + 2\cos\theta$, $y = 1 + 4\sin\theta$.`,
      verify: { kind: "value", inputs: { cx: "1", hx: "3", ax: "2", cy: "1", hy: "1", ay: "4", n: "1" }, params: { fx: "cos", fy: "sin" } },
      options: [
        { key: "A", text: t`$\frac{(x + 3)^2}{4} + \frac{(y + 1)^2}{16} = 1$`, correct: false, misconceptionId: "C08-M4", value: "(x + 3)**2/4 + (y + 1)**2/16" },
        { key: "B", text: t`$4(x - 3)^2 + 16(y - 1)^2 = 1$`, correct: false, misconceptionId: "C08-M6", value: "4*(x - 3)**2 + 16*(y - 1)**2" },
        { key: "C", text: t`$\frac{(x - 3)^2}{4} + \frac{(y - 1)^2}{16} = 1$`, correct: true, value: "(x - 3)**2/4 + (y - 1)**2/16" },
        { key: "D", text: t`$\frac{(x - 3)^2}{2} + \frac{(y - 1)^2}{4} = 1$`, correct: false, misconceptionId: "C08-M3", value: "(x - 3)**2/2 + (y - 1)**2/4" },
      ],
      solution: {
        steps: [
          t`Move the constants: $x - 3 = 2\cos\theta$ and $y - 1 = 4\sin\theta$.`,
          t`So $\cos\theta = \frac{x - 3}{2}$ and $\sin\theta = \frac{y - 1}{4}$.`,
          t`$\cos^2\theta + \sin^2\theta = 1$ gives $\frac{(x - 3)^2}{4} + \frac{(y - 1)^2}{16} = 1$.`,
        ],
      },
    },
  ],
};
