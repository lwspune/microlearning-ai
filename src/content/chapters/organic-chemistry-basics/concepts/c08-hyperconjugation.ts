import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A tert-butyl cation is far more stable than a methyl cation, though neither has a lone pair or π bond to share. What stabilises it?`,
    reveal: t`Its nine C–H bonds next to the cationic carbon lean their electrons into its empty p orbital: hyperconjugation.`,
  },
  explanation: {
    intuition: [
      t`C–H bonds on a carbon next to a carbocation (α-hydrogens) can donate electrons.`,
      t`Their σ orbitals overlap with the empty p orbital.`,
      t`This spreads the positive charge and stabilises the ion.`,
      t`More α-hydrogens, more stabilisation.`,
    ],
    formal: [
      {
        title: "Hyperconjugation",
        points: [
          t`σ–p overlap between an α C–H bond and an empty p orbital or π bond.`,
          t`Also called no-bond resonance: structures show H⁺ with no bond to C.`,
          t`Isopropyl cation: two α-carbons, 6 α-hydrogens.`,
        ],
      },
      {
        title: "Stability order",
        points: [
          t`tert-butyl (9 α-H) > isopropyl (6) > ethyl (3) > methyl (0).`,
        ],
      },
    ],
    worked: {
      prompt: t`How many α-hydrogens does the ethyl cation, $\ce{CH3CH2+}$, have?`,
      steps: [
        t`The α-carbon is the $\ce{CH3}$ next to $\ce{C+}$.`,
        t`It carries 3 hydrogens.`,
      ],
      answer: t`3`,
    },
    visualSpec: t`Tilt a C–H bond towards an empty p orbital and watch electron density leak across.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Says σ–σ.",
      remediation: "The C–H σ bond overlaps an empty p orbital.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Says p–p.",
      remediation: "p–p overlap is π bonding or resonance.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Says π–π.",
      remediation: "A σ bond is involved.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Says inductive effect.",
      remediation: "Inductive effects shift σ electrons along bonds without overlap.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Says resonance.",
      remediation: "Resonance delocalises π electrons; this uses σ electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Says electromeric effect.",
      remediation: "That is a temporary effect when a reagent attacks.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Counts the H on the cationic carbon.",
      remediation: t`Only H on carbons next to $\ce{C+}$ count.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Counts α-carbons.",
      remediation: "Count the H atoms on them: 2 × 3.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Counts one methyl.",
      remediation: "Both methyls are α-carbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Reverses the order.",
      remediation: "More α-H, more stable: tert-butyl first.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Calls them equal.",
      remediation: "They have 9, 6, 3 and 0 α-hydrogens.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Puts isopropyl first.",
      remediation: "tert-Butyl has more α-hydrogens.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Says inductive effect.",
      remediation: "No-bond resonance is hyperconjugation.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Says electromeric effect.",
      remediation: "No-bond resonance is hyperconjugation.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Says conjugation.",
      remediation: "Conjugation uses π bonds; hyperconjugation uses σ bonds.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.15 (B)" },
      stem: t`Hyperconjugation involves overlap of`,
      verify: { kind: "value", inputs: {  }, params: { q: "overlap" } },
      options: [
        { key: "A", text: t`σ and σ orbitals`, correct: false, misconceptionId: "C08-M1", value: "sigma_sigma" },
        { key: "B", text: t`σ and p orbitals`, correct: true, value: "sigma_p" },
        { key: "C", text: t`p and p orbitals`, correct: false, misconceptionId: "C08-M2", value: "p_p" },
        { key: "D", text: t`π and π orbitals`, correct: false, misconceptionId: "C08-M3", value: "pi_pi" },
      ],
      solution: {
        steps: [
          t`A C–H σ bond meets an empty p orbital.`,
          t`σ–p overlap.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.15 (G)" },
      stem: t`Delocalisation of electrons by overlap of a p orbital with a σ bond is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "name" } },
      options: [
        { key: "A", text: t`the inductive effect`, correct: false, misconceptionId: "C08-M4", value: "inductive" },
        { key: "B", text: t`resonance`, correct: false, misconceptionId: "C08-M5", value: "resonance" },
        { key: "C", text: t`hyperconjugation`, correct: true, value: "hyperconjugation" },
        { key: "D", text: t`the electromeric effect`, correct: false, misconceptionId: "C08-M6", value: "electromeric" },
      ],
      solution: {
        steps: [
          t`σ electrons delocalise into a p orbital.`,
          t`Hyperconjugation.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.13" },
      stem: t`How many α-hydrogens does the isopropyl carbocation, $\ce{(CH3)2CH+}$, have?`,
      verify: { kind: "value", inputs: {  }, params: { q: "alpha_h" } },
      options: [
        { key: "A", text: t`7`, correct: false, misconceptionId: "C08-M7", value: "seven" },
        { key: "B", text: t`2`, correct: false, misconceptionId: "C08-M8", value: "two" },
        { key: "C", text: t`3`, correct: false, misconceptionId: "C08-M9", value: "three" },
        { key: "D", text: t`6`, correct: true, value: "six" },
      ],
      solution: {
        steps: [
          t`Two α-carbons, each $\ce{CH3}$.`,
          t`2 × 3 = 6.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (G)" },
      stem: t`By hyperconjugation, the order of carbocation stability is`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`tert-butyl > isopropyl > ethyl > methyl`, correct: true, value: "tert_iso_ethyl_methyl" },
        { key: "B", text: t`isopropyl > tert-butyl > ethyl > methyl`, correct: false, misconceptionId: "C08-M12", value: "iso_tert_ethyl_methyl" },
        { key: "C", text: t`all are equal`, correct: false, misconceptionId: "C08-M11", value: "all_equal" },
        { key: "D", text: t`methyl > ethyl > isopropyl > tert-butyl`, correct: false, misconceptionId: "C08-M10", value: "methyl_ethyl_iso_tert" },
      ],
      solution: {
        steps: [
          t`α-H: 9, 6, 3, 0.`,
          t`tert-butyl > isopropyl > ethyl > methyl.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.13" },
      stem: t`Hyperconjugation is also called`,
      verify: { kind: "value", inputs: {  }, params: { q: "no_bond" } },
      options: [
        { key: "A", text: t`conjugation`, correct: false, misconceptionId: "C08-M15", value: "conjugation" },
        { key: "B", text: t`no-bond resonance`, correct: true, value: "no_bond_resonance" },
        { key: "C", text: t`the inductive effect`, correct: false, misconceptionId: "C08-M13", value: "inductive" },
        { key: "D", text: t`the electromeric effect`, correct: false, misconceptionId: "C08-M14", value: "electromeric" },
      ],
      solution: {
        steps: [
          t`Its structures show H with no bond.`,
          t`No-bond resonance.`,
        ],
      },
    },
  ],
};
