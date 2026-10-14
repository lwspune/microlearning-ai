import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c18: Concept = {
  id: "C18",
  status: "approved",
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
      figure: {
        alt: "Rotating 5 + i about 2 + i: it is 3 to the right of the centre; a quarter-turn anticlockwise puts it 3 above the centre, at 2 + 4i.",
        view: { x: [-1.1, 6.1], y: [-1.1, 5.1] },
        elements: [
          { kind: "point", at: [2, 1], label: "c = 2 + i", labelAt: "sw", tone: "muted" },
          { kind: "point", at: [5, 1], label: "z = 5 + i", labelAt: "se" },
          { kind: "vector", from: [2, 1], to: [5, 1], tone: "muted", step: 1 },
          { kind: "arc", centre: [2, 1], r: 3, from: 0, to: 90, tone: "muted", step: 2 },
          { kind: "vector", from: [2, 1], to: [2, 4], tone: "muted", step: 2 },
          { kind: "point", at: [2, 4], label: "2 + 4i", labelAt: "ne", step: 3 },
        ],
      },
    },
    figure: {
      alt: "Multiplying 3 + i by i keeps its length and turns it a quarter-turn anticlockwise about the origin, to −1 + 3i.",
      view: { x: [-2.5, 4.2], y: [-0.8, 3.8] },
      elements: [
        { kind: "vector", to: [3, 1], label: "z = 3 + i", labelAt: "e", step: 1 },
        { kind: "arc", centre: [0, 0], r: 3.162, from: 18.435, to: 108.435, tone: "muted", step: 2 },
        { kind: "angle", at: [0, 0], from: 18.435, to: 108.435, label: "π/2", step: 2 },
        { kind: "vector", to: [-1, 3], label: "iz = −1 + 3i", labelAt: "nw", step: 3 },
      ],
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
      solution: {
        steps: [
          t`Shift: $z - c = (2 + 3i) - (1 + i) = 1 + 2i$.`,
          t`Rotate by $\dfrac\pi2$, which is multiplying by $i$: $(1 + 2i)\,i = -2 + i$.`,
          t`Shift back: $(-2 + i) + (1 + i) = -1 + 2i$.`,
        ],
        figure: {
          alt: "Rotating 2 + 3i a quarter-turn anticlockwise about 1 + i: the arrow from the centre turns from 1 + 2i to −2 + i, landing at −1 + 2i.",
          view: { x: [-2.1, 3.1], y: [-1.1, 4.332] },
          elements: [
            { kind: "point", at: [1, 1], label: "c = 1 + i", labelAt: "se", tone: "muted" },
            { kind: "point", at: [2, 3], label: "z = 2 + 3i", labelAt: "ne" },
            { kind: "vector", from: [1, 1], to: [2, 3], tone: "muted", step: 1 },
            { kind: "arc", centre: [1, 1], r: 2.236, from: 63.435, to: 153.435, tone: "muted", step: 2 },
            { kind: "vector", from: [1, 1], to: [-1, 2], tone: "muted", step: 2 },
            { kind: "point", at: [-1, 2], label: "−1 + 2i", labelAt: "nw", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`Shift: $z - c = 4 - 2 = 2$.`,
          t`Rotate by $\dfrac\pi3$: $2\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right) = 1 + \sqrt3\,i$.`,
          t`Shift back: $(1 + \sqrt3\,i) + 2 = 3 + \sqrt3\,i$.`,
        ],
        figure: {
          alt: "Rotating 4 by π/3 anticlockwise about 2: the arrow of length 2 from the centre turns up by π/3, landing at 3 + √3i.",
          view: { x: [-1.1, 5.1], y: [-1.1, 2.832] },
          elements: [
            { kind: "point", at: [2, 0], label: "c = 2", labelAt: "nw", tone: "muted" },
            { kind: "point", at: [4, 0], label: "z = 4", labelAt: "ne" },
            { kind: "vector", from: [2, 0], to: [4, 0], tone: "muted", step: 1 },
            { kind: "arc", centre: [2, 0], r: 2, from: 0, to: 60, tone: "muted", step: 2 },
            { kind: "vector", from: [2, 0], to: [3, 1.732], tone: "muted", step: 2 },
            { kind: "point", at: [3, 1.732], label: "3 + √3i", labelAt: "ne", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`Shift: $z - c = (1 + i) - 3 = -2 + i$.`,
          t`Rotate by $\pi$, which is multiplying by $-1$: $2 - i$.`,
          t`Shift back: $(2 - i) + 3 = 5 - i$.`,
        ],
        figure: {
          alt: "Rotating 1 + i by a half-turn about 3: the image is directly opposite, through the centre, at 5 − i.",
          view: { x: [-1.1, 6.1], y: [-3.332, 2.1] },
          elements: [
            { kind: "point", at: [3, 0], label: "c = 3", labelAt: "ne", tone: "muted" },
            { kind: "point", at: [1, 1], label: "z = 1 + i", labelAt: "nw" },
            { kind: "vector", from: [3, 0], to: [1, 1], tone: "muted", step: 1 },
            { kind: "arc", centre: [3, 0], r: 2.236, from: 153.435, to: 333.435, tone: "muted", step: 2 },
            { kind: "vector", from: [3, 0], to: [5, -1], tone: "muted", step: 2 },
            { kind: "point", at: [5, -1], label: "5 − i", labelAt: "se", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`Shift: $z - c = 3 - i$.`,
          t`Rotate by $\dfrac\pi2$, multiplying by $i$: $(3 - i)\,i = 3i - i^2 = 1 + 3i$.`,
          t`Shift back: $(1 + 3i) + i = 1 + 4i$.`,
        ],
        figure: {
          alt: "Rotating 3 a quarter-turn anticlockwise about i: the arrow from the centre turns from 3 − i to 1 + 3i, landing at 1 + 4i.",
          view: { x: [-1.1, 4.257], y: [-1.1, 5.1] },
          elements: [
            { kind: "point", at: [0, 1], label: "c = i", labelAt: "e", tone: "muted" },
            { kind: "point", at: [3, 0], label: "z = 3", labelAt: "ne" },
            { kind: "vector", from: [0, 1], to: [3, 0], tone: "muted", step: 1 },
            { kind: "arc", centre: [0, 1], r: 3.162, from: -18.435, to: 71.565, tone: "muted", step: 2 },
            { kind: "vector", from: [0, 1], to: [1, 4], tone: "muted", step: 2 },
            { kind: "point", at: [1, 4], label: "1 + 4i", labelAt: "ne", step: 3 },
          ],
        },
      },
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
      solution: {
        steps: [
          t`Rotating $3$ about $1$ by $\dfrac\pi3$ anticlockwise gives the third vertex, above the real axis.`,
          t`Shift: $3 - 1 = 2$. Rotate: $2\left(\cos\dfrac\pi3 + i\sin\dfrac\pi3\right) = 1 + \sqrt3\,i$.`,
          t`Shift back: $(1 + \sqrt3\,i) + 1 = 2 + \sqrt3\,i$.`,
        ],
        figure: {
          alt: "Turning the side from 1 to 3 by π/3 about 1 gives the third vertex of the equilateral triangle, 2 + √3i.",
          view: { x: [-1.1, 4.1], y: [-1.1, 2.832] },
          elements: [
            { kind: "point", at: [1, 0], label: "1", labelAt: "nw", tone: "muted" },
            { kind: "point", at: [3, 0], label: "3", labelAt: "ne" },
            { kind: "vector", from: [1, 0], to: [3, 0], tone: "muted", step: 1 },
            { kind: "arc", centre: [1, 0], r: 2, from: 0, to: 60, tone: "muted", step: 2 },
            { kind: "vector", from: [1, 0], to: [2, 1.732], tone: "muted", step: 2 },
            { kind: "segment", from: [3, 0], to: [2, 1.732], dashed: true, tone: "muted", step: 3 },
            { kind: "point", at: [2, 1.732], label: "z = 2 + √3i", labelAt: "n", step: 3 },
          ],
        },
      },
    },
  ],
};
