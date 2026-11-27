import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Why does a cut tree trunk show rings, and why is its bark corky?`,
    reveal: t`The cambium makes different wood in each season, and a cork cambium forms waterproof cork outside.`,
  },
  explanation: {
    intuition: [
      t`Secondary xylem is **wood**.`,
      t`The cambium works faster in good seasons.`,
      t`**Cork** from a cork cambium replaces the broken epidermis.`,
    ],
    formal: [
      {
        title: "Wood",
        points: [
          t`**Spring wood** (favourable season): broad, light, thin-walled, low density.`,
          t`**Autumn wood** (unfavourable season): narrow, dark, thick-walled, high density.`,
          t`Inner **heartwood** is durable, filled with oils, gums, resins and tannins; outer **sapwood** conducts.`,
        ],
      },
      {
        title: "Cork cambium",
        points: [
          t`Outer cortex forms the **cork cambium** (phellogen).`,
          t`It forms **cork** (phellem) outside and **phelloderm** inside; with the phellogen, these three form the **periderm**.`,
          t`Cork walls are **suberized**, so cork is impervious; **lenticels** allow gas exchange.`,
        ],
      },
    ],
    worked: {
      prompt: t`A band of wood is dark, narrow and dense, with many fibres. Name it.`,
      steps: [
        t`Dark, dense, narrow: unfavourable season.`,
        t`That is late wood.`,
      ],
      answer: t`Autumn (late) wood`,
    },
    visualSpec: t`A log in cross-section: light and dark rings around dark heartwood, ringed by bark.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks autumn.",
      remediation: "Autumn wood forms in the unfavourable season.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks heartwood.",
      remediation: "Heartwood is old, inner wood.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks cork.",
      remediation: "Cork is not wood.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Says size.",
      remediation: "Rings show seasons.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Says no cambium.",
      remediation: "All these trees have a cambium; the season contrast differs.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Says cork.",
      remediation: "Wood comes from vascular cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks sapwood.",
      remediation: "Sapwood conducts sap.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks spring wood.",
      remediation: "Spring wood is seasonal.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks cork.",
      remediation: "Cork is outside.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says phloem.",
      remediation: "That is from vascular cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says xylem.",
      remediation: "That is from vascular cambium.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says epidermis.",
      remediation: "The epidermis has ruptured.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says alive.",
      remediation: "Cork cells are dead; suberin keeps water out.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says lignin.",
      remediation: "Cork walls are suberized.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says lenticels.",
      remediation: "Lenticels exchange gases.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q2(D)" },
      stem: t`Wood formed in the favourable season, when the cambium is very active, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "spring" } },
      options: [
        { key: "A", text: t`heartwood`, correct: false, misconceptionId: "C07-M2", value: "heart_wood" },
        { key: "B", text: t`cork`, correct: false, misconceptionId: "C07-M3", value: "cork_w" },
        { key: "C", text: t`spring (early) wood`, correct: true, value: "spring_wood" },
        { key: "D", text: t`autumn (late) wood`, correct: false, misconceptionId: "C07-M1", value: "autumn_wood" },
      ],
      solution: {
        steps: [
          t`Cambium very active.`,
          t`Spring wood.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q2(E)" },
      stem: t`Cut logs from Kashmir show distinct rings, but those from Maharashtra do not. The main reason is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rings" } },
      options: [
        { key: "A", text: t`Kashmir trees are simply bigger`, correct: false, misconceptionId: "C07-M4", value: "tree_size" },
        { key: "B", text: t`trees in Maharashtra have no vascular cambium`, correct: false, misconceptionId: "C07-M5", value: "no_cambium" },
        { key: "C", text: t`rings made by the cork cambium`, correct: false, misconceptionId: "C07-M6", value: "cork_rings" },
        { key: "D", text: t`a sharp contrast between favourable and unfavourable seasons`, correct: true, value: "season_contrast" },
      ],
      solution: {
        steps: [
          t`Sharp seasonal contrast.`,
          t`Distinct rings.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(B)" },
      stem: t`The inner, durable, non-functional wood whose elements are filled with oils, gums, resins and tannins is`,
      verify: { kind: "value", inputs: {  }, params: { q: "heart" } },
      options: [
        { key: "A", text: t`cork`, correct: false, misconceptionId: "C07-M9", value: "cork_w" },
        { key: "B", text: t`heartwood`, correct: true, value: "heart_wood" },
        { key: "C", text: t`sapwood`, correct: false, misconceptionId: "C07-M7", value: "sap_wood" },
        { key: "D", text: t`spring wood`, correct: false, misconceptionId: "C07-M8", value: "spring_wood" },
      ],
      solution: {
        steps: [
          t`Filled with extractives.`,
          t`Heartwood.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q3(B)" },
      stem: t`The cork cambium cuts off cork on the outside and, on the inside,`,
      verify: { kind: "value", inputs: {  }, params: { q: "inside" } },
      options: [
        { key: "A", text: t`phelloderm (secondary cortex)`, correct: true, value: "phelloderm_c" },
        { key: "B", text: t`secondary phloem`, correct: false, misconceptionId: "C07-M10", value: "secondary_phloem" },
        { key: "C", text: t`secondary xylem`, correct: false, misconceptionId: "C07-M11", value: "secondary_xylem" },
        { key: "D", text: t`a new epidermis`, correct: false, misconceptionId: "C07-M12", value: "new_epidermis" },
      ],
      solution: {
        steps: [
          t`Inner side of phellogen.`,
          t`Phelloderm.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q2(G)" },
      stem: t`A cork stopper in a lab has not rotted in many years, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "stopper" } },
      options: [
        { key: "A", text: t`its cells stay alive and repair damage`, correct: false, misconceptionId: "C07-M13", value: "living_repair" },
        { key: "B", text: t`its walls are thickened with lignin`, correct: false, misconceptionId: "C07-M14", value: "lignified_walls" },
        { key: "C", text: t`its lenticels let it dry out`, correct: false, misconceptionId: "C07-M15", value: "lenticels_dry" },
        { key: "D", text: t`its cell walls are suberized, so water cannot enter`, correct: true, value: "suberized_walls" },
      ],
      solution: {
        steps: [
          t`Suberized walls.`,
          t`Water cannot enter.`,
        ],
      },
    },
  ],
};
