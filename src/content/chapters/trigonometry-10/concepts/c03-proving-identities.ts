import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`At $\theta = 60^\circ$: $\sec\theta - \cos\theta$ $= 2 - \frac{1}{2} = \frac{3}{2}$, and $\sin\theta\tan\theta$ $= \frac{\sqrt{3}}{2} \times \sqrt{3} = \frac{3}{2}$. **Does this prove that $\sec\theta - \cos\theta$ equals $\sin\theta\tan\theta$ for every $\theta$?**`,
    reveal: t`No. One angle only checks one case. A proof changes one side, line by line, into the other, using rules true for every $\theta$: $\sec\theta - \cos\theta$ $= \frac{1 - \cos^2\theta}{\cos\theta} = \frac{\sin^2\theta}{\cos\theta}$ $= \sin\theta\tan\theta$.`,
  },
  explanation: {
    intuition: [
      t`An **identity** is an equation that is true for every angle where both sides are defined.`,
      t`To prove one, work on one side only; it is not an equation to solve.`,
      t`Start from one side, usually the longer or harder one, called the **left-hand side** (L.H.S.).`,
      t`Change it one line at a time; each line must equal the line before it.`,
      t`Stop when it has become the other side, the **right-hand side** (R.H.S.).`,
      t`The tools are the definitions of the ratios, the three identities, and algebra.`,
    ],
    formal: [
      {
        title: "Moves that always work",
        points: [
          t`Write every ratio in $\sin\theta$ and $\cos\theta$: $\tan\theta = \frac{\sin\theta}{\cos\theta}$, $\sec\theta = \frac{1}{\cos\theta}$.`,
          t`Likewise $\cot\theta = \frac{\cos\theta}{\sin\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$.`,
          t`Add fractions over a **common denominator**, a bottom both fractions share.`,
          t`$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$; never add the tops and the bottoms.`,
          t`Take a common factor out: $\tan^4\theta + \tan^2\theta$ $= \tan^2\theta(\tan^2\theta + 1)$.`,
        ],
      },
      {
        title: "The identities, turned around",
        points: [
          t`Each identity can be rearranged; a term changes sign when it moves across $=$.`,
          t`$\sin^2\theta + \cos^2\theta = 1$ gives $1 - \sin^2\theta = \cos^2\theta$.`,
          t`$1 + \tan^2\theta = \sec^2\theta$ gives $\sec^2\theta - \tan^2\theta = 1$.`,
          t`It also gives $\sec^2\theta - 1 = \tan^2\theta$.`,
          t`$1 + \cot^2\theta = \operatorname{cosec}^2\theta$ gives $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
          t`Remember the pairs: $\tan$ goes with $\sec$, and $\cot$ goes with $\operatorname{cosec}$.`,
        ],
      },
      {
        title: "Squares and conjugates",
        points: [
          t`A square of a sum keeps its middle term: $(a + b)^2 = a^2 + 2ab + b^2$.`,
          t`So $(\sin\theta + \cos\theta)^2 = 1 + 2\sin\theta\cos\theta$, not $1$.`,
          t`A **difference of squares** factorises: $a^2 - b^2 = (a - b)(a + b)$.`,
          t`So $1 - \sin^4\theta = (1 - \sin^2\theta)(1 + \sin^2\theta)$.`,
          t`Read backwards, $(1 - \sin\theta)(1 + \sin\theta)$ $= 1 - \sin^2\theta = \cos^2\theta$.`,
          t`Multiplying top and bottom by such a partner, a **conjugate**, clears a bracket from the bottom.`,
        ],
      },
      {
        title: "Eliminating theta",
        points: [
          t`To **eliminate** $\theta$ means to find a relation between $x$ and $y$ with no $\theta$ in it.`,
          t`From each equation, write one ratio in terms of $x$ or $y$.`,
          t`Pick the identity that links those two ratios.`,
          t`If $x = 5\sec\theta$ and $y = 5\tan\theta$, then $\sec\theta = \frac{x}{5}$, $\tan\theta = \frac{y}{5}$.`,
          t`$\sec^2\theta - \tan^2\theta = 1$ gives $\frac{x^2}{25} - \frac{y^2}{25} = 1$.`,
          t`So $x^2 - y^2 = 25$, and $\theta$ is gone.`,
        ],
      },
    ],
    worked: {
      prompt: t`Prove that $\cot\theta + \tan\theta = \operatorname{cosec}\theta\sec\theta$.`,
      steps: [
        t`The left side has two terms, so start there. In $\sin\theta$ and $\cos\theta$: L.H.S. $= \frac{\cos\theta}{\sin\theta} + \frac{\sin\theta}{\cos\theta}$.`,
        t`Use the common denominator $\sin\theta\cos\theta$: L.H.S. $= \frac{\cos^2\theta + \sin^2\theta}{\sin\theta\cos\theta}$.`,
        t`Since $\sin^2\theta + \cos^2\theta = 1$, L.H.S. $= \frac{1}{\sin\theta\cos\theta}$.`,
        t`Split it: $\frac{1}{\sin\theta} \times \frac{1}{\cos\theta}$ $= \operatorname{cosec}\theta\sec\theta$, which is the R.H.S.`,
      ],
      answer: t`$\cot\theta + \tan\theta = \operatorname{cosec}\theta\sec\theta$ for every $\theta$ where both sides are defined.`,
    },
    visualSpec: t`A proof ladder: pick a move for each line (write in $\sin\theta$ and $\cos\theta$, use an identity, add fractions) and watch the left side climb to the right side.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Pairs the wrong ratios in the identities: $1 + \tan^2\theta = \operatorname{cosec}^2\theta$ and $1 + \cot^2\theta = \sec^2\theta$ (so $\sec^2\theta - 1 = \cot^2\theta$).`,
      remediation: t`$\tan$ pairs with $\sec$: $1 + \tan^2\theta = \sec^2\theta$, so $\sec^2\theta - 1 = \tan^2\theta$. $\cot$ pairs with $\operatorname{cosec}$: $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Rearranges an identity with the sign reversed: $1 - \sin^2\theta = -\cos^2\theta$, $\sec^2\theta - 1 = -\tan^2\theta$, $\operatorname{cosec}^2\theta - \cot^2\theta = -1$.`,
      remediation: t`Move a term across $=$ and change its sign once: $\sin^2\theta + \cos^2\theta = 1$ gives $1 - \sin^2\theta = \cos^2\theta$, and $1 + \tan^2\theta = \sec^2\theta$ gives $\sec^2\theta - \tan^2\theta = 1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Squares a sum or difference term by term, $(a \pm b)^2 = a^2 \pm b^2$, and so reads $a^2 - b^2$ as $(a - b)^2$.`,
      remediation: t`$(a + b)^2 = a^2 + 2ab + b^2$ keeps its middle term. A difference of squares factorises as $a^2 - b^2 = (a - b)(a + b)$, not $(a - b)^2$.`,
      fallback: { kind: "ext", topic: "algebraic identities and fractions (Std IX Polynomials)" },
    },
    {
      id: "C03-M4",
      mistake: "Adds two fractions by adding the tops and adding the bottoms.",
      remediation: t`Fractions add over a common denominator: $\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$. For example, $\frac{1}{2} + \frac{1}{3} = \frac{5}{6}$, not $\frac{2}{5}$.`,
      fallback: { kind: "ext", topic: "algebraic identities and fractions (Std IX Polynomials)" },
    },
    {
      id: "C03-M5",
      mistake: t`Mixes up the reciprocals: $\sec\theta = \frac{1}{\sin\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\cos\theta}$.`,
      remediation: t`$\sec\theta = \frac{1}{\cos\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: each pair has exactly one co, so $\sec$ goes with $\cos$ and $\operatorname{cosec}$ with $\sin$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios and standard angles (Std IX Trigonometry)" },
    },
    {
      id: "C03-M6",
      mistake: t`Takes square roots term by term in $\sin^2\theta + \cos^2\theta = 1$ and believes $\sin\theta + \cos\theta = 1$.`,
      remediation: t`Only the squares add to $1$: at $\theta = 45^\circ$, $\sin\theta + \cos\theta = \sqrt{2}$, not $1$. Square $x$ and $y$ before you add them.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C03-M1 and C03-M5 agree wherever $1 + \tan^2\theta$ is turned into $\sec^2\theta$ and then into $\sin\theta$ and $\cos\theta$: both turn $\cos^2\theta(1 + \tan^2\theta)$ into $\cot^2\theta$. Tell them apart with items where only one acts: C03-Q1 and C03-Q5 for M1, C03-Q3 and C03-Q4 for M5.`,
    t`C03-M2 gives the key on $\cot^2\theta - \tan^2\theta$ (both identities flip the same way), so it is never tested there.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/geo-2017/Q4(ii)" },
      stem: t`Eliminating $\theta$ from $x = 4\operatorname{cosec}\theta$ and $y = 4\cot\theta$ gives:`,
      verify: { kind: "locus", inputs: { a: "4" }, params: { pair: "cosec-cot" } },
      options: [
        { key: "A", text: t`$y^2 - x^2 = 16$`, correct: false, misconceptionId: "C03-M2", value: "-x**2 + y**2 - 16" },
        { key: "B", text: t`$(x - y)^2 = 16$`, correct: false, misconceptionId: "C03-M3", value: "(x - y)**2 - 16" },
        { key: "C", text: t`$x^2 - y^2 = 16$`, correct: true, value: "x**2 - y**2 - 16" },
        { key: "D", text: t`$(x^2 - 16)y^2 = 256$`, correct: false, misconceptionId: "C03-M1", value: "x**2*y**2 - 16*y**2 - 256" },
      ],
      solution: {
        steps: [
          t`From the two equations, $\operatorname{cosec}\theta = \frac{x}{4}$ and $\cot\theta = \frac{y}{4}$.`,
          t`$\operatorname{cosec}$ pairs with $\cot$: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
          t`So $\frac{x^2}{16} - \frac{y^2}{16} = 1$, that is, $x^2 - y^2 = 16$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/geo-2023/Q5(2)" },
      stem: t`Eliminating $\theta$ from $x = 3\cos\theta$ and $y = 3\sin\theta$ gives:`,
      verify: { kind: "locus", inputs: { a: "3" }, params: { pair: "cos-sin" } },
      options: [
        { key: "A", text: t`$(x + y)^2 = 9$`, correct: false, misconceptionId: "C03-M3", value: "(x + y)**2 - 9" },
        { key: "B", text: t`$x + y = 3$`, correct: false, misconceptionId: "C03-M6", value: "x + y - 3" },
        { key: "C", text: t`$x^2 + y^2 = 9$`, correct: true, value: "x**2 + y**2 - 9" },
        { key: "D", text: t`$y^2 - x^2 = 9$`, correct: false, misconceptionId: "C03-M2", value: "-x**2 + y**2 - 9" },
      ],
      solution: {
        steps: [
          t`From the two equations, $\cos\theta = \frac{x}{3}$ and $\sin\theta = \frac{y}{3}$.`,
          t`Square and add: $\frac{x^2}{9} + \frac{y^2}{9} = \cos^2\theta + \sin^2\theta = 1$.`,
          t`So $x^2 + y^2 = 9$. Adding $x + y$ first would need $\sin\theta + \cos\theta$, which is not $1$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/geo-trigonometry-10/PS6 Q.5 (6)" },
      stem: t`$\dfrac{1}{1 - \sin\theta} + \dfrac{1}{1 + \sin\theta}$ simplifies to:`,
      verify: { kind: "value", inputs: { L: "1/(1 - sin(x)) + 1/(1 + sin(x))", S: "2/(1 - sin(x)**2)", R: "2*sec(x)**2" }, params: { atM2: "S", atM5: "R" } },
      options: [
        { key: "A", text: t`$-2\sec^2\theta$`, correct: false, misconceptionId: "C03-M2", value: "-2/cos(x)**2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C03-M4", value: "1" },
        { key: "C", text: t`$2\operatorname{cosec}^2\theta$`, correct: false, misconceptionId: "C03-M5", value: "2/sin(x)**2" },
        { key: "D", text: t`$2\sec^2\theta$`, correct: true, value: "2/cos(x)**2" },
      ],
      solution: {
        steps: [
          t`Common denominator $(1 - \sin\theta)(1 + \sin\theta)$: the top is $(1 + \sin\theta) + (1 - \sin\theta) = 2$.`,
          t`The bottom is $1 - \sin^2\theta = \cos^2\theta$, so the sum is $\frac{2}{\cos^2\theta}$.`,
          t`$\frac{1}{\cos\theta} = \sec\theta$, so the sum is $2\sec^2\theta$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/geo-trigonometry-10/Ex 6.1 Q.6 (11)" },
      stem: t`Asha is proving $\sec^4 A(1 - \sin^4 A)$ $- 2\tan^2 A = 1$. Her next line simplifies $\sec^4 A(1 - \sin^4 A)$ to:`,
      verify: { kind: "value", inputs: { L: "sec(x)**4*(1 - sin(x)**4)", S: "sec(x)**4*(1 - sin(x)**2)*(1 + sin(x)**2)" }, params: { atM2: "S" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C03-M3", value: "1" },
        { key: "B", text: t`$\operatorname{cosec}^4 A - 1$`, correct: false, misconceptionId: "C03-M5", value: "-1 + sin(x)**(-4)" },
        { key: "C", text: t`$\dfrac{1 + \sin^2 A}{\cos^2 A}$`, correct: true, value: "(1 - sin(x)**4)/cos(x)**4" },
        { key: "D", text: t`$-\dfrac{1 + \sin^2 A}{\cos^2 A}$`, correct: false, misconceptionId: "C03-M2", value: "1 - 2/cos(x)**2" },
      ],
      solution: {
        steps: [
          t`Factorise the difference of squares: $1 - \sin^4 A = (1 - \sin^2 A)(1 + \sin^2 A)$.`,
          t`$1 - \sin^2 A = \cos^2 A$, so this is $\cos^2 A(1 + \sin^2 A)$.`,
          t`$\sec^4 A = \frac{1}{\cos^4 A}$, so the product is $\frac{1 + \sin^2 A}{\cos^2 A}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/geo-trigonometry-10/PS6 Q.5 (8)" },
      stem: t`Multiply the top and bottom of $\dfrac{\tan\theta}{\sec\theta + 1}$ by $(\sec\theta - 1)$. It simplifies to:`,
      verify: { kind: "value", inputs: { L: "tan(x)/(sec(x) + 1)", S: "tan(x)*(sec(x) - 1)/(sec(x)**2 - 1)" }, params: { atM1: "S", atM2: "S", atM3: "S" } },
      options: [
        { key: "A", text: t`$\dfrac{\sec\theta - 1}{\tan\theta}$`, correct: true, value: "sin(x)/(cos(x) + 1)" },
        { key: "B", text: t`$\tan^3\theta(\sec\theta - 1)$`, correct: false, misconceptionId: "C03-M1", value: "(1 - cos(x))*sin(x)**3/cos(x)**4" },
        { key: "C", text: t`$\dfrac{1 - \sec\theta}{\tan\theta}$`, correct: false, misconceptionId: "C03-M2", value: "(cos(x) - 1)/sin(x)" },
        { key: "D", text: t`$\dfrac{\tan\theta}{\sec\theta - 1}$`, correct: false, misconceptionId: "C03-M3", value: "-sin(x)/(cos(x) - 1)" },
      ],
      solution: {
        steps: [
          t`The top becomes $\tan\theta(\sec\theta - 1)$; the bottom is $(\sec\theta + 1)(\sec\theta - 1)$ $= \sec^2\theta - 1$.`,
          t`$\sec^2\theta - 1 = \tan^2\theta$, so the fraction is $\frac{\tan\theta(\sec\theta - 1)}{\tan^2\theta}$.`,
          t`Cancel one $\tan\theta$: it is $\frac{\sec\theta - 1}{\tan\theta}$.`,
        ],
      },
    },
  ],
};
