import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A top dairy cow gives one calf a year. How can a farmer get many calves from her?`,
    reveal: t`MOET: she is made to release many eggs, and the embryos are placed in other cows to carry.`,
  },
  explanation: {
    intuition: [
      t`**Animal husbandry** is the rearing and breeding of livestock.`,
      t`A **breed** is a group related by descent and alike in most characters.`,
      t`Breeding aims at higher yield and quality.`,
    ],
    formal: [
      {
        title: "Breeding",
        points: [
          t`**Inbreeding**: mating closely related animals of one breed.`,
          t`**Outbreeding**: unrelated animals; crossing two species is **interspecific hybridization** (mule = horse × donkey).`,
          t`**MOET**: an FSH-like hormone makes the cow superovulate; embryos go to surrogate mothers; used to produce **hybrids**.`,
        ],
      },
      {
        title: "Poultry diseases",
        points: [
          t`Viral: **Ranikhet**, bronchitis, bird flu.`,
          t`Bacterial: pullorum, cholera, typhoid.`,
          t`Fungal: aspergillosis.`,
        ],
      },
    ],
    worked: {
      prompt: t`A horse is crossed with a donkey. What kind of breeding is this?`,
      steps: [
        t`Horse and donkey are different species.`,
        t`Crossing species is interspecific.`,
      ],
      answer: t`Interspecific hybridization`,
    },
    visualSpec: t`One donor cow superovulating, embryos flushed and moved into several surrogate cows.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks inbreeding.",
      remediation: "MOET multiplies hybrids.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks outbreeding.",
      remediation: "MOET multiplies hybrids.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks outcrossing.",
      remediation: "MOET multiplies hybrids.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks inbreeding.",
      remediation: "Horse and donkey are not related breeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks insemination.",
      remediation: "That is a method, not a cross.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks outbreeding.",
      remediation: "These are different species.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says whole species.",
      remediation: "A breed is narrower.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says hybrid offspring.",
      remediation: "A breed is true-breeding.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says same farm.",
      remediation: "A breed is related by descent.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks bacterial.",
      remediation: "Ranikhet is viral.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks fungal.",
      remediation: "Ranikhet is viral.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks protozoan.",
      remediation: "Ranikhet is viral.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks insulin.",
      remediation: "Superovulation needs FSH.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks oxytocin.",
      remediation: "Oxytocin acts in birth.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks thyroxine.",
      remediation: "Thyroxine sets metabolism.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(8)" },
      stem: t`The MOET technique is used for`,
      verify: { kind: "value", inputs: {  }, params: { q: "moet" } },
      options: [
        { key: "A", text: t`outbreeding`, correct: false, misconceptionId: "C03-M2", value: "outbreeding_p" },
        { key: "B", text: t`outcrossing`, correct: false, misconceptionId: "C03-M3", value: "outcrossing_p" },
        { key: "C", text: t`production of hybrids`, correct: true, value: "hybrids_p" },
        { key: "D", text: t`inbreeding`, correct: false, misconceptionId: "C03-M1", value: "inbreeding_p" },
      ],
      solution: {
        steps: [
          t`Many embryos, many mothers.`,
          t`Production of hybrids.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(9)" },
      stem: t`A mule is the outcome of`,
      verify: { kind: "value", inputs: {  }, params: { q: "mule" } },
      options: [
        { key: "A", text: t`artificial insemination`, correct: false, misconceptionId: "C03-M5", value: "insemination_p" },
        { key: "B", text: t`outbreeding`, correct: false, misconceptionId: "C03-M6", value: "outbreeding_p" },
        { key: "C", text: t`interspecific hybridization`, correct: true, value: "interspecific_p" },
        { key: "D", text: t`inbreeding`, correct: false, misconceptionId: "C03-M4", value: "inbreeding_p" },
      ],
      solution: {
        steps: [
          t`Horse × donkey.`,
          t`Interspecific hybridization.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(7)" },
      stem: t`A breed is a group of animals that are`,
      verify: { kind: "value", inputs: {  }, params: { q: "breed" } },
      options: [
        { key: "A", text: t`all members of one species`, correct: false, misconceptionId: "C03-M7", value: "whole_species" },
        { key: "B", text: t`the hybrid offspring of two species`, correct: false, misconceptionId: "C03-M8", value: "hybrid_offspring" },
        { key: "C", text: t`kept on the same farm`, correct: false, misconceptionId: "C03-M9", value: "same_farm" },
        { key: "D", text: t`related by descent and similar in most characters`, correct: true, value: "related_descent" },
      ],
      solution: {
        steps: [
          t`Descent and likeness.`,
          t`Related by descent.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q4(4)" },
      stem: t`Ranikhet disease of poultry is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ranikhet" } },
      options: [
        { key: "A", text: t`fungal`, correct: false, misconceptionId: "C03-M11", value: "fungal_d" },
        { key: "B", text: t`protozoan`, correct: false, misconceptionId: "C03-M12", value: "protozoan_d" },
        { key: "C", text: t`viral`, correct: true, value: "viral_d" },
        { key: "D", text: t`bacterial`, correct: false, misconceptionId: "C03-M10", value: "bacterial_d" },
      ],
      solution: {
        steps: [
          t`A viral poultry disease.`,
          t`Viral.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(8)" },
      stem: t`In MOET, a cow is made to superovulate by giving her`,
      verify: { kind: "value", inputs: {  }, params: { q: "superovulate" } },
      options: [
        { key: "A", text: t`a hormone with FSH-like activity`, correct: true, value: "fsh_like" },
        { key: "B", text: t`insulin`, correct: false, misconceptionId: "C03-M13", value: "insulin_h" },
        { key: "C", text: t`oxytocin`, correct: false, misconceptionId: "C03-M14", value: "oxytocin_h" },
        { key: "D", text: t`thyroxine`, correct: false, misconceptionId: "C03-M15", value: "thyroxine_h" },
      ],
      solution: {
        steps: [
          t`Superovulation.`,
          t`FSH-like hormone.`,
        ],
      },
    },
  ],
};
