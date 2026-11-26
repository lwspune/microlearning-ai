import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Optics prerequisite graph (Balbharati Physics Std XI, Ch.9): the nature of light, mirrors, refraction and total internal reflection, lenses, prisms and dispersion, lens defects and optical instruments.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/optics-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Light
  {
    id: "C01", slug: "nature-of-light", title: "The nature of light", group: "Light", tier: "core",
    oneLiner: t`Light behaves as a wave and as a stream of photons; it travels at $c = 3 \times 10^{8}\ \mathrm{m/s}$ in vacuum and slower in matter`,
    prereqs: [], ext: [], sources: [S("Nature of Light")],
  },
  // Reflection
  {
    id: "C02", slug: "mirrors", title: "Reflection and the mirror equation", group: "Reflection", tier: "core", visual: true,
    oneLiner: t`With the Cartesian sign convention a curved mirror obeys $\dfrac{1}{v} + \dfrac{1}{u} = \dfrac{1}{f}$, $f = \dfrac{R}{2}$, and magnifies by $m = -\dfrac{v}{u}$`,
    prereqs: [], ext: [], sources: [S("Reflection from Plane and Curved Mirrors"), S("Cartesian Sign Convention")],
  },
  // Refraction
  {
    id: "C03", slug: "refraction", title: "Refraction", group: "Refraction", tier: "core", visual: true,
    oneLiner: t`Snell's law $n_1\sin i = n_2\sin r$; a denser medium bends light towards the normal and makes things look shallower`,
    prereqs: ["C01"], ext: [], sources: [S("Refraction")],
  },
  {
    id: "C04", slug: "total-internal-reflection", title: "Total internal reflection", group: "Refraction", tier: "core", visual: true,
    oneLiner: t`Beyond the critical angle, $\sin C = \dfrac{1}{n}$, light going into a rarer medium is wholly reflected, as in optical fibres`,
    prereqs: ["C03"], ext: [], sources: [S("Total Internal Reflection")],
  },
  // Lenses
  {
    id: "C05", slug: "lenses", title: "Spherical surfaces and lenses", group: "Lenses", tier: "core", visual: true,
    oneLiner: t`A thin lens obeys $\dfrac{1}{v} - \dfrac{1}{u} = \dfrac{1}{f}$, with $\dfrac{1}{f} = (n - 1)\left(\dfrac{1}{R_1} - \dfrac{1}{R_2}\right)$ and power $P = \dfrac{1}{f}$`,
    prereqs: ["C02", "C03"], ext: [], sources: [S("Refraction at a Spherical Surface and Lenses")],
  },
  {
    id: "C06", slug: "prism-dispersion", title: "Prisms and dispersion", group: "Lenses", tier: "core", visual: true,
    oneLiner: t`A prism deviates light by $\delta = (n - 1)A$ for small $A$ and splits white light, since $n$ depends on colour; rainbows follow`,
    prereqs: ["C03"], ext: [], sources: [S("Dispersion of Light and Prisms"), S("Natural Phenomena due to Sunlight")],
  },
  // Instruments
  {
    id: "C07", slug: "lens-defects", title: "Defects of lenses", group: "Instruments", tier: "core",
    oneLiner: t`Spherical aberration blurs rays far from the axis; chromatic aberration focuses colours at different points, cured by an achromatic doublet`,
    prereqs: ["C05", "C06"], ext: [], sources: [S("Defects of Lenses")],
  },
  {
    id: "C08", slug: "optical-instruments", title: "Optical instruments", group: "Instruments", tier: "core", visual: true,
    oneLiner: t`A simple microscope magnifies $1 + \dfrac{D}{f}$; compound microscopes and telescopes multiply the magnifications of two lenses`,
    prereqs: ["C05"], ext: [], sources: [S("Optical Instruments")],
  },
];
