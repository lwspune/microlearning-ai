import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Chemistry in Everyday Life prerequisite graph (Balbharati Chemistry Std XI, Ch.16): food chemistry, spoilage and antioxidants, soaps and detergents, and medicines: analgesics, antiseptics and antibiotics.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/everyday-chemistry-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Food
  {
    id: "C01", slug: "food-chemistry", title: "Chemistry of food", group: "Food", tier: "core",
    oneLiner: t`Food supplies carbohydrates, proteins, fats, vitamins and minerals; cooking breaks starch and proteins down; saturated fats have only single C–C bonds, unsaturated fats have double bonds`,
    prereqs: [], ext: [], sources: [S("Basics of Food Chemistry")],
  },
  {
    id: "C02", slug: "spoilage-antioxidants", title: "Rancidity, browning and antioxidants", group: "Food", tier: "core",
    oneLiner: t`Oxygen turns fats rancid by a free-radical reaction; cut fruit browns by enzymes; antioxidants (vitamin E, BHT) and lemon juice slow these changes`,
    prereqs: ["C01"], ext: [], sources: [S("Basics of Food Chemistry")],
  },
  // Cleansing agents
  {
    id: "C03", slug: "soaps", title: "Soaps and saponification", group: "Cleansing agents", tier: "core",
    oneLiner: t`Fats with NaOH give soap (sodium salts of fatty acids) and glycerol; soap's oil-loving tails and water-loving heads trap grease in micelles`,
    prereqs: [], ext: [], sources: [S("Cleansing Agents")],
  },
  {
    id: "C04", slug: "detergents", title: "Synthetic detergents", group: "Cleansing agents", tier: "core",
    oneLiner: t`Anionic (sulfonates), cationic (quaternary ammonium salts, also germicidal) and nonionic detergents; unlike soaps they work in hard water`,
    prereqs: ["C03"], ext: [], sources: [S("Cleansing Agents")],
  },
  // Medicines
  {
    id: "C05", slug: "analgesics", title: "Analgesics", group: "Medicines", tier: "core",
    oneLiner: t`Analgesics relieve pain: aspirin (acetylsalicylic acid, from acetylating salicylic acid) and paracetamol are non-narcotic; morphine is narcotic`,
    prereqs: [], ext: [], sources: [S("Compounds with Medicinal Properties")],
  },
  {
    id: "C06", slug: "antiseptics-disinfectants", title: "Antiseptics and disinfectants", group: "Medicines", tier: "core",
    oneLiner: t`Antiseptics are safe on living tissue (Dettol, tincture of iodine, turmeric, dilute phenol); disinfectants kill microbes on objects; concentration can decide which`,
    prereqs: [], ext: [], sources: [S("Compounds with Medicinal Properties")],
  },
  {
    id: "C07", slug: "antibiotics", title: "Antibiotics", group: "Medicines", tier: "core",
    oneLiner: t`Antibiotics kill or stop microbes: penicillin (Fleming, narrow spectrum), chloramphenicol (broad spectrum), salvarsan (arsenic-based) and sulfa drugs`,
    prereqs: [], ext: [], sources: [S("Compounds with Medicinal Properties")],
  },
];
