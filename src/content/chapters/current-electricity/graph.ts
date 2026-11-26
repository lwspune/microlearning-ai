import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Current Electricity prerequisite graph (Balbharati Physics Std XII, Ch.9): Kirchhoff's laws, networks, the
 * Wheatstone and metre bridges, the potentiometer, and converting a galvanometer into an ammeter or voltmeter.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/current-electricity-12-phy#${sub}`;

export const graph: GraphNode[] = [
  // Kirchhoff's laws
  {
    id: "C01", slug: "junction-law", title: "Kirchhoff's current law", group: "Kirchhoff's laws", tier: "core",
    oneLiner: t`At any junction the currents in equal the currents out, $\sum I = 0$: charge is conserved`,
    prereqs: [], ext: ["Ohm's law and electric current (Std XI Physics)"], sources: [S("Kirchhoff's Laws of Electrical Networks")],
  },
  {
    id: "C02", slug: "loop-law", title: "Kirchhoff's voltage law", group: "Kirchhoff's laws", tier: "core", visual: true,
    oneLiner: t`Round any closed loop, $\sum IR = \sum \varepsilon$: energy is conserved`,
    prereqs: ["C01"], ext: [], sources: [S("Kirchhoff's Laws of Electrical Networks")],
  },
  {
    id: "C03", slug: "resistor-networks", title: "Equivalent resistance of networks", group: "Kirchhoff's laws", tier: "adv",
    oneLiner: t`Reduce a network step by step, using symmetry, loops and repeating patterns`,
    prereqs: [], ext: ["resistors in series and parallel (Std XI Physics)"], sources: [S("Kirchhoff's Laws of Electrical Networks")],
  },
  // Bridges
  {
    id: "C04", slug: "wheatstone-bridge", title: "Wheatstone's network", group: "Bridges", tier: "core", visual: true,
    oneLiner: t`No current flows through the galvanometer when $\dfrac{P}{Q} = \dfrac{R}{S}$`,
    prereqs: ["C02"], ext: [], sources: [S("Wheatstone Bridge and Metre Bridge")],
  },
  {
    id: "C05", slug: "metre-bridge", title: "The metre bridge", group: "Bridges", tier: "core",
    oneLiner: t`With the null point at $l$ cm, $\dfrac{X}{R} = \dfrac{l}{100 - l}$; Kelvin's method finds a galvanometer's resistance`,
    prereqs: ["C04"], ext: [], sources: [S("Wheatstone Bridge and Metre Bridge")],
  },
  // Potentiometer
  {
    id: "C06", slug: "potentiometer", title: "The potentiometer", group: "Potentiometer", tier: "core",
    oneLiner: t`A steady current gives the wire a uniform potential gradient $K = \dfrac{V}{L}$; at balance no current is drawn, so $\varepsilon = Kl$`,
    prereqs: [], ext: ["Ohm's law and resistivity (Std XI Physics)"], sources: [S("Potentiometer")],
  },
  {
    id: "C07", slug: "compare-emfs", title: "Comparing emfs with a potentiometer", group: "Potentiometer", tier: "core",
    oneLiner: t`$\dfrac{\varepsilon_1}{\varepsilon_2} = \dfrac{l_1}{l_2}$; with the cells together, $\dfrac{\varepsilon_1 + \varepsilon_2}{\varepsilon_1 - \varepsilon_2} = \dfrac{l_1}{l_2}$`,
    prereqs: ["C06"], ext: [], sources: [S("Potentiometer")],
  },
  {
    id: "C08", slug: "internal-resistance", title: "Internal resistance of a cell", group: "Potentiometer", tier: "core",
    oneLiner: t`Balance the open cell at $l_1$ and the cell across $R$ at $l_2$: $r = R\left(\dfrac{l_1 - l_2}{l_2}\right)$`,
    prereqs: ["C06"], ext: [], sources: [S("Potentiometer")],
  },
  // Meters
  {
    id: "C09", slug: "ammeter", title: "Converting a galvanometer into an ammeter", group: "Meters", tier: "core",
    oneLiner: t`A small shunt $S = \dfrac{GI_g}{I - I_g}$ in parallel carries the rest of the current`,
    prereqs: ["C01"], ext: [], sources: [S("Galvanometer, Ammeter and Voltmeter")],
  },
  {
    id: "C10", slug: "voltmeter", title: "Converting a galvanometer into a voltmeter", group: "Meters", tier: "core",
    oneLiner: t`A large resistance $X = \dfrac{V}{I_g} - G$ in series; an ideal voltmeter has infinite resistance`,
    prereqs: ["C09"], ext: [], sources: [S("Galvanometer, Ammeter and Voltmeter")],
  },
];
