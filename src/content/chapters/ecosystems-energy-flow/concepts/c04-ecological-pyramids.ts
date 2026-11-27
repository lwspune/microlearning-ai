import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`One mango tree feeds thousands of insects. Draw a pyramid of numbers for it, and it stands on its tip. Why?`,
    reveal: t`One producer supports many small consumers: counting individuals ignores how big each one is.`,
  },
  explanation: {
    intuition: [
      t`**Ecological pyramids** show trophic levels by number, biomass or energy.`,
      t`The concept was developed by **C. Elton** (1927).`,
      t`Producers form the base.`,
    ],
    formal: [
      {
        title: "Numbers and biomass",
        points: [
          t`Pyramid of numbers is usually upright, but **inverted** for a **single tree** with its insects and parasites.`,
          t`Pyramid of biomass is usually upright, but **inverted** in the **ocean**: small phytoplankton support larger fish.`,
          t`Decomposers outnumber every level.`,
        ],
      },
      {
        title: "Energy",
        points: [
          t`Pyramid of energy is **always upright**.`,
          t`Energy falls at each level by the 10% law.`,
          t`It can never be inverted.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why can the pyramid of energy never be inverted?`,
      steps: [
        t`Each level gets only part of the energy below it.`,
        t`So energy always falls upward.`,
      ],
      answer: t`Energy is lost at each step`,
    },
    visualSpec: t`Three pyramids: an upright grassland, an inverted tree (numbers), an inverted ocean (biomass).`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks producers.",
      remediation: "Decomposers are more numerous.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks primary consumers.",
      remediation: "Decomposers are more numerous.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks secondary consumers.",
      remediation: "They are few.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks grassland.",
      remediation: "That is upright.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks pond.",
      remediation: "That is upright.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks ocean.",
      remediation: "That inverts biomass.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks grassland.",
      remediation: "That is upright.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks forest.",
      remediation: "That is upright.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks single tree.",
      remediation: "That inverts numbers.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says inverted.",
      remediation: "Energy always falls upward.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says either way.",
      remediation: "Energy cannot invert.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says spindle.",
      remediation: "Energy narrows steadily.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks Lindeman.",
      remediation: "Lindeman gave the 10% law.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks Odum.",
      remediation: "Odum studied ecosystems.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks Darwin.",
      remediation: "Darwin studied evolution.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q1(1)" },
      stem: t`Which has the largest population in a food chain?`,
      verify: { kind: "value", inputs: {  }, params: { q: "largest" } },
      options: [
        { key: "A", text: t`Primary consumers`, correct: false, misconceptionId: "C04-M2", value: "primary_l" },
        { key: "B", text: t`Secondary consumers`, correct: false, misconceptionId: "C04-M3", value: "secondary_l" },
        { key: "C", text: t`Decomposers`, correct: true, value: "decomposers_l" },
        { key: "D", text: t`Producers`, correct: false, misconceptionId: "C04-M1", value: "producers_l" },
      ],
      solution: {
        steps: [
          t`Bacteria and fungi.`,
          t`Decomposers.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q2(1)" },
      stem: t`Which ecosystem shows an inverted pyramid of numbers?`,
      verify: { kind: "value", inputs: {  }, params: { q: "numbers" } },
      options: [
        { key: "A", text: t`A grassland`, correct: false, misconceptionId: "C04-M4", value: "grassland_e" },
        { key: "B", text: t`A pond`, correct: false, misconceptionId: "C04-M5", value: "pond_e" },
        { key: "C", text: t`The ocean`, correct: false, misconceptionId: "C04-M6", value: "ocean_e" },
        { key: "D", text: t`A single tree with its insects, birds and parasites`, correct: true, value: "single_tree" },
      ],
      solution: {
        steps: [
          t`One tree, many insects.`,
          t`A single tree.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q2(2)" },
      stem: t`Which ecosystem shows an inverted pyramid of biomass?`,
      verify: { kind: "value", inputs: {  }, params: { q: "biomass" } },
      options: [
        { key: "A", text: t`A forest`, correct: false, misconceptionId: "C04-M8", value: "forest_e" },
        { key: "B", text: t`A single tree`, correct: false, misconceptionId: "C04-M9", value: "single_tree" },
        { key: "C", text: t`The ocean`, correct: true, value: "ocean_e" },
        { key: "D", text: t`A grassland`, correct: false, misconceptionId: "C04-M7", value: "grassland_e" },
      ],
      solution: {
        steps: [
          t`Small producers, big consumers.`,
          t`The ocean.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Ecosystems and Energy Flow/2024 Q. 25" },
      stem: t`The pyramid of energy is`,
      verify: { kind: "value", inputs: {  }, params: { q: "energy" } },
      options: [
        { key: "A", text: t`always inverted`, correct: false, misconceptionId: "C04-M10", value: "always_inverted" },
        { key: "B", text: t`upright or inverted`, correct: false, misconceptionId: "C04-M11", value: "either_way" },
        { key: "C", text: t`spindle-shaped`, correct: false, misconceptionId: "C04-M12", value: "spindle_shaped" },
        { key: "D", text: t`always upright`, correct: true, value: "always_upright" },
      ],
      solution: {
        steps: [
          t`Energy falls upward.`,
          t`Always upright.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ecosystems-12-bio/Ex Q4(1)" },
      stem: t`The concept of ecological pyramids was developed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "elton" } },
      options: [
        { key: "A", text: t`C. Darwin`, correct: false, misconceptionId: "C04-M15", value: "darwin_s" },
        { key: "B", text: t`C. Elton`, correct: true, value: "elton_s" },
        { key: "C", text: t`R. Lindeman`, correct: false, misconceptionId: "C04-M13", value: "lindeman_s" },
        { key: "D", text: t`E. P. Odum`, correct: false, misconceptionId: "C04-M14", value: "odum_s" },
      ],
      solution: {
        steps: [
          t`1927.`,
          t`C. Elton.`,
        ],
      },
    },
  ],
};
