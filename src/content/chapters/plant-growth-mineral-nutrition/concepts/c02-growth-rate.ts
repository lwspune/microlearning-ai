import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Two leaves each grow by 5 cm² in a day. One started at 5 cm², the other at 50 cm². Did they grow equally fast?`,
    reveal: t`In absolute terms, yes. But the small leaf doubled while the big one grew by a tenth: its relative growth rate is ten times higher.`,
  },
  explanation: {
    intuition: [
      t`**Growth rate** is the increase in growth per unit time.`,
      t`It can be arithmetic or geometric.`,
      t`It can be measured in absolute or relative terms.`,
    ],
    formal: [
      {
        title: "Arithmetic and geometric",
        points: [
          t`**Arithmetic**: after mitosis, one daughter cell keeps dividing and the other matures; growth is a straight line.`,
          t`**Geometric**: both daughters keep dividing, so $n$ divisions give $2^n$ cells.`,
          t`Geometric growth slows later as nutrients run short.`,
        ],
      },
      {
        title: "AGR and RGR",
        points: [
          t`**Absolute growth rate (AGR)**: total growth per unit time.`,
          t`**Relative growth rate (RGR)**: growth per unit time ÷ initial size.`,
          t`$\text{RGR} = \dfrac{\text{final} - \text{initial}}{\text{initial}} \times 100\%$`,
        ],
      },
    ],
    worked: {
      prompt: t`Leaf A grows from 5 to 10 cm²; leaf B from 50 to 55 cm². Compare their RGR.`,
      steps: [
        t`Both have AGR 5 cm² per day.`,
        t`RGR of A $= 5/5 = 100\%$; RGR of B $= 5/50 = 10\%$.`,
      ],
      answer: t`A grows ten times faster, relatively`,
    },
    visualSpec: t`Two leaves, one doubling and one growing by a tenth, with the same absolute gain.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks arithmetic growth.",
      remediation: "In arithmetic growth only one daughter divides.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks growth ratio.",
      remediation: "That is not a type of growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks qualitative growth.",
      remediation: "This is a count of cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Multiplies by 2.",
      remediation: "Cells double each round.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Adds one per round.",
      remediation: "That is arithmetic growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Counts one round too few.",
      remediation: t`After 5 rounds there are $2^5$ cells.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says both divide.",
      remediation: "That is geometric growth.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says neither divides.",
      remediation: "One daughter keeps dividing.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says divide once.",
      remediation: "Division goes on.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Gives the AGR.",
      remediation: "RGR divides by the initial size.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Divides by the final size.",
      remediation: "Divide by the initial size.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Uses final ÷ initial.",
      remediation: "Use the increase, not the final size.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks relative rate.",
      remediation: "RGR divides by initial size.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks grand period.",
      remediation: "That is a time, not a rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks efficiency index.",
      remediation: "That is another name for RGR.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2026 Q. 1(i)" },
      stem: t`A cell divides mitotically into two, and both daughter cells divide and redivide repeatedly. This growth is`,
      verify: { kind: "value", inputs: {  }, params: { q: "geometric" } },
      options: [
        { key: "A", text: t`geometric growth`, correct: true, value: "geometric_growth" },
        { key: "B", text: t`arithmetic growth`, correct: false, misconceptionId: "C02-M1", value: "arithmetic_growth" },
        { key: "C", text: t`growth ratio`, correct: false, misconceptionId: "C02-M2", value: "growth_ratio" },
        { key: "D", text: t`qualitative growth`, correct: false, misconceptionId: "C02-M3", value: "qualitative_growth" },
      ],
      solution: {
        steps: [
          t`Both daughters keep dividing.`,
          t`Geometric growth.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "authored" },
      stem: t`A cell grows geometrically. How many cells are there after 5 rounds of division?`,
      verify: { kind: "value", inputs: { n: "5" }, params: { q: "cells" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C02-M4", value: "10" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C02-M5", value: "6" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C02-M6", value: "16" },
        { key: "D", text: t`$32$`, correct: true, value: "32" },
      ],
      solution: {
        steps: [
          t`Cells double each round.`,
          t`$2^5 = 32$ cells.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/plant-growth-12-bio/Ex Q3(2)" },
      stem: t`In arithmetic growth, after each mitosis`,
      verify: { kind: "value", inputs: {  }, params: { q: "arithmetic" } },
      options: [
        { key: "A", text: t`the cells divide only once`, correct: false, misconceptionId: "C02-M9", value: "divide_once" },
        { key: "B", text: t`one daughter cell keeps dividing and the other matures`, correct: true, value: "one_divides" },
        { key: "C", text: t`both daughter cells keep dividing`, correct: false, misconceptionId: "C02-M7", value: "both_divide" },
        { key: "D", text: t`neither daughter cell divides again`, correct: false, misconceptionId: "C02-M8", value: "neither_divides" },
      ],
      solution: {
        steps: [
          t`One daughter matures.`,
          t`One keeps dividing.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2025 Q. 8" },
      stem: t`A leaf grows from 5 cm² to 10 cm² in a day. What is its relative growth rate, in % per day?`,
      verify: { kind: "value", inputs: { a: "5", b: "10" }, params: { q: "rgr" } },
      options: [
        { key: "A", text: t`$200$`, correct: false, misconceptionId: "C02-M12", value: "200" },
        { key: "B", text: t`$100$`, correct: true, value: "100" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C02-M10", value: "5" },
        { key: "D", text: t`$50$`, correct: false, misconceptionId: "C02-M11", value: "50" },
      ],
      solution: {
        steps: [
          t`Increase $= 10 - 5 = 5$ cm².`,
          t`RGR $= 5/5 \times 100 = 100\%$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Plant Growth and Mineral Nutrition/2025 Q. 8" },
      stem: t`The total growth of a plant or plant part per unit time is its`,
      verify: { kind: "value", inputs: {  }, params: { q: "agr" } },
      options: [
        { key: "A", text: t`efficiency index`, correct: false, misconceptionId: "C02-M15", value: "efficiency_index" },
        { key: "B", text: t`absolute growth rate`, correct: true, value: "absolute_rate" },
        { key: "C", text: t`relative growth rate`, correct: false, misconceptionId: "C02-M13", value: "relative_rate" },
        { key: "D", text: t`grand period of growth`, correct: false, misconceptionId: "C02-M14", value: "grand_period" },
      ],
      solution: {
        steps: [
          t`Total growth per unit time.`,
          t`Absolute growth rate.`,
        ],
      },
    },
  ],
};
