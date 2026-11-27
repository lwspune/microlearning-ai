import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Why can an old person's bone crack from a small jerk?`,
    reveal: t`In osteoporosis bones lose mass and become porous and brittle.`,
  },
  explanation: {
    intuition: [
      t`**Osteoporosis** makes bones brittle.`,
      t`**Gout** puts uric acid salts in joints.`,
      t`A **sprain** injures ligaments; a **splint** keeps a fracture still.`,
    ],
    formal: [
      {
        title: "Osteoporosis",
        points: [
          t`Bone resorption outpaces formation, so bones become porous and brittle.`,
          t`Causes: ageing, less estrogen after menopause, low calcium, and vitamin D deficiency.`,
          t`Excess parathormone draws calcium out of bone; calcium and exercise from youth prevent it.`,
        ],
      },
      {
        title: "Gout, sprain and fracture",
        points: [
          t`**Gout**: excess uric acid deposits in joints as **sodium urate**, causing inflammation and pain.`,
          t`A **sprain** stretches or tears the **ligaments** of a joint; every movement pulls on them.`,
          t`A splint keeps a fractured bone still, so its broken ends stay in line and heal.`,
        ],
      },
    ],
    worked: {
      prompt: t`Moses fractures his leg and a passer-by ties a wooden plank to it. Was that needed?`,
      steps: [
        t`Muscles pulling on the bone would shift the broken ends.`,
        t`The plank acts as a splint and keeps the leg still.`,
      ],
      answer: t`Yes`,
    },
    visualSpec: t`Two bone blocks side by side: dense with small spaces, and porous with large spaces, labelled normal and osteoporosis.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says more estrogen.",
      remediation: "Estrogen falls after menopause.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says calcium-rich diet.",
      remediation: "Low calcium causes it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says regular exercise.",
      remediation: "Exercise helps prevent it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks gout.",
      remediation: "Gout comes from uric acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks rheumatoid arthritis.",
      remediation: "It is autoimmune.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks Gull's disease.",
      remediation: "It is from too little thyroid hormone.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks osteoporosis.",
      remediation: "That is bone loss, not uric acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks rheumatoid arthritis.",
      remediation: "Uric acid points to gout.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks muscle fatigue.",
      remediation: "Fatigue is lactic acid, not uric acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks bone.",
      remediation: "A broken bone is a fracture.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks cartilage.",
      remediation: "A sprain injures ligaments.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks muscle.",
      remediation: "A sprain injures ligaments.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks plasmolysis.",
      remediation: "Plasmolysis is in plant cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks electrolysis.",
      remediation: "That is splitting by electricity.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks photolysis.",
      remediation: "That is splitting by light.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q3(B)" },
      stem: t`Ragini, aged 50, gets hair-line cracks in her feet from minor jerks. One cause of her osteoporosis is`,
      verify: { kind: "value", inputs: {  }, params: { q: "menopause" } },
      options: [
        { key: "A", text: t`increasing estrogen secretion after menopause`, correct: false, misconceptionId: "C06-M1", value: "more_estrogen" },
        { key: "B", text: t`a calcium-rich diet`, correct: false, misconceptionId: "C06-M2", value: "more_calcium" },
        { key: "C", text: t`regular exercise`, correct: false, misconceptionId: "C06-M3", value: "regular_exercise" },
        { key: "D", text: t`decreasing estrogen secretion after menopause`, correct: true, value: "less_estrogen" },
      ],
      solution: {
        steps: [
          t`Less estrogen.`,
          t`Bone loss after menopause.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(G)" },
      stem: t`Hypersecretion of parathormone can cause`,
      verify: { kind: "value", inputs: {  }, params: { q: "parathormone" } },
      options: [
        { key: "A", text: t`osteoporosis`, correct: true, value: "osteoporosis_t" },
        { key: "B", text: t`gout`, correct: false, misconceptionId: "C06-M4", value: "gout_t" },
        { key: "C", text: t`rheumatoid arthritis`, correct: false, misconceptionId: "C06-M5", value: "rheumatoid_arthritis" },
        { key: "D", text: t`Gull's disease`, correct: false, misconceptionId: "C06-M6", value: "gulls_disease" },
      ],
      solution: {
        steps: [
          t`Calcium drawn from bone.`,
          t`Osteoporosis.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q3(E)" },
      stem: t`A blood report shows uric acid at 9.2, above the normal range of 2.5 to 7.0. The likely disorder is`,
      verify: { kind: "value", inputs: {  }, params: { q: "report" } },
      options: [
        { key: "A", text: t`gout`, correct: true, value: "gout_r" },
        { key: "B", text: t`osteoporosis`, correct: false, misconceptionId: "C06-M7", value: "osteoporosis_r" },
        { key: "C", text: t`rheumatoid arthritis`, correct: false, misconceptionId: "C06-M8", value: "rheumatoid_r" },
        { key: "D", text: t`muscle fatigue`, correct: false, misconceptionId: "C06-M9", value: "fatigue_r" },
      ],
      solution: {
        steps: [
          t`High uric acid.`,
          t`Gout.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q2(E)" },
      stem: t`A sprain is an injury to the`,
      verify: { kind: "value", inputs: {  }, params: { q: "sprain" } },
      options: [
        { key: "A", text: t`muscle`, correct: false, misconceptionId: "C06-M12", value: "muscle_t" },
        { key: "B", text: t`ligaments of a joint`, correct: true, value: "ligaments_t" },
        { key: "C", text: t`bone`, correct: false, misconceptionId: "C06-M10", value: "bone_t" },
        { key: "D", text: t`articular cartilage`, correct: false, misconceptionId: "C06-M11", value: "cartilage_t" },
      ],
      solution: {
        steps: [
          t`Twisted joint.`,
          t`Ligaments.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(E)" },
      stem: t`Swelling of a sprained foot goes down when soaked in hot water with much common salt. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "salt" } },
      options: [
        { key: "A", text: t`due to osmosis`, correct: true, value: "osmosis_t" },
        { key: "B", text: t`due to plasmolysis`, correct: false, misconceptionId: "C06-M13", value: "plasmolysis_t" },
        { key: "C", text: t`due to electrolysis`, correct: false, misconceptionId: "C06-M14", value: "electrolysis_t" },
        { key: "D", text: t`due to photolysis`, correct: false, misconceptionId: "C06-M15", value: "photolysis_t" },
      ],
      solution: {
        steps: [
          t`Salt water is hypertonic.`,
          t`Osmosis draws water out.`,
        ],
      },
    },
  ],
};
