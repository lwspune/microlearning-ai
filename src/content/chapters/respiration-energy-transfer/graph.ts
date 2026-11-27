import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Respiration and Energy Transfer prerequisite graph (Balbharati Biology Std XI, Ch.13): respiratory substrates and ATP, glycolysis, the link reaction and Krebs cycle, the electron transport system, the ATP balance sheet and RQ, anaerobic respiration and fermentation, and why stepwise oxidation and the amphibolic pathway matter.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/respiration-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Basics
  {
    id: "C01", slug: "respiration-atp", title: "Respiration and ATP", group: "Basics", tier: "core",
    oneLiner: t`Respiration oxidises respiratory substrates, mostly glucose, to simple components; the energy released is held as ATP, made by substrate-level and oxidative phosphorylation`,
    prereqs: [], ext: [], sources: [S("Formation of ATP")],
  },
  // Pathway
  {
    id: "C02", slug: "glycolysis", title: "Glycolysis", group: "Pathway", tier: "core",
    oneLiner: t`In the cytoplasm, ten steps split one glucose into two pyruvic acid: 2 ATP used, 4 ATP formed, so a net 2 ATP and 2 NADH + H⁺; common to aerobic and anaerobic respiration`,
    prereqs: ["C01"], ext: [], sources: [S("Glycolysis")],
  },
  {
    id: "C03", slug: "krebs-cycle", title: "Link reaction and Krebs cycle", group: "Pathway", tier: "core",
    oneLiner: t`In the mitochondria pyruvic acid becomes acetyl CoA and CO₂; acetyl CoA joins oxaloacetate to make citrate, which is oxidised step by step back to oxaloacetate, giving NADH, FADH₂, CO₂ and one GTP per turn`,
    prereqs: ["C02"], ext: [], sources: [S("Krebs Cycle")],
  },
  {
    id: "C04", slug: "electron-transport", title: "Electron transport system", group: "Pathway", tier: "core",
    oneLiner: t`On the inner mitochondrial membrane complexes I to IV pass electrons from NADH and FADH₂ to oxygen, forming water; protons flow back through F₀ and F₁ makes ATP: 3 per NADH, 2 per FADH₂`,
    prereqs: ["C03"], ext: [], sources: [S("Electron Transport System")],
  },
  // Energy
  {
    id: "C05", slug: "atp-balance-rq", title: "ATP balance sheet and RQ", group: "Energy", tier: "core",
    oneLiner: t`One glucose gives 40 ATP and uses 2, a net 38 (glycolysis 8, Krebs cycle 24); RQ is CO₂ released ÷ O₂ used, about 0.7 for fats`,
    prereqs: ["C04"], ext: [], sources: [S("Electron Transport System")],
  },
  {
    id: "C06", slug: "anaerobic-fermentation", title: "Anaerobic respiration and fermentation", group: "Energy", tier: "core",
    oneLiner: t`Without enough oxygen, pyruvic acid becomes lactic acid in muscles, or acetaldehyde then ethanol and CO₂ in yeast; glucose is only partly oxidised, so the net gain is just 2 ATP`,
    prereqs: ["C02"], ext: [], sources: [S("Anaerobic Respiration and Fermentation")],
  },
  {
    id: "C07", slug: "stepwise-amphibolic", title: "Stepwise oxidation and the amphibolic pathway", group: "Energy", tier: "core",
    oneLiner: t`Enzymes release energy step by step, so more of it is stored as ATP and the rate is controlled; Krebs cycle intermediates also build fatty acids and amino acids, making respiration amphibolic`,
    prereqs: ["C03"], ext: [], sources: [S("Utility of Stepwise Oxidation")],
  },
];
