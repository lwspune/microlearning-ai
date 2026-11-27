import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Leave warm milk with a spoon of curd overnight, and by morning it is all curd. What did the spoonful do?`,
    reveal: t`It added lactic acid bacteria, which multiplied and turned the milk sour and thick.`,
  },
  explanation: {
    intuition: [
      t`Many home foods depend on microbes.`,
      t`Most work by **fermentation**.`,
      t`Some also make food healthier.`,
    ],
    formal: [
      {
        title: "Curd and idli",
        points: [
          t`**Lactic acid bacteria** (*Lactobacillus*) curdle milk and partly digest casein.`,
          t`They check the growth of disease-causing microbes.`,
          t`Idli and dosa batter: *Leuconostoc* and *Streptococcus* release $\ce{CO2}$, puffing it up.`,
        ],
      },
      {
        title: "Bread",
        points: [
          t`Baker's yeast *Saccharomyces cerevisiae* ferments the dough.`,
          t`$\ce{CO2}$ makes the bread rise.`,
          t`Raw vegetables and pulses need no microbes.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does dosa batter rise when left overnight?`,
      steps: [
        t`Bacteria ferment the batter.`,
        t`They release $\ce{CO2}$ bubbles.`,
      ],
      answer: t`$\ce{CO2}$ from fermentation`,
    },
    visualSpec: t`Three bowls: curd, idli batter and bread dough, each with its microbe.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Says oxygen.",
      remediation: t`Fermentation releases $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Says lactic acid.",
      remediation: "Lactic acid sours, but gas puffs.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Says steam.",
      remediation: "The batter rises before steaming.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Says *Lactobacillus* alone.",
      remediation: "Idli uses other bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks *Acetobacter*.",
      remediation: "*Acetobacter* makes vinegar.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks *Rhizobium*.",
      remediation: "*Rhizobium* is in root nodules.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Says alcohol.",
      remediation: "Yeast makes alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Says fixes nitrogen.",
      remediation: "That is *Rhizobium*.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Says bread rising.",
      remediation: "That is yeast.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks raw vegetables.",
      remediation: "No microbes are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks pulses.",
      remediation: "No microbes are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks fresh fruit.",
      remediation: "No microbes are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says bacteria and oxygen.",
      remediation: t`Yeast releases $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says steam alone.",
      remediation: "Yeast gas raises it first.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says lactic acid.",
      remediation: t`$\ce{CO2}$ raises bread.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(1)" },
      stem: t`Idli batter becomes puffy because of`,
      verify: { kind: "value", inputs: {  }, params: { q: "idli" } },
      options: [
        { key: "A", text: t`steam alone`, correct: false, misconceptionId: "C05-M3", value: "steam_only" },
        { key: "B", text: t`$\ce{CO2}$ released by fermenting bacteria`, correct: true, value: "co2_gas" },
        { key: "C", text: t`oxygen`, correct: false, misconceptionId: "C05-M1", value: "oxygen_gas" },
        { key: "D", text: t`lactic acid`, correct: false, misconceptionId: "C05-M2", value: "lactic_acid_g" },
      ],
      solution: {
        steps: [
          t`Gas from fermentation.`,
          t`$\ce{CO2}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(1)" },
      stem: t`Idli and dosa batter is fermented by bacteria of the genera`,
      verify: { kind: "value", inputs: {  }, params: { q: "idli_bacteria" } },
      options: [
        { key: "A", text: t`*Lactobacillus* alone`, correct: false, misconceptionId: "C05-M4", value: "lactobacillus_only" },
        { key: "B", text: t`*Acetobacter*`, correct: false, misconceptionId: "C05-M5", value: "acetobacter_b" },
        { key: "C", text: t`*Rhizobium*`, correct: false, misconceptionId: "C05-M6", value: "rhizobium_b" },
        { key: "D", text: t`*Leuconostoc* and *Streptococcus*`, correct: true, value: "leuconostoc_streptococcus" },
      ],
      solution: {
        steps: [
          t`Air-borne bacteria.`,
          t`*Leuconostoc* and *Streptococcus*.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(5)" },
      stem: t`Besides curdling milk, lactic acid bacteria in curd`,
      verify: { kind: "value", inputs: {  }, params: { q: "lab" } },
      options: [
        { key: "A", text: t`check the growth of disease-causing microbes`, correct: true, value: "checks_pathogens" },
        { key: "B", text: t`make alcohol`, correct: false, misconceptionId: "C05-M7", value: "makes_alcohol" },
        { key: "C", text: t`fix nitrogen`, correct: false, misconceptionId: "C05-M8", value: "fixes_nitrogen" },
        { key: "D", text: t`make bread rise`, correct: false, misconceptionId: "C05-M9", value: "raises_bread" },
      ],
      solution: {
        steps: [
          t`They protect the gut.`,
          t`Check disease-causing microbes.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`Which of these foods is made with the help of microbes?`,
      verify: { kind: "value", inputs: {  }, params: { q: "food" } },
      options: [
        { key: "A", text: t`Pulses`, correct: false, misconceptionId: "C05-M11", value: "pulses_f" },
        { key: "B", text: t`Fresh fruit`, correct: false, misconceptionId: "C05-M12", value: "fresh_fruit" },
        { key: "C", text: t`Bread`, correct: true, value: "bread_f" },
        { key: "D", text: t`Raw vegetables`, correct: false, misconceptionId: "C05-M10", value: "raw_vegetables" },
      ],
      solution: {
        steps: [
          t`Yeast-raised.`,
          t`Bread.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q3(1)" },
      stem: t`Bread dough rises because`,
      verify: { kind: "value", inputs: {  }, params: { q: "bread" } },
      options: [
        { key: "A", text: t`baker's yeast releases $\ce{CO2}$`, correct: true, value: "yeast_co2" },
        { key: "B", text: t`bacteria release oxygen`, correct: false, misconceptionId: "C05-M13", value: "bacteria_oxygen" },
        { key: "C", text: t`steam alone lifts it`, correct: false, misconceptionId: "C05-M14", value: "steam_only" },
        { key: "D", text: t`lactic acid expands it`, correct: false, misconceptionId: "C05-M15", value: "lactic_acid_g" },
      ],
      solution: {
        steps: [
          t`Yeast fermentation.`,
          t`Yeast releases $\ce{CO2}$.`,
        ],
      },
    },
  ],
};
