import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Iodine colours water a faint brown. Shake it with a little carbon tetrachloride and the water clears while a purple layer appears. What happened?`,
    reveal: t`Iodine dissolves far better in carbon tetrachloride than in water, so it moved into that layer.`,
  },
  explanation: {
    intuition: [
      t`Two liquids that do not mix form separate layers.`,
      t`A solute divides between them, favouring the one it dissolves in better.`,
      t`Shaking lets it move across; the layers are then run off separately.`,
      t`Several small extractions pull out more solute than one big one.`,
    ],
    formal: [
      {
        title: "Method",
        points: [
          t`Put the solution and the extracting solvent in a separating funnel.`,
          t`Shake, releasing pressure; let the layers settle.`,
          t`The denser liquid forms the lower layer; run it off through the tap.`,
        ],
      },
      {
        title: "Choosing the solvent",
        points: [
          t`Immiscible with the first liquid.`,
          t`Dissolves the solute much better.`,
          t`Does not react with the solute and is easy to remove later.`,
        ],
      },
    ],
    worked: {
      prompt: t`Ether is less dense than water. Where is the ether layer after shaking?`,
      steps: [
        t`The less dense liquid floats.`,
        t`Ether is on top.`,
      ],
      answer: t`The upper layer`,
    },
    visualSpec: t`Shake a separating funnel and watch the coloured solute move from one layer to the other.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Wants a solvent that mixes with water.",
      remediation: "A miscible solvent forms no separate layer to remove.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Wants a solvent that dissolves the solute less.",
      remediation: "The solute must prefer the new solvent, or it will not move.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Wants a solvent that reacts with the solute.",
      remediation: "A reaction would change the substance being extracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Confuses extraction with evaporation.",
      remediation: "Extraction moves the solute into another liquid; nothing is boiled off.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Confuses extraction with filtration.",
      remediation: "Filtration separates solids; extraction moves a dissolved solute.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Confuses extraction with chromatography.",
      remediation: "Chromatography uses moving and stationary phases; extraction uses two liquids.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks a fractionating column.",
      remediation: "That is for fractional distillation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks a Büchner funnel.",
      remediation: "That is for suction filtration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks a chromatography column.",
      remediation: "Extraction uses a separating funnel with a tap.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks one large extraction is better.",
      remediation: "Several small ones together remove more solute.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks both ways remove the same.",
      remediation: "Repeated small extractions remove more.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks only shaking time matters.",
      remediation: "Dividing the solvent into portions removes more.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Puts the less dense liquid at the bottom.",
      remediation: "The less dense liquid floats on top.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Thinks the liquids mix into one layer.",
      remediation: "Immiscible liquids separate into two layers.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Expects a precipitate.",
      remediation: "Extraction gives two liquid layers, not a solid.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (H)" },
      stem: t`A solvent chosen to extract a solute from water should be`,
      verify: { kind: "value", inputs: {  }, params: { q: "properties" } },
      options: [
        { key: "A", text: t`a poorer solvent for the solute than water`, correct: false, misconceptionId: "C03-M2", value: "dissolves_less" },
        { key: "B", text: t`able to react with the solute`, correct: false, misconceptionId: "C03-M3", value: "reacts" },
        { key: "C", text: t`miscible with water`, correct: false, misconceptionId: "C03-M1", value: "miscible" },
        { key: "D", text: t`immiscible with water and dissolve the solute much better than water does`, correct: true, value: "immiscible_better" },
      ],
      solution: {
        steps: [
          t`It must form a separate layer.`,
          t`And dissolve the solute better than water.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (L)" },
      stem: t`Solvent extraction means`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`moving a solute from one liquid into an immiscible liquid that dissolves it better`, correct: true, value: "transfer_solute" },
        { key: "B", text: t`separating components by their rates of movement on paper`, correct: false, misconceptionId: "C03-M6", value: "rates_on_paper" },
        { key: "C", text: t`passing a solution through filter paper`, correct: false, misconceptionId: "C03-M5", value: "filter" },
        { key: "D", text: t`boiling off the solvent to leave the solute`, correct: false, misconceptionId: "C03-M4", value: "boil_off" },
      ],
      solution: {
        steps: [
          t`Two immiscible liquids.`,
          t`The solute moves to the one it dissolves in better.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Solvent extraction is carried out in`,
      verify: { kind: "value", inputs: {  }, params: { q: "apparatus" } },
      options: [
        { key: "A", text: t`a fractionating column`, correct: false, misconceptionId: "C03-M7", value: "fractionating_column" },
        { key: "B", text: t`a separating funnel`, correct: true, value: "separating_funnel" },
        { key: "C", text: t`a chromatography column`, correct: false, misconceptionId: "C03-M9", value: "column" },
        { key: "D", text: t`a Büchner funnel`, correct: false, misconceptionId: "C03-M8", value: "buchner_funnel" },
      ],
      solution: {
        steps: [
          t`Layers must be run off separately.`,
          t`A separating funnel has a tap for that.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`With the same total volume of solvent, which removes more solute?`,
      verify: { kind: "value", inputs: {  }, params: { q: "portions" } },
      options: [
        { key: "A", text: t`both remove the same amount`, correct: false, misconceptionId: "C03-M11", value: "same" },
        { key: "B", text: t`it depends only on how long you shake`, correct: false, misconceptionId: "C03-M12", value: "shaking_time" },
        { key: "C", text: t`several extractions with small portions`, correct: true, value: "several_small" },
        { key: "D", text: t`one extraction with all the solvent`, correct: false, misconceptionId: "C03-M10", value: "one_large" },
      ],
      solution: {
        steps: [
          t`Each fresh portion removes a share of what remains.`,
          t`Several small portions remove more in total.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`After shaking, an organic solvent less dense than water settles as`,
      verify: { kind: "value", inputs: {  }, params: { q: "layers" } },
      options: [
        { key: "A", text: t`a solid precipitate`, correct: false, misconceptionId: "C03-M15", value: "precipitate" },
        { key: "B", text: t`the lower layer`, correct: false, misconceptionId: "C03-M13", value: "lower" },
        { key: "C", text: t`one mixed layer with the water`, correct: false, misconceptionId: "C03-M14", value: "mixed" },
        { key: "D", text: t`the upper layer`, correct: true, value: "upper" },
      ],
      solution: {
        steps: [
          t`The less dense liquid floats.`,
          t`The organic solvent is the upper layer.`,
        ],
      },
    },
  ],
};
