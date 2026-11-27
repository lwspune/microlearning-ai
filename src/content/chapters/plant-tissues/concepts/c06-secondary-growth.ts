import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A sunflower stem grows thicker with age, but a monocot stem usually does not. Why?`,
    reveal: t`Only the sunflower has a ring of cambium between xylem and phloem to add new tissue.`,
  },
  explanation: {
    intuition: [
      t`Growth in length is **primary growth**; growth in girth is **secondary growth**.`,
      t`It is seen in dicots and gymnosperms.`,
      t`It is made by lateral meristems.`,
    ],
    formal: [
      {
        title: "Cambial ring",
        points: [
          t`**Intrafascicular cambium** lies between primary xylem and phloem.`,
          t`Medullary ray cells divide again (**dedifferentiation**): **interfascicular cambium**.`,
          t`Inside it forms **secondary xylem**; outside, **secondary phloem**; xylem is more.`,
        ],
      },
      {
        title: "Roots and monocots",
        points: [
          t`In dicot roots, **conjunctive parenchyma** becomes the cambium.`,
          t`Monocot bundles are closed and scattered: no ring, no secondary growth.`,
          t`*Dracaena*, *Agave* and palms: **anomalous** growth by an accessory cambium.`,
        ],
      },
    ],
    worked: {
      prompt: t`The cambial ring cuts off a cell towards the outside. What does it become?`,
      steps: [
        t`Outer side faces the periphery.`,
        t`Outer cells become secondary phloem.`,
      ],
      answer: t`Secondary phloem`,
    },
    visualSpec: t`A ring of cambium joining the bundles, with secondary xylem inside and secondary phloem outside.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says bundle cambium.",
      remediation: "Medullary ray cells form it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says outer cortex.",
      remediation: "That forms cork cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says pith.",
      remediation: "Medullary rays form it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says phloem.",
      remediation: "Phloem forms outside.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says primary.",
      remediation: "New xylem is secondary.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says cortex.",
      remediation: "Cork cambium forms that.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says too few.",
      remediation: "Number does not matter.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says exarch.",
      remediation: "Exarch xylem is a root feature.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says no cork.",
      remediation: "Girth needs vascular cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says medullary rays.",
      remediation: "That is in stems.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says endodermis.",
      remediation: "Conjunctive parenchyma forms it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says outer cortex.",
      remediation: "That forms cork cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says normal.",
      remediation: "Monocots lack the ring.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says intercalary.",
      remediation: "Intercalary does not add girth.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says apical.",
      remediation: "Apical adds length.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(B)" },
      stem: t`In a dicot stem, the interfascicular cambium arises from`,
      verify: { kind: "value", inputs: {  }, params: { q: "interfascicular" } },
      options: [
        { key: "A", text: t`the bundle cambium simply growing sideways`, correct: false, misconceptionId: "C06-M1", value: "intrafascicular_spread" },
        { key: "B", text: t`the outer cortical cells`, correct: false, misconceptionId: "C06-M2", value: "outer_cortex" },
        { key: "C", text: t`the pith cells`, correct: false, misconceptionId: "C06-M3", value: "pith_cells" },
        { key: "D", text: t`medullary ray cells that become meristematic again`, correct: true, value: "medullary_rays" },
      ],
      solution: {
        steps: [
          t`Medullary rays dedifferentiate.`,
          t`Interfascicular cambium.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(B)" },
      stem: t`Cells cut off by the cambial ring towards the pith become`,
      verify: { kind: "value", inputs: {  }, params: { q: "towards_pith" } },
      options: [
        { key: "A", text: t`secondary xylem`, correct: true, value: "secondary_xylem" },
        { key: "B", text: t`secondary phloem`, correct: false, misconceptionId: "C06-M4", value: "secondary_phloem" },
        { key: "C", text: t`primary xylem`, correct: false, misconceptionId: "C06-M5", value: "primary_xylem" },
        { key: "D", text: t`secondary cortex`, correct: false, misconceptionId: "C06-M6", value: "secondary_cortex" },
      ],
      solution: {
        steps: [
          t`Towards the pith.`,
          t`Secondary xylem.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q2(B)" },
      stem: t`A stem shows many scattered vascular bundles, yet it cannot grow in girth. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "monocot_girth" } },
      options: [
        { key: "A", text: t`Its bundles are closed and scattered, so no cambial ring forms.`, correct: true, value: "closed_scattered" },
        { key: "B", text: t`It has too few bundles to grow.`, correct: false, misconceptionId: "C06-M7", value: "too_few_bundles" },
        { key: "C", text: t`Its xylem is exarch.`, correct: false, misconceptionId: "C06-M8", value: "exarch_xylem" },
        { key: "D", text: t`Its cortex has no cork cambium.`, correct: false, misconceptionId: "C06-M9", value: "no_cork_cambium" },
      ],
      solution: {
        steps: [
          t`No cambium in bundles.`,
          t`No ring can form.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(B)" },
      stem: t`In dicot roots, the cambium for secondary growth comes from`,
      verify: { kind: "value", inputs: {  }, params: { q: "root_cambium" } },
      options: [
        { key: "A", text: t`the outer cortex`, correct: false, misconceptionId: "C06-M12", value: "outer_cortex" },
        { key: "B", text: t`conjunctive parenchyma`, correct: true, value: "conjunctive_parenchyma" },
        { key: "C", text: t`medullary rays`, correct: false, misconceptionId: "C06-M10", value: "medullary_rays" },
        { key: "D", text: t`the endodermis`, correct: false, misconceptionId: "C06-M11", value: "endodermis_r" },
      ],
      solution: {
        steps: [
          t`Between xylem and phloem.`,
          t`Conjunctive parenchyma.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(B)" },
      stem: t`*Dracaena*, *Agave* and palms are monocots, yet they thicken. This is`,
      verify: { kind: "value", inputs: {  }, params: { q: "dracaena" } },
      options: [
        { key: "A", text: t`anomalous secondary growth by an accessory cambium`, correct: true, value: "anomalous_growth" },
        { key: "B", text: t`normal secondary growth by a cambial ring`, correct: false, misconceptionId: "C06-M13", value: "normal_ring" },
        { key: "C", text: t`growth by the intercalary meristem`, correct: false, misconceptionId: "C06-M14", value: "intercalary_growth" },
        { key: "D", text: t`growth by the apical meristem`, correct: false, misconceptionId: "C06-M15", value: "apical_growth" },
      ],
      solution: {
        steps: [
          t`Accessory cambium.`,
          t`Anomalous secondary growth.`,
        ],
      },
    },
  ],
};
