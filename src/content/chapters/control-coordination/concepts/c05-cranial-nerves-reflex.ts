import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`You pull your hand from a hot pan before you even feel the pain. How can you act before you know?`,
    reveal: t`The message goes to the spinal cord and straight back to the muscle: a reflex. The brain hears about it a moment later.`,
  },
  explanation: {
    intuition: [
      t`The PNS has **12 pairs of cranial nerves** and 31 pairs of spinal nerves.`,
      t`Cranial nerves are sensory, motor or mixed.`,
      t`A **reflex** is a quick, automatic, involuntary response.`,
    ],
    formal: [
      {
        title: "Cranial nerves",
        points: [
          t`**Sensory**: I (olfactory), II (optic), VIII (auditory).`,
          t`**Motor**: III (oculomotor), IV, VI, XI, XII.`,
          t`**Mixed**: V, VII (facial), IX, X.`,
        ],
      },
      {
        title: "Reflexes",
        points: [
          t`Path: receptor → sensory neuron → **spinal cord** → motor neuron → effector.`,
          t`**Unconditioned** reflexes are inborn, such as blinking.`,
          t`**Conditioned** reflexes are learnt from experience.`,
        ],
      },
    ],
    worked: {
      prompt: t`A baby blinks when something comes close to its eyes. Which kind of reflex is this?`,
      steps: [
        t`It needs no learning.`,
        t`Inborn reflexes are unconditioned.`,
      ],
      answer: t`Unconditioned`,
    },
    visualSpec: t`A reflex arc from a pin-pricked finger through the spinal cord to the arm muscle.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks I.",
      remediation: "I is sensory (smell).",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks II.",
      remediation: "II is sensory (sight).",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks VIII.",
      remediation: "VIII is sensory (hearing).",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks sensory.",
      remediation: "VII also has motor fibres.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks motor.",
      remediation: "VII also has sensory fibres.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks autonomic.",
      remediation: "VII is a mixed cranial nerve.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks facial.",
      remediation: "Facial is VII.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks abducens.",
      remediation: "Abducens is VI.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks glossopharyngeal.",
      remediation: "Glossopharyngeal is IX.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks cerebrum.",
      remediation: "Reflexes skip the cerebrum.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks cerebellum.",
      remediation: "The cerebellum keeps balance.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks pituitary.",
      remediation: "The pituitary is a gland.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says inborn.",
      remediation: "It was learnt from experience.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says voluntary.",
      remediation: "It is automatic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says hormonal.",
      remediation: "It is a nerve reflex.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2025 Q. 1(ii)" },
      stem: t`Which cranial nerve is NOT sensory?`,
      verify: { kind: "value", inputs: {  }, params: { q: "not_sensory" } },
      options: [
        { key: "A", text: t`VIII`, correct: false, misconceptionId: "C05-M3", value: "nerve_viii" },
        { key: "B", text: t`III`, correct: true, value: "nerve_iii" },
        { key: "C", text: t`I`, correct: false, misconceptionId: "C05-M1", value: "nerve_i" },
        { key: "D", text: t`II`, correct: false, misconceptionId: "C05-M2", value: "nerve_ii" },
      ],
      solution: {
        steps: [
          t`III is the oculomotor.`,
          t`III.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2024 Q. 24" },
      stem: t`The facial nerve (VII) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "facial" } },
      options: [
        { key: "A", text: t`sensory`, correct: false, misconceptionId: "C05-M4", value: "sensory_n" },
        { key: "B", text: t`motor`, correct: false, misconceptionId: "C05-M5", value: "motor_n" },
        { key: "C", text: t`autonomic only`, correct: false, misconceptionId: "C05-M6", value: "autonomic_n" },
        { key: "D", text: t`mixed`, correct: true, value: "mixed_n" },
      ],
      solution: {
        steps: [
          t`Both sensory and motor.`,
          t`Mixed.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2026 Q. 13" },
      stem: t`Cranial nerve VIII is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "eighth" } },
      options: [
        { key: "A", text: t`auditory (vestibulocochlear) nerve`, correct: true, value: "auditory_n" },
        { key: "B", text: t`facial nerve`, correct: false, misconceptionId: "C05-M7", value: "facial_n" },
        { key: "C", text: t`abducens nerve`, correct: false, misconceptionId: "C05-M8", value: "abducens_n" },
        { key: "D", text: t`glossopharyngeal nerve`, correct: false, misconceptionId: "C05-M9", value: "glossopharyngeal_n" },
      ],
      solution: {
        steps: [
          t`Hearing and balance.`,
          t`Auditory nerve.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q7(4)" },
      stem: t`The main centre for most reflex actions is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "centre" } },
      options: [
        { key: "A", text: t`cerebellum`, correct: false, misconceptionId: "C05-M11", value: "cerebellum_b" },
        { key: "B", text: t`pituitary`, correct: false, misconceptionId: "C05-M12", value: "pituitary_b" },
        { key: "C", text: t`spinal cord`, correct: true, value: "spinal_cord" },
        { key: "D", text: t`cerebrum`, correct: false, misconceptionId: "C05-M10", value: "cerebrum_b" },
      ],
      solution: {
        steps: [
          t`Most reflexes run through it.`,
          t`Spinal cord.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2024 Q. 18" },
      stem: t`Your mouth waters at the smell of a dish you have eaten before. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "conditioned" } },
      options: [
        { key: "A", text: t`a conditioned reflex`, correct: true, value: "conditioned_r" },
        { key: "B", text: t`an unconditioned (inborn) reflex`, correct: false, misconceptionId: "C05-M13", value: "unconditioned_r" },
        { key: "C", text: t`a voluntary action`, correct: false, misconceptionId: "C05-M14", value: "voluntary_r" },
        { key: "D", text: t`a hormonal response`, correct: false, misconceptionId: "C05-M15", value: "hormonal_r" },
      ],
      solution: {
        steps: [
          t`Learnt from experience.`,
          t`Conditioned reflex.`,
        ],
      },
    },
  ],
};
