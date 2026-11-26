import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Raw egg white is clear and runny. Boil it, and it turns white and solid, and cooling never undoes it. What has the heat changed?`,
    reveal: t`The protein's chains were folded in a precise shape, held by weak bonds. Heat breaks those bonds; the chains unfold and tangle. The sequence of amino acids is unchanged.`,
  },
  explanation: {
    intuition: [
      t`Amino acids join by **peptide bonds** into long chains.`,
      t`The chain folds and coils into a precise 3-D shape.`,
      t`That shape, not just the sequence, lets the protein do its job.`,
      t`Weak bonds hold the shape, so heat or acid can destroy it: **denaturation**.`,
    ],
    formal: [
      {
        title: "Peptide bonds",
        points: [
          t`COOH of one amino acid + $\ce{NH2}$ of the next → $\ce{-CO-NH-}$ + $\ce{H2O}$.`,
          t`Two amino acids make a dipeptide; many make a polypeptide.`,
        ],
      },
      {
        title: "Levels of structure",
        points: [
          t`**Primary**: the sequence of amino acids.`,
          t`**Secondary**: $\alpha$-helix (H bonds within a chain) or $\beta$-pleated sheet (H bonds between chains).`,
          t`**Tertiary**: the overall folding, held by H bonds, disulfide links and ionic and van der Waals forces.`,
          t`**Quaternary**: the arrangement of two or more chains.`,
          t`Denaturation destroys secondary and tertiary structure; the primary structure stays.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the dipeptide Gly-Ala.`,
      steps: [
        t`Glycine's COOH joins alanine's $\ce{NH2}$, losing water.`,
        t`$\ce{H2N-CH2-CO-}$ $\ce{NH-CH(CH3)-COOH}$.`,
      ],
      answer: t`$\ce{H2N-CH2-CO-}$ $\ce{NH-CH(CH3)-COOH}$`,
    },
    visualSpec: t`Build a protein up level by level: a chain of beads, a coil, a folded ball, then several balls together.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks every covalent link belongs to the primary structure.",
      remediation: "Disulfide links fold the chain: tertiary structure.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Confuses the disulfide link with the helix.",
      remediation: t`The $\alpha$-helix is held by hydrogen bonds; disulfide links fold the chain.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks disulfide links make quaternary structure.",
      remediation: "Quaternary structure is the packing of separate chains; disulfide links fold a chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks peptide bonds hold the helix.",
      remediation: "Peptide bonds make the chain; hydrogen bonds coil it.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks disulfide bridges hold the helix.",
      remediation: "The helix is held by hydrogen bonds within the chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Confuses the helix with the $\beta$-sheet.`,
      remediation: t`Hydrogen bonds between chains make a $\beta$-sheet; within one chain, a helix.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks boiling hydrolyses peptide bonds.",
      remediation: "Boiling water alone does not hydrolyse peptide bonds; only the weak bonds break.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks the protein burns.",
      remediation: "At 373 K nothing burns; the protein unfolds and coagulates.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks the water evaporates.",
      remediation: "The egg stays moist; its protein has unfolded.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Calls the peptide bond an ester link.",
      remediation: t`N joins the carbonyl carbon: an amide, $\ce{-CO-NH-}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Calls the peptide bond a hydrogen bond.",
      remediation: "A peptide bond is a covalent amide bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks the peptide bond forms by adding water.",
      remediation: "Water is removed as the bond forms; adding water hydrolyses it.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Confuses primary with secondary structure.",
      remediation: "Helices and sheets are secondary; primary is the sequence.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Confuses primary with tertiary structure.",
      remediation: "3-D folding is tertiary; primary is the sequence.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Confuses primary with quaternary structure.",
      remediation: "Arrangement of chains is quaternary; primary is the sequence.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.1 (v)" },
      stem: t`A disulfide link gives rise to which structure of a protein?`,
      verify: { kind: "value", inputs: {  }, params: { q: "disulfide" } },
      options: [
        { key: "A", text: t`quaternary`, correct: false, misconceptionId: "C05-M3", value: "quaternary" },
        { key: "B", text: t`secondary`, correct: false, misconceptionId: "C05-M2", value: "secondary" },
        { key: "C", text: t`primary`, correct: false, misconceptionId: "C05-M1", value: "primary" },
        { key: "D", text: t`tertiary`, correct: true, value: "tertiary" },
      ],
      solution: {
        steps: [
          t`Disulfide links join distant parts of a chain.`,
          t`That folding is tertiary structure.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.4 (iv)" },
      stem: t`The $\alpha$-helix of a protein is held in shape by`,
      verify: { kind: "value", inputs: {  }, params: { q: "helix" } },
      options: [
        { key: "A", text: t`hydrogen bonds between C=O and N-H groups of the same chain`, correct: true, value: "h_bonds_same_chain" },
        { key: "B", text: t`disulfide bridges`, correct: false, misconceptionId: "C05-M5", value: "disulfide" },
        { key: "C", text: t`hydrogen bonds between neighbouring chains`, correct: false, misconceptionId: "C05-M6", value: "h_bonds_between_chains" },
        { key: "D", text: t`peptide bonds`, correct: false, misconceptionId: "C05-M4", value: "peptide_bonds" },
      ],
      solution: {
        steps: [
          t`In the $\alpha$-helix, each C=O bonds to an N-H four units along.`,
          t`These are hydrogen bonds within one chain.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.2 (v)" },
      stem: t`On boiling, egg albumin turns opaque white. This happens because`,
      verify: { kind: "value", inputs: {  }, params: { q: "albumin" } },
      options: [
        { key: "A", text: t`its peptide bonds are hydrolysed to amino acids`, correct: false, misconceptionId: "C05-M7", value: "hydrolysed" },
        { key: "B", text: t`heat breaks the hydrogen bonds that hold the folded shape: the protein is denatured`, correct: true, value: "denatured" },
        { key: "C", text: t`the protein burns`, correct: false, misconceptionId: "C05-M8", value: "burnt" },
        { key: "D", text: t`its water evaporates, leaving solid protein`, correct: false, misconceptionId: "C05-M9", value: "dried" },
      ],
      solution: {
        steps: [
          t`Heat breaks the weak bonds holding the shape.`,
          t`The albumin denatures and coagulates.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#17" },
      stem: t`A peptide bond is`,
      verify: { kind: "value", inputs: {  }, params: { q: "peptide" } },
      options: [
        { key: "A", text: t`a hydrogen bond between C=O and N-H`, correct: false, misconceptionId: "C05-M11", value: "hydrogen_bond" },
        { key: "B", text: t`a link formed by adding water between two amino acids`, correct: false, misconceptionId: "C05-M12", value: "adds_water" },
        { key: "C", text: t`the amide link $\ce{-CO-NH-}$ formed from COOH and $\ce{NH2}$ with loss of water`, correct: true, value: "amide_minus_water" },
        { key: "D", text: t`an ester link, $\ce{-CO-O-}$`, correct: false, misconceptionId: "C05-M10", value: "ester" },
      ],
      solution: {
        steps: [
          t`COOH and $\ce{NH2}$ join, losing water.`,
          t`The link is an amide, $\ce{-CO-NH-}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`The primary structure of a protein is`,
      verify: { kind: "value", inputs: {  }, params: { q: "primary" } },
      options: [
        { key: "A", text: t`the arrangement of its separate chains`, correct: false, misconceptionId: "C05-M15", value: "chains" },
        { key: "B", text: t`the coiling of its chain into an $\alpha$-helix or $\beta$-sheet`, correct: false, misconceptionId: "C05-M13", value: "helix_sheet" },
        { key: "C", text: t`the folding of its whole chain in three dimensions`, correct: false, misconceptionId: "C05-M14", value: "folding" },
        { key: "D", text: t`the sequence of amino acids in its chain`, correct: true, value: "aa_sequence" },
      ],
      solution: {
        steps: [
          t`Primary structure is the first level.`,
          t`It is the order of amino acids in the chain.`,
        ],
      },
    },
  ],
};
