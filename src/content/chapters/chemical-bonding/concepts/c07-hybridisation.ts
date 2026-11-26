import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Carbon's ground state has only two unpaired electrons, which suggests two bonds. Yet methane has four identical C–H bonds pointing to a tetrahedron's corners. How?`,
    reveal: t`Carbon promotes a 2s electron and mixes its 2s and three 2p orbitals into four equal $sp^3$ hybrids.`,
  },
  explanation: {
    intuition: [
      t`Atomic orbitals can mix into new, equal **hybrid orbitals**.`,
      t`The number of hybrids equals the number of orbitals mixed.`,
      t`Hybrids point apart, giving definite shapes.`,
      t`Lone pairs can also sit in hybrid orbitals.`,
    ],
    formal: [
      {
        title: "Types",
        points: [
          t`$sp$: two hybrids, linear, $180^\circ$ ($\ce{BeCl2}$, ethyne).`,
          t`$sp^2$: three hybrids, trigonal planar, $120^\circ$ ($\ce{BF3}$, ethene).`,
          t`$sp^3$: four hybrids, tetrahedral, $109.5^\circ$ ($\ce{CH4}$).`,
        ],
      },
      {
        title: "With lone pairs",
        points: [
          t`$\ce{NH3}$: $sp^3$, one lone pair, pyramidal, $107^\circ$.`,
          t`$\ce{H2O}$: $sp^3$, two lone pairs, bent, $104.5^\circ$.`,
          t`Unhybridised p orbitals form π bonds in ethene and ethyne.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the hybridisation of each carbon in ethyne?`,
      steps: [
        t`Each C bonds to two atoms, with no lone pair.`,
        t`Two hybrids: $sp$; two p orbitals form the π bonds.`,
      ],
      answer: t`$sp$`,
    },
    visualSpec: t`Mix one s and several p orbitals and watch the hybrids rearrange into a shape.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Picks an $sp^3$ centre.`,
      remediation: t`C in $\ce{CH4}$ has four groups: $sp^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Picks an $sp$ centre.`,
      remediation: t`Be in $\ce{BeCl2}$ has two groups: $sp$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Ignores the lone pair on N.",
      remediation: t`N has three bonds and a lone pair: four groups, $sp^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Gives the $sp^2$ angle.`,
      remediation: t`$sp$ hybrids point opposite: $180^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Gives the $sp^3$ angle.`,
      remediation: t`Two $sp$ hybrids: $180^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Gives the angle between pure p orbitals.",
      remediation: t`Hybrid $sp$ orbitals are $180^\circ$ apart.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Thinks O is $sp^2$.`,
      remediation: t`O in water has four electron pairs: $sp^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: t`Thinks $\ce{H2O}$ has more bonds.`,
      remediation: "Water has two bonds, ammonia three; water has more lone pairs.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Credits O's size.",
      remediation: "O is smaller than N; its two lone pairs explain the angle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks carbon forms two ionic bonds.",
      remediation: "All four C–H bonds are covalent and equal.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks carbon borrows electrons from H.",
      remediation: "Carbon promotes its own 2s electron.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Thinks the four bonds are unequal.",
      remediation: "The four C–H bonds are identical, which is why hybridisation is needed.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: t`Thinks every carbon is $sp^3$.`,
      remediation: t`A C=C carbon has three groups: $sp^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Confuses ethene with ethyne.",
      remediation: t`Ethyne's carbons are $sp$; ethene's are $sp^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: t`Picks $sp^3d$.`,
      remediation: "Carbon has no d orbitals in its valence shell.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.6" },
      stem: t`In which molecule is the central atom $sp^2$ hybridised?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sp2" } },
      options: [
        { key: "A", text: t`$\ce{BeCl2}$`, correct: false, misconceptionId: "C07-M2", value: "becl2" },
        { key: "B", text: t`$\ce{NH3}$`, correct: false, misconceptionId: "C07-M3", value: "nh3" },
        { key: "C", text: t`$\ce{CH4}$`, correct: false, misconceptionId: "C07-M1", value: "ch4" },
        { key: "D", text: t`$\ce{BF3}$`, correct: true, value: "bf3" },
      ],
      solution: {
        steps: [
          t`B has three bonding pairs, no lone pair.`,
          t`Three groups: $sp^2$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Solved Ex.5.4" },
      stem: t`Be in $\ce{BeCl2}$ is $sp$ hybridised. The Cl–Be–Cl bond angle is`,
      verify: { kind: "value", inputs: {  }, params: { q: "becl2" } },
      options: [
        { key: "A", text: t`$180^\circ$`, correct: true, value: "deg_180" },
        { key: "B", text: t`$109.5^\circ$`, correct: false, misconceptionId: "C07-M5", value: "deg_109_5" },
        { key: "C", text: t`$90^\circ$`, correct: false, misconceptionId: "C07-M6", value: "deg_90" },
        { key: "D", text: t`$120^\circ$`, correct: false, misconceptionId: "C07-M4", value: "deg_120" },
      ],
      solution: {
        steps: [
          t`Two $sp$ hybrids point opposite ways.`,
          t`$180^\circ$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (G)" },
      stem: t`N in $\ce{NH3}$ and O in $\ce{H2O}$ are both $sp^3$, yet the angles are $107^\circ$ and $104.5^\circ$. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nh3_h2o" } },
      options: [
        { key: "A", text: t`O is larger than N`, correct: false, misconceptionId: "C07-M9", value: "o_larger" },
        { key: "B", text: t`$\ce{H2O}$ has two lone pairs, which repel the bonds more`, correct: true, value: "two_lone_pairs" },
        { key: "C", text: t`O is $sp^2$ hybridised`, correct: false, misconceptionId: "C07-M7", value: "o_sp2" },
        { key: "D", text: t`$\ce{H2O}$ has more bonds`, correct: false, misconceptionId: "C07-M8", value: "more_bonds" },
      ],
      solution: {
        steps: [
          t`Water has two lone pairs; ammonia one.`,
          t`More lone-pair repulsion: smaller angle.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (F)" },
      stem: t`Ground-state carbon has only two unpaired electrons, yet $\ce{CH4}$ has four equal C–H bonds. This is explained by`,
      verify: { kind: "value", inputs: {  }, params: { q: "carbon" } },
      options: [
        { key: "A", text: t`carbon borrowing electrons from hydrogen`, correct: false, misconceptionId: "C07-M11", value: "borrows" },
        { key: "B", text: t`two ionic and two covalent bonds`, correct: false, misconceptionId: "C07-M10", value: "ionic_bonds" },
        { key: "C", text: t`promotion of a 2s electron and mixing into four equal $sp^3$ orbitals`, correct: true, value: "promote_sp3" },
        { key: "D", text: t`four unequal bonds from one s and three p orbitals`, correct: false, misconceptionId: "C07-M12", value: "unequal" },
      ],
      solution: {
        steps: [
          t`A 2s electron is promoted to 2p.`,
          t`2s and three 2p mix into four equal $sp^3$ orbitals.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.2 (B)" },
      stem: t`Each carbon atom in ethene, $\ce{CH2=CH2}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ethene" } },
      options: [
        { key: "A", text: t`$sp^3$ hybridised`, correct: false, misconceptionId: "C07-M13", value: "sp3" },
        { key: "B", text: t`$sp$ hybridised`, correct: false, misconceptionId: "C07-M14", value: "sp" },
        { key: "C", text: t`$sp^3d$ hybridised`, correct: false, misconceptionId: "C07-M15", value: "sp3d" },
        { key: "D", text: t`$sp^2$ hybridised`, correct: true, value: "sp2" },
      ],
      solution: {
        steps: [
          t`Each C has three groups (2 H and 1 C).`,
          t`$sp^2$.`,
        ],
      },
    },
  ],
};
