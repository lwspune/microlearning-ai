import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A cell's membrane is thinner than a soap bubble, yet it decides what gets in and out. How?`,
    reveal: t`It is a fluid sheet of lipids with proteins floating in it: some molecules slip through, others need protein gates.`,
  },
  explanation: {
    intuition: [
      t`Every cell is bounded by a **plasma membrane**.`,
      t`It controls transport in and out.`,
      t`It is **selectively permeable**.`,
    ],
    formal: [
      {
        title: "Fluid mosaic model",
        points: [
          t`Proposed by **Singer and Nicolson** (1972), replacing Danielli and Davson's sandwich model.`,
          t`Proteins float like icebergs in a sea of **lipid** (mostly phospholipid) bilayer.`,
          t`The lipid's fluidity lets proteins move sideways.`,
        ],
      },
      {
        title: "Carbohydrates",
        points: [
          t`The membrane also has carbohydrates, as glycoproteins and glycolipids.`,
          t`On RBCs, these surface molecules decide the **blood group**.`,
          t`They help cells recognise each other.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is the membrane called a 'mosaic'?`,
      steps: [
        t`Many different proteins are scattered in it.`,
        t`Like tiles in a mosaic.`,
      ],
      answer: t`Proteins are scattered through the lipid`,
    },
    visualSpec: t`A lipid bilayer with proteins floating in it and sugar chains on the outer surface.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Says cellulose.",
      remediation: "Cellulose is in walls.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Leaves out carbohydrates.",
      remediation: "It has some carbohydrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Leaves out lipids.",
      remediation: "Lipids form the bilayer.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Says carbohydrates.",
      remediation: "Lipids give fluidity.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says glycoproteins.",
      remediation: "Lipids give fluidity.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Says polysaccharides.",
      remediation: "Lipids give fluidity.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says freely permeable.",
      remediation: "It controls entry.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says impermeable.",
      remediation: "Some things pass.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says semipermeable.",
      remediation: "It also moves solutes actively.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks Danielli and Davson.",
      remediation: "They gave the sandwich model.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks Watson and Crick.",
      remediation: "They found DNA's structure.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks Schleiden and Schwann.",
      remediation: "They gave cell theory.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says no role.",
      remediation: "They are blood-group antigens.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says oxygen.",
      remediation: "Haemoglobin carries oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says antibodies.",
      remediation: "Plasma cells make those.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(B)" },
      stem: t`The cell membrane is composed of`,
      verify: { kind: "value", inputs: {  }, params: { q: "made" } },
      options: [
        { key: "A", text: t`proteins, phospholipids and some carbohydrates`, correct: true, value: "proteins_lipids_carbs" },
        { key: "B", text: t`proteins and cellulose`, correct: false, misconceptionId: "C02-M1", value: "proteins_cellulose" },
        { key: "C", text: t`proteins and phospholipids only`, correct: false, misconceptionId: "C02-M2", value: "proteins_lipids_only" },
        { key: "D", text: t`proteins and carbohydrates only`, correct: false, misconceptionId: "C02-M3", value: "proteins_carbs_only" },
      ],
      solution: {
        steps: [
          t`Lipid, protein, carbohydrate.`,
          t`Proteins, phospholipids and carbohydrates.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(C)" },
      stem: t`The plasma membrane is fluid because of its`,
      verify: { kind: "value", inputs: {  }, params: { q: "fluid" } },
      options: [
        { key: "A", text: t`carbohydrates`, correct: false, misconceptionId: "C02-M4", value: "carbohydrate_f" },
        { key: "B", text: t`glycoproteins`, correct: false, misconceptionId: "C02-M5", value: "glycoprotein_f" },
        { key: "C", text: t`polysaccharides`, correct: false, misconceptionId: "C02-M6", value: "polysaccharide_f" },
        { key: "D", text: t`lipids`, correct: true, value: "lipid_f" },
      ],
      solution: {
        steps: [
          t`A sea of lipid.`,
          t`Lipids.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(E)" },
      stem: t`The plasma membrane is`,
      verify: { kind: "value", inputs: {  }, params: { q: "permeable" } },
      options: [
        { key: "A", text: t`semipermeable`, correct: false, misconceptionId: "C02-M9", value: "semipermeable_m" },
        { key: "B", text: t`selectively permeable`, correct: true, value: "selectively_permeable" },
        { key: "C", text: t`freely permeable`, correct: false, misconceptionId: "C02-M7", value: "freely_permeable" },
        { key: "D", text: t`impermeable`, correct: false, misconceptionId: "C02-M8", value: "impermeable_m" },
      ],
      solution: {
        steps: [
          t`Some pass, some don't.`,
          t`Selectively permeable.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q2(C)" },
      stem: t`The fluid mosaic model of the membrane, which replaced the sandwich model, was proposed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "model" } },
      options: [
        { key: "A", text: t`Schleiden and Schwann`, correct: false, misconceptionId: "C02-M12", value: "schleiden_schwann" },
        { key: "B", text: t`Singer and Nicolson`, correct: true, value: "singer_nicolson" },
        { key: "C", text: t`Danielli and Davson`, correct: false, misconceptionId: "C02-M10", value: "danielli_davson" },
        { key: "D", text: t`Watson and Crick`, correct: false, misconceptionId: "C02-M11", value: "watson_crick" },
      ],
      solution: {
        steps: [
          t`1972.`,
          t`Singer and Nicolson.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q2(D)" },
      stem: t`The glycoproteins on the surface of RBCs`,
      verify: { kind: "value", inputs: {  }, params: { q: "rbc" } },
      options: [
        { key: "A", text: t`make antibodies`, correct: false, misconceptionId: "C02-M15", value: "make_antibodies" },
        { key: "B", text: t`decide a person's blood group`, correct: true, value: "decide_blood_group" },
        { key: "C", text: t`play no role in blood groups`, correct: false, misconceptionId: "C02-M13", value: "no_role" },
        { key: "D", text: t`carry oxygen`, correct: false, misconceptionId: "C02-M14", value: "carry_oxygen" },
      ],
      solution: {
        steps: [
          t`Surface antigens.`,
          t`They decide the blood group.`,
        ],
      },
    },
  ],
};
