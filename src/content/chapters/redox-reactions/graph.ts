import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Redox Reactions prerequisite graph (Balbharati Chemistry Std XI, Ch.6): oxidation and reduction, oxidation numbers and Stock notation, identifying and balancing redox reactions, and electrode potentials.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/redox-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Oxidation number
  {
    id: "C01", slug: "oxidation-reduction", title: "Oxidation and reduction", group: "Oxidation number", tier: "core",
    oneLiner: t`Oxidation is loss of electrons (or gain of oxygen), reduction gain of electrons; the oxidising agent is itself reduced`,
    prereqs: [], ext: [], sources: [S("Oxidation Number")],
  },
  {
    id: "C02", slug: "oxidation-number-rules", title: "Assigning oxidation numbers", group: "Oxidation number", tier: "core",
    oneLiner: t`Elements are 0, O usually $-2$ (peroxides $-1$, superoxides $-\tfrac12$), H $+1$ (hydrides $-1$); the numbers add to the species' charge`,
    prereqs: [], ext: [], sources: [S("Oxidation Number")],
  },
  {
    id: "C03", slug: "stock-notation", title: "Stock notation", group: "Oxidation number", tier: "core",
    oneLiner: t`Stock notation writes a metal's oxidation number in Roman numerals: $\ce{MnO2}$ is manganese(IV) oxide`,
    prereqs: ["C02"], ext: [], sources: [S("Oxidation Number")],
  },
  // Redox reactions
  {
    id: "C04", slug: "identifying-redox", title: "Identifying redox reactions", group: "Redox reactions", tier: "core",
    oneLiner: t`A reaction is redox when oxidation numbers change: the species whose number rises is oxidised (the reducing agent), the one whose number falls is reduced`,
    prereqs: ["C01", "C02"], ext: [], sources: [S("Oxidation Number")],
  },
  // Balancing
  {
    id: "C05", slug: "balancing-oxidation-number", title: "Balancing by oxidation number", group: "Balancing", tier: "core",
    oneLiner: t`Make the total rise in oxidation number equal the total fall, then balance O with water and H with $\ce{H+}$ or $\ce{OH-}$`,
    prereqs: ["C04"], ext: [], sources: [S("Balancing of Redox Reactions")],
  },
  {
    id: "C06", slug: "balancing-half-reactions", title: "Balancing by half reactions", group: "Balancing", tier: "core",
    oneLiner: t`Split into oxidation and reduction half reactions, balance each for atoms and charge with electrons, scale so electrons cancel, then add`,
    prereqs: ["C04"], ext: [], sources: [S("Balancing of Redox Reactions")],
  },
  {
    id: "C07", slug: "redox-electrode-potential", title: "Electrode potentials and redox", group: "Balancing", tier: "core",
    oneLiner: t`A couple with a higher standard reduction potential $E^0$ is a stronger oxidising agent; a reaction goes if the oxidant's $E^0$ is above the reductant's`,
    prereqs: ["C04"], ext: [], sources: [S("Redox Reaction and Electrode Potential")],
  },
];
