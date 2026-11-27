import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Yeast, bacteria and your own muscle cells all begin to break glucose the same way. Where does that common first step happen?`,
    reveal: t`In the cytoplasm: glycolysis splits glucose into two pyruvic acid, with or without oxygen.`,
  },
  explanation: {
    intuition: [
      t`**Glycolysis** breaks one glucose into two **pyruvic acid**.`,
      t`It needs no oxygen and is the first step of all respiration.`,
      t`It spends 2 ATP first, then earns 4 ATP.`,
    ],
    formal: [
      {
        title: "Two phases",
        points: [
          t`Ten steps in the **cytoplasm**, in two phases.`,
          t`**Preparatory phase**: glucose is phosphorylated twice, using 2 ATP.`,
          t`Fructose 1,6-bisphosphate splits into glyceraldehyde-3-phosphate and dihydroxyacetone phosphate.`,
        ],
      },
      {
        title: "Pay-off phase",
        points: [
          t`Each glyceraldehyde-3-phosphate is oxidised, forming $\ce{NADH + H+}$.`,
          t`Inorganic phosphate, not ATP, is added; 4 ATP form by substrate-level phosphorylation.`,
          t`Net per glucose: **2 ATP**, **2** $\ce{NADH + H+}$ and 2 pyruvic acid.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two glucose molecules go through glycolysis. How many pyruvic acid form?`,
      steps: [
        t`Each glucose gives 2 pyruvic acid.`,
        t`$2 \times 2 = 4$.`,
      ],
      answer: t`4`,
    },
    visualSpec: t`A glucose (6C) splitting into two 3C halves, each ending as pyruvic acid, with ATP used above and ATP formed below.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks the matrix.",
      remediation: "The Krebs cycle runs there.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks the inner membrane.",
      remediation: "The ETS is there.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks the chloroplast.",
      remediation: "That is photosynthesis.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Gives 1.",
      remediation: "Glucose splits into two trioses.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Gives 4.",
      remediation: "That is the ATP formed.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Gives 6.",
      remediation: "That is the ATP from 2 NADH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Gives 4.",
      remediation: "That is gross; 2 are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Adds them.",
      remediation: "ATP used must be subtracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Gives 8.",
      remediation: "That adds the ETS yield of NADH.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says aerobic only.",
      remediation: "Glycolysis needs no oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says anaerobic only.",
      remediation: "Aerobic respiration starts with it too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says photosynthesis.",
      remediation: "Glycolysis breaks glucose down.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says two pyruvate.",
      remediation: "Pyruvate comes at the end.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says two BPG.",
      remediation: "BPG forms later, in the pay-off phase.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says acetyl CoA.",
      remediation: "That forms in the mitochondria.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q2(C)" },
      stem: t`Glycolysis takes place in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "site" } },
      options: [
        { key: "A", text: t`cytoplasm`, correct: true, value: "cytoplasm_s" },
        { key: "B", text: t`mitochondrial matrix`, correct: false, misconceptionId: "C02-M1", value: "matrix_s" },
        { key: "C", text: t`inner mitochondrial membrane`, correct: false, misconceptionId: "C02-M2", value: "inner_membrane" },
        { key: "D", text: t`chloroplast`, correct: false, misconceptionId: "C02-M3", value: "chloroplast_s" },
      ],
      solution: {
        steps: [
          t`First step of respiration.`,
          t`Cytoplasm.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q2(E)" },
      stem: t`How many molecules of $\ce{NADH + H+}$ are formed when 1 glucose molecule goes through glycolysis?`,
      verify: { kind: "value", inputs: { g: "1" }, params: { q: "nadh" } },
      options: [
        { key: "A", text: t`$1$`, correct: false, misconceptionId: "C02-M4", value: "1" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C02-M5", value: "4" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C02-M6", value: "6" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`One per glyceraldehyde-3-phosphate.`,
          t`$2 \times 1 = 2$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(B)" },
      stem: t`Glycolysis uses 2 ATP and forms 4 ATP for each glucose. It also forms 2 $\ce{NADH + H+}$. What is the net ATP gain of glycolysis itself?`,
      verify: { kind: "value", inputs: { f: "4", u: "2", n: "2" }, params: { q: "net" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C02-M9", value: "8" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C02-M7", value: "4" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C02-M8", value: "6" },
      ],
      solution: {
        steps: [
          t`$4 - 2$.`,
          t`2 ATP.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q5(B)" },
      stem: t`Glycolysis is the first step of`,
      verify: { kind: "value", inputs: {  }, params: { q: "common_step" } },
      options: [
        { key: "A", text: t`photosynthesis`, correct: false, misconceptionId: "C02-M12", value: "photosynthesis_t" },
        { key: "B", text: t`both aerobic and anaerobic respiration`, correct: true, value: "both_resp" },
        { key: "C", text: t`aerobic respiration only`, correct: false, misconceptionId: "C02-M10", value: "aerobic_only" },
        { key: "D", text: t`anaerobic respiration only`, correct: false, misconceptionId: "C02-M11", value: "anaerobic_only" },
      ],
      solution: {
        steps: [
          t`No oxygen needed.`,
          t`Both aerobic and anaerobic.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/respiration-11-bio/Ex Q3(G)" },
      stem: t`In the preparatory phase, fructose 1,6-bisphosphate splits into`,
      verify: { kind: "value", inputs: {  }, params: { q: "split" } },
      options: [
        { key: "A", text: t`two acetyl CoA molecules`, correct: false, misconceptionId: "C02-M15", value: "two_acetyl_coa" },
        { key: "B", text: t`glyceraldehyde-3-phosphate and dihydroxyacetone phosphate`, correct: true, value: "g3p_dhap" },
        { key: "C", text: t`two pyruvic acid molecules`, correct: false, misconceptionId: "C02-M13", value: "two_pyruvate" },
        { key: "D", text: t`two 1,3-bisphosphoglycerate molecules`, correct: false, misconceptionId: "C02-M14", value: "two_bpg" },
      ],
      solution: {
        steps: [
          t`Two isomeric trioses form.`,
          t`G3P and DHAP.`,
        ],
      },
    },
  ],
};
