import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Work out $\sin^2 30^\circ + \cos^2 30^\circ$. Then do the same for $60^\circ$. **What do you notice?**`,
    reveal: t`Both are $1$: $\frac{1}{4} + \frac{3}{4} = 1$ and $\frac{3}{4} + \frac{1}{4} = 1$. In fact $\sin^2\theta + \cos^2\theta = 1$ for every angle $\theta$. A statement like this is an identity.`,
  },
  explanation: {
    intuition: [
      t`A **trigonometric ratio** is a ratio of two sides of a right triangle, like $\sin\theta$ or $\cos\theta$.`,
      t`$\sin^2\theta$ means $(\sin\theta)^2$, the square of $\sin\theta$.`,
      t`An **identity** is an equation that is true for every value of the angle.`,
      t`Pythagoras' theorem links the three sides, so it also links the ratios.`,
      t`That link gives three identities: sin with cos, tan with sec, cot with cosec.`,
      t`With them, you can replace one expression by a simpler one.`,
    ],
    formal: [
      {
        title: "Reciprocal ratios",
        points: [
          t`The **reciprocal** of a number is $1$ divided by it: the reciprocal of $\frac{2}{3}$ is $\frac{3}{2}$.`,
          t`$\operatorname{cosec}\theta = \dfrac{1}{\sin\theta}$: cosec pairs with **sin**.`,
          t`$\sec\theta = \dfrac{1}{\cos\theta}$: sec pairs with **cos**.`,
          t`$\cot\theta = \dfrac{1}{\tan\theta}$, and $\tan\theta = \dfrac{\sin\theta}{\cos\theta}$.`,
          t`A ratio times its reciprocal is $1$: $\sin\theta \operatorname{cosec}\theta = 1$.`,
          t`Each pair has exactly one 'co': cosec goes with sin, and sec goes with cos.`,
        ],
      },
      {
        title: "The first identity",
        points: [
          t`In right $\triangle ABC$, $\angle B = 90^\circ$ and $\angle C = \theta$.`,
          t`$\sin\theta = \dfrac{AB}{AC}$ and $\cos\theta = \dfrac{BC}{AC}$.`,
          t`Square and add: $\sin^2\theta + \cos^2\theta$ $= \dfrac{AB^2 + BC^2}{AC^2}$.`,
          t`By Pythagoras' theorem, $AB^2 + BC^2 = AC^2$.`,
          t`So $\sin^2\theta + \cos^2\theta = 1$ for every angle $\theta$.`,
        ],
        figure: {
          alt: "Right triangle ABC with the right angle at B and the angle theta at C. AB is the side opposite theta, BC the side next to it, and AC the hypotenuse.",
          axes: "none",
          view: { x: [-1.2, 5.2], y: [-1, 4] },
          elements: [
            { kind: "segment", from: [0, 0], to: [4, 0], step: 1 },
            { kind: "segment", from: [0, 0], to: [0, 3], step: 1 },
            { kind: "segment", from: [0, 3], to: [4, 0], step: 1 },
            { kind: "rightAngle", at: [0, 0], from: 0, step: 1 },
            { kind: "angle", at: [4, 0], from: 143.13, to: 180, label: "θ", labelAt: "w", step: 1 },
            { kind: "point", at: [0, 3], label: "A", labelAt: "nw", step: 1 },
            { kind: "point", at: [0, 0], label: "B", labelAt: "sw", step: 1 },
            { kind: "point", at: [4, 0], label: "C", labelAt: "se", step: 1 },
            { kind: "segment", from: [0, 0], to: [0, 3], tone: "good", step: 2 },
            { kind: "segment", from: [0, 0], to: [4, 0], tone: "good", step: 2 },
            { kind: "label", at: [2.6, 2.6], label: "AB² + BC² = AC²", step: 4 },
          ],
        },
      },
      {
        title: "Two more from Pythagoras",
        points: [
          t`Divide $AB^2 + BC^2 = AC^2$ by $BC^2$, the side next to $\theta$, squared.`,
          t`$\dfrac{AB}{BC} = \tan\theta$ and $\dfrac{AC}{BC} = \sec\theta$, so $\tan^2\theta + 1 = \sec^2\theta$.`,
          t`Divide by $AB^2$ instead: $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
          t`The partners: tan goes with sec, and cot goes with cosec.`,
          t`Every identity is about squares: $1 + \tan\theta = \sec\theta$ is false.`,
        ],
      },
      {
        title: "Rearranging an identity",
        points: [
          t`Move a term across $=$ and change its sign, as in any equation.`,
          t`$\sin^2\theta + \cos^2\theta = 1$ gives $\sin^2\theta = 1 - \cos^2\theta$.`,
          t`It also gives $\cos^2\theta = 1 - \sin^2\theta$: the $1$ comes first.`,
          t`$1 + \tan^2\theta = \sec^2\theta$ gives $\sec^2\theta - \tan^2\theta = 1$.`,
          t`$1 + \cot^2\theta = \operatorname{cosec}^2\theta$ gives $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
        ],
      },
      {
        title: "Values at standard angles",
        points: [
          t`$\sin 30^\circ = \frac{1}{2}$ and $\cos 30^\circ = \frac{\sqrt{3}}{2}$.`,
          t`$\sin 60^\circ = \frac{\sqrt{3}}{2}$ and $\cos 60^\circ = \frac{1}{2}$.`,
          t`Sine grows as the angle grows, so $\sin 30^\circ$ is the smaller value.`,
          t`$\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$, and $\tan 45^\circ = 1$.`,
          t`Flip a ratio for its reciprocal: $\operatorname{cosec} 30^\circ = \frac{1}{\sin 30^\circ} = 2$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Simplify $\tan\theta \times \cot\theta - \sin^2\theta$.`,
      steps: [
        t`$\cot\theta = \dfrac{1}{\tan\theta}$, so $\tan\theta \times \cot\theta = 1$.`,
        t`The expression becomes $1 - \sin^2\theta$.`,
        t`From $\sin^2\theta + \cos^2\theta = 1$, move $\sin^2\theta$ across: $\cos^2\theta = 1 - \sin^2\theta$.`,
        t`So $1 - \sin^2\theta = \cos^2\theta$.`,
      ],
      answer: t`$\cos^2\theta$`,
    },
    visualSpec: t`A right triangle whose angle $\theta$ you drag: $\sin^2\theta$ and $\cos^2\theta$ appear as two bars that always add up to exactly $1$.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Pairs the reciprocals wrongly: takes $\sec\theta = \dfrac{1}{\sin\theta}$ and $\operatorname{cosec}\theta = \dfrac{1}{\cos\theta}$.`,
      remediation: t`cosec is the reciprocal of sin, and sec of cos: $\operatorname{cosec}\theta = \dfrac{1}{\sin\theta}$, $\sec\theta = \dfrac{1}{\cos\theta}$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios and standard angles (Std IX Trigonometry)" },
    },
    {
      id: "C01-M2",
      mistake: t`Swaps the partners: $1 + \tan^2\theta = \operatorname{cosec}^2\theta$ and $1 + \cot^2\theta = \sec^2\theta$.`,
      remediation: t`tan goes with sec, and cot goes with cosec: $1 + \tan^2\theta = \sec^2\theta$ and $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Drops the squares: believes $1 + \tan\theta = \sec\theta$ or $\sin\theta + \cos\theta = 1$.`,
      remediation: t`The identities hold only for the squares. At $45^\circ$, $\sin\theta + \cos\theta = \sqrt{2}$, not $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Rearranges an identity with the subtraction the wrong way round: $\cos^2\theta = \sin^2\theta - 1$.`,
      remediation: t`Move the term across $=$ and change its sign: $\sin^2\theta + \cos^2\theta = 1$ gives $\cos^2\theta = 1 - \sin^2\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Swaps the sine and cosine values of $30^\circ$ and $60^\circ$: $\sin 30^\circ = \dfrac{\sqrt{3}}{2}$.`,
      remediation: t`$\sin 30^\circ = \dfrac{1}{2}$ and $\sin 60^\circ = \dfrac{\sqrt{3}}{2}$: sine grows as the angle grows.`,
      fallback: { kind: "ext", topic: "trigonometric ratios and standard angles (Std IX Trigonometry)" },
    },
    {
      id: "C01-M6",
      mistake: t`Forgets the 'one over': takes $\operatorname{cosec}\theta$ as $\sin\theta$, $\sec\theta$ as $\cos\theta$, $\cot\theta$ as $\tan\theta$.`,
      remediation: t`Each is a reciprocal: $\operatorname{cosec}\theta = \dfrac{1}{\sin\theta}$, so $\sin\theta \operatorname{cosec}\theta = 1$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios and standard angles (Std IX Trigonometry)" },
    },
  ],
  engineNotes: [
    t`C01-M1 and C01-M2 both give $\tan^2\theta$ on C01-Q2 and C01-Q4. Tell them apart with C01-Q3 (M1 only) and C01-Q1 or C01-Q5 (M2 only).`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/geo-2025/Q5(2)(ii)" },
      stem: t`Which of these is an **identity**, true for every angle $\theta$?`,
      verify: { kind: "value", inputs: {  }, params: { family: "tan" } },
      options: [
        { key: "A", text: t`$1 + \tan^2\theta = \sec^2\theta$`, correct: true, value: "tan_sec" },
        { key: "B", text: t`$1 + \tan^2\theta = \operatorname{cosec}^2\theta$`, correct: false, misconceptionId: "C01-M2", value: "tan_cosec" },
        { key: "C", text: t`$1 + \tan\theta = \sec\theta$`, correct: false, misconceptionId: "C01-M3", value: "tan_sec_unsquared" },
        { key: "D", text: t`$\tan^2\theta = 1 - \sec^2\theta$`, correct: false, misconceptionId: "C01-M4", value: "tan_sec_flipped" },
      ],
      solution: {
        steps: [
          t`Divide $\sin^2\theta + \cos^2\theta = 1$ by $\cos^2\theta$.`,
          t`$\dfrac{\sin^2\theta}{\cos^2\theta} = \tan^2\theta$ and $\dfrac{1}{\cos^2\theta} = \sec^2\theta$.`,
          t`So $\tan^2\theta + 1 = \sec^2\theta$, that is, $1 + \tan^2\theta = \sec^2\theta$.`,
          t`tan pairs with sec, the squares stay, and rearranged it is $\tan^2\theta = \sec^2\theta - 1$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/geo-2024/Q1(A)(2)" },
      stem: t`$(1 - \cos^2\theta)\operatorname{cosec}^2\theta = ?$`,
      verify: { kind: "value", inputs: {  }, params: { e: "(1 - cos(x)**2)*cosec(x)**2", rearrange: "yes" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C01-M4", value: "-1" },
        { key: "C", text: t`$\tan^2\theta$`, correct: false, misconceptionId: "C01-M1", value: "tan(x)**2" },
        { key: "D", text: t`$\sin^4\theta$`, correct: false, misconceptionId: "C01-M6", value: "sin(x)**4" },
      ],
      solution: {
        steps: [
          t`From $\sin^2\theta + \cos^2\theta = 1$, we get $1 - \cos^2\theta = \sin^2\theta$.`,
          t`$\operatorname{cosec}^2\theta = \dfrac{1}{\sin^2\theta}$.`,
          t`So the expression is $\sin^2\theta \times \dfrac{1}{\sin^2\theta} = 1$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/geo-trigonometry-10/PS6 Q.1 (2)" },
      stem: t`$\sin 30^\circ \times \operatorname{cosec} 60^\circ = ?$`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(30)*cosec(60)" } },
      options: [
        { key: "A", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C01-M5", value: "sqrt(3)" },
        { key: "B", text: t`$\dfrac{\sqrt{3}}{4}$`, correct: false, misconceptionId: "C01-M6", value: "sqrt(3)/4" },
        { key: "C", text: t`$\dfrac{1}{\sqrt{3}}$`, correct: true, value: "sqrt(3)/3" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C01-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`$\sin 30^\circ = \dfrac{1}{2}$ and $\sin 60^\circ = \dfrac{\sqrt{3}}{2}$.`,
          t`$\operatorname{cosec} 60^\circ = \dfrac{1}{\sin 60^\circ} = \dfrac{2}{\sqrt{3}}$.`,
          t`So the product is $\dfrac{1}{2} \times \dfrac{2}{\sqrt{3}} = \dfrac{1}{\sqrt{3}}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/geo-trigonometry-10/PS6 Q.1 (3)" },
      stem: t`$\operatorname{cosec}^2\theta - 1 = ?$`,
      verify: { kind: "value", inputs: {  }, params: { e: "cosec(x)**2 - 1", rearrange: "yes" } },
      options: [
        { key: "A", text: t`$\cot^2\theta$`, correct: true, value: "tan(x)**(-2)" },
        { key: "B", text: t`$\tan^2\theta$`, correct: false, misconceptionId: "C01-M2", value: "tan(x)**2" },
        { key: "C", text: t`$-\cot^2\theta$`, correct: false, misconceptionId: "C01-M4", value: "-1/tan(x)**2" },
        { key: "D", text: t`$-\cos^2\theta$`, correct: false, misconceptionId: "C01-M6", value: "-cos(x)**2" },
      ],
      solution: {
        steps: [
          t`The identity is $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
          t`Move $1$ across; it changes sign: $\cot^2\theta = \operatorname{cosec}^2\theta - 1$.`,
          t`So $\operatorname{cosec}^2\theta - 1 = \cot^2\theta$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/geo-2025/Q5(2)(iii)" },
      stem: t`Only one of these is true for every angle $\theta$. Which one?`,
      verify: { kind: "value", inputs: {  }, params: { family: "cot" } },
      options: [
        { key: "A", text: t`$\cot^2\theta = \operatorname{cosec}^2\theta - 1$`, correct: true, value: "cot_cosec" },
        { key: "B", text: t`$\cot^2\theta = \sec^2\theta - 1$`, correct: false, misconceptionId: "C01-M2", value: "cot_sec" },
        { key: "C", text: t`$\cot\theta = \operatorname{cosec}\theta - 1$`, correct: false, misconceptionId: "C01-M3", value: "cot_cosec_unsquared" },
        { key: "D", text: t`$\cot^2\theta = 1 - \operatorname{cosec}^2\theta$`, correct: false, misconceptionId: "C01-M4", value: "cot_cosec_flipped" },
      ],
      solution: {
        steps: [
          t`Divide $\sin^2\theta + \cos^2\theta = 1$ by $\sin^2\theta$: $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
          t`Move $1$ across, changing its sign: $\cot^2\theta = \operatorname{cosec}^2\theta - 1$.`,
          t`cot pairs with cosec and the squares stay, so this one is the identity.`,
        ],
      },
    },
  ],
};
