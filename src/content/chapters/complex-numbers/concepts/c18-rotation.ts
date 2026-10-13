import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c18: Concept = {
  id: "C18",
  status: "draft",
  hook: {
    prompt: t`Multiply $3 + 4i$ by $i$ to get $-4 + 3i$. **Plot both points. What did multiplying by $i$ do?**`,
    reveal: t`It turned the point a quarter-turn anticlockwise about the origin. Multiplying by $\cos\alpha + i\sin\alpha$ rotates by $\alpha$.`,
  },
  explanation: {
    intuition: t`Multiplying by $e^{i\alpha}$ keeps the length and adds $\alpha$ to the angle: a rotation about the origin. To rotate about another point $c$, shift so that $c$ becomes the origin, rotate, then shift back.`,
    formal: t`Rotating $z$ anticlockwise by $\alpha$:
- about the origin: $z' = z\,e^{i\alpha}$
- about the point $c$: $z' - c = (z - c)\,e^{i\alpha}$, so $z' = c + (z - c)\,e^{i\alpha}$

A positive $\alpha$ turns anticlockwise. $e^{i\pi/2} = i$ is a quarter-turn and $e^{i\pi} = -1$ a half-turn.

**Triangles:** if $A$, $B$, $C$ go anticlockwise round an equilateral triangle, then $C - A = (B - A)\,e^{i\pi/3}$.`,
    worked: {
      prompt: t`Rotate $5 + i$ anticlockwise by $\dfrac\pi2$ about $2 + i$.`,
      steps: [
        t`Shift: $z - c = (5 + i) - (2 + i) = 3$.`,
        t`Rotate: $3\cdot i = 3i$.`,
        t`Shift back: $3i + (2 + i) = 2 + 4i$.`,
      ],
      answer: t`$2 + 4i$`,
    },
    visualSpec: t`A point $z$ and a centre $c$ you can drag, with an angle slider. The image $z'$ sweeps along the circle about $c$ through $z$, and a faint ghost shows where rotating about the origin would put it instead.`,
  },
  misconceptions: [
    {
      id: "C18-M1",
      mistake: "Rotating about the origin instead of the given centre",
      remediation: t`Shift first: rotate $z - c$, not $z$, then add $c$ back.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C18-M2",
      mistake: "Rotating the wrong way",
      remediation: t`A positive angle turns anticlockwise: use $e^{i\alpha}$, not $e^{-i\alpha}$.`,
      fallback: { kind: "concept", id: "C14" },
    },
    {
      id: "C18-M3",
      mistake: "Forgetting to add the centre back",
      remediation: t`After rotating $z - c$, add $c$: $z' = c + (z - c)\,e^{i\alpha}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  engineNotes: [
    "C18-M2 can't be detected on a half-turn (alpha = pi): both directions land on the same point (C18-Q3).",
  ],
  items: [
    {
      id: "C18-Q1",
      source: { kind: "authored" },
      stem: t`Rotate $2 + 3i$ anticlockwise by $\dfrac{\pi}{2}$ about $1 + i$. The image is:`,
      verify: { kind: "value", inputs: { z: "2+3*I", c: "1+I", alpha: "pi/2" } },
      options: [
        { key: "A", text: t`$-2 + i$`, correct: false, misconceptionId: "C18-M3", value: "-2 + I" },
        { key: "B", text: t`$-1 + 2 i$`, correct: true, value: "-1 + 2*I" },
        { key: "C", text: t`$-3 + 2 i$`, correct: false, misconceptionId: "C18-M1", value: "-3 + 2*I" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C18-M2", value: "3" },
      ],
    },
    {
      id: "C18-Q2",
      source: { kind: "authored" },
      stem: t`Rotate $4$ anticlockwise by $\dfrac{\pi}{3}$ about $2$. The image is:`,
      verify: { kind: "value", inputs: { z: "4", c: "2", alpha: "pi/3" } },
      options: [
        { key: "A", text: t`$2 + 2 \sqrt{3} i$`, correct: false, misconceptionId: "C18-M1", value: "2 + 2*sqrt(3)*I" },
        { key: "B", text: t`$3 - \sqrt{3} i$`, correct: false, misconceptionId: "C18-M2", value: "3 - sqrt(3)*I" },
        { key: "C", text: t`$1 + \sqrt{3} i$`, correct: false, misconceptionId: "C18-M3", value: "1 + sqrt(3)*I" },
        { key: "D", text: t`$3 + \sqrt{3} i$`, correct: true, value: "3 + sqrt(3)*I" },
      ],
    },
    {
      id: "C18-Q3",
      source: { kind: "authored" },
      stem: t`Rotate $1 + i$ by $\pi$ about $3$. The image is:`,
      verify: { kind: "value", inputs: { z: "1+I", c: "3", alpha: "pi" } },
      options: [
        { key: "A", text: t`$2 - i$`, correct: false, misconceptionId: "C18-M3", value: "2 - I" },
        { key: "B", text: t`$5 - i$`, correct: true, value: "5 - I" },
        { key: "C", text: t`$-1 - i$`, correct: false, misconceptionId: "C18-M1", value: "-1 - I" },
      ],
    },
    {
      id: "C18-Q4",
      source: { kind: "authored" },
      stem: t`Rotate $3$ anticlockwise by $\dfrac{\pi}{2}$ about $i$. The image is:`,
      verify: { kind: "value", inputs: { z: "3", c: "I", alpha: "pi/2" } },
      options: [
        { key: "A", text: t`$1 + 4 i$`, correct: true, value: "1 + 4*I" },
        { key: "B", text: t`$3 i$`, correct: false, misconceptionId: "C18-M1", value: "3*I" },
        { key: "C", text: t`$-1 - 2 i$`, correct: false, misconceptionId: "C18-M2", value: "-1 - 2*I" },
        { key: "D", text: t`$1 + 3 i$`, correct: false, misconceptionId: "C18-M3", value: "1 + 3*I" },
      ],
    },
    {
      id: "C18-Q5",
      source: { kind: "authored" },
      stem: t`An equilateral triangle has vertices $1$, $3$ and $z$, with $z$ above the real axis. Then $z =$`,
      verify: { kind: "value", inputs: { z: "3", c: "1", alpha: "pi/3" } },
      options: [
        { key: "A", text: t`$1 + \sqrt{3} i$`, correct: false, misconceptionId: "C18-M3", value: "1 + sqrt(3)*I" },
        { key: "B", text: t`$2 + \sqrt{3} i$`, correct: true, value: "2 + sqrt(3)*I" },
        { key: "C", text: t`$\frac{3}{2} + \frac{3 \sqrt{3} i}{2}$`, correct: false, misconceptionId: "C18-M1", value: "3/2 + 3*sqrt(3)*I/2" },
        { key: "D", text: t`$2 - \sqrt{3} i$`, correct: false, misconceptionId: "C18-M2", value: "2 - sqrt(3)*I" },
      ],
    },
  ],
};
