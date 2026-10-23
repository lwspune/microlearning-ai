import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Kinetic Theory of Gases and Radiation prerequisite graph (Balbharati Physics Std XII, Ch.3): the gas laws
 * from molecular motion, specific heats, and heat radiation.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/kinetic-theory-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Gases
  {
    id: "C01", slug: "ideal-gas", title: "Ideal and real gases", group: "Gases", tier: "core",
    oneLiner: t`An ideal gas obeys $PV = nRT$ exactly; real gases come close at low pressure and high temperature`,
    prereqs: [], ext: ["gas laws (Std XI Chemistry)"], sources: [S("Behaviour of Gases, Ideal and Real Gas")],
  },
  {
    id: "C02", slug: "mean-free-path", title: "Mean free path", group: "Gases", tier: "core",
    oneLiner: t`A molecule travels on average $\lambda = \dfrac{1}{\sqrt{2}\,\pi d^2n}$ between collisions`,
    prereqs: [], ext: [], sources: [S("Mean Free Path and Pressure of an Ideal Gas")],
  },
  {
    id: "C03", slug: "gas-pressure", title: "Pressure of an ideal gas", group: "Gases", tier: "core", visual: true,
    oneLiner: t`Molecules hitting the walls give $P = \dfrac{1}{3}\dfrac{N}{V}mv_{rms}^2 = \dfrac{1}{3}\rho v_{rms}^2$`,
    prereqs: ["C01"], ext: ["impulse and momentum (Std XI Physics)"], sources: [S("Mean Free Path and Pressure of an Ideal Gas")],
  },
  {
    id: "C04", slug: "rms-speed", title: "Root mean square speed", group: "Gases", tier: "core",
    oneLiner: t`$v_{rms} = \sqrt{\dfrac{3RT}{M}}$: it grows as $\sqrt{T}$ and falls as $\dfrac{1}{\sqrt{M}}$`,
    prereqs: ["C03"], ext: [], sources: [S("RMS Speed and Interpretation of Temperature")],
  },
  {
    id: "C05", slug: "kinetic-energy-temperature", title: "Kinetic energy and temperature", group: "Gases", tier: "core",
    oneLiner: t`Each molecule has average kinetic energy $\dfrac{3}{2}k_BT$, so temperature measures molecular motion`,
    prereqs: ["C04"], ext: [], sources: [S("RMS Speed and Interpretation of Temperature")],
  },
  {
    id: "C06", slug: "equipartition", title: "Degrees of freedom and equipartition", group: "Gases", tier: "core",
    oneLiner: t`Energy is shared equally, $\dfrac{1}{2}k_BT$ for each degree of freedom: 3 for a monatomic gas, 5 for a diatomic one`,
    prereqs: ["C05"], ext: [], sources: [S("Law of Equipartition of Energy and Degrees of Freedom")],
  },
  {
    id: "C07", slug: "specific-heats", title: "Specific heats and Mayer's relation", group: "Gases", tier: "core",
    oneLiner: t`$C_P - C_V = R$ and $\gamma = \dfrac{C_P}{C_V}$: $\dfrac{5}{3}$ for a monatomic gas, $\dfrac{7}{5}$ for a diatomic one`,
    prereqs: ["C06"], ext: ["specific heat capacity (Std XI Physics)"], sources: [S("Specific Heat Capacity and Mayer's Relation")],
  },

  // Radiation
  {
    id: "C08", slug: "absorption-reflection-transmission", title: "Absorption, reflection and transmission", group: "Radiation", tier: "core",
    oneLiner: t`Radiation falling on a body is absorbed, reflected or transmitted: $a + r + t = 1$; a perfect blackbody has $a = 1$`,
    prereqs: [], ext: [], sources: [S("Absorption, Reflection and Transmission of Heat Radiation"), S("Perfect Blackbody and Emissivity")],
  },
  {
    id: "C09", slug: "kirchhoff-law", title: "Emissive power and Kirchhoff's law", group: "Radiation", tier: "core",
    oneLiner: t`A body's coefficient of emission equals its coefficient of absorption: good absorbers are good emitters`,
    prereqs: ["C08"], ext: [], sources: [S("Kirchhoff's Law of Heat Radiation"), S("Perfect Blackbody and Emissivity")],
  },
  {
    id: "C10", slug: "wien-law", title: "Blackbody spectrum and Wien's law", group: "Radiation", tier: "core", visual: true,
    oneLiner: t`A hotter blackbody's spectrum peaks at a shorter wavelength: $\lambda_{max}T = b$`,
    prereqs: ["C08"], ext: [], sources: [S("Spectral Distribution and Wien's Displacement Law")],
  },
  {
    id: "C11", slug: "stefan-boltzmann", title: "Stefan–Boltzmann law", group: "Radiation", tier: "core",
    oneLiner: t`A body radiates $e\sigma T^4$ per unit area, and loses heat at $e\sigma A\left(T^4 - T_0^4\right)$ to colder surroundings`,
    prereqs: ["C09"], ext: [], sources: [S("Perfect Blackbody and Emissivity")],
  },
  {
    id: "C12", slug: "newtons-law-of-cooling", title: "Newton's law of cooling", group: "Radiation", tier: "core",
    oneLiner: t`For small temperature differences, a body cools at a rate proportional to its excess temperature over the surroundings`,
    prereqs: ["C11"], ext: [], sources: [S("Perfect Blackbody and Emissivity")],
  },
];
