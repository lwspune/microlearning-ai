import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Crude sugar from a mill is brown and dirty. Dissolve it in hot water, filter, and let it cool slowly: white crystals appear. Where did the dirt go?`,
    reveal: t`Insoluble dirt stayed on the filter paper; soluble impurities stayed dissolved in the cold liquid. Only the sugar crystallised.`,
  },
  explanation: {
    intuition: [
      t`Filtration separates an insoluble solid from a liquid.`,
      t`The solid left on the paper is the **residue**; the liquid that passes is the **filtrate**.`,
      t`Crystallisation purifies a solid that dissolves more when hot than when cold.`,
      t`On cooling the pure solid crystallises out; impurities stay in solution.`,
    ],
    formal: [
      {
        title: "Filtration",
        points: [
          t`Simple filtration: a folded filter paper cone in a funnel, moistened to stick without air gaps.`,
          t`Suction filtration with a Büchner funnel is faster.`,
        ],
      },
      {
        title: "Crystallisation",
        points: [
          t`Choose a solvent that dissolves the solid well hot but poorly cold, and does not react with it.`,
          t`Dissolve hot, filter while hot, cool slowly, filter off the crystals.`,
          t`**Fractional crystallisation** separates two solids of different solubility.`,
        ],
      },
    ],
    worked: {
      prompt: t`Sand is mixed with salt. How do you separate them?`,
      steps: [
        t`Add water: salt dissolves, sand does not.`,
        t`Filter: sand is the residue; evaporate the filtrate for salt.`,
      ],
      answer: t`Dissolve, filter, evaporate`,
    },
    visualSpec: t`Follow a dirty solid as it is dissolved, filtered hot and cooled into clean crystals.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks plain crystallisation separates two solids.",
      remediation: "Separating two solids of different solubility needs fractional crystallisation.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Uses distillation for solids.",
      remediation: "Distillation separates liquids; solids are purified by crystallisation.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks solvent extraction.",
      remediation: "Extraction moves a solute between liquids; separating two solids by solubility is fractional crystallisation.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Swaps filtrate and residue.",
      remediation: "The residue stays on the paper; the filtrate passes through.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls the filter paper the filtrate.",
      remediation: "The filtrate is the liquid that passes through.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks filtration gives off vapour.",
      remediation: "Filtration involves no heating; the filtrate is a liquid.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks the water dissolves the solid.",
      remediation: "A little water just seals the paper to the funnel.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks wetting strengthens the paper.",
      remediation: "Wet paper is weaker; it is wetted to stick to the funnel.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks wetting washes the paper.",
      remediation: "Wetting seals the paper to the funnel, removing air gaps.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Wants a solvent that dissolves the solid at every temperature.",
      remediation: "Then nothing would crystallise on cooling.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Wants a solvent that never dissolves the solid.",
      remediation: "The solid must dissolve when hot to leave its impurities.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Wants a solvent that reacts with the solid.",
      remediation: "The solvent must not change the compound.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks evaporating to dryness purifies.",
      remediation: "Evaporating to dryness leaves the impurities in the solid too.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks filtering removes dissolved impurities.",
      remediation: "Dissolved impurities pass through the paper.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.1 (A)" },
      stem: t`Which method separates two solids that have different solubilities in the same solvent?`,
      verify: { kind: "value", inputs: {  }, params: { q: "two_solids" } },
      options: [
        { key: "A", text: t`solvent extraction`, correct: false, misconceptionId: "C01-M3", value: "extraction" },
        { key: "B", text: t`simple crystallisation`, correct: false, misconceptionId: "C01-M1", value: "crystallisation" },
        { key: "C", text: t`distillation`, correct: false, misconceptionId: "C01-M2", value: "distillation" },
        { key: "D", text: t`fractional crystallisation`, correct: true, value: "fractional_crystallisation" },
      ],
      solution: {
        steps: [
          t`The two solids crystallise at different stages.`,
          t`That is fractional crystallisation.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (B)" },
      stem: t`In filtration, the filtrate is`,
      verify: { kind: "value", inputs: {  }, params: { q: "filtrate" } },
      options: [
        { key: "A", text: t`the liquid that passes through the filter paper`, correct: true, value: "liquid_through" },
        { key: "B", text: t`the solid left on the filter paper`, correct: false, misconceptionId: "C01-M4", value: "solid_left" },
        { key: "C", text: t`the filter paper itself`, correct: false, misconceptionId: "C01-M5", value: "paper" },
        { key: "D", text: t`the vapour given off`, correct: false, misconceptionId: "C01-M6", value: "vapour" },
      ],
      solution: {
        steps: [
          t`The liquid passes through the paper.`,
          t`That liquid is the filtrate.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Why is filter paper moistened after it is fitted in the funnel?`,
      verify: { kind: "value", inputs: {  }, params: { q: "moisten" } },
      options: [
        { key: "A", text: t`to make the paper stronger`, correct: false, misconceptionId: "C01-M8", value: "stronger" },
        { key: "B", text: t`so it sticks to the funnel with no air gaps, and filtration runs smoothly`, correct: true, value: "no_air_gap" },
        { key: "C", text: t`to wash impurities out of the paper`, correct: false, misconceptionId: "C01-M9", value: "wash_paper" },
        { key: "D", text: t`so the water dissolves the solid`, correct: false, misconceptionId: "C01-M7", value: "dissolve_solid" },
      ],
      solution: {
        steps: [
          t`Wet paper clings to the funnel.`,
          t`No air gaps, so liquid flows through the paper.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (M)" },
      stem: t`A good solvent for crystallising a solid`,
      verify: { kind: "value", inputs: {  }, params: { q: "solvent" } },
      options: [
        { key: "A", text: t`does not dissolve it at any temperature`, correct: false, misconceptionId: "C01-M11", value: "never_dissolves" },
        { key: "B", text: t`dissolves it well at every temperature`, correct: false, misconceptionId: "C01-M10", value: "always_dissolves" },
        { key: "C", text: t`dissolves it well when hot but poorly when cold`, correct: true, value: "hot_not_cold" },
        { key: "D", text: t`reacts with it`, correct: false, misconceptionId: "C01-M12", value: "reacts" },
      ],
      solution: {
        steps: [
          t`The solid must dissolve when hot.`,
          t`And come out again when cold.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (A)" },
      stem: t`Which technique is used to purify a solid organic compound?`,
      verify: { kind: "value", inputs: {  }, params: { q: "purify_solid" } },
      options: [
        { key: "A", text: t`filtering its solution`, correct: false, misconceptionId: "C01-M14", value: "filter_only" },
        { key: "B", text: t`distillation`, correct: false, misconceptionId: "C01-M2", value: "distillation" },
        { key: "C", text: t`evaporating its solution to dryness`, correct: false, misconceptionId: "C01-M13", value: "evaporate_dry" },
        { key: "D", text: t`crystallisation`, correct: true, value: "crystallisation" },
      ],
      solution: {
        steps: [
          t`Solid organic compounds are purified from a solvent.`,
          t`That is crystallisation.`,
        ],
      },
    },
  ],
};
