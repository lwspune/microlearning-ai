import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`It is very hard to swat a cockroach. Why does it notice your hand so fast?`,
    reveal: t`Its compound eyes are very sensitive to even the slightest movement.`,
  },
  explanation: {
    intuition: [
      t`The cockroach nervous system is **ventral, solid and ganglionated**.`,
      t`A **ganglion** is a knot-like mass of nervous tissue.`,
      t`The compound eye trades sharpness for motion sense.`,
    ],
    formal: [
      {
        title: "Central nervous system",
        points: [
          t`**Supra-oesophageal ganglia**, above the oesophagus, form the **brain**.`,
          t`The **sub-oesophageal ganglion** lies below; connectives join them in a nerve ring.`,
          t`The ventral nerve cord has nine ganglia: three thoracic, six abdominal.`,
        ],
      },
      {
        title: "ANS and the eye",
        points: [
          t`ANS ganglia: frontal (pharynx), hypocerebral (oesophagus), ingluvial (crop), ventricular (gizzard).`,
          t`Each **compound eye** has about 2000 hexagonal ommatidia.`,
          t`It gives a **mosaic** image: more sensitivity, less resolution.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which ganglion lies on the crop?`,
      steps: [
        t`Four ANS ganglia lie on the gut.`,
        t`The ingluvial (visceral) ganglion lies on the crop.`,
      ],
      answer: t`Ingluvial ganglion`,
    },
    visualSpec: t`A nerve ring around the oesophagus and a double ventral cord with nine pairs of ganglia.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Says sub-oesophageal.",
      remediation: "It lies below the oesophagus.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Says hypocerebral.",
      remediation: "It is an ANS ganglion.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says thoracic.",
      remediation: "It is in the nerve cord.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says dorsal hollow.",
      remediation: "That is the vertebrate plan.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says ventral hollow.",
      remediation: "The cord is solid.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says no ganglia.",
      remediation: "It is ganglionated.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says one per segment.",
      remediation: "Some segments have none.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Counts thorax only.",
      remediation: "Six abdominal ganglia too.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Counts abdomen only.",
      remediation: "Three thoracic ganglia too.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says ingluvial.",
      remediation: "That one is on the crop.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says frontal.",
      remediation: "That one is above the pharynx.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says hypocerebral.",
      remediation: "That one is on the oesophagus.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says single sharp image.",
      remediation: "Ommatidia give a mosaic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says simple unit.",
      remediation: "It has about 2000 ommatidia.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says sharper, less motion.",
      remediation: "It is the other way round.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q1(E)" },
      stem: t`____ is also called the brain of cockroach.`,
      verify: { kind: "value", inputs: {  }, params: { q: "brain" } },
      options: [
        { key: "A", text: t`Thoracic ganglion`, correct: false, misconceptionId: "C05-M3", value: "thoracic_g" },
        { key: "B", text: t`Supra-oesophageal ganglion`, correct: true, value: "supra_oesophageal" },
        { key: "C", text: t`Sub-oesophageal ganglion`, correct: false, misconceptionId: "C05-M1", value: "sub_oesophageal" },
        { key: "D", text: t`Hypocerebral ganglion`, correct: false, misconceptionId: "C05-M2", value: "hypocerebral_g" },
      ],
      solution: {
        steps: [
          t`Above the oesophagus.`,
          t`Supra-oesophageal ganglion.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(C)" },
      stem: t`The nervous system of the cockroach is`,
      verify: { kind: "value", inputs: {  }, params: { q: "nature" } },
      options: [
        { key: "A", text: t`dorsal and hollow`, correct: false, misconceptionId: "C05-M4", value: "dorsal_hollow" },
        { key: "B", text: t`ventral and hollow`, correct: false, misconceptionId: "C05-M5", value: "ventral_hollow" },
        { key: "C", text: t`ventral, without ganglia`, correct: false, misconceptionId: "C05-M6", value: "no_ganglia" },
        { key: "D", text: t`ventral, solid and ganglionated`, correct: true, value: "ventral_solid" },
      ],
      solution: {
        steps: [
          t`Ventral cord, solid.`,
          t`Ventral, solid, ganglionated.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q4(B)" },
      stem: t`The ventral nerve cord of the cockroach bears`,
      verify: { kind: "value", inputs: {  }, params: { q: "cord" } },
      options: [
        { key: "A", text: t`nine ganglia: three thoracic and six abdominal`, correct: true, value: "nine_ganglia" },
        { key: "B", text: t`thirteen ganglia: one in each segment`, correct: false, misconceptionId: "C05-M7", value: "thirteen_ganglia" },
        { key: "C", text: t`three ganglia, all thoracic`, correct: false, misconceptionId: "C05-M8", value: "three_ganglia" },
        { key: "D", text: t`six ganglia, all abdominal`, correct: false, misconceptionId: "C05-M9", value: "six_ganglia" },
      ],
      solution: {
        steps: [
          t`Three plus six.`,
          t`Nine ganglia.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(C)" },
      stem: t`The ganglion of the autonomous nervous system that lies on the gizzard is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ventricular" } },
      options: [
        { key: "A", text: t`frontal ganglion`, correct: false, misconceptionId: "C05-M11", value: "frontal_g" },
        { key: "B", text: t`hypocerebral ganglion`, correct: false, misconceptionId: "C05-M12", value: "hypocerebral_g" },
        { key: "C", text: t`ventricular ganglion`, correct: true, value: "ventricular_g" },
        { key: "D", text: t`ingluvial ganglion`, correct: false, misconceptionId: "C05-M10", value: "ingluvial_g" },
      ],
      solution: {
        steps: [
          t`On the gizzard.`,
          t`Ventricular ganglion.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q3(E)" },
      stem: t`Compared with the human eye, the compound eye of the cockroach`,
      verify: { kind: "value", inputs: {  }, params: { q: "eye" } },
      options: [
        { key: "A", text: t`gives a mosaic image but detects slight movement better`, correct: true, value: "mosaic_movement" },
        { key: "B", text: t`forms one complete, sharp image`, correct: false, misconceptionId: "C05-M13", value: "single_sharp" },
        { key: "C", text: t`is a single simple unit`, correct: false, misconceptionId: "C05-M14", value: "simple_unit" },
        { key: "D", text: t`gives a sharper image but misses slight movement`, correct: false, misconceptionId: "C05-M15", value: "sharp_less_motion" },
      ],
      solution: {
        steps: [
          t`Mosaic, motion-sensitive.`,
          t`Less resolution, more sensitivity.`,
        ],
      },
    },
  ],
};
