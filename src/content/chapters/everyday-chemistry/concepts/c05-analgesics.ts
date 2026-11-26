import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Willow bark was chewed for pain for centuries. Its active compound, salicylic acid, upset the stomach. How did chemists tame it?`,
    reveal: t`By acetylating it to acetylsalicylic acid: aspirin, gentler on the stomach and still a painkiller.`,
  },
  explanation: {
    intuition: [
      t`**Analgesics** relieve pain without loss of consciousness.`,
      t`Non-narcotic analgesics include aspirin and paracetamol.`,
      t`Narcotic analgesics like morphine are powerful but addictive.`,
      t`Aspirin is made by acetylating salicylic acid.`,
    ],
    formal: [
      {
        title: "Analgesics",
        points: [
          t`Aspirin: acetylsalicylic acid, from salicylic acid and acetic anhydride.`,
          t`Paracetamol: relieves pain and fever.`,
          t`Morphine: narcotic, for severe pain; habit-forming.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name two drugs that reduce body pain.`,
      steps: [
        t`Pain relievers are analgesics.`,
        t`Aspirin and paracetamol.`,
      ],
      answer: t`Aspirin and paracetamol`,
    },
    visualSpec: t`Add an acetyl group to salicylic acid and compare the two molecules.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks salicylic acid.",
      remediation: "Aspirin is the acetyl derivative.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks chloroxylenol.",
      remediation: "Chloroxylenol is an antiseptic in Dettol.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks thymol.",
      remediation: "Thymol is an antiseptic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks paracetamol.",
      remediation: "Paracetamol is not made from salicylic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks morphine.",
      remediation: "Morphine comes from opium.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks penicillin.",
      remediation: "Penicillin is an antibiotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says antibiotics.",
      remediation: "Antibiotics fight bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says antiseptics.",
      remediation: "Antiseptics are applied to wounds.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says antacids.",
      remediation: "Antacids neutralise stomach acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks aspirin.",
      remediation: "Aspirin is non-narcotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks paracetamol.",
      remediation: "Paracetamol is non-narcotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks ibuprofen.",
      remediation: "Ibuprofen is non-narcotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks Dettol.",
      remediation: "Dettol is an antiseptic like the others.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks chloroxylenol.",
      remediation: "Chloroxylenol is an antiseptic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks trichlorophenol.",
      remediation: "Trichlorophenol is an antiseptic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (C)" },
      stem: t`Aspirin is chemically`,
      verify: { kind: "value", inputs: {  }, params: { q: "aspirin" } },
      options: [
        { key: "A", text: t`thymol`, correct: false, misconceptionId: "C05-M3", value: "thymol" },
        { key: "B", text: t`chloroxylenol`, correct: false, misconceptionId: "C05-M2", value: "chloroxylenol" },
        { key: "C", text: t`salicylic acid`, correct: false, misconceptionId: "C05-M1", value: "salicylic" },
        { key: "D", text: t`acetylsalicylic acid`, correct: true, value: "acetylsalicylic" },
      ],
      solution: {
        steps: [
          t`Aspirin is acetylated salicylic acid.`,
          t`Acetylsalicylic acid.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.10 (A)" },
      stem: t`The painkiller made by acetylating salicylic acid is`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetylation" } },
      options: [
        { key: "A", text: t`aspirin`, correct: true, value: "aspirin" },
        { key: "B", text: t`morphine`, correct: false, misconceptionId: "C05-M5", value: "morphine" },
        { key: "C", text: t`penicillin`, correct: false, misconceptionId: "C05-M6", value: "penicillin" },
        { key: "D", text: t`paracetamol`, correct: false, misconceptionId: "C05-M4", value: "paracetamol" },
      ],
      solution: {
        steps: [
          t`Acetylating salicylic acid gives aspirin.`,
          t`Aspirin.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.10 (B)" },
      stem: t`Drugs often called painkillers belong to the class of`,
      verify: { kind: "value", inputs: {  }, params: { q: "painkillers" } },
      options: [
        { key: "A", text: t`antibiotics`, correct: false, misconceptionId: "C05-M7", value: "antibiotics" },
        { key: "B", text: t`analgesics`, correct: true, value: "analgesics" },
        { key: "C", text: t`antiseptics`, correct: false, misconceptionId: "C05-M8", value: "antiseptics" },
        { key: "D", text: t`antacids`, correct: false, misconceptionId: "C05-M9", value: "antacids" },
      ],
      solution: {
        steps: [
          t`Painkillers relieve pain.`,
          t`Analgesics.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.6" },
      stem: t`Which analgesic is narcotic?`,
      verify: { kind: "value", inputs: {  }, params: { q: "narcotic" } },
      options: [
        { key: "A", text: t`paracetamol`, correct: false, misconceptionId: "C05-M11", value: "paracetamol" },
        { key: "B", text: t`ibuprofen`, correct: false, misconceptionId: "C05-M12", value: "ibuprofen" },
        { key: "C", text: t`morphine`, correct: true, value: "morphine" },
        { key: "D", text: t`aspirin`, correct: false, misconceptionId: "C05-M10", value: "aspirin" },
      ],
      solution: {
        steps: [
          t`Morphine is an opiate.`,
          t`Narcotic.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (D)" },
      stem: t`Find the odd one out:`,
      verify: { kind: "value", inputs: {  }, params: { q: "odd_one" } },
      options: [
        { key: "A", text: t`trichlorophenol`, correct: false, misconceptionId: "C05-M15", value: "trichlorophenol" },
        { key: "B", text: t`Dettol`, correct: false, misconceptionId: "C05-M13", value: "dettol" },
        { key: "C", text: t`chloroxylenol`, correct: false, misconceptionId: "C05-M14", value: "chloroxylenol" },
        { key: "D", text: t`paracetamol`, correct: true, value: "paracetamol" },
      ],
      solution: {
        steps: [
          t`Three are antiseptics.`,
          t`Paracetamol is an analgesic.`,
        ],
      },
    },
  ],
};
