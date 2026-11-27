import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Is *Euglena* a plant or an animal? It has chloroplasts but swims with a whip-like flagellum.`,
    reveal: t`Neither fits. That is why biologists split life into more than two kingdoms.`,
  },
  explanation: {
    intuition: [
      t`Linnaeus used two kingdoms: **Plantae** and **Animalia**.`,
      t`Bacteria, fungi and *Euglena* did not fit either.`,
      t`**R. H. Whittaker (1969)** proposed **five kingdoms**.`,
    ],
    formal: [
      {
        title: "The five kingdoms",
        points: [
          t`**Monera**: unicellular prokaryotes, e.g. bacteria, cyanobacteria.`,
          t`**Protista**: unicellular eukaryotes, e.g. diatoms, *Euglena*, *Paramoecium*.`,
          t`**Fungi**: heterotrophs with chitin walls, e.g. *Rhizopus*, yeast.`,
        ],
      },
      {
        title: "Plants and animals",
        points: [
          t`**Plantae**: multicellular, chlorophyll, cellulose walls, e.g. *Riccia*.`,
          t`**Animalia**: multicellular heterotrophs with no cell wall.`,
          t`Viruses and viroids are acellular and **not included**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Where does yeast go: Plantae or Fungi?`,
      steps: [
        t`Yeast has no chlorophyll.`,
        t`It is a heterotroph with a chitin wall.`,
      ],
      answer: t`Fungi`,
    },
    visualSpec: t`Whittaker's tree: Monera at the base, Protista above, branching to Fungi, Plantae and Animalia.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks Linnaeus.",
      remediation: "Linnaeus had two kingdoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks Darwin.",
      remediation: "Darwin explained evolution.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks Haeckel.",
      remediation: "Haeckel proposed Protista earlier.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks Fungi.",
      remediation: "*Riccia* has chlorophyll.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks Protista.",
      remediation: "*Riccia* is multicellular.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks Monera.",
      remediation: "*Riccia* is eukaryotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks Monera.",
      remediation: "Diatoms are eukaryotes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks Plantae.",
      remediation: "Diatoms are unicellular.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks Fungi.",
      remediation: "Diatoms photosynthesise.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks Plantae.",
      remediation: "*Rhizopus* has no chlorophyll.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks Monera.",
      remediation: "*Rhizopus* is eukaryotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks Protista.",
      remediation: "*Rhizopus* forms a mycelium of hyphae, not single cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks Monera.",
      remediation: "Viruses are not cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks Protista.",
      remediation: "Viruses are not cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks Fungi.",
      remediation: "Viruses are not cells.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q3(B)" },
      stem: t`The five kingdom classification was proposed in 1969 by`,
      verify: { kind: "value", inputs: {  }, params: { q: "whittaker" } },
      options: [
        { key: "A", text: t`R. H. Whittaker`, correct: true, value: "whittaker_s" },
        { key: "B", text: t`Carl Linnaeus`, correct: false, misconceptionId: "C02-M1", value: "linnaeus_s" },
        { key: "C", text: t`Charles Darwin`, correct: false, misconceptionId: "C02-M2", value: "darwin_s" },
        { key: "D", text: t`E. Haeckel`, correct: false, misconceptionId: "C02-M3", value: "haeckel_s" },
      ],
      solution: {
        steps: [
          t`1969.`,
          t`R. H. Whittaker.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q9" },
      stem: t`*Riccia* belongs to Kingdom`,
      verify: { kind: "value", inputs: {  }, params: { q: "riccia" } },
      options: [
        { key: "A", text: t`Fungi`, correct: false, misconceptionId: "C02-M4", value: "fungi_k" },
        { key: "B", text: t`Protista`, correct: false, misconceptionId: "C02-M5", value: "protista_k" },
        { key: "C", text: t`Monera`, correct: false, misconceptionId: "C02-M6", value: "monera_k" },
        { key: "D", text: t`Plantae`, correct: true, value: "plantae_k" },
      ],
      solution: {
        steps: [
          t`A liverwort.`,
          t`Plantae.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q9" },
      stem: t`Diatoms belong to Kingdom`,
      verify: { kind: "value", inputs: {  }, params: { q: "diatoms" } },
      options: [
        { key: "A", text: t`Fungi`, correct: false, misconceptionId: "C02-M9", value: "fungi_k" },
        { key: "B", text: t`Protista`, correct: true, value: "protista_k" },
        { key: "C", text: t`Monera`, correct: false, misconceptionId: "C02-M7", value: "monera_k" },
        { key: "D", text: t`Plantae`, correct: false, misconceptionId: "C02-M8", value: "plantae_k" },
      ],
      solution: {
        steps: [
          t`Unicellular eukaryotes.`,
          t`Protista.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q9" },
      stem: t`*Rhizopus*, the bread mould, belongs to Kingdom`,
      verify: { kind: "value", inputs: {  }, params: { q: "rhizopus" } },
      options: [
        { key: "A", text: t`Protista`, correct: false, misconceptionId: "C02-M12", value: "protista_k" },
        { key: "B", text: t`Fungi`, correct: true, value: "fungi_k" },
        { key: "C", text: t`Plantae`, correct: false, misconceptionId: "C02-M10", value: "plantae_k" },
        { key: "D", text: t`Monera`, correct: false, misconceptionId: "C02-M11", value: "monera_k" },
      ],
      solution: {
        steps: [
          t`Bread mould.`,
          t`Fungi.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q3(B)" },
      stem: t`In Whittaker's five kingdom system, viruses and viroids are`,
      verify: { kind: "value", inputs: {  }, params: { q: "viruses" } },
      options: [
        { key: "A", text: t`placed in Fungi`, correct: false, misconceptionId: "C02-M15", value: "fungi_k" },
        { key: "B", text: t`not included in any kingdom`, correct: true, value: "not_included" },
        { key: "C", text: t`placed in Monera`, correct: false, misconceptionId: "C02-M13", value: "monera_k" },
        { key: "D", text: t`placed in Protista`, correct: false, misconceptionId: "C02-M14", value: "protista_k" },
      ],
      solution: {
        steps: [
          t`Acellular.`,
          t`Not included.`,
        ],
      },
    },
  ],
};
