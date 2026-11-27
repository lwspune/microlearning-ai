import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A single nerve cell can run from your spine to your big toe, over a metre long. How does one cell carry a message that far?`,
    reveal: t`Along its axon, a long thin fibre wrapped in fatty myelin, like an insulated wire.`,
  },
  explanation: {
    intuition: [
      t`A **neuron** has a cell body (cyton), short **dendrons** and one long **axon**.`,
      t`Dendrons bring impulses **to** the cyton; the axon carries them **away**.`,
      t`**Glial cells** support and insulate neurons.`,
    ],
    formal: [
      {
        title: "Glial cells",
        points: [
          t`**Schwann cells** make myelin in the **PNS**; satellite cells support peripheral neurons.`,
          t`**Oligodendrocytes** make myelin in the **CNS**; astrocytes and microglia also live there.`,
          t`Gaps in the myelin are **nodes of Ranvier**: the impulse jumps between them, so it is **faster**.`,
        ],
      },
      {
        title: "Groups of neurons",
        points: [
          t`Cell bodies outside the CNS: a **ganglion**.`,
          t`Cell bodies inside the CNS: a **nucleus**.`,
          t`Bundles of fibres: a **nerve** (PNS) or **tract** (CNS).`,
        ],
      },
    ],
    worked: {
      prompt: t`A cluster of sensory cell bodies lies beside the spinal cord. What is it called?`,
      steps: [
        t`It is outside the CNS.`,
        t`Cell bodies outside the CNS form a ganglion.`,
      ],
      answer: t`Dorsal root ganglion`,
    },
    visualSpec: t`A multipolar neuron: dendrons, cyton, a myelinated axon with nodes, and end bulbs.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks axon.",
      remediation: "The axon carries impulses away.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks nodes of Ranvier.",
      remediation: "Nodes are gaps in myelin.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks neurilemma.",
      remediation: "Neurilemma is a covering.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks oligodendrocytes.",
      remediation: "They work in the CNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks satellite cells.",
      remediation: "They support, not myelinate.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks astrocytes.",
      remediation: "Astrocytes are in the CNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Picks tract.",
      remediation: "A tract is a bundle in the CNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Picks nucleus.",
      remediation: "A nucleus is inside the CNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Picks nerve.",
      remediation: "A nerve is a bundle of fibres.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks Schwann cells.",
      remediation: "Schwann cells are in the PNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks microglia.",
      remediation: "Microglia are defence cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks satellite cells.",
      remediation: "They are in the PNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says slower.",
      remediation: "Jumping skips the myelinated stretches.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says the same speed.",
      remediation: "Jumping saves time.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says it stops.",
      remediation: "It jumps on from node to node.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(1)" },
      stem: t`Which part of a neuron receives the impulse?`,
      verify: { kind: "value", inputs: {  }, params: { q: "receives" } },
      options: [
        { key: "A", text: t`Dendron`, correct: true, value: "dendron_p" },
        { key: "B", text: t`Axon`, correct: false, misconceptionId: "C01-M1", value: "axon_p" },
        { key: "C", text: t`Nodes of Ranvier`, correct: false, misconceptionId: "C01-M2", value: "nodes_ranvier" },
        { key: "D", text: t`Neurilemma`, correct: false, misconceptionId: "C01-M3", value: "neurilemma_p" },
      ],
      solution: {
        steps: [
          t`Short branches bring impulses in.`,
          t`Dendron.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(3)" },
      stem: t`The supporting cells that form the myelin sheath in the PNS are`,
      verify: { kind: "value", inputs: {  }, params: { q: "pns" } },
      options: [
        { key: "A", text: t`Schwann cells`, correct: true, value: "schwann_g" },
        { key: "B", text: t`oligodendrocytes`, correct: false, misconceptionId: "C01-M4", value: "oligodendrocytes_g" },
        { key: "C", text: t`satellite cells`, correct: false, misconceptionId: "C01-M5", value: "satellite_g" },
        { key: "D", text: t`astrocytes`, correct: false, misconceptionId: "C01-M6", value: "astrocytes_g" },
      ],
      solution: {
        steps: [
          t`Myelin-makers of the PNS.`,
          t`Schwann cells.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q1(4)" },
      stem: t`A collection of neuron cell bodies outside the CNS is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "outside" } },
      options: [
        { key: "A", text: t`nucleus`, correct: false, misconceptionId: "C01-M8", value: "nucleus_n" },
        { key: "B", text: t`nerve`, correct: false, misconceptionId: "C01-M9", value: "nerve_n" },
        { key: "C", text: t`ganglion`, correct: true, value: "ganglion_n" },
        { key: "D", text: t`tract`, correct: false, misconceptionId: "C01-M7", value: "tract_n" },
      ],
      solution: {
        steps: [
          t`Cell bodies outside the CNS.`,
          t`Ganglion.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q6(1)" },
      stem: t`The cells that form the myelin sheath around axons in the CNS are`,
      verify: { kind: "value", inputs: {  }, params: { q: "cns" } },
      options: [
        { key: "A", text: t`oligodendrocytes`, correct: true, value: "oligodendrocytes_g" },
        { key: "B", text: t`Schwann cells`, correct: false, misconceptionId: "C01-M10", value: "schwann_g" },
        { key: "C", text: t`microglia`, correct: false, misconceptionId: "C01-M11", value: "microglia_g" },
        { key: "D", text: t`satellite cells`, correct: false, misconceptionId: "C01-M12", value: "satellite_g" },
      ],
      solution: {
        steps: [
          t`Myelin-makers of the CNS.`,
          t`Oligodendrocytes.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`In a myelinated fibre the impulse jumps from one node of Ranvier to the next. So, compared with a non-myelinated fibre, it travels`,
      verify: { kind: "value", inputs: {  }, params: { q: "saltatory" } },
      options: [
        { key: "A", text: t`faster`, correct: true, value: "faster_i" },
        { key: "B", text: t`slower`, correct: false, misconceptionId: "C01-M13", value: "slower_i" },
        { key: "C", text: t`at the same speed`, correct: false, misconceptionId: "C01-M14", value: "same_speed" },
        { key: "D", text: t`only up to the first node`, correct: false, misconceptionId: "C01-M15", value: "stops_at_nodes" },
      ],
      solution: {
        steps: [
          t`Saltatory conduction.`,
          t`Faster.`,
        ],
      },
    },
  ],
};
