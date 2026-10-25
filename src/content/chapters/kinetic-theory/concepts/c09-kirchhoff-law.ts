import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Why is the inside of a vacuum flask silvered, like a mirror?`,
    reveal: t`A shiny surface absorbs little radiation, and by Kirchhoff's law a poor absorber is also a poor emitter. So the silvered walls let very little heat escape from the hot tea.`,
  },
  explanation: {
    intuition: [
      t`Every body above absolute zero gives off heat radiation.`,
      t`Its **emissive power** $R$ is the energy it radiates each second from each square metre.`,
      t`At a given temperature, a perfect blackbody radiates more than any other body.`,
      t`A body's **coefficient of emission**, $e = \dfrac{R}{R_B}$, compares it with a blackbody.`,
      t`**Kirchhoff's law**: a good absorber is a good emitter, and $e = a$.`,
    ],
    formal: [
      {
        title: "Emissive power",
        points: [
          t`**Emissive power** $R = \dfrac{Q}{At}$: the energy $Q$ radiated in time $t$ from area $A$, in W/m².`,
          t`So the energy radiated is $Q = RAt$.`,
          t`A perfect blackbody's emissive power, $R_B$, is the largest at a given temperature.`,
          t`The **coefficient of emission** (emissivity) $e = \dfrac{R}{R_B}$ lies between 0 and 1; $e = 1$ for a blackbody.`,
        ],
      },
      {
        title: "Kirchhoff's law",
        points: [
          t`At a given temperature, $\dfrac{R}{a} = R_B$ for every body.`,
          t`So $e = \dfrac{R}{R_B} = a$: a body's emissivity equals its coefficient of absorption.`,
          t`A good absorber is a good emitter; a good reflector is a poor emitter.`,
          t`The reason: a body in an enclosure at its own temperature must emit just what it absorbs, $aR_B$, or its temperature would change.`,
          t`That is why a flask's silvered walls, which absorb little, also emit little and keep tea hot.`,
        ],
      },
    ],
    worked: {
      prompt: t`A body has a coefficient of absorption of $0.4$. At its temperature a perfect blackbody radiates $1500\ \mathrm{W/m^2}$. What is the body's emissive power?`,
      steps: [
        t`Kirchhoff's law: $\dfrac{R}{a} = R_B$.`,
        t`So $R = aR_B$.`,
        t`$R = 0.4 \times 1500$.`,
        t`$R = 600\ \mathrm{W/m^2}$.`,
      ],
      answer: t`$R = 600\ \mathrm{W/m^2}$`,
    },
    visualSpec: t`Place a black and a shiny body side by side in a hot enclosure and watch each emit exactly as much as it absorbs.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Leaves out the time.",
      remediation: t`Emissive power is per second: the energy radiated is $Q = RAt$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Divides by the area instead of multiplying.",
      remediation: t`Emissive power is per square metre, so multiply by the area: $Q = RAt$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Leaves out the area.",
      remediation: t`Emissive power is per square metre; multiply by the radiating area: $Q = RAt$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: t`Takes a good absorber to be a poor emitter: $e = 1 - a$.`,
      remediation: t`Kirchhoff's law says the reverse: $e = a$. A good absorber is a good emitter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Turns the ratio upside down.",
      remediation: t`$e = \dfrac{R}{R_B}$ is at most 1, and $R = aR_B$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks every body emits like a blackbody at the same temperature.",
      remediation: t`Only a perfect blackbody has $e = 1$; any other body emits less: $R = eR_B$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M7",
      mistake: t`Takes the coefficient of emission as $1 - \dfrac{R}{R_B}$.`,
      remediation: t`$e$ is the fraction a body emits compared with a blackbody: $\dfrac{R}{R_B}$ itself.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Takes emissive power to be the total energy radiated.",
      remediation: t`Emissive power is per unit area per unit time: $R = \dfrac{Q}{At}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.21" },
      stem: t`The emissive power of a sphere of area $0.02\ \mathrm{m^2}$ is $0.5\ \mathrm{kcal\,s^{-1}m^{-2}}$. How much heat does its surface radiate in $20\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { R: "0.5", A: "0.02", t: "20" }, params: { ask: "Q" } },
      options: [
        { key: "A", text: t`$500\ \mathrm{kcal}$`, correct: false, misconceptionId: "C09-M2", value: "500" },
        { key: "B", text: t`$10\ \mathrm{kcal}$`, correct: false, misconceptionId: "C09-M3", value: "10" },
        { key: "C", text: t`$0.2\ \mathrm{kcal}$`, correct: true, value: "0.200000000000000" },
        { key: "D", text: t`$0.01\ \mathrm{kcal}$`, correct: false, misconceptionId: "C09-M1", value: "0.0100000000000000" },
      ],
      solution: {
        steps: [
          t`$Q = RAt$.`,
          t`$Q = 0.5 \times 0.02 \times 20 = 0.2\ \mathrm{kcal}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.10" },
      stem: t`A body has a coefficient of absorption of $0.6$. A perfect blackbody at the same temperature has an emissive power of $800\ \mathrm{W/m^2}$. What is the body's emissive power?`,
      verify: { kind: "value", inputs: { a: "0.6", RB: "800" }, params: { ask: "R_body" } },
      options: [
        { key: "A", text: t`$480\ \mathrm{W/m^2}$`, correct: true, value: "480" },
        { key: "B", text: t`$320\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C09-M4", value: "320" },
        { key: "C", text: t`$1330\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C09-M5", value: "1330" },
        { key: "D", text: t`$800\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C09-M6", value: "800" },
      ],
      solution: {
        steps: [
          t`Kirchhoff's law: $R = aR_B$.`,
          t`$R = 0.6 \times 800 = 480\ \mathrm{W/m^2}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.19" },
      stem: t`What does Kirchhoff's law of heat radiation say about a body's coefficient of emission $e$ and its coefficient of absorption $a$, at a given temperature?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "kirchhoff" } },
      options: [
        { key: "A", text: t`$e = 1 - a$`, correct: false, misconceptionId: "C09-M4", value: "e_is_1_minus_a" },
        { key: "B", text: t`$e = \dfrac{1}{a}$`, correct: false, misconceptionId: "C09-M5", value: "e_is_1_over_a" },
        { key: "C", text: t`$e = 1$ for every body`, correct: false, misconceptionId: "C09-M6", value: "e_is_1" },
        { key: "D", text: t`$e = a$`, correct: true, value: "e_equals_a" },
      ],
      solution: {
        steps: [
          t`Kirchhoff's law: $\dfrac{R}{a} = R_B$, so $\dfrac{R}{R_B} = a$.`,
          t`That is, $e = a$: a good absorber is a good emitter.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`A body radiates $300\ \mathrm{W/m^2}$, while a perfect blackbody at the same temperature radiates $1200\ \mathrm{W/m^2}$. What is the body's coefficient of emission?`,
      verify: { kind: "value", inputs: { R: "300", RB: "1200" }, params: { ask: "e" } },
      options: [
        { key: "A", text: t`$0.25$`, correct: true, value: "0.250000000000000" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C09-M5", value: "4" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C09-M6", value: "1" },
        { key: "D", text: t`$0.75$`, correct: false, misconceptionId: "C09-M7", value: "0.750000000000000" },
      ],
      solution: {
        steps: [
          t`$e = \dfrac{R}{R_B} = \dfrac{300}{1200}$.`,
          t`$e = 0.25$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.1(iv)" },
      stem: t`What is the emissive power of a body?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "define" } },
      options: [
        { key: "A", text: t`The energy it radiates per unit time`, correct: false, misconceptionId: "C09-M3", value: "per_time" },
        { key: "B", text: t`The total energy it radiates`, correct: false, misconceptionId: "C09-M8", value: "total" },
        { key: "C", text: t`The energy it radiates per unit time from each unit area`, correct: true, value: "per_time_per_area" },
        { key: "D", text: t`The energy it radiates from each unit area`, correct: false, misconceptionId: "C09-M1", value: "per_area" },
      ],
      solution: {
        steps: [
          t`$R = \dfrac{Q}{At}$.`,
          t`So emissive power is the energy radiated per unit time from each unit area.`,
        ],
      },
    },
  ],
};
