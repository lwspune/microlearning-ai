import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Gravitation prerequisite graph (Balbharati Physics Std XI, Ch.5): Kepler's laws, Newton's law of gravitation, g and its variation, potential energy, satellites and escape.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/gravitation-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // The law of gravitation
  {
    id: "C01", slug: "keplers-laws", title: "Kepler's laws", group: "The law of gravitation", tier: "core", visual: true,
    oneLiner: t`Planets move in ellipses with the Sun at a focus, sweep equal areas in equal times, and have $T^2 \propto a^3$`,
    prereqs: [], ext: [], sources: [S("Kepler's Laws")],
  },
  {
    id: "C02", slug: "universal-gravitation", title: "Newton's law of gravitation", group: "The law of gravitation", tier: "core",
    oneLiner: t`Every two masses attract with $F = \dfrac{Gm_1m_2}{r^2}$; $G = 6.67 \times 10^{-11}\ \mathrm{N\,m^2/kg^2}$, first measured by Cavendish`,
    prereqs: [], ext: [], sources: [S("Universal Law of Gravitation"), S("Measurement of the Gravitational Constant (G)")],
  },
  // Gravity near the Earth
  {
    id: "C03", slug: "acceleration-g", title: "Acceleration due to gravity", group: "Gravity near the Earth", tier: "core",
    oneLiner: t`At the Earth's surface $g = \dfrac{GM}{R^2}$; it gives the Earth's mass and density from $g$, $G$ and $R$`,
    prereqs: ["C02"], ext: [], sources: [S("Acceleration due to Gravity")],
  },
  {
    id: "C04", slug: "variation-g", title: "How g varies", group: "Gravity near the Earth", tier: "core",
    oneLiner: t`$g$ falls with height, $g_h \approx g\left(1 - \dfrac{2h}{R}\right)$, and with depth, $g_d = g\left(1 - \dfrac{d}{R}\right)$, and is least at the equator, where the Earth's spin reduces it`,
    prereqs: ["C03"], ext: [], sources: [S("Variation in the Acceleration due to Gravity")],
  },
  // Energy in gravity
  {
    id: "C05", slug: "gravitational-potential", title: "Gravitational potential and potential energy", group: "Energy in gravity", tier: "core",
    oneLiner: t`$U = -\dfrac{GMm}{r}$ and $V = -\dfrac{GM}{r}$, zero at infinity; near the surface $\Delta U = mgh$`,
    prereqs: ["C02"], ext: [], sources: [S("Gravitational Potential and Potential Energy")],
  },
  {
    id: "C06", slug: "satellites", title: "Earth satellites", group: "Energy in gravity", tier: "core", visual: true,
    oneLiner: t`A satellite at radius $r$ moves at $v = \sqrt{\dfrac{GM}{r}}$ with period $2\pi\sqrt{\dfrac{r^3}{GM}}$; a geostationary one has a period of a day`,
    prereqs: ["C03"], ext: ["uniform circular motion (Motion in a Plane, Ch.3)"], sources: [S("Earth Satellites")],
  },
  {
    id: "C07", slug: "escape-binding", title: "Escape velocity, binding energy and weightlessness", group: "Energy in gravity", tier: "core",
    oneLiner: t`Escape velocity $\sqrt{2gR}$; an orbiting satellite's binding energy is $\dfrac{GMm}{2r}$; in free fall a body feels weightless`,
    prereqs: ["C05", "C06"], ext: [], sources: [S("Earth Satellites")],
  },
];
