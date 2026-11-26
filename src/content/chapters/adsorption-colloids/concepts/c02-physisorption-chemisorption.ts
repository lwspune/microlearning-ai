import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Nitrogen sticks to charcoal at low temperature and leaves when warmed. Oxygen on tungsten forms a film that heat cannot remove. Why the difference?`,
    reveal: t`The first is physisorption, weak van der Waals attraction. The second is chemisorption: oxygen bonds chemically to the metal.`,
  },
  explanation: {
    intuition: [
      t`Adsorption comes in two kinds.`,
      t`**Physisorption**: weak van der Waals forces; easily reversed.`,
      t`**Chemisorption**: chemical bonds form; a surface compound results.`,
      t`They differ in strength, specificity and response to temperature.`,
    ],
    formal: [
      {
        title: "Physisorption",
        points: [
          t`Van der Waals forces; enthalpy about 20–40 kJ/mol.`,
          t`Reversible and not specific; multilayers possible.`,
          t`Decreases as temperature rises.`,
        ],
      },
      {
        title: "Chemisorption",
        points: [
          t`Chemical bonds; enthalpy about 80–240 kJ/mol.`,
          t`Specific and irreversible; one layer only.`,
          t`Needs activation energy, so first rises with temperature.`,
        ],
      },
    ],
    worked: {
      prompt: t`$\ce{H2}$ is adsorbed on nickel, forming Ni–H bonds. Which kind of adsorption is it?`,
      steps: [
        t`Chemical bonds form with the surface.`,
        t`So it is chemisorption.`,
      ],
      answer: t`Chemisorption`,
    },
    visualSpec: t`Compare molecules loosely resting on a surface with molecules bonded into it.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Swaps physisorption and chemisorption.",
      remediation: "Van der Waals forces mean physisorption; bonds mean chemisorption.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Says absorption.",
      remediation: "Absorption spreads through the bulk; this is a surface process.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Says catalysis.",
      remediation: "Catalysis is about reaction rates; this is adsorption.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks physisorption grows with temperature.",
      remediation: "It is exothermic, so heating reverses it.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks it is unchanged by temperature.",
      remediation: "Physisorption falls as temperature rises.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Gives chemisorption's behaviour.",
      remediation: "Only chemisorption first rises; physisorption simply falls.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Gives physisorption's enthalpy.",
      remediation: "Chemisorption, forming bonds, releases 80–240 kJ/mol.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Gives zero.",
      remediation: "Bond formation releases a lot of heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says the heat is absorbed.",
      remediation: "Adsorption releases heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Gives chemisorption's features.",
      remediation: "Physisorption is reversible and not specific.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says a compound forms.",
      remediation: "Compounds form only in chemisorption.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says it needs activation energy.",
      remediation: "Physisorption needs none; chemisorption does.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.2 (A)" },
      stem: t`Adsorption held by van der Waals forces is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "van_der_waals" } },
      options: [
        { key: "A", text: t`chemisorption`, correct: false, misconceptionId: "C02-M1", value: "chemisorption" },
        { key: "B", text: t`physisorption`, correct: true, value: "physisorption" },
        { key: "C", text: t`absorption`, correct: false, misconceptionId: "C02-M2", value: "absorption" },
        { key: "D", text: t`catalysis`, correct: false, misconceptionId: "C02-M3", value: "catalysis" },
      ],
      solution: {
        steps: [
          t`Van der Waals forces are weak physical forces.`,
          t`Physisorption.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.2 (B)" },
      stem: t`Adsorption in which a surface compound is formed is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "compound" } },
      options: [
        { key: "A", text: t`physisorption`, correct: false, misconceptionId: "C02-M1", value: "physisorption" },
        { key: "B", text: t`absorption`, correct: false, misconceptionId: "C02-M2", value: "absorption" },
        { key: "C", text: t`chemisorption`, correct: true, value: "chemisorption" },
        { key: "D", text: t`catalysis`, correct: false, misconceptionId: "C02-M3", value: "catalysis" },
      ],
      solution: {
        steps: [
          t`A compound means chemical bonds.`,
          t`Chemisorption.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.5 (B)" },
      stem: t`As temperature rises, physisorption`,
      verify: { kind: "value", inputs: {  }, params: { q: "temperature" } },
      options: [
        { key: "A", text: t`first increases, then decreases`, correct: false, misconceptionId: "C02-M6", value: "rises_falls" },
        { key: "B", text: t`is unchanged`, correct: false, misconceptionId: "C02-M5", value: "unchanged" },
        { key: "C", text: t`increases`, correct: false, misconceptionId: "C02-M4", value: "increases" },
        { key: "D", text: t`decreases`, correct: true, value: "decreases" },
      ],
      solution: {
        steps: [
          t`Physisorption is exothermic and reversible.`,
          t`Heating decreases it.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`The enthalpy of chemisorption is about`,
      verify: { kind: "value", inputs: {  }, params: { q: "enthalpy" } },
      options: [
        { key: "A", text: t`80–240 kJ/mol released`, correct: true, value: "kj_80_240" },
        { key: "B", text: t`80–240 kJ/mol absorbed`, correct: false, misconceptionId: "C02-M9", value: "positive" },
        { key: "C", text: t`20–40 kJ/mol released`, correct: false, misconceptionId: "C02-M7", value: "kj_20_40" },
        { key: "D", text: t`zero`, correct: false, misconceptionId: "C02-M8", value: "zero" },
      ],
      solution: {
        steps: [
          t`Chemical bonds form.`,
          t`About 80–240 kJ/mol is released.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.5 (B)" },
      stem: t`Which is true of physisorption?`,
      verify: { kind: "value", inputs: {  }, params: { q: "physisorption" } },
      options: [
        { key: "A", text: t`it needs activation energy`, correct: false, misconceptionId: "C02-M12", value: "needs_activation" },
        { key: "B", text: t`it is reversible and not specific`, correct: true, value: "reversible_nonspecific" },
        { key: "C", text: t`it is irreversible and specific`, correct: false, misconceptionId: "C02-M10", value: "irreversible_specific" },
        { key: "D", text: t`it forms a surface compound`, correct: false, misconceptionId: "C02-M11", value: "forms_compound" },
      ],
      solution: {
        steps: [
          t`Weak forces are easily reversed.`,
          t`Any gas can be held: not specific.`,
        ],
      },
    },
  ],
};
