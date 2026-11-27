import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Drop a raisin into water and it plumps up. Sprinkle salt on cut cucumber and it goes limp. What moves the water?`,
    reveal: t`Osmosis: water crosses the cell membrane towards the side with more dissolved solutes.`,
  },
  explanation: {
    intuition: [
      t`**Diffusion** spreads molecules from high to low concentration.`,
      t`**Osmosis** is diffusion of water through a semipermeable membrane.`,
      t`**Imbibition** is the soaking up of water by dry colloids such as wood and seeds.`,
    ],
    formal: [
      {
        title: "Kinds of solution",
        points: [
          t`**Hypotonic**: fewer solutes than the cell sap; water enters the cell.`,
          t`**Hypertonic**: more solutes; water leaves the cell.`,
          t`**Isotonic**: equal; no net movement. Osmosis is a property of the **solution**.`,
        ],
      },
      {
        title: "Plasmolysis",
        points: [
          t`In a hypertonic solution the protoplast shrinks away from the wall: **plasmolysis**.`,
          t`Back in a hypotonic solution it swells again: **deplasmolysis**.`,
          t`Imbibition makes wooden doors swell and stick in the rainy season.`,
        ],
      },
    ],
    worked: {
      prompt: t`A cell is placed in strong salt solution. What happens?`,
      steps: [
        t`Salt solution is hypertonic to the cell sap.`,
        t`Water leaves and the protoplast shrinks from the wall.`,
      ],
      answer: t`Plasmolysis`,
    },
    visualSpec: t`A cell in three beakers: swollen in hypotonic, unchanged in isotonic, shrunk from its wall in hypertonic.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks isotonic.",
      remediation: "Isotonic has equal solutes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks hypertonic.",
      remediation: "Hypertonic has more solutes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks anisotonic.",
      remediation: "That only means 'unequal'.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks plasmolysis.",
      remediation: "Plasmolysis happens in living cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks osmosis.",
      remediation: "Dead wood has no membrane for osmosis.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks diffusion.",
      remediation: "Swelling of colloids is imbibition.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks the solute.",
      remediation: "The whole solution has the property.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks the solvent.",
      remediation: "The whole solution has the property.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks the membrane.",
      remediation: "The membrane only allows it.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks deplasmolysis.",
      remediation: "Deplasmolysis is the recovery.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks imbibition.",
      remediation: "Imbibition swells colloids.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks guttation.",
      remediation: "Guttation is loss of water drops.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks hypertonic.",
      remediation: "A hypertonic solution causes plasmolysis.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks isotonic.",
      remediation: "No net water would enter.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks strong sugar.",
      remediation: "Strong sugar is hypertonic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(6)" },
      stem: t`A solution with fewer solutes than the cell sap it is compared with is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hypotonic" } },
      options: [
        { key: "A", text: t`hypotonic`, correct: true, value: "hypotonic" },
        { key: "B", text: t`isotonic`, correct: false, misconceptionId: "C02-M1", value: "isotonic" },
        { key: "C", text: t`hypertonic`, correct: false, misconceptionId: "C02-M2", value: "hypertonic" },
        { key: "D", text: t`anisotonic`, correct: false, misconceptionId: "C02-M3", value: "anisotonic" },
      ],
      solution: {
        steps: [
          t`Fewer solutes than the cell sap.`,
          t`Hypotonic.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(7)" },
      stem: t`In the rainy season wooden doors swell and stick because of`,
      verify: { kind: "value", inputs: {  }, params: { q: "doors" } },
      options: [
        { key: "A", text: t`plasmolysis`, correct: false, misconceptionId: "C02-M4", value: "plasmolysis" },
        { key: "B", text: t`osmosis`, correct: false, misconceptionId: "C02-M5", value: "osmosis" },
        { key: "C", text: t`diffusion`, correct: false, misconceptionId: "C02-M6", value: "diffusion" },
        { key: "D", text: t`imbibition`, correct: true, value: "imbibition" },
      ],
      solution: {
        steps: [
          t`Dry wood absorbs water.`,
          t`Imbibition.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(10)" },
      stem: t`Osmosis is a property of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "property" } },
      options: [
        { key: "A", text: t`membrane`, correct: false, misconceptionId: "C02-M9", value: "membrane" },
        { key: "B", text: t`solution`, correct: true, value: "solution" },
        { key: "C", text: t`solute`, correct: false, misconceptionId: "C02-M7", value: "solute" },
        { key: "D", text: t`solvent`, correct: false, misconceptionId: "C02-M8", value: "solvent" },
      ],
      solution: {
        steps: [
          t`It depends on the whole solution.`,
          t`The solution.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(2)" },
      stem: t`The protoplast of a plant cell shrinks from its wall in a hypertonic solution. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "shrinks" } },
      options: [
        { key: "A", text: t`guttation`, correct: false, misconceptionId: "C02-M12", value: "guttation" },
        { key: "B", text: t`plasmolysis`, correct: true, value: "plasmolysis" },
        { key: "C", text: t`deplasmolysis`, correct: false, misconceptionId: "C02-M10", value: "deplasmolysis" },
        { key: "D", text: t`imbibition`, correct: false, misconceptionId: "C02-M11", value: "imbibition" },
      ],
      solution: {
        steps: [
          t`Protoplast shrinks from the wall.`,
          t`Plasmolysis.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(4)" },
      stem: t`A plasmolysed cell recovers (deplasmolysis) when placed in a`,
      verify: { kind: "value", inputs: {  }, params: { q: "deplasmolysis" } },
      options: [
        { key: "A", text: t`strong sugar solution`, correct: false, misconceptionId: "C02-M15", value: "strong_sugar" },
        { key: "B", text: t`hypotonic solution`, correct: true, value: "hypotonic" },
        { key: "C", text: t`hypertonic solution`, correct: false, misconceptionId: "C02-M13", value: "hypertonic" },
        { key: "D", text: t`isotonic solution`, correct: false, misconceptionId: "C02-M14", value: "isotonic" },
      ],
      solution: {
        steps: [
          t`Water must enter the cell.`,
          t`A hypotonic solution.`,
        ],
      },
    },
  ],
};
