import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Methane, ammonia and water each have four electron pairs around the central atom, yet their bond angles are 109.5°, 107° and 104.5°. Why do they differ?`,
    reveal: t`Lone pairs repel more than bonding pairs. Ammonia has one, water two, so their bonds are squeezed closer.`,
  },
  explanation: {
    intuition: [
      t`Electron pairs around a central atom repel each other.`,
      t`They spread as far apart as possible: that sets the shape.`,
      t`Lone pairs repel more strongly than bonding pairs.`,
      t`The shape is named from the atoms' positions, not the lone pairs.`,
    ],
    formal: [
      {
        title: "Shapes",
        points: [
          t`2 pairs: linear, $180^\circ$ ($\ce{BeCl2}$, $\ce{CO2}$).`,
          t`3 pairs: trigonal planar, $120^\circ$ ($\ce{BF3}$).`,
          t`4 pairs: tetrahedral, $109.5^\circ$ ($\ce{CH4}$).`,
        ],
      },
      {
        title: "Lone pairs",
        points: [
          t`Repulsion: lone–lone > lone–bond > bond–bond.`,
          t`$\ce{NH3}$: one lone pair, pyramidal, $107^\circ$.`,
          t`$\ce{H2O}$: two lone pairs, bent, $104.5^\circ$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Predict the shape of $\ce{H2S}$.`,
      steps: [
        t`S has two bonding pairs and two lone pairs.`,
        t`Four pairs, two of them lone: bent.`,
      ],
      answer: t`Bent (angular)`,
    },
    visualSpec: t`Tie balloons together as electron pairs and see the shapes they push into.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks double bonds make a molecule linear.",
      remediation: t`$\ce{SO3}$ has three bonded groups: trigonal planar.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Ignores lone pairs on the central atom.",
      remediation: "Lone pairs occupy space and change the shape.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks two bonded atoms always give a straight line.",
      remediation: t`O in $\ce{Cl2O}$ has two lone pairs, so it is bent.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks more bonds mean smaller angles.",
      remediation: t`$\ce{CH4}$ has no lone pairs: $109.5^\circ$, larger than water's.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks a linear molecule has the smallest angle.",
      remediation: t`Linear means $180^\circ$, the largest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks one lone pair compresses more than two.",
      remediation: "Two lone pairs squeeze the bonds more.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Credits atom size.",
      remediation: t`The lone pair on N, not its size, makes $\ce{NH3}$ pyramidal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks N forms double bonds with H.",
      remediation: "H forms only single bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: t`Thinks B is $sp^3$.`,
      remediation: t`B has three bonding pairs and no lone pair: $sp^2$, planar.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Counts the lone pair as a bonded position.",
      remediation: "The electron pairs are tetrahedral; the atoms make a pyramid.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Invents a T shape.",
      remediation: "Three bonds and one lone pair give a pyramid.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks VSEPR gives energy levels.",
      remediation: "VSEPR predicts shapes.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks VSEPR gives bond energies.",
      remediation: "VSEPR predicts shapes from electron-pair repulsion.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks VSEPR gives magnetic properties.",
      remediation: "Magnetism needs MO theory; VSEPR gives shapes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.1 (A)" },
      stem: t`Which molecule is linear?`,
      verify: { kind: "value", inputs: {  }, params: { q: "linear" } },
      options: [
        { key: "A", text: t`$\ce{Cl2O}$`, correct: false, misconceptionId: "C05-M3", value: "cl2o" },
        { key: "B", text: t`$\ce{H2S}$`, correct: false, misconceptionId: "C05-M2", value: "h2s" },
        { key: "C", text: t`$\ce{SO3}$`, correct: false, misconceptionId: "C05-M1", value: "so3" },
        { key: "D", text: t`$\ce{CO2}$`, correct: true, value: "co2" },
      ],
      solution: {
        steps: [
          t`C in $\ce{CO2}$ has two bonded groups and no lone pairs.`,
          t`Linear.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.1 (F)" },
      stem: t`In which molecule is the angle between two bonds smallest?`,
      verify: { kind: "value", inputs: {  }, params: { q: "smallest_angle" } },
      options: [
        { key: "A", text: t`$\ce{H2O}$`, correct: true, value: "h2o" },
        { key: "B", text: t`$\ce{C2H2}$`, correct: false, misconceptionId: "C05-M5", value: "c2h2" },
        { key: "C", text: t`$\ce{NH3}$`, correct: false, misconceptionId: "C05-M6", value: "nh3" },
        { key: "D", text: t`$\ce{CH4}$`, correct: false, misconceptionId: "C05-M4", value: "ch4" },
      ],
      solution: {
        steps: [
          t`Water has two lone pairs.`,
          t`They squeeze the angle most: $104.5^\circ$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (L)" },
      stem: t`$\ce{BF3}$ is planar but $\ce{NH3}$ is pyramidal because`,
      verify: { kind: "value", inputs: {  }, params: { q: "bf3_nh3" } },
      options: [
        { key: "A", text: t`N is larger than B`, correct: false, misconceptionId: "C05-M7", value: "n_larger" },
        { key: "B", text: t`N has a lone pair; B has none`, correct: true, value: "lone_pair_n" },
        { key: "C", text: t`N forms double bonds with H`, correct: false, misconceptionId: "C05-M8", value: "n_double_bonds" },
        { key: "D", text: t`B is $sp^3$ hybridised`, correct: false, misconceptionId: "C05-M9", value: "b_sp3" },
      ],
      solution: {
        steps: [
          t`B has 3 pairs; N has 3 pairs plus a lone pair.`,
          t`The lone pair pushes N's bonds down.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (O)" },
      stem: t`The shape of $\ce{NF3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nf3" } },
      options: [
        { key: "A", text: t`tetrahedral`, correct: false, misconceptionId: "C05-M10", value: "tetrahedral" },
        { key: "B", text: t`T-shaped`, correct: false, misconceptionId: "C05-M11", value: "t_shaped" },
        { key: "C", text: t`trigonal pyramidal`, correct: true, value: "pyramidal" },
        { key: "D", text: t`trigonal planar`, correct: false, misconceptionId: "C05-M2", value: "trigonal_planar" },
      ],
      solution: {
        steps: [
          t`N: three bonds and one lone pair.`,
          t`Trigonal pyramidal.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.1 (C)" },
      stem: t`VSEPR theory is used to predict`,
      verify: { kind: "value", inputs: {  }, params: { q: "predicts" } },
      options: [
        { key: "A", text: t`magnetic properties`, correct: false, misconceptionId: "C05-M14", value: "magnetism" },
        { key: "B", text: t`the energy levels of an atom`, correct: false, misconceptionId: "C05-M12", value: "energy_levels" },
        { key: "C", text: t`bond energies`, correct: false, misconceptionId: "C05-M13", value: "bond_energies" },
        { key: "D", text: t`the shapes of molecules and ions`, correct: true, value: "shapes" },
      ],
      solution: {
        steps: [
          t`VSEPR is about electron-pair repulsion.`,
          t`It predicts shapes of molecules and ions.`,
        ],
      },
    },
  ],
};
