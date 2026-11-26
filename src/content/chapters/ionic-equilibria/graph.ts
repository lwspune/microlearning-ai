import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Ionic Equilibria prerequisite graph (Balbharati Chemistry Std XII, Ch.3): acid-base theories, Ostwald's dilution law, pH, hydrolysis of salts, common ion effect, buffers and solubility product.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/ionic-equilibria-12-chem#${sub}`;

export const graph: GraphNode[] = [
  // Acids and bases
  {
    id: "C01", slug: "acid-base-theories", title: "Arrhenius, Brønsted and Lewis", group: "Acids and bases", tier: "core",
    oneLiner: t`Arrhenius acids give $\ce{H+}$ in water, Brønsted acids donate protons (conjugate pairs differ by one $\ce{H+}$), Lewis acids accept electron pairs`,
    prereqs: [], ext: [], sources: [S("Acids and Bases")],
  },
  // Weak electrolytes
  {
    id: "C02", slug: "ostwald-dilution-law", title: "Ostwald's dilution law", group: "Weak electrolytes", tier: "core",
    oneLiner: t`For a weak acid $K_a = \dfrac{\alpha^2 c}{1 - \alpha} \approx \alpha^2 c$, so $\alpha = \sqrt{K_a / c}$ grows on dilution`,
    prereqs: ["C01"], ext: ["equilibrium constant (Std XI Chemistry)"], sources: [S("Ionisation of Acids and Bases")],
  },
  // pH
  {
    id: "C03", slug: "ph-scale", title: "The pH scale", group: "pH", tier: "core",
    oneLiner: t`$\mathrm{pH} = -\log_{10}[\ce{H3O+}]$; water's $K_w = 10^{-14}$ gives $\mathrm{pH} + \mathrm{pOH} = 14$; pH of strong acids and bases`,
    prereqs: ["C01"], ext: ["logarithms"], sources: [S("pH Scale")],
  },
  {
    id: "C04", slug: "ph-weak-acids-bases", title: "pH of weak acids and bases", group: "pH", tier: "core",
    oneLiner: t`For a weak acid $[\ce{H3O+}] = \alpha c = \sqrt{K_a c}$; pH from $K_a$ or $\alpha$, and back`,
    prereqs: ["C02", "C03"], ext: [], sources: [S("pH Scale"), S("Ionisation of Acids and Bases")],
  },
  // Salts
  {
    id: "C05", slug: "hydrolysis-of-salts", title: "Hydrolysis of salts", group: "Salts", tier: "core",
    oneLiner: t`A salt of a strong acid and weak base is acidic, of a weak acid and strong base basic, of two strong ones neutral`,
    prereqs: ["C03"], ext: [], sources: [S("Hydrolysis of Salts")],
  },
  {
    id: "C06", slug: "common-ion-effect", title: "Common ion effect", group: "Salts", tier: "core",
    oneLiner: t`Adding an ion already in a weak electrolyte's equilibrium suppresses its dissociation`,
    prereqs: ["C02"], ext: [], sources: [S("Common Ion Effect")],
  },
  {
    id: "C07", slug: "buffer-solutions", title: "Buffer solutions", group: "Salts", tier: "core",
    oneLiner: t`A buffer (weak acid and its salt, or weak base and its salt) resists pH change: $\mathrm{pH} = \mathrm{p}K_a + \log_{10}\dfrac{[\text{salt}]}{[\text{acid}]}$`,
    prereqs: ["C04", "C06"], ext: [], sources: [S("Buffer Solutions")],
  },
  // Solubility
  {
    id: "C08", slug: "solubility-product", title: "Solubility product", group: "Solubility", tier: "core",
    oneLiner: t`For a sparingly soluble salt $K_{sp}$ is the product of ion concentrations: $K_{sp} = S^2$ for AX, $4S^3$ for $\ce{AX2}$`,
    prereqs: [], ext: ["equilibrium constant (Std XI Chemistry)"], sources: [S("Solubility Product")],
  },
  {
    id: "C09", slug: "precipitation", title: "Predicting precipitation", group: "Solubility", tier: "core",
    oneLiner: t`A precipitate forms when the ionic product exceeds $K_{sp}$; a common ion lowers solubility`,
    prereqs: ["C06", "C08"], ext: [], sources: [S("Solubility Product"), S("Common Ion Effect")],
  },
];
