import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`A sachet of silica gel in a shoebox keeps the shoes dry, though the gel itself never looks wet. Where does the moisture go?`,
    reveal: t`It sticks to the vast internal surface of the gel: adsorption. The water stays on surfaces rather than soaking through.`,
  },
  explanation: {
    intuition: [
      t`**Adsorption** is the gathering of molecules on a surface.`,
      t`The substance gathered is the **adsorbate**; the surface it gathers on, the **adsorbent**.`,
      t`In **absorption** a substance spreads through the whole bulk.`,
      t`Surface particles have unbalanced forces, so they attract other molecules.`,
    ],
    formal: [
      {
        title: "Features",
        points: [
          t`Adsorption is a surface phenomenon.`,
          t`It is exothermic: $\Delta H$ is negative.`,
          t`Examples: chalk dust on a blackboard; moisture on silica gel; dyes on charcoal.`,
        ],
      },
      {
        title: "Adsorption and absorption",
        points: [
          t`Adsorption: concentration higher at the surface than in the bulk.`,
          t`Absorption: the substance spreads uniformly through the bulk (water in a sponge).`,
        ],
      },
    ],
    worked: {
      prompt: t`Charcoal removes the colour of a dye solution. Name the adsorbent and adsorbate.`,
      steps: [
        t`The dye molecules stick to the charcoal.`,
        t`Charcoal is the adsorbent; the dye is the adsorbate.`,
      ],
      answer: t`Adsorbent: charcoal; adsorbate: dye`,
    },
    visualSpec: t`Zoom into a solid and watch gas molecules settle only on its surface.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Swaps adsorption and absorption.",
      remediation: "Adsorption stays on the surface; absorption spreads through the bulk.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks adsorption is always chemical.",
      remediation: "Physisorption involves only weak van der Waals forces.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks adsorption needs heating.",
      remediation: "Adsorption releases heat and is favoured by cooling.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Says the chalk is absorbed.",
      remediation: "The chalk stays on the surface: it is adsorbed.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says the chalk reacts with the board.",
      remediation: "It can be wiped off: it is held physically.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Says the board dissolves the chalk.",
      remediation: "The board is a solid surface; chalk sticks to it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Swaps adsorbent and adsorbate.",
      remediation: "The surface (silica gel) is the adsorbent; water is the adsorbate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Names the air.",
      remediation: "Air carries the water vapour; silica gel holds it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Names the container.",
      remediation: "Silica gel is the adsorbing surface.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Calls adsorption endothermic.",
      remediation: "Molecules lose freedom and release energy: exothermic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Gives zero enthalpy.",
      remediation: "Attraction to the surface releases heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Limits the heat to chemisorption.",
      remediation: "Both kinds are exothermic; chemisorption releases more.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks the surface is hotter.",
      remediation: "Surface particles have unbalanced forces, not more heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks the bulk has no particles.",
      remediation: "Bulk particles are surrounded on all sides; their forces balance.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Thinks surface particles are always ions.",
      remediation: "Any surface has unbalanced forces, ionic or not.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.5 (A)" },
      stem: t`Adsorption differs from absorption because in adsorption the substance`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`must be heated`, correct: false, misconceptionId: "C01-M3", value: "needs_heat" },
        { key: "B", text: t`spreads evenly through the bulk`, correct: false, misconceptionId: "C01-M1", value: "through_bulk" },
        { key: "C", text: t`always reacts chemically`, correct: false, misconceptionId: "C01-M2", value: "always_chemical" },
        { key: "D", text: t`gathers on the surface only`, correct: true, value: "surface_only" },
      ],
      solution: {
        steps: [
          t`Adsorption is a surface effect.`,
          t`The substance gathers on the surface only.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (B)" },
      stem: t`Writing in chalk stays on a blackboard because`,
      verify: { kind: "value", inputs: {  }, params: { q: "chalk" } },
      options: [
        { key: "A", text: t`chalk particles are adsorbed on the board's surface`, correct: true, value: "adsorbed_surface" },
        { key: "B", text: t`chalk is absorbed into the board`, correct: false, misconceptionId: "C01-M4", value: "absorbed" },
        { key: "C", text: t`chalk reacts chemically with the board`, correct: false, misconceptionId: "C01-M5", value: "reacts" },
        { key: "D", text: t`the board dissolves the chalk`, correct: false, misconceptionId: "C01-M6", value: "board_dissolves" },
      ],
      solution: {
        steps: [
          t`Chalk particles stick to the board's surface.`,
          t`That is adsorption.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (C)" },
      stem: t`Silica gel takes up water vapour from the air. The adsorbent is`,
      verify: { kind: "value", inputs: {  }, params: { q: "adsorbent" } },
      options: [
        { key: "A", text: t`the air`, correct: false, misconceptionId: "C01-M8", value: "air" },
        { key: "B", text: t`silica gel`, correct: true, value: "silica_gel" },
        { key: "C", text: t`the container`, correct: false, misconceptionId: "C01-M9", value: "container" },
        { key: "D", text: t`water vapour`, correct: false, misconceptionId: "C01-M7", value: "water_vapour" },
      ],
      solution: {
        steps: [
          t`Water gathers on silica gel's surface.`,
          t`Silica gel is the adsorbent.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (C)" },
      stem: t`Adsorption is`,
      verify: { kind: "value", inputs: {  }, params: { q: "enthalpy" } },
      options: [
        { key: "A", text: t`neither: its $\Delta H$ is zero`, correct: false, misconceptionId: "C01-M11", value: "zero_enthalpy" },
        { key: "B", text: t`endothermic`, correct: false, misconceptionId: "C01-M10", value: "endothermic" },
        { key: "C", text: t`exothermic`, correct: true, value: "exothermic" },
        { key: "D", text: t`exothermic only when it is chemisorption`, correct: false, misconceptionId: "C01-M12", value: "only_chemisorption" },
      ],
      solution: {
        steps: [
          t`Surface forces are satisfied as molecules attach.`,
          t`Energy is released: exothermic.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.6" },
      stem: t`Adsorption is a surface phenomenon because`,
      verify: { kind: "value", inputs: {  }, params: { q: "surface" } },
      options: [
        { key: "A", text: t`surface particles are always ions`, correct: false, misconceptionId: "C01-M15", value: "surface_ions" },
        { key: "B", text: t`the surface is hotter than the bulk`, correct: false, misconceptionId: "C01-M13", value: "hotter_surface" },
        { key: "C", text: t`the bulk contains no particles`, correct: false, misconceptionId: "C01-M14", value: "empty_bulk" },
        { key: "D", text: t`surface particles have unbalanced attractive forces`, correct: true, value: "unbalanced_forces" },
      ],
      solution: {
        steps: [
          t`Surface particles are not surrounded on all sides.`,
          t`Their unbalanced forces attract molecules.`,
        ],
      },
    },
  ],
};
