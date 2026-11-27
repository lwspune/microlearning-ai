import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A polar bear sleeps through the winter, and a snail seals itself shut through the summer. Why switch off?`,
    reveal: t`To escape a harsh season they cannot avoid, by lowering their activity until conditions improve.`,
  },
  explanation: {
    intuition: [
      t`Organisms cope with stress in four ways.`,
      t`They **regulate**, **conform**, **migrate** or **suspend** activity.`,
      t`Over generations they evolve **adaptations**.`,
    ],
    formal: [
      {
        title: "Responses",
        points: [
          t`**Regulate**: keep body temperature constant (endotherms).`,
          t`**Conform**: let it change with the surroundings (**ectotherms**).`,
          t`**Migrate**: move away for the season.`,
        ],
      },
      {
        title: "Suspending activity",
        points: [
          t`**Hibernation**: winter (polar bear).`,
          t`**Aestivation**: summer (snails, some fish).`,
          t`**Dormancy**: plant seeds lower their metabolism. Desert animals hide by day and conserve water.`,
        ],
      },
    ],
    worked: {
      prompt: t`A desert lizard basks in the sun in the morning and hides in shade at noon. Which response is this?`,
      steps: [
        t`It changes its behaviour to hold its temperature.`,
        t`That is behavioural regulation.`,
      ],
      answer: t`Behavioural regulation`,
    },
    visualSpec: t`Two calendars: a polar bear asleep in winter, a snail sealed in summer.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks aestivation.",
      remediation: "Aestivation is in summer.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks migration.",
      remediation: "Polar bears stay put.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks regulation.",
      remediation: "It suspends activity.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks hibernation.",
      remediation: "Hibernation is in winter.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks dormancy.",
      remediation: "Dormancy is in seeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks migration.",
      remediation: "Snails cannot migrate far.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks mammals.",
      remediation: "Mammals hibernate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks snails.",
      remediation: "Snails aestivate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks birds.",
      remediation: "Birds migrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks conform.",
      remediation: "Conformers let it change.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks migrate.",
      remediation: "That moves away.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks suspend.",
      remediation: "That stops activity.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks endotherms.",
      remediation: "Endotherms stay constant.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks regulators.",
      remediation: "Regulators stay constant.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks homeotherms.",
      remediation: "Homeotherms stay constant.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(5)" },
      stem: t`A polar bear escapes the winter cold by`,
      verify: { kind: "value", inputs: {  }, params: { q: "polar" } },
      options: [
        { key: "A", text: t`hibernation`, correct: true, value: "hibernation_r" },
        { key: "B", text: t`aestivation`, correct: false, misconceptionId: "C02-M1", value: "aestivation_r" },
        { key: "C", text: t`migration`, correct: false, misconceptionId: "C02-M2", value: "migration_r" },
        { key: "D", text: t`regulating its temperature`, correct: false, misconceptionId: "C02-M3", value: "regulation_r" },
      ],
      solution: {
        steps: [
          t`Winter sleep.`,
          t`Hibernation.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(5)" },
      stem: t`Some snails and fish escape the summer heat by`,
      verify: { kind: "value", inputs: {  }, params: { q: "snail" } },
      options: [
        { key: "A", text: t`hibernation`, correct: false, misconceptionId: "C02-M4", value: "hibernation_r" },
        { key: "B", text: t`dormancy`, correct: false, misconceptionId: "C02-M5", value: "dormancy_r" },
        { key: "C", text: t`migration`, correct: false, misconceptionId: "C02-M6", value: "migration_r" },
        { key: "D", text: t`aestivation`, correct: true, value: "aestivation_r" },
      ],
      solution: {
        steps: [
          t`Summer sleep.`,
          t`Aestivation.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(1)" },
      stem: t`Dormancy, which lowers metabolism to survive stress, is shown by`,
      verify: { kind: "value", inputs: {  }, params: { q: "dormancy" } },
      options: [
        { key: "A", text: t`birds`, correct: false, misconceptionId: "C02-M9", value: "birds_o" },
        { key: "B", text: t`the seeds of plants`, correct: true, value: "plants_o" },
        { key: "C", text: t`mammals`, correct: false, misconceptionId: "C02-M7", value: "mammals_o" },
        { key: "D", text: t`snails`, correct: false, misconceptionId: "C02-M8", value: "snails_o" },
      ],
      solution: {
        steps: [
          t`Seeds.`,
          t`Plants.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Organisms and Populations/2024 Q. 21" },
      stem: t`Keeping body temperature constant by physiological and behavioural changes is to`,
      verify: { kind: "value", inputs: {  }, params: { q: "regulate" } },
      options: [
        { key: "A", text: t`suspend activity`, correct: false, misconceptionId: "C02-M12", value: "suspend_r" },
        { key: "B", text: t`regulate`, correct: true, value: "regulate_r" },
        { key: "C", text: t`conform`, correct: false, misconceptionId: "C02-M10", value: "conform_r" },
        { key: "D", text: t`migrate`, correct: false, misconceptionId: "C02-M11", value: "migrate_r" },
      ],
      solution: {
        steps: [
          t`Constant temperature.`,
          t`Regulate.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(5)" },
      stem: t`Animals whose body temperature changes with the surroundings are`,
      verify: { kind: "value", inputs: {  }, params: { q: "ecto" } },
      options: [
        { key: "A", text: t`homeotherms`, correct: false, misconceptionId: "C02-M15", value: "homeotherms_o" },
        { key: "B", text: t`ectotherms`, correct: true, value: "ectotherms_o" },
        { key: "C", text: t`endotherms`, correct: false, misconceptionId: "C02-M13", value: "endotherms_o" },
        { key: "D", text: t`regulators`, correct: false, misconceptionId: "C02-M14", value: "regulators_o" },
      ],
      solution: {
        steps: [
          t`Temperature follows surroundings.`,
          t`Ectotherms.`,
        ],
      },
    },
  ],
};
