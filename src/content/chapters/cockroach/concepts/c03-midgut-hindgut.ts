import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Food reaches the cockroach's midgut already crushed. What happens to it there and after?`,
    reveal: t`The midgut digests and absorbs it; the hindgut takes back water and sends out the rest.`,
  },
  explanation: {
    intuition: [
      t`The alimentary canal is 6 to 7 cm long.`,
      t`It has three regions: foregut, midgut, hindgut.`,
      t`Digestion and absorption happen mainly in the midgut.`,
    ],
    formal: [
      {
        title: "Midgut (mesenteron)",
        points: [
          t`The **stomach** (ventriculus) is short and narrow, lined by glandular epithelium.`,
          t`It secretes digestive enzymes: the main site of digestion and absorption.`,
          t`The blind, tubular **hepatic caeca** also secrete enzymes.`,
        ],
      },
      {
        title: "Hindgut (proctodaeum)",
        points: [
          t`**Malpighian tubules** open near the junction of midgut and hindgut.`,
          t`Ileum, then **colon**, which reabsorbs water as needed.`,
          t`The **rectum** has six rectal pads that absorb water; the anus opens on segment 10.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the three parts of the hindgut in order.`,
      steps: [
        t`The hindgut starts after the Malpighian tubules join.`,
        t`Ileum, then colon, then rectum.`,
      ],
      answer: t`Ileum, colon, rectum`,
    },
    visualSpec: t`A tube in three colours: foregut, midgut with caeca, hindgut with Malpighian tubules.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Says foregut.",
      remediation: "The foregut ends with the gizzard.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Says hindgut.",
      remediation: "The hindgut is ileum, colon, rectum.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Says gizzard.",
      remediation: "The gizzard is foregut.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says crop.",
      remediation: "The crop only stores food.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says gizzard.",
      remediation: "The gizzard crushes and filters.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says rectum.",
      remediation: "The rectum absorbs water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says crop.",
      remediation: "The crop is in the foregut.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says rectum.",
      remediation: "They join near the midgut.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says hypopharynx.",
      remediation: "The salivary duct opens there.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says enzymes.",
      remediation: "The stomach and caeca secrete enzymes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says filter.",
      remediation: "The gizzard filters food.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says store.",
      remediation: "The crop stores food.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says no storage.",
      remediation: "The crop still stores food.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says no saliva.",
      remediation: "Saliva comes from salivary glands.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says no effect.",
      remediation: "The stomach does not crush food.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q4(D)" },
      stem: t`The mesenteron of the cockroach is its`,
      verify: { kind: "value", inputs: {  }, params: { q: "mesenteron" } },
      options: [
        { key: "A", text: t`hindgut`, correct: false, misconceptionId: "C03-M2", value: "hindgut_t" },
        { key: "B", text: t`gizzard`, correct: false, misconceptionId: "C03-M3", value: "gizzard_t" },
        { key: "C", text: t`midgut`, correct: true, value: "midgut_t" },
        { key: "D", text: t`foregut`, correct: false, misconceptionId: "C03-M1", value: "foregut_t" },
      ],
      solution: {
        steps: [
          t`Middle region.`,
          t`Midgut.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(A)" },
      stem: t`The main site of digestion and absorption in the cockroach is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "absorption" } },
      options: [
        { key: "A", text: t`gizzard`, correct: false, misconceptionId: "C03-M5", value: "gizzard_t" },
        { key: "B", text: t`rectum`, correct: false, misconceptionId: "C03-M6", value: "rectum_t" },
        { key: "C", text: t`stomach (ventriculus)`, correct: true, value: "stomach_t" },
        { key: "D", text: t`crop`, correct: false, misconceptionId: "C03-M4", value: "crop_t" },
      ],
      solution: {
        steps: [
          t`Glandular epithelium.`,
          t`Stomach.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(E)" },
      stem: t`The Malpighian tubules open into the alimentary canal`,
      verify: { kind: "value", inputs: {  }, params: { q: "malpighian" } },
      options: [
        { key: "A", text: t`into the crop`, correct: false, misconceptionId: "C03-M7", value: "into_crop" },
        { key: "B", text: t`into the rectum`, correct: false, misconceptionId: "C03-M8", value: "into_rectum" },
        { key: "C", text: t`at the base of the hypopharynx`, correct: false, misconceptionId: "C03-M9", value: "hypopharynx_base" },
        { key: "D", text: t`near the junction of midgut and hindgut`, correct: true, value: "mid_hind_junction" },
      ],
      solution: {
        steps: [
          t`Midgut meets hindgut.`,
          t`At that junction.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(A)" },
      stem: t`The six rectal pads of the rectum`,
      verify: { kind: "value", inputs: {  }, params: { q: "rectal_pads" } },
      options: [
        { key: "A", text: t`filter the food`, correct: false, misconceptionId: "C03-M11", value: "filter_food" },
        { key: "B", text: t`store the food`, correct: false, misconceptionId: "C03-M12", value: "store_food" },
        { key: "C", text: t`absorb water`, correct: true, value: "absorb_water" },
        { key: "D", text: t`secrete digestive enzymes`, correct: false, misconceptionId: "C03-M10", value: "secrete_enzymes" },
      ],
      solution: {
        steps: [
          t`Rectal pads.`,
          t`Absorb water.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q3(D)" },
      stem: t`If a cockroach had no gizzard, the most likely result is`,
      verify: { kind: "value", inputs: {  }, params: { q: "no_gizzard" } },
      options: [
        { key: "A", text: t`coarse food enters the midgut and is poorly digested`, correct: true, value: "coarse_food_poor" },
        { key: "B", text: t`food could not be stored at all`, correct: false, misconceptionId: "C03-M13", value: "no_storage" },
        { key: "C", text: t`no saliva would reach the food`, correct: false, misconceptionId: "C03-M14", value: "no_saliva" },
        { key: "D", text: t`no effect, since the stomach crushes food`, correct: false, misconceptionId: "C03-M15", value: "no_effect" },
      ],
      solution: {
        steps: [
          t`No crushing or filtering.`,
          t`Poor digestion.`,
        ],
      },
    },
  ],
};
