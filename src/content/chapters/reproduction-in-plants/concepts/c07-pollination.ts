import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Maize sheds clouds of pollen into the wind, while a rose makes only a little. Why does maize need so much?`,
    reveal: t`Wind scatters pollen at random, so most is lost; insects carry rose pollen straight to another flower.`,
  },
  explanation: {
    intuition: [
      t`**Pollination** is the transfer of pollen from an anther to a stigma.`,
      t`**Autogamy**: within the same flower.`,
      t`**Geitonogamy**: to another flower on the same plant.`,
      t`**Xenogamy**: to a flower on another plant of the same species.`,
    ],
    formal: [
      {
        title: "Kinds of pollination",
        points: [
          t`Geitonogamy needs a pollinator, but the pollen is from the same plant.`,
          t`So genetically it is like self-pollination.`,
          t`Only xenogamy brings new genes from another plant.`,
        ],
      },
      {
        title: "Agents and adaptations",
        points: [
          t`**Anemophily** (wind): light, dry, smooth pollen in large amounts; feathery stigmas.`,
          t`**Hydrophily** (water): *Vallisneria*, *Zostera*.`,
          t`**Entomophily** (insects): bright petals, scent, nectar; sticky, rough pollen.`,
          t`Birds (**ornithophily**) and bats carry pollen too.`,
        ],
      },
    ],
    worked: {
      prompt: t`A flower is small and green with no scent, and has long hanging anthers and a feathery stigma. Which agent pollinates it?`,
      steps: [
        t`No colour, scent or nectar: not insects.`,
        t`Hanging anthers and a feathery stigma catch wind.`,
      ],
      answer: t`Wind (anemophily)`,
    },
    visualSpec: t`Pollen travelling by wind, water and insect, each to a flower suited to it.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks xenogamy.",
      remediation: "Xenogamy brings pollen from another plant, so it is genetically cross.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks cleistogamy.",
      remediation: "Cleistogamous flowers never open and self-pollinate without a pollinator.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks apogamy.",
      remediation: "Apogamy forms an embryo without fertilization; it is not pollination.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks large quantities of pollen.",
      remediation: "Large amounts suit wind; insects carry pollen reliably.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks dry, smooth pollen.",
      remediation: "Dry, smooth pollen suits wind; insect pollen is sticky.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks feathery stigmas.",
      remediation: "Feathery stigmas catch wind-borne pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks bright petals and nectar.",
      remediation: "Those attract insects; wind flowers don't need them.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks sticky, scented pollen.",
      remediation: "Sticky pollen clings to insects; wind needs light, dry pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks submerged flowers.",
      remediation: "Submerged flowers suit water pollination.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks anemophily.",
      remediation: "Anemophily is by wind.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks entomophily.",
      remediation: "Entomophily is by insects.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks ornithophily.",
      remediation: "Ornithophily is by birds.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks geitonogamy.",
      remediation: "Geitonogamy stays within the same plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks autogamy.",
      remediation: "Autogamy stays within the same flower.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks cleistogamy.",
      remediation: "Cleistogamous flowers self-pollinate without opening.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2024 Q. 1(vii)" },
      stem: t`Which kind of pollination needs a pollinator but is genetically like self-pollination?`,
      verify: { kind: "value", inputs: {  }, params: { q: "geitonogamy" } },
      options: [
        { key: "A", text: t`cleistogamy`, correct: false, misconceptionId: "C07-M2", value: "cleistogamy" },
        { key: "B", text: t`apogamy`, correct: false, misconceptionId: "C07-M3", value: "apogamy" },
        { key: "C", text: t`geitonogamy`, correct: true, value: "geitonogamy" },
        { key: "D", text: t`xenogamy`, correct: false, misconceptionId: "C07-M1", value: "xenogamy" },
      ],
      solution: {
        steps: [
          t`Pollen goes to another flower on the same plant.`,
          t`Geitonogamy: a pollinator, but the same genes.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q1(1)" },
      stem: t`Insect-pollinated flowers usually have`,
      verify: { kind: "value", inputs: {  }, params: { q: "insect" } },
      options: [
        { key: "A", text: t`very large quantities of pollen`, correct: false, misconceptionId: "C07-M4", value: "large_quantities" },
        { key: "B", text: t`dry pollen with a smooth surface`, correct: false, misconceptionId: "C07-M5", value: "dry_smooth" },
        { key: "C", text: t`feathery stigmas`, correct: false, misconceptionId: "C07-M6", value: "feathery_stigma" },
        { key: "D", text: t`sticky pollen with a rough surface`, correct: true, value: "sticky_rough" },
      ],
      solution: {
        steps: [
          t`Insect pollen must cling to the insect's body.`,
          t`It is sticky and rough.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "authored" },
      stem: t`Wind-pollinated flowers usually have`,
      verify: { kind: "value", inputs: {  }, params: { q: "wind" } },
      options: [
        { key: "A", text: t`flowers below the water surface`, correct: false, misconceptionId: "C07-M9", value: "submerged" },
        { key: "B", text: t`light, dry pollen in large amounts`, correct: true, value: "light_dry_pollen" },
        { key: "C", text: t`bright petals and nectar`, correct: false, misconceptionId: "C07-M7", value: "bright_nectar" },
        { key: "D", text: t`sticky, scented pollen`, correct: false, misconceptionId: "C07-M8", value: "sticky_scented" },
      ],
      solution: {
        steps: [
          t`Wind needs pollen that floats.`,
          t`Light, dry pollen in large amounts.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(5)" },
      stem: t`Pollination by water, as in *Vallisneria*, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "water" } },
      options: [
        { key: "A", text: t`hydrophily`, correct: true, value: "hydrophily" },
        { key: "B", text: t`anemophily`, correct: false, misconceptionId: "C07-M10", value: "anemophily" },
        { key: "C", text: t`entomophily`, correct: false, misconceptionId: "C07-M11", value: "entomophily" },
        { key: "D", text: t`ornithophily`, correct: false, misconceptionId: "C07-M12", value: "ornithophily" },
      ],
      solution: {
        steps: [
          t`*Vallisneria* is an aquatic plant.`,
          t`Pollination by water is hydrophily.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "authored" },
      stem: t`Transfer of pollen to the stigma of a flower on another plant of the same species is`,
      verify: { kind: "value", inputs: {  }, params: { q: "xenogamy" } },
      options: [
        { key: "A", text: t`geitonogamy`, correct: false, misconceptionId: "C07-M13", value: "geitonogamy" },
        { key: "B", text: t`autogamy`, correct: false, misconceptionId: "C07-M14", value: "autogamy" },
        { key: "C", text: t`cleistogamy`, correct: false, misconceptionId: "C07-M15", value: "cleistogamy" },
        { key: "D", text: t`xenogamy`, correct: true, value: "xenogamy" },
      ],
      solution: {
        steps: [
          t`The pollen comes from another plant of the same species.`,
          t`That is xenogamy.`,
        ],
      },
    },
  ],
};
