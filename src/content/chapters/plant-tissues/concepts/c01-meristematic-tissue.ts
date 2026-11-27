import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A tree keeps getting taller and thicker for years. Which cells make this possible?`,
    reveal: t`Meristems: groups of cells that keep the power to divide, at the tips and along the sides of the plant.`,
  },
  explanation: {
    intuition: [
      t`A **meristem** is a tissue whose cells keep dividing.`,
      t`Cells it makes later stop dividing and become **permanent tissue**.`,
      t`Where a meristem sits decides what it grows: length or girth.`,
    ],
    formal: [
      {
        title: "Types by position",
        points: [
          t`**Apical meristem**: at the tips of root and shoot; increases **length**.`,
          t`**Intercalary meristem**: at the top or base of a node; mainly in monocots; short lived.`,
          t`**Lateral meristem**: along the sides of the axis, as **cambium**; increases **girth**.`,
        ],
      },
      {
        title: "Root tip",
        points: [
          t`In the shoot the apical meristem is terminal.`,
          t`In the root it is **subterminal**, behind the root cap.`,
          t`Above the tip, cells of the mature region have lost the power to divide.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which meristem makes a stem thicker, and where does it lie?`,
      steps: [
        t`Thickness is girth.`,
        t`Girth comes from the lateral meristem, along the sides.`,
      ],
      answer: t`Lateral meristem (cambium)`,
    },
    visualSpec: t`A shoot with a shaded tip (apical), shaded bands at the nodes (intercalary) and side strips (lateral).`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Says one.",
      remediation: "There are three by position.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Says two.",
      remediation: "Intercalary is the third.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Says four.",
      remediation: "Root and shoot apices are one type.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks apical.",
      remediation: "Apical lies at tips.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks intercalary.",
      remediation: "Intercalary lies at nodes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks permanent.",
      remediation: "Cambium still divides.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says terminal.",
      remediation: "The root cap lies in front.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says at nodes.",
      remediation: "That is intercalary.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says sides.",
      remediation: "That is lateral.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Picks apical.",
      remediation: "Apical lies at tips.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Picks lateral.",
      remediation: "Lateral lies along the sides.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Picks permanent.",
      remediation: "These cells still divide.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says still dividing.",
      remediation: "Mature cells have stopped dividing.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says dead.",
      remediation: "Permanent cells can be living.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says lateral.",
      remediation: "Lateral meristem lies along the sides.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q1(A)" },
      stem: t`Based on their location or position, meristematic regions are divided into how many types?`,
      verify: { kind: "value", inputs: {  }, params: { q: "types" } },
      options: [
        { key: "A", text: t`three`, correct: true, value: "three_types" },
        { key: "B", text: t`one`, correct: false, misconceptionId: "C01-M1", value: "one_type" },
        { key: "C", text: t`two`, correct: false, misconceptionId: "C01-M2", value: "two_types" },
        { key: "D", text: t`four`, correct: false, misconceptionId: "C01-M3", value: "four_types" },
      ],
      solution: {
        steps: [
          t`Apical, intercalary, lateral.`,
          t`Three.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q1(B)" },
      stem: t`Cambium is also called`,
      verify: { kind: "value", inputs: {  }, params: { q: "cambium" } },
      options: [
        { key: "A", text: t`lateral meristem`, correct: true, value: "lateral_m" },
        { key: "B", text: t`apical meristem`, correct: false, misconceptionId: "C01-M4", value: "apical_m" },
        { key: "C", text: t`intercalary meristem`, correct: false, misconceptionId: "C01-M5", value: "intercalary_m" },
        { key: "D", text: t`permanent tissue`, correct: false, misconceptionId: "C01-M6", value: "permanent_t" },
      ],
      solution: {
        steps: [
          t`Lies along the sides.`,
          t`Lateral meristem.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q6" },
      stem: t`In a root, the apical meristem lies`,
      verify: { kind: "value", inputs: {  }, params: { q: "root_apex" } },
      options: [
        { key: "A", text: t`at the nodes`, correct: false, misconceptionId: "C01-M8", value: "at_nodes" },
        { key: "B", text: t`along the sides of the axis`, correct: false, misconceptionId: "C01-M9", value: "along_sides" },
        { key: "C", text: t`behind the root cap (subterminal)`, correct: true, value: "subterminal_p" },
        { key: "D", text: t`at the very tip, with nothing in front (terminal)`, correct: false, misconceptionId: "C01-M7", value: "terminal_p" },
      ],
      solution: {
        steps: [
          t`Root cap in front.`,
          t`Subterminal.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q6" },
      stem: t`A meristem at the top or base of a node, mainly active in monocots and short lived, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "node" } },
      options: [
        { key: "A", text: t`intercalary meristem`, correct: true, value: "intercalary_m" },
        { key: "B", text: t`apical meristem`, correct: false, misconceptionId: "C01-M10", value: "apical_m" },
        { key: "C", text: t`lateral meristem`, correct: false, misconceptionId: "C01-M11", value: "lateral_m" },
        { key: "D", text: t`permanent tissue`, correct: false, misconceptionId: "C01-M12", value: "permanent_t" },
      ],
      solution: {
        steps: [
          t`At nodes, in monocots.`,
          t`Intercalary meristem.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/plant-tissues-11-bio/Ex Q6" },
      stem: t`Cells in the mature region of a root, above the growing tip, are`,
      verify: { kind: "value", inputs: {  }, params: { q: "mature" } },
      options: [
        { key: "A", text: t`permanent cells that have lost the power to divide`, correct: true, value: "lost_division" },
        { key: "B", text: t`meristem cells that keep dividing`, correct: false, misconceptionId: "C01-M13", value: "still_dividing" },
        { key: "C", text: t`dead cells, because they are permanent`, correct: false, misconceptionId: "C01-M14", value: "dead_cells" },
        { key: "D", text: t`lateral meristem cells`, correct: false, misconceptionId: "C01-M15", value: "lateral_cells" },
      ],
      solution: {
        steps: [
          t`Division has stopped.`,
          t`Permanent cells.`,
        ],
      },
    },
  ],
};
