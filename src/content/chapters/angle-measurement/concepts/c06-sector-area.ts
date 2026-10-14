import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Two pizza slices are cut at the same angle, but one pizza has **twice the radius** of the other. How many times as much pizza is in the bigger slice?`,
    reveal: t`Four times, not two. The area of a slice is $\frac{1}{2}r^2\theta$: the angle $\theta$ is the same, and doubling $r$ makes $r^2$ four times as big. The crust, the arc $s = r\theta$, only doubles.`,
  },
  explanation: {
    intuition: t`A sector is a slice of the disc. A full turn, $2\pi$ radians, holds the whole area $\pi r^2$, so each radian holds $\frac{\pi r^2}{2\pi} = \frac{1}{2}r^2$. A sector of $\theta$ radians holds $\theta$ times that: $\frac{1}{2}r^2\theta$. Since its arc is $s = r\theta$, this is also $\frac{1}{2}rs$, like a triangle with base $s$ and height $r$.`,
    formal: t`**Area of a sector** (with $\theta$ in radians)
$$A = \frac{1}{2}r^2\theta = \frac{1}{2}rs$$
An angle given in degrees is converted first: $\theta = d \times \frac{\pi}{180}$. A circle given by its area gives $r$ first: $\pi r^2 = 49\pi$ means $r = 7$.

**Perimeter of a sector**: its boundary is two radii and the arc, so perimeter $= 2r + s = 2r + r\theta$.

