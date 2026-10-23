import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`Why do people in hot places wear white, and why are cooking pots often black underneath?`,
    reveal: t`White reflects most of the radiation falling on it, so it absorbs little and stays cool. Black absorbs almost all of it, so a black pot takes in heat fast.`,
  },
  explanation: {
    intuition: [
      t`Hot bodies give off heat as **radiation**, which needs no medium and travels at the speed of light.`,
      t`Radiation falling on a body is partly absorbed, partly reflected and partly transmitted.`,
      t`The three fractions add up to 1: $a + r + t = 1$.`,
      t`A body that absorbs all the radiation falling on it is a **perfect blackbody**: $a = 1$.`,
      t`Lamp black absorbs about $97\%$ of radiation and comes close to one.`,
    ],
    formal: [
      {
        title: "Absorption, reflection, transmission",
        points: [
          t`The **coefficient of absorption** $a$ is the fraction of the incident radiation absorbed.`,
          t`Likewise $r$ for reflection and $t$ for transmission, with $a + r + t = 1$.`,
          t`**Athermanous** substances let no heat radiation through ($t = 0$): wood and metals, for example.`,
          t`**Diathermanous** substances let heat radiation through ($t > 0$): glass, quartz, rock salt.`,
          t`A good reflector, such as a polished mirror, absorbs little: its $r$ is large and its $a$ small.`,
        ],
      },
      {
        title: "The perfect blackbody",
        points: [
          t`A **perfect blackbody** absorbs all the radiation falling on it: $a = 1$, $r = t = 0$.`,
          t`When heated, it also gives off radiation of every wavelength.`,
          t`**Ferry's blackbody** is a hollow sphere, blackened inside, with a small hole.`,
          t`Radiation entering the hole bounces round inside many times and is absorbed before it can get out.`,
          t`So the hole acts almost as a perfect blackbody; a cone facing the hole stops direct reflection out.`,
        ],
      },
    ],
    worked: {
      prompt: t`A body absorbs $70\%$ and reflects $20\%$ of the radiation falling on it. What fraction does it transmit?`,
      steps: [
        t`$a + r + t = 1$.`,
        t`$t = 1 - a - r$.`,
        t`$t = 1 - 0.7 - 0.2$.`,
        t`$t = 0.1$, that is $10\%$.`,
      ],
      answer: t`$t = 0.1$`,
    },
    visualSpec: t`Shine radiation on surfaces of different colours and materials and split each beam into its absorbed, reflected and transmitted shares.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Subtracts one fraction from another.",
      remediation: t`The three fractions share all the incident radiation: $a + r + t = 1$, so subtract both given fractions from 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Ignores the reflected fraction.",
      remediation: "Reflected radiation is part of the total too: subtract both given fractions from 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Uses only the reflected fraction, ignoring the other one given.",
      remediation: t`Subtract both given fractions from 1: $a + r + t = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Thinks good conductors of heat let heat radiation through.",
      remediation: "Metals conduct heat well but are athermanous: they let no radiation through. Glass is diathermanous.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Thinks wood lets heat radiation through.",
      remediation: "Wood is athermanous: it absorbs or reflects radiation but transmits none.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Thinks a good reflector lets heat radiation through.",
      remediation: "A mirror sends radiation back; it does not let it through.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks a perfect blackbody absorbs nothing.",
      remediation: t`A perfect blackbody absorbs all the radiation falling on it: $a = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Thinks a perfect blackbody transmits all the radiation.",
      remediation: t`Transmitted radiation passes through unabsorbed; a perfect blackbody has $t = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Thinks a perfect blackbody shares radiation equally among absorption, reflection and transmission.",
      remediation: t`It absorbs everything: $a = 1$ and $r = t = 0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks radiation entering Ferry's sphere is reflected straight back out.",
      remediation: "The hole is small and a cone faces it, so radiation is reflected round inside many times and absorbed.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks the radiation passes out through the walls.",
      remediation: "The blackened walls absorb the radiation; they let none of it through.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks the radiation is absorbed by the air inside.",
      remediation: "It is the blackened inner surface that absorbs the radiation, after many reflections.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.1 (iv)" },
      stem: t`For a body, the coefficient of absorption is $a = 0.72$ and the coefficient of reflection is $r = 0.24$. What is its coefficient of transmission?`,
      verify: { kind: "value", inputs: { a: "0.72", r: "0.24" }, params: { ask: "t" } },
      options: [
        { key: "A", text: t`$0.04$`, correct: true, value: "0.0400000000000000" },
        { key: "B", text: t`$0.48$`, correct: false, misconceptionId: "C08-M1", value: "0.480000000000000" },
        { key: "C", text: t`$0.28$`, correct: false, misconceptionId: "C08-M2", value: "0.280000000000000" },
        { key: "D", text: t`$0.76$`, correct: false, misconceptionId: "C08-M3", value: "0.760000000000000" },
      ],
      solution: {
        steps: [
          t`$a + r + t = 1$, so $t = 1 - 0.72 - 0.24$.`,
          t`$t = 0.04$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.1(iii)" },
      stem: t`Which of these is a diathermanous substance, one that lets heat radiation pass through it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "diatherm" } },
      options: [
        { key: "A", text: t`Copper`, correct: false, misconceptionId: "C08-M4", value: "copper" },
        { key: "B", text: t`Wood`, correct: false, misconceptionId: "C08-M5", value: "wood" },
        { key: "C", text: t`A polished metal mirror`, correct: false, misconceptionId: "C08-M6", value: "mirror" },
        { key: "D", text: t`Glass`, correct: true, value: "glass" },
      ],
      solution: {
        steps: [
          t`A diathermanous substance lets heat radiation pass through it.`,
          t`Glass does; wood, copper and a polished mirror do not.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.7" },
      stem: t`What are the coefficients of absorption $a$, reflection $r$ and transmission $t$ of a perfect blackbody?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "blackbody" } },
      options: [
        { key: "A", text: t`$a = 0$, $r = 1$, $t = 0$`, correct: false, misconceptionId: "C08-M7", value: "a0_r1_t0" },
        { key: "B", text: t`$a = 0$, $r = 0$, $t = 1$`, correct: false, misconceptionId: "C08-M8", value: "a0_r0_t1" },
        { key: "C", text: t`$a = r = t = \dfrac{1}{3}$`, correct: false, misconceptionId: "C08-M9", value: "thirds" },
        { key: "D", text: t`$a = 1$, $r = 0$, $t = 0$`, correct: true, value: "a1_r0_t0" },
      ],
      solution: {
        steps: [
          t`A perfect blackbody absorbs all the radiation falling on it.`,
          t`So $a = 1$, and $r = t = 0$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.22" },
      stem: t`In Ferry's blackbody, what happens to radiation that enters through the small hole?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ferry" } },
      options: [
        { key: "A", text: t`It passes out through the walls of the sphere`, correct: false, misconceptionId: "C08-M11", value: "through_walls" },
        { key: "B", text: t`It is absorbed by the air inside the sphere`, correct: false, misconceptionId: "C08-M12", value: "absorbed_by_air" },
        { key: "C", text: t`It is reflected many times inside and absorbed`, correct: true, value: "absorbed_after_reflections" },
        { key: "D", text: t`It is reflected straight back out of the hole`, correct: false, misconceptionId: "C08-M10", value: "reflected_out" },
      ],
      solution: {
        steps: [
          t`Radiation entering the small hole hits the blackened wall, is partly reflected, hits again, and so on.`,
          t`After many reflections it is all absorbed, so the hole acts as a perfect blackbody.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.2 (v)" },
      stem: t`A body reflects $30\%$ and transmits $10\%$ of the heat radiation falling on it. If $500\ \mathrm{J}$ of radiation falls on it, how much does it absorb?`,
      verify: { kind: "value", inputs: { E: "500", r: "0.3", t: "0.1" }, params: { ask: "absorbed" } },
      options: [
        { key: "A", text: t`$350\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M3", value: "350" },
        { key: "B", text: t`$300\ \mathrm{J}$`, correct: true, value: "300" },
        { key: "C", text: t`$100\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M1", value: "100" },
        { key: "D", text: t`$450\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M2", value: "450" },
      ],
      solution: {
        steps: [
          t`Absorbed fraction $a = 1 - r - t = 1 - 0.3 - 0.1 = 0.6$.`,
          t`Absorbed energy $= 0.6 \times 500 = 300\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
