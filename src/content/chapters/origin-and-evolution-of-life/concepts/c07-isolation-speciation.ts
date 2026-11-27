import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`On the Galápagos Islands, Darwin found finches with beaks for seeds, insects and cactus flowers. Were they different species from the start?`,
    reveal: t`No: one ancestral finch spread over the islands and its isolated populations became many species: adaptive radiation.`,
  },
  explanation: {
    intuition: [
      t`A **species** is a group whose members interbreed.`,
      t`**Isolation** stops gene flow between populations.`,
      t`Isolated populations can become new species: **speciation**.`,
    ],
    formal: [
      {
        title: "Isolating mechanisms",
        points: [
          t`**Pre-mating**: habitat, seasonal, behavioural (ethological), mechanical.`,
          t`**Post-mating**: gamete mortality, zygote mortality, **hybrid sterility** (the mule).`,
        ],
      },
      {
        title: "Adaptive radiation",
        points: [
          t`One ancestor gives many forms suited to different niches.`,
          t`Darwin's finches; Australian marsupials.`,
          t`It is divergent evolution.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two frog species breed in the same pond, one in spring and one in autumn. What isolates them?`,
      steps: [
        t`They breed at different times.`,
        t`Seasonal isolation, a pre-mating mechanism.`,
      ],
      answer: t`Seasonal isolation`,
    },
    visualSpec: t`One finch branching into many, each beak matched to its food.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks convergent evolution.",
      remediation: "Convergent means unrelated groups becoming alike.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks genetic drift.",
      remediation: "Drift is chance change.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks parallel evolution.",
      remediation: "Parallel is related groups changing alike.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks industrial melanism.",
      remediation: "That is selection in moths.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks convergent evolution.",
      remediation: "The finches diverged.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks the mutation theory.",
      remediation: "That is de Vries's theory.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks hybrid sterility.",
      remediation: "That is post-mating.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks hybrid inviability.",
      remediation: "That is post-mating.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks hybrid breakdown.",
      remediation: "That is post-mating.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks seasonal isolation.",
      remediation: "The mule exists: mating happened.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks ethological isolation.",
      remediation: "Behaviour didn't stop the mating.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks geographical isolation.",
      remediation: "Horses and donkeys did mate.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks hybridization.",
      remediation: "Hybridization crosses species.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks mutation.",
      remediation: "Mutation changes genes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks adaptation.",
      remediation: "Adaptation fits a species to its home.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q2(2)" },
      stem: t`An original species changing into many varieties, each adapted to a different environment, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "radiation" } },
      options: [
        { key: "A", text: t`genetic drift`, correct: false, misconceptionId: "C07-M2", value: "genetic_drift" },
        { key: "B", text: t`parallel evolution`, correct: false, misconceptionId: "C07-M3", value: "parallel_evolution" },
        { key: "C", text: t`adaptive radiation`, correct: true, value: "adaptive_radiation" },
        { key: "D", text: t`convergent evolution`, correct: false, misconceptionId: "C07-M1", value: "convergent_evolution" },
      ],
      solution: {
        steps: [
          t`One species into many adapted forms.`,
          t`Adaptive radiation.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q5(2)" },
      stem: t`Darwin's finches of the Galápagos Islands are an example of`,
      verify: { kind: "value", inputs: {  }, params: { q: "finches" } },
      options: [
        { key: "A", text: t`industrial melanism`, correct: false, misconceptionId: "C07-M4", value: "industrial_melanism" },
        { key: "B", text: t`convergent evolution`, correct: false, misconceptionId: "C07-M5", value: "convergent_evolution" },
        { key: "C", text: t`the mutation theory`, correct: false, misconceptionId: "C07-M6", value: "mutation_theory" },
        { key: "D", text: t`adaptive radiation`, correct: true, value: "adaptive_radiation" },
      ],
      solution: {
        steps: [
          t`One finch ancestor gave many species.`,
          t`Adaptive radiation.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2024 Q. 16" },
      stem: t`A pre-mating isolating mechanism is`,
      verify: { kind: "value", inputs: {  }, params: { q: "premating" } },
      options: [
        { key: "A", text: t`hybrid breakdown`, correct: false, misconceptionId: "C07-M9", value: "hybrid_breakdown" },
        { key: "B", text: t`breeding at different seasons`, correct: true, value: "seasonal_isolation" },
        { key: "C", text: t`hybrid sterility`, correct: false, misconceptionId: "C07-M7", value: "hybrid_sterility" },
        { key: "D", text: t`hybrid inviability`, correct: false, misconceptionId: "C07-M8", value: "hybrid_inviability" },
      ],
      solution: {
        steps: [
          t`Different breeding seasons.`,
          t`A pre-mating mechanism.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q5(5)" },
      stem: t`A mule, the offspring of a horse and a donkey, is sterile. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mule" } },
      options: [
        { key: "A", text: t`hybrid sterility, a post-mating mechanism`, correct: true, value: "hybrid_sterility" },
        { key: "B", text: t`seasonal isolation`, correct: false, misconceptionId: "C07-M10", value: "seasonal_isolation" },
        { key: "C", text: t`ethological isolation`, correct: false, misconceptionId: "C07-M11", value: "ethological_isolation" },
        { key: "D", text: t`geographical isolation`, correct: false, misconceptionId: "C07-M12", value: "geographical_isolation" },
      ],
      solution: {
        steps: [
          t`The hybrid is born but sterile.`,
          t`Hybrid sterility.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q2(1)" },
      stem: t`The formation of new species is`,
      verify: { kind: "value", inputs: {  }, params: { q: "speciation" } },
      options: [
        { key: "A", text: t`hybridization`, correct: false, misconceptionId: "C07-M13", value: "hybridization" },
        { key: "B", text: t`mutation`, correct: false, misconceptionId: "C07-M14", value: "mutation" },
        { key: "C", text: t`adaptation`, correct: false, misconceptionId: "C07-M15", value: "adaptation" },
        { key: "D", text: t`speciation`, correct: true, value: "speciation" },
      ],
      solution: {
        steps: [
          t`New species form.`,
          t`Speciation.`,
        ],
      },
    },
  ],
};
