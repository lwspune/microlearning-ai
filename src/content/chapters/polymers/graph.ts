import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Introduction to Polymer Chemistry prerequisite graph (Balbharati Chemistry Std XII, Ch.15): monomers and degree of polymerization, classification, addition and condensation polymerization, and important polymers.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/polymers-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "polymer-basics", title: "Monomers, polymers and classes", group: "Basics", tier: "core",
    oneLiner: t`A polymer is many monomer units; degree of polymerization = polymer's molar mass ÷ repeat unit's; natural, semisynthetic or synthetic; linear, branched or cross-linked; homo- or copolymers`,
    prereqs: [], ext: [], sources: [S("Classification of Polymers"), S("Molecular Mass and Degree of Polymerization")],
  },
  {
    id: "C02", slug: "polymers-by-forces", title: "Elastomers, fibres and plastics", group: "Basics", tier: "core",
    oneLiner: t`By intermolecular forces: elastomers (weakest), fibres (strongest), thermoplastics (soften on heating) and thermosetting polymers (set for good)`,
    prereqs: ["C01"], ext: [], sources: [S("Classification of Polymers")],
  },
  // Polymerization
  {
    id: "C03", slug: "addition-condensation", title: "Addition and condensation polymerization", group: "Polymerization", tier: "core",
    oneLiner: t`Addition (chain growth) joins unsaturated monomers through free radicals (initiation, propagation, termination); condensation (step growth) loses a small molecule each step`,
    prereqs: ["C01"], ext: [], sources: [S("Classification of Polymers")],
  },
  // Important polymers
  {
    id: "C04", slug: "polyolefins-teflon", title: "Polythene and Teflon", group: "Important polymers", tier: "core",
    oneLiner: t`LDP (branched, high pressure, free radicals) and HDP (linear, Ziegler-Natta); Teflon from tetrafluoroethene is inert because of strong C–F bonds; PVC and PAN`,
    prereqs: ["C03"], ext: [], sources: [S("Some Important Polymers")],
  },
  {
    id: "C05", slug: "polyamides-polyesters", title: "Nylons and polyesters", group: "Important polymers", tier: "core",
    oneLiner: t`Nylon 6,6 from hexamethylenediamine and adipic acid, nylon 6 from caprolactam; terylene (Dacron, PET) from ethylene glycol and terephthalic acid`,
    prereqs: ["C03"], ext: [], sources: [S("Some Important Polymers")],
  },
  {
    id: "C06", slug: "formaldehyde-resins", title: "Bakelite and other resins", group: "Important polymers", tier: "core",
    oneLiner: t`Phenol and formaldehyde give Novolac, then cross-linked Bakelite (thermosetting); melamine-formaldehyde resin`,
    prereqs: ["C03"], ext: [], sources: [S("Some Important Polymers")],
  },
  {
    id: "C07", slug: "rubbers", title: "Natural and synthetic rubber", group: "Important polymers", tier: "core",
    oneLiner: t`Natural rubber is cis-polyisoprene, vulcanised with sulfur; neoprene from chloroprene, Buna-S from butadiene and styrene, Buna-N with acrylonitrile`,
    prereqs: ["C03"], ext: [], sources: [S("Some Important Polymers")],
  },
];
