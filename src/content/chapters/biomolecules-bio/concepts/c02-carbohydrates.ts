import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Bread tastes sweet if you chew it long enough. Why?`,
    reveal: t`Saliva breaks starch, a long chain of glucose, into smaller sugars that taste sweet.`,
  },
  explanation: {
    intuition: [
      t`**Carbohydrates**: C, H and O, formula $\ce{C_x(H2O)_y}$.`,
      t`Classes: mono-, oligo- (di-) and polysaccharides.`,
      t`Sugar units are joined by **glycosidic bonds**.`,
    ],
    formal: [
      {
        title: "Sugars",
        points: [
          t`Glucose is the main fuel for ATP.`,
          t`**Reducing sugars** have a free aldehyde or ketone group and reduce **Benedict's reagent**.`,
          t`Plants transport carbohydrate as **sucrose**.`,
        ],
      },
      {
        title: "Polysaccharides",
        points: [
          t`**Homopolysaccharides** (one kind of unit): **starch** (plants), **glycogen** (animals), **cellulose** (walls).`,
          t`**Heteropolysaccharides**: more than one kind of unit.`,
          t`Glycosidic bonds also link sugar to base in nucleosides.`,
        ],
      },
    ],
    worked: {
      prompt: t`A solution turns brick-red when heated with Benedict's reagent. What does it contain?`,
      steps: [
        t`Reducing sugars reduce Benedict's reagent.`,
        t`The colour change shows this.`,
      ],
      answer: t`A reducing sugar`,
    },
    visualSpec: t`Glucose units joined by glycosidic bonds into a branching chain.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Says disaccharides only.",
      remediation: "Nucleosides and polysaccharides too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says nucleosides only.",
      remediation: "Sugars too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says polysaccharides only.",
      remediation: "Disaccharides too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks iodine.",
      remediation: "Iodine tests starch.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks biuret.",
      remediation: "Biuret tests protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks Sudan.",
      remediation: "Sudan tests fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says no free group.",
      remediation: "The free group does the reducing.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says peptide group.",
      remediation: "That is proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says phosphate.",
      remediation: "That is nucleotides.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says plant storage.",
      remediation: "That is starch.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says heteropolysaccharide.",
      remediation: "Glycogen is all glucose.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says disaccharide.",
      remediation: "Glycogen is a polymer.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says glucose.",
      remediation: "Glucose is converted for transport.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says starch.",
      remediation: "Starch is stored.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says cellulose.",
      remediation: "Cellulose is structural.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q1(B)" },
      stem: t`A glycosidic bond is found in`,
      verify: { kind: "value", inputs: {  }, params: { q: "glycosidic" } },
      options: [
        { key: "A", text: t`disaccharides, nucleosides and polysaccharides`, correct: true, value: "each_of_these" },
        { key: "B", text: t`disaccharides only`, correct: false, misconceptionId: "C02-M1", value: "disaccharide_only" },
        { key: "C", text: t`nucleosides only`, correct: false, misconceptionId: "C02-M2", value: "nucleosides_only" },
        { key: "D", text: t`polysaccharides only`, correct: false, misconceptionId: "C02-M3", value: "polysaccharide_only" },
      ],
      solution: {
        steps: [
          t`Links sugar units.`,
          t`Disaccharides, nucleosides, polysaccharides.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q7(iii)" },
      stem: t`The reagent used to test for reducing sugars is`,
      verify: { kind: "value", inputs: {  }, params: { q: "test" } },
      options: [
        { key: "A", text: t`iodine solution`, correct: false, misconceptionId: "C02-M4", value: "iodine_r" },
        { key: "B", text: t`biuret reagent`, correct: false, misconceptionId: "C02-M5", value: "biuret_r" },
        { key: "C", text: t`Sudan III`, correct: false, misconceptionId: "C02-M6", value: "sudan_r" },
        { key: "D", text: t`Benedict's reagent`, correct: true, value: "benedicts_r" },
      ],
      solution: {
        steps: [
          t`Copper reagent.`,
          t`Benedict's reagent.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(E)" },
      stem: t`A reducing sugar has`,
      verify: { kind: "value", inputs: {  }, params: { q: "reducing" } },
      options: [
        { key: "A", text: t`a phosphate group`, correct: false, misconceptionId: "C02-M9", value: "phosphate_group" },
        { key: "B", text: t`a free aldehyde or ketone group`, correct: true, value: "free_aldehyde_ketone" },
        { key: "C", text: t`no free group`, correct: false, misconceptionId: "C02-M7", value: "no_free_group" },
        { key: "D", text: t`a peptide group`, correct: false, misconceptionId: "C02-M8", value: "peptide_group" },
      ],
      solution: {
        steps: [
          t`Free carbonyl.`,
          t`A free aldehyde or ketone group.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(C)" },
      stem: t`Glycogen is`,
      verify: { kind: "value", inputs: {  }, params: { q: "glycogen" } },
      options: [
        { key: "A", text: t`a disaccharide`, correct: false, misconceptionId: "C02-M12", value: "disaccharide_g" },
        { key: "B", text: t`the storage homopolysaccharide of animals`, correct: true, value: "animal_homo" },
        { key: "C", text: t`the storage polysaccharide of plants`, correct: false, misconceptionId: "C02-M10", value: "plant_storage" },
        { key: "D", text: t`a heteropolysaccharide`, correct: false, misconceptionId: "C02-M11", value: "hetero_poly" },
      ],
      solution: {
        steps: [
          t`Animal starch.`,
          t`Animal storage homopolysaccharide.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q7(ii)" },
      stem: t`Carbohydrate made in the leaves is transported through a plant as`,
      verify: { kind: "value", inputs: {  }, params: { q: "transport" } },
      options: [
        { key: "A", text: t`cellulose`, correct: false, misconceptionId: "C02-M15", value: "cellulose_c" },
        { key: "B", text: t`sucrose`, correct: true, value: "sucrose_c" },
        { key: "C", text: t`glucose`, correct: false, misconceptionId: "C02-M13", value: "glucose_c" },
        { key: "D", text: t`starch`, correct: false, misconceptionId: "C02-M14", value: "starch_c" },
      ],
      solution: {
        steps: [
          t`Phloem sugar.`,
          t`Sucrose.`,
        ],
      },
    },
  ],
};
