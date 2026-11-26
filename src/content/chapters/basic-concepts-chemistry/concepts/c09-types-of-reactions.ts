import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Drop an iron nail into blue copper sulfate solution. In a few minutes the nail is coated brown and the blue begins to fade. What happened?`,
    reveal: t`Iron, being more reactive, pushed copper out of its compound: a displacement reaction.`,
  },
  explanation: {
    intuition: [
      t`Chemical reactions fall into a few common types.`,
      t`**Combination**: two or more substances join into one.`,
      t`**Decomposition**: one substance breaks into simpler ones.`,
      t`**Displacement**: a more reactive element pushes a less reactive one out of its compound.`,
      t`**Double displacement**: two compounds swap ions.`,
    ],
    formal: [
      {
        title: "Combination and decomposition",
        points: [
          t`Combination: $\ce{CaO + H2O -> Ca(OH)2}$.`,
          t`Decomposition by heat (**thermal**): $\ce{CaCO3 -> CaO + CO2}$.`,
          t`By light (**photochemical**): $\ce{2AgBr -> 2Ag + Br2}$.`,
          t`By electricity (**electrolytic**): $\ce{2H2O -> 2H2 + O2}$.`,
        ],
      },
      {
        title: "Displacement",
        points: [
          t`$\ce{Fe + CuSO4 -> FeSO4 + Cu}$: iron is more reactive than copper.`,
          t`$\ce{Cu + 2AgNO3}$ $\ce{-> Cu(NO3)2 + 2Ag}$: copper is above silver.`,
          t`A less reactive metal cannot displace a more reactive one.`,
        ],
      },
      {
        title: "Double displacement",
        points: [
          t`Two compounds exchange ions: $\ce{AB + CD -> AD + CB}$.`,
          t`Often an insoluble solid, a **precipitate**, forms.`,
          t`$\ce{BaCl2 + Na2SO4}$ $\ce{-> BaSO4 v + 2NaCl}$.`,
          t`Reactions that give out heat are **exothermic**; those that take it in, **endothermic**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the type: $\ce{Zn + 2HCl -> ZnCl2 + H2}$.`,
      steps: [
        t`Zinc, an element, takes the place of hydrogen in HCl.`,
        t`Zinc is more reactive than hydrogen.`,
        t`So it is a displacement reaction.`,
      ],
      answer: t`Displacement`,
    },
    visualSpec: t`Animated equations where atoms join, split, or swap partners for each type.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Calls it combination.",
      remediation: "One substance breaks into two: decomposition.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Calls it displacement.",
      remediation: "No element replaces another; one compound splits.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Calls it double displacement.",
      remediation: "Only one reactant: it decomposes.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Calls it double displacement.",
      remediation: "Iron is an element, not a compound: single displacement.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Calls it combination.",
      remediation: "Two products form; iron replaces copper.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Calls it decomposition.",
      remediation: "Two reactants, and iron takes copper's place.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Calls it displacement.",
      remediation: "Both reactants are compounds swapping ions: double displacement.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Calls it combination.",
      remediation: "Two products form: the compounds swap ions.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Calls it decomposition.",
      remediation: "Two reactants swap ions to give a precipitate.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Calls it thermal.",
      remediation: "Sunlight, not heat, splits silver bromide.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Calls it electrolytic.",
      remediation: "No current is passed; light splits it.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Calls it combination.",
      remediation: "One substance splits into two: decomposition.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Expects no reaction.",
      remediation: "Copper is more reactive than silver, so it displaces it.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Reverses it.",
      remediation: "The more reactive metal, copper, displaces silver, not the other way.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Calls it double displacement.",
      remediation: "Copper is an element: single displacement.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`On heating, $\ce{CaCO3 -> CaO + CO2}$. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "caco3" } },
      options: [
        { key: "A", text: t`a displacement reaction`, correct: false, misconceptionId: "C09-M2", value: "displacement" },
        { key: "B", text: t`a double displacement reaction`, correct: false, misconceptionId: "C09-M3", value: "double_displacement" },
        { key: "C", text: t`thermal decomposition`, correct: true, value: "thermal_decomposition" },
        { key: "D", text: t`a combination reaction`, correct: false, misconceptionId: "C09-M1", value: "combination" },
      ],
      solution: {
        steps: [
          t`One compound splits on heating.`,
          t`Thermal decomposition.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`An iron nail in copper sulfate solution: $\ce{Fe + CuSO4}$ $\ce{-> FeSO4 + Cu}$. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fe" } },
      options: [
        { key: "A", text: t`a displacement reaction`, correct: true, value: "displacement" },
        { key: "B", text: t`a double displacement reaction`, correct: false, misconceptionId: "C09-M4", value: "double_displacement" },
        { key: "C", text: t`a combination reaction`, correct: false, misconceptionId: "C09-M5", value: "combination" },
        { key: "D", text: t`a decomposition reaction`, correct: false, misconceptionId: "C09-M6", value: "decomposition" },
      ],
      solution: {
        steps: [
          t`Iron replaces copper in its compound.`,
          t`Displacement.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`$\ce{BaCl2 + Na2SO4}$ $\ce{-> BaSO4 v + 2NaCl}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ba" } },
      options: [
        { key: "A", text: t`a displacement reaction`, correct: false, misconceptionId: "C09-M7", value: "displacement" },
        { key: "B", text: t`a combination reaction`, correct: false, misconceptionId: "C09-M8", value: "combination" },
        { key: "C", text: t`a decomposition reaction`, correct: false, misconceptionId: "C09-M9", value: "decomposition" },
        { key: "D", text: t`a double displacement (precipitation) reaction`, correct: true, value: "double_displacement" },
      ],
      solution: {
        steps: [
          t`The compounds swap ions; $\ce{BaSO4}$ precipitates.`,
          t`Double displacement.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`Silver bromide in sunlight: $\ce{2AgBr -> 2Ag + Br2}$. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "agbr" } },
      options: [
        { key: "A", text: t`photochemical decomposition`, correct: true, value: "photochemical" },
        { key: "B", text: t`thermal decomposition`, correct: false, misconceptionId: "C09-M10", value: "thermal_decomposition" },
        { key: "C", text: t`electrolytic decomposition`, correct: false, misconceptionId: "C09-M11", value: "electrolytic" },
        { key: "D", text: t`a combination reaction`, correct: false, misconceptionId: "C09-M12", value: "combination" },
      ],
      solution: {
        steps: [
          t`Light splits silver bromide.`,
          t`Photochemical decomposition.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`A copper wire is dipped in silver nitrate solution. What happens?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cu_ag" } },
      options: [
        { key: "A", text: t`Silver displaces copper from the wire`, correct: false, misconceptionId: "C09-M14", value: "silver_displaces_copper" },
        { key: "B", text: t`The two compounds swap ions`, correct: false, misconceptionId: "C09-M15", value: "double_displacement" },
        { key: "C", text: t`Copper displaces silver, which coats the wire`, correct: true, value: "copper_displaces_silver" },
        { key: "D", text: t`Nothing: copper is too unreactive`, correct: false, misconceptionId: "C09-M13", value: "no_reaction" },
      ],
      solution: {
        steps: [
          t`Copper is more reactive than silver.`,
          t`Copper displaces silver, which coats the wire.`,
        ],
      },
    },
  ],
};
