import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`On a smoggy winter day in a city, people cough and their eyes sting. What is in the air?`,
    reveal: t`Tiny particles and gases from vehicles, industry and burning, trapped near the ground.`,
  },
  explanation: {
    intuition: [
      t`**Pollution** is an undesirable change in air, water or soil.`,
      t`Air pollutants are **particulate** or **gaseous**.`,
      t`Noise counts as an air pollutant in India.`,
    ],
    formal: [
      {
        title: "Air pollution",
        points: [
          t`Particulates: solids (smoke, dust) and liquid droplets (**aerosols**); PM2.5 reaches deep into the lungs.`,
          t`**CO** binds haemoglobin far more readily than oxygen: giddiness, exhaustion.`,
          t`**Bharat Stage** norms limit vehicle emissions. Natural pollutants: volcanic and forest-fire ash.`,
        ],
      },
      {
        title: "Noise",
        points: [
          t`Noise is unwanted loud sound, measured in decibels.`,
          t`Above 150 dB (a jet take-off) it can burst eardrums.`,
          t`Loudspeakers are banned at public gatherings after 10 pm.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is a charcoal *chullha* in a closed room dangerous?`,
      steps: [
        t`Incomplete burning makes CO.`,
        t`CO blocks haemoglobin.`,
      ],
      answer: t`CO poisoning`,
    },
    visualSpec: t`A city skyline under smog, with arrows from vehicles and chimneys.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says water pollution.",
      remediation: "Loudspeakers make noise.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says soil pollution.",
      remediation: "Loudspeakers make noise.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says smoke.",
      remediation: "Loudspeakers make noise.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Says it damages lungs.",
      remediation: "It blocks haemoglobin.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says it raises BP.",
      remediation: "It blocks haemoglobin.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says it blocks the nose.",
      remediation: "It blocks haemoglobin.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks CO and SO₂.",
      remediation: "Those are gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks CFCs and ozone.",
      remediation: "Those are gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says dust alone.",
      remediation: "Aerosols count too.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks noise.",
      remediation: "BS is for vehicles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks water.",
      remediation: "BS is for vehicles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks buildings.",
      remediation: "BS is for vehicles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks vehicle exhaust.",
      remediation: "That is man-made.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks CFCs.",
      remediation: "Those are man-made.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks plastic.",
      remediation: "That is man-made.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q3(1)" },
      stem: t`*Dandiya raas* with loudspeakers is not allowed after 10 pm because`,
      verify: { kind: "value", inputs: {  }, params: { q: "dandiya" } },
      options: [
        { key: "A", text: t`it pollutes the soil`, correct: false, misconceptionId: "C04-M2", value: "soil_pollution" },
        { key: "B", text: t`it produces smoke`, correct: false, misconceptionId: "C04-M3", value: "smoke_pollution" },
        { key: "C", text: t`loudspeakers cause noise pollution, banned at night by the Supreme Court`, correct: true, value: "noise_ban" },
        { key: "D", text: t`it pollutes water`, correct: false, misconceptionId: "C04-M1", value: "water_pollution" },
      ],
      solution: {
        steps: [
          t`Noise after 10 pm.`,
          t`Noise pollution ban.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q3(5)" },
      stem: t`Carbon monoxide causes giddiness and exhaustion because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "co" } },
      options: [
        { key: "A", text: t`damages the lungs directly`, correct: false, misconceptionId: "C04-M4", value: "damages_lungs" },
        { key: "B", text: t`raises blood pressure`, correct: false, misconceptionId: "C04-M5", value: "raises_bp" },
        { key: "C", text: t`blocks the nose`, correct: false, misconceptionId: "C04-M6", value: "blocks_nose" },
        { key: "D", text: t`binds haemoglobin far more readily than oxygen`, correct: true, value: "binds_haemoglobin" },
      ],
      solution: {
        steps: [
          t`CO and haemoglobin.`,
          t`Binds haemoglobin.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q3(6)" },
      stem: t`The two types of particulate air pollutants are`,
      verify: { kind: "value", inputs: {  }, params: { q: "particulate" } },
      options: [
        { key: "A", text: t`CFCs and ozone`, correct: false, misconceptionId: "C04-M8", value: "cfc_ozone" },
        { key: "B", text: t`dust alone`, correct: false, misconceptionId: "C04-M9", value: "dust_only" },
        { key: "C", text: t`solid particles and liquid droplets (aerosols)`, correct: true, value: "solids_aerosols" },
        { key: "D", text: t`$\ce{CO}$ and $\ce{SO2}$`, correct: false, misconceptionId: "C04-M7", value: "co_so2" },
      ],
      solution: {
        steps: [
          t`Solids and droplets.`,
          t`Solids and aerosols.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q4(3)" },
      stem: t`Bharat Stage (BS) standards are norms for`,
      verify: { kind: "value", inputs: {  }, params: { q: "bs" } },
      options: [
        { key: "A", text: t`noise levels`, correct: false, misconceptionId: "C04-M10", value: "noise_levels" },
        { key: "B", text: t`drinking water quality`, correct: false, misconceptionId: "C04-M11", value: "water_quality" },
        { key: "C", text: t`building safety`, correct: false, misconceptionId: "C04-M12", value: "building_safety" },
        { key: "D", text: t`vehicle engines, fuels and emissions`, correct: true, value: "vehicle_emissions" },
      ],
      solution: {
        steps: [
          t`Vehicle norms.`,
          t`Vehicle emissions.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biodiversity-12-bio/Ex Q2(4)" },
      stem: t`Which is a natural pollutant?`,
      verify: { kind: "value", inputs: {  }, params: { q: "natural" } },
      options: [
        { key: "A", text: t`Plastic waste`, correct: false, misconceptionId: "C04-M15", value: "plastic_waste" },
        { key: "B", text: t`Ash from volcanic eruptions`, correct: true, value: "volcanic_ash" },
        { key: "C", text: t`Vehicle exhaust`, correct: false, misconceptionId: "C04-M13", value: "vehicle_exhaust" },
        { key: "D", text: t`CFC gas`, correct: false, misconceptionId: "C04-M14", value: "cfc_gas" },
      ],
      solution: {
        steps: [
          t`No human cause.`,
          t`Volcanic ash.`,
        ],
      },
    },
  ],
};
