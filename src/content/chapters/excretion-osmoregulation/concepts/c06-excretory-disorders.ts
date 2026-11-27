import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`When both kidneys fail, urea builds up in the blood. How can a person stay alive?`,
    reveal: t`By dialysis, which filters the blood outside the body, or by a kidney transplant.`,
  },
  explanation: {
    intuition: [
      t`Kidney failure lets wastes such as urea build up in the blood.`,
      t`Stones can form anywhere in the urinary tract.`,
      t`Other organs help: the lungs breathe out CO₂, water vapour and volatile substances.`,
    ],
    formal: [
      {
        title: "Disorders",
        points: [
          t`**Uremia**: blood urea rises above 0.05%; normal is 0.01–0.03%.`,
          t`**Urolithiasis**: kidney stones (renal calculi) of calcium oxalate or phosphate, struvite, uric acid or cystine.`,
          t`Struvite stones follow infection by urea-splitting bacteria; uric acid stones, too little water or a high-protein diet.`,
        ],
      },
      {
        title: "Dialysis and transplant",
        points: [
          t`Haemodialysis is needed when renal function falls below 5–7%.`,
          t`Blood passes through cellophane in isosmotic **dialysate**; **heparin** prevents clotting.`,
          t`Dialysis cannot secrete erythropoietin, renin or calcitriol; a **transplant** restores them, with immunosuppressants.`,
        ],
      },
    ],
    worked: {
      prompt: t`In haemodialysis, why does urea leave the blood while normal salts stay?`,
      steps: [
        t`The dialysate is isosmotic to normal plasma.`,
        t`Urea is absent from the dialysate, so it moves out of the blood.`,
      ],
      answer: t`Urea is absent from the dialysate; salts are balanced.`,
    },
    visualSpec: t`A haemodialysis loop: arm, blood pump, dialyser with dialysate, and clean blood back to a vein.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says urea rises in blood.",
      remediation: "That is uremia.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says the kidneys stop filtering.",
      remediation: "That is renal failure.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says it is only pain.",
      remediation: "Pain is a symptom; the condition is stones.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks urolithiasis.",
      remediation: "Urolithiasis is kidney stones.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks micturition.",
      remediation: "Micturition is urination.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks diabetes insipidus.",
      remediation: "That is dilute urine from lack of ADH.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Says heparin removes urea.",
      remediation: "Urea passes into the dialysate.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says heparin balances osmosis.",
      remediation: "The dialysate is made isosmotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says heparin pumps blood.",
      remediation: "A blood pump does that.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Says dialysis cannot remove urea.",
      remediation: "Wastes do pass into the dialysate.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks immunosuppressants.",
      remediation: "Those follow a transplant.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks the donor kidney.",
      remediation: "A donor kidney is the transplant.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks kidneys.",
      remediation: "Volatile substances leave by the lungs.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Blames food in the mouth.",
      remediation: "The smell is in exhaled air, from the lungs.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks sweat glands.",
      remediation: "The book names the lungs for volatile substances.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q2(A)" },
      stem: t`Mr. Shaikh has urolithiasis. In simple words, this means`,
      verify: { kind: "value", inputs: {  }, params: { q: "urolithiasis" } },
      options: [
        { key: "A", text: t`urea has risen in his blood`, correct: false, misconceptionId: "C06-M1", value: "urea_blood" },
        { key: "B", text: t`his kidneys have stopped filtering blood`, correct: false, misconceptionId: "C06-M2", value: "renal_failure" },
        { key: "C", text: t`he only feels pain while passing urine`, correct: false, misconceptionId: "C06-M3", value: "painful_urination" },
        { key: "D", text: t`stones have formed in his urinary tract`, correct: true, value: "kidney_stones" },
      ],
      solution: {
        steps: [
          t`Urolithiasis means stones in the urinary tract.`,
          t`Stones have formed.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q6" },
      stem: t`A rise of blood urea above 0.05% is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "uremia" } },
      options: [
        { key: "A", text: t`uremia`, correct: true, value: "uremia_t" },
        { key: "B", text: t`urolithiasis`, correct: false, misconceptionId: "C06-M4", value: "urolithiasis_t" },
        { key: "C", text: t`micturition`, correct: false, misconceptionId: "C06-M5", value: "micturition_t" },
        { key: "D", text: t`diabetes insipidus`, correct: false, misconceptionId: "C06-M6", value: "diabetes_insipidus" },
      ],
      solution: {
        steps: [
          t`Normal blood urea is 0.01–0.03%.`,
          t`Above 0.05% is uremia.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q5(E)" },
      stem: t`In haemodialysis, heparin is added to the blood to`,
      verify: { kind: "value", inputs: {  }, params: { q: "heparin" } },
      options: [
        { key: "A", text: t`prevent it from clotting`, correct: true, value: "prevent_clotting" },
        { key: "B", text: t`remove urea from it`, correct: false, misconceptionId: "C06-M7", value: "removes_urea" },
        { key: "C", text: t`make it isosmotic with the dialysate`, correct: false, misconceptionId: "C06-M8", value: "matches_plasma" },
        { key: "D", text: t`pump it through the dialyser`, correct: false, misconceptionId: "C06-M9", value: "pumps_blood" },
      ],
      solution: {
        steps: [
          t`Heparin is an anticoagulant.`,
          t`It prevents clotting.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q3(A)" },
      stem: t`John must choose between dialysis and a kidney transplant. Dialysis is only a holding measure because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "holding" } },
      options: [
        { key: "A", text: t`needs a donor's kidney`, correct: false, misconceptionId: "C06-M12", value: "needs_donor" },
        { key: "B", text: t`cannot take over the kidney's secretion of erythropoietin, renin and calcitriol`, correct: true, value: "no_hormones" },
        { key: "C", text: t`cannot remove urea from the blood`, correct: false, misconceptionId: "C06-M10", value: "no_urea_removal" },
        { key: "D", text: t`needs immunosuppressants for life`, correct: false, misconceptionId: "C06-M11", value: "needs_immunosuppressants" },
      ],
      solution: {
        steps: [
          t`Dialysis only filters the blood.`,
          t`It cannot secrete erythropoietin, renin and calcitriol.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/excretion-11-bio/Ex Q2(G)" },
      stem: t`We get bad breath after eating garlic or raw onion because their volatile substances are eliminated through the`,
      verify: { kind: "value", inputs: {  }, params: { q: "garlic" } },
      options: [
        { key: "A", text: t`lungs`, correct: true, value: "lungs_t" },
        { key: "B", text: t`kidneys`, correct: false, misconceptionId: "C06-M13", value: "kidneys_t" },
        { key: "C", text: t`food left in the mouth`, correct: false, misconceptionId: "C06-M14", value: "mouth_food" },
        { key: "D", text: t`sweat glands`, correct: false, misconceptionId: "C06-M15", value: "sweat_glands" },
      ],
      solution: {
        steps: [
          t`Volatile substances leave with exhaled air.`,
          t`Lungs.`,
        ],
      },
    },
  ],
};
