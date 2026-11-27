import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Two kinds of lymphocytes look alike under a microscope, yet one makes antibodies and the other kills infected cells. Where do they differ?`,
    reveal: t`In where they mature: B cells in the bone marrow, T cells in the thymus. That decides their jobs.`,
  },
  explanation: {
    intuition: [
      t`All lymphocytes arise from **stem cells in the bone marrow**.`,
      t`They form two immune systems.`,
      t`They cooperate.`,
    ],
    formal: [
      {
        title: "B cells",
        points: [
          t`Mature in the **bone marrow**.`,
          t`Become **plasma cells**, which make antibodies (about 2000 per second).`,
          t`They form the humoral (antibody-mediated) system.`,
        ],
      },
      {
        title: "T cells",
        points: [
          t`Mature in the **thymus**; form the cell-mediated system (CMIS).`,
          t`**Helper T cells** activate B cells.`,
          t`**Cytotoxic T cells** kill infected cells with **perforins**.`,
        ],
      },
    ],
    worked: {
      prompt: t`HIV destroys helper T cells. Why do antibody levels also fall?`,
      steps: [
        t`Helper T cells activate B cells.`,
        t`Without them B cells make few antibodies.`,
      ],
      answer: t`B cells are not activated`,
    },
    visualSpec: t`Bone marrow stem cell splitting into a B-cell path and a T-cell path via the thymus.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks lymph nodes.",
      remediation: "Lymph nodes store them.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks thymus.",
      remediation: "The thymus matures T cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks liver.",
      remediation: "Only the foetal liver makes them.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks cytotoxic T cells.",
      remediation: "They kill cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks suppressor T cells.",
      remediation: "They damp responses.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks plasma cells.",
      remediation: "Plasma cells are the result.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks antibodies.",
      remediation: "Those come from plasma cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks histamine.",
      remediation: "Histamine causes inflammation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks lysozyme.",
      remediation: "Lysozyme is in tears.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks T cells.",
      remediation: "T cells do not make antibodies.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks macrophages.",
      remediation: "Macrophages engulf.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks RBCs.",
      remediation: "RBCs carry oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks bone marrow.",
      remediation: "B cells mature there.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks spleen.",
      remediation: "The spleen stores them.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks liver.",
      remediation: "T cells mature in the thymus.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(7)" },
      stem: t`Both B-cells and T-cells are derived from`,
      verify: { kind: "value", inputs: {  }, params: { q: "origin" } },
      options: [
        { key: "A", text: t`lymph nodes`, correct: false, misconceptionId: "C06-M1", value: "lymph_nodes" },
        { key: "B", text: t`the thymus`, correct: false, misconceptionId: "C06-M2", value: "thymus_o" },
        { key: "C", text: t`the liver`, correct: false, misconceptionId: "C06-M3", value: "liver_o" },
        { key: "D", text: t`stem cells in the bone marrow`, correct: true, value: "bone_marrow" },
      ],
      solution: {
        steps: [
          t`Both come from stem cells.`,
          t`Bone marrow.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q2(3)" },
      stem: t`The cells that stimulate B-cells to form antibodies are`,
      verify: { kind: "value", inputs: {  }, params: { q: "stimulate" } },
      options: [
        { key: "A", text: t`helper T-cells`, correct: true, value: "helper_t" },
        { key: "B", text: t`cytotoxic T-cells`, correct: false, misconceptionId: "C06-M4", value: "cytotoxic_t" },
        { key: "C", text: t`suppressor T-cells`, correct: false, misconceptionId: "C06-M5", value: "suppressor_t" },
        { key: "D", text: t`plasma cells`, correct: false, misconceptionId: "C06-M6", value: "plasma_cells" },
      ],
      solution: {
        steps: [
          t`They release lymphokines.`,
          t`Helper T-cells.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2024 Q. 12" },
      stem: t`Cytotoxic T-cells kill infected cells by secreting`,
      verify: { kind: "value", inputs: {  }, params: { q: "perforin" } },
      options: [
        { key: "A", text: t`perforins`, correct: true, value: "perforins_s" },
        { key: "B", text: t`antibodies`, correct: false, misconceptionId: "C06-M7", value: "antibodies_s" },
        { key: "C", text: t`histamine`, correct: false, misconceptionId: "C06-M8", value: "histamine_s" },
        { key: "D", text: t`lysozyme`, correct: false, misconceptionId: "C06-M9", value: "lysozyme_s" },
      ],
      solution: {
        steps: [
          t`Pore-forming proteins.`,
          t`Perforins.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2024 Q. 12" },
      stem: t`Antibodies are produced by`,
      verify: { kind: "value", inputs: {  }, params: { q: "antibodies" } },
      options: [
        { key: "A", text: t`red blood cells`, correct: false, misconceptionId: "C06-M12", value: "rbc_cells" },
        { key: "B", text: t`plasma cells formed from B-cells`, correct: true, value: "plasma_cells" },
        { key: "C", text: t`T-cells`, correct: false, misconceptionId: "C06-M10", value: "t_cells" },
        { key: "D", text: t`macrophages`, correct: false, misconceptionId: "C06-M11", value: "macrophages_c" },
      ],
      solution: {
        steps: [
          t`Activated B cells.`,
          t`Plasma cells.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q4(1)" },
      stem: t`T-lymphocytes are differentiated in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "mature" } },
      options: [
        { key: "A", text: t`thymus`, correct: true, value: "thymus_o" },
        { key: "B", text: t`bone marrow`, correct: false, misconceptionId: "C06-M13", value: "bone_marrow" },
        { key: "C", text: t`spleen`, correct: false, misconceptionId: "C06-M14", value: "spleen_o" },
        { key: "D", text: t`liver`, correct: false, misconceptionId: "C06-M15", value: "liver_o" },
      ],
      solution: {
        steps: [
          t`T for thymus.`,
          t`Thymus.`,
        ],
      },
    },
  ],
};
