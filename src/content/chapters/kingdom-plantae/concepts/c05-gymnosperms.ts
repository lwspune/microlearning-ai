import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A pine cone holds seeds, but you cannot find a fruit anywhere on a pine. Where are the seeds?`,
    reveal: t`Lying naked on the scales of the cone: gymnosperm means 'naked seed'.`,
  },
  explanation: {
    intuition: [
      t`**Gymnosperms** are seed plants.`,
      t`Their seeds are **naked**, borne on megasporophylls.`,
      t`There is no ovary and no fruit.`,
    ],
    formal: [
      {
        title: "Record plants",
        points: [
          t`***Sequoia sempervirens***, the coast redwood: tallest plant, about 366 ft.`,
          t`***Taxodium mucronatum***: famous for girth, about 125 ft.`,
          t`***Zamia pygmaea***: smallest, about 25 cm. ***Ginkgo biloba***: a living fossil.`,
        ],
      },
      {
        title: "Features",
        points: [
          t`Sporophyte dominant, woody, often evergreen.`,
          t`Pollen reaches the egg through a pollen tube.`,
          t`Examples: *Cycas*, *Pinus*.`,
        ],
      },
    ],
    worked: {
      prompt: t`How does a gymnosperm seed differ from a mango seed?`,
      steps: [
        t`A mango seed is inside a fruit.`,
        t`A gymnosperm seed lies exposed.`,
      ],
      answer: t`It is naked, not enclosed`,
    },
    visualSpec: t`A pine cone scale with two naked seeds on it.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks *Taxodium*.",
      remediation: "*Taxodium* is famous for girth.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks *Zamia*.",
      remediation: "*Zamia* is the smallest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks *Ginkgo*.",
      remediation: "*Ginkgo* is a living fossil.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says enclosed.",
      remediation: "That is angiosperms.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says no seeds.",
      remediation: "They are seed plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says spores only.",
      remediation: "That is cryptogams.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks *Sequoia*.",
      remediation: "That is the tallest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks *Taxodium*.",
      remediation: "That has the biggest girth.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks *Ginkgo*.",
      remediation: "That is a living fossil.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks *Sequoia*.",
      remediation: "That is the tallest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks *Zamia*.",
      remediation: "That is the smallest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks *Taxodium*.",
      remediation: "That has the biggest girth.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks *Sequoia*.",
      remediation: "That is the tallest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks *Zamia*.",
      remediation: "That is the smallest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks *Ginkgo*.",
      remediation: "That is a living fossil.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(B)" },
      stem: t`The tallest living gymnosperm is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tallest" } },
      options: [
        { key: "A", text: t`*Ginkgo biloba*`, correct: false, misconceptionId: "C05-M3", value: "ginkgo_g" },
        { key: "B", text: t`*Sequoia sempervirens*`, correct: true, value: "sequoia_g" },
        { key: "C", text: t`*Taxodium mucronatum*`, correct: false, misconceptionId: "C05-M1", value: "taxodium_g" },
        { key: "D", text: t`*Zamia pygmaea*`, correct: false, misconceptionId: "C05-M2", value: "zamia_g" },
      ],
      solution: {
        steps: [
          t`Coast redwood.`,
          t`*Sequoia sempervirens*.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(E)" },
      stem: t`Gymnosperms bear`,
      verify: { kind: "value", inputs: {  }, params: { q: "naked" } },
      options: [
        { key: "A", text: t`seeds enclosed in fruits`, correct: false, misconceptionId: "C05-M4", value: "enclosed_seeds" },
        { key: "B", text: t`no seeds`, correct: false, misconceptionId: "C05-M5", value: "no_seeds" },
        { key: "C", text: t`spores only`, correct: false, misconceptionId: "C05-M6", value: "spores_only" },
        { key: "D", text: t`naked seeds`, correct: true, value: "naked_seeds" },
      ],
      solution: {
        steps: [
          t`Gymnos: naked.`,
          t`Naked seeds.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(B)" },
      stem: t`The smallest gymnosperm, about 25 cm tall, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "smallest" } },
      options: [
        { key: "A", text: t`*Zamia pygmaea*`, correct: true, value: "zamia_g" },
        { key: "B", text: t`*Sequoia sempervirens*`, correct: false, misconceptionId: "C05-M7", value: "sequoia_g" },
        { key: "C", text: t`*Taxodium mucronatum*`, correct: false, misconceptionId: "C05-M8", value: "taxodium_g" },
        { key: "D", text: t`*Ginkgo biloba*`, correct: false, misconceptionId: "C05-M9", value: "ginkgo_g" },
      ],
      solution: {
        steps: [
          t`About 25 cm.`,
          t`*Zamia pygmaea*.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(B)" },
      stem: t`The gymnosperm called a living fossil is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fossil" } },
      options: [
        { key: "A", text: t`*Zamia pygmaea*`, correct: false, misconceptionId: "C05-M11", value: "zamia_g" },
        { key: "B", text: t`*Taxodium mucronatum*`, correct: false, misconceptionId: "C05-M12", value: "taxodium_g" },
        { key: "C", text: t`*Ginkgo biloba*`, correct: true, value: "ginkgo_g" },
        { key: "D", text: t`*Sequoia sempervirens*`, correct: false, misconceptionId: "C05-M10", value: "sequoia_g" },
      ],
      solution: {
        steps: [
          t`Living fossil.`,
          t`*Ginkgo biloba*.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-plantae-11-bio/Ex Q1(B)" },
      stem: t`The gymnosperm famous for its huge girth, about 125 feet, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "girth" } },
      options: [
        { key: "A", text: t`*Taxodium mucronatum*`, correct: true, value: "taxodium_g" },
        { key: "B", text: t`*Sequoia sempervirens*`, correct: false, misconceptionId: "C05-M13", value: "sequoia_g" },
        { key: "C", text: t`*Zamia pygmaea*`, correct: false, misconceptionId: "C05-M14", value: "zamia_g" },
        { key: "D", text: t`*Ginkgo biloba*`, correct: false, misconceptionId: "C05-M15", value: "ginkgo_g" },
      ],
      solution: {
        steps: [
          t`About 125 ft round.`,
          t`*Taxodium mucronatum*.`,
        ],
      },
    },
  ],
};
