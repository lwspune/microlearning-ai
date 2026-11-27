import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`On a hot, bright day a wheat field loses part of the carbon it fixed. Where does it go?`,
    reveal: t`Into photorespiration: RuBisCO takes up oxygen instead of $\ce{CO2}$, and carbon is given out as $\ce{CO2}$.`,
  },
  explanation: {
    intuition: [
      t`RuBisCO can act on $\ce{CO2}$ or on oxygen.`,
      t`With high oxygen and low $\ce{CO2}$, it acts as an **oxygenase**.`,
      t`This wastes fixed carbon: **photorespiration**.`,
    ],
    formal: [
      {
        title: "What happens",
        points: [
          t`RuBP and $\ce{O2}$ give one PGA and one 2-carbon **phosphoglycolate**.`,
          t`It involves the chloroplasts, peroxisomes and mitochondria of green cells.`,
          t`About 25% of the fixed carbon is lost as $\ce{CO2}$.`,
        ],
      },
      {
        title: "When and where",
        points: [
          t`It needs light, so it runs only in the daytime.`,
          t`High temperature, bright light, high $\ce{O2}$ and low $\ce{CO2}$ favour it.`,
          t`It is a feature of $\mathrm{C_3}$ plants, not $\mathrm{C_4}$ plants.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does photorespiration rise on a hot, bright afternoon?`,
      steps: [
        t`Oxygen builds up and $\ce{CO2}$ falls.`,
        t`RuBisCO then acts as an oxygenase.`,
      ],
      answer: t`High $\ce{O2}$ and low $\ce{CO2}$ favour oxygenation.`,
    },
    visualSpec: t`RuBisCO at a fork: CO₂ in gives two PGA; O₂ in gives PGA and phosphoglycolate.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks malic acid and PEP.",
      remediation: "These belong to the C₄ pathway.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks PEP.",
      remediation: "PEP is the C₄ acceptor.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks malic acid.",
      remediation: "Malic acid is a C₄ compound.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Says not in chloroplasts.",
      remediation: "It starts there, with RuBisCO.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Says not daytime only.",
      remediation: "It needs light.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Says not C₃.",
      remediation: "It is a C₃ feature.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says gives ATP.",
      remediation: "Respiration gives ATP; this wastes carbon.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says all cells.",
      remediation: "Only green cells, in light.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says glucose.",
      remediation: "Its substrate is RuBP.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Reverses the gases.",
      remediation: "High O₂ and low CO₂ favour it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Says dark and cool.",
      remediation: "It needs light and heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Says high CO₂.",
      remediation: "High CO₂ keeps RuBisCO a carboxylase.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says splits water.",
      remediation: "That is photolysis.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says releases oxygen.",
      remediation: "It uses oxygen and gives CO₂.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says destroys chlorophyll.",
      remediation: "That is photo-oxidation.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(J)" },
      stem: t`At a high concentration of oxygen, RuBP carboxylase converts RuBP to`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxygenase" } },
      options: [
        { key: "A", text: t`malic acid and PEP`, correct: false, misconceptionId: "C06-M1", value: "malic_pep" },
        { key: "B", text: t`PGA and PEP`, correct: false, misconceptionId: "C06-M2", value: "pga_pep" },
        { key: "C", text: t`PGA and malic acid`, correct: false, misconceptionId: "C06-M3", value: "pga_malic" },
        { key: "D", text: t`PGA and phosphoglycolate`, correct: true, value: "pga_phosphoglycolate" },
      ],
      solution: {
        steps: [
          t`Oxygen reacts with RuBP.`,
          t`PGA and phosphoglycolate.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(C)" },
      stem: t`Which statement about photorespiration is wrong?`,
      verify: { kind: "value", inputs: {  }, params: { q: "wrong_statement" } },
      options: [
        { key: "A", text: t`It is characteristic of $\mathrm{C_4}$ plants.`, correct: true, value: "c4_feature" },
        { key: "B", text: t`It occurs in chloroplasts.`, correct: false, misconceptionId: "C06-M4", value: "in_chloroplast" },
        { key: "C", text: t`It occurs in the daytime only.`, correct: false, misconceptionId: "C06-M5", value: "daytime_only" },
        { key: "D", text: t`It is characteristic of $\mathrm{C_3}$ plants.`, correct: false, misconceptionId: "C06-M6", value: "c3_feature" },
      ],
      solution: {
        steps: [
          t`C₄ plants avoid it.`,
          t`The C₄ statement is wrong.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(B)" },
      stem: t`Unlike respiration, photorespiration`,
      verify: { kind: "value", inputs: {  }, params: { q: "vs_respiration" } },
      options: [
        { key: "A", text: t`occurs only in light, in green cells of $\mathrm{C_3}$ plants`, correct: true, value: "light_c3_only" },
        { key: "B", text: t`releases energy as ATP for life processes`, correct: false, misconceptionId: "C06-M7", value: "gives_atp" },
        { key: "C", text: t`occurs in all living cells`, correct: false, misconceptionId: "C06-M8", value: "all_cells" },
        { key: "D", text: t`uses glucose as its substrate`, correct: false, misconceptionId: "C06-M9", value: "glucose_substrate" },
      ],
      solution: {
        steps: [
          t`Light, green C₃ cells only.`,
          t`Respiration runs in all cells, always.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(B)" },
      stem: t`Photorespiration is favoured by`,
      verify: { kind: "value", inputs: {  }, params: { q: "conditions" } },
      options: [
        { key: "A", text: t`bright light with high $\ce{CO2}$`, correct: false, misconceptionId: "C06-M12", value: "bright_high_co2" },
        { key: "B", text: t`high temperature, bright light, high $\ce{O2}$, low $\ce{CO2}$`, correct: true, value: "hot_bright_high_o2" },
        { key: "C", text: t`low $\ce{O2}$ and high $\ce{CO2}$`, correct: false, misconceptionId: "C06-M10", value: "low_o2_high_co2" },
        { key: "D", text: t`darkness and cool weather`, correct: false, misconceptionId: "C06-M11", value: "dark_cool" },
      ],
      solution: {
        steps: [
          t`Heat and bright light.`,
          t`High O₂ and low CO₂.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(B)" },
      stem: t`Photorespiration is called wasteful because`,
      verify: { kind: "value", inputs: {  }, params: { q: "wasteful" } },
      options: [
        { key: "A", text: t`about 25% of the fixed carbon is lost as $\ce{CO2}$`, correct: true, value: "carbon_lost" },
        { key: "B", text: t`it splits water`, correct: false, misconceptionId: "C06-M13", value: "splits_water" },
        { key: "C", text: t`it releases oxygen`, correct: false, misconceptionId: "C06-M14", value: "releases_o2" },
        { key: "D", text: t`it destroys chlorophyll`, correct: false, misconceptionId: "C06-M15", value: "destroys_chlorophyll" },
      ],
      solution: {
        steps: [
          t`Carbon is given out as CO₂.`,
          t`About 25% is lost.`,
        ],
      },
    },
  ],
};
