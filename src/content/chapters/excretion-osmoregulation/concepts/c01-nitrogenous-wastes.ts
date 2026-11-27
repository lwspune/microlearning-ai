import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A bird drinks little water, yet it must get rid of the nitrogen from its proteins. How?`,
    reveal: t`It turns ammonia into uric acid, which needs almost no water to remove, though making it costs energy.`,
  },
  explanation: {
    intuition: [
      t`Deamination of extra amino acids gives toxic **ammonia**.`,
      t`Animals remove nitrogen as ammonia, urea, uric acid or guanine.`,
      t`The less toxic the waste, the less water it needs, but the more energy it costs.`,
    ],
    formal: [
      {
        title: "Excretory modes",
        points: [
          t`**Ammonotelic**: ammonia; needs 300–500 ml of water per gram; tadpoles excrete it through skin and gills.`,
          t`**Ureotelic**: urea; about 50 ml of water per gram; mammals, sharks and adult frogs.`,
          t`**Uricotelic**: uric acid; 5–10 ml per gram; birds and desert snakes; costs the most energy.`,
        ],
      },
      {
        title: "Urea, guanine and organs",
        points: [
          t`The liver turns ammonia into **urea** by the **ornithine cycle**, using 3 ATP per urea.`,
          t`**Guanotelic** animals, such as the spider, excrete **guanine**.`,
          t`Earthworms use **metanephridia**; flatworms, protonephridia (flame cells); cockroaches, Malpighian tubules; crabs, green glands.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does a desert snake excrete uric acid and not ammonia?`,
      steps: [
        t`In the desert it must save water.`,
        t`Uric acid is least soluble and needs almost no water to remove.`,
      ],
      answer: t`To conserve water: it is uricotelic.`,
    },
    visualSpec: t`A scale of ammonia, urea and uric acid: water needed falls and energy cost rises.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks polar bear.",
      remediation: "Mammals are ureotelic; urea costs less energy than uric acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks frog.",
      remediation: "The adult frog is ureotelic; urea is cheaper to make.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks shark.",
      remediation: "Sharks are ureotelic, not uricotelic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Calls ammonia least toxic.",
      remediation: "Ammonia is highly toxic; uric acid is least toxic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks ammonia needs little water.",
      remediation: "Ammonia needs 300–500 ml of water per gram.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks all amphibians stay ammonotelic.",
      remediation: "The adult frog is mostly ureotelic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks fatty acids.",
      remediation: "Fatty acids have no nitrogen to form urea.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks glucose.",
      remediation: "Glucose has no nitrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks fats.",
      remediation: "Fats have no nitrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks uric acid.",
      remediation: "Uric acid is the uricotelic waste.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks urea.",
      remediation: "Urea is the ureotelic waste.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks ammonia.",
      remediation: "Ammonia is the ammonotelic waste.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Picks liver fluke.",
      remediation: "The flatworm has protonephridia (flame cells).",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Picks cockroach.",
      remediation: "The cockroach uses Malpighian tubules.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Picks crab.",
      remediation: "The crab uses green glands.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(A)" },
      stem: t`Which organism spends the most energy in producing its nitrogenous waste?`,
      verify: { kind: "value", inputs: {  }, params: { q: "energy" } },
      options: [
        { key: "A", text: t`Flamingo`, correct: true, value: "flamingo_t" },
        { key: "B", text: t`Polar bear`, correct: false, misconceptionId: "C01-M1", value: "polar_bear" },
        { key: "C", text: t`Frog`, correct: false, misconceptionId: "C01-M2", value: "frog_t" },
        { key: "D", text: t`Shark`, correct: false, misconceptionId: "C01-M3", value: "shark_t" },
      ],
      solution: {
        steps: [
          t`Birds are uricotelic.`,
          t`Uric acid costs the most energy: flamingo.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q3(B)" },
      stem: t`An amphibian tadpole can afford to be ammonotelic because`,
      verify: { kind: "value", inputs: {  }, params: { q: "tadpole" } },
      options: [
        { key: "A", text: t`it lives in water, which dilutes the toxic ammonia`, correct: true, value: "water_dilutes" },
        { key: "B", text: t`ammonia is the least toxic nitrogenous waste`, correct: false, misconceptionId: "C01-M4", value: "least_toxic" },
        { key: "C", text: t`ammonia needs very little water to be removed`, correct: false, misconceptionId: "C01-M5", value: "little_water" },
        { key: "D", text: t`all amphibians stay ammonotelic for life`, correct: false, misconceptionId: "C01-M6", value: "all_amphibians" },
      ],
      solution: {
        steps: [
          t`A tadpole has plenty of water around it.`,
          t`That water dilutes the ammonia.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(R)" },
      stem: t`Urea is a product of the breakdown of`,
      verify: { kind: "value", inputs: {  }, params: { q: "urea_source" } },
      options: [
        { key: "A", text: t`glucose`, correct: false, misconceptionId: "C01-M8", value: "glucose_t" },
        { key: "B", text: t`fats`, correct: false, misconceptionId: "C01-M9", value: "fats_t" },
        { key: "C", text: t`amino acids`, correct: true, value: "amino_acids" },
        { key: "D", text: t`fatty acids`, correct: false, misconceptionId: "C01-M7", value: "fatty_acids" },
      ],
      solution: {
        steps: [
          t`Urea carries nitrogen from deaminated amino acids.`,
          t`Amino acids.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q2(D)" },
      stem: t`A spider is guanotelic. It excretes its nitrogenous waste mainly as`,
      verify: { kind: "value", inputs: {  }, params: { q: "spider" } },
      options: [
        { key: "A", text: t`guanine`, correct: true, value: "guanine_w" },
        { key: "B", text: t`uric acid`, correct: false, misconceptionId: "C01-M10", value: "uric_acid_w" },
        { key: "C", text: t`urea`, correct: false, misconceptionId: "C01-M11", value: "urea_w" },
        { key: "D", text: t`ammonia`, correct: false, misconceptionId: "C01-M12", value: "ammonia_w" },
      ],
      solution: {
        steps: [
          t`Guanotelic means excreting guanine.`,
          t`Guanine.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(G)" },
      stem: t`Which organism excretes through metanephridia?`,
      verify: { kind: "value", inputs: {  }, params: { q: "metanephridia" } },
      options: [
        { key: "A", text: t`Earthworm`, correct: true, value: "earthworm_t" },
        { key: "B", text: t`Liver fluke`, correct: false, misconceptionId: "C01-M13", value: "liver_fluke" },
        { key: "C", text: t`Cockroach`, correct: false, misconceptionId: "C01-M14", value: "cockroach_t" },
        { key: "D", text: t`Crab`, correct: false, misconceptionId: "C01-M15", value: "crab_t" },
      ],
      solution: {
        steps: [
          t`Metanephridia open by a nephrostome and a nephridiopore.`,
          t`Earthworm.`,
        ],
      },
    },
  ],
};
