import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A chemist burns $0.2\ \mathrm{g}$ of a compound and weighs only the $\ce{CO2}$ formed. How can that give the compound's percentage of carbon?`,
    reveal: t`All the carbon ends up in $\ce{CO2}$, and $12$ of every $44\ \mathrm{g}$ of $\ce{CO2}$ is carbon.`,
  },
  explanation: {
    intuition: [
      t`To find how much of an element a compound holds, turn it into something easy to weigh or measure.`,
      t`Every atom of the element ends up in that product.`,
      t`The product's formula tells what fraction of it is the element.`,
      t`Percentage $=$ mass of element ÷ mass of compound $\times 100$.`,
    ],
    formal: [
      {
        title: "Carbon and hydrogen",
        points: [
          t`Burn the compound in oxygen (Liebig's method).`,
          t`$\% \ce{C} = \dfrac{12}{44} \times \dfrac{m(\ce{CO2})}{m} \times 100$`,
          t`$\% \ce{H} = \dfrac{2}{18} \times \dfrac{m(\ce{H2O})}{m} \times 100$`,
          t`Here $m$ is the mass of the compound taken.`,
        ],
      },
      {
        title: "Nitrogen",
        points: [
          t`**Kjeldahl's method**: heat with conc. $\ce{H2SO4}$; nitrogen becomes ammonium sulfate.`,
          t`Free the $\ce{NH3}$ with alkali and absorb it in a known volume of standard acid.`,
          t`$\ce{2NH3 + H2SO4 -> (NH4)2SO4}$: two $\ce{NH3}$ per $\ce{H2SO4}$.`,
          t`Kjeldahl fails for nitro, azo and ring nitrogen (pyridine).`,
          t`**Dumas' method** works for all: measure the $\ce{N2}$ gas formed.`,
        ],
      },
      {
        title: "Halogens and sulfur",
        points: [
          t`**Carius' method**: heat with fuming $\ce{HNO3}$ and $\ce{AgNO3}$.`,
          t`$\% \ce{Br} = \dfrac{80}{188} \times \dfrac{m(\ce{AgBr})}{m} \times 100$`,
          t`Sulfur is oxidised to sulfate and weighed as $\ce{BaSO4}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`In Carius' method, $0.20\ \mathrm{g}$ of a compound gave $0.287\ \mathrm{g}$ of AgCl (molar mass $143.5$). Find the percentage of chlorine.`,
      steps: [
        t`AgCl is $35.5/143.5$ chlorine.`,
        t`$\% \ce{Cl} = \dfrac{35.5}{143.5} \times \dfrac{0.287}{0.20} \times 100$`,
        t`$= 35.5\%$`,
      ],
      answer: t`$35.5\%$`,
    },
    visualSpec: t`A bar for the compound's mass splitting into its elements as each estimation is done.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Uses water's fraction for carbon.",
      remediation: t`Carbon is in $\ce{CO2}$: use $12/44$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Forgets to multiply by 100.",
      remediation: "A percentage needs the fraction times 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Forgets that $\ce{CO2}$ is not all carbon.`,
      remediation: t`Only $12/44$ of $\ce{CO2}$ is carbon.`,
      fallback: { kind: "ext", topic: "molar mass (Some Basic Concepts of Chemistry)" },
    },
    {
      id: "C10-M4",
      mistake: "Counts one H per water.",
      remediation: t`$\ce{H2O}$ has two H: use $2/18$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: t`Uses $\ce{CO2}$'s mass for hydrogen.`,
      remediation: t`Hydrogen is in water: use $2/18$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Forgets to multiply by 100.",
      remediation: "A percentage needs the fraction times 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: t`Takes one $\ce{NH3}$ per $\ce{H2SO4}$.`,
      remediation: t`$\ce{H2SO4}$ is dibasic: it takes two $\ce{NH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: t`Uses the mass of $\ce{NH3}$.`,
      remediation: t`Only the nitrogen counts: $14\ \mathrm{g}$ per mole of $\ce{NH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Forgets to multiply by 100.",
      remediation: "A percentage needs the fraction times 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Takes AgBr's mass as bromine's.",
      remediation: t`Only $80/188$ of AgBr is bromine.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Takes silver's share.",
      remediation: t`The bromine fraction is $80/188$, not $108/188$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Divides by silver's mass.",
      remediation: t`Divide by AgBr's molar mass, $188$, not $108$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Picks Kjeldahl's method.",
      remediation: "Ring nitrogen is not turned into ammonium sulfate.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Picks Carius' method.",
      remediation: "Carius estimates halogens and sulfur.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Picks Lassaigne's test.",
      remediation: "Lassaigne's test only detects nitrogen; it does not measure it.",
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "authored" },
      stem: t`On complete combustion, $0.246\ \mathrm{g}$ of an organic compound gave $0.198\ \mathrm{g}$ of $\ce{CO2}$ and $0.1014\ \mathrm{g}$ of $\ce{H2O}$. The percentage of carbon is`,
      verify: { kind: "value", inputs: { m: "0.246", co2: "0.198" }, params: { q: "carbon" } },
      options: [
        { key: "A", text: t`$53.7\%$`, correct: false, misconceptionId: "C10-M1", value: "53.7000000000000" },
        { key: "B", text: t`$0.22\%$`, correct: false, misconceptionId: "C10-M2", value: "0.220000000000000" },
        { key: "C", text: t`$80.5\%$`, correct: false, misconceptionId: "C10-M3", value: "80.5000000000000" },
        { key: "D", text: t`$22\%$`, correct: true, value: "22" },
      ],
      solution: {
        steps: [
          t`$\% \ce{C} = \dfrac{12}{44} \times \dfrac{0.198}{0.246} \times 100$`,
          t`$= 22.0\%$`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`On complete combustion, $0.300\ \mathrm{g}$ of an organic compound gave $0.180\ \mathrm{g}$ of $\ce{H2O}$. The percentage of hydrogen is`,
      verify: { kind: "value", inputs: { m: "0.300", h2o: "0.180" }, params: { q: "hydrogen" } },
      options: [
        { key: "A", text: t`$6.67\%$`, correct: true, value: "6.67000000000000" },
        { key: "B", text: t`$3.33\%$`, correct: false, misconceptionId: "C10-M4", value: "3.33000000000000" },
        { key: "C", text: t`$2.73\%$`, correct: false, misconceptionId: "C10-M5", value: "2.73000000000000" },
        { key: "D", text: t`$0.0667\%$`, correct: false, misconceptionId: "C10-M6", value: "0.0667000000000000" },
      ],
      solution: {
        steps: [
          t`$\% \ce{H} = \dfrac{2}{18} \times \dfrac{0.180}{0.300} \times 100$`,
          t`$= 6.67\%$`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`In Kjeldahl's method, the ammonia from $0.5\ \mathrm{g}$ of an organic compound neutralised $10\ \mathrm{mL}$ of $1\ \mathrm{M}$ $\ce{H2SO4}$. The percentage of nitrogen is`,
      verify: { kind: "value", inputs: { m: "0.5", V: "10", M: "1" }, params: { q: "kjeldahl" } },
      options: [
        { key: "A", text: t`$0.56\%$`, correct: false, misconceptionId: "C10-M9", value: "0.560000000000000" },
        { key: "B", text: t`$56\%$`, correct: true, value: "56" },
        { key: "C", text: t`$28\%$`, correct: false, misconceptionId: "C10-M7", value: "28" },
        { key: "D", text: t`$68\%$`, correct: false, misconceptionId: "C10-M8", value: "68" },
      ],
      solution: {
        steps: [
          t`Acid: $0.010\ \mathrm{mol}$ $\ce{H2SO4}$ takes $0.020\ \mathrm{mol}$ $\ce{NH3}$.`,
          t`Nitrogen: $0.020 \times 14 = 0.28\ \mathrm{g}$.`,
          t`$\% \ce{N} = 0.28 / 0.5 \times 100 = 56\%$`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`In Carius' method, $0.15\ \mathrm{g}$ of an organic compound gave $0.12\ \mathrm{g}$ of $\ce{AgBr}$ ($\ce{Ag}$ 108, $\ce{Br}$ 80). The percentage of bromine is`,
      verify: { kind: "value", inputs: { m: "0.15", agbr: "0.12" }, params: { q: "carius" } },
      options: [
        { key: "A", text: t`$46\%$`, correct: false, misconceptionId: "C10-M11", value: "46" },
        { key: "B", text: t`$59.3\%$`, correct: false, misconceptionId: "C10-M12", value: "59.3000000000000" },
        { key: "C", text: t`$34\%$`, correct: true, value: "34" },
        { key: "D", text: t`$80\%$`, correct: false, misconceptionId: "C10-M10", value: "80" },
      ],
      solution: {
        steps: [
          t`$\% \ce{Br} = \dfrac{80}{188} \times \dfrac{0.12}{0.15} \times 100$`,
          t`$= 34.0\%$`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`The nitrogen in pyridine, part of its ring, is estimated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "pyridine" } },
      options: [
        { key: "A", text: t`Dumas' method`, correct: true, value: "dumas" },
        { key: "B", text: t`Kjeldahl's method`, correct: false, misconceptionId: "C10-M13", value: "kjeldahl" },
        { key: "C", text: t`Carius' method`, correct: false, misconceptionId: "C10-M14", value: "carius" },
        { key: "D", text: t`Lassaigne's test`, correct: false, misconceptionId: "C10-M15", value: "lassaigne" },
      ],
      solution: {
        steps: [
          t`Ring nitrogen does not form ammonium sulfate.`,
          t`Dumas' method measures the nitrogen gas instead.`,
        ],
      },
    },
  ],
};
