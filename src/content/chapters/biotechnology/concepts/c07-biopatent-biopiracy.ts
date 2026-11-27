import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A foreign company patents a use of neem that Indian villagers have known for centuries. Is that fair?`,
    reveal: t`No: this is biopiracy. It claims traditional knowledge and resources without permission or sharing the benefits.`,
  },
  explanation: {
    intuition: [
      t`A **patent** is a right granted by the government to an inventor.`,
      t`A **biopatent** covers a biological invention.`,
      t`**Bioethics** asks what is right in using living things.`,
    ],
    formal: [
      {
        title: "Biopatents",
        points: [
          t`Granted for GM strains, cell lines, DNA sequences, processes and products.`,
          t`The holder can stop others making or selling the invention for a time.`,
          t`A patent has a grant, a specification and claims.`,
        ],
      },
      {
        title: "Biopiracy",
        points: [
          t`Unauthorised use of biological resources and traditional knowledge.`,
          t`Rich-biodiversity **developing** nations are the usual victims.`,
          t`Cases: **neem** (fungicidal property), **basmati** rice, **turmeric** (patent cancelled after CSIR's challenge).`,
        ],
      },
    ],
    worked: {
      prompt: t`Why was the turmeric patent cancelled?`,
      steps: [
        t`Turmeric's healing use was old Indian knowledge.`,
        t`CSIR showed this, so it was not new.`,
      ],
      answer: t`It was not a new invention`,
    },
    visualSpec: t`A map with arrows from a biodiversity-rich country's plants to a patent office abroad.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Says own invention.",
      remediation: "That is a patent.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says conservation.",
      remediation: "Biopiracy takes, not protects.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says gene therapy.",
      remediation: "That is medicine.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says upheld.",
      remediation: "It was cancelled.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says given to India.",
      remediation: "It was cancelled.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says never filed.",
      remediation: "It was granted, then cancelled.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Says sweetness.",
      remediation: "The claim was fungicidal.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Says timber.",
      remediation: "The claim was fungicidal.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Says dye.",
      remediation: "The claim was fungicidal.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says a wild species.",
      remediation: "Natural species are not inventions.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says folk knowledge.",
      remediation: "That is what biopiracy steals.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says biodiversity.",
      remediation: "Biodiversity cannot be patented.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says developed nations.",
      remediation: "They are poor in biodiversity.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says neither.",
      remediation: "Developing nations are rich.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says all equally.",
      remediation: "Biodiversity is uneven.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(1)" },
      stem: t`Biopiracy is`,
      verify: { kind: "value", inputs: {  }, params: { q: "biopiracy" } },
      options: [
        { key: "A", text: t`conserving biodiversity`, correct: false, misconceptionId: "C07-M2", value: "conservation_b" },
        { key: "B", text: t`a form of gene therapy`, correct: false, misconceptionId: "C07-M3", value: "gene_therapy_b" },
        { key: "C", text: t`taking biological resources and traditional knowledge without permission or benefit-sharing`, correct: true, value: "unauthorised_use" },
        { key: "D", text: t`patenting one's own invention`, correct: false, misconceptionId: "C07-M1", value: "own_invention" },
      ],
      solution: {
        steps: [
          t`Taking without consent.`,
          t`Unauthorised use.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(1)" },
      stem: t`The US patent on the healing properties of turmeric (haldi) was`,
      verify: { kind: "value", inputs: {  }, params: { q: "turmeric" } },
      options: [
        { key: "A", text: t`upheld`, correct: false, misconceptionId: "C07-M4", value: "upheld_p" },
        { key: "B", text: t`transferred to India`, correct: false, misconceptionId: "C07-M5", value: "given_india" },
        { key: "C", text: t`never applied for`, correct: false, misconceptionId: "C07-M6", value: "never_filed" },
        { key: "D", text: t`cancelled after CSIR sought re-examination`, correct: true, value: "cancelled_csir" },
      ],
      solution: {
        steps: [
          t`CSIR challenged it.`,
          t`Cancelled.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(1)" },
      stem: t`Patents were sought abroad on which property of neem?`,
      verify: { kind: "value", inputs: {  }, params: { q: "neem" } },
      options: [
        { key: "A", text: t`Dye colour`, correct: false, misconceptionId: "C07-M9", value: "dye_p" },
        { key: "B", text: t`Fungicidal`, correct: true, value: "fungicidal_p" },
        { key: "C", text: t`Sweetness`, correct: false, misconceptionId: "C07-M7", value: "sweetness_p" },
        { key: "D", text: t`Timber strength`, correct: false, misconceptionId: "C07-M8", value: "timber_p" },
      ],
      solution: {
        steps: [
          t`Kills fungi.`,
          t`Fungicidal.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(1)" },
      stem: t`A biopatent can be granted for`,
      verify: { kind: "value", inputs: {  }, params: { q: "biopatent" } },
      options: [
        { key: "A", text: t`a genetically modified strain or a DNA sequence`, correct: true, value: "gm_strains" },
        { key: "B", text: t`a wild species as found in nature`, correct: false, misconceptionId: "C07-M10", value: "wild_species" },
        { key: "C", text: t`traditional folk knowledge`, correct: false, misconceptionId: "C07-M11", value: "folk_knowledge" },
        { key: "D", text: t`a whole country's biodiversity`, correct: false, misconceptionId: "C07-M12", value: "whole_biodiversity" },
      ],
      solution: {
        steps: [
          t`An invention.`,
          t`A GM strain or DNA sequence.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q4(1)" },
      stem: t`Nations rich in biodiversity and traditional knowledge, and so exposed to biopiracy, are mostly`,
      verify: { kind: "value", inputs: {  }, params: { q: "rich" } },
      options: [
        { key: "A", text: t`developed, industrial nations`, correct: false, misconceptionId: "C07-M13", value: "developed_n" },
        { key: "B", text: t`neither`, correct: false, misconceptionId: "C07-M14", value: "neither_n" },
        { key: "C", text: t`all nations equally`, correct: false, misconceptionId: "C07-M15", value: "equal_n" },
        { key: "D", text: t`developing nations`, correct: true, value: "developing_n" },
      ],
      solution: {
        steps: [
          t`Tropical, biodiverse.`,
          t`Developing nations.`,
        ],
      },
    },
  ],
};
