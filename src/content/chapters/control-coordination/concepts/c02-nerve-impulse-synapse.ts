import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A nerve impulse is electrical, yet two neurons never touch. How does the signal cross the gap?`,
    reveal: t`Chemically: the first neuron releases a neurotransmitter that drifts across the gap and excites the next one.`,
  },
  explanation: {
    intuition: [
      t`A resting fibre is **polarised**: positive outside, negative inside.`,
      t`A stimulus reverses this: an **action potential**.`,
      t`Neurons meet at a **synapse** with a narrow cleft.`,
    ],
    formal: [
      {
        title: "The impulse",
        points: [
          t`At rest: more $\ce{Na+}$ outside, more $\ce{K+}$ inside; the $\ce{Na+}$–$\ce{K+}$ pump keeps it so.`,
          t`Stimulus: $\ce{Na+}$ channels open and $\ce{Na+}$ rushes **in**: **depolarization**.`,
          t`$\ce{K+}$ moving out restores the resting state: **repolarization**.`,
        ],
      },
      {
        title: "The synapse",
        points: [
          t`The impulse opens $\ce{Ca^{2+}}$ channels; $\ce{Ca^{2+}}$ enters the end bulb.`,
          t`Vesicles release a transmitter such as **acetylcholine** by **exocytosis**.`,
          t`It binds receptors on the next neuron; cholinesterase then destroys it.`,
        ],
      },
    ],
    worked: {
      prompt: t`A drug blocks cholinesterase. What happens at the synapse?`,
      steps: [
        t`Acetylcholine is not broken down.`,
        t`It keeps stimulating the next neuron.`,
      ],
      answer: t`Continuous stimulation`,
    },
    visualSpec: t`A synapse: end bulb with vesicles, the cleft, receptors on the next neuron.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks ADH.",
      remediation: "ADH is a hormone.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks acetyl CoA.",
      remediation: "Acetyl CoA is in respiration.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks inositol.",
      remediation: "Inositol is a messenger.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Says more inside.",
      remediation: t`$\ce{K+}$ is more inside.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Says equal.",
      remediation: "The fibre is polarised.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Says absent.",
      remediation: t`$\ce{Na+}$ is present.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Says $\ce{K+}$ in.`,
      remediation: t`$\ce{K+}$ moves out later.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Says $\ce{Na+}$ out.`,
      remediation: t`$\ce{Na+}$ rushes in.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: t`Says $\ce{Cl-}$ in.`,
      remediation: t`$\ce{Na+}$ causes depolarization.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks endocytosis.",
      remediation: "Endocytosis takes material in.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks diffusion.",
      remediation: "Vesicles fuse with the membrane.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks osmosis.",
      remediation: "Osmosis moves water.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: t`Picks $\ce{Na+}$.`,
      remediation: "Calcium triggers release.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: t`Picks $\ce{K+}$.`,
      remediation: "Calcium triggers release.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: t`Picks $\ce{Cl-}$.`,
      remediation: "Calcium triggers release.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(2)" },
      stem: t`Which of these is a neurotransmitter?`,
      verify: { kind: "value", inputs: {  }, params: { q: "transmitter" } },
      options: [
        { key: "A", text: t`Acetylcholine`, correct: true, value: "acetylcholine_t" },
        { key: "B", text: t`ADH`, correct: false, misconceptionId: "C02-M1", value: "adh_t" },
        { key: "C", text: t`Acetyl CoA`, correct: false, misconceptionId: "C02-M2", value: "acetyl_coa_t" },
        { key: "D", text: t`Inositol`, correct: false, misconceptionId: "C02-M3", value: "inositol_t" },
      ],
      solution: {
        steps: [
          t`Released at nerve endings.`,
          t`Acetylcholine.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2026 Q. 5" },
      stem: t`In a resting (polarised) nerve fibre, $\ce{Na+}$ ions are`,
      verify: { kind: "value", inputs: {  }, params: { q: "resting" } },
      options: [
        { key: "A", text: t`more concentrated inside the fibre`, correct: false, misconceptionId: "C02-M4", value: "more_inside" },
        { key: "B", text: t`equal on both sides`, correct: false, misconceptionId: "C02-M5", value: "equal_both" },
        { key: "C", text: t`absent`, correct: false, misconceptionId: "C02-M6", value: "absent_ions" },
        { key: "D", text: t`more concentrated outside the fibre`, correct: true, value: "more_outside" },
      ],
      solution: {
        steps: [
          t`Positive outside at rest.`,
          t`More outside.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q7(1)" },
      stem: t`A stimulus depolarizes a nerve fibre because`,
      verify: { kind: "value", inputs: {  }, params: { q: "depolarize" } },
      options: [
        { key: "A", text: t`$\ce{Cl-}$ ions rush into the fibre`, correct: false, misconceptionId: "C02-M9", value: "cl_in" },
        { key: "B", text: t`$\ce{Na+}$ ions rush into the fibre`, correct: true, value: "na_in" },
        { key: "C", text: t`$\ce{K+}$ ions rush into the fibre`, correct: false, misconceptionId: "C02-M7", value: "k_in" },
        { key: "D", text: t`$\ce{Na+}$ ions rush out of the fibre`, correct: false, misconceptionId: "C02-M8", value: "na_out" },
      ],
      solution: {
        steps: [
          t`Sodium channels open.`,
          t`$\ce{Na+}$ rushes in.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q7(3)" },
      stem: t`Synaptic vesicles release their neurotransmitter into the cleft by`,
      verify: { kind: "value", inputs: {  }, params: { q: "release" } },
      options: [
        { key: "A", text: t`osmosis`, correct: false, misconceptionId: "C02-M12", value: "osmosis_r" },
        { key: "B", text: t`exocytosis`, correct: true, value: "exocytosis_r" },
        { key: "C", text: t`endocytosis`, correct: false, misconceptionId: "C02-M10", value: "endocytosis_r" },
        { key: "D", text: t`simple diffusion`, correct: false, misconceptionId: "C02-M11", value: "diffusion_r" },
      ],
      solution: {
        steps: [
          t`Vesicles fuse with the membrane.`,
          t`Exocytosis.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q7(3)" },
      stem: t`At the axon end bulb, the release of neurotransmitter is triggered by`,
      verify: { kind: "value", inputs: {  }, params: { q: "calcium" } },
      options: [
        { key: "A", text: t`entry of $\ce{Cl-}$ ions`, correct: false, misconceptionId: "C02-M15", value: "chloride_in" },
        { key: "B", text: t`entry of $\ce{Ca^{2+}}$ ions`, correct: true, value: "calcium_in" },
        { key: "C", text: t`entry of $\ce{Na+}$ ions`, correct: false, misconceptionId: "C02-M13", value: "sodium_in" },
        { key: "D", text: t`exit of $\ce{K+}$ ions`, correct: false, misconceptionId: "C02-M14", value: "potassium_out" },
      ],
      solution: {
        steps: [
          t`Calcium channels open.`,
          t`$\ce{Ca^{2+}}$ enters.`,
        ],
      },
    },
  ],
};
