import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Plant Growth and Mineral Nutrition prerequisite graph (Balbharati Biology Std XII, Ch.7): phases of growth and the sigmoid curve, growth rates, differentiation and plasticity, the five plant hormones, photoperiodism and vernalization, mineral nutrition and the nitrogen cycle.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/plant-growth-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Growth
  {
    id: "C01", slug: "phases-of-growth", title: "Growth and its phases", group: "Growth", tier: "core",
    oneLiner: t`Plant growth is open (indeterminate); cells pass through division (lag), enlargement (log) and maturation (stationary), giving an S-shaped sigmoid curve over the grand period of growth`,
    prereqs: [], ext: [], sources: [S("Plant Growth"), S("Phases of Growth"), S("Growth Curve")],
  },
  {
    id: "C02", slug: "growth-rate", title: "Growth rate: arithmetic and geometric", group: "Growth", tier: "core",
    oneLiner: t`In arithmetic growth one daughter cell keeps dividing; in geometric growth both do, so n divisions give 2ⁿ cells; RGR is growth per unit time divided by the initial size`,
    prereqs: ["C01"], ext: [], sources: [S("Growth Rate and Types of Growth")],
  },
  {
    id: "C03", slug: "differentiation", title: "Differentiation and plasticity", group: "Growth", tier: "core",
    oneLiner: t`Differentiation is a permanent change of meristem cells into mature ones; dedifferentiation lets mature cells divide again; redifferentiation matures them again; plasticity gives heterophylly`,
    prereqs: ["C01"], ext: [], sources: [S("Differentiation, De-differentiation and Re-differentiation"), S("Plasticity")],
  },
  // Hormones
  {
    id: "C04", slug: "auxins-gibberellins", title: "Auxins and gibberellins", group: "Hormones", tier: "core",
    oneLiner: t`Auxin (IAA, made from tryptophan) gives apical dominance and roots cuttings; gibberellins cause bolting in rosette plants`,
    prereqs: ["C01"], ext: [], sources: [S("Growth Hormones")],
  },
  {
    id: "C05", slug: "cytokinin-ethylene-aba", title: "Cytokinins, ethylene and abscisic acid", group: "Hormones", tier: "core",
    oneLiner: t`Cytokinins drive cell division and delay senescence; gaseous ethylene ripens fruit; abscisic acid, the stress hormone, causes dormancy and leaf fall`,
    prereqs: ["C04"], ext: [], sources: [S("Growth Hormones")],
  },
  // Flowering
  {
    id: "C06", slug: "photoperiodism-vernalization", title: "Photoperiodism and vernalization", group: "Flowering", tier: "core",
    oneLiner: t`Day length controls flowering: short day plants need a long unbroken night, long day plants a long day, day neutral plants neither; chilling (vernalization), or gibberellin, hastens flowering`,
    prereqs: ["C04"], ext: [], sources: [S("Photoperiodism"), S("Vernalization")],
  },
  // Nutrition
  {
    id: "C07", slug: "mineral-nutrition", title: "Mineral nutrition", group: "Nutrition", tier: "core",
    oneLiner: t`Essential elements come from the soil as ions: macronutrients in large amounts, micronutrients such as Zn and Mo in traces; deficiency shows as chlorosis, necrosis and stunting`,
    prereqs: [], ext: [], sources: [S("Mineral Nutrition")],
  },
  {
    id: "C08", slug: "nitrogen-cycle", title: "The nitrogen cycle", group: "Nutrition", tier: "core",
    oneLiner: t`Diazotrophs fix N₂ to ammonia with 16 ATP per N₂; ammonification, nitrification (Nitrosomonas, Nitrobacter) and denitrification (Pseudomonas) complete the cycle`,
    prereqs: ["C07"], ext: [], sources: [S("Nitrogen Cycle")],
  },
];
