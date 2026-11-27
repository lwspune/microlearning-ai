import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`In a cockroach, cut a leg and colourless blood seeps from the body cavity. In you, it spurts from a vessel. Why the difference?`,
    reveal: t`The cockroach's blood is not kept in vessels: it bathes the organs. Yours stays in a closed network under pressure.`,
  },
  explanation: {
    intuition: [
      t`Single cells move materials by **cyclosis**, the streaming of cytoplasm.`,
      t`Larger animals need a circulatory system.`,
      t`It can be open or closed.`,
    ],
    formal: [
      {
        title: "Open and closed",
        points: [
          t`**Open**: blood flows through body cavities (haemocoels); arthropods such as cockroach and butterfly.`,
          t`**Closed**: blood stays in vessels; annelids and vertebrates.`,
          t`Closed is efficient: high pressure, and a pigment such as haemoglobin.`,
        ],
      },
      {
        title: "Single and double",
        points: [
          t`Fishes: **single** circulation, blood passes the heart once per round.`,
          t`Birds and mammals: **double**, twice per round.`,
          t`Once to the lungs (pulmonary), once to the body (systemic).`,
        ],
      },
    ],
    worked: {
      prompt: t`An earthworm and a butterfly: which has closed circulation?`,
      steps: [
        t`Earthworms are annelids with blood vessels.`,
        t`Butterflies are arthropods with haemocoels.`,
      ],
      answer: t`The earthworm`,
    },
    visualSpec: t`Two loops: an open body cavity of an insect beside the closed vessels of a vertebrate.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks diffusion.",
      remediation: "Diffusion is of molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks circulation.",
      remediation: "Circulation needs a system.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks thrombosis.",
      remediation: "Thrombosis is a clot.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks earthworm.",
      remediation: "Annelids have closed circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks rabbit.",
      remediation: "Vertebrates have closed circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks shark.",
      remediation: "Vertebrates have closed circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks closed.",
      remediation: "Arthropods have open circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks lymphatic.",
      remediation: "That is part of a system.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks double.",
      remediation: "Double is in birds and mammals.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says it bathes organs.",
      remediation: "That is open circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says no pigment.",
      remediation: "Closed has haemoglobin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says slow flow.",
      remediation: "Closed flow is fast.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says once.",
      remediation: "Once is single circulation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says three times.",
      remediation: "It is twice.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Counts each chamber.",
      remediation: "It passes the heart twice.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(6)" },
      stem: t`The streaming movement of cytoplasm in unicellular organisms is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cyclosis" } },
      options: [
        { key: "A", text: t`thrombosis`, correct: false, misconceptionId: "C05-M3", value: "thrombosis_c" },
        { key: "B", text: t`cyclosis`, correct: true, value: "cyclosis_c" },
        { key: "C", text: t`diffusion`, correct: false, misconceptionId: "C05-M1", value: "diffusion_c" },
        { key: "D", text: t`circulation`, correct: false, misconceptionId: "C05-M2", value: "circulation_c" },
      ],
      solution: {
        steps: [
          t`Streaming of cytoplasm.`,
          t`Cyclosis.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(7)" },
      stem: t`Which of these animals does NOT have closed circulation?`,
      verify: { kind: "value", inputs: {  }, params: { q: "closed" } },
      options: [
        { key: "A", text: t`Earthworm`, correct: false, misconceptionId: "C05-M4", value: "earthworm_a" },
        { key: "B", text: t`Rabbit`, correct: false, misconceptionId: "C05-M5", value: "rabbit_a" },
        { key: "C", text: t`Shark`, correct: false, misconceptionId: "C05-M6", value: "shark_a" },
        { key: "D", text: t`Butterfly`, correct: true, value: "butterfly_a" },
      ],
      solution: {
        steps: [
          t`Arthropods have open circulation.`,
          t`Butterfly.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(11)" },
      stem: t`The cockroach has a circulatory system that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cockroach" } },
      options: [
        { key: "A", text: t`open`, correct: true, value: "open_c" },
        { key: "B", text: t`closed`, correct: false, misconceptionId: "C05-M7", value: "closed_c" },
        { key: "C", text: t`lymphatic`, correct: false, misconceptionId: "C05-M8", value: "lymphatic_c" },
        { key: "D", text: t`double`, correct: false, misconceptionId: "C05-M9", value: "double_c" },
      ],
      solution: {
        steps: [
          t`Blood in haemocoels.`,
          t`Open.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q5(1)" },
      stem: t`Closed circulation is more efficient than open circulation because`,
      verify: { kind: "value", inputs: {  }, params: { q: "efficient" } },
      options: [
        { key: "A", text: t`it has no respiratory pigment`, correct: false, misconceptionId: "C05-M11", value: "no_pigment" },
        { key: "B", text: t`blood flows slowly`, correct: false, misconceptionId: "C05-M12", value: "slow_flow" },
        { key: "C", text: t`blood flows in vessels under high pressure`, correct: true, value: "high_pressure_c" },
        { key: "D", text: t`blood bathes the organs directly`, correct: false, misconceptionId: "C05-M10", value: "bathes_organs" },
      ],
      solution: {
        steps: [
          t`Blood in vessels under pressure.`,
          t`High pressure.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`In the double circulation of birds and mammals, blood passes through the heart, in one round of the body,`,
      verify: { kind: "value", inputs: {  }, params: { q: "double" } },
      options: [
        { key: "A", text: t`twice`, correct: true, value: "twice_c" },
        { key: "B", text: t`once`, correct: false, misconceptionId: "C05-M13", value: "once_c" },
        { key: "C", text: t`three times`, correct: false, misconceptionId: "C05-M14", value: "thrice_c" },
        { key: "D", text: t`four times, once per chamber`, correct: false, misconceptionId: "C05-M15", value: "four_times_c" },
      ],
      solution: {
        steps: [
          t`Lungs, then body.`,
          t`Twice.`,
        ],
      },
    },
  ],
};