**Area of a segment** (between an arc and its chord): the sector minus the triangle on the chord,
$$\frac{1}{2}r^2\theta - \frac{1}{2}r^2\sin\theta.$$
For $r = 12$ cm and $\theta = 30^\circ = \frac{\pi}{6}$: $12\pi - 36 = 12(\pi - 3)$ sq. cm.`,
    worked: {
      prompt: t`The area of a circle is $225\pi$ sq. cm. Find the length of the arc subtending $120^\circ$ at the centre, and the area of the corresponding sector.`,
      steps: [
        t`$\pi r^2 = 225\pi$, so $r^2 = 225$ and $r = 15$ cm.`,
        t`In radians: $\theta = 120 \times \frac{\pi}{180} = \frac{2\pi}{3}$.`,
        t`Arc: $s = r\theta = 15 \times \frac{2\pi}{3} = 10\pi$ cm.`,
        t`Sector: $A = \frac{1}{2}rs = \frac{1}{2} \times 15 \times 10\pi = 75\pi$ sq. cm. Check: $\frac{1}{2}r^2\theta = \frac{1}{2} \times 225 \times \frac{2\pi}{3} = 75\pi$.`,
      ],
      answer: t`The arc is $10\pi$ cm and the sector's area is $75\pi$ sq. cm.`,
      figure: {
        alt: "A circle of area 225π, so radius 15, with centre O. Two radii make an angle of 120°, which is 2π/3 radians. The arc between them has length 10π and the shaded sector has area 75π.",
        axes: "none",
        view: { x: [-4.2, 4.2], y: [-4.2, 4.2] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
          { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
          { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 15", labelAt: "s", step: 1 },
          { kind: "segment", from: [0, 0], to: [-1.5, 2.598], step: 1 },
          { kind: "angle", at: [0, 0], from: 0, to: 120, label: "120°", labelAt: "ne", step: 2 },
          { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 120, step: 3 },
          { kind: "label", at: [1.5, 2.598], label: "s = 10π", labelAt: "ne", step: 3 },
          { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "sector", centre: [0, 0], from: 0, to: 120 }], step: 4 },
          { kind: "label", at: [0.492, 1.835], label: "A = 75π", labelAt: "n", tone: "good", step: 4 },
        ],
      },
    },
    figure: {
      alt: "A circle with centre O and radius r. Two radii make an angle θ and cut off an arc of length s. The sector between them is shaded: its area is A = ½r²θ = ½rs. The chord joining the ends of the arc cuts off a segment, the sector minus the triangle on the chord.",
      axes: "none",
      view: { x: [-3.8, 4.4], y: [-1.2, 3.8] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
        { kind: "point", at: [0, 0], label: "O", labelAt: "s" },
        { kind: "segment", from: [0, 0], to: [3, 0], label: "r", labelAt: "s", step: 1 },
        { kind: "segment", from: [0, 0], to: [-1.026, 2.819], step: 1 },
        { kind: "angle", at: [0, 0], from: 0, to: 110, label: "θ", labelAt: "ne", step: 1 },
        { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 110, step: 2 },
        { kind: "label", at: [1.721, 2.457], label: "s = rθ", labelAt: "ne", step: 2 },
        { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "sector", centre: [0, 0], from: 0, to: 110 }], step: 3 },
        { kind: "label", at: [1.25, 0.12], label: "A = ½r²θ", labelAt: "n", tone: "good", step: 3 },
        { kind: "segment", from: [3, 0], to: [-1.026, 2.819], tone: "muted", dashed: true, step: 4 },
        { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "halfPlane", through: [[-1.026, 2.819], [3, 0]] }], tone: "good", step: 4 },
        { kind: "label", at: [2.913, 1.06], label: "segment", labelAt: "e", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag the radius or the angle of a sector: the shaded area, the arc and the readout $A = \frac{1}{2}r^2\theta$ update together, and a toggle draws the chord to show the segment as sector minus triangle.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Putting the angle into ½r²θ (or s = rθ) in degrees",
      remediation: t`$A = \frac{1}{2}r^2\theta$ and $s = r\theta$ hold only with $\theta$ in radians. Convert first: multiply the degrees by $\frac{\pi}{180}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C06-M2",
      mistake: "Taking the sector's area as r × s (that is, r²θ), like a rectangle, dropping the ½",
      remediation: t`A sector is like a triangle with base the arc $s$ and height $r$, so $A = \frac{1}{2}rs = \frac{1}{2}r^2\theta$. The $\frac{1}{2}$ stays.`,
      fallback: { kind: "ext", topic: "area of a triangle" },
    },
    {
      id: "C06-M3",
      mistake: "Giving the arc length rθ as the area",
      remediation: t`$s = r\theta$ is the arc's length, in cm. The area of the sector is $\frac{1}{2}r^2\theta = \frac{1}{2}rs$, in sq. cm.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: "Taking the area between an arc and its chord to be the whole sector",
      remediation: t`The sector also holds the triangle on the chord. The area between the arc and the chord is the sector minus that triangle, whose area is $\frac{1}{2}r^2\sin\theta$.`,
      fallback: { kind: "ext", topic: "area of a triangle" },
    },
    {
      id: "C06-M5",
      mistake: "Taking the perimeter of a sector to be its arc alone",
      remediation: t`A sector's boundary is the arc and the two radii, so its perimeter is $2r + s$. Take away $2r$ to get the arc.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Counting only one radius in the perimeter",
      remediation: t`A sector has two straight edges, both radii: perimeter $= r + r + s = 2r + s$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C06-M1 can't show on area-from-perimeter items (Q3, Q6): no angle is given in degrees.",
    "C06-M4 shows only on segment items (Q4); C06-M5 and C06-M6 only on perimeter items (Q2, Q3, Q6).",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.2 Q6" },
      stem: t`The area of a circle is $25\pi$ sq. cm. The area of the sector whose arc subtends $144^\circ$ at the centre is (in sq. cm):`,
      verify: { kind: "value", inputs: { circ: "25*pi", t: "4*pi/5" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$1800$`, correct: false, misconceptionId: "C06-M1", value: "1800" },
        { key: "B", text: t`$20 \pi$`, correct: false, misconceptionId: "C06-M2", value: "20*pi" },
        { key: "C", text: t`$4 \pi$`, correct: false, misconceptionId: "C06-M3", value: "4*pi" },
        { key: "D", text: t`$10 \pi$`, correct: true, value: "10*pi" },
      ],
      solution: {
        steps: [
          t`$\pi r^2 = 25\pi$, so $r = 5$ cm.`,
          t`In radians: $\theta = 144 \times \frac{\pi}{180} = \frac{4\pi}{5}$.`,
          t`$A = \frac{1}{2}r^2\theta = \frac{1}{2} \times 25 \times \frac{4\pi}{5} = 10\pi$ sq. cm.`,
        ],
        figure: {
          alt: "A circle of area 25π, so radius 5, with centre O. Two radii make an angle of 144°, which is 4π/5 radians. The shaded sector between them has area 10π.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-4.2, 4.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 5", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [-2.427, 1.763], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 144, label: "144°", labelAt: "n", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "sector", centre: [0, 0], from: 0, to: 144 }], step: 3 },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 144, step: 3 },
            { kind: "label", at: [0.099, 1.897], label: "A = 10π", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q10" },
      stem: t`The central angle of a sector of a circle of area $9\pi$ sq. cm is $60^\circ$. The perimeter of the sector is (in cm):`,
      verify: { kind: "value", inputs: { circ: "9*pi", t: "pi/3" }, params: { ask: "perimeter" } },
      options: [
        { key: "A", text: t`$6 + \pi$`, correct: true, value: "pi + 6" },
        { key: "B", text: t`$186$`, correct: false, misconceptionId: "C06-M1", value: "186" },
        { key: "C", text: t`$\pi$`, correct: false, misconceptionId: "C06-M5", value: "pi" },
        { key: "D", text: t`$3 + \pi$`, correct: false, misconceptionId: "C06-M6", value: "3 + pi" },
      ],
      solution: {
        steps: [
          t`$\pi r^2 = 9\pi$, so $r = 3$ cm, and $\theta = 60^\circ = \frac{\pi}{3}$.`,
          t`Arc: $s = r\theta = 3 \times \frac{\pi}{3} = \pi$ cm.`,
          t`The boundary is two radii and the arc: perimeter $= 3 + 3 + \pi = 6 + \pi$ cm.`,
        ],
        figure: {
          alt: "A circle of area 9π, so radius 3, with centre O. Two radii make an angle of 60°, which is π/3 radians, and the arc between them has length π. The sector's boundary, two radii and the arc, is highlighted: its perimeter is 3 + 3 + π = 6 + π.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-4.2, 4.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 3", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.5, 2.598], step: 1 },
            { kind: "label", at: [1.4, 0.35], label: "60°", labelAt: "e", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 60, step: 1 },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 60, step: 2 },
            { kind: "label", at: [2.598, 1.5], label: "s = π", labelAt: "ne", step: 2 },
            { kind: "segment", from: [0, 0], to: [3, 0], step: 3, tone: "good" },
            { kind: "segment", from: [0, 0], to: [1.5, 2.598], step: 3, tone: "good" },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 60, tone: "good", step: 3 },
            { kind: "label", at: [0, 3.4], label: "perimeter = 3 + 3 + π = 6 + π", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.2 Q10" },
      stem: t`The perimeter of a sector of a circle of area $64\pi$ sq. cm is $56$ cm. The area of the sector is (in sq. cm):`,
      verify: { kind: "value", inputs: { circ: "64*pi", P: "56" }, params: { ask: "area_p" } },
      options: [
        { key: "A", text: t`$160$`, correct: true, value: "160" },
        { key: "B", text: t`$320$`, correct: false, misconceptionId: "C06-M2", value: "320" },
        { key: "C", text: t`$224$`, correct: false, misconceptionId: "C06-M5", value: "224" },
        { key: "D", text: t`$192$`, correct: false, misconceptionId: "C06-M6", value: "192" },
      ],
      solution: {
        steps: [
          t`$\pi r^2 = 64\pi$, so $r = 8$ cm.`,
          t`Perimeter $= 2r + s$: $16 + s = 56$, so the arc is $s = 40$ cm.`,
          t`$A = \frac{1}{2}rs = \frac{1}{2} \times 8 \times 40 = 160$ sq. cm.`,
        ],
        figure: {
          alt: "A circle of area 64π, so radius 8, with centre O. The sector's perimeter, two radii and the arc, is 56, so the arc has length 40. The shaded sector has area ½ × 8 × 40 = 160.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-4.2, 4.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "se" },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 8", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [0.851, -2.877], step: 1 },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 286.479, step: 1 },
            { kind: "label", at: [-2.403, 1.795], label: "s = 40", labelAt: "nw", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "sector", centre: [0, 0], from: 0, to: 286.479 }], step: 3 },
            { kind: "label", at: [-1.559, -1.086], label: "A = 160", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.2 Q8" },
      stem: t`OPQ is a sector of a circle with centre O and radius $15$ cm, and $m\angle POQ = 30^\circ$. The area enclosed by arc PQ and chord PQ is (in sq. cm):`,
      verify: { kind: "value", inputs: { r: "15", t: "pi/6" }, params: { ask: "segment" } },
      options: [
        { key: "A", text: t`$\frac{75\pi}{4}$`, correct: false, misconceptionId: "C06-M4", value: "75*pi/4" },
        { key: "B", text: t`$\frac{75}{4}(\pi - 3)$`, correct: true, value: "-225/4 + 75*pi/4" },
        { key: "C", text: t`$\frac{13275}{4}$`, correct: false, misconceptionId: "C06-M1", value: "13275/4" },
        { key: "D", text: t`$\frac{75}{4}(2\pi - 3)$`, correct: false, misconceptionId: "C06-M2", value: "-225/4 + 75*pi/2" },
      ],
      solution: {
        steps: [
          t`$\theta = 30^\circ = \frac{\pi}{6}$. Sector OPQ: $\frac{1}{2}r^2\theta = \frac{1}{2} \times 225 \times \frac{\pi}{6} = \frac{75\pi}{4}$.`,
          t`Triangle OPQ: $\frac{1}{2}r^2\sin\theta = \frac{1}{2} \times 225 \times \frac{1}{2} = \frac{225}{4}$.`,
          t`Area between arc and chord $=$ sector $-$ triangle $= \frac{75\pi}{4} - \frac{225}{4} = \frac{75}{4}(\pi - 3)$ sq. cm.`,
        ],
        figure: {
          alt: "Sector OPQ of a circle with centre O and radius 15, with angle POQ = 30°. The sector has area 75π/4. The triangle OPQ, cut off by the chord PQ, has area 225/4. The thin piece between the arc PQ and the chord is the sector minus the triangle: 75(π − 3)/4.",
          axes: "none",
          view: { x: [-0.8, 6.4], y: [-0.9, 3.7] },
          elements: [
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "segment", from: [0, 0], to: [4, 0], label: "r = 15", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [3.464, 2] },
            { kind: "arc", centre: [0, 0], r: 4, from: 0, to: 30 },
            { kind: "point", at: [4, 0], label: "P", labelAt: "se" },
            { kind: "point", at: [3.464, 2], label: "Q", labelAt: "ne" },
            { kind: "label", at: [1.4, 0.35], label: "30°", labelAt: "e" },
            { kind: "angle", at: [0, 0], from: 0, to: 30 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 4 }, { kind: "sector", centre: [0, 0], from: 0, to: 30 }], step: 1 },
            { kind: "label", at: [-0.6, 3.3], label: "sector OPQ = 75π/4", labelAt: "e", step: 1 },
            { kind: "segment", from: [4, 0], to: [3.464, 2], tone: "bad", step: 2 },
            { kind: "region", within: [{ kind: "halfPlane", through: [[0, 0], [4, 0]] }, { kind: "halfPlane", through: [[4, 0], [3.464, 2]] }, { kind: "halfPlane", through: [[3.464, 2], [0, 0]] }], tone: "bad", step: 2 },
            { kind: "label", at: [-0.6, 2.8], label: "triangle OPQ = 225/4", labelAt: "e", tone: "bad", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 4 }, { kind: "halfPlane", through: [[3.464, 2], [4, 0]] }], tone: "good", step: 3 },
            { kind: "label", at: [4.009, 1.074], label: "75(π − 3)/4", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc II Q7" },
      stem: t`The area of a circle is $81\pi$ sq. cm. The area of the sector whose arc subtends $300^\circ$ at the centre is (in sq. cm):`,
      verify: { kind: "value", inputs: { circ: "81*pi", t: "5*pi/3" }, params: { ask: "area" } },
      options: [
        { key: "A", text: t`$\frac{135 \pi}{2}$`, correct: true, value: "135*pi/2" },
        { key: "B", text: t`$12150$`, correct: false, misconceptionId: "C06-M1", value: "12150" },
        { key: "C", text: t`$135 \pi$`, correct: false, misconceptionId: "C06-M2", value: "135*pi" },
        { key: "D", text: t`$15 \pi$`, correct: false, misconceptionId: "C06-M3", value: "15*pi" },
      ],
      solution: {
        steps: [
          t`$\pi r^2 = 81\pi$, so $r = 9$ cm.`,
          t`In radians: $\theta = 300 \times \frac{\pi}{180} = \frac{5\pi}{3}$.`,
          t`$A = \frac{1}{2}r^2\theta = \frac{1}{2} \times 81 \times \frac{5\pi}{3} = \frac{135\pi}{2}$ sq. cm.`,
        ],
        figure: {
          alt: "A circle of area 81π, so radius 9, with centre O. Two radii make a reflex angle of 300°, which is 5π/3 radians. The shaded sector, most of the circle, has area 135π/2.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-4.2, 4.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "se" },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 9", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [1.5, -2.598], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 300, label: "300°", labelAt: "nw", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "sector", centre: [0, 0], from: 0, to: 300 }], step: 3 },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 300, step: 3 },
            { kind: "label", at: [-1.344, -1.344], label: "A = 135π/2", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q6" },
      stem: t`$20$ m of wire fences off a flower-bed in the shape of a sector of a circle of radius $5$ m. The area of the flower-bed is (in sq. m):`,
      verify: { kind: "value", inputs: { r: "5", P: "20" }, params: { ask: "area_p" } },
      options: [
        { key: "A", text: t`$50$`, correct: false, misconceptionId: "C06-M5", value: "50" },
        { key: "B", text: t`$\frac{75}{2}$`, correct: false, misconceptionId: "C06-M6", value: "75/2" },
        { key: "C", text: t`$25$`, correct: true, value: "25" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C06-M3", value: "10" },
      ],
      solution: {
        steps: [
          t`The wire runs along both radii and the arc: $2r + s = 20$.`,
          t`$10 + s = 20$, so the arc is $s = 10$ m.`,
          t`$A = \frac{1}{2}rs = \frac{1}{2} \times 5 \times 10 = 25$ sq. m.`,
        ],
        figure: {
          alt: "A flower-bed shaped as a sector of radius 5 with centre O. The 20 m of wire runs along both radii and the arc, so the arc has length 10. The shaded sector has area ½ × 5 × 10 = 25.",
          axes: "none",
          view: { x: [-4.2, 4.2], y: [-4.2, 4.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 3, tone: "muted", dashed: true },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw" },
            { kind: "segment", from: [0, 0], to: [3, 0], label: "r = 5", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, 0], to: [-1.248, 2.728], step: 1 },
            { kind: "arc", centre: [0, 0], r: 3, from: 0, to: 114.592, step: 1 },
            { kind: "label", at: [1.621, 2.524], label: "s = 10", labelAt: "ne", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 3 }, { kind: "sector", centre: [0, 0], from: 0, to: 114.592 }], step: 3 },
            { kind: "label", at: [0.578, 1.81], label: "A = 25", labelAt: "n", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
