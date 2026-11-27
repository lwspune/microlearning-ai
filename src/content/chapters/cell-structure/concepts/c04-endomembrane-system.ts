import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A pancreas cell sends out insulin. Where is it made, and how does it reach the outside?`,
    reveal: t`Made on ribosomes of the rough ER, packed in vesicles, finished in the Golgi, then shipped out.`,
  },
  explanation: {
    intuition: [
      t`The **endomembrane system** is a set of linked membranes.`,
      t`ER, Golgi complex, lysosomes and vacuoles.`,
      t`They make, modify and move materials.`,
    ],
    formal: [
      {
        title: "ER and Golgi",
        points: [
          t`**Rough ER**: ribosomes on the surface; makes **proteins** (e.g. insulin).`,
          t`**Smooth ER**: no ribosomes; makes **lipids**, detoxifies, stores $\ce{Ca^{2+}}$.`,
          t`**Golgi**: proteins enter at the **cis** face, leave from the **trans** face.`,
        ],
      },
      {
        title: "Lysosomes",
        points: [
          t`Bud from the Golgi with digestive enzymes.`,
          t`**Autophagy**: they digest worn-out parts of the cell.`,
          t`Route: rough ER → vesicle → Golgi → lysosome.`,
        ],
      },
    ],
    worked: {
      prompt: t`Liver cells detoxify drugs. Which organelle is plentiful in them?`,
      steps: [
        t`Detoxification is a smooth ER job.`,
        t`So smooth ER is abundant.`,
      ],
      answer: t`Smooth ER`,
    },
    visualSpec: t`An arrow path from rough ER through a vesicle to the Golgi stack and out to a lysosome.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Starts at smooth ER.",
      remediation: "Proteins start on rough ER.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Starts at the nucleus.",
      remediation: "Proteins are made on ribosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Starts at the Golgi.",
      remediation: "The Golgi comes second.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says no ribosomes.",
      remediation: "That is smooth ER.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says DNA.",
      remediation: "ER has no DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says double membrane.",
      remediation: "ER has one membrane.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks trans.",
      remediation: "Trans is the shipping face.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks lumen.",
      remediation: "The lumen is inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks nuclear face.",
      remediation: "It is called cis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says proteins.",
      remediation: "That is ribosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says ATP.",
      remediation: "That is mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says starch.",
      remediation: "That is plastids.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says proteins.",
      remediation: "That is rough ER.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says ATP.",
      remediation: "That is mitochondria.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says ribosomes.",
      remediation: "That is the nucleolus.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q5" },
      stem: t`A protein reaches a lysosome by the route`,
      verify: { kind: "value", inputs: {  }, params: { q: "flow" } },
      options: [
        { key: "A", text: t`nucleus → Golgi → rough ER`, correct: false, misconceptionId: "C04-M2", value: "nucleus_start" },
        { key: "B", text: t`Golgi → rough ER → vesicle`, correct: false, misconceptionId: "C04-M3", value: "golgi_start" },
        { key: "C", text: t`rough ER → transport vesicle → Golgi → lysosome`, correct: true, value: "rer_golgi_lysosome" },
        { key: "D", text: t`smooth ER → nucleus → lysosome`, correct: false, misconceptionId: "C04-M1", value: "ser_start" },
      ],
      solution: {
        steps: [
          t`Ribosomes first.`,
          t`Rough ER → vesicle → Golgi → lysosome.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q3(A)" },
      stem: t`Rough ER differs from smooth ER in having`,
      verify: { kind: "value", inputs: {  }, params: { q: "rough" } },
      options: [
        { key: "A", text: t`no ribosomes`, correct: false, misconceptionId: "C04-M4", value: "no_ribosomes" },
        { key: "B", text: t`DNA inside`, correct: false, misconceptionId: "C04-M5", value: "dna_inside" },
        { key: "C", text: t`a double membrane`, correct: false, misconceptionId: "C04-M6", value: "double_membrane" },
        { key: "D", text: t`ribosomes on its outer surface`, correct: true, value: "ribosomes_studded" },
      ],
      solution: {
        steps: [
          t`Studded surface.`,
          t`Ribosomes on its surface.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q4(C)" },
      stem: t`The forming, 'receiving' face of the Golgi complex is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "cis" } },
      options: [
        { key: "A", text: t`lumen`, correct: false, misconceptionId: "C04-M8", value: "lumen_g" },
        { key: "B", text: t`nuclear face`, correct: false, misconceptionId: "C04-M9", value: "nuclear_face" },
        { key: "C", text: t`cis face`, correct: true, value: "cis_face" },
        { key: "D", text: t`trans face`, correct: false, misconceptionId: "C04-M7", value: "trans_face" },
      ],
      solution: {
        steps: [
          t`Receiving face.`,
          t`Cis face.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q5" },
      stem: t`Lysosomes carry out autophagy, which means they`,
      verify: { kind: "value", inputs: {  }, params: { q: "lysosome" } },
      options: [
        { key: "A", text: t`make proteins`, correct: false, misconceptionId: "C04-M10", value: "makes_proteins" },
        { key: "B", text: t`make ATP`, correct: false, misconceptionId: "C04-M11", value: "makes_atp" },
        { key: "C", text: t`store starch`, correct: false, misconceptionId: "C04-M12", value: "stores_starch" },
        { key: "D", text: t`digest worn-out parts of the cell`, correct: true, value: "autophagy_l" },
      ],
      solution: {
        steps: [
          t`Self-digestion.`,
          t`Digest worn-out parts.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cell-structure-11-bio/Ex Q3(A)" },
      stem: t`Smooth ER, abundant in steroid-secreting cells, mainly makes`,
      verify: { kind: "value", inputs: {  }, params: { q: "smooth" } },
      options: [
        { key: "A", text: t`ribosomes`, correct: false, misconceptionId: "C04-M15", value: "ribosomes_s" },
        { key: "B", text: t`lipids`, correct: true, value: "lipids_s" },
        { key: "C", text: t`proteins`, correct: false, misconceptionId: "C04-M13", value: "proteins_s" },
        { key: "D", text: t`ATP`, correct: false, misconceptionId: "C04-M14", value: "atp_s" },
      ],
      solution: {
        steps: [
          t`Steroid cells.`,
          t`Lipids.`,
        ],
      },
    },
  ],
};
