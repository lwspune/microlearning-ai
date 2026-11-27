import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Cut a starfish any way through its centre and the halves match. Cut a dog, and only one cut works. Why does that matter?`,
    reveal: t`Symmetry, with germ layers and body cavity, is one of the basic plans biologists use to group animals.`,
  },
  explanation: {
    intuition: [
      t`Animals are grouped by their **body plan**.`,
      t`Key features: symmetry, germ layers, body cavity.`,
      t`These sort the phyla from simple to complex.`,
    ],
    formal: [
      {
        title: "Symmetry",
        points: [
          t`**Asymmetry**: no plane gives similar halves (sponges).`,
          t`**Radial**: any plane through the central axis (jelly fish).`,
          t`**Bilateral**: only one plane, giving left and right halves (most animals).`,
        ],
      },
      {
        title: "Layers and cavity",
        points: [
          t`**Diploblastic**: ectoderm and endoderm, with mesoglea between (cnidarians); a **blind sac** with one opening.`,
          t`**Triploblastic**: three germ layers.`,
          t`**Pseudocoelomate**: mesoderm in patches, as in *Ascaris*; acoelomates (flatworms) have no cavity.`,
        ],
      },
    ],
    worked: {
      prompt: t`An earthworm can be cut into matching halves by only one plane. What symmetry is that?`,
      steps: [
        t`One plane gives left and right halves.`,
        t`That is bilateral symmetry.`,
      ],
      answer: t`Bilateral`,
    },
    visualSpec: t`Three outlines: an asymmetrical sponge, a radial jelly fish, a bilateral worm with its one plane.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Says radial.",
      remediation: "No plane gives matching halves.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Says bilateral.",
      remediation: "Sponges have no plane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Says biradial.",
      remediation: "Sponges have no plane.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Says asymmetry.",
      remediation: "Any central plane works.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Says bilateral.",
      remediation: "Many planes work.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Says spherical.",
      remediation: "It is a disc.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says mesoglea.",
      remediation: "That is cnidarians.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says endoderm broken.",
      remediation: "Mesoderm is broken.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says no cavity.",
      remediation: "It has a pseudocoel.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says three.",
      remediation: "That is triploblastic.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says one.",
      remediation: "Cnidarians have two.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says none.",
      remediation: "All animals have layers.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says tube in tube.",
      remediation: "That has two openings.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says cell aggregate.",
      remediation: "That is sponges.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says segmented.",
      remediation: "That is annelids.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q6" },
      stem: t`An irregular, branched sponge shows`,
      verify: { kind: "value", inputs: {  }, params: { q: "sponge" } },
      options: [
        { key: "A", text: t`asymmetry`, correct: true, value: "asymmetry_s" },
        { key: "B", text: t`radial symmetry`, correct: false, misconceptionId: "C01-M1", value: "radial_s" },
        { key: "C", text: t`bilateral symmetry`, correct: false, misconceptionId: "C01-M2", value: "bilateral_s" },
        { key: "D", text: t`biradial symmetry`, correct: false, misconceptionId: "C01-M3", value: "biradial_s" },
      ],
      solution: {
        steps: [
          t`No matching halves.`,
          t`Asymmetry.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q6" },
      stem: t`A jelly fish, which any plane through its central axis divides into similar halves, shows`,
      verify: { kind: "value", inputs: {  }, params: { q: "jelly" } },
      options: [
        { key: "A", text: t`radial symmetry`, correct: true, value: "radial_s" },
        { key: "B", text: t`asymmetry`, correct: false, misconceptionId: "C01-M4", value: "asymmetry_s" },
        { key: "C", text: t`bilateral symmetry`, correct: false, misconceptionId: "C01-M5", value: "bilateral_s" },
        { key: "D", text: t`spherical symmetry`, correct: false, misconceptionId: "C01-M6", value: "spherical_s" },
      ],
      solution: {
        steps: [
          t`Any central plane.`,
          t`Radial symmetry.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q1(C)" },
      stem: t`In *Ascaris*,`,
      verify: { kind: "value", inputs: {  }, params: { q: "ascaris" } },
      options: [
        { key: "A", text: t`endoderm is a discontinuous layer`, correct: false, misconceptionId: "C01-M8", value: "endoderm_broken" },
        { key: "B", text: t`a body cavity is absent`, correct: false, misconceptionId: "C01-M9", value: "no_cavity" },
        { key: "C", text: t`mesoderm is present in patches`, correct: true, value: "mesoderm_patches" },
        { key: "D", text: t`mesoglea is present`, correct: false, misconceptionId: "C01-M7", value: "mesoglea_present" },
      ],
      solution: {
        steps: [
          t`A pseudocoel.`,
          t`Mesoderm in patches.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(F)" },
      stem: t`Cnidarians are diploblastic: their body wall has`,
      verify: { kind: "value", inputs: {  }, params: { q: "diplo" } },
      options: [
        { key: "A", text: t`two germ layers, ectoderm and endoderm`, correct: true, value: "two_layers" },
        { key: "B", text: t`three germ layers`, correct: false, misconceptionId: "C01-M10", value: "three_layers" },
        { key: "C", text: t`one germ layer`, correct: false, misconceptionId: "C01-M11", value: "one_layer" },
        { key: "D", text: t`no germ layers`, correct: false, misconceptionId: "C01-M12", value: "no_layers" },
      ],
      solution: {
        steps: [
          t`Two layers.`,
          t`Ectoderm and endoderm.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/kingdom-animalia-11-bio/Ex Q2(F)" },
      stem: t`Cnidarians and ctenophorans share a body plan that is`,
      verify: { kind: "value", inputs: {  }, params: { q: "blind" } },
      options: [
        { key: "A", text: t`a blind sac with one opening`, correct: true, value: "blind_sac" },
        { key: "B", text: t`a tube within a tube`, correct: false, misconceptionId: "C01-M13", value: "tube_in_tube" },
        { key: "C", text: t`a loose aggregate of cells`, correct: false, misconceptionId: "C01-M14", value: "cell_aggregate" },
        { key: "D", text: t`segmented`, correct: false, misconceptionId: "C01-M15", value: "segmented_b" },
      ],
      solution: {
        steps: [
          t`One opening.`,
          t`Blind sac.`,
        ],
      },
    },
  ],
};
