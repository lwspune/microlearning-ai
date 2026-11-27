import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Diabetics once used insulin taken from pigs and cattle, which caused allergies. Where does their insulin come from now?`,
    reveal: t`From bacteria given the human insulin gene: they make human insulin itself.`,
  },
  explanation: {
    intuition: [
      t`Bacteria with human genes make **recombinant proteins**.`,
      t`These are pure and identical to human proteins.`,
      t`They treat many disorders.`,
    ],
    formal: [
      {
        title: "Insulin",
        points: [
          t`Made by β-cells of the pancreas.`,
          t`DNA for chains **A and B** was put into **separate pBR322 plasmids** in *E. coli*.`,
          t`The chains were joined to make human insulin.`,
        ],
      },
      {
        title: "Others",
        points: [
          t`**TPA**: dissolves blood clots. **Erythropoietin**: anaemia.`,
          t`**Relaxin**: parturition. **$\alpha_1$-antitrypsin**: emphysema.`,
          t`**PDGF**: atherosclerosis. **Factor VIII**: haemophilia A.`,
        ],
      },
    ],
    worked: {
      prompt: t`A patient with haemophilia A bleeds for too long. Which recombinant protein helps?`,
      steps: [
        t`Haemophilia A lacks a clotting factor.`,
        t`That is factor VIII.`,
      ],
      answer: t`Factor VIII`,
    },
    visualSpec: t`E. coli cells with plasmids, one set making chain A and another chain B.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks insulin.",
      remediation: "Insulin lowers blood sugar.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks relaxin.",
      remediation: "Relaxin is for birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks erythropoietin.",
      remediation: "That is for anaemia.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks PDGF.",
      remediation: "PDGF is for atherosclerosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks relaxin.",
      remediation: "Relaxin is for birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks factor VIII.",
      remediation: "That is for haemophilia.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks erythropoietin.",
      remediation: "That is for anaemia.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks antitrypsin.",
      remediation: "That is for emphysema.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks TPA.",
      remediation: "TPA dissolves clots.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks PDGF.",
      remediation: "PDGF is for atherosclerosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks relaxin.",
      remediation: "Relaxin is for birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks insulin.",
      remediation: "Insulin is for diabetes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says one plasmid.",
      remediation: "Chains A and B were separate.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says chain A alone.",
      remediation: "Insulin needs both chains.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says from pigs.",
      remediation: "That was the old source.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q1(5)" },
      stem: t`The recombinant protein used to dissolve blood clots is`,
      verify: { kind: "value", inputs: {  }, params: { q: "clots" } },
      options: [
        { key: "A", text: t`relaxin`, correct: false, misconceptionId: "C04-M2", value: "relaxin_p" },
        { key: "B", text: t`erythropoietin`, correct: false, misconceptionId: "C04-M3", value: "erythropoietin_p" },
        { key: "C", text: t`tissue plasminogen activator`, correct: true, value: "tpa_p" },
        { key: "D", text: t`insulin`, correct: false, misconceptionId: "C04-M1", value: "insulin_p" },
      ],
      solution: {
        steps: [
          t`Dissolves clots.`,
          t`Tissue plasminogen activator.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2026 Q. 22" },
      stem: t`The recombinant protein used to treat anaemia is`,
      verify: { kind: "value", inputs: {  }, params: { q: "anaemia" } },
      options: [
        { key: "A", text: t`platelet derived growth factor`, correct: false, misconceptionId: "C04-M4", value: "pdgf_p" },
        { key: "B", text: t`relaxin`, correct: false, misconceptionId: "C04-M5", value: "relaxin_p" },
        { key: "C", text: t`factor VIII`, correct: false, misconceptionId: "C04-M6", value: "factor_viii_p" },
        { key: "D", text: t`erythropoietin`, correct: true, value: "erythropoietin_p" },
      ],
      solution: {
        steps: [
          t`Makes RBCs.`,
          t`Erythropoietin.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2025 Q. 25" },
      stem: t`The recombinant protein used in parturition is`,
      verify: { kind: "value", inputs: {  }, params: { q: "parturition" } },
      options: [
        { key: "A", text: t`$\alpha_1$-antitrypsin`, correct: false, misconceptionId: "C04-M8", value: "antitrypsin_p" },
        { key: "B", text: t`tissue plasminogen activator`, correct: false, misconceptionId: "C04-M9", value: "tpa_p" },
        { key: "C", text: t`relaxin`, correct: true, value: "relaxin_p" },
        { key: "D", text: t`erythropoietin`, correct: false, misconceptionId: "C04-M7", value: "erythropoietin_p" },
      ],
      solution: {
        steps: [
          t`Helps birth.`,
          t`Relaxin.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biotechnology/2025 Q. 25" },
      stem: t`The recombinant protein used for emphysema is`,
      verify: { kind: "value", inputs: {  }, params: { q: "emphysema" } },
      options: [
        { key: "A", text: t`platelet derived growth factor`, correct: false, misconceptionId: "C04-M10", value: "pdgf_p" },
        { key: "B", text: t`relaxin`, correct: false, misconceptionId: "C04-M11", value: "relaxin_p" },
        { key: "C", text: t`insulin`, correct: false, misconceptionId: "C04-M12", value: "insulin_p" },
        { key: "D", text: t`$\alpha_1$-antitrypsin`, correct: true, value: "antitrypsin_p" },
      ],
      solution: {
        steps: [
          t`Protects the lungs.`,
          t`$\alpha_1$-antitrypsin.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q2(1)" },
      stem: t`To make human insulin, the DNA for chains A and B was`,
      verify: { kind: "value", inputs: {  }, params: { q: "chains" } },
      options: [
        { key: "A", text: t`taken from pigs`, correct: false, misconceptionId: "C04-M15", value: "from_pigs" },
        { key: "B", text: t`put into two separate pBR322 plasmids`, correct: true, value: "separate_plasmids" },
        { key: "C", text: t`put together into one plasmid`, correct: false, misconceptionId: "C04-M13", value: "one_plasmid" },
        { key: "D", text: t`not needed, as chain A alone works`, correct: false, misconceptionId: "C04-M14", value: "chain_a_only" },
      ],
      solution: {
        steps: [
          t`Two chains, two plasmids.`,
          t`Separate plasmids.`,
        ],
      },
    },
  ],
};
