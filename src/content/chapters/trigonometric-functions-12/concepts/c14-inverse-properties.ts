import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`Without a calculator, find $\sin^{-1}(0.3) + \cos^{-1}(0.3)$.`,
    reveal: t`It is $\frac{\pi}{2}$. Draw a right triangle with hypotenuse $10$ and one side $3$. The angle facing $3$ has sine $0.3$; the other acute angle has cosine $0.3$. The two acute angles of a right triangle add up to $\frac{\pi}{2}$.`,
  },
  explanation: {
    intuition: [
      t`$\sin^{-1}x$, $\cos^{-1}x$ and $\tan^{-1}x$ are **angles**: their principal values.`,
      t`The sine of an angle is the cosine of its **complement**, the angle that makes it up to $\frac{\pi}{2}$.`,
      t`So the angles $\sin^{-1}x$ and $\cos^{-1}x$ always add up to $\frac{\pi}{2}$.`,
      t`Two $\tan^{-1}$ angles add like any two angles: through $\tan(\alpha + \beta)$.`,
      t`That turns $\tan^{-1}x + \tan^{-1}y$ into one $\tan^{-1}$ of a fraction.`,
      t`The result is still an angle, so the last step is always $\tan^{-1}$.`,
    ],
    formal: [
      {
        title: "Sine and cosine inverses",
        points: [
          t`In a right triangle with sides $3$, $4$, $5$, the angle facing $3$ is $\sin^{-1}\frac{3}{5}$.`,
          t`The two acute angles of a right triangle add up to $\frac{\pi}{2}$.`,
          t`The other acute angle has cosine $\frac{3}{5}$, so it is $\cos^{-1}\frac{3}{5}$.`,
          t`So $\sin^{-1}\frac{3}{5} + \cos^{-1}\frac{3}{5}$ $= \frac{\pi}{2}$.`,
          t`Both inverses must take the **same** number: $\sin^{-1}\frac{3}{5} + \cos^{-1}\frac{4}{5}$ is not $\frac{\pi}{2}$.`,
        ],
        figure: {
          alt: "A right triangle ABC with the right angle at B, AB = 4, BC = 3 and hypotenuse AC = 5. The angle at A has sine 3/5, so it is sin⁻¹(3/5). The angle at C has cosine 3/5, so it is cos⁻¹(3/5). The angles of a triangle add up to π and the right angle takes π/2, so the two acute angles together make π/2.",
          axes: "none",
          view: { x: [-1, 5.6], y: [-1.6, 4.6] },
          elements: [
            { kind: "segment", from: [0, 0], to: [4, 0], tone: "muted", label: "4", labelAt: "s", step: 1 },
            { kind: "segment", from: [4, 0], to: [4, 3], tone: "muted", label: "3", labelAt: "e", step: 1 },
            { kind: "segment", from: [0, 0], to: [4, 3], tone: "muted", label: "5", labelAt: "nw", step: 1 },
            { kind: "angle", at: [4, 0], from: 90, to: 180, tone: "muted", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 36.87, step: 1 },
            { kind: "label", at: [0.9, 0.1], label: "sin⁻¹(3/5)", labelAt: "ne", step: 1 },
            { kind: "angle", at: [4, 3], from: 216.87, to: 270, tone: "good", step: 3 },
            { kind: "label", at: [4, 3.1], label: "cos⁻¹(3/5)", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "It holds for every x",
        points: [
          t`Let $-1 \le x \le 1$ and $\theta = \sin^{-1}x$, so $\sin\theta = x$ and $-\frac{\pi}{2} \le \theta \le \frac{\pi}{2}$.`,
          t`Then $x = \sin\theta$ $= \cos\left(\frac{\pi}{2} - \theta\right)$.`,
          t`Also $0 \le \frac{\pi}{2} - \theta \le \pi$, the principal range of $\cos^{-1}$.`,
          t`So $\cos^{-1}x = \frac{\pi}{2} - \theta$, which gives $\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$.`,
          t`This works for negative $x$ too: the sum is $\frac{\pi}{2}$, never $\pi$ and never $1$.`,
        ],
      },
      {
        title: "Adding two tan inverses",
        points: [
          t`Let $\alpha = \tan^{-1}x$ and $\beta = \tan^{-1}y$, so $\tan\alpha = x$ and $\tan\beta = y$.`,
          t`The compound-angle formula gives $\tan(\alpha + \beta) = \frac{x + y}{1 - xy}$.`,
          t`If $xy < 1$, then $\alpha + \beta$ lies between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$, the range of $\tan^{-1}$.`,
          t`So $\tan^{-1}x + \tan^{-1}y$ $= \tan^{-1}\frac{x + y}{1 - xy}$, when $xy < 1$.`,
          t`Finish with $\tan^{-1}$: the fraction is the tangent of the answer, not the answer.`,
          t`It is not $\tan^{-1}(x + y)$: the tangent of a sum is not the sum of the tangents.`,
        ],
      },
      {
        title: "Differences, doubles and xy > 1",
        points: [
          t`Put $-y$ for $y$: $\tan^{-1}x - \tan^{-1}y$ $= \tan^{-1}\frac{x - y}{1 + xy}$, when $xy > -1$.`,
          t`Put $y = x$: $2\tan^{-1}x = \tan^{-1}\frac{2x}{1 - x^2}$, when $-1 < x < 1$.`,
          t`Watch the signs: minus on top goes with plus below, and plus on top with minus below.`,
          t`If $x, y > 0$ and $xy > 1$, then $\alpha + \beta$ is more than $\frac{\pi}{2}$, outside the range of $\tan^{-1}$.`,
          t`Then $\tan^{-1}x + \tan^{-1}y$ $= \pi + \tan^{-1}\frac{x + y}{1 - xy}$.`,
          t`Check: $\tan^{-1}1 + \tan^{-1}\sqrt{3}$ $= \frac{\pi}{4} + \frac{\pi}{3} = \frac{7\pi}{12}$, and $\pi + \tan^{-1}(-2 - \sqrt{3})$ $= \pi - \frac{5\pi}{12}$ agrees.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\tan^{-1}\frac{1}{4} + \tan^{-1}\frac{3}{5}$.`,
      steps: [
        t`Here $xy = \frac{1}{4} \cdot \frac{3}{5} = \frac{3}{20}$, which is less than $1$, so the formula applies.`,
        t`$x + y = \frac{1}{4} + \frac{3}{5}$ $= \frac{17}{20}$, and $1 - xy = 1 - \frac{3}{20} = \frac{17}{20}$.`,
        t`So the sum is $\tan^{-1}\left(\frac{17}{20} \div \frac{17}{20}\right)$ $= \tan^{-1}1$.`,
        t`$\tan^{-1}1 = \frac{\pi}{4}$, the angle in $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ whose tangent is $1$.`,
      ],
      answer: t`$\frac{\pi}{4}$`,
    },
    visualSpec: t`Drag two points on a line $x = 1$: the rays from $O$ make angles $\tan^{-1}x$ and $\tan^{-1}y$, and stacking one on the other shows their sum, which jumps past $\frac{\pi}{2}$ exactly when $xy$ passes $1$.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: t`Treats $\tan^{-1}$ as linear: $\tan^{-1}x + \tan^{-1}y = \tan^{-1}(x + y)$ and $2\tan^{-1}x = \tan^{-1}2x$`,
      remediation: t`The tangent of a sum is not the sum of the tangents. Use $\tan^{-1}x + \tan^{-1}y$ $= \tan^{-1}\frac{x + y}{1 - xy}$ when $xy < 1$.`,
      fallback: { kind: "ext", topic: "compound angle formulae" },
    },
    {
      id: "C14-M2",
      mistake: t`Swaps the sign in the denominator: $\frac{x + y}{1 + xy}$ for a sum, $\frac{x - y}{1 - xy}$ for a difference`,
      remediation: t`The signs are opposite: a sum has $\frac{x + y}{1 - xy}$ and a difference has $\frac{x - y}{1 + xy}$, as in $\tan(\alpha \pm \beta)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M3",
      mistake: t`Uses $\tan^{-1}\frac{x + y}{1 - xy}$ even when $xy > 1$`,
      remediation: t`When $x, y > 0$ and $xy > 1$, the sum is more than $\frac{\pi}{2}$, outside the range of $\tan^{-1}$. Add $\pi$: $\pi + \tan^{-1}\frac{x + y}{1 - xy}$.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C14-M4",
      mistake: t`Believes $\sin^{-1}x + \cos^{-1}x = \pi$`,
      remediation: t`$\sin^{-1}x$ and $\cos^{-1}x$ are complementary angles: $\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$ for every $x$ in $[-1, 1]$.`,
      fallback: { kind: "ext", topic: "trigonometric ratios of complementary angles" },
    },
    {
      id: "C14-M5",
      mistake: t`Believes $\sin^{-1}x + \cos^{-1}x = 1$, mixing it up with $\sin^2\theta + \cos^2\theta = 1$`,
      remediation: t`$\sin^{-1}x$ and $\cos^{-1}x$ are angles, not ratios. As angles they add up to $\frac{\pi}{2}$, not $1$.`,
      fallback: { kind: "concept", id: "C12" },
    },
    {
      id: "C14-M6",
      mistake: t`Stops at the tangent: gives the fraction $\frac{x + y}{1 - xy}$ (or $x$ for $\tan^{-1}x$) as the answer`,
      remediation: t`The fraction is the tangent of the answer. The answer is the angle: take $\tan^{-1}$ of it.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`M1, M2 and M6 apply to $\tan^{-1}$ sums, differences and doubles; M2 gives the key when $xy = 0$. M6 also covers a lone $\tan^{-1}a$ left as $a$.`,
    t`M3 applies only to a sum with $xy > 1$; for $xy < 1$ it gives the key.`,
    t`M4 and M5 apply only to items with $\sin^{-1}x + \cos^{-1}x$.`,
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.3 Ex3.3 Q.3 v)" },
      stem: t`$\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{3} = $`,
      verify: { kind: "value", inputs: { a: "1/2", b: "1/3" }, params: { kind: "sum" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C14-M6", value: "1" },
        { key: "B", text: t`$\frac{\pi}{4}$`, correct: true, value: "pi/4" },
        { key: "C", text: t`$\tan^{-1}\frac{5}{6}$`, correct: false, misconceptionId: "C14-M1", value: "atan(5/6)" },
        { key: "D", text: t`$\tan^{-1}\frac{5}{7}$`, correct: false, misconceptionId: "C14-M2", value: "atan(5/7)" },
      ],
      solution: {
        steps: [
          t`$xy = \frac{1}{2} \cdot \frac{1}{3} = \frac{1}{6}$, less than $1$, so use $\tan^{-1}\frac{x + y}{1 - xy}$.`,
          t`$x + y = \frac{5}{6}$ and $1 - xy = \frac{5}{6}$, so the fraction is $1$.`,
          t`The sum is $\tan^{-1}1 = \frac{\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.3 SolvedEx.6" },
      stem: t`$\tan^{-1}2 + \tan^{-1}3 = $`,
      verify: { kind: "value", inputs: { a: "2", b: "3" }, params: { kind: "sum" } },
      options: [
        { key: "A", text: t`$\frac{3 \pi}{4}$`, correct: true, value: "3*pi/4" },
        { key: "B", text: t`$- \frac{\pi}{4}$`, correct: false, misconceptionId: "C14-M3", value: "-pi/4" },
        { key: "C", text: t`$\tan^{-1}5$`, correct: false, misconceptionId: "C14-M1", value: "atan(5)" },
        { key: "D", text: t`$\tan^{-1}\frac{5}{7}$`, correct: false, misconceptionId: "C14-M2", value: "atan(5/7)" },
      ],
      solution: {
        steps: [
          t`$xy = 2 \cdot 3 = 6 > 1$, so the sum is more than $\frac{\pi}{2}$.`,
          t`$\frac{x + y}{1 - xy} = \frac{5}{1 - 6} = -1$, and $\tan^{-1}(-1) = -\frac{\pi}{4}$.`,
          t`Add $\pi$: $\tan^{-1}2 + \tan^{-1}3$ $= \pi - \frac{\pi}{4} = \frac{3\pi}{4}$.`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.3 Ex3.3 Q.3 vi)" },
      stem: t`$2\tan^{-1}\frac{1}{3} = $`,
      verify: { kind: "value", inputs: { a: "1/3" }, params: { kind: "double" } },
      options: [
        { key: "A", text: t`$\tan^{-1}\frac{3}{4}$`, correct: true, value: "atan(3/4)" },
        { key: "B", text: t`$\tan^{-1}\frac{2}{3}$`, correct: false, misconceptionId: "C14-M1", value: "atan(2/3)" },
        { key: "C", text: t`$\tan^{-1}\frac{3}{5}$`, correct: false, misconceptionId: "C14-M2", value: "atan(3/5)" },
        { key: "D", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C14-M6", value: "3/4" },
      ],
      solution: {
        steps: [
          t`$-1 < \frac{1}{3} < 1$, so use $2\tan^{-1}x = \tan^{-1}\frac{2x}{1 - x^2}$.`,
          t`$\frac{2x}{1 - x^2}$ $= \frac{2}{3} \div \frac{8}{9} = \frac{3}{4}$.`,
          t`So $2\tan^{-1}\frac{1}{3} = \tan^{-1}\frac{3}{4}$.`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.30" },
      stem: t`$\tan^{-1}\frac{1}{2} - \tan^{-1}\frac{1}{4} = $`,
      verify: { kind: "value", inputs: { a: "1/2", b: "1/4" }, params: { kind: "diff" } },
      options: [
        { key: "A", text: t`$\tan^{-1}\frac{1}{4}$`, correct: false, misconceptionId: "C14-M1", value: "atan(1/4)" },
        { key: "B", text: t`$\tan^{-1}\frac{2}{7}$`, correct: false, misconceptionId: "C14-M2", value: "atan(2/7)" },
        { key: "C", text: t`$\frac{2}{9}$`, correct: false, misconceptionId: "C14-M6", value: "2/9" },
        { key: "D", text: t`$\tan^{-1}\frac{2}{9}$`, correct: true, value: "atan(2/9)" },
      ],
      solution: {
        steps: [
          t`For a difference, use $\tan^{-1}\frac{x - y}{1 + xy}$, here with $xy = \frac{1}{8}$.`,
          t`$x - y = \frac{1}{4}$ and $1 + xy = \frac{9}{8}$, so the fraction is $\frac{1}{4} \div \frac{9}{8} = \frac{2}{9}$.`,
          t`So $\tan^{-1}\frac{1}{2} - \tan^{-1}\frac{1}{4}$ $= \tan^{-1}\frac{2}{9}$.`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/3.3 Ex3.3 Q.2 i)" },
      stem: t`$\tan^{-1}\sqrt{3} + \sin^{-1}\frac{1}{3} + \cos^{-1}\frac{1}{3} = $`,
      verify: { kind: "value", inputs: { a: "sqrt(3)", b: "1/3" }, params: { kind: "sc_tan" } },
      options: [
        { key: "A", text: t`$\frac{4 \pi}{3}$`, correct: false, misconceptionId: "C14-M4", value: "4*pi/3" },
        { key: "B", text: t`$1 + \frac{\pi}{3}$`, correct: false, misconceptionId: "C14-M5", value: "1 + pi/3" },
        { key: "C", text: t`$\frac{\pi}{2} + \sqrt{3}$`, correct: false, misconceptionId: "C14-M6", value: "pi/2 + sqrt(3)" },
        { key: "D", text: t`$\frac{5 \pi}{6}$`, correct: true, value: "5*pi/6" },
      ],
      solution: {
        steps: [
          t`$\sin^{-1}\frac{1}{3} + \cos^{-1}\frac{1}{3}$ $= \frac{\pi}{2}$, since both take the same number.`,
          t`$\tan^{-1}\sqrt{3} = \frac{\pi}{3}$.`,
          t`The total is $\frac{\pi}{3} + \frac{\pi}{2} = \frac{5\pi}{6}$.`,
        ],
      },
    },
    {
      id: "C14-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.15" },
      stem: t`$2\tan^{-1}\frac{1}{3} + \tan^{-1}\frac{1}{7} = $`,
      verify: { kind: "value", inputs: { a: "1/3", b: "1/7" }, params: { kind: "double_sum" } },
      options: [
        { key: "A", text: t`$\tan^{-1}\frac{13}{19}$`, correct: false, misconceptionId: "C14-M2", value: "atan(13/19)" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C14-M6", value: "1" },
        { key: "C", text: t`$\frac{\pi}{4}$`, correct: true, value: "pi/4" },
        { key: "D", text: t`$\tan^{-1}\frac{17}{21}$`, correct: false, misconceptionId: "C14-M1", value: "atan(17/21)" },
      ],
      solution: {
        steps: [
          t`$2\tan^{-1}\frac{1}{3} = \tan^{-1}\frac{2/3}{1 - 1/9}$ $= \tan^{-1}\frac{3}{4}$.`,
          t`Now $\frac{3}{4} \cdot \frac{1}{7} = \frac{3}{28} < 1$, so add with $\frac{x + y}{1 - xy}$.`,
          t`$\frac{3}{4} + \frac{1}{7} = \frac{25}{28}$ and $1 - \frac{3}{28} = \frac{25}{28}$, so the fraction is $1$.`,
          t`The sum is $\tan^{-1}1 = \frac{\pi}{4}$.`,
        ],
      },
    },
  ],
};
