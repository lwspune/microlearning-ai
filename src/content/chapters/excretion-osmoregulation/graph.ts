import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Excretion and Osmoregulation prerequisite graph (Balbharati Biology Std XI, Ch.15): nitrogenous wastes and excretory modes, the human kidney and nephron, urine formation, concentration and composition of urine, osmoregulation by ADH and RAAS, and disorders of the excretory system.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/excretion-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Wastes
  {
    id: "C01", slug: "nitrogenous-wastes", title: "Nitrogenous wastes and excretory modes", group: "Wastes", tier: "core",
    oneLiner: t`Ammonia (ammonotelic, needs most water), urea (ureotelic, made in the liver by the ornithine cycle), uric acid (uricotelic, least water, most energy) and guanine (guanotelic, spider)`,
    prereqs: [], ext: [], sources: [S("Excretion and Excretory Products")],
  },
  // Kidney
  {
    id: "C02", slug: "human-excretory-system", title: "The human excretory system", group: "Kidney", tier: "core",
    oneLiner: t`Two retroperitoneal kidneys, ureters, bladder and urethra; the kidney has a cortex with Malpighian bodies and a medulla of pyramids; the nephron is its unit`,
    prereqs: ["C01"], ext: [], sources: [S("Human Excretory System")],
  },
  // Urine
  {
    id: "C03", slug: "urine-formation", title: "Urine formation", group: "Urine", tier: "core",
    oneLiner: t`Ultrafiltration in the glomerulus gives deproteinised plasma, the PCT reabsorbs glucose and amino acids, and the DCT and collecting duct secrete creatinine, K⁺ and H⁺`,
    prereqs: ["C02"], ext: [], sources: [S("Urine Formation")],
  },
  {
    id: "C04", slug: "urine-concentration-composition", title: "Concentration and composition of urine", group: "Urine", tier: "core",
    oneLiner: t`The loop of Henle makes the filtrate hypotonic; ADH lets the last part of the DCT and the collecting duct reabsorb water; urochrome colours urine yellow`,
    prereqs: ["C03"], ext: [], sources: [S("Concentration of Urine"), S("Composition of Urine")],
  },
  // Regulation
  {
    id: "C05", slug: "osmoregulation", title: "Osmoregulation", group: "Regulation", tier: "core",
    oneLiner: t`Hypothalamic osmoreceptors trigger ADH from the posterior pituitary; a fall in renal pressure makes the JGA release renin, leading to angiotensin II and aldosterone`,
    prereqs: ["C04"], ext: [], sources: [S("Osmoregulation")],
  },
  // Disorders
  {
    id: "C06", slug: "excretory-disorders", title: "Disorders and other excretory organs", group: "Disorders", tier: "core",
    oneLiner: t`Uremia, kidney stones (urolithiasis), haemodialysis and kidney transplant; the lungs remove CO₂, water vapour and volatile substances`,
    prereqs: ["C03"], ext: [], sources: [S("Disorders and Diseases of the Excretory System"), S("Role of Other Organs in Excretion")],
  },
];
