import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Nuclear Chemistry and Radioactivity prerequisite graph (Balbharati Chemistry Std XI, Ch.13): classes of nuclides, nuclear stability, binding energy, modes of decay, the decay law and half life, nuclear reactions and uses of radioisotopes.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/nuclear-chemistry-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Nuclei
  {
    id: "C01", slug: "classes-of-nuclides", title: "Classes of nuclides", group: "Nuclei", tier: "core",
    oneLiner: t`Isotopes (same $Z$), isobars (same $A$), isotones (same $N$) and mirror nuclei (proton and neutron counts swapped)`,
    prereqs: [], ext: ["atomic and mass numbers (Structure of Atom)"], sources: [S("Classification of Nuclides")],
  },
  {
    id: "C02", slug: "nuclear-stability", title: "Nuclear stability", group: "Nuclei", tier: "core",
    oneLiner: t`Stable nuclides lie in a belt of neutron-to-proton ratio near 1 for light and about 1.5 for heavy ones; even-even nuclides are most stable; nuclides above the belt emit $\beta^-$`,
    prereqs: ["C01"], ext: [], sources: [S("Nuclear Stability")],
  },
  {
    id: "C03", slug: "binding-energy", title: "Mass defect and binding energy", group: "Nuclei", tier: "core", visual: true,
    oneLiner: t`A nucleus weighs less than its nucleons; binding energy $= \Delta m \times 931.5\ \mathrm{MeV}$ per u; binding energy per nucleon peaks near iron-56`,
    prereqs: ["C02"], ext: [], sources: [S("Nuclear Stability")],
  },
  // Decay
  {
    id: "C04", slug: "modes-of-decay", title: "Modes of radioactive decay", group: "Decay", tier: "core",
    oneLiner: t`$\alpha$ decay lowers $A$ by 4 and $Z$ by 2, $\beta^-$ raises $Z$ by 1, $\gamma$ changes neither; mass and charge numbers balance in a nuclear equation`,
    prereqs: ["C02"], ext: [], sources: [S("Modes of Decay")],
  },
  {
    id: "C05", slug: "decay-law-half-life", title: "Decay law and half life", group: "Decay", tier: "core",
    oneLiner: t`$N = N_0e^{-\lambda t}$, $t_{1/2} = \dfrac{0.693}{\lambda}$, and $t = \dfrac{2.303}{\lambda}\log_{10}\dfrac{N_0}{N}$; activity in becquerel or curie ($3.7 \times 10^{10}$ Bq)`,
    prereqs: ["C01"], ext: ["logarithms"], sources: [S("Radioactive Decay")],
  },
  // Reactions
  {
    id: "C06", slug: "nuclear-reactions", title: "Nuclear reactions, fission and fusion", group: "Reactions", tier: "core",
    oneLiner: t`Bombarding nuclei transmutes them; heavy nuclei split (fission) and light ones join (fusion, as in the Sun), releasing energy from the lost mass`,
    prereqs: ["C03", "C04"], ext: [], sources: [S("Nuclear Reactions")],
  },
  {
    id: "C07", slug: "uses-of-radioisotopes", title: "Uses of radioisotopes", group: "Reactions", tier: "core",
    oneLiner: t`Carbon-14 dating from the activity left in old wood; radioisotopes in medicine ($\ce{^{32}P}$ for leukaemia, $\ce{^{60}Co}$), as tracers and in agriculture`,
    prereqs: ["C05"], ext: [], sources: [S("Applications of Radioisotopes")],
  },
];
