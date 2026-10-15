import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** The xy-plane as plain axes (no grid or numbers: only directions matter here). */
const axes: FigureElement[] = [
  { kind: "segment", from: [-2.8, 0], to: [2.8, 0], tone: "muted" },
  { kind: "label", at: [2.8, 0], label: "x", labelAt: "s", tone: "muted" },
  { kind: "segment", from: [0, -2.8], to: [0, 2.8], tone: "muted" },
  { kind: "label", at: [0, 2.8], label: "y", labelAt: "w", tone: "muted" },
  { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
];

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`$\sin 2A$ is not $2\sin A$. **Is $\sin 3A$ equal to $3\sin A$?** Try $A = 90^\circ$.`,
    reveal: t`No. $\sin 270^\circ = -1$, but $3\sin 90^\circ = 3$. The true formula is $\sin 3A = 3\sin A - 4\sin^3 A$, and at $A = 90^\circ$ it gives $3 - 4 = -1$, as it should.`,
  },
  explanation: {
    intuition: [
      t`A **triple angle** is three times an angle, such as $3A$ in $\sin 3A$.`,
      t`Write $3A = 2A + A$, then expand with the sum formula and the double-angle formulas.`,
      t`Then turn every $\cos^2 A$ into $1 - \sin^2 A$, so only $\sin A$ is left.`,
      t`A **cube** such as $\sin^3 A$, meaning $(\sin A)^3$, appears: three factors of $\sin A$ multiply together.`,
      t`So the $3$ never simply comes out: $\sin 3A$ is not $3\sin A$.`,
      t`To recall which term comes first, test the formula at $A = 0$ or $A = 90^\circ$.`,
    ],
    formal: [
      {
        title: "sin 3A from 2A + A",
        points: [
          t`Write $\sin 3A$ as $\sin(2A + A)$ and use the sum formula.`,
          t`It equals $\sin 2A\cos A + \cos 2A\sin A$.`,
          t`Put in $\sin 2A = 2\sin A\cos A$ and $\cos 2A = 1 - 2\sin^2 A$.`,
          t`The first term becomes $2\sin A\cos^2 A$, which is $2\sin A(1 - \sin^2 A)$, or $2\sin A - 2\sin^3 A$.`,
          t`The second term becomes $(1 - 2\sin^2 A)\sin A$, which is $\sin A - 2\sin^3 A$.`,
          t`Add them: $\sin 3A = 3\sin A - 4\sin^3 A$.`,
        ],
      },
      {
        title: "cos 3A and tan 3A",
        points: [
          t`$\cos 3A$ and $\tan 3A$ come the same way, from $\cos(2A + A)$ and $\tan(2A + A)$.`,
          t`For cos, turn every $\sin^2 A$ into $1 - \cos^2 A$, so only $\cos A$ is left.`,
          t`$\cos 3A = 4\cos^3 A - 3\cos A$.`,
          t`$\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$.`,
        ],
      },
      {
        title: "Which term comes first?",
        points: [
          t`sin starts with $3\sin A$; cos starts with $4\cos^3 A$.`,
          t`To check sin, try $A = 90^\circ$, where $\sin A = 1$.`,
          t`Then $3A = 270^\circ$, and $\sin 270^\circ = -1$.`,
          t`The formula agrees: $3\sin A - 4\sin^3 A = 3 - 4 = -1$.`,
          t`To check cos, try $A = 0$: $\cos 0 = 4 - 3 = 1$.`,
          t`The $3$s in tan go together: $3\tan A$ on top, $3\tan^2 A$ below.`,
        ],
        figure: {
          alt: "The unit circle about the origin. An arm turns 90° anticlockwise from the initial arm, so A = 90°, and ends at the top of the circle, where sin A = 1. It turns on to 270°, so 3A = 270°, and ends at the bottom, where sin 3A = −1, matching 3 − 4 = −1. At A = 0 the arm stays on the initial arm, at the point where cos 0 = 1.",
          axes: "none",
          view: { x: [-3.2, 3.8], y: [-3.5, 3.2] },
          elements: [
            ...axes,
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.6, 0], tone: "good" },
            { kind: "label", at: [2.2, 0], label: "initial arm", labelAt: "n", tone: "good" },
            { kind: "turn", r: 2, to: 90, label: "A = 90°", labelAt: "nw", step: 2 },
            { kind: "point", at: [0, 2], label: "sin A = 1", labelAt: "ne", step: 2 },
            { kind: "turn", r: 2, from: 90, to: 270, label: "3A = 270°", labelAt: "sw", step: 3 },
            { kind: "point", at: [0, -2], label: "sin 3A = −1", labelAt: "se", step: 3 },
            { kind: "label", at: [0.25, -3.05], label: "3 − 4 = −1", labelAt: "e", tone: "good", step: 4 },
            { kind: "point", at: [2, 0], label: "cos 0 = 1", labelAt: "sw", step: 5 },
          ],
        },
      },
      {
        title: "The 60° family",
        points: [
          t`Take three angles: $A$, $60^\circ - A$ and $60^\circ + A$.`,
          t`$\cos(60^\circ - A)\cos(60^\circ + A)$ equals $\cos^2 60^\circ - \sin^2 A$.`,
          t`That is $\frac{1}{4} - \sin^2 A$, since $\cos 60^\circ = \frac{1}{2}$.`,
          t`So $\cos A$ times $\cos(60^\circ - A)\cos(60^\circ + A)$ is $\frac{1}{4}\cos 3A$.`,
          t`In the same way, $\sin A$ times $\sin(60^\circ - A)\sin(60^\circ + A)$ is $\frac{1}{4}\sin 3A$.`,
          t`Divide the sin product by the cos product: $\tan A$ times $\tan(60^\circ - A)\tan(60^\circ + A)$ is $\tan 3A$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\sin 20^\circ\sin 40^\circ\sin 80^\circ$.`,
      steps: [
        t`$40^\circ = 60^\circ - 20^\circ$ and $80^\circ = 60^\circ + 20^\circ$, so this is $\sin A$ times $\sin(60^\circ - A)\sin(60^\circ + A)$, with $A = 20^\circ$.`,
        t`$\sin(60^\circ - A)\sin(60^\circ + A)$ $= \sin^2 60^\circ - \sin^2 A$ $= \frac{3}{4} - \sin^2 A$.`,
        t`Multiply by $\sin A$: $\frac{3}{4}\sin A - \sin^3 A$ $= \frac{1}{4}(3\sin A - 4\sin^3 A)$ $= \frac{1}{4}\sin 3A$.`,
        t`With $A = 20^\circ$: $\frac{1}{4}\sin 60^\circ$ $= \frac{1}{4}\cdot\frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{8}$.`,
      ],
      answer: t`$\sin 20^\circ\sin 40^\circ\sin 80^\circ$ $= \frac{\sqrt{3}}{8}$`,
    },
    visualSpec: t`A slider for $A$ that draws $\sin 3A$ and $3\sin A - 4\sin^3 A$ as one curve, with $3\sin A$ beside it drifting away and leaving $[-1, 1]$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Lets the 3 come out: $\sin 3A = 3\sin A$, $\cos 3A = 3\cos A$, $\tan 3A = 3\tan A$.`,
      remediation: t`The 3 can't be taken outside: $\sin 3A = 3\sin A - 4\sin^3 A$ and $\cos 3A = 4\cos^3 A - 3\cos A$. At $A = 90^\circ$, $\sin 270^\circ = -1$, not $3$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C06-M2",
      mistake: t`Subtracts in the wrong order: $\sin 3A = 4\sin^3 A - 3\sin A$, $\cos 3A = 3\cos A - 4\cos^3 A$, $\tan 3A = \frac{\tan^3 A - 3\tan A}{1 - 3\tan^2 A}$; each is minus the truth.`,
      remediation: t`sin starts with $3\sin A$, cos starts with $4\cos^3 A$: $\sin 3A = 3\sin A - 4\sin^3 A$, $\cos 3A = 4\cos^3 A - 3\cos A$. Check at $A = 0$: $\cos 0 = 4 - 3 = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Drops the 4 on the cube term: $\sin 3A = 3\sin A - \sin^3 A$, $\cos 3A = \cos^3 A - 3\cos A$, copying tan's numerator.`,
      remediation: t`In sin and cos the cube carries a 4: $\sin 3A = 3\sin A - 4\sin^3 A$, $\cos 3A = 4\cos^3 A - 3\cos A$. Only tan's numerator, $3\tan A - \tan^3 A$, has the cube alone.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Takes the denominator of $\tan 2A$: $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - \tan^2 A}$.`,
      remediation: t`The denominator of $\tan 3A$ is $1 - 3\tan^2 A$: $\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$. The 3 on top is matched by a 3 below.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: t`Forgets the $\frac{1}{4}$: $\cos x\cos(60^\circ - x)\cos(60^\circ + x) = \cos 3x$.`,
      remediation: t`The product reduces to $\cos^3 x - \frac{3}{4}\cos x$, a quarter of $4\cos^3 x - 3\cos x$, so it is $\frac{1}{4}\cos 3x$. At $x = 0$ it is $1 \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$, not $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Puts the 4 on the wrong side: reads $4\cos x\cos(60^\circ - x)\cos(60^\circ + x) = \cos 3x$ as the product being $4\cos 3x$.`,
      remediation: t`Four times the product is $\cos 3x$, so the product itself is $\frac{1}{4}\cos 3x$: divide by 4, don't multiply.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M1, C06-M2 and C06-M3 give the key when $\sin A = 0$ (or $\cos A = 0$ for $\cos 3A$), and C06-M2 gives the key whenever the answer is $0$, since it is minus the truth. Draw diagnosing items away from those.`,
    t`C06-M5 and C06-M6 give the key wherever $\cos 3x = 0$; a numerical $60^\circ$-product item must avoid $3x = 90^\circ$.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.3.2 SolvedEx.4" },
      stem: t`$\dfrac{\cos^3\theta - \cos 3\theta}{\cos\theta} + \dfrac{\sin^3\theta + \sin 3\theta}{\sin\theta}$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", expr: "ex4" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C06-M1", value: "1" },
        { key: "B", text: t`$-1$`, correct: false, misconceptionId: "C06-M2", value: "-1" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C06-M3", value: "6" },
        { key: "D", text: t`$3$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$, so $\cos^3\theta - \cos 3\theta = 3\cos\theta - 3\cos^3\theta = 3\cos\theta(1 - \cos^2\theta)$.`,
          t`$\sin 3\theta = 3\sin\theta - 4\sin^3\theta$, so $\sin^3\theta + \sin 3\theta = 3\sin\theta - 3\sin^3\theta = 3\sin\theta(1 - \sin^2\theta)$.`,
          t`Divide: $3(1 - \cos^2\theta) + 3(1 - \sin^2\theta) = 3\sin^2\theta + 3\cos^2\theta = 3$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`If $\sin A = \frac{1}{4}$, then $\sin 3A =$`,
      verify: { kind: "value", inputs: { r: "1/4" }, params: { form: "value", f: "sin" } },
      options: [
        { key: "A", text: t`$\frac{11}{16}$`, correct: true, value: "11/16" },
        { key: "B", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C06-M1", value: "3/4" },
        { key: "C", text: t`$- \frac{11}{16}$`, correct: false, misconceptionId: "C06-M2", value: "-11/16" },
        { key: "D", text: t`$\frac{47}{64}$`, correct: false, misconceptionId: "C06-M3", value: "47/64" },
      ],
      solution: {
        steps: [
          t`$\sin 3A = 3\sin A - 4\sin^3 A$.`,
          t`$= 3 \cdot \frac{1}{4} - 4 \cdot \frac{1}{64} = \frac{3}{4} - \frac{1}{16} = \frac{11}{16}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc I Q5" },
      stem: t`$\cos x\,\cos(60^\circ - x)\,\cos(60^\circ + x)$ is equal to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "product", f: "cos" } },
      options: [
        { key: "A", text: t`$\frac{1}{4}\cos 3x$`, correct: true, value: "cos(3*x)/4" },
        { key: "B", text: t`$-\frac{1}{4}\cos 3x$`, correct: false, misconceptionId: "C06-M2", value: "-cos(3*x)/4" },
        { key: "C", text: t`$\cos 3x$`, correct: false, misconceptionId: "C06-M5", value: "cos(3*x)" },
        { key: "D", text: t`$4\cos 3x$`, correct: false, misconceptionId: "C06-M6", value: "4*cos(3*x)" },
      ],
      solution: {
        steps: [
          t`$\cos(60^\circ - x)\cos(60^\circ + x) = \cos^2 60^\circ - \sin^2 x = \frac{1}{4} - \sin^2 x$.`,
          t`Multiply by $\cos x$: $\frac{1}{4}\cos x - (1 - \cos^2 x)\cos x = \cos^3 x - \frac{3}{4}\cos x$.`,
          t`$= \frac{1}{4}(4\cos^3 x - 3\cos x) = \frac{1}{4}\cos 3x$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`If $\tan A = \frac{1}{2}$, then $\tan 3A =$`,
      verify: { kind: "value", inputs: { r: "1/2" }, params: { form: "value", f: "tan" } },
      options: [
        { key: "A", text: t`$\frac{11}{6}$`, correct: false, misconceptionId: "C06-M4", value: "11/6" },
        { key: "B", text: t`$\frac{11}{2}$`, correct: true, value: "11/2" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C06-M1", value: "3/2" },
        { key: "D", text: t`$- \frac{11}{2}$`, correct: false, misconceptionId: "C06-M2", value: "-11/2" },
      ],
      solution: {
        steps: [
          t`$\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A}$ with $\tan A = \frac{1}{2}$.`,
          t`Numerator: $\frac{3}{2} - \frac{1}{8} = \frac{11}{8}$. Denominator: $1 - \frac{3}{4} = \frac{1}{4}$.`,
          t`$\tan 3A = \frac{11}{8} \div \frac{1}{4} = \frac{11}{2}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q3(ii)" },
      stem: t`$(\sin 3x + \sin x)\sin x + (\cos 3x - \cos x)\cos x$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", expr: "q3ii" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$2 + 2\sin^2 x$`, correct: false, misconceptionId: "C06-M1", value: "3 - cos(2*x)" },
        { key: "C", text: t`$-2\cos 2x$`, correct: false, misconceptionId: "C06-M2", value: "-2*cos(2*x)" },
        { key: "D", text: t`$-3\cos 2x$`, correct: false, misconceptionId: "C06-M3", value: "-3*cos(2*x)" },
      ],
      solution: {
        steps: [
          t`$\sin 3x + \sin x = 4\sin x - 4\sin^3 x$ and $\cos 3x - \cos x = 4\cos^3 x - 4\cos x$.`,
          t`So the expression is $4\sin^2 x - 4\sin^4 x + 4\cos^4 x - 4\cos^2 x$.`,
          t`$4(\cos^4 x - \sin^4 x) = 4(\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x) = 4(\cos^2 x - \sin^2 x)$, which cancels $-4(\cos^2 x - \sin^2 x)$. The expression is $0$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "authored" },
      stem: t`If $\cos A = \frac{1}{3}$, then $\cos 3A =$`,
      verify: { kind: "value", inputs: { r: "1/3" }, params: { form: "value", f: "cos" } },
      options: [
        { key: "A", text: t`$\frac{23}{27}$`, correct: false, misconceptionId: "C06-M2", value: "23/27" },
        { key: "B", text: t`$- \frac{26}{27}$`, correct: false, misconceptionId: "C06-M3", value: "-26/27" },
        { key: "C", text: t`$- \frac{23}{27}$`, correct: true, value: "-23/27" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C06-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`$\cos 3A = 4\cos^3 A - 3\cos A$.`,
          t`$= 4 \cdot \frac{1}{27} - 3 \cdot \frac{1}{3} = \frac{4}{27} - 1 = -\frac{23}{27}$.`,
        ],
      },
    },
  ],
};
