import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The sides of a polygon through `pts`, in order, as muted segments. */
function sidesOf(pts: Pt[]): FigureElement[] {
  return pts.map((p, i) => ({ kind: "segment", from: p, to: pts[(i + 1) % pts.length], tone: "muted" }));
}

/** The idea slide's triangle: B at the origin, C on the base, A above; B = 63.43°, C = 50.19°. */
const VA: Pt = [1.5, 3];
const VB: Pt = [0, 0];
const VC: Pt = [4, 0];

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A triangle has angles $40^\circ$, $60^\circ$ and $80^\circ$. A calculator gives $\tan 40^\circ + \tan 60^\circ + \tan 80^\circ \approx 8.2424$, and also $\tan 40^\circ \tan 60^\circ \tan 80^\circ \approx 8.2424$. **Coincidence?**`,
    reveal: t`No. It happens in every triangle without a right angle. Since $40^\circ + 60^\circ = 180^\circ - 80^\circ$, $\tan(40^\circ + 60^\circ) = -\tan 80^\circ$. Write the left side with the tan formula and clear the fraction: the three tans add up to their product.`,
  },
  explanation: {
    intuition: [
      t`In any triangle $ABC$, the three angles add up to $\pi$, that is $180^\circ$: $A + B + C = \pi$.`,
      t`So $A + B = \pi - C$, the **supplement** of $C$: the angle that makes $C$ up to $\pi$.`,
      t`Their sum is $\pi$, so $A + B$ and $C$ are **allied angles**: angles whose sum or difference is a multiple of a right angle.`,
      t`The allied-angle rules turn each ratio of $A + B$ into one of $C$: sin keeps its sign, cos and tan change it.`,
      t`Halve it: $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, the **complement** of $\frac{C}{2}$, the angle that makes it up to $\frac{\pi}{2}$.`,
      t`For a complement, each ratio switches to its **co-ratio**: sin to cos, cos to sin, tan to cot.`,
    ],
    figure: {
      alt: "A triangle ABC with its three angles A, B and C marked: A + B + C = π. The side BC is drawn on past C; the angle outside the triangle at C is π − C, and it equals A + B. The lines halving the inside angle C and the outside angle at C meet at a right angle, since half of π − C plus half of C is π/2: (A + B)/2 = π/2 − C/2.",
      axes: "none",
      view: { x: [-0.6, 7.4], y: [-0.8, 3.5] },
      elements: [
        ...sidesOf([VB, VC, VA]),
        { kind: "label", at: VA, label: "A", labelAt: "n", tone: "muted" },
        { kind: "label", at: VB, label: "B", labelAt: "sw", tone: "muted" },
        { kind: "label", at: VC, label: "C", labelAt: "s", tone: "muted" },
        { kind: "angle", at: VA, from: 243.43, to: 309.81, step: 1 },
        { kind: "angle", at: VB, from: 0, to: 63.43, step: 1 },
        { kind: "angle", at: VC, from: 129.81, to: 180, step: 1 },
        { kind: "label", at: [0.8, 1.2], label: "A + B + C = π", labelAt: "e", step: 1 },
        { kind: "segment", from: VC, to: [6.6, 0], dashed: true, tone: "muted", step: 2 },
        { kind: "arc", centre: VC, r: 0.75, from: 0, to: 129.81, tone: "good", step: 2 },
        { kind: "label", at: [5, 0.4], label: "π − C = A + B", labelAt: "e", tone: "good", step: 2 },
        { kind: "segment", from: VC, to: [4.763, 1.63], dashed: true, tone: "good", step: 5 },
        { kind: "segment", from: VC, to: [2.37, 0.763], dashed: true, tone: "good", step: 5 },
        { kind: "segment", from: [4.106, 0.226], to: [3.88, 0.332], tone: "good", step: 5 },
        { kind: "segment", from: [3.88, 0.332], to: [3.774, 0.106], tone: "good", step: 5 },
        { kind: "label", at: [3, 3.1], label: "(A + B)/2 = π/2 − C/2", labelAt: "e", tone: "good", step: 5 },
      ],
    },
    formal: [
      {
        title: "Full angles",
        points: [
          t`In a triangle $A + B = \pi - C$, so each ratio of $A + B$ is a ratio of $\pi - C$.`,
          t`$\sin(A + B) = \sin C$.`,
          t`$\cos(A + B) = -\cos C$.`,
          t`$\tan(A + B) = -\tan C$.`,
          t`They read backwards too: $\sin C = \sin(A + B)$ and $-\cos C = \cos(A + B)$.`,
        ],
      },
      {
        title: "Half angles",
        points: [
          t`Halving, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, so each ratio becomes the co-ratio of $\frac{C}{2}$.`,
          t`$\sin\frac{A + B}{2} = \cos\frac{C}{2}$.`,
          t`$\cos\frac{A + B}{2} = \sin\frac{C}{2}$.`,
          t`$\tan\frac{A + B}{2} = \cot\frac{C}{2}$.`,
          t`No sign changes here, unlike the full angles: each ratio only switches to its co-ratio.`,
        ],
      },
      {
        title: "Tan sum equals tan product",
        points: [
          t`Write $\tan(A + B) = -\tan C$ with the formula for the tan of a sum.`,
          t`$\frac{\tan A + \tan B}{1 - \tan A\tan B} = -\tan C$.`,
          t`Clear the fraction: multiply both sides by $1 - \tan A\tan B$.`,
          t`Collect the terms: $\tan A + \tan B + \tan C$ $= \tan A\tan B\tan C$.`,
          t`It holds when no angle is a right angle, so that every tan is defined.`,
        ],
      },
      {
        title: "Cot and half-angle forms",
        points: [
          t`Divide the tan identity by the product $\tan A\tan B\tan C$.`,
          t`This gives $\cot A\cot B + \cot B\cot C$ $+ \cot C\cot A = 1$.`,
          t`For half angles, start from $\tan\left(\frac{A}{2} + \frac{B}{2}\right) = \cot\frac{C}{2}$ instead.`,
          t`The same steps give $\tan\frac{A}{2}\tan\frac{B}{2} + \tan\frac{B}{2}\tan\frac{C}{2}$ $+ \tan\frac{C}{2}\tan\frac{A}{2} = 1$.`,
        ],
      },
      {
        title: "Sums of sines and cosines",
        points: [
          t`The **sum into product** formulae turn a sum of two sines, or of two cosines, into a product.`,
          t`Use one on two of the terms: a ratio of $A + B$, or of $\frac{A + B}{2}$, comes out.`,
          t`Change it into a ratio of $C$, or of $\frac{C}{2}$.`,
          t`Write the third term, such as $\sin C$, $\cos C$ or $\cos 2C$, in a form that has that ratio too.`,
          t`Take out the **common factor**, the ratio that both parts now share.`,
          t`Change the other ratio of $C$ back into one of $A + B$, and use sum into product again.`,
        ],
      },
    ],
    worked: {
      prompt: t`In $\triangle ABC$, simplify $\cos 2A + \cos 2B + \cos 2C$.`,
      steps: [
        t`$\cos 2A + \cos 2B$ $= 2\cos(A + B)\cos(A - B)$ $= -2\cos C\cos(A - B)$, since $\cos(A + B) = -\cos C$.`,
        t`Write $\cos 2C = 2\cos^2 C - 1$ to share the factor $\cos C$: the sum is $-2\cos C\left[\cos(A - B) - \cos C\right]$ $- 1$.`,
        t`Change $-\cos C$ back into $\cos(A + B)$: the bracket is $\cos(A - B) + \cos(A + B)$ $= 2\cos A\cos B$.`,
      ],
      answer: t`$\cos 2A + \cos 2B + \cos 2C$ $= -1 - 4\cos A\cos B\cos C$.`,
    },
    visualSpec: t`Drag the vertices of a triangle: $A$, $B$, $C$ update, $A + B$ is drawn as the supplement of $C$ and $\frac{A + B}{2}$ as the complement of $\frac{C}{2}$, and live readouts show $\sin(A + B) = \sin C$, $\cos(A + B) = -\cos C$ and $\cos\frac{A + B}{2} = \sin\frac{C}{2}$.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Ignoring the allied-angle change: taking $\cos(A + B) = \cos C$, $\tan(A + B) = \tan C$, and a ratio of $\frac{A + B}{2}$ as the same ratio of $\frac{C}{2}$`,
      remediation: t`$A + B = \pi - C$, so $\cos(A + B) = -\cos C$ and $\tan(A + B) = -\tan C$; only sin keeps its sign. Half angles are complements, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$, so each ratio switches: $\cos\frac{A + B}{2} = \sin\frac{C}{2}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C10-M2",
      mistake: t`Halving $C$ but not $\pi$: taking $\frac{A + B}{2} = \pi - \frac{C}{2}$, so $\sin\frac{A + B}{2} = \sin\frac{C}{2}$ and $\cos\frac{A + B}{2} = -\cos\frac{C}{2}$`,
      remediation: t`Halve both parts: $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$. So $\sin\frac{A + B}{2} = \cos\frac{C}{2}$, $\cos\frac{A + B}{2} = \sin\frac{C}{2}$ and $\tan\frac{A + B}{2} = \cot\frac{C}{2}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C10-M3",
      mistake: t`Switching to the co-ratio for full angles: $\sin(A + B) = \cos C$, $\cos(A + B) = \sin C$, $\tan(A + B) = \cot C$`,
      remediation: t`$A + B = \pi - C$ is a supplement, not a complement: the ratio stays the same and only the sign may change, $\sin(A + B) = \sin C$, $\cos(A + B) = -\cos C$. The switch to co-ratios is for the half angles, $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C10-M4",
      mistake: t`Taking $\tan(A + B) = \tan A + \tan B$`,
      remediation: t`$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$, so $\tan A + \tan B = \tan(A + B)(1 - \tan A\tan B)$. In a triangle, $\tan(A + B) = -\tan C$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M5",
      mistake: t`Dropping the $\pi$: writing $A + B = -C$, so $\sin(A + B) = -\sin C$`,
      remediation: t`$A + B + C = \pi$ gives $A + B = \pi - C$, not $-C$. Then $\sin(A + B) = \sin(\pi - C) = \sin C$: positive, as the sine of an angle of a triangle must be.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: t`Losing the minus sign in $\cos P - \cos Q = -2\sin\frac{P + Q}{2}\sin\frac{P - Q}{2}$`,
      remediation: t`Keep the minus: $\cos P - \cos Q = -2\sin\frac{P + Q}{2}\sin\frac{P - Q}{2}$. Check with $P = 0$, $Q = \pi$: the left side is $1 - (-1) = 2$, and so is the right.`,
      fallback: { kind: "concept", id: "C08" },
    },
  ],
  engineNotes: [
    t`C10-M2 applies only to half-angle items and C10-M3 only to full-angle ones; C10-M4 only to tan items; C10-M6 only where the derivation ends in a $\cos P - \cos Q$ step (as in $\cos A + \cos B + \cos C$).`,
    t`C10-M5 gives the key on a full-angle tan item ($\tan(-C) = -\tan C$), the same answer as C10-M1 wherever only $\cos(A + B)$ is changed (e.g. $\cos A + \cos B + \cos C$, $\cos 2A + \cos 2B + \cos 2C$), and the same as C10-M2 on a half-angle tan item: diagnose it on a sin item.`,
    t`Option values are written in $x = A$, $y = B$, with $C = \pi - x - y$ put in. A particular-triangle item must avoid triangles where two options agree (e.g. $C = 90^\circ$ makes $4\cos A\cos B\sin C$ and $4\sin A\sin B\sin C$ equal).`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.5 SolvedEx.1(i)" },
      stem: t`In $\triangle ABC$, $\sin 2A + \sin 2B - \sin 2C$ is equal to:`,
      verify: { kind: "value", inputs: { A: "x", B: "y" }, params: { form: "sin2" } },
      options: [
        { key: "A", text: t`$4\sin A\sin B\sin C$`, correct: false, misconceptionId: "C10-M1", value: "4*sin(x)*sin(y)*sin(x + y)" },
        { key: "B", text: t`$4\sin A\sin B\cos C$`, correct: false, misconceptionId: "C10-M3", value: "-4*sin(x)*sin(y)*cos(x + y)" },
        { key: "C", text: t`$-4\cos A\cos B\sin C$`, correct: false, misconceptionId: "C10-M5", value: "-4*sin(x + y)*cos(x)*cos(y)" },
        { key: "D", text: t`$4\cos A\cos B\sin C$`, correct: true, value: "4*sin(x + y)*cos(x)*cos(y)" },
      ],
      solution: {
        steps: [
          t`$\sin 2A + \sin 2B = 2\sin(A + B)\cos(A - B) = 2\sin C\cos(A - B)$, since $\sin(A + B) = \sin(\pi - C) = \sin C$.`,
          t`$\sin 2C = 2\sin C\cos C$, so the expression is $2\sin C\left[\cos(A - B) - \cos C\right]$.`,
          t`$-\cos C = \cos(A + B)$, so the bracket is $\cos(A - B) + \cos(A + B) = 2\cos A\cos B$.`,
          t`So $\sin 2A + \sin 2B - \sin 2C = 4\cos A\cos B\sin C$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.5 Q2" },
      stem: t`In $\triangle ABC$, $\sin A + \sin B + \sin C$ is equal to:`,
      verify: { kind: "value", inputs: { A: "x", B: "y" }, params: { form: "sinsum" } },
      options: [
        { key: "A", text: t`$4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2}$`, correct: true, value: "4*sin(x/2 + y/2)*cos(x/2)*cos(y/2)" },
        { key: "B", text: t`$4\cos\frac{A}{2}\cos\frac{B}{2}\sin\frac{C}{2}$`, correct: false, misconceptionId: "C10-M1", value: "4*cos(x/2)*cos(y/2)*cos(x/2 + y/2)" },
        { key: "C", text: t`$4\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$`, correct: false, misconceptionId: "C10-M2", value: "4*sin(x/2)*sin(y/2)*cos(x/2 + y/2)" },
        { key: "D", text: t`$-4\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$`, correct: false, misconceptionId: "C10-M5", value: "-4*sin(x/2)*sin(y/2)*cos(x/2 + y/2)" },
      ],
      solution: {
        steps: [
          t`$\sin A + \sin B = 2\sin\frac{A + B}{2}\cos\frac{A - B}{2} = 2\cos\frac{C}{2}\cos\frac{A - B}{2}$, since $\frac{A + B}{2} = \frac{\pi}{2} - \frac{C}{2}$.`,
          t`$\sin C = 2\sin\frac{C}{2}\cos\frac{C}{2}$, so the sum is $2\cos\frac{C}{2}\left[\cos\frac{A - B}{2} + \sin\frac{C}{2}\right]$.`,
          t`$\sin\frac{C}{2} = \cos\frac{A + B}{2}$, so the bracket is $\cos\frac{A - B}{2} + \cos\frac{A + B}{2} = 2\cos\frac{A}{2}\cos\frac{B}{2}$.`,
          t`So $\sin A + \sin B + \sin C = 4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.5 SolvedEx.1(ii)" },
      stem: t`In $\triangle ABC$, $\cos A + \cos B + \cos C$ is equal to:`,
      verify: { kind: "value", inputs: { A: "x", B: "y" }, params: { form: "cossum" } },
      options: [
        { key: "A", text: t`$1 - 4\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$`, correct: false, misconceptionId: "C10-M6", value: "-4*sin(x/2)*sin(y/2)*cos(x/2 + y/2) + 1" },
        { key: "B", text: t`$1 + 4\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$`, correct: true, value: "4*sin(x/2)*sin(y/2)*cos(x/2 + y/2) + 1" },
        { key: "C", text: t`$4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2} - 1$`, correct: false, misconceptionId: "C10-M1", value: "4*sin(x/2 + y/2)*cos(x/2)*cos(y/2) - 1" },
        { key: "D", text: t`$-1 - 4\cos\frac{A}{2}\cos\frac{B}{2}\cos\frac{C}{2}$`, correct: false, misconceptionId: "C10-M2", value: "-4*sin(x/2 + y/2)*cos(x/2)*cos(y/2) - 1" },
      ],
      solution: {
        steps: [
          t`$\cos A + \cos B = 2\cos\frac{A + B}{2}\cos\frac{A - B}{2} = 2\sin\frac{C}{2}\cos\frac{A - B}{2}$, since $\cos\frac{A + B}{2} = \sin\frac{C}{2}$.`,
          t`$\cos C = 1 - 2\sin^2\frac{C}{2}$, so the sum is $1 + 2\sin\frac{C}{2}\left[\cos\frac{A - B}{2} - \sin\frac{C}{2}\right]$.`,
          t`$\sin\frac{C}{2} = \cos\frac{A + B}{2}$, and $\cos\frac{A - B}{2} - \cos\frac{A + B}{2} = -2\sin\frac{A}{2}\sin\left(-\frac{B}{2}\right) = 2\sin\frac{A}{2}\sin\frac{B}{2}$.`,
          t`So $\cos A + \cos B + \cos C = 1 + 4\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.5 SolvedEx.1(iv)" },
      stem: t`In $\triangle ABC$, with no right angle, $\tan A + \tan B$ is equal to:`,
      verify: { kind: "value", inputs: { A: "x", B: "y" }, params: { form: "tanfull" } },
      options: [
        { key: "A", text: t`$\cot C - \tan A\tan B\cot C$`, correct: false, misconceptionId: "C10-M3", value: "tan(x)*tan(y)*cot(x + y) - cot(x + y)" },
        { key: "B", text: t`$-\tan C$`, correct: false, misconceptionId: "C10-M4", value: "tan(x + y)" },
        { key: "C", text: t`$\tan A\tan B\tan C - \tan C$`, correct: true, value: "-tan(x)*tan(y)*tan(x + y) + tan(x + y)" },
        { key: "D", text: t`$\tan C - \tan A\tan B\tan C$`, correct: false, misconceptionId: "C10-M1", value: "tan(x)*tan(y)*tan(x + y) - tan(x + y)" },
      ],
      solution: {
        steps: [
          t`$A + B = \pi - C$, so $\tan(A + B) = -\tan C$.`,
          t`$\dfrac{\tan A + \tan B}{1 - \tan A\tan B} = -\tan C$, so $\tan A + \tan B = -\tan C\,(1 - \tan A\tan B)$.`,
          t`So $\tan A + \tan B = \tan A\tan B\tan C - \tan C$: the same as $\tan A + \tan B + \tan C = \tan A\tan B\tan C$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.5 SolvedEx.1(v)" },
      stem: t`In $\triangle ABC$, $\tan\frac{A}{2} + \tan\frac{B}{2}$ is equal to:`,
      verify: { kind: "value", inputs: { A: "x", B: "y" }, params: { form: "tanhalf" } },
      options: [
        { key: "A", text: t`$\cot\frac{C}{2} - \tan\frac{A}{2}\tan\frac{B}{2}\cot\frac{C}{2}$`, correct: true, value: "tan(x/2) + tan(y/2)" },
        { key: "B", text: t`$\tan\frac{C}{2} - \tan\frac{A}{2}\tan\frac{B}{2}\tan\frac{C}{2}$`, correct: false, misconceptionId: "C10-M1", value: "-tan(x/2)*tan(y/2)*cot(x/2 + y/2) + cot(x/2 + y/2)" },
        { key: "C", text: t`$\tan\frac{A}{2}\tan\frac{B}{2}\tan\frac{C}{2} - \tan\frac{C}{2}$`, correct: false, misconceptionId: "C10-M2", value: "tan(x/2)*tan(y/2)*cot(x/2 + y/2) - cot(x/2 + y/2)" },
        { key: "D", text: t`$\cot\frac{C}{2}$`, correct: false, misconceptionId: "C10-M4", value: "tan(x/2 + y/2)" },
      ],
      solution: {
        steps: [
          t`$\frac{A}{2} + \frac{B}{2} = \frac{\pi}{2} - \frac{C}{2}$, so $\tan\left(\frac{A}{2} + \frac{B}{2}\right) = \cot\frac{C}{2}$.`,
          t`$\dfrac{\tan\frac{A}{2} + \tan\frac{B}{2}}{1 - \tan\frac{A}{2}\tan\frac{B}{2}} = \cot\frac{C}{2}$, so $\tan\frac{A}{2} + \tan\frac{B}{2} = \cot\frac{C}{2}\left(1 - \tan\frac{A}{2}\tan\frac{B}{2}\right)$.`,
          t`So $\tan\frac{A}{2} + \tan\frac{B}{2} = \cot\frac{C}{2} - \tan\frac{A}{2}\tan\frac{B}{2}\cot\frac{C}{2}$. Multiplying by $\tan\frac{C}{2}$ gives the identity $\sum \tan\frac{A}{2}\tan\frac{B}{2} = 1$.`,
        ],
      },
    },
  ],
};
