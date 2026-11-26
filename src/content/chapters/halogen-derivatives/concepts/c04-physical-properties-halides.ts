import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Chloromethane, $\ce{CH3Cl}$, is a gas at room temperature, but iodomethane, $\ce{CH3I}$, is a liquid. The C–Cl bond is the more polar one. So why does $\ce{CH3I}$ boil higher?`,
    reveal: t`Iodine is much bigger and heavier than chlorine. Its large electron cloud gives much stronger van der Waals forces, and size wins over polarity.`,
  },
  explanation: {
    intuition: [
      t`The C–X bond is polar: carbon carries $\delta+$ and the halogen $\delta-$.`,
      t`Alkyl halides boil higher than alkanes of similar size, because they are heavier and polar.`,
      t`Bigger, heavier molecules have stronger van der Waals forces, so they boil higher.`,
      t`**Branching** makes a molecule more compact, so it boils lower than its straight isomer.`,
      t`Alkyl halides cannot form hydrogen bonds with water, so they barely dissolve in it.`,
    ],
    formal: [
      {
        title: "Boiling point and size",
        points: [
          t`Intermolecular attractions in alkyl halides are dipole–dipole and van der Waals forces.`,
          t`Van der Waals forces grow with the size and mass of the molecule.`,
          t`For the same alkyl group: R–I > R–Br > R–Cl > R–F.`,
          t`For the same halogen, the boiling point rises as the alkyl group grows.`,
          t`Example: $\ce{CH3F}$ < $\ce{CH3Cl}$ < $\ce{CH3Br}$ < $\ce{CH3I}$.`,
        ],
      },
      {
        title: "Boiling point and branching",
        points: [
          t`**Isomers** have the same molecular formula and the same mass.`,
          t`A branched isomer is more nearly spherical than its straight-chain isomer.`,
          t`A sphere has less surface for contact, so van der Waals forces are weaker.`,
          t`So among isomers, the more branched one boils lower.`,
          t`2-Chloro-2-methylpropane ($51\,^\circ\mathrm{C}$) boils below 1-chlorobutane ($78\,^\circ\mathrm{C}$).`,
          t`Branching only decides between isomers; a bigger molecule still boils higher.`,
        ],
      },
      {
        title: "Solubility",
        points: [
          t`To dissolve, a solute must attract water as strongly as water attracts itself.`,
          t`Water molecules are held together by hydrogen bonds.`,
          t`A **hydrogen bond** needs an H atom bonded to F, O or N; in R–X every H is on carbon.`,
          t`So alkyl halides cannot hydrogen-bond with water, and dissolve only very slightly.`,
          t`They dissolve well in organic solvents such as ether and benzene.`,
        ],
      },
      {
        title: "Density",
        points: [
          t`Density rises with the mass of the halogen: iodides > bromides > chlorides.`,
          t`It also rises with the number of halogen atoms: $\ce{CH2Cl2}$ < $\ce{CHCl3}$ < $\ce{CCl4}$.`,
          t`Bromo, iodo and polychloro compounds are denser than water and sink below it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange in increasing order of boiling point: bromoform, chloromethane, dibromomethane, bromomethane.`,
      steps: [
        t`All four have one carbon, so size depends on the halogens.`,
        t`$\ce{CH3Cl}$ is the lightest, then $\ce{CH3Br}$ (Br is bigger than Cl).`,
        t`$\ce{CH2Br2}$ has two Br atoms, and bromoform $\ce{CHBr3}$ has three.`,
        t`Bigger molecules have stronger van der Waals forces and boil higher.`,
      ],
      answer: t`$\ce{CH3Cl}$ < $\ce{CH3Br}$ < $\ce{CH2Br2}$ < $\ce{CHBr3}$.`,
    },
    visualSpec: t`Line up the halomethanes and butyl bromide isomers on a thermometer scale, and see size push the boiling point up and branching pull it down.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks the more polar C–X bond gives stronger attractions and a higher boiling point, so chlorides boil above iodides.",
      remediation: "Van der Waals forces grow with size and outweigh the difference in polarity. So for the same alkyl group, R–I > R–Br > R–Cl > R–F.",
      fallback: { kind: "ext", topic: "intermolecular forces (Std XI Chemistry)" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks branching raises the boiling point.",
      remediation: "Branching makes a molecule more compact, with less surface contact. Its van der Waals forces are weaker, so the branched isomer boils lower.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks branching outweighs size, so every branched halide boils below every straight-chain one.",
      remediation: "Compare branching only between isomers. A molecule with more carbons or a heavier halogen still boils higher, branched or not.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks alkyl halides are non-polar.",
      remediation: t`Halogens are more electronegative than carbon, so the C–X bond is polar: C carries $\delta+$ and X carries $\delta-$.`,
      fallback: { kind: "ext", topic: "electronegativity and bond polarity (Std XI Chemistry)" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks alkyl halides form hydrogen bonds, as alcohols do.",
      remediation: "A hydrogen bond needs H bonded to F, O or N. In an alkyl halide every H is bonded to carbon, so there are no hydrogen bonds.",
      fallback: { kind: "ext", topic: "hydrogen bonding (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (vii)" },
      stem: t`Arrange in increasing order of boiling point: (I) 1-chloropropane, (II) 1-iodo-2-methylpropane, (III) 2-chloropropane, (IV) 1-chloro-2-methylpropane.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "order", set: "1-chloropropane,1-iodo-2-methylpropane,2-chloropropane,1-chloro-2-methylpropane" } },
      options: [
        { key: "A", text: t`III < IV < II < I`, correct: false, misconceptionId: "C04-M3", value: "o_III_IV_II_I" },
        { key: "B", text: t`III < I < IV < II`, correct: true, value: "o_III_I_IV_II" },
        { key: "C", text: t`II < III < I < IV`, correct: false, misconceptionId: "C04-M1", value: "o_II_III_I_IV" },
        { key: "D", text: t`I < III < IV < II`, correct: false, misconceptionId: "C04-M2", value: "o_I_III_IV_II" },
      ],
      solution: {
        steps: [
          t`1-Chloropropane (I) and 2-chloropropane (III) are isomers; the branched III boils lower.`,
          t`1-Chloro-2-methylpropane (IV) has one more carbon, so it boils above both.`,
          t`1-Iodo-2-methylpropane (II) has the same alkyl group as IV but the much heavier I.`,
          t`So III < I < IV < II.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (vii)" },
      stem: t`Arrange in increasing order of boiling point: (I) 1-bromo-2-methylpropane, (II) 2-bromopropane, (III) 1-iodobutane, (IV) 1-bromopropane.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "order", set: "1-bromo-2-methylpropane,2-bromopropane,1-iodobutane,1-bromopropane" } },
      options: [
        { key: "A", text: t`III < II < IV < I`, correct: false, misconceptionId: "C04-M1", value: "o_III_II_IV_I" },
        { key: "B", text: t`IV < II < I < III`, correct: false, misconceptionId: "C04-M2", value: "o_IV_II_I_III" },
        { key: "C", text: t`II < I < IV < III`, correct: false, misconceptionId: "C04-M3", value: "o_II_I_IV_III" },
        { key: "D", text: t`II < IV < I < III`, correct: true, value: "o_II_IV_I_III" },
      ],
      solution: {
        steps: [
          t`2-Bromopropane (II) is the branched isomer of 1-bromopropane (IV), so II < IV.`,
          t`1-Bromo-2-methylpropane (I) has one more carbon, so it boils above both.`,
          t`1-Iodobutane (III) is larger still and has the heavier I.`,
          t`So II < IV < I < III.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.3 (ii)" },
      stem: t`Chloroethane, $\ce{CH3-CH2-Cl}$, has a polar C–Cl bond, yet it does not mix with water. The reason is that`,
      verify: { kind: "value", inputs: {  }, params: { kind: "explain", ask: "immiscible" } },
      options: [
        { key: "A", text: t`it cannot form hydrogen bonds with water to make up for those it would break`, correct: true, value: "no_h_bond_with_water" },
        { key: "B", text: t`its molecules form strong hydrogen bonds with one another instead of with water`, correct: false, misconceptionId: "C04-M5", value: "h_bond_each_other" },
        { key: "C", text: t`its strongly polar C–Cl bonds hold its own molecules together more tightly than water can`, correct: false, misconceptionId: "C04-M1", value: "dipoles_hold_each_other" },
        { key: "D", text: t`its C–Cl bond is in fact non-polar, so water does not attract it`, correct: false, misconceptionId: "C04-M4", value: "c_x_non_polar" },
      ],
      solution: {
        steps: [
          t`Water molecules are held together by hydrogen bonds.`,
          t`In chloroethane every H is on carbon, so it cannot hydrogen-bond with water.`,
          t`Its weak attractions to water cannot make up for the hydrogen bonds broken, so it does not mix.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (vii)" },
      stem: t`1-Bromobutane boils at $101\,^\circ\mathrm{C}$, but its isomer 2-bromo-2-methylpropane boils at $73\,^\circ\mathrm{C}$. The main reason is that`,
      verify: { kind: "value", inputs: {  }, params: { kind: "explain", ask: "branching" } },
      options: [
        { key: "A", text: t`the branched isomer is non-polar, because its three methyl groups cancel the C–Br dipole`, correct: false, misconceptionId: "C04-M4", value: "branched_non_polar" },
        { key: "B", text: t`1-bromobutane forms hydrogen bonds between its molecules, and the branched isomer cannot`, correct: false, misconceptionId: "C04-M5", value: "straight_chain_h_bonds" },
        { key: "C", text: t`the compact, branched molecule has less surface contact, so weaker van der Waals forces`, correct: true, value: "less_surface_contact" },
        { key: "D", text: t`the C–Br bond of the branched isomer is less polar, so its dipole attractions are weaker`, correct: false, misconceptionId: "C04-M1", value: "less_polar_bond" },
      ],
      solution: {
        steps: [
          t`The two are isomers, so they have the same mass and the same C–Br bond.`,
          t`2-Bromo-2-methylpropane is branched and nearly spherical.`,
          t`Less surface contact means weaker van der Waals forces, so it boils lower.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Solved Ex.10.2" },
      stem: t`Arrange in increasing order of boiling point: (I) 1-bromopropane, (II) 2-iodopropane, (III) 1-chloropropane, (IV) 1-iodopropane.`,
      verify: { kind: "value", inputs: {  }, params: { kind: "order", set: "1-bromopropane,2-iodopropane,1-chloropropane,1-iodopropane" } },
      options: [
        { key: "A", text: t`II < III < I < IV`, correct: false, misconceptionId: "C04-M3", value: "o_II_III_I_IV" },
        { key: "B", text: t`II < IV < I < III`, correct: false, misconceptionId: "C04-M1", value: "o_II_IV_I_III" },
        { key: "C", text: t`III < I < IV < II`, correct: false, misconceptionId: "C04-M2", value: "o_III_I_IV_II" },
        { key: "D", text: t`III < I < II < IV`, correct: true, value: "o_III_I_II_IV" },
      ],
      solution: {
        steps: [
          t`All have three carbons; for the same alkyl group, R–Cl < R–Br < R–I.`,
          t`So 1-chloropropane (III) < 1-bromopropane (I) < the iodides.`,
          t`Of the two iodides, branched 2-iodopropane (II) boils below 1-iodopropane (IV).`,
          t`So III < I < II < IV.`,
        ],
      },
    },
  ],
};
