import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** Plain x- and y-axes (no grid or numbers: the point P(x, y) is any point). */
const axes: FigureElement[] = [
  { kind: "segment", from: [-0.6, 0], to: [5.2, 0], tone: "muted" },
  { kind: "label", at: [5.2, 0], label: "x", labelAt: "s", tone: "muted" },
  { kind: "segment", from: [0, -0.6], to: [0, 3.9], tone: "muted" },
  { kind: "label", at: [0, 3.9], label: "y", labelAt: "w", tone: "muted" },
  { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
];

/** The point P(x, y) on the terminal arm, here (4, 3), so r = 5. */
const P: Pt = [4, 3];

/** The perpendicular from P to the x-axis and its right-angle mark. */
function perpendicular(step?: number): FigureElement[] {
  const at = step === undefined ? {} : { step };
  return [
    { kind: "segment", from: [4, 0], to: P, dashed: true, tone: "muted", ...at },
    { kind: "segment", from: [3.75, 0], to: [3.75, 0.25], tone: "muted", ...at },
    { kind: "segment", from: [3.75, 0.25], to: [4, 0.25], tone: "muted", ...at },
  ];
}

/**
 * The formal slides' base: the triangle from the idea slide, with its sides x, y and r and the
 * angle θ, all muted; each slide shrinks it to a similar triangle with one side 1.
 */
const triangle: FigureElement[] = [
  ...axes,
  { kind: "segment", from: [0, 0], to: P, tone: "muted" },
  ...perpendicular(),
  { kind: "point", at: P, label: "P(x, y)", labelAt: "ne", tone: "muted" },
  { kind: "angle", at: [0, 0], from: 0, to: 36.87, label: "θ", labelAt: "e", tone: "muted" },
  { kind: "label", at: [3.3, 0], label: "x", labelAt: "s", tone: "muted" },
  { kind: "label", at: [4, 1.5], label: "y", labelAt: "e", tone: "muted" },
  { kind: "label", at: [3.2, 2.4], label: "r", labelAt: "nw", tone: "muted" },
];

/** The triangle O, (a, 0), (a, b) with its sides in the `good` tone, appearing at `step`. */
const shrunk = (a: number, b: number, step: number): FigureElement[] => [
  { kind: "segment", from: [0, 0], to: [a, 0], tone: "good", step },
  { kind: "segment", from: [a, 0], to: [a, b], tone: "good", step },
  { kind: "segment", from: [0, 0], to: [a, b], tone: "good", step },
];

const view = { x: [-0.9, 5.6] as [number, number], y: [-0.8, 4.2] as [number, number] };

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`If $\tan\theta + \frac{1}{\tan\theta} = 2$, what is $\tan^2\theta + \frac{1}{\tan^2\theta}$? **Is it $4$?**`,
    reveal: t`No, it is $2$. Squaring a sum gives a middle term: $\tan^2\theta + 2\tan\theta \cdot \frac{1}{\tan\theta} + \frac{1}{\tan^2\theta} = 4$, and that middle term is $2$. So $\tan^2\theta + \frac{1}{\tan^2\theta} = 4 - 2 = 2$. Check: $\tan\theta = 1$ fits, and $1 + 1 = 2$.`,
  },
  explanation: {
    intuition: [
      t`An **identity** is an equation that is true for every angle where both its sides are defined.`,
      t`Put an angle $\theta$ in standard position, and pick a point $P(x, y)$, other than $O$, on its terminal arm.`,
      t`Drop a perpendicular from $P$ to the $x$-axis: it makes a right triangle with **legs** (shorter sides) $x$ and $y$.`,
      t`Its longest side, the hypotenuse, is $r = OP$, the distance from $O$ to $P$.`,
      t`By Pythagoras, $x^2 + y^2 = r^2$, even when $x$ or $y$ is negative: squaring removes the sign.`,
      t`Divide this one fact by $r^2$, by $x^2$ or by $y^2$, and out come the three **fundamental identities**.`,
    ],
    formal: [
      {
        title: "Sine and cosine",
        points: [
          t`Divide each side of the triangle by $r$: the hypotenuse becomes $1$.`,
          t`The legs become $\frac{x}{r}$ and $\frac{y}{r}$, which are $\cos\theta$ and $\sin\theta$.`,
          t`Pythagoras in this small triangle gives $\left(\frac{x}{r}\right)^2 + \left(\frac{y}{r}\right)^2 = 1$: that is $x^2 + y^2 = r^2$ divided by $r^2$.`,
          t`We write $\sin^2\theta$ for $(\sin\theta)^2$, the square of $\sin\theta$, and the same for the other functions.`,
          t`So $\sin^2\theta + \cos^2\theta = 1$.`,
          t`It is true for every angle $\theta$, since $r$ is never $0$.`,
        ],
        figure: {
          alt: "The right triangle from the point P(x, y) on the terminal arm, with legs x and y and hypotenuse r, drawn faintly. Inside it, the same triangle with every side divided by r: its hypotenuse is 1 and its legs are cos θ along the x-axis and sin θ upright. Pythagoras in the small triangle gives sin²θ + cos²θ = 1.",
          axes: "none",
          view,
          elements: [
            ...triangle,
            ...shrunk(1.6, 1.2, 1),
            { kind: "label", at: [0.8, 0.6], label: "1", labelAt: "nw", tone: "good", step: 1 },
            { kind: "label", at: [0.8, 0], label: "cos θ", labelAt: "s", tone: "good", step: 2 },
            { kind: "label", at: [1.6, 0.6], label: "sin θ", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [0.25, 3.6], label: "sin²θ + cos²θ = 1", labelAt: "e", tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "Tangent and secant",
        points: [
          t`Divide each side by $x$ instead: the leg along the $x$-axis becomes $1$.`,
          t`The other two sides become $\frac{y}{x} = \tan\theta$ and $\frac{r}{x} = \sec\theta$.`,
          t`Pythagoras gives $1 + \left(\frac{y}{x}\right)^2 = \left(\frac{r}{x}\right)^2$: that is $x^2 + y^2 = r^2$ divided by $x^2$.`,
          t`So $1 + \tan^2\theta = \sec^2\theta$.`,
          t`It is true wherever $x \ne 0$, which is where $\tan\theta$ and $\sec\theta$ are defined.`,
          t`So $\tan$ goes with $\sec$: both have $x$ on the bottom.`,
        ],
        figure: {
          alt: "The right triangle from P(x, y), with legs x and y and hypotenuse r, drawn faintly. Inside it, the same triangle with every side divided by x: the leg along the x-axis is 1, the upright leg is tan θ and the hypotenuse is sec θ. Pythagoras gives 1 + tan²θ = sec²θ.",
          axes: "none",
          view,
          elements: [
            ...triangle,
            ...shrunk(2, 1.5, 1),
            { kind: "label", at: [1, 0], label: "1", labelAt: "s", tone: "good", step: 1 },
            { kind: "label", at: [2, 0.75], label: "tan θ", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [1, 0.75], label: "sec θ", labelAt: "nw", tone: "good", step: 2 },
            { kind: "label", at: [0.25, 3.6], label: "1 + tan²θ = sec²θ", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Cotangent and cosecant",
        points: [
          t`Divide each side by $y$ instead: the upright leg, of length $y$, becomes $1$.`,
          t`The other two sides become $\frac{x}{y} = \cot\theta$ and $\frac{r}{y} = \operatorname{cosec}\theta$.`,
          t`Pythagoras gives $\left(\frac{x}{y}\right)^2 + 1 = \left(\frac{r}{y}\right)^2$: that is $x^2 + y^2 = r^2$ divided by $y^2$.`,
          t`So $\cot^2\theta + 1 = \operatorname{cosec}^2\theta$, usually written $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
          t`It is true wherever $y \ne 0$, which is where $\cot\theta$ and $\operatorname{cosec}\theta$ are defined.`,
          t`So $\cot$ goes with $\operatorname{cosec}$: both have $y$ on the bottom.`,
        ],
        figure: {
          alt: "The right triangle from P(x, y), with legs x and y and hypotenuse r, drawn faintly. Inside it, the same triangle with every side divided by y: the upright leg is 1, the leg along the x-axis is cot θ and the hypotenuse is cosec θ. Pythagoras gives 1 + cot²θ = cosec²θ.",
          axes: "none",
          view,
          elements: [
            ...triangle,
            ...shrunk(2.667, 2, 1),
            { kind: "label", at: [2.667, 1], label: "1", labelAt: "e", tone: "good", step: 1 },
            { kind: "label", at: [1.333, 0], label: "cot θ", labelAt: "s", tone: "good", step: 2 },
            { kind: "label", at: [1.333, 1], label: "cosec θ", labelAt: "nw", tone: "good", step: 2 },
            { kind: "label", at: [0.25, 3.6], label: "1 + cot²θ = cosec²θ", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Rearranging an identity",
        points: [
          t`An identity can be rearranged like any equation, by moving a term to the other side.`,
          t`A term changes sign when it crosses the $=$ sign.`,
          t`From $\sin^2\theta + \cos^2\theta = 1$: $\cos^2\theta - 1 = -\sin^2\theta$, not $\sin^2\theta$.`,
          t`From $1 + \tan^2\theta = \sec^2\theta$: $\sec^2\theta - \tan^2\theta = 1$.`,
          t`From $1 + \cot^2\theta = \operatorname{cosec}^2\theta$: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
        ],
      },
      {
        title: "Squaring keeps the middle term",
        points: [
          t`Squaring a sum gives a middle term: $(a + b)^2 = a^2 + 2ab + b^2$.`,
          t`Take $a = \sin^2\theta$ and $b = \cos^2\theta$, so that $a + b = 1$.`,
          t`Then $a^2 = \sin^4\theta$, which means $(\sin\theta)^4$, and $b^2 = \cos^4\theta$.`,
          t`So $\sin^4\theta + \cos^4\theta = (a + b)^2 - 2ab$.`,
          t`That is $(\sin^2\theta + \cos^2\theta)^2 - 2\sin^2\theta\cos^2\theta$ $= 1 - 2\sin^2\theta\cos^2\theta$.`,
          t`It is not $1$: the middle term $2ab$ must be taken away.`,
        ],
      },
      {
        title: "Factor pairs",
        points: [
          t`A difference of two squares factorises: $(a + b)(a - b) = a^2 - b^2$.`,
          t`So $(\sec\theta + \tan\theta)(\sec\theta - \tan\theta)$ $= \sec^2\theta - \tan^2\theta = 1$.`,
          t`These two factors are a **factor pair**: their product is $1$, so each is the reciprocal of the other.`,
          t`So if $\sec\theta + \tan\theta = k$, then $\sec\theta - \tan\theta = \frac{1}{k}$.`,
          t`Adding the two gives $2\sec\theta = k + \frac{1}{k}$, and subtracting gives $2\tan\theta = k - \frac{1}{k}$.`,
          t`The same works for $\operatorname{cosec}\theta + \cot\theta$ and $\operatorname{cosec}\theta - \cot\theta$, whose product is $1$ too.`,
        ],
      },
    ],
    worked: {
      prompt: t`If $\operatorname{cosec}\theta + \cot\theta = 5$, find $\sec\theta$.`,
      steps: [
        t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta)$ $= \operatorname{cosec}^2\theta - \cot^2\theta = 1$, so $\operatorname{cosec}\theta - \cot\theta = \frac{1}{5}$.`,
        t`Add the two equations: $2\operatorname{cosec}\theta = 5 + \frac{1}{5} = \frac{26}{5}$, so $\operatorname{cosec}\theta = \frac{13}{5}$. Subtract them: $2\cot\theta = 5 - \frac{1}{5} = \frac{24}{5}$, so $\cot\theta = \frac{12}{5}$.`,
        t`$\sin\theta = \frac{5}{13}$, and $\cos\theta = \cot\theta \cdot \sin\theta$ $= \frac{12}{5} \cdot \frac{5}{13} = \frac{12}{13}$.`,
        t`$\sec\theta = \frac{1}{\cos\theta} = \frac{13}{12}$.`,
      ],
      answer: t`$\sec\theta = \frac{13}{12}$.`,
    },
    figure: {
      alt: "An angle θ in standard position: from the initial arm along the positive x-axis, an arm turns anticlockwise to the terminal arm through a point P(x, y). The perpendicular from P to the x-axis makes a right triangle with legs x and y and hypotenuse r = OP. By Pythagoras, x² + y² = r².",
      axes: "none",
      view,
      elements: [
        ...axes,
        { kind: "segment", from: [0, 0], to: [5.2, 0], label: "initial arm", labelAt: "s", tone: "good", step: 2 },
        { kind: "turn", r: 5, to: 36.87, label: "P(x, y)", labelAt: "ne", step: 2 },
        { kind: "label", at: [1, 0.25], label: "θ", labelAt: "e", step: 2 },
        ...perpendicular(3),
        { kind: "label", at: [2.4, 0], label: "x", labelAt: "n", step: 3 },
        { kind: "label", at: [4, 1.5], label: "y", labelAt: "e", step: 3 },
        { kind: "label", at: [2, 1.5], label: "r", labelAt: "nw", step: 4 },
        { kind: "label", at: [0.25, 3.6], label: "x² + y² = r²", labelAt: "e", tone: "good", step: 5 },
      ],
    },
    visualSpec: t`Drag $P$ round a circle of radius $r$: the right triangle with legs $x$ and $y$ keeps $x^2 + y^2 = r^2$, and buttons divide it by $r^2$, $x^2$ or $y^2$ to show each identity.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Pairs $\tan$ with $\operatorname{cosec}$ and $\cot$ with $\sec$: $1 + \tan^2\theta = \operatorname{cosec}^2\theta$, $1 + \cot^2\theta = \sec^2\theta$`,
      remediation: t`Divide $\sin^2\theta + \cos^2\theta = 1$ by $\cos^2\theta$: $\tan^2\theta + 1 = \sec^2\theta$. Dividing by $\sin^2\theta$ gives $1 + \cot^2\theta = \operatorname{cosec}^2\theta$, so $\tan$ goes with $\sec$ and $\cot$ with $\operatorname{cosec}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: t`Reads every identity in the shape of $\sin^2\theta + \cos^2\theta = 1$: $\tan^2\theta + \sec^2\theta = 1$, $\cot^2\theta + \operatorname{cosec}^2\theta = 1$`,
      remediation: t`Only $\sin^2\theta + \cos^2\theta = 1$ has that shape. The others are $1 + \tan^2\theta = \sec^2\theta$ and $1 + \cot^2\theta = \operatorname{cosec}^2\theta$: $\sec^2\theta$ is $1$ more than $\tan^2\theta$, not $1$ minus it.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M3",
      mistake: t`Drops the squares: from $\operatorname{cosec}^2\theta - \cot^2\theta = 1$ takes $\operatorname{cosec}\theta - \cot\theta = 1$ (and $\sec\theta - \tan\theta = 1$)`,
      remediation: t`Factorise instead: $(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$. If one factor is $k$, the other is $\frac{1}{k}$, not $1$.`,
      fallback: { kind: "ext", topic: "difference of squares" },
    },
    {
      id: "C05-M4",
      mistake: t`Squares a sum term by term: $(\tan\theta + \cot\theta)^2 = \tan^2\theta + \cot^2\theta$, dropping $2ab$`,
      remediation: t`$(a + b)^2 = a^2 + 2ab + b^2$. With $\tan\theta + \cot\theta$ the middle term is $2\tan\theta\cot\theta = 2$, so $\tan^2\theta + \cot^2\theta$ is $2$ less than the square.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
    {
      id: "C05-M5",
      mistake: t`Moves a term across the $=$ sign without changing its sign: $\cos^2\theta - 1 = \sin^2\theta$, $\cot^2\theta - \operatorname{cosec}^2\theta = 1$`,
      remediation: t`A term changes sign when it crosses the $=$ sign. From $\sin^2\theta + \cos^2\theta = 1$: $\cos^2\theta - 1 = -\sin^2\theta$. From $1 + \cot^2\theta = \operatorname{cosec}^2\theta$: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Stops one step short: gives the value found on the way ($\cot\theta$ for $\tan\theta$, $\operatorname{cosec}\theta$ for $\sin\theta$, $\sec\theta$ for $\cos\theta$, $\tan^2\theta + \cot^2\theta$ for $\sec^2\theta + \operatorname{cosec}^2\theta$)`,
      remediation: t`Check what the question asks for before you answer. Finish the last step: take the reciprocal, or add the $1$s from $1 + \tan^2\theta = \sec^2\theta$ and $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M3 gives the key when the given value is $1$ (then $\frac{1}{k} = 1$): use a given value other than $1$.`,
    t`C05-M5 on a factor pair swaps its two members. When $\cos\theta$ or $\sec\theta$ is asked from $\operatorname{cosec}\theta \pm \cot\theta$ (or $\sin\theta$, $\operatorname{cosec}\theta$ from $\sec\theta \pm \tan\theta$), that only turns the key into its reciprocal, which a plain reciprocal slip also gives: to diagnose C05-M5, ask for a member of the pair or its reciprocal.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q15(x)" },
      stem: t`$(\sec A + \cos A)(\sec A - \cos A)$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "secpcos" } },
      options: [
        { key: "A", text: t`$\tan^2 A - \sin^2 A$`, correct: false, misconceptionId: "C05-M5", value: "tan(x)**2 - sin(x)**2" },
        { key: "B", text: t`$\tan^2 A + \sin^2 A$`, correct: true, value: "tan(x)**2 + sin(x)**2" },
        { key: "C", text: t`$\cot^2 A + \sin^2 A$`, correct: false, misconceptionId: "C05-M1", value: "cot(x)**2 + sin(x)**2" },
        { key: "D", text: t`$\sin^2 A - \tan^2 A$`, correct: false, misconceptionId: "C05-M2", value: "sin(x)**2 - tan(x)**2" },
      ],
      solution: {
        steps: [
          t`It is a difference of squares: $(\sec A + \cos A)(\sec A - \cos A) = \sec^2 A - \cos^2 A$.`,
          t`$\sec^2 A = 1 + \tan^2 A$ and $\cos^2 A = 1 - \sin^2 A$.`,
          t`So it equals $(1 + \tan^2 A) - (1 - \sin^2 A) = \tan^2 A + \sin^2 A$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q15(ii)" },
      stem: t`$(\cos^2 A - 1)(\cot^2 A + 1)$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "cos2m1" } },
      options: [
        { key: "A", text: t`$-\tan^2 A$`, correct: false, misconceptionId: "C05-M1", value: "-tan(x)**2" },
        { key: "B", text: t`$1 - 2\sin^2 A$`, correct: false, misconceptionId: "C05-M2", value: "1 - 2*sin(x)**2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C05-M5", value: "1" },
        { key: "D", text: t`$-1$`, correct: true, value: "-1" },
      ],
      solution: {
        steps: [
          t`From $\sin^2 A + \cos^2 A = 1$: $\cos^2 A - 1 = -\sin^2 A$.`,
          t`$\cot^2 A + 1 = \operatorname{cosec}^2 A$.`,
          t`So it equals $-\sin^2 A \cdot \operatorname{cosec}^2 A = -1$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.3" },
      stem: t`If $\tan\theta + \cot\theta = 3$, then $\sec^2\theta + \operatorname{cosec}^2\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "3" }, params: { form: "tancot" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$11$`, correct: false, misconceptionId: "C05-M4", value: "11" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C05-M5", value: "13" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C05-M6", value: "7" },
      ],
      solution: {
        steps: [
          t`Square: $\tan^2\theta + 2\tan\theta\cot\theta + \cot^2\theta = 9$. Since $\tan\theta\cot\theta = 1$, $\tan^2\theta + \cot^2\theta = 9 - 2 = 7$.`,
          t`$\sec^2\theta + \operatorname{cosec}^2\theta = (1 + \tan^2\theta) + (1 + \cot^2\theta) = 2 + 7 = 9$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc I Q6" },
      stem: t`If $\operatorname{cosec}\theta + \cot\theta = \frac{5}{2}$, then $\tan\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "5/2" }, params: { form: "pair", pair: "csc_cot", given: "sum", ask: "tan" } },
      options: [
        { key: "A", text: t`$\frac{20}{29}$`, correct: false, misconceptionId: "C05-M5", value: "20/29" },
        { key: "B", text: t`$\frac{21}{20}$`, correct: false, misconceptionId: "C05-M6", value: "21/20" },
        { key: "C", text: t`$\frac{20}{21}$`, correct: true, value: "20/21" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C05-M3", value: "4/3" },
      ],
      solution: {
        steps: [
          t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$, so $\operatorname{cosec}\theta - \cot\theta = \frac{2}{5}$.`,
          t`Subtract: $2\cot\theta = \frac{5}{2} - \frac{2}{5} = \frac{21}{10}$, so $\cot\theta = \frac{21}{20}$.`,
          t`$\tan\theta = \frac{1}{\cot\theta} = \frac{20}{21}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc I Q8" },
      stem: t`If $\operatorname{cosec}\theta - \cot\theta = q$, then $\sin\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "q" }, params: { form: "pair", pair: "csc_cot", given: "diff", ask: "sin" } },
      options: [
        { key: "A", text: t`$\frac{2q}{1 + q^2}$`, correct: true, value: "2*q/(q**2 + 1)" },
        { key: "B", text: t`$\frac{2}{1 + q}$`, correct: false, misconceptionId: "C05-M3", value: "2/(q + 1)" },
        { key: "C", text: t`$\frac{2q}{q^2 - 1}$`, correct: false, misconceptionId: "C05-M5", value: "2*q/(q**2 - 1)" },
        { key: "D", text: t`$\frac{1 + q^2}{2q}$`, correct: false, misconceptionId: "C05-M6", value: "(q**2 + 1)/(2*q)" },
      ],
      solution: {
        steps: [
          t`$(\operatorname{cosec}\theta - \cot\theta)(\operatorname{cosec}\theta + \cot\theta) = 1$, so $\operatorname{cosec}\theta + \cot\theta = \frac{1}{q}$.`,
          t`Add: $2\operatorname{cosec}\theta = q + \frac{1}{q} = \frac{1 + q^2}{q}$, so $\operatorname{cosec}\theta = \frac{1 + q^2}{2q}$.`,
          t`$\sin\theta = \frac{1}{\operatorname{cosec}\theta} = \frac{2q}{1 + q^2}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.11" },
      stem: t`If $\sec\theta + \tan\theta = 3$, then $\cos\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "3" }, params: { form: "pair", pair: "sec_tan", given: "sum", ask: "cos" } },
      options: [
        { key: "A", text: t`$\frac{3}{5}$`, correct: true, value: "3/5" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C05-M3", value: "1/2" },
        { key: "C", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C05-M5", value: "3/4" },
        { key: "D", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C05-M6", value: "5/3" },
      ],
      solution: {
        steps: [
          t`$(\sec\theta + \tan\theta)(\sec\theta - \tan\theta) = 1$, so $\sec\theta - \tan\theta = \frac{1}{3}$.`,
          t`Add: $2\sec\theta = 3 + \frac{1}{3} = \frac{10}{3}$, so $\sec\theta = \frac{5}{3}$.`,
          t`$\cos\theta = \frac{1}{\sec\theta} = \frac{3}{5}$.`,
        ],
      },
    },
  ],
};
