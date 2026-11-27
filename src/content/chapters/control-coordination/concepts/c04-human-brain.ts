import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A rider falls and hits his head, but his brain is unhurt. What protected it inside the skull?`,
    reveal: t`Three membranes, the meninges, and a cushion of cerebrospinal fluid between them.`,
  },
  explanation: {
    intuition: [
      t`The brain lies in the cranium, inside three **meninges**.`,
      t`**CSF** cushions it and brings nutrients.`,
      t`It has a forebrain, midbrain and hindbrain.`,
    ],
    formal: [
      {
        title: "Coverings",
        points: [
          t`Dura mater (outer), arachnoid (middle), **pia mater** (inner, touching the brain).`,
          t`**Choroid plexuses** in the ventricles secrete CSF.`,
          t`CSF absorbs shocks.`,
        ],
      },
      {
        title: "Parts",
        points: [
          t`Forebrain: cerebrum, its hemispheres joined by the **corpus callosum**; hypothalamus.`,
          t`Midbrain: corpora quadrigemina (visual and auditory reflexes), red nucleus (posture).`,
          t`Hindbrain: **cerebellum** (balance; white matter as arbor vitae), **medulla** (heart beat, breathing).`,
        ],
      },
    ],
    worked: {
      prompt: t`A person walks unsteadily and cannot keep balance. Which part is likely damaged?`,
      steps: [
        t`Balance and posture are coordinated in the hindbrain.`,
        t`The cerebellum keeps balance.`,
      ],
      answer: t`Cerebellum`,
    },
    visualSpec: t`A longitudinal section of the brain with cerebrum, corpus callosum, cerebellum and medulla labelled.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks cranium.",
      remediation: "The cranium is bone outside the meninges.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks dura mater.",
      remediation: "Dura mater is outermost.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks arachnoid.",
      remediation: "Arachnoid is in the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks dura mater.",
      remediation: "Dura mater is a covering.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks cerebellum.",
      remediation: "The cerebellum keeps balance.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks pituitary.",
      remediation: "The pituitary makes hormones.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks cerebrum.",
      remediation: "The cerebrum thinks and moves.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks medulla.",
      remediation: "The medulla runs vital functions.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks hypothalamus.",
      remediation: "It controls homeostasis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says memory.",
      remediation: "Memory is in the cerebrum.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says vision.",
      remediation: "Vision is in the occipital lobe.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says balance.",
      remediation: "Balance is the cerebellum.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks the cerebellum's tree.",
      remediation: "That is arbor vitae.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks a pons link.",
      remediation: "It joins the hemispheres.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says it covers the brain.",
      remediation: "The meninges cover it.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(12)" },
      stem: t`Which is in direct contact with the human brain?`,
      verify: { kind: "value", inputs: {  }, params: { q: "contact" } },
      options: [
        { key: "A", text: t`Dura mater`, correct: false, misconceptionId: "C04-M2", value: "dura_mater" },
        { key: "B", text: t`Arachnoid`, correct: false, misconceptionId: "C04-M3", value: "arachnoid_m" },
        { key: "C", text: t`Pia mater`, correct: true, value: "pia_mater" },
        { key: "D", text: t`Cranium`, correct: false, misconceptionId: "C04-M1", value: "cranium_b" },
      ],
      solution: {
        steps: [
          t`The innermost meninx.`,
          t`Pia mater.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2025 Q. 17" },
      stem: t`Cerebrospinal fluid is secreted by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "csf" } },
      options: [
        { key: "A", text: t`dura mater`, correct: false, misconceptionId: "C04-M4", value: "dura_mater" },
        { key: "B", text: t`cerebellum`, correct: false, misconceptionId: "C04-M5", value: "cerebellum_b" },
        { key: "C", text: t`pituitary gland`, correct: false, misconceptionId: "C04-M6", value: "pituitary_b" },
        { key: "D", text: t`choroid plexuses in the ventricles`, correct: true, value: "choroid_plexus" },
      ],
      solution: {
        steps: [
          t`In the brain's ventricles.`,
          t`Choroid plexuses.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2026 Q. 2(v)" },
      stem: t`The part of the brain that maintains body balance is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "balance" } },
      options: [
        { key: "A", text: t`medulla oblongata`, correct: false, misconceptionId: "C04-M8", value: "medulla_b" },
        { key: "B", text: t`hypothalamus`, correct: false, misconceptionId: "C04-M9", value: "hypothalamus_b" },
        { key: "C", text: t`cerebellum`, correct: true, value: "cerebellum_b" },
        { key: "D", text: t`cerebrum`, correct: false, misconceptionId: "C04-M7", value: "cerebrum_b" },
      ],
      solution: {
        steps: [
          t`Balance and posture.`,
          t`Cerebellum.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q5(2)" },
      stem: t`An injury to the medulla oblongata may prove fatal because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "medulla" } },
      options: [
        { key: "A", text: t`stores memory`, correct: false, misconceptionId: "C04-M10", value: "memory_centre" },
        { key: "B", text: t`controls vision`, correct: false, misconceptionId: "C04-M11", value: "vision_centre" },
        { key: "C", text: t`maintains balance`, correct: false, misconceptionId: "C04-M12", value: "balance_centre" },
        { key: "D", text: t`controls heart beat and breathing`, correct: true, value: "vital_centres" },
      ],
      solution: {
        steps: [
          t`Centres for heart and breathing.`,
          t`Vital functions.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2024 Q. 11" },
      stem: t`The corpus callosum`,
      verify: { kind: "value", inputs: {  }, params: { q: "callosum" } },
      options: [
        { key: "A", text: t`covers the brain`, correct: false, misconceptionId: "C04-M15", value: "brain_cover" },
        { key: "B", text: t`joins the two cerebral hemispheres`, correct: true, value: "joins_hemispheres" },
        { key: "C", text: t`is the tree-like white matter of the cerebellum`, correct: false, misconceptionId: "C04-M13", value: "cerebellum_tree" },
        { key: "D", text: t`joins the midbrain to the pons`, correct: false, misconceptionId: "C04-M14", value: "pons_link" },
      ],
      solution: {
        steps: [
          t`Band between hemispheres.`,
          t`Joins the two hemispheres.`,
        ],
      },
    },
  ],
};
