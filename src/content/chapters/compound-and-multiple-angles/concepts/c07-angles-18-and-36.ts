import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`$\sin 30^\circ$ and $\sin 45^\circ$ come from set-square triangles. No set square has an $18^\circ$ angle, but $5 \times 18^\circ = 90^\circ$. **Why does that give $\sin 18^\circ$ an exact surd value?**`,
    reveal: t`Split $5\theta = 90^\circ$ as $2\theta + 3\theta$: then $2\theta$ and $3\theta$ are complements, so $\sin 2\theta = \cos 3\theta$. Expand both with the double and triple angle formulas and divide by $\cos\theta$: what is left is a quadratic in $\sin\theta$, $4\sin^2\theta + 2\sin\theta - 1 = 0$. A quadratic's roots are surds, so $\sin 18^\circ$ is one.`,
  },
  explanation: {
    intuition: t`Most angles have no neat exact sine. $18^\circ$ does, because five of them make a right angle: $2\theta + 3\theta = 90^\circ$. So $\sin 2\theta = \cos 3\theta$, and the double and triple angle formulas turn that into a quadratic in $\sin\theta$. Once $\sin 18^\circ$ is known, $\cos 36^\circ$ follows from $\cos 2\theta$. The rest of the family ($\cos 72^\circ$, $\sin 54^\circ$, $\cos 18^\circ$, $\sin 36^\circ$) comes from complements and $\sin^2\theta + \cos^2\theta = 1$.`,
    formal: t`**Set up.** Let $\theta = 18^\circ$. Then $5\theta = 90^\circ$, so $2\theta = 90^\circ - 3\theta$ and $\sin 2\theta = \cos 3\theta$.

**The quadratic.** $2\sin\theta\cos\theta = 4\cos^3\theta - 3\cos\theta$. Divide by $\cos\theta \ne 0$: $2\sin\theta = 4\cos^2\theta - 3 = 1 - 4\sin^2\theta$. So $4\sin^2\theta + 2\sin\theta - 1 = 0$ and $\sin\theta = \frac{-2 \pm \sqrt{20}}{8} = \frac{-1 \pm \sqrt{5}}{4}$. $18^\circ$ is acute: keep the positive root.

**The two values.**

$$\sin 18^\circ = \frac{\sqrt{5} - 1}{4}, \qquad \cos 36^\circ = 1 - 2\sin^2 18^\circ = \frac{\sqrt{5} + 1}{4}$$

Size check: $\sin 18^\circ \approx 0.31$ is below $\sin 30^\circ = \frac{1}{2}$; $\cos 36^\circ \approx 0.81$ is above $\cos 60^\circ = \frac{1}{2}$.

**The relatives.** Complements: $\cos 72^\circ = \sin 18^\circ$ and $\sin 54^\circ = \cos 36^\circ$. Pythagoras: $\cos 18^\circ = \sqrt{1 - \sin^2 18^\circ}$ and $\sin 36^\circ = \sqrt{1 - \cos^2 36^\circ}$. Write $1 - \sin^2 18^\circ$ as one fraction first, then take the root of the whole.`,
    worked: {
      prompt: t`Find $\sin 54^\circ \cdot \cos 72^\circ$.`,
      steps: [
        t`$54^\circ = 90^\circ - 36^\circ$, so $\sin 54^\circ = \cos 36^\circ = \frac{\sqrt{5} + 1}{4}$.`,
        t`$72^\circ = 90^\circ - 18^\circ$, so $\cos 72^\circ = \sin 18^\circ = \frac{\sqrt{5} - 1}{4}$.`,
        t`Multiply: $\frac{(\sqrt{5} + 1)(\sqrt{5} - 1)}{16} = \frac{5 - 1}{16}$.`,
      ],
      answer: t`$\sin 54^\circ \cdot \cos 72^\circ = \frac{1}{4}$.`,
    },
    visualSpec: t`Drag $\theta$ from $0^\circ$ to $45^\circ$: the graphs of $\sin 2\theta$ and $\cos 3\theta$ cross at exactly $\theta = 18^\circ$, and beside them the parabola $y = 4x^2 + 2x - 1$ shows its two roots, the negative one greyed out.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Swapping the two surds: $\sin 18^\circ = \frac{\sqrt{5} + 1}{4}$ and $\cos 36^\circ = \frac{\sqrt{5} - 1}{4}$`,
      remediation: t`Check the sizes: $\sin 18^\circ$ is less than $\sin 30^\circ = \frac{1}{2}$, so it is the smaller one, $\frac{\sqrt{5} - 1}{4} \approx 0.31$; $\cos 36^\circ$ is more than $\cos 60^\circ = \frac{1}{2}$, so it is $\frac{\sqrt{5} + 1}{4} \approx 0.81$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Keeping the negative root of $4\sin^2\theta + 2\sin\theta - 1 = 0$: $\sin 18^\circ = -\frac{\sqrt{5} + 1}{4}$, and then $\cos 36^\circ = 1 - 2\sin^2 18^\circ = \frac{1 - \sqrt{5}}{4}$`,
      remediation: t`$18^\circ$ is acute, so $\sin 18^\circ > 0$: of the roots $\frac{-1 \pm \sqrt{5}}{4}$, keep $\frac{\sqrt{5} - 1}{4}$ and reject the negative one. Then $\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$, positive as an acute angle's cosine must be.`,
      fallback: { kind: "ext", topic: "signs in the four quadrants" },
    },
    {
      id: "C07-M3",
      mistake: t`Treating sin as if it doubles with the angle: $\sin 2\theta = 2\sin\theta$, so $\sin 36^\circ = 2\sin 18^\circ$`,
      remediation: t`$\sin 2\theta = 2\sin\theta\cos\theta$: the factor $\cos\theta$ stays. So $\sin 36^\circ = 2\sin 18^\circ\cos 18^\circ$; or use $\sin 36^\circ = \sqrt{1 - \cos^2 36^\circ}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M4",
      mistake: t`Reversing the sign in $\cos 2\theta$: $\cos 36^\circ = 2\sin^2 18^\circ - 1$`,
      remediation: t`$\cos 2\theta = 1 - 2\sin^2\theta = 2\cos^2\theta - 1$. With $\sin\theta$ in it, the $1$ comes first: $\cos 36^\circ = 1 - 2\sin^2 18^\circ$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M5",
      mistake: t`Dividing by $a$ instead of $2a$ in the quadratic formula: $\sin 18^\circ = \frac{-2 + \sqrt{20}}{4} = \frac{\sqrt{5} - 1}{2}$`,
      remediation: t`The roots of $ax^2 + bx + c = 0$ are $\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. For $4\sin^2\theta + 2\sin\theta - 1 = 0$ the denominator is $2 \times 4 = 8$: $\frac{-2 + 2\sqrt{5}}{8} = \frac{\sqrt{5} - 1}{4}$.`,
      fallback: { kind: "ext", topic: "the quadratic formula" },
    },
    {
      id: "C07-M6",
      mistake: t`Taking the square root term by term: $\sqrt{1 - \sin^2\theta} = 1 - \sin\theta$`,
      remediation: t`$\sqrt{a^2 - b^2}$ is not $a - b$. Work out $1 - \sin^2 18^\circ$ as one fraction first, then take the square root of the whole: $\cos 18^\circ = \sqrt{1 - \sin^2 18^\circ}$.`,
      fallback: { kind: "ext", topic: "square roots of sums and differences" },
    },
  ],
  engineNotes: [
    t`C07-M1 and C07-M2 give the same value on $\cos 18^\circ$, $\sin 72^\circ$, $\sin 36^\circ$ and $\cos 54^\circ$ (the other surd $\frac{\sqrt{10 \mp 2\sqrt{5}}}{4}$): never tag both on such an item.`,
    t`C07-M1 and C07-M2 both give the key on $\sin 18^\circ\cos 36^\circ$, and C07-M2 on $\cos 36^\circ - \sin 18^\circ$: diagnose them with single values or with sums.`,
    t`C07-M3 applies only to $\sin 36^\circ$, $\cos 54^\circ$ and $\sin 72^\circ$; C07-M4 only to $\cos 36^\circ$ and $\sin 54^\circ$; C07-M6 only to $\cos 18^\circ$, $\sin 72^\circ$, $\sin 36^\circ$ and $\cos 54^\circ$; C07-M5 needs $\sin 18^\circ$ or a value built from it.`,
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.3.2 SolvedEx.12" },
      stem: t`The value of $\sin\frac{\pi}{10}$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(18)" } },
      options: [
        { key: "A", text: t`$-\frac{\sqrt{5} + 1}{4}$`, correct: false, misconceptionId: "C07-M2", value: "-sqrt(5)/4 - 1/4" },
        { key: "B", text: t`$\frac{\sqrt{5} - 1}{2}$`, correct: false, misconceptionId: "C07-M5", value: "-1/2 + sqrt(5)/2" },
        { key: "C", text: t`$\frac{\sqrt{5} - 1}{4}$`, correct: true, value: "-1/4 + sqrt(5)/4" },
        { key: "D", text: t`$\frac{\sqrt{5} + 1}{4}$`, correct: false, misconceptionId: "C07-M1", value: "1/4 + sqrt(5)/4" },
      ],
      solution: {
        steps: [
          t`$\frac{\pi}{10} = 18^\circ$. With $\theta = 18^\circ$, $2\theta = 90^\circ - 3\theta$, so $\sin 2\theta = \cos 3\theta$: $2\sin\theta\cos\theta = 4\cos^3\theta - 3\cos\theta$.`,
          t`Divide by $\cos\theta$ and put $\cos^2\theta = 1 - \sin^2\theta$: $2\sin\theta = 1 - 4\sin^2\theta$, so $4\sin^2\theta + 2\sin\theta - 1 = 0$.`,
          t`$\sin\theta = \frac{-2 \pm \sqrt{4 + 16}}{8} = \frac{-1 \pm \sqrt{5}}{4}$. $18^\circ$ is acute, so keep the positive root: $\sin\frac{\pi}{10} = \frac{\sqrt{5} - 1}{4}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc II Q24" },
      stem: t`The value of $\cos 36^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "cos(36)" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{5} - 1}{4}$`, correct: false, misconceptionId: "C07-M1", value: "-1/4 + sqrt(5)/4" },
        { key: "B", text: t`$\frac{1 - \sqrt{5}}{4}$`, correct: false, misconceptionId: "C07-M2", value: "1/4 - sqrt(5)/4" },
        { key: "C", text: t`$-\frac{\sqrt{5} + 1}{4}$`, correct: false, misconceptionId: "C07-M4", value: "-sqrt(5)/4 - 1/4" },
        { key: "D", text: t`$\frac{\sqrt{5} + 1}{4}$`, correct: true, value: "1/4 + sqrt(5)/4" },
      ],
      solution: {
        steps: [
          t`$\cos 36^\circ = \cos 2(18^\circ) = 1 - 2\sin^2 18^\circ$, with $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$.`,
          t`$\sin^2 18^\circ = \frac{5 - 2\sqrt{5} + 1}{16} = \frac{6 - 2\sqrt{5}}{16}$.`,
          t`$\cos 36^\circ = 1 - \frac{6 - 2\sqrt{5}}{8} = \frac{2 + 2\sqrt{5}}{8} = \frac{\sqrt{5} + 1}{4}$, about $0.81$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc II Q25" },
      stem: t`The value of $\sin 36^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(36)" } },
      options: [
        { key: "A", text: t`$\frac{3 - \sqrt{5}}{4}$`, correct: false, misconceptionId: "C07-M6", value: "3/4 - sqrt(5)/4" },
        { key: "B", text: t`$\frac{\sqrt{10 - 2\sqrt{5}}}{4}$`, correct: true, value: "sqrt(10 - 2*sqrt(5))/4" },
        { key: "C", text: t`$\frac{\sqrt{10 + 2\sqrt{5}}}{4}$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(2*sqrt(5) + 10)/4" },
        { key: "D", text: t`$\frac{\sqrt{5} - 1}{2}$`, correct: false, misconceptionId: "C07-M3", value: "-1/2 + sqrt(5)/2" },
      ],
      solution: {
        steps: [
          t`$\sin^2 36^\circ = 1 - \cos^2 36^\circ = 1 - \frac{(\sqrt{5} + 1)^2}{16}$.`,
          t`$(\sqrt{5} + 1)^2 = 6 + 2\sqrt{5}$, so $\sin^2 36^\circ = \frac{16 - 6 - 2\sqrt{5}}{16} = \frac{10 - 2\sqrt{5}}{16}$.`,
          t`$\sin 36^\circ > 0$, so $\sin 36^\circ = \frac{\sqrt{10 - 2\sqrt{5}}}{4}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`The value of $\cos 18^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "cos(18)" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{10 + 2\sqrt{5}}}{4}$`, correct: true, value: "sqrt(2*sqrt(5) + 10)/4" },
        { key: "B", text: t`$\frac{\sqrt{10 - 2\sqrt{5}}}{4}$`, correct: false, misconceptionId: "C07-M1", value: "sqrt(10 - 2*sqrt(5))/4" },
        { key: "C", text: t`$\frac{\sqrt{2\sqrt{5} - 2}}{2}$`, correct: false, misconceptionId: "C07-M5", value: "sqrt(-2 + 2*sqrt(5))/2" },
        { key: "D", text: t`$\frac{5 - \sqrt{5}}{4}$`, correct: false, misconceptionId: "C07-M6", value: "5/4 - sqrt(5)/4" },
      ],
      solution: {
        steps: [
          t`$\cos^2 18^\circ = 1 - \sin^2 18^\circ = 1 - \frac{(\sqrt{5} - 1)^2}{16}$.`,
          t`$(\sqrt{5} - 1)^2 = 6 - 2\sqrt{5}$, so $\cos^2 18^\circ = \frac{16 - 6 + 2\sqrt{5}}{16} = \frac{10 + 2\sqrt{5}}{16}$.`,
          t`$\cos 18^\circ > 0$, so $\cos 18^\circ = \frac{\sqrt{10 + 2\sqrt{5}}}{4}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`The value of $\cos 36^\circ - \sin 18^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "cos(36) - sin(18)" } },
      options: [
        { key: "A", text: t`$-\frac{1}{2}$`, correct: false, misconceptionId: "C07-M1", value: "-1/2" },
        { key: "B", text: t`$-\frac{\sqrt{5}}{2}$`, correct: false, misconceptionId: "C07-M4", value: "-sqrt(5)/2" },
        { key: "C", text: t`$\frac{\sqrt{5} - 3}{2}$`, correct: false, misconceptionId: "C07-M5", value: "-3/2 + sqrt(5)/2" },
        { key: "D", text: t`$\frac{1}{2}$`, correct: true, value: "1/2" },
      ],
      solution: {
        steps: [
          t`$\cos 36^\circ = \frac{\sqrt{5} + 1}{4}$ and $\sin 18^\circ = \frac{\sqrt{5} - 1}{4}$.`,
          t`$\cos 36^\circ - \sin 18^\circ = \frac{\sqrt{5} + 1 - \sqrt{5} + 1}{4} = \frac{2}{4} = \frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "authored" },
      stem: t`The value of $\sin^2 72^\circ - \sin^2 60^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(72)**2 - sin(60)**2" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{5} - 1}{8}$`, correct: true, value: "-1/8 + sqrt(5)/8" },
        { key: "B", text: t`$-\frac{\sqrt{5} + 1}{8}$`, correct: false, misconceptionId: "C07-M1", value: "-sqrt(5)/8 - 1/8" },
        { key: "C", text: t`$\frac{7 - 2\sqrt{5}}{4}$`, correct: false, misconceptionId: "C07-M3", value: "7/4 - sqrt(5)/2" },
        { key: "D", text: t`$\frac{9 - 5\sqrt{5}}{8}$`, correct: false, misconceptionId: "C07-M6", value: "9/8 - 5*sqrt(5)/8" },
      ],
      solution: {
        steps: [
          t`$72^\circ = 90^\circ - 18^\circ$, so $\sin^2 72^\circ = \cos^2 18^\circ = 1 - \sin^2 18^\circ = 1 - \frac{6 - 2\sqrt{5}}{16} = \frac{10 + 2\sqrt{5}}{16}$.`,
          t`$\sin^2 60^\circ = \frac{3}{4} = \frac{12}{16}$.`,
          t`$\sin^2 72^\circ - \sin^2 60^\circ = \frac{10 + 2\sqrt{5} - 12}{16} = \frac{2\sqrt{5} - 2}{16} = \frac{\sqrt{5} - 1}{8}$.`,
        ],
      },
    },
  ],
};
