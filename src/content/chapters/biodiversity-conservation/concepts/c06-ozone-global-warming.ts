import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A spray can and a fridge seem harmless, yet they thinned a layer of gas 20 km above Antarctica. How?`,
    reveal: t`Their CFCs drift up to the stratosphere, where UV light frees chlorine, and each chlorine atom destroys thousands of ozone molecules.`,
  },
  explanation: {
    intuition: [
      t`The **ozone layer** in the stratosphere absorbs harmful **UV** radiation.`,
      t`**CFCs** from industry destroy it.`,
      t`**Greenhouse gases** trap heat and warm the Earth.`,
    ],
    formal: [
      {
        title: "Ozone depletion",
        points: [
          t`CFCs (refrigerants, aerosol sprays, fire extinguishers) release **chlorine**, a catalyst that breaks ozone.`,
          t`The **ozone hole** is over the **Antarctic**.`,
          t`More UV-B causes skin cancer, cataract, snow blindness. The **Montreal Protocol** (1987) controls ozone-depleting substances.`,
        ],
      },
      {
        title: "Greenhouse effect",
        points: [
          t`$\ce{CO2}$, $\ce{CH4}$ and others absorb **infrared** re-emitted by the Earth.`,
          t`Naturally a boon: without it the Earth would be −18 °C, not 15 °C.`,
          t`Enhanced by fossil fuels and deforestation, it causes **global warming**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is the greenhouse effect both a boon and a bane?`,
      steps: [
        t`Naturally it keeps Earth at 15 °C.`,
        t`Extra gases from humans overheat it.`,
      ],
      answer: t`Natural warmth, but human excess warms the planet`,
    },
    visualSpec: t`The Earth with sunlight coming in and infrared heat partly trapped by a gas layer.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks diesel trucks.",
      remediation: "They give soot and NOx.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks jet planes.",
      remediation: "They give NOx.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks rice fields.",
      remediation: "They give methane.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks the Arctic.",
      remediation: "The hole is over Antarctica.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks the Equator.",
      remediation: "The hole is over Antarctica.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks India.",
      remediation: "The hole is over Antarctica.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks greenhouse gases.",
      remediation: "That is Kyoto.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks wildlife trade.",
      remediation: "That is CITES.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks nuclear weapons.",
      remediation: "That is other treaties.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks infrared.",
      remediation: "Greenhouse gases absorb infrared.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks visible light.",
      remediation: "Visible light passes through.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks radio waves.",
      remediation: "Radio waves pass through.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks incoming UV.",
      remediation: "Ozone absorbs UV.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks visible light.",
      remediation: "Visible light passes in.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks X-rays.",
      remediation: "X-rays are absorbed higher.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q1(5)" },
      stem: t`CFCs, which pollute the air, are produced by`,
      verify: { kind: "value", inputs: {  }, params: { q: "cfc" } },
      options: [
        { key: "A", text: t`diesel trucks`, correct: false, misconceptionId: "C06-M1", value: "diesel_trucks" },
        { key: "B", text: t`jet planes`, correct: false, misconceptionId: "C06-M2", value: "jet_planes" },
        { key: "C", text: t`rice fields`, correct: false, misconceptionId: "C06-M3", value: "rice_fields" },
        { key: "D", text: t`industries`, correct: true, value: "industries_s" },
      ],
      solution: {
        steps: [
          t`Refrigerants and sprays.`,
          t`Industries.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q2(3)" },
      stem: t`The ozone hole was discovered over the`,
      verify: { kind: "value", inputs: {  }, params: { q: "hole" } },
      options: [
        { key: "A", text: t`Antarctic`, correct: true, value: "antarctic_r" },
        { key: "B", text: t`Arctic`, correct: false, misconceptionId: "C06-M4", value: "arctic_r" },
        { key: "C", text: t`Equator`, correct: false, misconceptionId: "C06-M5", value: "equator_r" },
        { key: "D", text: t`Indian subcontinent`, correct: false, misconceptionId: "C06-M6", value: "india_r" },
      ],
      solution: {
        steps: [
          t`The South Pole.`,
          t`Antarctic.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q4(1)" },
      stem: t`The Montreal Protocol (1987) is a treaty to control the emission of`,
      verify: { kind: "value", inputs: {  }, params: { q: "montreal" } },
      options: [
        { key: "A", text: t`ozone-depleting substances`, correct: true, value: "ozone_depleters" },
        { key: "B", text: t`greenhouse gases in general`, correct: false, misconceptionId: "C06-M7", value: "greenhouse_gases" },
        { key: "C", text: t`wildlife trade`, correct: false, misconceptionId: "C06-M8", value: "biodiversity_trade" },
        { key: "D", text: t`nuclear weapons`, correct: false, misconceptionId: "C06-M9", value: "nuclear_weapons" },
      ],
      solution: {
        steps: [
          t`Ozone-depleting substances.`,
          t`Ozone depleters.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q4(1)" },
      stem: t`The stratospheric ozone layer protects life by absorbing`,
      verify: { kind: "value", inputs: {  }, params: { q: "ozone" } },
      options: [
        { key: "A", text: t`radio waves`, correct: false, misconceptionId: "C06-M12", value: "radio_waves" },
        { key: "B", text: t`UV radiation`, correct: true, value: "uv_rays" },
        { key: "C", text: t`infrared radiation`, correct: false, misconceptionId: "C06-M10", value: "infrared_rays" },
        { key: "D", text: t`visible light`, correct: false, misconceptionId: "C06-M11", value: "visible_light" },
      ],
      solution: {
        steps: [
          t`UV shield.`,
          t`UV radiation.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Biodiversity, Conservation and Environmental Issues/2024 Q. 22" },
      stem: t`Greenhouse gases such as $\ce{CO2}$ and $\ce{CH4}$ warm the Earth by absorbing`,
      verify: { kind: "value", inputs: {  }, params: { q: "greenhouse" } },
      options: [
        { key: "A", text: t`infrared radiation re-emitted by the Earth`, correct: true, value: "infrared_reemitted" },
        { key: "B", text: t`incoming UV radiation`, correct: false, misconceptionId: "C06-M13", value: "uv_incoming" },
        { key: "C", text: t`visible light`, correct: false, misconceptionId: "C06-M14", value: "visible_light" },
        { key: "D", text: t`X-rays`, correct: false, misconceptionId: "C06-M15", value: "x_rays" },
      ],
      solution: {
        steps: [
          t`Heat from the ground.`,
          t`Infrared re-emitted by Earth.`,
        ],
      },
    },
  ],
};
