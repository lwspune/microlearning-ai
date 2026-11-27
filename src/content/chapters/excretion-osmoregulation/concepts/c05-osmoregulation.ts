import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`After heavy sweating you feel thirsty and pass little urine. Who gave the order?`,
    reveal: t`Your hypothalamus: its osmoreceptors sensed less water in the blood and triggered the release of ADH.`,
  },
  explanation: {
    intuition: [
      t`**Osmoregulation** keeps the water and salt of the blood steady.`,
      t`**ADH** handles water; the **RAAS** handles salt and blood pressure.`,
      t`Both cut down urine when the body is short of water.`,
    ],
    formal: [
      {
        title: "ADH",
        points: [
          t`Hypothalamic **osmoreceptors** detect a low water concentration in blood.`,
          t`ADH from the **posterior pituitary** makes the DCT's last part and collecting duct permeable: facultative water reabsorption.`,
          t`As blood water returns to normal, ADH secretion is inhibited: **negative feedback**.`,
        ],
      },
      {
        title: "Renin-angiotensin-aldosterone",
        points: [
          t`Low blood supply to the afferent arteriole makes the **JGA** release **renin**.`,
          t`Renin turns angiotensinogen, from the liver, into angiotensin I; ACE makes angiotensin II.`,
          t`Angiotensin II constricts renal arterioles and releases **aldosterone** from the adrenal cortex: more Na⁺ and water reabsorbed.`,
        ],
      },
    ],
    worked: {
      prompt: t`Trace the hormone chain after a fall in renal blood pressure.`,
      steps: [
        t`The JGA releases renin; angiotensinogen becomes angiotensin I, then II.`,
        t`Angiotensin II releases aldosterone; Na⁺ and water are reabsorbed.`,
      ],
      answer: t`Renin → angiotensin I → angiotensin II → aldosterone`,
    },
    visualSpec: t`Two feedback loops: ADH for water and the RAAS for blood pressure.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks ADH only.",
      remediation: "Aldosterone also cuts urine volume.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks aldosterone only.",
      remediation: "ADH also cuts urine volume.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks neither.",
      remediation: "Both hormones raise reabsorption.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks anterior pituitary.",
      remediation: "ADH is released by the posterior pituitary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks adrenal cortex.",
      remediation: "The adrenal cortex releases aldosterone.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks JG cells.",
      remediation: "JG cells release renin.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks aldosterone.",
      remediation: "Aldosterone comes later, from the adrenal cortex.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks ADH.",
      remediation: "ADH comes from the posterior pituitary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks angiotensinogen.",
      remediation: "Angiotensinogen comes from the liver.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks JG cells.",
      remediation: "JG cells release renin, not angiotensinogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks adrenal cortex.",
      remediation: "It releases aldosterone.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks posterior pituitary.",
      remediation: "It releases ADH.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says ADH stops.",
      remediation: "Blood loss calls for more ADH, not less.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says only renin acts.",
      remediation: "ADH is released in haemorrhage too.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says only ADH acts.",
      remediation: "The JGA releases renin as pressure falls.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(S)" },
      stem: t`The volume of urine is regulated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "volume" } },
      options: [
        { key: "A", text: t`neither of them`, correct: false, misconceptionId: "C05-M3", value: "neither_t" },
        { key: "B", text: t`both ADH and aldosterone`, correct: true, value: "both_hormones" },
        { key: "C", text: t`ADH only`, correct: false, misconceptionId: "C05-M1", value: "adh_only" },
        { key: "D", text: t`aldosterone only`, correct: false, misconceptionId: "C05-M2", value: "aldosterone_only" },
      ],
      solution: {
        steps: [
          t`ADH and aldosterone both raise reabsorption.`,
          t`Both.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q5(D)" },
      stem: t`When osmoreceptors in the hypothalamus detect a low water concentration in blood, ADH is released from the`,
      verify: { kind: "value", inputs: {  }, params: { q: "adh_source" } },
      options: [
        { key: "A", text: t`anterior pituitary`, correct: false, misconceptionId: "C05-M4", value: "anterior_pituitary" },
        { key: "B", text: t`adrenal cortex`, correct: false, misconceptionId: "C05-M5", value: "adrenal_cortex" },
        { key: "C", text: t`juxtaglomerular cells`, correct: false, misconceptionId: "C05-M6", value: "jg_cells" },
        { key: "D", text: t`posterior pituitary`, correct: true, value: "posterior_pituitary" },
      ],
      solution: {
        steps: [
          t`Osmoreceptors trigger the neurohypophysis.`,
          t`Posterior pituitary.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q5(A)" },
      stem: t`When arterial pressure in the kidney falls, the juxtaglomerular apparatus secretes`,
      verify: { kind: "value", inputs: {  }, params: { q: "jga" } },
      options: [
        { key: "A", text: t`renin`, correct: true, value: "renin_t" },
        { key: "B", text: t`aldosterone`, correct: false, misconceptionId: "C05-M7", value: "aldosterone_t" },
        { key: "C", text: t`ADH`, correct: false, misconceptionId: "C05-M8", value: "adh_t" },
        { key: "D", text: t`angiotensinogen`, correct: false, misconceptionId: "C05-M9", value: "angiotensinogen_t" },
      ],
      solution: {
        steps: [
          t`JG cells respond to low afferent supply.`,
          t`Renin.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q4(A)" },
      stem: t`Renin converts angiotensinogen into angiotensin I. Angiotensinogen is secreted by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "angiotensinogen" } },
      options: [
        { key: "A", text: t`adrenal cortex`, correct: false, misconceptionId: "C05-M11", value: "adrenal_cortex" },
        { key: "B", text: t`posterior pituitary`, correct: false, misconceptionId: "C05-M12", value: "posterior_pituitary" },
        { key: "C", text: t`liver`, correct: true, value: "liver_t" },
        { key: "D", text: t`juxtaglomerular cells`, correct: false, misconceptionId: "C05-M10", value: "jg_cells" },
      ],
      solution: {
        steps: [
          t`Renin acts on angiotensinogen from the liver.`,
          t`Liver.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q4(A)" },
      stem: t`After heavy blood loss, until treatment begins, the body holds on to water mainly by`,
      verify: { kind: "value", inputs: {  }, params: { q: "blood_loss" } },
      options: [
        { key: "A", text: t`releasing both ADH and renin, so less urine is passed`, correct: true, value: "adh_and_renin" },
        { key: "B", text: t`stopping ADH, so more urine is passed`, correct: false, misconceptionId: "C05-M13", value: "adh_inhibited" },
        { key: "C", text: t`releasing renin only; ADH plays no part`, correct: false, misconceptionId: "C05-M14", value: "renin_only" },
        { key: "D", text: t`releasing ADH only; the kidney's JGA plays no part`, correct: false, misconceptionId: "C05-M15", value: "adh_only" },
      ],
      solution: {
        steps: [
          t`ADH saves water; renin starts the RAAS.`,
          t`Both ADH and renin.`,
        ],
      },
    },
  ],
};
