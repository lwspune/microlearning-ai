import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Forensic labs separate inks on paper, drug labs on thin glass plates, and factories in tall glass columns. Are these different ideas?`,
    reveal: t`One idea, three set-ups. All share a stationary and a mobile phase; they differ in what the stationary phase is.`,
  },
  explanation: {
    intuition: [
      t`In **column** chromatography the mixture runs down a tube packed with an adsorbent.`,
      t`In **thin layer** chromatography (TLC) a thin adsorbent layer coats a glass plate.`,
      t`In **paper** chromatography, water held in the paper is the stationary phase.`,
      t`Colourless spots are made visible afterwards.`,
    ],
    formal: [
      {
        title: "Stationary phases",
        points: [
          t`Column and TLC: silica gel or alumina (adsorption chromatography).`,
          t`Paper: water trapped in the paper's fibres (partition chromatography).`,
          t`The mobile phase is a solvent in every case.`,
        ],
      },
      {
        title: "Running and viewing",
        points: [
          t`Spot the mixture above the solvent level, or it dissolves into the solvent pool.`,
          t`In a column, components move down at different rates and form bands.`,
          t`Colourless spots: UV light, an iodine chamber, or a spraying reagent.`,
        ],
      },
    ],
    worked: {
      prompt: t`A TLC plate shows no coloured spots. How can you find them?`,
      steps: [
        t`Shine UV light on the plate.`,
        t`Or place it in an iodine chamber.`,
      ],
      answer: t`UV light or iodine vapour`,
    },
    visualSpec: t`Compare a column, a TLC plate and a paper strip running the same mixture.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Swaps the phases.",
      remediation: "The solvent moves: it is the mobile phase.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Calls the spot the stationary phase.",
      remediation: "The spot is the mixture being separated.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says air is the stationary phase.",
      remediation: "Water held in the paper is the stationary phase.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks UV light cannot show spots.",
      remediation: "Many compounds glow or darken under UV light.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks iodine cannot show spots.",
      remediation: "Iodine vapour stains many organic spots brown.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks spraying reagents cannot show spots.",
      remediation: "Spraying reagents react to colour the spots.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Thinks a lower spot is reached faster.",
      remediation: "Below the solvent level, the spot dissolves into the pool.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks it dries faster.",
      remediation: "The reason is to keep the spot out of the solvent pool.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Thinks it helps UV viewing.",
      remediation: "Height above the solvent keeps the spot from dissolving away.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Names mobile phases.",
      remediation: "Solvents are mobile phases; silica gel and alumina stay put.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Names a salt.",
      remediation: "Adsorbents such as silica gel and alumina are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Names only filter paper.",
      remediation: "Column and TLC use silica gel or alumina.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks bands are packing layers.",
      remediation: "The column is packed evenly; bands are separated components.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Thinks the solvent changes colour.",
      remediation: "The bands are the mixture's components.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Thinks the components react.",
      remediation: "Components separate unchanged.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (E)" },
      stem: t`In paper chromatography, the stationary phase is`,
      verify: { kind: "value", inputs: {  }, params: { q: "paper_phase" } },
      options: [
        { key: "A", text: t`the air in the tank`, correct: false, misconceptionId: "C05-M3", value: "air" },
        { key: "B", text: t`the spot of mixture`, correct: false, misconceptionId: "C05-M2", value: "spot" },
        { key: "C", text: t`the solvent rising up the paper`, correct: false, misconceptionId: "C05-M1", value: "solvent" },
        { key: "D", text: t`water held in the fibres of the paper`, correct: true, value: "water_in_fibres" },
      ],
      solution: {
        steps: [
          t`Paper holds water in its fibres.`,
          t`That water is the stationary phase.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.1 (E)" },
      stem: t`Colourless spots on a chromatogram can NOT be seen by`,
      verify: { kind: "value", inputs: {  }, params: { q: "cannot_see" } },
      options: [
        { key: "A", text: t`infrared light`, correct: true, value: "infrared" },
        { key: "B", text: t`an iodine chamber`, correct: false, misconceptionId: "C05-M5", value: "iodine" },
        { key: "C", text: t`a spraying reagent`, correct: false, misconceptionId: "C05-M6", value: "spray" },
        { key: "D", text: t`UV light`, correct: false, misconceptionId: "C05-M4", value: "uv" },
      ],
      solution: {
        steps: [
          t`UV, iodine and sprays all reveal spots.`,
          t`Infrared light does not.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (I)" },
      stem: t`Why is the mixture spotted above the level of the solvent in the tank?`,
      verify: { kind: "value", inputs: {  }, params: { q: "spot_above" } },
      options: [
        { key: "A", text: t`so the solvent reaches it faster`, correct: false, misconceptionId: "C05-M7", value: "reached_faster" },
        { key: "B", text: t`so the spot is not washed away into the solvent pool`, correct: true, value: "not_dissolved_away" },
        { key: "C", text: t`so it dries faster`, correct: false, misconceptionId: "C05-M8", value: "dries_faster" },
        { key: "D", text: t`so it is easier to see under UV light`, correct: false, misconceptionId: "C05-M9", value: "uv_view" },
      ],
      solution: {
        steps: [
          t`Below the solvent level the spot would dissolve away.`,
          t`So spot above it.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (G)" },
      stem: t`Which pair of materials is used as the stationary phase in column and thin layer chromatography?`,
      verify: { kind: "value", inputs: {  }, params: { q: "materials" } },
      options: [
        { key: "A", text: t`sodium chloride and sugar`, correct: false, misconceptionId: "C05-M11", value: "sodium_chloride" },
        { key: "B", text: t`filter paper only`, correct: false, misconceptionId: "C05-M12", value: "filter_paper" },
        { key: "C", text: t`silica gel and alumina`, correct: true, value: "silica_alumina" },
        { key: "D", text: t`water and ethanol`, correct: false, misconceptionId: "C05-M10", value: "water_ethanol" },
      ],
      solution: {
        steps: [
          t`Both are adsorbents.`,
          t`Silica gel and alumina.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (O)" },
      stem: t`Why do separate bands form in column chromatography?`,
      verify: { kind: "value", inputs: {  }, params: { q: "bands" } },
      options: [
        { key: "A", text: t`the components react to form new coloured compounds`, correct: false, misconceptionId: "C05-M15", value: "react" },
        { key: "B", text: t`the column is packed in layers of different materials`, correct: false, misconceptionId: "C05-M13", value: "packing_layers" },
        { key: "C", text: t`the solvent changes colour as it flows`, correct: false, misconceptionId: "C05-M14", value: "solvent_colour" },
        { key: "D", text: t`the components move down the column at different rates`, correct: true, value: "different_rates" },
      ],
      solution: {
        steps: [
          t`Each component moves at its own rate.`,
          t`So they separate into bands.`,
        ],
      },
    },
  ],
};
