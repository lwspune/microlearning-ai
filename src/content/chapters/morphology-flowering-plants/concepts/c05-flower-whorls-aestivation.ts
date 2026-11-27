import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`In some flowers the stigma stands taller than every other part, yet the ovary is called inferior. How?`,
    reveal: t`Insertion is judged by the ovary, not the stigma: the ovary lies below the other whorls.`,
  },
  explanation: {
    intuition: [
      t`A flower has four whorls; the ovary's level against the others names the insertion.`,
      t`When calyx and corolla look alike, their members are **tepals**.`,
      t`**Aestivation** is how sepals, petals or tepals are arranged in the bud.`,
    ],
    formal: [
      {
        title: "Insertion and perianth",
        points: [
          t`Ovary highest: **hypogynous**; at about the same level: **perigynous** (half inferior).`,
          t`Ovary enclosed by the thalamus, below the others: **epigynous** (sunflower, guava).`,
          t`Tepals form the **perianth**; stamens joined to tepals are **epiphyllous** (lily).`,
        ],
      },
      {
        title: "Vexillary aestivation",
        points: [
          t`The corolla is butterfly shaped, with five unequal petals (pea).`,
          t`The largest outer petal is the **standard** (vexillum); two lateral **wings**.`,
          t`The two smaller inner petals fuse into a boat-shaped **keel**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A perianth has bright, coloured tepals that are all fused. Describe it.`,
      steps: [
        t`Bright coloured tepals: petaloid.`,
        t`Fused tepals: gamophyllous.`,
      ],
      answer: t`Petaloid and gamophyllous`,
    },
    visualSpec: t`Three flowers in section: ovary on top, ovary at mid level, and ovary sunk below the other whorls.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks hypogynous.",
      remediation: "There the ovary is highest.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks perigynous.",
      remediation: "There all whorls are level.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks half inferior.",
      remediation: "The ovary is wholly below.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says sepal.",
      remediation: "Sepals are distinct from petals.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says petal.",
      remediation: "Petals are distinct from sepals.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says perianth.",
      remediation: "The perianth is the whole whorl.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says polyphyllous.",
      remediation: "That means free tepals.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says gamophyllous.",
      remediation: "That means fused tepals.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says petaloid.",
      remediation: "That means coloured tepals.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Says standard.",
      remediation: "The standard is the outer petal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says wings.",
      remediation: "The wings are the lateral pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says free.",
      remediation: "The inner two are fused.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says pollination.",
      remediation: "Petaloid tepals do that.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says pollen.",
      remediation: "Stamens produce pollen.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says ovules.",
      remediation: "Ovules are in the ovary.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q1(C)" },
      stem: t`In a flower, the ovary lies below the other three whorls, but its stigma is taller than them. The flower is`,
      verify: { kind: "value", inputs: {  }, params: { q: "insertion" } },
      options: [
        { key: "A", text: t`half superior, half inferior`, correct: false, misconceptionId: "C05-M3", value: "half_inferior" },
        { key: "B", text: t`epigynous`, correct: true, value: "epigynous_f" },
        { key: "C", text: t`hypogynous`, correct: false, misconceptionId: "C05-M1", value: "hypogynous_f" },
        { key: "D", text: t`perigynous`, correct: false, misconceptionId: "C05-M2", value: "perigynous_f" },
      ],
      solution: {
        steps: [
          t`Ovary below the other whorls.`,
          t`Epigynous.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(I)" },
      stem: t`When the calyx and corolla are not differentiated, each member is called a`,
      verify: { kind: "value", inputs: {  }, params: { q: "tepal" } },
      options: [
        { key: "A", text: t`sepal`, correct: false, misconceptionId: "C05-M4", value: "sepal_t" },
        { key: "B", text: t`petal`, correct: false, misconceptionId: "C05-M5", value: "petal_t" },
        { key: "C", text: t`perianth`, correct: false, misconceptionId: "C05-M6", value: "perianth_t" },
        { key: "D", text: t`tepal`, correct: true, value: "tepal_t" },
      ],
      solution: {
        steps: [
          t`Undifferentiated members.`,
          t`Tepals.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(I)" },
      stem: t`In lily, the stamens are united with the tepals. Such stamens are`,
      verify: { kind: "value", inputs: {  }, params: { q: "lily_stamens" } },
      options: [
        { key: "A", text: t`epiphyllous`, correct: true, value: "epiphyllous_t" },
        { key: "B", text: t`polyphyllous`, correct: false, misconceptionId: "C05-M7", value: "polyphyllous_t" },
        { key: "C", text: t`gamophyllous`, correct: false, misconceptionId: "C05-M8", value: "gamophyllous_t" },
        { key: "D", text: t`petaloid`, correct: false, misconceptionId: "C05-M9", value: "petaloid_t" },
      ],
      solution: {
        steps: [
          t`Stamens on tepals.`,
          t`Epiphyllous.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(J)" },
      stem: t`The pea corolla has vexillary aestivation. Its two smaller inner petals form the`,
      verify: { kind: "value", inputs: {  }, params: { q: "keel" } },
      options: [
        { key: "A", text: t`wings`, correct: false, misconceptionId: "C05-M11", value: "wings_p" },
        { key: "B", text: t`two free inner petals`, correct: false, misconceptionId: "C05-M12", value: "free_inner" },
        { key: "C", text: t`keel: fused, boat shaped`, correct: true, value: "keel_p" },
        { key: "D", text: t`standard (vexillum)`, correct: false, misconceptionId: "C05-M10", value: "standard_p" },
      ],
      solution: {
        steps: [
          t`Two inner petals fuse.`,
          t`Keel.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q3(I)" },
      stem: t`Green, sepaloid tepals of a perianth can`,
      verify: { kind: "value", inputs: {  }, params: { q: "sepaloid" } },
      options: [
        { key: "A", text: t`perform photosynthesis`, correct: true, value: "photosynthesis_t" },
        { key: "B", text: t`attract insects for pollination`, correct: false, misconceptionId: "C05-M13", value: "pollination_t" },
        { key: "C", text: t`produce pollen`, correct: false, misconceptionId: "C05-M14", value: "pollen_t" },
        { key: "D", text: t`bear ovules`, correct: false, misconceptionId: "C05-M15", value: "ovules_t" },
      ],
      solution: {
        steps: [
          t`Green tepals.`,
          t`Photosynthesis.`,
        ],
      },
    },
  ],
};
