import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Neither $\cos 52.5^\circ$ nor $\cos 7.5^\circ$ is in your table. **Can you still find $\cos 52.5^\circ\cos 7.5^\circ$ exactly?**`,
    reveal: t`Yes. The two angles add to $60^\circ$ and differ by $45^\circ$, so $2\cos 52.5^\circ\cos 7.5^\circ = \cos 60^\circ + \cos 45^\circ = \frac{1}{2} + \frac{\sqrt{2}}{2}$. Halve it: $\cos 52.5^\circ\cos 7.5^\circ = \frac{1 + \sqrt{2}}{4}$.`,
  },
  explanation: {
    intuition: t`Add $\sin(A + B) = \sin A\cos B + \cos A\sin B$ and $\sin(A - B) = \sin A\cos B - \cos A\sin B$: the $\cos A\sin B$ terms cancel and $2\sin A\cos B$ is left. Subtract them instead and $2\cos A\sin B$ is left. Do the same with $\cos(A - B)$ and $\cos(A + B)$ to get $2\cos A\cos B$ and $2\sin A\sin B$. So a product of two ratios becomes a sum of two, and sums are easy to cancel, add up or evaluate.`,
    formal: t`**The four formulas**

$$\begin{aligned} 2\sin A\cos B &= \sin(A + B) + \sin(A - B) \\ 2\cos A\sin B &= \sin(A + B) - \sin(A - B) \\ 2\cos A\cos B &= \cos(A + B) + \cos(A - B) \\ 2\sin A\sin B &= \cos(A - B) - \cos(A + B) \end{aligned}$$

**The angles are just $A + B$ and $A - B$.** No halves: halves belong to the sum-into-product formulas, which go the other way.

**Signs.** The cos-cos product has a plus; the sin-sin product is cos of the difference **minus** cos of the sum. A sin times a cos gives sines; write it with the sin's angle as $A$ and it is always a plus: $2\cos 5x\sin 2x = 2\sin 2x\cos 5x = \sin 7x + \sin(-3x) = \sin 7x - \sin 3x$.

**The 2 matters.** The formulas give twice the product, so $\sin A\cos B = \frac{1}{2}[\sin(A + B) + \sin(A - B)]$.

