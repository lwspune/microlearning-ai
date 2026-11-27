import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A bath sponge was once an animal. How can an animal live without moving, eating with no mouth?`,
    reveal: t`Water flows in through countless tiny pores and out through one large opening, bringing food and oxygen.`,
  },
  explanation: {
    intuition: [
      t`The simplest animals are sponges, cnidarians and comb jellies.`,
      t`All are aquatic.`,
      t`Their bodies are organised at the cell or tissue level.`,
    ],
    formal: [
      {
        title: "Porifera and Cnidaria",
        points: [
          t`**Porifera** (sponges, e.g. *Sycon*): water enters by **ostia**, leaves by the **osculum**; spicules or **spongin** support them.`,
          t`**Cnidaria**: diploblastic, radial, with stinging cells.`,
          t`Two forms: **polyp** and **medusa**, e.g. *Aurelia*.`,
        ],
      },
      {
        title: "Ctenophora",
        points: [
          t`**Comb jellies**: swim with eight rows of **comb plates**.`,
          t`Diploblastic and radial, like cnidarians.`,
          t`A **minor phylum**, with very few members.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sponge and a sea star both have calcareous parts. Same phylum?`,
      steps: [
        t`Sponges have spicules.`,
        t`Sea stars have ossicles; they are echinoderms.`,
      ],
      answer: t`No`,
    },
    visualSpec: t`A vase-shaped Sycon with arrows in through ostia and out through the osculum.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks jelly fish.",
      remediation: "Cnidaria is a major phylum.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks *Herdmania*.",
      remediation: "That is a urochordate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks *Salpa*.",
      remediation: "That is a urochordate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks Cnidaria.",
      remediation: "Cnidarians have a mouth.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks Ctenophora.",
      remediation: "Those have comb plates.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks Echinodermata.",
      remediation: "Those have tube feet.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks Cnidaria.",
      remediation: "Cnidarians have stinging cells, not comb plates.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks Porifera.",
      remediation: "Sponges have ostia.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks Annelida.",
      remediation: "Annelids have parapodia.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says ossicles.",
      remediation: "That is echinoderms.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says chitin.",
      remediation: "That is arthropods.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says bone.",
      remediation: "That is vertebrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says polyp.",
      remediation: "A polyp is a tube.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says sponge.",
      remediation: "*Aurelia* is a cnidarian.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says comb jelly.",
      remediation: "*Aurelia* has no combs.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q1(A)" },
      stem: t`Which of these belongs to a minor phylum?`,
      verify: { kind: "value", inputs: {  }, params: { q: "minor" } },
      options: [
        { key: "A", text: t`Comb jelly`, correct: true, value: "comb_jelly" },
        { key: "B", text: t`Jelly fish`, correct: false, misconceptionId: "C02-M1", value: "jelly_fish" },
        { key: "C", text: t`*Herdmania*`, correct: false, misconceptionId: "C02-M2", value: "herdmania_a" },
        { key: "D", text: t`*Salpa*`, correct: false, misconceptionId: "C02-M3", value: "salpa_a" },
      ],
      solution: {
        steps: [
          t`Ctenophora.`,
          t`Comb jelly.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q4" },
      stem: t`Ostia, the tiny pores on the body wall, are a feature of`,
      verify: { kind: "value", inputs: {  }, params: { q: "ostia" } },
      options: [
        { key: "A", text: t`Cnidaria`, correct: false, misconceptionId: "C02-M4", value: "cnidaria_p" },
        { key: "B", text: t`Ctenophora`, correct: false, misconceptionId: "C02-M5", value: "ctenophora_p" },
        { key: "C", text: t`Echinodermata`, correct: false, misconceptionId: "C02-M6", value: "echinodermata_p" },
        { key: "D", text: t`Porifera`, correct: true, value: "porifera_p" },
      ],
      solution: {
        steps: [
          t`Water-entry pores.`,
          t`Porifera.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q4" },
      stem: t`Comb plates are a feature of`,
      verify: { kind: "value", inputs: {  }, params: { q: "comb" } },
      options: [
        { key: "A", text: t`Annelida`, correct: false, misconceptionId: "C02-M9", value: "annelida_p" },
        { key: "B", text: t`Ctenophora`, correct: true, value: "ctenophora_p" },
        { key: "C", text: t`Cnidaria`, correct: false, misconceptionId: "C02-M7", value: "cnidaria_p" },
        { key: "D", text: t`Porifera`, correct: false, misconceptionId: "C02-M8", value: "porifera_p" },
      ],
      solution: {
        steps: [
          t`Swimming plates.`,
          t`Ctenophora.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(H)" },
      stem: t`The body of a sponge is supported by`,
      verify: { kind: "value", inputs: {  }, params: { q: "support" } },
      options: [
        { key: "A", text: t`a bony skeleton`, correct: false, misconceptionId: "C02-M12", value: "bony_skeleton" },
        { key: "B", text: t`calcareous or siliceous spicules, or spongin fibres`, correct: true, value: "spicules_spongin" },
        { key: "C", text: t`calcareous ossicles`, correct: false, misconceptionId: "C02-M10", value: "calcareous_ossicles" },
        { key: "D", text: t`a chitinous exoskeleton`, correct: false, misconceptionId: "C02-M11", value: "chitin_exoskeleton" },
      ],
      solution: {
        steps: [
          t`Sponge skeleton.`,
          t`Spicules or spongin.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q3(B)" },
      stem: t`*Aurelia*, the umbrella-shaped jelly fish, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "aurelia" } },
      options: [
        { key: "A", text: t`a comb jelly`, correct: false, misconceptionId: "C02-M15", value: "comb_jelly" },
        { key: "B", text: t`the medusa form of a cnidarian`, correct: true, value: "medusa_f" },
        { key: "C", text: t`the polyp form of a cnidarian`, correct: false, misconceptionId: "C02-M13", value: "polyp_f" },
        { key: "D", text: t`a sponge`, correct: false, misconceptionId: "C02-M14", value: "sponge_f" },
      ],
      solution: {
        steps: [
          t`Umbrella-shaped.`,
          t`Medusa.`,
        ],
      },
    },
  ],
};
