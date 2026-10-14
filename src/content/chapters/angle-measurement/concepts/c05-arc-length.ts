import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`The tip of a $30$ cm windscreen wiper sweeps through $120^\circ$. A friend says the tip travels $30 \times 120 = 3600$ cm, that is $36$ metres. **What went wrong?**`,
    reveal: t`$s = r\theta$ only works with $\theta$ in **radians**. $120^\circ = \frac{2\pi}{3}$, so $s = 30 \times \frac{2\pi}{3} = 20\pi \approx 62.8$ cm. That makes sense: it is a third of the whole circle, whose circumference is $60\pi \approx 188$ cm.`,
  },
  explanation: {
    intuition: t`One radian is the angle whose arc is exactly as long as the radius. So an angle of $\theta$ radians takes $\theta$ radius-lengths of arc: $s = r\theta$. Double the radius and the arc doubles; double the angle and it doubles too. The catch is the unit: $\theta$ must be in radians. A pendulum's bob, a horse on a rope and a train on a curved track all move along such arcs.`,
    formal: t`**Arc length.** In a circle of radius $r$, an arc that subtends $\theta^c$ at the centre has length
$$s = r\theta \qquad (\theta \text{ in radians})$$

**Angle in degrees?** Convert first: $\theta^c = \theta^\circ \times \frac{\pi}{180}$. This is the same as taking the fraction $\frac{\theta^\circ}{360}$ of the circumference $2\pi r$.

**Turned round.** $r = \frac{s}{\theta}$ and $\theta = \frac{s}{r}$, in radians. For degrees, multiply by $\frac{180}{\pi}$.

**Equal arcs in two circles.** $r_1\theta_1 = r_2\theta_2$, so $r_1 : r_2 = \theta_2 : \theta_1$. The smaller angle needs the bigger circle.

**Read the picture.** A pendulum's length is the radius and its path is the arc. A chord equal to the radius makes an equilateral triangle with the centre, so it subtends $60^\circ$, not $1$ radian.`,
    worked: {
      prompt: t`A pendulum $21$ cm long oscillates through an angle of $36^\circ$. Find the length of its path.`,
      steps: [
        t`The bob moves along an arc of a circle whose radius is the pendulum's length: $r = 21$ cm.`,
        t`Convert the angle: $\theta = 36 \times \frac{\pi}{180} = \frac{\pi}{5}$ radians.`,
        t`$s = r\theta = 21 \times \frac{\pi}{5} = \frac{21\pi}{5}$ cm. With $\pi \approx \frac{22}{7}$, that is $\frac{21}{5} \times \frac{22}{7} = 13.2$ cm.`,
      ],
      answer: t`The path is $\frac{21\pi}{5} \approx 13.2$ cm long.`,
      figure: {
        alt: "A pendulum 21 cm long hangs from O and swings through 36°, which is π/5 radians. The bob's path is the arc below, of length 21π/5 cm.",
        axes: "none",
        view: { x: [-2.43, 2.43], y: [-3.9, 0.7] },
        elements: [
          { kind: "segment", from: [-1.83, 0], to: [1.83, 0], tone: "muted" },
          { kind: "point", at: [0, 0], label: "O", labelAt: "n" },
          { kind: "segment", from: [0, 0], to: [-0.927, -2.853], step: 1 },
          { kind: "segment", from: [0, 0], to: [0.927, -2.853], step: 1 },
          { kind: "label", at: [-0.51, -1.569], label: "21 cm", labelAt: "w", step: 1 },
          { kind: "angle", at: [0, 0], from: 252, to: 288, step: 2 },
          { kind: "label", at: [0.435, -0.571], label: "36° = π/5", labelAt: "e", step: 2 },
          { kind: "arc", centre: [0, 0], r: 3, from: 252, to: 288, tone: "good", step: 3 },
          { kind: "label", at: [0, -3], label: "s = 21π/5", labelAt: "s", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A circle with centre O and radius r. An arc as long as the radius subtends 1 radian at O. An angle of 2.5 radians holds two and a half such arcs, so its arc is s = 2.5r: s = rθ.",
      axes: "none",
      view: { x: [-3.8, 3.8], y: [-3.6, 3.8] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
        { kind: "point", at: [0, 0], label: "O", labelAt: "s" },
        { kind: "segment", from: [0, 0], to: [3, 0], label: "r", labelAt: "s", step: 1 },
        { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 57.3, step: 2 },
        { kind: "segment", from: [0, 0], to: [1.621, 2.525], tone: "muted", step: 2 },
        { kind: "angle", at: [0, 0], from: 0, to: 57.3, label: "1 rad", step: 2 },
        { kind: "label", at: [2.633, 1.438], label: "arc = r", labelAt: "e", step: 2 },
        { kind: "arc", centre: [0, 0], r: 3, from: 57.3, to: 143.24, tone: "good", step: 3 },
        { kind: "segment", from: [0, 0], to: [-2.403, 1.795], tone: "muted", step: 3 },
        { kind: "label", at: [-0.521, 2.954], label: "s = 2.5r", labelAt: "n", tone: "good", step: 3 },
        { kind: "label", at: [-1.1, -1.1], label: "θ = 2.5 rad", labelAt: "n", tone: "good", step: 3 },
      ],
    },
    visualSpec: t`Drag the radius and the angle (shown in degrees and in radians); the arc is marked off in radius-lengths, and a strip beside the circle unrolls it to show $s = r\theta$.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Putting the degree number straight into $s = r\theta$, or reading $\theta = \frac{s}{r}$ as degrees`,
      remediation: t`$s = r\theta$ needs $\theta$ in radians. Convert first with $\theta^c = \theta^\circ \times \frac{\pi}{180}$; and $\frac{s}{r}$ comes out in radians, so multiply by $\frac{180}{\pi}$ to get degrees.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M2",
      mistake: t`Converting with the wrong factor: degrees times $\frac{180}{\pi}$ to get radians, or radians times $\frac{\pi}{180}$ to get degrees`,
      remediation: t`Degrees to radians: multiply by $\frac{\pi}{180}$, so $180^\circ$ becomes $\pi$. Radians to degrees: multiply by $\frac{180}{\pi}$, so $\pi$ becomes $180^\circ$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M3",
      mistake: t`Using the sector-area formula $\frac{1}{2}r^2\theta$ as the arc length`,
      remediation: t`The arc is $s = r\theta$, a length in cm. $\frac{1}{2}r^2\theta$ is the area of the sector, in sq. cm, which comes next.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "For equal arcs, taking the radii in the same ratio as the angles",
      remediation: t`Equal arcs give $r_1\theta_1 = r_2\theta_2$, so $r_1 : r_2 = \theta_2 : \theta_1$. The circle with the smaller angle is the bigger one.`,
      fallback: { kind: "ext", topic: "inverse proportion" },
    },
    {
      id: "C05-M5",
      mistake: "Taking a chord equal to the radius to cut off 1 radian, so that the arc equals the chord",
      remediation: t`One radian is where the **arc** equals the radius. A **chord** equal to the radius makes an equilateral triangle with the centre, so it subtends $60^\circ = \frac{\pi}{3}$, and the arc is longer than the chord.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C05-M6",
      mistake: "Using the diameter as the radius",
      remediation: t`The $r$ in $s = r\theta$ is the radius. When the diameter is given, halve it first.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C05-M1 and C05-M2 give the key on an equal-arcs ratio item when both angles are in the same unit (the factor cancels): diagnose them on such items only when one angle is in degrees and the other in radians, as in C05-Q5.",
    "C05-M4 applies only to equal arcs in two circles, C05-M5 only to an arc cut off by a chord, and C05-M6 only when the diameter is given.",
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/1.2 SolvedEx.1" },
      stem: t`The diameter of a circle is $14$ cm. The length of the arc subtending an angle of $54^\circ$ at the centre, in cm, is:`,
      verify: { kind: "value", inputs: { d: "14", th: "3*pi/10" }, params: { ask: "s" } },
      options: [
        { key: "A", text: t`$\frac{21 \pi}{5}$`, correct: false, misconceptionId: "C05-M6", value: "21*pi/5" },
        { key: "B", text: t`$\frac{21 \pi}{10}$`, correct: true, value: "21*pi/10" },
        { key: "C", text: t`$378$`, correct: false, misconceptionId: "C05-M1", value: "378" },
        { key: "D", text: t`$\frac{147 \pi}{20}$`, correct: false, misconceptionId: "C05-M3", value: "147*pi/20" },
      ],
      solution: {
        steps: [
          t`The radius is half the diameter: $r = 7$ cm.`,
          t`Convert the angle: $\theta = 54 \times \frac{\pi}{180} = \frac{3\pi}{10}$ radians.`,
          t`$s = r\theta = 7 \times \frac{3\pi}{10} = \frac{21\pi}{10}$ cm, about $6.6$ cm.`,
        ],
        figure: {
          alt: "A circle of diameter 14, so radius 7, with centre O. Two radii make an angle of 54°, which is 3π/10 radians, and the arc between them has length 21π/10.",
          axes: "none",
          view: { x: [-3.8, 3.8], y: [-3.6, 3.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "s" },
            { kind: "segment", from: [-3, 0], to: [0, 0], tone: "muted", dashed: true, step: 1 },
            { kind: "label", at: [-1.5, 0.15], label: "d = 14", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 7", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.763, 2.427], step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 54, label: "54° = 3π/10", step: 2 },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 54, tone: "good", step: 3 },
            { kind: "label", at: [2.673, 1.362], label: "s = 21π/10", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q4" },
      stem: t`A pendulum $14$ cm long oscillates through an angle of $12^\circ$. The length of its path, in cm, is:`,
      verify: { kind: "value", inputs: { r: "14", th: "pi/15" }, params: { ask: "s" } },
      options: [
        { key: "A", text: t`$168$`, correct: false, misconceptionId: "C05-M1", value: "168" },
        { key: "B", text: t`$\frac{30240}{\pi}$`, correct: false, misconceptionId: "C05-M2", value: "30240/pi" },
        { key: "C", text: t`$\frac{98 \pi}{15}$`, correct: false, misconceptionId: "C05-M3", value: "98*pi/15" },
        { key: "D", text: t`$\frac{14 \pi}{15}$`, correct: true, value: "14*pi/15" },
      ],
      solution: {
        steps: [
          t`The bob moves along an arc whose radius is the pendulum's length: $r = 14$ cm.`,
          t`Convert the angle: $\theta = 12 \times \frac{\pi}{180} = \frac{\pi}{15}$ radians.`,
          t`$s = r\theta = 14 \times \frac{\pi}{15} = \frac{14\pi}{15}$ cm.`,
        ],
        figure: {
          alt: "A pendulum 14 cm long hangs from O and swings through 12°, which is π/15 radians. The bob's path is the short arc below, of length 14π/15 cm.",
          axes: "none",
          view: { x: [-2, 2], y: [-3.9, 0.7] },
          elements: [
            { kind: "segment", from: [-1.4, 0], to: [1.4, 0], tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "n" },
            { kind: "segment", from: [0, 0], to: [-0.314, -2.984], step: 1 },
            { kind: "segment", from: [0, 0], to: [0.314, -2.984], step: 1 },
            { kind: "label", at: [-0.172, -1.641], label: "14 cm", labelAt: "w", step: 1 },
            { kind: "angle", at: [0, 0], from: 264, to: 276, step: 2 },
            { kind: "label", at: [0.313, -0.597], label: "12° = π/15", labelAt: "e", step: 2 },
            { kind: "arc", centre: [0, 0], r: 3, from: 264, to: 276, tone: "good", step: 3 },
            { kind: "label", at: [0, -3], label: "s = 14π/15", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q3" },
      stem: t`A horse is tied to a post by a rope. Keeping the rope tight, it walks along a circular path and covers $88$ m while the rope turns through $72^\circ$. The length of the rope, in metres, is:`,
      verify: { kind: "value", inputs: { s: "88", th: "2*pi/5" }, params: { ask: "r" } },
      options: [
        { key: "A", text: t`$\frac{220}{\pi}$`, correct: true, value: "220/pi" },
        { key: "B", text: t`$\frac{11}{9}$`, correct: false, misconceptionId: "C05-M1", value: "11/9" },
        { key: "C", text: t`$\frac{11 \pi}{1620}$`, correct: false, misconceptionId: "C05-M2", value: "11*pi/1620" },
        { key: "D", text: t`$2\sqrt{\frac{110}{\pi}}$`, correct: false, misconceptionId: "C05-M3", value: "2*sqrt(110)/sqrt(pi)" },
      ],
      solution: {
        steps: [
          t`The rope is the radius and the $88$ m walked is the arc. Convert the angle: $\theta = 72 \times \frac{\pi}{180} = \frac{2\pi}{5}$ radians.`,
          t`$s = r\theta$ gives $r = \frac{s}{\theta} = 88 \times \frac{5}{2\pi} = \frac{220}{\pi}$ m.`,
          t`With $\pi \approx \frac{22}{7}$: $r = 220 \times \frac{7}{22} = 70$ m.`,
        ],
        figure: {
          alt: "A post O with a tight rope to the horse. The rope turns through 72°, which is 2π/5 radians, while the horse walks an arc of 88 m. The rope is the radius, 220/π m, about 70 m.",
          axes: "none",
          view: { x: [-1.6, 3.9], y: [-1.2, 3.6] },
          elements: [
            { kind: "point", at: [0, 0], label: "post O", labelAt: "sw" },
            { kind: "segment", from: [0, 0], to: [3, 0], tone: "muted" },
            { kind: "segment", from: [0, 0], to: [0.927, 2.853], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 72 },
            { kind: "label", at: [2.427, 1.763], label: "s = 88 m", labelAt: "ne" },
            { kind: "angle", at: [0, 0], from: 0, to: 72, label: "72° = 2π/5", step: 1 },
            { kind: "label", at: [1.5, 0], label: "r = 220/π", labelAt: "s", tone: "good", step: 2 },
            { kind: "label", at: [3, 0], label: "≈ 70 m", labelAt: "se", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc II Q5" },
      stem: t`A wire $10$ cm long is bent into an arc of a circle of radius $4$ cm. The angle the arc subtends at the centre is:`,
      verify: { kind: "value", inputs: { s: "10", r: "4" }, params: { ask: "angle" } },
      options: [
        { key: "A", text: t`$\left(\frac{\pi}{72}\right)^\circ$`, correct: false, misconceptionId: "C05-M2", value: "pi/72" },
        { key: "B", text: t`$\left(\frac{225}{\pi}\right)^\circ$`, correct: false, misconceptionId: "C05-M3", value: "225/pi" },
        { key: "C", text: t`$\left(\frac{450}{\pi}\right)^\circ$`, correct: true, value: "450/pi" },
        { key: "D", text: t`$\left(\frac{5}{2}\right)^\circ$`, correct: false, misconceptionId: "C05-M1", value: "5/2" },
      ],
      solution: {
        steps: [
          t`The wire is the arc, so $s = 10$ and $r = 4$: $\theta = \frac{s}{r} = \frac{10}{4} = \frac{5}{2}$ radians.`,
          t`In degrees: $\frac{5}{2} \times \frac{180}{\pi} = \left(\frac{450}{\pi}\right)^\circ$, about $143^\circ$.`,
        ],
        figure: {
          alt: "A wire 10 cm long bent into an arc of a circle of radius 4 cm, centre O. The arc subtends 5/2 radians, which is 450/π degrees, about 143°.",
          axes: "none",
          view: { x: [-3.8, 3.8], y: [-3.6, 3.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 4", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [-2.403, 1.795], tone: "muted" },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 143.24 },
            { kind: "label", at: [1.5, 2.598], label: "wire: s = 10", labelAt: "ne" },
            { kind: "angle", at: [0, 0], from: 0, to: 143.24, label: "5/2 rad", step: 1 },
            { kind: "label", at: [-0.9, -1.1], label: "(450/π)° ≈ 143°", labelAt: "n", tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.2 Q5" },
      stem: t`Two arcs of the same length subtend angles of $60^\circ$ and $\left(\frac{5\pi}{12}\right)^c$ at the centres of two circles of radii $r_1$ and $r_2$. The ratio $r_1 : r_2$ is:`,
      verify: { kind: "value", inputs: { a: "pi/3", b: "5*pi/12" }, params: { ask: "ratio", deg: "a" } },
      options: [
        { key: "A", text: t`$5 : 4$`, correct: true, value: "5/4" },
        { key: "B", text: t`$\pi : 144$`, correct: false, misconceptionId: "C05-M1", value: "pi/144" },
        { key: "C", text: t`$\sqrt{5} : 2$`, correct: false, misconceptionId: "C05-M3", value: "sqrt(5)/2" },
        { key: "D", text: t`$4 : 5$`, correct: false, misconceptionId: "C05-M4", value: "4/5" },
      ],
      solution: {
        steps: [
          t`Both angles in radians: $60^\circ = \frac{\pi}{3}$, and the other is already $\frac{5\pi}{12}$.`,
          t`The arcs are equal: $r_1 \times \frac{\pi}{3} = r_2 \times \frac{5\pi}{12}$.`,
          t`So $\frac{r_1}{r_2} = \frac{5\pi}{12} \div \frac{\pi}{3} = \frac{5}{4}$: $r_1 : r_2 = 5 : 4$. The smaller angle has the bigger circle.`,
        ],
        figure: {
          alt: "Two circles, radii r₁ and r₂. In the first, an arc subtends 60°, which is π/3 radians; in the second, an arc of the same length subtends 5π/12 radians. The first circle is bigger: r₁ : r₂ = 5 : 4.",
          axes: "none",
          view: { x: [-6.2, 5.6], y: [-3, 3.5] },
          elements: [
            { kind: "circle", centre: [-3.2, 0], r: 2.75, tone: "muted", dashed: true },
            { kind: "circle", centre: [3, 0], r: 2.2, tone: "muted", dashed: true },
            { kind: "segment", from: [-3.2, 0], to: [-0.45, 0], label: "r₁", labelAt: "s" },
            { kind: "segment", from: [-3.2, 0], to: [-1.825, 2.382], tone: "muted" },
            { kind: "segment", from: [3, 0], to: [5.2, 0], label: "r₂", labelAt: "s" },
            { kind: "segment", from: [3, 0], to: [3.569, 2.125], tone: "muted" },
            { kind: "angle", at: [-3.2, 0], from: 0, to: 60, label: "π/3", step: 1 },
            { kind: "angle", at: [3, 0], from: 0, to: 75, step: 1 },
            { kind: "label", at: [3.45, 0.42], label: "5π/12", labelAt: "e", step: 1 },
            { kind: "arc", centre: [-3.2, 0], r: 2.75, from: 0, to: 60, tone: "good", step: 2 },
            { kind: "arc", centre: [3, 0], r: 2.2, from: 0, to: 75, tone: "good", step: 2 },
            { kind: "label", at: [-0.818, 1.375], label: "s", labelAt: "e", tone: "good", step: 2 },
            { kind: "label", at: [4.915, 1.607], label: "s", labelAt: "ne", tone: "good", step: 2 },
            { kind: "label", at: [0, 3], label: "r₁ : r₂ = 5 : 4", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.2 Q2" },
      stem: t`In a circle of radius $9$ cm, a chord is as long as the radius. The length of the minor arc it cuts off, in cm, is:`,
      verify: { kind: "value", inputs: { r: "9", c: "9" }, params: { ask: "chord" } },
      options: [
        { key: "A", text: t`$3 \pi$`, correct: true, value: "3*pi" },
        { key: "B", text: t`$540$`, correct: false, misconceptionId: "C05-M1", value: "540" },
        { key: "C", text: t`$\frac{27 \pi}{2}$`, correct: false, misconceptionId: "C05-M3", value: "27*pi/2" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C05-M5", value: "9" },
      ],
      solution: {
        steps: [
          t`Join the chord's ends $A$, $B$ to the centre $O$: $OA = OB = AB = 9$ cm, so triangle $OAB$ is equilateral.`,
          t`So $\angle AOB = 60^\circ = \frac{\pi}{3}$ radians.`,
          t`$s = r\theta = 9 \times \frac{\pi}{3} = 3\pi$ cm, about $9.42$ cm: a little longer than the $9$ cm chord.`,
        ],
        figure: {
          alt: "A circle of radius 9, centre O, with a chord AB of length 9. Triangle OAB is equilateral, so angle AOB is 60°, which is π/3 radians, and the minor arc AB has length 3π, a little longer than the chord.",
          axes: "none",
          view: { x: [-3.8, 3.8], y: [-3.6, 3.8] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "point", at: [3, 0], label: "A", labelAt: "se" },
            { kind: "point", at: [1.5, 2.598], label: "B", labelAt: "ne" },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "9", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.5, 2.598], label: "9", labelAt: "nw", step: 1 },
            { kind: "segment", from: [3, 0], to: [1.5, 2.598], label: "9", labelAt: "w", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 60, label: "60° = π/3", step: 2 },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 60, tone: "good", step: 3 },
            { kind: "label", at: [2.598, 1.5], label: "s = 3π", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