**Three or four factors.** Convert two at a time. Put in known values ($\cos 60^\circ = \frac{1}{2}$, $\sin 60^\circ = \frac{\sqrt{3}}{2}$) as numbers, and use $\cos(180^\circ - \theta) = -\cos\theta$ to make terms cancel.`,
    worked: {
      prompt: t`Show that $\cos 20^\circ\cos 40^\circ\cos 60^\circ\cos 80^\circ = \frac{1}{16}$.`,
      steps: [
        t`$\cos 60^\circ = \frac{1}{2}$, so the product is $\frac{1}{2}\cos 20^\circ\cos 40^\circ\cos 80^\circ$.`,
        t`$2\cos 40^\circ\cos 20^\circ = \cos 60^\circ + \cos 20^\circ = \frac{1}{2} + \cos 20^\circ$. So $\cos 20^\circ\cos 40^\circ\cos 80^\circ = \frac{1}{2}\left(\frac{1}{2} + \cos 20^\circ\right)\cos 80^\circ = \frac{1}{4}\cos 80^\circ + \frac{1}{2}\cos 20^\circ\cos 80^\circ$.`,
        t`$2\cos 80^\circ\cos 20^\circ = \cos 100^\circ + \cos 60^\circ = -\cos 80^\circ + \frac{1}{2}$, so $\frac{1}{2}\cos 20^\circ\cos 80^\circ = \frac{1}{8} - \frac{1}{4}\cos 80^\circ$.`,
        t`Add: $\frac{1}{4}\cos 80^\circ + \frac{1}{8} - \frac{1}{4}\cos 80^\circ = \frac{1}{8}$. Then multiply by the $\frac{1}{2}$ from step 1.`,
      ],
      answer: t`$\frac{1}{2} \cdot \frac{1}{8} = \frac{1}{16}$.`,
    },
    visualSpec: t`Drag $A$ and $B$ round the unit circle; a bar for $2\sin A\cos B$ and a stacked bar for $\sin(A + B) + \sin(A - B)$ always stand the same height, while the angles $A + B$ and $A - B$ swing round the circle.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Reversing the sin-sin formula: $2\sin A\sin B = \cos(A + B) - \cos(A - B)$`,
      remediation: t`Subtract the expansions: $\cos(A - B) - \cos(A + B) = 2\sin A\sin B$. The cos of the difference comes first: $2\sin A\sin B = \cos(A - B) - \cos(A + B)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M2",
      mistake: t`Ignoring the order of the factors, so $2\cos A\sin B$ gets the plus of $2\sin A\cos B$ (or $2\sin A\cos B$ gets a minus)`,
      remediation: t`Order matters: $2\sin A\cos B = \sin(A + B) + \sin(A - B)$ but $2\cos A\sin B = \sin(A + B) - \sin(A - B)$. Put the sin's angle first and it is always a plus.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: t`Dropping the 2: reading the formula as $\sin A\cos B = \sin(A + B) + \sin(A - B)$, so the answer comes out twice too big`,
      remediation: t`The formulas give **twice** the product: $\sin A\cos B = \frac{1}{2}[\sin(A + B) + \sin(A - B)]$. For $k$ times a product, take $\frac{k}{2}$ times the bracket.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Halving the angles, as in the sum-into-product formulas: $2\sin A\cos B = \sin\frac{A + B}{2} + \sin\frac{A - B}{2}$`,
      remediation: t`Halves appear only when a sum is turned into a product. Turning a product into a sum, the angles are plain $A + B$ and $A - B$: $2\sin A\cos B = \sin(A + B) + \sin(A - B)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M5",
      mistake: t`Swapping the cos-cos and sin-sin formulas: $2\cos A\cos B = \cos(A - B) - \cos(A + B)$ and $2\sin A\sin B = \cos(A - B) + \cos(A + B)$`,
      remediation: t`Adding $\cos(A - B)$ and $\cos(A + B)$ cancels the sin terms, so the plus goes with cos-cos: $2\cos A\cos B = \cos(A + B) + \cos(A - B)$. The minus gives $2\sin A\sin B = \cos(A - B) - \cos(A + B)$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C09-M1 applies only to sin-sin products (and tan-tan, read as sin-sin over cos-cos); C09-M2 only to sin-cos or cos-sin products; C09-M5 only to cos-cos, sin-sin or tan-tan.",
    t`C09-M2 gives the key when $\sin(A - B) = 0$; C09-M5 when $\cos(A + B) = 0$; C09-M1 when $\cos(A + B) = \cos(A - B)$: draw diagnosing items away from these.`,
    "C09-M3 doubles the answer, so it gives the key when the product is 0 and cancels in a ratio such as tan-tan: never tag it there.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.4 Q1(i)" },
      stem: t`Written as a sum, $\sin 4x\cos 2x$ is:`,
      verify: { kind: "value", inputs: { a: "4*x", b: "2*x" }, params: { fg: "sc" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}(\sin 6x - \sin 2x)$`, correct: false, misconceptionId: "C09-M2", value: "-sin(2*x)/2 + sin(6*x)/2" },
        { key: "B", text: t`$\frac{1}{2}(\sin 3x + \sin x)$`, correct: false, misconceptionId: "C09-M4", value: "sin(x)/2 + sin(3*x)/2" },
        { key: "C", text: t`$\frac{1}{2}(\sin 6x + \sin 2x)$`, correct: true, value: "sin(2*x)/2 + sin(6*x)/2" },
        { key: "D", text: t`$\sin 6x + \sin 2x$`, correct: false, misconceptionId: "C09-M3", value: "sin(2*x) + sin(6*x)" },
      ],
      solution: {
        steps: [
          t`$\sin 4x\cos 2x = \frac{1}{2} \cdot 2\sin 4x\cos 2x$.`,
          t`$2\sin A\cos B = \sin(A + B) + \sin(A - B)$ with $A = 4x$, $B = 2x$: $2\sin 4x\cos 2x = \sin 6x + \sin 2x$.`,
          t`Halve it: $\sin 4x\cos 2x = \frac{1}{2}(\sin 6x + \sin 2x)$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.4.2 SolvedEx.2(ii)" },
      stem: t`Written as a difference, $4\sin\left(\frac{x + y}{2}\right)\sin\left(\frac{x - y}{2}\right)$ is:`,
      verify: { kind: "value", inputs: { a: "(x + y)/2", b: "(x - y)/2", k: "4" }, params: { fg: "ss" } },
      options: [
        { key: "A", text: t`$2\cos y - 2\cos x$`, correct: true, value: "-2*cos(x) + 2*cos(y)" },
        { key: "B", text: t`$2\cos x - 2\cos y$`, correct: false, misconceptionId: "C09-M1", value: "2*cos(x) - 2*cos(y)" },
        { key: "C", text: t`$2\cos y + 2\cos x$`, correct: false, misconceptionId: "C09-M5", value: "2*cos(x) + 2*cos(y)" },
        { key: "D", text: t`$4\cos y - 4\cos x$`, correct: false, misconceptionId: "C09-M3", value: "-4*cos(x) + 4*cos(y)" },
      ],
      solution: {
        steps: [
          t`Let $P = \frac{x + y}{2}$ and $Q = \frac{x - y}{2}$. Then $P + Q = x$ and $P - Q = y$.`,
          t`$2\sin P\sin Q = \cos(P - Q) - \cos(P + Q) = \cos y - \cos x$.`,
          t`$4\sin P\sin Q$ is twice that: $2\cos y - 2\cos x$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.4 Q1(iv)" },
      stem: t`Written as a sum, $2\cos 35^\circ\cos 75^\circ$ is:`,
      verify: { kind: "value", inputs: { a: "7*pi/36", b: "5*pi/12", k: "2" }, params: { fg: "cc" } },
      options: [
        { key: "A", text: t`$2\cos 110^\circ + 2\cos 40^\circ$`, correct: false, misconceptionId: "C09-M3", value: "-2*sin(pi/9) + 2*cos(2*pi/9)" },
        { key: "B", text: t`$\cos 40^\circ - \cos 110^\circ$`, correct: false, misconceptionId: "C09-M5", value: "sin(pi/9) + cos(2*pi/9)" },
        { key: "C", text: t`$\cos 55^\circ + \cos 20^\circ$`, correct: false, misconceptionId: "C09-M4", value: "cos(11*pi/36) + cos(pi/9)" },
        { key: "D", text: t`$\cos 110^\circ + \cos 40^\circ$`, correct: true, value: "-sin(pi/9) + cos(2*pi/9)" },
      ],
      solution: {
        steps: [
          t`$2\cos A\cos B = \cos(A + B) + \cos(A - B)$ with $A = 35^\circ$, $B = 75^\circ$.`,
          t`$= \cos 110^\circ + \cos(-40^\circ)$, and $\cos(-40^\circ) = \cos 40^\circ$.`,
          t`So $2\cos 35^\circ\cos 75^\circ = \cos 110^\circ + \cos 40^\circ$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.4 Q2(vi)" },
      stem: t`To prove $\sin 20^\circ\sin 40^\circ\sin 60^\circ\sin 80^\circ = \frac{3}{16}$, you first write $2\sin 20^\circ\sin 40^\circ$ as:`,
      verify: { kind: "value", inputs: { a: "pi/9", b: "2*pi/9", k: "2" }, params: { fg: "ss" } },
      options: [
        { key: "A", text: t`$\cos 20^\circ - \frac{1}{2}$`, correct: true, value: "-1/2 + cos(pi/9)" },
        { key: "B", text: t`$\frac{1}{2} - \cos 20^\circ$`, correct: false, misconceptionId: "C09-M1", value: "1/2 - cos(pi/9)" },
        { key: "C", text: t`$\cos 20^\circ + \frac{1}{2}$`, correct: false, misconceptionId: "C09-M5", value: "1/2 + cos(pi/9)" },
        { key: "D", text: t`$\cos 10^\circ - \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C09-M4", value: "-sqrt(3)/2 + cos(pi/18)" },
      ],
      solution: {
        steps: [
          t`$2\sin A\sin B = \cos(A - B) - \cos(A + B)$ with $A = 20^\circ$, $B = 40^\circ$.`,
          t`$= \cos(-20^\circ) - \cos 60^\circ = \cos 20^\circ - \frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.4 Q1(ii)" },
      stem: t`The value of $2\cos 75^\circ\sin 15^\circ$ is:`,
      verify: { kind: "value", inputs: { a: "5*pi/12", b: "pi/12", k: "2" }, params: { fg: "cs" } },
      options: [
        { key: "A", text: t`$2 - \sqrt{3}$`, correct: false, misconceptionId: "C09-M3", value: "2 - sqrt(3)" },
        { key: "B", text: t`$\frac{\sqrt{2} - 1}{2}$`, correct: false, misconceptionId: "C09-M4", value: "-1/2 + sqrt(2)/2" },
        { key: "C", text: t`$1 - \frac{\sqrt{3}}{2}$`, correct: true, value: "1 - sqrt(3)/2" },
        { key: "D", text: t`$1 + \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C09-M2", value: "sqrt(3)/2 + 1" },
      ],
      solution: {
        steps: [
          t`$2\cos A\sin B = \sin(A + B) - \sin(A - B)$ with $A = 75^\circ$, $B = 15^\circ$.`,
          t`$= \sin 90^\circ - \sin 60^\circ = 1 - \frac{\sqrt{3}}{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc II Q13" },
      stem: t`$\tan(60^\circ + x)\tan(60^\circ - x)$ is equal to:`,
      verify: { kind: "value", inputs: { a: "pi/3 + x", b: "pi/3 - x" }, params: { fg: "tt" } },
      options: [
        { key: "A", text: t`$\dfrac{2\cos x - 1}{2\cos x + 1}$`, correct: false, misconceptionId: "C09-M4", value: "(2*cos(x) - 1)/(2*cos(x) + 1)" },
        { key: "B", text: t`$\dfrac{2\cos 2x + 1}{2\cos 2x - 1}$`, correct: true, value: "(2*cos(2*x) + 1)/(2*cos(2*x) - 1)" },
        { key: "C", text: t`$\dfrac{2\cos 2x + 1}{1 - 2\cos 2x}$`, correct: false, misconceptionId: "C09-M1", value: "(4*sin(x)**2 - 3)/(2*cos(2*x) - 1)" },
        { key: "D", text: t`$\dfrac{2\cos 2x - 1}{2\cos 2x + 1}$`, correct: false, misconceptionId: "C09-M5", value: "(2*cos(2*x) - 1)/(2*cos(2*x) + 1)" },
      ],
      solution: {
        steps: [
          t`$\tan(60^\circ + x)\tan(60^\circ - x) = \dfrac{2\sin(60^\circ + x)\sin(60^\circ - x)}{2\cos(60^\circ + x)\cos(60^\circ - x)}$. The angles' difference is $2x$ and their sum is $120^\circ$.`,
          t`Top: $\cos 2x - \cos 120^\circ = \cos 2x + \frac{1}{2}$. Bottom: $\cos 120^\circ + \cos 2x = \cos 2x - \frac{1}{2}$.`,
          t`Multiply top and bottom by $2$: $\dfrac{2\cos 2x + 1}{2\cos 2x - 1}$.`,
        ],
      },
    },
  ],
};
