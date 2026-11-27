import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A plant cell can swell with water without bursting. What holds it?`,
    reveal: t`A tough cell wall outside the membrane, which takes the pressure.`,
  },
  explanation: {
    intuition: [
      t`A **cell wall** lies outside the plasma membrane.`,
      t`Plant, algal and prokaryotic cells have one.`,
      t`Plant cells stay connected through it.`,
    ],
    formal: [
      {
        title: "Make-up",
        points: [
          t`Plants: **cellulose** microfibrils.`,
          t`Algae: cellulose, galactans, mannans, minerals.`,
          t`Prokaryotes: **peptidoglycan**.`,
        ],
      },
      {
        title: "Growth and links",
        points: [
          t`**Intussusception**: material inserted into the wall; area grows as the cell **elongates**.`,
          t`**Apposition**: new layers laid on the old; **thickness** grows.`,
          t`**Plasmodesmata**: cytoplasmic bridges through the walls link neighbouring cells.`,
        ],
      },
    ],
    worked: {
      prompt: t`A young cell grows longer. How does its wall keep up?`,
      steps: [
        t`New material is inserted into the existing wall.`,
        t`That is intussusception.`,
      ],
      answer: t`By intussusception`,
    },
    visualSpec: t`Two neighbouring plant cells with plasmodesmata crossing the wall between them.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Says apposition.",
      remediation: "Apposition adds thickness.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Says both.",
      remediation: "Elongation is intussusception.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Says superposition.",
      remediation: "That is not a wall process.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says plants only.",
      remediation: "Bacteria and algae have walls too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says prokaryotes only.",
      remediation: "Plants have walls too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says algae only.",
      remediation: "Plants have walls too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says blood vessels.",
      remediation: "Plants have none.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says lysosomes.",
      remediation: "Lysosomes digest.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says the wall alone.",
      remediation: "Cytoplasmic bridges link cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says cellulose.",
      remediation: "That is plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says chitin.",
      remediation: "That is fungi.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says pectin.",
      remediation: "That is middle lamella.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says area.",
      remediation: "That is intussusception.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says removes.",
      remediation: "It adds material.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says dissolves.",
      remediation: "It adds material.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(A)" },
      stem: t`During cell elongation, the cell wall grows by`,
      verify: { kind: "value", inputs: {  }, params: { q: "elongation" } },
      options: [
        { key: "A", text: t`both apposition and intussusception`, correct: false, misconceptionId: "C03-M2", value: "both_g" },
        { key: "B", text: t`superposition`, correct: false, misconceptionId: "C03-M3", value: "superposition_g" },
        { key: "C", text: t`intussusception`, correct: true, value: "intussusception_g" },
        { key: "D", text: t`apposition`, correct: false, misconceptionId: "C03-M1", value: "apposition_g" },
      ],
      solution: {
        steps: [
          t`Inserted into the wall.`,
          t`Intussusception.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(D)" },
      stem: t`A cell wall is present in`,
      verify: { kind: "value", inputs: {  }, params: { q: "present" } },
      options: [
        { key: "A", text: t`prokaryotic cells only`, correct: false, misconceptionId: "C03-M5", value: "prokaryotes_only" },
        { key: "B", text: t`algal cells only`, correct: false, misconceptionId: "C03-M6", value: "algae_only" },
        { key: "C", text: t`plant, algal and prokaryotic cells`, correct: true, value: "all_three" },
        { key: "D", text: t`plant cells only`, correct: false, misconceptionId: "C03-M4", value: "plants_only" },
      ],
      solution: {
        steps: [
          t`Three kinds of cell.`,
          t`Plant, algal and prokaryotic.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q2(A)" },
      stem: t`Plants have no circulatory system. Neighbouring plant cells exchange materials through`,
      verify: { kind: "value", inputs: {  }, params: { q: "transport" } },
      options: [
        { key: "A", text: t`blood vessels`, correct: false, misconceptionId: "C03-M7", value: "blood_vessels" },
        { key: "B", text: t`lysosomes`, correct: false, misconceptionId: "C03-M8", value: "lysosomes_t" },
        { key: "C", text: t`the cell wall alone`, correct: false, misconceptionId: "C03-M9", value: "wall_alone" },
        { key: "D", text: t`plasmodesmata, cytoplasmic bridges`, correct: true, value: "plasmodesmata_t" },
      ],
      solution: {
        steps: [
          t`Cytoplasmic bridges.`,
          t`Plasmodesmata.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(D)" },
      stem: t`The cell wall of a prokaryote is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "bacterial" } },
      options: [
        { key: "A", text: t`chitin`, correct: false, misconceptionId: "C03-M11", value: "chitin_w" },
        { key: "B", text: t`pectin`, correct: false, misconceptionId: "C03-M12", value: "pectin_w" },
        { key: "C", text: t`peptidoglycan`, correct: true, value: "peptidoglycan_w" },
        { key: "D", text: t`cellulose`, correct: false, misconceptionId: "C03-M10", value: "cellulose_w" },
      ],
      solution: {
        steps: [
          t`Bacterial wall.`,
          t`Peptidoglycan.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q1(A)" },
      stem: t`Growth of the cell wall by apposition`,
      verify: { kind: "value", inputs: {  }, params: { q: "apposition" } },
      options: [
        { key: "A", text: t`lays new layers on the old, adding thickness`, correct: true, value: "adds_layers" },
        { key: "B", text: t`adds surface area within the wall`, correct: false, misconceptionId: "C03-M13", value: "adds_area" },
        { key: "C", text: t`removes the wall`, correct: false, misconceptionId: "C03-M14", value: "removes_wall" },
        { key: "D", text: t`dissolves the wall`, correct: false, misconceptionId: "C03-M15", value: "dissolves_wall" },
      ],
      solution: {
        steps: [
          t`Layer on layer.`,
          t`It adds thickness.`,
        ],
      },
    },
  ],
};
