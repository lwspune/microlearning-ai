import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Chemical Kinetics prerequisite graph (Balbharati Chemistry Std XII, Ch.6): rate, rate laws and order, molecularity, integrated rate laws and half life, collision theory, the Arrhenius equation and catalysis.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/kinetics-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Rate
  {
    id: "C01", slug: "rate-of-reaction", title: "Rate of a reaction", group: "Rate", tier: "core",
    oneLiner: t`Rate is the change in concentration per unit time, $-\dfrac{1}{a}\dfrac{d[\ce{A}]}{dt}$ for each species; average and instantaneous rates`,
    prereqs: [], ext: [], sources: [S("Rate of Reaction")],
  },
  {
    id: "C02", slug: "rate-law-order", title: "Rate law and order", group: "Rate", tier: "core",
    oneLiner: t`Rate $= k[\ce{A}]^x[\ce{B}]^y$ with orders found by experiment, not from the equation; the order is $x + y$`,
    prereqs: ["C01"], ext: [], sources: [S("Rate of Reaction and Reactant Concentration")],
  },
  {
    id: "C03", slug: "molecularity-mechanism", title: "Molecularity and mechanism", group: "Rate", tier: "core",
    oneLiner: t`An elementary step's molecularity is the number of particles colliding; the slowest step decides the rate law; order and molecularity differ`,
    prereqs: ["C02"], ext: [], sources: [S("Molecularity of Elementary Reactions")],
  },
  // Integrated rate laws
  {
    id: "C04", slug: "first-order-reactions", title: "First order integrated rate law", group: "Integrated rate laws", tier: "core", visual: true,
    oneLiner: t`$k = \dfrac{2.303}{t}\log_{10}\dfrac{[\ce{A}]_0}{[\ce{A}]_t}$; $\ln[\ce{A}]$ against $t$ is a straight line of slope $-k$`,
    prereqs: ["C02"], ext: ["logarithms"], sources: [S("Integrated Rate Law")],
  },
  {
    id: "C05", slug: "zero-order-reactions", title: "Zero order reactions", group: "Integrated rate laws", tier: "core", visual: true,
    oneLiner: t`$[\ce{A}]_t = [\ce{A}]_0 - kt$: the concentration falls linearly, and $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$`,
    prereqs: ["C02"], ext: [], sources: [S("Integrated Rate Law")],
  },
  {
    id: "C06", slug: "half-life", title: "Half life of first order reactions", group: "Integrated rate laws", tier: "core",
    oneLiner: t`$t_{1/2} = \dfrac{0.693}{k}$, independent of the starting concentration; the time for any fraction to react follows from it`,
    prereqs: ["C04"], ext: [], sources: [S("Integrated Rate Law")],
  },
  {
    id: "C07", slug: "units-pseudo-first-order", title: "Units of k and pseudo first order", group: "Integrated rate laws", tier: "core",
    oneLiner: t`The units of $k$ are $\mathrm{mol^{1-n}\,L^{n-1}\,s^{-1}}$ for order $n$; a reaction with one reactant in large excess is pseudo first order`,
    prereqs: ["C04", "C05"], ext: [], sources: [S("Integrated Rate Law")],
  },
  // Temperature and catalysts
  {
    id: "C08", slug: "collision-theory", title: "Collision theory and activation energy", group: "Temperature and catalysts", tier: "core", visual: true,
    oneLiner: t`Only collisions with energy at least $E_a$ and the right orientation react; the energy profile shows $E_a$ and $\Delta H$`,
    prereqs: ["C01"], ext: [], sources: [S("Collision Theory of Bimolecular Reactions")],
  },
  {
    id: "C09", slug: "arrhenius-equation", title: "The Arrhenius equation", group: "Temperature and catalysts", tier: "core",
    oneLiner: t`$k = Ae^{-E_a/RT}$, so $\log_{10}\dfrac{k_2}{k_1} = \dfrac{E_a}{2.303R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)$`,
    prereqs: ["C02", "C08"], ext: ["logarithms"], sources: [S("Temperature Dependence of Reaction Rates")],
  },
  {
    id: "C10", slug: "catalysis", title: "Effect of a catalyst", group: "Temperature and catalysts", tier: "core", visual: true,
    oneLiner: t`A catalyst gives a path of lower $E_a$, speeding both directions; it changes neither $\Delta H$ nor the equilibrium constant`,
    prereqs: ["C08"], ext: [], sources: [S("Effect of a Catalyst on the Rate of Reaction")],
  },
];
