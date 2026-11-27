import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A cell's ribosomes are built in the nucleus but work outside it. Where in the nucleus are they made?`,
    reveal: t`In the nucleolus, a dense body with no membrane, made of rRNA and proteins.`,
  },
  explanation: {
    intuition: [
      t`The **nucleus** holds the cell's genetic material.`,
      t`It is bounded by a double **nuclear envelope**.`,
      t`Inside are nucleoplasm, chromatin and the nucleolus.`,
    ],
    formal: [
      {
        title: "Parts",
        points: [
          t`**Nuclear envelope**: double, with pores; continuous with the **ER**.`,
          t`**Nucleoplasm** (karyolymph): nucleic acids, proteins, salts.`,
          t`**Chromatin**: DNA with histone and non-histone proteins.`,
        ],
      },
      {
        title: "Nucleolus",
        points: [
          t`**Not bound by a membrane**.`,
          t`Made of **rRNA and ribosomal proteins**.`,
          t`Site of **ribosome biogenesis**; the subunits leave the nucleus and join into ribosomes in the cytoplasm.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell's nucleolus is destroyed. What fails first?`,
      steps: [
        t`The nucleolus makes ribosomes.`,
        t`Without ribosomes, protein synthesis stops.`,
      ],
      answer: t`Ribosome and protein production`,
    },
    visualSpec: t`A nucleus with its pored envelope joined to ER, chromatin threads and a dark nucleolus.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says single.",
      remediation: "It has none.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says double.",
      remediation: "That is the envelope.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says wall.",
      remediation: "Only cells have walls.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks Golgi.",
      remediation: "The Golgi packages proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks lysosome.",
      remediation: "Lysosomes digest.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks mitochondrion.",
      remediation: "Mitochondria make ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says DNA alone.",
      remediation: "It is mostly rRNA and protein.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says lipids.",
      remediation: "It has no membrane.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says starch.",
      remediation: "Starch is in plastids.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says cytosol.",
      remediation: "Cytosol is outside the nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says stroma.",
      remediation: "That is chloroplasts.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says matrix.",
      remediation: "That is mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says Golgi.",
      remediation: "It joins the ER.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says plasma membrane.",
      remediation: "It joins the ER.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says mitochondria.",
      remediation: "It joins the ER.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q2(B)" },
      stem: t`The nucleolus is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nucleolus_membrane" } },
      options: [
        { key: "A", text: t`bound by a single membrane`, correct: false, misconceptionId: "C06-M1", value: "single_membrane" },
        { key: "B", text: t`bound by a double membrane`, correct: false, misconceptionId: "C06-M2", value: "double_membrane" },
        { key: "C", text: t`covered by a cell wall`, correct: false, misconceptionId: "C06-M3", value: "cell_wall_n" },
        { key: "D", text: t`not bound by any membrane`, correct: true, value: "no_membrane" },
      ],
      solution: {
        steps: [
          t`No membrane.`,
          t`Not membrane-bound.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q7(i)" },
      stem: t`The structure that generates ribosomes is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ribosomes" } },
      options: [
        { key: "A", text: t`nucleolus`, correct: true, value: "nucleolus_o" },
        { key: "B", text: t`Golgi body`, correct: false, misconceptionId: "C06-M4", value: "golgi_o" },
        { key: "C", text: t`lysosome`, correct: false, misconceptionId: "C06-M5", value: "lysosome_o" },
        { key: "D", text: t`mitochondrion`, correct: false, misconceptionId: "C06-M6", value: "mitochondrion_o" },
      ],
      solution: {
        steps: [
          t`Ribosome factory.`,
          t`Nucleolus.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q2(B)" },
      stem: t`The nucleolus is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "made_of" } },
      options: [
        { key: "A", text: t`rRNA and ribosomal proteins`, correct: true, value: "rrna_proteins" },
        { key: "B", text: t`DNA alone`, correct: false, misconceptionId: "C06-M7", value: "dna_only" },
        { key: "C", text: t`lipids`, correct: false, misconceptionId: "C06-M8", value: "lipids_n" },
        { key: "D", text: t`starch`, correct: false, misconceptionId: "C06-M9", value: "starch_n" },
      ],
      solution: {
        steps: [
          t`Its composition.`,
          t`rRNA and ribosomal proteins.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q2(E)" },
      stem: t`Karyolymph is another name for`,
      verify: { kind: "value", inputs: {  }, params: { q: "karyolymph" } },
      options: [
        { key: "A", text: t`mitochondrial matrix`, correct: false, misconceptionId: "C06-M12", value: "matrix_k" },
        { key: "B", text: t`nucleoplasm`, correct: true, value: "nucleoplasm_k" },
        { key: "C", text: t`cytosol`, correct: false, misconceptionId: "C06-M10", value: "cytosol_k" },
        { key: "D", text: t`stroma`, correct: false, misconceptionId: "C06-M11", value: "stroma_k" },
      ],
      solution: {
        steps: [
          t`Nuclear fluid.`,
          t`Nucleoplasm.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q4(D)" },
      stem: t`The nuclear envelope is continuous with the`,
      verify: { kind: "value", inputs: {  }, params: { q: "envelope" } },
      options: [
        { key: "A", text: t`endoplasmic reticulum`, correct: true, value: "er_continuous" },
        { key: "B", text: t`Golgi complex`, correct: false, misconceptionId: "C06-M13", value: "golgi_continuous" },
        { key: "C", text: t`plasma membrane`, correct: false, misconceptionId: "C06-M14", value: "plasma_continuous" },
        { key: "D", text: t`mitochondria`, correct: false, misconceptionId: "C06-M15", value: "mito_continuous" },
      ],
      solution: {
        steps: [
          t`Joined membrane.`,
          t`The ER.`,
        ],
      },
    },
  ],
};
