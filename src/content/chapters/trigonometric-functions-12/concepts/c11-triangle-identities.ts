import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "draft",
  hook: {
    prompt: t`A triangle has sides $4$ cm, $5$ cm and $6$ cm. **Without finding any angle**, what is $\frac{\sin A + \sin B}{\sin C}$?`,
    reveal: t`$\frac{3}{2}$. By the sine rule each sine is its side over $2R$. The $2R$ cancels, leaving $\frac{4 + 5}{6} = \frac{3}{2}$.`,
  },
  explanation: {
    intuition: [
      t`An identity in $\triangle ABC$ mixes the sides $a$, $b$, $c$ with ratios of the angles $A$, $B$, $C$.`,
      t`Mixed letters are hard to compare, so first rewrite everything in one kind.`,
      t`The sine rule turns each side into a sine: $a = 2R\sin A$.`,
      t`The cosine rule turns each cosine into sides: $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$.`,
      t`The angle sum $A + B + C = \pi$ links the three angles: $\sin(A + B) = \sin C$.`,
      t`After that it is plain algebra: expand, cancel, and match the other side.`,
    ],
    formal: [
      {
        title: "Sides into sines",
        points: [
          t`The **circumradius** $R$ is the radius of the circle through the vertices $A$, $B$, $C$.`,
          t`Sine rule: $\frac{a}{\sin A} = \frac{b}{\sin B}$ $= \frac{c}{\sin C} = 2R$.`,
          t`So $a = 2R\sin A$, $b = 2R\sin B$ and $c = 2R\sin C$.`,
          t`Read backwards: $\sin A = \frac{a}{2R}$, not $a$ itself.`,
          t`When every term has the same number of side factors, the $2R$ cancels.`,
          t`Example: $\frac{a - b}{c}$ $= \frac{\sin A - \sin B}{\sin C}$.`,
        ],
      },
      {
        title: "Cosines into sides",
        points: [
          t`Cosine rule: $a^2 = b^2 + c^2 - 2bc\cos A$.`,
          t`Solve it for the cosine: $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$.`,
          t`The angle's own side, $a$ for $A$, is the one subtracted.`,
          t`Keep the $2$: it comes from the $2bc\cos A$ in the rule.`,
          t`A product like $2ca\cos B$ becomes sides at once: $c^2 + a^2 - b^2$.`,
        ],
      },
      {
        title: "Using the angle sum",
        points: [
          t`In any triangle $A + B + C = \pi$, so $A + B = \pi - C$.`,
          t`$\sin(A + B) = \sin(\pi - C) = \sin C$.`,
          t`$\cos(A + B) = \cos(\pi - C) = -\cos C$.`,
          t`It is $\pi - C$, not $-C$: the sine keeps its sign, only the cosine flips.`,
          t`Round the triangle too: $\sin(B + C) = \sin A$ and $\sin(C + A) = \sin B$.`,
        ],
      },
      {
        title: "Differences of angles",
        points: [
          t`Expand a difference: $\sin(A - B)$ $= \sin A\cos B - \cos A\sin B$.`,
          t`It is never $\sin A - \sin B$.`,
          t`Sides into sines: $\sin(A - B)$ $= \frac{a\cos B - b\cos A}{2R}$.`,
          t`The projection rule is a sum, $c = a\cos B + b\cos A$; a difference is not a side.`,
          t`Turn its cosines into sides instead: $c\cos A - a\cos C$ $= \frac{c^2 - a^2}{b}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`In $\triangle ABC$, $a\cos A = b\cos B$. What kind of triangle is it?`,
      steps: [
        t`Sides into sines: $2R\sin A\cos A = 2R\sin B\cos B$.`,
        t`Cancel $R$ and use $2\sin A\cos A = \sin 2A$: so $\sin 2A = \sin 2B$.`,
        t`Since $2A + 2B < 2\pi$: either $2A = 2B$, or $2A = \pi - 2B$.`,
        t`$2A = 2B$ gives $A = B$, so $a = b$: the triangle is isosceles.`,
        t`$2A = \pi - 2B$ gives $A + B = \frac{\pi}{2}$; the angle sum then gives $C = \frac{\pi}{2}$.`,
      ],
      answer: t`Isosceles ($a = b$) or right angled at $C$. Keep both: dropping $2A = \pi - 2B$ loses the right angle.`,
    },
    visualSpec: t`Drag the vertices of a triangle; both sides of an identity are shown live as numbers, and they stay equal however the triangle changes.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Takes A + B = -C (drops the pi), so writes sin(A + B) = -sin C",
      remediation: t`$A + B = \pi - C$, and $\sin(\pi - C) = \sin C$: the sine keeps its sign. Only the cosine flips: $\cos(A + B) = -\cos C$.`,
      fallback: { kind: "ext", topic: "allied angles" },
    },
    {
      id: "C11-M2",
      mistake: "Drops the 2 in the cosine rule: cos A = (b^2 + c^2 - a^2)/(bc)",
      remediation: t`$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$. The $2$ comes from the $2bc\cos A$ in $a^2 = b^2 + c^2 - 2bc\cos A$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M3",
      mistake: "Solves the cosine rule with the signs reversed: cos A = (a^2 - b^2 - c^2)/(2bc)",
      remediation: t`From $a^2 = b^2 + c^2 - 2bc\cos A$: $2bc\cos A = b^2 + c^2 - a^2$. The angle's own side is the one subtracted.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M4",
      mistake: "Replaces a sine by its side outright: sin A = a, dropping the 2R of the sine rule",
      remediation: t`The sine rule gives $\sin A = \frac{a}{2R}$. The $2R$ cancels only when every term has the same number of side factors.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C11-M5",
      mistake: "Splits a sine over a difference: sin(B - C) = sin B - sin C",
      remediation: t`Expand with the compound angle formula: $\sin(B - C)$ $= \sin B\cos C - \cos B\sin C$.`,
      fallback: { kind: "ext", topic: "compound angle formulae" },
    },
    {
      id: "C11-M6",
      mistake: "Reads a difference x cos Y - y cos X as the projection rule and replaces it by the third side",
      remediation: t`The projection rule is a sum: $c = a\cos B + b\cos A$. A difference such as $a\cos B - b\cos A$ is not a side: turn its cosines into sides.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  engineNotes: [
    t`Option values are written in $a$, $b$, $c$ and $R$, using $\sin A = \frac{a}{2R}$ and the cosine rule for $\cos A$.`,
    "C11-M1 and C11-M3 both negate the key on Q2 and Q5, so each of those items lists only one of them.",
    "C11-M4 gives the key whenever every term has the same number of side factors (as on Q2): draw it only from Q3, Q4 or Q5.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc I Q.9" },
      stem: t`In $\triangle ABC$, $ac\cos B - bc\cos A$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "accosB" } },
      options: [
        { key: "A", text: t`$a^2 - b^2$`, correct: true, value: "a**2 - b**2" },
        { key: "B", text: t`$2(a^2 - b^2)$`, correct: false, misconceptionId: "C11-M2", value: "2*a**2 - 2*b**2" },
        { key: "C", text: t`$b^2 - a^2$`, correct: false, misconceptionId: "C11-M3", value: "-a**2 + b**2" },
        { key: "D", text: t`$c^2$`, correct: false, misconceptionId: "C11-M6", value: "c**2" },
      ],
      solution: {
        steps: [
          t`Cosines into sides: $2ca\cos B = c^2 + a^2 - b^2$ and $2bc\cos A = b^2 + c^2 - a^2$.`,
          t`Halve each and subtract: $\frac{c^2 + a^2 - b^2}{2}$ $- \frac{b^2 + c^2 - a^2}{2}$.`,
          t`$= \frac{2a^2 - 2b^2}{2} = a^2 - b^2$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.6" },
      stem: t`In $\triangle ABC$, $\dfrac{\sin(A - B)}{\sin(A + B)}$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "sinAmB_over_sinApB" } },
      options: [
        { key: "A", text: t`$\dfrac{2(a^2 - b^2)}{c^2}$`, correct: false, misconceptionId: "C11-M2", value: "2*(a**2 - b**2)/c**2" },
        { key: "B", text: t`$\dfrac{a - b}{c}$`, correct: false, misconceptionId: "C11-M5", value: "(a - b)/c" },
        { key: "C", text: t`$\dfrac{a^2 - b^2}{c^2}$`, correct: true, value: "(a**2 - b**2)/c**2" },
        { key: "D", text: t`$\dfrac{b^2 - a^2}{c^2}$`, correct: false, misconceptionId: "C11-M1", value: "(-a**2 + b**2)/c**2" },
      ],
      solution: {
        steps: [
          t`Angle sum: $A + B = \pi - C$, so $\sin(A + B) = \sin C$.`,
          t`Expand and turn sines into sides: $\frac{\sin A\cos B - \cos A\sin B}{\sin C}$ $= \frac{a\cos B - b\cos A}{c}$.`,
          t`Cosine rule: $a\cos B = \frac{a^2 + c^2 - b^2}{2c}$ and $b\cos A = \frac{b^2 + c^2 - a^2}{2c}$.`,
          t`So $a\cos B - b\cos A = \frac{a^2 - b^2}{c}$, and the ratio is $\frac{a^2 - b^2}{c^2}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.11 (iii)" },
      stem: t`In $\triangle ABC$, $a^2\sin(B - C)$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "a2sinBmC" } },
      options: [
        { key: "A", text: t`$a(b^2 - c^2)$`, correct: false, misconceptionId: "C11-M4", value: "a*(b**2 - c**2)" },
        { key: "B", text: t`$a(b - c)\sin A$`, correct: false, misconceptionId: "C11-M5", value: "a**2*(b - c)/(2*R)" },
        { key: "C", text: t`$a^2\sin A$`, correct: false, misconceptionId: "C11-M6", value: "a**3/(2*R)" },
        { key: "D", text: t`$(b^2 - c^2)\sin A$`, correct: true, value: "a*(b**2 - c**2)/(2*R)" },
      ],
      solution: {
        steps: [
          t`Expand: $\sin(B - C)$ $= \sin B\cos C - \cos B\sin C$ $= \frac{b\cos C - c\cos B}{2R}$.`,
          t`Cosine rule: $b\cos C = \frac{a^2 + b^2 - c^2}{2a}$ and $c\cos B = \frac{a^2 + c^2 - b^2}{2a}$.`,
          t`Subtract: $b\cos C - c\cos B = \frac{b^2 - c^2}{a}$.`,
          t`So $a^2\sin(B - C)$ $= \frac{a(b^2 - c^2)}{2R}$ $= (b^2 - c^2)\sin A$, as $\frac{a}{2R} = \sin A$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.17" },
      stem: t`In $\triangle ABC$, no angle is a right angle and $R$ is the circumradius. Then $(c^2 - a^2 + b^2)\tan A$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "tanA" } },
      options: [
        { key: "A", text: t`$-\dfrac{abc}{R}$`, correct: false, misconceptionId: "C11-M3", value: "-a*b*c/R" },
        { key: "B", text: t`$2abc$`, correct: false, misconceptionId: "C11-M4", value: "2*a*b*c" },
        { key: "C", text: t`$\dfrac{abc}{R}$`, correct: true, value: "a*b*c/R" },
        { key: "D", text: t`$\dfrac{abc}{2R}$`, correct: false, misconceptionId: "C11-M2", value: "a*b*c/(2*R)" },
      ],
      solution: {
        steps: [
          t`The cosine rule gives $c^2 - a^2 + b^2 = 2bc\cos A$.`,
          t`So $(c^2 - a^2 + b^2)\tan A$ $= 2bc\cos A \cdot \frac{\sin A}{\cos A}$ $= 2bc\sin A$.`,
          t`Side into sine: $\sin A = \frac{a}{2R}$, so this is $2bc \cdot \frac{a}{2R} = \frac{abc}{R}$.`,
          t`The same steps give $\frac{abc}{R}$ for $(a^2 - b^2 + c^2)\tan B$, which proves the book's chain.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/trig-functions-12/Misc II Q.11 (i)" },
      stem: t`In $\triangle ABC$, $c\sin(A - B)$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "csinAmB" } },
      options: [
        { key: "A", text: t`$b\sin B - a\sin A$`, correct: false, misconceptionId: "C11-M1", value: "(-a**2 + b**2)/(2*R)" },
        { key: "B", text: t`$a^2 - b^2$`, correct: false, misconceptionId: "C11-M4", value: "a**2 - b**2" },
        { key: "C", text: t`$c\sin C$`, correct: false, misconceptionId: "C11-M6", value: "c**2/(2*R)" },
        { key: "D", text: t`$a\sin A - b\sin B$`, correct: true, value: "(a**2 - b**2)/(2*R)" },
      ],
      solution: {
        steps: [
          t`Side into sine, then the angle sum: $c = 2R\sin C$ $= 2R\sin(A + B)$.`,
          t`Compound angles: $\sin(A + B)\sin(A - B)$ $= \sin^2 A - \sin^2 B$.`,
          t`So $c\sin(A - B)$ $= 2R\sin^2 A - 2R\sin^2 B$ $= a\sin A - b\sin B$.`,
        ],
      },
    },
  ],
};
