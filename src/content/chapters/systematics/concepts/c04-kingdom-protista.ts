import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Sometimes the sea along a coast turns red and fish die. What is in the water?`,
    reveal: t`Billions of tiny dinoflagellates such as *Gonyaulax*, multiplying fast: the red tide.`,
  },
  explanation: {
    intuition: [
      t`**Protista** are unicellular **eukaryotes**.`,
      t`They link the other eukaryotic kingdoms.`,
      t`Some are plant-like, some animal-like.`,
    ],
    formal: [
      {
        title: "Plant-like",
        points: [
          t`**Chrysophytes** (diatoms): walls of two soap-box-like **silica** covers.`,
          t`**Dinoflagellates**: *Gonyaulax* causes the **red tide**.`,
          t`**Euglenoids**: *Euglena* has a flagellum and chloroplasts.`,
        ],
      },
      {
        title: "Animal-like (protozoans)",
        points: [
          t`**Amoeboid**: pseudopodia, e.g. *Entamoeba* (amoebic dysentery).`,
          t`**Ciliate**: cilia, e.g. *Paramoecium*.`,
          t`**Sporozoan**: no locomotory organ, forms spores, e.g. *Plasmodium* (malaria). Flagellates use flagella.`,
        ],
      },
    ],
    worked: {
      prompt: t`A protist moves by many hair-like cilia and has a macronucleus. What group is it?`,
      steps: [
        t`Cilia mark the ciliates.`,
        t`*Paramoecium* is the example.`,
      ],
      answer: t`Ciliate`,
    },
    visualSpec: t`Four cells: a diatom, Euglena, Paramoecium and Amoeba, each with its means of movement.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks euglenoid.",
      remediation: "Euglenoids are freshwater.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks chrysophyte.",
      remediation: "Diatoms do not colour the sea red.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks lichen.",
      remediation: "Lichens are on land.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks amoeboid.",
      remediation: "Amoeboids use pseudopodia.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks ciliophora.",
      remediation: "*Plasmodium* has no cilia.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks flagellate.",
      remediation: "*Plasmodium* has no flagellum.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says chitin.",
      remediation: "That is fungi.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says cellulose.",
      remediation: "Diatom walls are silica.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says no wall.",
      remediation: "Diatoms have silica walls.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks ciliate.",
      remediation: "*Entamoeba* uses pseudopodia.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks sporozoan.",
      remediation: "That is *Plasmodium*.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks flagellate.",
      remediation: "*Entamoeba* has no flagellum.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says cilia.",
      remediation: "*Euglena* has a flagellum.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says pseudopodia.",
      remediation: "*Euglena* has a flagellum.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says no movement.",
      remediation: "*Euglena* swims.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q1(B)" },
      stem: t`The red tide is caused by a`,
      verify: { kind: "value", inputs: {  }, params: { q: "red_tide" } },
      options: [
        { key: "A", text: t`chrysophyte`, correct: false, misconceptionId: "C04-M2", value: "chrysophyte_p" },
        { key: "B", text: t`lichen`, correct: false, misconceptionId: "C04-M3", value: "lichen_p" },
        { key: "C", text: t`dinoflagellate`, correct: true, value: "dinoflagellate_p" },
        { key: "D", text: t`euglenoid`, correct: false, misconceptionId: "C04-M1", value: "euglenoid_p" },
      ],
      solution: {
        steps: [
          t`*Gonyaulax*.`,
          t`Dinoflagellate.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q1(D)" },
      stem: t`*Paramoecium* is a ciliated protist. *Plasmodium* is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "plasmodium" } },
      options: [
        { key: "A", text: t`amoeboid protozoan`, correct: false, misconceptionId: "C04-M4", value: "amoeboid_p" },
        { key: "B", text: t`ciliophoran`, correct: false, misconceptionId: "C04-M5", value: "ciliophora_p" },
        { key: "C", text: t`flagellate protozoan`, correct: false, misconceptionId: "C04-M6", value: "flagellate_p" },
        { key: "D", text: t`sporozoan`, correct: true, value: "sporozoan_p" },
      ],
      solution: {
        steps: [
          t`Spore-forming parasite.`,
          t`Sporozoan.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q10(A)" },
      stem: t`The body wall of a diatom is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "diatoms" } },
      options: [
        { key: "A", text: t`cellulose alone`, correct: false, misconceptionId: "C04-M8", value: "cellulose_only" },
        { key: "B", text: t`nothing: diatoms have no wall`, correct: false, misconceptionId: "C04-M9", value: "no_wall" },
        { key: "C", text: t`two soap-box-like silica covers`, correct: true, value: "silica_covers" },
        { key: "D", text: t`chitin`, correct: false, misconceptionId: "C04-M7", value: "chitin_wall" },
      ],
      solution: {
        steps: [
          t`Soap-box covers.`,
          t`Silica.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q10(B)" },
      stem: t`*Entamoeba*, which causes amoebic dysentery, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "entamoeba" } },
      options: [
        { key: "A", text: t`a ciliate`, correct: false, misconceptionId: "C04-M10", value: "ciliate_p" },
        { key: "B", text: t`a sporozoan`, correct: false, misconceptionId: "C04-M11", value: "sporozoan_p" },
        { key: "C", text: t`a flagellate`, correct: false, misconceptionId: "C04-M12", value: "flagellate_p" },
        { key: "D", text: t`an amoeboid protozoan`, correct: true, value: "amoeboid_p" },
      ],
      solution: {
        steps: [
          t`Pseudopodia.`,
          t`Amoeboid protozoan.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/systematics-11-bio/Ex Q5(B)" },
      stem: t`*Euglena* is called a link between plants and animals because it has`,
      verify: { kind: "value", inputs: {  }, params: { q: "euglena" } },
      options: [
        { key: "A", text: t`no means of movement`, correct: false, misconceptionId: "C04-M15", value: "no_locomotion" },
        { key: "B", text: t`a flagellum and also chloroplasts`, correct: true, value: "flagellum_chloroplasts" },
        { key: "C", text: t`cilia only`, correct: false, misconceptionId: "C04-M13", value: "cilia_only" },
        { key: "D", text: t`pseudopodia only`, correct: false, misconceptionId: "C04-M14", value: "pseudopodia_only" },
      ],
      solution: {
        steps: [
          t`Animal and plant features.`,
          t`Flagellum and chloroplasts.`,
        ],
      },
    },
  ],
};
