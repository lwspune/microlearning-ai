import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Crude oil is a black mixture of hundreds of compounds. A refinery turns it into petrol, kerosene and diesel with one main step. What is it?`,
    reveal: t`Fractional distillation: compounds boil off at different temperatures and condense at different heights of a tall column.`,
  },
  explanation: {
    intuition: [
      t`Distillation separates liquids by their boiling points.`,
      t`The liquid is boiled; its vapour is cooled in a condenser back to liquid.`,
      t`The lower-boiling liquid distils over first.`,
      t`Close boiling points need a fractionating column; heat-sensitive liquids need low pressure.`,
    ],
    formal: [
      {
        title: "Kinds of distillation",
        points: [
          t`**Simple**: liquids with very different boiling points.`,
          t`**Fractional**: liquids with close boiling points, using a fractionating column.`,
          t`**Under reduced pressure**: liquids that decompose at their normal boiling point (glycerol).`,
        ],
      },
      {
        title: "The condenser",
        points: [
          t`Cold water flows through the outer jacket and cools the vapour.`,
          t`Water enters at the lower outlet and leaves at the upper one, so the jacket stays full.`,
        ],
      },
    ],
    worked: {
      prompt: t`Water (bp 373 K) and a dye are in solution. Which method recovers pure water?`,
      steps: [
        t`The dye does not boil; water does.`,
        t`Very different boiling behaviour.`,
      ],
      answer: t`Simple distillation`,
    },
    visualSpec: t`Heat a mixture and watch each liquid boil off, rise and condense in turn.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Uses simple distillation for close boiling points.",
      remediation: "Close boiling points need a fractionating column.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Uses reduced pressure for any mixture.",
      remediation: "Reduced pressure is for liquids that decompose on boiling.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks sublimation.",
      remediation: "Sublimation is for solids that turn straight into vapour.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks fractional distillation for a liquid that decomposes.",
      remediation: "At normal pressure glycerol would decompose; lower the pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks glycerol can be filtered off.",
      remediation: "Glycerol is a dissolved liquid; filtration cannot remove it.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks glycerol crystallises out.",
      remediation: "Glycerol is a liquid; it is distilled at reduced pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks the condenser heats the mixture.",
      remediation: "The flask is heated; the condenser cools the vapour.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Thinks the condenser separates solids.",
      remediation: "Solids stay in the flask; the condenser turns vapour into liquid.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Thinks the condenser measures the boiling point.",
      remediation: "The thermometer measures temperature; the condenser cools.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks the cooling water boils.",
      remediation: "The water only warms; the problem is that the jacket does not fill.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks nothing changes.",
      remediation: "Water entering at the top runs straight out, leaving the jacket partly empty.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks the distillate flows back.",
      remediation: "The slope of the condenser sets the flow; poor cooling is the problem.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Confuses fractional with reduced-pressure distillation.",
      remediation: "Decomposing liquids need reduced pressure; close boiling points need fractional.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Confuses distillation with a separating funnel.",
      remediation: "Immiscible liquids are separated in a separating funnel.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Reverses the rule.",
      remediation: "Far-apart boiling points need only simple distillation.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.1 (D)" },
      stem: t`Acetone (bp 329 K) and benzene (bp 353 K) are mixed. They can be separated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "acetone" } },
      options: [
        { key: "A", text: t`simple distillation`, correct: false, misconceptionId: "C02-M1", value: "simple" },
        { key: "B", text: t`fractional distillation`, correct: true, value: "fractional" },
        { key: "C", text: t`distillation under reduced pressure`, correct: false, misconceptionId: "C02-M2", value: "reduced_pressure" },
        { key: "D", text: t`sublimation`, correct: false, misconceptionId: "C02-M3", value: "sublimation" },
      ],
      solution: {
        steps: [
          t`The boiling points differ by only 24 K.`,
          t`Fractional distillation.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.1 (B)" },
      stem: t`Glycerol decomposes at its boiling point. In the soap industry it is separated from spent lye by`,
      verify: { kind: "value", inputs: {  }, params: { q: "glycerol" } },
      options: [
        { key: "A", text: t`fractional distillation`, correct: false, misconceptionId: "C02-M4", value: "fractional" },
        { key: "B", text: t`filtration`, correct: false, misconceptionId: "C02-M5", value: "filtration" },
        { key: "C", text: t`distillation under reduced pressure`, correct: true, value: "reduced_pressure" },
        { key: "D", text: t`crystallisation`, correct: false, misconceptionId: "C02-M6", value: "crystallisation" },
      ],
      solution: {
        steps: [
          t`Glycerol decomposes at its normal boiling point.`,
          t`Lower the pressure to lower the boiling point.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (C)" },
      stem: t`Why is a condenser used in distillation?`,
      verify: { kind: "value", inputs: {  }, params: { q: "condenser" } },
      options: [
        { key: "A", text: t`to measure the boiling point`, correct: false, misconceptionId: "C02-M9", value: "measures_bp" },
        { key: "B", text: t`to separate solids from the liquid`, correct: false, misconceptionId: "C02-M8", value: "separates_solids" },
        { key: "C", text: t`to heat the mixture`, correct: false, misconceptionId: "C02-M7", value: "heats" },
        { key: "D", text: t`to cool the vapour back into a liquid`, correct: true, value: "cools_vapour" },
      ],
      solution: {
        steps: [
          t`Vapour leaves the flask.`,
          t`The condenser cools it back to liquid.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (F)" },
      stem: t`What happens if the tap is connected to the upper outlet of the condenser instead of the lower one?`,
      verify: { kind: "value", inputs: {  }, params: { q: "outlet" } },
      options: [
        { key: "A", text: t`the jacket does not fill with water, so the vapour is not cooled well`, correct: true, value: "jacket_not_full" },
        { key: "B", text: t`the distillate flows back into the flask`, correct: false, misconceptionId: "C02-M12", value: "flows_back" },
        { key: "C", text: t`the cooling water boils`, correct: false, misconceptionId: "C02-M10", value: "water_boils" },
        { key: "D", text: t`nothing changes`, correct: false, misconceptionId: "C02-M11", value: "no_change" },
      ],
      solution: {
        steps: [
          t`Water entering at the top drains out at once.`,
          t`The jacket does not fill; cooling is poor.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (K)" },
      stem: t`Fractional distillation is needed instead of simple distillation when`,
      verify: { kind: "value", inputs: {  }, params: { q: "fractional_when" } },
      options: [
        { key: "A", text: t`the boiling points are far apart`, correct: false, misconceptionId: "C02-M15", value: "far_apart" },
        { key: "B", text: t`the liquids' boiling points are close together`, correct: true, value: "close_bp" },
        { key: "C", text: t`a liquid decomposes at its boiling point`, correct: false, misconceptionId: "C02-M13", value: "decomposes" },
        { key: "D", text: t`the liquids do not mix`, correct: false, misconceptionId: "C02-M14", value: "immiscible" },
      ],
      solution: {
        steps: [
          t`Close boiling points boil off together.`,
          t`A fractionating column separates them.`,
        ],
      },
    },
  ],
};
