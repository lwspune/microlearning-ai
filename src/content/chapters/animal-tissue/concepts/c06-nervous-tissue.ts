import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`You touch a hot plate and your hand jerks back before you think. What carries the message so fast?`,
    reveal: t`Neurons: nerve cells that generate and conduct impulses for quick communication.`,
  },
  explanation: {
    intuition: [
      t`**Nervous tissue** is neurons plus supporting **neuroglial** cells.`,
      t`Neurons generate and conduct **impulses**.`,
      t`Different neurons carry impulses in, process them, and carry them out.`,
    ],
    formal: [
      {
        title: "A multipolar neuron",
        points: [
          t`Star-shaped **cyton** with **neuroplasm**, a central nucleus and **Nissl's granules**.`,
          t`**Only one axon**; all other processes are **dendrons**, whose **dendrites** carry impulses to the cyton.`,
          t`The axon starts at the **axon hillock** and ends in a **telodendron**.`,
        ],
      },
      {
        title: "Axon coverings and routes",
        points: [
          t`A fatty **myelin sheath**, covered by the **neurilemma**, wraps the axon.`,
          t`Gaps in the sheath are **nodes of Ranvier**.`,
          t`**Afferent** neurons carry to the CNS; **interneurons** process; **efferent** neurons carry to effectors.`,
        ],
      },
    ],
    worked: {
      prompt: t`In the hot-plate response, which neuron carries the impulse to the arm muscles?`,
      steps: [
        t`The CNS sends the command out.`,
        t`Neurons carrying impulses out to effectors are efferent.`,
      ],
      answer: t`Efferent (motor) neuron`,
    },
    visualSpec: t`A multipolar neuron: star-shaped cyton, short branched dendrons, one long axon with myelin and nodes.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks muscular.",
      remediation: "Muscles act, but neurons signal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks connective.",
      remediation: "It binds; it does not signal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks epithelial.",
      remediation: "It lines; it does not signal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks efferent.",
      remediation: "Efferent carries away from the CNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks interneuron.",
      remediation: "Interneurons work inside the CNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks neuroglia.",
      remediation: "Neuroglia support; they do not conduct.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks two.",
      remediation: "A multipolar neuron has one axon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks many.",
      remediation: "The many processes are dendrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks none.",
      remediation: "The cyton gives out exactly one axon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks axon hillock.",
      remediation: "That is where the axon starts.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks telodendron.",
      remediation: "That is the axon's end.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks dendrites.",
      remediation: "Those branch from dendrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks axolemma.",
      remediation: "That bounds the axon itself.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks sarcolemma.",
      remediation: "That covers a muscle fibre.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks perichondrium.",
      remediation: "That sheaths cartilage.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(D)" },
      stem: t`Sharad touched a hot plate and pulled his hand away quickly. The tissue that brought about this quick response is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hot_plate" } },
      options: [
        { key: "A", text: t`muscular tissue`, correct: false, misconceptionId: "C06-M1", value: "muscular_tissue" },
        { key: "B", text: t`connective tissue`, correct: false, misconceptionId: "C06-M2", value: "connective_tissue" },
        { key: "C", text: t`epithelial tissue`, correct: false, misconceptionId: "C06-M3", value: "epithelial_tissue" },
        { key: "D", text: t`nervous tissue`, correct: true, value: "nervous_tissue" },
      ],
      solution: {
        steps: [
          t`Neurons conduct impulses.`,
          t`Nervous tissue.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(D)" },
      stem: t`The heat stimulus is carried from the skin to the CNS by`,
      verify: { kind: "value", inputs: {  }, params: { q: "afferent" } },
      options: [
        { key: "A", text: t`an afferent (sensory) neuron`, correct: true, value: "afferent_n" },
        { key: "B", text: t`an efferent (motor) neuron`, correct: false, misconceptionId: "C06-M4", value: "efferent_n" },
        { key: "C", text: t`an interneuron`, correct: false, misconceptionId: "C06-M5", value: "interneuron_n" },
        { key: "D", text: t`neuroglial cells`, correct: false, misconceptionId: "C06-M6", value: "neuroglia_c" },
      ],
      solution: {
        steps: [
          t`Skin to CNS.`,
          t`Afferent neuron.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(C)" },
      stem: t`The cyton of a multipolar neuron gives out`,
      verify: { kind: "value", inputs: {  }, params: { q: "axons" } },
      options: [
        { key: "A", text: t`only one axon; the rest are dendrons`, correct: true, value: "one_axon" },
        { key: "B", text: t`two axons`, correct: false, misconceptionId: "C06-M7", value: "two_axons" },
        { key: "C", text: t`many axons`, correct: false, misconceptionId: "C06-M8", value: "many_axons" },
        { key: "D", text: t`no axon, only dendrons`, correct: false, misconceptionId: "C06-M9", value: "no_axon" },
      ],
      solution: {
        steps: [
          t`One axon, many dendrons.`,
          t`Only one axon.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(C)" },
      stem: t`The places along an axon where the myelin sheath is absent are the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ranvier" } },
      options: [
        { key: "A", text: t`dendrites`, correct: false, misconceptionId: "C06-M12", value: "dendrites_s" },
        { key: "B", text: t`nodes of Ranvier`, correct: true, value: "nodes_ranvier" },
        { key: "C", text: t`axon hillocks`, correct: false, misconceptionId: "C06-M10", value: "axon_hillock" },
        { key: "D", text: t`telodendria`, correct: false, misconceptionId: "C06-M11", value: "telodendron_s" },
      ],
      solution: {
        steps: [
          t`Gaps in myelin.`,
          t`Nodes of Ranvier.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q5" },
      stem: t`The outer covering of the myelin sheath around an axon is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "neurilemma" } },
      options: [
        { key: "A", text: t`neurilemma`, correct: true, value: "neurilemma_s" },
        { key: "B", text: t`axolemma`, correct: false, misconceptionId: "C06-M13", value: "axolemma_s" },
        { key: "C", text: t`sarcolemma`, correct: false, misconceptionId: "C06-M14", value: "sarcolemma_s" },
        { key: "D", text: t`perichondrium`, correct: false, misconceptionId: "C06-M15", value: "perichondrium_s" },
      ],
      solution: {
        steps: [
          t`Outer myelin covering.`,
          t`Neurilemma.`,
        ],
      },
    },
  ],
};
