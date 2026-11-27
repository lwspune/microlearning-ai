import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`If every tourist took just one shell from an island beach, would it matter?`,
    reveal: t`Yes: millions of tourists would strip the beach. Over-exploitation, one small act repeated, is a main cause of biodiversity loss.`,
  },
  explanation: {
    intuition: [
      t`Biodiversity is being lost at an alarming rate.`,
      t`Humans cause most of it, and can stop it.`,
      t`Conservation is in situ or ex situ.`,
    ],
    formal: [
      {
        title: "Two ways",
        points: [
          t`**In situ**: in the natural habitat, e.g. **sacred groves**.`,
          t`**Ex situ**: away from it, e.g. zoos and botanical gardens.`,
          t`In situ protects whole communities.`,
        ],
      },
      {
        title: "Human role",
        points: [
          t`Main causes: **population explosion** and **over-exploitation** of resources.`,
          t`Individuals can avoid collecting from the wild.`,
          t`Save water, energy and paper; plant native trees.`,
        ],
      },
    ],
    worked: {
      prompt: t`A village protects a forest patch in the name of a deity. What kind of conservation is it?`,
      steps: [
        t`The forest stays where it is.`,
        t`That is in its natural habitat.`,
      ],
      answer: t`In situ`,
    },
    visualSpec: t`Two columns: a sacred grove (in situ) and a zoo (ex situ).`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks ex situ.",
      remediation: "The grove stays in place.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks a zoo.",
      remediation: "A zoo moves animals.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks a museum.",
      remediation: "A museum keeps dead specimens.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks in situ.",
      remediation: "Animals are moved.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks sacred grove.",
      remediation: "That is in situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks national park.",
      remediation: "That is in situ.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says beauty only.",
      remediation: "It is about biodiversity.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says toxic.",
      remediation: "Shells are not toxic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says safety.",
      remediation: "It is about biodiversity.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says natural only.",
      remediation: "Humans are the main cause.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says laws.",
      remediation: "Laws protect.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says gardens and zoos.",
      remediation: "Those conserve.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says wild pets.",
      remediation: "That removes animals.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says more plastic.",
      remediation: "That pollutes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says clearing land.",
      remediation: "That destroys habitat.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(E)" },
      stem: t`Protecting a forest as a sacred grove is`,
      verify: { kind: "value", inputs: {  }, params: { q: "groves" } },
      options: [
        { key: "A", text: t`a zoo`, correct: false, misconceptionId: "C04-M2", value: "zoo_c" },
        { key: "B", text: t`a museum`, correct: false, misconceptionId: "C04-M3", value: "museum_c" },
        { key: "C", text: t`in situ conservation`, correct: true, value: "in_situ_c" },
        { key: "D", text: t`ex situ conservation`, correct: false, misconceptionId: "C04-M1", value: "ex_situ_c" },
      ],
      solution: {
        steps: [
          t`Protected in place.`,
          t`In situ.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(E)" },
      stem: t`Keeping wild animals in a zoo is`,
      verify: { kind: "value", inputs: {  }, params: { q: "zoo" } },
      options: [
        { key: "A", text: t`in situ conservation`, correct: false, misconceptionId: "C04-M4", value: "in_situ_c" },
        { key: "B", text: t`a sacred grove`, correct: false, misconceptionId: "C04-M5", value: "sacred_grove_c" },
        { key: "C", text: t`a national park`, correct: false, misconceptionId: "C04-M6", value: "national_park_c" },
        { key: "D", text: t`ex situ conservation`, correct: true, value: "ex_situ_c" },
      ],
      solution: {
        steps: [
          t`Moved to captivity.`,
          t`Ex situ.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q3(C)" },
      stem: t`Tourists in the Andamans may not collect shells from beaches, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "shells" } },
      options: [
        { key: "A", text: t`shells are toxic`, correct: false, misconceptionId: "C04-M8", value: "toxic_shells" },
        { key: "B", text: t`it keeps tourists safe`, correct: false, misconceptionId: "C04-M9", value: "tourist_safety" },
        { key: "C", text: t`collecting by everyone would over-exploit the beach's biodiversity`, correct: true, value: "overexploitation_c" },
        { key: "D", text: t`shells make beaches beautiful, nothing more`, correct: false, misconceptionId: "C04-M7", value: "beach_beauty" },
      ],
      solution: {
        steps: [
          t`Too many collectors.`,
          t`Over-exploitation.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q4(A)" },
      stem: t`Biodiversity is being lost at an alarming rate mainly because of`,
      verify: { kind: "value", inputs: {  }, params: { q: "causes" } },
      options: [
        { key: "A", text: t`natural causes alone`, correct: false, misconceptionId: "C04-M10", value: "natural_only" },
        { key: "B", text: t`protection laws`, correct: false, misconceptionId: "C04-M11", value: "protection_laws" },
        { key: "C", text: t`botanical gardens and zoos`, correct: false, misconceptionId: "C04-M12", value: "gardens_zoos" },
        { key: "D", text: t`population explosion and over-exploitation of resources`, correct: true, value: "population_overuse" },
      ],
      solution: {
        steps: [
          t`People and overuse.`,
          t`Population and over-exploitation.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/living-world-11-bio/Ex Q5" },
      stem: t`As an individual, you can help prevent the loss of biodiversity by`,
      verify: { kind: "value", inputs: {  }, params: { q: "individual" } },
      options: [
        { key: "A", text: t`clearing land for gardens`, correct: false, misconceptionId: "C04-M15", value: "clear_land" },
        { key: "B", text: t`not collecting plants, shells or animals from the wild`, correct: true, value: "leave_wild_alone" },
        { key: "C", text: t`buying wild animals as pets`, correct: false, misconceptionId: "C04-M13", value: "buy_wild_pets" },
        { key: "D", text: t`using more plastic`, correct: false, misconceptionId: "C04-M14", value: "more_plastic" },
      ],
      solution: {
        steps: [
          t`Leave the wild alone.`,
          t`Do not collect from the wild.`,
        ],
      },
    },
  ],
};
