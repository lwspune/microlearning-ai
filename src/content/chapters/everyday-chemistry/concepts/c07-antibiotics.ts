import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "draft",
  hook: {
    prompt: t`In 1928 a mould contaminated Alexander Fleming's bacterial cultures, and the bacteria around it died. What had he found?`,
    reveal: t`Penicillin, the first antibiotic: a substance made by one microbe that kills or stops others.`,
  },
  explanation: {
    intuition: [
      t`**Antibiotics** kill microbes or stop their growth.`,
      t`Some act on many kinds of bacteria (broad spectrum), others on few (narrow).`,
      t`Early drugs included arsenic-based salvarsan and sulfa drugs.`,
      t`Penicillin was discovered by Fleming.`,
    ],
    formal: [
      {
        title: "Examples",
        points: [
          t`Salvarsan: arsenic-based, Ehrlich's cure for syphilis.`,
          t`Sulfa drugs: prontosil, sulphanilamide, sulphapyridine.`,
          t`Penicillin: narrow spectrum; discovered by Fleming.`,
          t`Chloramphenicol: broad spectrum.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is chloramphenicol narrow- or broad-spectrum?`,
      steps: [
        t`It acts against many kinds of bacteria.`,
        t`Broad spectrum.`,
      ],
      answer: t`Broad spectrum`,
    },
    visualSpec: t`Map antibiotics by how many kinds of bacteria they act against.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks an azo dye.",
      remediation: "Salvarsan contains arsenic.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks prontosil.",
      remediation: "Prontosil is a sulfa drug.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks sulphapyridine.",
      remediation: "Sulphapyridine is a sulfa drug.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Credits Ehrlich.",
      remediation: "Ehrlich made salvarsan; Fleming found penicillin.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Credits Pasteur.",
      remediation: "Fleming discovered penicillin.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Credits Domagk.",
      remediation: "Domagk found prontosil.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Says one kind only.",
      remediation: "That is narrow spectrum.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Says it kills viruses.",
      remediation: "Antibiotics act on bacteria, not viruses.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Names penicillin G.",
      remediation: "Penicillin G is narrow spectrum.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Calls it an analgesic.",
      remediation: "Sulphanilamide fights bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Calls it a floor antiseptic.",
      remediation: "It is a drug taken for infections.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Calls it an antioxidant.",
      remediation: "It stops bacterial growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Calls penicillin broad spectrum.",
      remediation: "Penicillin acts on a narrower range.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Calls it an analgesic.",
      remediation: "Penicillin fights bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Calls it arsenic-based.",
      remediation: "Penicillin comes from a mould.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.1 (E)" },
      stem: t`The arsenic-based antibiotic is`,
      verify: { kind: "value", inputs: {  }, params: { q: "arsenic" } },
      options: [
        { key: "A", text: t`prontosil`, correct: false, misconceptionId: "C07-M2", value: "prontosil" },
        { key: "B", text: t`sulphapyridine`, correct: false, misconceptionId: "C07-M3", value: "sulphapyridine" },
        { key: "C", text: t`an azo dye`, correct: false, misconceptionId: "C07-M1", value: "azo_dye" },
        { key: "D", text: t`salvarsan`, correct: true, value: "salvarsan" },
      ],
      solution: {
        steps: [
          t`Salvarsan contains arsenic.`,
          t`Salvarsan.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.10 (C)" },
      stem: t`Penicillin was discovered by`,
      verify: { kind: "value", inputs: {  }, params: { q: "fleming" } },
      options: [
        { key: "A", text: t`Alexander Fleming`, correct: true, value: "fleming" },
        { key: "B", text: t`Louis Pasteur`, correct: false, misconceptionId: "C07-M5", value: "pasteur" },
        { key: "C", text: t`Gerhard Domagk`, correct: false, misconceptionId: "C07-M6", value: "domagk" },
        { key: "D", text: t`Paul Ehrlich`, correct: false, misconceptionId: "C07-M4", value: "ehrlich" },
      ],
      solution: {
        steps: [
          t`The 1928 mould discovery.`,
          t`Alexander Fleming.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.9" },
      stem: t`A broad-spectrum antibiotic`,
      verify: { kind: "value", inputs: {  }, params: { q: "broad" } },
      options: [
        { key: "A", text: t`is penicillin G`, correct: false, misconceptionId: "C07-M9", value: "penicillin_g" },
        { key: "B", text: t`acts against many kinds of bacteria, like chloramphenicol`, correct: true, value: "many_kinds" },
        { key: "C", text: t`acts against only one kind of bacteria`, correct: false, misconceptionId: "C07-M7", value: "one_kind" },
        { key: "D", text: t`also kills viruses`, correct: false, misconceptionId: "C07-M8", value: "viruses" },
      ],
      solution: {
        steps: [
          t`Broad spectrum: many kinds of bacteria.`,
          t`Chloramphenicol is an example.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.3 (E)" },
      stem: t`Sulphanilamide is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sulpha" } },
      options: [
        { key: "A", text: t`an antiseptic for floors`, correct: false, misconceptionId: "C07-M11", value: "floor_antiseptic" },
        { key: "B", text: t`an analgesic`, correct: false, misconceptionId: "C07-M10", value: "analgesic" },
        { key: "C", text: t`a sulfa drug that stops the growth of bacteria`, correct: true, value: "sulfa_drug" },
        { key: "D", text: t`an antioxidant`, correct: false, misconceptionId: "C07-M12", value: "antioxidant" },
      ],
      solution: {
        steps: [
          t`Sulphanilamide is a sulfa drug.`,
          t`It stops bacterial growth.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/everyday-chemistry-11-chem/Ex Q.3 (C)" },
      stem: t`Penicillin is`,
      verify: { kind: "value", inputs: {  }, params: { q: "penicillin" } },
      options: [
        { key: "A", text: t`a broad-spectrum antibiotic`, correct: false, misconceptionId: "C07-M13", value: "broad" },
        { key: "B", text: t`an analgesic`, correct: false, misconceptionId: "C07-M14", value: "analgesic" },
        { key: "C", text: t`an arsenic-based antibiotic`, correct: false, misconceptionId: "C07-M15", value: "arsenic_based" },
        { key: "D", text: t`a narrow-spectrum antibiotic`, correct: true, value: "narrow" },
      ],
      solution: {
        steps: [
          t`Penicillin acts on a limited range of bacteria.`,
          t`Narrow spectrum.`,
        ],
      },
    },
  ],
};
