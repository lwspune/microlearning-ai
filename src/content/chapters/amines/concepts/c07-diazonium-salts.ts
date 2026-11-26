import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`Benzenediazonium chloride must be kept ice cold, yet chemists treasure it. From this one salt they make chlorobenzene, phenol, benzonitrile, iodobenzene and bright azo dyes. What makes it so useful?`,
    reveal: t`$\ce{N2}$ is an excellent leaving group: almost any group can replace it. And the diazonium ion can also attack another ring to make coloured azo compounds.`,
  },
  explanation: {
    intuition: [
      t`Aniline with nitrous acid in the cold gives a diazonium salt, $\ce{C6H5N2+Cl-}$.`,
      t`Above about 278 K it decomposes, so it is made and used cold.`,
      t`In replacement reactions $\ce{N2}$ leaves and another group takes its place.`,
      t`In coupling reactions the $\ce{N=N}$ stays, joining two rings: an azo dye.`,
    ],
    formal: [
      {
        title: "Diazotisation",
        points: [
          t`$\ce{C6H5NH2 + NaNO2 + 2HCl}$ $\ce{->[273-278 K] C6H5N2+Cl-}$ $\ce{+ NaCl + 2H2O}$`,
        ],
      },
      {
        title: t`Replacing $\ce{N2}$`,
        points: [
          t`**Sandmeyer**: $\ce{CuCl/HCl}$ gives $\ce{C6H5Cl}$; $\ce{CuBr/HBr}$ gives $\ce{C6H5Br}$; $\ce{CuCN/KCN}$ gives $\ce{C6H5CN}$.`,
          t`KI gives iodobenzene; warm water gives phenol.`,
          t`Ethanol or $\ce{H3PO2}$ replaces $\ce{N2}$ by H, giving benzene.`,
        ],
      },
      {
        title: "Coupling",
        points: [
          t`With phenol in alkali: p-hydroxyazobenzene, orange.`,
          t`With aniline in weak acid: p-aminoazobenzene, yellow.`,
          t`Coupling goes to the para position; the $\ce{-N=N-}$ azo group is kept.`,
        ],
      },
    ],
    worked: {
      prompt: t`How is iodobenzene made from aniline?`,
      steps: [
        t`Diazotise aniline with $\ce{NaNO2}$ and HCl at 273–278 K.`,
        t`Warm the diazonium salt with KI.`,
      ],
      answer: t`Diazotise, then add KI`,
    },
    visualSpec: t`Start from benzenediazonium chloride and branch to each product by choosing a reagent.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Thinks diazotisation is done warm, giving phenol.",
      remediation: "Warmth decomposes the salt to phenol; at 273–278 K the diazonium salt survives.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Treats aniline like a secondary amine, giving an N-nitroso compound.",
      remediation: "Secondary amines give N-nitrosamines; primary arylamines give diazonium salts.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M3",
      mistake: t`Thinks $\ce{NaNO2}$ nitrates the ring.`,
      remediation: t`Nitrous acid attacks the $\ce{NH2}$ group, not the ring.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Takes an N-N single bond for an azo linkage.",
      remediation: t`Azo means $\ce{-N=N-}$ joining two carbon groups.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Takes the N-N=O group for an azo linkage.",
      remediation: t`An N-nitroso group is $\ce{N-N=O}$; azo is $\ce{C-N=N-C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks two amino groups make an azo compound.",
      remediation: t`Azo needs an $\ce{N=N}$ double bond; amino groups are separate.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: t`Thinks ethanol replaces $\ce{N2}$ by $\ce{OC2H5}$.`,
      remediation: t`Ethanol reduces the salt: $\ce{N2}$ is replaced by H and ethanol becomes ethanal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Confuses ethanol with warm water.",
      remediation: "Warm water gives phenol; ethanol gives benzene.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks the ethyl group goes onto the ring.",
      remediation: "Ethanol gives up H, not its ethyl group.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks the reagent turns the salt back into aniline.",
      remediation: t`The $\ce{N2}$ group leaves and CN takes its place.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Confuses the nitrile with the isocyanide.",
      remediation: t`Carbon of CN bonds to the ring: $\ce{C6H5-C#N}$, benzonitrile.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Thinks the cyanide is hydrolysed at once.",
      remediation: "CuCN/KCN gives the nitrile; hydrolysis to benzoic acid is a separate step.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: t`Thinks the phenoxide replaces $\ce{N2}$.`,
      remediation: t`In coupling the $\ce{N=N}$ stays and joins the two rings.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: t`Thinks chloride replaces $\ce{N2}$.`,
      remediation: "Replacement by Cl needs CuCl (Sandmeyer); phenol in alkali couples.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Thinks coupling goes mainly ortho.",
      remediation: "Coupling goes to the less crowded para position.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.3 (iii)" },
      stem: t`Aniline is treated with $\ce{NaNO2}$ and dil. HCl at 273–278 K. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "diazotise" } },
      options: [
        { key: "A", text: t`N-nitrosoaniline`, correct: false, misconceptionId: "C07-M2", value: "n_nitroso" },
        { key: "B", text: t`nitrobenzene`, correct: false, misconceptionId: "C07-M3", value: "nitrobenzene" },
        { key: "C", text: t`phenol`, correct: false, misconceptionId: "C07-M1", value: "phenol" },
        { key: "D", text: t`benzenediazonium chloride, $\ce{C6H5N2+Cl-}$`, correct: true, value: "diazonium" },
      ],
      solution: {
        steps: [
          t`Nitrous acid from $\ce{NaNO2}$ and HCl diazotises the $\ce{NH2}$.`,
          t`Cold, the product is $\ce{C6H5N2+Cl-}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.1 (x)" },
      stem: t`Which of these compounds contains an azo linkage?`,
      verify: { kind: "value", inputs: {  }, params: { q: "azo" } },
      options: [
        { key: "A", text: t`p-hydroxyazobenzene`, correct: true, value: "hydroxyazobenzene" },
        { key: "B", text: t`N-nitrosodiethylamine`, correct: false, misconceptionId: "C07-M5", value: "nitrosamine" },
        { key: "C", text: t`ethylenediamine`, correct: false, misconceptionId: "C07-M6", value: "ethylenediamine" },
        { key: "D", text: t`hydrazine, $\ce{H2N-NH2}$`, correct: false, misconceptionId: "C07-M4", value: "hydrazine" },
      ],
      solution: {
        steps: [
          t`An azo linkage is $\ce{-N=N-}$ between two carbons.`,
          t`Only p-hydroxyazobenzene has it.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.3 (ix)" },
      stem: t`Benzenediazonium chloride is warmed with ethanol. The organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ethanol" } },
      options: [
        { key: "A", text: t`ethylbenzene`, correct: false, misconceptionId: "C07-M9", value: "ethylbenzene" },
        { key: "B", text: t`benzene`, correct: true, value: "benzene" },
        { key: "C", text: t`ethoxybenzene (phenetole)`, correct: false, misconceptionId: "C07-M7", value: "phenetole" },
        { key: "D", text: t`phenol`, correct: false, misconceptionId: "C07-M8", value: "phenol" },
      ],
      solution: {
        steps: [
          t`Ethanol replaces $\ce{N2}$ by H.`,
          t`$\ce{C6H5N2+Cl- + C2H5OH}$ $\ce{-> C6H6 + N2 + CH3CHO + HCl}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "authored" },
      stem: t`Benzenediazonium chloride is treated with CuCN and KCN. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cyanide" } },
      options: [
        { key: "A", text: t`phenyl isocyanide, $\ce{C6H5NC}$`, correct: false, misconceptionId: "C07-M11", value: "isocyanide" },
        { key: "B", text: t`aniline`, correct: false, misconceptionId: "C07-M10", value: "aniline" },
        { key: "C", text: t`benzonitrile, $\ce{C6H5CN}$`, correct: true, value: "benzonitrile" },
        { key: "D", text: t`benzoic acid`, correct: false, misconceptionId: "C07-M12", value: "benzoic_acid" },
      ],
      solution: {
        steps: [
          t`CuCN/KCN (Sandmeyer) replaces $\ce{N2}$ by CN.`,
          t`The product is benzonitrile.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.3 (v)" },
      stem: t`Benzenediazonium chloride is added to phenol in cold NaOH solution. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "coupling" } },
      options: [
        { key: "A", text: t`diphenyl ether`, correct: false, misconceptionId: "C07-M13", value: "diphenyl_ether" },
        { key: "B", text: t`chlorobenzene`, correct: false, misconceptionId: "C07-M14", value: "chlorobenzene" },
        { key: "C", text: t`o-hydroxyazobenzene as the main product`, correct: false, misconceptionId: "C07-M15", value: "o_hydroxyazobenzene" },
        { key: "D", text: t`p-hydroxyazobenzene, an orange dye`, correct: true, value: "p_hydroxyazobenzene" },
      ],
      solution: {
        steps: [
          t`The diazonium ion attacks the para position of phenoxide.`,
          t`The $\ce{N=N}$ stays: p-hydroxyazobenzene.`,
        ],
      },
    },
  ],
};
