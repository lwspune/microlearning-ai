import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Poke a *Hydra* anywhere and its whole body shrinks. Poke a flatworm and its head turns. What is different?`,
    reveal: t`*Hydra* has a scattered net of nerves; the flatworm has a brain and nerve cords, the first step towards a central system.`,
  },
  explanation: {
    intuition: [
      t`Nervous systems grow more centralised from simple to complex animals.`,
      t`Simple animals have scattered nerve cells.`,
      t`Complex animals have a brain and nerve cords.`,
    ],
    formal: [
      {
        title: "Simple to complex",
        points: [
          t`*Hydra*: a **nerve net** with no centre.`,
          t`*Planaria* (flatworm): cerebral ganglia and two **ventral** nerve cords joined like a **ladder**.`,
          t`Earthworm: a **ganglionated** ventral nerve chain.`,
        ],
      },
      {
        title: "Humans",
        points: [
          t`**CNS**: brain and spinal cord.`,
          t`**PNS**: cranial and spinal nerves.`,
          t`The autonomic system is part of the PNS.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is *Planaria* the most primitive animal with a CNS?`,
      steps: [
        t`It has cerebral ganglia as a brain.`,
        t`Its nerve cords form a central system.`,
      ],
      answer: t`It has a brain and nerve cords`,
    },
    visualSpec: t`Three outlines: Hydra's net, Planaria's ladder, the earthworm's chain of ganglia.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks ladder.",
      remediation: "Ladder type is in flatworms.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks ganglionated chain.",
      remediation: "That is in earthworms.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks brain and cord.",
      remediation: "That is in vertebrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks nerve net.",
      remediation: "Nerve net is in *Hydra*.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks ganglionated chain.",
      remediation: "That is in earthworms.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks brain and cord.",
      remediation: "That is in vertebrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks dorsal.",
      remediation: "The cords are ventral.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks the sides.",
      remediation: "The cords are ventral.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says no cords.",
      remediation: "It has two nerve cords.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks nerve net.",
      remediation: "That is in *Hydra*.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks ladder.",
      remediation: "That is in flatworms.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks brain and cord.",
      remediation: "That is in vertebrates.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks cranial and spinal nerves.",
      remediation: "Those form the PNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks brain alone.",
      remediation: "The spinal cord is also CNS.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks autonomic nerves.",
      remediation: "Those are in the PNS.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q3" },
      stem: t`*Hydra* has a nervous system of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "hydra" } },
      options: [
        { key: "A", text: t`ganglionated chain type`, correct: false, misconceptionId: "C03-M2", value: "ganglion_chain" },
        { key: "B", text: t`brain and spinal cord type`, correct: false, misconceptionId: "C03-M3", value: "brain_cord" },
        { key: "C", text: t`nerve net type`, correct: true, value: "nerve_net" },
        { key: "D", text: t`ladder type`, correct: false, misconceptionId: "C03-M1", value: "ladder_type" },
      ],
      solution: {
        steps: [
          t`No centre; scattered cells.`,
          t`Nerve net.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q3" },
      stem: t`A flatworm has a nervous system of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "flatworm" } },
      options: [
        { key: "A", text: t`ganglionated chain type`, correct: false, misconceptionId: "C03-M5", value: "ganglion_chain" },
        { key: "B", text: t`brain and spinal cord type`, correct: false, misconceptionId: "C03-M6", value: "brain_cord" },
        { key: "C", text: t`ladder type`, correct: true, value: "ladder_type" },
        { key: "D", text: t`nerve net type`, correct: false, misconceptionId: "C03-M4", value: "nerve_net" },
      ],
      solution: {
        steps: [
          t`Cords joined across.`,
          t`Ladder type.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2024 Q. 29" },
      stem: t`In *Planaria*, the central nervous system lies on the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ventral" } },
      options: [
        { key: "A", text: t`dorsal side`, correct: false, misconceptionId: "C03-M7", value: "dorsal_side" },
        { key: "B", text: t`sides only`, correct: false, misconceptionId: "C03-M8", value: "lateral_side" },
        { key: "C", text: t`nowhere: it has no nerve cords`, correct: false, misconceptionId: "C03-M9", value: "no_cords" },
        { key: "D", text: t`ventral side`, correct: true, value: "ventral_side" },
      ],
      solution: {
        steps: [
          t`Nerve cords below the gut.`,
          t`Ventral side.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q3" },
      stem: t`An earthworm has a nervous system of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "earthworm" } },
      options: [
        { key: "A", text: t`ladder type`, correct: false, misconceptionId: "C03-M11", value: "ladder_type" },
        { key: "B", text: t`brain and spinal cord type`, correct: false, misconceptionId: "C03-M12", value: "brain_cord" },
        { key: "C", text: t`ganglionated chain type`, correct: true, value: "ganglion_chain" },
        { key: "D", text: t`nerve net type`, correct: false, misconceptionId: "C03-M10", value: "nerve_net" },
      ],
      solution: {
        steps: [
          t`Ganglia on a ventral chain.`,
          t`Ganglionated chain.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`In humans, the central nervous system is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "cns" } },
      options: [
        { key: "A", text: t`the brain and spinal cord`, correct: true, value: "brain_spinal" },
        { key: "B", text: t`the cranial and spinal nerves`, correct: false, misconceptionId: "C03-M13", value: "cranial_spinal_nerves" },
        { key: "C", text: t`the brain alone`, correct: false, misconceptionId: "C03-M14", value: "brain_only" },
        { key: "D", text: t`the autonomic nerves`, correct: false, misconceptionId: "C03-M15", value: "autonomic_only" },
      ],
      solution: {
        steps: [
          t`The central part.`,
          t`Brain and spinal cord.`,
        ],
      },
    },
  ],
};
