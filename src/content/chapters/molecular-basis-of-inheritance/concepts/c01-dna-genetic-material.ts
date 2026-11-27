import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Until the 1940s many scientists thought proteins carried heredity, since they are far more varied than DNA. What changed their minds?`,
    reveal: t`Experiments with bacteria and viruses showed that DNA, not protein, carries the information that transforms and infects cells.`,
  },
  explanation: {
    intuition: [
      t`The genetic material must store, copy and pass on information.`,
      t`Both DNA and protein were candidates.`,
      t`Three experiments settled it in favour of **DNA**.`,
    ],
    formal: [
      {
        title: "Transformation",
        points: [
          t`**Griffith** (1928): *Streptococcus pneumoniae*, virulent S and harmless R strains.`,
          t`Heat-killed S plus live R killed mice: R had been **transformed**.`,
          t`**Avery, MacLeod and McCarty**: protease and RNase did not stop it; only **DNase** did.`,
          t`So the transforming principle is DNA.`,
        ],
      },
      {
        title: "Hershey and Chase",
        points: [
          t`Bacteriophages labelled with $^{32}\mathrm{P}$ (DNA) or $^{35}\mathrm{S}$ (protein).`,
          t`Only $^{32}\mathrm{P}$ entered the bacteria.`,
          t`So DNA is the material that enters and directs new viruses.`,
        ],
      },
    ],
    worked: {
      prompt: t`In Avery's experiment, why did treating the extract with protease not stop transformation?`,
      steps: [
        t`Protease destroys proteins only.`,
        t`The transforming principle was DNA, which protease leaves intact.`,
      ],
      answer: t`Because the transforming principle is DNA`,
    },
    visualSpec: t`Two test tubes of labelled phages, one leaving its label inside the bacteria.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks a bacteriophage.",
      remediation: "Phages were used later, by Hershey and Chase.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks *Drosophila*.",
      remediation: "*Drosophila* was used by Morgan.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks frog eggs.",
      remediation: "Griffith used bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks the S cells revived.",
      remediation: "Heat-killed cells stay dead; the R cells changed.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks R is virulent.",
      remediation: "R alone did not kill the mice.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Blames heat toxins.",
      remediation: "Heat-killed S alone did not kill.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks protease.",
      remediation: "Protease did not stop it; DNA isn't a protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks RNase.",
      remediation: "RNase did not stop it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks lipase.",
      remediation: "Only DNase stopped it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks polymerase.",
      remediation: "Polymerases build nucleic acids.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks pectinase.",
      remediation: "Pectinase digests pectin.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks RNase.",
      remediation: "RNase digests RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks ³⁵S.",
      remediation: "³⁵S labelled the protein coats, which stayed outside.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says both.",
      remediation: "Only the DNA label entered.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says neither.",
      remediation: "The ³²P label entered.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(1)" },
      stem: t`Griffith worked on`,
      verify: { kind: "value", inputs: {  }, params: { q: "griffith" } },
      options: [
        { key: "A", text: t`*Streptococcus pneumoniae*`, correct: true, value: "streptococcus" },
        { key: "B", text: t`a bacteriophage`, correct: false, misconceptionId: "C01-M1", value: "bacteriophage" },
        { key: "C", text: t`*Drosophila*`, correct: false, misconceptionId: "C01-M2", value: "drosophila" },
        { key: "D", text: t`frog eggs`, correct: false, misconceptionId: "C01-M3", value: "frog_eggs" },
      ],
      solution: {
        steps: [
          t`Griffith used two strains of a pneumonia bacterium.`,
          t`*Streptococcus pneumoniae*.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2026 Q. 8" },
      stem: t`In Griffith's experiment, mice injected with heat-killed S and live R bacteria died because`,
      verify: { kind: "value", inputs: {  }, params: { q: "transform" } },
      options: [
        { key: "A", text: t`something from the dead S cells transformed the live R cells into virulent S cells`, correct: true, value: "r_transformed" },
        { key: "B", text: t`the heat-killed S cells came back to life`, correct: false, misconceptionId: "C01-M4", value: "s_revived" },
        { key: "C", text: t`R cells are virulent anyway`, correct: false, misconceptionId: "C01-M5", value: "r_virulent_anyway" },
        { key: "D", text: t`heating made the S cells toxic`, correct: false, misconceptionId: "C01-M6", value: "heat_toxic" },
      ],
      solution: {
        steps: [
          t`The dead S cells' DNA entered live R cells.`,
          t`They were transformed into S.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Avery, MacLeod and McCarty found that transformation was stopped only by`,
      verify: { kind: "value", inputs: {  }, params: { q: "avery" } },
      options: [
        { key: "A", text: t`RNase`, correct: false, misconceptionId: "C01-M8", value: "rnase" },
        { key: "B", text: t`lipase`, correct: false, misconceptionId: "C01-M9", value: "lipase" },
        { key: "C", text: t`DNase`, correct: true, value: "dnase" },
        { key: "D", text: t`protease`, correct: false, misconceptionId: "C01-M7", value: "protease" },
      ],
      solution: {
        steps: [
          t`Only DNase destroys DNA.`,
          t`So only DNase stopped transformation.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2024 Q. 1(iii)" },
      stem: t`A protein-digesting enzyme is`,
      verify: { kind: "value", inputs: {  }, params: { q: "protease" } },
      options: [
        { key: "A", text: t`protease`, correct: true, value: "protease" },
        { key: "B", text: t`polymerase`, correct: false, misconceptionId: "C01-M10", value: "polymerase" },
        { key: "C", text: t`pectinase`, correct: false, misconceptionId: "C01-M11", value: "pectinase" },
        { key: "D", text: t`RNase`, correct: false, misconceptionId: "C01-M12", value: "rnase" },
      ],
      solution: {
        steps: [
          t`Proteins are digested by proteases.`,
          t`Protease.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`In the Hershey–Chase experiment, the label found inside the infected bacteria was`,
      verify: { kind: "value", inputs: {  }, params: { q: "hershey" } },
      options: [
        { key: "A", text: t`$^{32}\mathrm{P}$, which labels DNA`, correct: true, value: "p32_dna" },
        { key: "B", text: t`$^{35}\mathrm{S}$, which labels protein`, correct: false, misconceptionId: "C01-M13", value: "s35_protein" },
        { key: "C", text: t`both labels equally`, correct: false, misconceptionId: "C01-M14", value: "both_labels" },
        { key: "D", text: t`neither label`, correct: false, misconceptionId: "C01-M15", value: "neither_label" },
      ],
      solution: {
        steps: [
          t`Phage DNA was labelled with ³²P.`,
          t`That label entered the bacteria.`,
        ],
      },
    },
  ],
};
