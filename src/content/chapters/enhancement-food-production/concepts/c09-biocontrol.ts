import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Organic farmers spray a powder of bacteria on cabbages, and the caterpillars die, but birds and bees are safe. How?`,
    reveal: t`The bacterium *Bacillus thuringiensis* makes a toxin that only works in a caterpillar's gut.`,
  },
  explanation: {
    intuition: [
      t`**Biocontrol** uses natural enemies against pests and diseases.`,
      t`Agents include bacteria, fungi, viruses and protozoans.`,
      t`They are safer than chemical pesticides.`,
    ],
    formal: [
      {
        title: "Against pests",
        points: [
          t`***Bt***: caterpillars eat its spores; the **cry protein** toxin kills them.`,
          t`*Beauveria* attacks aphids, mealy bugs and white flies; ***Nosema*** attacks grasshoppers, crickets and some caterpillars.`,
          t`NPV viruses attack caterpillars.`,
        ],
      },
      {
        title: "Against diseases and weeds",
        points: [
          t`***Trichoderma*** inhibits soil-borne fungal pathogens.`,
          t`Mycoherbicides: *Alternaria crassa* kills **water hyacinth**.`,
          t`*Phytophthora palmivora* kills **milk weed** in orchards.`,
        ],
      },
    ],
    worked: {
      prompt: t`A lake is choked with water hyacinth. Which biocontrol agent could clear it?`,
      steps: [
        t`Water hyacinth is a weed.`,
        t`*Alternaria crassa* is a mycoherbicide for it.`,
      ],
      answer: t`*Alternaria crassa*`,
    },
    visualSpec: t`A cabbage leaf with Bt spores and a caterpillar that ate them.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Picks viridin.",
      remediation: "Viridin is from *Trichoderma*.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Picks penicillin.",
      remediation: "Penicillin is from a mould.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Picks interferon.",
      remediation: "Interferon is animal.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Picks milk weed.",
      remediation: "That is *Phytophthora*.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Picks caterpillars.",
      remediation: "That is Bt.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Picks aphids.",
      remediation: "That is *Beauveria*.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Picks water hyacinth.",
      remediation: "That is *Alternaria*.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Picks grasshoppers.",
      remediation: "That is *Nosema*.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Picks root rot.",
      remediation: "That is *Trichoderma*'s target.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Says caterpillars.",
      remediation: "That is Bt.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Says weeds.",
      remediation: "Those are mycoherbicides.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Says nitrogen.",
      remediation: "That is a biofertilizer.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Picks mealy bugs.",
      remediation: "Those are attacked by fungi such as *Beauveria*.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Picks aphids.",
      remediation: "That is *Beauveria*.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Picks water hyacinth.",
      remediation: "That is *Alternaria*.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q3(3)" },
      stem: t`*Bacillus thuringiensis* kills caterpillars with its`,
      verify: { kind: "value", inputs: {  }, params: { q: "bt" } },
      options: [
        { key: "A", text: t`penicillin`, correct: false, misconceptionId: "C09-M2", value: "penicillin_t" },
        { key: "B", text: t`interferon`, correct: false, misconceptionId: "C09-M3", value: "interferon_t" },
        { key: "C", text: t`cry protein toxin`, correct: true, value: "cry_protein" },
        { key: "D", text: t`viridin`, correct: false, misconceptionId: "C09-M1", value: "viridin_t" },
      ],
      solution: {
        steps: [
          t`Gut toxin.`,
          t`Cry protein.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2024 Q. 20" },
      stem: t`The mycoherbicide *Alternaria crassa* controls`,
      verify: { kind: "value", inputs: {  }, params: { q: "alternaria" } },
      options: [
        { key: "A", text: t`water hyacinth`, correct: true, value: "water_hyacinth" },
        { key: "B", text: t`milk weed`, correct: false, misconceptionId: "C09-M4", value: "milk_weed" },
        { key: "C", text: t`caterpillars`, correct: false, misconceptionId: "C09-M5", value: "caterpillars_p" },
        { key: "D", text: t`aphids`, correct: false, misconceptionId: "C09-M6", value: "aphids_p" },
      ],
      solution: {
        steps: [
          t`A mycoherbicide.`,
          t`Water hyacinth.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2024 Q. 20" },
      stem: t`The mycoherbicide *Phytophthora palmivora* controls`,
      verify: { kind: "value", inputs: {  }, params: { q: "phytophthora" } },
      options: [
        { key: "A", text: t`water hyacinth`, correct: false, misconceptionId: "C09-M7", value: "water_hyacinth" },
        { key: "B", text: t`grasshoppers`, correct: false, misconceptionId: "C09-M8", value: "grasshoppers_p" },
        { key: "C", text: t`root rot`, correct: false, misconceptionId: "C09-M9", value: "root_rot" },
        { key: "D", text: t`milk weed in orchards`, correct: true, value: "milk_weed" },
      ],
      solution: {
        steps: [
          t`Orchard weed.`,
          t`Milk weed.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q3(3)" },
      stem: t`*Trichoderma* in the rhizosphere`,
      verify: { kind: "value", inputs: {  }, params: { q: "trichoderma" } },
      options: [
        { key: "A", text: t`inhibits soil-borne fungal pathogens`, correct: true, value: "soil_pathogens" },
        { key: "B", text: t`kills caterpillars`, correct: false, misconceptionId: "C09-M10", value: "kills_caterpillars" },
        { key: "C", text: t`kills weeds`, correct: false, misconceptionId: "C09-M11", value: "kills_weeds" },
        { key: "D", text: t`fixes nitrogen`, correct: false, misconceptionId: "C09-M12", value: "fixes_nitrogen" },
      ],
      solution: {
        steps: [
          t`Soil fungus fighter.`,
          t`Inhibits soil pathogens.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q3(3)" },
      stem: t`The protozoan *Nosema locustae* is used against`,
      verify: { kind: "value", inputs: {  }, params: { q: "nosema" } },
      options: [
        { key: "A", text: t`aphids`, correct: false, misconceptionId: "C09-M14", value: "aphids_p" },
        { key: "B", text: t`water hyacinth`, correct: false, misconceptionId: "C09-M15", value: "water_hyacinth" },
        { key: "C", text: t`grasshoppers and crickets`, correct: true, value: "grasshoppers_p" },
        { key: "D", text: t`mealy bugs and white flies`, correct: false, misconceptionId: "C09-M13", value: "mealybugs_whiteflies" },
      ],
      solution: {
        steps: [
          t`A protozoan.`,
          t`Grasshoppers.`,
        ],
      },
    },
  ],
};
