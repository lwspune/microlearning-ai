import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`A weather report from New York says 104 degrees; one from Mumbai says 40 degrees. Both cities are equally hot. How?`,
    reveal: t`New York uses the Fahrenheit scale and Mumbai the Celsius scale. $40\ ^\circ\mathrm{C}$ is $104\ ^\circ\mathrm{F}$.`,
  },
  explanation: {
    intuition: [
      t`Scientists everywhere use one set of units, the **SI**.`,
      t`Seven base units cover everything; other units are built from them.`,
      t`Temperature has three common scales: Celsius, Fahrenheit and Kelvin.`,
      t`Kelvin, the SI unit, starts at absolute zero.`,
    ],
    formal: [
      {
        title: "SI base units",
        points: [
          t`Length: metre (m); mass: kilogram (kg); time: second (s).`,
          t`Temperature: kelvin (K); electric current: ampere (A).`,
          t`Amount of substance: mole (mol); luminous intensity: candela (cd).`,
          t`The litre ($1\ \mathrm{dm^3}$) is a derived unit of volume.`,
        ],
      },
      {
        title: "Temperature scales",
        points: [
          t`$T(\mathrm{K}) = t(^\circ\mathrm{C}) + 273.15$`,
          t`$^\circ\mathrm{F} = \tfrac95\,{}^\circ\mathrm{C} + 32$`,
          t`The two scales agree at $-40$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Convert $30\ ^\circ\mathrm{C}$ to $^\circ\mathrm{F}$.`,
      steps: [
        t`$\tfrac95 \times 30 = 54$.`,
        t`$54 + 32 = 86$.`,
      ],
      answer: t`$86\ ^\circ\mathrm{F}$`,
    },
    visualSpec: t`Slide a marker along three thermometers side by side and read Celsius, Fahrenheit and Kelvin together.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Confuses current with potential difference.",
      remediation: "The volt measures potential difference; current is in amperes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks a different base unit.",
      remediation: "The candela is for luminous intensity; current is in amperes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks a derived unit.",
      remediation: "The newton is a derived unit of force; current is in amperes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Drops the minus sign.",
      remediation: t`$+40\ ^\circ\mathrm{C}$ is $104\ ^\circ\mathrm{F}$; the scales agree at $-40$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Uses $\tfrac59$ in place of $\tfrac95$.`,
      remediation: t`$^\circ\mathrm{F} = \tfrac95\,{}^\circ\mathrm{C} + 32$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Adds 32 before multiplying.",
      remediation: t`Multiply by $\tfrac95$ first, then add 32.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Forgets to add 32.",
      remediation: t`After multiplying by $\tfrac95$, add 32.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Multiplies by $\tfrac59$.`,
      remediation: t`Celsius to Fahrenheit multiplies by $\tfrac95$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Adds 32 before multiplying.",
      remediation: t`Multiply by $\tfrac95$ first, then add 32.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Subtracts the Celsius value from 273.15.",
      remediation: t`Add: $T = t + 273.15$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Keeps the Celsius number.",
      remediation: "Kelvin readings are 273.15 higher than Celsius readings.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Converts to Fahrenheit instead.",
      remediation: "Kelvin: add 273.15 to the Celsius value.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks the kelvin is not a base unit.",
      remediation: "The kelvin is the SI base unit of temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks the mole is not a base unit.",
      remediation: "The mole is the SI base unit for amount of substance.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Thinks the candela is not a base unit.",
      remediation: "The candela is the SI base unit of luminous intensity.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.1 (D)" },
      stem: t`The SI unit of electric current is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "current" } },
      options: [
        { key: "A", text: t`volt`, correct: false, misconceptionId: "C02-M1", value: "volt" },
        { key: "B", text: t`ampere`, correct: true, value: "ampere" },
        { key: "C", text: t`candela`, correct: false, misconceptionId: "C02-M2", value: "candela" },
        { key: "D", text: t`newton`, correct: false, misconceptionId: "C02-M3", value: "newton" },
      ],
      solution: {
        steps: [
          t`Electric current is a base quantity.`,
          t`Its SI unit is the ampere.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.1 (C)" },
      stem: t`At which temperature do the Celsius and Fahrenheit scales read the same number?`,
      verify: { kind: "value", inputs: {  }, params: { q: "same" } },
      options: [
        { key: "A", text: t`$40\ \mathrm{^{\circ}C}$`, correct: false, misconceptionId: "C02-M4", value: "40" },
        { key: "B", text: t`$72\ \mathrm{^{\circ}C}$`, correct: false, misconceptionId: "C02-M5", value: "72" },
        { key: "C", text: t`$-40\ \mathrm{^{\circ}C}$`, correct: true, value: "-40" },
        { key: "D", text: t`$-72\ \mathrm{^{\circ}C}$`, correct: false, misconceptionId: "C02-M6", value: "-72" },
      ],
      solution: {
        steps: [
          t`Set $x = \tfrac95 x + 32$.`,
          t`$-\tfrac45 x = 32$, so $x = -40$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/basic-concepts-11-chem/Ex Q.4 (H)" },
      stem: t`Convert $40\ ^\circ\mathrm{C}$ to degrees Fahrenheit.`,
      verify: { kind: "value", inputs: { c: "40" }, params: { q: "c_to_f" } },
      options: [
        { key: "A", text: t`$130\ \mathrm{^{\circ}F}$`, correct: false, misconceptionId: "C02-M9", value: "130" },
        { key: "B", text: t`$54.2\ \mathrm{^{\circ}F}$`, correct: false, misconceptionId: "C02-M8", value: "54.2000000000000" },
        { key: "C", text: t`$72\ \mathrm{^{\circ}F}$`, correct: false, misconceptionId: "C02-M7", value: "72" },
        { key: "D", text: t`$104\ \mathrm{^{\circ}F}$`, correct: true, value: "104" },
      ],
      solution: {
        steps: [
          t`$\tfrac95 \times 40 = 72$.`,
          t`$72 + 32 = 104\ ^\circ\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Convert $25\ ^\circ\mathrm{C}$ to kelvin.`,
      verify: { kind: "value", inputs: { c: "25" }, params: { q: "c_to_k" } },
      options: [
        { key: "A", text: t`$298.15\ \mathrm{K}$`, correct: true, value: "298.150000000000" },
        { key: "B", text: t`$77\ \mathrm{K}$`, correct: false, misconceptionId: "C02-M12", value: "77" },
        { key: "C", text: t`$248.15\ \mathrm{K}$`, correct: false, misconceptionId: "C02-M10", value: "248.150000000000" },
        { key: "D", text: t`$25\ \mathrm{K}$`, correct: false, misconceptionId: "C02-M11", value: "25" },
      ],
      solution: {
        steps: [
          t`$T = 25 + 273.15$.`,
          t`$= 298.15$ K.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Which of these is NOT an SI base unit?`,
      verify: { kind: "value", inputs: {  }, params: { q: "base" } },
      options: [
        { key: "A", text: t`candela`, correct: false, misconceptionId: "C02-M15", value: "candela" },
        { key: "B", text: t`litre`, correct: true, value: "litre" },
        { key: "C", text: t`kelvin`, correct: false, misconceptionId: "C02-M13", value: "kelvin" },
        { key: "D", text: t`mole`, correct: false, misconceptionId: "C02-M14", value: "mole" },
      ],
      solution: {
        steps: [
          t`The seven base units: kg, m, s, K, A, mol, cd.`,
          t`The litre is derived from the metre.`,
        ],
      },
    },
  ],
};
