import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Stomata open by day and close at night. What pushes the two guard cells apart?`,
    reveal: t`Water: when the guard cells take in water and swell, their thick inner walls bow apart and the pore opens.`,
  },
  explanation: {
    intuition: [
      t`Each stoma is a pore between two **guard cells**, with subsidiary cells around.`,
      t`Dicots have **kidney-shaped** guard cells; grasses have **dumbbell-shaped** ones.`,
      t`*Cyperus* has **both**.`,
    ],
    formal: [
      {
        title: "Starch–sugar theory",
        points: [
          t`By day, starch in guard cells turns to **sugar**.`,
          t`Sugar raises O.P.; water enters; guard cells become turgid: **open**.`,
          t`At night sugar turns back to **starch**; water leaves: **closed**.`,
        ],
      },
      {
        title: "Proton transport theory",
        points: [
          t`Light drives $\ce{H+}$ out of guard cells.`,
          t`$\ce{K+}$ ions **enter**, raising O.P.; water follows: open.`,
          t`$\ce{K+}$ leaving in the dark closes the stoma.`,
        ],
      },
    ],
    worked: {
      prompt: t`A guard cell loses its $\ce{K+}$ ions. What happens to the stoma?`,
      steps: [
        t`Its O.P. falls, so water leaves.`,
        t`The guard cells become flaccid.`,
      ],
      answer: t`It closes`,
    },
    visualSpec: t`Two kidney-shaped guard cells, flaccid and closed, then turgid and open.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says it opens partly.",
      remediation: "Starch lowers O.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says it opens fully.",
      remediation: "Starch lowers O.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says no change.",
      remediation: "Starch lowers O.P.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says kidney only.",
      remediation: "*Cyperus* has both.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says dumbbell only.",
      remediation: "*Cyperus* has both.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says no guard cells.",
      remediation: "All stomata have guard cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says K⁺ leaves.",
      remediation: "K⁺ leaving closes it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says water leaves.",
      remediation: "Water entering opens it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says starch forms.",
      remediation: "Starch closes it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks flaccid.",
      remediation: "Flaccid cells close it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks plasmolysed.",
      remediation: "Plasmolysed cells close it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks dead.",
      remediation: "Dead cells cannot move.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks dicots.",
      remediation: "Dicots have kidney-shaped cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks ferns.",
      remediation: "Ferns have kidney-shaped cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks gymnosperms.",
      remediation: "Gymnosperms have kidney-shaped cells.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q1(4)" },
      stem: t`When sugar in the guard cells is converted into starch, the stomatal pore`,
      verify: { kind: "value", inputs: {  }, params: { q: "starch" } },
      options: [
        { key: "A", text: t`opens partially`, correct: false, misconceptionId: "C06-M1", value: "opens_partly" },
        { key: "B", text: t`opens fully`, correct: false, misconceptionId: "C06-M2", value: "opens_fully" },
        { key: "C", text: t`remains unchanged`, correct: false, misconceptionId: "C06-M3", value: "no_change" },
        { key: "D", text: t`closes almost completely`, correct: true, value: "closes" },
      ],
      solution: {
        steps: [
          t`Sugar to starch lowers O.P.`,
          t`It closes.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(7)" },
      stem: t`The guard cells of *Cyperus* are`,
      verify: { kind: "value", inputs: {  }, params: { q: "cyperus" } },
      options: [
        { key: "A", text: t`both kidney-shaped and dumbbell-shaped`, correct: true, value: "both_shapes" },
        { key: "B", text: t`kidney-shaped only`, correct: false, misconceptionId: "C06-M4", value: "kidney_only" },
        { key: "C", text: t`dumbbell-shaped only`, correct: false, misconceptionId: "C06-M5", value: "dumbbell_only" },
        { key: "D", text: t`absent`, correct: false, misconceptionId: "C06-M6", value: "no_guard_cells" },
      ],
      solution: {
        steps: [
          t`An exception among plants.`,
          t`Both shapes.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Water Relation/2024 Q. 27" },
      stem: t`By the proton transport theory, stomata open as`,
      verify: { kind: "value", inputs: {  }, params: { q: "potassium" } },
      options: [
        { key: "A", text: t`$\ce{K+}$ ions enter the guard cells`, correct: true, value: "k_enters" },
        { key: "B", text: t`$\ce{K+}$ ions leave the guard cells`, correct: false, misconceptionId: "C06-M7", value: "k_leaves" },
        { key: "C", text: t`water leaves the guard cells`, correct: false, misconceptionId: "C06-M8", value: "water_leaves" },
        { key: "D", text: t`starch forms in the guard cells`, correct: false, misconceptionId: "C06-M9", value: "starch_forms" },
      ],
      solution: {
        steps: [
          t`K⁺ raises O.P.`,
          t`K⁺ enters.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q4(4)" },
      stem: t`The stomatal pore opens when its guard cells become`,
      verify: { kind: "value", inputs: {  }, params: { q: "turgid" } },
      options: [
        { key: "A", text: t`dead`, correct: false, misconceptionId: "C06-M12", value: "dead" },
        { key: "B", text: t`turgid`, correct: true, value: "turgid" },
        { key: "C", text: t`flaccid`, correct: false, misconceptionId: "C06-M10", value: "flaccid" },
        { key: "D", text: t`plasmolysed`, correct: false, misconceptionId: "C06-M11", value: "plasmolysed" },
      ],
      solution: {
        steps: [
          t`Swollen guard cells.`,
          t`Turgid.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-water-12-bio/Ex Q2(7)" },
      stem: t`Dumbbell-shaped guard cells are found in`,
      verify: { kind: "value", inputs: {  }, params: { q: "grass" } },
      options: [
        { key: "A", text: t`grasses`, correct: true, value: "grasses" },
        { key: "B", text: t`dicots`, correct: false, misconceptionId: "C06-M13", value: "dicots" },
        { key: "C", text: t`ferns`, correct: false, misconceptionId: "C06-M14", value: "ferns" },
        { key: "D", text: t`gymnosperms`, correct: false, misconceptionId: "C06-M15", value: "gymnosperms" },
      ],
      solution: {
        steps: [
          t`Monocot grasses.`,
          t`Grasses.`,
        ],
      },
    },
  ],
};
