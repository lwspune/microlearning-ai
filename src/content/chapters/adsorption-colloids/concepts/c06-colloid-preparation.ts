import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Gold is insoluble in water, yet a ruby-red gold sol can be made by striking a spark between gold wires under water. How?`,
    reveal: t`The arc vaporises some gold, and the cold water condenses the vapour into particles of colloidal size: Bredig's arc method.`,
  },
  explanation: {
    intuition: [
      t`Colloids are made by breaking large particles down or building small ones up.`,
      t`Bredig's arc method makes metal sols.`,
      t`Peptisation turns a fresh precipitate into a sol.`,
      t`Dialysis removes dissolved impurities from a sol.`,
    ],
    formal: [
      {
        title: "Preparation",
        points: [
          t`**Bredig's arc**: an arc between metal electrodes under ice-cold water with a trace of KOH.`,
          t`The metal vaporises and condenses into colloidal particles; KOH stabilises the sol.`,
          t`**Peptisation**: a little electrolyte disperses a fresh precipitate into a sol.`,
        ],
      },
      {
        title: "Purification",
        points: [
          t`**Dialysis**: the sol is kept in a parchment or cellophane bag in running water.`,
          t`Small ions and molecules pass through; colloidal particles do not.`,
        ],
      },
    ],
    worked: {
      prompt: t`Fresh $\ce{Fe(OH)3}$ precipitate is shaken with a little $\ce{FeCl3}$ solution and becomes a red sol. What is this called?`,
      steps: [
        t`A precipitate is dispersed by an electrolyte.`,
        t`That is peptisation.`,
      ],
      answer: t`Peptisation`,
    },
    visualSpec: t`Strike an arc between metal rods under water and watch a coloured sol form.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says true solutions.",
      remediation: "Bredig's arc gives colloidal metal particles.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says emulsions.",
      remediation: "Emulsions are liquids in liquids; Bredig's arc gives metal sols.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says gels.",
      remediation: "Bredig's arc gives metal sols.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says coagulation.",
      remediation: "Coagulation is the reverse: a sol turning into a precipitate.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says dialysis.",
      remediation: "Dialysis purifies a sol; it does not make one.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says electrophoresis.",
      remediation: "Electrophoresis is movement of particles in an electric field.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Swaps what passes.",
      remediation: "Colloidal particles are too big to pass the membrane.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks both pass.",
      remediation: "The membrane holds back colloidal particles.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks impurities boil off.",
      remediation: "Dialysis works by diffusion through a membrane.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks filter paper.",
      remediation: "Colloidal particles pass through filter paper.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks an electric arc.",
      remediation: "The arc is for Bredig's method.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks a magnet.",
      remediation: "Dialysis uses a semi-permeable membrane.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Thinks the water dissolves the metal.",
      remediation: "The metal vapour condenses; it does not dissolve.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Thinks the cold water starts the arc.",
      remediation: "Electricity starts the arc; the cold water condenses the vapour.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Thinks it makes a true solution.",
      remediation: "The product is a metal sol.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (N)" },
      stem: t`Bredig's arc method is used to prepare`,
      verify: { kind: "value", inputs: {  }, params: { q: "bredig" } },
      options: [
        { key: "A", text: t`true solutions of metal salts`, correct: false, misconceptionId: "C06-M1", value: "true_solutions" },
        { key: "B", text: t`sols of metals such as gold`, correct: true, value: "metal_sols" },
        { key: "C", text: t`gels by cooling`, correct: false, misconceptionId: "C06-M3", value: "gels" },
        { key: "D", text: t`emulsions of oil in water`, correct: false, misconceptionId: "C06-M2", value: "emulsions" },
      ],
      solution: {
        steps: [
          t`An arc vaporises metal under water.`,
          t`The vapour condenses to a metal sol.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "authored" },
      stem: t`Turning a fresh precipitate into a sol by adding a little electrolyte is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "peptisation" } },
      options: [
        { key: "A", text: t`dialysis`, correct: false, misconceptionId: "C06-M5", value: "dialysis" },
        { key: "B", text: t`coagulation`, correct: false, misconceptionId: "C06-M4", value: "coagulation" },
        { key: "C", text: t`peptisation`, correct: true, value: "peptisation" },
        { key: "D", text: t`electrophoresis`, correct: false, misconceptionId: "C06-M6", value: "electrophoresis" },
      ],
      solution: {
        steps: [
          t`An electrolyte disperses a precipitate.`,
          t`Peptisation.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.10 (b)" },
      stem: t`Dialysis purifies a sol because`,
      verify: { kind: "value", inputs: {  }, params: { q: "dialysis" } },
      options: [
        { key: "A", text: t`it boils off the impurities`, correct: false, misconceptionId: "C06-M9", value: "boils_off" },
        { key: "B", text: t`colloidal particles pass but ions do not`, correct: false, misconceptionId: "C06-M7", value: "colloid_passes" },
        { key: "C", text: t`both pass through`, correct: false, misconceptionId: "C06-M8", value: "both_pass" },
        { key: "D", text: t`small ions pass through the membrane but colloidal particles do not`, correct: true, value: "ions_pass" },
      ],
      solution: {
        steps: [
          t`The membrane's pores pass small ions only.`,
          t`Colloidal particles stay behind.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.10 (b)" },
      stem: t`Dialysis is carried out with`,
      verify: { kind: "value", inputs: {  }, params: { q: "membrane" } },
      options: [
        { key: "A", text: t`a parchment or cellophane membrane`, correct: true, value: "parchment" },
        { key: "B", text: t`a magnet`, correct: false, misconceptionId: "C06-M12", value: "magnet" },
        { key: "C", text: t`ordinary filter paper`, correct: false, misconceptionId: "C06-M10", value: "filter_paper" },
        { key: "D", text: t`an electric arc`, correct: false, misconceptionId: "C06-M11", value: "electric_arc" },
      ],
      solution: {
        steps: [
          t`Dialysis needs a semi-permeable membrane.`,
          t`Parchment or cellophane.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.10 (c)" },
      stem: t`In Bredig's method, the arc is struck under ice-cold water containing a trace of KOH because`,
      verify: { kind: "value", inputs: {  }, params: { q: "cold_water" } },
      options: [
        { key: "A", text: t`the water dissolves the metal`, correct: false, misconceptionId: "C06-M13", value: "dissolves_metal" },
        { key: "B", text: t`the metal vapour condenses into colloidal particles, and KOH stabilises the sol`, correct: true, value: "condenses_stabilises" },
        { key: "C", text: t`the cold water starts the arc`, correct: false, misconceptionId: "C06-M14", value: "starts_arc" },
        { key: "D", text: t`it makes a true solution of the metal`, correct: false, misconceptionId: "C06-M15", value: "true_solution" },
      ],
      solution: {
        steps: [
          t`Cold water condenses the metal vapour.`,
          t`KOH stabilises the particles.`,
        ],
      },
    },
  ],
};
