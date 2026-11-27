import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A clown fish lives among a sea anemone's stinging tentacles and is never stung. Who gains from this?`,
    reveal: t`The fish gains a safe home; the anemone seems to gain nothing and lose nothing.`,
  },
  explanation: {
    intuition: [
      t`Species in a community interact.`,
      t`Some interactions help one or both partners and harm neither.`,
      t`These are **mutualism** and **commensalism**.`,
    ],
    formal: [
      {
        title: "Mutualism (+, +)",
        points: [
          t`Both species gain.`,
          t`**Lichens**: a fungus with an alga or cyanobacterium.`,
          t`**Hummingbirds** and flowers: food for the bird, pollination for the plant.`,
        ],
      },
      {
        title: "Commensalism (+, 0)",
        points: [
          t`One gains; the other is neither harmed nor helped.`,
          t`An **orchid** on a mango tree.`,
          t`The **clown fish** in a sea anemone.`,
        ],
      },
    ],
    worked: {
      prompt: t`Barnacles ride on a whale, which is unaffected. What is the interaction?`,
      steps: [
        t`The barnacles gain.`,
        t`The whale is unaffected.`,
      ],
      answer: t`Commensalism`,
    },
    visualSpec: t`A table of interactions with + , 0 and − signs for each partner.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks mutualism.",
      remediation: "The anemone gains nothing.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks parasitism.",
      remediation: "The anemone is not harmed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks amensalism.",
      remediation: "The fish gains.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks parasitism.",
      remediation: "The orchid makes its own food.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks amensalism.",
      remediation: "The orchid gains.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks mutualism.",
      remediation: "The mango gains nothing.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks commensalism.",
      remediation: "Both partners gain.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks parasitism.",
      remediation: "Neither is harmed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks competition.",
      remediation: "They cooperate.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks commensalism.",
      remediation: "The plant gains pollination.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks predation.",
      remediation: "Neither is eaten.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks parasitism.",
      remediation: "Neither is harmed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says both gain.",
      remediation: "That is mutualism.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says one is harmed.",
      remediation: "That is parasitism.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says both harmed.",
      remediation: "That is competition.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Organisms and Populations/2024 Q. 2(vii)" },
      stem: t`The association between a sea anemone and a clown fish is`,
      verify: { kind: "value", inputs: {  }, params: { q: "clownfish" } },
      options: [
        { key: "A", text: t`Amensalism`, correct: false, misconceptionId: "C05-M3", value: "amensalism_i" },
        { key: "B", text: t`Commensalism`, correct: true, value: "commensalism_i" },
        { key: "C", text: t`Mutualism`, correct: false, misconceptionId: "C05-M1", value: "mutualism_i" },
        { key: "D", text: t`Parasitism`, correct: false, misconceptionId: "C05-M2", value: "parasitism_i" },
      ],
      solution: {
        steps: [
          t`Fish gains, anemone neutral.`,
          t`Commensalism.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Organisms and Populations/2025 Q. 1(vii)" },
      stem: t`An orchid grows as an epiphyte on a branch of a mango tree. The association is`,
      verify: { kind: "value", inputs: {  }, params: { q: "orchid" } },
      options: [
        { key: "A", text: t`Parasitism`, correct: false, misconceptionId: "C05-M4", value: "parasitism_i" },
        { key: "B", text: t`Amensalism`, correct: false, misconceptionId: "C05-M5", value: "amensalism_i" },
        { key: "C", text: t`Mutualism`, correct: false, misconceptionId: "C05-M6", value: "mutualism_i" },
        { key: "D", text: t`Commensalism`, correct: true, value: "commensalism_i" },
      ],
      solution: {
        steps: [
          t`Epiphyte on a branch.`,
          t`Commensalism.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q2(2)" },
      stem: t`A lichen, a fungus living with an alga, shows`,
      verify: { kind: "value", inputs: {  }, params: { q: "lichen" } },
      options: [
        { key: "A", text: t`Mutualism`, correct: true, value: "mutualism_i" },
        { key: "B", text: t`Commensalism`, correct: false, misconceptionId: "C05-M7", value: "commensalism_i" },
        { key: "C", text: t`Parasitism`, correct: false, misconceptionId: "C05-M8", value: "parasitism_i" },
        { key: "D", text: t`Competition`, correct: false, misconceptionId: "C05-M9", value: "competition_i" },
      ],
      solution: {
        steps: [
          t`Fungus and alga.`,
          t`Mutualism.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q2(3)" },
      stem: t`Hummingbirds and the flowers they feed on and pollinate show`,
      verify: { kind: "value", inputs: {  }, params: { q: "hummingbird" } },
      options: [
        { key: "A", text: t`Predation`, correct: false, misconceptionId: "C05-M11", value: "predation_i" },
        { key: "B", text: t`Parasitism`, correct: false, misconceptionId: "C05-M12", value: "parasitism_i" },
        { key: "C", text: t`Mutualism`, correct: true, value: "mutualism_i" },
        { key: "D", text: t`Commensalism`, correct: false, misconceptionId: "C05-M10", value: "commensalism_i" },
      ],
      solution: {
        steps: [
          t`Food for pollination.`,
          t`Mutualism.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q2(1)" },
      stem: t`In commensalism,`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`one species gains and the other is neither harmed nor helped`, correct: true, value: "one_gains_other_neutral" },
        { key: "B", text: t`both species gain`, correct: false, misconceptionId: "C05-M13", value: "both_gain" },
        { key: "C", text: t`one gains and the other is harmed`, correct: false, misconceptionId: "C05-M14", value: "one_gains_other_harmed" },
        { key: "D", text: t`both are harmed`, correct: false, misconceptionId: "C05-M15", value: "both_harmed" },
      ],
      solution: {
        steps: [
          t`(+, 0).`,
          t`One gains, the other is unaffected.`,
        ],
      },
    },
  ],
};
