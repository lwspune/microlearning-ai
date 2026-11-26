import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Introduction to Analytical Chemistry prerequisite graph (Balbharati Chemistry Std XI, Ch.2): scientific notation and significant figures, accuracy and errors, percentage composition and formulas, stoichiometry, limiting reagents and concentration.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/analytical-chemistry-11-chem#${sub}`;

export const graph: GraphNode[] = [
  // Measurement
  {
    id: "C01", slug: "scientific-notation-sig-figs", title: "Scientific notation and significant figures", group: "Measurement", tier: "core",
    oneLiner: t`Write numbers as $N \times 10^n$ with $1 \le N < 10$; count significant figures: nonzero digits, zeros between them, trailing zeros after a decimal point`,
    prereqs: [], ext: [], sources: [S("Mathematical Operations and Error Analysis")],
  },
  {
    id: "C02", slug: "rounding-in-calculations", title: "Rounding in calculations", group: "Measurement", tier: "core",
    oneLiner: t`A sum keeps the fewest decimal places, a product or quotient the fewest significant figures; round 5 up when a nonzero digit follows`,
    prereqs: ["C01"], ext: [], sources: [S("Mathematical Operations and Error Analysis")],
  },
  {
    id: "C03", slug: "accuracy-precision", title: "Accuracy, precision and error", group: "Measurement", tier: "core",
    oneLiner: t`Accuracy is closeness to the true value, precision closeness of repeats; absolute error $=$ observed $-$ true, percentage error $= \dfrac{\text{error}}{\text{true}} \times 100$`,
    prereqs: [], ext: [], sources: [S("Mathematical Operations and Error Analysis"), S("Analysis")],
  },
  // Formulas
  {
    id: "C04", slug: "percentage-composition", title: "Percentage composition", group: "Formulas", tier: "core",
    oneLiner: t`Each element's mass percent $= \dfrac{\text{its mass in one mole}}{\text{molar mass}} \times 100$, water of crystallisation included`,
    prereqs: [], ext: ["molar mass (Some Basic Concepts of Chemistry)"], sources: [S("Determination of Molecular Formula")],
  },
  {
    id: "C05", slug: "empirical-molecular-formula", title: "Empirical and molecular formulas", group: "Formulas", tier: "core",
    oneLiner: t`Divide each percentage by the atomic mass and scale to the simplest whole-number ratio for the empirical formula; the molecular formula is $n$ times it, $n = M \div$ empirical formula mass`,
    prereqs: ["C04"], ext: [], sources: [S("Determination of Molecular Formula")],
  },
  // Reactions
  {
    id: "C06", slug: "stoichiometry", title: "Calculations from equations", group: "Reactions", tier: "core",
    oneLiner: t`A balanced equation's coefficients are mole ratios: convert mass to moles, scale by the ratio, convert back to mass or gas volume`,
    prereqs: [], ext: ["the mole and molar volume (Some Basic Concepts of Chemistry)"], sources: [S("Chemical Reactions and Stoichiometric Calculations")],
  },
  {
    id: "C07", slug: "limiting-reagent", title: "Limiting reagent", group: "Reactions", tier: "core",
    oneLiner: t`The reactant that runs out first limits the product; find it by comparing the moles available with the moles the equation needs`,
    prereqs: ["C06"], ext: [], sources: [S("Limiting Reagent")],
  },
  {
    id: "C08", slug: "concentration-units", title: "Concentration of solutions", group: "Reactions", tier: "core",
    oneLiner: t`Mass percent, mole fraction, molarity (mol per litre of solution) and molality (mol per kg of solvent); molarity changes with temperature, molality does not`,
    prereqs: [], ext: ["the mole and molar volume (Some Basic Concepts of Chemistry)"], sources: [S("Concentration of Solution")],
  },
  // Asked by other courses, not taught in the MH books (PLAN.md "Chemistry for CBSE, MHT-CET, JEE Main, NEET and NDA").
  {
    id: "C09", slug: "equivalents-normality", title: "Equivalents and normality", group: "Reactions", tier: "core",
    oneLiner: t`Equivalent mass $=$ molar mass ÷ n-factor; normality $= n \times$ molarity; at a titration's end point $N_1V_1 = N_2V_2$`,
    prereqs: ["C08"], ext: [],
    sources: ["jee-main/some-basic-concepts-of-chemistry#Equivalents and Titrations"],
  },
];
