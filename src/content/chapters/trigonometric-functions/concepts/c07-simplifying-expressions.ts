import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`$\sin^2\theta + \cos^2\theta = 1$. **Is $\sin^6\theta + \cos^6\theta$ also $1$?** Try $\theta = 45^\circ$.`,
    reveal: t`No. At $45^\circ$, $\sin^6\theta = \cos^6\theta = \left(\frac{1}{\sqrt{2}}\right)^6 = \frac{1}{8}$, so the sum is $\frac{1}{4}$. Write it as $(\sin^2\theta)^3 + (\cos^2\theta)^3$ and use $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$ with $a + b = 1$: $\sin^6\theta + \cos^6\theta = 1 - 3\sin^2\theta\cos^2\theta$. At $45^\circ$ that is $1 - \frac{3}{4} = \frac{1}{4}$.`,
  },
  explanation: {
    intuition: [
      t`To **simplify** an expression is to rewrite it in a shorter form with the same value for every $\theta$.`,
      t`There are six trigonometric ratios, but all of them are built from $\sin\theta$ and $\cos\theta$.`,
      t`So rewrite a tangled expression in $\sin\theta$ and $\cos\theta$ only: it becomes ordinary fractions.`,
      t`Then the **identity** $\sin^2\theta + \cos^2\theta = 1$, an equation true for every $\theta$, cleans up the rest.`,
      t`When $\tan\theta$ is given, you don't need $\sin\theta$ and $\cos\theta$ separately.`,
      t`Divide the top and the bottom by $\cos\theta$, and every $\sin\theta$ turns into $\tan\theta$.`,
    ],
    formal: [
      {
        title: "Change everything to sin and cos",
        points: [
          t`First, write every ratio in terms of $\sin\theta$ and $\cos\theta$.`,
          t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ and $\cot\theta = \frac{\cos\theta}{\sin\theta}$.`,
          t`$\sec\theta = \frac{1}{\cos\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$.`,
          t`Next, put the fractions over a **common denominator**, one bottom that they all share.`,
          t`Last, use $\sin^2\theta + \cos^2\theta = 1$ to clean up.`,
        ],
      },
      {
        title: "When tan θ is given",
        points: [
          t`A **term** is one piece of a sum, such as $2\sin\theta$ in $2\sin\theta + 3\cos\theta$.`,
          t`Suppose every term, on the top and the bottom, has one $\sin\theta$ or one $\cos\theta$.`,
          t`Divide the top and the bottom by $\cos\theta$: the fraction keeps its value.`,
          t`Each $\sin\theta$ becomes $\tan\theta$, and each $\cos\theta$ becomes $1$, wherever the term stands.`,
          t`So $\frac{a\sin\theta + b\cos\theta}{c\sin\theta + d\cos\theta} = \frac{a\tan\theta + b}{c\tan\theta + d}$.`,
          t`Now put in the given value of $\tan\theta$.`,
        ],
      },
      {
        title: "When the terms are squares",
        points: [
          t`When the terms are squares, such as $\sin^2\theta$ and $\cos^2\theta$, divide the top and the bottom by $\cos^2\theta$.`,
          t`Then $\frac{\sin^2\theta}{\cos^2\theta} = \tan^2\theta$ and $\frac{\cos^2\theta}{\cos^2\theta} = 1$.`,
          t`Or use the identities $\sec^2\theta = 1 + \tan^2\theta$ and $\operatorname{cosec}^2\theta = 1 + \cot^2\theta$.`,
          t`A given $\tan\theta$ also gives $\cot\theta = \frac{1}{\tan\theta}$, so both identities can be used.`,
          t`Keep the $1$ in each: $\sec^2\theta$ is not $\tan^2\theta$.`,
        ],
      },
      {
        title: "Expand with the algebra identities",
        points: [
          t`To **expand** a bracket is to multiply it out into separate terms.`,
          t`$(a + b)^2 = a^2 + 2ab + b^2$.`,
          t`$(a - b)^2 = a^2 - 2ab + b^2$.`,
          t`Keep the middle term $2ab$: $(a + b)^2$ is not $a^2 + b^2$.`,
          t`For cubes, $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$.`,
        ],
      },
      {
        title: "Products that equal one",
        points: [
          t`A ratio's **reciprocal** is the ratio turned upside down, such as $\sec\theta = \frac{1}{\cos\theta}$.`,
          t`A ratio times its reciprocal is $1$.`,
          t`So $\sin\theta\operatorname{cosec}\theta = 1$, $\cos\theta\sec\theta = 1$ and $\tan\theta\cot\theta = 1$.`,
          t`Watch for these products: they often hide in the middle term after you expand.`,
          t`Also, over a common denominator, $\tan\theta + \cot\theta = \frac{\sin^2\theta + \cos^2\theta}{\sin\theta\cos\theta}$.`,
          t`Its top is $1$, so $\tan\theta + \cot\theta = \frac{1}{\sin\theta\cos\theta} = \sec\theta\operatorname{cosec}\theta$.`,
        ],
      },
      {
        title: "Proving L = R",
        points: [
          t`To **prove** an identity $L = R$ is to show that the left side $L$ always equals the right side $R$.`,
          t`Start from the more complicated side.`,
          t`Simplify it until it becomes the other side.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\tan A = \frac{4}{3}$, find $\dfrac{2\sin A - 3\cos A}{2\sin A + 3\cos A}$.`,
      steps: [
        t`Every term has one $\sin A$ or one $\cos A$, so divide the top and the bottom by $\cos A$: $\frac{\sin A}{\cos A} = \tan A$ and $\frac{\cos A}{\cos A} = 1$.`,
        t`The expression becomes $\dfrac{2\tan A - 3}{2\tan A + 3}$.`,
        t`Put $\tan A = \frac{4}{3}$: the top is $\frac{8}{3} - 3 = -\frac{1}{3}$ and the bottom is $\frac{8}{3} + 3 = \frac{17}{3}$.`,
      ],
      answer: t`$\dfrac{2\sin A - 3\cos A}{2\sin A + 3\cos A} = -\dfrac{1}{17}$.`,
    },
    visualSpec: t`Drag $\theta$ and watch a tangled expression and its simplified form trace the same graph, while a wrongly simplified version peels away from it.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Mixes up the reciprocals: $\sec\theta = \frac{1}{\sin\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\cos\theta}$`,
      remediation: t`$\sec\theta = \frac{1}{\cos\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: each pair has exactly one 'co'. Rewrite each ratio this way before you simplify.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M2",
      mistake: t`Writes $\tan\theta$ upside down: $\tan\theta = \frac{\cos\theta}{\sin\theta}$ (and $\cot\theta = \frac{\sin\theta}{\cos\theta}$)`,
      remediation: t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ and $\cot\theta = \frac{\cos\theta}{\sin\theta}$. So dividing by $\cos\theta$ turns $\sin\theta$ into $\tan\theta$, and $\tan\theta = \frac{p}{q}$ means $\sin\theta : \cos\theta = p : q$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C07-M3",
      mistake: t`Squares a sum or difference term by term: $(a \pm b)^2 = a^2 \pm b^2$`,
      remediation: t`$(a + b)^2 = a^2 + 2ab + b^2$ and $(a - b)^2 = a^2 - 2ab + b^2$. Keep the middle term: products like $\sin\theta\operatorname{cosec}\theta = 1$ often hide there.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
    {
      id: "C07-M4",
      mistake: t`Cancels like terms across a fraction: $\frac{p + q}{r + s} = \frac{p}{r} + \frac{q}{s}$`,
      remediation: t`You can cancel only a factor of the whole top and the whole bottom. Divide every term by the same thing, such as $\cos\theta$, or combine the terms first.`,
      fallback: { kind: "ext", topic: "algebraic fractions" },
    },
    {
      id: "C07-M5",
      mistake: t`Divides through by $\cos\theta$ but puts $\tan\theta$ on the first term of a denominator written $\cos\theta$ first`,
      remediation: t`Dividing by $\cos\theta$ turns each $\sin\theta$ into $\tan\theta$ and each $\cos\theta$ into $1$, wherever the term stands: $c\cos\theta + d\sin\theta$ becomes $c + d\tan\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Drops the $1$ from the identities: $\sec^2\theta = \tan^2\theta$ and $\operatorname{cosec}^2\theta = \cot^2\theta$`,
      remediation: t`$\sec^2\theta = 1 + \tan^2\theta$ and $\operatorname{cosec}^2\theta = 1 + \cot^2\theta$. In a difference the $1$s cancel, but in a sum they add up, so count every one.`,
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  engineNotes: [
    t`C07-M1 needs a $\sec\theta$ or $\operatorname{cosec}\theta$ in the expression; C07-M2 needs a $\tan\theta$ or $\cot\theta$, or a given value of $\tan\theta$.`,
    t`C07-M1 and C07-M2 land on the same option when swapping $\sin\theta$ and $\cos\theta$ maps the expression to itself: C07-Q2 (tagged M1) and C07-Q4 (tagged M2). Use C07-Q5 to tell them apart.`,
    t`C07-M5 applies only when the denominator is printed with its $\cos\theta$ term first (params den = cos-first), as in C07-Q1.`,
    t`C07-M4 needs top and bottom made of like terms; C07-M3 needs a squared sum; C07-M6 needs a $\sec^2\theta$ or $\operatorname{cosec}^2\theta$ after expanding.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q3" },
      stem: t`If $\tan\theta = \frac{1}{2}$, then $\dfrac{2\sin\theta + 3\cos\theta}{4\cos\theta + 3\sin\theta}$ equals:`,
      verify: { kind: "value", inputs: { L: "(2*sin(x) + 3*cos(x))/(4*cos(x) + 3*sin(x))", t: "1/2" }, params: { den: "cos-first" } },
      options: [
        { key: "A", text: t`$\frac{17}{12}$`, correct: false, misconceptionId: "C07-M4", value: "17/12" },
        { key: "B", text: t`$\frac{4}{5}$`, correct: false, misconceptionId: "C07-M5", value: "4/5" },
        { key: "C", text: t`$\frac{8}{11}$`, correct: true, value: "8/11" },
        { key: "D", text: t`$\frac{7}{10}$`, correct: false, misconceptionId: "C07-M2", value: "7/10" },
      ],
      solution: {
        steps: [
          t`Divide the top and the bottom by $\cos\theta$. In the bottom, $4\cos\theta$ becomes $4$ and $3\sin\theta$ becomes $3\tan\theta$: $\dfrac{2\tan\theta + 3}{4 + 3\tan\theta}$.`,
          t`Put $\tan\theta = \frac{1}{2}$: the top is $1 + 3 = 4$ and the bottom is $4 + \frac{3}{2} = \frac{11}{2}$.`,
          t`The value is $4 \div \frac{11}{2} = \frac{8}{11}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.6" },
      stem: t`If $\tan\theta = \frac{1}{\sqrt{7}}$, then $\dfrac{\operatorname{cosec}^2\theta - \sec^2\theta}{\operatorname{cosec}^2\theta + \sec^2\theta}$ equals:`,
      verify: { kind: "value", inputs: { L: "(csc(x)**2 - sec(x)**2)/(csc(x)**2 + sec(x)**2)", t: "1/sqrt(7)" } },
      options: [
        { key: "A", text: t`$- \frac{3}{4}$`, correct: false, misconceptionId: "C07-M1", value: "-3/4" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C07-M4", value: "0" },
        { key: "C", text: t`$\frac{24}{25}$`, correct: false, misconceptionId: "C07-M6", value: "24/25" },
        { key: "D", text: t`$\frac{3}{4}$`, correct: true, value: "3/4" },
      ],
      solution: {
        steps: [
          t`$\cot\theta = \sqrt{7}$, so $\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 8$, and $\sec^2\theta = 1 + \tan^2\theta = 1 + \frac{1}{7} = \frac{8}{7}$.`,
          t`Top: $8 - \frac{8}{7} = \frac{48}{7}$. Bottom: $8 + \frac{8}{7} = \frac{64}{7}$.`,
          t`The value is $\frac{48}{64} = \frac{3}{4}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q10(xi)" },
      stem: t`$(\sin\theta + \operatorname{cosec}\theta)^2 + (\cos\theta + \sec\theta)^2$ simplifies to:`,
      verify: { kind: "value", inputs: { L: "(sin(x) + csc(x))**2 + (cos(x) + sec(x))**2" } },
      options: [
        { key: "A", text: t`$\tan^2\theta + \cot^2\theta + 5$`, correct: false, misconceptionId: "C07-M6", value: "tan(x)**2 + cot(x)**2 + 5" },
        { key: "B", text: t`$\tan^2\theta + \cot^2\theta + 7$`, correct: true, value: "tan(x)**2 + cot(x)**2 + 7" },
        { key: "C", text: t`$(1 + \sec\theta\operatorname{cosec}\theta)^2$`, correct: false, misconceptionId: "C07-M1", value: "(1 + sec(x)*csc(x))**2" },
        { key: "D", text: t`$\tan^2\theta + \cot^2\theta + 3$`, correct: false, misconceptionId: "C07-M3", value: "tan(x)**2 + cot(x)**2 + 3" },
      ],
      solution: {
        steps: [
          t`Expand: $\sin^2\theta + 2\sin\theta\operatorname{cosec}\theta + \operatorname{cosec}^2\theta + \cos^2\theta + 2\cos\theta\sec\theta + \sec^2\theta$.`,
          t`$\sin\theta\operatorname{cosec}\theta = 1$, $\cos\theta\sec\theta = 1$ and $\sin^2\theta + \cos^2\theta = 1$, so this is $5 + \operatorname{cosec}^2\theta + \sec^2\theta$.`,
          t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta$ and $\sec^2\theta = 1 + \tan^2\theta$, so it simplifies to $\tan^2\theta + \cot^2\theta + 7$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q10(iii)" },
      stem: t`$(\tan\theta + \sec\theta)^2 + (\tan\theta - \sec\theta)^2$ simplifies to:`,
      verify: { kind: "value", inputs: { L: "(tan(x) + sec(x))**2 + (tan(x) - sec(x))**2" } },
      options: [
        { key: "A", text: t`$4\tan^2\theta + 2$`, correct: true, value: "4*tan(x)**2 + 2" },
        { key: "B", text: t`$2\tan^2\theta + 2\cot^2\theta + 2$`, correct: false, misconceptionId: "C07-M2", value: "2*tan(x)**2 + 2*cot(x)**2 + 2" },
        { key: "C", text: t`$2\tan^2\theta$`, correct: false, misconceptionId: "C07-M3", value: "2*tan(x)**2" },
        { key: "D", text: t`$4\tan^2\theta$`, correct: false, misconceptionId: "C07-M6", value: "4*tan(x)**2" },
      ],
      solution: {
        steps: [
          t`Expand: $(\tan^2\theta + 2\tan\theta\sec\theta + \sec^2\theta) + (\tan^2\theta - 2\tan\theta\sec\theta + \sec^2\theta) = 2\tan^2\theta + 2\sec^2\theta$.`,
          t`$\sec^2\theta = 1 + \tan^2\theta$, so this is $2\tan^2\theta + 2 + 2\tan^2\theta = 4\tan^2\theta + 2$.`,
          t`In $\sin$ and $\cos$ it is $\frac{4\sin^2\theta + 2\cos^2\theta}{\cos^2\theta} = 2\left(\frac{1 + \sin^2\theta}{1 - \sin^2\theta}\right)$, the book's form.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.13" },
      stem: t`Written in terms of $\sin\theta$ and $\cos\theta$, $\dfrac{\sec\theta - \tan\theta}{\sec\theta + \tan\theta}$ simplifies to:`,
      verify: { kind: "value", inputs: { L: "(sec(x) - tan(x))/(sec(x) + tan(x))" } },
      options: [
        { key: "A", text: t`$\dfrac{\cos\theta - \sin^2\theta}{\cos\theta + \sin^2\theta}$`, correct: false, misconceptionId: "C07-M1", value: "(cos(x) - sin(x)**2)/(cos(x) + sin(x)**2)" },
        { key: "B", text: t`$\dfrac{\sin\theta - \cos^2\theta}{\sin\theta + \cos^2\theta}$`, correct: false, misconceptionId: "C07-M2", value: "(sin(x) - cos(x)**2)/(sin(x) + cos(x)**2)" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C07-M4", value: "0" },
        { key: "D", text: t`$\dfrac{1 - \sin\theta}{1 + \sin\theta}$`, correct: true, value: "(1 - sin(x))/(1 + sin(x))" },
      ],
      solution: {
        steps: [
          t`$\sec\theta = \frac{1}{\cos\theta}$ and $\tan\theta = \frac{\sin\theta}{\cos\theta}$, so the top is $\frac{1 - \sin\theta}{\cos\theta}$ and the bottom is $\frac{1 + \sin\theta}{\cos\theta}$.`,
          t`The $\cos\theta$ cancels, leaving $\dfrac{1 - \sin\theta}{1 + \sin\theta}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q15(iii)" },
      stem: t`$(\sin\theta + \sec\theta)^2 + (\cos\theta + \operatorname{cosec}\theta)^2$ simplifies to:`,
      verify: { kind: "value", inputs: { L: "(sin(x) + sec(x))**2 + (cos(x) + csc(x))**2" } },
      options: [
        { key: "A", text: t`$(1 + \sec\theta\operatorname{cosec}\theta)^2$`, correct: true, value: "(1 + sec(x)*csc(x))**2" },
        { key: "B", text: t`$\tan^2\theta + \cot^2\theta + 7$`, correct: false, misconceptionId: "C07-M1", value: "tan(x)**2 + cot(x)**2 + 7" },
        { key: "C", text: t`$1 + \sec^2\theta\operatorname{cosec}^2\theta$`, correct: false, misconceptionId: "C07-M3", value: "1 + sec(x)**2*csc(x)**2" },
        { key: "D", text: t`$\tan^2\theta + \cot^2\theta + 2\sec\theta\operatorname{cosec}\theta + 1$`, correct: false, misconceptionId: "C07-M6", value: "tan(x)**2 + cot(x)**2 + 2*sec(x)*csc(x) + 1" },
      ],
      solution: {
        steps: [
          t`Expand: $\sin^2\theta + 2\sin\theta\sec\theta + \sec^2\theta + \cos^2\theta + 2\cos\theta\operatorname{cosec}\theta + \operatorname{cosec}^2\theta$.`,
          t`$\sin\theta\sec\theta = \tan\theta$ and $\cos\theta\operatorname{cosec}\theta = \cot\theta$, so this is $1 + 2(\tan\theta + \cot\theta) + \sec^2\theta + \operatorname{cosec}^2\theta$.`,
          t`$\tan\theta + \cot\theta = \frac{1}{\sin\theta\cos\theta} = \sec\theta\operatorname{cosec}\theta$, and $\sec^2\theta + \operatorname{cosec}^2\theta = \frac{\sin^2\theta + \cos^2\theta}{\sin^2\theta\cos^2\theta} = \sec^2\theta\operatorname{cosec}^2\theta$.`,
          t`So it is $1 + 2\sec\theta\operatorname{cosec}\theta + \sec^2\theta\operatorname{cosec}^2\theta = (1 + \sec\theta\operatorname{cosec}\theta)^2$.`,
        ],
      },
    },
  ],
};
