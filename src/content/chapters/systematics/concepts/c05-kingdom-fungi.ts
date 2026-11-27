import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Leave bread in a damp box for a week, and a fuzzy grey growth covers it. Is the mould a plant?`,
    reveal: t`No: it has no chlorophyll. It is a fungus, digesting the bread from outside and absorbing the food.`,
  },
  explanation: {
    intuition: [
      t`**Fungi** are eukaryotic **heterotrophs**.`,
      t`They digest food **outside** their bodies and absorb it.`,
      t`Their cell wall is **chitin**.`,
    ],
    formal: [
      {
        title: "Classes",
        points: [
          t`**Phycomycetes** (algal fungi): *Rhizopus*, *Mucor*.`,
          t`**Ascomycetes** (sac fungi): *Aspergillus*, yeast, *Neurospora*.`,
          t`**Basidiomycetes** (club fungi): mushrooms such as *Agaricus*.`,
        ],
      },
      {
        title: "Uses",
        points: [
          t`Food: mushrooms; yeast in bakeries and breweries.`,
          t`*Penicillium*: antibiotics.`,
          t`Symbioses: **lichens** (fungus + alga), **mycorrhiza** (fungus + roots). Most are decomposers.`,
        ],
      },
    ],
    worked: {
      prompt: t`A fungus grows only with tree roots, helping them absorb minerals. What is the association?`,
      steps: [
        t`Fungus and root together.`,
        t`That is mycorrhiza.`,
      ],
      answer: t`Mycorrhiza`,
    },
    visualSpec: t`Three fungi: Rhizopus on bread, Aspergillus with spore chains, a mushroom with gills.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Says cellulose.",
      remediation: "That is plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Says peptidoglycan.",
      remediation: "That is bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says silica.",
      remediation: "That is diatoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks *Agaricus*.",
      remediation: "*Agaricus* is a mushroom.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks *Rhizopus*.",
      remediation: "*Rhizopus* is bread mould.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks *Neurospora*.",
      remediation: "*Neurospora* is for genetics.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks Ascomycetes.",
      remediation: "Those are sac fungi.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks Phycomycetes.",
      remediation: "Those are algal fungi.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks Deuteromycetes.",
      remediation: "Mushrooms form basidia.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says roots.",
      remediation: "That is mycorrhiza.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says bacteria.",
      remediation: "That is root nodules.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says two algae.",
      remediation: "A lichen has a fungus.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says photosynthetic.",
      remediation: "Fungi have no chlorophyll.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says chemosynthetic.",
      remediation: "Fungi absorb food.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says holozoic.",
      remediation: "Fungi absorb, not swallow.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q3(B)" },
      stem: t`The cell wall of fungi is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "wall" } },
      options: [
        { key: "A", text: t`silica`, correct: false, misconceptionId: "C05-M3", value: "silica_wall" },
        { key: "B", text: t`chitin`, correct: true, value: "chitin_wall" },
        { key: "C", text: t`cellulose`, correct: false, misconceptionId: "C05-M1", value: "cellulose_wall" },
        { key: "D", text: t`peptidoglycan`, correct: false, misconceptionId: "C05-M2", value: "peptidoglycan_wall" },
      ],
      solution: {
        steps: [
          t`Not cellulose.`,
          t`Chitin.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q3(C)" },
      stem: t`The fungus well known for antibiotic production is`,
      verify: { kind: "value", inputs: {  }, params: { q: "antibiotic" } },
      options: [
        { key: "A", text: t`*Agaricus*`, correct: false, misconceptionId: "C05-M4", value: "agaricus_f" },
        { key: "B", text: t`*Rhizopus*`, correct: false, misconceptionId: "C05-M5", value: "rhizopus_f" },
        { key: "C", text: t`*Neurospora*`, correct: false, misconceptionId: "C05-M6", value: "neurospora_f" },
        { key: "D", text: t`*Penicillium*`, correct: true, value: "penicillium_f" },
      ],
      solution: {
        steps: [
          t`Penicillin's source.`,
          t`*Penicillium*.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q7(F)" },
      stem: t`A mushroom such as *Agaricus* is a club fungus of the class`,
      verify: { kind: "value", inputs: {  }, params: { q: "mushroom" } },
      options: [
        { key: "A", text: t`Basidiomycetes`, correct: true, value: "basidiomycetes_f" },
        { key: "B", text: t`Ascomycetes`, correct: false, misconceptionId: "C05-M7", value: "ascomycetes_f" },
        { key: "C", text: t`Phycomycetes`, correct: false, misconceptionId: "C05-M8", value: "phycomycetes_f" },
        { key: "D", text: t`Deuteromycetes`, correct: false, misconceptionId: "C05-M9", value: "deuteromycetes_f" },
      ],
      solution: {
        steps: [
          t`Club fungi.`,
          t`Basidiomycetes.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q3(C)" },
      stem: t`A lichen is a symbiotic association of`,
      verify: { kind: "value", inputs: {  }, params: { q: "lichen" } },
      options: [
        { key: "A", text: t`bacteria and plant roots`, correct: false, misconceptionId: "C05-M11", value: "bacteria_root" },
        { key: "B", text: t`two algae`, correct: false, misconceptionId: "C05-M12", value: "alga_alga" },
        { key: "C", text: t`a fungus and an alga`, correct: true, value: "fungus_alga" },
        { key: "D", text: t`a fungus and plant roots`, correct: false, misconceptionId: "C05-M10", value: "fungus_root" },
      ],
      solution: {
        steps: [
          t`Fungus and alga.`,
          t`A lichen.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q3(B)" },
      stem: t`Fungi get their food by being`,
      verify: { kind: "value", inputs: {  }, params: { q: "nutrition" } },
      options: [
        { key: "A", text: t`heterotrophs that digest food outside their bodies`, correct: true, value: "heterotrophic_f" },
        { key: "B", text: t`photosynthetic`, correct: false, misconceptionId: "C05-M13", value: "photosynthetic_f" },
        { key: "C", text: t`chemosynthetic`, correct: false, misconceptionId: "C05-M14", value: "chemosynthetic_f" },
        { key: "D", text: t`holozoic, swallowing food`, correct: false, misconceptionId: "C05-M15", value: "holozoic_f" },
      ],
      solution: {
        steps: [
          t`Absorb pre-digested food.`,
          t`Heterotrophs.`,
        ],
      },
    },
  ],
};
