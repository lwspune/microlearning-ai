import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`For a century, chemical plants dumped waste and paid to clean it up later. Some chemists asked a different question: why make the waste at all?`,
    reveal: t`That question is the heart of green chemistry: design the chemistry so the hazard never appears, instead of handling it afterwards.`,
  },
  explanation: {
    intuition: [
      t`**Sustainable development** meets today's needs without spoiling the future's ability to meet its own.`,
      t`The Earth can absorb some waste; trouble starts when we exceed that capacity.`,
      t`**Green chemistry** designs products and processes that cut or remove hazardous substances.`,
      t`Preventing waste is better than treating it.`,
    ],
    formal: [
      {
        title: "Green chemistry",
        points: [
          t`The term was coined by Paul T. Anastas, who also set out its twelve principles.`,
          t`It aims at the highest efficiency with the least harm to health and the environment.`,
        ],
      },
      {
        title: "Its role",
        points: [
          t`It works within the Earth's natural capacity to deal with waste.`,
          t`It promotes cleaner technology that avoids hazardous substances.`,
          t`It reduces costs: less waste to treat, less energy, fewer raw materials.`,
        ],
      },
    ],
    worked: {
      prompt: t`A paint factory switches from an organic solvent to water. Is this a green chemistry change?`,
      steps: [
        t`The hazardous solvent is no longer used.`,
        t`The hazard is removed at the source.`,
      ],
      answer: t`Yes`,
    },
    visualSpec: t`Compare two routes to the same product: one ending in a waste pond, one designed to leave none.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes sustainable to mean continuous.",
      remediation: "Sustainable means meeting today's needs without harming future generations.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks a vague label.",
      remediation: "The defined term is sustainable development.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks the opposite label.",
      remediation: "Development that protects the future is sustainable development.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Credits Born and Haber.",
      remediation: "Born and Haber gave the lattice-energy cycle; Paul Anastas coined green chemistry.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Credits Norio Taniguchi.",
      remediation: "Taniguchi coined the term nanotechnology; Anastas coined green chemistry.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Credits Richard Feynman.",
      remediation: "Feynman foresaw nanoscience; Anastas coined green chemistry.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks green chemistry means treating pollution after release.",
      remediation: "Green chemistry prevents the hazard at the source; treatment comes too late.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks green chemistry uses only natural chemicals.",
      remediation: "Natural chemicals can be hazardous too; the aim is to reduce hazards by design.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks green chemistry is the chemistry of plants.",
      remediation: "Green refers to the environment, not to plants or chlorophyll.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks dilution removes the hazard.",
      remediation: "Diluted toxins are still released; the green answer is not to make them.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks safe storage is the green answer.",
      remediation: "Stored waste remains a hazard; better not to make it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks any waste at all is unsustainable.",
      remediation: "The Earth can absorb some waste; exceeding its capacity is the problem.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks using any chemical is unsustainable.",
      remediation: "Chemicals are needed; green chemistry makes their use safer.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks all industry is unsustainable.",
      remediation: "Industry can be sustainable if its waste stays within the Earth's capacity.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.1 (i)" },
      stem: t`Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "sustainable" } },
      options: [
        { key: "A", text: t`irrational development`, correct: false, misconceptionId: "C01-M3", value: "irrational" },
        { key: "B", text: t`continuous development`, correct: false, misconceptionId: "C01-M1", value: "continuous" },
        { key: "C", text: t`true development`, correct: false, misconceptionId: "C01-M2", value: "true_dev" },
        { key: "D", text: t`sustainable development`, correct: true, value: "sustainable" },
      ],
      solution: {
        steps: [
          t`Meeting present needs while protecting the future's.`,
          t`That is sustainable development.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.1 (v)" },
      stem: t`The concept of green chemistry was introduced by`,
      verify: { kind: "value", inputs: {  }, params: { q: "anastas" } },
      options: [
        { key: "A", text: t`Paul T. Anastas`, correct: true, value: "anastas" },
        { key: "B", text: t`Born and Haber`, correct: false, misconceptionId: "C01-M4", value: "born_haber" },
        { key: "C", text: t`Norio Taniguchi`, correct: false, misconceptionId: "C01-M5", value: "taniguchi" },
        { key: "D", text: t`Richard Feynman`, correct: false, misconceptionId: "C01-M6", value: "feynman" },
      ],
      solution: {
        steps: [
          t`Paul T. Anastas coined the term.`,
          t`He also set out the twelve principles.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.3 (i)" },
      stem: t`Green chemistry is best described as`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`using only chemicals obtained from nature`, correct: false, misconceptionId: "C01-M8", value: "natural_only" },
        { key: "B", text: t`designing chemical products and processes that reduce or eliminate hazardous substances`, correct: true, value: "reduce_hazard_design" },
        { key: "C", text: t`the chemistry of chlorophyll and green plants`, correct: false, misconceptionId: "C01-M9", value: "plant_chemistry" },
        { key: "D", text: t`cleaning up pollution after it has been released`, correct: false, misconceptionId: "C01-M7", value: "clean_up_after" },
      ],
      solution: {
        steps: [
          t`Green chemistry works by design.`,
          t`It reduces or eliminates hazardous substances.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.3 (ii)" },
      stem: t`A factory process produces a toxic by-product. Which response follows green chemistry?`,
      verify: { kind: "value", inputs: {  }, params: { q: "waste" } },
      options: [
        { key: "A", text: t`dilute the by-product in a large volume of water`, correct: false, misconceptionId: "C01-M10", value: "dilute" },
        { key: "B", text: t`treat the by-product before releasing it`, correct: false, misconceptionId: "C01-M7", value: "treat_waste" },
        { key: "C", text: t`redesign the process so the by-product is not formed`, correct: true, value: "redesign" },
        { key: "D", text: t`store the by-product safely underground`, correct: false, misconceptionId: "C01-M11", value: "store_underground" },
      ],
      solution: {
        steps: [
          t`Prevention beats treatment.`,
          t`Redesign so the by-product never forms.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.3 (ii)" },
      stem: t`The Earth can absorb some waste naturally. According to green chemistry, society becomes unsustainable when`,
      verify: { kind: "value", inputs: {  }, params: { q: "capacity" } },
      options: [
        { key: "A", text: t`it has any industry at all`, correct: false, misconceptionId: "C01-M14", value: "any_industry" },
        { key: "B", text: t`it produces any waste at all`, correct: false, misconceptionId: "C01-M12", value: "any_waste" },
        { key: "C", text: t`it uses any chemicals at all`, correct: false, misconceptionId: "C01-M13", value: "any_chemical" },
        { key: "D", text: t`the waste it produces exceeds the Earth's natural capacity to deal with it`, correct: true, value: "exceeds_capacity" },
      ],
      solution: {
        steps: [
          t`The Earth can deal with some waste.`,
          t`Exceeding that capacity is unsustainable.`,
        ],
      },
    },
  ],
};
