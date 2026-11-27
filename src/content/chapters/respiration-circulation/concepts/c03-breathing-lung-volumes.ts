import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Lungs have no muscles of their own. So how do they fill with air?`,
    reveal: t`The chest does the work: muscles enlarge the thorax, the pressure inside falls, and air is pushed in from outside.`,
  },
  explanation: {
    intuition: [
      t`**Inspiration** is active; quiet **expiration** is passive.`,
      t`The **diaphragm** separates the thoracic and abdominal cavities.`,
      t`Lung volumes measure how much air moves.`,
    ],
    formal: [
      {
        title: "Inspiration and expiration",
        points: [
          t`Inspiration: the diaphragm contracts and flattens; the external intercostals lift the ribs.`,
          t`The thorax enlarges, lung pressure falls, air flows in.`,
          t`Expiration: the muscles relax, the diaphragm domes up, air flows out.`,
        ],
      },
      {
        title: "Lung volumes",
        points: [
          t`**T.V.** about 500 ml; **I.R.V.** 2000–3000 ml extra in; **E.R.V.** extra out; **R.V.** always left.`,
          t`$\text{V.C.} = \text{T.V.} + \text{I.R.V.} + \text{E.R.V.}$`,
          t`Oxygen crosses **5** membranes from alveolus to haemoglobin: 2 + 2 + 1.`,
        ],
      },
    ],
    worked: {
      prompt: t`T.V. 500 ml, I.R.V. 2500 ml, E.R.V. 1000 ml. Find the vital capacity.`,
      steps: [
        t`$\text{V.C.} = 500 + 2500 + 1000$.`,
        t`R.V. is not part of V.C.`,
      ],
      answer: t`4000 ml`,
    },
    visualSpec: t`A spirometer trace with T.V., I.R.V., E.R.V. and R.V. marked.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Says it domes up.",
      remediation: "Doming up is expiration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Says it relaxes.",
      remediation: "It contracts in inspiration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Says no change.",
      remediation: "It moves down.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks abdominal muscles.",
      remediation: "They work in forced expiration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks jaw muscles.",
      remediation: "Jaws play no part.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks bronchial muscles.",
      remediation: "They control airway width.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks residual volume.",
      remediation: "R.V. stays after full expiration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks E.R.V.",
      remediation: "E.R.V. is extra air out.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks vital capacity.",
      remediation: "V.C. is the total of three volumes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Leaves out E.R.V.",
      remediation: "V.C. includes E.R.V.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Adds R.V.",
      remediation: "That is total lung capacity.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Leaves out T.V.",
      remediation: "V.C. includes T.V.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Counts each cell once.",
      remediation: "Each cell has two membranes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Gives 3.",
      remediation: "Count both sides of each cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Forgets the RBC membrane.",
      remediation: "The RBC membrane is the fifth.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2025 Q. 14" },
      stem: t`During inspiration, the diaphragm`,
      verify: { kind: "value", inputs: {  }, params: { q: "diaphragm" } },
      options: [
        { key: "A", text: t`relaxes and stays still`, correct: false, misconceptionId: "C03-M2", value: "relaxes_r" },
        { key: "B", text: t`does not change`, correct: false, misconceptionId: "C03-M3", value: "unchanged_r" },
        { key: "C", text: t`contracts, flattens and moves down`, correct: true, value: "flattens_down" },
        { key: "D", text: t`relaxes and domes upward`, correct: false, misconceptionId: "C03-M1", value: "domes_up" },
      ],
      solution: {
        steps: [
          t`The diaphragm contracts.`,
          t`It flattens and moves down.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(5)" },
      stem: t`When the external intercostal muscles contract, the muscle that contracts with them is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "intercostal" } },
      options: [
        { key: "A", text: t`jaw muscle`, correct: false, misconceptionId: "C03-M5", value: "jaw_muscles" },
        { key: "B", text: t`muscle of the bronchial walls`, correct: false, misconceptionId: "C03-M6", value: "bronchial_muscles" },
        { key: "C", text: t`diaphragm`, correct: true, value: "diaphragm_m" },
        { key: "D", text: t`internal abdominal muscle`, correct: false, misconceptionId: "C03-M4", value: "internal_abdominal" },
      ],
      solution: {
        steps: [
          t`They act together in inspiration.`,
          t`The diaphragm.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(4)" },
      stem: t`The maximum extra volume of air that can be inhaled after a normal breath (beyond T.V.) is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "irv" } },
      options: [
        { key: "A", text: t`residual volume`, correct: false, misconceptionId: "C03-M7", value: "residual_v" },
        { key: "B", text: t`expiratory reserve volume`, correct: false, misconceptionId: "C03-M8", value: "erv_v" },
        { key: "C", text: t`vital capacity`, correct: false, misconceptionId: "C03-M9", value: "vital_capacity_v" },
        { key: "D", text: t`inspiratory reserve volume`, correct: true, value: "irv_v" },
      ],
      solution: {
        steps: [
          t`Extra air in, beyond T.V.`,
          t`I.R.V.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`A person has T.V. = 500 ml, I.R.V. = 3000 ml, E.R.V. = 1100 ml and R.V. = 1200 ml. What is the vital capacity (in ml)?`,
      verify: { kind: "value", inputs: { t: "500", i: "3000", e: "1100", r: "1200" }, params: { q: "vc" } },
      options: [
        { key: "A", text: t`$5800$`, correct: false, misconceptionId: "C03-M11", value: "5800" },
        { key: "B", text: t`$4100$`, correct: false, misconceptionId: "C03-M12", value: "4100" },
        { key: "C", text: t`$4600$`, correct: true, value: "4600" },
        { key: "D", text: t`$3500$`, correct: false, misconceptionId: "C03-M10", value: "3500" },
      ],
      solution: {
        steps: [
          t`$\text{V.C.} = 500 + 3000 + 1100$.`,
          t`$4600$ ml.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(2)" },
      stem: t`What is the minimum number of plasma membranes oxygen crosses from alveolar air to haemoglobin in an RBC?`,
      verify: { kind: "value", inputs: {  }, params: { q: "membranes" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M13", value: "2" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C03-M14", value: "3" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C03-M15", value: "4" },
      ],
      solution: {
        steps: [
          t`2 alveolar + 2 capillary + 1 RBC.`,
          t`5.`,
        ],
      },
    },
  ],
};
