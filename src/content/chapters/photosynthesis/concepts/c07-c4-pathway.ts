import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Maize thrives in hot, bright fields where wheat loses carbon. What does maize do differently?`,
    reveal: t`It fixes $\ce{CO2}$ first with PEP and carries it into the bundle sheath, so RuBisCO never runs short of $\ce{CO2}$.`,
  },
  explanation: {
    intuition: [
      t`$\mathrm{C_4}$ plants fix $\ce{CO2}$ twice, in two kinds of cells.`,
      t`**Kranz anatomy**: a bundle sheath around each vascular bundle.`,
      t`High $\ce{CO2}$ in the bundle sheath keeps RuBisCO a carboxylase.`,
    ],
    formal: [
      {
        title: "Hatch-Slack pathway",
        points: [
          t`Mesophyll: **PEP** accepts $\ce{CO2}$ by PEPCO, giving 4-carbon **OAA**, then malic acid.`,
          t`Bundle sheath: malic acid gives pyruvic acid and $\ce{CO2}$ for the Calvin cycle.`,
          t`Pyruvic acid returns to the mesophyll and regenerates PEP using ATP.`,
        ],
      },
      {
        title: "Kranz anatomy and cost",
        points: [
          t`Mesophyll chloroplasts are small with well-developed grana; bundle sheath ones are large with poor grana.`,
          t`One glucose costs 30 ATP, against 18 in $\mathrm{C_3}$ plants.`,
          t`No photorespiration, so they are productive in hot, bright tropics.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many ATP does a $\mathrm{C_4}$ plant use per glucose, and why more than 18?`,
      steps: [
        t`The Calvin cycle uses 18 ATP.`,
        t`Regenerating PEP costs 12 more ATP.`,
      ],
      answer: t`30 ATP.`,
    },
    visualSpec: t`Two boxes, mesophyll and bundle sheath: CO₂ to OAA to malic acid, across, then CO₂ to the Calvin cycle and pyruvic acid back.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Reverses them.",
      remediation: "Maize is C₄; wheat is C₃.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Says both OAA.",
      remediation: "Wheat is a C₃ plant.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks PEP.",
      remediation: "PEP is the acceptor, not the product.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks RuBP.",
      remediation: "RuBP works in the bundle sheath.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks malic acid.",
      remediation: "Malic acid is formed from OAA.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks pyruvic acid.",
      remediation: "It regenerates PEP.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks malic acid.",
      remediation: "Malic acid goes into the bundle sheath.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks OAA.",
      remediation: "OAA stays in the mesophyll.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks 3-PGA.",
      remediation: "3-PGA stays in the Calvin cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says no oxygen.",
      remediation: "Oxygen is there; CO₂ is simply higher.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says no RuBisCO.",
      remediation: "The bundle sheath runs the Calvin cycle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says PEPCO there.",
      remediation: "PEPCO works in the mesophyll.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Uses 18 each.",
      remediation: "That is the C₃ figure.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Uses 12 each.",
      remediation: "That is only the extra cost.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Adds 12 once.",
      remediation: "The extra 12 is per glucose.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(F)" },
      stem: t`In maize and wheat, the first stable products of $\ce{CO2}$ fixation are, respectively,`,
      verify: { kind: "value", inputs: {  }, params: { q: "maize_wheat" } },
      options: [
        { key: "A", text: t`OAA and OAA`, correct: false, misconceptionId: "C07-M2", value: "oaa_oaa" },
        { key: "B", text: t`OAA and PEP`, correct: false, misconceptionId: "C07-M3", value: "oaa_pep" },
        { key: "C", text: t`OAA and 3-PGA`, correct: true, value: "oaa_pga" },
        { key: "D", text: t`3-PGA and OAA`, correct: false, misconceptionId: "C07-M1", value: "pga_oaa" },
      ],
      solution: {
        steps: [
          t`Maize is C₄: OAA.`,
          t`Wheat is C₃: 3-PGA.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q3" },
      stem: t`In the mesophyll cells of a $\mathrm{C_4}$ plant, atmospheric $\ce{CO2}$ is first accepted by`,
      verify: { kind: "value", inputs: {  }, params: { q: "acceptor" } },
      options: [
        { key: "A", text: t`RuBP`, correct: false, misconceptionId: "C07-M4", value: "rubp_c" },
        { key: "B", text: t`malic acid`, correct: false, misconceptionId: "C07-M5", value: "malic_acid" },
        { key: "C", text: t`pyruvic acid`, correct: false, misconceptionId: "C07-M6", value: "pyruvic_acid" },
        { key: "D", text: t`PEP`, correct: true, value: "pep_c" },
      ],
      solution: {
        steps: [
          t`PEPCO joins CO₂ to PEP.`,
          t`PEP.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q3" },
      stem: t`In the $\mathrm{C_4}$ pathway, the compound that returns from the bundle sheath to the mesophyll cell is`,
      verify: { kind: "value", inputs: {  }, params: { q: "returns" } },
      options: [
        { key: "A", text: t`3-PGA`, correct: false, misconceptionId: "C07-M9", value: "pga_3" },
        { key: "B", text: t`pyruvic acid`, correct: true, value: "pyruvic_acid" },
        { key: "C", text: t`malic acid`, correct: false, misconceptionId: "C07-M7", value: "malic_acid" },
        { key: "D", text: t`oxaloacetic acid`, correct: false, misconceptionId: "C07-M8", value: "oaa_c" },
      ],
      solution: {
        steps: [
          t`Malic acid gives pyruvic acid.`,
          t`Pyruvic acid returns.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(M)" },
      stem: t`In $\mathrm{C_4}$ plants, RuBisCO carries out carboxylation, not oxygenation, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "carboxylase" } },
      options: [
        { key: "A", text: t`$\ce{CO2}$ from malic acid keeps $\ce{CO2}$ high in the bundle sheath`, correct: true, value: "high_co2" },
        { key: "B", text: t`the bundle sheath has no oxygen at all`, correct: false, misconceptionId: "C07-M10", value: "no_oxygen" },
        { key: "C", text: t`$\mathrm{C_4}$ plants have no RuBisCO`, correct: false, misconceptionId: "C07-M11", value: "no_rubisco" },
        { key: "D", text: t`PEP carboxylase in the bundle sheath uses up the oxygen`, correct: false, misconceptionId: "C07-M12", value: "pepco_removes_o2" },
      ],
      solution: {
        steps: [
          t`Malic acid releases CO₂ there.`,
          t`High CO₂ favours carboxylation.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(F)" },
      stem: t`A $\mathrm{C_4}$ plant makes 2 molecules of glucose. How many ATP does it use?`,
      verify: { kind: "value", inputs: { g: "2" }, params: { q: "c4_atp" } },
      options: [
        { key: "A", text: t`$36$`, correct: false, misconceptionId: "C07-M13", value: "36" },
        { key: "B", text: t`$24$`, correct: false, misconceptionId: "C07-M14", value: "24" },
        { key: "C", text: t`$48$`, correct: false, misconceptionId: "C07-M15", value: "48" },
        { key: "D", text: t`$60$`, correct: true, value: "60" },
      ],
      solution: {
        steps: [
          t`30 ATP per glucose.`,
          t`$2 \times 30 = 60$.`,
        ],
      },
    },
  ],
};
