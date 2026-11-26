import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Light shows interference, like ripples on water. Yet it can also knock electrons out of a metal one by one, like tiny bullets. Is light a wave or a stream of particles?`,
    reveal: t`Both. Light is a stream of **photons**, energy-carrying particles, whose motion is guided by the rules of **electromagnetic waves**: it has a **dual nature**.`,
  },
  explanation: {
    intuition: [
      t`Light was first thought of as radiant energy, then shown to be an **electromagnetic (EM) wave**.`,
      t`Later, quantum theory showed that light also comes in packets of energy called **photons**.`,
      t`So light has a **dual nature**: photons whose motion follows the rules of EM waves.`,
      t`In vacuum light travels at $c = 3 \times 10^{8}\ \mathrm{m/s}$, the fastest speed there is.`,
      t`In a transparent material, such as glass or water, light travels more slowly.`,
    ],
    formal: [
      {
        title: "Wave and particle pictures",
        points: [
          t`**Wave optics** explains interference, diffraction and polarisation of light.`,
          t`The **particle (photon) picture** explains the photoelectric effect and the emission of spectral lines.`,
          t`The photon picture is needed wherever light interacts with matter.`,
        ],
      },
      {
        title: "Ray optics",
        points: [
          t`A **ray** is a direction along which light energy travels from a source.`,
          t`A medium is **homogeneous** when its properties are the same everywhere in it.`,
          t`Ray optics assumes light travels in straight lines in a homogeneous medium.`,
          t`It also assumes rays crossing at a point go on undisturbed, and that light obeys the laws of reflection and refraction.`,
          t`Ray optics explains reflection, refraction and images formed by mirrors, lenses and prisms.`,
        ],
      },
      {
        title: "Refractive index",
        points: [
          t`The **absolute refractive index** of a medium is $n = \dfrac{c}{v}$, where $v$ is the speed of light in it.`,
          t`$n$ is a ratio of two speeds, so it has no unit; for every material $n > 1$.`,
          t`A medium with a larger $n$ is **optically denser**: light travels more slowly in it.`,
          t`Optically denser need not mean heavier: kerosene is optically denser than water, yet floats on it.`,
          t`Light takes time $t = \dfrac{d}{v}$ $= \dfrac{nd}{c}$ to cross a thickness $d$ of the medium.`,
        ],
      },
    ],
    worked: {
      prompt: t`A glass block of refractive index $1.6$ is $12\ \mathrm{cm}$ long. Find the speed of light in it, and the time light takes to travel its length.`,
      steps: [
        t`$v = \dfrac{c}{n}$ $= \dfrac{3 \times 10^{8}}{1.6}$ $= 1.875 \times 10^{8}\ \mathrm{m/s}$.`,
        t`The length in metres: $d = 12\ \mathrm{cm}$ $= 0.12\ \mathrm{m}$.`,
        t`$t = \dfrac{d}{v}$ $= \dfrac{0.12}{1.875 \times 10^{8}}$ $= 6.4 \times 10^{-10}\ \mathrm{s}$ $= 640\ \mathrm{ps}$.`,
      ],
      answer: t`$1.875 \times 10^{8}\ \mathrm{m/s}$; $640\ \mathrm{ps}$`,
    },
    visualSpec: t`Send a pulse of light through slabs of air, water and glass side by side and watch it fall behind in the denser ones.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks light is only a wave.",
      remediation: "The wave picture explains interference, but light also comes in photons: it has a dual nature.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks light is only a stream of material particles (corpuscles).",
      remediation: "Photons are not tiny lumps of matter: their motion follows the rules of EM waves.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks ray optics explains every property of light.",
      remediation: "Rays describe straight-line travel, reflection and refraction; interference needs waves, the photoelectric effect photons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Thinks light travels faster in an optically denser medium, $v = cn$.`,
      remediation: t`$n = \dfrac{c}{v}$, so $v = \dfrac{c}{n}$: the larger $n$, the slower the light.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Thinks light keeps its vacuum speed $c$ inside a material.`,
      remediation: t`Only in vacuum is the speed $c$; in a medium it is $\dfrac{c}{n}$, smaller.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Leaves the thickness in millimetres.",
      remediation: t`Change $3\ \mathrm{mm}$ to $3 \times 10^{-3}\ \mathrm{m}$ before dividing by a speed in $\mathrm{m/s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Swaps the phenomena explained by the wave and the particle pictures.",
      remediation: "Interference and diffraction are wave effects; the photoelectric effect is a photon effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks optically denser means physically denser.",
      remediation: t`Optical density is about the speed of light, measured by $n$, not about mass per volume.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks light goes straight on even across the boundary of two media.",
      remediation: "Light travels straight only within one homogeneous medium; at a boundary it refracts.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks crossing rays disturb each other.",
      remediation: "Ray optics assumes rays crossing at a point carry on along their own paths.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks ray optics lets light bend round obstacles.",
      remediation: "Bending round edges is diffraction, a wave effect; ray optics assumes straight-line travel.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.1 (i)" },
      stem: t`As per our present understanding, light consists of`,
      verify: { kind: "value", inputs: {  }, params: { ask: "consists" } },
      options: [
        { key: "A", text: t`photons, guided by the rules of waves`, correct: true, value: "photons_waves" },
        { key: "B", text: t`waves only`, correct: false, misconceptionId: "C01-M1", value: "waves" },
        { key: "C", text: t`tiny material particles (corpuscles) only`, correct: false, misconceptionId: "C01-M2", value: "corpuscles" },
        { key: "D", text: t`rays that travel in straight lines`, correct: false, misconceptionId: "C01-M3", value: "rays" },
      ],
      solution: {
        steps: [
          t`Light behaves as an EM wave and also as a stream of photons.`,
          t`So light consists of photons, guided by the rules of waves.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.2 (i)" },
      stem: t`Interference and diffraction of light are explained by one picture of light, and the photoelectric effect by another. Which are they, in that order?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "explain" } },
      options: [
        { key: "A", text: t`the wave nature; the photon (particle) nature`, correct: true, value: "wave_photon" },
        { key: "B", text: t`the photon (particle) nature; the wave nature`, correct: false, misconceptionId: "C01-M7", value: "photon_wave" },
        { key: "C", text: t`the wave nature; the wave nature`, correct: false, misconceptionId: "C01-M1", value: "wave_wave" },
        { key: "D", text: t`ray optics; ray optics`, correct: false, misconceptionId: "C01-M3", value: "ray_ray" },
      ],
      solution: {
        steps: [
          t`Interference and diffraction need light to be a wave.`,
          t`The photoelectric effect, where light acts on matter, needs photons.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.2 (vii)" },
      stem: t`Kerosene $(n = 1.44)$ floats on water $(n = 1.33)$. Which of the two is optically denser?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "denser" } },
      options: [
        { key: "A", text: t`Water: light travels faster in it`, correct: false, misconceptionId: "C01-M4", value: "water_faster" },
        { key: "B", text: t`Neither: light travels at the same speed $c$ in both`, correct: false, misconceptionId: "C01-M5", value: "neither" },
        { key: "C", text: t`Kerosene: its refractive index is larger, so light is slower in it`, correct: true, value: "kerosene" },
        { key: "D", text: t`Water: it is the heavier liquid, since it sinks below kerosene`, correct: false, misconceptionId: "C01-M8", value: "water_heavier" },
      ],
      solution: {
        steps: [
          t`The optically denser medium has the larger refractive index, so light is slower in it.`,
          t`$1.44 > 1.33$, so kerosene is optically denser, though it is the lighter liquid.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Solved Ex.9.1" },
      stem: t`The glass of a spectacle lens is $3\ \mathrm{mm}$ thick, and its refractive index is $1.5$. How long does light take to cross it? (Take $c = 3 \times 10^{8}\ \mathrm{m/s}$; $1\ \mathrm{ps} = 10^{-12}\ \mathrm{s}$.)`,
      verify: { kind: "value", inputs: { d_mm: "3", n: "3/2" }, params: { ask: "time" } },
      options: [
        { key: "A", text: t`$15\ \mathrm{ps}$`, correct: true, value: "15" },
        { key: "B", text: t`$6.67\ \mathrm{ps}$`, correct: false, misconceptionId: "C01-M4", value: "6.67000000000000" },
        { key: "C", text: t`$10\ \mathrm{ps}$`, correct: false, misconceptionId: "C01-M5", value: "10" },
        { key: "D", text: t`$15000\ \mathrm{ps}$`, correct: false, misconceptionId: "C01-M6", value: "15000" },
      ],
      solution: {
        steps: [
          t`$v = \dfrac{c}{n}$ $= \dfrac{3 \times 10^{8}}{1.5}$ $= 2 \times 10^{8}\ \mathrm{m/s}$; $d = 3 \times 10^{-3}\ \mathrm{m}$.`,
          t`$t$ $= \dfrac{3 \times 10^{-3}}{2 \times 10^{8}}$ $= 1.5 \times 10^{-11}\ \mathrm{s}$ $= 15\ \mathrm{ps}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/optics-11-phy/Ex Q.2 (ii)" },
      stem: t`Ray optics rests on a few assumptions about light. Which of these is one of them?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rays" } },
      options: [
        { key: "A", text: t`In a homogeneous medium light travels in straight lines, and rays crossing at a point go on undisturbed`, correct: true, value: "straight_cross" },
        { key: "B", text: t`Light travels in one straight line even when it passes from one medium into another`, correct: false, misconceptionId: "C01-M9", value: "straight_always" },
        { key: "C", text: t`Two rays that cross at a point scatter each other off their paths`, correct: false, misconceptionId: "C01-M10", value: "rays_scatter" },
        { key: "D", text: t`Light bends round the edges of every obstacle in its path`, correct: false, misconceptionId: "C01-M11", value: "bends_round" },
      ],
      solution: {
        steps: [
          t`Ray optics assumes straight-line travel only inside one homogeneous medium.`,
          t`It also assumes that rays crossing at a point go on undisturbed.`,
        ],
      },
    },
  ],
};
