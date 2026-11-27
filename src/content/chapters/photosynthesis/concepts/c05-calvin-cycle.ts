import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Six molecules of $\ce{CO2}$ go in and one 6-carbon glucose comes out. How?`,
    reveal: t`Through six turns of the Calvin cycle, each fixing one $\ce{CO2}$ with ATP and $\ce{NADPH2}$.`,
  },
  explanation: {
    intuition: [
      t`The **dark reaction** runs in the stroma on ATP and $\ce{NADPH2}$.`,
      t`$\ce{CO2}$ joins the 5-carbon **RuBP**; the first stable product has 3 carbons.`,
      t`RuBP must be remade so the cycle can keep turning.`,
    ],
    formal: [
      {
        title: "Three phases",
        points: [
          t`**Carboxylation**: RuBisCO joins $\ce{CO2}$ to RuBP; two **3-PGA** form.`,
          t`**Glycolytic reversal**: ATP and $\ce{NADPH2}$ reduce 3-PGA to **3-PGAL**.`,
          t`**Regeneration**: 10 of every 12 3-PGAL remake 6 RuBP, using 6 ATP.`,
        ],
      },
      {
        title: "Counts",
        points: [
          t`One $\ce{CO2}$ needs 3 ATP and 2 $\ce{NADPH2}$.`,
          t`Six turns fix 6 $\ce{CO2}$ into one glucose.`,
          t`One glucose costs 18 ATP and 12 $\ce{NADPH2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many ATP and $\ce{NADPH2}$ fix 6 $\ce{CO2}$?`,
      steps: [
        t`Per $\ce{CO2}$: 3 ATP and 2 $\ce{NADPH2}$.`,
        t`$6 \times 3 = 18$; $6 \times 2 = 12$.`,
      ],
      answer: t`18 ATP and 12 $\ce{NADPH2}$.`,
    },
    visualSpec: t`A cycle of three arcs, carboxylation, glycolytic reversal and regeneration, with CO₂ in and sugar out.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks RuBP.",
      remediation: "RuBP is the acceptor.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks OAA.",
      remediation: "OAA is the C₄ product.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks 6-carbon.",
      remediation: "It is unstable and splits at once.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks carboxylation.",
      remediation: "That step fixes CO₂.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks regeneration.",
      remediation: "It uses ATP, not NADPH₂.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks photolysis.",
      remediation: "That is the light reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Uses 2 per CO₂.",
      remediation: "Add 1 ATP for regeneration.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Uses 1 per CO₂.",
      remediation: "Add 2 ATP for reduction.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Uses 5 per CO₂.",
      remediation: "30 per glucose is the C₄ figure.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "One turn per glucose.",
      remediation: "Each turn fixes one CO₂.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Three turns per glucose.",
      remediation: "Glucose has six carbons.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Counts 3-PGAL.",
      remediation: "Six turns give 12 3-PGAL.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says makes glucose.",
      remediation: "Glucose comes from 2 of the 12 3-PGAL.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says makes ATP.",
      remediation: "Regeneration uses ATP.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says releases oxygen.",
      remediation: "Oxygen comes from water.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(E)" },
      stem: t`In the Calvin cycle, the first stable product of carboxylation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "first_product" } },
      options: [
        { key: "A", text: t`the 6-carbon intermediate`, correct: false, misconceptionId: "C05-M3", value: "six_carbon" },
        { key: "B", text: t`3-PGA`, correct: true, value: "pga_3" },
        { key: "C", text: t`RuBP`, correct: false, misconceptionId: "C05-M1", value: "rubp_c" },
        { key: "D", text: t`oxaloacetic acid`, correct: false, misconceptionId: "C05-M2", value: "oaa_c" },
      ],
      solution: {
        steps: [
          t`The 6-carbon form splits.`,
          t`Two 3-PGA.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(E)" },
      stem: t`In which phase of the Calvin cycle do ATP and $\ce{NADPH2}$ reduce 3-PGA?`,
      verify: { kind: "value", inputs: {  }, params: { q: "reduce_phase" } },
      options: [
        { key: "A", text: t`Carboxylation`, correct: false, misconceptionId: "C05-M4", value: "carboxylation_c" },
        { key: "B", text: t`Regeneration of RuBP`, correct: false, misconceptionId: "C05-M5", value: "regeneration_c" },
        { key: "C", text: t`Photolysis`, correct: false, misconceptionId: "C05-M6", value: "photolysis_c" },
        { key: "D", text: t`Glycolytic reversal`, correct: true, value: "glycolytic_reversal" },
      ],
      solution: {
        steps: [
          t`3-PGA is reduced to 3-PGAL.`,
          t`Glycolytic reversal.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(E)" },
      stem: t`How many ATP molecules does the Calvin cycle use to fix 6 molecules of $\ce{CO2}$ into one glucose?`,
      verify: { kind: "value", inputs: { n: "6" }, params: { q: "atp_count" } },
      options: [
        { key: "A", text: t`$18$`, correct: true, value: "18" },
        { key: "B", text: t`$12$`, correct: false, misconceptionId: "C05-M7", value: "12" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C05-M8", value: "6" },
        { key: "D", text: t`$30$`, correct: false, misconceptionId: "C05-M9", value: "30" },
      ],
      solution: {
        steps: [
          t`3 ATP per $\ce{CO2}$.`,
          t`$6 \times 3 = 18$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(E)" },
      stem: t`How many turns of the Calvin cycle are needed to make 3 molecules of glucose?`,
      verify: { kind: "value", inputs: { g: "3" }, params: { q: "turns" } },
      options: [
        { key: "A", text: t`$9$`, correct: false, misconceptionId: "C05-M11", value: "9" },
        { key: "B", text: t`$36$`, correct: false, misconceptionId: "C05-M12", value: "36" },
        { key: "C", text: t`$18$`, correct: true, value: "18" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C05-M10", value: "3" },
      ],
      solution: {
        steps: [
          t`Six turns per glucose.`,
          t`$3 \times 6 = 18$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(E)" },
      stem: t`The regeneration phase of the Calvin cycle matters because`,
      verify: { kind: "value", inputs: {  }, params: { q: "regenerate" } },
      options: [
        { key: "A", text: t`RuBP must be ready to accept fresh $\ce{CO2}$`, correct: true, value: "accept_co2" },
        { key: "B", text: t`it makes the glucose`, correct: false, misconceptionId: "C05-M13", value: "makes_glucose" },
        { key: "C", text: t`it makes ATP for the light reaction`, correct: false, misconceptionId: "C05-M14", value: "makes_atp" },
        { key: "D", text: t`it releases oxygen`, correct: false, misconceptionId: "C05-M15", value: "releases_oxygen" },
      ],
      solution: {
        steps: [
          t`RuBP accepts each $\ce{CO2}$.`,
          t`It must be remade.`,
        ],
      },
    },
  ],
};
