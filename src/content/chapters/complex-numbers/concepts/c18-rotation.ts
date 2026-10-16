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
    intuition: [
      t`Recall: multiplying complex numbers multiplies their lengths and adds their angles.`,
      t`Take $z = 3 + i$, drawn as an arrow from the origin.`,
      t`The number $i$ has length $1$ and angle $\dfrac\pi2$.`,
      t`So $iz = -1 + 3i$ has the same length as $z$, and an angle $\dfrac\pi2$ more.`,
      t`The arrow turned a quarter-turn **anticlockwise**, against a clock's hands: a **rotation** about the origin.`,
      t`To rotate about another fixed point $c$, the **centre**, shift $c$ to the origin, rotate, then shift back.`,
    ],
    formal: [
      {
        title: "Rotating about the origin",
        points: [
          t`Recall: $e^{i\alpha}$ means $\cos\alpha + i\sin\alpha$, with length $1$ and argument $\alpha$.`,
          t`Take a point $z$, drawn as an arrow from the origin.`,
          t`Multiplying $z$ by $e^{i\alpha}$ multiplies its length by $1$, so the length stays the same.`,
          t`It adds $\alpha$ to the argument, so the arrow turns through $\alpha$ about the origin.`,
          t`So the **image** $z'$, where $z$ lands, is $z' = z\,e^{i\alpha}$.`,
          t`A positive $\alpha$ turns anticlockwise.`,
        ],
        figure: {
          alt: "An arrow z from the origin. Multiplying by e^(iα) keeps its length, so its tip stays on the same circle about the origin; the arrow turns anticlockwise through α to the image z′ = z e^(iα).",
          view: { x: [-1.2, 3.4], y: [-0.8, 3.2] },
          elements: [
            { kind: "vector", to: [2.443, 0.889], label: "z", labelAt: "e", tone: "good", step: 2 },
            { kind: "arc", centre: [0, 0], r: 2.6, from: 20, to: 80, tone: "muted", step: 3 },
            { kind: "turn", r: 2.6, from: 20, to: 80, label: "z′ = z e^(iα)", labelAt: "ne", step: 4 },
            { kind: "label", at: [0.696, 0.696], label: "α", labelAt: "ne", step: 4 },
          ],
        },
      },
      {
        title: "Quarter-turns and half-turns",
        points: [
          t`Take $z = 2 + i$.`,
          t`$e^{i\pi/2} = i$, so multiplying by $i$ is a **quarter-turn**, through $\dfrac\pi2$.`,
          t`$e^{i\pi} = -1$, so multiplying by $-1$ is a **half-turn**, through $\pi$.`,
        ],
        figure: {
          alt: "The arrow z = 2 + i. A quarter-turn anticlockwise, through π/2, takes it to iz = −1 + 2i; a half-turn, through π, takes it to −z = −2 − i, straight through the origin.",
          view: { x: [-3.6, 3.2], y: [-1.8, 2.8] },
          elements: [
            { kind: "vector", to: [2, 1], label: "z = 2 + i", labelAt: "e", tone: "good", step: 1 },
            { kind: "turn", r: 2.236, from: 26.565, to: 116.565, label: "iz = −1 + 2i", labelAt: "w", step: 2 },
            { kind: "label", at: [0.3, 0.9], label: "π/2", labelAt: "ne", step: 2 },
            { kind: "turn", r: 2.236, from: 26.565, to: 206.565, label: "−z = −2 − i", labelAt: "s", step: 3 },
            { kind: "label", at: [-0.9, 0.3], label: "π", labelAt: "nw", step: 3 },
          ],
        },
      },
      {
        title: "Rotating about another centre",
        points: [
          t`To rotate $z$ about a centre $c$, first shift by $-c$, which moves $c$ to the origin.`,
          t`That shift sends $z$ to $z - c$, the arrow from $c$ to $z$.`,
          t`Rotate that arrow by multiplying: $(z - c)\,e^{i\alpha}$.`,
          t`This is the arrow from $c$ to the image, so $z' - c = (z - c)\,e^{i\alpha}$.`,
          t`Shift back by adding $c$: $z' = c + (z - c)\,e^{i\alpha}$.`,
        ],
        figure: {
          alt: "A centre c and a point z. The arrow from c to z is z − c. It turns anticlockwise through α about c, keeping its length, to the arrow (z − c) e^(iα), which ends at the image z′.",
          view: { x: [-0.8, 4.4], y: [-0.8, 3.8] },
          elements: [
            { kind: "point", at: [1, 0.8], label: "c", labelAt: "sw", tone: "muted", step: 1 },
            { kind: "point", at: [3.318, 1.421], label: "z", labelAt: "e", step: 1 },
            { kind: "vector", from: [1, 0.8], to: [3.318, 1.421], tone: "good", step: 2 },
            { kind: "label", at: [2.159, 1.11], label: "z − c", labelAt: "se", tone: "good", step: 2 },
            { kind: "turn", centre: [1, 0.8], r: 2.4, from: 15, to: 85, label: "(z − c) e^(iα)", labelAt: "e", step: 3 },
            { kind: "label", at: [1.6, 1.6], label: "α", labelAt: "ne", step: 3 },
            { kind: "point", at: [1.209, 3.191], label: "z′", labelAt: "w", step: 4 },
          ],
        },
      },
      {
        title: "Equilateral triangles",
        points: [
          t`An **equilateral** triangle has three equal sides, and each of its angles is $\dfrac\pi3$.`,
          t`Name its corners $A$, $B$, $C$, going anticlockwise round it.`,
          t`The side from $A$ to $B$ is the arrow $B - A$.`,
          t`Turning it through $\dfrac\pi3$ about $A$ lays it along the side from $A$ to $C$.`,
          t`So $C - A = (B - A)\,e^{i\pi/3}$.`,
        ],
        figure: {
          alt: "An equilateral triangle with corners A, B, C going anticlockwise. The side from A to B, the arrow B − A, turns anticlockwise through π/3 about A and lies along the side from A to C: C − A = (B − A) e^(iπ/3).",
          view: { x: [-0.6, 4.4], y: [-0.6, 3.6] },
          elements: [
            { kind: "segment", from: [1, 0.5], to: [3.462, 0.934], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [3.462, 0.934], to: [1.855, 2.849], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [1.855, 2.849], to: [1, 0.5], dashed: true, tone: "muted", step: 1 },
            { kind: "point", at: [1, 0.5], label: "A", labelAt: "sw", step: 2 },
            { kind: "point", at: [3.462, 0.934], label: "B", labelAt: "e", step: 2 },
            { kind: "point", at: [1.855, 2.849], label: "C", labelAt: "n", step: 2 },
            { kind: "vector", from: [1, 0.5], to: [3.462, 0.934], tone: "good", step: 3 },
            { kind: "label", at: [2.231, 0.717], label: "B − A", labelAt: "s", tone: "good", step: 3 },
            { kind: "turn", centre: [1, 0.5], r: 2.5, from: 10, to: 70, label: "C − A", labelAt: "w", step: 4 },
            { kind: "label", at: [1.75, 1.2], label: "π/3", labelAt: "ne", step: 4 },
          ],
        },
      },
    ],
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
          { kind: "vector", from: [2, 1], to: [5, 1], tone: "good", step: 1 },
          { kind: "label", at: [3.5, 1], label: "z − c = 3", labelAt: "n", tone: "good", step: 1 },
          { kind: "turn", centre: [2, 1], r: 3, from: 0, to: 90, label: "3i", labelAt: "w", step: 2 },
          { kind: "point", at: [2, 4], label: "2 + 4i", labelAt: "ne", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The arrow z = 3 + i from the origin, and the arrow i of length 1 at angle π/2. Multiplying z by i keeps its length and turns it a quarter-turn anticlockwise about the origin, to iz = −1 + 3i.",
      view: { x: [-2.5, 4.2], y: [-0.8, 3.8] },
      elements: [
        { kind: "vector", to: [3, 1], label: "z = 3 + i", labelAt: "e", tone: "good", step: 2 },
        { kind: "vector", to: [0, 1], label: "i", labelAt: "e", tone: "muted", step: 3 },
        { kind: "turn", r: 3.162, from: 18.435, to: 108.435, label: "iz = −1 + 3i", labelAt: "nw", step: 4 },
        { kind: "label", at: [0.58, 1.16], label: "π/2", labelAt: "ne", step: 4 },
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
    {
      id: "C18-M4",
      mistake: "Swapping the point and the centre: turning the centre about the point",
      remediation: t`The centre stays fixed. Rotate the arrow from the centre to the point, $z - c$, then add $c$: $z' = c + (z - c)\,e^{i\alpha}$.`,
      fallback: { kind: "none" },
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
        { key: "D", text: t`$-1 + 2 i$`, correct: false, misconceptionId: "C18-M4", value: "-1 + 2*I" },
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
