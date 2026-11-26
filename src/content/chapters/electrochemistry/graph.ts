import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Electrochemistry prerequisite graph (Balbharati Chemistry Std XII, Ch.5): conductance of solutions, Kohlrausch's law, electrolysis and Faraday's laws, galvanic cells, electrode potentials, the Nernst equation and commercial cells.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/electrochemistry-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Conductance
  {
    id: "C01", slug: "conductivity", title: "Conductance and conductivity", group: "Conductance", tier: "core",
    oneLiner: t`Conductance $G = 1/R$; conductivity $\kappa = G \times$ cell constant, with cell constant $= l/a$ found from a standard KCl solution`,
    prereqs: [], ext: [], sources: [S("Electric Conduction and Conductance of Solutions")],
  },
  {
    id: "C02", slug: "molar-conductivity", title: "Molar conductivity and dilution", group: "Conductance", tier: "core", visual: true,
    oneLiner: t`$\Lambda = \dfrac{1000\,\kappa}{c}$ in $\Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$; on dilution $\kappa$ falls but $\Lambda$ rises, slowly for strong and sharply for weak electrolytes`,
    prereqs: ["C01"], ext: [], sources: [S("Electric Conduction and Conductance of Solutions")],
  },
  {
    id: "C03", slug: "kohlrausch-law", title: "Kohlrausch's law", group: "Conductance", tier: "core",
    oneLiner: t`$\Lambda_0$ is the sum of the ions' limiting molar conductivities; it gives $\Lambda_0$ of a weak electrolyte and $\alpha = \Lambda / \Lambda_0$`,
    prereqs: ["C02"], ext: [], sources: [S("Electric Conduction and Conductance of Solutions")],
  },
  // Electrolysis
  {
    id: "C04", slug: "electrolysis", title: "Electrolytic cells", group: "Electrolysis", tier: "core",
    oneLiner: t`In electrolysis, reduction happens at the cathode and oxidation at the anode; molten and aqueous NaCl give different products`,
    prereqs: [], ext: ["oxidation and reduction (Std XI Chemistry)"], sources: [S("Electrolytic Cell")],
  },
  {
    id: "C05", slug: "faraday-laws", title: "Quantitative electrolysis", group: "Electrolysis", tier: "core",
    oneLiner: t`Charge $Q = It$; moles of electrons $= Q/F$ with $F = 96500\ \mathrm{C}$; mass deposited $= \dfrac{Q}{F} \times \dfrac{M}{n}$`,
    prereqs: ["C04"], ext: [], sources: [S("Electrolytic Cell")],
  },
  // Galvanic cells
  {
    id: "C06", slug: "galvanic-cells", title: "Galvanic cells", group: "Galvanic cells", tier: "core",
    oneLiner: t`A galvanic cell turns a spontaneous redox reaction into electricity: oxidation at the anode (−), reduction at the cathode (+), a salt bridge, and the notation $\ce{Zn | Zn^2+ || Cu^2+ | Cu}$`,
    prereqs: [], ext: ["oxidation and reduction (Std XI Chemistry)"], sources: [S("Galvanic or Voltaic Cell"), S("Reference Electrodes")],
  },
  {
    id: "C07", slug: "electrode-potentials", title: "Electrode potentials and the series", group: "Galvanic cells", tier: "core",
    oneLiner: t`Standard reduction potentials are measured against the hydrogen electrode; $E^0_{cell} = E^0_{cathode} - E^0_{anode}$; a higher $E^0$ means a stronger oxidising agent`,
    prereqs: ["C06"], ext: [], sources: [S("Electrode Potential and Cell Potential"), S("Electrochemical Series")],
  },
  {
    id: "C08", slug: "nernst-equation", title: "The Nernst equation", group: "Galvanic cells", tier: "core",
    oneLiner: t`At 298 K, $E_{cell} = E^0_{cell} - \dfrac{0.0592}{n}\log_{10} Q$ for nonstandard concentrations`,
    prereqs: ["C07"], ext: ["logarithms"], sources: [S("Electrode Potential and Cell Potential")],
  },
  {
    id: "C09", slug: "cell-gibbs-energy", title: "Cell potential, ΔG and K", group: "Galvanic cells", tier: "core",
    oneLiner: t`$\Delta G^0 = -nFE^0_{cell}$ and $\log_{10} K = \dfrac{nE^0_{cell}}{0.0592}$ at 298 K`,
    prereqs: ["C07"], ext: ["Gibbs energy and equilibrium (Chemical Thermodynamics)"], sources: [S("Thermodynamics of Galvanic Cells")],
  },
  {
    id: "C10", slug: "commercial-cells", title: "Batteries and fuel cells", group: "Galvanic cells", tier: "core",
    oneLiner: t`The dry cell, lead storage battery (discharging and recharging), NICAD cell and $\ce{H2}$–$\ce{O2}$ fuel cell, by their electrode reactions`,
    prereqs: ["C06"], ext: [], sources: [S("Galvanic Cells in Day-to-Day Life and Fuel Cells")],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C11", slug: "corrosion", title: "Corrosion", group: "Corrosion", tier: "core",
    oneLiner: t`Rusting is a cell on iron: Fe is oxidised at anodic spots, $\ce{O2}$ reduced at cathodic ones; paint, galvanising and a sacrificial metal prevent it`,
    prereqs: ["C07"], ext: [],
    sources: ["jee-main/electrochemistry#Batteries, Fuel Cells and Corrosion", "nda/metals-and-non-metals#Corrosion and Its Prevention"],
  },
];
