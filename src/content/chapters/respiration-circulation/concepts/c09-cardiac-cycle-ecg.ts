import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A heart removed for transplant keeps beating for a while in a dish, with no nerves attached. How?`,
    reveal: t`The heart makes its own beat: a patch of special muscle, the SA node, fires on its own.`,
  },
  explanation: {
    intuition: [
      t`The heart is **myogenic**: its beat starts in its own **nodal tissue**.`,
      t`The **SA node** is the pacemaker; impulses pass via the AV node, bundle of His and Purkinje fibres.`,
      t`One beat is one **cardiac cycle**.`,
    ],
    formal: [
      {
        title: "Cardiac cycle (0.8 s)",
        points: [
          t`Atrial systole **0.1 s**.`,
          t`Ventricular systole **0.3 s**.`,
          t`Joint diastole **0.4 s**. Cardiac output = stroke volume × heart rate, about 70 ml × 72.`,
        ],
      },
      {
        title: "ECG",
        points: [
          t`**P wave**: atrial depolarization.`,
          t`**QRS complex**: ventricular depolarization.`,
          t`**T wave**: ventricular repolarization.`,
        ],
      },
    ],
    worked: {
      prompt: t`A heart beats 72 times a minute with stroke volume 70 ml. Find the cardiac output.`,
      steps: [
        t`CO = SV × HR.`,
        t`$70 \times 72 = 5040$ ml/min.`,
      ],
      answer: t`About 5 litres a minute`,
    },
    visualSpec: t`An ECG trace with P, QRS and T labelled above a bar of the 0.8 s cycle.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Picks AV node.",
      remediation: "The AV node is the pace setter.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Picks bundle of His.",
      remediation: "It only conducts.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Picks Purkinje fibres.",
      remediation: "They only conduct.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Picks QRS.",
      remediation: "QRS is ventricular.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Picks Q wave.",
      remediation: "Q is part of QRS.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Picks T wave.",
      remediation: "T is ventricular repolarization.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Subtracts only atrial systole.",
      remediation: "Diastole must go too.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Subtracts only diastole.",
      remediation: "Atrial systole must go too.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Adds the two.",
      remediation: "Subtract both from 0.8.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Adds SV and HR.",
      remediation: "Multiply them.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Multiplies by 60.",
      remediation: "Use the heart rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Counts both ventricles.",
      remediation: "Output is per ventricle.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Says nerves start it.",
      remediation: "Nerves only adjust the rate.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Says hormones start it.",
      remediation: "Hormones only adjust it.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Says skeletal muscle.",
      remediation: "It is cardiac muscle.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(9)" },
      stem: t`The pacemaker of the heart is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "pacemaker" } },
      options: [
        { key: "A", text: t`bundle of His`, correct: false, misconceptionId: "C09-M2", value: "his_bundle" },
        { key: "B", text: t`Purkinje fibres`, correct: false, misconceptionId: "C09-M3", value: "purkinje_fibres" },
        { key: "C", text: t`SA node`, correct: true, value: "sa_node" },
        { key: "D", text: t`AV node`, correct: false, misconceptionId: "C09-M1", value: "av_node" },
      ],
      solution: {
        steps: [
          t`It fires the beat.`,
          t`SA node.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q1(14)" },
      stem: t`Atrial depolarization appears on the ECG as the`,
      verify: { kind: "value", inputs: {  }, params: { q: "p_wave" } },
      options: [
        { key: "A", text: t`P wave`, correct: true, value: "p_wave_e" },
        { key: "B", text: t`QRS complex`, correct: false, misconceptionId: "C09-M4", value: "qrs_e" },
        { key: "C", text: t`Q wave`, correct: false, misconceptionId: "C09-M5", value: "q_wave_e" },
        { key: "D", text: t`T wave`, correct: false, misconceptionId: "C09-M6", value: "t_wave_e" },
      ],
      solution: {
        steps: [
          t`Atria depolarize first.`,
          t`P wave.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(6)" },
      stem: t`A cardiac cycle takes 0.8 s. Atrial systole takes 0.1 s and joint diastole 0.4 s. How long is ventricular systole?`,
      verify: { kind: "value", inputs: {  }, params: { q: "systole" } },
      options: [
        { key: "A", text: t`0.7 s`, correct: false, misconceptionId: "C09-M7", value: "t07" },
        { key: "B", text: t`0.4 s`, correct: false, misconceptionId: "C09-M8", value: "t04" },
        { key: "C", text: t`0.5 s`, correct: false, misconceptionId: "C09-M9", value: "t05" },
        { key: "D", text: t`0.3 s`, correct: true, value: "t03" },
      ],
      solution: {
        steps: [
          t`$0.8 - 0.1 - 0.4$.`,
          t`0.3 s.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(4)" },
      stem: t`Each ventricle pumps 70 ml per beat, and the heart beats 75 times a minute. What is the cardiac output, in ml per minute?`,
      verify: { kind: "value", inputs: { s: "70", h: "75" }, params: { q: "output" } },
      options: [
        { key: "A", text: t`$5250$`, correct: true, value: "5250" },
        { key: "B", text: t`$145$`, correct: false, misconceptionId: "C09-M10", value: "145" },
        { key: "C", text: t`$4200$`, correct: false, misconceptionId: "C09-M11", value: "4200" },
        { key: "D", text: t`$10500$`, correct: false, misconceptionId: "C09-M12", value: "10500" },
      ],
      solution: {
        steps: [
          t`CO = SV × HR.`,
          t`$70 \times 75 = 5250$ ml/min.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q5(2)" },
      stem: t`The human heart is called myogenic because`,
      verify: { kind: "value", inputs: {  }, params: { q: "myogenic" } },
      options: [
        { key: "A", text: t`hormones start each beat`, correct: false, misconceptionId: "C09-M14", value: "hormone_driven" },
        { key: "B", text: t`it is made of skeletal muscle`, correct: false, misconceptionId: "C09-M15", value: "skeletal_muscle" },
        { key: "C", text: t`its beat starts in its own nodal tissue`, correct: true, value: "own_nodal" },
        { key: "D", text: t`nerves start each beat`, correct: false, misconceptionId: "C09-M13", value: "nerve_driven" },
      ],
      solution: {
        steps: [
          t`The beat starts in nodal tissue.`,
          t`Its own nodal tissue.`,
        ],
      },
    },
  ],
};
