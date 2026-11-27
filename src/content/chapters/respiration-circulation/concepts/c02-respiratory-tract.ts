import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`You can talk and breathe through the same throat, yet food doesn't go into your lungs. What stops it?`,
    reveal: t`A leaf-like flap, the epiglottis, folds over the windpipe each time you swallow.`,
  },
  explanation: {
    intuition: [
      t`Air passes: nostrils → nasal chambers → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.`,
      t`Each part conditions or guards the air.`,
      t`The alveoli are where gases are exchanged.`,
    ],
    formal: [
      {
        title: "Upper tract",
        points: [
          t`The **mesethmoid cartilage** divides the nasal cavity; hair and mucus filter, warm and moisten the air.`,
          t`The **larynx** (voice box) holds the vocal cords and makes sound.`,
          t`The **epiglottis** covers the glottis during swallowing.`,
        ],
      },
      {
        title: "Lower tract",
        points: [
          t`The **trachea** has 16–20 **C-shaped cartilage rings** that stop it collapsing.`,
          t`About **700 million alveoli** give a huge surface.`,
          t`The alveolar and capillary walls are one thin cell each.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is breathing through the nose better than through the mouth?`,
      steps: [
        t`The nose's hair and mucus filter the air.`,
        t`Its blood vessels warm and moisten it.`,
      ],
      answer: t`The air is filtered, warmed and moistened`,
    },
    visualSpec: t`The respiratory tract from nose to alveoli, the epiglottis closing over the glottis.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks hyaline cartilage.",
      remediation: "Hyaline cartilage forms tracheal rings.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks ligamentum arteriosum.",
      remediation: "That is near the heart.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks laryngopharynx.",
      remediation: "That is part of the pharynx.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks pharynx.",
      remediation: "The pharynx is a passage.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks tonsils.",
      remediation: "Tonsils are lymphoid organs.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks trachea.",
      remediation: "The trachea only conducts air.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks glottis.",
      remediation: "The glottis is the opening.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks soft palate.",
      remediation: "The soft palate closes the nose.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks vocal cords.",
      remediation: "Vocal cords make sound.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says to make sound.",
      remediation: "Sound is made in the larynx.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says to filter air.",
      remediation: "The nose filters air.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says to exchange gases.",
      remediation: "Alveoli exchange gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says thick walls.",
      remediation: "Thin walls speed diffusion.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says few large alveoli.",
      remediation: "Many small ones give more area.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says still air.",
      remediation: "Breathing renews the air.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2024 Q. 1(iv)" },
      stem: t`The nasal cavity is divided into right and left chambers by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "nasal" } },
      options: [
        { key: "A", text: t`mesethmoid cartilage`, correct: true, value: "mesethmoid" },
        { key: "B", text: t`hyaline cartilage`, correct: false, misconceptionId: "C02-M1", value: "hyaline_cartilage" },
        { key: "C", text: t`ligamentum arteriosum`, correct: false, misconceptionId: "C02-M2", value: "ligamentum_arteriosum" },
        { key: "D", text: t`laryngopharynx`, correct: false, misconceptionId: "C02-M3", value: "laryngopharynx" },
      ],
      solution: {
        steps: [
          t`It separates the nasal chambers.`,
          t`Mesethmoid cartilage.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(3)" },
      stem: t`The sound-producing organ is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "sound" } },
      options: [
        { key: "A", text: t`pharynx`, correct: false, misconceptionId: "C02-M4", value: "pharynx_o" },
        { key: "B", text: t`tonsils`, correct: false, misconceptionId: "C02-M5", value: "tonsils_o" },
        { key: "C", text: t`trachea`, correct: false, misconceptionId: "C02-M6", value: "trachea_o" },
        { key: "D", text: t`larynx`, correct: true, value: "larynx_o" },
      ],
      solution: {
        steps: [
          t`The voice box.`,
          t`Larynx.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q3(4)" },
      stem: t`While we eat, food is kept out of the trachea by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "food" } },
      options: [
        { key: "A", text: t`vocal cords`, correct: false, misconceptionId: "C02-M9", value: "vocal_cords" },
        { key: "B", text: t`epiglottis`, correct: true, value: "epiglottis_o" },
        { key: "C", text: t`glottis`, correct: false, misconceptionId: "C02-M7", value: "glottis_o" },
        { key: "D", text: t`soft palate`, correct: false, misconceptionId: "C02-M8", value: "soft_palate" },
      ],
      solution: {
        steps: [
          t`It covers the glottis.`,
          t`Epiglottis.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q3(1)" },
      stem: t`The trachea has C-shaped rings of cartilage to`,
      verify: { kind: "value", inputs: {  }, params: { q: "rings" } },
      options: [
        { key: "A", text: t`exchange gases`, correct: false, misconceptionId: "C02-M12", value: "exchange_gases" },
        { key: "B", text: t`stop it collapsing, keeping the airway open`, correct: true, value: "prevent_collapse" },
        { key: "C", text: t`produce sound`, correct: false, misconceptionId: "C02-M10", value: "make_sound" },
        { key: "D", text: t`filter the air`, correct: false, misconceptionId: "C02-M11", value: "filter_air" },
      ],
      solution: {
        steps: [
          t`They hold the trachea open.`,
          t`They stop it collapsing.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q3(3)" },
      stem: t`Gas exchange in the lungs is very rapid because`,
      verify: { kind: "value", inputs: {  }, params: { q: "alveoli" } },
      options: [
        { key: "A", text: t`air stays still in the alveoli`, correct: false, misconceptionId: "C02-M15", value: "still_air" },
        { key: "B", text: t`about 700 million thin alveoli give a huge surface`, correct: true, value: "large_thin" },
        { key: "C", text: t`the alveoli have thick walls`, correct: false, misconceptionId: "C02-M13", value: "thick_walls" },
        { key: "D", text: t`there are a few large alveoli`, correct: false, misconceptionId: "C02-M14", value: "few_large" },
      ],
      solution: {
        steps: [
          t`700 million thin alveoli.`,
          t`A huge, thin surface.`,
        ],
      },
    },
  ],
};
