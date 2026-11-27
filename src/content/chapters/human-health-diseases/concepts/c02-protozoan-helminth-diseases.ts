import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Every two or three days, a patient shivers, burns with fever, then sweats. What is happening in the blood?`,
    reveal: t`Malaria parasites are bursting out of red blood cells in waves, releasing toxins each time.`,
  },
  explanation: {
    intuition: [
      t`Some diseases are caused by protozoans and worms.`,
      t`Many are carried by mosquitoes.`,
      t`Others spread through dirty food and water.`,
    ],
    formal: [
      {
        title: "Malaria",
        points: [
          t`Caused by *Plasmodium* (*P. vivax*, *P. falciparum* and others).`,
          t`A female *Anopheles* injects **sporozoites**, the infective stage.`,
          t`In liver cells and RBCs, **schizonts** divide into merozoites, which burst the RBCs.`,
        ],
      },
      {
        title: "Amoebiasis and filariasis",
        points: [
          t`**Amoebiasis**: *Entamoeba histolytica*, spread by the **faeco-oral** route.`,
          t`**Filariasis** (elephantiasis): *Wuchereria bancrofti*, carried by the female **Culex**.`,
          t`The worms block lymph vessels, and limbs swell.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why do malaria fevers recur every few days?`,
      steps: [
        t`Merozoites burst out of RBCs together.`,
        t`Each burst releases toxins that cause fever.`,
      ],
      answer: t`Synchronized bursting of RBCs`,
    },
    visualSpec: t`The malaria cycle: mosquito bite, liver, red blood cells bursting, back to a mosquito.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks *Entamoeba*.",
      remediation: "*Entamoeba* causes amoebiasis.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks *Wuchereria*.",
      remediation: "*Wuchereria* causes filariasis.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks *Salmonella*.",
      remediation: "*Salmonella* causes typhoid.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks merozoite.",
      remediation: "Merozoites form inside the body.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks schizont.",
      remediation: "Schizonts divide inside cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks gametocyte.",
      remediation: "Gametocytes are taken up by mosquitoes.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks *P. vivax*.",
      remediation: "*P. vivax* causes malaria.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks bedbug.",
      remediation: "Bedbugs are ectoparasites.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks *Ascaris*.",
      remediation: "*Ascaris* causes ascariasis.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks *Anopheles*.",
      remediation: "*Anopheles* carries malaria.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks male *Culex*.",
      remediation: "Only females suck blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks *Aedes*.",
      remediation: "*Aedes* carries dengue.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks mosquito bites.",
      remediation: "*Entamoeba* is swallowed.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks droplets.",
      remediation: "It spreads through food and water.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks blood transfusion.",
      remediation: "It lives in the gut.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q2(9)" },
      stem: t`Malaria is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "malaria" } },
      options: [
        { key: "A", text: t`*Plasmodium*`, correct: true, value: "plasmodium_p" },
        { key: "B", text: t`*Entamoeba*`, correct: false, misconceptionId: "C02-M1", value: "entamoeba_p" },
        { key: "C", text: t`*Wuchereria*`, correct: false, misconceptionId: "C02-M2", value: "wuchereria_p" },
        { key: "D", text: t`*Salmonella*`, correct: false, misconceptionId: "C02-M3", value: "salmonella_p" },
      ],
      solution: {
        steps: [
          t`A protozoan in RBCs.`,
          t`*Plasmodium*.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q3(3)" },
      stem: t`The stage of *Plasmodium* injected into a person by a mosquito is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "infective" } },
      options: [
        { key: "A", text: t`merozoite`, correct: false, misconceptionId: "C02-M4", value: "merozoite_s" },
        { key: "B", text: t`schizont`, correct: false, misconceptionId: "C02-M5", value: "schizont_s" },
        { key: "C", text: t`gametocyte`, correct: false, misconceptionId: "C02-M6", value: "gametocyte_s" },
        { key: "D", text: t`sporozoite`, correct: true, value: "sporozoite_s" },
      ],
      solution: {
        steps: [
          t`Injected with saliva.`,
          t`Sporozoite.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(10)" },
      stem: t`Elephantiasis is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "elephantiasis" } },
      options: [
        { key: "A", text: t`*Ascaris*`, correct: false, misconceptionId: "C02-M9", value: "ascaris_p" },
        { key: "B", text: t`*Wuchereria bancrofti*`, correct: true, value: "w_bancrofti" },
        { key: "C", text: t`*Plasmodium vivax*`, correct: false, misconceptionId: "C02-M7", value: "p_vivax" },
        { key: "D", text: t`the bedbug`, correct: false, misconceptionId: "C02-M8", value: "bedbug_p" },
      ],
      solution: {
        steps: [
          t`A filarial worm.`,
          t`*Wuchereria bancrofti*.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q2(10)" },
      stem: t`The vector of filariasis is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "vector" } },
      options: [
        { key: "A", text: t`*Aedes* mosquito`, correct: false, misconceptionId: "C02-M12", value: "aedes_m" },
        { key: "B", text: t`female *Culex* mosquito`, correct: true, value: "female_culex" },
        { key: "C", text: t`female *Anopheles* mosquito`, correct: false, misconceptionId: "C02-M10", value: "female_anopheles" },
        { key: "D", text: t`male *Culex* mosquito`, correct: false, misconceptionId: "C02-M11", value: "male_culex" },
      ],
      solution: {
        steps: [
          t`Only females bite.`,
          t`Female *Culex*.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q4(8)" },
      stem: t`Amoebiasis spreads`,
      verify: { kind: "value", inputs: {  }, params: { q: "amoebiasis" } },
      options: [
        { key: "A", text: t`by blood transfusion`, correct: false, misconceptionId: "C02-M15", value: "blood_transfusion" },
        { key: "B", text: t`by the faeco-oral route, through contaminated food and water`, correct: true, value: "faeco_oral" },
        { key: "C", text: t`by mosquito bites`, correct: false, misconceptionId: "C02-M13", value: "mosquito_bite" },
        { key: "D", text: t`by droplets in the air`, correct: false, misconceptionId: "C02-M14", value: "droplets_r" },
      ],
      solution: {
        steps: [
          t`Dirty hands and water.`,
          t`Faeco-oral route.`,
        ],
      },
    },
  ],
};
