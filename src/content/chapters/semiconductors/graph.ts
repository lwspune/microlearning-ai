import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Semiconductors prerequisite graph (Balbharati Physics Std XI, Ch.14): band theory and conduction in solids, intrinsic and extrinsic semiconductors, and the p-n junction diode.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/semiconductors-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Solids
  {
    id: "C01", slug: "band-theory", title: "Band theory of solids", group: "Solids", tier: "core", visual: true,
    oneLiner: t`Conductors have overlapping bands, insulators a wide gap, semiconductors a small gap of about $1\ \mathrm{eV}$`,
    prereqs: [], ext: [], sources: [S("Band Theory of Solids"), S("Electrical Conduction in Solids")],
  },
  // Semiconductors
  {
    id: "C02", slug: "intrinsic-semiconductors", title: "Intrinsic semiconductors", group: "Semiconductors", tier: "core",
    oneLiner: t`In a pure semiconductor each broken bond frees an electron and leaves a hole, so $n_e = n_h = n_i$`,
    prereqs: ["C01"], ext: [], sources: [S("Intrinsic Semiconductors")],
  },
  {
    id: "C03", slug: "extrinsic-semiconductors", title: "Extrinsic semiconductors", group: "Semiconductors", tier: "core",
    oneLiner: t`Pentavalent donors make n-type, trivalent acceptors p-type; still $n_en_h = n_i^2$`,
    prereqs: ["C02"], ext: [], sources: [S("Extrinsic Semiconductors")],
  },
  {
    id: "C04", slug: "pn-junction-diode", title: "The p-n junction diode", group: "Semiconductors", tier: "core", visual: true,
    oneLiner: t`A depletion layer and barrier form at the junction; forward bias lowers the barrier and conducts, reverse bias widens it and blocks`,
    prereqs: ["C03"], ext: [], sources: [S("p-n Junction and the Junction Diode")],
  },
];
