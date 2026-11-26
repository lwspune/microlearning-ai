import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Benzene needs bromine with an iron catalyst to react, and then takes one bromine. Phenol decolourises bromine water instantly and takes three. Why is phenol so much more reactive?`,
    reveal: t`The OH group's lone pair feeds electrons into the ring by resonance, especially at the ortho and para positions, so electrophiles attack quickly and repeatedly.`,
  },
  explanation: {
    intuition: [
      t`The OH group donates electrons into the benzene ring by resonance.`,
      t`So the ring of phenol is far richer in electrons than benzene's.`,
      t`Electrophiles attack it easily, without a catalyst.`,
      t`The extra electron density sits at the ortho and para positions, so substituents go there.`,
    ],
    formal: [
      {
        title: "Halogenation and nitration",
        points: [
          t`Bromine water gives a white precipitate of 2,4,6-tribromophenol at once.`,
          t`Bromine in $\ce{CS2}$ at low temperature gives mainly 4-bromophenol, with some 2-bromophenol.`,
          t`Dilute $\ce{HNO3}$ at room temperature gives 2- and 4-nitrophenol.`,
          t`Concentrated $\ce{HNO3}$ gives 2,4,6-trinitrophenol, called picric acid.`,
        ],
      },
      {
        title: "Kolbe's reaction",
        points: [
          t`Sodium phenoxide is even more reactive than phenol.`,
          t`It reacts with $\ce{CO2}$, a weak electrophile, at $398\ \mathrm{K}$ and $6\ \mathrm{atm}$.`,
          t`Acid then gives salicylic acid, 2-hydroxybenzoic acid.`,
          t`Salicylic acid is the starting material for aspirin.`,
        ],
      },
      {
        title: "Reduction with zinc dust",
        points: [
          t`Distilling phenol with zinc dust removes its oxygen.`,
          t`$\ce{C6H5OH + Zn}$ $\ce{-> C6H6 + ZnO}$: benzene forms.`,
        ],
      },
    ],
    worked: {
      prompt: t`Phenol is treated with bromine in $\ce{CS2}$ at $273\ \mathrm{K}$. What is the main product?`,
      steps: [
        t`In a non-polar solvent and cold, bromination is slower and stops after one bromine.`,
        t`OH directs to ortho and para; para is less crowded.`,
      ],
      answer: t`4-Bromophenol (mainly), with some 2-bromophenol`,
    },
    visualSpec: t`Shade the ring's electron density with and without an OH group, then drop electrophiles where it is darkest.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Expects only one substitution, even with bromine water or concentrated $\ce{HNO3}$.`,
      remediation: t`The OH group activates the ring so strongly that bromine water and conc. $\ce{HNO3}$ substitute all three ortho and para positions.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Thinks the OH group directs electrophiles to the meta position.",
      remediation: "OH donates electrons to the ortho and para positions, so substituents go there.",
      fallback: { kind: "ext", topic: "electrophilic substitution in benzene (Std XI Chemistry)" },
    },
    {
      id: "C07-M3",
      mistake: "Thinks phenol, like benzene, needs a Lewis acid catalyst to react.",
      remediation: "The OH group activates the ring enough for phenol to react without any catalyst.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Confuses Kolbe's reaction with the Reimer-Tiemann reaction.",
      remediation: t`Kolbe's reaction uses $\ce{CO2}$ and gives salicylic acid; $\ce{CHCl3}$ and alkali (Reimer-Tiemann) give salicylaldehyde.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: t`Thinks $\ce{CO2}$ replaces the OH group.`,
      remediation: t`The OH group stays; $\ce{CO2}$ substitutes a ring hydrogen ortho to it, giving 2-hydroxybenzoic acid.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks dilute nitric acid nitrates phenol three times.",
      remediation: t`Dilute $\ce{HNO3}$ at room temperature adds one nitro group; only concentrated acid gives picric acid.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks zinc dust reduces the benzene ring to cyclohexane.",
      remediation: "Zinc dust removes only the oxygen; the aromatic ring stays: benzene forms.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Thinks zinc dust leaves phenol unchanged.",
      remediation: "Hot zinc dust takes the oxygen from phenol, giving benzene and zinc oxide.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks zinc just forms a salt, zinc phenoxide, like sodium does.",
      remediation: "On distillation zinc removes the oxygen entirely, giving benzene and ZnO.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#11" },
      stem: t`Bromine water is added to an aqueous solution of phenol. What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "br2" } },
      options: [
        { key: "A", text: t`3-bromophenol`, correct: false, misconceptionId: "C07-M2", value: "m_bromophenol" },
        { key: "B", text: t`no reaction without a Lewis acid catalyst`, correct: false, misconceptionId: "C07-M3", value: "no_reaction" },
        { key: "C", text: t`a white precipitate of 2,4,6-tribromophenol`, correct: true, value: "tribromophenol" },
        { key: "D", text: t`2-bromophenol and 4-bromophenol only`, correct: false, misconceptionId: "C07-M1", value: "mono_o_p" },
      ],
      solution: {
        steps: [
          t`OH strongly activates the ortho and para positions.`,
          t`Bromine water brominates all three at once: 2,4,6-tribromophenol, a white precipitate.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.2 (iv)" },
      stem: t`Sodium phenoxide is heated with $\ce{CO2}$ at $398\ \mathrm{K}$ and $6\ \mathrm{atm}$, and the product is acidified (Kolbe's reaction). What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "kolbe" } },
      options: [
        { key: "A", text: t`3-hydroxybenzoic acid`, correct: false, misconceptionId: "C07-M2", value: "m_hydroxybenzoic" },
        { key: "B", text: t`salicylaldehyde (2-hydroxybenzaldehyde)`, correct: false, misconceptionId: "C07-M4", value: "salicylaldehyde" },
        { key: "C", text: t`benzoic acid, as $\ce{COOH}$ replaces the OH`, correct: false, misconceptionId: "C07-M5", value: "benzoic_acid" },
        { key: "D", text: t`salicylic acid (2-hydroxybenzoic acid)`, correct: true, value: "salicylic_acid" },
      ],
      solution: {
        steps: [
          t`$\ce{CO2}$ attacks the ring of the reactive phenoxide, ortho to O.`,
          t`Acid then gives 2-hydroxybenzoic acid, salicylic acid.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/alcohols-phenols-ethers-12-chem/Ex Q.3 (iv)" },
      stem: t`Phenol is treated with dilute nitric acid at room temperature. What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "dil" } },
      options: [
        { key: "A", text: t`2,4,6-trinitrophenol (picric acid)`, correct: false, misconceptionId: "C07-M6", value: "picric_acid" },
        { key: "B", text: t`2-nitrophenol and 4-nitrophenol`, correct: true, value: "o_p_nitrophenol" },
        { key: "C", text: t`3-nitrophenol`, correct: false, misconceptionId: "C07-M2", value: "m_nitrophenol" },
        { key: "D", text: t`no reaction without a Lewis acid catalyst`, correct: false, misconceptionId: "C07-M3", value: "no_reaction" },
      ],
      solution: {
        steps: [
          t`Dilute $\ce{HNO3}$ adds one nitro group.`,
          t`OH directs it ortho and para: 2- and 4-nitrophenol.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#10" },
      stem: t`Phenol is treated with concentrated nitric acid (or the nitrating mixture). What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "conc" } },
      options: [
        { key: "A", text: t`2,4,6-trinitrophenol (picric acid)`, correct: true, value: "picric_acid" },
        { key: "B", text: t`2-nitrophenol and 4-nitrophenol only`, correct: false, misconceptionId: "C07-M1", value: "o_p_nitrophenol" },
        { key: "C", text: t`3-nitrophenol`, correct: false, misconceptionId: "C07-M2", value: "m_nitrophenol" },
        { key: "D", text: t`no reaction without a Lewis acid catalyst`, correct: false, misconceptionId: "C07-M3", value: "no_reaction" },
      ],
      solution: {
        steps: [
          t`Concentrated nitric acid nitrates every activated position.`,
          t`That gives 2,4,6-trinitrophenol, picric acid.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/alcohols-phenols-ethers-12-pyq#8" },
      stem: t`Phenol is distilled with zinc dust. What forms?`,
      verify: { kind: "value", inputs: {  }, params: { q: "zinc" } },
      options: [
        { key: "A", text: t`cyclohexane`, correct: false, misconceptionId: "C07-M7", value: "cyclohexane" },
        { key: "B", text: t`phenol distils over unchanged`, correct: false, misconceptionId: "C07-M8", value: "unchanged" },
        { key: "C", text: t`zinc phenoxide only`, correct: false, misconceptionId: "C07-M9", value: "zinc_phenoxide" },
        { key: "D", text: t`benzene, with zinc oxide`, correct: true, value: "benzene" },
      ],
      solution: {
        steps: [
          t`Zinc dust removes the oxygen from phenol.`,
          t`$\ce{C6H5OH + Zn}$ $\ce{-> C6H6 + ZnO}$: benzene.`,
        ],
      },
    },
  ],
};
