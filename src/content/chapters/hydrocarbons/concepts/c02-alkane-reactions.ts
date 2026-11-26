import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Alkanes are called paraffins, 'little affinity', because they resist most reagents. Yet in sunlight methane reacts readily with chlorine. What does light do?`,
    reveal: t`It splits Cl₂ into chlorine radicals, which start a chain reaction replacing H atoms one by one.`,
  },
  explanation: {
    intuition: [
      t`Alkanes are unreactive but burn and undergo substitution with halogens.`,
      t`Halogenation in light goes by free radicals.`,
      t`Each kind of hydrogen gives its own monohalogen product.`,
      t`Strong heating without air cracks alkanes into smaller pieces.`,
    ],
    formal: [
      {
        title: "Reactions",
        points: [
          t`Halogenation: $\ce{CH4 + Cl2}$ $\ce{->[h\nu] CH3Cl + HCl}$, by free radicals.`,
          t`Monohalogen products = number of kinds of H.`,
          t`Combustion: $\ce{C3H8 + 5O2}$ $\ce{-> 3CO2 + 4H2O}$.`,
          t`Pyrolysis: heating without air gives smaller alkanes and alkenes.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many monochloro products does propane give?`,
      steps: [
        t`Propane has two kinds of H: on the ends and in the middle.`,
        t`So two products.`,
      ],
      answer: t`2`,
    },
    visualSpec: t`Colour each kind of hydrogen in a molecule and count the chlorination products.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Treats all hydrogens as alike.",
      remediation: "The tertiary H differs from the nine primary H.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Counts carbons.",
      remediation: "Count kinds of hydrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Counts hydrogens.",
      remediation: "Equivalent hydrogens give the same product.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Misses one kind of hydrogen.",
      remediation: "2-Methylbutane has four kinds of H.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Expects dehydrogenation.",
      remediation: t`Complete combustion gives $\ce{CO2}$ and water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Expects CO and $\ce{H2}$ only.`,
      remediation: t`Complete combustion gives $\ce{CO2}$ and water.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Expects soot and water.",
      remediation: t`With enough oxygen, carbon becomes $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says carbocations.",
      remediation: t`Light splits $\ce{Cl2}$ evenly into radicals.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says carbanions.",
      remediation: "The chain is carried by free radicals.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says ionic addition.",
      remediation: "Alkanes undergo substitution, not addition.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: t`Expects $\ce{CO2}$ and water.`,
      remediation: "Without air there is no combustion.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Expects only hydrogen.",
      remediation: "C–C bonds break, giving smaller hydrocarbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Expects butene only.",
      remediation: "C–C bonds break too, giving several products.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (H)" },
      stem: t`How many monochlorination products can 2-methylpropane give?`,
      verify: { kind: "value", inputs: {  }, params: { q: "isobutane" } },
      options: [
        { key: "A", text: t`1`, correct: false, misconceptionId: "C02-M1", value: "one" },
        { key: "B", text: t`2`, correct: true, value: "two" },
        { key: "C", text: t`4`, correct: false, misconceptionId: "C02-M2", value: "four" },
        { key: "D", text: t`10`, correct: false, misconceptionId: "C02-M3", value: "ten" },
      ],
      solution: {
        steps: [
          t`Nine equivalent primary H and one tertiary H.`,
          t`Two kinds: 2 products.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (H)" },
      stem: t`How many monochlorination products can 2-methylbutane give?`,
      verify: { kind: "value", inputs: {  }, params: { q: "isopentane" } },
      options: [
        { key: "A", text: t`3`, correct: false, misconceptionId: "C02-M4", value: "three" },
        { key: "B", text: t`5`, correct: false, misconceptionId: "C02-M2", value: "five" },
        { key: "C", text: t`4`, correct: true, value: "four" },
        { key: "D", text: t`12`, correct: false, misconceptionId: "C02-M3", value: "twelve" },
      ],
      solution: {
        steps: [
          t`Four kinds of H in 2-methylbutane.`,
          t`4 products.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.3 (a)" },
      stem: t`Propane burns completely in oxygen. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "combustion" } },
      options: [
        { key: "A", text: t`carbon and water`, correct: false, misconceptionId: "C02-M7", value: "soot_water" },
        { key: "B", text: t`CO and $\ce{H2}$ only`, correct: false, misconceptionId: "C02-M6", value: "co_h2" },
        { key: "C", text: t`propene and $\ce{H2}$`, correct: false, misconceptionId: "C02-M5", value: "propene_h2" },
        { key: "D", text: t`$\ce{CO2}$ and $\ce{H2O}$`, correct: true, value: "co2_water" },
      ],
      solution: {
        steps: [
          t`$\ce{C3H8 + 5O2}$ $\ce{-> 3CO2 + 4H2O}$.`,
          t`$\ce{CO2}$ and water.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Chlorination of methane in sunlight proceeds through`,
      verify: { kind: "value", inputs: {  }, params: { q: "mechanism" } },
      options: [
        { key: "A", text: t`free radicals`, correct: true, value: "free_radical" },
        { key: "B", text: t`ionic addition`, correct: false, misconceptionId: "C02-M10", value: "ionic_addition" },
        { key: "C", text: t`carbocations`, correct: false, misconceptionId: "C02-M8", value: "carbocation" },
        { key: "D", text: t`carbanions`, correct: false, misconceptionId: "C02-M9", value: "carbanion" },
      ],
      solution: {
        steps: [
          t`Light splits $\ce{Cl2}$ homolytically.`,
          t`Free radicals carry the chain.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/hydrocarbons-11-chem/Ex Q.2 (I)" },
      stem: t`Butane is heated strongly without air (pyrolysis). The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "pyrolysis" } },
      options: [
        { key: "A", text: t`butene only`, correct: false, misconceptionId: "C02-M13", value: "butene_only" },
        { key: "B", text: t`smaller alkanes and alkenes, such as methane, ethane, ethene and propene`, correct: true, value: "smaller_alkanes_alkenes" },
        { key: "C", text: t`$\ce{CO2}$ and water`, correct: false, misconceptionId: "C02-M11", value: "co2_water" },
        { key: "D", text: t`hydrogen only`, correct: false, misconceptionId: "C02-M12", value: "hydrogen_only" },
      ],
      solution: {
        steps: [
          t`Heat breaks C–C and C–H bonds.`,
          t`Smaller alkanes and alkenes.`,
        ],
      },
    },
  ],
};
