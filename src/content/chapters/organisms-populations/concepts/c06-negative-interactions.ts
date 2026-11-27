import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A crow works hard to feed a chick that is not its own, and is much bigger than it. What has happened?`,
    reveal: t`A koel laid its egg in the crow's nest; the crow raises the koel's chick at its own cost.`,
  },
  explanation: {
    intuition: [
      t`Some interactions harm one partner.`,
      t`**Parasitism** and **predation** (+, −); **competition** (−, −).`,
      t`Prey and hosts evolve defences.`,
    ],
    formal: [
      {
        title: "Parasitism and predation",
        points: [
          t`Parasite gains, host is harmed. **Brood parasitism**: the koel and the crow.`,
          t`Predators keep prey in check.`,
          t`**Biological control** of pests is based on **predation**.`,
        ],
      },
      {
        title: "Defences",
        points: [
          t`**Morphological**: thorns of *Acacia* and cactus.`,
          t`**Chemical**: poisons and bad tastes.`,
          t`**Camouflage**: blending with the background.`,
        ],
      },
    ],
    worked: {
      prompt: t`Frogs are removed from a field, and locusts swarm. Why?`,
      steps: [
        t`Frogs eat locusts.`,
        t`Without predators, prey multiply.`,
      ],
      answer: t`Predation stopped`,
    },
    visualSpec: t`A crow feeding a large koel chick in its nest.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says one gains.",
      remediation: "The host is also harmed.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says both gain.",
      remediation: "That is mutualism.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says the other is unaffected.",
      remediation: "That is commensalism.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks mutualism.",
      remediation: "The crow loses.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks commensalism.",
      remediation: "The crow is harmed.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks predation.",
      remediation: "The chick is not eaten.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks competition.",
      remediation: "Predators eat the pests.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks mutualism.",
      remediation: "The pest is harmed.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks commensalism.",
      remediation: "The pest is harmed.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks chemical.",
      remediation: "Thorns are structures.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks camouflage.",
      remediation: "Thorns are seen.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks mimicry.",
      remediation: "Thorns are real weapons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks mimicry.",
      remediation: "Mimicry copies another animal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks chemical.",
      remediation: "It is colour.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks commensalism.",
      remediation: "That is an interaction.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q1(4)" },
      stem: t`Which statement best explains parasitism?`,
      verify: { kind: "value", inputs: {  }, params: { q: "parasitism" } },
      options: [
        { key: "A", text: t`One species gains`, correct: false, misconceptionId: "C06-M1", value: "one_gains_only" },
        { key: "B", text: t`Both species gain`, correct: false, misconceptionId: "C06-M2", value: "both_gain" },
        { key: "C", text: t`One gains and the other is unaffected`, correct: false, misconceptionId: "C06-M3", value: "gain_neutral" },
        { key: "D", text: t`One species gains and the other is harmed`, correct: true, value: "gain_harm" },
      ],
      solution: {
        steps: [
          t`(+, −).`,
          t`One gains, the other is harmed.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q2(3)" },
      stem: t`A crow feeds the hatchling of a koel. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "koel" } },
      options: [
        { key: "A", text: t`brood parasitism`, correct: true, value: "brood_parasitism" },
        { key: "B", text: t`mutualism`, correct: false, misconceptionId: "C06-M4", value: "mutualism_i" },
        { key: "C", text: t`commensalism`, correct: false, misconceptionId: "C06-M5", value: "commensalism_i" },
        { key: "D", text: t`predation`, correct: false, misconceptionId: "C06-M6", value: "predation_i" },
      ],
      solution: {
        steps: [
          t`Egg in a crow's nest.`,
          t`Brood parasitism.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q2(4)" },
      stem: t`Biological control of insect pests is based on`,
      verify: { kind: "value", inputs: {  }, params: { q: "biocontrol" } },
      options: [
        { key: "A", text: t`Predation`, correct: true, value: "predation_i" },
        { key: "B", text: t`Competition`, correct: false, misconceptionId: "C06-M7", value: "competition_i" },
        { key: "C", text: t`Mutualism`, correct: false, misconceptionId: "C06-M8", value: "mutualism_i" },
        { key: "D", text: t`Commensalism`, correct: false, misconceptionId: "C06-M9", value: "commensalism_i" },
      ],
      solution: {
        steps: [
          t`Predators eat pests.`,
          t`Predation.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(3)" },
      stem: t`The thorns of *Acacia* and cactus are a`,
      verify: { kind: "value", inputs: {  }, params: { q: "thorns" } },
      options: [
        { key: "A", text: t`mimicry`, correct: false, misconceptionId: "C06-M12", value: "mimicry_d" },
        { key: "B", text: t`morphological defence`, correct: true, value: "morphological_d" },
        { key: "C", text: t`chemical defence`, correct: false, misconceptionId: "C06-M10", value: "chemical_d" },
        { key: "D", text: t`camouflage`, correct: false, misconceptionId: "C06-M11", value: "camouflage_d" },
      ],
      solution: {
        steps: [
          t`Sharp structures.`,
          t`Morphological defence.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q2(1)" },
      stem: t`An insect coloured exactly like tree bark escapes its predators by`,
      verify: { kind: "value", inputs: {  }, params: { q: "blend" } },
      options: [
        { key: "A", text: t`camouflage`, correct: true, value: "camouflage_d" },
        { key: "B", text: t`mimicry`, correct: false, misconceptionId: "C06-M13", value: "mimicry_d" },
        { key: "C", text: t`chemical defence`, correct: false, misconceptionId: "C06-M14", value: "chemical_d" },
        { key: "D", text: t`commensalism`, correct: false, misconceptionId: "C06-M15", value: "commensalism_i" },
      ],
      solution: {
        steps: [
          t`Blending in.`,
          t`Camouflage.`,
        ],
      },
    },
  ],
};
