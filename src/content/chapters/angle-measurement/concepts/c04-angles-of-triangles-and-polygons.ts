import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** The sides of a polygon through `pts`, in order, as muted segments. */
function sidesOf(pts: Pt[]): FigureElement[] {
  return pts.map((p, i) => ({ kind: "segment", from: p, to: pts[(i + 1) % pts.length], tone: "muted" }));
}

/** A shaded triangle: the overlap of the half-planes left of each side, corners taken anticlockwise. */
function triangle(a: Pt, b: Pt, c: Pt, tone: FigureElement["tone"], step: number): FigureElement {
  return { kind: "region", within: [{ kind: "halfPlane", through: [a, b] }, { kind: "halfPlane", through: [b, c] }, { kind: "halfPlane", through: [c, a] }], tone, step };
}

/** Any (irregular) hexagon, corners anticlockwise from the bottom left. */
const HEX: Pt[] = [[-1.8, -1], [0.6, -1.5], [2, -0.3], [1.5, 1.3], [-0.3, 1.6], [-2, 0.5]];

/** A regular hexagon with sides 1.6, corners anticlockwise from the bottom left; side k points at 60k°. */
const REG: Pt[] = [[-0.8, -1.386], [0.8, -1.386], [1.6, 0], [0.8, 1.386], [-0.8, 1.386], [-1.6, 0]];

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A triangle has angles $\left(\frac{\pi}{4}\right)^c$ and $60^\circ$. **What is its third angle?** You can't just add $\frac{\pi}{4}$ and $60$.`,
    reveal: t`Put both in one unit first: $\left(\frac{\pi}{4}\right)^c = 45^\circ$. The angles add to $180^\circ$, so the third is $180^\circ - 45^\circ - 60^\circ = 75^\circ$, which is $\left(\frac{5\pi}{12}\right)^c$.`,
  },
  explanation: {
    intuition: t`A **polygon** is a closed figure made of straight **sides**: a **triangle** has three, a **quadrilateral** four. The angle inside it at a **corner**, between the two sides that meet there, is an **interior angle**. All its interior angles added up make its **angle sum**. Put a triangle's three angles side by side and they fill a straight line: a **straight angle**, $180^\circ$, which in radians is $\pi^c$. So a triangle with angles $A$, $B$, $C$ has $A + B + C = \pi^c = 180^\circ$. The geometry is the same in either unit; only the numbers change.`,
    formal: [
      {
        body: t`**Polygons split into triangles.** A **diagonal** is a segment joining two corners that are not next to each other. Draw every diagonal from one corner of a polygon with $n$ sides, an **$n$-gon**, and it splits into $n - 2$ triangles. Their angles together make up the polygon's interior angles, so

$$\text{angle sum} = (n - 2)\pi.$$

A quadrilateral ($n = 4$) splits into $2$ triangles: its angles add to $2\pi^c = 360^\circ$. A hexagon ($n = 6$) splits into $4$: its angles add to $4\pi^c = 720^\circ$.`,
        figure: {
          alt: "A hexagon, six sides, not regular. Three diagonals drawn from its bottom-left corner split it into four triangles, shaded and numbered 1 to 4 in turn. Four triangles of angle sum π each give the hexagon's angle sum, 4π = 720°.",
          axes: "none",
          view: { x: [-2.4, 2.4], y: [-2.4, 2] },
          elements: [
            ...sidesOf(HEX),
            { kind: "point", at: HEX[0], tone: "muted" },
            { kind: "segment", from: HEX[0], to: HEX[2], dashed: true, step: 1 },
            { kind: "segment", from: HEX[0], to: HEX[3], dashed: true, step: 1 },
            { kind: "segment", from: HEX[0], to: HEX[4], dashed: true, step: 1 },
            triangle(HEX[0], HEX[1], HEX[2], "good", 2),
            { kind: "label", at: [0.267, -1.13], label: "1", step: 2 },
            triangle(HEX[0], HEX[2], HEX[3], "accent", 3),
            { kind: "label", at: [0.567, -0.2], label: "2", step: 3 },
            triangle(HEX[0], HEX[3], HEX[4], "good", 4),
            { kind: "label", at: [-0.2, 0.433], label: "3", step: 4 },
            triangle(HEX[0], HEX[4], HEX[5], "accent", 5),
            { kind: "label", at: [-1.367, 0.167], label: "4", step: 5 },
            { kind: "label", at: [0, -1.75], label: "4 triangles: 4πᶜ = 720°", labelAt: "s", tone: "good", step: 6 },
          ],
        },
      },
      {
        body: t`**One unit first.** Angles in **mixed units**, some in radians and some in degrees, cannot be added as they stand. Convert every angle to one unit before you add or subtract:

$$\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ.$$

So $\left(\frac{\pi}{5}\right)^c$ is $36^\circ$, not $\frac{\pi}{5}$ degrees.`,
      },
      {
        body: t`**Take away the known angles.** The **known angles** are the ones the question gives, or that the figure fixes, such as a right angle. Subtract them from the angle sum first, then share only what is left among the unknown angles. A **right-angled triangle** has one right angle, $\frac{\pi}{2}$. Its other two angles are **acute**, each smaller than a right angle, and they share $\pi - \frac{\pi}{2} = \frac{\pi}{2}$, not $\pi$.`,
        figure: {
          alt: "A right-angled triangle. The right angle, π/2, is marked with a small square. The two acute angles x and y are marked at the other corners. They share what the right angle leaves: x + y = π − π/2 = π/2.",
          axes: "none",
          view: { x: [-0.8, 3.8], y: [-0.6, 2.6] },
          elements: [
            ...sidesOf([[0, 0], [3, 0], [0, 2]]),
            { kind: "segment", from: [0.28, 0], to: [0.28, 0.28], step: 1 },
            { kind: "segment", from: [0.28, 0.28], to: [0, 0.28], step: 1 },
            { kind: "label", at: [0.28, 0.28], label: "π/2", labelAt: "ne", step: 1 },
            { kind: "angle", at: [3, 0], from: 146.31, to: 180, label: "x", labelAt: "w", tone: "good", step: 2 },
            { kind: "angle", at: [0, 2], from: 270, to: 326.31, label: "y", labelAt: "s", tone: "good", step: 2 },
            { kind: "label", at: [1.6, 1.4], label: "x + y = π − π/2 = π/2", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
      {
        body: t`**Sharing in a ratio or A.P.:** Angles in the **ratio** $a : b : c$ are $a$, $b$ and $c$ times one number $k$: they are $ak$, $bk$, $ck$, and what they add up to fixes $k$. For $3 : 4 : 5$ in a triangle, $12k = \pi$, so $k = \frac{\pi}{12}$. Three angles in **arithmetic progression (A.P.)** go up by the same step, the **common difference** $d$: they are $a - d$, $a$, $a + d$. They add to $3a$, so in a triangle $3a = \pi$, and the middle angle is $a = \frac{\pi}{3}$ whatever $d$ is.`,
      },
      {
        body: t`**Regular polygon.** A **regular polygon** has all its sides equal and all its interior angles equal. Its $n$ equal angles share the angle sum $(n - 2)\pi$, so each interior angle is

$$\frac{(n-2)\pi}{n}.$$

A regular hexagon's angles add to $4\pi$, so each is $\frac{4\pi}{6} = \frac{2\pi}{3}$, or $120^\circ$. For $n = 10$, each is $\frac{8\pi}{10} = \frac{4\pi}{5}$.`,
        figure: {
          alt: "A regular hexagon. Its six interior angles are marked, each labelled 2π/3: they are equal, and share the angle sum 4π, so each is 4π ÷ 6 = 2π/3 = 120°.",
          axes: "none",
          view: { x: [-2.2, 2.2], y: [-2.3, 1.9] },
          elements: [
            ...sidesOf(REG),
            ...REG.map((at, k): FigureElement => ({ kind: "angle", at, from: 60 * k, to: 60 * k + 120, label: "2π/3", labelAt: (["n", "n", "w", "s", "s", "e"] as const)[k], step: 1 })),
            { kind: "label", at: [0, -1.5], label: "4π ÷ 6 = 2π/3 = 120° each", labelAt: "s", tone: "good", step: 2 },
          ],
        },
      },
      {
        body: t`**Exterior angles.** Extend a side of a polygon past a corner. The angle between that extension and the next side is the **exterior angle** at the corner. It lies on a straight line with the interior angle there, so the two add to $\pi$. Walking round the polygon, you turn through the exterior angle at each corner and come back facing the way you started: the $n$ exterior angles make one full turn, $2\pi$. In a regular polygon they are equal, so each is

$$\frac{2\pi}{n} = \pi - \frac{(n-2)\pi}{n}.$$

For a hexagon that is $\frac{\pi}{3}$; for $n = 10$, it is $\frac{\pi}{5}$.`,
        figure: {
          alt: "A regular hexagon. The bottom side is extended past the bottom-right corner. Beside the interior angle there, 2π/3, an arm turns from the extended side round to the next side: the exterior angle, π/3. On a straight line, 2π/3 + π/3 = π. Then at each of the other five corners an arm turns through π/3 from the extended side to the next side. Six turns of π/3 make 2π, one full turn.",
          axes: "none",
          view: { x: [-2.8, 2.8], y: [-3, 2.4] },
          elements: [
            ...sidesOf(REG),
            { kind: "segment", from: REG[1], to: [1.6, -1.386], dashed: true, label: "side extended", labelAt: "s", tone: "good", step: 1 },
            { kind: "angle", at: REG[1], from: 60, to: 180, label: "interior 2π/3", labelAt: "w", tone: "muted", step: 1 },
            { kind: "turn", centre: REG[1], r: 0.8, from: 0, to: 60, label: "exterior π/3", labelAt: "e", step: 2 },
            { kind: "label", at: [0.4, -2.1], label: "2π/3 + π/3 = π", labelAt: "e", step: 3 },
            ...[2, 3, 4, 5, 0].flatMap((k): FigureElement[] => {
              const [x, y] = REG[k];
              const dir = 60 * (k - 1);
              const end: Pt = [+(x + 0.8 * Math.cos((dir * Math.PI) / 180)).toFixed(3), +(y + 0.8 * Math.sin((dir * Math.PI) / 180)).toFixed(3)];
              return [
                { kind: "segment", from: REG[k], to: end, dashed: true, tone: "muted", step: 4 },
                { kind: "turn", centre: REG[k], r: 0.8, from: dir, to: dir + 60, step: 4 },
              ];
            }),
            { kind: "label", at: [-2.6, -2.7], label: "6 × π/3 = 2π: one full turn", labelAt: "e", tone: "good", step: 5 },
          ],
        },
      },
      {
        body: t`**Number of sides.** To find how many sides $n$ a regular polygon has from its interior angle, go through the exterior angle: subtract the interior angle from $\pi$, then divide the full turn $2\pi$ by the result. Interior $\frac{5\pi}{6}$ gives exterior $\pi - \frac{5\pi}{6} = \frac{\pi}{6}$, so

$$n = \frac{2\pi}{\pi/6} = 12.$$`,
      },
    ],
    worked: {
      prompt: t`The angles of a triangle are in A.P. and the greatest is $3$ times the smallest. Find the angles in radians.`,
      steps: [
        t`Write the angles as $a - d$, $a$, $a + d$. They add to $\pi$: $3a = \pi$, so $a = \frac{\pi}{3}$.`,
        t`The greatest is $3$ times the smallest: $a + d = 3(a - d)$, so $4d = 2a$ and $d = \frac{a}{2} = \frac{\pi}{6}$.`,
        t`The angles are $\frac{\pi}{3} - \frac{\pi}{6} = \frac{\pi}{6}$, $\frac{\pi}{3}$ and $\frac{\pi}{3} + \frac{\pi}{6} = \frac{\pi}{2}$.`,
        t`Check: $\frac{\pi}{6} + \frac{\pi}{3} + \frac{\pi}{2} = \pi$, and $\frac{\pi}{2} = 3 \times \frac{\pi}{6}$.`,
      ],
      answer: t`$\left(\frac{\pi}{6}\right)^c$, $\left(\frac{\pi}{3}\right)^c$ and $\left(\frac{\pi}{2}\right)^c$, that is $30^\circ$, $60^\circ$ and $90^\circ$.`,
    },
    figure: {
      alt: "A triangle with its interior angles A, B and C marked at its three corners. A dashed line through the top corner runs parallel to the bottom side. Copies of angles A and B appear at the top corner, either side of C: together A, C and B fill the straight line, so A + B + C = 180° = π radians.",
      axes: "none",
      view: { x: [-0.8, 4.4], y: [-0.7, 3] },
      elements: [
        ...sidesOf([[0, 0], [4, 0], [1.4, 2.2]]),
        { kind: "angle", at: [0, 0], from: 0, to: 57.53, label: "A", labelAt: "e", step: 1 },
        { kind: "angle", at: [4, 0], from: 139.76, to: 180, label: "B", labelAt: "w", step: 1 },
        { kind: "angle", at: [1.4, 2.2], from: 237.53, to: 319.76, label: "C", labelAt: "s", step: 1 },
        { kind: "segment", from: [-0.6, 2.2], to: [3.4, 2.2], dashed: true, tone: "muted", step: 2 },
        { kind: "angle", at: [1.4, 2.2], from: 180, to: 237.53, label: "A", labelAt: "w", tone: "good", step: 3 },
        { kind: "angle", at: [1.4, 2.2], from: 319.76, to: 360, label: "B", labelAt: "e", tone: "good", step: 3 },
        { kind: "label", at: [1.4, 2.45], label: "A + B + C = 180° = πᶜ", labelAt: "n", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag the number of sides $n$ to grow a regular polygon that splits into $n - 2$ triangles, with the interior and exterior angles at one corner shown in radians and degrees.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Uses the wrong angle sum: 2π (a full turn) for a triangle, or π for a quadrilateral",
      remediation: t`A triangle's angles add to $\pi^c = 180^\circ$, and a quadrilateral's to $2\pi^c = 360^\circ$ because it splits into two triangles. A full turn, $2\pi$, is the sum of the angles round a point.`,
      fallback: { kind: "ext", topic: "angle sum of a triangle and a quadrilateral" },
    },
    {
      id: "C04-M2",
      mistake: "Shares the whole angle sum among the unknown angles, forgetting the known angle (the right angle, or the one given)",
      remediation: t`Take the known angles away from the sum first, and share only what is left. In a right-angled triangle the two acute angles share $\frac{\pi}{2}$, not $\pi$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Uses an angle given in radians as that many degrees, mixing the two units in one sum",
      remediation: t`Convert every angle to one unit before you add or subtract: $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$. For example $\left(\frac{\pi}{5}\right)^c$ is $36^\circ$, not $\frac{\pi}{5}$ degrees.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M4",
      mistake: "Takes each interior angle of a regular n-gon to be 2π/n, which is the exterior angle",
      remediation: t`$\frac{2\pi}{n}$ is the exterior angle: the $n$ exterior angles make one full turn. The interior angle is $\pi - \frac{2\pi}{n} = \frac{(n-2)\pi}{n}$.`,
      fallback: { kind: "ext", topic: "exterior angles of a polygon" },
    },
    {
      id: "C04-M5",
      mistake: "Gives the angle sum (n − 2)π as each interior angle, forgetting to divide by n",
      remediation: t`$(n - 2)\pi$ is the sum of all $n$ interior angles. In a regular polygon they are equal, so each one is $\frac{(n-2)\pi}{n}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Takes an interior angle and its exterior angle to make a full turn, so interior = 2π − 2π/n",
      remediation: t`An interior angle and its exterior angle lie along a straight line, so they add to $\pi$, not $2\pi$: the interior angle is $\pi - \frac{2\pi}{n}$.`,
      fallback: { kind: "ext", topic: "angles on a straight line" },
    },
  ],
  engineNotes: [
    "C04-M1, C04-M2 and C04-M3 apply only to triangle and quadrilateral items: C04-M2 needs a known angle (a right angle or a given one), and C04-M3 needs an angle given in radians.",
    "C04-M4, C04-M5 and C04-M6 apply only to regular-polygon items. For a square C04-M4 gives the key (each angle is π/2 either way), so never use n = 4 to diagnose it.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q12" },
      stem: t`One angle of a quadrilateral is $\left(\frac{2\pi}{5}\right)^c$ and the other three are in the ratio $2 : 3 : 4$. The largest of these three angles, in degrees, is:`,
      verify: { kind: "value", inputs: { a: "2*pi/5", parts: "(2, 3, 4)" }, params: { type: "ratio", shape: "quad", known: "a", rad: "a", ask: "largest", unit: "deg" } },
      options: [
        { key: "A", text: t`$160^\circ$`, correct: false, misconceptionId: "C04-M2", value: "160" },
        { key: "B", text: t`$\left(160 - \frac{8\pi}{45}\right)^\circ$`, correct: false, misconceptionId: "C04-M3", value: "160 - 8*pi/45" },
        { key: "C", text: t`$128^\circ$`, correct: true, value: "128" },
        { key: "D", text: t`$48^\circ$`, correct: false, misconceptionId: "C04-M1", value: "48" },
      ],
      solution: {
        steps: [
          t`Convert: $\left(\frac{2\pi}{5}\right)^c = \left(\frac{2\pi}{5} \times \frac{180}{\pi}\right)^\circ = 72^\circ$.`,
          t`A quadrilateral's angles add to $360^\circ$, so the other three add to $360^\circ - 72^\circ = 288^\circ$.`,
          t`They are $2k$, $3k$, $4k$: $9k = 288^\circ$, so $k = 32^\circ$ and the angles are $64^\circ$, $96^\circ$ and $128^\circ$. The largest is $128^\circ$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/1.1 SolvedEx.5" },
      stem: t`The difference between the two acute angles of a right-angled triangle is $\left(\frac{7\pi}{30}\right)^c$. The larger acute angle, in degrees, is:`,
      verify: { kind: "value", inputs: { r: "pi/2", d: "7*pi/30" }, params: { type: "sumdiff", shape: "tri", known: "r", rad: "d", ask: "largest", unit: "deg" } },
      options: [
        { key: "A", text: t`$156^\circ$`, correct: false, misconceptionId: "C04-M1", value: "156" },
        { key: "B", text: t`$111^\circ$`, correct: false, misconceptionId: "C04-M2", value: "111" },
        { key: "C", text: t`$\left(45 + \frac{7\pi}{60}\right)^\circ$`, correct: false, misconceptionId: "C04-M3", value: "7*pi/60 + 45" },
        { key: "D", text: t`$66^\circ$`, correct: true, value: "66" },
      ],
      solution: {
        steps: [
          t`Convert: $\left(\frac{7\pi}{30}\right)^c = \left(\frac{7\pi}{30} \times \frac{180}{\pi}\right)^\circ = 42^\circ$. So $x - y = 42^\circ$ for the acute angles $x > y$.`,
          t`The right angle takes $90^\circ$ of the $180^\circ$, so $x + y = 90^\circ$.`,
          t`Adding: $2x = 132^\circ$, so $x = 66^\circ$ and $y = 24^\circ$. The larger acute angle is $66^\circ$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc II Q11" },
      stem: t`One angle of a quadrilateral is $\left(\frac{\pi}{2}\right)^c$. The other three are in A.P. with common difference $20^\circ$. The smallest of these three angles, in degrees, is:`,
      verify: { kind: "value", inputs: { a: "pi/2", d: "pi/9" }, params: { type: "ap", shape: "quad", known: "a", rad: "a", ask: "smallest", unit: "deg" } },
      options: [
        { key: "A", text: t`$100^\circ$`, correct: false, misconceptionId: "C04-M2", value: "100" },
        { key: "B", text: t`$\left(100 - \frac{\pi}{6}\right)^\circ$`, correct: false, misconceptionId: "C04-M3", value: "100 - pi/6" },
        { key: "C", text: t`$70^\circ$`, correct: true, value: "70" },
        { key: "D", text: t`$10^\circ$`, correct: false, misconceptionId: "C04-M1", value: "10" },
      ],
      solution: {
        steps: [
          t`Convert: $\left(\frac{\pi}{2}\right)^c = 90^\circ$. The other three angles add to $360^\circ - 90^\circ = 270^\circ$.`,
          t`Write them as $a - 20^\circ$, $a$, $a + 20^\circ$: $3a = 270^\circ$, so $a = 90^\circ$.`,
          t`The three angles are $70^\circ$, $90^\circ$ and $110^\circ$. The smallest is $70^\circ$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q13(iv)" },
      stem: t`Each interior angle of a regular octagon, in radians, is:`,
      verify: { kind: "value", inputs: { n: "8" }, params: { type: "poly", unit: "rad" } },
      options: [
        { key: "A", text: t`$\frac{\pi}{4}$`, correct: false, misconceptionId: "C04-M4", value: "pi/4" },
        { key: "B", text: t`$6\pi$`, correct: false, misconceptionId: "C04-M5", value: "6*pi" },
        { key: "C", text: t`$\frac{7\pi}{4}$`, correct: false, misconceptionId: "C04-M6", value: "7*pi/4" },
        { key: "D", text: t`$\frac{3\pi}{4}$`, correct: true, value: "3*pi/4" },
      ],
      solution: {
        steps: [
          t`An octagon has $n = 8$ sides, so it splits into $8 - 2 = 6$ triangles and its angles add to $6\pi$.`,
          t`The $8$ angles are equal, so each is $\frac{6\pi}{8} = \frac{3\pi}{4}$.`,
          t`Check: the exterior angle is $\pi - \frac{3\pi}{4} = \frac{\pi}{4} = \frac{2\pi}{8}$, as it should be.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q13(i)" },
      stem: t`Each interior angle of a regular pentagon, in degrees, is:`,
      verify: { kind: "value", inputs: { n: "5" }, params: { type: "poly", unit: "deg" } },
      options: [
        { key: "A", text: t`$288^\circ$`, correct: false, misconceptionId: "C04-M6", value: "288" },
        { key: "B", text: t`$108^\circ$`, correct: true, value: "108" },
        { key: "C", text: t`$72^\circ$`, correct: false, misconceptionId: "C04-M4", value: "72" },
        { key: "D", text: t`$540^\circ$`, correct: false, misconceptionId: "C04-M5", value: "540" },
      ],
      solution: {
        steps: [
          t`A pentagon splits into $5 - 2 = 3$ triangles, so its angles add to $3 \times 180^\circ = 540^\circ$.`,
          t`The $5$ angles are equal, so each is $\frac{540^\circ}{5} = 108^\circ$.`,
          t`Check: the exterior angle is $180^\circ - 108^\circ = 72^\circ = \frac{360^\circ}{5}$, as it should be.`,
        ],
      },
    },
  ],
};
