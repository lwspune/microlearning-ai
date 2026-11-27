import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`One cigarette seems harmless, yet many smokers cannot stop. Why?`,
    reveal: t`Nicotine is addictive: the brain comes to need it, so use becomes compulsive despite the harm.`,
  },
  explanation: {
    intuition: [
      t`**Addiction** is compulsive use of a substance despite harm.`,
      t`Common addictive substances: alcohol, opioids, cocaine, nicotine.`,
      t`**Adolescence** is a risky period for starting.`,
    ],
    formal: [
      {
        title: "Sources",
        points: [
          t`**Opioids**: morphine from the poppy *Papaver somniferum*; **heroin** is diacetyl morphine.`,
          t`**Cannabinoids**: charas, ganja, marijuana from *Cannabis sativa*.`,
          t`**Cocaine**: the coca plant *Erythroxylum coca*. **Caffeine**: tea and coffee.`,
        ],
      },
      {
        title: "Effects",
        points: [
          t`Smoking: lung cancer and **emphysema**.`,
          t`Chronic alcohol: liver **cirrhosis**.`,
          t`Peer pressure and curiosity draw the young in; counselling and support help.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is heroin called an opium derivative?`,
      steps: [
        t`Morphine comes from opium.`,
        t`Heroin is morphine changed chemically.`,
      ],
      answer: t`It is made from morphine`,
    },
    visualSpec: t`Three plants: poppy, cannabis and coca, each linked to its drug.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks caffeine.",
      remediation: "Caffeine is from tea.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks psilocybin.",
      remediation: "Psilocybin is from mushrooms.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks cocaine.",
      remediation: "Cocaine is from coca.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks tannin.",
      remediation: "Tannin is astringent, not a stimulant.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks cocaine.",
      remediation: "Cocaine is from coca.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks crack.",
      remediation: "Crack is a cocaine form.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks *Papaver*.",
      remediation: "*Papaver* gives opium.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks *Erythroxylum*.",
      remediation: "*Erythroxylum* gives cocaine.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks *Atropa*.",
      remediation: "*Atropa* gives belladonna.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks cirrhosis.",
      remediation: "Cirrhosis is from alcohol.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks tuberculosis.",
      remediation: "TB is bacterial.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks malaria.",
      remediation: "Malaria is protozoan.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks hepatitis B.",
      remediation: "Hepatitis B is viral.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks emphysema.",
      remediation: "Emphysema is from smoking.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Picks typhoid.",
      remediation: "Typhoid is bacterial.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(2)" },
      stem: t`Which is an opium derivative?`,
      verify: { kind: "value", inputs: {  }, params: { q: "opium" } },
      options: [
        { key: "A", text: t`Heroin`, correct: true, value: "heroin_d" },
        { key: "B", text: t`Caffeine`, correct: false, misconceptionId: "C08-M1", value: "caffeine_d" },
        { key: "C", text: t`Psilocybin`, correct: false, misconceptionId: "C08-M2", value: "psilocybin_d" },
        { key: "D", text: t`Cocaine`, correct: false, misconceptionId: "C08-M3", value: "cocaine_d" },
      ],
      solution: {
        steps: [
          t`Made from morphine.`,
          t`Heroin.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(3)" },
      stem: t`The stimulant in tea is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tea" } },
      options: [
        { key: "A", text: t`tannin`, correct: false, misconceptionId: "C08-M4", value: "tannin_d" },
        { key: "B", text: t`cocaine`, correct: false, misconceptionId: "C08-M5", value: "cocaine_d" },
        { key: "C", text: t`crack`, correct: false, misconceptionId: "C08-M6", value: "crack_d" },
        { key: "D", text: t`caffeine`, correct: true, value: "caffeine_d" },
      ],
      solution: {
        steps: [
          t`Tea and coffee.`,
          t`Caffeine.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2026 Q. 1(viii)" },
      stem: t`Charas and ganja are products of`,
      verify: { kind: "value", inputs: {  }, params: { q: "charas" } },
      options: [
        { key: "A", text: t`*Papaver somniferum*`, correct: false, misconceptionId: "C08-M7", value: "papaver_somniferum" },
        { key: "B", text: t`*Erythroxylum coca*`, correct: false, misconceptionId: "C08-M8", value: "erythroxylum_coca" },
        { key: "C", text: t`*Atropa belladonna*`, correct: false, misconceptionId: "C08-M9", value: "atropa_belladonna" },
        { key: "D", text: t`*Cannabis sativa*`, correct: true, value: "cannabis_sativa" },
      ],
      solution: {
        steps: [
          t`Hemp plant.`,
          t`*Cannabis sativa*.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(4)" },
      stem: t`Which of these is caused by smoking?`,
      verify: { kind: "value", inputs: {  }, params: { q: "smoking" } },
      options: [
        { key: "A", text: t`Pulmonary tuberculosis`, correct: false, misconceptionId: "C08-M11", value: "tuberculosis_d" },
        { key: "B", text: t`Malaria`, correct: false, misconceptionId: "C08-M12", value: "malaria_d" },
        { key: "C", text: t`Emphysema`, correct: true, value: "emphysema_d" },
        { key: "D", text: t`Liver cirrhosis`, correct: false, misconceptionId: "C08-M10", value: "cirrhosis_d" },
      ],
      solution: {
        steps: [
          t`Alveoli break down.`,
          t`Emphysema.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q6(5)" },
      stem: t`Chronic use of alcohol damages the liver, causing`,
      verify: { kind: "value", inputs: {  }, params: { q: "alcohol" } },
      options: [
        { key: "A", text: t`typhoid`, correct: false, misconceptionId: "C08-M15", value: "typhoid_d" },
        { key: "B", text: t`cirrhosis`, correct: true, value: "cirrhosis_d" },
        { key: "C", text: t`hepatitis B`, correct: false, misconceptionId: "C08-M13", value: "hepatitis_b_d" },
        { key: "D", text: t`emphysema`, correct: false, misconceptionId: "C08-M14", value: "emphysema_d" },
      ],
      solution: {
        steps: [
          t`Liver scarring.`,
          t`Cirrhosis.`,
        ],
      },
    },
  ],
};
