import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Glucose has the formula $\ce{C6H12O6}$, but a formula does not show the structure. How did chemists, without modern instruments, work out where every atom goes?`,
    reveal: t`They ran reactions, each proving one feature: a six-carbon chain, an aldehyde group, five OH groups. Then puzzles in the evidence revealed a ring.`,
  },
  explanation: {
    intuition: [
      t`Each reaction of glucose proves one feature of its structure.`,
      t`Together they give the open chain: $\ce{CHO-(CHOH)4-CH2OH}$.`,
      t`In solution, glucose mainly exists as six-membered rings, the $\alpha$ and $\beta$ pyranoses.`,
      t`D or L is set by the OH on the lowest chiral carbon.`,
    ],
    formal: [
      {
        title: "Evidence for the open chain",
        points: [
          t`HI and heat give n-hexane: six carbons in a straight chain.`,
          t`Hydroxylamine gives an oxime: a C=O group.`,
          t`Bromine water gives gluconic acid: the C=O is a CHO group.`,
          t`Acetic anhydride gives a pentaacetate: five OH groups.`,
          t`Nitric acid gives saccharic acid: a primary OH group as well as the CHO.`,
        ],
      },
      {
        title: "Rings and isomers",
        points: [
          t`The C-5 OH adds to the CHO, making a ring and a new OH at C-1, the **anomeric** OH.`,
          t`$\alpha$ and $\beta$ glucose differ only at C-1: they are **anomers**.`,
          t`The open chain has four chiral carbons, so $2^4 = 16$ stereoisomers.`,
          t`D-glucose has the OH of C-5 on the right in the Fischer projection.`,
        ],
      },
    ],
    worked: {
      prompt: t`A compound of molar mass 90 g/mol gives an acetyl derivative of 174 g/mol. How many OH groups has it?`,
      steps: [
        t`Each acetylation replaces H by $\ce{COCH3}$, adding 42 g/mol.`,
        t`174 − 90 = 84 = 2 × 42.`,
      ],
      answer: t`2 OH groups`,
    },
    visualSpec: t`Fold the open chain of glucose so the C-5 OH reaches the CHO and closes into a ring.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Takes the oxime test for the test for OH groups.",
      remediation: "Hydroxylamine reacts with the C=O group, not with OH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Takes the bromine water test for the test for OH groups.",
      remediation: "Bromine water oxidises the CHO group; it does not count OH groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Takes the nitric acid test for the test for OH groups.",
      remediation: "Nitric acid shows the primary OH and CHO; acetylation counts all five OH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Uses one mole of anhydride per mole of glucose.",
      remediation: "Each OH needs one anhydride: 5 per glucose.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Forgets to scale to the moles of glucose given.",
      remediation: "5 mol per mol of glucose, so 2 mol needs 10 mol.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Divides by the moles of glucose instead of multiplying.",
      remediation: "Each mole of glucose needs 5 mol, so 2 mol needs 2 × 5 = 10.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks the open chain has no CHO group.",
      remediation: "The open chain has a free CHO; the ring form hides it.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks the open chain has no primary OH.",
      remediation: t`C-6 carries a $\ce{CH2OH}$, a primary OH.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks the open chain has no secondary OH.",
      remediation: "C-2 to C-5 each carry a secondary OH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Counts the chiral carbons, not the isomers.",
      remediation: t`$n$ chiral carbons give $2^n$ isomers: $2^4 = 16$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Uses three chiral carbons.",
      remediation: "C-2, C-3, C-4 and C-5 are all chiral: four, so 16 isomers.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Counts the anomeric carbon of the ring.",
      remediation: "The open chain has four chiral carbons; C-1 becomes chiral only in the ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Confuses bromine water with nitric acid.",
      remediation: "Bromine water oxidises only the CHO, giving gluconic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks bromine water reduces glucose.",
      remediation: "Bromine water is an oxidant: CHO becomes COOH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Confuses bromine water with HI.",
      remediation: "HI reduces glucose to n-hexane; bromine water oxidises it.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#6" },
      stem: t`Which reagent confirms that glucose has five OH groups?`,
      verify: { kind: "value", inputs: {  }, params: { q: "five_oh" } },
      options: [
        { key: "A", text: t`hydroxylamine`, correct: false, misconceptionId: "C02-M1", value: "hydroxylamine" },
        { key: "B", text: t`acetic anhydride`, correct: true, value: "acetic_anhydride" },
        { key: "C", text: t`bromine water`, correct: false, misconceptionId: "C02-M2", value: "bromine_water" },
        { key: "D", text: t`dilute nitric acid`, correct: false, misconceptionId: "C02-M3", value: "nitric_acid" },
      ],
      solution: {
        steps: [
          t`Acetic anhydride acetylates each OH.`,
          t`A pentaacetate shows five OH groups.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#2" },
      stem: t`How many moles of acetic anhydride are needed to make glucose pentaacetate from 2 mol of glucose?`,
      verify: { kind: "value", inputs: {  }, params: { q: "anhydride" } },
      options: [
        { key: "A", text: t`2`, correct: false, misconceptionId: "C02-M4", value: "two" },
        { key: "B", text: t`5`, correct: false, misconceptionId: "C02-M5", value: "five" },
        { key: "C", text: t`10`, correct: true, value: "ten" },
        { key: "D", text: t`2.5`, correct: false, misconceptionId: "C02-M6", value: "two_point_five" },
      ],
      solution: {
        steps: [
          t`Five OH groups: 5 mol of anhydride per mol of glucose.`,
          t`2 mol × 5 = 10 mol.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biomolecules-12-chem/Ex Q.1 (ii)" },
      stem: t`The open-chain formula of glucose does not contain`,
      verify: { kind: "value", inputs: {  }, params: { q: "open_chain" } },
      options: [
        { key: "A", text: t`a secondary OH group`, correct: false, misconceptionId: "C02-M9", value: "secondary_oh" },
        { key: "B", text: t`a primary OH group`, correct: false, misconceptionId: "C02-M8", value: "primary_oh" },
        { key: "C", text: t`a formyl (CHO) group`, correct: false, misconceptionId: "C02-M7", value: "formyl" },
        { key: "D", text: t`an anomeric OH group`, correct: true, value: "anomeric_oh" },
      ],
      solution: {
        steps: [
          t`The anomeric OH forms when the ring closes.`,
          t`The open chain has none.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#8" },
      stem: t`How many optical isomers are possible for the open-chain structure of glucose?`,
      verify: { kind: "value", inputs: {  }, params: { q: "isomers" } },
      options: [
        { key: "A", text: t`16`, correct: true, value: "sixteen" },
        { key: "B", text: t`32`, correct: false, misconceptionId: "C02-M12", value: "thirty_two" },
        { key: "C", text: t`4`, correct: false, misconceptionId: "C02-M10", value: "four" },
        { key: "D", text: t`8`, correct: false, misconceptionId: "C02-M11", value: "eight" },
      ],
      solution: {
        steps: [
          t`Four chiral carbons: C-2 to C-5.`,
          t`$2^4 = 16$ optical isomers.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/biomolecules-12-pyq#1" },
      stem: t`Glucose is treated with bromine water. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bromine" } },
      options: [
        { key: "A", text: t`n-hexane`, correct: false, misconceptionId: "C02-M15", value: "n_hexane" },
        { key: "B", text: t`gluconic acid`, correct: true, value: "gluconic_acid" },
        { key: "C", text: t`saccharic acid`, correct: false, misconceptionId: "C02-M13", value: "saccharic_acid" },
        { key: "D", text: t`sorbitol`, correct: false, misconceptionId: "C02-M14", value: "sorbitol" },
      ],
      solution: {
        steps: [
          t`Bromine water oxidises CHO to COOH.`,
          t`Glucose gives gluconic acid.`,
        ],
      },
    },
  ],
};
