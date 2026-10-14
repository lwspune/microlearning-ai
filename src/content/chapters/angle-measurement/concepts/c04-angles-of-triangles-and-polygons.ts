import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A triangle has angles $\left(\frac{\pi}{4}\right)^c$ and $60^\circ$. **What is its third angle?** You can't just add $\frac{\pi}{4}$ and $60$.`,
    reveal: t`Put both in one unit first: $\left(\frac{\pi}{4}\right)^c = 45^\circ$. The angles add to $180^\circ$, so the third is $180^\circ - 45^\circ - 60^\circ = 75^\circ$, which is $\left(\frac{5\pi}{12}\right)^c$.`,
  },
  explanation: {
    intuition: t`The angle facts from geometry still hold; only the unit changes. A triangle's angles make a straight angle, $\pi^c = 180^\circ$, and a quadrilateral splits into two triangles, so its angles add to $2\pi^c = 360^\circ$. When a question mixes radians and degrees, convert to one unit before you add or subtract. Then take away the angles you know and share what is left: in a ratio, in an A.P., or equally in a regular polygon.`,
    formal: t`**Angle sums**

- Triangle: $A + B + C = \pi^c = 180^\circ$. In a right-angled triangle the two acute angles add to $\frac{\pi}{2}$.
- Quadrilateral: the four angles add to $2\pi^c = 360^\circ$.

**One unit first.** Convert with $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$. Subtract the known angles from the sum, then share the rest.

**Ratio and A.P.** Angles in the ratio $a : b : c$ are $ak$, $bk$, $ck$, and their sum fixes $k$. Three angles in A.P. are $a - d$, $a$, $a + d$: in a triangle, $3a = \pi$ gives $a = \frac{\pi}{3}$.

**Regular polygon.** An $n$-gon splits into $n - 2$ triangles, so its angles add to $(n - 2)\pi$, and each interior angle is $\frac{(n-2)\pi}{n}$. Each exterior angle is $\pi - \frac{(n-2)\pi}{n} = \frac{2\pi}{n}$: together the $n$ exterior angles make one full turn. For $n = 10$: interior $\frac{4\pi}{5}$, exterior $\frac{\pi}{5}$.

**Number of sides.** From the interior angle, find the exterior angle and divide $2\pi$ by it. Interior $\frac{5\pi}{6}$ gives exterior $\frac{\pi}{6}$, so $n = \frac{2\pi}{\pi/6} = 12$.`,
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
