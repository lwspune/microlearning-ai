import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Glycine has a mass of 75 and melts above 500 K. Propanoic acid, of similar mass, melts at 252 K. Why is glycine a high-melting solid?`,
    reveal: t`In glycine the COOH gives its proton to its own $\ce{NH2}$, forming $\ce{H3N+-CH2-COO-}$. Crystals of these charged ions are held by strong ionic attractions, like a salt.`,
  },
  explanation: {
    intuition: [
      t`An $\alpha$-amino acid has $\ce{NH2}$ and COOH on the same carbon: $\ce{H2N-CHR-COOH}$.`,
      t`The acidic COOH and basic $\ce{NH2}$ react internally, forming a **zwitterion**, $\ce{H3N+-CHR-COO-}$.`,
      t`So amino acids behave like salts: high melting, soluble in water.`,
      t`Except glycine, they are chiral; natural ones are L.`,
    ],
    formal: [
      {
        title: "Classes",
        points: [
          t`Neutral, acidic or basic by the number of COOH and $\ce{NH2}$ groups.`,
          t`**Essential** amino acids cannot be made by the body and must come from food.`,
          t`Glycine ($\ce{R = H}$) has no chiral carbon, so it is neither D nor L.`,
        ],
      },
      {
        title: "Amphoteric behaviour",
        points: [
          t`In acid the $\ce{COO-}$ takes a proton: $\ce{H3N+-CHR-COOH}$.`,
          t`In base the $\ce{NH3+}$ loses a proton: $\ce{H2N-CHR-COO-}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the zwitterion of alanine, $\ce{CH3CH(NH2)COOH}$.`,
      steps: [
        t`COOH loses $\ce{H+}$ to become $\ce{COO-}$.`,
        t`$\ce{NH2}$ gains it to become $\ce{NH3+}$.`,
      ],
      answer: t`$\ce{CH3CH(NH3+)COO-}$`,
    },
    visualSpec: t`Shift the pH and watch glycine change between its cation, zwitterion and anion.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks glycine is an acidic amino acid.",
      remediation: t`Glycine has one $\ce{NH2}$ and one COOH: it is neutral.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks only amino acids with extra charged groups form zwitterions.",
      remediation: t`Every amino acid's own COOH and $\ce{NH2}$ form a zwitterion.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks natural amino acids must be chiral.",
      remediation: "Glycine is natural and achiral; the others are L.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks essential means having an aromatic ring.",
      remediation: "Essential means the body cannot make it; many have no ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks essential means present in every protein.",
      remediation: "Essential refers to diet: the body cannot make it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks essential means a part of every enzyme.",
      remediation: "Essential amino acids must come from food; it says nothing about enzymes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Credits COOH dimers.",
      remediation: "Carboxylic acids also form dimers; amino acids are ionic zwitterions.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Credits a higher molar mass.",
      remediation: "The masses are similar; the ionic zwitterion makes the difference.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks amino acids are covalent network solids.",
      remediation: "They are molecular ionic solids, held by attractions between zwitterions.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Writes the un-ionised form.",
      remediation: t`The COOH proton moves to $\ce{NH2}$; the uncharged form is minor.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Writes the cation, found in acid.",
      remediation: t`In the solid, the zwitterion $\ce{H3N+-CH2-COO-}$ is present.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Writes the anion, found in base.",
      remediation: t`In the solid, the zwitterion $\ce{H3N+-CH2-COO-}$ is present.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks the zwitterion stays at any pH.",
      remediation: t`Base removes the proton from $\ce{NH3+}$, giving the anion.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks a base adds a proton.",
      remediation: t`A base removes protons, so the $\ce{NH3+}$ becomes $\ce{NH2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.1 (iii)" },
      stem: t`Which of these does not apply to glycine, $\ce{H2N-CH2-COOH}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "glycine" } },
      options: [
        { key: "A", text: t`it exists as a zwitterion`, correct: false, misconceptionId: "C04-M2", value: "zwitterion" },
        { key: "B", text: t`it is an L-amino acid`, correct: true, value: "l_amino_acid" },
        { key: "C", text: t`it is a natural amino acid`, correct: false, misconceptionId: "C04-M3", value: "natural" },
        { key: "D", text: t`it is a neutral amino acid`, correct: false, misconceptionId: "C04-M1", value: "neutral" },
      ],
      solution: {
        steps: [
          t`Glycine's $\alpha$-carbon has two H atoms.`,
          t`No chiral carbon, so it is not L.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.1 (iv)" },
      stem: t`Tryptophan is called an essential amino acid because`,
      verify: { kind: "value", inputs: {  }, params: { q: "essential" } },
      options: [
        { key: "A", text: t`it contains an aromatic ring`, correct: false, misconceptionId: "C04-M4", value: "aromatic" },
        { key: "B", text: t`it is present in every human protein`, correct: false, misconceptionId: "C04-M5", value: "in_all_proteins" },
        { key: "C", text: t`the human body cannot make it`, correct: true, value: "not_synthesised" },
        { key: "D", text: t`it is an essential part of all enzymes`, correct: false, misconceptionId: "C04-M6", value: "for_enzymes" },
      ],
      solution: {
        steps: [
          t`Essential amino acids cannot be made by the body.`,
          t`So tryptophan must come from food.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.2 (iii)" },
      stem: t`$\alpha$-Amino acids melt far higher than amines or carboxylic acids of similar mass because`,
      verify: { kind: "value", inputs: {  }, params: { q: "melting" } },
      options: [
        { key: "A", text: t`they have higher molar masses`, correct: false, misconceptionId: "C04-M8", value: "high_mass" },
        { key: "B", text: t`they are covalent network solids`, correct: false, misconceptionId: "C04-M9", value: "network" },
        { key: "C", text: t`their COOH groups pair up as dimers`, correct: false, misconceptionId: "C04-M7", value: "acid_dimers" },
        { key: "D", text: t`they exist as dipolar zwitterions held by strong ionic attractions`, correct: true, value: "zwitterion_ionic" },
      ],
      solution: {
        steps: [
          t`Amino acids exist as zwitterions.`,
          t`Strong ionic attractions need much energy to break.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.4 (ii)" },
      stem: t`In the solid state glycine exists mainly as`,
      verify: { kind: "value", inputs: {  }, params: { q: "solid" } },
      options: [
        { key: "A", text: t`$\ce{H3N+-CH2-COO-}$`, correct: true, value: "zwitterion" },
        { key: "B", text: t`$\ce{H3N+-CH2-COOH}$`, correct: false, misconceptionId: "C04-M11", value: "cation" },
        { key: "C", text: t`$\ce{H2N-CH2-COO-}$`, correct: false, misconceptionId: "C04-M12", value: "anion" },
        { key: "D", text: t`$\ce{H2N-CH2-COOH}$`, correct: false, misconceptionId: "C04-M10", value: "neutral_form" },
      ],
      solution: {
        steps: [
          t`The COOH proton moves to the $\ce{NH2}$.`,
          t`Glycine is $\ce{H3N+-CH2-COO-}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`In strongly basic solution glycine exists mainly as`,
      verify: { kind: "value", inputs: {  }, params: { q: "base" } },
      options: [
        { key: "A", text: t`$\ce{H2N-CH2-COOH}$`, correct: false, misconceptionId: "C04-M10", value: "neutral_form" },
        { key: "B", text: t`$\ce{H2N-CH2-COO-}$`, correct: true, value: "anion" },
        { key: "C", text: t`$\ce{H3N+-CH2-COO-}$`, correct: false, misconceptionId: "C04-M13", value: "zwitterion" },
        { key: "D", text: t`$\ce{H3N+-CH2-COOH}$`, correct: false, misconceptionId: "C04-M14", value: "cation" },
      ],
      solution: {
        steps: [
          t`Base removes the proton from $\ce{NH3+}$.`,
          t`Glycine is $\ce{H2N-CH2-COO-}$.`,
        ],
      },
    },
  ],
};
