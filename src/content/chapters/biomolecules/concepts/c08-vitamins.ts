import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Sailors on long voyages once lost their teeth and bled from the gums, until limes were added to their rations. What did the limes supply?`,
    reveal: t`Vitamin C: without it the body cannot make healthy connective tissue, and the disease is scurvy.`,
  },
  explanation: {
    intuition: [
      t`**Vitamins** are organic compounds needed in small amounts for growth and health.`,
      t`Most cannot be made by the body, so they must come from food.`,
      t`A lack of one vitamin causes its own **deficiency disease**.`,
      t`Vitamins are grouped by what they dissolve in: fat or water.`,
    ],
    formal: [
      {
        title: "Fat and water soluble",
        points: [
          t`**Fat-soluble**: A, D, E and K, stored in the liver and fat tissue.`,
          t`**Water-soluble**: B group and C, which pass out in urine.`,
          t`So B and C must be eaten regularly (B12 is the exception, stored in the liver).`,
        ],
      },
      {
        title: "Deficiency diseases",
        points: [
          t`A: night blindness and xerophthalmia (hardening of the cornea).`,
          t`$\mathrm{B_1}$: beriberi. $\mathrm{B_{12}}$: pernicious anaemia.`,
          t`C: scurvy (bleeding gums).`,
          t`D: rickets in children and osteomalacia in adults.`,
          t`E: fragile red blood cells and muscular weakness.`,
          t`K: a longer blood clotting time.`,
        ],
      },
    ],
    worked: {
      prompt: t`A child's bones are soft and bent. Which vitamin is lacking, and is it stored in the body?`,
      steps: [
        t`Soft, bent bones in children are rickets.`,
        t`Rickets is vitamin D deficiency.`,
        t`Vitamin D is fat-soluble, so it is stored.`,
      ],
      answer: t`Vitamin D, a fat-soluble vitamin the body stores`,
    },
    visualSpec: t`A card for each vitamin that flips to show its foods and its deficiency disease.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Links vitamin C to rickets.",
      remediation: "Rickets is vitamin D deficiency; C deficiency is scurvy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Links vitamin C to beriberi.",
      remediation: t`Beriberi is $\mathrm{B_1}$ deficiency; C deficiency is scurvy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Links vitamin C to night blindness.",
      remediation: "Night blindness is vitamin A deficiency.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Calls B and C fat-soluble.",
      remediation: "B and C dissolve in water; A, D, E and K in fat.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Calls all vitamins fat-soluble.",
      remediation: "Only A, D, E and K are fat-soluble.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Calls A and C fat-soluble.",
      remediation: "C is water-soluble; the fat-soluble set is A, D, E and K.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks vitamin A.",
      remediation: "Vitamin A is fat-soluble and stored in the liver.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks vitamin D.",
      remediation: "Vitamin D is fat-soluble and stored.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks vitamin K.",
      remediation: "Vitamin K is fat-soluble and stored.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Gives anaemia.",
      remediation: t`Pernicious anaemia is $\mathrm{B_{12}}$ deficiency; K controls clotting.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Gives rickets.",
      remediation: "Rickets is vitamin D deficiency; K controls clotting.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Gives muscular weakness.",
      remediation: "Muscular weakness is vitamin E deficiency; K controls clotting.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks vitamin C.",
      remediation: "Vitamin C deficiency is scurvy, not rickets.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks vitamin A.",
      remediation: "Vitamin A deficiency is night blindness.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: t`Picks vitamin $\mathrm{B_1}$.`,
      remediation: t`$\mathrm{B_1}$ deficiency is beriberi.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "authored" },
      stem: t`A deficiency of vitamin C causes`,
      verify: { kind: "value", inputs: {  }, params: { q: "scurvy" } },
      options: [
        { key: "A", text: t`scurvy (bleeding gums)`, correct: true, value: "scurvy" },
        { key: "B", text: t`rickets`, correct: false, misconceptionId: "C08-M1", value: "rickets" },
        { key: "C", text: t`beriberi`, correct: false, misconceptionId: "C08-M2", value: "beriberi" },
        { key: "D", text: t`night blindness`, correct: false, misconceptionId: "C08-M3", value: "night_blindness" },
      ],
      solution: {
        steps: [
          t`Vitamin C keeps gums and connective tissue healthy.`,
          t`Its deficiency is scurvy.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`The fat-soluble vitamins are`,
      verify: { kind: "value", inputs: {  }, params: { q: "fat" } },
      options: [
        { key: "A", text: t`B and C`, correct: false, misconceptionId: "C08-M4", value: "b_c" },
        { key: "B", text: t`all of them`, correct: false, misconceptionId: "C08-M5", value: "all_vitamins" },
        { key: "C", text: t`A and C`, correct: false, misconceptionId: "C08-M6", value: "a_c" },
        { key: "D", text: t`A, D, E and K`, correct: true, value: "a_d_e_k" },
      ],
      solution: {
        steps: [
          t`Vitamins that dissolve in fat are stored.`,
          t`They are A, D, E and K.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`Which vitamin must be taken regularly in the diet because the body does not store it?`,
      verify: { kind: "value", inputs: {  }, params: { q: "stored" } },
      options: [
        { key: "A", text: t`vitamin A`, correct: false, misconceptionId: "C08-M7", value: "vitamin_a" },
        { key: "B", text: t`vitamin D`, correct: false, misconceptionId: "C08-M8", value: "vitamin_d" },
        { key: "C", text: t`vitamin K`, correct: false, misconceptionId: "C08-M9", value: "vitamin_k" },
        { key: "D", text: t`vitamin C`, correct: true, value: "vitamin_c" },
      ],
      solution: {
        steps: [
          t`Water-soluble vitamins pass out in urine.`,
          t`Vitamin C must be eaten regularly.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`A deficiency of vitamin K causes`,
      verify: { kind: "value", inputs: {  }, params: { q: "k" } },
      options: [
        { key: "A", text: t`rickets`, correct: false, misconceptionId: "C08-M11", value: "rickets_k" },
        { key: "B", text: t`muscular weakness`, correct: false, misconceptionId: "C08-M12", value: "muscle_weakness" },
        { key: "C", text: t`a longer blood clotting time`, correct: true, value: "slow_clotting" },
        { key: "D", text: t`pernicious anaemia`, correct: false, misconceptionId: "C08-M10", value: "anaemia" },
      ],
      solution: {
        steps: [
          t`Vitamin K is needed for blood to clot.`,
          t`Without it, clotting takes longer.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Rickets in children is caused by a deficiency of`,
      verify: { kind: "value", inputs: {  }, params: { q: "rickets" } },
      options: [
        { key: "A", text: t`vitamin $\mathrm{B_1}$`, correct: false, misconceptionId: "C08-M15", value: "vitamin_b1" },
        { key: "B", text: t`vitamin D`, correct: true, value: "vitamin_d" },
        { key: "C", text: t`vitamin C`, correct: false, misconceptionId: "C08-M13", value: "vitamin_c" },
        { key: "D", text: t`vitamin A`, correct: false, misconceptionId: "C08-M14", value: "vitamin_a" },
      ],
      solution: {
        steps: [
          t`Vitamin D helps bones take up calcium.`,
          t`Its lack causes rickets.`,
        ],
      },
    },
  ],
};
