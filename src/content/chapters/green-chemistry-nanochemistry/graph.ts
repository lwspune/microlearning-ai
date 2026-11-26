import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Green Chemistry and Nanochemistry prerequisite graph (Balbharati Chemistry Std XII, Ch.16): sustainable development, the principles of green chemistry, atom economy, nanoscale basics, making and studying nanomaterials, and their uses.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/green-chemistry-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Green chemistry
  {
    id: "C01", slug: "green-chemistry-basics", title: "Sustainable development and green chemistry", group: "Green chemistry", tier: "core",
    oneLiner: t`Sustainable development meets today's needs without harming the future's; green chemistry (Paul Anastas) designs processes that cut hazardous substances`,
    prereqs: [], ext: [], sources: [S("Sustainable Development"), S("The Role of Green Chemistry")],
  },
  {
    id: "C02", slug: "green-principles", title: "Principles of green chemistry", group: "Green chemistry", tier: "core",
    oneLiner: t`Prevent waste, use safer solvents and catalysts, design less hazardous syntheses with fewer steps, and use renewable feedstocks`,
    prereqs: ["C01"], ext: [], sources: [S("Principles of Green Chemistry")],
  },
  {
    id: "C03", slug: "atom-economy", title: "Atom economy", group: "Green chemistry", tier: "core",
    oneLiner: t`% atom economy $= \dfrac{\text{mass of desired product}}{\text{total mass of reactants}} \times 100$; additions score 100%, substitutions and eliminations less`,
    prereqs: ["C02"], ext: [], sources: [S("Principles of Green Chemistry")],
  },
  // Nanochemistry
  {
    id: "C04", slug: "nanoscale", title: "The nanoscale", group: "Nanochemistry", tier: "core",
    oneLiner: t`1 nm $= 10^{-9}$ m; at 1–100 nm a material's large surface-to-volume ratio changes its properties; nanoscience, nanotechnology and nanomaterials`,
    prereqs: [], ext: [], sources: [S("Introduction to Nanochemistry")],
  },
  {
    id: "C05", slug: "nanomaterial-synthesis", title: "Making and studying nanomaterials", group: "Nanochemistry", tier: "core",
    oneLiner: t`Top-down and bottom-up synthesis such as the sol-gel method; UV-visible, XRD, FTIR, SEM, TEM and STM characterise them`,
    prereqs: ["C04"], ext: [], sources: [S("Synthesis of Nanomaterials")],
  },
  {
    id: "C06", slug: "nanomaterial-uses", title: "Uses of nanomaterials", group: "Nanochemistry", tier: "core",
    oneLiner: t`Nano zinc and titanium oxides in sunscreens, carbon black in tyres, nanofilters for water, the lotus leaf's self-cleaning surface; and their risks`,
    prereqs: ["C04"], ext: [], sources: [S("Applications of Nanomaterials")],
  },
];
