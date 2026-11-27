import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Many flowers carry both anthers and stigma, yet they rarely pollinate themselves. What stops them?`,
    reveal: t`Outbreeding devices: the parts ripen at different times, are kept apart, or the stigma rejects its own pollen.`,
  },
  explanation: {
    intuition: [
      t`Repeated self-pollination leads to **inbreeding depression**.`,
      t`Flowers have **outbreeding devices** that favour cross-pollination.`,
      t`The pistil can also tell compatible pollen from incompatible pollen.`,
    ],
    formal: [
      {
        title: "Outbreeding devices",
        points: [
          t`**Unisexuality**: flowers or whole plants are male or female (**dioecy**: papaya, mulberry).`,
          t`**Dichogamy**: anthers and stigma mature at different times.`,
          t`**Herkogamy**: a physical barrier keeps anthers and stigma apart.`,
          t`**Self-incompatibility**: a genetic block stops a plant's own pollen fertilizing it.`,
        ],
      },
      {
        title: "Pollen–pistil interaction",
        points: [
          t`The **stigma** recognises compatible pollen of the same species.`,
          t`Proteins on pollen and stigma decide compatibility.`,
          t`Compatible pollen germinates and grows a tube; incompatible pollen is rejected.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a flower the stigma lies well above the anthers, out of their reach. Which outbreeding device is this?`,
      steps: [
        t`The parts are kept apart in space, not in time.`,
        t`A positional barrier is herkogamy.`,
      ],
      answer: t`Herkogamy`,
    },
    visualSpec: t`A flower timeline where the stigma opens only after its own anthers have shed their pollen.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks herkogamy.",
      remediation: "Herkogamy is a barrier in space; different timing is dichogamy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks self-incompatibility.",
      remediation: "Self-incompatibility is a genetic block, not timing.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks dioecy.",
      remediation: "Dioecy separates the sexes into different plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks dichogamy.",
      remediation: "Dichogamy is about timing; a barrier is herkogamy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks cleistogamy.",
      remediation: "Cleistogamy ensures self-pollination; it is no outbreeding device.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks unisexuality.",
      remediation: "Unisexuality removes one sex from the flower; a barrier is herkogamy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks the ovary.",
      remediation: "The stigma recognises the pollen before any tube grows.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks the ovule.",
      remediation: "The pollen is accepted or rejected at the stigma.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks the filiform apparatus.",
      remediation: "That guides the tube in the embryo sac; the stigma decides compatibility.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks it is about timing.",
      remediation: "Timing is dichogamy; self-incompatibility is genetic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks it is about position.",
      remediation: "Position is herkogamy; self-incompatibility is genetic.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks the flower makes no pollen.",
      remediation: "The pollen is made, but the stigma rejects it.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks dichogamy.",
      remediation: "These plants carry only one sex: dioecy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks herkogamy.",
      remediation: "There is no barrier inside a flower here; the sexes are on separate plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Picks cleistogamy.",
      remediation: "Cleistogamy causes self-pollination.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q3(4)" },
      stem: t`In some bisexual flowers the anthers and the stigma mature at different times. This outbreeding device is`,
      verify: { kind: "value", inputs: {  }, params: { q: "dichogamy" } },
      options: [
        { key: "A", text: t`dichogamy`, correct: true, value: "dichogamy" },
        { key: "B", text: t`herkogamy`, correct: false, misconceptionId: "C08-M1", value: "herkogamy" },
        { key: "C", text: t`self-incompatibility`, correct: false, misconceptionId: "C08-M2", value: "self_incompatibility" },
        { key: "D", text: t`dioecy`, correct: false, misconceptionId: "C08-M3", value: "dioecy" },
      ],
      solution: {
        steps: [
          t`Different times of ripening.`,
          t`Dichogamy.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q3(4)" },
      stem: t`A physical barrier between the anthers and the stigma of a flower, preventing self-pollination, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "herkogamy" } },
      options: [
        { key: "A", text: t`dichogamy`, correct: false, misconceptionId: "C08-M4", value: "dichogamy" },
        { key: "B", text: t`cleistogamy`, correct: false, misconceptionId: "C08-M5", value: "cleistogamy" },
        { key: "C", text: t`unisexuality`, correct: false, misconceptionId: "C08-M6", value: "unisexuality" },
        { key: "D", text: t`herkogamy`, correct: true, value: "herkogamy" },
      ],
      solution: {
        steps: [
          t`A barrier in space between anther and stigma.`,
          t`Herkogamy.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(1)" },
      stem: t`The part of the gynoecium that decides whether a pollen grain is compatible is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "recognise" } },
      options: [
        { key: "A", text: t`ovary`, correct: false, misconceptionId: "C08-M7", value: "ovary" },
        { key: "B", text: t`ovule`, correct: false, misconceptionId: "C08-M8", value: "ovule" },
        { key: "C", text: t`filiform apparatus`, correct: false, misconceptionId: "C08-M9", value: "filiform_apparatus" },
        { key: "D", text: t`stigma`, correct: true, value: "stigma" },
      ],
      solution: {
        steps: [
          t`Compatibility is checked before a tube grows.`,
          t`The stigma recognises compatible pollen.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q3(3)" },
      stem: t`Self-incompatibility means that`,
      verify: { kind: "value", inputs: {  }, params: { q: "incompatible" } },
      options: [
        { key: "A", text: t`the anthers and stigma are kept apart`, correct: false, misconceptionId: "C08-M11", value: "position_gap" },
        { key: "B", text: t`the flower makes no pollen`, correct: false, misconceptionId: "C08-M12", value: "no_pollen" },
        { key: "C", text: t`pollen from the same plant cannot fertilize it, a genetic block`, correct: true, value: "genetic_block" },
        { key: "D", text: t`the anthers and stigma ripen at different times`, correct: false, misconceptionId: "C08-M10", value: "time_gap" },
      ],
      solution: {
        steps: [
          t`The plant's own pollen fails genetically.`,
          t`Self-incompatibility.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q3(4)" },
      stem: t`Papaya and mulberry plants bear only male or only female flowers. This prevents self-pollination by`,
      verify: { kind: "value", inputs: {  }, params: { q: "papaya" } },
      options: [
        { key: "A", text: t`cleistogamy`, correct: false, misconceptionId: "C08-M15", value: "cleistogamy" },
        { key: "B", text: t`dioecy (unisexual plants)`, correct: true, value: "dioecy" },
        { key: "C", text: t`dichogamy`, correct: false, misconceptionId: "C08-M13", value: "dichogamy" },
        { key: "D", text: t`herkogamy`, correct: false, misconceptionId: "C08-M14", value: "herkogamy" },
      ],
      solution: {
        steps: [
          t`Male and female flowers on separate plants.`,
          t`Dioecy.`,
        ],
      },
    },
  ],
};
