import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A whale's flipper, a bat's wing and your arm look nothing alike, yet they have the same bones. What does that suggest?`,
    reveal: t`A common ancestor: the same plan of bones was modified for swimming, flying and grasping.`,
  },
  explanation: {
    intuition: [
      t`Living things show evidence of descent from common ancestors.`,
      t`Comparing their organs is one line of evidence.`,
      t`Fossils that link two groups are another.`,
    ],
    formal: [
      {
        title: "Organs",
        points: [
          t`**Homologous**: same plan, different use: forelimbs of whale, bat and man.`,
          t`**Analogous**: different plan, same use: wings of a butterfly and a bat.`,
          t`**Vestigial**: reduced, non-functional: the human appendix, wisdom teeth, coccyx.`,
        ],
      },
      {
        title: "Connecting links",
        points: [
          t`***Archaeopteryx***: feathers and wings, but teeth and a tail: birds and reptiles.`,
          t`***Seymouria***: amphibians and reptiles.`,
          t`Shared proteins and ATP in all life are molecular evidence.`,
        ],
      },
    ],
    worked: {
      prompt: t`Are the wings of a butterfly and a bird homologous or analogous?`,
      steps: [
        t`Both fly, but they are built differently.`,
        t`Same use, different plan: analogous.`,
      ],
      answer: t`Analogous`,
    },
    visualSpec: t`Forelimbs of four animals with the same bones coloured alike.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks whale and bat forelimbs.",
      remediation: "Those are homologous: same plan.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks thorn and tendril.",
      remediation: "Those are homologous: both modified stems.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks vertebrate hearts.",
      remediation: "Those are homologous.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks fishes and amphibians.",
      remediation: "That link is lobe-finned fishes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks annelids and arthropods.",
      remediation: "That link is *Peripatus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks chordates and non-chordates.",
      remediation: "That link is *Balanoglossus*.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks *Archaeopteryx*.",
      remediation: "It links reptiles and birds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks *Australopithecus*.",
      remediation: "It links apes and man.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks *Ichthyosaurus*.",
      remediation: "It is a marine reptile.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks the heart.",
      remediation: "The heart is vital.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks the liver.",
      remediation: "The liver works fully.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks the thumb.",
      remediation: "The thumb is fully used.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Reverses them.",
      remediation: "That describes analogous organs.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says similar in both.",
      remediation: "Homologous organs differ in use.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Calls them non-functional.",
      remediation: "That describes vestigial organs.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(4)" },
      stem: t`Which pair are analogous organs?`,
      verify: { kind: "value", inputs: {  }, params: { q: "analogous" } },
      options: [
        { key: "A", text: t`flippers of a dolphin and a penguin`, correct: true, value: "dolphin_penguin" },
        { key: "B", text: t`forelimbs of a whale and a bat`, correct: false, misconceptionId: "C02-M1", value: "whale_bat" },
        { key: "C", text: t`the thorn of *Bougainvillea* and the tendril of *Cucurbita*`, correct: false, misconceptionId: "C02-M2", value: "thorn_tendril" },
        { key: "D", text: t`hearts of vertebrates`, correct: false, misconceptionId: "C02-M3", value: "vertebrate_hearts" },
      ],
      solution: {
        steps: [
          t`Both are flippers for swimming, built differently.`,
          t`Analogous.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q1(5)" },
      stem: t`*Archaeopteryx* is a missing link because it shares characters of`,
      verify: { kind: "value", inputs: {  }, params: { q: "archaeopteryx" } },
      options: [
        { key: "A", text: t`fishes and amphibians`, correct: false, misconceptionId: "C02-M4", value: "fishes_amphibians" },
        { key: "B", text: t`annelids and arthropods`, correct: false, misconceptionId: "C02-M5", value: "annelids_arthropods" },
        { key: "C", text: t`chordates and non-chordates`, correct: false, misconceptionId: "C02-M6", value: "chordates_nonchordates" },
        { key: "D", text: t`birds and reptiles`, correct: true, value: "birds_reptiles" },
      ],
      solution: {
        steps: [
          t`Feathers, wings, teeth and a tail.`,
          t`Birds and reptiles.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2025 Q. 1(iv)" },
      stem: t`The connecting link between amphibians and reptiles is`,
      verify: { kind: "value", inputs: {  }, params: { q: "seymouria" } },
      options: [
        { key: "A", text: t`*Ichthyosaurus*`, correct: false, misconceptionId: "C02-M9", value: "ichthyosaurus" },
        { key: "B", text: t`*Seymouria*`, correct: true, value: "seymouria" },
        { key: "C", text: t`*Archaeopteryx*`, correct: false, misconceptionId: "C02-M7", value: "archaeopteryx" },
        { key: "D", text: t`*Australopithecus*`, correct: false, misconceptionId: "C02-M8", value: "australopithecus" },
      ],
      solution: {
        steps: [
          t`Between amphibians and reptiles.`,
          t`*Seymouria*.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Origin and Evolution of Life/2024 Q. 2(i)" },
      stem: t`A vestigial organ in humans is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "vestigial" } },
      options: [
        { key: "A", text: t`thumb`, correct: false, misconceptionId: "C02-M12", value: "thumb" },
        { key: "B", text: t`vermiform appendix`, correct: true, value: "appendix" },
        { key: "C", text: t`heart`, correct: false, misconceptionId: "C02-M10", value: "heart" },
        { key: "D", text: t`liver`, correct: false, misconceptionId: "C02-M11", value: "liver" },
      ],
      solution: {
        steps: [
          t`Reduced and non-functional in man.`,
          t`The vermiform appendix.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/evolution-12-bio/Ex Q2(5)" },
      stem: t`Homologous organs are`,
      verify: { kind: "value", inputs: {  }, params: { q: "homologous" } },
      options: [
        { key: "A", text: t`non-functional`, correct: false, misconceptionId: "C02-M15", value: "non_functional" },
        { key: "B", text: t`similar in structure but different in function`, correct: true, value: "same_plan_diff_use" },
        { key: "C", text: t`different in structure but similar in function`, correct: false, misconceptionId: "C02-M13", value: "diff_plan_same_use" },
        { key: "D", text: t`similar in both`, correct: false, misconceptionId: "C02-M14", value: "same_both" },
      ],
      solution: {
        steps: [
          t`Same structure, different function.`,
          t`Homologous.`,
        ],
      },
    },
  ],
};
