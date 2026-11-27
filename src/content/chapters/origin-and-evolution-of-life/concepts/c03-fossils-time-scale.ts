import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Dig down through layers of rock, and the fossils change: fish, then reptiles, then mammals near the top. What does this order show?`,
    reveal: t`Life changed over time: simpler forms came first, and newer groups appear in younger rocks.`,
  },
  explanation: {
    intuition: [
      t`**Fossils** are remains of past organisms preserved in rock.`,
      t`Older rock layers lie deeper.`,
      t`So deeper fossils show earlier, simpler life.`,
    ],
    formal: [
      {
        title: "The time scale",
        points: [
          t`Earth's history is divided into **eras** and **periods**.`,
          t`Proterozoic: invertebrates.`,
          t`Palaeozoic: fishes and amphibians.`,
          t`Mesozoic: reptiles; its **Jurassic** period is the age of reptiles.`,
          t`Cenozoic: mammals.`,
        ],
      },
    ],
    worked: {
      prompt: t`In which era did dinosaurs dominate?`,
      steps: [
        t`Dinosaurs were reptiles.`,
        t`Reptiles dominated the Mesozoic.`,
      ],
      answer: t`The Mesozoic`,
    },
    visualSpec: t`A rock column with fossils appearing layer by layer.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks the Cambrian.",
      remediation: "The Cambrian was early, with invertebrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks the Tertiary.",
      remediation: "The Tertiary saw mammals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks the Carboniferous.",
      remediation: "The Carboniferous had amphibians and forests.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks reptiles.",
      remediation: "Reptiles ruled the Mesozoic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks fishes.",
      remediation: "Fishes ruled the Palaeozoic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks invertebrates.",
      remediation: "Invertebrates ruled the Proterozoic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks mammals.",
      remediation: "Mammals ruled the Cenozoic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks reptiles.",
      remediation: "Reptiles came later, in the Mesozoic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks birds.",
      remediation: "Birds came in the Mesozoic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says more complex.",
      remediation: "Older fossils are simpler.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says the same.",
      remediation: "Fossils change with age.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says none.",
      remediation: "Older rocks hold fossils too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks the Cenozoic.",
      remediation: "The Cenozoic is the age of mammals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks the Palaeozoic.",
      remediation: "The Palaeozoic is of fishes and amphibians.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks the Proterozoic.",
      remediation: "The Proterozoic is of invertebrates.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q2(9)" },
      stem: t`The period known as the age of reptiles is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "jurassic" } },
      options: [
        { key: "A", text: t`Tertiary`, correct: false, misconceptionId: "C03-M2", value: "tertiary" },
        { key: "B", text: t`Carboniferous`, correct: false, misconceptionId: "C03-M3", value: "carboniferous" },
        { key: "C", text: t`Jurassic`, correct: true, value: "jurassic" },
        { key: "D", text: t`Cambrian`, correct: false, misconceptionId: "C03-M1", value: "cambrian" },
      ],
      solution: {
        steps: [
          t`Dinosaurs dominated the Jurassic.`,
          t`The Jurassic period.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q6" },
      stem: t`The Cenozoic era was dominated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "cenozoic" } },
      options: [
        { key: "A", text: t`fishes`, correct: false, misconceptionId: "C03-M5", value: "fishes" },
        { key: "B", text: t`invertebrates`, correct: false, misconceptionId: "C03-M6", value: "invertebrates" },
        { key: "C", text: t`mammals`, correct: true, value: "mammals" },
        { key: "D", text: t`reptiles`, correct: false, misconceptionId: "C03-M4", value: "reptiles" },
      ],
      solution: {
        steps: [
          t`The most recent era.`,
          t`Mammals.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q6" },
      stem: t`The Palaeozoic era was dominated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "palaeozoic" } },
      options: [
        { key: "A", text: t`mammals`, correct: false, misconceptionId: "C03-M7", value: "mammals" },
        { key: "B", text: t`reptiles`, correct: false, misconceptionId: "C03-M8", value: "reptiles" },
        { key: "C", text: t`birds`, correct: false, misconceptionId: "C03-M9", value: "birds" },
        { key: "D", text: t`fishes and amphibians`, correct: true, value: "fishes_amphibians" },
      ],
      solution: {
        steps: [
          t`The early era of vertebrates.`,
          t`Fishes and amphibians.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q3(4)" },
      stem: t`Compared with fossils in younger rock layers, those in older layers are`,
      verify: { kind: "value", inputs: {  }, params: { q: "older" } },
      options: [
        { key: "A", text: t`the same kinds`, correct: false, misconceptionId: "C03-M11", value: "same_kinds" },
        { key: "B", text: t`absent`, correct: false, misconceptionId: "C03-M12", value: "no_fossils" },
        { key: "C", text: t`simpler, more primitive forms`, correct: true, value: "simpler" },
        { key: "D", text: t`more complex`, correct: false, misconceptionId: "C03-M10", value: "more_complex" },
      ],
      solution: {
        steps: [
          t`Deeper rocks hold earlier life.`,
          t`Simpler forms.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q6" },
      stem: t`The era in which reptiles dominated was the`,
      verify: { kind: "value", inputs: {  }, params: { q: "mesozoic" } },
      options: [
        { key: "A", text: t`Mesozoic`, correct: true, value: "mesozoic" },
        { key: "B", text: t`Cenozoic`, correct: false, misconceptionId: "C03-M13", value: "cenozoic" },
        { key: "C", text: t`Palaeozoic`, correct: false, misconceptionId: "C03-M14", value: "palaeozoic" },
        { key: "D", text: t`Proterozoic`, correct: false, misconceptionId: "C03-M15", value: "proterozoic" },
      ],
      solution: {
        steps: [
          t`Reptiles dominated it.`,
          t`The Mesozoic.`,
        ],
      },
    },
  ],
};
