import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Drop a pebble in a still pond: rings spread out, and a cork floating nearby only bobs up and down. What is it that moves outward, and in which direction?`,
    reveal: t`Each ring joins points that are in the same state of motion: it is a **wavefront**. The wave travels at right angles to the rings. Light spreads the same way, and Huygens' principle tells us where the next wavefront will be.`,
  },
  explanation: {
    intuition: [
      t`A small source of light sends out waves in all directions.`,
      t`A **wavefront** is the surface through all the points the wave reaches at the same instant.`,
      t`A **ray** is the direction in which the wave travels; it is always perpendicular to the wavefront.`,
      t`Close to a small source the wavefronts are spheres; very far away, a small part of one is flat.`,
      t`Huygens' principle builds each new wavefront from tiny wavelets sent out by the old one.`,
    ],
    formal: [
      {
        title: "Sources of light",
        points: [
          t`A **primary source** gives out light of its own, like the Sun, a flame or a tube light.`,
          t`It glows because it is very hot, because a current passes through it, or because of a chemical or nuclear reaction.`,
          t`A **secondary source** gives out no light of its own: it reflects or scatters light from another source.`,
          t`The Moon, the planets and everyday objects are secondary sources; we see them by the light they reflect.`,
        ],
      },
      {
        title: "Wavefronts and rays",
        points: [
          t`The **phase** of a point tells its state of motion in the wave: where it is in its cycle.`,
          t`A **wavefront** is the locus of all points of the medium that are in the same phase at a given instant.`,
          t`In one medium, waves leaving the source together reach every point of a wavefront together.`,
          t`A **ray** is the direction of travel of the wave: the rays are the normals to the wavefronts.`,
          t`For a point source, the rays are the radii drawn outward from the source.`,
        ],
      },
      {
        title: "Shapes of wavefronts",
        points: [
          t`A **point source** gives **spherical** wavefronts: concentric spheres centred on the source.`,
          t`A **line source**, such as a long lit slit, gives **cylindrical** wavefronts with the slit as their axis.`,
          t`As a spherical wavefront travels out, its radius grows and its curvature falls.`,
          t`Far from the source, the small patch we receive is part of a huge sphere: it is a **plane** wavefront.`,
          t`The rays of a plane wavefront are parallel, like sunlight reaching the Earth.`,
        ],
      },
      {
        title: "Huygens' principle",
        points: [
          t`Every point on a wavefront acts as a **secondary source** of light.`,
          t`Each sends out **secondary wavelets** in all directions, at the speed of light in that medium.`,
          t`After a time $t$, each wavelet is a sphere of radius $vt$, where $v$ is the speed in the medium.`,
          t`The surface touching all the wavelets in front, their **forward envelope**, is the new wavefront.`,
          t`The backward halves of the wavelets are ignored: no wave travels back towards the source.`,
          t`These Huygens secondary sources are points of a wavefront, not reflecting objects like the Moon.`,
        ],
        figure: {
          alt: "A plane wavefront drawn as a vertical line. Step 1: three points on it, each a secondary source. Step 2: from each, a forward half-circle wavelet. Step 3: the top wavelet's radius marked v t. Step 4: the common tangent to the wavelets, a parallel line v t ahead: the new wavefront.",
          axes: "none",
          view: { x: [-3.2, 8], y: [0, 7.3] },
          elements: [
            { kind: "segment", from: [1.5, 0.3], to: [1.5, 5.5], label: "old wavefront", labelAt: "w", tone: "muted" },
            { kind: "point", at: [1.5, 1], step: 1 },
            { kind: "point", at: [1.5, 3], step: 1 },
            { kind: "point", at: [1.5, 5], step: 1 },
            { kind: "arc", centre: [1.5, 1], r: 2, from: -90, to: 90, tone: "muted", step: 2 },
            { kind: "arc", centre: [1.5, 3], r: 2, from: -90, to: 90, tone: "muted", step: 2 },
            { kind: "arc", centre: [1.5, 5], r: 2, from: -90, to: 90, tone: "muted", step: 2 },
            { kind: "segment", from: [1.5, 5], to: [3.5, 5], label: "v t", labelAt: "n", tone: "good", step: 3 },
            { kind: "segment", from: [3.5, 0.3], to: [3.5, 6.2], label: "new wavefront", labelAt: "e", step: 4 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`A plane wavefront travels through water, where light travels at $2.25 \times 10^{8}\ \mathrm{m/s}$. Use Huygens' principle to find the wavefront $4.0\ \mathrm{ns}$ later.`,
      steps: [
        t`By Huygens' principle, every point of the wavefront is a secondary source.`,
        t`In $4.0\ \mathrm{ns}$ each wavelet grows to radius $vt$ $= 2.25 \times 10^{8} \times 4.0 \times 10^{-9}$ $= 0.90\ \mathrm{m}$.`,
        t`Their forward common tangent is a plane parallel to the old one: the new wavefront is $0.90\ \mathrm{m}$ ahead.`,
      ],
      answer: t`A plane wavefront, parallel to the first and $0.90\ \mathrm{m}$ ahead of it`,
      figure: {
        alt: "A plane wavefront in water. Step 1: points on it act as secondary sources. Step 2: wavelets of radius 0.90 m drawn forward from them. Step 3: their common tangent, the new wavefront, 0.90 m ahead and parallel to the old one.",
        axes: "none",
        view: { x: [-3.2, 8], y: [0, 7.3] },
        elements: [
          { kind: "segment", from: [1.5, 0.3], to: [1.5, 5.5], label: "t = 0", labelAt: "w", tone: "muted" },
          { kind: "point", at: [1.5, 1], step: 1 },
          { kind: "point", at: [1.5, 3], step: 1 },
          { kind: "point", at: [1.5, 5], step: 1 },
          { kind: "arc", centre: [1.5, 1], r: 2, from: -90, to: 90, tone: "muted", step: 2 },
          { kind: "arc", centre: [1.5, 3], r: 2, from: -90, to: 90, tone: "muted", step: 2 },
          { kind: "arc", centre: [1.5, 5], r: 2, from: -90, to: 90, tone: "muted", step: 2 },
          { kind: "segment", from: [1.5, 5], to: [3.5, 5], label: "0.90 m", labelAt: "n", tone: "good", step: 2 },
          { kind: "segment", from: [3.5, 0.3], to: [3.5, 6.2], label: "t = 4.0 ns", labelAt: "e", step: 3 },
        ],
      },
    },
    figure: {
      alt: "Step 1: a point source S. Step 2: two spherical wavefronts round it, circles of radius 1 and 2. Step 3: rays drawn outward from S, each crossing the circles at right angles. Step 4: on the right, far from any source, three flat plane wavefronts with parallel rays perpendicular to them.",
      axes: "none",
      view: { x: [0, 12], y: [0, 6] },
      elements: [
        { kind: "point", at: [2.6, 3], label: "S", labelAt: "e", step: 1 },
        { kind: "circle", centre: [2.6, 3], r: 1, step: 2 },
        { kind: "circle", centre: [2.6, 3], r: 2, label: "wavefront", labelAt: "ne", step: 2 },
        { kind: "vector", from: [3.12, 3.3], to: [4.852, 4.3], tone: "good", step: 3 },
        { kind: "vector", from: [2.6, 3.6], to: [2.6, 5.6], tone: "good", step: 3 },
        { kind: "vector", from: [2.08, 3.3], to: [0.348, 4.3], tone: "good", step: 3 },
        { kind: "vector", from: [2.08, 2.7], to: [0.348, 1.7], tone: "good", step: 3 },
        { kind: "vector", from: [2.6, 2.4], to: [2.6, 0.4], tone: "good", step: 3 },
        { kind: "vector", from: [3.12, 2.7], to: [4.852, 1.7], tone: "good", step: 3 },
        { kind: "segment", from: [7.6, 0.8], to: [7.6, 5.2], step: 4 },
        { kind: "segment", from: [8.8, 0.8], to: [8.8, 5.2], step: 4 },
        { kind: "segment", from: [10, 0.8], to: [10, 5.2], step: 4 },
        { kind: "vector", from: [6.6, 1.6], to: [11.4, 1.6], tone: "good", step: 4 },
        { kind: "vector", from: [6.6, 3], to: [11.4, 3], tone: "good", step: 4 },
        { kind: "vector", from: [6.6, 4.4], to: [11.4, 4.4], tone: "good", step: 4 },
        { kind: "label", at: [8.8, 5.2], label: "plane wavefronts", labelAt: "n", step: 4 },
      ],
    },
    visualSpec: t`Drag a slider for t and watch wavelets grow from points on a wavefront, their envelope sweeping forward as the next wavefront.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes a ray to run along the wavefront.",
      remediation: "A ray is the direction the wave travels, and that is always perpendicular to the wavefront: rays are its normals.",
      fallback: { kind: "ext", topic: "rays of light (Std XI Physics)" },
    },
    {
      id: "C01-M2",
      mistake: "Treats every source as a point source, so a line source gives spheres.",
      remediation: "Each point of a line source sends out waves, and together they make cylinders with the line as axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks a wavefront keeps its curvature however far it travels.",
      remediation: "A spherical wavefront's radius grows as it travels, so its curvature falls: far away, the patch we receive is plane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks the wavefront copies the shape of the source.",
      remediation: "The shape comes from how far each point is from the source: spheres round a point, cylinders round a line, planes far away.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks the wavelets also build a second wavefront going back towards the source.",
      remediation: "Huygens' construction uses only the forward envelope of the wavelets; no wave travels backwards.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Takes any bright-looking object, like the Moon, as a primary source.",
      remediation: "A primary source gives out light of its own. The Moon only reflects sunlight, so it is secondary, however bright it looks.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks only a hot body can give out light of its own.",
      remediation: "Light can also come from a current, as in a tube light, or a reaction. A secondary source is one that only reflects light.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Confuses Huygens' secondary sources with secondary sources of light.",
      remediation: "Huygens' secondary sources are points of a wavefront sending out wavelets. A secondary source of light, like the Moon, reflects light.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: t`Gives the wavelets the speed $c$ in every medium.`,
      remediation: t`The wavelets travel at the speed of light in that medium, $v$, which is less than $c$ in glass or water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Takes a single wavelet for the new wavefront.",
      remediation: t`Each wavelet has radius $vt$; the new wavefront is their envelope, so a spherical one has radius $R + vt$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.2 (ii)" },
      stem: t`Sunlight falls on a small window on the Earth, about $1.5 \times 10^{11}\ \mathrm{m}$ from the Sun. What is the shape of its wavefront at the window, and why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "far" } },
      options: [
        { key: "A", text: t`Plane: so far from the Sun, the small patch of a huge sphere that reaches the window is flat`, correct: true, value: "plane_patch" },
        { key: "B", text: t`Spherical: a wavefront keeps the curvature it had close to the Sun`, correct: false, misconceptionId: "C01-M3", value: "sphere_kept" },
        { key: "C", text: t`Plane: the Sun's disc is a broad, flat source, and the wavefront copies its shape`, correct: false, misconceptionId: "C01-M4", value: "plane_flat_disc" },
        { key: "D", text: t`Plane: the rays of sunlight are parallel, and a wavefront runs along the rays`, correct: false, misconceptionId: "C01-M1", value: "plane_rays_along" },
      ],
      solution: {
        steps: [
          t`Near the Sun its wavefront is spherical; its radius grows as it travels, so its curvature falls.`,
          t`At the Earth the radius is $1.5 \times 10^{11}\ \mathrm{m}$: a small window receives a nearly flat patch.`,
          t`So the wavefront is plane, and its rays, the normals, are parallel.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`What are the shapes of the wavefronts close to a point source, close to a line source (a long, narrow lit slit), and very far from a point source, in that order?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "shapes" } },
      options: [
        { key: "A", text: t`Spherical, cylindrical, plane`, correct: true, value: "sph_cyl_plane" },
        { key: "B", text: t`Spherical, spherical, plane`, correct: false, misconceptionId: "C01-M2", value: "sph_sph_plane" },
        { key: "C", text: t`Spherical, cylindrical, spherical`, correct: false, misconceptionId: "C01-M3", value: "sph_cyl_sph" },
        { key: "D", text: t`Spherical, plane, plane`, correct: false, misconceptionId: "C01-M4", value: "sph_plane_plane" },
      ],
      solution: {
        steps: [
          t`Close to a point source, points at the same distance are in the same phase: spheres.`,
          t`Close to a line source, points at the same distance from the line are in phase: cylinders.`,
          t`Far from a point source, a small patch of a huge sphere is flat: plane.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Light travels at speed $v$ in a medium. Which statement describes Huygens' construction of the next wavefront?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "huygens" } },
      options: [
        { key: "A", text: t`Every point sends out wavelets at speed $v$; their common tangents ahead and behind are two new wavefronts`, correct: false, misconceptionId: "C01-M5", value: "two_ways" },
        { key: "B", text: t`Every point of the wavefront sends out wavelets at speed $c$; their forward common tangent is the new wavefront`, correct: false, misconceptionId: "C01-M9", value: "speed_c" },
        { key: "C", text: t`Every point of the wavefront sends out wavelets at speed $v$; their forward common tangent is the new wavefront`, correct: true, value: "forward_v" },
        { key: "D", text: t`Objects lit by the wave reflect light, and the reflected light forms the new wavefront`, correct: false, misconceptionId: "C01-M8", value: "reflectors" },
      ],
      solution: {
        steps: [
          t`Every point on a wavefront is a secondary source; its wavelets spread at the speed $v$ of the medium.`,
          t`Only the forward envelope, the common tangent in front, is the new wavefront; no wave goes back.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`A point source in glass, where light travels at $2.0 \times 10^{8}\ \mathrm{m/s}$, sends out a spherical wavefront. At one instant its radius is $0.45\ \mathrm{m}$. By Huygens' construction, what is its radius $1.5\ \mathrm{ns}$ later?`,
      verify: { kind: "value", inputs: { R: "0.45", v: "2*10**8", t_ns: "1.5" }, params: { ask: "radius" } },
      options: [
        { key: "A", text: t`$0.75\ \mathrm{m}$`, correct: true, value: "0.750000000000000" },
        { key: "B", text: t`$0.9\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M9", value: "0.900000000000000" },
        { key: "C", text: t`$0.15\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M5", value: "0.150000000000000" },
        { key: "D", text: t`$0.3\ \mathrm{m}$`, correct: false, misconceptionId: "C01-M10", value: "0.300000000000000" },
      ],
      solution: {
        steps: [
          t`Each wavelet grows to radius $vt = 2.0 \times 10^{8} \times 1.5 \times 10^{-9}$ $= 0.30\ \mathrm{m}$.`,
          t`Their forward envelope is a sphere $0.30\ \mathrm{m}$ further out.`,
          t`New radius $= 0.45 + 0.30 = 0.75\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.2 (i)" },
      stem: t`The Moon looks bright in the night sky, yet it is called a **secondary source** of light. Why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "moon" } },
      options: [
        { key: "A", text: t`It gives out no light of its own: it only reflects the sunlight that falls on it`, correct: true, value: "reflects" },
        { key: "B", text: t`It is not: it shines brightly, so it is a primary source`, correct: false, misconceptionId: "C01-M6", value: "primary_bright" },
        { key: "C", text: t`It is cold, and only a hot body can give out light of its own`, correct: false, misconceptionId: "C01-M7", value: "cold" },
        { key: "D", text: t`Every point of its surface sends out Huygens' secondary wavelets`, correct: false, misconceptionId: "C01-M8", value: "wavelets" },
      ],
      solution: {
        steps: [
          t`A primary source gives out light of its own; a secondary source only reflects or scatters light it receives.`,
          t`The Moon gives out no light of its own: we see it by the sunlight it reflects, so it is secondary.`,
        ],
      },
    },
  ],
};
