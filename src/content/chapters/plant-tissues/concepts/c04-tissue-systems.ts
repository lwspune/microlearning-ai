import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A leaf breathes out water vapour through tiny pores. Who opens and shuts them?`,
    reveal: t`Two guard cells around each pore: their turgor changes open and close the stoma.`,
  },
  explanation: {
    intuition: [
      t`A **stoma** is a small pore in the epidermis.`,
      t`Vascular bundles pair xylem with phloem in set patterns.`,
      t`The pattern tells root, stem and leaf, and monocot from dicot.`,
    ],
    formal: [
      {
        title: "Stomata",
        points: [
          t`Two **guard cells**: kidney shaped in dicots, dumbbell shaped in monocots.`,
          t`Guard cells have an inner thick wall and a few chloroplasts.`,
          t`With **subsidiary cells**, they form the **stomatal apparatus**.`,
        ],
      },
      {
        title: "Vascular bundles",
        points: [
          t`**Radial**: xylem and phloem on different radii, as in roots.`,
          t`**Conjoint collateral**: on one radius; **open** with cambium, **closed** without.`,
          t`**Concentric**: one encircles the other; always closed. Xylem inside is **hadrocentric**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A bundle has phloem in the centre, surrounded by xylem. Name it.`,
      steps: [
        t`One tissue encircles the other: concentric.`,
        t`Phloem in the centre: leptocentric.`,
      ],
      answer: t`Leptocentric (concentric)`,
    },
    visualSpec: t`A stoma between two kidney-shaped guard cells, beside three bundle types: radial, collateral, concentric.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says kidney.",
      remediation: "Kidney shape is dicot.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says barrel.",
      remediation: "Barrel cells are epidermal.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says round.",
      remediation: "Guard cells are specialised.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says stoma.",
      remediation: "The stoma is the pore.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says guard cells.",
      remediation: "Subsidiary cells are included.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says epidermis.",
      remediation: "Epidermis is the whole layer.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says leptocentric.",
      remediation: "That has phloem inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says amphivasal.",
      remediation: "That has phloem inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says collateral.",
      remediation: "Collateral lies on one radius.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says open.",
      remediation: "Concentric bundles have no cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says radial.",
      remediation: "Radial lies on different radii.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says collateral.",
      remediation: "Collateral lies side by side.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says open.",
      remediation: "Monocot bundles lack cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says radial.",
      remediation: "Radial is in roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says concentric.",
      remediation: "Monocot stem bundles are collateral.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(A)" },
      stem: t`In a monocot leaf, the guard cells of a stoma are`,
      verify: { kind: "value", inputs: {  }, params: { q: "dumbbell" } },
      options: [
        { key: "A", text: t`barrel shaped`, correct: false, misconceptionId: "C04-M2", value: "barrel_g" },
        { key: "B", text: t`round, like parenchyma`, correct: false, misconceptionId: "C04-M3", value: "rounded_g" },
        { key: "C", text: t`dumbbell shaped`, correct: true, value: "dumbbell_g" },
        { key: "D", text: t`kidney shaped`, correct: false, misconceptionId: "C04-M1", value: "kidney_g" },
      ],
      solution: {
        steps: [
          t`Monocot type.`,
          t`Dumbbell shaped.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(A)" },
      stem: t`The stoma, its guard cells and the subsidiary cells together form the`,
      verify: { kind: "value", inputs: {  }, params: { q: "apparatus" } },
      options: [
        { key: "A", text: t`stoma`, correct: false, misconceptionId: "C04-M4", value: "stoma_only" },
        { key: "B", text: t`guard cells`, correct: false, misconceptionId: "C04-M5", value: "guard_cells_only" },
        { key: "C", text: t`epidermis`, correct: false, misconceptionId: "C04-M6", value: "epidermis_t" },
        { key: "D", text: t`stomatal apparatus`, correct: true, value: "stomatal_apparatus" },
      ],
      solution: {
        steps: [
          t`Pore plus cells.`,
          t`Stomatal apparatus.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q2(C)" },
      stem: t`A concentric vascular bundle has the xylem completely encircled by phloem. It is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "hadro" } },
      options: [
        { key: "A", text: t`amphivasal`, correct: false, misconceptionId: "C04-M8", value: "amphivasal_b" },
        { key: "B", text: t`collateral`, correct: false, misconceptionId: "C04-M9", value: "collateral_b" },
        { key: "C", text: t`hadrocentric`, correct: true, value: "hadrocentric_b" },
        { key: "D", text: t`leptocentric`, correct: false, misconceptionId: "C04-M7", value: "leptocentric_b" },
      ],
      solution: {
        steps: [
          t`Xylem in the centre.`,
          t`Hadrocentric.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q2(C)" },
      stem: t`Concentric vascular bundles are`,
      verify: { kind: "value", inputs: {  }, params: { q: "concentric" } },
      options: [
        { key: "A", text: t`always open`, correct: false, misconceptionId: "C04-M10", value: "always_open" },
        { key: "B", text: t`a kind of radial bundle`, correct: false, misconceptionId: "C04-M11", value: "radial_b" },
        { key: "C", text: t`a kind of collateral bundle`, correct: false, misconceptionId: "C04-M12", value: "collateral_b" },
        { key: "D", text: t`always closed`, correct: true, value: "always_closed" },
      ],
      solution: {
        steps: [
          t`No cambium.`,
          t`Always closed.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q4(A)" },
      stem: t`Each vascular bundle of a monocot stem is`,
      verify: { kind: "value", inputs: {  }, params: { q: "monocot_vb" } },
      options: [
        { key: "A", text: t`concentric`, correct: false, misconceptionId: "C04-M15", value: "concentric_b" },
        { key: "B", text: t`conjoint, collateral and closed`, correct: true, value: "collateral_closed" },
        { key: "C", text: t`conjoint, collateral and open`, correct: false, misconceptionId: "C04-M13", value: "collateral_open" },
        { key: "D", text: t`radial`, correct: false, misconceptionId: "C04-M14", value: "radial_b" },
      ],
      solution: {
        steps: [
          t`Same radius, no cambium.`,
          t`Conjoint, collateral, closed.`,
        ],
      },
    },
  ],
};
