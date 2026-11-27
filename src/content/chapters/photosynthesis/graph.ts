import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Photosynthesis prerequisite graph (Balbharati Biology Std XI, Ch.12): why photosynthesis matters and where it happens in the chloroplast, light and pigments, the light reaction and photophosphorylation, the Calvin cycle, photorespiration and the C₄ pathway.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/photosynthesis-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "photosynthesis-chloroplast", title: "Photosynthesis and the chloroplast", group: "Basics", tier: "core",
    oneLiner: t`Photosynthesis is the only process that traps solar energy as food and releases oxygen; the light reaction runs in the thylakoid membranes and the dark reaction in the stroma`,
    prereqs: [], ext: [], sources: [S("Mechanism of Photosynthesis"), S("Chloroplast")],
  },
  {
    id: "C02", slug: "light-pigments", title: "Light and pigments", group: "Basics", tier: "core",
    oneLiner: t`Chlorophyll a and b absorb blue, violet and red light and pass green light, so they look green; accessory pigments widen the light used and protect chlorophyll`,
    prereqs: ["C01"], ext: [], sources: [S("Nature of Light")],
  },
  // Light reaction
  {
    id: "C03", slug: "light-reaction", title: "The light reaction", group: "Light reaction", tier: "core",
    oneLiner: t`Light excites P₆₈₀ of PS-II and P₇₀₀ of PS-I; water is split to refill PS-II, giving protons, electrons and oxygen; ATP and NADPH₂ carry the energy to the stroma`,
    prereqs: ["C02"], ext: [], sources: [S("Light Reaction")],
  },
  {
    id: "C04", slug: "photophosphorylation", title: "Photophosphorylation", group: "Light reaction", tier: "core",
    oneLiner: t`Cyclic flow uses PS-I alone and makes only ATP; non-cyclic flow runs from water to PS-II to PS-I to NADP⁺, makes ATP and NADPH₂ and evolves oxygen`,
    prereqs: ["C03"], ext: [], sources: [S("Photophosphorylation")],
  },
  // Dark reaction
  {
    id: "C05", slug: "calvin-cycle", title: "The Calvin cycle", group: "Dark reaction", tier: "core",
    oneLiner: t`RuBisCO joins CO₂ to RuBP to give 3-PGA, which ATP and NADPH₂ reduce to 3-PGAL, and RuBP is regenerated; six turns, 18 ATP and 12 NADPH₂ make one glucose`,
    prereqs: ["C04"], ext: [], sources: [S("Dark Reaction")],
  },
  {
    id: "C06", slug: "photorespiration", title: "Photorespiration", group: "Dark reaction", tier: "core",
    oneLiner: t`In hot, bright conditions with high O₂ and low CO₂, RuBisCO oxygenates RuBP to PGA and phosphoglycolate; C₃ plants lose about 25% of their fixed carbon`,
    prereqs: ["C05"], ext: [], sources: [S("Photorespiration")],
  },
  {
    id: "C07", slug: "c4-pathway", title: "The C₄ pathway", group: "Dark reaction", tier: "core",
    oneLiner: t`In Kranz anatomy, mesophyll PEP fixes CO₂ to OAA and malic acid, which releases CO₂ in the bundle sheath for the Calvin cycle; it costs 30 ATP per glucose but avoids photorespiration`,
    prereqs: ["C06"], ext: [], sources: [S("C4 Pathway")],
  },
];
