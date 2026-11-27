import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`The glomerulus filters about 125 ml of plasma every minute. Why is there so much less urine?`,
    reveal: t`The tubules take most of it back by reabsorption; urine is what remains.`,
  },
  explanation: {
    intuition: [
      t`Urine forms in three steps: ultrafiltration, reabsorption and secretion.`,
      t`Filtration is not choosy; reabsorption takes back what is useful.`,
      t`Secretion adds extra wastes to the tubular fluid.`,
    ],
    formal: [
      {
        title: "Ultrafiltration",
        points: [
          t`The afferent arteriole is wider than the efferent, so glomerular pressure is high.`,
          t`Plasma minus proteins passes through pores and slits: **deproteinised plasma**, about 125 ml per minute.`,
          t`EFP is GHP minus the opposing pressures: $55 - (30 + 15) = 10$ mm Hg.`,
        ],
      },
      {
        title: "Reabsorption and secretion",
        points: [
          t`The **PCT**, with its brush border, actively reabsorbs glucose, amino acids, vitamin C and ions.`,
          t`The loop of Henle is a site of reabsorption of water and NaCl.`,
          t`The **DCT** and collecting duct secrete creatinine, K⁺ and H⁺.`,
        ],
      },
    ],
    worked: {
      prompt: t`Normal GHP is 55 mm Hg, colloidal osmotic pressure 30 and capsular pressure 15. Find the EFP.`,
      steps: [
        t`Opposing pressure: $30 + 15 = 45$ mm Hg.`,
        t`EFP: $55 - 45 = 10$ mm Hg.`,
      ],
      answer: t`10 mm Hg`,
    },
    visualSpec: t`A nephron with three arrows: filtration at the capsule, reabsorption at the PCT, secretion at the DCT.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks glomerular capillaries.",
      remediation: "The capillaries still hold blood with its proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks descending limb.",
      remediation: "By then the PCT has changed the filtrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks ascending limb.",
      remediation: "By then reabsorption has changed the filtrate.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks loop of Henle.",
      remediation: "The loop mainly handles water and salts.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks DCT.",
      remediation: "The DCT mainly handles water, salts and secretion.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks collecting tubule.",
      remediation: "It mainly handles water.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Gives litres per hour.",
      remediation: "Multiply by 24 hours as well.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Skips minutes to hours.",
      remediation: "A day is 60 × 24 minutes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Leaves it in ml.",
      remediation: "Divide by 1000 for litres.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Adds EFP to GHP.",
      remediation: "Opposing pressure is GHP minus EFP.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Takes the EFP as the answer.",
      remediation: "EFP is what is left after the opposition.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Halves the difference.",
      remediation: "The question asks for both pressures together.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks loop of Henle.",
      remediation: "The loop is a site of reabsorption.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks Bowman's capsule.",
      remediation: "The capsule receives the filtrate: that is ultrafiltration.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks urinary bladder.",
      remediation: "The bladder only stores urine.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(D)" },
      stem: t`Deproteinised plasma is found in`,
      verify: { kind: "value", inputs: {  }, params: { q: "deproteinised" } },
      options: [
        { key: "A", text: t`the descending limb`, correct: false, misconceptionId: "C03-M2", value: "descending_limb" },
        { key: "B", text: t`the ascending limb`, correct: false, misconceptionId: "C03-M3", value: "ascending_limb" },
        { key: "C", text: t`Bowman's capsule`, correct: true, value: "bowman_capsule" },
        { key: "D", text: t`glomerular capillaries`, correct: false, misconceptionId: "C03-M1", value: "glomerular_capillaries" },
      ],
      solution: {
        steps: [
          t`Ultrafiltrate enters the capsular space.`,
          t`Bowman's capsule.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(O)" },
      stem: t`The part of the nephron that reabsorbs glucose and amino acids is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "glucose" } },
      options: [
        { key: "A", text: t`DCT`, correct: false, misconceptionId: "C03-M5", value: "dct_t" },
        { key: "B", text: t`collecting tubule`, correct: false, misconceptionId: "C03-M6", value: "collecting_tubule" },
        { key: "C", text: t`proximal convoluted tubule`, correct: true, value: "proximal_tubule" },
        { key: "D", text: t`loop of Henle`, correct: false, misconceptionId: "C03-M4", value: "henle_loop" },
      ],
      solution: {
        steps: [
          t`Brush-border cells reabsorb glucose and amino acids.`,
          t`The PCT.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Glomerular filtrate forms at about 125 ml per minute. About how many litres of filtrate form in a day?`,
      verify: { kind: "value", inputs: { r: "125" }, params: { q: "per_day" } },
      options: [
        { key: "A", text: t`$\frac{15}{2}$`, correct: false, misconceptionId: "C03-M7", value: "15/2" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C03-M8", value: "3" },
        { key: "C", text: t`$180000$`, correct: false, misconceptionId: "C03-M9", value: "180000" },
        { key: "D", text: t`$180$`, correct: true, value: "180" },
      ],
      solution: {
        steps: [
          t`$125 \times 60 \times 24 = 180000$ ml.`,
          t`That is 180 litres.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q2(C)" },
      stem: t`Effective filtration pressure is 20 mm Hg and glomerular hydrostatic pressure is 70 mm Hg. What is the total opposing pressure, in mm Hg?`,
      verify: { kind: "value", inputs: { g: "70", e: "20" }, params: { q: "opposing" } },
      options: [
        { key: "A", text: t`$20$`, correct: false, misconceptionId: "C03-M11", value: "20" },
        { key: "B", text: t`$25$`, correct: false, misconceptionId: "C03-M12", value: "25" },
        { key: "C", text: t`$50$`, correct: true, value: "50" },
        { key: "D", text: t`$90$`, correct: false, misconceptionId: "C03-M10", value: "90" },
      ],
      solution: {
        steps: [
          t`Opposing $= 70 - 20$.`,
          t`50 mm Hg.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(I)" },
      stem: t`Creatinine, K⁺ and H⁺ are actively secreted into the tubular fluid mainly in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "secretion" } },
      options: [
        { key: "A", text: t`DCT and collecting duct`, correct: true, value: "dct_collecting" },
        { key: "B", text: t`loop of Henle`, correct: false, misconceptionId: "C03-M13", value: "henle_loop" },
        { key: "C", text: t`Bowman's capsule`, correct: false, misconceptionId: "C03-M14", value: "bowman_capsule" },
        { key: "D", text: t`urinary bladder`, correct: false, misconceptionId: "C03-M15", value: "urinary_bladder" },
      ],
      solution: {
        steps: [
          t`The DCT and collecting duct secrete these.`,
          t`DCT and collecting duct.`,
        ],
      },
    },
  ],
};
