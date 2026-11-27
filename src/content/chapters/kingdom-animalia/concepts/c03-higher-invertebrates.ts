import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A crab and a snail both wear armour. Are their shells the same?`,
    reveal: t`No: a crab's is a chitinous exoskeleton it moults; a snail's is a calcareous shell secreted by its mantle.`,
  },
  explanation: {
    intuition: [
      t`Higher invertebrates are triploblastic and coelomate.`,
      t`Each phylum has a hallmark structure.`,
      t`Circulation becomes closed in annelids.`,
    ],
    formal: [
      {
        title: "Annelida and Arthropoda",
        points: [
          t`**Annelida** (*Nereis*): segmented; **parapodia**; the **first closed circulation**.`,
          t`**Arthropoda** (millipede, crab): jointed legs, **chitinous exoskeleton**, moulting.`,
          t`Arthropoda is the largest phylum.`,
        ],
      },
      {
        title: "Mollusca and Echinodermata",
        points: [
          t`**Mollusca** (snail, *Nautilus*, *Dentalium*): soft body, **radula**, **calcareous shell** from the mantle; second largest.`,
          t`**Echinodermata** (sea star, sea urchin, *Antedon*): marine; **tube feet**; calcareous ossicles.`,
          t`Echinoderms are radial as adults.`,
        ],
      },
    ],
    worked: {
      prompt: t`An animal has jointed legs and sheds its outer covering to grow. Which phylum?`,
      steps: [
        t`Jointed legs and moulting.`,
        t`That is Arthropoda.`,
      ],
      answer: t`Arthropoda`,
    },
    visualSpec: t`Four animals, each with its hallmark: parapodia, jointed legs, radula, tube feet.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks *Dentalium*.",
      remediation: "*Dentalium* has a calcareous shell.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks *Antedon*.",
      remediation: "*Antedon* has ossicles.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks sea urchin.",
      remediation: "Sea urchins have ossicles.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks Arthropoda.",
      remediation: "Arthropods have open circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks Mollusca.",
      remediation: "Most molluscs have open circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks Cnidaria.",
      remediation: "Cnidarians use a gastrovascular cavity.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks Annelida.",
      remediation: "Annelids have parapodia.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks Arthropoda.",
      remediation: "Arthropods have mandibles.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks Echinodermata.",
      remediation: "Echinoderms have tube feet.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks Mollusca.",
      remediation: "Molluscs have a radula.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks Porifera.",
      remediation: "Sponges have ostia.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks Annelida.",
      remediation: "Annelids have parapodia.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says both chitin.",
      remediation: "Snail shells are calcareous.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says both calcareous.",
      remediation: "Crab covering is chitin.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says bone.",
      remediation: "Invertebrates have no bone.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q1(E)" },
      stem: t`A chitinous exoskeleton is a characteristic of`,
      verify: { kind: "value", inputs: {  }, params: { q: "chitin" } },
      options: [
        { key: "A", text: t`*Antedon*`, correct: false, misconceptionId: "C03-M2", value: "antedon_a" },
        { key: "B", text: t`the sea urchin`, correct: false, misconceptionId: "C03-M3", value: "sea_urchin_a" },
        { key: "C", text: t`the millipede`, correct: true, value: "millipede_a" },
        { key: "D", text: t`*Dentalium*`, correct: false, misconceptionId: "C03-M1", value: "dentalium_a" },
      ],
      solution: {
        steps: [
          t`Moulted exoskeleton.`,
          t`The millipede.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(B)" },
      stem: t`The first phylum with a closed circulatory system is`,
      verify: { kind: "value", inputs: {  }, params: { q: "closed" } },
      options: [
        { key: "A", text: t`Mollusca`, correct: false, misconceptionId: "C03-M5", value: "mollusca_p" },
        { key: "B", text: t`Cnidaria`, correct: false, misconceptionId: "C03-M6", value: "cnidaria_p" },
        { key: "C", text: t`Annelida`, correct: true, value: "annelida_p" },
        { key: "D", text: t`Arthropoda`, correct: false, misconceptionId: "C03-M4", value: "arthropoda_p" },
      ],
      solution: {
        steps: [
          t`First closed system.`,
          t`Annelida.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q4" },
      stem: t`A radula, a rasping tongue, is a feature of`,
      verify: { kind: "value", inputs: {  }, params: { q: "radula" } },
      options: [
        { key: "A", text: t`Annelida`, correct: false, misconceptionId: "C03-M7", value: "annelida_p" },
        { key: "B", text: t`Arthropoda`, correct: false, misconceptionId: "C03-M8", value: "arthropoda_p" },
        { key: "C", text: t`Echinodermata`, correct: false, misconceptionId: "C03-M9", value: "echinodermata_p" },
        { key: "D", text: t`Mollusca`, correct: true, value: "mollusca_p" },
      ],
      solution: {
        steps: [
          t`Rasping tongue.`,
          t`Mollusca.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q4" },
      stem: t`Tube feet are a feature of`,
      verify: { kind: "value", inputs: {  }, params: { q: "tube_feet" } },
      options: [
        { key: "A", text: t`Porifera`, correct: false, misconceptionId: "C03-M11", value: "porifera_p" },
        { key: "B", text: t`Annelida`, correct: false, misconceptionId: "C03-M12", value: "annelida_p" },
        { key: "C", text: t`Echinodermata`, correct: true, value: "echinodermata_p" },
        { key: "D", text: t`Mollusca`, correct: false, misconceptionId: "C03-M10", value: "mollusca_p" },
      ],
      solution: {
        steps: [
          t`Water-vascular feet.`,
          t`Echinodermata.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(G)" },
      stem: t`A crab and a snail both have a protective covering. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "crab_snail" } },
      options: [
        { key: "A", text: t`chitin in the crab, a calcareous shell in the snail`, correct: true, value: "chitin_vs_lime" },
        { key: "B", text: t`chitin in both`, correct: false, misconceptionId: "C03-M13", value: "both_chitin" },
        { key: "C", text: t`a calcareous shell in both`, correct: false, misconceptionId: "C03-M14", value: "both_lime" },
        { key: "D", text: t`bone in both`, correct: false, misconceptionId: "C03-M15", value: "both_bone" },
      ],
      solution: {
        steps: [
          t`Different materials.`,
          t`Chitin in the crab, calcareous shell in the snail.`,
        ],
      },
    },
  ],
};
