import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Water hyacinth was brought to India for its pretty flowers. Now it chokes lakes and is called the 'Terror of Bengal'. What went wrong?`,
    reveal: t`It was an alien species with no natural enemies here, so it spread faster than anything could control it.`,
  },
  explanation: {
    intuition: [
      t`Species are being lost far faster than normal.`,
      t`Four main causes form the **evil quartet**.`,
      t`The IUCN Red List records each species' status.`,
    ],
    formal: [
      {
        title: "The evil quartet",
        points: [
          t`**Habitat loss and fragmentation**: the prime cause.`,
          t`**Over-exploitation** of wild species.`,
          t`**Alien invasion** (*Parthenium*, *Lantana*, water hyacinth) and **co-extinction** (a host's loss kills its parasites).`,
        ],
      },
      {
        title: "IUCN categories",
        points: [
          t`**EX** Extinct; **EW** Extinct in the Wild: survives only in captivity.`,
          t`**EN** Endangered: very high risk, after a 50–70% fall in 10 years.`,
          t`Others: critically endangered, vulnerable, least concern.`,
        ],
      },
    ],
    worked: {
      prompt: t`A forest is cut into small patches by roads. Which cause of loss is this?`,
      steps: [
        t`The habitat is broken into pieces.`,
        t`That is fragmentation.`,
      ],
      answer: t`Habitat loss and fragmentation`,
    },
    visualSpec: t`Four arrows labelled habitat loss, over-exploitation, alien species and co-extinction pointing at a shrinking species count.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks algal bloom.",
      remediation: "That is a growth of algae.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks BOD.",
      remediation: "BOD is oxygen demand.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks eutrophication.",
      remediation: "That is nutrient enrichment.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks *Gloriosa*.",
      remediation: "*Gloriosa* is native.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks *Michelia*.",
      remediation: "*Michelia* is native.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks *Sansevieria*.",
      remediation: "*Sansevieria* is ornamental.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks over-exploitation.",
      remediation: "No one harvested them.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks alien invasion.",
      remediation: "No newcomer arrived.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks habitat loss.",
      remediation: "They lost their host.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks over-exploitation.",
      remediation: "Habitat loss is first.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks alien invasion.",
      remediation: "Habitat loss is first.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks co-extinction.",
      remediation: "Habitat loss is first.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says fully extinct.",
      remediation: "That is EX.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says endangered.",
      remediation: "That is EN.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says least concern.",
      remediation: "That is LC.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q1(4)" },
      stem: t`The term 'Terror of Bengal' is used for`,
      verify: { kind: "value", inputs: {  }, params: { q: "terror" } },
      options: [
        { key: "A", text: t`water hyacinth`, correct: true, value: "water_hyacinth" },
        { key: "B", text: t`algal bloom`, correct: false, misconceptionId: "C02-M1", value: "algal_bloom" },
        { key: "C", text: t`increased BOD`, correct: false, misconceptionId: "C02-M2", value: "increased_bod" },
        { key: "D", text: t`eutrophication`, correct: false, misconceptionId: "C02-M3", value: "eutrophication_t" },
      ],
      solution: {
        steps: [
          t`From the Amazon.`,
          t`Water hyacinth.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2026 Q. 1(vii)" },
      stem: t`Which of these is an invasive plant species?`,
      verify: { kind: "value", inputs: {  }, params: { q: "invasive" } },
      options: [
        { key: "A", text: t`*Gloriosa*`, correct: false, misconceptionId: "C02-M4", value: "gloriosa_p" },
        { key: "B", text: t`*Michelia*`, correct: false, misconceptionId: "C02-M5", value: "michelia_p" },
        { key: "C", text: t`*Sansevieria*`, correct: false, misconceptionId: "C02-M6", value: "sansevieria_p" },
        { key: "D", text: t`*Parthenium*`, correct: true, value: "parthenium_p" },
      ],
      solution: {
        steps: [
          t`Carrot grass.`,
          t`*Parthenium*.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2026 Q. 1(iv)" },
      stem: t`When a host fish dies out, its unique parasites die out too. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "host" } },
      options: [
        { key: "A", text: t`habitat loss`, correct: false, misconceptionId: "C02-M9", value: "habitat_loss" },
        { key: "B", text: t`co-extinction`, correct: true, value: "coextinction_c" },
        { key: "C", text: t`over-exploitation`, correct: false, misconceptionId: "C02-M7", value: "overexploitation_c" },
        { key: "D", text: t`invasion of alien species`, correct: false, misconceptionId: "C02-M8", value: "alien_invasion" },
      ],
      solution: {
        steps: [
          t`Host and parasite.`,
          t`Co-extinction.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2024 Q. 22" },
      stem: t`The prime cause of the loss of biodiversity is`,
      verify: { kind: "value", inputs: {  }, params: { q: "prime" } },
      options: [
        { key: "A", text: t`co-extinction`, correct: false, misconceptionId: "C02-M12", value: "coextinction_c" },
        { key: "B", text: t`habitat loss and fragmentation`, correct: true, value: "habitat_loss" },
        { key: "C", text: t`over-exploitation`, correct: false, misconceptionId: "C02-M10", value: "overexploitation_c" },
        { key: "D", text: t`invasion of alien species`, correct: false, misconceptionId: "C02-M11", value: "alien_invasion" },
      ],
      solution: {
        steps: [
          t`The prime cause.`,
          t`Habitat loss and fragmentation.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q2(5)" },
      stem: t`A species in the IUCN category EW (Extinct in the Wild)`,
      verify: { kind: "value", inputs: {  }, params: { q: "ew" } },
      options: [
        { key: "A", text: t`is of least concern`, correct: false, misconceptionId: "C02-M15", value: "least_concern" },
        { key: "B", text: t`survives only in captivity`, correct: true, value: "captivity_only" },
        { key: "C", text: t`has no living members`, correct: false, misconceptionId: "C02-M13", value: "fully_extinct" },
        { key: "D", text: t`is endangered but still wild`, correct: false, misconceptionId: "C02-M14", value: "endangered_wild" },
      ],
      solution: {
        steps: [
          t`Only in zoos.`,
          t`Survives only in captivity.`,
        ],
      },
    },
  ],
};
