import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Benzene, $\ce{C6H6}$, looks very unsaturated on paper, but it does not decolourise bromine water. Why is it so unreactive?`,
    reveal: t`Its six π electrons are spread around the ring, an extra-stable aromatic system that resists addition.`,
  },
  explanation: {
    intuition: [
      t`Benzene's ring has six π electrons shared by all six carbons.`,
      t`All C–C bonds are equal, between single and double.`,
      t`Hückel's rule says which rings are aromatic.`,
      t`Benzene can be made from sodium benzoate, phenol or ethyne.`,
    ],
    formal: [
      {
        title: "Aromaticity",
        points: [
          t`Aromatic: planar, cyclic, fully conjugated, with $(4n + 2)$ π electrons.`,
          t`Benzene: 6 π electrons ($n$ = 1), all C–C bonds 139 pm.`,
          t`Cyclobutadiene (4 π) and non-planar cyclooctatetraene are not aromatic.`,
        ],
      },
      {
        title: "Preparing benzene",
        points: [
          t`Sodium benzoate + soda lime → benzene.`,
          t`Phenol + heated zinc dust → benzene.`,
          t`Ethyne through a red-hot iron tube → benzene.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is the cyclopentadienyl anion, with 6 π electrons in a planar ring, aromatic?`,
      steps: [
        t`6 = 4(1) + 2.`,
        t`Planar, cyclic and conjugated: aromatic.`,
      ],
      answer: t`Yes`,
    },
    visualSpec: t`Spread six π electrons around a ring and test candidate rings against Hückel's rule.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Says $4n$.`,
      remediation: t`$4n$ π electrons make a ring antiaromatic, not aromatic.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says any number.",
      remediation: t`Only $(4n + 2)$ counts work.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says one double bond is enough.",
      remediation: "The ring must be fully conjugated.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks cyclobutadiene.",
      remediation: t`4 π electrons is a $4n$ count.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks cyclohexene.",
      remediation: "One C=C does not make a conjugated ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks cyclooctatetraene.",
      remediation: "It is not planar, and has 8 π electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Expects phenol.",
      remediation: "Soda lime removes COO, leaving benzene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Expects toluene.",
      remediation: "No carbon is added; one is removed.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Expects benzoic acid.",
      remediation: "Soda lime decarboxylates.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Expects cyclohexanol.",
      remediation: "Zinc removes the oxygen; the ring stays aromatic.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Expects chlorobenzene.",
      remediation: "No chlorine is present.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Expects no reaction.",
      remediation: "Hot zinc dust reduces phenol to benzene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Thinks the bonds swap places.",
      remediation: "Electrons are permanently delocalised; nothing flips.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Calls them all single.",
      remediation: "Benzene has 6 π electrons: shorter than single bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Calls them all double.",
      remediation: "They are between single and double.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.6" },
      stem: t`By Hückel's rule, a planar, cyclic, fully conjugated ring is aromatic if it has`,
      verify: { kind: "value", inputs: {  }, params: { q: "huckel" } },
      options: [
        { key: "A", text: t`any number of π electrons`, correct: false, misconceptionId: "C07-M2", value: "any_number" },
        { key: "B", text: t`at least one double bond`, correct: false, misconceptionId: "C07-M3", value: "one_double" },
        { key: "C", text: t`$4n$ π electrons`, correct: false, misconceptionId: "C07-M1", value: "four_n" },
        { key: "D", text: t`$(4n + 2)$ π electrons`, correct: true, value: "four_n_plus_two" },
      ],
      solution: {
        steps: [
          t`Hückel's rule.`,
          t`$(4n + 2)$ π electrons.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.6" },
      stem: t`Which compound is aromatic?`,
      verify: { kind: "value", inputs: {  }, params: { q: "aromatic" } },
      options: [
        { key: "A", text: t`benzene`, correct: true, value: "benzene" },
        { key: "B", text: t`cyclohexene`, correct: false, misconceptionId: "C07-M5", value: "cyclohexene" },
        { key: "C", text: t`cyclooctatetraene (not planar)`, correct: false, misconceptionId: "C07-M6", value: "cyclooctatetraene" },
        { key: "D", text: t`cyclobutadiene (4 π electrons)`, correct: false, misconceptionId: "C07-M4", value: "cyclobutadiene" },
      ],
      solution: {
        steps: [
          t`Benzene: planar, 6 π electrons.`,
          t`Aromatic.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (Q)" },
      stem: t`Sodium benzoate is heated with soda lime. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "benzoate" } },
      options: [
        { key: "A", text: t`benzoic acid`, correct: false, misconceptionId: "C07-M9", value: "benzoic_acid" },
        { key: "B", text: t`benzene`, correct: true, value: "benzene" },
        { key: "C", text: t`phenol`, correct: false, misconceptionId: "C07-M7", value: "phenol" },
        { key: "D", text: t`toluene`, correct: false, misconceptionId: "C07-M8", value: "toluene" },
      ],
      solution: {
        steps: [
          t`Soda lime removes the COONa group.`,
          t`Benzene.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (Q)" },
      stem: t`Phenol vapour is passed over heated zinc dust. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "phenol_zn" } },
      options: [
        { key: "A", text: t`chlorobenzene`, correct: false, misconceptionId: "C07-M11", value: "chlorobenzene" },
        { key: "B", text: t`cyclohexanol`, correct: false, misconceptionId: "C07-M10", value: "cyclohexanol" },
        { key: "C", text: t`benzene`, correct: true, value: "benzene" },
        { key: "D", text: t`nothing: no reaction`, correct: false, misconceptionId: "C07-M12", value: "no_reaction" },
      ],
      solution: {
        steps: [
          t`Zinc removes the OH.`,
          t`Benzene.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`All the C–C bonds in benzene are 139 pm long because`,
      verify: { kind: "value", inputs: {  }, params: { q: "bonds" } },
      options: [
        { key: "A", text: t`single and double bonds rapidly swap places`, correct: false, misconceptionId: "C07-M13", value: "flipping" },
        { key: "B", text: t`all are single bonds`, correct: false, misconceptionId: "C07-M14", value: "all_single" },
        { key: "C", text: t`all are double bonds`, correct: false, misconceptionId: "C07-M15", value: "all_double" },
        { key: "D", text: t`its π electrons are delocalised over the whole ring`, correct: true, value: "delocalised" },
      ],
      solution: {
        steps: [
          t`Six π electrons are shared by the whole ring.`,
          t`All bonds are equal.`,
        ],
      },
    },
  ],
};
