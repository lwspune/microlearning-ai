import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Press a finger on your wrist and you feel a beat. Press on a blue vein and you feel nothing. Why?`,
    reveal: t`The beat is a pressure wave in arteries from each squeeze of the heart. Veins carry blood at low pressure, so no wave.`,
  },
  explanation: {
    intuition: [
      t`**Arteries** carry blood from the heart; **veins** carry it back; **capillaries** join them.`,
      t`**Blood pressure** is the push of blood on vessel walls.`,
      t`It is measured in arteries.`,
    ],
    formal: [
      {
        title: "Vessels",
        points: [
          t`Arteries: thick tunica media of muscle and elastic fibres, for **high pressure**; they show the **pulse**.`,
          t`Veins: thinner walls, low pressure, **valves**; leg muscles squeeze blood upward.`,
          t`Capillaries: a single layer of cells.`,
        ],
      },
      {
        title: "Blood pressure",
        points: [
          t`Normal: **120/80 mmHg**: systolic over diastolic.`,
          t`It rises with cardiac output and peripheral resistance.`,
          t`**Angina pectoris**: chest pain from reduced blood supply to heart muscle.`,
        ],
      },
    ],
    worked: {
      prompt: t`A reading of 150/95 mmHg is taken. What does it suggest?`,
      steps: [
        t`Normal is 120/80.`,
        t`Both numbers are high.`,
      ],
      answer: t`High blood pressure`,
    },
    visualSpec: t`Cross-sections of an artery, a vein with a valve, and a capillary.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Picks a vein.",
      remediation: "Veins have low pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Picks capillaries.",
      remediation: "Capillaries are too thin.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Picks lymph vessels.",
      remediation: "Lymph flows slowly.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Says high pressure.",
      remediation: "Vein pressure is low.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Says pumping walls.",
      remediation: "Vein walls are thin.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Says gravity.",
      remediation: "Gravity pulls blood down.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Reverses the numbers.",
      remediation: "Systolic comes first.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Picks 140/90.",
      remediation: "That is high.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Picks 100/60.",
      remediation: "That is low.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Says low pressure.",
      remediation: "Arteries carry high pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Says more blood.",
      remediation: "Veins hold more blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Says deoxygenated.",
      remediation: "Most arteries carry oxygenated blood.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Says muscle death.",
      remediation: "That is a heart attack.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Says high blood pressure.",
      remediation: "That is hypertension.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Says pericarditis.",
      remediation: "Angina is about blood supply.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(3)" },
      stem: t`A pulse can be felt at the wrist because it lies over`,
      verify: { kind: "value", inputs: {  }, params: { q: "pulse" } },
      options: [
        { key: "A", text: t`a vein`, correct: false, misconceptionId: "C10-M1", value: "veins_v" },
        { key: "B", text: t`capillaries`, correct: false, misconceptionId: "C10-M2", value: "capillaries_v" },
        { key: "C", text: t`lymph vessels`, correct: false, misconceptionId: "C10-M3", value: "lymph_vessels" },
        { key: "D", text: t`an artery`, correct: true, value: "arteries_v" },
      ],
      solution: {
        steps: [
          t`High-pressure pulsing vessels.`,
          t`An artery.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(7)" },
      stem: t`Blood in the large veins of the legs keeps moving up to the heart because of`,
      verify: { kind: "value", inputs: {  }, params: { q: "legs" } },
      options: [
        { key: "A", text: t`valves in the veins and squeezing by leg muscles`, correct: true, value: "valves_muscles" },
        { key: "B", text: t`high blood pressure in the veins`, correct: false, misconceptionId: "C10-M4", value: "high_vein_pressure" },
        { key: "C", text: t`thick muscular vein walls pumping`, correct: false, misconceptionId: "C10-M5", value: "pumping_walls" },
        { key: "D", text: t`gravity`, correct: false, misconceptionId: "C10-M6", value: "gravity_v" },
      ],
      solution: {
        steps: [
          t`Valves stop back flow.`,
          t`Valves and muscle squeeze.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(9)" },
      stem: t`The normal blood pressure of an adult is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bp" } },
      options: [
        { key: "A", text: t`100/60 mmHg`, correct: false, misconceptionId: "C10-M9", value: "bp_100_60" },
        { key: "B", text: t`120/80 mmHg`, correct: true, value: "bp_120_80" },
        { key: "C", text: t`80/120 mmHg`, correct: false, misconceptionId: "C10-M7", value: "bp_80_120" },
        { key: "D", text: t`140/90 mmHg`, correct: false, misconceptionId: "C10-M8", value: "bp_140_90" },
      ],
      solution: {
        steps: [
          t`Systolic/diastolic.`,
          t`120/80 mmHg.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q5(4)" },
      stem: t`Arteries have thicker walls than veins because`,
      verify: { kind: "value", inputs: {  }, params: { q: "thicker" } },
      options: [
        { key: "A", text: t`they carry more blood`, correct: false, misconceptionId: "C10-M11", value: "carry_more" },
        { key: "B", text: t`they carry deoxygenated blood`, correct: false, misconceptionId: "C10-M12", value: "deoxygenated_v" },
        { key: "C", text: t`they carry blood under high pressure`, correct: true, value: "high_pressure_v" },
        { key: "D", text: t`they carry blood under low pressure`, correct: false, misconceptionId: "C10-M10", value: "low_pressure_v" },
      ],
      solution: {
        steps: [
          t`They take the heart's push.`,
          t`High pressure.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2026 Q. 9" },
      stem: t`Angina pectoris is`,
      verify: { kind: "value", inputs: {  }, params: { q: "angina" } },
      options: [
        { key: "A", text: t`chest pain from reduced blood supply to the heart muscle`, correct: true, value: "chest_pain" },
        { key: "B", text: t`death of heart muscle from a complete block`, correct: false, misconceptionId: "C10-M13", value: "muscle_death" },
        { key: "C", text: t`high blood pressure`, correct: false, misconceptionId: "C10-M14", value: "high_bp" },
        { key: "D", text: t`inflammation of the pericardium`, correct: false, misconceptionId: "C10-M15", value: "pericarditis_t" },
      ],
      solution: {
        steps: [
          t`Reduced blood to heart muscle.`,
          t`Chest pain.`,
        ],
      },
    },
  ],
};
