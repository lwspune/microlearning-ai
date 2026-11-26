import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Mechanical Properties of Solids prerequisite graph (Balbharati Physics Std XI, Ch.6): stress, strain and the elastic moduli, the stress-strain curve, strain energy, hardness and friction.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/mech-props-solids-11-phy#${sub}`;

export const graph: GraphNode[] = [
  // Elasticity
  {
    id: "C01", slug: "stress-strain", title: "Stress, strain and Hooke's law", group: "Elasticity", tier: "core",
    oneLiner: t`Stress is force per area, strain the fractional change of size; within the elastic limit stress $\propto$ strain (Hooke's law)`,
    prereqs: [], ext: [], sources: [S("Elastic Behaviour of Solids"), S("Stress and Strain"), S("Hooke's Law")],
  },
  {
    id: "C02", slug: "stress-strain-curve", title: "The stress-strain curve", group: "Elasticity", tier: "core", visual: true,
    oneLiner: t`Loading a wire shows the proportional limit, elastic limit, yield point and breaking point; ductile and brittle materials differ`,
    prereqs: ["C01"], ext: [], sources: [S("Stress-Strain Curve")],
  },
  {
    id: "C03", slug: "youngs-modulus", title: "Young's modulus", group: "Elasticity", tier: "core",
    oneLiner: t`$Y = \dfrac{F/A}{\Delta l/l} = \dfrac{Fl}{A\Delta l}$ measures stiffness against stretching`,
    prereqs: ["C01"], ext: [], sources: [S("Elastic Modulus")],
  },
  {
    id: "C04", slug: "bulk-shear-modulus", title: "Bulk and shear moduli", group: "Elasticity", tier: "core",
    oneLiner: t`Bulk modulus $K = \dfrac{\Delta P}{\Delta V/V}$ resists compression; shear modulus $\eta$ resists change of shape; Poisson's ratio links the strains`,
    prereqs: ["C01"], ext: [], sources: [S("Elastic Modulus")],
  },
  {
    id: "C05", slug: "strain-energy", title: "Strain energy", group: "Elasticity", tier: "core",
    oneLiner: t`A stretched wire stores $U = \dfrac{1}{2}F\Delta l$, or $\dfrac{1}{2} \times$ stress $\times$ strain per unit volume`,
    prereqs: ["C03"], ext: [], sources: [S("Strain Energy")],
  },
  // Other properties
  {
    id: "C06", slug: "hardness", title: "Hardness", group: "Other properties", tier: "core",
    oneLiner: t`Hardness is resistance to scratching and denting, compared on scales such as Mohs'`,
    prereqs: [], ext: [], sources: [S("Hardness")],
  },
  {
    id: "C07", slug: "friction", title: "Friction in solids", group: "Other properties", tier: "core", visual: true,
    oneLiner: t`Static friction rises to $\mu_sN$, kinetic friction is $\mu_kN$; on an incline at the angle of repose, $\tan\theta = \mu_s$`,
    prereqs: [], ext: ["Newton's laws (Laws of Motion, Ch.4)"], sources: [S("Friction in Solids")],
  },
];
