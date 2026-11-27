import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`An *Amoeba* has no lungs or gills, yet it breathes. How does oxygen get in?`,
    reveal: t`Straight through its cell membrane. It is so small that diffusion across its surface is enough.`,
  },
  explanation: {
    intuition: [
      t`Gas exchange happens by diffusion across a **respiratory surface**.`,
      t`Small animals use their body surface; larger ones need special organs.`,
      t`The organ suits the habitat: water or air.`,
    ],
    formal: [
      {
        title: "A good surface",
        points: [
          t`**Moist**: gases dissolve before they diffuse.`,
          t`**Thin** and **large** in area.`,
          t`**Highly vascular** and permeable.`,
        ],
      },
      {
        title: "Who uses what",
        points: [
          t`Plasma membrane: *Amoeba* and other protists. Tracheal tubes and spiracles: insects.`,
          t`Book lungs: scorpions. Book gills: *Limulus*.`,
          t`External gills: tadpoles, salamanders. Internal gills: fishes. Lungs: reptiles, birds, mammals.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is insect respiration called direct?`,
      steps: [
        t`Tracheal tubes carry air right to the tissues.`,
        t`Blood takes no part in carrying the gases.`,
      ],
      answer: t`Tracheae deliver air to the cells`,
    },
    visualSpec: t`A row of animals, each with its respiratory organ highlighted.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks tracheal tubes.",
      remediation: "Tracheae are in insects.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks external gills.",
      remediation: "Gills are multicellular organs.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks lungs.",
      remediation: "*Amoeba* is a single cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks book gills.",
      remediation: "Book gills are in *Limulus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks tracheae.",
      remediation: "Tracheae are in insects.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks gills.",
      remediation: "Scorpions live on land.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks book lungs.",
      remediation: "Book lungs are in scorpions.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks internal gills.",
      remediation: "Internal gills are in fishes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks lungs.",
      remediation: "*Limulus* lives in water.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks internal gills.",
      remediation: "Internal gills are in fishes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks lungs.",
      remediation: "Lungs develop after metamorphosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks skin alone.",
      remediation: "Tadpoles have external gills.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says dry.",
      remediation: "Gases must dissolve first.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says thick.",
      remediation: "Thin walls speed diffusion.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says small.",
      remediation: "A large area speeds exchange.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q2" },
      stem: t`*Amoeba* exchanges gases through its`,
      verify: { kind: "value", inputs: {  }, params: { q: "amoeba" } },
      options: [
        { key: "A", text: t`plasma membrane`, correct: true, value: "plasma_membrane" },
        { key: "B", text: t`tracheal tubes`, correct: false, misconceptionId: "C01-M1", value: "trachea_tubes" },
        { key: "C", text: t`external gills`, correct: false, misconceptionId: "C01-M2", value: "external_gills" },
        { key: "D", text: t`lungs`, correct: false, misconceptionId: "C01-M3", value: "lungs_r" },
      ],
      solution: {
        steps: [
          t`A single cell.`,
          t`Plasma membrane.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2024 Q. 9" },
      stem: t`Scorpions respire through`,
      verify: { kind: "value", inputs: {  }, params: { q: "scorpion" } },
      options: [
        { key: "A", text: t`book lungs`, correct: true, value: "book_lungs" },
        { key: "B", text: t`book gills`, correct: false, misconceptionId: "C01-M4", value: "book_gills" },
        { key: "C", text: t`tracheae`, correct: false, misconceptionId: "C01-M5", value: "tracheae_r" },
        { key: "D", text: t`gills`, correct: false, misconceptionId: "C01-M6", value: "gills_r" },
      ],
      solution: {
        steps: [
          t`A terrestrial arachnid.`,
          t`Book lungs.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2026 Q. 15" },
      stem: t`*Limulus*, the king crab, respires through`,
      verify: { kind: "value", inputs: {  }, params: { q: "limulus" } },
      options: [
        { key: "A", text: t`internal gills`, correct: false, misconceptionId: "C01-M8", value: "internal_gills" },
        { key: "B", text: t`lungs`, correct: false, misconceptionId: "C01-M9", value: "lungs_r" },
        { key: "C", text: t`book gills`, correct: true, value: "book_gills" },
        { key: "D", text: t`book lungs`, correct: false, misconceptionId: "C01-M7", value: "book_lungs" },
      ],
      solution: {
        steps: [
          t`An aquatic arthropod.`,
          t`Book gills.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2026 Q. 15" },
      stem: t`Tadpoles of the frog respire through`,
      verify: { kind: "value", inputs: {  }, params: { q: "tadpole" } },
      options: [
        { key: "A", text: t`external gills`, correct: true, value: "external_gills" },
        { key: "B", text: t`internal gills`, correct: false, misconceptionId: "C01-M10", value: "internal_gills" },
        { key: "C", text: t`lungs`, correct: false, misconceptionId: "C01-M11", value: "lungs_r" },
        { key: "D", text: t`the skin alone`, correct: false, misconceptionId: "C01-M12", value: "skin_only" },
      ],
      solution: {
        steps: [
          t`Gills outside the body.`,
          t`External gills.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q4(2)" },
      stem: t`For efficient gas exchange, a respiratory surface must be`,
      verify: { kind: "value", inputs: {  }, params: { q: "surface" } },
      options: [
        { key: "A", text: t`moist, thin and large`, correct: true, value: "moist_surface" },
        { key: "B", text: t`kept dry`, correct: false, misconceptionId: "C01-M13", value: "dry_surface" },
        { key: "C", text: t`thick, to be strong`, correct: false, misconceptionId: "C01-M14", value: "thick_surface" },
        { key: "D", text: t`small in area`, correct: false, misconceptionId: "C01-M15", value: "small_area" },
      ],
      solution: {
        steps: [
          t`Gases dissolve, then diffuse.`,
          t`Moist, thin and large.`,
        ],
      },
    },
  ],
};
