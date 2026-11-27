import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A lake has 500 fish one year and 530 the next. What made the number change?`,
    reveal: t`Four flows: births and fish arriving added to it; deaths and fish leaving took away.`,
  },
  explanation: {
    intuition: [
      t`A **population** is a group of one species in a defined area.`,
      t`It has attributes an individual lacks.`,
      t`Its size changes with four processes.`,
    ],
    formal: [
      {
        title: "Attributes",
        points: [
          t`Size, density, birth rate (**natality**), death rate (**mortality**), age structure.`,
          t`**Absolute** natality or mortality: under ideal conditions.`,
          t`**Realized**: when environmental pressures act.`,
        ],
      },
      {
        title: "Change in size",
        points: [
          t`Births (B) and **immigration** (I) add.`,
          t`Deaths (D) and **emigration** (E) remove.`,
          t`$N_{t+1} = N_t + B + I - D - E$`,
        ],
      },
    ],
    worked: {
      prompt: t`A colony of 200 has 30 births and 50 deaths, no migration. What is its new size?`,
      steps: [
        t`$200 + 30 - 50$.`,
        t`There is no migration.`,
      ],
      answer: t`180`,
    },
    visualSpec: t`A population box with arrows in for births and immigration and out for deaths and emigration.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks different species.",
      remediation: "That is a community.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks all components.",
      remediation: "That is an ecosystem.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks one individual.",
      remediation: "A population is a group.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks absolute mortality.",
      remediation: "That is deaths.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks realized natality.",
      remediation: "Realized is under pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks realized mortality.",
      remediation: "That is deaths.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks absolute mortality.",
      remediation: "Absolute is ideal conditions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks absolute natality.",
      remediation: "That is births.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks realized natality.",
      remediation: "That is births.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says entering.",
      remediation: "That is immigration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says births.",
      remediation: "That is natality.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says deaths.",
      remediation: "That is mortality.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Adds everything.",
      remediation: "Deaths and emigrants are subtracted.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Ignores migration.",
      remediation: "Immigration and emigration count.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Swaps I and E.",
      remediation: "Immigrants add; emigrants subtract.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q3(7)" },
      stem: t`A population is a group of`,
      verify: { kind: "value", inputs: {  }, params: { q: "population" } },
      options: [
        { key: "A", text: t`all living and non-living parts of an area`, correct: false, misconceptionId: "C03-M2", value: "all_components" },
        { key: "B", text: t`one individual and its offspring`, correct: false, misconceptionId: "C03-M3", value: "one_individual" },
        { key: "C", text: t`individuals of one species in a defined area`, correct: true, value: "same_species_area" },
        { key: "D", text: t`different species in one area`, correct: false, misconceptionId: "C03-M1", value: "different_species" },
      ],
      solution: {
        steps: [
          t`One species, one area.`,
          t`Individuals of one species.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Organisms and Populations/2024 Q. 1(ix)" },
      stem: t`The number of births under ideal conditions is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ideal_births" } },
      options: [
        { key: "A", text: t`realized natality`, correct: false, misconceptionId: "C03-M5", value: "realized_natality" },
        { key: "B", text: t`realized mortality`, correct: false, misconceptionId: "C03-M6", value: "realized_mortality" },
        { key: "C", text: t`absolute natality`, correct: true, value: "absolute_natality" },
        { key: "D", text: t`absolute mortality`, correct: false, misconceptionId: "C03-M4", value: "absolute_mortality" },
      ],
      solution: {
        steps: [
          t`Ideal births.`,
          t`Absolute natality.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Organisms and Populations/2026 Q. 1(x)" },
      stem: t`The number of deaths when environmental pressures come into play is`,
      verify: { kind: "value", inputs: {  }, params: { q: "real_deaths" } },
      options: [
        { key: "A", text: t`absolute mortality`, correct: false, misconceptionId: "C03-M7", value: "absolute_mortality" },
        { key: "B", text: t`absolute natality`, correct: false, misconceptionId: "C03-M8", value: "absolute_natality" },
        { key: "C", text: t`realized natality`, correct: false, misconceptionId: "C03-M9", value: "realized_natality" },
        { key: "D", text: t`realized mortality`, correct: true, value: "realized_mortality" },
      ],
      solution: {
        steps: [
          t`Actual deaths.`,
          t`Realized mortality.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Organisms and Populations/2024 Q. 2(viii)" },
      stem: t`Emigration is the number of individuals that`,
      verify: { kind: "value", inputs: {  }, params: { q: "emigration" } },
      options: [
        { key: "A", text: t`are born`, correct: false, misconceptionId: "C03-M11", value: "births_e" },
        { key: "B", text: t`die`, correct: false, misconceptionId: "C03-M12", value: "deaths_e" },
        { key: "C", text: t`leave the habitat, lowering density`, correct: true, value: "leave_habitat" },
        { key: "D", text: t`enter the habitat`, correct: false, misconceptionId: "C03-M10", value: "enter_habitat" },
      ],
      solution: {
        steps: [
          t`Leaving the habitat.`,
          t`It lowers density.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/organisms-populations-12-bio/Ex Q4(2)" },
      stem: t`A population of 500 deer has, in a year, 60 births, 20 immigrants, 40 deaths and 10 emigrants. What is its size at the end of the year?`,
      verify: { kind: "value", inputs: { n: "500", b: "60", i: "20", d: "40", e: "10" }, params: { q: "change" } },
      options: [
        { key: "A", text: t`$530$`, correct: true, value: "530" },
        { key: "B", text: t`$630$`, correct: false, misconceptionId: "C03-M13", value: "630" },
        { key: "C", text: t`$520$`, correct: false, misconceptionId: "C03-M14", value: "520" },
        { key: "D", text: t`$510$`, correct: false, misconceptionId: "C03-M15", value: "510" },
      ],
      solution: {
        steps: [
          t`$500 + 60 + 20 - 40 - 10$.`,
          t`530.`,
        ],
      },
    },
  ],
};
