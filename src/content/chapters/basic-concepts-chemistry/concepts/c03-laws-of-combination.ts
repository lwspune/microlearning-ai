import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Water from a Himalayan glacier and water from a laboratory flask both contain exactly 88.9 % oxygen by mass. Why can't one be 85 % and the other 92 %?`,
    reveal: t`Water is a compound: every molecule is two H atoms and one O atom, so the mass ratio never changes.`,
  },
  explanation: {
    intuition: [
      t`Before atoms were proved, chemists found rules in how elements combine by mass and volume.`,
      t`Mass is never gained or lost in a reaction.`,
      t`A compound always has the same composition.`,
      t`Gases react in simple whole-number volume ratios.`,
    ],
    formal: [
      {
        title: "The laws",
        points: [
          t`**Conservation of mass**: total mass of products = total mass of reactants.`,
          t`**Definite proportions**: a compound always contains the same elements in the same ratio by mass.`,
          t`**Multiple proportions**: if two elements form several compounds, the masses of one per fixed mass of the other are in simple ratios.`,
          t`**Gaseous volumes** (Gay-Lussac): gases react, and gaseous products form, in simple whole-number volume ratios at the same T and P.`,
        ],
      },
    ],
    worked: {
      prompt: t`Nitrogen forms NO and $\ce{NO2}$. With 14 g of N, how much O combines in each, and what is the ratio?`,
      steps: [
        t`NO: 16 g; $\ce{NO2}$: 32 g.`,
        t`16 : 32 = 1 : 2, a simple ratio.`,
      ],
      answer: t`1 : 2, the law of multiple proportions`,
    },
    visualSpec: t`Weigh reactants and products on a balance, and line up gas syringes to compare reacting volumes.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Gives the molar mass of water.",
      remediation: "Percentage of O = 16 ÷ 18 × 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Uses one H atom.",
      remediation: "Water has two H atoms: 16 ÷ (2 + 16).",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Gives the atomic mass of oxygen.",
      remediation: "Convert to a percentage: 16 ÷ 18 × 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Names definite proportions for two compounds.",
      remediation: "Definite proportions is about one compound; two compounds of the same elements show multiple proportions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks a ratio between two compounds shows conservation of mass.",
      remediation: "Conservation of mass compares reactants and products of one reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Names reciprocal proportions.",
      remediation: "Two compounds of the same two elements in a 1 : 2 mass ratio: multiple proportions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks a volume ratio shows definite proportions.",
      remediation: "Definite proportions is about mass in one compound; gas volumes follow Gay-Lussac's law.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Takes any whole-number ratio for multiple proportions.",
      remediation: "Ratios of reacting gas volumes are Gay-Lussac's law.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks gas volumes are conserved like mass.",
      remediation: "4 volumes give 2: volumes are not conserved, but their ratio is simple.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Adds the masses.",
      remediation: t`Mass of oxygen = mass of $\ce{CO2}$ − mass of carbon.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Uses 16 g of O per 12 g of C.",
      remediation: t`$\ce{CO2}$ has two O atoms: 32 g per 12 g C.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: t`Gives the $\ce{CO2}$ mass.`,
      remediation: "Subtract the carbon to find the oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Thinks two samples of one oxide show multiple proportions.",
      remediation: "One oxide with the same ratio each time: definite proportions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Names conservation of mass.",
      remediation: "The data compare compositions of one compound: definite proportions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Names the law of gaseous volumes for solids.",
      remediation: "Gay-Lussac's law is about gas volumes; here masses fix the composition.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.1 (A)" },
      stem: t`Pure water from any source has 11.1 % hydrogen by mass. What percentage of its mass is oxygen?`,
      verify: { kind: "value", inputs: {  }, params: { q: "water_o" } },
      options: [
        { key: "A", text: t`$94.1\%$`, correct: false, misconceptionId: "C03-M2", value: "94.1000000000000" },
        { key: "B", text: t`$16\%$`, correct: false, misconceptionId: "C03-M3", value: "16" },
        { key: "C", text: t`$18\%$`, correct: false, misconceptionId: "C03-M1", value: "18" },
        { key: "D", text: t`$88.9\%$`, correct: true, value: "88.9000000000000" },
      ],
      solution: {
        steps: [
          t`O in water: 16 of 18 parts by mass.`,
          t`16 ÷ 18 × 100 = 88.9 %.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.1 (B)" },
      stem: t`12 g of carbon combines with 16 g of oxygen in CO and with 32 g in $\ce{CO2}$. The ratio 16 : 32 = 1 : 2 illustrates the law of`,
      verify: { kind: "value", inputs: {  }, params: { q: "multiple" } },
      options: [
        { key: "A", text: t`multiple proportions`, correct: true, value: "multiple" },
        { key: "B", text: t`reciprocal proportions`, correct: false, misconceptionId: "C03-M6", value: "reciprocal" },
        { key: "C", text: t`conservation of mass`, correct: false, misconceptionId: "C03-M5", value: "conservation" },
        { key: "D", text: t`definite proportions`, correct: false, misconceptionId: "C03-M4", value: "definite" },
      ],
      solution: {
        steps: [
          t`Two compounds of C and O.`,
          t`Fixed C, O masses in ratio 1 : 2: multiple proportions.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.1 (E)" },
      stem: t`In $\ce{N2 + 3H2 -> 2NH3}$ the gases react in the volume ratio 1 : 3 : 2. This illustrates the law of`,
      verify: { kind: "value", inputs: {  }, params: { q: "volumes" } },
      options: [
        { key: "A", text: t`definite proportions`, correct: false, misconceptionId: "C03-M7", value: "definite" },
        { key: "B", text: t`gaseous volumes`, correct: true, value: "gaseous_volumes" },
        { key: "C", text: t`conservation of mass`, correct: false, misconceptionId: "C03-M9", value: "conservation" },
        { key: "D", text: t`multiple proportions`, correct: false, misconceptionId: "C03-M8", value: "multiple" },
      ],
      solution: {
        steps: [
          t`Gases react in simple volume ratios.`,
          t`That is Gay-Lussac's law of gaseous volumes.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (J)" },
      stem: t`24 g of carbon burns in oxygen to give 88 g of carbon dioxide. What mass of oxygen was used?`,
      verify: { kind: "value", inputs: { c: "24", co2: "88" }, params: { q: "oxygen_used" } },
      options: [
        { key: "A", text: t`$32\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M11", value: "32" },
        { key: "B", text: t`$88\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M12", value: "88" },
        { key: "C", text: t`$64\ \mathrm{g}$`, correct: true, value: "64" },
        { key: "D", text: t`$112\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M10", value: "112" },
      ],
      solution: {
        steps: [
          t`Mass is conserved.`,
          t`88 − 24 = 64 g of oxygen.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (L)" },
      stem: t`2.0 g of a metal burnt in oxygen gives 3.2 g of its oxide. 1.42 g of the same metal heated in steam gives 2.27 g of the same oxide. These data verify the law of`,
      verify: { kind: "value", inputs: {  }, params: { q: "metal_oxide" } },
      options: [
        { key: "A", text: t`gaseous volumes`, correct: false, misconceptionId: "C03-M15", value: "gaseous_volumes" },
        { key: "B", text: t`multiple proportions`, correct: false, misconceptionId: "C03-M13", value: "multiple" },
        { key: "C", text: t`conservation of mass`, correct: false, misconceptionId: "C03-M14", value: "conservation" },
        { key: "D", text: t`definite proportions`, correct: true, value: "definite" },
      ],
      solution: {
        steps: [
          t`2.0/3.2 = 0.625; 1.42/2.27 = 0.626.`,
          t`Same composition: definite proportions.`,
        ],
      },
    },
  ],
};
