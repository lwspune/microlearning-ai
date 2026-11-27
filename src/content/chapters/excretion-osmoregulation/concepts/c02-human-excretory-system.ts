import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Your kidneys sit high in the back, behind the lining of the abdomen. What is inside them?`,
    reveal: t`Many tiny tubes, the nephrons, which filter the blood and make urine.`,
  },
  explanation: {
    intuition: [
      t`The system has two kidneys, two ureters, a urinary bladder and a urethra.`,
      t`The kidney has an outer **cortex** and an inner **medulla** of pyramids.`,
      t`The **nephron** is the structural and functional unit of the kidney.`,
    ],
    formal: [
      {
        title: "Kidney structure",
        points: [
          t`Kidneys are **retroperitoneal**: behind the peritoneum, from the 12th thoracic to the 3rd lumbar vertebra.`,
          t`The **cortex** holds Malpighian bodies and convoluted tubules; the medulla's pyramids hold loops of Henle and collecting ducts.`,
          t`A papilla opens into a **minor calyx**; calyces form the pelvis, which continues as the ureter.`,
        ],
      },
      {
        title: "The nephron",
        points: [
          t`A **Malpighian body** is a glomerulus inside Bowman's capsule; its visceral wall is of **podocytes**.`,
          t`The neck is ciliated; the **PCT** has cuboidal cells with a brush border of microvilli.`,
          t`Next come the loop of Henle, the DCT and the collecting duct.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why are the kidneys called retroperitoneal?`,
      steps: [
        t`'Retro' means behind.`,
        t`The kidneys lie behind the peritoneum, held by the renal fascia.`,
      ],
      answer: t`They lie behind the peritoneum.`,
    },
    visualSpec: t`A nephron drawn across the cortex–medulla line: capsule, PCT, loop of Henle, DCT and collecting duct.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks medulla.",
      remediation: "The medulla holds loops of Henle and collecting ducts.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks pelvis.",
      remediation: "The pelvis is the funnel that collects urine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks pyramids.",
      remediation: "Pyramids make up the medulla.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks ciliated cells.",
      remediation: "Ciliated cells line the neck.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks squamous cells.",
      remediation: "Squamous cells line the descending limb.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks columnar cells.",
      remediation: "PCT cells are cuboidal, with a brush border.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says it joins the pelvis to the ureter.",
      remediation: "The pelvis itself continues as the ureter.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Places it in the cortex.",
      remediation: "Calyces lie in the renal sinus, beside the medulla.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says it receives a column of Bertini.",
      remediation: "Columns of Bertini are cortex between pyramids.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks Malpighian body.",
      remediation: "The Malpighian body is the kidney's renal corpuscle.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks glomerulus.",
      remediation: "The glomerulus sits inside Bowman's capsule.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks loop of Henle.",
      remediation: "Every nephron has a loop of Henle.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks urine formation.",
      remediation: "Nephrons form urine; micturition expels it.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks uremia.",
      remediation: "Uremia is blood urea above 0.05%.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks urolithiasis.",
      remediation: "Urolithiasis is kidney stones.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(P)" },
      stem: t`In the kidney, Bowman's capsule is located in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "bowman" } },
      options: [
        { key: "A", text: t`cortex`, correct: true, value: "cortex_t" },
        { key: "B", text: t`medulla`, correct: false, misconceptionId: "C02-M1", value: "medulla_t" },
        { key: "C", text: t`pelvis`, correct: false, misconceptionId: "C02-M2", value: "pelvis_t" },
        { key: "D", text: t`pyramids`, correct: false, misconceptionId: "C02-M3", value: "pyramids_t" },
      ],
      solution: {
        steps: [
          t`The cortex holds the Malpighian bodies.`,
          t`Cortex.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(C)" },
      stem: t`Visceral layer : Podocytes :: PCT : ______`,
      verify: { kind: "value", inputs: {  }, params: { q: "pct_cells" } },
      options: [
        { key: "A", text: t`Ciliated cells`, correct: false, misconceptionId: "C02-M4", value: "ciliated_cells" },
        { key: "B", text: t`Squamous cells`, correct: false, misconceptionId: "C02-M5", value: "squamous_cells" },
        { key: "C", text: t`Columnar cells`, correct: false, misconceptionId: "C02-M6", value: "columnar_cells" },
        { key: "D", text: t`Cells with brush border`, correct: true, value: "brush_border" },
      ],
      solution: {
        steps: [
          t`Podocytes are the visceral layer's special cells.`,
          t`The PCT's special cells have a brush border.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(J)" },
      stem: t`The minor calyx`,
      verify: { kind: "value", inputs: {  }, params: { q: "calyx" } },
      options: [
        { key: "A", text: t`receives a column of Bertini`, correct: false, misconceptionId: "C02-M9", value: "receives_bertini" },
        { key: "B", text: t`collects urine from a renal papilla`, correct: true, value: "collects_urine" },
        { key: "C", text: t`connects the pelvis to the ureter`, correct: false, misconceptionId: "C02-M7", value: "joins_ureter" },
        { key: "D", text: t`is present in the cortex`, correct: false, misconceptionId: "C02-M8", value: "in_cortex" },
      ],
      solution: {
        steps: [
          t`Each papilla opens into a minor calyx.`,
          t`It collects urine.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(K)" },
      stem: t`Which one of these is not a part of the human kidney?`,
      verify: { kind: "value", inputs: {  }, params: { q: "not_part" } },
      options: [
        { key: "A", text: t`Loop of Henle`, correct: false, misconceptionId: "C02-M12", value: "loop_henle" },
        { key: "B", text: t`Malpighian tubule`, correct: true, value: "malpighian_tubule" },
        { key: "C", text: t`Malpighian body`, correct: false, misconceptionId: "C02-M10", value: "malpighian_body" },
        { key: "D", text: t`Glomerulus`, correct: false, misconceptionId: "C02-M11", value: "glomerulus_t" },
      ],
      solution: {
        steps: [
          t`Malpighian tubules are insect excretory organs.`,
          t`Malpighian tubule.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q1(F)" },
      stem: t`Micturition is`,
      verify: { kind: "value", inputs: {  }, params: { q: "micturition" } },
      options: [
        { key: "A", text: t`urolithiasis`, correct: false, misconceptionId: "C02-M15", value: "urolithiasis_t" },
        { key: "B", text: t`urination`, correct: true, value: "urination_t" },
        { key: "C", text: t`urine formation`, correct: false, misconceptionId: "C02-M13", value: "urine_formation" },
        { key: "D", text: t`uremia`, correct: false, misconceptionId: "C02-M14", value: "uremia_t" },
      ],
      solution: {
        steps: [
          t`Micturition expels urine through the urethra.`,
          t`Urination.`,
        ],
      },
    },
  ],
};
