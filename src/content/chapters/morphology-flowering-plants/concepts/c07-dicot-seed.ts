import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Soak a bean overnight and peel it. What is hidden under the skin?`,
    reveal: t`Two cotyledons, and between them a tiny embryonal axis of plumule and radicle.`,
  },
  explanation: {
    intuition: [
      t`The **seed coat** has an outer **testa** and an inner **tegmen**.`,
      t`A dicot seed has **two cotyledons** and an **embryonal axis**.`,
      t`The axis is the plumule (shoot end) and the radicle (root end).`,
    ],
    formal: [
      {
        title: "Outside",
        points: [
          t`**Seed coat**: outer layer testa, inner layer tegmen.`,
          t`**Hilum**: the scar where the seed was attached to the fruit.`,
          t`**Micropyle**: a small pore just below the hilum.`,
        ],
      },
      {
        title: "Inside",
        points: [
          t`Two **cotyledons** lie on either side of the axis.`,
          t`**Plumule**: the upper tip of the axis; it forms the shoot.`,
          t`**Radicle**: the lower tip; it forms the tap root.`,
        ],
      },
    ],
    worked: {
      prompt: t`A peeled bean splits into two halves with a small axis between them. Name the halves and the axis.`,
      steps: [
        t`The two halves are the cotyledons.`,
        t`The axis is plumule and radicle: the embryonal axis.`,
      ],
      answer: t`Cotyledons; embryonal axis`,
    },
    visualSpec: t`A whole bean seed with hilum and micropyle, beside an opened one showing cotyledons, plumule and radicle.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Says micropyle.",
      remediation: "The micropyle is a pore.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says testa.",
      remediation: "Testa is the outer coat.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says plumule.",
      remediation: "The plumule is inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says tegmen.",
      remediation: "Tegmen is the inner layer.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says hilum.",
      remediation: "The hilum is a scar.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says cotyledon.",
      remediation: "Cotyledons are inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Says cotyledons.",
      remediation: "They lie beside the axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Says coat layers.",
      remediation: "Those form the seed coat.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Says hilum and micropyle.",
      remediation: "Those are on the coat.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says plumule.",
      remediation: "The plumule forms the shoot.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says cotyledon.",
      remediation: "Cotyledons do not form roots.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says hilum.",
      remediation: "The hilum is a scar.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says one.",
      remediation: "A dicot has two.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says plumule only.",
      remediation: "The radicle and cotyledons are there too.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says hilum and micropyle.",
      remediation: "Those are on the coat.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q7" },
      stem: t`The scar through which a seed was attached to the fruit is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "scar" } },
      options: [
        { key: "A", text: t`testa`, correct: false, misconceptionId: "C07-M2", value: "testa_s" },
        { key: "B", text: t`plumule`, correct: false, misconceptionId: "C07-M3", value: "plumule_s" },
        { key: "C", text: t`hilum`, correct: true, value: "hilum_s" },
        { key: "D", text: t`micropyle`, correct: false, misconceptionId: "C07-M1", value: "micropyle_s" },
      ],
      solution: {
        steps: [
          t`Seed's attachment scar.`,
          t`Hilum.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q7" },
      stem: t`The outer layer of the seed coat is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "outer_coat" } },
      options: [
        { key: "A", text: t`tegmen`, correct: false, misconceptionId: "C07-M4", value: "tegmen_s" },
        { key: "B", text: t`hilum`, correct: false, misconceptionId: "C07-M5", value: "hilum_s" },
        { key: "C", text: t`cotyledon`, correct: false, misconceptionId: "C07-M6", value: "cotyledon_s" },
        { key: "D", text: t`testa`, correct: true, value: "testa_s" },
      ],
      solution: {
        steps: [
          t`Outer seed coat layer.`,
          t`Testa.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q7" },
      stem: t`The embryonal axis of a seed is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "axis" } },
      options: [
        { key: "A", text: t`the hilum and the micropyle`, correct: false, misconceptionId: "C07-M9", value: "hilum_micropyle" },
        { key: "B", text: t`the radicle and the plumule`, correct: true, value: "radicle_plumule" },
        { key: "C", text: t`the two cotyledons`, correct: false, misconceptionId: "C07-M7", value: "two_cotyledons" },
        { key: "D", text: t`the testa and the tegmen`, correct: false, misconceptionId: "C07-M8", value: "testa_tegmen" },
      ],
      solution: {
        steps: [
          t`Axis tips.`,
          t`Radicle and plumule.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q8(C)" },
      stem: t`On germination, the tap root of a bean develops from the seed's`,
      verify: { kind: "value", inputs: {  }, params: { q: "tap_root" } },
      options: [
        { key: "A", text: t`radicle`, correct: true, value: "radicle_s" },
        { key: "B", text: t`plumule`, correct: false, misconceptionId: "C07-M10", value: "plumule_s" },
        { key: "C", text: t`cotyledon`, correct: false, misconceptionId: "C07-M11", value: "cotyledon_s" },
        { key: "D", text: t`hilum`, correct: false, misconceptionId: "C07-M12", value: "hilum_s" },
      ],
      solution: {
        steps: [
          t`The tap root's origin.`,
          t`The radicle.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/morphology-11-bio/Ex Q7" },
      stem: t`When the seed coat of a dicot seed is removed, we see`,
      verify: { kind: "value", inputs: {  }, params: { q: "inside" } },
      options: [
        { key: "A", text: t`one cotyledon`, correct: false, misconceptionId: "C07-M13", value: "one_cotyledon" },
        { key: "B", text: t`only the plumule`, correct: false, misconceptionId: "C07-M14", value: "plumule_only" },
        { key: "C", text: t`the hilum and the micropyle`, correct: false, misconceptionId: "C07-M15", value: "hilum_micropyle" },
        { key: "D", text: t`two cotyledons with the embryonal axis between them`, correct: true, value: "two_cotyledons_axis" },
      ],
      solution: {
        steps: [
          t`Dicot: two cotyledons.`,
          t`Axis between them.`,
        ],
      },
    },
  ],
};
