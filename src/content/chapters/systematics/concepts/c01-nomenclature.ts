import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`The mango has more than 50 names in Sanskrit alone. How can scientists across the world be sure they mean the same tree?`,
    reveal: t`By one scientific name for each organism: *Mangifera indica* L. means the same tree in every country and language.`,
  },
  explanation: {
    intuition: [
      t`Common names differ between languages and even dialects.`,
      t`**Binomial nomenclature** gives each organism one two-part scientific name.`,
      t`It was introduced by **Carl Linnaeus** in *Species Plantarum* (1753).`,
    ],
    formal: [
      {
        title: "The rules",
        points: [
          t`First the **generic epithet**, with a capital letter: *Helianthus*.`,
          t`Then the **specific epithet**, with a small letter: *annuus*.`,
          t`The name is printed in italics (underlined when handwritten), then the author's abbreviation: **L.** for Linnaeus.`,
        ],
      },
      {
        title: "Why it matters",
        points: [
          t`One name, worldwide.`,
          t`Names follow fixed rules confirmed by an international code (ICNAFP for plants).`,
          t`It allows communication without confusion.`,
        ],
      },
    ],
    worked: {
      prompt: t`Correct this name: *mangifera Indica* l.`,
      steps: [
        t`The genus takes a capital, the species a small letter.`,
        t`The author's abbreviation is a capital L.`,
      ],
      answer: t`*Mangifera indica* L.`,
    },
    visualSpec: t`The name *Helianthus annuus* L. split into generic epithet, specific epithet and author.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Capitalises the species.",
      remediation: "The specific epithet is lower case.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Writes the genus in lower case.",
      remediation: "The genus takes a capital.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Reverses the order.",
      remediation: "Genus comes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks Whittaker.",
      remediation: "Whittaker gave five kingdoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks Darwin.",
      remediation: "Darwin explained evolution.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks Diener.",
      remediation: "Diener found viroids.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Puts species first.",
      remediation: "Genus comes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks kingdom.",
      remediation: "Only genus and species.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks family.",
      remediation: "Only genus and species.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says shorter.",
      remediation: "It is about one name.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says local language.",
      remediation: "It is the same everywhere.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says plants only.",
      remediation: "Animals have them too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says location.",
      remediation: "It is the author.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says large.",
      remediation: "It is the author.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says leaf.",
      remediation: "It is the author.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q8" },
      stem: t`Which scientific name of the sunflower is written correctly?`,
      verify: { kind: "value", inputs: {  }, params: { q: "correct" } },
      options: [
        { key: "A", text: t`*Helianthus annuus* L.`, correct: true, value: "name_a" },
        { key: "B", text: t`*Helianthus Annuus* l.`, correct: false, misconceptionId: "C01-M1", value: "name_b" },
        { key: "C", text: t`*helianthus annuus* L.`, correct: false, misconceptionId: "C01-M2", value: "name_c" },
        { key: "D", text: t`*Annuus helianthus* L.`, correct: false, misconceptionId: "C01-M3", value: "name_d" },
      ],
      solution: {
        steps: [
          t`Capital genus, small species, author.`,
          t`*Helianthus annuus* L.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q2(C)" },
      stem: t`Binomial nomenclature was introduced in *Species Plantarum* (1753) by`,
      verify: { kind: "value", inputs: {  }, params: { q: "founder" } },
      options: [
        { key: "A", text: t`Carl Linnaeus`, correct: true, value: "linnaeus_s" },
        { key: "B", text: t`R. H. Whittaker`, correct: false, misconceptionId: "C01-M4", value: "whittaker_s" },
        { key: "C", text: t`Charles Darwin`, correct: false, misconceptionId: "C01-M5", value: "darwin_s" },
        { key: "D", text: t`T. O. Diener`, correct: false, misconceptionId: "C01-M6", value: "diener_s" },
      ],
      solution: {
        steps: [
          t`*Species Plantarum*, 1753.`,
          t`Carl Linnaeus.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q8" },
      stem: t`In a scientific name, the two epithets are, in order,`,
      verify: { kind: "value", inputs: {  }, params: { q: "parts" } },
      options: [
        { key: "A", text: t`kingdom, then genus`, correct: false, misconceptionId: "C01-M8", value: "kingdom_genus" },
        { key: "B", text: t`family, then species`, correct: false, misconceptionId: "C01-M9", value: "family_species" },
        { key: "C", text: t`generic, then specific`, correct: true, value: "genus_species" },
        { key: "D", text: t`specific, then generic`, correct: false, misconceptionId: "C01-M7", value: "species_genus" },
      ],
      solution: {
        steps: [
          t`Two epithets.`,
          t`Generic, then specific.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q2(C)" },
      stem: t`Binomial nomenclature is important because`,
      verify: { kind: "value", inputs: {  }, params: { q: "why" } },
      options: [
        { key: "A", text: t`each organism gets one name understood everywhere`, correct: true, value: "one_name_worldwide" },
        { key: "B", text: t`the names are shorter`, correct: false, misconceptionId: "C01-M10", value: "shorter_names" },
        { key: "C", text: t`the names follow the local language`, correct: false, misconceptionId: "C01-M11", value: "local_language" },
        { key: "D", text: t`it is used for plants only`, correct: false, misconceptionId: "C01-M12", value: "only_for_plants" },
      ],
      solution: {
        steps: [
          t`No confusion across languages.`,
          t`One name worldwide.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q2(C)" },
      stem: t`In *Mangifera indica* L., the 'L.' stands for`,
      verify: { kind: "value", inputs: {  }, params: { q: "author" } },
      options: [
        { key: "A", text: t`the author, Linnaeus, who named it`, correct: true, value: "author_l" },
        { key: "B", text: t`the place it was found`, correct: false, misconceptionId: "C01-M13", value: "location_l" },
        { key: "C", text: t`'large'`, correct: false, misconceptionId: "C01-M14", value: "large_l" },
        { key: "D", text: t`'leaf'`, correct: false, misconceptionId: "C01-M15", value: "leaf_l" },
      ],
      solution: {
        steps: [
          t`Author's abbreviation.`,
          t`Linnaeus.`,
        ],
      },
    },
  ],
};
