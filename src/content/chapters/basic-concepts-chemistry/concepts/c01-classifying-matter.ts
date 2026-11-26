import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Seawater, sugar and ozone look nothing alike. Yet a chemist sorts all three with two questions: is it one substance, and if so, can it be broken down further?`,
    reveal: t`Seawater is a mixture of many substances; sugar is a compound, breakable into elements; ozone is an element, made of one kind of atom.`,
  },
  explanation: {
    intuition: [
      t`Matter is either a **pure substance** or a **mixture**.`,
      t`Pure substances are **elements** (one kind of atom) or **compounds** (elements chemically combined).`,
      t`A compound has a fixed composition and new properties; a mixture does not.`,
      t`Mixtures are **homogeneous** (the same throughout) or **heterogeneous** (visibly uneven).`,
    ],
    formal: [
      {
        title: "Pure substances",
        points: [
          t`Element: one kind of atom, e.g. Na, $\ce{O2}$, $\ce{O3}$.`,
          t`Compound: two or more elements in a fixed ratio by mass, e.g. $\ce{H2O}$, $\ce{CO2}$.`,
          t`A compound can be separated into its elements only by chemical means.`,
        ],
      },
      {
        title: "Mixtures",
        points: [
          t`Components keep their own properties and can be separated physically.`,
          t`Homogeneous: air, salt solution, brass.`,
          t`Heterogeneous: oil and water, sand in water.`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify sugar dissolved in water.`,
      steps: [
        t`Two substances, not chemically combined: a mixture.`,
        t`It is the same throughout: homogeneous.`,
      ],
      answer: t`A homogeneous mixture`,
    },
    visualSpec: t`Sort samples into a tree: pure or mixture, then element or compound, homogeneous or heterogeneous.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Calls a compound a mixture because it has two elements.",
      remediation: "Water's elements are chemically combined in a fixed ratio: a compound.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks any solid stirred into a liquid is uniform.",
      remediation: "Sand does not dissolve; it stays visible, so the mixture is heterogeneous.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Calls a pure gas a mixture.",
      remediation: "Pure oxygen has one kind of molecule: an element.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks any solution of two substances is heterogeneous.",
      remediation: "Dissolved salt spreads evenly: a homogeneous mixture.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks an alloy has visible parts.",
      remediation: "Brass is copper and zinc mixed evenly: homogeneous.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Calls a compound heterogeneous.",
      remediation: "Sugar is a pure compound, not a mixture.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks a small molecule must be an element.",
      remediation: "Water has two kinds of atom: a compound.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks any gas is an element.",
      remediation: t`$\ce{CO2}$ has two kinds of atom: a compound.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Calls a mixture of gases an element.",
      remediation: "Air is a mixture of nitrogen, oxygen and other gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Swaps the features of compounds and mixtures.",
      remediation: "Mixtures separate physically; compounds only chemically.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks a compound's composition can vary.",
      remediation: "A compound always has the same composition by mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks a compound keeps its elements' properties.",
      remediation: "Sodium and chlorine are dangerous; sodium chloride is table salt.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Classifies by physical state.",
      remediation: "Solid, liquid and gas is a classification by state, not composition.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Classifies by metal and non-metal.",
      remediation: "That sorts elements only; composition sorts all matter into pure substances and mixtures.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Classifies as organic or inorganic.",
      remediation: "That is a classification of compounds, not of all matter by composition.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.3 (A)" },
      stem: t`Which of these is a homogeneous mixture?`,
      verify: { kind: "value", inputs: {  }, params: { q: "homogeneous" } },
      options: [
        { key: "A", text: t`pure oxygen`, correct: false, misconceptionId: "C01-M3", value: "oxygen" },
        { key: "B", text: t`water`, correct: false, misconceptionId: "C01-M1", value: "water" },
        { key: "C", text: t`sand stirred into water`, correct: false, misconceptionId: "C01-M2", value: "sand_in_water" },
        { key: "D", text: t`air`, correct: true, value: "air" },
      ],
      solution: {
        steps: [
          t`Air is several gases mixed evenly.`,
          t`It is a homogeneous mixture.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.3 (B)" },
      stem: t`Which of these is a heterogeneous mixture?`,
      verify: { kind: "value", inputs: {  }, params: { q: "heterogeneous" } },
      options: [
        { key: "A", text: t`oil and water`, correct: true, value: "oil_and_water" },
        { key: "B", text: t`salt dissolved in water`, correct: false, misconceptionId: "C01-M4", value: "salt_solution" },
        { key: "C", text: t`brass`, correct: false, misconceptionId: "C01-M5", value: "brass" },
        { key: "D", text: t`sugar`, correct: false, misconceptionId: "C01-M6", value: "sugar" },
      ],
      solution: {
        steps: [
          t`Oil and water form separate layers.`,
          t`The mixture is heterogeneous.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.3 (C)" },
      stem: t`Which of these is an element?`,
      verify: { kind: "value", inputs: {  }, params: { q: "element" } },
      options: [
        { key: "A", text: t`carbon dioxide, $\ce{CO2}$`, correct: false, misconceptionId: "C01-M8", value: "carbon_dioxide" },
        { key: "B", text: t`ozone, $\ce{O3}$`, correct: true, value: "ozone" },
        { key: "C", text: t`air`, correct: false, misconceptionId: "C01-M9", value: "air" },
        { key: "D", text: t`water, $\ce{H2O}$`, correct: false, misconceptionId: "C01-M7", value: "water" },
      ],
      solution: {
        steps: [
          t`Ozone has only oxygen atoms.`,
          t`It is an element.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.3 (D)" },
      stem: t`A compound differs from a mixture because in a compound`,
      verify: { kind: "value", inputs: {  }, params: { q: "compound" } },
      options: [
        { key: "A", text: t`the composition can vary from sample to sample`, correct: false, misconceptionId: "C01-M11", value: "variable" },
        { key: "B", text: t`the parts can be separated by physical methods`, correct: false, misconceptionId: "C01-M10", value: "physical_separation" },
        { key: "C", text: t`the elements are combined in a fixed ratio by mass and can be separated only chemically`, correct: true, value: "fixed_ratio" },
        { key: "D", text: t`each element keeps its own properties`, correct: false, misconceptionId: "C01-M12", value: "keeps_properties" },
      ],
      solution: {
        steps: [
          t`A compound has a fixed composition.`,
          t`Only chemical reactions separate its elements.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.5 (F)" },
      stem: t`On the basis of chemical composition, matter is classified into`,
      verify: { kind: "value", inputs: {  }, params: { q: "types" } },
      options: [
        { key: "A", text: t`organic and inorganic substances`, correct: false, misconceptionId: "C01-M15", value: "organic" },
        { key: "B", text: t`solids, liquids and gases`, correct: false, misconceptionId: "C01-M13", value: "states" },
        { key: "C", text: t`metals and non-metals`, correct: false, misconceptionId: "C01-M14", value: "metals" },
        { key: "D", text: t`pure substances (elements and compounds) and mixtures`, correct: true, value: "pure_and_mixtures" },
      ],
      solution: {
        steps: [
          t`By composition: pure substances or mixtures.`,
          t`Pure substances are elements or compounds.`,
        ],
      },
    },
  ],
};
